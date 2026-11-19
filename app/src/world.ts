import {createBushAssets} from './bush-assets';
import {createTreeAssets} from './tree-assets';
import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { sampleService, serviceStops } from './delivery';
import {createFrenchFloor,refineFrenchInterior} from './french-interior';

const V=(x:number,y:number,z:number)=>new T.Vector3(x,y,z);
let seed=61524;
const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
const range=(a:number,b:number)=>a+(b-a)*random();
function texture(kind:'wood'|'stone'){
  const c=document.createElement('canvas');c.width=c.height=512;const ctx=c.getContext('2d')!;
  ctx.fillStyle=kind==='wood'?'#bcae94':'#ded7c5';ctx.fillRect(0,0,512,512);
  for(let i=0;i<7500;i++){const v=range(50,160);ctx.strokeStyle=`rgba(${v},${v*.8},${v*.55},${kind==='wood'?.08:.12})`;ctx.lineWidth=range(.2,1.3);ctx.beginPath();const x=range(0,512),y=range(0,512);ctx.moveTo(x,y);ctx.lineTo(x+range(kind==='wood'?10:.3,kind==='wood'?160:3),y+range(0,2));ctx.stroke()}
  const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.wrapS=t.wrapT=T.RepeatWrapping;t.anisotropy=4;return t;
}
const woodTex=texture('wood'),stoneTex=texture('stone');
const mat=(color:T.ColorRepresentation,roughness=.8,metalness=0)=>new T.MeshStandardMaterial({color,roughness,metalness});
export const materials={
  stone:new T.MeshStandardMaterial({color:0xc9c2b4,map:stoneTex,roughness:.85,bumpMap:stoneTex,bumpScale:.035}),
  tile:new T.MeshStandardMaterial({color:0xc9c2b4,map:stoneTex,roughness:.9}),
  wood:new T.MeshStandardMaterial({color:0xc8a87c,map:woodTex,roughness:.64,bumpMap:woodTex,bumpScale:.016}),
  lightWood:new T.MeshStandardMaterial({color:0xd4bd97,map:woodTex,roughness:.64}),
  darkWood:mat(0x896b49),frame:mat(0x4a5d3f,.45,.45),frameEdge:mat(0x92958b,.36,.65),
  brass:mat(0xbfa46a,.3,.78),brassDark:mat(0x917440,.4,.72),cream:mat(0xefe9dc,.5),
  green:mat(0xa8b98f),greenDark:mat(0x718777),greenLight:mat(0xb8c79b),pot:mat(0xb2865c),
  soil:mat(0x524637),trunk:mat(0x927652),skin:mat(0xf0c9a8,.68),hair:mat(0x665440,.75),
  apron:mat(0x9b936b),shirt:mat(0xf0e9d8),pants:mat(0x757b63),shoe:mat(0x786d57),
  velvet:new T.MeshPhysicalMaterial({color:0x778568,roughness:.9,sheen:1,sheenColor:0xc6cfb4,sheenRoughness:.72}),velvetPiping:mat(0xb5baa2,.9),coffee:mat(0x433023,.25),black:mat(0x363b35),gravel:mat(0xbebda5),
  glass:new T.MeshPhysicalMaterial({color:0xe5eee4,transparent:true,opacity:.14,roughness:.05,metalness:.12,depthWrite:false,side:T.DoubleSide,envMapIntensity:1.5}),
  glassJar:new T.MeshPhysicalMaterial({color:0xede8d9,transparent:true,opacity:.25,roughness:.12,depthWrite:false,metalness:.18}),
  pendantLight:new T.MeshStandardMaterial({color:0xf2d9a0,emissive:0xffd092,emissiveIntensity:1.65,roughness:.24}),
  light:new T.MeshStandardMaterial({color:0xf2d9a0,emissive:0xffc36b,emissiveIntensity:1.25,roughness:.24}),
};
type Material=T.Material;
const boxCache=new Map<string,T.BufferGeometry>();
function rounded(w:number,h:number,d:number,r=.035){const key=[w,h,d,r].join();if(!boxCache.has(key))boxCache.set(key,new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/3,h/3,d/3)));return boxCache.get(key)!}
const sphereGeo=new T.SphereGeometry(1,18,12),leafGeo=new T.SphereGeometry(1,7,5);
function mesh(g:T.BufferGeometry,m:Material,p:T.Object3D,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=m!==materials.glass&&m!==materials.glassJar;o.receiveShadow=true;p.add(o);return o}
function box(p:T.Object3D,w:number,h:number,d:number,x:number,y:number,z:number,m:Material,r=.025){return mesh(rounded(w,h,d,r),m,p,x,y,z)}
function ball(p:T.Object3D,x:number,y:number,z:number,sx:number,sy:number,sz:number,m:Material,leaf=false){const o=mesh(leaf?leafGeo:sphereGeo,m,p,x,y,z);o.scale.set(sx,sy,sz);return o}
function cyl(p:T.Object3D,rt:number,rb:number,h:number,x:number,y:number,z:number,m:Material,n=16){return mesh(new T.CylinderGeometry(rt,rb,h,n),m,p,x,y,z)}
function beam(p:T.Object3D,a:T.Vector3,b:T.Vector3,r:number,m:Material,n=8){const dir=b.clone().sub(a);const o=cyl(p,r,r,dir.length(),0,0,0,m,n);o.position.copy(a).add(b).multiplyScalar(.5);o.quaternion.setFromUnitVectors(V(0,1,0),dir.normalize());return o}
function rail(p:T.Object3D,pts:T.Vector3[],r:number,m:Material){return mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts),24,r,6,false),m,p)}
function torus(p:T.Object3D,r:number,t:number,x:number,y:number,z:number,m:Material,rx=0,ry=0){const o=mesh(new T.TorusGeometry(r,t,6,28),m,p,x,y,z);o.rotation.set(rx,ry,0);return o}
function group(p:T.Object3D,x=0,y=0,z=0,angle=0){const g=new T.Group();g.position.set(x,y,z);g.rotation.y=angle;p.add(g);return g}
function label(p:T.Object3D,text:string,w:number,h:number,x:number,y:number,z:number,bg='#46523d',fg='#efe8d4'){
 const c=document.createElement('canvas');c.width=1024;c.height=256;const ctx=c.getContext('2d')!;ctx.fillStyle=bg;ctx.fillRect(0,0,1024,256);ctx.strokeStyle=fg;ctx.lineWidth=3;ctx.strokeRect(15,15,994,226);ctx.fillStyle=fg;ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='145px Georgia';ctx.fillText(text,512,133);const tex=new T.CanvasTexture(c);tex.colorSpace=T.SRGBColorSpace;const o=mesh(new T.PlaneGeometry(w,h),new T.MeshStandardMaterial({map:tex,roughness:.9}),p,x,y,z);return o;
}
function cup(p:T.Object3D,x:number,y:number,z:number,s=1,coffee=true){
 const g=group(p,x,y,z);g.scale.setScalar(s);cyl(g,.13,.13,.025,0,0,0,materials.cream,24);cyl(g,.088,.062,.13,0,.08,0,materials.cream,24);cyl(g,.073,.073,.005,0,.148,0,coffee?materials.coffee:materials.cream,24);torus(g,.085,.01,0,.145,0,materials.cream,Math.PI/2);torus(g,.043,.013,.1,.085,0,materials.cream);return g;
}
function pot(p:T.Object3D,x:number,y:number,z:number,size=.45){const g=group(p,x,y,z);g.userData.snowPot={radius:size*.63,height:size*.83};cyl(g,size*.64,size*.45,size*.85,0,size*.42,0,materials.pot);torus(g,size*.63,size*.055,0,size*.83,0,materials.pot,Math.PI/2);cyl(g,size*.57,size*.57,.02,0,size*.82,0,materials.soil);return g}
function fern(p:T.Object3D,x:number,y:number,z:number,s=.6){
 const g=group(p,x,y,z);pot(g,0,0,0,s*.6);
 for(let j=0;j<10;j++){const a=j/10*Math.PI*2;const len=s*range(.7,1.2);const start=V(0,s*.4,0),end=V(Math.cos(a)*len*.7,s*.45+len*.4,Math.sin(a)*len*.7);beam(g,start,end,.012,materials.greenDark,5);
 for(let k=1;k<=7;k++){const f=k/8;const pt=start.clone().lerp(end,f);pt.y+=Math.sin(f*Math.PI)*s*.25;const breadth=Math.sin(f*Math.PI)*s*.19;for(const side of [-1,1]){const o=ball(g,pt.x+Math.cos(a+side*.9)*breadth*.6,pt.y+.02,pt.z+Math.sin(a+side*.9)*breadth*.6,breadth,.018,breadth*.32,j%3===0?materials.greenLight:materials.greenDark,true);o.rotation.y=-a-side*.9;o.rotation.z=side*.25}}}return g;
}
function shrub(p:T.Object3D,x:number,y:number,z:number,s=.6){for(let i=0;i<5;i++)ball(p,x+range(-s*.5,s*.5),y+range(.15,s*.5),z+range(-s*.5,s*.5),s*range(.35,.6),s*range(.35,.65),s*range(.35,.6),i%2?materials.green:materials.greenLight)}
function chair(p:T.Object3D,x:number,y:number,z:number,angle=0,s=1){
 const g=group(p,x,y,z,angle);g.userData.snowChair=true;if(y<.5)g.userData.dynamic=true;g.scale.setScalar(s);cyl(g,.29,.28,.075,0,.55,0,materials.lightWood,24);
 for(const xx of [-.21,.21])for(const zz of [-.2,.2])beam(g,V(xx*.8,.53,zz*.8),V(xx*1.24,0,zz*1.22),.027,materials.wood);
 for(const xx of [-.25,.25])beam(g,V(xx,.53,-.2),V(xx,1,-.3),.025,materials.wood);
 const pts=[];for(let i=0;i<=20;i++){const a=Math.PI-i/20*Math.PI;pts.push(V(Math.cos(a)*.27,.78+Math.sin(a)*.32,-.29))}rail(g,pts,.026,materials.lightWood);
 for(let i=-4;i<=4;i++){const xx=i*.047,top=.78+Math.sqrt(Math.max(0,.27*.27-xx*xx))*1.15;beam(g,V(xx,.59,-.25),V(xx,top,-.29),.008,materials.wood,5)}
 for(let k=0;k<7;k++){const yy=.61+k*.055;const width=yy<.78?.25:Math.sqrt(Math.max(0,.27*.27-Math.pow((yy-.78)/1.15,2)));beam(g,V(-width,yy,-.285),V(width,yy,-.285),.007,materials.wood,5)}
 for(let i=-4;i<=4;i++){beam(g,V(i*.052,.591,-.2),V(i*.052,.591,.2),.005,materials.darkWood,4);beam(g,V(-.2,.505,i*.052),V(.2,.505,i*.052),.005,materials.darkWood,4)}
 if(y>.5){
  // Tailored upholstered inserts retain the established wooden silhouette and seat footprint.
  box(g,.49,.075,.43,0,.608,0,materials.velvet,.035);
  const back=box(g,.44,.34,.085,0,.86,-.242,materials.velvet,.04);back.rotation.x=-.1;
  rail(g,[V(-.22,.646,-.18),V(-.245,.646,0),V(-.22,.646,.18),V(0,.646,.208),V(.22,.646,.18),V(.245,.646,0),V(.22,.646,-.18),V(0,.646,-.208),V(-.22,.646,-.18)],.004,materials.velvetPiping);
  rail(g,[V(-.19,.73,-.191),V(-.21,.88,-.194),V(-.17,1.005,-.202),V(0,1.018,-.202),V(.17,1.005,-.202),V(.21,.88,-.194),V(.19,.73,-.191)],.004,materials.velvetPiping);
  for(const xx of [-.105,.105])ball(g,xx,.88,-.193,.014,.014,.007,materials.velvetPiping);
  g.userData.upholstery='sage velvet seat and back';
 }
 if(y<.5){g.updateWorldMatrix(true,true);const inverse=g.matrixWorld.clone().invert(),bins=new Map<Material,T.BufferGeometry[]>(),remove:T.Mesh[]=[];g.traverse(o=>{if(!(o instanceof T.Mesh))return;const m=o.material as Material,geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(inverse.clone().multiply(o.matrixWorld));geo.deleteAttribute('uv1');geo.deleteAttribute('tangent');if(!bins.has(m))bins.set(m,[]);bins.get(m)!.push(geo);remove.push(o)});for(const [m,geos] of bins){const combined=mergeGeometries(geos,false);if(combined)mesh(combined,m,g);geos.forEach(geo=>geo.dispose())}remove.forEach(o=>o.removeFromParent())}
 return g;
}
function table(p:T.Object3D,x:number,y:number,z:number,r=.48,withCup=true){const g=group(p,x,y,z);cyl(g,r,r,.08,0,.87,0,materials.lightWood,40);torus(g,r-.02,.015,0,.91,0,materials.wood,Math.PI/2);cyl(g,.048,.07,.8,0,.43,0,materials.frame);for(let i=0;i<3;i++){const a=i*Math.PI*2/3;beam(g,V(0,.13,0),V(Math.cos(a)*.33,.025,Math.sin(a)*.33),.035,materials.frame)}if(withCup)cup(g,.11,.923,.06);cyl(g,.04,.055,.15,-.19,.99,-.1,materials.cream);return g}
function kettle(p:T.Object3D,x:number,y:number,z:number,s=1){const g=group(p,x,y,z);g.scale.setScalar(s);cyl(g,.1,.15,.23,0,.13,0,materials.brass,24);cyl(g,.11,.07,.06,0,.27,0,materials.brass,24);ball(g,0,.313,0,.025,.02,.025,materials.brassDark);rail(g,[V(.1,.22,0),V(.25,.25,0),V(.25,.07,0),V(.13,.065,0)],.016,materials.brass);rail(g,[V(-.1,.07,0),V(-.22,.13,0),V(-.27,.28,0),V(-.31,.29,0)],.018,materials.brass);return g}

