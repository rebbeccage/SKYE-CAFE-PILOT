import {watercolorIcon,avatarBadge,taskProgress} from './ui-components';
import {nextGoal,names,quests,canRead,gardenActivity,cropNames,gardenEnabled,regularDecorIds,type CafeSave} from './progression';
// Read-only presentation derived from the one existing save and goal selector.
export function goalPresentation(s:CafeSave){
 const goal=nextGoal(s);
 if(goal.action==='story')return {goal,label:`${['店内吧台','座位旁','花园草径'][goal.person!]}点击${names[goal.person!]}，继续第${s.chapters[goal.person!]+1}章故事`,stage:`故事 ${s.chapters[goal.person!]} / 3`,value:s.chapters[goal.person!],max:3};
 if(goal.action==='quest')return {goal,label:`菜单里选${names[quests.find(q=>q.id===goal.quest)!.person]}的委托，制作${quests.find(q=>q.id===goal.quest)!.dish}`, stage:'委托待完成',value:null,max:1};
 if(goal.action==='decor'||!regularDecorIds.some(id=>s.owned.includes(id)))return {goal,label:goal.action==='decor'?'打开装扮，购买并摆放花箱，增加小费':'打开菜单自由营业，赚金币添置花箱',stage:'添置第一件装饰',value:null,max:1};
 if(gardenEnabled(s)&&s.gardenState){
  const {id,crop:c}=gardenActivity(s)!;
  return {goal,label:c.stage==='ready'?`点击花园${cropNames[id]}植株，收获食材入库`:c.stage==='needs-care'?`点击花园${cropNames[id]}植株浇水，继续生长`:c.stage==='unsown'?`点击花园${cropNames[id]}植株播种，培育食材`:goal.label,stage:`${cropNames[id]} · ${c.stage==='ready'?'可以收获':c.stage==='needs-care'?'等待照料':c.stage==='unsown'?'等待播种':`生长 ${c.growth} / 3`}`,value:c.stage==='growing'||c.stage==='sown'?c.growth:null,max:3};
 }
 return {goal,label:'暂时歇一会儿',stage:'自由经营',value:null,max:1};
}
export function createPlayerHud(root:HTMLElement,portraits:{name:string,url:string}[],card:(i:number)=>void){
 const aside=document.createElement('aside');aside.className='shop-journal paper-panel';aside.setAttribute('aria-label','小店日签');
 aside.innerHTML=`<div class="journal-balance">${watercolorIcon('coin','coin-art')}<div><small>可用金币</small><strong id="coins" aria-live="polite">0</strong></div><span class="coin-delta" aria-hidden="true"></span></div><div class="living-clock"><time></time><small>生活时钟 · 本地时间</small></div><button class="journal-toggle" aria-expanded="false" aria-controls="next-step" aria-label="展开任务详情" title="展开任务详情">⌄</button><div id="next-step" aria-label="下一件小事"><span class="goal-title"></span><small class="goal-stage"></small>${taskProgress()}</div>`;
 const nav=document.createElement('nav');nav.className='encounter-rail';nav.setAttribute('aria-label','相遇人物');
 portraits.forEach((p,i)=>{const b=document.createElement('button');b.dataset.character=String(i);b.innerHTML=avatarBadge(p.name,p.url);b.className='avatar-control';b.setAttribute('aria-haspopup','dialog');b.onclick=()=>card(i);nav.append(b)});
 root.prepend(aside,nav);
 const alignPortraits=()=>root.style.setProperty('--journal-end',`${aside.offsetTop+aside.offsetHeight}px`);
 new ResizeObserver(alignPortraits).observe(aside);window.addEventListener('resize',alignPortraits);alignPortraits();
 const disclosure=aside.querySelector<HTMLButtonElement>('.journal-toggle')!;
 disclosure.onclick=()=>{const expanded=disclosure.getAttribute('aria-expanded')!=='true';disclosure.setAttribute('aria-expanded',String(expanded));disclosure.setAttribute('aria-label',expanded?'收起任务详情':'展开任务详情');aside.classList.toggle('is-expanded',expanded)};
 disclosure.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();disclosure.setAttribute('aria-expanded','false');disclosure.setAttribute('aria-label','展开任务详情');aside.classList.remove('is-expanded')}});
 // Minute updates use one timer, including when a background tab is restored.
 let clockTimer:number|undefined;

 let balance:number|undefined,deltaTimer:number|undefined;
 function clock(){clearTimeout(clockTimer);const d=new Date(),time=aside.querySelector('time')!;time.dateTime=d.toISOString();time.dataset.short=`${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;time.textContent=`${d.getMonth()+1}月${d.getDate()}日 · 周${'日一二三四五六'[d.getDay()]} / ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;clockTimer=window.setTimeout(clock,60000-Date.now()%60000)}clock();
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)clock()});
 window.addEventListener('pagehide',()=>{clearTimeout(clockTimer);clearTimeout(deltaTimer)});
 window.addEventListener('pageshow',e=>{if(e.persisted)clock()});
 return {update(s:CafeSave){
  aside.querySelector('#coins')!.textContent=String(s.coins);
  if(balance!==undefined&&s.coins>balance){const delta=aside.querySelector<HTMLElement>('.coin-delta')!;delta.textContent='+'+(s.coins-balance);delta.classList.remove('show');void delta.offsetWidth;delta.classList.add('show');clearTimeout(deltaTimer);deltaTimer=window.setTimeout(()=>delta.classList.remove('show'),1800)}balance=s.coins;
  const g=goalPresentation(s),button=aside.querySelector<HTMLElement>('#next-step')!,progress=button.querySelector('progress')!;
  button.querySelector('.goal-title')!.textContent=g.label;button.querySelector('.goal-stage')!.textContent=g.stage;button.setAttribute('aria-label',`下一件小事：${g.label}，${g.stage}`);progress.hidden=g.value===null;button.querySelector<HTMLElement>('.goal-meter')!.hidden=g.value===null;if(g.value!==null){progress.max=g.max;progress.value=g.value;progress.setAttribute('aria-label',g.stage)}
  nav.querySelectorAll<HTMLButtonElement>('button').forEach((b,i)=>{const available=canRead(s,i);b.querySelector<HTMLElement>('.story-leaf')!.hidden=!available;b.setAttribute('aria-label',`${portraits[i].name} · 人物手记${available?' · 有新故事（在场景中与 TA 交谈）':''}`);b.title=available?'有新故事 · 在场景中与 TA 交谈':'查看人物手记'});
 }};
}
