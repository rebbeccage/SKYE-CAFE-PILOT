import * as T from 'three';
import {beachGround as terrainHeight} from './beach-ground';
import {BEACH_SEAT,TRUCK_POSITION} from './island-layout';
// Read-only observations: no rewards, story advancement, or additional save state.
export function createExploration(scene:T.Scene,grinder:T.Object3D){
 const bx=BEACH_SEAT.x,bz=BEACH_SEAT.z,tx=TRUCK_POSITION.x,tz=TRUCK_POSITION.z;
 const entries:[string,string,number,number,number,number,number,number,string][]=[
  ['beach-seat','坐在沙滩椅上看海',bx,terrainHeight(bx,bz)+.58,bz,1,1.18,1.65,''],
  ['shells','听听贝壳',-2.65,terrainHeight(-2.65,7.05)+.12,7.05,1,.3,.85,'贝壳里没有装着海。可你把它放到耳边，海就离你近了一点。'],
  ['driftwood','看看漂流木',1.8,terrainHeight(1.8,7.55)+.12,7.55,1.4,.3,.55,'海水磨去了木头的棱角。它走过很远的路，终于在这里歇下。'],
  ['icecream','看看冰激凌车',tx,terrainHeight(tx,tz)+1.1,tz,1.7,2.2,2.8,'小车的窗台还留着香草的甜味。等海风小一点，再来挑一份夏天。'],
  ['cat','轻声问候小猫',-6.58,.43,2.08,.65,.44,.55,'小猫把尾巴圈得更紧，喉咙里响起小小的呼噜。那就不打扰它的午睡了。'],
  ['seeds','看看园艺小桌',-7.25,.99,.93,.48,.42,.7,'棠姨把种子袋折得整整齐齐。纸上没写日期，春天会自己认路。'],
  ['bell','轻碰门边铜铃',-1.68,2.42,2.17,.27,.32,.3,'叮——声音在玻璃之间走了一小圈。有人来，也有人愿意等。'],
  ['grinder','闻闻新磨的咖啡',1.2,2.55,-1.12,.34,.42,.34,'木刷旁落着几颗咖啡豆。刚磨开的香气，像一本翻到一半的旧书。'],
  ['herbs','闻闻窗边绿植',-1.96,1.4,1.12,.35,.5,.4,'窗边的叶子向光伸了伸。泥土和咖啡的味道，在这里慢慢混在一起。']
 ];
 const notes=new Map(entries.map(e=>[e[0],e[8]]));
 const hotspots=entries.map(([id,label,x,y,z,w,h,d])=>{const point=id==='grinder'?grinder.localToWorld(new T.Vector3(0,.57,0)):new T.Vector3(x,y,z),mesh=new T.Mesh(new T.BoxGeometry(w,h,d),new T.MeshBasicMaterial({visible:false}));mesh.position.copy(point);mesh.userData.hit='explore-'+id;scene.add(mesh);return {id:'explore-'+id,label,point,mesh}});
 return {hotspots,note:(id:string)=>notes.get(id.replace('explore-','')),beachEye:new T.Vector3(bx+.05,terrainHeight(bx,bz)+.96,bz-.22),beachFocus:new T.Vector3(bx-5.75,terrainHeight(bx,bz)-.2,bz+26.7)};
}
