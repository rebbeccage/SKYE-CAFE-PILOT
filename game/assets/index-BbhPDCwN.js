(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,O=1027,k=1028,A=1029,ee=1030,te=1031,ne=1033,j=33776,re=33777,M=33778,ie=33779,ae=35840,oe=35841,se=35842,N=35843,ce=36196,le=37492,P=37496,F=37488,ue=37489,de=37490,fe=37491,pe=37808,me=37809,he=37810,ge=37811,_e=37812,ve=37813,ye=37814,be=37815,xe=37816,Se=37817,Ce=37818,we=37819,Te=37820,Ee=37821,De=36492,Oe=36494,ke=36495,Ae=36283,je=36284,Me=36285,Ne=36286,I=2300,Pe=2301,Fe=2302,Ie=2303,L=2400,Le=2401,Re=2402,ze=3200,Be=`srgb`,Ve=`srgb-linear`,He=`linear`,Ue=`srgb`,We=7680,Ge=35044,Ke=2e3;function qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Je(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ye(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Xe(){let e=Ye(`canvas`);return e.style.display=`block`,e}var Ze={};function Qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function $e(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function et(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function tt(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function nt(...e){let t=e.join(` `);t in Ze||(Ze[t]=!0,et(...e))}function rt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var it={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},at=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ot=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),st=1234567,ct=Math.PI/180,lt=180/Math.PI;function ut(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ot[e&255]+ot[e>>8&255]+ot[e>>16&255]+ot[e>>24&255]+`-`+ot[t&255]+ot[t>>8&255]+`-`+ot[t>>16&15|64]+ot[t>>24&255]+`-`+ot[n&63|128]+ot[n>>8&255]+`-`+ot[n>>16&255]+ot[n>>24&255]+ot[r&255]+ot[r>>8&255]+ot[r>>16&255]+ot[r>>24&255]).toLowerCase()}function dt(e,t,n){return Math.max(t,Math.min(n,e))}function ft(e,t){return(e%t+t)%t}function pt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function mt(e,t,n){return e===t?0:(n-e)/(t-e)}function ht(e,t,n){return(1-n)*e+n*t}function gt(e,t,n,r){return ht(e,t,1-Math.exp(-n*r))}function _t(e,t=1){return t-Math.abs(ft(e,t*2)-t)}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function bt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function xt(e,t){return e+Math.random()*(t-e)}function St(e){return e*(.5-Math.random())}function Ct(e){e!==void 0&&(st=e);let t=st+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wt(e){return e*ct}function Tt(e){return e*lt}function Et(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Dt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ot(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function kt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:et(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function At(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function jt(e,t){if(t.constructor===Float32Array)return e;let n=At(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Mt(e,t){if(t.constructor===Float32Array)return e;let n=At(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var R={DEG2RAD:ct,RAD2DEG:lt,generateUUID:ut,clamp:dt,euclideanModulo:ft,mapLinear:pt,inverseLerp:mt,lerp:ht,damp:gt,pingpong:_t,smoothstep:vt,smootherstep:yt,randInt:bt,randFloat:xt,randFloatSpread:St,seededRandom:Ct,degToRad:wt,radToDeg:Tt,isPowerOfTwo:Et,ceilPowerOfTwo:Dt,floorPowerOfTwo:Ot,setQuaternionFromProperEuler:kt,normalize:Mt,denormalize:jt},z=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:et(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pt.copy(this).projectOnVector(e),this.sub(Pt)}reflect(e){return this.sub(Pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pt=new B,Ft=new Nt,It=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return nt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Lt.makeScale(e,t)),this}rotate(e){return nt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Lt.makeRotation(-e)),this}translate(e,t){return nt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Lt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lt=new It,Rt=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zt=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bt(){let e={enabled:!0,workingColorSpace:Ve,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ut(e.r),e.g=Ut(e.g),e.b=Ut(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?He:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ve]:{primaries:t,whitePoint:r,transfer:He,toXYZ:Rt,fromXYZ:zt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:Rt,fromXYZ:zt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),e}var Vt=Bt();function Ht(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ut(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Wt,Gt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wt===void 0&&(Wt=Ye(`canvas`)),Wt.width=e.width,Wt.height=e.height;let t=Wt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Wt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ye(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ht(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ht(t[e]/255)*255):t[e]=Ht(t[e]);return{data:t,width:e.width,height:e.height}}return et(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Kt=0,qt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kt++}),this.uuid=ut(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Jt(r[t].image)):e.push(Jt(r[t]))}else e=Jt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Jt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Gt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(et(`Texture: Unable to serialize Texture.`),{})}var Yt=0,Xt=new B,Zt=class e extends at{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yt++}),this.uuid=ut(),this.name=``,this.source=new qt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Xt).x}get height(){return this.source.getSize(Xt).y}get depth(){return this.source.getSize(Xt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?et(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null,Zt.DEFAULT_MAPPING=300,Zt.DEFAULT_ANISOTROPY=1;var Qt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$t=class extends at{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Zt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new qt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},en=class extends $t{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},tn=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},nn=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},rn=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/an.setFromMatrixColumn(e,0).length(),i=1/an.setFromMatrixColumn(e,1).length(),a=1/an.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sn,e,cn)}lookAt(e,t,n){let r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ln.crossVectors(n,dn),ln.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ln.crossVectors(n,dn)),ln.normalize(),un.crossVectors(dn,ln),r[0]=ln.x,r[4]=un.x,r[8]=dn.x,r[1]=ln.y,r[5]=un.y,r[9]=dn.y,r[2]=ln.z,r[6]=un.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],ne=r[3],j=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*k+c*ne,i[4]=a*S+o*E+s*A+c*j,i[8]=a*C+o*D+s*ee+c*re,i[12]=a*w+o*O+s*te+c*M,i[1]=l*x+u*T+d*k+f*ne,i[5]=l*S+u*E+d*A+f*j,i[9]=l*C+u*D+d*ee+f*re,i[13]=l*w+u*O+d*te+f*M,i[2]=p*x+m*T+h*k+g*ne,i[6]=p*S+m*E+h*A+g*j,i[10]=p*C+m*D+h*ee+g*re,i[14]=p*w+m*O+h*te+g*M,i[3]=_*x+v*T+y*k+b*ne,i[7]=_*S+v*E+y*A+b*j,i[11]=_*C+v*D+y*ee+b*re,i[15]=_*w+v*O+y*te+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=an.set(r[0],r[1],r[2]).length(),o=an.set(r[4],r[5],r[6]).length(),s=an.set(r[8],r[9],r[10]).length();i<0&&(a=-a),on.copy(this);let c=1/a,l=1/o,u=1/s;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=l,on.elements[5]*=l,on.elements[6]*=l,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,t.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},an=new B,on=new rn,sn=new B(0,0,0),cn=new B(1,1,1),ln=new B,un=new B,dn=new B,fn=new rn,pn=new Nt,mn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-dt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:et(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pn.setFromEuler(this),this.setFromQuaternion(pn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER=`XYZ`;var hn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},gn=0,_n=new B,vn=new Nt,yn=new rn,bn=new B,xn=new B,Sn=new B,Cn=new Nt,wn=new B(1,0,0),Tn=new B(0,1,0),En=new B(0,0,1),Dn={type:`added`},On={type:`removed`},kn={type:`childadded`,child:null},An={type:`childremoved`,child:null},jn=class e extends at{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gn++}),this.uuid=ut(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new mn,r=new Nt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rn},normalMatrix:{value:new It}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vn.setFromAxisAngle(e,t),this.quaternion.multiply(vn),this}rotateOnWorldAxis(e,t){return vn.setFromAxisAngle(e,t),this.quaternion.premultiply(vn),this}rotateX(e){return this.rotateOnAxis(wn,e)}rotateY(e){return this.rotateOnAxis(Tn,e)}rotateZ(e){return this.rotateOnAxis(En,e)}translateOnAxis(e,t){return _n.copy(e).applyQuaternion(this.quaternion),this.position.add(_n.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wn,e)}translateY(e){return this.translateOnAxis(Tn,e)}translateZ(e){return this.translateOnAxis(En,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bn.copy(e):bn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(xn,bn,this.up):yn.lookAt(bn,xn,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),vn.setFromRotationMatrix(yn),this.quaternion.premultiply(vn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(tt(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null):tt(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(On),An.child=e,this.dispatchEvent(An),An.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,e,Sn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,Cn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};jn.DEFAULT_UP=new B(0,1,0),jn.DEFAULT_MATRIX_AUTO_UPDATE=!0,jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=class extends jn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Nn={type:`move`},Pn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Ln={h:0,s:0,l:0};function Rn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var V=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Vt.workingColorSpace){if(e=ft(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Rn(i,r,e+1/3),this.g=Rn(i,r,e),this.b=Rn(i,r,e-1/3)}return Vt.colorSpaceToWorking(this,r),this}setStyle(e,t=Be){function n(t){t!==void 0&&parseFloat(t)<1&&et(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:et(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);et(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Be){let n=Fn[e.toLowerCase()];return n===void 0?et(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}copyLinearToSRGB(e){return this.r=Ut(e.r),this.g=Ut(e.g),this.b=Ut(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return Vt.workingToColorSpace(zn.copy(this),e),Math.round(dt(zn.r*255,0,255))*65536+Math.round(dt(zn.g*255,0,255))*256+Math.round(dt(zn.b*255,0,255))}getHexString(e=Be){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.workingToColorSpace(zn.copy(this),t);let n=zn.r,r=zn.g,i=zn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Vt.workingColorSpace){return Vt.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Be){Vt.workingToColorSpace(zn.copy(this),e);let t=zn.r,n=zn.g,r=zn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(Ln);let n=ht(In.h,Ln.h,t),r=ht(In.s,Ln.s,t),i=ht(In.l,Ln.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new V;V.NAMES=Fn;var Bn=class extends jn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new B,Hn=new B,Un=new B,Wn=new B,Gn=new B,Kn=new B,qn=new B,Jn=new B,Yn=new B,Xn=new B,Zn=new Qt,Qn=new Qt,$n=new Qt,er=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vn.subVectors(e,t),r.cross(Vn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Vn.subVectors(r,t),Hn.subVectors(n,t),Un.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(Hn),s=Vn.dot(Un),c=Hn.dot(Hn),l=Hn.dot(Un),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wn)!==null&&Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Wn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Wn.x),s.addScaledVector(a,Wn.y),s.addScaledVector(o,Wn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Zn.setScalar(0),Qn.setScalar(0),$n.setScalar(0),Zn.fromBufferAttribute(e,t),Qn.fromBufferAttribute(e,n),$n.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zn,i.x),a.addScaledVector(Qn,i.y),a.addScaledVector($n,i.z),a}static isFrontFacing(e,t,n,r){return Vn.subVectors(n,t),Hn.subVectors(e,t),Vn.cross(Hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Vn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Gn.subVectors(r,n),Kn.subVectors(i,n),Jn.subVectors(e,n);let s=Gn.dot(Jn),c=Kn.dot(Jn);if(s<=0&&c<=0)return t.copy(n);Yn.subVectors(e,r);let l=Gn.dot(Yn),u=Kn.dot(Yn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Gn,a);Xn.subVectors(e,i);let f=Gn.dot(Xn),p=Kn.dot(Xn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Kn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return qn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(qn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Gn,a).addScaledVector(Kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tr=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,rr):rr.fromBufferAttribute(r,t),rr.applyMatrix4(e.matrixWorld),this.expandByPoint(rr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),fr.subVectors(this.max,dr),ar.subVectors(e.a,dr),or.subVectors(e.b,dr),sr.subVectors(e.c,dr),cr.subVectors(or,ar),lr.subVectors(sr,or),ur.subVectors(ar,sr);let t=[0,-cr.z,cr.y,0,-lr.z,lr.y,0,-ur.z,ur.y,cr.z,0,-cr.x,lr.z,0,-lr.x,ur.z,0,-ur.x,-cr.y,cr.x,0,-lr.y,lr.x,0,-ur.y,ur.x,0];return!hr(t,ar,or,sr,fr)||(t=[1,0,0,0,1,0,0,0,1],!hr(t,ar,or,sr,fr))?!1:(pr.crossVectors(cr,lr),t=[pr.x,pr.y,pr.z],hr(t,ar,or,sr,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nr=[new B,new B,new B,new B,new B,new B,new B,new B],rr=new B,ir=new tr,ar=new B,or=new B,sr=new B,cr=new B,lr=new B,ur=new B,dr=new B,fr=new B,pr=new B,mr=new B;function hr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){mr.fromArray(e,a);let o=i.x*Math.abs(mr.x)+i.y*Math.abs(mr.y)+i.z*Math.abs(mr.z),s=t.dot(mr),c=n.dot(mr),l=r.dot(mr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var gr=new B,_r=new z,vr=0,yr=class extends at{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ge,this.updateRanges=[],this.gpuType=_,this.version=0,this._normalizationScale=e===void 0?void 0:At(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix4(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyNormalMatrix(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.transformDirection(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?jt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Mt(e,this.array):Math.round(e*t)}},br=class extends yr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},xr=class extends yr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Sr=class extends yr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cr=new tr,wr=new B,Tr=new B,Er=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Cr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(wr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Tr)),this.expandByPoint(wr.copy(e.center).sub(Tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dr=0,Or=new rn,kr=new jn,Ar=new B,jr=new tr,Mr=new tr,Nr=new B,Pr=class e extends at{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dr++}),this.uuid=ut(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(qe(e)?xr:br)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new It().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Or.makeRotationFromQuaternion(e),this.applyMatrix4(Or),this}rotateX(e){return Or.makeRotationX(e),this.applyMatrix4(Or),this}rotateY(e){return Or.makeRotationY(e),this.applyMatrix4(Or),this}rotateZ(e){return Or.makeRotationZ(e),this.applyMatrix4(Or),this}translate(e,t,n){return Or.makeTranslation(e,t,n),this.applyMatrix4(Or),this}scale(e,t,n){return Or.makeScale(e,t,n),this.applyMatrix4(Or),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Sr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&et(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)tt(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Nr.addVectors(this.boundingBox.min,jr.min),this.boundingBox.expandByPoint(Nr),Nr.addVectors(this.boundingBox.max,jr.max),this.boundingBox.expandByPoint(Nr)):(this.boundingBox.expandByPoint(jr.min),this.boundingBox.expandByPoint(jr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)tt(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(jr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Mr.setFromBufferAttribute(n),this.morphTargetsRelative?(Nr.addVectors(jr.min,Mr.min),jr.expandByPoint(Nr),Nr.addVectors(jr.max,Mr.max),jr.expandByPoint(Nr)):(jr.expandByPoint(Mr.min),jr.expandByPoint(Mr.max))}jr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Nr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Nr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Nr.fromBufferAttribute(a,t),o&&(Ar.fromBufferAttribute(e,t),Nr.add(Ar)),r=Math.max(r,n.distanceToSquared(Nr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new yr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let l=new B,u=new B,d=new B,f=new z,p=new z,m=new z,h=new B,g=new B;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new B,b=new B,x=new B,S=new B;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new yr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nr.fromBufferAttribute(e,t),Nr.normalize(),e.setXYZ(t,Nr.x,Nr.y,Nr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new yr(a,r,i)}if(this.index===null)return et(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Fr=new B,Ir=new B,Lr=new It,Rr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Fr.subVectors(n,t).cross(Ir.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Fr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lr.getNormalMatrix(e),r=this.coplanarPoint(Fr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zr=0,Br=class extends at{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zr++}),this.uuid=ut(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new V(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=We,this.stencilZFail=We,this.stencilZPass=We,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?et(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new V().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Rr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Vr=new B,Hr=new B,Ur=new B,Wr=new B,Gr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vr.copy(this.origin).addScaledVector(this.direction,t),Vr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Hr.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(Hr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Wr.dot(this.direction),s=-Wr.dot(Ur),c=Wr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Hr).addScaledVector(Ur,d),f}intersectSphere(e,t){if(e.radius<0)return null;Vr.subVectors(e.center,this.origin);let n=Vr.dot(this.direction),r=Vr.dot(Vr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,te,ne;if(y>=b&&y>=x?(w=s,D=u,A=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,te=_)):b>=x?(w=c,D=d,A=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,te=v)):(w=l,D=f,A=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,te=g)),w===0)return null;let j=S/w,re=C/w,M=1/w,ie=T-j*D,ae=E-re*D,oe=O-j*A,se=k-re*A,N=ee-j*ne,ce=te-re*ne,le=N*se-ce*oe,P=ie*ce-ae*N,F=oe*ae-se*ie;if(r){if(le<0||P<0||F<0)return null}else if((le<0||P<0||F<0)&&(le>0||P>0||F>0))return null;let ue=le+P+F;if(ue===0)return null;let de=M*(le*D+P*A+F*ne);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kr=class extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new V(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qr=new rn,Jr=new Gr,Yr=new Er,Xr=new B,Zr=new B,Qr=new B,$r=new B,ei=new B,ti=new B,ni=new B,ri=new B,ii=class extends jn{constructor(e=new Pr,t=new Kr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ti.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ei.fromBufferAttribute(s,e),a?ti.addScaledVector(ei,r):ti.addScaledVector(ei.sub(t),r))}t.add(ti)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Jr.copy(e.ray).recast(e.near),Yr.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Yr,Xr)===null||Jr.origin.distanceToSquared(Xr)>(e.far-e.near)**2)||(qr.copy(i).invert(),Jr.copy(e.ray).applyMatrix4(qr),(n.boundingBox===null||Jr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=oi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=oi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=oi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=oi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ai(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ri.copy(s),ri.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ri);return l<n.near||l>n.far?null:{distance:l,point:ri.clone(),object:e}}function oi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Zr),e.getVertexPosition(c,Qr),e.getVertexPosition(l,$r);let u=ai(e,t,n,r,Zr,Qr,$r,ni);if(u){let e=new B;er.getBarycoord(ni,Zr,Qr,$r,e),i&&(u.uv=er.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=er.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=er.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};er.getNormal(Zr,Qr,$r,t.normal),u.face=t,u.barycoord=e}return u}var si=class extends Zt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ci=class extends yr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},li=new rn,ui=new rn,di=[],fi=new tr,pi=new rn,mi=new ii,hi=new Er,gi=class extends ii{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,pi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,li),fi.copy(e.boundingBox).applyMatrix4(li),this.boundingBox.union(fi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,li),hi.copy(e.boundingSphere).applyMatrix4(li),this.boundingSphere.union(hi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(mi.geometry=this.geometry,mi.material=this.material,mi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hi.copy(this.boundingSphere),hi.applyMatrix4(n),e.ray.intersectsSphere(hi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,li),ui.multiplyMatrices(n,li),mi.matrixWorld=ui,mi.raycast(e,di);for(let e=0,n=di.length;e<n;e++){let n=di[e];n.instanceId=i,n.object=this,t.push(n)}di.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new si(new Float32Array(r*this.count),r,this.count,k,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_i=new Er,vi=new z(.5,.5),yi=new B,bi=class{constructor(e=new Rr,t=new Rr,n=new Rr,r=new Rr,i=new Rr,a=new Rr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ke,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476+vi.distanceTo(e.center),_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(yi.x=r.normal.x>0?e.max.x:e.min.x,yi.y=r.normal.y>0?e.max.y:e.min.y,yi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xi=new rn,Si=class e{constructor(){this.coordinateSystem=Ke,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];xi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new bi),n[e].setFromProjectionMatrix(xi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new bi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Ci=class extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new V(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wi=new B,Ti=new B,Ei=new rn,Di=new Gr,Oi=new Er,ki=new B,Ai=new B,ji=class extends jn{constructor(e=new Pr,t=new Ci){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)wi.fromBufferAttribute(t,e-1),Ti.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=wi.distanceTo(Ti);e.setAttribute(`lineDistance`,new Sr(n,1))}else et(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere),Oi.applyMatrix4(r),Oi.radius+=i,e.ray.intersectsSphere(Oi)===!1)return;Ei.copy(r).invert(),Di.copy(e.ray).applyMatrix4(Ei);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Mi(this,e,Di,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Mi(this,e,Di,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Mi(this,e,Di,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Mi(this,e,Di,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Mi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(wi.fromBufferAttribute(s,i),Ti.fromBufferAttribute(s,a),n.distanceSqToSegment(wi,Ti,ki,Ai)>r)return;ki.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ki);if(!(c<t.near||c>t.far))return{distance:c,point:Ai.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ni=new B,Pi=new B,Fi=class extends ji{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Ni.fromBufferAttribute(t,e),Pi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Ni.distanceTo(Pi);e.setAttribute(`lineDistance`,new Sr(n,1))}else et(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ii=class extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new V(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Li=new rn,Ri=new Gr,zi=new Er,Bi=new B,Vi=class extends jn{constructor(e=new Pr,t=new Ii){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zi.copy(n.boundingSphere),zi.applyMatrix4(r),zi.radius+=i,e.ray.intersectsSphere(zi)===!1)return;Li.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(Li);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Bi.fromBufferAttribute(l,n),Hi(Bi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Bi.fromBufferAttribute(l,a),Hi(Bi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Hi(e,t,n,r,i,a,o){let s=Ri.distanceSqToPoint(e);if(s<n){let n=new B;Ri.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ui=class extends Zt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wi=class extends Zt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gi=class extends Zt{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ki=class extends Gi{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},qi=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ji=class e extends Pr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Sr(c,3)),this.setAttribute(`normal`,new Sr(l,3)),this.setAttribute(`uv`,new Sr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Yi=class e extends Pr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Sr(a,3)),this.setAttribute(`normal`,new Sr(o,3)),this.setAttribute(`uv`,new Sr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xi=class e extends Pr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Sr(u,3)),this.setAttribute(`normal`,new Sr(d,3)),this.setAttribute(`uv`,new Sr(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zi=class e extends Xi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new z:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,r=[],i=[],a=[],o=new B,s=new rn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(dt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(dt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},$i=class extends Qi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new z){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ea=class extends $i{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function ta(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var na=new B,ra=new B,ia=new ta,aa=new ta,oa=new ta,sa=class extends Qi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ra.subVectors(r[0],r[1]).add(r[0]),c=ra);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(na.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=na),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ia.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),aa.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),oa.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ia.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),aa.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),oa.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ia.calc(s),aa.calc(s),oa.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ca(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function la(e,t){let n=1-e;return n*n*t}function ua(e,t){return 2*(1-e)*e*t}function da(e,t){return e*e*t}function fa(e,t,n,r){return la(e,t)+ua(e,n)+da(e,r)}function pa(e,t){let n=1-e;return n*n*n*t}function ma(e,t){let n=1-e;return 3*n*n*e*t}function ha(e,t){return 3*(1-e)*e*e*t}function ga(e,t){return e*e*e*t}function _a(e,t,n,r,i){return pa(e,t)+ma(e,n)+ha(e,r)+ga(e,i)}var va=class extends Qi{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(_a(e,r.x,i.x,a.x,o.x),_a(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ya=class extends Qi{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(_a(e,r.x,i.x,a.x,o.x),_a(e,r.y,i.y,a.y,o.y),_a(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ba=class extends Qi{constructor(e=new z,t=new z){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Qi{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends Qi{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(fa(e,r.x,i.x,a.x),fa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends Qi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(fa(e,r.x,i.x,a.x),fa(e,r.y,i.y,a.y),fa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends Qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new z){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ca(o,s.x,c.x,l.x,u.x),ca(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this}},Ta=Object.freeze({__proto__:null,ArcCurve:ea,CatmullRomCurve3:sa,CubicBezierCurve:va,CubicBezierCurve3:ya,EllipseCurve:$i,LineCurve:ba,LineCurve3:xa,QuadraticBezierCurve:Sa,QuadraticBezierCurve3:Ca,SplineCurve:wa}),Ea=class extends Qi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Ta[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Ta[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Da=class extends Ea{constructor(e){super(),this.type=`Path`,this.currentPoint=new z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ba(this.currentPoint.clone(),new z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Sa(this.currentPoint.clone(),new z(e,t),new z(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new va(this.currentPoint.clone(),new z(e,t),new z(n,r),new z(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new wa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new $i(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Oa=class extends Da{constructor(e){super(e),this.uuid=ut(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Da().fromJSON(n))}return this}};function ka(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Aa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=La(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ma(a,o,n,s,c,l,0),o}function Aa(e,t,n,r,i){let a;if(i===so(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=io(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=io(i/r|0,e[i],e[i+1],a);return a&&Xa(a,a.next)&&(ao(a),a=a.next),a}function ja(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Xa(n,n.next)||Ya(n.prev,n,n.next)===0)){if(ao(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ma(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ha(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Pa(e,r,i,a):Na(e))t.push(c.i,e.i,l.i),ao(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Fa(ja(e),t),Ma(e,t,n,r,i,a,2)):o===2&&Ia(e,t,n,r,i,a):Ma(ja(e),t,n,r,i,a,1);break}}}function Na(e){let t=e.prev,n=e,r=e.next;if(Ya(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&qa(i,s,a,c,o,l,m.x,m.y)&&Ya(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Pa(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ya(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Wa(p,m,t,n,r),v=Wa(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&qa(s,u,c,d,l,f,y.x,y.y)&&Ya(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&qa(s,u,c,d,l,f,b.x,b.y)&&Ya(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&qa(s,u,c,d,l,f,y.x,y.y)&&Ya(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&qa(s,u,c,d,l,f,b.x,b.y)&&Ya(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Fa(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Xa(r,i)&&Za(r,n,n.next,i)&&to(r,i)&&to(i,r)&&(t.push(r.i,n.i,i.i),ao(n),ao(n.next),n=e=i),n=n.next}while(n!==e);return ja(n)}function Ia(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ja(o,e)){let s=ro(o,e);o=ja(o,o.next),s=ja(s,s.next),Ma(o,t,n,r,i,a,0),Ma(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function La(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Aa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ga(o))}i.sort(Ra);for(let e=0;e<i.length;e++)n=za(i[e],n);return n}function Ra(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function za(e,t){let n=Ba(e,t);if(!n)return t;let r=ro(n,e);return ja(r,r.next),ja(n,n.next)}function Ba(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Xa(e,n))return n;do{if(Xa(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Ka(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);to(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Va(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Va(e,t){return Ya(e.prev,e,t.prev)<0&&Ya(t.next,e,e.next)<0}function Ha(e,t,n,r){let i=e;do i.z===0&&(i.z=Wa(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ua(i)}function Ua(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Wa(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ga(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ka(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function qa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Ka(e,t,n,r,i,a,o,s)}function Ja(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!eo(e,t)&&(to(e,t)&&to(t,e)&&no(e,t)&&(Ya(e.prev,e,t.prev)||Ya(e,t.prev,t))||Xa(e,t)&&Ya(e.prev,e,e.next)>0&&Ya(t.prev,t,t.next)>0)}function Ya(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Xa(e,t){return e.x===t.x&&e.y===t.y}function Za(e,t,n,r){let i=$a(Ya(e,t,n)),a=$a(Ya(e,t,r)),o=$a(Ya(n,r,e)),s=$a(Ya(n,r,t));return!!(i!==a&&o!==s||i===0&&Qa(e,n,t)||a===0&&Qa(e,r,t)||o===0&&Qa(n,e,r)||s===0&&Qa(n,t,r))}function Qa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function $a(e){return e>0?1:e<0?-1:0}function eo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Za(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function to(e,t){return Ya(e.prev,e,e.next)<0?Ya(e,t,e.next)>=0&&Ya(e,e.prev,t)>=0:Ya(e,t,e.prev)<0||Ya(e,e.next,t)<0}function no(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ro(e,t){let n=oo(e.i,e.x,e.y),r=oo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function io(e,t,n,r){let i=oo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ao(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function oo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function so(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var co=class{static triangulate(e,t,n=2){return ka(e,t,n)}},lo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];uo(e),fo(n,e);let a=e.length;t.forEach(uo);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,fo(n,t[e]);let o=co.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function uo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function fo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var po=class e extends Pr{constructor(e=new Oa([new z(.5,.5),new z(-.5,.5),new z(-.5,-.5),new z(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Sr(r,3)),this.setAttribute(`uv`,new Sr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?mo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new B,b=new B,x=new B}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!lo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];lo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||tt(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new z(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new z(r/a,i/a)}let ee=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),ee[e]=A(D[e],D[n],D[r]);let te=[],ne,j=ee.concat();for(let e=0,t=E;e<t;e++){let t=w[e];ne=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),ne[e]=A(t[e],t[r],t[i]);te.push(ne),j=j.concat(ne)}let re;if(p===0)re=lo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],ee[t],a);N(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];ne=te[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],ne[e],a);N(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}re=lo.triangulateShape(e,t)}let M=re.length,ie=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],j[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),N(x.x,x.y,x.z)):N(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],j[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),N(x.x,x.y,x.z)):N(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],ee[e],r);N(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ne=te[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],ne[e],r);_?N(i.x,i.y+g[s-1].y,g[s-1].x+n):N(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<M;e++){let n=re[e];ce(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<M;e++){let n=re[e];ce(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<M;e++){let t=re[e];ce(t[2],t[1],t[0])}for(let e=0;e<M;e++){let t=re[e];ce(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);le(t+r+n,t+i+n,t+i+a,t+r+a)}}}function N(e,t,n){a.push(e),a.push(t),a.push(n)}function ce(e,t,i){P(e),P(t),P(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);F(o[0]),F(o[1]),F(o[2])}function le(e,t,i,a){P(e),P(t),P(a),P(t),P(i),P(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);F(s[0]),F(s[1]),F(s[3]),F(s[1]),F(s[2]),F(s[3])}function P(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function F(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ho(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ta[i.type]().fromJSON(i)),new e(r,t.options)}},mo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new z(a,o),new z(s,c),new z(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new z(o,1-c),new z(l,1-d),new z(f,1-m),new z(h,1-_)]:[new z(s,1-c),new z(u,1-d),new z(p,1-m),new z(g,1-_)]}};function ho(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var go=class e extends Pr{constructor(e=[new z(0,-.5),new z(.5,0),new z(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=dt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new B,d=new z,f=new B,p=new B,m=new B,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Sr(a,3)),this.setAttribute(`uv`,new Sr(o,2)),this.setAttribute(`normal`,new Sr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},_o=class e extends Pr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Sr(p,3)),this.setAttribute(`normal`,new Sr(m,3)),this.setAttribute(`uv`,new Sr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},vo=class e extends Pr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new B,p=new z;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Sr(s,3)),this.setAttribute(`normal`,new Sr(c,3)),this.setAttribute(`uv`,new Sr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},yo=class e extends Pr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Sr(p,3)),this.setAttribute(`normal`,new Sr(m,3)),this.setAttribute(`uv`,new Sr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},bo=class e extends Pr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new B,f=new B,p=new B;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Sr(c,3)),this.setAttribute(`normal`,new Sr(l,3)),this.setAttribute(`uv`,new Sr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},xo=class e extends Pr{constructor(e=new Ca(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,s=new B,c=new z,l=new B,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Sr(u,3)),this.setAttribute(`normal`,new Sr(d,3)),this.setAttribute(`uv`,new Sr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Ta[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function So(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(wo(i))i.isRenderTargetTexture?(et(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(wo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Co(e){let t={};for(let n=0;n<e.length;n++){let r=So(e[n]);for(let e in r)t[e]=r[e]}return t}function wo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function To(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Eo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}var Do={clone:So,merge:Co},Oo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ko=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ao=class extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oo,this.fragmentShader=ko,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=To(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new V().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Qt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new It().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new rn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jo=class extends Ao{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Mo=class extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new V(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new V(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},No=class extends Mo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new V(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new V(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new V(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return nt(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){nt(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Po=class extends Br{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Fo=class extends Br{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new V(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new V(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Io=class extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ze,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Lo=class extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ro(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function zo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Bo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Vo=class extends Bo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:L,endingEnd:L}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Le:i=e,o=2*t-n;break;case Re:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Le:a=e,s=2*n-t;break;case Re:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ho=class extends Bo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Uo=class extends Bo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wo=class extends Bo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=qo(n,t,g,y,r);i[p]=Go(x,o,_,b,m)}return i}};function Go(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ko(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function qo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Go(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ko(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Jo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ro(t,this.TimeBufferType),this.values=Ro(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ro(e.times,Array),values:Ro(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),zo(e.settings)&&(n.settings={inTangents:Ro(e.settings.inTangents,Array),outTangents:Ro(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case I:t=this.InterpolantFactoryMethodDiscrete;break;case Pe:t=this.InterpolantFactoryMethodLinear;break;case Fe:t=this.InterpolantFactoryMethodSmooth;break;case Ie:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return et(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return I;case this.InterpolantFactoryMethodLinear:return Pe;case this.InterpolantFactoryMethodSmooth:return Fe;case this.InterpolantFactoryMethodBezier:return Ie}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;zo(this.settings)&&(Yo(this.settings.inTangents,e),Yo(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;zo(this.settings)&&(Xo(this.settings.inTangents,e),Xo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(tt(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){tt(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){tt(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Je(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){tt(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,zo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Yo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Xo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Jo.prototype.ValueTypeName=``,Jo.prototype.TimeBufferType=Float32Array,Jo.prototype.ValueBufferType=Float32Array,Jo.prototype.DefaultInterpolation=Pe;var Zo=class extends Jo{constructor(e,t,n){super(e,t,n)}};Zo.prototype.ValueTypeName=`bool`,Zo.prototype.ValueBufferType=Array,Zo.prototype.DefaultInterpolation=I,Zo.prototype.InterpolantFactoryMethodLinear=void 0,Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends Jo{constructor(e,t,n,r){super(e,t,n,r)}};Qo.prototype.ValueTypeName=`color`;var $o=class extends Jo{constructor(e,t,n,r){super(e,t,n,r)}};$o.prototype.ValueTypeName=`number`;var es=class extends Bo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Nt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ts=class extends Jo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new es(this.times,this.values,this.getValueSize(),e)}};ts.prototype.ValueTypeName=`quaternion`,ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Jo{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName=`string`,ns.prototype.ValueBufferType=Array,ns.prototype.DefaultInterpolation=I,ns.prototype.InterpolantFactoryMethodLinear=void 0,ns.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Jo{constructor(e,t,n,r){super(e,t,n,r)}};rs.prototype.ValueTypeName=`vector`;var is=class extends jn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new V(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},as=class extends is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(jn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new V(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},os=new rn,ss=new B,cs=new B,ls=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bi,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ss.setFromMatrixPosition(e.matrixWorld),t.position.copy(ss),cs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){os.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(os,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(os)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},us=new B,ds=new Nt,fs=new B,ps=class extends jn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(us,ds,fs),fs.x===1&&fs.y===1&&fs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,ds,fs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(us,ds,fs),fs.x===1&&fs.y===1&&fs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,ds,fs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new B,hs=new z,gs=new z,_s=class extends ps{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ct*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lt*2*Math.atan(Math.tan(ct*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,hs,gs),t.subVectors(gs,hs)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ct*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vs=class extends ls{constructor(){super(new _s(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=lt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ys=class extends is{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(jn.DEFAULT_UP),this.updateMatrix(),this.target=new jn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new vs}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},bs=class extends ls{constructor(){super(new _s(90,1,.5,500)),this.isPointLightShadow=!0}},xs=class extends is{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new bs}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ss=class extends ps{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cs=class extends ls{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(jn.DEFAULT_UP),this.updateMatrix(),this.target=new jn,this.shadow=new Cs}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ts=-90,Es=1,Ds=class extends jn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new _s(Ts,Es,e,t);r.layers=this.layers,this.add(r);let i=new _s(Ts,Es,e,t);i.layers=this.layers,this.add(i);let a=new _s(Ts,Es,e,t);a.layers=this.layers,this.add(a);let o=new _s(Ts,Es,e,t);o.layers=this.layers,this.add(o);let s=new _s(Ts,Es,e,t);s.layers=this.layers,this.add(s);let c=new _s(Ts,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Os=class extends _s{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ks=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=As.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function As(){this._document.hidden===!1&&this.reset()}var js=`\\[\\]\\.:\\/`,Ms=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ns=`[^\\[\\]\\.:\\/]`,Ps=`[^`+js.replace(`\\.`,``)+`]`,Fs=`((?:WC+[\\/:])*)`.replace(`WC`,Ns),Is=`(WCOD+)?`.replace(`WCOD`,Ps),Ls=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ns),Rs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ns),zs=RegExp(`^`+Fs+Is+Ls+Rs+`$`),Bs=[`material`,`materials`,`bones`,`map`],Vs=class{constructor(e,t,n){let r=n||Hs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Hs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ms,``)}static parseTrackName(e){let t=zs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Bs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){et(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){tt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){tt(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){tt(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){tt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){tt(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){tt(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){tt(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;tt(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){tt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){tt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Hs.Composite=Vs,Hs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Hs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Hs.prototype.GetterByBindingType=[Hs.prototype._getValue_direct,Hs.prototype._getValue_array,Hs.prototype._getValue_arrayElement,Hs.prototype._getValue_toArray],Hs.prototype.SetterByBindingTypeAndVersioning=[[Hs.prototype._setValue_direct,Hs.prototype._setValue_direct_setNeedsUpdate,Hs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Hs.prototype._setValue_array,Hs.prototype._setValue_array_setNeedsUpdate,Hs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Hs.prototype._setValue_arrayElement,Hs.prototype._setValue_arrayElement_setNeedsUpdate,Hs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Hs.prototype._setValue_fromArray,Hs.prototype._setValue_fromArray_setNeedsUpdate,Hs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Us=new rn,Ws=class{constructor(e,t,n=0,r=1/0){this.ray=new Gr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new hn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Us.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Us),this}intersectObject(e,t=!0,n=[]){return Ks(e,this,n,t),n.sort(Gs),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Ks(e[r],this,n,t);return n.sort(Gs),n}};function Gs(e,t){return e.distance-t.distance}function Ks(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Ks(r[e],t,n,!0)}}var qs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=dt(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Js=class extends at{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ys(e,t,n,r){let i=Xs(r);switch(n){case w:return e*t;case k:return e*t/i.components*i.byteLength;case A:return e*t/i.components*i.byteLength;case ee:return e*t*2/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case j:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case N:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case ce:case le:case F:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case De:case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Xs(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?et(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Zs(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Qs(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var $s={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},H={common:{diffuse:{value:new V(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new V(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new V(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new V(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},ec={basic:{uniforms:Co([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.fog]),vertexShader:$s.meshbasic_vert,fragmentShader:$s.meshbasic_frag},lambert:{uniforms:Co([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new V(0)},envMapIntensity:{value:1}}]),vertexShader:$s.meshlambert_vert,fragmentShader:$s.meshlambert_frag},phong:{uniforms:Co([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new V(0)},specular:{value:new V(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$s.meshphong_vert,fragmentShader:$s.meshphong_frag},standard:{uniforms:Co([H.common,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.roughnessmap,H.metalnessmap,H.fog,H.lights,{emissive:{value:new V(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$s.meshphysical_vert,fragmentShader:$s.meshphysical_frag},toon:{uniforms:Co([H.common,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.gradientmap,H.fog,H.lights,{emissive:{value:new V(0)}}]),vertexShader:$s.meshtoon_vert,fragmentShader:$s.meshtoon_frag},matcap:{uniforms:Co([H.common,H.bumpmap,H.normalmap,H.displacementmap,H.fog,{matcap:{value:null}}]),vertexShader:$s.meshmatcap_vert,fragmentShader:$s.meshmatcap_frag},points:{uniforms:Co([H.points,H.fog]),vertexShader:$s.points_vert,fragmentShader:$s.points_frag},dashed:{uniforms:Co([H.common,H.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$s.linedashed_vert,fragmentShader:$s.linedashed_frag},depth:{uniforms:Co([H.common,H.displacementmap]),vertexShader:$s.depth_vert,fragmentShader:$s.depth_frag},normal:{uniforms:Co([H.common,H.bumpmap,H.normalmap,H.displacementmap,{opacity:{value:1}}]),vertexShader:$s.meshnormal_vert,fragmentShader:$s.meshnormal_frag},sprite:{uniforms:Co([H.sprite,H.fog]),vertexShader:$s.sprite_vert,fragmentShader:$s.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$s.background_vert,fragmentShader:$s.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:$s.backgroundCube_vert,fragmentShader:$s.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$s.cube_vert,fragmentShader:$s.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$s.equirect_vert,fragmentShader:$s.equirect_frag},distance:{uniforms:Co([H.common,H.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$s.distance_vert,fragmentShader:$s.distance_frag},shadow:{uniforms:Co([H.lights,H.fog,{color:{value:new V(0)},opacity:{value:1}}]),vertexShader:$s.shadow_vert,fragmentShader:$s.shadow_frag}};ec.physical={uniforms:Co([ec.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new It},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new V(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new V(0)},specularColor:{value:new V(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:$s.meshphysical_vert,fragmentShader:$s.meshphysical_frag};var tc={r:0,b:0,g:0},nc=new rn,rc=new It;rc.set(-1,0,0,0,1,0,0,0,1);function ic(e,t,n,r,i,a){let o=new V(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new ii(new Ji(1,1,1),new Ao({name:`BackgroundCubeMaterial`,uniforms:So(ec.backgroundCube.uniforms),vertexShader:ec.backgroundCube.vertexShader,fragmentShader:ec.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(nc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(rc),l.material.toneMapped=Vt.getTransfer(i.colorSpace)!==Ue,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ii(new _o(2,2),new Ao({name:`BackgroundMaterial`,uniforms:So(ec.background.uniforms),vertexShader:ec.background.vertexShader,fragmentShader:ec.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(i.colorSpace)!==Ue,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(tc,Eo(e)),n.buffers.color.setClear(tc.r,tc.g,tc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ac(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function oc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function sc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(et(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&et(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&et(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function cc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Rr,s=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var lc=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ui(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ji(5,5,5),i=new Ao({name:`CubemapFromEquirect`,uniforms:So(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ii(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new Ds(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},uc=256,dc=3,fc=20,pc=256,mc=16,hc=3,gc=new B,_c=new V,vc=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ds(1,10,null),this._boxMesh=new ii(new Ji(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=gc}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(_c));let h=new Ds(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(uc,Ot(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?uc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=yc(e,!1,!1),n=Math.log2(e)-dc;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=xc(),this._integrationMaterial=Sc());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/mc);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-hc)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(pc*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Cc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function yc(e,t,n){return new lc(e,{minFilter:u,generateMipmaps:t,type:v,colorSpace:Ve,depthBuffer:n})}function bc(e,t,n){return new Ao({name:e,uniforms:t,vertexShader:$s.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function xc(){return bc(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${pc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Sc(){return bc(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Cc(){return bc(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fc}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function wc(){return bc(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Tc(){return bc(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ec(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new lc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new vc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new vc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Dc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&nt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Oc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?xr:br)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function kc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ac(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:tt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function jc(e,t,n){let r=new WeakMap,i=new Qt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new tn(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Mc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Nc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Pc(e,t,n,r,i,a){let o=new en(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Pr;u.setAttribute(`position`,new Sr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Sr([0,2,0,0,2,0],2));let d=new jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ii(u,d),p=new Ss(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,y=null,b=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,S=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&s===null&&(s=new en(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}),c=new en(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&b.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Gi(t,n),a===!0&&(l.format=O,l.type=x)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<b.length;e++){let i=b[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Vt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Nc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(f,p),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Fc=new Zt,Ic=new Gi(1,1),Lc=new Ki(1),Rc=new tn,zc=new nn,Bc=new Ui,Vc=[],Hc=[],Uc=new Float32Array(16),Wc=new Float32Array(9),Gc=new Float32Array(4);function Kc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Vc[i];if(a===void 0&&(a=new Float32Array(i),Vc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function qc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Jc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Yc(e,t){let n=Hc[t];n===void 0&&(n=new Int32Array(t),Hc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Xc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qc(n,t))return;e.uniform2fv(this.addr,t),Jc(n,t)}}function Qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(qc(n,t))return;e.uniform3fv(this.addr,t),Jc(n,t)}}function $c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qc(n,t))return;e.uniform4fv(this.addr,t),Jc(n,t)}}function el(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Jc(n,t)}else{if(qc(n,r))return;Gc.set(r),e.uniformMatrix2fv(this.addr,!1,Gc),Jc(n,r)}}function tl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Jc(n,t)}else{if(qc(n,r))return;Wc.set(r),e.uniformMatrix3fv(this.addr,!1,Wc),Jc(n,r)}}function nl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Jc(n,t)}else{if(qc(n,r))return;Uc.set(r),e.uniformMatrix4fv(this.addr,!1,Uc),Jc(n,r)}}function rl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qc(n,t))return;e.uniform2iv(this.addr,t),Jc(n,t)}}function al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qc(n,t))return;e.uniform3iv(this.addr,t),Jc(n,t)}}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qc(n,t))return;e.uniform4iv(this.addr,t),Jc(n,t)}}function sl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function cl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qc(n,t))return;e.uniform2uiv(this.addr,t),Jc(n,t)}}function ll(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qc(n,t))return;e.uniform3uiv(this.addr,t),Jc(n,t)}}function ul(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qc(n,t))return;e.uniform4uiv(this.addr,t),Jc(n,t)}}function dl(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function fl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?dl(Ic):Fc,n.setTexture2D(t||a,i)}function pl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||zc,i)}function ml(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?dl(Lc):Bc,n.setTextureCube(t||a,i)}function hl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Rc,i)}function gl(e){switch(e){case 5126:return Xc;case 35664:return Zc;case 35665:return Qc;case 35666:return $c;case 35674:return el;case 35675:return tl;case 35676:return nl;case 5124:case 35670:return rl;case 35667:case 35671:return il;case 35668:case 35672:return al;case 35669:case 35673:return ol;case 5125:return sl;case 36294:return cl;case 36295:return ll;case 36296:return ul;case 35678:case 36198:case 36298:case 36306:case 35682:return fl;case 35679:case 36299:case 36307:return pl;case 35680:case 36300:case 36308:case 36293:return ml;case 36289:case 36303:case 36311:case 36292:return hl}}function _l(e,t){e.uniform1fv(this.addr,t)}function vl(e,t){let n=Kc(t,this.size,2);e.uniform2fv(this.addr,n)}function yl(e,t){let n=Kc(t,this.size,3);e.uniform3fv(this.addr,n)}function bl(e,t){let n=Kc(t,this.size,4);e.uniform4fv(this.addr,n)}function xl(e,t){let n=Kc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Sl(e,t){let n=Kc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Cl(e,t){let n=Kc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function wl(e,t){e.uniform1iv(this.addr,t)}function Tl(e,t){e.uniform2iv(this.addr,t)}function El(e,t){e.uniform3iv(this.addr,t)}function Dl(e,t){e.uniform4iv(this.addr,t)}function Ol(e,t){e.uniform1uiv(this.addr,t)}function kl(e,t){e.uniform2uiv(this.addr,t)}function Al(e,t){e.uniform3uiv(this.addr,t)}function jl(e,t){e.uniform4uiv(this.addr,t)}function Ml(e,t,n){let r=this.cache,i=t.length,a=Yc(n,i);qc(r,a)||(e.uniform1iv(this.addr,a),Jc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?dl(Ic):Fc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Nl(e,t,n){let r=this.cache,i=t.length,a=Yc(n,i);qc(r,a)||(e.uniform1iv(this.addr,a),Jc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||zc,a[e])}function Pl(e,t,n){let r=this.cache,i=t.length,a=Yc(n,i);qc(r,a)||(e.uniform1iv(this.addr,a),Jc(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?dl(Lc):Bc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Fl(e,t,n){let r=this.cache,i=t.length,a=Yc(n,i);qc(r,a)||(e.uniform1iv(this.addr,a),Jc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Rc,a[e])}function Il(e){switch(e){case 5126:return _l;case 35664:return vl;case 35665:return yl;case 35666:return bl;case 35674:return xl;case 35675:return Sl;case 35676:return Cl;case 5124:case 35670:return wl;case 35667:case 35671:return Tl;case 35668:case 35672:return El;case 35669:case 35673:return Dl;case 5125:return Ol;case 36294:return kl;case 36295:return Al;case 36296:return jl;case 35678:case 36198:case 36298:case 36306:case 35682:return Ml;case 35679:case 36299:case 36307:return Nl;case 35680:case 36300:case 36308:case 36293:return Pl;case 36289:case 36303:case 36311:case 36292:return Fl}}var Ll=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gl(t.type)}},Rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Il(t.type)}},zl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Bl=/(\w+)(\])?(\[|\.)?/g;function Vl(e,t){e.seq.push(t),e.map[t.id]=t}function Hl(e,t,n){let r=e.name,i=r.length;for(Bl.lastIndex=0;;){let a=Bl.exec(r),o=Bl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Vl(n,l===void 0?new Ll(s,e,t):new Rl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new zl(s),Vl(n,e)),n=e}}}var Ul=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Hl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Wl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Gl=37297,Kl=0;function ql(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Jl=new It;function Yl(e){Vt._getMatrix(Jl,Vt.workingColorSpace,e);let t=`mat3( ${Jl.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(e)){case He:return[t,`LinearTransferOETF`];case Ue:return[t,`sRGBTransferOETF`];default:return et(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Xl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ql(e.getShaderSource(t),r)}return i}function Zl(e,t){let n=Yl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Ql={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function $l(e,t){let n=Ql[t];return n===void 0?(et(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var eu=new B;function tu(){return Vt.getLuminanceCoefficients(eu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${eu.x.toFixed(4)}, ${eu.y.toFixed(4)}, ${eu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function nu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(au).join(`
`)}function ru(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function iu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function au(e){return e!==``}function ou(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function su(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cu=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(e){return e.replace(cu,uu)}function uu(e,t){let n=$s[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return lu(n)}var du=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(e){return e.replace(du,pu)}function pu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function mu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var hu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function gu(e){return hu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var _u={302:`ENVMAP_MODE_REFRACTION`};function vu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:_u[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var yu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function bu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:yu[e.combine]||`ENVMAP_BLENDING_NONE`}function xu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=gu(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=vu(n),d=bu(n),f=nu(n),p=ru(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(au).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(au).join(`
`),g.length>0&&(g+=`
`)):(h=[mu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(au).join(`
`),g=[mu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:$s.tonemapping_pars_fragment,n.toneMapping===0?``:$l(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,$s.colorspace_pars_fragment,Zl(`linearToOutputTexel`,n.outputColorSpace),tu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(au).join(`
`)),o=lu(o),o=ou(o,n),o=su(o,n),s=lu(s),s=ou(s,n),s=su(s,n),o=fu(o),s=fu(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Wl(i,i.VERTEX_SHADER,v),x=Wl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Xl(i,b,`vertex`),n=Xl(i,x,`fragment`);tt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):et(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Ul(i,m),w=iu(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Gl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kl++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Su=0,Cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wu(e),t.set(e,n)),n}},wu=class{constructor(e){this.id=Su++,this.code=e,this.usedTimes=0}};function Tu(e){return e===1030||e===37490||e===36285}function Eu(e,t,n,r,i,a){let o=new hn,s=new Cu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&et(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=ec[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),te=m.isInstancedMesh===!0,ne=m.isBatchedMesh===!0,j=!!i.map,re=!!i.matcap,M=!!b,ie=M&&b.isPMREMTexture===!0,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,N=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,F=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.diffuseRoughness>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=ue&&!!i.anisotropyMap,ye=de&&!!i.clearcoatMap,be=de&&!!i.clearcoatNormalMap,xe=de&&!!i.clearcoatRoughnessMap,Se=fe&&!!i.diffuseRoughnessMap,Ce=he&&!!i.iridescenceMap,we=he&&!!i.iridescenceThicknessMap,Te=ge&&!!i.sheenColorMap,Ee=ge&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=_e&&!!i.transmissionMap,je=_e&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,I=i.alphaTest>0,Pe=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let L=ie?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Le={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:ne,batchingColor:ne&&m._colorsTexture!==null,instancing:te,instancingColor:te&&m.instanceColor!==null,instancingMorph:te&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Vt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:j,matcap:re,envMap:M,envMapMode:M&&b.mapping,envMapPMREM:ie,envMapMaxLod:ie?L.length-1:null,envMapSize:ie?L[0].width:null,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:N,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:N&&i.normalMapType===1,normalMapTangentSpace:N&&i.normalMapType===0,packedNormalMap:N&&i.normalMapType===0&&Tu(i.normalMap.format),metalnessMap:P,roughnessMap:F,anisotropy:ue,anisotropyMap:ve,clearcoat:de,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,diffuseRoughness:fe,diffuseRoughnessMap:Se,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:ge,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:_e,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:I,alphaHash:Pe,combine:i.combine,mapUv:j&&p(i.map.channel),aoMapUv:ae&&p(i.aoMap.channel),lightMapUv:oe&&p(i.lightMap.channel),bumpMapUv:se&&p(i.bumpMap.channel),normalMapUv:N&&p(i.normalMap.channel),displacementMapUv:ce&&p(i.displacementMap.channel),emissiveMapUv:le&&p(i.emissiveMap.channel),metalnessMapUv:P&&p(i.metalnessMap.channel),roughnessMapUv:F&&p(i.roughnessMap.channel),anisotropyMapUv:ve&&p(i.anisotropyMap.channel),clearcoatMapUv:ye&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Ce&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(i.sheenRoughnessMap.channel),specularMapUv:De&&p(i.specularMap.channel),specularColorMapUv:Oe&&p(i.specularColorMap.channel),specularIntensityMapUv:ke&&p(i.specularIntensityMap.channel),transmissionMapUv:Ae&&p(i.transmissionMap.channel),thicknessMapUv:je&&p(i.thicknessMap.channel),alphaMapUv:Ne&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(N||ue),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(j||Ne),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&N===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:j&&i.map.isVideoTexture===!0&&Vt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=ec[t];n=Do.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new xu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Du(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ou(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ku(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Au(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ou),r.length>1&&r.sort(t||ku),i.length>1&&i.sort(t||ku)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ju(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Au,e.set(t,[i])):n>=r.length?(i=new Au,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Mu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new V};break;case`SpotLight`:n={position:new B,direction:new B,color:new V,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new V,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new V,groundColor:new V};break;case`RectAreaLight`:n={color:new V,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function Nu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Pu=0;function Fu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Iu(e){let t=new Mu,n=Nu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new rn,o=new rn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Fu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=H.LTC_FLOAT_1,r.rectAreaLTC2=H.LTC_FLOAT_2):(r.rectAreaLTC1=H.LTC_HALF_1,r.rectAreaLTC2=H.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Pu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Lu(e){let t=new Iu(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Ru(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Lu(e),t.set(n,[a])):r>=i.length?(a=new Lu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var zu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vu=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Hu=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Uu=new rn,Wu=new B,Gu=new B;function Ku(e,t,n){let r=new bi,i=new z,o=new z,s=new Qt,l=new Io,u=new Lo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Ao({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:zu,fragmentShader:Bu}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let y=new Pr;y.setAttribute(`position`,new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ii(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(et(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){et(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let y=p.getFrameExtents();i.multiply(y),o.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/y.x),i.x=o.x*y.x,p.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/y.y),i.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){et(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new en(i.x,i.y,{format:ee,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Gi(i.x,i.y,_),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a}else d.isPointLight?(p.map=new lc(i.x),p.map.depthTexture=new Ki(i.x,g)):(p.map=new en(i.x,i.y),p.map.depthTexture=new Gi(i.x,i.y,g)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Wu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Wu),Gu.copy(e.position),Gu.add(Vu[t]),e.up.copy(Hu[t]),e.lookAt(Gu),e.updateMatrixWorld(),n.makeTranslation(-Wu.x,-Wu.y,-Wu.z),Uu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Uu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}r=p.getFrustum(t),T(n,l,i,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new en(i.x,i.y,{format:ee,type:v}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)T(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function qu(e,t){function n(){let t=!1,n=new Qt,r=null,i=new Qt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):F(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=it[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):F(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,j=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=j>=1);let M=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Qt().fromArray(ae),N=new Qt().fromArray(oe);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),P(e.CULL_FACE),he(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function F(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(F(e.BLEND),g=!1);else if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:tt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:tt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:tt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:tt(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?F(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):F(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?F(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(ne&&e.lineWidth(t),k=t)}function be(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):F(e.POLYGON_OFFSET_FILL)}function xe(t){t?P(e.SCISSOR_TEST):F(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+te-1),M!==t&&(e.activeTexture(t),M=t)}function Ce(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+te-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function we(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function Ne(){try{e.texImage2D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function I(){try{e.texImage3D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ie(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function L(t){N.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),N.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Re(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,se.set(0,0,e.canvas.width,e.canvas.height),N.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:F,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:Ne,texImage3D:I,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:Ie,viewport:L,reset:ze}}function Ju(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):Ye(`canvas`)}function D(e,t,n){let r=1,i=ze(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),et(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&et(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function te(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];et(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||et(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?He:Vt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function ne(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,et(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function M(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ie(e){oe(e.target)}function ae(e){se(e.target)}function oe(e){e.removeEventListener(`dispose`,ie),M(e),ce(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function se(e){e.removeEventListener(`dispose`,ae),M(e),P(e)}function N(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?se(t):oe(t))}C.clear(),b.clear()}function ce(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&le(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function le(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function P(t){let n=f.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&oe(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=f.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(i[t])}f.remove(t)}let F=0;function ue(){F=0}function de(){return F}function fe(e){F=e}function pe(){let e=F;return e>=p.maxTextures&&et(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),F+=1,e}function me(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function he(t,n){let r=f.get(t);if(t.isVideoTexture&&Le(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)et(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)et(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ee(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ge(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Ee(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function _e(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Ee(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function ve(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?De(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let ye={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},be={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},xe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Se(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&et(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ye[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ye[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ye[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,be[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,be[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,xe[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function Ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ie),re(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=me(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&le(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function we(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Te(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=we(r.start,n.width,4),c=we(t.start,n.width,4);r.start<=i+1&&s===c&&we(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Ee(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=Ce(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Vt.getPrimaries(Vt.workingColorSpace),r=n.colorSpace===``?null:Vt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=D(n.image,!1,p.maxTextureSize);t=Re(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=te(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);Se(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=j(n,t);if(n.isDepthTexture)u=ne(n.format===O,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&Te(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=Ys(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else et(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?et(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=Ys(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=ze(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=ze(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);k(n)&&n.mipmapsAutoUpdate===!0&&A(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function De(t,n,r){if(n.image.length!==6)return;let i=Ce(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Vt.getPrimaries(Vt.workingColorSpace),s=n.colorSpace===``?null:Vt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=D(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Re(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=te(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=j(n,h);Se(e.TEXTURE_CUBE_MAP,n);let C;if(n.isDepthTexture){if(v=ne(n.format===O,n.type),b){if(y)d.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?et(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=ze(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}k(n)&&n.mipmapsAutoUpdate===!0&&A(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Oe(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=te(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),L(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Ie(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ne(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=te(a.internalFormat,o,s,a.normalized,a.colorSpace);L(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ae(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);a.__renderTarget=n;let o=i?n.depthTexture.image[0]:n.depthTexture.image;a.__webglTexture&&o.width===n.width&&o.height===n.height||(o.width=n.width,o.height=n.height,n.depthTexture.needsUpdate=!0),i?ve(n.depthTexture,0):he(n.depthTexture,0);let s=a.__webglTexture,c=Ie(n),l=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,u=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)L(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else if(n.depthTexture.format===1027)L(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function je(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Ae(n.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Ae(n.__webglFramebuffer[0],t,0):Ae(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),ke(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),ke(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(t,n,r){let i=f.get(t);n!==void 0&&Oe(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&je(t)}function Ne(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,ae),re(t);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&L(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=te(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Ie(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),ke(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),Se(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)Oe(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else Oe(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);k(n)?A(e.TEXTURE_CUBE_MAP):n.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),Se(s,i),Oe(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),k(i)&&A(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),Se(a,n),n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)Oe(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else Oe(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);k(n)?A(a):n.mipmaps.length>0&&e.texParameteri(a,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}t.depthBuffer&&je(t)}function I(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Pe=[];function Fe(t){if(t.samples>0){if(L(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Pe.length=0,Pe.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Pe.push(o),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pe))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ie(e){return Math.min(p.maxSamples,e.samples)}function L(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Le(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Re(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Vt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&et(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):tt(`WebGLTextures: Unsupported texture color space:`,n)),t}function ze(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=pe,this.resetTextureUnits=ue,this.getTextureUnits=de,this.setTextureUnits=fe,this.setTexture2D=he,this.setTexture2DArray=ge,this.setTexture3D=_e,this.setTextureCube=ve,this.rebindTextures=Me,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=L,this.dispose=N}function Yu(e,t){function n(n,r=``){let i,a=Vt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Xu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ao({vertexShader:Xu,fragmentShader:Zu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ii(new _o(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$u=class extends at{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new Qu,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new z,k=null,A=null,ee=new _s;ee.viewport=new Qt;let te=new _s;te.viewport=new Qt;let ne=[ee,te],j=new Os,re=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Pn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Pn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Pn,C[e]=t),t.getHandSpace()};function ie(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}re=null,M=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(T.width,T.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&et(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&et(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?O:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new en(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new Gi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new en(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),j.near=te.near=ee.near=t,j.far=te.far=ee.far=n,(re!==j.near||M!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),re=j.near,M=j.far),j.layers.mask=e.layers.mask|6,ee.layers.mask=j.layers.mask&-5,te.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;se(j,i);for(let e=0;e<a.length;e++)se(a[e],i);j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),N(e,j,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(e){return v[e]};let ce=null;function le(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ne[n];o===void 0&&(o=new _s,o.layers.enable(n),o.viewport=new Qt,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new qi,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let P=new Zs;P.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},ed=new rn,td=new It;td.set(-1,0,0,0,1,0,0,0,1);function nd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Eo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ed.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(td),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function rd(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?et(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):et(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var id=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ad=null;function od(){return ad===null&&(ad=new si(id,16,16,ee,v),ad.name=`DFG_LUT`,ad.minFilter=c,ad.magFilter=c,ad.wrapS=r,ad.wrapT=r,ad.generateMipmaps=!1,ad.needsUpdate=!0),ad}var sd=class{constructor(e={}){let{canvas:t=Xe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:h=d}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let S=h,C=new Set([ne,te,A]),w=new Set([d,g,m,x,y,b]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,k=null,ee=[],j=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ie=!1,ae=null,oe=null,se=null,N=null;this._outputColorSpace=Be;let ce=0,le=0,P=null,F=-1,ue=null,de=new Qt,fe=new Qt,pe=null,me=new V(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new Qt(0,0,ge,_e),Se=new Qt(0,0,ge,_e),Ce=!1,we=new bi,Te=new Si,Ee=!1,De=!1,Oe=new rn,ke=new B,Ae=new Qt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return P===null?ve:1}let I=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,L,Le,Re,ze,Ve,He,Ue,We,Ge,qe,Je,Ye,Ze,$e,nt,it,at,ot,st,ct,lt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ft,!1),t.addEventListener(`webglcontextrestored`,pt,!1),t.addEventListener(`webglcontextcreationerror`,mt,!1),I===null){let t=`webgl2`;if(I=Pe(t,e),I===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ut()}catch(e){throw t.removeEventListener(`webglcontextlost`,ft,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,mt,!1),tt(`WebGLRenderer: `+e.message),e}function ut(){Fe=new Dc(I),Fe.init(),st=new Yu(I,Fe),Ie=new sc(I,Fe,e,st),L=new qu(I,Fe),Ie.reversedDepthBuffer&&p&&L.buffers.depth.setReversed(!0),oe=I.createFramebuffer(),se=I.createFramebuffer(),N=I.createFramebuffer(),Le=new Ac(I),Re=new Du,ze=new Ju(I,Fe,L,Re,Ie,st,Le),Ve=new Ec(M),He=new Qs(I),ct=new ac(I,He),Ue=new Oc(I,He,Le,ct),We=new Mc(I,Ue,He,ct,Le),it=new jc(I,Ie,ze),Ze=new cc(Re),Ge=new Eu(M,Ve,Fe,Ie,ct,Ze),qe=new nd(M,Re),Je=new ju,Ye=new Ru(Fe),nt=new ic(M,Ve,L,We,_,s),$e=new Ku(M,We,Ie),lt=new rd(I,Le,Ie,L),at=new oc(I,Fe,Le),ot=new kc(I,Fe,Le),Le.programs=Ge.programs,M.capabilities=Ie,M.extensions=Fe,M.properties=Re,M.renderLists=Je,M.shadowMap=$e,M.state=L,M.info=Le}S!==1009&&(re=new Pc(S,t.width,t.height,o,r,i));let dt=new $u(M,I);this.xr=dt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){dt.isPresenting?et(`WebGLRenderer: Can't change size while VR device is presenting.`):(ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)tt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){et(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),L.viewport(de.copy(xe).multiplyScalar(Ne()).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),L.scissor(fe.copy(Se).multiplyScalar(Ne()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){L.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=C.has(t)}if(e){let e=P.texture.type,t=w.has(e),n=nt.getClearColor(),r=nt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,I.clearBufferuiv(I.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,I.clearBufferiv(I.COLOR,0,E))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ft,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,mt,!1),nt.dispose(),Je.dispose(),Ye.dispose(),ze.dispose(),Re.dispose(),Ve.dispose(),We.dispose(),Ue.dispose(),ct.dispose(),lt.dispose(),Ge.dispose(),dt.dispose(),dt.removeEventListener(`sessionstart`,xt),dt.removeEventListener(`sessionend`,St),Ct.stop()};function ft(e){e.preventDefault(),Qe(`WebGLRenderer: Context Lost.`),ie=!0}function pt(){Qe(`WebGLRenderer: Context Restored.`),ie=!1;let e=Le.autoReset,t=$e.enabled,n=$e.autoUpdate,r=$e.needsUpdate,i=$e.type;ut(),Le.autoReset=e,$e.enabled=t,$e.autoUpdate=n,$e.needsUpdate=r,$e.type=i}function mt(e){tt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ht(e){let t=e.target;t.removeEventListener(`dispose`,ht),gt(t)}function gt(e){_t(e),Re.remove(e)}function _t(e){let t=Re.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=z(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ct.setup(i,r,s,n,c);let h,g=at;if(c!==null&&(h=He.get(c),g=ot,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=Re.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function vt(e,t,n,r){ae!==null&&e.isNodeMaterial&&ae.setObject(r,e),Ee===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,At(e,t,r),e.side=0,e.needsUpdate=!0,At(e,t,r),e.side=2):At(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ae!==null&&ae.renderStart(e,t,n),k=Ye.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),ae!==null&&ae.updateLights(k.state.lightsArray),De=this.localClippingEnabled,Ee=Ze.init(this.clippingPlanes,De),Ee===!0&&Ze.setGlobalState(this.clippingPlanes,t),ae!==null&&$e.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];vt(o,n,t,e),r.add(o)}else vt(i,n,t,e),r.add(i)}}),k=j.pop(),ae!==null&&ae.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Re.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let yt=null;function bt(e){yt&&yt(e)}function xt(){Ct.stop()}function St(){Ct.start()}let Ct=new Zs;Ct.setAnimationLoop(bt),typeof self<`u`&&Ct.setContext(self),this.setAnimationLoop=function(e){yt=e,dt.setAnimationLoop(e),e===null?Ct.stop():Ct.start()},dt.addEventListener(`sessionstart`,xt),dt.addEventListener(`sessionend`,St),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){tt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=dt.enabled===!0&&dt.isPresenting===!0,r=re!==null&&(P===null||n)&&re.begin(M,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(t),t=dt.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,P),k=Ye.get(e,j.length),k.init(t),k.state.textureUnits=ze.getTextureUnits(),j.push(k),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Te.setFromArrayCamera(t):we.setFromProjectionMatrix(Oe,Ke,t.reversedDepth),De=this.localClippingEnabled,Ee=Ze.init(this.clippingPlanes,De),O=Je.get(e,ee.length),O.init(),ee.push(O),this.info.render.frame++,dt.enabled===!0&&dt.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&wt(e,t,-1/0,M.sortObjects)}wt(e,t,0,M.sortObjects),O.finish(),ae!==null&&ae.updateLights(k.state.lightsArray),M.sortObjects===!0&&O.sort(ye,be),Me=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Me&&nt.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ze.beginShadows();let i=k.state.shadowsArray;if($e.render(i,e,t),Ee===!0&&Ze.endShadows(),(r&&re.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Et(n,r,e,a)}Me&&nt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Tt(O,e,n,n.viewport)}}else r.length>0&&Et(n,r,e,t),Me&&nt.render(e),Tt(O,e,t)}P!==null&&le===0&&(ze.updateMultisampleRenderTarget(P),ze.updateRenderTargetMipmap(P)),r&&re.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),ct.resetDefaultState(),F=-1,ue=null,j.pop(),j.length>0?(k=j[j.length-1],ze.setTextureUnits(k.state.textureUnits),Ee===!0&&Ze.setGlobalState(M.clippingPlanes,k.state.camera)):k=null,ee.pop(),O=ee.length>0?ee[ee.length-1]:null,ae!==null&&ae.renderEnd()};function wt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Te:we;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=We.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Ae.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Te:we;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=We.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&O.push(e,i,a,n,Ae.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)wt(i[e],t,n,r)}function Tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Ee===!0&&Ze.setGlobalState(M.clippingPlanes,n),r&&L.viewport(de.copy(r)),i.length>0&&Dt(i,t,n),a.length>0&&Dt(a,t,n),o.length>0&&Dt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new en(1,1,{generateMipmaps:!0,type:e?v:d,minFilter:u,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Vt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(me),he=M.getClearAlpha(),he<1&&M.setClearColor(16777215,.5),M.clear(),Me&&nt.render(n);let f=M.toneMapping;M.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Ee===!0&&Ze.setGlobalState(M.clippingPlanes,r),Dt(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ot(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}M.setRenderTarget(s,c,l),M.setClearColor(me,he),p!==void 0&&(r.viewport=p),M.toneMapping=f}function Dt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ot(o,t,n,s,l,c)}}function Ot(e,t,n,r,i,a){ae!==null&&i.isNodeMaterial&&ae.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function kt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function At(e,t,n){t.isScene!==!0&&(t=je);let r=Re.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ht),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return R(e,s),d}else s.uniforms=Ge.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,M),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),R(e,s),r.needsLights=Pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=kt(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function jt(e,t,n,r,i){let a=Re.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=At(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Mt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ul.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function R(e,t){let n=Re.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function z(e,t,n,r,i){t.isScene!==!0&&(t=je),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Vt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Re.get(r),y=k.state.lights;if(Ee===!0&&(De===!0||e!==ue)){let t=e===ue&&r.id===F;Ze.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===kt(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?jt(r,t,i,s,h):At(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(L.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==F&&(F=r.id,w=!0),C||ue!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(I,`projectionMatrix`,e.projectionMatrix),E.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(I,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&E.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(I,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&E.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&E.setValue(I,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&E.setValue(I,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){E.setOptional(I,i,`bindMatrix`),E.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(I,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(E.setOptional(I,i,`batchingTexture`),E.setValue(I,`batchingTexture`,i._matricesTexture,ze),E.setOptional(I,i,`batchingIdTexture`),E.setValue(I,`batchingIdTexture`,i._indirectTexture,ze),E.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(I,`batchingColorTexture`,i._colorsTexture,ze));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&it.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=od()),w){if(E.setValue(I,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&Nt(O,T),a&&r.fog===!0&&qe.refreshFogUniforms(O,a),qe.refreshMaterialUniforms(O,r,ve,_e,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Ul.upload(I,Mt(v),O,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ul.upload(I,Mt(v),O,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(I,`center`,i.center),E.setValue(I,`modelViewMatrix`,i.modelViewMatrix),E.setValue(I,`normalMatrix`,i.normalMatrix),E.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];lt.update(n,S),lt.bind(n,S)}}return S}function Nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=Re.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Re.get(e.texture).__webglTexture=t,Re.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Re.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=Re.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,L.viewport(de),L.scissor(fe),L.setScissorTest(pe),F=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,Re.get(e.texture).__webglTexture,Re.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Re.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Re.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?Re.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=oe),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(de),L.scissor(fe),L.setScissorTest(pe),i){let r=Re.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Re.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Re.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}F=-1};function Ft(e){let t=Re.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){tt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Re.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=Ft(o);if(u.__formatReadable===!1){tt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){tt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,st.convert(c),st.convert(l),a)}finally{let e=P===null?null:Re.get(P).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Re.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=Ft(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,st.convert(l),st.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=P===null?null:Re.get(P).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await rt(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=st.convert(t.format),_=st.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Re.get(e),r=Re.get(t),h=Re.get(n.__renderTarget),g=Re.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Re.has(e)){let n=Re.get(e),r=Re.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,se),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,N);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){Re.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,L.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Vt._getUnpackColorSpace()}},cd=-1.63,ld=new z(-1.6,4.5);new z(32,46);function ud(e){let t=1+.024*Math.sin(e*3+.7)+.018*Math.cos(e*5-.4)+.011*Math.sin(e*7);return new z(ld.x+15.5*t*Math.cos(e),ld.y+22.25*t*Math.sin(e))}function dd(e,t){let n=e-ld.x,r=t-ld.y,i=ud(Math.atan2(r/22.25,n/15.5));return Math.hypot(n,r)/Math.hypot(i.x-ld.x,i.y-ld.y)}function fd(e,t){let n=dd(e,t),r;r=n<.47?1.2:n<.73?R.lerp(1.2,.6,R.smoothstep(n,.47,.73)):n<1?R.lerp(.6,0,R.smoothstep(n,.73,1)):-Math.min(8,n<1.3?(n-1)*3:.9+(n-1.3)*.8+Math.max(0,n-2.7)*1.2);let i=Math.max(-8.92-e,0,e-5.65),a=Math.max(-4.55-t,0,t-5.45),o=Math.hypot(i,a);n<1&&(r=Math.max(r,(1.2-o/8)*(1-R.smoothstep(n,.8,1))));let s=.012*Math.sin(e*1.3+t*.6)*Math.sin(t*1.7),c=cd+r+s*R.smoothstep(o,0,1.5),l=Math.PI*105/180,u=e-1.35,d=t-30.8,f=u*Math.sin(l)+d*Math.cos(l),p=u*Math.cos(l)-d*Math.sin(l),m=1-R.smoothstep(Math.hypot(p,Math.max(0,Math.abs(f)-38)),1.8,3.2);return c<-1.69&&(c=Math.min(c,R.lerp(c,-3.73,m))),c}function pd(){let e=new Uint8Array(1048576);for(let t=0;t<512;t++)for(let n=0;n<512;n++){let r=(n/511-.5)*200,i=(t/511-.5)*200,a=R.clamp((cd-fd(r,i)+2)/10,0,1),o=(t*512+n)*4;e[o]=e[o+1]=e[o+2]=Math.round(a*255),e[o+3]=255}let t=new si(e,512,512);return t.minFilter=t.magFilter=c,t.needsUpdate=!0,t}function md(){let e=document.createElement(`canvas`);e.width=2048,e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#121615`,t.fillRect(0,0,e.width,e.height);for(let e=0;e<8;e++){t.save(),t.translate(e*256,0),t.beginPath(),t.rect(0,0,256,256),t.clip();for(let n=-1;n<9;n++)for(let r=-1;r<9;r++){let i=r*1.3+n*.9+e*.785,a=r*34+Math.sin(i)*9,o=n*34+Math.cos(i*.8)*9;t.strokeStyle=`rgba(233,246,223,.44)`,t.lineWidth=1.2,t.beginPath(),t.ellipse(a,o,22+Math.sin(i)*6,16+Math.cos(i)*5,i,0,Math.PI*2),t.stroke()}t.restore()}let r=new Wi(e);return r.wrapS=r.wrapT=n,r}function hd(e,t,n){let r=new _o(180,180,160,160);r.rotateX(-Math.PI/2);let i=r.attributes.position,a=[],o=[new V(`#EFE6D4`),new V(`#E3D3B3`),new V(`#D9CFC0`)];for(let e=0;e<i.count;e++){let t=i.getX(e),n=i.getZ(e);i.setY(e,fd(t,n));let r=o[0].clone().lerp(o[1],.24+.18*Math.sin(t*.37+n*.14)).lerp(o[2],.1+.1*Math.sin(t*.8-n*.3));a.push(r.r,r.g,r.b)}r.setAttribute(`color`,new Sr(a,3)),r.computeVertexNormals();let s=new Mo({color:14996407,vertexColors:!0,roughness:.85}),c={value:cd},l={value:n?0:.5};s.onBeforeCompile=e=>{Object.assign(e.uniforms,t,{waterLevel:c,causticsStrength:l,causticsTex:{value:md()}}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 sandPosition;uniform float snow,waterLevel;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
sandPosition=position;transformed.y+=snow*.05*smoothstep(waterLevel+.01,waterLevel+.14,position.y);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
 varying vec3 sandPosition;uniform float time,rain,snow,dusk,waterLevel,causticsStrength;uniform sampler2D causticsTex;
 float grain(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
 `).replace(`#include <color_fragment>`,`#include <color_fragment>
 float depth=waterLevel-sandPosition.y;float wet=1.-smoothstep(-.02,.22,-depth);wet=max(wet,rain*.72);
 float ripple=sin(sandPosition.x*94.+sin(sandPosition.z*3.)*.5)*.012;diffuseColor.rgb*=1.-wet*.18+ripple;
 float path=1.-smoothstep(.5,.95,abs(sandPosition.x+.65+sin(sandPosition.z*.3)*.15));path*=smoothstep(5.3,7.,sandPosition.z)*(1.-smoothstep(18.,20.,sandPosition.z));diffuseColor.rgb*=1.-path*.065;
 float mottle=grain(floor(sandPosition.xz*7.))*.013;diffuseColor.rgb+=mottle;
 float snowMask=snow*smoothstep(-.02,.12,-depth);vec3 snowColor=mix(vec3(.55,.62,.61),vec3(.78,.82,.80),.5+.3*sin(sandPosition.x*.7)*sin(sandPosition.z*.9));diffuseColor.rgb=mix(diffuseColor.rgb,snowColor,snowMask*.92);
 float frame=mod(floor(time*8.),8.);vec2 cuv=fract(sandPosition.xz*.36);cuv.x=(cuv.x+frame)/8.;float caustic=texture2D(causticsTex,cuv).r;
 float underwater=smoothstep(.03,.3,depth)*(1.-smoothstep(1.6,2.,depth));diffuseColor.rgb+=caustic*causticsStrength*.3*underwater*(1.-rain)*(1.-snow);
 `).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
roughnessFactor=mix(.85,.45,wet)*(1.-snowMask)+.94*snowMask;`)};let u=new ii(r,s);return u.name=`Continuous island sand and submerged shoal`,u.receiveShadow=!0,e.add(u),{terrain:u,water:c,caustics:l,diagnostics:()=>({size:[32,46],grid:160,continuousShore:!0,geographyStable:!0,heightDatum:cd,landHeight:1.2,beachHeight:.6,causticsDepth:[0,2],landSample:fd(0,0),shoreSamples:Array.from({length:12},(e,t)=>dd(Math.cos(t)*16,Math.sin(t)*23))})}}var gd=[{length:1.2,amp:.03,angle:.26},{length:2.8,amp:.08,angle:.34},{length:6,amp:.18,angle:.18},{length:14,amp:.35,angle:.3}];function _d(e,t,n,r=1){let i=0;for(let r of gd){let a=Math.PI*2/r.length,o=a*(e*Math.cos(r.angle)+t*Math.sin(r.angle))-Math.sqrt(9.81*a)*n;i+=Math.sin(o)*r.amp}return i*r}function vd(e,t,n,r){let i=[-1200,-700,-400,-240,-160],a=r?128:224;for(let e=0;e<=a;e++)i.push(-100+e*200/a);i.push(160,240,400,700,1200);let o=[],s=[];for(let e of i)for(let t of i)o.push(t,0,e);for(let e=0;e<i.length-1;e++)for(let t=0;t<i.length-1;t++){let n=e*i.length+t,r=n+1,a=n+i.length,o=a+1;s.push(n,a,r,r,a,o)}let c=new Pr;c.setAttribute(`position`,new Sr(o,3)),c.setIndex(s),c.computeVertexNormals();let l={TideLevel:0,WaveAmplitude:1,FoamDensity:.6,CausticsStrength:r?0:.5,ShoreFog:.12},u=new en(512,512,{depthBuffer:!0,type:v});u.depthTexture=new Gi(512,512,g),u.texture.colorSpace=Ve;let d=new en(256,256,{type:v}),f=new _s,p={...n,waterLevel:{value:cd},waveScale:{value:1},foamDensity:{value:.6},shoreFog:{value:.12},depthMap:{value:pd()},sceneColor:{value:u.texture},sceneDepth:{value:u.depthTexture},reflectionMap:{value:d.texture},viewProjection:{value:new rn},inverseProjection:{value:new rn},inverseView:{value:new rn},probeMatrix:{value:new rn},desktop:{value:+!r},captureReady:{value:0}},m=`
 float wave(vec2 p,float k,float a,float dir,float t){return sin(k*dot(p,vec2(cos(dir),sin(dir)))-sqrt(9.81*k)*t)*a;}
 float heightAt(vec2 p){float depth=texture2D(depthMap,p/200.+.5).r*10.-2.;float shallow=smoothstep(0.,1.7,depth);return (wave(p,5.23599,.03,.26,time)+wave(p,2.24399,.08,.34,time)+wave(p,1.0472,.18,.18,time)+wave(p,.448799,.35,.30,time))*waveScale*shallow;}
 `,h=new ii(c,new Ao({transparent:!0,depthWrite:!0,side:2,uniforms:p,toneMapped:!0,vertexShader:`uniform float time,waterLevel,waveScale;uniform sampler2D depthMap;varying vec3 waterWorld;varying vec2 oceanUV;${m}
 void main(){vec3 p=position;p.y=waterLevel+heightAt(p.xz);waterWorld=p;oceanUV=p.xz/200.+.5;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float time,rain,snow,dusk,waterLevel,waveScale,foamDensity,shoreFog,desktop,captureReady;uniform sampler2D depthMap,sceneColor,sceneDepth,reflectionMap;uniform mat4 viewProjection,inverseProjection,inverseView,probeMatrix;varying vec3 waterWorld;varying vec2 oceanUV;${m}
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
 float viewDepth(vec2 uv,float d){vec4 p=inverseProjection*vec4(uv*2.-1.,d*2.-1.,1.);return -p.z/p.w;}
 vec3 linearColor(vec3 srgb){return pow(srgb,vec3(2.2));}
 void main(){float depth=texture2D(depthMap,oceanUV).r*10.-2.+waterLevel-(${cd});if(depth<.008)discard;
 vec2 p=waterWorld.xz;float eps=.06;vec2 warp=vec2(sin(p.y*.51+p.x*.07),cos(p.x*.34-p.y*.12))*.65;vec2 pn=p+warp;vec3 n=normalize(vec3((heightAt(pn-vec2(eps,0.))-heightAt(pn+vec2(eps,0.)))*.38,eps*2.,(heightAt(pn-vec2(0.,eps))-heightAt(pn+vec2(0.,eps)))*.38));
 float micro=sin(p.x*25.+p.y*12.+time*1.8)*.028*(1.+rain);n=normalize(n+vec3(micro,0.,-micro*.7));
 vec3 shallow=linearColor(vec3(.663,.788,.769)),deep=linearColor(vec3(.306,.478,.612));vec3 col=mix(shallow,deep,smoothstep(.2,5.,depth));col=mix(col,linearColor(vec3(.557,.620,.612)),snow*.9);col=mix(col,linearColor(vec3(.37,.48,.51)),rain*.38);col*=1.-dusk*.25*(1.-snow);
 vec4 clip=viewProjection*vec4(waterWorld,1.);vec2 screen=clip.xy/clip.w*.5+.5;vec2 refractUV=clamp(screen+n.xz*.0035*min(depth,2.),vec2(.001),vec2(.999));vec3 bottom=texture2D(sceneColor,refractUV).rgb;
 col=mix(col,bottom,(1.-smoothstep(0.,2.,depth))*.48*captureReady);
 vec3 eye=normalize(cameraPosition-waterWorld),direction=reflect(-eye,n);float fresnel=.025+.14*pow(1.-max(dot(eye,n),0.),3.);vec3 reflected=linearColor(mix(vec3(.84,.88,.87),vec3(.68,.77,.82),max(direction.y,0.)));
 if(desktop>.5&&captureReady>.5){for(int i=0;i<22;i++){float distance=.35+float(i)*1.14;vec3 ray=waterWorld+direction*distance;vec4 c=viewProjection*vec4(ray,1.);vec2 uv=c.xy/c.w*.5+.5;if(uv.x<.005||uv.x>.995||uv.y<.005||uv.y>.995)break;float sampled=texture2D(sceneDepth,uv).r;float actual=viewDepth(uv,sampled);float castDepth=-(viewMatrix*vec4(ray,1.)).z;float difference=castDepth-actual;if(difference>0.&&difference<.55&&sampled<.9999){reflected=texture2D(sceneColor,uv).rgb;break;}}}
 else if(captureReady>.5){vec4 pc=probeMatrix*vec4(waterWorld,1.);vec2 uv=pc.xy/pc.w*.5+.5;reflected=texture2D(reflectionMap,clamp(uv+n.xz*.005,vec2(.005),vec2(.995))).rgb;}
 col=mix(col,reflected,fresnel);
 // Four depth-following, interrupted swash lines. No particle foam.
 float bands=0.;for(int i=0;i<4;i++){float level=.055+float(i)*.16+.025*sin(time*.75+float(i));float width=.016+.006*float(i);bands=max(bands,(1.-smoothstep(width,width+.025,abs(depth-level)))*smoothstep(.26,.65,noise(p*.8+time*.04)));}vec3 foam=linearColor(mix(vec3(.94,.94,.89),vec3(.80,.83,.80),rain));col=mix(col,foam,bands*foamDensity*.65);
 // Rain splashes and expanding concentric rings on the actual water surface.
 vec2 cell=floor(p*2.2),local=fract(p*2.2)-.5;float age=fract(time*.7+hash(cell));float ring=1.-smoothstep(.014,.037,abs(length(local)-age*.42));col+=rain*ring*(1.-age)*.085;
 float glint=pow(max(dot(n,normalize(vec3(-.55,1.,.55))),0.),32.);float sunPath=exp(-pow((p.x*.7-p.y*.25-3.)/5.,2.))*smoothstep(.35,.7,noise(p*2.1));col+=linearColor(vec3(.949,.851,.627))*glint*.045*sunPath*(1.-rain)*(1.-snow);
 float foreground=1.-smoothstep(0.,.18,screen.y);col=mix(col,linearColor(vec3(.937,.902,.831)),foreground*shoreFog*.75);
 gl_FragColor=vec4(col,1.);#include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`.replace(`;#include`,`;
#include`)}));h.name=`SurfaceOcean — four waves, shoal refraction, SSR`,h.renderOrder=5,h.frustumCulled=!1,e.add(h);let _=0,y=!0,b=new rn;function x(n){if(!y)return;_++;let i=!b.equals(n.matrixWorld);if(!i&&_%(r?8:3)!=0&&p.captureReady.value>0)return;b.copy(n.matrixWorld);let a=t.getRenderTarget(),o=t.shadowMap.autoUpdate;if(h.visible=!1,t.shadowMap.autoUpdate=!1,t.setRenderTarget(u),t.clear(),t.render(e,n),r&&(i||_%24==0)){f=n.clone();let r=n.getWorldDirection(new B);f.position.copy(n.position),f.position.y=2*p.waterLevel.value-n.position.y,r.y*=-1,f.up.set(0,-1,0),f.lookAt(f.position.clone().add(r)),f.updateMatrixWorld(),p.probeMatrix.value.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse);let i=t.clippingPlanes;t.clippingPlanes=[new Rr(new B(0,1,0),-p.waterLevel.value)],t.setRenderTarget(d),t.clear(),t.render(e,f),t.clippingPlanes=i}t.setRenderTarget(a),t.shadowMap.autoUpdate=o,h.visible=!0,p.captureReady.value=1}return{mesh:h,params:l,capture:x,resize(e,t){u.setSize(Math.max(256,Math.floor(e*(r?.35:.55))),Math.max(256,Math.floor(t*(r?.35:.55)))),d.setSize(256,256)},surfaceAt(e,t,r){return cd+l.TideLevel+_d(e,t,r,l.WaveAmplitude*(1-n.snow.value*.5)*R.smoothstep(Math.max(0,cd-fd(e,t)),0,1.7))},update(e,t,r){y=!r,h.visible=!0,r&&(p.captureReady.value=0),p.waterLevel.value=cd+R.clamp(l.TideLevel,-.3,.4),p.waveScale.value=R.clamp(l.WaveAmplitude,0,1.5)*(1-n.snow.value*.5),p.foamDensity.value=R.clamp(l.FoamDensity,0,1),p.shoreFog.value=R.clamp(l.ShoreFog,0,.25),p.viewProjection.value.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),p.inverseProjection.value.copy(t.projectionMatrixInverse),p.inverseView.value.copy(t.matrixWorld)},diagnostics:()=>({reflection:r?`planar-probe`:`screen-space`,reflectionLimit:25,depthTexture:512,refraction:!0,nearWaves:4,foamBands:4,parameters:{...l},visible:h.visible})}}function yd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Pr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=bd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=bd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function bd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new yr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var U=(e,t,n)=>new B(e,t,n),W=(e,t=.85,n=0)=>new Mo({color:e,roughness:t,metalness:n}),G=(e,t=0,n=0,r=0)=>{let i=new Mn;return i.position.set(t,n,r),e.add(i),i};function K(e,t,n,r=0,i=0,a=0){let o=new ii(t,n);return o.position.set(r,i,a),o.receiveShadow=!0,e.add(o),o}var q=(e,t,n,r,i,a,o,s)=>K(e,new Ji(t,n,r),s,i,a,o),xd=(e,t,n,r,i,a)=>K(e,new yo(t,8,6),a,n,r,i),J=(e,t,n,r,i,a,o,s)=>K(e,new Xi(t,n,r,12),s,i,a,o);function Y(e,t,n,r,i,a=r*.6){let o=K(e,new Xi(a,r,t.distanceTo(n),6),i);return o.position.copy(t).add(n).multiplyScalar(.5),o.quaternion.setFromUnitVectors(U(0,1,0),n.clone().sub(t).normalize()),o}function Sd(e){e.updateWorldMatrix(!0,!0);let t=e.matrixWorld.clone().invert(),n=new Map,r=[];e.traverse(e=>{if(!(e instanceof ii)||e.userData.animated)return;let i=e.material,a=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();a.applyMatrix4(t.clone().multiply(e.matrixWorld)),a.deleteAttribute(`uv1`),a.deleteAttribute(`tangent`),n.has(i)||n.set(i,[]),n.get(i).push(a),r.push(e)});for(let[t,r]of n){let n=yd(r,!1);n&&K(e,n,t),r.forEach(e=>e.dispose())}r.forEach(e=>e.removeFromParent())}function Cd(e,t,n,r,i){Y(e,t,n,.012,i,.005);for(let i=0;i<9;i++){let a=t.clone().lerp(n,(i+1)/10);for(let t=0;t<5;t++){let n=t*1.256+i*.6;Y(e,a,a.clone().add(U(Math.cos(n)*.065,.035,Math.sin(n)*.065)),.005,r,.001)}}}var wd=-.65,Td=2.4,Ed=.36,Dd=.012,Od=33,kd=12.264,Ad=(()=>{let e=15,t=34;for(let n=0;n<60;n++){let n=(e+t)/2;fd(wd,n)>-1.63?e=n:t=n}let n=(e+t)/2,r=n+1.5,i=r-kd,a=i+Ed/2+11.16,o=cd+.06;return{shorelineZ:n,endZ:r,startZ:i,landingZ:a,landingTop:o,landingLift:o-(fd(wd,a)+.08)}})();function jd(e,t){let n=fd(wd,e),{startZ:r,landingZ:i,landingTop:a,landingLift:o}=Ad;if(t>30)return Math.min(n+.035,cd-.045);if(t===30)return a;let s=.22*(1-R.smoothstep(e,r,r+2));return n+.08+s+o*R.smoothstep(e,i-5*.372,i)}function Md(e,t=`sun`){let n=R.clamp(Math.round((e-Ad.startZ-Ed/2)/.372),0,32),r=Ad.startZ+Ed/2+n*.372,i=r-Ed/2,a=r+Ed/2;return R.lerp(jd(i,n),jd(a,n),R.clamp((e-i)/Ed,0,1))+(n===9?.027:n===21?-.0162:0)+(t===`snow`&&n<=30?.048:0)}function Nd(e){let t=G(e);t.name=`Island beach belongings and boardwalk`;let r=G(t),i=G(t),a=G(t);r.name=`Batched beach objects`,i.name=`Upward-facing 40–60 mm snow`,a.name=`Rain puddles`,i.visible=!1,a.visible=!1;let o=[],s=[];function l(e,t=.85,n=.77){let r=W(e,t);return s.push({m:r,color:r.color.clone(),roughness:t,amount:n}),r}function d(e){let t=new Uint8Array(65536);for(let n=0;n<128;n++)for(let r=0;r<128;r++){let i=1,a=1,o=1,s=1,c=Math.sin(r*127.1+n*311.7)*43758.5453,l=c-Math.floor(c);if(e===`wood`&&(i=.77+.14*Math.sin(r*.81+Math.sin(n*.036)*2)+l*.09),e===`cloth`){let e=Math.floor(r/16)%4==0;a=e?.64:1,o=e?.34:.93,s=e?.25:.8,i=.93+l*.07}e===`weave`&&(i=.68+(r%8<3==n%8<3?.19:.04)+l*.1);let u=(n*128+r)*4;t[u]=255*i*a,t[u+1]=255*i*o,t[u+2]=255*i*s,t[u+3]=255}let r=new si(t,128,128);return r.wrapS=r.wrapT=n,r.colorSpace=Be,r.magFilter=c,r.minFilter=u,r.generateMipmaps=!0,r.needsUpdate=!0,r}let f=l(`#b8a48a`),p=l(`#84735b`),m=l(`#c7bca4`),h=l(`#97856b`),g=d(`wood`);for(let e of[f,p,m,h])e.map=g;let _=l(`#b7aa89`,.97,.7),v=l(`#84795c`,.96,.65),y=l(`#895d3e`,.94,.8),b=l(`#b66f53`),x=l(`#c98561`),S=l(`#775541`),C=l(`#a99b74`,1,.68);C.map=d(`weave`);let w=l(`#bca983`,.95,.7);w.map=C.map;let T=l(`#d7c6a3`,.96,.85),E=l(`#e2d3b1`,.98,.84),D=l(`#ffffff`,1,.77);D.map=d(`cloth`),D.side=2;let O=l(`#828d70`,.97,.78),k=l(`#a0a68b`,.94,.8),A=l(`#5d715f`),ee=l(`#d5cbb7`,.94,.7),te=l(`#b9b3a5`,.93,.73),ne=l(`#e6d8ba`),j=l(`#d3b4a0`),re=l(`#79634b`),M=l(`#d1bf99`),ie=l(`#b99472`),ae=l(`#625f51`,.9,.72),oe=l(`#655d4d`,.48,1),se=W(`#f7fbff`,.92);se.polygonOffset=!0,se.polygonOffsetFactor=-1;let N=new Mo({color:`#768d91`,transparent:!0,opacity:.32,roughness:.13,metalness:.22,depthWrite:!1}),ce=[];function le(e,t,n,a=0,o=`near`){let s=fd(t,n),c=G(r,t,s,n),l=G(i,t,s,n);return c.name=e,l.name=e+` snow`,c.rotation.y=l.rotation.y=a,ce.push({name:e,x:t,z:n,zone:o}),{g:c,s:l,y:s}}function P(e){e.updateWorldMatrix(!0,!0),o.push(new tr().setFromObject(e))}function F(e,t,n,r,i,a,o=.048){return q(e,t,o,n,r,i+o/2,a,se)}function ue(e,t,n,r,i,a,o=1,s=1,c=1){let l=xd(e,t,n,r,i,a);return l.scale.set(o,s,c),l}function de(e,t,n,r,i=24){return K(e,new xo(new sa(t),i,n,5,!1),r)}function fe(e,t,n,r,i,a,o){let s=K(e,new bo(t,n,5,16),o,r,i,a);return s.rotation.x=Math.PI/2,s}function pe(e,t){let n=new Pr;return n.setAttribute(`position`,new Sr(e,3)),n.setAttribute(`uv`,new Sr(e.flatMap((t,n)=>n%3==0?[e[n],e[n+2]]:[]),2)),n.setIndex(t),n.computeVertexNormals(),n}function me(e,t,n,r){J(e,.012,.013,.004,t,n,r,y)}function he(e,t,n,r){for(let i=0;i<5;i++)Y(e,U(t,n,r),U(t+.055*Math.sin(i*2),n-.09-i%2*.025,r+.04*Math.cos(i*2)),.003,_,.001)}function ge(e,t,n=1,r=`middle`){let{g:i,s:a}=le(`Low salt-tolerant beach foliage`,e,t,0,r);for(let e=0;e<8;e++){let t=e*2.399,n=.05+.022*e,r=U(Math.sin(t)*n,.06+e%4*.027,Math.cos(t)*n);Y(i,U(0,.018,0),r,.008,A,.004);let o=ue(i,.075,r.x,r.y,r.z,e%2?k:O,.46,.27,1.2);o.rotation.y=t,ue(a,.068,r.x,r.y+.025,r.z,se,.45,.33,1.05).rotation.y=t}i.scale.setScalar(n),a.scale.setScalar(n)}for(let[e,t,n]of[[-5.7,6.35,.15],[3.8,6.55,-.22]]){let{g:r,s:i}=le(`Three-loop rope mooring post`,e,t,n);J(r,.075,.081,.7,0,.35,0,p),F(i,.132,.132,0,.7,0,.055);let a=[];for(let e=0;e<=72;e++){let t=e/72*Math.PI*6;a.push(U(Math.cos(t)*.087,.4+e/72*.12,Math.sin(t)*.087))}de(r,a,.017,_,72),de(r,[U(.08,.43,.03),U(.18,.27,.1),U(.28,.07,.12),U(.36,.035,.1)],.014,_,14),he(r,.36,.035,.1),de(r,[U(-.04,.5,-.08),U(-.13,.39,-.08),U(-.16,.22,-.04)],.012,_,12),he(r,-.16,.22,-.04),P(r)}{let{g:e,s:t}=le(`Shallow handcart with terracotta and burlap`,-7.25,6.85,-.35);for(let n=0;n<6;n++)q(e,.19,.055,.79,-.5+n*.2,.35,0,f),F(t,.175,.73,-.5+n*.2,.378,0,.045);for(let n of[-.42,.42])q(e,1.27,.19,.055,0,.455,n,m),F(t,1.25,.05,0,.55,n,.043);for(let n of[-.63,.63])q(e,.055,.19,.87,n,.455,0,f),F(t,.05,.83,n,.55,0,.043);Y(e,U(-.49,.26,0),U(.49,.26,0),.035,ae,.035);for(let n of[-.69,.69]){let r=J(e,.255,.255,.075,n,.255,.02,p);r.rotation.z=Math.PI/2;let i=K(e,new bo(.248,.018,5,18),ae,n,.255,.02);i.rotation.y=Math.PI/2,J(e,.04,.04,.11,n,.255,.02,ae).rotation.z=Math.PI/2;for(let t=0;t<6;t++){let r=t*Math.PI/3;Y(e,U(n,.255,.02),U(n,.255+Math.sin(r)*.22,.02+Math.cos(r)*.22),.011,m,.011)}ue(t,.24,n,.49,.02,se,.2,.15,.8)}for(let n of[-.4,.4])Y(e,U(n,.37,-.37),U(n,.56,-1.25),.028,f,.025),Y(t,U(n,.401,-.4),U(n,.592,-1.25),.023,se,.02);function n(n,r,i,a){J(e,i,i*.68,a,n,.39+a/2,r,b),fe(e,i,.027,n,.39+a,r,x),J(e,i*.87,i*.87,.015,n,.39+a-.023,r,S),fe(t,i,.025,n,.39+a+.024,r,se);for(let t=0;t<5;t++){let i=t*2.1;Y(e,U(n,.39+a,r),U(n+Math.sin(i)*.14,.61+a,r+Math.cos(i)*.12),.012,O,.003)}}n(-.29,.13,.19,.32),n(.2,.16,.15,.25);let r=ue(e,.25,.32,.55,-.2,C,.85,.8,.7);r.rotation.z=.3,ue(e,.1,.31,.74,-.2,C,.6,.52,.65),fe(e,.052,.014,.31,.755,-.2,v),ue(t,.205,.32,.705,-.2,se,.9,.15,.72),P(e)}{let{g:e,s:t}=le(`Inverted wooden stool`,3.9,7.2,.38);q(e,.46,.065,.4,0,.038,0,p),F(t,.45,.39,0,.072,0,.045);for(let n of[-.16,.16])for(let r of[-.13,.13])Y(e,U(n,.07,r),U(n*1.23,.48,r*1.23),.025,f,.021),F(t,.05,.05,n*1.23,.48,r*1.23,.045);for(let n of[-.19,.19])Y(e,U(n,.29,-.155),U(n,.29,.155),.017,p,.017),Y(t,U(n,.317,-.155),U(n,.317,.155),.021,se,.021);P(e)}function _e(e,t,n,r,i){let a=G(e,t,.012,n);a.rotation.y=i;let o=[0,0,0],s=[];for(let e=0;e<=10;e++){let t=-1.18+e/10*2.36;o.push(Math.sin(t)*r,Math.sin(e/10*Math.PI)*r*.23,Math.cos(t)*r),e&&s.push(0,e+1,e)}K(a,pe(o,s),ne);for(let e=0;e<9;e++){let t=-1.1+e/8*2.2;Y(a,U(0,.007,0),U(Math.sin(t)*r,.018,Math.cos(t)*r),.004,j,.002)}}{let{g:e,s:t}=le(`Coconut halves and four seashells`,-2.65,7.05,.15);for(let[n,r,i]of[[-.2,.03,.14],[.14,.15,.11]]){K(e,new yo(i,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2),re,n,i*.66,r);let a=K(e,new yo(i*.85,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2),M,n,i*.68,r);a.material=a.material.clone(),a.material.side=2,fe(e,i*.94,.018,n,i*.66,r,M),ue(t,i*.68,n,.035,r,se,1,.22,1)}[[.35,.1,.075,.4],[.1,-.3,.1,2.4],[-.38,-.19,.065,-.8],[.42,-.18,.06,1.7]].forEach(t=>_e(e,...t))}{let{g:e,s:t}=le(`Weathered driftwood`,1.8,7.55,.55);Y(e,U(-.64,.055,-.1),U(.65,.1,.11),.075,m,.04),Y(e,U(-.15,.08,-.02),U(.1,.16,-.32),.031,p,.013),Y(e,U(.31,.09,.06),U(.48,.11,.27),.025,m,.008),Y(t,U(-.59,.12,-.09),U(.6,.155,.1),.025,se,.018);for(let t=0;t<4;t++)Y(e,U(-.61,.05,-.09),U(-.8,.04+t*.015,-.15+t*.036),.012,p,.002);P(e)}function ve(e,t,n,r,i=0){let{g:a,s}=le(`Open cream parasol`,e,t,r,`middle`);a.rotation.z=s.rotation.z=i,J(a,.032,.041,2.48,0,1.24,0,p),ue(a,.065,0,2.65,0,m,.65,1,.65);let c=[],l=[];for(let e=0;e<=40;e++)for(let t=0;t<=5;t++){let r=e/40*Math.PI*2,i=t/5,a=.047*Math.sin(r*10/2)**2*i*i;c.push(Math.cos(r)*n*i,2.61-.43*i**1.38-a,Math.sin(r)*n*i)}for(let e=0;e<40;e++)for(let t=0;t<5;t++){let n=e*6+t;l.push(n,n+5+1,n+1,n+1,n+5+1,n+5+2)}let u=K(a,pe(c,l),T);u.material.side=2,K(s,pe(c.map((e,t)=>t%3==1?e+.048:e*.975),l),se);for(let e=0;e<10;e++){let t=e/10*Math.PI*2,r=U(Math.cos(t)*n,2.175,Math.sin(t)*n);de(a,[U(0,2.575,0),U(Math.cos(t)*n*.5,2.42,Math.sin(t)*n*.5),r],.012,p,10),Y(a,U(0,1.88,0),U(Math.cos(t)*n*.48,2.39,Math.sin(t)*n*.48),.009,f,.009)}J(a,.055,.055,.09,0,1.9,0,f),o.push(new tr(U(e-.08,fd(e,t),t-.08),U(e+.08,fd(e,t)+2.5,t+.08)))}ve(-7.3,10.4,1.57,.12),ve(4.4,11.7,1.46,-.3,5*Math.PI/180);{let{g:e,s:t}=le(`Wood deckchair and terracotta striped towel`,-7.25,11.3,-.22,`middle`);for(let n of[-.37,.37])Y(e,U(n,.07,-.68),U(n,.7,.43),.027,f,.027),Y(e,U(n,.08,.65),U(n,.48,-.42),.028,p,.028),Y(e,U(n,.4,-.35),U(n,1.09,-.83),.026,f,.026),Y(t,U(n,.438,-.35),U(n,1.128,-.83),.024,se,.024),q(e,.09,.035,.68,n,.64,-.04,f),F(t,.085,.65,n,.66,-.04,.046);for(let[t,n]of[[-.79,1.035],[-.36,.43],[.4,.43]])Y(e,U(-.38,n,t),U(.38,n,t),.024,p,.024);q(e,.65,.025,.75,0,.44,.025,E),F(t,.63,.7,0,.46,.025,.044);let n=q(e,.65,.021,.86,0,.75,-.59,E);n.rotation.x=.96;let r=F(t,.63,.83,0,.765,-.58,.043);r.rotation.x=.96;let i=q(e,.43,.013,.76,.035,.471,.03,D);i.rotation.y=.07;let a=q(e,.43,.015,.76,.035,.77,-.58,D);a.rotation.x=.96,q(e,.43,.26,.012,.035,.32,.415,D);for(let t=0;t<13;t++)Y(e,U(-.18+t*.034,.195,.421),U(-.177+t*.034,.16,.422),.003,E,.002);P(e)}{let{g:e,s:t}=le(`Partly buried wicker case`,5.15,13.65,.32,`middle`),n=q(e,.86,.35,.54,0,.105,0,w);n.rotation.z=.06,q(e,.89,.065,.57,0,.292,0,w),F(t,.85,.53,0,.325,0,.046);for(let t=0;t<14;t++)q(e,.014,.3,.005,-.398+t*.061,.14,.276,v);for(let t=0;t<6;t++)q(e,.84,.012,.009,0,.018+t*.052,.282,m);for(let t of[-.25,.25])q(e,.038,.36,.565,t,.13,0,p);de(e,[U(-.11,.24,.305),U(-.12,.13,.36),U(.12,.13,.36),U(.11,.24,.305)],.015,p,15),P(e)}{let{g:e}=le(`Small beach starfish`,2.85,15.1,.23,`middle`),t=new Oa;for(let e=0;e<10;e++){let n=e*Math.PI/5,r=e%2?.055:.16,i=Math.cos(n)*r,a=Math.sin(n)*r;e?t.lineTo(i,a):t.moveTo(i,a)}t.closePath();let n=K(e,new po(t,{depth:.018,bevelEnabled:!0,bevelThickness:.01,bevelSize:.009,bevelSegments:1,steps:1}),ie);n.rotation.x=-Math.PI/2;for(let t=0;t<5;t++){let n=t*Math.PI/2.5;ue(e,.008,Math.cos(n)*.08,.027,Math.sin(n)*.08,ne,1,.4,1)}}[[-8.1,8.8,1],[-4.8,10.5,.9],[5.6,9.7,1],[-5.9,13.9,.85],[3.8,15.2,.85],[-4.25,16.9,.75]].forEach(e=>ge(e[0],e[1],e[2]));for(let[e,t,n,r]of[[0,-6.2,20.2,.28],[1,5.4,20.3,.34],[2,-4.5,23.4,.21],[3,4.3,23.6,.25],[4,-8.9,17.9,.38],[5,7.6,17.7,.3]]){let{g:i,s:a}=le(`Low pale rounded shoreline stone`,t,n,e*.7,`far`),o=.42+r*.9;ue(i,.5,0,r*.3,0,e%2?ee:te,o,r*1.4,o*.82),ue(a,.5,0,r*.94,0,se,o*.82,.09,o*.65),P(i),e<4&&ge(t+.65,n-.4,.65,`far`)}let ye=Od,be=Ed,xe=Dd,Se=kd,Ce=Td,we=wd,{shorelineZ:Te,endZ:Ee,startZ:De}=Ad,Oe=G(r),ke=G(i);Oe.name=`Independent sloping beach boardwalk`;let Ae=[],je=jd;function Me(e,t,n){let r=[],i=[];for(let i=0;i<2;i++)for(let a=0;a<=12;a++){let o=we-Ce/2+a/12*Ce,s=e+(i?1:-1)*be/2,c=t===9||t===21?Math.sin(a/12*Math.PI)*.027*(t===9?1:-.6):0,l=je(s,t)+c+(n?.048:0);r.push(o,l,s)}for(let e=0;e<12;e++)i.push(e,e+12+1,e+1,e+1,e+12+1,e+12+2);{let e=r.length/3;for(let t=0;t<e;t++)r.push(r[t*3],r[t*3+1]-(n?.048:.052),r[t*3+2]);let t=[...Array.from({length:13},(e,t)=>t),...Array.from({length:13},(e,t)=>25-t)];for(let n=0;n<t.length;n++){let r=t[n],a=t[(n+1)%t.length];i.push(r,a,r+e,a,a+e,r+e)}for(let t=0;t<12;t++)i.push(e+t,e+t+1,e+t+12+1,e+t+1,e+t+12+2,e+t+12+1)}let a=pe(r,i),o=a.getAttribute(`uv`);for(let e=0;e<o.count;e++)o.setXY(e,r[e*3+2]*2.8,r[e*3]*.45);return a}for(let e=0;e<ye;e++){let t=De+be/2+e*.372,n=je(t,e),r=n<cd,i=K(Oe,Me(t,e,!1),e%5==0?m:e%7==0?p:f);i.name=`Boardwalk plank `+(e+1),Ae.push({index:e,center:U(we,n,t),width:Ce,depth:be,topY:n,underwater:r,warped:e===9||e===21}),P(i),r||K(ke,Me(t,e,!0),se);for(let n of[-1.71,.4099999999999999])for(let r of[t-.11,t+.11])me(Oe,n,je(r,e)+.003,r);if(e<30&&e%4==1){let r=q(a,Ce*.58,.004,.09,-.56,n+.004,t+.035,N);r.rotation.x=-Math.atan2(je(t+.15,e)-je(t-.15,e),.3)}}for(let e of[-1.42,.12])for(let t=0;t<30;t++){let n=De+.16+t*.372;Y(Oe,U(e,je(n,t)-.065,n),U(e,je(n+.374,t)-.065,n+.374),.044,p,.044)}let Ne=[De+1.25,De+5.8,Ee-.68];for(let e of[-1,1]){let t=we+e*1.3,n=[];for(let e of Ne){let r=fd(t,e),i=r+.82;if(n.push(U(t,i-.11,e)),J(Oe,.06,.064,.91,t,r+.365,e,p),J(Oe,.0605,.0645,.18,t,r+.045,e,oe),fe(Oe,.067,.012,t,i-.11,e,v),F(ke,.105,.105,t,i,e,.055),r<-1.43){let n=R.clamp(cd-r,.045,.47);J(Oe,.061,.064,n,t,r+n/2,e,oe);for(let n=0;n<10;n++){let i=n*2.4;ue(Oe,.016,t+Math.sin(i)*.061,r+.06+n%5*.041,e+Math.cos(i)*.061,ne,.85,1,.7)}}o.push(new tr(U(t-.064,r-.09,e-.064),U(t+.064,i,e+.064)))}for(let e=0;e<n.length-1;e++){let t=n[e],r=n[e+1],i=t.clone().lerp(r,.5);i.y-=.29,de(Oe,[t,i,r],.019,_,24),de(ke,[t.clone().add(U(0,.027,0)),i.clone().add(U(0,.027,0)),r.clone().add(U(0,.027,0))],.015,se,24)}let r=n[2];de(Oe,[r,U(t+e*.08,r.y-.15,r.z+.1),U(t+e*.12,r.y-.32,r.z+.11)],.016,_,14),he(Oe,t+e*.12,r.y-.32,r.z+.11)}for(let e=0;e<2;e++){let t=De-.66+e*.36,n=fd(we,t),r=.15*(e+1),i=q(Oe,2.48,r,.36,we,n+r/2,t,te);F(ke,2.43,.32,we,n+r,t,.047),P(i)}for(let[e,t,n,r]of[[-4.4,7.3,.4,.23],[2.2,9.2,.34,.23],[-6.2,12.8,.29,.16],[3.6,14.4,.23,.13]])ue(a,1,e,fd(e,t)+.004,t,N,n,.003,r);let I=U(we,je(De,0),De),Pe=U(we,je(Ee,32),Ee);Sd(r),Sd(i),Sd(a),r.traverse(e=>{e instanceof ii&&(e.castShadow=!0,e.receiveShadow=!0)}),i.traverse(e=>{e instanceof ii&&(e.castShadow=!0,e.receiveShadow=!0)});let Fe=`sun`;function Ie(e,t){if(t!==Fe){Fe=t,i.visible=t===`snow`,a.visible=t===`rain`;for(let{m:e,color:n,roughness:r,amount:i}of s)e.color.copy(n).multiplyScalar(t===`rain`?i:1),e.roughness=t===`rain`?Math.max(.34,r*.67):r}}return{root:t,update:Ie,boardwalk:{start:I,end:Pe,length:Se,planks:Ae,topAtZ:Md},colliders:o,diagnostics:()=>({weather:Fe,drawCalls:r.children.filter(e=>e instanceof ii).length+((i.visible?i:a).visible?(i.visible?i:a).children.filter(e=>e instanceof ii).length:0),objects:ce,boardwalk:{start:I.toArray(),end:Pe.toArray(),length:Se,width:Ce,planks:Ae.length,gap:xe,shorelineZ:Te,underwaterPlanks:Ae.filter(e=>e.underwater).map(e=>e.index),warpedPlanks:Ae.filter(e=>e.warped).map(e=>e.index),lastDryPlank:Ae.filter(e=>!e.underwater).at(-1)?.center.toArray()},colliders:o.length,farBeachLargeProps:ce.filter(e=>e.zone===`far`&&!/stone|foliage/.test(e.name)).length,propsOutsideIsland:ce.filter(e=>dd(e.x,e.z)>1).map(e=>e.name),snowDepth:[.04,.06]})}}var Pd=new B;function Fd(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Pd.copy(t),Pd[r]=0,Pd.normalize();let l=.5*o/(o+s),u=1-Pd.angleTo(e)/c;return Math.sign(Pd[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Id=class e extends Ji{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new B,c=new B,l=new B(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new B,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Fd(m,c,`z`,`y`,i,n),f[a+1]=1-Fd(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Fd(m,c,`z`,`y`,i,n),f[a+1]=1-Fd(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Fd(m,c,`x`,`z`,i,e),f[a+1]=Fd(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Fd(m,c,`x`,`z`,i,e),f[a+1]=1-Fd(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Fd(m,c,`x`,`y`,i,e),f[a+1]=1-Fd(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Fd(m,c,`x`,`y`,i,e),f[a+1]=1-Fd(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Ld=U(1.35,-1.63,30.8),Rd=U(.55,-1.57,26.899752605542062),zd=U(-.65,-1.57,26.899752605542062),Bd=Math.PI/2+Math.PI/12,Vd=16,Hd=30,Ud=16,Wd=62,Gd=e=>{let t=R.clamp(e,0,1);return t*t*(3-2*t)},Kd=(e,t=.8,n=0)=>new Mo({color:e,roughness:t,metalness:n}),qd=(e,t,n,r,i,a,o,s,c=.04)=>K(e,new Id(t,n,r,2,Math.min(c,t/3,n/3,r/3)),s,i,a,o);function Jd(e,t,n=Ld.clone()){let r=G(e);r.name=`One 7.2m rounded-bow excursion boat`,r.rotation.order=`YXZ`;let i=Rd.clone().sub(n).applyAxisAngle(U(0,1,0),-Bd),a=U(1.12,.76,R.clamp(i.z,-.2,-.05)),o={BoatState:0,BoatPhase:0,VisitorCount:2},s=Kd(`#EFE6D4`,.63),c=Kd(`#4A5D3F`,.48),l=Kd(`#C8A87C`,.61),u=Kd(`#99764D`,.88),d=Kd(`#B99C5C`,.29,.72),f=Kd(`#BFC5BD`,.25,.8),p=Kd(`#27342A`,.7),m=Kd(`#B6A585`),h=Kd(`#B59669`),g=Kd(`#8F704B`),_=Kd(`#E8DFCC`,.99),v=Kd(`#AD7058`),y=Kd(`#46514A`,.28),b=new No({color:`#DDE8D8`,transparent:!0,opacity:.24,roughness:.12,metalness:.05,depthWrite:!1,side:2}),x=Kd(`#E8EEE9`,.96),S=new Kr({color:`#DEEAE0`,transparent:!0,opacity:.32,depthWrite:!1}),C=G(r);C.name=`Batched closed hull and onboard fittings`;let w=new Oa;w.moveTo(-.9,-3.6),w.lineTo(.9,-3.6),w.bezierCurveTo(1.08,-3.6,1.15,-3.35,1.15,-2.9),w.lineTo(1.15,1.65),w.bezierCurveTo(1.15,2.72,.61,3.6,0,3.6),w.bezierCurveTo(-.61,3.6,-1.15,2.72,-1.15,1.65),w.lineTo(-1.15,-2.9),w.bezierCurveTo(-1.15,-3.35,-1.08,-3.6,-.9,-3.6);let T=w.getSpacedPoints(88).slice(0,-1);function E(e,t,n,r,i,a=C){let o=[],s=[],c=[];for(let i=0;i<T.length;i++){let a=T[i];o.push(a.x*t,e,a.y*t,a.x*r,n,a.y*r),s.push(i/T.length,0,i/T.length,1)}for(let e=0;e<T.length;e++){let t=e*2,n=(e+1)%T.length*2;c.push(t,t+1,n,n,t+1,n+1)}let l=new Pr;return l.setAttribute(`position`,new Sr(o,3)),l.setAttribute(`uv`,new Sr(s,2)),l.setIndex(c),l.computeVertexNormals(),K(a,l,i)}function D(e,t,n,r){let i=new po(new Oa(T.map(t=>new z(t.x*e,t.y*e))),{depth:n,bevelEnabled:!1,steps:1});return i.rotateX(Math.PI/2),i.translate(0,t,0),K(C,i,r)}D(.79,-.17,.09,s),E(-.17,.79,-.1,.92,s),E(-.1,.92,.055,.965,c),E(.055,.965,.44,.995,s),E(.44,.995,.71,1,s),E(.71,1,.71,.912,l),E(.71,.912,.13,.82,s),D(.82,.13,.08,s);for(let e=-.75;e<=.75;e+=.15)q(C,.136,.025,5.8,e,.151,-.15,l);for(let e=-2.7;e<=2.65;e+=.61){let t=e>1.6?.92-(e-1.6)*.23:.97;for(let n of[-1,1])Y(C,U(n*t*.86,.18,e),U(n*t,.63,e),.027,l,.03),xd(C,.015,n*t,.59,e,d)}for(let e=0;e<T.length;e++){let t=T[e],n=T[(e+1)%T.length];Y(C,U(t.x,.735,t.y),U(n.x,.735,n.y),.052,l,.052),Y(C,U(t.x*.99,.42,t.y*.99),U(n.x*.99,.42,n.y*.99),.014,u,.014),e%5==0&&xd(C,.016,t.x,.783,t.y,d)}let O=[];for(let e of[-1,1])for(let t of[-.98,.71]){let n=e*.7;qd(C,.69,.105,1.15,n,.31,t,l,.025),q(C,.065,.18,.88,n-e*.22,.215,t,l),q(C,.065,.18,.88,n+e*.22,.215,t,l);let r=e===-1&&t<0,i=G(C,n+(r?.035:0),.438,t+(r?.045:0));i.rotation.y=r?.12:0,qd(i,.65,.16,1.02,0,0,0,_,.07);for(let e of[-1,1])Y(i,U(-.26,.055,e*.45),U(.26,.055,e*.45),.008,s,.008),Y(i,U(e*.28,.055,-.45),U(e*.28,.055,.45),.008,s,.008);O.push({x:i.position.x,y:.54,z:i.position.z,angle:i.rotation.y})}for(let e=0;e<3;e++){let t=.2+e*.2;qd(C,.29,t,.44,.32+e*.29,.155+t/2,a.z,l,.015),q(C,.27,.012,.035,.32+e*.29,.16+t,a.z-.19,u)}let k=G(C,-.7,.54,-1.1);k.rotation.y=.12,qd(k,.6,.035,.55,0,0,0,_,.015),qd(k,.055,.34,.55,.275,-.16,0,_,.015);for(let e=-.23;e<=.23;e+=.1)q(k,.59,.008,.033,0,.022,e,v),q(k,.012,.33,.033,.308,-.16,e,v);for(let e=-.24;e<=.24;e+=.06)Y(k,U(.3,-.33,e),U(.34,-.39,e+.012),.006,_,.004);function A(e,t,n,r,i,a,o){let s=G(C,e,t,n);s.rotation.y=o,qd(s,r,i,a,0,0,0,h,.055);for(let e=-r/2+.05;e<r/2;e+=.065)q(s,.016,i-.04,.012,e,0,a/2+.002,g),q(s,.016,i-.04,.012,e,0,-a/2-.002,g),q(s,.016,.012,a-.03,e,i/2+.003,0,g);for(let e=-i/2+.035;e<i/2;e+=.055)q(s,r-.04,.012,.012,0,e,a/2+.008,l),q(s,r-.04,.012,.012,0,e,-a/2-.008,l),q(s,.012,.012,a-.04,r/2+.005,e,0,g),q(s,.012,.012,a-.04,-r/2-.005,e,0,g);for(let e of[-1,1])q(s,.05,i+.009,a+.012,e*r*.3,0,0,u),q(s,.065,.056,.025,e*r*.3,.02,a/2+.02,d);Y(s,U(-.13,i/2+.04,0),U(.13,i/2+.04,0),.019,u,.019),Y(s,U(-.13,i/2+.04,0),U(-.13,i/2-.005,0),.019,d,.019),Y(s,U(.13,i/2+.04,0),U(.13,i/2-.005,0),.019,d,.019)}A(.18,.39,2.22,.93,.43,.6,-.1),A(.15,.74,2.22,.73,.27,.49,.12);let ee=Array.from({length:160},(e,t)=>{let n=t/159*Math.PI*8,r=.31-t/159*.19;return U(-.46+Math.cos(n)*r,.183+t/159*.037,2.65+Math.sin(n)*r)});K(C,new xo(new sa(ee),160,.016,5,!1),m),Y(C,ee[0],U(-.79,.19,2.2),.016,m,.016);let te=G(C,-1.15,.38,-1.75);te.rotation.y=Math.PI/2,K(te,new bo(.27,.066,8,40),s);for(let e=0;e<4;e++){let t=K(te,new bo(.272,.071,8,9,Math.PI*.24),c);t.rotation.z=e*Math.PI/2}K(te,new bo(.365,.013,5,40),m);for(let e of[0,Math.PI/2,Math.PI,Math.PI*1.5])Y(te,U(Math.cos(e)*.29,Math.sin(e)*.29,0),U(Math.cos(e)*.365,Math.sin(e)*.365,0),.012,m,.012);let ne=G(C,0,.42,-3.64);qd(ne,.5,.47,.46,0,.05,-.12,c,.09),qd(ne,.51,.13,.44,0,.19,-.12,f,.04),q(ne,.36,.18,.05,0,-.03,.12,p),J(ne,.06,.08,.59,0,-.42,-.14,f),qd(ne,.2,.14,.38,0,-.72,-.18,c,.03);let j=G(ne,0,-.72,-.41),re=J(j,.035,.035,.12,0,0,0,f);re.rotation.x=Math.PI/2;for(let e=0;e<3;e++){let t=qd(j,.07,.23,.025,0,.095,-.04,f,.025);t.rotation.z=e*Math.PI*2/3,t.position.set(Math.sin(-e*Math.PI*2/3)*.095,Math.cos(e*Math.PI*2/3)*.095,-.04)}Y(ne,U(.18,.12,.1),U(.48,.18,.47),.027,p,.023),q(C,.6,.06,.13,0,.49,-3.51,l),qd(C,.61,.49,.52,.5,.405,-2.47,s,.06),q(C,.64,.065,.56,.5,.69,-2.46,l);let M=G(C,.49,.81,-2.52);M.rotation.x=-.65,K(M,new bo(.17,.016,6,24),u);for(let e=0;e<Math.PI*2;e+=Math.PI*2/3)Y(M,U(0,0,0),U(Math.cos(e)*.16,Math.sin(e)*.16,0),.012,d,.012);let ie=G(C,.48,.94,-2.08);ie.rotation.x=-.14,qd(ie,.91,.44,.018,0,0,0,b,.008);for(let e of[-.465,.465])Y(ie,U(e,-.23,0),U(e,.23,0),.018,d,.018);for(let e of[-.23,.23])Y(ie,U(-.465,e,0),U(.465,e,0),.018,d,.018);let ae=G(C,-1.16,.77,.26);ae.rotation.z=-.09;let oe=new Oa;oe.moveTo(-.23,0),oe.lineTo(.21,0),oe.lineTo(.27,-.7),oe.quadraticCurveTo(.12,-.79,-.03,-.73),oe.lineTo(-.28,-.77),oe.closePath();let se=new po(oe,{depth:.043,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.018,bevelThickness:.012});se.rotateY(Math.PI/2),K(ae,se,y),Y(ae,U(0,-.04,-.18),U(-.06,-.58,-.33),.075,y,.06),Y(ae,U(0,-.05,.18),U(-.08,-.52,.32),.075,y,.06);for(let e of[-.12,.03,.15])Y(ae,U(-.057,-.12,e),U(-.055,-.68,e+.02),.008,p,.004);for(let e of[-2.85,2.95])for(let t of[-.7,.7])q(C,.17,.035,.06,t,.77,e,d),Y(C,U(t-.09,.8,e),U(t+.09,.8,e),.016,d,.016);for(let e of[-1,1])for(let t of[-2.1,1.65])Y(C,U(e*1.12,.77,t-.17),U(e*1.12,.87,t-.17),.014,d,.014),Y(C,U(e*1.12,.87,t-.17),U(e*1.12,.87,t+.17),.014,d,.014),Y(C,U(e*1.12,.87,t+.17),U(e*1.12,.77,t+.17),.014,d,.014);Sd(C),C.traverse(e=>{e instanceof ii&&(e.castShadow=e.material!==b)});let N=G(r);N.name=`50mm snow on upward rim and cushion tops only`,E(.835,1,.835,.915,x,N),E(.785,1,.835,1,x,N),E(.835,.915,.785,.915,x,N);for(let e of O){let t=G(N,e.x,e.y,e.z);t.rotation.y=e.angle,qd(t,.625,.05,.99,0,0,0,x,.022)}Sd(N),N.visible=!1;let ce=new No({color:`#D6E5E0`,transparent:!0,opacity:.65,roughness:.05,depthWrite:!1}),le=new gi(new yo(.006,5,4),ce,24);le.name=`Rain droplets on windshield`,r.add(le),le.visible=!1;let P=new jn,F=new rn().makeRotationX(-.14);F.setPosition(.48,.94,-2.08);let ue=G(e);ue.name=`Boat gangway and world-space visitors`;let de=G(ue),fe=q(de,.66,.065,1,0,0,0,l);fe.castShadow=!0;let pe=[q(de,.055,.085,1,-.255,-.05,0,u),q(de,.055,.085,1,.255,-.05,0,u)],me=Array.from({length:9},(e,t)=>q(de,.64,.017,.03,0,.04,(t-4)/9,u)),he=Rd.clone().add(U(-.1,.04,.039)),ge=G(ue,he.x,he.y,he.z);q(ge,.16,.03,.08,0,0,0,d),Y(ge,U(-.12,.04,0),U(.12,.04,0),.018,d,.018),Sd(ge);let _e=G(e);_e.name=`Mooring rope, slack on arrival and released on departure`;let ve=Array.from({length:20},()=>K(_e,new Xi(.013,.013,1,5),m)),ye=U(1.1,.77,.3),be=Kd(`#B8A18B`),xe=Kd(`#E3DAC5`),Se=Kd(`#7C8B71`),Ce=Kd(`#CEB780`),we=Kd(`#A59D85`),Te=[];for(let e=0;e<3;e++){let t=G(ue);t.name=[`Faceless straw-hat linen visitor`,`Faceless beach-dress visitor`,`Optional faceless linen visitor`][e];let n=G(t,0,.82,0),r=qd(n,.37,.48,.23,0,.24,0,e===1?Se:xe,.07);r.castShadow=!0,J(n,.055,.06,.08,0,.52,0,be),xd(n,.115,0,.68,0,be).scale.set(.82,1.07,.91),e===1?(xd(n,.12,0,.7,-.028,p).scale.set(1,1,.72),xd(n,.06,0,.69,-.13,p),J(n,.22,.29,.47,0,-.08,0,Se)):(J(n,.22,.22,.028,0,.78,0,Ce),J(n,.115,.14,.13,0,.85,0,Ce),J(n,.141,.142,.032,0,.8,0,u));let i=[],a=[],o=[],s=[];for(let t of[-1,1]){let r=G(n,t*.225,.4,0);J(r,.052,.044,.31,0,-.135,0,e===1?be:xe),Y(r,U(0,-.28,0),U(0,-.49,.05),.035,be,.031),xd(r,.039,0,-.5,.05,be),i.push(r);let c=G(n,t*.1,-.02,0);J(c,.066,.055,.38,0,-.19,0,e===1?be:we);let l=G(c,0,-.38,0);J(l,.053,.038,.37,0,-.185,0,e===1?be:we),s.push(qd(l,.13,.07,.23,0,-.385,.045,u,.025)),a.push(c),o.push(l)}Te.push({root:t,hips:n,leftArm:i[0],rightArm:i[1],legs:a,knees:o,feet:s,seat:U(e===1?-.7:.7,-.25,e===2?-.98:.71),phase:e*.17})}let Ee=G(e);Ee.name=`Moving aft-facing V wake and idle propeller ripples`;let De=[];for(let e of[-1,1])for(let t=0;t<3;t++){let n=K(Ee,new xo(new sa(Array.from({length:18},(n,r)=>{let i=r/17;return U(e*(.42+i*(1.8+t*.25)),0,-3.7-i*(5.5+t*.7))})),18,.019-t*.003,4,!1),S);n.userData.restPosition=new Float32Array(n.geometry.attributes.position.array),De.push(n)}let Oe=Array.from({length:3},()=>{let e=K(Ee,new bo(.3,.009,4,32),S,0,0,-3.95);return e.rotation.x=Math.PI/2,e}),ke=U(Math.sin(Bd),0,Math.cos(Bd)),Ae=U(0,1,0),je=U(0,0,0),Me=U(0,0,0),Ne=U(0,0,0),I=new rn,Pe=[];for(let e of[-.065,.065])for(let t of[-.035,.035])for(let n of[-.115,.115])Pe.push(U(e,t,n));let Fe=0,Ie=`sun`,L=0,Le=0,Re=n.y,ze=[n.y,n.y],Be=0,Ve=0,He=!0,Ue=0,We=0,Ge=0,Ke=e=>He?((e+Ve)%Wd+Wd)%Wd:Ue,qe=e=>e<Vd?0:e<46?1:2;function Je(e,t){let n=Ke(t);if(e.BoatPhase!==void 0&&Number.isFinite(e.BoatPhase)&&(n=R.clamp(e.BoatPhase,0,1-1e-9)*Wd),e.BoatState!==void 0&&[0,1,2].includes(e.BoatState)){let t=[0,Vd,46];(e.BoatPhase===void 0||qe(n)!==e.BoatState)&&(n=t[e.BoatState])}e.AutoCycle!==void 0&&(He=e.AutoCycle),Ve=n-t,Ue=n,e.VisitorCount!==void 0&&Number.isFinite(e.VisitorCount)&&(o.VisitorCount=R.clamp(Math.round(e.VisitorCount),0,3)),o.BoatState=We=qe(n),o.BoatPhase=Ge=n/Wd}function Ye(e,t=Fe){return Je(e,t),Qe(t,0,Ie),{...o,AutoCycle:He}}let Xe=(e,t,n)=>{e.position.copy(t).add(n).multiplyScalar(.5),e.scale.y=t.distanceTo(n),e.quaternion.setFromUnitVectors(Ae,n.clone().sub(t).normalize())};function Ze(e,t){let n=e.slice(1).map((t,n)=>t.distanceTo(e[n])),r=n.reduce((e,t)=>e+t,0),i=R.clamp(t,0,1)*r;for(let t=0;t<n.length;t++){if(i<=n[t]||t===n.length-1)return e[t].clone().lerp(e[t+1],Math.min(1,i/Math.max(.001,n[t])));i-=n[t]}return e[e.length-1].clone()}function Qe(e,i,c){let u=o.BoatState!==We,d=o.BoatPhase!==Ge;(u||d)&&Je({...u?{BoatState:o.BoatState}:{},...d?{BoatPhase:o.BoatPhase}:{}},e),Fe=e,Ie=c;let f=Ke(e);o.BoatPhase=Ge=f/Wd,o.BoatState=We=qe(f);let p=f/Vd,m=(f-Vd-Hd)/Ud,h=o.BoatState===0?-33*(1-Gd(p)):o.BoatState===2?33*Gd(m):0;L=o.BoatState===0?198*R.clamp(p,0,1)*(1-R.clamp(p,0,1))/Vd:o.BoatState===2?198*m*(1-m)/Ud:0,r.position.copy(n).addScaledVector(ke,h);let g=U(-.72,0,-2.35).applyAxisAngle(Ae,Bd).add(r.position),_=U(.72,0,2.35).applyAxisAngle(Ae,Bd).add(r.position);ze=[t(g.x,g.z,e),t(_.x,_.z,e)],Re=(ze[0]+ze[1])*.5,r.position.y=Re+.06*Math.sin(e*Math.PI*2/3.2);let v=ze[1]-ze[0];if(r.rotation.set(R.clamp(-Math.atan2(v,4.7),-R.degToRad(1.8),R.degToRad(1.8)),Bd,R.clamp(Math.atan2(v,4.7)*.38+.012*Math.sin(e*1.15),-R.degToRad(2.5),R.degToRad(2.5)),`YXZ`),r.updateMatrixWorld(!0),N.visible=c===`snow`,le.visible=c===`rain`,s.roughness=c===`rain`?.33:.63,l.roughness=c===`rain`?.39:.61,le.visible){for(let t=0;t<24;t++){let n=U(-.4+t*.61803398875%1*.8,.19-(e*(.07+t%4*.012)+t*.137)%1*.38,.017).applyMatrix4(F);P.position.copy(n),P.rotation.set(-.14,0,0),P.scale.set(.62,1.2+t%3*.5,.55),P.updateMatrix(),le.setMatrixAt(t,P.matrix)}le.instanceMatrix.needsUpdate=!0}je.copy(a).applyMatrix4(r.matrixWorld),c===`snow`&&(je.y+=.05);let y=Rd.clone();y.y=Md(y.z,c)+.055,de.visible=o.BoatState===1,Be=je.distanceTo(y),de.position.copy(je).add(y).multiplyScalar(.5),de.up.copy(Ae),de.lookAt(y),fe.scale.z=Be;for(let e of pe)e.scale.z=Be;for(let e=0;e<me.length;e++)me[e].position.z=(e-4)/9*Be;de.updateMatrixWorld(!0),I.copy(de.matrixWorld).invert();let b=ye.clone().applyMatrix4(r.matrixWorld),x=f-Vd;Le=o.BoatState===1?Gd(x/.8):0;let C=o.BoatState===1?he.clone().add(U(0,.04,0)):U(1.09,.28,.6+.09*Math.sin(e*1.8)).applyMatrix4(r.matrixWorld),w=b;for(let e=0;e<ve.length;e++){let t=(e+1)/ve.length,n=b.clone().lerp(C,t);n.y-=Math.sin(t*Math.PI)*(o.BoatState===1?.04+(1-Le)*.22:.14),Xe(ve[e],w,n),w=n}let T=R.clamp(Math.round(o.VisitorCount),0,3);o.VisitorCount=T;for(let t=0;t<Te.length;t++){let n=Te[t];if(n.root.visible=t<T,!n.root.visible)continue;let i=0,s=0,l=0;if(o.BoatState===1){let e=R.clamp((x-t*.24)/2.85,0,1),n=R.clamp((x-26+t*.12)/3,0,1);i=e*(1-n),s=+(e>0&&e<1||n>0&&n<1),l=e===1&&x<4?Math.sin((x-2.85)*Math.PI)*.55:0}let u=Gd(i*6);Me.copy(n.seat).applyMatrix4(r.matrixWorld);let d=U(0,.18,n.seat.z).applyMatrix4(r.matrixWorld);Ne.copy(a).add(U(-.23,.075,0)).applyMatrix4(r.matrixWorld),c===`snow`&&(Ne.y+=.05);let f=.34+t*.36,p=zd.clone().add(U(t===0?-.2:t===1?.25:0,0,-f));p.y=Md(p.z,c)+.015;let m=[Me,d,Ne,je.clone().add(U(0,.075,0)),y.clone().add(U(0,.075,0)),p];n.root.position.copy(Ze(m,i)),n.root.position.x<Rd.x-.06&&n.root.position.z<=Rd.z+.02&&(n.root.position.y=Md(n.root.position.z,c)+.015),i<.12&&(n.root.position.y=R.lerp(Me.y,d.y,u));let h=Ze(m,Math.min(1,i+.02)),g=Ze(m,Math.max(0,i-.02)),_=s?Math.atan2(h.x-g.x,h.z-g.z)+(x>26?Math.PI:0):i>.99?Bd+Math.PI:Bd;n.root.rotation.set(0,_,0),n.hips.rotation.z=s?.018*Math.sin(e*9+t):0;for(let r=0;r<2;r++)n.legs[r].position.y=-.02,n.legs[r].rotation.x=-(1-u)*Math.PI*.47+s*u*.23*Math.sin(e*9+r*Math.PI+t),n.knees[r].rotation.x=(1-u)*Math.PI*.47+s*u*Math.max(0,-Math.sin(e*9+r*Math.PI+t))*.35;if(n.leftArm.rotation.x=s?-.2*Math.sin(e*9+t):-.12,n.rightArm.rotation.x=s?.2*Math.sin(e*9+t):-.12,n.rightArm.rotation.z=l>0?-.9-l-.16*Math.sin(e*15):-.08,n.leftArm.rotation.z=.08,o.BoatState===1&&i>.12){n.root.updateMatrixWorld(!0);let e=Ae.clone().transformDirection(n.hips.matrixWorld),t=e.clone().transformDirection(I);for(let r=0;r<2;r++){let i=0;for(let a of Pe){let o=a.clone().applyMatrix4(n.feet[r].matrixWorld),s=o.clone().applyMatrix4(I);Math.abs(s.x)<.36&&Math.abs(s.z)<Be/2+.2&&(i=Math.max(i,(.0605-s.y)/Math.max(.5,t.y))),o.x>=-1.85&&o.x<=Rd.x-.04&&o.z<=Rd.z+.02&&o.z>=zd.z-1.4&&(i=Math.max(i,(Md(o.z,c)+.008-o.y)/Math.max(.5,e.y)))}n.legs[r].position.y+=Math.max(0,i)}}}Ee.position.copy(r.position),Ee.position.y=t(r.position.x,r.position.z,e)+.015,Ee.rotation.y=Bd;let E=o.BoatState===1?.1:R.clamp(L/2,0,1);S.opacity=.1+E*.23;for(let n=0;n<De.length;n++){let r=(e*.25+n%3/3)%1,i=De[n];if(i.visible=o.BoatState!==1,i.position.z=-r*.9,i.scale.set(1+r*.14,1,1+r*.14),i.visible){let n=i.userData.restPosition,r=i.geometry.attributes.position;for(let a=0;a<r.count;a++){let o=n[a*3]*i.scale.x,s=n[a*3+2]*i.scale.z+i.position.z,c=Ee.position.x+o*Math.cos(Bd)+s*Math.sin(Bd),l=Ee.position.z-o*Math.sin(Bd)+s*Math.cos(Bd);r.setY(a,t(c,l,e)-Ee.position.y+.02+n[a*3+1])}r.needsUpdate=!0}}for(let t=0;t<Oe.length;t++){let n=(e*.46+t/3)%1;Oe[t].scale.setScalar(.35+n*2.2),Oe[t].position.z=-3.95-n*.65,Oe[t].visible=n<.88}}return Qe(0,0,`sun`),{root:r,parameters:o,update:Qe,setParameters:Ye,diagnostics:()=>({boatCount:1,lengthM:7.2,beamM:2.3,hull:`closed shell with flat solid bottom and inner cockpit`,anchor:n.toArray(),dockLanding:Rd.toArray(),dockVisitorDestination:zd.toArray(),yawDegrees:105,state:o.BoatState,stateLabel:[`Arriving`,`Moored`,`Departing`][o.BoatState],BoatPhase:o.BoatPhase,autoCycle:He,cycleSeconds:Wd,visitorCount:o.VisitorCount,maxVisitors:3,cushions:4,wickerSuitcases:2,buoyancyProbes:2,probeHeights:ze,buoyancyY:Re,bobAmplitudeM:.06,bobPeriodSeconds:3.2,pitchCapDegrees:1.8,rollCapDegrees:2.5,ropeTension:Le,gangwayLengthM:Be,gangwayVisible:de.visible,snowThicknessM:.05,snowSurfaceScope:`upward gunwale and cushion tops`,windshieldDroplets:le.visible?24:0,worldSpaceVisitors:!0,weather:Ie,time:Fe,speedMps:L,staticDrawCalls:C.children.filter(e=>e instanceof ii).length})}}function Yd(e,t,n,r){let i=matchMedia(`(pointer: coarse)`).matches||innerWidth<700,a=hd(e,r,i),o=vd(e,t,r,i),s=Nd(e),c=Jd(e,o.surfaceAt,Ld.clone()),l=G(e),u=W(13161938,.25);u.transparent=!0,u.opacity=.52,u.depthWrite=!1;for(let e=0;e<55;e++){let t=e/55*Math.PI*2,n=ud(t),r=U(n.x+Math.cos(t)*(.15+e%3*.18),cd+.014,n.y+Math.sin(t)*(.15+e%3*.18)),i=K(l,new Xi(.15+e%4*.08,.17+e%4*.08,.014,5),u,...r.toArray());i.rotation.y=e*1.17,i.scale.z=.6+e%4*.12}Sd(l),l.visible=!1;let d=W(15197142),f=[];for(let t=0;t<5;t++){let t=G(e);for(let e of[-1,1]){let n=K(t,new Zi(.07,.34,3),d,e*.13,0,0);n.rotation.z=e*1.3,n.scale.z=.25}f.push(t)}let p=G(e),m=W(13150332),h=W(15920093);W(4873535);for(let[e,t]of[[-41,-52],[22,-64]]){let n=G(p,e,cd+.03,t);xd(n,.25,0,0,0,m).scale.set(.5,.24,2.4),Y(n,U(0,0,0),U(0,1.15,0),.012,m);let r=new Oa;r.moveTo(0,.16),r.lineTo(0,1.1),r.lineTo(.56,.16),r.closePath();let i=K(n,new po(r,{depth:.015,bevelEnabled:!1}),h);i.rotation.y=.3}Sd(p);let g=G(n.root),_=W(12559466,.3,1),v=W(9077363,.6),y=G(g,-1.68,2.35,2.12);K(y,new Xi(.027,.058,.085,16,1,!0),_),xd(y,.012,0,-.032,0,_),Y(y,U(0,.04,0),U(0,.13,-.02),.01,_);for(let e=0;e<4;e++){let t=K(g,new Yi(.042,10),v,-1.13+e%2*.18,.853,1.85-e*.15);t.rotation.x=-Math.PI/2,t.scale.y=1.65}let b=n.interior.counter;for(let[e,t]of[[2.01,-.24],[2.04,-.03]]){let n=G(b,e,1.061,t),r=new Oa;r.absarc(0,0,.044,0,Math.PI*2,!1);let i=new Da;i.absarc(0,0,.037,0,Math.PI*2,!0),r.holes.push(i),K(n,new po(r,{depth:.073,bevelEnabled:!1}),h).rotation.x=-Math.PI/2,J(n,.037,.037,.004,0,.004,0,h),K(n,new bo(.023,.007,6,12),h,.047,.036,0)}let x=s.colliders.map(t=>{let n=new ii(new Ji(...t.getSize(U(0,0,0)).toArray()),new Kr({visible:!1}));return n.position.copy(t.getCenter(U(0,0,0))),n.userData.collision=!0,n.name=`Island static collision proxy`,e.add(n),n}),S=`sun`;return{boat:c,water:o,terrain:a,collisions:x,resize:o.resize,capture:o.capture,update(e,t,n,r,u){S=n,o.update(e,r,u),a.water.value=cd+o.params.TideLevel,a.caustics.value=i?0:o.params.CausticsStrength,s.update(e,n),c.update(e,t,n),l.visible=n===`snow`,l.position.y=o.params.TideLevel,f.forEach((t,r)=>{let i=e*.025+r*1.4;t.position.set(-7+Math.cos(i)*15,3.5+r*.16+Math.sin(e*.7+r)*.09,16+Math.sin(i)*8),t.rotation.y=-i,t.children.forEach((t,n)=>t.rotation.z=(n?1:-1)*(1.3+Math.sin(e*3+r)*.15)),t.visible=n!==`snow`}),y.rotation.z=Math.sin(e*.8)*.018},setParameters(e){let t=(t,n,r)=>R.clamp(e[t],n,r);for(let n of[`TideLevel`,`WaveAmplitude`,`FoamDensity`,`CausticsStrength`,`ShoreFog`])Number.isFinite(e[n])&&(o.params[n]=t(n,n===`TideLevel`?-.3:0,n===`TideLevel`?.4:n===`WaveAmplitude`?1.5:n===`ShoreFog`?.25:1));c.setParameters({...Number.isFinite(e.BoatPhase)?{BoatPhase:t(`BoatPhase`,0,1)}:{},...Number.isFinite(e.BoatState)?{BoatState:Math.round(t(`BoatState`,0,2))}:{},...Number.isFinite(e.VisitorCount)?{VisitorCount:Math.round(t(`VisitorCount`,0,3))}:{},...Number.isFinite(e.AutoCycle)?{AutoCycle:!!e.AutoCycle}:{}})},diagnostics:()=>({terrain:a.diagnostics(),water:o.diagnostics(),props:s.diagnostics(),boat:c.diagnostics(),weather:S,shoreIce:l.visible,collisionProxies:x.length,sceneryBirds:f.length,additionalNpcCount:0,sharedWeather:!0,causticsMobileDisabled:i,arrivalCups:2,arrivalBell:!0})}}var X=(e,t,n)=>new B(e,t,n),Xd=(e,t,n=0,r=0,i=0)=>{let a=new Mn;return a.name=t,a.position.set(n,r,i),e.add(a),a},Zd=(e,t=.72,n=0)=>new Mo({color:e,roughness:t,metalness:n});function Qd(e,t,n,r,i=0,a=0,o=0){let s=new ii(n,r);return s.name=t,s.position.set(i,a,o),s.castShadow=s.receiveShadow=!0,e.add(s),s}function $d(e,t,n,r,i,a,o,s,c){let l=Qd(e,t,new yo(1,20,14),c,n,r,i);return l.scale.set(a,o,s),l}function ef(e,t,n,r,i,a,o,s,c,l=.004){return Qd(e,t,new Id(n,r,i,2,Math.min(l,n/3,r/3,i/3)),c,a,o,s)}function tf(e,t,n,r,i){return Qd(e,t,new xo(new sa(n),20,r,7,!1),i)}function nf(e,t,n,r,i,a,o,s,c=0){let l=Qd(e,t,new bo(n,r,7,24),s,i,a,o);return l.rotation.x=c,l}function rf(e,t,n,r,i,a,o,s,c){return Qd(e,t,new Xi(n,r,i,18),c,a,o,s)}function af(e,t,n,r,i,a){let o=rf(e,t,i,i,n.distanceTo(r),0,0,0,a);return o.position.copy(n).add(r).multiplyScalar(.5),o.quaternion.setFromUnitVectors(X(0,1,0),r.clone().sub(n).normalize()),o}function of(e,t,n,r,i,a){let o=new sa(n),s=[],c=[],l=[];for(let e=0;e<=28;e++){let t=o.getPoint(e/28),n=o.getTangent(e/28),a=X(1,0,0).addScaledVector(n,-n.x).normalize();a.lengthSq()<.1&&(a=X(0,0,1));let l=new B().crossVectors(a,n).normalize();for(let[n,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])s.push(...t.clone().addScaledVector(a,n*r/2).addScaledVector(l,o*i/2).toArray()),c.push(n*.5+.5,e/28)}for(let e=0;e<28;e++)for(let t=0;t<4;t++){let n=e*4+t,r=e*4+(t+1)%4;l.push(n,r,r+4,n,r+4,n+4)}l.push(0,2,1,0,3,2,112,113,114,112,114,115);let u=new Pr;return u.setAttribute(`position`,new Sr(s,3)),u.setAttribute(`uv`,new Sr(c,2)),u.setIndex(l),u.computeVertexNormals(),Qd(e,t,u,a)}function sf(e,t,n,r,i,a,o){let s=new sa(n),c=s.computeFrenetFrames(20,!1),l=[],u=[],d=[];for(let e=0;e<=20;e++){let t=e/20,n=s.getPoint(t),a=(.36+.64*Math.sin(Math.PI*t))*(1-.92*t**5);for(let d=0;d<10;d++){let f=d/10*Math.PI*2,p=s.getTangent(t),m=o?o.clone().addScaledVector(p,-o.dot(p)).normalize():c.normals[e],h=o?new B().crossVectors(p,m).normalize():c.binormals[e];l.push(...n.clone().addScaledVector(m,Math.cos(f)*r*a).addScaledVector(h,Math.sin(f)*i*a).toArray()),u.push(d/10,t)}}for(let e=0;e<20;e++)for(let t=0;t<10;t++){let n=e*10+t,r=e*10+(t+1)%10;d.push(n,r,r+10,n,r+10,n+10)}let f=l.length/3;l.push(...s.getPoint(0).toArray(),...s.getPoint(1).toArray()),u.push(.5,0,.5,1);for(let e=0;e<10;e++)d.push(f,(e+1)%10,e,f+1,200+e,200+(e+1)%10);let p=new Pr;return p.setAttribute(`position`,new Sr(l,3)),p.setAttribute(`uv`,new Sr(u,2)),p.setIndex(d),p.computeVertexNormals(),Qd(e,t,p,a)}function cf(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`);n.fillStyle=`#fff`,n.fillRect(0,0,256,256);for(let t=0;t<256;t+=e===`apron`?6:4)n.fillStyle=`rgba(89,75,56,.035)`,n.fillRect(t,0,1,256),n.fillStyle=`rgba(89,75,56,.025)`,n.fillRect(0,t,256,1);if(e===`apron`||e===`cloth`)for(let[e,t,r]of[[76,176,16],[174,119,10],[116,212,7]])n.fillStyle=`rgba(161,115,77,.13)`,n.beginPath(),n.ellipse(e,t,r,r*.62,-.25,0,Math.PI*2),n.fill();e===`oat`&&(n.fillStyle=`rgba(234,225,205,.2)`,n.fillRect(16,5,224,32));let r=new Wi(t);return r.colorSpace=Be,r.anisotropy=4,r}function lf(e,t,n){let r=cf(t);return new Mo({color:e,roughness:n,map:r,bumpMap:r,bumpScale:5e-4})}function uf(e,t,n,r,i,a,o,s){let c=[],l=[],u=[];for(let e=0;e<=16;e++)for(let t=0;t<=16;t++){let s=n+(t/16-.5)*i,u=r+(e/16-.5)*a;c.push(s,u,o(s,u)+.0012),l.push(t/16,e/16)}for(let e=0;e<16;e++)for(let t=0;t<16;t++){let n=e*17+t,r=n+16+1;u.push(n,n+1,r,n+1,r+1,r)}let d=new Pr;return d.setAttribute(`position`,new Sr(c,3)),d.setAttribute(`uv`,new Sr(l,2)),d.setIndex(u),d.computeVertexNormals(),Qd(e,t,d,s)}function df(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`);if(n.clearRect(0,0,256,256),n.lineCap=`round`,e===`blush`){n.strokeStyle=`#D9A08C`,n.lineWidth=13;for(let e of[99,143])n.beginPath(),n.moveTo(68,e),n.quadraticCurveTo(124,e+9,184,e-6),n.stroke()}else if(e===`wrinkles`){n.strokeStyle=`rgba(126,109,89,.32)`,n.lineWidth=1.5;for(let e of[40,57])n.beginPath(),n.moveTo(93,e),n.quadraticCurveTo(128,e-6,165,e),n.stroke();for(let e of[-1,1])for(let t of[132,146])n.beginPath(),n.moveTo(128+e*77,t),n.quadraticCurveTo(128+e*85,t+2,128+e*91,t+8),n.stroke()}else for(let e=0;e<45;e++)n.strokeStyle=`rgba(162,158,147,${.15+e%4*.12})`,n.lineWidth=2,n.beginPath(),n.moveTo(20+e*31%220,50+e*23%150),n.lineTo(24+e*31%220,70+e*23%150),n.stroke();let r=new Wi(t);return r.colorSpace=Be,new Mo({map:r,transparent:!0,opacity:e===`blush`?.4:.7,roughness:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})}function ff(e,t,n,r,i){let a=n[0];a.morphAttributes.position=n.map((e,t)=>{let n=e.getAttribute(`position`).clone();return n.name=r[t],n}),a.morphAttributes.normal=n.map(e=>e.getAttribute(`normal`).clone()),a.morphTargetsRelative=!1;let o=Qd(e,t,a,i);o.updateMorphTargets();for(let e=1;e<n.length;e++)n[e].dispose();return o}function pf(e,t){let n=t===`lin`,r=n?.18:.202,i=n?.207:.222,a=n?.173:.19,o=Zd(15780264,.68),s=Zd(n?12170924:7035466,n?.55:.5),c=Zd(n?10657427:9073493,.72),l=Zd(4866104,.8),u=(e,t)=>a*Math.sqrt(Math.max(.02,1-e*e/(r*r)-t*t/(i*i))),d=Xd(e,`head-sculpt`),f=Xd(e,`expression-pivot`);$d(d,`round-skull`,0,0,0,r,i,a,o);for(let e of[-1,1]){$d(d,`ear-outer`,e*(r-.005),-.022,0,.027,n?.0475:.04,.027,o);let t=Zd(14262412,.8);$d(d,`ear-concha`,e*(r+.007),-.02,.019,.012,n?.028:.022,.006,t)}let p=n?[`neutral`,`concerned`,`silent`]:[`neutral`,`focused`,`surprised`,`smiling`],m=[];for(let e of[-1,1]){let t=e*(n?.065:.071),r=-.005,i=u(t,r)+.002,a=p.map(e=>{let n=new yo(1,18,12);return n.scale(.0145,e===`smiling`?.0162:.018,.008),n.translate(t,r+(e===`surprised`?.002:0),i),n});m.push(ff(f,`eye-dot-`+e,a,p,l));let o=new Kr({color:16447211});$d(f,`single-eye-catchlight`,t-.0035,0,i+.007,.003,.003,.002,o);let c=p.map(n=>{let r=n===`surprised`?.003:n===`silent`?-.002:0,i=[X(t-e*.019,.048+r,0),X(t,.053+r,0),X(t+e*.018,.047+r+(n===`concerned`?.003:n===`focused`?-.002:0),0)];return i.forEach(e=>e.z=u(e.x,e.y)+.002),n===`focused`&&(i[0].x+=e*.002),new xo(new sa(i),12,.0035,6,!1)});m.push(ff(f,`eyebrow-`+e,c,p,s))}let h=p.map(e=>{let t=n?-.099:-.104,r=e===`smiling`?.007:e===`focused`?.002:e===`concerned`?.006:e===`silent`?.001:.004;return new xo(new sa(Array.from({length:17},(n,i)=>{let a=i/16,o=e===`surprised`?Math.cos(a*Math.PI*2)*.004:(a-.5)*.028*2,s=e===`surprised`?t+Math.sin(a*Math.PI*2)*.004:t-Math.sin(a*Math.PI)*r;return X(o,s,u(o,s)+.002)})),24,.0018,6,!1)});m.push(ff(f,`closed-mouth`,h,p,l));let g=df(`blush`);for(let e of[-1,1])uf(f,`two-stroke-blush`,e*(n?.108:.12),-.055,.048,.033,u,g);if(n){uf(d,`painted-laugh-lines`,0,.04,.32,.29,u,df(`wrinkles`));for(let e of[-1,1])uf(d,`short-sideburn-alpha`,e*.156,.08,.035,.07,u,df(`sideburn`))}return{staticHead:d,gaze:f,meshes:m,states:p,blushMat:g,hair:s,rootHair:c,skin:o,surface:u}}function mf(e,t,n,r){let i=t?.9:.905;for(let a of[-1,1]){let o=new Oa;o.moveTo(a*.015,.028),o.lineTo(a*.073,.025),o.lineTo(a*.092,-.025),o.lineTo(a*.04,-.044),o.closePath();let s=new po(o,{depth:.003,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:7e-4,bevelThickness:7e-4}),c=Xd(e,`turned-collar-`+a,0,i,t?.14:.103);c.rotation.x=(t?-1:1)*.1396,Qd(c,`collar-lining`,s,r),Qd(c,`collar-outer`,s.clone(),n,0,0,.003)}}function hf(e,t,n,r){let i=X(t*.025,n?-.302:-.34,.025),a=new yo(1,24,18);a.scale(.045,n?.046:.053,n?.0225:.021);let o=a.getAttribute(`position`);for(let e=0;e<o.count;e++){let t=o.getX(e),n=o.getY(e),r=o.getZ(e);if(r>0&&n<-.004){let i=0;for(let e of[-.022,0,.022])i+=Math.exp(-(((t-e)/.0027)**2));o.setZ(e,r-.004*i*Math.min(1,(-n-.004)/.025))}}a.computeVertexNormals(),Qd(e,`mitten-three-recessed-grooves`,a,r,...i.toArray());let s=Xd(e,`opposable-thumb`,i.x-t*.039,i.y+.014,i.z+.013);return s.rotation.z=t*.3,$d(s,`thumb`,0,0,0,.017,.028,.018,r),s}function gf(e,t,n,r,i,a,o,s,c){let l=Xd(e,t,i,a,o);ef(l,`pocket-dark-cavity`,n-.012,r-.01,.003,0,0,.002,c,.002),ef(l,`pocket-front`,n,r,.004,0,-.004,.012,s,.004);for(let e of[-1,1])ef(l,`pocket-gusset`,.004,r,.014,e*(n/2-.002),-.003,.006,s,.001);return ef(l,`pocket-bottom`,n-.008,.004,.014,0,-r/2,.006,s,.001),ef(l,`turned-open-pocket-lip`,n,.006,.006,0,r/2-.003,.014,s,.002),l}function _f(e,t,n,r){let i=r?-.46:-.447,a=r?.26:.04;ef(e,`shoe-rubber-sole`,.135,.018,.205,0,i-.037,a,Zd(r?7039851:4866104),.008),ef(e,`soft-dark-shoe`,.13,.075,.2,0,i,a,t,.026),rf(e,`sock-edge`,.049,.048,.015,0,r?-.412:-.4055,r?.23:0,n)}function vf(e,t,n){let r=Xd(e,`tousled-hair-12-locks`);Qd(r,`warm-recessed-root-shell`,new yo(1,24,16,0,Math.PI*2,0,Math.PI*.54),t,0,.022,-.014).scale.set(.209,.221,.186);for(let e=0;e<9;e++){let i=.45+e/9*Math.PI*2,a=Math.sin(i),o=Math.cos(i),s=[X(-.015,.247,-.018),X(a*.1,.262,o*.09-.015),X(a*.201,.13,o*.171-.018),X(a*.237,.02+o*.05,o*.199-.018)];sf(r,`fluffy-lock-`+e,s,.075,.031,t),tf(r,`root-groove-`+e,[s[0].clone().add(X(.004,-.008,0)),s[1].clone().add(X(.004,-.01,0)),s[2].clone().add(X(.004,-.006,0))],.002,n)}tf(r,`offset-left-parting`,[X(-.015,.249,.055),X(-.015,.257,0),X(-.014,.242,-.07)],.002,n),sf(r,`untidy-nape-flick`,[X(.04,.06,-.183),X(.045,-.05,-.193),X(.062,-.082,-.209)],.019,.012,t);let i=[];for(let n=0;n<3;n++){let r=-.13+n*.1,a=Xd(e,`secondary-bang-`+n,r,.2,.12);sf(a,`independent-fringe-lock`,[X(0,0,0),X(.022,.012,.043),X(.018,-.084,.073),X(.035,-.111,.081)],.032,.023,t),i.push(a)}return i}function yf(e,t,n,r){Qd(e,`close-swept-root-dome`,new yo(1,28,18,0,Math.PI*2,0,Math.PI*.53),n,0,.029,-.028).scale.set(.184,.195,.168);for(let n=0;n<7;n++){let r=(n-3)*.046,i=Math.sqrt(1-r*r/.035344),a=[.64,1.12,1.57,2.18,2.87].map(e=>X(r,.029+.202*i*Math.sin(e),-.028+.176*i*Math.cos(e)));sf(e,`swept-back-lock-`+n,a,.026,.008,t,X(1,0,0))}let i=Xd(e,`independent-eight-shaped-mustache`),a=t.clone();a.name=`Lin silver mustache`,a.roughness=.7;for(let e of[-1,1])for(let t=0;t<3;t++){let n=[[e*.009,-.055+t*.005],[e*.047,-.068+t*.002],[e*.085,-.105+t*.004],[e*.112,-.093+t*.004]].map(([e,n],i)=>X(e,n,r(e,n)+(i===0?-.002:.004+t*.001)));sf(i,`mustache-`+e+`-strand-`+t,n,.0075,.0045,a,X(0,1,0))}return i}function bf(e,t=[]){e.updateWorldMatrix(!0,!0);let n=e.matrixWorld.clone().invert(),r=new Map,i=[];e.traverse(a=>{if(!(a instanceof ii))return;for(let n=a;n&&n!==e;n=n.parent)if(t.some(e=>n.name.includes(e)))return;let o=a.material,s=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();s.applyMatrix4(n.clone().multiply(a.matrixWorld)),r.has(o)||r.set(o,[]),r.get(o).push(s),i.push(a)});for(let[t,n]of r){let r=yd(n);r&&Qd(e,e.name+`-batch`,r,t),n.forEach(e=>e.dispose())}i.forEach(e=>e.removeFromParent())}function xf(e,t){let n=t===`lin`;e.root.userData.identityLocked=!0,e.root.children.filter(e=>e instanceof ii).forEach(e=>e.removeFromParent()),e.head.clear(),e.head.scale.setScalar(1);for(let t of[e.armL,e.armR])t.children.filter(e=>e instanceof ii).forEach(e=>e.removeFromParent());let r=lf(n?15261641:15920093,n?`oat`:`shirt`,n?.75:.72),i=Zd(15920093,.75),a=Zd(n?13616816:14472130,.8),o=lf(7035466,`apron`,.8),s=Zd(12559466,.3,1),c=Zd(4866104,.85),l=Zd(n?13616816:7035466,.82),u=Zd(15780264,.68),d=Xd(e.root,n?`lin-oatmeal-shirt`:`ahe-cream-shirt`),f=ef(d,`soft-shirt-body`,n?.405:.32,.405,n?.252:.22,0,.687,n?.028:0,r,.055);n&&(f.rotation.x=.1396),rf(d,`open-collar-neck`,.055,.068,.105,0,.928,n?.052:.008,u),mf(d,n,r,i);for(let e of[-1,1]){tf(d,`side-seam-`+e,[X(e*(n?.198:.154),.51,.01),X(e*(n?.205:.162),.68,0),X(e*(n?.19:.15),.87,-.02)],.0015,a);for(let t=0;t<2;t++)sf(d,`soft-back-fold`,[X(e*.06,.86,-.113),X(e*.11,.76-t*.035,-.122),X(e*.075,.67-t*.035,-.123)],.006,.003,r)}tf(d,`back-center-seam`,[X(0,.87,-.126),X(0,.72,-.13),X(0,.53,-.133)],.0015,a);let p=nf(d,`turned-hem-lining`,n?.18:.143,.004,0,.497,n?.028:0,i,Math.PI/2);p.scale.y=n?.65:.72;for(let e of[.84,.765,.69,.615])rf(d,`small-wood-button`,.006,.006,.003,0,e,n?.162:.116,n?Zd(7035466,.55):i).rotation.x=Math.PI/2;if(n){ef(d,`rear-hem-split-shadow`,.004,.04,.003,0,.516,-.133,a,.001);for(let e of[-1,1])tf(d,`back-shoulder-dart`,[X(e*.045,.86,-.123),X(e*.08,.77,-.135),X(e*.075,.7,-.13)],.0015,a);e.head.position.set(0,1.075,.048),e.armL.position.set(-.235,.85,.035),e.armR.position.set(.235,.85,.035)}let m=[];for(let[t,a]of[[e.armL,-1],[e.armR,1]]){let e=Xd(t,`shirt-sleeve`);if(rf(e,`sleeve-upper`,n?.065:.061,.055,n?.27:.17,a*.015,n?-.12:-.075,0,r),n)rf(e,`wrist`,.04,.041,.045,a*.025,-.267,.015,u),rf(e,`closed-cuff`,.058,.058,.033,a*.015,-.244,0,r),nf(e,`cuff-lining`,.054,.003,a*.015,-.26,0,i,Math.PI/2),$d(e,`wood-cuff-button`,a*.067,-.24,.011,.007,.007,.003,Zd(7035466,.55));else{rf(e,`visible-forearm`,.045,.041,.18,a*.025,-.25,.015,u);for(let t=0;t<2;t++){let n=-.14+t*.02,o=nf(e,`double-roll-`+t,.058,.006,a*.015,n,0,t?r:i,Math.PI/2);o.scale.z=.92,rf(e,`rolled-sleeve-fold-`+t,.061,.059,.014,a*.015,n,0,t?r:i)}}for(let t=0;t<2;t++)tf(e,`elbow-soft-fold`,[X(a*.055,-.07-t*.04,-.028),X(a*.067,-.09-t*.04,-.013),X(a*.055,-.11-t*.04,.02)],.003,r);bf(e),m.push(hf(t,a,n,u))}for(let t of[e.legL,e.legR])t.clear(),t.rotation.set(0,0,0),n?(af(t,`seated-thigh`,X(0,0,0),X(0,-.015,.23),.062,l),af(t,`bent-knee-calf`,X(0,-.015,.23),X(0,-.46,.23),.048,l)):(rf(t,`trouser`,.063,.051,.415,0,-.1925,0,l),tf(t,`trouser-side-seam`,[X(.056,-.01,0),X(.057,-.18,.001),X(.049,-.32,.001)],.0015,o)),_f(t,c,i,n),bf(t);let h=[];if(n){let e=gf(d,`left-chest-pocket`,.07,.06,-.105,.756,.169,r,a);e.rotation.x=.1396;let t=Xd(e,`wood-pen-attachment`,-.014,.015,.007);rf(t,`wooden-round-pen`,.004,.004,.09,0,.03,0,Zd(7035466,.55)),of(t,`only-metal-brass-pen-clip`,[X(.002,.066,.003),X(.007,.066,.005),X(.007,.026,.006)],.003,.001,s),h.push(t),uf(d,`neck-painted-age-lines`,0,.921,.085,.045,()=>.1,df(`wrinkles`))}else{let t=Xd(e.root,`independent-dark-brown-apron`);ef(t,`square-bib-and-hip-front`,.272,.34,.008,0,.64,.127,o,.004);for(let e of[-1,1])of(t,`crossed-strap-`+e,[X(e*.104,.79,.137),X(-e*.035,.845,.144+(e<0?.004:0)),X(-e*.117,.916,.123),X(-e*.14,.956,.015),X(-e*.125,.903,-.105),X(0,.765,-.131),X(e*.143,.65,-.12),X(e*.167,.595,-.04)],.045,.004,o);let n=(e,t,n)=>{let r=new Oa,i=e/2,a=t/2;return r.moveTo(-i+n,-a),r.lineTo(i-n,-a),r.quadraticCurveTo(i,-a,i,-a+n),r.lineTo(i,a-n),r.quadraticCurveTo(i,a,i-n,a),r.lineTo(-i+n,a),r.quadraticCurveTo(-i,a,-i,a-n),r.lineTo(-i,-a+n),r.quadraticCurveTo(-i,-a,-i+n,-a),r},r=n(.34,.246,.045);r.holes.push(n(.332,.238,.041));let i=Qd(t,`continuous-waist-belt`,new po(r,{depth:.02,bevelEnabled:!1,curveSegments:6}),o,0,.605,0);i.rotation.x=Math.PI/2;let a=Xd(t,`back-brass-slider`,0,.766,-.14);ef(a,`slider-left`,.002,.01,.002,-.003,0,0,s,5e-4),ef(a,`slider-right`,.002,.01,.002,.003,0,0,s,5e-4);for(let e of[-.005,0,.005])ef(a,`slider-rung`,.008,.0015,.002,0,e,0,s,4e-4);let c=Xd(t,`side-waist-pin-buckle`,.173,.596,.01);nf(c,`buckle-frame`,.009,.0015,0,0,0,s).rotation.y=Math.PI/2,af(c,`buckle-pin`,X(0,-.008,0),X(0,.008,0),.001,s);let l=gf(t,`open-apron-patch-pocket`,.12,.1,0,.605,.133,o,Zd(4866104)),u=Xd(l,`cloth-attachment`,-.022,.05,.011);of(u,`two-mm-folded-wiping-cloth`,[X(0,-.045,-.007),X(0,.025,-.004),X(.003,.036,.012),X(.003,.012,.026),X(.008,-.063,.03),X(.012,-.092,.039)],.045,.002,lf(15920093,`cloth`,.72)),h.push(u);let d=Xd(l,`thermometer-attachment`,.035,.012,.008);d.rotation.z=-.12,rf(d,`brass-thermometer-stem`,.0025,.0025,.13,0,.04,0,s),nf(d,`thermometer-top-loop`,.006,.0012,0,.117,0,s),rf(d,`thermometer-dial-case`,.011,.011,.004,0,.103,.004,s).rotation.x=Math.PI/2;let f=Zd(15920093,.6);rf(d,`blank-thermometer-face`,.009,.009,.001,0,.103,.0065,f).rotation.x=Math.PI/2,h.push(d)}n&&d.traverse(e=>{if(!(e instanceof ii)||!/back|rear-hem/.test(e.name))return;let t=e.geometry.getAttribute(`position`);for(let n=0;n<t.count;n++){let r=t.getY(n)+e.position.y,i=t.getZ(n)+e.position.z,a=.028+Math.tan(.1396)*(r-.687)-.126/Math.cos(.1396);t.setZ(n,a-.002+(i+.128)*.3-e.position.z)}t.needsUpdate=!0,e.geometry.computeVertexNormals()});let g=Xd(e.head,t+`-identity-head`),_=pf(g,t),v=n?[]:vf(_.staticHead,_.hair,_.rootHair),y;n&&(y=yf(_.staticHead,_.hair,_.rootHair,_.surface)),bf(d,[`pocket`,`attachment`]),bf(_.staticHead,[`mustache`,`secondary-bang`]);let b=_.states.map((e,t)=>+!t),x=_.states[0],S=-100,C=0,w=!1;return{actor:e,kind:t,visual:g,bangs:v,anchors:h,mustache:y,face:_,conversation(e,t){e&&!w&&(S=t),w=e},update(t,r){let i=Math.min(.05,Math.max(0,t-C));C=t,x=n?w?`concerned`:t%15>10?`silent`:`neutral`:w?t-S<.65?`surprised`:`smiling`:r>0?`focused`:t%14>11?`smiling`:`neutral`,b.forEach((e,t)=>b[t]=R.damp(e,+(_.states[t]===x),10,i));for(let e of _.meshes)e.morphTargetInfluences.splice(0,b.length,...b);_.blushMat.opacity=n?.4:.4+(b[3]||0)*.15,g.rotation.x=n?.1047+(b[2]||0)*.0873:(b[1]||0)*.03,v.forEach((n,r)=>{n.rotation.x=Math.sin(t*2.1+r)*.018+e.head.rotation.x*.12,n.rotation.z=Math.sin(t*1.6+r*.9)*.02}),m.forEach((e,r)=>e.rotation.z=(r?1:-1)*(.3+(n?.04*Math.sin(t*.57):.06*Math.sin(t*.7))))},diagnostics:()=>({kind:t,expression:x,weights:Object.fromEntries(_.states.map((e,t)=>[e,b[t]])),morphMeshes:_.meshes.length,hairLocks:n?7:12,secondaryBangs:v.length,mustacheStrands:y?.children.length||0,accessories:h.map(e=>e.name),identityLocked:e.root.userData.identityLocked,palette:{hair:n?`#B9B6AC`:`#6B5A4A`,shirt:n?`#E8DFC9`:`#F2EBDD`,apron:n?null:`#6B5A4A`},position:e.root.position.toArray()})}}function Sf(e){let t=xf(e.actors[0],`ahe`),n=xf(e.actors[1],`lin`),r=0;return{ahe:t,lin:n,conversation(e){t.conversation(e===`阿禾`,r),n.conversation(e===`林伯`,r)},update(e,i){r=e,t.update(e,i),n.update(e,i)},diagnostics:()=>({ahe:t.diagnostics(),lin:n.diagnostics()})}}var Cf=[-1.1,.26,3.85],wf=[Cf,[-1.1,.26,3.62],[-1.1,.39,3.32],[-1.1,.54,3.01],[-1.1,.69,2.7],[-1.1,.85,2.39],[-1.1,.85,1.72],[-.7,.85,1.5]],Tf=[{id:`patio-lin`,cup:[3.73,1.19,2.8],yaw:-Math.PI/2,route:[Cf,[-.3,.26,4.65],[4.75,.26,4.65],[4.75,.26,2.8],[4.5,.26,2.8]]},{id:`patio-north`,cup:[3.73,1.19,.35],yaw:-Math.PI/2,route:[Cf,[-.3,.26,4.65],[4.75,.26,4.65],[4.75,.26,.35],[4.5,.26,.35]]},{id:`indoor-round`,cup:[-.75,1.61,.73],yaw:Math.PI,route:[...wf,[-.75,.85,1.5],[-.75,.85,1.35]]},{id:`indoor-window`,cup:[-.87,1.61,-1.45],yaw:-Math.PI/2,route:[...wf,[.45,.85,1.5],[.45,.85,.55],[.45,.85,-.15],[.1,.85,-.4],[-.25,.85,-1.45]]}],Ef=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),Df=(e,t,n)=>e+Math.atan2(Math.sin(t-e),Math.cos(t-e))*Ef(n),Of=(e,t)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),kf=(e,t)=>Math.atan2(t[0]-e[0],t[2]-e[2]),Af=Tf.map(e=>e.route.slice(1).reduce((t,n,r)=>t+Of(e.route[r],n),0)/.9),jf=Af.reduce((e,t)=>e+t*2+8,0);function Mf(e,t,n=!1){let r=e.slice(1).map((t,n)=>Of(e[n],t)),i=Math.max(0,Math.min(1,t))*r.reduce((e,t)=>e+t,0);for(let t=0;t<r.length;t++){if(i<=r[t]||t===r.length-1){let a=e[t],o=e[t+1],s=i/r[t],c=kf(a,o);return t>0&&i<.15&&(c=Df(kf(e[t-1],a),c,.5+i/.3)),t<r.length-1&&r[t]-i<.15&&(c=Df(c,kf(o,e[t+2]),.5-(r[t]-i)/.3)),{x:a[0]+(o[0]-a[0])*s,y:a[1]+(o[1]-a[1])*s,z:a[2]+(o[2]-a[2])*s,yaw:c+(n?Math.PI:0)}}i-=r[t]}throw Error(`Missing service route`)}function Nf(e){let t=(e%jf+jf)%jf,n=0;for(;n<3&&t>=Af[n]*2+8;)t-=Af[n]*2+8,n++;let r=Tf[n],i=Af[n],a=r.route.at(-1),o=kf(r.route.at(-2),a),s=`pickup`,c=0,l=0,u=Mf(r.route,0),d=0;if(t>=1&&t<1+i)s=`outbound`,c=1,u=Mf(r.route,(t-1)/i);else if(t>=1+i&&t<7+i){s=`serve`;let e=t-1-i;u={x:a[0],y:a[1],z:a[2],yaw:Df(o,r.yaw,e/.6)},l=Ef((e-.8)/.7)*(1-Ef((e-4.3)/.7)),d=Ef((e-1.5)/2.8)}else t>=7+i&&t<7+i*2?(s=`return`,c=1,u=Mf(r.route,1-(t-7-i)/i,!0),d=1):t>=7+i*2&&(s=`rest`,d=1);return{...u,phase:s,walk:c,pour:l,transfer:d,tableIndex:n,tableId:r.id,cupTarget:[...r.cup],cycleTime:t,cupOnTable:d===1,doorOpen:n>=2&&t>1&&t<7+i*2}}var Z=(e,t,n)=>new B(e,t,n),Pf=61524,Ff=()=>(Pf=Pf*1664525+1013904223>>>0,Pf/4294967296),If=(e,t)=>e+(t-e)*Ff();function Lf(e){let t=document.createElement(`canvas`);t.width=t.height=512;let r=t.getContext(`2d`);r.fillStyle=e===`wood`?`#bcae94`:`#ded7c5`,r.fillRect(0,0,512,512);for(let t=0;t<7500;t++){let t=If(50,160);r.strokeStyle=`rgba(${t},${t*.8},${t*.55},${e===`wood`?.08:.12})`,r.lineWidth=If(.2,1.3),r.beginPath();let n=If(0,512),i=If(0,512);r.moveTo(n,i),r.lineTo(n+If(e===`wood`?10:.3,e===`wood`?160:3),i+If(0,2)),r.stroke()}let i=new Wi(t);return i.colorSpace=Be,i.wrapS=i.wrapT=n,i.anisotropy=4,i}var Rf=Lf(`wood`),zf=Lf(`stone`),Bf=(e,t=.8,n=0)=>new Mo({color:e,roughness:t,metalness:n}),Q={stone:new Mo({color:13222580,map:zf,roughness:.85,bumpMap:zf,bumpScale:.035}),tile:new Mo({color:13222580,map:zf,roughness:.9}),wood:new Mo({color:13150332,map:Rf,roughness:.64,bumpMap:Rf,bumpScale:.016}),lightWood:new Mo({color:13942167,map:Rf,roughness:.64}),darkWood:Bf(9005897),frame:Bf(4873535,.45,.45),frameEdge:Bf(9606539,.36,.65),brass:Bf(12559466,.3,.78),brassDark:Bf(9532480,.4,.72),cream:Bf(15722972,.5),green:Bf(11057551),greenDark:Bf(7440247),greenLight:Bf(12109723),pot:Bf(11699804),soil:Bf(5391927),trunk:Bf(9598546),skin:Bf(15780264,.68),hair:Bf(6706240,.75),apron:Bf(10195819),shirt:Bf(15788504),pants:Bf(7699299),shoe:Bf(7892311),coffee:Bf(4403235,.25),black:Bf(3554101),gravel:Bf(12500389),glass:new No({color:15068900,transparent:!0,opacity:.14,roughness:.05,metalness:.12,depthWrite:!1,side:2,envMapIntensity:1.5}),glassJar:new No({color:15591641,transparent:!0,opacity:.25,roughness:.12,depthWrite:!1,metalness:.18}),pendantLight:new Mo({color:15915424,emissive:16765074,emissiveIntensity:1.65,roughness:.24}),light:new Mo({color:15915424,emissive:16761707,emissiveIntensity:1.25,roughness:.24})},Vf=new Map;function Hf(e,t,n,r=.035){let i=[e,t,n,r].join();return Vf.has(i)||Vf.set(i,new Id(e,t,n,2,Math.min(r,e/3,t/3,n/3))),Vf.get(i)}var Uf=new yo(1,18,12),Wf=new yo(1,7,5);function Gf(e,t,n,r=0,i=0,a=0){let o=new ii(e,t);return o.position.set(r,i,a),o.castShadow=t!==Q.glass&&t!==Q.glassJar,o.receiveShadow=!0,n.add(o),o}function Kf(e,t,n,r,i,a,o,s,c=.025){return Gf(Hf(t,n,r,c),s,e,i,a,o)}function qf(e,t,n,r,i,a,o,s,c=!1){let l=Gf(c?Wf:Uf,s,e,t,n,r);return l.scale.set(i,a,o),l}function Jf(e,t,n,r,i,a,o,s,c=16){return Gf(new Xi(t,n,r,c),s,e,i,a,o)}function Yf(e,t,n,r,i,a=8){let o=n.clone().sub(t),s=Jf(e,r,r,o.length(),0,0,0,i,a);return s.position.copy(t).add(n).multiplyScalar(.5),s.quaternion.setFromUnitVectors(Z(0,1,0),o.normalize()),s}function Xf(e,t,n,r){return Gf(new xo(new sa(t),24,n,6,!1),r,e)}function Zf(e,t,n,r,i,a,o,s=0,c=0){let l=Gf(new bo(t,n,6,28),o,e,r,i,a);return l.rotation.set(s,c,0),l}function Qf(e,t=0,n=0,r=0,i=0){let a=new Mn;return a.position.set(t,n,r),a.rotation.y=i,e.add(a),a}function $f(e,t,n,r,i,a,o,s=`#46523d`,c=`#efe8d4`){let l=document.createElement(`canvas`);l.width=1024,l.height=256;let u=l.getContext(`2d`);u.fillStyle=s,u.fillRect(0,0,1024,256),u.strokeStyle=c,u.lineWidth=3,u.strokeRect(15,15,994,226),u.fillStyle=c,u.textAlign=`center`,u.textBaseline=`middle`,u.font=`145px Georgia`,u.fillText(t,512,133);let d=new Wi(l);return d.colorSpace=Be,Gf(new _o(n,r),new Mo({map:d,roughness:.9}),e,i,a,o)}function ep(e,t,n,r,i=1,a=!0){let o=Qf(e,t,n,r);return o.scale.setScalar(i),Jf(o,.13,.13,.025,0,0,0,Q.cream,24),Jf(o,.088,.062,.13,0,.08,0,Q.cream,24),Jf(o,.073,.073,.005,0,.148,0,a?Q.coffee:Q.cream,24),Zf(o,.085,.01,0,.145,0,Q.cream,Math.PI/2),Zf(o,.043,.013,.1,.085,0,Q.cream),o}function tp(e,t,n,r,i=.45){let a=Qf(e,t,n,r);return a.userData.snowPot={radius:i*.63,height:i*.83},Jf(a,i*.64,i*.45,i*.85,0,i*.42,0,Q.pot),Zf(a,i*.63,i*.055,0,i*.83,0,Q.pot,Math.PI/2),Jf(a,i*.57,i*.57,.02,0,i*.82,0,Q.soil),a}function np(e,t,n,r,i=.6){let a=Qf(e,t,n,r);tp(a,0,0,0,i*.6);for(let e=0;e<10;e++){let t=e/10*Math.PI*2,n=i*If(.7,1.2),r=Z(0,i*.4,0),o=Z(Math.cos(t)*n*.7,i*.45+n*.4,Math.sin(t)*n*.7);Yf(a,r,o,.012,Q.greenDark,5);for(let n=1;n<=7;n++){let s=n/8,c=r.clone().lerp(o,s);c.y+=Math.sin(s*Math.PI)*i*.25;let l=Math.sin(s*Math.PI)*i*.19;for(let n of[-1,1]){let r=qf(a,c.x+Math.cos(t+n*.9)*l*.6,c.y+.02,c.z+Math.sin(t+n*.9)*l*.6,l,.018,l*.32,e%3==0?Q.greenLight:Q.greenDark,!0);r.rotation.y=-t-n*.9,r.rotation.z=n*.25}}}return a}function rp(e,t,n,r,i=.6){for(let a=0;a<5;a++)qf(e,t+If(-i*.5,i*.5),n+If(.15,i*.5),r+If(-i*.5,i*.5),i*If(.35,.6),i*If(.35,.65),i*If(.35,.6),a%2?Q.green:Q.greenLight)}function ip(e,t,n,r=1){let i=Qf(e,t,.33,n);Jf(i,.075*r,.12*r,2.2*r,0,1.1*r,0,Q.trunk);for(let e=0;e<34;e++){let t=e*2.399,n=Math.sqrt((e+.5)/34),a=Math.cos(t)*n*.72*r,o=Math.sin(t)*n*.65*r,s=(2.1+Math.sqrt(1-n*n)*.65)*r,c=If(.22,.36)*r;qf(i,a,s,o,c,c*1.25,c,a<0?Q.greenLight:Q.green,e%2==0),e%9==0&&Yf(i,Z(0,1.2*r,0),Z(a,s-.1,o),.04*r,Q.trunk)}rp(i,0,0,0,r*.65)}function ap(e,t,n,r,i=0,a=1){let o=Qf(e,t,n,r,i);o.userData.snowChair=!0,n<.5&&(o.userData.dynamic=!0),o.scale.setScalar(a),Jf(o,.29,.28,.075,0,.55,0,Q.lightWood,24);for(let e of[-.21,.21])for(let t of[-.2,.2])Yf(o,Z(e*.8,.53,t*.8),Z(e*1.24,0,t*1.22),.027,Q.wood);for(let e of[-.25,.25])Yf(o,Z(e,.53,-.2),Z(e,1,-.3),.025,Q.wood);let s=[];for(let e=0;e<=20;e++){let t=Math.PI-e/20*Math.PI;s.push(Z(Math.cos(t)*.27,.78+Math.sin(t)*.32,-.29))}Xf(o,s,.026,Q.lightWood);for(let e=-4;e<=4;e++){let t=e*.047,n=.78+Math.sqrt(Math.max(0,.0729-t*t))*1.15;Yf(o,Z(t,.59,-.25),Z(t,n,-.29),.008,Q.wood,5)}for(let e=0;e<7;e++){let t=.61+e*.055,n=t<.78?.25:Math.sqrt(Math.max(0,.0729-((t-.78)/1.15)**2));Yf(o,Z(-n,t,-.285),Z(n,t,-.285),.007,Q.wood,5)}for(let e=-4;e<=4;e++)Yf(o,Z(e*.052,.591,-.2),Z(e*.052,.591,.2),.005,Q.darkWood,4),Yf(o,Z(-.2,.505,e*.052),Z(.2,.505,e*.052),.005,Q.darkWood,4);if(n<.5){o.updateWorldMatrix(!0,!0);let e=o.matrixWorld.clone().invert(),t=new Map,n=[];o.traverse(r=>{if(!(r instanceof ii))return;let i=r.material,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(e.clone().multiply(r.matrixWorld)),a.deleteAttribute(`uv1`),a.deleteAttribute(`tangent`),t.has(i)||t.set(i,[]),t.get(i).push(a),n.push(r)});for(let[e,n]of t){let t=yd(n,!1);t&&Gf(t,e,o),n.forEach(e=>e.dispose())}n.forEach(e=>e.removeFromParent())}return o}function op(e,t,n,r,i=.48,a=!0){let o=Qf(e,t,n,r);Jf(o,i,i,.08,0,.87,0,Q.lightWood,40),Zf(o,i-.02,.015,0,.91,0,Q.wood,Math.PI/2),Jf(o,.048,.07,.8,0,.43,0,Q.frame);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;Yf(o,Z(0,.13,0),Z(Math.cos(t)*.33,.025,Math.sin(t)*.33),.035,Q.frame)}return a&&ep(o,.11,.923,.06),Jf(o,.04,.055,.15,-.19,.99,-.1,Q.cream),o}function sp(e,t,n,r,i=1){let a=Qf(e,t,n,r);return a.scale.setScalar(i),Jf(a,.1,.15,.23,0,.13,0,Q.brass,24),Jf(a,.11,.07,.06,0,.27,0,Q.brass,24),qf(a,0,.313,0,.025,.02,.025,Q.brassDark),Xf(a,[Z(.1,.22,0),Z(.25,.25,0),Z(.25,.07,0),Z(.13,.065,0)],.016,Q.brass),Xf(a,[Z(-.1,.07,0),Z(-.22,.13,0),Z(-.27,.28,0),Z(-.31,.29,0)],.018,Q.brass),a}function cp(e,t,n,r,i,a=0){let o=Qf(e,t,n,r,a);o.userData.dynamic=!0;let s=i===`gardener`||i===`patio-guest`?Bf(12042136):Q.shirt,c=i===`guest2`?Bf(9536363):Q.hair;Kf(o,.31,.4,.2,0,.68,0,s,.075),Jf(o,.055,.065,.09,0,.93,0,Q.skin);let l=Qf(o,0,1.075,0);qf(l,0,0,0,.15,.18,.145,Q.skin),qf(l,0,.085,-.02,.16,.12,.15,c),qf(l,-.13,.01,0,.025,.04,.035,Q.skin),qf(l,.13,.01,0,.025,.04,.035,Q.skin),qf(l,-.055,.06,.1,.095,.09,.065,c),l.scale.setScalar(1.3);for(let e of[-.053,.053])qf(l,e,-.012,.135,.012,.016,.009,Q.black),qf(l,e-.003,-.006,.143,.003,.004,.003,Q.cream),qf(l,e*1.6,-.055,.12,.024,.009,.006,Bf(14200219));let u=Qf(o,-.185,.85,0),d=Qf(o,.185,.85,0);for(let[e,t]of[[u,-1],[d,1]])Jf(e,.055,.06,.2,t*.015,-.08,0,s),Jf(e,.044,.045,.18,t*.025,-.25,.015,Q.skin),qf(e,t*.025,-.34,.025,.048,.058,.048,Q.skin);let f=Qf(o,-.085,.5,0),p=Qf(o,.085,.5,0);for(let e of[f,p])Jf(e,.06,.05,.37,0,-.16,0,Q.pants),Kf(e,.13,.095,.21,0,-.39,.04,Q.shoe,.04);(i===`barista`||i===`server`)&&(Kf(o,.26,.32,.025,0,.6,.115,Q.apron,.03),Yf(o,Z(-.12,.9,.11),Z(-.07,.72,.13),.017,Q.apron),Yf(o,Z(.12,.9,.11),Z(.07,.72,.13),.017,Q.apron),Kf(o,.1,.075,.02,0,.62,.135,Q.darkWood,.012));let m,h,g,_,v;if(i===`barista`&&(m=sp(o,.27,.88,.26,.68),h=Qf(m,-.31,.29,0),g=Qf(m,.24,.16,0)),i===`server`&&(_=Qf(o,0,.84,.34),Jf(_,.24,.24,.023,0,0,0,Q.wood,24),v=Qf(_,0,.03,0)),i===`gardener`){let e=Qf(d,0,-.35,.1);Jf(e,.11,.12,.18,0,-.01,0,Q.green),Zf(e,.09,.015,.12,.04,0,Q.green),Yf(e,Z(-.08,0,0),Z(-.27,.1,0),.028,Q.green)}if((i===`guest`||i===`guest2`||i===`patio-guest`)&&(ep(d,0,-.32,.07,.7),f.rotation.x=p.rotation.x=-1.3),i===`guest2`||i===`patio-guest`)for(let e of[f,p])e.clear(),e.rotation.x=0,Yf(e,Z(0,0,0),Z(0,-.015,.23),.055,Q.pants),Yf(e,Z(0,-.015,.23),Z(0,-.48,.23),.047,Q.pants),Kf(e,.13,.085,.19,0,-.484,.27,Q.shoe,.025);return{root:o,head:l,armL:u,armR:d,legL:f,legR:p,role:i,phase:If(0,6),base:o.position.clone(),kettle:m,kettleTip:h,kettleGrip:g,carry:_,cupAnchor:v}}function lp(e){let t=Qf(e),n=[],r=[],i=[],a=(e,n,r,a,o,s=1)=>{let c=a-e,l=o-r,u=Math.atan2(c,l),d=Math.hypot(c,l);return i.push({chair:[e,n,r],table:[a,n,o],forwardDot:(Math.sin(u)*c+Math.cos(u)*l)/d,distance:d}),ap(t,e,n,r,u,s)},o=(e,n,i,a,o,s,c,l)=>{let u=Gf(new Ji(s,c,l),new Kr({visible:!1}),t,i,a,o);return u.userData.dynamic=!0,u.userData.hit=e,r.push({id:e,label:n,mesh:u,point:Z(i,a,o)}),u};Kf(t,10.3,.6,9.9,.45,-.12,.45,Q.stone,.13),Kf(t,10.1,.055,9.7,.45,.198,.45,Q.tile,.08);for(let e=-4;e<5.35;e+=.8)for(let n=-4;n<5.2;n+=.8)e<4.3&&n<4.3||Kf(t,.77,.024,.77,e,.236,n,Q.tile,.025);for(let e=-4;e<=4;e+=.8)for(let n=-4;n<=4;n+=.8)e>-3&&e<3&&n<2.5&&n>-2.4||Ff()<.1||Kf(t,If(.65,.77),.024,If(.65,.77),e+If(-.04,.04),.236,n+If(-.04,.04),Ff()<.65?Q.tile:Q.stone,.025);for(let e=0;e<140;e++){let e=If(-4.3,4.3),n=If(-4.3,4.3);Math.abs(e)<3.3&&Math.abs(n)<2.8||n>2.4&&Math.abs(e)<1.6||e>3&&n>0||qf(t,e,.245,n,If(.025,.06),.025,If(.025,.055),Q.gravel,!0)}let s=.85;Kf(t,5.7,.59,4.95,0,.52,-.335,Q.stone,.045);for(let e of[-2.8,2.8])for(let n=0;n<3;n++)for(let r=0;r<7;r++)Kf(t,.15,.185,.61,e,.36+n*.19,-2.37+r*.67,Q.stone,.02);for(let e of[-2.8,2.13])for(let n=0;n<3;n++)for(let r=0;r<9;r++)Kf(t,.61,.185,.13,-2.68+r*.67,.36+n*.19,e,Q.stone,.02);for(let e=-2.4;e<2.6;e+=.6)for(let n=-2.48;n<2.1;n+=.6)Kf(t,.59,.04,.59,e,.845,n,(Math.round(e*2)+Math.round(n*2))%3?Q.tile:Q.stone,.012);for(let e=0;e<4;e++)Kf(t,1.65,.15,1.35-e*.22,-.65,.3+e*.15,2.75-e*.2,Q.stone,.025);for(let e=0;e<5;e++)Kf(t,1.05,.04,.38,-.65+Math.sin(e*.6)*.1,.26,3.15+e*.23,Q.stone,.03);let c=-2.75,l=2.75,u=2.1,d=-2.77,f=3.2,p=4.575;for(let e of[c,l]){for(let n=d;n<2.2;n+=.974)Kf(t,.065,2.35,.065,e,4.05/2,n,Q.frame,.009);for(let n of[s,1.83,2.87,f])Kf(t,.075,.075,4.95,e,n,-.335,Q.frame,.009);for(let n=0;n<5;n++)Kf(t,.018,2.35,.98,e,4.05/2,-2.283+n*.974,Q.glass,.001)}for(let e of[u,d]){for(let n=0;n<6;n++)Kf(t,.065,2.35,.07,-2.75+n*1.1,4.05/2,e,Q.frame,.008);for(let n of[s,1.83,2.87,f])e===u&&n<2.91?(Kf(t,1.1,.075,.075,-2.2,n,e,Q.frame,.008),Kf(t,3.3,.075,.075,1.1,n,e,Q.frame,.008)):Kf(t,5.58,.075,.075,0,n,e,Q.frame,.008);for(let n=0;n<5;n++){let r=-2.2+n*1.1;(e!==u||n!==1)&&Kf(t,1.1,2.35,.018,r,4.05/2,e,Q.glass,.001)}Yf(t,Z(c,f,e),Z(0,p,e),.045,Q.frame),Yf(t,Z(0,p,e),Z(l,f,e),.045,Q.frame),Yf(t,Z(0,f,e),Z(0,p,e),.035,Q.frame);for(let n of[-1.1,1.1])Yf(t,Z(n,f,e),Z(n,p-Math.abs(n)/2.75*1.375,e),.028,Q.frame);let n=new Oa;n.moveTo(c,f),n.lineTo(l,f),n.lineTo(0,p),n.closePath(),Gf(new po(n,{depth:.018,bevelEnabled:!1,steps:1}),Q.glass,t,0,0,e-.009)}let m=Math.atan2(1.375,2.75),h=Math.hypot(2.75,1.375);for(let e of[-1,1]){let n=Kf(t,h,.018,5.1,e*1.375,7.775/2,-.34,Q.glass,.001);n.rotation.z=-e*m;for(let n=0;n<=5;n++){let r=d+n*.974;Yf(t,Z(e*2.83,3.16,r),Z(0,4.585,r),.04,Q.frame)}for(let n of[.5,1])Yf(t,Z(e*2.75*n,p-1.375*n,-2.82),Z(e*2.75*n,p-1.375*n,2.22),.03,Q.frameEdge)}Yf(t,Z(0,p,-2.89),Z(0,p,2.24),.047,Q.frame);for(let e of[-2.86,2.86])Yf(t,Z(e,3.18,-2.85),Z(e,3.18,2.22),.07,Q.frameEdge);let g=Qf(t,-1.63,s,2.145);g.userData.dynamic=!0;for(let e of[0,1.04])Kf(g,.055,2.06,.07,e,1.03,0,Q.frame,.008);for(let e of[.025,2.05])Kf(g,1.08,.055,.07,.52,e,0,Q.frame,.008);Kf(g,.98,1.98,.018,.52,1.04,0,Q.glass,.001),Yf(g,Z(.87,.83,.08),Z(.87,1.1,.08),.025,Q.brass),g.rotation.y=0,Kf(t,1.1,.29,.018,-1.1,3.055,u,Q.glass,.001),o(`door`,`推门进入`,-1.07,1.9,2.2,1.08,2.1,.22);let _=Qf(t,-1.1,3.39,2.2);Kf(_,1.8,.27,.07,0,0,0,Q.wood,.018),$f(_,`SKYE CAFE`,1.72,.235,0,0,.041,`#4a5d3f`,`#efe9dc`);for(let e of[-.84,.84])qf(_,e,0,.045,.014,.014,.008,Q.brass);let v=Qf(t,1.2,0,-.335,-Math.PI/2);v.scale.set(.827586,1,.8);let y=Qf(v,0,s,0);Kf(y,4.2,.95,.78,0,.49,0,Q.wood,.045),Kf(y,4.35,.1,.95,0,1.01,0,Q.lightWood,.025);for(let e=0;e<6;e++){let t=-1.74+e*.69;Kf(y,.62,.76,.025,t,.5,.404,Q.lightWood,.016),Kf(y,.52,.62,.023,t,.5,.425,Q.wood,.012),qf(y,t+.2,.77,.45,.023,.023,.023,Q.brass)}let b=Qf(v,0,0,1.42);for(let e of[2.03,2.55,3.07]){Kf(b,4.25,.07,.22,0,e,-2.48,Q.lightWood,.018);for(let t of[-1.95,0,1.95])Yf(b,Z(t,e-.15,-2.59),Z(t,e-.02,-2.39),.017,Q.brassDark)}for(let e of[-2.08,0,2.08])Kf(b,.065,2.3,.07,e,2,-2.55,Q.wood,.01);for(let e=0;e<39;e++)Ff();let x=Qf(y,-.2,1.07,.05);Kf(x,.98,.64,.5,0,.4,0,Q.brass,.05),Kf(x,.94,.05,.68,0,.055,.06,Q.brassDark,.018),Kf(x,.87,.025,.4,0,.09,.14,Q.frameEdge,.01),Kf(x,.9,.045,.56,0,.75,0,Q.brass,.015);for(let e of[-.26,.26])Jf(x,.08,.08,.12,e,.27,.29,Q.frame),Yf(x,Z(e,.26,.32),Z(e+.15,.26,.48),.035,Q.black),qf(x,e,.55,.265,.045,.045,.025,Q.black),Jf(x,.032,.032,.06,e,.22,.32,Q.brass);Kf(x,.25,.14,.02,0,.53,.265,Q.black,.01);for(let e=0;e<3;e++)Kf(x,.032,.015,.007,-.07+e*.07,.54,.28,Q.brass,.002);for(let e=0;e<12;e++)Kf(x,.82,.006,.012,0,.11,-.02+e*.026,Q.brassDark,.002);for(let e=0;e<3;e++)ep(x,-.28+e*.27,.78,-.02,.75,!1);let S=Qf(y,-.95,1.08,0);Jf(S,.14,.2,.38,0,.24,0,Q.brass),Jf(S,.2,.12,.27,0,.57,0,Q.glassJar,24),Jf(S,.18,.11,.13,0,.51,0,Q.coffee,24),Jf(S,.21,.21,.025,0,.72,0,Q.brassDark,24),Kf(S,.15,.09,.1,0,.32,.16,Q.black,.01),sp(y,1.65,1.08,.12,1.1),ep(y,.9,1.08,-.18,1.05),ep(y,1.85,1.08,.15,.65);let C=Qf(y,.45,1.08,-.1);Jf(C,.14,.08,.18,0,.29,0,Q.brass,24),Jf(C,.08,.1,.19,0,.1,0,Q.glassJar),Zf(C,.16,.014,0,.38,0,Q.brass,Math.PI/2),o(`coffee`,`请咖啡师做一杯`,1.15,2.23,-.5,.7,1.05,1.15);let w=op(t,-.75,s,.55,.35,!1);w.scale.y=.74/.91;let T=[a(-.12,s,.55,-.75,.55),a(-1.38,s,.55,-.75,.55)];for(let e of T)e.scale.set(.42/.58,.45/.591,.48/.59);let E=op(t,-1.05,s,-1.45,.35,!1);E.scale.y=.74/.91;let D=a(-1.68,s,-1.45,-1.05,-1.45);D.scale.set(.42/.58,.45/.591,.48/.59);let O=Qf(t,-1.96,s,.8);Kf(O,.35,.31,1.28,0,.155,0,Q.stone,.025),Kf(O,.27,.018,1.19,0,.32,0,Q.soil),np(t,-1.96,1.18,.38,.28),np(t,-1.96,1.18,1.12,.3),np(t,-1.9,s,-2.05,.32);let k=[],A=[];for(let[e,n,r]of[[.55,.85,3.22],[.55,1.3,3.22],[.55,1.75,3.22]]){Yf(t,Z(e,4.575-Math.abs(e)*.5,n),Z(e,r+.2,n),.008,Q.frame),Jf(t,.065,.085,.13,e,r+.17,n,Q.brass);let i=qf(t,e,r,n,.16,.16,.16,Q.pendantLight);i.userData.dynamic=!0,i.name=`indoor-pendant-`+k.length,k.push(i);let a=new xs(16765074,5,4,2);a.position.set(e,r-.1,n),t.add(a),A.push(a)}let ee=Qf(t,-1.9,3.15,1.35);Jf(ee,.27,.17,.37,0,0,0,Q.pot);for(let e=0;e<3;e++){let t=e*2.094;Yf(ee,Z(Math.cos(t)*.23,.15,Math.sin(t)*.23),Z(0,.7,0),.007,Q.darkWood)}for(let e=0;e<15;e++){let t=e*2.4,n=If(.4,1.1);for(let r=0;r<7;r++){let i=r/6;qf(ee,Math.cos(t)*(.08+i*.24),.14-i*n,Math.sin(t)*(.08+i*.24),.075,.035,.09,e%2?Q.green:Q.greenDark,!0)}}let te=op(t,3.55,.26,.35,.44,!1);a(3.55,.26,-.42,3.55,.35),a(3.55,.26,1.12,3.55,.35);let ne=op(t,3.55,.26,2.8,.44,!1);a(3.55,.26,2.03,3.55,2.8),a(3.55,.26,3.57,3.55,2.8);let j=[te.children.at(-1),ne.children.at(-1)];j.forEach(e=>e.userData.dynamic=!0);let re=Qf(t,3.55,.26,-.85);re.userData.dynamic=!0,Jf(re,.02,.025,2.75,0,1.38,0,Q.wood);let M=Qf(re);M.scale.set(.17,1,.17),Gf(new go([new z(0,2.77),new z(.92,2.33),new z(.92,2.314),new z(0,2.754)],24),Q.cream,M);for(let e=0;e<12;e++){let t=e*Math.PI/6;Yf(M,Z(0,2.77,0),Z(Math.cos(t)*.92,2.33,Math.sin(t)*.92),.008,Q.wood)}qf(re,0,2.83,0,.04,.065,.04,Q.brass);let ie=Qf(t,-2.15,.26,3.85,0);ie.userData.dynamic=!0;for(let e of[-1,1]){let t=Qf(ie,0,.85,e*.14);t.rotation.x=e*.12,Kf(t,.81,1.02,.08,0,0,0,Q.wood,.025),Kf(t,.69,.87,.09,0,0,0,Q.frame,.012);let n=$f(t,`SKYE CAFE`,.62,.17,0,.22,e*.052);e<0&&(n.rotation.y=Math.PI);let r=$f(t,`COFFEE  /  TEA`,.62,.11,0,-.02,e*.053);e<0&&(r.rotation.y=Math.PI);for(let n of[-.36,.36])for(let r of[-.45,.45])qf(t,n,r,e*.06,.015,.015,.01,Q.brass)}for(let e of[-.36,.36])for(let t of[-.37,.37])Yf(ie,Z(e,.02,t),Z(e,1.4,0),.035,Q.wood);Yf(ie,Z(-.43,1.4,0),Z(.43,1.4,0),.025,Q.brass);for(let e of[-.36,.36])Yf(ie,Z(e,.5,-.25),Z(e,.5,.25),.012,Q.brass);o(`sign`,`今日手冲：花香与柑橘`,-2.15,1.05,3.85,.9,1.5,.65);let ae=Qf(t,4.03,.26,4.12);ae.userData.dynamic=!0,Jf(ae,.025,.035,2.9,0,1.45,0,Q.wood),Jf(ae,.23,.27,.08,0,.04,0,Q.stone);let oe=Qf(ae,0,.15,0);oe.scale.set(.17,1,.17);let se=Bf(16447471,.9);Gf(new go([new z(0,2.77),new z(1.15,2.33),new z(1.15,2.31),new z(0,2.75)],32),se,oe);for(let e=0;e<12;e++){let t=e*Math.PI/6;Yf(oe,Z(0,2.75,0),Z(Math.cos(t)*1.15,2.315,Math.sin(t)*1.15),.009,Q.wood)}qf(ae,0,2.98,0,.045,.07,.045,Q.brass),ip(t,-4.1,-1.4,1.08),ip(t,4.15,-2.7,1.02),ip(t,-3.8,-3.3,.82),ip(t,-3.5,4.6,.7);for(let[e,n,r]of[[-3.7,.8,.9],[-4.4,0,.75],[-3.1,1.6,.65],[3.3,-3.5,.7],[4.8,-3.5,.6],[-4.4,-3.65,.8],[-3.8,3.6,.45]])rp(t,e,.25,n,r);np(t,-3.22,.25,1.1,.65),np(t,3.08,.25,-2.1,.7),np(t,-3.2,.25,-3.1,.6),np(t,2.5,.25,-3,.6);for(let[e,n]of[[-2.15,3.35],[1.1,3.4],[-4.6,1.5],[4.05,3.6],[3.35,-3.6]])Jf(t,.065,.07,.43,e,.46,n,Q.frame),Jf(t,.06,.06,.15,e,.69,n,Q.light),Jf(t,.08,.08,.035,e,.79,n,Q.brassDark);Jf(t,.115,.115,2.5,-1.9,4.1,-2.37,Q.frameEdge,20),Jf(t,.16,.16,.12,-1.9,5.38,-2.37,Q.frame,20),Jf(t,.1,.1,.014,-1.9,5.45,-2.37,Q.black,20);let N=Qf(t,1.7,3.8,-.9);N.rotation.z=-m,Kf(N,.68,.17,1.1,0,0,0,Q.wood,.03),Kf(N,.55,.015,.96,0,.095,0,Q.soil);for(let e=0;e<15;e++)qf(N,If(-.24,.24),If(.11,.3),If(-.44,.44),.12,.12,.13,e%2?Q.green:Q.greenLight,!0);n.push(cp(v,.9,s,-.56,`barista`,0)),n[0].root.scale.setScalar(1.43),n.push(cp(t,3.55,.27,3.57,`guest`,Math.PI)),n.push(cp(t,3.55,.29,-.42,`guest2`,0)),n.push(cp(t,3.55,.29,-.42,`patio-guest`,0)),n.push(cp(t,-.3,.26,3.75,`server`,Math.PI/2)),n.slice(1).forEach(e=>e.root.scale.setScalar(1.16));let ce=Tf.map(e=>{let n=ep(t,...e.cup,.76);return n.userData.dynamic=!0,n}),le=sp(n[4].root,0,.86,.34,.78);le.rotation.y=Math.PI/2;let P=Qf(le,-.31,.29,0),F=Jf(t,.009,.01,1,0,0,0,Q.coffee,8);F.userData.dynamic=!0,F.visible=!1;let ue=Jf(t,.005,.007,1,0,0,0,Q.coffee,6);ue.userData.dynamic=!0,ue.visible=!1;let de=Z(3.73,1.19,2.8),fe=Z(1.344,2.0854,.4098274),pe=Z(0,0,0),me=Z(0,0,0),he=Nf(0),ge=!1,_e=e=>{ge=e};function ve(e,r,i=!1){he=Nf(e),t.updateWorldMatrix(!0,!0);let a=n[4];de.fromArray(he.cupTarget),ge&&he.tableIndex<2&&(de.y=1.246),le.rotation.z=he.pour*.58,le.position.y=.86+he.pour*.15;let o=Z(.025,-.34,.025),s=Z(.24,.16,0).multiplyScalar(.78).applyEuler(le.rotation).add(le.position).sub(a.armR.position);if(a.armR.scale.setScalar(s.length()/o.length()),a.armR.quaternion.setFromUnitVectors(o.normalize(),s.normalize()),t.updateWorldMatrix(!0,!0),P.getWorldPosition(pe),F.visible=he.pour>.35,F.visible){let e=de.clone().add(Z(0,.113,0)),t=e.clone().sub(pe);F.position.copy(pe).add(e).multiplyScalar(.5),F.scale.y=t.length(),F.quaternion.setFromUnitVectors(Z(0,1,0),t.normalize())}ce[he.tableIndex].children[2].position.y=.09+.058*he.transfer,g.rotation.y=i||he.doorOpen?-1.65:0;let c=n[0];if(ue.visible=r>0&&c.kettle.rotation.z>.3,ue.visible){c.kettleTip.getWorldPosition(me);let e=fe.clone().sub(me);ue.position.copy(me).add(fe).multiplyScalar(.5),ue.scale.y=e.length(),ue.quaternion.setFromUnitVectors(Z(0,1,0),e.normalize())}}o(`table`,`坐一会儿，听咖啡落下`,-.75,1.58,.55,.7,.12,.7);for(let[e,t,n]of[[0,-1.38,.55],[1,-.12,.55],[2,-1.68,-1.45]])o(`seat`+e,`坐在这张椅子上`,t,1.27,n,.49,.85,.43),r[r.length-1].point.set(t+(e===1?.21:-.21),1.62,n);let ye={};function be(e,n,r,i){let a=Qf(t,n,r,i);return a.userData.dynamic=!0,a.visible=!1,ye[e]=a,a}let xe=be(`flowers`,-3.7,.28,3.35);Kf(xe,1.15,.3,.43,0,.15,0,Q.wood);for(let e=0;e<7;e++){let t=-.45+e*.15;Yf(xe,Z(t,.25,0),Z(t,.65,0),.012,Q.greenDark);for(let e=0;e<5;e++){let n=e*Math.PI*2/5;qf(xe,t+Math.cos(n)*.06,.65,Math.sin(n)*.06,.045,.025,.045,Q.cream)}qf(xe,t,.66,0,.025,.025,.025,Q.brass)}let Se=be(`rug`,-.75,.871,.55);Kf(Se,2.05,.008,1.5,0,0,0,Q.greenDark,.04),Kf(Se,1.9,.006,1.36,0,.002,0,Q.lightWood,.025),Kf(Se,1.72,.004,1.2,0,.004,0,Q.green,.02);let Ce=be(`lamp`,-2.13,s,-.45);Jf(Ce,.18,.2,.035,0,.02,0,Q.brass),Yf(Ce,Z(0,.02,0),Z(0,1.8,0),.025,Q.brass),Yf(Ce,Z(0,1.8,0),Z(.25,1.95,0),.025,Q.brass),Jf(Ce,.08,.22,.25,.25,1.8,0,Q.brass),qf(Ce,.25,1.7,0,.1,.08,.1,Q.light);let we=be(`gramophone`,1.2,2.01,-1.8);Kf(we,.48,.2,.4,0,0,0,Q.wood),Jf(we,.18,.18,.018,0,.12,0,Q.black,32),Yf(we,Z(.17,.12,0),Z(.23,.5,-.1),.025,Q.brass);let Te=Jf(we,.21,.04,.32,.2,.56,-.1,Q.brass);Te.rotation.z=-.8;let Ee=be(`lantern`,1.9,.26,-3.6);Kf(Ee,.45,.06,.45,0,.03,0,Q.wood);for(let e of[-.2,.2])for(let t of[-.2,.2])Yf(Ee,Z(e,.05,t),Z(e,.8,t),.018,Q.brass);Kf(Ee,.44,.04,.44,0,.82,0,Q.brass),qf(Ee,0,.4,0,.12,.16,.12,Q.light);let De=be(`art`,2.68,2.45,-.2);Kf(De,.07,.62,.48,0,0,0,Q.wood),Kf(De,.08,.53,.39,-.008,0,0,Q.cream);for(let e=0;e<5;e++)qf(De,-.055,-.17+e*.08,Math.sin(e*2)*.08,.018,.055,.08,Q.green,!0);n.slice(0,3).forEach((e,t)=>{let n=t===0?0:t===1?1:2;o(`person`+n,`与`+[`阿禾`,`林伯`,`棠姨`][n]+`聊聊天`,e.root.position.x,e.root.position.y+1.1,e.root.position.z,.55,.7,.55)});for(let e of[-2.75,2.75])for(let n=0;n<=5;n++)for(let r of[.85,1.83,2.87,3.2]){let i=-2.62+n*.914;Kf(t,.025,.12,.12,e,r,i,Q.frame,.004),qf(t,e+Math.sign(e)*.042,r,i,.014,.019,.019,Q.frameEdge)}for(let e of[-2.62,1.95])for(let n=0;n<=5;n++)for(let r of[.85,1.83,2.87,3.2]){let i=-2.75+n*1.1;Kf(t,.12,.12,.025,i,r,e,Q.frame,.004),qf(t,i,r,e+Math.sign(e)*.042,.019,.019,.014,Q.frameEdge)}for(let e=0;e<42;e++){let e=If(-4.2,4.2),n=If(-4.2,4.2);Math.abs(e)<2.9&&n<2.25&&n>-2.8||Yf(t,Z(e,.26,n),Z(e+If(-.03,.03),If(.29,.36),n),.006,Q.greenDark,4)}let Oe=Qf(t,-2.55,.26,2.7);tp(Oe,0,0,0,.48);for(let e=0;e<7;e++){let t=e*2.4;Yf(Oe,Z(0,.3,0),Z(Math.cos(t)*.23,1+e*.05,Math.sin(t)*.23),.01,Q.greenDark);for(let e=0;e<4;e++)qf(Oe,Math.cos(t)*(.08+e*.05),.5+e*.18,Math.sin(t)*(.08+e*.05),.1,.03,.08,Q.green,!0)}for(let e=0;e<5;e++)Jf(t,.045,.045,.4,3.4+e*.11,.3,-3.5,Q.wood,10).rotation.z=Math.PI/2;let ke=Qf(t,-3.5,.24,-2.5);Jf(ke,.25,.23,.6,0,.3,0,Q.darkWood);for(let e of[.1,.5])Zf(ke,.25,.012,0,e,0,Q.frameEdge,Math.PI/2);for(let e of[3.45,4.2,4.65])Zf(t,.125,.012,-1.9,e,-2.37,Q.frameEdge,Math.PI/2);let Ae=Qf(t);Ae.userData.dynamic=!0,Ae.visible=!1,Kf(Ae,1,.02,.42,-.65,.86,2.15,Q.darkWood,.02),Jf(Ae,.13,.1,.22,-1.55,.36,2.65,Q.frameEdge),Zf(Ae,.14,.009,-1.55,.55,2.65,Q.frameEdge),o(`garden`,`看看尤加利`,-2.55,.9,2.7,.55,1.1,.55),o(`lantern`,`点亮庭院小灯`,1.1,.65,3.4,.3,.8,.3);let je=Qf(t,1.344,2.09,.4098274);je.userData.dynamic=!0;let Me=new Kr({color:16446428,transparent:!0,opacity:.25,depthWrite:!1});for(let e=0;e<9;e++)qf(je,0,.12+e*.04,0,.014,.07,.014,Me);t.updateWorldMatrix(!0,!0);let Ne={chairs:[],pots:[]};t.traverse(e=>{if(e.userData.snowChair){let t=e.localToWorld(Z(0,.596,0));t.y<1.1&&Ne.chairs.push({position:t.toArray(),occupied:Math.abs(t.z-3.57)<.01||Math.abs(t.z+.42)<.01})}if(e.userData.snowPot){let t=e.localToWorld(Z(0,e.userData.snowPot.height+.025,0));t.y<.8&&Ne.pots.push({position:t.toArray(),radius:e.userData.snowPot.radius})}});let I=new tr().setFromObject(w);T.forEach(e=>I.union(new tr().setFromObject(e)));let Pe=[y,w,...T,E,D].map(e=>{let t=new tr().setFromObject(e);return{min:t.min.toArray(),max:t.max.toArray()}}),Fe=[y,b,w,...T,E,D,O].map(e=>{let t=new tr().setFromObject(e);return Math.min(t.min.x+2.75,2.75-t.max.x,t.min.z+2.77,2.1-t.max.z)}),Ie=1/0;b.traverse(e=>{if(!(e instanceof ii))return;let t=new tr().setFromObject(e),n=Math.max(Math.abs(t.min.x),Math.abs(t.max.x));Ie=Math.min(Ie,p-.5*n-t.max.y)});let L=()=>({patioGuest:{role:n[3].role,position:n[3].root.position.toArray(),chair:[3.55,.26,-.42],facing:n[3].root.rotation.y},overviewBounds:Pe,rugCenter:ye.rug.position.toArray(),pendants:k.map(e=>({visible:e.visible,emissive:e.material.emissiveIntensity,position:e.position.toArray()})),tang:{role:n[2].role,position:n[2].root.getWorldPosition(Z(0,0,0)).toArray(),chair:n[2].role===`garden-tang`?null:[3.55,.26,-.42]},snowSurfaces:Ne,seating:i,furnitureClearances:Fe,shelfRoofClearance:Ie,countertopY:1.91,heroBounds:{min:I.min.toArray(),max:I.max.toArray()},kettleMinY:new tr().setFromObject(n[0].kettle).min.y,kettleGripError:n[0].armR.localToWorld(Z(.025,-.34,.025)).distanceTo(n[0].kettleGrip.getWorldPosition(Z(0,0,0))),umbrellaSpread:M.scale.x,linUmbrellaSpread:oe.scale.x,umbrellaPoleScale:re.scale.toArray(),service:{...he,server:n[4].root.position.toArray(),cup:ce[he.tableIndex].position.toArray(),pouring:F.visible,tableCount:ce.length,tableTarget:de.toArray()},sign:`SKYE CAFE`}),Le=[],Re=new Map,ze=[];t.traverse(e=>{e.userData.snowChair&&e.position.y<.5&&ze.push(e)});let Be=new Map,Ve=[];t.traverse(e=>{if(!(e instanceof ii))return;let n=e;for(;n&&n!==t;){if(n.userData.dynamic)return;n=n.parent}let r=e.material,i=e.getWorldPosition(new B),a=Math.abs(i.x)>2.8||i.z>2.2||i.z<-2.8||i.y>3.3;if(r===Q.trunk||a&&[Q.green,Q.greenLight,Q.greenDark].includes(r)){let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();t.applyMatrix4(e.matrixWorld),t.deleteAttribute(`uv1`),t.deleteAttribute(`tangent`),Re.has(r)||Re.set(r,[]),Re.get(r).push(t),Ve.push(e);return}Be.has(r)||Be.set(r,{geos:[],shadow:e.castShadow});let o=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();o.applyMatrix4(e.matrixWorld),o.deleteAttribute(`uv1`),o.deleteAttribute(`tangent`),Be.get(r).geos.push(o),Ve.push(e)});for(let[t,n]of Be){let r=yd(n.geos,!1);if(r){let i=new ii(r,t);i.castShadow=n.shadow,i.receiveShadow=!0,e.add(i)}for(let e of n.geos)e.dispose()}for(let[t,n]of Re){let r=yd(n,!1);if(r){let n=new ii(r,t);n.castShadow=!0,n.receiveShadow=!0,e.add(n),Le.push(n)}n.forEach(e=>e.dispose())}for(let e of Ve)e.removeFromParent();return{interior:{counter:y,shelfWall:b,machine:x,grinder:S,heroTable:w,windowTable:E,heroChairs:T,windowChair:D,bed:O},root:t,actors:n,door:g,sign:ie,patioChairs:ze,patioSummerProps:j,tableCups:ce,linUmbrella:ae,setPatioWinter:_e,seasonalFoliage:Le,hotspots:r,steam:je,lamps:A,globes:k,umbrella:re,umbrellaShade:M,linShade:oe,snowSurfaces:Ne,rainProps:Ae,decorations:ye,updateService:ve,diagnostics:L}}function up(e,t,n){for(let r of e){if(r.role===`garden-tang`)continue;let e=t+r.phase;if(r.head.rotation.z=Math.sin(e*.65)*.045,r.head.rotation.y=Math.sin(e*.4)*.13,r.role===`barista`){let i=(1-Math.cos(t*2.2))*.5;r.armL.rotation.x=-1.45+Math.sin(e)*.04,r.root.position.copy(r.base),r.head.rotation.x=.18+i*.06,r.kettle.rotation.z=n>0?.18+i*.3:.03+Math.sin(e*.7)*.025;let a=Z(.025,-.34,.025),o=Z(.24,.16,0).multiplyScalar(.68).applyEuler(r.kettle.rotation).add(r.kettle.position).sub(r.armR.position);r.armR.scale.setScalar(o.length()/a.length()),r.armR.quaternion.setFromUnitVectors(a.normalize(),o.normalize())}else if(r.role===`server`){let e=Nf(t),n=Math.sin(t*5.6)*e.walk;r.root.position.set(e.x,e.y+Math.abs(n)*.025,e.z),r.root.rotation.y=e.yaw,r.legL.rotation.x=n*.34,r.legR.rotation.x=-n*.34,r.armL.rotation.x=-1.5,r.armR.rotation.x=-1.5-(e.phase===`serve`?Math.sin(e.transfer*Math.PI)*.22:0),r.carry.position.y=.84-Math.abs(n)*.025/1.16}else if(r.role===`watcher`)r.armL.rotation.x=-.15,r.armR.rotation.x=-.1,r.head.rotation.y=Math.sin(e*.35)*.4;else if(r.role===`gardener`)r.armR.rotation.x=-.45+Math.sin(e*.8)*.18,r.armR.rotation.z=-.4,r.root.rotation.z=Math.sin(e*.8)*.025,r.head.rotation.x=.25;else{let t=Math.max(0,Math.sin(e*.57))**5;r.armR.rotation.x=-.45-t*1.5,r.armL.rotation.x=-.35,r.head.rotation.x=-t*.08,r.root.rotation.z=Math.sin(e*.5)*.015}}}function dp(e,t){let n=G(e);n.name=`Interior lived-in detail layer`;let r=G(n),i=G(n),a=G(n),o=G(n),s=W(15722972,.5),c=W(15261641,.94),l=W(13744270,.94),u=W(11370571,.7),d=W(13938295,.85),f=W(15656142,.32),p=W(11688538,.29),m=W(6382968,.38),h=W(12421450,.27),g=W(7035466,.95),_=W(8623476,.65),v=W(11057551,.7),y=new No({color:15199461,transparent:!0,opacity:.3,roughness:.06,metalness:.05,depthWrite:!1,side:2}),b=721,x=()=>(b=b*1664525+1013904223>>>0,b/4294967296),S=(e,t,n,r,i,a,o,s)=>{let c=K(e,new yo(1,12,8),s,t,n,r);return c.scale.set(i,a,o),c},C=(e,t,n,r,i,a,o)=>{let s=K(e,new bo(t,n,5,28),o,r,i,a);return s.rotation.x=Math.PI/2,s},w=(e,t,n,r)=>K(e,new xo(new sa(t),18,n,5,!1),r);function T(e){e.updateWorldMatrix(!0,!1);let t=G(r);return e.matrixWorld.decompose(t.position,t.quaternion,t.scale),t}function E(e,t,n,r,i=0){J(e,r,r*.92,.008,t,i+.004,n,s),C(e,r*.91,.004,t,i+.01,n,s)}function D(e,t,n,r=.04,i=!1,a=0,o=s,c=!0){let l=G(e,t,a,n);J(l,r,r*.7,.065,0,.034,0,o),c&&J(l,r*.85,r*.85,.003,0,i?.044:.061,0,Q.coffee),C(l,r,.003,0,.066,0,o);let u=C(l,.018,.005,r+.012,.038,0,o);if(u.rotation.x=0,i)C(l,r*.88,.0012,0,.058,0,g);else if(c)for(let e=0;e<14;e++){let e=x()*6.28,t=x()*r*.65;S(l,Math.cos(e)*t,.063,Math.sin(e)*t,.002,8e-4,.002,f)}return l}function O(e,t,n,r,i,a,o=0){let s=new _o(i,a,24,20);s.rotateX(-Math.PI/2);let l=s.attributes.position;for(let e=0;e<l.count;e++){let t=l.getX(e),n=l.getZ(e);l.setY(e,Math.sin(t*105+n*16)*.003-Math.max(0,n/a+.13)*o)}s.computeVertexNormals();let u=c.clone();return u.side=2,K(e,s,u,t,n,r)}function k(e,t,n,r){S(e,t,n,r,.008,.006,.008,u);for(let i=0;i<6;i++){let a=i*1.047;S(e,t+Math.cos(a)*.014,n,r+Math.sin(a)*.014,.011,.003,.006,s)}}function A(e,t,n,r){let i=G(e,t.x,t.y,t.z);i.rotation.set(.65+Math.sin(r)*.35,r,.25);let a=new Oa;a.moveTo(0,-n),a.bezierCurveTo(-n*.5,-n*.55,-n*.55,n*.2,-n*.32,n*.55),a.bezierCurveTo(-n*.25,n*.85,-n*.08,n*.92,0,n),a.bezierCurveTo(n*.18,n*.9,n*.48,n*.62,n*.42,n*.25),a.bezierCurveTo(n*.52,-n*.2,n*.4,-n*.6,0,-n);let o=new po(a,{depth:.004,bevelEnabled:!1,curveSegments:5});o.rotateX(-Math.PI/2),K(i,o,_),Y(i,U(0,.006,-n*.85),U(0,.006,n*.85),.0018,v);for(let e=0;e<3;e++)for(let t of[-1,1])Y(i,U(0,.006,-n*.4+e*n*.35),U(t*n*.32,.006,-n*.2+e*n*.35),.001,v,5e-4)}function ee(e,t,n,r,i,a){J(e,i,i*.7,a,t,n+a/2,r,Q.pot),C(e,i,.012,t,n+a-.008,r,Q.pot),J(e,i*.87,i*.87,.008,t,n+a,r,g);for(let o=0;o<16;o++){let s=o*2.4,c=Math.sqrt(x())*i*.75;S(e,t+Math.cos(s)*c,n+a+.007,r+Math.sin(s)*c,.014,.006,.008,o%3?l:Q.pot)}return n+a}function te(e,t,n,r,i,a){let o=G(e,t,n,r);J(o,i,i*.72,a,0,a/2,0,Q.wood);for(let e=0;e<9;e++)C(o,i*(.74+e*.032),.004,0,e*a/9,0,Q.lightWood);for(let e=0;e<20;e++){let t=e*Math.PI/10;Y(o,U(Math.cos(t)*i*.72,0,Math.sin(t)*i*.72),U(Math.cos(t)*i,a,Math.sin(t)*i),.004,Q.lightWood)}return o}let ne=1.591,j=G(r,-.75,ne,.55);j.name=`Sharing table`,E(j,-.02,-.06,.1),J(j,.031,.034,.025,-.045,.026,-.067,u);let re=[];for(let e=0;e<65;e++){let t=e*.34,n=.003+e*42e-5;re.push(U(-.045+Math.cos(t)*n,.04,-.067+Math.sin(t)*n))}w(j,re,.0026,g),w(j,[U(-.07,.04,-.07),U(-.045,.043,-.08),U(-.023,.039,-.06),U(-.015,.022,-.06)],.003,f);for(let[e,t]of[[-.005,-.025],[.025,-.08]]){J(j,.021,.017,.021,e,.022,t,d);let n=S(j,e,.04,t,.025,.019,.025,u);e>0&&(n.scale.x*=.82);for(let n=0;n<4;n++)S(j,e+(x()-.5)*.028,.054,t+(x()-.5)*.025,.004,.003,.004,m);e>0&&S(j,e+.015,.037,t,.011,.012,.016,d)}J(j,.023,.023,.008,.025,.014,-.12,y),S(j,.025,.021,-.12,.019,.006,.017,p),q(j,.016,.008,.018,-.002,.02,-.12,f),D(j,-.18,.07,.04,!0);let M=G(j,.16,0,.085);q(M,.11,.008,.085,0,.004,0,l),O(M,0,.01,0,.105,.08);let ie=W(13134682,.85);for(let e=-3;e<=3;e++)q(M,.002,.001,.079,e*.014,.013,0,ie),q(M,.104,.001,.002,0,.013,e*.011,ie);for(let e of[-.028,.012])q(M,.028,.018,.032,e,.023,-.012,u),q(M,.022,.003,.025,e,.034,-.012,v);S(M,0,.029,.023,.041,.013,.012,u);for(let e=0;e<6;e++)S(M,-.025+e*.009,.039,.025,.002,.001,.003,d);let ae=G(j,.19,0,-.07);J(ae,.023,.028,.05,0,.025,0,Q.brass),C(ae,.023,.004,0,.052,0,Q.brass),w(ae,[U(-.02,.015,0),U(-.037,.026,0),U(-.04,.045,0)],.004,Q.brass),w(ae,[U(-.04,.044,0),U(-.042,.029,0)],.0013,h);let oe=G(j,.085,.002,-.205);oe.rotation.y=.22,q(oe,.1,.006,.07,0,.003,0,Q.greenDark);for(let e of[-1,1]){let t=q(oe,.047,.005,.066,e*.024,.011,0,s);t.rotation.z=e*.1;for(let t=0;t<3;t++)Y(oe,U(e*.004,.014,-.02+t*.016),U(e*.04,.016,-.02+t*.016),7e-4,c)}J(oe,.017,.017,.003,.029,.019,.021,Q.wood);let se=te(r,-.98,.868,.47,.085,.115);S(se,.015,.15,.01,.025,.08,.025,u),O(r,-1.37,1.3,.55,.29,.31,.22).rotation.y=Math.PI/2;let N=G(r,-1.05,ne,-1.45);N.name=`Freshly reset table`,E(N,-.035,-.04,.075);let ce=D(N,-.035,-.04,.027,!1,.082,y,!1);ce.rotation.z=Math.PI,O(N,-.11,.008,.125,.1,.07),O(N,-.105,.013,.124,.095,.065);let le=G(N,.085,.005,-.19);q(le,.1,.11,.009,0,.059,0,Q.wood),q(le,.085,.09,.002,0,.059,.006,c),Y(le,U(0,.09,-.005),U(0,0,-.035),.006,Q.wood),J(N,.025,.027,.008,-.11,.004,-.19,Q.brass),J(N,.006,.009,.05,-.11,.031,-.19,Q.brass),J(N,.018,.018,.006,-.11,.06,-.19,Q.brass),J(N,.011,.011,.042,-.11,.084,-.19,c),Y(N,U(-.11,.106,-.19),U(-.11,.111,-.19),.001,g);for(let e=0;e<3;e++){let t=-.19+(e-1)*.022,n=-.1+e%2*.016;Y(N,U(-.19,.11,-.1),U(t,.22+e*.012,n),.002,_),k(N,t,.22+e*.012,n)}let P=T(t.interior.shelfWall);for(let e=0;e<5;e++){let t=G(P,-1.65+e*.8,3.11,-2.48);J(t,.11,.105,.24,0,.12,0,y);let n=J(t,.115,.115,.024,0,.252,0,Q.wood);e===3&&(n.rotation.z=.15,n.position.x=.018);for(let n=0;n<24;n++){let r=n*2.4,i=Math.sqrt(x())*.077,a=.02+x()*.13,o=Math.cos(r)*i,s=Math.sin(r)*i;e===1?q(t,.024,.024,.024,o,a,s,f):e===4?Y(t,U(o,.012,s),U(o+.012,.19,s),.007,u):S(t,o,a,s,e===2?.014:.012,.008,e===3?.018:.01,e===0?Q.coffee:e===2?d:p)}}for(let e=0;e<7;e++){let t=-1.65+e*.5,n=D(P,t,-2.48,.075,!1,2.59,s,!1);n.rotation.y=e===1?Math.PI:e===4?1.1:0,e===6&&(n.rotation.z=Math.PI,n.position.y+=.073),e%3==0&&E(P,t,-2.48,.1,2.59)}for(let e=0;e<3;e++){let t=-1.65+e*.32;q(P,.22,.25,.15,t,2.19,-2.48,l);for(let e=0;e<2;e++)q(P,.235,.018,.016,t,2.315-e*.014,-2.405,Q.wood);w(P,[U(t-.08,2.32,-2.39),U(t,2.28,-2.38),U(t+.08,2.32,-2.39)],.003,c)}let F=te(P,.25,2.07,-2.48,.2,.07);for(let e=0;e<7;e++)S(F,(x()-.5)*.27,.09,(x()-.5)*.2,.045,.038,.036,e%2?d:h);for(let e=0;e<4;e++){let t=O(P,1.25,2.075+e*.008,-2.48,.32,.16);t.rotation.y=e*.04}let ue=T(t.interior.counter),de=T(t.interior.machine),fe=T(t.interior.grinder),pe=G(ue,-1.77,1.065,.1);q(pe,.29,.12,.23,0,.06,0,Q.brass);let me=q(pe,.29,.018,.23,0,.16,-.065,Q.brass);me.rotation.x=-.65;for(let e=0;e<4;e++){let t=q(pe,.19,.002,.09,0,.126+e*.003,.005,c);t.rotation.y=e*.06}E(ue,-1.42,.21,.065,1.065);for(let e=0;e<4;e++){let t=C(ue,.012,.0015,-1.44+e*.013,1.081,.21,Q.brassDark);t.scale.z=.45}let he=G(ue,-1.35,1.065,-.24);q(he,.1,.025,.06,0,.013,0,Q.wood);for(let e=0;e<3;e++){let t=q(he,.08,.11,.003,0,.075+e*.003,0,c);t.rotation.z=(e-1)*.12}O(ue,-1.68,1.077,.38,.24,.28,.43);for(let e=0;e<32;e++){let t=e*2.4,n=Math.sqrt(x())*.135;S(fe,Math.cos(t)*n,.58+x()*.03,Math.sin(t)*n,.017,.012,.011,e<2?d:Q.coffee)}J(fe,.065,.045,.035,0,.035,.23,s);for(let e=0;e<6;e++)S(ue,-1.18+e*.025,1.079,.24+e%2*.04,.011,.006,.008,Q.coffee);q(ue,.13,.018,.025,-1.18,1.08,-.2,Q.wood);for(let e=0;e<12;e++)Y(ue,U(-1.12,1.083,-.21+e*.002),U(-1.07,1.082,-.21+e*.002),.001,c);let ge=G(a);de.updateWorldMatrix(!0,!1);let _e=de.localToWorld(U(-.26,.184,.32));ge.position.copy(_e),J(ge,.0015,.0015,.012,0,0,0,Q.coffee),D(de,-.26,.32,.031,!1,.112,y),D(de,.26,.32,.031,!1,.112,y,!1);let ve=[],ye=new Kr({color:15262421,transparent:!0,opacity:.12,depthWrite:!1});for(let e=0;e<12;e++){let e=S(a,_e.x+.13,_e.y+.08,_e.z,.012,.04,.012,ye);ve.push(e)}let be=G(P,1.28,2.27,-2.565);q(be,.58,.3,.018,0,0,0,Q.wood),q(be,.54,.26,.021,0,0,.004,Q.frame);for(let e=0;e<15;e++){let e=q(be,.12+x()*.22,.002,.001,(x()-.5)*.2,(x()-.5)*.2,.016,_);e.rotation.z=(x()-.5)*.13}for(let e=0;e<2;e++){let t=q(P,.16,.12,.005,1.75,2.28+e*.14,-2.54,l);t.rotation.z=(e-.5)*.2}Y(P,U(1.88,2.16,-2.53),U(1.96,2.46,-2.53),.003,Q.wood);for(let e=0;e<5;e++)A(P,U(1.89+e*.012,2.2+e*.046,-2.51),.035,e);for(let e=0;e<8;e++){let t=-1.72+e*.48+e%3*.025,n=C(P,.018,.003,t,2.49,-2.39,Q.brass);n.rotation.x=0;let r=D(P,t,-2.39,.035,!1,2.419,s,!1);r.rotation.z=.15*(e%2?1:-1),e===6&&O(P,t,2.46,-2.38,.07,.23,.6)}let xe=G(r,-2.02,.85,1.02);Y(xe,U(0,.34,0),U(-.08,1.8,0),.025,Q.trunk,.008);for(let e=0;e<8;e++){let t=e*2.4,n=.55+e*.145,r=Math.cos(t)*.18;Y(xe,U(-.03,n,0),U(r,n+.1,Math.sin(t)*.16),.009,Q.trunk,.003),A(xe,U(r,n+.12,Math.sin(t)*.16),.2,t)}let Se=G(r,-2.14,.865,-.12),Ce=ee(Se,0,0,0,.18,.38);for(let e=0;e<3;e++){let t=U(Math.cos(e*2.1)*.16,1.55+e*.1,Math.sin(e*2.1)*.12);w(Se,[U(0,Ce,0),U(-.04,1.1,0),t],.007,Q.trunk);for(let n=1;n<8;n++)A(Se,U(0,Ce,0).lerp(t,n/8),.065,e+n*.8)}let we=G(r,2.35,.865,-2.43),Te=ee(we,0,0,0,.16,.3);for(let e=0;e<7;e++){let t=e*.897,n=U(Math.cos(t)*.28,1.2+x()*.2,Math.sin(t)*.28);w(we,[U(0,Te,0),U(0,1.05,0),n],.008,_);for(let e=0;e<8;e++){let r=U(0,.65,0).lerp(n,e/8);for(let e of[-1,1])Y(we,r,r.clone().add(U(Math.cos(t+e*.8)*.1,0,Math.sin(t+e*.8)*.1)),.008,_,.001)}}for(let[e,t]of[[-2.14,-.12],[2.35,-2.43]]){for(let n=0;n<5;n++)A(r,U(e+(x()-.5)*.38,.875,t+(x()-.5)*.38),.025,n);q(r,.09,.12,.055,e+.23,.925,t,l),q(r,.1,.014,.055,e+.23,.991,t,Q.wood),J(r,.035,.04,.07,e-.16,.903,t+.13,Q.brass),Y(r,U(e-.18,.93,t+.13),U(e-.25,.95,t+.13),.008,Q.brass)}let Ee=1/0;for(let[e,t]of[[-2.05,-.65],[2.02,1.5]]){let n=G(r,e,3.34,t);te(n,0,-.09,0,.12,.14);for(let t=0;t<3;t++){let r=t*2.094;w(n,[U(Math.cos(r)*.11,.04,Math.sin(r)*.11),U(0,.19,0)],.004,Q.wood),C(n,.012,.004,0,.19,0,Q.wood),Y(n,U(0,.19,0),U(0,4.575-Math.abs(e)*.5-.015-3.34,0),.004,Q.brassDark)}for(let e=0;e<5;e++){let t=e*1.25,r=.78+e*.018,i=Math.cos(t)*.1,a=Math.sin(t)*.1;w(n,[U(i,0,a),U(i*.8,-r*.55,a*1.2),U(i*1.4,-r,a)],.003,_);for(let e=0;e<7;e++){let o=e/7;A(n,U(i*(1+o*.4),-o*r,a),.035,t+e*.45)}Ee=Math.min(Ee,3.34-r)}}let De=document.createElement(`canvas`);De.width=De.height=128;let Oe=De.getContext(`2d`),ke=Oe.createRadialGradient(64,64,0,64,64,64);ke.addColorStop(0,`rgba(46,48,35,0.18)`),ke.addColorStop(.45,`rgba(46,48,35,0.10)`),ke.addColorStop(1,`rgba(46,48,35,0)`),Oe.fillStyle=ke,Oe.fillRect(0,0,128,128);let Ae=new Kr({map:new Wi(De),transparent:!0,depthWrite:!1,toneMapped:!1}),je=(e,t,n,r,i,a,o)=>{let s=K(e,new _o(i,a),o,t,n,r);return s.rotation.x=-Math.PI/2,s};for(let[e,t,n]of[[-.75,.55,.23],[-1.05,-1.45,.23],[-1.96,.8,.38],[-2.14,-.12,.22],[2.35,-2.43,.2]])je(r,e,.868,t,n*2,n*2,Ae);for(let[e,t]of[[-.12,.55],[-1.38,.55],[-1.68,-1.45]])for(let n of[-.17,.17])for(let i of[-.16,.16])je(r,e+n,.868,t+i,.13,.13,Ae);let Me=document.createElement(`canvas`);Me.width=Me.height=128;let Ne=Me.getContext(`2d`),I=Ne.createRadialGradient(64,64,0,64,64,64);I.addColorStop(0,`rgba(242,217,160,0.14)`),I.addColorStop(.5,`rgba(242,217,160,0.07)`),I.addColorStop(1,`rgba(242,217,160,0)`),Ne.fillStyle=I,Ne.fillRect(0,0,128,128);let Pe=new Kr({map:new Wi(Me),transparent:!0,depthWrite:!1,toneMapped:!1});for(let[e,t,n,r]of[[-.75,1.5919999999999999,.55,.32],[-1.05,1.5919999999999999,-1.45,.32],[1.2,1.916,.5,.4]])je(o,e,t,n,r*2,r*2,Pe);let Fe=[];for(let e=0;e<3;e++){let r=[[-.75,ne,.55],[-1.05,ne,-1.45],[1.2,1.91,.5]],i=t.globes[e].position,a=new ys(15915424,2.8,4,.25,1,2);a.position.copy(i),a.target.position.set(...r[e]),n.add(a,a.target),Fe.push(a)}let Ie=W(11049343,.62);Ie.transparent=!0,Ie.opacity=.19,Ie.depthWrite=!1,C(N,.052,.0018,.12,.002,.14,Ie);for(let[e,t]of[[-1.5,.06],[.9,.22],[1.2,-.18]])C(ue,.072,.002,e,1.066,t,Ie);C(de,.1,.0015,0,.112,.18,Ie);for(let e=0;e<8;e++)Y(ue,U(-1.9+e*.28,1.066,.33),U(-1.82+e*.28,1.066,.31),8e-4,g);let L=G(i,-1.1,.87,1.73);q(L,.65,.012,.36,0,.006,0,Q.wood);for(let e of[-.12,.1])S(L,e,.014,0,.045,.001,.09,Ie);let Le=G(i),Re=G(i),ze=new No({color:14148835,transparent:!0,opacity:.25,roughness:.08,metalness:.1,depthWrite:!1}),Be=new Kr({color:14477284,transparent:!0,opacity:.22,depthWrite:!1});for(let e=0;e<110;e++){let t=-2.6+x()*4.5,n=1+x()*2;S(Le,-2.767,n,t,.003,.012+x()*.018,.006,ze),e%6==0&&Y(Le,U(-2.768,n,t),U(-2.768,n-.18-x()*.15,t+.006),.001,ze)}for(let e of[-2.77,-1.796,-.822,.152,1.126,2.1])for(let t=0;t<12;t++){let n=.95+t*.17;Y(Re,U(-2.706,n,e),U(-2.704,n+.04,e+.015),.002,Be,5e-4)}let Ve=G(i),He=W(5858387,.95);He.transparent=!0,He.opacity=.16,He.depthWrite=!1,je(Ve,-.75,.885,1.19,1.85,.07,He),r.updateWorldMatrix(!0,!0);let Ue=[j,N].map(e=>{let t=0,n=e.matrixWorld.clone().invert();return e.traverse(e=>{if(!(e instanceof ii))return;let r=e.geometry.attributes.position,i=n.clone().multiply(e.matrixWorld),a=U(0,0,0);for(let e=0;e<r.count;e++)a.fromBufferAttribute(r,e).applyMatrix4(i),t=Math.max(t,Math.hypot(a.x,a.z))}),.35-t}),We=[xe,Se,we,se].map(e=>{let t=new tr().setFromObject(e);return{min:t.min.toArray(),max:t.max.toArray()}}),Ge=1/0;r.traverse(e=>{if(!(e instanceof ii))return;let t=e.geometry.attributes.position,n=U(0,0,0);for(let r=0;r<t.count;r++)n.fromBufferAttribute(t,r).applyMatrix4(e.matrixWorld),n.y>3&&(Ge=Math.min(Ge,4.575-Math.abs(n.x)*.5-n.y))}),Sd(r),r.traverse(e=>{e instanceof ii&&(e.castShadow=!1)});let Ke=!1,qe=0,Je=0;return{root:n,update(e,r,s,c,l){Ke=e,qe=s,Je=c,n.visible=!0,o.visible=e,a.visible=e,Fe.forEach(t=>t.visible=e),i.visible=e&&(s>.1||c>.1),Le.visible=s>.1,Re.visible=c>.1,L.visible=c>.1,Ve.visible=s>.1&&t.decorations.rug.visible,Fe.forEach(e=>e.intensity=2.8+s*1.2+l*.8),Pe.opacity=1+s*.35,ve.forEach((e,t)=>{let n=(r*.32+t/12)%1;e.position.set(_e.x+.13+Math.sin(n*5+t)*.018,_e.y+.1+n*.32,_e.z),e.scale.set(.012+n*.018,.04+n*.03,.012+n*.014)}),ge.scale.y=.8+Math.sin(r*3)*.1},diagnostics:()=>({active:Ke,tableMargins:Ue,floorPropBounds:We,roofClearance:Ge,tableCount:2,tableGroups:[7,7],shelfJars:5,hangingMugs:8,hangingAdded:2,hangingLowest:Ee,lightPools:3,wet:qe,frost:Je,steam:ve.length,geometryBounds:new tr().setFromObject(r).getSize(U(0,0,0)).toArray()})}}function fp(e){let t={time:{value:0},rain:{value:0},snow:{value:0},dusk:{value:0}},n=new Ao({side:1,depthWrite:!1,toneMapped:!1,uniforms:t,vertexShader:`varying vec3 ray;void main(){ray=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 ray;uniform float time,rain,snow,dusk;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
 void main(){vec3 d=normalize(ray);float a=atan(d.z,d.x),h=d.y+.02,az=2.53073;
 vec3 horizon=vec3(.94,.88,.78),sky=vec3(.55,.73,.79);float weather=max(rain,snow);
 horizon=mix(horizon,vec3(.74,.79,.80),weather*.85);sky=mix(sky,vec3(.55,.63,.68),rain*.8);sky=mix(sky,vec3(.77,.82,.85),snow);
 horizon=mix(horizon,vec3(.88,.66,.49),dusk*(1.-snow));sky=mix(sky,vec3(.35,.44,.59),dusk*(1.-snow));
 vec3 col=mix(horizon,sky,smoothstep(0.,.65,h));
 float cloud=noise(vec2(a*7.,h*12.))+noise(vec2(a*15.,h*28.))*.35;
 float clouds=smoothstep(.72,.91,cloud)*smoothstep(.025,.15,h)*(1.-smoothstep(.35,.55,h));col=mix(col,vec3(.94,.94,.89),clouds*.58);
 // Two irregular island silhouettes; soften through weather haze.
 float island1=.018+pow(max(0.,sin(a*2.+.8)),6.)*.044+noise(vec2(a*12.,2.))*.012;
 float island2=.008+pow(max(0.,sin(a*3.3+1.)),10.)*.034+noise(vec2(a*19.,4.))*.008;
 if(h<island1&&h>-.008)col=mix(col,mix(vec3(.55,.66,.64),horizon,.35+weather*.4),.72);
 if(h<island2&&h>-.008)col=mix(col,mix(vec3(.40,.57,.56),horizon,weather*.65),.65);
 if(h<-.008){float depth=clamp(-h*3.,0.,1.);col=mix(vec3(.40,.66,.66),vec3(.30,.55,.59),depth);
 float ripple=sin(h*380.+noise(vec2(a*25.,h*90.))*3.+time*.22)*.012;col+=ripple;
 float delta=atan(sin(a-az+h*.7),cos(a-az+h*.7));float glint=exp(-delta*delta/(.002+depth*.012))*(.2+.8*pow(max(0.,sin(h*520.+time*.14)),8.));col=mix(col,vec3(.92,.84,.63),glint*.46*(1.-weather));
 col=mix(col,vec3(.58,.67,.70),rain*.6);col=mix(col,vec3(.76,.81,.82),snow*.68);col=mix(col,vec3(.37,.45,.53),dusk*.35*(1.-snow));}
 float grain=(noise(vec2(a*450.,h*350.))-.5)*.012;col+=grain;
 col=min(col,vec3(.9843,.9686,.9373));gl_FragColor=vec4(pow(max(col,vec3(0.)),vec3(2.2)),1.);
 #include <colorspace_fragment>
 }`}),r=new ii(new yo(70,48,24),n);r.position.y=2.4,r.renderOrder=-20,r.visible=!1,r.name=`Indoor window sea and weather`,e.add(r);let i=new ii(new yo(1500,48,24),n);return i.name=`Shared island sky`,i.renderOrder=-20,i.position.y=2.4,e.add(i),{uniforms:t,update(e,n,a,o,s){r.visible=e,i.visible=!e,t.time.value=n,t.rain.value=a,t.snow.value=o,t.dusk.value=s},diagnostics:()=>({visible:r.visible,horizonOffset:.52,sunAzimuth:145,rain:t.rain.value,snow:t.snow.value,dusk:t.dusk.value})}}var pp={GrassHeight:.7,WindSpeed:.35,WindDirection:90,Dryness:.12,WearMask:1,TrifoilDensity:.5},mp=-1.35,hp=8.35,gp=5.53,_p=9.5,vp=[[1.87,7.72,.25,.18],[1.3,7.5,.22,.2],[2.5,7.22,.18,.15],[3.02,7.05,.36,.25],[6.55,5.95,.58,.23],[1.5,9.13,.58,.23],[-.1,6.2,.24,.22],[3,8.65,.24,.22],[3.1,5.95,.24,.22],[5.75,6.65,.19,.19],[-.95,7.6,.25,.25]],yp=new sa([new B(1.25,0,9.5),new B(.95,0,8.65),new B(1.25,0,8.05),new B(2.55,0,7.45),new B(3.02,0,7.05)]).getPoints(80),bp=yp.filter((e,t)=>t%7==0).map((e,t)=>[e.x+(t%2?.08:-.08),e.z]),xp=[[-.1,6.2],[3,8.65],[3.1,5.95]],Sp=(e,t,n)=>R.smoothstep(n,e,t),Cp=(e,t)=>Math.sin(e*2.8+Math.cos(t*1.9))*.25+Math.sin(t*5.7+e*.9)*.14+Math.cos(e*12.7-t*9.1)*.07,wp=(e,t)=>.254+Cp(e,t)*.027;function Tp(e,t){let n=10;for(let r of yp)n=Math.min(n,Math.hypot(e-r.x,t-r.z));let r=1-Sp(.09,.3,n),i=0;for(let[n,r,a,o]of vp)i=Math.max(i,1-Sp(.55,1.15,Math.hypot((e-n)/a,(t-r)/o)));let a=Math.min(e-mp,hp-e,t-gp,_p-t),o=1-Sp(.035,.15+Cp(e,t)*.07,a),s=0;for(let[n,r]of bp)s=Math.max(s,1-Sp(.5,1,Math.hypot((e-n)/.055,(t-r)/.12)));let c=0;for(let[n,r]of xp)c=Math.max(c,1-Sp(.08,.4,Math.hypot(e-n,t-r)));let l=(1-Sp(.2,.29,n))*Sp(.12,.2,n);return{wear:r,bare:i,border:o,foot:s,mound:c,ridge:l}}function Ep(e){let t=new Mn;t.name=`Garden lawn — continuous living turf`,e.add(t);let n=typeof matchMedia<`u`&&matchMedia(`(max-width: 700px)`).matches,r={uTime:{value:0},uRain:{value:0},uSnow:{value:0},uWind:{value:n?0:pp.WindSpeed},uHeight:{value:pp.GrassHeight},uDry:{value:pp.Dryness},uWear:{value:pp.WearMask},uClover:{value:pp.TrifoilDensity}},i=new V(`#A8B98F`),a=new V(`#8E9E7A`),o=new V(`#C9CFC0`),s=new V(`#B9A94E`),l=new V(`#6B5A4A`),u=new Uint8Array(1048576);for(let e=0;e<512;e++)for(let t=0;t<512;t++){let n=mp+t/511*9.7,r=gp+e/511*3.9699999999999998,i=Tp(n,r),a=(e*512+t)*4;u[a]=Math.round(i.wear*255),u[a+1]=Math.round(Math.max(i.bare,i.border)*255),u[a+2]=Math.round(R.clamp(.5+Cp(n,r),0,1)*255),u[a+3]=Math.round(i.foot*255)}let d=new si(u,512,512,E);d.minFilter=d.magFilter=c,d.needsUpdate=!0;let f=new Mo({color:16777215,roughness:.96,vertexColors:!0}),p=new Mo({color:16777215,roughness:.9,vertexColors:!0,side:2});function m(e,t){e.onBeforeCompile=e=>{Object.assign(e.uniforms,r,{uSplat:{value:d}}),e.vertexShader=`attribute vec4 lawnData;
varying vec4 vLawn;
varying vec3 vLawnPosition;
uniform float uTime,uRain,uSnow,uWind,uHeight;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
   vLawn=lawnData;vLawnPosition=position;
   ${t?`transformed.y+=uSnow*(.012+lawnData.z*.085+lawnData.w*.022);`:`float flex=lawnData.x;float snowBit=step(.5,lawnData.y);float tall=step(1.5,lawnData.y);
   float bend=(.018+uRain*.025+uSnow*.028)*flex*flex;
   float wave=sin(uTime*(2.5+uWind*4.)+position.x*2.1+position.z*3.3)*uWind*.045*flex*flex;
   transformed.x+=bend+wave;transformed.z+=bend+wave;
   transformed.y+=flex*(uHeight/.7-1.)*.07-uSnow*flex*.012;
   if(snowBit>.5&&tall<.5){transformed.y-=.3*(1.-uSnow);}
   `}`),e.fragmentShader=`varying vec4 vLawn;
varying vec3 vLawnPosition;
uniform sampler2D uSplat;
uniform float uRain,uSnow,uDry,uWear,uClover;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
   vec2 uvL=vec2((vLawnPosition.x-(${mp.toFixed(2)}))/${9.7.toFixed(2)},(vLawnPosition.z-${gp})/${3.9699999999999998.toFixed(2)});
   vec4 mask=texture2D(uSplat,uvL);float worn=mask.r*uWear;float soil=mask.g;
   float grit=fract(sin(dot(vLawnPosition.xz,vec2(129.81,243.73)))*43758.54);
   float lum=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(lum),uRain*.35)*(1.-uRain*.12);
   ${t?`diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.29,.27,.18),worn*.6);
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.147,.102,.068)*(1.-uRain*.3),soil*.82);
   vec3 snowCol=mix(vec3(.552,.624,.597),vec3(.738,.768,.753),mask.b);
   float cover=(.58+grit*.19)*(1.-worn*.47)*(1.-soil*.32);
   diffuseColor.rgb=mix(diffuseColor.rgb,snowCol*(1.-mask.a*.22),uSnow*cover);`:`if(vLawn.y>2.5&&vLawn.y<3.5&&vLawn.w>uClover)discard;
   if(vLawn.y<.5){diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.36,.34,.20),max(0.,uDry-.12)*.3);}
   if(vLawn.y>.5&&vLawn.y<1.5){if(uSnow<.05)discard;diffuseColor.rgb=mix(vec3(.552,.624,.597),vec3(.82,.85,.80),vLawn.z);}
   if(vLawn.y>1.5){diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.60,.67,.61),uSnow*.24);}`}
  `),e.fragmentShader=e.fragmentShader.replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
roughnessFactor=max(.4,roughnessFactor-uRain*(.18+worn*.32));`)},e.customProgramCacheKey=()=>t?`garden-lawn-ground-v1`:`garden-lawn-blades-v1`}m(f,!0),m(p,!1);let h=new _o(9.7,3.9699999999999998,160,68);h.rotateX(-Math.PI/2),h.translate(7/2,0,15.030000000000001/2);let g=h.attributes.position,_=[],v=[];for(let e=0;e<g.count;e++){let t=g.getX(e),n=g.getZ(e),r=Cp(t,n);g.setY(e,wp(t,n));let s=i.clone().lerp(r<0?a:o,Math.abs(r)*1.5).multiplyScalar(.48);_.push(s.r,s.g,s.b);let c=Tp(t,n);v.push(0,0,c.mound,c.ridge-c.foot*.4-c.bare*.45)}h.setAttribute(`color`,new Sr(_,3)),h.setAttribute(`lawnData`,new Sr(v,4)),h.computeVertexNormals();let y=new ii(h,f);y.name=`Continuous turf inside stone coping`,y.receiveShadow=!0,t.add(y);let b=[],x=[],S=[],C=4931,w=()=>(C=C*1664525+1013904223>>>0,C/4294967296);function T(e,t,n,r,i,a=0,o=.6,s=0){b.push(e,t,n),x.push(r.r,r.g,r.b),S.push(i,a,o,s)}function D(e,t,n,r,i,a=0,o=0){[e,t,n].forEach((e,t)=>T(e[0],e[1],e[2],r,i[t],a,t===1?.95:.3,o))}function O(e,t,n,r,i=1){let a=o,s=[[e+r,t,n],[e,t,n+r],[e-r,t,n],[e,t,n-r]];for(let o=0;o<4;o++)D(s[o],[e,t+r*.65,n],s[(o+1)%4],a,[i,i,i],1),D(s[(o+1)%4],[e,t-r*.5,n],s[o],a,[i,i,i],1)}let k=0,A=0,ee=0,te=0,ne=n?6500:18e3;for(let e=0;e<ne;e++){let t=-1.32+w()*(9.7-.06),n=5.5600000000000005+w()*3.9099999999999997,r=Tp(t,n);if(w()<Math.max(r.bare*.95,r.border*.92,r.wear*.8))continue;let c=wp(t,n),l=(.04+w()*.03)*(1-r.wear*.65),u=w()*Math.PI*2,d=.005+w()*.008,f=Math.cos(u)*d,p=Math.sin(u)*d,m=(w()<.08?s:w()<.22?a:i).clone().multiplyScalar(.52),h=m.clone().multiplyScalar(.8),g=m.clone().lerp(o.clone().multiplyScalar(.52),.2+w()*.2);D([t-f,c,n-p],[t+f,c,n+p],[t+.014+f*.55,c+l*.6,n+.014+p*.55],h,[0,0,.6]),D([t-f,c,n-p],[t+.014+f*.55,c+l*.6,n+.014+p*.55],[t+.014-f*.55,c+l*.6,n+.014-p*.55],m,[0,.6,.6]),D([t+.014-f*.55,c+l*.6,n+.014-p*.55],[t+.014+f*.55,c+l*.6,n+.014+p*.55],[t+.026,c+l,n+.026],g,[.6,.6,1]),k++,e%3==0&&l>.045&&(O(t+.026,c+l,n+.026,.004+w()*.0035),A++)}for(let e=0;e<135;e++){let t=vp[e%vp.length],n=w()*Math.PI*2,r=t[0]+Math.cos(n)*t[2]*(.85+w()*.5),o=t[1]+Math.sin(n)*t[3]*(.85+w()*.5);if(r<-1.27||r>8.27||o<5.61||o>9.42)continue;let c=wp(r,o),l=.12+w()*.06,u=e%3==0?s:a;if(D([r-.003,c,o],[r+.003,c,o],[r+.024,c+l,o-.018],u,[0,0,1],2),O(r+.024,c+l,o-.018,.005),ee++,e%2==0){for(let t=0;t<3;t++){let n=t*2.094,a=r+Math.cos(n)*.021,s=o+Math.sin(n)*.021;D([r,c+.025,o],[a-Math.sin(n)*.016,c+.032,s+Math.cos(n)*.016],[a+Math.cos(n)*.017,c+.027,s+Math.sin(n)*.017],i,[.2,.3,.3],3,e/135),D([r,c+.025,o],[a+Math.cos(n)*.017,c+.027,s+Math.sin(n)*.017],[a+Math.sin(n)*.016,c+.032,s-Math.cos(n)*.016],i,[.2,.3,.3],3,e/135)}te++}if(e%29==0)for(let e=0;e<7;e++){let t=e*.897;D([r+.024,c+l,o-.018],[r+.024+Math.cos(t)*.015,c+l+.004,o-.018+Math.sin(t)*.015],[r+.024+Math.cos(t+.8)*.015,c+l+.004,o-.018+Math.sin(t+.8)*.015],s,[1,1,1],2)}}for(let e=0;e<5;e++)for(let t=0;t<4;t++){let n=-1.3,r=6+e*.65+t*.018,i=.255;D([n,i,r-.004],[n,i,r+.004],[-1.4400000000000002,.23,r+.06],a,[0,0,0],2),D([-1.4400000000000002,.23,r+.06],[-1.433,.23,r+.064],[-1.455,.205,r+.08],a,[0,0,0],2)}for(let e=0;e<65;e++){let t=-1.33+w()*9.66,n=e%2?5.565+w()*.055:9.465-w()*.055,r=wp(t,n)+.003,i=w()*6.28,a=e%3?l:s.clone().multiplyScalar(.5),o=Math.cos(i)*.035,c=Math.sin(i)*.035;D([t-o,r,n-c],[t-c*.2,r+.002,n+o*.2],[t+o,r,n+c],a,[0,0,0],4),D([t-o,r,n-c],[t+o,r,n+c],[t+c*.2,r+.002,n-o*.2],a,[0,0,0],4)}let j=new Pr;j.setAttribute(`position`,new Sr(b,3)),j.setAttribute(`color`,new Sr(x,3)),j.setAttribute(`lawnData`,new Sr(S,4)),j.computeVertexNormals();let re=new ii(j,p);re.name=`Bent blades, clover, protruding stems and tip snow`,re.receiveShadow=!0,re.castShadow=!1,t.add(re);let M=`sun`;return{root:t,parameters:pp,update(e,t){M=t,r.uTime.value=e,r.uRain.value=+(t===`rain`),r.uSnow.value=+(t===`snow`),r.uWind.value=n?0:R.clamp(pp.WindSpeed,0,1),r.uHeight.value=R.clamp(pp.GrassHeight,.5,1.2)*(t===`snow`?.85:1),r.uDry.value=t===`snow`?Math.max(.6,pp.Dryness):pp.Dryness,r.uWear.value=R.clamp(pp.WearMask,0,1),r.uClover.value=R.clamp(pp.TrifoilDensity,0,1)},diagnostics:()=>({weather:M,visible:t.visible,drawCalls:2,alphaCards:0,blades:k,snowTipMeshes:A,tallStems:ee,clovers:te,footprints:bp.length,rootSnowMounds:xp.length,mobile:n,wind:r.uWind.value,snow:r.uSnow.value,rain:r.uRain.value,height:r.uHeight.value,dryness:r.uDry.value,wear:r.uWear.value,bounds:[mp,hp,gp,_p],terrainRange:[.24,.27],maskSize:[512,512],stoneCoping:!0,continuous:!0,parameters:{...pp}})}}function Dp(e){let t=G(e);t.name=`Seasonal strawberry runners and grape vines`;let n=G(t),r=G(t),i=G(t),a=G(t),o=G(t),s=W(12165243),c=W(7693647),l=W(9741436,.82),u=W(11779485,.85),d=W(12896424),f=W(12021081,.58),p=W(14071946),m=W(8548748,.5),h=W(11247791,.7),g=W(15328982),_=W(14541794,.94),v=new sa([U(5.1,.27,5.95),U(5.18,.76,5.95),U(5.58,1.3,5.95),U(6.35,1.44,5.96),U(7.1,1.36,5.93),U(7.7,1.52,5.95)]),y=(e,t,n,r)=>K(e,new xo(new sa(t),24,n,5,!1),r);for(let e of[5.1,6.4,7.7])q(n,.045,1.27,.045,e,.895,5.95,s),q(o,.055,.023,.055,e,1.54,5.95,_);for(let e of[.8,1.27])y(n,[U(5.1,e,5.95),U(6.4,e-.045,5.95),U(7.7,e,5.95)],.007,c);K(n,new xo(v,40,.016,7,!1),c);function b(e,t,n,r,i=!1){let a=G(e,t.x,t.y,t.z);a.rotation.set(.15,r,.18*Math.sin(r));let o=new Oa;(i?[[0,-1],[-.54,-.35],[-.85,-.4],[-.57,.1],[-1,.25],[-.5,.48],[-.45,.85],[0,.65],[.45,.85],[.5,.48],[1,.25],[.57,.1],[.85,-.4],[.54,-.35]]:[[0,-1],[-.5,-.4],[-.66,.15],[-.4,.75],[0,1],[.4,.75],[.66,.15],[.5,-.4]]).forEach(([e,t],r)=>r?o.lineTo(e*n,t*n):o.moveTo(e*n,t*n)),o.closePath();let s=new po(o,{depth:.004,bevelEnabled:!1,steps:1});s.rotateX(-Math.PI/2),K(a,s,l),Y(a,U(0,.007,-n*.85),U(0,.007,n*.8),.002,d,.001);for(let e of[-1,1])for(let t=0;t<3;t++)Y(a,U(0,.007,(-.4+t*.35)*n),U(e*n*.5,.007,(-.15+t*.35)*n),.0012,u,6e-4);return a}let x=[];for(let e=0;e<14;e++){let t=v.getPoint((e+.5)/15),a=e%2?1:-1,o=t.clone().add(U(a*.11,.11,a*.21));if(Y(n,t,o,.006,c,.002),b(r,o,.15+e%3*.018,e*.85,!0),e%2==0){let e=t.clone().add(U(.02,-.09,-.065));x.push(e),Y(n,t,e,.004,c,.002);for(let t=0;t<4;t++)for(let n=0;n<4-t;n++){let r=xd(i,.044,e.x+(n-(3-t)/2)*.068,e.y-t*.061,e.z+Math.sin(n*2.4+t)*.025,m);r.scale.y=1.12,n===0&&xd(i,.012,r.position.x-.018,r.position.y+.022,r.position.z+.032,h)}}if(e%3==0){let e=t.clone().add(U(.12,.16,.08));y(n,[t,...Array.from({length:18},(t,n)=>e.clone().add(U(Math.cos(n*.4)*(.03-n*.001),n*.004,Math.sin(n*.4)*.03)))],.0025,c)}}function S(e,t,n=1){let r=G(e,t.x,t.y,t.z);r.scale.setScalar(n),K(r,new go([new z(0,-.047),new z(.024,-.03),new z(.045,.008),new z(.04,.035),new z(.022,.044),new z(0,.042)],10),f);for(let e=0;e<12;e++){let t=e*2.4,n=-.022+e%3*.021,i=n<0?.028:.041,a=xd(r,.003,Math.cos(t)*i,n,Math.sin(t)*i,p);a.scale.y=1.4}for(let e=0;e<5;e++){let t=e*Math.PI*.4,n=xd(r,.018,Math.cos(t)*.019,.046,Math.sin(t)*.019,l);n.scale.set(.55,.16,1.25),n.rotation.y=-t}Y(r,U(0,.044,0),U(.005,.072,.003),.0025,l,.001)}let C=[[4.55,6.6],[5.1,7.2],[5.75,7.8],[6.42,7.82],[7.1,7.65]];for(let[e,[t,r]]of C.entries()){let s=U(t,.29,r);for(let t=0;t<5;t++){let r=t*1.26+e,l=s.clone().add(U(Math.cos(r)*.17,.055+Math.sin(t)*.012,Math.sin(r)*.14));Y(n,s,l,.003,c,.0015);for(let e=0;e<3;e++){let t=r+(e-1)*.62,n=l.clone().add(U(Math.cos(t)*.065,0,Math.sin(t)*.065));b(a,n,.073,t),xd(o,.025,n.x,n.y+.01,n.z,_).scale.set(1,.25,.8)}t%2==0&&S(i,l.clone().add(U(.02,-.02,.035)),.95)}y(n,[s,s.clone().add(U(.17,-.005,.18)),s.clone().add(U(.35,.005,.13))],.003,c);let l=s.clone().add(U(-.06,.12,0));xd(i,.011,l.x,l.y,l.z,p);for(let e=0;e<5;e++){let t=e*1.256,n=xd(i,.016,l.x+Math.cos(t)*.016,l.y,l.z+Math.sin(t)*.016,g);n.scale.y=.25}}let w=[U(4.9,.344,6.85),U(5.63,.343,7.38),U(6.77,.342,8.12)];for(let[e,t]of w.entries()){S(i,t,.85);for(let n=0;n<2;n++)xd(i,.032,t.x+.15+n*.06,.33,t.z+.08-e*.03,m)}for(let e of[n,r,i,a,o])Sd(e),e.traverse(e=>{e instanceof ii&&(e.castShadow=!0)});let T=`sun`;return o.visible=!1,{update(e,t){let n=e?`snow`:t?`rain`:`sun`;n!==T&&(T=n,r.visible=i.visible=!e,o.visible=e,l.color.setHex(e?9344640:t?8622199:9741436),l.roughness=t?.63:.82)},diagnostics:()=>({weather:T,strawberryPlants:C.length,grapeBunches:x.length,fallenStrawberries:w.length,fallenGrapes:w.length*2,ripeFruitVisible:i.visible,winterDormant:!r.visible,localBounds:{x:[4.2,7.95],z:[5.5,8.2]}})}}var Op=[[-1.45,5.43],[8.45,5.43],[8.45,9.6],[-1.45,9.6]],kp=Op.map(([e,t])=>[t-14.3,3.95-e]),Ap=.26,jp=W(15722196),Mp=W(11057551,.7),Np=W(13225920,.7),Pp=W(12170924),Fp=W(15780264,.7),Ip=W(7035466),Lp=W(5326392),Rp=W(11764321,.88),zp=W(9148803),Bp=W(10656431),Vp=W(15526360),Hp=W(3422768),Up=W(15265264,.9),Wp=W(16775657),Gp=W(14262412);Gp.transparent=!0,Gp.opacity=.4;var Kp=1487,qp=()=>(Kp=Kp*1664525+1013904223>>>0,Kp/4294967296);function Jp(e,t,n,r,i,a,o,s){let c=K(e,new yo(1,14,10),s,t,n,r);return c.scale.set(i,a,o),c}function Yp(e,t,n,r,i,a,o,s,c=.012){return K(e,new Id(t,n,r,2,Math.min(c,t/3,n/3,r/3)),s,i,a,o)}function Xp(e,t,n,r){return K(e,new xo(new sa(t),20,n,5,!1),r)}function Zp(e,t,n,r,i,a,o){let s=K(e,new bo(t,n,6,24),o,r,i,a);return s.rotation.x=Math.PI/2,s}function Qp(e,t,n,r,i){let a=new Oa;t.forEach(([e,t],n)=>n?a.lineTo(e,-t):a.moveTo(e,-t)),a.closePath();let o=new po(a,{depth:r,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.003,bevelThickness:.003});return o.rotateX(-Math.PI/2),K(e,o,i,0,n-r,0)}function $p(e,t,n,r=.16){let i=G(e,t.x,t.y,t.z);i.rotation.set(.2+Math.sin(n)*.5,n,-.45),Jp(i,0,0,0,r*.4,.009,r,Mp),Jp(i,0,-.009,0,r*.39,.005,r*.98,Np),Y(i,U(0,.008,-r*.8),U(0,.008,r*.8),.0025,Np,.001)}function em(e,t,n,r=1){Xp(e,[t,t.clone().lerp(n,.55).add(U(.08*r,0,.04*r)),n],.008*r,Ip);for(let i=1;i<7;i++){let a=t.clone().lerp(n,i/7);a.x+=Math.sin(i/7*Math.PI)*.08*r;for(let t of[-1,1]){let n=U(t*.065*r,.014,Math.sin(i)*.04*r);Y(e,a,a.clone().add(n),.003*r,Ip,.001),$p(e,a.clone().add(n),t*(.9+i*.12),.13*r)}}}function tm(e,t,n,r,i=Ap,a=!1){let o=G(e,t,i,n),s=r/2,c=r*.85;a&&(o.rotation.x=Math.PI,o.position.y+=c),J(o,s,s*.69,c,0,c/2,0,Rp),Zp(o,s,.018,0,c-.015,0,Rp),J(o,s*.88,s*.88,.012,0,c+.002,0,Lp);for(let e=0;e<8;e++){let t=e*.78;Jp(o,Math.cos(t)*s,c-.023,Math.sin(t)*s,.027,.008,.009,jp),e%2==0&&Y(o,U(Math.cos(t)*s*.95,c-.04,Math.sin(t)*s*.95),U(Math.cos(t)*s*.88,c*.55,Math.sin(t)*s*.88),.003,Ip)}return{g:o,h:c}}function nm(e,t,n,r){Jp(e,t,n,r,.012,.009,.012,Q.brass);for(let i=0;i<6;i++){let a=i*Math.PI/3;Jp(e,t+Math.cos(a)*.02,n,r+Math.sin(a)*.02,.015,.007,.009,Vp)}}function rm(e,t,n,r,i,a=Lp){Jp(e,t,.265,n,r,.014,i,a)}function im(e){let t=G(e,1.3,Ap,7.5);t.name=`Tang Yi — eucalyptus gardener`,t.rotation.y=-.35,t.userData.dynamic=!0;let n=G(t,0,.46,0);n.rotation.x=.20944,Yp(n,.38,.4,.26,0,.21,0,Mp,.08),Yp(n,.34,.39,.028,0,.17,.145,jp,.025),Yp(n,.19,.12,.025,0,.16,.17,jp,.012),q(n,.09,.11,.012,.025,.245,.171,Q.wood);for(let e of[-1,1])Xp(n,[U(e*.14,.39,.13),U(e*.15,.44,-.01),U(-e*.13,.08,-.145)],.019,jp),Y(n,U(e*.17,.38,.14),U(e*.12,.25,.16),.012,jp);let r=G(n,0,.62,.025);Jp(r,0,0,0,.265,.275,.225,Pp),Jp(r,0,-.008,.065,.227,.234,.203,Fp);for(let e=0;e<13;e++){let t=.4+e/12*(Math.PI*2-.8),n=Math.sin(t)*.23,i=Math.cos(t)*.17;Jp(r,n,-.025,i,.065,.235,.075,Pp),Xp(r,[U(n*.85,.19,i),U(n*1.08,-.05,i+.018),U(n*.88,-.22,i+.05)],.005,Np)}for(let e of[-1,1]){Jp(r,e*.205,-.035,.075,.034,.057,.029,Fp),Jp(r,e*.08,.006,.272,.015,.021,.01,Hp),Jp(r,e*.08-.004,.015,.281,.0045,.006,.003,Wp);for(let t=0;t<2;t++)Y(r,U(e*(.114+t*.025),-.07,.234),U(e*(.131+t*.025),-.065,.235),.005,Gp,.004);Xp(r,[U(e*.19,.13,.15),U(e*.205,-.015,.17),U(e*.19,-.13,.19)],.008,Pp)}Xp(r,[U(-.033,-.115,.25),U(0,-.127,.255),U(.033,-.112,.25)],.0035,Ip);let i=W(7035466);i.transparent=!0,i.opacity=.3;for(let e of[-1,1])Y(r,U(e*.112,.02,.238),U(e*.13,.028,.23),.0015,i);Y(r,U(-.025,.125,.23),U(.025,.13,.229),.0015,i),Yp(r,.08,.021,.017,.205,.104,.177,Ip,.005).rotation.z=.45;let a=G(r,0,.235,0),o=J(a,.37,.38,.028,0,0,0,jp);o.scale.z=.9,Jp(a,0,.067,0,.245,.11,.217,jp),Zp(a,.238,.018,0,.051,0,Mp).scale.z=.9;for(let e=0;e<9;e++)Zp(a,.246+e*.014,.002,0,-.006-e*.001,0,Q.lightWood).scale.z=.9;Xp(a,[U(-.11,.145,-.025),U(0,.13,-.02),U(.11,.145,-.025)],.006,Q.lightWood),Jp(a,.24,.065,.02,.029,.018,.025,Mp);for(let e of[-1,1]){let t=Jp(a,.245,.064,.02+e*.043,.012,.027,.046,Mp);t.rotation.x=e*.45}Xp(a,[U(.24,.06,.02),U(.27,-.01,.07),U(.28,-.075,.09)],.012,Mp);let s=G(n,-.21,.36,.02),c=G(n,.21,.36,.02);for(let[e,t]of[[s,-1],[c,1]])Y(e,U(0,0,0),U(t*.04,-.16,.03),.066,Mp,.06),Zp(e,.063,.012,t*.04,-.13,.025,jp),Y(e,U(t*.04,-.16,.03),U(t*.065,-.27,.055),.05,Fp,.045),Jp(e,t*.065,-.285,.06,.055,.06,.052,Fp);s.rotation.set(-.85,0,-.18),c.rotation.set(-.12,0,-.1);let l=G(t,-.105,.45,0),u=G(t,.105,.45,0);for(let[e,t]of[[l,-1],[u,1]])J(e,.07,.063,.32,0,-.16,0,jp),Yp(e,.15,.105,.23,0,-.397,.035,Ip,.04).rotation.y=t*.16;let d=G(c,.085,-.48,.07);J(d,.14,.1,.19,0,0,0,Q.lightWood),J(d,.124,.124,.012,0,.097,0,Lp);for(let e=0;e<9;e++)Zp(d,.104+e*.004,.006,0,-.085+e*.021,0,Q.wood);for(let e=0;e<18;e++){let t=e*Math.PI/9;Y(d,U(Math.cos(t)*.1,-.09,Math.sin(t)*.1),U(Math.cos(t)*.14,.1,Math.sin(t)*.14),.005,Q.darkWood)}Xp(d,[U(-.13,.08,0),U(-.1,.25,0),U(.1,.25,0),U(.13,.08,0)],.012,Q.wood);for(let e=0;e<3;e++)em(d,U(-.07+e*.06,.06,0),U(-.1+e*.1,.36+e*.025,.02),.5);for(let e=0;e<4;e++)Y(d,U(.05,.07,0),U(.05+e*.02,.22+e*.022,.1),.003,zp),nm(d,.05+e*.02,.22+e*.022,.1);[n,l,u].forEach(e=>{e.traverse(e=>{e instanceof ii&&(e.castShadow=!0)})});for(let e of[r,s,c,l,u])Sd(e);return t.traverse(e=>{e instanceof ii&&(e.castShadow=!0)}),{root:t,head:r,armL:s,armR:c,legL:l,legR:u,role:`garden-tang`,phase:1,base:t.position.clone()}}function am(e,t){let n=G(e);n.name=`Left courtyard garden extension`;let r=G(n),i=G(n),a=G(n);Qp(r,Op,.18,.6,Q.stone),Qp(r,Op,.225,.045,Q.tile);for(let e=0;e<Op.length;e++){let[t,n]=Op[e],[i,a]=Op[(e+1)%Op.length],o=Math.hypot(i-t,a-n),s=Math.ceil(o/.8);for(let e=0;e<s;e++)for(let c=0;c<2;c++){let l=(e+.5)/s,u=Yp(r,o/s-.018,.265,.075,t+(i-t)*l,-.22+c*.29,n+(a-n)*l,Q.stone,.003);u.rotation.y=-Math.atan2(a-n,i-t)}}let o=Ep(n),s=Dp(n);for(let e=0;e<2520;e++)qp();let c=[{x:-.1,z:6.2,h:1.65,pot:0},{x:3,z:8.65,h:1.85,pot:0},{x:3.1,z:5.95,h:1.5,pot:0},{x:5.75,z:6.65,h:1.45,pot:.3},{x:-.95,z:7.6,h:1.7,pot:.45}];for(let[e,t]of c.entries()){let n=G(r,t.x,Ap,t.z),i=t.pot?tm(n,0,0,t.pot,0).h:0;rm(r,t.x,t.z,t.pot?.17:.35,t.pot?.17:.3);for(let r=0;r<4;r++){let a=r*2.1+e,o=U(Math.cos(a)*.29,i+t.h,Math.sin(a)*.25);em(n,U(0,i,0),o,1.2);for(let e=0;e<3;e++){let t=o.clone().multiplyScalar(.35+e*.17);t.y+=i*.3,em(n,t,t.clone().add(U(Math.cos(a+e)*.22,.27,Math.sin(a+e)*.22)),.7)}}if(t.pot)for(let e=0;e<4;e++){let r=e*1.57,i=q(n,.06,.012,.04,Math.cos(r)*t.pot*.48,.015,Math.sin(r)*t.pot*.48,Rp);i.rotation.y=r}}for(let e=0;e<22;e++){let t=e<12?-.25+qp()*.3:2.7+qp()*.55,n=e<12?5.9+qp()*2.4:7.65+qp()*1.45;for(let i=0;i<6;i++){let i=t+(qp()-.5)*.2,a=n+(qp()-.5)*.2,o=.2+qp()*.15;Y(r,U(i,Ap,a),U(i+.025,Ap+o,a),.004,zp,.002);for(let e=0;e<3;e++)Jp(r,i-.015+e*.015,Ap+o*(.4+e*.2),a,.04,.01,.018,zp);e%3==0?Jp(r,i,Ap+o,a,.022,.045,.02,Bp):e%3==1&&nm(r,i,Ap+o,a)}}for(let[e,t]of[[6.55,5.95],[1.5,9.13]]){let n=G(r,e,Ap,t);Yp(n,1.05,.26,.35,0,.16,0,Rp),q(n,.94,.02,.29,0,.3,0,Lp);for(let e of[-.52,.52])q(n,.045,.34,.4,e,.17,0,Q.wood);for(let e of[-.19,.19])q(n,1.08,.07,.035,0,.3,e,Q.lightWood),q(n,1.08,.07,.035,0,.08,e,Q.lightWood);for(let e=0;e<8;e++){let t=-.4+e*.11;Y(n,U(t,.3,0),U(t,.5,0),.005,zp),$p(n,U(t,.43,0),e,.075)}}let l=G(r,3.02,Ap,7.05);Yp(l,.6,.045,.4,0,.68,0,Q.lightWood,.012);for(let e of[-.24,.24])for(let t of[-.14,.14])Y(l,U(e,.65,t),U(e,.015,t),.024,Q.wood);let u=G(l,-.13,.705,.015);J(u,.075,.085,.15,0,.075,0,Q.brass),Zp(u,.07,.009,0,.15,0,Q.brass),Xp(u,[U(.06,.1,0),U(.17,.11,0),U(.23,.24,0)],.012,Q.brass),Xp(u,[U(-.07,.13,0),U(-.14,.17,0),U(-.15,.02,0),U(-.08,.02,0)],.01,Q.brass);let d=G(l,.1,.705,-.12);q(d,.24,.04,.07,0,.02,0,Q.wood);for(let e=0;e<3;e++){let t=q(d,.066,.13,.01,-.075+e*.075,.085,0,jp);t.rotation.z=(e-1)*.08,$p(d,U(-.075+e*.075,.1,.009),0,.018)}tm(l,.2,.1,.1,.705);for(let e=0;e<6;e++)Jp(l,.2+Math.sin(e)*.03,.81,.1+Math.cos(e)*.03,.025,.025,.012,Mp);for(let e of[-1,1])Zp(l,.022,.004,e*.028,.712,.11,Q.brassDark),Y(l,U(e*.026,.716,.09),U(-e*.018,.716,-.01),.004,Q.frameEdge);for(let[e,t]of[[-.38,0],[.38,1]]){let n=G(l,e,.03,.12);if(n.rotation.z=e<0?-.25:.25,Y(n,U(0,.12,0),U(0,.81,0),.012,Q.wood),t){q(n,.16,.025,.03,0,.12,0,Q.frame);for(let e=0;e<5;e++)Y(n,U(-.07+e*.035,.12,0),U(-.07+e*.035,.02,.03),.006,Q.frame)}else Jp(n,0,.09,0,.065,.09,.012,Q.frame),Zp(n,.04,.008,0,.81,0,Q.wood).rotation.x=0}rm(r,2.5,7.22,.16,.13),tm(r,2.5,7.6,.24,Ap,!0);let f=G(r,1.87,Ap,7.72),p=W(12423529),m=W(15524819);Jp(f,0,.105,0,.21,.105,.135,p),Jp(f,-.12,.21,.04,.105,.1,.092,m);for(let e of[-.18,-.07]){let t=K(f,new Zi(.041,.085,4),p,e,.306,.01);t.rotation.z=e<-.1?.2:-.2}for(let e of[-.153,-.09])Jp(f,e,.22,.124,.009,.009,.004,Q.greenDark);Xp(f,[U(.17,.1,-.05),U(.23,.05,.1),U(.05,.04,.17),U(-.1,.04,.13)],.035,p);for(let e=0;e<3;e++)Xp(f,[U(-.025+e*.07,.2,-.06),U(-.015+e*.07,.21,0),U(e*.07,.18,.075)],.012,Ip);Zp(f,.075,.009,-.12,.14,.04,Mp),Jp(f,-.12,.13,.13,.013,.016,.013,Q.brass),tm(r,.8,7.85,.21,Ap,!0),J(G(r,6.9,Ap,6.9),.035,.045,1.8,0,.9,0,Q.wood);let h=W(6903366,.6,.5),g=new Mo({color:16771252,emissive:16765074,emissiveIntensity:4.5,roughness:.5}),_=[];for(let e=0;e<=70;e++){let t=e*.54,n=.18+e/70*1.55;_.push(U(6.9+Math.cos(t)*.055,Ap+n,6.9+Math.sin(t)*.055)),e%3==0&&Jp(a,_[e].x,_[e].y,_[e].z,.008,.008,.008,e%7==0?jp:g)}Xp(r,_,.002,h);let v=new sa([U(6.9,2.02,6.9),U(5.6,1.6,6.98),U(4.2,1.96,7.15)]);Xp(r,v.getPoints(30),.002,h);for(let e=0;e<32;e++){let t=v.getPoint(e/31);Jp(a,t.x,t.y,t.z,.008,.008,.008,e%7==0?jp:g)}Y(r,U(4.2,Ap,7.15),U(4.2,1.96,7.15),.025,Q.wood);let y=G(r,.05,Ap,5.65);J(y,.06,.075,.32,0,.16,0,Q.brass),J(y,.055,.055,.12,0,.37,0,W(15066840,.5)),J(y,.074,.074,.025,0,.44,0,Q.brass);for(let e of c)e.pot&&Zp(i,e.pot/2,.018,e.x,Ap+e.pot*.85+.016,e.z,Up);t.actors[2].root.removeFromParent();let b=im(n);t.actors[2]=b,b.root.updateWorldMatrix(!0,!0);let x=b.armL.localToWorld(U(-.065,-.285,.06));em(r,U(.67,Ap,7.23),x,.9);for(let e of[r,i,a])Sd(e),e.traverse(e=>{e instanceof ii&&(e.castShadow=!0)});i.visible=!1,a.visible=!1,n.rotation.y=Math.PI/2,n.position.set(-14.3,0,3.95),n.updateWorldMatrix(!0,!0);let S=new tr().setFromObject(n),C=U(0,0,0);return{root:n,actor:b,outline:kp,bounds:S,labelAnchor:C,update(e,t,n,r=!1){o.update(e,t?`snow`:r?`rain`:`sun`),s.update(t,r),i.visible=t,a.visible=t||n,b.head.rotation.y=Math.sin(e*.27)*.035,b.head.rotation.z=Math.sin(e*.35)*.018,b.root.updateWorldMatrix(!0,!0),b.head.getWorldPosition(C),C.y+=.89},diagnostics:()=>({side:`building-left-negative-x`,lawn:o.diagnostics(),fruit:s.diagnostics(),outline:kp,combinedFootprint:[[-8.87,-4.5],[5.6,-4.5],[5.6,5.4],[-8.87,5.4]],joinWidth:0,plantCount:c.length,groundPlants:3,pottedPlants:2,position:b.root.getWorldPosition(U(0,0,0)).toArray(),height:new tr().setFromObject(b.root).getSize(U(0,0,0)).y,winter:i.visible,bounds:{min:S.min.toArray(),max:S.max.toArray()}})}}var om=class{camera;enabled=!1;enableDamping=!0;target=new B;seated=!1;seatIndex=-1;eye=new B;yaw=0;pitch=0;yawGoal=0;pitchGoal=0;pointers=new Map;constructor(e,t){this.camera=e,t.addEventListener(`pointerdown`,e=>{this.enabled&&e.button===0&&(this.pointers.set(e.pointerId,new z(e.clientX,e.clientY)),t.setPointerCapture(e.pointerId))}),t.addEventListener(`pointermove`,e=>{let t=this.pointers.get(e.pointerId);t&&(this.enabled&&this.pointers.size===1&&(this.yawGoal-=(e.clientX-t.x)*.004,this.pitchGoal=R.clamp(this.pitchGoal+(e.clientY-t.y)*.003,-Math.PI/3,Math.PI/3)),t.set(e.clientX,e.clientY))});for(let e of[`pointerup`,`pointercancel`,`lostpointercapture`])t.addEventListener(e,e=>this.pointers.delete(e.pointerId));this.stand()}place(e,t=0){this.seated=e,this.seatIndex=e?t:-1,this.pointers.clear(),this.eye.set(...e?[[-1.38,1.95,.55],[-.12,1.95,.55],[-1.68,1.95,-1.45]][t]:[-1.1,2.4,2.06]),this.camera.position.copy(this.eye);let n=(e?new B(t===2?-1.05:-.75,2.05,t===2?-1.45:.55):new B(.15,1.55,-.65)).sub(this.eye);this.yaw=this.yawGoal=Math.atan2(n.x,n.z),this.pitch=this.pitchGoal=Math.atan2(n.y,Math.hypot(n.x,n.z)),this.camera.zoom=e?1:.5,this.camera.updateProjectionMatrix(),this.update()}stand(){this.place(!1)}sit(e=0){this.place(!0,Math.max(0,Math.min(2,e)))}update(){let e=this.enableDamping?.16:1;this.yaw+=(this.yawGoal-this.yaw)*e,this.pitch+=(this.pitchGoal-this.pitch)*e,this.camera.position.copy(this.eye),this.target.copy(this.eye).add(new B(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch))),this.camera.lookAt(this.target)}};function sm(e){let t=new Mn;e.add(t),t.visible=!1;let n=new Float32Array(3900),r=Array.from({length:650},()=>({x:(Math.random()-.5)*13,z:(Math.random()-.5)*13,y:Math.random()*9})),i=new Pr;i.setAttribute(`position`,new yr(n,3));let a=new Fi(i,new Ci({color:13490655,transparent:!0,opacity:.4,depthWrite:!1}));a.frustumCulled=!1,t.add(a);let o=new gi(new yo(.016,6,5),new No({color:14477533,roughness:.05,metalness:.35,transparent:!0,opacity:.58}),170),s=new jn;for(let e=0;e<170;e++){let t=(Math.random()-.5)*5.4,n=-2.5+Math.random()*4.4;s.position.set(t,4.59-Math.abs(t)*.5,n),s.scale.set(.8,Math.random()*1.3+.6,1.7),s.updateMatrix(),o.setMatrixAt(e,s.matrix)}t.add(o);let c=new Kr({color:14542302,transparent:!0,opacity:.3,depthWrite:!1}),l=[];for(let e=0;e<25;e++){let e=(Math.random()-.5)*8.2,n=(Math.random()-.5)*8.2;Math.abs(e)<2.9&&n<2.2&&n>-2.8&&(e=(e>0?1:-1)*3.4);let r=new ii(new Yi(.18+Math.random()*.25,24),new Mo({color:10991022,roughness:.1,metalness:.7,transparent:!0,opacity:.45}));r.rotation.x=-Math.PI/2,r.position.set(e,.26,n),r.scale.x=1.5,t.add(r);let i=new ii(new vo(.095,.102,24),c);i.rotation.x=-Math.PI/2,i.position.set(e,.265,n),t.add(i),l.push(i)}let u=0,d=new V(13222580),f=new V(11054758),p=new V(11057551),m=new V(8887948);return{group:t,get wet(){return u},update(e,s,c){u=R.damp(u,+!!c,3,e),t.visible=u>.01,a.material.opacity=.38*u,o.visible=u>.2;for(let e=0;e<650;e++){let t=r[e],i=(t.y-s*5.2%9+9)%9,a=i<(Math.abs(t.x)<2.8&&t.z<2&&t.z>-2.7?4.6-Math.abs(t.x)*.5:.25)?i+4.7:i;n.set([t.x,a,t.z,t.x-.07,a+.27,t.z+.015],e*6)}i.attributes.position.needsUpdate=!0,l.forEach((e,t)=>e.scale.setScalar((s*.6+t/25)%1*2+.15)),Q.stone.color.copy(d).lerp(f,u),Q.tile.color.copy(d).lerp(f,u),Q.stone.roughness=.85-.35*u,Q.tile.roughness=.85-.35*u,Q.green.color.copy(p).lerp(m,u)}}}var cm=[.35,2.8],lm=[U(-1.1,0,3.6),U(-.3,0,4.65),U(4.75,0,4.65),U(4.75,0,.35)],um=[],dm=.3,fm=0;for(let e=0;e<lm.length-1;e++){let t=lm[e],n=lm[e+1],r=n.clone().sub(t).normalize(),i=t.distanceTo(n),a=U(r.z,0,-r.x);for(;dm<i;dm+=.6,fm++)for(let e of[!1,!0]){let n=t.clone().addScaledVector(r,dm).addScaledVector(a,(e?-.14:.14)+(fm%2?.055:-.055));um.push({x:n.x,z:n.z,yaw:Math.atan2(r.x,r.z)+(e?Math.PI:0)})}dm-=i}for(let e of cm)for(let t of[4.65,4.05])for(let n of[!1,!0])um.push({x:t,z:e+(n?-.14:.14),yaw:n?Math.PI/2:-Math.PI/2});function pm(e,t){return cm.some(n=>Math.hypot(e-3.55,t-n)<.8)}function mm(e,t){return um.some(n=>{let r=e-n.x,i=t-n.z,a=r*Math.cos(n.yaw)-i*Math.sin(n.yaw),o=r*Math.sin(n.yaw)+i*Math.cos(n.yaw);return a*a/.0064+o*o/.0196<1})?.025:0}function hm(e,t,n,r){let i=G(e),a=G(i),o=G(i),s=G(i),c=G(i),l=W(4873535,.45,.25),u=W(5327939,.72,.4),d=W(13150332,.6),f=W(11968893),p=W(15722972),m=W(11631183,.3,.7),h=W(11107680,.86),g=W(15261641,.83),_=W(7885113),v=W(15261641,.91),y=W(11057551,.91),b=v.clone();b.color.multiplyScalar(.92),b.roughness=.95;let x=y.clone();x.color.multiplyScalar(.92),x.roughness=.95;let S=new No({color:13820887,roughness:.12,metalness:.08,transparent:!0,opacity:.62,depthWrite:!1}),C=new No({color:14871520,roughness:.16,metalness:.05,transparent:!0,opacity:.17,depthWrite:!1,side:2}),w=new Kr({color:15853527,transparent:!0,opacity:.16,depthWrite:!1}),T=[],E=0,D=1,O=0,k=[],A=[];function ee(e,t,r=()=>!0,i=()=>1){e.updateWorldMatrix(!0,!0),a.updateWorldMatrix(!0,!1);let o=a.matrixWorld.clone().invert(),s=e.matrixWorld.clone().invert(),c=[],l=new Map;e.traverse(e=>{if(!(e instanceof ii))return;let n=e.geometry.index?e.geometry.toNonIndexed():e.geometry,a=n.getAttribute(`position`);for(let n=0;n<a.count;n+=3){let u=U(0,0,0).fromBufferAttribute(a,n).applyMatrix4(e.matrixWorld),d=U(0,0,0).fromBufferAttribute(a,n+1).applyMatrix4(e.matrixWorld),f=U(0,0,0).fromBufferAttribute(a,n+2).applyMatrix4(e.matrixWorld),p=d.clone().sub(u).cross(f.clone().sub(u)).normalize(),m=u.clone().add(d).add(f).multiplyScalar(1/3).clone().applyMatrix4(s);if(p.y<=.6||!r(m))continue;let h=t*R.smoothstep(p.y,.6,.6+Math.sin(Math.PI/12))*i(m);if(h<.001)continue;D=Math.min(D,p.y),E++;let g=[u,d,f].map(e=>e.clone().add(U(0,h,0)));for(let e of g)c.push(...e.clone().applyMatrix4(o).toArray());let _=[u,d,f];for(let e=0;e<3;e++){let t=(e+1)%3,n=[_[e],_[t]].map(e=>e.toArray().map(e=>e.toFixed(5)).join(`,`)).sort().join(`|`),r=l.get(n);r?r.count++:l.set(n,{a:_[e],b:_[t],at:g[e],bt:g[t],count:1})}}n!==e.geometry&&n.dispose()});for(let e of l.values())if(e.count===1)for(let t of[e.a,e.b,e.bt,e.a,e.bt,e.at])c.push(...t.clone().applyMatrix4(o).toArray());let u=new Pr;return u.setAttribute(`position`,new Sr(c,3)),u.computeVertexNormals(),K(a,u,n)}function te(e,t,n,r){return K(e,new xo(new sa(t),24,n,6,!1),r)}function ne(e,t,n,r,i){let a=.1*(1+.3*Math.sin(i*2.713));J(e,.009,.001,a,t,n-a/2,r,S);let o=J(e,.002,5e-4,a*.85,t-.003,n-a*.45,r+.002,S);o.rotation.z=.03,O++}function j(e,t,n,r){let i=G(e,t,n,r);T.push(i);for(let e=0;e<7;e++)xd(i,.017,0,0,0,w);return i}function re(e,t,n,r){let i=G(e,t,n,r);return K(i,new go([new z(.039,0),new z(.053,.092),new z(.045,.094),new z(.032,.012),new z(0,.012),new z(0,0)],20),g),K(i,new bo(.025,.008,7,16),g,.064,.053,0),i}for(let e of[0,3]){let n=t.patioChairs[e].clone(!0);o.add(n),A.push(n),ee(J(n,.265,.27,.095,0,.635,0,e===0?v:y),.055,e=>!(e.x<-.1&&e.z<-.08)),K(n,new Xi(.265,.265,.002,24,1,!1,Math.PI*.95,Math.PI*.28),e===0?b:x,0,.684,0).scale.set(.95,1,.95),ee(n,.025,e=>e.y>.93);let i=G(r);i.position.copy(n.position),i.quaternion.copy(n.quaternion);let a=[],s=[];for(let e=0;e<=24;e++)for(let t=0;t<=36;t++){let n=-.25+e/24*.5,r=t/36,i=Math.sin(e/24*Math.PI*8)*.014,o,s;if(r<.22)o=.69+i,s=.12-r/.22*.28;else if(r<.48){let e=(r-.22)/.26;o=.69+e*.36,s=-.16-e*.13+i}else if(r<.6){let e=(r-.48)/.12;o=1.05+Math.sin(e*Math.PI)*.02+i,s=-.29-e*.05}else{let e=(r-.6)/.4;o=1.05-e*.65,s=-.34-e*.035+i}a.push(n,o+Math.sin(e/24*12)*.008,s)}for(let e=0;e<24;e++)for(let t=0;t<36;t++){let n=e*37+t,r=(e+1)*37+t;s.push(n,r,n+1,r,r+1,n+1)}let c=new Pr;c.setAttribute(`position`,new Sr(a,3)),c.setIndex(s),c.computeVertexNormals();let l=(e===0?v:y).clone();l.side=2;let u=ee(K(i,c,l),.018,()=>!0,e=>.25+.75*(.5-.5*Math.sin((e.x+.25)/.5*Math.PI*8)));r.attach(u);for(let t=0;t<14;t++)Y(i,U(-.23+t*.035,.4,-.375),U(-.23+t*.035,.35-Math.sin(t)*.012,-.38),.0035,e===0?v:y)}for(let e of cm){let t=G(s,3.55,1.17,e),r=new Oa;r.absarc(0,0,.44,0,Math.PI*2,!1);for(let e of[{x:.23,z:-.225,r:.11},{x:.18,z:0,r:.075},{x:.17,z:.24,r:.11},{x:.015,z:.37,r:.045}]){let t=new Da;t.absarc(e.x,-e.z,e.r,0,Math.PI*2,!0),r.holes.push(t)}let i=K(t,new po(r,{depth:.06,bevelEnabled:!1,curveSegments:32}),n);i.rotation.x=-Math.PI/2;let a=G(t,.23,.005,-.225);K(a,new go([new z(.05,0),new z(.075,.035),new z(.085,.12),new z(.06,.21),new z(.052,.215)],24),m);let o=G(a,0,.218,0);o.rotation.z=.18,J(o,.066,.066,.014,0,0,0,m),xd(o,.015,0,.018,0,m),te(a,[U(.055,.04,0),U(.105,.08,0),U(.13,.19,0),U(.16,.21,0)],.012,m),te(a,[U(-.06,.17,0),U(-.12,.16,0),U(-.12,.05,0),U(-.06,.04,0)],.01,u),j(a,.16,.22,0);for(let e=0;e<3;e++){let n=re(t,.18,.005+e*.047,0);n.rotation.y=e*.35}J(t,.1,.095,.018,.17,.012,.24,d);for(let e=0;e<4;e++){let n=.17+Math.cos(e*1.7)*.046,r=.24+Math.sin(e*1.7)*.046,i=J(t,.028,.029,.014,n,.029+e*.007,r,d);i.rotation.y=e;for(let i=0;i<3;i++)xd(t,.003,n+Math.cos(i*2.1)*.014,.038+e*.007,r+Math.sin(i*2.1)*.014,_)}let c=G(t,.015,.005,.37);J(c,.03,.032,.085,0,.044,0,C),J(c,.032,.032,.018,0,.098,0,d);for(let e=0;e<4;e++)Y(c,U(-.015+e*.009,.01,0),U(-.012+e*.007,.075,.008),.003,_),xd(c,.005,.012,.02+e*.01,.015,_);let l=G(t,.08,0,.42);q(l,.15,.008,.13,0,.065,-.045,p);let h=q(l,.15,.18,.009,0,-.025,.018,p);h.rotation.x=-.1;for(let e=0;e<7;e++)Y(l,U(-.066+e*.022,-.11,.028),U(-.066+e*.022,-.13,.028),.002,f);for(let n=0;n<Math.PI*2;n+=.3/.44)ne(t,Math.cos(n)*.44,.01,Math.sin(n)*.44,n+e)}for(let[e,t,r]of[[3.55,-.85,2.83],[4.03,4.12,2.98]]){let i=G(c,e,.26,t);J(i,.023,.03,r,0,r/2,0,d),J(i,.23,.27,.08,0,.04,0,W(13222580));let a=[],o=[];for(let e=0;e<=12;e++)for(let t=0;t<=48;t++){let n=e/12,i=t/48*Math.PI*2,o=(.025+.11*Math.sin(Math.PI*n*.82))*(1+.16*Math.cos(i*12));a.push(Math.cos(i)*o,r-.1-n*.68,Math.sin(i)*o)}for(let e=0;e<12;e++)for(let t=0;t<48;t++){let n=e*49+t,r=n+48+1;o.push(n,r,n+1,r,r+1,n+1)}let s=new Pr;s.setAttribute(`position`,new Sr(a,3)),s.setIndex(o),s.computeVertexNormals();let l=p.clone();l.side=2,K(i,s,l);for(let e=0;e<12;e++){let n=e*Math.PI/6,a=U(Math.cos(n)*.13,r-.76,Math.sin(n)*.13);Y(i,U(Math.cos(n)*.025,r-.1,Math.sin(n)*.025),a,.005,d),e%3==0&&ne(i,a.x,a.y,a.z,e+t)}for(let e of[r-.4,r-.46]){let t=K(i,new bo(.12,.007,7,48),f,0,e,0);t.rotation.x=Math.PI/2,te(i,[U(.12,e,0),U(.15,e-.035,.03),U(.17,e-.07,.02)],.004,f)}ee(J(i,.031,.035,.015,0,r-.092,0,n),.001);for(let e=0;e<6;e++){let t=e*Math.PI/3;Y(i,U(Math.cos(t)*.026,r-.095,Math.sin(t)*.026),U(Math.cos(t)*.054,r-.2,Math.sin(t)*.054),.0075,n,.0075)}}let M=G(i,3.55,.26,1.55);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;Y(M,U(Math.cos(t)*.26,0,Math.sin(t)*.26),U(Math.cos(t)*.15,.4,Math.sin(t)*.15),.014,u)}K(M,new go([new z(.13,.28),new z(.25,.46),new z(.225,.47),new z(.105,.3)],32),h);let ie=K(M,new bo(.238,.015,8,32),n,0,.485,0);ie.rotation.x=Math.PI/2;let ae=W(5190697,.9);ae.emissive=new V(12867119),ae.emissiveIntensity=2.5;for(let e=0;e<19;e++){let t=e*2.4,n=.17*Math.sqrt(e/19);xd(M,.037,Math.cos(t)*n,.365+Math.sin(e*3)*.008,Math.sin(t)*n,ae).scale.set(1,.45,.8)}let oe=new xs(12867119,.35,.8,2);oe.position.set(0,.42,0),M.add(oe);let se=G(i,3.1,.26,1.55);for(let e=0;e<6;e++){let t=U(-.11+e%3*.09,.045,.1+Math.floor(e/3)*.08),n=U(-.025+e%3*.04,.44+Math.floor(e/3)*.08,-.08);Y(se,t,n,.042,d,.035),Y(se,t.clone().add(U(.02,0,0)),n.clone().add(U(.02,0,0)),.009,W(7035466),.007)}te(M,[U(.23,.015,.15),U(.32,.02,.26),U(.37,.02,.21)],.006,u),te(M,[U(.23,.015,.15),U(.3,.02,.3),U(.35,.02,.28)],.006,u);let N=new No({color:16777215,transmission:1,ior:1.025,thickness:.06,roughness:0,transparent:!0,opacity:.2,depthWrite:!1,side:2}),ce={value:0};N.onBeforeCompile=e=>{e.uniforms.heatTime=ce,e.vertexShader=`uniform float heatTime;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <beginnormal_vertex>`,`#include <beginnormal_vertex>
objectNormal.x += sin(position.y*26.0+heatTime*2.6+position.z*17.0)*0.22;objectNormal.z += cos(position.y*20.0-heatTime*2.1+position.x*19.0)*0.22;`)};let le=K(M,new Xi(.12,.24,.65,20,12,!0),N,0,.8,0);le.userData.animated=!0;let P=G(i,5.22,.26,-1.3);for(let e of[0,1]){let t=G(P);t.rotation.y=e===0?0:-Math.PI/2;for(let e of[0,1.2])Y(t,U(0,0,e),U(0,1.8-e*.06,e),.018,l,.018),q(t,.22,.025,.24,0,.013,e,l);Y(t,U(0,.08,0),U(0,.08,1.2),.018,l,.018),Y(t,U(0,1.8,0),U(0,1.728,1.2),.018,l,.018);let r=new Oa;r.moveTo(0,.1),r.lineTo(1.18,.1),r.lineTo(1.18,1.7),r.lineTo(0,1.77),r.closePath();let i=K(t,new po(r,{depth:.005,bevelEnabled:!1}),C);i.rotation.y=-Math.PI/2,i.position.z=.01,Y(t,U(0,1.827,0),U(0,1.755,1.2),.01,n,.01)}let F=new Mo({color:9604995,transparent:!0,opacity:.19,roughness:.5,depthWrite:!1});for(let e of cm){let t=K(i,new Yi(.8,48),F,3.55,.251,e);t.rotation.x=-Math.PI/2}for(let e of um){if(pm(e.x,e.z))continue;let t=K(i,new Yi(.065,12),W(12896200,.8),e.x,.248+(.06+.02*(.5+.5*Math.sin(e.x*1.2+e.z*1.8)))*(1+1.3*R.smoothstep(e.x,3.7,5.3))-.025,e.z);t.rotation.set(-Math.PI/2,0,-e.yaw),t.scale.y=1.65}[o,s,c,M,se,P,a].forEach(e=>{e.traverse(e=>{T.some(t=>t===e||t.children.includes(e))&&(e.userData.animated=!0)}),Sd(e)});let ue=!1;return{root:i,brazier:M,screen:P,chairs:o,inverted:k,upright:A,update(e,n){ue=e,i.visible=e,t.setPatioWinter(e),t.umbrella.visible=t.linUmbrella.visible=!e,t.patioSummerProps.forEach(t=>t.visible=!e),t.tableCups.slice(0,2).forEach(t=>t.visible=!e),ce.value=n,T.forEach(e=>e.children.forEach((e,t)=>{let r=(n*.22+t/7)%1;e.position.set(Math.sin(r*5+t)*.018,r*.3,Math.cos(r*4+t)*.01),e.scale.set(.45+r,.8+r*1.5,.45+r)}))},diagnostics:()=>({active:ue,inverted:k.length,upright:A.length,tableTopSnow:.06,seatSnow:.055,invertedSeatSnow:0,normalThreshold:.6,minDepositedNormal:D,deposits:E,icicles:O,footprints:um.length,footDepth:.025,footStep:.6,logs:6,screenPanels:2,heatDistortion:!0,summerVisible:t.patioSummerProps.some(e=>e.visible),summerUmbrellasVisible:t.umbrella.visible||t.linUmbrella.visible})}}function gm(e,t,n){let r=G(e);r.visible=!1;let i=W(7035466),a=W(10726036),o=W(4216651),s=W(12559466,.35,.65),c=W(10446919,.4,.65),l=W(15261904);W(11055766);let u=W(4472114),d=W(12559233),f=W(14009249),p=W(9187129,.58),m=new Mo({color:16768172,emissive:16764555,emissiveIntensity:5,roughness:.6});m.userData.winterGlow=!0;let h=m.clone();h.emissiveIntensity=.35;let g=new Kr({color:16766368,transparent:!0,opacity:.28,blending:2,depthWrite:!1});g.userData.winterGlow=!0;let _={},v={lights:`暖白灯串`,wreath:`冷杉门环`,star:`黄铜星星`,wine:`暖饮铜壶台`,gifts:`牛皮纸礼物`,crate:`松枝木箱`,sign:`冬日立式菜单`,mat:`椰棕脚垫`,blankets:`两条羊毛毯`};for(let e of Object.keys(v))_[e]=G(r);let y=G(r),b=[];for(let[e,t,n]of[[-4.1,-1.4,1.08],[4.15,-2.7,1.02],[-3.8,-3.3,.82],[-3.5,4.6,.7]]){let r=G(y,e,.33,t);Y(r,U(0,0,0),U(.05,1.65*n,0),.06*n,i,.04*n);let o=(a,s,c,l,u)=>{let d=a.clone().addScaledVector(s,c);if(Y(r,a,d,Math.max(.004,.038*n*.55**(4-l)),i,Math.max(.003,.022*n*.55**(4-l))),l>=3&&b.push({a:a.clone().add(U(e,.33,t)),b:d.clone().add(U(e,.33,t))}),l!==0)for(let e=0;e<3;e++){let t=u+e*2.094;o(d,U(s.x*.4+Math.cos(t)*.6,.65,s.z*.4+Math.sin(t)*.6).normalize(),c*.58,l-1,u+e*1.7+.6)}};for(let e=0;e<5;e++)o(U(0,1.15*n,0),U(Math.cos(e*1.256)*.6,.8,Math.sin(e*1.256)*.6).normalize(),.78*n,4,e*1.9);for(let e=0;e<10;e++){let t=e*2.4;xd(r,.018,Math.cos(t)*.06,.25+e*.115,Math.sin(t)*.06,a).scale.set(1,1.8,.35)}}let x=G(r);for(let[e,t]of[[-2.6,2.65],[.7,2.65]]){let r=G(x,e,.26,t);J(r,.08,.1,.2,0,.1,0,i),Y(r,U(0,0,0),U(0,1.4,0),.035,i,.008);for(let e=0;e<6;e++){let t=.25+e*.19,a=.4*(1-e/7);for(let s=0;s<7;s++){let c=s*Math.PI*2/7+e*.5,l=U(Math.cos(c)*a,t-.045,Math.sin(c)*a);Cd(r,U(0,t,0),l,o,i);let u=K(r,new yo(1,8,5),n,l.x*.65,t+.025,l.z*.65);u.scale.set(a*.45,.035,a*.2),u.rotation.y=-c}}}let S=[],C=0,w=0;function T(e){let t=new sa(e),n=t.getLength();K(_.lights,new xo(t,Math.max(8,Math.ceil(n*12)),.002,4,!1),u);let r=Math.ceil(n/.09);for(let e=0;e<=r;e++){let n=t.getPointAt(e/r),i=C%20<3;xd(_.lights,.004,n.x,n.y,n.z,i?h:m),i||xd(_.lights,.014,n.x,n.y,n.z,g),i&&w++,C++}}for(let e=0;e<3;e++){let t=-2.7+e*1.8;T([U(t,3.23,2.19),U(t+.45,3.08,2.2),U(t+.9,2.98,2.2),U(t+1.35,3.08,2.2),U(t+1.8,3.23,2.19)])}for(let e of[-1.65,-.57])T([U(e,2.88,2.2),U(e+.025,2.1,2.22),U(e,1.5,2.2),U(e,.9,2.21)]);T(Array.from({length:33},(e,t)=>{let n=t/32*Math.PI*2;return U(-1.9+Math.cos(n)*.145,5.05+Math.sin(n)*.04,-2.37+Math.sin(n)*.145)}));for(let{a:e,b:t}of b.filter((e,t)=>t%4==0)){let n=t.clone().sub(e).normalize(),r=new B().crossVectors(n,U(0,1,0)).normalize(),i=new B().crossVectors(n,r);T(Array.from({length:25},(n,a)=>{let o=a/24,s=o*e.distanceTo(t)/(.05*Math.tan(R.degToRad(25)))*Math.PI*2;return e.clone().lerp(t,o).addScaledVector(r,Math.cos(s)*.024).addScaledVector(i,Math.sin(s)*.024)}))}for(let e of[U(-1.6,1.1,2.35),U(-.5,1.1,2.35),U(-3.8,1.6,4.6),U(3.9,1.7,-2.6)]){S.push(e);let t=new xs(16766625,.18,.8,2);t.position.copy(e),_.lights.add(t)}let E=_.wreath;E.position.set(-1.08,2.34,2.23),K(E,new bo(.19,.028,8,32),o);for(let e=0;e<22;e++){let t=e*Math.PI*2/22;Cd(E,U(Math.cos(t)*.18,Math.sin(t)*.18,0),U(Math.cos(t+.2)*.23,Math.sin(t+.2)*.23,.015),o,i),Math.sin(t)>.45&&xd(E,.04,Math.cos(t)*.19,Math.sin(t)*.19+.018,.015,n).scale.set(1,.5,.8)}let D=G(E,.12,-.13,.06);for(let e of[-1,1])xd(D,.045,e*.032,0,0,p).scale.set(1,.6,.35);for(let e of[-1,1]){let t=q(D,.024,.075,.008,e*.015,-.045,0,p);t.rotation.z=e*.25}K(E,new bo(.055,.008,6,20),s,0,-.04,-.035);let O=_.star;O.position.set(-2.6,1.78,2.65);let k=new Oa;for(let e=0;e<10;e++){let t=e*Math.PI/5+Math.PI/2,n=e%2?.045:.1;e===0?k.moveTo(Math.cos(t)*n,Math.sin(t)*n):k.lineTo(Math.cos(t)*n,Math.sin(t)*n)}k.closePath();let A=new Da;A.absarc(0,0,.025,0,Math.PI*2,!0),k.holes.push(A),K(O,new po(k,{depth:.012,bevelEnabled:!1}),s);let ee=xd(O,.025,0,0,.009,m.clone());ee.userData.animated=!0;for(let e=0;e<4;e++){let t=q(O,.004,.12,.004,0,0,.015,m);t.rotation.z=e*Math.PI/2,t.scale.y=.65}let te=_.wine;te.position.set(1.7,.26,3.6),q(te,.72,.08,.43,0,.67,0,i);for(let e of[-.3,.3])for(let t of[-.15,.15])Y(te,U(e,0,t),U(e,.67,t),.018,u);J(te,.15,.19,.35,-.1,.88,0,c),J(te,.17,.17,.025,-.1,1.065,0,s),xd(te,.028,-.1,1.1,0,s),Y(te,U(-.1,.78,.1),U(-.1,.78,.25),.015,s);for(let e=0;e<3;e++)J(te,.046,.039,.09,.17+e*.085,.755,.05,l),K(te,new bo(.025,.006,6,12),s,.225+e*.085,.76,.05);let ne=_.gifts;ne.position.set(1.85,.26,2.7);for(let[e,t,n,r,i,a]of[[0,.13,0,.55,.26,.4],[.04,.37,0,.4,.22,.33],[-.3,.09,.19,.24,.18,.22]])q(ne,r,i,a,e,t,n,d),q(ne,.012,i+.004,a+.004,e,t,n,f),q(ne,r+.004,.012,a+.004,e,t+i*.2,n,f);Cd(ne,U(-.15,.49,0),U(.15,.52,.1),o,i);let j=_.crate;j.position.set(-3.65,.26,2.8),q(j,.7,.04,.45,0,.02,0,i);for(let e of[-.22,.22])for(let t=0;t<3;t++)q(j,.7,.07,.025,0,.09+t*.085,e,d);for(let e of[-.34,.34])q(j,.025,.3,.45,e,.17,0,d);for(let e=0;e<5;e++)Cd(j,U(-.25+e*.1,.25,-.1),U(-.2+e*.1,.5,.17),o,i);for(let e=0;e<10;e++){let t=G(j,-.25+e%5*.12,.32+Math.floor(e/5)*.04,-.1+e%2*.15);for(let e=0;e<5;e++)for(let n=0;n<5;n++){let r=n*1.256+e*.5;xd(t,.018,Math.cos(r)*.025,e*.018,Math.sin(r)*.025,c).scale.set(1,.7,1)}}let re=_.sign;re.position.copy(t.sign.position);for(let e of[-1,1]){let t=G(re,0,.84,e*.16);t.rotation.x=e*.12,q(t,.81,1.02,.08,0,0,0,d),q(t,.7,.9,.085,0,0,0,u);let n=document.createElement(`canvas`);n.width=512,n.height=512;let r=n.getContext(`2d`);r.fillStyle=`#3d443d`,r.fillRect(0,0,512,512),r.fillStyle=`#e9e3d3`,r.textAlign=`center`,r.font=`42px Georgia`,r.fillText(`Winter Menu`,256,135),r.font=`22px Georgia`,r.fillText(`COFFEE  ·  WARM SPICES`,256,250),r.fillText(`Come in, warm up.`,256,350);let i=new Wi(n);i.colorSpace=Be;let a=K(t,new _o(.67,.84),new Mo({map:i,roughness:1}),0,0,e*.048);e<0&&(a.rotation.y=Math.PI)}for(let e of[-.36,.36])for(let t of[-.35,.35])Y(re,U(e,.02,t),U(e,1.4,0),.027,i);q(re,.86,.04,.11,0,1.42,0,n);let M=_.mat;M.position.set(-.65,.854,2.38),q(M,1,.025,.38,0,.012,0,d);for(let e=0;e<25;e++)Y(M,U(-.47+e*.039,.028,-.17),U(-.47+e*.039,.028,.17),.004,i);for(let e of[-.17,.16]){let t=K(M,new Yi(.065,12),W(7235419,.7),e,.032,0);t.rotation.x=-Math.PI/2,t.scale.y=1.7}let ie=hm(r,t,n,_.blankets),ae={wine:[[1.7,.26,3.6],[2.25,.26,4.05],[1.3,.26,-3.5]],gifts:[[1.85,.26,2.7],[2.55,.26,4.1],[-3.6,.26,-3.6]],crate:[[-3.65,.26,2.8],[-3.4,.26,.2],[.5,.26,-3.8]],sign:[[-2.15,.26,3.85],[-3.1,.26,3.6],[-4.1,.26,.2]]},oe={};try{Object.assign(oe,JSON.parse(localStorage.getItem(`cafe-winter-dressing`)||`{}`))}catch{}for(let e of Object.keys(v)){let t=oe[e];oe[e]={placed:t?.placed!==!1,slot:Number.isInteger(t?.slot)?Math.abs(t.slot)%3:0},ae[e]&&_[e].position.fromArray(ae[e][oe[e].slot]),_[e].visible=oe[e].placed}[y,x,...Object.values(_)].forEach(Sd);let se=G(te,-.1,1.11,0),N=new Kr({color:16773079,transparent:!0,opacity:.14,depthWrite:!1});for(let e=0;e<6;e++){let t=xd(se,.025,0,e*.03,0,N);t.scale.y=2}let ce=!1;function le(){try{localStorage.setItem(`cafe-winter-dressing`,JSON.stringify(oe))}catch{}}return{root:r,patio:ie,probePositions:S,props:_,settings:oe,core:ee,beadCount:C,dimCount:w,items:()=>Object.entries(v).map(([e,t])=>({id:e,name:t,...oe[e],movable:!!ae[e]})),toggle(e){_[e]&&(oe[e].placed=!oe[e].placed,_[e].visible=oe[e].placed,le())},move(e){ae[e]&&(oe[e].slot=(oe[e].slot+1)%3,_[e].position.fromArray(ae[e][oe[e].slot]),le())},update(e,n){ce=e,r.visible=e,ie.update(e,n),t.door.updateWorldMatrix(!0,!1),E.position.copy(t.door.localToWorld(U(.52,1.49,.085))),t.door.getWorldQuaternion(E.quaternion),t.sign.visible=!e,t.patioChairs.forEach(t=>t.visible=!e),t.seasonalFoliage.forEach(t=>t.visible=!e),ee.material.emissiveIntensity=4+Math.sin(n*Math.PI*2),se.children.forEach((e,t)=>{let r=(n*.3+t/6)%1;e.position.set(Math.sin(r*5+t)*.025,r*.35,0),e.scale.setScalar(.5+r)})},get active(){return ce}}}function _m(e,t){let n=5e3,r=new Float32Array(n*3);for(let e=0;e<n;e++)r.set([e*.618033989%1,e*.754877666%1,e*.569840291%1],e*3);let i=new Pr;i.setAttribute(`position`,new yr(r,3));let a={clock:{value:0},eye:{value:new B},emitter:{value:new B},radius:{value:8},wind:{value:new z},viewportHeight:{value:1e3},perspective:{value:0},amount:{value:0},lightOn:{value:1},probes:{value:t}},o=`uniform vec3 probes[4];uniform float lightOn;float glow(vec3 p){float g=0.0;for(int i=0;i<4;i++)g=max(g,1.0-smoothstep(0.0,.8,distance(p,probes[i])));return g*lightOn;}`,s=new Vi(i,new Ao({uniforms:a,transparent:!0,depthWrite:!1,vertexShader:`
 uniform float clock,radius,viewportHeight,perspective,amount;uniform vec3 eye,emitter;uniform vec2 wind;${o}
 varying float alpha;varying vec3 tint;
 void main(){float angle=position.x*6.2831853;float ring=max(1.8,radius+(position.y-.5)*12.0);vec2 xz=emitter.xz+vec2(cos(angle),sin(angle))*ring;float age=mod(clock+position.z*22.0,22.0);xz+=wind*age*.127+sin(clock*.628318+position.x*20.0)*.12;
 float floorY=.28;if(abs(xz.x)<2.84&&xz.y> -2.91&&xz.y<2.25)floorY=4.65-abs(xz.x)*.5;
 float height=8.0-floorY;float y=floorY+mod(position.z*height-clock*.35+220.0,height);vec3 world=vec3(xz.x,y,xz.y);vec4 view=modelViewMatrix*vec4(world,1.0);gl_Position=projectionMatrix*view;
 float size=.006+.008*position.y;gl_PointSize=max(1.25,size*viewportHeight*.5*projectionMatrix[1][1]/mix(1.0,max(.1,-view.z),perspective));
 alpha=amount*smoothstep(.1,1.5,distance(world,eye))*.85;tint=mix(vec3(.85,.9,.96),vec3(1.0,.72,.4),glow(world)*.8);
 }`,fragmentShader:`varying float alpha;varying vec3 tint;void main(){float d=length(gl_PointCoord-.5)*2.0;float a=(1.0-smoothstep(.25,1.0,d))*alpha;if(a<.01)discard;gl_FragColor=vec4(tint,a);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}));s.frustumCulled=!1,s.visible=!1,e.add(s);let c=new Ao({uniforms:{amount:a.amount,lightOn:a.lightOn,probes:a.probes},side:2,transparent:!0,depthWrite:!1,vertexShader:`varying vec3 wp;void main(){wp=(modelMatrix*vec4(position,1.0)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.0);}`,fragmentShader:`varying vec3 wp;uniform float amount;${o}
 void main(){float nearLamp=0.0;for(int i=0;i<4;i++)nearLamp=max(nearLamp,1.0-smoothstep(2.6,3.0,distance(wp.xz,probes[i].xz)));float h=1.0-smoothstep(.28,.68,wp.y);float edge=smoothstep(0.0,.5,min(5.55-wp.x,wp.x+4.65))*smoothstep(0.0,.5,min(5.35-wp.z,wp.z+4.45));float alpha=.15*h*edge*(1.0-nearLamp*lightOn)*amount;if(abs(wp.x)<2.9&&wp.z<2.3&&wp.z> -2.9)discard;gl_FragColor=vec4(.58,.64,.7,alpha);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}`}),l=new ii(new Ji(10.2,.4,9.8,1,4,1),c);return l.position.set(.45,.48,.45),l.visible=!1,e.add(l),{count:n,update(e,t,n,r){if(a.clock.value=e,a.amount.value=t,a.eye.value.copy(n.position),a.emitter.value.copy(n.position),a.radius.value=4,n instanceof Ss){let e=n.getWorldDirection(new B),t=n.position.clone().addScaledVector(e,Math.abs(e.y)>.001?(1.8-n.position.y)/e.y:48),r=new B(-e.x,0,-e.z).normalize();a.emitter.value.copy(t).addScaledVector(r,6),a.radius.value=6}let i=new B(1,0,0).applyQuaternion(n.quaternion);a.wind.value.set(i.x*Math.cos(.349)-i.z*Math.sin(.349),i.z*Math.cos(.349)+i.x*Math.sin(.349)),a.viewportHeight.value=window.innerHeight,a.perspective.value=+(n instanceof _s),a.lightOn.value=+!!r,s.visible=l.visible=t>.01}}}function vm(e){let t=W(12892581),n=W(9345673),r=W(6646625);W(15780264);let i=W(4282183),a=W(7035466),o=new Kr({color:15002352,transparent:!0,opacity:.1,depthWrite:!1}),s=e.actors.map((e,i)=>{let a=G(e.head,0,.085,0),s=K(a,new yo(.172,16,10,0,Math.PI*2,0,Math.PI*.54),i%2?t:n);s.scale.y=.9,K(a,new bo(.17,.018,6,24),i%2?t:n,0,0,0).rotation.x=Math.PI/2,xd(a,.032,0,.16,0,t);let c=G(e.root);q(c,.335,.39,.225,0,.68,0,i%2?t:n),K(c,new bo(.09,.025,6,20),i%2?n:t,0,.91,0).rotation.x=Math.PI/2,q(c,.055,.27,.025,.065,.78,.135,i%2?n:t);let l=G(e.root);for(let e of[-.085,.085])Y(l,U(e,.5,0),U(e,.12,0),.066,r,.06),q(l,.135,.1,.215,e,.09,.045,r);l.visible=!1;let u=Array.from({length:5},()=>{let t=xd(e.head,.035,0,0,0,o.clone());return t.visible=!1,t});return a.visible=c.visible=!1,Sd(a),Sd(c),Sd(l),{a:e,head:a,body:c,standing:l,puffs:u,base:e.base.clone(),rotation:e.root.rotation.clone(),leftRotation:e.armL.rotation.clone(),rightRotation:e.armR.rotation.clone(),last:e.root.position.clone(),idle:0,hidden:[]}}),c=G(s[1].a.root);for(let e of[-.085,.085])Y(c,U(e,.5,0),U(e,.485,.23),.06,r,.055),Y(c,U(e,.485,.23),U(e,.095,.23),.05,r,.045),q(c,.13,.085,.19,e,.09,.27,r);Sd(c),c.visible=!1;let l=G(s[3].body,0,.64,.22);for(let e=0;e<5;e++)Cd(l,U(-.12+e*.05,-.12,0),U(-.15+e*.07,.18,.05),i,a);Sd(l);let u=G(s[1].a.root,0,.72,.31);u.visible=!1,J(u,.075,.065,.12,0,0,0,t),K(u,new bo(.04,.01,6,16),t,.08,0,0);let d=Array.from({length:5},()=>xd(u,.016,0,.1,0,o)),f=!1;return{update(e,t,n){if(e!==f){for(let t of s)if(t.head.visible=t.body.visible=e&&t.a.role!==`garden-tang`&&!t.a.root.userData.identityLocked,t.a.role===`guest`||t.a.role===`guest2`||t.a.role===`gardener`||t.a.role===`patio-guest`){if(t.a.role!==`gardener`&&t.a.role!==`patio-guest`&&(t.standing.visible=e&&t.a.role===`guest2`,t.a.legL.visible=t.a.legR.visible=!e),e)for(let e of t.a.armR.children)e instanceof Mn&&![`shirt-sleeve`,`opposable-thumb`].includes(e.name)&&(t.hidden.push(e),e.visible=!1);else t.hidden.forEach(e=>e.visible=!0),t.hidden=[],t.a.root.position.copy(t.base),t.a.root.rotation.copy(t.rotation),t.a.armL.rotation.copy(t.leftRotation),t.a.armR.rotation.copy(t.rightRotation)}c.visible=u.visible=e,f=e}e&&(s[3].a.role===`patio-guest`&&(s[3].a.root.position.y=s[3].base.y+.14),s[1].a.root.position.set(-1.68,.82,-1.45),s[1].a.root.rotation.set(0,Math.PI/2,0),s[1].a.armR.rotation.x=-1.1,s[1].a.armL.rotation.x=-1.1,s[1].a.armR.rotation.z=-.4,s[1].a.armL.rotation.z=.4,s[2].a.role!==`garden-tang`&&(s[2].a.root.position.set(-.25,.85,2.38),s[2].a.root.rotation.set(0,.2,-.07),s[2].a.armL.rotation.x=-.15,s[2].a.armR.rotation.x=-.35),s[3].a.armL.rotation.x=s[3].a.armR.rotation.x=-1.1);for(let r of s){r.idle=r.last.distanceTo(r.a.root.position)>.015?0:r.idle+t,r.last.copy(r.a.root.position);for(let t=0;t<r.puffs.length;t++){let i=(n+r.a.phase)%3.7-t*.12,a=r.puffs[t];a.visible=e&&r.idle>2&&(Math.abs(r.a.root.position.x)>2.75||r.a.root.position.z>2.2||r.a.root.position.z<-2.77)&&r.a.role!==`barista`&&i>0&&i<1.4,a.position.set(Math.sin(t)*i*.02,-.055+i*.04,.16+i*.16),a.scale.setScalar(.4+Math.max(0,i)*2),a.material.opacity=.14*Math.max(0,1-i/1.4)}}d.forEach((e,t)=>{let r=(n*.3+t/5)%1;e.position.y=.08+r*.27,e.scale.setScalar(.5+r)})},diagnostics:()=>({active:f,identityKits:s.slice(0,2).map(e=>({hat:e.head.visible,coat:e.body.visible,sleeve:e.a.armR.getObjectByName(`shirt-sleeve`)?.visible,thumb:e.a.armR.getObjectByName(`opposable-thumb`)?.visible})),idleBreathing:s.filter(e=>e.puffs.some(e=>e.visible)).length,winterPositions:s.slice(1,3).map(e=>e.a.root.position.toArray())})}}function ym(e,t){let n=G(e);n.visible=!1;let r=W(15198703,.98),i=W(11250078,.56),a=new No({color:13492439,roughness:.13,metalness:.12,transparent:!0,opacity:.55,depthWrite:!1}),o=.6,s=R.degToRad(15),c=0;function l(e,t,i,a,l,u,d,f=()=>!0){let p=[],m=[],h=[],g=Math.ceil((t-e)/l),_=Math.ceil((a-i)/l),v=(t-e)/g,y=(a-i)/_,b=Array.from({length:g},(t,n)=>Array.from({length:_},(t,r)=>f(e+(n+.5)*v,i+(r+.5)*y))),x=(e,t)=>e*(_+1)+t;for(let t=0;t<=g;t++)for(let n=0;n<=_;n++){let r=e+t*v,a=i+n*y,c=u(r,a),l=.001,f=U(-(u(r+l,a)-u(r-l,a))/(2*l),1,-(u(r,a+l)-u(r,a-l))/(2*l)).normalize(),h=R.smoothstep(f.y,o,o+Math.sin(s));p.push(r,c+d(r,a)*h,a);let g=.985+.015*Math.sin(r*.8+a*1.3);m.push(.94*g,.96*g,g)}function S(e,t){let n=p.length/3,r=p.slice(e*3,e*3+3),i=p.slice(t*3,t*3+3);p.push(...r,...i,i[0],u(i[0],i[2]),i[2],r[0],u(r[0],r[2]),r[2]);for(let e=0;e<4;e++)m.push(.9,.93,.98);h.push(n,n+1,n+2,n,n+2,n+3)}for(let e=0;e<g;e++)for(let t=0;t<_;t++)if(b[e][t]){let n=x(e,t),r=x(e+1,t),i=x(e+1,t+1),a=x(e,t+1);h.push(n,a,r,r,a,i),t!==0&&b[e][t-1]||S(n,r),e!==g-1&&b[e+1][t]||S(r,i),t!==_-1&&b[e][t+1]||S(i,a),e!==0&&b[e-1][t]||S(a,n),c++}let C=new Pr;C.setAttribute(`position`,new Sr(p,3)),C.setAttribute(`color`,new Sr(m,3)),C.setIndex(h),C.computeVertexNormals();let w=r.clone();w.vertexColors=!0,K(n,C,w)}for(let e of[-1,1])l(e<0?-2.75:0,e<0?0:2.75,-2.89,2.21,.12,e=>4.59-Math.abs(e)*.5,(e,t)=>{let n=Math.sin(t*4.7+e*.8)+Math.sin(t*9.3)*.35,r=.06+.02*(.5+.5*Math.sin(e*2.2+t*1.3));return R.lerp(r*(1+1.2*R.smoothstep(e,1.3,2.6)),.005+.01*(.5+.5*Math.sin(t*3)),R.smoothstep(n,.45,1.1))},(e,t)=>!(Math.sin(t*5+e*1.5)>.94&&Math.abs(e)>1)||Math.abs(t+.9)<.5&&Math.abs(e-1.7)<.3);function u(e,t){if(t<2.15)return!1;let n=R.clamp((t-2.35)/3,0,1),r=-1.08-n*1.7,i=-1.08+n*4;return Math.abs(e-r)<.15||Math.abs(e-i)<.15||t<3.4&&Math.abs(e+1.08)<.23}l(-4.62,5.53,-4.42,5.32,.14,()=>.247,(e,t)=>{let n=R.smoothstep(e,3.7,5.3);return(.06+.02*(.5+.5*Math.sin(e*1.2+t*1.8)))*(1+1.3*n)-mm(e,t)},(e,t)=>!(Math.abs(e)<2.94&&t>-2.95&&t<2.33)&&!u(e,t)&&!pm(e,t));for(let e of[-1,1])for(let t=0;t<15;t++){let r=t/14,a=2.4+r*2.8,o=-1.08+(e<0?-1.7:4)*r+(t%2?.065:-.065);if(a<3.45)continue;let s=K(n,new Yi(.065,12),i,o,.251,a);s.rotation.x=-Math.PI/2,s.rotation.z=e<0?-.55:.65,s.scale.y=1.7}for(let e=0;e<4;e++)for(let t of[-1.4,-.4,.06])q(n,t===-.4?.38:.13,.04,1.35-e*.22,t,.397+e*.15,2.75-e*.2,r);for(let e of t.snowSurfaces.pots){let t=new Oa;t.absarc(0,0,e.radius+.012,0,Math.PI*2,!1);let i=new Da;i.absarc(0,0,e.radius-.032,0,Math.PI*2,!0),t.holes.push(i);let a=K(n,new po(t,{depth:.04,bevelEnabled:!1,steps:1}),r,...e.position);a.rotation.x=-Math.PI/2}let d=0;for(let e of[-2.82,2.82])for(let t=-2.75;t<2.2;t+=1.2){let r=.08+.07*(.5+.5*Math.sin(t*13+e));J(n,.014,.001,r,e,3.16-r/2,t,a),d++}let f=G(n),p=new Ci({color:14214885,transparent:!0,opacity:.3}),m=[];for(let e of[-2.762,2.762])for(let t=0;t<70;t++){let n=-2.7+t%14*.35,r=1.02+Math.floor(t/14)*.45;for(let t=0;t<3;t++){let i=t*Math.PI/3;m.push(e,r-.025*Math.sin(i),n-.025*Math.cos(i),e,r+.025*Math.sin(i),n+.025*Math.cos(i))}}let h=new Pr;h.setAttribute(`position`,new Sr(m,3)),f.add(new Fi(h,p));let g=gm(e,t,r),_=_m(e,g.probePositions),v=vm(t);Sd(n);let y=0;return{get amount(){return y},dressing:g,diagnostics:()=>({accumulationActive:n.visible,normalThreshold:o,slopeFalloffDegrees:15,depositedCells:c,roofDepth:[.06,.08],thinGlazingDepth:[.005,.015],propDepth:[.03,.05],leewardMultiplier:2.3,icicles:d,verticalGlazingCaps:0,particles:_.count,beads:g.beadCount,dimBeads:g.dimCount,placed:g.items(),fixedDay:!0,patio:g.patio.diagnostics(),...v.diagnostics()}),update(e,t,r,i,a){y=R.damp(y,+!!r,3,e),n.visible=r,g.update(r,t),v.update(r,e,t),_.update(t,y,a,r&&g.settings.lights.placed)}}}function bm(e){let t=new Ao({side:1,transparent:!0,depthWrite:!1,uniforms:{amount:{value:0}},vertexShader:`varying vec3 direction; void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`
 uniform float amount;varying vec3 direction;
 void main(){vec3 d=normalize(direction);float h=clamp(d.y*2.6,0.0,1.0);
 vec3 horizon=vec3(.96,.65,.42),middle=vec3(.66,.49,.61),zenith=vec3(.23,.29,.47);
 vec3 color=mix(horizon,middle,smoothstep(0.0,.45,h));color=mix(color,zenith,smoothstep(.35,1.0,h));
 float sun=pow(max(0.0,dot(d,normalize(vec3(-.65,.12,-1.0)))),180.0);color+=vec3(.25,.15,.045)*sun;
 float cloud=smoothstep(.78,.94,sin(d.x*13.0+d.z*8.0)*.15+sin(d.y*64.0)*.08+.73)*(1.0-smoothstep(.1,.7,h));color=mix(color,vec3(.91,.72,.65),cloud*.24);
 gl_FragColor=vec4(color,amount);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`}),n=new ii(new yo(60,32,20),t);return n.renderOrder=-10,n.visible=!1,e.add(n),{update(e,r){n.visible=e&&r>.005,t.uniforms.amount.value=r},get visible(){return n.visible}}}function xm(e){let t=new Mn;t.visible=!1,e.add(t);let n=new Kr({color:16772548,transparent:!0,opacity:.018,depthWrite:!1,side:2,blending:2});for(let e of[-1.15,.15,1.3]){let r=new B(-2.65,3.05,e),i=new B(.7,.9,e-.65),a=new ii(new Xi(.11,.38,i.clone().sub(r).length(),20,1,!0),n);a.position.copy(r).add(i).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new B(0,1,0),r.clone().sub(i).normalize()),t.add(a)}let r=new Float32Array(540);for(let e=0;e<180;e++)r.set([-2.3+Math.random()*3,.95+Math.random()*2.2,-1.5+Math.random()*2.9],e*3);let i=new Pr;i.setAttribute(`position`,new yr(r,3));let a=new Vi(i,new Ii({color:16774103,size:.006,transparent:!0,opacity:.18,depthWrite:!1,blending:2}));return t.add(a),{update(e,r,i,o){t.visible=e&&i<.98&&o<.98,n.opacity=.018*(1-i)*(1-o),a.material.opacity=.18*(1-i)*(1-o),a.position.y=Math.sin(r*.12)*.035,a.rotation.y=Math.sin(r*.07)*.012}}}var Sm=class{inside;raining;changed;audio=new Audio(new URL(`music/afternoon-piano.m4a`,document.baseURI).href);enabled=!0;volume=.35;status=`轻触庭院，听一会儿风`;context;wind;rain;entering=!1;get name(){return this.inside()?`温室午后 · 古典风轻钢琴`:this.raining()?`雨落庭院 · 自然雨声`:`庭院微风 · 风声白噪音`}constructor(e,t,n){this.inside=e,this.raining=t,this.changed=n,this.audio.loop=!0,this.audio.preload=`auto`;try{let e=Number(localStorage.getItem(`cafe-volume`)??.35);this.volume=Number.isFinite(e)?Math.max(0,Math.min(1,e)):.35,this.enabled=localStorage.getItem(`cafe-built-in-music-enabled`)!==`false`}catch{}this.audio.volume=this.volume,this.audio.addEventListener(`error`,()=>{this.status=`配乐暂时未能加载，点击音乐按钮重试`,this.changed()}),document.addEventListener(`visibilitychange`,()=>this.sync());let r=e=>{!this.enabled||e.target instanceof Element&&e.target.closest(`#sound`)||(this.unlockWind(),this.inside()&&this.audio.paused&&this.play())};document.addEventListener(`pointerdown`,r,{passive:!0}),document.addEventListener(`keydown`,r)}unlockWind(){if(!this.context){let e=this.context=new AudioContext,t=e.createBuffer(1,e.sampleRate*12,e.sampleRate),n=t.getChannelData(0);for(let e=0;e<n.length;e++)n[e]=Math.random()*2-1;let r=e.createBufferSource();r.buffer=t,r.loop=!0;let i=e.createBiquadFilter();i.type=`highpass`,i.frequency.value=85;let a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=780,a.Q.value=.4;let o=e.createGain();o.gain.value=.8;let s=e.createOscillator(),c=e.createGain();s.frequency.value=.075,c.gain.value=.18,s.connect(c).connect(o.gain),s.start(),this.wind=e.createGain(),this.wind.gain.value=0,r.connect(i).connect(a).connect(o).connect(this.wind).connect(e.destination),r.start();let l=e.createBuffer(2,e.sampleRate*12,e.sampleRate);for(let t=0;t<2;t++){let n=l.getChannelData(t),r=0;for(let e=0;e<n.length;e++){let t=Math.random()*2-1;r=.86*r+.14*t,n[e]=t*.28+r*.7}for(let t=0;t<660;t++){let t=Math.floor(Math.random()*(n.length-e.sampleRate*.05)),r=900+Math.random()*3300,i=.015+Math.random()*.035;for(let a=0;a<e.sampleRate*.025;a++){let o=a/e.sampleRate;n[t+a]+=Math.sin(o*r*Math.PI*2)*Math.exp(-o*190)*i}}}let u=e.createBufferSource();u.buffer=l,u.loop=!0;let d=e.createBiquadFilter();d.type=`highpass`,d.frequency.value=320;let f=e.createBiquadFilter();f.type=`lowpass`,f.frequency.value=6200,f.Q.value=.45,this.rain=e.createGain(),this.rain.gain.value=0,u.connect(d).connect(f).connect(this.rain).connect(e.destination),u.start()}this.context.state===`suspended`?this.context.resume().then(()=>this.syncWind()).catch(()=>{}):this.syncWind()}syncWind(){let e=this.enabled&&!document.hidden&&!this.inside()&&!this.entering;this.context&&this.wind&&this.wind.gain.setTargetAtTime(e&&!this.raining()?this.volume*.65:0,this.context.currentTime,.15),this.context&&this.rain&&this.rain.gain.setTargetAtTime(e&&this.raining()?this.volume*.7:0,this.context.currentTime,.15),!this.inside()&&!this.entering&&(this.status=this.enabled?this.context?.state===`running`?this.raining()?`正在庭院播放雨声`:`正在庭院播放风声`:this.raining()?`轻触庭院，听一会儿雨`:`轻触庭院，听一会儿风`:`声音已暂停`),this.changed()}play(){this.enabled&&!document.hidden&&this.audio.play().then(()=>{!this.enabled||document.hidden||!this.inside()&&!this.entering?this.audio.pause():(this.status=`正在馆内播放`,this.changed())}).catch(()=>{this.status=`点击右上角音乐按钮开始播放`,this.changed()})}enter(){this.entering=!0,this.syncWind(),this.play()}sync(){this.entering=!1,this.syncWind(),this.inside()&&this.enabled&&!document.hidden?this.play():(this.audio.pause(),this.enabled||(this.status=`声音已暂停`),this.changed())}toggle(){this.enabled=this.enabled&&!this.snapshot().playing?!0:!this.enabled;try{localStorage.setItem(`cafe-built-in-music-enabled`,String(this.enabled))}catch{}return this.enabled&&this.unlockWind(),this.sync(),this.enabled}setVolume(e){if(Number.isFinite(e)){this.volume=Math.max(0,Math.min(1,e)),this.audio.volume=this.volume,this.syncWind();try{localStorage.setItem(`cafe-volume`,String(this.volume))}catch{}}}snapshot(){let e=this.enabled&&!document.hidden&&!this.inside()&&!this.entering&&this.context?.state===`running`,t=!!e&&!this.raining(),n=!!e&&this.raining();return{name:this.name,enabled:this.enabled,volume:this.volume,playing:this.inside()?!this.audio.paused:!!e,pianoPlaying:!this.audio.paused,windPlaying:t,rainPlaying:n,rainGain:this.rain?.gain.value??0,windGain:this.wind?.gain.value??0,time:this.audio.currentTime,status:this.status,builtIn:!0,readyState:this.audio.readyState}}};function Cm(e,t,n){let r=null,i=[],a=0,o=!1,s,c=!1,l=()=>{s!==void 0&&window.clearTimeout(s),s=void 0},u=e=>t.querySelector(e);function d(){window.dispatchEvent(new CustomEvent(`cafe-conversation-visual`,{detail:{name:null}})),l(),r=null,o=!1,e.classList.remove(`dialogue-mode`),document.body.classList.remove(`dialogue-open`)}function f(){l(),!o||!r||a>=i.length-1||document.hidden||(s=window.setTimeout(()=>p(),Math.max(3600,i[a].join(``).length*100+1200)))}function p(){r&&a<i.length-1&&(a++,h(),f())}function m(){if(!r)return;let e=u(`#dialogue-copy`),t=getComputedStyle(e),n=document.createElement(`canvas`).getContext(`2d`);n.font=`${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;let o=Math.min(e.clientWidth,parseFloat(t.fontSize)*26),s=[],c=i.slice(0,a).flat().join(``).length;function l(e){let t=Array.from(e),r=[];for(;t.length;){let e=``;for(;t.length&&n.measureText(e+t[0]).width<=o-2;)e+=t.shift();if(e||=t.shift(),t.length&&/[，。！？；：、”’）】]/.test(t[0])&&e.length>1){let n=Array.from(e).pop();e=e.slice(0,-n.length),t.unshift(n)}r.push(e)}return r}for(let e of r.paragraphs){let t=``;for(let n of e.match(/[^。！？]+[。！？]?/gu)||[e]){if(l(t+n).length<=2){t+=n;continue}t&&=(s.push(l(t)),``);let e=l(n);if(e.length<=2)t=n;else for(let t=0;t<e.length;t+=2)s.push(e.slice(t,t+2))}t&&s.push(l(t))}i=s.length?s:[[``]];let d=0;a=0;for(let e=0;e<i.length;e++){a=e;let t=d+i[e].join(``).length;if(c<t)break;d=t}h(),f()}function h(){if(!r)return;u(`#dialogue-copy`).replaceChildren(...i[a].map(e=>{let t=document.createElement(`span`);return t.className=`dialogue-line`,t.textContent=e,t}));let e=a===i.length-1;u(`#dialogue-next`).hidden=e,u(`#reply`).hidden=!e,u(`#reply`).textContent=r.reply,u(`#dialogue-page`).textContent=e?``:`${a+1} / ${i.length}`,u(`#dialogue-skip`).toggleAttribute(`disabled`,e),u(`#dialogue-skip`).setAttribute(`aria-label`,e?`已到回应处`:`跳过阅读，前往回应`),u(`#dialogue-auto`).setAttribute(`aria-pressed`,String(o)),u(`#dialogue-auto`).setAttribute(`aria-label`,o?`关闭自动翻页`:`开启自动翻页`),u(`#dialogue-status`).textContent=o&&e?`自动阅读已到末尾，请亲自回应。`:``}e.addEventListener(`close`,d),e.addEventListener(`keydown`,e=>{r&&(e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==` `&&e.key!==`Enter`||e.target instanceof HTMLButtonElement||(e.preventDefault(),p()))}),document.addEventListener(`visibilitychange`,()=>{document.hidden?l():f()});let g=new ResizeObserver(()=>{r&&m()});function _(s){d(),window.dispatchEvent(new CustomEvent(`cafe-conversation-visual`,{detail:{name:s.name}})),r=s,a=0,c=!1,e.classList.add(`dialogue-mode`),document.body.classList.add(`dialogue-open`),e.setAttribute(`aria-label`,`与${s.name}交谈`);let _=Math.min(4,s.chapters+1);t.innerHTML=`<div class="dialogue-stage">
   <svg class="dialogue-filter" aria-hidden="true"><filter id="dialogue-ink"><feTurbulence type="fractalNoise" baseFrequency=".06" numOctaves="2" seed="8" result="grain"/><feDisplacementMap in="SourceGraphic" in2="grain" scale=".45" xChannelSelector="R" yChannelSelector="G"/></filter><filter id="dialogue-leaf-outline"><feMorphology in="SourceAlpha" operator="erode" radius=".65" result="inner"/><feComposite in="SourceGraphic" in2="inner" operator="out"/></filter></svg>
   <aside class="dialogue-person" aria-label="${s.name}，已收藏 ${s.chapters} 段故事"><div class="dialogue-avatar"><span class="dialogue-art portrait-art" style="--portrait:${s.portrait}" role="img" aria-label="${s.name}的水粉头像"></span><div class="dialogue-vine" aria-hidden="true">${Array.from({length:5},(e,t)=>`<i class="vine-node ${t<_?`grown`:``}" style="--node:${t}">${t<_?`<span class="painted-leaf"></span>`:`<span class="bare-twig"></span>`}</i>`).join(``)}</div></div><div class="affinity-leaves" aria-label="相知叶片 ${_}/4">${Array.from({length:4},(e,t)=>`<span class="painted-leaf ${t<_?``:`empty`}" style="--tilt:${t%2?4:-4}deg" aria-hidden="true"></span>`).join(``)}</div></aside>
   <nav class="dialogue-tools" aria-label="对话阅读控制"><button id="dialogue-skip" class="parchment-tab"><span>跳</span><span>过</span></button><button id="dialogue-auto" class="parchment-tab" aria-pressed="false"><i class="painted-leaf" aria-hidden="true"></i><span>自</span><span>动</span></button></nav>
   <section class="dialogue-conversation" aria-label="对话"><div class="dialogue-name"><i class="jute-loop" aria-hidden="true"></i><i class="brass-nail" aria-hidden="true"></i><span>${s.name}</span></div><div class="dialogue-plate"><i class="fern-sprig fern-start" aria-hidden="true"></i><i class="fern-sprig fern-end" aria-hidden="true"></i><p id="dialogue-copy" tabindex="0" aria-live="polite" aria-atomic="true"></p><footer><small id="dialogue-page" aria-hidden="true"></small><button id="dialogue-next">轻点继续</button><button id="reply" hidden></button></footer></div></section>
   <div class="dialogue-exit"><button id="back">返回人物手记</button><button id="dialogue-close">回到小店</button></div><span id="dialogue-status" class="dialogue-sr" role="status"></span>
  </div>`,u(`#dialogue-next`).onclick=p,u(`#dialogue-copy`).onclick=p,u(`#dialogue-skip`).onclick=()=>{l(),a=i.length-1,h()},u(`#dialogue-auto`).onclick=()=>{o=!o,h(),f()},u(`#reply`).onclick=()=>{if(c||a!==i.length-1)return;c=!0,l();let e=r?.onReply;d(),e?.()},u(`#back`).onclick=()=>{let e=r?.onBack;d(),e?.()},u(`#dialogue-close`).onclick=n,g.disconnect(),g.observe(u(`#dialogue-copy`)),m(),requestAnimationFrame(()=>u(`#dialogue-copy`)?.focus({preventScroll:!0}))}return{show:_,cleanup:d}}var wm=new URL(`ahe-watercolor-t06NMOFr.png`,import.meta.url).href,Tm=new URL(`lin-watercolor-DgnR_iV9.png`,import.meta.url).href,Em=new URL(`tang-watercolor-BXOTTQMl.png`,import.meta.url).href,Dm=`glasshouse-stories-v1`,Om=[{id:`pour`,name:`今日手冲`,price:24,icon:2},{id:`honey`,name:`蜂蜜拿铁`,price:32,icon:0},{id:`berry`,name:`莓果可颂`,price:38,icon:12},{id:`tea`,name:`薄荷花园茶`,price:28,icon:3}],km=[{name:`阿禾`,job:`咖啡师`,portrait:1,story:[[`第一杯的温度`,`我以前总想把每杯咖啡做得一模一样。后来才发现，人每天需要的温度都不同。你愿意替我试试新配方吗？`,`当然，慢慢试。`,`honey`],[`留一盏灯`,`这间温室是父亲留下的。他说，下雨的人需要一个能看见天空的地方。我想把这盏灯一直留着。`,`我会一起照顾这间小店。`,`tea`],[`写在菜单背面`,`今天有人说，这里的咖啡像回家。那是我收到过最好的评价。下一杯，也请你帮忙。`,`那就继续开门吧。`,``]]},{name:`林伯`,job:`常客 · 修船匠`,portrait:0,story:[[`靠窗的老座位`,`年轻时我修了很多船，却很少坐船出海。现在最喜欢的旅途，是每天走到这里的这一小段路。`,`今天也替你留着窗边。`,``],[`口袋里的种子`,`我妻子以前喜欢蓝莓。我把她种的那一小盒带来了，也许能做成一道点心，让更多人尝到。`,`让它成为店里的新点心吧。`,`berry`],[`潮水会回来`,`那张靠窗的椅子修好了。我在椅背刻了一片小叶子，她一定会喜欢。谢谢你肯听这些旧事。`,`旧故事，也值得好好收藏。`,``]]},{name:`棠姨`,job:`常客 · 花园照料人`,portrait:2,story:[[`把雨水留下`,`别急着给植物浇水，先摸摸泥土。照顾人也是一样，先听一听，再决定给他什么。`,`我想听听你的花园。`,``],[`春天的信`,`我把薄荷和蜂蜜一起泡茶，就像春天寄来的一封信。你也试试，把香气留在杯子里。`,`把这封信写进菜单吧。`,`tea`],[`小小的花园`,`今天的花开了。院子不需要很大，能容下一把椅子和一个愿意坐下的人，就很好。`,`给我们的庭院再添一点绿。`,``]]}],Am=[{id:`flowers`,name:`庭院花箱`,cost:55,icon:3,place:`庭院`},{id:`rug`,name:`鼠尾草地毯`,cost:75,icon:6,place:`店内`},{id:`lamp`,name:`黄铜阅读灯`,cost:95,icon:2,place:`店内`},{id:`gramophone`,name:`老式唱片机`,cost:135,icon:7,place:`店内`},{id:`lantern`,name:`玻璃花园灯`,cost:110,icon:8,place:`庭院`},{id:`art`,name:`植物挂画`,cost:85,icon:5,place:`店内`}];function jm(){try{let e=JSON.parse(localStorage.getItem(Dm)||`null`);if(e&&Number.isFinite(e.coins)&&Array.isArray(e.chapters)&&e.chapters.length===3&&Array.isArray(e.recipes)&&Array.isArray(e.owned)&&Array.isArray(e.placed))return{coins:Math.max(0,e.coins),earned:e.earned||0,chapters:e.chapters.map(e=>Math.max(0,Math.min(3,Number(e)||0))),recipes:e.recipes.filter(e=>Om.some(t=>t.id===e)),owned:e.owned.filter(e=>Am.some(t=>t.id===e)),placed:e.placed.filter(e=>Am.some(t=>t.id===e)),served:e.served||0}}catch{}return{coins:0,earned:0,chapters:[0,0,0],recipes:[`pour`],owned:[],placed:[],served:0}}function Mm(e){let t=jm(),n=0,r=null,i=t.recipes[0]||`pour`,a=document.createElement(`section`);a.id=`cafe-game`,document.getElementById(`app`).append(a),a.innerHTML=`<div class="cafe-wallet"><span class="coin-art"></span><b id="coins">0</b><span>小店收益</span></div><nav class="game-nav"><button data-open="people">相遇<span>人物故事</span></button><button data-open="menu">菜单<span>今日营业</span></button><button data-open="decor">装扮<span>布置小店</span></button></nav><dialog id="game-dialog"><button class="paper-close" aria-label="关闭">×</button><div id="paper-content"></div></dialog><button class="next-step" id="next-step"></button><div class="brew-progress" hidden>正在为客人准备 <b></b><progress max="8" value="0" aria-label="制作进度"></progress><span class="brew-time">正在准备</span></div>`;let o=a.querySelector(`dialog`),s=a.querySelector(`#paper-content`),c=e=>a.querySelector(e),l=e=>`<span class="item-art" style="--col:${e%5};--row:${Math.floor(e/5)}"></span>`,u=e=>`<img class="portrait encounter-portrait" src="${[Tm,wm,Em][e]}" alt="${[`林伯`,`阿禾`,`棠姨`][e]}的水彩头像" width="83" height="83">`;function d(){try{localStorage.setItem(Dm,JSON.stringify(t))}catch{e.toast(`浏览器未允许保存；本次游玩仍可继续。`)}c(`#coins`).textContent=String(t.coins),e.decorate(t.placed),f()}function f(){let e=t.chapters[0]===0?`和阿禾聊聊，解锁第一道新菜品`:t.served===0?`制作第一单，开始小店营业`:t.owned.length===0?t.coins>=55?`添置花箱，布置你的庭院`:`再接待一单，为花箱攒些金币`:t.chapters.some(e=>e<3)?`还有故事，等你慢慢听`:`故事已收藏，继续经营你的小店`;c(`#next-step`).textContent=`下一件小事 · `+e}c(`#next-step`).onclick=()=>{t.chapters[0]===0?v(0):t.served===0||t.owned.length===0&&t.coins<55?y():t.owned.length===0?x():_()};let p=Cm(o,s,h);function m(){p.cleanup(),o.removeAttribute(`aria-label`),o.open||o.showModal(),e.lock(!0)}function h(){o.close(),e.lock(!1)}a.querySelector(`.paper-close`).addEventListener(`click`,h),o.addEventListener(`close`,()=>e.lock(!1)),o.addEventListener(`click`,e=>{if(e.target===o){let t=o.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&h()}});function g(e,t,n){return`<div class="paper-kicker">${e}</div><h2>${t}</h2><p class="paper-intro">${n}</p>`}function _(){m(),s.innerHTML=g(`PEOPLE OF THE GLASSHOUSE`,`每个人，都带着一个故事。`,`和咖啡师、顾客聊聊天。完成一次交谈后，接待一单客人，再听下一章。`)+km.map((e,n)=>`<button class="person-card" data-person="${n}">${u(e.portrait)}<span><strong>${e.name}<small>${e.job}</small></strong><span class="story-dots">${`●`.repeat(t.chapters[n])}${`○`.repeat(3-t.chapters[n])}</span><em>${t.chapters[n]===3?`故事已收藏`:`听听 TA 的故事 →`}</em></span></button>`).join(``)+`<p class="paper-foot">已完成 ${t.served} 单 · 故事进度和装扮会自动保存在此浏览器</p>`,s.querySelectorAll(`[data-person]`).forEach(e=>e.addEventListener(`click`,()=>v(Number(e.dataset.person))))}function v(r){n=r,m();let i=km[r],a=t.chapters[r],o=a>0&&t.served<a,s=a>=3;p.show({name:i.name,portrait:r,chapters:a,paragraphs:s?i.story.map(e=>e[1]):[o?`先去接待一单客人吧。等你忙完，我们再慢慢聊。`:i.story[a][1]],reply:s?`返回相遇手记`:o?`去看看今日菜单`:i.story[a][2],onBack:_,onReply:()=>{if(s){_();return}if(o){y();return}let r=i.story[a][3];t.chapters[n]++,t.coins+=12,t.earned+=12,r&&!t.recipes.includes(r)&&t.recipes.push(r),d(),e.toast(r?`故事已收藏 · 菜单已更新 · 收到 12 枚心意金币`:`故事已收藏 · 收到 12 枚心意金币`),_()}})}function y(){m(),s.innerHTML=g(`THE DAILY MENU`,`一杯咖啡，换一段好时光。`,`选择一道已解锁菜品，为来店的客人制作。每单完成后自动获得收益。`)+`<div class="recipe-grid">`+Om.map(e=>`<button class="recipe ${t.recipes.includes(e.id)?``:`locked`} ${i===e.id?`chosen`:``}" data-recipe="${e.id}" ${t.recipes.includes(e.id)?``:`disabled`}>${l(e.icon)}<strong>${e.name}</strong><small>${t.recipes.includes(e.id)?e.price+` 金币 / 单`:{honey:`阿禾 · 第一章`,berry:`林伯 · 第二章`,tea:`阿禾或棠姨 · 第二章`}[e.id]}</small></button>`).join(``)+`</div><button class="paper-action" id="serve" ${r?`disabled`:``}>${r?`正在制作，请稍候`:`制作并招待客人`}</button><div class="music-settings"><span>庭院风声 / 馆内轻钢琴</span><label>音量 <input id="music-volume" type="range" min="0" max="1" step="0.05" value="${S.volume}"></label><small id="music-note"></small></div><div class="save-tools"><button id="export-save">导出小店存档</button><label>恢复存档<input id="import-save" type="file" accept=".json,application/json"></label><small>在离线版与在线版之间搬家时，可导出再恢复。</small></div>`,s.querySelectorAll(`[data-recipe]`).forEach(e=>e.addEventListener(`click`,()=>{i=e.dataset.recipe,y()})),s.querySelector(`#serve`).addEventListener(`click`,()=>{r||e.brew()&&(r=i,c(`.brew-progress`).hidden=!1,c(`.brew-progress b`).textContent=Om.find(e=>e.id===i).name,h())});let n=s.querySelector(`#music-note`);n.textContent=S.name+` · `+S.status,s.querySelector(`#music-volume`).addEventListener(`input`,e=>S.setVolume(Number(e.target.value))),s.querySelector(`#export-save`).addEventListener(`click`,()=>{let e=URL.createObjectURL(new Blob([JSON.stringify({format:`glasshouse-v1`,save:t},null,2)],{type:`application/json`})),n=document.createElement(`a`);n.href=e,n.download=`玻璃间-小店存档.json`,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}),s.querySelector(`#import-save`).addEventListener(`change`,async n=>{let a=n.target.files?.[0];if(a){if(r)e.toast(`请等当前订单完成后恢复存档。`);else try{if(a.size>1e5)throw Error();let n=JSON.parse(await a.text()),r=n.save;if(n.format!==`glasshouse-v1`||!r||!Number.isSafeInteger(r.coins)||r.coins<0||!Number.isSafeInteger(r.served)||r.served<0||!Number.isSafeInteger(r.earned)||r.earned<0||!Array.isArray(r.chapters)||r.chapters.length!==3||!r.chapters.every(e=>Number.isInteger(e)&&e>=0&&e<=3)||!Array.isArray(r.recipes)||!r.recipes.includes(`pour`)||!r.recipes.every(e=>Om.some(t=>t.id===e))||!Array.isArray(r.owned)||!r.owned.every(e=>Am.some(t=>t.id===e))||!Array.isArray(r.placed)||!r.placed.every(e=>r.owned.includes(e)))throw Error();Object.assign(t,{coins:r.coins,earned:r.earned,served:r.served,chapters:r.chapters,recipes:[...new Set(r.recipes)],owned:[...new Set(r.owned)],placed:[...new Set(r.placed)]}),i=t.recipes[0],d(),e.toast(`小店存档已恢复。`),y()}catch{e.toast(`这不是有效的小店存档，当前进度保持不变。`)}}})}function b(){return e.winter?.active()?`<section class="winter-dressing"><h3>冬日布置</h3><p>每件装饰可独立摆放。可移动的摆件有三个安全位置，选择会自动保存。</p><div>`+e.winter.items().map(e=>`<div class="winter-row"><span>${e.name}<small>${e.movable?`位置 `+String.fromCharCode(65+e.slot):`固定挂点`}</small></span><button data-winter="${e.id}" aria-pressed="${e.placed}">${e.placed?`收起`:`摆放`}</button>${e.movable?`<button data-winter-move="${e.id}" ${e.placed?``:`disabled`}>换位置</button>`:``}</div>`).join(``)+`</div><button class="paper-link" id="winter-preview">回到场景看效果 →</button></section>`:``}function x(){m(),s.innerHTML=g(`MAKE IT YOUR OWN`,`把喜欢，添进小店里。`,`可用金币 ${t.coins} · 购买后会出现在对应场景，也可以随时收起、重新摆放。`)+b()+`<div class="decor-grid">`+Am.map(e=>`<article class="decor-card"><span class="decor-art" style="--col:${e.icon%3};--row:${Math.floor(e.icon/3)}"></span><strong>${e.name}</strong><small>${e.place} · ${e.cost} 金币</small><button data-buy="${e.id}" ${!t.owned.includes(e.id)&&t.coins<e.cost?`disabled`:``}>${t.owned.includes(e.id)?t.placed.includes(e.id)?`收起装扮`:`摆放到`+e.place:t.coins<e.cost?`金币不足`:`购买并摆放`}</button></article>`).join(``)+`</div>`,s.querySelectorAll(`[data-buy]`).forEach(n=>n.addEventListener(`click`,()=>{let r=Am.find(e=>e.id===n.dataset.buy);if(t.owned.includes(r.id))t.placed.includes(r.id)?t.placed=t.placed.filter(e=>e!==r.id):t.placed.push(r.id);else{if(t.coins<r.cost)return;t.coins-=r.cost,t.owned.push(r.id),t.placed.push(r.id),e.toast(r.name+`已添置到`+r.place)}d(),x()})),s.querySelectorAll(`[data-winter]`).forEach(t=>t.addEventListener(`click`,()=>{e.winter.toggle(t.dataset.winter),x()})),s.querySelectorAll(`[data-winter-move]`).forEach(t=>t.addEventListener(`click`,()=>{e.winter.move(t.dataset.winterMove),x()})),s.querySelector(`#winter-preview`)?.addEventListener(`click`,h)}a.querySelectorAll(`[data-open]`).forEach(e=>e.addEventListener(`click`,()=>{({people:_,menu:y,decor:x}[e.dataset.open]||_)()}));let S=new Sm(e.inside,e.raining||(()=>!1),()=>{let e=document.getElementById(`music-note`);e&&(e.textContent=(S.name?S.name+` · `:``)+S.status),window.dispatchEvent(new CustomEvent(`cafe-music-change`,{detail:S.snapshot()}))});function C(){S.sync()}return e.talkTargets(v),d(),{save:t,talk:v,menu:y,syncMusic:C,enterMusic:()=>S.enter(),musicSnapshot:()=>S.snapshot(),tick(e){let t=a.querySelector(`progress`);t.value=8-e,c(`.brew-time`).textContent=e>4?`正在研磨与准备 · `+Math.ceil(e)+` 秒`:e>1?`慢慢冲煮 · `+Math.ceil(e)+` 秒`:`准备送到客人桌边`},toggleMusic(){return S.toggle()},complete(){if(!r)return;let n=Om.find(e=>e.id===r);t.coins+=n.price,t.earned+=n.price,t.served++,r=null,c(`.brew-progress`).hidden=!0,d(),e.toast(`${n.name}已送达 · 收益 +${n.price} 金币`)}}}var Nm={type:`change`},Pm={type:`start`},Fm={type:`end`},Im=new Gr,Lm=new Rr,Rm=Math.cos(70*R.DEG2RAD),zm=new B,Bm=2*Math.PI,Vm={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hm=1e-6,Um=class extends Js{constructor(n,r=null){super(n,r),this.state=Vm.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Nt,this._lastTargetPosition=new B,this._quat=new Nt().setFromUnitVectors(n.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qs,this._sphericalDelta=new qs,this._scale=1,this._panOffset=new B,this._rotateStart=new z,this._rotateEnd=new z,this._rotateDelta=new z,this._panStart=new z,this._panEnd=new z,this._panDelta=new z,this._dollyStart=new z,this._dollyEnd=new z,this._dollyDelta=new z,this._dollyDirection=new B,this._mouse=new z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gm.bind(this),this._onPointerDown=Wm.bind(this),this._onPointerUp=Km.bind(this),this._onContextMenu=$m.bind(this),this._onMouseWheel=Ym.bind(this),this._onKeyDown=Xm.bind(this),this._onTouchStart=Zm.bind(this),this._onTouchMove=Qm.bind(this),this._onMouseDown=qm.bind(this),this._onMouseMove=Jm.bind(this),this._interceptControlDown=eh.bind(this),this._interceptControlUp=th.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Vm.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nm),this.update(),this.state=Vm.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;zm.copy(t).sub(this.target),zm.applyQuaternion(this._quat),this._spherical.setFromVector3(zm),this.autoRotate&&this.state===Vm.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Bm:n>Math.PI&&(n-=Bm),r<-Math.PI?r+=Bm:r>Math.PI&&(r-=Bm),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(zm.setFromSpherical(this._spherical),zm.applyQuaternion(this._quatInverse),t.copy(this.target).add(zm),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=zm.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new B(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new B(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=zm.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Im.origin.copy(this.object.position),Im.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Im.direction))<Rm?this.object.lookAt(this.target):(Lm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Im.intersectPlane(Lm,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Hm||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hm||this._lastTargetPosition.distanceToSquared(this.target)>Hm?(this.dispatchEvent(Nm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Bm/60/60*this.autoRotateSpeed:Bm/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zm.setFromMatrixColumn(t,0),zm.multiplyScalar(-e),this._panOffset.add(zm)}_panUp(e,t){this.screenSpacePanning===!0?zm.setFromMatrixColumn(t,1):(zm.setFromMatrixColumn(t,0),zm.crossVectors(this.object.up,zm)),zm.multiplyScalar(e),this._panOffset.add(zm)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;zm.copy(r).sub(this.target);let i=zm.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bm*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bm*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bm*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bm*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bm*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bm*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bm*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bm*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new z,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Wm(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Gm(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Km(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Fm),this.state=Vm.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function qm(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Vm.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Vm.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Vm.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Vm.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Vm.PAN}break;default:this.state=Vm.NONE}this.state!==Vm.NONE&&this.dispatchEvent(Pm)}function Jm(e){switch(this.state){case Vm.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Vm.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Vm.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Ym(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Vm.NONE&&(e.preventDefault(),this.dispatchEvent(Pm),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Fm))}function Xm(e){this.enabled!==!1&&this._handleKeyDown(e)}function Zm(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1){this.state=Vm.NONE;break}this._handleTouchStartRotate(e),this.state=Vm.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1){this.state=Vm.NONE;break}this._handleTouchStartPan(e),this.state=Vm.TOUCH_PAN;break;default:this.state=Vm.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Vm.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Vm.TOUCH_DOLLY_ROTATE;break;default:this.state=Vm.NONE}break;default:this.state=Vm.NONE}this.state!==Vm.NONE&&this.dispatchEvent(Pm)}function Qm(e){switch(this._trackPointer(e),this.state){case Vm.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Vm.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Vm.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Vm.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Vm.NONE}}function $m(e){this.enabled!==!1&&e.preventDefault()}function eh(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function th(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var nh=class extends Bn{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new Ji;e.deleteAttribute(`uv`);let t=new Mo({side:1}),n=new Mo,r=new xs(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new ii(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new gi(e,n,6),o=new jn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new ii(e,rh(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new ii(e,rh(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new ii(e,rh(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new ii(e,rh(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ii(e,rh(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ii(e,rh(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function rh(e){return new Fo({color:0,emissive:16777215,emissiveIntensity:e})}var ih={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},ah=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},oh=new Ss(-1,1,1,-1,0,1),sh=new class extends Pr{constructor(){super(),this.setAttribute(`position`,new Sr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Sr([0,2,0,0,2,0],2))}},ch=class{constructor(e){this._mesh=new ii(sh,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,oh)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},lh=class extends ah{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ao?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Do.clone(e.uniforms),this.material=new Ao({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ch(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},uh=class extends ah{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},dh=class extends ah{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},fh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new z);this._width=n.width,this._height=n.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:v}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lh(ih),this.copyPass.material.blending=0,this.timer=new ks}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}uh!==void 0&&(r instanceof uh?n=!0:r instanceof dh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},ph=class extends ah{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new V}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},mh={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new z},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new rn},cameraProjectionMatrixInverse:{value:new rn},cameraWorldMatrix:{value:new rn},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},hh={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},gh={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function _h(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),r=vh(t),i=r.length,a=new Uint8Array(i*4);for(let e=0;e<i;++e){let t=r[e],n=2*Math.PI*t/i,o=new B(Math.cos(n),Math.sin(n),0).normalize();a[e*4]=(o.x*.5+.5)*255,a[e*4+1]=(o.y*.5+.5)*255,a[e*4+2]=127,a[e*4+3]=255}let o=new si(a,t,t);return o.wrapS=n,o.wrapT=n,o.needsUpdate=!0,o}function vh(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var yh={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:bh(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new z},cameraProjectionMatrixInverse:{value:new rn},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function bh(e,t,n){let r=xh(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function xh(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new B(Math.cos(a),Math.sin(a),o))}return r}var Sh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,ee=g-1+3*d,te=_-1+3*d,ne=v-1+3*d,j=c&255,re=l&255,M=u&255,ie=this.perm[j+this.perm[re+this.perm[M]]]%12,ae=this.perm[j+y+this.perm[re+b+this.perm[M+x]]]%12,oe=this.perm[j+S+this.perm[re+C+this.perm[M+w]]]%12,se=this.perm[j+1+this.perm[re+1+this.perm[M+1]]]%12,N=.6-g*g-_*_-v*v;N<0?r=0:(N*=N,r=N*N*this._dot3(this.grad3[ie],g,_,v));let ce=.6-T*T-E*E-D*D;ce<0?i=0:(ce*=ce,i=ce*ce*this._dot3(this.grad3[ae],T,E,D));let le=.6-O*O-k*k-A*A;le<0?a=0:(le*=le,a=le*le*this._dot3(this.grad3[oe],O,k,A));let P=.6-ee*ee-te*te-ne*ne;return P<0?o=0:(P*=P,o=P*P*this._dot3(this.grad3[se],ee,te,ne)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,ee=w>D?4:0,te=T>D?2:0,ne=+(E>D),j=O+k+A+ee+te+ne,re=+(a[j][0]>=3),M=+(a[j][1]>=3),ie=+(a[j][2]>=3),ae=+(a[j][3]>=3),oe=+(a[j][0]>=2),se=+(a[j][1]>=2),N=+(a[j][2]>=2),ce=+(a[j][3]>=2),le=+(a[j][0]>=1),P=+(a[j][1]>=1),F=+(a[j][2]>=1),ue=+(a[j][3]>=1),de=w-re+c,fe=T-M+c,pe=E-ie+c,me=D-ae+c,he=w-oe+2*c,ge=T-se+2*c,_e=E-N+2*c,ve=D-ce+2*c,ye=w-le+3*c,be=T-P+3*c,xe=E-F+3*c,Se=D-ue+3*c,Ce=w-1+4*c,we=T-1+4*c,Te=E-1+4*c,Ee=D-1+4*c,De=h&255,Oe=g&255,ke=_&255,Ae=v&255,je=o[De+o[Oe+o[ke+o[Ae]]]]%32,Me=o[De+re+o[Oe+M+o[ke+ie+o[Ae+ae]]]]%32,Ne=o[De+oe+o[Oe+se+o[ke+N+o[Ae+ce]]]]%32,I=o[De+le+o[Oe+P+o[ke+F+o[Ae+ue]]]]%32,Pe=o[De+1+o[Oe+1+o[ke+1+o[Ae+1]]]]%32,Fe=.6-w*w-T*T-E*E-D*D;Fe<0?l=0:(Fe*=Fe,l=Fe*Fe*this._dot4(i[je],w,T,E,D));let Ie=.6-de*de-fe*fe-pe*pe-me*me;Ie<0?u=0:(Ie*=Ie,u=Ie*Ie*this._dot4(i[Me],de,fe,pe,me));let L=.6-he*he-ge*ge-_e*_e-ve*ve;L<0?d=0:(L*=L,d=L*L*this._dot4(i[Ne],he,ge,_e,ve));let Le=.6-ye*ye-be*be-xe*xe-Se*Se;Le<0?f=0:(Le*=Le,f=Le*Le*this._dot4(i[I],ye,be,xe,Se));let Re=.6-Ce*Ce-we*we-Te*Te-Ee*Ee;return Re<0?p=0:(Re*=Re,p=Re*Re*this._dot4(i[Pe],Ce,we,Te,Ee)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Ch=class e extends ah{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=_h(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new en(this.width,this.height,{type:v,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ao({defines:Object.assign({},mh.defines),uniforms:Do.clone(mh.uniforms),vertexShader:mh.vertexShader,fragmentShader:mh.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Po,this.normalMaterial.blending=0,this.pdMaterial=new Ao({defines:Object.assign({},yh.defines),uniforms:Do.clone(yh.uniforms),vertexShader:yh.vertexShader,fragmentShader:yh.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ao({defines:Object.assign({},hh.defines),uniforms:Do.clone(hh.uniforms),vertexShader:hh.vertexShader,fragmentShader:hh.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ao({uniforms:Do.clone(ih.uniforms),vertexShader:ih.vertexShader,fragmentShader:ih.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new Ao({uniforms:Do.clone(gh.uniforms),vertexShader:gh.vertexShader,fragmentShader:gh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new ch(null),this._originalClearColor=new V,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let e=new Gi;e.format=O,e.type=x,this.normalRenderTarget=new en(this.width,this.height,{minFilter:a,magFilter:a,type:v,depthTexture:e})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=+!!this.normalTexture;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=bh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Sh,r=e*e*4,i=new Uint8Array(r);for(let n=0;n<e;n++)for(let r=0;r<e;r++){let a=n,o=r;i[(n*e+r)*4]=(t.noise(a,o)*.5+.5)*255,i[(n*e+r)*4+1]=(t.noise(a+e,o)*.5+.5)*255,i[(n*e+r)*4+2]=(t.noise(a,o+e)*.5+.5)*255,i[(n*e+r)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let a=new si(i,e,e,E,d);return a.wrapS=n,a.wrapT=n,a.needsUpdate=!0,a}};Ch.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var wh={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new V(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Th=class e extends ah{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new z(256,256):new z(e.x,e.y),this.clearColor=new V(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new en(i,a,{type:v,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new en(i,a,{type:v,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new en(i,a,{type:v,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=wh;this.highPassUniforms=Do.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ao({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Do.clone(ih.uniforms),this.blendMaterial=new Ao({uniforms:this.copyUniforms,vertexShader:ih.vertexShader,fragmentShader:ih.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new V,this._oldClearAlpha=1,this._basic=new Kr,this._fsQuad=new ch(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Ao({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new z(.5,.5)},direction:{value:new z(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ao({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Th.BlurDirectionX=new z(1,0),Th.BlurDirectionY=new z(0,1);var Eh={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Dh=class extends ah{constructor(){super(),this.isOutputPass=!0,this.uniforms=Do.clone(Eh.uniforms),this.material=new jo({name:Eh.name,uniforms:this.uniforms,vertexShader:Eh.vertexShader,fragmentShader:Eh.fragmentShader}),this._fsQuad=new ch(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Vt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Oh=class extends Ch{hidden=[];_overrideVisibility(){this.scene.traverse(e=>{if(e.visible){if(e instanceof ji||e instanceof Vi)this.hidden.push(e),e.visible=!1;else if(e instanceof ii){let t=e.material;(t.transparent||!t.visible)&&(this.hidden.push(e),e.visible=!1)}}})}_restoreVisibility(){for(let e of this.hidden)e.visible=!0;this.hidden.length=0}};function kh(e,t){return Math.max(1,Math.min(devicePixelRatio||1,2,Math.sqrt(3e6/Math.max(1,e*t))))}function Ah(e,t,n){let r=new en(innerWidth,innerHeight,{type:v});r.samples=4;let i=new fh(e,r);i.setPixelRatio(e.getPixelRatio());let a=new ph(t,n);i.addPass(a);let o=new Oh(t,n);o.updateGtaoMaterial({radius:.28,thickness:1,distanceExponent:1.7,distanceFallOff:1,scale:.85,samples:12}),o.updatePdMaterial({radius:5,rings:2,samples:12}),o.blendIntensity=.72,i.addPass(o);let s=new fh(e,new en(1,1,{type:v}));s.renderToScreen=!1;let c=new ph(t,n),l=new Th(new z(1,1),.5,.25,.8);s.addPass(c),s.addPass(l);let u=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,d=new lh({uniforms:{tDiffuse:{value:null},glow:{value:null},amount:{value:0}},vertexShader:u,fragmentShader:`uniform sampler2D tDiffuse,glow;uniform float amount;varying vec2 vUv;void main(){gl_FragColor=texture2D(tDiffuse,vUv)+texture2D(glow,vUv)*amount;}`});d.uniforms.glow.value=s.renderTarget2.texture,i.addPass(d),i.addPass(new Dh);let f=new lh({uniforms:{tDiffuse:{value:null},glow:{value:null},amount:{value:0}},vertexShader:u,fragmentShader:`uniform sampler2D tDiffuse,glow;uniform float amount;varying vec2 vUv;void main(){vec4 base=texture2D(tDiffuse,vUv);vec3 g=texture2D(glow,vUv).rgb;float hot=smoothstep(.02,.2,max(g.r,max(g.g,g.b)));vec3 lifted=base.rgb+vec3(.008,.009,.014)*pow(1.0-base.rgb,vec3(2.0));vec3 winter=mix(min(lifted,vec3(.92)),lifted,hot);gl_FragColor=vec4(mix(base.rgb,winter,amount),base.a);}`});f.uniforms.glow.value=s.renderTarget2.texture,i.addPass(f);let p=new Kr({color:0,side:2}),m=0,h=(t,n)=>{let r=e.getPixelRatio();i.setPixelRatio(r),i.setSize(t,n),o.setSize(Math.ceil(t*r*.8),Math.ceil(n*r*.8)),s.setSize(Math.ceil(t*.65),Math.ceil(n*.65))},g=e.getSize(new z);return h(g.x,g.y),{composer:i,resize:h,setSnow(e){m=e,o.blendIntensity=.72*(1-.5*e),d.enabled=f.enabled=e>.01,d.uniforms.amount.value=.55*e,f.uniforms.amount.value=e},render(e){if(a.camera=e,o.camera!==e&&(o.camera=e,o.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+(e instanceof _s),o.gtaoMaterial.needsUpdate=!0),m>.01){c.camera=e;let n=t.background,r=new Map,i=[];t.background=new V(0),t.traverse(e=>{if(e.visible){if(e instanceof Vi||e instanceof ji)i.push(e),e.visible=!1;else if(e instanceof ii){let t=e.material;if(t.userData.winterGlow)return;t.transparent||!t.visible?(i.push(e),e.visible=!1):(r.set(e,e.material),e.material=p)}}}),s.render(),t.background=n;for(let[e,t]of r)e.material=t;i.forEach(e=>e.visible=!0)}i.render()}}}var jh=e=>document.getElementById(e),Mh={sound:`<path d="M9 4 5 7H2v6h3l4 3V4Z"/><path d="M13 6a6 6 0 0 1 0 8m2-11a10 10 0 0 1 0 14"/>`,mute:`<path d="M9 4 5 7H2v6h3l4 3V4Z"/><path d="m13 7 6 6m0-6-6 6"/>`,help:`<circle cx="10" cy="10" r="8"/><path d="M7.6 7.5a2.5 2.5 0 1 1 3.8 2.1c-1.4.7-1.4 1-1.4 2M10 14.5v.1"/>`,rotate:`<path d="M17 8a7 7 0 0 0-12-3L2 8m0-5v5h5m-4 4a7 7 0 0 0 12 3l3-3m0 5v-5h-5"/>`,reset:`<path d="m2 9 8-7 8 7M4 8v10h12V8M8 18v-6h4v6"/>`,light:`<circle cx="10" cy="10" r="3.5"/><path d="M10 1v2m0 14v2M1 10h2m14 0h2M3.6 3.6 5 5m10 10 1.4 1.4M3.6 16.4 5 15M15 5l1.4-1.4"/>`,moon:`<path d="M17.5 12.3A8 8 0 0 1 7.7 2.5a8 8 0 1 0 9.8 9.8Z"/>`,photo:`<path d="M2 6h4l1.5-3h5L14 6h4v11H2Z"/><circle cx="10" cy="11" r="3.5"/>`},Nh=e=>`<svg viewBox="0 0 20 20" aria-hidden="true">${Mh[e]}</svg>`;jh(`sound`).innerHTML=Nh(`mute`),jh(`help`).innerHTML=Nh(`help`);for(let e of[`rotate`,`reset`,`light`,`photo`])jh(e+`-icon`).innerHTML=Nh(e);var $={weather:`sun`,rain:!1,gardenLit:!0,mode:`outside`,time:0,paused:!1,night:!1,auto:!1,order:0,cups:0,frames:0,transition:!1,ready:!1,fps:60,sound:!1},Ph=jh(`world`),Fh=Ph.clientWidth,Ih=Ph.clientHeight,Lh;try{Lh=new sd({antialias:!0,alpha:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!0})}catch{throw jh(`loading`).innerHTML=`<p>浏览器暂时无法开启 3D</p><span>请开启硬件加速，或使用最新版 Safari / Chrome。</span>`,Error(`WebGL unavailable`)}Lh.setPixelRatio(kh(Fh,Ih)),Lh.setSize(Fh,Ih),Lh.shadowMap.enabled=!0,Lh.shadowMap.type=1,Lh.toneMapping=4,Lh.toneMappingExposure=1,Lh.outputColorSpace=Be,Lh.info.autoReset=!1,Ph.append(Lh.domElement);var Rh=new Bn,zh=new V(15920870);Rh.background=zh;var Bh=new vc(Lh),Vh=new nh;Rh.environment=Bh.fromScene(Vh,.05).texture,Rh.environmentIntensity=.52,Vh.dispose(),Bh.dispose();var Hh=new as(16775143,12631206,1.3);Rh.add(Hh);var Uh=new ws(16772819,3.3);Uh.position.set(-5,10,7),Uh.castShadow=!0,Uh.shadow.mapSize.set(2048,2048),Uh.shadow.camera.left=-9,Uh.shadow.camera.right=9,Uh.shadow.camera.top=9,Uh.shadow.camera.bottom=-9,Uh.shadow.camera.near=.5,Uh.shadow.camera.far=35,Uh.shadow.normalBias=.025,Uh.shadow.bias=-12e-5,Uh.shadow.radius=4,Rh.add(Uh),Uh.target.position.set(0,0,0),Rh.add(Uh.target);var Wh=new ws(15988205,.8);Wh.position.set(5,5,-6),Rh.add(Wh);var Gh=new ii(new _o(200,200),new Mo({color:15920870,roughness:1}));Gh.rotation.x=-Math.PI/2,Gh.position.y=-.205,Gh.receiveShadow=!1,Rh.add(Gh);var Kh=document.createElement(`canvas`);Kh.width=Kh.height=256;var qh=Kh.getContext(`2d`),Jh=qh.createRadialGradient(128,128,12,128,128,128);Jh.addColorStop(0,`rgba(72,69,48,.22)`),Jh.addColorStop(.55,`rgba(72,69,48,.12)`),Jh.addColorStop(1,`rgba(72,69,48,0)`),qh.fillStyle=Jh,qh.fillRect(0,0,256,256);var Yh=new ii(new _o(15,13),new Kr({map:new Wi(Kh),transparent:!0,depthWrite:!1}));Yh.rotation.x=-Math.PI/2,Yh.position.set(.4,-.19,.5),Yh.visible=!1,Rh.add(Yh);var Xh=lp(Rh),Zh=Sf(Xh);window.addEventListener(`cafe-conversation-visual`,e=>Zh.conversation(e.detail.name));var Qh=dp(Rh,Xh),$h=am(Rh,Xh),eg=sm(Rh),tg=ym(Rh,Xh),ng=bm(Rh),rg=fp(Rh),ig=xm(Rh),ag=Yd(Rh,Lh,Xh,rg.uniforms),og=new Ss(-10,10,7,-7,.1,2e3),sg=new _s(67,Fh/Ih,.025,80),cg=og,lg=Ah(Lh,Rh,cg),ug=new Um(og,Lh.domElement);ug.enableDamping=!0,ug.dampingFactor=.065,ug.enablePan=!1,ug.minPolarAngle=.001,ug.maxPolarAngle=Math.PI/2,ug.minZoom=.16,ug.maxZoom=3.2,ug.rotateSpeed=.65,ug.zoomSpeed=.8,ug.autoRotateSpeed=1;var dg=new om(sg,Lh.domElement);Lh.domElement.addEventListener(`wheel`,e=>{$.mode===`inside`&&dg.enabled&&(e.preventDefault(),sg.zoom=R.clamp(sg.zoom*Math.exp(-e.deltaY*.001),.8,1.6),sg.updateProjectionMatrix())},{passive:!1});var fg=new Map,pg=!1,mg=0;Lh.domElement.addEventListener(`pointerdown`,e=>{if(e.pointerType===`touch`&&$.mode===`inside`&&(fg.set(e.pointerId,new z(e.clientX,e.clientY)),fg.size===2)){pg=!0;let e=[...fg.values()];mg=e[0].distanceTo(e[1])}}),Lh.domElement.addEventListener(`pointermove`,e=>{if(fg.has(e.pointerId)&&(fg.get(e.pointerId).set(e.clientX,e.clientY),fg.size===2&&dg.enabled)){let e=[...fg.values()],t=e[0].distanceTo(e[1]);mg>0&&(sg.zoom=R.clamp(sg.zoom*t/mg,.8,1.6),sg.updateProjectionMatrix()),mg=t}});for(let e of[`pointerup`,`pointercancel`])Lh.domElement.addEventListener(e,e=>{fg.delete(e.pointerId),fg.size<2&&(mg=0),fg.size===0&&setTimeout(()=>pg=!1,0)});var hg=ug;function gg(){let e=hg.enableDamping;hg.enableDamping=!1,hg.update(),$.mode===`outside`?(jh(`island-view`).setAttribute(`aria-pressed`,`false`),ug.target.set(0,1.8,0),og.position.set(34,1.8+Math.hypot(34,34)*Math.tan(R.degToRad(25)),34),og.zoom=matchMedia(`(max-width:600px)`).matches?.85:.75,og.updateProjectionMatrix()):dg.stand(),hg.update(),hg.enableDamping=e}jh(`island-view`).onclick=()=>{if($.mode!==`outside`)return;let e=og.zoom>.4;if(e){let e=new B(-1.6,1.8,4.5).sub(ug.target);og.position.add(e),ug.target.add(e),og.zoom=.3,og.updateProjectionMatrix(),ug.update()}else gg();jh(`island-view`).setAttribute(`aria-pressed`,String(e))};function _g(){Fh=Ph.clientWidth,Ih=Ph.clientHeight;let e=Fh,t=Ih,n=e/t;Lh.setPixelRatio(kh(e,t)),Lh.setSize(e,t);let r=18.5,i=r*Math.max(1,n),a=r/Math.min(1,n);og.left=-i/2,og.right=i/2,og.top=a/2,og.bottom=-a/2,og.updateProjectionMatrix(),sg.aspect=n,sg.filmGauge=43,sg.setFocalLength(24),sg.updateProjectionMatrix(),lg.resize(Fh,Ih),ag.resize(Fh,Ih)}_g(),gg(),window.addEventListener(`resize`,_g),new ResizeObserver(_g).observe(Ph);var vg=jh(`door-hint`),yg=jh(`object-hint`),bg=new Ws,xg=new z,Sg=new B,Cg=Xh.hotspots,wg=0;function Tg(e){jh(`toast`).textContent=e,jh(`toast`).classList.add(`visible`),clearTimeout(wg),wg=window.setTimeout(()=>jh(`toast`).classList.remove(`visible`),3800)}async function Eg(e){$.transition||$.mode===e||(e===`inside`&&zg.enterMusic(),$.transition=!0,jh(`fade`).classList.add(`show`),await new Promise(e=>setTimeout(e,420)),$.mode=e,$.auto=!1,jh(`rotate`).setAttribute(`aria-pressed`,`false`),ug.enabled=e===`outside`,dg.enabled=e===`inside`,hg=e===`outside`?ug:dg,cg=e===`outside`?og:sg,ug.autoRotate=!1,document.body.classList.toggle(`scene-interior`,e===`inside`),jh(`outside`).classList.toggle(`active`,e===`outside`),jh(`inside`).classList.toggle(`active`,e===`inside`),jh(`outside`).setAttribute(`aria-pressed`,String(e===`outside`)),jh(`inside`).setAttribute(`aria-pressed`,String(e===`inside`)),jh(`scene-title`).textContent=e===`outside`?`把时光，留在玻璃间。`:`欢迎，坐一会儿。`,jh(`scene-copy`).textContent=e===`outside`?`一座会呼吸的温室咖啡馆`:`黄铜的温度，和刚磨好的咖啡香`,jh(`enter`).innerHTML=e===`outside`?`推门，喝杯咖啡 <span>↗</span>`:`回到庭院 <span>↗</span>`,jh(`gesture`).textContent=e===`outside`?`拖动环视 · 滚轮缩放`:`定点环视 · 滚轮缩放 · 点击圆桌坐下`,vg.hidden=e===`inside`,yg.hidden=!0,Xh.door.rotation.y=e===`inside`?-.9:0,_g(),gg(),Lg(),zg.syncMusic(),jh(`fade`).classList.remove(`show`),$.transition=!1,e===`inside`&&Tg(`欢迎来到玻璃间。点阿禾聊聊，或打开菜单招待客人。`))}function Dg(){$.order>0?Tg(`正在为你慢慢冲煮，请稍等片刻。`):($.order=8,Tg(`咖啡师：一杯今日手冲，马上就好。`),Rg())}function Og(e){if(e===`garden`)Tg(`尤加利的香气，混着石板缝里的青草味。`);else if(e===`lantern`)$.gardenLit=!$.gardenLit,Tg($.gardenLit?`小灯已亮，替你留着这一点暖。`:`小灯熄了，听一会儿风吧。`);else if(e.startsWith(`seat`)){if($.mode===`outside`){Eg(`inside`);return}let t=Number(e.slice(4));if(t===2&&$.weather===`snow`){Tg(`林伯正坐在窗边，旁边两张椅子为你留着。`);return}dg.sit(t),jh(`gesture`).textContent=`坐着环视 · 拖动看四周 · 复位回到站立`}else if(e.startsWith(`person`))zg.talk(Number(e.slice(6)));else{if(e===`door`&&Eg($.mode===`outside`?`inside`:`outside`),e===`coffee`&&($.mode===`outside`?Eg(`inside`):zg.menu()),e===`table`){if($.mode===`outside`){Eg(`inside`);return}dg.sit(),jh(`gesture`).textContent=`坐着环视 · 拖动看四周 · 复位回到站立`,Tg(`坐一会儿吧。拖动可以环视房间，点击复位重新站起。`)}e===`sign`&&Tg(`今日手冲 · 浅烘焙 / 花香 / 柑橘。小店营业中。`)}}function kg(e,t){let n=Lh.domElement.getBoundingClientRect();return xg.set((e-n.left)/n.width*2-1,-(t-n.top)/n.height*2+1),bg.setFromCamera(xg,cg),bg.intersectObjects(Cg.map(e=>e.mesh),!1)[0]?.object.userData.hit}var Ag={x:0,y:0};Lh.domElement.addEventListener(`pointerdown`,e=>{Ag={x:e.clientX,y:e.clientY},yg.hidden=!0}),Lh.domElement.addEventListener(`pointerup`,e=>{if(Math.hypot(e.clientX-Ag.x,e.clientY-Ag.y)>7||$.transition||pg)return;let t=kg(e.clientX,e.clientY);t&&Og(t)}),Lh.domElement.addEventListener(`pointermove`,e=>{if(e.buttons){yg.hidden=!0;return}let t=kg(e.clientX,e.clientY);if(Lh.domElement.style.cursor=t?`pointer`:`grab`,t&&t!==`door`){yg.textContent=Cg.find(e=>e.id===t).label;let n=Ph.getBoundingClientRect();yg.style.left=e.clientX-n.left+`px`,yg.style.top=e.clientY-n.top+`px`,yg.hidden=!1}else yg.hidden=!0}),Lh.domElement.addEventListener(`pointerleave`,()=>yg.hidden=!0),jh(`weather-toggle`).onclick=()=>{let e=[`sun`,`rain`,`snow`];$.weather=e[(e.indexOf($.weather)+1)%3],$.rain=$.weather===`rain`,jh(`weather-toggle`).textContent=$.weather===`sun`?`☀ 晴天`:$.rain?`☂ 雨天`:`❄ 雪天`,jh(`weather-toggle`).setAttribute(`aria-label`,`当前${$.weather===`sun`?`晴天`:$.rain?`雨天`:`雪天`}，点击切换天气`),jh(`weather-toggle`).setAttribute(`aria-pressed`,String($.weather!==`sun`)),document.body.classList.toggle(`rainy`,$.rain),document.body.classList.toggle(`snowy`,$.weather===`snow`),zg.syncMusic(),Tg($.weather===`snow`?`雪轻轻落下，门前留了一条回家的小路。`:$.rain?`雨落下来了，为你撑开庭院的伞。`:`天空放晴了，收起伞，晒一会儿太阳。`)},jh(`outside`).onclick=()=>Eg(`outside`),jh(`inside`).onclick=()=>Eg(`inside`),jh(`door-hint`).onclick=()=>Eg(`inside`),jh(`enter`).onclick=()=>Eg($.mode===`outside`?`inside`:`outside`),jh(`rotate`).onclick=()=>{$.mode===`inside`?Tg(`店内可以拖动视线。回到庭院可开启 360° 环绕。`):($.auto=!$.auto,ug.autoRotate=$.auto,jh(`rotate`).setAttribute(`aria-pressed`,String($.auto)),Tg($.auto?`绕着小店，慢慢看一圈。`:`已停止环绕，可自由拖动。`))},jh(`reset`).onclick=()=>{gg(),$.mode===`inside`&&(jh(`gesture`).textContent=`定点环视 · 滚轮缩放 · 点击圆桌坐下`),Tg(`回到最初的视角。`)};var jg=0,Mg=0;jh(`light`).onclick=()=>{$.weather===`snow`?Tg(`雪天保持柔和的日间光线。`):($.night=!$.night,jg=+!!$.night,jh(`light`).setAttribute(`aria-pressed`,String($.night)),jh(`light-icon`).innerHTML=Nh($.night?`moon`:`light`),jh(`light-label`).textContent=$.night?`暮色`:`日光`,jh(`time-label`).textContent=$.night?`傍晚 · 18:08`:`午后 · 15:24`,Tg($.night?`傍晚的灯，已为你留好。`:`又是一个有阳光的午后。`))},jh(`photo`).onclick=()=>{lg.render(cg);let e=document.createElement(`a`);e.download=`玻璃间-${$.mode===`outside`?`庭院`:`店内`}-${Date.now()}.png`,e.href=Lh.domElement.toDataURL(`image/png`),e.click(),Tg(`已保存这片刻的风景。`)};var Ng=jh(`guide`);jh(`help`).onclick=()=>{Ng.showModal(),hg.enabled=!1},jh(`close-guide`).onclick=()=>Ng.close(),Ng.addEventListener(`close`,()=>hg.enabled=!0),Ng.addEventListener(`click`,e=>{if(e.target===Ng){let t=Ng.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&Ng.close()}}),window.addEventListener(`keydown`,e=>{document.querySelector(`dialog[open]`)||(e.key===`1`&&Eg(`outside`),e.key===`2`&&Eg(`inside`),e.key===`Escape`&&Eg(`outside`),e.key.toLowerCase()===`r`&&gg())});var Pg,Fg;function Ig(e,t,n){if(!$.sound||1)return;let r=Pg.createOscillator(),i=Pg.createGain();r.frequency.setValueAtTime(e,Pg.currentTime),i.gain.setValueAtTime(n,Pg.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,Pg.currentTime+t),r.connect(i).connect(Fg),r.start(),r.stop(Pg.currentTime+t)}function Lg(){Ig(1318,.7,.09),setTimeout(()=>Ig(1760,.9,.035),90)}function Rg(){for(let e=0;e<9;e++)setTimeout(()=>Ig(700+Math.random()*500,.1,.018),e*240)}var zg=Mm({talkTargets:()=>{},decorate:e=>{for(let[t,n]of Object.entries(Xh.decorations))n.visible=e.includes(t)},brew:()=>$.order>0?(Tg(`咖啡师正在忙，请稍等。`),!1):(Dg(),!0),toast:Tg,lock:e=>{hg.enabled=!e},inside:()=>$.mode===`inside`,raining:()=>$.weather===`rain`,winter:{active:()=>$.weather===`snow`,items:tg.dressing.items,toggle:tg.dressing.toggle,move:tg.dressing.move}});jh(`sound`).onclick=()=>{zg.toggleMusic()},window.addEventListener(`cafe-music-change`,e=>{let t=e.detail;jh(`sound`).dataset.playing!==String(t.playing)&&(jh(`sound`).innerHTML=Nh(t.playing?`sound`:`mute`),jh(`sound`).dataset.playing=String(t.playing)),jh(`sound`).setAttribute(`aria-pressed`,String(t.playing)),jh(`sound`).setAttribute(`aria-label`,t.playing?`暂停声音`:`开启声音`)});var Bg=[`阿禾`,`林伯`,`棠姨`].map((e,t)=>{let n=document.createElement(`button`);return n.className=`talk-chip`,n.style.setProperty(`--talk-offset`,t*43+`px`),n.textContent=e+` · 聊聊`,n.setAttribute(`aria-label`,`与`+e+`对话`),n.onclick=()=>zg.talk(t),Ph.after(n),n}),Vg=performance.now(),Hg=0,Ug=0,Wg=``,Gg=new V(15920870),Kg=new V(15592677),qg=new V(16772819),Jg=new V(16763266);function Yg(e){requestAnimationFrame(Yg);let t=Math.max(0,Math.min((e-Vg)/1e3,.05));if(Vg=e,document.hidden||$.paused)return;$.time+=t,$.frames++,Hg+=t,Ug++,Hg>1&&($.fps=Math.round(Ug/Hg),Hg=0,Ug=0),$.order>0&&($.order=Math.max(0,$.order-t),zg.tick($.order),$.order===0&&($.cups++,zg.complete(),Ig(1046,.5,.04))),up(Xh.actors,$.time,$.order),Xh.updateService($.time,$.order,$.mode===`inside`),Xh.steam.children.forEach((e,t)=>{let n=($.time*.25+t/9)%1;e.position.y=.05+n*.55,e.position.x=Math.sin(n*6+t)*.045,e.position.z=Math.cos(n*5+t)*.025,e.scale.set(.012*(1+n*1.6),.06*(1+n),.012*(1+n))}),$h.update($.time,$.weather===`snow`,$.night,$.rain),eg.update(t,$.time,$.rain),tg.update(t,$.time,$.weather===`snow`,$.mode===`inside`,cg),Zh.update($.time,$.order),Mg=R.damp(Mg,jg,2,t);let n=eg.wet,r=tg.amount,i=Math.max(n,r);Uh.intensity=R.lerp((3.3-Mg*2.7)*(1-i),.5,r),Uh.castShadow=i<.1,Uh.color.copy(qg).lerp(Jg,Mg).lerp(new V(16317439),r),Hh.intensity=R.lerp(1.3-Mg*.6+n*.25,1.1,r),Hh.color.set(i>.3?15265780:16775143).lerp(new V(13358300),r),Hh.groundColor.set(12631206).lerp(new V(15262938),r),Wh.intensity=R.lerp((.8-Mg*.45)*(1-i),.35,r),Wh.position.set(5,R.lerp(5,-2,r),-6),Wh.color.set(15988205).lerp(new V(16771019),r),Rh.environmentIntensity=R.lerp(.52-Mg*.17,.62,r),Lh.toneMappingExposure=R.lerp(1,2**-.4,r),lg.setSnow(r),zh.copy(Gg).lerp(Kg,Mg).lerp(new V(14541800).multiplyScalar(1.55),r),Q.light.emissiveIntensity=$.gardenLit?R.lerp(1.25+Mg*1.6+i*1.4,.7,r):0,Q.pendantLight.emissiveIntensity=R.lerp(1.65+Mg*.7,1.35,r),Xh.lamps.forEach(e=>{e.color.set(16765074),e.intensity=R.lerp(5+Mg*11+i*8,4,r)}),Xh.rainProps.visible=n>.4&&$.weather!==`snow`;let a=$.weather===`snow`?.17:.17+n*.83;Xh.umbrellaShade.scale.set(a,1,a),Xh.linShade.scale.set(a,1,a),jh(`light`).setAttribute(`aria-disabled`,String($.weather===`snow`)),jh(`light-label`).textContent=$.weather===`snow`?`冬日`:$.night?`暮色`:`日光`,Qh.update($.mode===`inside`,$.time,n,r,Mg),ng.update(!1,0),rg.update($.mode===`inside`,$.time,n,r,Mg),ig.update($.mode===`inside`,$.time,Mg,i),Gh.visible=!1,Gh.material.color.set(15920870).lerp(new V(10390665),$.mode===`inside`?Mg:0),$.mode===`inside`?(Uh.intensity=.85*(1-i*.6)*(1-Mg*.65),Uh.castShadow=!1,Hh.intensity=.8,Wh.intensity=.35,Rh.environmentIntensity=.25,Lh.toneMappingExposure=.88,Q.glass.opacity=.08,Q.glass.envMapIntensity=.2,Q.pendantLight.color.set(16117990),Q.pendantLight.roughness=.78,Q.pendantLight.emissiveIntensity=.22+i*.1+Mg*.12,Xh.lamps.forEach(e=>e.intensity=1.8+i*.5+Mg*.8)):(Q.glass.opacity=.14,Q.glass.envMapIntensity=1.5,Q.pendantLight.color.set(15915424),Q.pendantLight.roughness=.24),document.body.style.backgroundColor=r>.5?`#dde3e8`:`#f2eee6`,document.documentElement.style.backgroundColor=document.body.style.backgroundColor;let o=$.order>0?`咖啡师正在为你冲煮`:$.mode===`inside`?Math.floor($.time/8)%2?`杯里升起了热气`:`咖啡师正在准备手冲`:Math.floor($.time/10)%3==0?`咖啡师正在准备手冲`:Math.floor($.time/10)%3==1?`园丁正在照料绿植`:`客人正在享用午后咖啡`;if(Wg!==o&&(jh(`activity`).textContent=o,Wg=o),Xh.actors.slice(0,3).forEach((e,t)=>{let n=Cg.find(e=>e.id===`person`+t);n&&(e.root.getWorldPosition(n.point),n.point.y+=t===0?1.5:t===2?.8:1.1,n.mesh.position.copy(n.point))}),hg.update(),$.mode===`outside`){Sg.copy(Cg[0].point).project(cg),vg.style.left=(Sg.x*.5+.5)*Fh+`px`,vg.style.top=(-Sg.y*.5+.5)*Ih+`px`;let e=og.position.z>1.7&&ug.getPolarAngle()>.12;vg.style.opacity=e?`1`:`0`,vg.style.pointerEvents=e?`auto`:`none`,vg.hidden=!1}if(Bg.forEach((e,t)=>{e.hidden=!!document.querySelector(`dialog[open]`)||$.mode===`inside`&&t!==0&&($.weather!==`snow`||t!==1),e.style.left=`auto`,e.style.right=`18px`,e.style.top=Ih*.34+t*43+`px`}),$.mode===`outside`&&og.zoom<.74){let e=og.position.clone().sub(ug.target),t=Math.max(54,(18.5/og.zoom*.5+5)*Math.tan(Math.min(ug.getPolarAngle(),1.5)));e.length()<t&&(og.position.copy(ug.target).add(e.setLength(t)),og.updateMatrixWorld())}jh(`island-view`).hidden=$.mode===`inside`,ag.update($.time,t,$.weather,cg,$.mode===`inside`),Lh.info.reset(),ag.capture(cg),lg.render(cg),$.frames===3&&($.ready=!0,jh(`loading`).style.opacity=`0`,setTimeout(()=>jh(`loading`).remove(),850))}requestAnimationFrame(Yg),Lh.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),$.paused=!0,Tg(`3D 画面暂时中断，正在恢复。`)}),Lh.domElement.addEventListener(`webglcontextrestored`,()=>{$.paused=!1,Tg(`3D 画面已恢复。`)}),document.addEventListener(`visibilitychange`,()=>{Vg=performance.now()});function Xg(){return $h.outline.map(([e,t])=>Zg(new B(e,.26,t)))}function Zg(e){let t=e.clone().project(cg),n=Ph.getBoundingClientRect();return{x:n.left+(t.x*.5+.5)*Fh,y:n.top+(-t.y*.5+.5)*Ih}}new URLSearchParams(location.search).has(`qa`)&&Object.assign(window,{setIslandParameters:e=>ag.setParameters(e),glasshouseSnapshot:()=>({...$,progress:zg.save,music:zg.musicSnapshot(),placedDecor:Object.keys(Xh.decorations).filter(e=>Xh.decorations[e].visible),square:[Fh,Ih],renderQuality:{pixelRatio:Lh.getPixelRatio(),scenePixelRatio:lg.composer.readBuffer.width/Fh,buffer:Lh.getDrawingBufferSize(new z).toArray()},outsideProjection:{width:og.right-og.left,height:og.top-og.bottom},weatherWet:eg.wet,snowAmount:tg.amount,snow:tg.diagnostics(),sky:zh.getHexString(),autoOrbitSpeed:ug.autoRotateSpeed,eveningSky:ng.visible,indoorSea:rg.diagnostics(),interiorLife:Qh.diagnostics(),camera:cg.position.toArray(),insideOptics:{seated:dg.seated,seatIndex:dg.seatIndex,direction:sg.getWorldDirection(new B).toArray(),focalLength:sg.getFocalLength(),fov:sg.fov,aspect:sg.aspect,target:dg.target.toArray()},zoom:og.zoom,orbit:{polar:ug.getPolarAngle(),azimuth:ug.getAzimuthalAngle(),target:ug.target.toArray(),minPolar:ug.minPolarAngle,maxPolar:ug.maxPolarAngle},draws:Lh.info.render.calls,triangles:Lh.info.render.triangles,actors:Xh.actors.length,actorPose:Xh.actors.map(e=>[e.root.position.x,e.armR.rotation.x]),layout:Xh.diagnostics(),characters:Zh.diagnostics(),island:ag.diagnostics(),overviewScreen:Xh.diagnostics().overviewBounds.map(e=>[e.min[0],e.max[0]].flatMap(t=>[e.min[1],e.max[1]].flatMap(n=>[e.min[2],e.max[2]].map(e=>Zg(new B(t,n,e)))))),garden:{...$h.diagnostics(),screen:Xg()},heroScreen:(()=>{let e=Xh.diagnostics().heroBounds;return[e.min[0],e.max[0]].flatMap(t=>[e.min[1],e.max[1]].flatMap(n=>[e.min[2],e.max[2]].map(e=>Zg(new B(t,n,e)))))})(),hotspots:Object.fromEntries(Cg.map(e=>[e.id,Zg(e.point)]))})});