import * as T from 'three';
import {V, material, group, mesh, box, ball, cyl, branch, consolidate} from './winter-geometry';
import {SEA_LEVEL, terrainHeight, islandRadius} from './island-geography';
import {beachGround} from './beach-ground';
import {beachPlacement} from './island-layout';

type Weather = 'sun' | 'rain' | 'snow';
export interface BoardwalkPlank {
  index:number; center:T.Vector3; width:number; depth:number; topY:number;
  underwater:boolean; warped:boolean;
}
export const BOARD_X=-3.5;
const BOARD_WIDTH=2.4,BOARD_DEPTH=.36,BOARD_GAP=.012,BOARD_COUNT=33;
const BOARD_LENGTH=BOARD_COUNT*BOARD_DEPTH+(BOARD_COUNT-1)*BOARD_GAP;
export const BOARD_LAYOUT=(()=>{
 let lo=5,hi=18;for(let i=0;i<60;i++){const mid=(lo+hi)/2;if(terrainHeight(BOARD_X,mid)>SEA_LEVEL)lo=mid;else hi=mid;}
 const shorelineZ=(lo+hi)/2,startZ=shorelineZ-2.5,endZ=startZ+BOARD_LENGTH;
 return {shorelineZ,startZ,endZ,landingZ:startZ+BOARD_DEPTH/2+30*(BOARD_DEPTH+BOARD_GAP),landingTop:.08};
})();
function boardwalkTop(z:number,_index:number,x=BOARD_X){
 const t=T.MathUtils.smoothstep(z,BOARD_LAYOUT.startZ,BOARD_LAYOUT.startZ+2);
 return T.MathUtils.lerp(beachGround(x,BOARD_LAYOUT.startZ)+.036,.08,t);
}
/** Centre-line surface sampler for visitor feet; gaps use the nearest board edge. */
export function boardwalkTopAtZ(z:number,weather:Weather='sun') {
  const index=T.MathUtils.clamp(Math.round((z-BOARD_LAYOUT.startZ-BOARD_DEPTH/2)/(BOARD_DEPTH+BOARD_GAP)),0,BOARD_COUNT-1);
  const centerZ=BOARD_LAYOUT.startZ+BOARD_DEPTH/2+index*(BOARD_DEPTH+BOARD_GAP),a=centerZ-BOARD_DEPTH/2,b=centerZ+BOARD_DEPTH/2;
  const y=T.MathUtils.lerp(boardwalkTop(a,index),boardwalkTop(b,index),T.MathUtils.clamp((z-a)/BOARD_DEPTH,0,1));
  const warp=index===9?.027:index===21?-.0162:0;
  return y+warp+(weather==='snow'&&index<=30?.048:0);
}

