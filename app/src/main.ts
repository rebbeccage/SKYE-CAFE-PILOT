import {startAssetLoading,assetDiagnostics} from './asset-manager';
import {createFrenchExterior} from './french-exterior';
import {createBeachLife} from './beach-life';
import {createEveningFireworks} from './evening-fireworks';
import {createResidentMotion} from './resident-motion';
import {createIslandMap} from './island-map';
import type {MapId} from './island-map-model';
import {cacheTransforms} from './transform-cache';
import {coastDistance} from './island-geography';
import {FirstPersonController,type CameraMode} from './first-person-controller';
import {PlayerCollision} from './player-collision';
import {createNavigation} from './navigation-zones';
import {createFirstPersonUI} from './first-person-ui';
import {createInteractionRaycast} from './interaction-raycast';
import './style.css';
import {createNameplates} from './npc-nameplates';
import {createCinema} from './cinema';
import {createCinemaView} from './cinema-view';
import {createSceneHints} from './scene-hints';
import {createExploration} from './exploration';
import {createMona} from './mona';
import {createSceneAssets} from './scene-assets';
import {monaEligible} from './progression';
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
import { initGame,prepareGameUI } from './game';
import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildWorld, updatePeople, materials } from './world';
import { makeRendering, renderPixelRatio } from './ambient';
import './courtyard.css';
import './player-ui.css';
import './watercolor-ui.css';
import {watercolorIcon,weatherLabel} from './ui-components';

import './coastal-ui.css';
const domCache=new Map<string,HTMLElement>();
const $=<E extends HTMLElement=HTMLElement>(id:string)=>{let node=domCache.get(id);if(!node){node=document.getElementById(id)!;if(node)domCache.set(id,node)}return node as E};
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
$('sound').innerHTML=svg('mute');$('help').innerHTML=svg('help')+'<span>操作提示</span>';$('help').title='操作提示';$('help').setAttribute('aria-label','操作提示');
for(const name of ['rotate','light','photo'] as const)$(name+'-icon').innerHTML=svg(name);

