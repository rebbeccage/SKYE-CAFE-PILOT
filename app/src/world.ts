import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

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
  stone:new T.MeshStandardMaterial({color:0xede6d6,map:stoneTex,roughness:.94,bumpMap:stoneTex,bumpScale:.035}),
  tile:new T.MeshStandardMaterial({color:0xf2ebdf,map:stoneTex,roughness:.9}),
  wood:new T.MeshStandardMaterial({color:0xe1d1b4,map:woodTex,roughness:.64,bumpMap:woodTex,bumpScale:.016}),
  lightWood:new T.MeshStandardMaterial({color:0xeadcc2,map:woodTex,roughness:.64}),
  darkWood:mat(0x896b49),frame:mat(0x5e6259,.38,.65),frameEdge:mat(0x92958b,.36,.65),
  brass:mat(0xb99d6e,.3,.78),brassDark:mat(0x917440,.4,.72),cream:mat(0xf4f0df,.4),
  green:mat(0x718448),greenDark:mat(0x4c673b),greenLight:mat(0x899b62),pot:mat(0xb2865c),
  soil:mat(0x524637),trunk:mat(0x927652),skin:mat(0xe1bd92,.68),hair:mat(0x665440,.75),
  apron:mat(0x9b936b),shirt:mat(0xf0e9d8),pants:mat(0x757b63),shoe:mat(0x786d57),
  coffee:mat(0x433023,.25),black:mat(0x363b35),gravel:mat(0xbebda5),
  glass:new T.MeshPhysicalMaterial({color:0xe5eee4,transparent:true,opacity:.095,roughness:.08,metalness:.12,depthWrite:false,side:T.DoubleSide,envMapIntensity:1.5}),
  glassJar:new T.MeshPhysicalMaterial({color:0xede8d9,transparent:true,opacity:.25,roughness:.12,depthWrite:false,metalness:.18}),
  light:new T.MeshStandardMaterial({color:0xffe1a0,emissive:0xffc36b,emissiveIntensity:1.25,roughness:.24}),
};
type Material=T.Material;
const boxCache=new Map<string,T.BufferGeometry>();
function rounded(w:number,h:number,d:number,r=.035){const key=[w,h,d,r].join();if(!boxCache.has(key))boxCache.set(key,new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/3,h/3,d/3)));return boxCache.get(key)!}
const sphereGeo=new T.SphereGeometry(1,12,9),leafGeo=new T.SphereGeometry(1,7,5);
function mesh(g:T.BufferGeometry,m:Material,p:T.Object3D,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=m!==materials.glass&&m!==materials.glassJar;o.receiveShadow=true;p.add(o);return o}
function box(p:T.Object3D,w:number,h:number,d:number,x:number,y:number,z:number,m:Material,r=.025){return mesh(rounded(w,h,d,r),m,p,x,y,z)}
function ball(p:T.Object3D,x:number,y:number,z:number,sx:number,sy:number,sz:number,m:Material,leaf=false){const o=mesh(leaf?leafGeo:sphereGeo,m,p,x,y,z);o.scale.set(sx,sy,sz);return o}
function cyl(p:T.Object3D,rt:number,rb:number,h:number,x:number,y:number,z:number,m:Material,n=16){return mesh(new T.CylinderGeometry(rt,rb,h,n),m,p,x,y,z)}
function beam(p:T.Object3D,a:T.Vector3,b:T.Vector3,r:number,m:Material,n=8){const dir=b.clone().sub(a);const o=cyl(p,r,r,dir.length(),0,0,0,m,n);o.position.copy(a).add(b).multiplyScalar(.5);o.quaternion.setFromUnitVectors(V(0,1,0),dir.normalize());return o}
function rail(p:T.Object3D,pts:T.Vector3[],r:number,m:Material){return mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts),24,r,6,false),m,p)}
function torus(p:T.Object3D,r:number,t:number,x:number,y:number,z:number,m:Material,rx=0,ry=0){const o=mesh(new T.TorusGeometry(r,t,6,28),m,p,x,y,z);o.rotation.set(rx,ry,0);return o}
function group(p:T.Object3D,x=0,y=0,z=0,angle=0){const g=new T.Group();g.position.set(x,y,z);g.rotation.y=angle;p.add(g);return g}
function label(p:T.Object3D,text:string,w:number,h:number,x:number,y:number,z:number,bg='#46523d',fg='#efe8d4'){
 const c=document.createElement('canvas');c.width=1024;c.height=256;const ctx=c.getContext('2d')!;ctx.fillStyle=bg;ctx.fillRect(0,0,1024,256);ctx.strokeStyle=fg;ctx.lineWidth=2;ctx.strokeRect(15,15,994,226);ctx.fillStyle=fg;ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='45px Georgia';ctx.fillText(text,512,133);const tex=new T.CanvasTexture(c);tex.colorSpace=T.SRGBColorSpace;const o=mesh(new T.PlaneGeometry(w,h),new T.MeshStandardMaterial({map:tex,roughness:.9}),p,x,y,z);return o;
}
function cup(p:T.Object3D,x:number,y:number,z:number,s=1,coffee=true){
 const g=group(p,x,y,z);g.scale.setScalar(s);cyl(g,.13,.13,.025,0,0,0,materials.cream,24);cyl(g,.088,.062,.13,0,.08,0,materials.cream,24);cyl(g,.073,.073,.005,0,.148,0,coffee?materials.coffee:materials.cream,24);torus(g,.085,.01,0,.145,0,materials.cream,Math.PI/2);torus(g,.043,.013,.1,.085,0,materials.cream);return g;
}
function pot(p:T.Object3D,x:number,y:number,z:number,size=.45){const g=group(p,x,y,z);cyl(g,size*.64,size*.45,size*.85,0,size*.42,0,materials.pot);torus(g,size*.63,size*.055,0,size*.83,0,materials.pot,Math.PI/2);cyl(g,size*.57,size*.57,.02,0,size*.82,0,materials.soil);return g}
function fern(p:T.Object3D,x:number,y:number,z:number,s=.6){
 const g=group(p,x,y,z);pot(g,0,0,0,s*.6);
 for(let j=0;j<10;j++){const a=j/10*Math.PI*2;const len=s*range(.7,1.2);const start=V(0,s*.4,0),end=V(Math.cos(a)*len*.7,s*.45+len*.4,Math.sin(a)*len*.7);beam(g,start,end,.012,materials.greenDark,5);
 for(let k=1;k<=7;k++){const f=k/8;const pt=start.clone().lerp(end,f);pt.y+=Math.sin(f*Math.PI)*s*.25;const breadth=Math.sin(f*Math.PI)*s*.19;for(const side of [-1,1]){const o=ball(g,pt.x+Math.cos(a+side*.9)*breadth*.6,pt.y+.02,pt.z+Math.sin(a+side*.9)*breadth*.6,breadth,.018,breadth*.32,j%3===0?materials.greenLight:materials.greenDark,true);o.rotation.y=-a-side*.9;o.rotation.z=side*.25}}}return g;
}
function shrub(p:T.Object3D,x:number,y:number,z:number,s=.6){for(let i=0;i<5;i++)ball(p,x+range(-s*.5,s*.5),y+range(.15,s*.5),z+range(-s*.5,s*.5),s*range(.35,.6),s*range(.35,.65),s*range(.35,.6),i%2?materials.green:materials.greenLight)}
function tree(p:T.Object3D,x:number,z:number,s=1){const g=group(p,x,.33,z);cyl(g,.09*s,.14*s,2.3*s,0,1.15*s,0,materials.trunk);for(let i=0;i<4;i++){const a=i*2.4;const yy=(1.45+i*.3)*s;beam(g,V(0,yy-.6*s,0),V(Math.cos(a)*.6*s,yy+.25*s,Math.sin(a)*.6*s),.06*s,materials.trunk);ball(g,Math.cos(a)*.5*s,yy+.6*s,Math.sin(a)*.48*s,.6*s,.8*s,.6*s,i%2?materials.green:materials.greenLight)}shrub(g,0,0,0,s*.75)}
function chair(p:T.Object3D,x:number,y:number,z:number,angle=0,s=1){
 const g=group(p,x,y,z,angle);g.scale.setScalar(s);cyl(g,.29,.28,.075,0,.55,0,materials.lightWood,24);
 for(const xx of [-.21,.21])for(const zz of [-.2,.2])beam(g,V(xx*.8,.53,zz*.8),V(xx*1.24,0,zz*1.22),.027,materials.wood);
 for(const xx of [-.25,.25])beam(g,V(xx,.53,-.2),V(xx,1,-.3),.025,materials.wood);
 const pts=[];for(let i=0;i<=20;i++){const a=Math.PI-i/20*Math.PI;pts.push(V(Math.cos(a)*.27,.78+Math.sin(a)*.32,-.29))}rail(g,pts,.026,materials.lightWood);
 for(let i=-4;i<=4;i++){const xx=i*.047,top=.78+Math.sqrt(Math.max(0,.27*.27-xx*xx))*1.15;beam(g,V(xx,.59,-.25),V(xx,top,-.29),.008,materials.wood,5)}
 for(let k=0;k<7;k++){const yy=.61+k*.055;const width=yy<.78?.25:Math.sqrt(Math.max(0,.27*.27-Math.pow((yy-.78)/1.15,2)));beam(g,V(-width,yy,-.285),V(width,yy,-.285),.007,materials.wood,5)}
 for(let i=-4;i<=4;i++){beam(g,V(i*.052,.591,-.2),V(i*.052,.591,.2),.005,materials.darkWood,4)}return g;
}
function table(p:T.Object3D,x:number,y:number,z:number,r=.48){const g=group(p,x,y,z);cyl(g,r,r,.08,0,.87,0,materials.lightWood,40);torus(g,r-.02,.015,0,.91,0,materials.wood,Math.PI/2);cyl(g,.048,.07,.8,0,.43,0,materials.frame);for(let i=0;i<3;i++){const a=i*Math.PI*2/3;beam(g,V(0,.13,0),V(Math.cos(a)*.33,.025,Math.sin(a)*.33),.035,materials.frame)}cup(g,.11,.923,.06);cyl(g,.04,.055,.15,-.19,.99,-.1,materials.cream);return g}
function kettle(p:T.Object3D,x:number,y:number,z:number,s=1){const g=group(p,x,y,z);g.scale.setScalar(s);cyl(g,.1,.15,.23,0,.13,0,materials.brass,24);cyl(g,.11,.07,.06,0,.27,0,materials.brass,24);ball(g,0,.313,0,.025,.02,.025,materials.brassDark);rail(g,[V(.1,.22,0),V(.25,.25,0),V(.25,.07,0),V(.13,.065,0)],.016,materials.brass);rail(g,[V(-.1,.07,0),V(-.22,.13,0),V(-.27,.28,0),V(-.31,.29,0)],.018,materials.brass);return g}

