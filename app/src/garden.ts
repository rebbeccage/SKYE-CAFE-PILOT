import * as T from 'three';
import {createGardenLawn} from './garden-lawn';
import {createGardenFruit} from './garden-fruit';
import {createGardenBloom} from './garden-bloom';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {materials, type Actor, type buildWorld} from './world';
import {V,material,group,mesh,box,cyl,branch,consolidate} from './winter-geometry';

// Addition to the building’s left when facing its front door (world negative X).
// Neither the original plinth nor its furniture/camera are transformed.
const outline=[[-1.45,5.43],[8.45,5.43],[8.45,9.6],[-1.45,9.6]];
const worldOutline=outline.map(([x,z])=>[z-14.3,3.95-x]);
const floor=.26;
const cream=material(0xefe6d4),sage=material(0xa8b98f,.7),silver=material(0xc9cfc0,.7),hair=material(0xb9b6ac),skin=material(0xf0c9a8,.7),brown=material(0x6b5a4a),soil=material(0x514638),potMat=material(0xb38261,.88),herb=material(0x8b9983),purple=material(0xa29aaf),white=material(0xece9d8),ink=material(0x343a30),snowMat=material(0xe8edf0,.9);
const eyeWhite=material(0xfff9e9),blush=material(0xd9a08c);blush.transparent=true;blush.opacity=.4;
let seed=1487;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
function ell(p:T.Object3D,x:number,y:number,z:number,sx:number,sy:number,sz:number,m:T.Material){const o=mesh(p,new T.SphereGeometry(1,14,10),m,x,y,z);o.scale.set(sx,sy,sz);return o}
function round(p:T.Object3D,w:number,h:number,d:number,x:number,y:number,z:number,m:T.Material,r=.012){return mesh(p,new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/3,h/3,d/3)),m,x,y,z)}
function tube(p:T.Object3D,points:T.Vector3[],radius:number,m:T.Material){return mesh(p,new T.TubeGeometry(new T.CatmullRomCurve3(points),20,radius,5,false),m)}
function ring(p:T.Object3D,r:number,t:number,x:number,y:number,z:number,m:T.Material){const o=mesh(p,new T.TorusGeometry(r,t,6,24),m,x,y,z);o.rotation.x=Math.PI/2;return o}
function closedSlab(parent:T.Object3D,points:number[][],top:number,depth:number,m:T.Material){const shape=new T.Shape();points.forEach(([x,z],i)=>i?shape.lineTo(x,-z):shape.moveTo(x,-z));shape.closePath();const geo=new T.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSegments:1,steps:1,bevelSize:.003,bevelThickness:.003});geo.rotateX(-Math.PI/2);return mesh(parent,geo,m,0,top-depth,0)}
function leaf(parent:T.Object3D,at:T.Vector3,angle:number,length=.16){const g=group(parent,at.x,at.y,at.z);g.rotation.set(.2+Math.sin(angle)*.5,angle,-.45);ell(g,0,0,0,length*.4,.009,length,sage);ell(g,0,-.009,0,length*.39,.005,length*.98,silver);branch(g,V(0,.008,-length*.8),V(0,.008,length*.8),.0025,silver,.001)}
function sprig(parent:T.Object3D,a:T.Vector3,b:T.Vector3,size=1){const c=a.clone().lerp(b,.55).add(V(.08*size,0,.04*size));tube(parent,[a,c,b],.008*size,brown);for(let j=1;j<7;j++){const at=a.clone().lerp(b,j/7);at.x+=Math.sin(j/7*Math.PI)*.08*size;for(const side of [-1,1]){const offset=V(side*.065*size,.014,Math.sin(j)*.04*size);branch(parent,at,at.clone().add(offset),.003*size,brown,.001);leaf(parent,at.clone().add(offset),side*(.9+j*.12),.13*size)}}}
function pot(parent:T.Object3D,x:number,z:number,diameter:number,y=floor,inverted=false){const g=group(parent,x,y,z);const r=diameter/2,h=diameter*.85;if(inverted){g.rotation.x=Math.PI;g.position.y+=h}cyl(g,r,r*.69,h,0,h/2,0,potMat);ring(g,r,.018,0,h-.015,0,potMat);cyl(g,r*.88,r*.88,.012,0,h+.002,0,soil);for(let i=0;i<8;i++){const a=i*.78;ell(g,Math.cos(a)*r,h-.023,Math.sin(a)*r,.027,.008,.009,cream);if(i%2===0)branch(g,V(Math.cos(a)*r*.95,h-.04,Math.sin(a)*r*.95),V(Math.cos(a)*r*.88,h*.55,Math.sin(a)*r*.88),.003,brown)}return {g,h};}
function flower(parent:T.Object3D,x:number,y:number,z:number){ell(parent,x,y,z,.012,.009,.012,materials.brass);for(let k=0;k<6;k++){const a=k*Math.PI/3;ell(parent,x+Math.cos(a)*.02,y,z+Math.sin(a)*.02,.015,.007,.009,white)}}
function groundPatch(parent:T.Object3D,x:number,z:number,rx:number,rz:number,m:T.Material=soil){ell(parent,x,floor+.005,z,rx,.014,rz,m)}

