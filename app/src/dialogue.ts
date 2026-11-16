import './dialogue.css';

type DialogueOptions={name:string,portrait:number,chapters:number,paragraphs:string[],reply:string,onReply:()=>void,onBack:()=>void};
// Presentation only: story gates, rewards and persistence remain owned by game.ts.
export function createDialogue(dialog:HTMLDialogElement,content:Element,close:()=>void){
 let options:DialogueOptions|null=null,pages:string[][]=[],page=0,auto=false,timer:number|undefined,committed=false;
 const clearTimer=()=>{if(timer!==undefined)window.clearTimeout(timer);timer=undefined};
 const el=<E extends HTMLElement=HTMLElement>(id:string)=>content.querySelector<E>(id)!;
 function cleanup(){window.dispatchEvent(new CustomEvent('cafe-conversation-visual',{detail:{name:null}}));clearTimer();options=null;auto=false;dialog.classList.remove('dialogue-mode');document.body.classList.remove('dialogue-open')}
 function schedule(){clearTimer();if(!auto||!options||page>=pages.length-1||document.hidden)return;timer=window.setTimeout(()=>advance(),Math.max(3600,pages[page].join('').length*100+1200))}
 function advance(){if(!options)return;if(page<pages.length-1){page++;paint();schedule()}}
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
  pages=next.length?next:[['']];let start=0;page=0;for(let i=0;i<pages.length;i++){page=i;const end=start+pages[i].join('').length;if(offset<end)break;start=end}paint();schedule();
 }
 function paint(){
  if(!options)return;const copy=el('#dialogue-copy');copy.replaceChildren(...pages[page].map(line=>{const span=document.createElement('span');span.className='dialogue-line';span.textContent=line;return span}));
  const final=page===pages.length-1;el('#dialogue-next').hidden=final;el('#reply').hidden=!final;el('#reply').textContent=options.reply;
  el('#dialogue-page').textContent=final?'':`${page+1} / ${pages.length}`;el('#dialogue-skip').toggleAttribute('disabled',final);el('#dialogue-skip').setAttribute('aria-label',final?'已到回应处':'跳过阅读，前往回应');
  el('#dialogue-auto').setAttribute('aria-pressed',String(auto));el('#dialogue-auto').setAttribute('aria-label',auto?'关闭自动翻页':'开启自动翻页');
  el('#dialogue-status').textContent=auto&&final?'自动阅读已到末尾，请亲自回应。':'';
 }
 dialog.addEventListener('close',cleanup);
 dialog.addEventListener('keydown',e=>{if(!options)return;if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close();return}if((e.key===' '||e.key==='Enter')&&!(e.target instanceof HTMLButtonElement)){e.preventDefault();advance()}});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)clearTimer();else schedule()});
 const observer=new ResizeObserver(()=>{if(options)paginate()});
 function show(o:DialogueOptions){
  cleanup();window.dispatchEvent(new CustomEvent('cafe-conversation-visual',{detail:{name:o.name}}));options=o;page=0;committed=false;dialog.classList.add('dialogue-mode');document.body.classList.add('dialogue-open');dialog.setAttribute('aria-label',`与${o.name}交谈`);
  const filled=Math.min(4,o.chapters+1);
  content.innerHTML=`<div class="dialogue-stage">
   <svg class="dialogue-filter" aria-hidden="true"><filter id="dialogue-ink"><feTurbulence type="fractalNoise" baseFrequency=".06" numOctaves="2" seed="8" result="grain"/><feDisplacementMap in="SourceGraphic" in2="grain" scale=".45" xChannelSelector="R" yChannelSelector="G"/></filter><filter id="dialogue-leaf-outline"><feMorphology in="SourceAlpha" operator="erode" radius=".65" result="inner"/><feComposite in="SourceGraphic" in2="inner" operator="out"/></filter></svg>
   <aside class="dialogue-person" aria-label="${o.name}，已收藏 ${o.chapters} 段故事"><div class="dialogue-avatar"><span class="dialogue-art portrait-art" style="--portrait:${o.portrait}" role="img" aria-label="${o.name}的水粉头像"></span><div class="dialogue-vine" aria-hidden="true">${Array.from({length:5},(_,i)=>`<i class="vine-node ${i<filled?'grown':''}" style="--node:${i}">${i<filled?'<span class="painted-leaf"></span>':'<span class="bare-twig"></span>'}</i>`).join('')}</div></div><div class="affinity-leaves" aria-label="相知叶片 ${filled}/4">${Array.from({length:4},(_,i)=>`<span class="painted-leaf ${i<filled?'':'empty'}" style="--tilt:${i%2?4:-4}deg" aria-hidden="true"></span>`).join('')}</div></aside>
   <nav class="dialogue-tools" aria-label="对话阅读控制"><button id="dialogue-skip" class="parchment-tab"><span>跳</span><span>过</span></button><button id="dialogue-auto" class="parchment-tab" aria-pressed="false"><i class="painted-leaf" aria-hidden="true"></i><span>自</span><span>动</span></button></nav>
   <section class="dialogue-conversation" aria-label="对话"><div class="dialogue-name"><i class="jute-loop" aria-hidden="true"></i><i class="brass-nail" aria-hidden="true"></i><span>${o.name}</span></div><div class="dialogue-plate"><i class="fern-sprig fern-start" aria-hidden="true"></i><i class="fern-sprig fern-end" aria-hidden="true"></i><p id="dialogue-copy" tabindex="0" aria-live="polite" aria-atomic="true"></p><footer><small id="dialogue-page" aria-hidden="true"></small><button id="dialogue-next">轻点继续</button><button id="reply" hidden></button></footer></div></section>
   <div class="dialogue-exit"><button id="back">返回人物手记</button><button id="dialogue-close">回到小店</button></div><span id="dialogue-status" class="dialogue-sr" role="status"></span>
  </div>`;
  el('#dialogue-next').onclick=advance;el('#dialogue-copy').onclick=advance;
  el('#dialogue-skip').onclick=()=>{clearTimer();page=pages.length-1;paint()};
  el('#dialogue-auto').onclick=()=>{auto=!auto;paint();schedule()};
  el('#reply').onclick=()=>{if(committed||page!==pages.length-1)return;committed=true;clearTimer();const fn=options?.onReply;cleanup();fn?.()};
  el('#back').onclick=()=>{const fn=options?.onBack;cleanup();fn?.()};el('#dialogue-close').onclick=close;
  observer.disconnect();observer.observe(el('#dialogue-copy'));paginate();requestAnimationFrame(()=>el('#dialogue-copy')?.focus({preventScroll:true}));
 }
 return {show,cleanup};
}
