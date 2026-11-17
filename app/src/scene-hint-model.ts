import {nextGoal,gardenActivity,gardenEnabled,cropNames,names,quests,type CafeSave,type SceneVisitId} from './progression';
export type HintContext={view:SceneVisitId;ready:boolean;blocked:boolean;brewing:boolean;storing?:boolean;touch:boolean;save:CafeSave};
export const sceneHintCopy={
 courtyard:{title:'庭院',first:'点一点庭院里的朋友，或推门进店，开启今天的小店时光。',again:'找朋友说说话，或推门进店。',controls:'点选场景中的人物听故事，或推门进店。'},
 interior:{title:'咖啡馆店内',first:'找阿禾聊聊，或点击咖啡机，打开菜单制作餐品。',again:'点咖啡机打开菜单，为客人准备一杯咖啡。',controls:'点击咖啡机打开菜单，点击空座位坐下；归位后回到站立机位。'},
 'interior-seat':{title:'店内落座',first:'坐下来，拖动看看房间；点「归位」回到站立视角。',again:'拖动环看房间，点「归位」起身。',controls:'坐着也能拖动环看房间，点「景致」中的「归位」起身。'},
 'garden-close':{title:'花园近景',first:'拖动看看花丛与朋友，也可点棠姨听故事；点返回回庭院。',again:'拖动近看花丛与朋友，点返回回庭院。',controls:'拖动小范围环视，点场景中的棠姨听故事；点「返回原视角」离开近景。'},
 island:{title:'全岛观察',first:'拖动环看小岛，{zoom}靠近风景；点「归位」回小店。',again:'拖动看岛，{zoom}；点「归位」回小店。',controls:'拖动环看小岛；点「景致」中的「归位」回小店。港口游船是环境装饰。'},
 'beach-seat':{title:'沙滩躺椅',first:'坐着听听海浪，拖动慢慢看海；点「起身」回庭院。',again:'拖动看海，点「起身」回庭院。',controls:'坐着拖动环视海面，点「起身，回到庭院」离开躺椅。'},
} satisfies Record<SceneVisitId,{title:string;first:string;again:string;controls:string}>;
export function sceneHint(c:HintContext,first:boolean){
 const {view,save}=c,goal=nextGoal(save),zoom=c.touch?'双指缩放':'滚轮缩放';
 const base=sceneHintCopy[view];let text=(first?base.first:base.again).replace('{zoom}',zoom),sharesGoal=false;
 if(c.brewing){
  text=c.storing?'餐品正在制作，稍等入库；先拖动看看身边的风景。':first?'餐品正在制作，稍等送达；先拖动看看身边的风景。':'餐品正在制作，等送达后再准备下一份。';
 }else if(view==='garden-close'){
  if(!gardenEnabled(save)){text=first?'拖动看看花丛，点棠姨听听故事；点返回回庭院。':'点棠姨听故事，或拖动赏花；点返回回庭院。';sharesGoal=goal.action==='story'&&goal.person===2;}
  else{
   const activity=gardenActivity(save)!;const name=cropNames[activity.id],stage=activity.crop.stage;
   const action=stage==='ready'?`${name}成熟了，点种植区收获`:stage==='needs-care'?`${name}需要照料，点种植区浇水`:stage==='unsown'?`点${name}种植区播种`:'营业时作物会慢慢长大';
   text=action+(first?'；拖动赏花，点返回回庭院。':'；点返回回庭院。');sharesGoal=goal.label===activity.label;
  }
 }else if(view==='courtyard'||view==='interior'){
  if(goal.action==='story'&&(view==='courtyard'||goal.person===0)){
   const name=names[goal.person!];text=first?`点${name}听下一段故事，${view==='courtyard'?'或推门看看小店':'也可点咖啡机制作餐品'}。`:`点${name}，听下一段故事。`;sharesGoal=true;
  }else if(goal.action==='quest'){
   const q=quests.find(q=>q.id===goal.quest)!;text=`打开「菜单」，为${names[q.person]}准备${q.dish}。`;sharesGoal=true;
  }else if(goal.action==='garden'){
   const a=gardenActivity(save)!;const verb=a.crop.stage==='ready'?'收获':a.crop.stage==='needs-care'?'浇水照料':'播种';
   text=`点花园里的${cropNames[a.id]}种植区，${verb}。`;sharesGoal=true;
  }
 }
 return {text,sharesGoal,title:base.title};
}
/** One entry, one deadline. Modal suppression consumes the entry; closing a panel
 * never schedules a replacement. Wall-clock deadlines cannot accumulate queues. */
export class SceneHintSession{
 view:SceneVisitId|null=null;first=false;visible=false;endsAt=0;entryAt=0;
 private pending=false;
 text='';sharesGoal=false;shows=0;
 private mark:(id:SceneVisitId)=>void;
 constructor(mark:(id:SceneVisitId)=>void){this.mark=mark}
 suppress(){this.pending=false;this.visible=false;this.endsAt=0;}
 update(c:HintContext,now:number){
  if(!c.ready){this.suppress();this.view=null;return;}
  if(this.view!==c.view){this.suppress();this.view=c.view;this.entryAt=now;this.pending=true;}
  if(c.blocked){this.suppress();return;}
  if(this.pending&&now-this.entryAt>=450){
   this.pending=false;this.first=!c.save.sceneVisits?.[c.view];
   this.endsAt=now+(this.first?7000:4000);this.visible=true;this.shows++;
   this.mark(c.view);
  }
  if(this.visible){if(now>=this.endsAt)this.visible=false;else{const copy=sceneHint(c,this.first);this.text=copy.text;this.sharesGoal=copy.sharesGoal;}}
 }
}
