import {decodeMedia} from './ui-media';
import watercolorMapUrl from './assets/ui/island-map-watercolor-v2.webp';
import {islandMapOutline,worldToMap} from './island-map-model';
import {islandTrails} from './island-trails-data';
import {gardenPaths} from './garden-path';
import {BOARD_X,BOARD_LAYOUT} from './island-props';
import type {NavigationLayout} from './navigation-zones';
/** A cartographic illustration, drawn once from geographic data; never a WebGL screenshot. */
function paintFallbackMap(canvas:HTMLCanvasElement,layout:NavigationLayout){
 canvas.width=canvas.height=1024;const c=canvas.getContext('2d')!;const point=(x:number,z:number)=>{const p=worldToMap(x,z);return [p.x*10.24,p.y*10.24]};let seed=73;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
 c.fillStyle='#c6dcda';c.fillRect(0,0,1024,1024);
 for(let i=0;i<320;i++){const x=random()*1024,y=random()*1024;c.fillStyle=`rgba(244,243,222,${.02+random()*.07})`;c.beginPath();c.ellipse(x,y,35+random()*80,4+random()*15,-.1,0,Math.PI*2);c.fill()}
 const coast=islandMapOutline();const path=()=>{c.beginPath();coast.forEach((p,i)=>i?c.lineTo(p.x*10.24,p.y*10.24):c.moveTo(p.x*10.24,p.y*10.24));c.closePath()};path();c.lineWidth=37;c.strokeStyle='#dde7db88';c.stroke();c.lineWidth=18;c.strokeStyle='#e8e9d4b0';c.stroke();c.fillStyle='#efe5ce';c.fill();c.lineWidth=2;c.strokeStyle='#b5b89a70';c.stroke();c.save();path();c.clip();
 for(let i=0;i<450;i++){const x=random()*1024,y=random()*1024;c.fillStyle=`rgba(${i%3?'190,176,141':'167,185,144'},${.015+random()*.035})`;c.beginPath();c.ellipse(x,y,20+random()*45,8+random()*24,random()*3,0,7);c.fill()}
 // Hand-worn paths share the exact sampled route data with the 3D sand material.
 c.strokeStyle='#b9a88a7a';c.lineCap=c.lineJoin='round';for(const t of islandTrails){c.lineWidth=10;c.beginPath();t.points.forEach(([x,z],i)=>{const p=point(x,z);if(i)c.lineTo(...p as [number,number]);else c.moveTo(...p as [number,number])});c.stroke()}
 c.restore();
 const line=(a:readonly number[],b:readonly number[],color:string,w:number)=>{c.strokeStyle=color;c.lineWidth=w;c.beginPath();c.moveTo(...point(a[0],a[1]) as [number,number]);c.lineTo(...point(b[0],b[1]) as [number,number]);c.stroke()};
 const rect=(x:number,z:number,w:number,d:number,color:string)=>{const p=point(x-w/2,z-d/2),q=point(x+w/2,z+d/2);c.fillStyle=color;c.fillRect(p[0],p[1],q[0]-p[0],q[1]-p[1]);c.strokeStyle='#796e5566';c.lineWidth=1.2;c.strokeRect(p[0],p[1],q[0]-p[0],q[1]-p[1])};
 rect(-1.65,.45,14.47,9.9,'#d8d0bb');rect(-6.8,.45,4.1,9.9,'#a8b58c');
 for(let i=0;i<95;i++){const [x,z]=point(-8.6+random()*3.7,-4.3+random()*9.3);c.fillStyle=['#899e7d','#c8cbb2','#d1aaa0','#adb9c9'][i%4];c.beginPath();c.ellipse(x,z,4+random()*8,3+random()*5,random()*3,0,7);c.fill()}
 for(const points of gardenPaths)for(let i=1;i<points.length;i++)line([points[i-1][1]-14.3,3.95-points[i-1][0]],[points[i][1]-14.3,3.95-points[i][0]],'#dfddba',8);
 rect(0,-.335,5.7,4.94,'#aac4ba');line([-2.85,-.335],[2.85,-.335],'#516b55',3);for(const x of [-2.85,-1.42,0,1.42,2.85])line([x,-2.8],[x,2.13],'#627b627d',2);line([-1.4,2.13],[-1.4,3.1],'#ae9873',14);
 line([BOARD_X,BOARD_LAYOUT.startZ],[BOARD_X,BOARD_LAYOUT.endZ],'#b59b76',26);
 const segments=[...layout.harbor.fingers,...layout.stiltHouses.walkSegments];for(const s of segments)line([s.from[0],s.from[2]],[s.to[0],s.to[2]],'#b7a17e',10);
 for(const [i,h]of layout.stiltHouses.houses.entries()){const p=point(h.center[0],h.center[2]);c.save();c.translate(p[0],p[1]);c.rotate(-h.yaw);c.fillStyle=['#9bac90','#c19b82','#718d81'][i];c.fillRect(-21,-24,42,48);c.strokeStyle='#6c735c';c.lineWidth=2;c.strokeRect(-21,-24,42,48);c.beginPath();c.moveTo(0,-24);c.lineTo(0,24);c.stroke();c.restore()}
 for(const [x,z,a]of [[-9,15.65,1.45],[-15,19.6,1.3],[-1.5,22.4,1.83]]){const p=point(x,z);c.save();c.translate(...p as [number,number]);c.rotate(-a);c.fillStyle='#f3ecda';c.strokeStyle='#788c7e';c.beginPath();c.ellipse(0,0,15,41,0,0,7);c.fill();c.stroke();c.fillStyle='#bbbea4';c.fillRect(-9,-18,18,28);c.restore()}
 rect(-17,9,3.1,.24,'#e9dfc4');for(const [x,z]of [[-18,5.8],[-15.25,7.3],[-13.65,7.8]])rect(x,z,.7,1.65,'#bfa886');rect(15.5,14,2.6,4.4,'#d7bd80');
 for(const [x,z]of [[-14.5,-1],[7.8,4],[12,15]]){const p=point(x,z);c.strokeStyle='#91a383';c.lineWidth=5;for(let i=0;i<7;i++){const a=i/7*7;c.beginPath();c.moveTo(...p as [number,number]);c.quadraticCurveTo(p[0]+Math.cos(a)*12,p[1]+Math.sin(a)*12,p[0]+Math.cos(a)*29,p[1]+Math.sin(a)*26);c.stroke()}}
 // Fine pigment grain is baked once, not an animated SVG filter or frame-time texture.
 const image=c.getImageData(0,0,1024,1024);for(let i=0;i<image.data.length;i+=4){const n=(random()-.5)*5;for(let k=0;k<3;k++)image.data[i+k]+=n}c.putImageData(image,0,0);
}

/** Lazy, one-time decode. The procedural geographic map remains available on failure. */
let illustration:Promise<HTMLImageElement>|undefined;
export async function paintIslandMap(canvas:HTMLCanvasElement,layout:NavigationLayout){
 paintFallbackMap(canvas,layout);
 try{
  illustration??=decodeMedia(watercolorMapUrl);
  const img=await illustration;canvas.width=img.naturalWidth;canvas.height=img.naturalHeight;
  canvas.getContext('2d')!.drawImage(img,0,0);canvas.dataset.art='watercolor-v2';
 }catch{canvas.dataset.art='geographic-fallback';}
}
