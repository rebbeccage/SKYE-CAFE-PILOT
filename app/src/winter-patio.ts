import * as T from 'three';
import type {buildWorld} from './world';
import {V,material,group,mesh,box,ball,cyl,branch,consolidate} from './winter-geometry';

const tableZ=[.35,2.8];
// Two staggered out-and-back trails follow the existing service aisle.
const path=[V(-1.1,0,3.6),V(-.3,0,4.65),V(4.75,0,4.65),V(4.75,0,.35)];
export const patioFootprints:{x:number,z:number,yaw:number}[]=[];
let carry=.3,index=0;
for(let n=0;n<path.length-1;n++){
 const a=path[n],b=path[n+1],dir=b.clone().sub(a).normalize(),length=a.distanceTo(b),side=V(dir.z,0,-dir.x);
 for(;carry<length;carry+=.6,index++)for(const returning of [false,true]){const p=a.clone().addScaledVector(dir,carry).addScaledVector(side,(returning?-.14:.14)+(index%2?.055:-.055));patioFootprints.push({x:p.x,z:p.z,yaw:Math.atan2(dir.x,dir.z)+(returning?Math.PI:0)})}carry-=length;
}
for(const z of tableZ)for(const x of [4.65,4.05])for(const returning of [false,true])patioFootprints.push({x,z:z+(returning?-.14:.14),yaw:returning?Math.PI/2:-Math.PI/2});
export function patioTrampled(x:number,z:number){return tableZ.some(t=>Math.hypot(x-3.55,z-t)<.8)}
export function patioFootDepth(x:number,z:number){return patioFootprints.some(p=>{const dx=x-p.x,dz=z-p.z,u=dx*Math.cos(p.yaw)-dz*Math.sin(p.yaw),v=dx*Math.sin(p.yaw)+dz*Math.cos(p.yaw);return u*u/.0064+v*v/.0196<1})?.025:0}

