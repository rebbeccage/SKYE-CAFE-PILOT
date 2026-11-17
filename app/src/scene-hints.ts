import './scene-hints.css';
import {sceneHint,sceneHintCopy,SceneHintSession,type HintContext} from './scene-hint-model';
import type {SceneVisitId} from './progression';

export function createSceneHints(host:HTMLElement,getContext:()=>HintContext,mark:(id:SceneVisitId)=>void){
 const strip=document.createElement('div');strip.id='scene-entry-hint';strip.setAttribute('role','status');strip.setAttribute('aria-live','polite');strip.setAttribute('aria-atomic','true');strip.setAttribute('aria-hidden','true');host.append(strip);
 const session=new SceneHintSession(mark);let displayed=false,fadeUntil=0,destroyed=false;
 const goal=document.getElementById('next-step')!;
 function restoreGoal(){goal.style.display='';goal.removeAttribute('aria-hidden')}
 function hide(immediate=false){
  strip.classList.remove('is-visible');strip.setAttribute('aria-hidden','true');
  if(immediate){strip.textContent='';fadeUntil=0;restoreGoal()}else if(displayed)fadeUntil=performance.now()+200;
  displayed=false;
 }
 function suppress(){session.suppress();hide(true)}
 // Native dialogs and the existing tools drawer: dismiss, never pause/resume.
 const observer=new MutationObserver(()=>{if(getContext().blocked)suppress()});
 observer.observe(host,{subtree:true,attributes:true,attributeFilter:['open']});
 const onHidden=()=>{if(document.hidden)suppress()};document.addEventListener('visibilitychange',onHidden);
 function update(now:number){
  if(destroyed)return;
  const context=getContext();session.update(context,now);
  if(!context.ready||context.blocked){hide(true);return;}
  if(session.visible){
   fadeUntil=0;strip.dataset.view=context.view;
   if(strip.textContent!==session.text)strip.textContent=session.text;
   strip.classList.add('is-visible');strip.setAttribute('aria-hidden','false');displayed=true;
   if(session.sharesGoal){goal.style.setProperty('display','none','important');goal.setAttribute('aria-hidden','true')}else restoreGoal();
  }else{
   hide();if(fadeUntil&&now>=fadeUntil){strip.textContent='';fadeUntil=0;restoreGoal()}
  }
 }
 function help(){
  const c=getContext(),copy=sceneHint(c,true),zoom=c.touch?'双指缩放':'滚轮缩放';
  return {title:copy.title,text:copy.text,controls:sceneHintCopy[c.view].controls+` ${zoom}可调整远近。`};
 }
 function destroy(){destroyed=true;suppress();observer.disconnect();document.removeEventListener('visibilitychange',onHidden);strip.remove()}
 return {update,help,suppress,destroy,diagnostics:()=>({view:session.view,visible:session.visible,first:session.first,text:session.text,endsAt:session.endsAt,shows:session.shows,sharesGoal:session.sharesGoal})};
}
