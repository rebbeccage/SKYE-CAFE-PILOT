import {PlayerCollision,type Point} from './player-collision';
/** Test nearby escape corridors with the same footprint and slopes, never teleport. */
export function escapeDirection(body:PlayerCollision,heading:number){
 const probe=new PlayerCollision(body.sample,body.obstacles,body.position);
 for(const angle of [.65,-.65,1.15,-1.15,Math.PI/2,-Math.PI/2,2.35,-2.35,Math.PI]){
  Object.assign(probe.position,body.position);Object.assign(probe.safe,body.position);probe.surface=body.surface;
  const yaw=heading+angle,dx=Math.sin(yaw)*.85,dz=Math.cos(yaw)*.85;probe.move(dx,dz);
  if(Math.hypot(probe.position.x-body.position.x-dx,probe.position.z-body.position.z-dz)<.06)return yaw;
 }return null;
}
export class ObstacleGuide{
 private still=0;private cooldown=0;yaw:number|null=null;
 update(dt:number,body:PlayerCollision,before:Point,trying:boolean,heading:number){
  this.cooldown-=dt;const moved=Math.hypot(body.position.x-before.x,body.position.z-before.z);
  if(!trying||moved>dt*.45){this.still=0;this.yaw=null;return}
  this.still+=dt;if(this.still>.45&&this.cooldown<=0){this.yaw=escapeDirection(body,heading);this.cooldown=.45;}
 }
 reset(){this.still=0;this.yaw=null}
}