export type Actor={root:T.Group,head:T.Group,armL:T.Group,armR:T.Group,legL:T.Group,legR:T.Group,role:string,phase:number,base:T.Vector3};
function person(p:T.Object3D,x:number,y:number,z:number,role:string,angle=0):Actor{
 const g=group(p,x,y,z,angle);g.userData.dynamic=true;
 const shirt=role==='gardener'?mat(0xb7bf98):materials.shirt;const hair=role==='guest2'?mat(0x91836b):materials.hair;
 box(g,.31,.4,.2,0,.68,0,shirt,.075);cyl(g,.055,.065,.09,0,.93,0,materials.skin);
 const head=group(g,0,1.075,0);ball(head,0,0,0,.15,.18,.145,materials.skin);ball(head,0,.085,-.02,.16,.12,.15,hair);ball(head,-.13,.01,0,.025,.04,.035,materials.skin);ball(head,.13,.01,0,.025,.04,.035,materials.skin);ball(head,-.055,.06,.1,.095,.09,.065,hair); // faceless miniature
 const armL=group(g,-.185,.85,0),armR=group(g,.185,.85,0);
 for(const [a,side] of [[armL,-1],[armR,1]] as const){cyl(a,.055,.06,.2,side*.015,-.08,0,shirt);cyl(a,.044,.045,.18,side*.025,-.25,.015,materials.skin);ball(a,side*.025,-.34,.025,.048,.058,.048,materials.skin)}
 const legL=group(g,-.085,.5,0),legR=group(g,.085,.5,0);for(const l of [legL,legR]){cyl(l,.06,.05,.37,0,-.16,0,materials.pants);box(l,.13,.095,.21,0,-.39,.04,materials.shoe,.04)}
 if(role==='barista'||role==='server'){box(g,.26,.32,.025,0,.6,.115,materials.apron,.03);beam(g,V(-.12,.9,.11),V(-.07,.72,.13),.017,materials.apron);beam(g,V(.12,.9,.11),V(.07,.72,.13),.017,materials.apron);box(g,.1,.075,.02,0,.62,.135,materials.darkWood,.012)}
 if(role==='barista'){const k=kettle(armR,0,-.34,.07,.68);k.rotation.z=-.38;k.rotation.x=.45}
 if(role==='server'){const tray=group(armR,0,-.34,.13);tray.rotation.x=.8;cyl(tray,.24,.24,.023,0,0,0,materials.wood,24);cup(tray,-.06,.02,0,.7);cup(tray,.12,.02,.04,.6)}
 if(role==='gardener'){const can=group(armR,0,-.35,.1);cyl(can,.11,.12,.18,0,-.01,0,materials.green);torus(can,.09,.015,.12,.04,0,materials.green);beam(can,V(-.08,0,0),V(-.27,.1,0),.028,materials.green)}
 if(role==='guest'||role==='guest2'){cup(armR,0,-.32,.07,.7);legL.rotation.x=legR.rotation.x=-1.3;g.position.y+=.29}
 return {root:g,head,armL,armR,legL,legR,role,phase:range(0,6),base:g.position.clone()};
}

