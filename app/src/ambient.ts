import * as T from 'three';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {GTAOPass} from 'three/addons/postprocessing/GTAOPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
class GlassSafeAmbientPass extends GTAOPass {
 hidden:T.Object3D[]=[];
 _overrideVisibility(){this.scene.traverse(o=>{if(!o.visible)return;if(o instanceof T.Line||o instanceof T.Points){this.hidden.push(o);o.visible=false}else if(o instanceof T.Mesh){const m=o.material as T.Material;if(m.transparent||!m.visible){this.hidden.push(o);o.visible=false}}})}
 _restoreVisibility(){for(const o of this.hidden)o.visible=true;this.hidden.length=0}
}
// Keep the beauty pass and output at the same resolution; cap fill cost on large displays.
export function renderPixelRatio(w:number,h:number){return Math.max(1,Math.min(devicePixelRatio||1,2,Math.sqrt(3000000/Math.max(1,w*h))))}
export function makeRendering(renderer:T.WebGLRenderer,scene:T.Scene,camera:T.Camera){
 const target=new T.WebGLRenderTarget(innerWidth,innerHeight,{type:T.HalfFloatType});target.samples=4;
 const composer=new EffectComposer(renderer,target);composer.setPixelRatio(renderer.getPixelRatio());
 const base=new RenderPass(scene,camera);composer.addPass(base);const ao=new GlassSafeAmbientPass(scene,camera);ao.updateGtaoMaterial({radius:.28,thickness:1,distanceExponent:1.7,distanceFallOff:1,scale:.85,samples:12});ao.updatePdMaterial({radius:5,rings:2,samples:12});ao.blendIntensity=.72;composer.addPass(ao);
 // Only tagged micro-LEDs and the brass star feed bloom; snow never blooms.
 const glowComposer=new EffectComposer(renderer,new T.WebGLRenderTarget(1,1,{type:T.HalfFloatType}));glowComposer.renderToScreen=false;const glowScene=new RenderPass(scene,camera),bloom=new UnrealBloomPass(new T.Vector2(1,1),.5,.25,.8);glowComposer.addPass(glowScene);glowComposer.addPass(bloom);
 const vertex=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`;
 const add=new ShaderPass({uniforms:{tDiffuse:{value:null},glow:{value:null},amount:{value:0}},vertexShader:vertex,fragmentShader:`uniform sampler2D tDiffuse,glow;uniform float amount;varying vec2 vUv;void main(){gl_FragColor=texture2D(tDiffuse,vUv)+texture2D(glow,vUv)*amount;}`});add.uniforms.glow.value=glowComposer.renderTarget2.texture;composer.addPass(add);composer.addPass(new OutputPass());
 const finish=new ShaderPass({uniforms:{tDiffuse:{value:null},glow:{value:null},amount:{value:0}},vertexShader:vertex,fragmentShader:`uniform sampler2D tDiffuse,glow;uniform float amount;varying vec2 vUv;void main(){vec4 base=texture2D(tDiffuse,vUv);vec3 g=texture2D(glow,vUv).rgb;float hot=smoothstep(.02,.2,max(g.r,max(g.g,g.b)));vec3 lifted=base.rgb+vec3(.008,.009,.014)*pow(1.0-base.rgb,vec3(2.0));vec3 winter=mix(min(lifted,vec3(.92)),lifted,hot);gl_FragColor=vec4(mix(base.rgb,winter,amount),base.a);}`});finish.uniforms.glow.value=glowComposer.renderTarget2.texture;composer.addPass(finish);
 const black=new T.MeshBasicMaterial({color:0,side:T.DoubleSide});let winter=0;
 const resize=(w:number,h:number)=>{const ratio=renderer.getPixelRatio();composer.setPixelRatio(ratio);composer.setSize(w,h);ao.setSize(Math.ceil(w*ratio*.8),Math.ceil(h*ratio*.8));glowComposer.setSize(Math.ceil(w*.65),Math.ceil(h*.65))};const size=renderer.getSize(new T.Vector2());resize(size.x,size.y);
 return {composer,resize,setSnow(amount:number){winter=amount;ao.blendIntensity=.72*(1-.5*amount);add.enabled=finish.enabled=amount>.01;add.uniforms.amount.value=.55*amount;finish.uniforms.amount.value=amount},render(camera:T.Camera){base.camera=camera;if(ao.camera!==camera){ao.camera=camera;ao.gtaoMaterial.defines.PERSPECTIVE_CAMERA=camera instanceof T.PerspectiveCamera?1:0;ao.gtaoMaterial.needsUpdate=true}
 if(winter>.01){glowScene.camera=camera;const previous=scene.background,saved=new Map<T.Mesh,T.Material|T.Material[]>(),hidden:T.Object3D[]=[];scene.background=new T.Color(0);scene.traverse(o=>{if(!o.visible)return;if(o instanceof T.Points||o instanceof T.Line){hidden.push(o);o.visible=false}else if(o instanceof T.Mesh){const m=o.material as T.Material;if(m.userData.winterGlow)return;if(m.transparent||!m.visible){hidden.push(o);o.visible=false}else{saved.set(o,o.material);o.material=black}}});glowComposer.render();scene.background=previous;for(const [o,m] of saved)o.material=m;hidden.forEach(o=>o.visible=true)}composer.render();}};
}
