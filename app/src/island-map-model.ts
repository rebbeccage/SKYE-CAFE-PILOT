import {shorePoint} from './island-geography';
import {BOARD_X,BOARD_LAYOUT} from './island-props';
import {BEACH_SEAT,TRUCK_POSITION} from './island-layout';
import type {NavigationLayout} from './navigation-zones';
import type {SceneVisitId} from './progression';
export const mapBounds={minX:-32,maxX:35,minZ:-32,maxZ:34};
/** North-up plan: X right, +Z down. Used by art, labels, paths and the player. */
export function worldToMap(x:number,z:number){return {x:(x-mapBounds.minX)/(mapBounds.maxX-mapBounds.minX)*100,y:(z-mapBounds.minZ)/(mapBounds.maxZ-mapBounds.minZ)*100};}
export function mapToWorld(x:number,y:number){return {x:mapBounds.minX+x/100*(mapBounds.maxX-mapBounds.minX),z:mapBounds.minZ+y/100*(mapBounds.maxZ-mapBounds.minZ)};}
export const islandMapOutline=()=>Array.from({length:400},(_,i)=>{const p=shorePoint(i/400*Math.PI*2);return worldToMap(p.x,p.y)});
export type MapId='cafe'|'garden'|'cinema'|'houses'|'harbor'|'beach'|'truck';
export type MapPlace={id:MapId;name:string;x:number;z:number;offset:[number,number];visit:SceneVisitId;description:string};
export function mapPlaces(layout:NavigationLayout):MapPlace[]{
 const houses=layout.stiltHouses.houses,mean=(axis:number)=>houses.reduce((sum,h)=>sum+h.center[axis],0)/houses.length;
 return [
 {id:'cafe',name:'玻璃咖啡店',x:0,z:-.335,offset:[5,-12],visit:'interior',description:'从正门进店，找阿禾聊聊，或点咖啡机制作餐品。'},
 {id:'garden',name:'花园',x:-6.8,z:.5,offset:[-9,-15],visit:'garden-close',description:'沿草径走近棠姨；种植开放后，点葡萄与草莓照料作物。'},
 {id:'cinema',name:'露天电影院',x:-17,z:9,offset:[-9,-6],visit:'beach-seat',description:'晴天暮色走近观影座位，坐下看一会儿老电影。'},
 {id:'houses',name:'高脚屋',x:mean(0),z:mean(2),offset:[-2,-8],visit:'island',description:'沿岸边木栈道看三座水上小屋，室内暂未开放。'},
 {id:'harbor',name:'港口栈道',x:BOARD_X,z:BOARD_LAYOUT.startZ+5.5,offset:[1,17],visit:'island',description:'从岸端走上木栈道，近看停泊的小船。'},
 {id:'beach',name:'沙滩休息区',x:BEACH_SEAT.x,z:BEACH_SEAT.z,offset:[-7,10],visit:'beach-seat',description:'走近浅木躺椅，坐下来听海浪。'},
 {id:'truck',name:'冰激凌餐车',x:TRUCK_POSITION.x,z:TRUCK_POSITION.z,offset:[3,8],visit:'island',description:'沿沙地支路看看餐车与周围的生活小物。'},
 ];
}
export function placeDiscovered(place:MapPlace,visits:Partial<Record<SceneVisitId,true>>,nearby:ReadonlySet<MapId>){return !!visits[place.visit]||nearby.has(place.id);}
export function playerMapAngle(yaw:number){return 180-yaw*180/Math.PI;}