export type Hotspot={id:string,label:string,mesh:T.Mesh,point:T.Vector3};
export function buildWorld(scene:T.Scene){
 const root=group(scene);const actors:Actor[]=[];const hotspots:Hotspot[]=[];
 const hit=(id:string,label:string,x:number,y:number,z:number,w:number,h:number,d:number)=>{const m=mesh(new T.BoxGeometry(w,h,d),new T.MeshBasicMaterial({visible:false}),root,x,y,z);m.userData.dynamic=true;m.userData.hit=id;hotspots.push({id,label,mesh:m,point:V(x,y,z)});return m};
 // A gently raised travertine plinth, garden paths and squared paving.
 box(root,10.8,.36,8.8,0,.0,0,materials.stone,.13);box(root,10.56,.055,8.55,0,.198,0,materials.tile,.08);
 for(let x=-5;x<5;x+=.79)for(let z=-4;z<4;z+=.79){if(x>-3&&x<3&&z<2.5&&z>-2.4)continue; if(random()<.1)continue;box(root,.76,.024,.76,x,.236,z,random()<.65?materials.tile:materials.stone,.025)}
 // Fine pebbles are contained in planted edges.
 for(let i=0;i<140;i++){const x=range(-5.05,5.05),z=range(-4.08,4.08);if((Math.abs(x)<3.3&&Math.abs(z)<2.8)||z>2.4&&Math.abs(x)<1.6||x>3&&z>0)continue;ball(root,x,.245,z,range(.025,.06),.025,range(.025,.055),materials.gravel,true)}
 // The building has individual stone blocks rather than a single flat wall.
 const floorY=.85;
 box(root,5.7,.59,4.65,0,.52,-.35,materials.stone,.045);
 for(const x of [-2.8,2.8])for(let row=0;row<3;row++)for(let i=0;i<7;i++)box(root,.15,.185,.61,x,.36+row*.19,-2.37+i*.67,materials.stone,.02);
 for(const z of [-2.65,1.98])for(let row=0;row<3;row++)for(let i=0;i<9;i++)box(root,.61,.185,.13,-2.68+i*.67,.36+row*.19,z,materials.stone,.02);
 for(let x=-2.5;x<2.6;x+=.64)for(let z=-2.3;z<1.9;z+=.64)box(root,.625,.04,.625,x,.845,z,((Math.round(x*2)+Math.round(z*2))%3)?materials.tile:materials.stone,.012);
 for(let i=0;i<3;i++)box(root,1.65,.2,1.2-i*.23,-.65,.29+i*.2,2.62-i*.2,materials.stone,.025);
 for(let i=0;i<5;i++)box(root,1.05,.04,.38,-.65+Math.sin(i*.6)*.1,.26,3.15+i*.23,materials.stone,.03);
 // Blackened steel structure, clear glass panes and a pitched glass roof.
 const minX=-2.75,maxX=2.75,front=1.95,back=-2.62,eave=3.85,ridge=5.35;
 for(const x of [minX,maxX]){for(let z=back;z<front+.1;z+=.91)box(root,.065,eave-floorY,.065,x,(eave+floorY)/2,z,materials.frame,.009);for(const yy of [floorY,1.83,2.87,eave])box(root,.075,.075,4.65,x,yy,-.335,materials.frame,.009);for(let i=0;i<5;i++)box(root,.018,eave-floorY-.07,.855,x,(eave+floorY)/2,back+.455+i*.91,materials.glass,.001)}
 for(const z of [front,back]){
 for(let i=0;i<6;i++){const x=-2.75+i*1.1;box(root,.065,eave-floorY,.07,x,(eave+floorY)/2,z,materials.frame,.008)}
 for(const yy of [floorY,1.83,2.87,eave])box(root,5.58,.075,.075,0,yy,z,materials.frame,.008);
 for(let i=0;i<5;i++){const x=-2.2+i*1.1;if(z===front&&i===1)continue;box(root,1.03,eave-floorY-.06,.018,x,(eave+floorY)/2,z,materials.glass,.001)}
 beam(root,V(minX,eave,z),V(0,ridge,z),.045,materials.frame);beam(root,V(0,ridge,z),V(maxX,eave,z),.045,materials.frame);
 beam(root,V(0,eave,z),V(0,ridge,z),.035,materials.frame);for(const x of [-1.1,1.1])beam(root,V(x,eave,z),V(x,ridge-Math.abs(x)/2.75*1.5,z),.028,materials.frame);
 const shape=new T.Shape();shape.moveTo(minX,eave);shape.lineTo(maxX,eave);shape.lineTo(0,ridge);shape.closePath();mesh(new T.ShapeGeometry(shape),materials.glass,root,0,0,z);
 }
 const roofAngle=Math.atan2(1.5,2.75),roofW=Math.hypot(2.75,1.5);
 for(const side of [-1,1]){const pane=box(root,roofW,.018,4.8,side*1.375,(eave+ridge)/2,-.34,materials.glass,.001);pane.rotation.z=-side*roofAngle;
 for(let i=0;i<=5;i++){const z=back+i*.916;beam(root,V(side*2.83,eave-.04,z),V(0,ridge+.01,z),.04,materials.frame)}
 for(const f of [.5,1])beam(root,V(side*2.75*f,ridge-1.5*f,back-.05),V(side*2.75*f,ridge-1.5*f,front+.12),.03,materials.frameEdge);
 }
 beam(root,V(0,ridge,back-.12),V(0,ridge,front+.14),.047,materials.frame);
 for(const x of [-2.86,2.86])beam(root,V(x,eave-.02,back-.08),V(x,eave-.02,front+.12),.07,materials.frameEdge);
 // Slightly opened, hinged front door.
 const door=group(root,-1.63,floorY,front+.045);door.userData.dynamic=true;
 for(const x of [0,1.04])box(door,.055,2.06,.07,x,1.03,0,materials.frame,.008);for(const y of [.025,2.05])box(door,1.08,.055,.07,.52,y,0,materials.frame,.008);box(door,.98,1.98,.018,.52,1.04,0,materials.glass,.001);beam(door,V(.87,.83,.08),V(.87,1.1,.08),.025,materials.brass);door.rotation.y=-.11;
 hit('door','推门进入',-1.07,1.9,front+.1,1.08,2.1,.22);
 const exitLabel=label(root,'THE GLASSHOUSE',2.4,.35,-.25,3.28,front+.065);exitLabel.material.side=T.DoubleSide;
 label(root,'COFFEE  /  BOTANICAL',1.42,.24,1.35,1.24,front+.12,'#e5d5b4','#61654b');
 // Wall shelf, cabinet joinery and the heart of the cafe.
 const counter=group(root,0,floorY,-1.42);box(counter,4.2,.95,.78,0,.49,0,materials.wood,.045);box(counter,4.35,.1,.95,0,1.01,0,materials.lightWood,.025);
 for(let i=0;i<6;i++){const x=-1.74+i*.69;box(counter,.62,.76,.025,x,.5,.404,materials.lightWood,.016);box(counter,.52,.62,.023,x,.5,.425,materials.wood,.012);ball(counter,x+.2,.77,.45,.023,.023,.023,materials.brass)}
 for(const yy of [1.3,2.18,2.98]){box(root,4.55,.07,.38,0,yy+floorY,-2.39,materials.lightWood,.018);for(const x of [-1.95,0,1.95])beam(root,V(x,yy+floorY-.15,-2.59),V(x,yy+floorY-.02,-2.25),.017,materials.brassDark)}
 for(const x of [-2.2,0,2.2])box(root,.065,2.57,.07,x,2.15,-2.55,materials.wood,.01);
 for(let row=0;row<3;row++)for(let i=0;i<9;i++){const xx=-1.9+i*.47+range(-.035,.035),yy=floorY+1.35+row*.84;if(i%3===0||row===1&&i%2===0){const r=range(.075,.11);cyl(root,r,r,.27,xx,yy+.135,-2.34,materials.glassJar);cyl(root,r*.84,r*.84,.13,xx,yy+.07,-2.34,materials.coffee);cyl(root,r*1.05,r*1.05,.03,xx,yy+.285,-2.34,materials.brassDark)}else cup(root,xx,yy,-2.34,.8,false)}
 const machine=group(counter,-.9,1.07,.05);box(machine,.98,.64,.5,0,.4,0,materials.brass,.05);box(machine,.94,.05,.68,0,.055,.06,materials.brassDark,.018);box(machine,.87,.025,.4,0,.09,.14,materials.frameEdge,.01);box(machine,.9,.045,.56,0,.75,0,materials.brass,.015);
 for(const x of [-.26,.26]){cyl(machine,.08,.08,.12,x,.27,.29,materials.frame);beam(machine,V(x,.26,.32),V(x+.15,.26,.48),.035,materials.black);ball(machine,x,.55,.265,.045,.045,.025,materials.black);cyl(machine,.032,.032,.08,x,.16,.32,materials.brass);cup(machine,x,.11,.22,.8)}
 box(machine,.25,.14,.02,0,.53,.265,materials.black,.01);for(let i=0;i<3;i++)box(machine,.032,.015,.007,-.07+i*.07,.54,.28,materials.brass,.002);
 for(let i=0;i<12;i++)box(machine,.82,.006,.012,0,.11,-.02+i*.026,materials.brassDark,.002);
 for(let i=0;i<3;i++)cup(machine,-.28+i*.27,.78,-.02,.75,false);
 // Grinder, golden gooseneck kettles and hand brewing tools.
 const grinder=group(counter,-1.72,1.08,0);cyl(grinder,.14,.2,.38,0,.24,0,materials.brass);cyl(grinder,.2,.12,.27,0,.57,0,materials.glassJar,24);cyl(grinder,.18,.11,.13,0,.51,0,materials.coffee,24);cyl(grinder,.21,.21,.025,0,.72,0,materials.brassDark,24);box(grinder,.15,.09,.1,0,.32,.16,materials.black,.01);
 kettle(counter,1.52,1.08,.12,1.2);kettle(counter,1.06,1.08,.02,.8);cup(counter,.55,1.08,.14,1.05);cup(counter,1.85,1.08,.15,.65);
 const filter=group(counter,.11,1.08,-.1);cyl(filter,.14,.08,.18,0,.29,0,materials.brass,24);cyl(filter,.08,.1,.19,0,.1,0,materials.glassJar);torus(filter,.16,.014,0,.38,0,materials.brass,Math.PI/2);
 hit('coffee','请咖啡师做一杯',-.9,2.23,-1.3,1.15,1.05,.7);
 // Indoor tables, woven chairs, hanging plants and globe lamps.
 table(root,.8,floorY,-.05,.49);chair(root,.12,floorY,.08,Math.PI/2);chair(root,1.48,floorY,-.15,-Math.PI/2);
 table(root,-1.8,floorY,.66,.42);chair(root,-1.75,floorY,1.35,0,.93);
 fern(root,-2.28,floorY,1.55,.76);fern(root,2.35,floorY,1.57,.67);fern(root,2.28,floorY,-2.1,.5);fern(root,-2.3,floorY,-2.1,.49);
 const globes:T.Mesh[]=[];const lamps:T.PointLight[]=[];
 for(const [x,z,h] of [[-1.7,-.35,3.18],[0,-.35,3.45],[1.7,-.35,3.18]]){beam(root,V(x,4.7,z),V(x,h+.2,z),.008,materials.frame);cyl(root,.065,.085,.13,x,h+.17,z,materials.brass);globes.push(ball(root,x,h,z,.18,.2,.18,materials.light));const l=new T.PointLight(0xffd092,5,4,2);l.position.set(x,h-.1,z);root.add(l);lamps.push(l)}
 const hanging=group(root,2,3.7,.7);cyl(hanging,.27,.17,.37,0,0,0,materials.pot);for(let i=0;i<3;i++){const a=i*2.094;beam(hanging,V(Math.cos(a)*.23,.15,Math.sin(a)*.23),V(0,1.2,0),.007,materials.darkWood)}for(let i=0;i<15;i++){const a=i*2.4;const len=range(.4,1.1);for(let k=0;k<7;k++){const f=k/6;ball(hanging,Math.cos(a)*(.08+f*.24),.14-f*len,Math.sin(a)*(.08+f*.24),.075,.035,.09,i%2?materials.green:materials.greenDark,true)}}
 // Patio furniture, a linen parasol, a small sign and garden lighting.
 table(root,4,.26,.25,.48);chair(root,4.3,.26,1,-.24);chair(root,3.4,.26,-.27,2.7);
 table(root,3.95,.26,2.45,.46);chair(root,3.38,.26,2.91,.8);chair(root,4.55,.26,2.1,-2.1);
 const umbrella=group(root,4.6,.26,-.9);cyl(umbrella,.02,.025,2.75,0,1.38,0,materials.wood);const canopy=mesh(new T.ConeGeometry(.92,.44,12,1,true),materials.cream,umbrella,0,2.55,0);canopy.material.side=T.DoubleSide;for(let i=0;i<12;i++){const a=i*Math.PI/6;beam(umbrella,V(0,2.77,0),V(Math.cos(a)*.92,2.33,Math.sin(a)*.92),.008,materials.wood)}ball(umbrella,0,2.83,0,.04,.065,.04,materials.brass);
 const sign=group(root,-3.9,.25,2.5,.24);for(const x of [-.27,.27]){beam(sign,V(x,0,.18),V(x,1.05,0),.025,materials.wood);beam(sign,V(x,0,-.25),V(x,1.05,0),.025,materials.wood)}box(sign,.65,.67,.06,0,.72,.02,materials.frame,.02);label(sign,'SLOW COFFEE',.57,.28,0,.81,.055);label(sign,'OPEN · 09—18',.57,.15,0,.57,.055);hit('sign','今日手冲：花香与柑橘',-3.9,1,2.5,.7,1.2,.4);
 tree(root,-4.1,-1.4,1.08);tree(root,4.15,-2.7,1.02);tree(root,-3.8,-3.3,.82);
 for(const [x,z,s] of [[-3.7,.8,.9],[-4.4,0,.75],[-3.1,1.6,.65],[3.3,-3.5,.7],[4.8,-3.5,.6],[-4.4,-3.65,.8],[2.7,3.65,.55]])shrub(root,x,.25,z,s);
 fern(root,-3.22,.25,1.1,.65);fern(root,3.08,.25,-2.1,.7);fern(root,-3.2,.25,-3.1,.6);fern(root,2.68,.25,2.35,.6);
 for(const [x,z] of [[-2.15,3.35],[1.1,3.4],[-4.6,1.5],[4.8,3.6],[3.35,-3.6]]){cyl(root,.065,.07,.43,x,.46,z,materials.frame);cyl(root,.06,.06,.15,x,.69,z,materials.light);cyl(root,.08,.08,.035,x,.79,z,materials.brassDark)}
 // A chimney and a roof planter echo the reference without hiding the glass.
 cyl(root,.115,.115,2.5,-1.9,4.1,-2.37,materials.frameEdge,20);cyl(root,.16,.16,.12,-1.9,5.38,-2.37,materials.frame,20);cyl(root,.10,.10,.014,-1.9,5.45,-2.37,materials.black,20);
 const planter=group(root,1.7,4.47,-.9);planter.rotation.z=-roofAngle;box(planter,.68,.17,1.1,0,0,0,materials.wood,.03);box(planter,.55,.015,.96,0,.095,0,materials.soil);for(let i=0;i<15;i++)ball(planter,range(-.24,.24),range(.11,.3),range(-.44,.44),.12,.12,.13,i%2?materials.green:materials.greenLight,true);
 // Autonomous little residents; the server follows an unobstructed garden path.
 actors.push(person(root,.4,floorY,-1.98,'barista',0));actors[0].root.scale.setScalar(1.43);
 actors.push(person(root,3.38,.26,-.27,'guest',.7));
 actors.push(person(root,4.55,.26,2.1,'guest2',-2.1));
 actors.push(person(root,-3.45,.26,1.1,'gardener',-1));
 actors.push(person(root,-.6,.26,3.65,'server',Math.PI/2));actors.slice(1).forEach(a=>a.root.scale.setScalar(1.16));
 hit('table','坐一会儿，听咖啡落下',.8,1.8,-.05,1,.7,1);
 const decorations:Record<string,T.Group>={};
 function deco(id:string,x:number,y:number,z:number){const g=group(root,x,y,z);g.userData.dynamic=true;g.visible=false;decorations[id]=g;return g}
 const flowers=deco('flowers',-3.7,.28,3.35);box(flowers,1.15,.3,.43,0,.15,0,materials.wood);for(let i=0;i<7;i++){const x=-.45+i*.15;beam(flowers,V(x,.25,0),V(x,.65,0),.012,materials.greenDark);for(let j=0;j<5;j++){const a=j*Math.PI*2/5;ball(flowers,x+Math.cos(a)*.06,.65,Math.sin(a)*.06,.045,.025,.045,materials.cream)}ball(flowers,x,.66,0,.025,.025,.025,materials.brass)}
 const rug=deco('rug',0,.884,.45);box(rug,2.15,.012,1.65,0,0,0,materials.greenDark,.04);box(rug,1.98,.014,1.48,0,.008,0,materials.lightWood,.025);box(rug,1.8,.016,1.3,0,.014,0,materials.green,.02);
 const lamp=deco('lamp',-2.13,floorY,-.45);cyl(lamp,.18,.2,.035,0,.02,0,materials.brass);beam(lamp,V(0,.02,0),V(0,1.8,0),.025,materials.brass);beam(lamp,V(0,1.8,0),V(.25,1.95,0),.025,materials.brass);cyl(lamp,.08,.22,.25,.25,1.8,0,materials.brass);ball(lamp,.25,1.7,0,.1,.08,.1,materials.light);
 const gram=deco('gramophone',-1.85,1.86,.7);box(gram,.48,.2,.4,0,0,0,materials.wood);cyl(gram,.18,.18,.018,0,.12,0,materials.black,32);beam(gram,V(.17,.12,0),V(.23,.5,-.1),.025,materials.brass);const horn=cyl(gram,.21,.04,.32,.2,.56,-.1,materials.brass);horn.rotation.z=-.8;
 const lantern=deco('lantern',2.6,.26,3.52);box(lantern,.45,.06,.45,0,.03,0,materials.wood);for(const x of [-.2,.2])for(const z of [-.2,.2])beam(lantern,V(x,.05,z),V(x,.8,z),.018,materials.brass);box(lantern,.44,.04,.44,0,.82,0,materials.brass);ball(lantern,0,.4,0,.12,.16,.12,materials.light);
 const art=deco('art',2.68,2.45,-.2);box(art,.07,.62,.48,0,0,0,materials.wood);box(art,.08,.53,.39,-.008,0,0,materials.cream);for(let i=0;i<5;i++)ball(art,-.055,-.17+i*.08,Math.sin(i*2)*.08,.018,.055,.08,materials.green,true);
 actors.slice(0,3).forEach((a,i)=>{const n=i===0?0:i===1?1:2;hit('person'+n,'与'+['阿禾','林伯','棠姨'][n]+'聊聊天',a.root.position.x,a.root.position.y+1.1,a.root.position.z,.55,.7,.55)});
 // Individual steam wisps, animated independently of simulation.
 const steam=group(root,.55,2.09,-1.25);steam.userData.dynamic=true;const steamMat=new T.MeshBasicMaterial({color:0xfaf3dc,transparent:true,opacity:.25,depthWrite:false});for(let i=0;i<9;i++)ball(steam,0,.12+i*.04,0,.014,.07,.014,steamMat);
 // Consolidate static meshes by material: thousands of details, a few draw calls.
 root.updateWorldMatrix(true,true);const batches=new Map<Material,{geos:T.BufferGeometry[],shadow:boolean}>();const toRemove:T.Mesh[]=[];
 root.traverse(o=>{if(!(o instanceof T.Mesh))return;let a:T.Object3D|null=o;while(a&&a!==root){if(a.userData.dynamic)return;a=a.parent}const m=o.material as Material;if(!batches.has(m))batches.set(m,{geos:[],shadow:o.castShadow});const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(o.matrixWorld);geo.deleteAttribute('uv1');geo.deleteAttribute('tangent');batches.get(m)!.geos.push(geo);toRemove.push(o)});
 for(const [m,b] of batches){const geo=mergeGeometries(b.geos,false);if(geo){const o=new T.Mesh(geo,m);o.castShadow=b.shadow;o.receiveShadow=true;scene.add(o)}for(const g of b.geos)g.dispose()}for(const o of toRemove)o.removeFromParent();
 return {root,actors,door,hotspots,steam,lamps,globes,decorations};
}

