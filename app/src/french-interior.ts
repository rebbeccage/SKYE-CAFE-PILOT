import * as T from 'three';
import {V,group,mesh,box,cyl,branch} from './winter-geometry';

// Visual finishes only. Existing furniture anchors, hits and floor elevation remain authoritative.
const palette={ivory:0xf3e8d2,sage:0x8fa184,blue:0x7896a1,red:0xb65f58,oak:0xa87543,brass:0xb7924e};
const matte=(color:number,map?:T.Texture)=>new T.MeshStandardMaterial({color,map:map??null,roughness:.91});
let randomState=11826;
const rnd=()=>{randomState=(randomState*1664525+1013904223)>>>0;return randomState/4294967296};
function canvasTexture(paint:(c:CanvasRenderingContext2D,n:number)=>void,n=512){
 const c=document.createElement('canvas');c.width=c.height=n;paint(c.getContext('2d')!,n);const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.wrapS=t.wrapT=T.RepeatWrapping;t.anisotropy=4;return t;
}
function pigment(c:CanvasRenderingContext2D,n:number){
 for(let i=0;i<140;i++){c.fillStyle=i%2?'rgba(255,253,239,.045)':'rgba(101,116,85,.025)';c.beginPath();c.ellipse(rnd()*n,rnd()*n,4+rnd()*24,3+rnd()*16,rnd()*3,0,Math.PI*2);c.fill()}
 for(let i=0;i<4500;i++){c.fillStyle=i%2?'rgba(255,255,245,.06)':'rgba(90,80,61,.035)';c.fillRect(rnd()*n,rnd()*n,1,1)}
}
function linen(red=false){return canvasTexture((c,n)=>{
 c.fillStyle='#f3e8d2';c.fillRect(0,0,n,n);
 if(red){for(let x=0;x<n;x+=64){c.fillStyle='rgba(182,95,88,.17)';c.fillRect(x,0,20,n);c.fillRect(0,x,n,20);c.fillStyle='rgba(182,95,88,.16)';c.fillRect(x+5,0,3,n);c.fillRect(0,x+5,n,3)}}
 else for(const x of [202,220,238]){c.fillStyle='rgba(120,150,161,.67)';c.fillRect(x,0,5,n);c.fillStyle='rgba(120,150,161,.22)';c.fillRect(x-2,0,2,n);c.fillRect(x+5,0,2,n)}
 pigment(c,n);c.fillStyle='rgba(142,133,113,.045)';for(let i=0;i<n;i+=3){c.fillRect(i,0,1,n);c.fillRect(0,i,n,1)}
})}
function projectFloor(o:T.Mesh){
 // Same world-space pattern on every original paving mesh, including rounded edges.
 const geo=o.geometry.clone(),p=geo.attributes.position,uv=new Float32Array(p.count*2);o.updateWorldMatrix(true,false);
 for(let i=0;i<p.count;i++){const v=V(0,0,0).fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);uv[i*2]=(v.x+v.z)/Math.SQRT2/1.16;uv[i*2+1]=(v.z-v.x)/Math.SQRT2/1.16}
 geo.setAttribute('uv',new T.BufferAttribute(uv,2));o.geometry=geo;
}
export function createFrenchFloor(){
 const texture=canvasTexture((c,n)=>{for(let x=0;x<2;x++)for(let y=0;y<2;y++){
  const s=n/2;c.fillStyle=(x+y)%2?'#8fa184':'#f3e8d2';c.fillRect(x*s,y*s,s,s);
  c.strokeStyle='rgba(235,227,207,.75)';c.lineWidth=2;c.strokeRect(x*s+1,y*s+1,s-2,s-2);
  c.strokeStyle='rgba(114,123,99,.20)';c.lineWidth=1;c.strokeRect(x*s+3,y*s+3,s-6,s-6);
 }pigment(c,n)});
 const material=matte(0xffffff,texture);material.name='French ivory / sage cement tile';
 return {material,apply:(tile:T.Mesh)=>{tile.material=material;projectFloor(tile)},fill(root:T.Group){
  // Fills old 10mm paving joints one millimetre BELOW the retained 0.865m top; no new collision surface.
  const p=mesh(root,new T.PlaneGeometry(5.39,4.79),material,0,.864,-.38);p.rotation.x=-Math.PI/2;projectFloor(p);
 }};
}
type Furnishings={counter:T.Group,heroTable:T.Group,windowTable:T.Group,heroChairs:T.Group[],windowChair:T.Group,globes:T.Mesh[]};
type ExistingMaterials={wood:T.MeshStandardMaterial,velvet:T.MeshStandardMaterial,velvetPiping:T.MeshStandardMaterial,cream:T.MeshStandardMaterial};
export function refineFrenchInterior(root:T.Group,f:Furnishings,m:ExistingMaterials){
 const details=group(root);details.name='French watercolor interior accents';
 const oak=m.wood.clone();oak.color.set(palette.oak);oak.roughness=.83;oak.bumpScale=.003;oak.map=canvasTexture((c,n)=>{c.fillStyle='#f4f0e6';c.fillRect(0,0,n,n);pigment(c,n);for(let i=0;i<420;i++){const x=rnd()*n,y=rnd()*n;c.strokeStyle='rgba(98,82,61,.07)';c.lineWidth=.5+rnd();c.beginPath();c.moveTo(x,y);c.bezierCurveTo(x+20,y-2,x+55,y+2,x+100,y);c.stroke()}});
 const oakEdge=oak.clone();oakEdge.color.set(0xb88a55);
 const brass=new T.MeshStandardMaterial({color:palette.brass,metalness:.65,roughness:.55});
 const paper=matte(palette.ivory),green=matte(0x8fa184),blue=matte(palette.blue),rose=matte(palette.red);
 const stone=matte(0xffffff,canvasTexture((c,n)=>{c.fillStyle='#f3e8d2';c.fillRect(0,0,n,n);pigment(c,n)}));
 // Only direct cabinet parts: coffee machine, grinder, service cups and their local frames are untouched.
 const cabinet=f.counter.children.filter(o=>o instanceof T.Mesh) as T.Mesh[];
 cabinet.forEach((o,i)=>o.material=i===1?stone:o.geometry.type==='SphereGeometry'?brass:i%3===0?oakEdge:oak);
 for(let i=0;i<6;i++){const x=-1.74+i*.69;for(const dx of [-.244,.244])box(f.counter,.009,.58,.004,x+dx,.5,.439,oakEdge);for(const y of [.214,.786])box(f.counter,.49,.009,.004,x,y,.439,oakEdge)}
 const linenMap=linen(),redMap=linen(true),clothBlue=matte(0xffffff,linenMap),clothRed=matte(0xffffff,redMap);clothBlue.side=clothRed.side=T.DoubleSide;
 const upholstery=matte(0xc5c9b1,linenMap); // Reuse the inserts, with matte woven linen rather than velvet sheen.
 for(const chair of [...f.heroChairs,f.windowChair]){chair.userData.upholstery='matte woven linen seat and back';chair.traverse(o=>{if(o instanceof T.Mesh){if(o.material===m.velvet)o.material=upholstery;else if(o.material===m.velvetPiping)o.material=paper}});}
 const clothBounds:{min:number[],max:number[]}[]=[];
 for(const [index,table] of [f.heroTable,f.windowTable].entries()){
  // Retain the old decorative wooden bead beneath the fabric, not through the plates.
  const rim=table.children.find(o=>o instanceof T.Mesh&&o.geometry.type==='TorusGeometry');if(rim){rim.scale.z=.04;rim.position.y-=.002;}
  const n=64,rings=10,points:number[]=[],uv:number[]=[],ids:number[]=[];
  for(let j=0;j<=rings;j++)for(let i=0;i<=n;i++){
   const a=i/n*Math.PI*2;let r:number,y:number;
   if(j<=6){r=j/6*.356;y=1.5906}else{const t=(j-6)/4;r=.357+t*.02+Math.sin(a*11+index)*.006*t;y=1.5906-.222*t+Math.sin(a*11+index)*.007*t}
   points.push(Math.cos(a)*r,y,Math.sin(a)*r);const flat=j<=6?r:.356+(j-6)/4*.222;uv.push(.5+Math.cos(a)*flat/1.14,.5+Math.sin(a)*flat/1.14);
   if(i<n&&j<rings){const k=j*(n+1)+i;ids.push(k,k+n+1,k+1,k+1,k+n+1,k+n+2)}
  }
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(points,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geo.setIndex(ids);geo.computeVertexNormals();
  const cloth=mesh(details,geo,index?clothRed:clothBlue,table.position.x,0,table.position.z);cloth.name=index?'Single rose gingham tablecloth':'Blue-striped linen tablecloth';clothBounds.push((()=>{const b=new T.Box3().setFromObject(cloth);return {min:b.min.toArray(),max:b.max.toArray()}})());
 }
 // Lower cafe curtains leave the horizon, door opening and all chair/crop hitboxes clear.
 const curtain=clothBlue.clone();curtain.map=canvasTexture((c,n)=>{c.fillStyle='#f3e8d2';c.fillRect(0,0,n,n);for(const y of [408,427]){c.fillStyle='rgba(120,150,161,.52)';c.fillRect(0,y,n,5)}pigment(c,n)});
 const curtainBoxes:{min:number[],max:number[]}[]=[];
 function shortCurtain(x:number,z:number,w:number,angle:number){
  const g=group(details,x,0,z);g.rotation.y=angle;const geo=new T.PlaneGeometry(w,.35,24,4),p=geo.attributes.position;
  for(let i=0;i<p.count;i++){const xx=p.getX(i),yy=p.getY(i);p.setZ(i,Math.sin((xx/w+.5)*Math.PI*16)*.014);p.setY(i,yy+Math.sin(xx*43)*.003*(.175-yy)/.35)}geo.computeVertexNormals();mesh(g,geo,curtain,0,1.25,0);branch(g,V(-w/2-.02,1.447,0),V(w/2+.02,1.447,0),.007,brass,.007);
  for(let i=0;i<9;i++){const ring=mesh(g,new T.TorusGeometry(.013,.0025,4,8),brass,-w/2+i*w/8,1.435,0);ring.rotation.y=Math.PI/2}
  const b=new T.Box3().setFromObject(g);curtainBoxes.push({min:b.min.toArray(),max:b.max.toArray()});
 }
 for(let i=0;i<5;i++)shortCurtain(-2.69,-2.283+i*.974,.87,Math.PI/2);
 for(const x of [-2.2,-1.1,0])shortCurtain(x,-2.71,.99,0);
 // Two small botanical studies, hung from existing back-frame members, not new walls.
 function botanical(variant:number){return canvasTexture((c,n)=>{
  c.fillStyle='#f3e8d2';c.fillRect(0,0,n,n);pigment(c,n);c.scale(n/512,n/512);c.strokeStyle='#718667';c.lineWidth=3;c.beginPath();c.moveTo(270,446);c.bezierCurveTo(238,340,290,220,246,83);c.stroke();
  for(let j=0;j<8;j++){const x=260+(j%2?20:-20),y=380-j*36;c.strokeStyle='#8fa184';c.lineWidth=2;c.beginPath();c.moveTo(260,y+20);c.lineTo(x+(j%2?36:-36),y-12);c.stroke();for(let k=0;k<3;k++){c.fillStyle=variant?'rgba(120,150,161,.22)':'rgba(143,161,132,.28)';c.beginPath();c.ellipse(x+(j%2?24:-24),y,23-k*2,10+k,j%2?-.6:.6,0,7);c.fill()}}
  for(let j=0;j<7;j++){const x=244+Math.sin(j*3)*36,y=110+j*21;for(let k=0;k<5;k++){c.fillStyle=variant?'rgba(182,95,88,.28)':'rgba(177,161,104,.32)';c.beginPath();c.ellipse(x+Math.cos(k*1.26)*8,y+Math.sin(k*1.26)*8,8,5,k,0,7);c.fill()}}
 },256)}
 for(const [i,x] of [-1.75,.2].entries()){
  const g=group(details,x,2.52,-2.69);box(g,.44,.56,.025,0,0,0,oakEdge);box(g,.393,.513,.028,0,0,.002,paper);
  const art=mesh(g,new T.PlaneGeometry(.35,.47),matte(0xffffff,botanical(i)),0,0,.018);art.name='Botanical watercolor '+i;
  for(const dx of [-.14,.14])branch(g,V(dx,.28,0),V(0,.35,-.01),.002,brass,.002);
 }
 const clock=group(details,-.78,2.54,-2.69);const face=cyl(clock,.172,.172,.025,0,0,0,oakEdge);face.rotation.x=Math.PI/2;
 const dial=cyl(clock,.154,.154,.027,0,0,.004,paper);dial.rotation.x=Math.PI/2;
 for(let i=0;i<12;i++){const a=i*Math.PI/6;branch(clock,V(Math.sin(a)*.126,Math.cos(a)*.126,.019),V(Math.sin(a)*.137,Math.cos(a)*.137,.019),.0025,brass,.0025)}
 branch(clock,V(0,0,.023),V(-.071,.053,.023),.004,brass,.003);branch(clock,V(0,0,.023),V(.083,.072,.023),.003,brass,.002);
 branch(clock,V(0,.172,0),V(0,.33,-.01),.002,brass,.002); // Decorative still-life clock, no second game-time source.
 // Add blossoms to the existing table vase, rather than another vase on a crowded counter.
 const vase=group(details,-.94,1.59,.45);for(let i=0;i<5;i++){
  const x=Math.cos(i*2.4)*.045,z=Math.sin(i*2.4)*.045,y=.20+(i%3)*.025;branch(vase,V(0,.06,0),V(x,y,z),.002,green);
  for(let k=0;k<5;k++){const a=k*1.257;const petal=mesh(vase,new T.SphereGeometry(1,6,4),i===0?rose:paper,x+Math.cos(a)*.013,y,z+Math.sin(a)*.013);petal.scale.set(.012,.004,.008)}cyl(vase,.005,.005,.004,x,y+.003,z,brass);
 }
 // Restrained blue bands on two existing service cups; no new cups and no recipe changes.
 const cups=f.counter.children.filter(o=>o instanceof T.Group&&o.children.some(c=>c instanceof T.Mesh&&c.geometry.type==='CylinderGeometry')&&o.position.y===1.08&&[.9,1.85].includes(o.position.x));
 for(const cup of cups)for(const y of [.065,.085]){const stripe=mesh(cup,new T.CylinderGeometry(.062+.2*(y+.0025-.015)+.0007,.062+.2*(y-.0025-.015)+.0007,.005,20,1,true),blue,0,y,0);stripe.name='Blue ceramic pinstripe'}
 // Replace only the visible lamp shade geometry. The three anchors, lamps and weather lighting remain.
 const shade=new T.MeshStandardMaterial({color:0xe7dcc5,roughness:.94,emissive:0xe9d8b4,emissiveIntensity:.04,vertexColors:true});
 // Local diffuser response limits the near-bulb hotspot; no changes to the shared light rig.
 shade.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','outgoingLight = min(outgoingLight, vec3(0.92, 0.87, 0.76));\n#include <opaque_fragment>')};
 for(const globe of f.globes){
  const pos:number[]=[],idx:number[]=[],uv:number[]=[];const profile=[[.02,.145],[.07,.12],[.125,.065],[.18,-.04],[.20,-.095],[.195,-.104],[.174,-.04],[.12,.06],[.064,.114],[.018,.137]];
  const n=48;for(let j=0;j<profile.length;j++)for(let i=0;i<=n;i++){const a=i/n*Math.PI*2,[r,y]=profile[j],wave=Math.sin(a*10)*.006*(r/.2)**3;pos.push(Math.cos(a)*r/.16,(y+wave)/.16,Math.sin(a)*r/.16);uv.push(i/n,j/(profile.length-1));if(j<profile.length-1&&i<n){const k=j*(n+1)+i;idx.push(k,k+1,k+n+1,k+1,k+n+2,k+n+1)}}
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(pos,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geo.setIndex(idx);geo.computeVertexNormals();const colors:number[]=[];for(let j=0;j<profile.length;j++)for(let i=0;i<=n;i++){const tint=j>4?.68:1;colors.push(tint,tint,tint)}geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));globe.geometry=geo;globe.material=shade;
 }
 return {tables:2,clothBounds,curtainBoxes,artworks:2,clock:1,pendants:3,floorTop:.865,tileSize:.58,tileRotation:45,curtainTop:1.46,clothDrop:.222,newLights:0,newColliders:0};
}
