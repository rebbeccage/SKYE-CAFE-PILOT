// Weather tracks share the existing mute, volume and browser gesture policy.
export class CafeMusic {
 audio=new Audio(new URL('music/afternoon-piano.m4a',document.baseURI).href);
 jazz=new Audio(new URL('music/rain-jazz.m4a',document.baseURI).href);
 sea=new Audio(new URL('music/sun-coast.m4a',document.baseURI).href);
 enabled=true;volume=.35;status='轻触庭院，听一会儿风';
 private context?:AudioContext;private wind?:GainNode;private rain?:GainNode;private entering=false;private cinema=false;private roaming=false;private lastStep=0;private roamSampleTime=0;private ambientPosition={shore:0,garden:0,cafe:0,harbor:0,cinema:0};private footBuffer?:AudioBuffer;private harborGain?:GainNode;private projector?:GainNode;
 get name(){return this.inside()?this.raining()?'雨中小馆 · 轻爵士':'温室午后 · 古典风轻钢琴':this.raining()?'雨落庭院 · 自然雨声':this.sunny()?'海岛晴日 · 海浪与海鸥':'庭院微风 · 风声白噪音'}
 private get track(){return this.inside()||this.entering?this.raining()?this.jazz:this.audio:this.sunny()?this.sea:null}
 constructor(private inside:()=>boolean,private raining:()=>boolean,private changed:()=>void,private sunny:()=>boolean=()=>!raining()){
  for(const a of [this.audio,this.jazz,this.sea]){a.loop=true;a.preload='auto'}
  try{const v=Number(localStorage.getItem('cafe-volume')??.35);this.volume=Number.isFinite(v)?Math.max(0,Math.min(1,v)):.35;this.enabled=localStorage.getItem('cafe-built-in-music-enabled')!=='false'}catch{}
  for(const a of [this.audio,this.jazz,this.sea])a.volume=this.volume;
  for(const a of [this.audio,this.jazz,this.sea])a.addEventListener('error',()=>{if(a===this.track){this.status='配乐暂时未能加载，点击音乐按钮重试';this.changed()}});
  document.addEventListener('visibilitychange',()=>this.sync());
  window.addEventListener('cafe-cinema-audio',(e:Event)=>{this.cinema=(e as CustomEvent<boolean>).detail;for(const a of [this.audio,this.jazz,this.sea])a.volume=this.volume*(this.cinema?.8:1);if(this.cinema&&this.enabled)this.unlockWind();this.syncWind()});
  window.addEventListener('cafe-roaming-audio',(e:Event)=>{
   const d=(e as CustomEvent<{active:boolean;x:number;z:number;shore:number;distance:number;surface:string;projecting:boolean}>).detail;
   const was=this.roaming;this.roaming=d.active;
   if(!d.active){if(was){for(const a of [this.audio,this.jazz,this.sea])a.volume=this.volume*(this.cinema?.8:1);this.sync();if(this.context)this.harborGain?.gain.setTargetAtTime(0,this.context.currentTime,.5);}return;}
   const fall=(x:number,z:number,r:number)=>Math.max(0,1-Math.hypot(d.x-x,d.z-z)/r);
   const p=this.ambientPosition;p.shore=d.shore;p.garden=fall(-6.7,0,7);p.cafe=fall(0,0,8);p.harbor=fall(-3.5,14,9);p.cinema=d.projecting?fall(-17,7,7):0;
   if(this.context?.state==='running'&&this.enabled&&!this.inside()){
    const nearby=this.raining()?this.jazz:this.audio,other=this.raining()?this.audio:this.jazz;
    other.pause();nearby.volume=this.volume*p.cafe*.18;if(p.cafe>.03&&nearby.paused)void nearby.play().catch(()=>{});if(p.cafe<=.03)nearby.pause();
   }
   const now=performance.now(),dt=Math.min(.5,(now-this.roamSampleTime)/1000);this.roamSampleTime=now;
   const desired=this.volume*(.55+p.shore*.45);this.sea.volume+=(desired-this.sea.volume)*(1-Math.exp(-dt*2));
   if(!this.context||!this.enabled||document.hidden)return;
   const ctx=this.context,t=ctx.currentTime,active=!this.inside();
   this.wind?.gain.setTargetAtTime(active?this.volume*(.07+p.garden*.12+p.harbor*.035):0,t,.5);
   this.projector?.gain.setTargetAtTime(active?this.volume*p.cinema*.025:0,t,.5);this.harborGain?.gain.setTargetAtTime(active?this.volume*p.harbor*.004:0,t,.7);
   // Quiet, surface-specific footfalls use the existing user-unlocked audio context.
   if(d.distance-this.lastStep>.72){this.lastStep=d.distance;if(!active)return;
    if(!this.footBuffer){this.footBuffer=ctx.createBuffer(1,ctx.sampleRate*.15,ctx.sampleRate);const data=this.footBuffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*Math.exp(-i/data.length*7);}
    const source=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),gain=ctx.createGain();source.buffer=this.footBuffer;filter.type='lowpass';filter.frequency.value=d.surface==='wood'?680:d.surface==='stone'?1050:d.surface==='grass'?430:260;gain.gain.value=this.volume*.035;source.connect(filter).connect(gain).connect(ctx.destination);source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect()};source.start();
   }
  });
  // Browsers require a player gesture before sound can start.
  const unlock=(e:Event)=>{if(!this.enabled||(e.target instanceof Element&&e.target.closest('#sound')))return;this.unlockWind();this.play()};
  document.addEventListener('pointerdown',unlock,{passive:true});document.addEventListener('keydown',unlock);
 }
 private unlockWind(){
  if(!this.context){
   const ctx=this.context=new AudioContext(),buffer=ctx.createBuffer(1,ctx.sampleRate*12,ctx.sampleRate),data=buffer.getChannelData(0);
   for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
   const source=ctx.createBufferSource();source.buffer=buffer;source.loop=true;
   const high=ctx.createBiquadFilter();high.type='highpass';high.frequency.value=85;
   const low=ctx.createBiquadFilter();low.type='lowpass';low.frequency.value=780;low.Q.value=.4;
   const swell=ctx.createGain();swell.gain.value=.8;const lfo=ctx.createOscillator(),depth=ctx.createGain();lfo.frequency.value=.075;depth.gain.value=.18;lfo.connect(depth).connect(swell.gain);lfo.start();
   this.wind=ctx.createGain();this.wind.gain.value=0;source.connect(high).connect(low).connect(swell).connect(this.wind).connect(ctx.destination);source.start();
   const motor=ctx.createBufferSource(),motorBuffer=ctx.createBuffer(1,ctx.sampleRate*2,ctx.sampleRate),samples=motorBuffer.getChannelData(0);for(let i=0;i<samples.length;i++)samples[i]=(Math.random()*2-1)*(.25+.75*Math.pow(Math.max(0,Math.sin(i/ctx.sampleRate*22*Math.PI*2)),8));motor.buffer=motorBuffer;motor.loop=true;const filter=ctx.createBiquadFilter();filter.type="lowpass";filter.frequency.value=480;this.projector=ctx.createGain();this.projector.gain.value=0;motor.connect(filter).connect(this.projector).connect(ctx.destination);motor.start();
   const creak=ctx.createOscillator(),creakLfo=ctx.createOscillator(),creakDepth=ctx.createGain();creak.frequency.value=125;creakLfo.frequency.value=.17;creakDepth.gain.value=12;creakLfo.connect(creakDepth).connect(creak.frequency);this.harborGain=ctx.createGain();this.harborGain.gain.value=0;creak.connect(this.harborGain).connect(ctx.destination);creak.start();creakLfo.start();
   // Stereo rainfall bed and irregular droplets. No periodic wind swelling.
   const rainBuffer=ctx.createBuffer(2,ctx.sampleRate*12,ctx.sampleRate);
   for(let channel=0;channel<2;channel++){
    const samples=rainBuffer.getChannelData(channel);let smooth=0;
    for(let i=0;i<samples.length;i++){const white=Math.random()*2-1;smooth=.86*smooth+.14*white;samples[i]=white*.28+smooth*.7}
    for(let drop=0;drop<660;drop++){
     const at=Math.floor(Math.random()*(samples.length-ctx.sampleRate*.05)),hz=900+Math.random()*3300,amp=.015+Math.random()*.035;
     for(let i=0;i<ctx.sampleRate*.025;i++){const age=i/ctx.sampleRate;samples[at+i]+=Math.sin(age*hz*Math.PI*2)*Math.exp(-age*190)*amp}
    }
   }
   const rainSource=ctx.createBufferSource();rainSource.buffer=rainBuffer;rainSource.loop=true;
   const rainHigh=ctx.createBiquadFilter();rainHigh.type='highpass';rainHigh.frequency.value=320;
   const rainLow=ctx.createBiquadFilter();rainLow.type='lowpass';rainLow.frequency.value=6200;rainLow.Q.value=.45;
   this.rain=ctx.createGain();this.rain.gain.value=0;rainSource.connect(rainHigh).connect(rainLow).connect(this.rain).connect(ctx.destination);rainSource.start();
  }
  if(this.context.state==='suspended')void this.context.resume().then(()=>this.syncWind()).catch(()=>{});else this.syncWind();
 }
 private syncWind(){
  const active=this.enabled&&!document.hidden&&!this.inside()&&!this.entering;
  if(!active&&this.context)this.harborGain?.gain.setTargetAtTime(0,this.context.currentTime,.2);
  if(this.context&&this.projector)this.projector.gain.setTargetAtTime(active&&this.cinema?this.volume*.028:0,this.context.currentTime,.25);
  if(this.context&&this.wind)this.wind.gain.setTargetAtTime(active&&this.cinema?this.volume*.10:active&&!this.raining()&&!this.sunny()?this.volume*.65:0,this.context.currentTime,.15);
  if(this.context&&this.rain)this.rain.gain.setTargetAtTime(active&&this.raining()?this.volume*.7:0,this.context.currentTime,.15);
  if(!this.inside()&&!this.entering)this.status=!this.enabled?'声音已暂停':this.context?.state==='running'?(this.raining()?'正在庭院播放雨声':this.sunny()?'正在庭院播放海浪与海鸥':'正在庭院播放风声'):(this.raining()?'轻触庭院，听一会儿雨':'轻触庭院，听一会儿风');
  this.changed();
 }
 private play(){
  const track=this.track;
  for(const a of [this.audio,this.jazz,this.sea])if(a!==track||!this.enabled||document.hidden)a.pause();
  if(!track||!this.enabled||document.hidden)return;
  track.play().then(()=>{if(track!==this.track||!this.enabled||document.hidden){track.pause();return}this.status=this.inside()||this.entering?'正在馆内播放':'正在庭院播放海浪与海鸥';this.changed()}).catch(()=>{if(track===this.track){this.status='点击右上角音乐按钮开始播放';this.changed()}});
 }
 enter(){this.entering=true;this.syncWind();this.play()}
 sync(){this.entering=false;this.syncWind();this.play();if(!this.enabled)this.status='声音已暂停';this.changed()}
 toggle(){this.enabled=this.enabled&&!this.snapshot().playing?true:!this.enabled;try{localStorage.setItem('cafe-built-in-music-enabled',String(this.enabled))}catch{}if(this.enabled)this.unlockWind();this.sync();return this.enabled}
 setVolume(v:number){if(!Number.isFinite(v))return;this.volume=Math.max(0,Math.min(1,v));for(const a of [this.audio,this.jazz,this.sea])a.volume=this.volume*(this.cinema?.8:1);this.syncWind();try{localStorage.setItem('cafe-volume',String(this.volume))}catch{}}
 snapshot(){const outdoors=this.enabled&&!document.hidden&&!this.inside()&&!this.entering&&this.context?.state==='running';const windPlaying=!!outdoors&&!this.raining()&&!this.sunny(),rainPlaying=!!outdoors&&this.raining();const track=this.track;return {roaming:this.roaming,ambientPosition:{...this.ambientPosition},cinema:this.cinema,projectorGain:this.projector?.gain.value??0,name:this.name,enabled:this.enabled,volume:this.volume,playing:track?!track.paused:windPlaying||rainPlaying,pianoPlaying:!this.audio.paused,jazzPlaying:!this.jazz.paused,seaPlaying:!this.sea.paused,windPlaying,rainPlaying,rainGain:this.rain?.gain.value??0,windGain:this.wind?.gain.value??0,time:track?.currentTime??0,status:this.status,builtIn:true,readyState:track?.readyState??this.audio.readyState}}
}
