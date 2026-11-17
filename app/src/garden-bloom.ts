import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {gardenFlowerClearance,gardenPaths} from './garden-path';
import {gardenGroundHeight} from './garden-lawn';

/** Five shared flower silhouettes. Each species is one instanced draw, including
 * its stems and leaves. These are decorative and never enter cultivation/save. */
export function createGardenBloom(parent:T.Group){
 const root=new T.Group();root.name='Garden flower borders — open grass walk';parent.add(root);
 const mobile=matchMedia('(max-width: 700px)').matches;
 const uniforms={bloomTime:{value:0},bloomRain:{value:0},bloomWind:{value:mobile?.35:1}};
 const mat=new T.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:.95});
 mat.onBeforeCompile=shader=>{
  Object.assign(shader.uniforms,uniforms);
  shader.vertexShader='uniform float bloomTime,bloomRain,bloomWind;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
    vec3 origin=instanceMatrix[3].xyz;
    float flex=pow(clamp(position.y/.65,0.,1.),2.);
    float phase=floor(origin.x*1.6)*.67+floor(origin.z*1.6)*.89;
    float breeze=sin(bloomTime*1.05+phase)*.014*bloomWind*(1.-bloomRain*.65);
    transformed.x+=flex*(.012+breeze);
    transformed.z+=flex*(.012+breeze);
  `);
  shader.fragmentShader='uniform float bloomRain;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
    float grey=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(grey),bloomRain*.16)*(1.-bloomRain*.12);
  `);
 };
 mat.customProgramCacheKey=()=> 'garden-bloom-v1';
 const leaf=new T.Color('#829576').multiplyScalar(.72),leafLight=new T.Color('#ADB79A').multiplyScalar(.78),stem=new T.Color('#798866').multiplyScalar(.7);
 const palettes=[['#F0E5CC','#E6CD87'],['#C9858F','#DEA3A5'],['#91A3C1','#B3A3C5'],['#D2A06C','#DFC286'],['#AAA0BB','#968CA9']];
 const sphere=new T.SphereGeometry(1,mobile?5:6,3),cylinder=new T.CylinderGeometry(1,1,1,5);
 let seed=40729;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
 const dummy=new T.Object3D(),q=new T.Quaternion();const up=new T.Vector3(0,1,0);
 function makeFlower(kind:number){
  const parts:T.BufferGeometry[]=[];const petal=new T.Color(palettes[kind][0]).multiplyScalar(.83),pale=new T.Color(palettes[kind][1]).multiplyScalar(.86);
  function add(base:T.BufferGeometry,p:T.Vector3,scale:T.Vector3,color:T.Color,rot=new T.Euler()){
   const g=base.clone();g.applyMatrix4(new T.Matrix4().compose(p,new T.Quaternion().setFromEuler(rot),scale));
   const c=[];for(let i=0;i<g.attributes.position.count;i++){const shade=.94+.06*(g.attributes.normal.getY(i)+1)/2;c.push(color.r*shade,color.g*shade,color.b*shade)}
   g.setAttribute('color',new T.Float32BufferAttribute(c,3));parts.push(g);
  }
  const ell=(x:number,y:number,z:number,sx:number,sy:number,sz:number,c:T.Color,r=new T.Euler())=>add(sphere,new T.Vector3(x,y,z),new T.Vector3(sx,sy,sz),c,r);
  function stalk(a:T.Vector3,b:T.Vector3,r=.007){const g=cylinder.clone();q.setFromUnitVectors(up,b.clone().sub(a).normalize());g.applyMatrix4(new T.Matrix4().compose(a.clone().lerp(b,.5),q,new T.Vector3(r,a.distanceTo(b),r*.7)));const cs=[];for(let i=0;i<g.attributes.position.count;i++)cs.push(stem.r,stem.g,stem.b);g.setAttribute('color',new T.Float32BufferAttribute(cs,3));parts.push(g)}
  const h=[.24,.48,.32,.3,.66][kind];stalk(new T.Vector3(),new T.Vector3(.015,h*.55,0));stalk(new T.Vector3(.015,h*.55,0),new T.Vector3(.035,h,.008),.005);
  for(let i=0;i<(kind===2?5:3);i++){const a=i*2.5;ell(Math.cos(a)*.035,h*(.2+i*.12),Math.sin(a)*.035,kind===2?.065:.045,.008,kind===2?.1:.085,i%2?leaf:leafLight,new T.Euler(.35,a,.25))}
  if(kind===2){
   // A domed head made of small four-petal florets, not a solid coloured ball.
   for(let i=0;i<23;i++){const a=i*2.399,r=.18*Math.sqrt((i+.5)/23),y=h+Math.sqrt(Math.max(0,.18*.18-r*r))*.65;
    const x=Math.cos(a)*r,z=Math.sin(a)*r;stalk(new T.Vector3(.02,h-.08,0),new T.Vector3(x,y,z),.003);
    for(let j=0;j<4;j++){const b=j*Math.PI/2+a;ell(x+Math.cos(b)*.025,y,z+Math.sin(b)*.025,.029,.009,.019,i%3?petal:pale,new T.Euler(.2,b,0))}
   }
  }else if(kind===4){
   for(let i=0;i<10;i++){const y=h-.20+i*.024,a=i*2.4,r=.025*(1-i*.05);for(let j=0;j<3;j++){const b=a+j*2.094;ell(.035+Math.cos(b)*r,y,Math.sin(b)*r,.016,.025,.017,i%2?petal:pale)}}
  }else{
   const petals=kind===0?9:kind===1?7:13,r=kind===0?.032:kind===1?.046:.033;
   for(let i=0;i<petals;i++){const a=i*Math.PI*2/petals;ell(.035+Math.cos(a)*r,h+Math.sin(i*1.7)*.008,.008+Math.sin(a)*r,kind===1?.051:.033,.009,kind===1?.033:.014,i%3?petal:pale,new T.Euler(.18*Math.cos(a),-a,Math.sin(a)*.22))}
   ell(.035,h+.011,.008,kind===0?.019:.025,.015,kind===0?.019:.025,new T.Color(kind===1?'#A78C63':'#C7AD66').multiplyScalar(.8));
   // One small unopened side bud on selected silhouettes.
   if(kind!==0){stalk(new T.Vector3(.01,h*.4,0),new T.Vector3(-.065,h*.73,.025),.003);ell(-.065,h*.73,.025,.018,.023,.018,leafLight)}
  }
  const merged=mergeGeometries(parts,false)!;parts.forEach(g=>g.dispose());return merged;
 }
 // Families are clustered, with green gaps between distinct colour patches.
 // x/z use the existing rotated garden's local frame, not screen coordinates.
 const clusters:number[][][]=[
  [[-.82,8.72,.3,24],[.32,6.86,.4,28],[1.55,6.35,.43,30],[2.27,8.98,.3,18],[3.75,8.95,.27,18],[5.7,9.22,.19,20],[7.15,9.22,.18,15]],
  [[-.65,6.65,.35,24],[.83,6.32,.43,34],[2.12,6.65,.43,38],[2.6,9.17,.22,15],[3.65,6.45,.25,17],[5.25,9.21,.18,12]],
  [[.7,5.94,.31,7],[2.1,5.95,.3,7],[-.9,8.06,.22,4],[3.68,8.92,.26,5]],
  [[-.72,5.89,.23,16],[1.95,6.99,.22,18],[3.65,5.88,.25,16],[6.7,9.23,.16,14]],
  [[1.65,5.77,.17,5],[2.5,5.76,.18,5],[3.68,6.12,.23,5],[7.85,9.15,.18,4]],
 ];
 const names=['cream-daisy','rose-cosmos','blue-lilac-hydrangea','apricot-calendula','lavender-spike'];
 const placements:{kind:string,x:number,z:number,height:number,radius:number,clearance:number}[]=[];
 const counts:number[]=[];
 for(let kind=0;kind<5;kind++){
  const transforms:T.Matrix4[]=[],tints:T.Color[]=[];
  for(const [cx,cz,spread,count] of clusters[kind])for(let i=0;i<Math.round(count*(mobile?.63:1));i++){
   const a=random()*Math.PI*2,r=Math.sqrt(random())*spread,x=cx+Math.cos(a)*r,z=cz+Math.sin(a)*r;
   const scale=.75+random()*.4,extent=(kind===2?.22:kind===1?.11:.085)*scale;
   const clearance=gardenFlowerClearance(x,z);if(clearance<extent+.035)continue;
   dummy.position.set(x,gardenGroundHeight(x,z)-.006,z);dummy.rotation.set((random()-.5)*.15,random()*Math.PI*2,(random()-.5)*.16);dummy.scale.setScalar(scale);dummy.updateMatrix();
   transforms.push(dummy.matrix.clone());tints.push(new T.Color().setRGB(.92+random()*.08,.94+random()*.06,.93+random()*.07));
   placements.push({kind:names[kind],x,z,height:[.24,.48,.5,.3,.66][kind]*scale,radius:extent,clearance});
  }
  const flowers=new T.InstancedMesh(makeFlower(kind),mat,transforms.length);flowers.name=names[kind];
  transforms.forEach((matrix,i)=>{flowers.setMatrixAt(i,matrix);flowers.setColorAt(i,tints[i])});flowers.instanceMatrix.needsUpdate=true;flowers.receiveShadow=true;flowers.castShadow=false;flowers.computeBoundingSphere();root.add(flowers);counts.push(transforms.length);
 }
 sphere.dispose();cylinder.dispose();
 // Only one new still-life detail: an old low stone at the border, plus fallen
 // petals. The existing inverted pot and table watering can are reused in place.
 const stoneGeo=new T.SphereGeometry(1,9,5);stoneGeo.scale(.15,.025,.11);const stoneMat=new T.MeshStandardMaterial({color:0xb7b4a0,roughness:1});const stone=new T.Mesh(stoneGeo,stoneMat);stone.position.set(-.68,gardenGroundHeight(-.68,8.95)-.008,8.95);stone.receiveShadow=true;root.add(stone);
 const petalGeo=new T.SphereGeometry(1,6,3);petalGeo.scale(.016,.0025,.009);const litter=new T.InstancedMesh(petalGeo,new T.MeshStandardMaterial({color:0xcba3a0,roughness:1}),14);
 for(let i=0;i<14;i++){const x=i<7?-.38+random()*.17:2.25+random()*.16,z=i<7?8.72+random()*.12:8.79+random()*.13;dummy.position.set(x,gardenGroundHeight(x,z)+.008,z);dummy.rotation.set(0,random()*6.28,0);dummy.scale.setScalar(.8+random()*.4);dummy.updateMatrix();litter.setMatrixAt(i,dummy.matrix)}litter.receiveShadow=true;root.add(litter);
 let weather='sun';
 return {root,update(time:number,snow:boolean,rain:boolean){weather=snow?'snow':rain?'rain':'sun';root.visible=!snow;uniforms.bloomTime.value=time;uniforms.bloomRain.value=rain?1:0;},diagnostics:()=>({weather,visible:root.visible,mobile,species:names.map((name,i)=>({name,count:counts[i]})),count:placements.length,drawCalls:root.visible?7:0,trianglesPerPass:root.children.reduce((n,o)=>{const m=o as T.Mesh;return n+(m.geometry.index?.count??m.geometry.attributes.position.count)/3*(o instanceof T.InstancedMesh?o.count:1)},0),minClearance:Math.min(...placements.map(p=>p.clearance-p.radius)),paths:gardenPaths,placements,newProps:['low weathered stone','14 fallen petals'],reusedProps:['inverted terracotta pot','worktable watering can'],independentLights:0,castsShadow:false})};
}
