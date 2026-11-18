import * as T from 'three';
import {IndoorLook} from './indoor-look';
/** Uses the existing seated perspective lens; returns the exact original camera. */
export function createCinemaView(camera:T.PerspectiveCamera,look:IndoorLook,eye:T.Vector3,focus:T.Vector3,restored:()=>void){
 let active=false,returning=false,started=0,transition=false;
 const original={eye:new T.Vector3(),rotation:new T.Quaternion(),fov:68,zoom:1};
 const start={eye:new T.Vector3(),rotation:new T.Quaternion(),fov:68},end={eye:new T.Vector3(),rotation:new T.Quaternion(),fov:68};
 function move(p:T.Vector3,q:T.Quaternion,fov:number){start.eye.copy(camera.position);start.rotation.copy(camera.quaternion);start.fov=camera.fov;end.eye.copy(p);end.rotation.copy(q);end.fov=fov;started=performance.now();transition=true;look.enabled=false;look.freeze()}
 function enter(source:T.Camera,target:T.Vector3){if(active)return;original.eye.copy(source.position);original.rotation.copy(source.quaternion);original.zoom=source instanceof T.PerspectiveCamera?source.zoom:1;original.fov=source instanceof T.OrthographicCamera?T.MathUtils.radToDeg(2*Math.atan((source.top-source.bottom)/source.zoom/(2*source.position.distanceTo(target)))):source instanceof T.PerspectiveCamera?source.fov/source.zoom:68;
  camera.position.copy(original.eye);camera.quaternion.copy(original.rotation);camera.zoom=1;camera.fov=original.fov;camera.updateProjectionMatrix();active=true;returning=false;
  const q=new T.Quaternion().setFromRotationMatrix(new T.Matrix4().lookAt(eye,focus,VUP));move(eye,q,innerWidth<600?96:68);
 }
 const VUP=new T.Vector3(0,1,0);
 function finish(){transition=false;if(returning){active=false;returning=false;restored()}else{look.lookFrom(eye,focus);look.enabled=!document.querySelector('dialog[open]')}}
 function exit(immediate=false){if(!active||returning&&!immediate)return;returning=true;move(original.eye,original.rotation,original.fov);if(immediate){camera.position.copy(original.eye);camera.quaternion.copy(original.rotation);camera.fov=original.fov;camera.updateProjectionMatrix();finish()}}
 function update(_dt:number,blocked:boolean){if(!transition)return;const t=Math.min(1,(performance.now()-started)/(matchMedia('(prefers-reduced-motion: reduce)').matches?10:800)),q=t*t*(3-2*t);camera.position.lerpVectors(start.eye,end.eye,q);camera.quaternion.slerpQuaternions(start.rotation,end.rotation,q);camera.fov=T.MathUtils.lerp(start.fov,end.fov,q);camera.updateProjectionMatrix();if(t===1){finish();look.enabled=!blocked&&active}}
 return {enter,exit,update,get active(){return active},get transitioning(){return transition},diagnostics:()=>({active,transitioning:transition,returning,eye:camera.position.toArray(),movesCharacters:false})};
}
