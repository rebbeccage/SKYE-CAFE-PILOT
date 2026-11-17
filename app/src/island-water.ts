import * as T from 'three';
import {SEA_LEVEL,createDepthTexture,terrainHeight} from './island-geography';
import type {IslandUniforms} from './island-surface';
export const waves=[{length:1.2,amp:.03,angle:.26},{length:2.8,amp:.08,angle:.34},{length:6,amp:.18,angle:.18},{length:14,amp:.35,angle:.30}];
export function sampleWave(x:number,z:number,t:number,amplitude=1){let y=0;for(const w of waves){const k=Math.PI*2/w.length,phase=k*(x*Math.cos(w.angle)+z*Math.sin(w.angle))-Math.sqrt(9.81*k)*t;y+=Math.sin(phase)*w.amp;}return y*amplitude;}
export function createIslandWater(scene:T.Scene,renderer:T.WebGLRenderer,u:IslandUniforms,mobile:boolean){
 // Dense near field and progressively wider far-field cells share vertices at every seam.
 const axis=[-1200,-700,-400,-240,-160];const cells=mobile?128:224;for(let i=0;i<=cells;i++)axis.push(-100+i*200/cells);axis.push(160,240,400,700,1200);
 const positions:number[]=[],indices:number[]=[];for(const z of axis)for(const x of axis)positions.push(x,0,z);for(let z=0;z<axis.length-1;z++)for(let x=0;x<axis.length-1;x++){const a=z*axis.length+x,b=a+1,c=a+axis.length,d=c+1;indices.push(a,c,b,b,c,d);}
 const near=new T.BufferGeometry();near.setAttribute('position',new T.Float32BufferAttribute(positions,3));near.setIndex(indices);near.computeVertexNormals();
 const params={TideLevel:0,WaveAmplitude:1,FoamDensity:.6,CausticsStrength:mobile?0:.5,ShoreFog:.12};
 const target=new T.WebGLRenderTarget(512,512,{depthBuffer:true,type:T.HalfFloatType});target.depthTexture=new T.DepthTexture(512,512,T.UnsignedIntType);target.texture.colorSpace=T.LinearSRGBColorSpace;
 const probe=new T.WebGLRenderTarget(256,256,{type:T.HalfFloatType});const reflectionCamera=new T.PerspectiveCamera();let probeCamera:T.Camera=reflectionCamera;
 const uniforms={...u,waterLevel:{value:SEA_LEVEL},waveScale:{value:1},foamDensity:{value:.6},shoreFog:{value:.12},depthMap:{value:createDepthTexture()},sceneColor:{value:target.texture},sceneDepth:{value:target.depthTexture},reflectionMap:{value:probe.texture},viewProjection:{value:new T.Matrix4()},inverseProjection:{value:new T.Matrix4()},inverseView:{value:new T.Matrix4()},probeMatrix:{value:new T.Matrix4()},desktop:{value:mobile?0:1},captureReady:{value:0}};
 const waveGLSL=`
 float wave(vec2 p,float k,float a,float dir,float t){return sin(k*dot(p,vec2(cos(dir),sin(dir)))-sqrt(9.81*k)*t)*a;}
 float heightAt(vec2 p){float depth=texture2D(depthMap,p/200.+.5).r*10.-2.;float shallow=smoothstep(0.,1.7,depth);return (wave(p,5.23599,.03,.26,time)+wave(p,2.24399,.08,.34,time)+wave(p,1.0472,.18,.18,time)+wave(p,.448799,.35,.30,time))*waveScale*shallow;}
 `;
 const mat=new T.ShaderMaterial({transparent:true,depthWrite:true,side:T.DoubleSide,uniforms,toneMapped:true,
 vertexShader:`uniform float time,waterLevel,waveScale;uniform sampler2D depthMap;varying vec3 waterWorld;varying vec2 oceanUV;${waveGLSL}
 void main(){vec3 p=position;p.y=waterLevel+heightAt(p.xz);waterWorld=p;oceanUV=p.xz/200.+.5;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
 fragmentShader:`uniform float time,rain,snow,dusk,waterLevel,waveScale,foamDensity,shoreFog,desktop,captureReady;uniform sampler2D depthMap,sceneColor,sceneDepth,reflectionMap;uniform mat4 viewProjection,inverseProjection,inverseView,probeMatrix;varying vec3 waterWorld;varying vec2 oceanUV;${waveGLSL}
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
 float viewDepth(vec2 uv,float d){vec4 p=inverseProjection*vec4(uv*2.-1.,d*2.-1.,1.);return -p.z/p.w;}
 vec3 linearColor(vec3 srgb){return pow(srgb,vec3(2.2));}
 void main(){float depth=texture2D(depthMap,oceanUV).r*10.-2.+waterLevel-(${SEA_LEVEL});if(depth<.008)discard;
 vec2 p=waterWorld.xz;float eps=.06;vec2 warp=vec2(sin(p.y*.51+p.x*.07),cos(p.x*.34-p.y*.12))*.65;vec2 pn=p+warp;vec3 n=normalize(vec3((heightAt(pn-vec2(eps,0.))-heightAt(pn+vec2(eps,0.)))*.38,eps*2.,(heightAt(pn-vec2(0.,eps))-heightAt(pn+vec2(0.,eps)))*.38));
 float micro=sin(p.x*25.+p.y*12.+time*1.8)*.028*(1.+rain);n=normalize(n+vec3(micro,0.,-micro*.7));
 vec3 shallow=linearColor(vec3(.663,.788,.769)),deep=linearColor(vec3(.306,.478,.612));vec3 col=mix(shallow,deep,smoothstep(.2,5.,depth));col=mix(col,linearColor(vec3(.557,.620,.612)),snow*.9);col=mix(col,linearColor(vec3(.37,.48,.51)),rain*.38);float sunset=dusk*(1.-rain)*(1.-snow);col=mix(col,linearColor(vec3(.65,.57,.61)),sunset*.36);
 vec4 clip=viewProjection*vec4(waterWorld,1.);vec2 screen=clip.xy/clip.w*.5+.5;vec2 refractUV=clamp(screen+n.xz*.0035*min(depth,2.),vec2(.001),vec2(.999));vec3 bottom=texture2D(sceneColor,refractUV).rgb;
 col=mix(col,bottom,(1.-smoothstep(0.,2.,depth))*.48*captureReady);
 vec3 eye=normalize(cameraPosition-waterWorld),direction=reflect(-eye,n);float fresnel=.025+.14*pow(1.-max(dot(eye,n),0.),3.);vec3 reflected=linearColor(mix(vec3(.84,.88,.87),vec3(.68,.77,.82),max(direction.y,0.)));
 if(desktop>.5&&captureReady>.5){for(int i=0;i<22;i++){float distance=.35+float(i)*1.14;vec3 ray=waterWorld+direction*distance;vec4 c=viewProjection*vec4(ray,1.);vec2 uv=c.xy/c.w*.5+.5;if(uv.x<.005||uv.x>.995||uv.y<.005||uv.y>.995)break;float sampled=texture2D(sceneDepth,uv).r;float actual=viewDepth(uv,sampled);float castDepth=-(viewMatrix*vec4(ray,1.)).z;float difference=castDepth-actual;if(difference>0.&&difference<.55&&sampled<.9999){reflected=texture2D(sceneColor,uv).rgb;break;}}}
 else if(captureReady>.5){vec4 pc=probeMatrix*vec4(waterWorld,1.);vec2 uv=pc.xy/pc.w*.5+.5;reflected=texture2D(reflectionMap,clamp(uv+n.xz*.005,vec2(.005),vec2(.995))).rgb;}
 col=mix(col,reflected,fresnel);
 // Wide broken warm reflection, locked to world coordinates and existing waves.
 float eveningPath=exp(-pow((p.x*.55-p.y*.31-2.)/18.,2.));float eveningRipple=.65+.35*noise(p*vec2(.18,1.7)+n.xz*2.);
 col=mix(col,linearColor(vec3(.88,.69,.57)),sunset*eveningPath*eveningRipple*.38);
 // Four depth-following, interrupted swash lines. No particle foam.
 float bands=0.;for(int i=0;i<4;i++){float level=.055+float(i)*.16+.025*sin(time*.75+float(i));float width=.016+.006*float(i);bands=max(bands,(1.-smoothstep(width,width+.025,abs(depth-level)))*smoothstep(.26,.65,noise(p*.8+time*.04)));}vec3 foam=linearColor(mix(vec3(.94,.94,.89),vec3(.80,.83,.80),rain));col=mix(col,foam,bands*foamDensity*.65);
 // Rain splashes and expanding concentric rings on the actual water surface.
 vec2 cell=floor(p*2.2),local=fract(p*2.2)-.5;float age=fract(time*.7+hash(cell));float ring=1.-smoothstep(.014,.037,abs(length(local)-age*.42));col+=rain*ring*(1.-age)*.085;
 float glint=pow(max(dot(n,normalize(vec3(-.55,1.,.55))),0.),32.);float sunPath=exp(-pow((p.x*.7-p.y*.25-3.)/5.,2.))*smoothstep(.35,.7,noise(p*2.1));col+=linearColor(vec3(.949,.851,.627))*glint*.045*sunPath*(1.-rain)*(1.-snow);
 float foreground=1.-smoothstep(0.,.18,screen.y);col=mix(col,linearColor(vec3(.937,.902,.831)),foreground*shoreFog*.75);
 gl_FragColor=vec4(col,1.);#include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`.replace(';#include',';\n#include')});
 const mesh=new T.Mesh(near,mat);mesh.name='SurfaceOcean — four waves, shoal refraction, SSR';mesh.renderOrder=5;mesh.frustumCulled=false;scene.add(mesh);
 let frame=0,enabled=true;const lastCamera=new T.Matrix4();
 function capture(camera:T.Camera){if(!enabled)return;frame++;const moved=!lastCamera.equals(camera.matrixWorld);if(!moved&&frame%(mobile?8:3)!==0&&uniforms.captureReady.value>0)return;lastCamera.copy(camera.matrixWorld);const previous=renderer.getRenderTarget(),shadow=renderer.shadowMap.autoUpdate;mesh.visible=false;renderer.shadowMap.autoUpdate=false;
 renderer.setRenderTarget(target);renderer.clear();renderer.render(scene,camera);
 if(mobile&&(moved||frame%24===0)){probeCamera=camera.clone();const direction=camera.getWorldDirection(new T.Vector3());probeCamera.position.copy(camera.position);probeCamera.position.y=2*uniforms.waterLevel.value-camera.position.y;direction.y*=-1;probeCamera.up.set(0,-1,0);probeCamera.lookAt(probeCamera.position.clone().add(direction));probeCamera.updateMatrixWorld();uniforms.probeMatrix.value.multiplyMatrices(probeCamera.projectionMatrix,probeCamera.matrixWorldInverse);const clipping=renderer.clippingPlanes;renderer.clippingPlanes=[new T.Plane(new T.Vector3(0,1,0),-uniforms.waterLevel.value)];renderer.setRenderTarget(probe);renderer.clear();renderer.render(scene,probeCamera);renderer.clippingPlanes=clipping;}
 renderer.setRenderTarget(previous);renderer.shadowMap.autoUpdate=shadow;mesh.visible=true;uniforms.captureReady.value=1;
 }
 return {mesh,params,capture,resize(w:number,h:number){target.setSize(Math.max(256,Math.floor(w*(mobile?.35:.55))),Math.max(256,Math.floor(h*(mobile?.35:.55))));probe.setSize(256,256)},surfaceAt(x:number,z:number,t:number){return SEA_LEVEL+params.TideLevel+sampleWave(x,z,t,params.WaveAmplitude*(1-u.snow.value*.5)*T.MathUtils.smoothstep(Math.max(0,SEA_LEVEL-terrainHeight(x,z)),0,1.7));},
 update(t:number,camera:T.Camera,inside:boolean){enabled=!inside;mesh.visible=true;if(inside)uniforms.captureReady.value=0;uniforms.waterLevel.value=SEA_LEVEL+T.MathUtils.clamp(params.TideLevel,-.3,.4);uniforms.waveScale.value=T.MathUtils.clamp(params.WaveAmplitude,0,1.5)*(1-u.snow.value*.5);uniforms.foamDensity.value=T.MathUtils.clamp(params.FoamDensity,0,1);uniforms.shoreFog.value=T.MathUtils.clamp(params.ShoreFog,0,.25);uniforms.viewProjection.value.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);uniforms.inverseProjection.value.copy(camera.projectionMatrixInverse);uniforms.inverseView.value.copy(camera.matrixWorld);},diagnostics:()=>({reflection:mobile?'planar-probe':'screen-space',reflectionLimit:25,depthTexture:512,refraction:true,nearWaves:4,foamBands:4,parameters:{...params},visible:mesh.visible})};
}