export function updatePeople(actors:Actor[],t:number,order:number){
 for(const a of actors){const f=t+a.phase;a.head.rotation.z=Math.sin(f*.65)*.045;a.head.rotation.y=Math.sin(f*.4)*.13;
 if(a.role==='barista'){const pour=Math.sin(f*.72);a.armL.rotation.x=-.8+Math.sin(f*1.4)*.18;a.armR.rotation.x=-.85+Math.cos(f*.72)*.4;a.armR.rotation.z=-.15+Math.sin(f*.72)*.18;a.root.position.x=a.base.x+Math.sin(f*.24)*.15;a.head.rotation.x=.12+pour*.08;if(order>0){a.armR.rotation.x=-1.6+Math.sin(t*3)*.12;a.head.rotation.x=.18}}
 else if(a.role==='server'){const cycle=(t*.16)%4;const u=cycle<2?cycle/2:2-cycle/2;const dx=-1.2+u*3.2;a.root.position.x=dx;a.root.position.z=3.5+Math.sin(u*Math.PI)*.12;a.root.rotation.y=cycle<2?Math.PI/2:-Math.PI/2;a.legL.rotation.x=Math.sin(t*4)*.38;a.legR.rotation.x=-Math.sin(t*4)*.38;a.armL.rotation.x=-Math.sin(t*4)*.2;a.armR.rotation.x=-.8;a.root.position.y=a.base.y+Math.abs(Math.sin(t*4))*.024}
 else if(a.role==='gardener'){a.armR.rotation.x=-.45+Math.sin(f*.8)*.18;a.armR.rotation.z=-.4;a.root.rotation.z=Math.sin(f*.8)*.025;a.head.rotation.x=.25}
 else{const sip=Math.pow(Math.max(0,Math.sin(f*.57)),5);a.armR.rotation.x=-.45-sip*1.5;a.armL.rotation.x=-.35;a.head.rotation.x=-sip*.08;a.root.rotation.z=Math.sin(f*.5)*.015}
 }
}
