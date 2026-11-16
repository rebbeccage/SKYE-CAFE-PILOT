import * as T from 'three';
import type {buildWorld} from './world';
import {V,material,group,mesh,box,ball,cyl,branch,consolidate} from './winter-geometry';
import {createWinterDressing} from './winter-dressing';
import {createWinterFX} from './winter-fx';
import {patioTrampled,patioFootDepth} from './winter-patio';
import {createWinterPeople} from './winter-people';
// Reversible state layers. The building, plinth and original scene geometry are retained.
export function createSnow(scene:T.Scene,world:ReturnType<typeof buildWorld>){
 const accumulation=group(scene);accumulation.visible=false;
 const snow=material(0xe7e9ef,.98),wet=material(0xaba99e,.56),ice=new T.MeshPhysicalMaterial({color:0xcde0d7,roughness:.13,metalness:.12,transparent:true,opacity:.55,depthWrite:false});
 const normalThreshold=.6,slopeFalloff=T.MathUtils.degToRad(15);let depositedCells=0;
 function field(x0:number,x1:number,z0:number,z1:number,step:number,base:(x:number,z:number)=>number,depth:(x:number,z:number)=>number,include:(x:number,z:number)=>boolean=()=>true){
  const pos:number[]=[],colors:number[]=[],indices:number[]=[],nx=Math.ceil((x1-x0)/step),nz=Math.ceil((z1-z0)/step),dx=(x1-x0)/nx,dz=(z1-z0)/nz;
  const keep=Array.from({length:nx},(_,i)=>Array.from({length:nz},(_,j)=>include(x0+(i+.5)*dx,z0+(j+.5)*dz)));
  const at=(i:number,j:number)=>i*(nz+1)+j;
  for(let i=0;i<=nx;i++)for(let j=0;j<=nz;j++){
   const x=x0+i*dx,z=z0+j*dz,h=base(x,z),eps=.001;
   const normal=V(-(base(x+eps,z)-base(x-eps,z))/(2*eps),1,-(base(x,z+eps)-base(x,z-eps))/(2*eps)).normalize();
   const mask=T.MathUtils.smoothstep(normal.y,normalThreshold,normalThreshold+Math.sin(slopeFalloff));
   pos.push(x,h+depth(x,z)*mask,z);const shade=.985+.015*Math.sin(x*.8+z*1.3);colors.push(.94*shade,.96*shade,shade);
  }
  function skirt(a:number,b:number){const n=pos.length/3;const av=pos.slice(a*3,a*3+3),bv=pos.slice(b*3,b*3+3);pos.push(...av,...bv,bv[0],base(bv[0],bv[2]),bv[2],av[0],base(av[0],av[2]),av[2]);for(let k=0;k<4;k++)colors.push(.9,.93,.98);indices.push(n,n+1,n+2,n,n+2,n+3)}
  for(let i=0;i<nx;i++)for(let j=0;j<nz;j++)if(keep[i][j]){
   const a=at(i,j),b=at(i+1,j),c=at(i+1,j+1),d=at(i,j+1);indices.push(a,d,b,b,d,c);
   // Only the perimeter has a skirt: no overlapping internal cell walls.
   if(j===0||!keep[i][j-1])skirt(a,b);if(i===nx-1||!keep[i+1][j])skirt(b,c);
   if(j===nz-1||!keep[i][j+1])skirt(c,d);if(i===0||!keep[i-1][j])skirt(d,a);depositedCells++;
  }
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(pos,3));geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));geo.setIndex(indices);geo.computeVertexNormals();const m=snow.clone();m.vertexColors=true;mesh(accumulation,geo,m);
 }
 // Deposited drifts alternate with thin snow on sloped glass and bare slip channels.
 for(const side of [-1,1])field(side<0?-2.75:0,side<0?0:2.75,-2.89,2.21,.12,(x)=>4.59-Math.abs(x)*.5,(x,z)=>{const slip=Math.sin(z*4.7+x*.8)+Math.sin(z*9.3)*.35;const base=.06+.02*(.5+.5*Math.sin(x*2.2+z*1.3));return T.MathUtils.lerp(base*(1+1.2*T.MathUtils.smoothstep(x,1.3,2.6)),.005+.01*(.5+.5*Math.sin(z*3)),T.MathUtils.smoothstep(slip,.45,1.1))},(x,z)=>!(Math.sin(z*5+x*1.5)>.94&&Math.abs(x)>1)||Math.abs(z+.9)<.5&&Math.abs(x-1.7)<.3);
 function track(x:number,z:number){if(z<2.15)return false;const u=T.MathUtils.clamp((z-2.35)/3,0,1),left=-1.08-u*1.7,right=-1.08+u*4;return Math.abs(x-left)<.15||Math.abs(x-right)<.15||z<3.4&&Math.abs(x+1.08)<.23}
 field(-4.62,5.53,-4.42,5.32,.14,()=>.247,(x,z)=>{const lee=T.MathUtils.smoothstep(x,3.7,5.3);return (.06+.02*(.5+.5*Math.sin(x*1.2+z*1.8)))*(1+1.3*lee)-patioFootDepth(x,z)},(x,z)=>!(Math.abs(x)<2.94&&z> -2.95&&z<2.33)&&!track(x,z)&&!patioTrampled(x,z));
 // Compressed wet footfalls at staggered intervals, two trails merging at the door.
 for(const path of [-1,1])for(let i=0;i<15;i++){const u=i/14,z=2.4+u*2.8,x=-1.08+(path<0?-1.7:4)*u+(i%2?.065:-.065);if(z<3.45)continue;const p=mesh(accumulation,new T.CircleGeometry(.065,12),wet,x,.251,z);p.rotation.x=-Math.PI/2;p.rotation.z=path<0?-.55:.65;p.scale.y=1.7}
 for(let i=0;i<4;i++)for(const x of [-1.4,-.4,.06]){box(accumulation,x===-.4?.38:.13,.04,1.35-i*.22,x,.397+i*.15,2.75-i*.2,snow)}
 for(const p of world.snowSurfaces.pots){const shape=new T.Shape();shape.absarc(0,0,p.radius+.012,0,Math.PI*2,false);const hole=new T.Path();hole.absarc(0,0,p.radius-.032,0,Math.PI*2,true);shape.holes.push(hole);const m=mesh(accumulation,new T.ExtrudeGeometry(shape,{depth:.04,bevelEnabled:false,steps:1}),snow,...p.position as [number,number,number]);m.rotation.x=-Math.PI/2}
 let icicles=0;for(const x of [-2.82,2.82])for(let z=-2.75;z<2.2;z+=1.2){const h=.08+.07*(.5+.5*Math.sin(z*13+x));cyl(accumulation,.014,.001,h,x,3.16-h/2,z,ice);icicles++}
 // Microscopic frost lines only on pane edges: zero volumetric build-up on vertical glazing.
 const frost=group(accumulation),frostMat=new T.LineBasicMaterial({color:0xd8e6e5,transparent:true,opacity:.3});const lines:number[]=[];
 for(const x of [-2.762,2.762])for(let j=0;j<70;j++){const z=-2.7+(j%14)*.35,y=1.02+Math.floor(j/14)*.45;for(let k=0;k<3;k++){const a=k*Math.PI/3;lines.push(x,y-.025*Math.sin(a),z-.025*Math.cos(a),x,y+.025*Math.sin(a),z+.025*Math.cos(a))}}
 const fgeo=new T.BufferGeometry();fgeo.setAttribute('position',new T.Float32BufferAttribute(lines,3));frost.add(new T.LineSegments(fgeo,frostMat));
 const dressing=createWinterDressing(scene,world,snow),fx=createWinterFX(scene,dressing.probePositions),people=createWinterPeople(world);
 consolidate(accumulation);let amount=0;
 return {get amount(){return amount},dressing,diagnostics:()=>({accumulationActive:accumulation.visible,normalThreshold,slopeFalloffDegrees:15,depositedCells,roofDepth:[.06,.08],thinGlazingDepth:[.005,.015],propDepth:[.03,.05],leewardMultiplier:2.3,icicles,verticalGlazingCaps:0,particles:fx.count,beads:dressing.beadCount,dimBeads:dressing.dimCount,placed:dressing.items(),fixedDay:true,patio:dressing.patio.diagnostics(),...people.diagnostics()}),update(dt:number,t:number,snowing:boolean,inside:boolean,camera:T.Camera){
 amount=T.MathUtils.damp(amount,snowing?1:0,3,dt);accumulation.visible=snowing;dressing.update(snowing,t);people.update(snowing,dt,t);fx.update(t,amount,camera,snowing&&dressing.settings.lights.placed);
 }};
}
