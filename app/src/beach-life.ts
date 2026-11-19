import * as T from 'three';
import {V,group,mesh,box,ball,cyl,branch,material,consolidate} from './winter-geometry';
import {beachGround} from './beach-ground';
import {beachPlacement} from './island-layout';
import {BOARD_X,BOARD_LAYOUT,boardwalkTopAtZ} from './island-props';
import type {Obstacle} from './player-collision';
/** Additive shore vignettes. Existing chairs, hats, cinema cushions and ropes are reused. */
export function createBeachLife(scene:T.Scene){
 const root=group(scene),fixed=group(root),snow=group(root),delicate=group(root);root.name='Quiet shore belongings';
 const cream=material('#e8ddc5'),wood=material('#b69a72'),rope=material('#b7a883'),sage=material('#99aa91'),blue=material('#8ba9af'),coral=material('#bd8877'),apricot=material('#d4b77f'),stone=material('#afbab8'),snowMat=material('#dde3e2');
 const bottle=material('#a4b7a9',.48),dark=material('#807966'),lamp=material('#d8bd8a');lamp.emissive.set('#e7b968');lamp.emissiveIntensity=0;
 const mats=[cream,wood,rope,sage,blue,coral,apricot,stone,bottle,dark],original=mats.map(m=>m.color.clone());
 const placements:{name:string;x:number;y:number;z:number}[]=[],obstacles:Obstacle[]=[];
 const put=(name:string,x:number,z:number,parent=fixed)=>{({x,z}=beachPlacement(x,z));const y=beachGround(x,z),g=group(parent,x,y,z);placements.push({name,x,y,z});return g};
 const ring=(p:T.Object3D,r:number,t:number,x:number,y:number,z:number,m:T.Material)=>mesh(p,new T.TorusGeometry(r,t,5,20),m,x,y,z);
 function wicker(g:T.Group,x=0,z=0){const b=cyl(g,.22,.18,.28,x,.14,z,rope);b.scale.z=.8;for(let k=0;k<6;k++){const r=ring(g,.19+k*.004,.008,x,.035+k*.044,z,cream);r.rotation.x=Math.PI/2;r.scale.y=.8}const handle=ring(g,.19,.018,x,.29,z,wood);handle.scale.y=.6;box(g,.31,.025,.25,x,.285,z,cream);}
 // Three nonuniform tide groups; small objects never enter collision detection.
 for(const [gidx,p] of [[-11.7,11.8],[8.2,15.8],[17.6,8.5]].entries()){
  const g=put('Shells, rounded pebbles and sea grass '+gidx,p[0],p[1]);
  for(let k=0;k<5+gidx%2;k++){const a=k*2.39,r=.12+k*.071,x=Math.cos(a)*r,z=Math.sin(a)*r*.65,y=beachGround(g.position.x+x,g.position.z+z)-g.position.y+.025;
   const shell=group(g,x,y,z);shell.rotation.y=a;const dome=mesh(shell,new T.SphereGeometry(.095,10,5,0,Math.PI*2,0,Math.PI/2),[cream,coral,apricot,stone][k%4]);dome.scale.set(1,.37,1.2);
   for(let j=0;j<5;j++){const t=(j-2)*.3;branch(shell,V(0,.02,-.075),V(Math.sin(t)*.08,.032,Math.cos(t)*.09),.0035,cream,.002)}
   const pebble=ball(g,.045,x+.12,y+.015,z+.035,stone);pebble.scale.set(1.2,.4,.8);
  }
  branch(g,V(-.58,.04,-.12),V(.12,.06,-.30),.045,wood,.025);branch(g,V(-.23,.05,-.23),V(-.34,.07,-.44),.019,wood,.006);
  for(let k=0;k<4;k++){const blade=box(g,.035,.008,.22,-.4+k*.035,.022,.3,sage);blade.rotation.y=k*.4;}
  const cap=group(snow,...g.position.toArray() as [number,number,number]);branch(cap,V(-.58,.085,-.12),V(.12,.105,-.30),.022,snowMat,.012);
 }
 // Water-facing harbor edge: keep the whole 2.4m boardwalk clear.
 const hz=BOARD_LAYOUT.endZ-1.05,hy=boardwalkTopAtZ(hz),harbor=group(fixed,BOARD_X+1.30,hy,hz);
 placements.push({name:'Harbor lantern and buoy',x:harbor.position.x,y:hy,z:hz});
 cyl(harbor,.075,.085,.69,0,.32,0,wood);cyl(harbor,.12,.13,.045,0,.69,0,rope);box(harbor,.15,.20,.15,0,.82,0,lamp);box(harbor,.20,.035,.20,0,.94,0,dark);
 const buoy=ball(harbor,.13,.12,-.02,.2,coral);buoy.scale.y=1.5;const tether=ring(harbor,.08,.012,.12,.18,.2,rope);tether.scale.y=.6;
 for(let i=0;i<4;i++){const coil=ring(harbor,.12+i*.012,.01,-.16,.02+i*.012,-.24,rope);coil.rotation.x=Math.PI/2;}
 obstacles.push({x:BOARD_X+1.30,z:hz,halfX:.10,halfZ:.10,name:'港口边灯桩'});
 // One board on sand, two on a modest rack. The walking route runs north of this group.
 const rack=put('Three paddleboards and two wooden paddles',6.6,8.5);
 const localGround=(x:number,z:number)=>beachGround(rack.position.x+x,rack.position.z+z)-rack.position.y;
 for(const x of [-.62,.62]){branch(rack,V(x,localGround(x,-.1),-.1),V(x,1.45,-.3),.035,wood,.03);branch(rack,V(x,localGround(x,.55),.55),V(x,1.45,-.3),.035,wood,.03)}branch(rack,V(-.7,1.12,-.2),V(.7,1.12,-.2),.032,wood,.032);
 const outline=new T.Shape();outline.moveTo(-.27,-.82);outline.quadraticCurveTo(-.32,.67,0,1.14);outline.quadraticCurveTo(.32,.67,.27,-.82);outline.quadraticCurveTo(0,-1.12,-.27,-.82);
 const boardGeo=new T.ExtrudeGeometry(outline,{depth:.065,steps:1,bevelEnabled:true,bevelSegments:1,bevelSize:.018,bevelThickness:.012,curveSegments:9});
 for(let i=0;i<3;i++){const b=group(rack,i<2?(i-.5)*.67:1.15,i<2?1.01:.06,i<2?.25:.55);b.rotation.x=i<2?-1.10:0;b.rotation.y=i===2?.3:0;
  if(i===2){const wx=rack.position.x+b.position.x,wz=rack.position.z+b.position.z,dx=(beachGround(wx+.15,wz)-beachGround(wx-.15,wz))/.3,dz=(beachGround(wx,wz+.15)-beachGround(wx,wz-.15))/.3;b.quaternion.setFromUnitVectors(V(0,1,0),V(-dx,1,-dz).normalize());b.rotateY(.3);b.position.y=localGround(b.position.x,b.position.z)+.07;}else b.position.y+=localGround(b.position.x,.7);
  const board=mesh(b,boardGeo,[sage,blue,apricot][i]);board.rotation.x=-Math.PI/2;
  box(b,.075,.004,1.68,0,.08,-.05,cream);for(const x of [-.13,.13])box(b,.009,.004,1.4,x,.081,0,i===2?coral:wood);
  const grip=box(b,.29,.006,.56,0,.083,.22,rope);for(let k=0;k<4;k++)box(b,.27,.003,.012,0,.088,.03+k*.12,cream);
  void grip;
 }
 for(let i=0;i<2;i++){branch(rack,V(-.94-i*.13,.08,.45),V(-.74-i*.13,1.65,-.30),.018,wood,.018);const paddle=ball(rack,.16,-.94-i*.13,.15,.43,wood);paddle.scale.set(.6,1.3,.09);}
 obstacles.push({x:rack.position.x,z:rack.position.z,halfX:.77,halfZ:.48,name:'桨板木架'});
 const folded=box(rack,.42,.05,.28,1.33,.16,.87,cream);folded.rotation.y=.3;box(rack,.045,.006,.26,1.38,.19,.86,blue);wicker(rack,-1.32,.1);
 const rackSnow=group(snow,...rack.position.toArray() as [number,number,number]);branch(rackSnow,V(-.7,1.17,-.2),V(.7,1.17,-.2),.025,snowMat,.025);const flatBoard=rack.children.find(o=>o instanceof T.Group&&Math.abs(o.position.x-1.15)<.01)!;const blanket=group(rackSnow);blanket.position.copy(flatBoard.position);blanket.quaternion.copy(flatBoard.quaternion);box(blanket,.43,.025,1.7,0,.105,0,snowMat);
 // Accessories sit beside the existing loungers and table; no extra seats or blockers.
 const rest=put('Straw slippers and picnic basket',-14.9,8.85,delicate);for(let i=0;i<2;i++){const g=group(rest,i*.19,.025,i*.06);g.rotation.y=i?.17:-.08;const sole=ball(g,.12,0,0,0,rope);sole.scale.set(.55,.15,1.35);const strap=ring(g,.055,.014,0,.042,-.015,cream);strap.scale.y=.55;}
 wicker(rest,.48,.08);cyl(rest,.048,.048,.22,.27,.11,-.12,bottle);cyl(rest,.022,.025,.07,.27,.25,-.12,bottle);cyl(rest,.026,.026,.017,.27,.293,-.12,wood);
 // Reuse cinema's three cushions, blanket and two path lamps, avoiding duplicate seating.
 consolidate(fixed);consolidate(delicate);consolidate(snow);fixed.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=false;o.receiveShadow=true}});delicate.traverse(o=>{if(o instanceof T.Mesh)o.castShadow=false});
 let last='';return {root,obstacles,update(weather:'sun'|'rain'|'snow',dusk:number,inside:boolean){root.visible=!inside;snow.visible=weather==='snow';delicate.visible=weather!=='snow';if(last!==weather){last=weather;mats.forEach((m,i)=>{m.color.copy(original[i]).multiplyScalar(weather==='rain'?.86:1);m.roughness=weather==='rain'?.73:m===bottle?.48:.88})}lamp.emissiveIntensity=dusk*(weather==='rain'?.25:.45);},diagnostics:()=>({placements,paddleboards:3,paddles:2,shellGroups:3,reusedCinemaCushions:3,reusedCinemaBlanket:1,obstacles,draws:fixed.children.filter(x=>x instanceof T.Mesh).length+delicate.children.filter(x=>x instanceof T.Mesh).length+snow.children.filter(x=>x instanceof T.Mesh).length,additionalLights:0,weather:last})};
}
