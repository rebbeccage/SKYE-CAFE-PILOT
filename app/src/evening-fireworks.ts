import * as T from 'three';
/** Small world-anchored fireworks, sharing the existing weather/daylight state. */
export function createEveningFireworks(scene:T.Scene,host:HTMLElement){
 const mobile=matchMedia('(max-width:700px)').matches,reduced=matchMedia('(prefers-reduced-motion:reduce)'),count=mobile?180:288;
 const positions=new Float32Array(count*3),colors=new Float32Array(count*3),alpha=new Float32Array(count),geo=new T.BufferGeometry();
 geo.setAttribute('position',new T.BufferAttribute(positions,3));geo.setAttribute('color',new T.BufferAttribute(colors,3));geo.setAttribute('sparkAlpha',new T.BufferAttribute(alpha,1));
 const palette=['#D69CA6','#D9BD7D','#91B7AF','#A7A6CB','#C7D5AE'].map(c=>new T.Color(c));
 for(let i=0;i<count;i++){const c=palette[Math.floor(i/(count/3))%5];colors.set([c.r,c.g,c.b],i*3)}
 const mat=new T.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,uniforms:{pixelHeight:{value:900}},vertexShader:`attribute float sparkAlpha;attribute vec3 color;varying vec3 tint;varying float opacity;uniform float pixelHeight;void main(){vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p;gl_PointSize=clamp(.15*pixelHeight*projectionMatrix[1][1]/p.w,2.,7.);tint=color;opacity=sparkAlpha;}`,fragmentShader:`varying vec3 tint;varying float opacity;void main(){float d=length(gl_PointCoord-.5);float a=(1.-smoothstep(.08,.5,d))*opacity;gl_FragColor=vec4(tint,a);}`});
 const points=new T.Points(geo,mat);points.frustumCulled=false;points.name='Quiet dusk fireworks';points.visible=false;scene.add(points);
 const hint=document.createElement('div');hint.id='firework-hint';hint.textContent='有惊喜，快抬头看';hint.setAttribute('role','status');hint.hidden=true;host.append(hint);
 let elapsed=0,active=false;const centers=[[-9,13,-13],[5,15,-18],[-1,17,-21]];
 return {update(dt:number,clearDusk:boolean,outside:boolean,blocked:boolean,height:number){
  if(!clearDusk){active=false;elapsed=0;points.visible=false;hint.hidden=true;return}
  if(!active){active=true;elapsed=0}if(outside)elapsed+=dt;points.visible=outside;hint.hidden=!outside||blocked||elapsed>10;
  if(!outside)return;mat.uniforms.pixelHeight.value=height;
  for(let i=0;i<count;i++){const g=Math.floor(i/(count/3)),k=i%(count/3),n=count/3,life=reduced.matches?1.45:(elapsed-g*1.7+16)%16;
   const a=k*2.399963,up=1-2*(k+.5)/n,r=Math.sqrt(1-up*up),spread=Math.max(0,Math.min(life,4.8)),speed=1.4+(k%5)*.13;
   const radius=spread*speed*Math.exp(-spread*.18),c=centers[g];positions[i*3]=c[0]+Math.cos(a)*r*radius;positions[i*3+1]=c[1]+up*radius-spread*spread*.16;positions[i*3+2]=c[2]+Math.sin(a)*r*radius;
   alpha[i]=life<4.8?Math.min(1,life/.35)*Math.pow(1-life/4.8,.6)*.85:0;
  }geo.attributes.position.needsUpdate=true;geo.attributes.sparkAlpha.needsUpdate=true;
 },diagnostics:()=>({active,visible:points.visible,elapsed,particles:count,hint:!hint.hidden,centers,draws:1,additionalLights:0})};
}
