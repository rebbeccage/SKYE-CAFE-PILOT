import * as T from 'three';
import {islandTrails} from './island-trails-data';
import {worldToMap,mapBounds} from './island-map-model';
let mask:T.CanvasTexture|undefined;
export function islandTrailMask(){if(mask)return mask;const c=document.createElement('canvas');c.width=c.height=1024;const ctx=c.getContext('2d')!;ctx.fillStyle='#000';ctx.fillRect(0,0,1024,1024);ctx.lineCap=ctx.lineJoin='round';
 for(const trail of islandTrails){for(const [width,alpha]of [[1.5,.13],[1.22,.2],[1,.3],[.72,.3]]){ctx.strokeStyle=`rgba(255,255,255,${alpha})`;ctx.lineWidth=trail.width*width/(mapBounds.maxX-mapBounds.minX)*1024;ctx.beginPath();trail.points.forEach(([x,z],i)=>{const p=worldToMap(x,z);if(i)ctx.lineTo(p.x*10.24,p.y*10.24);else ctx.moveTo(p.x*10.24,p.y*10.24)});ctx.stroke();}}
 mask=new T.CanvasTexture(c);mask.colorSpace=T.NoColorSpace;mask.minFilter=T.LinearMipmapLinearFilter;mask.generateMipmaps=true;return mask;}
