// Serializable gameplay rules; rendering stays outside this module.
export type QuestId='ahe-1'|'ahe-2'|'lin-1'|'lin-2'|'tang-1'|'tang-2';
export type QuestState={version:1;entries:Partial<Record<QuestId,{status:'active'|'completed';completion?:'order'|'legacy'}>>;legacyGateCredits:QuestId[]};
export const sceneVisitIds=['courtyard','interior','interior-seat','garden-close','island','beach-seat'] as const;
export type SceneVisitId=typeof sceneVisitIds[number];
export function sceneVisitDefaults(raw:unknown):Partial<Record<SceneVisitId,true>>{
 const seen:Partial<Record<SceneVisitId,true>>={};
 if(raw&&typeof raw==='object'&&!Array.isArray(raw))for(const id of sceneVisitIds)if((raw as Record<string,unknown>)[id]===true)seen[id]=true;
 return seen;
}
export type CafeSave={coins:number;earned:number;chapters:number[];recipes:string[];owned:string[];placed:string[];served:number;characterQuests?:QuestState;gardenUnlocked?:boolean;gardenState?:GardenState;ingredients?:Record<CropId,number>;gardenRecipes?:string[];monaEvent?:{version:1;completed:boolean};sceneVisits?:Partial<Record<SceneVisitId,true>>;foodStock?:Record<string,number>};
export type CropId='grape'|'strawberry';
export type CropState={stage:'unsown'|'sown'|'growing'|'needs-care'|'ready';growth:number;cared:boolean;everHarvested:boolean};
export type GardenState={seedsIntroduced:boolean;crops:Record<CropId,CropState>};
export const crops:readonly CropId[]=['grape','strawberry'];
export const cropNames:Record<CropId,string>={grape:'葡萄',strawberry:'草莓'};
export const gardenDrinks=[
 {id:'strawberry-oat-latte',name:'草莓燕麦拿铁',price:42,icon:0,crop:'strawberry' as CropId},
 {id:'grape-sparkling-americano',name:'葡萄气泡美式',price:46,icon:2,crop:'grape' as CropId}
];
const emptyCrop=():CropState=>({stage:'unsown',growth:0,cared:false,everHarvested:false});
const emptyGarden=():GardenState=>({seedsIntroduced:false,crops:{grape:emptyCrop(),strawberry:emptyCrop()}});
export function gardenEnabled(s:CafeSave){return s.chapters[2]>=3&&s.gardenUnlocked===true}
export function gardenVisual(s:CafeSave){return {cultivationEnabled:gardenEnabled(s),grapeRipe:s.gardenState?.crops.grape.stage==='ready',strawberryRipe:s.gardenState?.crops.strawberry.stage==='ready'}}
export const monaDrink={id:'bellflower-coffee',name:'风铃草咖啡',price:30,icon:2};
export type MonaContext={outside:boolean;dusk:boolean;brewing:boolean;dialogueOpen:boolean};
export function monaEligible(s:CafeSave,c:MonaContext){return s.served>=6&&s.monaEvent?.completed!==true&&c.outside&&c.dusk&&!c.brewing&&!c.dialogueOpen}
export function completeMona(s:CafeSave){if(s.served<6||s.monaEvent?.completed===true)return false;s.monaEvent={version:1,completed:true};return true}
export function canCraft(s:CafeSave,id:string){if(id===monaDrink.id)return s.monaEvent?.completed===true;const drink=gardenDrinks.find(r=>r.id===id);return drink?gardenEnabled(s)&&!!s.gardenRecipes?.includes(id)&&natural(s.ingredients?.[drink.crop])&&s.ingredients![drink.crop]>0:s.recipes.includes(id)}
export function cropAction(s:CafeSave,id:CropId,action:'sow'|'care'|'harvest'){
 if(!gardenEnabled(s)||!crops.includes(id)||!s.gardenState||!s.ingredients||!s.gardenRecipes)return false;
 const c=s.gardenState.crops[id];
 if(action==='sow'&&c.stage==='unsown'){c.stage='sown';c.growth=0;c.cared=false;return true}
 if(action==='care'&&c.stage==='needs-care'){c.stage='growing';c.cared=true;return true}
 if(action==='harvest'&&c.stage==='ready'){
  if(!natural(s.ingredients[id])||s.ingredients[id]>Number.MAX_SAFE_INTEGER-3)return false;
  s.ingredients[id]+=3;const recipe=gardenDrinks.find(r=>r.crop===id)!.id;
  if(!s.gardenRecipes.includes(recipe))s.gardenRecipes.push(recipe);
  s.gardenState.crops[id]={...emptyCrop(),everHarvested:true};return true;
 }
 return false;
}
function growGarden(s:CafeSave){
 if(!gardenEnabled(s)||!s.gardenState)return;
 for(const id of crops){const c=s.gardenState.crops[id];
  if(c.stage==='sown'){c.stage='growing';c.growth=1}
  else if(c.stage==='growing'){if(c.cared){c.stage='ready';c.growth=3}else{c.stage='needs-care';c.growth=2}}
 }
}
function normalizeGarden(raw:Record<string,unknown>){
 const gardenState=emptyGarden(),ingredients:Record<CropId,number>={grape:0,strawberry:0};
 const prior=object(raw.gardenState)?raw.gardenState:{};const records=object(prior.crops)?prior.crops:{};
 gardenState.seedsIntroduced=prior.seedsIntroduced===true;
 const stock=object(raw.ingredients)?raw.ingredients:{};
 const gardenRecipes=Array.isArray(raw.gardenRecipes)?[...new Set(raw.gardenRecipes.filter((id):id is string=>typeof id==='string'&&gardenDrinks.some(r=>r.id===id)))]:[];
 for(const id of crops){
  const candidate=records[id];const c=object(candidate)?candidate:{};
  const valid=(c.stage==='unsown'||c.stage==='sown')&&c.growth===0&&c.cared===false||c.stage==='growing'&&(c.growth===1&&c.cared===false||c.growth===2&&c.cared===true)||c.stage==='needs-care'&&c.growth===2&&c.cared===false||c.stage==='ready'&&c.growth===3&&c.cared===true;
  gardenState.crops[id]=valid?{stage:c.stage as CropState['stage'],growth:c.growth as number,cared:c.cared as boolean,everHarvested:c.everHarvested===true}:{...emptyCrop(),everHarvested:c.everHarvested===true};
  const n=stock[id];ingredients[id]=natural(n)?n:0;
  const recipe=gardenDrinks.find(r=>r.crop===id)!.id;if(c.everHarvested===true&&!gardenRecipes.includes(recipe))gardenRecipes.push(recipe);
 }
 return {gardenUnlocked:(raw.chapters as number[])[2]>=3,gardenState,ingredients,gardenRecipes};
}
export const names=['阿禾','林伯','棠姨'] as const;
export const quests:ReadonlyArray<{id:QuestId;person:number;chapter:number;recipe:string;dish:string}>=[
 {id:'ahe-1',person:0,chapter:1,recipe:'honey',dish:'蜂蜜拿铁'},
 {id:'ahe-2',person:0,chapter:2,recipe:'tea',dish:'薄荷花园茶'},
 {id:'lin-1',person:1,chapter:1,recipe:'pour',dish:'今日手冲'},
 {id:'lin-2',person:1,chapter:2,recipe:'berry',dish:'莓果可颂'},
 {id:'tang-1',person:2,chapter:1,recipe:'pour',dish:'今日手冲'},
 {id:'tang-2',person:2,chapter:2,recipe:'tea',dish:'薄荷花园茶'}
];
const object=(v:unknown):v is Record<string,unknown>=>!!v&&typeof v==='object'&&!Array.isArray(v);
const natural=(n:unknown):n is number=>Number.isSafeInteger(n)&&Number(n)>=0;
export const regularDecorIds=['flowers','rug','lamp','gramophone','lantern','art'] as const;
export function ambienceTip(s:CafeSave){return Math.min(6,regularDecorIds.filter(id=>s.owned.includes(id)&&s.placed.includes(id)).length)}
export function purchaseDecoration(s:CafeSave,item:{id:string;cost:number}){
 if(!regularDecorIds.some(id=>id===item.id)||!natural(item.cost)||item.cost===0||!natural(s.coins)||s.coins<item.cost||s.owned.includes(item.id))return false;
 s.coins-=item.cost;s.owned.push(item.id);if(!s.placed.includes(item.id))s.placed.push(item.id);return true;
}
export function setDecorationPlaced(s:CafeSave,id:string,placed:boolean){
 if(!regularDecorIds.some(d=>d===id)||!s.owned.includes(id))return false;
 if(placed){if(!s.placed.includes(id))s.placed.push(id)}else s.placed=s.placed.filter(d=>d!==id);
 return true;
}
export function freshSave():CafeSave{return {coins:0,earned:0,chapters:[0,0,0],recipes:['pour'],owned:[],placed:[],served:0,characterQuests:{version:1,entries:{},legacyGateCredits:[]},gardenUnlocked:false,gardenState:emptyGarden(),ingredients:{grape:0,strawberry:0},gardenRecipes:[],monaEvent:{version:1,completed:false},sceneVisits:{},foodStock:{}}}
export function migrateSave(raw:unknown,recipeIds:readonly string[],decorIds:readonly string[]):CafeSave{
 if(!object(raw)||!natural(raw.coins)||!natural(raw.earned)||!natural(raw.served)||!Array.isArray(raw.chapters)||raw.chapters.length!==3||!raw.chapters.every(n=>natural(n)&&n<=3))throw Error('Invalid save');
 const list=(v:unknown,ids:readonly string[]):v is string[]=>Array.isArray(v)&&v.every(id=>typeof id==='string'&&ids.includes(id));
 if(!list(raw.recipes,recipeIds)||!raw.recipes.includes('pour')||!list(raw.owned,decorIds)||!list(raw.placed,raw.owned))throw Error('Invalid catalogue');
 const old=raw.characterQuests===undefined;const data=object(raw.characterQuests)?raw.characterQuests:{};
 if(data.version!==undefined&&data.version!==1)throw Error('Unsupported quest version');
 const entries:QuestState['entries']={},credits:QuestId[]=[];
 const prior=object(data.entries)?data.entries:{};
 for(const q of quests){
  const c=raw.chapters[q.person];const candidate=prior[q.id];const item:Record<string,unknown>=object(candidate)?candidate:{};
  const credit=(old&&raw.served>=q.chapter)||(Array.isArray(data.legacyGateCredits)&&data.legacyGateCredits.includes(q.id));
  if(credit)credits.push(q.id);
  if(c>=q.chapter){
   if(item.status==='completed')entries[q.id]={status:'completed',completion:item.completion==='order'?'order':'legacy'};
   else if(c>q.chapter||credit)entries[q.id]={status:'completed',completion:'legacy'};
   else entries[q.id]={status:'active'};
  }
 }
 // Preserve valid core values/array order and unrelated extension data; never reissue rewards.
 return {...raw,...normalizeGarden(raw),sceneVisits:sceneVisitDefaults(raw.sceneVisits),foodStock:normalizeFoodStock(raw.foodStock),monaEvent:{version:1,completed:object(raw.monaEvent)&&raw.monaEvent.version===1&&raw.monaEvent.completed===true},chapters:[...raw.chapters],recipes:[...raw.recipes],owned:[...raw.owned],placed:[...raw.placed],characterQuests:{version:1,entries,legacyGateCredits:credits}} as CafeSave;
}
export function currentQuest(s:CafeSave,person:number){return quests.find(q=>q.person===person&&q.chapter===s.chapters[person])}
export function canRead(s:CafeSave,person:number){const n=s.chapters[person];if(n===0)return true;if(n===undefined||n>=3)return false;const q=currentQuest(s,person);return !!q&&s.characterQuests?.entries[q.id]?.status==='completed'}
export function activeQuests(s:CafeSave){return quests.filter(q=>s.chapters[q.person]===q.chapter&&s.characterQuests?.entries[q.id]?.status==='active')}
export function gateText(s:CafeSave,person:number){const q=currentQuest(s,person);return q?`为${names[person]}完成一份${q.dish}后继续`:''}
export function personStatus(s:CafeSave,person:number){return s.chapters[person]>=3?'故事已收藏':canRead(s,person)?s.chapters[person]===0?'有新故事':'委托已完成，可继续故事':'委托进行中'}
export function replyChapter(s:CafeSave,person:number,expected:number,unlock:string){
 if(s.chapters[person]!==expected||!canRead(s,person)||!natural(s.coins)||!natural(s.earned)||s.coins>Number.MAX_SAFE_INTEGER-12||s.earned>Number.MAX_SAFE_INTEGER-12)return false;
 s.chapters[person]++;if(s.chapters[2]>=3)s.gardenUnlocked=true;s.coins+=12;s.earned+=12;if(unlock&&!s.recipes.includes(unlock))s.recipes.push(unlock);
 const q=currentQuest(s,person);if(q){const state=s.characterQuests!;state.entries[q.id]=state.legacyGateCredits.includes(q.id)?{status:'completed',completion:'legacy'}:{status:'active'}}return true;
}
export type Target=QuestId|'auto'|'free';
export function resolveTarget(s:CafeSave,recipe:string,target:Target){
 const active=activeQuests(s);if(target==='free')return {quest:undefined,ambiguous:false};
 if(target!=='auto'){const q=active.find(q=>q.id===target);if(q)return {quest:q,ambiguous:false}}
 const matching=active.filter(q=>q.recipe===recipe);return {quest:matching.length===1?matching[0]:undefined,ambiguous:matching.length>1};
}
export type MakeDestination='sell'|'store';
export type Order={recipe:string;target?:QuestId;committed:boolean;destination?:MakeDestination};
export const foodIds=['pour','honey','berry','tea',...gardenDrinks.map(r=>r.id),monaDrink.id];
export function normalizeFoodStock(raw:unknown):Record<string,number>{
 const result:Record<string,number>={};if(object(raw))for(const id of foodIds)if(natural(raw[id])&&raw[id]>0)result[id]=raw[id];return result;
}
export function sellStoredFood(s:CafeSave,item:{id:string;price:number},quantity:number,expectedStock:number){
 const count=s.foodStock?.[item.id],tip=ambienceTip(s),revenue=item.price*quantity,tips=tip*quantity,total=revenue+tips;
 if(!foodIds.includes(item.id)||!natural(count)||count!==expectedStock||!natural(quantity)||quantity<1||quantity>count||!natural(item.price)||item.price===0||!natural(total)||!natural(revenue)||!natural(tips)||!natural(s.coins)||!natural(s.earned)||s.coins>Number.MAX_SAFE_INTEGER-total||s.earned>Number.MAX_SAFE_INTEGER-total)return {applied:false};
 s.foodStock![item.id]=count-quantity;if(!s.foodStock![item.id])delete s.foodStock![item.id];s.coins+=total;s.earned+=total;
 return {applied:true,revenue,tip:tips,total};
}
export function startOrder(s:CafeSave,recipe:string,target:Target,destination:MakeDestination='sell'):Order|null{
 if(destination!=='sell'&&destination!=='store'||destination==='store'&&target!=='free')return null;
 if(!canCraft(s,recipe))return null;const resolved=resolveTarget(s,recipe,target);if(resolved.ambiguous)return null;
 return {recipe,target:resolved.quest?.id,committed:false,destination};
}
export function finishOrder(s:CafeSave,order:Order,price:number){
 if(order.destination==='store'){
  const count=s.foodStock?.[order.recipe]??0;
  if(order.committed||order.target||!foodIds.includes(order.recipe)||!natural(count)||count===Number.MAX_SAFE_INTEGER||!canCraft(s,order.recipe))return {applied:false};
  order.committed=true;const drink=gardenDrinks.find(r=>r.id===order.recipe);if(drink)s.ingredients![drink.crop]--;
  s.foodStock??={};s.foodStock[order.recipe]=count+1;return {applied:true,stored:true};
 }
 const tip=ambienceTip(s),total=price+tip;
 // Validate the whole transaction before inventory, crops or quest state can change.
 if(order.committed||!natural(price)||!natural(total)||!natural(s.coins)||!natural(s.earned)||!natural(s.served)||s.coins>Number.MAX_SAFE_INTEGER-total||s.earned>Number.MAX_SAFE_INTEGER-total||s.served===Number.MAX_SAFE_INTEGER||!canCraft(s,order.recipe))return {applied:false};
 const q=activeQuests(s).find(q=>q.id===order.target&&q.recipe===order.recipe);
 const before=crops.map(id=>s.gardenState?.crops[id].stage);
 order.committed=true;const drink=gardenDrinks.find(r=>r.id===order.recipe);if(drink)s.ingredients![drink.crop]--;growGarden(s);s.coins+=total;s.earned+=total;s.served++;
 if(q)s.characterQuests!.entries[q.id]={status:'completed',completion:'order'};
 const gardenUpdates=gardenEnabled(s)?crops.flatMap((id,i)=>{const stage=s.gardenState?.crops[id].stage;return stage!==before[i]&&(stage==='ready'||stage==='needs-care')?[cropNames[id]+(stage==='ready'?'可以收获了':'需要浇水照料')]:[]}):[];
 return {applied:true,quest:q,revenue:price,tip,total,gardenUpdates};
}
export function orderFeedback(name:string,result:ReturnType<typeof finishOrder>){
 if(!result.applied)return '';
 if(result.stored)return `${name} ×1 已收好 · 可在仓库出售`;
 return [`${name}已送达 · 商品收益 +${result.revenue} · 氛围小费 +${result.tip}`,result.quest?`${names[result.quest.person]}的委托已完成 · 新的故事可以继续了`:'',result.gardenUpdates?.join(' · ')].filter(Boolean).join('\n');
}
// One shared crop priority for the journal, scene guidance and next goal.
export function gardenActivity(s:CafeSave){
 if(!gardenEnabled(s)||!s.gardenState)return null;
 const id=crops.find(id=>s.gardenState!.crops[id].stage==='ready')||crops.find(id=>s.gardenState!.crops[id].stage==='needs-care')||crops.find(id=>s.gardenState!.crops[id].stage==='unsown')||crops[0];
 const crop=s.gardenState.crops[id];
 const label=crop.stage==='ready'?'花园果实成熟了，去收获吧':crop.stage==='needs-care'?'回花园，为作物浇水照料':crop.stage==='unsown'?'在花园播下葡萄和草莓':'继续营业，让花园慢慢长大';
 return {id,crop,label,action:crop.stage==='ready'||crop.stage==='needs-care'||crop.stage==='unsown'?'garden' as const:'menu' as const};
}
export function nextGoal(s:CafeSave):{label:string;action:'story'|'quest'|'decor'|'menu'|'garden';person?:number;quest?:QuestId}{
 const i=s.chapters.findIndex((_,i)=>canRead(s,i));if(i>=0)return {label:`和${names[i]}聊聊，继续第${s.chapters[i]+1}章故事`,action:'story',person:i};
 const q=activeQuests(s)[0];if(q)return {label:`为${names[q.person]}制作一份${q.dish}`,action:'quest',quest:q.id};
 if(!regularDecorIds.some(id=>s.owned.includes(id)))return s.coins>=55?{label:'添置花箱，让每单多一枚氛围小费',action:'decor'}:{label:`自由营业，还差 ${Math.max(0,55-s.coins)} 金币就能添置花箱`,action:'menu'};
 if(s.chapters[2]<3)return {label:'和棠姨聊聊，继续花园的故事',action:'story',person:2};
 const garden= gardenActivity(s);if(garden)return {label:garden.label,action:garden.action};
 return {label:'故事已收藏，继续经营你的小店',action:'menu'};
}
