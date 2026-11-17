import {crops,cropNames,gardenDrinks,gardenEnabled,ambienceTip,type CafeSave,type CropId} from './progression';
import './warehouse.css';
type Recipe={id:string;name:string;price:number;icon:number};
type Decoration={id:string;name:string;place:string;icon:number};
type Tab='crops'|'food'|'decor';
type Card={id:string;name:string;count:number;note:string;art:string};
export function createWarehouse(host:Element,save:CafeSave,recipes:Recipe[],decor:Decoration[],art:{crop:(id:CropId)=>string;food:(r:Recipe)=>string;decor:(d:Decoration)=>string},actions:{craft:(id:string)=>void;garden:()=>void;place:(id:string,placed:boolean)=>void;sell:(id:string,n:number,expected:number)=>boolean}){
 let tab:Tab='crops',selected='',lastSale=-Infinity;
 try{const prior=localStorage.getItem('skye-warehouse-tab');if(prior==='crops'||prior==='food'||prior==='decor')tab=prior}catch{/* A blocked preference store must not block inventory. */}
 const labels={crops:'作物',food:'餐品',decor:'装饰'},empty={crops:'花园的收获，会收在这里。',food:'为小店留一份刚做好的美味。',decor:'慢慢收集，让小店长成喜欢的模样。'};
 function cards():Record<Tab,Card[]>{return {
  crops:crops.filter(id=>(save.ingredients?.[id]||0)>0||save.gardenState?.crops[id].everHarvested||save.gardenRecipes?.includes(gardenDrinks.find(r=>r.crop===id)!.id)).map(id=>({id,name:cropNames[id],count:save.ingredients?.[id]||0,note:'用于制作'+gardenDrinks.find(r=>r.crop===id)!.name,art:art.crop(id)})),
  food:recipes.filter(r=>(save.foodStock?.[r.id]||0)>0).map(r=>({id:r.id,name:r.name,count:save.foodStock![r.id],note:`单份售价 ${r.price} 金币`,art:art.food(r)})),
  decor:decor.filter(d=>save.owned.includes(d.id)).map(d=>({id:d.id,name:d.name,count:1,note:`${d.place} · ${save.placed.includes(d.id)?'已摆放':'已收纳'}`,art:art.decor(d)}))
 }}
 function render(){
  const scroll=host.querySelector('#stock-panel')?.scrollTop||0;
  try{localStorage.setItem('skye-warehouse-tab',tab)}catch{/* Preference only; gameplay saves stay on the existing save key. */}
  const lists=cards(),list=lists[tab];if(!list.some(x=>x.id===selected))selected='';const entry=list.find(x=>x.id===selected);
  host.innerHTML=`<div class="paper-kicker">THINGS WE KEEP</div><h2>仓库</h2><p class="paper-intro">把收获与喜欢的东西，好好收在这里。</p><div class="warehouse-tabs" role="tablist" aria-label="物品分类">${(Object.keys(labels) as Tab[]).map(id=>`<button role="tab" id="stock-tab-${id}" aria-controls="stock-panel" aria-selected="${id===tab}" tabindex="${id===tab?0:-1}" data-stock-tab="${id}">${labels[id]} <small aria-label="${lists[id].filter(c=>c.count>0).length} 种有库存的物品">${lists[id].filter(c=>c.count>0).length}</small></button>`).join('')}</div><section id="stock-panel" role="tabpanel" aria-labelledby="stock-tab-${tab}" tabindex="0"><p class="stock-caption">分类数字为有库存的物品种类数${tab==='decor'?' · 已摆放的装饰仍保留在这里':''}</p>${!list.some(x=>x.count>0)?`<p class="stock-empty">${empty[tab]}</p>`:''}<div class="warehouse-grid">${list.map(c=>`<button class="stock-card ${c.count?'':'stock-zero'}" data-stock-id="${c.id}" aria-pressed="${c.id===selected}">${c.art}<span class="stock-count">${tab==='decor'?save.placed.includes(c.id)?'已摆放':'已收纳':c.count?'库存 ×'+c.count:'暂无库存'}</span><strong>${c.name}</strong><small>${c.note}</small></button>`).join('')}</div></section><div class="warehouse-actions" aria-label="物品操作">${entry?`<strong>${entry.name}</strong>${tab==='crops'?`<div><button data-stock-craft ${entry.count&&gardenEnabled(save)?'':'disabled'}>前往制作</button>${gardenEnabled(save)?'<button data-stock-garden>前往花园</button>':''}</div>`:tab==='decor'?`<p>摆放增加 1 枚氛围小费，收起后取消。</p><button data-stock-place>${save.placed.includes(entry.id)?'收起':'摆放'}</button>`:`<p>出售时每份氛围小费 +${ambienceTip(save)} · 不消耗食材，不推进委托或作物生长</p>${entry.count>1?`<label>出售数量 <input id="stock-quantity" aria-label="出售数量" type="number" inputmode="numeric" min="1" max="${entry.count}" step="1" value="1"></label>`:''}<button data-stock-sell>售出 1 份</button><small id="stock-sale-total" aria-live="polite">商品收益 +${recipes.find(r=>r.id===entry.id)!.price} · 氛围小费 +${ambienceTip(save)}</small>`}`:`<p>${list.length?'点选一件物品，看看它的用途。':'日子慢慢过，喜欢的东西慢慢攒。'}</p>`}</div><p class="warehouse-feedback" role="status" aria-live="polite"></p>`;
  host.querySelector('#stock-panel')!.scrollTop=scroll;
  host.querySelectorAll<HTMLButtonElement>('[data-stock-tab]').forEach(b=>{b.onclick=()=>{tab=b.dataset.stockTab as Tab;selected='';render();host.querySelector<HTMLButtonElement>(`[data-stock-tab="${tab}"]`)!.focus()};b.onkeydown=e=>{const ids:Tab[]=['crops','food','decor'];let i=ids.indexOf(tab);if(e.key==='ArrowRight')i=(i+1)%3;else if(e.key==='ArrowLeft')i=(i+2)%3;else if(e.key==='Home')i=0;else if(e.key==='End')i=2;else return;e.preventDefault();tab=ids[i];selected='';render();host.querySelector<HTMLButtonElement>(`[data-stock-tab="${tab}"]`)!.focus()}});
  host.querySelectorAll<HTMLButtonElement>('[data-stock-id]').forEach(b=>b.onclick=()=>{selected=b.dataset.stockId!;render();host.querySelector<HTMLButtonElement>(`[data-stock-id="${selected}"]`)?.focus({preventScroll:true});host.querySelector(`[data-stock-id="${selected}"]`)?.scrollIntoView({block:'nearest'})});
  if(!entry)return;
  host.querySelector<HTMLButtonElement>('[data-stock-craft]')?.addEventListener('click',()=>actions.craft(gardenDrinks.find(r=>r.crop===entry.id)!.id));
  host.querySelector<HTMLButtonElement>('[data-stock-garden]')?.addEventListener('click',actions.garden);
  host.querySelector<HTMLButtonElement>('[data-stock-place]')?.addEventListener('click',()=>{const placed=!save.placed.includes(entry.id);actions.place(entry.id,placed);render();host.querySelector<HTMLButtonElement>('[data-stock-place]')?.focus();feedback(entry.name+(placed?'已摆放':'已收好'))});
  const sale=host.querySelector<HTMLButtonElement>('[data-stock-sell]'),quantity=host.querySelector<HTMLInputElement>('#stock-quantity');
  function amount(){return quantity?Number(quantity.value):1}
  function valid(){const n=amount();return Number.isSafeInteger(n)&&n>0&&n<=entry!.count}
  if(sale){if(quantity)quantity.oninput=()=>{sale.disabled=!valid();sale.textContent=valid()?`售出 ${amount()} 份`:'请输入有效数量';host.querySelector('#stock-sale-total')!.textContent=valid()?`商品收益 +${recipes.find(r=>r.id===entry.id)!.price*amount()} · 氛围小费 +${ambienceTip(save)*amount()}`:'数量不能超过当前库存'};
   sale.onclick=()=>{if(!valid()||performance.now()-lastSale<600)return;lastSale=performance.now();const n=amount();sale.disabled=true;if(!actions.sell(entry.id,n,entry.count)){render();feedback('库存已更新，请重新选择数量。');return}render();feedback(`${entry.name} ×${n} 已售出`);host.querySelector<HTMLButtonElement>('[data-stock-sell]')?.focus()};
  }
 }
 function feedback(text:string){host.querySelector('.warehouse-feedback')!.textContent=text}
 return {render};
}
