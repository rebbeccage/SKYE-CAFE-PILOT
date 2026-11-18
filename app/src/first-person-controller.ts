import * as T from 'three';
import {PlayerCollision} from './player-collision';
export type CameraMode='FIRST_PERSON'|'OVERVIEW'|'INTERIOR'|'SEATED'|'DIALOGUE'|'TRANSITION';
/** Owns inputs and a separate kinematic body. Never writes game/save state. */
export class FirstPersonController {
 readonly collisionBody=new T.Group();readonly cameraPivot=new T.Group();readonly camera:T.PerspectiveCamera;
 yaw=Math.PI;pitch=-.06;sensitivity=.0022;enabled=false;fallback=false;touch=false;engaged=false;gestureMoved=false;
 private keys=new Set<string>();private pointers=new Map<number,{x:number;y:number}>();private pinch=0;private eyeY=0;
 axis={x:0,y:0};distance=0;target=new T.Vector3();
 constructor(readonly body:PlayerCollision,readonly canvas:HTMLCanvasElement,aspect:number){
  this.camera=new T.PerspectiveCamera(60,aspect,.04,2000);this.collisionBody.add(this.cameraPivot);// The render lens mirrors the pivot in world space for existing water/sky passes.
  this.eyeY=body.position.y+1.6;this.updateCamera(1);
  window.addEventListener('keydown',e=>{if(!this.enabled||e.ctrlKey||e.metaKey||e.altKey||/INPUT|TEXTAREA|SELECT/.test((e.target as HTMLElement)?.tagName))return;if(['KeyW','KeyA','KeyS','KeyD','ShiftLeft','ShiftRight'].includes(e.code)){e.preventDefault();if(this.engaged&&(document.pointerLockElement===canvas||this.fallback||this.touch))this.keys.add(e.code);}if(e.code==='KeyR')this.pitch=0;});
  window.addEventListener('keyup',e=>this.keys.delete(e.code));window.addEventListener('blur',()=>this.stop());
  document.addEventListener('visibilitychange',()=>{if(document.hidden)this.pause()});
  document.addEventListener('pointerlockchange',()=>{if(document.pointerLockElement!==canvas){this.engaged=false;this.stop()}else this.engaged=true;});
  document.addEventListener('pointerlockerror',()=>{this.fallback=true});
  document.addEventListener('mousemove',e=>{if(this.enabled&&document.pointerLockElement===canvas)this.look(e.movementX,e.movementY)});
  canvas.addEventListener('pointerdown',e=>{if(!this.enabled||e.button!==0)return;this.touch=e.pointerType==='touch';this.engaged=true;if(this.pointers.size===0)this.gestureMoved=false;else this.gestureMoved=true;this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(this.touch||this.fallback)canvas.setPointerCapture(e.pointerId);else if(document.pointerLockElement!==canvas)this.lock();});
  canvas.addEventListener('pointermove',e=>{const p=this.pointers.get(e.pointerId);if(!p||!this.enabled)return;const dx=e.clientX-p.x,dy=e.clientY-p.y;if(Math.hypot(dx,dy)>2)this.gestureMoved=true;p.x=e.clientX;p.y=e.clientY;
   if(this.pointers.size===2){const [a,b]=[...this.pointers.values()],d=Math.hypot(a.x-b.x,a.y-b.y);if(this.pinch)this.setFov(this.camera.fov*this.pinch/d);this.pinch=d;}
   else if(this.touch||this.fallback)this.look(dx,dy);
  });
  for(const name of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(name,e=>{this.pointers.delete((e as PointerEvent).pointerId);this.pinch=0;});
 }
 lock(){if(!this.enabled)return;if(!this.canvas.requestPointerLock){this.fallback=true;return;}try{const p=this.canvas.requestPointerLock();if(p)p.catch(()=>{this.fallback=true})}catch{this.fallback=true;}}
 look(x:number,y:number){this.yaw-=x*this.sensitivity;this.pitch=T.MathUtils.clamp(this.pitch-y*this.sensitivity,-40*Math.PI/180,55*Math.PI/180);}
 setFov(v:number){this.camera.fov=T.MathUtils.clamp(v,52,68);this.camera.updateProjectionMatrix();}
 stop(){this.keys.clear();this.axis.x=this.axis.y=0;this.body.stop();this.pointers.clear();this.pinch=0;}
 pause(){this.enabled=false;this.engaged=false;this.stop();if(document.pointerLockElement===this.canvas)document.exitPointerLock();}
 update(dt:number){if(this.enabled){const forward=(this.keys.has('KeyW')?1:0)-(this.keys.has('KeyS')?1:0)+this.axis.y,side=(this.keys.has('KeyD')?1:0)-(this.keys.has('KeyA')?1:0)+this.axis.x;this.distance+=this.body.step(Math.min(dt,.1),forward,side,this.yaw,this.keys.has('ShiftLeft')||this.keys.has('ShiftRight'));}this.updateCamera(dt);}
 private updateCamera(dt:number){const p=this.body.position;this.collisionBody.position.set(p.x,p.y,p.z);this.eyeY=T.MathUtils.damp(this.eyeY,p.y+1.6,14,dt);this.cameraPivot.position.set(0,this.eyeY-p.y,0);this.cameraPivot.rotation.set(this.pitch,this.yaw+Math.PI,0,'YXZ');this.collisionBody.updateMatrixWorld(true);this.cameraPivot.getWorldPosition(this.camera.position);this.target.set(p.x+Math.sin(this.yaw)*Math.cos(this.pitch),this.eyeY+Math.sin(this.pitch),p.z+Math.cos(this.yaw)*Math.cos(this.pitch));this.camera.lookAt(this.target);this.camera.updateMatrixWorld(true);}
 diagnostics(){return {position:{...this.body.position},yaw:this.yaw,pitch:this.pitch,eye:this.camera.getWorldPosition(new T.Vector3()).toArray(),fov:this.camera.fov,enabled:this.enabled,locked:document.pointerLockElement===this.canvas,fallback:this.fallback,engaged:this.engaged,surface:this.body.surface.kind,travelled:this.distance};}
}