export type Actor={root:T.Group,head:T.Group,armL:T.Group,armR:T.Group,legL:T.Group,legR:T.Group,role:string,phase:number,base:T.Vector3,kettle?:T.Group,kettleTip?:T.Group,kettleGrip?:T.Group,carry?:T.Group,cupAnchor?:T.Group};
function person(p:T.Object3D,x:number,y:number,z:number,role:string,angle=0):Actor{
 const g=group(p,x,y,z,angle);g.userData.dynamic=true;
 const shirt=role==='gardener'||role==='patio-guest'?mat(0xb7bf98):materials.shirt;const hair=role==='guest2'?mat(0x91836b):materials.hair;
 box(g,.31,.4,.2,0,.68,0,shirt,.075);cyl(g,.055,.065,.09,0,.93,0,materials.skin);
 const head=group(g,0,1.075,0);ball(head,0,0,0,.15,.18,.145,materials.skin);ball(head,0,.085,-.02,.16,.12,.15,hair);ball(head,-.13,.01,0,.025,.04,.035,materials.skin);ball(head,.13,.01,0,.025,.04,.035,materials.skin);ball(head,-.055,.06,.1,.095,.09,.065,hair);
 head.scale.setScalar(1.3);for(const x of [-.053,.053]){ball(head,x,-.012,.135,.012,.016,.009,materials.black);ball(head,x-.003,-.006,.143,.003,.004,.003,materials.cream);ball(head,x*1.6,-.055,.12,.024,.009,.006,mat(0xd8ad9b))}
 const armL=group(g,-.185,.85,0),armR=group(g,.185,.85,0);
 for(const [a,side] of [[armL,-1],[armR,1]] as const){cyl(a,.055,.06,.2,side*.015,-.08,0,shirt);cyl(a,.044,.045,.18,side*.025,-.25,.015,materials.skin);ball(a,side*.025,-.34,.025,.048,.058,.048,materials.skin)}
 const legL=group(g,-.085,.5,0),legR=group(g,.085,.5,0);for(const l of [legL,legR]){cyl(l,.06,.05,.37,0,-.16,0,materials.pants);box(l,.13,.095,.21,0,-.39,.04,materials.shoe,.04)}
 if(role==='barista'||role==='server'){box(g,.26,.32,.025,0,.6,.115,materials.apron,.03);beam(g,V(-.12,.9,.11),V(-.07,.72,.13),.017,materials.apron);beam(g,V(.12,.9,.11),V(.07,.72,.13),.017,materials.apron);box(g,.1,.075,.02,0,.62,.135,materials.darkWood,.012)}
 let brewKettle:T.Group|undefined,kettleTip:T.Group|undefined,kettleGrip:T.Group|undefined,carry:T.Group|undefined,cupAnchor:T.Group|undefined;
 // Tools follow a bounded work-space rig rather than the swinging forearm.
 if(role==='barista'){brewKettle=kettle(g,.27,.88,.26,.68);kettleTip=group(brewKettle,-.31,.29,0);kettleGrip=group(brewKettle,.24,.16,0)}
 if(role==='server'){carry=group(g,0,.84,.34);cyl(carry,.24,.24,.023,0,0,0,materials.wood,24);cupAnchor=group(carry,0,.03,0)}
 if(role==='gardener'){const can=group(armR,0,-.35,.1);cyl(can,.11,.12,.18,0,-.01,0,materials.green);torus(can,.09,.015,.12,.04,0,materials.green);beam(can,V(-.08,0,0),V(-.27,.1,0),.028,materials.green)}
 if(role==='guest'||role==='guest2'||role==='patio-guest'){cup(armR,0,-.32,.07,.7);legL.rotation.x=legR.rotation.x=-1.3}
 if(role==='guest2'||role==='patio-guest')for(const l of [legL,legR]){l.clear();l.rotation.x=0;beam(l,V(0,0,0),V(0,-.015,.23),.055,materials.pants);beam(l,V(0,-.015,.23),V(0,-.48,.23),.047,materials.pants);box(l,.13,.085,.19,0,-.484,.27,materials.shoe,.025)}
 return {root:g,head,armL,armR,legL,legR,role,phase:range(0,6),base:g.position.clone(),kettle:brewKettle,kettleTip,kettleGrip,carry,cupAnchor};
}

