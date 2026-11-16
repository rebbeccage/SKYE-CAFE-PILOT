import * as T from 'three';

// Fixed eye positions: dragging changes orientation, never circles the counter.
export class IndoorLook {
 enabled=false;enableDamping=true;target=new T.Vector3();seated=false;seatIndex=-1;
 private eye=new T.Vector3();private yaw=0;private pitch=0;private yawGoal=0;private pitchGoal=0;
 private pointers=new Map<number,T.Vector2>();
 constructor(private camera:T.PerspectiveCamera,canvas:HTMLCanvasElement){
  canvas.addEventListener('pointerdown',e=>{if(!this.enabled||e.button!==0)return;this.pointers.set(e.pointerId,new T.Vector2(e.clientX,e.clientY));canvas.setPointerCapture(e.pointerId)});
  canvas.addEventListener('pointermove',e=>{const p=this.pointers.get(e.pointerId);if(!p)return;if(this.enabled&&this.pointers.size===1){this.yawGoal-=(e.clientX-p.x)*.004;this.pitchGoal=T.MathUtils.clamp(this.pitchGoal+(e.clientY-p.y)*.003,-Math.PI/3,Math.PI/3)}p.set(e.clientX,e.clientY)});
  for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,e=>this.pointers.delete((e as PointerEvent).pointerId));
  this.stand();
 }
 private place(seated:boolean,index=0){
  this.seated=seated;this.seatIndex=seated?index:-1;this.pointers.clear();
  // Floor is at .85 m; standing eyes 1.55 m, seated eyes 1.10 m above it.
  const seats=[[-1.38,1.95,.55],[-.12,1.95,.55],[-1.68,1.95,-1.45]];
  // Enter at the threshold, looking into the cafe; seated positions stay fixed.
  this.eye.set(...(seated?seats[index]:[-1.1,2.4,2.06]) as [number,number,number]);
  this.camera.position.copy(this.eye);
  const focus=(seated?new T.Vector3(index===2?-1.05:-.75,2.05,index===2?-1.45:.55):new T.Vector3(.15,1.55,-.65)).sub(this.eye);
  this.yaw=this.yawGoal=Math.atan2(focus.x,focus.z);this.pitch=this.pitchGoal=Math.atan2(focus.y,Math.hypot(focus.x,focus.z));
  // Wide doorway overview includes the near table's feet and the full counter.
  this.camera.zoom=seated?1:.50;this.camera.updateProjectionMatrix();this.update();
 }
 stand(){this.place(false)}
 sit(index=0){this.place(true,Math.max(0,Math.min(2,index)))}
 update(){
  const blend=this.enableDamping?.16:1;this.yaw+=(this.yawGoal-this.yaw)*blend;this.pitch+=(this.pitchGoal-this.pitch)*blend;
  this.camera.position.copy(this.eye);
  this.target.copy(this.eye).add(new T.Vector3(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)));
  this.camera.lookAt(this.target);
 }
}
