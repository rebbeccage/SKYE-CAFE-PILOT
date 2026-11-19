/** Kinematic cylinder: world-space ground samples and simple oriented footprints.
 * Rendering geometry, NPC animation and the save format remain independent. */
export type Point={x:number;y:number;z:number};
export type Surface={height:number;kind:'sand'|'stone'|'wood'|'grass'};
export type Obstacle={x:number;z:number;halfX:number;halfZ:number;yaw?:number;bottom?:number;top?:number;name?:string};
export const PLAYER_RADIUS=.27;
export class PlayerCollision {
 readonly position:Point;readonly safe:Point;velocity={x:0,z:0};surface:Surface;
 sample:(x:number,z:number)=>Surface|null;obstacles:Obstacle[];
 constructor(sample:(x:number,z:number)=>Surface|null,obstacles:Obstacle[],spawn:Point){this.sample=sample;this.obstacles=obstacles;this.position={...spawn};this.safe={...spawn};this.surface=sample(spawn.x,spawn.z)!;this.position.y=this.safe.y=this.surface.height;}
 blocked(x:number,z:number,y:number){return this.obstacles.some(o=>{if((o.top??10)<y+.15||(o.bottom??-10)>y+1.7)return false;if(Math.abs(x-o.x)>o.halfX+o.halfZ+PLAYER_RADIUS||Math.abs(z-o.z)>o.halfX+o.halfZ+PLAYER_RADIUS)return false;const c=Math.cos(o.yaw??0),s=Math.sin(o.yaw??0),dx=x-o.x,dz=z-o.z,lx=c*dx-s*dz,lz=s*dx+c*dz;return Math.hypot(Math.max(0,Math.abs(lx)-o.halfX),Math.max(0,Math.abs(lz)-o.halfZ))<PLAYER_RADIUS;});}
 valid(x:number,z:number,from=this.position){const a=this.sample(x,z);if(!a||this.blocked(x,z,a.height))return null;const d=Math.hypot(x-from.x,z-from.z),rise=a.height-from.y;
  // Low steps are allowed, larger cliffs and unsupported deck edges are not.
  const step=a.kind!=='sand'||this.surface.kind!=='sand'? .23:.012;
  if(Math.abs(rise)>step&&Math.abs(rise)>d*Math.tan(38*Math.PI/180)+.008)return null;
  return a;
 }
 move(dx:number,dz:number){const n=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.015));let travelled=0;
  for(let i=0;i<n;i++){const p=this.position,ox=p.x,oz=p.z;let a=this.valid(p.x+dx/n,p.z+dz/n);
   if(a){p.x+=dx/n;p.z+=dz/n;p.y=a.height;this.surface=a;}
   else {a=this.valid(p.x+dx/n,p.z);if(a){p.x+=dx/n;p.y=a.height;this.surface=a;}a=this.valid(p.x,p.z+dz/n);if(a){p.z+=dz/n;p.y=a.height;this.surface=a;}}
   travelled+=Math.hypot(p.x-ox,p.z-oz);
  }
  if(!Number.isFinite(this.position.x)||!Number.isFinite(this.position.z)||!Number.isFinite(this.position.y)||!this.sample(this.position.x,this.position.z)||this.blocked(this.position.x,this.position.z,this.position.y)){
   Object.assign(this.position,this.safe);this.stop();
   // Recover locally if an independently moving NPC now occupies the last safe point.
   if(this.blocked(this.position.x,this.position.z,this.position.y)){let found=false;for(let r=.12;r<=1.2&&!found;r+=.12)for(let i=0;i<16;i++){const x=this.safe.x+Math.sin(i*Math.PI/8)*r,z=this.safe.z+Math.cos(i*Math.PI/8)*r,a=this.sample(x,z);if(a&&!this.blocked(x,z,a.height)&&Math.abs(a.height-this.safe.y)<.23){Object.assign(this.position,{x,z,y:a.height});found=true;break;}}}
   this.surface=this.sample(this.position.x,this.position.z)??this.surface;
  }else Object.assign(this.safe,this.position);
  return travelled;
 }
 stop(){this.velocity.x=this.velocity.z=0;}
 /** Exact exponential velocity integration; independent of display refresh rate. */
 step(dt:number,forward:number,side:number,yaw:number,fast=false){
  const length=Math.max(1,Math.hypot(forward,side));forward/=length;side/=length;
  const speed=fast?3.2:2.2,fy=forward*speed*(forward<0?.75:1),sx=side*speed*.85;
  const tx=Math.sin(yaw)*fy-Math.cos(yaw)*sx,tz=Math.cos(yaw)*fy+Math.sin(yaw)*sx;
  const tau=(forward||side)?.19:.23,k=Math.exp(-dt/tau),v=this.velocity;
  const dx=tx*dt+(v.x-tx)*tau*(1-k),dz=tz*dt+(v.z-tz)*tau*(1-k);
  v.x=tx+(v.x-tx)*k;v.z=tz+(v.z-tz)*k;return this.move(dx,dz);
 }
}
