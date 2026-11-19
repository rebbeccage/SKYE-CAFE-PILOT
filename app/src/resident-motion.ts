import * as T from 'three';
import type {buildWorld} from './world';
import type {createNavigation} from './navigation-zones';
import {residentRoutes} from './resident-route-data';
import {gardenPaths} from './garden-path';
import {PlayerCollision} from './player-collision';
/** Local, transient scenery animation. No chapter, weather preset or save writes. */
export function createResidentMotion(world:ReturnType<typeof buildWorld>,navigation:ReturnType<typeof createNavigation>){
 const lin=world.actors[1],tang=world.actors[2];lin.root.userData.pathResident=true;
 const linPath:{x:number;z:number}[]=[];for(const r of residentRoutes)for(const [x,z] of r.points)linPath.push({x,z});
 const tendingLocal=[[1.3,7.5],[1.35,8.17],...gardenPaths[0].slice(6,16)];
 const tangPath=tendingLocal.map(([x,z])=>({x:z-14.3,z:3.95-x}));
 const linStart=linPath[0],tangStart=tangPath[0];
 const body=(p:{x:number;z:number})=>new PlayerCollision(navigation.sample,navigation.obstacles,{...p,y:navigation.sample(p.x,p.z)?.height??.26});
 const lb=body(linStart),tb=body(tangStart);
 let li=1,ti=1,td=1,tend=4,linArrived=false,linStarted=false,steps=0,linWalking=false,tangWalking=false;
 const point=new T.Vector3();
 function tangRigError(){let error=0;const expected=new T.Matrix4();tang.root.traverse(o=>{if(o===tang.root||!o.parent)return;expected.multiplyMatrices(o.parent.matrixWorld,o.matrix);for(let i=0;i<16;i++)error=Math.max(error,Math.abs(expected.elements[i]-o.matrixWorld.elements[i]));});return error;}
 const tangTurn={yaw:tang.root.rotation.y+Math.PI/2},linTurn={yaw:Math.PI};
 const look=(a:typeof lin,turn:{yaw:number},yaw:number,dt:number,parentYaw=0)=>{turn.yaw+=Math.atan2(Math.sin(yaw-turn.yaw),Math.cos(yaw-turn.yaw))*Math.min(1,dt*4);a.root.rotation.y=turn.yaw-parentYaw;};
 // Movement uses the same simplified obstacles and step acceptance as the player.
 function walk(b:PlayerCollision,p:{x:number;z:number},speed:number,dt:number,player:{x:number;z:number}|null){const dx=p.x-b.position.x,dz=p.z-b.position.z,d=Math.hypot(dx,dz),step=Math.min(d,speed*dt);if(d<.04)return {arrived:true,moving:false,yaw:0};const x=b.position.x+dx/d*step,z=b.position.z+dz/d*step;if(player&&Math.hypot(x-player.x,z-player.z)<.65)return {arrived:false,moving:false,yaw:Math.atan2(dx,dz)};const ox=b.position.x,oz=b.position.z;b.move(dx/d*step,dz/d*step);return {arrived:Math.hypot(p.x-b.position.x,p.z-b.position.z)<.045,moving:Math.hypot(b.position.x-ox,b.position.z-oz)>.0001,yaw:Math.atan2(dx,dz)}}
 function placeTang(){point.set(tb.position.x,tb.position.y,tb.position.z);tang.root.parent!.worldToLocal(point);tang.root.position.copy(point);}
 lin.root.position.set(lb.position.x,lb.position.y,lb.position.z);placeTang();
 return {update(dt:number,t:number,weather:'sun'|'rain'|'snow',boatState:number,blocked:boolean,player:{x:number;z:number}|null){
  steps+=dt;linWalking=tangWalking=false;
  if(weather==='snow'){lin.root.position.set(-1.68,.85,-.8);lin.root.rotation.set(0,2.4,0);}
  else if(weather==='rain'){lin.root.position.set(2.65,.26,3.65);lin.root.rotation.set(0,.35,0);}
  else{
   if(boatState===1)linStarted=true;
   if(linStarted&&!linArrived&&!blocked){const s=walk(lb,linPath[li],.58,dt,player);linWalking=s.moving;if(s.moving)look(lin,linTurn,s.yaw,dt);if(s.arrived){li++;if(li>=linPath.length)linArrived=true;}}
   lin.root.position.set(lb.position.x,lb.position.y,lb.position.z);lin.root.rotation.z=linWalking?Math.sin(steps*5.6)*.009:0;
   if(linArrived)look(lin,linTurn,.35,dt);
  }
  if(!blocked&&weather!=='snow'){
   if(tend>0)tend=Math.max(0,tend-dt);else{const s=walk(tb,tangPath[ti],weather==='rain'?.17:.28,dt,player);tangWalking=s.moving;if(s.moving)look(tang,tangTurn,s.yaw,dt,Math.PI/2);if(s.arrived){if(ti===tangPath.length-1||ti===0){td*=-1;tend=5;}else if(ti===7||ti===12)tend=4;ti+=td;}}
  }
  placeTang();const gait=tangWalking?Math.sin(steps*5.4)*.24:0;tang.legL.rotation.x=gait;tang.legR.rotation.x=-gait;
  tang.armL.rotation.x=tangWalking?-.25-Math.sin(steps*5.4)*.12:-.85+Math.sin(t*.8)*.09;tang.armR.rotation.x=tangWalking?-.12+Math.sin(steps*5.4)*.06:-.12;
  tang.head.rotation.x=tangWalking?0:.09+Math.sin(t*.6)*.018;
  if(!lin.root.userData.suppliedAsset){lin.legL.rotation.x=linWalking?Math.sin(steps*5.6)*.25:0;lin.legR.rotation.x=-lin.legL.rotation.x;}

 },diagnostics:()=>({lin:{started:linStarted,arrived:linArrived,walking:linWalking,node:li,position:lin.root.position.toArray(),route:linPath},tang:{rigError:tangRigError(),walking:tangWalking,tending:tend>0,node:ti,direction:td,position:tang.root.getWorldPosition(new T.Vector3()).toArray(),route:tangPath}})};
}
