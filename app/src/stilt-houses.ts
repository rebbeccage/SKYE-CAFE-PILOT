import * as T from 'three';
import {SEA_LEVEL} from './island-geography';
import {beachGround} from './beach-ground';
import {V,group,mesh,box,ball,cyl,branch,material,consolidate} from './winter-geometry';

type Weather='sun'|'rain'|'snow';
type Pile={x:number;z:number;bed:number;bottom:number;top:number};
const FLOOR=.08, DECK_THICKNESS=.11;
// Actual outdoor seating is east of the cafe; the harbor and its approach are south.
// Find the existing rendered shoreline, rather than reshaping the island to fit houses.
function eastShore(z:number){let lo=8,hi=60;for(let i=0;i<30;i++){const x=(lo+hi)/2;if(beachGround(x,z)>SEA_LEVEL)lo=x;else hi=x;}return (lo+hi)/2;}
export const STILT_LAYOUT=[
 {name:'晨光小屋',z:-2.4,offshore:4,yaw:-1.45,wall:0xe8e1cf,roof:0x899b83},
 {name:'晾风小屋',z:2.8,offshore:4.6,yaw:-1.64,wall:0xc8b392,roof:0xb38775},
 {name:'渔灯小屋',z:8.4,offshore:3.6,yaw:-1.43,wall:0xc4c4b8,roof:0x667d71},
].map(h=>({...h,x:eastShore(h.z)+h.offshore}));

