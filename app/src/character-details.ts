import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import type {Actor,buildWorld} from './world';

// Two identity-locked assets on the existing animation pivots. This module never
// moves an actor, changes a service route, or owns any story/save state.
const V=(x:number,y:number,z:number)=>new T.Vector3(x,y,z);
const group=(p:T.Object3D,name:string,x=0,y=0,z=0)=>{const g=new T.Group();g.name=name;g.position.set(x,y,z);p.add(g);return g};
const mat=(color:number,roughness=.72,metalness=0)=>new T.MeshStandardMaterial({color,roughness,metalness});
function mesh(p:T.Object3D,name:string,geo:T.BufferGeometry,m:T.Material,x=0,y=0,z=0){const o=new T.Mesh(geo,m);o.name=name;o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;p.add(o);return o}
function ell(p:T.Object3D,name:string,x:number,y:number,z:number,sx:number,sy:number,sz:number,m:T.Material){const o=mesh(p,name,new T.SphereGeometry(1,20,14),m,x,y,z);o.scale.set(sx,sy,sz);return o}
function round(p:T.Object3D,name:string,w:number,h:number,d:number,x:number,y:number,z:number,m:T.Material,r=.004){return mesh(p,name,new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/3,h/3,d/3)),m,x,y,z)}
function tube(p:T.Object3D,name:string,pts:T.Vector3[],r:number,m:T.Material){return mesh(p,name,new T.TubeGeometry(new T.CatmullRomCurve3(pts),20,r,7,false),m)}
function ring(p:T.Object3D,name:string,r:number,t:number,x:number,y:number,z:number,m:T.Material,rx=0){const o=mesh(p,name,new T.TorusGeometry(r,t,7,24),m,x,y,z);o.rotation.x=rx;return o}
function cyl(p:T.Object3D,name:string,rt:number,rb:number,h:number,x:number,y:number,z:number,m:T.Material){return mesh(p,name,new T.CylinderGeometry(rt,rb,h,18),m,x,y,z)}
function beam(p:T.Object3D,name:string,a:T.Vector3,b:T.Vector3,r:number,m:T.Material){const o=cyl(p,name,r,r,a.distanceTo(b),0,0,0,m);o.position.copy(a).add(b).multiplyScalar(.5);o.quaternion.setFromUnitVectors(V(0,1,0),b.clone().sub(a).normalize());return o}

