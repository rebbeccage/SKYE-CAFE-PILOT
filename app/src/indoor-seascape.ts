import * as T from 'three';
// One weather/sea asset shared by the room windows and the surrounding island.
// Both domes use the same material and uniform objects; no independent weather state.
export function createIndoorSeascape(scene:T.Scene){
 const uniforms={time:{value:0},rain:{value:0},snow:{value:0},dusk:{value:0}};
 const mat=new T.ShaderMaterial({side:T.BackSide,depthWrite:false,toneMapped:false,uniforms,
 vertexShader:`varying vec3 ray;void main(){ray=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
 fragmentShader:`varying vec3 ray;uniform float time,rain,snow,dusk;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
 void main(){vec3 d=normalize(ray);float a=atan(d.z,d.x),h=d.y+.02,az=2.53073;
 vec3 horizon=vec3(.94,.88,.78),sky=vec3(.55,.73,.79);float weather=max(rain,snow);
 horizon=mix(horizon,vec3(.74,.79,.80),weather*.85);sky=mix(sky,vec3(.55,.63,.68),rain*.8);sky=mix(sky,vec3(.77,.82,.85),snow);
 float sunset=dusk*(1.-rain)*(1.-snow);
 horizon=mix(horizon,vec3(.94,.77,.65),sunset);sky=mix(sky,vec3(.49,.51,.65),sunset);
 vec3 col=mix(horizon,sky,smoothstep(0.,.65,h));
 float cloud=noise(vec2(a*7.,h*12.))+noise(vec2(a*15.,h*28.))*.35;
 float clouds=smoothstep(.72,.91,cloud)*smoothstep(.025,.15,h)*(1.-smoothstep(.35,.55,h));col=mix(col,vec3(.94,.94,.89),clouds*.58);
 // Continuous cylindrical noise coordinates: no atan seam and no camera anchoring.
 vec2 cp=d.xz*3.6;float cloudMass=noise(cp+vec2(h*2.,h*6.))* .62+noise(cp*2.1+vec2(h*3.,h*16.))*.28+noise(cp*5.+vec2(0.,h*31.))*.10;
 float veil=smoothstep(.35,.73,cloudMass)*smoothstep(.015,.12,h)*(1.-smoothstep(.48,.86,h));
 vec3 sunsetSky=mix(vec3(.95,.78,.66),vec3(.80,.63,.65),smoothstep(.0,.3,h));sunsetSky=mix(sunsetSky,vec3(.49,.51,.65),smoothstep(.24,.88,h));
 vec3 cloudColor=mix(vec3(.66,.57,.65),vec3(.96,.79,.69),smoothstep(.47,.77,cloudMass));
 sunsetSky=mix(sunsetSky,cloudColor,veil*.7);col=mix(col,sunsetSky,sunset);
 // Two irregular island silhouettes; soften through weather haze.
 float island1=.018+pow(max(0.,sin(a*2.+.8)),6.)*.044+noise(vec2(a*12.,2.))*.012;
 float island2=.008+pow(max(0.,sin(a*3.3+1.)),10.)*.034+noise(vec2(a*19.,4.))*.008;
 if(h<island1&&h>-.008)col=mix(col,mix(vec3(.55,.66,.64),horizon,.35+weather*.4),.72);
 if(h<island2&&h>-.008)col=mix(col,mix(vec3(.40,.57,.56),horizon,weather*.65),.65);
 if(h<-.008){float depth=clamp(-h*3.,0.,1.);col=mix(vec3(.40,.66,.66),vec3(.30,.55,.59),depth);
 float ripple=sin(h*380.+noise(vec2(a*25.,h*90.))*3.+time*.22)*.012;col+=ripple;
 float delta=atan(sin(a-az+h*.7),cos(a-az+h*.7));float glint=exp(-delta*delta/(.002+depth*.012))*(.2+.8*pow(max(0.,sin(h*520.+time*.14)),8.));col=mix(col,vec3(.92,.84,.63),glint*.46*(1.-weather));
 col=mix(col,vec3(.58,.67,.70),rain*.6);col=mix(col,vec3(.76,.81,.82),snow*.68);col=mix(col,vec3(.37,.45,.53),sunset*.35);}
 float grain=(noise(vec2(a*450.,h*350.))-.5)*.012;col+=grain;
 col=min(col,vec3(.9843,.9686,.9373));gl_FragColor=vec4(pow(max(col,vec3(0.)),vec3(2.2)),1.);
 #include <colorspace_fragment>
 }`});
 const dome=new T.Mesh(new T.SphereGeometry(70,48,24),mat);dome.position.y=2.4;dome.renderOrder=-20;dome.visible=false;dome.name='Indoor window sea and weather';scene.add(dome);
 const exteriorDome=new T.Mesh(new T.SphereGeometry(1500,48,24),mat);exteriorDome.name='Shared island sky';exteriorDome.renderOrder=-20;exteriorDome.position.y=2.4;scene.add(exteriorDome);
 return {uniforms,update(inside:boolean,t:number,wet:number,frost:number,night:number){dome.visible=inside;exteriorDome.visible=!inside;uniforms.time.value=t;uniforms.rain.value=wet;uniforms.snow.value=frost;uniforms.dusk.value=night;},diagnostics:()=>({visible:dome.visible,horizonOffset:.52,sunAzimuth:145,rain:uniforms.rain.value,snow:uniforms.snow.value,dusk:uniforms.dusk.value,sunset:uniforms.dusk.value*(1-uniforms.rain.value)*(1-uniforms.snow.value),worldAnchored:true})};
}
