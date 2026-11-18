import {navigationButton} from './ui-components';
import {createWarehouse} from './warehouse';
import strawberryArt from './assets/ui/strawberry-oat-latte.png';
import grapeArt from './assets/ui/grape-sparkling-americano.png';
import './game.css';
import {createPlayerHud} from './player-hud';
import './mona.css';
import monaPortrait from './assets/portraits/mona-model.png';
import {freshSave,migrateSave,canRead,currentQuest,activeQuests,gateText,personStatus,replyChapter,nextGoal,resolveTarget,startOrder,finishOrder,orderFeedback,sellStoredFood,type MakeDestination,ambienceTip,purchaseDecoration,setDecorationPlaced,names,monaDrink,monaEligible,completeMona,type MonaContext,type SceneVisitId,gardenDrinks,crops,cropNames,gardenEnabled,gardenVisual,canCraft,cropAction,type CropId,type CafeSave,type Target,type Order,type QuestId} from './progression';
export type {CafeSave} from './progression';
import { CafeMusic } from './music';
import { createDialogue } from './dialogue';
import ahePortrait from './assets/portraits/ahe-watercolor.png';
import linPortrait from './assets/portraits/lin-watercolor.png';
import tangPortrait from './assets/portraits/tang-watercolor.png';

const key='glasshouse-stories-v1';
export const recipes=[{id:'pour',name:'今日手冲',price:24,icon:2},{id:'honey',name:'蜂蜜拿铁',price:32,icon:0},{id:'berry',name:'莓果可颂',price:38,icon:12},{id:'tea',name:'薄荷花园茶',price:28,icon:3}];
const characters=[
 {name:'阿禾',job:'咖啡师',portrait:1,story:[['第一杯的温度','我以前总想把每杯咖啡做得一模一样。后来才发现，人每天需要的温度都不同。你愿意替我试试新配方吗？','当然，慢慢试。','honey'],['留一盏灯','这间温室是父亲留下的。他说，下雨的人需要一个能看见天空的地方。我想把这盏灯一直留着。','我会一起照顾这间小店。','tea'],['写在菜单背面','今天有人说，这里的咖啡像回家。那是我收到过最好的评价。下一杯，也请你帮忙。','那就继续开门吧。','']],
 },
 {name:'林伯',job:'常客 · 修船匠',portrait:0,story:[['靠窗的老座位','年轻时我修了很多船，却很少坐船出海。现在最喜欢的旅途，是每天走到这里的这一小段路。','今天也替你留着窗边。',''],['口袋里的种子','我妻子以前喜欢蓝莓。我把她种的那一小盒带来了，也许能做成一道点心，让更多人尝到。','让它成为店里的新点心吧。','berry'],['潮水会回来','那张靠窗的椅子修好了。我在椅背刻了一片小叶子，她一定会喜欢。谢谢你肯听这些旧事。','旧故事，也值得好好收藏。','']]},
 {name:'棠姨',job:'常客 · 花园照料人',portrait:2,story:[['把雨水留下','别急着给植物浇水，先摸摸泥土。照顾人也是一样，先听一听，再决定给他什么。','我想听听你的花园。',''],['春天的信','我把薄荷和蜂蜜一起泡茶，就像春天寄来的一封信。你也试试，把香气留在杯子里。','把这封信写进菜单吧。','tea'],['小小的花园','今天的花开了。院子不需要很大，能容下一把椅子和一个愿意坐下的人，就很好。','给我们的庭院再添一点绿。','']]}
];
const characterTeasers=[
 '天空岛的年轻咖啡师。记得每位客人喜欢的温度，却很少提起自己为什么守着这间温室。',
 '每天来坐靠窗位置的退休修船匠。口袋里总带着一件旧物，像是在等一个合适的时机交出来。',
 '替小店照料庭院的园艺师。她能从泥土里听出天气，也悄悄留着几包没有标签的种子。'
];
const characterCardOrder=[0,2,1];
const decor=[{id:'flowers',name:'庭院花箱',cost:55,icon:3,place:'庭院'},{id:'rug',name:'鼠尾草地毯',cost:75,icon:6,place:'店内'},{id:'lamp',name:'黄铜阅读灯',cost:95,icon:2,place:'店内'},{id:'gramophone',name:'老式唱片机',cost:135,icon:7,place:'店内'},{id:'lantern',name:'玻璃花园灯',cost:110,icon:8,place:'庭院'},{id:'art',name:'植物挂画',cost:85,icon:5,place:'店内'}];
const catalogue=[...recipes,...gardenDrinks,monaDrink];
let storageBlocked=false;
function read():CafeSave{try{const raw=localStorage.getItem(key);return raw?migrateSave(JSON.parse(raw),recipes.map(r=>r.id),decor.map(d=>d.id)):freshSave()}catch{storageBlocked=true;return freshSave()}}
export function initGame(api:{monaContext?:()=>MonaContext,talkTargets:(fn:(n:number)=>void)=>void,decorate:(ids:string[])=>void,brew:(name:string)=>boolean,toast:(s:string,important?:boolean)=>void,lock:(v:boolean)=>void,inside:()=>boolean,raining?:()=>boolean,sunny?:()=>boolean,gardenVisual?:(v:ReturnType<typeof gardenVisual>)=>void}){
 const save=read();let current=0;let pending:Order|null=null;let selected=save.recipes[0]||'pour';let target:Target='auto';let destination:MakeDestination='sell';let panel='';let orderEpoch=0;let returnFocus:HTMLElement|null=null;
 const root=document.createElement('section');root.id='cafe-game';document.getElementById('app')!.append(root);
 root.innerHTML=`<nav class="game-nav" aria-label="小店功能">${navigationButton('people','相遇','people','翻开人物手记')}${navigationButton('menu','菜单','menu','查看菜单与制作餐品')}${navigationButton('warehouse','仓库','warehouse','查看作物、餐品和装饰')}${navigationButton('decor','装扮','decor','布置喜欢的小店')}${navigationButton('garden','花园','garden','查看葡萄与草莓的生长')}</nav><dialog id="game-dialog"><button class="paper-close" aria-label="关闭">×</button><div id="paper-content"></div></dialog><div class="brew-progress" hidden><span class="brew-label">正在为客人准备</span> <b></b><progress max="8" value="0" aria-label="制作进度"></progress><span class="brew-time">正在准备</span></div>`;
 const dialog=root.querySelector('dialog')!,content=root.querySelector('#paper-content')!;const q=(s:string)=>root.querySelector(s) as HTMLElement;
 const item=(i:number)=>`<span class="item-art" style="--col:${i%5};--row:${Math.floor(i/5)}"></span>`;
 const portraitAssets=[linPortrait,ahePortrait,tangPortrait],portraitNames=['林伯','阿禾','棠姨'];
 const portrait=(i:number)=>`<img class="portrait encounter-portrait" src="${portraitAssets[i]}" alt="${portraitNames[i]}的水彩头像" width="83" height="83">`;
 const hud=createPlayerHud(root,characters.map(c=>({name:c.name,url:portraitAssets[c.portrait]})),i=>people(i));
 function persist(){try{if(!storageBlocked)localStorage.setItem(key,JSON.stringify(save))}catch{api.toast('浏览器未允许保存；本次游玩仍可继续。')}hud.update(save);api.decorate(save.placed.filter(id=>save.owned.includes(id)));api.gardenVisual?.(gardenVisual(save));updateGoal()}
 function updateGoal(){
  hud.update(save);
  const garden=q('[data-open="garden"]'),enabled=gardenEnabled(save);
  garden.setAttribute('aria-disabled',String(!enabled));garden.dataset.state=enabled?'default':'locked';
  garden.title=enabled?'查看葡萄与草莓的生长':'读完棠姨第三章后，便能一起照料花园';
  garden.querySelector<HTMLElement>('.nav-lock')!.hidden=enabled;
  const ready=enabled&&Object.values(save.gardenState!.crops).some(c=>c.stage==='ready'||c.stage==='needs-care');
  garden.querySelector<HTMLElement>('.nav-leaf')!.hidden=!ready;
  garden.setAttribute('aria-label',enabled?'花园'+(ready?' · 有作物需要照料或收获':''):'花园 · 尚未解锁');
  q('[data-open="people"]').querySelector<HTMLElement>('.nav-leaf')!.hidden=!characters.some((_,i)=>canRead(save,i));
 }
 function selectNavigation(id:string|null){root.querySelectorAll<HTMLElement>('[data-open]').forEach(b=>{if(b.dataset.open===id)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current')})}
 function selectQuest(id:QuestId){const quest=activeQuests(save).find(q=>q.id===id);if(quest){target=id;selected=quest.recipe;destination='sell'}menu()}

 const conversation=createDialogue(dialog,content,close);
 function open(){if(!dialog.open)returnFocus=document.activeElement instanceof HTMLElement?document.activeElement:null;conversation.cleanup();dialog.classList.remove('people-mode','single-person','warehouse-mode');document.body.classList.add('panel-open');dialog.removeAttribute('aria-label');if(!dialog.open)dialog.showModal();document.querySelector<HTMLDetailsElement>('.scene-tools')?.removeAttribute('open');api.lock(true)}
 function close(){dialog.close();api.lock(false)}
 let backdropDown={x:0,y:0};dialog.addEventListener('pointerdown',e=>{backdropDown={x:e.clientX,y:e.clientY}});
 root.querySelector('.paper-close')!.addEventListener('click',close);dialog.addEventListener('close',()=>{api.lock(false);document.body.classList.remove('panel-open');selectNavigation(null);returnFocus?.focus({preventScroll:true})});dialog.addEventListener('click',e=>{if(e.target===dialog&&Math.hypot((e as MouseEvent).clientX-backdropDown.x,(e as MouseEvent).clientY-backdropDown.y)<7){const b=dialog.getBoundingClientRect();if((e as MouseEvent).clientX<b.left||(e as MouseEvent).clientX>b.right||(e as MouseEvent).clientY<b.top||(e as MouseEvent).clientY>b.bottom)close()}});
 function header(kicker:string,title:string,desc:string){return `<div class="paper-kicker">${kicker}</div><h2>${title}</h2><p class="paper-intro">${desc}</p>`}
 function monaTalk(){
  if(save.monaEvent?.completed){api.toast('莫娜把斗篷搭在臂弯里：今天不赶路，想再听一会儿海风。');return}
  const context=api.monaContext?.();if(!context||pending||!monaEligible(save,context))return;
  open();panel='mona';let finished=false;
  const show=(step:number)=>conversation.show({name:'莫娜',portrait:0,portraitUrl:monaPortrait,standalone:true,chapters:0,
   paragraphs:[step===0?'我顺着咖啡香，走错了一小段路。':'那就用这份香气，交换片刻的歇脚吧。'],
   reply:step===0?'走错的路，也可以坐一会儿。':'谢谢，我会把它写进菜单。',onBack:close,onReply:()=>{
    if(finished||!dialog.open||panel!=='mona')return;
    if(step===0){show(1);return}
    const now=api.monaContext?.();if(!now||!monaEligible(save,{...now,dialogueOpen:false})||pending){close();return}
    finished=true;if(completeMona(save)){persist();close();api.toast('新的香气留在菜单里了 · 已解锁风铃草咖啡 · 30 金币',true)}
   }});
  show(0);
 }
 function people(person?:number){open();dialog.classList.add('people-mode');dialog.classList.toggle('single-person',person!==undefined);dialog.setAttribute('aria-label','天空岛人物手记');panel='people';selectNavigation('people');content.innerHTML=header('PEOPLE OF SKYE ISLAND','天空岛的人们','这里记着与小店相遇的人。更多往事，会随着故事进度慢慢浮现。')+`<section class="character-card-grid" aria-label="主要人物">`+(person===undefined?characterCardOrder:[person]).map(i=>{const c=characters[i],chapters=save.chapters[i],available=canRead(save,i),finished=chapters>=3;return `<article class="character-card" aria-label="${c.name}，${c.job}"><span class="character-portrait-frame"><img class="character-card-portrait" src="${portraitAssets[c.portrait]}" alt="${c.name}的水彩画像"></span><span class="character-card-body"><span class="character-card-meta"><span>MAIN CHARACTER</span><span>相遇 ${chapters} / 3</span></span><strong>${c.name}<small>${c.job}</small></strong><span class="character-teaser">${characterTeasers[i]}</span><span class="story-dots" aria-label="已解锁 ${chapters} 段故事">${'●'.repeat(chapters)}${'○'.repeat(3-chapters)}</span><em>${personStatus(save,i)}${!available&&!finished?'<small>'+gateText(save,i)+'</small>':''}</em></span></article>`}).join('')+`</section><p class="paper-foot character-card-foot">已完成 ${save.served} 单 · 人物手记会随故事进度自动更新</p>`}
 function talk(i:number){current=i;open();const c=characters[i],n=save.chapters[i];
  const collected=n>=3,gated=!collected&&!canRead(save,i);panel=gated?'gate':'talk';
  conversation.show({name:c.name,portrait:i,portraitUrl:portraitAssets[c.portrait],chapters:n,paragraphs:collected?c.story.map(s=>s[1]):[gated?gateText(save,i):c.story[n][1]],reply:collected?'返回相遇手记':gated?'去看看今日菜单':c.story[n][2],onBack:()=>people(),onReply:()=>{
   if(collected){people();return}if(gated){const quest=currentQuest(save,i);if(canRead(save,i))talk(i);else if(quest)selectQuest(quest.id);return}
   const unlocked=c.story[n][3];if(!replyChapter(save,i,n,unlocked))return;persist();api.toast(unlocked?'故事已收藏 · 菜单已更新 · 收到 12 枚心意金币':'故事已收藏 · 收到 12 枚心意金币'+(i===2&&n===2?' · 花园经营已解锁':''),true);people();
  }})}

 function menu(){open();panel='menu';selectNavigation('menu');if(target!=='free')destination='sell';const active=activeQuests(save);if(target!=='auto'&&target!=='free'&&!active.some(q=>q.id===target))target='auto';const resolved=resolveTarget(save,selected,target);content.innerHTML=header('THE DAILY MENU','一杯咖啡，换一段好时光。','选择一道已解锁菜品，为来店的客人制作。默认制作并售出；自由营业也可制作后入库。当前氛围小费 +'+ambienceTip(save)+' 金币 / 单（以送达时摆放为准）。')+`<section class="quest-list" aria-label="人物委托"><strong>人物委托</strong>${active.length?active.map(q=>`<button data-quest="${q.id}" aria-pressed="${resolved.quest?.id===q.id}">${names[q.person]} · ${q.dish}<small>完成后继续下一章故事</small></button>`).join(''):'<p>暂时没有委托，可以自由营业。</p>'}<button data-free aria-pressed="${target==='free'}">自由营业</button></section><p class="quest-destination" role="status">${resolved.ambiguous?'这款商品有多位朋友委托，请选择交付对象，或选择自由营业。':resolved.quest?`本单交付：${names[resolved.quest.person]}${resolved.quest.recipe!==selected?' · 商品不符，仅计普通营业收益':''}`:'本单：自由营业'}</p><div class="recipe-grid">`+recipes.map(r=>!save.recipes.includes(r.id)?`<div class="recipe undiscovered" data-undiscovered="${r.id}"><span class="undiscovered-art" aria-hidden="true">◇</span><strong>尚未发现的味道</strong><small>${({honey:'阿禾 · 第一章',berry:'林伯 · 第二章',tea:'阿禾或棠姨 · 第二章'} as Record<string,string>)[r.id]}</small></div>`:`<button class="recipe ${save.recipes.includes(r.id)?'':'locked'} ${selected===r.id?'chosen':''}" data-recipe="${r.id}" ${save.recipes.includes(r.id)?'':'disabled'}>${item(r.icon)}<strong>${r.name}</strong>${active.filter(q=>q.recipe===r.id).map(q=>`<span class="quest-tag">人物委托 · ${names[q.person]}</span>`).join('')}<small>${save.recipes.includes(r.id)?r.price+' 金币 / 单':({honey:'阿禾 · 第一章',berry:'林伯 · 第二章',tea:'阿禾或棠姨 · 第二章'} as Record<string,string>)[r.id]}</small></button>`).join('')+gardenDrinks.map(r=>!save.gardenRecipes?.includes(r.id)?`<div class="recipe undiscovered" data-undiscovered="${r.id}"><span class="undiscovered-art" aria-hidden="true">◇</span><strong>花园里的一点惊喜</strong><small>${!gardenEnabled(save)?'读完棠姨的故事后探索花园':'首次收获'+cropNames[r.crop]+'后发现'}</small></div>`:`<button class="recipe ${canCraft(save,r.id)?'':'locked'} ${selected===r.id?'chosen':''}" data-recipe="${r.id}" ${canCraft(save,r.id)?'':'disabled'}><img class="recipe-watercolor" src="${r.crop==='strawberry'?strawberryArt:grapeArt}" alt="${r.name}"><strong>${r.name}</strong><small>${r.price} 金币 / 单 · ${cropNames[r.crop]}库存 ${save.ingredients?.[r.crop]||0}</small><small>${!gardenEnabled(save)?'完成棠姨第三章开放花园':!save.gardenRecipes?.includes(r.id)?'首次收获'+cropNames[r.crop]+'后解锁':!canCraft(save,r.id)?'去花园收获'+cropNames[r.crop]+'后可以继续制作。':'每单消耗 1 份'+cropNames[r.crop]}</small></button>`).join('')+(save.monaEvent?.completed?`<button class="recipe ${selected===monaDrink.id?'chosen':''}" data-recipe="${monaDrink.id}">${item(monaDrink.icon)}<strong>${monaDrink.name}</strong><small>${monaDrink.price} 金币 / 单 · 莫娜留下的香气</small></button>`:'')+`</div>${destinationChoice()}<button class="paper-action" id="serve" ${pending||resolved.ambiguous||!canCraft(save,selected)?'disabled':''}>${pending?'正在制作，请稍候':resolved.ambiguous?'请选择委托对象或自由营业':!canCraft(save,selected)?'食材不足，请去花园收获':destination==='store'?'制作后入库':'制作并招待客人'}</button><div class="music-settings"><span>天气环境音 / 馆内轻音乐</span><label>音量 <input id="music-volume" type="range" min="0" max="1" step="0.05" value="${music.volume}"></label><small id="music-note"></small></div><div class="save-tools"><button id="export-save">导出小店存档</button><label>恢复存档<input id="import-save" type="file" accept=".json,application/json"></label><small>在离线版与在线版之间搬家时，可导出再恢复。</small></div>`;
 content.querySelectorAll<HTMLElement>('[data-quest]').forEach(b=>b.onclick=()=>selectQuest(b.dataset.quest as QuestId));content.querySelector<HTMLElement>('[data-free]')!.onclick=()=>{target='free';destination='sell';menu()};
 content.querySelectorAll('[data-recipe]').forEach(b=>b.addEventListener('click',()=>{selected=(b as HTMLElement).dataset.recipe!;menu()}));content.querySelector('#serve')!.addEventListener('click',()=>{if(pending)return;const order=startOrder(save,selected,target,destination);if(!order)return;if(api.brew(catalogue.find(r=>r.id===selected)!.name)){orderEpoch++;pending=order;q('.brew-label').textContent=destination==='store'?'正在为仓库准备':'正在为客人准备';q('.brew-progress').hidden=false;q('.brew-progress b').textContent=catalogue.find(r=>r.id===selected)!.name+(destination==='store'?' · 完成后入库':' · 制作并售出');close()}});
 content.querySelectorAll<HTMLInputElement>('[name=make-destination]').forEach(input=>input.onchange=()=>{destination=input.value as MakeDestination;menu();content.querySelector<HTMLInputElement>(`[name=make-destination][value="${destination}"]`)?.focus()});
 const note=content.querySelector('#music-note')!;note.textContent=music.name+' · '+music.status;
 content.querySelector('#music-volume')!.addEventListener('input',e=>music.setVolume(Number((e.target as HTMLInputElement).value)));
 content.querySelector('#export-save')!.addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([JSON.stringify({format:'glasshouse-v1',save},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='天空岛-小店存档.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)});
 content.querySelector('#import-save')!.addEventListener('change',async e=>{const f=(e.target as HTMLInputElement).files?.[0];if(!f)return;if(pending){api.toast('请等当前订单完成后恢复存档。');return}try{if(f.size>100000)throw Error();const epoch=orderEpoch;const data=JSON.parse(await f.text());if(pending||epoch!==orderEpoch){api.toast('订单状态已改变，请重新选择存档文件。');return}const v=data.save;if(data.format!=='glasshouse-v1')throw Error();const restored=migrateSave(v,recipes.map(r=>r.id),decor.map(d=>d.id));Object.keys(save).forEach(k=>delete (save as unknown as Record<string,unknown>)[k]);Object.assign(save,restored);storageBlocked=false;target='auto';destination='sell';selected=save.recipes[0];persist();api.toast('小店存档已恢复。');menu()}catch{api.toast('这不是有效的小店存档，当前进度保持不变。')}})
 }

 function gardenPanel(){
  if(!gardenEnabled(save)){api.toast('和棠姨读完第三章故事，就能一起照料花园。');return}
  open();panel='garden';selectNavigation('garden');const state=save.gardenState!;const first=!state.seedsIntroduced;state.seedsIntroduced=true;persist();
  content.innerHTML=header('A LITTLE GARDEN','让小店，长出新的味道。',first?'棠姨留下了葡萄和草莓种子。放心播种吧，它们不会枯萎。':'营业时，作物也在慢慢长大。两单后浇水，再招待一位客人便可收获。')+`<div class="garden-grid">`+crops.map(id=>{
   const c=state.crops[id],action=c.stage==='unsown'?'sow':c.stage==='needs-care'?'care':c.stage==='ready'?'harvest':'';
   const label=c.stage==='unsown'?'未播种':c.stage==='sown'?'已播种':c.stage==='needs-care'?'待照料':c.stage==='ready'?'可收获':c.cared?'已照料 · 再营业一单即可成熟':'生长中';
   return `<article class="garden-card" data-crop="${id}">${item(id==='strawberry'?21:6)}<h3>${cropNames[id]}</h3><p class="crop-status" role="status">${label}</p><p>生长 ${c.growth} / 3 · 库存 ${save.ingredients![id]} 份</p><button class="paper-action" data-crop-action="${action}" data-crop-id="${id}" ${action?'':'disabled'}>${action==='sow'?'播种':action==='care'?'浇水照料':action==='harvest'?'收获 3 份':'营业后继续生长'}</button></article>`
  }).join('')+`</div><p class="paper-intro">雪天依然可以照料和收获，积雪只会遮住枝头的果实。食材会随小店存档一起保存。</p><button class="paper-action" id="garden-menu">去菜单营业</button>`;
  content.querySelectorAll<HTMLButtonElement>('[data-crop-action]').forEach(b=>b.onclick=()=>{const id=b.dataset.cropId as CropId,action=b.dataset.cropAction as 'sow'|'care'|'harvest';if(!cropAction(save,id,action))return;persist();gardenPanel();api.toast(action==='harvest'?cropNames[id]+' ×3 已收好 · 花园限定饮品已解锁':action==='care'?'浇水好了，再招待一位客人就会成熟。':'种子已种下，营业时它们也会慢慢长大。',true)});
  content.querySelector<HTMLButtonElement>('#garden-menu')!.onclick=()=>{target='free';destination='sell';menu()};
 }

 function destinationChoice(){
  const drink=gardenDrinks.find(r=>r.id===selected),free=target==='free';
  return `<fieldset class="make-destination"><legend>制作去向</legend><label><input type="radio" name="make-destination" value="sell" ${destination==='sell'?'checked':''} ${pending?'disabled':''}>制作并售出</label><label><input type="radio" name="make-destination" value="store" ${destination==='store'?'checked':''} ${!free||pending?'disabled':''}>制作后入库</label><p>${!free?'选择「自由营业」后可入库；人物委托沿用制作并交付。':destination==='store'?'完成后存入餐品仓库，不发金币、不完成委托，不推进营业单数或作物生长。':'完成后自动售出，照常结算收益并推进已播种作物。'}</p><small>${drink?`本次消耗：${cropNames[drink.crop]} ×1（库存 ${save.ingredients?.[drink.crop]||0}）`:'本次不消耗花园食材'} · 食材在制作完成时扣除一次</small></fieldset>`;
 }
 const stockUI=createWarehouse(content,save,catalogue,decor,{
  crop:id=>id==='strawberry'?item(21):`<span class="stock-grape" aria-hidden="true">${Array.from({length:9},()=>'<i></i>').join('')}</span>`,
  food:r=>gardenDrinks.some(d=>d.id===r.id)?`<img class="recipe-watercolor" src="${r.id==='strawberry-oat-latte'?strawberryArt:grapeArt}" alt="">`:item(r.icon),
  decor:d=>`<span class="decor-art" aria-hidden="true" style="--col:${d.icon%3};--row:${Math.floor(d.icon/3)}"></span>`
 },{
  craft:id=>{selected=id;target='free';destination='sell';menu()},garden:gardenPanel,
  place:(id,placed)=>{if(setDecorationPlaced(save,id,placed)){persist();api.toast(decor.find(d=>d.id===id)!.name+(placed?'已摆放':'已收好'),true)}},
  sell:(id,n,expected)=>{const r=catalogue.find(r=>r.id===id);if(!r)return false;const result=sellStoredFood(save,r,n,expected);if(!result.applied)return false;persist();api.toast(`${r.name} ×${n} 已售出 · 商品收益 +${result.revenue} · 氛围小费 +${result.tip}`,true);return true}
 });
 function warehousePanel(){open();panel='warehouse';selectNavigation('warehouse');dialog.classList.add('warehouse-mode');dialog.setAttribute('aria-label','仓库');stockUI.render()}

 function shop(){open();panel='decor';selectNavigation('decor');content.innerHTML=header('MAKE IT YOUR OWN','把喜欢，添进小店里。',`可用金币 ${save.coins} · 购买后会出现在对应场景，也可以随时收起、重新摆放。当前氛围小费 +${ambienceTip(save)} / 单，常规装饰每件 +1，最多 +6；冬日免费陈设不计入。`)+`<div class="decor-grid">`+decor.map(d=>`<article class="decor-card"><span class="decor-art" style="--col:${d.icon%3};--row:${Math.floor(d.icon/3)}"></span><strong>${d.name}</strong><small>${d.place} · ${d.cost} 金币</small><button data-buy="${d.id}" ${!save.owned.includes(d.id)&&save.coins<d.cost?'disabled':''}>${save.owned.includes(d.id)?save.placed.includes(d.id)?'收起装扮':'摆放到'+d.place:save.coins<d.cost?'金币不足':'购买并摆放'}</button></article>`).join('')+'</div>';content.querySelectorAll('[data-buy]').forEach(b=>b.addEventListener('click',()=>{const d=decor.find(d=>d.id===(b as HTMLElement).dataset.buy)!;if(!save.owned.includes(d.id)){if(!purchaseDecoration(save,d))return;api.toast(d.name+'已添置到'+d.place+' · 氛围小费 +'+ambienceTip(save)+' / 单',true)}else{const placed=!save.placed.includes(d.id);if(!setDecorationPlaced(save,d.id,placed))return;api.toast(d.name+(placed?'已摆放':'已收起')+' · 氛围小费 +'+ambienceTip(save)+' / 单',true)}persist();shop()}))}

 root.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>{({people,menu,decor:shop,warehouse:warehousePanel,garden:gardenPanel}[(b as HTMLElement).dataset.open!]||people)()}));
 const music=new CafeMusic(api.inside,api.raining||(()=>false),()=>{const note=document.getElementById('music-note');if(note)note.textContent=(music.name?music.name+' · ':'')+music.status;window.dispatchEvent(new CustomEvent('cafe-music-change',{detail:music.snapshot()}))},api.sunny||(()=>true));
 function syncMusic(){music.sync()}
 api.talkTargets(talk);persist();if(storageBlocked)api.toast('原存档暂时无法读取，已保留原文件；请从菜单恢复有效存档。');
 return {save,storing:()=>pending?.destination==='store',markSceneVisit(id:SceneVisitId){if(save.sceneVisits?.[id])return;save.sceneVisits={...save.sceneVisits,[id]:true};persist()},talk,people,menu,monaTalk,monaConversation:()=>dialog.open&&panel==='mona',garden:gardenPanel,syncMusic,enterMusic:()=>music.enter(),musicSnapshot:()=>music.snapshot(),tick(remaining:number){const progress=root.querySelector<HTMLProgressElement>('.brew-progress progress')!;progress.value=8-remaining;q('.brew-time').textContent=remaining>4?'正在研磨与准备 · '+Math.ceil(remaining)+' 秒':remaining>1?'慢慢冲煮 · '+Math.ceil(remaining)+' 秒':pending?.destination==='store'?'准备收进仓库':'准备送到客人桌边'},toggleMusic(){return music.toggle()},complete(){if(!pending)return;const order=pending;pending=null;const r=catalogue.find(r=>r.id===order.recipe)!;const result=finishOrder(save,order,r.price);q('.brew-progress').hidden=true;if(!result.applied)return;persist();if(dialog.open){if(panel==='menu')menu();else if(panel==='people')people();else if(panel==='gate')people(current);else if(panel==='garden')gardenPanel();else if(panel==='warehouse')warehousePanel()}api.toast(orderFeedback(r.name,result),true)} };
}
