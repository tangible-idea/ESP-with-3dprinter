(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="160",Tr={ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},od=0,Yl=1,ad=2,Vu=1,ld=2,gi=3,Vi=0,wn=1,_i=2,Bi=0,Jr=1,ql=2,$l=3,jl=4,cd=5,tr=100,ud=101,hd=102,Zl=103,Kl=104,fd=200,dd=201,pd=202,md=203,Ya=204,qa=205,gd=206,_d=207,vd=208,xd=209,yd=210,Md=211,Ad=212,Sd=213,Ed=214,bd=0,Td=1,wd=2,Ro=3,Rd=4,Cd=5,Pd=6,Ld=7,Wu=0,Dd=1,Id=2,zi=0,Ud=1,Nd=2,Od=3,Fd=4,Bd=5,zd=6,Xu=300,es=301,ts=302,$a=303,ja=304,Ho=306,Za=1e3,Zn=1001,Ka=1002,An=1003,Jl=1004,ca=1005,Fn=1006,Hd=1007,Rs=1008,Hi=1009,Gd=1010,kd=1011,fl=1012,Yu=1013,Ii=1014,Ui=1015,Cs=1016,qu=1017,$u=1018,ir=1020,Vd=1021,Kn=1023,Wd=1024,Xd=1025,rr=1026,ns=1027,Yd=1028,ju=1029,qd=1030,Zu=1031,Ku=1033,ua=33776,ha=33777,fa=33778,da=33779,Ql=35840,ec=35841,tc=35842,nc=35843,Ju=36196,ic=37492,rc=37496,sc=37808,oc=37809,ac=37810,lc=37811,cc=37812,uc=37813,hc=37814,fc=37815,dc=37816,pc=37817,mc=37818,gc=37819,_c=37820,vc=37821,pa=36492,xc=36494,yc=36495,$d=36283,Mc=36284,Ac=36285,Sc=36286,Qu=3e3,sr=3001,jd=3200,Zd=3201,eh=0,Kd=1,Hn="",an="srgb",Ei="srgb-linear",dl="display-p3",Go="display-p3-linear",Co="linear",wt="srgb",Po="rec709",Lo="p3",Rr=7680,Ec=519,Jd=512,Qd=513,ep=514,th=515,tp=516,np=517,ip=518,rp=519,Ja=35044,bc="300 es",Qa=1035,xi=2e3,Do=2001;class xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eo=Math.PI/180,el=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function ln(i,e,t){return Math.max(e,Math.min(t,i))}function sp(i,e){return(i%e+e)%e}function ma(i,e,t){return(1-t)*i+t*e}function Tc(i){return(i&i-1)===0&&i!==0}function tl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const op={DEG2RAD:Eo};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,r,s,o,a,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],m=n[5],v=n[8],M=r[0],g=r[3],f=r[6],S=r[1],y=r[4],b=r[7],D=r[2],L=r[5],P=r[8];return s[0]=o*M+a*S+l*D,s[3]=o*g+a*y+l*L,s[6]=o*f+a*b+l*P,s[1]=c*M+u*S+h*D,s[4]=c*g+u*y+h*L,s[7]=c*f+u*b+h*P,s[2]=p*M+m*S+v*D,s[5]=p*g+m*y+v*L,s[8]=p*f+m*b+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,p=a*l-u*s,m=c*s-o*l,v=t*h+n*p+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=h*M,e[1]=(r*c-u*n)*M,e[2]=(a*n-r*o)*M,e[3]=p*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-a*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new ht;function nh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ap(){const i=Io("canvas");return i.style.display="block",i}const wc={};function As(i){i in wc||(wc[i]=!0,console.warn(i))}const Rc=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cc=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[Ei]:{transfer:Co,primaries:Po,toReference:i=>i,fromReference:i=>i},[an]:{transfer:wt,primaries:Po,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Go]:{transfer:Co,primaries:Lo,toReference:i=>i.applyMatrix3(Cc),fromReference:i=>i.applyMatrix3(Rc)},[dl]:{transfer:wt,primaries:Lo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Cc),fromReference:i=>i.applyMatrix3(Rc).convertLinearToSRGB()}},lp=new Set([Ei,Go]),St={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!lp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ys[e].toReference,r=Ys[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ys[i].primaries},getTransfer:function(i){return i===Hn?Co:Ys[i].transfer}};function Qr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _a(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Cr;class ih{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cr===void 0&&(Cr=Io("canvas")),Cr.width=e.width,Cr.height=e.height;const n=Cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qr(t[n]/255)*255):t[n]=Qr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cp=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(va(r[o].image)):s.push(va(r[o]))}else s=va(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ih.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let up=0;class Rn extends xr{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,n=Zn,r=Zn,s=Fn,o=Rs,a=Kn,l=Hi,c=Rn.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Si(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(As("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===sr?an:Hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return As("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===an?sr:Qu}set encoding(e){As("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sr?an:Hn}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Xu;Rn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,n=0,r=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],m=l[5],v=l[9],M=l[2],g=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(m+1)/2,D=(f+1)/2,L=(u+p)/4,P=(h+M)/4,G=(v+g)/4;return y>b&&y>D?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=L/n,s=P/n):b>D?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=L/r,s=G/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=P/s,r=G/s),this.set(n,r,s,t),this}let S=Math.sqrt((g-v)*(g-v)+(h-M)*(h-M)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(g-v)/S,this.y=(h-M)/S,this.z=(p-u)/S,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hp extends xr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(As("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===sr?an:Hn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fr extends hp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sh extends Rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fp extends Rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const p=s[o+0],m=s[o+1],v=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=M;return}if(h!==M||l!==p||c!==m||u!==v){let g=1-a;const f=l*p+c*m+u*v+h*M,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const D=Math.sqrt(y),L=Math.atan2(D,f*S);g=Math.sin(g*L)/D,a=Math.sin(a*L)/D}const b=a*S;if(l=l*g+p*b,c=c*g+m*b,u=u*g+v*b,h=h*g+M*b,g===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],p=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*h+l*m-c*p,e[t+1]=l*v+u*p+c*h-a*m,e[t+2]=c*v+u*m+a*p-l*h,e[t+3]=u*v-a*h-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),p=l(n/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=p*u*h+c*m*v,this._y=c*m*h-p*u*v,this._z=c*u*v+p*m*h,this._w=c*u*h-p*m*v;break;case"YXZ":this._x=p*u*h+c*m*v,this._y=c*m*h-p*u*v,this._z=c*u*v-p*m*h,this._w=c*u*h+p*m*v;break;case"ZXY":this._x=p*u*h-c*m*v,this._y=c*m*h+p*u*v,this._z=c*u*v+p*m*h,this._w=c*u*h-p*m*v;break;case"ZYX":this._x=p*u*h-c*m*v,this._y=c*m*h+p*u*v,this._z=c*u*v-p*m*h,this._w=c*u*h+p*m*v;break;case"YZX":this._x=p*u*h+c*m*v,this._y=c*m*h+p*u*v,this._z=c*u*v-p*m*h,this._w=c*u*h-p*m*v;break;case"XZY":this._x=p*u*h-c*m*v,this._y=c*m*h-p*u*v,this._z=c*u*v+p*m*h,this._w=c*u*h+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=n+a+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xa.copy(this).projectOnVector(e),this.sub(xa)}reflect(e){return this.sub(xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new F,Pc=new dr;class Bs{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(e.matrixWorld),this.union(qs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),$s.subVectors(this.max,ds),Pr.subVectors(e.a,ds),Lr.subVectors(e.b,ds),Dr.subVectors(e.c,ds),Ti.subVectors(Lr,Pr),wi.subVectors(Dr,Lr),ji.subVectors(Pr,Dr);let t=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-ji.z,ji.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,ji.z,0,-ji.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-ji.y,ji.x,0];return!ya(t,Pr,Lr,Dr,$s)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,Pr,Lr,Dr,$s))?!1:(js.crossVectors(Ti,wi),t=[js.x,js.y,js.z],ya(t,Pr,Lr,Dr,$s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new F,new F,new F,new F,new F,new F,new F,new F],Yn=new F,qs=new Bs,Pr=new F,Lr=new F,Dr=new F,Ti=new F,wi=new F,ji=new F,ds=new F,$s=new F,js=new F,Zi=new F;function ya(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Zi.fromArray(i,s);const a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),u=n.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dp=new Bs,ps=new F,Ma=new F;class ko{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ps,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(Ma)),this.expandByPoint(ps.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new F,Aa=new F,Zs=new F,Ri=new F,Sa=new F,Ks=new F,Ea=new F;class Vo{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Aa.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Aa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Zs),a=Ri.dot(this.direction),l=-Ri.dot(Zs),c=Ri.lengthSq(),u=Math.abs(1-o*o);let h,p,m,v;if(u>0)if(h=o*l-a,p=o*a-l,v=s*u,h>=0)if(p>=-v)if(p<=v){const M=1/u;h*=M,p*=M,m=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;else p<=-v?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c):p<=v?(h=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Aa).addScaledVector(Zs,p),m}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const n=hi.dot(this.direction),r=hi.dot(hi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,r,s){Sa.subVectors(t,e),Ks.subVectors(n,e),Ea.crossVectors(Sa,Ks);let o=this.direction.dot(Ea),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(Ks.crossVectors(Ri,Ks));if(l<0)return null;const c=a*this.direction.dot(Sa.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(Ea);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,n,r,s,o,a,l,c,u,h,p,m,v,M,g){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,p,m,v,M,g)}set(e,t,n,r,s,o,a,l,c,u,h,p,m,v,M,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=m,f[7]=v,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*u,m=o*h,v=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+v*c,t[5]=p-M*c,t[9]=-a*l,t[2]=M-p*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,m=l*h,v=c*u,M=c*h;t[0]=p+M*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=M+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,m=l*h,v=c*u,M=c*h;t[0]=p-M*a,t[4]=-o*h,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=M-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,m=o*h,v=a*u,M=a*h;t[0]=l*u,t[4]=v*c-m,t[8]=p*c+M,t[1]=l*h,t[5]=M*c+p,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,v=a*l,M=a*c;t[0]=l*u,t[4]=M-p*h,t[8]=v*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+v,t[10]=p-M*h}else if(e.order==="XZY"){const p=o*l,m=o*c,v=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+M,t[5]=o*u,t[9]=m*h-v,t[2]=v*h-m,t[6]=a*u,t[10]=M*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pp,e,mp)}lookAt(e,t,n){const r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Ci.crossVectors(n,Ln),Ci.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Ci.crossVectors(n,Ln)),Ci.normalize(),Js.crossVectors(Ln,Ci),r[0]=Ci.x,r[4]=Js.x,r[8]=Ln.x,r[1]=Ci.y,r[5]=Js.y,r[9]=Ln.y,r[2]=Ci.z,r[6]=Js.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],m=n[13],v=n[2],M=n[6],g=n[10],f=n[14],S=n[3],y=n[7],b=n[11],D=n[15],L=r[0],P=r[4],G=r[8],E=r[12],C=r[1],H=r[5],$=r[9],ue=r[13],B=r[2],k=r[6],q=r[10],oe=r[14],te=r[3],ne=r[7],me=r[11],_e=r[15];return s[0]=o*L+a*C+l*B+c*te,s[4]=o*P+a*H+l*k+c*ne,s[8]=o*G+a*$+l*q+c*me,s[12]=o*E+a*ue+l*oe+c*_e,s[1]=u*L+h*C+p*B+m*te,s[5]=u*P+h*H+p*k+m*ne,s[9]=u*G+h*$+p*q+m*me,s[13]=u*E+h*ue+p*oe+m*_e,s[2]=v*L+M*C+g*B+f*te,s[6]=v*P+M*H+g*k+f*ne,s[10]=v*G+M*$+g*q+f*me,s[14]=v*E+M*ue+g*oe+f*_e,s[3]=S*L+y*C+b*B+D*te,s[7]=S*P+y*H+b*k+D*ne,s[11]=S*G+y*$+b*q+D*me,s[15]=S*E+y*ue+b*oe+D*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],m=e[14],v=e[3],M=e[7],g=e[11],f=e[15];return v*(+s*l*h-r*c*h-s*a*p+n*c*p+r*a*m-n*l*m)+M*(+t*l*m-t*c*p+s*o*p-r*o*m+r*c*u-s*l*u)+g*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+f*(-r*a*u-t*l*h+t*a*p+r*o*h-n*o*p+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],m=e[11],v=e[12],M=e[13],g=e[14],f=e[15],S=h*g*c-M*p*c+M*l*m-a*g*m-h*l*f+a*p*f,y=v*p*c-u*g*c-v*l*m+o*g*m+u*l*f-o*p*f,b=u*M*c-v*h*c+v*a*m-o*M*m-u*a*f+o*h*f,D=v*h*l-u*M*l-v*a*p+o*M*p+u*a*g-o*h*g,L=t*S+n*y+r*b+s*D;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=S*P,e[1]=(M*p*s-h*g*s-M*r*m+n*g*m+h*r*f-n*p*f)*P,e[2]=(a*g*s-M*l*s+M*r*c-n*g*c-a*r*f+n*l*f)*P,e[3]=(h*l*s-a*p*s-h*r*c+n*p*c+a*r*m-n*l*m)*P,e[4]=y*P,e[5]=(u*g*s-v*p*s+v*r*m-t*g*m-u*r*f+t*p*f)*P,e[6]=(v*l*s-o*g*s-v*r*c+t*g*c+o*r*f-t*l*f)*P,e[7]=(o*p*s-u*l*s+u*r*c-t*p*c-o*r*m+t*l*m)*P,e[8]=b*P,e[9]=(v*h*s-u*M*s-v*n*m+t*M*m+u*n*f-t*h*f)*P,e[10]=(o*M*s-v*a*s+v*n*c-t*M*c-o*n*f+t*a*f)*P,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*P,e[12]=D*P,e[13]=(u*M*r-v*h*r+v*n*p-t*M*p-u*n*g+t*h*g)*P,e[14]=(v*a*r-o*M*r-v*n*l+t*M*l+o*n*g-t*a*g)*P,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*p+t*a*p)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,p=s*c,m=s*u,v=s*h,M=o*u,g=o*h,f=a*h,S=l*c,y=l*u,b=l*h,D=n.x,L=n.y,P=n.z;return r[0]=(1-(M+f))*D,r[1]=(m+b)*D,r[2]=(v-y)*D,r[3]=0,r[4]=(m-b)*L,r[5]=(1-(p+f))*L,r[6]=(g+S)*L,r[7]=0,r[8]=(v+y)*P,r[9]=(g-S)*P,r[10]=(1-(p+M))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),a=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const c=1/s,u=1/o,h=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,t.setFromRotationMatrix(qn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=xi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let m,v;if(a===xi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Do)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=xi){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),p=(t+e)*c,m=(n+r)*u;let v,M;if(a===xi)v=(o+s)*h,M=-2*h;else if(a===Do)v=s*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ir=new F,qn=new xt,pp=new F(0,0,0),mp=new F(1,1,1),Ci=new F,Js=new F,Ln=new F,Lc=new xt,Dc=new dr;class Wo{constructor(e=0,t=0,n=0,r=Wo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wo.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gp=0;const Ic=new F,Ur=new dr,fi=new xt,Qs=new F,ms=new F,_p=new F,vp=new dr,Uc=new F(1,0,0),Nc=new F(0,1,0),Oc=new F(0,0,1),xp={type:"added"},yp={type:"removed"};class jt extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new F,t=new Wo,n=new dr,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new ht}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(Uc,e)}rotateY(e){return this.rotateOnAxis(Nc,e)}rotateZ(e){return this.rotateOnAxis(Oc,e)}translateOnAxis(e,t){return Ic.copy(e).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uc,e)}translateY(e){return this.translateOnAxis(Nc,e)}translateZ(e){return this.translateOnAxis(Oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(ms,Qs,this.up):fi.lookAt(Qs,ms,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(fi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,_p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}jt.DEFAULT_UP=new F(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new F,di=new F,ba=new F,pi=new F,Nr=new F,Or=new F,Fc=new F,Ta=new F,wa=new F,Ra=new F;let eo=!1;class Bn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$n.subVectors(e,t),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){$n.subVectors(r,t),di.subVectors(n,t),ba.subVectors(e,t);const o=$n.dot($n),a=$n.dot(di),l=$n.dot(ba),c=di.dot(di),u=di.dot(ba),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,m=(c*l-a*u)*p,v=(o*u-a*l)*p;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,t,n,r,s,o,a,l){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static isFrontFacing(e,t,n,r){return $n.subVectors(n,t),di.subVectors(e,t),$n.cross(di).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),di.subVectors(this.a,this.b),$n.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),Bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Nr.subVectors(r,n),Or.subVectors(s,n),Ta.subVectors(e,n);const l=Nr.dot(Ta),c=Or.dot(Ta);if(l<=0&&c<=0)return t.copy(n);wa.subVectors(e,r);const u=Nr.dot(wa),h=Or.dot(wa);if(u>=0&&h<=u)return t.copy(r);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Nr,o);Ra.subVectors(e,s);const m=Nr.dot(Ra),v=Or.dot(Ra);if(v>=0&&m<=v)return t.copy(s);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Or,a);const g=u*v-m*h;if(g<=0&&h-u>=0&&m-v>=0)return Fc.subVectors(s,r),a=(h-u)/(h-u+(m-v)),t.copy(r).addScaledVector(Fc,a);const f=1/(g+M+p);return o=M*f,a=p*f,t.copy(n).addScaledVector(Nr,o).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},to={h:0,s:0,l:0};function Ca(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ft{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=sp(e,1),t=ln(t,0,1),n=ln(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ca(o,s,e+1/3),this.g=Ca(o,s,e),this.b=Ca(o,s,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=an){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const n=oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return St.fromWorkingColorSpace(un.copy(this),e),Math.round(ln(un.r*255,0,255))*65536+Math.round(ln(un.g*255,0,255))*256+Math.round(ln(un.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(un.copy(this),t);const n=un.r,r=un.g,s=un.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=an){St.fromWorkingColorSpace(un.copy(this),e);const t=un.r,n=un.g,r=un.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(to);const n=ma(Pi.h,to.h,t),r=ma(Pi.s,to.s,t),s=ma(Pi.l,to.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new ft;ft.NAMES=oh;let Mp=0;class yr extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Jr,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=qa,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==qa&&(n.blendDst=this.blendDst),this.blendEquation!==tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ro&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ml extends yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new F,no=new Se;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),e}}class ah extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lh extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ap=0;const On=new xt,Pa=new jt,Fr=new F,Dn=new Bs,gs=new Bs,en=new F;class nn extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nh(e)?lh:ah)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Dn.min,gs.min),Dn.expandByPoint(en),en.addVectors(Dn.max,gs.max),Dn.expandByPoint(en)):(Dn.expandByPoint(gs.min),Dn.expandByPoint(gs.max))}Dn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(en));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),en.add(Fr)),r=Math.max(r,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<a;C++)c[C]=new F,u[C]=new F;const h=new F,p=new F,m=new F,v=new Se,M=new Se,g=new Se,f=new F,S=new F;function y(C,H,$){h.fromArray(r,C*3),p.fromArray(r,H*3),m.fromArray(r,$*3),v.fromArray(o,C*2),M.fromArray(o,H*2),g.fromArray(o,$*2),p.sub(h),m.sub(h),M.sub(v),g.sub(v);const ue=1/(M.x*g.y-g.x*M.y);isFinite(ue)&&(f.copy(p).multiplyScalar(g.y).addScaledVector(m,-M.y).multiplyScalar(ue),S.copy(m).multiplyScalar(M.x).addScaledVector(p,-g.x).multiplyScalar(ue),c[C].add(f),c[H].add(f),c[$].add(f),u[C].add(S),u[H].add(S),u[$].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let C=0,H=b.length;C<H;++C){const $=b[C],ue=$.start,B=$.count;for(let k=ue,q=ue+B;k<q;k+=3)y(n[k+0],n[k+1],n[k+2])}const D=new F,L=new F,P=new F,G=new F;function E(C){P.fromArray(s,C*3),G.copy(P);const H=c[C];D.copy(H),D.sub(P.multiplyScalar(P.dot(H))).normalize(),L.crossVectors(G,H);const ue=L.dot(u[C])<0?-1:1;l[C*4]=D.x,l[C*4+1]=D.y,l[C*4+2]=D.z,l[C*4+3]=ue}for(let C=0,H=b.length;C<H;++C){const $=b[C],ue=$.start,B=$.count;for(let k=ue,q=ue+B;k<q;k+=3)E(n[k+0]),E(n[k+1]),E(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),M=e.getX(p+1),g=e.getX(p+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u);let m=0,v=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*u;for(let f=0;f<u;f++)p[v++]=c[m++]}return new zt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const p=c[u],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new xt,Ki=new Vo,io=new ko,zc=new F,Br=new F,zr=new F,Hr=new F,La=new F,ro=new F,so=new Se,oo=new Se,ao=new Se,Hc=new F,Gc=new F,kc=new F,lo=new F,co=new F;class bn extends jt{constructor(e=new nn,t=new ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(La.fromBufferAttribute(h,e),o?ro.addScaledVector(La,u):ro.addScaledVector(La.sub(t),u))}t.add(ro)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),!(io.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(io,zc)===null||Ki.origin.distanceToSquared(zc)>(e.far-e.near)**2))&&(Bc.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=p.length;v<M;v++){const g=p[v],f=o[g.materialIndex],S=Math.max(g.start,m.start),y=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let b=S,D=y;b<D;b+=3){const L=a.getX(b),P=a.getX(b+1),G=a.getX(b+2);r=uo(this,f,e,n,c,u,h,L,P,G),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let g=v,f=M;g<f;g+=3){const S=a.getX(g),y=a.getX(g+1),b=a.getX(g+2);r=uo(this,o,e,n,c,u,h,S,y,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,M=p.length;v<M;v++){const g=p[v],f=o[g.materialIndex],S=Math.max(g.start,m.start),y=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let b=S,D=y;b<D;b+=3){const L=b,P=b+1,G=b+2;r=uo(this,f,e,n,c,u,h,L,P,G),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let g=v,f=M;g<f;g+=3){const S=g,y=g+1,b=g+2;r=uo(this,o,e,n,c,u,h,S,y,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Sp(i,e,t,n,r,s,o,a){let l;if(e.side===wn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;co.copy(a),co.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(co);return c<t.near||c>t.far?null:{distance:c,point:co.clone(),object:i}}function uo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Br),i.getVertexPosition(l,zr),i.getVertexPosition(c,Hr);const u=Sp(i,e,t,n,Br,zr,Hr,lo);if(u){r&&(so.fromBufferAttribute(r,a),oo.fromBufferAttribute(r,l),ao.fromBufferAttribute(r,c),u.uv=Bn.getInterpolation(lo,Br,zr,Hr,so,oo,ao,new Se)),s&&(so.fromBufferAttribute(s,a),oo.fromBufferAttribute(s,l),ao.fromBufferAttribute(s,c),u.uv1=Bn.getInterpolation(lo,Br,zr,Hr,so,oo,ao,new Se),u.uv2=u.uv1),o&&(Hc.fromBufferAttribute(o,a),Gc.fromBufferAttribute(o,l),kc.fromBufferAttribute(o,c),u.normal=Bn.getInterpolation(lo,Br,zr,Hr,Hc,Gc,kc,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};Bn.getNormal(Br,zr,Hr,h.normal),u.face=h}return u}class si extends nn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let p=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(h,2));function v(M,g,f,S,y,b,D,L,P,G,E){const C=b/P,H=D/G,$=b/2,ue=D/2,B=L/2,k=P+1,q=G+1;let oe=0,te=0;const ne=new F;for(let me=0;me<q;me++){const _e=me*H-ue;for(let De=0;De<k;De++){const Q=De*C-$;ne[M]=Q*S,ne[g]=_e*y,ne[f]=B,c.push(ne.x,ne.y,ne.z),ne[M]=0,ne[g]=0,ne[f]=L>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(De/P),h.push(1-me/G),oe+=1}}for(let me=0;me<G;me++)for(let _e=0;_e<P;_e++){const De=p+_e+k*me,Q=p+_e+k*(me+1),ge=p+(_e+1)+k*(me+1),Re=p+(_e+1)+k*me;l.push(De,Q,Re),l.push(Q,ge,Re),te+=6}a.addGroup(m,te,E),m+=te,p+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function yn(i){const e={};for(let t=0;t<i.length;t++){const n=is(i[t]);for(const r in n)e[r]=n[r]}return e}function Ep(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ch(i){return i.getRenderTarget()===null?i.outputColorSpace:St.workingColorSpace}const bp={clone:is,merge:yn};var Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Ep(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uh extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zn extends uh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=el*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return el*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gr=-90,kr=1;class Rp extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(Gr,kr,e,t);r.layers=this.layers,this.add(r);const s=new zn(Gr,kr,e,t);s.layers=this.layers,this.add(s);const o=new zn(Gr,kr,e,t);o.layers=this.layers,this.add(o);const a=new zn(Gr,kr,e,t);a.layers=this.layers,this.add(a);const l=new zn(Gr,kr,e,t);l.layers=this.layers,this.add(l);const c=new zn(Gr,kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,p,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class hh extends Rn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cp extends fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(As("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===sr?an:Hn),this.texture=new hh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new si(5,5,5),s=new pr({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:Bi});s.uniforms.tEquirect.value=t;const o=new bn(r,s),a=t.minFilter;return t.minFilter===Rs&&(t.minFilter=Fn),new Rp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Da=new F,Pp=new F,Lp=new ht;class Di{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Da.subVectors(n,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Da),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lp.getNormalMatrix(e),r=this.coplanarPoint(Da).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new ko,ho=new F;class gl{constructor(e=new Di,t=new Di,n=new Di,r=new Di,s=new Di,o=new Di){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],p=r[7],m=r[8],v=r[9],M=r[10],g=r[11],f=r[12],S=r[13],y=r[14],b=r[15];if(n[0].setComponents(l-s,p-c,g-m,b-f).normalize(),n[1].setComponents(l+s,p+c,g+m,b+f).normalize(),n[2].setComponents(l+o,p+u,g+v,b+S).normalize(),n[3].setComponents(l-o,p-u,g-v,b-S).normalize(),n[4].setComponents(l-a,p-h,g-M,b-y).normalize(),t===xi)n[5].setComponents(l+a,p+h,g+M,b+y).normalize();else if(t===Do)n[5].setComponents(a,h,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ho.x=r.normal.x>0?e.max.x:e.min.x,ho.y=r.normal.y>0?e.max.y:e.min.y,ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Dp(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,p=c.usage,m=h.byteLength,v=i.createBuffer();i.bindBuffer(u,v),i.bufferData(u,h,p),c.onUploadCallback();let M;if(h instanceof Float32Array)M=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=i.SHORT;else if(h instanceof Uint32Array)M=i.UNSIGNED_INT;else if(h instanceof Int32Array)M=i.INT;else if(h instanceof Int8Array)M=i.BYTE;else if(h instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const p=u.array,m=u._updateRange,v=u.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&v.length===0&&i.bufferSubData(h,0,p),v.length!==0){for(let M=0,g=v.length;M<g;M++){const f=v[M];t?i.bufferSubData(h,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):i.bufferSubData(h,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class _l extends nn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,p=t/l,m=[],v=[],M=[],g=[];for(let f=0;f<u;f++){const S=f*p-o;for(let y=0;y<c;y++){const b=y*h-s;v.push(b,-S,0),M.push(0,0,1),g.push(y/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){const y=S+c*f,b=S+c*(f+1),D=S+1+c*(f+1),L=S+1+c*f;m.push(y,b,L),m.push(b,D,L)}this.setIndex(m),this.setAttribute("position",new Lt(v,3)),this.setAttribute("normal",new Lt(M,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
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
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
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
#endif`,Hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,qp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
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
}`,Mm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Dm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Im=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vm=`#if defined( USE_POINTS_UV )
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
#endif`,Wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$m=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tg=`#ifdef USE_NORMALMAP
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
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,_g=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mg=`#ifdef USE_SKINNING
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
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bg=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tg=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wg=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`#include <common>
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
}`,zg=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hg=`#define DISTANCE
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
}`,Gg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yg=`#include <common>
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
}`,qg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$g=`#define LAMBERT
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
}`,jg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zg=`#define MATCAP
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
}`,Kg=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Jg=`#define NORMAL
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
}`,Qg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e_=`#define PHONG
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
}`,t_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,n_=`#define STANDARD
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
}`,i_=`#define STANDARD
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,r_=`#define TOON
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
}`,s_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,o_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,c_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,u_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,h_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ut={alphahash_fragment:Ip,alphahash_pars_fragment:Up,alphamap_fragment:Np,alphamap_pars_fragment:Op,alphatest_fragment:Fp,alphatest_pars_fragment:Bp,aomap_fragment:zp,aomap_pars_fragment:Hp,batching_pars_vertex:Gp,batching_vertex:kp,begin_vertex:Vp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:Yp,bumpmap_pars_fragment:qp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:Kp,color_fragment:Jp,color_pars_fragment:Qp,color_pars_vertex:em,color_vertex:tm,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:rm,displacementmap_pars_vertex:sm,displacementmap_vertex:om,emissivemap_fragment:am,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:um,envmap_fragment:hm,envmap_common_pars_fragment:fm,envmap_pars_fragment:dm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Tm,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:_m,fog_fragment:vm,fog_pars_fragment:xm,gradientmap_pars_fragment:ym,lightmap_fragment:Mm,lightmap_pars_fragment:Am,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:Em,lights_pars_begin:bm,lights_toon_fragment:wm,lights_toon_pars_fragment:Rm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Pm,lights_physical_fragment:Lm,lights_physical_pars_fragment:Dm,lights_fragment_begin:Im,lights_fragment_maps:Um,lights_fragment_end:Nm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:zm,map_fragment:Hm,map_pars_fragment:Gm,map_particle_fragment:km,map_particle_pars_fragment:Vm,metalnessmap_fragment:Wm,metalnessmap_pars_fragment:Xm,morphcolor_vertex:Ym,morphnormal_vertex:qm,morphtarget_pars_vertex:$m,morphtarget_vertex:jm,normal_fragment_begin:Zm,normal_fragment_maps:Km,normal_pars_fragment:Jm,normal_pars_vertex:Qm,normal_vertex:eg,normalmap_pars_fragment:tg,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:rg,iridescence_pars_fragment:sg,opaque_fragment:og,packing:ag,premultiplied_alpha_fragment:lg,project_vertex:cg,dithering_fragment:ug,dithering_pars_fragment:hg,roughnessmap_fragment:fg,roughnessmap_pars_fragment:dg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:_g,skinbase_vertex:vg,skinning_pars_vertex:xg,skinning_vertex:yg,skinnormal_vertex:Mg,specularmap_fragment:Ag,specularmap_pars_fragment:Sg,tonemapping_fragment:Eg,tonemapping_pars_fragment:bg,transmission_fragment:Tg,transmission_pars_fragment:wg,uv_pars_fragment:Rg,uv_pars_vertex:Cg,uv_vertex:Pg,worldpos_vertex:Lg,background_vert:Dg,background_frag:Ig,backgroundCube_vert:Ug,backgroundCube_frag:Ng,cube_vert:Og,cube_frag:Fg,depth_vert:Bg,depth_frag:zg,distanceRGBA_vert:Hg,distanceRGBA_frag:Gg,equirect_vert:kg,equirect_frag:Vg,linedashed_vert:Wg,linedashed_frag:Xg,meshbasic_vert:Yg,meshbasic_frag:qg,meshlambert_vert:$g,meshlambert_frag:jg,meshmatcap_vert:Zg,meshmatcap_frag:Kg,meshnormal_vert:Jg,meshnormal_frag:Qg,meshphong_vert:e_,meshphong_frag:t_,meshphysical_vert:n_,meshphysical_frag:i_,meshtoon_vert:r_,meshtoon_frag:s_,points_vert:o_,points_frag:a_,shadow_vert:l_,shadow_frag:c_,sprite_vert:u_,sprite_frag:h_},Ce={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ii={basic:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:yn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:yn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:yn([Ce.points,Ce.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:yn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:yn([Ce.common,Ce.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:yn([Ce.sprite,Ce.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:yn([Ce.common,Ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:yn([Ce.lights,Ce.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};ii.physical={uniforms:yn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const fo={r:0,b:0,g:0};function f_(i,e,t,n,r,s,o){const a=new ft(0);let l=s===!0?0:1,c,u,h=null,p=0,m=null;function v(g,f){let S=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?M(a,l):y&&y.isColor&&(M(y,1),S=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ho)?(u===void 0&&(u=new bn(new si(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:is(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=St.getTransfer(y.colorSpace)!==wt,(h!==y||p!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,p=y.version,m=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new bn(new _l(2,2),new pr({name:"BackgroundMaterial",uniforms:is(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=St.getTransfer(y.colorSpace)!==wt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,m=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function M(g,f){g.getRGB(fo,ch(i)),n.buffers.color.setClear(fo.r,fo.g,fo.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(g,f=1){a.set(g),l=f,M(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,M(a,l)},render:v}}function d_(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function h(B,k,q,oe,te){let ne=!1;if(o){const me=M(oe,q,k);c!==me&&(c=me,m(c.object)),ne=f(B,oe,q,te),ne&&S(B,oe,q,te)}else{const me=k.wireframe===!0;(c.geometry!==oe.id||c.program!==q.id||c.wireframe!==me)&&(c.geometry=oe.id,c.program=q.id,c.wireframe=me,ne=!0)}te!==null&&t.update(te,i.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,G(B,k,q,oe),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(B){return n.isWebGL2?i.bindVertexArray(B):s.bindVertexArrayOES(B)}function v(B){return n.isWebGL2?i.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function M(B,k,q){const oe=q.wireframe===!0;let te=a[B.id];te===void 0&&(te={},a[B.id]=te);let ne=te[k.id];ne===void 0&&(ne={},te[k.id]=ne);let me=ne[oe];return me===void 0&&(me=g(p()),ne[oe]=me),me}function g(B){const k=[],q=[],oe=[];for(let te=0;te<r;te++)k[te]=0,q[te]=0,oe[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:oe,object:B,attributes:{},index:null}}function f(B,k,q,oe){const te=c.attributes,ne=k.attributes;let me=0;const _e=q.getAttributes();for(const De in _e)if(_e[De].location>=0){const ge=te[De];let Re=ne[De];if(Re===void 0&&(De==="instanceMatrix"&&B.instanceMatrix&&(Re=B.instanceMatrix),De==="instanceColor"&&B.instanceColor&&(Re=B.instanceColor)),ge===void 0||ge.attribute!==Re||Re&&ge.data!==Re.data)return!0;me++}return c.attributesNum!==me||c.index!==oe}function S(B,k,q,oe){const te={},ne=k.attributes;let me=0;const _e=q.getAttributes();for(const De in _e)if(_e[De].location>=0){let ge=ne[De];ge===void 0&&(De==="instanceMatrix"&&B.instanceMatrix&&(ge=B.instanceMatrix),De==="instanceColor"&&B.instanceColor&&(ge=B.instanceColor));const Re={};Re.attribute=ge,ge&&ge.data&&(Re.data=ge.data),te[De]=Re,me++}c.attributes=te,c.attributesNum=me,c.index=oe}function y(){const B=c.newAttributes;for(let k=0,q=B.length;k<q;k++)B[k]=0}function b(B){D(B,0)}function D(B,k){const q=c.newAttributes,oe=c.enabledAttributes,te=c.attributeDivisors;q[B]=1,oe[B]===0&&(i.enableVertexAttribArray(B),oe[B]=1),te[B]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,k),te[B]=k)}function L(){const B=c.newAttributes,k=c.enabledAttributes;for(let q=0,oe=k.length;q<oe;q++)k[q]!==B[q]&&(i.disableVertexAttribArray(q),k[q]=0)}function P(B,k,q,oe,te,ne,me){me===!0?i.vertexAttribIPointer(B,k,q,te,ne):i.vertexAttribPointer(B,k,q,oe,te,ne)}function G(B,k,q,oe){if(n.isWebGL2===!1&&(B.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const te=oe.attributes,ne=q.getAttributes(),me=k.defaultAttributeValues;for(const _e in ne){const De=ne[_e];if(De.location>=0){let Q=te[_e];if(Q===void 0&&(_e==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),_e==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor)),Q!==void 0){const ge=Q.normalized,Re=Q.itemSize,ze=t.get(Q);if(ze===void 0)continue;const Oe=ze.buffer,Ze=ze.type,qe=ze.bytesPerElement,ke=n.isWebGL2===!0&&(Ze===i.INT||Ze===i.UNSIGNED_INT||Q.gpuType===Yu);if(Q.isInterleavedBufferAttribute){const Ke=Q.data,N=Ke.stride,be=Q.offset;if(Ke.isInstancedInterleavedBuffer){for(let ie=0;ie<De.locationSize;ie++)D(De.location+ie,Ke.meshPerAttribute);B.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let ie=0;ie<De.locationSize;ie++)b(De.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let ie=0;ie<De.locationSize;ie++)P(De.location+ie,Re/De.locationSize,Ze,ge,N*qe,(be+Re/De.locationSize*ie)*qe,ke)}else{if(Q.isInstancedBufferAttribute){for(let Ke=0;Ke<De.locationSize;Ke++)D(De.location+Ke,Q.meshPerAttribute);B.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ke=0;Ke<De.locationSize;Ke++)b(De.location+Ke);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Ke=0;Ke<De.locationSize;Ke++)P(De.location+Ke,Re/De.locationSize,Ze,ge,Re*qe,Re/De.locationSize*Ke*qe,ke)}}else if(me!==void 0){const ge=me[_e];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(De.location,ge);break;case 3:i.vertexAttrib3fv(De.location,ge);break;case 4:i.vertexAttrib4fv(De.location,ge);break;default:i.vertexAttrib1fv(De.location,ge)}}}}L()}function E(){$();for(const B in a){const k=a[B];for(const q in k){const oe=k[q];for(const te in oe)v(oe[te].object),delete oe[te];delete k[q]}delete a[B]}}function C(B){if(a[B.id]===void 0)return;const k=a[B.id];for(const q in k){const oe=k[q];for(const te in oe)v(oe[te].object),delete oe[te];delete k[q]}delete a[B.id]}function H(B){for(const k in a){const q=a[k];if(q[B.id]===void 0)continue;const oe=q[B.id];for(const te in oe)v(oe[te].object),delete oe[te];delete q[B.id]}}function $(){ue(),u=!0,c!==l&&(c=l,m(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:ue,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:H,initAttributes:y,enableAttribute:b,disableUnusedAttributes:L}}function p_(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,p){if(p===0)return;let m,v;if(r)m=i,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,u,h,p),t.update(h,s,p)}function c(u,h,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<p;v++)this.render(u[v],h[v]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,p);let v=0;for(let M=0;M<p;M++)v+=h[M];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function m_(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,b=o||e.has("OES_texture_float"),D=y&&b,L=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:v,maxAttributes:M,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:D,maxSamples:L}}function g_(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Di,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||n!==0||r;return r=p,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,m){const v=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,f=i.get(h);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const S=s?0:n,y=S*4;let b=f.clippingState||null;l.value=b,b=u(v,p,y,m);for(let D=0;D!==y;++D)b[D]=t[D];f.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,m,v){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=l.value,v!==!0||g===null){const f=m+M*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,b=m;y!==M;++y,b+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function __(i){let e=new WeakMap;function t(o,a){return a===$a?o.mapping=es:a===ja&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$a||a===ja)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cp(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class dh extends uh{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const jr=4,Vc=[.125,.215,.35,.446,.526,.582],nr=20,Ia=new dh,Wc=new ft;let Ua=null,Na=0,Oa=0;const er=(1+Math.sqrt(5))/2,Vr=1/er,Xc=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,er,Vr),new F(0,er,-Vr),new F(Vr,0,er),new F(-Vr,0,er),new F(er,Vr,0),new F(-er,Vr,0)];class Yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ua,Na,Oa),e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Cs,format:Kn,colorSpace:Ei,depthBuffer:!1},r=qc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v_(s)),this._blurMaterial=x_(s,e,t)}return r}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,r){const a=new zn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Wc),u.toneMapping=zi,u.autoClear=!1;const m=new ml({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),v=new bn(new si,m);let M=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,M=!0):(m.color.copy(Wc),M=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;po(r,S*y,f>2?y:0,y,y),u.setRenderTarget(r),M&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===es||e.mapping===ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xc[(r-1)%Xc.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bn(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*nr-1),M=s/v,g=isFinite(s)?1+Math.floor(u*M):nr;g>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${nr}`);const f=[];let S=0;for(let P=0;P<nr;++P){const G=P/M,E=Math.exp(-G*G/2);f.push(E),P===0?S+=E:P<g&&(S+=2*E)}for(let P=0;P<f.length;P++)f[P]=f[P]/S;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:y}=this;p.dTheta.value=v,p.mipInt.value=y-n;const b=this._sizeLods[r],D=3*b*(r>y-jr?r-y+jr:0),L=4*(this._cubeSize-b);po(t,D,L,3*b,2*b),l.setRenderTarget(t),l.render(h,Ia)}}function v_(i){const e=[],t=[],n=[];let r=i;const s=i-jr+1+Vc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-jr?l=Vc[o-i+jr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,M=3,g=2,f=1,S=new Float32Array(M*v*m),y=new Float32Array(g*v*m),b=new Float32Array(f*v*m);for(let L=0;L<m;L++){const P=L%3*2/3-1,G=L>2?0:-1,E=[P,G,0,P+2/3,G,0,P+2/3,G+1,0,P,G,0,P+2/3,G+1,0,P,G+1,0];S.set(E,M*v*L),y.set(p,g*v*L);const C=[L,L,L,L,L,L];b.set(C,f*v*L)}const D=new nn;D.setAttribute("position",new zt(S,M)),D.setAttribute("uv",new zt(y,g)),D.setAttribute("faceIndex",new zt(b,f)),e.push(D),r>jr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qc(i,e,t){const n=new fr(i,e,t);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function x_(i,e,t){const n=new Float32Array(nr),r=new F(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function $c(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function jc(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$a||l===ja,u=l===es||l===ts;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Yc(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Yc(i));const p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function M_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function A_(i,e,t,n){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const M=p.morphAttributes[v];for(let g=0,f=M.length;g<f;g++)e.remove(M[g])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const v in p)e.update(p[v],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const M=m[v];for(let g=0,f=M.length;g<f;g++)e.update(M[g],i.ARRAY_BUFFER)}}function c(h){const p=[],m=h.index,v=h.attributes.position;let M=0;if(m!==null){const S=m.array;M=m.version;for(let y=0,b=S.length;y<b;y+=3){const D=S[y+0],L=S[y+1],P=S[y+2];p.push(D,L,L,P,P,D)}}else if(v!==void 0){const S=v.array;M=v.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const D=y+0,L=y+1,P=y+2;p.push(D,L,L,P,P,D)}}else return;const g=new(nh(p)?lh:ah)(p,1);g.version=M;const f=s.get(h);f&&e.remove(f),s.set(h,g)}function u(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function S_(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,v){i.drawElements(s,v,a,m*l),t.update(v,s,1)}function h(m,v,M){if(M===0)return;let g,f;if(r)g=i,f="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[f](s,v,a,m*l,M),t.update(v,s,M)}function p(m,v,M){if(M===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<M;f++)this.render(m[f]/l,v[f]);else{g.multiDrawElementsWEBGL(s,v,0,a,m,0,M);let f=0;for(let S=0;S<M;S++)f+=v[S];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function E_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function b_(i,e){return i[0]-e[0]}function T_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function w_(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new tn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let M=s.get(u);if(M===void 0||M.count!==v){let B=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",B)};M!==void 0&&M.texture.dispose();const S=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let G=0;S===!0&&(G=1),y===!0&&(G=2),b===!0&&(G=3);let E=u.attributes.position.count*G,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const H=new Float32Array(E*C*4*v),$=new sh(H,E,C,v);$.type=Ui,$.needsUpdate=!0;const ue=G*4;for(let k=0;k<v;k++){const q=D[k],oe=L[k],te=P[k],ne=E*C*4*k;for(let me=0;me<q.count;me++){const _e=me*ue;S===!0&&(o.fromBufferAttribute(q,me),H[ne+_e+0]=o.x,H[ne+_e+1]=o.y,H[ne+_e+2]=o.z,H[ne+_e+3]=0),y===!0&&(o.fromBufferAttribute(oe,me),H[ne+_e+4]=o.x,H[ne+_e+5]=o.y,H[ne+_e+6]=o.z,H[ne+_e+7]=0),b===!0&&(o.fromBufferAttribute(te,me),H[ne+_e+8]=o.x,H[ne+_e+9]=o.y,H[ne+_e+10]=o.z,H[ne+_e+11]=te.itemSize===4?o.w:1)}}M={count:v,texture:$,size:new Se(E,C)},s.set(u,M),u.addEventListener("dispose",B)}let g=0;for(let S=0;S<p.length;S++)g+=p[S];const f=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",f),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{const m=p===void 0?0:p.length;let v=n[u.id];if(v===void 0||v.length!==m){v=[];for(let y=0;y<m;y++)v[y]=[y,0];n[u.id]=v}for(let y=0;y<m;y++){const b=v[y];b[0]=y,b[1]=p[y]}v.sort(T_);for(let y=0;y<8;y++)y<m&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(b_);const M=u.morphAttributes.position,g=u.morphAttributes.normal;let f=0;for(let y=0;y<8;y++){const b=a[y],D=b[0],L=b[1];D!==Number.MAX_SAFE_INTEGER&&L?(M&&u.getAttribute("morphTarget"+y)!==M[D]&&u.setAttribute("morphTarget"+y,M[D]),g&&u.getAttribute("morphNormal"+y)!==g[D]&&u.setAttribute("morphNormal"+y,g[D]),r[y]=L,f+=L):(M&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),g&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const S=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function R_(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class ph extends Rn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:rr,u!==rr&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===rr&&(n=Ii),n===void 0&&u===ns&&(n=ir),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const mh=new Rn,gh=new ph(1,1);gh.compareFunction=th;const _h=new sh,vh=new fp,xh=new hh,Zc=[],Kc=[],Jc=new Float32Array(16),Qc=new Float32Array(9),eu=new Float32Array(4);function ss(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Zc[r];if(s===void 0&&(s=new Float32Array(r),Zc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xo(i,e){let t=Kc[e];t===void 0&&(t=new Int32Array(e),Kc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function P_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function L_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function D_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function I_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;eu.set(n),i.uniformMatrix2fv(this.addr,!1,eu),Kt(t,n)}}function U_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Qc.set(n),i.uniformMatrix3fv(this.addr,!1,Qc),Kt(t,n)}}function N_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Jc.set(n),i.uniformMatrix4fv(this.addr,!1,Jc),Kt(t,n)}}function O_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function F_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function B_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function H_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function G_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function k_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function V_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function W_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?gh:mh;t.setTexture2D(e||s,r)}function X_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vh,r)}function Y_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||xh,r)}function q_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||_h,r)}function $_(i){switch(i){case 5126:return C_;case 35664:return P_;case 35665:return L_;case 35666:return D_;case 35674:return I_;case 35675:return U_;case 35676:return N_;case 5124:case 35670:return O_;case 35667:case 35671:return F_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return H_;case 36294:return G_;case 36295:return k_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return q_}}function j_(i,e){i.uniform1fv(this.addr,e)}function Z_(i,e){const t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function K_(i,e){const t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function J_(i,e){const t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function Q_(i,e){const t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function e0(i,e){const t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function t0(i,e){const t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function n0(i,e){i.uniform1iv(this.addr,e)}function i0(i,e){i.uniform2iv(this.addr,e)}function r0(i,e){i.uniform3iv(this.addr,e)}function s0(i,e){i.uniform4iv(this.addr,e)}function o0(i,e){i.uniform1uiv(this.addr,e)}function a0(i,e){i.uniform2uiv(this.addr,e)}function l0(i,e){i.uniform3uiv(this.addr,e)}function c0(i,e){i.uniform4uiv(this.addr,e)}function u0(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||mh,s[o])}function h0(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vh,s[o])}function f0(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||xh,s[o])}function d0(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_h,s[o])}function p0(i){switch(i){case 5126:return j_;case 35664:return Z_;case 35665:return K_;case 35666:return J_;case 35674:return Q_;case 35675:return e0;case 35676:return t0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return r0;case 35669:case 35673:return s0;case 5125:return o0;case 36294:return a0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return d0}}class m0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$_(t.type)}}class g0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p0(t.type)}}class _0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function tu(i,e){i.seq.push(e),i.map[e.id]=e}function v0(i,e,t){const n=i.name,r=n.length;for(Fa.lastIndex=0;;){const s=Fa.exec(n),o=Fa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){tu(t,c===void 0?new m0(a,i,e):new g0(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new _0(a),tu(t,h)),t=h}}}class bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);v0(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function nu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const x0=37297;let y0=0;function M0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function A0(i){const e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(i);let n;switch(e===t?n="":e===Lo&&t===Po?n="LinearDisplayP3ToLinearSRGB":e===Po&&t===Lo&&(n="LinearSRGBToLinearDisplayP3"),i){case Ei:case Go:return[n,"LinearTransferOETF"];case an:case dl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function iu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+M0(i.getShaderSource(e),o)}else return r}function S0(i,e){const t=A0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function E0(i,e){let t;switch(e){case Ud:t="Linear";break;case Nd:t="Reinhard";break;case Od:t="OptimizedCineon";break;case Fd:t="ACESFilmic";break;case zd:t="AgX";break;case Bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function b0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zr).join(`
`)}function T0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zr).join(`
`)}function w0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Zr(i){return i!==""}function ru(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function su(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(C0,L0)}const P0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function L0(i,e){let t=ut[e];if(t===void 0){const n=P0.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nl(t)}const D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(i){return i.replace(D0,I0)}function I0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function au(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function U0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ld?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function N0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case Ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function F0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wu:e="ENVMAP_BLENDING_MULTIPLY";break;case Dd:e="ENVMAP_BLENDING_MIX";break;case Id:e="ENVMAP_BLENDING_ADD";break}return e}function B0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function z0(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=U0(t),c=N0(t),u=O0(t),h=F0(t),p=B0(t),m=t.isWebGL2?"":b0(t),v=T0(t),M=w0(s),g=r.createProgram();let f,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Zr).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Zr).join(`
`),S.length>0&&(S+=`
`)):(f=[au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),S=[m,au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?ut.tonemapping_pars_fragment:"",t.toneMapping!==zi?E0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,S0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),o=nl(o),o=ru(o,t),o=su(o,t),a=nl(a),a=ru(a,t),a=su(a,t),o=ou(o),a=ou(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const b=y+f+o,D=y+S+a,L=nu(r,r.VERTEX_SHADER,b),P=nu(r,r.FRAGMENT_SHADER,D);r.attachShader(g,L),r.attachShader(g,P),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function G($){if(i.debug.checkShaderErrors){const ue=r.getProgramInfoLog(g).trim(),B=r.getShaderInfoLog(L).trim(),k=r.getShaderInfoLog(P).trim();let q=!0,oe=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,L,P);else{const te=iu(r,L,"vertex"),ne=iu(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+ue+`
`+te+`
`+ne)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(B===""||k==="")&&(oe=!1);oe&&($.diagnostics={runnable:q,programLog:ue,vertexShader:{log:B,prefix:f},fragmentShader:{log:k,prefix:S}})}r.deleteShader(L),r.deleteShader(P),E=new bo(r,g),C=R0(r,g)}let E;this.getUniforms=function(){return E===void 0&&G(this),E};let C;this.getAttributes=function(){return C===void 0&&G(this),C};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(g,x0)),H},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=P,this}let H0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new k0(e),t.set(e,n)),n}}class k0{constructor(e){this.id=H0++,this.code=e,this.usedTimes=0}}function V0(i,e,t,n,r,s,o){const a=new pl,l=new G0,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return E===0?"uv":`uv${E}`}function g(E,C,H,$,ue){const B=$.fog,k=ue.geometry,q=E.isMeshStandardMaterial?$.environment:null,oe=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),te=oe&&oe.mapping===Ho?oe.image.height:null,ne=v[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const me=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_e=me!==void 0?me.length:0;let De=0;k.morphAttributes.position!==void 0&&(De=1),k.morphAttributes.normal!==void 0&&(De=2),k.morphAttributes.color!==void 0&&(De=3);let Q,ge,Re,ze;if(ne){const qt=ii[ne];Q=qt.vertexShader,ge=qt.fragmentShader}else Q=E.vertexShader,ge=E.fragmentShader,l.update(E),Re=l.getVertexShaderID(E),ze=l.getFragmentShaderID(E);const Oe=i.getRenderTarget(),Ze=ue.isInstancedMesh===!0,qe=ue.isBatchedMesh===!0,ke=!!E.map,Ke=!!E.matcap,N=!!oe,be=!!E.aoMap,ie=!!E.lightMap,xe=!!E.bumpMap,re=!!E.normalMap,Ve=!!E.displacementMap,Ie=!!E.emissiveMap,w=!!E.metalnessMap,A=!!E.roughnessMap,V=E.anisotropy>0,le=E.clearcoat>0,he=E.iridescence>0,de=E.sheen>0,Ge=E.transmission>0,Pe=V&&!!E.anisotropyMap,Ne=le&&!!E.clearcoatMap,Xe=le&&!!E.clearcoatNormalMap,Je=le&&!!E.clearcoatRoughnessMap,fe=he&&!!E.iridescenceMap,et=he&&!!E.iridescenceThicknessMap,U=de&&!!E.sheenColorMap,pe=de&&!!E.sheenRoughnessMap,we=!!E.specularMap,ye=!!E.specularColorMap,He=!!E.specularIntensityMap,lt=Ge&&!!E.transmissionMap,dt=Ge&&!!E.thicknessMap,at=!!E.gradientMap,Te=!!E.alphaMap,O=E.alphaTest>0,Ee=!!E.alphaHash,se=!!E.extensions,$e=!!k.attributes.uv1,Fe=!!k.attributes.uv2,rt=!!k.attributes.uv3;let gt=zi;return E.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(gt=i.toneMapping),{isWebGL2:u,shaderID:ne,shaderType:E.type,shaderName:E.name,vertexShader:Q,fragmentShader:ge,defines:E.defines,customVertexShaderID:Re,customFragmentShaderID:ze,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:qe,instancing:Ze,instancingColor:Ze&&ue.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Ei,map:ke,matcap:Ke,envMap:N,envMapMode:N&&oe.mapping,envMapCubeUVHeight:te,aoMap:be,lightMap:ie,bumpMap:xe,normalMap:re,displacementMap:p&&Ve,emissiveMap:Ie,normalMapObjectSpace:re&&E.normalMapType===Kd,normalMapTangentSpace:re&&E.normalMapType===eh,metalnessMap:w,roughnessMap:A,anisotropy:V,anisotropyMap:Pe,clearcoat:le,clearcoatMap:Ne,clearcoatNormalMap:Xe,clearcoatRoughnessMap:Je,iridescence:he,iridescenceMap:fe,iridescenceThicknessMap:et,sheen:de,sheenColorMap:U,sheenRoughnessMap:pe,specularMap:we,specularColorMap:ye,specularIntensityMap:He,transmission:Ge,transmissionMap:lt,thicknessMap:dt,gradientMap:at,opaque:E.transparent===!1&&E.blending===Jr,alphaMap:Te,alphaTest:O,alphaHash:Ee,combine:E.combine,mapUv:ke&&M(E.map.channel),aoMapUv:be&&M(E.aoMap.channel),lightMapUv:ie&&M(E.lightMap.channel),bumpMapUv:xe&&M(E.bumpMap.channel),normalMapUv:re&&M(E.normalMap.channel),displacementMapUv:Ve&&M(E.displacementMap.channel),emissiveMapUv:Ie&&M(E.emissiveMap.channel),metalnessMapUv:w&&M(E.metalnessMap.channel),roughnessMapUv:A&&M(E.roughnessMap.channel),anisotropyMapUv:Pe&&M(E.anisotropyMap.channel),clearcoatMapUv:Ne&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:et&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:U&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:pe&&M(E.sheenRoughnessMap.channel),specularMapUv:we&&M(E.specularMap.channel),specularColorMapUv:ye&&M(E.specularColorMap.channel),specularIntensityMapUv:He&&M(E.specularIntensityMap.channel),transmissionMapUv:lt&&M(E.transmissionMap.channel),thicknessMapUv:dt&&M(E.thicknessMap.channel),alphaMapUv:Te&&M(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(re||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:Fe,vertexUv3s:rt,pointsUvs:ue.isPoints===!0&&!!k.attributes.uv&&(ke||Te),fog:!!B,useFog:E.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ue.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:De,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ke&&E.map.isVideoTexture===!0&&St.getTransfer(E.map.colorSpace)===wt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_i,flipSided:E.side===wn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:se&&E.extensions.derivatives===!0,extensionFragDepth:se&&E.extensions.fragDepth===!0,extensionDrawBuffers:se&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)C.push(H),C.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(S(C,E),y(C,E),C.push(i.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function S(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function y(E,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),E.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function b(E){const C=v[E.type];let H;if(C){const $=ii[C];H=bp.clone($.uniforms)}else H=E.uniforms;return H}function D(E,C){let H;for(let $=0,ue=c.length;$<ue;$++){const B=c[$];if(B.cacheKey===C){H=B,++H.usedTimes;break}}return H===void 0&&(H=new z0(i,C,E,s),c.push(H)),H}function L(E){if(--E.usedTimes===0){const C=c.indexOf(E);c[C]=c[c.length-1],c.pop(),E.destroy()}}function P(E){l.remove(E)}function G(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:b,acquireProgram:D,releaseProgram:L,releaseShaderCache:P,programs:c,dispose:G}}function W0(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function X0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,p,m,v,M,g){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:m,groupOrder:v,renderOrder:h.renderOrder,z:M,group:g},i[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=m,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=M,f.group=g),e++,f}function a(h,p,m,v,M,g){const f=o(h,p,m,v,M,g);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(h,p,m,v,M,g){const f=o(h,p,m,v,M,g);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,p){t.length>1&&t.sort(h||X0),n.length>1&&n.sort(p||lu),r.length>1&&r.sort(p||lu)}function u(){for(let h=e,p=i.length;h<p;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Y0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new cu,i.set(n,[o])):r>=s.length?(o=new cu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function q0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ft};break;case"SpotLight":t={position:new F,direction:new F,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function $0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let j0=0;function Z0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function K0(i,e){const t=new q0,n=$0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,o=new xt,a=new xt;function l(u,h){let p=0,m=0,v=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let M=0,g=0,f=0,S=0,y=0,b=0,D=0,L=0,P=0,G=0,E=0;u.sort(Z0);const C=h===!0?Math.PI:1;for(let $=0,ue=u.length;$<ue;$++){const B=u[$],k=B.color,q=B.intensity,oe=B.distance,te=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=k.r*q*C,m+=k.g*q*C,v+=k.b*q*C;else if(B.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(B.sh.coefficients[ne],q);E++}else if(B.isDirectionalLight){const ne=t.get(B);if(ne.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){const me=B.shadow,_e=n.get(B);_e.shadowBias=me.bias,_e.shadowNormalBias=me.normalBias,_e.shadowRadius=me.radius,_e.shadowMapSize=me.mapSize,r.directionalShadow[M]=_e,r.directionalShadowMap[M]=te,r.directionalShadowMatrix[M]=B.shadow.matrix,b++}r.directional[M]=ne,M++}else if(B.isSpotLight){const ne=t.get(B);ne.position.setFromMatrixPosition(B.matrixWorld),ne.color.copy(k).multiplyScalar(q*C),ne.distance=oe,ne.coneCos=Math.cos(B.angle),ne.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ne.decay=B.decay,r.spot[f]=ne;const me=B.shadow;if(B.map&&(r.spotLightMap[P]=B.map,P++,me.updateMatrices(B),B.castShadow&&G++),r.spotLightMatrix[f]=me.matrix,B.castShadow){const _e=n.get(B);_e.shadowBias=me.bias,_e.shadowNormalBias=me.normalBias,_e.shadowRadius=me.radius,_e.shadowMapSize=me.mapSize,r.spotShadow[f]=_e,r.spotShadowMap[f]=te,L++}f++}else if(B.isRectAreaLight){const ne=t.get(B);ne.color.copy(k).multiplyScalar(q),ne.halfWidth.set(B.width*.5,0,0),ne.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=ne,S++}else if(B.isPointLight){const ne=t.get(B);if(ne.color.copy(B.color).multiplyScalar(B.intensity*C),ne.distance=B.distance,ne.decay=B.decay,B.castShadow){const me=B.shadow,_e=n.get(B);_e.shadowBias=me.bias,_e.shadowNormalBias=me.normalBias,_e.shadowRadius=me.radius,_e.shadowMapSize=me.mapSize,_e.shadowCameraNear=me.camera.near,_e.shadowCameraFar=me.camera.far,r.pointShadow[g]=_e,r.pointShadowMap[g]=te,r.pointShadowMatrix[g]=B.shadow.matrix,D++}r.point[g]=ne,g++}else if(B.isHemisphereLight){const ne=t.get(B);ne.skyColor.copy(B.color).multiplyScalar(q*C),ne.groundColor.copy(B.groundColor).multiplyScalar(q*C),r.hemi[y]=ne,y++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=v;const H=r.hash;(H.directionalLength!==M||H.pointLength!==g||H.spotLength!==f||H.rectAreaLength!==S||H.hemiLength!==y||H.numDirectionalShadows!==b||H.numPointShadows!==D||H.numSpotShadows!==L||H.numSpotMaps!==P||H.numLightProbes!==E)&&(r.directional.length=M,r.spot.length=f,r.rectArea.length=S,r.point.length=g,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=L+P-G,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=E,H.directionalLength=M,H.pointLength=g,H.spotLength=f,H.rectAreaLength=S,H.hemiLength=y,H.numDirectionalShadows=b,H.numPointShadows=D,H.numSpotShadows=L,H.numSpotMaps=P,H.numLightProbes=E,r.version=j0++)}function c(u,h){let p=0,m=0,v=0,M=0,g=0;const f=h.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const b=u[S];if(b.isDirectionalLight){const D=r.directional[p];D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(f),p++}else if(b.isSpotLight){const D=r.spot[v];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(f),v++}else if(b.isRectAreaLight){const D=r.rectArea[M];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(f),a.identity(),o.copy(b.matrixWorld),o.premultiply(f),a.extractRotation(o),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),M++}else if(b.isPointLight){const D=r.point[m];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(f),m++}else if(b.isHemisphereLight){const D=r.hemi[g];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(f),g++}}}return{setup:l,setupView:c,state:r}}function uu(i,e){const t=new K0(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function J0(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new uu(i,e),t.set(s,[l])):o>=a.length?(l=new uu(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Q0 extends yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ev extends yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iv(i,e,t){let n=new gl;const r=new Se,s=new Se,o=new tn,a=new Q0({depthPacking:Zd}),l=new ev,c={},u=t.maxTextureSize,h={[Vi]:wn,[wn]:Vi,[_i]:_i},p=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:tv,fragmentShader:nv}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new nn;v.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new bn(v,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vu;let f=this.type;this.render=function(L,P,G){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const E=i.getRenderTarget(),C=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Bi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ue=f!==gi&&this.type===gi,B=f===gi&&this.type!==gi;for(let k=0,q=L.length;k<q;k++){const oe=L[k],te=oe.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;r.copy(te.mapSize);const ne=te.getFrameExtents();if(r.multiply(ne),s.copy(te.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,te.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,te.mapSize.y=s.y)),te.map===null||ue===!0||B===!0){const _e=this.type!==gi?{minFilter:An,magFilter:An}:{};te.map!==null&&te.map.dispose(),te.map=new fr(r.x,r.y,_e),te.map.texture.name=oe.name+".shadowMap",te.camera.updateProjectionMatrix()}i.setRenderTarget(te.map),i.clear();const me=te.getViewportCount();for(let _e=0;_e<me;_e++){const De=te.getViewport(_e);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),$.viewport(o),te.updateMatrices(oe,_e),n=te.getFrustum(),b(P,G,te.camera,oe,this.type)}te.isPointLightShadow!==!0&&this.type===gi&&S(te,G),te.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(E,C,H)};function S(L,P){const G=e.update(M);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new fr(r.x,r.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(P,null,G,p,M,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(P,null,G,m,M,null)}function y(L,P,G,E){let C=null;const H=G.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)C=H;else if(C=G.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const $=C.uuid,ue=P.uuid;let B=c[$];B===void 0&&(B={},c[$]=B);let k=B[ue];k===void 0&&(k=C.clone(),B[ue]=k,P.addEventListener("dispose",D)),C=k}if(C.visible=P.visible,C.wireframe=P.wireframe,E===gi?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:h[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=i.properties.get(C);$.light=G}return C}function b(L,P,G,E,C){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===gi)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,L.matrixWorld);const ue=e.update(L),B=L.material;if(Array.isArray(B)){const k=ue.groups;for(let q=0,oe=k.length;q<oe;q++){const te=k[q],ne=B[te.materialIndex];if(ne&&ne.visible){const me=y(L,ne,E,C);L.onBeforeShadow(i,L,P,G,ue,me,te),i.renderBufferDirect(G,null,ue,me,L,te),L.onAfterShadow(i,L,P,G,ue,me,te)}}}else if(B.visible){const k=y(L,B,E,C);L.onBeforeShadow(i,L,P,G,ue,k,null),i.renderBufferDirect(G,null,ue,k,L,null),L.onAfterShadow(i,L,P,G,ue,k,null)}}const $=L.children;for(let ue=0,B=$.length;ue<B;ue++)b($[ue],P,G,E,C)}function D(L){L.target.removeEventListener("dispose",D);for(const G in c){const E=c[G],C=L.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function rv(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const Ee=new tn;let se=null;const $e=new tn(0,0,0,0);return{setMask:function(Fe){se!==Fe&&!O&&(i.colorMask(Fe,Fe,Fe,Fe),se=Fe)},setLocked:function(Fe){O=Fe},setClear:function(Fe,rt,gt,Ht,qt){qt===!0&&(Fe*=Ht,rt*=Ht,gt*=Ht),Ee.set(Fe,rt,gt,Ht),$e.equals(Ee)===!1&&(i.clearColor(Fe,rt,gt,Ht),$e.copy(Ee))},reset:function(){O=!1,se=null,$e.set(-1,0,0,0)}}}function s(){let O=!1,Ee=null,se=null,$e=null;return{setTest:function(Fe){Fe?qe(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(Fe){Ee!==Fe&&!O&&(i.depthMask(Fe),Ee=Fe)},setFunc:function(Fe){if(se!==Fe){switch(Fe){case bd:i.depthFunc(i.NEVER);break;case Td:i.depthFunc(i.ALWAYS);break;case wd:i.depthFunc(i.LESS);break;case Ro:i.depthFunc(i.LEQUAL);break;case Rd:i.depthFunc(i.EQUAL);break;case Cd:i.depthFunc(i.GEQUAL);break;case Pd:i.depthFunc(i.GREATER);break;case Ld:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=Fe}},setLocked:function(Fe){O=Fe},setClear:function(Fe){$e!==Fe&&(i.clearDepth(Fe),$e=Fe)},reset:function(){O=!1,Ee=null,se=null,$e=null}}}function o(){let O=!1,Ee=null,se=null,$e=null,Fe=null,rt=null,gt=null,Ht=null,qt=null;return{setTest:function(vt){O||(vt?qe(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(vt){Ee!==vt&&!O&&(i.stencilMask(vt),Ee=vt)},setFunc:function(vt,Jt,Un){(se!==vt||$e!==Jt||Fe!==Un)&&(i.stencilFunc(vt,Jt,Un),se=vt,$e=Jt,Fe=Un)},setOp:function(vt,Jt,Un){(rt!==vt||gt!==Jt||Ht!==Un)&&(i.stencilOp(vt,Jt,Un),rt=vt,gt=Jt,Ht=Un)},setLocked:function(vt){O=vt},setClear:function(vt){qt!==vt&&(i.clearStencil(vt),qt=vt)},reset:function(){O=!1,Ee=null,se=null,$e=null,Fe=null,rt=null,gt=null,Ht=null,qt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let p={},m={},v=new WeakMap,M=[],g=null,f=!1,S=null,y=null,b=null,D=null,L=null,P=null,G=null,E=new ft(0,0,0),C=0,H=!1,$=null,ue=null,B=null,k=null,q=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ne=0;const me=i.getParameter(i.VERSION);me.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(me)[1]),te=ne>=1):me.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),te=ne>=2);let _e=null,De={};const Q=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Re=new tn().fromArray(Q),ze=new tn().fromArray(ge);function Oe(O,Ee,se,$e){const Fe=new Uint8Array(4),rt=i.createTexture();i.bindTexture(O,rt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<se;gt++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ee,0,i.RGBA,1,1,$e,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(Ee+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return rt}const Ze={};Ze[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ze[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ze[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ze[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),qe(i.DEPTH_TEST),l.setFunc(Ro),Ie(!1),w(Yl),qe(i.CULL_FACE),re(Bi);function qe(O){p[O]!==!0&&(i.enable(O),p[O]=!0)}function ke(O){p[O]!==!1&&(i.disable(O),p[O]=!1)}function Ke(O,Ee){return m[O]!==Ee?(i.bindFramebuffer(O,Ee),m[O]=Ee,n&&(O===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ee),O===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function N(O,Ee){let se=M,$e=!1;if(O)if(se=v.get(Ee),se===void 0&&(se=[],v.set(Ee,se)),O.isWebGLMultipleRenderTargets){const Fe=O.texture;if(se.length!==Fe.length||se[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,gt=Fe.length;rt<gt;rt++)se[rt]=i.COLOR_ATTACHMENT0+rt;se.length=Fe.length,$e=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,$e=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,$e=!0);$e&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function be(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const ie={[tr]:i.FUNC_ADD,[ud]:i.FUNC_SUBTRACT,[hd]:i.FUNC_REVERSE_SUBTRACT};if(n)ie[Zl]=i.MIN,ie[Kl]=i.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(ie[Zl]=O.MIN_EXT,ie[Kl]=O.MAX_EXT)}const xe={[fd]:i.ZERO,[dd]:i.ONE,[pd]:i.SRC_COLOR,[Ya]:i.SRC_ALPHA,[yd]:i.SRC_ALPHA_SATURATE,[vd]:i.DST_COLOR,[gd]:i.DST_ALPHA,[md]:i.ONE_MINUS_SRC_COLOR,[qa]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[_d]:i.ONE_MINUS_DST_ALPHA,[Md]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[Sd]:i.CONSTANT_ALPHA,[Ed]:i.ONE_MINUS_CONSTANT_ALPHA};function re(O,Ee,se,$e,Fe,rt,gt,Ht,qt,vt){if(O===Bi){f===!0&&(ke(i.BLEND),f=!1);return}if(f===!1&&(qe(i.BLEND),f=!0),O!==cd){if(O!==S||vt!==H){if((y!==tr||L!==tr)&&(i.blendEquation(i.FUNC_ADD),y=tr,L=tr),vt)switch(O){case Jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.ONE,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,D=null,P=null,G=null,E.set(0,0,0),C=0,S=O,H=vt}return}Fe=Fe||Ee,rt=rt||se,gt=gt||$e,(Ee!==y||Fe!==L)&&(i.blendEquationSeparate(ie[Ee],ie[Fe]),y=Ee,L=Fe),(se!==b||$e!==D||rt!==P||gt!==G)&&(i.blendFuncSeparate(xe[se],xe[$e],xe[rt],xe[gt]),b=se,D=$e,P=rt,G=gt),(Ht.equals(E)===!1||qt!==C)&&(i.blendColor(Ht.r,Ht.g,Ht.b,qt),E.copy(Ht),C=qt),S=O,H=!1}function Ve(O,Ee){O.side===_i?ke(i.CULL_FACE):qe(i.CULL_FACE);let se=O.side===wn;Ee&&(se=!se),Ie(se),O.blending===Jr&&O.transparent===!1?re(Bi):re(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const $e=O.stencilWrite;c.setTest($e),$e&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),V(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?qe(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(O){$!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),$=O)}function w(O){O!==od?(qe(i.CULL_FACE),O!==ue&&(O===Yl?i.cullFace(i.BACK):O===ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),ue=O}function A(O){O!==B&&(te&&i.lineWidth(O),B=O)}function V(O,Ee,se){O?(qe(i.POLYGON_OFFSET_FILL),(k!==Ee||q!==se)&&(i.polygonOffset(Ee,se),k=Ee,q=se)):ke(i.POLYGON_OFFSET_FILL)}function le(O){O?qe(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function he(O){O===void 0&&(O=i.TEXTURE0+oe-1),_e!==O&&(i.activeTexture(O),_e=O)}function de(O,Ee,se){se===void 0&&(_e===null?se=i.TEXTURE0+oe-1:se=_e);let $e=De[se];$e===void 0&&($e={type:void 0,texture:void 0},De[se]=$e),($e.type!==O||$e.texture!==Ee)&&(_e!==se&&(i.activeTexture(se),_e=se),i.bindTexture(O,Ee||Ze[O]),$e.type=O,$e.texture=Ee)}function Ge(){const O=De[_e];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Je(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function U(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(O){Re.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Re.copy(O))}function lt(O){ze.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ze.copy(O))}function dt(O,Ee){let se=h.get(Ee);se===void 0&&(se=new WeakMap,h.set(Ee,se));let $e=se.get(O);$e===void 0&&($e=i.getUniformBlockIndex(Ee,O.name),se.set(O,$e))}function at(O,Ee){const $e=h.get(Ee).get(O);u.get(Ee)!==$e&&(i.uniformBlockBinding(Ee,$e,O.__bindingPointIndex),u.set(Ee,$e))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},_e=null,De={},m={},v=new WeakMap,M=[],g=null,f=!1,S=null,y=null,b=null,D=null,L=null,P=null,G=null,E=new ft(0,0,0),C=0,H=!1,$=null,ue=null,B=null,k=null,q=null,Re.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:qe,disable:ke,bindFramebuffer:Ke,drawBuffers:N,useProgram:be,setBlending:re,setMaterial:Ve,setFlipSided:Ie,setCullFace:w,setLineWidth:A,setPolygonOffset:V,setScissorTest:le,activeTexture:he,bindTexture:de,unbindTexture:Ge,compressedTexImage2D:Pe,compressedTexImage3D:Ne,texImage2D:we,texImage3D:ye,updateUBOMapping:dt,uniformBlockBinding:at,texStorage2D:U,texStorage3D:pe,texSubImage2D:Xe,texSubImage3D:Je,compressedTexSubImage2D:fe,compressedTexSubImage3D:et,scissor:He,viewport:lt,reset:Te}}function sv(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,A){return m?new OffscreenCanvas(w,A):Io("canvas")}function M(w,A,V,le){let he=1;if((w.width>le||w.height>le)&&(he=le/Math.max(w.width,w.height)),he<1||A===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const de=A?tl:Math.floor,Ge=de(he*w.width),Pe=de(he*w.height);h===void 0&&(h=v(Ge,Pe));const Ne=V?v(Ge,Pe):h;return Ne.width=Ge,Ne.height=Pe,Ne.getContext("2d").drawImage(w,0,0,Ge,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ge+"x"+Pe+")."),Ne}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function g(w){return Tc(w.width)&&Tc(w.height)}function f(w){return a?!1:w.wrapS!==Zn||w.wrapT!==Zn||w.minFilter!==An&&w.minFilter!==Fn}function S(w,A){return w.generateMipmaps&&A&&w.minFilter!==An&&w.minFilter!==Fn}function y(w){i.generateMipmap(w)}function b(w,A,V,le,he=!1){if(a===!1)return A;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let de=A;if(A===i.RED&&(V===i.FLOAT&&(de=i.R32F),V===i.HALF_FLOAT&&(de=i.R16F),V===i.UNSIGNED_BYTE&&(de=i.R8)),A===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(de=i.R8UI),V===i.UNSIGNED_SHORT&&(de=i.R16UI),V===i.UNSIGNED_INT&&(de=i.R32UI),V===i.BYTE&&(de=i.R8I),V===i.SHORT&&(de=i.R16I),V===i.INT&&(de=i.R32I)),A===i.RG&&(V===i.FLOAT&&(de=i.RG32F),V===i.HALF_FLOAT&&(de=i.RG16F),V===i.UNSIGNED_BYTE&&(de=i.RG8)),A===i.RGBA){const Ge=he?Co:St.getTransfer(le);V===i.FLOAT&&(de=i.RGBA32F),V===i.HALF_FLOAT&&(de=i.RGBA16F),V===i.UNSIGNED_BYTE&&(de=Ge===wt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function D(w,A,V){return S(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==An&&w.minFilter!==Fn?Math.log2(Math.max(A.width,A.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?A.mipmaps.length:1}function L(w){return w===An||w===Jl||w===ca?i.NEAREST:i.LINEAR}function P(w){const A=w.target;A.removeEventListener("dispose",P),E(A),A.isVideoTexture&&u.delete(A)}function G(w){const A=w.target;A.removeEventListener("dispose",G),H(A)}function E(w){const A=n.get(w);if(A.__webglInit===void 0)return;const V=w.source,le=p.get(V);if(le){const he=le[A.__cacheKey];he.usedTimes--,he.usedTimes===0&&C(w),Object.keys(le).length===0&&p.delete(V)}n.remove(w)}function C(w){const A=n.get(w);i.deleteTexture(A.__webglTexture);const V=w.source,le=p.get(V);delete le[A.__cacheKey],o.memory.textures--}function H(w){const A=w.texture,V=n.get(w),le=n.get(A);if(le.__webglTexture!==void 0&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(V.__webglFramebuffer[he]))for(let de=0;de<V.__webglFramebuffer[he].length;de++)i.deleteFramebuffer(V.__webglFramebuffer[he][de]);else i.deleteFramebuffer(V.__webglFramebuffer[he]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[he])}else{if(Array.isArray(V.__webglFramebuffer))for(let he=0;he<V.__webglFramebuffer.length;he++)i.deleteFramebuffer(V.__webglFramebuffer[he]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let he=0;he<V.__webglColorRenderbuffer.length;he++)V.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[he]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let he=0,de=A.length;he<de;he++){const Ge=n.get(A[he]);Ge.__webglTexture&&(i.deleteTexture(Ge.__webglTexture),o.memory.textures--),n.remove(A[he])}n.remove(A),n.remove(w)}let $=0;function ue(){$=0}function B(){const w=$;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),$+=1,w}function k(w){const A=[];return A.push(w.wrapS),A.push(w.wrapT),A.push(w.wrapR||0),A.push(w.magFilter),A.push(w.minFilter),A.push(w.anisotropy),A.push(w.internalFormat),A.push(w.format),A.push(w.type),A.push(w.generateMipmaps),A.push(w.premultiplyAlpha),A.push(w.flipY),A.push(w.unpackAlignment),A.push(w.colorSpace),A.join()}function q(w,A){const V=n.get(w);if(w.isVideoTexture&&Ve(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const le=w.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(V,w,A);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+A)}function oe(w,A){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Re(V,w,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+A)}function te(w,A){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Re(V,w,A);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+A)}function ne(w,A){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ze(V,w,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+A)}const me={[Za]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},_e={[An]:i.NEAREST,[Jl]:i.NEAREST_MIPMAP_NEAREST,[ca]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Hd]:i.LINEAR_MIPMAP_NEAREST,[Rs]:i.LINEAR_MIPMAP_LINEAR},De={[Jd]:i.NEVER,[rp]:i.ALWAYS,[Qd]:i.LESS,[th]:i.LEQUAL,[ep]:i.EQUAL,[ip]:i.GEQUAL,[tp]:i.GREATER,[np]:i.NOTEQUAL};function Q(w,A,V){if(V?(i.texParameteri(w,i.TEXTURE_WRAP_S,me[A.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,me[A.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,me[A.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_e[A.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_e[A.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Zn||A.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,L(A.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,L(A.minFilter)),A.minFilter!==An&&A.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,De[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===An||A.minFilter!==ca&&A.minFilter!==Rs||A.type===Ui&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Cs&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(w,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ge(w,A){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,A.addEventListener("dispose",P));const le=A.source;let he=p.get(le);he===void 0&&(he={},p.set(le,he));const de=k(A);if(de!==w.__cacheKey){he[de]===void 0&&(he[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),he[de].usedTimes++;const Ge=he[w.__cacheKey];Ge!==void 0&&(he[w.__cacheKey].usedTimes--,Ge.usedTimes===0&&C(A)),w.__cacheKey=de,w.__webglTexture=he[de].texture}return V}function Re(w,A,V){let le=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(le=i.TEXTURE_3D);const he=ge(w,A),de=A.source;t.bindTexture(le,w.__webglTexture,i.TEXTURE0+V);const Ge=n.get(de);if(de.version!==Ge.__version||he===!0){t.activeTexture(i.TEXTURE0+V);const Pe=St.getPrimaries(St.workingColorSpace),Ne=A.colorSpace===Hn?null:St.getPrimaries(A.colorSpace),Xe=A.colorSpace===Hn||Pe===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const Je=f(A)&&g(A.image)===!1;let fe=M(A.image,Je,!1,r.maxTextureSize);fe=Ie(A,fe);const et=g(fe)||a,U=s.convert(A.format,A.colorSpace);let pe=s.convert(A.type),we=b(A.internalFormat,U,pe,A.colorSpace,A.isVideoTexture);Q(le,A,et);let ye;const He=A.mipmaps,lt=a&&A.isVideoTexture!==!0&&we!==Ju,dt=Ge.__version===void 0||he===!0,at=D(A,fe,et);if(A.isDepthTexture)we=i.DEPTH_COMPONENT,a?A.type===Ui?we=i.DEPTH_COMPONENT32F:A.type===Ii?we=i.DEPTH_COMPONENT24:A.type===ir?we=i.DEPTH24_STENCIL8:we=i.DEPTH_COMPONENT16:A.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===rr&&we===i.DEPTH_COMPONENT&&A.type!==fl&&A.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ii,pe=s.convert(A.type)),A.format===ns&&we===i.DEPTH_COMPONENT&&(we=i.DEPTH_STENCIL,A.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ir,pe=s.convert(A.type))),dt&&(lt?t.texStorage2D(i.TEXTURE_2D,1,we,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,we,fe.width,fe.height,0,U,pe,null));else if(A.isDataTexture)if(He.length>0&&et){lt&&dt&&t.texStorage2D(i.TEXTURE_2D,at,we,He[0].width,He[0].height);for(let Te=0,O=He.length;Te<O;Te++)ye=He[Te],lt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,ye.width,ye.height,U,pe,ye.data):t.texImage2D(i.TEXTURE_2D,Te,we,ye.width,ye.height,0,U,pe,ye.data);A.generateMipmaps=!1}else lt?(dt&&t.texStorage2D(i.TEXTURE_2D,at,we,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,U,pe,fe.data)):t.texImage2D(i.TEXTURE_2D,0,we,fe.width,fe.height,0,U,pe,fe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){lt&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,at,we,He[0].width,He[0].height,fe.depth);for(let Te=0,O=He.length;Te<O;Te++)ye=He[Te],A.format!==Kn?U!==null?lt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,ye.width,ye.height,fe.depth,U,ye.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Te,we,ye.width,ye.height,fe.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,ye.width,ye.height,fe.depth,U,pe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Te,we,ye.width,ye.height,fe.depth,0,U,pe,ye.data)}else{lt&&dt&&t.texStorage2D(i.TEXTURE_2D,at,we,He[0].width,He[0].height);for(let Te=0,O=He.length;Te<O;Te++)ye=He[Te],A.format!==Kn?U!==null?lt?t.compressedTexSubImage2D(i.TEXTURE_2D,Te,0,0,ye.width,ye.height,U,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,Te,we,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,ye.width,ye.height,U,pe,ye.data):t.texImage2D(i.TEXTURE_2D,Te,we,ye.width,ye.height,0,U,pe,ye.data)}else if(A.isDataArrayTexture)lt?(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,at,we,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,U,pe,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,fe.width,fe.height,fe.depth,0,U,pe,fe.data);else if(A.isData3DTexture)lt?(dt&&t.texStorage3D(i.TEXTURE_3D,at,we,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,U,pe,fe.data)):t.texImage3D(i.TEXTURE_3D,0,we,fe.width,fe.height,fe.depth,0,U,pe,fe.data);else if(A.isFramebufferTexture){if(dt)if(lt)t.texStorage2D(i.TEXTURE_2D,at,we,fe.width,fe.height);else{let Te=fe.width,O=fe.height;for(let Ee=0;Ee<at;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,we,Te,O,0,U,pe,null),Te>>=1,O>>=1}}else if(He.length>0&&et){lt&&dt&&t.texStorage2D(i.TEXTURE_2D,at,we,He[0].width,He[0].height);for(let Te=0,O=He.length;Te<O;Te++)ye=He[Te],lt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,U,pe,ye):t.texImage2D(i.TEXTURE_2D,Te,we,U,pe,ye);A.generateMipmaps=!1}else lt?(dt&&t.texStorage2D(i.TEXTURE_2D,at,we,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,U,pe,fe)):t.texImage2D(i.TEXTURE_2D,0,we,U,pe,fe);S(A,et)&&y(le),Ge.__version=de.version,A.onUpdate&&A.onUpdate(A)}w.__version=A.version}function ze(w,A,V){if(A.image.length!==6)return;const le=ge(w,A),he=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);const de=n.get(he);if(he.version!==de.__version||le===!0){t.activeTexture(i.TEXTURE0+V);const Ge=St.getPrimaries(St.workingColorSpace),Pe=A.colorSpace===Hn?null:St.getPrimaries(A.colorSpace),Ne=A.colorSpace===Hn||Ge===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Xe=A.isCompressedTexture||A.image[0].isCompressedTexture,Je=A.image[0]&&A.image[0].isDataTexture,fe=[];for(let Te=0;Te<6;Te++)!Xe&&!Je?fe[Te]=M(A.image[Te],!1,!0,r.maxCubemapSize):fe[Te]=Je?A.image[Te].image:A.image[Te],fe[Te]=Ie(A,fe[Te]);const et=fe[0],U=g(et)||a,pe=s.convert(A.format,A.colorSpace),we=s.convert(A.type),ye=b(A.internalFormat,pe,we,A.colorSpace),He=a&&A.isVideoTexture!==!0,lt=de.__version===void 0||le===!0;let dt=D(A,et,U);Q(i.TEXTURE_CUBE_MAP,A,U);let at;if(Xe){He&&lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,ye,et.width,et.height);for(let Te=0;Te<6;Te++){at=fe[Te].mipmaps;for(let O=0;O<at.length;O++){const Ee=at[O];A.format!==Kn?pe!==null?He?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,0,0,Ee.width,Ee.height,pe,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,ye,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,0,0,Ee.width,Ee.height,pe,we,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,ye,Ee.width,Ee.height,0,pe,we,Ee.data)}}}else{at=A.mipmaps,He&&lt&&(at.length>0&&dt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,ye,fe[0].width,fe[0].height));for(let Te=0;Te<6;Te++)if(Je){He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,fe[Te].width,fe[Te].height,pe,we,fe[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ye,fe[Te].width,fe[Te].height,0,pe,we,fe[Te].data);for(let O=0;O<at.length;O++){const se=at[O].image[Te].image;He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,0,0,se.width,se.height,pe,we,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,ye,se.width,se.height,0,pe,we,se.data)}}else{He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,pe,we,fe[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ye,pe,we,fe[Te]);for(let O=0;O<at.length;O++){const Ee=at[O];He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,0,0,pe,we,Ee.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,ye,pe,we,Ee.image[Te])}}}S(A,U)&&y(i.TEXTURE_CUBE_MAP),de.__version=he.version,A.onUpdate&&A.onUpdate(A)}w.__version=A.version}function Oe(w,A,V,le,he,de){const Ge=s.convert(V.format,V.colorSpace),Pe=s.convert(V.type),Ne=b(V.internalFormat,Ge,Pe,V.colorSpace);if(!n.get(A).__hasExternalTextures){const Je=Math.max(1,A.width>>de),fe=Math.max(1,A.height>>de);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,de,Ne,Je,fe,A.depth,0,Ge,Pe,null):t.texImage2D(he,de,Ne,Je,fe,0,Ge,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),re(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,he,n.get(V).__webglTexture,0,xe(A)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,he,n.get(V).__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(w,A,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),A.depthBuffer&&!A.stencilBuffer){let le=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||re(A)){const he=A.depthTexture;he&&he.isDepthTexture&&(he.type===Ui?le=i.DEPTH_COMPONENT32F:he.type===Ii&&(le=i.DEPTH_COMPONENT24));const de=xe(A);re(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,le,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,le,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,le,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(A.depthBuffer&&A.stencilBuffer){const le=xe(A);V&&re(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,i.DEPTH24_STENCIL8,A.width,A.height):re(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const le=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let he=0;he<le.length;he++){const de=le[he],Ge=s.convert(de.format,de.colorSpace),Pe=s.convert(de.type),Ne=b(de.internalFormat,Ge,Pe,de.colorSpace),Xe=xe(A);V&&re(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ne,A.width,A.height):re(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,Ne,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(w,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),q(A.depthTexture,0);const le=n.get(A.depthTexture).__webglTexture,he=xe(A);if(A.depthTexture.format===rr)re(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(A.depthTexture.format===ns)re(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ke(w){const A=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!A.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");qe(A.__webglFramebuffer,w)}else if(V){A.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[le]),A.__webglDepthbuffer[le]=i.createRenderbuffer(),Ze(A.__webglDepthbuffer[le],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),Ze(A.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(w,A,V){const le=n.get(w);A!==void 0&&Oe(le.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ke(w)}function N(w){const A=w.texture,V=n.get(w),le=n.get(A);w.addEventListener("dispose",G),w.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=A.version,o.memory.textures++);const he=w.isWebGLCubeRenderTarget===!0,de=w.isWebGLMultipleRenderTargets===!0,Ge=g(w)||a;if(he){V.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(a&&A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer[Pe]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)V.__webglFramebuffer[Pe][Ne]=i.createFramebuffer()}else V.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer=[];for(let Pe=0;Pe<A.mipmaps.length;Pe++)V.__webglFramebuffer[Pe]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(de)if(r.drawBuffers){const Pe=w.texture;for(let Ne=0,Xe=Pe.length;Ne<Xe;Ne++){const Je=n.get(Pe[Ne]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&re(w)===!1){const Pe=de?A:[A];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Pe.length;Ne++){const Xe=Pe[Ne];V.__webglColorRenderbuffer[Ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Ne]);const Je=s.convert(Xe.format,Xe.colorSpace),fe=s.convert(Xe.type),et=b(Xe.internalFormat,Je,fe,Xe.colorSpace,w.isXRRenderTarget===!0),U=xe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,U,et,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,V.__webglColorRenderbuffer[Ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Q(i.TEXTURE_CUBE_MAP,A,Ge);for(let Pe=0;Pe<6;Pe++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)Oe(V.__webglFramebuffer[Pe][Ne],w,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ne);else Oe(V.__webglFramebuffer[Pe],w,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);S(A,Ge)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const Pe=w.texture;for(let Ne=0,Xe=Pe.length;Ne<Xe;Ne++){const Je=Pe[Ne],fe=n.get(Je);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),Q(i.TEXTURE_2D,Je,Ge),Oe(V.__webglFramebuffer,w,Je,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,0),S(Je,Ge)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?Pe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Pe,le.__webglTexture),Q(Pe,A,Ge),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)Oe(V.__webglFramebuffer[Ne],w,A,i.COLOR_ATTACHMENT0,Pe,Ne);else Oe(V.__webglFramebuffer,w,A,i.COLOR_ATTACHMENT0,Pe,0);S(A,Ge)&&y(Pe),t.unbindTexture()}w.depthBuffer&&ke(w)}function be(w){const A=g(w)||a,V=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let le=0,he=V.length;le<he;le++){const de=V[le];if(S(de,A)){const Ge=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(de).__webglTexture;t.bindTexture(Ge,Pe),y(Ge),t.unbindTexture()}}}function ie(w){if(a&&w.samples>0&&re(w)===!1){const A=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],V=w.width,le=w.height;let he=i.COLOR_BUFFER_BIT;const de=[],Ge=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(w),Ne=w.isWebGLMultipleRenderTargets===!0;if(Ne)for(let Xe=0;Xe<A.length;Xe++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Xe=0;Xe<A.length;Xe++){de.push(i.COLOR_ATTACHMENT0+Xe),w.depthBuffer&&de.push(Ge);const Je=Pe.__ignoreDepthValues!==void 0?Pe.__ignoreDepthValues:!1;if(Je===!1&&(w.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),Ne&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Xe]),Je===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ge])),Ne){const fe=n.get(A[Xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,V,le,0,0,V,le,he,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ne)for(let Xe=0;Xe<A.length;Xe++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Xe]);const Je=n.get(A[Xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}}function xe(w){return Math.min(r.maxSamples,w.samples)}function re(w){const A=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ve(w){const A=o.render.frame;u.get(w)!==A&&(u.set(w,A),w.update())}function Ie(w,A){const V=w.colorSpace,le=w.format,he=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Qa||V!==Ei&&V!==Hn&&(St.getTransfer(V)===wt?a===!1?e.has("EXT_sRGB")===!0&&le===Kn?(w.format=Qa,w.minFilter=Fn,w.generateMipmaps=!1):A=ih.sRGBToLinear(A):(le!==Kn||he!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),A}this.allocateTextureUnit=B,this.resetTextureUnits=ue,this.setTexture2D=q,this.setTexture2DArray=oe,this.setTexture3D=te,this.setTextureCube=ne,this.rebindTextures=Ke,this.setupRenderTarget=N,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=re}function ov(i,e,t){const n=t.isWebGL2;function r(s,o=Hn){let a;const l=St.getTransfer(o);if(s===Hi)return i.UNSIGNED_BYTE;if(s===qu)return i.UNSIGNED_SHORT_4_4_4_4;if(s===$u)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Gd)return i.BYTE;if(s===kd)return i.SHORT;if(s===fl)return i.UNSIGNED_SHORT;if(s===Yu)return i.INT;if(s===Ii)return i.UNSIGNED_INT;if(s===Ui)return i.FLOAT;if(s===Cs)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Vd)return i.ALPHA;if(s===Kn)return i.RGBA;if(s===Wd)return i.LUMINANCE;if(s===Xd)return i.LUMINANCE_ALPHA;if(s===rr)return i.DEPTH_COMPONENT;if(s===ns)return i.DEPTH_STENCIL;if(s===Qa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Yd)return i.RED;if(s===ju)return i.RED_INTEGER;if(s===qd)return i.RG;if(s===Zu)return i.RG_INTEGER;if(s===Ku)return i.RGBA_INTEGER;if(s===ua||s===ha||s===fa||s===da)if(l===wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ua)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ua)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ha)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===da)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ql||s===ec||s===tc||s===nc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ql)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ec)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===tc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ju)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ic||s===rc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ic)return l===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sc||s===oc||s===ac||s===lc||s===cc||s===uc||s===hc||s===fc||s===dc||s===pc||s===mc||s===gc||s===_c||s===vc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===oc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ac)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===uc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_c)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vc)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pa||s===xc||s===yc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===pa)return l===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===xc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$d||s===Mc||s===Ac||s===Sc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===pa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Mc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ac)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ir?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class av extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yi extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lv={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,n),f=this._getHandJoint(c,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&p>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class cv extends xr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,m=null,v=null;const M=t.getContextAttributes();let g=null,f=null;const S=[],y=[],b=new Se;let D=null;const L=new zn;L.layers.enable(1),L.viewport=new tn;const P=new zn;P.layers.enable(2),P.viewport=new tn;const G=[L,P],E=new av;E.layers.enable(1),E.layers.enable(2);let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ge=S[Q];return ge===void 0&&(ge=new Ba,S[Q]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Q){let ge=S[Q];return ge===void 0&&(ge=new Ba,S[Q]=ge),ge.getGripSpace()},this.getHand=function(Q){let ge=S[Q];return ge===void 0&&(ge=new Ba,S[Q]=ge),ge.getHandSpace()};function $(Q){const ge=y.indexOf(Q.inputSource);if(ge===-1)return;const Re=S[ge];Re!==void 0&&(Re.update(Q.inputSource,Q.frame,c||o),Re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ue(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ue),r.removeEventListener("inputsourceschange",B);for(let Q=0;Q<S.length;Q++){const ge=y[Q];ge!==null&&(y[Q]=null,S[Q].disconnect(ge))}C=null,H=null,e.setRenderTarget(g),m=null,p=null,h=null,r=null,f=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ue),r.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ge={antialias:r.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new fr(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let ge=null,Re=null,ze=null;M.depth&&(ze=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=M.stencil?ns:rr,Re=M.stencil?ir:Ii);const Oe={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};h=new XRWebGLBinding(r,t),p=h.createProjectionLayer(Oe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),f=new fr(p.textureWidth,p.textureHeight,{format:Kn,type:Hi,depthTexture:new ph(p.textureWidth,p.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});const Ze=e.properties.get(f);Ze.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(Q){for(let ge=0;ge<Q.removed.length;ge++){const Re=Q.removed[ge],ze=y.indexOf(Re);ze>=0&&(y[ze]=null,S[ze].disconnect(Re))}for(let ge=0;ge<Q.added.length;ge++){const Re=Q.added[ge];let ze=y.indexOf(Re);if(ze===-1){for(let Ze=0;Ze<S.length;Ze++)if(Ze>=y.length){y.push(Re),ze=Ze;break}else if(y[Ze]===null){y[Ze]=Re,ze=Ze;break}if(ze===-1)break}const Oe=S[ze];Oe&&Oe.connect(Re)}}const k=new F,q=new F;function oe(Q,ge,Re){k.setFromMatrixPosition(ge.matrixWorld),q.setFromMatrixPosition(Re.matrixWorld);const ze=k.distanceTo(q),Oe=ge.projectionMatrix.elements,Ze=Re.projectionMatrix.elements,qe=Oe[14]/(Oe[10]-1),ke=Oe[14]/(Oe[10]+1),Ke=(Oe[9]+1)/Oe[5],N=(Oe[9]-1)/Oe[5],be=(Oe[8]-1)/Oe[0],ie=(Ze[8]+1)/Ze[0],xe=qe*be,re=qe*ie,Ve=ze/(-be+ie),Ie=Ve*-be;ge.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ie),Q.translateZ(Ve),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const w=qe+Ve,A=ke+Ve,V=xe-Ie,le=re+(ze-Ie),he=Ke*ke/A*w,de=N*ke/A*w;Q.projectionMatrix.makePerspective(V,le,he,de,w,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function te(Q,ge){ge===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ge.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;E.near=P.near=L.near=Q.near,E.far=P.far=L.far=Q.far,(C!==E.near||H!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,H=E.far);const ge=Q.parent,Re=E.cameras;te(E,ge);for(let ze=0;ze<Re.length;ze++)te(Re[ze],ge);Re.length===2?oe(E,L,P):E.projectionMatrix.copy(L.projectionMatrix),ne(Q,E,ge)};function ne(Q,ge,Re){Re===null?Q.matrix.copy(ge.matrixWorld):(Q.matrix.copy(Re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ge.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=el*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)};let me=null;function _e(Q,ge){if(u=ge.getViewerPose(c||o),v=ge,u!==null){const Re=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ze=!1;Re.length!==E.cameras.length&&(E.cameras.length=0,ze=!0);for(let Oe=0;Oe<Re.length;Oe++){const Ze=Re[Oe];let qe=null;if(m!==null)qe=m.getViewport(Ze);else{const Ke=h.getViewSubImage(p,Ze);qe=Ke.viewport,Oe===0&&(e.setRenderTargetTextures(f,Ke.colorTexture,p.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(f))}let ke=G[Oe];ke===void 0&&(ke=new zn,ke.layers.enable(Oe),ke.viewport=new tn,G[Oe]=ke),ke.matrix.fromArray(Ze.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ze.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(qe.x,qe.y,qe.width,qe.height),Oe===0&&(E.matrix.copy(ke.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ze===!0&&E.cameras.push(ke)}}for(let Re=0;Re<S.length;Re++){const ze=y[Re],Oe=S[Re];ze!==null&&Oe!==void 0&&Oe.update(ze,ge,c||o)}me&&me(Q,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),v=null}const De=new fh;De.setAnimationLoop(_e),this.setAnimationLoop=function(Q){me=Q},this.dispose=function(){}}}function uv(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,ch(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,S,y,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),p(g,f),f.isMeshPhysicalMaterial&&m(g,f,b)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),M(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,S,y):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===wn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===wn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const S=e.get(f).envMap;if(S&&(g.envMap.value=S,g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,S,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*S,g.scale.value=y*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),e.get(f).envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,S){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wn&&g.clearcoatNormalScale.value.negate())),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const S=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function hv(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const b=y.program;n.uniformBlockBinding(S,b)}function c(S,y){let b=r[S.id];b===void 0&&(v(S),b=u(S),r[S.id]=b,S.addEventListener("dispose",g));const D=y.program;n.updateUBOMapping(S,D);const L=e.render.frame;s[S.id]!==L&&(p(S),s[S.id]=L)}function u(S){const y=h();S.__bindingPointIndex=y;const b=i.createBuffer(),D=S.__size,L=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const y=r[S.id],b=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let L=0,P=b.length;L<P;L++){const G=Array.isArray(b[L])?b[L]:[b[L]];for(let E=0,C=G.length;E<C;E++){const H=G[E];if(m(H,L,E,D)===!0){const $=H.__offset,ue=Array.isArray(H.value)?H.value:[H.value];let B=0;for(let k=0;k<ue.length;k++){const q=ue[k],oe=M(q);typeof q=="number"||typeof q=="boolean"?(H.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,$+B,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=0,H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=0,H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=0):(q.toArray(H.__data,B),B+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,y,b,D){const L=S.value,P=y+"_"+b;if(D[P]===void 0)return typeof L=="number"||typeof L=="boolean"?D[P]=L:D[P]=L.clone(),!0;{const G=D[P];if(typeof L=="number"||typeof L=="boolean"){if(G!==L)return D[P]=L,!0}else if(G.equals(L)===!1)return G.copy(L),!0}return!1}function v(S){const y=S.uniforms;let b=0;const D=16;for(let P=0,G=y.length;P<G;P++){const E=Array.isArray(y[P])?y[P]:[y[P]];for(let C=0,H=E.length;C<H;C++){const $=E[C],ue=Array.isArray($.value)?$.value:[$.value];for(let B=0,k=ue.length;B<k;B++){const q=ue[B],oe=M(q),te=b%D;te!==0&&D-te<oe.boundary&&(b+=D-te),$.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=oe.storage}}}const L=b%D;return L>0&&(b+=D-L),S.__size=b,S.__cache={},this}function M(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function g(S){const y=S.target;y.removeEventListener("dispose",g);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class yh{constructor(e={}){const{canvas:t=ap(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),v=new Int32Array(4);let M=null,g=null;const f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;const y=this;let b=!1,D=0,L=0,P=null,G=-1,E=null;const C=new tn,H=new tn;let $=null;const ue=new ft(0);let B=0,k=t.width,q=t.height,oe=1,te=null,ne=null;const me=new tn(0,0,k,q),_e=new tn(0,0,k,q);let De=!1;const Q=new gl;let ge=!1,Re=!1,ze=null;const Oe=new xt,Ze=new Se,qe=new F,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return P===null?oe:1}let N=n;function be(R,W){for(let Z=0;Z<R.length;Z++){const K=R[Z],j=t.getContext(K,W);if(j!==null)return j}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hl}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),N===null){const W=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&W.shift(),N=be(W,R),N===null)throw be(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,xe,re,Ve,Ie,w,A,V,le,he,de,Ge,Pe,Ne,Xe,Je,fe,et,U,pe,we,ye,He,lt;function dt(){ie=new M_(N),xe=new m_(N,ie,e),ie.init(xe),ye=new ov(N,ie,xe),re=new rv(N,ie,xe),Ve=new E_(N),Ie=new W0,w=new sv(N,ie,re,Ie,xe,ye,Ve),A=new __(y),V=new y_(y),le=new Dp(N,xe),He=new d_(N,ie,le,xe),he=new A_(N,le,Ve,He),de=new R_(N,he,le,Ve),U=new w_(N,xe,w),Je=new g_(Ie),Ge=new V0(y,A,V,ie,xe,He,Je),Pe=new uv(y,Ie),Ne=new Y0,Xe=new J0(ie,xe),et=new f_(y,A,V,re,de,p,l),fe=new iv(y,de,xe),lt=new hv(N,Ve,xe,re),pe=new p_(N,ie,Ve,xe),we=new S_(N,ie,Ve,xe),Ve.programs=Ge.programs,y.capabilities=xe,y.extensions=ie,y.properties=Ie,y.renderLists=Ne,y.shadowMap=fe,y.state=re,y.info=Ve}dt();const at=new cv(y,N);this.xr=at,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(R){R!==void 0&&(oe=R,this.setSize(k,q,!1))},this.getSize=function(R){return R.set(k,q)},this.setSize=function(R,W,Z=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,q=W,t.width=Math.floor(R*oe),t.height=Math.floor(W*oe),Z===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(k*oe,q*oe).floor()},this.setDrawingBufferSize=function(R,W,Z){k=R,q=W,oe=Z,t.width=Math.floor(R*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(me)},this.setViewport=function(R,W,Z,K){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,W,Z,K),re.viewport(C.copy(me).multiplyScalar(oe).floor())},this.getScissor=function(R){return R.copy(_e)},this.setScissor=function(R,W,Z,K){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,W,Z,K),re.scissor(H.copy(_e).multiplyScalar(oe).floor())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){re.setScissorTest(De=R)},this.setOpaqueSort=function(R){te=R},this.setTransparentSort=function(R){ne=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(R=!0,W=!0,Z=!0){let K=0;if(R){let j=!1;if(P!==null){const Ue=P.texture.format;j=Ue===Ku||Ue===Zu||Ue===ju}if(j){const Ue=P.texture.type,We=Ue===Hi||Ue===Ii||Ue===fl||Ue===ir||Ue===qu||Ue===$u,Ye=et.getClearColor(),je=et.getClearAlpha(),ot=Ye.r,Qe=Ye.g,st=Ye.b;We?(m[0]=ot,m[1]=Qe,m[2]=st,m[3]=je,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=ot,v[1]=Qe,v[2]=st,v[3]=je,N.clearBufferiv(N.COLOR,0,v))}else K|=N.COLOR_BUFFER_BIT}W&&(K|=N.DEPTH_BUFFER_BIT),Z&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ne.dispose(),Xe.dispose(),Ie.dispose(),A.dispose(),V.dispose(),de.dispose(),He.dispose(),lt.dispose(),Ge.dispose(),at.dispose(),at.removeEventListener("sessionstart",qt),at.removeEventListener("sessionend",vt),ze&&(ze.dispose(),ze=null),Jt.stop()};function Te(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=Ve.autoReset,W=fe.enabled,Z=fe.autoUpdate,K=fe.needsUpdate,j=fe.type;dt(),Ve.autoReset=R,fe.enabled=W,fe.autoUpdate=Z,fe.needsUpdate=K,fe.type=j}function Ee(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function se(R){const W=R.target;W.removeEventListener("dispose",se),$e(W)}function $e(R){Fe(R),Ie.remove(R)}function Fe(R){const W=Ie.get(R).programs;W!==void 0&&(W.forEach(function(Z){Ge.releaseProgram(Z)}),R.isShaderMaterial&&Ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Z,K,j,Ue){W===null&&(W=ke);const We=j.isMesh&&j.matrixWorld.determinant()<0,Ye=Yi(R,W,Z,K,j);re.setMaterial(K,We);let je=Z.index,ot=1;if(K.wireframe===!0){if(je=he.getWireframeAttribute(Z),je===void 0)return;ot=2}const Qe=Z.drawRange,st=Z.attributes.position;let Dt=Qe.start*ot,mn=(Qe.start+Qe.count)*ot;Ue!==null&&(Dt=Math.max(Dt,Ue.start*ot),mn=Math.min(mn,(Ue.start+Ue.count)*ot)),je!==null?(Dt=Math.max(Dt,0),mn=Math.min(mn,je.count)):st!=null&&(Dt=Math.max(Dt,0),mn=Math.min(mn,st.count));const Gt=mn-Dt;if(Gt<0||Gt===1/0)return;He.setup(j,K,Ye,Z,je);let Pn,Tt=pe;if(je!==null&&(Pn=le.get(je),Tt=we,Tt.setIndex(Pn)),j.isMesh)K.wireframe===!0?(re.setLineWidth(K.wireframeLinewidth*Ke()),Tt.setMode(N.LINES)):Tt.setMode(N.TRIANGLES);else if(j.isLine){let ct=K.linewidth;ct===void 0&&(ct=1),re.setLineWidth(ct*Ke()),j.isLineSegments?Tt.setMode(N.LINES):j.isLineLoop?Tt.setMode(N.LINE_LOOP):Tt.setMode(N.LINE_STRIP)}else j.isPoints?Tt.setMode(N.POINTS):j.isSprite&&Tt.setMode(N.TRIANGLES);if(j.isBatchedMesh)Tt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Tt.renderInstances(Dt,Gt,j.count);else if(Z.isInstancedBufferGeometry){const ct=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,as=Math.min(Z.instanceCount,ct);Tt.renderInstances(Dt,Gt,as)}else Tt.render(Dt,Gt)};function rt(R,W,Z){R.transparent===!0&&R.side===_i&&R.forceSinglePass===!1?(R.side=wn,R.needsUpdate=!0,Mr(R,W,Z),R.side=Vi,R.needsUpdate=!0,Mr(R,W,Z),R.side=_i):Mr(R,W,Z)}this.compile=function(R,W,Z=null){Z===null&&(Z=R),g=Xe.get(Z),g.init(),S.push(g),Z.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),R!==Z&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights(y._useLegacyLights);const K=new Set;return R.traverse(function(j){const Ue=j.material;if(Ue)if(Array.isArray(Ue))for(let We=0;We<Ue.length;We++){const Ye=Ue[We];rt(Ye,Z,j),K.add(Ye)}else rt(Ue,Z,j),K.add(Ue)}),S.pop(),g=null,K},this.compileAsync=function(R,W,Z=null){const K=this.compile(R,W,Z);return new Promise(j=>{function Ue(){if(K.forEach(function(We){Ie.get(We).currentProgram.isReady()&&K.delete(We)}),K.size===0){j(R);return}setTimeout(Ue,10)}ie.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let gt=null;function Ht(R){gt&&gt(R)}function qt(){Jt.stop()}function vt(){Jt.start()}const Jt=new fh;Jt.setAnimationLoop(Ht),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(R){gt=R,at.setAnimationLoop(R),R===null?Jt.stop():Jt.start()},at.addEventListener("sessionstart",qt),at.addEventListener("sessionend",vt),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(W),W=at.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,W,P),g=Xe.get(R,S.length),g.init(),S.push(g),Oe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Oe),Re=this.localClippingEnabled,ge=Je.init(this.clippingPlanes,Re),M=Ne.get(R,f.length),M.init(),f.push(M),Un(R,W,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(te,ne),this.info.render.frame++,ge===!0&&Je.beginShadows();const Z=g.state.shadowsArray;if(fe.render(Z,R,W),ge===!0&&Je.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(M,R),g.setupLights(y._useLegacyLights),W.isArrayCamera){const K=W.cameras;for(let j=0,Ue=K.length;j<Ue;j++){const We=K[j];os(M,R,We,We.viewport)}}else os(M,R,W);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(y,R,W),He.resetDefaultState(),G=-1,E=null,S.pop(),S.length>0?g=S[S.length-1]:g=null,f.pop(),f.length>0?M=f[f.length-1]:M=null};function Un(R,W,Z,K){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){K&&qe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Oe);const We=de.update(R),Ye=R.material;Ye.visible&&M.push(R,We,Ye,Z,qe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const We=de.update(R),Ye=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),qe.copy(R.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),qe.copy(We.boundingSphere.center)),qe.applyMatrix4(R.matrixWorld).applyMatrix4(Oe)),Array.isArray(Ye)){const je=We.groups;for(let ot=0,Qe=je.length;ot<Qe;ot++){const st=je[ot],Dt=Ye[st.materialIndex];Dt&&Dt.visible&&M.push(R,We,Dt,Z,qe.z,st)}}else Ye.visible&&M.push(R,We,Ye,Z,qe.z,null)}}const Ue=R.children;for(let We=0,Ye=Ue.length;We<Ye;We++)Un(Ue[We],W,Z,K)}function os(R,W,Z,K){const j=R.opaque,Ue=R.transmissive,We=R.transparent;g.setupLightsView(Z),ge===!0&&Je.setGlobalState(y.clippingPlanes,Z),Ue.length>0&&Hs(j,Ue,W,Z),K&&re.viewport(C.copy(K)),j.length>0&&Xi(j,W,Z),Ue.length>0&&Xi(Ue,W,Z),We.length>0&&Xi(We,W,Z),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Hs(R,W,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Ue=xe.isWebGL2;ze===null&&(ze=new fr(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?Cs:Hi,minFilter:Rs,samples:Ue?4:0})),y.getDrawingBufferSize(Ze),Ue?ze.setSize(Ze.x,Ze.y):ze.setSize(tl(Ze.x),tl(Ze.y));const We=y.getRenderTarget();y.setRenderTarget(ze),y.getClearColor(ue),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear();const Ye=y.toneMapping;y.toneMapping=zi,Xi(R,Z,K),w.updateMultisampleRenderTarget(ze),w.updateRenderTargetMipmap(ze);let je=!1;for(let ot=0,Qe=W.length;ot<Qe;ot++){const st=W[ot],Dt=st.object,mn=st.geometry,Gt=st.material,Pn=st.group;if(Gt.side===_i&&Dt.layers.test(K.layers)){const Tt=Gt.side;Gt.side=wn,Gt.needsUpdate=!0,Gs(Dt,Z,K,mn,Gt,Pn),Gt.side=Tt,Gt.needsUpdate=!0,je=!0}}je===!0&&(w.updateMultisampleRenderTarget(ze),w.updateRenderTargetMipmap(ze)),y.setRenderTarget(We),y.setClearColor(ue,B),y.toneMapping=Ye}function Xi(R,W,Z){const K=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Ue=R.length;j<Ue;j++){const We=R[j],Ye=We.object,je=We.geometry,ot=K===null?We.material:K,Qe=We.group;Ye.layers.test(Z.layers)&&Gs(Ye,W,Z,je,ot,Qe)}}function Gs(R,W,Z,K,j,Ue){R.onBeforeRender(y,W,Z,K,j,Ue),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(y,W,Z,K,R,Ue),j.transparent===!0&&j.side===_i&&j.forceSinglePass===!1?(j.side=wn,j.needsUpdate=!0,y.renderBufferDirect(Z,W,K,j,R,Ue),j.side=Vi,j.needsUpdate=!0,y.renderBufferDirect(Z,W,K,j,R,Ue),j.side=_i):y.renderBufferDirect(Z,W,K,j,R,Ue),R.onAfterRender(y,W,Z,K,j,Ue)}function Mr(R,W,Z){W.isScene!==!0&&(W=ke);const K=Ie.get(R),j=g.state.lights,Ue=g.state.shadowsArray,We=j.state.version,Ye=Ge.getParameters(R,j.state,Ue,W,Z),je=Ge.getProgramCacheKey(Ye);let ot=K.programs;K.environment=R.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(R.isMeshStandardMaterial?V:A).get(R.envMap||K.environment),ot===void 0&&(R.addEventListener("dispose",se),ot=new Map,K.programs=ot);let Qe=ot.get(je);if(Qe!==void 0){if(K.currentProgram===Qe&&K.lightsStateVersion===We)return Ar(R,Ye),Qe}else Ye.uniforms=Ge.getUniforms(R),R.onBuild(Z,Ye,y),R.onBeforeCompile(Ye,y),Qe=Ge.acquireProgram(Ye,je),ot.set(je,Qe),K.uniforms=Ye.uniforms;const st=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(st.clippingPlanes=Je.uniform),Ar(R,Ye),K.needsLights=Qo(R),K.lightsStateVersion=We,K.needsLights&&(st.ambientLightColor.value=j.state.ambient,st.lightProbe.value=j.state.probe,st.directionalLights.value=j.state.directional,st.directionalLightShadows.value=j.state.directionalShadow,st.spotLights.value=j.state.spot,st.spotLightShadows.value=j.state.spotShadow,st.rectAreaLights.value=j.state.rectArea,st.ltc_1.value=j.state.rectAreaLTC1,st.ltc_2.value=j.state.rectAreaLTC2,st.pointLights.value=j.state.point,st.pointLightShadows.value=j.state.pointShadow,st.hemisphereLights.value=j.state.hemi,st.directionalShadowMap.value=j.state.directionalShadowMap,st.directionalShadowMatrix.value=j.state.directionalShadowMatrix,st.spotShadowMap.value=j.state.spotShadowMap,st.spotLightMatrix.value=j.state.spotLightMatrix,st.spotLightMap.value=j.state.spotLightMap,st.pointShadowMap.value=j.state.pointShadowMap,st.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=Qe,K.uniformsList=null,Qe}function bi(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=bo.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Ar(R,W){const Z=Ie.get(R);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Yi(R,W,Z,K,j){W.isScene!==!0&&(W=ke),w.resetTextureUnits();const Ue=W.fog,We=K.isMeshStandardMaterial?W.environment:null,Ye=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ei,je=(K.isMeshStandardMaterial?V:A).get(K.envMap||We),ot=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qe=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),st=!!Z.morphAttributes.position,Dt=!!Z.morphAttributes.normal,mn=!!Z.morphAttributes.color;let Gt=zi;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Gt=y.toneMapping);const Pn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Tt=Pn!==void 0?Pn.length:0,ct=Ie.get(K),as=g.state.lights;if(ge===!0&&(Re===!0||R!==E)){const Ct=R===E&&K.id===G;Je.setState(K,R,Ct)}let Rt=!1;K.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==as.state.version||ct.outputColorSpace!==Ye||j.isBatchedMesh&&ct.batching===!1||!j.isBatchedMesh&&ct.batching===!0||j.isInstancedMesh&&ct.instancing===!1||!j.isInstancedMesh&&ct.instancing===!0||j.isSkinnedMesh&&ct.skinning===!1||!j.isSkinnedMesh&&ct.skinning===!0||j.isInstancedMesh&&ct.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ct.instancingColor===!1&&j.instanceColor!==null||ct.envMap!==je||K.fog===!0&&ct.fog!==Ue||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==Je.numPlanes||ct.numIntersection!==Je.numIntersection)||ct.vertexAlphas!==ot||ct.vertexTangents!==Qe||ct.morphTargets!==st||ct.morphNormals!==Dt||ct.morphColors!==mn||ct.toneMapping!==Gt||xe.isWebGL2===!0&&ct.morphTargetsCount!==Tt)&&(Rt=!0):(Rt=!0,ct.__version=K.version);let Nn=ct.currentProgram;Rt===!0&&(Nn=Mr(K,W,j));let ls=!1,qi=!1,ei=!1;const Nt=Nn.getUniforms(),ai=ct.uniforms;if(re.useProgram(Nn.program)&&(ls=!0,qi=!0,ei=!0),K.id!==G&&(G=K.id,qi=!0),ls||E!==R){Nt.setValue(N,"projectionMatrix",R.projectionMatrix),Nt.setValue(N,"viewMatrix",R.matrixWorldInverse);const Ct=Nt.map.cameraPosition;Ct!==void 0&&Ct.setValue(N,qe.setFromMatrixPosition(R.matrixWorld)),xe.logarithmicDepthBuffer&&Nt.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Nt.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,qi=!0,ei=!0)}if(j.isSkinnedMesh){Nt.setOptional(N,j,"bindMatrix"),Nt.setOptional(N,j,"bindMatrixInverse");const Ct=j.skeleton;Ct&&(xe.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),Nt.setValue(N,"boneTexture",Ct.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Nt.setOptional(N,j,"batchingTexture"),Nt.setValue(N,"batchingTexture",j._matricesTexture,w));const Sr=Z.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0&&xe.isWebGL2===!0)&&U.update(j,Z,Nn),(qi||ct.receiveShadow!==j.receiveShadow)&&(ct.receiveShadow=j.receiveShadow,Nt.setValue(N,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ai.envMap.value=je,ai.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),qi&&(Nt.setValue(N,"toneMappingExposure",y.toneMappingExposure),ct.needsLights&&Jo(ai,ei),Ue&&K.fog===!0&&Pe.refreshFogUniforms(ai,Ue),Pe.refreshMaterialUniforms(ai,K,oe,q,ze),bo.upload(N,bi(ct),ai,w)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(bo.upload(N,bi(ct),ai,w),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Nt.setValue(N,"center",j.center),Nt.setValue(N,"modelViewMatrix",j.modelViewMatrix),Nt.setValue(N,"normalMatrix",j.normalMatrix),Nt.setValue(N,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ct=K.uniformsGroups;for(let cs=0,ks=Ct.length;cs<ks;cs++)if(xe.isWebGL2){const us=Ct[cs];lt.update(us,Nn),lt.bind(us,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function Jo(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Qo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,W,Z){Ie.get(R.texture).__webglTexture=W,Ie.get(R.depthTexture).__webglTexture=Z;const K=Ie.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const Z=Ie.get(R);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,Z=0){P=R,D=W,L=Z;let K=!0,j=null,Ue=!1,We=!1;if(R){const je=Ie.get(R);je.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(N.FRAMEBUFFER,null),K=!1):je.__webglFramebuffer===void 0?w.setupRenderTarget(R):je.__hasExternalTextures&&w.rebindTextures(R,Ie.get(R.texture).__webglTexture,Ie.get(R.depthTexture).__webglTexture);const ot=R.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(We=!0);const Qe=Ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?j=Qe[W][Z]:j=Qe[W],Ue=!0):xe.isWebGL2&&R.samples>0&&w.useMultisampledRTT(R)===!1?j=Ie.get(R).__webglMultisampledFramebuffer:Array.isArray(Qe)?j=Qe[Z]:j=Qe,C.copy(R.viewport),H.copy(R.scissor),$=R.scissorTest}else C.copy(me).multiplyScalar(oe).floor(),H.copy(_e).multiplyScalar(oe).floor(),$=De;if(re.bindFramebuffer(N.FRAMEBUFFER,j)&&xe.drawBuffers&&K&&re.drawBuffers(R,j),re.viewport(C),re.scissor(H),re.setScissorTest($),Ue){const je=Ie.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,je.__webglTexture,Z)}else if(We){const je=Ie.get(R.texture),ot=W||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,je.__webglTexture,Z||0,ot)}G=-1},this.readRenderTargetPixels=function(R,W,Z,K,j,Ue,We){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye){re.bindFramebuffer(N.FRAMEBUFFER,Ye);try{const je=R.texture,ot=je.format,Qe=je.type;if(ot!==Kn&&ye.convert(ot)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=Qe===Cs&&(ie.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ie.has("EXT_color_buffer_float"));if(Qe!==Hi&&ye.convert(Qe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===Ui&&(xe.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-K&&Z>=0&&Z<=R.height-j&&N.readPixels(W,Z,K,j,ye.convert(ot),ye.convert(Qe),Ue)}finally{const je=P!==null?Ie.get(P).__webglFramebuffer:null;re.bindFramebuffer(N.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(R,W,Z=0){const K=Math.pow(2,-Z),j=Math.floor(W.image.width*K),Ue=Math.floor(W.image.height*K);w.setTexture2D(W,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,R.x,R.y,j,Ue),re.unbindTexture()},this.copyTextureToTexture=function(R,W,Z,K=0){const j=W.image.width,Ue=W.image.height,We=ye.convert(Z.format),Ye=ye.convert(Z.type);w.setTexture2D(Z,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,K,R.x,R.y,j,Ue,We,Ye,W.image.data):W.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,K,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,We,W.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,K,R.x,R.y,We,Ye,W.image),K===0&&Z.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),re.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Z,K,j=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=R.max.x-R.min.x+1,We=R.max.y-R.min.y+1,Ye=R.max.z-R.min.z+1,je=ye.convert(K.format),ot=ye.convert(K.type);let Qe;if(K.isData3DTexture)w.setTexture3D(K,0),Qe=N.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)w.setTexture2DArray(K,0),Qe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,K.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,K.unpackAlignment);const st=N.getParameter(N.UNPACK_ROW_LENGTH),Dt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),mn=N.getParameter(N.UNPACK_SKIP_PIXELS),Gt=N.getParameter(N.UNPACK_SKIP_ROWS),Pn=N.getParameter(N.UNPACK_SKIP_IMAGES),Tt=Z.isCompressedTexture?Z.mipmaps[j]:Z.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Tt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Tt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,R.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,R.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?N.texSubImage3D(Qe,j,W.x,W.y,W.z,Ue,We,Ye,je,ot,Tt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Qe,j,W.x,W.y,W.z,Ue,We,Ye,je,Tt.data)):N.texSubImage3D(Qe,j,W.x,W.y,W.z,Ue,We,Ye,je,ot,Tt),N.pixelStorei(N.UNPACK_ROW_LENGTH,st),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Dt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,mn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Gt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pn),j===0&&K.generateMipmaps&&N.generateMipmap(Qe),re.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),re.unbindTexture()},this.resetState=function(){D=0,L=0,P=null,re.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dl?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===Go?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===an?sr:Qu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sr?an:Ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class fv extends yh{}fv.prototype.isWebGL1Renderer=!0;class dv extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class pv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new F;class Uo{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Uo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mh extends yr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wr;const _s=new F,Xr=new F,Yr=new F,qr=new Se,vs=new Se,Ah=new xt,mo=new F,xs=new F,go=new F,hu=new Se,za=new Se,fu=new Se;class mv extends jt{constructor(e=new Mh){if(super(),this.isSprite=!0,this.type="Sprite",Wr===void 0){Wr=new nn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pv(t,5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute("position",new Uo(n,3,0,!1)),Wr.setAttribute("uv",new Uo(n,2,3,!1))}this.geometry=Wr,this.material=e,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xr.setFromMatrixScale(this.matrixWorld),Ah.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xr.multiplyScalar(-Yr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;_o(mo.set(-.5,-.5,0),Yr,o,Xr,r,s),_o(xs.set(.5,-.5,0),Yr,o,Xr,r,s),_o(go.set(.5,.5,0),Yr,o,Xr,r,s),hu.set(0,0),za.set(1,0),fu.set(1,1);let a=e.ray.intersectTriangle(mo,xs,go,!1,_s);if(a===null&&(_o(xs.set(-.5,.5,0),Yr,o,Xr,r,s),za.set(0,1),a=e.ray.intersectTriangle(mo,go,xs,!1,_s),a===null))return;const l=e.ray.origin.distanceTo(_s);l<e.near||l>e.far||t.push({distance:l,point:_s.clone(),uv:Bn.getInterpolation(_s,mo,xs,go,hu,za,fu,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function _o(i,e,t,n,r,s){qr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(vs.x=s*qr.x-r*qr.y,vs.y=r*qr.x+s*qr.y):vs.copy(qr),i.copy(e),i.x+=vs.x,i.y+=vs.y,i.applyMatrix4(Ah)}class Sh extends yr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new F,pu=new F,mu=new xt,Ha=new Vo,vo=new ko;class gv extends jt{constructor(e=new nn,t=new Sh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)du.fromBufferAttribute(t,r-1),pu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=du.distanceTo(pu);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;mu.copy(r).invert(),Ha.copy(e.ray).applyMatrix4(mu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,h=new F,p=new F,m=this.isLineSegments?2:1,v=n.index,g=n.attributes.position;if(v!==null){const f=Math.max(0,o.start),S=Math.min(v.count,o.start+o.count);for(let y=f,b=S-1;y<b;y+=m){const D=v.getX(y),L=v.getX(y+1);if(c.fromBufferAttribute(g,D),u.fromBufferAttribute(g,L),Ha.distanceSqToSegment(c,u,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(p);G<e.near||G>e.far||t.push({distance:G,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let y=f,b=S-1;y<b;y+=m){if(c.fromBufferAttribute(g,y),u.fromBufferAttribute(g,y+1),Ha.distanceSqToSegment(c,u,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(p);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const gu=new F,_u=new F;class _v extends gv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)gu.fromBufferAttribute(t,r),_u.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+gu.distanceTo(_u);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vv extends Rn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],p=n[r+1]-u,m=(o-u)/p;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Se:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,r=[],s=[],o=[],a=new F,l=new xt;for(let m=0;m<=e;m++){const v=m/e;r[m]=this.getTangentAt(v,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(ln(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,v))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(ln(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],m*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xl extends oi{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new Se,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*u-m*h+this.aX,c=p*h+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class xv extends xl{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yl(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let p=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;p*=u,m*=u,r(o,a,p,m)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const xo=new F,Ga=new yl,ka=new yl,Va=new yl;class Eh extends oi{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new F){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(xo.subVectors(r[0],r[1]).add(r[0]),c=xo);const h=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(xo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=xo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),m),M=Math.pow(h.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(u),m);M<1e-4&&(M=1),v<1e-4&&(v=M),g<1e-4&&(g=M),Ga.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,v,M,g),ka.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,v,M,g),Va.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,v,M,g)}else this.curveType==="catmullrom"&&(Ga.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),ka.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),Va.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set(Ga.calc(l),ka.calc(l),Va.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vu(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function yv(i,e){const t=1-i;return t*t*e}function Mv(i,e){return 2*(1-i)*i*e}function Av(i,e){return i*i*e}function Ss(i,e,t,n){return yv(i,e)+Mv(i,t)+Av(i,n)}function Sv(i,e){const t=1-i;return t*t*t*e}function Ev(i,e){const t=1-i;return 3*t*t*i*e}function bv(i,e){return 3*(1-i)*i*i*e}function Tv(i,e){return i*i*i*e}function Es(i,e,t,n,r){return Sv(i,e)+Ev(i,t)+bv(i,n)+Tv(i,r)}class bh extends oi{constructor(e=new Se,t=new Se,n=new Se,r=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Se){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Es(e,r.x,s.x,o.x,a.x),Es(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wv extends oi{constructor(e=new F,t=new F,n=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new F){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Es(e,r.x,s.x,o.x,a.x),Es(e,r.y,s.y,o.y,a.y),Es(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Th extends oi{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rv extends oi{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wh extends oi{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ss(e,r.x,s.x,o.x),Ss(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rh extends oi{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ss(e,r.x,s.x,o.x),Ss(e,r.y,s.y,o.y),Ss(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ch extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(vu(a,l.x,c.x,u.x,h.x),vu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Se().fromArray(r))}return this}}var No=Object.freeze({__proto__:null,ArcCurve:xv,CatmullRomCurve3:Eh,CubicBezierCurve:bh,CubicBezierCurve3:wv,EllipseCurve:xl,LineCurve:Th,LineCurve3:Rv,QuadraticBezierCurve:wh,QuadraticBezierCurve3:Rh,SplineCurve:Ch});class Cv extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new No[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new No[r.type]().fromJSON(r))}return this}}class Oo extends Cv{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Th(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new wh(this.currentPoint.clone(),new Se(e,t),new Se(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new bh(this.currentPoint.clone(),new Se(e,t),new Se(n,r),new Se(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ch(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new xl(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Tn extends nn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],p=[],m=[];let v=0;const M=[],g=n/2;let f=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Lt(h,3)),this.setAttribute("normal",new Lt(p,3)),this.setAttribute("uv",new Lt(m,2));function S(){const b=new F,D=new F;let L=0;const P=(t-e)/n;for(let G=0;G<=s;G++){const E=[],C=G/s,H=C*(t-e)+e;for(let $=0;$<=r;$++){const ue=$/r,B=ue*l+a,k=Math.sin(B),q=Math.cos(B);D.x=H*k,D.y=-C*n+g,D.z=H*q,h.push(D.x,D.y,D.z),b.set(k,P,q).normalize(),p.push(b.x,b.y,b.z),m.push(ue,1-C),E.push(v++)}M.push(E)}for(let G=0;G<r;G++)for(let E=0;E<s;E++){const C=M[E][G],H=M[E+1][G],$=M[E+1][G+1],ue=M[E][G+1];u.push(C,H,ue),u.push(H,$,ue),L+=6}c.addGroup(f,L,0),f+=L}function y(b){const D=v,L=new Se,P=new F;let G=0;const E=b===!0?e:t,C=b===!0?1:-1;for(let $=1;$<=r;$++)h.push(0,g*C,0),p.push(0,C,0),m.push(.5,.5),v++;const H=v;for(let $=0;$<=r;$++){const B=$/r*l+a,k=Math.cos(B),q=Math.sin(B);P.x=E*q,P.y=g*C,P.z=E*k,h.push(P.x,P.y,P.z),p.push(0,C,0),L.x=k*.5+.5,L.y=q*.5*C+.5,m.push(L.x,L.y),v++}for(let $=0;$<r;$++){const ue=D+$,B=H+$;b===!0?u.push(B,B+1,ue):u.push(B+1,B,ue),G+=3}c.addGroup(f,G,b===!0?1:2),f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ph extends Oo{constructor(e){super(e),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Oo().fromJSON(r))}return this}}const Pv={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Lh(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,p,m;if(n&&(s=Nv(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let v=t;v<r;v+=t)h=i[v],p=i[v+1],h<a&&(a=h),p<l&&(l=p),h>c&&(c=h),p>u&&(u=p);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return Ps(s,o,t,a,l,m,0),o}};function Lh(i,e,t,n,r){let s,o;if(r===Yv(i,e,t,n)>0)for(s=e;s<t;s+=n)o=xu(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=xu(s,i[s],i[s+1],o);return o&&Yo(o,o.next)&&(Ds(o),o=o.next),o}function mr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Yo(t,t.next)||It(t.prev,t,t.next)===0)){if(Ds(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ps(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Hv(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?Dv(i,n,r,s):Lv(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ds(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Iv(mr(i),e,t),Ps(i,e,t,n,r,s,2)):o===2&&Uv(i,e,t,n,r,s):Ps(mr(i),e,t,n,r,s,1);break}}}function Lv(i){const e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,p=r>s?r>o?r:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let v=n.next;for(;v!==e;){if(v.x>=u&&v.x<=p&&v.y>=h&&v.y<=m&&Kr(r,a,s,l,o,c,v.x,v.y)&&It(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Dv(i,e,t,n){const r=i.prev,s=i,o=i.next;if(It(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,p=o.y,m=a<l?a<c?a:c:l<c?l:c,v=u<h?u<p?u:p:h<p?h:p,M=a>l?a>c?a:c:l>c?l:c,g=u>h?u>p?u:p:h>p?h:p,f=il(m,v,e,t,n),S=il(M,g,e,t,n);let y=i.prevZ,b=i.nextZ;for(;y&&y.z>=f&&b&&b.z<=S;){if(y.x>=m&&y.x<=M&&y.y>=v&&y.y<=g&&y!==r&&y!==o&&Kr(a,u,l,h,c,p,y.x,y.y)&&It(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=m&&b.x<=M&&b.y>=v&&b.y<=g&&b!==r&&b!==o&&Kr(a,u,l,h,c,p,b.x,b.y)&&It(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=f;){if(y.x>=m&&y.x<=M&&y.y>=v&&y.y<=g&&y!==r&&y!==o&&Kr(a,u,l,h,c,p,y.x,y.y)&&It(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=S;){if(b.x>=m&&b.x<=M&&b.y>=v&&b.y<=g&&b!==r&&b!==o&&Kr(a,u,l,h,c,p,b.x,b.y)&&It(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Iv(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Yo(r,s)&&Dh(r,n,n.next,s)&&Ls(r,s)&&Ls(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ds(n),Ds(n.next),n=i=s),n=n.next}while(n!==i);return mr(n)}function Uv(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vv(o,a)){let l=Ih(o,a);o=mr(o,o.next),l=mr(l,l.next),Ps(o,e,t,n,r,s,0),Ps(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Nv(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Lh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(kv(c));for(r.sort(Ov),s=0;s<r.length;s++)t=Fv(r[s],t);return t}function Ov(i,e){return i.x-e.x}function Fv(i,e){const t=Bv(i,e);if(!t)return e;const n=Ih(t,i);return mr(n,n.next),mr(t,t.next)}function Bv(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=s&&p>n&&(n=p,r=t.x<t.next.x?t:t.next,p===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Kr(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Ls(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&zv(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function zv(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function Hv(i,e,t,n){let r=i;do r.z===0&&(r.z=il(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Gv(r)}function Gv(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function il(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function kv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Kr(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Vv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Wv(i,e)&&(Ls(i,e)&&Ls(e,i)&&Xv(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||Yo(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Yo(i,e){return i.x===e.x&&i.y===e.y}function Dh(i,e,t,n){const r=Mo(It(i,e,t)),s=Mo(It(i,e,n)),o=Mo(It(t,n,i)),a=Mo(It(t,n,e));return!!(r!==s&&o!==a||r===0&&yo(i,t,e)||s===0&&yo(i,n,e)||o===0&&yo(t,i,n)||a===0&&yo(t,e,n))}function yo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Mo(i){return i>0?1:i<0?-1:0}function Wv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ls(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function Xv(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ih(i,e){const t=new rl(i.i,i.x,i.y),n=new rl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function xu(i,e,t,n){const r=new rl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ds(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yv(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class bs{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return bs.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];yu(e),Mu(n,e);let o=e.length;t.forEach(yu);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Mu(n,t[l]);const a=Pv.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function yu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Mu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class qo extends nn{constructor(e=new Ph([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Lt(r,3)),this.setAttribute("uv",new Lt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:m-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:qv;let y,b=!1,D,L,P,G;f&&(y=f.getSpacedPoints(u),b=!0,p=!1,D=f.computeFrenetFrames(u,!1),L=new F,P=new F,G=new F),p||(g=0,m=0,v=0,M=0);const E=a.extractPoints(c);let C=E.shape;const H=E.holes;if(!bs.isClockWise(C)){C=C.reverse();for(let N=0,be=H.length;N<be;N++){const ie=H[N];bs.isClockWise(ie)&&(H[N]=ie.reverse())}}const ue=bs.triangulateShape(C,H),B=C;for(let N=0,be=H.length;N<be;N++){const ie=H[N];C=C.concat(ie)}function k(N,be,ie){return be||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(be,ie)}const q=C.length,oe=ue.length;function te(N,be,ie){let xe,re,Ve;const Ie=N.x-be.x,w=N.y-be.y,A=ie.x-N.x,V=ie.y-N.y,le=Ie*Ie+w*w,he=Ie*V-w*A;if(Math.abs(he)>Number.EPSILON){const de=Math.sqrt(le),Ge=Math.sqrt(A*A+V*V),Pe=be.x-w/de,Ne=be.y+Ie/de,Xe=ie.x-V/Ge,Je=ie.y+A/Ge,fe=((Xe-Pe)*V-(Je-Ne)*A)/(Ie*V-w*A);xe=Pe+Ie*fe-N.x,re=Ne+w*fe-N.y;const et=xe*xe+re*re;if(et<=2)return new Se(xe,re);Ve=Math.sqrt(et/2)}else{let de=!1;Ie>Number.EPSILON?A>Number.EPSILON&&(de=!0):Ie<-Number.EPSILON?A<-Number.EPSILON&&(de=!0):Math.sign(w)===Math.sign(V)&&(de=!0),de?(xe=-w,re=Ie,Ve=Math.sqrt(le)):(xe=Ie,re=w,Ve=Math.sqrt(le/2))}return new Se(xe/Ve,re/Ve)}const ne=[];for(let N=0,be=B.length,ie=be-1,xe=N+1;N<be;N++,ie++,xe++)ie===be&&(ie=0),xe===be&&(xe=0),ne[N]=te(B[N],B[ie],B[xe]);const me=[];let _e,De=ne.concat();for(let N=0,be=H.length;N<be;N++){const ie=H[N];_e=[];for(let xe=0,re=ie.length,Ve=re-1,Ie=xe+1;xe<re;xe++,Ve++,Ie++)Ve===re&&(Ve=0),Ie===re&&(Ie=0),_e[xe]=te(ie[xe],ie[Ve],ie[Ie]);me.push(_e),De=De.concat(_e)}for(let N=0;N<g;N++){const be=N/g,ie=m*Math.cos(be*Math.PI/2),xe=v*Math.sin(be*Math.PI/2)+M;for(let re=0,Ve=B.length;re<Ve;re++){const Ie=k(B[re],ne[re],xe);Oe(Ie.x,Ie.y,-ie)}for(let re=0,Ve=H.length;re<Ve;re++){const Ie=H[re];_e=me[re];for(let w=0,A=Ie.length;w<A;w++){const V=k(Ie[w],_e[w],xe);Oe(V.x,V.y,-ie)}}}const Q=v+M;for(let N=0;N<q;N++){const be=p?k(C[N],De[N],Q):C[N];b?(P.copy(D.normals[0]).multiplyScalar(be.x),L.copy(D.binormals[0]).multiplyScalar(be.y),G.copy(y[0]).add(P).add(L),Oe(G.x,G.y,G.z)):Oe(be.x,be.y,0)}for(let N=1;N<=u;N++)for(let be=0;be<q;be++){const ie=p?k(C[be],De[be],Q):C[be];b?(P.copy(D.normals[N]).multiplyScalar(ie.x),L.copy(D.binormals[N]).multiplyScalar(ie.y),G.copy(y[N]).add(P).add(L),Oe(G.x,G.y,G.z)):Oe(ie.x,ie.y,h/u*N)}for(let N=g-1;N>=0;N--){const be=N/g,ie=m*Math.cos(be*Math.PI/2),xe=v*Math.sin(be*Math.PI/2)+M;for(let re=0,Ve=B.length;re<Ve;re++){const Ie=k(B[re],ne[re],xe);Oe(Ie.x,Ie.y,h+ie)}for(let re=0,Ve=H.length;re<Ve;re++){const Ie=H[re];_e=me[re];for(let w=0,A=Ie.length;w<A;w++){const V=k(Ie[w],_e[w],xe);b?Oe(V.x,V.y+y[u-1].y,y[u-1].x+ie):Oe(V.x,V.y,h+ie)}}}ge(),Re();function ge(){const N=r.length/3;if(p){let be=0,ie=q*be;for(let xe=0;xe<oe;xe++){const re=ue[xe];Ze(re[2]+ie,re[1]+ie,re[0]+ie)}be=u+g*2,ie=q*be;for(let xe=0;xe<oe;xe++){const re=ue[xe];Ze(re[0]+ie,re[1]+ie,re[2]+ie)}}else{for(let be=0;be<oe;be++){const ie=ue[be];Ze(ie[2],ie[1],ie[0])}for(let be=0;be<oe;be++){const ie=ue[be];Ze(ie[0]+q*u,ie[1]+q*u,ie[2]+q*u)}}n.addGroup(N,r.length/3-N,0)}function Re(){const N=r.length/3;let be=0;ze(B,be),be+=B.length;for(let ie=0,xe=H.length;ie<xe;ie++){const re=H[ie];ze(re,be),be+=re.length}n.addGroup(N,r.length/3-N,1)}function ze(N,be){let ie=N.length;for(;--ie>=0;){const xe=ie;let re=ie-1;re<0&&(re=N.length-1);for(let Ve=0,Ie=u+g*2;Ve<Ie;Ve++){const w=q*Ve,A=q*(Ve+1),V=be+xe+w,le=be+re+w,he=be+re+A,de=be+xe+A;qe(V,le,he,de)}}}function Oe(N,be,ie){l.push(N),l.push(be),l.push(ie)}function Ze(N,be,ie){ke(N),ke(be),ke(ie);const xe=r.length/3,re=S.generateTopUV(n,r,xe-3,xe-2,xe-1);Ke(re[0]),Ke(re[1]),Ke(re[2])}function qe(N,be,ie,xe){ke(N),ke(be),ke(xe),ke(be),ke(ie),ke(xe);const re=r.length/3,Ve=S.generateSideWallUV(n,r,re-6,re-3,re-2,re-1);Ke(Ve[0]),Ke(Ve[1]),Ke(Ve[3]),Ke(Ve[1]),Ke(Ve[2]),Ke(Ve[3])}function ke(N){r.push(l[N*3+0]),r.push(l[N*3+1]),r.push(l[N*3+2])}function Ke(N){s.push(N.x),s.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $v(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new No[r.type]().fromJSON(r)),new qo(n,e.options)}}const qv={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new Se(s,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],p=e[r*3],m=e[r*3+1],v=e[r*3+2],M=e[s*3],g=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-h),new Se(p,1-v),new Se(M,1-f)]:[new Se(a,1-l),new Se(u,1-h),new Se(m,1-v),new Se(g,1-f)]}};function $v(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class $o extends nn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new F,p=new F,m=[],v=[],M=[],g=[];for(let f=0;f<=n;f++){const S=[],y=f/n;let b=0;f===0&&o===0?b=.5/t:f===n&&l===Math.PI&&(b=-.5/t);for(let D=0;D<=t;D++){const L=D/t;h.x=-e*Math.cos(r+L*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+L*s)*Math.sin(o+y*a),v.push(h.x,h.y,h.z),p.copy(h).normalize(),M.push(p.x,p.y,p.z),g.push(L+b,1-y),S.push(c++)}u.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){const y=u[f][S+1],b=u[f][S],D=u[f+1][S],L=u[f+1][S+1];(f!==0||o>0)&&m.push(y,b,L),(f!==n-1||l<Math.PI)&&m.push(b,D,L)}this.setIndex(m),this.setAttribute("position",new Lt(v,3)),this.setAttribute("normal",new Lt(M,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fo extends nn{constructor(e=new Rh(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new F,l=new F,c=new Se;let u=new F;const h=[],p=[],m=[],v=[];M(),this.setIndex(v),this.setAttribute("position",new Lt(h,3)),this.setAttribute("normal",new Lt(p,3)),this.setAttribute("uv",new Lt(m,2));function M(){for(let y=0;y<t;y++)g(y);g(s===!1?t:0),S(),f()}function g(y){u=e.getPointAt(y/t,u);const b=o.normals[y],D=o.binormals[y];for(let L=0;L<=r;L++){const P=L/r*Math.PI*2,G=Math.sin(P),E=-Math.cos(P);l.x=E*b.x+G*D.x,l.y=E*b.y+G*D.y,l.z=E*b.z+G*D.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function f(){for(let y=1;y<=t;y++)for(let b=1;b<=r;b++){const D=(r+1)*(y-1)+(b-1),L=(r+1)*y+(b-1),P=(r+1)*y+b,G=(r+1)*(y-1)+b;v.push(D,L,G),v.push(L,P,G)}}function S(){for(let y=0;y<=t;y++)for(let b=0;b<=r;b++)c.x=y/t,c.y=b/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Fo(new No[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Gi extends yr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Au={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class jv{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){const m=c[h],v=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const Zv=new jv;class Ml{constructor(e){this.manager=e!==void 0?e:Zv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";const mi={};class Kv extends Error{constructor(e,t){super(e),this.response=t}}class Jv extends Ml{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Au.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:r});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=mi[e],h=c.body.getReader(),p=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=p?parseInt(p):0,v=m!==0;let M=0;const g=new ReadableStream({start(f){S();function S(){h.read().then(({done:y,value:b})=>{if(y)f.close();else{M+=b.byteLength;const D=new ProgressEvent("progress",{lengthComputable:v,loaded:M,total:m});for(let L=0,P=u.length;L<P;L++){const G=u[L];G.onProgress&&G.onProgress(D)}f.enqueue(b),S()}})}}});return new Response(g)}else throw new Kv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),p=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(p);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{Au.add(e,c);const u=mi[e];delete mi[e];for(let h=0,p=u.length;h<p;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete mi[e];for(let h=0,p=u.length;h<p;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Uh extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Qv extends Uh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wa=new xt,Su=new F,Eu=new F;class ex{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Su.setFromMatrixPosition(e.matrixWorld),t.position.copy(Su),Eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eu),t.updateMatrixWorld(),Wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tx extends ex{constructor(){super(new dh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nh extends Uh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new tx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nx{constructor(e,t,n=0,r=1/0){this.ray=new Vo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return sl(e,this,n,t),n.sort(bu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)sl(e[r],this,n,t);return n.sort(bu),n}}function bu(i,e){return i.distance-e.distance}function sl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)sl(r[s],e,t,!0)}}class Tu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ln(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ix extends _v{constructor(e=10,t=10,n=4473924,r=8947848){n=new ft(n),r=new ft(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let p=0,m=0,v=-a;p<=t;p++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const M=p===s?n:r;M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3}const u=new nn;u.setAttribute("position",new Lt(l,3)),u.setAttribute("color",new Lt(c,3));const h=new Sh({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);const wu={type:"change"},Xa={type:"start"},Ru={type:"end"},Ao=new Vo,Cu=new Di,rx=Math.cos(70*op.DEG2RAD);class sx extends xr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",de),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wu),n.update(),s=r.NONE},this.update=function(){const U=new F,pe=new dr().setFromUnitVectors(e.up,new F(0,1,0)),we=pe.clone().invert(),ye=new F,He=new dr,lt=new F,dt=2*Math.PI;return function(Te=null){const O=n.object.position;U.copy(O).sub(n.target),U.applyQuaternion(pe),a.setFromVector3(U),n.autoRotate&&s===r.NONE&&H(E(Te)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ee=n.minAzimuthAngle,se=n.maxAzimuthAngle;isFinite(Ee)&&isFinite(se)&&(Ee<-Math.PI?Ee+=dt:Ee>Math.PI&&(Ee-=dt),se<-Math.PI?se+=dt:se>Math.PI&&(se-=dt),Ee<=se?a.theta=Math.max(Ee,Math.min(se,a.theta)):a.theta=a.theta>(Ee+se)/2?Math.max(Ee,a.theta):Math.min(se,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&L||n.object.isOrthographicCamera?a.radius=ne(a.radius):a.radius=ne(a.radius*c),U.setFromSpherical(a),U.applyQuaternion(we),O.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let $e=!1;if(n.zoomToCursor&&L){let Fe=null;if(n.object.isPerspectiveCamera){const rt=U.length();Fe=ne(rt*c);const gt=rt-Fe;n.object.position.addScaledVector(b,gt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const rt=new F(D.x,D.y,0);rt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),$e=!0;const gt=new F(D.x,D.y,0);gt.unproject(n.object),n.object.position.sub(gt).add(rt),n.object.updateMatrixWorld(),Fe=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Fe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Fe).add(n.object.position):(Ao.origin.copy(n.object.position),Ao.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ao.direction))<rx?e.lookAt(n.target):(Cu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ao.intersectPlane(Cu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),$e=!0);return c=1,L=!1,$e||ye.distanceToSquared(n.object.position)>o||8*(1-He.dot(n.object.quaternion))>o||lt.distanceToSquared(n.target)>0?(n.dispatchEvent(wu),ye.copy(n.object.position),He.copy(n.object.quaternion),lt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ne),n.domElement.removeEventListener("pointerdown",Ie),n.domElement.removeEventListener("pointercancel",A),n.domElement.removeEventListener("wheel",he),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",A),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",de),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Tu,l=new Tu;let c=1;const u=new F,h=new Se,p=new Se,m=new Se,v=new Se,M=new Se,g=new Se,f=new Se,S=new Se,y=new Se,b=new F,D=new Se;let L=!1;const P=[],G={};function E(U){return U!==null?2*Math.PI/60*n.autoRotateSpeed*U:2*Math.PI/60/60*n.autoRotateSpeed}function C(U){const pe=Math.abs(U)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*pe)}function H(U){l.theta-=U}function $(U){l.phi-=U}const ue=function(){const U=new F;return function(we,ye){U.setFromMatrixColumn(ye,0),U.multiplyScalar(-we),u.add(U)}}(),B=function(){const U=new F;return function(we,ye){n.screenSpacePanning===!0?U.setFromMatrixColumn(ye,1):(U.setFromMatrixColumn(ye,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(we),u.add(U)}}(),k=function(){const U=new F;return function(we,ye){const He=n.domElement;if(n.object.isPerspectiveCamera){const lt=n.object.position;U.copy(lt).sub(n.target);let dt=U.length();dt*=Math.tan(n.object.fov/2*Math.PI/180),ue(2*we*dt/He.clientHeight,n.object.matrix),B(2*ye*dt/He.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ue(we*(n.object.right-n.object.left)/n.object.zoom/He.clientWidth,n.object.matrix),B(ye*(n.object.top-n.object.bottom)/n.object.zoom/He.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function oe(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(U,pe){if(!n.zoomToCursor)return;L=!0;const we=n.domElement.getBoundingClientRect(),ye=U-we.left,He=pe-we.top,lt=we.width,dt=we.height;D.x=ye/lt*2-1,D.y=-(He/dt)*2+1,b.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function ne(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function me(U){h.set(U.clientX,U.clientY)}function _e(U){te(U.clientX,U.clientX),f.set(U.clientX,U.clientY)}function De(U){v.set(U.clientX,U.clientY)}function Q(U){p.set(U.clientX,U.clientY),m.subVectors(p,h).multiplyScalar(n.rotateSpeed);const pe=n.domElement;H(2*Math.PI*m.x/pe.clientHeight),$(2*Math.PI*m.y/pe.clientHeight),h.copy(p),n.update()}function ge(U){S.set(U.clientX,U.clientY),y.subVectors(S,f),y.y>0?q(C(y.y)):y.y<0&&oe(C(y.y)),f.copy(S),n.update()}function Re(U){M.set(U.clientX,U.clientY),g.subVectors(M,v).multiplyScalar(n.panSpeed),k(g.x,g.y),v.copy(M),n.update()}function ze(U){te(U.clientX,U.clientY),U.deltaY<0?oe(C(U.deltaY)):U.deltaY>0&&q(C(U.deltaY)),n.update()}function Oe(U){let pe=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),pe=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),pe=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),pe=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),pe=!0;break}pe&&(U.preventDefault(),n.update())}function Ze(U){if(P.length===1)h.set(U.pageX,U.pageY);else{const pe=et(U),we=.5*(U.pageX+pe.x),ye=.5*(U.pageY+pe.y);h.set(we,ye)}}function qe(U){if(P.length===1)v.set(U.pageX,U.pageY);else{const pe=et(U),we=.5*(U.pageX+pe.x),ye=.5*(U.pageY+pe.y);v.set(we,ye)}}function ke(U){const pe=et(U),we=U.pageX-pe.x,ye=U.pageY-pe.y,He=Math.sqrt(we*we+ye*ye);f.set(0,He)}function Ke(U){n.enableZoom&&ke(U),n.enablePan&&qe(U)}function N(U){n.enableZoom&&ke(U),n.enableRotate&&Ze(U)}function be(U){if(P.length==1)p.set(U.pageX,U.pageY);else{const we=et(U),ye=.5*(U.pageX+we.x),He=.5*(U.pageY+we.y);p.set(ye,He)}m.subVectors(p,h).multiplyScalar(n.rotateSpeed);const pe=n.domElement;H(2*Math.PI*m.x/pe.clientHeight),$(2*Math.PI*m.y/pe.clientHeight),h.copy(p)}function ie(U){if(P.length===1)M.set(U.pageX,U.pageY);else{const pe=et(U),we=.5*(U.pageX+pe.x),ye=.5*(U.pageY+pe.y);M.set(we,ye)}g.subVectors(M,v).multiplyScalar(n.panSpeed),k(g.x,g.y),v.copy(M)}function xe(U){const pe=et(U),we=U.pageX-pe.x,ye=U.pageY-pe.y,He=Math.sqrt(we*we+ye*ye);S.set(0,He),y.set(0,Math.pow(S.y/f.y,n.zoomSpeed)),q(y.y),f.copy(S);const lt=(U.pageX+pe.x)*.5,dt=(U.pageY+pe.y)*.5;te(lt,dt)}function re(U){n.enableZoom&&xe(U),n.enablePan&&ie(U)}function Ve(U){n.enableZoom&&xe(U),n.enableRotate&&be(U)}function Ie(U){n.enabled!==!1&&(P.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",w),n.domElement.addEventListener("pointerup",A)),Xe(U),U.pointerType==="touch"?Ge(U):V(U))}function w(U){n.enabled!==!1&&(U.pointerType==="touch"?Pe(U):le(U))}function A(U){Je(U),P.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",A)),n.dispatchEvent(Ru),s=r.NONE}function V(U){let pe;switch(U.button){case 0:pe=n.mouseButtons.LEFT;break;case 1:pe=n.mouseButtons.MIDDLE;break;case 2:pe=n.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case Tr.DOLLY:if(n.enableZoom===!1)return;_e(U),s=r.DOLLY;break;case Tr.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;De(U),s=r.PAN}else{if(n.enableRotate===!1)return;me(U),s=r.ROTATE}break;case Tr.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;me(U),s=r.ROTATE}else{if(n.enablePan===!1)return;De(U),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Xa)}function le(U){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;Q(U);break;case r.DOLLY:if(n.enableZoom===!1)return;ge(U);break;case r.PAN:if(n.enablePan===!1)return;Re(U);break}}function he(U){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(U.preventDefault(),n.dispatchEvent(Xa),ze(U),n.dispatchEvent(Ru))}function de(U){n.enabled===!1||n.enablePan===!1||Oe(U)}function Ge(U){switch(fe(U),P.length){case 1:switch(n.touches.ONE){case wr.ROTATE:if(n.enableRotate===!1)return;Ze(U),s=r.TOUCH_ROTATE;break;case wr.PAN:if(n.enablePan===!1)return;qe(U),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case wr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ke(U),s=r.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;N(U),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Xa)}function Pe(U){switch(fe(U),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(U),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ie(U),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;re(U),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ve(U),n.update();break;default:s=r.NONE}}function Ne(U){n.enabled!==!1&&U.preventDefault()}function Xe(U){P.push(U.pointerId)}function Je(U){delete G[U.pointerId];for(let pe=0;pe<P.length;pe++)if(P[pe]==U.pointerId){P.splice(pe,1);return}}function fe(U){let pe=G[U.pointerId];pe===void 0&&(pe=new Se,G[U.pointerId]=pe),pe.set(U.pageX,U.pageY)}function et(U){const pe=U.pointerId===P[0]?P[1]:P[0];return G[pe]}n.domElement.addEventListener("contextmenu",Ne),n.domElement.addEventListener("pointerdown",Ie),n.domElement.addEventListener("pointercancel",A),n.domElement.addEventListener("wheel",he,{passive:!1}),this.update()}}class ox extends Ml{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Jv(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){function t(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,p=u.getUint32(80,!0);if(80+32/8+p*h===u.byteLength)return!0;const v=[115,111,108,105,100];for(let M=0;M<5;M++)if(n(v,u,M))return!1;return!0}function n(c,u,h){for(let p=0,m=c.length;p<m;p++)if(c[p]!==u.getUint8(h+p))return!1;return!0}function r(c){const u=new DataView(c),h=u.getUint32(80,!0);let p,m,v,M=!1,g,f,S,y,b;for(let H=0;H<70;H++)u.getUint32(H,!1)==1129270351&&u.getUint8(H+4)==82&&u.getUint8(H+5)==61&&(M=!0,g=new Float32Array(h*3*3),f=u.getUint8(H+6)/255,S=u.getUint8(H+7)/255,y=u.getUint8(H+8)/255,b=u.getUint8(H+9)/255);const D=84,L=12*4+2,P=new nn,G=new Float32Array(h*3*3),E=new Float32Array(h*3*3),C=new ft;for(let H=0;H<h;H++){const $=D+H*L,ue=u.getFloat32($,!0),B=u.getFloat32($+4,!0),k=u.getFloat32($+8,!0);if(M){const q=u.getUint16($+48,!0);q&32768?(p=f,m=S,v=y):(p=(q&31)/31,m=(q>>5&31)/31,v=(q>>10&31)/31)}for(let q=1;q<=3;q++){const oe=$+q*12,te=H*3*3+(q-1)*3;G[te]=u.getFloat32(oe,!0),G[te+1]=u.getFloat32(oe+4,!0),G[te+2]=u.getFloat32(oe+8,!0),E[te]=ue,E[te+1]=B,E[te+2]=k,M&&(C.set(p,m,v).convertSRGBToLinear(),g[te]=C.r,g[te+1]=C.g,g[te+2]=C.b)}}return P.setAttribute("position",new zt(G,3)),P.setAttribute("normal",new zt(E,3)),M&&(P.setAttribute("color",new zt(g,3)),P.hasColors=!0,P.alpha=b),P}function s(c){const u=new nn,h=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let v=0;const M=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+M+M+M,"g"),f=new RegExp("normal"+M+M+M,"g"),S=[],y=[],b=[],D=new F;let L,P=0,G=0,E=0;for(;(L=h.exec(c))!==null;){G=E;const C=L[0],H=(L=m.exec(C))!==null?L[1]:"";for(b.push(H);(L=p.exec(C))!==null;){let B=0,k=0;const q=L[0];for(;(L=f.exec(q))!==null;)D.x=parseFloat(L[1]),D.y=parseFloat(L[2]),D.z=parseFloat(L[3]),k++;for(;(L=g.exec(q))!==null;)S.push(parseFloat(L[1]),parseFloat(L[2]),parseFloat(L[3])),y.push(D.x,D.y,D.z),B++,E++;k!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+v),B!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+v),v++}const $=G,ue=E-G;u.userData.groupNames=b,u.addGroup($,ue,P),P++}return u.setAttribute("position",new Lt(S,3)),u.setAttribute("normal",new Lt(y,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=a(e);return t(l)?r(l):s(o(e))}}class ax{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,r=[];let s=0;e.traverse(function(f){if(f.isMesh){const S=f.geometry,y=S.index,b=S.getAttribute("position");s+=y!==null?y.count/3:b.count/3,r.push({object3d:f,geometry:S})}});let o,a=80;if(n===!0){const f=s*2+s*3*4*4+80+4,S=new ArrayBuffer(f);o=new DataView(S),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const l=new F,c=new F,u=new F,h=new F,p=new F,m=new F;for(let f=0,S=r.length;f<S;f++){const y=r[f].object3d,b=r[f].geometry,D=b.index,L=b.getAttribute("position");if(D!==null)for(let P=0;P<D.count;P+=3){const G=D.getX(P+0),E=D.getX(P+1),C=D.getX(P+2);v(G,E,C,L,y)}else for(let P=0;P<L.count;P+=3){const G=P+0,E=P+1,C=P+2;v(G,E,C,L,y)}}return n===!1&&(o+=`endsolid exported
`),o;function v(f,S,y,b,D){l.fromBufferAttribute(b,f),c.fromBufferAttribute(b,S),u.fromBufferAttribute(b,y),D.isSkinnedMesh===!0&&(D.applyBoneTransform(f,l),D.applyBoneTransform(S,c),D.applyBoneTransform(y,u)),l.applyMatrix4(D.matrixWorld),c.applyMatrix4(D.matrixWorld),u.applyMatrix4(D.matrixWorld),M(l,c,u),g(l),g(c),g(u),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function M(f,S,y){h.subVectors(y,S),p.subVectors(f,S),h.cross(p).normalize(),m.copy(h).normalize(),n===!0?(o.setFloat32(a,m.x,!0),a+=4,o.setFloat32(a,m.y,!0),a+=4,o.setFloat32(a,m.z,!0),a+=4):(o+="	facet normal "+m.x+" "+m.y+" "+m.z+`
`,o+=`		outer loop
`)}function g(f){n===!0?(o.setFloat32(a,f.x,!0),a+=4,o.setFloat32(a,f.y,!0),a+=4,o.setFloat32(a,f.z,!0),a+=4):o+="			vertex "+f.x+" "+f.y+" "+f.z+`
`}}}function Pu(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new nn;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let p=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m])}if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0;const h=[];for(let p=0;p<i.length;++p){const m=i[p].index;for(let v=0;v<m.count;++v)h.push(m.getX(v)+u);u+=i[p].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Lu(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){const m=[];for(let M=0;M<o[u].length;++M)m.push(o[u][M][p]);const v=Lu(m);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(v)}}return l}function Lu(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.array.length}const o=new e(s);let a=0;for(let c=0;c<i.length;++c)o.set(i[c].array,a),a+=i[c].array.length;const l=new zt(o,t,n);return r!==void 0&&(l.gpuType=r),l}function lx(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let o=0;const a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let S=0,y=a.length;S<y;S++){const b=a[S],D=i.attributes[b];l[b]=new zt(new D.array.constructor(D.count*D.itemSize),D.itemSize,D.normalized);const L=i.morphAttributes[b];L&&(c[b]=new zt(new L.array.constructor(L.count*L.itemSize),L.itemSize,L.normalized))}const m=e*.5,v=Math.log10(1/e),M=Math.pow(10,v),g=m*M;for(let S=0;S<s;S++){const y=n?n.getX(S):S;let b="";for(let D=0,L=a.length;D<L;D++){const P=a[D],G=i.getAttribute(P),E=G.itemSize;for(let C=0;C<E;C++)b+=`${~~(G[h[C]](y)*M+g)},`}if(b in t)u.push(t[b]);else{for(let D=0,L=a.length;D<L;D++){const P=a[D],G=i.getAttribute(P),E=i.morphAttributes[P],C=G.itemSize,H=l[P],$=c[P];for(let ue=0;ue<C;ue++){const B=h[ue],k=p[ue];if(H[k](o,G[B](y)),E)for(let q=0,oe=E.length;q<oe;q++)$[q][k](o,E[q][B](y))}}t[b]=o,u.push(o),o++}}const f=i.clone();for(const S in i.attributes){const y=l[S];if(f.setAttribute(S,new zt(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),S in c)for(let b=0;b<c[S].length;b++){const D=c[S][b];f.morphAttributes[S][b]=new zt(D.array.slice(0,o*D.itemSize),D.itemSize,D.normalized)}}return f.setIndex(u),f}const cx="modulepreload",ux=function(i){return"/"+i},Du={},hx=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=ux(l),l in Du)return;Du[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":cx,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((p,m)=>{h.addEventListener("load",p),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var fx=(()=>{var i=import.meta.url;return async function(e={}){var t,n=e,r,s,o=new Promise((d,_)=>{r=d,s=_}),a=typeof window=="object",l=typeof importScripts=="function",c=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(c){const{createRequire:d}=await hx(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);var u=d(import.meta.url)}var h=!1;n.setup=function(){if(h)return;h=!0,n.initTBB();function d(z,Y,ae=Ae=>Ae){if(Y)for(let Ae of Y)z.push_back(ae(Ae));return z}function _(z,Y=ae=>ae){const ae=[],Ae=z.size();for(let nt=0;nt<Ae;nt++)ae.push(Y(z.get(nt)));return ae}function T(z,Y=ae=>ae){const ae=[],Ae=z.size();for(let nt=0;nt<Ae;nt++){const Et=z.get(nt),Vt=Et.size(),En=[];for(let Ot=0;Ot<Vt;Ot++)En.push(Y(Et.get(Ot)));ae.push(En)}return ae}function I(z){return z[0].length<3&&(z=[z]),d(new n.Vector2_vec2,z,Y=>d(new n.Vector_vec2,Y,ae=>ae instanceof Array?{x:ae[0],y:ae[1]}:ae))}function X(z){for(let Y=0;Y<z.size();Y++)z.get(Y).delete();z.delete()}function J(z){return z[0]instanceof Array?{x:z[0][0],y:z[0][1]}:typeof z[0]=="number"?{x:z[0]||0,y:z[1]||0}:z[0]}function ce(z){return z[0]instanceof Array?{x:z[0][0],y:z[0][1],z:z[0][2]}:typeof z[0]=="number"?{x:z[0]||0,y:z[1]||0,z:z[2]||0}:z[0]}function ee(z){return z=="EvenOdd"?0:z=="NonZero"?1:z=="Negative"?3:2}function ve(z){return z=="Round"?1:z=="Miter"?2:0}const Me=n.CrossSection;function Le(z,Y="Positive"){if(z instanceof Me)return z;{const ae=I(z),Ae=new Me(ae,ee(Y));return X(ae),Ae}}n.CrossSection.prototype.translate=function(...z){return this._Translate(J(z))},n.CrossSection.prototype.scale=function(z){return typeof z=="number"?this._Scale({x:z,y:z}):this._Scale(J([z]))},n.CrossSection.prototype.mirror=function(z){return this._Mirror(J([z]))},n.CrossSection.prototype.warp=function(z){const Y=hs(function(Ae){const nt=le(Ae,"double"),Et=le(Ae+8,"double"),Vt=[nt,Et];z(Vt),he(Ae,Vt[0],"double"),he(Ae+8,Vt[1],"double")},"vi"),ae=this._Warp(Y);return fs(Y),ae},n.CrossSection.prototype.decompose=function(){const z=this._Decompose(),Y=_(z);return z.delete(),Y},n.CrossSection.prototype.bounds=function(){const z=this._Bounds();return{min:["x","y"].map(Y=>z.min[Y]),max:["x","y"].map(Y=>z.max[Y])}},n.CrossSection.prototype.offset=function(z,Y="Round",ae=2,Ae=0){return this._Offset(z,ve(Y),ae,Ae)},n.CrossSection.prototype.simplify=function(z=1e-6){return this._Simplify(z)},n.CrossSection.prototype.extrude=function(z,Y=0,ae=0,Ae=[1,1],nt=!1){Ae=J([Ae]);const Et=n._Extrude(this._ToPolygons(),z,Y,ae,Ae);return nt?Et.translate([0,0,-z/2]):Et},n.CrossSection.prototype.revolve=function(z=0,Y=360){return n._Revolve(this._ToPolygons(),z,Y)},n.CrossSection.prototype.add=function(z){return this._add(Le(z))},n.CrossSection.prototype.subtract=function(z){return this._subtract(Le(z))},n.CrossSection.prototype.intersect=function(z){return this._intersect(Le(z))},n.CrossSection.prototype.toPolygons=function(){const z=this._ToPolygons(),Y=T(z,ae=>[ae.x,ae.y]);return z.delete(),Y},n.Manifold.prototype.smoothOut=function(z=60,Y=0){return this._SmoothOut(z,Y)},n.Manifold.prototype.warp=function(z){const Y=hs(function(nt){const Et=le(nt,"double"),Vt=le(nt+8,"double"),En=le(nt+16,"double"),Ot=[Et,Vt,En];z(Ot),he(nt,Ot[0],"double"),he(nt+8,Ot[1],"double"),he(nt+16,Ot[2],"double")},"vi"),ae=this._Warp(Y);fs(Y);const Ae=ae.status();if(Ae!=="NoError")throw new n.ManifoldError(Ae);return ae},n.Manifold.prototype.calculateNormals=function(z,Y=60){return this._CalculateNormals(z,Y)},n.Manifold.prototype.setProperties=function(z,Y){const ae=this.numProp(),Ae=hs(function(Et,Vt,En){const Ot=[];for(let Ft=0;Ft<z;++Ft)Ot[Ft]=le(Et+8*Ft,"double");const Er=[];for(let Ft=0;Ft<3;++Ft)Er[Ft]=le(Vt+8*Ft,"double");const br=[];for(let Ft=0;Ft<ae;++Ft)br[Ft]=le(En+8*Ft,"double");Y(Ot,Er,br);for(let Ft=0;Ft<z;++Ft)he(Et+8*Ft,Ot[Ft],"double")},"viii"),nt=this._SetProperties(z,Ae);return fs(Ae),nt},n.Manifold.prototype.translate=function(...z){return this._Translate(ce(z))},n.Manifold.prototype.rotate=function(z,Y,ae){return Array.isArray(z)?this._Rotate(...z):this._Rotate(z,Y||0,ae||0)},n.Manifold.prototype.scale=function(z){return typeof z=="number"?this._Scale({x:z,y:z,z}):this._Scale(ce([z]))},n.Manifold.prototype.mirror=function(z){return this._Mirror(ce([z]))},n.Manifold.prototype.trimByPlane=function(z,Y=0){return this._TrimByPlane(ce([z]),Y)},n.Manifold.prototype.slice=function(z=0){const Y=this._Slice(z),ae=new Me(Y,ee("Positive"));return X(Y),ae},n.Manifold.prototype.project=function(){const z=this._Project(),Y=new Me(z,ee("Positive"));return X(z),Y},n.Manifold.prototype.split=function(z){const Y=this._Split(z),ae=_(Y);return Y.delete(),ae},n.Manifold.prototype.splitByPlane=function(z,Y=0){const ae=this._SplitByPlane(ce([z]),Y),Ae=_(ae);return ae.delete(),Ae},n.Manifold.prototype.decompose=function(){const z=this._Decompose(),Y=_(z);return z.delete(),Y},n.Manifold.prototype.boundingBox=function(){const z=this._boundingBox();return{min:["x","y","z"].map(Y=>z.min[Y]),max:["x","y","z"].map(Y=>z.max[Y])}};class tt{constructor({numProp:Y=3,triVerts:ae=new Uint32Array,vertProperties:Ae=new Float32Array,mergeFromVert:nt,mergeToVert:Et,runIndex:Vt,runOriginalID:En,faceID:Ot,halfedgeTangent:Er,runTransform:br}={}){this.numProp=Y,this.triVerts=ae,this.vertProperties=Ae,this.mergeFromVert=nt,this.mergeToVert=Et,this.runIndex=Vt,this.runOriginalID=En,this.faceID=Ot,this.halfedgeTangent=Er,this.runTransform=br}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){const{changed:Y,mesh:ae}=n._Merge(this);return Object.assign(this,{...ae}),Y}verts(Y){return this.triVerts.subarray(3*Y,3*(Y+1))}position(Y){return this.vertProperties.subarray(this.numProp*Y,this.numProp*Y+3)}extras(Y){return this.vertProperties.subarray(this.numProp*Y+3,this.numProp*(Y+1))}tangent(Y){return this.halfedgeTangent.subarray(4*Y,4*(Y+1))}transform(Y){const ae=new Array(16);for(const Ae of[0,1,2,3])for(const nt of[0,1,2])ae[4*Ae+nt]=this.runTransform[12*Y+3*Ae+nt];return ae[15]=1,ae}}n.Mesh=tt,n.Manifold.prototype.getMesh=function(z=-1){return new tt(this._GetMeshJS(z))},n.ManifoldError=function(Y,...ae){let Ae="Unknown error";switch(Y){case"NonFiniteVertex":Ae="Non-finite vertex";break;case"NotManifold":Ae="Not manifold";break;case"VertexOutOfBounds":Ae="Vertex index out of bounds";break;case"PropertiesWrongLength":Ae="Properties have wrong length";break;case"MissingPositionProperties":Ae="Less than three properties";break;case"MergeVectorsDifferentLengths":Ae="Merge vectors have different lengths";break;case"MergeIndexOutOfBounds":Ae="Merge index out of bounds";break;case"TransformWrongLength":Ae="Transform vector has wrong length";break;case"RunIndexWrongLength":Ae="Run index vector has wrong length";break;case"FaceIDWrongLength":Ae="Face ID vector has wrong length";case"InvalidConstruction":Ae="Manifold constructed with invalid parameters"}const nt=Error.apply(this,[Ae,...ae]);nt.name=this.name="ManifoldError",this.message=nt.message,this.stack=nt.stack,this.code=Y},n.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:n.ManifoldError,writable:!0,configurable:!0}}),n.CrossSection=function(z,Y="Positive"){const ae=I(z),Ae=new Me(ae,ee(Y));return X(ae),Ae},n.CrossSection.ofPolygons=function(z,Y="Positive"){return new n.CrossSection(z,Y)},n.CrossSection.square=function(...z){let Y;z.length==0?Y={x:1,y:1}:typeof z[0]=="number"?Y={x:z[0],y:z[0]}:Y=J(z);const ae=z[1]||!1;return n._Square(Y,ae)},n.CrossSection.circle=function(z,Y=0){return n._Circle(z,Y)};function _t(z){return function(...Y){Y.length==1&&(Y=Y[0]);const ae=new n.Vector_crossSection;for(const nt of Y)ae.push_back(Le(nt));const Ae=n["_crossSection"+z](ae);return ae.delete(),Ae}}n.CrossSection.compose=_t("Compose"),n.CrossSection.union=_t("UnionN"),n.CrossSection.difference=_t("DifferenceN"),n.CrossSection.intersection=_t("IntersectionN");function kt(z,Y){d(z,Y,ae=>ae instanceof Array?{x:ae[0],y:ae[1]}:ae)}n.CrossSection.hull=function(...z){z.length==1&&(z=z[0]);let Y=new n.Vector_vec2;for(const Ae of z)if(Ae instanceof Me)n._crossSectionCollectVertices(Y,Ae);else if(Ae instanceof Array&&Ae.length==2&&typeof Ae[0]=="number")Y.push_back({x:Ae[0],y:Ae[1]});else if(Ae.x)Y.push_back(Ae);else{const Et=Ae[0].length==2&&typeof Ae[0][0]=="number"||Ae[0].x?[Ae]:Ae;for(const Vt of Et)kt(Y,Vt)}const ae=n._crossSectionHullPoints(Y);return Y.delete(),ae},n.CrossSection.prototype=Object.create(Me.prototype),Object.defineProperty(n.CrossSection,Symbol.hasInstance,{get:()=>z=>z instanceof Me});const Ut=n.Manifold;n.Manifold=function(z){const Y=new Ut(z),ae=Y.status();if(ae!=="NoError")throw new n.ManifoldError(ae);return Y},n.Manifold.ofMesh=function(z){return new n.Manifold(z)},n.Manifold.tetrahedron=function(){return n._Tetrahedron()},n.Manifold.cube=function(...z){let Y;z.length==0?Y={x:1,y:1,z:1}:typeof z[0]=="number"?Y={x:z[0],y:z[0],z:z[0]}:Y=ce(z);const ae=z[1]||!1;return n._Cube(Y,ae)},n.Manifold.cylinder=function(z,Y,ae=-1,Ae=0,nt=!1){return n._Cylinder(z,Y,ae,Ae,nt)},n.Manifold.sphere=function(z,Y=0){return n._Sphere(z,Y)},n.Manifold.smooth=function(z,Y=[]){const ae=new n.Vector_smoothness;d(ae,Y);const Ae=n._Smooth(z,ae);return ae.delete(),Ae},n.Manifold.extrude=function(z,Y,ae=0,Ae=0,nt=[1,1],Et=!1){return(z instanceof Me?z:n.CrossSection(z,"Positive")).extrude(Y,ae,Ae,nt,Et)},n.Manifold.revolve=function(z,Y=0,ae=360){return(z instanceof Me?z:n.CrossSection(z,"Positive")).revolve(Y,ae)},n.Manifold.reserveIDs=function(z){return n._ReserveIDs(z)},n.Manifold.compose=function(z){const Y=new n.Vector_manifold;d(Y,z);const ae=n._manifoldCompose(Y);return Y.delete(),ae};function Wn(z){return function(...Y){Y.length==1&&(Y=Y[0]);const ae=new n.Vector_manifold;for(const nt of Y)ae.push_back(nt);const Ae=n["_manifold"+z+"N"](ae);return ae.delete(),Ae}}n.Manifold.union=Wn("Union"),n.Manifold.difference=Wn("Difference"),n.Manifold.intersection=Wn("Intersection"),n.Manifold.levelSet=function(z,Y,ae,Ae=0,nt=-1){const Et={min:{x:Y.min[0],y:Y.min[1],z:Y.min[2]},max:{x:Y.max[0],y:Y.max[1],z:Y.max[2]}},Vt=hs(function(Ot){const Er=le(Ot,"double"),br=le(Ot+8,"double"),Ft=le(Ot+16,"double");return z([Er,br,Ft])},"di"),En=n._LevelSet(Vt,Et,ae,Ae,nt);return fs(Vt),En};function Xn(z,Y){d(z,Y,ae=>ae instanceof Array?{x:ae[0],y:ae[1],z:ae[2]}:ae)}n.Manifold.hull=function(...z){z.length==1&&(z=z[0]);let Y=new n.Vector_vec3;for(const Ae of z)Ae instanceof Ut?n._manifoldCollectVertices(Y,Ae):Ae instanceof Array&&Ae.length==3&&typeof Ae[0]=="number"?Y.push_back({x:Ae[0],y:Ae[1],z:Ae[2]}):Ae.x?Y.push_back(Ae):Xn(Y,Ae);const ae=n._manifoldHullPoints(Y);return Y.delete(),ae},n.Manifold.prototype=Object.create(Ut.prototype),Object.defineProperty(n.Manifold,Symbol.hasInstance,{get:()=>z=>z instanceof Ut}),n.triangulate=function(z,Y=-1,ae=!0){const Ae=I(z),nt=_(n._Triangulate(Ae,Y,ae),Et=>[Et[0],Et[1],Et[2]]);return X(Ae),nt}};var p=Object.assign({},n),m="";function v(d){return n.locateFile?n.locateFile(d,m):m+d}var M,g;if(c){var f=u("fs"),S=u("path");m=u("url").fileURLToPath(new URL("./",import.meta.url)),g=d=>{d=N(d)?new URL(d):S.normalize(d);var _=f.readFileSync(d);return _},M=(d,_=!0)=>(d=N(d)?new URL(d):S.normalize(d),new Promise((T,I)=>{f.readFile(d,_?void 0:"utf8",(X,J)=>{X?I(X):T(_?J.buffer:J)})})),!n.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(a||l)&&(l?m=self.location.href:typeof document<"u"&&document.currentScript&&(m=document.currentScript.src),i&&(m=i),m.startsWith("blob:")?m="":m=m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1),l&&(g=d=>{var _=new XMLHttpRequest;return _.open("GET",d,!1),_.responseType="arraybuffer",_.send(null),new Uint8Array(_.response)}),M=d=>N(d)?new Promise((_,T)=>{var I=new XMLHttpRequest;I.open("GET",d,!0),I.responseType="arraybuffer",I.onload=()=>{(I.status==200||I.status==0&&I.response)&&T(I.response),_(I.status)},I.onerror=_,I.send(null)}):fetch(d,{credentials:"same-origin"}).then(_=>_.ok?_.arrayBuffer():Promise.reject(new Error(_.status+" : "+_.url))));n.print||console.log.bind(console);var y=n.printErr||console.error.bind(console);Object.assign(n,p),p=null,n.arguments&&n.arguments,n.thisProgram&&n.thisProgram,n.quit&&n.quit;var b;n.wasmBinary&&(b=n.wasmBinary);var D,L=!1,P,G,E,C,H,$,ue,B;function k(){var d=D.buffer;n.HEAP8=P=new Int8Array(d),n.HEAP16=E=new Int16Array(d),n.HEAPU8=G=new Uint8Array(d),n.HEAPU16=C=new Uint16Array(d),n.HEAP32=H=new Int32Array(d),n.HEAPU32=$=new Uint32Array(d),n.HEAPF32=ue=new Float32Array(d),n.HEAPF64=B=new Float64Array(d)}var q=[],oe=[],te=[];function ne(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)De(n.preRun.shift());V(q)}function me(){V(oe)}function _e(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)ge(n.postRun.shift());V(te)}function De(d){q.unshift(d)}function Q(d){oe.unshift(d)}function ge(d){te.unshift(d)}var Re=0,ze=null;function Oe(d){var _;Re++,(_=n.monitorRunDependencies)==null||_.call(n,Re)}function Ze(d){var T;if(Re--,(T=n.monitorRunDependencies)==null||T.call(n,Re),Re==0&&ze){var _=ze;ze=null,_()}}function qe(d){var T;(T=n.onAbort)==null||T.call(n,d),d="Aborted("+d+")",y(d),L=!0,d+=". Build with -sASSERTIONS for more info.";var _=new WebAssembly.RuntimeError(d);throw s(_),_}var ke="data:application/octet-stream;base64,",Ke=d=>d.startsWith(ke),N=d=>d.startsWith("file://");function be(){if(n.locateFile){var d="manifold.wasm";return Ke(d)?d:v(d)}return new URL("/assets/manifold-ldiO02fT.wasm",import.meta.url).href}var ie;function xe(d){if(d==ie&&b)return new Uint8Array(b);if(g)return g(d);throw"both async and sync fetching of the wasm failed"}function re(d){return b?Promise.resolve().then(()=>xe(d)):M(d).then(_=>new Uint8Array(_),()=>xe(d))}function Ve(d,_,T){return re(d).then(I=>WebAssembly.instantiate(I,_)).then(T,I=>{y(`failed to asynchronously prepare wasm: ${I}`),qe(I)})}function Ie(d,_,T,I){return!d&&typeof WebAssembly.instantiateStreaming=="function"&&!Ke(_)&&!N(_)&&!c&&typeof fetch=="function"?fetch(_,{credentials:"same-origin"}).then(X=>{var J=WebAssembly.instantiateStreaming(X,T);return J.then(I,function(ce){return y(`wasm streaming compile failed: ${ce}`),y("falling back to ArrayBuffer instantiation"),Ve(_,T,I)})}):Ve(_,T,I)}function w(){return{a:rd}}function A(){var d=w();function _(I,X){return Vn=I.exports,Vn=sd(Vn),D=Vn.J,k(),ei=Vn.M,Q(Vn.K),Ze(),Vn}Oe();function T(I){_(I.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(d,_)}catch(I){y(`Module.instantiateWasm callback failed with error: ${I}`),s(I)}return ie||(ie=be()),Ie(b,ie,d,T).catch(s),{}}var V=d=>{for(;d.length>0;)d.shift()(n)};function le(d,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":return P[d>>>0];case"i8":return P[d>>>0];case"i16":return E[d>>>1>>>0];case"i32":return H[d>>>2>>>0];case"i64":qe("to do getValue(i64) use WASM_BIGINT");case"float":return ue[d>>>2>>>0];case"double":return B[d>>>3>>>0];case"*":return $[d>>>2>>>0];default:qe(`invalid type for getValue: ${_}`)}}n.noExitRuntime;function he(d,_,T="i8"){switch(T.endsWith("*")&&(T="*"),T){case"i1":P[d>>>0]=_;break;case"i8":P[d>>>0]=_;break;case"i16":E[d>>>1>>>0]=_;break;case"i32":H[d>>>2>>>0]=_;break;case"i64":qe("to do setValue(i64) use WASM_BIGINT");case"float":ue[d>>>2>>>0]=_;break;case"double":B[d>>>3>>>0]=_;break;case"*":$[d>>>2>>>0]=_;break;default:qe(`invalid type for setValue: ${T}`)}}class de{constructor(_){this.excPtr=_,this.ptr=_-24}set_type(_){$[this.ptr+4>>>2>>>0]=_}get_type(){return $[this.ptr+4>>>2>>>0]}set_destructor(_){$[this.ptr+8>>>2>>>0]=_}get_destructor(){return $[this.ptr+8>>>2>>>0]}set_caught(_){_=_?1:0,P[this.ptr+12>>>0]=_}get_caught(){return P[this.ptr+12>>>0]!=0}set_rethrown(_){_=_?1:0,P[this.ptr+13>>>0]=_}get_rethrown(){return P[this.ptr+13>>>0]!=0}init(_,T){this.set_adjusted_ptr(0),this.set_type(_),this.set_destructor(T)}set_adjusted_ptr(_){$[this.ptr+16>>>2>>>0]=_}get_adjusted_ptr(){return $[this.ptr+16>>>2>>>0]}get_exception_ptr(){var _=Wl(this.get_type());if(_)return $[this.excPtr>>>2>>>0];var T=this.get_adjusted_ptr();return T!==0?T:this.excPtr}}var Ge=0;function Pe(d,_,T){d>>>=0,_>>>=0,T>>>=0;var I=new de(d);throw I.init(_,T),Ge=d,Ge}var Ne=()=>{qe("")},Xe={},Je=d=>{for(;d.length;){var _=d.pop(),T=d.pop();T(_)}};function fe(d){return this.fromWireType($[d>>>2>>>0])}var et={},U={},pe={},we,ye=d=>{throw new we(d)},He=(d,_,T)=>{d.forEach(function(ee){pe[ee]=_});function I(ee){var ve=T(ee);ve.length!==d.length&&ye("Mismatched type converter count");for(var Me=0;Me<d.length;++Me)Fe(d[Me],ve[Me])}var X=new Array(_.length),J=[],ce=0;_.forEach((ee,ve)=>{U.hasOwnProperty(ee)?X[ve]=U[ee]:(J.push(ee),et.hasOwnProperty(ee)||(et[ee]=[]),et[ee].push(()=>{X[ve]=U[ee],++ce,ce===J.length&&I(X)}))}),J.length===0&&I(X)},lt=function(d){d>>>=0;var _=Xe[d];delete Xe[d];var T=_.rawConstructor,I=_.rawDestructor,X=_.fields,J=X.map(ce=>ce.getterReturnType).concat(X.map(ce=>ce.setterArgumentType));He([d],J,ce=>{var ee={};return X.forEach((ve,Me)=>{var Le=ve.fieldName,tt=ce[Me],_t=ve.getter,kt=ve.getterContext,Ut=ce[Me+X.length],Wn=ve.setter,Xn=ve.setterContext;ee[Le]={read:z=>tt.fromWireType(_t(kt,z)),write:(z,Y)=>{var ae=[];Wn(Xn,z,Ut.toWireType(ae,Y)),Je(ae)}}}),[{name:_.name,fromWireType:ve=>{var Me={};for(var Le in ee)Me[Le]=ee[Le].read(ve);return I(ve),Me},toWireType:(ve,Me)=>{for(var Le in ee)if(!(Le in Me))throw new TypeError(`Missing field: "${Le}"`);var tt=T();for(Le in ee)ee[Le].write(tt,Me[Le]);return ve!==null&&ve.push(I,tt),tt},argPackAdvance:rt,readValueFromPointer:fe,destructorFunction:I}]})};function dt(d,_,T,I,X){}var at=()=>{for(var d=new Array(256),_=0;_<256;++_)d[_]=String.fromCharCode(_);Te=d},Te,O=d=>{for(var _="",T=d;G[T>>>0];)_+=Te[G[T++>>>0]];return _},Ee,se=d=>{throw new Ee(d)};function $e(d,_,T={}){var I=_.name;if(d||se(`type "${I}" must have a positive integer typeid pointer`),U.hasOwnProperty(d)){if(T.ignoreDuplicateRegistrations)return;se(`Cannot register type '${I}' twice`)}if(U[d]=_,delete pe[d],et.hasOwnProperty(d)){var X=et[d];delete et[d],X.forEach(J=>J())}}function Fe(d,_,T={}){if(!("argPackAdvance"in _))throw new TypeError("registerType registeredInstance requires argPackAdvance");return $e(d,_,T)}var rt=8;function gt(d,_,T,I){d>>>=0,_>>>=0,_=O(_),Fe(d,{name:_,fromWireType:function(X){return!!X},toWireType:function(X,J){return J?T:I},argPackAdvance:rt,readValueFromPointer:function(X){return this.fromWireType(G[X>>>0])},destructorFunction:null})}var Ht=d=>({count:d.count,deleteScheduled:d.deleteScheduled,preservePointerOnDelete:d.preservePointerOnDelete,ptr:d.ptr,ptrType:d.ptrType,smartPtr:d.smartPtr,smartPtrType:d.smartPtrType}),qt=d=>{function _(T){return T.$$.ptrType.registeredClass.name}se(_(d)+" instance already deleted")},vt=!1,Jt=d=>{},Un=d=>{d.smartPtr?d.smartPtrType.rawDestructor(d.smartPtr):d.ptrType.registeredClass.rawDestructor(d.ptr)},os=d=>{d.count.value-=1;var _=d.count.value===0;_&&Un(d)},Hs=(d,_,T)=>{if(_===T)return d;if(T.baseClass===void 0)return null;var I=Hs(d,_,T.baseClass);return I===null?null:T.downcast(I)},Xi={},Gs=()=>Object.keys(R).length,Mr=()=>{var d=[];for(var _ in R)R.hasOwnProperty(_)&&d.push(R[_]);return d},bi=[],Ar=()=>{for(;bi.length;){var d=bi.pop();d.$$.deleteScheduled=!1,d.delete()}},Yi,Jo=d=>{Yi=d,bi.length&&Yi&&Yi(Ar)},Qo=()=>{n.getInheritedInstanceCount=Gs,n.getLiveInheritedInstances=Mr,n.flushPendingDeletes=Ar,n.setDelayFunction=Jo},R={},W=(d,_)=>{for(_===void 0&&se("ptr should not be undefined");d.baseClass;)_=d.upcast(_),d=d.baseClass;return _},Z=(d,_)=>(_=W(d,_),R[_]),K=(d,_)=>{(!_.ptrType||!_.ptr)&&ye("makeClassHandle requires ptr and ptrType");var T=!!_.smartPtrType,I=!!_.smartPtr;return T!==I&&ye("Both smartPtrType and smartPtr must be specified"),_.count={value:1},Ue(Object.create(d,{$$:{value:_,writable:!0}}))};function j(d){var _=this.getPointee(d);if(!_)return this.destructor(d),null;var T=Z(this.registeredClass,_);if(T!==void 0){if(T.$$.count.value===0)return T.$$.ptr=_,T.$$.smartPtr=d,T.clone();var I=T.clone();return this.destructor(d),I}function X(){return this.isSmartPointer?K(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:_,smartPtrType:this,smartPtr:d}):K(this.registeredClass.instancePrototype,{ptrType:this,ptr:d})}var J=this.registeredClass.getActualType(_),ce=Xi[J];if(!ce)return X.call(this);var ee;this.isConst?ee=ce.constPointerType:ee=ce.pointerType;var ve=Hs(_,this.registeredClass,ee.registeredClass);return ve===null?X.call(this):this.isSmartPointer?K(ee.registeredClass.instancePrototype,{ptrType:ee,ptr:ve,smartPtrType:this,smartPtr:d}):K(ee.registeredClass.instancePrototype,{ptrType:ee,ptr:ve})}var Ue=d=>typeof FinalizationRegistry>"u"?(Ue=_=>_,d):(vt=new FinalizationRegistry(_=>{os(_.$$)}),Ue=_=>{var T=_.$$,I=!!T.smartPtr;if(I){var X={$$:T};vt.register(_,X,_)}return _},Jt=_=>vt.unregister(_),Ue(d)),We=()=>{Object.assign(Ye.prototype,{isAliasOf(d){if(!(this instanceof Ye)||!(d instanceof Ye))return!1;var _=this.$$.ptrType.registeredClass,T=this.$$.ptr;d.$$=d.$$;for(var I=d.$$.ptrType.registeredClass,X=d.$$.ptr;_.baseClass;)T=_.upcast(T),_=_.baseClass;for(;I.baseClass;)X=I.upcast(X),I=I.baseClass;return _===I&&T===X},clone(){if(this.$$.ptr||qt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var d=Ue(Object.create(Object.getPrototypeOf(this),{$$:{value:Ht(this.$$)}}));return d.$$.count.value+=1,d.$$.deleteScheduled=!1,d},delete(){this.$$.ptr||qt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&se("Object already scheduled for deletion"),Jt(this),os(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||qt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&se("Object already scheduled for deletion"),bi.push(this),bi.length===1&&Yi&&Yi(Ar),this.$$.deleteScheduled=!0,this}})};function Ye(){}var je=(d,_)=>Object.defineProperty(_,"name",{value:d}),ot=(d,_,T)=>{if(d[_].overloadTable===void 0){var I=d[_];d[_]=function(...X){return d[_].overloadTable.hasOwnProperty(X.length)||se(`Function '${T}' called with an invalid number of arguments (${X.length}) - expects one of (${d[_].overloadTable})!`),d[_].overloadTable[X.length].apply(this,X)},d[_].overloadTable=[],d[_].overloadTable[I.argCount]=I}},Qe=(d,_,T)=>{n.hasOwnProperty(d)?((T===void 0||n[d].overloadTable!==void 0&&n[d].overloadTable[T]!==void 0)&&se(`Cannot register public name '${d}' twice`),ot(n,d,d),n.hasOwnProperty(T)&&se(`Cannot register multiple overloads of a function with the same number of arguments (${T})!`),n[d].overloadTable[T]=_):(n[d]=_,T!==void 0&&(n[d].numArguments=T))},st=48,Dt=57,mn=d=>{if(d===void 0)return"_unknown";d=d.replace(/[^a-zA-Z0-9_]/g,"$");var _=d.charCodeAt(0);return _>=st&&_<=Dt?`_${d}`:d};function Gt(d,_,T,I,X,J,ce,ee){this.name=d,this.constructor=_,this.instancePrototype=T,this.rawDestructor=I,this.baseClass=X,this.getActualType=J,this.upcast=ce,this.downcast=ee,this.pureVirtualFunctions=[]}var Pn=(d,_,T)=>{for(;_!==T;)_.upcast||se(`Expected null or instance of ${T.name}, got an instance of ${_.name}`),d=_.upcast(d),_=_.baseClass;return d};function Tt(d,_){if(_===null)return this.isReference&&se(`null is not a valid ${this.name}`),0;_.$$||se(`Cannot pass "${ra(_)}" as a ${this.name}`),_.$$.ptr||se(`Cannot pass deleted object as a pointer of type ${this.name}`);var T=_.$$.ptrType.registeredClass,I=Pn(_.$$.ptr,T,this.registeredClass);return I}function ct(d,_){var T;if(_===null)return this.isReference&&se(`null is not a valid ${this.name}`),this.isSmartPointer?(T=this.rawConstructor(),d!==null&&d.push(this.rawDestructor,T),T):0;(!_||!_.$$)&&se(`Cannot pass "${ra(_)}" as a ${this.name}`),_.$$.ptr||se(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&_.$$.ptrType.isConst&&se(`Cannot convert argument of type ${_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name} to parameter type ${this.name}`);var I=_.$$.ptrType.registeredClass;if(T=Pn(_.$$.ptr,I,this.registeredClass),this.isSmartPointer)switch(_.$$.smartPtr===void 0&&se("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:_.$$.smartPtrType===this?T=_.$$.smartPtr:se(`Cannot convert argument of type ${_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:T=_.$$.smartPtr;break;case 2:if(_.$$.smartPtrType===this)T=_.$$.smartPtr;else{var X=_.clone();T=this.rawShare(T,Qt.toHandle(()=>X.delete())),d!==null&&d.push(this.rawDestructor,T)}break;default:se("Unsupporting sharing policy")}return T}function as(d,_){if(_===null)return this.isReference&&se(`null is not a valid ${this.name}`),0;_.$$||se(`Cannot pass "${ra(_)}" as a ${this.name}`),_.$$.ptr||se(`Cannot pass deleted object as a pointer of type ${this.name}`),_.$$.ptrType.isConst&&se(`Cannot convert argument of type ${_.$$.ptrType.name} to parameter type ${this.name}`);var T=_.$$.ptrType.registeredClass,I=Pn(_.$$.ptr,T,this.registeredClass);return I}var Rt=()=>{Object.assign(Nn.prototype,{getPointee(d){return this.rawGetPointee&&(d=this.rawGetPointee(d)),d},destructor(d){var _;(_=this.rawDestructor)==null||_.call(this,d)},argPackAdvance:rt,readValueFromPointer:fe,fromWireType:j})};function Nn(d,_,T,I,X,J,ce,ee,ve,Me,Le){this.name=d,this.registeredClass=_,this.isReference=T,this.isConst=I,this.isSmartPointer=X,this.pointeeType=J,this.sharingPolicy=ce,this.rawGetPointee=ee,this.rawConstructor=ve,this.rawShare=Me,this.rawDestructor=Le,!X&&_.baseClass===void 0?I?(this.toWireType=Tt,this.destructorFunction=null):(this.toWireType=as,this.destructorFunction=null):this.toWireType=ct}var ls=(d,_,T)=>{n.hasOwnProperty(d)||ye("Replacing nonexistent public symbol"),n[d].overloadTable!==void 0&&T!==void 0?n[d].overloadTable[T]=_:(n[d]=_,n[d].argCount=T)},qi=(d,_,T)=>{d=d.replace(/p/g,"i");var I=n["dynCall_"+d];return I(_,...T)},ei,Nt=d=>ei.get(d),ai=(d,_,T=[])=>{if(d.includes("j"))return qi(d,_,T);var I=Nt(_)(...T);return d[0]=="p"?I>>>0:I},Sr=(d,_)=>(...T)=>ai(d,_,T),Ct=(d,_)=>{d=O(d);function T(){return d.includes("j")||d.includes("p")?Sr(d,_):Nt(_)}var I=T();return typeof I!="function"&&se(`unknown function pointer with signature ${d}: ${_}`),I},cs=(d,_)=>{var T=je(_,function(I){this.name=_,this.message=I;var X=new Error(I).stack;X!==void 0&&(this.stack=this.toString()+`
`+X.replace(/^Error(:[^\n]*)?\n/,""))});return T.prototype=Object.create(d.prototype),T.prototype.constructor=T,T.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},T},ks,us=d=>{var _=Vl(d),T=O(_);return ci(_),T},Vs=(d,_)=>{var T=[],I={};function X(J){if(!I[J]&&!U[J]){if(pe[J]){pe[J].forEach(X);return}T.push(J),I[J]=!0}}throw _.forEach(X),new ks(`${d}: `+T.map(us).join([", "]))};function ef(d,_,T,I,X,J,ce,ee,ve,Me,Le,tt,_t){d>>>=0,_>>>=0,T>>>=0,I>>>=0,X>>>=0,J>>>=0,ce>>>=0,ee>>>=0,ve>>>=0,Me>>>=0,Le>>>=0,tt>>>=0,_t>>>=0,Le=O(Le),J=Ct(X,J),ee&&(ee=Ct(ce,ee)),Me&&(Me=Ct(ve,Me)),_t=Ct(tt,_t);var kt=mn(Le);Qe(kt,function(){Vs(`Cannot construct ${Le} due to unbound types`,[I])}),He([d,_,T],I?[I]:[],Ut=>{var Vt;Ut=Ut[0];var Wn,Xn;I?(Wn=Ut.registeredClass,Xn=Wn.instancePrototype):Xn=Ye.prototype;var z=je(Le,function(...En){if(Object.getPrototypeOf(this)!==Y)throw new Ee("Use 'new' to construct "+Le);if(ae.constructor_body===void 0)throw new Ee(Le+" has no accessible constructor");var Ot=ae.constructor_body[En.length];if(Ot===void 0)throw new Ee(`Tried to invoke ctor of ${Le} with invalid number of parameters (${En.length}) - expected (${Object.keys(ae.constructor_body).toString()}) parameters instead!`);return Ot.apply(this,En)}),Y=Object.create(Xn,{constructor:{value:z}});z.prototype=Y;var ae=new Gt(Le,z,Y,_t,Wn,J,ee,Me);ae.baseClass&&((Vt=ae.baseClass).__derivedClasses??(Vt.__derivedClasses=[]),ae.baseClass.__derivedClasses.push(ae));var Ae=new Nn(Le,ae,!0,!1,!1),nt=new Nn(Le+"*",ae,!1,!1,!1),Et=new Nn(Le+" const*",ae,!1,!0,!1);return Xi[d]={pointerType:nt,constPointerType:Et},ls(kt,z),[Ae,nt,Et]})}var ea=(d,_)=>{for(var T=[],I=0;I<d;I++)T.push($[_+I*4>>>2>>>0]);return T};function Ul(d){for(var _=1;_<d.length;++_)if(d[_]!==null&&d[_].destructorFunction===void 0)return!0;return!1}function Nl(d,_){if(!(d instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof d} which is not a function`);var T=je(d.name||"unknownFunctionName",function(){});T.prototype=d.prototype;var I=new T,X=d.apply(I,_);return X instanceof Object?X:I}function tf(d,_,T,I){for(var X=Ul(d),J=d.length,ce="",ee="",ve=0;ve<J-2;++ve)ce+=(ve!==0?", ":"")+"arg"+ve,ee+=(ve!==0?", ":"")+"arg"+ve+"Wired";var Me=`
        return function (${ce}) {
        if (arguments.length !== ${J-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${J-2}');
        }`;X&&(Me+=`var destructors = [];
`);var Le=X?"destructors":"null",tt=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];_&&(Me+="var thisWired = classParam['toWireType']("+Le+`, this);
`);for(var ve=0;ve<J-2;++ve)Me+="var arg"+ve+"Wired = argType"+ve+"['toWireType']("+Le+", arg"+ve+`);
`,tt.push("argType"+ve);if(_&&(ee="thisWired"+(ee.length>0?", ":"")+ee),Me+=(T||I?"var rv = ":"")+"invoker(fn"+(ee.length>0?", ":"")+ee+`);
`,X)Me+=`runDestructors(destructors);
`;else for(var ve=_?1:2;ve<d.length;++ve){var _t=ve===1?"thisWired":"arg"+(ve-2)+"Wired";d[ve].destructorFunction!==null&&(Me+=`${_t}_dtor(${_t});
`,tt.push(`${_t}_dtor`))}return T&&(Me+=`var ret = retType['fromWireType'](rv);
return ret;
`),Me+=`}
`,[tt,Me]}function ta(d,_,T,I,X,J){var ce=_.length;ce<2&&se("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var ee=_[1]!==null&&T!==null,ve=Ul(_),Me=_[0].name!=="void",Le=[d,se,I,X,Je,_[0],_[1]],tt=0;tt<ce-2;++tt)Le.push(_[tt+2]);if(!ve)for(var tt=ee?1:2;tt<_.length;++tt)_[tt].destructorFunction!==null&&Le.push(_[tt].destructorFunction);let[_t,kt]=tf(_,ee,Me,J);_t.push(kt);var Ut=Nl(Function,_t)(...Le);return je(d,Ut)}var nf=function(d,_,T,I,X,J){d>>>=0,T>>>=0,I>>>=0,X>>>=0,J>>>=0;var ce=ea(_,T);X=Ct(I,X),He([],[d],ee=>{ee=ee[0];var ve=`constructor ${ee.name}`;if(ee.registeredClass.constructor_body===void 0&&(ee.registeredClass.constructor_body=[]),ee.registeredClass.constructor_body[_-1]!==void 0)throw new Ee(`Cannot register multiple constructors with identical number of parameters (${_-1}) for class '${ee.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return ee.registeredClass.constructor_body[_-1]=()=>{Vs(`Cannot construct ${ee.name} due to unbound types`,ce)},He([],ce,Me=>(Me.splice(1,0,null),ee.registeredClass.constructor_body[_-1]=ta(ve,Me,null,X,J),[])),[]})},Ol=d=>{d=d.trim();const _=d.indexOf("(");return _!==-1?d.substr(0,_):d},rf=function(d,_,T,I,X,J,ce,ee,ve){d>>>=0,_>>>=0,I>>>=0,X>>>=0,J>>>=0,ce>>>=0;var Me=ea(T,I);_=O(_),_=Ol(_),J=Ct(X,J),He([],[d],Le=>{Le=Le[0];var tt=`${Le.name}.${_}`;_.startsWith("@@")&&(_=Symbol[_.substring(2)]),ee&&Le.registeredClass.pureVirtualFunctions.push(_);function _t(){Vs(`Cannot call ${tt} due to unbound types`,Me)}var kt=Le.registeredClass.instancePrototype,Ut=kt[_];return Ut===void 0||Ut.overloadTable===void 0&&Ut.className!==Le.name&&Ut.argCount===T-2?(_t.argCount=T-2,_t.className=Le.name,kt[_]=_t):(ot(kt,_,tt),kt[_].overloadTable[T-2]=_t),He([],Me,Wn=>{var Xn=ta(tt,Wn,Le,J,ce,ve);return kt[_].overloadTable===void 0?(Xn.argCount=T-2,kt[_]=Xn):kt[_].overloadTable[T-2]=Xn,[]}),[]})},na=[],li=[];function ia(d){d>>>=0,d>9&&--li[d+1]===0&&(li[d]=void 0,na.push(d))}var sf=()=>li.length/2-5-na.length,of=()=>{li.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=sf},Qt={toValue:d=>(d||se("Cannot use deleted val. handle = "+d),li[d]),toHandle:d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const _=na.pop()||li.length;return li[_]=d,li[_+1]=1,_}}}},af={name:"emscripten::val",fromWireType:d=>{var _=Qt.toValue(d);return ia(d),_},toWireType:(d,_)=>Qt.toHandle(_),argPackAdvance:rt,readValueFromPointer:fe,destructorFunction:null};function Fl(d){return d>>>=0,Fe(d,af)}var lf=(d,_,T)=>{switch(_){case 1:return T?function(I){return this.fromWireType(P[I>>>0])}:function(I){return this.fromWireType(G[I>>>0])};case 2:return T?function(I){return this.fromWireType(E[I>>>1>>>0])}:function(I){return this.fromWireType(C[I>>>1>>>0])};case 4:return T?function(I){return this.fromWireType(H[I>>>2>>>0])}:function(I){return this.fromWireType($[I>>>2>>>0])};default:throw new TypeError(`invalid integer width (${_}): ${d}`)}};function cf(d,_,T,I){d>>>=0,_>>>=0,T>>>=0,_=O(_);function X(){}X.values={},Fe(d,{name:_,constructor:X,fromWireType:function(J){return this.constructor.values[J]},toWireType:(J,ce)=>ce.value,argPackAdvance:rt,readValueFromPointer:lf(_,T,I),destructorFunction:null}),Qe(_,X)}var Ws=(d,_)=>{var T=U[d];return T===void 0&&se(`${_} has unknown type ${us(d)}`),T};function uf(d,_,T){d>>>=0,_>>>=0;var I=Ws(d,"enum");_=O(_);var X=I.constructor,J=Object.create(I.constructor.prototype,{value:{value:T},constructor:{value:je(`${I.name}_${_}`,function(){})}});X.values[T]=J,X[_]=J}var ra=d=>{if(d===null)return"null";var _=typeof d;return _==="object"||_==="array"||_==="function"?d.toString():""+d},hf=(d,_)=>{switch(_){case 4:return function(T){return this.fromWireType(ue[T>>>2>>>0])};case 8:return function(T){return this.fromWireType(B[T>>>3>>>0])};default:throw new TypeError(`invalid float width (${_}): ${d}`)}},ff=function(d,_,T){d>>>=0,_>>>=0,T>>>=0,_=O(_),Fe(d,{name:_,fromWireType:I=>I,toWireType:(I,X)=>X,argPackAdvance:rt,readValueFromPointer:hf(_,T),destructorFunction:null})};function df(d,_,T,I,X,J,ce){d>>>=0,T>>>=0,I>>>=0,X>>>=0,J>>>=0;var ee=ea(_,T);d=O(d),d=Ol(d),X=Ct(I,X),Qe(d,function(){Vs(`Cannot call ${d} due to unbound types`,ee)},_-1),He([],ee,ve=>{var Me=[ve[0],null].concat(ve.slice(1));return ls(d,ta(d,Me,null,X,J,ce),_-1),[]})}var pf=(d,_,T)=>{switch(_){case 1:return T?I=>P[I>>>0]:I=>G[I>>>0];case 2:return T?I=>E[I>>>1>>>0]:I=>C[I>>>1>>>0];case 4:return T?I=>H[I>>>2>>>0]:I=>$[I>>>2>>>0];default:throw new TypeError(`invalid integer width (${_}): ${d}`)}};function mf(d,_,T,I,X){d>>>=0,_>>>=0,T>>>=0,_=O(_);var J=Le=>Le;if(I===0){var ce=32-8*T;J=Le=>Le<<ce>>>ce}var ee=_.includes("unsigned"),ve=(Le,tt)=>{},Me;ee?Me=function(Le,tt){return ve(tt,this.name),tt>>>0}:Me=function(Le,tt){return ve(tt,this.name),tt},Fe(d,{name:_,fromWireType:J,toWireType:Me,argPackAdvance:rt,readValueFromPointer:pf(_,T,I!==0),destructorFunction:null})}function gf(d,_,T){d>>>=0,T>>>=0;var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],X=I[_];function J(ce){var ee=$[ce>>>2>>>0],ve=$[ce+4>>>2>>>0];return new X(P.buffer,ve,ee)}T=O(T),Fe(d,{name:T,fromWireType:J,argPackAdvance:rt,readValueFromPointer:J},{ignoreDuplicateRegistrations:!0})}function _f(d,_){d>>>=0,Fl(d)}var vf=(d,_,T,I)=>{if(T>>>=0,!(I>0))return 0;for(var X=T,J=T+I-1,ce=0;ce<d.length;++ce){var ee=d.charCodeAt(ce);if(ee>=55296&&ee<=57343){var ve=d.charCodeAt(++ce);ee=65536+((ee&1023)<<10)|ve&1023}if(ee<=127){if(T>=J)break;_[T++>>>0]=ee}else if(ee<=2047){if(T+1>=J)break;_[T++>>>0]=192|ee>>6,_[T++>>>0]=128|ee&63}else if(ee<=65535){if(T+2>=J)break;_[T++>>>0]=224|ee>>12,_[T++>>>0]=128|ee>>6&63,_[T++>>>0]=128|ee&63}else{if(T+3>=J)break;_[T++>>>0]=240|ee>>18,_[T++>>>0]=128|ee>>12&63,_[T++>>>0]=128|ee>>6&63,_[T++>>>0]=128|ee&63}}return _[T>>>0]=0,T-X},xf=(d,_,T)=>vf(d,G,_,T),yf=d=>{for(var _=0,T=0;T<d.length;++T){var I=d.charCodeAt(T);I<=127?_++:I<=2047?_+=2:I>=55296&&I<=57343?(_+=4,++T):_+=3}return _},Bl=typeof TextDecoder<"u"?new TextDecoder:void 0,Mf=(d,_,T)=>{_>>>=0;for(var I=_+T,X=_;d[X]&&!(X>=I);)++X;if(X-_>16&&d.buffer&&Bl)return Bl.decode(d.subarray(_,X));for(var J="";_<X;){var ce=d[_++];if(!(ce&128)){J+=String.fromCharCode(ce);continue}var ee=d[_++]&63;if((ce&224)==192){J+=String.fromCharCode((ce&31)<<6|ee);continue}var ve=d[_++]&63;if((ce&240)==224?ce=(ce&15)<<12|ee<<6|ve:ce=(ce&7)<<18|ee<<12|ve<<6|d[_++]&63,ce<65536)J+=String.fromCharCode(ce);else{var Me=ce-65536;J+=String.fromCharCode(55296|Me>>10,56320|Me&1023)}}return J},Af=(d,_)=>(d>>>=0,d?Mf(G,d,_):"");function Sf(d,_){d>>>=0,_>>>=0,_=O(_);var T=_==="std::string";Fe(d,{name:_,fromWireType(I){var X=$[I>>>2>>>0],J=I+4,ce;if(T)for(var ee=J,ve=0;ve<=X;++ve){var Me=J+ve;if(ve==X||G[Me>>>0]==0){var Le=Me-ee,tt=Af(ee,Le);ce===void 0?ce=tt:(ce+="\0",ce+=tt),ee=Me+1}}else{for(var _t=new Array(X),ve=0;ve<X;++ve)_t[ve]=String.fromCharCode(G[J+ve>>>0]);ce=_t.join("")}return ci(I),ce},toWireType(I,X){X instanceof ArrayBuffer&&(X=new Uint8Array(X));var J,ce=typeof X=="string";ce||X instanceof Uint8Array||X instanceof Uint8ClampedArray||X instanceof Int8Array||se("Cannot pass non-string to std::string"),T&&ce?J=yf(X):J=X.length;var ee=la(4+J+1),ve=ee+4;if($[ee>>>2>>>0]=J,T&&ce)xf(X,ve,J+1);else if(ce)for(var Me=0;Me<J;++Me){var Le=X.charCodeAt(Me);Le>255&&(ci(ve),se("String has UTF-16 code units that do not fit in 8 bits")),G[ve+Me>>>0]=Le}else for(var Me=0;Me<J;++Me)G[ve+Me>>>0]=X[Me];return I!==null&&I.push(ci,ee),ee},argPackAdvance:rt,readValueFromPointer:fe,destructorFunction(I){ci(I)}})}var zl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Ef=(d,_)=>{for(var T=d,I=T>>1,X=I+_/2;!(I>=X)&&C[I>>>0];)++I;if(T=I<<1,T-d>32&&zl)return zl.decode(G.subarray(d>>>0,T>>>0));for(var J="",ce=0;!(ce>=_/2);++ce){var ee=E[d+ce*2>>>1>>>0];if(ee==0)break;J+=String.fromCharCode(ee)}return J},bf=(d,_,T)=>{if(T??(T=2147483647),T<2)return 0;T-=2;for(var I=_,X=T<d.length*2?T/2:d.length,J=0;J<X;++J){var ce=d.charCodeAt(J);E[_>>>1>>>0]=ce,_+=2}return E[_>>>1>>>0]=0,_-I},Tf=d=>d.length*2,wf=(d,_)=>{for(var T=0,I="";!(T>=_/4);){var X=H[d+T*4>>>2>>>0];if(X==0)break;if(++T,X>=65536){var J=X-65536;I+=String.fromCharCode(55296|J>>10,56320|J&1023)}else I+=String.fromCharCode(X)}return I},Rf=(d,_,T)=>{if(_>>>=0,T??(T=2147483647),T<4)return 0;for(var I=_,X=I+T-4,J=0;J<d.length;++J){var ce=d.charCodeAt(J);if(ce>=55296&&ce<=57343){var ee=d.charCodeAt(++J);ce=65536+((ce&1023)<<10)|ee&1023}if(H[_>>>2>>>0]=ce,_+=4,_+4>X)break}return H[_>>>2>>>0]=0,_-I},Cf=d=>{for(var _=0,T=0;T<d.length;++T){var I=d.charCodeAt(T);I>=55296&&I<=57343&&++T,_+=4}return _},Pf=function(d,_,T){d>>>=0,_>>>=0,T>>>=0,T=O(T);var I,X,J,ce;_===2?(I=Ef,X=bf,ce=Tf,J=ee=>C[ee>>>1>>>0]):_===4&&(I=wf,X=Rf,ce=Cf,J=ee=>$[ee>>>2>>>0]),Fe(d,{name:T,fromWireType:ee=>{for(var ve=$[ee>>>2>>>0],Me,Le=ee+4,tt=0;tt<=ve;++tt){var _t=ee+4+tt*_;if(tt==ve||J(_t)==0){var kt=_t-Le,Ut=I(Le,kt);Me===void 0?Me=Ut:(Me+="\0",Me+=Ut),Le=_t+_}}return ci(ee),Me},toWireType:(ee,ve)=>{typeof ve!="string"&&se(`Cannot pass non-string to C++ string type ${T}`);var Me=ce(ve),Le=la(4+Me+_);return $[Le>>>2>>>0]=Me/_,X(ve,Le+4,Me+_),ee!==null&&ee.push(ci,Le),Le},argPackAdvance:rt,readValueFromPointer:fe,destructorFunction(ee){ci(ee)}})};function Lf(d,_,T,I,X,J){d>>>=0,_>>>=0,T>>>=0,I>>>=0,X>>>=0,J>>>=0,Xe[d]={name:O(_),rawConstructor:Ct(T,I),rawDestructor:Ct(X,J),fields:[]}}function Df(d,_,T,I,X,J,ce,ee,ve,Me){d>>>=0,_>>>=0,T>>>=0,I>>>=0,X>>>=0,J>>>=0,ce>>>=0,ee>>>=0,ve>>>=0,Me>>>=0,Xe[d].fields.push({fieldName:O(_),getterReturnType:T,getter:Ct(I,X),getterContext:J,setterArgumentType:ce,setter:Ct(ee,ve),setterContext:Me})}var If=function(d,_){d>>>=0,_>>>=0,_=O(_),Fe(d,{isVoid:!0,name:_,argPackAdvance:0,fromWireType:()=>{},toWireType:(T,I)=>{}})};function Uf(d,_,T){return d>>>=0,_>>>=0,T>>>=0,G.copyWithin(d>>>0,_>>>0,_+T>>>0)}var Hl=(d,_,T)=>{var I=[],X=d.toWireType(I,T);return I.length&&($[_>>>2>>>0]=Qt.toHandle(I)),X};function Nf(d,_,T){return d>>>=0,_>>>=0,T>>>=0,d=Qt.toValue(d),_=Ws(_,"emval::as"),Hl(_,T,d)}var Of={},Gl=d=>{var _=Of[d];return _===void 0?O(d):_},sa=[];function Ff(d,_,T,I,X){return d>>>=0,_>>>=0,T>>>=0,I>>>=0,X>>>=0,d=sa[d],_=Qt.toValue(_),T=Gl(T),d(_,_[T],I,X)}function Bf(d,_){return d>>>=0,_>>>=0,d=Qt.toValue(d),_=Qt.toValue(_),d==_}var zf=d=>{var _=sa.length;return sa.push(d),_},Hf=(d,_)=>{for(var T=new Array(d),I=0;I<d;++I)T[I]=Ws($[_+I*4>>>2>>>0],"parameter "+I);return T};function Gf(d,_,T){_>>>=0;var I=Hf(d,_),X=I.shift();d--;var J=`return function (obj, func, destructorsRef, args) {
`,ce=0,ee=[];T===0&&ee.push("obj");for(var ve=["retType"],Me=[X],Le=0;Le<d;++Le)ee.push("arg"+Le),ve.push("argType"+Le),Me.push(I[Le]),J+=`  var arg${Le} = argType${Le}.readValueFromPointer(args${ce?"+"+ce:""});
`,ce+=I[Le].argPackAdvance;var tt=T===1?"new func":"func.call";J+=`  var rv = ${tt}(${ee.join(", ")});
`,X.isVoid||(ve.push("emval_returnValue"),Me.push(Hl),J+=`  return emval_returnValue(retType, destructorsRef, rv);
`),J+=`};
`,ve.push(J);var _t=Nl(Function,ve)(...Me),kt=`methodCaller<(${I.map(Ut=>Ut.name).join(", ")}) => ${X.name}>`;return zf(je(kt,_t))}function kf(d,_){return d>>>=0,_>>>=0,d=Qt.toValue(d),_=Qt.toValue(_),Qt.toHandle(d[_])}function Vf(d){d>>>=0,d>9&&(li[d+1]+=1)}function Wf(d){return d>>>=0,Qt.toHandle(Gl(d))}function Xf(){return Qt.toHandle({})}function Yf(d){d>>>=0;var _=Qt.toValue(d);Je(_),ia(d)}function qf(d,_,T){d>>>=0,_>>>=0,T>>>=0,d=Qt.toValue(d),_=Qt.toValue(_),T=Qt.toValue(T),d[_]=T}function $f(d,_){d>>>=0,_>>>=0,d=Ws(d,"_emval_take_value");var T=d.readValueFromPointer(_);return Qt.toHandle(T)}var jf=()=>4294901760,Zf=d=>{var _=D.buffer,T=(d-_.byteLength+65535)/65536;try{return D.grow(T),k(),1}catch{}};function Kf(d){d>>>=0;var _=G.length,T=jf();if(d>T)return!1;for(var I=(ve,Me)=>ve+(Me-ve%Me)%Me,X=1;X<=4;X*=2){var J=_*(1+.2/X);J=Math.min(J,d+100663296);var ce=Math.min(T,I(Math.max(d,J),65536)),ee=Zf(ce);if(ee)return!0}return!1}var kl=(d,_)=>{d<128?_.push(d):_.push(d%128|128,d>>7)},Jf=d=>{for(var _={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},T={parameters:[],results:d[0]=="v"?[]:[_[d[0]]]},I=1;I<d.length;++I)T.parameters.push(_[d[I]]);return T},Qf=(d,_)=>{var T=d.slice(0,1),I=d.slice(1),X={i:127,p:127,j:126,f:125,d:124,e:111};_.push(96),kl(I.length,_);for(var J=0;J<I.length;++J)_.push(X[I[J]]);T=="v"?_.push(0):_.push(1,X[T])},ed=(d,_)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(Jf(_),d);var T=[1];Qf(_,T);var I=[0,97,115,109,1,0,0,0,1];kl(T.length,I),I.push(...T),I.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var X=new WebAssembly.Module(new Uint8Array(I)),J=new WebAssembly.Instance(X,{e:{f:d}}),ce=J.exports.f;return ce},td=(d,_)=>{if($i)for(var T=d;T<d+_;T++){var I=Nt(T);I&&$i.set(I,T)}},$i,nd=d=>($i||($i=new WeakMap,td(0,ei.length)),$i.get(d)||0),oa=[],id=()=>{if(oa.length)return oa.pop();try{ei.grow(1)}catch(d){throw d instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":d}return ei.length-1},aa=(d,_)=>ei.set(d,_),hs=(d,_)=>{var T=nd(d);if(T)return T;var I=id();try{aa(I,d)}catch(J){if(!(J instanceof TypeError))throw J;var X=ed(d,_);aa(I,X)}return $i.set(d,I),I},fs=d=>{$i.delete(Nt(d)),aa(d,null),oa.push(d)};we=n.InternalError=class extends Error{constructor(_){super(_),this.name="InternalError"}},at(),Ee=n.BindingError=class extends Error{constructor(_){super(_),this.name="BindingError"}},We(),Qo(),Rt(),ks=n.UnboundTypeError=cs(Error,"UnboundTypeError"),of();var rd={i:Pe,D:Ne,n:lt,C:dt,H:gt,h:ef,g:nf,a:rf,G:Fl,t:cf,e:uf,x:ff,c:df,j:mf,f:gf,k:_f,w:Sf,s:Pf,o:Lf,l:Df,I:If,F:Uf,v:Nf,z:Ff,b:ia,m:Bf,y:Gf,B:kf,u:Vf,q:Wf,A:Xf,p:Yf,r:qf,d:$f,E:Kf},Vn=A(),Vl=d=>(Vl=Vn.L)(d),la=d=>(la=Vn.N)(d),ci=d=>(ci=Vn.O)(d),Wl=d=>(Wl=Vn.P)(d);function sd(d){d=Object.assign({},d);var _=I=>X=>I(X)>>>0,T=I=>()=>I()>>>0;return d.L=_(d.L),d.N=_(d.N),d._emscripten_stack_alloc=_(d._emscripten_stack_alloc),d.emscripten_stack_get_current=T(d.emscripten_stack_get_current),d}n.addFunction=hs,n.removeFunction=fs;var Xs;ze=function d(){Xs||Xl(),Xs||(ze=d)};function Xl(){if(Re>0||(ne(),Re>0))return;function d(){var _;Xs||(Xs=!0,n.calledRun=!0,!L&&(me(),r(n),(_=n.onRuntimeInitialized)==null||_.call(n),_e()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),d()},1)):d()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Xl(),t=o,t}})();const dx="/assets/manifold-ldiO02fT.wasm",px="/assets/usb_c_hole-Bh-LhuL4.stl",mx="/assets/switch_mx-DlXkNR-Z.stl",gx="data:model/stl;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAqfV/P5+AkTwAAAAAAEAbRMOlZ8Ty0tHAAEAbRMOlZ8RGti3BECAbRACgYMRGti3BAACp9X8/n4CRPAAAAAAAQBtEw6VnxPLS0cAQIBtEAKBgxEa2LcEQIBtEAKBgxPLS0cAAAKn1f7+fgJG8AAAAAAAgEkQ9umDE8tLRwAAgEkQ9umDERrYtwfA/EkQAwGfERrYtwQAAqfV/v5+AkbwAAAAAACASRD26YMTy0tHA8D8SRADAZ8RGti3B8D8SRADAZ8Ty0tHAAAAAAAAAAAAAAAAAgD8QIBtEAKBgxPLS0cAAIBJEPbpgxPLS0cDwPxJEAMBnxPLS0cAAAAAAAAAAAAAAAACAPxAgG0QAoGDE8tLRwPA/EkQAwGfE8tLRwABAG0TDpWfE8tLRwAAAAAAAAAAAAAAAAIC/ACASRD26YMRGti3BECAbRACgYMRGti3B8D8SRADAZ8RGti3BAAAAAAAAAAAAAAAAgL8AQBtEw6VnxEa2LcHwPxJEAMBnxEa2LcEQIBtEAKBgxEa2LcEAAAqUOrzA+38/AAAAABAgG0QAoGDE8tLRwBAgG0QAoGDERrYtwQAgEkQ9umDERrYtwQAACpQ6vMD7fz8AAAAAECAbRACgYMTy0tHAACASRD26YMRGti3BACASRD26YMTy0tHAAAAKlDo8wPt/vwAAAADwPxJEAMBnxPLS0cDwPxJEAMBnxEa2LcEAQBtEw6VnxEa2LcEAAAqUOjzA+3+/AAAAAPA/EkQAwGfE8tLRwABAG0TDpWfERrYtwQBAG0TDpWfE8tLRwAAA",_x="/assets/esp32_c3_supermini-DsPQz_9p.stl",vx="/assets/battery_charging_module-BhVwN-nm.stl",xx="data:model/stl;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAACAPwAAAAAAAAAAAADLQwBATcQAAIBBAADLQwBATcQAAAAAAADLQ2amTMQAAAAAAAAAAIA/AAAAAAAAAAAAAMtDAEBNxAAAgEEAAMtDZqZMxAAAAAAAAMtDZqZMxAAAgEEAAAAAgL8AAAAAAAAAAACAw0NmpkzEAACAQQCAw0NmpkzEAAAAAACAw0MAQE3EAAAAAAAAAACAvwAAAAAAAAAAAIDDQ2amTMQAAIBBAIDDQwBATcQAAAAAAIDDQwBATcQAAIBBAAAAAAAAAAAAAAAAgD8AAMtDZqZMxAAAgEEAgMNDZqZMxAAAgEEAgMNDAEBNxAAAgEEAAAAAAAAAAAAAAACAPwAAy0NmpkzEAACAQQCAw0MAQE3EAACAQQAAy0MAQE3EAACAQQAAAAAAAAAAAAAAAIC/AADLQwBATcQAAAAAAIDDQwBATcQAAAAAAIDDQ2amTMQAAAAAAAAAAAAAAAAAAAAAgL8AAMtDAEBNxAAAAAAAgMNDZqZMxAAAAAAAAMtDZqZMxAAAAAAAAAAAAAAAAIA/AAAAAAAAy0NmpkzEAACAQQAAy0NmpkzEAAAAAACAw0NmpkzEAAAAAAAAAAAAAAAAgD8AAAAAAADLQ2amTMQAAIBBAIDDQ2amTMQAAAAAAIDDQ2amTMQAAIBBAAAAAAAAAACAvwAAAAAAgMNDAEBNxAAAgEEAgMNDAEBNxAAAAAAAAMtDAEBNxAAAAAAAAAAAAAAAAIC/AAAAAACAw0MAQE3EAACAQQAAy0MAQE3EAAAAAAAAy0MAQE3EAACAQQAA",yx="/assets/obj_2_sup%202.0%20face-BjSeTE-s.stl",Mx="/assets/bun_lid_clean-BYsGTvJL.stl",Iu={520:{L:36.5,W:28.5,T:4.3,clr:.7},650:{L:40,W:20,T:8,clr:.5}},Xt=()=>Iu[x.batType]||Iu[520],Pt=()=>x.batType==="none",ki=()=>!Pt()&&x.batPose==="stand",Mi=()=>!Pt()&&["s0","s90","u0","u90"].includes(x.espRot),mt={l:24,w:18,h:4.2,usbZ:2.6},hn={l:19,w:14,h:4.5,usbZ:2.9,usbOver:1},Uu={"049":{w:15,hgt:16,t:2.4,winW:13.5,winH:8,winC:8.9},"096":{w:26,hgt:26,t:3.5,winW:23.2,winH:12.4,winC:12,pegs:{pitch:22,d:1.8,len:2}}},Oh=.2,Nu=.6,Qn=()=>Uu[x.oledType]||Uu["049"],Jn=()=>x.bossOn?x.bossH:0,Is=()=>Qn().w+3,Us=()=>4.2+Qn().hgt+Oh+1.2,Mt={body:14.3,seatH:5.5,floorT:.6,cup:20,H:17.9,pinLen:3.1,cornerSq:4,cornerOut:.4,holes:[[0,0,4.3],[5,0,1.8],[-5,0,1.8],[3.8,-2.7,1.8],[-2.7,-5.2,1.8]]},Yt={r:20.5,bandW:2.3,h:14.22,innerH:10.9},Ax=21.6,Ou={3:{d:3,fl:3.85,cyl:2.9,domeR:1.5},4:{d:4,fl:4.8,cyl:3.8,domeR:2},5:{d:5,fl:5.8,cyl:5.2,domeR:2.5},r25:{rect:!0,w:5,t:2,bodyH:7,pitch:2.54,fl:5.6}},Ni=()=>Ou[x.ledType]||Ou[3],Be={d:12,h:8.3,clr:.25,wall:1.6,sink:1.8,sideSink:2.5,ring:4},Fu=()=>Jn()+Ax,Oi=1.6,it=2,Mn=2.2,fn=3.2,Ai=1.5,Fh=1.2,or={out:.7,d:1.8},Sn=.4,x={shape:"rect",W:44,D:39,R:8,wall:2.3,bands:!0,fitClr:.08,f1H:7.5,f2H:16,f3H:10,bossOn:!0,bossH:2.5,standSink:2.5,steamOn:!0,espX:0,espY:8,espRot:0,espLift:0,espZ:0,modY:-9,oledSide:"W",oledType:"049",oledProud:0,batType:"520",batPose:"flat",batX:-8,wireX:-6,wireY:-12,wireRot:0,swGpio:4,sdaGpio:8,sclGpio:9,lidOn:!0,lidH:6,ledOn:!0,ledType:"3",ledX:0,ledY:-14.5,ledGpio:3,led2Gpio:5,bzOn:!0,bzMount:"f2",bzX:8,bzY:-8,bzGpio:2};try{const i=JSON.parse(localStorage.getItem("dimsum-params")||"{}");for(const e in i)e in x&&(x[e]=i[e]);i.batType==="650"&&!("batPose"in i)&&(x.batPose="stand")}catch{}const Al=()=>{try{localStorage.setItem("dimsum-params",JSON.stringify(x))}catch{}},Bh=["W","D","R","wall","fitClr","f1H","f2H","f3H","bossH","standSink","espX","espY","espLift","espZ","modY","oledProud","batX","wireX","wireY","lidH","ledX","ledY","bzX","bzY"];let Bu=null;function pn(){Al(),clearTimeout(Bu),Bu=setTimeout(Ll,250)}for(const i of Bh){const e=document.getElementById(i),t=document.getElementById(i+"v"),n=+e.step<.1?2:1,r=()=>{t.textContent=(+e.value).toFixed(n)};e.value=x[i],e.addEventListener("input",()=>{x[i]=+e.value,r(),pn()}),r()}function Sx(i,e){if(i.disabled)return;const t=+i.step||1,n=t<1?(String(t).split(".")[1]||"").length:0;let r=+i.value+e*t;r=Math.min(+i.max,Math.max(+i.min,r)),i.value=n?r.toFixed(n):Math.round(r),i.dispatchEvent(new Event("input"))}for(const i of document.querySelectorAll("input[type=range]")){const e=(n,r)=>{const s=document.createElement("button");return s.className="nudge",s.textContent=n,s.tabIndex=-1,s.addEventListener("click",()=>Sx(i,r)),s},t=i.nextElementSibling;i.parentNode.insertBefore(e("−",-1),i),i.parentNode.insertBefore(e("+",1),t&&t.classList.contains("val")?t:i.nextSibling)}function Sl(){const i=x.shape==="circle";document.getElementById("D").disabled=i,document.getElementById("R").disabled=i,jo()}function jo(){const i=Pt(),e=x.shape==="circle";document.getElementById("batPose").disabled=i,document.getElementById("batX").disabled=!ki(),document.getElementById("espX").disabled=i,document.getElementById("espY").disabled=i&&e,document.getElementById("espRot").disabled=i,document.getElementById("espLift").disabled=i||Mi(),document.getElementById("modY").disabled=i||e;for(const t of["wireX","wireY","wireRot"])document.getElementById(t).disabled=i}document.getElementById("shape").value=x.shape;Sl();document.getElementById("shape").addEventListener("change",i=>{if(x.shape=i.target.value,x.shape==="circle"&&x.W<52){x.W=54;const e=document.getElementById("W");e.value=54,document.getElementById("Wv").textContent="54.0"}Sl(),pn()});document.getElementById("espRot").value=String(x.espRot);document.getElementById("wireRot").value=String(x.wireRot);document.getElementById("oledSide").value=x.oledSide;document.getElementById("oledType").value=x.oledType;document.getElementById("oledType").addEventListener("change",i=>{x.oledType=i.target.value,pn()});document.getElementById("batType").value=x.batType;document.getElementById("batPose").value=x.batPose;document.getElementById("batType").addEventListener("change",i=>{if(x.batType=i.target.value,Pt()){const e=Math.max(0,Bo()-(mt.w+Sn)/2-1);Math.abs(x.espY)>e&&(x.espY=Math.round(Math.sign(x.espY)*e*2)/2,zh())}jo(),pn()});document.getElementById("batPose").addEventListener("change",i=>{x.batPose=i.target.value,jo(),pn()});document.getElementById("bands").checked=x.bands;document.getElementById("bossOn").checked=x.bossOn;document.getElementById("bossH").disabled=!x.bossOn;document.getElementById("bossOn").addEventListener("change",i=>{x.bossOn=i.target.checked,document.getElementById("bossH").disabled=!x.bossOn,pn()});document.getElementById("steamOn").checked=x.steamOn;document.getElementById("steamOn").addEventListener("change",i=>{x.steamOn=i.target.checked,pn()});document.getElementById("lidOn").checked=x.lidOn;document.getElementById("lidH").disabled=!x.lidOn;document.getElementById("lidOn").addEventListener("change",i=>{x.lidOn=i.target.checked,document.getElementById("lidH").disabled=!x.lidOn,pn()});const El=()=>{for(const i of["ledType","ledX","ledY"])document.getElementById(i).disabled=!x.ledOn};document.getElementById("ledOn").checked=x.ledOn;document.getElementById("ledType").value=x.ledType;El();document.getElementById("ledOn").addEventListener("change",i=>{x.ledOn=i.target.checked,El(),pn()});document.getElementById("ledType").addEventListener("change",i=>{x.ledType=i.target.value,pn()});const bl=()=>{for(const i of["bzMount","bzX","bzY"])document.getElementById(i).disabled=!x.bzOn};document.getElementById("bzOn").checked=x.bzOn;document.getElementById("bzMount").value=x.bzMount;bl();document.getElementById("bzOn").addEventListener("change",i=>{x.bzOn=i.target.checked,bl(),pn()});document.getElementById("bzMount").addEventListener("change",i=>{x.bzMount=i.target.value,pn()});document.getElementById("espRot").addEventListener("change",i=>{const e=i.target.value;x.espRot=e==="0"||e==="90"?+e:e,jo(),pn()});document.getElementById("wireRot").addEventListener("change",i=>{x.wireRot=+i.target.value,pn()});document.getElementById("oledSide").addEventListener("change",i=>{x.oledSide=i.target.value,pn()});document.getElementById("bands").addEventListener("change",i=>{x.bands=i.target.checked,pn()});document.getElementById("resetBtn").addEventListener("click",()=>{localStorage.removeItem("dimsum-params"),location.reload()});function zh(){for(const i of Bh){const e=document.getElementById(i),t=+e.step<.1?2:1;e.value=x[i],document.getElementById(i+"v").textContent=(+e.value).toFixed(t)}document.getElementById("shape").value=x.shape,document.getElementById("espRot").value=String(x.espRot),document.getElementById("wireRot").value=String(x.wireRot),document.getElementById("oledSide").value=x.oledSide,document.getElementById("oledType").value=x.oledType,document.getElementById("batType").value=x.batType,document.getElementById("batPose").value=x.batPose,document.getElementById("bands").checked=x.bands,document.getElementById("bossOn").checked=x.bossOn,document.getElementById("bossH").disabled=!x.bossOn,document.getElementById("steamOn").checked=x.steamOn,document.getElementById("lidOn").checked=x.lidOn,document.getElementById("lidH").disabled=!x.lidOn,document.getElementById("ledOn").checked=x.ledOn,document.getElementById("ledType").value=x.ledType,El(),document.getElementById("bzOn").checked=x.bzOn,document.getElementById("bzMount").value=x.bzMount,bl(),Sl()}document.getElementById("presetExport").addEventListener("click",()=>{const i=new Blob([JSON.stringify(x,null,2)],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(i),e.download="dimsum-preset.json",document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(e.href),2e3)});const ol=document.getElementById("presetFile");document.getElementById("presetImport").addEventListener("click",()=>ol.click());ol.addEventListener("change",i=>{const e=i.target.files[0];if(!e)return;const t=new FileReader;t.onload=()=>{try{const n=JSON.parse(t.result);let r=0;for(const s in n)s in x&&(x[s]=n[s],r++);zh(),Al(),Ll(),document.getElementById("warnings").textContent=`✓ 프리셋 불러옴 (${r}개 항목 적용)`}catch{document.getElementById("warnings").textContent="⚠ 프리셋 파일을 읽을 수 없습니다 (JSON 형식 오류)"}},t.readAsText(e),ol.value=""});const al=document.getElementById("viewer"),gr=new yh({antialias:!0});gr.setPixelRatio(window.devicePixelRatio);al.appendChild(gr.domElement);const Wi=new dv;Wi.background=new ft(16183783);const _r=new zn(40,1,.1,2e3);_r.position.set(95,-110,85);_r.up.set(0,0,1);const Tl=new sx(_r,gr.domElement);Tl.target.set(0,0,28);Tl.enableDamping=!0;Wi.add(new Qv(16775920,11575424,1.1));const Hh=new Nh(16777215,1.6);Hh.position.set(60,-80,120);Wi.add(Hh);const Gh=new Nh(16771520,.5);Gh.position.set(-80,60,40);Wi.add(Gh);const wl=new ix(300,30,14207914,15261641);wl.rotation.x=Math.PI/2;wl.position.z=-14;Wi.add(wl);function kh(){const i=al.clientWidth,e=al.clientHeight;gr.setSize(i,e),_r.aspect=i/e,_r.updateProjectionMatrix()}window.addEventListener("resize",kh);kh();(function i(){requestAnimationFrame(i),Tl.update(),gr.render(Wi,_r)})();const Vh=new Gi({color:14598284,roughness:.75,metalness:.02}),Wh=new Gi({color:14598284,roughness:.75,transparent:!0,opacity:.42}),Qi=i=>new Gi({color:i,roughness:.6,transparent:!0,opacity:.9}),_n={bat:Qi(8688808),esp:Qi(3360604),mod:Qi(12603452),oled:Qi(2072198),stand:Qi(9462210),face:Qi(16044657),led:new Gi({color:16774880,emissive:16761707,emissiveIntensity:.6,roughness:.25,transparent:!0,opacity:.95}),ledR:new Gi({color:16770012,emissive:14701116,emissiveIntensity:.5,roughness:.25,transparent:!0,opacity:.95}),ledG:new Gi({color:14676962,emissive:3973978,emissiveIntensity:.5,roughness:.25,transparent:!0,opacity:.95}),bz:Qi(2303790)},At=[new yi,new yi,new yi,new yi];At.forEach(i=>Wi.add(i));let To=[null,null,null,null],ri=[null,null,null,null],ll=null;function dn(i,e,t=1e-5){let n=i;e&&(n=i.clone(),n.applyMatrix4(e));const r=lx(n,t),s=r.index.array,o=[];for(let l=0;l<s.length;l+=3)s[l]!==s[l+1]&&s[l+1]!==s[l+2]&&s[l]!==s[l+2]&&o.push(s[l],s[l+1],s[l+2]);const a=new ll.Mesh({numProp:3,vertProperties:new Float32Array(r.attributes.position.array),triVerts:new Uint32Array(o)});return a.merge(),new ll.Manifold(a)}function Ex(i){const e=i.getMesh();let t=new nn;return t.setAttribute("position",new zt(e.vertProperties.slice(),3)),t.setIndex(new zt(e.triVerts.slice(),1)),t=t.toNonIndexed(),t.computeVertexNormals(),t}function Rl(i,e,t,n){const r=new i,s=e/2,o=t/2;return n=Math.max(.05,Math.min(n,s-.01,o-.01)),r.moveTo(-s+n,-o),r.lineTo(s-n,-o),r.absarc(s-n,-o+n,n,-Math.PI/2,0),r.lineTo(s,o-n),r.absarc(s-n,o-n,n,0,Math.PI/2),r.lineTo(-s+n,o),r.absarc(-s+n,o-n,n,Math.PI/2,Math.PI),r.lineTo(-s,-o+n),r.absarc(-s+n,-o+n,n,Math.PI,Math.PI*1.5),r}const Ns=(i,e,t)=>Rl(Ph,i,e,t),Cn=()=>x.shape==="circle"?x.W:x.D,ar=()=>x.shape==="circle"?x.W/2:x.R,Gn=i=>Ns(x.W-2*i,Cn()-2*i,ar()-i),Xh=i=>Rl(Oo,x.W-2*i,Cn()-2*i,ar()-i);function Yh(i,e,t=0,n=0,r=0){const s=new qo(i,{depth:e,bevelEnabled:!1,curveSegments:14});return s.deleteAttribute("uv"),s.translate(n,r,t),s}const In=(i,e,t=0,n=0,r=0)=>dn(Yh(i,e,t,n,r));function zs(i,e,t,n){const r=Gn(i);return r.holes.push(Xh(e)),In(r,t,n)}function yt(i,e,t,n,r,s,o=0,a=null){const l=o>0?Ns(i,e,o):Ns(i,e,.05);return dn(Yh(l,t,s,n,r),a)}function rs(i,e,t,n=96){const r=new Tn(i,i,e,n);return r.rotateX(Math.PI/2),r.translate(0,0,t+e/2),r.deleteAttribute("uv"),dn(r)}function qh(i){const e=or.out+x.fitClr;return zs(e,e+Fh,Ai,i)}function $h(i){return pt(i,zs(or.out,x.wall+.6,or.d,-.05))}const Cl=(i,e,t)=>{const n=i[t](e);return i.delete(),e.delete(),n},Bt=(i,e)=>Cl(i,e,"add"),pt=(i,e)=>Cl(i,e,"subtract"),Fi=(i,e)=>Cl(i,e,"intersect"),wo=(i,e,t)=>dn(i,e,t),bx=new ox,$t={};function Li(i){return new Promise((e,t)=>bx.load(i,n=>{n.deleteAttribute("uv"),n.computeVertexNormals(),e(n)},void 0,t))}function ni(i,e=!0){i.computeBoundingBox();const t=i.boundingBox,n=e?(t.min.x+t.max.x)/2:t.min.x,r=e?(t.min.y+t.max.y)/2:t.min.y;return i.translate(-n,-r,-t.min.z),i}async function Tx(){const[i,e,t,n,r,s,o,a]=await Promise.all([Li(px),Li(mx),Li(gx),Li(_x),Li(vx),Li(xx),Li(yx),Li(Mx)]);ni(i,!1),i.computeBoundingBox();const l=i.boundingBox;i.translate(-(l.min.x+l.max.x)/2,-(l.min.y+l.max.y)/2,-(l.min.z+l.max.z)/2),i.rotateZ(Math.PI),$t.usb=i,$t.switch=ni(e),$t.bat=ni(t),$t.esp=ni(n,!1),$t.mod=ni(r,!1),$t.oled=ni(s,!1),$t.face=ni(o),$t.bunLid=ni(a)}function Pl(i,e,t=null){if(!x.bands)return i;for(const n of e){const r=Ns(x.W+.1,Cn()+.1,ar());r.holes.push(Xh(.6));let s=In(r,1.2,n-.6);t&&(s=pt(s,t())),i=pt(i,s)}return i}const jh=()=>x.W/2-x.wall,Bo=()=>Cn()/2-x.wall;function Zo(i,e,t,n){const r=ar()-n,s=e-ar(),o=t-ar();if(i<=s)return t-n;const a=r*r-(i-s)*(i-s);return a>0?o+Math.sqrt(a):0}function wx(){let i=In(Gn(0),Oi);i=Bt(i,zs(0,x.wall,x.f1H-Oi,Oi)),i=Bt(i,qh(x.f1H));const e=Xt(),t=e.L+e.clr,n=e.W+e.clr;if(!Pt()&&!ki()&&$r(t/2+.6,n/2+.6)){const r=Gn(x.wall);r.holes.push(Rl(Oo,t,n,2)),i=Bt(i,In(r,1.2,Oi))}return i=Pl(i,[x.f1H*.55]),i}const lr=()=>x.espRot==="u0"||x.espRot==="u90",cl=()=>x.espRot==="s90"||x.espRot==="u90",cr=()=>(lr()?it-1:it)+x.espZ;function Zh(){if(Mi()){const t=mt.h+1.6,n=(lr()?mt.w:mt.l)+Sn;return cl()?{w:t,d:n}:{w:n,d:t}}const i=x.espRot===90?mt.w:mt.l,e=x.espRot===90?mt.l:mt.w;return{w:i+Sn,d:e+Sn}}const Os=3,So=7.5;function Kh(i=!1){const e=$t.esp.clone();return e.rotateY(Math.PI),x.espRot===90&&e.rotateZ(Math.PI/2),ni(e),i&&(e.scale(1.04,1.04,1.03),e.translate(0,0,-.15)),e}function Jh(i=!1){const e=$t.esp.clone();return lr()?(e.rotateY(-Math.PI/2),x.espRot==="u90"&&e.rotateZ(Math.PI/2)):(e.rotateX(Math.PI/2),x.espRot==="s90"&&e.rotateZ(Math.PI/2)),ni(e),i&&(e.scale(cl()?1.1:1.02,cl()?1.02:1.1,1.02),e.translate(0,0,-.3)),e}const zo=()=>Math.sqrt(Math.max((x.W/2)**2-81,1));function Fs(){if(x.shape==="circle"){const e=zo()-2.5;return{x:e-.2-hn.l/2,y:0,edgeX:e}}const i=Zo(Math.abs(x.modY)+hn.w/2+.4,Cn()/2,x.W/2,x.wall);return{x:i-.2-hn.l/2,y:x.modY,edgeX:i}}function ur(){if(x.shape==="circle"){const e=zo()-2.5;return{x:e-.2-mt.l/2,y:0,edgeX:e}}const i=Zo(Math.abs(x.espY)+mt.w/2+.4,Cn()/2,x.W/2,x.wall);return{x:i-.2-mt.l/2,y:x.espY,edgeX:i}}function vr(){const i=x.oledSide,e=i==="W"?x.W/2:Cn()/2,t=i==="W"?Cn()/2:x.W/2,n=i==="N"?0:i==="W"?Math.PI/2:Math.PI,r=new xt().makeRotationZ(n),s=x.oledProud,o=x.shape==="circle"?e-Nu+s:Zo(Qn().w/2+.4,t,e,Nu)+s;return{dHalf:e,acrossHalf:t,m:r,innerFace:e-x.wall,seatY:o,proud:s,outHalf:e+s}}function Rx(){let i=In(Gn(0),it);if(i=Bt(i,zs(0,x.wall,x.f2H-it,it)),i=Bt(i,qh(x.f2H)),i=Bt(i,In(Gn(x.wall),Mn,it)),x.shape==="circle"){const s=zo(),o=Math.max(8,x.f2H-2.5);i=Bt(i,yt(2.5,18,o,s-1.25,0,0)),i=pt(i,yt(10,18,o-2,s+5,0,2))}const e=Zh(),t=!Pt()&&!Mi()&&x.espLift>0,n=()=>Pt()?yt(mt.l+Sn,mt.w+Sn,Mn+2,ur().x,ur().y,it+x.espZ,1.5):Mi()?wo(Jh(!0),new xt().makeTranslation(x.espX,x.espY,cr())):yt(e.w,e.d,Mn+2,x.espX,x.espY,it+x.espZ,1.5);if(t||(i=pt(i,n())),t){const a=it+x.espLift+x.espZ,l=x.espRot===90,c=x.W+Cn();let u=l?yt(8,c,a+2.5-it,x.espX,0,it):yt(c,8,a+2.5-it,0,x.espY,it);u=Bt(u,l?yt(13,11,a-it,x.espX,x.espY+So,it,1):yt(11,13,a-it,x.espX+So,x.espY,it,1)),u=Fi(u,In(Gn(0),a+2.5,0)),i=Bt(i,u);const h=mt.l+Sn;i=pt(i,l?yt(10,h,2.5+1,x.espX,x.espY,a):yt(h,10,2.5+1,x.espX,x.espY,a)),i=pt(i,wo(Kh(!0),new xt().makeTranslation(x.espX,x.espY,a-Os)));const p=4.3,m=1.3,v=.9,M=5;for(const g of[-1,1])i=Bt(i,l?yt(m,M,v,x.espX+g*(p+m/2),x.espY+So,a-v):yt(M,m,v,x.espX+So,x.espY+g*(p+m/2),a-v))}if(!Pt()){const s=Fs();i=pt(i,yt(hn.l+Sn+1,hn.w+Sn,Mn+2,s.x-.5,s.y,it,.4))}if(ki()){const s=Xt();i=pt(i,yt(s.T+s.clr,s.L+s.clr,Mn+2,x.batX,0,it,1.5))}if(x.oledSide!=="none"){const s=Qn(),{m:o,seatY:a,proud:l,outHalf:c}=vr(),u=a-s.t-2,h=c-u,p=Us();let m=yt(Is(),h,p-it,0,c-h/2,it,0,o);x.shape!=="circle"&&(m=Fi(m,In(Gn(-l),p,0))),i=Bt(i,m);const v=s.t+2.2+l;i=pt(i,yt(s.w+.5,v,s.hgt+Oh,0,a-v/2,4.2,0,o));const M=c-a+x.wall+2,g=new qo(Ns(s.winW,s.winH,1.5),{depth:M,bevelEnabled:!1,curveSegments:12});if(g.deleteAttribute("uv"),g.rotateX(-Math.PI/2),g.translate(0,a-.8,4.2+s.winC),i=pt(i,dn(g,o)),s.pegs){const f=s.pegs,S=4.2+s.hgt/2;for(const y of[-1,1])for(const b of[-1,1]){const D=new Tn(f.d/2,f.d/2-.2,f.len,12);D.translate(y*f.pitch/2,a-f.len/2+.05,S+b*f.pitch/2),D.deleteAttribute("uv"),i=Bt(i,dn(D,o))}}t||(i=pt(i,n()))}{const s=Pt()?ur():Fs(),o=Pt()?mt.usbZ+x.espZ:hn.usbZ,a=x.shape==="circle"?zo():Zo(Math.abs(s.y)+5.5,Cn()/2,x.W/2,0),l=Math.max(5.4,a+.4-(s.edgeX-1.5)),c=new xt().makeTranslation(a+.4-l/2,s.y,it+o).multiply(new xt().makeScale(l/9,1,3.5/3.8));i=pt(i,wo($t.usb,c))}if(!Pt()){const s=x.wireRot===90?5:14,o=x.wireRot===90?14:5;i=pt(i,yt(s,o,it+Mn+1,x.wireX,x.wireY,-.4,2.4))}if(x.bzOn&&x.bzMount==="f2"){const s=it+Mn;let o=pt(Ts(Be.d/2+Be.clr+Be.wall,Be.ring,s),Ts(Be.d/2+Be.clr,Be.ring+.4,s-.2));o=Fi(o,In(Gn(0),s+Be.ring+1,0)),i=Bt(i,o),i=pt(i,Ts(Be.d/2+Be.clr,Be.sink+.05,s-Be.sink)),i=pt(i,yt(4,6,Be.sink+Be.ring+.2,x.bzX,x.bzY-(Be.d/2+Be.clr+Be.wall/2+.4),s-Be.sink))}if(x.bzOn&&x.bzMount==="f2s"){const s=it+Mn-Be.sideSink+Be.d/2,o=new Tn(Be.d/2+Be.clr,Be.d/2+Be.clr,Be.h+.5,48);o.rotateZ(Math.PI/2),o.translate(x.bzX,x.bzY,s),o.deleteAttribute("uv"),i=pt(i,dn(o))}i=$h(i);const r=x.oledSide!=="none"&&(x.oledProud>0||x.shape==="circle")?()=>{const s=Qn(),{m:o,seatY:a,outHalf:l}=vr(),c=a-s.t-2;return yt(Is(),l-c+.4,Us(),0,(l+c)/2+.2,0,0,o)}:null;return i=Pl(i,[x.f2H*.3,x.f2H*.66],r),i}function Cx(){let i=zs(0,x.wall,x.f3H,0);i=Bt(i,In(Gn(x.wall-.1),fn,x.f3H-fn));const e=x.f3H+Jn();Jn()>.1&&(i=Bt(i,yt(21,23,Jn(),0,0,x.f3H,5)));const t=e-x.standSink-Mt.seatH,n=t-Mt.floorT;i=Bt(i,yt(Mt.cup,Mt.cup,e-n,0,0,n,3)),i=pt(i,yt(Mt.body,Mt.body,x.standSink+Mt.seatH+2,0,0,t,1));{const r=x.standSink+Mt.seatH+2,s=Mt.body/2+Mt.cornerOut-Mt.cornerSq/2;for(const o of[-1,1])for(const a of[-1,1])i=pt(i,yt(Mt.cornerSq,Mt.cornerSq,r,o*s,a*s,t))}for(const[r,s,o]of Mt.holes){const a=o>4?1:.6,l=new Tn(o/2,o/2+a,Mt.floorT+1.2,24);l.rotateX(Math.PI/2),l.translate(r,s,t-Mt.floorT/2-.05),l.deleteAttribute("uv"),i=pt(i,dn(l))}if(x.ledOn){const r=Ni(),s=fn+Jn()+1;let o;if(r.rect)o=new si(r.w+.2,r.t+.2,s);else{const a=r.d/2+.1;o=new Tn(a,a,s,24),o.rotateX(Math.PI/2)}o.translate(x.ledX,x.ledY,x.f3H-fn+s/2-.5),o.deleteAttribute("uv"),i=pt(i,dn(o))}if(x.bzOn&&x.bzMount==="f2s"){const r=it+Mn-Be.sideSink+Be.d/2;if(r+Be.d/2+Be.clr>x.f2H){const s=new Tn(Be.d/2+Be.clr,Be.d/2+Be.clr,Be.h+.6,48);s.rotateZ(Math.PI/2),s.translate(x.bzX,x.bzY,r-x.f2H),s.deleteAttribute("uv"),i=pt(i,dn(s))}}if(x.bzOn&&x.bzMount==="f3"){const r=x.f3H-fn,s=Math.min(6,r-.2);let o=pt(Ts(Be.d/2+Be.clr+Be.wall,s,r-s),Ts(Be.d/2+Be.clr,s+.2,r-s-.2));o=Fi(o,In(Gn(0),x.f3H,0)),i=Bt(i,o)}if(x.steamOn&&(i=Px(i)),i=$h(i),x.oledSide!=="none"){const{m:r,seatY:s,outHalf:o}=vr(),a=Math.min(Us()-x.f2H+.8,x.f3H+Jn()+1);if(a>0){const l=o-s+Qn().t+3;i=pt(i,yt(Is()+.8,l,a+.1,0,o+.5-l/2,-.1,0,r))}}return x.lidOn&&(i=Lx(i)),i=Pl(i,[x.f3H*.4]),i}const jn={ribW:2.8,gap:1.8,ribH:.8,grooveD:1};function Px(i){const e=jn.ribW+jn.gap,t=Math.max(x.W,Cn())/2,n=(c,u,h)=>{const m=Ni().fl/2+c,v=new Tn(m,m,u,24);return v.rotateX(Math.PI/2),v.translate(x.ledX,x.ledY,h+u/2),v.deleteAttribute("uv"),dn(v)},r=(c,u,h,p)=>{let m=null;for(let v=p;v<=t;v+=e)for(const M of v===0?[1]:[-1,1]){const g=yt(x.W+4,c,u,0,M*v,h);m=m?Bt(m,g):g}return m};let s=r(jn.ribW,jn.ribH,x.f3H,0);s=Fi(s,In(Gn(x.wall+.6),jn.ribH+.2,x.f3H-.1)),x.lidOn&&(s=Fi(s,rs(Yt.r-Yt.bandW-1,jn.ribH+.2,x.f3H-.1))),s=pt(s,yt(17,17,jn.ribH+.4,0,0,x.f3H-.2)),x.ledOn&&(s=pt(s,n(1,jn.ribH+.4,x.f3H-.2))),i=Bt(i,s);const o=x.f3H-jn.grooveD,a=jn.grooveD+.2;let l=r(jn.gap-.2,a,o,e/2);return l=Fi(l,In(Gn(x.wall+1),a+.2,o-.1)),x.lidOn&&(l=Fi(l,rs(Yt.r-Yt.bandW-1.4,a+.2,o-.1))),l=pt(l,yt(24,26,a+.4,0,0,o-.2,6)),x.ledOn&&(l=pt(l,n(1.6,a+.4,o-.2))),pt(i,l)}const Qh=(i,e,t,n)=>pt(rs(i,t,n),rs(e,t+.2,n-.1));function Ts(i,e,t){const n=new Tn(i,i,e,48);return n.rotateX(Math.PI/2),n.translate(x.bzX,x.bzY,t+e/2),n.deleteAttribute("uv"),dn(n)}function Lx(i){return pt(i,Qh(Yt.r-or.out,Yt.r-Yt.bandW-.6,or.d+.05,x.f3H-or.d))}function Dx(){const i=or.out+x.fitClr;return Qh(Yt.r-i,Yt.r-i-Fh,Ai,0)}function Ix(){let i=pt(rs(Yt.r,x.lidH+.1,Ai),rs(Yt.r-Yt.bandW,x.lidH+.4,Ai-.15));if(i=Bt(i,Dx()),i=Bt(i,wo($t.bunLid,new xt().makeTranslation(0,0,Ai+x.lidH),1e-6)),x.oledSide!=="none"){const e=Us()-(x.f2H+x.f3H-Ai);if(e>-.5){const{m:t,seatY:n,outHalf:r}=vr(),s=r-n+Qn().t+3;i=pt(i,yt(Is()+.8,s,e+.9,0,r+.5-s/2,-.1,0,t))}}return i}let ys=!0,Ms=!1;function vn(i,e,t){const n=new bn(i,e);return t&&n.applyMatrix4(t),n.visible=ys,n.userData.ghost=!0,n}const ti=(i,e,t,n=0)=>{const r=new xt().makeRotationZ(n);return r.setPosition(i,e,t),r};function Ux(){if(!Pt()){const t=Xt();if(ki()){const n=new si(t.T,t.L,t.W);n.translate(0,0,t.W/2),At[1].add(vn(n,_n.bat,ti(x.batX,0,it)))}else if(x.batType==="520")At[0].add(vn($t.bat,_n.bat,ti(0,0,Oi)));else{const n=new si(t.L,t.W,t.T);n.translate(0,0,t.T/2),At[0].add(vn(n,_n.bat,ti(0,0,Oi)))}}if(Pt()){const t=ur(),n=$t.esp.clone();n.rotateZ(Math.PI),n.translate(mt.l/2,mt.w/2,0),At[1].add(vn(n,_n.esp,ti(t.x,t.y,it+x.espZ)))}else if(Mi())At[1].add(vn(Jh(),_n.esp,ti(x.espX,x.espY,cr())));else if(x.espLift>0)At[1].add(vn(Kh(),_n.esp,ti(x.espX,x.espY,it+x.espLift+x.espZ-Os)));else{const t=x.espRot===90?Math.PI/2:0,n=$t.esp.clone();n.translate(-24/2,-18/2,0),At[1].add(vn(n,_n.esp,ti(x.espX,x.espY,it+x.espZ,t)))}if(!Pt()){const t=$t.mod.clone();t.rotateZ(Math.PI),t.translate(hn.l/2,hn.w/2,0);const n=Fs();At[1].add(vn(t,_n.mod,ti(n.x,n.y,it)))}if(x.oledSide!=="none"){const t=Qn(),{m:n,seatY:r}=vr();let s;x.oledType==="096"?(s=new si(t.w,t.t,t.hgt),s.translate(0,r-t.t/2-.15,4.2+t.hgt/2)):(s=$t.oled.clone(),s.translate(-t.w/2,r-t.t-.15,4.2)),s.applyMatrix4(n),At[1].add(vn(s,_n.oled))}const i=x.f3H+Jn()-x.standSink-Mt.seatH,e=$t.switch.clone();if(e.rotateZ(Math.PI),At[2].add(vn(e,_n.stand,ti(0,0,i-Mt.pinLen))),At[2].add(vn($t.face,_n.face,ti(0,0,x.f3H+Jn()))),x.ledOn){const t=Ni(),n=x.f3H-fn;if(t.rect){const r=()=>new si(t.w/2,t.t,t.bodyH),s=r();s.translate(x.ledX-t.w/4,x.ledY,n+t.bodyH/2);const o=r();o.translate(x.ledX+t.w/4,x.ledY,n+t.bodyH/2);for(const a of[s,o])a.deleteAttribute("uv");At[2].add(vn(s,_n.ledR)),At[2].add(vn(o,_n.ledG))}else{const r=new Tn(t.d/2,t.d/2,t.cyl,20);r.rotateX(Math.PI/2),r.translate(x.ledX,x.ledY,n+t.cyl/2);const s=new $o(t.domeR,20,12);s.translate(x.ledX,x.ledY,n+t.cyl);const o=new Tn(t.fl/2,t.fl/2,1,20);o.rotateX(Math.PI/2),o.translate(x.ledX,x.ledY,n-.5);for(const a of[r,s,o])a.deleteAttribute("uv");At[2].add(vn(Pu([r,s,o]),_n.led))}}if(x.bzOn){const t=x.bzMount==="f3",n=x.bzMount==="f2s",r=new Tn(Be.d/2,Be.d/2,Be.h,28),s=new Tn(1.5,1.5,.5,16);let o;n?(o=it+Mn-Be.sideSink+Be.d/2,r.rotateZ(Math.PI/2),s.rotateZ(Math.PI/2),s.translate(-8.3/2-.3,0,0)):(o=t?x.f3H-fn-Be.h/2:it+Mn-Be.sink+Be.h/2,r.rotateX(Math.PI/2),s.rotateX(Math.PI/2),s.translate(0,0,t?-8.3/2-.2:Be.h/2+.2)),r.translate(x.bzX,x.bzY,o),s.translate(x.bzX,x.bzY,o);for(const a of[r,s])a.deleteAttribute("uv");At[t?2:1].add(vn(Pu([r,s]),_n.bz))}}const zu=document.getElementById("status");function Ll(){zu.classList.add("on"),setTimeout(()=>{const i=[];try{const e=performance.now(),t=[wx,Rx,Cx,Ix],n=["1층","2층","3층","4층"];for(let r=0;r<4;r++){if(At[r].clear(),r===3&&!x.lidOn){ri[3]=null,To[3]=null;continue}try{const s=t[r](),o=Ex(s);s.delete(),ri[r]=o;const a=new bn(o,Ms?Wh:Vh);To[r]=a,At[r].add(a)}catch(s){ri[r]=null,To[r]=null,i.push(`⚠ ${n[r]} 생성 오류: ${s.message||s}`),console.error(n[r],s)}}Ux(),Dl(),Hx(performance.now()-e,Nx())}catch(e){i.push("⚠ 생성 오류: "+(e.message||e)),console.error(e)}if(i.length){const e=document.getElementById("warnings");e.textContent=i.join(`
`)+(e.textContent?`
`+e.textContent:"")}zu.classList.remove("on")},10)}function Nx(){try{const i=c=>typeof c.volume=="function"?c.volume():c.getProperties().volume,e=[],t=c=>(e.push(c),c),n=t(dn(ri[0])),r=t(t(dn(ri[1])).translate([0,0,x.f1H])),s=t(t(dn(ri[2])).translate([0,0,x.f1H+x.f2H])),o=i(t(n.intersect(r))),a=i(t(r.intersect(s)));let l=0;if(ri[3]){const c=t(t(dn(ri[3],null,1e-6)).translate([0,0,x.f1H+x.f2H+x.f3H-Ai]));l=i(t(s.intersect(c)))}return e.forEach(c=>c.delete()),{i12:o,i23:a,i34:l,ok:o<.5&&a<.5&&l<.5}}catch{return null}}function Dl(){const e=26*+document.getElementById("explode").value;At[0].position.z=0,At[1].position.z=x.f1H+e,At[2].position.z=x.f1H+x.f2H+e*2,At[3].position.z=x.f1H+x.f2H+x.f3H-Ai+e*3,Il()}document.getElementById("explode").addEventListener("input",()=>{document.getElementById("explodev").textContent=(+document.getElementById("explode").value).toFixed(2),Dl()});let ws=!0;const hr=new yi;Wi.add(hr);const rn={plus:14040111,minus:3355443,sda:3055191,scl:14721338,gpio:9323693,led:2850281,led2:2074746,bz:12736668},xn={"5V":[-9,8],GND:[-6.5,8],"3V3":[-4,8],4:[-1.5,8],3:[1,8],2:[3.5,8],1:[6,8],0:[8.5,8],5:[-9,-8],6:[-6.5,-8],7:[-4,-8],8:[-1.5,-8],9:[1,-8],10:[3.5,-8],20:[6,-8],21:[8.5,-8]},Ox=[0,1,2,3,4,5,6,7,8,9,10,20,21],ul={gpio:{key:"swGpio",name:"스위치"},sda:{key:"sdaGpio",name:"OLED SDA"},scl:{key:"sclGpio",name:"OLED SCL"},led:{key:"ledGpio",name:"LED"},led2:{key:"led2Gpio",name:"LED 초록"},bz:{key:"bzGpio",name:"부저"}};function Fx(i,e,t){const n=document.createElement("canvas");n.width=160,n.height=44;const r=n.getContext("2d");r.fillStyle="rgba(255,253,248,0.9)",r.fillRect(0,0,160,44),r.strokeStyle="#c9bfa5",r.lineWidth=3,r.strokeRect(0,0,160,44),r.fillStyle="#"+e.toString(16).padStart(6,"0"),r.font="bold 26px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(i,80,23);const s=new mv(new Mh({map:new vv(n),depthTest:!1,transparent:!0}));return s.scale.set(7,1.9,1),s.position.copy(t).add(new F(0,0,2.2)),hr.add(s),s}function sn(i,e,t,n,r){const s=[],o=i.map(c=>new F(...c)),a=new Eh(o,!1,"catmullrom",.3),l=new bn(new Fo(a,40,.35,8),new Gi({color:e,roughness:.5}));if(hr.add(l),s.push(l),r){const c=new bn(new Fo(a,24,2,6),new ml({transparent:!0,opacity:0,depthWrite:!1}));hr.add(c),s.push(c)}for(const[c,u]of[[o[0],t],[o[o.length-1],n]]){if(!u)continue;const h=new bn(new $o(.6,10,8),new Gi({color:e}));h.position.copy(c),hr.add(h),s.push(h),s.push(Fx(u,e,c))}r&&s.forEach(c=>{c.userData.tag=r})}function Il(){if(hr.clear(),!!ws)try{const i=At[0].position.z,e=At[1].position.z,t=Pt()?null:Fs(),n=t?t.x-hn.l/2:0,r=e+it+2,s=e+it+Mn+1.5;if(t)for(const[v,M,g,f]of[[1,rn.plus,"배터리 +","B+"],[-1,rn.minus,"배터리 −","B−"]])if(ki())sn([[x.batX+v*2,v*4,e+it+Xt().W],[n+1.2,t.y+v*4.5,r+4],[n+1.2,t.y+v*4.5,r]],M,g,f);else{const S=i+Oi+Xt().T,y=(x.wireX>=0?1:-1)*(Xt().L/2-4);sn([[y,v*5,S],[x.wireX+v*1.2,x.wireY,e-2],[x.wireX+v*1.2,x.wireY,s],[n+1.2,t.y+v*4.5,r+2],[n+1.2,t.y+v*4.5,r]],M,g,f)}const o=(v,M)=>{if(Pt()){const y=ur();return[y.x-v,y.y-M,e+it+x.espZ+mt.h]}if(x.espRot==="s0")return[x.espX+v,x.espY,e+cr()+mt.w/2+M];if(x.espRot==="s90")return[x.espX,x.espY+v,e+cr()+mt.w/2+M];if(lr()){const y=e+cr()+mt.l/2+v;return x.espRot==="u90"?[x.espX,x.espY+M,y]:[x.espX+M,x.espY,y]}const[g,f]=x.espRot===90?[-M,v]:[v,M],S=x.espLift>0?x.espLift-Os:0;return[x.espX+g,x.espY+f,e+it+x.espZ+S+mt.h]},a=o(...xn["5V"]),l=o(...xn.GND),c=o(...xn["3V3"]),u=o(...xn[x.sdaGpio]||xn[8]),h=o(...xn[x.sclGpio]||xn[9]),p=6,m=(v,M)=>[(v[0]+M[0])/2,(v[1]+M[1])/2,Math.max(v[2],M[2])+p];if(t){const v=[n+3.5,t.y+6,r],M=[n+3.5,t.y-6,r];sn([v,m(v,a),a],rn.plus,"OUT+","5V"),sn([M,m(M,l),l],rn.minus,"OUT−","GND")}if(x.oledSide!=="none"){const v=Qn(),{m:M,seatY:g}=vr(),f=4.2+(x.oledType==="096"?v.hgt-2.5:11.5),S=G=>{const E=-3.81+G*2.54,C=new F(E,g-v.t-.6,0).applyMatrix4(M);return[C.x,C.y,e+f]},y=S(0),b=S(1),D=S(2),L=S(3),P=o(-6.5,8);sn([c,m(c,b),b],rn.plus,"3V3","VCC"),sn([P,m(P,y),y],rn.minus,null,"GND"),sn([u,m(u,L),L],rn.sda,"G"+x.sdaGpio,"SDA","sda"),sn([h,m(h,D),D],rn.scl,"G"+x.sclGpio,"SCL","scl")}{const M=At[2].position.z+x.f3H+Jn()-x.standSink-Mt.seatH,g=M-Mt.floorT-2,f=o(...xn[x.swGpio]||xn[4]),S=(D,L)=>[(D[0]+L[0])/2,(D[1]+L[1])/2,(g+L[2])/2],y=[3.8,-2.7],b=[-2.7,-5.2];sn([[...y,M+1],[...y,g],S(y,f),f],rn.gpio,"스위치","G"+x.swGpio,"gpio"),sn([[...b,M+1],[...b,g],S(b,l),l],rn.minus,null,null)}if(x.ledOn){const v=Ni(),g=At[2].position.z+x.f3H-fn-1.2,f=o(...xn[x.ledGpio]||xn[3]),S=(y,b)=>[(y[0]+b[0])/2,(y[1]+b[1])/2,(y[2]+b[2])/2];if(v.rect){const y=o(...xn[x.led2Gpio]||xn[5]),b=[x.ledX-v.pitch,x.ledY,g],D=[x.ledX,x.ledY,g],L=[x.ledX+v.pitch,x.ledY,g];sn([b,S(b,f),f],rn.led,"LED R","G"+x.ledGpio,"led"),sn([L,S(L,y),y],rn.led2,"LED G","G"+x.led2Gpio,"led2"),sn([D,S(D,l),l],rn.minus,"LED−",null)}else{const y=[x.ledX-1.3,x.ledY,g],b=[x.ledX+1.3,x.ledY,g];sn([y,S(y,f),f],rn.led,"LED+","G"+x.ledGpio,"led"),sn([b,S(b,l),l],rn.minus,"LED−",null)}}if(x.bzOn){const v=o(...xn[x.bzGpio]||xn[2]),M=(S,y)=>[(S[0]+y[0])/2,(S[1]+y[1])/2,(S[2]+y[2])/2+3];let g,f;if(x.bzMount==="f2s"){const S=e+it+Mn-Be.sideSink+Be.d/2,y=x.bzX+Be.h/2+1;g=[y,x.bzY,S+3.25],f=[y,x.bzY,S-3.25]}else{const S=x.bzMount==="f3"?At[2].position.z+x.f3H-fn-Be.h-1:e+it+Mn-Be.sink+1;g=[x.bzX-3.25,x.bzY,S],f=[x.bzX+3.25,x.bzY,S]}sn([g,M(g,v),v],rn.bz,"부저+","G"+x.bzGpio,"bz"),sn([f,M(f,l),l],rn.minus,"부저−",null)}}catch{}}document.getElementById("wiresBtn").addEventListener("click",i=>{ws=!ws,i.target.textContent="배선 표시: "+(ws?"켬":"끔"),Il()});const kn=document.createElement("div");kn.style.cssText="position:fixed; display:none; z-index:50; background:#fffdf8; border:1px solid #ddd2b5;border-radius:10px; box-shadow:0 4px 14px rgba(77,58,20,.18); padding:8px; width:186px;";kn.innerHTML='<div id="gpioTitle" style="font-size:11px; font-weight:600; color:#6b5d43; margin:2px 4px 6px;"></div><div id="gpioGrid" style="display:grid; grid-template-columns:repeat(4,1fr); gap:4px;"></div>';document.body.appendChild(kn);const Hu=kn.querySelector("#gpioGrid"),Bx=kn.querySelector("#gpioTitle");function zx(i,e,t){const n=ul[i];if(!n)return;Bx.textContent=n.name+" GPIO 선택";const r=Object.values(ul).filter(s=>s.key!==n.key).map(s=>+x[s.key]);Hu.innerHTML="";for(const s of Ox){const o=document.createElement("button");o.textContent="G"+s;const a=+x[n.key]===s,l=r.includes(s);o.disabled=l,o.style.cssText="padding:5px 0; font-size:11px; border-radius:6px;"+(a?"background:#e9b95f;color:#4d3a14;":l?"background:#efe9dc;color:#c3b89a;":"background:#f1ead7;color:#6b5d43;"),l||o.addEventListener("click",()=>{x[n.key]=s,Al(),Il(),kn.style.display="none"}),Hu.appendChild(o)}kn.style.left=Math.min(e+6,window.innerWidth-200)+"px",kn.style.top=Math.min(t+6,window.innerHeight-150)+"px",kn.style.display="block"}const Gu=new nx;gr.domElement.addEventListener("contextmenu",i=>{if(!ws)return;const e=gr.domElement.getBoundingClientRect(),t=new Se((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1);Gu.setFromCamera(t,_r);const n=Gu.intersectObjects(hr.children,!0).find(r=>ul[r.object.userData.tag]);n&&(i.preventDefault(),zx(n.object.userData.tag,i.clientX,i.clientY))});window.addEventListener("pointerdown",i=>{kn.contains(i.target)||(kn.style.display="none")});window.addEventListener("keydown",i=>{i.key==="Escape"&&(kn.style.display="none")});let ku=null;document.getElementById("animBtn").addEventListener("click",()=>{cancelAnimationFrame(ku);const i=document.getElementById("explode"),e=+i.value>.05?+i.value:1,t=+i.value>.05?0:1,n=performance.now(),r=1100;(function s(o){const a=Math.min((o-n)/r,1),l=a<.5?2*a*a:1-Math.pow(-2*a+2,2)/2;i.value=e+(t-e)*l,Dl(),a<1&&(ku=requestAnimationFrame(s))})(n)});document.getElementById("ghostBtn").addEventListener("click",i=>{ys=!ys,i.target.textContent="부품 표시: "+(ys?"켬":"끔"),At.forEach(e=>e.traverse(t=>{t.userData.ghost&&(t.visible=ys)}))});document.getElementById("xrayBtn").addEventListener("click",i=>{Ms=!Ms,i.target.textContent="케이스 반투명: "+(Ms?"켬":"끔"),To.forEach(e=>{e&&(e.material=Ms?Wh:Vh)})});function $r(i,e){const t=jh(),n=Bo(),r=Math.max(ar()-x.wall,.05);if(i>t||e>n)return!1;const s=i-(t-r),o=e-(n-r);return!(s>0&&o>0&&s*s+o*o>r*r)}function on(i,e){return Math.abs(i.x-e.x)*2<i.w+e.w&&Math.abs(i.y-e.y)*2<i.d+e.d}function Hx(i,e){const t=x.f1H+x.f2H+x.f3H+Jn(),n=e?e.ok?" · 조립 간섭 없음 ✓":` · 조립 간섭 ${e.i12.toFixed(1)}/${e.i23.toFixed(1)}/${(e.i34||0).toFixed(1)}mm³ ⚠`:"",r=x.shape==="circle"?`Ø${x.W}`:`${x.W} × ${x.D}`,s=x.lidOn?` · 4층 Ø${Yt.r*2} × ${(Ai+x.lidH+Yt.h).toFixed(1)}mm`:"";document.getElementById("dims").textContent=`전체 ${r} × ${t.toFixed(1)}mm (보스 포함)${s} · CSG ${i.toFixed(0)}ms${n}`;const o=[];e&&!e.ok&&o.push("⚠ 조립 시 층끼리 겹칩니다 — 부품 배치나 층 높이를 조정하세요"),!Pt()&&!ki()&&!$r(Xt().L/2+.4,Xt().W/2+.4)&&o.push(`⚠ 배터리(${Xt().L}×${Xt().W})가 1층에 안 들어갑니다 — W/D를 키우거나 모서리를 줄이세요`);const a=Zh(),l=Pt()?{x:ur().x,y:ur().y,w:mt.l+Sn,d:mt.w+Sn}:{x:x.espX,y:x.espY,w:a.w,d:a.d},c=Fs(),u=Pt()?null:{x:c.x,y:c.y,w:hn.l+Sn,d:hn.w+Sn},h=ki()?{x:x.batX,y:0,w:Xt().T+Xt().clr,d:Xt().L+Xt().clr}:null;h&&($r(Math.abs(x.batX)+h.w/2,h.d/2)||o.push(`⚠ 세운 배터리(${Xt().T}×${Xt().L})가 2층에 안 들어갑니다 — 세로 D를 키우거나 배터리 X를 옮기세요`),on(h,l)&&o.push("⚠ 세운 배터리가 ESP32와 겹칩니다"),on(h,u)&&o.push("⚠ 세운 배터리가 충전모듈과 겹칩니다"),it+Xt().W>x.f2H+x.f3H-fn-.3&&o.push(`⚠ 세운 배터리(높이 ${Xt().W})가 3층 상판에 닿습니다 — 2·3층 높이를 키우세요`)),Pt()?(x.shape!=="circle"&&Math.abs(x.espY)+(mt.w+Sn)/2>Bo()-1&&o.push("⚠ ESP32가 위/아래 벽과 겹칩니다 — ESP32 Y를 중앙 쪽으로 옮기세요"),l.x-l.w/2<-jh()+.5&&o.push(`⚠ ESP32(길이 ${mt.l})가 가로로 안 들어갑니다 — W를 키우세요`)):$r(Math.abs(x.espX)+a.w/2,Math.abs(x.espY)+a.d/2)||o.push("⚠ ESP32가 벽과 겹칩니다"),Mi()&&cr()+(lr()?mt.l:mt.w)>x.f2H+x.f3H-fn-.3&&o.push(`⚠ 세운 ESP32(높이 ${lr()?mt.l:mt.w})가 3층 상판에 닿습니다 — 2·3층 높이를 키우세요`),!Pt()&&x.shape!=="circle"&&Math.abs(x.modY)+(hn.w+Sn)/2>Bo()-1&&o.push("⚠ 충전모듈이 위/아래 벽과 겹칩니다"),!Pt()&&x.shape!=="circle"&&c.edgeX<hn.l-2&&o.push("⚠ 충전모듈이 곡면 벽과 맞지 않습니다 — Y를 중앙 쪽으로 옮기세요");const p=!Pt()&&!Mi()&&x.espLift>0;if(u&&on(l,u)&&(p?x.espLift<hn.h+.8&&o.push(`⚠ ESP32 띄움(${x.espLift})이 충전모듈 높이(${hn.h})보다 낮습니다 — ${(hn.h+1).toFixed(0)} 이상으로 올리세요`):o.push("⚠ ESP32와 충전모듈 포켓이 겹칩니다 — 띄움(2.5층)을 올리면 공존 가능")),p&&it+x.espLift+x.espZ-Os+mt.h>x.f2H+x.f3H-fn-.3&&o.push("⚠ 띄운 ESP32가 3층 상판에 닿습니다 — 띄움을 줄이거나 층 높이를 키우세요"),p){const g=x.espRot===90?{x:x.espX,y:0,w:8,d:Cn()}:{x:0,y:x.espY,w:x.W,d:8};u&&on(g,u)&&o.push("⚠ 2.5층 받침 선이 충전모듈 자리를 가로지릅니다 — ESP32 위치를 옮기세요"),h&&on(g,h)&&o.push("⚠ 2.5층 받침 선이 세운 배터리 자리를 가로지릅니다 — 위치를 조정하세요")}if(x.oledSide!=="none"){const g=vr(),f=g.dHalf-g.seatY+Qn().t+3,S=Is()+1.2,y=x.oledSide==="W"?{x:-(x.W/2-f/2),y:0,w:f,d:S}:{x:0,y:(x.oledSide==="N"?1:-1)*(Cn()/2-f/2),w:S,d:f};on(l,y)&&o.push("⚠ ESP32가 OLED 타워와 겹칩니다"),u&&on(u,y)&&o.push("⚠ 충전모듈이 OLED 타워와 겹칩니다"),x.ledOn&&on({x:x.ledX,y:x.ledY,w:Ni().fl,d:Ni().fl},y)&&o.push("⚠ LED가 OLED 타워(노치)와 겹칩니다"),h&&on(h,y)&&o.push("⚠ 650 배터리가 OLED 타워와 겹칩니다"),Us()-x.f2H>x.f3H-fn-.3&&o.push("⚠ OLED 타워가 3층 상판을 뚫습니다 — 2층 또는 3층 높이를 키우세요"),g.seatY<Qn().t+4&&o.push("⚠ OLED가 벽 폭/곡률에 비해 큽니다 — 지름(W)을 키우세요")}!Pt()&&!ki()&&x.f1H<Oi+Xt().T+1.2&&o.push("⚠ 1층이 너무 낮습니다 (배터리 + 배선 공간 부족)");const m=x.f3H+Jn()-x.standSink-Mt.seatH-Mt.floorT;if(m<.5&&o.push("⚠ 스위치 홀더가 뚜껑 아래로 뚫고 나갑니다 — 매립을 줄이거나 3층/보스를 키우세요"),x.lidOn&&Yt.r*2>Math.min(x.W,Cn())+.1&&o.push(`⚠ 4층(Ø${Yt.r*2})이 케이스 외곽보다 넓어 밖으로 걸칩니다 — W를 41 이상으로`),x.ledOn){const g=Ni().fl/2+.1;$r(Math.abs(x.ledX)+g,Math.abs(x.ledY)+g)||o.push("⚠ LED가 3층 벽/외곽과 겹칩니다 — X/Y를 안쪽으로 옮기세요");const f=(x.bossOn?10.5:Mt.cup/2)+g,S=(x.bossOn?11.5:Mt.cup/2)+g;Math.abs(x.ledX)<f&&Math.abs(x.ledY)<S&&o.push("⚠ LED가 스위치 보스/홀더와 겹칩니다 — 밖으로 옮기세요"),x.lidOn&&Math.hypot(x.ledX,x.ledY)+g>Yt.r-Yt.bandW-.6&&o.push("⚠ LED가 4층 결합 홈/밴드와 겹칩니다 — 중심 쪽으로 옮기세요")}x.lidOn&&x.lidH+Yt.innerH<Fu()+.3&&o.push(`⚠ 4층이 딤섬 캐릭터에 닿습니다 — 밴드 높이를 ${Math.max(0,Fu()+.5-Yt.innerH).toFixed(1)} 이상으로 (또는 캐릭터 없이 사용)`);const v={x:0,y:0,w:Mt.cup,d:Mt.cup};h&&on(h,v)&&it+Xt().W>x.f2H+m-.3&&o.push("⚠ 세운 배터리가 스위치 홀더 컵에 부딪힙니다 — 배터리 X를 옮기거나 층 높이를 키우세요");const M=Mi()?cr()+(lr()?mt.l:mt.w):it+x.espZ+(x.espLift>0?x.espLift-Os:0)+mt.h;if((Mi()||p)&&on(l,v)&&M>x.f2H+m-.3&&o.push("⚠ ESP32가 스위치 홀더 컵에 부딪힙니다 — 위치를 옮기거나 층 높이를 키우세요"),x.bzOn){const g=x.bzMount==="f2s",f=g?(Be.h+.5)/2:Be.d/2+Be.clr,S=Be.d/2+Be.clr,y={x:x.bzX,y:x.bzY,w:f*2,d:S*2};if((x.shape==="circle"?(g?Math.hypot(Math.abs(x.bzX)+f,Math.abs(x.bzY)+S):Math.hypot(x.bzX,x.bzY)+f)>x.W/2-x.wall+.1:!$r(Math.abs(x.bzX)+f,Math.abs(x.bzY)+S))&&o.push("⚠ 부저가 벽과 겹칩니다 — 안쪽으로 옮기세요"),x.bzMount==="f3")on(y,v)&&o.push("⚠ 부저가 스위치 홀더 컵과 겹칩니다 — 자리가 없으면 부저 장착을 2층 바닥으로 바꾸세요"),x.ledOn&&Math.hypot(x.ledX-x.bzX,x.ledY-x.bzY)<Be.d/2+Be.clr+Ni().fl/2+.3&&o.push("⚠ 부저가 LED와 겹칩니다"),x.f3H-fn<Be.h&&o.push(`⚠ 부저(8.3)가 3층보다 두꺼워 아래로 ${(Be.h-x.f3H+fn).toFixed(1)}mm 튀어나옵니다 — 2층 부품과 겹치지 않는지 확인하세요`);else{on(y,l)&&o.push("⚠ 부저가 ESP32와 겹칩니다"),u&&on(y,u)&&o.push("⚠ 부저가 충전모듈과 겹칩니다");const D=it+Mn+(g?Be.d-Be.sideSink:Be.h-Be.sink);g?(D>x.f2H+x.f3H-.3&&o.push("⚠ 눕힌 부저가 3층 상판을 뚫고 나옵니다 — 층 높이를 키우세요"),D>x.f2H+m&&on(y,{x:0,y:0,w:Mt.body+2,d:Mt.body+2})?o.push("⚠ 눕힌 부저 파임이 스위치 포켓까지 침범합니다 — X/Y를 옮기세요"):D>x.f2H+m&&on(y,v)&&o.push("⚠ 눕힌 부저 자리만큼 3층 홀더 컵이 파입니다 (컵 벽 얇아짐 주의)")):on(y,v)&&D>x.f2H+m-.2?o.push("⚠ 부저가 3층 스위치 홀더 컵 아래에 닿습니다 — X/Y를 옮기세요"):D>x.f2H+x.f3H-fn-.3&&o.push("⚠ 부저가 3층 상판에 닿습니다 — 층 높이를 키우세요")}}document.getElementById("warnings").textContent=o.join(`
`)}const Gx=new ax;function Ko(i,e){if(!ri[i])return;let t=ri[i].clone();i===2&&document.getElementById("flip3").checked&&(t.rotateX(Math.PI),t.computeBoundingBox(),t.translate(0,0,-t.boundingBox.min.z));const n=new bn(t),r=Gx.parse(n,{binary:!0}),s=new Blob([r],{type:"application/octet-stream"}),o=document.createElement("a");o.href=URL.createObjectURL(s),o.download=e,document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(o.href),2e3)}document.getElementById("ex1").addEventListener("click",()=>Ko(0,"floor1_battery.stl"));document.getElementById("ex2").addEventListener("click",()=>Ko(1,"floor2_esp32.stl"));document.getElementById("ex3").addEventListener("click",()=>Ko(2,"floor3_switch_lid.stl"));document.getElementById("ex4").addEventListener("click",()=>Ko(3,"floor4_bun_lid.stl"));Promise.all([Tx(),fx({locateFile:()=>dx}).then(i=>{i.setup(),ll=i})]).then(Ll).catch(i=>{document.getElementById("warnings").textContent="⚠ 초기화 실패: "+i+"\n`npm run dev` 로 실행했는지 확인하세요.",console.error(i)});
