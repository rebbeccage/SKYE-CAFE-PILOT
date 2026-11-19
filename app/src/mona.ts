import {cacheTransforms} from './transform-cache';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import modelUrl from './assets/models/mona.glb?url';

// Independent visitor: never inserted into world.actors or the three story slots.
// Garden-local (0.1..0.9, 8.5) → world (-5.8, 3.85..3.05).
// This short clear strip is outside the cafe/service aisle and beside, not inside,
// Tang's planting area. The supplied static GLB has no rig, so do not invent a seat pose.
export function createMona(scene:T.Scene,host:HTMLElement,onTalk:()=>void,onError:()=>void){
 const root=new T.Group();root.name='Mona — independent dusk visitor';root.visible=false;scene.add(root);
 const visual=new T.Group();root.add(visual);
 const point=new T.Vector3(),anchor=new T.Vector3(),projected=new T.Vector3();
 const hit=new T.Mesh(new T.CapsuleGeometry(.31,.78,4,8),new T.MeshBasicMaterial({visible:false}));hit.userData.hit='mona';scene.add(hit);
 const hotspot={id:'mona',label:'莫娜 · 聊聊',point,mesh:hit};
 const label=document.createElement('button');label.id='mona-talk';label.className='mona-talk';label.textContent='莫娜 · 聊聊';label.hidden=true;host.append(label);label.onclick=()=>{if(interactive)onTalk()};
 const materials:{material:T.Material;opacity:number;transparent:boolean;depthWrite:boolean}[]=[];
 let loaded=false,loading=false,loadError=false,retryAt=0,opacity=0,elapsed=0,interactive=false,mixer:T.AnimationMixer|undefined,animationCount=0;
 let size:number[]=[];
 async function load(time:number){
  if(loading||loaded||time<retryAt)return;loading=true;loadError=false;
  try{
   const gltf=await new GLTFLoader().loadAsync(modelUrl),model=gltf.scene;
   const bounds=new T.Box3().setFromObject(model),extent=bounds.getSize(new T.Vector3()),center=bounds.getCenter(new T.Vector3());
   const scale=1.35/extent.y;model.scale.setScalar(scale);model.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);visual.add(model);
   model.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=true;o.receiveShadow=true;const copy=(m:T.Material)=>{const c=m.clone();materials.push({material:c,opacity:c.opacity,transparent:c.transparent,depthWrite:c.depthWrite});return c};o.material=Array.isArray(o.material)?o.material.map(copy):copy(o.material)}});
   size=new T.Box3().setFromObject(model).getSize(new T.Vector3()).toArray();animationCount=gltf.animations.length;
   if(animationCount){mixer=new T.AnimationMixer(model);mixer.clipAction(gltf.animations[0]).play()}
   cacheTransforms(model);loaded=true;
  }catch{loadError=true;retryAt=time+30;onError()}finally{loading=false}
 }
 // A grounded, low-amplitude idle keeps the unrigged mesh intact. No limb deformation.
 function update(dt:number,time:number,eligible:boolean,ownConversation:boolean,camera:T.Camera,width:number,height:number,resident=false,closeView=false){
  if((eligible||resident)&&!loaded)void load(time);
  const show=loaded&&(eligible||ownConversation||resident),target=show?1:0;
  opacity=T.MathUtils.damp(opacity,target,4,dt);root.visible=opacity>.015;
  interactive=eligible&&loaded&&opacity>.85;
  if(!root.visible){elapsed=0;root.rotation.y=Math.PI/4}
  if(show&&!ownConversation)elapsed+=dt;
  const phase=elapsed%28;
  // Rest 8s, travel 6s, rest beside Tang 8s, return 6s; speed 0.133 m/s.
  const progress=phase<8?0:phase<14?(phase-8)/6:phase<22?1:1-(phase-22)/6;
  root.position.set(-5.8,.26,3.85-.8*progress);
  const yaw=phase<8?Math.PI/4:phase<14?Math.PI:phase<22?-2.3:0;
  if(!ownConversation)root.rotation.y+=Math.atan2(Math.sin(yaw-root.rotation.y),Math.cos(yaw-root.rotation.y))*Math.min(1,dt*2);
  visual.scale.y=1+Math.sin(time*1.5)*.0015;
  mixer?.update(ownConversation?dt*.25:dt);
  for(const m of materials){const fading=opacity<.995;m.material.opacity=m.opacity*(fading?opacity:1);m.material.transparent=fading||m.transparent;m.material.depthWrite=fading?false:m.depthWrite}
  point.copy(root.position);point.y+=.77;hit.position.copy(point);
  anchor.copy(root.position);anchor.y+=closeView?-.08:1.58;projected.copy(anchor).project(camera);
  const x=(projected.x*.5+.5)*width,y=(-projected.y*.5+.5)*height;
  label.hidden=true; // Unified head label is non-interactive; keep the original NPC hitbox.
  label.textContent='莫娜 · 聊聊';label.style.left=x+'px';label.style.top=y+'px';
 }
 return {root,hotspot,update,get interactive(){return interactive},diagnostics:()=>({loaded,loading,loadError,visible:root.visible,interactive,opacity,position:root.position.toArray(),yaw:root.rotation.y,height:1.35,size,animationCount,route:[[-5.8,.26,3.85],[-5.8,.26,3.05]],behaviour:'garden-stroll-and-rest'})};
}
