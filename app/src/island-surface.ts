import * as T from 'three';
import {SEA_LEVEL,ISLAND_SIZE,RESERVE_AREAS,islandRadius,terrainHeight,causticsAtlas} from './island-geography';
export type IslandUniforms={time:{value:number},rain:{value:number},snow:{value:number},dusk:{value:number}};
export function createIslandTerrain(scene:T.Scene,u:IslandUniforms,mobile:boolean){
 const size=180,n=160,geo=new T.PlaneGeometry(size,size,n,n);geo.rotateX(-Math.PI/2);const p=geo.attributes.position;const rgb:number[]=[];const shades=[new T.Color('#EFE6D4'),new T.Color('#E3D3B3'),new T.Color('#D9CFC0')];
 for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i);p.setY(i,terrainHeight(x,z));const c=shades[0].clone().lerp(shades[1],.24+.18*Math.sin(x*.37+z*.14)).lerp(shades[2],.1+.1*Math.sin(x*.8-z*.3));rgb.push(c.r,c.g,c.b)}geo.setAttribute('color',new T.Float32BufferAttribute(rgb,3));geo.computeVertexNormals();
 const material=new T.MeshStandardMaterial({color:0xe4d3b7,vertexColors:true,roughness:.85});
 const water={value:SEA_LEVEL},caustics={value:mobile?0:.5};material.onBeforeCompile=s=>{Object.assign(s.uniforms,u,{waterLevel:water,causticsStrength:caustics,causticsTex:{value:causticsAtlas()}});s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 sandPosition;uniform float snow,waterLevel;').replace('#include <begin_vertex>','#include <begin_vertex>\nsandPosition=position;transformed.y+=snow*.05*smoothstep(waterLevel+.01,waterLevel+.14,position.y);');s.fragmentShader=s.fragmentShader.replace('#include <common>',`#include <common>
 varying vec3 sandPosition;uniform float time,rain,snow,dusk,waterLevel,causticsStrength;uniform sampler2D causticsTex;
 float grain(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
 `).replace('#include <color_fragment>',`#include <color_fragment>
 float depth=waterLevel-sandPosition.y;float wet=1.-smoothstep(-.02,.22,-depth);wet=max(wet,rain*.72);
 float ripple=sin(sandPosition.x*94.+sin(sandPosition.z*3.)*.5)*.012;diffuseColor.rgb*=1.-wet*.18+ripple;
 float path=1.-smoothstep(.5,.95,abs(sandPosition.x+3.5+sin(sandPosition.z*.3)*.15));path*=smoothstep(5.3,7.,sandPosition.z)*(1.-smoothstep(7.,8.,sandPosition.z));diffuseColor.rgb*=1.-path*.065;
 float mottle=grain(floor(sandPosition.xz*7.))*.013;diffuseColor.rgb+=mottle;
 float snowMask=snow*smoothstep(-.02,.12,-depth);vec3 snowColor=mix(vec3(.55,.62,.61),vec3(.78,.82,.80),.5+.3*sin(sandPosition.x*.7)*sin(sandPosition.z*.9));diffuseColor.rgb=mix(diffuseColor.rgb,snowColor,snowMask*.92);
 float frame=mod(floor(time*8.),8.);vec2 cuv=fract(sandPosition.xz*.36);cuv.x=(cuv.x+frame)/8.;float caustic=texture2D(causticsTex,cuv).r;
 float underwater=smoothstep(.03,.3,depth)*(1.-smoothstep(1.6,2.,depth));diffuseColor.rgb+=caustic*causticsStrength*.3*underwater*(1.-rain)*(1.-snow);
 `).replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor=mix(.85,.45,wet)*(1.-snowMask)+.94*snowMask;');};
 const terrain=new T.Mesh(geo,material);terrain.name='Continuous island sand and submerged shoal';terrain.receiveShadow=true;scene.add(terrain);
 return {terrain,water,caustics,diagnostics:()=>({size:ISLAND_SIZE.toArray(),shape:"crescent",reserves:RESERVE_AREAS,grid:n,continuousShore:true,geographyStable:true,heightDatum:SEA_LEVEL,landHeight:1.775,beachHeight:.6,causticsDepth:[0,2],landSample:terrainHeight(0,0),shoreSamples:Array.from({length:12},(_,i)=>islandRadius(Math.cos(i)*16,Math.sin(i)*23))})};
}
