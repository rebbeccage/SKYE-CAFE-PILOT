import * as T from 'three';
import {V,group,mesh,box,ball,cyl,branch,material,consolidate} from './winter-geometry';
import type {Obstacle} from './player-collision';
type Weather='sun'|'rain'|'snow';
/** Visual addition only: world layout, original door, windows and roof are retained. */
export function createFrenchExterior(scene:T.Scene,initial:Weather){
 const root=group(scene);root.name='French greenhouse exterior accents';
 const fixed=group(root),winter=group(root),flowers=group(root),awning=group(root);awning.name='Retractable striped canvas';
 const cream=material('#E9E0CD'),iron=material('#405548'),brass=material('#B49B65',.68,.45),stone=material('#DDD3C0'),wood=material('#B49C7A'),leaf=material('#94A68A'),pink=material('#CCAAA9'),purple=material('#B2A9BF'),white=material('#ECE8DB'),snow=material('#DDE3E2');
 const breeze={value:0},sway={value:initial==='snow'?.15:initial==='rain'?.35:1};
 for(const m of [leaf,pink,purple,white])m.onBeforeCompile=shader=>{shader.uniforms.breeze=breeze;shader.uniforms.sway=sway;shader.vertexShader='uniform float breeze;uniform float sway;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\n transformed.x += sin(breeze*.65 + position.z*2.1)*.012*sway*smoothstep(2.86,3.12,position.y);');};
 const warm=[cream,iron,brass,stone,wood,leaf,pink,purple,white],base=warm.map(m=>m.color.clone());
 // Fine glazing beads share the existing green structure. No additional glass planes.
 for(const z of [2.145,-2.815])for(const x of [-2.75,-1.65,-.55,.55,1.65,2.75]){
  if(z>0&&x===-.55)continue;
  box(fixed,.018,2.15,.018,x+.047,1.99,z,cream);
  for(const y of [1.12,2.82]){box(fixed,.065,.09,.016,x,y,z+.012,brass);ball(fixed,.011,x,y,z+.024,iron)}
 }
 for(const x of [-2.796,2.796])for(let i=0;i<6;i++){const z=-2.77+i*.974;box(fixed,.018,2.17,.018,x,1.99,z+.045,cream);box(fixed,.014,.06,.09,x,1.83,z,brass)}
 // A low, half-buried edging reuses the existing base level, never crosses steps.
 for(const x of [-2.87,2.87])for(let i=0;i<7;i++)box(fixed,.065,.12,.61,x,.29,-2.37+i*.67,stone);
 for(const x of [-2.42, .30,1,1.7,2.4])box(fixed,.60,.12,.065,x,.29,2.21,stone);
 // One small oval plaque beside the door, with a cup motif rather than competing text.
 const plaque=group(fixed,-1.95,2.45,2.19);const oval=ball(plaque,1,0,0,0,cream);oval.scale.set(.20,.13,.018);
 const trim=mesh(plaque,new T.TorusGeometry(1,.025,5,32),brass);trim.scale.set(.194,.124,.018);
 cyl(plaque,.047,.037,.065,0,-.008,.029,iron);const handle=mesh(plaque,new T.TorusGeometry(.025,.006,5,12),iron,.052,-.008,.033);handle.rotation.x=.12;
 // Narrow ridge crest: spans existing ridge, away from the chimney.
 branch(fixed,V(0,4.64,-2.5),V(0,4.64,1.87),.014,iron,.014);
 for(let i=0;i<12;i++){const z=-2.4+i*.37;branch(fixed,V(0,4.59,z),V(0,4.76,z),.010,iron,.006);const arc=mesh(fixed,new T.TorusGeometry(.09,.008,5,12,Math.PI),iron,0,4.67,z+.16);arc.rotation.y=Math.PI/2;}
 branch(fixed,V(0,4.64,-.35),V(0,5.04,-.35),.016,brass,.009);ball(fixed,.043,0,4.99,-.35,brass);
 branch(fixed,V(-.27,4.93,-.35),V(.27,4.93,-.35),.009,brass,.009);
 const arrow=mesh(fixed,new T.ConeGeometry(.045,.12,3),brass,.29,4.93,-.35);arrow.rotation.z=-Math.PI/2;
 // Two small boxes fixed against side frames; canopy, door and sign stay clear.
 for(const [x,z] of [[-2.85,-1.85],[2.85,.45]]){
  const g=group(flowers,x,2.76,z);box(g,.25,.16,.65,0,0,0,wood);box(g,.22,.02,.59,0,.09,0,iron);
  for(let i=0;i<9;i++){const a=i*2.39,xx=Math.sin(a)*.12,zz=Math.cos(a)*.25,h=.16+(i%3)*.055;branch(g,V(xx,.08,zz),V(xx+.025,.08+h,zz),.005,leaf,.003);const l=ball(g,.07,xx,.16,zz,leaf);l.scale.set(1,.28,.6);for(let k=0;k<5;k++){const b=k*1.256;const f=ball(g,.033,xx+.025+Math.cos(b)*.036,.08+h,zz+Math.sin(b)*.036,[white,pink,purple][i%3]);f.scale.y=.45;}ball(g,.016,xx+.025,.09+h,zz,cream);}
  // Short local trailing foliage, not a curtain over the window.
  for(let i=0;i<5;i++){const yy=-.07-i*.055;branch(g,V(.06,yy, .22),V(.07,yy-.055,.22),.004,leaf,.003);const l=ball(g,.045,.07,yy-.04,.22+(i%2?.035:-.035),leaf);l.scale.y=.4;}
 }
 branch(winter,V(0,4.666,-2.5),V(0,4.666,1.87),.025,snow,.025);
 for(const x of [-2.75,2.75])box(winter,.09,.024,4.90,x,3.246,-.335,snow);
 consolidate(fixed);consolidate(winter);consolidate(flowers);
 // Stripes are vertex colours, no extra texture, glass layer or alpha stacking.
 const width=4.2,center=-.1,wallZ=2.18,wallY=3.145,depth=1.22,bands=42,rows=16;
 const positions:number[]=[],colors:number[]=[],indices:number[]=[];
 const c0=new T.Color('#F3E8D2'),c1=new T.Color('#9BA98C');
 for(let band=0;band<bands;band++)for(let side=0;side<2;side++)for(let row=0;row<=rows;row++){
  positions.push(0,0,0);const c=(band%2?c1:c0).clone().multiplyScalar(.97+.03*Math.sin(band*3.1+row*.6));colors.push(c.r,c.g,c.b);
 }
 for(let band=0;band<bands;band++)for(let j=0;j<rows;j++){const a=band*2*(rows+1)+j,b=a+rows+1;indices.push(a,b,a+1,b,b+1,a+1)}
 const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));geo.setIndex(indices);
 const canvasMat=new T.MeshStandardMaterial({vertexColors:true,roughness:.94,side:T.DoubleSide,color:0xffffff});const canvas=mesh(awning,geo,canvasMat);canvas.castShadow=true;
 const vp:number[]=[],vc:number[]=[],vi:number[]=[];
 for(let b=0;b<bands;b++)for(let j=0;j<=4;j++)for(let edge=0;edge<2;edge++){vp.push(0,0,0);const c=b%2?c1:c0;vc.push(c.r,c.g,c.b)}
 for(let b=0;b<bands;b++)for(let j=0;j<4;j++){const a=b*10+j*2;vi.push(a,a+2,a+1,a+1,a+2,a+3)}
 const vg=new T.BufferGeometry();vg.setAttribute('position',new T.Float32BufferAttribute(vp,3));vg.setAttribute('color',new T.Float32BufferAttribute(vc,3));vg.setIndex(vi);mesh(awning,vg,canvasMat);
 const roll=cyl(awning,.07,.07,width+.12,center,wallY+.015,wallZ,cream);roll.rotation.z=Math.PI/2;
 const front=branch(awning,V(center-width/2,wallY-.43,wallZ+depth),V(center+width/2,wallY-.43,wallZ+depth),.019,brass,.019);
 const arms:T.Mesh[]=[];for(const side of [-1,1]){const x=center+side*(width/2-.12);box(fixed,.09,.22,.07,x,3.02,2.16,iron);for(let j=0;j<2;j++)arms.push(mesh(awning,new T.CylinderGeometry(.012,.016,1,6),brass));}
 const dropGeo=new T.BufferGeometry(),dropPos=new Float32Array(24*6);dropGeo.setAttribute('position',new T.BufferAttribute(dropPos,3));const drops=new T.LineSegments(dropGeo,new T.LineBasicMaterial({color:'#BACAC8',transparent:true,opacity:.38,depthWrite:false}));awning.add(drops);
 let weather:Weather=initial,start=initial==='snow'?0:1,open=start,target=start,elapsed=1.5;
 const collision:Obstacle={x:center,z:wallZ+depth/2,halfX:width/2,halfZ:depth/2,bottom:2.59,top:3.23,name:'入口雨棚（头顶）'};
 function pose(t:number){
  const p=geo.attributes.position as T.BufferAttribute,wind=(weather==='snow'?.001:weather==='rain'?.002:.006)*open;
  for(let b=0;b<bands;b++)for(let side=0;side<2;side++)for(let j=0;j<=rows;j++){const u=(b+side)/bands,v=j/rows,x=center+(u-.5)*width;const sag=Math.sin(v*Math.PI)*.045*open;const y=wallY-.43*open*v-sag+Math.sin(u*19+t*.7)*wind*v*v,z=wallZ+.045*v+depth*open*v;
   p.setXYZ(b*2*(rows+1)+side*(rows+1)+j,x,y,z);
  }
  p.needsUpdate=true;geo.computeVertexNormals();geo.computeBoundingSphere();
  const vpos=vg.attributes.position as T.BufferAttribute;
  for(let b=0;b<bands;b++)for(let j=0;j<=4;j++)for(let e=0;e<2;e++){const u=(b+j/4)/bands,x=center+(u-.5)*width,wave=Math.sin(u*19+t*.7)*wind;vpos.setXYZ(b*10+j*2+e,x,wallY-.43*open+wave-e*(.085+.035*Math.sin(u*21*Math.PI)**2)*( .25+.75*open),wallZ+.045+depth*open+.008);}
  vpos.needsUpdate=true;vg.computeVertexNormals();vg.computeBoundingSphere();
  front.position.set(center,wallY-.43*open,wallZ+.045+depth*open);roll.rotation.x=-open*5.2;
  for(let i=0;i<2;i++){const x=center+(i?1:-1)*(width/2-.12),a=V(x,3.07,wallZ),c=V(x,wallY-.43*open,wallZ+.045+depth*open),mid=a.clone().lerp(c,.5);mid.x+=(i?1:-1)*Math.sqrt(Math.max(0,.67**2-a.distanceTo(c)**2/4));for(let j=0;j<2;j++){const aa=j?mid:a,bb=j?c:mid,m=arms[i*2+j];m.position.copy(aa).add(bb).multiplyScalar(.5);m.scale.y=aa.distanceTo(bb);m.quaternion.setFromUnitVectors(V(0,1,0),bb.clone().sub(aa).normalize());}}
 }
 function setWeather(next:Weather,immediate=false){weather=next;sway.value=weather==='snow'?.15:weather==='rain'?.35:1;start=open;target=weather==='snow'?0:1;elapsed=immediate?1.5:0;if(immediate)open=target;
  warm.forEach((m,i)=>{m.color.copy(base[i]).multiplyScalar(weather==='rain'?.91:1)});canvasMat.color.setScalar(weather==='rain'?.90:1);canvasMat.roughness=weather==='rain'?.83:.94;winter.visible=weather==='snow';drops.visible=weather==='rain';pose(0);
 }
 setWeather(initial,true);
 return {root,collision,setWeather,update(dt:number,t:number){breeze.value=t;if(elapsed<1.5){elapsed=Math.min(1.5,elapsed+dt);const u=elapsed/1.5;open=start+(target-start)*(u*u*(3-2*u));}pose(t);if(drops.visible){for(let i=0;i<24;i++){const x=center-width/2+width*((i*.618033)%1),y=wallY-.43*open-((t*.9+i*.137)%1)*.58;dropPos.set([x,y,wallZ+.05+depth*open,x,y-.045,wallZ+.055+depth*open],i*6)}dropGeo.attributes.position.needsUpdate=true;dropGeo.computeBoundingSphere();}},diagnostics:()=>({weather,open,target,transitioning:elapsed<1.5,duration:1.5,width,depth,clearance:2.59,collision,snow:winter.visible,drips:drops.visible,additionalLights:0,staticBatches:fixed.children.length,flowerBoxes:2})};
}
