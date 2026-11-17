import {terrainHeight} from './island-geography';
// Sample the existing 180m / 160-cell terrain triangles, not a new terrain.
// The rendered grid interpolates its samples; decals and feet must use that surface.
export function beachGround(x:number,z:number){
 const step=180/160,x0=Math.floor((x+90)/step)*step-90,z0=Math.floor((z+90)/step)*step-90;
 const u=(x-x0)/step,v=(z-z0)/step,a=terrainHeight(x0,z0),b=terrainHeight(x0+step,z0),c=terrainHeight(x0,z0+step),d=terrainHeight(x0+step,z0+step);
 return u+v<=1?a+(b-a)*u+(c-a)*v:d+(c-d)*(1-u)+(b-d)*(1-v);
}
