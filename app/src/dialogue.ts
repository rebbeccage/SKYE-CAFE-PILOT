import './dialogue.css';
import {listeningResponse} from './dialogue-response';

type DialogueOptions={portraitUrl?:string;standalone?:boolean;name:string,portrait:number,chapters:number,paragraphs:string[],reply:string,onReply:()=>void,onBack:()=>void};
// Presentation only: story gates, rewards and persistence remain owned by game.ts.
export function createDialogue(dialog:HTMLDialogElement,content:Element,close:()=>void){
 let options:DialogueOptions|null=null,pages:string[][]=[],page=0,committed=false;
 const el=<E extends HTMLElement=HTMLElement>(id:string)=>content.querySelector<E>(id)!;
 function cleanup(){window.dispatchEvent(new CustomEvent('cafe-conversation-visual',{detail:{name:null}}));options=null;dialog.classList.remove('dialogue-mode');document.body.classList.remove('dialogue-open')}
 function advance(){if(!options)return;if(page<pages.length-1){page++;paint();}}
 function paginate(){
  if(!options)return;const paragraph=el('#dialogue-copy'),css=getComputedStyle(paragraph),canvas=document.createElement('canvas'),ctx=canvas.getContext('2d')!;
  ctx.font=`${css.fontWeight} ${css.fontSize} ${css.fontFamily}`;
  const max=Math.min(paragraph.clientWidth,parseFloat(css.fontSize)*26),next:string[][]=[];
  const offset=pages.slice(0,page).flat().join('').length;
  function wrap(text:string){const chars=Array.from(text),lines:string[]=[];while(chars.length){let line='';while(chars.length&&ctx.measureText(line+chars[0]).width<=max-2){line+=chars.shift()}if(!line)line=chars.shift()!;
   if(chars.length&&/[，。！？；：、”’）】]/.test(chars[0])&&line.length>1){const end=Array.from(line).pop()!;line=line.slice(0,-end.length);chars.unshift(end)}lines.push(line)}return lines}
  // Prefer sentence boundaries so a short last page never starts midway through a thought.
  for(const text of options.paragraphs){let pending='';for(const sentence of text.match(/[^。！？]+[。！？]?/gu)||[text]){
   if(wrap(pending+sentence).length<=2){pending+=sentence;continue}if(pending){next.push(wrap(pending));pending=''}
   const lines=wrap(sentence);if(lines.length<=2)pending=sentence;else for(let i=0;i<lines.length;i+=2)next.push(lines.slice(i,i+2));
  }if(pending)next.push(wrap(pending))}
  pages=next.length?next:[['']];let start=0;page=0;for(let i=0;i<pages.length;i++){page=i;const end=start+pages[i].join('').length;if(offset<end)break;start=end}paint();
 }
 function paint(){
  if(!options)return;const copy=el('#dialogue-copy');copy.replaceChildren(...pages[page].map(line=>{const span=document.createElement('span');span.className='dialogue-line';span.textContent=line;return span}));
  const final=page===pages.length-1;el('#dialogue-next').hidden=final;el('#reply').hidden=!final;el('#reply').textContent=options.reply;
  el('#dialogue-page').textContent=final?'':`${page+1} / ${pages.length}`;
  el('#dialogue-next').textContent=listeningResponse(pages[page].join(''),options.name);
 }
 dialog.addEventListener('close',cleanup);
 dialog.addEventListener('keydown',e=>{if(!options)return;if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close();return}if((e.key===' '||e.key==='Enter')&&!(e.target instanceof HTMLButtonElement)){e.preventDefault();advance()}});
 const observer=new ResizeObserver(()=>{if(options)paginate()});
 function show(o:DialogueOptions){
  cleanup();window.dispatchEvent(new CustomEvent('cafe-conversation-visual',{detail:{name:o.name}}));options=o;page=0;committed=false;dialog.classList.add('dialogue-mode');document.body.classList.add('dialogue-open');dialog.setAttribute('aria-label',`与${o.name}交谈`);
  content.innerHTML=`<div class="dialogue-stage"><section class="dialogue-conversation" aria-label="对话"><div class="dialogue-plate">
   <header class="narrative-header"><aside class="dialogue-person"><div class="dialogue-avatar">${o.portraitUrl?`<img class="mona-portrait" src="${o.portraitUrl}" alt="${o.name}的水彩头像">`:`<span class="dialogue-art portrait-art" style="--portrait:${o.portrait}" role="img" aria-label="${o.name}的头像"></span>`}</div></aside><span class="dialogue-name">${o.name}</span><nav class="dialogue-tools" aria-label="对话阅读控制"><button id="dialogue-close" aria-label="关闭对话，回到小店">×</button></nav></header>
   <p id="dialogue-copy" tabindex="0" aria-live="polite" aria-atomic="true"></p><footer><button id="back" aria-label="${o.standalone?'回到庭院':'返回人物手记'}">${o.standalone?'庭院':'手记'}</button><small id="dialogue-page" aria-hidden="true"></small><button id="dialogue-next">我愿意继续倾听。</button><button id="reply" hidden></button></footer>
   </div></section><span id="dialogue-status" class="dialogue-sr" role="status"></span></div>`;
  el('#dialogue-next').onclick=advance;el('#dialogue-copy').onclick=advance;
  el('#reply').onclick=()=>{if(committed||page!==pages.length-1)return;committed=true;const fn=options?.onReply;cleanup();fn?.()};
  el('#back').onclick=()=>{const fn=options?.onBack;cleanup();fn?.()};el('#dialogue-close').onclick=close;
  observer.disconnect();observer.observe(el('#dialogue-copy'));paginate();requestAnimationFrame(()=>el('#dialogue-copy')?.focus({preventScroll:true}));
 }
 return {show,cleanup};
}
