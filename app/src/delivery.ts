// Shared world coordinates: routes, table service points, and stepped entry heights.
export type Node=readonly [number,number,number];
const stage:Node=[-1.1,.405,3.85];
const entry:Node[]=[stage,[-1.1,.55,3.05],[-1.1,.70,3.05],[-1.1,.70,2.70],[-1.1,.85,2.70],[-1.1,.85,2.39],[-1.1,.85,1.72],[-.7,.85,1.5]];
export const serviceStops=[
 {id:'patio-lin',cup:[3.73,1.19,2.8] as Node,yaw:-Math.PI/2,route:[stage,[-.3,.26,4.65],[4.75,.26,4.65],[4.75,.26,2.8],[4.5,.26,2.8]] as Node[]},
 {id:'patio-north',cup:[3.73,1.19,.35] as Node,yaw:-Math.PI/2,route:[stage,[-.3,.26,4.65],[4.75,.26,4.65],[4.75,.26,.35],[4.5,.26,.35]] as Node[]},
 {id:'indoor-round',cup:[-.75,1.61,.73] as Node,yaw:Math.PI,route:[...entry,[-.75,.85,1.5],[-.75,.85,1.35]] as Node[]},
 {id:'indoor-window',cup:[-.87,1.61,-1.45] as Node,yaw:-Math.PI/2,route:[...entry,[.45,.85,1.5],[.45,.85,.55],[.45,.85,-.15],[.1,.85,-.4],[-.25,.85,-1.45]] as Node[]},
];
const smooth=(u:number)=>{u=Math.max(0,Math.min(1,u));return u*u*(3-2*u)};
const turn=(a:number,b:number,u:number)=>a+Math.atan2(Math.sin(b-a),Math.cos(b-a))*smooth(u);
const length=(a:Node,b:Node)=>Math.hypot(b[0]-a[0],b[1]-a[1],b[2]-a[2]);
const heading=(a:Node,b:Node)=>Math.atan2(b[0]-a[0],b[2]-a[2]);
const durations=serviceStops.map(s=>s.route.slice(1).reduce((sum,p,i)=>sum+length(s.route[i],p),0)/.9);
export const serviceDuration=durations.reduce((sum,n)=>sum+n*2+8,0);
function along(route:Node[],u:number,reverse=false){
 const lengths=route.slice(1).map((p,i)=>length(route[i],p));let d=Math.max(0,Math.min(1,u))*lengths.reduce((a,b)=>a+b,0);
 for(let i=0;i<lengths.length;i++){if(d<=lengths[i]||i===lengths.length-1){const a=route[i],b=route[i+1],f=d/lengths[i];let yaw=heading(a,b);if(i>0&&d<.15)yaw=turn(heading(route[i-1],a),yaw,.5+d/.3);if(i<lengths.length-1&&lengths[i]-d<.15)yaw=turn(yaw,heading(b,route[i+2]),.5-(lengths[i]-d)/.3);return {x:a[0]+(b[0]-a[0])*f,y:a[1]+(b[1]-a[1])*f,z:a[2]+(b[2]-a[2])*f,yaw:yaw+(reverse?Math.PI:0)}}d-=lengths[i]}throw Error('Missing service route');
}
export function sampleService(time:number){
 let t=((time%serviceDuration)+serviceDuration)%serviceDuration,index=0;
 while(index<3&&t>=durations[index]*2+8){t-=durations[index]*2+8;index++}
 const stop=serviceStops[index],travel=durations[index],end=stop.route.at(-1)!,arrival=heading(stop.route.at(-2)!,end);
 let phase='pickup',walk=0,pour=0,pose=along(stop.route,0),transfer=0;
 if(t>=1&&t<1+travel){phase='outbound';walk=1;pose=along(stop.route,(t-1)/travel)}
 else if(t>=1+travel&&t<7+travel){phase='serve';const elapsed=t-1-travel;pose={x:end[0],y:end[1],z:end[2],yaw:turn(arrival,stop.yaw,elapsed/.6)};pour=smooth((elapsed-.8)/.7)*(1-smooth((elapsed-4.3)/.7));transfer=smooth((elapsed-1.5)/2.8)}
 else if(t>=7+travel&&t<7+travel*2){phase='return';walk=1;pose=along(stop.route,1-(t-7-travel)/travel,true);transfer=1}
 else if(t>=7+travel*2){phase='rest';transfer=1}
 return {...pose,phase,walk,pour,transfer,tableIndex:index,tableId:stop.id,cupTarget:[...stop.cup],cycleTime:t,cupOnTable:transfer===1,doorOpen:index>=2&&t>1&&t<7+travel*2};
}
