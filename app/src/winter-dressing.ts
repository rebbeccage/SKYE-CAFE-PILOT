import * as T from 'three';
import {createWinterPatio} from './winter-patio';
import type {buildWorld} from './world';
import {V,material,group,mesh,box,ball,cyl,branch,pine,consolidate} from './winter-geometry';
export function createWinterDressing(scene:T.Scene,world:ReturnType<typeof buildWorld>,snow:T.Material){
 const root=group(scene);root.visible=false;
 const bark=material(0x6b5a4a),lichen=material(0xa3aa94),fir=material(0x40574b),brass=material(0xbfa46a,.35,.65),copper=material(0x9f6847,.4,.65),cream=material(0xe8e0d0),sage=material(0xa8b296),wire=material(0x443d32),kraft=material(0xbfa381),twine=material(0xd5c3a1),bow=material(0x8c2f39,.58);
 const led=new T.MeshStandardMaterial({color:0xffdcac,emissive:0xffce8b,emissiveIntensity:5,roughness:.6});
 led.userData.winterGlow=true;const dim=led.clone();dim.emissiveIntensity=.35;
 // A small 3D optical halo keeps an 8 mm LED legible at miniature viewing distance.
 const halo=new T.MeshBasicMaterial({color:0xffd5a0,transparent:true,opacity:.28,blending:T.AdditiveBlending,depthWrite:false});halo.userData.winterGlow=true;
 const props:Record<string,T.Group>={};const names:Record<string,string>={lights:'暖白灯串',wreath:'冷杉门环',star:'黄铜星星',wine:'暖饮铜壶台',gifts:'牛皮纸礼物',crate:'松枝木箱',sign:'冬日立式菜单',mat:'椰棕脚垫',blankets:'两条羊毛毯'};
 for(const id of Object.keys(names))props[id]=group(root);
 const skeleton=group(root),branchLines:{a:T.Vector3,b:T.Vector3}[]=[];
 for(const [x,z,s] of [[-4.1,-1.4,1.08],[4.15,-2.7,1.02],[-3.8,-3.3,.82],[-3.5,4.6,.7]]){
  const tree=group(skeleton,x,.33,z);branch(tree,V(0,0,0),V(.05,1.65*s,0),.06*s,bark,.04*s);
  const grow=(a:T.Vector3,dir:T.Vector3,len:number,depth:number,seed:number)=>{const b=a.clone().addScaledVector(dir,len);branch(tree,a,b,Math.max(.004,.038*s*Math.pow(.55,4-depth)),bark,Math.max(.003,.022*s*Math.pow(.55,4-depth)));if(depth>=3)branchLines.push({a:a.clone().add(V(x,.33,z)),b:b.clone().add(V(x,.33,z))});if(depth===0)return;for(let k=0;k<3;k++){const angle=seed+k*2.094;grow(b,V(dir.x*.4+Math.cos(angle)*.6,.65,dir.z*.4+Math.sin(angle)*.6).normalize(),len*.58,depth-1,seed+k*1.7+.6)}};
  for(let k=0;k<5;k++)grow(V(0,1.15*s,0),V(Math.cos(k*1.256)*.6,.8,Math.sin(k*1.256)*.6).normalize(),.78*s,4,k*1.9);
  for(let i=0;i<10;i++){const a=i*2.4;const fleck=ball(tree,.018,Math.cos(a)*.06,.25+i*.115,Math.sin(a)*.06,lichen);fleck.scale.set(1,1.8,.35)}
 }
 const spruce=group(root);
 for(const [x,z] of [[-2.6,2.65],[.7,2.65]]){const g=group(spruce,x,.26,z);cyl(g,.08,.1,.2,0,.1,0,bark);branch(g,V(0,0,0),V(0,1.4,0),.035,bark,.008);for(let tier=0;tier<6;tier++){const y=.25+tier*.19,r=.4*(1-tier/7);for(let k=0;k<7;k++){const a=k*Math.PI*2/7+tier*.5;const end=V(Math.cos(a)*r,y-.045,Math.sin(a)*r);pine(g,V(0,y,0),end,fir,bark);const cap=mesh(g,new T.SphereGeometry(1,8,5),snow,end.x*.65,y+.025,end.z*.65);cap.scale.set(r*.45,.035,r*.2);cap.rotation.y=-a}}}
 // Catenary swags and 9 cm-spaced physical LED beads, 15% intentionally dim.
 const probePositions:T.Vector3[]=[];let beadCount=0,dimCount=0;
 function strand(points:T.Vector3[]){const curve=new T.CatmullRomCurve3(points),length=curve.getLength();mesh(props.lights,new T.TubeGeometry(curve,Math.max(8,Math.ceil(length*12)),.002,4,false),wire);const n=Math.ceil(length/.09);for(let i=0;i<=n;i++){const p=curve.getPointAt(i/n),dark=beadCount%20<3;ball(props.lights,.004,p.x,p.y,p.z,dark?dim:led);if(!dark)ball(props.lights,.014,p.x,p.y,p.z,halo);if(dark)dimCount++;beadCount++}}
 for(let bay=0;bay<3;bay++){const x=-2.7+bay*1.8;strand([V(x,3.23,2.19),V(x+.45,3.08,2.2),V(x+.9,2.98,2.2),V(x+1.35,3.08,2.2),V(x+1.8,3.23,2.19)])}
 for(const x of [-1.65,-.57])strand([V(x,2.88,2.2),V(x+.025,2.1,2.22),V(x,1.5,2.2),V(x,.9,2.21)]);
 const loop=Array.from({length:33},(_,i)=>{const a=i/32*Math.PI*2;return V(-1.9+Math.cos(a)*.145,5.05+Math.sin(a)*.04,-2.37+Math.sin(a)*.145)});strand(loop);
 for(const {a,b} of branchLines.filter((_,i)=>i%4===0)){const dir=b.clone().sub(a).normalize(),u=new T.Vector3().crossVectors(dir,V(0,1,0)).normalize(),v=new T.Vector3().crossVectors(dir,u);strand(Array.from({length:25},(_,i)=>{const f=i/24,angle=f*a.distanceTo(b)/(.05*Math.tan(T.MathUtils.degToRad(25)))*Math.PI*2;return a.clone().lerp(b,f).addScaledVector(u,Math.cos(angle)*.024).addScaledVector(v,Math.sin(angle)*.024)}))}
 for(const p of [V(-1.6,1.1,2.35),V(-.5,1.1,2.35),V(-3.8,1.6,4.6),V(3.9,1.7,-2.6)]){probePositions.push(p);const l=new T.PointLight(0xffd6a1,.18,.8,2);l.position.copy(p);props.lights.add(l)}
 // Door-mounted wreath follows the actual hinge, without altering the door mesh.
 const wreath=props.wreath;wreath.position.set(-1.08,2.34,2.23);
 mesh(wreath,new T.TorusGeometry(.19,.028,8,32),fir);for(let i=0;i<22;i++){const a=i*Math.PI*2/22;pine(wreath,V(Math.cos(a)*.18,Math.sin(a)*.18,0),V(Math.cos(a+.2)*.23,Math.sin(a+.2)*.23,.015),fir,bark);if(Math.sin(a)>.45){const cap=ball(wreath,.04,Math.cos(a)*.19,Math.sin(a)*.19+.018,.015,snow);cap.scale.set(1,.5,.8)}}
 const bowGroup=group(wreath,.12,-.13,.06);for(const side of [-1,1]){const l=ball(bowGroup,.045,side*.032,0,0,bow);l.scale.set(1,.6,.35)}for(const side of [-1,1]){const ribbon=box(bowGroup,.024,.075,.008,side*.015,-.045,0,bow);ribbon.rotation.z=side*.25}mesh(wreath,new T.TorusGeometry(.055,.008,6,20),brass,0,-.04,-.035);
 const star=props.star;star.position.set(-2.6,1.78,2.65);const starShape=new T.Shape();for(let i=0;i<10;i++){const a=i*Math.PI/5+Math.PI/2,r=i%2?.045:.1;if(i===0)starShape.moveTo(Math.cos(a)*r,Math.sin(a)*r);else starShape.lineTo(Math.cos(a)*r,Math.sin(a)*r)}starShape.closePath();const hole=new T.Path();hole.absarc(0,0,.025,0,Math.PI*2,true);starShape.holes.push(hole);mesh(star,new T.ExtrudeGeometry(starShape,{depth:.012,bevelEnabled:false}),brass);const core=ball(star,.025,0,0,.009,led.clone());core.userData.animated=true;for(let k=0;k<4;k++){const ray=box(star,.004,.12,.004,0,0,.015,led);ray.rotation.z=k*Math.PI/2;ray.scale.y=.65}
 const wine=props.wine;wine.position.set(1.7,.26,3.6);box(wine,.72,.08,.43,0,.67,0,bark);for(const x of [-.3,.3])for(const z of [-.15,.15])branch(wine,V(x,0,z),V(x,.67,z),.018,wire);cyl(wine,.15,.19,.35,-.1,.88,0,copper);cyl(wine,.17,.17,.025,-.1,1.065,0,brass);ball(wine,.028,-.1,1.1,0,brass);branch(wine,V(-.1,.78,.1),V(-.1,.78,.25),.015,brass);for(let i=0;i<3;i++){cyl(wine,.046,.039,.09,.17+i*.085,.755,.05,cream);mesh(wine,new T.TorusGeometry(.025,.006,6,12),brass,.225+i*.085,.76,.05)}
 const gifts=props.gifts;gifts.position.set(1.85,.26,2.7);for(const [x,y,z,w,h,d] of [[0,.13,0,.55,.26,.4],[.04,.37,0,.4,.22,.33],[-.3,.09,.19,.24,.18,.22]]){box(gifts,w,h,d,x,y,z,kraft);box(gifts,.012,h+.004,d+.004,x,y,z,twine);box(gifts,w+.004,.012,d+.004,x,y+h*.2,z,twine)}pine(gifts,V(-.15,.49,0),V(.15,.52,.1),fir,bark);
 const crate=props.crate;crate.position.set(-3.65,.26,2.8);box(crate,.7,.04,.45,0,.02,0,bark);for(const z of [-.22,.22])for(let i=0;i<3;i++)box(crate,.7,.07,.025,0,.09+i*.085,z,kraft);for(const x of [-.34,.34])box(crate,.025,.3,.45,x,.17,0,kraft);for(let i=0;i<5;i++)pine(crate,V(-.25+i*.1,.25,-.1),V(-.2+i*.1,.5,.17),fir,bark);for(let i=0;i<10;i++){const cone=group(crate,-.25+(i%5)*.12,.32+Math.floor(i/5)*.04,-.1+(i%2)*.15);for(let j=0;j<5;j++)for(let k=0;k<5;k++){const a=k*1.256+j*.5;const scale=ball(cone,.018,Math.cos(a)*.025,j*.018,Math.sin(a)*.025,copper);scale.scale.set(1,.7,1)}}
 const sign=props.sign;sign.position.copy(world.sign.position);for(const side of [-1,1]){const panel=group(sign,0,.84,side*.16);panel.rotation.x=side*.12;box(panel,.81,1.02,.08,0,0,0,kraft);box(panel,.7,.9,.085,0,0,0,wire);const canvas=document.createElement('canvas');canvas.width=512;canvas.height=512;const ctx=canvas.getContext('2d')!;ctx.fillStyle='#3d443d';ctx.fillRect(0,0,512,512);ctx.fillStyle='#e9e3d3';ctx.textAlign='center';ctx.font='42px Georgia';ctx.fillText('Winter Menu',256,135);ctx.font='22px Georgia';ctx.fillText('COFFEE  ·  WARM SPICES',256,250);ctx.fillText('Come in, warm up.',256,350);const tex=new T.CanvasTexture(canvas);tex.colorSpace=T.SRGBColorSpace;const label=mesh(panel,new T.PlaneGeometry(.67,.84),new T.MeshStandardMaterial({map:tex,roughness:1}),0,0,side*.048);if(side<0)label.rotation.y=Math.PI}
 for(const x of [-.36,.36])for(const z of [-.35,.35])branch(sign,V(x,.02,z),V(x,1.4,0),.027,bark);box(sign,.86,.04,.11,0,1.42,0,snow);
 const mat=props.mat;mat.position.set(-.65,.854,2.38);box(mat,1,.025,.38,0,.012,0,kraft);for(let i=0;i<25;i++)branch(mat,V(-.47+i*.039,.028,-.17),V(-.47+i*.039,.028,.17),.004,bark);for(const x of [-.17,.16]){const print=mesh(mat,new T.CircleGeometry(.065,12),material(0x6e675b,.7),x,.032,0);print.rotation.x=-Math.PI/2;print.scale.y=1.7}
 const patio=createWinterPatio(root,world,snow,props.blankets);
 const movables:Record<string,number[][]>={wine:[[1.7,.26,3.6],[2.25,.26,4.05],[1.3,.26,-3.5]],gifts:[[1.85,.26,2.7],[2.55,.26,4.1],[-3.6,.26,-3.6]],crate:[[-3.65,.26,2.8],[-3.4,.26,.2],[.5,.26,-3.8]],sign:[[-2.15,.26,3.85],[-3.1,.26,3.6],[-4.1,.26,.2]]};
 const settings:Record<string,{placed:boolean,slot:number}>={};
 // Free winter dressing is automatic; ignore obsolete opt-out/layout preferences.
 for(const id of Object.keys(names)){settings[id]={placed:true,slot:0};if(movables[id])props[id].position.fromArray(movables[id][0]);props[id].visible=true}
 // Merge each independently movable prop in its own local coordinates.
 [skeleton,spruce,...Object.values(props)].forEach(consolidate);
 const steam=group(wine, -.1,1.11,0);const steamMat=new T.MeshBasicMaterial({color:0xffefd7,transparent:true,opacity:.14,depthWrite:false});for(let i=0;i<6;i++){const puff=ball(steam,.025,0,i*.03,0,steamMat);puff.scale.y=2}
 let active=false;
 return {root,patio,probePositions,props,settings,core,beadCount,dimCount,items:()=>Object.entries(names).map(([id,name])=>({id,name,...settings[id],movable:false})),update(on:boolean,t:number){active=on;root.visible=on;patio.update(on,t);world.door.updateWorldMatrix(true,false);wreath.position.copy(world.door.localToWorld(V(.52,1.49,.085)));world.door.getWorldQuaternion(wreath.quaternion);world.sign.visible=!on;world.patioChairs.forEach(c=>c.visible=!on);world.seasonalFoliage.forEach(m=>m.visible=!on);(core.material as T.MeshStandardMaterial).emissiveIntensity=4+Math.sin(t*Math.PI*2);steam.children.forEach((p,i)=>{const f=(t*.3+i/6)%1;p.position.set(Math.sin(f*5+i)*.025,f*.35,0);p.scale.setScalar(.5+f)});},get active(){return active}};
}
