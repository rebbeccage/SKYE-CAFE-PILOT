import * as T from 'three';
// Cache local composition only. World-space dirtiness must survive partial
// getWorldPosition/localToWorld queries (which clear an ancestor before render).
const tracked=new WeakSet<T.Object3D>();
export function cacheTransforms(root:T.Object3D){root.traverse(o=>{
 if(tracked.has(o))return;tracked.add(o);
 const p=new T.Vector3(Infinity,0,0),q=new T.Quaternion(),s=new T.Vector3();let parent=o.parent;
 const update=o.updateMatrix;
 o.updateMatrix=function(){
  if(!p.equals(this.position)||!q.equals(this.quaternion)||!s.equals(this.scale)){
   update.call(this);p.copy(this.position);q.copy(this.quaternion);s.copy(this.scale);
  }
  if(parent!==this.parent){parent=this.parent;this.matrixWorldNeedsUpdate=true;}
  // Propagate before Three.js consumes this flag, including into unqueried
  // siblings. Each child forwards it when visited; static branches stay cached.
  if(this.matrixWorldNeedsUpdate)for(const child of this.children)child.matrixWorldNeedsUpdate=true;
 };
});}
