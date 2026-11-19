import * as T from 'three';
import {createHarbor} from './harbor';
import {createStiltHouses} from './stilt-houses';
import type {buildWorld} from './world';
import {createIslandTerrain,type IslandUniforms} from './island-surface';
import {createIslandWater} from './island-water';
import {createIslandProps} from './island-props';
import {createIslandBoat,ISLAND_BOAT_ANCHOR} from './island-boat';
import {SEA_LEVEL,shorePoint,terrainHeight,coastDistance} from './island-geography';
import {V,group,mesh,box,ball,cyl,branch,material,consolidate} from './winter-geometry';
export function createIsland(scene:T.Scene,renderer:T.WebGLRenderer,world:ReturnType<typeof buildWorld>,weather:IslandUniforms){
 const mobile=matchMedia('(pointer: coarse)').matches||innerWidth<700;
 const terrain=createIslandTerrain(scene,weather,mobile),water=createIslandWater(scene,renderer,weather,mobile),props=createIslandProps(scene,mobile),boat=createIslandBoat(scene,water.surfaceAt,ISLAND_BOAT_ANCHOR.clone());
 const harbor=createHarbor(scene,water.surfaceAt,mobile);
 const stiltHouses=createStiltHouses(scene,mobile);
 const frost=group(scene),ice=material(0xc8d5d2,.25);ice.transparent=true;ice.opacity=.52;ice.depthWrite=false;
 for(let i=0;i<55;i++){const a=i/55*Math.PI*2,point=shorePoint(a),normal=new T.Vector2(coastDistance(point.x-.1,point.y)-coastDistance(point.x+.1,point.y),coastDistance(point.x,point.y-.1)-coastDistance(point.x,point.y+.1)).normalize(),out=V(point.x+normal.x*(.15+i%3*.18),SEA_LEVEL+.014,point.y+normal.y*(.15+i%3*.18));const g=mesh(frost,new T.CylinderGeometry(.15+(i%4)*.08,.17+(i%4)*.08,.014,5),ice,...out.toArray() as [number,number,number]);g.rotation.y=i*1.17;g.scale.z=.6+(i%4)*.12}consolidate(frost);frost.visible=false;
 // Birds and distant sails are scenery, never story characters or interaction targets.
 const birdMat=material(0xe7e3d6),birds:T.Group[]=[];for(let i=0;i<(mobile?2:3);i++){const b=group(scene);for(const s of [-1,1]){const wing=mesh(b,new T.ConeGeometry(.07,.34,3),birdMat,s*.13,0,0);wing.rotation.z=s*1.3;wing.scale.z=.25}birds.push(b)}
 const sails=group(scene);const wood=material(0xc8a87c),cream=material(0xf2ebdd),green=material(0x4a5d3f);for(const [x,z] of [[-41,-52],[22,-64]]){const g=group(sails,x,SEA_LEVEL+.03,z);const hull=ball(g,.25,0,0,0,wood);hull.scale.set(.5,.24,2.4);branch(g,V(0,0,0),V(0,1.15,0),.012,wood);const shape=new T.Shape();shape.moveTo(0,.16);shape.lineTo(0,1.1);shape.lineTo(.56,.16);shape.closePath();const sail=mesh(g,new T.ExtrudeGeometry(shape,{depth:.015,bevelEnabled:false}),cream);sail.rotation.y=.3;}
 consolidate(sails);
 // Arrival cues fit existing door/counter anchors, without replacing the cafe assets.
 const arrival=group(world.root),brass=material(0xbfa46a,.3,1),wet=material(0x8a8273,.6);const bell=group(arrival,-1.68,2.35,2.12);const bellShell=mesh(bell,new T.CylinderGeometry(.027,.058,.085,16,1,true),brass);ball(bell,.012,0,-.032,0,brass);branch(bell,V(0,.04,0),V(0,.13,-.02),.01,brass);
 for(let i=0;i<4;i++){const print=mesh(arrival,new T.CircleGeometry(.042,10),wet,-1.13+(i%2)*.18,.853,1.85-i*.15);print.rotation.x=-Math.PI/2;print.scale.y=1.65;}
 const counter=world.interior.counter;for(const [x,z] of [[2.01,-.24],[2.04,-.03]]){const cup=group(counter,x,1.061,z);const outer=new T.Shape();outer.absarc(0,0,.044,0,Math.PI*2,false);const hole=new T.Path();hole.absarc(0,0,.037,0,Math.PI*2,true);outer.holes.push(hole);mesh(cup,new T.ExtrudeGeometry(outer,{depth:.073,bevelEnabled:false}),cream).rotation.x=-Math.PI/2;cyl(cup,.037,.037,.004,0,.004,0,cream);mesh(cup,new T.TorusGeometry(.023,.007,6,12),cream,.047,.036,0);}
 const collisions=props.colliders.map((bounds:T.Box3)=>{const proxy=new T.Mesh(new T.BoxGeometry(...bounds.getSize(V(0,0,0)).toArray() as [number,number,number]),new T.MeshBasicMaterial({visible:false}));proxy.position.copy(bounds.getCenter(V(0,0,0)));proxy.userData.collision=true;proxy.name='Island static collision proxy';scene.add(proxy);return proxy});
 let lastWeather:'sun'|'rain'|'snow'='sun';
 return {boat,boatRoots:[boat.root,...harbor.boatRoots],water,terrain,collisions,resize:water.resize,capture:water.capture,
 update(t:number,dt:number,state:'sun'|'rain'|'snow',camera:T.Camera,inside:boolean){lastWeather=state;water.update(t,camera,inside);terrain.water.value=SEA_LEVEL+water.params.TideLevel;terrain.caustics.value=mobile?0:water.params.CausticsStrength;props.update(t,state,water.params.TideLevel);boat.update(t,dt,state);harbor.update(t,state,water.params.TideLevel);stiltHouses.update(t,state,weather.dusk.value,water.params.TideLevel);frost.visible=state==='snow';frost.position.y=water.params.TideLevel;birds.forEach((b,i)=>{const a=t*.009+i*2.1;b.position.set(-3+Math.cos(a)*15,1.8+i*.18+Math.sin(t*.22+i)*.08,20+Math.sin(a)*5);b.rotation.y=-a;b.children.forEach((w,j)=>w.rotation.z=(j?1:-1)*(1.3+Math.sin(t*.6+i)*.035));b.visible=state!=='snow'&&(state!=='rain'||i===0)&&!inside;});bell.rotation.z=Math.sin(t*.8)*.018;},
 setParameters(values:Record<string,number>){const clamp=(n:string,lo:number,hi:number)=>T.MathUtils.clamp(values[n],lo,hi);for(const key of ['TideLevel','WaveAmplitude','FoamDensity','CausticsStrength','ShoreFog'] as const)if(Number.isFinite(values[key]))water.params[key]=clamp(key,key==='TideLevel'?-.3:0,key==='TideLevel'?.4:key==='WaveAmplitude'?1.5:key==='ShoreFog'?.25:1);boat.setParameters({...(Number.isFinite(values.BoatPhase)?{BoatPhase:clamp('BoatPhase',0,1)}:{}),...(Number.isFinite(values.BoatState)?{BoatState:Math.round(clamp('BoatState',0,2)) as 0|1|2}:{}),...(Number.isFinite(values.VisitorCount)?{VisitorCount:Math.round(clamp('VisitorCount',0,3))}:{}),...(Number.isFinite(values.AutoCycle)?{AutoCycle:!!values.AutoCycle}:{})});},
 diagnostics:()=>({terrain:terrain.diagnostics(),water:water.diagnostics(),props:props.diagnostics(),boat:boat.diagnostics(),harbor:harbor.diagnostics(),stiltHouses:stiltHouses.diagnostics(),weather:lastWeather,shoreIce:frost.visible,collisionProxies:collisions.length,sceneryBirds:birds.length,visibleBirds:birds.filter(b=>b.visible).length,additionalNpcCount:0,sharedWeather:true,causticsMobileDisabled:mobile,arrivalCups:2,arrivalBell:true})};
}