export function createWinterPatio(parent:T.Group,world:ReturnType<typeof buildWorld>,snow:T.Material,blankets:T.Group){
 const root=group(parent),caps=group(root),chairs=group(root),tableware=group(root),parasols=group(root);
 const frame=material(0x4a5d3f,.45,.25),iron=material(0x514c43,.72,.4),wood=material(0xc8a87c,.6),rope=material(0xb6a17d),linen=material(0xefe9dc),copper=material(0xb17a4f,.3,.7),pot=material(0xa97d60,.86),ceramic=material(0xe8dfc9,.83),spice=material(0x785139),oat=material(0xe8dfc9,.91),sage=material(0xa8b98f,.91);
 const dampOat=oat.clone();dampOat.color.multiplyScalar(.92);dampOat.roughness=.95;const dampSage=sage.clone();dampSage.color.multiplyScalar(.92);dampSage.roughness=.95;
 const ice=new T.MeshPhysicalMaterial({color:0xd2e3d7,roughness:.12,metalness:.08,transparent:true,opacity:.62,depthWrite:false});
 const glass=new T.MeshPhysicalMaterial({color:0xe2ebe0,roughness:.16,metalness:.05,transparent:true,opacity:.17,depthWrite:false,side:T.DoubleSide});
 const steamMaterial=new T.MeshBasicMaterial({color:0xf1e7d7,transparent:true,opacity:.16,depthWrite:false});
 const steamSources:T.Group[]=[];let deposits=0,minDepositedNormal=1,icicles=0;const inverted:T.Group[]=[],upright:T.Group[]=[];
 // Snow is sampled after the prop's actual world rotation; downward/vertical faces
 // never pass the same .6 normal mask used by the building's accumulation layer.
 function deposit(object:T.Object3D,depth:number,include:(p:T.Vector3)=>boolean=()=>true,variation:(p:T.Vector3)=>number=()=>1){
  object.updateWorldMatrix(true,true);caps.updateWorldMatrix(true,false);const toCaps=caps.matrixWorld.clone().invert(),toLocal=object.matrixWorld.clone().invert(),positions:number[]=[],edges=new Map<string,{a:T.Vector3,b:T.Vector3,at:T.Vector3,bt:T.Vector3,count:number}>();
  object.traverse(o=>{if(!(o instanceof T.Mesh))return;const g=o.geometry.index?o.geometry.toNonIndexed():o.geometry;const attr=g.getAttribute('position');
   for(let i=0;i<attr.count;i+=3){const a=V(0,0,0).fromBufferAttribute(attr,i).applyMatrix4(o.matrixWorld),b=V(0,0,0).fromBufferAttribute(attr,i+1).applyMatrix4(o.matrixWorld),c=V(0,0,0).fromBufferAttribute(attr,i+2).applyMatrix4(o.matrixWorld);const normal=b.clone().sub(a).cross(c.clone().sub(a)).normalize(),centre=a.clone().add(b).add(c).multiplyScalar(1/3),local=centre.clone().applyMatrix4(toLocal);if(normal.y<=.6||!include(local))continue;
    const d=depth*T.MathUtils.smoothstep(normal.y,.6,.6+Math.sin(Math.PI/12))*variation(local);if(d<.001)continue;minDepositedNormal=Math.min(minDepositedNormal,normal.y);deposits++;
    const top=[a,b,c].map(p=>p.clone().add(V(0,d,0)));for(const p of top)positions.push(...p.clone().applyMatrix4(toCaps).toArray());
    const base=[a,b,c];for(let k=0;k<3;k++){const j=(k+1)%3,key=[base[k],base[j]].map(p=>p.toArray().map(n=>n.toFixed(5)).join(',')).sort().join('|'),old=edges.get(key);if(old)old.count++;else edges.set(key,{a:base[k],b:base[j],at:top[k],bt:top[j],count:1})}
   }if(g!==o.geometry)g.dispose();
  });for(const e of edges.values())if(e.count===1)for(const p of [e.a,e.b,e.bt,e.a,e.bt,e.at])positions.push(...p.clone().applyMatrix4(toCaps).toArray());const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.computeVertexNormals();return mesh(caps,geometry,snow);
 }
 function pipe(p:T.Object3D,points:T.Vector3[],r:number,m:T.Material){return mesh(p,new T.TubeGeometry(new T.CatmullRomCurve3(points),24,r,6,false),m)}
 function icicle(p:T.Object3D,x:number,y:number,z:number,seed:number){const h=.10*(1+.3*Math.sin(seed*2.713));cyl(p,.009,.001,h,x,y-h/2,z,ice);const core=cyl(p,.002,.0005,h*.85,x-.003,y-h*.45,z+.002,ice);core.rotation.z=.03;icicles++}
 function steam(p:T.Object3D,x:number,y:number,z:number){const g=group(p,x,y,z);steamSources.push(g);for(let i=0;i<7;i++)ball(g,.017,0,0,0,steamMaterial);return g}
 function cup(p:T.Object3D,x:number,y:number,z:number){const g=group(p,x,y,z);const profile=[new T.Vector2(.039,0),new T.Vector2(.053,.092),new T.Vector2(.045,.094),new T.Vector2(.032,.012),new T.Vector2(0,.012),new T.Vector2(0,0)];mesh(g,new T.LatheGeometry(profile,20),ceramic);mesh(g,new T.TorusGeometry(.025,.008,7,16),ceramic,.064,.053,0);return g}
 // Winter tables stay clear: only the two upright, blanket-covered seats remain.
 for(const i of [0,3]){
  const c=world.patioChairs[i].clone(true);chairs.add(c);upright.push(c);
  const cushion=cyl(c,.265,.27,.095,0,.635,0,i===0?oat:sage);deposit(cushion,.055,p=>!(p.x<-.10&&p.z<-.08));
  // Damp velvet on the outward corner; same value reduction for either fabric.
  const wet=mesh(c,new T.CylinderGeometry(.265,.265,.002,24,1,false,Math.PI*.95,Math.PI*.28),i===0?dampOat:dampSage,0,.684,0);
  wet.scale.set(.95,1,.95);deposit(c,.025,p=>p.y>.93);
  const cloth=group(blankets);cloth.position.copy(c.position);cloth.quaternion.copy(c.quaternion);
  // A folded hanging wool sheet, with physical folds and thickness at its hem.
  const points:number[]=[],indices:number[]=[];const nx=24,nz=36;
  for(let u=0;u<=nx;u++)for(let v=0;v<=nz;v++){
   const x=-.25+u/nx*.5,t=v/nz,fold=Math.sin(u/nx*Math.PI*8)*.014;
   let y:number,z:number;if(t<.22){y=.69+fold;z=.12-t/.22*.28}else if(t<.48){const f=(t-.22)/.26;y=.69+f*.36;z=-.16-f*.13+fold}else if(t<.6){const f=(t-.48)/.12;y=1.05+Math.sin(f*Math.PI)*.02+fold;z=-.29-f*.05}else{const f=(t-.6)/.4;y=1.05-f*.65;z=-.34-f*.035+fold}points.push(x,y+Math.sin(u/nx*12)*.008,z);
  }
  for(let u=0;u<nx;u++)for(let v=0;v<nz;v++){const a=u*(nz+1)+v,b=(u+1)*(nz+1)+v;indices.push(a,b,a+1,b,b+1,a+1)}
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(points,3));geo.setIndex(indices);geo.computeVertexNormals();const m=(i===0?oat:sage).clone();m.side=T.DoubleSide;const fabric=mesh(cloth,geo,m);
  // Snow lodged in the valleys rather than a smooth slab across the wool.
  const clothSnow=deposit(fabric,.018,()=>true,p=>.25+.75*(.5-.5*Math.sin((p.x+.25)/.5*Math.PI*8)));blankets.attach(clothSnow);
  for(let j=0;j<14;j++)branch(cloth,V(-.23+j*.035,.4,-.375),V(-.23+j*.035,.35-Math.sin(j)*.012,-.38),.0035,i===0?oat:sage);
 }
 for(const z of tableZ){
  const table=group(tableware,3.55,1.17,z);
  // Six centimetres on the exposed tabletop; dishes rest on cleared contact pads.
  const shape=new T.Shape();shape.absarc(0,0,.44,0,Math.PI*2,false);
  const clearings=[{x:.23,z:-.225,r:.11},{x:.18,z:0,r:.075},{x:.17,z:.24,r:.11},{x:.015,z:.37,r:.045}];
  for(const p of clearings){const hole=new T.Path();hole.absarc(p.x,-p.z,p.r,0,Math.PI*2,true);shape.holes.push(hole)}
  const cap=mesh(table,new T.ExtrudeGeometry(shape,{depth:.06,bevelEnabled:false,curveSegments:32}),snow);cap.rotation.x=-Math.PI/2;
  const urn=group(table,.23,.005,-.225);const profile=[new T.Vector2(.05,0),new T.Vector2(.075,.035),new T.Vector2(.085,.12),new T.Vector2(.06,.21),new T.Vector2(.052,.215)];mesh(urn,new T.LatheGeometry(profile,24),copper);
  const lid=group(urn,0,.218,0);lid.rotation.z=.18;cyl(lid,.066,.066,.014,0,0,0,copper);ball(lid,.015,0,.018,0,copper);
  pipe(urn,[V(.055,.04,0),V(.105,.08,0),V(.13,.19,0),V(.16,.21,0)],.012,copper);pipe(urn,[V(-.06,.17,0),V(-.12,.16,0),V(-.12,.05,0),V(-.06,.04,0)],.01,iron);steam(urn,.16,.22,0);
  for(let n=0;n<3;n++){const c=cup(table,.18,.005+n*.047,0);c.rotation.y=n*.35}
  cyl(table,.10,.095,.018,.17,.012,.24,wood);for(let i=0;i<4;i++){const x=.17+Math.cos(i*1.7)*.046,zz=.24+Math.sin(i*1.7)*.046;const cookie=cyl(table,.028,.029,.014,x,.029+i*.007,zz,wood);cookie.rotation.y=i;for(let k=0;k<3;k++)ball(table,.003,x+Math.cos(k*2.1)*.014,.038+i*.007,zz+Math.sin(k*2.1)*.014,spice)}
  const jar=group(table,.015,.005,.37);cyl(jar,.03,.032,.085,0,.044,0,glass);cyl(jar,.032,.032,.018,0,.098,0,wood);for(let i=0;i<4;i++){branch(jar,V(-.015+i*.009,.01,0),V(-.012+i*.007,.075,.008),.003,spice);ball(jar,.005,.012,.02+i*.01,.015,spice)}
  // A small towel falls over the south edge, clear of the upside-down chair back.
  const towel=group(table,.08,0,.42);box(towel,.15,.008,.13,0,.065,-.045,linen);const drop=box(towel,.15,.18,.009,0,-.025,.018,linen);drop.rotation.x=-.10;for(let i=0;i<7;i++)branch(towel,V(-.066+i*.022,-.11,.028),V(-.066+i*.022,-.13,.028),.002,rope);
  for(let a=0;a<Math.PI*2;a+=.3/.44)icicle(table,Math.cos(a)*.44,.01,Math.sin(a)*.44,a+z);
 }
 // Folded linen, twelve visible ribs, two real rope ties, uncovered wooden finial.
 for(const [x,z,height] of [[3.55,-.85,2.83],[4.03,4.12,2.98]]){
  const g=group(parasols,x,.26,z);cyl(g,.023,.03,height,0,height/2,0,wood);cyl(g,.23,.27,.08,0,.04,0,material(0xc9c2b4));
  const vertices:number[]=[],faces:number[]=[];const rows=12,cols=48;
  for(let j=0;j<=rows;j++)for(let k=0;k<=cols;k++){const t=j/rows,a=k/cols*Math.PI*2,r=(.025+.11*Math.sin(Math.PI*t*.82))*(1+.16*Math.cos(a*12));vertices.push(Math.cos(a)*r,height-.10-t*.68,Math.sin(a)*r)}
  for(let j=0;j<rows;j++)for(let k=0;k<cols;k++){const a=j*(cols+1)+k,b=a+cols+1;faces.push(a,b,a+1,b,b+1,a+1)}
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(vertices,3));geo.setIndex(faces);geo.computeVertexNormals();const fabric=linen.clone();fabric.side=T.DoubleSide;mesh(g,geo,fabric);
  for(let k=0;k<12;k++){const a=k*Math.PI/6,p=V(Math.cos(a)*.13,height-.76,Math.sin(a)*.13);branch(g,V(Math.cos(a)*.025,height-.10,Math.sin(a)*.025),p,.005,wood);if(k%3===0)icicle(g,p.x,p.y,p.z,k+z)}
  for(const y of [height-.40,height-.46]){const tie=mesh(g,new T.TorusGeometry(.12,.007,7,48),rope,0,y,0);tie.rotation.x=Math.PI/2;pipe(g,[V(.12,y,0),V(.15,y-.035,.03),V(.17,y-.07,.02)],.004,rope)}
  const tip=cyl(g,.031,.035,.015,0,height-.092,0,snow);deposit(tip,.001);
  for(let k=0;k<6;k++){const a=k*Math.PI/3;branch(g,V(Math.cos(a)*.026,height-.095,Math.sin(a)*.026),V(Math.cos(a)*.054,height-.20,Math.sin(a)*.054),.0075,snow,.0075)}
 }
 // Iron tripod, open terracotta bowl, six split logs and small iron tongs.
 const brazier=group(root,3.55,.26,1.55);
 for(let k=0;k<3;k++){const a=k*Math.PI*2/3;branch(brazier,V(Math.cos(a)*.26,0,Math.sin(a)*.26),V(Math.cos(a)*.15,.4,Math.sin(a)*.15),.014,iron)}
 mesh(brazier,new T.LatheGeometry([new T.Vector2(.13,.28),new T.Vector2(.25,.46),new T.Vector2(.225,.47),new T.Vector2(.105,.30)],32),pot);
 const rim=mesh(brazier,new T.TorusGeometry(.238,.015,8,32),snow,0,.485,0);rim.rotation.x=Math.PI/2;
 const coal=material(0x4f3429,.9);coal.emissive=new T.Color(0xc4562f);coal.emissiveIntensity=2.5;
 for(let i=0;i<19;i++){const a=i*2.4,r=.17*Math.sqrt(i/19);const c=ball(brazier,.037,Math.cos(a)*r,.365+Math.sin(i*3)*.008,Math.sin(a)*r,coal);c.scale.set(1,.45,.8)}
 const glow=new T.PointLight(0xc4562f,.35,.8,2);glow.position.set(0,.42,0);brazier.add(glow);
 const logPile=group(root,3.1,.26,1.55);for(let i=0;i<6;i++){const a=V(-.11+(i%3)*.09,.045,.10+Math.floor(i/3)*.08),b=V(-.025+(i%3)*.04,.44+Math.floor(i/3)*.08,-.08);branch(logPile,a,b,.042,wood,.035);branch(logPile,a.clone().add(V(.02,0,0)),b.clone().add(V(.02,0,0)),.009,material(0x6b5a4a),.007)}
 pipe(brazier,[V(.23,.015,.15),V(.32,.02,.26),V(.37,.02,.21)],.006,iron);pipe(brazier,[V(.23,.015,.15),V(.30,.02,.30),V(.35,.02,.28)],.006,iron);
 // Local refractive heat column: animated normals bend the actual background.
 const heatMat=new T.MeshPhysicalMaterial({color:0xffffff,transmission:1,ior:1.025,thickness:.06,roughness:0,transparent:true,opacity:.2,depthWrite:false,side:T.DoubleSide});
 const time={value:0};heatMat.onBeforeCompile=shader=>{shader.uniforms.heatTime=time;shader.vertexShader='uniform float heatTime;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <beginnormal_vertex>','#include <beginnormal_vertex>\nobjectNormal.x += sin(position.y*26.0+heatTime*2.6+position.z*17.0)*0.22;objectNormal.z += cos(position.y*20.0-heatTime*2.1+position.x*19.0)*0.22;')};
 const heat=mesh(brazier,new T.CylinderGeometry(.12,.24,.65,20,12,true),heatMat,0,.8,0);heat.userData.animated=true;
 // Two 1.2 m panels, 1.8 m high, tucked north of the uninterrupted service aisle.
 const screen=group(root,5.22,.26,-1.30);
 for(const axis of [0,1]){const p=group(screen);p.rotation.y=axis===0?0:-Math.PI/2;
  for(const z of [0,1.2]){branch(p,V(0,0,z),V(0,1.8-z*.06,z),.018,frame,.018);box(p,.22,.025,.24,0,.013,z,frame)}branch(p,V(0,.08,0),V(0,.08,1.2),.018,frame,.018);branch(p,V(0,1.8,0),V(0,1.728,1.2),.018,frame,.018);
  const shape=new T.Shape();shape.moveTo(0,.10);shape.lineTo(1.18,.10);shape.lineTo(1.18,1.70);shape.lineTo(0,1.77);shape.closePath();const pane=mesh(p,new T.ExtrudeGeometry(shape,{depth:.005,bevelEnabled:false}),glass);pane.rotation.y=-Math.PI/2;pane.position.z=.01;
  branch(p,V(0,1.827,0),V(0,1.755,1.2),.01,snow,.01);
 }
 // Small damp paving patches keep the underlying stone pattern readable.
 const wet= new T.MeshStandardMaterial({color:0x928f83,transparent:true,opacity:.19,roughness:.5,depthWrite:false});
 for(const z of tableZ){const patch=mesh(root,new T.CircleGeometry(.8,48),wet,3.55,.251,z);patch.rotation.x=-Math.PI/2}
 for(const p of patioFootprints){if(patioTrampled(p.x,p.z))continue;const print=mesh(root,new T.CircleGeometry(.065,12),material(0xc4c7c8,.8),p.x,.248+(.06+.02*(.5+.5*Math.sin(p.x*1.2+p.z*1.8)))*(1+1.3*T.MathUtils.smoothstep(p.x,3.7,5.3))-.025,p.z);print.rotation.set(-Math.PI/2,0,-p.yaw);print.scale.y=1.65}
 // Keep mutable FX and optional blankets separate from the static batches.
 [chairs,tableware,parasols,brazier,logPile,screen,caps].forEach(g=>{g.traverse(o=>{if(steamSources.some(s=>s===o||s.children.includes(o)))o.userData.animated=true});consolidate(g)});
 let active=false;
 return {root,brazier,screen,chairs,inverted,upright,update(on:boolean,t:number){active=on;root.visible=on;world.setPatioWinter(on);world.umbrella.visible=world.linUmbrella.visible=!on;world.patioSummerProps.forEach(o=>o.visible=!on);world.tableCups.slice(0,2).forEach(o=>o.visible=!on);time.value=t;steamSources.forEach(g=>g.children.forEach((p,i)=>{const f=(t*.22+i/7)%1;p.position.set(Math.sin(f*5+i)*.018,f*.30,Math.cos(f*4+i)*.01);p.scale.set(.45+f,.8+f*1.5,.45+f)}));},diagnostics:()=>({active,inverted:inverted.length,upright:upright.length,tableTopSnow:.06,seatSnow:.055,invertedSeatSnow:0,normalThreshold:.6,minDepositedNormal,deposits,icicles,footprints:patioFootprints.length,footDepth:.025,footStep:.6,logs:6,screenPanels:2,heatDistortion:true,summerVisible:world.patioSummerProps.some(o=>o.visible),summerUmbrellasVisible:world.umbrella.visible||world.linUmbrella.visible})};
}
