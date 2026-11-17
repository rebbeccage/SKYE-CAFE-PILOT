"""Original synthesized jazz and coastal ambience; no external recordings."""
from pathlib import Path
import numpy as np, wave
rate=32000; rng=np.random.default_rng(2716); root=Path(__file__).resolve().parents[1]
def export(name,out):
    out=np.tanh(out);out*=.8/max(.8,float(np.max(np.abs(out))));path=Path('/private/tmp')/(name+'.wav')
    with wave.open(str(path),'wb') as w:
        w.setnchannels(2);w.setsampwidth(2);w.setframerate(rate);w.writeframes((out*32767).astype('<i2').tobytes())
    # Encode with: afconvert -f m4af -d 'aac ' -b 128000 <wav> <m4a>
    print('WAV:', path)
    print(name, 'seconds',len(out)/rate,'RMS',float(np.sqrt(np.mean(out*out))))
# A relaxed original 24-bar swing: warm electric piano voicings, plucked bass, brushes.
beat=60/76;bars=24;duration=bars*4*beat;out=np.zeros((int(duration*rate),2))
def note(midi,start,length,velocity,bass=False,pan=0):
    t=np.arange(int((length+1.0)*rate))/rate;f=440*2**((midi-69)/12)
    tone=sum(a*np.sin(2*np.pi*f*k*t)*np.exp(-t*(1.8 if bass else .85)*k) for k,a in [(1,1),(2,.26),(3,.08),(4,.035)])
    signal=tone*(1-np.exp(-t/.012))*np.minimum(1,np.maximum(0,(length+.8-t)/.8))*velocity
    idx=int(start*rate);channels=np.array([np.sqrt((1-pan)/2),np.sqrt((1+pan)/2)])
    for ch in range(2):np.add.at(out[:,ch],(idx+np.arange(len(t)))%len(out),signal*channels[ch])
chords=[(48,[60,64,67,71]),(45,[60,64,67,71]),(50,[60,65,69,72]),(43,[59,64,65,69]),(41,[57,60,64,67]),(46,[56,60,62,65]),(50,[57,60,65,69]),(43,[59,62,65,69])]
phrases=[[76,74,71,67],[72,71,67,64],[77,76,72,69],[74,71,69,67],[72,69,67,64],[74,72,68,65],[69,72,76,74],[71,69,67,62]]
for bar in range(bars):
    rootnote,chord=chords[bar%8];at=bar*4*beat
    for step,pitch in enumerate([rootnote,rootnote+7,rootnote+12,rootnote+7]):note(pitch,at+step*beat,beat*.72,.09,True,-.18)
    for offset in [.0,1.67,3.0]:
        for i,pitch in enumerate(chord):note(pitch,at+offset*beat+i*.012,beat*.9,.045,False,.12)
    for i,pitch in enumerate(phrases[bar%8]):note(pitch,at+[.67,1.0,2.67,3.5][i]*beat,beat*.55,.055,False,.08)
    for step in range(4):
        n=int(.27*rate);t=np.arange(n)/rate;noise=rng.normal(0,1,n);noise=np.convolve(noise,np.ones(5)/5,'same');signal=noise*np.exp(-t*18)*.027
        for ch in range(2):np.add.at(out[:,ch],(int((at+step*beat)*rate)+np.arange(n))%len(out),signal)
# Circular early reflections preserve a continuous loop tail.
for delay,gain in [(.047,.12),(.091,.09),(.163,.06)]:out+=np.roll(out[:,::-1],int(delay*rate),axis=0)*gain
export('rain-jazz',out)
# 48-second stereo surf with four soft gull phrases and scattered foam.
duration=48;n=duration*rate;t=np.arange(n)/rate;out=np.zeros((n,2))
for ch in range(2):
    noise=rng.normal(0,1,n);low=np.convolve(noise,np.ones(31)/31,'same');foam=np.convolve(noise,np.ones(5)/5,'same')
    swell=(.5+.5*np.sin(2*np.pi*t/8+ch*.4))**2
    out[:,ch]=low*(.18+.30*swell)+foam*.035*swell
for start in [3,15,29,40]:
    for call in range(3):
        length=.65+call*.1;ncall=int(length*rate);age=np.arange(ncall)/rate;u=age/length
        f=1050+580*np.sin(np.pi*u)**.7-310*u+30*np.sin(age*37)
        phase=2*np.pi*np.cumsum(f)/rate;env=np.sin(np.pi*u)**1.8
        cry=(np.sin(phase)+.27*np.sin(2*phase)+.1*np.sin(3*phase))*env*.027
        at=int((start+call*.95)*rate);out[at:at+ncall,0]+=cry*.75;out[at:at+ncall,1]+=cry
export('sun-coast',out)
