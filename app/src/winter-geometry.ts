import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
export const V=(x:number,y:number,z:number)=>new T.Vector3(x,y,z);
export const material=(color:T.ColorRepresentation,roughness=.85,metalness=0)=>new T.MeshStandardMaterial({color,roughness,metalness});
export const group=(parent:T.Object3D,x=0,y=0,z=0)=>{const g=new T.Group();g.position.set(x,y,z);parent.add(g);return g};
export function mesh(p:T.Object3D,g:T.BufferGeometry,m:T.Material,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.receiveShadow=true;p.add(o);return o}
export const box=(p:T.Object3D,w:number,h:number,d:number,x:number,y:number,z:number,m:T.Material)=>mesh(p,new T.BoxGeometry(w,h,d),m,x,y,z);
export const ball=(p:T.Object3D,r:number,x:number,y:number,z:number,m:T.Material)=>mesh(p,new T.SphereGeometry(r,8,6),m,x,y,z);
export const cyl=(p:T.Object3D,rt:number,rb:number,h:number,x:number,y:number,z:number,m:T.Material)=>mesh(p,new T.CylinderGeometry(rt,rb,h,12),m,x,y,z);
export function branch(p:T.Object3D,a:T.Vector3,b:T.Vector3,r:number,m:T.Material,tip=r*.6){const o=mesh(p,new T.CylinderGeometry(tip,r,a.distanceTo(b),6),m);o.position.copy(a).add(b).multiplyScalar(.5);o.quaternion.setFromUnitVectors(V(0,1,0),b.clone().sub(a).normalize());return o}
export function consolidate(root:T.Group){root.updateWorldMatrix(true,true);const inverse=root.matrixWorld.clone().invert(),bins=new Map<T.Material,T.BufferGeometry[]>(),remove:T.Mesh[]=[];root.traverse(o=>{if(!(o instanceof T.Mesh)||o.userData.animated)return;const m=o.material as T.Material;const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(inverse.clone().multiply(o.matrixWorld));geo.deleteAttribute('uv1');geo.deleteAttribute('tangent');if(!bins.has(m))bins.set(m,[]);bins.get(m)!.push(geo);remove.push(o)});for(const [m,gs] of bins){const merged=mergeGeometries(gs,false);if(merged)mesh(root,merged,m);gs.forEach(g=>g.dispose())}remove.forEach(o=>o.removeFromParent())}
export function pine(p:T.Object3D,a:T.Vector3,b:T.Vector3,green:T.Material,bark:T.Material){branch(p,a,b,.012,bark,.005);for(let j=0;j<9;j++){const c=a.clone().lerp(b,(j+1)/10);for(let k=0;k<5;k++){const angle=k*1.256+j*.6;const end=c.clone().add(V(Math.cos(angle)*.065,.035,Math.sin(angle)*.065));branch(p,c,end,.005,green,.001)}}}
