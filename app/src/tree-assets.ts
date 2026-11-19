import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import treeUrl from './assets/models/tree_ash_medium.glb?url';

// The original courtyard anchors and ground height, shared with navigation.
// The exported root has an 8 cm radius; a 16 cm footprint allows for its lean.
export const TREE_PLACEMENTS = [
 {id:'entrance',x:-4.1,z:-1.4,scale:1,yaw:15},
 {id:'cafe-rear',x:4.15,z:-2.7,scale:.95,yaw:125},
 {id:'beach-edge',x:-3.8,z:-3.3,scale:.82,yaw:235},
 {id:'garden',x:-3.5,z:4.6,scale:.72,yaw:305},
] as const;
export const TREE_GROUND_Y=.26;
export const TREE_TRUNK_HALF_WIDTH=.16;

const loader=new GLTFLoader();
let cached:Promise<T.Group>|undefined;
let users=0;
const isLeaves=(o:T.Object3D)=>o.name==='TREE_ASH_LEAVES'||o.name==='TREE_ASH_LEAVE';
function leavesIn(model:T.Object3D){let leaves:T.Object3D|undefined;model.traverse(o=>{if(isLeaves(o))leaves=o});return leaves;}

function disposeSource(model:T.Group){
 const geometries=new Set<T.BufferGeometry>(),materials=new Set<T.Material>(),textures=new Set<T.Texture>();
 model.traverse(o=>{if(o instanceof T.Mesh){geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])materials.add(m)}});
 for(const m of materials)for(const value of Object.values(m))if(value instanceof T.Texture)textures.add(value);
 const images=new Set<ImageBitmap>();
 for(const t of textures){if(typeof ImageBitmap!=='undefined'&&t.image instanceof ImageBitmap)images.add(t.image);t.dispose()}
 images.forEach(i=>i.close());materials.forEach(m=>m.dispose());geometries.forEach(g=>g.dispose());
}
function source(){
 if(!cached)cached=loader.loadAsync(treeUrl).then(({scene:model})=>{
  const leaves=leavesIn(model),trunk=model.getObjectByName('TRUNK');
  if(!model.getObjectByName('Tree_Ash_Medium')||!leaves||!trunk){disposeSource(model);throw new Error('Expected Tree_Ash_Medium with TREE_ASH_LEAVES (or TREE_ASH_LEAVE) and TRUNK')}
  // Keep GLTFLoader's maps, UV transforms, MASK cutoff and sidedness intact.
  model.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=true;o.receiveShadow=true}});
  trunk.traverse(o=>{if(o instanceof T.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof T.MeshStandardMaterial){m.metalness=0;m.roughness=Math.max(.85,m.roughness)}});
  return model;
 });
 return cached;
}

/** Static GLB instances stay outside the procedural geometry batches. */
export function createTreeAssets(scene:T.Scene,seasonalFoliage:T.Object3D[]){
 users++;
 const root=new T.Group();root.name='Cafe_Ash_Trees';root.userData.treeAsset=true;
 const foliage:T.Object3D[]=[],instances:T.Group[]=[];
 let winter=false,disposed=false,error:string|null=null;
 const pending=source();
 const ready=pending.then(model=>{
  if(disposed)return;
  for(const placement of TREE_PLACEMENTS){
   const instance=new T.Group();instance.name=`Tree_Ash_${placement.id}`;
   instance.userData={treeAsset:'tree_ash_medium',placementId:placement.id,dynamic:true};
   // clone(true) clones the hierarchy, while Mesh.copy shares GPU resources.
   const clone=model.clone(true);instance.add(clone);
   instance.scale.setScalar(placement.scale);instance.rotation.y=T.MathUtils.degToRad(placement.yaw);
   instance.updateMatrixWorld(true);
   const bottom=new T.Box3().setFromObject(clone).min.y;
   instance.position.set(placement.x,TREE_GROUND_Y-bottom,placement.z);
   const leaves=leavesIn(clone)!;leaves.visible=!winter;
   foliage.push(leaves);seasonalFoliage.push(leaves);instances.push(instance);root.add(instance);
  }
  root.visible=!winter;root.updateMatrixWorld(true);
  // Never insert an unpositioned instance at the world origin during loading.
  scene.add(root);
 }).catch(reason=>{
  if(disposed)return;
  error=String(reason);console.error('[tree-assets] Could not load tree_ash_medium.glb; the game will continue.',reason);
 });
 function setWinter(on:boolean){
  winter=on;root.visible=!on;
  foliage.forEach(leaf=>leaf.visible=!on);
  // Keep the original snow-only bare trees and their lights (user preference).
 }
 function dispose(){
  if(disposed)return;disposed=true;root.removeFromParent();
  for(const leaf of foliage){const i=seasonalFoliage.indexOf(leaf);if(i!==-1)seasonalFoliage.splice(i,1)}
  root.clear();instances.length=0;foliage.length=0;users--;
  // An in-flight load may finish after teardown. Only its last consumer frees it.
  void pending.then(model=>{if(users===0&&cached===pending){cached=undefined;disposeSource(model)}},()=>{if(users===0&&cached===pending)cached=undefined});
 }
 function diagnostics(){
  const geometries=new Set<string>(),materials=new Set<string>(),textures=new Set<string>();
  root.traverse(o=>{if(o instanceof T.Mesh){geometries.add(o.geometry.uuid);for(const m of Array.isArray(o.material)?o.material:[o.material]){materials.add(m.uuid);for(const v of Object.values(m))if(v instanceof T.Texture)textures.add(v.uuid)}}});
  return {ready:instances.length===4,error,winter,visible:root.visible,shared:{geometries:geometries.size,materials:materials.size,textures:textures.size},instances:instances.map((o,i)=>{
   const b=new T.Box3().setFromObject(o),leaf=foliage[i];
   return {name:o.name,position:o.position.toArray(),scale:o.scale.toArray(),yaw:o.rotation.y,leavesNode:leaf.name,leavesVisible:leaf.visible,trunkVisible:o.getObjectByName('TRUNK')!.visible,bounds:{min:b.min.toArray(),max:b.max.toArray()}};
  })};
 }
 return {root,ready,setWinter,dispose,diagnostics};
}
