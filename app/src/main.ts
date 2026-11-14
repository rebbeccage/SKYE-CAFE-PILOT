import './style.css';
import { initGame } from './game';
import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildWorld, updatePeople, materials } from './world';
import { makeRendering } from './ambient';

const $=<E extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as E;
const icons={
 sound:'<path d="M9 4 5 7H2v6h3l4 3V4Z"/><path d="M13 6a6 6 0 0 1 0 8m2-11a10 10 0 0 1 0 14"/>',
 mute:'<path d="M9 4 5 7H2v6h3l4 3V4Z"/><path d="m13 7 6 6m0-6-6 6"/>',
 help:'<circle cx="10" cy="10" r="8"/><path d="M7.6 7.5a2.5 2.5 0 1 1 3.8 2.1c-1.4.7-1.4 1-1.4 2M10 14.5v.1"/>',
 rotate:'<path d="M17 8a7 7 0 0 0-12-3L2 8m0-5v5h5m-4 4a7 7 0 0 0 12 3l3-3m0 5v-5h-5"/>',
 reset:'<path d="m2 9 8-7 8 7M4 8v10h12V8M8 18v-6h4v6"/>',
 light:'<circle cx="10" cy="10" r="3.5"/><path d="M10 1v2m0 14v2M1 10h2m14 0h2M3.6 3.6 5 5m10 10 1.4 1.4M3.6 16.4 5 15M15 5l1.4-1.4"/>',
 moon:'<path d="M17.5 12.3A8 8 0 0 1 7.7 2.5a8 8 0 1 0 9.8 9.8Z"/>',
 photo:'<path d="M2 6h4l1.5-3h5L14 6h4v11H2Z"/><circle cx="10" cy="11" r="3.5"/>'
};
const svg=(name:keyof typeof icons)=>`<svg viewBox="0 0 20 20" aria-hidden="true">${icons[name]}</svg>`;
$('sound').innerHTML=svg('mute');$('help').innerHTML=svg('help');
for(const name of ['rotate','reset','light','photo'] as const)$(name+'-icon').innerHTML=svg(name);