function tang(parent:T.Object3D):Actor{
 const root=group(parent,1.3,floor,7.5);root.name='Tang Yi — eucalyptus gardener';root.rotation.y=-.35;root.userData.dynamic=true;
 const torso=group(root,0,.46,0);torso.rotation.x=.20944;
 round(torso,.38,.4,.26,0,.21,0,sage,.08);round(torso,.34,.39,.028,0,.17,.145,cream,.025);
 round(torso,.19,.12,.025,0,.16,.17,cream,.012);box(torso,.09,.11,.012,.025,.245,.171,materials.wood);
 for(const s of [-1,1]){tube(torso,[V(s*.14,.39,.13),V(s*.15,.44,-.01),V(-s*.13,.08,-.145)],.019,cream);branch(torso,V(s*.17,.38,.14),V(s*.12,.25,.16),.012,cream)}
 const head=group(torso,0,.62,.025);ell(head,0,0,0,.265,.275,.225,hair);ell(head,0,-.008,.065,.227,.234,.203,skin);
 // A round bob, individual curved locks and the right-side wooden clip.
 for(let i=0;i<13;i++){const a=.4+i/12*(Math.PI*2-.8);const x=Math.sin(a)*.23,z=Math.cos(a)*.17;ell(head,x,-.025,z,.065,.235,.075,hair);tube(head,[V(x*.85,.19,z),V(x*1.08,-.05,z+.018),V(x*.88,-.22,z+.05)],.005,silver)}
 for(const side of [-1,1]){ell(head,side*.205,-.035,.075,.034,.057,.029,skin);ell(head,side*.08,.006,.272,.015,.021,.01,ink);ell(head,side*.08-.004,.015,.281,.0045,.006,.003,eyeWhite);for(let j=0;j<2;j++)branch(head,V(side*(.114+j*.025),-.07,.234),V(side*(.131+j*.025),-.065,.235),.005,blush,.004);tube(head,[V(side*.19,.13,.15),V(side*.205,-.015,.17),V(side*.19,-.13,.19)],.008,hair)}
 tube(head,[V(-.033,-.115,.25),V(0,-.127,.255),V(.033,-.112,.25)],.0035,brown);
 const laugh=material(0x6b5a4a);laugh.transparent=true;laugh.opacity=.3;for(const s of [-1,1])branch(head,V(s*.112,.02,.238),V(s*.13,.028,.23),.0015,laugh);branch(head,V(-.025,.125,.23),V(.025,.13,.229),.0015,laugh);
 round(head,.08,.021,.017,.205,.104,.177,brown,.005).rotation.z=.45;
 // Downturned, fully closed brim with concentric straw weave.
 const hat=group(head,0,.235,0);const brim=cyl(hat,.37,.38,.028,0,0,0,cream);brim.scale.z=.9;
 ell(hat,0,.067,0,.245,.11,.217,cream);ring(hat,.238,.018,0,.051,0,sage).scale.z=.9;
 for(let i=0;i<9;i++)ring(hat,.246+i*.014,.002,0,-.006-i*.001,0,materials.lightWood).scale.z=.9;
 tube(hat,[V(-.11,.145,-.025),V(0,.13,-.02),V(.11,.145,-.025)],.006,materials.lightWood);
 ell(hat,.24,.065,.02,.029,.018,.025,sage);for(const sign of [-1,1]){const bow=ell(hat,.245,.064,.02+sign*.043,.012,.027,.046,sage);bow.rotation.x=sign*.45}tube(hat,[V(.24,.06,.02),V(.27,-.01,.07),V(.28,-.075,.09)],.012,sage);
 const armL=group(torso,-.21,.36,.02),armR=group(torso,.21,.36,.02);
 for(const [arm,sign] of [[armL,-1],[armR,1]] as const){branch(arm,V(0,0,0),V(sign*.04,-.16,.03),.066,sage,.06);ring(arm,.063,.012,sign*.04,-.13,.025,cream);branch(arm,V(sign*.04,-.16,.03),V(sign*.065,-.27,.055),.05,skin,.045);ell(arm,sign*.065,-.285,.06,.055,.06,.052,skin)}
 armL.rotation.set(-.85,0,-.18);armR.rotation.set(-.12,0,-.1);
 const legL=group(root,-.105,.45,0),legR=group(root,.105,.45,0);
 for(const [leg,s] of [[legL,-1],[legR,1]] as const){cyl(leg,.07,.063,.32,0,-.16,0,cream);round(leg,.15,.105,.23,0,-.397,.035,brown,.04).rotation.y=s*.16}
 // Woven basket hangs from the right mitten; leaves remain clear of the apron.
 const basket=group(armR,.085,-.48,.07);cyl(basket,.14,.1,.19,0,0,0,materials.lightWood);cyl(basket,.124,.124,.012,0,.097,0,soil);
 for(let i=0;i<9;i++)ring(basket,.104+i*.004,.006,0,-.085+i*.021,0,materials.wood);
 for(let i=0;i<18;i++){const a=i*Math.PI/9;branch(basket,V(Math.cos(a)*.1,-.09,Math.sin(a)*.1),V(Math.cos(a)*.14,.1,Math.sin(a)*.14),.005,materials.darkWood)}
 tube(basket,[V(-.13,.08,0),V(-.1,.25,0),V(.1,.25,0),V(.13,.08,0)],.012,materials.wood);
 for(let i=0;i<3;i++)sprig(basket,V(-.07+i*.06,.06,0),V(-.1+i*.1,.36+i*.025,.02),.5);
 for(let i=0;i<4;i++){branch(basket,V(.05,.07,0),V(.05+i*.02,.22+i*.022,.1),.003,herb);flower(basket,.05+i*.02,.22+i*.022,.1)}
 [torso,legL,legR].forEach(g=>{ /* Character parts stay independently posed. */ g.traverse(o=>{if(o instanceof T.Mesh)o.castShadow=true})});
 // Consolidate each articulation, preserving the hat/face and the tiny gestures.
 for(const part of [head,armL,armR,legL,legR])consolidate(part);
 // Only the static torso's direct meshes; do not merge its articulated children.
 root.traverse(o=>{if(o instanceof T.Mesh)o.castShadow=true});
 return {root,head,armL,armR,legL,legR,role:'garden-tang',phase:1,base:root.position.clone()};
}

