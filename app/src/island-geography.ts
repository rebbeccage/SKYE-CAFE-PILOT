import * as T from 'three';
// Metres relative to the old plinth's underside; the existing cafe stays at its original transform.
export const SEA_LEVEL=-1.63;
export const ISLAND_CENTER=new T.Vector2(-1.6,4.5);
export const ISLAND_SIZE=new T.Vector2(32,46);
export function shorePoint(a:number){const irregular=1+.024*Math.sin(a*3+.7)+.018*Math.cos(a*5-.4)+.011*Math.sin(a*7);return new T.Vector2(ISLAND_CENTER.x+15.5*irregular*Math.cos(a),ISLAND_CENTER.y+22.25*irregular*Math.sin(a));}
export function islandRadius(x:number,z:number){const dx=x-ISLAND_CENTER.x,dz=z-ISLAND_CENTER.y,a=Math.atan2(dz/22.25,dx/15.5),edge=shorePoint(a);return Math.hypot(dx,dz)/Math.hypot(edge.x-ISLAND_CENTER.x,edge.y-ISLAND_CENTER.y);}
export function terrainHeight(x:number,z:number){const r=islandRadius(x,z);let h:number;
 if(r<.47)h=1.2;
 else if(r<.73)h=T.MathUtils.lerp(1.2,.6,T.MathUtils.smoothstep(r,.47,.73));
 else if(r<1)h=T.MathUtils.lerp(.6,0,T.MathUtils.smoothstep(r,.73,1));
 else h=-Math.min(8,r<1.3?(r-1)*3:.9+(r-1.3)*.8+Math.max(0,r-2.7)*1.2);
 // Keep the full established rectangular stone footprint dry and grounded, not buried.
 const dx=Math.max(-8.92-x,0,x-5.65),dz=Math.max(-4.55-z,0,z-5.45),distance=Math.hypot(dx,dz);
 if(r<1)h=Math.max(h,(1.2-distance/8)*(1-T.MathUtils.smoothstep(r,.80,1)));
 const detail=.012*Math.sin(x*1.3+z*.6)*Math.sin(z*1.7);let bed=SEA_LEVEL+h+detail*T.MathUtils.smoothstep(distance,0,1.5);
 // A soft sandy approach channel keeps the shallow-draft boat clear even at low tide.
 const yaw=Math.PI*105/180,bx=x-1.35,bz=z-30.8,along=bx*Math.sin(yaw)+bz*Math.cos(yaw),across=bx*Math.cos(yaw)-bz*Math.sin(yaw);
 const channel=1-T.MathUtils.smoothstep(Math.hypot(across,Math.max(0,Math.abs(along)-38)),1.8,3.2);
 if(bed<SEA_LEVEL-.06)bed=Math.min(bed,T.MathUtils.lerp(bed,SEA_LEVEL-2.1,channel));return bed;
}
export function createDepthTexture(){const size=512,data=new Uint8Array(size*size*4);for(let y=0;y<size;y++)for(let x=0;x<size;x++){const wx=(x/(size-1)-.5)*200,wz=(y/(size-1)-.5)*200,d=T.MathUtils.clamp((SEA_LEVEL-terrainHeight(wx,wz)+2)/10,0,1),i=(y*size+x)*4;data[i]=data[i+1]=data[i+2]=Math.round(d*255);data[i+3]=255;}const tex=new T.DataTexture(data,size,size);tex.minFilter=tex.magFilter=T.LinearFilter;tex.needsUpdate=true;return tex;}
export function causticsAtlas(){const c=document.createElement('canvas');c.width=256*8;c.height=256;const ctx=c.getContext('2d')!;ctx.fillStyle='#121615';ctx.fillRect(0,0,c.width,c.height);for(let f=0;f<8;f++){ctx.save();ctx.translate(f*256,0);ctx.beginPath();ctx.rect(0,0,256,256);ctx.clip();for(let j=-1;j<9;j++)for(let i=-1;i<9;i++){const a=(i*1.3+j*.9+f*.785),x=i*34+Math.sin(a)*9,y=j*34+Math.cos(a*.8)*9;ctx.strokeStyle='rgba(233,246,223,.44)';ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(x,y,22+Math.sin(a)*6,16+Math.cos(a)*5,a,0,Math.PI*2);ctx.stroke()}ctx.restore()}const tex=new T.CanvasTexture(c);tex.wrapS=tex.wrapT=T.RepeatWrapping;return tex;}
