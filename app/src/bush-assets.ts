import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import bushUrl from './assets/models/bush_01.glb?url';

export const BUSH_PLACEMENTS = [
 {id:'cafe-west-a',x:-3.7,z:.8,scale:1.15,yaw:12},
 {id:'cafe-west-b',x:-4.4,z:0,scale:1,yaw:78},
 {id:'garden-edge',x:-3.1,z:1.6,scale:.90,yaw:146},
 {id:'beach-east-a',x:3.3,z:-3.5,scale:.95,yaw:215},
 {id:'beach-east-b',x:4.8,z:-3.5,scale:.85,yaw:278},
 {id:'beach-west',x:-4.4,z:-3.65,scale:1.05,yaw:330},
 {id:'garden-small',x:-3.8,z:3.6,scale:.72,yaw:42},
] as const;
export const BUSH_GROUND_Y=.26;
const loader=new GLTFLoader();
let cached:Promise<T.Group>|undefined,users=0,requests=0;
function resources(root:T.Object3D){
 const geometries=new Set<T.BufferGeometry>(),materials=new Set<T.Material>(),textures=new Set<T.Texture>();
 root.traverse(o=>{if(o instanceof T.Mesh){geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])materials.add(m)}});
 for(const m of materials)for(const v of Object.values(m))if(v instanceof T.Texture)textures.add(v);
 return {geometries,materials,textures};
}
function disposeSource(model:T.Group){
 const r=resources(model),images=new Set<ImageBitmap>();
 r.textures.forEach(t=>{if(typeof ImageBitmap!=='undefined'&&t.image instanceof ImageBitmap)images.add(t.image);t.dispose()});
 images.forEach(i=>i.close());r.materials.forEach(m=>m.dispose());r.geometries.forEach(g=>g.dispose());
}
function source(){
 if(!cached){requests++;cached=loader.loadAsync(bushUrl).then(({scene:model})=>{
  const leaves=model.getObjectByName('BUSH_LEAVES'),trunk=model.getObjectByName('BUSH_TRUNK');
  if(!model.getObjectByName('Bush_01')||!leaves||!trunk){disposeSource(model);throw new Error('Expected Bush_01 with BUSH_LEAVES and BUSH_TRUNK');}
  leaves.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=false;o.receiveShadow=true}});
  trunk.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=o.receiveShadow=true;for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof T.MeshStandardMaterial){m.metalness=0;m.roughness=Math.max(.85,m.roughness)}}});
  // Keep the loader's maps, texture transforms, UVs, alpha cutoff and sidedness.
  return model;
 });}
 return cached;
}

/** Instances remain outside world.ts's procedural mergeGeometries pass. */
export function createBushAssets(scene:T.Scene,seasonalFoliage:T.Object3D[]){
 users++;
 const root=new T.Group();root.name='Cafe_Bushes';
 const instances:T.Group[]=[],foliage:T.Object3D[]=[];
 let winter=false,disposed=false,error:string|null=null;
 const pending=source();
 const ready=pending.then(model=>{
  if(disposed)return;
  for(const p of BUSH_PLACEMENTS){
   const instance=new T.Group();instance.name=`Bush_${p.id}`;instance.userData={bushAsset:true,placementId:p.id};
   // Mesh.copy shares geometry/material references; no per-instance material clone.
   const clone=model.clone(true);instance.add(clone);instance.scale.setScalar(p.scale);instance.rotation.y=T.MathUtils.degToRad(p.yaw);
   instance.updateMatrixWorld(true);
   const bottom=new T.Box3().setFromObject(clone).min.y;
   instance.position.set(p.x,BUSH_GROUND_Y-bottom,p.z);instance.updateMatrixWorld(true);
   const leaves=clone.getObjectByName('BUSH_LEAVES')!;leaves.visible=!winter;
   instances.push(instance);foliage.push(leaves);seasonalFoliage.push(leaves);root.add(instance);
  }
  root.updateMatrixWorld(true);scene.add(root);
 }).catch(reason=>{if(disposed)return;error=String(reason);console.error('[bush-assets] Could not load bush_01.glb; the game will continue.',reason);});
 function setWinter(on:boolean){winter=on;for(const leaf of foliage)leaf.visible=!on;}
 function dispose(){
  if(disposed)return;disposed=true;root.removeFromParent();
  for(const leaf of foliage){const i=seasonalFoliage.indexOf(leaf);if(i!==-1)seasonalFoliage.splice(i,1)}
  root.clear();instances.length=0;foliage.length=0;users--;
  void pending.then(model=>{if(users===0&&cached===pending){cached=undefined;disposeSource(model)}},()=>{if(users===0&&cached===pending)cached=undefined});
 }
 function diagnostics(){
  const r=resources(root);
  return {ready:instances.length===7,disposed,error,winter,requests,instanceCount:instances.length,shared:{geometries:r.geometries.size,materials:r.materials.size,textures:r.textures.size,imageSources:new Set([...r.textures].map(t=>t.source.data)).size},
   materials:[...r.materials].map(m=>{const p=m as T.MeshStandardMaterial;return {name:m.name,metalness:p.metalness,roughness:p.roughness,alphaTest:m.alphaTest,transparent:m.transparent,side:m.side}}),
   instances:instances.map((o,i)=>{const b=new T.Box3().setFromObject(o),leaf=foliage[i],trunk=o.getObjectByName('BUSH_TRUNK')!;return {id:BUSH_PLACEMENTS[i].id,position:o.position.toArray(),scale:o.scale.toArray(),yawDegrees:BUSH_PLACEMENTS[i].yaw,leavesVisible:leaf.visible,trunkVisible:trunk.visible,bounds:{min:b.min.toArray(),max:b.max.toArray()}};})};
 }
 return {root,ready,setWinter,dispose,diagnostics};
}