type Mode='outside'|'inside';
const state={weather:'sun' as 'sun'|'rain'|'snow',rain:false,gardenLit:true,mode:'outside' as Mode,time:0,paused:false,beachSeat:false,night:false,auto:false,order:0,cups:0,frames:0,transition:false,ready:false,fps:60,sound:false};
let modalOpen=false;new MutationObserver(()=>{modalOpen=!!document.querySelector('dialog[open]')}).observe($('app'),{subtree:true,attributes:true,attributeFilter:['open']});
const host=$('world');let viewWidth=host.clientWidth,viewHeight=host.clientHeight;
prepareGameUI();
await new Promise<void>(resolve=>requestAnimationFrame(()=>setTimeout(resolve,0)));
let renderer:T.WebGLRenderer;
try{renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance',preserveDrawingBuffer:false});}
catch{$('loading').innerHTML='<p>浏览器暂时无法开启 3D</p><span>请开启硬件加速，或使用最新版 Safari / Chrome。</span>';throw new Error('WebGL unavailable')}
renderer.setPixelRatio(renderPixelRatio(viewWidth,viewHeight));renderer.setSize(viewWidth,viewHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFShadowMap;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.0;renderer.outputColorSpace=T.SRGBColorSpace;renderer.info.autoReset=false;host.append(renderer.domElement);
const scene=new T.Scene();const sceneColor=new T.Color(0xf2eee6);scene.background=sceneColor;
const pmrem=new T.PMREMGenerator(renderer);const env=new RoomEnvironment();const envTex=pmrem.fromScene(env,.05);scene.environment=envTex.texture;scene.environmentIntensity=.52;env.dispose();pmrem.dispose();
const hemi=new T.HemisphereLight(0xfff7e7,0xc0bca6,1.3);scene.add(hemi);
const sun=new T.DirectionalLight(0xffeed3,3.3);sun.position.set(-5,10,7);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-9;sun.shadow.camera.right=9;sun.shadow.camera.top=9;sun.shadow.camera.bottom=-9;sun.shadow.camera.near=.5;sun.shadow.camera.far=35;sun.shadow.normalBias=.025;sun.shadow.bias=-.00012;sun.shadow.radius=4;scene.add(sun);sun.target.position.set(0,0,0);scene.add(sun.target);
const fill=new T.DirectionalLight(0xf3f5ed,.8);fill.position.set(5,5,-6);scene.add(fill);
const ground=new T.Mesh(new T.PlaneGeometry(200,200),new T.MeshStandardMaterial({color:0xf2eee6,roughness:1}));ground.rotation.x=-Math.PI/2;ground.position.y=-.205;ground.receiveShadow=false;scene.add(ground);
// A soft contact shadow grounds the small model against the seamless backdrop.
const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=256;const sc=shadowCanvas.getContext('2d')!;const grad=sc.createRadialGradient(128,128,12,128,128,128);grad.addColorStop(0,'rgba(72,69,48,.22)');grad.addColorStop(.55,'rgba(72,69,48,.12)');grad.addColorStop(1,'rgba(72,69,48,0)');sc.fillStyle=grad;sc.fillRect(0,0,256,256);const contact=new T.Mesh(new T.PlaneGeometry(15,13),new T.MeshBasicMaterial({map:new T.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false}));contact.rotation.x=-Math.PI/2;contact.position.set(.4,-.19,.5);contact.visible=false;scene.add(contact);
await new Promise<void>(resolve=>requestAnimationFrame(()=>setTimeout(resolve,0)));
const world=buildWorld(scene);const characterDetails=createCharacterDetails(world);window.addEventListener('cafe-conversation-visual',(e:Event)=>characterDetails.conversation((e as CustomEvent).detail.name));const interiorLife=createInteriorLife(scene,world);const garden=createGarden(scene,world);const weather=createWeather(scene);const snow=createSnow(scene,world);const eveningSky=createEveningSky(scene);const indoorSea=createIndoorSeascape(scene);const indoorAtmosphere=createIndoorAtmosphere(scene);
const island=createIsland(scene,renderer,world,indoorSea.uniforms);
const beachLife=createBeachLife(scene);
const frenchExterior=createFrenchExterior(scene,state.weather);
const cinema=createCinema(scene);
const fireworks=createEveningFireworks(scene,host);
const outsideCamera=new T.OrthographicCamera(-10,10,7,-7,.1,2000);const insideCamera=new T.PerspectiveCamera(67,viewWidth/viewHeight,.025,80);let camera:T.Camera=outsideCamera;const beachCamera=new T.PerspectiveCamera(68,viewWidth/viewHeight,.05,2000);
const rendering=makeRendering(renderer,scene,camera);
const outsideControls=new OrbitControls(outsideCamera,renderer.domElement);outsideControls.enableDamping=true;outsideControls.dampingFactor=.065;outsideControls.enablePan=false;outsideControls.minPolarAngle=.001;outsideControls.maxPolarAngle=Math.PI/2;outsideControls.minZoom=.16;outsideControls.maxZoom=3.2;outsideControls.rotateSpeed=.65;outsideControls.zoomSpeed=.8;outsideControls.autoRotateSpeed=1;
const insideControls=new IndoorLook(insideCamera,renderer.domElement);const beachControls=new IndoorLook(beachCamera,renderer.domElement);
renderer.domElement.addEventListener('wheel',e=>{const view=state.beachSeat?beachCamera:insideCamera,look=state.beachSeat?beachControls:insideControls;if((state.mode!=='inside'&&!state.beachSeat)||!look.enabled)return;e.preventDefault();view.zoom=T.MathUtils.clamp(view.zoom*Math.exp(-e.deltaY*.001),.8,1.6);view.updateProjectionMatrix()},{passive:false});

const indoorTouches=new Map<number,T.Vector2>();let indoorPinching=false,pinchDistance=0;
renderer.domElement.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'&&(state.mode==='inside'||state.beachSeat)){indoorTouches.set(e.pointerId,new T.Vector2(e.clientX,e.clientY));if(indoorTouches.size===2){indoorPinching=true;const p=[...indoorTouches.values()];pinchDistance=p[0].distanceTo(p[1])}}});
renderer.domElement.addEventListener('pointermove',e=>{if(!indoorTouches.has(e.pointerId))return;indoorTouches.get(e.pointerId)!.set(e.clientX,e.clientY);if(indoorTouches.size===2&&(state.beachSeat?beachControls:insideControls).enabled){const p=[...indoorTouches.values()],distance=p[0].distanceTo(p[1]);if(pinchDistance>0){const view=state.beachSeat?beachCamera:insideCamera;view.zoom=T.MathUtils.clamp(view.zoom*distance/pinchDistance,.8,1.6);view.updateProjectionMatrix()}pinchDistance=distance}});
for(const event of ['pointerup','pointercancel'])renderer.domElement.addEventListener(event,e=>{indoorTouches.delete((e as PointerEvent).pointerId);if(indoorTouches.size<2)pinchDistance=0;if(indoorTouches.size===0)setTimeout(()=>indoorPinching=false,0)});

const navigation=createNavigation(island.diagnostics());
const playerBody=new PlayerCollision(navigation.sample,navigation.obstacles,{x:-.6,y:.26,z:5.05});
const firstPerson=new FirstPersonController(playerBody,renderer.domElement,viewWidth/viewHeight);
let roaming=false;
let navigationTarget:typeof navigation.targets[keyof typeof navigation.targets]|null=null;
let orbitReturn:{eye:T.Vector3;target:T.Vector3;zoom:number;auto:boolean}|null=null;
// Reuse existing low-cost beach collider proxies, excluding walkable boards and overhead canopies.
for(const m of island.collisions){const b=new T.Box3().setFromObject(m),size=b.getSize(new T.Vector3()),c=b.getCenter(new T.Vector3());if(size.y>.3&&(size.y<1.6||size.x<.35&&size.z<.35)&&size.x<2.6&&size.z<2.6)navigation.obstacles.push({x:c.x,z:c.z,halfX:size.x/2,halfZ:size.z/2,bottom:b.min.y,top:b.max.y,name:'沙滩物件'});}
for(const p of island.diagnostics().props.beachLife.palmsLayout)navigation.obstacles.push({x:p.x,z:p.z,halfX:.26,halfZ:.20,name:'棕榈树干'});
navigation.obstacles.push(...beachLife.obstacles,frenchExterior.collision);
const fixedObstacleCount=navigation.obstacles.length;
const residentNavigation={...navigation,obstacles:navigation.obstacles.slice()};
const residentMotion=createResidentMotion(world,residentNavigation);
const fpRay=createInteractionRaycast(navigation.obstacles);
const roamingActive=()=>roaming&&state.mode==='outside'&&!state.beachSeat&&!cinemaView.active;
function cameraMode():CameraMode{if(state.transition||cinemaView.transitioning)return 'TRANSITION';if(document.querySelector('dialog[open]'))return 'DIALOGUE';return state.mode==='inside'?'INTERIOR':state.beachSeat?'SEATED':roaming?'FIRST_PERSON':'OVERVIEW'}
function syncControllers(){const blocked=modalOpen||sceneTools.open||state.transition;
 const fp=roamingActive()&&!blocked; if(!fp&&firstPerson.enabled)firstPerson.pause();else firstPerson.enabled=fp;
 outsideControls.enabled=!blocked&&!roaming&&state.mode==='outside'&&!state.beachSeat&&!cinemaView.active;
 insideControls.enabled=!blocked&&state.mode==='inside';beachControls.enabled=!blocked&&state.beachSeat&&!cinemaView.transitioning;
 outsideControls.autoRotate=outsideControls.enabled&&state.auto;
 document.body.classList.toggle('first-person-mode',roamingActive());
}
function setRoaming(on:boolean){if(state.mode!=='outside'||state.transition)return;if(cinemaView.active)leaveCinema(true);if(state.beachSeat){state.beachSeat=false;standUp.hidden=true;}if(on===roaming)return;
 if(on){orbitReturn={eye:outsideCamera.position.clone(),target:outsideControls.target.clone(),zoom:outsideCamera.zoom,auto:state.auto};roaming=true;camera=firstPerson.camera;controls=outsideControls;state.auto=false;firstPerson.update(0);}
 else{roaming=false;firstPerson.pause();camera=outsideCamera;controls=outsideControls;if(orbitReturn){outsideCamera.position.copy(orbitReturn.eye);outsideControls.target.copy(orbitReturn.target);outsideCamera.zoom=orbitReturn.zoom;state.auto=orbitReturn.auto;outsideCamera.updateProjectionMatrix();outsideControls.update();}}
 $('walk-view').setAttribute('aria-pressed',String(on));$('walk-view').setAttribute('aria-label',on?'漫游中，返回全岛概览':'漫游，走近岛上的每一处风景');sceneTools.open=false;syncControllers();if(on)toast(matchMedia('(pointer:coarse)').matches?'已进入漫游：左摇杆行走，右侧拖动观察；横屏看风景更舒展。':'已进入漫游：点击场景，WASD 行走，鼠标观察，E 互动；Esc 释放鼠标。');
}
function navigateTo(id:keyof typeof navigation.targets){navigationTarget=navigation.targets[id];sceneTools.open=false;if(!roaming)setRoaming(true);toast('沿方向提示步行前往'+navigationTarget.name+'，到达后可自由观察。');}
let cinemaReturn:{camera:T.Camera;controls:typeof outsideControls|IndoorLook;seated:boolean;eye:T.Vector3;target:T.Vector3;zoom:number;fov:number}|null=null;
const cinemaView=createCinemaView(beachCamera,beachControls,cinema.eye,cinema.focus,()=>{if(!cinemaReturn)return;const r=cinemaReturn;state.beachSeat=r.seated;camera=r.camera;controls=r.controls;beachControls.enabled=false;beachCamera.fov=r.fov;beachCamera.updateProjectionMatrix();if(r.seated){beachControls.lookFrom(r.eye,r.target);beachCamera.fov=r.fov;beachCamera.zoom=r.zoom;beachCamera.updateProjectionMatrix()}controls.enabled=!document.querySelector('dialog[open]');$('stand-up').hidden=!r.seated;cinemaReturn=null;if(roaming){camera=firstPerson.camera;controls=outsideControls;}syncControllers();});
let controls:OrbitControls<T.OrthographicCamera>|IndoorLook=outsideControls;
function resetCamera(){if(roaming&&state.mode==='outside'&&!cinemaView.active){if(state.beachSeat){state.beachSeat=false;beachControls.enabled=false;camera=firstPerson.camera;controls=outsideControls;$('stand-up').hidden=true;}firstPerson.pitch=0;syncControllers();return;}if(cinemaView.active){leaveCinema();return;}if(state.beachSeat){state.beachSeat=false;beachControls.enabled=false;outsideControls.enabled=true;camera=outsideCamera;controls=outsideControls;$('stand-up').hidden=true}const damp=controls.enableDamping;controls.enableDamping=false;controls.update();if(state.mode==='outside'){$('island-view').setAttribute('aria-pressed','false');outsideControls.target.set(0,1.8,0);outsideCamera.position.set(34,1.8+Math.hypot(34,34)*Math.tan(T.MathUtils.degToRad(25)),34);outsideCamera.zoom=matchMedia('(max-width:600px)').matches?.85:.75;outsideCamera.updateProjectionMatrix()}else{insideControls.stand()}controls.update();controls.enableDamping=damp}
$('island-view').onclick=()=>{if(state.mode!=='outside')return;if(roaming)setRoaming(false);if(cinemaView.active)leaveCinema(true);if(state.beachSeat)resetCamera();const wide=outsideCamera.zoom>.4;if(wide){const delta=new T.Vector3(-1.6,1.8,1).sub(outsideControls.target);outsideCamera.position.add(delta);outsideControls.target.add(delta);outsideCamera.zoom=matchMedia('(max-width:600px)').matches?.25:.30;outsideCamera.position.sub(outsideControls.target).setLength(250).add(outsideControls.target);outsideCamera.updateProjectionMatrix();outsideControls.update()}else resetCamera();$('island-view').setAttribute('aria-pressed',String(wide));sceneTools.open=false;};
let resizeFrame=0,lastResize='';
function resize(){viewWidth=Math.max(1,host.clientWidth);viewHeight=Math.max(1,host.clientHeight);const w=viewWidth,h=viewHeight,aspect=w/h,key=w+':'+h+':'+renderPixelRatio(w,h);if(key===lastResize)return;lastResize=key;renderer.setPixelRatio(renderPixelRatio(w,h));renderer.setSize(w,h);const view=18.5;const spanX=view*Math.max(1,aspect),spanY=view/Math.min(1,aspect);outsideCamera.left=-spanX/2;outsideCamera.right=spanX/2;outsideCamera.top=spanY/2;outsideCamera.bottom=-spanY/2;outsideCamera.updateProjectionMatrix();firstPerson.camera.aspect=aspect;firstPerson.camera.updateProjectionMatrix();beachCamera.aspect=aspect;beachCamera.updateProjectionMatrix();insideCamera.aspect=aspect;insideCamera.filmGauge=43;insideCamera.setFocalLength(24);insideCamera.updateProjectionMatrix();rendering.resize(viewWidth,viewHeight);island.resize(viewWidth,viewHeight)}
function scheduleResize(){if(!resizeFrame)resizeFrame=requestAnimationFrame(()=>{resizeFrame=0;resize()})}
resize();resetCamera();window.addEventListener('resize',scheduleResize);const hostResizeObserver=new ResizeObserver(scheduleResize);hostResizeObserver.observe(host);
const doorHint=$('door-hint');const hint=$('object-hint');
const sceneTools=document.createElement('details');sceneTools.className='scene-tools';sceneTools.innerHTML=`<summary class="paper-control nav-tile" aria-label="随心逛逛" title="随心逛逛 · 环绕、观景与留影">${watercolorIcon('explore')}<span class="nav-label">随心逛逛</span></summary><div class="scene-tools-sheet paper-panel" aria-label="随心逛逛 · 观察工具"></div>`;document.getElementById('app')!.append(sceneTools);sceneTools.querySelector('div')!.append(document.querySelector('.toolbar')!,document.querySelector('.top-tools')!);
const walkButton=$('walk-view') as HTMLButtonElement;walkButton.disabled=false;walkButton.onclick=()=>{if(roaming){setRoaming(false);if(outsideCamera.zoom>.4)$('island-view').click();}else setRoaming(true)};
const routeTools=document.createElement('div');routeTools.className='roaming-settings';
for(const id of ['garden','houses','harbor','cinema'] as const){const b=document.createElement('button');b.className='paper-control';b.textContent='步行前往'+navigation.targets[id].name;b.onclick=()=>navigateTo(id);routeTools.append(b);}
routeTools.insertAdjacentHTML('beforeend','<label>漫游视野 <input id="roam-fov" type="range" min="52" max="68" value="60" aria-label="漫游视野角度"></label><label>转向速度 <input id="roam-sensitivity" type="range" min="1" max="4" step="0.2" value="2.2" aria-label="漫游转向速度"></label>');sceneTools.querySelector('div')!.append(routeTools);
$('roam-fov').oninput=e=>firstPerson.setFov(Number((e.target as HTMLInputElement).value));$('roam-sensitivity').oninput=e=>firstPerson.sensitivity=Number((e.target as HTMLInputElement).value)/1000;
sceneTools.addEventListener('toggle',syncControllers);
new MutationObserver(syncControllers).observe($('app'),{subtree:true,attributes:true,attributeFilter:['open']});
sceneTools.addEventListener('keydown',e=>{if(e.key==='Escape'&&sceneTools.open){e.preventDefault();e.stopPropagation();sceneTools.open=false;sceneTools.querySelector('summary')!.focus()}});

const raycaster=new T.Raycaster();const pointer=new T.Vector2();const screenPoint=new T.Vector3();const exploration=createExploration(scene,world.interior.grinder);const hotspots=[...world.hotspots,...garden.hotspots,...exploration.hotspots,cinema.hotspot,cinema.projectorHotspot];
// Simple boat hit volumes follow their real transforms, including the moving visitor launch.
const boatHotspots=island.boatRoots.map((root,i)=>{const m=new T.Mesh(new T.BoxGeometry(i===0?2.3:1.7,1.5,i===0?7.2:4.4),new T.MeshBasicMaterial({visible:false}));m.position.y=.45;m.userData.hit='boat-'+i;root.add(m);const h={id:m.userData.hit,label:'看看游船',mesh:m,point:new T.Vector3()};hotspots.push(h);return h;});
// A dedicated seat hotspot keeps the old screen click intact in orbit mode.
const cinemaSeatHit=new T.Mesh(new T.BoxGeometry(1,.8,1.6),new T.MeshBasicMaterial({visible:false}));cinemaSeatHit.position.set(-18,cinema.eye.y-.6,5.8);cinemaSeatHit.userData.hit='cinema-seat';scene.add(cinemaSeatHit);hotspots.push({id:'cinema-seat',label:'坐下看一会儿',point:cinemaSeatHit.position.clone(),mesh:cinemaSeatHit});
for(const [i,h] of island.diagnostics().stiltHouses.houses.entries()){const m=new T.Mesh(new T.BoxGeometry(.5,1.7,.5),new T.MeshBasicMaterial({visible:false}));m.position.set(h.center[0]+Math.sin(h.yaw)*1.36,h.center[1]+.85,h.center[2]+Math.cos(h.yaw)*1.36);m.userData.hit='stilt-door-'+i;scene.add(m);hotspots.push({id:m.userData.hit,label:'看看水上屋',point:m.position.clone(),mesh:m});}
function fpAllowed(id:string){if(id==='cinema')return false;if(id==='cinema-seat')return cinema.available;if(id==='mona')return mona.interactive;if(id==='person0'||id==='coffee'||id==='table'||/^seat/.test(id)||id==='explore-grinder')return false;return true;}
function interactAhead(){const h=fpRay.pick(camera,hotspots,fpAllowed);if(h)activate(h.id==='cinema-seat'?'cinema':h.id);}
const roamingUI=createFirstPersonUI(host,firstPerson,interactAhead);
const standUp=document.createElement('button');standUp.id='stand-up';standUp.textContent='起身，回到庭院';standUp.hidden=true;host.append(standUp);standUp.onclick=()=>{if(state.mode==='inside'){insideControls.stand();standUp.hidden=true;}else resetCamera();};

const cinemaPrompt=document.createElement('button');cinemaPrompt.id='cinema-hint';cinemaPrompt.className='paper-control';cinemaPrompt.textContent='坐下来，看一会儿老电影。';cinemaPrompt.hidden=true;
Object.assign(cinemaPrompt.style,{position:'absolute',transform:'translate(-50%,-50%)',fontSize:'13px',padding:'8px 12px',minHeight:'44px',zIndex:'3',maxWidth:'210px'});host.append(cinemaPrompt);cinemaPrompt.onclick=enterCinema;
let cinemaWasAuto=false;
function enterCinema(){if(roamingActive()&&Math.hypot(playerBody.position.x+18,playerBody.position.z-5.8)>2.1){navigateTo('cinema');return;}if(!cinema.available||state.transition||cinemaView.transitioning||document.querySelector('dialog[open]'))return;if(cinemaView.active){leaveCinema();return}firstPerson.pause();cinemaReturn={camera,controls,seated:state.beachSeat,eye:camera.position.clone(),target:(roaming?firstPerson.target:controls.target).clone(),zoom:beachCamera.zoom,fov:beachCamera.fov};cinemaWasAuto=state.auto;state.auto=false;outsideControls.autoRotate=false;outsideControls.enabled=false;$('rotate').setAttribute('aria-pressed','false');cinemaView.enter(camera,roaming?firstPerson.target:controls.target);state.beachSeat=true;camera=beachCamera;controls=beachControls;standUp.textContent='起身，返回原视角';standUp.hidden=false;$('gesture').textContent='静静观影 · 拖动微调 · 起身或 Esc 返回';sceneTools.open=false;sceneHints.suppress();window.dispatchEvent(new CustomEvent('cafe-cinema-audio',{detail:true}));}
function leaveCinema(immediate=false){cinemaView.exit(immediate);window.dispatchEvent(new CustomEvent('cafe-cinema-audio',{detail:false}));standUp.hidden=cinemaView.active||!state.beachSeat;standUp.textContent='起身，回到庭院';$('gesture').textContent='拖动环视 · 滚轮缩放';state.auto=cinemaWasAuto;outsideControls.autoRotate=state.auto;$('rotate').setAttribute('aria-pressed',String(state.auto));}

function sitBeach(){if(roamingActive()&&Math.hypot(playerBody.position.x+15.25,playerBody.position.z-7.3)>2.1)return;firstPerson.pause();if(cinemaView.active)leaveCinema(true);if(state.mode!=='outside'||state.transition)return;state.beachSeat=true;state.auto=false;outsideControls.autoRotate=false;outsideControls.enabled=insideControls.enabled=false;beachControls.enabled=true;controls=beachControls;camera=beachCamera;beachControls.lookFrom(exploration.beachEye,exploration.beachFocus);standUp.hidden=false;$('rotate').setAttribute('aria-pressed','false');$('gesture').textContent='坐着赏海 · 拖动环视 · 起身回庭院';sceneTools.open=false}
let toastTimer=0,toastLocked=false;
const toastQueue:{text:string;important:boolean}[]=[];
// Keep the existing notice above native dialogs, without moving focus or blocking input.
function liftToast(){const el=$('toast');if(typeof el.showPopover==='function'){el.setAttribute('popover','manual');if(el.matches(':popover-open'))el.hidePopover();el.showPopover()}}
new MutationObserver(()=>{if($('toast').classList.contains('visible'))liftToast()}).observe(document.getElementById('app')!,{subtree:true,attributes:true,attributeFilter:['open']});
function toast(text:string,important=false){
 if(toastLocked){toastQueue.push({text,important});return}
 $('toast').textContent=text;$('toast').classList.add('visible');clearTimeout(toastTimer);toastLocked=important;liftToast();
 toastTimer=window.setTimeout(()=>{toastLocked=false;$('toast').classList.remove('visible');if($('toast').matches(':popover-open'))$('toast').hidePopover();const next=toastQueue.shift();if(next)toast(next.text,next.important)},important?6500:3800);
}
async function switchScene(mode:Mode){if(state.transition||state.mode===mode)return;if(mode==='inside'&&roamingActive()&&Math.hypot(playerBody.position.x+1.07,playerBody.position.z-2.23)>2.1){navigateTo('cafe');return;}firstPerson.pause();if(cinemaView.active)leaveCinema(true);if(state.beachSeat)resetCamera();if(mode==='inside')game.enterMusic();state.transition=true;$('fade').classList.add('show');await new Promise(r=>setTimeout(r,420));state.mode=mode;state.auto=false;$('rotate').setAttribute('aria-pressed','false');outsideControls.enabled=mode==='outside';insideControls.enabled=mode==='inside';controls=mode==='outside'?outsideControls:insideControls;camera=mode==='outside'?outsideCamera:insideCamera;outsideControls.autoRotate=false;document.body.classList.toggle('scene-interior',mode==='inside');$('outside').classList.toggle('active',mode==='outside');$('inside').classList.toggle('active',mode==='inside');$('outside').setAttribute('aria-pressed',String(mode==='outside'));$('inside').setAttribute('aria-pressed',String(mode==='inside'));$('scene-title').textContent=mode==='outside'?'把时光，留在天空岛。':'欢迎，坐一会儿。';$('scene-copy').textContent=mode==='outside'?'一座会呼吸的温室咖啡馆':'黄铜的温度，和刚磨好的咖啡香';$('enter').innerHTML=mode==='outside'?'推门，喝杯咖啡 <span>↗</span>':'回到庭院 <span>↗</span>';$('gesture').textContent=mode==='outside'?'拖动环视 · 滚轮缩放':'定点环视 · 滚轮缩放 · 点击圆桌坐下';doorHint.hidden=mode==='inside';hint.hidden=true;world.door.rotation.y=mode==='inside'?-.9:0;resize();resetCamera();playDoor();game.syncMusic();$('fade').classList.remove('show');state.transition=false;if(roaming&&mode==='outside'){camera=firstPerson.camera;controls=outsideControls;}syncControllers()}
function orderCoffee(name:string){if(state.order>0){toast('正在为你慢慢冲煮，请稍等片刻。');return}state.order=8;toast('咖啡师：'+name+'，马上就好。');playPour()}
function activate(id:string){if(document.querySelector('dialog[open]'))return;if(id.startsWith('boat-')){toast('出海功能正在建设中');return;}if(id==='person3'){toast('他不想被打扰哦');return;}if(id==='projector'){if(cinema.toggleProjection(state.weather)){if(cinemaView.active&&!cinema.available)leaveCinema();toast(cinema.available?'幕布慢慢垂下，放映机开始轻响。':'放映机停了，幕布慢慢收起。');}else toast('雨雪天先收好放映机，等天气放晴吧。');return;}if(id.startsWith('stilt-door-')){toast('这里以后也许会开放。');return;}if(id==='cinema-seat')id='cinema';if(id==='cinema'){if(cinemaView.active)leaveCinema();else enterCinema();return}if(id==='explore-beach-seat'){sitBeach();return}if(id.startsWith('explore-')){const note=exploration.note(id);if(note)toast(note);return}if(id==='mona'){if(mona.interactive)game.monaTalk();return}if(id.startsWith('crop-')){game.garden();return}if(id==='garden'){toast('尤加利的香气，混着石板缝里的青草味。');return}if(id==='lantern'){state.gardenLit=!state.gardenLit;toast(state.gardenLit?'小灯已亮，替你留着这一点暖。':'小灯熄了，听一会儿风吧。');return}if(id.startsWith('seat')){if(state.mode==='outside'){switchScene('inside');return}const index=Number(id.slice(4));if(index===2&&state.weather==='snow'){toast('林伯正坐在窗边，旁边两张椅子为你留着。');return}insideControls.sit(index);standUp.textContent='起身';standUp.hidden=false;$('gesture').textContent='坐着环视 · 拖动看四周 · 点击起身回到站立';return}if(id.startsWith('person')){game.talk(Number(id.slice(6)));return}if(id==='door')switchScene(state.mode==='outside'?'inside':'outside');if(id==='coffee'){if(state.mode==='outside')switchScene('inside');else game.menu()}if(id==='table'){if(state.mode==='outside'){switchScene('inside');return}insideControls.sit();standUp.textContent='起身';standUp.hidden=false;$('gesture').textContent='坐着环视 · 拖动看四周 · 点击起身回到站立'}if(id==='sign')toast('今日手冲 · 浅烘焙 / 花香 / 柑橘。小店营业中。')}
function pick(clientX:number,clientY:number){const rect=renderer.domElement.getBoundingClientRect();if(roamingActive()){const ndc=document.pointerLockElement===renderer.domElement?new T.Vector2():new T.Vector2((clientX-rect.left)/rect.width*2-1,-(clientY-rect.top)/rect.height*2+1);return fpRay.pick(camera,hotspots,fpAllowed,ndc)?.id;}pointer.set((clientX-rect.left)/rect.width*2-1,-(clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects(hotspots.filter(h=>h.id==='cinema-seat'||h.id.startsWith('stilt-door-')?false:h.id==='cinema'?cinema.available&&!cinemaView.transitioning&&(state.beachSeat||outsideCamera.zoom>=.5):h.id==='mona'?mona.interactive:state.mode==='outside'||!h.id.startsWith('crop-')).map(h=>h.mesh),false);const first=hits[0]?.object.userData.hit as string|undefined;/* The broad counter target must not swallow its smaller grinder target. */return first==='coffee'&&hits.some(h=>h.object.userData.hit==='explore-grinder')?'explore-grinder':first}
let down={x:0,y:0};let wasLocked=false;renderer.domElement.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY};wasLocked=!!document.pointerLockElement;hint.hidden=true});renderer.domElement.addEventListener('pointerup',e=>{if(cinemaView.transitioning||document.querySelector('dialog[open]')||Math.hypot(e.clientX-down.x,e.clientY-down.y)>7||state.transition||indoorPinching)return;if(roamingActive()&&(firstPerson.gestureMoved||(e.pointerType!=='touch'&&!firstPerson.fallback&&!wasLocked)))return;const id=pick(e.clientX,e.clientY);if(id)activate(id)});
renderer.domElement.addEventListener('pointermove',e=>{if(roamingActive()||e.buttons){hint.hidden=true;return}const id=pick(e.clientX,e.clientY);renderer.domElement.style.cursor=id?'pointer':'grab';if(id&&id!=='door'){hint.textContent=hotspots.find(h=>h.id===id)!.label;const rect=host.getBoundingClientRect();hint.style.left=(e.clientX-rect.left)+'px';hint.style.top=(e.clientY-rect.top)+'px';hint.hidden=false}else hint.hidden=true});renderer.domElement.addEventListener('pointerleave',()=>hint.hidden=true);
$('weather-toggle').onclick=()=>{const modes=['sun','rain','snow'] as const;state.weather=modes[(modes.indexOf(state.weather)+1)%3];state.rain=state.weather==='rain';frenchExterior.setWeather(state.weather);world.treeAssets.setWinter(state.weather==='snow');world.bushAssets.setWinter(state.weather==='snow');$('weather-toggle').innerHTML=weatherLabel(state.weather);$('weather-toggle').setAttribute('aria-label',`当前${state.weather==='sun'?'晴天':state.rain?'雨天':'雪天'}，点击切换天气`);$('weather-toggle').setAttribute('aria-pressed',String(state.weather!=='sun'));document.body.classList.toggle('rainy',state.rain);document.body.classList.toggle('snowy',state.weather==='snow');game.syncMusic();toast(state.weather==='snow'?'雪轻轻落下，门前留了一条回家的小路。':state.rain?'雨落下来了，为你撑开庭院的伞。':'天空放晴了，收起伞，晒一会儿太阳。')};
$('outside').onclick=()=>{if(cinemaView.active){leaveCinema();return}if(state.beachSeat)resetCamera();else switchScene('outside')};$('inside').onclick=()=>switchScene('inside');$('door-hint').onclick=()=>switchScene('inside');$('enter').onclick=()=>switchScene(state.mode==='outside'?'inside':'outside');
$('rotate').onclick=()=>{if(roamingActive()){toast('当前是漫游；返回环绕后可以开启自动环绕。');return;}if(cinemaView.active){toast('坐在这里，轻轻拖动就能调整观影视线。');return;}if(state.beachSeat){toast('坐在这里，可以拖动视线看海。');return}if(state.mode==='inside'){toast('店内可以拖动视线。回到庭院可开启 360° 环绕。');return}state.auto=!state.auto;outsideControls.autoRotate=state.auto;$('rotate').setAttribute('aria-pressed',String(state.auto));toast(state.auto?'绕着小店，慢慢看一圈。':'已停止环绕，可自由拖动。')};
let targetNight=0,nightValue=0;
$('light').onclick=()=>{if(state.weather==='snow'){toast('雪天保持柔和的日间光线。');return}state.night=!state.night;targetNight=state.night?1:0;$('light').setAttribute('aria-pressed',String(state.night));$('light').setAttribute('aria-label',state.night?'当前暮色，切换日光':'当前日光，切换暮色');$('light').title=state.night?'暮色 · 点击切换日光':'日光 · 点击切换暮色';$('time-label').textContent=state.night?'傍晚 · 18:08':'午后 · 15:24';toast(state.night?'傍晚的灯，已为你留好。':'又是一个有阳光的午后。')};
$('photo').onclick=()=>{rendering.render(camera);const a=document.createElement('a');a.download=`天空岛-${state.mode==='outside'?'庭院':'店内'}-${Date.now()}.png`;a.href=renderer.domElement.toDataURL('image/png');a.click();toast('已保存这片刻的风景。')};
const guide=$('guide') as HTMLDialogElement;$('help').onclick=()=>{const current=roamingActive()?{title:'漫游',text:'走到咖啡屋门口按 E 进入，找阿禾聊聊；走近花园植株可播种、照料或收获。',controls:matchMedia('(pointer:coarse)').matches?'左摇杆行走，右侧拖动观察，双指调整视野，点击互动。横屏视野更舒展。':'点击场景捕获鼠标，WASD 行走，Shift 稍快走，鼠标观察，E 互动，R 平视，Esc 释放鼠标。1 全岛概览，2 漫游，Tab 打开随心逛逛。'}:cinemaView.active?{title:'露天电影院',text:'坐在沙滩躺椅上欣赏幕布；点击幕布或「起身」返回原视角。',controls:'拖动环视，缩放调整远近；Esc 也能结束观影，不消耗金币。'}:sceneHints.help();$('guide-current-title').textContent=current.title+' · 操作提示';$('guide-current-copy').textContent=current.text;$('guide-current-controls').textContent=current.controls;sceneHints.suppress();sceneTools.open=false;guide.showModal();controls.enabled=false};$('close-guide').onclick=()=>guide.close();guide.addEventListener('close',()=>controls.enabled=true);guide.addEventListener('click',e=>{if(e.target===guide){const r=guide.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)guide.close()}});
window.addEventListener('keydown',e=>{if(document.querySelector('dialog[open]')||/INPUT|TEXTAREA|SELECT/.test((e.target as HTMLElement)?.tagName)||e.ctrlKey||e.metaKey)return;
 if(e.key==='1')$('island-view').click();if(e.key==='2')setRoaming(true);
 if(e.key==='Tab'&&roamingActive()){e.preventDefault();sceneTools.open=!sceneTools.open;syncControllers();if(sceneTools.open)sceneTools.querySelector<HTMLElement>('summary')!.focus();}
 if(e.key.toLowerCase()==='e'&&!e.repeat&&roamingActive()&&firstPerson.enabled)interactAhead();
 if(e.key==='Escape'){if(cinemaView.active){leaveCinema();return}if(state.beachSeat){resetCamera();return}if(roamingActive()){firstPerson.pause();return}if(state.mode==='inside')switchScene('outside');}
 if(e.key.toLowerCase()==='r'&&roamingActive())firstPerson.pitch=0;});