// Closed swept strip with real edge thickness; straps have front, back and sides.
function ribbon(p:T.Object3D,name:string,pts:T.Vector3[],width:number,thickness:number,m:T.Material){
 const curve=new T.CatmullRomCurve3(pts),n=28,pos:number[]=[],uv:number[]=[],idx:number[]=[];
 for(let i=0;i<=n;i++){const c=curve.getPoint(i/n),t=curve.getTangent(i/n);let across=V(1,0,0).addScaledVector(t,-t.x).normalize();if(across.lengthSq()<.1)across=V(0,0,1);const normal=new T.Vector3().crossVectors(across,t).normalize();for(const [a,b] of [[-1,-1],[1,-1],[1,1],[-1,1]]){pos.push(...c.clone().addScaledVector(across,a*width/2).addScaledVector(normal,b*thickness/2).toArray());uv.push(a*.5+.5,i/n)}}
 for(let i=0;i<n;i++)for(let k=0;k<4;k++){const a=i*4+k,b=i*4+(k+1)%4;idx.push(a,b,b+4,a,b+4,a+4)}idx.push(0,2,1,0,3,2,n*4,n*4+1,n*4+2,n*4,n*4+2,n*4+3);
 const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(pos,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geo.setIndex(idx);geo.computeVertexNormals();return mesh(p,name,geo,m);
}
// Rounded tapered locks are solid 3D volumes with individually curved tips.
function lock(p:T.Object3D,name:string,pts:T.Vector3[],width:number,depth:number,m:T.Material,acrossHint?:T.Vector3){
 const c=new T.CatmullRomCurve3(pts),n=20,k=10,frames=c.computeFrenetFrames(n,false),pos:number[]=[],uv:number[]=[],idx:number[]=[];
 for(let i=0;i<=n;i++){const t=i/n,at=c.getPoint(t),f=(.36+.64*Math.sin(Math.PI*t))*(1-.92*Math.pow(t,5));for(let j=0;j<k;j++){const a=j/k*Math.PI*2,tangent=c.getTangent(t),across=acrossHint?acrossHint.clone().addScaledVector(tangent,-acrossHint.dot(tangent)).normalize():frames.normals[i],normal=acrossHint?new T.Vector3().crossVectors(tangent,across).normalize():frames.binormals[i];pos.push(...at.clone().addScaledVector(across,Math.cos(a)*width*f).addScaledVector(normal,Math.sin(a)*depth*f).toArray());uv.push(j/k,t)}}
 for(let i=0;i<n;i++)for(let j=0;j<k;j++){const a=i*k+j,b=i*k+(j+1)%k;idx.push(a,b,b+k,a,b+k,a+k)}
 const first=pos.length/3;pos.push(...c.getPoint(0).toArray(),...c.getPoint(1).toArray());uv.push(.5,0,.5,1);for(let j=0;j<k;j++)idx.push(first,(j+1)%k,j,first+1,n*k+j,n*k+(j+1)%k);
 const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(pos,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geo.setIndex(idx);geo.computeVertexNormals();return mesh(p,name,geo,m);
}
function textile(kind:'shirt'|'apron'|'oat'|'cloth'){
 const c=document.createElement('canvas');c.width=c.height=256;const ctx=c.getContext('2d')!;ctx.fillStyle='#fff';ctx.fillRect(0,0,256,256);
 for(let i=0;i<256;i+=kind==='apron'?6:4){ctx.fillStyle='rgba(89,75,56,.035)';ctx.fillRect(i,0,1,256);ctx.fillStyle='rgba(89,75,56,.025)';ctx.fillRect(0,i,256,1)}
 if(kind==='apron'||kind==='cloth')for(const [x,y,r] of [[76,176,16],[174,119,10],[116,212,7]]){ctx.fillStyle='rgba(161,115,77,.13)';ctx.beginPath();ctx.ellipse(x,y,r,r*.62,-.25,0,Math.PI*2);ctx.fill()}
 if(kind==='oat'){ctx.fillStyle='rgba(234,225,205,.2)';ctx.fillRect(16,5,224,32)}
 const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.anisotropy=4;return t;
}
function clothed(color:number,kind:'shirt'|'apron'|'oat'|'cloth',roughness:number){const t=textile(kind);return new T.MeshStandardMaterial({color,roughness,map:t,bumpMap:t,bumpScale:.0005})}
function patch(p:T.Object3D,name:string,x:number,y:number,w:number,h:number,skinZ:(x:number,y:number)=>number,m:T.Material){const nx=16,ny=16,pts:number[]=[],uv:number[]=[],idx:number[]=[];for(let j=0;j<=ny;j++)for(let i=0;i<=nx;i++){const xx=x+(i/nx-.5)*w,yy=y+(j/ny-.5)*h;pts.push(xx,yy,skinZ(xx,yy)+.0012);uv.push(i/nx,j/ny)}for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){const a=j*(nx+1)+i,b=a+nx+1;idx.push(a,a+1,b,a+1,b+1,b)}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return mesh(p,name,g,m)}
function paintMarks(kind:'wrinkles'|'blush'|'sideburn'){
 const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d')!;x.clearRect(0,0,256,256);x.lineCap='round';
 if(kind==='blush'){x.strokeStyle='#D9A08C';x.lineWidth=13;for(const yy of [99,143]){x.beginPath();x.moveTo(68,yy);x.quadraticCurveTo(124,yy+9,184,yy-6);x.stroke()}}
 else if(kind==='wrinkles'){x.strokeStyle='rgba(126,109,89,.32)';x.lineWidth=1.5;for(const y of [40,57]){x.beginPath();x.moveTo(93,y);x.quadraticCurveTo(128,y-6,165,y);x.stroke()}for(const side of [-1,1])for(const y of [132,146]){x.beginPath();x.moveTo(128+side*77,y);x.quadraticCurveTo(128+side*85,y+2,128+side*91,y+8);x.stroke()}}
 else{for(let i=0;i<45;i++){x.strokeStyle=`rgba(162,158,147,${.15+(i%4)*.12})`;x.lineWidth=2;x.beginPath();x.moveTo(20+(i*31)%220,50+(i*23)%150);x.lineTo(24+(i*31)%220,70+(i*23)%150);x.stroke()}}
 const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return new T.MeshStandardMaterial({map:t,transparent:true,opacity:kind==='blush'?.4:.7,roughness:.8,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
}
function morphMesh(p:T.Object3D,name:string,geos:T.BufferGeometry[],states:string[],m:T.Material){const g=geos[0];g.morphAttributes.position=geos.map((a,i)=>{const v=a.getAttribute('position').clone();v.name=states[i];return v});g.morphAttributes.normal=geos.map(a=>a.getAttribute('normal').clone());g.morphTargetsRelative=false;const o=mesh(p,name,g,m);o.updateMorphTargets();for(let i=1;i<geos.length;i++)geos[i].dispose();return o}
type Kind='ahe'|'lin';
function face(p:T.Group,kind:Kind){
 const old=kind==='lin',rx=old?.18:.202,ry=old?.207:.222,rz=old?.173:.19;
 const skin=mat(0xf0c9a8,.68),hair=mat(old?0xb9b6ac:0x6b5a4a,old?.55:.5),rootHair=mat(old?0xa29e93:0x8a7355,.72),ink=mat(0x4a4038,.8);
 const surface=(x:number,y:number)=>rz*Math.sqrt(Math.max(.02,1-x*x/(rx*rx)-y*y/(ry*ry)));
 const staticHead=group(p,'head-sculpt'),gaze=group(p,'expression-pivot');
 ell(staticHead,'round-skull',0,0,0,rx,ry,rz,skin);
 for(const side of [-1,1]){ell(staticHead,'ear-outer',side*(rx-.005),-.022,0,.027,old?.0475:.04,.027,skin);const inner=mat(0xd9a08c,.8);ell(staticHead,'ear-concha',side*(rx+.007),-.02,.019,.012,old?.028:.022,.006,inner)}
 const states=old?['neutral','concerned','silent']:['neutral','focused','surprised','smiling'];const meshes:T.Mesh[]=[];
 for(const side of [-1,1]){
  const x=side*(old?.065:.071),y=-.005,z=surface(x,y)+.002;
  const eyeStates=states.map(state=>{const g=new T.SphereGeometry(1,18,12);g.scale(.0145,state==='smiling'?.0162:.018,.008);g.translate(x,y+(state==='surprised'?.002:0),z);return g});meshes.push(morphMesh(gaze,'eye-dot-'+side,eyeStates,states,ink));
  const shine=new T.MeshBasicMaterial({color:0xfaf6eb});ell(gaze,'single-eye-catchlight',x-.0035,y+.005,z+.007,.003,.003,.002,shine);
  const browStates=states.map(state=>{const shift=state==='surprised'?.003:state==='silent'?-.002:0;const pts=[V(x-side*.019,.048+shift,0),V(x,.053+shift,0),V(x+side*.018,.047+shift+(state==='concerned'?.003:state==='focused'?-.002:0),0)];pts.forEach(v=>v.z=surface(v.x,v.y)+.002);if(state==='focused')pts[0].x+=side*.002;return new T.TubeGeometry(new T.CatmullRomCurve3(pts),12,.0035,6,false)});meshes.push(morphMesh(gaze,'eyebrow-'+side,browStates,states,hair));
 }
 const mouthStates=states.map(state=>{const y=old?-.099:-.104,w=.028,d=state==='smiling'?.007:state==='focused'?.002:state==='concerned'?.006:state==='silent'?.001:.004;const pts=Array.from({length:17},(_,i)=>{const f=i/16,x=state==='surprised'?Math.cos(f*Math.PI*2)*.004:(f-.5)*w*2,yy=state==='surprised'?y+Math.sin(f*Math.PI*2)*.004:y-Math.sin(f*Math.PI)*d;return V(x,yy,surface(x,yy)+.002)});return new T.TubeGeometry(new T.CatmullRomCurve3(pts),24,.0018,6,false)});meshes.push(morphMesh(gaze,'closed-mouth',mouthStates,states,ink));
 const blushMat=paintMarks('blush');for(const side of [-1,1])patch(gaze,'two-stroke-blush',side*(old?.108:.12),-.055,.048,.033,surface,blushMat);
 if(old){patch(staticHead,'painted-laugh-lines',0,.04,.32,.29,surface,paintMarks('wrinkles'));for(const side of [-1,1])patch(staticHead,'short-sideburn-alpha',side*.156,.08,.035,.07,surface,paintMarks('sideburn'))}
 return {staticHead,gaze,meshes,states,blushMat,hair,rootHair,skin,surface};
}
function collar(p:T.Group,old:boolean,shirt:T.Material,lining:T.Material){
 const y=old?.9:.905;for(const side of [-1,1]){
  const shape=new T.Shape();shape.moveTo(side*.015,.028);shape.lineTo(side*.073,.025);shape.lineTo(side*.092,-.025);shape.lineTo(side*.04,-.044);shape.closePath();
  const geo=new T.ExtrudeGeometry(shape,{depth:.003,bevelEnabled:true,bevelSegments:1,steps:1,bevelSize:.0007,bevelThickness:.0007});const g=group(p,'turned-collar-'+side,0,y,old?.14:.103);g.rotation.x=(old?-1:1)*.1396;mesh(g,'collar-lining',geo,lining);mesh(g,'collar-outer',geo.clone(),shirt,0,0,.003);
 }
}
function hand(p:T.Group,side:number,old:boolean,skin:T.Material){
 const center=V(side*.025,old?-.302:-.34,.025),geo=new T.SphereGeometry(1,24,18);geo.scale(.045,old?.046:.053,old?.0225:.021);
 const a=geo.getAttribute('position');for(let i=0;i<a.count;i++){const x=a.getX(i),y=a.getY(i),z=a.getZ(i);if(z>0&&y<-.004){let dip=0;for(const k of [-.022,0,.022])dip+=Math.exp(-Math.pow((x-k)/.0027,2));a.setZ(i,z-.004*dip*Math.min(1,(-y-.004)/.025))}}geo.computeVertexNormals();mesh(p,'mitten-three-recessed-grooves',geo,skin,...center.toArray() as [number,number,number]);
 const thumb=group(p,'opposable-thumb',center.x-side*.039,center.y+.014,center.z+.013);thumb.rotation.z=side*.3;ell(thumb,'thumb',0,0,0,.017,.028,.018,skin);return thumb;
}
function hollowPocket(p:T.Object3D,name:string,w:number,h:number,x:number,y:number,z:number,m:T.Material,dark:T.Material){
 const g=group(p,name,x,y,z);round(g,'pocket-dark-cavity',w-.012,h-.01,.003,0,0,.002,dark,.002);round(g,'pocket-front',w,h,.004,0,-.004,.012,m,.004);for(const s of [-1,1])round(g,'pocket-gusset',.004,h,.014,s*(w/2-.002),-.003,.006,m,.001);round(g,'pocket-bottom',w-.008,.004,.014,0,-h/2,.006,m,.001);round(g,'turned-open-pocket-lip',w,.006,.006,0,h/2-.003,.014,m,.002);return g;
}
function shoe(p:T.Group,shoeMat:T.Material,lining:T.Material,old:boolean){
 const y=old?-.46:-.447,z=old?.26:.04;
 round(p,'shoe-rubber-sole',.135,.018,.205,0,y-.037,z,mat(old?0x6b6b6b:0x4a4038),.008);round(p,'soft-dark-shoe',.13,.075,.20,0,y,z,shoeMat,.026);
 cyl(p,'sock-edge',.049,.048,.015,0,old?-.412:-.4055,old?.23:0,lining);
}
function aheHair(p:T.Group,hair:T.Material,under:T.Material){
 const all=group(p,'tousled-hair-12-locks');const cap=mesh(all,'warm-recessed-root-shell',new T.SphereGeometry(1,24,16,0,Math.PI*2,0,Math.PI*.54),hair,0,.022,-.014);cap.scale.set(.209,.221,.186);
 for(let i=0;i<9;i++){const a=.45+i/9*Math.PI*2,x=Math.sin(a),z=Math.cos(a);const pts=[V(-.015,.247,-.018),V(x*.10,.262,z*.09-.015),V(x*.201,.13,z*.171-.018),V(x*.237,.02+z*.05,z*.199-.018)];lock(all,'fluffy-lock-'+i,pts,.075,.031,hair);tube(all,'root-groove-'+i,[pts[0].clone().add(V(.004,-.008,0)),pts[1].clone().add(V(.004,-.01,0)),pts[2].clone().add(V(.004,-.006,0))],.002,under)}
 // Parting and nape flick remain visible when orbiting behind the counter.
 tube(all,'offset-left-parting',[V(-.015,.249,.055),V(-.015,.257,0),V(-.014,.242,-.07)],.002,under);
 lock(all,'untidy-nape-flick',[V(.04,.06,-.183),V(.045,-.05,-.193),V(.062,-.082,-.209)],.019,.012,hair);
 const bangs:T.Group[]=[];
 for(let i=0;i<3;i++){const x=-.13+i*.10,g=group(p,'secondary-bang-'+i,x,.20,.12);lock(g,'independent-fringe-lock',[V(0,0,0),V(.022,.012,.043),V(.018,-.084,.073),V(.035,-.111,.081)],.032,.023,hair);bangs.push(g)}
 return bangs;
}
function linHair(p:T.Group,hair:T.Material,root:T.Material,surface:(x:number,y:number)=>number){
 const cap=mesh(p,'close-swept-root-dome',new T.SphereGeometry(1,28,18,0,Math.PI*2,0,Math.PI*.53),root,0,.029,-.028);cap.scale.set(.184,.195,.168);
 for(let i=0;i<7;i++){const x=(i-3)*.046,f=Math.sqrt(1-x*x/(.188*.188));const pts=[.64,1.12,1.57,2.18,2.87].map(a=>V(x,.029+.202*f*Math.sin(a),-.028+.176*f*Math.cos(a)));lock(p,'swept-back-lock-'+i,pts,.026,.008,hair,V(1,0,0))}
 // Both halves keep all three solid strands at every distance: no impostor/LOD.
 const mustache=group(p,'independent-eight-shaped-mustache');
 const moustacheMat=(hair as T.MeshStandardMaterial).clone();moustacheMat.name='Lin silver mustache';moustacheMat.roughness=.7;
 for(const side of [-1,1])for(let j=0;j<3;j++){
  const xy=[[side*.009,-.055+j*.005],[side*.047,-.068+j*.002],[side*.085,-.105+j*.004],[side*.112,-.093+j*.004]];
  const pts=xy.map(([x,y],i)=>V(x,y,surface(x,y)+(i===0?-.002:.004+j*.001)));
  lock(mustache,'mustache-'+side+'-strand-'+j,pts,.0075,.0045,moustacheMat,V(0,1,0));
 }
 return mustache;
}
// Merge only a named static articulation. Facial morphs, bangs, the mustache,
// pocket props and thumb pivots remain individual editable meshes/anchors.
function batch(g:T.Group,exclude:string[]=[]){g.updateWorldMatrix(true,true);const inv=g.matrixWorld.clone().invert(),bins=new Map<T.Material,T.BufferGeometry[]>(),gone:T.Mesh[]=[];g.traverse(o=>{if(!(o instanceof T.Mesh))return;for(let a:T.Object3D|null=o;a&&a!==g;a=a.parent)if(exclude.some(name=>a!.name.includes(name)))return;const m=o.material as T.Material,geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(inv.clone().multiply(o.matrixWorld));if(!bins.has(m))bins.set(m,[]);bins.get(m)!.push(geo);gone.push(o)});for(const [m,geos] of bins){const merged=mergeGeometries(geos);if(merged)mesh(g,g.name+'-batch',merged,m);geos.forEach(v=>v.dispose())}gone.forEach(v=>v.removeFromParent())}
function build(a:Actor,kind:Kind){
 const old=kind==='lin';a.root.userData.identityLocked=true;
 // Keep all existing animation pivots and tool rigs; remove only old body skin.
 a.root.children.filter(c=>c instanceof T.Mesh).forEach(c=>c.removeFromParent());a.head.clear();a.head.scale.setScalar(1);
 for(const arm of [a.armL,a.armR])arm.children.filter(c=>c instanceof T.Mesh).forEach(c=>c.removeFromParent());
 const shirt=clothed(old?0xe8dfc9:0xf2ebdd,old?'oat':'shirt',old?.75:.72),lining=mat(0xf2ebdd,.75),shadow=mat(old?0xcfc6b0:0xdcd3c2,.8),brown=clothed(0x6b5a4a,'apron',.8),brass=mat(0xbfa46a,.3,1),shoeMat=mat(0x4a4038,.85),pants=mat(old?0xcfc6b0:0x6b5a4a,.82),skin=mat(0xf0c9a8,.68);
 const body=group(a.root,old?'lin-oatmeal-shirt':'ahe-cream-shirt');
 const torso=round(body,'soft-shirt-body',old?.405:.32,.405,old?.252:.22,0,.687,old?.028:0,shirt,.055);if(old)torso.rotation.x=.1396;
 cyl(body,'open-collar-neck',.055,.068,.105,0,.928,old?.052:.008,skin);collar(body,old,shirt,lining);
 // Fold volumes and low-contrast seams on both sides of the fully modeled body.
 for(const side of [-1,1]){
  tube(body,'side-seam-'+side,[V(side*(old?.198:.154),.51,.01),V(side*(old?.205:.162),.68,0),V(side*(old?.19:.15),.87,-.02)],.0015,shadow);
  for(let j=0;j<2;j++)lock(body,'soft-back-fold',[V(side*.06,.86,-.113),V(side*.11,.76-j*.035,-.122),V(side*.075,.67-j*.035,-.123)],.006,.003,shirt);
 }
 tube(body,'back-center-seam',[V(0,.87,-.126),V(0,.72,-.13),V(0,.53,-.133)],.0015,shadow);
 const hem=ring(body,'turned-hem-lining',old?.18:.143,.004,0,.497,old?.028:0,lining,Math.PI/2);hem.scale.y=old?.65:.72;
 for(const y of [.84,.765,.69,.615]){cyl(body,'small-wood-button',.006,.006,.003,0,y,old?.162:.116,old?mat(0x6b5a4a,.55):lining).rotation.x=Math.PI/2}
 if(old){round(body,'rear-hem-split-shadow',.004,.04,.003,0,.516,-.133,shadow,.001);for(const s of [-1,1])tube(body,'back-shoulder-dart',[V(s*.045,.86,-.123),V(s*.08,.77,-.135),V(s*.075,.7,-.13)],.0015,shadow);a.head.position.set(0,1.075,.048);a.armL.position.set(-.235,.85,.035);a.armR.position.set(.235,.85,.035)}
 const thumbs:T.Group[]=[];
 for(const [arm,side] of [[a.armL,-1],[a.armR,1]] as const){
  const sleeve=group(arm,'shirt-sleeve');cyl(sleeve,'sleeve-upper',old?.065:.061,.055,old?.27:.17,side*.015,old?-.12:-.075,0,shirt);
  if(!old){cyl(sleeve,'visible-forearm',.045,.041,.18,side*.025,-.25,.015,skin);for(let j=0;j<2;j++){const y=-.14+j*.02;const cuff=ring(sleeve,'double-roll-'+j,.058,.006,side*.015,y,0,j?shirt:lining,Math.PI/2);cuff.scale.z=.92;cyl(sleeve,'rolled-sleeve-fold-'+j,.061,.059,.014,side*.015,y,0,j?shirt:lining)}}
  else{cyl(sleeve,'wrist',.04,.041,.045,side*.025,-.267,.015,skin);cyl(sleeve,'closed-cuff',.058,.058,.033,side*.015,-.244,0,shirt);ring(sleeve,'cuff-lining',.054,.003,side*.015,-.26,0,lining,Math.PI/2);ell(sleeve,'wood-cuff-button',side*.067,-.24,.011,.007,.007,.003,mat(0x6b5a4a,.55))}
  for(let j=0;j<2;j++)tube(sleeve,'elbow-soft-fold',[V(side*.055,-.07-j*.04,-.028),V(side*.067,-.09-j*.04,-.013),V(side*.055,-.11-j*.04,.02)],.003,shirt);
  batch(sleeve);thumbs.push(hand(arm,side,old,skin));
 }
 for(const leg of [a.legL,a.legR]){
  leg.clear();leg.rotation.set(0,0,0);
  if(old){beam(leg,'seated-thigh',V(0,0,0),V(0,-.015,.23),.062,pants);beam(leg,'bent-knee-calf',V(0,-.015,.23),V(0,-.46,.23),.048,pants)}else{cyl(leg,'trouser',.063,.051,.415,0,-.1925,0,pants);tube(leg,'trouser-side-seam',[V(.056,-.01,0),V(.057,-.18,.001),V(.049,-.32,.001)],.0015,brown)}
  shoe(leg,shoeMat,lining,old);batch(leg);
 }
 const anchors:T.Group[]=[];
 if(!old){
  const apron=group(a.root,'independent-dark-brown-apron');round(apron,'square-bib-and-hip-front',.272,.34,.008,0,.64,.127,brown,.004);
  // Cross in front, then continue over both shoulders to the back buckle.
  for(const side of [-1,1])ribbon(apron,'crossed-strap-'+side,[V(side*.104,.79,.137),V(-side*.035,.845,.144+(side<0?.004:0)),V(-side*.117,.916,.123),V(-side*.14,.956,.015),V(-side*.125,.903,-.105),V(0,.765,-.131),V(side*.143,.65,-.12),V(side*.167,.595,-.04)],.045,.004,brown);
  const outline=(w:number,d:number,r:number)=>{const q=new T.Shape(),x=w/2,z=d/2;q.moveTo(-x+r,-z);q.lineTo(x-r,-z);q.quadraticCurveTo(x,-z,x,-z+r);q.lineTo(x,z-r);q.quadraticCurveTo(x,z,x-r,z);q.lineTo(-x+r,z);q.quadraticCurveTo(-x,z,-x,z-r);q.lineTo(-x,-z+r);q.quadraticCurveTo(-x,-z,-x+r,-z);return q};
  const belt=outline(.34,.246,.045);belt.holes.push(outline(.332,.238,.041));const waist=mesh(apron,'continuous-waist-belt',new T.ExtrudeGeometry(belt,{depth:.02,bevelEnabled:false,curveSegments:6}),brown,0,.605,0);waist.rotation.x=Math.PI/2;
  const buckle=group(apron,'back-brass-slider',0,.766,-.14);round(buckle,'slider-left',.002,.01,.002,-.003,0,0,brass,.0005);round(buckle,'slider-right',.002,.01,.002,.003,0,0,brass,.0005);for(const y of [-.005,0,.005])round(buckle,'slider-rung',.008,.0015,.002,0,y,0,brass,.0004);
  const side=group(apron,'side-waist-pin-buckle',.173,.596,.01);ring(side,'buckle-frame',.009,.0015,0,0,0,brass).rotation.y=Math.PI/2;beam(side,'buckle-pin',V(0,-.008,0),V(0,.008,0),.001,brass);
  const pocket=hollowPocket(apron,'open-apron-patch-pocket',.12,.10,0,.605,.133,brown,mat(0x4a4038));
  const cloth=group(pocket,'cloth-attachment',-.022,.05,.011);ribbon(cloth,'two-mm-folded-wiping-cloth',[V(0,-.045,-.007),V(0,.025,-.004),V(.003,.036,.012),V(.003,.012,.026),V(.008,-.063,.03),V(.012,-.092,.039)],.045,.002,clothed(0xf2ebdd,'cloth',.72));anchors.push(cloth);
  const thermometer=group(pocket,'thermometer-attachment',.035,.012,.008);thermometer.rotation.z=-.12;cyl(thermometer,'brass-thermometer-stem',.0025,.0025,.13,0,.04,0,brass);ring(thermometer,'thermometer-top-loop',.006,.0012,0,.117,0,brass);cyl(thermometer,'thermometer-dial-case',.011,.011,.004,0,.103,.004,brass).rotation.x=Math.PI/2;const face=mat(0xf2ebdd,.6);cyl(thermometer,'blank-thermometer-face',.009,.009,.001,0,.103,.0065,face).rotation.x=Math.PI/2;anchors.push(thermometer);
 }else{
  const pocket=hollowPocket(body,'left-chest-pocket',.07,.06,-.105,.756,.169,shirt,shadow);pocket.rotation.x=.1396;
  const pen=group(pocket,'wood-pen-attachment',-.014,.015,.007);cyl(pen,'wooden-round-pen',.004,.004,.09,0,.03,0,mat(0x6b5a4a,.55));ribbon(pen,'only-metal-brass-pen-clip',[V(.002,.066,.003),V(.007,.066,.005),V(.007,.026,.006)],.003,.001,brass);anchors.push(pen);
  const neckMarks=paintMarks('wrinkles');patch(body,'neck-painted-age-lines',0,.921,.085,.045,()=>.1,neckMarks);
 }
 // Place rear seams/folds on the tilted shirt surface, not on a floating back plane.
 if(old)body.traverse(o=>{if(!(o instanceof T.Mesh)||!(/back|rear-hem/.test(o.name)))return;const pos=o.geometry.getAttribute('position');for(let i=0;i<pos.count;i++){const y=pos.getY(i)+o.position.y,z=pos.getZ(i)+o.position.z;const back=.028+Math.tan(.1396)*(y-.687)-.126/Math.cos(.1396);pos.setZ(i,back-.002+(z+.128)*.3-o.position.z)}pos.needsUpdate=true;o.geometry.computeVertexNormals()});
 // Static body is intentionally kept separate from pockets/attachments for editing.
 const visual=group(a.head,kind+'-identity-head');const f=face(visual,kind),bangs=old?[]:aheHair(f.staticHead,f.hair,f.rootHair);let mustache:T.Group|undefined;
 if(old)mustache=linHair(f.staticHead,f.hair,f.rootHair,f.surface);
 batch(body,['pocket','attachment']);batch(f.staticHead,['mustache','secondary-bang']);
 const weights:number[]=f.states.map((_,i)=>i?0:1);let current=f.states[0],talkStarted=-100,last=0;
 let conversation=false;
 return {actor:a,kind,visual,bangs,anchors,mustache,face:f,
  conversation(active:boolean,t:number){if(active&&!conversation)talkStarted=t;conversation=active},
  update(t:number,order:number){const dt=Math.min(.05,Math.max(0,t-last));last=t;current=old?(conversation?'concerned':t%15>10?'silent':'neutral'):(conversation?(t-talkStarted<.65?'surprised':'smiling'):order>0?'focused':t%14>11?'smiling':'neutral');
   weights.forEach((v,i)=>weights[i]=T.MathUtils.damp(v,f.states[i]===current?1:0,10,dt));for(const m of f.meshes)m.morphTargetInfluences!.splice(0,weights.length,...weights);
   f.blushMat.opacity=old?.4:.4+(weights[3]||0)*.15;visual.rotation.x=old?.1047+(weights[2]||0)*.0873:(weights[1]||0)*.03;
   bangs.forEach((b,i)=>{b.rotation.x=Math.sin(t*2.1+i)*.018+a.head.rotation.x*.12;b.rotation.z=Math.sin(t*1.6+i*.9)*.02});
   thumbs.forEach((thumb,i)=>thumb.rotation.z=(i?1:-1)*(.3+(old?.04*Math.sin(t*.57):.06*Math.sin(t*.7))));
  },diagnostics:()=>({kind,expression:current,weights:Object.fromEntries(f.states.map((s,i)=>[s,weights[i]])),morphMeshes:f.meshes.length,hairLocks:old?7:12,secondaryBangs:bangs.length,mustacheStrands:mustache?.children.length||0,accessories:anchors.map(g=>g.name),identityLocked:a.root.userData.identityLocked,palette:{hair:old?'#B9B6AC':'#6B5A4A',shirt:old?'#E8DFC9':'#F2EBDD',apron:old?null:'#6B5A4A'},position:a.root.position.toArray()})};
}
export function createCharacterDetails(world:ReturnType<typeof buildWorld>){
 const ahe=build(world.actors[0],'ahe'),lin=build(world.actors[1],'lin');let lastTime=0;
 return {ahe,lin,conversation(name:string|null){ahe.conversation(name==='阿禾',lastTime);lin.conversation(name==='林伯',lastTime)},update(t:number,order:number){lastTime=t;if(!world.actors[0].root.userData.suppliedAsset)ahe.update(t,order);lin.update(t,order)},diagnostics:()=>({ahe:ahe.diagnostics(),lin:lin.diagnostics()})};
}
