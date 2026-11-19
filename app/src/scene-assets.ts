import {cacheTransforms} from './transform-cache';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import aheUrl from './assets/models/ahe.glb?url';
import linUrl from './assets/models/lin.glb?url';
import truckUrl from './assets/models/ice-cream-truck.glb?url';
import {beachGround as terrainHeight} from './beach-ground';
import {TRUCK_POSITION} from './island-layout';
import type {buildWorld} from './world';

// Asset adapters only. Existing Lin chapter index, hitbox and save data remain intact.
export function createSceneAssets(scene:T.Scene,world:ReturnType<typeof buildWorld>,failed:(name:string)=>void){
 const ahe=world.actors[0],aheVisual=new T.Group();aheVisual.name='Ahe — supplied GLB';let aheReady=false,aheAnimations=0,aheMixer:T.AnimationMixer|undefined;let aheAction:T.AnimationAction|undefined;const aheActions:T.AnimationAction[]=[];
 const lin=world.actors[1],linVisual=new T.Group(),truck=new T.Group();
 linVisual.name='Lin — supplied GLB';truck.name='Beach ice cream truck';scene.add(truck);
 let linReady=false,truckReady=false;const errors:string[]=[];const sizes:Record<string,number[]>={};
 const loader=new GLTFLoader();
 async function load(url:string,height:number,name:string){
  const asset=await loader.loadAsync(url),model=asset.scene,bounds=new T.Box3().setFromObject(model),size=bounds.getSize(new T.Vector3()),center=bounds.getCenter(new T.Vector3()),scale=height/size.y;
  model.scale.multiplyScalar(scale);model.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);
  if(!asset.animations.length)model.traverse(o=>{o.updateMatrix();o.matrixAutoUpdate=false});model.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=o.receiveShadow=true}});
  cacheTransforms(model);sizes[name]=size.multiplyScalar(scale).toArray();return model;
 }
 void loader.loadAsync(aheUrl).then(asset=>{
  const model=asset.scene,b=new T.Box3().setFromObject(model),size=b.getSize(new T.Vector3()),center=b.getCenter(new T.Vector3()),scale=1.8/(size.y*ahe.root.scale.y);
  model.scale.setScalar(scale);model.position.set(-center.x*scale,-b.min.y*scale,-center.z*scale);
  if(!asset.animations.length)model.traverse(o=>{o.updateMatrix();o.matrixAutoUpdate=false});const materialCache=new Map<T.Material,T.Material>();
  model.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=o.receiveShadow=true;const tune=(m:T.Material)=>{const found=materialCache.get(m);if(found)return found;const c=m.clone();materialCache.set(m,c);if(c instanceof T.MeshStandardMaterial){c.metalness=0;c.roughness=Math.max(.72,c.roughness);c.envMapIntensity=.45;if(c.map)c.map.colorSpace=T.SRGBColorSpace;}return c};o.material=Array.isArray(o.material)?o.material.map(tune):tune(o.material)}});
  // Fit the existing narrow service aisle without moving its story/click anchor.
  cacheTransforms(model);aheVisual.position.z=-.15;aheVisual.scale.z=.68;aheVisual.add(model);ahe.root.add(aheVisual);
  aheAnimations=asset.animations.length;if(aheAnimations){aheMixer=new T.AnimationMixer(model);for(const clip of asset.animations)aheActions.push(aheMixer.clipAction(clip));aheAction=aheActions[0];aheAction.play()}
  ahe.root.children.forEach(c=>c.visible=c===aheVisual);ahe.root.userData.suppliedAsset=true;aheReady=true;
 }).catch(()=>{errors.push('ahe');failed('阿禾')});
 void load(linUrl,1.35/lin.root.scale.y,'lin').then(model=>{linVisual.add(model);lin.root.add(linVisual);lin.root.userData.suppliedAsset=true;linReady=true}).catch(()=>{errors.push('lin');failed('林伯')});
 // Clear sand beside the boardwalk; loading does not delay the cafe's first frame.
 const {x,z}=TRUCK_POSITION,eps=.25;
 const dx=(terrainHeight(x+eps,z)-terrainHeight(x-eps,z))/(2*eps),dz=(terrainHeight(x,z+eps)-terrainHeight(x,z-eps))/(2*eps);
 truck.position.set(x,terrainHeight(x,z)+.008,z);
 truck.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),new T.Vector3(-dx,1,-dz).normalize());
 truck.quaternion.multiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),-.28));
 const loadTruck=()=>load(truckUrl,2.65,'truck').then(model=>{truck.add(model);truckReady=true}).catch(()=>{errors.push('truck');failed('冰激凌车')});
 // Defer the distant asset until the UI and cafe have had a chance to paint.
 if('requestIdleCallback' in window)window.requestIdleCallback(loadTruck,{timeout:2500});else setTimeout(loadTruck,1500);
 function update(time:number,snow:boolean,dt=0,order=0){
  if(aheReady){ahe.root.children.forEach(c=>c.visible=c===aheVisual);const next=aheActions[order>0?Math.min(1,aheActions.length-1):0];if(next&&next!==aheAction){next.reset().fadeIn(.3).play();aheAction?.fadeOut(.3);aheAction=next}aheMixer?.update(dt)}
  if(!linReady)return;
  // The delivered mesh is a standing, unrigged figure: place beside the chair,
  // never deform it into a seated pose or leave it intersecting the chair/table.
  lin.root.children.forEach(child=>child.visible=child===linVisual);
  if(!lin.root.userData.pathResident)lin.root.position.set(...(snow?[-1.68,.85,-.80]:[2.65,.26,3.65]) as [number,number,number]);
  if(!lin.root.userData.pathResident)lin.root.rotation.set(0,snow?2.4:.35,0);linVisual.scale.y=1+Math.sin(time*1.3)*.001;
 }
 return {update,diagnostics:()=>({ahe:{ready:aheReady,animationCount:aheAnimations,asset:'ahe.glb',height:1.8,legacyVisible:ahe.root.children.filter(c=>c!==aheVisual&&c.visible).length,bounds:(()=>{const b=new T.Box3().setFromObject(aheVisual);return aheReady?{min:b.min.toArray(),max:b.max.toArray()}:null})()},lin:{ready:linReady,position:lin.root.position.toArray(),height:1.35,visibleLegacyChildren:lin.root.children.filter(c=>c!==linVisual&&c.visible).length},truck:{ready:truckReady,position:truck.position.toArray(),size:sizes.truck,bounds:(()=>{const b=new T.Box3().setFromObject(truck);return truckReady?{min:b.min.toArray(),max:b.max.toArray()}:null})()},errors})};
}