// Optional, synthesized ambience: no media downloads and no autoplay audio.
let audioCtx:AudioContext|undefined,master:GainNode|undefined;
function initAudio(){if(audioCtx)return;audioCtx=new AudioContext();master=audioCtx.createGain();master.gain.value=0;master.connect(audioCtx.destination);const len=audioCtx.sampleRate*3,buf=audioCtx.createBuffer(1,len,audioCtx.sampleRate),data=buf.getChannelData(0);let brown=0;for(let i=0;i<len;i++){brown=(brown+Math.random()*.02-.01)/1.02;data[i]=brown*2}const noise=audioCtx.createBufferSource();noise.buffer=buf;noise.loop=true;const filter=audioCtx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=420;noise.connect(filter).connect(master);noise.start();for(const [f,v] of [[130.81,.009],[196,.007],[261.63,.005]]){const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='sine';o.frequency.value=f;g.gain.value=v;o.connect(g).connect(master);o.start()}}
function tone(f:number,dur:number,volume:number){if(!state.sound||!audioCtx||!master)return;const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.frequency.setValueAtTime(f,audioCtx.currentTime);g.gain.setValueAtTime(volume,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+dur);o.connect(g).connect(master);o.start();o.stop(audioCtx.currentTime+dur)}
function playDoor(){tone(1318,.7,.09);setTimeout(()=>tone(1760,.9,.035),90)}
function playPour(){for(let i=0;i<9;i++)setTimeout(()=>tone(700+Math.random()*500,.1,.018),i*240)}
const monaContext=()=>({outside:state.mode==='outside'&&!state.transition,dusk:state.night&&state.weather!=='snow',brewing:state.order>0,dialogueOpen:modalOpen});
const game=initGame({monaContext,gardenVisual:v=>garden.setCultivation(v),talkTargets:()=>{},decorate:ids=>{for(const [id,g] of Object.entries(world.decorations))g.visible=ids.includes(id)},brew:name=>{if(state.order>0){toast('咖啡师正在忙，请稍等。');return false}orderCoffee(name);return true},toast,lock:v=>{if(v)firstPerson.pause();if(v&&controls instanceof IndoorLook)controls.freeze();controls.enabled=!v&&!cinemaView.transitioning;outsideControls.autoRotate=!v&&!state.beachSeat&&state.auto;hint.hidden=true},inside:()=>state.mode==='inside',raining:()=>state.weather==='rain',sunny:()=>state.weather==='sun'});
// Reuse all original controls; only their presentation and edge placement change.
document.querySelector('.game-nav')!.append(sceneTools);
const utility=document.querySelector<HTMLElement>('.top-tools')!;utility.classList.add('utility-tools');$('app').append(utility);
const skyControls=document.createElement('div');skyControls.className='sky-controls';host.append(skyControls);skyControls.append($('weather-toggle'),$('light'));$('light').className='daylight-switch';$('light').innerHTML='<span class="daylight-thumb"></span><span class="daylight-sun" aria-hidden="true">☀</span><span class="daylight-moon" aria-hidden="true">☾</span>';$('light').setAttribute('aria-label','当前日光，切换暮色');
$('weather-toggle').classList.add('paper-control');$('weather-toggle').innerHTML=weatherLabel(state.weather);
$('sound').classList.add('paper-control');$('help').classList.add('paper-control');
$('sound').innerHTML=watercolorIcon('sound');$('help').innerHTML='<span class="help-pencil" aria-hidden="true">?</span>';
$('help').title='操作提示 · 随时查看当前场景的玩法';
sceneTools.addEventListener('toggle',()=>{if(sceneTools.open&&document.querySelector('dialog[open]'))sceneTools.open=false});
document.addEventListener('pointerdown',e=>{if(sceneTools.open&&!sceneTools.contains(e.target as Node))sceneTools.open=false});
const mona=createMona(scene,host,()=>game.monaTalk(),()=>toast('莫娜还在路上，模型暂时未能载入，稍后会重试。'));hotspots.push(mona.hotspot);
const nameplates=createNameplates(host,[...world.actors.map((a,i)=>({name:['阿禾','林伯','棠姨','客人','店员'][i]??'客人',onClick:i===3?()=>activate('person3'):undefined,anchor:(v:T.Vector3)=>{if(i===0)a.root.localToWorld(v.set(0,1.96/a.root.scale.y,-.15));else if(i===1){a.root.getWorldPosition(v);v.y+=1.51}else a.head.localToWorld(v.set(0,.36,0))},visible:()=>a.root.visible&&(state.mode==='outside'||i===0||i===1&&state.weather==='snow')})),{name:'莫娜',anchor:(v:T.Vector3)=>{mona.root.getWorldPosition(v);v.y+=1.5},visible:()=>mona.root.visible&&state.mode==='outside'}]);
const sceneAssets=createSceneAssets(scene,world,name=>toast(name+'模型暂时未能载入，刷新后可重试。'));
$('sound').onclick=()=>{game.toggleMusic()};
let hintTouch=matchMedia('(pointer: coarse)').matches;
renderer.domElement.addEventListener('pointerdown',e=>{hintTouch=e.pointerType==='touch'});
const sceneHints=createSceneHints($('app'),()=>({
 view:state.mode==='inside'?(insideControls.seated?'interior-seat':'interior'):state.beachSeat?'beach-seat':$('island-view').getAttribute('aria-pressed')==='true'?'island':'courtyard',
 ready:state.ready&&!document.getElementById('loading')&&!state.transition,
 blocked:modalOpen||sceneTools.open||cinemaView.active,
 roaming:roamingActive(),brewing:state.order>0,storing:game.storing(),touch:hintTouch,weather:state.weather,save:game.save,
}),id=>game.markSceneVisit(id));
window.addEventListener('pagehide',e=>{if(e.persisted)sceneHints.suppress();else sceneHints.destroy()});
const islandMap=createIslandMap($('app'),island.diagnostics(),()=>({x:playerBody.position.x,z:playerBody.position.z,yaw:firstPerson.yaw,inside:state.mode==='inside',roaming:roamingActive(),visits:game.save.sceneVisits??{},target:(Object.keys(navigation.targets) as MapId[]).find(id=>navigation.targets[id]===navigationTarget)??null}),id=>{navigationTarget=id?navigation.targets[id]:null;sceneTools.open=false;if(id)toast(roaming?'目的地已标记，沿方向慢慢走。':'目的地已标记。点击「漫游」，沿方向步行前往。');});
window.addEventListener('cafe-music-change',(e:Event)=>{const m=(e as CustomEvent).detail;if($('sound').dataset.playing!==String(m.playing)){$('sound').innerHTML=watercolorIcon('sound');$('sound').dataset.playing=String(m.playing)}$('sound').setAttribute('aria-pressed',String(m.playing));$('sound').setAttribute('aria-label',m.playing?'暂停声音':'开启声音')});
let lastRoamingAudio=0;
function updateRoamingUI(){let text='',nav='';const active=roamingActive()&&firstPerson.enabled; if(active){const h=fpRay.pick(camera,hotspots,fpAllowed);if(h)text=(hintTouch?'点击互动 · ':'E · ')+(h.id==='door'?'推门进入，找阿禾聊聊':h.id==='cinema-seat'?'坐下看一会儿':h.label);if(navigationTarget){const dx=navigationTarget.x-playerBody.position.x,dz=navigationTarget.z-playerBody.position.z,d=Math.hypot(dx,dz);if(d<1.3)navigationTarget=null;else{const angle=Math.atan2(Math.sin(Math.atan2(dx,dz)-firstPerson.yaw),Math.cos(Math.atan2(dx,dz)-firstPerson.yaw));nav=(Math.abs(angle)<.35?'↑':Math.abs(angle)>2.5?'↶':angle>0?'←':'→')+' '+navigationTarget.name+' · '+Math.round(d)+' 米';}}}roamingUI.update(active,text,nav);if(performance.now()-lastRoamingAudio>100){lastRoamingAudio=performance.now();window.dispatchEvent(new CustomEvent('cafe-roaming-audio',{detail:{active:roamingActive(),...playerBody.position,shore:1-T.MathUtils.clamp(coastDistance(playerBody.position.x,playerBody.position.z)/10,0,1),surface:playerBody.surface.kind,distance:firstPerson.distance,projecting:cinema.available}}));}}
cacheTransforms(scene);
const actorPoint=new T.Vector3();
const actorObstacles=world.actors.map(()=>({x:0,z:0,halfX:.16,halfZ:.16,name:'人物'}));
const monaObstacle={x:0,z:0,halfX:.18,halfZ:.18,name:'莫娜'};
let animationFrame=0,last=performance.now(),fpsTime=0,fpsFrames=0,lastActivity='',lastPageBackground='',lastLightDisabled='';
const cinemaScreenPoint=new T.Vector3(),orbitOffset=new T.Vector3(),actorHotspots=world.actors.slice(0,4).map((a,i)=>({actor:a,hotspot:hotspots.find(h=>h.id==='person'+i),height:i===0?1.5:i===2?.8:1.1}));
const lightColors={cf8fbff:new T.Color(0xf8fbff),ccbd4dc:new T.Color(0xcbd4dc),ce8e4da:new T.Color(0xe8e4da),cffe7cb:new T.Color(0xffe7cb),c9e8c89:new T.Color(0x9e8c89),snowSky:new T.Color(0xdde3e8).multiplyScalar(1.55)};
const dayBg=new T.Color(0xf2eee6),duskBg=new T.Color(0xedece5),daySun=new T.Color(0xffeed3),duskSun=new T.Color(0xffc982);
 function animate(now:number){animationFrame=0;if(document.hidden)return;animationFrame=requestAnimationFrame(animate);const dt=Math.max(0,Math.min((now-last)/1000,.05));last=now;if(document.hidden||state.paused)return;syncControllers();if(roamingActive()){navigation.obstacles.length=fixedObstacleCount;for(let i=0;i<world.actors.length;i++){const p=world.actors[i].root.getWorldPosition(actorPoint);if(p.y<.8){const o=actorObstacles[i];o.x=p.x;o.z=p.z;navigation.obstacles.push(o);}}if(mona.root.visible){const p=mona.root.getWorldPosition(actorPoint);monaObstacle.x=p.x;monaObstacle.z=p.z;navigation.obstacles.push(monaObstacle);}}firstPerson.update(dt);for(const h of boatHotspots)h.mesh.getWorldPosition(h.point);updateRoamingUI();islandMap.update(now);state.time+=dt;state.frames++;fpsTime+=dt;fpsFrames++;if(fpsTime>1){state.fps=Math.round(fpsFrames/fpsTime);fpsTime=0;fpsFrames=0}if(state.order>0){state.order=Math.max(0,state.order-dt);game.tick(state.order);if(state.order===0){state.cups++;game.complete();tone(1046,.5,.04)}}updatePeople(world.actors,state.time,state.order);world.updateService(state.time,state.order,state.mode==='inside');
 world.steam.children.forEach((o,i)=>{const f=(state.time*.25+i/9)%1;o.position.y=.05+f*.55;o.position.x=Math.sin(f*6+i)*.045;o.position.z=Math.cos(f*5+i)*.025;o.scale.set(.012*(1+f*1.6),.06*(1+f),.012*(1+f));});
 if(cinemaView.active&&(state.weather!=='sun'||!cinema.available||state.mode!=='outside'))leaveCinema(true);
 frenchExterior.update(dt,state.time);beachLife.update(state.weather,nightValue,state.mode==='inside');fireworks.update(dt,state.weather==='sun'&&state.night,state.mode==='outside',modalOpen,viewHeight);cinemaView.update(dt,modalOpen);cinema.update(state.time,dt,state.weather,state.night,cinemaView.active&&!cinemaView.transitioning,camera,state.mode==='inside');
 cinemaPrompt.hidden=roaming||!cinema.available||cinemaView.active||modalOpen||sceneTools.open||(!state.beachSeat&&outsideCamera.zoom<.5);
 if(!cinemaPrompt.hidden){const p=cinemaScreenPoint.copy(cinema.hotspot.point).project(camera);cinemaPrompt.style.left=(p.x*.5+.5)*viewWidth+'px';cinemaPrompt.style.top=(-p.y*.5+.5)*viewHeight+'px';cinemaPrompt.hidden=p.z>1||Math.abs(p.x)>.85||Math.abs(p.y)>.65;}
 const mc=monaContext(),resident=game.save.monaEvent?.completed===true;mona.update(dt,state.time,monaEligible(game.save,mc)||(resident&&mc.outside&&!mc.dialogueOpen),game.monaConversation(),camera,viewWidth,viewHeight,resident,false);
 garden.update(state.time,state.weather==='snow',state.night,state.rain);weather.update(dt,state.time,state.rain,roamingActive()?firstPerson.camera.position:undefined);snow.update(dt,state.time,state.weather==='snow',state.mode==='inside',camera);characterDetails.update(state.time,state.order);sceneAssets.update(state.time,state.weather==='snow',dt,state.order);residentMotion.update(dt,state.time,state.weather,island.boat.parameters.BoatState,modalOpen,roamingActive()?playerBody.position:null);nightValue=T.MathUtils.damp(nightValue,targetNight,2,dt);
 const wet=weather.wet,frost=snow.amount,overcast=Math.max(wet,frost);
 sun.intensity=T.MathUtils.lerp((3.3-nightValue*2.7+nightValue*.8*(1-overcast))*(1-overcast),.5,frost);sun.castShadow=overcast<.1;sun.color.copy(daySun).lerp(duskSun,nightValue).lerp(lightColors.cf8fbff,frost);
 hemi.intensity=T.MathUtils.lerp((1.3-nightValue*.6+nightValue*.35*(1-overcast))+wet*.25,1.1,frost);hemi.color.set(overcast>.3?0xe8eff4:0xfff7e7).lerp(lightColors.ccbd4dc,frost);hemi.groundColor.set(0xc0bca6).lerp(lightColors.ce8e4da,frost);
 fill.intensity=T.MathUtils.lerp((.8-nightValue*.45+nightValue*.25*(1-overcast))*(1-overcast),.35,frost);fill.position.set(5,T.MathUtils.lerp(5,-2,frost),-6);fill.color.set(0xf3f5ed).lerp(lightColors.cffe7cb,frost);scene.environmentIntensity=T.MathUtils.lerp(.52-nightValue*.17+nightValue*.08*(1-overcast),.62,frost);renderer.toneMappingExposure=T.MathUtils.lerp(1,Math.pow(2,-.4),frost);rendering.setSnow(frost);
 sceneColor.copy(dayBg).lerp(duskBg,nightValue).lerp(lightColors.snowSky,frost);
 materials.light.emissiveIntensity=state.gardenLit?T.MathUtils.lerp(1.25+nightValue*1.6+overcast*1.4,.7,frost):0;materials.pendantLight.emissiveIntensity=T.MathUtils.lerp(1.65+nightValue*.7,1.35,frost);world.lamps.forEach(l=>{l.color.set(0xffd092);l.intensity=T.MathUtils.lerp(5+nightValue*11+overcast*8-nightValue*6*(1-overcast),4,frost)});
 world.rainProps.visible=wet>.4&&state.weather!=='snow';const spread=state.weather==='snow'?.17:.17+wet*.83;world.umbrellaShade.scale.set(spread,1,spread);world.linShade.scale.set(spread,1,spread);const lightDisabled=String(state.weather==='snow');if(lightDisabled!==lastLightDisabled){$('light').setAttribute('aria-disabled',lightDisabled);lastLightDisabled=lightDisabled}
 interiorLife.update(state.mode==='inside',state.time,wet,frost,nightValue);eveningSky.update(false,0);indoorSea.update(state.mode==='inside',state.time,wet,frost,nightValue);indoorAtmosphere.update(state.mode==='inside',state.time,nightValue,overcast);
 ground.visible=false;ground.material.color.set(0xf2eee6).lerp(lightColors.c9e8c89,state.mode==='inside'?nightValue:0);
 // Interior exposure is a local lighting state; the courtyard rig above is unchanged.
 if(state.mode==='inside'){
  sun.intensity=.85*(1-overcast*.6)*(1-nightValue*.65);sun.castShadow=false;
  hemi.intensity=.8;fill.intensity=.35;scene.environmentIntensity=.25;renderer.toneMappingExposure=.88;
  materials.glass.opacity=.08;materials.glass.envMapIntensity=.2;
  materials.pendantLight.color.set(0xf5f0e6);materials.pendantLight.roughness=.78;materials.pendantLight.emissiveIntensity=.22+overcast*.1+nightValue*.12;
  world.lamps.forEach(l=>l.intensity=1.8+overcast*.5+nightValue*.8);
 }else{materials.glass.opacity=.14;materials.glass.envMapIntensity=1.5;materials.pendantLight.color.set(0xf2d9a0);materials.pendantLight.roughness=.24;}
 const pageBackground=frost>.5?'#dde3e8':'#f2eee6';if(pageBackground!==lastPageBackground){document.body.style.backgroundColor=pageBackground;document.documentElement.style.backgroundColor=pageBackground;lastPageBackground=pageBackground}


 const activity=state.order>0?'咖啡师正在为你冲煮':state.mode==='inside'?(Math.floor(state.time/8)%2?'杯里升起了热气':'咖啡师正在准备手冲'):(Math.floor(state.time/10)%3===0?'咖啡师正在准备手冲':Math.floor(state.time/10)%3===1?'园丁正在照料绿植':'客人正在享用午后咖啡');if(lastActivity!==activity){$('activity').textContent=activity;lastActivity=activity}
 actorHotspots.forEach(({actor,hotspot:h,height})=>{if(h){actor.root.getWorldPosition(h.point);h.point.y+=height;h.mesh.position.copy(h.point)}});if(!cinemaView.transitioning&&!roamingActive())controls.update();if(state.mode==='outside'&&!roaming&&!state.beachSeat&&!cinemaView.active){screenPoint.copy(hotspots[0].point).project(camera);doorHint.style.left=(screenPoint.x*.5+.5)*viewWidth+'px';doorHint.style.top=(-screenPoint.y*.5+.5)*viewHeight+'px';const forward=outsideCamera.position.z>1.7&&outsideControls.getPolarAngle()>.12;doorHint.style.opacity=forward?'1':'0';doorHint.style.pointerEvents=forward?'auto':'none';doorHint.hidden=false}else doorHint.hidden=true;

 // Orthographic zoom changes coverage, not camera distance. Pull the eye back only
 // when zoomed out, so its near plane cannot cut through the foreground ocean.
 if(state.mode==='outside'&&!state.beachSeat&&outsideCamera.zoom<.74){const offset=orbitOffset.copy(outsideCamera.position).sub(outsideControls.target);const required=Math.max(54,Math.min(800,(outsideCamera.top/outsideCamera.zoom+8)*Math.tan(Math.min(outsideControls.getPolarAngle(),1.50))));if(offset.length()<required){outsideCamera.position.copy(outsideControls.target).add(offset.setLength(required));outsideCamera.updateMatrixWorld();}}
 nameplates.update(camera,viewWidth,viewHeight,state.transition||cinemaView.active||modalOpen);
 sceneHints.update(now);walkButton.hidden=state.mode==='inside'||modalOpen||state.beachSeat;$('island-view').hidden=state.mode==='inside';island.update(state.time,dt,state.weather,camera,state.mode==='inside');renderer.info.reset();island.capture(camera);rendering.render(camera);if(state.frames===1)startAssetLoading();if(state.frames===3){state.ready=true;$('loading').style.opacity='0';setTimeout(()=>$('loading').remove(),850)}
}
animationFrame=requestAnimationFrame(animate);
renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();state.paused=true;toast('3D 画面暂时中断，正在恢复。')});renderer.domElement.addEventListener('webglcontextrestored',()=>{state.paused=false;toast('3D 画面已恢复。')});
document.addEventListener('visibilitychange',()=>{last=performance.now();if(document.hidden){cancelAnimationFrame(animationFrame);animationFrame=0}else if(!animationFrame)animationFrame=requestAnimationFrame(animate);if(audioCtx&&master)master.gain.setTargetAtTime(!document.hidden&&state.sound?.8:0,audioCtx.currentTime,.2)});
// Read-only QA evidence, including projected real interaction coordinates.
function outlineScreen(){return garden.outline.map(([x,z])=>project(new T.Vector3(x,.26,z)))}
function project(p:T.Vector3){const v=p.clone().project(camera);const r=host.getBoundingClientRect();return {x:r.left+(v.x*.5+.5)*viewWidth,y:r.top+(-v.y*.5+.5)*viewHeight}}
if(new URLSearchParams(location.search).has('qa'))Object.assign(window,{roamingState:()=>firstPerson.diagnostics(),roamingInput:(forward:number,side:number,yaw:number,pitch=firstPerson.pitch)=>{if(!roamingActive()||!firstPerson.enabled)return;firstPerson.axis.y=T.MathUtils.clamp(forward,-1,1);firstPerson.axis.x=T.MathUtils.clamp(side,-1,1);firstPerson.yaw=yaw;firstPerson.pitch=T.MathUtils.clamp(pitch,-40*Math.PI/180,55*Math.PI/180);},cinemaRenderProbe:(visible:boolean)=>{cinema.root.visible=visible},gpuInfo:()=>({geometries:renderer.info.memory.geometries,textures:renderer.info.memory.textures,programs:renderer.info.programs?.length,calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,pixelRatio:renderer.getPixelRatio(),preserveDrawingBuffer:renderer.getContext().getContextAttributes()?.preserveDrawingBuffer}),renderStats:()=>({draws:renderer.info.render.calls,triangles:renderer.info.render.triangles}),setIslandParameters:(values:Record<string,number>)=>island.setParameters(values),glasshouseSnapshot:()=>({...state,assets:assetDiagnostics(),cameraMode:cameraMode(),roaming:firstPerson.diagnostics(),islandMap:islandMap.diagnostics(),residents:residentMotion.diagnostics(),fireworks:fireworks.diagnostics(),beachLife:beachLife.diagnostics(),frenchExterior:frenchExterior.diagnostics(),navigation:{targets:navigation.targets,obstacles:navigation.obstacles,segments:navigation.segments},sceneHint:sceneHints.diagnostics(),progress:game.save,nameplates:nameplates.diagnostics(),shadowBudget:rendering.diagnostics(),cinema:{...cinema.diagnostics(),view:cinemaView.diagnostics()},mona:mona.diagnostics(),sceneAssets:sceneAssets.diagnostics(),trees:world.treeAssets.diagnostics(),bushes:world.bushAssets.diagnostics(),music:game.musicSnapshot(),placedDecor:Object.keys(world.decorations).filter(id=>world.decorations[id].visible),square:[viewWidth,viewHeight],renderQuality:{pixelRatio:renderer.getPixelRatio(),scenePixelRatio:rendering.composer.readBuffer.width/viewWidth,buffer:renderer.getDrawingBufferSize(new T.Vector2()).toArray()},outsideProjection:{width:outsideCamera.right-outsideCamera.left,height:outsideCamera.top-outsideCamera.bottom},weatherWet:weather.wet,snowAmount:snow.amount,snow:snow.diagnostics(),sky:sceneColor.getHexString(),autoOrbitSpeed:outsideControls.autoRotateSpeed,eveningSky:eveningSky.visible,indoorSea:indoorSea.diagnostics(),interiorLife:interiorLife.diagnostics(),camera:camera.position.toArray(),beachOptics:{seated:state.beachSeat,direction:beachCamera.getWorldDirection(new T.Vector3()).toArray(),eye:beachCamera.position.toArray()},insideOptics:{seated:insideControls.seated,seatIndex:insideControls.seatIndex,direction:insideCamera.getWorldDirection(new T.Vector3()).toArray(),focalLength:insideCamera.getFocalLength(),fov:insideCamera.fov,aspect:insideCamera.aspect,target:insideControls.target.toArray()},zoom:outsideCamera.zoom,orbit:{polar:outsideControls.getPolarAngle(),azimuth:outsideControls.getAzimuthalAngle(),target:outsideControls.target.toArray(),minPolar:outsideControls.minPolarAngle,maxPolar:outsideControls.maxPolarAngle},draws:renderer.info.render.calls,triangles:renderer.info.render.triangles,actors:world.actors.length,actorPose:world.actors.map(a=>[a.root.position.x,a.armR.rotation.x]),layout:world.diagnostics(),characters:characterDetails.diagnostics(),island:island.diagnostics(),overviewScreen:world.diagnostics().overviewBounds.map(b=>[b.min[0],b.max[0]].flatMap(x=>[b.min[1],b.max[1]].flatMap(y=>[b.min[2],b.max[2]].map(z=>project(new T.Vector3(x,y,z)))))),garden:{...garden.diagnostics(),screen:outlineScreen()},heroScreen:(()=>{const b=world.diagnostics().heroBounds;return [b.min[0],b.max[0]].flatMap(x=>[b.min[1],b.max[1]].flatMap(y=>[b.min[2],b.max[2]].map(z=>project(new T.Vector3(x,y,z)))))})(),hotspots:Object.fromEntries(hotspots.map(h=>[h.id,project(h.point)]))})});


if(import.meta.hot)import.meta.hot.dispose(()=>{cancelAnimationFrame(animationFrame);cancelAnimationFrame(resizeFrame);hostResizeObserver.disconnect();window.removeEventListener('resize',scheduleResize);world.treeAssets.dispose();world.bushAssets.dispose();sceneAssets.dispose();mona.dispose();});