export type Hotspot={id:string,label:string,mesh:T.Mesh,point:T.Vector3};
export function buildWorld(scene:T.Scene){
 const root=group(scene);const actors:Actor[]=[];const hotspots:Hotspot[]=[];
 const seating:{chair:number[],table:number[],forwardDot:number,distance:number}[]=[];
 const seat=(x:number,y:number,z:number,tx:number,tz:number,s=1)=>{
   const dx=tx-x,dz=tz-z,angle=Math.atan2(dx,dz),distance=Math.hypot(dx,dz);
   seating.push({chair:[x,y,z],table:[tx,y,tz],forwardDot:(Math.sin(angle)*dx+Math.cos(angle)*dz)/distance,distance});
   return chair(root,x,y,z,angle,s);
 };
 const hit=(id:string,label:string,x:number,y:number,z:number,w:number,h:number,d:number)=>{const m=mesh(new T.BoxGeometry(w,h,d),new T.MeshBasicMaterial({visible:false}),root,x,y,z);m.userData.dynamic=true;m.userData.hit=id;hotspots.push({id,label,mesh:m,point:V(x,y,z)});return m};
 // A gently raised travertine plinth, garden paths and squared paving.
 box(root,10.3,.14,9.9,.45,.11,.45,materials.stone,.035);box(root,10.1,.055,9.7,.45,.198,.45,materials.tile,.08);
 for(let x=-4;x<5.35;x+=.8)for(let z=-4;z<5.2;z+=.8){if(x<4.3&&z<4.3)continue;box(root,.77,.024,.77,x,.236,z,materials.tile,.025)}
 for(let x=-4;x<=4;x+=.8)for(let z=-4;z<=4;z+=.8){if(x>-3&&x<3&&z<2.5&&z>-2.4)continue; if(random()<.1)continue;box(root,range(.65,.77),.024,range(.65,.77),x+range(-.04,.04),.236,z+range(-.04,.04),random()<.65?materials.tile:materials.stone,.025)}
 // Fine pebbles are contained in planted edges.
 for(let i=0;i<140;i++){const x=range(-4.3,4.3),z=range(-4.3,4.3);if((Math.abs(x)<3.3&&Math.abs(z)<2.8)||z>2.4&&Math.abs(x)<1.6||x>3&&z>0)continue;ball(root,x,.245,z,range(.025,.06),.025,range(.025,.055),materials.gravel,true)}
 // The building has individual stone blocks rather than a single flat wall.
 const floorY=.85;
 box(root,5.7,.59,4.95,0,.52,-.335,materials.stone,.045);
 for(const x of [-2.8,2.8])for(let row=0;row<3;row++)for(let i=0;i<7;i++)box(root,.15,.185,.61,x,.36+row*.19,-2.37+i*.67,materials.stone,.02);
 for(const z of [-2.8,2.13])for(let row=0;row<3;row++)for(let i=0;i<9;i++)box(root,.61,.185,.13,-2.68+i*.67,.36+row*.19,z,materials.stone,.02);
 const frenchFloor=createFrenchFloor();
 for(let x=-2.4;x<2.6;x+=.6)for(let z=-2.48;z<2.1;z+=.6)frenchFloor.apply(box(root,.59,.04,.59,x,.845,z,frenchFloor.material,.012));
 frenchFloor.fill(root);
 // Two shallow 150mm steps above a short paved approach; interior stays +.85m.
 const approach=new T.Shape();approach.moveTo(3.05,.23);approach.lineTo(4.65,.23);approach.lineTo(4.65,.26);approach.lineTo(3.05,.55);approach.closePath();
 const ramp=new T.ExtrudeGeometry(approach,{depth:1.95,bevelEnabled:false});ramp.rotateY(-Math.PI/2);ramp.translate(.325,0,0);mesh(ramp,materials.stone,root);
 box(root,1.95,.15,.35,-.65,.625,2.875,materials.stone,.018);
 box(root,1.95,.30,.6,-.65,.70,2.40,materials.stone,.018);
 for(let i=0;i<5;i++)box(root,1.05,.04,.38,-.65+Math.sin(i*.6)*.1,.26,3.85+i*.23,materials.stone,.03);
 // Blackened steel structure, clear glass panes and a pitched glass roof.
 const minX=-2.75,maxX=2.75,front=2.1,back=-2.77,eave=3.2,ridge=4.575;
 for(const x of [minX,maxX]){for(let z=back;z<front+.1;z+=.974)box(root,.065,eave-floorY,.065,x,(eave+floorY)/2,z,materials.frame,.009);for(const yy of [floorY,1.83,2.87,eave])box(root,.075,.075,4.95,x,yy,-.335,materials.frame,.009);for(let i=0;i<5;i++)box(root,.018,eave-floorY,.98,x,(eave+floorY)/2,back+.487+i*.974,materials.glass,.001)}
 for(const z of [front,back]){
 for(let i=0;i<6;i++){const x=-2.75+i*1.1;box(root,.065,eave-floorY,.07,x,(eave+floorY)/2,z,materials.frame,.008)}
 for(const yy of [floorY,1.83,2.87,eave]){if(z===front&&yy<2.91){box(root,1.1,.075,.075,-2.2,yy,z,materials.frame,.008);box(root,3.3,.075,.075,1.1,yy,z,materials.frame,.008)}else box(root,5.58,.075,.075,0,yy,z,materials.frame,.008);}
 for(let i=0;i<5;i++){const x=-2.2+i*1.1;if(z===front&&i===1)continue;box(root,1.1,eave-floorY,.018,x,(eave+floorY)/2,z,materials.glass,.001)}
 beam(root,V(minX,eave,z),V(0,ridge,z),.045,materials.frame);beam(root,V(0,ridge,z),V(maxX,eave,z),.045,materials.frame);
 beam(root,V(0,eave,z),V(0,ridge,z),.035,materials.frame);for(const x of [-1.1,1.1])beam(root,V(x,eave,z),V(x,ridge-Math.abs(x)/2.75*1.375,z),.028,materials.frame);
 const shape=new T.Shape();shape.moveTo(minX,eave);shape.lineTo(maxX,eave);shape.lineTo(0,ridge);shape.closePath();mesh(new T.ExtrudeGeometry(shape,{depth:.018,bevelEnabled:false,steps:1}),materials.glass,root,0,0,z-.009);
 }
 const roofAngle=Math.atan2(1.375,2.75),roofW=Math.hypot(2.75,1.375);
 for(const side of [-1,1]){const pane=box(root,roofW,.018,5.1,side*1.375,(eave+ridge)/2,-.34,materials.glass,.001);pane.rotation.z=-side*roofAngle;
 for(let i=0;i<=5;i++){const z=back+i*.974;beam(root,V(side*2.83,eave-.04,z),V(0,ridge+.01,z),.04,materials.frame)}
 for(const f of [.5,1])beam(root,V(side*2.75*f,ridge-1.375*f,back-.05),V(side*2.75*f,ridge-1.375*f,front+.12),.03,materials.frameEdge);
 }
 beam(root,V(0,ridge,back-.12),V(0,ridge,front+.14),.047,materials.frame);
 for(const x of [-2.86,2.86])beam(root,V(x,eave-.02,back-.08),V(x,eave-.02,front+.12),.07,materials.frameEdge);
 // Slightly opened, hinged front door.
 const door=group(root,-1.63,floorY,front+.045);door.userData.dynamic=true;
 for(const x of [0,1.04])box(door,.055,2.06,.07,x,1.03,0,materials.frame,.008);for(const y of [.025,2.05])box(door,1.08,.055,.07,.52,y,0,materials.frame,.008);box(door,.98,1.98,.018,.52,1.04,0,materials.glass,.001);beam(door,V(.87,.83,.08),V(.87,1.1,.08),.025,materials.brass);door.rotation.y=0;
 box(root,1.1,.29,.018,-1.1,3.055,front,materials.glass,.001);
 hit('door','推门进入',-1.07,1.9,front+.1,1.08,2.1,.22);
 const entranceSign=group(root,-1.1,3.39,front+.1);
 box(entranceSign,1.8,.27,.07,0,0,0,materials.wood,.018);
 label(entranceSign,'SKYE ISLAND',1.72,.235,0,0,.041,'#4a5d3f','#efe9dc');
 for(const x of [-.84,.84])ball(entranceSign,x,0,.045,.014,.014,.008,materials.brass);
 
 // Wall shelf, cabinet joinery and the heart of the cafe.
 const barRig=group(root,1.2,0,-.335,-Math.PI/2);barRig.scale.set(.827586,1,.8);
 const counter=group(barRig,0,floorY,0);box(counter,4.2,.95,.78,0,.49,0,materials.wood,.045);box(counter,4.35,.1,.95,0,1.01,0,materials.lightWood,.025);
 for(let i=0;i<6;i++){const x=-1.74+i*.69;box(counter,.62,.76,.025,x,.5,.404,materials.lightWood,.016);box(counter,.52,.62,.023,x,.5,.425,materials.wood,.012);ball(counter,x+.2,.77,.45,.023,.023,.023,materials.brass)}
 const shelfWall=group(barRig,0,0,1.42);const shelfHeights=[2.03,2.55,3.07];
 for(const yy of shelfHeights){box(shelfWall,4.25,.07,.22,0,yy,-2.48,materials.lightWood,.018);for(const x of [-1.95,0,1.95])beam(shelfWall,V(x,yy-.15,-2.59),V(x,yy-.02,-2.39),.017,materials.brassDark)}
 for(const x of [-2.08,0,2.08])box(shelfWall,.065,2.3,.07,x,2,-2.55,materials.wood,.01);
 // Shelf contents are supplied by the detailed interior layer; preserve the scene RNG.
 for(let i=0;i<39;i++)random();
 const machine=group(counter,-.2,1.07,.05,Math.PI);box(machine,.98,.64,.5,0,.4,0,materials.brass,.05);box(machine,.94,.05,.68,0,.055,.06,materials.brassDark,.018);box(machine,.87,.025,.4,0,.09,.14,materials.frameEdge,.01);box(machine,.9,.045,.56,0,.75,0,materials.brass,.015);
 for(const x of [-.26,.26]){cyl(machine,.08,.08,.12,x,.27,.29,materials.frame);beam(machine,V(x,.26,.32),V(x+.15,.26,.48),.035,materials.black);ball(machine,x,.55,.265,.045,.045,.025,materials.black);cyl(machine,.032,.032,.06,x,.22,.32,materials.brass)}
 box(machine,.25,.14,.02,0,.53,.265,materials.black,.01);for(let i=0;i<3;i++)box(machine,.032,.015,.007,-.07+i*.07,.54,.28,materials.brass,.002);
 for(let i=0;i<12;i++)box(machine,.82,.006,.012,0,.11,-.02+i*.026,materials.brassDark,.002);
 for(let i=0;i<3;i++)cup(machine,-.28+i*.27,.78,-.02,.75,false);
 // Grinder, golden gooseneck kettles and hand brewing tools.
 const grinder=group(counter,-.95,1.08,0);cyl(grinder,.14,.2,.38,0,.24,0,materials.brass);cyl(grinder,.2,.12,.27,0,.57,0,materials.glassJar,24);cyl(grinder,.18,.11,.13,0,.51,0,materials.coffee,24);cyl(grinder,.21,.21,.025,0,.72,0,materials.brassDark,24);box(grinder,.15,.09,.1,0,.32,.16,materials.black,.01);
 kettle(counter,1.65,1.08,.12,1.1);cup(counter,.9,1.08,-.18,1.05);cup(counter,1.85,1.08,.15,.65);
 const filter=group(counter,.45,1.08,-.1);cyl(filter,.14,.08,.18,0,.29,0,materials.brass,24);cyl(filter,.08,.1,.19,0,.1,0,materials.glassJar);torus(filter,.16,.014,0,.38,0,materials.brass,Math.PI/2);
 hit('coffee','请咖啡师做一杯',1.15,2.23,-.5,.7,1.05,1.15);
 // Indoor tables, woven chairs, hanging plants and globe lamps.
 // Human-scale indoor seating: 70 cm tops and 45 cm seat height.
 const heroTable=table(root,-.75,floorY,.55,.35,false);heroTable.scale.y=.74/.91;
 const heroChairs=[seat(-.12,floorY,.55,-.75,.55),seat(-1.38,floorY,.55,-.75,.55)];for(const c of heroChairs)c.scale.set(.42/.58,.45/.591,.48/.59);
 const windowTable=table(root,-1.05,floorY,-1.45,.35,false);windowTable.scale.y=.74/.91;
 const windowChair=seat(-1.68,floorY,-1.45,-1.05,-1.45);windowChair.scale.set(.42/.58,.45/.591,.48/.59);
 const bed=group(root,-1.96,floorY,.8);box(bed,.35,.31,1.28,0,.155,0,materials.stone,.025);box(bed,.27,.018,1.19,0,.32,0,materials.soil);fern(root,-1.96,floorY+.33,.38,.28);fern(root,-1.96,floorY+.33,1.12,.3);
 fern(root,-1.9,floorY,-2.05,.32);
 const globes:T.Mesh[]=[];const lamps:T.PointLight[]=[];
 for(const [x,z,h] of [[.55,.85,3.22],[.55,1.3,3.22],[.55,1.75,3.22]]){beam(root,V(x,4.575-Math.abs(x)*.5,z),V(x,h+.2,z),.008,materials.frame);cyl(root,.065,.085,.13,x,h+.17,z,materials.brass);const globe=ball(root,x,h,z,.16,.16,.16,materials.pendantLight);globe.userData.dynamic=true;globe.name='indoor-pendant-'+globes.length;globes.push(globe);const l=new T.PointLight(0xffd092,5,4,2);l.position.set(x,h-.1,z);root.add(l);lamps.push(l)}
 const hanging=group(root,-1.9,3.15,1.35);cyl(hanging,.27,.17,.37,0,0,0,materials.pot);for(let i=0;i<3;i++){const a=i*2.094;beam(hanging,V(Math.cos(a)*.23,.15,Math.sin(a)*.23),V(0,.7,0),.007,materials.darkWood)}for(let i=0;i<15;i++){const a=i*2.4;const len=range(.4,1.1);for(let k=0;k<7;k++){const f=k/6;ball(hanging,Math.cos(a)*(.08+f*.24),.14-f*len,Math.sin(a)*(.08+f*.24),.075,.035,.09,i%2?materials.green:materials.greenDark,true)}}
 // Patio furniture, a linen parasol, a small sign and garden lighting.
 const patioTableNorth=table(root,3.55,.26,.35,.44,false);seat(3.55,.26,-.42,3.55,.35);seat(3.55,.26,1.12,3.55,.35);
 const patioTableSouth=table(root,3.55,.26,2.8,.44,false);seat(3.55,.26,2.03,3.55,2.8);seat(3.55,.26,3.57,3.55,2.8);
 const patioSummerProps=[patioTableNorth.children.at(-1)!,patioTableSouth.children.at(-1)!];patioSummerProps.forEach(o=>o.userData.dynamic=true);
 const umbrella=group(root,3.55,.26,-.85);umbrella.userData.dynamic=true;cyl(umbrella,.02,.025,2.75,0,1.38,0,materials.wood);
 const umbrellaShade=group(umbrella);umbrellaShade.scale.set(.17,1,.17);
 const canopyProfile=[new T.Vector2(0,2.77),new T.Vector2(.92,2.33),new T.Vector2(.92,2.314),new T.Vector2(0,2.754)];mesh(new T.LatheGeometry(canopyProfile,24),materials.cream,umbrellaShade);for(let i=0;i<12;i++){const a=i*Math.PI/6;beam(umbrellaShade,V(0,2.77,0),V(Math.cos(a)*.92,2.33,Math.sin(a)*.92),.008,materials.wood)}ball(umbrella,0,2.83,0,.04,.065,.04,materials.brass);
 // Detailed outward-facing, double-sided A-frame at the left of the entrance.
 const sign=group(root,-2.15,.26,3.85,0);sign.userData.dynamic=true;
 for(const side of [-1,1]){const panel=group(sign,0,.85,side*.14);panel.rotation.x=side*.12;box(panel,.81,1.02,.08,0,0,0,materials.wood,.025);box(panel,.69,.87,.09,0,0,0,materials.frame,.012);const title=label(panel,'SKYE ISLAND',.62,.17,0,.22,side*.052);if(side<0)title.rotation.y=Math.PI;const menu=label(panel,'COFFEE  /  TEA',.62,.11,0,-.02,side*.053);if(side<0)menu.rotation.y=Math.PI;for(const x of [-.36,.36])for(const y of [-.45,.45])ball(panel,x,y,side*.06,.015,.015,.01,materials.brass)}
 for(const x of [-.36,.36])for(const z of [-.37,.37])beam(sign,V(x,.02,z),V(x,1.4,0),.035,materials.wood);
 beam(sign,V(-.43,1.4,0),V(.43,1.4,0),.025,materials.brass);for(const x of [-.36,.36])beam(sign,V(x,.5,-.25),V(x,.5,.25),.012,materials.brass);
 hit('sign','今日手冲：花香与柑橘',-2.15,1.05,3.85,.9,1.5,.65);
 // The second canopy covers Lin's seat; its pole remains outside the chair footprint.
 const linUmbrella=group(root,4.03,.26,4.12);linUmbrella.userData.dynamic=true;
 cyl(linUmbrella,.025,.035,2.9,0,1.45,0,materials.wood);cyl(linUmbrella,.23,.27,.08,0,.04,0,materials.stone);
 const linShade=group(linUmbrella,0,.15,0);linShade.scale.set(.17,1,.17);
 const whiteLinen=mat(0xfaf7ef,.9);mesh(new T.LatheGeometry([new T.Vector2(0,2.77),new T.Vector2(1.15,2.33),new T.Vector2(1.15,2.31),new T.Vector2(0,2.75)],32),whiteLinen,linShade);
 for(let i=0;i<12;i++){const a=i*Math.PI/6;beam(linShade,V(0,2.75,0),V(Math.cos(a)*1.15,2.315,Math.sin(a)*1.15),.009,materials.wood)}ball(linUmbrella,0,2.98,0,.045,.07,.045,materials.brass);

 // Skip the removed trees' 4 × (34 leaf + 30 shrub) PRNG draws so all other props stay unchanged.
 for(let i=0;i<256;i++)random();
 // Removed seven shrubs before batching; preserve their 7 × 30 RNG draws.
 for(let i=0;i<210;i++)random();
 fern(root,-3.22,.25,1.1,.65);fern(root,3.08,.25,-2.1,.7);fern(root,-3.2,.25,-3.1,.6);fern(root,2.5,.25,-3,.6);
 for(const [x,z] of [[-2.15,3.35],[1.1,3.4],[-4.6,1.5],[4.05,3.6],[3.35,-3.6]]){cyl(root,.065,.07,.43,x,.46,z,materials.frame);cyl(root,.06,.06,.15,x,.69,z,materials.light);cyl(root,.08,.08,.035,x,.79,z,materials.brassDark)}
 // A chimney and a roof planter echo the reference without hiding the glass.
 cyl(root,.115,.115,2.5,-1.9,4.1,-2.37,materials.frameEdge,20);cyl(root,.16,.16,.12,-1.9,5.38,-2.37,materials.frame,20);cyl(root,.10,.10,.014,-1.9,5.45,-2.37,materials.black,20);
 const planter=group(root,1.7,3.8,-.9);planter.rotation.z=-roofAngle;box(planter,.68,.17,1.1,0,0,0,materials.wood,.03);box(planter,.55,.015,.96,0,.095,0,materials.soil);for(let i=0;i<15;i++)ball(planter,range(-.24,.24),range(.11,.3),range(-.44,.44),.12,.12,.13,i%2?materials.green:materials.greenLight,true);
 // Autonomous little residents; the server follows an unobstructed garden path.
 actors.push(person(barRig,.9,floorY,-.56,'barista',0));actors[0].root.scale.setScalar(1.43);
 actors.push(person(root,3.55,.27,3.57,'guest',Math.PI));
 actors.push(person(root,3.55,.29,-.42,'guest2',0));
 actors.push(person(root,3.55,.29,-.42,'patio-guest',0));
 actors.push(person(root,-.3,.26,3.75,'server',Math.PI/2));actors.slice(1).forEach(a=>a.root.scale.setScalar(1.16));
 const tableCups=serviceStops.map(stop=>{const c=cup(root,...stop.cup,.76);c.userData.dynamic=true;return c});
 const servicePot=kettle(actors[4].root,0,.86,.34,.78);servicePot.rotation.y=Math.PI/2;const serviceTip=group(servicePot,-.31,.29,0);
 const refillStream=cyl(root,.009,.01,1,0,0,0,materials.coffee,8);refillStream.userData.dynamic=true;refillStream.visible=false;
 const stream=cyl(root,.005,.007,1,0,0,0,materials.coffee,6);stream.userData.dynamic=true;stream.visible=false;
 const cupTarget=V(3.73,1.19,2.8),pourTarget=V(1.344,2.0854,.4098274),anchor=V(0,0,0),tip=V(0,0,0);
 let service=sampleService(0),patioWinter=false;
 const setPatioWinter=(on:boolean)=>{patioWinter=on};
 function updateService(t:number,order:number,inside=false){
   service=sampleService(t);root.updateWorldMatrix(true,true);
   const server=actors[4];cupTarget.fromArray(service.cupTarget);if(patioWinter&&service.tableIndex<2)cupTarget.y=1.246;
   servicePot.rotation.z=service.pour*.58;servicePot.position.y=.86+service.pour*.15;
   const hand=V(.025,-.34,.025),reach=V(.24,.16,0).multiplyScalar(.78).applyEuler(servicePot.rotation).add(servicePot.position).sub(server.armR.position);server.armR.scale.setScalar(reach.length()/hand.length());server.armR.quaternion.setFromUnitVectors(hand.normalize(),reach.normalize());
   root.updateWorldMatrix(true,true);serviceTip.getWorldPosition(anchor);
   refillStream.visible=service.pour>.35;
   if(refillStream.visible){const target=cupTarget.clone().add(V(0,.113,0)),direction=target.clone().sub(anchor);refillStream.position.copy(anchor).add(target).multiplyScalar(.5);refillStream.scale.y=direction.length();refillStream.quaternion.setFromUnitVectors(V(0,1,0),direction.normalize())}
   tableCups[service.tableIndex].children[2].position.y=.09+.058*service.transfer;
   door.rotation.y=inside||service.doorOpen?-1.65:0;
   const barista=actors[0];stream.visible=!barista.root.userData.suppliedAsset&&order>0&&barista.kettle!.rotation.z>.3;
   if(stream.visible){barista.kettleTip!.getWorldPosition(tip);const direction=pourTarget.clone().sub(tip);stream.position.copy(tip).add(pourTarget).multiplyScalar(.5);stream.scale.y=direction.length();stream.quaternion.setFromUnitVectors(V(0,1,0),direction.normalize())}
 }
 hit('table','坐一会儿，听咖啡落下',-.75,1.58,.55,.7,.12,.7);
 for(const [i,x,z] of [[0,-1.38,.55],[1,-.12,.55],[2,-1.68,-1.45]]){hit('seat'+i,'坐在这张椅子上',x,1.27,z,.49,.85,.43);hotspots[hotspots.length-1].point.set(x+(i===1?.21:-.21),1.62,z);}
 const decorations:Record<string,T.Group>={};
 function deco(id:string,x:number,y:number,z:number){const g=group(root,x,y,z);g.userData.dynamic=true;g.visible=false;decorations[id]=g;return g}
 const flowers=deco('flowers',-3.7,.28,3.35);box(flowers,1.15,.3,.43,0,.15,0,materials.wood);for(let i=0;i<7;i++){const x=-.45+i*.15;beam(flowers,V(x,.25,0),V(x,.65,0),.012,materials.greenDark);for(let j=0;j<5;j++){const a=j*Math.PI*2/5;ball(flowers,x+Math.cos(a)*.06,.65,Math.sin(a)*.06,.045,.025,.045,materials.cream)}ball(flowers,x,.66,0,.025,.025,.025,materials.brass)}
 const rug=deco('rug',-.75,.871,.55);box(rug,2.05,.008,1.5,0,0,0,materials.greenDark,.04);box(rug,1.9,.006,1.36,0,.002,0,materials.lightWood,.025);box(rug,1.72,.004,1.2,0,.004,0,materials.green,.02);
 const lamp=deco('lamp',-2.13,floorY,-.45);cyl(lamp,.18,.2,.035,0,.02,0,materials.brass);beam(lamp,V(0,.02,0),V(0,1.8,0),.025,materials.brass);beam(lamp,V(0,1.8,0),V(.25,1.95,0),.025,materials.brass);cyl(lamp,.08,.22,.25,.25,1.8,0,materials.brass);ball(lamp,.25,1.7,0,.1,.08,.1,materials.light);
 const gram=deco('gramophone',1.2,2.01,-1.8);box(gram,.48,.2,.4,0,0,0,materials.wood);cyl(gram,.18,.18,.018,0,.12,0,materials.black,32);beam(gram,V(.17,.12,0),V(.23,.5,-.1),.025,materials.brass);const horn=cyl(gram,.21,.04,.32,.2,.56,-.1,materials.brass);horn.rotation.z=-.8;
 const lantern=deco('lantern',1.9,.26,-3.6);box(lantern,.45,.06,.45,0,.03,0,materials.wood);for(const x of [-.2,.2])for(const z of [-.2,.2])beam(lantern,V(x,.05,z),V(x,.8,z),.018,materials.brass);box(lantern,.44,.04,.44,0,.82,0,materials.brass);ball(lantern,0,.4,0,.12,.16,.12,materials.light);
 const art=deco('art',2.68,2.45,-.2);box(art,.07,.62,.48,0,0,0,materials.wood);box(art,.08,.53,.39,-.008,0,0,materials.cream);for(let i=0;i<5;i++)ball(art,-.055,-.17+i*.08,Math.sin(i*2)*.08,.018,.055,.08,materials.green,true);
 actors.slice(0,4).forEach((a,i)=>{const n=i;hit('person'+n,'与'+['阿禾','林伯','棠姨','客人'][n]+'聊聊天',a.root.position.x,a.root.position.y+1.1,a.root.position.z,.55,.7,.55)});

 for(const x of [-2.75,2.75])for(let i=0;i<=5;i++)for(const y of [.85,1.83,2.87,3.2]){const z=-2.62+i*.914;box(root,.025,.12,.12,x,y,z,materials.frame,.004);ball(root,x+Math.sign(x)*.042,y,z,.014,.019,.019,materials.frameEdge)}
 for(const z of [-2.62,1.95])for(let i=0;i<=5;i++)for(const y of [.85,1.83,2.87,3.2]){const x=-2.75+i*1.1;box(root,.12,.12,.025,x,y,z,materials.frame,.004);ball(root,x,y,z+Math.sign(z)*.042,.019,.019,.014,materials.frameEdge)}
 for(let i=0;i<42;i++){const x=range(-4.2,4.2),z=range(-4.2,4.2);if(Math.abs(x)<2.9&&z<2.25&&z>-2.8)continue;beam(root,V(x,.26,z),V(x+range(-.03,.03),range(.29,.36),z),.006,materials.greenDark,4)}
 const euca=group(root,-2.55,.26,2.7);pot(euca,0,0,0,.48);for(let i=0;i<7;i++){const a=i*2.4;beam(euca,V(0,.3,0),V(Math.cos(a)*.23,1+i*.05,Math.sin(a)*.23),.01,materials.greenDark);for(let k=0;k<4;k++)ball(euca,Math.cos(a)*(.08+k*.05),.5+k*.18,Math.sin(a)*(.08+k*.05),.1,.03,.08,materials.green,true)}
 for(let i=0;i<5;i++){cyl(root,.045,.045,.4,3.4+i*.11,.3,-3.5,materials.wood,10).rotation.z=Math.PI/2}
 const barrel=group(root,-3.5,.24,-2.5);cyl(barrel,.25,.23,.6,0,.3,0,materials.darkWood);for(const y of [.1,.5])torus(barrel,.25,.012,0,y,0,materials.frameEdge,Math.PI/2);
 for(const y of [3.45,4.2,4.65])torus(root,.125,.012,-1.9,y,-2.37,materials.frameEdge,Math.PI/2);
 const rainProps=group(root);rainProps.userData.dynamic=true;rainProps.visible=false;box(rainProps,1,.02,.42,-.65,.86,2.15,materials.darkWood,.02);cyl(rainProps,.13,.1,.22,-1.55,.36,2.65,materials.frameEdge);torus(rainProps,.14,.009,-1.55,.55,2.65,materials.frameEdge);

 hit('garden','看看尤加利',-2.55,.9,2.7,.55,1.1,.55);hit('lantern','点亮庭院小灯',1.1,.65,3.4,.3,.8,.3);
 // Individual steam wisps, animated independently of simulation.
 const steam=group(root,1.344,2.09,.4098274);steam.userData.dynamic=true;const steamMat=new T.MeshBasicMaterial({color:0xfaf3dc,transparent:true,opacity:.25,depthWrite:false});for(let i=0;i<9;i++)ball(steam,0,.12+i*.04,0,.014,.07,.014,steamMat);
 const french=refineFrenchInterior(root,{counter,heroTable,windowTable,heroChairs,windowChair,globes},materials);
 // Consolidate static meshes by material: thousands of details, a few draw calls.
 root.updateWorldMatrix(true,true);
 const snowSurfaces:{chairs:{position:number[],occupied:boolean}[],pots:{position:number[],radius:number}[]}={chairs:[],pots:[]};
 root.traverse(o=>{if(o.userData.snowChair){const p=o.localToWorld(V(0,.596,0));if(p.y<1.1)snowSurfaces.chairs.push({position:p.toArray(),occupied:Math.abs(p.z-3.57)<.01||Math.abs(p.z+.42)<.01})}if(o.userData.snowPot){const p=o.localToWorld(V(0,o.userData.snowPot.height+.025,0));if(p.y<.8)snowSurfaces.pots.push({position:p.toArray(),radius:o.userData.snowPot.radius})}});
 const heroFrameBounds=new T.Box3().setFromObject(heroTable);heroChairs.forEach(c=>heroFrameBounds.union(new T.Box3().setFromObject(c)));
 const overviewBounds=[counter,heroTable,...heroChairs,windowTable,windowChair].map(o=>{const b=new T.Box3().setFromObject(o);return {min:b.min.toArray(),max:b.max.toArray()}});
 const furnitureClearances=[counter,shelfWall,heroTable,...heroChairs,windowTable,windowChair,bed].map(o=>{const b=new T.Box3().setFromObject(o);return Math.min(b.min.x+2.75,2.75-b.max.x,b.min.z+2.77,2.1-b.max.z)});
 let shelfRoofClearance=Infinity;
 shelfWall.traverse(o=>{if(!(o instanceof T.Mesh))return;const bounds=new T.Box3().setFromObject(o);const outerX=Math.max(Math.abs(bounds.min.x),Math.abs(bounds.max.x));shelfRoofClearance=Math.min(shelfRoofClearance,ridge-.5*outerX-bounds.max.y)});
 const diagnostics=()=>({french,upholsteredChairs:[...heroChairs,windowChair].map(c=>c.userData.upholstery),machineDirection:V(0,0,1).transformDirection(machine.matrixWorld).toArray(),machinePosition:machine.getWorldPosition(V(0,0,0)).toArray(),baristaPosition:actors[0].root.getWorldPosition(V(0,0,0)).toArray(),patioGuest:{role:actors[3].role,position:actors[3].root.position.toArray(),chair:[3.55,.26,-.42],facing:actors[3].root.rotation.y},overviewBounds,rugCenter:decorations.rug.position.toArray(),pendants:globes.map(g=>({visible:g.visible,emissive:(g.material as T.MeshStandardMaterial).emissiveIntensity,position:g.position.toArray()})),tang:{role:actors[2].role,position:actors[2].root.getWorldPosition(V(0,0,0)).toArray(),chair:actors[2].role==='garden-tang'?null:[3.55,.26,-.42]},snowSurfaces,seating,furnitureClearances,shelfRoofClearance,countertopY:1.91,heroBounds:{min:heroFrameBounds.min.toArray(),max:heroFrameBounds.max.toArray()},kettleMinY:new T.Box3().setFromObject(actors[0].kettle!).min.y,kettleGripError:actors[0].armR.localToWorld(V(.025,-.34,.025)).distanceTo(actors[0].kettleGrip!.getWorldPosition(V(0,0,0))),umbrellaSpread:umbrellaShade.scale.x,linUmbrellaSpread:linShade.scale.x,umbrellaPoleScale:umbrella.scale.toArray(),service:{...service,server:actors[4].root.position.toArray(),cup:tableCups[service.tableIndex].position.toArray(),pouring:refillStream.visible,tableCount:tableCups.length,tableTarget:cupTarget.toArray()},sign:'SKYE ISLAND'});
 const seasonalFoliage:T.Object3D[]=[];const summerBatches=new Map<Material,T.BufferGeometry[]>();const patioChairs:T.Group[]=[];root.traverse(o=>{if(o.userData.snowChair&&o.position.y<.5)patioChairs.push(o as T.Group)});
 const batches=new Map<Material,{geos:T.BufferGeometry[],shadow:boolean}>();const toRemove:T.Mesh[]=[];
 root.traverse(o=>{if(!(o instanceof T.Mesh))return;let a:T.Object3D|null=o;while(a&&a!==root){if(a.userData.dynamic)return;a=a.parent}const m=o.material as Material;const wp=o.getWorldPosition(new T.Vector3());const outdoor=Math.abs(wp.x)>2.8||wp.z>2.2||wp.z< -2.8||wp.y>3.3;const seasonal=m===materials.trunk||outdoor&&[materials.green,materials.greenLight,materials.greenDark].includes(m as T.MeshStandardMaterial);if(seasonal){const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(o.matrixWorld);geo.deleteAttribute('uv1');geo.deleteAttribute('tangent');if(!summerBatches.has(m))summerBatches.set(m,[]);summerBatches.get(m)!.push(geo);toRemove.push(o);return}if(!batches.has(m))batches.set(m,{geos:[],shadow:o.castShadow});const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(o.matrixWorld);geo.deleteAttribute('uv1');geo.deleteAttribute('tangent');batches.get(m)!.geos.push(geo);toRemove.push(o)});
 for(const [m,b] of batches){const geo=mergeGeometries(b.geos,false);if(geo){const o=new T.Mesh(geo,m);o.castShadow=b.shadow;o.receiveShadow=true;scene.add(o)}for(const g of b.geos)g.dispose()}for(const [m,geos] of summerBatches){const geo=mergeGeometries(geos,false);if(geo){const o=new T.Mesh(geo,m);o.castShadow=true;o.receiveShadow=true;scene.add(o);seasonalFoliage.push(o)}geos.forEach(g=>g.dispose())}for(const o of toRemove)o.removeFromParent();
 const treeAssets=createTreeAssets(scene,seasonalFoliage);
 const bushAssets=createBushAssets(scene,seasonalFoliage);
 return {treeAssets,bushAssets,interior:{counter,shelfWall,machine,grinder,heroTable,windowTable,heroChairs,windowChair,bed},root,actors,door,sign,patioChairs,patioSummerProps,tableCups,linUmbrella,setPatioWinter,seasonalFoliage,hotspots,steam,lamps,globes,umbrella,umbrellaShade,linShade,snowSurfaces,rainProps,decorations,updateService,diagnostics};
}

