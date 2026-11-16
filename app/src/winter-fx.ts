import * as T from 'three';
export function createWinterFX(scene:T.Scene,probes:T.Vector3[]){
 const count=5000,data=new Float32Array(count*3);for(let i=0;i<count;i++)data.set([(i*.618033989)%1,(i*.754877666)%1,(i*.569840291)%1],i*3);
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(data,3));
 const uniforms={clock:{value:0},eye:{value:new T.Vector3()},emitter:{value:new T.Vector3()},radius:{value:8},wind:{value:new T.Vector2()},viewportHeight:{value:1000},perspective:{value:0},amount:{value:0},lightOn:{value:1},probes:{value:probes}};
 const glowGLSL=`uniform vec3 probes[4];uniform float lightOn;float glow(vec3 p){float g=0.0;for(int i=0;i<4;i++)g=max(g,1.0-smoothstep(0.0,.8,distance(p,probes[i])));return g*lightOn;}`;
 const mat=new T.ShaderMaterial({uniforms,transparent:true,depthWrite:false,vertexShader:`
 uniform float clock,radius,viewportHeight,perspective,amount;uniform vec3 eye,emitter;uniform vec2 wind;${glowGLSL}
 varying float alpha;varying vec3 tint;
 void main(){float angle=position.x*6.2831853;float ring=max(1.8,radius+(position.y-.5)*12.0);vec2 xz=emitter.xz+vec2(cos(angle),sin(angle))*ring;float age=mod(clock+position.z*22.0,22.0);xz+=wind*age*.127+sin(clock*.628318+position.x*20.0)*.12;
 float floorY=.28;if(abs(xz.x)<2.84&&xz.y> -2.91&&xz.y<2.25)floorY=4.65-abs(xz.x)*.5;
 float height=8.0-floorY;float y=floorY+mod(position.z*height-clock*.35+220.0,height);vec3 world=vec3(xz.x,y,xz.y);vec4 view=modelViewMatrix*vec4(world,1.0);gl_Position=projectionMatrix*view;
 float size=.006+.008*position.y;gl_PointSize=max(1.25,size*viewportHeight*.5*projectionMatrix[1][1]/mix(1.0,max(.1,-view.z),perspective));
 alpha=amount*smoothstep(.1,1.5,distance(world,eye))*.85;tint=mix(vec3(.85,.9,.96),vec3(1.0,.72,.4),glow(world)*.8);
 }`,fragmentShader:`varying float alpha;varying vec3 tint;void main(){float d=length(gl_PointCoord-.5)*2.0;float a=(1.0-smoothstep(.25,1.0,d))*alpha;if(a<.01)discard;gl_FragColor=vec4(tint,a);#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}`.replace(';#include',';\n#include')});
 const flakes=new T.Points(geometry,mat);flakes.frustumCulled=false;flakes.visible=false;scene.add(flakes);
 const fogMat=new T.ShaderMaterial({uniforms:{amount:uniforms.amount,lightOn:uniforms.lightOn,probes:uniforms.probes},side:T.DoubleSide,transparent:true,depthWrite:false,vertexShader:`varying vec3 wp;void main(){wp=(modelMatrix*vec4(position,1.0)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.0);}`,fragmentShader:`varying vec3 wp;uniform float amount;${glowGLSL}
 void main(){float nearLamp=0.0;for(int i=0;i<4;i++)nearLamp=max(nearLamp,1.0-smoothstep(2.6,3.0,distance(wp.xz,probes[i].xz)));float h=1.0-smoothstep(.28,.68,wp.y);float edge=smoothstep(0.0,.5,min(5.55-wp.x,wp.x+4.65))*smoothstep(0.0,.5,min(5.35-wp.z,wp.z+4.45));float alpha=.15*h*edge*(1.0-nearLamp*lightOn)*amount;if(abs(wp.x)<2.9&&wp.z<2.3&&wp.z> -2.9)discard;gl_FragColor=vec4(.58,.64,.7,alpha);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}`});
 const fog=new T.Mesh(new T.BoxGeometry(10.2,.4,9.8,1,4,1),fogMat);fog.position.set(.45,.48,.45);fog.visible=false;scene.add(fog);
 return {count,update(t:number,amount:number,camera:T.Camera,lights:boolean){uniforms.clock.value=t;uniforms.amount.value=amount;uniforms.eye.value.copy(camera.position);uniforms.emitter.value.copy(camera.position);uniforms.radius.value=4;
 // An orthographic orbit camera is parked tens of metres away; anchor its torus to
 // the viewed ground footprint, retaining world-space fall and camera-relative wind.
 if(camera instanceof T.OrthographicCamera){const forward=camera.getWorldDirection(new T.Vector3());const focus=camera.position.clone().addScaledVector(forward,Math.abs(forward.y)>.001?(1.8-camera.position.y)/forward.y:48);const towardCamera=new T.Vector3(-forward.x,0,-forward.z).normalize();uniforms.emitter.value.copy(focus).addScaledVector(towardCamera,6);uniforms.radius.value=6;}
 const right=new T.Vector3(1,0,0).applyQuaternion(camera.quaternion);uniforms.wind.value.set(right.x*Math.cos(.349)-right.z*Math.sin(.349),right.z*Math.cos(.349)+right.x*Math.sin(.349));uniforms.viewportHeight.value=window.innerHeight;uniforms.perspective.value=camera instanceof T.PerspectiveCamera?1:0;uniforms.lightOn.value=lights?1:0;flakes.visible=fog.visible=amount>.01}};
}
