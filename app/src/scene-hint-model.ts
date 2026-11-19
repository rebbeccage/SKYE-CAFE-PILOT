import {nextGoal,gardenActivity,gardenEnabled,cropNames,names,quests,type CafeSave,type SceneVisitId} from './progression';
export type HintContext={view:SceneVisitId;roaming?:boolean;ready:boolean;blocked:boolean;brewing:boolean;storing?:boolean;touch:boolean;weather?:'sun'|'rain'|'snow';save:CafeSave};
export const sceneHintCopy={
 courtyard:{title:'庭院',first:'点击咖啡屋门口「推门进入」，找阿禾聊聊，开启人物故事。',again:'推门进入咖啡屋，点击阿禾，继续人物故事。',controls:'点击门口「推门进入」到店内；点人物模型听故事，右侧头像只查看人物介绍。'},
 interior:{title:'咖啡馆店内',first:'在吧台点击阿禾听故事；点咖啡机打开菜单，制作餐品赚金币。',again:'在店内点击咖啡机，选餐品并制作，为小店赚取金币。',controls:'点击咖啡机打开菜单，点击空座位坐下；点击「起身」回到站立机位。'},
 'interior-seat':{title:'店内落座',first:'坐下来，拖动看看房间；点「起身」回到站立视角。',again:'拖动环看房间，点「起身」回到站立视角。',controls:'坐着也能拖动环看房间，点「起身」回到站立视角。'},
 'garden-close':{title:'花园近景',first:'在花园点击棠姨，了解她的故事；拖动近看花丛，点返回离开。',again:'在花园点击棠姨听故事，点返回回庭院。',controls:'拖动小范围环视，点场景中的棠姨听故事；点「返回原视角」离开近景。'},
 island:{title:'全岛观察',first:'拖动环看小岛，{zoom}靠近风景；再点「全岛」回小店。',again:'拖动看岛，{zoom}；再点「全岛」回小店。',controls:'拖动环看小岛；再点「随心逛逛」中的「全岛」回小店。点击港口游船可以查看出海开放提示。'},
 'beach-seat':{title:'沙滩躺椅',first:'坐着听听海浪，拖动慢慢看海；点「起身」回庭院。',again:'拖动看海，点「起身」回庭院。',controls:'坐着拖动环视海面，点「起身，回到庭院」离开躺椅。'},
} satisfies Record<SceneVisitId,{title:string;first:string;again:string;controls:string}>;
export function sceneHint(c:HintContext,first:boolean){
 const {view,save}=c,goal=nextGoal(save),zoom=c.touch?'双指缩放':'滚轮缩放';
 const base=sceneHintCopy[view];let text=(first?base.first:base.again).replace('{zoom}',zoom),sharesGoal=false;
 if(c.brewing){
  text=c.storing?'店内正在制作餐品，完成后到「仓库·餐品」查看。':'店内正在制作餐品，送达后获得金币；可先拖动欣赏周围。';
 }else if(view==='garden-close'){
  if(!gardenEnabled(save)){text=first?'在花园点击棠姨，听听她的故事；点返回回到庭院。':'在花园点击棠姨，继续故事；点返回回庭院。';sharesGoal=goal.action==='story'&&goal.person===2;}
  else{
   const activity=gardenActivity(save)!;const name=cropNames[activity.id],stage=activity.crop.stage;
   const action=stage==='ready'?`点花园${name}植株收获，食材会存入仓库`:stage==='needs-care'?`点花园${name}植株浇水，让作物继续生长`:stage==='unsown'?`点花园${name}植株播种，开始培育食材`:'打开菜单完成一单营业，让花园作物长大';
   text=action+(first?'；拖动赏花，点返回回庭院。':'；点返回回庭院。');sharesGoal=goal.label===activity.label;
  }
 }else if(view==='courtyard'||view==='interior'){
  if(goal.action==='story'&&(view==='courtyard'||goal.person===0)){
   const i=goal.person!,name=names[i];const where=i===0?(view==='courtyard'?'进入咖啡屋，在吧台':'在店内吧台'):i===1?(c.weather==='snow'?'进入咖啡屋，在窗边':'到栈道或庭院座位旁'):'到花园草径旁';text=`${where}点击${name}，听下一段故事。`;sharesGoal=true;
  }else if(goal.action==='quest'){
   const q=quests.find(q=>q.id===goal.quest)!;text=`打开「菜单」选${names[q.person]}的委托，制作${q.dish}以解锁后续故事。`;sharesGoal=true;
  }else if(goal.action==='garden'){
   const a=gardenActivity(save)!;const verb=a.crop.stage==='ready'?'收获':a.crop.stage==='needs-care'?'浇水照料':'播种';
   text=`${view==='interior'?'回到庭院，':''}点花园${cropNames[a.id]}植株${verb}，${a.crop.stage==='ready'?'把食材收进仓库':'让作物继续生长'}。`;sharesGoal=true;
  }
 }
 if(c.roaming&&view==='courtyard'){
  text=text.replace('点击','走近后按互动键').replace('点花园','走到花园，点选');
  if(!sharesGoal&&!c.brewing)text=c.touch?'左摇杆走向咖啡屋，右侧拖动观察；到门口点互动，进入找阿禾聊聊。':'点击场景后用 WASD 走向咖啡屋；到门口按 E 进入，找阿禾聊聊。';
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