type Mode='outside'|'inside';
const state={mode:'outside' as Mode,time:0,paused:false,night:false,auto:false,order:0,cups:0,frames:0,transition:false,ready:false,fps:60,sound:false};
const host=$('world');
let renderer:T.WebGLRenderer;
try{renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance',preserveDrawingBuffer:true});}
catch{$('loading').innerHTML='<p>浏览器暂时无法开启 3D</p><span>请开启硬件加速，或使用最新版 Safari / Chrome。</span>';throw new Error('WebGL unavailable')}
renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.setSize(innerWidth,innerHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFShadowMap;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.0;renderer.outputColorSpace=T.SRGBColorSpace;renderer.info.autoReset=false;host.append(renderer.domElement);
const scene=new T.Scene();scene.background=new T.Color(0xf5f3ed);
const pmrem=new T.PMREMGenerator(renderer);const env=new RoomEnvironment();const envTex=pmrem.fromScene(env,.05);scene.environment=envTex.texture;scene.environmentIntensity=.52;env.dispose();pmrem.dispose();
const hemi=new T.HemisphereLight(0xfff7e7,0xc0bca6,1.3);scene.add(hemi);
const sun=new T.DirectionalLight(0xffeed3,3.3);sun.position.set(-5,10,7);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-9;sun.shadow.camera.right=9;sun.shadow.camera.top=9;sun.shadow.camera.bottom=-9;sun.shadow.camera.near=.5;sun.shadow.camera.far=35;sun.shadow.normalBias=.025;sun.shadow.bias=-.00012;sun.shadow.radius=4;scene.add(sun);sun.target.position.set(0,0,0);scene.add(sun.target);
const fill=new T.DirectionalLight(0xf3f5ed,.8);fill.position.set(5,5,-6);scene.add(fill);
const ground=new T.Mesh(new T.PlaneGeometry(200,200),new T.MeshStandardMaterial({color:0xf5f3ed,roughness:1}));ground.rotation.x=-Math.PI/2;ground.position.y=-.205;ground.receiveShadow=true;scene.add(ground);
// A soft contact shadow grounds the small model against the seamless backdrop.
const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=256;const sc=shadowCanvas.getContext('2d')!;const grad=sc.createRadialGradient(128,128,12,128,128,128);grad.addColorStop(0,'rgba(72,69,48,.22)');grad.addColorStop(.55,'rgba(72,69,48,.12)');grad.addColorStop(1,'rgba(72,69,48,0)');sc.fillStyle=grad;sc.fillRect(0,0,256,256);const contact=new T.Mesh(new T.PlaneGeometry(15,13),new T.MeshBasicMaterial({map:new T.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false}));contact.rotation.x=-Math.PI/2;contact.position.set(.4,-.19,.5);scene.add(contact);
const world=buildWorld(scene);
const outsideCamera=new T.OrthographicCamera(-10,10,7,-7,.1,200);const insideCamera=new T.PerspectiveCamera(67,innerWidth/innerHeight,.025,80);let camera:T.Camera=outsideCamera;
const rendering=makeRendering(renderer,scene,camera);
const outsideControls=new OrbitControls(outsideCamera,renderer.domElement);outsideControls.enableDamping=true;outsideControls.dampingFactor=.065;outsideControls.enablePan=false;outsideControls.minPolarAngle=Math.PI*.18;outsideControls.maxPolarAngle=Math.PI*.405;outsideControls.minZoom=.73;outsideControls.maxZoom=1.8;outsideControls.autoRotateSpeed=.33;
const insideControls=new OrbitControls(insideCamera,renderer.domElement);insideControls.enableDamping=true;insideControls.enablePan=false;insideControls.minPolarAngle=1.3;insideControls.maxPolarAngle=1.72;insideControls.minAzimuthAngle=-.6;insideControls.maxAzimuthAngle=.6;insideControls.minDistance=1.8;insideControls.maxDistance=3.15;insideControls.rotateSpeed=.35;insideControls.zoomSpeed=.5;insideControls.enabled=false;
let controls:OrbitControls<T.OrthographicCamera>|OrbitControls<T.PerspectiveCamera>=outsideControls;
function resetCamera(){if(state.mode==='outside'){outsideControls.target.set(0,1.8,0);outsideCamera.position.set(35.4,29.4,42);outsideCamera.zoom=1;outsideCamera.updateProjectionMatrix()}else{insideControls.target.set(0,2.35,-1.32);insideCamera.position.set(0,2.5,1.65);insideCamera.zoom=1;insideCamera.updateProjectionMatrix()}controls.update()}
function resize(){const w=innerWidth,h=innerHeight,aspect=w/h;renderer.setSize(w,h);const view=w<=900?Math.max(14,14.9/aspect):12.9;const shift=w>1100?-1.6:w>900?-.65:0;outsideCamera.left=-view*aspect/2+shift;outsideCamera.right=view*aspect/2+shift;outsideCamera.top=view/2+(w<=900?-2:0);outsideCamera.bottom=-view/2+(w<=900?-2:0);outsideCamera.updateProjectionMatrix();insideCamera.aspect=aspect;insideCamera.fov=w<650?83:67;insideCamera.updateProjectionMatrix();rendering.resize()}
resize();resetCamera();window.addEventListener('resize',resize);
const doorHint=$('door-hint');const hint=$('object-hint');const raycaster=new T.Raycaster();const pointer=new T.Vector2();const screenPoint=new T.Vector3();const hotspots=world.hotspots;
let toastTimer=0;
function toast(text:string){$('toast').textContent=text;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=window.setTimeout(()=>$('toast').classList.remove('visible'),3800)}
async function switchScene(mode:Mode){if(state.transition||state.mode===mode)return;state.transition=true;$('fade').classList.add('show');await new Promise(r=>setTimeout(r,420));state.mode=mode;state.auto=false;$('rotate').setAttribute('aria-pressed','false');outsideControls.enabled=mode==='outside';insideControls.enabled=mode==='inside';controls=mode==='outside'?outsideControls:insideControls;camera=mode==='outside'?outsideCamera:insideCamera;outsideControls.autoRotate=false;document.body.classList.toggle('scene-interior',mode==='inside');$('outside').classList.toggle('active',mode==='outside');$('inside').classList.toggle('active',mode==='inside');$('outside').setAttribute('aria-pressed',String(mode==='outside'));$('inside').setAttribute('aria-pressed',String(mode==='inside'));$('scene-title').textContent=mode==='outside'?'把时光，留在玻璃间。':'欢迎，坐一会儿。';$('scene-copy').textContent=mode==='outside'?'一座会呼吸的温室咖啡馆':'黄铜的温度，和刚磨好的咖啡香';$('enter').innerHTML=mode==='outside'?'推门，喝杯咖啡 <span>↗</span>':'回到庭院 <span>↗</span>';$('gesture').textContent=mode==='outside'?'拖动环视 · 滚轮缩放':'拖动看店内 · 点击咖啡机';doorHint.hidden=mode==='inside';hint.hidden=true;world.door.rotation.y=mode==='inside'?-.9:-.11;resetCamera();playDoor();game.syncMusic();$('fade').classList.remove('show');state.transition=false;if(mode==='inside')toast('欢迎来到玻璃间。点阿禾聊聊，或打开菜单招待客人。')}
function orderCoffee(){if(state.order>0){toast('正在为你慢慢冲煮，请稍等片刻。');return}state.order=8;toast('咖啡师：一杯今日手冲，马上就好。');playPour()}
function activate(id:string){if(id.startsWith('person')){game.talk(Number(id.slice(6)));return}if(id==='door')switchScene(state.mode==='outside'?'inside':'outside');if(id==='coffee'){if(state.mode==='outside')switchScene('inside');else game.menu()}if(id==='table'){if(state.mode==='outside'){switchScene('inside');return}insideControls.target.set(.3,2.1,-1.1);insideCamera.position.set(.8,2.1,1.55);controls.update();toast('坐一会儿吧。咖啡有花香、柑橘，和一点点焦糖的甜。')}if(id==='sign')toast('今日手冲 · 浅烘焙 / 花香 / 柑橘。小店营业中。')}
function pick(clientX:number,clientY:number){pointer.set(clientX/innerWidth*2-1,-clientY/innerHeight*2+1);raycaster.setFromCamera(pointer,camera);return raycaster.intersectObjects(hotspots.map(h=>h.mesh),false)[0]?.object.userData.hit as string|undefined}
let down={x:0,y:0};renderer.domElement.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY};hint.hidden=true});renderer.domElement.addEventListener('pointerup',e=>{if(Math.hypot(e.clientX-down.x,e.clientY-down.y)>7||state.transition)return;const id=pick(e.clientX,e.clientY);if(id)activate(id)});
renderer.domElement.addEventListener('pointermove',e=>{if(e.buttons){hint.hidden=true;return}const id=pick(e.clientX,e.clientY);renderer.domElement.style.cursor=id?'pointer':'grab';if(id&&id!=='door'){hint.textContent=hotspots.find(h=>h.id===id)!.label;hint.style.left=e.clientX+'px';hint.style.top=e.clientY+'px';hint.hidden=false}else hint.hidden=true});renderer.domElement.addEventListener('pointerleave',()=>hint.hidden=true);
$('outside').onclick=()=>switchScene('outside');$('inside').onclick=()=>switchScene('inside');$('door-hint').onclick=()=>switchScene('inside');$('enter').onclick=()=>switchScene(state.mode==='outside'?'inside':'outside');
$('rotate').onclick=()=>{if(state.mode==='inside'){toast('店内可以拖动视线。回到庭院可开启 360° 环绕。');return}state.auto=!state.auto;outsideControls.autoRotate=state.auto;$('rotate').setAttribute('aria-pressed',String(state.auto));toast(state.auto?'绕着小店，慢慢看一圈。':'已停止环绕，可自由拖动。')};
$('reset').onclick=()=>{resetCamera();toast('回到最初的视角。')};
let targetNight=0,nightValue=0;
$('light').onclick=()=>{state.night=!state.night;targetNight=state.night?1:0;$('light').setAttribute('aria-pressed',String(state.night));$('light-icon').innerHTML=svg(state.night?'moon':'light');$('light-label').textContent=state.night?'暮色':'日光';$('time-label').textContent=state.night?'傍晚 · 18:08':'午后 · 15:24';toast(state.night?'傍晚的灯，已为你留好。':'又是一个有阳光的午后。')};
$('photo').onclick=()=>{rendering.render(camera);const a=document.createElement('a');a.download=`玻璃间-${state.mode==='outside'?'庭院':'店内'}-${Date.now()}.png`;a.href=renderer.domElement.toDataURL('image/png');a.click();toast('已保存这片刻的风景。')};
const guide=$('guide') as HTMLDialogElement;$('help').onclick=()=>{guide.showModal();controls.enabled=false};$('close-guide').onclick=()=>guide.close();guide.addEventListener('close',()=>controls.enabled=true);guide.addEventListener('click',e=>{if(e.target===guide){const r=guide.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)guide.close()}});
window.addEventListener('keydown',e=>{if(document.querySelector('dialog[open]'))return;if(e.key==='1')switchScene('outside');if(e.key==='2')switchScene('inside');if(e.key==='Escape')switchScene('outside');if(e.key.toLowerCase()==='r')resetCamera()});

