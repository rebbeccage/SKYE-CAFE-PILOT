/** Decode only requested panel media; one decoded image per URL, no save state. */
import panels from './assets/ui/panels.optimized.webp';
import items from './assets/ui/items.optimized.webp';
import decor from './assets/ui/decor-cutouts.optimized.webp';
import people from './assets/ui/people.optimized.webp';
import dialogue from './assets/ui/dialogue-gouache-atlas.optimized.webp';
const decoded=new Map<string,Promise<HTMLImageElement>>();
export function decodeMedia(url:string){let pending=decoded.get(url);if(!pending){const img=new Image();img.decoding='async';img.src=url;pending=img.decode().then(()=>img).catch(e=>{decoded.delete(url);throw e});decoded.set(url,pending);}return pending;}
export function observePanelMedia(panel:HTMLElement){
 const seen=new WeakSet<HTMLImageElement>(),backgrounds=new Set<string>();
 const reveal=(img:HTMLImageElement)=>{if(seen.has(img))return;seen.add(img);img.decoding='async';img.loading='lazy';img.classList.add('media-pending');void decodeMedia(img.dataset.mediaSrc!).then(()=>{if(!img.isConnected)return;img.src=img.dataset.mediaSrc!;img.classList.remove('media-pending');img.classList.add('media-ready')}).catch(()=>{seen.delete(img);img.classList.remove('media-pending')});};
 const scan=()=>{if(!panel.matches('[open]'))return;panel.querySelectorAll<HTMLImageElement>('img[data-media-src]').forEach(reveal);for(const [key,url,selector]of [['paper',panels,'#paper-content'],['items',items,'.item-art'],['decor',decor,'.decor-art'],['people',people,'.portrait:not(img)'],['dialogue',dialogue,'.dialogue-art']]){if(backgrounds.has(key)||!panel.querySelector(selector))continue;backgrounds.add(key);void decodeMedia(url).then(()=>panel.style.setProperty('--media-'+key,`url("${url}")`)).catch(()=>backgrounds.delete(key));}};
 const observer=new MutationObserver(scan);observer.observe(panel,{subtree:true,childList:true,attributes:true,attributeFilter:['open']});scan();return()=>observer.disconnect();
}
