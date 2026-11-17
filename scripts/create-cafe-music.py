"""Original 32-bar piano miniature; no external recordings or sampled instruments."""
from pathlib import Path
import numpy as np
import wave
rate=32000; beat=60/72; bars=32; duration=bars*3*beat+4
out=np.zeros((int(duration*rate),2),dtype=np.float64)
# Original melody in 3/4, with a contrasting middle section and quiet reprise.
melodies=[[(64,1),(67,1),(72,1)],[(71,.5),(69,.5),(67,1),(64,1)],[(65,1),(69,1),(74,1)],[(72,1),(71,.5),(69,.5),(67,1)],[(69,1),(72,1),(76,1)],[(74,.5),(72,.5),(67,1),(64,1)],[(65,1),(69,.5),(67,.5),(62,1)],[(71,1),(67,1),(62,1)],[(72,1.5),(76,.5),(74,1)],[(72,1),(69,1),(64,1)],[(74,1),(72,.5),(69,.5),(65,1)],[(71,1.5),(69,.5),(67,1)],[(69,.5),(72,.5),(76,1),(74,1)],[(72,1),(67,1),(64,1)],[(65,1),(62,1),(71,1)],[(72,3)]]
chords=[(48,55,60,64),(45,52,57,60),(50,57,62,65),(43,50,55,59),(41,48,53,57),(48,55,60,64),(50,57,62,65),(43,50,55,59)]
def note(midi,start,length,vel):
 f=440*2**((midi-69)/12); n=int(min(length+2.2,duration-start)*rate)
 if n<=0:return
 t=np.arange(n)/rate; signal=np.zeros(n)
 # Soft hammer, progressively faster damping of upper partials.
 for k,a in enumerate([1,.43,.23,.13,.07,.035,.018],1):
  decay=np.exp(-t*(.65+k*.42)/(1.15 if midi<60 else .9))
  signal+=a*np.sin(2*np.pi*f*k*(1+.00004*k*k)*t)*decay
 env=(1-np.exp(-t/.009))*np.minimum(1,np.maximum(0,(length+1.7-t)/1.7))
 signal*=env*vel*.12
 pan=np.clip((midi-60)/36,-.5,.5);startidx=int(start*rate)
 out[startidx:startidx+n,0]+=signal*np.sqrt((1-pan)/2)
 out[startidx:startidx+n,1]+=signal*np.sqrt((1+pan)/2)
for bar in range(bars):
 start=bar*3*beat; c=chords[bar%8]
 if bar==31:c=(48,55,60,64)
 # A gentle bass and broken-chord accompaniment.
 note(c[0],start,beat*1.6,.48)
 for j in range(1,6):note(c[1+(j-1)%3],start+j*beat/2,beat*.7,.25+(j%2)*.035)
 phrase=melodies[bar%16];cursor=0
 for pitch,length in phrase:
  note(pitch+(0 if bar<16 else -12 if bar<24 else 0),start+cursor*beat,length*beat,.55 if bar<16 else .48)
  cursor+=length
# A small, diffuse room: quiet cross-channel early reflections and a decaying tail.
dry=out.copy()
for delay,gain in [(.043,.14),(.079,.11),(.127,.09),(.193,.07),(.283,.05),(.419,.035)]:
 shift=int(delay*rate);out[shift:]+=dry[:-shift,::-1]*gain
out*=np.minimum(1,np.arange(len(out))/(rate*.12))[:,None]
out*=np.minimum(1,np.maximum(0,(len(out)-np.arange(len(out)))/(rate*3)))[:,None]
out=np.tanh(out*1.3);out*=.82/max(.82,np.max(np.abs(out)))
path=Path('/private/tmp/cafe-afternoon.wav')
with wave.open(str(path),'wb') as w:w.setnchannels(2);w.setsampwidth(2);w.setframerate(rate);w.writeframes((out*32767).astype('<i2').tobytes())
print(f'{path}: {duration:.1f}s, peak={np.max(np.abs(out)):.3f}, RMS={np.sqrt(np.mean(out*out)):.3f}')
