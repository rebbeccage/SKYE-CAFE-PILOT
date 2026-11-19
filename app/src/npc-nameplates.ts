import * as T from 'three';
import './npc-nameplates.css';
type Subject={name:string;onClick?:()=>void;anchor:(out:T.Vector3)=>void;visible:()=>boolean};
/** Presentation-only labels. The scene raycast remains the sole story entry. */
export function createNameplates(host:HTMLElement,subjects:Subject[]){
 const point=new T.Vector3();const occupied:{x:number;y:number}[]=[];
 const entries=subjects.map(subject=>{const tag=document.createElement(subject.onClick?'button':'span');tag.className='npc-nameplate';tag.textContent=subject.name;if(subject.onClick){tag.onclick=subject.onClick;tag.setAttribute('aria-label',subject.name);tag.style.pointerEvents='auto';}else tag.setAttribute('aria-hidden','true');tag.hidden=true;host.append(tag);return {subject,tag,x:0,y:0,visible:false}});
 function update(camera:T.Camera,width:number,height:number,blocked:boolean){
  occupied.length=0;
  for(const e of entries){e.subject.anchor(point);point.project(camera);let x=(point.x*.5+.5)*width,y=(-point.y*.5+.5)*height;const anchorY=y;
   const visible=!blocked&&e.subject.visible()&&point.z>=-1&&point.z<=1&&x> -12&&x<width+12&&y>60&&y<height-70;
   e.visible=visible;e.tag.hidden=!visible;if(!visible)continue;
   // Keep adjacent patrons readable, using only cached screen coordinates (no layout reads).
   for(let pass=0;pass<6&&occupied.some(p=>Math.abs(p.x-x)<49&&Math.abs(p.y-y)<25);pass++)y-=25;
   x=T.MathUtils.clamp(x,25,width-25);occupied.push({x,y});if(Math.abs(x-e.x)>.25||Math.abs(y-e.y)>.25){e.tag.style.transform=`translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0) translate(-50%,-100%)`;e.tag.style.setProperty('--name-stem',`${Math.max(5,anchorY-y+5)}px`);e.x=x;e.y=y;}
  }
 }
 return {update,diagnostics:()=>entries.map(e=>({name:e.subject.name,visible:e.visible,x:e.x,y:e.y}))};
}
