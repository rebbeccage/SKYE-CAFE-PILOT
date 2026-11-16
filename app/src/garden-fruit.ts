import * as T from 'three';
import {V,material,group,mesh,box,ball,branch,consolidate} from './winter-geometry';

// Seasonal additions in the established lawn; all coordinates are garden-local.
// Keep them clear of Tang, the cat and the existing worktable/worn grass path.
export function createGardenFruit(parent:T.Group){
 const root=group(parent);root.name='Seasonal strawberry runners and grape vines';
 const structure=group(root),grapeLeaves=group(root),berries=group(root),strawberryLeaves=group(root),winter=group(root);
 const wood=material(0xb9a07b),bark=material(0x75654f),green=material(0x94a47c,.82),underside=material(0xb3bd9d,.85),vein=material(0xc4c8a8),red=material(0xb76d59,.58),seed=material(0xd6b88a),purple=material(0x82718c,.5),bloom=material(0xaba0af,.7),cream=material(0xe9e6d6),frost=material(0xdde3e2,.94);
 const stems=new T.CatmullRomCurve3([V(5.1,.27,5.95),V(5.18,.76,5.95),V(5.58,1.3,5.95),V(6.35,1.44,5.96),V(7.1,1.36,5.93),V(7.7,1.52,5.95)]);
 const tube=(p:T.Object3D,points:T.Vector3[],r:number,m:T.Material)=>mesh(p,new T.TubeGeometry(new T.CatmullRomCurve3(points),24,r,5,false),m);
 for(const x of [5.1,6.4,7.7]){box(structure,.045,1.27,.045,x,.26+1.27/2,5.95,wood);box(winter,.055,.023,.055,x,1.54,5.95,frost)}
 for(const y of [.8,1.27])tube(structure,[V(5.1,y,5.95),V(6.4,y-.045,5.95),V(7.7,y,5.95)],.007,bark);
 mesh(structure,new T.TubeGeometry(stems,40,.016,7,false),bark);
 function leaf(p:T.Object3D,at:T.Vector3,size:number,angle:number,lobed=false){
  const g=group(p,at.x,at.y,at.z);g.rotation.set(.15,angle,.18*Math.sin(angle));
  const shape=new T.Shape();const points=lobed?[[0,-1],[-.54,-.35],[-.85,-.4],[-.57,.1],[-1,.25],[-.5,.48],[-.45,.85],[0,.65],[.45,.85],[.5,.48],[1,.25],[.57,.1],[.85,-.4],[.54,-.35]]:[[0,-1],[-.5,-.4],[-.66,.15],[-.4,.75],[0,1],[.4,.75],[.66,.15],[.5,-.4]];
  points.forEach(([x,y],i)=>i?shape.lineTo(x*size,y*size):shape.moveTo(x*size,y*size));shape.closePath();
  const geo=new T.ExtrudeGeometry(shape,{depth:.004,bevelEnabled:false,steps:1});geo.rotateX(-Math.PI/2);mesh(g,geo,green);
  branch(g,V(0,.007,-size*.85),V(0,.007,size*.8),.002,vein,.001);
  for(const s of [-1,1])for(let k=0;k<3;k++)branch(g,V(0,.007,(-.4+k*.35)*size),V(s*size*.5,.007,(-.15+k*.35)*size),.0012,underside,.0006);
  return g;
 }
 const bunches:T.Vector3[]=[];
 for(let i=0;i<14;i++){
  const p=stems.getPoint((i+.5)/15),side=i%2?1:-1,end=p.clone().add(V(side*.11,.11,side*.21));
  branch(structure,p,end,.006,bark,.002);leaf(grapeLeaves,end,.15+(i%3)*.018,i*.85,true);
  if(i%2===0){const a=p.clone().add(V(.02,-.09,-.065));bunches.push(a);branch(structure,p,a,.004,bark,.002);
   for(let row=0;row<4;row++)for(let k=0;k<4-row;k++){const r=.044;const b=ball(berries,r,a.x+(k-(3-row)/2)*.068,a.y-row*.061,a.z+Math.sin(k*2.4+row)*.025,purple);b.scale.y=1.12;if(k===0)ball(berries,.012,b.position.x-.018,b.position.y+.022,b.position.z+.032,bloom)}
  }
  if(i%3===0){const end=p.clone().add(V(.12,.16,.08));const pts=Array.from({length:18},(_,j)=>end.clone().add(V(Math.cos(j*.4)*(.03-j*.001),j*.004,Math.sin(j*.4)*.03)));tube(structure,[p,...pts],.0025,bark)}
 }
 function strawberry(p:T.Object3D,at:T.Vector3,scale=1){
  const g=group(p,at.x,at.y,at.z);g.scale.setScalar(scale);const shape=[new T.Vector2(0,-.047),new T.Vector2(.024,-.03),new T.Vector2(.045,.008),new T.Vector2(.04,.035),new T.Vector2(.022,.044),new T.Vector2(0,.042)];
  mesh(g,new T.LatheGeometry(shape,10),red);
  for(let j=0;j<12;j++){const angle=j*2.4,y=-.022+(j%3)*.021,r=y<0?.028:.041;const o=ball(g,.003,Math.cos(angle)*r,y,Math.sin(angle)*r,seed);o.scale.y=1.4}
  for(let k=0;k<5;k++){const a=k*Math.PI*.4;const l=ball(g,.018,Math.cos(a)*.019,.046,Math.sin(a)*.019,green);l.scale.set(.55,.16,1.25);l.rotation.y=-a}
  branch(g,V(0,.044,0),V(.005,.072,.003),.0025,green,.001);
 }
 const plants=[[4.55,6.6],[5.1,7.2],[5.75,7.8],[6.42,7.82],[7.1,7.65]];
 for(const [index,[x,z]] of plants.entries()){
  const base=V(x,.29,z);
  for(let i=0;i<5;i++){const angle=i*1.26+index,tip=base.clone().add(V(Math.cos(angle)*.17,.055+Math.sin(i)*.012,Math.sin(angle)*.14));branch(structure,base,tip,.003,bark,.0015);
   for(let k=0;k<3;k++){const a=angle+(k-1)*.62,at=tip.clone().add(V(Math.cos(a)*.065,0,Math.sin(a)*.065));leaf(strawberryLeaves,at,.073,a);const snow=ball(winter,.025,at.x,at.y+.01,at.z,frost);snow.scale.set(1,.25,.8)}
   if(i%2===0){const at=tip.clone().add(V(.02,-.02,.035));strawberry(berries,at,.95)}
  }
  // Low runners connect the clumps without any new paving or bed boundary.
  tube(structure,[base,base.clone().add(V(.17,-.005,.18)),base.clone().add(V(.35,.005,.13))],.003,bark);
  const center=base.clone().add(V(-.06,.12,0));ball(berries,.011,center.x,center.y,center.z,seed);for(let k=0;k<5;k++){const a=k*1.256;const f=ball(berries,.016,center.x+Math.cos(a)*.016,center.y,center.z+Math.sin(a)*.016,cream);f.scale.y=.25}
 }
 const fallen=[V(4.9,.344,6.85),V(5.63,.343,7.38),V(6.77,.342,8.12)];for(const [i,p] of fallen.entries()){strawberry(berries,p,.85);for(let j=0;j<2;j++)ball(berries,.032,p.x+.15+j*.06,.33,p.z+.08-i*.03,purple)}
 for(const g of [structure,grapeLeaves,berries,strawberryLeaves,winter]){consolidate(g);g.traverse(o=>{if(o instanceof T.Mesh)o.castShadow=true})}
 let state='sun';winter.visible=false;
 return {update(snow:boolean,rain:boolean){const next=snow?'snow':rain?'rain':'sun';if(next===state)return;state=next;grapeLeaves.visible=berries.visible=!snow;winter.visible=snow;green.color.setHex(snow?0x8e9680:rain?0x839077:0x94a47c);green.roughness=rain?.63:.82;},diagnostics:()=>({weather:state,strawberryPlants:plants.length,grapeBunches:bunches.length,fallenStrawberries:fallen.length,fallenGrapes:fallen.length*2,ripeFruitVisible:berries.visible,winterDormant:!grapeLeaves.visible,localBounds:{x:[4.2,7.95],z:[5.5,8.2]}})};
}
