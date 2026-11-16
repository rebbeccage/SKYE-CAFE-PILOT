import * as T from 'three';
import {materials,type buildWorld} from './world';
import {V,group,mesh,box,cyl,branch,material,consolidate} from './winter-geometry';

// All dimensions below are in the existing scene's metres. No furniture or camera transforms change.
export function createInteriorLife(scene:T.Scene,world:ReturnType<typeof buildWorld>){
 const root=group(scene);root.name='Interior lived-in detail layer';const fixed=group(root),weather=group(root),steam=group(root),pools=group(root);
 const porcelain=material(0xefe9dc,.5),linen=material(0xe8dfc9,.94),paper=material(0xd1b88e,.94),pastry=material(0xad804b,.7),crumb=material(0xd4ae77,.85),icing=material(0xeee4ce,.32),jam=material(0xb25a5a,.29),berry=material(0x616578,.38),honey=material(0xbd894a,.27),soil=material(0x6b5a4a,.95),leafMat=material(0x839574,.65),leafBack=material(0xa8b98f,.7);
 const glass=new T.MeshPhysicalMaterial({color:0xe7ece5,transparent:true,opacity:.3,roughness:.06,metalness:.05,depthWrite:false,side:T.DoubleSide});
 let seed=721;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
 const ell=(p:T.Object3D,x:number,y:number,z:number,sx:number,sy:number,sz:number,m:T.Material)=>{const o=mesh(p,new T.SphereGeometry(1,12,8),m,x,y,z);o.scale.set(sx,sy,sz);return o};
 const ring=(p:T.Object3D,r:number,t:number,x:number,y:number,z:number,m:T.Material)=>{const o=mesh(p,new T.TorusGeometry(r,t,5,28),m,x,y,z);o.rotation.x=Math.PI/2;return o};
 const tube=(p:T.Object3D,pts:T.Vector3[],r:number,m:T.Material)=>mesh(p,new T.TubeGeometry(new T.CatmullRomCurve3(pts),18,r,5,false),m);
 function anchor(o:T.Object3D){o.updateWorldMatrix(true,false);const g=group(fixed);o.matrixWorld.decompose(g.position,g.quaternion,g.scale);return g;}
 function plate(p:T.Object3D,x:number,z:number,r:number,y=0){cyl(p,r,r*.92,.008,x,y+.004,z,porcelain);ring(p,r*.91,.004,x,y+.01,z,porcelain);}
 function mug(p:T.Object3D,x:number,z:number,r=.04,half=false,y=0,m:T.Material=porcelain,filled=true){const g=group(p,x,y,z);cyl(g,r,r*.7,.065,0,.034,0,m);if(filled)cyl(g,r*.85,r*.85,.003,0,half?.044:.061,0,materials.coffee);ring(g,r,.003,0,.066,0,m);const handle=ring(g,.018,.005,r+.012,.038,0,m);handle.rotation.x=0;if(half)ring(g,r*.88,.0012,0,.058,0,soil);else if(filled)for(let i=0;i<14;i++){const a=rnd()*6.28,d=rnd()*r*.65;ell(g,Math.cos(a)*d,.063,Math.sin(a)*d,.002,.0008,.002,icing)}return g;}
 function cloth(p:T.Object3D,x:number,y:number,z:number,w:number,d:number,drop=0){const geo=new T.PlaneGeometry(w,d,24,20);geo.rotateX(-Math.PI/2);const a=geo.attributes.position;for(let i=0;i<a.count;i++){const xx=a.getX(i),zz=a.getZ(i);a.setY(i,Math.sin(xx*105+zz*16)*.003-Math.max(0,zz/d+.13)*drop);}geo.computeVertexNormals();const m=linen.clone();m.side=T.DoubleSide;const o=mesh(p,geo,m,x,y,z);return o;}
 function blossom(p:T.Object3D,x:number,y:number,z:number){ell(p,x,y,z,.008,.006,.008,pastry);for(let j=0;j<6;j++){const a=j*1.047;ell(p,x+Math.cos(a)*.014,y,z+Math.sin(a)*.014,.011,.003,.006,porcelain)}}
 function leaf(p:T.Object3D,a:T.Vector3,size:number,angle:number){
  const g=group(p,a.x,a.y,a.z);g.rotation.set(.65+Math.sin(angle)*.35,angle,.25);
  const outline=new T.Shape();outline.moveTo(0,-size);outline.bezierCurveTo(-size*.5,-size*.55,-size*.55,size*.2,-size*.32,size*.55);outline.bezierCurveTo(-size*.25,size*.85,-size*.08,size*.92,0,size);outline.bezierCurveTo(size*.18,size*.9,size*.48,size*.62,size*.42,size*.25);outline.bezierCurveTo(size*.52,-size*.2,size*.4,-size*.6,0,-size);
  const geo=new T.ExtrudeGeometry(outline,{depth:.004,bevelEnabled:false,curveSegments:5});geo.rotateX(-Math.PI/2);mesh(g,geo,leafMat);
  branch(g,V(0,.006,-size*.85),V(0,.006,size*.85),.0018,leafBack);
  for(let j=0;j<3;j++)for(const sign of [-1,1])branch(g,V(0,.006,-size*.4+j*size*.35),V(sign*size*.32,.006,-size*.2+j*size*.35),.001,leafBack,.0005);
 }
 function pot(p:T.Object3D,x:number,y:number,z:number,r:number,h:number){cyl(p,r,r*.7,h,x,y+h/2,z,materials.pot);ring(p,r,.012,x,y+h-.008,z,materials.pot);cyl(p,r*.87,r*.87,.008,x,y+h,z,soil);for(let i=0;i<16;i++){const a=i*2.4,d=Math.sqrt(rnd())*r*.75;ell(p,x+Math.cos(a)*d,y+h+.007,z+Math.sin(a)*d,.014,.006,.008,i%3?paper:materials.pot)}return y+h;}
 function basket(p:T.Object3D,x:number,y:number,z:number,r:number,h:number){const g=group(p,x,y,z);cyl(g,r,r*.72,h,0,h/2,0,materials.wood);for(let i=0;i<9;i++)ring(g,r*(.74+i*.032),.004,0,i*h/9,0,materials.lightWood);for(let i=0;i<20;i++){const a=i*Math.PI/10;branch(g,V(Math.cos(a)*r*.72,0,Math.sin(a)*r*.72),V(Math.cos(a)*r,h,Math.sin(a)*r),.004,materials.lightWood)}return g;}
 const top=1.591;
 const A=group(fixed,-.75,top,.55);A.name='Sharing table';
 plate(A,-.02,-.06,.1);
 // Split cinnamon spiral, blueberry muffins and a tiny glass preserve dish.
 cyl(A,.031,.034,.025,-.045,.026,-.067,pastry);const spiral=[];for(let i=0;i<65;i++){const a=i*.34,r=.003+i*.00042;spiral.push(V(-.045+Math.cos(a)*r,.04,-.067+Math.sin(a)*r))}tube(A,spiral,.0026,soil);tube(A,[V(-.07,.04,-.07),V(-.045,.043,-.08),V(-.023,.039,-.06),V(-.015,.022,-.06)],.003,icing);
 for(const [x,z] of [[-.005,-.025],[.025,-.08]]){cyl(A,.021,.017,.021,x,.022,z,crumb);const cap=ell(A,x,.04,z,.025,.019,.025,pastry);if(x>0)cap.scale.x*=.82;for(let i=0;i<4;i++)ell(A,x+(rnd()-.5)*.028,.054,z+(rnd()-.5)*.025,.004,.003,.004,berry);if(x>0)ell(A,x+.015,.037,z,.011,.012,.016,crumb)}
 cyl(A,.023,.023,.008,.025,.014,-.12,glass);ell(A,.025,.021,-.12,.019,.006,.017,jam);box(A,.016,.008,.018,-.002,.02,-.12,icing);
 mug(A,-.18,.07,.04,true);
 const tray=group(A,.16,0,.085);box(tray,.11,.008,.085,0,.004,0,paper);cloth(tray,0,.01,0,.105,.08);const check=material(0xc86b5a,.85);for(let i=-3;i<=3;i++){box(tray,.002,.001,.079,i*.014,.013,0,check);box(tray,.104,.001,.002,0,.013,i*.011,check)}for(const x of [-.028,.012]){box(tray,.028,.018,.032,x,.023,-.012,pastry);box(tray,.022,.003,.025,x,.034,-.012,leafBack)}ell(tray,0,.029,.023,.041,.013,.012,pastry);for(let i=0;i<6;i++)ell(tray,-.025+i*.009,.039,.025,.002,.001,.003,crumb);
 const honeyPot=group(A,.19,0,-.07);cyl(honeyPot,.023,.028,.05,0,.025,0,materials.brass);ring(honeyPot,.023,.004,0,.052,0,materials.brass);tube(honeyPot,[V(-.02,.015,0),V(-.037,.026,0),V(-.04,.045,0)],.004,materials.brass);tube(honeyPot,[V(-.04,.044,0),V(-.042,.029,0)],.0013,honey);
 const book=group(A,.085,.002,-.205);book.rotation.y=.22;box(book,.1,.006,.07,0,.003,0,materials.greenDark);for(const s of [-1,1]){const page=box(book,.047,.005,.066,s*.024,.011,0,porcelain);page.rotation.z=s*.1;for(let j=0;j<3;j++)branch(book,V(s*.004,.014,-.02+j*.016),V(s*.04,.016,-.02+j*.016),.0007,linen)}cyl(book,.017,.017,.003,.029,.019,.021,materials.wood);
 const under=basket(fixed,-.98,.868,.47,.085,.115);ell(under,.015,.15,.01,.025,.08,.025,pastry);cloth(fixed,-1.37,1.30,.55,.29,.31,.22).rotation.y=Math.PI/2;
 const C=group(fixed,-1.05,top,-1.45);C.name='Freshly reset table';plate(C,-.035,-.04,.075);const inverted=mug(C,-.035,-.04,.027,false,.082,glass,false);inverted.rotation.z=Math.PI; // rim rests on plate
 cloth(C,-.11,.008,.125,.10,.07);cloth(C,-.105,.013,.124,.095,.065);
 const menu=group(C,.085,.005,-.19);box(menu,.10,.11,.009,0,.059,0,materials.wood);box(menu,.085,.09,.002,0,.059,.006,linen);branch(menu,V(0,.09,-.005),V(0,0,-.035),.006,materials.wood);
 cyl(C,.025,.027,.008,-.11,.004,-.19,materials.brass);cyl(C,.006,.009,.05,-.11,.031,-.19,materials.brass);cyl(C,.018,.018,.006,-.11,.06,-.19,materials.brass);cyl(C,.011,.011,.042,-.11,.084,-.19,linen);branch(C,V(-.11,.106,-.19),V(-.11,.111,-.19),.001,soil);
 for(let i=0;i<3;i++){const x=-.19+(i-1)*.022,z=-.1+(i%2)*.016;branch(C,V(-.19,.11,-.1),V(x,.22+i*.012,z),.002,leafMat);blossom(C,x,.22+i*.012,z)}
 // Existing shelf supports and equipment are retained; contents occupy their old shelves.
 const shelf=anchor(world.interior.shelfWall);
 for(let i=0;i<5;i++){const x=-1.65+i*.8,g=group(shelf,x,3.11,-2.48);cyl(g,.11,.105,.24,0,.12,0,glass);const lid=cyl(g,.115,.115,.024,0,.252,0,materials.wood);if(i===3){lid.rotation.z=.15;lid.position.x=.018;}for(let j=0;j<24;j++){const a=j*2.4,r=Math.sqrt(rnd())*.077,y=.02+rnd()*.13;const x=Math.cos(a)*r,z=Math.sin(a)*r;if(i===1)box(g,.024,.024,.024,x,y,z,icing);else if(i===4)branch(g,V(x,.012,z),V(x+.012,.19,z),.007,pastry);else ell(g,x,y,z,i===2?.014:.012,.008,i===3?.018:.01,i===0?materials.coffee:i===2?crumb:jam)}}
 for(let i=0;i<7;i++){const x=-1.65+i*.5,g=mug(shelf,x,-2.48,.075,false,2.59,porcelain,false);g.rotation.y=i===1?Math.PI:i===4?1.1:0;if(i===6){g.rotation.z=Math.PI;g.position.y+=.073;}if(i%3===0)plate(shelf,x,-2.48,.1,2.59)}
 for(let i=0;i<3;i++){const x=-1.65+i*.32;box(shelf,.22,.25,.15,x,2.19,-2.48,paper);for(let j=0;j<2;j++)box(shelf,.235,.018,.016,x,2.315-j*.014,-2.405,materials.wood);tube(shelf,[V(x-.08,2.32,-2.39),V(x,2.28,-2.38),V(x+.08,2.32,-2.39)],.003,linen)}
 const fruit=basket(shelf,.25,2.07,-2.48,.2,.07);for(let i=0;i<7;i++)ell(fruit,(rnd()-.5)*.27,.09,(rnd()-.5)*.2,.045,.038,.036,i%2?crumb:honey);for(let i=0;i<4;i++){const nap=cloth(shelf,1.25,2.075+i*.008,-2.48,.32,.16);nap.rotation.y=i*.04;}
 const counter=anchor(world.interior.counter),machine=anchor(world.interior.machine),grinder=anchor(world.interior.grinder);
 const cash=group(counter,-1.77,1.065,.1);box(cash,.29,.12,.23,0,.06,0,materials.brass);const lid=box(cash,.29,.018,.23,0,.16,-.065,materials.brass);lid.rotation.x=-.65;for(let i=0;i<4;i++){const bill=box(cash,.19,.002,.09,0,.126+i*.003,.005,linen);bill.rotation.y=i*.06;}plate(counter,-1.42,.21,.065,1.065);for(let i=0;i<4;i++){const clip=ring(counter,.012,.0015,-1.44+i*.013,1.081,.21,materials.brassDark);clip.scale.z=.45;}
 const notes=group(counter,-1.35,1.065,-.24);box(notes,.1,.025,.06,0,.013,0,materials.wood);for(let i=0;i<3;i++){const note=box(notes,.08,.11,.003,0,.075+i*.003,0,linen);note.rotation.z=(i-1)*.12;}
 cloth(counter,-1.68,1.077,.38,.24,.28,.43);
 for(let i=0;i<32;i++){const a=i*2.4,r=Math.sqrt(rnd())*.135;ell(grinder,Math.cos(a)*r,.58+rnd()*.03,Math.sin(a)*r,.017,.012,.011,i<2?crumb:materials.coffee)}
 cyl(grinder,.065,.045,.035,0,.035,.23,porcelain);for(let i=0;i<6;i++){const x=-1.18+i*.025,z=.24+(i%2)*.04;ell(counter,x,1.079,z,.011,.006,.008,materials.coffee)}box(counter,.13,.018,.025,-1.18,1.08,-.2,materials.wood);for(let i=0;i<12;i++)branch(counter,V(-1.12,1.083,-.21+i*.002),V(-1.07,1.082,-.21+i*.002),.001,linen);
 // A narrow stream fits the existing 5 cm gap between nozzle and service cup.
 const brew=group(steam);machine.updateWorldMatrix(true,false);const p=machine.localToWorld(V(-.26,.184,.32));brew.position.copy(p);cyl(brew,.0015,.0015,.012,0,0,0,materials.coffee);mug(machine,-.26,.32,.031,false,.112,glass);mug(machine,.26,.32,.031,false,.112,glass,false);
 const wisps:T.Mesh[]=[];const vapor=new T.MeshBasicMaterial({color:0xe8e2d5,transparent:true,opacity:.12,depthWrite:false});for(let i=0;i<12;i++){const w=ell(steam,p.x+.13,p.y+.08,p.z,.012,.04,.012,vapor);wisps.push(w);}
 // Blank chalkboard, postcards and a single pressed sprig between existing supports.
 const board=group(shelf,1.28,2.27,-2.565);box(board,.58,.30,.018,0,0,0,materials.wood);box(board,.54,.26,.021,0,0,.004,materials.frame);for(let i=0;i<15;i++){const stroke=box(board,.12+rnd()*.22,.002,.001,(rnd()-.5)*.2,(rnd()-.5)*.2,.016,leafMat);stroke.rotation.z=(rnd()-.5)*.13;}for(let i=0;i<2;i++){const card=box(shelf,.16,.12,.005,1.75,2.28+i*.14,-2.54,paper);card.rotation.z=(i-.5)*.2;}branch(shelf,V(1.88,2.16,-2.53),V(1.96,2.46,-2.53),.003,materials.wood);for(let i=0;i<5;i++)leaf(shelf,V(1.89+i*.012,2.2+i*.046,-2.51),.035,i);
 // Eight irregularly spaced hooks under the middle shelf, above the rear work strip.
 for(let i=0;i<8;i++){const x=-1.72+i*.48+(i%3)*.025;const hook=ring(shelf,.018,.003,x,2.49,-2.39,materials.brass);hook.rotation.x=0;const m=mug(shelf,x,-2.39,.035,false,2.419,porcelain,false);m.rotation.z=.15*(i%2?1:-1);if(i===6)cloth(shelf,x,2.46,-2.38,.07,.23,.6);}
 // New plant growth stays along the walls, clear of both seats and the service aisle.
 const fig=group(fixed,-2.02,.85,1.02);const fy=.34;branch(fig,V(0,fy,0),V(-.08,1.8,0),.025,materials.trunk,.008);for(let i=0;i<8;i++){const a=i*2.4,y=.55+i*.145,dx=Math.cos(a)*.18;branch(fig,V(-.03,y,0),V(dx,y+.1,Math.sin(a)*.16),.009,materials.trunk,.003);leaf(fig,V(dx,y+.12,Math.sin(a)*.16),.20,a)}
 const euc=group(fixed,-2.14,.865,-.12);const py=pot(euc,0,0,0,.18,.38);for(let j=0;j<3;j++){const end=V(Math.cos(j*2.1)*.16,1.55+j*.1,Math.sin(j*2.1)*.12);tube(euc,[V(0,py,0),V(-.04,1.1,0),end],.007,materials.trunk);for(let i=1;i<8;i++){const p=V(0,py,0).lerp(end,i/8);leaf(euc,p,.065,j+i*.8)}}
 const palm=group(fixed,2.35,.865,-2.43);const palmY=pot(palm,0,0,0,.16,.30);for(let i=0;i<7;i++){const a=i*.897;const tip=V(Math.cos(a)*.28,1.2+rnd()*.2,Math.sin(a)*.28);tube(palm,[V(0,palmY,0),V(0,1.05,0),tip],.008,leafMat);for(let j=0;j<8;j++){const p=V(0,.65,0).lerp(tip,j/8);for(const s of [-1,1]){const end=p.clone().add(V(Math.cos(a+s*.8)*.10,0,Math.sin(a+s*.8)*.10));branch(palm,p,end,.008,leafMat,.001)}}}
 for(const [x,z] of [[-2.14,-.12],[2.35,-2.43]]){for(let i=0;i<5;i++)leaf(fixed,V(x+(rnd()-.5)*.38,.875,z+(rnd()-.5)*.38),.025,i);box(fixed,.09,.12,.055,x+.23,.925,z,paper);box(fixed,.10,.014,.055,x+.23,.991,z,materials.wood);cyl(fixed,.035,.04,.07,x-.16,.903,z+.13,materials.brass);branch(fixed,V(x-.18,.93,z+.13),V(x-.25,.95,z+.13),.008,materials.brass)}
 let hangingLowest=Infinity;
 for(const [x,z] of [[-2.05,-.65],[2.02,1.5]]){const g=group(fixed,x,3.34,z);basket(g,0,-.09,0,.12,.14);for(let j=0;j<3;j++){const a=j*2.094;tube(g,[V(Math.cos(a)*.11,.04,Math.sin(a)*.11),V(0,.19,0)],.004,materials.wood);ring(g,.012,.004,0,.19,0,materials.wood);branch(g,V(0,.19,0),V(0,4.575-Math.abs(x)*.5-.015-3.34,0),.004,materials.brassDark)}for(let i=0;i<5;i++){const a=i*1.25,len=.78+i*.018,dx=Math.cos(a)*.1,dz=Math.sin(a)*.1;tube(g,[V(dx,0,dz),V(dx*.8,-len*.55,dz*1.2),V(dx*1.4,-len,dz)],.003,leafMat);for(let j=0;j<7;j++){const f=j/7;leaf(g,V(dx*(1+f*.4),-f*len,dz),.035,a+j*.45)}hangingLowest=Math.min(hangingLowest,3.34-len)}}
 // Soft contact patches on actual floor and table surfaces, not new geometry obstacles.
 const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const ctx=canvas.getContext('2d')!;const gr=ctx.createRadialGradient(64,64,0,64,64,64);gr.addColorStop(0,'rgba(46,48,35,0.18)');gr.addColorStop(.45,'rgba(46,48,35,0.10)');gr.addColorStop(1,'rgba(46,48,35,0)');ctx.fillStyle=gr;ctx.fillRect(0,0,128,128);const contactMat=new T.MeshBasicMaterial({map:new T.CanvasTexture(canvas),transparent:true,depthWrite:false,toneMapped:false});
 const decal=(p:T.Object3D,x:number,y:number,z:number,w:number,d:number,m:T.Material)=>{const o=mesh(p,new T.PlaneGeometry(w,d),m,x,y,z);o.rotation.x=-Math.PI/2;return o;};
 for(const [x,z,r] of [[-.75,.55,.23],[-1.05,-1.45,.23],[-1.96,.8,.38],[-2.14,-.12,.22],[2.35,-2.43,.2]])decal(fixed,x,.868,z,r*2,r*2,contactMat);
 for(const [cx,cz] of [[-.12,.55],[-1.38,.55],[-1.68,-1.45]])for(const x of [-.17,.17])for(const z of [-.16,.16])decal(fixed,cx+x,.868,cz+z,.13,.13,contactMat);
 const poolCanvas=document.createElement('canvas');poolCanvas.width=poolCanvas.height=128;const pc=poolCanvas.getContext('2d')!;const pg=pc.createRadialGradient(64,64,0,64,64,64);pg.addColorStop(0,'rgba(242,217,160,0.14)');pg.addColorStop(.5,'rgba(242,217,160,0.07)');pg.addColorStop(1,'rgba(242,217,160,0)');pc.fillStyle=pg;pc.fillRect(0,0,128,128);const poolMat=new T.MeshBasicMaterial({map:new T.CanvasTexture(poolCanvas),transparent:true,depthWrite:false,toneMapped:false});
 for(const [x,y,z,r] of [[-.75,top+.001,.55,.32],[-1.05,top+.001,-1.45,.32],[1.2,1.916,.5,.4]])decal(pools,x,y,z,r*2,r*2,poolMat);
 const spots:T.SpotLight[]=[];for(let i=0;i<3;i++){const targets=[[-.75,top,.55],[-1.05,top,-1.45],[1.2,1.91,.5]],p=world.globes[i].position,l=new T.SpotLight(0xf2d9a0,2.8,4,.25,1,2);l.position.copy(p);l.target.position.set(...targets[i] as [number,number,number]);root.add(l,l.target);spots.push(l);}
 // Wear rings and damp marks are subtle and local; no decals carry text.
 const stain=material(0xa8997f,.62);stain.transparent=true;stain.opacity=.19;stain.depthWrite=false;
 ring(C,.052,.0018,.12,.002,.14,stain);for(const [x,z] of [[-1.5,.06],[.9,.22],[1.2,-.18]])ring(counter,.072,.002,x,1.066,z,stain);ring(machine,.10,.0015,0,.112,.18,stain);
 for(let i=0;i<8;i++)branch(counter,V(-1.9+i*.28,1.066,.33),V(-1.82+i*.28,1.066,.31),.0008,soil);
 const mat=group(weather,-1.1,.87,1.73);box(mat,.65,.012,.36,0,.006,0,materials.wood);for(const x of [-.12,.1])ell(mat,x,.014,0,.045,.001,.09,stain);
 const rainGlass=group(weather),frostGlass=group(weather);const dropMat=new T.MeshPhysicalMaterial({color:0xd7e4e3,transparent:true,opacity:.25,roughness:.08,metalness:.1,depthWrite:false});const frostMat=new T.MeshBasicMaterial({color:0xdce7e4,transparent:true,opacity:.22,depthWrite:false});
 for(let i=0;i<110;i++){const z=-2.6+rnd()*4.5,y=1+rnd()*2;ell(rainGlass,-2.767,y,z,.003,.012+rnd()*.018,.006,dropMat);if(i%6===0)branch(rainGlass,V(-2.768,y,z),V(-2.768,y-.18-rnd()*.15,z+.006),.001,dropMat);}
 for(const z of [-2.77,-1.796,-.822,.152,1.126,2.1])for(let i=0;i<12;i++){const y=.95+i*.17;branch(frostGlass,V(-2.706,y,z),V(-2.704,y+.04,z+.015),.002,frostMat,.0005)}
 const rugEdge=group(weather);const damp=material(0x596453,.95);damp.transparent=true;damp.opacity=.16;damp.depthWrite=false;decal(rugEdge,-.75,.885,1.19,1.85,.07,damp);
 // Geometric QA is measured before merging, so props cannot silently grow past a rim.
 fixed.updateWorldMatrix(true,true);
 const tableMargins=[A,C].map(table=>{let radius=0;const inv=table.matrixWorld.clone().invert();table.traverse(o=>{if(!(o instanceof T.Mesh))return;const a=o.geometry.attributes.position,transform=inv.clone().multiply(o.matrixWorld),v=V(0,0,0);for(let i=0;i<a.count;i++){v.fromBufferAttribute(a,i).applyMatrix4(transform);radius=Math.max(radius,Math.hypot(v.x,v.z));}});return .35-radius;});
 const floorPropBounds=[fig,euc,palm,under].map(o=>{const b=new T.Box3().setFromObject(o);return {min:b.min.toArray(),max:b.max.toArray()}});
 let roofClearance=Infinity;fixed.traverse(o=>{if(!(o instanceof T.Mesh))return;const a=o.geometry.attributes.position,v=V(0,0,0);for(let i=0;i<a.count;i++){v.fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld);if(v.y>3)roofClearance=Math.min(roofClearance,4.575-Math.abs(v.x)*.5-v.y);}});

 consolidate(fixed);fixed.traverse(o=>{if(o instanceof T.Mesh)o.castShadow=false});
 let active=false,wet=0,frost=0;
 return {root,update(inside:boolean,t:number,rain:number,snow:number,night:number){active=inside;wet=rain;frost=snow;root.visible=true;pools.visible=inside;steam.visible=inside;spots.forEach(l=>l.visible=inside);weather.visible=inside&&(rain>.1||snow>.1);rainGlass.visible=rain>.1;frostGlass.visible=snow>.1;mat.visible=snow>.1;rugEdge.visible=rain>.1&&world.decorations.rug.visible;spots.forEach(l=>l.intensity=2.8+rain*1.2+night*.8);poolMat.opacity=1+rain*.35;
 wisps.forEach((w,i)=>{const f=(t*.32+i/12)%1;w.position.set(p.x+.13+Math.sin(f*5+i)*.018,p.y+.1+f*.32,p.z);w.scale.set(.012+f*.018,.04+f*.03,.012+f*.014);});brew.scale.y=.8+Math.sin(t*3)*.1;
 },diagnostics:()=>({active,tableMargins,floorPropBounds,roofClearance,tableCount:2,tableGroups:[7,7],shelfJars:5,hangingMugs:8,hangingAdded:2,hangingLowest,lightPools:3,wet,frost,steam:wisps.length,geometryBounds:new T.Box3().setFromObject(fixed).getSize(V(0,0,0)).toArray()})};
}
