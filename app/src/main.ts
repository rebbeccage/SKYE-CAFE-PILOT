import './style.css';
import {createIsland} from './island';
import {createCharacterDetails} from './character-details';
import {createInteriorLife} from './interior-life';
import {createIndoorSeascape} from './indoor-seascape';
import {createGarden} from './garden';
import {IndoorLook} from './indoor-look';
import {createWeather} from './weather';
import {createSnow} from './snow';
import {createEveningSky} from './evening';
import {createIndoorAtmosphere} from './indoor-atmosphere';
import { initGame } from './game';
import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildWorld, updatePeople, materials } from './world';
import { makeRendering } from './ambient';
import './courtyard.css';

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
const state={weather:'sun' as 'sun'|'rain'|'snow',rain:false,gardenLit:true,mode:'outside' as Mode,time:0,paused:false,night:false,auto:false,order:0,cups:0,frames:0,transition:false,ready:false,fps:60,sound:false};
const host=$('world');let viewWidth=host.clientWidth,viewHeight=host.clientHeight;
let renderer:T.WebGLRenderer;
try{renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance',preserveDrawingBuffer:true});}
catch{$('loading').innerHTML='<p>浏览器暂时无法开启 3D</p><span>请开启硬件加速，或使用最新版 Safari / Chrome。</span>';throw new Error('WebGL unavailable')}
renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.setSize(viewWidth,viewHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFShadowMap;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.0;renderer.outputColorSpace=T.SRGBColorSpace;renderer.info.autoReset=false;host.append(renderer.domElement);
const scene=new T.Scene();const sceneColor=new T.Color(0xf2eee6);scene.background=sceneColor;
const pmrem=new T.PMREMGenerator(renderer);const env=new RoomEnvironment();const envTex=pmrem.fromScene(env,.05);scene.environment=envTex.texture;scene.environmentIntensity=.52;env.dispose();pmrem.dispose();
const hemi=new T.HemisphereLight(0xfff7e7,0xc0bca6,1.3);scene.add(hemi);
const sun=new T.DirectionalLight(0xffeed3,3.3);sun.position.set(-5,10,7);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-9;sun.shadow.camera.right=9;sun.shadow.camera.top=9;sun.shadow.camera.bottom=-9;sun.shadow.camera.near=.5;sun.shadow.camera.far=35;sun.shadow.normalBias=.025;sun.shadow.bias=-.00012;sun.shadow.radius=4;scene.add(sun);sun.target.position.set(0,0,0);scene.add(sun.target);
const fill=new T.DirectionalLight(0xf3f5ed,.8);fill.position.set(5,5,-6);scene.add(fill);
const ground=new T.Mesh(new T.PlaneGeometry(200,200),new T.MeshStandardMaterial({color:0xf2eee6,roughness:1}));ground.rotation.x=-Math.PI/2;ground.position.y=-.205;ground.receiveShadow=false;scene.add(ground);
// A soft contact shadow grounds the small model against the seamless backdrop.
const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=256;const sc=shadowCanvas.getContext('2d')!;const grad=sc.createRadialGradient(128,128,12,128,128,128);grad.addColorStop(0,'rgba(72,69,48,.22)');grad.addColorStop(.55,'rgba(72,69,48,.12)');grad.addColorStop(1,'rgba(72,69,48,0)');sc.fillStyle=grad;sc.fillRect(0,0,256,256);const contact=new T.Mesh(new T.PlaneGeometry(15,13),new T.MeshBasicMaterial({map:new T.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false}));contact.rotation.x=-Math.PI/2;contact.position.set(.4,-.19,.5);contact.visible=false;scene.add(contact);
const world=buildWorld(scene);const characterDetails=createCharacterDetails(world);window.addEventListener('cafe-conversation-visual',(e:Event)=>characterDetails.conversation((e as CustomEvent).detail.name));const interiorLife=createInteriorLife(scene,world);const garden=createGarden(scene,world);const weather=createWeather(scene);const snow=createSnow(scene,world);const eveningSky=createEveningSky(scene);const indoorSea=createIndoorSeascape(scene);const indoorAtmosphere=createIndoorAtmosphere(scene);
const island=createIsland(scene,renderer,world,indoorSea.uniforms);
const outsideCamera=new T.OrthographicCamera(-10,10,7,-7,.1,2000);const insideCamera=new T.PerspectiveCamera(67,viewWidth/viewHeight,.025,80);let camera:T.Camera=outsideCamera;
const rendering=makeRendering(renderer,scene,camera);
const outsideControls=new OrbitControls(outsideCamera,renderer.domElement);outsideControls.enableDamping=true;outsideControls.dampingFactor=.065;outsideControls.enablePan=false;outsideControls.minPolarAngle=.001;outsideControls.maxPolarAngle=Math.PI/2;outsideControls.minZoom=.16;outsideControls.maxZoom=3.2;outsideControls.rotateSpeed=.65;outsideControls.zoomSpeed=.8;outsideControls.autoRotateSpeed=1;
const insideControls=new IndoorLook(insideCamera,renderer.domElement);
renderer.domElement.addEventListener('wheel',e=>{if(state.mode!=='inside'||!insideControls.enabled)return;e.preventDefault();insideCamera.zoom=T.MathUtils.clamp(insideCamera.zoom*Math.exp(-e.deltaY*.001),.8,1.6);insideCamera.updateProjectionMatrix()},{passive:false});

const indoorTouches=new Map<number,T.Vector2>();let indoorPinching=false,pinchDistance=0;
renderer.domElement.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'&&state.mode==='inside'){indoorTouches.set(e.pointerId,new T.Vector2(e.clientX,e.clientY));if(indoorTouches.size===2){indoorPinching=true;const p=[...indoorTouches.values()];pinchDistance=p[0].distanceTo(p[1])}}});
renderer.domElement.addEventListener('pointermove',e=>{if(!indoorTouches.has(e.pointerId))return;indoorTouches.get(e.pointerId)!.set(e.clientX,e.clientY);if(indoorTouches.size===2&&insideControls.enabled){const p=[...indoorTouches.values()],distance=p[0].distanceTo(p[1]);if(pinchDistance>0){insideCamera.zoom=T.MathUtils.clamp(insideCamera.zoom*distance/pinchDistance,.8,1.6);insideCamera.updateProjectionMatrix()}pinchDistance=distance}});
for(const event of ['pointerup','pointercancel'])renderer.domElement.addEventListener(event,e=>{indoorTouches.delete((e as PointerEvent).pointerId);if(indoorTouches.size<2)pinchDistance=0;if(indoorTouches.size===0)setTimeout(()=>indoorPinching=false,0)});

let controls:OrbitControls<T.OrthographicCamera>|IndoorLook=outsideControls;
function resetCamera(){const damp=controls.enableDamping;controls.enableDamping=false;controls.update();if(state.mode==='outside'){$('island-view').setAttribute('aria-pressed','false');outsideControls.target.set(0,1.8,0);outsideCamera.position.set(34,1.8+Math.hypot(34,34)*Math.tan(T.MathUtils.degToRad(25)),34);outsideCamera.zoom=.75;outsideCamera.updateProjectionMatrix()}else{insideControls.stand()}controls.update();controls.enableDamping=damp}
$('island-view').onclick=()=>{if(state.mode!=='outside')return;const wide=outsideCamera.zoom>.4;if(wide){const delta=new T.Vector3(-1.6,1.8,4.5).sub(outsideControls.target);outsideCamera.position.add(delta);outsideControls.target.add(delta);outsideCamera.zoom=.30;outsideCamera.updateProjectionMatrix();outsideControls.update()}else resetCamera();$('island-view').setAttribute('aria-pressed',String(wide));};
function resize(){viewWidth=host.clientWidth;viewHeight=host.clientHeight;const w=viewWidth,h=viewHeight,aspect=w/h;renderer.setSize(w,h);const view=18.5;outsideCamera.left=-view/2;outsideCamera.right=view/2;outsideCamera.top=view/2;outsideCamera.bottom=-view/2;outsideCamera.updateProjectionMatrix();insideCamera.aspect=aspect;insideCamera.filmGauge=43;insideCamera.setFocalLength(24);insideCamera.updateProjectionMatrix();rendering.resize(viewWidth,viewHeight);island.resize(viewWidth,viewHeight)}
resize();resetCamera();window.addEventListener('resize',resize);
const doorHint=$('door-hint');const hint=$('object-hint');const raycaster=new T.Raycaster();const pointer=new T.Vector2();const screenPoint=new T.Vector3();const hotspots=world.hotspots;
let toastTimer=0;
function toast(text:string){$('toast').textContent=text;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=window.setTimeout(()=>$('toast').classList.remove('visible'),3800)}
async function switchScene(mode:Mode){if(state.transition||state.mode===mode)return;if(mode==='inside')game.enterMusic();state.transition=true;$('fade').classList.add('show');await new Promise(r=>setTimeout(r,420));state.mode=mode;state.auto=false;$('rotate').setAttribute('aria-pressed','false');outsideControls.enabled=mode==='outside';insideControls.enabled=mode==='inside';controls=mode==='outside'?outsideControls:insideControls;camera=mode==='outside'?outsideCamera:insideCamera;outsideControls.autoRotate=false;document.body.classList.toggle('scene-interior',mode==='inside');$('outside').classList.toggle('active',mode==='outside');$('inside').classList.toggle('active',mode==='inside');$('outside').setAttribute('aria-pressed',String(mode==='outside'));$('inside').setAttribute('aria-pressed',String(mode==='inside'));$('scene-title').textContent=mode==='outside'?'把时光，留在玻璃间。':'欢迎，坐一会儿。';$('scene-copy').textContent=mode==='outside'?'一座会呼吸的温室咖啡馆':'黄铜的温度，和刚磨好的咖啡香';$('enter').innerHTML=mode==='outside'?'推门，喝杯咖啡 <span>↗</span>':'回到庭院 <span>↗</span>';$('gesture').textContent=mode==='outside'?'拖动环视 · 滚轮缩放':'定点环视 · 滚轮缩放 · 点击圆桌坐下';doorHint.hidden=mode==='inside';hint.hidden=true;world.door.rotation.y=mode==='inside'?-.9:0;resize();resetCamera();playDoor();game.syncMusic();$('fade').classList.remove('show');state.transition=false;if(mode==='inside')toast('欢迎来到玻璃间。点阿禾聊聊，或打开菜单招待客人。')}
function orderCoffee(){if(state.order>0){toast('正在为你慢慢冲煮，请稍等片刻。');return}state.order=8;toast('咖啡师：一杯今日手冲，马上就好。');playPour()}
function activate(id:string){if(id==='garden'){toast('尤加利的香气，混着石板缝里的青草味。');return}if(id==='lantern'){state.gardenLit=!state.gardenLit;toast(state.gardenLit?'小灯已亮，替你留着这一点暖。':'小灯熄了，听一会儿风吧。');return}if(id.startsWith('seat')){if(state.mode==='outside'){switchScene('inside');return}const index=Number(id.slice(4));if(index===2&&state.weather==='snow'){toast('林伯正坐在窗边，旁边两张椅子为你留着。');return}insideControls.sit(index);$('gesture').textContent='坐着环视 · 拖动看四周 · 复位回到站立';return}if(id.startsWith('person')){game.talk(Number(id.slice(6)));return}if(id==='door')switchScene(state.mode==='outside'?'inside':'outside');if(id==='coffee'){if(state.mode==='outside')switchScene('inside');else game.menu()}if(id==='table'){if(state.mode==='outside'){switchScene('inside');return}insideControls.sit();$('gesture').textContent='坐着环视 · 拖动看四周 · 复位回到站立';toast('坐一会儿吧。拖动可以环视房间，点击复位重新站起。')}if(id==='sign')toast('今日手冲 · 浅烘焙 / 花香 / 柑橘。小店营业中。')}
function pick(clientX:number,clientY:number){const rect=renderer.domElement.getBoundingClientRect();pointer.set((clientX-rect.left)/rect.width*2-1,-(clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);return raycaster.intersectObjects(hotspots.map(h=>h.mesh),false)[0]?.object.userData.hit as string|undefined}
let down={x:0,y:0};renderer.domElement.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY};hint.hidden=true});renderer.domElement.addEventListener('pointerup',e=>{if(Math.hypot(e.clientX-down.x,e.clientY-down.y)>7||state.transition||indoorPinching)return;const id=pick(e.clientX,e.clientY);if(id)activate(id)});
renderer.domElement.addEventListener('pointermove',e=>{if(e.buttons){hint.hidden=true;return}const id=pick(e.clientX,e.clientY);renderer.domElement.style.cursor=id?'pointer':'grab';if(id&&id!=='door'){hint.textContent=hotspots.find(h=>h.id===id)!.label;const rect=host.getBoundingClientRect();hint.style.left=(e.clientX-rect.left)+'px';hint.style.top=(e.clientY-rect.top)+'px';hint.hidden=false}else hint.hidden=true});renderer.domElement.addEventListener('pointerleave',()=>hint.hidden=true);
$('weather-toggle').onclick=()=>{const modes=['sun','rain','snow'] as const;state.weather=modes[(modes.indexOf(state.weather)+1)%3];state.rain=state.weather==='rain';$('weather-toggle').textContent=state.weather==='sun'?'☀ 晴天':state.rain?'☂ 雨天':'❄ 雪天';$('weather-toggle').setAttribute('aria-label',`当前${state.weather==='sun'?'晴天':state.rain?'雨天':'雪天'}，点击切换天气`);$('weather-toggle').setAttribute('aria-pressed',String(state.weather!=='sun'));document.body.classList.toggle('rainy',state.rain);document.body.classList.toggle('snowy',state.weather==='snow');game.syncMusic();toast(state.weather==='snow'?'雪轻轻落下，门前留了一条回家的小路。':state.rain?'雨落下来了，为你撑开庭院的伞。':'天空放晴了，收起伞，晒一会儿太阳。')};
$('outside').onclick=()=>switchScene('outside');$('inside').onclick=()=>switchScene('inside');$('door-hint').onclick=()=>switchScene('inside');$('enter').onclick=()=>switchScene(state.mode==='outside'?'inside':'outside');
$('rotate').onclick=()=>{if(state.mode==='inside'){toast('店内可以拖动视线。回到庭院可开启 360° 环绕。');return}state.auto=!state.auto;outsideControls.autoRotate=state.auto;$('rotate').setAttribute('aria-pressed',String(state.auto));toast(state.auto?'绕着小店，慢慢看一圈。':'已停止环绕，可自由拖动。')};
$('reset').onclick=()=>{resetCamera();if(state.mode==='inside')$('gesture').textContent='定点环视 · 滚轮缩放 · 点击圆桌坐下';toast('回到最初的视角。')};
let targetNight=0,nightValue=0;
$('light').onclick=()=>{if(state.weather==='snow'){toast('雪天保持柔和的日间光线。');return}state.night=!state.night;targetNight=state.night?1:0;$('light').setAttribute('aria-pressed',String(state.night));$('light-icon').innerHTML=svg(state.night?'moon':'light');$('light-label').textContent=state.night?'暮色':'日光';$('time-label').textContent=state.night?'傍晚 · 18:08':'午后 · 15:24';toast(state.night?'傍晚的灯，已为你留好。':'又是一个有阳光的午后。')};
$('photo').onclick=()=>{rendering.render(camera);const a=document.createElement('a');a.download=`玻璃间-${state.mode==='outside'?'庭院':'店内'}-${Date.now()}.png`;a.href=renderer.domElement.toDataURL('image/png');a.click();toast('已保存这片刻的风景。')};
const guide=$('guide') as HTMLDialogElement;$('help').onclick=()=>{guide.showModal();controls.enabled=false};$('close-guide').onclick=()=>guide.close();guide.addEventListener('close',()=>controls.enabled=true);guide.addEventListener('click',e=>{if(e.target===guide){const r=guide.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)guide.close()}});
window.addEventListener('keydown',e=>{if(document.querySelector('dialog[open]'))return;if(e.key==='1')switchScene('outside');if(e.key==='2')switchScene('inside');if(e.key==='Escape')switchScene('outside');if(e.key.toLowerCase()==='r')resetCamera()});

