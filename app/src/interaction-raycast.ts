import * as T from 'three';
import type {Obstacle} from './player-collision';
type Hotspot={id:string;label:string;mesh:T.Object3D;point:T.Vector3};
export const interactionDistance=(id:string)=>id.startsWith('person')||id==='mona'?2.2:id==='door'||id==='coffee'?2:id.startsWith('crop-')?1.6:id==='cinema'||id.includes('seat')?1.8:3;
export function createInteractionRaycast(obstacles:Obstacle[]){
 const ray=new T.Raycaster(),origin=new T.Vector3(),local=new T.Ray(),box=new T.Box3(),matrix=new T.Matrix4(),hit=new T.Vector3();
 function blocked(camera:T.Camera,point:T.Vector3){camera.getWorldPosition(origin);ray.ray.set(origin,point.clone().sub(origin).normalize());const distance=origin.distanceTo(point);
  for(const o of obstacles){if(o.name!=='咖啡馆玻璃墙'&&o.name!=='未开放的水上屋'&&o.name!=='幕布'&&o.name!=='冰激凌车')continue;matrix.makeRotationY(o.yaw??0);matrix.setPosition(o.x,0,o.z);matrix.invert();local.copy(ray.ray).applyMatrix4(matrix);box.min.set(-o.halfX,o.bottom??.2,-o.halfZ);box.max.set(o.halfX,o.top??3.5,o.halfZ);if(local.intersectBox(box,hit)&&hit.distanceTo(local.origin)<distance-.10)return true;}return false;
 }
 return {pick(camera:T.Camera,hotspots:Hotspot[],allowed:(id:string)=>boolean,ndc=new T.Vector2()){camera.updateMatrixWorld(true);ray.setFromCamera(ndc,camera);const hits=ray.intersectObjects(hotspots.filter(h=>allowed(h.id)).map(h=>h.mesh),false);
  for(const hit of hits){const id=hit.object.userData.hit as string,h=hotspots.find(h=>h.id===id)!;camera.getWorldPosition(origin);const reach=Math.hypot(hit.point.x-origin.x,hit.point.z-origin.z);if(reach>interactionDistance(id))continue;if(id!=='door'&&blocked(camera,hit.point))continue;return {id,label:h.label,distance:hit.distance};}return null;},blocked};
}
