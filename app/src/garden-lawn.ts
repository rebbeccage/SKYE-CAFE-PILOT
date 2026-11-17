import * as T from 'three';
import {gardenPaths,gardenPathDistance} from './garden-path';

// Garden-local coordinates. The existing slab/collider and every prop stay fixed.
export const lawnParameters={GrassHeight:.7,WindSpeed:.35,WindDirection:90 as const,Dryness:.12,WearMask:1,TrifoilDensity:.5};
const X0=-1.35,X1=8.35,Z0=5.53,Z1=9.5;
const patches=[[1.87,7.72,.25,.18],[1.3,7.5,.22,.2],[2.5,7.22,.18,.15],[3.02,7.05,.36,.25],[6.55,5.95,.58,.23],[1.5,9.13,.58,.23],[-.1,6.2,.24,.22],[3,8.65,.24,.22],[3.1,5.95,.24,.22],[5.75,6.65,.19,.19],[-.95,7.6,.25,.25]];
const footprints=gardenPaths.flatMap(path=>path.filter((_,i)=>i%2===0).map(([x,z],i)=>[x+(i%2?.08:-.08),z]));
const roots=[[-.1,6.2],[3,8.65],[3.1,5.95]];
const smooth=(a:number,b:number,x:number)=>T.MathUtils.smoothstep(x,a,b);
const noise=(x:number,z:number)=>Math.sin(x*2.8+Math.cos(z*1.9))*.25+Math.sin(z*5.7+x*.9)*.14+Math.cos(x*12.7-z*9.1)*.07;
export const gardenGroundHeight=(x:number,z:number)=>.254+noise(x,z)*.027;
function masks(x:number,z:number){
 const d=gardenPathDistance(x,z);
 const wear=1-smooth(.20,.48,d);let bare=0;
 for(const [px,pz,rx,rz] of patches)bare=Math.max(bare,1-smooth(.55,1.15,Math.hypot((x-px)/rx,(z-pz)/rz)));
 const edge=Math.min(x-X0,X1-x,z-Z0,Z1-z);const border=1-smooth(.035,.15+noise(x,z)*.07,edge);
 let foot=0;for(const [fx,fz] of footprints)foot=Math.max(foot,1-smooth(.5,1,Math.hypot((x-fx)/.055,(z-fz)/.12)));
 let mound=0;for(const [rx,rz] of roots)mound=Math.max(mound,1-smooth(.08,.4,Math.hypot(x-rx,z-rz)));
 const ridge=(1-smooth(.39,.49,d))*smooth(.30,.39,d);
 return {wear,bare,border,foot,mound,ridge};
}
export function createGardenLawn(parent:T.Object3D){
 const root=new T.Group();root.name='Garden lawn — continuous living turf';parent.add(root);
 const mobile=typeof matchMedia!=='undefined'&&matchMedia('(max-width: 700px)').matches;
 const uniforms={uTime:{value:0},uRain:{value:0},uSnow:{value:0},uWind:{value:mobile?0:lawnParameters.WindSpeed},uHeight:{value:lawnParameters.GrassHeight},uDry:{value:lawnParameters.Dryness},uWear:{value:lawnParameters.WearMask},uClover:{value:lawnParameters.TrifoilDensity}};
 const mid=new T.Color('#A8B98F'),dark=new T.Color('#8E9E7A'),tip=new T.Color('#C9CFC0'),dry=new T.Color('#B9A94E'),earth=new T.Color('#6B5A4A');
 const width=512,data=new Uint8Array(width*width*4);
 // Single splat atlas: R = worn grass, G = exposed soil, B = colour variation.
 for(let j=0;j<width;j++)for(let i=0;i<width;i++){const x=X0+i/(width-1)*(X1-X0),z=Z0+j/(width-1)*(Z1-Z0),m=masks(x,z),n=(j*width+i)*4;data[n]=Math.round(m.wear*255);data[n+1]=Math.round(Math.max(m.bare,m.border)*255);data[n+2]=Math.round(T.MathUtils.clamp(.5+noise(x,z),0,1)*255);data[n+3]=Math.round(m.foot*255);}
 const splat=new T.DataTexture(data,width,width,T.RGBAFormat);splat.minFilter=splat.magFilter=T.LinearFilter;splat.needsUpdate=true;
 const groundMat=new T.MeshStandardMaterial({color:0xffffff,roughness:.96,vertexColors:true});
 const grassMat=new T.MeshStandardMaterial({color:0xffffff,roughness:.9,vertexColors:true,side:T.DoubleSide});
 function shade(mat:T.MeshStandardMaterial,ground:boolean){mat.onBeforeCompile=shader=>{
  Object.assign(shader.uniforms,uniforms,{uSplat:{value:splat}});
  shader.vertexShader='attribute vec4 lawnData;\nvarying vec4 vLawn;\nvarying vec3 vLawnPosition;\nuniform float uTime,uRain,uSnow,uWind,uHeight;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
   vLawn=lawnData;vLawnPosition=position;
   ${ground?'transformed.y+=uSnow*(.012+lawnData.z*.085+lawnData.w*.022);':`float flex=lawnData.x;float snowBit=step(.5,lawnData.y);float tall=step(1.5,lawnData.y);
   float bend=(.018+uRain*.025+uSnow*.028)*flex*flex;
   float wave=sin(uTime*(2.5+uWind*4.)+position.x*2.1+position.z*3.3)*uWind*.045*flex*flex;
   transformed.x+=bend+wave;transformed.z+=bend+wave;
   transformed.y+=flex*(uHeight/.7-1.)*.07-uSnow*flex*.012;
   if(snowBit>.5&&tall<.5){transformed.y-=.3*(1.-uSnow);}
   `}`);
  shader.fragmentShader='varying vec4 vLawn;\nvarying vec3 vLawnPosition;\nuniform sampler2D uSplat;\nuniform float uRain,uSnow,uDry,uWear,uClover;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
   vec2 uvL=vec2((vLawnPosition.x-(${X0.toFixed(2)}))/${(X1-X0).toFixed(2)},(vLawnPosition.z-${Z0})/${(Z1-Z0).toFixed(2)});
   vec4 mask=texture2D(uSplat,uvL);float worn=mask.r*uWear;float soil=mask.g;
   float grit=fract(sin(dot(vLawnPosition.xz,vec2(129.81,243.73)))*43758.54);
   float lum=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(lum),uRain*.35)*(1.-uRain*.12);
   ${ground?`diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.41,.43,.30),worn*.32);
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.147,.102,.068)*(1.-uRain*.3),soil*.82);
   vec3 snowCol=mix(vec3(.552,.624,.597),vec3(.738,.768,.753),mask.b);
   float cover=(.58+grit*.19)*(1.-worn*.47)*(1.-soil*.32);
   diffuseColor.rgb=mix(diffuseColor.rgb,snowCol*(1.-mask.a*.22),uSnow*cover);`:
   `if(vLawn.y>2.5&&vLawn.y<3.5&&vLawn.w>uClover)discard;
   if(vLawn.y<.5){diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.36,.34,.20),max(0.,uDry-.12)*.3);}
   if(vLawn.y>.5&&vLawn.y<1.5){if(uSnow<.05)discard;diffuseColor.rgb=mix(vec3(.552,.624,.597),vec3(.82,.85,.80),vLawn.z);}
   if(vLawn.y>1.5){diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.60,.67,.61),uSnow*.24);}`}
  `);
  shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor=max(.4,roughnessFactor-uRain*(.18+worn*.32));');
 };mat.customProgramCacheKey=()=>ground?'garden-lawn-ground-v1':'garden-lawn-blades-v1';}
 shade(groundMat,true);shade(grassMat,false);
 const groundGeo=new T.PlaneGeometry(X1-X0,Z1-Z0,160,68);groundGeo.rotateX(-Math.PI/2);groundGeo.translate((X0+X1)/2,0,(Z0+Z1)/2);
 const pos=groundGeo.attributes.position,colors=[],meta=[];
 for(let i=0;i<pos.count;i++){const x=pos.getX(i),z=pos.getZ(i),n=noise(x,z);pos.setY(i,gardenGroundHeight(x,z));const c=mid.clone().lerp(n<0?dark:tip,Math.abs(n)*1.5).multiplyScalar(.48);colors.push(c.r,c.g,c.b);const m=masks(x,z);meta.push(0,0,m.mound,m.ridge-m.foot*.4-m.bare*.45);}
 groundGeo.setAttribute('color',new T.Float32BufferAttribute(colors,3));groundGeo.setAttribute('lawnData',new T.Float32BufferAttribute(meta,4));groundGeo.computeVertexNormals();
 const turf=new T.Mesh(groundGeo,groundMat);turf.name='Continuous turf inside stone coping';turf.receiveShadow=true;root.add(turf);
 // Real tapered blades, not alpha billboards. One merged draw, opaque depth-tested
 // from every orbit angle; snow beads are actual tip geometry in the same draw.
 const verts:number[]=[],cols:number[]=[],attrs:number[]=[];
 let seed=4931;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
 function vertex(x:number,y:number,z:number,c:T.Color,flex:number,kind=0,lit=.6,density=0){verts.push(x,y,z);cols.push(c.r,c.g,c.b);attrs.push(flex,kind,lit,density)}
 function tri(a:number[],b:number[],c:number[],color:T.Color,flex:number[],kind=0,density=0){[a,b,c].forEach((p,i)=>vertex(p[0],p[1],p[2],color,flex[i],kind,i===1?.95:.3,density))}
 function bead(x:number,y:number,z:number,r:number,flex=1){const c=tip;const points=[[x+r,y,z],[x,y,z+r],[x-r,y,z],[x,y,z-r]];for(let k=0;k<4;k++){tri(points[k],[x,y+r*.65,z],points[(k+1)%4],c,[flex,flex,flex],1);tri(points[(k+1)%4],[x,y-r*.5,z],points[k],c,[flex,flex,flex],1)}}
 let blades=0,tips=0,tallStems=0,clovers=0;
 const count=mobile?6500:18000;
 for(let i=0;i<count;i++){
  const x=X0+.03+rnd()*(X1-X0-.06),z=Z0+.03+rnd()*(Z1-Z0-.06),m=masks(x,z);
  if(rnd()<Math.max(m.bare*.95,m.border*.92,m.wear*.8))continue;
  const y=gardenGroundHeight(x,z),h=(.04+rnd()*.03)*(1-m.wear*.65),a=rnd()*Math.PI*2,w=.005+rnd()*.008,dx=Math.cos(a)*w,dz=Math.sin(a)*w;
  const c=(rnd()<.08?dry:rnd()<.22?dark:mid).clone().multiplyScalar(.52);const base=c.clone().multiplyScalar(.8),top=c.clone().lerp(tip.clone().multiplyScalar(.52),.2+rnd()*.2);
  tri([x-dx,y,z-dz],[x+dx,y,z+dz],[x+.014+dx*.55,y+h*.6,z+.014+dz*.55],base,[0,0,.6]);
  tri([x-dx,y,z-dz],[x+.014+dx*.55,y+h*.6,z+.014+dz*.55],[x+.014-dx*.55,y+h*.6,z+.014-dz*.55],c,[0,.6,.6]);
  tri([x+.014-dx*.55,y+h*.6,z+.014-dz*.55],[x+.014+dx*.55,y+h*.6,z+.014+dz*.55],[x+.026,y+h,z+.026],top,[.6,.6,1]);blades++;
  if(i%3===0&&h>.045){bead(x+.026,y+h,z+.026,.004+rnd()*.0035);tips++;}
 }
 // Clover and occasional dry stems at disturbed soil margins; cat itself unchanged.
 for(let i=0;i<135;i++){
  const p=patches[i%patches.length],a=rnd()*Math.PI*2,x=p[0]+Math.cos(a)*p[2]*(.85+rnd()*.5),z=p[1]+Math.sin(a)*p[3]*(.85+rnd()*.5);
  if(x<X0+.08||x>X1-.08||z<Z0+.08||z>Z1-.08)continue;
  const y=gardenGroundHeight(x,z),h=.12+rnd()*.06,c=i%3===0?dry:dark;
  tri([x-.003,y,z],[x+.003,y,z],[x+.024,y+h,z-.018],c,[0,0,1],2);bead(x+.024,y+h,z-.018,.005);tallStems++;
  if(i%2===0){for(let j=0;j<3;j++){const a=j*2.094,xx=x+Math.cos(a)*.021,zz=z+Math.sin(a)*.021;tri([x,y+.025,z],[xx-Math.sin(a)*.016,y+.032,zz+Math.cos(a)*.016],[xx+Math.cos(a)*.017,y+.027,zz+Math.sin(a)*.017],mid,[.2,.3,.3],3,i/135);tri([x,y+.025,z],[xx+Math.cos(a)*.017,y+.027,zz+Math.sin(a)*.017],[xx+Math.sin(a)*.016,y+.032,zz-Math.cos(a)*.016],mid,[.2,.3,.3],3,i/135)}clovers++;}
  if(i%29===0)for(let j=0;j<7;j++){const a=j*.897;tri([x+.024,y+h,z-.018],[x+.024+Math.cos(a)*.015,y+h+.004,z-.018+Math.sin(a)*.015],[x+.024+Math.cos(a+.8)*.015,y+h+.004,z-.018+Math.sin(a+.8)*.015],dry,[1,1,1],2)}
 }
 // A few blades and leaf litter soften the grass/stone meeting without changing the outline.
 for(let i=0;i<5;i++)for(let j=0;j<4;j++){
  const x=X0+.05,z=6+i*.65+j*.018,y=.255;
  tri([x,y,z-.004],[x,y,z+.004],[X0-.09,.23,z+.06],dark,[0,0,0],2);
  tri([X0-.09,.23,z+.06],[X0-.083,.23,z+.064],[X0-.105,.205,z+.08],dark,[0,0,0],2);
 }
 for(let i=0;i<65;i++){
  const x=X0+.02+rnd()*(X1-X0-.04),z=i%2?Z0+.035+rnd()*.055:Z1-.035-rnd()*.055,y=gardenGroundHeight(x,z)+.003,a=rnd()*6.28;
  const c=i%3?earth:dry.clone().multiplyScalar(.5),dx=Math.cos(a)*.035,dz=Math.sin(a)*.035;
  tri([x-dx,y,z-dz],[x-dz*.2,y+.002,z+dx*.2],[x+dx,y,z+dz],c,[0,0,0],4);
  tri([x-dx,y,z-dz],[x+dx,y,z+dz],[x+dz*.2,y+.002,z-dx*.2],c,[0,0,0],4);
 }
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(verts,3));g.setAttribute('color',new T.Float32BufferAttribute(cols,3));g.setAttribute('lawnData',new T.Float32BufferAttribute(attrs,4));g.computeVertexNormals();
 const grass=new T.Mesh(g,grassMat);grass.name='Bent blades, clover, protruding stems and tip snow';grass.receiveShadow=true;grass.castShadow=false;root.add(grass);
 let current='sun';
 return {root,parameters:lawnParameters,update(t:number,weather:'sun'|'rain'|'snow'){
  current=weather;uniforms.uTime.value=t;uniforms.uRain.value=weather==='rain'?1:0;uniforms.uSnow.value=weather==='snow'?1:0;
  uniforms.uWind.value=mobile?0:T.MathUtils.clamp(lawnParameters.WindSpeed,0,1);uniforms.uHeight.value=T.MathUtils.clamp(lawnParameters.GrassHeight,.5,1.2)*(weather==='snow'?.85:1);
  uniforms.uDry.value=weather==='snow'?Math.max(.6,lawnParameters.Dryness):lawnParameters.Dryness;uniforms.uWear.value=T.MathUtils.clamp(lawnParameters.WearMask,0,1);uniforms.uClover.value=T.MathUtils.clamp(lawnParameters.TrifoilDensity,0,1);
 },diagnostics:()=>({weather:current,visible:root.visible,drawCalls:2,alphaCards:0,blades,snowTipMeshes:tips,tallStems,clovers,footprints:footprints.length,rootSnowMounds:roots.length,mobile,wind:uniforms.uWind.value,snow:uniforms.uSnow.value,rain:uniforms.uRain.value,height:uniforms.uHeight.value,dryness:uniforms.uDry.value,wear:uniforms.uWear.value,bounds:[X0,X1,Z0,Z1],terrainRange:[.24,.27],maskSize:[512,512],stoneCoping:true,continuous:true,parameters:{...lawnParameters}})};
}
