/** Garden-local, shared by turf wear and the decorative flower exclusion mask.
 * This describes visual clearances, not a new navigation/collision system. */
export const gardenPaths:number[][][]=[
 [[-.4,9.48],[-.15,9.08],[.18,8.72],[.52,8.32],[.9,8.14],[1.35,8.17],[1.9,8.32],[2.4,8.3],[2.9,8.08],[3.35,7.77],[3.75,7.6],[4.05,7.78],[4.24,8.18],[4.48,8.55],[5.1,8.73],[6.05,8.8],[7.1,8.75],[7.85,8.48],[8.05,7.75],[8.04,6.95],[7.8,6.48]],
 [[.65,8.2],[.85,7.94],[1.05,7.68],[1.3,7.5]],
 [[2.4,8.3],[2.56,7.88],[2.6,7.52],[2.58,7.16]],
];
export function gardenPathDistance(x:number,z:number){
 let distance=Infinity;
 for(const path of gardenPaths)for(let i=1;i<path.length;i++){
  const [ax,az]=path[i-1],[bx,bz]=path[i],dx=bx-ax,dz=bz-az;
  const q=Math.max(0,Math.min(1,((x-ax)*dx+(z-az)*dz)/(dx*dx+dz*dz)));
  distance=Math.min(distance,Math.hypot(x-ax-dx*q,z-az-dz*q));
 }
 return distance;
}
// Tang, cat, Mona's whole walking segment, workbench, planters and pots.
export const gardenClearings=[
 [1.3,7.5,.58],[1.87,7.72,.39],[.1,8.5,.51],[.5,8.5,.51],[.9,8.5,.51],
 [3.02,7.05,.57],[6.55,5.95,.7],[1.5,9.13,.68],[-.1,6.2,.36],
 [3,8.65,.36],[3.1,5.95,.35],[5.75,6.65,.38],[-.95,7.6,.43],[.8,7.85,.22],
 [.05,5.65,.2],[6.9,6.9,.2],[4.2,7.15,.2],
];
export function gardenFlowerClearance(x:number,z:number){
 let d=Math.min(x+1.32,8.32-x,z-5.56,9.47-z,gardenPathDistance(x,z)-.43);
 for(const [cx,cz,r] of gardenClearings)d=Math.min(d,Math.hypot(x-cx,z-cz)-r);
 // The existing fruit patch and its raycast boxes remain visually separate.
 if(x>4.12&&x<7.99&&z<8.22)d=Math.min(d,-.1);
 return d;
}
