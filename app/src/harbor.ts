import * as T from 'three';
import {V,group,mesh,box,cyl,ball,branch,material,consolidate} from './winter-geometry';
import {terrainHeight,SEA_LEVEL} from './island-geography';
import {boardwalkTopAtZ,BOARD_X,BOARD_LAYOUT} from './island-props';
/** Two quiet moored launches. The existing visitor boat and its route are untouched. */
export function createHarbor(scene:T.Scene,surfaceAt:(x:number,z:number,t:number)=>number,mobile:boolean){
 const cream=material('#EFECE1',.7),wood=material('#B8AE98',.88),dark=material('#65746C',.85),rope=material('#B8AA90',.96),cushion=material('#E2DBCB',.98),paint=material('#8BACA5',.85),rosePaint=material('#B1958D',.85),brass=material('#A99A71',.62,.45),snowMat=material('#DDE3E2',.96);
 const prototype=new T.Group(),winter=new T.Group();
 const shape=new T.Shape();shape.moveTo(-.64,-2.15);shape.lineTo(.64,-2.15);shape.bezierCurveTo(.78,-2.15,.8,-1.8,.8,-1.4);shape.lineTo(.8,1.0);shape.bezierCurveTo(.8,1.75,.3,2.15,0,2.2);shape.bezierCurveTo(-.3,2.15,-.8,1.75,-.8,1.0);shape.lineTo(-.8,-1.4);shape.bezierCurveTo(-.8,-1.8,-.78,-2.15,-.64,-2.15);
 const ring=shape.getSpacedPoints(mobile?36:52).slice(0,-1);
 function strip(y0:number,s0:number,y1:number,s1:number,m:T.Material){const ps:number[]=[],ix:number[]=[];for(const q of ring)ps.push(q.x*s0,y0,q.y*s0,q.x*s1,y1,q.y*s1);for(let i=0;i<ring.length;i++){const a=2*i,b=2*((i+1)%ring.length);ix.push(a,a+1,b,b,a+1,b+1)}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(ps,3));g.setIndex(ix);g.computeVertexNormals();g.setAttribute('uv',new T.Float32BufferAttribute(new Float32Array(ps.length/3*2),2));mesh(prototype,g,m)}
 strip(-.13,.72,.12,.95,dark);strip(.12,.95,.58,1,cream);strip(.58,1,.58,.86,wood);strip(.58,.86,.09,.73,cream);
 const floor=new T.ExtrudeGeometry(new T.Shape(ring.map(q=>q.clone().multiplyScalar(.73))),{depth:.05,bevelEnabled:false});floor.rotateX(Math.PI/2);floor.translate(0,.09,0);mesh(prototype,floor,wood);const bottom=floor.clone();bottom.translate(0,-.22,0);mesh(prototype,bottom,cream);
 // Small wave motifs painted into the white hull, not commercial labels.
 for(const side of [-1,1])for(let i=0;i<15;i++){const z=-1.6+i*.17,y=.29+Math.sin(z*4)*.035;const p=ball(prototype,.034,side*.792,y,z,paint);p.scale.set(.18,.62,1.6)}
 for(const z of [-1.18,.1,1.10]){const w=z>1?.85:1.24;box(prototype,w,.08,.45,0,.24,z,wood);box(prototype,w-.08,.10,.39,0,.33,z,cushion);box(winter,w-.07,.035,.4,0,.398,z,snowMat)}
 for(let i=0;i<ring.length;i++){const a=ring[i],b=ring[(i+1)%ring.length];branch(prototype,V(a.x,.59,a.y),V(b.x,.59,b.y),.032,wood,.032);branch(winter,V(a.x,.616,a.y),V(b.x,.616,b.y),.022,snowMat,.022)}
 const windscreen=group(prototype,0,.61,-.65);box(windscreen,.82,.34,.035,0,.11,0,new T.MeshStandardMaterial({color:'#C2D2CB',roughness:.32,transparent:true,opacity:.3,depthWrite:false}));for(const x of [-.42,.42])branch(windscreen,V(x,-.05,0),V(x,.29,0),.016,brass,.016);
 box(prototype,.35,.35,.34,0,.32,-2.17,dark);cyl(prototype,.03,.04,.40,0,-.02,-2.21,brass);
 for(const side of [-1,1])for(const z of [-1.35,.75]){cyl(prototype,.075,.075,.28,side*.85,.28,z,cream);branch(prototype,V(side*.77,.6,z),V(side*.85,.39,z),.009,rope,.009)}
 const life=mesh(prototype,new T.TorusGeometry(.17,.043,6,20),cream,-.83,.32,-.7);life.rotation.y=Math.PI/2;
 for(const z of [-1.65,1.4]){cyl(prototype,.025,.025,.07,.57,.63,z,brass);branch(prototype,V(.50,.67,z),V(.65,.67,z),.018,brass,.018)}
 consolidate(prototype);consolidate(winter);
 const fixed=group(scene),winterFixed=group(scene);const berths=[{x:-9,z:15.65,yaw:1.45,scale:1,postX:-7.2,postZ:13.8},{x:-15,z:19.6,yaw:1.30,scale:.9,postX:-13.2,postZ:17.5}];
 const boats=berths.map((b,i)=>{const root=group(scene,b.x,SEA_LEVEL,b.z);root.name='Moored launch '+i;root.rotation.order='YXZ';root.rotation.y=b.yaw;root.scale.setScalar(b.scale);const body=prototype.clone(true);if(i===1)body.traverse(o=>{if(o instanceof T.Mesh&&o.material===paint)o.material=rosePaint});root.add(body);const snow=winter.clone(true);root.add(snow);snow.visible=false;
  const bed=terrainHeight(b.postX,b.postZ),top=.80;const post=cyl(fixed,.085,.11,top-bed,b.postX,(bed+top)/2,b.postZ,wood);post.name='Harbor shore mooring post';cyl(fixed,.089,.099,.07,b.postX,SEA_LEVEL+.03,b.postZ,dark);cyl(winterFixed,.096,.096,.04,b.postX,top+.02,b.postZ,snowMat);
  for(let j=0;j<3;j++){const coil=mesh(fixed,new T.TorusGeometry(.097,.012,5,16),rope,b.postX,top-.13+j*.03,b.postZ);coil.rotation.x=Math.PI/2}
  const lines=[-1.65,1.4].map(z=>{const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(new Float32Array(13*3),3));const line=new T.Line(geometry,new T.LineBasicMaterial({color:'#B8AA90'}));scene.add(line);return {line,local:V(.57,.66,z),end:V(b.postX,top-.07,b.postZ),positions:geometry.attributes.position as T.BufferAttribute}});
  return {root,snow,lines,berth:b,phase:i*2.1};});
 // Two narrow, piled fingers leave the central arrival lane open.
 const fingers=berths.map(b=>({from:V(BOARD_X,.08,b.postZ),to:V(b.postX,.08,b.postZ)}));
 for(const {from,to} of fingers){
  const count=Math.ceil((from.x-to.x)/.34),step=(from.x-to.x)/count;
  for(let i=0;i<count;i++){const x=from.x-(i+.5)*step;box(fixed,step-.012,.065,1,x,.0475,from.z,wood);box(winterFixed,step-.014,.045,.98,x,.1025,from.z,snowMat)}
  for(let x=to.x;x<from.x-.5;x+=1.3)for(const side of [-1,1]){const z=from.z+side*.39,bed=terrainHeight(x,z)-.12; cyl(fixed,.065,.085,.03-bed,x,(bed+.03)/2,z,wood);branch(fixed,V(x,-.015,z),V(Math.min(x+1.3,from.x),-.015,z),.045,dark,.045)}
  // Rail only on the outer side; the boat-facing edge remains an unobstructed landing.
  for(let x=to.x;x<from.x-1.3;x+=1.3){branch(fixed,V(x,.08,from.z-.48),V(x,.72,from.z-.48),.03,wood,.03);branch(fixed,V(x,.72,from.z-.48),V(Math.min(x+1.3,from.x-1.3),.72,from.z-.48),.022,wood,.022)}
 }
 const landing=BOARD_LAYOUT.landingZ,deck=boardwalkTopAtZ(landing,'sun');
 for(const z of [landing-.4,landing+.4]){const y=boardwalkTopAtZ(z,'sun');branch(fixed,V(BOARD_X-1.17,y+.04,z),V(BOARD_X-1.17,y+.28,z),.035,brass,.035);branch(fixed,V(BOARD_X-1.29,y+.26,z),V(BOARD_X-1.05,y+.26,z),.024,brass,.024);cyl(fixed,.12,.12,.4,BOARD_X-1.30,y-.14,z,dark)}
 const ringLife=mesh(fixed,new T.TorusGeometry(.23,.055,7,28),material('#BD7862',.92),BOARD_X-1.27,deck+.32,landing);ringLife.rotation.y=Math.PI/2;
 consolidate(fixed);consolidate(winterFixed);
 let tide=0;
 function update(t:number,state:'sun'|'rain'|'snow',tideLevel:number){tide=tideLevel;winterFixed.visible=state==='snow';wood.color.set(state==='rain'?'#9C978B':'#B8AE98');wood.roughness=state==='rain'?.55:.88;cream.roughness=state==='rain'?.5:.7;for(const b of boats){const {x,z,yaw}=b.berth;const a=surfaceAt(x-Math.sin(yaw)*1.5,z-Math.cos(yaw)*1.5,t),c=surfaceAt(x+Math.sin(yaw)*1.5,z+Math.cos(yaw)*1.5,t);b.root.position.y=(a+c)/2+.012*Math.sin(t*.7+b.phase);b.root.rotation.set(T.MathUtils.clamp(-Math.atan2(c-a,3),-.025,.025),yaw,Math.sin(t*.52+b.phase)*.018,'YXZ');b.root.updateMatrixWorld(true);b.snow.visible=state==='snow';for(const l of b.lines){const a=l.local.clone().applyMatrix4(b.root.matrixWorld);for(let i=0;i<13;i++){const f=i/12,q=a.clone().lerp(l.end,f);q.y-=Math.sin(f*Math.PI)*.18;l.positions.setXYZ(i,q.x,q.y,q.z)}l.positions.needsUpdate=true;l.line.geometry.computeBoundingSphere()}}}
 return {boatRoots:boats.map(b=>b.root),update,diagnostics:()=>({boatCount:3,fingers:fingers.map(f=>({from:f.from.toArray(),to:f.to.toArray()})),additionalBoats:boats.map(b=>({position:b.root.position.toArray(),rotation:b.root.rotation.toArray(),scale:b.berth.scale,berth:b.berth,snow:b.snow.visible,bounds:(()=>{const box=new T.Box3().setFromObject(b.root);return {min:box.min.toArray(),max:box.max.toArray()}})(),ropes:b.lines.map(l=>({from:Array.from(l.positions.array).slice(0,3),to:l.end.toArray()}))})),sharedGeometry:true,additionalLights:0,additionalReflections:0,tide})};
}
