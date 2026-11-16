import * as T from 'three';
// A surrounding sky dome remains behind the windows as the indoor camera turns.
export function createEveningSky(scene:T.Scene){
 const material=new T.ShaderMaterial({side:T.BackSide,transparent:true,depthWrite:false,uniforms:{amount:{value:0}},vertexShader:`varying vec3 direction; void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`
 uniform float amount;varying vec3 direction;
 void main(){vec3 d=normalize(direction);float h=clamp(d.y*2.6,0.0,1.0);
 vec3 horizon=vec3(.96,.65,.42),middle=vec3(.66,.49,.61),zenith=vec3(.23,.29,.47);
 vec3 color=mix(horizon,middle,smoothstep(0.0,.45,h));color=mix(color,zenith,smoothstep(.35,1.0,h));
 float sun=pow(max(0.0,dot(d,normalize(vec3(-.65,.12,-1.0)))),180.0);color+=vec3(.25,.15,.045)*sun;
 float cloud=smoothstep(.78,.94,sin(d.x*13.0+d.z*8.0)*.15+sin(d.y*64.0)*.08+.73)*(1.0-smoothstep(.1,.7,h));color=mix(color,vec3(.91,.72,.65),cloud*.24);
 gl_FragColor=vec4(color,amount);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`});
 const dome=new T.Mesh(new T.SphereGeometry(60,32,20),material);dome.renderOrder=-10;dome.visible=false;scene.add(dome);
 return {update(inside:boolean,amount:number){dome.visible=inside&&amount>.005;material.uniforms.amount.value=amount},get visible(){return dome.visible}};
}