// Optional, synthesized ambience: no media downloads and no autoplay audio.
let audioCtx:AudioContext|undefined,master:GainNode|undefined;
function initAudio(){if(audioCtx)return;audioCtx=new AudioContext();master=audioCtx.createGain();master.gain.value=0;master.connect(audioCtx.destination);const len=audioCtx.sampleRate*3,buf=audioCtx.createBuffer(1,len,audioCtx.sampleRate),data=buf.getChannelData(0);let brown=0;for(let i=0;i<len;i++){brown=(brown+Math.random()*.02-.01)/1.02;data[i]=brown*2}const noise=audioCtx.createBufferSource();noise.buffer=buf;noise.loop=true;const filter=audioCtx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=420;noise.connect(filter).connect(master);noise.start();for(const [f,v] of [[130.81,.009],[196,.007],[261.63,.005]]){const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='sine';o.frequency.value=f;g.gain.value=v;o.connect(g).connect(master);o.start()}}
function tone(f:number,dur:number,volume:number){if(!state.sound||!audioCtx||!master)return;const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.frequency.setValueAtTime(f,audioCtx.currentTime);g.gain.setValueAtTime(volume,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+dur);o.connect(g).connect(master);o.start();o.stop(audioCtx.currentTime+dur)}
function playDoor(){tone(1318,.7,.09);setTimeout(()=>tone(1760,.9,.035),90)}
function playPour(){for(let i=0;i<9;i++)setTimeout(()=>tone(700+Math.random()*500,.1,.018),i*240)}
const game=initGame({talkTargets:()=>{},decorate:ids=>{for(const [id,g] of Object.entries(world.decorations))g.visible=ids.includes(id)},brew:()=>{if(state.order>0){toast('咖啡师正在忙，请稍等。');return false}orderCoffee();return true},toast,lock:v=>{controls.enabled=!v},inside:()=>state.mode==='inside'});
$('sound').onclick=()=>{game.toggleMusic()};
window.addEventListener('cafe-music-change',(e:Event)=>{const m=(e as CustomEvent).detail;$('sound').innerHTML=svg(m.playing?'sound':'mute');$('sound').setAttribute('aria-pressed',String(m.playing));$('sound').setAttribute('aria-label',m.playing?'暂停馆内配乐':'开启馆内配乐')});
const talkChips=['阿禾','林伯','棠姨'].map((name,i)=>{const b=document.createElement('button');b.className='talk-chip';b.textContent=name+' · 聊聊';b.setAttribute('aria-label','与'+name+'对话');b.onclick=()=>game.talk(i);host.after(b);return b});
let last=performance.now(),fpsTime=0,fpsFrames=0,lastActivity='';
const dayBg=new T.Color(0xf5f3ed),duskBg=new T.Color(0xedece5),daySun=new T.Color(0xffeed3),duskSun=new T.Color(0xffc982);
function animate(now:number){requestAnimationFrame(animate);const dt=Math.min((now-last)/1000,.05);last=now;if(document.hidden||state.paused)return;state.time+=dt;state.frames++;fpsTime+=dt;fpsFrames++;if(fpsTime>1){state.fps=Math.round(fpsFrames/fpsTime);fpsTime=0;fpsFrames=0}if(state.order>0){state.order=Math.max(0,state.order-dt);game.tick(state.order);if(state.order===0){state.cups++;game.complete();tone(1046,.5,.04)}}updatePeople(world.actors,state.time,state.order);
 world.steam.children.forEach((o,i)=>{const f=(state.time*.25+i/9)%1;o.position.y=.05+f*.55;o.position.x=Math.sin(f*6+i)*.045;o.position.z=Math.cos(f*5+i)*.025;o.scale.set(.012*(1+f*1.6),.06*(1+f),.012*(1+f));});
 const delta=targetNight-nightValue;if(Math.abs(delta)>.001){nightValue+=delta*Math.min(dt*2,1);sun.intensity=3.3-nightValue*2.7;sun.color.copy(daySun).lerp(duskSun,nightValue);hemi.intensity=1.3-nightValue*.6;fill.intensity=.8-nightValue*.45;scene.environmentIntensity=.52-nightValue*.17;(scene.background as T.Color).copy(dayBg).lerp(duskBg,nightValue);materials.light.emissiveIntensity=1.25+nightValue*1.6;world.lamps.forEach(l=>l.intensity=5+nightValue*11)}
 const activity=state.order>0?'咖啡师正在为你冲煮':state.mode==='inside'?(Math.floor(state.time/8)%2?'杯里升起了热气':'咖啡师正在准备手冲'):(Math.floor(state.time/10)%3===0?'咖啡师正在准备手冲':Math.floor(state.time/10)%3===1?'园丁正在照料绿植':'客人正在享用午后咖啡');if(lastActivity!==activity){$('activity').textContent=activity;lastActivity=activity}
 world.actors.slice(0,3).forEach((a,i)=>{const h=hotspots.find(h=>h.id==='person'+i);if(h){h.point.copy(a.root.position);h.point.y+=i===0?1.5:1.1;h.mesh.position.copy(h.point)}});controls.update();if(state.mode==='outside'){screenPoint.copy(hotspots[0].point).project(camera);doorHint.style.left=(screenPoint.x*.5+.5)*innerWidth+'px';doorHint.style.top=(-screenPoint.y*.5+.5)*innerHeight+'px';const forward=outsideCamera.position.z>1.7;doorHint.style.opacity=forward?'1':'0';doorHint.style.pointerEvents=forward?'auto':'none';doorHint.hidden=false}
 talkChips.forEach((b,i)=>{const h=hotspots.find(h=>h.id==='person'+i)!;const p=h.point.clone();p.y+=.35;p.project(camera);b.hidden=!!document.querySelector('dialog[open]')||p.z>1||Math.abs(p.x)>.88||Math.abs(p.y)>.85||(state.mode==='inside'&&i!==0);b.style.left=(p.x*.5+.5)*innerWidth+'px';b.style.top=(-p.y*.5+.5)*innerHeight+'px'});
 renderer.info.reset();rendering.render(camera);if(state.frames===3){state.ready=true;$('loading').style.opacity='0';setTimeout(()=>$('loading').remove(),850)}
}
requestAnimationFrame(animate);
renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();state.paused=true;toast('3D 画面暂时中断，正在恢复。')});renderer.domElement.addEventListener('webglcontextrestored',()=>{state.paused=false;toast('3D 画面已恢复。')});
document.addEventListener('visibilitychange',()=>{last=performance.now();if(audioCtx&&master)master.gain.setTargetAtTime(!document.hidden&&state.sound?.8:0,audioCtx.currentTime,.2)});
// Read-only QA evidence, including projected real interaction coordinates.
function project(p:T.Vector3){const v=p.clone().project(camera);return {x:(v.x*.5+.5)*innerWidth,y:(-v.y*.5+.5)*innerHeight}}
if(new URLSearchParams(location.search).has('qa'))Object.assign(window,{glasshouseSnapshot:()=>({...state,progress:game.save,music:game.musicSnapshot(),placedDecor:Object.keys(world.decorations).filter(id=>world.decorations[id].visible),camera:camera.position.toArray(),zoom:outsideCamera.zoom,draws:renderer.info.render.calls,triangles:renderer.info.render.triangles,actors:world.actors.length,actorPose:world.actors.map(a=>[a.root.position.x,a.armR.rotation.x]),hotspots:Object.fromEntries(hotspots.map(h=>[h.id,project(h.point)]))})});
