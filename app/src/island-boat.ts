import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {V,group,mesh,box,ball,cyl,branch,consolidate} from './winter-geometry';
import {boardwalkTopAtZ} from './island-props';

export type BoatState=0|1|2;
export type BoatWeather='sun'|'rain'|'snow';
export type BoatParameters={BoatState:BoatState;BoatPhase:number;VisitorCount:number};
export const ISLAND_BOAT_ANCHOR=V(1.35,-1.63,30.8);
const DOCK_LANDING=V(.55,-1.57,26.899752605542062);
const DOCK_CENTER=V(-.65,-1.57,26.899752605542062);
const YAW=Math.PI/2+Math.PI/12;
const ARRIVE=16,MOOR=30,DEPART=16,CYCLE=ARRIVE+MOOR+DEPART;
const ease=(v:number)=>{const x=T.MathUtils.clamp(v,0,1);return x*x*(3-2*x)};
const mat=(color:string,roughness=.8,metalness=0)=>new T.MeshStandardMaterial({color,roughness,metalness});
const rounded=(p:T.Object3D,w:number,h:number,d:number,x:number,y:number,z:number,m:T.Material,r=.04)=>mesh(p,new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/3,h/3,d/3)),m,x,y,z);

/** One closed, flat-bottom boat. Anchor is the moored hull centre, not the dock. */
export function createIslandBoat(scene:T.Scene,surfaceAt:(x:number,z:number,t:number)=>number,anchor:T.Vector3=ISLAND_BOAT_ANCHOR.clone()){
 const root=group(scene);root.name='One 7.2m rounded-bow excursion boat';root.rotation.order='YXZ';
 const dockLocal=DOCK_LANDING.clone().sub(anchor).applyAxisAngle(V(0,1,0),-YAW);
 const entry=V(1.12,.76,T.MathUtils.clamp(dockLocal.z,-.20,-.05));
 const parameters:BoatParameters={BoatState:0,BoatPhase:0,VisitorCount:2};
 const cream=mat('#EFE6D4',.63),green=mat('#4A5D3F',.48),wood=mat('#C8A87C',.61),woodEnd=mat('#99764D',.88),brass=mat('#B99C5C',.29,.72),silver=mat('#BFC5BD',.25,.8),dark=mat('#27342A',.7),ropeMat=mat('#B6A585'),wicker=mat('#B59669'),weave=mat('#8F704B'),linen=mat('#E8DFCC',.99),terracotta=mat('#AD7058'),coatMat=mat('#46514A',.28);
 const glass=new T.MeshPhysicalMaterial({color:'#DDE8D8',transparent:true,opacity:.24,roughness:.12,metalness:.05,depthWrite:false,side:T.DoubleSide});
 const snowMat=mat('#E8EEE9',.96),foamMat=new T.MeshBasicMaterial({color:'#DEEAE0',transparent:true,opacity:.32,depthWrite:false});
 const built=group(root);built.name='Batched closed hull and onboard fittings';

 // Each side strip joins matching rings; the inner shell and bottom close the hull.
 const outline=new T.Shape();outline.moveTo(-.9,-3.6);outline.lineTo(.9,-3.6);
 outline.bezierCurveTo(1.08,-3.6,1.15,-3.35,1.15,-2.9);outline.lineTo(1.15,1.65);
 outline.bezierCurveTo(1.15,2.72,.61,3.6,0,3.6);outline.bezierCurveTo(-.61,3.6,-1.15,2.72,-1.15,1.65);
 outline.lineTo(-1.15,-2.9);outline.bezierCurveTo(-1.15,-3.35,-1.08,-3.6,-.9,-3.6);
 const ring=outline.getSpacedPoints(88).slice(0,-1);
 function hullStrip(y0:number,s0:number,y1:number,s1:number,m:T.Material,parent:T.Group=built){
  const p:number[]=[],uv:number[]=[],indices:number[]=[];
  for(let i=0;i<ring.length;i++){const q=ring[i];p.push(q.x*s0,y0,q.y*s0,q.x*s1,y1,q.y*s1);uv.push(i/ring.length,0,i/ring.length,1)}
  for(let i=0;i<ring.length;i++){const a=i*2,b=((i+1)%ring.length)*2;indices.push(a,a+1,b,b,a+1,b+1)}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();return mesh(parent,g,m);
 }
 function hullSlab(scale:number,top:number,depth:number,m:T.Material){
  const s=new T.Shape(ring.map(p=>new T.Vector2(p.x*scale,p.y*scale)));
  const g=new T.ExtrudeGeometry(s,{depth,bevelEnabled:false,steps:1});g.rotateX(Math.PI/2);g.translate(0,top,0);return mesh(built,g,m);
 }
 hullSlab(.79,-.17,.09,cream);
 hullStrip(-.17,.79,-.10,.92,cream);hullStrip(-.10,.92,.055,.965,green);
 hullStrip(.055,.965,.44,.995,cream);hullStrip(.44,.995,.71,1,cream);
 hullStrip(.71,1,.71,.912,wood);hullStrip(.71,.912,.13,.82,cream);hullSlab(.82,.13,.08,cream);
 // Floor boards sit above a solid sole, with a clear central walking aisle.
 for(let x=-.75;x<=.75;x+=.15)box(built,.136,.025,5.8,x,.151,-.15,wood);
 for(let z=-2.7;z<=2.65;z+=.61){
  const w=z>1.6?.92-(z-1.6)*.23:.97;
  for(const side of [-1,1]){branch(built,V(side*w*.86,.18,z),V(side*w,.63,z),.027,wood,.03);ball(built,.015,side*w,.59,z,brass)}
 }
 // Continuous honey-coloured gunwale, brass fasteners and rubbing strake.
 for(let i=0;i<ring.length;i++){
  const a=ring[i],b=ring[(i+1)%ring.length];branch(built,V(a.x,.735,a.y),V(b.x,.735,b.y),.052,wood,.052);
  branch(built,V(a.x*.99,.42,a.y*.99),V(b.x*.99,.42,b.y*.99),.014,woodEnd,.014);
  if(i%5===0)ball(built,.016,a.x,.783,a.y,brass);
 }
 // Four independent cushion shapes, including one displaced/rotated cushion.
 const cushionTops:{x:number;y:number;z:number;angle:number}[]=[];
 for(const side of [-1,1])for(const z of [-.98,.71]){
  const x=side*.70;rounded(built,.69,.105,1.15,x,.31,z,wood,.025);
  box(built,.065,.18,.88,x-side*.22,.215,z,wood);box(built,.065,.18,.88,x+side*.22,.215,z,wood);
  const crooked=side===-1&&z<0;const c=group(built,x+(crooked?.035:0),.438,z+(crooked?.045:0));c.rotation.y=crooked?.12:0;
  rounded(c,.65,.16,1.02,0,0,0,linen,.07);
  for(const q of [-1,1]){branch(c,V(-.26,.055,q*.45),V(.26,.055,q*.45),.008,cream,.008);branch(c,V(q*.28,.055,-.45),V(q*.28,.055,.45),.008,cream,.008)}
  cushionTops.push({x:c.position.x,y:.54,z:c.position.z,angle:c.rotation.y});
 }
 // Three real steps occupy the gap between the starboard bench cushions.
 for(let i=0;i<3;i++){const h=.20+i*.20;rounded(built,.29,h,.44,.32+i*.29,.155+h/2,entry.z,wood,.015);box(built,.27,.012,.035,.32+i*.29,.16+h,entry.z-.19,woodEnd)}
 // A folded, striped throw is a thin solid draped over the aft cushion edge.
 const throwGroup=group(built,-.70,.54,-1.1);throwGroup.rotation.y=.12;
 rounded(throwGroup,.60,.035,.55,0,0,0,linen,.015);
 rounded(throwGroup,.055,.34,.55,.275,-.16,0,linen,.015);
 for(let z=-.23;z<=.23;z+=.10){box(throwGroup,.59,.008,.033,0,.022,z,terracotta);box(throwGroup,.012,.33,.033,.308,-.16,z,terracotta)}
 for(let z=-.24;z<=.24;z+=.06)branch(throwGroup,V(.30,-.33,z),V(.34,-.39,z+.012),.006,linen,.004);
 // Rounded wicker travel cases: six solid sides and crossing weave strips.
 function suitcase(x:number,y:number,z:number,w:number,h:number,d:number,angle:number){
  const g=group(built,x,y,z);g.rotation.y=angle;rounded(g,w,h,d,0,0,0,wicker,.055);
  for(let a=-w/2+.05;a<w/2;a+=.065){box(g,.016,h-.04,.012,a,0,d/2+.002,weave);box(g,.016,h-.04,.012,a,0,-d/2-.002,weave);box(g,.016,.012,d-.03,a,h/2+.003,0,weave)}
  for(let a=-h/2+.035;a<h/2;a+=.055){box(g,w-.04,.012,.012,0,a,d/2+.008,wood);box(g,w-.04,.012,.012,0,a,-d/2-.008,wood);box(g,.012,.012,d-.04,w/2+.005,a,0,weave);box(g,.012,.012,d-.04,-w/2-.005,a,0,weave)}
  for(const side of [-1,1]){box(g,.05,h+.009,d+.012,side*w*.30,0,0,woodEnd);box(g,.065,.056,.025,side*w*.30,.02,d/2+.02,brass)}
  branch(g,V(-.13,h/2+.04,0),V(.13,h/2+.04,0),.019,woodEnd,.019);
  branch(g,V(-.13,h/2+.04,0),V(-.13,h/2-.005,0),.019,brass,.019);branch(g,V(.13,h/2+.04,0),V(.13,h/2-.005,0),.019,brass,.019);
 }
 suitcase(.18,.39,2.22,.93,.43,.60,-.1);suitcase(.15,.74,2.22,.73,.27,.49,.12);
 // Rope coil consists of a closed solid tube, with a loose end leading aft.
 const coilPoints=Array.from({length:160},(_,i)=>{const a=i/159*Math.PI*8;const r=.31-i/159*.19;return V(-.46+Math.cos(a)*r,.183+i/159*.037,2.65+Math.sin(a)*r)});
 mesh(built,new T.TubeGeometry(new T.CatmullRomCurve3(coilPoints),160,.016,5,false),ropeMat);
 branch(built,coilPoints[0],V(-.79,.19,2.20),.016,ropeMat,.016);
 // Green quadrants on a cream lifering, hanging outside the port gunwale.
 const life=group(built,-1.15,.38,-1.75);life.rotation.y=Math.PI/2;
 mesh(life,new T.TorusGeometry(.27,.066,8,40),cream);
 for(let i=0;i<4;i++){const q=mesh(life,new T.TorusGeometry(.272,.071,8,9,Math.PI*.24),green);q.rotation.z=i*Math.PI/2}
 mesh(life,new T.TorusGeometry(.365,.013,5,40),ropeMat);
 for(const a of [0,Math.PI/2,Math.PI,Math.PI*1.5])branch(life,V(Math.cos(a)*.29,Math.sin(a)*.29,0),V(Math.cos(a)*.365,Math.sin(a)*.365,0),.012,ropeMat,.012);
 // Small outboard at the flat transom; underwater shaft and propeller are solid.
 const motor=group(built,0,.42,-3.64);rounded(motor,.50,.47,.46,0,.05,-.12,green,.09);
 rounded(motor,.51,.13,.44,0,.19,-.12,silver,.04);box(motor,.36,.18,.05,0,-.03,.12,dark);
 cyl(motor,.06,.08,.59,0,-.42,-.14,silver);rounded(motor,.20,.14,.38,0,-.72,-.18,green,.03);
 const prop=group(motor,0,-.72,-.41);const hub=cyl(prop,.035,.035,.12,0,0,0,silver);hub.rotation.x=Math.PI/2;
 for(let i=0;i<3;i++){const blade=rounded(prop,.07,.23,.025,0,.095,-.04,silver,.025);blade.rotation.z=i*Math.PI*2/3;blade.position.set(Math.sin(-i*Math.PI*2/3)*.095,Math.cos(i*Math.PI*2/3)*.095,-.04)}
 branch(motor,V(.18,.12,.10),V(.48,.18,.47),.027,dark,.023);box(built,.6,.06,.13,0,.49,-3.51,wood);
 // Aft helm and a pale, framed windshield; glass itself has finite thickness.
 rounded(built,.61,.49,.52,.50,.405,-2.47,cream,.06);box(built,.64,.065,.56,.5,.69,-2.46,wood);
 const wheel=group(built,.49,.81,-2.52);wheel.rotation.x=-.65;
 mesh(wheel,new T.TorusGeometry(.17,.016,6,24),woodEnd);
 for(let a=0;a<Math.PI*2;a+=Math.PI*2/3)branch(wheel,V(0,0,0),V(Math.cos(a)*.16,Math.sin(a)*.16,0),.012,brass,.012);
 const windshield=group(built,.48,.94,-2.08);windshield.rotation.x=-.14;
 rounded(windshield,.91,.44,.018,0,0,0,glass,.008);
 for(const x of [-.465,.465])branch(windshield,V(x,-.23,0),V(x,.23,0),.018,brass,.018);
 for(const y of [-.23,.23])branch(windshield,V(-.465,y,0),V(.465,y,0),.018,brass,.018);
 // Wet coat hangs outside the rail: closed, irregularly draped body and sleeves.
 const coat=group(built,-1.16,.77,.26);coat.rotation.z=-.09;
 const coatShape=new T.Shape();coatShape.moveTo(-.23,0);coatShape.lineTo(.21,0);coatShape.lineTo(.27,-.70);coatShape.quadraticCurveTo(.12,-.79,-.03,-.73);coatShape.lineTo(-.28,-.77);coatShape.closePath();
 const coatGeo=new T.ExtrudeGeometry(coatShape,{depth:.043,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:.018,bevelThickness:.012});coatGeo.rotateY(Math.PI/2);mesh(coat,coatGeo,coatMat);
 branch(coat,V(0,-.04,-.18),V(-.06,-.58,-.33),.075,coatMat,.06);branch(coat,V(0,-.05,.18),V(-.08,-.52,.32),.075,coatMat,.06);
 for(const z of [-.12,.03,.15])branch(coat,V(-.057,-.12,z),V(-.055,-.68,z+.02),.008,dark,.004);
 // Cleats, handholds and small drain details remain legible from either side.
 for(const z of [-2.85,2.95])for(const x of [-.7,.7]){box(built,.17,.035,.06,x,.77,z,brass);branch(built,V(x-.09,.80,z),V(x+.09,.80,z),.016,brass,.016)}
 for(const side of [-1,1])for(const z of [-2.1,1.65]){branch(built,V(side*1.12,.77,z-.17),V(side*1.12,.87,z-.17),.014,brass,.014);branch(built,V(side*1.12,.87,z-.17),V(side*1.12,.87,z+.17),.014,brass,.014);branch(built,V(side*1.12,.87,z+.17),V(side*1.12,.77,z+.17),.014,brass,.014)}
 consolidate(built);built.traverse(o=>{if(o instanceof T.Mesh)o.castShadow=o.material!==glass});

 // Only upward gunwale and cushion surfaces receive 50 mm snow caps.
 const snow=group(root);snow.name='50mm snow on upward rim and cushion tops only';
 hullStrip(.835,1,.835,.915,snowMat,snow);
 hullStrip(.785,1,.835,1,snowMat,snow);hullStrip(.835,.915,.785,.915,snowMat,snow);
 for(const c of cushionTops){const g=group(snow,c.x,c.y,c.z);g.rotation.y=c.angle;rounded(g,.625,.05,.99,0,0,0,snowMat,.022)}
 consolidate(snow);snow.visible=false;
 // Instancing keeps rain drops animated without adding many draw calls.
 const dropMat=new T.MeshPhysicalMaterial({color:'#D6E5E0',transparent:true,opacity:.65,roughness:.05,depthWrite:false});
 const drops=new T.InstancedMesh(new T.SphereGeometry(.006,5,4),dropMat,24);drops.name='Rain droplets on windshield';root.add(drops);drops.visible=false;
 const dummy=new T.Object3D();const windMatrix=new T.Matrix4().makeRotationX(-.14);windMatrix.setPosition(.48,.94,-2.08);

 // Gangway and visitors are siblings of the boat: their dock endpoint stays still.
 const shore=group(scene);shore.name='Boat gangway and world-space visitors';
 const gangway=group(shore);const plank=box(gangway,.66,.065,1,0,0,0,wood);plank.castShadow=true;
 const gangwayBeams=[box(gangway,.055,.085,1,-.255,-.05,0,woodEnd),box(gangway,.055,.085,1,.255,-.05,0,woodEnd)];
 const treads=Array.from({length:9},(_,i)=>box(gangway,.64,.017,.03,0,.04,(i-4)/9,woodEnd));
 const cleatPoint=DOCK_LANDING.clone().add(V(-.10,.04,.039));
 const shoreCleat=group(shore,cleatPoint.x,cleatPoint.y,cleatPoint.z);box(shoreCleat,.16,.03,.08,0,0,0,brass);branch(shoreCleat,V(-.12,.04,0),V(.12,.04,0),.018,brass,.018);consolidate(shoreCleat);
 const tether=group(scene);tether.name='Mooring rope, slack on arrival and released on departure';
 const ropePieces=Array.from({length:20},()=>mesh(tether,new T.CylinderGeometry(.013,.013,1,5),ropeMat));
 const ropeStart=V(1.1,.77,.30);

 const skin=mat('#B8A18B'),shirt=mat('#E3DAC5'),dress=mat('#7C8B71'),hatMat=mat('#CEB780'),trouser=mat('#A59D85');
 type Visitor={root:T.Group;hips:T.Group;leftArm:T.Group;rightArm:T.Group;legs:T.Group[];knees:T.Group[];feet:T.Mesh[];seat:T.Vector3;phase:number};
 const visitors:Visitor[]=[];
 for(let i=0;i<3;i++){
  const p=group(shore);p.name=['Faceless straw-hat linen visitor','Faceless beach-dress visitor','Optional faceless linen visitor'][i];
  const hips=group(p,0,.82,0);const torso=rounded(hips,.37,.48,.23,0,.24,0,i===1?dress:shirt,.07);torso.castShadow=true;
  cyl(hips,.055,.06,.08,0,.52,0,skin);const head=ball(hips,.115,0,.68,0,skin);head.scale.set(.82,1.07,.91);
  if(i!==1){cyl(hips,.22,.22,.028,0,.78,0,hatMat);cyl(hips,.115,.14,.13,0,.85,0,hatMat);cyl(hips,.141,.142,.032,0,.80,0,woodEnd)}
  else {const hair=ball(hips,.12,0,.70,-.028,dark);hair.scale.set(1,1,.72);ball(hips,.06,0,.69,-.13,dark);cyl(hips,.22,.29,.47,0,-.08,0,dress)}
  const arms:T.Group[]=[],legs:T.Group[]=[],knees:T.Group[]=[],feet:T.Mesh[]=[];
  for(const side of [-1,1]){
   const a=group(hips,side*.225,.40,0);cyl(a,.052,.044,.31,0,-.135,0,i===1?skin:shirt);branch(a,V(0,-.28,0),V(0,-.49,.05),.035,skin,.031);ball(a,.039,0,-.50,.05,skin);arms.push(a);
   const leg=group(hips,side*.10,-.02,0);cyl(leg,.066,.055,.38,0,-.19,0,i===1?skin:trouser);const knee=group(leg,0,-.38,0);cyl(knee,.053,.038,.37,0,-.185,0,i===1?skin:trouser);feet.push(rounded(knee,.13,.07,.23,0,-.385,.045,woodEnd,.025));legs.push(leg);knees.push(knee);
  }
  visitors.push({root:p,hips,leftArm:arms[0],rightArm:arms[1],legs,knees,feet,seat:V(i===1?-.7:.7,-.25,i===2?-.98:.71),phase:i*.17});
 }
 const wake=group(scene);wake.name='Moving aft-facing V wake and idle propeller ripples';
 const wakeStrips:T.Mesh[]=[];
 for(const side of [-1,1])for(let j=0;j<3;j++){
  const pts=Array.from({length:18},(_,i)=>{const a=i/17;return V(side*(.42+a*(1.8+j*.25)),0,-3.7-a*(5.5+j*.7))});
  const strip=mesh(wake,new T.TubeGeometry(new T.CatmullRomCurve3(pts),18,.019-j*.003,4,false),foamMat);strip.userData.restPosition=new Float32Array(strip.geometry.attributes.position.array);wakeStrips.push(strip);
 }
 const idleRings=Array.from({length:3},()=>{const m=mesh(wake,new T.TorusGeometry(.3,.009,4,32),foamMat,0,0,-3.95);m.rotation.x=Math.PI/2;return m});
 const forward=V(Math.sin(YAW),0,Math.cos(YAW)),up=V(0,1,0),worldEntry=V(0,0,0),worldSeat=V(0,0,0),worldStep=V(0,0,0);
 const gangwayInverse=new T.Matrix4();const shoeCorners:T.Vector3[]=[];
 for(const x of [-.065,.065])for(const y of [-.035,.035])for(const z of [-.115,.115])shoeCorners.push(V(x,y,z));
 let lastTime=0,lastWeather:BoatWeather='sun',speed=0,ropeTension=0,buoyancyY=anchor.y,probeHeights=[anchor.y,anchor.y],gangwayLength=0;
 let cycleOffset=0,autoCycle=true,pausedPhase=0,publishedState:BoatState=0,publishedPhase=0;
 const cycleSeconds=(t:number)=>autoCycle?((t+cycleOffset)%CYCLE+CYCLE)%CYCLE:pausedPhase;
 const stateAt=(phase:number):BoatState=>phase<ARRIVE?0:phase<ARRIVE+MOOR?1:2;
 function applyParameters(values:Partial<BoatParameters>&{AutoCycle?:boolean},atTime:number){
  let next=cycleSeconds(atTime);
  if(values.BoatPhase!==undefined&&Number.isFinite(values.BoatPhase))next=T.MathUtils.clamp(values.BoatPhase,0,1-1e-9)*CYCLE;
  if(values.BoatState!==undefined&&[0,1,2].includes(values.BoatState)){
   const starts=[0,ARRIVE,ARRIVE+MOOR];
   if(values.BoatPhase===undefined||stateAt(next)!==values.BoatState)next=starts[values.BoatState];
  }
  if(values.AutoCycle!==undefined)autoCycle=values.AutoCycle;
  cycleOffset=next-atTime;pausedPhase=next;
  if(values.VisitorCount!==undefined&&Number.isFinite(values.VisitorCount))parameters.VisitorCount=T.MathUtils.clamp(Math.round(values.VisitorCount),0,3);
  parameters.BoatState=publishedState=stateAt(next);parameters.BoatPhase=publishedPhase=next/CYCLE;
 }
 /** BoatPhase is the full normalized cycle; a state edit seeks its first frame. */
 function setParameters(values:Partial<BoatParameters>&{AutoCycle?:boolean},atTime=lastTime){applyParameters(values,atTime);update(atTime,0,lastWeather);return {...parameters,AutoCycle:autoCycle}}
 const setSegment=(o:T.Mesh,a:T.Vector3,b:T.Vector3)=>{o.position.copy(a).add(b).multiplyScalar(.5);o.scale.y=a.distanceTo(b);o.quaternion.setFromUnitVectors(up,b.clone().sub(a).normalize())};
 function walkPath(points:T.Vector3[],progress:number){
  const lengths=points.slice(1).map((p,i)=>p.distanceTo(points[i]));const total=lengths.reduce((a,b)=>a+b,0);let d=T.MathUtils.clamp(progress,0,1)*total;
  for(let i=0;i<lengths.length;i++){if(d<=lengths[i]||i===lengths.length-1)return points[i].clone().lerp(points[i+1],Math.min(1,d/Math.max(.001,lengths[i])));d-=lengths[i]}return points[points.length-1].clone();
 }
 function update(t:number,dt:number,weather:BoatWeather){
  // Also honour edits through the original public mutable parameters object.
  const changedState=parameters.BoatState!==publishedState,changedPhase=parameters.BoatPhase!==publishedPhase;
  if(changedState||changedPhase)applyParameters({...changedState?{BoatState:parameters.BoatState}:{},...changedPhase?{BoatPhase:parameters.BoatPhase}:{}},t);
  lastTime=t;lastWeather=weather;const phase=cycleSeconds(t);parameters.BoatPhase=publishedPhase=phase/CYCLE;
  parameters.BoatState=publishedState=stateAt(phase);
  const arrivePhase=phase/ARRIVE,departPhase=(phase-ARRIVE-MOOR)/DEPART;
  const along=parameters.BoatState===0?-33*(1-ease(arrivePhase)):parameters.BoatState===2?33*ease(departPhase):0;
  speed=parameters.BoatState===0?33*6*T.MathUtils.clamp(arrivePhase,0,1)*(1-T.MathUtils.clamp(arrivePhase,0,1))/ARRIVE:parameters.BoatState===2?33*6*departPhase*(1-departPhase)/DEPART:0;
  root.position.copy(anchor).addScaledVector(forward,along);
  // Two actual water samples drive pitch and roll; decorative bob is additional.
  const a=V(-.72,0,-2.35).applyAxisAngle(up,YAW).add(root.position),b=V(.72,0,2.35).applyAxisAngle(up,YAW).add(root.position);
  probeHeights=[surfaceAt(a.x,a.z,t),surfaceAt(b.x,b.z,t)];buoyancyY=(probeHeights[0]+probeHeights[1])*.5;
  root.position.y=buoyancyY+.06*Math.sin(t*Math.PI*2/3.2);
  const gradient=probeHeights[1]-probeHeights[0];
  root.rotation.set(T.MathUtils.clamp(-Math.atan2(gradient,4.7),-T.MathUtils.degToRad(1.8),T.MathUtils.degToRad(1.8)),YAW,T.MathUtils.clamp(Math.atan2(gradient,4.7)*.38+.012*Math.sin(t*1.15),-T.MathUtils.degToRad(2.5),T.MathUtils.degToRad(2.5)),'YXZ');
  root.updateMatrixWorld(true);
  snow.visible=weather==='snow';drops.visible=weather==='rain';cream.roughness=weather==='rain'?.33:.63;wood.roughness=weather==='rain'?.39:.61;
  if(drops.visible){for(let i=0;i<24;i++){const p=V(-.40+(i*0.61803398875%1)*.8,.19-((t*(.07+(i%4)*.012)+i*.137)%1)*.38,.017).applyMatrix4(windMatrix);dummy.position.copy(p);dummy.rotation.set(-.14,0,0);dummy.scale.set(.62,1.2+(i%3)*.5,.55);dummy.updateMatrix();drops.setMatrixAt(i,dummy.matrix)}drops.instanceMatrix.needsUpdate=true}
  worldEntry.copy(entry).applyMatrix4(root.matrixWorld);if(weather==='snow')worldEntry.y+=.05;
  const gangwayEnd=DOCK_LANDING.clone();gangwayEnd.y=boardwalkTopAtZ(gangwayEnd.z,weather)+.055;
  gangway.visible=parameters.BoatState===1;gangwayLength=worldEntry.distanceTo(gangwayEnd);
  // Preserve world up when aiming inland, including when the slope changes at low tide.
  gangway.position.copy(worldEntry).add(gangwayEnd).multiplyScalar(.5);gangway.up.copy(up);gangway.lookAt(gangwayEnd);
  plank.scale.z=gangwayLength;for(const beam of gangwayBeams)beam.scale.z=gangwayLength;for(let i=0;i<treads.length;i++)treads[i].position.z=(i-4)/9*gangwayLength;
  gangway.updateMatrixWorld(true);gangwayInverse.copy(gangway.matrixWorld).invert();
  // A shore-fixed rope only exists once moored; elsewhere a short loose tail hangs.
  const ropeA=ropeStart.clone().applyMatrix4(root.matrixWorld);const moorTime=phase-ARRIVE;
  ropeTension=parameters.BoatState===1?ease(moorTime/.8):0;
  const ropeB=parameters.BoatState===1?cleatPoint.clone().add(V(0,.04,0)):V(1.09,.28,.60+.09*Math.sin(t*1.8)).applyMatrix4(root.matrixWorld);
  let old=ropeA;
  for(let i=0;i<ropePieces.length;i++){const f=(i+1)/ropePieces.length;const q=ropeA.clone().lerp(ropeB,f);q.y-=Math.sin(f*Math.PI)*(parameters.BoatState===1?.04+(1-ropeTension)*.22:.14);setSegment(ropePieces[i],old,q);old=q}
  const count=T.MathUtils.clamp(Math.round(parameters.VisitorCount),0,3);parameters.VisitorCount=count;
  for(let i=0;i<visitors.length;i++){
   const v=visitors[i];v.root.visible=i<count;if(!v.root.visible)continue;
   let out=0,walk=0,wave=0;
   // Complete disembark + wave in four seconds, then reboard before casting off.
   if(parameters.BoatState===1){const arrivalProgress=T.MathUtils.clamp((moorTime-i*.24)/2.85,0,1);const returnProgress=T.MathUtils.clamp((moorTime-(MOOR-4)+i*.12)/3,0,1);out=arrivalProgress*(1-returnProgress);walk=(arrivalProgress>0&&arrivalProgress<1)||(returnProgress>0&&returnProgress<1)?1:0;wave=arrivalProgress===1&&moorTime<4?Math.sin((moorTime-2.85)*Math.PI)*.55:0}
   const stand=ease(out*6);worldSeat.copy(v.seat).applyMatrix4(root.matrixWorld);
   const aisle=V(0,.18,v.seat.z).applyMatrix4(root.matrixWorld);worldStep.copy(entry).add(V(-.23,.075,0)).applyMatrix4(root.matrixWorld);if(weather==='snow')worldStep.y+=.05;
   const inland=.34+i*.36;
   const dockStop=DOCK_CENTER.clone().add(V(i===0?-.20:i===1?.25:0,0,-inland));dockStop.y=boardwalkTopAtZ(dockStop.z,weather)+.015;
   const route=[worldSeat,aisle,worldStep,worldEntry.clone().add(V(0,.075,0)),gangwayEnd.clone().add(V(0,.075,0)),dockStop];
   v.root.position.copy(walkPath(route,out));
   if(v.root.position.x<DOCK_LANDING.x-.06&&v.root.position.z<=DOCK_LANDING.z+.02)v.root.position.y=boardwalkTopAtZ(v.root.position.z,weather)+.015;
   if(out<.12)v.root.position.y=T.MathUtils.lerp(worldSeat.y,aisle.y,stand);
   const next=walkPath(route,Math.min(1,out+.02)),prev=walkPath(route,Math.max(0,out-.02));
   const targetYaw=walk?Math.atan2(next.x-prev.x,next.z-prev.z)+(moorTime>MOOR-4?Math.PI:0):out>.99?YAW+Math.PI:YAW;
   v.root.rotation.set(0,targetYaw,0);v.hips.rotation.z=walk?.018*Math.sin(t*9+i):0;
   for(let k=0;k<2;k++){v.legs[k].position.y=-.02;v.legs[k].rotation.x=-(1-stand)*Math.PI*.47+walk*stand*.23*Math.sin(t*9+k*Math.PI+i);v.knees[k].rotation.x=(1-stand)*Math.PI*.47+walk*stand*Math.max(0,-Math.sin(t*9+k*Math.PI+i))*.35}
   v.leftArm.rotation.x=walk?-.2*Math.sin(t*9+i):-.12;v.rightArm.rotation.x=walk?.2*Math.sin(t*9+i):-.12;
   v.rightArm.rotation.z=wave>0?-.9-wave-.16*Math.sin(t*15):-.08;v.leftArm.rotation.z=.08;
   // Lift each foot just enough to clear inclined tread tops while the body stays upright.
   if(parameters.BoatState===1&&out>.12){
    v.root.updateMatrixWorld(true);const legUp=up.clone().transformDirection(v.hips.matrixWorld),bridgeUp=legUp.clone().transformDirection(gangwayInverse);
    for(let k=0;k<2;k++){
     let lift=0;
     for(const corner of shoeCorners){
      const world=corner.clone().applyMatrix4(v.feet[k].matrixWorld),onBridge=world.clone().applyMatrix4(gangwayInverse);
      if(Math.abs(onBridge.x)<.36&&Math.abs(onBridge.z)<gangwayLength/2+.20)lift=Math.max(lift,(.0605-onBridge.y)/Math.max(.5,bridgeUp.y));
      if(world.x>=-1.85&&world.x<=DOCK_LANDING.x-.04&&world.z<=DOCK_LANDING.z+.02&&world.z>=DOCK_CENTER.z-1.4)lift=Math.max(lift,(boardwalkTopAtZ(world.z,weather)+.008-world.y)/Math.max(.5,legUp.y));
     }
     v.legs[k].position.y+=Math.max(0,lift);
    }
   }
  }
  wake.position.copy(root.position);wake.position.y=surfaceAt(root.position.x,root.position.z,t)+.015;wake.rotation.y=YAW;
  const power=parameters.BoatState===1?.10:T.MathUtils.clamp(speed/2,0,1);foamMat.opacity=.1+power*.23;
  for(let j=0;j<wakeStrips.length;j++){
   const p=(t*.25+(j%3)/3)%1;const strip=wakeStrips[j];strip.visible=parameters.BoatState!==1;strip.position.z=-p*.9;strip.scale.set(1+p*.14,1,1+p*.14);
   if(strip.visible){
    const rest=strip.userData.restPosition as Float32Array,positions=strip.geometry.attributes.position;
    for(let k=0;k<positions.count;k++){
     const lx=rest[k*3]*strip.scale.x,lz=rest[k*3+2]*strip.scale.z+strip.position.z;
     const wx=wake.position.x+lx*Math.cos(YAW)+lz*Math.sin(YAW),wz=wake.position.z-lx*Math.sin(YAW)+lz*Math.cos(YAW);
     positions.setY(k,surfaceAt(wx,wz,t)-wake.position.y+.02+rest[k*3+1]);
    }
    positions.needsUpdate=true;
   }
  }
  for(let j=0;j<idleRings.length;j++){const p=(t*.46+j/3)%1;idleRings[j].scale.setScalar(.35+p*2.2);idleRings[j].position.z=-3.95-p*.65;idleRings[j].visible=p<.88}
  // dt is accepted for integration parity; all animation is deterministic from t.
  void dt;
 }
 update(0,0,'sun');
 return {root,parameters,update,setParameters,diagnostics:()=>({boatCount:1,lengthM:7.2,beamM:2.3,hull:'closed shell with flat solid bottom and inner cockpit',anchor:anchor.toArray(),dockLanding:DOCK_LANDING.toArray(),dockVisitorDestination:DOCK_CENTER.toArray(),yawDegrees:105,state:parameters.BoatState,stateLabel:['Arriving','Moored','Departing'][parameters.BoatState],BoatPhase:parameters.BoatPhase,autoCycle,cycleSeconds:CYCLE,visitorCount:parameters.VisitorCount,maxVisitors:3,cushions:4,wickerSuitcases:2,buoyancyProbes:2,probeHeights,buoyancyY,bobAmplitudeM:.06,bobPeriodSeconds:3.2,pitchCapDegrees:1.8,rollCapDegrees:2.5,ropeTension,gangwayLengthM:gangwayLength,gangwayVisible:gangway.visible,snowThicknessM:.05,snowSurfaceScope:'upward gunwale and cushion tops',windshieldDroplets:drops.visible?24:0,worldSpaceVisitors:true,weather:lastWeather,time:lastTime,speedMps:speed,staticDrawCalls:built.children.filter(c=>c instanceof T.Mesh).length})};
}