export function updatePeople(actors:Actor[],t:number,order:number){
 for(const a of actors){if(a.role==='garden-tang'||a.root.userData.suppliedAsset)continue;const f=t+a.phase;a.head.rotation.z=Math.sin(f*.65)*.045;a.head.rotation.y=Math.sin(f*.4)*.13;
 if(a.role==='barista'){const pour=(1-Math.cos(t*2.2))*.5;a.armL.rotation.x=-1.45+Math.sin(f)*.04;a.root.position.copy(a.base);a.head.rotation.x=.18+pour*.06;a.kettle!.rotation.z=order>0?.18+pour*.3:.03+Math.sin(f*.7)*.025;const hand=V(.025,-.34,.025),reach=V(.24,.16,0).multiplyScalar(.68).applyEuler(a.kettle!.rotation).add(a.kettle!.position).sub(a.armR.position);a.armR.scale.setScalar(reach.length()/hand.length());a.armR.quaternion.setFromUnitVectors(hand.normalize(),reach.normalize())}
 else if(a.role==='server'){const service=sampleService(t),step=Math.sin(t*5.6)*service.walk;a.root.position.set(service.x,service.y+Math.abs(step)*.025,service.z);a.root.rotation.y=service.yaw;a.legL.rotation.x=step*.34;a.legR.rotation.x=-step*.34;a.armL.rotation.x=-1.5;a.armR.rotation.x=-1.5-(service.phase==='serve'?Math.sin(service.transfer*Math.PI)*.22:0);a.carry!.position.y=.84-Math.abs(step)*.025/1.16}
 else if(a.role==='watcher'){a.armL.rotation.x=-.15;a.armR.rotation.x=-.1;a.head.rotation.y=Math.sin(f*.35)*.4}
 else if(a.role==='gardener'){a.armR.rotation.x=-.45+Math.sin(f*.8)*.18;a.armR.rotation.z=-.4;a.root.rotation.z=Math.sin(f*.8)*.025;a.head.rotation.x=.25}
 else{const sip=Math.pow(Math.max(0,Math.sin(f*.57)),5);a.armR.rotation.x=-.45-sip*1.5;a.armL.rotation.x=-.35;a.head.rotation.x=-sip*.08;a.root.rotation.z=Math.sin(f*.5)*.015}
 }
}
