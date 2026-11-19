import {TREE_PLACEMENTS,TREE_TRUNK_HALF_WIDTH} from './tree-assets';
import {beachGround} from './beach-ground';
import {SEA_LEVEL} from './island-geography';
import {BOARD_X,BOARD_LAYOUT,boardwalkTopAtZ} from './island-props';
import {gardenPathDistance,gardenClearings} from './garden-path';
import {PLAYER_RADIUS,type Surface,type Obstacle} from './player-collision';
type Segment={from:number[];to:number[];width:number};
export type NavigationLayout={stiltHouses:{walkSegments:Segment[];houses:{center:number[];yaw:number;door:number[]}[]};harbor:{fingers:{from:number[];to:number[]}[]}};
export function createNavigation(layout:NavigationLayout){
 const segments=[...layout.stiltHouses.walkSegments,...layout.harbor.fingers.map(s=>({...s,width:1}))];
 const obstacles:Obstacle[]=[
  {x:0,z:-.335,halfX:2.85,halfZ:2.47,name:'咖啡馆玻璃墙'},
  {x:-2.15,z:3.85,halfX:.43,halfZ:.35,name:'门口招牌'},
  {x:15.5,z:14,halfX:1.3,halfZ:2.2,yaw:-.28,name:'冰激凌车'},
  ...[.35,2.8].map(z=>({x:3.55,z,halfX:.44,halfZ:.44,name:'户外桌'})),
  ...[-.42,1.12,2.03,3.57].map(z=>({x:3.55,z,halfX:.25,halfZ:.25,name:'户外椅'})),
  ...TREE_PLACEMENTS.map(({x,z,scale})=>({x,z,halfX:TREE_TRUNK_HALF_WIDTH*scale,halfZ:TREE_TRUNK_HALF_WIDTH*scale,name:'树干'})),
  ...[[-15.25,7.3,-.22],[-13.65,7.8,.13],[-18,5.8,.28]].map(([x,z,yaw])=>({x,z,yaw,halfX:.42,halfZ:.85,name:'躺椅'})),
  {x:-14.43,z:7.75,halfX:.28,halfZ:.28,name:'藤桌'},
  {x:-17,z:9,halfX:1.55,halfZ:.12,name:'幕布'},
  {x:-17.2,z:4.7,halfX:.34,halfZ:.3,name:'投影机'},
  {x:-19,z:6.5,halfX:.35,halfZ:.35,name:'边桌'},
 ];
 for(const [lx,lz,hx,hz] of [[3.02,7.05,.3,.2],[6.55,5.95,.54,.20],[1.5,9.13,.54,.20],[-.95,7.6,.225,.225],[5.75,6.65,.15,.15],[.8,7.85,.105,.105],[6.9,6.9,.045,.045]])obstacles.push({x:lz-14.3,z:3.95-lx,halfX:hz,halfZ:hx,name:'花园器物'});
 for(const h of layout.stiltHouses.houses)obstacles.push({x:h.center[0],z:h.center[2],halfX:1.33,halfZ:1.33,yaw:h.yaw,name:'未开放的水上屋'});
 function segmentSurface(x:number,z:number,s:Segment){const [ax,ay,az]=s.from,[bx,by,bz]=s.to,dx=bx-ax,dz=bz-az,l=Math.hypot(dx,dz);if(l<.01)return null;const t=((x-ax)*dx+(z-az)*dz)/(l*l),perp=Math.abs((x-ax)*dz-(z-az)*dx)/l;
  return t>=-.15/l&&t<=1+.15/l&&perp<=s.width/2-.25?{height:ay+(by-ay)*Math.max(0,Math.min(1,t)),kind:'wood' as const}:null;
 }
 function sample(x:number,z:number):Surface|null{
  for(const s of segments){const q=segmentSurface(x,z,s);if(q)return q;}
  for(const h of layout.stiltHouses.houses){const c=Math.cos(h.yaw),s=Math.sin(h.yaw),dx=x-h.center[0],dz=z-h.center[2],lx=c*dx-s*dz,lz=s*dx+c*dz;if(lz>1.32&&((Math.abs(lx)<1.18&&lz<1.98)||(Math.abs(lx)<.28&&lz<2.25)))return {height:.08,kind:'wood'};}
  if(Math.abs(x-BOARD_X)<.93&&z>BOARD_LAYOUT.startZ-.2&&z<=BOARD_LAYOUT.endZ-PLAYER_RADIUS+.001)return {height:boardwalkTopAtZ(z),kind:'wood'};
  // The existing garden transform is x=local.z-14.3, z=3.95-local.x.
  if(x>-8.87&&x<-4.70&&z>-4.5&&z<5.4){const lx=3.95-z,lz=x+14.3;
   const clearing=gardenClearings.some(([cx,cz,r])=>Math.hypot(lx-cx,lz-cz)<Math.max(.25,r-.17));
   if(gardenPathDistance(lx,lz)>.43&&!clearing)return null;
   return {height:.26,kind:'grass'};
  }
  if(x>-4.65&&x<5.55&&z>-4.45&&z<5.35){
   if(x>-1.62&&x<.32&&z>=2.1&&z<=4.65){const y=z<2.70?.85:z<3.05?.70:.26+(4.65-z)/1.6*.29;return {height:y,kind:'stone'};}
   return {height:.26,kind:'stone'};
  }
  const height=beachGround(x,z);
  // Conservative dry coast boundary stays above highest permitted tide. No water collider mesh.
  if(height<SEA_LEVEL+.56)return null;
  for(const [dx,dz] of [[.27,0],[-.27,0],[0,.27],[0,-.27]])if(beachGround(x+dx,z+dz)<SEA_LEVEL+.5)return null;
  return {height,kind:'sand'};
 }
 const targets={garden:{name:'花园草径',x:-5.2,z:3.2},cinema:{name:'露天电影院',x:-16,z:6},harbor:{name:'内湾港口',x:BOARD_X,z:BOARD_LAYOUT.startZ+1},houses:{name:'水上屋栈道',x:layout.stiltHouses.walkSegments[0].from[0],z:6.5},cafe:{name:'咖啡屋入口',x:-1.1,z:3.4},beach:{name:'沙滩休息区',x:-14.25,z:6},truck:{name:'冰激凌餐车',x:13.5,z:12.25}};
 return {sample,obstacles,segments,targets};
}
