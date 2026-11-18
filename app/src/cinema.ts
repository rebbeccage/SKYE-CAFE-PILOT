import * as T from 'three';
import {V,group,box,cyl,ball,branch,material,consolidate,mesh} from './winter-geometry';
import {beachGround} from './beach-ground';
/** Environmental adapter only. No rewards, inventory, NPC or persistent state. */
export function createCinema(scene:T.Scene){
 const mobile=matchMedia('(max-width:600px)').matches,root=group(scene);root.name='Garden open-air cinema';
 const fixed=group(root),soft=group(root),equipment=group(root),snow=group(root),lamps=group(root);
 const wood=material('#A87543'),pale=material('#d6bc94'),cream=material('#F3E8D2'),sage=material('#8FA184'),blue=material('#7896A1'),red=material('#B65F58'),brass=material('#B7924E',.65,.35),dark=material('#665b49'),white=material('#DDE3E2');
 const wetMaterials=[wood,pale,cream,sage,blue,red],colors=wetMaterials.map(m=>m.color.clone());
 const light=new T.MeshStandardMaterial({color:'#E7B968',emissive:'#E7B968',emissiveIntensity:0,roughness:.8});
 const placements:{name:string;x:number;y:number;z:number}[]=[],colliders:T.Box3[]=[];
 const put=(p:T.Group,name:string,x:number,z:number)=>{const y=beachGround(x,z),g=group(p,x,y,z);g.name=name;placements.push({name,x,y,z});return g};
 const sx=-17,sz=9,sy=beachGround(sx,sz),top=sy+2.55;
 // Two narrow posts and a real roll. The existing two chairs, parasol and table remain untouched.
 for(const x of [sx-1.48,sx+1.48]){const y=beachGround(x,sz);box(fixed,.095,top-y+.13,.095,x,(top+y)/2,sz,wood);box(fixed,.24,.055,.24,x,y+.027,sz,pale);colliders.push(new T.Box3(V(x-.12,y,sz-.12),V(x+.12,top+.1,sz+.12)));for(const h of [.36,2.3])cyl(fixed,.022,.022,.105,x,y+h,sz,brass);}
 branch(fixed,V(sx-1.46,top,sz),V(sx+1.46,top,sz),.075,cream,.075);
 for(const x of [sx-1.44,sx+1.44])branch(fixed,V(x,top-.08,sz),V(x,top-.55,sz),.007,dark,.007);
 const canvas=document.createElement('canvas');canvas.width=512;canvas.height=320;const ctx=canvas.getContext('2d')!,texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
 const film=new T.MeshStandardMaterial({map:texture,roughness:1,side:T.DoubleSide,emissive:'#c4b5a3',emissiveMap:texture,emissiveIntensity:.15});
 const curtain=group(root,sx,top-.075,sz);const surface=mesh(curtain,new T.PlaneGeometry(2.68,1.68,24,12),film,0,-.84,-.01);
 const pos=surface.geometry.attributes.position;for(let i=0;i<pos.count;i++)pos.setZ(i,Math.sin(pos.getX(i)*8)*.006);surface.geometry.computeVertexNormals();
 // Opaque canvas backing, physical bottom rail; only the front receives projection.
 box(curtain,2.68,1.68,.009,0,-.84,.01,cream);branch(curtain,V(-1.36,-1.68,0),V(1.36,-1.68,0),.025,pale,.025);
 colliders.push(new T.Box3(V(sx-1.36,top-1.76,sz-.04),V(sx+1.36,top,sz+.04)));
 const chair=put(fixed,'Added striped lounger',-18,5.8);chair.rotation.y=.28;
 const foot=(x:number,z:number)=>{const yaw=chair.rotation.y;return beachGround(chair.position.x+Math.cos(yaw)*x+Math.sin(yaw)*z,chair.position.z-Math.sin(yaw)*x+Math.cos(yaw)*z)-chair.position.y};
 const stripe=material('#ad7c70');for(const x of [-.36,.36]){branch(chair,V(x,foot(x,-.66),-.66),V(x,.68,.38),.025,wood,.025);branch(chair,V(x,foot(x,.65),.65),V(x,.48,-.38),.025,wood,.025);branch(chair,V(x,.43,-.36),V(x,1.08,-.82),.025,pale,.025);box(chair,.08,.03,.65,x,.64,-.04,pale)}
 box(chair,.65,.025,.75,0,.44,.02,cream);const back=box(chair,.65,.022,.86,0,.75,-.59,cream);back.rotation.x=.96;
 for(const x of [-.22,0,.22]){box(chair,.055,.004,.73,x,.455,.02,stripe);const b=box(chair,.055,.004,.84,x,.763,-.587,stripe);b.rotation.x=.96;}
 const cap=put(snow,'Added chair snow',-18,5.8);cap.rotation.y=.28;box(cap,.62,.035,.71,0,.47,.02,white);const bs=box(cap,.62,.03,.82,0,.77,-.58,white);bs.rotation.x=.96;
 // Three low cushions + three chairs = six seats. Leave the eastern access aisle empty.
 for(const [i,x,z]of [[0,-18.2,7.65],[1,-17.2,7.65],[2,-16.2,8.3]]){const g=put(soft,'Low linen cushion',x,z);g.rotation.y=(i-1)*.15;const o=ball(g,.33,0,.11,0,[sage,blue,red][i]);o.scale.set(1.2,.34,1);cyl(g,.023,.023,.005,0,.222,0,cream);}
 const blanket=put(soft,'Folded picnic linen',-18.7,6.8);blanket.rotation.y=.12;for(let i=0;i<3;i++)box(blanket,.65,.025,.44,0,.025+i*.025,0,cream);for(const x of [-.2,.2])box(blanket,.035,.003,.43,x,.09,0,blue);
 const crate=put(fixed,'Projector weatherproof crate',-17.2,4.7);box(crate,.56,.4,.4,0,.2,0,wood);for(const h of [.07,.2,.33])box(crate,.57,.015,.41,0,h,0,pale);box(crate,.6,.04,.43,0,.42,0,pale);colliders.push(new T.Box3(V(-17.51,crate.position.y,4.45),V(-16.89,crate.position.y+.9,4.95)));
 const projector=put(equipment,'Vintage cream projector',-17.2,4.7);box(projector,.43,.28,.28,0,.59,0,cream);for(const x of [-.13,.13])box(projector,.04,.06,.22,x,.46,0,dark);for(let i=0;i<5;i++)box(projector,.006,.08,.105,-.218,.6,-.08+i*.031,dark);
 const lens=branch(projector,V(0,.6,.12),V(0,.6,.24),.06,brass,.055);ball(projector,.042,0,.6,.245,light);box(projector,.16,.018,.04,0,.76,0,brass);
 for(const x of [-.13,.13]){const reel=cyl(projector,.10,.10,.022,x,.84,-.01,dark);reel.rotation.x=Math.PI/2;ball(projector,.018,x,.84,-.026,brass)}
 void lens;
 const table=put(fixed,'Cinema drinks and lantern',-19,6.5);cyl(table,.34,.32,.055,0,.51,0,pale);for(const x of [-.22,.22])for(const z of [-.18,.18])branch(table,V(x,beachGround(table.position.x+x,table.position.z+z)-table.position.y,z),V(x,.49,z),.023,wood,.02);
 for(const x of [-.14,.10]){cyl(table,.045,.034,.09,x,.583,-.08,cream);cyl(table,.037,.037,.003,x,.63,-.08,dark);ball(table,.016,x+.05,.59,-.08,brass)}
 const snacks=put(soft,'Paper bag of popcorn',-19,6.5);box(snacks,.13,.16,.12,.02,.62,.14,cream);for(let i=0;i<8;i++)ball(snacks,.025,.02+Math.sin(i*2)*.045,.71+(i%2)*.01,.14+Math.cos(i*2)*.04,pale);
 function lantern(x:number,z:number,h:number,base=beachGround(x,z)){cyl(fixed,.07,.08,.035,x,base+.02,z,brass);cyl(fixed,.018,.022,h*.65,x,base+h*.32,z,dark);cyl(lamps,.046,.046,.10,x,base+h*.75,z,light);cyl(fixed,.08,.045,.06,x,base+h*.91,z,brass)}
 lantern(-18.84,6.62,.22,table.position.y+.54);lantern(-19.7,5.2,.52);lantern(-15.6,8.9,.52);
 const gardenPost=V(-7.4,2.02,-2.95);
 for(const [a,b]of [[V(sx-1.48,top+.08,sz),V(sx+1.48,top+.08,sz)],[V(sx+1.48,top+.08,sz),gardenPost]]){const length=a.distanceTo(b),n=Math.ceil(length/(mobile?.9:.55));for(let i=0;i<n;i++){const at=(f:number)=>a.clone().lerp(b,f).add(V(0,-Math.sin(f*Math.PI)*.20,0));branch(fixed,at(i/n),at((i+1)/n),.005,dark,.005);if(i>0){const p=at(i/n);ball(lamps,.022,p.x,p.y-.055,p.z,i%7===0?cream:light);branch(fixed,p,p.clone().add(V(0,-.04,0)),.004,dark,.004)}}}
 for(const [i,x,z]of [[0,-18.8,8.35],[1,-15.7,9.05]]){const g=put(fixed,'Small flowering terracotta pot',x,z),pot=material('#b58f76');cyl(g,.17,.12,.29,0,.145,0,pot);cyl(g,.15,.15,.02,0,.29,0,dark);for(let j=0;j<7;j++){const x=Math.sin(j*2.4)*.13,z=Math.cos(j*2.4)*.13,y=.43+(j%3)*.07;branch(g,V(x,.28,z),V(x,y,z),.008,sage);const bloom=ball(g,.055,x,y,z,i?blue:cream);bloom.scale.y=.65;ball(g,.016,x,y+.02,z,pale)}}
 // A single, very faint beam, depth-tested and disabled at distance. No reflection pass/light.
 const origin=V(-17.2,crate.position.y+.6,4.945),target=V(sx,top-.85,sz-.035),beamGeo=new T.BufferGeometry();const verts:number[]=[];
 const corners=[V(sx-1.25,top-.08,sz-.04),V(sx+1.25,top-.08,sz-.04),V(sx+1.25,top-1.62,sz-.04),V(sx-1.25,top-1.62,sz-.04)];for(let i=0;i<4;i++){verts.push(...origin.toArray(),...corners[i].toArray(),...corners[(i+1)%4].toArray())}beamGeo.setAttribute('position',new T.Float32BufferAttribute(verts,3));beamGeo.computeVertexNormals();
 const beam=mesh(root,beamGeo,new T.MeshBasicMaterial({color:'#E7B968',transparent:true,opacity:.018,side:T.DoubleSide,depthWrite:false}));beam.renderOrder=1;
 for(const g of [fixed,soft,equipment,snow,lamps])consolidate(g);
 const point=V(sx,sy+1.25,sz),hit=new T.Mesh(new T.BoxGeometry(2.8,2.4,.3),new T.MeshBasicMaterial({visible:false}));hit.position.copy(point);hit.userData.hit='cinema';root.add(hit);
 for(const bounds of colliders){const proxy=new T.Mesh(new T.BoxGeometry(...bounds.getSize(V(0,0,0)).toArray() as [number,number,number]),new T.MeshBasicMaterial({visible:false}));proxy.position.copy(bounds.getCenter(V(0,0,0)));proxy.userData.collision=true;proxy.name='Cinema static collision proxy';root.add(proxy)}
 let open=0,available=false,lastFrame=-1,filmMode=false,currentWeather='sun';
 function paint(t:number,watching:boolean){
  const w=512,h=320;ctx.fillStyle=watching?'#bcbcaf':'#d9b6aa';ctx.fillRect(0,0,w,h);const grad=ctx.createLinearGradient(0,0,0,h);grad.addColorStop(0,watching?'#7b8383':'#9298b3');grad.addColorStop(.6,watching?'#bfc0b3':'#cfaaad');grad.addColorStop(1,watching?'#a2aaa2':'#e3c4aa');ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
  // Original paper-cut landscape: clouds, waves and a tiny sailing boat, no sourced film.
  ctx.save();ctx.shadowColor=watching?"#a9b2aa":"#cfaaad";ctx.shadowBlur=9;for(let k=0;k<6;k++){ctx.fillStyle=watching?'rgba(211,213,201,.23)':'rgba(238,201,181,.25)';ctx.beginPath();ctx.ellipse(50+k*90+Math.sin(t*.08+k)*15,50+k%3*28,70,17,0,0,7);ctx.fill()}ctx.restore();
  for(let k=0;k<5;k++){ctx.fillStyle=watching?`rgba(57,76,72,${.09+k*.02})`:`rgba(83,120,129,${.12+k*.015})`;ctx.beginPath();ctx.moveTo(0,h);for(let x=0;x<=w;x+=8)ctx.lineTo(x,190+k*19+Math.sin(x*.016+t*.2+k)*7);ctx.lineTo(w,h);ctx.fill()}
  if(watching){const x=240+Math.sin(t*.14)*70,y=224+Math.sin(t*.4)*3;ctx.fillStyle='#565e5c';ctx.beginPath();ctx.moveTo(x-27,y);ctx.lineTo(x+28,y);ctx.lineTo(x+14,y+10);ctx.lineTo(x-17,y+10);ctx.fill();ctx.strokeStyle='#626a66';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x,y-58);ctx.stroke();ctx.fillStyle='#d5d5c6';ctx.beginPath();ctx.moveTo(x-3,y-55);ctx.quadraticCurveTo(x-34,y-30,x-27,y-5);ctx.lineTo(x-3,y-5);ctx.fill()}
  ctx.fillStyle='rgba(243,232,210,.10)';for(let i=0;i<1400;i++){const x=((Math.sin(i*73.12)*43758.54)%1+1)%1*512,y=((Math.sin(i*113.7)*19742.12)%1+1)%1*320;ctx.fillRect(x,y,1,1)}texture.needsUpdate=true;
 }
 paint(0,false);
 return {root,hotspot:{id:'cinema',label:'坐下来，看一会儿老电影。',point,mesh:hit},colliders,
  eye:V(-18,beachGround(-18,5.8)+1.02,5.65),focus:target,
  get available(){return available},
  update(t:number,dt:number,weather:'sun'|'rain'|'snow',dusk:boolean,watching:boolean,camera:T.Camera,inside:boolean){
   currentWeather=weather;available=weather==='sun'&&dusk&&!inside;filmMode=available&&watching;
   const desired=available?1:.02;open=T.MathUtils.damp(open,desired,3.5,dt);curtain.scale.y=Math.max(.02,open);snow.visible=weather==='snow';soft.visible=weather==='sun';equipment.visible=weather==='sun';
   const distance=camera.position.distanceTo(target),near=watching||distance<38||(camera instanceof T.OrthographicCamera&&camera.zoom>.5&&!inside);
   beam.visible=available&&near&&open>.95;light.emissiveIntensity=T.MathUtils.damp(light.emissiveIntensity,available?(near?.75:.22):weather==='rain'&&dusk?.08:0,3,dt);
   wetMaterials.forEach((m,i)=>{m.color.copy(colors[i]).multiplyScalar(weather==='rain'?.79:1);m.roughness=weather==='rain'?.7:.9});
   const frame=Math.floor(t*(mobile?8:12));if(available&&!inside&&near&&frame!==lastFrame){paint(t,filmMode);lastFrame=frame}
  },diagnostics:()=>({available,watching:filmMode,weather:currentWeather,unrolled:open,projectorVisible:equipment.visible,softVisible:soft.visible,snow:snow.visible,beam:beam.visible,lights:light.emissiveIntensity,placements,screen:[sx,sy,sz],screenWidth:2.68,seatCapacity:6,reusedLoungers:2,addedLoungers:1,cushions:3,colliders:colliders.map(b=>({min:b.min.toArray(),max:b.max.toArray()})),draws:fixed.children.filter(o=>o instanceof T.Mesh).length+soft.children.filter(o=>o instanceof T.Mesh).length+equipment.children.filter(o=>o instanceof T.Mesh).length,liveLights:0,texture:[512,320],film:'original abstract sailboat loop'})};
}
