import * as T from 'three';
import {GLTFLoader,type GLTF} from 'three/addons/loaders/GLTFLoader.js';
export type AssetPriority='critical'|'visible'|'idle';
type Entry={url:string;priority:AssetPriority;refs:number;status:string;bytes:number;loaded:number;queued:number;fetchMs:number;parseMs:number;error:string|null;asset?:GLTF;promise:Promise<GLTF>;resolve:(g:GLTF)=>void;reject:(e:unknown)=>void};
const loader=new GLTFLoader(),entries=new Map<string,Entry>(),rank={critical:0,visible:1,idle:2};
let started=false,active=0,parsing=0,maxActive=0,maxParsing=0,parseTail:Promise<void>=Promise.resolve();
const yieldFrame=()=>new Promise<void>(r=>requestAnimationFrame(()=>setTimeout(r,0)));
function disposeAsset(asset:GLTF){const geo=new Set<T.BufferGeometry>(),mat=new Set<T.Material>(),tex=new Set<T.Texture>(),images=new Set<ImageBitmap>();asset.scene.traverse(o=>{if(o instanceof T.Mesh){geo.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])mat.add(m)}});for(const m of mat)for(const v of Object.values(m))if(v instanceof T.Texture)tex.add(v);for(const t of tex){if(typeof ImageBitmap!=='undefined'&&t.image instanceof ImageBitmap)images.add(t.image);t.dispose()}geo.forEach(g=>g.dispose());mat.forEach(m=>m.dispose());images.forEach(i=>i.close());}
function retire(e:Entry){if(e.refs||e.status==='fetching'||e.status==='parsing'||e.status==='waiting-parse')return;if(e.asset)disposeAsset(e.asset);entries.delete(e.url);}
async function run(e:Entry){active++;maxActive=Math.max(maxActive,active);e.status='fetching';try{const at=performance.now(),response=await fetch(e.url);if(!response.ok)throw Error(`${response.status} ${e.url}`);e.bytes=Number(response.headers.get('content-length'))||0;
const reader=response.body?.getReader();let data:ArrayBuffer;
if(reader){const chunks:Uint8Array[]=[];for(;;){const {done,value}=await reader.read();if(done)break;chunks.push(value);e.loaded+=value.byteLength;}const bytes=new Uint8Array(e.loaded);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength;}data=bytes.buffer;}else data=await response.arrayBuffer();
e.bytes=e.loaded=data.byteLength;e.fetchMs=performance.now()-at;e.status='waiting-parse';let done!:()=>void;const previous=parseTail;parseTail=new Promise<void>(r=>done=r);await previous;try{await yieldFrame();e.status='parsing';parsing++;maxParsing=Math.max(maxParsing,parsing);const at=performance.now();e.asset=await loader.parseAsync(data,new URL('.',new URL(e.url,location.href)).href);e.parseMs=performance.now()-at;}finally{parsing--;done()}e.status='ready';e.resolve(e.asset!);}catch(error){e.status='error';e.error=String(error);e.reject(error);}finally{active--;retire(e);pump();}}
function pump(){if(!started)return;while(active<2){const next=[...entries.values()].filter(e=>e.status==='queued'&&e.refs>0).sort((a,b)=>rank[a.priority]-rank[b.priority]||a.queued-b.queued)[0];if(!next)break;void run(next);}}
/** Call after the first scene frame. No large model parser can compete with initial HUD construction. */
export function startAssetLoading(){if(started)return;started=true;void yieldFrame().then(pump);}
export function acquireGLB(url:string,priority:AssetPriority='visible'){
 let e=entries.get(url);if(!e){let resolve!:Entry['resolve'],reject!:Entry['reject'];const promise=new Promise<GLTF>((a,b)=>{resolve=a;reject=b});e={url,priority,refs:0,status:'queued',bytes:0,loaded:0,queued:performance.now(),fetchMs:0,parseMs:0,error:null,promise,resolve,reject};entries.set(url,e);}else if(rank[priority]<rank[e.priority])e.priority=priority;
 e.refs++;const entry=e;let released=false;pump();return {ready:entry.promise,release(){if(released)return;released=true;entry.refs--;if(entry.status==='queued'&&!entry.refs){entry.status='cancelled';entry.reject(new Error('Asset request released before loading'));}retire(entry);}};
}
export function assetDiagnostics(){return {started,active,parsing,maxActive,maxParsing,entries:[...entries.values()].map(({url,priority,refs,status,bytes,loaded,fetchMs,parseMs,error})=>({url,priority,refs,status,bytes,loaded,fetchMs,parseMs,error}))};}
