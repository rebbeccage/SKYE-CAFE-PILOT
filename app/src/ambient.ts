import * as T from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// Glass does not occlude the room's ambient light. The normal/depth prepass
// excludes transparent objects and interaction proxies, then restores them.
class GlassSafeAmbientPass extends GTAOPass {
  hidden:T.Object3D[]=[];
  _overrideVisibility(){this.scene.traverse(o=>{if(!o.visible)return;if(o instanceof T.Mesh){const m=o.material as T.Material;if(m.transparent||!m.visible){this.hidden.push(o);o.visible=false}}})}
  _restoreVisibility(){for(const o of this.hidden)o.visible=true;this.hidden.length=0}
}
export function makeRendering(renderer:T.WebGLRenderer,scene:T.Scene,camera:T.Camera){
  const target=new T.WebGLRenderTarget(innerWidth,innerHeight,{type:T.HalfFloatType});target.samples=4;
  const composer=new EffectComposer(renderer,target);composer.setPixelRatio(Math.min(devicePixelRatio,1.35));
  const base=new RenderPass(scene,camera);composer.addPass(base);
  const ao=new GlassSafeAmbientPass(scene,camera);ao.updateGtaoMaterial({radius:.28,thickness:1,distanceExponent:1.7,distanceFallOff:1,scale:.85,samples:12});ao.updatePdMaterial({radius:5,rings:2,samples:12});ao.blendIntensity=.72;composer.addPass(ao);composer.addPass(new OutputPass());
  const resize=()=>{composer.setSize(innerWidth,innerHeight);ao.setSize(Math.ceil(innerWidth*.8),Math.ceil(innerHeight*.8))};resize();
  return {composer,resize,render(camera:T.Camera){base.camera=camera;if(ao.camera!==camera){ao.camera=camera;ao.gtaoMaterial.defines.PERSPECTIVE_CAMERA=camera instanceof T.PerspectiveCamera?1:0;ao.gtaoMaterial.needsUpdate=true}composer.render()}};
}
