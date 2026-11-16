import * as T from 'three';
import {V, material, group, mesh, box, ball, cyl, branch, consolidate} from './winter-geometry';
import {SEA_LEVEL, terrainHeight, islandRadius} from './island-geography';

type Weather = 'sun' | 'rain' | 'snow';
export interface BoardwalkPlank {
  index:number; center:T.Vector3; width:number; depth:number; topY:number;
  underwater:boolean; warped:boolean;
}
const BOARD_X=-.65,BOARD_WIDTH=2.4,BOARD_DEPTH=.36,BOARD_GAP=.012,BOARD_COUNT=33;
const BOARD_LENGTH=BOARD_COUNT*BOARD_DEPTH+(BOARD_COUNT-1)*BOARD_GAP;
const BOARD_LAYOUT=(()=>{
  let lo=15,hi=34;for(let i=0;i<60;i++){const mid=(lo+hi)/2;if(terrainHeight(BOARD_X,mid)>SEA_LEVEL)lo=mid;else hi=mid;}
  const shorelineZ=(lo+hi)/2,endZ=shorelineZ+1.5,startZ=endZ-BOARD_LENGTH;
  const landingZ=startZ+BOARD_DEPTH/2+30*(BOARD_DEPTH+BOARD_GAP),landingTop=SEA_LEVEL+.06;
  return {shorelineZ,endZ,startZ,landingZ,landingTop,landingLift:landingTop-(terrainHeight(BOARD_X,landingZ)+.08)};
})();
function boardwalkTop(z:number,index:number) {
  const ground=terrainHeight(BOARD_X,z),{startZ,landingZ,landingTop,landingLift}=BOARD_LAYOUT;
  if(index>30)return Math.min(ground+.035,SEA_LEVEL-.045);
  if(index===30)return landingTop;
  const entryRise=.22*(1-T.MathUtils.smoothstep(z,startZ,startZ+2));
  return ground+.08+entryRise+landingLift*T.MathUtils.smoothstep(z,landingZ-5*(BOARD_DEPTH+BOARD_GAP),landingZ);
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
export function createIslandProps(scene:T.Scene) {
  const root=group(scene); root.name='Island beach belongings and boardwalk';
  const fixed=group(root), snow=group(root), puddles=group(root);
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
  const star=mat('#b99472'),iron=mat('#625f51',.9,.72),wetWood=mat('#655d4d',.48,1);
  const snowMat=material('#f7fbff',.92);snowMat.polygonOffset=true;snowMat.polygonOffsetFactor=-1;
  const waterMat=new T.MeshStandardMaterial({color:'#768d91',transparent:true,opacity:.32,roughness:.13,metalness:.22,depthWrite:false});
  const labels:{name:string;x:number;z:number;zone:'near'|'middle'|'far'}[]=[];
  function place(name:string,x:number,z:number,yaw=0,zone:'near'|'middle'|'far'='near') {
    const y=terrainHeight(x,z),g=group(fixed,x,y,z),s=group(snow,x,y,z);g.name=name;s.name=name+' snow';
    g.rotation.y=s.rotation.y=yaw;labels.push({name,x,z,zone});return {g,s,y};
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
    cyl(g,.055,.055,.09,0,1.9,0,wood);colliders.push(new T.Box3(V(x-.08,terrainHeight(x,z),z-.08),V(x+.08,terrainHeight(x,z)+2.5,z+.08)));
  }
  parasol(-7.3,10.4,1.57,.12);parasol(4.4,11.7,1.46,-.3,5*Math.PI/180);
  {
    const {g,s}=place('Wood deckchair and terracotta striped towel',-7.25,11.3,-.22,'middle');
    for(const x of [-.37,.37]){
      branch(g,V(x,.07,-.68),V(x,.7,.43),.027,wood,.027);
      branch(g,V(x,.08,.65),V(x,.48,-.42),.028,woodDark,.028);
      branch(g,V(x,.4,-.35),V(x,1.09,-.83),.026,wood,.026);
      branch(s,V(x,.438,-.35),V(x,1.128,-.83),.024,snowMat,.024);
      box(g,.09,.035,.68,x,.64,-.04,wood);cap(s,.085,.65,x,.66,-.04,.046);
    }
    for(const [z,y] of [[-.79,1.035],[-.36,.43],[.4,.43]])branch(g,V(-.38,y,z),V(.38,y,z),.024,woodDark,.024);
    box(g,.65,.025,.75,0,.44,.025,cream);cap(s,.63,.7,0,.46,.025,.044);
    const back=box(g,.65,.021,.86,0,.75,-.59,cream);back.rotation.x=.96;
    const backSnow=cap(s,.63,.83,0,.765,-.58,.043);backSnow.rotation.x=.96;
    const towelSeat=box(g,.43,.013,.76,.035,.471,.03,towel);towelSeat.rotation.y=.07;
    const towelBack=box(g,.43,.015,.76,.035,.77,-.58,towel);towelBack.rotation.x=.96;
    box(g,.43,.26,.012,.035,.32,.415,towel);
    for(let i=0;i<13;i++)branch(g,V(-.18+i*.034,.195,.421),V(-.177+i*.034,.16,.422),.003,cream,.002);
    collider(g);
  }
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
      const yy=topAt(zz,index)+warp+(top?.048:0);vertices.push(xx,yy,zz);
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
    const plank=mesh(boardGroup,boardGeometry(z,i,false),i%5===0?woodPale:i%7===0?woodDark:wood);plank.name='Boardwalk plank '+(i+1);
    planks.push({index:i,center:V(x,topY,z),width,depth:plankDepth,topY,underwater,warped:i===9||i===21});
    collider(plank);
    if(!underwater)mesh(boardSnow,boardGeometry(z,i,true),snowMat);
    for(const xx of [x-width/2+.14,x+width/2-.14])for(const zz of [z-.11,z+.11])nail(boardGroup,xx,topAt(zz,i)+.003,zz);
    if(i<30&&i%4===1){const wet=box(puddles,width*.58,.004,.09,x+.09,topY+.004,z+.035,waterMat);wet.rotation.x=-Math.atan2(topAt(z+.15,i)-topAt(z-.15,i),.3);}
  }
  // Short ground-following stringers terminate before the submerged boards.
  for(const xx of [x-.77,x+.77])for(let i=0;i<30;i++){
    const z=startZ+.16+i*.372;branch(boardGroup,V(xx,topAt(z,i)-.065,z),V(xx,topAt(z+.374,i)-.065,z+.374),.044,woodDark,.044);
  }
  const postZ=[startZ+1.25,startZ+5.8,endZ-.68];
  for(const side of [-1,1]){
    const xx=x+side*(width/2+.1),tops:T.Vector3[]=[];
    for(const z of postZ){
      const ground=terrainHeight(xx,z),top=ground+.82;tops.push(V(xx,top-.11,z));
      cyl(boardGroup,.06,.064,.91,xx,ground+.365,z,woodDark);
      cyl(boardGroup,.0605,.0645,.18,xx,ground+.045,z,wetWood);
      ring(boardGroup,.067,.012,xx,top-.11,z,ropeDark);cap(boardSnow,.105,.105,xx,top, z,.055);
      if(ground<SEA_LEVEL+.2){
        const wetHeight=T.MathUtils.clamp(SEA_LEVEL-ground,.045,.47);cyl(boardGroup,.061,.064,wetHeight,xx,ground+wetHeight/2,z,wetWood);
        for(let k=0;k<10;k++){const a=k*2.4;rounded(boardGroup,.016,xx+Math.sin(a)*.061,ground+.06+(k%5)*.041,z+Math.cos(a)*.061,shell,.85,1,.7);}
      }
      colliders.push(new T.Box3(V(xx-.064,ground-.09,z-.064),V(xx+.064,top,z+.064)));
    }
    for(let i=0;i<tops.length-1;i++){
      const a=tops[i],b=tops[i+1],mid=a.clone().lerp(b,.5);mid.y-=.29;
      tube(boardGroup,[a,mid,b],.019,rope,24);
      // Snow rests along the upward-facing rope ridge without wrapping its underside.
      tube(boardSnow,[a.clone().add(V(0,.027,0)),mid.clone().add(V(0,.027,0)),b.clone().add(V(0,.027,0))],.015,snowMat,24);
    }
    const end=tops[2];tube(boardGroup,[end,V(xx+side*.08,end.y-.15,end.z+.1),V(xx+side*.12,end.y-.32,end.z+.11)],.016,rope,14);fray(boardGroup,xx+side*.12,end.y-.32,end.z+.11);
  }
  // Two 150 mm stone risers form a small threshold at the dry land end.
  for(let i=0;i<2;i++){
    const z=startZ-.66+i*.36,base=terrainHeight(x,z),h=.15*(i+1);
    const step=box(boardGroup,2.48,h,.36,x,base+h/2,z,rockShade);cap(boardSnow,2.43,.32,x,base+h,z,.047);collider(step);
  }
  // A handful of shallow rain pools only on exposed sand, below the props.
  for(const [xx,zz,sx,sz] of [[-4.4,7.3,.4,.23],[2.2,9.2,.34,.23],[-6.2,12.8,.29,.16],[3.6,14.4,.23,.13]]){
    rounded(puddles,1,xx,terrainHeight(xx,zz)+.004,zz,waterMat,sx,.003,sz);
  }
  const start=V(x,topAt(startZ,0),startZ),end=V(x,topAt(endZ,32),endZ);
  consolidate(fixed);consolidate(snow);consolidate(puddles);
  fixed.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=true;o.receiveShadow=true;}});
  snow.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=true;o.receiveShadow=true;}});
  let currentWeather:Weather='sun';
  function update(_t:number,weather:Weather) {
    if(weather===currentWeather)return;currentWeather=weather;snow.visible=weather==='snow';puddles.visible=weather==='rain';
    for(const {m,color,roughness,amount} of wetMaterials){m.color.copy(color).multiplyScalar(weather==='rain'?amount:1);m.roughness=weather==='rain'?Math.max(.34,roughness*.67):roughness;}
  }
  return {root,update,boardwalk:{start,end,length,planks,topAtZ:boardwalkTopAtZ},colliders,diagnostics:()=>({
    weather:currentWeather,drawCalls:fixed.children.filter(o=>o instanceof T.Mesh).length+((snow.visible?snow:puddles).visible?(snow.visible?snow:puddles).children.filter(o=>o instanceof T.Mesh).length:0),
    objects:labels,boardwalk:{start:start.toArray(),end:end.toArray(),length,width,planks:planks.length,gap,shorelineZ,
      underwaterPlanks:planks.filter(p=>p.underwater).map(p=>p.index),warpedPlanks:planks.filter(p=>p.warped).map(p=>p.index),
      lastDryPlank:planks.filter(p=>!p.underwater).at(-1)?.center.toArray()},colliders:colliders.length,
    farBeachLargeProps:labels.filter(p=>p.zone==='far'&&!/stone|foliage/.test(p.name)).length,
    propsOutsideIsland:labels.filter(p=>islandRadius(p.x,p.z)>1).map(p=>p.name),snowDepth:[.04,.06]
  })};
}
