import {coastDistance} from './island-geography';
/** Local relocation only: the cafe, garden and actors keep their original transforms. */
export const LOUNGE_SHIFT={x:-8,z:-4};
export const TRUCK_POSITION={x:15.5,z:14};
export const BEACH_SEAT={x:-15.25,z:7.3};
export function beachPlacement(x:number,z:number){
 if(x<-5&&x>-8&&z>9&&z<12.5)return {x:x+LOUNGE_SHIFT.x,z:z+LOUNGE_SHIFT.z};
 if(x>3&&x<5&&z>10&&z<19)return {x:x+10,z:z-1};
 // Keep existing small shore belongings, seating and foliage out of the new bay.
 for(let i=0;i<35&&coastDistance(x,z)<1.2;i++){
  const dx=coastDistance(x+.1,z)-coastDistance(x-.1,z),dz=coastDistance(x,z+.1)-coastDistance(x,z-.1),n=Math.hypot(dx,dz)||1;
  x+=dx/n*.5;z+=dz/n*.5;
 }
 return {x,z};
}