export function createGarden(scene:T.Scene,world:ReturnType<typeof buildWorld>){
 const root=group(scene);root.name='Left courtyard garden extension';const fixed=group(root),winter=group(root),lights=group(root);
 closedSlab(fixed,outline,.18,.14,materials.stone);closedSlab(fixed,outline,.225,.045,materials.tile);
 // The perimeter is closed, with masonry bed joints on every exposed edge.
 for(let i=0;i<outline.length;i++){const [x,z]=outline[i], [xx,zz]=outline[(i+1)%outline.length];const length=Math.hypot(xx-x,zz-z),count=Math.ceil(length/.8);for(let n=0;n<count;n++)for(let row=0;row<1;row++){const f=(n+.5)/count;const block=round(fixed,length/count-.018,.12,.075,x+(xx-x)*f,.12+row*.29,z+(zz-z)*f,materials.stone,.003);block.rotation.y=-Math.atan2(zz-z,xx-x)}}
 // Closed stone slab/coping retained; only its interior top becomes living turf.
 const lawn=createGardenLawn(root);
 const fruit=createGardenFruit(root);
 const bloom=createGardenBloom(root);
 // Keep the established herb placement RNG after removing the old seam/gravel.
 for(let i=0;i<2520;i++)rand();
 const plants=[{x:-.1,z:6.2,h:1.65,pot:0},{x:3,z:8.65,h:1.85,pot:0},{x:3.1,z:5.95,h:1.5,pot:0},{x:5.75,z:6.65,h:1.45,pot:.3},{x:-.95,z:7.6,h:1.7,pot:.45}];
 for(const [index,p] of plants.entries()){const g=group(fixed,p.x,floor,p.z),base=p.pot?pot(g,0,0,p.pot,0).h:0;groundPatch(fixed,p.x,p.z,p.pot?.17:.35,p.pot?.17:.3);for(let k=0;k<4;k++){const a=k*2.1+index;const end=V(Math.cos(a)*.29,base+p.h,Math.sin(a)*.25);sprig(g,V(0,base,0),end,1.2);for(let j=0;j<3;j++){const start=end.clone().multiplyScalar(.35+j*.17);start.y+=base*.3;const tip=start.clone().add(V(Math.cos(a+j)*.22,.27,Math.sin(a+j)*.22));sprig(g,start,tip,.7)}}if(p.pot)for(let k=0;k<4;k++){const a=k*1.57;const shard=box(g,.06,.012,.04,Math.cos(a)*p.pot*.48,.015,Math.sin(a)*p.pot*.48,potMat);shard.rotation.y=a}}
 // Open foreground around Tang Yi; companion herbs sit along the outer border.
 for(let i=0;i<22;i++){const x=i<12?-.25+rand()*.3:2.7+rand()*.55,z=i<12?5.9+rand()*2.4:7.65+rand()*1.45;for(let j=0;j<6;j++){const xx=x+(rand()-.5)*.2,zz=z+(rand()-.5)*.2,h=.2+rand()*.15;branch(fixed,V(xx,floor,zz),V(xx+.025,floor+h,zz),.004,herb,.002);for(let k=0;k<3;k++)ell(fixed,xx-.015+k*.015,floor+h*(.4+k*.2),zz,.04,.01,.018,herb);if(i%3===0)ell(fixed,xx,floor+h,zz,.022,.045,.02,purple);else if(i%3===1)flower(fixed,xx,floor+h,zz)}}
 for(const [x,z] of [[6.55,5.95],[1.5,9.13]]){const g=group(fixed,x,floor,z);round(g,1.05,.26,.35,0,.16,0,potMat);box(g,.94,.02,.29,0,.3,0,soil);for(const xx of [-.52,.52])box(g,.045,.34,.4,xx,.17,0,materials.wood);for(const zz of [-.19,.19]){box(g,1.08,.07,.035,0,.3,zz,materials.lightWood);box(g,1.08,.07,.035,0,.08,zz,materials.lightWood)}for(let i=0;i<8;i++){const xx=-.4+i*.11;branch(g,V(xx,.3,0),V(xx,.5,0),.005,herb);leaf(g,V(xx,.43,0),i,.075)}}
 const table=group(fixed,3.02,floor,7.05);round(table,.6,.045,.4,0,.68,0,materials.lightWood,.012);for(const x of [-.24,.24])for(const z of [-.14,.14])branch(table,V(x,.65,z),V(x,.015,z),.024,materials.wood);
 const can=group(table,-.13,.705,.015);cyl(can,.075,.085,.15,0,.075,0,materials.brass);ring(can,.07,.009,0,.15,0,materials.brass);tube(can,[V(.06,.1,0),V(.17,.11,0),V(.23,.24,0)],.012,materials.brass);tube(can,[V(-.07,.13,0),V(-.14,.17,0),V(-.15,.02,0),V(-.08,.02,0)],.01,materials.brass);
 const rack=group(table,.1,.705,-.12);box(rack,.24,.04,.07,0,.02,0,materials.wood);for(let i=0;i<3;i++){const p=box(rack,.066,.13,.01,-.075+i*.075,.085,0,cream);p.rotation.z=(i-1)*.08;leaf(rack,V(-.075+i*.075,.1,.009),0,.018)}
 pot(table,.2,.1,.1,.705);for(let i=0;i<6;i++)ell(table,.2+Math.sin(i)*.03,.81,.1+Math.cos(i)*.03,.025,.025,.012,sage);
 for(const s of [-1,1]){ring(table,.022,.004,s*.028,.712,.11,materials.brassDark);branch(table,V(s*.026,.716,.09),V(-s*.018,.716,-.01),.004,materials.frameEdge)}
 for(const [x,isRake] of [[-.38,0],[.38,1]]){const tool=group(table,x,.03,.12);tool.rotation.z=x<0?-.25:.25;branch(tool,V(0,.12,0),V(0,.81,0),.012,materials.wood);if(isRake){box(tool,.16,.025,.03,0,.12,0,materials.frame);for(let i=0;i<5;i++)branch(tool,V(-.07+i*.035,.12,0),V(-.07+i*.035,.02,.03),.006,materials.frame)}else{ell(tool,0,.09,0,.065,.09,.012,materials.frame);ring(tool,.04,.008,0,.81,0,materials.wood).rotation.x=0}}
 groundPatch(fixed,2.5,7.22,.16,.13);pot(fixed,2.5,7.6,.24,floor,true);
 // Quiet cat at the gardener's feet; no face texture or billboard geometry.
 const cat=group(fixed,1.87,floor,7.72),orange=material(0xbd9169),catCream=material(0xece3d3);ell(cat,0,.105,0,.21,.105,.135,orange);ell(cat,-.12,.21,.04,.105,.1,.092,catCream);for(const x of [-.18,-.07]){const ear=mesh(cat,new T.ConeGeometry(.041,.085,4),orange,x,.306,.01);ear.rotation.z=x<-.1?.2:-.2}for(const x of [-.153,-.09])ell(cat,x,.22,.124,.009,.009,.004,materials.greenDark);tube(cat,[V(.17,.1,-.05),V(.23,.05,.1),V(.05,.04,.17),V(-.1,.04,.13)],.035,orange);for(let i=0;i<3;i++)tube(cat,[V(-.025+i*.07,.2,-.06),V(-.015+i*.07,.21,0),V(i*.07,.18,.075)],.012,brown);ring(cat,.075,.009,-.12,.14,.04,sage);ell(cat,-.12,.13,.13,.013,.016,.013,materials.brass);pot(fixed,.8,7.85,.21,floor,true);
 const post=group(fixed,6.9,floor,6.9);cyl(post,.035,.045,1.8,0,.9,0,materials.wood);const wire=material(0x695646,.6,.5),led=new T.MeshStandardMaterial({color:0xffe8b4,emissive:0xffd092,emissiveIntensity:4.5,roughness:.5});
 const points:T.Vector3[]=[];for(let i=0;i<=70;i++){const a=i*.54,y=.18+i/70*1.55;points.push(V(6.9+Math.cos(a)*.055,floor+y,6.9+Math.sin(a)*.055));if(i%3===0)ell(lights,points[i].x,points[i].y,points[i].z,.008,.008,.008,i%7===0?cream:led)}tube(fixed,points,.002,wire);
 const swag=new T.CatmullRomCurve3([V(6.9,2.02,6.9),V(5.6,1.6,6.98),V(4.2,1.96,7.15)]);tube(fixed,swag.getPoints(30),.002,wire);for(let i=0;i<32;i++){const p=swag.getPoint(i/31);ell(lights,p.x,p.y,p.z,.008,.008,.008,i%7===0?cream:led)}branch(fixed,V(4.2,floor,7.15),V(4.2,1.96,7.15),.025,materials.wood);
 const bollard=group(fixed,.05,floor,5.65);cyl(bollard,.06,.075,.32,0,.16,0,materials.brass);cyl(bollard,.055,.055,.12,0,.37,0,material(0xe5e6d8,.5));cyl(bollard,.074,.074,.025,0,.44,0,materials.brass);
 // Snow on pot rims only here; the lawn owns its thin, grass-visible winter layer.
 for(const p of plants)if(p.pot)ring(winter,p.pot/2,.018,p.x,floor+p.pot*.85+.016,p.z,snowMat);
 world.actors[2].root.removeFromParent();const actor=tang(root);world.actors[2]=actor;
 // A branch at the left mitten makes the tending gesture physically connected.
 actor.root.updateWorldMatrix(true,true);const hand=actor.armL.localToWorld(V(-.065,-.285,.06));sprig(fixed,V(.67,floor,7.23),hand,.9);
 for(const part of [fixed,winter,lights]){consolidate(part);part.traverse(o=>{if(o instanceof T.Mesh)o.castShadow=true})}winter.visible=false;lights.visible=false;
 root.rotation.y=Math.PI/2;root.position.set(-14.3,0,3.95);root.updateWorldMatrix(true,true);
 const bounds=new T.Box3().setFromObject(root),labelAnchor=V(0,0,0);
 for(const h of fruit.hotspots)h.mesh.getWorldPosition(h.point);
 return {root,actor,hotspots:fruit.hotspots,setCultivation:fruit.setCultivation,outline:worldOutline,bounds,labelAnchor,update(t:number,snow:boolean,night:boolean,rain=false){lawn.update(t,snow?'snow':rain?'rain':'sun');fruit.update(snow,rain);bloom.update(t,snow,rain);winter.visible=snow;lights.visible=snow||night;actor.head.rotation.y=Math.sin(t*.27)*.035;actor.head.rotation.z=Math.sin(t*.35)*.018;actor.root.updateWorldMatrix(true,true);actor.head.getWorldPosition(labelAnchor);labelAnchor.y+=.89;},diagnostics:()=>({side:'building-left-negative-x',lawn:lawn.diagnostics(),bloom:bloom.diagnostics(),fruit:fruit.diagnostics(),outline:worldOutline,combinedFootprint:[[-8.87,-4.5],[5.6,-4.5],[5.6,5.4],[-8.87,5.4]],joinWidth:0,plantCount:plants.length,groundPlants:3,pottedPlants:2,position:actor.root.getWorldPosition(V(0,0,0)).toArray(),height:new T.Box3().setFromObject(actor.root).getSize(V(0,0,0)).y,winter:winter.visible,bounds:{min:bounds.min.toArray(),max:bounds.max.toArray()}})};
}
