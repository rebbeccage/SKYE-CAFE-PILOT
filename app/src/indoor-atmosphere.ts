import * as T from 'three';
export function createIndoorAtmosphere(scene:T.Scene){
 const group=new T.Group();group.visible=false;scene.add(group);
 const mist=new T.MeshBasicMaterial({color:0xffedc4,transparent:true,opacity:.018,depthWrite:false,side:T.DoubleSide,blending:T.AdditiveBlending});
 for(const z of [-1.15,.15,1.3]){const a=new T.Vector3(-2.65,3.05,z),b=new T.Vector3(.7,.9,z-.65),v=b.clone().sub(a);const beam=new T.Mesh(new T.CylinderGeometry(.11,.38,v.length(),20,1,true),mist);beam.position.copy(a).add(b).multiplyScalar(.5);beam.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),a.clone().sub(b).normalize());group.add(beam)}
 const values=new Float32Array(180*3);for(let i=0;i<180;i++)values.set([-2.3+Math.random()*3,.95+Math.random()*2.2,-1.5+Math.random()*2.9],i*3);
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(values,3));const points=new T.Points(geometry,new T.PointsMaterial({color:0xfff3d7,size:.006,transparent:true,opacity:.18,depthWrite:false,blending:T.AdditiveBlending}));group.add(points);
 return {update(inside:boolean,time:number,night:number,wet:number){group.visible=inside&&night<.98&&wet<.98;mist.opacity=.018*(1-night)*(1-wet);(points.material as T.PointsMaterial).opacity=.18*(1-night)*(1-wet);points.position.y=Math.sin(time*.12)*.035;points.rotation.y=Math.sin(time*.07)*.012}};
}
