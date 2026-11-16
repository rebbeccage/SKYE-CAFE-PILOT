// Indoor piano and weather-specific outdoor ambience share mute/volume.
export class CafeMusic {
 audio=new Audio(new URL('music/afternoon-piano.m4a',document.baseURI).href);
 enabled=true;volume=.35;status='轻触庭院，听一会儿风';
 private context?:AudioContext;private wind?:GainNode;private rain?:GainNode;private entering=false;
 get name(){return this.inside()?'温室午后 · 古典风轻钢琴':this.raining()?'雨落庭院 · 自然雨声':'庭院微风 · 风声白噪音'}
 constructor(private inside:()=>boolean,private raining:()=>boolean,private changed:()=>void){
  this.audio.loop=true;this.audio.preload='auto';
  try{const v=Number(localStorage.getItem('cafe-volume')??.35);this.volume=Number.isFinite(v)?Math.max(0,Math.min(1,v)):.35;this.enabled=localStorage.getItem('cafe-built-in-music-enabled')!=='false'}catch{}
  this.audio.volume=this.volume;
  this.audio.addEventListener('error',()=>{this.status='配乐暂时未能加载，点击音乐按钮重试';this.changed()});
  document.addEventListener('visibilitychange',()=>this.sync());
  // Browsers require a player gesture before sound can start.
  const unlock=(e:Event)=>{if(!this.enabled||(e.target instanceof Element&&e.target.closest('#sound')))return;this.unlockWind();if(this.inside()&&this.audio.paused)this.play()};
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
  if(this.context&&this.wind)this.wind.gain.setTargetAtTime(active&&!this.raining()?this.volume*.65:0,this.context.currentTime,.15);
  if(this.context&&this.rain)this.rain.gain.setTargetAtTime(active&&this.raining()?this.volume*.7:0,this.context.currentTime,.15);
  if(!this.inside()&&!this.entering)this.status=!this.enabled?'声音已暂停':this.context?.state==='running'?(this.raining()?'正在庭院播放雨声':'正在庭院播放风声'):(this.raining()?'轻触庭院，听一会儿雨':'轻触庭院，听一会儿风');
  this.changed();
 }
 private play(){
  if(!this.enabled||document.hidden)return;
  this.audio.play().then(()=>{if(!this.enabled||document.hidden||(!this.inside()&&!this.entering)){this.audio.pause();return}this.status='正在馆内播放';this.changed()}).catch(()=>{this.status='点击右上角音乐按钮开始播放';this.changed()});
 }
 enter(){this.entering=true;this.syncWind();this.play()}
 sync(){this.entering=false;this.syncWind();if(this.inside()&&this.enabled&&!document.hidden)this.play();else{this.audio.pause();if(!this.enabled)this.status='声音已暂停';this.changed()}}
 toggle(){this.enabled=this.enabled&&!this.snapshot().playing?true:!this.enabled;try{localStorage.setItem('cafe-built-in-music-enabled',String(this.enabled))}catch{}if(this.enabled)this.unlockWind();this.sync();return this.enabled}
 setVolume(v:number){if(!Number.isFinite(v))return;this.volume=Math.max(0,Math.min(1,v));this.audio.volume=this.volume;this.syncWind();try{localStorage.setItem('cafe-volume',String(this.volume))}catch{}}
 snapshot(){const outdoors=this.enabled&&!document.hidden&&!this.inside()&&!this.entering&&this.context?.state==='running';const windPlaying=!!outdoors&&!this.raining(),rainPlaying=!!outdoors&&this.raining();return {name:this.name,enabled:this.enabled,volume:this.volume,playing:this.inside()?!this.audio.paused:!!outdoors,pianoPlaying:!this.audio.paused,windPlaying,rainPlaying,rainGain:this.rain?.gain.value??0,windGain:this.wind?.gain.value??0,time:this.audio.currentTime,status:this.status,builtIn:true,readyState:this.audio.readyState}}
}
