import * as T from 'three';
// One shared, weather-independent geographic datum. Existing cafe transforms stay fixed.
export const SEA_LEVEL=-1.63;
export const ISLAND_CENTER=new T.Vector2(-1.6,1);
export const ISLAND_SIZE=new T.Vector2(50,54);
export const RESERVE_AREAS=[
 {id:'cafe-back',center:[0,-12] as const,size:[10,8] as const,height:-.06},
 {id:'garden-outer',center:[-16,-2] as const,size:[8,7] as const,height:-.12},
 {id:'truck-outer',center:[13,5.5] as const,size:[8,6] as const,height:-.15},
];
const smoothMin=(a:number,b:number,k:number)=>{const h=Math.max(k-Math.abs(a-b),0)/k;return Math.min(a,b)-h*h*k*.25;};
/** Positive on land, negative in open sea AND the connected bay. Rounded subtraction
 * avoids needle tips; a single continuous field feeds mesh, depth, footprints and props. */
export function coastDistance(x:number,z:number){
 const a=Math.atan2((z-1)/27,(x+1.6)/25),irregular=1+.018*Math.sin(a*3+.7)+.014*Math.cos(a*5-.4);
 const outer=(1-Math.hypot((x+1.6)/25,(z-1)/27)/irregular)*25;
 const bay=(Math.hypot((x+7)/21,(z-25)/16)-1)*16;
 return smoothMin(outer,bay,1.8);
}
export function islandRadius(x:number,z:number){return 1-coastDistance(x,z)/25;}
// Coastline samples are extracted from the SAME field, including the inward bay arc.
// Arc-length sampling prevents most samples clustering on the outer coast.
const boundary=(()=>{
 const segments:[T.Vector2,T.Vector2][]=[];const step=.5;
 for(let z=-31;z<34;z+=step)for(let x=-30;x<29;x+=step){
  const ps=[new T.Vector2(x,z),new T.Vector2(x+step,z),new T.Vector2(x+step,z+step),new T.Vector2(x,z+step)],ds=ps.map(p=>coastDistance(p.x,p.y)),cross:T.Vector2[]=[];
  for(let j=0;j<4;j++){const k=(j+1)%4;if((ds[j]>0)!==(ds[k]>0))cross.push(ps[j].clone().lerp(ps[k],ds[j]/(ds[j]-ds[k])));}
  if(cross.length===2)segments.push([cross[0],cross[1]]);
 }
 const pts:T.Vector2[]=[];if(!segments.length)return pts;
 let seg=segments.pop()!;pts.push(seg[0],seg[1]);
 while(segments.length){const end=pts.at(-1)!;let best=Infinity,idx=-1,reverse=false;for(let j=0;j<segments.length;j++)for(let k=0;k<2;k++){const d=end.distanceToSquared(segments[j][k]);if(d<best){best=d;idx=j;reverse=k===1;}}
  if(best>.01)break;seg=segments.splice(idx,1)[0];pts.push(seg[reverse?0:1]);}
 return pts;
})();
const coastLengths=boundary.slice(1).map((p,i)=>p.distanceTo(boundary[i])),coastLength=coastLengths.reduce((a,b)=>a+b,0);
export function shorePoint(a:number){let distance=((a/(Math.PI*2))%1+1)%1*coastLength;for(let i=0;i<coastLengths.length;i++){if(distance<=coastLengths[i])return boundary[i].clone().lerp(boundary[i+1],distance/coastLengths[i]);distance-=coastLengths[i];}return boundary[0].clone();}
export function terrainHeight(x:number,z:number){
 const d=coastDistance(x,z);
 let bed=d>=0?SEA_LEVEL+1.5*T.MathUtils.smoothstep(d,0,8):SEA_LEVEL-Math.min(8,-d*.28);
 // Shoreward sand gently meets the unchanged +.26m paved/garden surface.
 const dx=Math.max(-8.92-x,0,x-5.65),dz=Math.max(-4.55-z,0,z-5.45),edge=Math.hypot(dx,dz);
 if(d>0){const collar=(1-T.MathUtils.smoothstep(edge,0,4.8))*T.MathUtils.smoothstep(d,0,3);bed=T.MathUtils.lerp(bed,.145,collar);}
 // Large quiet pads are terrain, not additional planes or future building foundations.
 for(const area of RESERVE_AREAS){const dx=Math.max(0,Math.abs(x-area.center[0])-area.size[0]/2),dz=Math.max(0,Math.abs(z-area.center[1])-area.size[1]/2),f=(1-T.MathUtils.smoothstep(Math.hypot(dx,dz),0,3))*T.MathUtils.smoothstep(d,1,4);bed=T.MathUtils.lerp(bed,area.height,f);}
 // Keep retained furniture and truck on low, broad dry sand shelves.
 for(const [cx,cz,rx,rz] of [[-14.5,7.1,3.6,2.6],[15.5,14,4.4,3.6]]){const r=Math.hypot((x-cx)/rx,(z-cz)/rz),f=(1-T.MathUtils.smoothstep(r,.65,1.7))*T.MathUtils.smoothstep(d,.25,1.4);bed=T.MathUtils.lerp(bed,-.38,f);}
 // The reused visitor boat now leaves through the same open bay it entered.
 const yaw=Math.PI*105/180,bx=x+1.5,bz=z-22.4,along=bx*Math.sin(yaw)+bz*Math.cos(yaw),across=bx*Math.cos(yaw)-bz*Math.sin(yaw);
 const channel=1-T.MathUtils.smoothstep(Math.hypot(across,Math.max(0,along-4,-along-38)),1.8,3.2);
 if(d<-.2)bed=Math.min(bed,T.MathUtils.lerp(bed,SEA_LEVEL-2.1,channel));
 const detail=.012*Math.sin(x*1.3+z*.6)*Math.sin(z*1.7)*(1-Math.exp(-edge));
 return bed+detail*T.MathUtils.smoothstep(Math.abs(d),0,1);
}
export function createDepthTexture(){const size=512,data=new Uint8Array(size*size*4);for(let y=0;y<size;y++)for(let x=0;x<size;x++){const wx=(x/(size-1)-.5)*200,wz=(y/(size-1)-.5)*200,d=T.MathUtils.clamp((SEA_LEVEL-terrainHeight(wx,wz)+2)/10,0,1),i=(y*size+x)*4;data[i]=data[i+1]=data[i+2]=Math.round(d*255);data[i+3]=255;}const tex=new T.DataTexture(data,size,size);tex.minFilter=tex.magFilter=T.LinearFilter;tex.needsUpdate=true;return tex;}
export function causticsAtlas(){const c=document.createElement('canvas');c.width=256*8;c.height=256;const ctx=c.getContext('2d')!;ctx.fillStyle='#121615';ctx.fillRect(0,0,c.width,c.height);for(let f=0;f<8;f++){ctx.save();ctx.translate(f*256,0);ctx.beginPath();ctx.rect(0,0,256,256);ctx.clip();for(let j=-1;j<9;j++)for(let i=-1;i<9;i++){const a=(i*1.3+j*.9+f*.785),x=i*34+Math.sin(a)*9,y=j*34+Math.cos(a*.8)*9;ctx.strokeStyle='rgba(233,246,223,.44)';ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(x,y,22+Math.sin(a)*6,16+Math.cos(a)*5,a,0,Math.PI*2);ctx.stroke()}ctx.restore()}const tex=new T.CanvasTexture(c);tex.wrapS=tex.wrapT=T.RepeatWrapping;return tex;}