/** Decorative adapter only: no story, save, collision, camera or navigation state. */
export function createStiltHouses(scene:T.Scene,mobile:boolean){
 const root=group(scene);root.name='East shore stilt settlement';
 const fixed=group(root),snow=group(root);snow.name='Upward-facing stilt snow';snow.visible=false;
 const wood=material(0xc3af8d,.88),lightWood=material(0xd5c5a8,.91),oldWood=material(0xa99f88,.92),dark=material(0x746f5c,.94);
 const sage=material(0x93a488,.92),leaf=material(0xaebba0,.93),clay=material(0xb28c74,.88),cream=material(0xe6deca,.95),rope=material(0xb6a78b,.98),brass=material(0xa99a6e,.65,.25);
 const inset=material(0x687369,.95),glass=material(0xaaa98b,.68);glass.emissive.set(0xefc885);glass.emissiveIntensity=.025;
 const snowMat=material(0xdde3df,.97),tideMat=material(0x797e70,.98);
 const wetMaterials:T.MeshStandardMaterial[]=[wood,lightWood,oldWood,dark,rope,clay];
 const original=new Map<T.MeshStandardMaterial,T.Color>();
 const piles:Pile[]=[],deckChecks:{x:number;z:number;y:number;kind:string}[]=[];
 const wind:{root:T.Group;phase:number;kind:'cloth'|'plant'}[]=[];
 const houseDiagnostics:{name:string;center:number[];yaw:number;door:number[];bounds:{min:number[];max:number[]};seabed:number;roof:number}[]=[];
 const railTop=.76;
 const railRequests:{a:T.Vector3;b:T.Vector3}[]=[];
 const railPieces:{from:number[];to:number[]}[]=[];
 function rail(p:T.Object3D,a:T.Vector3,b:T.Vector3,_withSnow=true){p.updateWorldMatrix(true,false);railRequests.push({a:p.localToWorld(a.clone()),b:p.localToWorld(b.clone())});}

 function buildRail(p:T.Object3D,a:T.Vector3,b:T.Vector3,withSnow=true){
  const d=a.distanceTo(b),steps=Math.max(1,Math.ceil(d/.72));
  branch(p,a.clone().add(V(0,railTop,0)),b.clone().add(V(0,railTop,0)),.027,lightWood,.027);
  branch(p,a.clone().add(V(0,.36,0)),b.clone().add(V(0,.36,0)),.018,wood,.018);
  for(let j=0;j<=steps;j++){const c=a.clone().lerp(b,j/steps);branch(p,c,c.clone().add(V(0,railTop+.03,0)),.026,wood,.026);}
  if(withSnow){p.updateWorldMatrix(true,false);const aa=p.localToWorld(a.clone().add(V(0,railTop+.025,0))),bb=p.localToWorld(b.clone().add(V(0,railTop+.025,0)));branch(snow,aa,bb,.022,snowMat,.022);}
 }
 function pile(x:number,z:number,top=FLOOR){
  const bed=beachGround(x,z),bottom=bed-.26;
  // The segment genuinely crosses the water and continues into the rendered sand mesh.
  branch(fixed,V(x,bottom,z),V(x,top,z),.077,wood,.07);
  piles.push({x,z,bed,bottom,top});
 }
 function plankDeck(p:T.Object3D,w:number,d:number,y:number,z=0){
  const n=Math.ceil(d/.19);for(let i=0;i<n;i++)box(p,w,DECK_THICKNESS,d/n-.009,0,y-DECK_THICKNESS/2,z-d/2+(i+.5)*d/n,[wood,lightWood,wood,oldWood][i%4]);
 }
 function planter(p:T.Object3D,x:number,y:number,z:number,phase:number){
  const g=group(p,x,y,z);cyl(g,.135,.09,.22,0,.11,0,clay);cyl(g,.118,.118,.012,0,.225,0,dark);
  mesh(g,new T.TorusGeometry(.127,.016,5,12),clay,0,.222,0).rotation.x=Math.PI/2;
  const plant=group(g,0,.23,0);for(let i=0;i<(mobile?5:8);i++){const a=i*2.4,end=V(Math.sin(a)*.18,.15+(i%3)*.07,Math.cos(a)*.15);branch(plant,V(0,0,0),end,.007,sage);const l=ball(plant,.07,end.x,end.y,end.z,i%2?leaf:sage);l.scale.set(.65,1.4,.28);l.rotation.z=-Math.sin(a)*.6;}
  consolidate(plant);plant.userData.animated=true;wind.push({root:plant,phase,kind:'plant'});
 }
 function cup(p:T.Object3D,x:number,y:number,z:number){cyl(p,.044,.033,.075,x,y+.0375,z,cream);cyl(p,.034,.034,.003,x,y+.073,z,dark);mesh(p,new T.TorusGeometry(.024,.008,5,10),cream,x+.043,y+.04,z);}
 function crate(p:T.Object3D,x:number,y:number,z:number){
  const g=group(p,x,y,z);box(g,.42,.035,.3,0,.02,0,oldWood);
  for(const s of [-1,1])for(let i=0;i<3;i++){box(g,.43,.065,.028,0,.07+i*.077,s*.15,i%2?wood:oldWood);box(g,.025,.065,.3,s*.215,.07+i*.077,0,wood)}
  for(const s of [-1,1])box(g,.034,.27,.034,s*.19,.135,.13,lightWood);
 }
 const entries:T.Vector3[]=[];
 for(const [index,h] of STILT_LAYOUT.entries()){
  const house=group(fixed,h.x,0,h.z);house.name=h.name;house.rotation.y=h.yaw;
  const wall=material(h.wall,.94),roof=material(h.roof,.94);wetMaterials.push(wall,roof);
  const world=(x:number,y:number,z:number)=>{house.updateWorldMatrix(true,false);return house.localToWorld(V(x,y,z));};
  // Floor and joists: body 2.6 × 2.6 m; porch 0.95 m, door 1.58 m.
  plankDeck(house,2.9,3.9,FLOOR,.3);
  for(const x of [-1.25,0,1.25])box(house,.105,.17,3.9,x,FLOOR-.185,.3,dark);
  for(const z of [-1.45,.35,2.15]){
   box(house,2.85,.14,.12,0,FLOOR-.26,z,oldWood);
   for(const x of [-1.25,1.25]){const c=world(x,FLOOR-.11,z);pile(c.x,c.z,c.y);}
   const a=world(-1.25,-.9,z),b=world(1.25,FLOOR-.27,z);branch(fixed,a,b,.036,oldWood,.036);
  }
  for(const x of [-1.25,1.25])branch(house,V(x,-.95,-1.45),V(x,FLOOR-.26,.35),.037,oldWood,.037);
  // Deliberate gaps between horizontal boards and real openings (no painted-on windows).
  const eave=1.98,wallBase=FLOOR,front=1.3,back=-1.3;
  const strip=(x:number,y:number,z:number,w:number,d:number)=>box(house,w,.153,d,x,y,z,wall);
  for(let row=0;row<12;row++){
   const y=wallBase+.08+row*.158,doorGap=y<1.66,win=y>.91&&y<1.57;
   strip(-.9,y,front,.8,.075);strip(.9,y,front,.8,.075);if(!doorGap)strip(0,y,front,1,.075);
   strip(0,y,back,2.6,.075);
   for(const s of [-1,1]){if(win){strip(s*1.3,y,-.89,.075,.82);strip(s*1.3,y,.89,.075,.82)}else strip(s*1.3,y,0,.075,2.6);}
  }
  // Door jamb and partially open wooden door, dark interior with a low bench.
  for(const x of [-.5,.5])box(house,.075,1.65,.12,x,.89,front,lightWood);
  box(house,1.08,.08,.13,0,1.73,front,lightWood);
  box(house,.84,1.55,.035,0,.87,front-.17,inset);
  const door=group(house,-.45,FLOOR,front+.05);door.rotation.y=-.32-index*.18;
  box(door,.83,1.58,.05,.415,.79,0,wood);for(let i=0;i<5;i++)box(door,.012,1.48,.005,.1+i*.15,.79,.028,oldWood);ball(door,.023,.72,.76,.042,brass);
  box(house,.75,.12,.32,0,.47,-.8,wood);
  // Two side windows, both backface-complete; shutters differ between the houses.
  for(const side of [-1,1]){
   const win=group(house,side*1.345,1.25,0);win.rotation.y=side*Math.PI/2;
   box(win,.98,.68,.045,0,0,-.05,inset);box(win,.78,.49,.025,0,0,-.015,glass);
   for(const sx of [-1,1])box(win,.06,.76,.1,sx*.49,0,.015,lightWood);
   for(const sy of [-1,1])box(win,1.04,.06,.1,0,sy*.35,.015,lightWood);
   box(win,.035,.66,.06,0,0,.035,wood);
   const shutter=group(win,-.51,0,.055);shutter.rotation.y=side*(.55+index*.28);
   for(let j=0;j<6;j++)box(shutter,.38,.071,.035,-.22,-.25+j*.10,0,wood).rotation.x=.12;
   for(const x of [-.4,-.04])box(shutter,.04,.66,.04,x,0,0,lightWood);
   box(win,1.13,.06,.25,0,-.39,.035,wood);
  }
  // Closed gable infill, overhanging solid roof sheets and slender fascia.
  const rise=.76,half=1.59,slope=Math.atan2(rise,half),length=Math.hypot(half,rise);
  for(const z of [back,front]){
   const shape=new T.Shape();shape.moveTo(-1.3,0);shape.lineTo(1.3,0);shape.lineTo(1.3,rise*(1-1.3/half));shape.lineTo(0,rise);shape.lineTo(-1.3,rise*(1-1.3/half));shape.closePath();
   mesh(house,new T.ExtrudeGeometry(shape,{depth:.06,bevelEnabled:false}),wall,0,eave,z-.03);
   branch(house,V(-1.31,eave+rise*(1-1.3/half),z+.05),V(0,eave+rise,z+.05),.027,lightWood,.027);
   branch(house,V(0,eave+rise,z+.05),V(1.31,eave+rise*(1-1.3/half),z+.05),.027,lightWood,.027);
  }
  for(const s of [-1,1]){
   const panel=box(house,length,.085,3.25,s*half/2,eave+rise/2,0,roof);panel.rotation.z=-s*slope;
   for(let j=0;j<10;j++){const seam=box(house,length,.012,.018,s*half/2,eave+rise/2+.045,-1.5+j/3,roof);seam.rotation.z=-s*slope;}
   const roofSnow=group(snow,h.x,0,h.z);roofSnow.rotation.y=h.yaw;
   box(roofSnow,length,.045,3.23,s*half/2,eave+rise/2+.065,0,snowMat).rotation.z=-s*slope;
   for(const z of [-1.65,1.65])branch(house,V(s*half,eave,z),V(0,eave+rise,z),.041,lightWood,.041);
  }
  branch(house,V(0,eave+rise,-1.7),V(0,eave+rise,1.7),.055,roof,.055);
  // Porch canopy leaves the porch front visibly open and the main roof silhouette clear.
  box(house,2.9,.055,.88,0,1.88,1.77,roof).rotation.x=.08;
  const porchSnow=group(snow,h.x,0,h.z);porchSnow.rotation.y=h.yaw;
  box(porchSnow,2.88,.035,.86,0,1.925,1.77,snowMat).rotation.x=.08;
  box(porchSnow,2.84,.025,.78,0,FLOOR+.013,1.81,snowMat);
  for(const x of [-1.35,1.35])box(house,.065,1.8,.065,x,FLOOR+.9,2.14,oldWood);
  rail(house,V(-1.39,FLOOR,1.34),V(-1.39,FLOOR,2.2));rail(house,V(1.39,FLOOR,1.34),V(1.39,FLOOR,2.2));
  for(const s of [-1,1])rail(house,V(s*.55,FLOOR,2.2),V(s*1.39,FLOOR,2.2));
  // Three restrained domestic vignettes, not additional activity or inventory systems.
  if(index===0){
   const chair=group(house,-.9,FLOOR,1.8);chair.rotation.y=.18;
   box(chair,.38,.05,.36,0,.4,0,lightWood);for(const x of [-.15,.15])for(const z of [-.14,.14])box(chair,.035,.4,.035,x,.2,z,wood);
   for(const x of [-.15,.15])box(chair,.035,.73,.035,x,.365,-.14,wood);for(let j=0;j<3;j++)box(chair,.34,.065,.035,0,.51+j*.08,-.14,lightWood);
   cyl(house,.17,.17,.045,-.4,FLOOR+.32,1.68,wood);branch(house,V(-.4,FLOOR,1.68),V(-.4,FLOOR+.32,1.68),.04,oldWood);cup(house,-.4,FLOOR+.343,1.68);
   planter(house,.97,FLOOR,1.75,1.4);
  }else if(index===1){
   const basket=group(house,-.98,FLOOR,1.8);cyl(basket,.18,.13,.25,0,.125,0,rope);
   for(let j=0;j<5;j++)mesh(basket,new T.TorusGeometry(.14+j*.009,.009,4,12),oldWood,0,.03+j*.045,0).rotation.x=Math.PI/2;
   mesh(basket,new T.TorusGeometry(.14,.012,5,14,Math.PI),rope,0,.25,0);
   for(let j=0;j<4;j++)mesh(house,new T.TorusGeometry(.08+j*.022,.012,5,16),rope,.95,FLOOR+.02+j*.006,1.78).rotation.x=Math.PI/2;
   branch(house,V(-1,1.69,1.62),V(1,1.69,1.62),.009,rope,.009);
   const cloth=group(house,.72,1.69,1.63);const geo=new T.PlaneGeometry(.48,.59,6,6),p=geo.attributes.position;
   for(let j=0;j<p.count;j++)p.setXYZ(j,p.getX(j),p.getY(j)-.295,Math.sin(p.getX(j)*35)*.018);geo.computeVertexNormals();
   const fabric=cream.clone();fabric.side=T.DoubleSide;wetMaterials.push(fabric);mesh(cloth,geo,fabric);cloth.userData.animated=true;wind.push({root:cloth,phase:3.7,kind:'cloth'});
  }else{
   crate(house,-.95,FLOOR,1.77);
   for(let j=0;j<2;j++)branch(house,V(.8+j*.1,FLOOR,1.9),V(.99+j*.08,1.47,1.37),.014,wood,.006);
   const net=group(house,.85,.58,1.84);for(let j=0;j<5;j++)branch(net,V(-.16,0,j*.055),V(.16,.34,j*.055),.0035,rope,.0035);
   for(let j=0;j<5;j++)branch(net,V(-.16+j*.06,0,0),V(-.16+j*.06,.34,.22),.0035,rope,.0035);
   const lamp=group(house,.68,1.42,1.4);box(lamp,.16,.23,.12,0,0,0,glass);for(const x of [-.095,.095])box(lamp,.022,.28,.16,x,0,0,brass);box(lamp,.23,.035,.2,0,.15,0,brass);box(lamp,.2,.03,.18,0,-.15,0,brass);
   planter(house,-1.05,FLOOR,1.4,6.1);
  }
  const entry=world(0,FLOOR,2.2);entries.push(entry);deckChecks.push({x:entry.x,z:entry.z,y:FLOOR-DECK_THICKNESS,kind:'porch'});
  house.updateWorldMatrix(true,true);const b=new T.Box3().setFromObject(house);
  houseDiagnostics.push({name:h.name,center:[h.x,FLOOR,h.z],yaw:h.yaw,door:entry.toArray(),bounds:{min:b.min.toArray(),max:b.max.toArray()},seabed:beachGround(h.x,h.z),roof:eave+rise});
 }
 // The spine runs on the east beach edge, far north of the port's z=25–31 m area.
 const spineX=eastShore(6.5)+1.5,joinZ=6.5,shoreStart=V(eastShore(joinZ)-3.8,0,joinZ);shoreStart.y=beachGround(shoreStart.x,shoreStart.z)+.04;
 const walkSegments:{from:number[];to:number[];width:number}[]=[];
 function walkway(a:T.Vector3,b:T.Vector3,w=.86,rails=true,steps=false){
  const length=Math.hypot(b.x-a.x,b.z-a.z),g=group(fixed);g.position.copy(a);g.rotation.y=Math.atan2(b.x-a.x,b.z-a.z);
  const n=Math.ceil(length/(steps?.34:.19));
  const top=(f:number)=>steps?a.y+(b.y-a.y)*Math.ceil(f*n)/n:a.y+(b.y-a.y)*f;
  for(let i=0;i<n;i++){
   const f=(i+.5)/n,y=top(f),c=a.clone().lerp(b,f);
   box(g,w,steps?.14:DECK_THICKNESS,length/n+.002,0,y-a.y-(steps?.07:DECK_THICKNESS/2),(i+.5)*length/n,[wood,lightWood,wood,oldWood][i%4]);
   deckChecks.push({x:c.x,z:c.z,y:y-(steps?.14:DECK_THICKNESS),kind:steps?'shore-step':'walkway'});
  }
  const stepCount=Math.ceil(length/1.35),side=V(Math.cos(g.rotation.y),0,-Math.sin(g.rotation.y));
  for(let i=0;i<=stepCount;i++){
   const f=i/stepCount,c=a.clone().lerp(b,f);c.y=top(f);
   for(const s of [-1,1]){const p=c.clone().addScaledVector(side,s*(w/2-.07));pile(p.x,p.z,c.y-.05);}
   const aa=c.clone().addScaledVector(side,-w/2),bb=c.clone().addScaledVector(side,w/2);aa.y-=.18;bb.y-=.18;branch(fixed,aa,bb,.05,oldWood,.05);
  }
  if(rails){for(const side of [-1,1]){
   // One shore-side opening serves the short approved bypass to house C.
   const end=steps&&side<0?Math.max(0,length-1.65):length;
   rail(g,V(side*w/2,0,0),V(side*w/2,(b.y-a.y)*end/length,end));
  }}
  const ice=group(snow);ice.position.copy(a);ice.rotation.y=g.rotation.y;
  // Snow only rests on upward deck surfaces, never the piles' vertical faces.
  if(steps){for(let i=0;i<n;i++)box(ice,w-.04,.023,length/n-.018,0,top((i+.5)/n)-a.y+.012,(i+.5)*length/n,snowMat);}
  else{box(ice,w-.04,.023,length,0,.012,length/2,snowMat);}
  walkSegments.push({from:a.toArray(),to:b.toArray(),width:w});
 }
 const shoreEnd=V(spineX,FLOOR,joinZ);
 walkway(shoreStart,shoreEnd,.9,true,true);
 const spineNodes=[entries[0].z,entries[1].z,joinZ,entries[2].z].sort((a,b)=>a-b);
 // Leave railing openings where the short branches actually join.
 for(let i=0;i<spineNodes.length-1;i++)walkway(V(spineX,FLOOR,spineNodes[i]),V(spineX,FLOOR,spineNodes[i+1]),.86,false);
 for(const side of [-1,1])for(let i=0;i<spineNodes.length-1;i++){
  const a=spineNodes[i]+.5,b=spineNodes[i+1]-.5;if(b>a)rail(fixed,V(spineX+side*.43,FLOOR,a),V(spineX+side*.43,FLOOR,b));
 }
 for(const e of entries)walkway(V(spineX,FLOOR,e.z),e,.86,true);
 // The decorative spine grazes house C; retain the house and add a short supported elbow.
 const bypassX=spineX-1.35;
 const bypassStart=V(bypassX,T.MathUtils.lerp(shoreStart.y,FLOOR,(bypassX-shoreStart.x)/(spineX-shoreStart.x)),joinZ);
 const bypassElbow=V(bypassX,FLOOR,joinZ+.8);
 walkway(bypassStart,bypassElbow,.90,false,true);
 walkway(bypassElbow,entries[2],.90,true);

 // Cut visual rails at every actual crossing deck, including the approved C-house bypass.
 // A rail lying along its own deck edge stays; a crossing deck creates a clear opening.
 for(const request of railRequests){const {a,b}=request,d=b.clone().sub(a),length=Math.hypot(d.x,d.z),n=Math.max(1,Math.ceil(length/.06));let start=-1;
  const blocked=(f:number)=>{const x=a.x+d.x*f,z=a.z+d.z*f;return walkSegments.some(seg=>{const [ax,,az]=seg.from,[bx,,bz]=seg.to,dx=bx-ax,dz=bz-az,l=Math.hypot(dx,dz);if(l<.01)return false;const parallel=Math.abs((d.x*dz-d.z*dx)/(Math.max(.001,length)*l))<.08;if(parallel)return false;const along=((x-ax)*dx+(z-az)*dz)/(l*l),perp=Math.abs((x-ax)*dz-(z-az)*dx)/l;return along>=-.23/l&&along<=1+.23/l&&perp<seg.width/2+.20;});};
  for(let i=0;i<=n;i++){const clear=i<n&&!blocked((i+.5)/n);if(clear&&start<0)start=i;if(!clear&&start>=0){const aa=a.clone().lerp(b,start/n),bb=a.clone().lerp(b,i/n);if(aa.distanceTo(bb)>.12){buildRail(fixed,aa,bb);railPieces.push({from:aa.toArray(),to:bb.toArray()});}start=-1;}}
 }
 // Local animated props are deliberately excluded from static material batches.
 const animated=group(root);for(const w of wind){root.updateWorldMatrix(true,true);animated.attach(w.root);}
 consolidate(fixed);consolidate(snow);
 fixed.traverse(o=>{if(o instanceof T.Mesh)o.castShadow=!mobile;});
 const tideBands=new T.InstancedMesh(new T.CylinderGeometry(.079,.081,.18,8),tideMat,piles.length);root.add(tideBands);tideBands.receiveShadow=true;
 const matrix=new T.Matrix4();let lastTide=NaN,lastWeather:Weather|undefined;
 wetMaterials.forEach(m=>original.set(m,m.color.clone()));
 let weather:Weather='sun';
 function update(t:number,state:Weather,dusk:number,tide:number){
  weather=state;snow.visible=state==='snow';
  if(lastWeather!==state){for(const m of wetMaterials){m.color.copy(original.get(m)!).multiplyScalar(state==='rain'?.80:state==='snow'?.94:1);m.roughness=state==='rain'?.73:.91;}lastWeather=state;}
  if(tide!==lastTide){piles.forEach((p,i)=>{const y=SEA_LEVEL+tide-.065;matrix.makeTranslation(p.x,y,p.z);if(y<p.bed+.03)matrix.scale(V(0,0,0));tideBands.setMatrixAt(i,matrix)});tideBands.instanceMatrix.needsUpdate=true;lastTide=tide;}
  glass.emissiveIntensity=.025+dusk*.72;
  for(const w of wind){const amount=state==='snow'?.18:state==='rain'?.35:1;w.root.rotation.z=Math.sin(t*.7+w.phase)*.023*amount;w.root.rotation.x=Math.sin(t*.51+w.phase)*.012*amount;}
 }
 update(0,'sun',0,0);
 return {root,update,diagnostics:()=>({count:3,side:'east / outdoor cafe seating',floor:FLOOR,deckUnderside:FLOOR-DECK_THICKNESS,conservativeWaveCeiling:SEA_LEVEL+.4+.64*1.5,houses:houseDiagnostics,piles,deckChecks,walkSegments,railPieces,shoreLanding:shoreStart.toArray(),snow:snow.visible,weather,windowEmission:glass.emissiveIntensity,staticBatches:fixed.children.filter(o=>o instanceof T.Mesh).length,snowBatches:snow.children.filter(o=>o instanceof T.Mesh).length,movingProps:wind.length,additionalLights:0,additionalReflectionPasses:0,mobile})};
}