/** Beach dressing is independent of the cafe, terrain, and boat. Units are metres. */
export function createIslandProps(scene:T.Scene,mobile=false) {
  const root=group(scene); root.name='Island beach belongings and boardwalk';
  const fixed=group(root), snow=group(root), puddles=group(root);
  const wind={value:.035},clock={value:0},waterLevel={value:SEA_LEVEL};
  const roots:{name:string;x:number;z:number;y:number}[]=[],contactChecks:{name:string;clearance:number}[]=[];
  fixed.name='Batched beach objects'; snow.name='Upward-facing 40–60 mm snow';
  puddles.name='Rain puddles'; snow.visible=false; puddles.visible=false;
  const colliders:T.Box3[]=[];
  const wetMaterials:{m:T.MeshStandardMaterial;color:T.Color;roughness:number;amount:number}[]=[];
  function mat(color:T.ColorRepresentation,roughness=.85,wet=.77) {
    const m=material(color,roughness); wetMaterials.push({m,color:m.color.clone(),roughness,amount:wet});return m;
  }
  // Small deterministic DataTextures keep the assets entirely procedural and reusable in headless QA.
  function texture(kind:'wood'|'cloth'|'weave') {
    const size=128,data=new Uint8Array(size*size*4);
    for(let y=0;y<size;y++)for(let x=0;x<size;x++) {
      let v=1,r=1,g=1,b=1;
      const noise=Math.sin(x*127.1+y*311.7)*43758.5453,grain=noise-Math.floor(noise);
      if(kind==='wood')v=.77+.14*Math.sin(x*.81+Math.sin(y*.036)*2)+grain*.09;
      if(kind==='cloth') {const stripe=Math.floor(x/16)%4===0;r=stripe?.64:1;g=stripe?.34:.93;b=stripe?.25:.80;v=.93+grain*.07;}
      if(kind==='weave')v=.68+((x%8<3)===(y%8<3)?.19:.04)+grain*.1;
      const i=(y*size+x)*4;data[i]=255*v*r;data[i+1]=255*v*g;data[i+2]=255*v*b;data[i+3]=255;
    }
    const t=new T.DataTexture(data,size,size);t.wrapS=t.wrapT=T.RepeatWrapping;t.colorSpace=T.SRGBColorSpace;
    t.magFilter=T.LinearFilter;t.minFilter=T.LinearMipmapLinearFilter;t.generateMipmaps=true;t.needsUpdate=true;return t;
  }
  const wood=mat('#b8a48a'),woodDark=mat('#84735b'),woodPale=mat('#c7bca4'),endGrain=mat('#97856b');
  const woodTexture=texture('wood');for(const m of [wood,woodDark,woodPale,endGrain])m.map=woodTexture;
  const rope=mat('#b7aa89',.97,.7),ropeDark=mat('#84795c',.96,.65),rust=mat('#895d3e',.94,.8);
  const terra=mat('#b66f53'),terraLight=mat('#c98561'),inside=mat('#775541');
  const burlap=mat('#a99b74',1,.68);burlap.map=texture('weave');
  const wicker=mat('#bca983',.95,.7);wicker.map=burlap.map;
  const cloth=mat('#d7c6a3',.96,.85),cream=mat('#e2d3b1',.98,.84);
  const towel=mat('#ffffff',1,.77);towel.map=texture('cloth');towel.side=T.DoubleSide;
  const seaGreen=mat('#828d70',.97,.78),sage=mat('#a0a68b',.94,.8),darkGreen=mat('#5d715f');
  const rock=mat('#d5cbb7',.94,.7),rockShade=mat('#b9b3a5',.93,.73);
  const shell=mat('#e6d8ba'),shellPink=mat('#d3b4a0'),coconut=mat('#79634b'),coconutInner=mat('#d1bf99');
  const star=mat('#b99472'),iron=mat('#625f51',.9,.72);
  const snowMat=material('#e6ebe5',.92);snowMat.polygonOffset=true;snowMat.polygonOffsetFactor=-1;
  const waterMat=new T.MeshStandardMaterial({color:'#768d91',transparent:true,opacity:.32,roughness:.13,metalness:.22,depthWrite:false});
  function windMaterial(m:T.MeshStandardMaterial){
    m.onBeforeCompile=s=>{Object.assign(s.uniforms,{beachWind:wind,beachTime:clock});s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nattribute float beachFlex;uniform float beachWind,beachTime;').replace('#include <begin_vertex>','#include <begin_vertex>\nfloat phase=position.x*.65+position.z*.38;transformed.x+=beachFlex*beachWind*(sin(beachTime*.8+phase)+.24*sin(beachTime*1.1+phase*1.7));');};
    m.customProgramCacheKey=()=> 'beach-world-wind-v1';
  }
  const leafLight=mat('#839471'),leafShade=mat('#667c66'),leafDry=mat('#a19676');
  for(const m of [leafLight,leafShade,leafDry,towel])windMaterial(m);
  // One shared physical water datum for all plank and post moisture bands.
  const tideWood=mat('#9c8e75',.8,1);tideWood.map=woodTexture;
  tideWood.onBeforeCompile=s=>{s.uniforms.beachWater=waterLevel;s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nvarying float beachWorldY;').replace('#include <begin_vertex>','#include <begin_vertex>\nbeachWorldY=(modelMatrix*vec4(position,1.)).y;');s.fragmentShader=s.fragmentShader.replace('#include <common>','#include <common>\nvarying float beachWorldY;uniform float beachWater;').replace('#include <color_fragment>','#include <color_fragment>\nfloat beachWet=1.-smoothstep(beachWater+.02,beachWater+.13,beachWorldY);diffuseColor.rgb*=mix(1.,.72,beachWet);').replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor=mix(roughnessFactor,.46,beachWet);');};
  const labels:{name:string;x:number;z:number;zone:'near'|'middle'|'far'}[]=[];
  function place(name:string,x:number,z:number,yaw=0,zone:'near'|'middle'|'far'='near') {
    const before={x,z};({x,z}=beachPlacement(x,z));
    const y=beachGround(x,z),g=group(fixed,x,y,z),s=group(snow,x,y,z);g.name=name;s.name=name+' snow';
    g.rotation.y=s.rotation.y=yaw;labels.push({name,x,z,zone,...{before}});return {g,s,y};
  }
  function collider(g:T.Object3D) {g.updateWorldMatrix(true,true);colliders.push(new T.Box3().setFromObject(g));}
  function cap(p:T.Object3D,w:number,d:number,x:number,y:number,z:number,depth=.048) {
    return box(p,w,depth,d,x,y+depth/2,z,snowMat);
  }
  function rounded(p:T.Object3D,r:number,x:number,y:number,z:number,m:T.Material,sx=1,sy=1,sz=1) {
    const o=ball(p,r,x,y,z,m);o.scale.set(sx,sy,sz);return o;
  }
  function tube(p:T.Object3D,points:T.Vector3[],r:number,m:T.Material,segments=24) {
    return mesh(p,new T.TubeGeometry(new T.CatmullRomCurve3(points),segments,r,5,false),m);
  }
  function ring(p:T.Object3D,r:number,t:number,x:number,y:number,z:number,m:T.Material) {
    const o=mesh(p,new T.TorusGeometry(r,t,5,16),m,x,y,z);o.rotation.x=Math.PI/2;return o;
  }
  function geo(vertices:number[],indices:number[]) {
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(vertices,3));
    g.setAttribute('uv',new T.Float32BufferAttribute(vertices.flatMap((_,i)=>i%3===0?[vertices[i],vertices[i+2]]:[]),2));
    g.setIndex(indices);g.computeVertexNormals();return g;
  }
  function nail(p:T.Object3D,x:number,y:number,z:number) {cyl(p,.012,.013,.004,x,y,z,rust);}
  function fray(p:T.Object3D,x:number,y:number,z:number) {
    for(let k=0;k<5;k++)branch(p,V(x,y,z),V(x+.055*Math.sin(k*2),y-.09-(k%2)*.025,z+.04*Math.cos(k*2)),.003,rope,.001);
  }
  function saltPlant(x:number,z:number,scale=1,zone:'near'|'middle'|'far'='middle') {
    const {g,s}=place('Low salt-tolerant beach foliage',x,z,0,zone);
    for(let k=0;k<8;k++) {
      const a=k*2.399,rr=.05+.022*k,tip=V(Math.sin(a)*rr,.06+.027*(k%4),Math.cos(a)*rr);
      branch(g,V(0,.018,0),tip,.008,darkGreen,.004);
      const leaf=rounded(g,.075,tip.x,tip.y,tip.z,k%2?sage:seaGreen,.46,.27,1.2);leaf.rotation.y=a;
      rounded(s,.068,tip.x,tip.y+.025,tip.z,snowMat,.45,.33,1.05).rotation.y=a;
    }g.scale.setScalar(scale);s.scale.setScalar(scale);
  }

  // Belongings within three metres of the established plinth.
  for(const [x,z,yaw] of [[-5.7,6.35,.15],[3.8,6.55,-.22]]) {
    const {g,s}=place('Three-loop rope mooring post',x,z,yaw);
    cyl(g,.075,.081,.7,0,.35,0,woodDark);cap(s,.132,.132,0,.7,0,.055);
    const coil:T.Vector3[]=[];
    for(let j=0;j<=72;j++){const a=j/72*Math.PI*6;coil.push(V(Math.cos(a)*.087,.4+j/72*.12,Math.sin(a)*.087));}
    tube(g,coil,.017,rope,72);
    tube(g,[V(.08,.43,.03),V(.18,.27,.1),V(.28,.07,.12),V(.36,.035,.1)],.014,rope,14);fray(g,.36,.035,.1);
    tube(g,[V(-.04,.5,-.08),V(-.13,.39,-.08),V(-.16,.22,-.04)],.012,rope,12);fray(g,-.16,.22,-.04);
    collider(g);
  }
  {
    const {g,s}=place('Shallow handcart with terracotta and burlap',-7.25,6.85,-.35);
    for(let j=0;j<6;j++){box(g,.19,.055,.79,-.5+j*.2,.35,0,wood);cap(s,.175,.73,-.5+j*.2,.378,0,.045);}
    for(const z of [-.42,.42]){box(g,1.27,.19,.055,0,.455,z,woodPale);cap(s,1.25,.05,0,.55,z,.043);}
    for(const x of [-.63,.63]){box(g,.055,.19,.87,x,.455,0,wood);cap(s,.05,.83,x,.55,0,.043);}
    branch(g,V(-.49,.26,0),V(.49,.26,0),.035,iron,.035);
    for(const x of [-.69,.69]) {
      const wheel=cyl(g,.255,.255,.075,x,.255,.02,woodDark);wheel.rotation.z=Math.PI/2;
      const rim=mesh(g,new T.TorusGeometry(.248,.018,5,18),iron,x,.255,.02);rim.rotation.y=Math.PI/2;
      cyl(g,.04,.04,.11,x,.255,.02,iron).rotation.z=Math.PI/2;
      for(let k=0;k<6;k++){const a=k*Math.PI/3;branch(g,V(x,.255,.02),V(x,.255+Math.sin(a)*.22,.02+Math.cos(a)*.22),.011,woodPale,.011);}
      rounded(s,.24,x,.49,.02,snowMat,.2,.15,.8);
    }
    for(const x of [-.4,.4]){branch(g,V(x,.37,-.37),V(x,.56,-1.25),.028,wood,.025);branch(s,V(x,.401,-.4),V(x,.592,-1.25),.023,snowMat,.02);}
    function pot(x:number,z:number,r:number,h:number){
      cyl(g,r,r*.68,h,x,.39+h/2,z,terra);ring(g,r,.027,x,.39+h,z,terraLight);
      cyl(g,r*.87,r*.87,.015,x,.39+h-.023,z,inside);
      ring(s,r,.025,x,.39+h+.024,z,snowMat);
      for(let j=0;j<5;j++){const a=j*2.1;branch(g,V(x,.39+h,z),V(x+Math.sin(a)*.14,.61+h,z+Math.cos(a)*.12),.012,seaGreen,.003);}
    }
    pot(-.29,.13,.19,.32);pot(.2,.16,.15,.25);
    const sack=rounded(g,.25,.32,.55,-.2,burlap,.85,.8,.7);sack.rotation.z=.3;
    rounded(g,.1,.31,.74,-.2,burlap,.6,.52,.65);ring(g,.052,.014,.31,.755,-.2,ropeDark);
    rounded(s,.205,.32,.705,-.2,snowMat,.9,.15,.72);
    collider(g);
  }
  {
    const {g,s}=place('Inverted wooden stool',3.9,7.2,.38);
    box(g,.46,.065,.4,0,.038,0,woodDark);cap(s,.45,.39,0,.072,0,.045);
    for(const x of [-.16,.16])for(const z of [-.13,.13]){
      branch(g,V(x,.07,z),V(x*1.23,.48,z*1.23),.025,wood,.021);
      cap(s,.05,.05,x*1.23,.48,z*1.23,.045);
    }
    for(const x of [-.19,.19]){branch(g,V(x,.29,-.155),V(x,.29,.155),.017,woodDark,.017);branch(s,V(x,.317,-.155),V(x,.317,.155),.021,snowMat,.021);}
    collider(g);
  }
  function seashell(p:T.Object3D,x:number,z:number,r:number,yaw:number) {
    const g=group(p,x,.012,z);g.rotation.y=yaw;
    const verts=[0,0,0],idx:number[]=[];
    for(let j=0;j<=10;j++){const a=-1.18+j/10*2.36;verts.push(Math.sin(a)*r,Math.sin(j/10*Math.PI)*r*.23,Math.cos(a)*r);if(j)idx.push(0,j+1,j);}
    mesh(g,geo(verts,idx),shell);
    for(let j=0;j<9;j++){const a=-1.1+j/8*2.2;branch(g,V(0,.007,0),V(Math.sin(a)*r,.018,Math.cos(a)*r),.004,shellPink,.002);}
  }
  {
    const {g,s}=place('Coconut halves and four seashells',-2.65,7.05,.15);
    for(const [x,z,r] of [[-.2,.03,.14],[.14,.15,.11]]){
      mesh(g,new T.SphereGeometry(r,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2),coconut,x,r*.66,z);
      const inner=mesh(g,new T.SphereGeometry(r*.85,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2),coconutInner,x,r*.68,z);inner.material=(inner.material as T.MeshStandardMaterial).clone();(inner.material as T.MeshStandardMaterial).side=T.DoubleSide;
      ring(g,r*.94,.018,x,r*.66,z,coconutInner);rounded(s,r*.68,x,.035,z,snowMat,1,.22,1);
    }
    [[.35,.1,.075,.4],[.1,-.3,.10,2.4],[-.38,-.19,.065,-.8],[.42,-.18,.06,1.7]].forEach(v=>seashell(g,...v as [number,number,number,number]));
  }
  {
    const {g,s}=place('Weathered driftwood',1.8,7.55,.55);
    const a=V(-.64,.055,-.1),b=V(.65,.1,.11);branch(g,a,b,.075,woodPale,.04);
    branch(g,V(-.15,.08,-.02),V(.1,.16,-.32),.031,woodDark,.013);
    branch(g,V(.31,.09,.06),V(.48,.11,.27),.025,woodPale,.008);
    branch(s,V(-.59,.12,-.09),V(.6,.155,.1),.025,snowMat,.018);
    for(let i=0;i<4;i++)branch(g,V(-.61,.05,-.09),V(-.8,.04+i*.015,-.15+i*.036),.012,woodDark,.002);
    collider(g);
  }

  function parasol(x:number,z:number,r:number,yaw:number,tilt=0) {
    const {g,s}=place('Open cream parasol',x,z,yaw,'middle');g.rotation.z=s.rotation.z=tilt;
    cyl(g,.032,.041,2.48,0,1.24,0,woodDark);rounded(g,.065,0,2.65,0,woodPale,.65,1,.65);
    const panels=10,rings=5,vertices:number[]=[],indices:number[]=[];
    for(let j=0;j<=panels*4;j++)for(let k=0;k<=rings;k++){
      const a=j/(panels*4)*Math.PI*2,q=k/rings,scallop=.047*Math.sin(a*panels/2)**2*q*q;
      vertices.push(Math.cos(a)*r*q,2.61-.43*Math.pow(q,1.38)-scallop,Math.sin(a)*r*q);
    }
    for(let j=0;j<panels*4;j++)for(let k=0;k<rings;k++){const i=j*(rings+1)+k;indices.push(i,i+rings+1,i+1,i+1,i+rings+1,i+rings+2);}
    const canopy=mesh(g,geo(vertices,indices),cloth);(canopy.material as T.Material).side=T.DoubleSide;
    // A 48 mm layer follows the upper canopy and retreats from the scalloped edge.
    const snowVertices=vertices.map((v,i)=>i%3===1?v+.048:v*.975);mesh(s,geo(snowVertices,indices),snowMat);
    for(let j=0;j<panels;j++){
      const a=j/panels*Math.PI*2,edge=V(Math.cos(a)*r,2.175,Math.sin(a)*r);
      tube(g,[V(0,2.575,0),V(Math.cos(a)*r*.5,2.42,Math.sin(a)*r*.5),edge],.012,woodDark,10);
      branch(g,V(0,1.88,0),V(Math.cos(a)*r*.48,2.39,Math.sin(a)*r*.48),.009,wood,.009);
    }
    cyl(g,.055,.055,.09,0,1.9,0,wood);x=g.position.x;z=g.position.z;colliders.push(new T.Box3(V(x-.08,terrainHeight(x,z),z-.08),V(x+.08,terrainHeight(x,z)+2.5,z+.08)));
  }
  parasol(-7.3,10.4,1.57,.12);parasol(4.4,11.7,1.46,-.3,5*Math.PI/180);
  function deckchair(x:number,z:number,yaw:number,hasTowel:boolean){
    const {g,s,y}=place(hasTowel?'Wood deckchair and terracotta striped towel':'Companion pale wood deckchair',x,z,yaw,'middle');
    x=g.position.x;z=g.position.z;
    const foot=(lx:number,lz:number)=>{const wx=x+Math.cos(yaw)*lx+Math.sin(yaw)*lz,wz=z-Math.sin(yaw)*lx+Math.cos(yaw)*lz;return beachGround(wx,wz)-y+.026};
    for(const x of [-.37,.37]){
      branch(g,V(x,foot(x,-.68),-.68),V(x,.7,.43),.027,wood,.027);
      branch(g,V(x,foot(x,.65),.65),V(x,.48,-.42),.028,woodDark,.028);
      branch(g,V(x,.4,-.35),V(x,1.09,-.83),.026,wood,.026);
      branch(s,V(x,.438,-.35),V(x,1.128,-.83),.024,snowMat,.024);
      box(g,.09,.035,.68,x,.64,-.04,wood);cap(s,.085,.65,x,.66,-.04,.046);
    }
    for(const [z,y] of [[-.79,1.035],[-.36,.43],[.4,.43]])branch(g,V(-.38,y,z),V(.38,y,z),.024,woodDark,.024);
    box(g,.65,.025,.75,0,.44,.025,cream);cap(s,.63,.7,0,.46,.025,.044);
    const back=box(g,.65,.021,.86,0,.75,-.59,cream);back.rotation.x=.96;
    const backSnow=cap(s,.63,.83,0,.765,-.58,.043);backSnow.rotation.x=.96;
    if(hasTowel){const towelSeat=box(g,.43,.013,.76,.035,.471,.03,towel);towelSeat.rotation.y=.07;
    const towelBack=box(g,.43,.015,.76,.035,.77,-.58,towel);towelBack.rotation.x=.96;
    const hem=box(g,.43,.26,.012,.035,.32,.415,towel);hem.userData.beachFlex=.25;
    for(let i=0;i<13;i++)branch(g,V(-.18+i*.034,.195,.421),V(-.177+i*.034,.16,.422),.003,cream,.002);
    }
    for(const lx of [-.37,.37])for(const lz of [-.68,.65])contactChecks.push({name:'deckchair foot',clearance:foot(lx,lz)-.026+y-beachGround(x+Math.cos(yaw)*lx+Math.sin(yaw)*lz,z-Math.sin(yaw)*lx+Math.cos(yaw)*lz)});
    collider(g);
  }
  deckchair(-7.25,11.3,-.22,true);deckchair(-5.65,11.8,.13,false);
  {
    const {g,s}=place('Partly buried wicker case',5.15,13.65,.32,'middle');
    const body=box(g,.86,.35,.54,0,.105,0,wicker);body.rotation.z=.06;
    box(g,.89,.065,.57,0,.292,0,wicker);cap(s,.85,.53,0,.325,0,.046);
    for(let j=0;j<14;j++)box(g,.014,.3,.005,-.398+j*.061,.14,.276,ropeDark);
    for(let j=0;j<6;j++)box(g,.84,.012,.009,0,.018+j*.052,.282,woodPale);
    for(const x of [-.25,.25])box(g,.038,.36,.565,x,.13,0,woodDark);
    tube(g,[V(-.11,.24,.305),V(-.12,.13,.36),V(.12,.13,.36),V(.11,.24,.305)],.015,woodDark,15);
    collider(g);
  }
  {
    const {g}=place('Small beach starfish',2.85,15.1,.23,'middle'),shape=new T.Shape();
    for(let j=0;j<10;j++){const a=j*Math.PI/5,r=j%2?.055:.16,x=Math.cos(a)*r,y=Math.sin(a)*r;j?shape.lineTo(x,y):shape.moveTo(x,y);}shape.closePath();
    const o=mesh(g,new T.ExtrudeGeometry(shape,{depth:.018,bevelEnabled:true,bevelThickness:.01,bevelSize:.009,bevelSegments:1,steps:1}),star);o.rotation.x=-Math.PI/2;
    for(let j=0;j<5;j++){const a=j*Math.PI/2.5;rounded(g,.008,Math.cos(a)*.08,.027,Math.sin(a)*.08,shell,1,.4,1);}
  }
  [[-8.1,8.8,1],[-4.8,10.5,.9],[5.6,9.7,1],[-5.9,13.9,.85],[3.8,15.2,.85],[-4.25,16.9,.75]].forEach(v=>saltPlant(v[0],v[1],v[2]));
  // The distant beach contains only low vegetation and rounded 0.2–0.4 m stones.
  for(const [i,x,z,h] of [[0,-6.2,20.2,.28],[1,5.4,20.3,.34],[2,-4.5,23.4,.21],[3,4.3,23.6,.25],[4,-8.9,17.9,.38],[5,7.6,17.7,.3]]) {
    const {g,s}=place('Low pale rounded shoreline stone',x,z,i*.7,'far');
    const width=.42+h*.9;rounded(g,.5,0,h*.3,0,i%2?rock:rockShade,width,h*1.4,width*.82);
    rounded(s,.5,0,h*.94,0,snowMat,width*.82,.09,width*.65);collider(g);
    if(i<4)saltPlant(x+.65,z-.4,.65,'far');
  }

  // Resting corner: reuse the original parasol, chair and towel; add only one chair/table.
  function groundPlace(name:string,x:number,z:number,yaw=0){const p=place(name,x,z,yaw,'middle');x=p.g.position.x;z=p.g.position.z;roots.push({name,x,z,y:p.g.position.y});return p;}
  {
    const {g,s}=groundPlace('Small wicker table with closed book, straw hat and cup',-6.43,11.75,.08);
    cyl(g,.29,.27,.055,0,.56,0,wicker);cap(s,.5,.5,0,.59,0,.045);
    for(const a of [0,2.094,4.189]){const x=Math.cos(a)*.19,z=Math.sin(a)*.19,wx=g.position.x+x*Math.cos(.08)+z*Math.sin(.08),wz=g.position.z-x*Math.sin(.08)+z*Math.cos(.08);branch(g,V(x,beachGround(wx,wz)-g.position.y+.016,z),V(x*.8,.54,z*.8),.022,woodDark,.018)}
    ring(g,.2,.016,0,.22,0,ropeDark);
    box(g,.2,.045,.16,-.08,.61,.10,seaGreen);box(g,.175,.025,.15,-.08,.61,.105,shell);box(g,.2,.005,.16,-.08,.636,.10,seaGreen);
    const hat=group(g,.10,.594,-.11);hat.rotation.y=.3;const brim=cyl(hat,.13,.14,.012,0,0,0,wicker);brim.scale.z=.85;cyl(hat,.065,.08,.07,0,.04,0,wicker);ring(hat,.078,.009,0,.02,0,ropeDark);
    const c=group(g,-.14,.59,-.13);cyl(c,.045,.038,.085,0,.043,0,cream);cyl(c,.038,.038,.004,0,.086,0,woodDark);const handle=ring(c,.025,.007,.048,.052,0,cream);handle.rotation.x=0;
    collider(g);
  }

  // Curved, three-dimensional fronds. No alpha cards, per-leaf timers or new lighting.
  for(const m of [leafLight,leafShade,leafDry]){m.side=T.DoubleSide;m.envMapIntensity=.4;}
  const palms:{x:number;z:number;height:number;canopyRadius:number}[]=[];
  function leaf(p:T.Object3D,a:T.Vector3,b:T.Vector3,w:number,m:T.Material,flex=1){
    const d=b.clone().sub(a),side=V(-d.z,0,d.x).normalize().multiplyScalar(w),mid=a.clone().lerp(b,.48);mid.y+=.025;
    const positions=[...a.toArray(),...mid.clone().add(side).toArray(),...mid.clone().add(V(0,.035,0)).toArray(),...mid.clone().sub(side).toArray(),...b.toArray()];
    const g=geo(positions,[0,1,2,0,2,3,1,4,2,2,4,3]);g.setAttribute('beachFlex',new T.Float32BufferAttribute([0,.55,.5,.55,1].map(v=>v*flex),1));return mesh(p,g,m);
  }
  for(const [idx,x,z,height,lean] of [[0,-10.8,.9,4.1,-.4],[1,9.0,-1.7,3.65,.48]]){
    const {g,s}=groundPlace('Curving palm '+(idx+1),x,z,0),crown=V(lean,height,idx?.16:-.14),segments=mobile?7:10;
    for(let k=0;k<segments;k++){const t=k/segments,t1=(k+1)/segments,a=V(lean*t*t,height*t,crown.z*t*t),b=V(lean*t1*t1,height*t1,crown.z*t1*t1);branch(g,a,b,.115-t*.045,woodDark,.115-t1*.045);if(k%2===0){const r=ring(g,.114-t*.045,.008,a.x,a.y+.02,a.z,woodPale);r.rotation.z=lean*.14;}}
    rounded(g,.15,crown.x,crown.y,crown.z,seaGreen,1,.8,1);
    const count=mobile?8:10;
    for(let j=0;j<count;j++){const a=j/count*Math.PI*2+idx*.35,r=1.25+(j%3)*.15;const points=Array.from({length:7},(_,k)=>{const t=k/6;return crown.clone().add(V(Math.cos(a)*r*t,.32*Math.sin(t*Math.PI)-.55*t*t,Math.sin(a)*r*t))});
      const ribbon:number[]=[],ribbonIds:number[]=[],flex:number[]=[];
      for(let k=0;k<points.length;k++){const t=k/6,w=.145*Math.sin(Math.PI*t),cross=V(-Math.sin(a)*w,0,Math.cos(a)*w),c=points[k];ribbon.push(...c.clone().sub(cross).toArray(),...c.clone().add(V(0,.035*Math.sin(Math.PI*t),0)).toArray(),...c.clone().add(cross).toArray());flex.push(t*.7,t*.7,t*.7);if(k<6){const n=k*3;ribbonIds.push(n,n+3,n+1,n+1,n+3,n+4,n+1,n+4,n+2,n+2,n+4,n+5)}}
      const bladeGeo=geo(ribbon,ribbonIds);bladeGeo.setAttribute('beachFlex',new T.Float32BufferAttribute(flex,1));mesh(g,bladeGeo,j%2?leafShade:leafLight);
      for(let k=0;k<6;k++){const start=points[k],end=points[k+1];branch(g,start,end,.009,leafShade,.004);for(const sign of [-1,1]){const t=(k+1)/7,w=.25*Math.sin(t*Math.PI)+.1;const tip=end.clone().add(V(Math.cos(a+.85*sign)*w,-.15,Math.sin(a+.85*sign)*w));leaf(g,start,tip,.065,j%5===0?leafDry:j%2?leafLight:leafShade,(k+1)/6);}}
      if(j%2===0)branch(s,crown.clone().add(V(0,.025,0)),points[3].clone().add(V(0,.03,0)),.025,snowMat,.014);
    }palms.push({x,z,height,canopyRadius:1.9});
  }
  // Four irregular low groups leave the majority of sand unoccupied.
  const plantGroups=[[-9.8,6.1,.9],[6.55,4.9,.85],[-10.8,.9,.8],[8,-3.4,.8]];
  for(const [i,entry] of plantGroups.entries()){
    const [x,z,scale]=entry,{g,s}=groundPlace('Grouped salt shrub '+i,x,z,i*.7);
    for(let k=0;k<(mobile?5:8);k++){const a=k*2.4,r=.1+(k%3)*.16,base=V(Math.sin(a)*r,-.012,Math.cos(a)*r),top=base.clone().add(V(Math.sin(a)*.12,.35+(k%3)*.12,Math.cos(a)*.12));branch(g,base,top,.016,woodDark,.006);
      for(let n=0;n<6;n++){const aa=a+n*1.7,c=base.clone().lerp(top,.25+n*.13);leaf(g,c,c.clone().add(V(Math.sin(aa)*.3,.10,Math.cos(aa)*.3)),.10,n%3?leafShade:leafDry,.4);}
      rounded(s,.11,top.x,top.y+.025,top.z,snowMat,1,.25,.8);
    }g.scale.setScalar(scale);s.scale.setScalar(scale);
  }
  for(const [i,coords] of [[-9.1,9.1],[-8.9,12.6],[-5.0,12.9],[5.1,8.8],[6.35,10.1],[-11.1,5.7]].entries()){
    const {g,s}=groundPlace('Dune grass tuft '+i,coords[0],coords[1]);
    for(let k=0;k<(mobile?5:9);k++){const a=k*2.4,base=V(Math.sin(a)*.09,-.008,Math.cos(a)*.09),tip=base.clone().add(V(.12+Math.sin(a)*.15,.2+(k%3)*.08,Math.cos(a)*.2));leaf(g,base,tip,.022,k%4===0?leafDry:leafLight,.7);if(k%3===0)rounded(s,.035,tip.x-.03,tip.y*.7,tip.z,snowMat,1,.4,1);}
  }

  // Opaque terrain-conforming footprints: no transparent sorting or coplanar faces.
  const trackMat=mat('#ffffff',.98,.82);trackMat.vertexColors=true;trackMat.polygonOffset=true;trackMat.polygonOffsetFactor=-2;trackMat.polygonOffsetUnits=-2;
  const snowTrackMat=material('#c4cfcb',.95);snowTrackMat.polygonOffset=true;snowTrackMat.polygonOffsetFactor=-2;snowTrackMat.polygonOffsetUnits=-2;
  const tracks=group(root),winterTracks=group(snow),printLocations:{x:number;z:number}[]=[];
  function groundMark(parent:T.Object3D,x:number,z:number,rx:number,rz:number,yaw:number,lift:number,m:T.Material){
    const v:number[]=[x,beachGround(x,z)+lift,z],ix:number[]=[],colors:number[]=[];const c0=new T.Color('#c9baa0'),c1=new T.Color('#d6c2a4');
    colors.push(c0.r,c0.g,c0.b);
    for(let i=0;i<=12;i++){const a=i/12*Math.PI*2,dx=Math.cos(a)*rx,dz=Math.sin(a)*rz,xx=x+dx*Math.cos(yaw)+dz*Math.sin(yaw),zz=z-dx*Math.sin(yaw)+dz*Math.cos(yaw);v.push(xx,beachGround(xx,zz)+lift,zz);colors.push(c1.r,c1.g,c1.b);if(i)ix.push(0,i+1,i)}const geometry=geo(v,ix);geometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));const o=mesh(parent,geometry,m);o.renderOrder=1;return o;
  }
  const paths=[[[BOARD_X,BOARD_LAYOUT.startZ-.7],[-2,6],[-.93,5.7]],[[BOARD_X,6.6],[-9.8,6.4],[-13.8,7]]];
  for(const points of paths){const curve=new T.CatmullRomCurve3(points.map(([x,z])=>V(x,0,z)));const len=curve.getLength(),count=Math.floor(len/.68);for(let k=0;k<count;k++){if(mobile&&k%3===0)continue;const u=k/count,p=curve.getPoint(u),d=curve.getTangent(u),side=k%2?1:-1,x=p.x+d.z*.13*side,z=p.z-d.x*.13*side,yaw=Math.atan2(d.x,d.z);groundMark(tracks,x,z,.055,.14,yaw,.014,trackMat);groundMark(winterTracks,x,z,.075,.15,yaw,.058,snowTrackMat);printLocations.push({x,z});}}
  consolidate(tracks);tracks.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=false;o.receiveShadow=true;}});
  // One near-garden vignette, set away from the landing route and existing cart.
  {
    const {g,s}=groundPlace('Garden pot, hand trowel and seedlings',-4.3,6.8,.24);
    cyl(g,.19,.13,.29,0,.145,0,terra);ring(g,.19,.022,0,.29,0,terraLight);cyl(g,.167,.167,.014,0,.277,0,inside);ring(s,.19,.024,0,.31,0,snowMat);
    for(let i=0;i<3;i++){const stem=V((i-1)*.065,.28,0),tip=stem.clone().add(V(.02,.23+i*.035,.015));branch(g,stem,tip,.009,darkGreen,.004);leaf(g,tip,tip.clone().add(V(-.09,.045,.055)),.04,leafLight,.4);leaf(g,tip.clone().add(V(0,-.07,0)),tip.clone().add(V(.11,-.035,-.05)),.04,leafShade,.4);}
    branch(g,V(.27,.025,.12),V(.47,.045,.3),.026,woodDark,.026);const blade=box(g,.12,.016,.19,.23,.016,.07,iron);blade.rotation.y=-.7;
    seashell(g,-.25,.13,.095,.7);if(!mobile)seashell(g,.23,-.13,.065,2);
  }
  // A single quiet strandline cluster, not a uniform scatter or new foam system.
  {
    const x=-8.4,z=19.1,{g,s}=groundPlace('Tide-line shells, driftwood and sea glass',x,z,.4);
    branch(g,V(-.38,.045,0),V(.28,.05,.09),.045,woodPale,.02);branch(s,V(-.35,.08,0),V(.25,.08,.08),.022,snowMat,.01);
    seashell(g,.40,.12,.11,.5);seashell(g,-.15,-.18,.08,2);
    const glassMat=mat('#b4c6bb',.55,.88);for(let i=0;i<(mobile?2:3);i++){const o=mesh(g,new T.DodecahedronGeometry(.045,0),glassMat,.1+i*.1,.02,-.16-(i%2)*.1);o.scale.y=.24;o.rotation.y=i*1.2;}
  }

  // Thirty-three 360 mm boards, separated by 12 mm; their exact assembled length is 12.264 m.
  const plankCount=BOARD_COUNT,plankDepth=BOARD_DEPTH,gap=BOARD_GAP,length=BOARD_LENGTH,width=BOARD_WIDTH,x=BOARD_X;
  const {shorelineZ,endZ,startZ}=BOARD_LAYOUT;
  const boardGroup=group(fixed),boardSnow=group(snow);boardGroup.name='Independent sloping beach boardwalk';
  const planks:BoardwalkPlank[]=[];
  const topAt=boardwalkTop;
  function boardGeometry(z:number,index:number,top:boolean) {
    const vertices:number[]=[],indices:number[]=[],steps=12;
    for(let side=0;side<2;side++)for(let j=0;j<=steps;j++){
      const xx=x-width/2+j/steps*width,zz=z+(side?1:-1)*plankDepth/2;
      const warp=(index===9||index===21)?Math.sin(j/steps*Math.PI)*.027*(index===9?1:-.6):0;
      const yy=topAt(zz,index,xx)+warp+(top?.048:0);vertices.push(xx,yy,zz);
    }
    for(let j=0;j<steps;j++)indices.push(j,j+steps+1,j+1,j+1,j+steps+1,j+steps+2);
    {
      const n=vertices.length/3;for(let i=0;i<n;i++)vertices.push(vertices[i*3],vertices[i*3+1]-(top?.048:.052),vertices[i*3+2]);
      const boundary=[...Array.from({length:steps+1},(_,j)=>j),...Array.from({length:steps+1},(_,j)=>steps*2+1-j)];
      for(let j=0;j<boundary.length;j++){const a=boundary[j],b=boundary[(j+1)%boundary.length];indices.push(a,b,a+n,b,b+n,a+n);}
      for(let j=0;j<steps;j++)indices.push(n+j,n+j+1,n+j+steps+1,n+j+1,n+j+steps+2,n+j+steps+1);
    }
    const g=geo(vertices,indices);const uv=g.getAttribute('uv');for(let i=0;i<uv.count;i++)uv.setXY(i,vertices[i*3+2]*2.8,vertices[i*3]*.45);return g;
  }
  for(let i=0;i<plankCount;i++) {
    const z=startZ+plankDepth/2+i*(plankDepth+gap),topY=topAt(z,i),underwater=topY<SEA_LEVEL;
    const plank=mesh(boardGroup,boardGeometry(z,i,false),topY<SEA_LEVEL+.25?tideWood:i%5===0?woodPale:i%7===0?woodDark:wood);plank.name='Boardwalk plank '+(i+1);
    planks.push({index:i,center:V(x,topY,z),width,depth:plankDepth,topY,underwater,warped:i===9||i===21});
    collider(plank);
    if(!underwater)mesh(boardSnow,boardGeometry(z,i,true),snowMat);
    for(const xx of [x-width/2+.14,x+width/2-.14])for(const zz of [z-.11,z+.11])nail(boardGroup,xx,topAt(zz,i,xx)+.003,zz);
    if(i<30&&i%4===1){const wet=box(puddles,width*.58,.004,.09,x+.09,topY+.004,z+.035,waterMat);wet.rotation.x=-Math.atan2(topAt(z+.15,i)-topAt(z-.15,i),.3);}
  }
  // Short ground-following stringers terminate before the submerged boards.
  for(const xx of [x-.77,x+.77])for(let i=0;i<30;i++){
    const z=startZ+.16+i*.372;branch(boardGroup,V(xx,topAt(z,i)-.065,z),V(xx,topAt(z+.374,i)-.065,z+.374),.044,woodDark,.044);
  }
  for(const i of [2,6,10,14,18,22,26,30,32]){const z=startZ+plankDepth/2+i*(plankDepth+gap);for(const xx of [x-.8,x+.8]){const base=beachGround(xx,z),top=topAt(z,i)-.052;if(top>base)box(boardGroup,.1,top-base+.03,.12,xx,(top+base)/2-.015,z,tideWood);}}
  const postZ=[startZ+1.25,startZ+5.8,endZ-.68];
  for(const side of [-1,1]){
    const xx=x+side*(width/2+.1),tops:T.Vector3[]=[];
    for(const z of postZ){
      const ground=beachGround(xx,z),top=boardwalkTopAtZ(z)+.75;tops.push(V(xx,top-.11,z));
      cyl(boardGroup,.06,.064,top-ground+.15,xx,(ground+top-.15)/2,z,tideWood);
      ring(boardGroup,.067,.012,xx,top-.11,z,ropeDark);cap(boardSnow,.105,.105,xx,top, z,.055);
      if(ground<SEA_LEVEL+.2){
        // Tide staining is in the shared world-space material, not a local cylinder.
        for(let k=0;k<10;k++){const a=k*2.4;rounded(boardGroup,.016,xx+Math.sin(a)*.061,ground+.06+(k%5)*.041,z+Math.cos(a)*.061,shell,.85,1,.7);}
      }
      colliders.push(new T.Box3(V(xx-.064,ground-.09,z-.064),V(xx+.064,top,z+.064)));
    }
    for(let i=0;i<tops.length-1;i++){
      const a=tops[i],b=tops[i+1];if(side===-1&&i===1)continue;const mid=a.clone().lerp(b,.5);mid.y-=.29;
      tube(boardGroup,[a,mid,b],.019,rope,24);
      // Snow rests along the upward-facing rope ridge without wrapping its underside.
      tube(boardSnow,[a.clone().add(V(0,.027,0)),mid.clone().add(V(0,.027,0)),b.clone().add(V(0,.027,0))],.015,snowMat,24);
    }
    const end=tops[2];tube(boardGroup,[end,V(xx+side*.08,end.y-.15,end.z+.1),V(xx+side*.12,end.y-.32,end.z+.11)],.016,rope,14);fray(boardGroup,xx+side*.12,end.y-.32,end.z+.11);
  }
  // Re-seat the existing two threshold stones into sand; no raised gap at entry.
  for(let i=0;i<2;i++){
    const z=startZ-.53+i*.36,base=beachGround(x,z),h=.035+i*.009;
    const step=box(boardGroup,2.48,h,.36,x,base+h/2-.016,z,rockShade);cap(boardSnow,2.43,.32,x,base+h-.016,z,.047);collider(step);
  }
  // A handful of shallow rain pools only on exposed sand, below the props.
  for(const [xx,zz,sx,sz] of [[-4.4,7.3,.4,.23],[2.2,9.2,.34,.23],[-6.2,12.8,.29,.16],[3.6,14.4,.23,.13]]){
    const q=beachPlacement(xx,zz);rounded(puddles,1,q.x,beachGround(q.x,q.z)+.004,q.z,waterMat,sx,.003,sz);
  }
  const start=V(x,topAt(startZ,0),startZ),end=V(x,topAt(endZ,32),endZ);
  fixed.traverse(o=>{if(o instanceof T.Mesh){if(o.geometry.hasAttribute('beachFlex'))return;const a=o.geometry.attributes.position;o.geometry.setAttribute('beachFlex',new T.Float32BufferAttribute(Array.from({length:a.count},(_,i)=>o.userData.beachFlex?(1-(a.getY(i)+.13)/.26)*o.userData.beachFlex:0),1));}});
  consolidate(fixed);consolidate(snow);consolidate(puddles);
  fixed.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=!mobile;o.receiveShadow=true;}});
  snow.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=!mobile&&o.material!==snowTrackMat;o.receiveShadow=true;}});
  let currentWeather:Weather='sun';
  function update(t:number,weather:Weather,tide=0) {
    clock.value=t;waterLevel.value=SEA_LEVEL+tide;wind.value=mobile?0:weather==='snow'?.009:weather==='rain'?.018:.035;
    if(weather===currentWeather)return;currentWeather=weather;snow.visible=weather==='snow';tracks.visible=weather!=='snow';puddles.visible=weather==='rain';
    for(const {m,color,roughness,amount} of wetMaterials){m.color.copy(color).multiplyScalar(weather==='rain'?amount:1);m.roughness=weather==='rain'?Math.max(.34,roughness*.67):roughness;}
  }
  return {root,update,boardwalk:{start,end,length,planks,topAtZ:boardwalkTopAtZ},colliders,diagnostics:()=>({
    weather:currentWeather,beachLife:{palms:2,parasols:2,deckchairs:2,smallTables:1,wind:wind.value,windDirection:[1,0,0],tideDatum:waterLevel.value,mobile,roots,contactChecks,palmsLayout:palms,footprints:printLocations,terrainSampling:"existing rendered grid"},drawCalls:tracks.children.filter(o=>o instanceof T.Mesh&&tracks.visible).length+fixed.children.filter(o=>o instanceof T.Mesh).length+((snow.visible?snow:puddles).visible?(snow.visible?snow:puddles).children.filter(o=>o instanceof T.Mesh).length:0),
    objects:labels,boardwalk:{start:start.toArray(),end:end.toArray(),length,width,planks:planks.length,gap,shorelineZ,
      underwaterPlanks:planks.filter(p=>p.underwater).map(p=>p.index),warpedPlanks:planks.filter(p=>p.warped).map(p=>p.index),
      entryUndersideGap:boardwalkTop(startZ,0)-.052-beachGround(x,startZ),lastDryPlank:planks.filter(p=>!p.underwater).at(-1)?.center.toArray()},colliders:colliders.length,
    farBeachLargeProps:labels.filter(p=>p.zone==='far'&&!/stone|foliage/.test(p.name)).length,
    propsOutsideIsland:labels.filter(p=>islandRadius(p.x,p.z)>1).map(p=>p.name),snowDepth:[.04,.06]
  })};
}
