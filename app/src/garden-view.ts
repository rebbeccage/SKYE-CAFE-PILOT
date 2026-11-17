import * as T from 'three';
import type {OrbitControls} from 'three/addons/controls/OrbitControls.js';
/** A temporary lens on the existing garden. No character or progression state. */
export function createGardenView(camera:T.OrthographicCamera,orbit:OrbitControls<T.OrthographicCamera>){
 let active=false,transition=0,returning=false,startedAt=0;
 const original={eye:new T.Vector3(),target:new T.Vector3(),zoom:1};
 const start={eye:new T.Vector3(),target:new T.Vector3(),zoom:1},end={eye:new T.Vector3(),target:new T.Vector3(),zoom:1};
 const limits={minZoom:orbit.minZoom,maxZoom:orbit.maxZoom,minPolar:orbit.minPolarAngle,maxPolar:orbit.maxPolarAngle,minAzimuth:orbit.minAzimuthAngle,maxAzimuth:orbit.maxAzimuthAngle};
 function flush(){const d=orbit.enableDamping;orbit.enableDamping=false;orbit.update();orbit.enableDamping=d}
 function move(eye:T.Vector3,target:T.Vector3,zoom:number){flush();start.eye.copy(camera.position);start.target.copy(orbit.target);start.zoom=camera.zoom;end.eye.copy(eye);end.target.copy(target);end.zoom=zoom;transition=.001;startedAt=performance.now();orbit.enabled=false;orbit.autoRotate=false;}
 function restoreLimits(){Object.assign(orbit,{minZoom:limits.minZoom,maxZoom:limits.maxZoom,minPolarAngle:limits.minPolar,maxPolarAngle:limits.maxPolar,minAzimuthAngle:limits.minAzimuth,maxAzimuthAngle:limits.maxAzimuth})}
 function enter(){if(active)return;original.eye.copy(camera.position);original.target.copy(orbit.target);original.zoom=camera.zoom;active=true;returning=false;const target=new T.Vector3(-6.35,1.20,3.25);move(target.clone().add(new T.Vector3(1.6,2.3,6.2).multiplyScalar(4)),target,innerWidth<600?4:4.65)}
 function exit(immediate=false){if(!active)return;restoreLimits();returning=true;move(original.eye,original.target,original.zoom);if(immediate){camera.position.copy(original.eye);orbit.target.copy(original.target);camera.zoom=original.zoom;camera.updateProjectionMatrix();transition=0;active=false;returning=false;orbit.enabled=true;orbit.update()}}
 function update(_dt:number,blocked:boolean){if(!transition)return;transition=Math.min(1,(performance.now()-startedAt)/(matchMedia('(prefers-reduced-motion: reduce)').matches?10:650));const q=transition*transition*(3-2*transition);camera.position.lerpVectors(start.eye,end.eye,q);orbit.target.lerpVectors(start.target,end.target,q);camera.zoom=T.MathUtils.lerp(start.zoom,end.zoom,q);camera.updateProjectionMatrix();camera.lookAt(orbit.target);if(transition===1){transition=0;if(returning){active=false;returning=false}else{orbit.minPolarAngle=1.02;orbit.maxPolarAngle=1.38;orbit.minAzimuthAngle=.08;orbit.maxAzimuthAngle=.45;orbit.minZoom=innerWidth<600?3.5:4;orbit.maxZoom=innerWidth<600?4.5:5.7}orbit.enabled=!blocked;orbit.update()}}
 return {enter,exit,update,get active(){return active},get transitioning(){return transition>0},diagnostics:()=>({active,transitioning:transition>0,returning,focus:orbit.target.toArray(),people:['棠姨','莫娜'],movesCharacters:false})};
}