// Optional, synthesized ambience: no media downloads and no autoplay audio.
let audioCtx:AudioContext|undefined,master:GainNode|undefined;
function initAudio(){if(audioCtx)return;audioCtx=new AudioContext();master=audioCtx.createGain();master.gain.value=0;master.connect(audioCtx.destination);const len=audioCtx.sampleRate*3,buf=audioCtx.createBuffer(1,len,audioCtx.sampleRate),data=buf.getChannelData(0);let brown=0;for(let i=0;i<len;i++){brown=(brown+Math.random()*.02-.01)/1.02;data[i]=brown*2}const noise=audioCtx.createBufferSource();noise.buffer=buf;noise.loop=true;const filter=audioCtx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=420;noise.connect(filter).connect(master);noise.start();for(const [f,v] of [[130.81,.009],[196,.007],[261.63,.005]]){const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='sine';o.frequency.value=f;g.gain.value=v;o.connect(g).connect(master);o.start()}}
function tone(f:number,dur:number,volume:number){if(!state.sound||!audioCtx||!master)return;const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.frequency.setValueAtTime(f,audioCtx.currentTime);g.gain.setValueAtTime(volume,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+dur);o.connect(g).connect(master);o.start();o.stop(audioCtx.currentTime+dur)}
function playDoor(){tone(1318,.7,.09);setTimeout(()=>tone(1760,.9,.035),90)}
function playPour(){for(let i=0;i<9;i++)setTimeout(()=>tone(700+Math.random()*500,.1,.018),i*240)}
const game=initGame({talkTargets:()=>{},decorate:ids=>{for(const [id,g] of Object.entries(world.decorations))g.visible=ids.includes(id)},brew:()=>{if(state.order>0){toast('咖啡师正在忙，请稍等。');return false}orderCoffee();return true},toast,lock:v=>{controls.enabled=!v},inside:()=>state.mode==='inside',raining:()=>state.weather==='rain',winter:{active:()=>state.weather==='snow',items:snow.dressing.items,toggle:snow.dressing.toggle,move:snow.dressing.move}});
$('sound').onclick=()=>{game.toggleMusic()};
window.addEventListener('cafe-music-change',(e:Event)=>{const m=(e as CustomEvent).detail;if($('sound').dataset.playing!==String(m.playing)){$('sound').innerHTML=svg(m.playing?'sound':'mute');$('sound').dataset.playing=String(m.playing)}$('sound').setAttribute('aria-pressed',String(m.playing));$('sound').setAttribute('aria-label',m.playing?'暂停声音':'开启声音')});
const talkChips=['阿禾','林伯','棠姨'].map((name,i)=>{const b=document.createElement('button');b.className='talk-chip';b.style.setProperty('--talk-offset',i*43+'px');b.textContent=name+' · 聊聊';b.setAttribute('aria-label','与'+name+'对话');b.onclick=()=>game.talk(i);host.after(b);return b});
let last=performance.now(),fpsTime=0,fpsFrames=0,lastActivity='';
const dayBg=new T.Color(0xf2eee6),duskBg=new T.Color(0xedece5),daySun=new T.Color(0xffeed3),duskSun=new T.Color(0xffc982);
 function animate(now:number){requestAnimationFrame(animate);const dt=Math.max(0,Math.min((now-last)/1000,.05));last=now;if(document.hidden||state.paused)return;state.time+=dt;state.frames++;fpsTime+=dt;fpsFrames++;if(fpsTime>1){state.fps=Math.round(fpsFrames/fpsTime);fpsTime=0;fpsFrames=0}if(state.order>0){state.order=Math.max(0,state.order-dt);game.tick(state.order);if(state.order===0){state.cups++;game.complete();tone(1046,.5,.04)}}updatePeople(world.actors,state.time,state.order);world.updateService(state.time,state.order,state.mode==='inside');
 world.steam.children.forEach((o,i)=>{const f=(state.time*.25+i/9)%1;o.position.y=.05+f*.55;o.position.x=Math.sin(f*6+i)*.045;o.position.z=Math.cos(f*5+i)*.025;o.scale.set(.012*(1+f*1.6),.06*(1+f),.012*(1+f));});
 garden.update(state.time,state.weather==='snow',state.night,state.rain);weather.update(dt,state.time,state.rain);snow.update(dt,state.time,state.weather==='snow',state.mode==='inside',camera);characterDetails.update(state.time,state.order);nightValue=T.MathUtils.damp(nightValue,targetNight,2,dt);
 const wet=weather.wet,frost=snow.amount,overcast=Math.max(wet,frost);
 sun.intensity=T.MathUtils.lerp((3.3-nightValue*2.7)*(1-overcast),.5,frost);sun.castShadow=overcast<.1;sun.color.copy(daySun).lerp(duskSun,nightValue).lerp(new T.Color(0xf8fbff),frost);
 hemi.intensity=T.MathUtils.lerp((1.3-nightValue*.6)+wet*.25,1.1,frost);hemi.color.set(overcast>.3?0xe8eff4:0xfff7e7).lerp(new T.Color(0xcbd4dc),frost);hemi.groundColor.set(0xc0bca6).lerp(new T.Color(0xe8e4da),frost);
 fill.intensity=T.MathUtils.lerp((.8-nightValue*.45)*(1-overcast),.35,frost);fill.position.set(5,T.MathUtils.lerp(5,-2,frost),-6);fill.color.set(0xf3f5ed).lerp(new T.Color(0xffe7cb),frost);scene.environmentIntensity=T.MathUtils.lerp(.52-nightValue*.17,.62,frost);renderer.toneMappingExposure=T.MathUtils.lerp(1,Math.pow(2,-.4),frost);rendering.setSnow(frost);
 sceneColor.copy(dayBg).lerp(duskBg,nightValue).lerp(new T.Color(0xdde3e8).multiplyScalar(1.55),frost);
 materials.light.emissiveIntensity=state.gardenLit?T.MathUtils.lerp(1.25+nightValue*1.6+overcast*1.4,.7,frost):0;materials.pendantLight.emissiveIntensity=T.MathUtils.lerp(1.65+nightValue*.7,1.35,frost);world.lamps.forEach(l=>{l.color.set(0xffd092);l.intensity=T.MathUtils.lerp(5+nightValue*11+overcast*8,4,frost)});
 world.rainProps.visible=wet>.4&&state.weather!=='snow';const spread=state.weather==='snow'?.17:.17+wet*.83;world.umbrellaShade.scale.set(spread,1,spread);world.linShade.scale.set(spread,1,spread);$('light').setAttribute('aria-disabled',String(state.weather==='snow'));$('light-label').textContent=state.weather==='snow'?'冬日':state.night?'暮色':'日光';
 interiorLife.update(state.mode==='inside',state.time,wet,frost,nightValue);eveningSky.update(false,0);indoorSea.update(state.mode==='inside',state.time,wet,frost,nightValue);indoorAtmosphere.update(state.mode==='inside',state.time,nightValue,overcast);
 ground.visible=false;ground.material.color.set(0xf2eee6).lerp(new T.Color(0x9e8c89),state.mode==='inside'?nightValue:0);
 // Interior exposure is a local lighting state; the courtyard rig above is unchanged.
 if(state.mode==='inside'){
  sun.intensity=.85*(1-overcast*.6)*(1-nightValue*.65);sun.castShadow=false;
  hemi.intensity=.8;fill.intensity=.35;scene.environmentIntensity=.25;renderer.toneMappingExposure=.88;
  materials.glass.opacity=.08;materials.glass.envMapIntensity=.2;
  materials.pendantLight.color.set(0xf5f0e6);materials.pendantLight.roughness=.78;materials.pendantLight.emissiveIntensity=.22+overcast*.1+nightValue*.12;
  world.lamps.forEach(l=>l.intensity=1.8+overcast*.5+nightValue*.8);
 }else{materials.glass.opacity=.14;materials.glass.envMapIntensity=1.5;materials.pendantLight.color.set(0xf2d9a0);materials.pendantLight.roughness=.24;}
 document.body.style.backgroundColor=frost>.5?'#dde3e8':'#f2eee6';document.documentElement.style.backgroundColor=document.body.style.backgroundColor;


 const activity=state.order>0?'咖啡师正在为你冲煮':state.mode==='inside'?(Math.floor(state.time/8)%2?'杯里升起了热气':'咖啡师正在准备手冲'):(Math.floor(state.time/10)%3===0?'咖啡师正在准备手冲':Math.floor(state.time/10)%3===1?'园丁正在照料绿植':'客人正在享用午后咖啡');if(lastActivity!==activity){$('activity').textContent=activity;lastActivity=activity}
 world.actors.slice(0,3).forEach((a,i)=>{const h=hotspots.find(h=>h.id==='person'+i);if(h){a.root.getWorldPosition(h.point);h.point.y+=i===0?1.5:i===2?.8:1.1;h.mesh.position.copy(h.point)}});controls.update();if(state.mode==='outside'){screenPoint.copy(hotspots[0].point).project(camera);doorHint.style.left=(screenPoint.x*.5+.5)*viewWidth+'px';doorHint.style.top=(-screenPoint.y*.5+.5)*viewHeight+'px';const forward=outsideCamera.position.z>1.7&&outsideControls.getPolarAngle()>.12;doorHint.style.opacity=forward?'1':'0';doorHint.style.pointerEvents=forward?'auto':'none';doorHint.hidden=false}
 talkChips.forEach((b,i)=>{b.hidden=!!document.querySelector('dialog[open]')||(state.mode==='inside'&&i!==0&&!(state.weather==='snow'&&i===1));b.style.left='auto';b.style.right='18px';b.style.top=(viewHeight*.34+i*43)+'px'});

 // Orthographic zoom changes coverage, not camera distance. Pull the eye back only
 // when zoomed out, so its near plane cannot cut through the foreground ocean.
 if(state.mode==='outside'&&outsideCamera.zoom<.74){const offset=outsideCamera.position.clone().sub(outsideControls.target);const required=Math.max(54,(18.5/outsideCamera.zoom*.5+5)*Math.tan(Math.min(outsideControls.getPolarAngle(),1.50)));if(offset.length()<required){outsideCamera.position.copy(outsideControls.target).add(offset.setLength(required));outsideCamera.updateMatrixWorld();}}
 $('island-view').hidden=state.mode==='inside';island.update(state.time,dt,state.weather,camera,state.mode==='inside');renderer.info.reset();island.capture(camera);rendering.render(camera);if(state.frames===3){state.ready=true;$('loading').style.opacity='0';setTimeout(()=>$('loading').remove(),850)}
}
requestAnimationFrame(animate);
renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();state.paused=true;toast('3D 画面暂时中断，正在恢复。')});renderer.domElement.addEventListener('webglcontextrestored',()=>{state.paused=false;toast('3D 画面已恢复。')});
document.addEventListener('visibilitychange',()=>{last=performance.now();if(audioCtx&&master)master.gain.setTargetAtTime(!document.hidden&&state.sound?.8:0,audioCtx.currentTime,.2)});
// Read-only QA evidence, including projected real interaction coordinates.
function outlineScreen(){return garden.outline.map(([x,z])=>project(new T.Vector3(x,.26,z)))}
function project(p:T.Vector3){const v=p.clone().project(camera);const r=host.getBoundingClientRect();return {x:r.left+(v.x*.5+.5)*viewWidth,y:r.top+(-v.y*.5+.5)*viewHeight}}
if(new URLSearchParams(location.search).has('qa'))Object.assign(window,{setIslandParameters:(values:Record<string,number>)=>island.setParameters(values),glasshouseSnapshot:()=>({...state,progress:game.save,music:game.musicSnapshot(),placedDecor:Object.keys(world.decorations).filter(id=>world.decorations[id].visible),square:[viewWidth,viewHeight],weatherWet:weather.wet,snowAmount:snow.amount,snow:snow.diagnostics(),sky:sceneColor.getHexString(),autoOrbitSpeed:outsideControls.autoRotateSpeed,eveningSky:eveningSky.visible,indoorSea:indoorSea.diagnostics(),interiorLife:interiorLife.diagnostics(),camera:camera.position.toArray(),insideOptics:{seated:insideControls.seated,seatIndex:insideControls.seatIndex,direction:insideCamera.getWorldDirection(new T.Vector3()).toArray(),focalLength:insideCamera.getFocalLength(),fov:insideCamera.fov,aspect:insideCamera.aspect,target:insideControls.target.toArray()},zoom:outsideCamera.zoom,orbit:{polar:outsideControls.getPolarAngle(),azimuth:outsideControls.getAzimuthalAngle(),target:outsideControls.target.toArray(),minPolar:outsideControls.minPolarAngle,maxPolar:outsideControls.maxPolarAngle},draws:renderer.info.render.calls,triangles:renderer.info.render.triangles,actors:world.actors.length,actorPose:world.actors.map(a=>[a.root.position.x,a.armR.rotation.x]),layout:world.diagnostics(),characters:characterDetails.diagnostics(),island:island.diagnostics(),overviewScreen:world.diagnostics().overviewBounds.map(b=>[b.min[0],b.max[0]].flatMap(x=>[b.min[1],b.max[1]].flatMap(y=>[b.min[2],b.max[2]].map(z=>project(new T.Vector3(x,y,z)))))),garden:{...garden.diagnostics(),screen:outlineScreen()},heroScreen:(()=>{const b=world.diagnostics().heroBounds;return [b.min[0],b.max[0]].flatMap(x=>[b.min[1],b.max[1]].flatMap(y=>[b.min[2],b.max[2]].map(z=>project(new T.Vector3(x,y,z)))))})(),hotspots:Object.fromEntries(hotspots.map(h=>[h.id,project(h.point)]))})});
