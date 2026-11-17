import {nextGoal,canRead,gardenActivity,cropNames,gardenEnabled,regularDecorIds,type CafeSave} from './progression';
// Read-only presentation derived from the one existing save and goal selector.
export function goalPresentation(s:CafeSave){
 const goal=nextGoal(s);
 if(goal.action==='story')return {goal,label:goal.label,stage:`故事 ${s.chapters[goal.person!]} / 3`,value:s.chapters[goal.person!],max:3};
 if(goal.action==='quest')return {goal,label:goal.label,stage:'委托待完成',value:null,max:1};
 if(goal.action==='decor'||!regularDecorIds.some(id=>s.owned.includes(id)))return {goal,label:goal.label,stage:'添置第一件装饰',value:null,max:1};
 if(gardenEnabled(s)&&s.gardenState){
  const {id,crop:c}=gardenActivity(s)!;
  return {goal,label:goal.label,stage:`${cropNames[id]} · ${c.stage==='ready'?'可以收获':c.stage==='needs-care'?'等待照料':c.stage==='unsown'?'等待播种':`生长 ${c.growth} / 3`}`,value:c.stage==='growing'||c.stage==='sown'?c.growth:null,max:3};
 }
 return {goal,label:'暂时歇一会儿',stage:'自由经营',value:null,max:1};
}
export function createPlayerHud(root:HTMLElement,portraits:{name:string,url:string}[],card:(i:number)=>void){
 const aside=document.createElement('aside');aside.className='shop-journal';aside.setAttribute('aria-label','小店日签');
 aside.innerHTML=`<div class="journal-balance"><span class="coin-art" aria-hidden="true"></span><div><small>可用金币</small><strong id="coins" aria-live="polite">0</strong></div><span class="coin-delta" aria-hidden="true"></span></div><div class="living-clock"><time></time><small>生活时钟 · 本地时间</small></div><div id="next-step" aria-label="下一件小事"><span class="goal-title"></span><small class="goal-stage"></small><progress hidden aria-label="当前目标进度"></progress></div>`;
 const nav=document.createElement('nav');nav.className='encounter-rail';nav.setAttribute('aria-label','相遇人物');
 portraits.forEach((p,i)=>{const b=document.createElement('button');b.dataset.character=String(i);b.innerHTML=`<span class="avatar-crop"><img src="${p.url}" alt="${p.name}的水彩头像"><i class="story-leaf" aria-hidden="true" hidden></i></span><span>${p.name}</span>`;b.onclick=()=>card(i);nav.append(b)});
 root.prepend(aside,nav);
 let balance:number|undefined,deltaTimer:number|undefined;
 function clock(){const d=new Date(),time=aside.querySelector('time')!;time.dateTime=d.toISOString();time.textContent=`${d.getMonth()+1}月${d.getDate()}日 · 周${'日一二三四五六'[d.getDay()]} / ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;window.setTimeout(clock,60000-Date.now()%60000)}clock();
 document.addEventListener('visibilitychange',()=>{if(!document.hidden){const d=new Date();aside.querySelector('time')!.textContent=`${d.getMonth()+1}月${d.getDate()}日 · 周${'日一二三四五六'[d.getDay()]} / ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`}});
 return {update(s:CafeSave){
  aside.querySelector('#coins')!.textContent=String(s.coins);
  if(balance!==undefined&&s.coins>balance){const delta=aside.querySelector<HTMLElement>('.coin-delta')!;delta.textContent='+'+(s.coins-balance);delta.classList.remove('show');void delta.offsetWidth;delta.classList.add('show');clearTimeout(deltaTimer);deltaTimer=window.setTimeout(()=>delta.classList.remove('show'),1800)}balance=s.coins;
  const g=goalPresentation(s),button=aside.querySelector<HTMLElement>('#next-step')!,progress=button.querySelector('progress')!;
  button.querySelector('.goal-title')!.textContent=g.label;button.querySelector('.goal-stage')!.textContent=g.stage;button.setAttribute('aria-label',`下一件小事：${g.label}，${g.stage}`);progress.hidden=g.value===null;if(g.value!==null){progress.max=g.max;progress.value=g.value;progress.setAttribute('aria-label',g.stage)}
  nav.querySelectorAll<HTMLButtonElement>('button').forEach((b,i)=>{const available=canRead(s,i);b.querySelector<HTMLElement>('.story-leaf')!.hidden=!available;b.setAttribute('aria-label',`${portraits[i].name} · 人物手记${available?' · 有新故事（在场景中与 TA 交谈）':''}`);b.title=available?'有新故事 · 在场景中与 TA 交谈':'查看人物手记'});
 }};
}
