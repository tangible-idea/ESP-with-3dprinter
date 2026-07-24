(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl="160",Nr={ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Df=0,mc=1,If=2,uh=1,Uf=2,wi=3,Ji=0,Un=1,Ti=2,$i=0,ls=1,gc=2,_c=3,vc=4,Of=5,ur=100,Nf=101,Bf=102,xc=103,yc=104,Ff=200,zf=201,Hf=202,Gf=203,al=204,ll=205,kf=206,Vf=207,Wf=208,Xf=209,Yf=210,$f=211,qf=212,jf=213,Zf=214,Kf=0,Jf=1,Qf=2,zo=3,ep=4,tp=5,np=6,ip=7,hh=0,rp=1,sp=2,qi=0,op=1,ap=2,lp=3,cp=4,up=5,hp=6,dh=300,us=301,hs=302,cl=303,ul=304,ea=306,hl=1e3,ii=1001,dl=1002,Ln=1003,Ec=1004,Ma=1005,Xn=1006,dp=1007,Hs=1008,ji=1009,fp=1010,pp=1011,Rl=1012,fh=1013,ki=1014,Vi=1015,Gs=1016,ph=1017,mh=1018,pr=1020,mp=1021,ri=1023,gp=1024,_p=1025,mr=1026,ds=1027,vp=1028,gh=1029,xp=1030,_h=1031,vh=1033,Aa=33776,ba=33777,wa=33778,Ta=33779,Sc=35840,Mc=35841,Ac=35842,bc=35843,xh=36196,wc=37492,Tc=37496,Cc=37808,Rc=37809,Lc=37810,Pc=37811,Dc=37812,Ic=37813,Uc=37814,Oc=37815,Nc=37816,Bc=37817,Fc=37818,zc=37819,Hc=37820,Gc=37821,Ca=36492,kc=36494,Vc=36495,yp=36283,Wc=36284,Xc=36285,Yc=36286,yh=3e3,gr=3001,Ep=3200,Sp=3201,Eh=0,Mp=1,qn="",mn="srgb",Ii="srgb-linear",Ll="display-p3",ta="display-p3-linear",Ho="linear",Rt="srgb",Go="rec709",ko="p3",Fr=7680,$c=519,Ap=512,bp=513,wp=514,Sh=515,Tp=516,Cp=517,Rp=518,Lp=519,fl=35044,qc="300 es",pl=1035,Ri=2e3,Vo=2001;class Rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],No=Math.PI/180,ml=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function gn(i,e,t){return Math.max(e,Math.min(t,i))}function Pp(i,e){return(i%e+e)%e}function Ra(i,e,t){return(1-t)*i+t*e}function jc(i){return(i&i-1)===0&&i!==0}function gl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Dp={DEG2RAD:No};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,n,r,s,o,a,l,c){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],f=n[5],x=n[8],E=r[0],_=r[3],d=r[6],M=r[1],y=r[4],b=r[7],D=r[2],P=r[5],L=r[8];return s[0]=o*E+a*M+l*D,s[3]=o*_+a*y+l*P,s[6]=o*d+a*b+l*L,s[1]=c*E+u*M+h*D,s[4]=c*_+u*y+h*P,s[7]=c*d+u*b+h*L,s[2]=p*E+f*M+x*D,s[5]=p*_+f*y+x*P,s[8]=p*d+f*b+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,p=a*l-u*s,f=c*s-o*l,x=t*h+n*p+r*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=h*E,e[1]=(r*c-u*n)*E,e[2]=(a*n-r*o)*E,e[3]=p*E,e[4]=(u*t-r*l)*E,e[5]=(r*s-a*t)*E,e[6]=f*E,e[7]=(n*l-c*t)*E,e[8]=(o*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(La.makeScale(e,t)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,t){return this.premultiply(La.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const La=new gt;function Mh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ip(){const i=Wo("canvas");return i.style.display="block",i}const Zc={};function Is(i){i in Zc||(Zc[i]=!0,console.warn(i))}const Kc=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jc=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ro={[Ii]:{transfer:Ho,primaries:Go,toReference:i=>i,fromReference:i=>i},[mn]:{transfer:Rt,primaries:Go,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ta]:{transfer:Ho,primaries:ko,toReference:i=>i.applyMatrix3(Jc),fromReference:i=>i.applyMatrix3(Kc)},[Ll]:{transfer:Rt,primaries:ko,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Jc),fromReference:i=>i.applyMatrix3(Kc).convertLinearToSRGB()}},Up=new Set([Ii,ta]),bt={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Up.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ro[e].toReference,r=ro[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ro[i].primaries},getTransfer:function(i){return i===qn?Ho:ro[i].transfer}};function cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zr;class Ah{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zr===void 0&&(zr=Wo("canvas")),zr.width=e.width,zr.height=e.height;const n=zr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cs(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cs(t[n]/255)*255):t[n]=cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Op=0;class bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Da(r[o].image)):s.push(Da(r[o]))}else s=Da(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ah.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Np=0;class On extends Rr{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,n=ii,r=ii,s=Xn,o=Hs,a=ri,l=ji,c=On.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Pi(),this.name="",this.source=new bh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===gr?mn:qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hl:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hl:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mn?gr:yh}set encoding(e){Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===gr?mn:qn}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=dh;On.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,t=0,n=0,r=1){cn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],f=l[5],x=l[9],E=l[2],_=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-E)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+E)<.1&&Math.abs(x+_)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(f+1)/2,D=(d+1)/2,P=(u+p)/4,L=(h+E)/4,G=(x+_)/4;return y>b&&y>D?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=P/n,s=L/n):b>D?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=P/r,s=G/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=L/s,r=G/s),this.set(n,r,s,t),this}let M=Math.sqrt((_-x)*(_-x)+(h-E)*(h-E)+(p-u)*(p-u));return Math.abs(M)<.001&&(M=1),this.x=(_-x)/M,this.y=(h-E)/M,this.z=(p-u)/M,this.w=Math.acos((c+f+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bp extends Rr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===gr?mn:qn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new On(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends Bp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wh extends On{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fp extends On{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const p=s[o+0],f=s[o+1],x=s[o+2],E=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=f,e[t+2]=x,e[t+3]=E;return}if(h!==E||l!==p||c!==f||u!==x){let _=1-a;const d=l*p+c*f+u*x+h*E,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const D=Math.sqrt(y),P=Math.atan2(D,d*M);_=Math.sin(_*P)/D,a=Math.sin(a*P)/D}const b=a*M;if(l=l*_+p*b,c=c*_+f*b,u=u*_+x*b,h=h*_+E*b,_===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],p=s[o+1],f=s[o+2],x=s[o+3];return e[t]=a*x+u*h+l*f-c*p,e[t+1]=l*x+u*p+c*h-a*f,e[t+2]=c*x+u*f+a*p-l*h,e[t+3]=u*x-a*h-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),p=l(n/2),f=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=p*u*h+c*f*x,this._y=c*f*h-p*u*x,this._z=c*u*x+p*f*h,this._w=c*u*h-p*f*x;break;case"YXZ":this._x=p*u*h+c*f*x,this._y=c*f*h-p*u*x,this._z=c*u*x-p*f*h,this._w=c*u*h+p*f*x;break;case"ZXY":this._x=p*u*h-c*f*x,this._y=c*f*h+p*u*x,this._z=c*u*x+p*f*h,this._w=c*u*h-p*f*x;break;case"ZYX":this._x=p*u*h-c*f*x,this._y=c*f*h+p*u*x,this._z=c*u*x-p*f*h,this._w=c*u*h+p*f*x;break;case"YZX":this._x=p*u*h+c*f*x,this._y=c*f*h+p*u*x,this._z=c*u*x-p*f*h,this._w=c*u*h-p*f*x;break;case"XZY":this._x=p*u*h-c*f*x,this._y=c*f*h-p*u*x,this._z=c*u*x+p*f*h,this._w=c*u*h+p*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=n+a+h;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new B,Qc=new Ar;class js{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),oo.subVectors(this.max,ws),Hr.subVectors(e.a,ws),Gr.subVectors(e.b,ws),kr.subVectors(e.c,ws),Oi.subVectors(Gr,Hr),Ni.subVectors(kr,Gr),rr.subVectors(Hr,kr);let t=[0,-Oi.z,Oi.y,0,-Ni.z,Ni.y,0,-rr.z,rr.y,Oi.z,0,-Oi.x,Ni.z,0,-Ni.x,rr.z,0,-rr.x,-Oi.y,Oi.x,0,-Ni.y,Ni.x,0,-rr.y,rr.x,0];return!Ua(t,Hr,Gr,kr,oo)||(t=[1,0,0,0,1,0,0,0,1],!Ua(t,Hr,Gr,kr,oo))?!1:(ao.crossVectors(Oi,Ni),t=[ao.x,ao.y,ao.z],Ua(t,Hr,Gr,kr,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new B,new B,new B,new B,new B,new B,new B,new B],ei=new B,so=new js,Hr=new B,Gr=new B,kr=new B,Oi=new B,Ni=new B,rr=new B,ws=new B,oo=new B,ao=new B,sr=new B;function Ua(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){sr.fromArray(i,s);const a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),c=t.dot(sr),u=n.dot(sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zp=new js,Ts=new B,Oa=new B;class na{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ts,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(Oa)),this.expandByPoint(Ts.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new B,Na=new B,lo=new B,Bi=new B,Ba=new B,co=new B,Fa=new B;class ia{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Na.copy(e).add(t).multiplyScalar(.5),lo.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Na);const s=e.distanceTo(t)*.5,o=-this.direction.dot(lo),a=Bi.dot(this.direction),l=-Bi.dot(lo),c=Bi.lengthSq(),u=Math.abs(1-o*o);let h,p,f,x;if(u>0)if(h=o*l-a,p=o*a-l,x=s*u,h>=0)if(p>=-x)if(p<=x){const E=1/u;h*=E,p*=E,f=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),f=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),f=-h*h+p*(p+2*l)+c;else p<=-x?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+p*(p+2*l)+c):p<=x?(h=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),f=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Na).addScaledVector(lo,p),f}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const n=Ei.dot(this.direction),r=Ei.dot(Ei)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,r,s){Ba.subVectors(t,e),co.subVectors(n,e),Fa.crossVectors(Ba,co);let o=this.direction.dot(Fa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(co.crossVectors(Bi,co));if(l<0)return null;const c=a*this.direction.dot(Ba.cross(Bi));if(c<0||l+c>o)return null;const u=-a*Bi.dot(Fa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,n,r,s,o,a,l,c,u,h,p,f,x,E,_){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,p,f,x,E,_)}set(e,t,n,r,s,o,a,l,c,u,h,p,f,x,E,_){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=p,d[3]=f,d[7]=x,d[11]=E,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),o=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*u,f=o*h,x=a*u,E=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+x*c,t[5]=p-E*c,t[9]=-a*l,t[2]=E-p*c,t[6]=x+f*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,f=l*h,x=c*u,E=c*h;t[0]=p+E*a,t[4]=x*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-x,t[6]=E+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,f=l*h,x=c*u,E=c*h;t[0]=p-E*a,t[4]=-o*h,t[8]=x+f*a,t[1]=f+x*a,t[5]=o*u,t[9]=E-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,f=o*h,x=a*u,E=a*h;t[0]=l*u,t[4]=x*c-f,t[8]=p*c+E,t[1]=l*h,t[5]=E*c+p,t[9]=f*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,f=o*c,x=a*l,E=a*c;t[0]=l*u,t[4]=E-p*h,t[8]=x*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+x,t[10]=p-E*h}else if(e.order==="XZY"){const p=o*l,f=o*c,x=a*l,E=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+E,t[5]=o*u,t[9]=f*h-x,t[2]=x*h-f,t[6]=a*u,t[10]=E*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hp,e,Gp)}lookAt(e,t,n){const r=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Fi.crossVectors(n,Fn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Fi.crossVectors(n,Fn)),Fi.normalize(),uo.crossVectors(Fn,Fi),r[0]=Fi.x,r[4]=uo.x,r[8]=Fn.x,r[1]=Fi.y,r[5]=uo.y,r[9]=Fn.y,r[2]=Fi.z,r[6]=uo.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],f=n[13],x=n[2],E=n[6],_=n[10],d=n[14],M=n[3],y=n[7],b=n[11],D=n[15],P=r[0],L=r[4],G=r[8],A=r[12],C=r[1],H=r[5],$=r[9],he=r[13],F=r[2],k=r[6],q=r[10],ae=r[14],ne=r[3],ie=r[7],ge=r[11],ve=r[15];return s[0]=o*P+a*C+l*F+c*ne,s[4]=o*L+a*H+l*k+c*ie,s[8]=o*G+a*$+l*q+c*ge,s[12]=o*A+a*he+l*ae+c*ve,s[1]=u*P+h*C+p*F+f*ne,s[5]=u*L+h*H+p*k+f*ie,s[9]=u*G+h*$+p*q+f*ge,s[13]=u*A+h*he+p*ae+f*ve,s[2]=x*P+E*C+_*F+d*ne,s[6]=x*L+E*H+_*k+d*ie,s[10]=x*G+E*$+_*q+d*ge,s[14]=x*A+E*he+_*ae+d*ve,s[3]=M*P+y*C+b*F+D*ne,s[7]=M*L+y*H+b*k+D*ie,s[11]=M*G+y*$+b*q+D*ge,s[15]=M*A+y*he+b*ae+D*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],f=e[14],x=e[3],E=e[7],_=e[11],d=e[15];return x*(+s*l*h-r*c*h-s*a*p+n*c*p+r*a*f-n*l*f)+E*(+t*l*f-t*c*p+s*o*p-r*o*f+r*c*u-s*l*u)+_*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+d*(-r*a*u-t*l*h+t*a*p+r*o*h-n*o*p+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],f=e[11],x=e[12],E=e[13],_=e[14],d=e[15],M=h*_*c-E*p*c+E*l*f-a*_*f-h*l*d+a*p*d,y=x*p*c-u*_*c-x*l*f+o*_*f+u*l*d-o*p*d,b=u*E*c-x*h*c+x*a*f-o*E*f-u*a*d+o*h*d,D=x*h*l-u*E*l-x*a*p+o*E*p+u*a*_-o*h*_,P=t*M+n*y+r*b+s*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=M*L,e[1]=(E*p*s-h*_*s-E*r*f+n*_*f+h*r*d-n*p*d)*L,e[2]=(a*_*s-E*l*s+E*r*c-n*_*c-a*r*d+n*l*d)*L,e[3]=(h*l*s-a*p*s-h*r*c+n*p*c+a*r*f-n*l*f)*L,e[4]=y*L,e[5]=(u*_*s-x*p*s+x*r*f-t*_*f-u*r*d+t*p*d)*L,e[6]=(x*l*s-o*_*s-x*r*c+t*_*c+o*r*d-t*l*d)*L,e[7]=(o*p*s-u*l*s+u*r*c-t*p*c-o*r*f+t*l*f)*L,e[8]=b*L,e[9]=(x*h*s-u*E*s-x*n*f+t*E*f+u*n*d-t*h*d)*L,e[10]=(o*E*s-x*a*s+x*n*c-t*E*c-o*n*d+t*a*d)*L,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*L,e[12]=D*L,e[13]=(u*E*r-x*h*r+x*n*p-t*E*p-u*n*_+t*h*_)*L,e[14]=(x*a*r-o*E*r-x*n*l+t*E*l+o*n*_-t*a*_)*L,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*p+t*a*p)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,p=s*c,f=s*u,x=s*h,E=o*u,_=o*h,d=a*h,M=l*c,y=l*u,b=l*h,D=n.x,P=n.y,L=n.z;return r[0]=(1-(E+d))*D,r[1]=(f+b)*D,r[2]=(x-y)*D,r[3]=0,r[4]=(f-b)*P,r[5]=(1-(p+d))*P,r[6]=(_+M)*P,r[7]=0,r[8]=(x+y)*L,r[9]=(_-M)*L,r[10]=(1-(p+E))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),a=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,u=1/o,h=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,t.setFromRotationMatrix(ti),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Ri){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let f,x;if(a===Ri)f=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Vo)f=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Ri){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),p=(t+e)*c,f=(n+r)*u;let x,E;if(a===Ri)x=(o+s)*h,E=-2*h;else if(a===Vo)x=s*h,E=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new B,ti=new At,Hp=new B(0,0,0),Gp=new B(1,1,1),Fi=new B,uo=new B,Fn=new B,eu=new At,tu=new Ar;class ra{constructor(e=0,t=0,n=0,r=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tu.setFromEuler(this),this.setFromQuaternion(tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class Pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kp=0;const nu=new B,Wr=new Ar,Si=new At,ho=new B,Cs=new B,Vp=new B,Wp=new Ar,iu=new B(1,0,0),ru=new B(0,1,0),su=new B(0,0,1),Xp={type:"added"},Yp={type:"removed"};class en extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new B,t=new ra,n=new Ar,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new gt}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(ru,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(ru,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ho.copy(e):ho.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Cs,ho,this.up):Si.lookAt(ho,Cs,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(Si),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),f=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}en.DEFAULT_UP=new B(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new B,Mi=new B,za=new B,Ai=new B,Xr=new B,Yr=new B,ou=new B,Ha=new B,Ga=new B,ka=new B;let fo=!1;class Yn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ni.subVectors(e,t),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ni.subVectors(r,t),Mi.subVectors(n,t),za.subVectors(e,t);const o=ni.dot(ni),a=ni.dot(Mi),l=ni.dot(za),c=Mi.dot(Mi),u=Mi.dot(za),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,f=(c*l-a*u)*p,x=(o*u-a*l)*p;return s.set(1-f-x,x,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,n,r,s,o,a,l){return fo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fo=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static isFrontFacing(e,t,n,r){return ni.subVectors(n,t),Mi.subVectors(e,t),ni.cross(Mi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),ni.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return fo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fo=!0),Yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Xr.subVectors(r,n),Yr.subVectors(s,n),Ha.subVectors(e,n);const l=Xr.dot(Ha),c=Yr.dot(Ha);if(l<=0&&c<=0)return t.copy(n);Ga.subVectors(e,r);const u=Xr.dot(Ga),h=Yr.dot(Ga);if(u>=0&&h<=u)return t.copy(r);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Xr,o);ka.subVectors(e,s);const f=Xr.dot(ka),x=Yr.dot(ka);if(x>=0&&f<=x)return t.copy(s);const E=f*c-l*x;if(E<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Yr,a);const _=u*x-f*h;if(_<=0&&h-u>=0&&f-x>=0)return ou.subVectors(s,r),a=(h-u)/(h-u+(f-x)),t.copy(r).addScaledVector(ou,a);const d=1/(_+E+p);return o=E*d,a=p*d,t.copy(n).addScaledVector(Xr,o).addScaledVector(Yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},po={h:0,s:0,l:0};function Va(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=bt.workingColorSpace){if(e=Pp(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Va(o,s,e+1/3),this.g=Va(o,s,e),this.b=Va(o,s,e-1/3)}return bt.toWorkingColorSpace(this,r),this}setStyle(e,t=mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const n=Th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return bt.fromWorkingColorSpace(En.copy(this),e),Math.round(gn(En.r*255,0,255))*65536+Math.round(gn(En.g*255,0,255))*256+Math.round(gn(En.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(En.copy(this),t);const n=En.r,r=En.g,s=En.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=mn){bt.fromWorkingColorSpace(En.copy(this),e);const t=En.r,n=En.g,r=En.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(po);const n=Ra(zi.h,po.h,t),r=Ra(zi.s,po.s,t),s=Ra(zi.l,po.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new _t;_t.NAMES=Th;let $p=0;class Lr extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=ls,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==al&&(n.blendSrc=this.blendSrc),this.blendDst!==ll&&(n.blendDst=this.blendDst),this.blendEquation!==ur&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dl extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new B,mo=new Ae;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mo.fromBufferAttribute(this,t),mo.applyMatrix3(e),this.setXY(t,mo.x,mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fl&&(e.usage=this.usage),e}}class Ch extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rh extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qp=0;const Wn=new At,Wa=new en,$r=new B,zn=new js,Rs=new js,on=new B;class un extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?Rh:Ch)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new gt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(zn.min,Rs.min),zn.expandByPoint(on),on.addVectors(zn.max,Rs.max),zn.expandByPoint(on)):(zn.expandByPoint(Rs.min),zn.expandByPoint(Rs.max))}zn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)on.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(on));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(e,c),on.add($r)),r=Math.max(r,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<a;C++)c[C]=new B,u[C]=new B;const h=new B,p=new B,f=new B,x=new Ae,E=new Ae,_=new Ae,d=new B,M=new B;function y(C,H,$){h.fromArray(r,C*3),p.fromArray(r,H*3),f.fromArray(r,$*3),x.fromArray(o,C*2),E.fromArray(o,H*2),_.fromArray(o,$*2),p.sub(h),f.sub(h),E.sub(x),_.sub(x);const he=1/(E.x*_.y-_.x*E.y);isFinite(he)&&(d.copy(p).multiplyScalar(_.y).addScaledVector(f,-E.y).multiplyScalar(he),M.copy(f).multiplyScalar(E.x).addScaledVector(p,-_.x).multiplyScalar(he),c[C].add(d),c[H].add(d),c[$].add(d),u[C].add(M),u[H].add(M),u[$].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let C=0,H=b.length;C<H;++C){const $=b[C],he=$.start,F=$.count;for(let k=he,q=he+F;k<q;k+=3)y(n[k+0],n[k+1],n[k+2])}const D=new B,P=new B,L=new B,G=new B;function A(C){L.fromArray(s,C*3),G.copy(L);const H=c[C];D.copy(H),D.sub(L.multiplyScalar(L.dot(H))).normalize(),P.crossVectors(G,H);const he=P.dot(u[C])<0?-1:1;l[C*4]=D.x,l[C*4+1]=D.y,l[C*4+2]=D.z,l[C*4+3]=he}for(let C=0,H=b.length;C<H;++C){const $=b[C],he=$.start,F=$.count;for(let k=he,q=he+F;k<q;k+=3)A(n[k+0]),A(n[k+1]),A(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let p=0,f=e.count;p<f;p+=3){const x=e.getX(p+0),E=e.getX(p+1),_=e.getX(p+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,_),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u);let f=0,x=0;for(let E=0,_=l.length;E<_;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*u;for(let d=0;d<u;d++)p[x++]=c[f++]}return new Gt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const p=c[u],f=e(p,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let p=0,f=h.length;p<f;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const au=new At,or=new ia,go=new na,lu=new B,qr=new B,jr=new B,Zr=new B,Xa=new B,_o=new B,vo=new Ae,xo=new Ae,yo=new Ae,cu=new B,uu=new B,hu=new B,Eo=new B,So=new B;class xn extends en{constructor(e=new un,t=new Dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_o.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Xa.fromBufferAttribute(h,e),o?_o.addScaledVector(Xa,u):_o.addScaledVector(Xa.sub(t),u))}t.add(_o)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(go.containsPoint(or.origin)===!1&&(or.intersectSphere(go,lu)===null||or.origin.distanceToSquared(lu)>(e.far-e.near)**2))&&(au.copy(s).invert(),or.copy(e.ray).applyMatrix4(au),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,E=p.length;x<E;x++){const _=p[x],d=o[_.materialIndex],M=Math.max(_.start,f.start),y=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let b=M,D=y;b<D;b+=3){const P=a.getX(b),L=a.getX(b+1),G=a.getX(b+2);r=Mo(this,d,e,n,c,u,h,P,L,G),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let _=x,d=E;_<d;_+=3){const M=a.getX(_),y=a.getX(_+1),b=a.getX(_+2);r=Mo(this,o,e,n,c,u,h,M,y,b),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,E=p.length;x<E;x++){const _=p[x],d=o[_.materialIndex],M=Math.max(_.start,f.start),y=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let b=M,D=y;b<D;b+=3){const P=b,L=b+1,G=b+2;r=Mo(this,d,e,n,c,u,h,P,L,G),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let _=x,d=E;_<d;_+=3){const M=_,y=_+1,b=_+2;r=Mo(this,o,e,n,c,u,h,M,y,b),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function jp(i,e,t,n,r,s,o,a){let l;if(e.side===Un?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Ji,a),l===null)return null;So.copy(a),So.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(So);return c<t.near||c>t.far?null:{distance:c,point:So.clone(),object:i}}function Mo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,qr),i.getVertexPosition(l,jr),i.getVertexPosition(c,Zr);const u=jp(i,e,t,n,qr,jr,Zr,Eo);if(u){r&&(vo.fromBufferAttribute(r,a),xo.fromBufferAttribute(r,l),yo.fromBufferAttribute(r,c),u.uv=Yn.getInterpolation(Eo,qr,jr,Zr,vo,xo,yo,new Ae)),s&&(vo.fromBufferAttribute(s,a),xo.fromBufferAttribute(s,l),yo.fromBufferAttribute(s,c),u.uv1=Yn.getInterpolation(Eo,qr,jr,Zr,vo,xo,yo,new Ae),u.uv2=u.uv1),o&&(cu.fromBufferAttribute(o,a),uu.fromBufferAttribute(o,l),hu.fromBufferAttribute(o,c),u.normal=Yn.getInterpolation(Eo,qr,jr,Zr,cu,uu,hu,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Yn.getNormal(qr,jr,Zr,h.normal),u.face=h}return u}class jn extends un{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let p=0,f=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2));function x(E,_,d,M,y,b,D,P,L,G,A){const C=b/L,H=D/G,$=b/2,he=D/2,F=P/2,k=L+1,q=G+1;let ae=0,ne=0;const ie=new B;for(let ge=0;ge<q;ge++){const ve=ge*H-he;for(let Ie=0;Ie<k;Ie++){const Q=Ie*C-$;ie[E]=Q*M,ie[_]=ve*y,ie[d]=F,c.push(ie.x,ie.y,ie.z),ie[E]=0,ie[_]=0,ie[d]=P>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Ie/L),h.push(1-ge/G),ae+=1}}for(let ge=0;ge<G;ge++)for(let ve=0;ve<L;ve++){const Ie=p+ve+k*ge,Q=p+ve+k*(ge+1),_e=p+(ve+1)+k*(ge+1),Re=p+(ve+1)+k*ge;l.push(Ie,Q,Re),l.push(Q,_e,Re),ne+=6}a.addGroup(f,ne,A),f+=ne,p+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Rn(i){const e={};for(let t=0;t<i.length;t++){const n=fs(i[t]);for(const r in n)e[r]=n[r]}return e}function Zp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lh(i){return i.getRenderTarget()===null?i.outputColorSpace:bt.workingColorSpace}const Kp={clone:fs,merge:Rn};var Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ph extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $n extends Ph{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(No*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Jr=1;class em extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $n(Kr,Jr,e,t);r.layers=this.layers,this.add(r);const s=new $n(Kr,Jr,e,t);s.layers=this.layers,this.add(s);const o=new $n(Kr,Jr,e,t);o.layers=this.layers,this.add(o);const a=new $n(Kr,Jr,e,t);a.layers=this.layers,this.add(a);const l=new $n(Kr,Jr,e,t);l.layers=this.layers,this.add(l);const c=new $n(Kr,Jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,p,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Dh extends On{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tm extends Mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===gr?mn:qn),this.texture=new Dh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new jn(5,5,5),s=new br({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:$i});s.uniforms.tEquirect.value=t;const o=new xn(r,s),a=t.minFilter;return t.minFilter===Hs&&(t.minFilter=Xn),new em(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ya=new B,nm=new B,im=new gt;class Gi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ya.subVectors(n,t).cross(nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ya),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||im.getNormalMatrix(e),r=this.coplanarPoint(Ya).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new na,Ao=new B;class Il{constructor(e=new Gi,t=new Gi,n=new Gi,r=new Gi,s=new Gi,o=new Gi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],p=r[7],f=r[8],x=r[9],E=r[10],_=r[11],d=r[12],M=r[13],y=r[14],b=r[15];if(n[0].setComponents(l-s,p-c,_-f,b-d).normalize(),n[1].setComponents(l+s,p+c,_+f,b+d).normalize(),n[2].setComponents(l+o,p+u,_+x,b+M).normalize(),n[3].setComponents(l-o,p-u,_-x,b-M).normalize(),n[4].setComponents(l-a,p-h,_-E,b-y).normalize(),t===Ri)n[5].setComponents(l+a,p+h,_+E,b+y).normalize();else if(t===Vo)n[5].setComponents(a,h,E,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ao.x=r.normal.x>0?e.max.x:e.min.x,Ao.y=r.normal.y>0?e.max.y:e.min.y,Ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ih(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function rm(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,p=c.usage,f=h.byteLength,x=i.createBuffer();i.bindBuffer(u,x),i.bufferData(u,h,p),c.onUploadCallback();let E;if(h instanceof Float32Array)E=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)E=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=i.SHORT;else if(h instanceof Uint32Array)E=i.UNSIGNED_INT;else if(h instanceof Int32Array)E=i.INT;else if(h instanceof Int8Array)E=i.BYTE;else if(h instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){const p=u.array,f=u._updateRange,x=u.updateRanges;if(i.bindBuffer(h,c),f.count===-1&&x.length===0&&i.bufferSubData(h,0,p),x.length!==0){for(let E=0,_=x.length;E<_;E++){const d=x[E];t?i.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(h,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):i.bufferSubData(h,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Ul extends un{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,p=t/l,f=[],x=[],E=[],_=[];for(let d=0;d<u;d++){const M=d*p-o;for(let y=0;y<c;y++){const b=y*h-s;x.push(b,-M,0),E.push(0,0,1),_.push(y/a),_.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const y=M+c*d,b=M+c*(d+1),D=M+1+c*(d+1),P=M+1+c*d;f.push(y,b,P),f.push(b,D,P)}this.setIndex(f),this.setAttribute("position",new It(x,3)),this.setAttribute("normal",new It(E,3)),this.setAttribute("uv",new It(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.widthSegments,e.heightSegments)}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,om=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
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
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
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
#endif`,pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vm=`#ifdef USE_IRIDESCENCE
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
#endif`,xm=`#ifdef USE_BUMPMAP
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cm=`#define PI 3.141592653589793
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
} // validated`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lm=`vec3 transformedNormal = objectNormal;
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
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Om="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`
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
}`,Bm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
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
}`,$m=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
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
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ig=`PhysicalMaterial material;
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
#endif`,rg=`struct PhysicalMaterial {
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
}`,sg=`
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mg=`#if defined( USE_POINTS_UV )
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
#endif`,gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
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
#endif`,yg=`#ifdef USE_MORPHTARGETS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tg=`#ifdef USE_NORMALMAP
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
#endif`,Cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,Yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#ifdef USE_TRANSMISSION
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
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s_=`uniform sampler2D t2D;
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`#include <common>
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
}`,h_=`#if DEPTH_PACKING == 3200
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
}`,d_=`#define DISTANCE
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
}`,f_=`#define DISTANCE
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`uniform float scale;
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
}`,__=`uniform vec3 diffuse;
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
}`,v_=`#include <common>
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
}`,x_=`uniform vec3 diffuse;
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
}`,y_=`#define LAMBERT
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
}`,E_=`#define LAMBERT
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
}`,S_=`#define MATCAP
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
}`,M_=`#define MATCAP
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
}`,A_=`#define NORMAL
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
}`,b_=`#define NORMAL
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
}`,w_=`#define PHONG
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
}`,T_=`#define PHONG
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
}`,C_=`#define STANDARD
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
}`,R_=`#define STANDARD
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
}`,L_=`#define TOON
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
}`,P_=`#define TOON
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
}`,D_=`uniform float size;
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
}`,I_=`uniform vec3 diffuse;
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
}`,U_=`#include <common>
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
}`,O_=`uniform vec3 color;
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
}`,N_=`uniform float rotation;
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
}`,B_=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:sm,alphahash_pars_fragment:om,alphamap_fragment:am,alphamap_pars_fragment:lm,alphatest_fragment:cm,alphatest_pars_fragment:um,aomap_fragment:hm,aomap_pars_fragment:dm,batching_pars_vertex:fm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:gm,bsdfs:_m,iridescence_fragment:vm,bumpmap_pars_fragment:xm,clipping_planes_fragment:ym,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:Mm,color_fragment:Am,color_pars_fragment:bm,color_pars_vertex:wm,color_vertex:Tm,common:Cm,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Lm,displacementmap_pars_vertex:Pm,displacementmap_vertex:Dm,emissivemap_fragment:Im,emissivemap_pars_fragment:Um,colorspace_fragment:Om,colorspace_pars_fragment:Nm,envmap_fragment:Bm,envmap_common_pars_fragment:Fm,envmap_pars_fragment:zm,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:Jm,envmap_vertex:Gm,fog_vertex:km,fog_pars_vertex:Vm,fog_fragment:Wm,fog_pars_fragment:Xm,gradientmap_pars_fragment:Ym,lightmap_fragment:$m,lightmap_pars_fragment:qm,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Zm,lights_pars_begin:Km,lights_toon_fragment:Qm,lights_toon_pars_fragment:eg,lights_phong_fragment:tg,lights_phong_pars_fragment:ng,lights_physical_fragment:ig,lights_physical_pars_fragment:rg,lights_fragment_begin:sg,lights_fragment_maps:og,lights_fragment_end:ag,logdepthbuf_fragment:lg,logdepthbuf_pars_fragment:cg,logdepthbuf_pars_vertex:ug,logdepthbuf_vertex:hg,map_fragment:dg,map_pars_fragment:fg,map_particle_fragment:pg,map_particle_pars_fragment:mg,metalnessmap_fragment:gg,metalnessmap_pars_fragment:_g,morphcolor_vertex:vg,morphnormal_vertex:xg,morphtarget_pars_vertex:yg,morphtarget_vertex:Eg,normal_fragment_begin:Sg,normal_fragment_maps:Mg,normal_pars_fragment:Ag,normal_pars_vertex:bg,normal_vertex:wg,normalmap_pars_fragment:Tg,clearcoat_normal_fragment_begin:Cg,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:Lg,iridescence_pars_fragment:Pg,opaque_fragment:Dg,packing:Ig,premultiplied_alpha_fragment:Ug,project_vertex:Og,dithering_fragment:Ng,dithering_pars_fragment:Bg,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:zg,shadowmap_pars_fragment:Hg,shadowmap_pars_vertex:Gg,shadowmap_vertex:kg,shadowmask_pars_fragment:Vg,skinbase_vertex:Wg,skinning_pars_vertex:Xg,skinning_vertex:Yg,skinnormal_vertex:$g,specularmap_fragment:qg,specularmap_pars_fragment:jg,tonemapping_fragment:Zg,tonemapping_pars_fragment:Kg,transmission_fragment:Jg,transmission_pars_fragment:Qg,uv_pars_fragment:e_,uv_pars_vertex:t_,uv_vertex:n_,worldpos_vertex:i_,background_vert:r_,background_frag:s_,backgroundCube_vert:o_,backgroundCube_frag:a_,cube_vert:l_,cube_frag:c_,depth_vert:u_,depth_frag:h_,distanceRGBA_vert:d_,distanceRGBA_frag:f_,equirect_vert:p_,equirect_frag:m_,linedashed_vert:g_,linedashed_frag:__,meshbasic_vert:v_,meshbasic_frag:x_,meshlambert_vert:y_,meshlambert_frag:E_,meshmatcap_vert:S_,meshmatcap_frag:M_,meshnormal_vert:A_,meshnormal_frag:b_,meshphong_vert:w_,meshphong_frag:T_,meshphysical_vert:C_,meshphysical_frag:R_,meshtoon_vert:L_,meshtoon_frag:P_,points_vert:D_,points_frag:I_,shadow_vert:U_,shadow_frag:O_,sprite_vert:N_,sprite_frag:B_},Le={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},hi={basic:{uniforms:Rn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Rn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new _t(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Rn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Rn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Rn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new _t(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Rn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Rn([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Rn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Rn([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Rn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Rn([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Rn([Le.common,Le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Rn([Le.lights,Le.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};hi.physical={uniforms:Rn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const bo={r:0,b:0,g:0};function F_(i,e,t,n,r,s,o){const a=new _t(0);let l=s===!0?0:1,c,u,h=null,p=0,f=null;function x(_,d){let M=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?t:e).get(y)),y===null?E(a,l):y&&y.isColor&&(E(y,1),M=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ea)?(u===void 0&&(u=new xn(new jn(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:fs(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=bt.getTransfer(y.colorSpace)!==Rt,(h!==y||p!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,p=y.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new xn(new Ul(2,2),new br({name:"BackgroundMaterial",uniforms:fs(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=bt.getTransfer(y.colorSpace)!==Rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function E(_,d){_.getRGB(bo,Lh(i)),n.buffers.color.setClear(bo.r,bo.g,bo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(_,d=1){a.set(_),l=d,E(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,E(a,l)},render:x}}function z_(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=_(null);let c=l,u=!1;function h(F,k,q,ae,ne){let ie=!1;if(o){const ge=E(ae,q,k);c!==ge&&(c=ge,f(c.object)),ie=d(F,ae,q,ne),ie&&M(F,ae,q,ne)}else{const ge=k.wireframe===!0;(c.geometry!==ae.id||c.program!==q.id||c.wireframe!==ge)&&(c.geometry=ae.id,c.program=q.id,c.wireframe=ge,ie=!0)}ne!==null&&t.update(ne,i.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,G(F,k,q,ae),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(F){return n.isWebGL2?i.bindVertexArray(F):s.bindVertexArrayOES(F)}function x(F){return n.isWebGL2?i.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function E(F,k,q){const ae=q.wireframe===!0;let ne=a[F.id];ne===void 0&&(ne={},a[F.id]=ne);let ie=ne[k.id];ie===void 0&&(ie={},ne[k.id]=ie);let ge=ie[ae];return ge===void 0&&(ge=_(p()),ie[ae]=ge),ge}function _(F){const k=[],q=[],ae=[];for(let ne=0;ne<r;ne++)k[ne]=0,q[ne]=0,ae[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:ae,object:F,attributes:{},index:null}}function d(F,k,q,ae){const ne=c.attributes,ie=k.attributes;let ge=0;const ve=q.getAttributes();for(const Ie in ve)if(ve[Ie].location>=0){const _e=ne[Ie];let Re=ie[Ie];if(Re===void 0&&(Ie==="instanceMatrix"&&F.instanceMatrix&&(Re=F.instanceMatrix),Ie==="instanceColor"&&F.instanceColor&&(Re=F.instanceColor)),_e===void 0||_e.attribute!==Re||Re&&_e.data!==Re.data)return!0;ge++}return c.attributesNum!==ge||c.index!==ae}function M(F,k,q,ae){const ne={},ie=k.attributes;let ge=0;const ve=q.getAttributes();for(const Ie in ve)if(ve[Ie].location>=0){let _e=ie[Ie];_e===void 0&&(Ie==="instanceMatrix"&&F.instanceMatrix&&(_e=F.instanceMatrix),Ie==="instanceColor"&&F.instanceColor&&(_e=F.instanceColor));const Re={};Re.attribute=_e,_e&&_e.data&&(Re.data=_e.data),ne[Ie]=Re,ge++}c.attributes=ne,c.attributesNum=ge,c.index=ae}function y(){const F=c.newAttributes;for(let k=0,q=F.length;k<q;k++)F[k]=0}function b(F){D(F,0)}function D(F,k){const q=c.newAttributes,ae=c.enabledAttributes,ne=c.attributeDivisors;q[F]=1,ae[F]===0&&(i.enableVertexAttribArray(F),ae[F]=1),ne[F]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,k),ne[F]=k)}function P(){const F=c.newAttributes,k=c.enabledAttributes;for(let q=0,ae=k.length;q<ae;q++)k[q]!==F[q]&&(i.disableVertexAttribArray(q),k[q]=0)}function L(F,k,q,ae,ne,ie,ge){ge===!0?i.vertexAttribIPointer(F,k,q,ne,ie):i.vertexAttribPointer(F,k,q,ae,ne,ie)}function G(F,k,q,ae){if(n.isWebGL2===!1&&(F.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const ne=ae.attributes,ie=q.getAttributes(),ge=k.defaultAttributeValues;for(const ve in ie){const Ie=ie[ve];if(Ie.location>=0){let Q=ne[ve];if(Q===void 0&&(ve==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),ve==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){const _e=Q.normalized,Re=Q.itemSize,He=t.get(Q);if(He===void 0)continue;const Be=He.buffer,Ke=He.type,qe=He.bytesPerElement,Ve=n.isWebGL2===!0&&(Ke===i.INT||Ke===i.UNSIGNED_INT||Q.gpuType===fh);if(Q.isInterleavedBufferAttribute){const Qe=Q.data,O=Qe.stride,we=Q.offset;if(Qe.isInstancedInterleavedBuffer){for(let re=0;re<Ie.locationSize;re++)D(Ie.location+re,Qe.meshPerAttribute);F.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let re=0;re<Ie.locationSize;re++)b(Ie.location+re);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let re=0;re<Ie.locationSize;re++)L(Ie.location+re,Re/Ie.locationSize,Ke,_e,O*qe,(we+Re/Ie.locationSize*re)*qe,Ve)}else{if(Q.isInstancedBufferAttribute){for(let Qe=0;Qe<Ie.locationSize;Qe++)D(Ie.location+Qe,Q.meshPerAttribute);F.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Qe=0;Qe<Ie.locationSize;Qe++)b(Ie.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Qe=0;Qe<Ie.locationSize;Qe++)L(Ie.location+Qe,Re/Ie.locationSize,Ke,_e,Re*qe,Re/Ie.locationSize*Qe*qe,Ve)}}else if(ge!==void 0){const _e=ge[ve];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(Ie.location,_e);break;case 3:i.vertexAttrib3fv(Ie.location,_e);break;case 4:i.vertexAttrib4fv(Ie.location,_e);break;default:i.vertexAttrib1fv(Ie.location,_e)}}}}P()}function A(){$();for(const F in a){const k=a[F];for(const q in k){const ae=k[q];for(const ne in ae)x(ae[ne].object),delete ae[ne];delete k[q]}delete a[F]}}function C(F){if(a[F.id]===void 0)return;const k=a[F.id];for(const q in k){const ae=k[q];for(const ne in ae)x(ae[ne].object),delete ae[ne];delete k[q]}delete a[F.id]}function H(F){for(const k in a){const q=a[k];if(q[F.id]===void 0)continue;const ae=q[F.id];for(const ne in ae)x(ae[ne].object),delete ae[ne];delete q[F.id]}}function $(){he(),u=!0,c!==l&&(c=l,f(c.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:he,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:H,initAttributes:y,enableAttribute:b,disableUnusedAttributes:P}}function H_(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,p){if(p===0)return;let f,x;if(r)f=i,x="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[x](s,u,h,p),t.update(h,s,p)}function c(u,h,p){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<p;x++)this.render(u[x],h[x]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,p);let x=0;for(let E=0;E<p;E++)x+=h[E];t.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function G_(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),E=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,b=o||e.has("OES_texture_float"),D=y&&b,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:x,maxAttributes:E,maxVertexUniforms:_,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:D,maxSamples:P}}function k_(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Gi,a=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const f=h.length!==0||p||n!==0||r;return r=p,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,f){const x=h.clippingPlanes,E=h.clipIntersection,_=h.clipShadows,d=i.get(h);if(!r||x===null||x.length===0||s&&!_)s?u(null):c();else{const M=s?0:n,y=M*4;let b=d.clippingState||null;l.value=b,b=u(x,p,y,f);for(let D=0;D!==y;++D)b[D]=t[D];d.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,f,x){const E=h!==null?h.length:0;let _=null;if(E!==0){if(_=l.value,x!==!0||_===null){const d=f+E*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(_===null||_.length<d)&&(_=new Float32Array(d));for(let y=0,b=f;y!==E;++y,b+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(_,b),_[b+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}function V_(i){let e=new WeakMap;function t(o,a){return a===cl?o.mapping=us:a===ul&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===cl||a===ul)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tm(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Uh extends Ph{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ss=4,du=[.125,.215,.35,.446,.526,.582],hr=20,$a=new Uh,fu=new _t;let qa=null,ja=0,Za=0;const cr=(1+Math.sqrt(5))/2,Qr=1/cr,pu=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,cr,Qr),new B(0,cr,-Qr),new B(Qr,0,cr),new B(-Qr,0,cr),new B(cr,Qr,0),new B(-cr,Qr,0)];class mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){qa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,ja,Za),e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Gs,format:ri,colorSpace:Ii,depthBuffer:!1},r=gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W_(s)),this._blurMaterial=X_(s,e,t)}return r}_compileMaterial(e){const t=new xn(this._lodPlanes[0],e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,n,r){const a=new $n(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(fu),u.toneMapping=qi,u.autoClear=!1;const f=new Dl({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),x=new xn(new jn,f);let E=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,E=!0):(f.color.copy(fu),E=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;wo(r,M*y,d>2?y:0,y,y),u.setRenderTarget(r),E&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===us||e.mapping===hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$a)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pu[(r-1)%pu.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xn(this._lodPlanes[r],c),p=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*hr-1),E=s/x,_=isFinite(s)?1+Math.floor(u*E):hr;_>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${hr}`);const d=[];let M=0;for(let L=0;L<hr;++L){const G=L/E,A=Math.exp(-G*G/2);d.push(A),L===0?M+=A:L<_&&(M+=2*A)}for(let L=0;L<d.length;L++)d[L]=d[L]/M;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:y}=this;p.dTheta.value=x,p.mipInt.value=y-n;const b=this._sizeLods[r],D=3*b*(r>y-ss?r-y+ss:0),P=4*(this._cubeSize-b);wo(t,D,P,3*b,2*b),l.setRenderTarget(t),l.render(h,$a)}}function W_(i){const e=[],t=[],n=[];let r=i;const s=i-ss+1+du.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-ss?l=du[o-i+ss-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,x=6,E=3,_=2,d=1,M=new Float32Array(E*x*f),y=new Float32Array(_*x*f),b=new Float32Array(d*x*f);for(let P=0;P<f;P++){const L=P%3*2/3-1,G=P>2?0:-1,A=[L,G,0,L+2/3,G,0,L+2/3,G+1,0,L,G,0,L+2/3,G+1,0,L,G+1,0];M.set(A,E*x*P),y.set(p,_*x*P);const C=[P,P,P,P,P,P];b.set(C,d*x*P)}const D=new un;D.setAttribute("position",new Gt(M,E)),D.setAttribute("uv",new Gt(y,_)),D.setAttribute("faceIndex",new Gt(b,d)),e.push(D),r>ss&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gu(i,e,t){const n=new Mr(i,e,t);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function X_(i,e,t){const n=new Float32Array(hr),r=new B(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function _u(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function vu(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Ol(){return`

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
	`}function Y_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===cl||l===ul,u=l===us||l===hs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new mu(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new mu(i));const p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function q_(i,e,t,n){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);for(const x in p.morphAttributes){const E=p.morphAttributes[x];for(let _=0,d=E.length;_<d;_++)e.remove(E[_])}p.removeEventListener("dispose",o),delete r[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const x in p)e.update(p[x],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const x in f){const E=f[x];for(let _=0,d=E.length;_<d;_++)e.update(E[_],i.ARRAY_BUFFER)}}function c(h){const p=[],f=h.index,x=h.attributes.position;let E=0;if(f!==null){const M=f.array;E=f.version;for(let y=0,b=M.length;y<b;y+=3){const D=M[y+0],P=M[y+1],L=M[y+2];p.push(D,P,P,L,L,D)}}else if(x!==void 0){const M=x.array;E=x.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const D=y+0,P=y+1,L=y+2;p.push(D,P,P,L,L,D)}}else return;const _=new(Mh(p)?Rh:Ch)(p,1);_.version=E;const d=s.get(h);d&&e.remove(d),s.set(h,_)}function u(h){const p=s.get(h);if(p){const f=h.index;f!==null&&p.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function j_(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,x){i.drawElements(s,x,a,f*l),t.update(x,s,1)}function h(f,x,E){if(E===0)return;let _,d;if(r)_=i,d="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[d](s,x,a,f*l,E),t.update(x,s,E)}function p(f,x,E){if(E===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let d=0;d<E;d++)this.render(f[d]/l,x[d]);else{_.multiDrawElementsWEBGL(s,x,0,a,f,0,E);let d=0;for(let M=0;M<E;M++)d+=x[M];t.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function Z_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function K_(i,e){return i[0]-e[0]}function J_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Q_(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new cn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=f!==void 0?f.length:0;let E=s.get(u);if(E===void 0||E.count!==x){let F=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",F)};E!==void 0&&E.texture.dispose();const M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let G=0;M===!0&&(G=1),y===!0&&(G=2),b===!0&&(G=3);let A=u.attributes.position.count*G,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const H=new Float32Array(A*C*4*x),$=new wh(H,A,C,x);$.type=Vi,$.needsUpdate=!0;const he=G*4;for(let k=0;k<x;k++){const q=D[k],ae=P[k],ne=L[k],ie=A*C*4*k;for(let ge=0;ge<q.count;ge++){const ve=ge*he;M===!0&&(o.fromBufferAttribute(q,ge),H[ie+ve+0]=o.x,H[ie+ve+1]=o.y,H[ie+ve+2]=o.z,H[ie+ve+3]=0),y===!0&&(o.fromBufferAttribute(ae,ge),H[ie+ve+4]=o.x,H[ie+ve+5]=o.y,H[ie+ve+6]=o.z,H[ie+ve+7]=0),b===!0&&(o.fromBufferAttribute(ne,ge),H[ie+ve+8]=o.x,H[ie+ve+9]=o.y,H[ie+ve+10]=o.z,H[ie+ve+11]=ne.itemSize===4?o.w:1)}}E={count:x,texture:$,size:new Ae(A,C)},s.set(u,E),u.addEventListener("dispose",F)}let _=0;for(let M=0;M<p.length;M++)_+=p[M];const d=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",d),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",E.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",E.size)}else{const f=p===void 0?0:p.length;let x=n[u.id];if(x===void 0||x.length!==f){x=[];for(let y=0;y<f;y++)x[y]=[y,0];n[u.id]=x}for(let y=0;y<f;y++){const b=x[y];b[0]=y,b[1]=p[y]}x.sort(J_);for(let y=0;y<8;y++)y<f&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(K_);const E=u.morphAttributes.position,_=u.morphAttributes.normal;let d=0;for(let y=0;y<8;y++){const b=a[y],D=b[0],P=b[1];D!==Number.MAX_SAFE_INTEGER&&P?(E&&u.getAttribute("morphTarget"+y)!==E[D]&&u.setAttribute("morphTarget"+y,E[D]),_&&u.getAttribute("morphNormal"+y)!==_[D]&&u.setAttribute("morphNormal"+y,_[D]),r[y]=P,d+=P):(E&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const M=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function e0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Oh extends On{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:mr,u!==mr&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mr&&(n=ki),n===void 0&&u===ds&&(n=pr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nh=new On,Bh=new Oh(1,1);Bh.compareFunction=Sh;const Fh=new wh,zh=new Fp,Hh=new Dh,xu=[],yu=[],Eu=new Float32Array(16),Su=new Float32Array(9),Mu=new Float32Array(4);function gs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=xu[r];if(s===void 0&&(s=new Float32Array(r),xu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sa(i,e){let t=yu[e];t===void 0&&(t=new Int32Array(e),yu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function t0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function s0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Mu.set(n),i.uniformMatrix2fv(this.addr,!1,Mu),nn(t,n)}}function o0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Su.set(n),i.uniformMatrix3fv(this.addr,!1,Su),nn(t,n)}}function a0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Eu.set(n),i.uniformMatrix4fv(this.addr,!1,Eu),nn(t,n)}}function l0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function d0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function p0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function m0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function g0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Bh:Nh;t.setTexture2D(e||s,r)}function _0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zh,r)}function v0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Hh,r)}function x0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fh,r)}function y0(i){switch(i){case 5126:return t0;case 35664:return n0;case 35665:return i0;case 35666:return r0;case 35674:return s0;case 35675:return o0;case 35676:return a0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return u0;case 35669:case 35673:return h0;case 5125:return d0;case 36294:return f0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return x0}}function E0(i,e){i.uniform1fv(this.addr,e)}function S0(i,e){const t=gs(e,this.size,2);i.uniform2fv(this.addr,t)}function M0(i,e){const t=gs(e,this.size,3);i.uniform3fv(this.addr,t)}function A0(i,e){const t=gs(e,this.size,4);i.uniform4fv(this.addr,t)}function b0(i,e){const t=gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function w0(i,e){const t=gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function T0(i,e){const t=gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function C0(i,e){i.uniform1iv(this.addr,e)}function R0(i,e){i.uniform2iv(this.addr,e)}function L0(i,e){i.uniform3iv(this.addr,e)}function P0(i,e){i.uniform4iv(this.addr,e)}function D0(i,e){i.uniform1uiv(this.addr,e)}function I0(i,e){i.uniform2uiv(this.addr,e)}function U0(i,e){i.uniform3uiv(this.addr,e)}function O0(i,e){i.uniform4uiv(this.addr,e)}function N0(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Nh,s[o])}function B0(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zh,s[o])}function F0(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hh,s[o])}function z0(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Fh,s[o])}function H0(i){switch(i){case 5126:return E0;case 35664:return S0;case 35665:return M0;case 35666:return A0;case 35674:return b0;case 35675:return w0;case 35676:return T0;case 5124:case 35670:return C0;case 35667:case 35671:return R0;case 35668:case 35672:return L0;case 35669:case 35673:return P0;case 5125:return D0;case 36294:return I0;case 36295:return U0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return z0}}class G0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=y0(t.type)}}class k0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H0(t.type)}}class V0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function Au(i,e){i.seq.push(e),i.map[e.id]=e}function W0(i,e,t){const n=i.name,r=n.length;for(Ka.lastIndex=0;;){const s=Ka.exec(n),o=Ka.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Au(t,c===void 0?new G0(a,i,e):new k0(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new V0(a),Au(t,h)),t=h}}}class Bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);W0(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function bu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const X0=37297;let Y0=0;function $0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function q0(i){const e=bt.getPrimaries(bt.workingColorSpace),t=bt.getPrimaries(i);let n;switch(e===t?n="":e===ko&&t===Go?n="LinearDisplayP3ToLinearSRGB":e===Go&&t===ko&&(n="LinearSRGBToLinearDisplayP3"),i){case Ii:case ta:return[n,"LinearTransferOETF"];case mn:case Ll:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function wu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$0(i.getShaderSource(e),o)}else return r}function j0(i,e){const t=q0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Z0(i,e){let t;switch(e){case op:t="Linear";break;case ap:t="Reinhard";break;case lp:t="OptimizedCineon";break;case cp:t="ACESFilmic";break;case hp:t="AgX";break;case up:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function K0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(os).join(`
`)}function J0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(os).join(`
`)}function Q0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ev(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function os(i){return i!==""}function Tu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(tv,iv)}const nv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function iv(i,e){let t=pt[e];if(t===void 0){const n=nv.get(e);if(n!==void 0)t=pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _l(t)}const rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(i){return i.replace(rv,sv)}function sv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ov(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function av(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case hs:e="ENVMAP_TYPE_CUBE";break;case ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:e="ENVMAP_MODE_REFRACTION";break}return e}function cv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hh:e="ENVMAP_BLENDING_MULTIPLY";break;case rp:e="ENVMAP_BLENDING_MIX";break;case sp:e="ENVMAP_BLENDING_ADD";break}return e}function uv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hv(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ov(t),c=av(t),u=lv(t),h=cv(t),p=uv(t),f=t.isWebGL2?"":K0(t),x=J0(t),E=Q0(s),_=r.createProgram();let d,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(os).join(`
`),d.length>0&&(d+=`
`),M=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(os).join(`
`),M.length>0&&(M+=`
`)):(d=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),M=[f,Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?pt.tonemapping_pars_fragment:"",t.toneMapping!==qi?Z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,j0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(os).join(`
`)),o=_l(o),o=Tu(o,t),o=Cu(o,t),a=_l(a),a=Tu(a,t),a=Cu(a,t),o=Ru(o),a=Ru(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const b=y+d+o,D=y+M+a,P=bu(r,r.VERTEX_SHADER,b),L=bu(r,r.FRAGMENT_SHADER,D);r.attachShader(_,P),r.attachShader(_,L),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function G($){if(i.debug.checkShaderErrors){const he=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(P).trim(),k=r.getShaderInfoLog(L).trim();let q=!0,ae=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,P,L);else{const ne=wu(r,P,"vertex"),ie=wu(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+he+`
`+ne+`
`+ie)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(F===""||k==="")&&(ae=!1);ae&&($.diagnostics={runnable:q,programLog:he,vertexShader:{log:F,prefix:d},fragmentShader:{log:k,prefix:M}})}r.deleteShader(P),r.deleteShader(L),A=new Bo(r,_),C=ev(r,_)}let A;this.getUniforms=function(){return A===void 0&&G(this),A};let C;this.getAttributes=function(){return C===void 0&&G(this),C};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(_,X0)),H},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=L,this}let dv=0;class fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pv(e),t.set(e,n)),n}}class pv{constructor(e){this.id=dv++,this.code=e,this.usedTimes=0}}function mv(i,e,t,n,r,s,o){const a=new Pl,l=new fv,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return A===0?"uv":`uv${A}`}function _(A,C,H,$,he){const F=$.fog,k=he.geometry,q=A.isMeshStandardMaterial?$.environment:null,ae=(A.isMeshStandardMaterial?t:e).get(A.envMap||q),ne=ae&&ae.mapping===ea?ae.image.height:null,ie=x[A.type];A.precision!==null&&(f=r.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));const ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ve=ge!==void 0?ge.length:0;let Ie=0;k.morphAttributes.position!==void 0&&(Ie=1),k.morphAttributes.normal!==void 0&&(Ie=2),k.morphAttributes.color!==void 0&&(Ie=3);let Q,_e,Re,He;if(ie){const Kt=hi[ie];Q=Kt.vertexShader,_e=Kt.fragmentShader}else Q=A.vertexShader,_e=A.fragmentShader,l.update(A),Re=l.getVertexShaderID(A),He=l.getFragmentShaderID(A);const Be=i.getRenderTarget(),Ke=he.isInstancedMesh===!0,qe=he.isBatchedMesh===!0,Ve=!!A.map,Qe=!!A.matcap,O=!!ae,we=!!A.aoMap,re=!!A.lightMap,ye=!!A.bumpMap,se=!!A.normalMap,We=!!A.displacementMap,Ue=!!A.emissiveMap,T=!!A.metalnessMap,S=!!A.roughnessMap,V=A.anisotropy>0,ce=A.clearcoat>0,de=A.iridescence>0,pe=A.sheen>0,ke=A.transmission>0,Pe=V&&!!A.anisotropyMap,Ne=ce&&!!A.clearcoatMap,Ye=ce&&!!A.clearcoatNormalMap,et=ce&&!!A.clearcoatRoughnessMap,fe=de&&!!A.iridescenceMap,it=de&&!!A.iridescenceThicknessMap,U=pe&&!!A.sheenColorMap,me=pe&&!!A.sheenRoughnessMap,Ce=!!A.specularMap,Ee=!!A.specularColorMap,Ge=!!A.specularIntensityMap,dt=ke&&!!A.transmissionMap,vt=ke&&!!A.thicknessMap,ut=!!A.gradientMap,Te=!!A.alphaMap,N=A.alphaTest>0,be=!!A.alphaHash,oe=!!A.extensions,je=!!k.attributes.uv1,Fe=!!k.attributes.uv2,at=!!k.attributes.uv3;let yt=qi;return A.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(yt=i.toneMapping),{isWebGL2:u,shaderID:ie,shaderType:A.type,shaderName:A.name,vertexShader:Q,fragmentShader:_e,defines:A.defines,customVertexShaderID:Re,customFragmentShaderID:He,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:qe,instancing:Ke,instancingColor:Ke&&he.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:Ii,map:Ve,matcap:Qe,envMap:O,envMapMode:O&&ae.mapping,envMapCubeUVHeight:ne,aoMap:we,lightMap:re,bumpMap:ye,normalMap:se,displacementMap:p&&We,emissiveMap:Ue,normalMapObjectSpace:se&&A.normalMapType===Mp,normalMapTangentSpace:se&&A.normalMapType===Eh,metalnessMap:T,roughnessMap:S,anisotropy:V,anisotropyMap:Pe,clearcoat:ce,clearcoatMap:Ne,clearcoatNormalMap:Ye,clearcoatRoughnessMap:et,iridescence:de,iridescenceMap:fe,iridescenceThicknessMap:it,sheen:pe,sheenColorMap:U,sheenRoughnessMap:me,specularMap:Ce,specularColorMap:Ee,specularIntensityMap:Ge,transmission:ke,transmissionMap:dt,thicknessMap:vt,gradientMap:ut,opaque:A.transparent===!1&&A.blending===ls,alphaMap:Te,alphaTest:N,alphaHash:be,combine:A.combine,mapUv:Ve&&E(A.map.channel),aoMapUv:we&&E(A.aoMap.channel),lightMapUv:re&&E(A.lightMap.channel),bumpMapUv:ye&&E(A.bumpMap.channel),normalMapUv:se&&E(A.normalMap.channel),displacementMapUv:We&&E(A.displacementMap.channel),emissiveMapUv:Ue&&E(A.emissiveMap.channel),metalnessMapUv:T&&E(A.metalnessMap.channel),roughnessMapUv:S&&E(A.roughnessMap.channel),anisotropyMapUv:Pe&&E(A.anisotropyMap.channel),clearcoatMapUv:Ne&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:it&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:U&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:me&&E(A.sheenRoughnessMap.channel),specularMapUv:Ce&&E(A.specularMap.channel),specularColorMapUv:Ee&&E(A.specularColorMap.channel),specularIntensityMapUv:Ge&&E(A.specularIntensityMap.channel),transmissionMapUv:dt&&E(A.transmissionMap.channel),thicknessMapUv:vt&&E(A.thicknessMap.channel),alphaMapUv:Te&&E(A.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(se||V),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:je,vertexUv2s:Fe,vertexUv3s:at,pointsUvs:he.isPoints===!0&&!!k.attributes.uv&&(Ve||Te),fog:!!F,useFog:A.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:he.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ve&&A.map.isVideoTexture===!0&&bt.getTransfer(A.map.colorSpace)===Rt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ti,flipSided:A.side===Un,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:oe&&A.extensions.derivatives===!0,extensionFragDepth:oe&&A.extensions.fragDepth===!0,extensionDrawBuffers:oe&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&A.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()}}function d(A){const C=[];if(A.shaderID?C.push(A.shaderID):(C.push(A.customVertexShaderID),C.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)C.push(H),C.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(M(C,A),y(C,A),C.push(i.outputColorSpace)),C.push(A.customProgramCacheKey),C.join()}function M(A,C){A.push(C.precision),A.push(C.outputColorSpace),A.push(C.envMapMode),A.push(C.envMapCubeUVHeight),A.push(C.mapUv),A.push(C.alphaMapUv),A.push(C.lightMapUv),A.push(C.aoMapUv),A.push(C.bumpMapUv),A.push(C.normalMapUv),A.push(C.displacementMapUv),A.push(C.emissiveMapUv),A.push(C.metalnessMapUv),A.push(C.roughnessMapUv),A.push(C.anisotropyMapUv),A.push(C.clearcoatMapUv),A.push(C.clearcoatNormalMapUv),A.push(C.clearcoatRoughnessMapUv),A.push(C.iridescenceMapUv),A.push(C.iridescenceThicknessMapUv),A.push(C.sheenColorMapUv),A.push(C.sheenRoughnessMapUv),A.push(C.specularMapUv),A.push(C.specularColorMapUv),A.push(C.specularIntensityMapUv),A.push(C.transmissionMapUv),A.push(C.thicknessMapUv),A.push(C.combine),A.push(C.fogExp2),A.push(C.sizeAttenuation),A.push(C.morphTargetsCount),A.push(C.morphAttributeCount),A.push(C.numDirLights),A.push(C.numPointLights),A.push(C.numSpotLights),A.push(C.numSpotLightMaps),A.push(C.numHemiLights),A.push(C.numRectAreaLights),A.push(C.numDirLightShadows),A.push(C.numPointLightShadows),A.push(C.numSpotLightShadows),A.push(C.numSpotLightShadowsWithMaps),A.push(C.numLightProbes),A.push(C.shadowMapType),A.push(C.toneMapping),A.push(C.numClippingPlanes),A.push(C.numClipIntersection),A.push(C.depthPacking)}function y(A,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),A.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),A.push(a.mask)}function b(A){const C=x[A.type];let H;if(C){const $=hi[C];H=Kp.clone($.uniforms)}else H=A.uniforms;return H}function D(A,C){let H;for(let $=0,he=c.length;$<he;$++){const F=c[$];if(F.cacheKey===C){H=F,++H.usedTimes;break}}return H===void 0&&(H=new hv(i,C,A,s),c.push(H)),H}function P(A){if(--A.usedTimes===0){const C=c.indexOf(A);c[C]=c[c.length-1],c.pop(),A.destroy()}}function L(A){l.remove(A)}function G(){l.dispose()}return{getParameters:_,getProgramCacheKey:d,getUniforms:b,acquireProgram:D,releaseProgram:P,releaseShaderCache:L,programs:c,dispose:G}}function gv(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function _v(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Du(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,p,f,x,E,_){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:f,groupOrder:x,renderOrder:h.renderOrder,z:E,group:_},i[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=f,d.groupOrder=x,d.renderOrder=h.renderOrder,d.z=E,d.group=_),e++,d}function a(h,p,f,x,E,_){const d=o(h,p,f,x,E,_);f.transmission>0?n.push(d):f.transparent===!0?r.push(d):t.push(d)}function l(h,p,f,x,E,_){const d=o(h,p,f,x,E,_);f.transmission>0?n.unshift(d):f.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,p){t.length>1&&t.sort(h||_v),n.length>1&&n.sort(p||Pu),r.length>1&&r.sort(p||Pu)}function u(){for(let h=e,p=i.length;h<p;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function vv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Du,i.set(n,[o])):r>=s.length?(o=new Du,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function xv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new _t};break;case"SpotLight":t={position:new B,direction:new B,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function yv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ev=0;function Sv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mv(i,e){const t=new xv,n=yv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new B);const s=new B,o=new At,a=new At;function l(u,h){let p=0,f=0,x=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let E=0,_=0,d=0,M=0,y=0,b=0,D=0,P=0,L=0,G=0,A=0;u.sort(Sv);const C=h===!0?Math.PI:1;for(let $=0,he=u.length;$<he;$++){const F=u[$],k=F.color,q=F.intensity,ae=F.distance,ne=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=k.r*q*C,f+=k.g*q*C,x+=k.b*q*C;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(F.sh.coefficients[ie],q);A++}else if(F.isDirectionalLight){const ie=t.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*C),F.castShadow){const ge=F.shadow,ve=n.get(F);ve.shadowBias=ge.bias,ve.shadowNormalBias=ge.normalBias,ve.shadowRadius=ge.radius,ve.shadowMapSize=ge.mapSize,r.directionalShadow[E]=ve,r.directionalShadowMap[E]=ne,r.directionalShadowMatrix[E]=F.shadow.matrix,b++}r.directional[E]=ie,E++}else if(F.isSpotLight){const ie=t.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy(k).multiplyScalar(q*C),ie.distance=ae,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,r.spot[d]=ie;const ge=F.shadow;if(F.map&&(r.spotLightMap[L]=F.map,L++,ge.updateMatrices(F),F.castShadow&&G++),r.spotLightMatrix[d]=ge.matrix,F.castShadow){const ve=n.get(F);ve.shadowBias=ge.bias,ve.shadowNormalBias=ge.normalBias,ve.shadowRadius=ge.radius,ve.shadowMapSize=ge.mapSize,r.spotShadow[d]=ve,r.spotShadowMap[d]=ne,P++}d++}else if(F.isRectAreaLight){const ie=t.get(F);ie.color.copy(k).multiplyScalar(q),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),r.rectArea[M]=ie,M++}else if(F.isPointLight){const ie=t.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*C),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){const ge=F.shadow,ve=n.get(F);ve.shadowBias=ge.bias,ve.shadowNormalBias=ge.normalBias,ve.shadowRadius=ge.radius,ve.shadowMapSize=ge.mapSize,ve.shadowCameraNear=ge.camera.near,ve.shadowCameraFar=ge.camera.far,r.pointShadow[_]=ve,r.pointShadowMap[_]=ne,r.pointShadowMatrix[_]=F.shadow.matrix,D++}r.point[_]=ie,_++}else if(F.isHemisphereLight){const ie=t.get(F);ie.skyColor.copy(F.color).multiplyScalar(q*C),ie.groundColor.copy(F.groundColor).multiplyScalar(q*C),r.hemi[y]=ie,y++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=f,r.ambient[2]=x;const H=r.hash;(H.directionalLength!==E||H.pointLength!==_||H.spotLength!==d||H.rectAreaLength!==M||H.hemiLength!==y||H.numDirectionalShadows!==b||H.numPointShadows!==D||H.numSpotShadows!==P||H.numSpotMaps!==L||H.numLightProbes!==A)&&(r.directional.length=E,r.spot.length=d,r.rectArea.length=M,r.point.length=_,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+L-G,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=A,H.directionalLength=E,H.pointLength=_,H.spotLength=d,H.rectAreaLength=M,H.hemiLength=y,H.numDirectionalShadows=b,H.numPointShadows=D,H.numSpotShadows=P,H.numSpotMaps=L,H.numLightProbes=A,r.version=Ev++)}function c(u,h){let p=0,f=0,x=0,E=0,_=0;const d=h.matrixWorldInverse;for(let M=0,y=u.length;M<y;M++){const b=u[M];if(b.isDirectionalLight){const D=r.directional[p];D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(d),p++}else if(b.isSpotLight){const D=r.spot[x];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(d),D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(d),x++}else if(b.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(d),a.identity(),o.copy(b.matrixWorld),o.premultiply(d),a.extractRotation(o),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),E++}else if(b.isPointLight){const D=r.point[f];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(d),f++}else if(b.isHemisphereLight){const D=r.hemi[_];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(d),_++}}}return{setup:l,setupView:c,state:r}}function Iu(i,e){const t=new Mv(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Av(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Iu(i,e),t.set(s,[l])):o>=a.length?(l=new Iu(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class bv extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wv extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cv=`uniform sampler2D shadow_pass;
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
}`;function Rv(i,e,t){let n=new Il;const r=new Ae,s=new Ae,o=new cn,a=new bv({depthPacking:Sp}),l=new wv,c={},u=t.maxTextureSize,h={[Ji]:Un,[Un]:Ji,[Ti]:Ti},p=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Tv,fragmentShader:Cv}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const x=new un;x.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new xn(x,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let d=this.type;this.render=function(P,L,G){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const A=i.getRenderTarget(),C=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),$=i.state;$.setBlending($i),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const he=d!==wi&&this.type===wi,F=d===wi&&this.type!==wi;for(let k=0,q=P.length;k<q;k++){const ae=P[k],ne=ae.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;r.copy(ne.mapSize);const ie=ne.getFrameExtents();if(r.multiply(ie),s.copy(ne.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,ne.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,ne.mapSize.y=s.y)),ne.map===null||he===!0||F===!0){const ve=this.type!==wi?{minFilter:Ln,magFilter:Ln}:{};ne.map!==null&&ne.map.dispose(),ne.map=new Mr(r.x,r.y,ve),ne.map.texture.name=ae.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();const ge=ne.getViewportCount();for(let ve=0;ve<ge;ve++){const Ie=ne.getViewport(ve);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),$.viewport(o),ne.updateMatrices(ae,ve),n=ne.getFrustum(),b(L,G,ne.camera,ae,this.type)}ne.isPointLightShadow!==!0&&this.type===wi&&M(ne,G),ne.needsUpdate=!1}d=this.type,_.needsUpdate=!1,i.setRenderTarget(A,C,H)};function M(P,L){const G=e.update(E);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Mr(r.x,r.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,G,p,E,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,G,f,E,null)}function y(P,L,G,A){let C=null;const H=G.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)C=H;else if(C=G.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const $=C.uuid,he=L.uuid;let F=c[$];F===void 0&&(F={},c[$]=F);let k=F[he];k===void 0&&(k=C.clone(),F[he]=k,L.addEventListener("dispose",D)),C=k}if(C.visible=L.visible,C.wireframe=L.wireframe,A===wi?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:h[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=i.properties.get(C);$.light=G}return C}function b(P,L,G,A,C){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===wi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,P.matrixWorld);const he=e.update(P),F=P.material;if(Array.isArray(F)){const k=he.groups;for(let q=0,ae=k.length;q<ae;q++){const ne=k[q],ie=F[ne.materialIndex];if(ie&&ie.visible){const ge=y(P,ie,A,C);P.onBeforeShadow(i,P,L,G,he,ge,ne),i.renderBufferDirect(G,null,he,ge,P,ne),P.onAfterShadow(i,P,L,G,he,ge,ne)}}}else if(F.visible){const k=y(P,F,A,C);P.onBeforeShadow(i,P,L,G,he,k,null),i.renderBufferDirect(G,null,he,k,P,null),P.onAfterShadow(i,P,L,G,he,k,null)}}const $=P.children;for(let he=0,F=$.length;he<F;he++)b($[he],L,G,A,C)}function D(P){P.target.removeEventListener("dispose",D);for(const G in c){const A=c[G],C=P.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function Lv(i,e,t){const n=t.isWebGL2;function r(){let N=!1;const be=new cn;let oe=null;const je=new cn(0,0,0,0);return{setMask:function(Fe){oe!==Fe&&!N&&(i.colorMask(Fe,Fe,Fe,Fe),oe=Fe)},setLocked:function(Fe){N=Fe},setClear:function(Fe,at,yt,kt,Kt){Kt===!0&&(Fe*=kt,at*=kt,yt*=kt),be.set(Fe,at,yt,kt),je.equals(be)===!1&&(i.clearColor(Fe,at,yt,kt),je.copy(be))},reset:function(){N=!1,oe=null,je.set(-1,0,0,0)}}}function s(){let N=!1,be=null,oe=null,je=null;return{setTest:function(Fe){Fe?qe(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(Fe){be!==Fe&&!N&&(i.depthMask(Fe),be=Fe)},setFunc:function(Fe){if(oe!==Fe){switch(Fe){case Kf:i.depthFunc(i.NEVER);break;case Jf:i.depthFunc(i.ALWAYS);break;case Qf:i.depthFunc(i.LESS);break;case zo:i.depthFunc(i.LEQUAL);break;case ep:i.depthFunc(i.EQUAL);break;case tp:i.depthFunc(i.GEQUAL);break;case np:i.depthFunc(i.GREATER);break;case ip:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Fe}},setLocked:function(Fe){N=Fe},setClear:function(Fe){je!==Fe&&(i.clearDepth(Fe),je=Fe)},reset:function(){N=!1,be=null,oe=null,je=null}}}function o(){let N=!1,be=null,oe=null,je=null,Fe=null,at=null,yt=null,kt=null,Kt=null;return{setTest:function(Mt){N||(Mt?qe(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(Mt){be!==Mt&&!N&&(i.stencilMask(Mt),be=Mt)},setFunc:function(Mt,rn,kn){(oe!==Mt||je!==rn||Fe!==kn)&&(i.stencilFunc(Mt,rn,kn),oe=Mt,je=rn,Fe=kn)},setOp:function(Mt,rn,kn){(at!==Mt||yt!==rn||kt!==kn)&&(i.stencilOp(Mt,rn,kn),at=Mt,yt=rn,kt=kn)},setLocked:function(Mt){N=Mt},setClear:function(Mt){Kt!==Mt&&(i.clearStencil(Mt),Kt=Mt)},reset:function(){N=!1,be=null,oe=null,je=null,Fe=null,at=null,yt=null,kt=null,Kt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let p={},f={},x=new WeakMap,E=[],_=null,d=!1,M=null,y=null,b=null,D=null,P=null,L=null,G=null,A=new _t(0,0,0),C=0,H=!1,$=null,he=null,F=null,k=null,q=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ie=0;const ge=i.getParameter(i.VERSION);ge.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(ge)[1]),ne=ie>=1):ge.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),ne=ie>=2);let ve=null,Ie={};const Q=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Re=new cn().fromArray(Q),He=new cn().fromArray(_e);function Be(N,be,oe,je){const Fe=new Uint8Array(4),at=i.createTexture();i.bindTexture(N,at),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<oe;yt++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(be,0,i.RGBA,1,1,je,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(be+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return at}const Ke={};Ke[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),Ke[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ke[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ke[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),qe(i.DEPTH_TEST),l.setFunc(zo),Ue(!1),T(mc),qe(i.CULL_FACE),se($i);function qe(N){p[N]!==!0&&(i.enable(N),p[N]=!0)}function Ve(N){p[N]!==!1&&(i.disable(N),p[N]=!1)}function Qe(N,be){return f[N]!==be?(i.bindFramebuffer(N,be),f[N]=be,n&&(N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=be),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=be)),!0):!1}function O(N,be){let oe=E,je=!1;if(N)if(oe=x.get(be),oe===void 0&&(oe=[],x.set(be,oe)),N.isWebGLMultipleRenderTargets){const Fe=N.texture;if(oe.length!==Fe.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let at=0,yt=Fe.length;at<yt;at++)oe[at]=i.COLOR_ATTACHMENT0+at;oe.length=Fe.length,je=!0}}else oe[0]!==i.COLOR_ATTACHMENT0&&(oe[0]=i.COLOR_ATTACHMENT0,je=!0);else oe[0]!==i.BACK&&(oe[0]=i.BACK,je=!0);je&&(t.isWebGL2?i.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function we(N){return _!==N?(i.useProgram(N),_=N,!0):!1}const re={[ur]:i.FUNC_ADD,[Nf]:i.FUNC_SUBTRACT,[Bf]:i.FUNC_REVERSE_SUBTRACT};if(n)re[xc]=i.MIN,re[yc]=i.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(re[xc]=N.MIN_EXT,re[yc]=N.MAX_EXT)}const ye={[Ff]:i.ZERO,[zf]:i.ONE,[Hf]:i.SRC_COLOR,[al]:i.SRC_ALPHA,[Yf]:i.SRC_ALPHA_SATURATE,[Wf]:i.DST_COLOR,[kf]:i.DST_ALPHA,[Gf]:i.ONE_MINUS_SRC_COLOR,[ll]:i.ONE_MINUS_SRC_ALPHA,[Xf]:i.ONE_MINUS_DST_COLOR,[Vf]:i.ONE_MINUS_DST_ALPHA,[$f]:i.CONSTANT_COLOR,[qf]:i.ONE_MINUS_CONSTANT_COLOR,[jf]:i.CONSTANT_ALPHA,[Zf]:i.ONE_MINUS_CONSTANT_ALPHA};function se(N,be,oe,je,Fe,at,yt,kt,Kt,Mt){if(N===$i){d===!0&&(Ve(i.BLEND),d=!1);return}if(d===!1&&(qe(i.BLEND),d=!0),N!==Of){if(N!==M||Mt!==H){if((y!==ur||P!==ur)&&(i.blendEquation(i.FUNC_ADD),y=ur,P=ur),Mt)switch(N){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,D=null,L=null,G=null,A.set(0,0,0),C=0,M=N,H=Mt}return}Fe=Fe||be,at=at||oe,yt=yt||je,(be!==y||Fe!==P)&&(i.blendEquationSeparate(re[be],re[Fe]),y=be,P=Fe),(oe!==b||je!==D||at!==L||yt!==G)&&(i.blendFuncSeparate(ye[oe],ye[je],ye[at],ye[yt]),b=oe,D=je,L=at,G=yt),(kt.equals(A)===!1||Kt!==C)&&(i.blendColor(kt.r,kt.g,kt.b,Kt),A.copy(kt),C=Kt),M=N,H=!1}function We(N,be){N.side===Ti?Ve(i.CULL_FACE):qe(i.CULL_FACE);let oe=N.side===Un;be&&(oe=!oe),Ue(oe),N.blending===ls&&N.transparent===!1?se($i):se(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const je=N.stencilWrite;c.setTest(je),je&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),V(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?qe(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(N){$!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),$=N)}function T(N){N!==Df?(qe(i.CULL_FACE),N!==he&&(N===mc?i.cullFace(i.BACK):N===If?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),he=N}function S(N){N!==F&&(ne&&i.lineWidth(N),F=N)}function V(N,be,oe){N?(qe(i.POLYGON_OFFSET_FILL),(k!==be||q!==oe)&&(i.polygonOffset(be,oe),k=be,q=oe)):Ve(i.POLYGON_OFFSET_FILL)}function ce(N){N?qe(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function de(N){N===void 0&&(N=i.TEXTURE0+ae-1),ve!==N&&(i.activeTexture(N),ve=N)}function pe(N,be,oe){oe===void 0&&(ve===null?oe=i.TEXTURE0+ae-1:oe=ve);let je=Ie[oe];je===void 0&&(je={type:void 0,texture:void 0},Ie[oe]=je),(je.type!==N||je.texture!==be)&&(ve!==oe&&(i.activeTexture(oe),ve=oe),i.bindTexture(N,be||Ke[N]),je.type=N,je.texture=be)}function ke(){const N=Ie[ve];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(N){Re.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Re.copy(N))}function dt(N){He.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),He.copy(N))}function vt(N,be){let oe=h.get(be);oe===void 0&&(oe=new WeakMap,h.set(be,oe));let je=oe.get(N);je===void 0&&(je=i.getUniformBlockIndex(be,N.name),oe.set(N,je))}function ut(N,be){const je=h.get(be).get(N);u.get(be)!==je&&(i.uniformBlockBinding(be,je,N.__bindingPointIndex),u.set(be,je))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ve=null,Ie={},f={},x=new WeakMap,E=[],_=null,d=!1,M=null,y=null,b=null,D=null,P=null,L=null,G=null,A=new _t(0,0,0),C=0,H=!1,$=null,he=null,F=null,k=null,q=null,Re.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:qe,disable:Ve,bindFramebuffer:Qe,drawBuffers:O,useProgram:we,setBlending:se,setMaterial:We,setFlipSided:Ue,setCullFace:T,setLineWidth:S,setPolygonOffset:V,setScissorTest:ce,activeTexture:de,bindTexture:pe,unbindTexture:ke,compressedTexImage2D:Pe,compressedTexImage3D:Ne,texImage2D:Ce,texImage3D:Ee,updateUBOMapping:vt,uniformBlockBinding:ut,texStorage2D:U,texStorage3D:me,texSubImage2D:Ye,texSubImage3D:et,compressedTexSubImage2D:fe,compressedTexSubImage3D:it,scissor:Ge,viewport:dt,reset:Te}}function Pv(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,S){return f?new OffscreenCanvas(T,S):Wo("canvas")}function E(T,S,V,ce){let de=1;if((T.width>ce||T.height>ce)&&(de=ce/Math.max(T.width,T.height)),de<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const pe=S?gl:Math.floor,ke=pe(de*T.width),Pe=pe(de*T.height);h===void 0&&(h=x(ke,Pe));const Ne=V?x(ke,Pe):h;return Ne.width=ke,Ne.height=Pe,Ne.getContext("2d").drawImage(T,0,0,ke,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ke+"x"+Pe+")."),Ne}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function _(T){return jc(T.width)&&jc(T.height)}function d(T){return a?!1:T.wrapS!==ii||T.wrapT!==ii||T.minFilter!==Ln&&T.minFilter!==Xn}function M(T,S){return T.generateMipmaps&&S&&T.minFilter!==Ln&&T.minFilter!==Xn}function y(T){i.generateMipmap(T)}function b(T,S,V,ce,de=!1){if(a===!1)return S;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let pe=S;if(S===i.RED&&(V===i.FLOAT&&(pe=i.R32F),V===i.HALF_FLOAT&&(pe=i.R16F),V===i.UNSIGNED_BYTE&&(pe=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(pe=i.R8UI),V===i.UNSIGNED_SHORT&&(pe=i.R16UI),V===i.UNSIGNED_INT&&(pe=i.R32UI),V===i.BYTE&&(pe=i.R8I),V===i.SHORT&&(pe=i.R16I),V===i.INT&&(pe=i.R32I)),S===i.RG&&(V===i.FLOAT&&(pe=i.RG32F),V===i.HALF_FLOAT&&(pe=i.RG16F),V===i.UNSIGNED_BYTE&&(pe=i.RG8)),S===i.RGBA){const ke=de?Ho:bt.getTransfer(ce);V===i.FLOAT&&(pe=i.RGBA32F),V===i.HALF_FLOAT&&(pe=i.RGBA16F),V===i.UNSIGNED_BYTE&&(pe=ke===Rt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(pe=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(pe=i.RGB5_A1)}return(pe===i.R16F||pe===i.R32F||pe===i.RG16F||pe===i.RG32F||pe===i.RGBA16F||pe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function D(T,S,V){return M(T,V)===!0||T.isFramebufferTexture&&T.minFilter!==Ln&&T.minFilter!==Xn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function P(T){return T===Ln||T===Ec||T===Ma?i.NEAREST:i.LINEAR}function L(T){const S=T.target;S.removeEventListener("dispose",L),A(S),S.isVideoTexture&&u.delete(S)}function G(T){const S=T.target;S.removeEventListener("dispose",G),H(S)}function A(T){const S=n.get(T);if(S.__webglInit===void 0)return;const V=T.source,ce=p.get(V);if(ce){const de=ce[S.__cacheKey];de.usedTimes--,de.usedTimes===0&&C(T),Object.keys(ce).length===0&&p.delete(V)}n.remove(T)}function C(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const V=T.source,ce=p.get(V);delete ce[S.__cacheKey],o.memory.textures--}function H(T){const S=T.texture,V=n.get(T),ce=n.get(S);if(ce.__webglTexture!==void 0&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(V.__webglFramebuffer[de]))for(let pe=0;pe<V.__webglFramebuffer[de].length;pe++)i.deleteFramebuffer(V.__webglFramebuffer[de][pe]);else i.deleteFramebuffer(V.__webglFramebuffer[de]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[de])}else{if(Array.isArray(V.__webglFramebuffer))for(let de=0;de<V.__webglFramebuffer.length;de++)i.deleteFramebuffer(V.__webglFramebuffer[de]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let de=0;de<V.__webglColorRenderbuffer.length;de++)V.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[de]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let de=0,pe=S.length;de<pe;de++){const ke=n.get(S[de]);ke.__webglTexture&&(i.deleteTexture(ke.__webglTexture),o.memory.textures--),n.remove(S[de])}n.remove(S),n.remove(T)}let $=0;function he(){$=0}function F(){const T=$;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),$+=1,T}function k(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function q(T,S){const V=n.get(T);if(T.isVideoTexture&&We(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const ce=T.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(V,T,S);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function ae(T,S){const V=n.get(T);if(T.version>0&&V.__version!==T.version){Re(V,T,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function ne(T,S){const V=n.get(T);if(T.version>0&&V.__version!==T.version){Re(V,T,S);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function ie(T,S){const V=n.get(T);if(T.version>0&&V.__version!==T.version){He(V,T,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}const ge={[hl]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[dl]:i.MIRRORED_REPEAT},ve={[Ln]:i.NEAREST,[Ec]:i.NEAREST_MIPMAP_NEAREST,[Ma]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[dp]:i.LINEAR_MIPMAP_NEAREST,[Hs]:i.LINEAR_MIPMAP_LINEAR},Ie={[Ap]:i.NEVER,[Lp]:i.ALWAYS,[bp]:i.LESS,[Sh]:i.LEQUAL,[wp]:i.EQUAL,[Rp]:i.GEQUAL,[Tp]:i.GREATER,[Cp]:i.NOTEQUAL};function Q(T,S,V){if(V?(i.texParameteri(T,i.TEXTURE_WRAP_S,ge[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ge[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ge[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ve[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ve[S.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==ii||S.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,P(S.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,P(S.minFilter)),S.minFilter!==Ln&&S.minFilter!==Xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ln||S.minFilter!==Ma&&S.minFilter!==Hs||S.type===Vi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Gs&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(T,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function _e(T,S){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",L));const ce=S.source;let de=p.get(ce);de===void 0&&(de={},p.set(ce,de));const pe=k(S);if(pe!==T.__cacheKey){de[pe]===void 0&&(de[pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),de[pe].usedTimes++;const ke=de[T.__cacheKey];ke!==void 0&&(de[T.__cacheKey].usedTimes--,ke.usedTimes===0&&C(S)),T.__cacheKey=pe,T.__webglTexture=de[pe].texture}return V}function Re(T,S,V){let ce=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ce=i.TEXTURE_3D);const de=_e(T,S),pe=S.source;t.bindTexture(ce,T.__webglTexture,i.TEXTURE0+V);const ke=n.get(pe);if(pe.version!==ke.__version||de===!0){t.activeTexture(i.TEXTURE0+V);const Pe=bt.getPrimaries(bt.workingColorSpace),Ne=S.colorSpace===qn?null:bt.getPrimaries(S.colorSpace),Ye=S.colorSpace===qn||Pe===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const et=d(S)&&_(S.image)===!1;let fe=E(S.image,et,!1,r.maxTextureSize);fe=Ue(S,fe);const it=_(fe)||a,U=s.convert(S.format,S.colorSpace);let me=s.convert(S.type),Ce=b(S.internalFormat,U,me,S.colorSpace,S.isVideoTexture);Q(ce,S,it);let Ee;const Ge=S.mipmaps,dt=a&&S.isVideoTexture!==!0&&Ce!==xh,vt=ke.__version===void 0||de===!0,ut=D(S,fe,it);if(S.isDepthTexture)Ce=i.DEPTH_COMPONENT,a?S.type===Vi?Ce=i.DEPTH_COMPONENT32F:S.type===ki?Ce=i.DEPTH_COMPONENT24:S.type===pr?Ce=i.DEPTH24_STENCIL8:Ce=i.DEPTH_COMPONENT16:S.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===mr&&Ce===i.DEPTH_COMPONENT&&S.type!==Rl&&S.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ki,me=s.convert(S.type)),S.format===ds&&Ce===i.DEPTH_COMPONENT&&(Ce=i.DEPTH_STENCIL,S.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=pr,me=s.convert(S.type))),vt&&(dt?t.texStorage2D(i.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,U,me,null));else if(S.isDataTexture)if(Ge.length>0&&it){dt&&vt&&t.texStorage2D(i.TEXTURE_2D,ut,Ce,Ge[0].width,Ge[0].height);for(let Te=0,N=Ge.length;Te<N;Te++)Ee=Ge[Te],dt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,Ee.width,Ee.height,U,me,Ee.data):t.texImage2D(i.TEXTURE_2D,Te,Ce,Ee.width,Ee.height,0,U,me,Ee.data);S.generateMipmaps=!1}else dt?(vt&&t.texStorage2D(i.TEXTURE_2D,ut,Ce,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,U,me,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,U,me,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){dt&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ce,Ge[0].width,Ge[0].height,fe.depth);for(let Te=0,N=Ge.length;Te<N;Te++)Ee=Ge[Te],S.format!==ri?U!==null?dt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,Ee.width,Ee.height,fe.depth,U,Ee.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Te,Ce,Ee.width,Ee.height,fe.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,Ee.width,Ee.height,fe.depth,U,me,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Te,Ce,Ee.width,Ee.height,fe.depth,0,U,me,Ee.data)}else{dt&&vt&&t.texStorage2D(i.TEXTURE_2D,ut,Ce,Ge[0].width,Ge[0].height);for(let Te=0,N=Ge.length;Te<N;Te++)Ee=Ge[Te],S.format!==ri?U!==null?dt?t.compressedTexSubImage2D(i.TEXTURE_2D,Te,0,0,Ee.width,Ee.height,U,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,Te,Ce,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,Ee.width,Ee.height,U,me,Ee.data):t.texImage2D(i.TEXTURE_2D,Te,Ce,Ee.width,Ee.height,0,U,me,Ee.data)}else if(S.isDataArrayTexture)dt?(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ce,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,U,me,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,U,me,fe.data);else if(S.isData3DTexture)dt?(vt&&t.texStorage3D(i.TEXTURE_3D,ut,Ce,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,U,me,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,U,me,fe.data);else if(S.isFramebufferTexture){if(vt)if(dt)t.texStorage2D(i.TEXTURE_2D,ut,Ce,fe.width,fe.height);else{let Te=fe.width,N=fe.height;for(let be=0;be<ut;be++)t.texImage2D(i.TEXTURE_2D,be,Ce,Te,N,0,U,me,null),Te>>=1,N>>=1}}else if(Ge.length>0&&it){dt&&vt&&t.texStorage2D(i.TEXTURE_2D,ut,Ce,Ge[0].width,Ge[0].height);for(let Te=0,N=Ge.length;Te<N;Te++)Ee=Ge[Te],dt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,U,me,Ee):t.texImage2D(i.TEXTURE_2D,Te,Ce,U,me,Ee);S.generateMipmaps=!1}else dt?(vt&&t.texStorage2D(i.TEXTURE_2D,ut,Ce,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,U,me,fe)):t.texImage2D(i.TEXTURE_2D,0,Ce,U,me,fe);M(S,it)&&y(ce),ke.__version=pe.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function He(T,S,V){if(S.image.length!==6)return;const ce=_e(T,S),de=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);const pe=n.get(de);if(de.version!==pe.__version||ce===!0){t.activeTexture(i.TEXTURE0+V);const ke=bt.getPrimaries(bt.workingColorSpace),Pe=S.colorSpace===qn?null:bt.getPrimaries(S.colorSpace),Ne=S.colorSpace===qn||ke===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Ye=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let Te=0;Te<6;Te++)!Ye&&!et?fe[Te]=E(S.image[Te],!1,!0,r.maxCubemapSize):fe[Te]=et?S.image[Te].image:S.image[Te],fe[Te]=Ue(S,fe[Te]);const it=fe[0],U=_(it)||a,me=s.convert(S.format,S.colorSpace),Ce=s.convert(S.type),Ee=b(S.internalFormat,me,Ce,S.colorSpace),Ge=a&&S.isVideoTexture!==!0,dt=pe.__version===void 0||ce===!0;let vt=D(S,it,U);Q(i.TEXTURE_CUBE_MAP,S,U);let ut;if(Ye){Ge&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Ee,it.width,it.height);for(let Te=0;Te<6;Te++){ut=fe[Te].mipmaps;for(let N=0;N<ut.length;N++){const be=ut[N];S.format!==ri?me!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N,0,0,be.width,be.height,me,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N,Ee,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N,0,0,be.width,be.height,me,Ce,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N,Ee,be.width,be.height,0,me,Ce,be.data)}}}else{ut=S.mipmaps,Ge&&dt&&(ut.length>0&&vt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Ee,fe[0].width,fe[0].height));for(let Te=0;Te<6;Te++)if(et){Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,fe[Te].width,fe[Te].height,me,Ce,fe[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ee,fe[Te].width,fe[Te].height,0,me,Ce,fe[Te].data);for(let N=0;N<ut.length;N++){const oe=ut[N].image[Te].image;Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N+1,0,0,oe.width,oe.height,me,Ce,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N+1,Ee,oe.width,oe.height,0,me,Ce,oe.data)}}else{Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,me,Ce,fe[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ee,me,Ce,fe[Te]);for(let N=0;N<ut.length;N++){const be=ut[N];Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N+1,0,0,me,Ce,be.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N+1,Ee,me,Ce,be.image[Te])}}}M(S,U)&&y(i.TEXTURE_CUBE_MAP),pe.__version=de.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Be(T,S,V,ce,de,pe){const ke=s.convert(V.format,V.colorSpace),Pe=s.convert(V.type),Ne=b(V.internalFormat,ke,Pe,V.colorSpace);if(!n.get(S).__hasExternalTextures){const et=Math.max(1,S.width>>pe),fe=Math.max(1,S.height>>pe);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,pe,Ne,et,fe,S.depth,0,ke,Pe,null):t.texImage2D(de,pe,Ne,et,fe,0,ke,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),se(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,de,n.get(V).__webglTexture,0,ye(S)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,de,n.get(V).__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(T,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let ce=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||se(S)){const de=S.depthTexture;de&&de.isDepthTexture&&(de.type===Vi?ce=i.DEPTH_COMPONENT32F:de.type===ki&&(ce=i.DEPTH_COMPONENT24));const pe=ye(S);se(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,ce,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ce,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ce,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){const ce=ye(S);V&&se(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,S.width,S.height):se(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const ce=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let de=0;de<ce.length;de++){const pe=ce[de],ke=s.convert(pe.format,pe.colorSpace),Pe=s.convert(pe.type),Ne=b(pe.internalFormat,ke,Pe,pe.colorSpace),Ye=ye(S);V&&se(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Ne,S.width,S.height):se(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,Ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const ce=n.get(S.depthTexture).__webglTexture,de=ye(S);if(S.depthTexture.format===mr)se(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(S.depthTexture.format===ds)se(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Ve(T){const S=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");qe(S.__webglFramebuffer,T)}else if(V){S.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ce]),S.__webglDepthbuffer[ce]=i.createRenderbuffer(),Ke(S.__webglDepthbuffer[ce],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Ke(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(T,S,V){const ce=n.get(T);S!==void 0&&Be(ce.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ve(T)}function O(T){const S=T.texture,V=n.get(T),ce=n.get(S);T.addEventListener("dispose",G),T.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=S.version,o.memory.textures++);const de=T.isWebGLCubeRenderTarget===!0,pe=T.isWebGLMultipleRenderTargets===!0,ke=_(T)||a;if(de){V.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(a&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[Pe]=[];for(let Ne=0;Ne<S.mipmaps.length;Ne++)V.__webglFramebuffer[Pe][Ne]=i.createFramebuffer()}else V.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let Pe=0;Pe<S.mipmaps.length;Pe++)V.__webglFramebuffer[Pe]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(pe)if(r.drawBuffers){const Pe=T.texture;for(let Ne=0,Ye=Pe.length;Ne<Ye;Ne++){const et=n.get(Pe[Ne]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&se(T)===!1){const Pe=pe?S:[S];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Pe.length;Ne++){const Ye=Pe[Ne];V.__webglColorRenderbuffer[Ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Ne]);const et=s.convert(Ye.format,Ye.colorSpace),fe=s.convert(Ye.type),it=b(Ye.internalFormat,et,fe,Ye.colorSpace,T.isXRRenderTarget===!0),U=ye(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,U,it,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,V.__webglColorRenderbuffer[Ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),Q(i.TEXTURE_CUBE_MAP,S,ke);for(let Pe=0;Pe<6;Pe++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)Be(V.__webglFramebuffer[Pe][Ne],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ne);else Be(V.__webglFramebuffer[Pe],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);M(S,ke)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){const Pe=T.texture;for(let Ne=0,Ye=Pe.length;Ne<Ye;Ne++){const et=Pe[Ne],fe=n.get(et);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),Q(i.TEXTURE_2D,et,ke),Be(V.__webglFramebuffer,T,et,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,0),M(et,ke)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?Pe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Pe,ce.__webglTexture),Q(Pe,S,ke),a&&S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)Be(V.__webglFramebuffer[Ne],T,S,i.COLOR_ATTACHMENT0,Pe,Ne);else Be(V.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,Pe,0);M(S,ke)&&y(Pe),t.unbindTexture()}T.depthBuffer&&Ve(T)}function we(T){const S=_(T)||a,V=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ce=0,de=V.length;ce<de;ce++){const pe=V[ce];if(M(pe,S)){const ke=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(pe).__webglTexture;t.bindTexture(ke,Pe),y(ke),t.unbindTexture()}}}function re(T){if(a&&T.samples>0&&se(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],V=T.width,ce=T.height;let de=i.COLOR_BUFFER_BIT;const pe=[],ke=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(T),Ne=T.isWebGLMultipleRenderTargets===!0;if(Ne)for(let Ye=0;Ye<S.length;Ye++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ye=0;Ye<S.length;Ye++){pe.push(i.COLOR_ATTACHMENT0+Ye),T.depthBuffer&&pe.push(ke);const et=Pe.__ignoreDepthValues!==void 0?Pe.__ignoreDepthValues:!1;if(et===!1&&(T.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Ne&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ye]),et===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ke]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ke])),Ne){const fe=n.get(S[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,V,ce,0,0,V,ce,de,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ne)for(let Ye=0;Ye<S.length;Ye++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ye]);const et=n.get(S[Ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}}function ye(T){return Math.min(r.maxSamples,T.samples)}function se(T){const S=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function We(T){const S=o.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function Ue(T,S){const V=T.colorSpace,ce=T.format,de=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===pl||V!==Ii&&V!==qn&&(bt.getTransfer(V)===Rt?a===!1?e.has("EXT_sRGB")===!0&&ce===ri?(T.format=pl,T.minFilter=Xn,T.generateMipmaps=!1):S=Ah.sRGBToLinear(S):(ce!==ri||de!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}this.allocateTextureUnit=F,this.resetTextureUnits=he,this.setTexture2D=q,this.setTexture2DArray=ae,this.setTexture3D=ne,this.setTextureCube=ie,this.rebindTextures=Qe,this.setupRenderTarget=O,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=se}function Dv(i,e,t){const n=t.isWebGL2;function r(s,o=qn){let a;const l=bt.getTransfer(o);if(s===ji)return i.UNSIGNED_BYTE;if(s===ph)return i.UNSIGNED_SHORT_4_4_4_4;if(s===mh)return i.UNSIGNED_SHORT_5_5_5_1;if(s===fp)return i.BYTE;if(s===pp)return i.SHORT;if(s===Rl)return i.UNSIGNED_SHORT;if(s===fh)return i.INT;if(s===ki)return i.UNSIGNED_INT;if(s===Vi)return i.FLOAT;if(s===Gs)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===mp)return i.ALPHA;if(s===ri)return i.RGBA;if(s===gp)return i.LUMINANCE;if(s===_p)return i.LUMINANCE_ALPHA;if(s===mr)return i.DEPTH_COMPONENT;if(s===ds)return i.DEPTH_STENCIL;if(s===pl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vp)return i.RED;if(s===gh)return i.RED_INTEGER;if(s===xp)return i.RG;if(s===_h)return i.RG_INTEGER;if(s===vh)return i.RGBA_INTEGER;if(s===Aa||s===ba||s===wa||s===Ta)if(l===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Aa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Aa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sc||s===Mc||s===Ac||s===bc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Sc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ac)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wc||s===Tc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===wc)return l===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Tc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Cc||s===Rc||s===Lc||s===Pc||s===Dc||s===Ic||s===Uc||s===Oc||s===Nc||s===Bc||s===Fc||s===zc||s===Hc||s===Gc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Cc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ic)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gc)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ca||s===kc||s===Vc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ca)return l===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yp||s===Wc||s===Xc||s===Yc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ca)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Wc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pr?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Iv extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class di extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uv={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const _=t.getJointPose(E,n),d=this._getHandJoint(c,E);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),f=.02,x=.005;c.inputState.pinching&&p>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ov extends Rr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,f=null,x=null;const E=t.getContextAttributes();let _=null,d=null;const M=[],y=[],b=new Ae;let D=null;const P=new $n;P.layers.enable(1),P.viewport=new cn;const L=new $n;L.layers.enable(2),L.viewport=new cn;const G=[P,L],A=new Iv;A.layers.enable(1),A.layers.enable(2);let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let _e=M[Q];return _e===void 0&&(_e=new Ja,M[Q]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Q){let _e=M[Q];return _e===void 0&&(_e=new Ja,M[Q]=_e),_e.getGripSpace()},this.getHand=function(Q){let _e=M[Q];return _e===void 0&&(_e=new Ja,M[Q]=_e),_e.getHandSpace()};function $(Q){const _e=y.indexOf(Q.inputSource);if(_e===-1)return;const Re=M[_e];Re!==void 0&&(Re.update(Q.inputSource,Q.frame,c||o),Re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function he(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",he),r.removeEventListener("inputsourceschange",F);for(let Q=0;Q<M.length;Q++){const _e=y[Q];_e!==null&&(y[Q]=null,M[Q].disconnect(_e))}C=null,H=null,e.setRenderTarget(_),f=null,p=null,h=null,r=null,d=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",he),r.addEventListener("inputsourceschange",F),E.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const _e={antialias:r.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),d=new Mr(f.framebufferWidth,f.framebufferHeight,{format:ri,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let _e=null,Re=null,He=null;E.depth&&(He=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=E.stencil?ds:mr,Re=E.stencil?pr:ki);const Be={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:s};h=new XRWebGLBinding(r,t),p=h.createProjectionLayer(Be),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Mr(p.textureWidth,p.textureHeight,{format:ri,type:ji,depthTexture:new Oh(p.textureWidth,p.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const Ke=e.properties.get(d);Ke.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(Q){for(let _e=0;_e<Q.removed.length;_e++){const Re=Q.removed[_e],He=y.indexOf(Re);He>=0&&(y[He]=null,M[He].disconnect(Re))}for(let _e=0;_e<Q.added.length;_e++){const Re=Q.added[_e];let He=y.indexOf(Re);if(He===-1){for(let Ke=0;Ke<M.length;Ke++)if(Ke>=y.length){y.push(Re),He=Ke;break}else if(y[Ke]===null){y[Ke]=Re,He=Ke;break}if(He===-1)break}const Be=M[He];Be&&Be.connect(Re)}}const k=new B,q=new B;function ae(Q,_e,Re){k.setFromMatrixPosition(_e.matrixWorld),q.setFromMatrixPosition(Re.matrixWorld);const He=k.distanceTo(q),Be=_e.projectionMatrix.elements,Ke=Re.projectionMatrix.elements,qe=Be[14]/(Be[10]-1),Ve=Be[14]/(Be[10]+1),Qe=(Be[9]+1)/Be[5],O=(Be[9]-1)/Be[5],we=(Be[8]-1)/Be[0],re=(Ke[8]+1)/Ke[0],ye=qe*we,se=qe*re,We=He/(-we+re),Ue=We*-we;_e.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ue),Q.translateZ(We),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const T=qe+We,S=Ve+We,V=ye-Ue,ce=se+(He-Ue),de=Qe*Ve/S*T,pe=O*Ve/S*T;Q.projectionMatrix.makePerspective(V,ce,de,pe,T,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ne(Q,_e){_e===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(_e.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;A.near=L.near=P.near=Q.near,A.far=L.far=P.far=Q.far,(C!==A.near||H!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,H=A.far);const _e=Q.parent,Re=A.cameras;ne(A,_e);for(let He=0;He<Re.length;He++)ne(Re[He],_e);Re.length===2?ae(A,P,L):A.projectionMatrix.copy(P.projectionMatrix),ie(Q,A,_e)};function ie(Q,_e,Re){Re===null?Q.matrix.copy(_e.matrixWorld):(Q.matrix.copy(Re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(_e.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(_e.projectionMatrix),Q.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ml*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)};let ge=null;function ve(Q,_e){if(u=_e.getViewerPose(c||o),x=_e,u!==null){const Re=u.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let He=!1;Re.length!==A.cameras.length&&(A.cameras.length=0,He=!0);for(let Be=0;Be<Re.length;Be++){const Ke=Re[Be];let qe=null;if(f!==null)qe=f.getViewport(Ke);else{const Qe=h.getViewSubImage(p,Ke);qe=Qe.viewport,Be===0&&(e.setRenderTargetTextures(d,Qe.colorTexture,p.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(d))}let Ve=G[Be];Ve===void 0&&(Ve=new $n,Ve.layers.enable(Be),Ve.viewport=new cn,G[Be]=Ve),Ve.matrix.fromArray(Ke.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ke.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(qe.x,qe.y,qe.width,qe.height),Be===0&&(A.matrix.copy(Ve.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),He===!0&&A.cameras.push(Ve)}}for(let Re=0;Re<M.length;Re++){const He=y[Re],Be=M[Re];He!==null&&Be!==void 0&&Be.update(He,_e,c||o)}ge&&ge(Q,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),x=null}const Ie=new Ih;Ie.setAnimationLoop(ve),this.setAnimationLoop=function(Q){ge=Q},this.dispose=function(){}}}function Nv(i,e){function t(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function n(_,d){d.color.getRGB(_.fogColor.value,Lh(i)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,M,y,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(_,d):d.isMeshToonMaterial?(s(_,d),h(_,d)):d.isMeshPhongMaterial?(s(_,d),u(_,d)):d.isMeshStandardMaterial?(s(_,d),p(_,d),d.isMeshPhysicalMaterial&&f(_,d,b)):d.isMeshMatcapMaterial?(s(_,d),x(_,d)):d.isMeshDepthMaterial?s(_,d):d.isMeshDistanceMaterial?(s(_,d),E(_,d)):d.isMeshNormalMaterial?s(_,d):d.isLineBasicMaterial?(o(_,d),d.isLineDashedMaterial&&a(_,d)):d.isPointsMaterial?l(_,d,M,y):d.isSpriteMaterial?c(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,t(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===Un&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,t(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===Un&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,t(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,t(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const M=e.get(d).envMap;if(M&&(_.envMap.value=M,_.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap){_.lightMap.value=d.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=d.lightMapIntensity*y,t(d.lightMap,_.lightMapTransform)}d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,_.aoMapTransform))}function o(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform))}function a(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function l(_,d,M,y){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*M,_.scale.value=y*.5,d.map&&(_.map.value=d.map,t(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function u(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function h(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function p(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,_.roughnessMapTransform)),e.get(d).envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function f(_,d,M){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Un&&_.clearcoatNormalScale.value.negate())),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=M.texture,_.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,d){d.matcap&&(_.matcap.value=d.matcap)}function E(_,d){const M=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(M.matrixWorld),_.nearDistance.value=M.shadow.camera.near,_.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Bv(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){const b=y.program;n.uniformBlockBinding(M,b)}function c(M,y){let b=r[M.id];b===void 0&&(x(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",_));const D=y.program;n.updateUBOMapping(M,D);const P=e.render.frame;s[M.id]!==P&&(p(M),s[M.id]=P)}function u(M){const y=h();M.__bindingPointIndex=y;const b=i.createBuffer(),D=M.__size,P=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const y=r[M.id],b=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,L=b.length;P<L;P++){const G=Array.isArray(b[P])?b[P]:[b[P]];for(let A=0,C=G.length;A<C;A++){const H=G[A];if(f(H,P,A,D)===!0){const $=H.__offset,he=Array.isArray(H.value)?H.value:[H.value];let F=0;for(let k=0;k<he.length;k++){const q=he[k],ae=E(q);typeof q=="number"||typeof q=="boolean"?(H.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,$+F,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=0,H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=0,H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=0):(q.toArray(H.__data,F),F+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,y,b,D){const P=M.value,L=y+"_"+b;if(D[L]===void 0)return typeof P=="number"||typeof P=="boolean"?D[L]=P:D[L]=P.clone(),!0;{const G=D[L];if(typeof P=="number"||typeof P=="boolean"){if(G!==P)return D[L]=P,!0}else if(G.equals(P)===!1)return G.copy(P),!0}return!1}function x(M){const y=M.uniforms;let b=0;const D=16;for(let L=0,G=y.length;L<G;L++){const A=Array.isArray(y[L])?y[L]:[y[L]];for(let C=0,H=A.length;C<H;C++){const $=A[C],he=Array.isArray($.value)?$.value:[$.value];for(let F=0,k=he.length;F<k;F++){const q=he[F],ae=E(q),ne=b%D;ne!==0&&D-ne<ae.boundary&&(b+=D-ne),$.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=ae.storage}}}const P=b%D;return P>0&&(b+=D-P),M.__size=b,M.__cache={},this}function E(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function _(M){const y=M.target;y.removeEventListener("dispose",_);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Gh{constructor(e={}){const{canvas:t=Ip(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const f=new Uint32Array(4),x=new Int32Array(4);let E=null,_=null;const d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;const y=this;let b=!1,D=0,P=0,L=null,G=-1,A=null;const C=new cn,H=new cn;let $=null;const he=new _t(0);let F=0,k=t.width,q=t.height,ae=1,ne=null,ie=null;const ge=new cn(0,0,k,q),ve=new cn(0,0,k,q);let Ie=!1;const Q=new Il;let _e=!1,Re=!1,He=null;const Be=new At,Ke=new Ae,qe=new B,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return L===null?ae:1}let O=n;function we(R,W){for(let Z=0;Z<R.length;Z++){const K=R[Z],j=t.getContext(K,W);if(j!==null)return j}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cl}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",be,!1),O===null){const W=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&W.shift(),O=we(W,R),O===null)throw we(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let re,ye,se,We,Ue,T,S,V,ce,de,pe,ke,Pe,Ne,Ye,et,fe,it,U,me,Ce,Ee,Ge,dt;function vt(){re=new $_(O),ye=new G_(O,re,e),re.init(ye),Ee=new Dv(O,re,ye),se=new Lv(O,re,ye),We=new Z_(O),Ue=new gv,T=new Pv(O,re,se,Ue,ye,Ee,We),S=new V_(y),V=new Y_(y),ce=new rm(O,ye),Ge=new z_(O,re,ce,ye),de=new q_(O,ce,We,Ge),pe=new e0(O,de,ce,We),U=new Q_(O,ye,T),et=new k_(Ue),ke=new mv(y,S,V,re,ye,Ge,et),Pe=new Nv(y,Ue),Ne=new vv,Ye=new Av(re,ye),it=new F_(y,S,V,se,pe,p,l),fe=new Rv(y,pe,ye),dt=new Bv(O,We,ye,se),me=new H_(O,re,We,ye),Ce=new j_(O,re,We,ye),We.programs=ke.programs,y.capabilities=ye,y.extensions=re,y.properties=Ue,y.renderLists=Ne,y.shadowMap=fe,y.state=se,y.info=We}vt();const ut=new Ov(y,O);this.xr=ut,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(R){R!==void 0&&(ae=R,this.setSize(k,q,!1))},this.getSize=function(R){return R.set(k,q)},this.setSize=function(R,W,Z=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,q=W,t.width=Math.floor(R*ae),t.height=Math.floor(W*ae),Z===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(k*ae,q*ae).floor()},this.setDrawingBufferSize=function(R,W,Z){k=R,q=W,ae=Z,t.width=Math.floor(R*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(ge)},this.setViewport=function(R,W,Z,K){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,W,Z,K),se.viewport(C.copy(ge).multiplyScalar(ae).floor())},this.getScissor=function(R){return R.copy(ve)},this.setScissor=function(R,W,Z,K){R.isVector4?ve.set(R.x,R.y,R.z,R.w):ve.set(R,W,Z,K),se.scissor(H.copy(ve).multiplyScalar(ae).floor())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(R){se.setScissorTest(Ie=R)},this.setOpaqueSort=function(R){ne=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(R=!0,W=!0,Z=!0){let K=0;if(R){let j=!1;if(L!==null){const Oe=L.texture.format;j=Oe===vh||Oe===_h||Oe===gh}if(j){const Oe=L.texture.type,Xe=Oe===ji||Oe===ki||Oe===Rl||Oe===pr||Oe===ph||Oe===mh,$e=it.getClearColor(),Ze=it.getClearAlpha(),ct=$e.r,nt=$e.g,lt=$e.b;Xe?(f[0]=ct,f[1]=nt,f[2]=lt,f[3]=Ze,O.clearBufferuiv(O.COLOR,0,f)):(x[0]=ct,x[1]=nt,x[2]=lt,x[3]=Ze,O.clearBufferiv(O.COLOR,0,x))}else K|=O.COLOR_BUFFER_BIT}W&&(K|=O.DEPTH_BUFFER_BIT),Z&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ne.dispose(),Ye.dispose(),Ue.dispose(),S.dispose(),V.dispose(),pe.dispose(),Ge.dispose(),dt.dispose(),ke.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Kt),ut.removeEventListener("sessionend",Mt),He&&(He.dispose(),He=null),rn.stop()};function Te(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=We.autoReset,W=fe.enabled,Z=fe.autoUpdate,K=fe.needsUpdate,j=fe.type;vt(),We.autoReset=R,fe.enabled=W,fe.autoUpdate=Z,fe.needsUpdate=K,fe.type=j}function be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function oe(R){const W=R.target;W.removeEventListener("dispose",oe),je(W)}function je(R){Fe(R),Ue.remove(R)}function Fe(R){const W=Ue.get(R).programs;W!==void 0&&(W.forEach(function(Z){ke.releaseProgram(Z)}),R.isShaderMaterial&&ke.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Z,K,j,Oe){W===null&&(W=Ve);const Xe=j.isMesh&&j.matrixWorld.determinant()<0,$e=tr(R,W,Z,K,j);se.setMaterial(K,Xe);let Ze=Z.index,ct=1;if(K.wireframe===!0){if(Ze=de.getWireframeAttribute(Z),Ze===void 0)return;ct=2}const nt=Z.drawRange,lt=Z.attributes.position;let Ut=nt.start*ct,bn=(nt.start+nt.count)*ct;Oe!==null&&(Ut=Math.max(Ut,Oe.start*ct),bn=Math.min(bn,(Oe.start+Oe.count)*ct)),Ze!==null?(Ut=Math.max(Ut,0),bn=Math.min(bn,Ze.count)):lt!=null&&(Ut=Math.max(Ut,0),bn=Math.min(bn,lt.count));const Vt=bn-Ut;if(Vt<0||Vt===1/0)return;Ge.setup(j,K,$e,Z,Ze);let Bn,Ct=me;if(Ze!==null&&(Bn=ce.get(Ze),Ct=Ce,Ct.setIndex(Bn)),j.isMesh)K.wireframe===!0?(se.setLineWidth(K.wireframeLinewidth*Qe()),Ct.setMode(O.LINES)):Ct.setMode(O.TRIANGLES);else if(j.isLine){let ft=K.linewidth;ft===void 0&&(ft=1),se.setLineWidth(ft*Qe()),j.isLineSegments?Ct.setMode(O.LINES):j.isLineLoop?Ct.setMode(O.LINE_LOOP):Ct.setMode(O.LINE_STRIP)}else j.isPoints?Ct.setMode(O.POINTS):j.isSprite&&Ct.setMode(O.TRIANGLES);if(j.isBatchedMesh)Ct.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Ct.renderInstances(Ut,Vt,j.count);else if(Z.isInstancedBufferGeometry){const ft=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ys=Math.min(Z.instanceCount,ft);Ct.renderInstances(Ut,Vt,ys)}else Ct.render(Ut,Vt)};function at(R,W,Z){R.transparent===!0&&R.side===Ti&&R.forceSinglePass===!1?(R.side=Un,R.needsUpdate=!0,Pr(R,W,Z),R.side=Ji,R.needsUpdate=!0,Pr(R,W,Z),R.side=Ti):Pr(R,W,Z)}this.compile=function(R,W,Z=null){Z===null&&(Z=R),_=Ye.get(Z),_.init(),M.push(_),Z.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==Z&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights(y._useLegacyLights);const K=new Set;return R.traverse(function(j){const Oe=j.material;if(Oe)if(Array.isArray(Oe))for(let Xe=0;Xe<Oe.length;Xe++){const $e=Oe[Xe];at($e,Z,j),K.add($e)}else at(Oe,Z,j),K.add(Oe)}),M.pop(),_=null,K},this.compileAsync=function(R,W,Z=null){const K=this.compile(R,W,Z);return new Promise(j=>{function Oe(){if(K.forEach(function(Xe){Ue.get(Xe).currentProgram.isReady()&&K.delete(Xe)}),K.size===0){j(R);return}setTimeout(Oe,10)}re.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let yt=null;function kt(R){yt&&yt(R)}function Kt(){rn.stop()}function Mt(){rn.start()}const rn=new Ih;rn.setAnimationLoop(kt),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(R){yt=R,ut.setAnimationLoop(R),R===null?rn.stop():rn.start()},ut.addEventListener("sessionstart",Kt),ut.addEventListener("sessionend",Mt),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(W),W=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,W,L),_=Ye.get(R,M.length),_.init(),M.push(_),Be.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Be),Re=this.localClippingEnabled,_e=et.init(this.clippingPlanes,Re),E=Ne.get(R,d.length),E.init(),d.push(E),kn(R,W,0,y.sortObjects),E.finish(),y.sortObjects===!0&&E.sort(ne,ie),this.info.render.frame++,_e===!0&&et.beginShadows();const Z=_.state.shadowsArray;if(fe.render(Z,R,W),_e===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(E,R),_.setupLights(y._useLegacyLights),W.isArrayCamera){const K=W.cameras;for(let j=0,Oe=K.length;j<Oe;j++){const Xe=K[j];xs(E,R,Xe,Xe.viewport)}}else xs(E,R,W);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(y,R,W),Ge.resetDefaultState(),G=-1,A=null,M.pop(),M.length>0?_=M[M.length-1]:_=null,d.pop(),d.length>0?E=d[d.length-1]:E=null};function kn(R,W,Z,K){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){K&&qe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Be);const Xe=pe.update(R),$e=R.material;$e.visible&&E.push(R,Xe,$e,Z,qe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Xe=pe.update(R),$e=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),qe.copy(R.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),qe.copy(Xe.boundingSphere.center)),qe.applyMatrix4(R.matrixWorld).applyMatrix4(Be)),Array.isArray($e)){const Ze=Xe.groups;for(let ct=0,nt=Ze.length;ct<nt;ct++){const lt=Ze[ct],Ut=$e[lt.materialIndex];Ut&&Ut.visible&&E.push(R,Xe,Ut,Z,qe.z,lt)}}else $e.visible&&E.push(R,Xe,$e,Z,qe.z,null)}}const Oe=R.children;for(let Xe=0,$e=Oe.length;Xe<$e;Xe++)kn(Oe[Xe],W,Z,K)}function xs(R,W,Z,K){const j=R.opaque,Oe=R.transmissive,Xe=R.transparent;_.setupLightsView(Z),_e===!0&&et.setGlobalState(y.clippingPlanes,Z),Oe.length>0&&Js(j,Oe,W,Z),K&&se.viewport(C.copy(K)),j.length>0&&er(j,W,Z),Oe.length>0&&er(Oe,W,Z),Xe.length>0&&er(Xe,W,Z),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Js(R,W,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Oe=ye.isWebGL2;He===null&&(He=new Mr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?Gs:ji,minFilter:Hs,samples:Oe?4:0})),y.getDrawingBufferSize(Ke),Oe?He.setSize(Ke.x,Ke.y):He.setSize(gl(Ke.x),gl(Ke.y));const Xe=y.getRenderTarget();y.setRenderTarget(He),y.getClearColor(he),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear();const $e=y.toneMapping;y.toneMapping=qi,er(R,Z,K),T.updateMultisampleRenderTarget(He),T.updateRenderTargetMipmap(He);let Ze=!1;for(let ct=0,nt=W.length;ct<nt;ct++){const lt=W[ct],Ut=lt.object,bn=lt.geometry,Vt=lt.material,Bn=lt.group;if(Vt.side===Ti&&Ut.layers.test(K.layers)){const Ct=Vt.side;Vt.side=Un,Vt.needsUpdate=!0,Qs(Ut,Z,K,bn,Vt,Bn),Vt.side=Ct,Vt.needsUpdate=!0,Ze=!0}}Ze===!0&&(T.updateMultisampleRenderTarget(He),T.updateRenderTargetMipmap(He)),y.setRenderTarget(Xe),y.setClearColor(he,F),y.toneMapping=$e}function er(R,W,Z){const K=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Oe=R.length;j<Oe;j++){const Xe=R[j],$e=Xe.object,Ze=Xe.geometry,ct=K===null?Xe.material:K,nt=Xe.group;$e.layers.test(Z.layers)&&Qs($e,W,Z,Ze,ct,nt)}}function Qs(R,W,Z,K,j,Oe){R.onBeforeRender(y,W,Z,K,j,Oe),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(y,W,Z,K,R,Oe),j.transparent===!0&&j.side===Ti&&j.forceSinglePass===!1?(j.side=Un,j.needsUpdate=!0,y.renderBufferDirect(Z,W,K,j,R,Oe),j.side=Ji,j.needsUpdate=!0,y.renderBufferDirect(Z,W,K,j,R,Oe),j.side=Ti):y.renderBufferDirect(Z,W,K,j,R,Oe),R.onAfterRender(y,W,Z,K,j,Oe)}function Pr(R,W,Z){W.isScene!==!0&&(W=Ve);const K=Ue.get(R),j=_.state.lights,Oe=_.state.shadowsArray,Xe=j.state.version,$e=ke.getParameters(R,j.state,Oe,W,Z),Ze=ke.getProgramCacheKey($e);let ct=K.programs;K.environment=R.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(R.isMeshStandardMaterial?V:S).get(R.envMap||K.environment),ct===void 0&&(R.addEventListener("dispose",oe),ct=new Map,K.programs=ct);let nt=ct.get(Ze);if(nt!==void 0){if(K.currentProgram===nt&&K.lightsStateVersion===Xe)return Dr(R,$e),nt}else $e.uniforms=ke.getUniforms(R),R.onBuild(Z,$e,y),R.onBeforeCompile($e,y),nt=ke.acquireProgram($e,Ze),ct.set(Ze,nt),K.uniforms=$e.uniforms;const lt=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(lt.clippingPlanes=et.uniform),Dr(R,$e),K.needsLights=fa(R),K.lightsStateVersion=Xe,K.needsLights&&(lt.ambientLightColor.value=j.state.ambient,lt.lightProbe.value=j.state.probe,lt.directionalLights.value=j.state.directional,lt.directionalLightShadows.value=j.state.directionalShadow,lt.spotLights.value=j.state.spot,lt.spotLightShadows.value=j.state.spotShadow,lt.rectAreaLights.value=j.state.rectArea,lt.ltc_1.value=j.state.rectAreaLTC1,lt.ltc_2.value=j.state.rectAreaLTC2,lt.pointLights.value=j.state.point,lt.pointLightShadows.value=j.state.pointShadow,lt.hemisphereLights.value=j.state.hemi,lt.directionalShadowMap.value=j.state.directionalShadowMap,lt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,lt.spotShadowMap.value=j.state.spotShadowMap,lt.spotLightMatrix.value=j.state.spotLightMatrix,lt.spotLightMap.value=j.state.spotLightMap,lt.pointShadowMap.value=j.state.pointShadowMap,lt.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=nt,K.uniformsList=null,nt}function Ui(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Bo.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Dr(R,W){const Z=Ue.get(R);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function tr(R,W,Z,K,j){W.isScene!==!0&&(W=Ve),T.resetTextureUnits();const Oe=W.fog,Xe=K.isMeshStandardMaterial?W.environment:null,$e=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ii,Ze=(K.isMeshStandardMaterial?V:S).get(K.envMap||Xe),ct=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,nt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),lt=!!Z.morphAttributes.position,Ut=!!Z.morphAttributes.normal,bn=!!Z.morphAttributes.color;let Vt=qi;K.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Vt=y.toneMapping);const Bn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ct=Bn!==void 0?Bn.length:0,ft=Ue.get(K),ys=_.state.lights;if(_e===!0&&(Re===!0||R!==A)){const Dt=R===A&&K.id===G;et.setState(K,R,Dt)}let Pt=!1;K.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==ys.state.version||ft.outputColorSpace!==$e||j.isBatchedMesh&&ft.batching===!1||!j.isBatchedMesh&&ft.batching===!0||j.isInstancedMesh&&ft.instancing===!1||!j.isInstancedMesh&&ft.instancing===!0||j.isSkinnedMesh&&ft.skinning===!1||!j.isSkinnedMesh&&ft.skinning===!0||j.isInstancedMesh&&ft.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ft.instancingColor===!1&&j.instanceColor!==null||ft.envMap!==Ze||K.fog===!0&&ft.fog!==Oe||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==et.numPlanes||ft.numIntersection!==et.numIntersection)||ft.vertexAlphas!==ct||ft.vertexTangents!==nt||ft.morphTargets!==lt||ft.morphNormals!==Ut||ft.morphColors!==bn||ft.toneMapping!==Vt||ye.isWebGL2===!0&&ft.morphTargetsCount!==Ct)&&(Pt=!0):(Pt=!0,ft.__version=K.version);let Vn=ft.currentProgram;Pt===!0&&(Vn=Pr(K,W,j));let Es=!1,nr=!1,ai=!1;const Ft=Vn.getUniforms(),_i=ft.uniforms;if(se.useProgram(Vn.program)&&(Es=!0,nr=!0,ai=!0),K.id!==G&&(G=K.id,nr=!0),Es||A!==R){Ft.setValue(O,"projectionMatrix",R.projectionMatrix),Ft.setValue(O,"viewMatrix",R.matrixWorldInverse);const Dt=Ft.map.cameraPosition;Dt!==void 0&&Dt.setValue(O,qe.setFromMatrixPosition(R.matrixWorld)),ye.logarithmicDepthBuffer&&Ft.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ft.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,nr=!0,ai=!0)}if(j.isSkinnedMesh){Ft.setOptional(O,j,"bindMatrix"),Ft.setOptional(O,j,"bindMatrixInverse");const Dt=j.skeleton;Dt&&(ye.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),Ft.setValue(O,"boneTexture",Dt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Ft.setOptional(O,j,"batchingTexture"),Ft.setValue(O,"batchingTexture",j._matricesTexture,T));const Ir=Z.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0&&ye.isWebGL2===!0)&&U.update(j,Z,Vn),(nr||ft.receiveShadow!==j.receiveShadow)&&(ft.receiveShadow=j.receiveShadow,Ft.setValue(O,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(_i.envMap.value=Ze,_i.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),nr&&(Ft.setValue(O,"toneMappingExposure",y.toneMappingExposure),ft.needsLights&&da(_i,ai),Oe&&K.fog===!0&&Pe.refreshFogUniforms(_i,Oe),Pe.refreshMaterialUniforms(_i,K,ae,q,He),Bo.upload(O,Ui(ft),_i,T)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Bo.upload(O,Ui(ft),_i,T),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ft.setValue(O,"center",j.center),Ft.setValue(O,"modelViewMatrix",j.modelViewMatrix),Ft.setValue(O,"normalMatrix",j.normalMatrix),Ft.setValue(O,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Dt=K.uniformsGroups;for(let Ss=0,eo=Dt.length;Ss<eo;Ss++)if(ye.isWebGL2){const Ms=Dt[Ss];dt.update(Ms,Vn),dt.bind(Ms,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function da(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function fa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,W,Z){Ue.get(R.texture).__webglTexture=W,Ue.get(R.depthTexture).__webglTexture=Z;const K=Ue.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const Z=Ue.get(R);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,Z=0){L=R,D=W,P=Z;let K=!0,j=null,Oe=!1,Xe=!1;if(R){const Ze=Ue.get(R);Ze.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(O.FRAMEBUFFER,null),K=!1):Ze.__webglFramebuffer===void 0?T.setupRenderTarget(R):Ze.__hasExternalTextures&&T.rebindTextures(R,Ue.get(R.texture).__webglTexture,Ue.get(R.depthTexture).__webglTexture);const ct=R.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Xe=!0);const nt=Ue.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[W])?j=nt[W][Z]:j=nt[W],Oe=!0):ye.isWebGL2&&R.samples>0&&T.useMultisampledRTT(R)===!1?j=Ue.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?j=nt[Z]:j=nt,C.copy(R.viewport),H.copy(R.scissor),$=R.scissorTest}else C.copy(ge).multiplyScalar(ae).floor(),H.copy(ve).multiplyScalar(ae).floor(),$=Ie;if(se.bindFramebuffer(O.FRAMEBUFFER,j)&&ye.drawBuffers&&K&&se.drawBuffers(R,j),se.viewport(C),se.scissor(H),se.setScissorTest($),Oe){const Ze=Ue.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ze.__webglTexture,Z)}else if(Xe){const Ze=Ue.get(R.texture),ct=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ze.__webglTexture,Z||0,ct)}G=-1},this.readRenderTargetPixels=function(R,W,Z,K,j,Oe,Xe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&($e=$e[Xe]),$e){se.bindFramebuffer(O.FRAMEBUFFER,$e);try{const Ze=R.texture,ct=Ze.format,nt=Ze.type;if(ct!==ri&&Ee.convert(ct)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const lt=nt===Gs&&(re.has("EXT_color_buffer_half_float")||ye.isWebGL2&&re.has("EXT_color_buffer_float"));if(nt!==ji&&Ee.convert(nt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===Vi&&(ye.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-K&&Z>=0&&Z<=R.height-j&&O.readPixels(W,Z,K,j,Ee.convert(ct),Ee.convert(nt),Oe)}finally{const Ze=L!==null?Ue.get(L).__webglFramebuffer:null;se.bindFramebuffer(O.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(R,W,Z=0){const K=Math.pow(2,-Z),j=Math.floor(W.image.width*K),Oe=Math.floor(W.image.height*K);T.setTexture2D(W,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,R.x,R.y,j,Oe),se.unbindTexture()},this.copyTextureToTexture=function(R,W,Z,K=0){const j=W.image.width,Oe=W.image.height,Xe=Ee.convert(Z.format),$e=Ee.convert(Z.type);T.setTexture2D(Z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,K,R.x,R.y,j,Oe,Xe,$e,W.image.data):W.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,K,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,Xe,W.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,K,R.x,R.y,Xe,$e,W.image),K===0&&Z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Z,K,j=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=R.max.x-R.min.x+1,Xe=R.max.y-R.min.y+1,$e=R.max.z-R.min.z+1,Ze=Ee.convert(K.format),ct=Ee.convert(K.type);let nt;if(K.isData3DTexture)T.setTexture3D(K,0),nt=O.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)T.setTexture2DArray(K,0),nt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,K.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,K.unpackAlignment);const lt=O.getParameter(O.UNPACK_ROW_LENGTH),Ut=O.getParameter(O.UNPACK_IMAGE_HEIGHT),bn=O.getParameter(O.UNPACK_SKIP_PIXELS),Vt=O.getParameter(O.UNPACK_SKIP_ROWS),Bn=O.getParameter(O.UNPACK_SKIP_IMAGES),Ct=Z.isCompressedTexture?Z.mipmaps[j]:Z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Ct.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ct.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,R.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,R.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?O.texSubImage3D(nt,j,W.x,W.y,W.z,Oe,Xe,$e,Ze,ct,Ct.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(nt,j,W.x,W.y,W.z,Oe,Xe,$e,Ze,Ct.data)):O.texSubImage3D(nt,j,W.x,W.y,W.z,Oe,Xe,$e,Ze,ct,Ct),O.pixelStorei(O.UNPACK_ROW_LENGTH,lt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ut),O.pixelStorei(O.UNPACK_SKIP_PIXELS,bn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Vt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Bn),j===0&&K.generateMipmaps&&O.generateMipmap(nt),se.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?T.setTextureCube(R,0):R.isData3DTexture?T.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?T.setTexture2DArray(R,0):T.setTexture2D(R,0),se.unbindTexture()},this.resetState=function(){D=0,P=0,L=null,se.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ll?"display-p3":"srgb",t.unpackColorSpace=bt.workingColorSpace===ta?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mn?gr:yh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===gr?mn:Ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Fv extends Gh{}Fv.prototype.isWebGL1Renderer=!0;class zv extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Hv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new B;class Xo{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kh extends Lr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let es;const Ls=new B,ts=new B,ns=new B,is=new Ae,Ps=new Ae,Vh=new At,To=new B,Ds=new B,Co=new B,Uu=new Ae,Qa=new Ae,Ou=new Ae;class Gv extends en{constructor(e=new kh){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new un;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hv(t,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new Xo(n,3,0,!1)),es.setAttribute("uv",new Xo(n,2,3,!1))}this.geometry=es,this.material=e,this.center=new Ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),Vh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-ns.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Ro(To.set(-.5,-.5,0),ns,o,ts,r,s),Ro(Ds.set(.5,-.5,0),ns,o,ts,r,s),Ro(Co.set(.5,.5,0),ns,o,ts,r,s),Uu.set(0,0),Qa.set(1,0),Ou.set(1,1);let a=e.ray.intersectTriangle(To,Ds,Co,!1,Ls);if(a===null&&(Ro(Ds.set(-.5,.5,0),ns,o,ts,r,s),Qa.set(0,1),a=e.ray.intersectTriangle(To,Co,Ds,!1,Ls),a===null))return;const l=e.ray.origin.distanceTo(Ls);l<e.near||l>e.far||t.push({distance:l,point:Ls.clone(),uv:Yn.getInterpolation(Ls,To,Ds,Co,Uu,Qa,Ou,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ro(i,e,t,n,r,s){is.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ps.x=s*is.x-r*is.y,Ps.y=r*is.x+s*is.y):Ps.copy(is),i.copy(e),i.x+=Ps.x,i.y+=Ps.y,i.applyMatrix4(Vh)}class Wh extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nu=new B,Bu=new B,Fu=new At,el=new ia,Lo=new na;class kv extends en{constructor(e=new un,t=new Wh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Nu.fromBufferAttribute(t,r-1),Bu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Nu.distanceTo(Bu);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),Lo.radius+=s,e.ray.intersectsSphere(Lo)===!1)return;Fu.copy(r).invert(),el.copy(e.ray).applyMatrix4(Fu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new B,u=new B,h=new B,p=new B,f=this.isLineSegments?2:1,x=n.index,_=n.attributes.position;if(x!==null){const d=Math.max(0,o.start),M=Math.min(x.count,o.start+o.count);for(let y=d,b=M-1;y<b;y+=f){const D=x.getX(y),P=x.getX(y+1);if(c.fromBufferAttribute(_,D),u.fromBufferAttribute(_,P),el.distanceSqToSegment(c,u,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(p);G<e.near||G>e.far||t.push({distance:G,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),M=Math.min(_.count,o.start+o.count);for(let y=d,b=M-1;y<b;y+=f){if(c.fromBufferAttribute(_,y),u.fromBufferAttribute(_,y+1),el.distanceSqToSegment(c,u,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(p);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const zu=new B,Hu=new B;class Vv extends kv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)zu.fromBufferAttribute(t,r),Hu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+zu.distanceTo(Hu);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wv extends On{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],p=n[r+1]-u,f=(o-u)/p;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ae:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new B,r=[],s=[],o=[],a=new B,l=new At;for(let f=0;f<=e;f++){const x=f/e;r[f]=this.getTangentAt(x,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(gn(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,x))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(gn(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],f*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nl extends gi{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new Ae,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*u-f*h+this.aX,c=p*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Xv extends Nl{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bl(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let p=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;p*=u,f*=u,r(o,a,p,f)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Po=new B,tl=new Bl,nl=new Bl,il=new Bl;class Xh extends gi{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Po.subVectors(r[0],r[1]).add(r[0]),c=Po);const h=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Po.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Po),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(h),f),E=Math.pow(h.distanceToSquared(p),f),_=Math.pow(p.distanceToSquared(u),f);E<1e-4&&(E=1),x<1e-4&&(x=E),_<1e-4&&(_=E),tl.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,x,E,_),nl.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,x,E,_),il.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,x,E,_)}else this.curveType==="catmullrom"&&(tl.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),nl.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),il.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set(tl.calc(l),nl.calc(l),il.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gu(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Yv(i,e){const t=1-i;return t*t*e}function $v(i,e){return 2*(1-i)*i*e}function qv(i,e){return i*i*e}function Us(i,e,t,n){return Yv(i,e)+$v(i,t)+qv(i,n)}function jv(i,e){const t=1-i;return t*t*t*e}function Zv(i,e){const t=1-i;return 3*t*t*i*e}function Kv(i,e){return 3*(1-i)*i*i*e}function Jv(i,e){return i*i*i*e}function Os(i,e,t,n,r){return jv(i,e)+Zv(i,t)+Kv(i,n)+Jv(i,r)}class Yh extends gi{constructor(e=new Ae,t=new Ae,n=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ae){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Os(e,r.x,s.x,o.x,a.x),Os(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qv extends gi{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Os(e,r.x,s.x,o.x,a.x),Os(e,r.y,s.y,o.y,a.y),Os(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $h extends gi{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ex extends gi{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qh extends gi{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Us(e,r.x,s.x,o.x),Us(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jh extends gi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Us(e,r.x,s.x,o.x),Us(e,r.y,s.y,o.y),Us(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zh extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Gu(a,l.x,c.x,u.x,h.x),Gu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Ae().fromArray(r))}return this}}var Yo=Object.freeze({__proto__:null,ArcCurve:Xv,CatmullRomCurve3:Xh,CubicBezierCurve:Yh,CubicBezierCurve3:Qv,EllipseCurve:Nl,LineCurve:$h,LineCurve3:ex,QuadraticBezierCurve:qh,QuadraticBezierCurve3:jh,SplineCurve:Zh});class tx extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Yo[r.type]().fromJSON(r))}return this}}class $o extends tx{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new $h(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new qh(this.currentPoint.clone(),new Ae(e,t),new Ae(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Yh(this.currentPoint.clone(),new Ae(e,t),new Ae(n,r),new Ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Zh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Nl(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class In extends un{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],p=[],f=[];let x=0;const E=[],_=n/2;let d=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(p,3)),this.setAttribute("uv",new It(f,2));function M(){const b=new B,D=new B;let P=0;const L=(t-e)/n;for(let G=0;G<=s;G++){const A=[],C=G/s,H=C*(t-e)+e;for(let $=0;$<=r;$++){const he=$/r,F=he*l+a,k=Math.sin(F),q=Math.cos(F);D.x=H*k,D.y=-C*n+_,D.z=H*q,h.push(D.x,D.y,D.z),b.set(k,L,q).normalize(),p.push(b.x,b.y,b.z),f.push(he,1-C),A.push(x++)}E.push(A)}for(let G=0;G<r;G++)for(let A=0;A<s;A++){const C=E[A][G],H=E[A+1][G],$=E[A+1][G+1],he=E[A][G+1];u.push(C,H,he),u.push(H,$,he),P+=6}c.addGroup(d,P,0),d+=P}function y(b){const D=x,P=new Ae,L=new B;let G=0;const A=b===!0?e:t,C=b===!0?1:-1;for(let $=1;$<=r;$++)h.push(0,_*C,0),p.push(0,C,0),f.push(.5,.5),x++;const H=x;for(let $=0;$<=r;$++){const F=$/r*l+a,k=Math.cos(F),q=Math.sin(F);L.x=A*q,L.y=_*C,L.z=A*k,h.push(L.x,L.y,L.z),p.push(0,C,0),P.x=k*.5+.5,P.y=q*.5*C+.5,f.push(P.x,P.y),x++}for(let $=0;$<r;$++){const he=D+$,F=H+$;b===!0?u.push(F,F+1,he):u.push(F+1,F,he),G+=3}c.addGroup(d,G,b===!0?1:2),d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fl extends $o{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new $o().fromJSON(r))}return this}}const nx={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Kh(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,p,f;if(n&&(s=ax(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let x=t;x<r;x+=t)h=i[x],p=i[x+1],h<a&&(a=h),p<l&&(l=p),h>c&&(c=h),p>u&&(u=p);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return ks(s,o,t,a,l,f,0),o}};function Kh(i,e,t,n,r){let s,o;if(r===vx(i,e,t,n)>0)for(s=e;s<t;s+=n)o=ku(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=ku(s,i[s],i[s+1],o);return o&&oa(o,o.next)&&(Ws(o),o=o.next),o}function wr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(oa(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Ws(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ks(i,e,t,n,r,s,o){if(!i)return;!o&&s&&dx(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?rx(i,n,r,s):ix(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ws(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=sx(wr(i),e,t),ks(i,e,t,n,r,s,2)):o===2&&ox(i,e,t,n,r,s):ks(wr(i),e,t,n,r,s,1);break}}}function ix(i){const e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,p=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let x=n.next;for(;x!==e;){if(x.x>=u&&x.x<=p&&x.y>=h&&x.y<=f&&as(r,a,s,l,o,c,x.x,x.y)&&Nt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function rx(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Nt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,p=o.y,f=a<l?a<c?a:c:l<c?l:c,x=u<h?u<p?u:p:h<p?h:p,E=a>l?a>c?a:c:l>c?l:c,_=u>h?u>p?u:p:h>p?h:p,d=vl(f,x,e,t,n),M=vl(E,_,e,t,n);let y=i.prevZ,b=i.nextZ;for(;y&&y.z>=d&&b&&b.z<=M;){if(y.x>=f&&y.x<=E&&y.y>=x&&y.y<=_&&y!==r&&y!==o&&as(a,u,l,h,c,p,y.x,y.y)&&Nt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=E&&b.y>=x&&b.y<=_&&b!==r&&b!==o&&as(a,u,l,h,c,p,b.x,b.y)&&Nt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=d;){if(y.x>=f&&y.x<=E&&y.y>=x&&y.y<=_&&y!==r&&y!==o&&as(a,u,l,h,c,p,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=M;){if(b.x>=f&&b.x<=E&&b.y>=x&&b.y<=_&&b!==r&&b!==o&&as(a,u,l,h,c,p,b.x,b.y)&&Nt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function sx(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!oa(r,s)&&Jh(r,n,n.next,s)&&Vs(r,s)&&Vs(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ws(n),Ws(n.next),n=i=s),n=n.next}while(n!==i);return wr(n)}function ox(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mx(o,a)){let l=Qh(o,a);o=wr(o,o.next),l=wr(l,l.next),ks(o,e,t,n,r,s,0),ks(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function ax(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Kh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(px(c));for(r.sort(lx),s=0;s<r.length;s++)t=cx(r[s],t);return t}function lx(i,e){return i.x-e.x}function cx(i,e){const t=ux(i,e);if(!t)return e;const n=Qh(t,i);return wr(n,n.next),wr(t,t.next)}function ux(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=s&&p>n&&(n=p,r=t.x<t.next.x?t:t.next,p===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&as(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Vs(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&hx(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function hx(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function dx(i,e,t,n){let r=i;do r.z===0&&(r.z=vl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,fx(r)}function fx(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function vl(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function px(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function as(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function mx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gx(i,e)&&(Vs(i,e)&&Vs(e,i)&&_x(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||oa(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function oa(i,e){return i.x===e.x&&i.y===e.y}function Jh(i,e,t,n){const r=Io(Nt(i,e,t)),s=Io(Nt(i,e,n)),o=Io(Nt(t,n,i)),a=Io(Nt(t,n,e));return!!(r!==s&&o!==a||r===0&&Do(i,t,e)||s===0&&Do(i,n,e)||o===0&&Do(t,i,n)||a===0&&Do(t,e,n))}function Do(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Io(i){return i>0?1:i<0?-1:0}function gx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Jh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Vs(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function _x(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Qh(i,e){const t=new xl(i.i,i.x,i.y),n=new xl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ku(i,e,t,n){const r=new xl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ws(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vx(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Ns{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Ns.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Vu(e),Wu(n,e);let o=e.length;t.forEach(Vu);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Wu(n,t[l]);const a=nx.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Vu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Zs extends un{constructor(e=new Fl([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new It(r,3)),this.setAttribute("uv",new It(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:f-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:xx;let y,b=!1,D,P,L,G;d&&(y=d.getSpacedPoints(u),b=!0,p=!1,D=d.computeFrenetFrames(u,!1),P=new B,L=new B,G=new B),p||(_=0,f=0,x=0,E=0);const A=a.extractPoints(c);let C=A.shape;const H=A.holes;if(!Ns.isClockWise(C)){C=C.reverse();for(let O=0,we=H.length;O<we;O++){const re=H[O];Ns.isClockWise(re)&&(H[O]=re.reverse())}}const he=Ns.triangulateShape(C,H),F=C;for(let O=0,we=H.length;O<we;O++){const re=H[O];C=C.concat(re)}function k(O,we,re){return we||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(we,re)}const q=C.length,ae=he.length;function ne(O,we,re){let ye,se,We;const Ue=O.x-we.x,T=O.y-we.y,S=re.x-O.x,V=re.y-O.y,ce=Ue*Ue+T*T,de=Ue*V-T*S;if(Math.abs(de)>Number.EPSILON){const pe=Math.sqrt(ce),ke=Math.sqrt(S*S+V*V),Pe=we.x-T/pe,Ne=we.y+Ue/pe,Ye=re.x-V/ke,et=re.y+S/ke,fe=((Ye-Pe)*V-(et-Ne)*S)/(Ue*V-T*S);ye=Pe+Ue*fe-O.x,se=Ne+T*fe-O.y;const it=ye*ye+se*se;if(it<=2)return new Ae(ye,se);We=Math.sqrt(it/2)}else{let pe=!1;Ue>Number.EPSILON?S>Number.EPSILON&&(pe=!0):Ue<-Number.EPSILON?S<-Number.EPSILON&&(pe=!0):Math.sign(T)===Math.sign(V)&&(pe=!0),pe?(ye=-T,se=Ue,We=Math.sqrt(ce)):(ye=Ue,se=T,We=Math.sqrt(ce/2))}return new Ae(ye/We,se/We)}const ie=[];for(let O=0,we=F.length,re=we-1,ye=O+1;O<we;O++,re++,ye++)re===we&&(re=0),ye===we&&(ye=0),ie[O]=ne(F[O],F[re],F[ye]);const ge=[];let ve,Ie=ie.concat();for(let O=0,we=H.length;O<we;O++){const re=H[O];ve=[];for(let ye=0,se=re.length,We=se-1,Ue=ye+1;ye<se;ye++,We++,Ue++)We===se&&(We=0),Ue===se&&(Ue=0),ve[ye]=ne(re[ye],re[We],re[Ue]);ge.push(ve),Ie=Ie.concat(ve)}for(let O=0;O<_;O++){const we=O/_,re=f*Math.cos(we*Math.PI/2),ye=x*Math.sin(we*Math.PI/2)+E;for(let se=0,We=F.length;se<We;se++){const Ue=k(F[se],ie[se],ye);Be(Ue.x,Ue.y,-re)}for(let se=0,We=H.length;se<We;se++){const Ue=H[se];ve=ge[se];for(let T=0,S=Ue.length;T<S;T++){const V=k(Ue[T],ve[T],ye);Be(V.x,V.y,-re)}}}const Q=x+E;for(let O=0;O<q;O++){const we=p?k(C[O],Ie[O],Q):C[O];b?(L.copy(D.normals[0]).multiplyScalar(we.x),P.copy(D.binormals[0]).multiplyScalar(we.y),G.copy(y[0]).add(L).add(P),Be(G.x,G.y,G.z)):Be(we.x,we.y,0)}for(let O=1;O<=u;O++)for(let we=0;we<q;we++){const re=p?k(C[we],Ie[we],Q):C[we];b?(L.copy(D.normals[O]).multiplyScalar(re.x),P.copy(D.binormals[O]).multiplyScalar(re.y),G.copy(y[O]).add(L).add(P),Be(G.x,G.y,G.z)):Be(re.x,re.y,h/u*O)}for(let O=_-1;O>=0;O--){const we=O/_,re=f*Math.cos(we*Math.PI/2),ye=x*Math.sin(we*Math.PI/2)+E;for(let se=0,We=F.length;se<We;se++){const Ue=k(F[se],ie[se],ye);Be(Ue.x,Ue.y,h+re)}for(let se=0,We=H.length;se<We;se++){const Ue=H[se];ve=ge[se];for(let T=0,S=Ue.length;T<S;T++){const V=k(Ue[T],ve[T],ye);b?Be(V.x,V.y+y[u-1].y,y[u-1].x+re):Be(V.x,V.y,h+re)}}}_e(),Re();function _e(){const O=r.length/3;if(p){let we=0,re=q*we;for(let ye=0;ye<ae;ye++){const se=he[ye];Ke(se[2]+re,se[1]+re,se[0]+re)}we=u+_*2,re=q*we;for(let ye=0;ye<ae;ye++){const se=he[ye];Ke(se[0]+re,se[1]+re,se[2]+re)}}else{for(let we=0;we<ae;we++){const re=he[we];Ke(re[2],re[1],re[0])}for(let we=0;we<ae;we++){const re=he[we];Ke(re[0]+q*u,re[1]+q*u,re[2]+q*u)}}n.addGroup(O,r.length/3-O,0)}function Re(){const O=r.length/3;let we=0;He(F,we),we+=F.length;for(let re=0,ye=H.length;re<ye;re++){const se=H[re];He(se,we),we+=se.length}n.addGroup(O,r.length/3-O,1)}function He(O,we){let re=O.length;for(;--re>=0;){const ye=re;let se=re-1;se<0&&(se=O.length-1);for(let We=0,Ue=u+_*2;We<Ue;We++){const T=q*We,S=q*(We+1),V=we+ye+T,ce=we+se+T,de=we+se+S,pe=we+ye+S;qe(V,ce,de,pe)}}}function Be(O,we,re){l.push(O),l.push(we),l.push(re)}function Ke(O,we,re){Ve(O),Ve(we),Ve(re);const ye=r.length/3,se=M.generateTopUV(n,r,ye-3,ye-2,ye-1);Qe(se[0]),Qe(se[1]),Qe(se[2])}function qe(O,we,re,ye){Ve(O),Ve(we),Ve(ye),Ve(we),Ve(re),Ve(ye);const se=r.length/3,We=M.generateSideWallUV(n,r,se-6,se-3,se-2,se-1);Qe(We[0]),Qe(We[1]),Qe(We[3]),Qe(We[1]),Qe(We[2]),Qe(We[3])}function Ve(O){r.push(l[O*3+0]),r.push(l[O*3+1]),r.push(l[O*3+2])}function Qe(O){s.push(O.x),s.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return yx(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Yo[r.type]().fromJSON(r)),new Zs(n,e.options)}}const xx={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new Ae(s,o),new Ae(a,l),new Ae(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],p=e[r*3],f=e[r*3+1],x=e[r*3+2],E=e[s*3],_=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ae(o,1-l),new Ae(c,1-h),new Ae(p,1-x),new Ae(E,1-d)]:[new Ae(a,1-l),new Ae(u,1-h),new Ae(f,1-x),new Ae(_,1-d)]}};function yx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class aa extends un{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new B,p=new B,f=[],x=[],E=[],_=[];for(let d=0;d<=n;d++){const M=[],y=d/n;let b=0;d===0&&o===0?b=.5/t:d===n&&l===Math.PI&&(b=-.5/t);for(let D=0;D<=t;D++){const P=D/t;h.x=-e*Math.cos(r+P*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+P*s)*Math.sin(o+y*a),x.push(h.x,h.y,h.z),p.copy(h).normalize(),E.push(p.x,p.y,p.z),_.push(P+b,1-y),M.push(c++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){const y=u[d][M+1],b=u[d][M],D=u[d+1][M],P=u[d+1][M+1];(d!==0||o>0)&&f.push(y,b,P),(d!==n-1||l<Math.PI)&&f.push(b,D,P)}this.setIndex(f),this.setAttribute("position",new It(x,3)),this.setAttribute("normal",new It(E,3)),this.setAttribute("uv",new It(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qo extends un{constructor(e=new jh(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new Ae;let u=new B;const h=[],p=[],f=[],x=[];E(),this.setIndex(x),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(p,3)),this.setAttribute("uv",new It(f,2));function E(){for(let y=0;y<t;y++)_(y);_(s===!1?t:0),M(),d()}function _(y){u=e.getPointAt(y/t,u);const b=o.normals[y],D=o.binormals[y];for(let P=0;P<=r;P++){const L=P/r*Math.PI*2,G=Math.sin(L),A=-Math.cos(L);l.x=A*b.x+G*D.x,l.y=A*b.y+G*D.y,l.z=A*b.z+G*D.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=t;y++)for(let b=1;b<=r;b++){const D=(r+1)*(y-1)+(b-1),P=(r+1)*y+(b-1),L=(r+1)*y+b,G=(r+1)*(y-1)+b;x.push(D,P,G),x.push(P,L,G)}}function M(){for(let y=0;y<=t;y++)for(let b=0;b<=r;b++)c.x=y/t,c.y=b/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new qo(new Yo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Zi extends Lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Xu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ex{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){const f=c[h],x=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null}}}const Sx=new Ex;class zl{constructor(e){this.manager=e!==void 0?e:Sx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zl.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class Mx extends Error{constructor(e,t){super(e),this.response=t}}class Ax extends zl{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xu.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:r});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bi[e],h=c.body.getReader(),p=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=p?parseInt(p):0,x=f!==0;let E=0;const _=new ReadableStream({start(d){M();function M(){h.read().then(({done:y,value:b})=>{if(y)d.close();else{E+=b.byteLength;const D=new ProgressEvent("progress",{lengthComputable:x,loaded:E,total:f});for(let P=0,L=u.length;P<L;P++){const G=u[P];G.onProgress&&G.onProgress(D)}d.enqueue(b),M()}})}}});return new Response(_)}else throw new Mx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),p=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(p);return c.arrayBuffer().then(x=>f.decode(x))}}}).then(c=>{Xu.add(e,c);const u=bi[e];delete bi[e];for(let h=0,p=u.length;h<p;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let h=0,p=u.length;h<p;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ed extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class bx extends ed{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const rl=new At,Yu=new B,$u=new B;class wx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yu),$u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($u),t.updateMatrixWorld(),rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Tx extends wx{constructor(){super(new Uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class td extends ed{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Tx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cx{constructor(e,t,n=0,r=1/0){this.ray=new ia(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yl(e,this,n,t),n.sort(qu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)yl(e[r],this,n,t);return n.sort(qu),n}}function qu(i,e){return i.distance-e.distance}function yl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)yl(r[s],e,t,!0)}}class ju{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rx extends Vv{constructor(e=10,t=10,n=4473924,r=8947848){n=new _t(n),r=new _t(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let p=0,f=0,x=-a;p<=t;p++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const E=p===s?n:r;E.toArray(c,f),f+=3,E.toArray(c,f),f+=3,E.toArray(c,f),f+=3,E.toArray(c,f),f+=3}const u=new un;u.setAttribute("position",new It(l,3)),u.setAttribute("color",new It(c,3));const h=new Wh({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);const Zu={type:"change"},sl={type:"start"},Ku={type:"end"},Uo=new ia,Ju=new Gi,Lx=Math.cos(70*Dp.DEG2RAD);class Px extends Rr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",pe),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",pe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Zu),n.update(),s=r.NONE},this.update=function(){const U=new B,me=new Ar().setFromUnitVectors(e.up,new B(0,1,0)),Ce=me.clone().invert(),Ee=new B,Ge=new Ar,dt=new B,vt=2*Math.PI;return function(Te=null){const N=n.object.position;U.copy(N).sub(n.target),U.applyQuaternion(me),a.setFromVector3(U),n.autoRotate&&s===r.NONE&&H(A(Te)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let be=n.minAzimuthAngle,oe=n.maxAzimuthAngle;isFinite(be)&&isFinite(oe)&&(be<-Math.PI?be+=vt:be>Math.PI&&(be-=vt),oe<-Math.PI?oe+=vt:oe>Math.PI&&(oe-=vt),be<=oe?a.theta=Math.max(be,Math.min(oe,a.theta)):a.theta=a.theta>(be+oe)/2?Math.max(be,a.theta):Math.min(oe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?a.radius=ie(a.radius):a.radius=ie(a.radius*c),U.setFromSpherical(a),U.applyQuaternion(Ce),N.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let je=!1;if(n.zoomToCursor&&P){let Fe=null;if(n.object.isPerspectiveCamera){const at=U.length();Fe=ie(at*c);const yt=at-Fe;n.object.position.addScaledVector(b,yt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const at=new B(D.x,D.y,0);at.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),je=!0;const yt=new B(D.x,D.y,0);yt.unproject(n.object),n.object.position.sub(yt).add(at),n.object.updateMatrixWorld(),Fe=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Fe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Fe).add(n.object.position):(Uo.origin.copy(n.object.position),Uo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Uo.direction))<Lx?e.lookAt(n.target):(Ju.setFromNormalAndCoplanarPoint(n.object.up,n.target),Uo.intersectPlane(Ju,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),je=!0);return c=1,P=!1,je||Ee.distanceToSquared(n.object.position)>o||8*(1-Ge.dot(n.object.quaternion))>o||dt.distanceToSquared(n.target)>0?(n.dispatchEvent(Zu),Ee.copy(n.object.position),Ge.copy(n.object.quaternion),dt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ne),n.domElement.removeEventListener("pointerdown",Ue),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",de),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",S),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",pe),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new ju,l=new ju;let c=1;const u=new B,h=new Ae,p=new Ae,f=new Ae,x=new Ae,E=new Ae,_=new Ae,d=new Ae,M=new Ae,y=new Ae,b=new B,D=new Ae;let P=!1;const L=[],G={};function A(U){return U!==null?2*Math.PI/60*n.autoRotateSpeed*U:2*Math.PI/60/60*n.autoRotateSpeed}function C(U){const me=Math.abs(U)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*me)}function H(U){l.theta-=U}function $(U){l.phi-=U}const he=function(){const U=new B;return function(Ce,Ee){U.setFromMatrixColumn(Ee,0),U.multiplyScalar(-Ce),u.add(U)}}(),F=function(){const U=new B;return function(Ce,Ee){n.screenSpacePanning===!0?U.setFromMatrixColumn(Ee,1):(U.setFromMatrixColumn(Ee,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(Ce),u.add(U)}}(),k=function(){const U=new B;return function(Ce,Ee){const Ge=n.domElement;if(n.object.isPerspectiveCamera){const dt=n.object.position;U.copy(dt).sub(n.target);let vt=U.length();vt*=Math.tan(n.object.fov/2*Math.PI/180),he(2*Ce*vt/Ge.clientHeight,n.object.matrix),F(2*Ee*vt/Ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(he(Ce*(n.object.right-n.object.left)/n.object.zoom/Ge.clientWidth,n.object.matrix),F(Ee*(n.object.top-n.object.bottom)/n.object.zoom/Ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ae(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(U,me){if(!n.zoomToCursor)return;P=!0;const Ce=n.domElement.getBoundingClientRect(),Ee=U-Ce.left,Ge=me-Ce.top,dt=Ce.width,vt=Ce.height;D.x=Ee/dt*2-1,D.y=-(Ge/vt)*2+1,b.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function ge(U){h.set(U.clientX,U.clientY)}function ve(U){ne(U.clientX,U.clientX),d.set(U.clientX,U.clientY)}function Ie(U){x.set(U.clientX,U.clientY)}function Q(U){p.set(U.clientX,U.clientY),f.subVectors(p,h).multiplyScalar(n.rotateSpeed);const me=n.domElement;H(2*Math.PI*f.x/me.clientHeight),$(2*Math.PI*f.y/me.clientHeight),h.copy(p),n.update()}function _e(U){M.set(U.clientX,U.clientY),y.subVectors(M,d),y.y>0?q(C(y.y)):y.y<0&&ae(C(y.y)),d.copy(M),n.update()}function Re(U){E.set(U.clientX,U.clientY),_.subVectors(E,x).multiplyScalar(n.panSpeed),k(_.x,_.y),x.copy(E),n.update()}function He(U){ne(U.clientX,U.clientY),U.deltaY<0?ae(C(U.deltaY)):U.deltaY>0&&q(C(U.deltaY)),n.update()}function Be(U){let me=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),me=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),me=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),me=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),me=!0;break}me&&(U.preventDefault(),n.update())}function Ke(U){if(L.length===1)h.set(U.pageX,U.pageY);else{const me=it(U),Ce=.5*(U.pageX+me.x),Ee=.5*(U.pageY+me.y);h.set(Ce,Ee)}}function qe(U){if(L.length===1)x.set(U.pageX,U.pageY);else{const me=it(U),Ce=.5*(U.pageX+me.x),Ee=.5*(U.pageY+me.y);x.set(Ce,Ee)}}function Ve(U){const me=it(U),Ce=U.pageX-me.x,Ee=U.pageY-me.y,Ge=Math.sqrt(Ce*Ce+Ee*Ee);d.set(0,Ge)}function Qe(U){n.enableZoom&&Ve(U),n.enablePan&&qe(U)}function O(U){n.enableZoom&&Ve(U),n.enableRotate&&Ke(U)}function we(U){if(L.length==1)p.set(U.pageX,U.pageY);else{const Ce=it(U),Ee=.5*(U.pageX+Ce.x),Ge=.5*(U.pageY+Ce.y);p.set(Ee,Ge)}f.subVectors(p,h).multiplyScalar(n.rotateSpeed);const me=n.domElement;H(2*Math.PI*f.x/me.clientHeight),$(2*Math.PI*f.y/me.clientHeight),h.copy(p)}function re(U){if(L.length===1)E.set(U.pageX,U.pageY);else{const me=it(U),Ce=.5*(U.pageX+me.x),Ee=.5*(U.pageY+me.y);E.set(Ce,Ee)}_.subVectors(E,x).multiplyScalar(n.panSpeed),k(_.x,_.y),x.copy(E)}function ye(U){const me=it(U),Ce=U.pageX-me.x,Ee=U.pageY-me.y,Ge=Math.sqrt(Ce*Ce+Ee*Ee);M.set(0,Ge),y.set(0,Math.pow(M.y/d.y,n.zoomSpeed)),q(y.y),d.copy(M);const dt=(U.pageX+me.x)*.5,vt=(U.pageY+me.y)*.5;ne(dt,vt)}function se(U){n.enableZoom&&ye(U),n.enablePan&&re(U)}function We(U){n.enableZoom&&ye(U),n.enableRotate&&we(U)}function Ue(U){n.enabled!==!1&&(L.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",S)),Ye(U),U.pointerType==="touch"?ke(U):V(U))}function T(U){n.enabled!==!1&&(U.pointerType==="touch"?Pe(U):ce(U))}function S(U){et(U),L.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",S)),n.dispatchEvent(Ku),s=r.NONE}function V(U){let me;switch(U.button){case 0:me=n.mouseButtons.LEFT;break;case 1:me=n.mouseButtons.MIDDLE;break;case 2:me=n.mouseButtons.RIGHT;break;default:me=-1}switch(me){case Nr.DOLLY:if(n.enableZoom===!1)return;ve(U),s=r.DOLLY;break;case Nr.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;Ie(U),s=r.PAN}else{if(n.enableRotate===!1)return;ge(U),s=r.ROTATE}break;case Nr.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;ge(U),s=r.ROTATE}else{if(n.enablePan===!1)return;Ie(U),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(sl)}function ce(U){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;Q(U);break;case r.DOLLY:if(n.enableZoom===!1)return;_e(U);break;case r.PAN:if(n.enablePan===!1)return;Re(U);break}}function de(U){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(U.preventDefault(),n.dispatchEvent(sl),He(U),n.dispatchEvent(Ku))}function pe(U){n.enabled===!1||n.enablePan===!1||Be(U)}function ke(U){switch(fe(U),L.length){case 1:switch(n.touches.ONE){case Br.ROTATE:if(n.enableRotate===!1)return;Ke(U),s=r.TOUCH_ROTATE;break;case Br.PAN:if(n.enablePan===!1)return;qe(U),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Br.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Qe(U),s=r.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;O(U),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(sl)}function Pe(U){switch(fe(U),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;we(U),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;re(U),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;se(U),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;We(U),n.update();break;default:s=r.NONE}}function Ne(U){n.enabled!==!1&&U.preventDefault()}function Ye(U){L.push(U.pointerId)}function et(U){delete G[U.pointerId];for(let me=0;me<L.length;me++)if(L[me]==U.pointerId){L.splice(me,1);return}}function fe(U){let me=G[U.pointerId];me===void 0&&(me=new Ae,G[U.pointerId]=me),me.set(U.pageX,U.pageY)}function it(U){const me=U.pointerId===L[0]?L[1]:L[0];return G[me]}n.domElement.addEventListener("contextmenu",Ne),n.domElement.addEventListener("pointerdown",Ue),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",de,{passive:!1}),this.update()}}class Dx extends zl{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Ax(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){function t(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,p=u.getUint32(80,!0);if(80+32/8+p*h===u.byteLength)return!0;const x=[115,111,108,105,100];for(let E=0;E<5;E++)if(n(x,u,E))return!1;return!0}function n(c,u,h){for(let p=0,f=c.length;p<f;p++)if(c[p]!==u.getUint8(h+p))return!1;return!0}function r(c){const u=new DataView(c),h=u.getUint32(80,!0);let p,f,x,E=!1,_,d,M,y,b;for(let H=0;H<70;H++)u.getUint32(H,!1)==1129270351&&u.getUint8(H+4)==82&&u.getUint8(H+5)==61&&(E=!0,_=new Float32Array(h*3*3),d=u.getUint8(H+6)/255,M=u.getUint8(H+7)/255,y=u.getUint8(H+8)/255,b=u.getUint8(H+9)/255);const D=84,P=12*4+2,L=new un,G=new Float32Array(h*3*3),A=new Float32Array(h*3*3),C=new _t;for(let H=0;H<h;H++){const $=D+H*P,he=u.getFloat32($,!0),F=u.getFloat32($+4,!0),k=u.getFloat32($+8,!0);if(E){const q=u.getUint16($+48,!0);q&32768?(p=d,f=M,x=y):(p=(q&31)/31,f=(q>>5&31)/31,x=(q>>10&31)/31)}for(let q=1;q<=3;q++){const ae=$+q*12,ne=H*3*3+(q-1)*3;G[ne]=u.getFloat32(ae,!0),G[ne+1]=u.getFloat32(ae+4,!0),G[ne+2]=u.getFloat32(ae+8,!0),A[ne]=he,A[ne+1]=F,A[ne+2]=k,E&&(C.set(p,f,x).convertSRGBToLinear(),_[ne]=C.r,_[ne+1]=C.g,_[ne+2]=C.b)}}return L.setAttribute("position",new Gt(G,3)),L.setAttribute("normal",new Gt(A,3)),E&&(L.setAttribute("color",new Gt(_,3)),L.hasColors=!0,L.alpha=b),L}function s(c){const u=new un,h=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/;let x=0;const E=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,_=new RegExp("vertex"+E+E+E,"g"),d=new RegExp("normal"+E+E+E,"g"),M=[],y=[],b=[],D=new B;let P,L=0,G=0,A=0;for(;(P=h.exec(c))!==null;){G=A;const C=P[0],H=(P=f.exec(C))!==null?P[1]:"";for(b.push(H);(P=p.exec(C))!==null;){let F=0,k=0;const q=P[0];for(;(P=d.exec(q))!==null;)D.x=parseFloat(P[1]),D.y=parseFloat(P[2]),D.z=parseFloat(P[3]),k++;for(;(P=_.exec(q))!==null;)M.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),y.push(D.x,D.y,D.z),F++,A++;k!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+x),F!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+x),x++}const $=G,he=A-G;u.userData.groupNames=b,u.addGroup($,he,L),L++}return u.setAttribute("position",new It(M,3)),u.setAttribute("normal",new It(y,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=a(e);return t(l)?r(l):s(o(e))}}class Ix{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,r=[];let s=0;e.traverse(function(d){if(d.isMesh){const M=d.geometry,y=M.index,b=M.getAttribute("position");s+=y!==null?y.count/3:b.count/3,r.push({object3d:d,geometry:M})}});let o,a=80;if(n===!0){const d=s*2+s*3*4*4+80+4,M=new ArrayBuffer(d);o=new DataView(M),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const l=new B,c=new B,u=new B,h=new B,p=new B,f=new B;for(let d=0,M=r.length;d<M;d++){const y=r[d].object3d,b=r[d].geometry,D=b.index,P=b.getAttribute("position");if(D!==null)for(let L=0;L<D.count;L+=3){const G=D.getX(L+0),A=D.getX(L+1),C=D.getX(L+2);x(G,A,C,P,y)}else for(let L=0;L<P.count;L+=3){const G=L+0,A=L+1,C=L+2;x(G,A,C,P,y)}}return n===!1&&(o+=`endsolid exported
`),o;function x(d,M,y,b,D){l.fromBufferAttribute(b,d),c.fromBufferAttribute(b,M),u.fromBufferAttribute(b,y),D.isSkinnedMesh===!0&&(D.applyBoneTransform(d,l),D.applyBoneTransform(M,c),D.applyBoneTransform(y,u)),l.applyMatrix4(D.matrixWorld),c.applyMatrix4(D.matrixWorld),u.applyMatrix4(D.matrixWorld),E(l,c,u),_(l),_(c),_(u),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function E(d,M,y){h.subVectors(y,M),p.subVectors(d,M),h.cross(p).normalize(),f.copy(h).normalize(),n===!0?(o.setFloat32(a,f.x,!0),a+=4,o.setFloat32(a,f.y,!0),a+=4,o.setFloat32(a,f.z,!0),a+=4):(o+="	facet normal "+f.x+" "+f.y+" "+f.z+`
`,o+=`		outer loop
`)}function _(d){n===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):o+="			vertex "+d.x+" "+d.y+" "+d.z+`
`}}}function Qu(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new un;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let p=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let p=0;p<i.length;++p){const f=i[p].index;for(let x=0;x<f.count;++x)h.push(f.getX(x)+u);u+=i[p].attributes.position.count}l.setIndex(h)}for(const u in s){const h=eh(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){const f=[];for(let E=0;E<o[u].length;++E)f.push(o[u][E][p]);const x=eh(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(x)}}return l}function eh(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.array.length}const o=new e(s);let a=0;for(let c=0;c<i.length;++c)o.set(i[c].array,a),a+=i[c].array.length;const l=new Gt(o,t,n);return r!==void 0&&(l.gpuType=r),l}function Ux(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let o=0;const a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let M=0,y=a.length;M<y;M++){const b=a[M],D=i.attributes[b];l[b]=new Gt(new D.array.constructor(D.count*D.itemSize),D.itemSize,D.normalized);const P=i.morphAttributes[b];P&&(c[b]=new Gt(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized))}const f=e*.5,x=Math.log10(1/e),E=Math.pow(10,x),_=f*E;for(let M=0;M<s;M++){const y=n?n.getX(M):M;let b="";for(let D=0,P=a.length;D<P;D++){const L=a[D],G=i.getAttribute(L),A=G.itemSize;for(let C=0;C<A;C++)b+=`${~~(G[h[C]](y)*E+_)},`}if(b in t)u.push(t[b]);else{for(let D=0,P=a.length;D<P;D++){const L=a[D],G=i.getAttribute(L),A=i.morphAttributes[L],C=G.itemSize,H=l[L],$=c[L];for(let he=0;he<C;he++){const F=h[he],k=p[he];if(H[k](o,G[F](y)),A)for(let q=0,ae=A.length;q<ae;q++)$[q][k](o,A[q][F](y))}}t[b]=o,u.push(o),o++}}const d=i.clone();for(const M in i.attributes){const y=l[M];if(d.setAttribute(M,new Gt(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),M in c)for(let b=0;b<c[M].length;b++){const D=c[M][b];d.morphAttributes[M][b]=new Gt(D.array.slice(0,o*D.itemSize),D.itemSize,D.normalized)}}return d.setIndex(u),d}const Ox="modulepreload",Nx=function(i){return"/"+i},th={},Bx=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=Nx(l),l in th)return;th[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Ox,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((p,f)=>{h.addEventListener("load",p),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var Fx=(()=>{var i=import.meta.url;return async function(e={}){var t,n=e,r,s,o=new Promise((m,v)=>{r=m,s=v}),a=typeof window=="object",l=typeof importScripts=="function",c=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(c){const{createRequire:m}=await Bx(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);var u=m(import.meta.url)}var h=!1;n.setup=function(){if(h)return;h=!0,n.initTBB();function m(z,Y,le=Me=>Me){if(Y)for(let Me of Y)z.push_back(le(Me));return z}function v(z,Y=le=>le){const le=[],Me=z.size();for(let st=0;st<Me;st++)le.push(Y(z.get(st)));return le}function w(z,Y=le=>le){const le=[],Me=z.size();for(let st=0;st<Me;st++){const wt=z.get(st),Xt=wt.size(),Dn=[];for(let zt=0;zt<Xt;zt++)Dn.push(Y(wt.get(zt)));le.push(Dn)}return le}function I(z){return z[0].length<3&&(z=[z]),m(new n.Vector2_vec2,z,Y=>m(new n.Vector_vec2,Y,le=>le instanceof Array?{x:le[0],y:le[1]}:le))}function X(z){for(let Y=0;Y<z.size();Y++)z.get(Y).delete();z.delete()}function J(z){return z[0]instanceof Array?{x:z[0][0],y:z[0][1]}:typeof z[0]=="number"?{x:z[0]||0,y:z[1]||0}:z[0]}function ue(z){return z[0]instanceof Array?{x:z[0][0],y:z[0][1],z:z[0][2]}:typeof z[0]=="number"?{x:z[0]||0,y:z[1]||0,z:z[2]||0}:z[0]}function ee(z){return z=="EvenOdd"?0:z=="NonZero"?1:z=="Negative"?3:2}function xe(z){return z=="Round"?1:z=="Miter"?2:0}const Se=n.CrossSection;function De(z,Y="Positive"){if(z instanceof Se)return z;{const le=I(z),Me=new Se(le,ee(Y));return X(le),Me}}n.CrossSection.prototype.translate=function(...z){return this._Translate(J(z))},n.CrossSection.prototype.scale=function(z){return typeof z=="number"?this._Scale({x:z,y:z}):this._Scale(J([z]))},n.CrossSection.prototype.mirror=function(z){return this._Mirror(J([z]))},n.CrossSection.prototype.warp=function(z){const Y=As(function(Me){const st=ce(Me,"double"),wt=ce(Me+8,"double"),Xt=[st,wt];z(Xt),de(Me,Xt[0],"double"),de(Me+8,Xt[1],"double")},"vi"),le=this._Warp(Y);return bs(Y),le},n.CrossSection.prototype.decompose=function(){const z=this._Decompose(),Y=v(z);return z.delete(),Y},n.CrossSection.prototype.bounds=function(){const z=this._Bounds();return{min:["x","y"].map(Y=>z.min[Y]),max:["x","y"].map(Y=>z.max[Y])}},n.CrossSection.prototype.offset=function(z,Y="Round",le=2,Me=0){return this._Offset(z,xe(Y),le,Me)},n.CrossSection.prototype.simplify=function(z=1e-6){return this._Simplify(z)},n.CrossSection.prototype.extrude=function(z,Y=0,le=0,Me=[1,1],st=!1){Me=J([Me]);const wt=n._Extrude(this._ToPolygons(),z,Y,le,Me);return st?wt.translate([0,0,-z/2]):wt},n.CrossSection.prototype.revolve=function(z=0,Y=360){return n._Revolve(this._ToPolygons(),z,Y)},n.CrossSection.prototype.add=function(z){return this._add(De(z))},n.CrossSection.prototype.subtract=function(z){return this._subtract(De(z))},n.CrossSection.prototype.intersect=function(z){return this._intersect(De(z))},n.CrossSection.prototype.toPolygons=function(){const z=this._ToPolygons(),Y=w(z,le=>[le.x,le.y]);return z.delete(),Y},n.Manifold.prototype.smoothOut=function(z=60,Y=0){return this._SmoothOut(z,Y)},n.Manifold.prototype.warp=function(z){const Y=As(function(st){const wt=ce(st,"double"),Xt=ce(st+8,"double"),Dn=ce(st+16,"double"),zt=[wt,Xt,Dn];z(zt),de(st,zt[0],"double"),de(st+8,zt[1],"double"),de(st+16,zt[2],"double")},"vi"),le=this._Warp(Y);bs(Y);const Me=le.status();if(Me!=="NoError")throw new n.ManifoldError(Me);return le},n.Manifold.prototype.calculateNormals=function(z,Y=60){return this._CalculateNormals(z,Y)},n.Manifold.prototype.setProperties=function(z,Y){const le=this.numProp(),Me=As(function(wt,Xt,Dn){const zt=[];for(let Ht=0;Ht<z;++Ht)zt[Ht]=ce(wt+8*Ht,"double");const Ur=[];for(let Ht=0;Ht<3;++Ht)Ur[Ht]=ce(Xt+8*Ht,"double");const Or=[];for(let Ht=0;Ht<le;++Ht)Or[Ht]=ce(Dn+8*Ht,"double");Y(zt,Ur,Or);for(let Ht=0;Ht<z;++Ht)de(wt+8*Ht,zt[Ht],"double")},"viii"),st=this._SetProperties(z,Me);return bs(Me),st},n.Manifold.prototype.translate=function(...z){return this._Translate(ue(z))},n.Manifold.prototype.rotate=function(z,Y,le){return Array.isArray(z)?this._Rotate(...z):this._Rotate(z,Y||0,le||0)},n.Manifold.prototype.scale=function(z){return typeof z=="number"?this._Scale({x:z,y:z,z}):this._Scale(ue([z]))},n.Manifold.prototype.mirror=function(z){return this._Mirror(ue([z]))},n.Manifold.prototype.trimByPlane=function(z,Y=0){return this._TrimByPlane(ue([z]),Y)},n.Manifold.prototype.slice=function(z=0){const Y=this._Slice(z),le=new Se(Y,ee("Positive"));return X(Y),le},n.Manifold.prototype.project=function(){const z=this._Project(),Y=new Se(z,ee("Positive"));return X(z),Y},n.Manifold.prototype.split=function(z){const Y=this._Split(z),le=v(Y);return Y.delete(),le},n.Manifold.prototype.splitByPlane=function(z,Y=0){const le=this._SplitByPlane(ue([z]),Y),Me=v(le);return le.delete(),Me},n.Manifold.prototype.decompose=function(){const z=this._Decompose(),Y=v(z);return z.delete(),Y},n.Manifold.prototype.boundingBox=function(){const z=this._boundingBox();return{min:["x","y","z"].map(Y=>z.min[Y]),max:["x","y","z"].map(Y=>z.max[Y])}};class rt{constructor({numProp:Y=3,triVerts:le=new Uint32Array,vertProperties:Me=new Float32Array,mergeFromVert:st,mergeToVert:wt,runIndex:Xt,runOriginalID:Dn,faceID:zt,halfedgeTangent:Ur,runTransform:Or}={}){this.numProp=Y,this.triVerts=le,this.vertProperties=Me,this.mergeFromVert=st,this.mergeToVert=wt,this.runIndex=Xt,this.runOriginalID=Dn,this.faceID=zt,this.halfedgeTangent=Ur,this.runTransform=Or}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){const{changed:Y,mesh:le}=n._Merge(this);return Object.assign(this,{...le}),Y}verts(Y){return this.triVerts.subarray(3*Y,3*(Y+1))}position(Y){return this.vertProperties.subarray(this.numProp*Y,this.numProp*Y+3)}extras(Y){return this.vertProperties.subarray(this.numProp*Y+3,this.numProp*(Y+1))}tangent(Y){return this.halfedgeTangent.subarray(4*Y,4*(Y+1))}transform(Y){const le=new Array(16);for(const Me of[0,1,2,3])for(const st of[0,1,2])le[4*Me+st]=this.runTransform[12*Y+3*Me+st];return le[15]=1,le}}n.Mesh=rt,n.Manifold.prototype.getMesh=function(z=-1){return new rt(this._GetMeshJS(z))},n.ManifoldError=function(Y,...le){let Me="Unknown error";switch(Y){case"NonFiniteVertex":Me="Non-finite vertex";break;case"NotManifold":Me="Not manifold";break;case"VertexOutOfBounds":Me="Vertex index out of bounds";break;case"PropertiesWrongLength":Me="Properties have wrong length";break;case"MissingPositionProperties":Me="Less than three properties";break;case"MergeVectorsDifferentLengths":Me="Merge vectors have different lengths";break;case"MergeIndexOutOfBounds":Me="Merge index out of bounds";break;case"TransformWrongLength":Me="Transform vector has wrong length";break;case"RunIndexWrongLength":Me="Run index vector has wrong length";break;case"FaceIDWrongLength":Me="Face ID vector has wrong length";case"InvalidConstruction":Me="Manifold constructed with invalid parameters"}const st=Error.apply(this,[Me,...le]);st.name=this.name="ManifoldError",this.message=st.message,this.stack=st.stack,this.code=Y},n.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:n.ManifoldError,writable:!0,configurable:!0}}),n.CrossSection=function(z,Y="Positive"){const le=I(z),Me=new Se(le,ee(Y));return X(le),Me},n.CrossSection.ofPolygons=function(z,Y="Positive"){return new n.CrossSection(z,Y)},n.CrossSection.square=function(...z){let Y;z.length==0?Y={x:1,y:1}:typeof z[0]=="number"?Y={x:z[0],y:z[0]}:Y=J(z);const le=z[1]||!1;return n._Square(Y,le)},n.CrossSection.circle=function(z,Y=0){return n._Circle(z,Y)};function St(z){return function(...Y){Y.length==1&&(Y=Y[0]);const le=new n.Vector_crossSection;for(const st of Y)le.push_back(De(st));const Me=n["_crossSection"+z](le);return le.delete(),Me}}n.CrossSection.compose=St("Compose"),n.CrossSection.union=St("UnionN"),n.CrossSection.difference=St("DifferenceN"),n.CrossSection.intersection=St("IntersectionN");function Wt(z,Y){m(z,Y,le=>le instanceof Array?{x:le[0],y:le[1]}:le)}n.CrossSection.hull=function(...z){z.length==1&&(z=z[0]);let Y=new n.Vector_vec2;for(const Me of z)if(Me instanceof Se)n._crossSectionCollectVertices(Y,Me);else if(Me instanceof Array&&Me.length==2&&typeof Me[0]=="number")Y.push_back({x:Me[0],y:Me[1]});else if(Me.x)Y.push_back(Me);else{const wt=Me[0].length==2&&typeof Me[0][0]=="number"||Me[0].x?[Me]:Me;for(const Xt of wt)Wt(Y,Xt)}const le=n._crossSectionHullPoints(Y);return Y.delete(),le},n.CrossSection.prototype=Object.create(Se.prototype),Object.defineProperty(n.CrossSection,Symbol.hasInstance,{get:()=>z=>z instanceof Se});const Bt=n.Manifold;n.Manifold=function(z){const Y=new Bt(z),le=Y.status();if(le!=="NoError")throw new n.ManifoldError(le);return Y},n.Manifold.ofMesh=function(z){return new n.Manifold(z)},n.Manifold.tetrahedron=function(){return n._Tetrahedron()},n.Manifold.cube=function(...z){let Y;z.length==0?Y={x:1,y:1,z:1}:typeof z[0]=="number"?Y={x:z[0],y:z[0],z:z[0]}:Y=ue(z);const le=z[1]||!1;return n._Cube(Y,le)},n.Manifold.cylinder=function(z,Y,le=-1,Me=0,st=!1){return n._Cylinder(z,Y,le,Me,st)},n.Manifold.sphere=function(z,Y=0){return n._Sphere(z,Y)},n.Manifold.smooth=function(z,Y=[]){const le=new n.Vector_smoothness;m(le,Y);const Me=n._Smooth(z,le);return le.delete(),Me},n.Manifold.extrude=function(z,Y,le=0,Me=0,st=[1,1],wt=!1){return(z instanceof Se?z:n.CrossSection(z,"Positive")).extrude(Y,le,Me,st,wt)},n.Manifold.revolve=function(z,Y=0,le=360){return(z instanceof Se?z:n.CrossSection(z,"Positive")).revolve(Y,le)},n.Manifold.reserveIDs=function(z){return n._ReserveIDs(z)},n.Manifold.compose=function(z){const Y=new n.Vector_manifold;m(Y,z);const le=n._manifoldCompose(Y);return Y.delete(),le};function Jn(z){return function(...Y){Y.length==1&&(Y=Y[0]);const le=new n.Vector_manifold;for(const st of Y)le.push_back(st);const Me=n["_manifold"+z+"N"](le);return le.delete(),Me}}n.Manifold.union=Jn("Union"),n.Manifold.difference=Jn("Difference"),n.Manifold.intersection=Jn("Intersection"),n.Manifold.levelSet=function(z,Y,le,Me=0,st=-1){const wt={min:{x:Y.min[0],y:Y.min[1],z:Y.min[2]},max:{x:Y.max[0],y:Y.max[1],z:Y.max[2]}},Xt=As(function(zt){const Ur=ce(zt,"double"),Or=ce(zt+8,"double"),Ht=ce(zt+16,"double");return z([Ur,Or,Ht])},"di"),Dn=n._LevelSet(Xt,wt,le,Me,st);return bs(Xt),Dn};function Qn(z,Y){m(z,Y,le=>le instanceof Array?{x:le[0],y:le[1],z:le[2]}:le)}n.Manifold.hull=function(...z){z.length==1&&(z=z[0]);let Y=new n.Vector_vec3;for(const Me of z)Me instanceof Bt?n._manifoldCollectVertices(Y,Me):Me instanceof Array&&Me.length==3&&typeof Me[0]=="number"?Y.push_back({x:Me[0],y:Me[1],z:Me[2]}):Me.x?Y.push_back(Me):Qn(Y,Me);const le=n._manifoldHullPoints(Y);return Y.delete(),le},n.Manifold.prototype=Object.create(Bt.prototype),Object.defineProperty(n.Manifold,Symbol.hasInstance,{get:()=>z=>z instanceof Bt}),n.triangulate=function(z,Y=-1,le=!0){const Me=I(z),st=v(n._Triangulate(Me,Y,le),wt=>[wt[0],wt[1],wt[2]]);return X(Me),st}};var p=Object.assign({},n),f="";function x(m){return n.locateFile?n.locateFile(m,f):f+m}var E,_;if(c){var d=u("fs"),M=u("path");f=u("url").fileURLToPath(new URL("./",import.meta.url)),_=m=>{m=O(m)?new URL(m):M.normalize(m);var v=d.readFileSync(m);return v},E=(m,v=!0)=>(m=O(m)?new URL(m):M.normalize(m),new Promise((w,I)=>{d.readFile(m,v?void 0:"utf8",(X,J)=>{X?I(X):w(v?J.buffer:J)})})),!n.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(a||l)&&(l?f=self.location.href:typeof document<"u"&&document.currentScript&&(f=document.currentScript.src),i&&(f=i),f.startsWith("blob:")?f="":f=f.substr(0,f.replace(/[?#].*/,"").lastIndexOf("/")+1),l&&(_=m=>{var v=new XMLHttpRequest;return v.open("GET",m,!1),v.responseType="arraybuffer",v.send(null),new Uint8Array(v.response)}),E=m=>O(m)?new Promise((v,w)=>{var I=new XMLHttpRequest;I.open("GET",m,!0),I.responseType="arraybuffer",I.onload=()=>{(I.status==200||I.status==0&&I.response)&&w(I.response),v(I.status)},I.onerror=v,I.send(null)}):fetch(m,{credentials:"same-origin"}).then(v=>v.ok?v.arrayBuffer():Promise.reject(new Error(v.status+" : "+v.url))));n.print||console.log.bind(console);var y=n.printErr||console.error.bind(console);Object.assign(n,p),p=null,n.arguments&&n.arguments,n.thisProgram&&n.thisProgram,n.quit&&n.quit;var b;n.wasmBinary&&(b=n.wasmBinary);var D,P=!1,L,G,A,C,H,$,he,F;function k(){var m=D.buffer;n.HEAP8=L=new Int8Array(m),n.HEAP16=A=new Int16Array(m),n.HEAPU8=G=new Uint8Array(m),n.HEAPU16=C=new Uint16Array(m),n.HEAP32=H=new Int32Array(m),n.HEAPU32=$=new Uint32Array(m),n.HEAPF32=he=new Float32Array(m),n.HEAPF64=F=new Float64Array(m)}var q=[],ae=[],ne=[];function ie(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)Ie(n.preRun.shift());V(q)}function ge(){V(ae)}function ve(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)_e(n.postRun.shift());V(ne)}function Ie(m){q.unshift(m)}function Q(m){ae.unshift(m)}function _e(m){ne.unshift(m)}var Re=0,He=null;function Be(m){var v;Re++,(v=n.monitorRunDependencies)==null||v.call(n,Re)}function Ke(m){var w;if(Re--,(w=n.monitorRunDependencies)==null||w.call(n,Re),Re==0&&He){var v=He;He=null,v()}}function qe(m){var w;(w=n.onAbort)==null||w.call(n,m),m="Aborted("+m+")",y(m),P=!0,m+=". Build with -sASSERTIONS for more info.";var v=new WebAssembly.RuntimeError(m);throw s(v),v}var Ve="data:application/octet-stream;base64,",Qe=m=>m.startsWith(Ve),O=m=>m.startsWith("file://");function we(){if(n.locateFile){var m="manifold.wasm";return Qe(m)?m:x(m)}return new URL("/assets/manifold-ldiO02fT.wasm",import.meta.url).href}var re;function ye(m){if(m==re&&b)return new Uint8Array(b);if(_)return _(m);throw"both async and sync fetching of the wasm failed"}function se(m){return b?Promise.resolve().then(()=>ye(m)):E(m).then(v=>new Uint8Array(v),()=>ye(m))}function We(m,v,w){return se(m).then(I=>WebAssembly.instantiate(I,v)).then(w,I=>{y(`failed to asynchronously prepare wasm: ${I}`),qe(I)})}function Ue(m,v,w,I){return!m&&typeof WebAssembly.instantiateStreaming=="function"&&!Qe(v)&&!O(v)&&!c&&typeof fetch=="function"?fetch(v,{credentials:"same-origin"}).then(X=>{var J=WebAssembly.instantiateStreaming(X,w);return J.then(I,function(ue){return y(`wasm streaming compile failed: ${ue}`),y("falling back to ArrayBuffer instantiation"),We(v,w,I)})}):We(v,w,I)}function T(){return{a:Lf}}function S(){var m=T();function v(I,X){return Kn=I.exports,Kn=Pf(Kn),D=Kn.J,k(),ai=Kn.M,Q(Kn.K),Ke(),Kn}Be();function w(I){v(I.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(m,v)}catch(I){y(`Module.instantiateWasm callback failed with error: ${I}`),s(I)}return re||(re=we()),Ue(b,re,m,w).catch(s),{}}var V=m=>{for(;m.length>0;)m.shift()(n)};function ce(m,v="i8"){switch(v.endsWith("*")&&(v="*"),v){case"i1":return L[m>>>0];case"i8":return L[m>>>0];case"i16":return A[m>>>1>>>0];case"i32":return H[m>>>2>>>0];case"i64":qe("to do getValue(i64) use WASM_BIGINT");case"float":return he[m>>>2>>>0];case"double":return F[m>>>3>>>0];case"*":return $[m>>>2>>>0];default:qe(`invalid type for getValue: ${v}`)}}n.noExitRuntime;function de(m,v,w="i8"){switch(w.endsWith("*")&&(w="*"),w){case"i1":L[m>>>0]=v;break;case"i8":L[m>>>0]=v;break;case"i16":A[m>>>1>>>0]=v;break;case"i32":H[m>>>2>>>0]=v;break;case"i64":qe("to do setValue(i64) use WASM_BIGINT");case"float":he[m>>>2>>>0]=v;break;case"double":F[m>>>3>>>0]=v;break;case"*":$[m>>>2>>>0]=v;break;default:qe(`invalid type for setValue: ${w}`)}}class pe{constructor(v){this.excPtr=v,this.ptr=v-24}set_type(v){$[this.ptr+4>>>2>>>0]=v}get_type(){return $[this.ptr+4>>>2>>>0]}set_destructor(v){$[this.ptr+8>>>2>>>0]=v}get_destructor(){return $[this.ptr+8>>>2>>>0]}set_caught(v){v=v?1:0,L[this.ptr+12>>>0]=v}get_caught(){return L[this.ptr+12>>>0]!=0}set_rethrown(v){v=v?1:0,L[this.ptr+13>>>0]=v}get_rethrown(){return L[this.ptr+13>>>0]!=0}init(v,w){this.set_adjusted_ptr(0),this.set_type(v),this.set_destructor(w)}set_adjusted_ptr(v){$[this.ptr+16>>>2>>>0]=v}get_adjusted_ptr(){return $[this.ptr+16>>>2>>>0]}get_exception_ptr(){var v=fc(this.get_type());if(v)return $[this.excPtr>>>2>>>0];var w=this.get_adjusted_ptr();return w!==0?w:this.excPtr}}var ke=0;function Pe(m,v,w){m>>>=0,v>>>=0,w>>>=0;var I=new pe(m);throw I.init(v,w),ke=m,ke}var Ne=()=>{qe("")},Ye={},et=m=>{for(;m.length;){var v=m.pop(),w=m.pop();w(v)}};function fe(m){return this.fromWireType($[m>>>2>>>0])}var it={},U={},me={},Ce,Ee=m=>{throw new Ce(m)},Ge=(m,v,w)=>{m.forEach(function(ee){me[ee]=v});function I(ee){var xe=w(ee);xe.length!==m.length&&Ee("Mismatched type converter count");for(var Se=0;Se<m.length;++Se)Fe(m[Se],xe[Se])}var X=new Array(v.length),J=[],ue=0;v.forEach((ee,xe)=>{U.hasOwnProperty(ee)?X[xe]=U[ee]:(J.push(ee),it.hasOwnProperty(ee)||(it[ee]=[]),it[ee].push(()=>{X[xe]=U[ee],++ue,ue===J.length&&I(X)}))}),J.length===0&&I(X)},dt=function(m){m>>>=0;var v=Ye[m];delete Ye[m];var w=v.rawConstructor,I=v.rawDestructor,X=v.fields,J=X.map(ue=>ue.getterReturnType).concat(X.map(ue=>ue.setterArgumentType));Ge([m],J,ue=>{var ee={};return X.forEach((xe,Se)=>{var De=xe.fieldName,rt=ue[Se],St=xe.getter,Wt=xe.getterContext,Bt=ue[Se+X.length],Jn=xe.setter,Qn=xe.setterContext;ee[De]={read:z=>rt.fromWireType(St(Wt,z)),write:(z,Y)=>{var le=[];Jn(Qn,z,Bt.toWireType(le,Y)),et(le)}}}),[{name:v.name,fromWireType:xe=>{var Se={};for(var De in ee)Se[De]=ee[De].read(xe);return I(xe),Se},toWireType:(xe,Se)=>{for(var De in ee)if(!(De in Se))throw new TypeError(`Missing field: "${De}"`);var rt=w();for(De in ee)ee[De].write(rt,Se[De]);return xe!==null&&xe.push(I,rt),rt},argPackAdvance:at,readValueFromPointer:fe,destructorFunction:I}]})};function vt(m,v,w,I,X){}var ut=()=>{for(var m=new Array(256),v=0;v<256;++v)m[v]=String.fromCharCode(v);Te=m},Te,N=m=>{for(var v="",w=m;G[w>>>0];)v+=Te[G[w++>>>0]];return v},be,oe=m=>{throw new be(m)};function je(m,v,w={}){var I=v.name;if(m||oe(`type "${I}" must have a positive integer typeid pointer`),U.hasOwnProperty(m)){if(w.ignoreDuplicateRegistrations)return;oe(`Cannot register type '${I}' twice`)}if(U[m]=v,delete me[m],it.hasOwnProperty(m)){var X=it[m];delete it[m],X.forEach(J=>J())}}function Fe(m,v,w={}){if(!("argPackAdvance"in v))throw new TypeError("registerType registeredInstance requires argPackAdvance");return je(m,v,w)}var at=8;function yt(m,v,w,I){m>>>=0,v>>>=0,v=N(v),Fe(m,{name:v,fromWireType:function(X){return!!X},toWireType:function(X,J){return J?w:I},argPackAdvance:at,readValueFromPointer:function(X){return this.fromWireType(G[X>>>0])},destructorFunction:null})}var kt=m=>({count:m.count,deleteScheduled:m.deleteScheduled,preservePointerOnDelete:m.preservePointerOnDelete,ptr:m.ptr,ptrType:m.ptrType,smartPtr:m.smartPtr,smartPtrType:m.smartPtrType}),Kt=m=>{function v(w){return w.$$.ptrType.registeredClass.name}oe(v(m)+" instance already deleted")},Mt=!1,rn=m=>{},kn=m=>{m.smartPtr?m.smartPtrType.rawDestructor(m.smartPtr):m.ptrType.registeredClass.rawDestructor(m.ptr)},xs=m=>{m.count.value-=1;var v=m.count.value===0;v&&kn(m)},Js=(m,v,w)=>{if(v===w)return m;if(w.baseClass===void 0)return null;var I=Js(m,v,w.baseClass);return I===null?null:w.downcast(I)},er={},Qs=()=>Object.keys(R).length,Pr=()=>{var m=[];for(var v in R)R.hasOwnProperty(v)&&m.push(R[v]);return m},Ui=[],Dr=()=>{for(;Ui.length;){var m=Ui.pop();m.$$.deleteScheduled=!1,m.delete()}},tr,da=m=>{tr=m,Ui.length&&tr&&tr(Dr)},fa=()=>{n.getInheritedInstanceCount=Qs,n.getLiveInheritedInstances=Pr,n.flushPendingDeletes=Dr,n.setDelayFunction=da},R={},W=(m,v)=>{for(v===void 0&&oe("ptr should not be undefined");m.baseClass;)v=m.upcast(v),m=m.baseClass;return v},Z=(m,v)=>(v=W(m,v),R[v]),K=(m,v)=>{(!v.ptrType||!v.ptr)&&Ee("makeClassHandle requires ptr and ptrType");var w=!!v.smartPtrType,I=!!v.smartPtr;return w!==I&&Ee("Both smartPtrType and smartPtr must be specified"),v.count={value:1},Oe(Object.create(m,{$$:{value:v,writable:!0}}))};function j(m){var v=this.getPointee(m);if(!v)return this.destructor(m),null;var w=Z(this.registeredClass,v);if(w!==void 0){if(w.$$.count.value===0)return w.$$.ptr=v,w.$$.smartPtr=m,w.clone();var I=w.clone();return this.destructor(m),I}function X(){return this.isSmartPointer?K(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:v,smartPtrType:this,smartPtr:m}):K(this.registeredClass.instancePrototype,{ptrType:this,ptr:m})}var J=this.registeredClass.getActualType(v),ue=er[J];if(!ue)return X.call(this);var ee;this.isConst?ee=ue.constPointerType:ee=ue.pointerType;var xe=Js(v,this.registeredClass,ee.registeredClass);return xe===null?X.call(this):this.isSmartPointer?K(ee.registeredClass.instancePrototype,{ptrType:ee,ptr:xe,smartPtrType:this,smartPtr:m}):K(ee.registeredClass.instancePrototype,{ptrType:ee,ptr:xe})}var Oe=m=>typeof FinalizationRegistry>"u"?(Oe=v=>v,m):(Mt=new FinalizationRegistry(v=>{xs(v.$$)}),Oe=v=>{var w=v.$$,I=!!w.smartPtr;if(I){var X={$$:w};Mt.register(v,X,v)}return v},rn=v=>Mt.unregister(v),Oe(m)),Xe=()=>{Object.assign($e.prototype,{isAliasOf(m){if(!(this instanceof $e)||!(m instanceof $e))return!1;var v=this.$$.ptrType.registeredClass,w=this.$$.ptr;m.$$=m.$$;for(var I=m.$$.ptrType.registeredClass,X=m.$$.ptr;v.baseClass;)w=v.upcast(w),v=v.baseClass;for(;I.baseClass;)X=I.upcast(X),I=I.baseClass;return v===I&&w===X},clone(){if(this.$$.ptr||Kt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var m=Oe(Object.create(Object.getPrototypeOf(this),{$$:{value:kt(this.$$)}}));return m.$$.count.value+=1,m.$$.deleteScheduled=!1,m},delete(){this.$$.ptr||Kt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&oe("Object already scheduled for deletion"),rn(this),xs(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Kt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&oe("Object already scheduled for deletion"),Ui.push(this),Ui.length===1&&tr&&tr(Dr),this.$$.deleteScheduled=!0,this}})};function $e(){}var Ze=(m,v)=>Object.defineProperty(v,"name",{value:m}),ct=(m,v,w)=>{if(m[v].overloadTable===void 0){var I=m[v];m[v]=function(...X){return m[v].overloadTable.hasOwnProperty(X.length)||oe(`Function '${w}' called with an invalid number of arguments (${X.length}) - expects one of (${m[v].overloadTable})!`),m[v].overloadTable[X.length].apply(this,X)},m[v].overloadTable=[],m[v].overloadTable[I.argCount]=I}},nt=(m,v,w)=>{n.hasOwnProperty(m)?((w===void 0||n[m].overloadTable!==void 0&&n[m].overloadTable[w]!==void 0)&&oe(`Cannot register public name '${m}' twice`),ct(n,m,m),n.hasOwnProperty(w)&&oe(`Cannot register multiple overloads of a function with the same number of arguments (${w})!`),n[m].overloadTable[w]=v):(n[m]=v,w!==void 0&&(n[m].numArguments=w))},lt=48,Ut=57,bn=m=>{if(m===void 0)return"_unknown";m=m.replace(/[^a-zA-Z0-9_]/g,"$");var v=m.charCodeAt(0);return v>=lt&&v<=Ut?`_${m}`:m};function Vt(m,v,w,I,X,J,ue,ee){this.name=m,this.constructor=v,this.instancePrototype=w,this.rawDestructor=I,this.baseClass=X,this.getActualType=J,this.upcast=ue,this.downcast=ee,this.pureVirtualFunctions=[]}var Bn=(m,v,w)=>{for(;v!==w;)v.upcast||oe(`Expected null or instance of ${w.name}, got an instance of ${v.name}`),m=v.upcast(m),v=v.baseClass;return m};function Ct(m,v){if(v===null)return this.isReference&&oe(`null is not a valid ${this.name}`),0;v.$$||oe(`Cannot pass "${va(v)}" as a ${this.name}`),v.$$.ptr||oe(`Cannot pass deleted object as a pointer of type ${this.name}`);var w=v.$$.ptrType.registeredClass,I=Bn(v.$$.ptr,w,this.registeredClass);return I}function ft(m,v){var w;if(v===null)return this.isReference&&oe(`null is not a valid ${this.name}`),this.isSmartPointer?(w=this.rawConstructor(),m!==null&&m.push(this.rawDestructor,w),w):0;(!v||!v.$$)&&oe(`Cannot pass "${va(v)}" as a ${this.name}`),v.$$.ptr||oe(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&v.$$.ptrType.isConst&&oe(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);var I=v.$$.ptrType.registeredClass;if(w=Bn(v.$$.ptr,I,this.registeredClass),this.isSmartPointer)switch(v.$$.smartPtr===void 0&&oe("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:v.$$.smartPtrType===this?w=v.$$.smartPtr:oe(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:w=v.$$.smartPtr;break;case 2:if(v.$$.smartPtrType===this)w=v.$$.smartPtr;else{var X=v.clone();w=this.rawShare(w,sn.toHandle(()=>X.delete())),m!==null&&m.push(this.rawDestructor,w)}break;default:oe("Unsupporting sharing policy")}return w}function ys(m,v){if(v===null)return this.isReference&&oe(`null is not a valid ${this.name}`),0;v.$$||oe(`Cannot pass "${va(v)}" as a ${this.name}`),v.$$.ptr||oe(`Cannot pass deleted object as a pointer of type ${this.name}`),v.$$.ptrType.isConst&&oe(`Cannot convert argument of type ${v.$$.ptrType.name} to parameter type ${this.name}`);var w=v.$$.ptrType.registeredClass,I=Bn(v.$$.ptr,w,this.registeredClass);return I}var Pt=()=>{Object.assign(Vn.prototype,{getPointee(m){return this.rawGetPointee&&(m=this.rawGetPointee(m)),m},destructor(m){var v;(v=this.rawDestructor)==null||v.call(this,m)},argPackAdvance:at,readValueFromPointer:fe,fromWireType:j})};function Vn(m,v,w,I,X,J,ue,ee,xe,Se,De){this.name=m,this.registeredClass=v,this.isReference=w,this.isConst=I,this.isSmartPointer=X,this.pointeeType=J,this.sharingPolicy=ue,this.rawGetPointee=ee,this.rawConstructor=xe,this.rawShare=Se,this.rawDestructor=De,!X&&v.baseClass===void 0?I?(this.toWireType=Ct,this.destructorFunction=null):(this.toWireType=ys,this.destructorFunction=null):this.toWireType=ft}var Es=(m,v,w)=>{n.hasOwnProperty(m)||Ee("Replacing nonexistent public symbol"),n[m].overloadTable!==void 0&&w!==void 0?n[m].overloadTable[w]=v:(n[m]=v,n[m].argCount=w)},nr=(m,v,w)=>{m=m.replace(/p/g,"i");var I=n["dynCall_"+m];return I(v,...w)},ai,Ft=m=>ai.get(m),_i=(m,v,w=[])=>{if(m.includes("j"))return nr(m,v,w);var I=Ft(v)(...w);return m[0]=="p"?I>>>0:I},Ir=(m,v)=>(...w)=>_i(m,v,w),Dt=(m,v)=>{m=N(m);function w(){return m.includes("j")||m.includes("p")?Ir(m,v):Ft(v)}var I=w();return typeof I!="function"&&oe(`unknown function pointer with signature ${m}: ${v}`),I},Ss=(m,v)=>{var w=Ze(v,function(I){this.name=v,this.message=I;var X=new Error(I).stack;X!==void 0&&(this.stack=this.toString()+`
`+X.replace(/^Error(:[^\n]*)?\n/,""))});return w.prototype=Object.create(m.prototype),w.prototype.constructor=w,w.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},w},eo,Ms=m=>{var v=dc(m),w=N(v);return xi(v),w},to=(m,v)=>{var w=[],I={};function X(J){if(!I[J]&&!U[J]){if(me[J]){me[J].forEach(X);return}w.push(J),I[J]=!0}}throw v.forEach(X),new eo(`${m}: `+w.map(Ms).join([", "]))};function wd(m,v,w,I,X,J,ue,ee,xe,Se,De,rt,St){m>>>=0,v>>>=0,w>>>=0,I>>>=0,X>>>=0,J>>>=0,ue>>>=0,ee>>>=0,xe>>>=0,Se>>>=0,De>>>=0,rt>>>=0,St>>>=0,De=N(De),J=Dt(X,J),ee&&(ee=Dt(ue,ee)),Se&&(Se=Dt(xe,Se)),St=Dt(rt,St);var Wt=bn(De);nt(Wt,function(){to(`Cannot construct ${De} due to unbound types`,[I])}),Ge([m,v,w],I?[I]:[],Bt=>{var Xt;Bt=Bt[0];var Jn,Qn;I?(Jn=Bt.registeredClass,Qn=Jn.instancePrototype):Qn=$e.prototype;var z=Ze(De,function(...Dn){if(Object.getPrototypeOf(this)!==Y)throw new be("Use 'new' to construct "+De);if(le.constructor_body===void 0)throw new be(De+" has no accessible constructor");var zt=le.constructor_body[Dn.length];if(zt===void 0)throw new be(`Tried to invoke ctor of ${De} with invalid number of parameters (${Dn.length}) - expected (${Object.keys(le.constructor_body).toString()}) parameters instead!`);return zt.apply(this,Dn)}),Y=Object.create(Qn,{constructor:{value:z}});z.prototype=Y;var le=new Vt(De,z,Y,St,Jn,J,ee,Se);le.baseClass&&((Xt=le.baseClass).__derivedClasses??(Xt.__derivedClasses=[]),le.baseClass.__derivedClasses.push(le));var Me=new Vn(De,le,!0,!1,!1),st=new Vn(De+"*",le,!1,!1,!1),wt=new Vn(De+" const*",le,!1,!0,!1);return er[m]={pointerType:st,constPointerType:wt},Es(Wt,z),[Me,st,wt]})}var pa=(m,v)=>{for(var w=[],I=0;I<m;I++)w.push($[v+I*4>>>2>>>0]);return w};function ic(m){for(var v=1;v<m.length;++v)if(m[v]!==null&&m[v].destructorFunction===void 0)return!0;return!1}function rc(m,v){if(!(m instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof m} which is not a function`);var w=Ze(m.name||"unknownFunctionName",function(){});w.prototype=m.prototype;var I=new w,X=m.apply(I,v);return X instanceof Object?X:I}function Td(m,v,w,I){for(var X=ic(m),J=m.length,ue="",ee="",xe=0;xe<J-2;++xe)ue+=(xe!==0?", ":"")+"arg"+xe,ee+=(xe!==0?", ":"")+"arg"+xe+"Wired";var Se=`
        return function (${ue}) {
        if (arguments.length !== ${J-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${J-2}');
        }`;X&&(Se+=`var destructors = [];
`);var De=X?"destructors":"null",rt=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];v&&(Se+="var thisWired = classParam['toWireType']("+De+`, this);
`);for(var xe=0;xe<J-2;++xe)Se+="var arg"+xe+"Wired = argType"+xe+"['toWireType']("+De+", arg"+xe+`);
`,rt.push("argType"+xe);if(v&&(ee="thisWired"+(ee.length>0?", ":"")+ee),Se+=(w||I?"var rv = ":"")+"invoker(fn"+(ee.length>0?", ":"")+ee+`);
`,X)Se+=`runDestructors(destructors);
`;else for(var xe=v?1:2;xe<m.length;++xe){var St=xe===1?"thisWired":"arg"+(xe-2)+"Wired";m[xe].destructorFunction!==null&&(Se+=`${St}_dtor(${St});
`,rt.push(`${St}_dtor`))}return w&&(Se+=`var ret = retType['fromWireType'](rv);
return ret;
`),Se+=`}
`,[rt,Se]}function ma(m,v,w,I,X,J){var ue=v.length;ue<2&&oe("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var ee=v[1]!==null&&w!==null,xe=ic(v),Se=v[0].name!=="void",De=[m,oe,I,X,et,v[0],v[1]],rt=0;rt<ue-2;++rt)De.push(v[rt+2]);if(!xe)for(var rt=ee?1:2;rt<v.length;++rt)v[rt].destructorFunction!==null&&De.push(v[rt].destructorFunction);let[St,Wt]=Td(v,ee,Se,J);St.push(Wt);var Bt=rc(Function,St)(...De);return Ze(m,Bt)}var Cd=function(m,v,w,I,X,J){m>>>=0,w>>>=0,I>>>=0,X>>>=0,J>>>=0;var ue=pa(v,w);X=Dt(I,X),Ge([],[m],ee=>{ee=ee[0];var xe=`constructor ${ee.name}`;if(ee.registeredClass.constructor_body===void 0&&(ee.registeredClass.constructor_body=[]),ee.registeredClass.constructor_body[v-1]!==void 0)throw new be(`Cannot register multiple constructors with identical number of parameters (${v-1}) for class '${ee.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return ee.registeredClass.constructor_body[v-1]=()=>{to(`Cannot construct ${ee.name} due to unbound types`,ue)},Ge([],ue,Se=>(Se.splice(1,0,null),ee.registeredClass.constructor_body[v-1]=ma(xe,Se,null,X,J),[])),[]})},sc=m=>{m=m.trim();const v=m.indexOf("(");return v!==-1?m.substr(0,v):m},Rd=function(m,v,w,I,X,J,ue,ee,xe){m>>>=0,v>>>=0,I>>>=0,X>>>=0,J>>>=0,ue>>>=0;var Se=pa(w,I);v=N(v),v=sc(v),J=Dt(X,J),Ge([],[m],De=>{De=De[0];var rt=`${De.name}.${v}`;v.startsWith("@@")&&(v=Symbol[v.substring(2)]),ee&&De.registeredClass.pureVirtualFunctions.push(v);function St(){to(`Cannot call ${rt} due to unbound types`,Se)}var Wt=De.registeredClass.instancePrototype,Bt=Wt[v];return Bt===void 0||Bt.overloadTable===void 0&&Bt.className!==De.name&&Bt.argCount===w-2?(St.argCount=w-2,St.className=De.name,Wt[v]=St):(ct(Wt,v,rt),Wt[v].overloadTable[w-2]=St),Ge([],Se,Jn=>{var Qn=ma(rt,Jn,De,J,ue,xe);return Wt[v].overloadTable===void 0?(Qn.argCount=w-2,Wt[v]=Qn):Wt[v].overloadTable[w-2]=Qn,[]}),[]})},ga=[],vi=[];function _a(m){m>>>=0,m>9&&--vi[m+1]===0&&(vi[m]=void 0,ga.push(m))}var Ld=()=>vi.length/2-5-ga.length,Pd=()=>{vi.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=Ld},sn={toValue:m=>(m||oe("Cannot use deleted val. handle = "+m),vi[m]),toHandle:m=>{switch(m){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const v=ga.pop()||vi.length;return vi[v]=m,vi[v+1]=1,v}}}},Dd={name:"emscripten::val",fromWireType:m=>{var v=sn.toValue(m);return _a(m),v},toWireType:(m,v)=>sn.toHandle(v),argPackAdvance:at,readValueFromPointer:fe,destructorFunction:null};function oc(m){return m>>>=0,Fe(m,Dd)}var Id=(m,v,w)=>{switch(v){case 1:return w?function(I){return this.fromWireType(L[I>>>0])}:function(I){return this.fromWireType(G[I>>>0])};case 2:return w?function(I){return this.fromWireType(A[I>>>1>>>0])}:function(I){return this.fromWireType(C[I>>>1>>>0])};case 4:return w?function(I){return this.fromWireType(H[I>>>2>>>0])}:function(I){return this.fromWireType($[I>>>2>>>0])};default:throw new TypeError(`invalid integer width (${v}): ${m}`)}};function Ud(m,v,w,I){m>>>=0,v>>>=0,w>>>=0,v=N(v);function X(){}X.values={},Fe(m,{name:v,constructor:X,fromWireType:function(J){return this.constructor.values[J]},toWireType:(J,ue)=>ue.value,argPackAdvance:at,readValueFromPointer:Id(v,w,I),destructorFunction:null}),nt(v,X)}var no=(m,v)=>{var w=U[m];return w===void 0&&oe(`${v} has unknown type ${Ms(m)}`),w};function Od(m,v,w){m>>>=0,v>>>=0;var I=no(m,"enum");v=N(v);var X=I.constructor,J=Object.create(I.constructor.prototype,{value:{value:w},constructor:{value:Ze(`${I.name}_${v}`,function(){})}});X.values[w]=J,X[v]=J}var va=m=>{if(m===null)return"null";var v=typeof m;return v==="object"||v==="array"||v==="function"?m.toString():""+m},Nd=(m,v)=>{switch(v){case 4:return function(w){return this.fromWireType(he[w>>>2>>>0])};case 8:return function(w){return this.fromWireType(F[w>>>3>>>0])};default:throw new TypeError(`invalid float width (${v}): ${m}`)}},Bd=function(m,v,w){m>>>=0,v>>>=0,w>>>=0,v=N(v),Fe(m,{name:v,fromWireType:I=>I,toWireType:(I,X)=>X,argPackAdvance:at,readValueFromPointer:Nd(v,w),destructorFunction:null})};function Fd(m,v,w,I,X,J,ue){m>>>=0,w>>>=0,I>>>=0,X>>>=0,J>>>=0;var ee=pa(v,w);m=N(m),m=sc(m),X=Dt(I,X),nt(m,function(){to(`Cannot call ${m} due to unbound types`,ee)},v-1),Ge([],ee,xe=>{var Se=[xe[0],null].concat(xe.slice(1));return Es(m,ma(m,Se,null,X,J,ue),v-1),[]})}var zd=(m,v,w)=>{switch(v){case 1:return w?I=>L[I>>>0]:I=>G[I>>>0];case 2:return w?I=>A[I>>>1>>>0]:I=>C[I>>>1>>>0];case 4:return w?I=>H[I>>>2>>>0]:I=>$[I>>>2>>>0];default:throw new TypeError(`invalid integer width (${v}): ${m}`)}};function Hd(m,v,w,I,X){m>>>=0,v>>>=0,w>>>=0,v=N(v);var J=De=>De;if(I===0){var ue=32-8*w;J=De=>De<<ue>>>ue}var ee=v.includes("unsigned"),xe=(De,rt)=>{},Se;ee?Se=function(De,rt){return xe(rt,this.name),rt>>>0}:Se=function(De,rt){return xe(rt,this.name),rt},Fe(m,{name:v,fromWireType:J,toWireType:Se,argPackAdvance:at,readValueFromPointer:zd(v,w,I!==0),destructorFunction:null})}function Gd(m,v,w){m>>>=0,w>>>=0;var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],X=I[v];function J(ue){var ee=$[ue>>>2>>>0],xe=$[ue+4>>>2>>>0];return new X(L.buffer,xe,ee)}w=N(w),Fe(m,{name:w,fromWireType:J,argPackAdvance:at,readValueFromPointer:J},{ignoreDuplicateRegistrations:!0})}function kd(m,v){m>>>=0,oc(m)}var Vd=(m,v,w,I)=>{if(w>>>=0,!(I>0))return 0;for(var X=w,J=w+I-1,ue=0;ue<m.length;++ue){var ee=m.charCodeAt(ue);if(ee>=55296&&ee<=57343){var xe=m.charCodeAt(++ue);ee=65536+((ee&1023)<<10)|xe&1023}if(ee<=127){if(w>=J)break;v[w++>>>0]=ee}else if(ee<=2047){if(w+1>=J)break;v[w++>>>0]=192|ee>>6,v[w++>>>0]=128|ee&63}else if(ee<=65535){if(w+2>=J)break;v[w++>>>0]=224|ee>>12,v[w++>>>0]=128|ee>>6&63,v[w++>>>0]=128|ee&63}else{if(w+3>=J)break;v[w++>>>0]=240|ee>>18,v[w++>>>0]=128|ee>>12&63,v[w++>>>0]=128|ee>>6&63,v[w++>>>0]=128|ee&63}}return v[w>>>0]=0,w-X},Wd=(m,v,w)=>Vd(m,G,v,w),Xd=m=>{for(var v=0,w=0;w<m.length;++w){var I=m.charCodeAt(w);I<=127?v++:I<=2047?v+=2:I>=55296&&I<=57343?(v+=4,++w):v+=3}return v},ac=typeof TextDecoder<"u"?new TextDecoder:void 0,Yd=(m,v,w)=>{v>>>=0;for(var I=v+w,X=v;m[X]&&!(X>=I);)++X;if(X-v>16&&m.buffer&&ac)return ac.decode(m.subarray(v,X));for(var J="";v<X;){var ue=m[v++];if(!(ue&128)){J+=String.fromCharCode(ue);continue}var ee=m[v++]&63;if((ue&224)==192){J+=String.fromCharCode((ue&31)<<6|ee);continue}var xe=m[v++]&63;if((ue&240)==224?ue=(ue&15)<<12|ee<<6|xe:ue=(ue&7)<<18|ee<<12|xe<<6|m[v++]&63,ue<65536)J+=String.fromCharCode(ue);else{var Se=ue-65536;J+=String.fromCharCode(55296|Se>>10,56320|Se&1023)}}return J},$d=(m,v)=>(m>>>=0,m?Yd(G,m,v):"");function qd(m,v){m>>>=0,v>>>=0,v=N(v);var w=v==="std::string";Fe(m,{name:v,fromWireType(I){var X=$[I>>>2>>>0],J=I+4,ue;if(w)for(var ee=J,xe=0;xe<=X;++xe){var Se=J+xe;if(xe==X||G[Se>>>0]==0){var De=Se-ee,rt=$d(ee,De);ue===void 0?ue=rt:(ue+="\0",ue+=rt),ee=Se+1}}else{for(var St=new Array(X),xe=0;xe<X;++xe)St[xe]=String.fromCharCode(G[J+xe>>>0]);ue=St.join("")}return xi(I),ue},toWireType(I,X){X instanceof ArrayBuffer&&(X=new Uint8Array(X));var J,ue=typeof X=="string";ue||X instanceof Uint8Array||X instanceof Uint8ClampedArray||X instanceof Int8Array||oe("Cannot pass non-string to std::string"),w&&ue?J=Xd(X):J=X.length;var ee=Sa(4+J+1),xe=ee+4;if($[ee>>>2>>>0]=J,w&&ue)Wd(X,xe,J+1);else if(ue)for(var Se=0;Se<J;++Se){var De=X.charCodeAt(Se);De>255&&(xi(xe),oe("String has UTF-16 code units that do not fit in 8 bits")),G[xe+Se>>>0]=De}else for(var Se=0;Se<J;++Se)G[xe+Se>>>0]=X[Se];return I!==null&&I.push(xi,ee),ee},argPackAdvance:at,readValueFromPointer:fe,destructorFunction(I){xi(I)}})}var lc=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,jd=(m,v)=>{for(var w=m,I=w>>1,X=I+v/2;!(I>=X)&&C[I>>>0];)++I;if(w=I<<1,w-m>32&&lc)return lc.decode(G.subarray(m>>>0,w>>>0));for(var J="",ue=0;!(ue>=v/2);++ue){var ee=A[m+ue*2>>>1>>>0];if(ee==0)break;J+=String.fromCharCode(ee)}return J},Zd=(m,v,w)=>{if(w??(w=2147483647),w<2)return 0;w-=2;for(var I=v,X=w<m.length*2?w/2:m.length,J=0;J<X;++J){var ue=m.charCodeAt(J);A[v>>>1>>>0]=ue,v+=2}return A[v>>>1>>>0]=0,v-I},Kd=m=>m.length*2,Jd=(m,v)=>{for(var w=0,I="";!(w>=v/4);){var X=H[m+w*4>>>2>>>0];if(X==0)break;if(++w,X>=65536){var J=X-65536;I+=String.fromCharCode(55296|J>>10,56320|J&1023)}else I+=String.fromCharCode(X)}return I},Qd=(m,v,w)=>{if(v>>>=0,w??(w=2147483647),w<4)return 0;for(var I=v,X=I+w-4,J=0;J<m.length;++J){var ue=m.charCodeAt(J);if(ue>=55296&&ue<=57343){var ee=m.charCodeAt(++J);ue=65536+((ue&1023)<<10)|ee&1023}if(H[v>>>2>>>0]=ue,v+=4,v+4>X)break}return H[v>>>2>>>0]=0,v-I},ef=m=>{for(var v=0,w=0;w<m.length;++w){var I=m.charCodeAt(w);I>=55296&&I<=57343&&++w,v+=4}return v},tf=function(m,v,w){m>>>=0,v>>>=0,w>>>=0,w=N(w);var I,X,J,ue;v===2?(I=jd,X=Zd,ue=Kd,J=ee=>C[ee>>>1>>>0]):v===4&&(I=Jd,X=Qd,ue=ef,J=ee=>$[ee>>>2>>>0]),Fe(m,{name:w,fromWireType:ee=>{for(var xe=$[ee>>>2>>>0],Se,De=ee+4,rt=0;rt<=xe;++rt){var St=ee+4+rt*v;if(rt==xe||J(St)==0){var Wt=St-De,Bt=I(De,Wt);Se===void 0?Se=Bt:(Se+="\0",Se+=Bt),De=St+v}}return xi(ee),Se},toWireType:(ee,xe)=>{typeof xe!="string"&&oe(`Cannot pass non-string to C++ string type ${w}`);var Se=ue(xe),De=Sa(4+Se+v);return $[De>>>2>>>0]=Se/v,X(xe,De+4,Se+v),ee!==null&&ee.push(xi,De),De},argPackAdvance:at,readValueFromPointer:fe,destructorFunction(ee){xi(ee)}})};function nf(m,v,w,I,X,J){m>>>=0,v>>>=0,w>>>=0,I>>>=0,X>>>=0,J>>>=0,Ye[m]={name:N(v),rawConstructor:Dt(w,I),rawDestructor:Dt(X,J),fields:[]}}function rf(m,v,w,I,X,J,ue,ee,xe,Se){m>>>=0,v>>>=0,w>>>=0,I>>>=0,X>>>=0,J>>>=0,ue>>>=0,ee>>>=0,xe>>>=0,Se>>>=0,Ye[m].fields.push({fieldName:N(v),getterReturnType:w,getter:Dt(I,X),getterContext:J,setterArgumentType:ue,setter:Dt(ee,xe),setterContext:Se})}var sf=function(m,v){m>>>=0,v>>>=0,v=N(v),Fe(m,{isVoid:!0,name:v,argPackAdvance:0,fromWireType:()=>{},toWireType:(w,I)=>{}})};function of(m,v,w){return m>>>=0,v>>>=0,w>>>=0,G.copyWithin(m>>>0,v>>>0,v+w>>>0)}var cc=(m,v,w)=>{var I=[],X=m.toWireType(I,w);return I.length&&($[v>>>2>>>0]=sn.toHandle(I)),X};function af(m,v,w){return m>>>=0,v>>>=0,w>>>=0,m=sn.toValue(m),v=no(v,"emval::as"),cc(v,w,m)}var lf={},uc=m=>{var v=lf[m];return v===void 0?N(m):v},xa=[];function cf(m,v,w,I,X){return m>>>=0,v>>>=0,w>>>=0,I>>>=0,X>>>=0,m=xa[m],v=sn.toValue(v),w=uc(w),m(v,v[w],I,X)}function uf(m,v){return m>>>=0,v>>>=0,m=sn.toValue(m),v=sn.toValue(v),m==v}var hf=m=>{var v=xa.length;return xa.push(m),v},df=(m,v)=>{for(var w=new Array(m),I=0;I<m;++I)w[I]=no($[v+I*4>>>2>>>0],"parameter "+I);return w};function ff(m,v,w){v>>>=0;var I=df(m,v),X=I.shift();m--;var J=`return function (obj, func, destructorsRef, args) {
`,ue=0,ee=[];w===0&&ee.push("obj");for(var xe=["retType"],Se=[X],De=0;De<m;++De)ee.push("arg"+De),xe.push("argType"+De),Se.push(I[De]),J+=`  var arg${De} = argType${De}.readValueFromPointer(args${ue?"+"+ue:""});
`,ue+=I[De].argPackAdvance;var rt=w===1?"new func":"func.call";J+=`  var rv = ${rt}(${ee.join(", ")});
`,X.isVoid||(xe.push("emval_returnValue"),Se.push(cc),J+=`  return emval_returnValue(retType, destructorsRef, rv);
`),J+=`};
`,xe.push(J);var St=rc(Function,xe)(...Se),Wt=`methodCaller<(${I.map(Bt=>Bt.name).join(", ")}) => ${X.name}>`;return hf(Ze(Wt,St))}function pf(m,v){return m>>>=0,v>>>=0,m=sn.toValue(m),v=sn.toValue(v),sn.toHandle(m[v])}function mf(m){m>>>=0,m>9&&(vi[m+1]+=1)}function gf(m){return m>>>=0,sn.toHandle(uc(m))}function _f(){return sn.toHandle({})}function vf(m){m>>>=0;var v=sn.toValue(m);et(v),_a(m)}function xf(m,v,w){m>>>=0,v>>>=0,w>>>=0,m=sn.toValue(m),v=sn.toValue(v),w=sn.toValue(w),m[v]=w}function yf(m,v){m>>>=0,v>>>=0,m=no(m,"_emval_take_value");var w=m.readValueFromPointer(v);return sn.toHandle(w)}var Ef=()=>4294901760,Sf=m=>{var v=D.buffer,w=(m-v.byteLength+65535)/65536;try{return D.grow(w),k(),1}catch{}};function Mf(m){m>>>=0;var v=G.length,w=Ef();if(m>w)return!1;for(var I=(xe,Se)=>xe+(Se-xe%Se)%Se,X=1;X<=4;X*=2){var J=v*(1+.2/X);J=Math.min(J,m+100663296);var ue=Math.min(w,I(Math.max(m,J),65536)),ee=Sf(ue);if(ee)return!0}return!1}var hc=(m,v)=>{m<128?v.push(m):v.push(m%128|128,m>>7)},Af=m=>{for(var v={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},w={parameters:[],results:m[0]=="v"?[]:[v[m[0]]]},I=1;I<m.length;++I)w.parameters.push(v[m[I]]);return w},bf=(m,v)=>{var w=m.slice(0,1),I=m.slice(1),X={i:127,p:127,j:126,f:125,d:124,e:111};v.push(96),hc(I.length,v);for(var J=0;J<I.length;++J)v.push(X[I[J]]);w=="v"?v.push(0):v.push(1,X[w])},wf=(m,v)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(Af(v),m);var w=[1];bf(v,w);var I=[0,97,115,109,1,0,0,0,1];hc(w.length,I),I.push(...w),I.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var X=new WebAssembly.Module(new Uint8Array(I)),J=new WebAssembly.Instance(X,{e:{f:m}}),ue=J.exports.f;return ue},Tf=(m,v)=>{if(ir)for(var w=m;w<m+v;w++){var I=Ft(w);I&&ir.set(I,w)}},ir,Cf=m=>(ir||(ir=new WeakMap,Tf(0,ai.length)),ir.get(m)||0),ya=[],Rf=()=>{if(ya.length)return ya.pop();try{ai.grow(1)}catch(m){throw m instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":m}return ai.length-1},Ea=(m,v)=>ai.set(m,v),As=(m,v)=>{var w=Cf(m);if(w)return w;var I=Rf();try{Ea(I,m)}catch(J){if(!(J instanceof TypeError))throw J;var X=wf(m,v);Ea(I,X)}return ir.set(m,I),I},bs=m=>{ir.delete(Ft(m)),Ea(m,null),ya.push(m)};Ce=n.InternalError=class extends Error{constructor(v){super(v),this.name="InternalError"}},ut(),be=n.BindingError=class extends Error{constructor(v){super(v),this.name="BindingError"}},Xe(),fa(),Pt(),eo=n.UnboundTypeError=Ss(Error,"UnboundTypeError"),Pd();var Lf={i:Pe,D:Ne,n:dt,C:vt,H:yt,h:wd,g:Cd,a:Rd,G:oc,t:Ud,e:Od,x:Bd,c:Fd,j:Hd,f:Gd,k:kd,w:qd,s:tf,o:nf,l:rf,I:sf,F:of,v:af,z:cf,b:_a,m:uf,y:ff,B:pf,u:mf,q:gf,A:_f,p:vf,r:xf,d:yf,E:Mf},Kn=S(),dc=m=>(dc=Kn.L)(m),Sa=m=>(Sa=Kn.N)(m),xi=m=>(xi=Kn.O)(m),fc=m=>(fc=Kn.P)(m);function Pf(m){m=Object.assign({},m);var v=I=>X=>I(X)>>>0,w=I=>()=>I()>>>0;return m.L=v(m.L),m.N=v(m.N),m._emscripten_stack_alloc=v(m._emscripten_stack_alloc),m.emscripten_stack_get_current=w(m.emscripten_stack_get_current),m}n.addFunction=As,n.removeFunction=bs;var io;He=function m(){io||pc(),io||(He=m)};function pc(){if(Re>0||(ie(),Re>0))return;function m(){var v;io||(io=!0,n.calledRun=!0,!P&&(ge(),r(n),(v=n.onRuntimeInitialized)==null||v.call(n),ve()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),m()},1)):m()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return pc(),t=o,t}})();const zx="/assets/manifold-ldiO02fT.wasm",Hx="/assets/usb_c_hole-Bh-LhuL4.stl",Gx="/assets/switch_mx-DlXkNR-Z.stl",kx="data:model/stl;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAqfV/P5+AkTwAAAAAAEAbRMOlZ8Ty0tHAAEAbRMOlZ8RGti3BECAbRACgYMRGti3BAACp9X8/n4CRPAAAAAAAQBtEw6VnxPLS0cAQIBtEAKBgxEa2LcEQIBtEAKBgxPLS0cAAAKn1f7+fgJG8AAAAAAAgEkQ9umDE8tLRwAAgEkQ9umDERrYtwfA/EkQAwGfERrYtwQAAqfV/v5+AkbwAAAAAACASRD26YMTy0tHA8D8SRADAZ8RGti3B8D8SRADAZ8Ty0tHAAAAAAAAAAAAAAAAAgD8QIBtEAKBgxPLS0cAAIBJEPbpgxPLS0cDwPxJEAMBnxPLS0cAAAAAAAAAAAAAAAACAPxAgG0QAoGDE8tLRwPA/EkQAwGfE8tLRwABAG0TDpWfE8tLRwAAAAAAAAAAAAAAAAIC/ACASRD26YMRGti3BECAbRACgYMRGti3B8D8SRADAZ8RGti3BAAAAAAAAAAAAAAAAgL8AQBtEw6VnxEa2LcHwPxJEAMBnxEa2LcEQIBtEAKBgxEa2LcEAAAqUOrzA+38/AAAAABAgG0QAoGDE8tLRwBAgG0QAoGDERrYtwQAgEkQ9umDERrYtwQAACpQ6vMD7fz8AAAAAECAbRACgYMTy0tHAACASRD26YMRGti3BACASRD26YMTy0tHAAAAKlDo8wPt/vwAAAADwPxJEAMBnxPLS0cDwPxJEAMBnxEa2LcEAQBtEw6VnxEa2LcEAAAqUOjzA+3+/AAAAAPA/EkQAwGfE8tLRwABAG0TDpWfERrYtwQBAG0TDpWfE8tLRwAAA",Vx="/assets/esp32_c3_supermini-DsPQz_9p.stl",Wx="/assets/battery_charging_module-BhVwN-nm.stl",Xx="data:model/stl;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAACAPwAAAAAAAAAAAADLQwBATcQAAIBBAADLQwBATcQAAAAAAADLQ2amTMQAAAAAAAAAAIA/AAAAAAAAAAAAAMtDAEBNxAAAgEEAAMtDZqZMxAAAAAAAAMtDZqZMxAAAgEEAAAAAgL8AAAAAAAAAAACAw0NmpkzEAACAQQCAw0NmpkzEAAAAAACAw0MAQE3EAAAAAAAAAACAvwAAAAAAAAAAAIDDQ2amTMQAAIBBAIDDQwBATcQAAAAAAIDDQwBATcQAAIBBAAAAAAAAAAAAAAAAgD8AAMtDZqZMxAAAgEEAgMNDZqZMxAAAgEEAgMNDAEBNxAAAgEEAAAAAAAAAAAAAAACAPwAAy0NmpkzEAACAQQCAw0MAQE3EAACAQQAAy0MAQE3EAACAQQAAAAAAAAAAAAAAAIC/AADLQwBATcQAAAAAAIDDQwBATcQAAAAAAIDDQ2amTMQAAAAAAAAAAAAAAAAAAAAAgL8AAMtDAEBNxAAAAAAAgMNDZqZMxAAAAAAAAMtDZqZMxAAAAAAAAAAAAAAAAIA/AAAAAAAAy0NmpkzEAACAQQAAy0NmpkzEAAAAAACAw0NmpkzEAAAAAAAAAAAAAAAAgD8AAAAAAADLQ2amTMQAAIBBAIDDQ2amTMQAAAAAAIDDQ2amTMQAAIBBAAAAAAAAAACAvwAAAAAAgMNDAEBNxAAAgEEAgMNDAEBNxAAAAAAAAMtDAEBNxAAAAAAAAAAAAAAAAIC/AAAAAACAw0MAQE3EAACAQQAAy0MAQE3EAAAAAAAAy0MAQE3EAACAQQAA",Yx="/assets/obj_2_sup%202.0%20face-BjSeTE-s.stl",$x="/assets/bun_lid_clean-BYsGTvJL.stl",Bs={en:{title:"🥟 Dim Sum Clicker Configurator",layerNames:["Layer 1","Layer 2","Layer 3","Layer 4","OLED pod","OLED cover"],buildErr:(i,e)=>`⚠ ${i} build error: ${e}`,buildErrGeneric:i=>`⚠ Build error: ${i}`,initError:i=>`⚠ Initialization failed: ${i}
Check that you ran it with \`npm run dev\`.`,presetLoaded:i=>`✓ Preset loaded (${i} items applied)`,presetError:"⚠ Cannot read preset file (JSON format error)",roleSwitch:"Switch",roleSwitch2:"Switch 2",roleOledSda:"OLED SDA",roleOledScl:"OLED SCL",roleLed:"LED",roleLedGreen:"LED green",roleBuzzer:"Buzzer",gpioSelect:i=>`${i} GPIO select`,wtGrpPower:"Power",wtUsbC:"USB-C",wtEspDirect:"ESP32 direct",wtNoBattery:"no battery",wtGrpPowerChain:"Power (battery → charger → ESP32)",wtBatPlus:"Battery +",wtBatMinus:"Battery −",wtChgBplus:"Charger B+",wtChgBminus:"Charger B−",wtChgOutPlus:"Charger OUT+",wtChgOutMinus:"Charger OUT−",wtEsp5v:"ESP32 5V",wtEspGnd:"ESP32 GND",wtEsp3v3:"ESP32 3V3",wtGrpOled:"OLED (I2C)",wtOledVcc:"OLED VCC",wtOledGnd:"OLED GND",wtOledSda:"OLED SDA",wtOledScl:"OLED SCL",wtSckNote:"module may label it SCK",wtGrpSwitch:"Switch (MX)",wtSw1PinA:"Switch 1 pin A",wtSw1PinB:"Switch 1 pin B",wtSw2PinA:"Switch 2 pin A",wtSw2PinB:"Switch 2 pin B",wtSwPinA:"Switch pin A",wtSwPinB:"Switch pin B",wtPullup:"internal pull-up input",wtGrpLedRgb:"LED (2×5 two-tone 3-pin)",wtLedRed:"LED red (pin 1)",wtLedGreen:"LED green (pin 3)",wtLedCommon:"LED common − (center)",wtResistor:"150~220Ω resistor",wtGrpLedRound:i=>`LED (round ${i}mm)`,wtLedPlusLeg:"LED + (long leg)",wtLedMinusLeg:"LED − (short leg)",wtGrpBuzzer:"Piezo buzzer",wtBzPlus:"Buzzer +",wtBzMinus:"Buzzer −",wtPwmTone:"PWM tone",spSw1:"SW1",spSw2:"SW2",spSw:"SW",spBzPlus:"BZ+",spBzMinus:"BZ−",tgGhost:i=>`Components: ${i?"On":"Off"}`,tgWires:i=>`Wiring: ${i?"On":"Off"}`,tgXray:i=>`Case X-ray: ${i?"On":"Off"}`,infoDims:(i,e,t,n,r)=>`Total ${i} × ${e}mm (incl. boss)${t} · CSG ${n}ms${r}`,todoDims:(i,e,t,n)=>`Todo supporter ${i} × ${e} × ${t}mm · CSG ${n}ms`,infoLid:(i,e)=>` · Layer 4 Ø${i} × ${e}mm`,fitOk:" · no assembly interference ✓",fitBad:(i,e,t,n)=>` · assembly interference ${i}/${e}/${t}/${n}mm³ ⚠`,wFit:"⚠ Layers overlap when assembled — adjust component layout or layer heights",wBatFit:(i,e)=>`⚠ Battery (${i}×${e}) doesn't fit in Layer 1 — increase W/D or reduce the corner`,wBatStandFit:(i,e)=>`⚠ Upright battery (${i}×${e}) doesn't fit in Layer 2 — increase depth D or move Battery X`,wBatStandEsp:"⚠ Upright battery overlaps the ESP32",wBatStandMod:"⚠ Upright battery overlaps the charge module",wBatStandTop:i=>`⚠ Upright battery (height ${i}) touches the Layer 3 top plate — increase Layer 2·3 heights`,wEspWallYNoBat:"⚠ ESP32 overlaps the top/bottom wall — move ESP32 Y toward center",wEspWidthNoBat:i=>`⚠ ESP32 (length ${i}) doesn't fit widthwise — increase W`,wEspWall:"⚠ ESP32 overlaps the wall",wEspStandTop:i=>`⚠ Upright ESP32 (height ${i}) touches the Layer 3 top plate — increase Layer 2·3 heights`,wModWall:"⚠ Charge module overlaps the top/bottom wall",wModCurve:"⚠ Charge module doesn't fit the curved wall — move Y toward center",wEspModOverlap:"⚠ ESP32 and charge module pockets overlap — raising the lift (Layer 2.5) lets them coexist",wEspLiftLow:(i,e,t)=>`⚠ ESP32 lift (${i}) is lower than the charge module height (${e}) — raise it to at least ${t}`,wEspLiftTop:"⚠ Lifted ESP32 touches the Layer 3 top plate — reduce the lift or increase layer heights",wBeamMod:"⚠ The Layer 2.5 support beam crosses the charge module — move the ESP32",wBeamBat:"⚠ The Layer 2.5 support beam crosses the upright battery — adjust the position",wEspTower:"⚠ ESP32 overlaps the OLED tower",wModTower:"⚠ Charge module overlaps the OLED tower",wLedTower:"⚠ LED overlaps the OLED tower (notch)",wBatTower:"⚠ 650 battery overlaps the OLED tower",wTowerTop:"⚠ OLED tower pierces the Layer 3 top plate — increase Layer 2 or 3 height",wOledBig:"⚠ OLED is large for the wall width/curvature — increase the diameter (W)",wF1Low:"⚠ Layer 1 is too low (not enough room for battery + wiring)",wCoverRib:(i,e)=>`⚠ Cover triangle support was reduced to ${i}mm by the switch (base ${e})`,wSwThrough:"⚠ Switch holder pokes through below the lid — reduce recess or increase Layer 3/boss",wDblD:"⚠ Double mode recommends depth D of 60 or more",wSwGap:"⚠ Switch spacing is too narrow — dim sum characters (Ø28.7) overlap; 29 or more recommended",wCharWall:"⚠ Characters touch the front/back wall — increase D or reduce switch spacing",wLidWide:i=>`⚠ Layer 4 (Ø${i}) is wider than the case outline and hangs over — set W to 41 or more`,wLedWall:"⚠ LED overlaps the Layer 3 wall/outline — move X/Y inward",wLedBoss:"⚠ LED overlaps the switch boss/holder — move it outward",wLedBand:"⚠ LED overlaps the Layer 4 joint groove/band — move it toward center",wLidChar:i=>`⚠ Layer 4 touches the dim sum character — set the band height to ${i} or more (or use without the character)`,wBatCup:"⚠ Upright battery hits the switch holder cup — move Battery X or increase layer heights",wEspCup:"⚠ ESP32 hits the switch holder cup — move it or increase layer heights",wBzWall:"⚠ Buzzer overlaps the wall — move it inward",wBzCup:"⚠ Buzzer overlaps the switch holder cup — if there's no room, change buzzer mount to the Layer 2 floor",wBzLed:"⚠ Buzzer overlaps the LED",wBzThick:i=>`⚠ Buzzer (8.3) is thicker than Layer 3 and pokes ${i}mm below — check it doesn't overlap Layer 2 components`,wBzEsp:"⚠ Buzzer overlaps the ESP32",wBzMod:"⚠ Buzzer overlaps the charge module",wBzLayFlipThrough:"⚠ Laid-down buzzer pokes through the Layer 3 top plate — increase layer heights",wBzLayPocket:"⚠ Laid-down buzzer carve intrudes into the switch pocket — move X/Y",wBzLayCup:"⚠ Laid-down buzzer carves into the Layer 3 holder cup (watch for thin cup walls)",wBzCupBelow:"⚠ Buzzer touches under the Layer 3 switch holder cup — move X/Y",wBzTop:"⚠ Buzzer touches the Layer 3 top plate — increase layer heights"},ko:{title:"🥟 딤섬 클리커 컨피규레이터",layerNames:["1층","2층","3층","4층","OLED 포드","OLED 커버"],buildErr:(i,e)=>`⚠ ${i} 생성 오류: ${e}`,buildErrGeneric:i=>`⚠ 생성 오류: ${i}`,initError:i=>`⚠ 초기화 실패: ${i}
\`npm run dev\` 로 실행했는지 확인하세요.`,presetLoaded:i=>`✓ 프리셋 불러옴 (${i}개 항목 적용)`,presetError:"⚠ 프리셋 파일을 읽을 수 없습니다 (JSON 형식 오류)",roleSwitch:"스위치",roleSwitch2:"스위치 2",roleOledSda:"OLED SDA",roleOledScl:"OLED SCL",roleLed:"LED",roleLedGreen:"LED 초록",roleBuzzer:"부저",gpioSelect:i=>`${i} GPIO 선택`,wtGrpPower:"전원",wtUsbC:"USB-C",wtEspDirect:"ESP32 직결",wtNoBattery:"배터리 없음",wtGrpPowerChain:"전원 (배터리 → 충전모듈 → ESP32)",wtBatPlus:"배터리 +",wtBatMinus:"배터리 −",wtChgBplus:"충전모듈 B+",wtChgBminus:"충전모듈 B−",wtChgOutPlus:"충전모듈 OUT+",wtChgOutMinus:"충전모듈 OUT−",wtEsp5v:"ESP32 5V",wtEspGnd:"ESP32 GND",wtEsp3v3:"ESP32 3V3",wtGrpOled:"OLED (I2C)",wtOledVcc:"OLED VCC",wtOledGnd:"OLED GND",wtOledSda:"OLED SDA",wtOledScl:"OLED SCL",wtSckNote:"모듈 표기는 SCK이기도",wtGrpSwitch:"스위치 (MX)",wtSw1PinA:"스위치1 핀 A",wtSw1PinB:"스위치1 핀 B",wtSw2PinA:"스위치2 핀 A",wtSw2PinB:"스위치2 핀 B",wtSwPinA:"스위치 핀 A",wtSwPinB:"스위치 핀 B",wtPullup:"내부 풀업 입력",wtGrpLedRgb:"LED (2×5 투톤 3핀)",wtLedRed:"LED 빨강 (1번 핀)",wtLedGreen:"LED 초록 (3번 핀)",wtLedCommon:"LED 공통 − (가운데)",wtResistor:"저항 150~220Ω",wtGrpLedRound:i=>`LED (원형 ${i}mm)`,wtLedPlusLeg:"LED + (긴 다리)",wtLedMinusLeg:"LED − (짧은 다리)",wtGrpBuzzer:"피에조 부저",wtBzPlus:"부저 +",wtBzMinus:"부저 −",wtPwmTone:"PWM 톤",spSw1:"스위치1",spSw2:"스위치2",spSw:"스위치",spBzPlus:"부저+",spBzMinus:"부저−",tgGhost:i=>`부품 표시: ${i?"켬":"끔"}`,tgWires:i=>`배선 표시: ${i?"켬":"끔"}`,tgXray:i=>`케이스 반투명: ${i?"켬":"끔"}`,infoDims:(i,e,t,n,r)=>`전체 ${i} × ${e}mm (보스 포함)${t} · CSG ${n}ms${r}`,todoDims:(i,e,t,n)=>`투두 서포터 ${i} × ${e} × ${t}mm · CSG ${n}ms`,infoLid:(i,e)=>` · 4층 Ø${i} × ${e}mm`,fitOk:" · 조립 간섭 없음 ✓",fitBad:(i,e,t,n)=>` · 조립 간섭 ${i}/${e}/${t}/${n}mm³ ⚠`,wFit:"⚠ 조립 시 층끼리 겹칩니다 — 부품 배치나 층 높이를 조정하세요",wBatFit:(i,e)=>`⚠ 배터리(${i}×${e})가 1층에 안 들어갑니다 — W/D를 키우거나 모서리를 줄이세요`,wBatStandFit:(i,e)=>`⚠ 세운 배터리(${i}×${e})가 2층에 안 들어갑니다 — 세로 D를 키우거나 배터리 X를 옮기세요`,wBatStandEsp:"⚠ 세운 배터리가 ESP32와 겹칩니다",wBatStandMod:"⚠ 세운 배터리가 충전모듈과 겹칩니다",wBatStandTop:i=>`⚠ 세운 배터리(높이 ${i})가 3층 상판에 닿습니다 — 2·3층 높이를 키우세요`,wEspWallYNoBat:"⚠ ESP32가 위/아래 벽과 겹칩니다 — ESP32 Y를 중앙 쪽으로 옮기세요",wEspWidthNoBat:i=>`⚠ ESP32(길이 ${i})가 가로로 안 들어갑니다 — W를 키우세요`,wEspWall:"⚠ ESP32가 벽과 겹칩니다",wEspStandTop:i=>`⚠ 세운 ESP32(높이 ${i})가 3층 상판에 닿습니다 — 2·3층 높이를 키우세요`,wModWall:"⚠ 충전모듈이 위/아래 벽과 겹칩니다",wModCurve:"⚠ 충전모듈이 곡면 벽과 맞지 않습니다 — Y를 중앙 쪽으로 옮기세요",wEspModOverlap:"⚠ ESP32와 충전모듈 포켓이 겹칩니다 — 띄움(2.5층)을 올리면 공존 가능",wEspLiftLow:(i,e,t)=>`⚠ ESP32 띄움(${i})이 충전모듈 높이(${e})보다 낮습니다 — ${t} 이상으로 올리세요`,wEspLiftTop:"⚠ 띄운 ESP32가 3층 상판에 닿습니다 — 띄움을 줄이거나 층 높이를 키우세요",wBeamMod:"⚠ 2.5층 받침 선이 충전모듈 자리를 가로지릅니다 — ESP32 위치를 옮기세요",wBeamBat:"⚠ 2.5층 받침 선이 세운 배터리 자리를 가로지릅니다 — 위치를 조정하세요",wEspTower:"⚠ ESP32가 OLED 타워와 겹칩니다",wModTower:"⚠ 충전모듈이 OLED 타워와 겹칩니다",wLedTower:"⚠ LED가 OLED 타워(노치)와 겹칩니다",wBatTower:"⚠ 650 배터리가 OLED 타워와 겹칩니다",wTowerTop:"⚠ OLED 타워가 3층 상판을 뚫습니다 — 2층 또는 3층 높이를 키우세요",wOledBig:"⚠ OLED가 벽 폭/곡률에 비해 큽니다 — 지름(W)을 키우세요",wF1Low:"⚠ 1층이 너무 낮습니다 (배터리 + 배선 공간 부족)",wCoverRib:(i,e)=>`⚠ 커버 세모 받침이 스위치 자리 때문에 ${i}mm로 줄었습니다 (기준 ${e})`,wSwThrough:"⚠ 스위치 홀더가 뚜껑 아래로 뚫고 나갑니다 — 매립을 줄이거나 3층/보스를 키우세요",wDblD:"⚠ 더블 모드는 세로 D 60 이상을 권장합니다",wSwGap:"⚠ 스위치 간격이 좁아 딤섬 캐릭터(Ø28.7)끼리 겹칩니다 — 29 이상 권장",wCharWall:"⚠ 캐릭터가 앞뒤 벽에 닿습니다 — D를 키우거나 스위치 간격을 줄이세요",wLidWide:i=>`⚠ 4층(Ø${i})이 케이스 외곽보다 넓어 밖으로 걸칩니다 — W를 41 이상으로`,wLedWall:"⚠ LED가 3층 벽/외곽과 겹칩니다 — X/Y를 안쪽으로 옮기세요",wLedBoss:"⚠ LED가 스위치 보스/홀더와 겹칩니다 — 밖으로 옮기세요",wLedBand:"⚠ LED가 4층 결합 홈/밴드와 겹칩니다 — 중심 쪽으로 옮기세요",wLidChar:i=>`⚠ 4층이 딤섬 캐릭터에 닿습니다 — 밴드 높이를 ${i} 이상으로 (또는 캐릭터 없이 사용)`,wBatCup:"⚠ 세운 배터리가 스위치 홀더 컵에 부딪힙니다 — 배터리 X를 옮기거나 층 높이를 키우세요",wEspCup:"⚠ ESP32가 스위치 홀더 컵에 부딪힙니다 — 위치를 옮기거나 층 높이를 키우세요",wBzWall:"⚠ 부저가 벽과 겹칩니다 — 안쪽으로 옮기세요",wBzCup:"⚠ 부저가 스위치 홀더 컵과 겹칩니다 — 자리가 없으면 부저 장착을 2층 바닥으로 바꾸세요",wBzLed:"⚠ 부저가 LED와 겹칩니다",wBzThick:i=>`⚠ 부저(8.3)가 3층보다 두꺼워 아래로 ${i}mm 튀어나옵니다 — 2층 부품과 겹치지 않는지 확인하세요`,wBzEsp:"⚠ 부저가 ESP32와 겹칩니다",wBzMod:"⚠ 부저가 충전모듈과 겹칩니다",wBzLayFlipThrough:"⚠ 눕힌 부저가 3층 상판을 뚫고 나옵니다 — 층 높이를 키우세요",wBzLayPocket:"⚠ 눕힌 부저 파임이 스위치 포켓까지 침범합니다 — X/Y를 옮기세요",wBzLayCup:"⚠ 눕힌 부저 자리만큼 3층 홀더 컵이 파입니다 (컵 벽 얇아짐 주의)",wBzCupBelow:"⚠ 부저가 3층 스위치 홀더 컵 아래에 닿습니다 — X/Y를 옮기세요",wBzTop:"⚠ 부저가 3층 상판에 닿습니다 — 층 높이를 키우세요"}},nd={en:{appTitle:"🥟 Dim Sum Clicker Configurator",sub:"Move the sliders to redesign the STL in real time",secSettings:"⚙ Settings",lblLanguage:"Language",optLangEn:"English",optLangKo:"한국어 (Korean)",secOuter:"Outer design",lblShape:"Shape",optRect:"Rounded square",optRect2:"Rounded square double (2 switches)",optCircle:"Full circle (dim sum steamer)",lblW:"Width W / diameter",lblD:"Depth D",lblCorner:"Corner rounding",lblWall:"Wall thickness",lblFit:"Fit clearance",lblBands:"Decorative grooves",hintOuter:"Layer joints and the Layer 4 joint use a square-section tab (1.2×1.5) and groove (depth 1.8) — the smaller the fit clearance, the tighter the grip. Settings are saved automatically.",secLayers:"Layer heights",lblF1:"Layer 1 (battery)",lblF2:"Layer 2 (board)",lblF3:"Layer 3 (switch)",lblLid:"Layer 4 (dim sum lid)",lblLidH:"Layer 4 band height",hintLayers:"Layer 4 = the bun_lid design (Ø41) placed as-is as the dim sum lid. Adjust the total height with the band height; the joint uses the same square tab and groove as Layers 1·2·3 (fit clearance applied), with the groove on the Layer 3 top plate and the tab on the Layer 4 underside. To fully cover the character (21.6), use at least the band height shown in the warnings.",secLayout2:"Component layout (Layer 2)",tCenter:"Center",tCenterTitle:"Center (Y=0)",lblEspRot:"ESP32 rotation",optEsp0:"Flat (24×18)",optEsp90:"Flat rotated (18×24)",optEspS0:"Upright-wide (24×5, h18)",optEspS90:"Upright-tall (5×24, h18)",optEspU0:"Upright-USB down (18×5, h24)",optEspU90:"Upright-USB down tall (5×18, h24)",lblEspLift:"ESP32 lift (Layer 2.5)",lblEspZ:"ESP32 Z fine-tune",lblModY:"Charge module Y",lblBatType:"Battery capacity",optBatNone:"No battery (ESP32 direct USB)",lblBatPose:"Battery placement",optBatFlat:"Flat on Layer 1",optBatStand:"Upright on Layer 2 (slot-in)",lblBatX:"Battery X (upright)",lblOledType:"OLED type",optOled096:'0.96" (pocket 25.5×27.3, 4-hole pin mount)',lblOledSide:"OLED position",optOledW:"West wall (opposite USB)",optOledN:"North wall (back)",optOledS:"South wall (front)",optOledNone:"None",lblOledProud:"OLED protrusion",lblOledPod:"OLED separate pod",lblOledCover:"OLED back cover",lblWireX:"Wire hole X",lblWireY:"Wire hole Y",lblWireRot:"Wire hole orientation",optWire0:"Horizontal (14×5)",optWire90:"Vertical (5×14)",hintLayout2:"The wire hole is a long slot for the battery +/− pair to pass through together. The OLED slides in whole from behind the tower (inside) — the back is fully open while the front is held by the wall + window. Raising the OLED protrusion pushes the pod outside the outline, following the square/circle outer curve. The charge module USB is always on the right (east) wall. <b>No battery</b> removes the battery and charge module and docks the ESP32 against the east wall so USB plugs in directly — adjust up/down with ESP32 Y. <b>OLED separate pod</b> makes the OLED tower (window and pocket included) a separate printed part: it slides top-to-bottom into a wall-through opening — the tongue (front) fills the opening flush with the outer face, the shoulders catch on the inner wall, and the inner U-shaped socket rails hold the back and sides. Closing Layer 3 presses a notch down to lock it. Both pod and rails print upright without supports.",secLayout3:"Component layout (Layer 3)",lblBoss:"Switch boss",lblBossH:"Boss height",lblSink:"Switch recess depth",lblSwGap:"Switch spacing (double)",lblPocketX:"Pocket width (X)",lblPocketY:"Pocket depth (Y)",lblCornerOut:"Pocket corner clearance",lblSteam:"Steamer floor slats",lblLedType:"LED type",optLed3:"3mm round (hole Ø3.3, protrusion ~1.2)",optLed4:"4mm round (hole Ø4.3, protrusion ~2.6)",optLed5:"5mm round (hole Ø5.3, protrusion ~4.5)",optLedR25:"2×5 rect two-tone 3-pin (hole 2.3×5.3, protrusion ~3.8)",lblBz:"Buzzer (Ø12 piezo)",lblBzMount:"Buzzer mount",optBzF2:"Layer 2 floor upright (recess + ring)",optBzF2s:"Layer 2 floor laid down (half-round groove)",optBzF3:"Layer 3 ceiling (sleeve hang)",lblBzX:"Buzzer X",lblBzY:"Buzzer Y",hintLayout3:"The MX switch fits into the holder pocket (14.3 square), and the floor has 1 central post hole + 4 copper-wire holes (funneled downward). The deeper the recess, the deeper the switch sits. Boss = raised support on top of the lid. Round LEDs (3/4/5mm) plug in from below (Layer 2 side) into the body+0.3 hole on the Layer 3 top plate — the flange stops against the underside so only the dome tip protrudes (1.2/2.6/4.5 by size); the legs connect to the ESP32 (right-click the blue LED+ wire to change GPIO; 150~220Ω resistor recommended). The 2×5 rect two-tone (3-pin, pitch 2.54) inserts until the body is flush with the floor and protrudes ~3.8 upward — the center pin is the common cathode (GND), the two sides are the red/green anodes (right-click the blue/cyan wires to change GPIO; 150~220Ω resistor each). The buzzer (Ø12×8.3 passive piezo) plugs into a socket and sounds via GPIO PWM — the Layer 3 ceiling hangs it in a sleeve that does not pierce the top plate; if it is tight and overlaps the switch holder, use the Layer 2 floor (recess + guide ring, south wire notch). Laid down (axis horizontal) it seats in a half-round cradle (depth 2.5) on the platform like the ESP32 pocket, and if the buzzer top (Ø12) exceeds the Layer 2 height, the overlapping part of Layer 3 (cup/top plate underside) is carved out automatically. Right-click the pink wire to change the pin.",secView:"View",lblExplode:"Explode ⟷ Assemble",btnAnim:"▶ Assembly animation",btnReset:"Reset settings",secExport:"STL export",btnEx1:"Layer 1.stl",btnEx2:"Layer 2.stl",btnEx3:"Layer 3.stl",btnEx4:"Layer 4.stl",btnEx5:"OLED pod.stl",btnEx6:"OLED cover.stl",btnExOledTest:"OLED test.stl",lblFlip3:"Flip Layer 3 for printing",hintExport:"Layer 3 has its top plate on top, so it must be printed flipped to avoid supports. OLED test.stl is a piece cropped from Layer 2 around the OLED tower only — use it to quickly check the pocket, window, and pin fit without printing the whole part.",secPreset:"Presets (save/load settings)",btnPresetExport:"⬇ Export (.json)",btnPresetImport:"⬆ Import",hintPreset:"Save all current settings to a .json file, or load a saved file to restore them exactly. You can manage multiple designs as files.",woHead:"Wiring table",woHint:"Auto-updates with current settings · right-click a wire/label to change GPIO",statusText:"Building model…",secProduct:"Product",lblProduct:"Design",optProdDimsum:"Dim Sum Clicker",optProdTodo:"Todo Supporter (iMac)",hintProduct:"Choose which 3D design to configure. Each product has its own settings below.",secTodoClip:"Corner clip & fit",lblTWidth:"Device width",lblTEdge:"iMac edge thickness",lblTClr:"Slot clearance",lblTWall:"Wall thickness",lblTBridge:"Bottom bridge thickness",lblTRound:"Corner rounding",hintTodoClip:`A ⊓-shaped clip that hooks over the iMac's bottom edge near the bottom-right corner: a front lip and back lip grip both faces, and the bottom bridge wraps under the edge. The slot depth = edge thickness + clearance. For a 24" M-series iMac the edge is about 11.5mm; increase the clearance if the fit is too tight.`,secTodoWalls:"Lips (front / back)",lblTFront:"Front lip height",lblTBack:"Back lip height",hintTodoWalls:"The front lip sits on the screen side (keep it short so it barely covers the display) and backs the OLED housing. The back lip is hidden behind the display and holds the ESP32 pocket — make it tall enough to cover the ESP32 (24mm).",secTodoComp:"Electronics (ESP32 & OLED)",lblTEsp:"ESP32 back pocket",lblTOled:'0.96" OLED front housing',hintTodoComp:'The ESP32-C3 supermini drops into a pocket on the back lip (hidden behind the display), USB facing down for the cable. The 0.96" OLED slides down into the front housing with its display facing the user through a window. Route the OLED wires down and around to the ESP32.',secTodoExport:"STL export",btnTEx1:"Todo supporter.stl",hintTodoExport:"One printed part. Print it as it appears (bridge on the plate, clip opening facing up) — walls and pockets need no supports; the OLED window bridges cleanly."},ko:{appTitle:"🥟 딤섬 클리커 컨피규레이터",sub:"슬라이더를 움직이면 STL이 실시간으로 다시 설계됩니다",secSettings:"⚙ 설정",lblLanguage:"언어",optLangEn:"English",optLangKo:"한국어",secOuter:"외곽 디자인",lblShape:"모양",optRect:"둥근 네모",optRect2:"둥근 네모 더블 (스위치 2개)",optCircle:"완전 원형 (딤섬 찜기)",lblW:"가로 W / 지름",lblD:"세로 D",lblCorner:"모서리 둥글기",lblWall:"벽 두께",lblFit:"결합 유격",lblBands:"장식 홈",hintOuter:"층간·4층 결합부는 사각 단면 턱(1.2×1.5)·홈(깊이 1.8) — 결합 유격을 줄일수록 꽉 끼움. 설정은 자동 저장됩니다.",secLayers:"층 높이",lblF1:"1층 (배터리)",lblF2:"2층 (보드)",lblF3:"3층 (스위치)",lblLid:"4층 (딤섬 뚜껑)",lblLidH:"4층 밴드 높이",hintLayers:"4층 = bun_lid 디자인(Ø41)이 그대로 올라간 딤섬 뚜껑. 밴드 높이로 전체 높이를 조절하고, 결합부는 1·2·3층과 동일한 사각 턱·홈(결합 유격 적용)으로 홈이 3층 상판에, 턱이 4층 밑면에 있습니다. 캐릭터(21.6)를 완전히 덮으려면 경고에 표시되는 밴드 높이가 필요합니다.",secLayout2:"부품 배치 (2층)",tCenter:"중앙",tCenterTitle:"중앙 정렬 (Y=0)",lblEspRot:"ESP32 회전",optEsp0:"가로 (24×18)",optEsp90:"세로 (18×24)",optEspS0:"세움-가로 (24×5, 높이 18)",optEspS90:"세움-세로 (5×24, 높이 18)",optEspU0:"세움-USB아래 (18×5, 높이 24)",optEspU90:"세움-USB아래-세로 (5×18, 높이 24)",lblEspLift:"ESP32 띄움 (2.5층)",lblEspZ:"ESP32 Z 미세조정",lblModY:"충전모듈 Y",lblBatType:"배터리 용량",optBatNone:"배터리 없음 (ESP32 USB 직결)",lblBatPose:"배터리 배치",optBatFlat:"눕혀서 1층",optBatStand:"세워서 2층 (홈에 꽂기)",lblBatX:"배터리 X (세움)",lblOledType:"OLED 종류",optOled096:'0.96" (포켓 25.5×27.3, 4홀 핀 고정)',lblOledSide:"OLED 위치",optOledW:"서쪽 벽 (USB 반대)",optOledN:"북쪽 벽 (뒤)",optOledS:"남쪽 벽 (앞)",optOledNone:"없음",lblOledProud:"OLED 돌출",lblOledPod:"OLED 분리 포드",lblOledCover:"OLED 뒷면 커버",lblWireX:"배선구멍 X",lblWireY:"배선구멍 Y",lblWireRot:"배선구멍 방향",optWire0:"가로 (14×5)",optWire90:"세로 (5×14)",hintLayout2:"배선구멍은 배터리 +/− 두 가닥이 함께 지나가는 긴 슬롯입니다. OLED는 타워 뒤(내부)에서 통째로 밀어 넣습니다 — 뒷면 완전 개방, 앞은 벽+창이 잡아줌. OLED 돌출을 올리면 포드가 외곽선 밖으로 나오며, 네모/원형 외곽 곡선을 그대로 따라갑니다. 충전모듈 USB는 항상 오른쪽(동쪽) 벽. <b>배터리 없음</b>을 선택하면 배터리·충전모듈이 빠지고 ESP32가 동쪽 벽에 도킹되어 USB를 바로 꽂습니다 — 위아래 위치는 ESP32 Y로 조절. <b>OLED 분리 포드</b>를 켜면 OLED 타워(창·포켓 포함)가 별도 출력 파트가 됩니다: 벽 관통 개구에 위에서 아래로 슬라이드 — 텅(전면부)이 외곽면과 플러시로 개구를 채우고, 어깨가 벽 안쪽에 걸리며, 안쪽 U자 소켓 레일이 뒤·옆을 잡습니다. 3층을 덮으면 노치가 위를 눌러 잠금. 포드·레일 모두 서포트 없이 세워서 출력.",secLayout3:"부품 배치 (3층)",lblBoss:"스위치 Boss",lblBossH:"Boss 높이",lblSink:"스위치 매립 깊이",lblSwGap:"스위치 간격 (더블)",lblPocketX:"포켓 가로 (X)",lblPocketY:"포켓 세로 (Y)",lblCornerOut:"포켓 귀퉁이 여유",lblSteam:"찜통 바닥 슬랫",lblLedType:"LED 종류",optLed3:"3mm 원형 (구멍 Ø3.3, 돌출 ~1.2)",optLed4:"4mm 원형 (구멍 Ø4.3, 돌출 ~2.6)",optLed5:"5mm 원형 (구멍 Ø5.3, 돌출 ~4.5)",optLedR25:"2×5 사각 투톤 3핀 (구멍 2.3×5.3, 돌출 ~3.8)",lblBz:"부저 (Ø12 피에조)",lblBzMount:"부저 장착",optBzF2:"2층 바닥 세움 (리세스 + 링)",optBzF2s:"2층 바닥 눕힘 (반원 홈)",optBzF3:"3층 천장 (슬리브 매달림)",lblBzX:"부저 X",lblBzY:"부저 Y",hintLayout3:"MX 스위치가 홀더 포켓(14.3각)에 꽂히고, 바닥에 중앙 기둥 구멍 1개 + 구리선 구멍 4개가 뚫립니다(아래로 깔때기). 매립 깊이가 클수록 스위치가 깊게 파묻힙니다. Boss = 뚜껑 위 볼록 받침. LED(3/4/5mm 원형)는 3층 상판의 몸통+0.3 구멍에 아래(2층 쪽)에서 꽂습니다 — 플랜지가 밑면에 걸려 돔 끝만 돌출(크기별 1.2/2.6/4.5), 다리는 ESP32로 연결(LED+ 파란 전선 우클릭으로 GPIO 변경, 저항 150~220Ω 권장). 2×5 사각 투톤(3핀, 피치 2.54)은 몸통이 바닥과 같은 높이까지 들어가 위로 ~3.8 돌출 — 가운데 핀이 공통 캐소드(GND), 양쪽이 빨강/초록 애노드(각각 파란/청록 전선 우클릭으로 GPIO 변경, 저항 각 150~220Ω). 부저(Ø12×8.3 수동 피에조)는 소켓에 꽂아 GPIO PWM으로 울립니다 — 3층 천장은 상판을 뚫지 않는 슬리브에 매달고, 좁아서 스위치 홀더와 겹치면 2층 바닥(리세스+가이드 링, 남쪽 전선 노치)을 쓰세요. 눕힘(축 가로)은 ESP32 포켓처럼 플랫폼에 반원 홈(깊이 2.5)만 파여 안착하고, 부저 위(Ø12)가 2층 높이를 넘으면 3층의 겹치는 부분(컵·상판 밑면)이 자동으로 같이 파입니다. 핑크 전선 우클릭으로 핀 변경.",secView:"보기",lblExplode:"분해 ⟷ 조립",btnAnim:"▶ 조립 애니메이션",btnReset:"설정 초기화",secExport:"STL 내보내기",btnEx1:"1층.stl",btnEx2:"2층.stl",btnEx3:"3층.stl",btnEx4:"4층.stl",btnEx5:"OLED포드.stl",btnEx6:"OLED커버.stl",btnExOledTest:"OLED 테스트.stl",lblFlip3:"3층 출력용 뒤집기",hintExport:"3층은 상판이 위에 있어서 뒤집어 출력해야 서포트가 없습니다. OLED 테스트.stl은 2층에서 OLED 타워 주변만 잘라낸 조각으로, 전체를 뽑지 않고 포켓·창·핀 피팅을 빠르게 확인할 때 쓰세요.",secPreset:"프리셋 (설정 저장/불러오기)",btnPresetExport:"⬇ 내보내기 (.json)",btnPresetImport:"⬆ 불러오기",hintPreset:"현재 모든 설정을 .json 파일로 저장하거나, 저장해둔 파일을 불러와 그대로 복원합니다. 여러 디자인을 파일로 관리할 수 있습니다.",woHead:"배선표",woHint:"현재 설정에 맞춰 자동 갱신 · 전선/라벨 우클릭으로 GPIO 변경",statusText:"모델 생성 중…",secProduct:"제품",lblProduct:"디자인",optProdDimsum:"딤섬 클리커",optProdTodo:"투두 서포터 (아이맥)",hintProduct:"설계할 3D 디자인을 선택하세요. 제품마다 아래에 별도 설정이 있습니다.",secTodoClip:"코너 클립 & 물림",lblTWidth:"기기 폭",lblTEdge:"아이맥 모서리 두께",lblTClr:"슬롯 유격",lblTWall:"벽 두께",lblTBridge:"바닥 브릿지 두께",lblTRound:"모서리 둥글기",hintTodoClip:'아이맥 우측하단 코너의 아래 가장자리에 걸쳐 끼우는 ㄷ자 클립입니다: 앞턱·뒤턱이 양쪽 면을 잡고, 바닥 브릿지가 가장자리 밑을 감쌉니다. 슬롯 깊이 = 모서리 두께 + 유격. 24" M시리즈 아이맥은 모서리가 약 11.5mm이며, 너무 빡빡하면 유격을 늘리세요.',secTodoWalls:"턱 (앞/뒤)",lblTFront:"앞턱 높이",lblTBack:"뒤턱 높이",hintTodoWalls:"앞턱은 화면 쪽에 위치하며(화면을 거의 가리지 않게 짧게 유지) OLED 하우징을 받쳐줍니다. 뒤턱은 화면 뒤에 숨어 ESP32 포켓을 잡습니다 — ESP32(24mm)를 덮을 만큼 충분히 높게 하세요.",secTodoComp:"전자부품 (ESP32 & OLED)",lblTEsp:"ESP32 뒷면 포켓",lblTOled:'0.96" OLED 앞면 하우징',hintTodoComp:'ESP32-C3 슈퍼미니가 뒤턱의 포켓에 꽂히고(화면 뒤에 숨김), USB는 케이블용으로 아래를 향합니다. 0.96" OLED는 앞면 하우징에 위에서 아래로 끼워지며 창을 통해 디스플레이가 사용자를 향합니다. OLED 전선은 아래로 돌려 ESP32로 연결하세요.',secTodoExport:"STL 내보내기",btnTEx1:"투두 서포터.stl",hintTodoExport:"한 개의 출력 파트입니다. 보이는 그대로 출력하세요(브릿지를 바닥에, 클립 입구가 위로) — 벽과 포켓은 서포트가 필요 없고, OLED 창은 깔끔하게 브릿징됩니다."}};Object.assign(Bs.en,nd.en);Object.assign(Bs.ko,nd.ko);let ps="en";try{const i=localStorage.getItem("dimsum-lang");(i==="en"||i==="ko")&&(ps=i)}catch{}function te(i,...e){const t=Bs[ps]||Bs.en,n=i in t?t[i]:Bs.en[i]??i;return typeof n=="function"?n(...e):n}function id(){document.documentElement.lang=ps;const i=te("title");i&&(document.title=i),document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=te(e.dataset.i18n)}),document.querySelectorAll("[data-i18n-html]").forEach(e=>{e.innerHTML=te(e.dataset.i18nHtml)}),document.querySelectorAll("[data-i18n-title]").forEach(e=>{e.title=te(e.dataset.i18nTitle)})}function rd(){const i=document.getElementById("ghostBtn");i&&(i.textContent=te("tgGhost",Xi));const e=document.getElementById("wiresBtn");e&&(e.textContent=te("tgWires",Yi));const t=document.getElementById("xrayBtn");t&&(t.textContent=te("tgXray",fr))}function qx(i){ps=i==="ko"?"ko":"en";try{localStorage.setItem("dimsum-lang",ps)}catch{}id(),rd(),Ad(),ha(),Ks()}const nh={520:{L:36.5,W:28.5,T:4.3,clr:.7},650:{L:40,W:20,T:8,clr:.5}},$t=()=>nh[g.batType]||nh[520],Lt=()=>g.batType==="none",Ki=()=>!Lt()&&g.batPose==="stand",Li=()=>!Lt()&&["s0","s90","u0","u90"].includes(g.espRot),ht={l:24,w:18,h:4.2,usbZ:2.6},Sn={l:19,w:14,h:4.5,usbZ:2.9,usbOver:1},jo={"049":{w:15,hgt:16,t:2.4,winW:13.5,winH:8,winC:8.9},"096":{w:25,hgt:27.05,t:3.5,winW:23.2,winH:12.4,winC:14.5,pegs:{px:21.2,pz:22.1,ox:.15,d:1.8,len:2.5}}},sd=.2,ih=.6,jt=()=>jo[g.oledType]||jo["049"],si=()=>g.bossOn?g.bossH:0,Di=()=>jt().w+3,mi=()=>4.2+jt().hgt+sd+1.2,Ot={seatH:5.5,floorT:.6,cup:20,H:17.9,pinLen:3.1,cornerSq:4,holes:[[0,0,4.3],[5,0,1.8],[-5,0,1.8],[3.8,-2.7,1.8],[-2.7,-5.2,1.8]]},ln={r:20.5,bandW:2.3,h:14.22,innerH:10.9},jx=21.6,rh={3:{d:3,fl:3.85,cyl:2.9,domeR:1.5},4:{d:4,fl:4.8,cyl:3.8,domeR:2},5:{d:5,fl:5.8,cyl:5.2,domeR:2.5},r25:{rect:!0,w:5,t:2,bodyH:7,pitch:2.54,fl:5.6}},fi=()=>rh[g.ledType]||rh[3],li={clr:.15,railT:1.2},od=()=>Math.max(jt().winW+2.1,jt().w-2),an={t:1.2,tab:1.5,ribW:2.4,ribL:10,ribHMax:15},El=()=>Di(),Hl=()=>g.coverOn&&g.oledSide!=="none"&&mi()>g.f2H+g.f3H-.05,Sl=()=>Math.min(mi()-g.f2H-g.f3H,an.ribHMax),Zx=()=>Gn().seatY-jt().t-2-an.t-.15;function Zo(){const i=Math.max(g.swBodyX,g.swBodyY)/2+g.cornerOut+.4;return Math.max(0,Math.min(an.ribL,Zx()-i))}function ad(i,e,t,n,r,s,o=0){const a=new Fl;if(a.moveTo(0,0),a.lineTo(-i,0),o>.05&&e>o*1.4){const c=Math.hypot(i,e),u=-i/c,h=-e/c;a.lineTo(u*o,e+h*o),a.quadraticCurveTo(0,e,0,e-o)}else a.lineTo(0,e);a.closePath();const l=new Zs(a,{depth:t,bevelEnabled:!1,curveSegments:8});return l.deleteAttribute("uv"),l.rotateX(Math.PI/2),l.rotateZ(Math.PI/2),l.translate(-t/2,n,r),qt(l,s)}const ze={d:12,h:8.3,clr:.25,wall:1.6,sink:1.8,sideSink:2.5,ring:4},sh=()=>si()+jx,Wi=1.6,tt=2,pn=2.2,Mn=3.2,pi=1.5,ld=1.2,_r={out:.7,d:1.8},Pn=.4,g={product:"todo",tWidth:62,tEdge:11.5,tClr:.6,tWall:2.5,tBridge:3,tRound:3,tFront:15,tBack:30,tEspOn:!0,tOledOn:!0,shape:"rect",W:44,D:39,R:8,wall:2.3,bands:!0,fitClr:.08,f1H:7.5,f2H:16,f3H:10,bossOn:!0,bossH:2.5,standSink:2.5,cornerOut:.4,swBodyX:14.3,swBodyY:14.3,steamOn:!0,espX:0,espY:8,espRot:0,espLift:0,espZ:0,modY:-9,oledSide:"W",oledType:"049",oledProud:0,oledPodOn:!1,coverOn:!0,batType:"520",batPose:"flat",batX:-8,wireX:-6,wireY:-12,wireRot:0,swGpio:4,sw2Gpio:6,sdaGpio:8,sclGpio:9,swGap:29,lidOn:!0,lidH:6,ledOn:!0,ledType:"3",ledX:0,ledY:-14.5,ledGpio:3,led2Gpio:5,bzOn:!0,bzMount:"f2",bzX:8,bzY:-8,bzGpio:2};try{const i=JSON.parse(localStorage.getItem("dimsum-params")||"{}");for(const e in i)e in g&&(g[e]=i[e]);i.batType==="650"&&!("batPose"in i)&&(g.batPose="stand")}catch{}const la=()=>{try{localStorage.setItem("dimsum-params",JSON.stringify(g))}catch{}},cd=["W","D","R","wall","fitClr","f1H","f2H","f3H","bossH","standSink","cornerOut","swBodyX","swBodyY","espX","espY","espLift","espZ","modY","oledProud","batX","wireX","wireY","lidH","swGap","ledX","ledY","bzX","bzY","tWidth","tEdge","tClr","tWall","tBridge","tRound","tFront","tBack"];let oh=null;function Zt(){la(),clearTimeout(oh),oh=setTimeout(Ks,250)}for(const i of cd){const e=document.getElementById(i),t=document.getElementById(i+"v"),n=+e.step<.1?2:1,r=()=>{t.textContent=(+e.value).toFixed(n)};e.value=g[i],e.addEventListener("input",()=>{g[i]=+e.value,r(),Zt()}),r()}function Kx(i,e){if(i.disabled)return;const t=+i.step||1,n=t<1?(String(t).split(".")[1]||"").length:0;let r=+i.value+e*t;r=Math.min(+i.max,Math.max(+i.min,r)),i.value=n?r.toFixed(n):Math.round(r),i.dispatchEvent(new Event("input"))}for(const i of document.querySelectorAll("input[type=range]")){const e=(n,r)=>{const s=document.createElement("button");return s.className="nudge",s.textContent=n,s.tabIndex=-1,s.addEventListener("click",()=>Kx(i,r)),s},t=i.nextElementSibling;i.parentNode.insertBefore(e("−",-1),i),i.parentNode.insertBefore(e("+",1),t&&t.classList.contains("val")?t:i.nextSibling)}function Gl(){const i=g.shape==="circle";document.getElementById("D").disabled=i,document.getElementById("R").disabled=i,document.getElementById("swGap").disabled=g.shape!=="rect2",ca()}function ca(){const i=Lt(),e=g.shape==="circle";document.getElementById("batPose").disabled=i,document.getElementById("batX").disabled=!Ki(),document.getElementById("espX").disabled=i,document.getElementById("espY").disabled=i&&e,document.getElementById("espYCenter").disabled=i&&e,document.getElementById("espRot").disabled=i,document.getElementById("espLift").disabled=i||Li(),document.getElementById("modY").disabled=i||e;for(const t of["wireX","wireY","wireRot"])document.getElementById(t).disabled=i}document.getElementById("shape").value=g.shape;Gl();document.getElementById("shape").addEventListener("change",i=>{if(g.shape=i.target.value,g.shape==="circle"&&g.W<52){g.W=54;const e=document.getElementById("W");e.value=54,document.getElementById("Wv").textContent="54.0"}g.shape==="rect2"&&g.D<63&&(g.D=63,document.getElementById("D").value=63,document.getElementById("Dv").textContent="63.0"),Gl(),Zt()});document.getElementById("espRot").value=String(g.espRot);document.getElementById("wireRot").value=String(g.wireRot);document.getElementById("oledSide").value=g.oledSide;document.getElementById("oledType").value=g.oledType;document.getElementById("oledType").addEventListener("change",i=>{g.oledType=i.target.value,Zt()});document.getElementById("batType").value=g.batType;document.getElementById("batPose").value=g.batPose;document.getElementById("batType").addEventListener("change",i=>{if(g.batType=i.target.value,Lt()){const e=Math.max(0,Fs()-(ht.w+Pn)/2-1);Math.abs(g.espY)>e&&(g.espY=Math.round(Math.sign(g.espY)*e*2)/2,ud())}ca(),Zt()});document.getElementById("batPose").addEventListener("change",i=>{g.batPose=i.target.value,ca(),Zt()});document.getElementById("bands").checked=g.bands;document.getElementById("bossOn").checked=g.bossOn;document.getElementById("bossH").disabled=!g.bossOn;document.getElementById("bossOn").addEventListener("change",i=>{g.bossOn=i.target.checked,document.getElementById("bossH").disabled=!g.bossOn,Zt()});document.getElementById("steamOn").checked=g.steamOn;document.getElementById("steamOn").addEventListener("change",i=>{g.steamOn=i.target.checked,Zt()});document.getElementById("lidOn").checked=g.lidOn;document.getElementById("lidH").disabled=!g.lidOn;document.getElementById("lidOn").addEventListener("change",i=>{g.lidOn=i.target.checked,document.getElementById("lidH").disabled=!g.lidOn,Zt()});const kl=()=>{for(const i of["ledType","ledX","ledY"])document.getElementById(i).disabled=!g.ledOn};document.getElementById("ledOn").checked=g.ledOn;document.getElementById("ledType").value=g.ledType;kl();document.getElementById("ledOn").addEventListener("change",i=>{g.ledOn=i.target.checked,kl(),Zt()});document.getElementById("ledType").addEventListener("change",i=>{g.ledType=i.target.value,Zt()});const Vl=()=>{for(const i of["bzMount","bzX","bzY"])document.getElementById(i).disabled=!g.bzOn};document.getElementById("bzOn").checked=g.bzOn;document.getElementById("bzMount").value=g.bzMount;Vl();document.getElementById("bzOn").addEventListener("change",i=>{g.bzOn=i.target.checked,Vl(),Zt()});document.getElementById("bzMount").addEventListener("change",i=>{g.bzMount=i.target.value,Zt()});document.getElementById("espYCenter").addEventListener("click",()=>{g.espY=0,document.getElementById("espY").value=0,document.getElementById("espYv").textContent="0.0",Zt()});document.getElementById("espRot").addEventListener("change",i=>{const e=i.target.value;g.espRot=e==="0"||e==="90"?+e:e,ca(),Zt()});document.getElementById("wireRot").addEventListener("change",i=>{g.wireRot=+i.target.value,Zt()});document.getElementById("oledSide").addEventListener("change",i=>{g.oledSide=i.target.value,Zt()});document.getElementById("oledPodOn").checked=g.oledPodOn;document.getElementById("oledPodOn").addEventListener("change",i=>{g.oledPodOn=i.target.checked,Zt()});document.getElementById("coverOn").checked=g.coverOn;document.getElementById("coverOn").addEventListener("change",i=>{g.coverOn=i.target.checked,Zt()});document.getElementById("bands").addEventListener("change",i=>{g.bands=i.target.checked,Zt()});document.getElementById("resetBtn").addEventListener("click",()=>{localStorage.removeItem("dimsum-params"),location.reload()});function ud(){for(const i of cd){const e=document.getElementById(i),t=+e.step<.1?2:1;e.value=g[i],document.getElementById(i+"v").textContent=(+e.value).toFixed(t)}document.getElementById("shape").value=g.shape,document.getElementById("espRot").value=String(g.espRot),document.getElementById("wireRot").value=String(g.wireRot),document.getElementById("oledSide").value=g.oledSide,document.getElementById("oledType").value=g.oledType,document.getElementById("oledPodOn").checked=g.oledPodOn,document.getElementById("coverOn").checked=g.coverOn,document.getElementById("batType").value=g.batType,document.getElementById("batPose").value=g.batPose,document.getElementById("bands").checked=g.bands,document.getElementById("bossOn").checked=g.bossOn,document.getElementById("bossH").disabled=!g.bossOn,document.getElementById("steamOn").checked=g.steamOn,document.getElementById("lidOn").checked=g.lidOn,document.getElementById("lidH").disabled=!g.lidOn,document.getElementById("ledOn").checked=g.ledOn,document.getElementById("ledType").value=g.ledType,kl(),document.getElementById("bzOn").checked=g.bzOn,document.getElementById("bzMount").value=g.bzMount,Vl(),Gl(),document.getElementById("product").value=g.product,document.getElementById("tEspOn").checked=g.tEspOn,document.getElementById("tOledOn").checked=g.tOledOn}document.getElementById("presetExport").addEventListener("click",()=>{const i=new Blob([JSON.stringify(g,null,2)],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(i),e.download="dimsum-preset.json",document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(e.href),2e3)});const Ml=document.getElementById("presetFile");document.getElementById("presetImport").addEventListener("click",()=>Ml.click());Ml.addEventListener("change",i=>{const e=i.target.files[0];if(!e)return;const t=new FileReader;t.onload=()=>{try{const n=JSON.parse(t.result);let r=0;for(const s in n)s in g&&(g[s]=n[s],r++);ud(),tc(),la(),Ks(),document.getElementById("warnings").textContent=te("presetLoaded",r)}catch{document.getElementById("warnings").textContent=te("presetError")}},t.readAsText(e),Ml.value=""});const Al=document.getElementById("viewer"),Tr=new Gh({antialias:!0});Tr.setPixelRatio(window.devicePixelRatio);Al.appendChild(Tr.domElement);const Qi=new zv;Qi.background=new _t(16183783);const Cr=new $n(40,1,.1,2e3);Cr.position.set(95,-110,85);Cr.up.set(0,0,1);const Wl=new Px(Cr,Tr.domElement);Wl.target.set(0,0,28);Wl.enableDamping=!0;Qi.add(new bx(16775920,11575424,1.1));const hd=new td(16777215,1.6);hd.position.set(60,-80,120);Qi.add(hd);const dd=new td(16771520,.5);dd.position.set(-80,60,40);Qi.add(dd);const Xl=new Rx(300,30,14207914,15261641);Xl.rotation.x=Math.PI/2;Xl.position.z=-14;Qi.add(Xl);function fd(){const i=Al.clientWidth,e=Al.clientHeight;Tr.setSize(i,e),Cr.aspect=i/e,Cr.updateProjectionMatrix()}window.addEventListener("resize",fd);fd();(function i(){requestAnimationFrame(i),Wl.update(),Tr.render(Qi,Cr)})();const Yl=new Zi({color:14598284,roughness:.75,metalness:.02}),$l=new Zi({color:14598284,roughness:.75,transparent:!0,opacity:.42}),lr=i=>new Zi({color:i,roughness:.6,transparent:!0,opacity:.9}),fn={bat:lr(8688808),esp:lr(3360604),mod:lr(12603452),oled:lr(2072198),stand:lr(9462210),face:lr(16044657),led:new Zi({color:16774880,emissive:16761707,emissiveIntensity:.6,roughness:.25,transparent:!0,opacity:.95}),ledR:new Zi({color:16770012,emissive:14701116,emissiveIntensity:.5,roughness:.25,transparent:!0,opacity:.95}),ledG:new Zi({color:14676962,emissive:3973978,emissiveIntensity:.5,roughness:.25,transparent:!0,opacity:.95}),bz:lr(2303790)},xt=[new di,new di,new di,new di,new di];xt.forEach(i=>Qi.add(i));let dr=[null,null,null,null],Jt=[null,null,null,null],bl=null;function qt(i,e,t=1e-5){let n=i;e&&(n=i.clone(),n.applyMatrix4(e));const r=Ux(n,t),s=r.index.array,o=[];for(let l=0;l<s.length;l+=3)s[l]!==s[l+1]&&s[l+1]!==s[l+2]&&s[l]!==s[l+2]&&o.push(s[l],s[l+1],s[l+2]);const a=new bl.Mesh({numProp:3,vertProperties:new Float32Array(r.attributes.position.array),triVerts:new Uint32Array(o)});return a.merge(),new bl.Manifold(a)}function ql(i){const e=i.getMesh();let t=new un;return t.setAttribute("position",new Gt(e.vertProperties.slice(),3)),t.setIndex(new Gt(e.triVerts.slice(),1)),t=t.toNonIndexed(),t.computeVertexNormals(),t}function jl(i,e,t,n){const r=new i,s=e/2,o=t/2;return n=Math.max(.05,Math.min(n,s-.01,o-.01)),r.moveTo(-s+n,-o),r.lineTo(s-n,-o),r.absarc(s-n,-o+n,n,-Math.PI/2,0),r.lineTo(s,o-n),r.absarc(s-n,o-n,n,0,Math.PI/2),r.lineTo(-s+n,o),r.absarc(-s+n,o-n,n,Math.PI/2,Math.PI),r.lineTo(-s,-o+n),r.absarc(-s+n,-o+n,n,Math.PI,Math.PI*1.5),r}const Xs=(i,e,t)=>jl(Fl,i,e,t),Nn=()=>g.shape==="circle"?g.W:g.D,vr=()=>g.shape==="circle"?g.W/2:g.R,_n=()=>g.shape==="rect2",pd=()=>_n()?[-g.swGap/2,g.swGap/2]:[0],An=i=>Xs(g.W-2*i,Nn()-2*i,vr()-i),md=i=>jl($o,g.W-2*i,Nn()-2*i,vr()-i);function gd(i,e,t=0,n=0,r=0){const s=new Zs(i,{depth:e,bevelEnabled:!1,curveSegments:14});return s.deleteAttribute("uv"),s.translate(n,r,t),s}const vn=(i,e,t=0,n=0,r=0)=>qt(gd(i,e,t,n,r));function _s(i,e,t,n){const r=An(i);return r.holes.push(md(e)),vn(r,t,n)}function Je(i,e,t,n,r,s,o=0,a=null){const l=o>0?Xs(i,e,o):Xs(i,e,.05);return qt(gd(l,t,s,n,r),a)}function ms(i,e,t,n=96){const r=new In(i,i,e,n);return r.rotateX(Math.PI/2),r.translate(0,0,t+e/2),r.deleteAttribute("uv"),qt(r)}function _d(i){const e=_r.out+g.fitClr;return _s(e,e+ld,pi,i)}function vd(i){return ot(i,_s(_r.out,g.wall+.6,_r.d,-.05))}const Zl=(i,e,t)=>{const n=i[t](e);return i.delete(),e.delete(),n},Et=(i,e)=>Zl(i,e,"add"),ot=(i,e)=>Zl(i,e,"subtract"),oi=(i,e)=>Zl(i,e,"intersect"),Fo=(i,e,t)=>qt(i,e,t),Jx=new Dx,Qt={};function Hi(i){return new Promise((e,t)=>Jx.load(i,n=>{n.deleteAttribute("uv"),n.computeVertexNormals(),e(n)},void 0,t))}function ui(i,e=!0){i.computeBoundingBox();const t=i.boundingBox,n=e?(t.min.x+t.max.x)/2:t.min.x,r=e?(t.min.y+t.max.y)/2:t.min.y;return i.translate(-n,-r,-t.min.z),i}async function Qx(){const[i,e,t,n,r,s,o,a]=await Promise.all([Hi(Hx),Hi(Gx),Hi(kx),Hi(Vx),Hi(Wx),Hi(Xx),Hi(Yx),Hi($x)]);ui(i,!1),i.computeBoundingBox();const l=i.boundingBox;i.translate(-(l.min.x+l.max.x)/2,-(l.min.y+l.max.y)/2,-(l.min.z+l.max.z)/2),i.rotateZ(Math.PI),Qt.usb=i,Qt.switch=ui(e),Qt.bat=ui(t),Qt.esp=ui(n,!1),Qt.mod=ui(r,!1),Qt.oled=ui(s,!1),Qt.face=ui(o),Qt.bunLid=ui(a)}function Kl(i,e,t=null){if(!g.bands)return i;for(const n of e){const r=Xs(g.W+.1,Nn()+.1,vr());r.holes.push(md(.6));let s=vn(r,1.2,n-.6);t&&(s=ot(s,t())),i=ot(i,s)}return i}const xd=()=>g.W/2-g.wall,Fs=()=>Nn()/2-g.wall;function ua(i,e,t,n){const r=vr()-n,s=e-vr(),o=t-vr();if(i<=s)return t-n;const a=r*r-(i-s)*(i-s);return a>0?o+Math.sqrt(a):0}function ey(){let i=vn(An(0),Wi);i=Et(i,_s(0,g.wall,g.f1H-Wi,Wi)),i=Et(i,_d(g.f1H));const e=$t(),t=e.L+e.clr,n=e.W+e.clr;if(!Lt()&&!Ki()&&rs(t/2+.6,n/2+.6)){const r=An(g.wall);r.holes.push(jl($o,t,n,2)),i=Et(i,vn(r,1.2,Wi))}return i=Kl(i,[g.f1H*.55]),i}const xr=()=>g.espRot==="u0"||g.espRot==="u90",wl=()=>g.espRot==="s90"||g.espRot==="u90",yr=()=>(xr()?tt-1:tt)+g.espZ;function yd(){if(Li()){const t=ht.h+1.6,n=(xr()?ht.w:ht.l)+Pn;return wl()?{w:t,d:n}:{w:n,d:t}}const i=g.espRot===90?ht.w:ht.l,e=g.espRot===90?ht.l:ht.w;return{w:i+Pn,d:e+Pn}}const Ys=3,Oo=7.5;function Ed(i=!1){const e=Qt.esp.clone();return e.rotateY(Math.PI),g.espRot===90&&e.rotateZ(Math.PI/2),ui(e),i&&(e.scale(1.04,1.04,1.03),e.translate(0,0,-.15)),e}function Sd(i=!1){const e=Qt.esp.clone();return xr()?(e.rotateY(-Math.PI/2),g.espRot==="u90"&&e.rotateZ(Math.PI/2)):(e.rotateX(Math.PI/2),g.espRot==="s90"&&e.rotateZ(Math.PI/2)),ui(e),i&&(e.scale(wl()?1.1:1.02,wl()?1.02:1.1,1.02),e.translate(0,0,-.3)),e}const Ko=()=>Math.sqrt(Math.max((g.W/2)**2-81,1));function $s(){if(g.shape==="circle"){const e=Ko()-2.5;return{x:e-.2-Sn.l/2,y:0,edgeX:e}}const i=ua(Math.abs(g.modY)+Sn.w/2+.4,Nn()/2,g.W/2,g.wall);return{x:i-.2-Sn.l/2,y:g.modY,edgeX:i}}function Er(){if(g.shape==="circle"){const e=Ko()-2.5;return{x:e-.2-ht.l/2,y:0,edgeX:e}}const i=ua(Math.abs(g.espY)+ht.w/2+.4,Nn()/2,g.W/2,g.wall);return{x:i-.2-ht.l/2,y:g.espY,edgeX:i}}function Gn(){const i=g.oledSide,e=i==="W"?g.W/2:Nn()/2,t=i==="W"?Nn()/2:g.W/2,n=i==="N"?0:i==="W"?Math.PI/2:Math.PI,r=new At().makeRotationZ(n),s=g.oledProud,o=g.shape==="circle"?e-ih+s:ua(jt().w/2+.4,t,e,ih)+s;return{dHalf:e,acrossHalf:t,m:r,innerFace:e-g.wall,seatY:o,proud:s,outHalf:e+s}}function ty(){let i=vn(An(0),tt);if(i=Et(i,_s(0,g.wall,g.f2H-tt,tt)),i=Et(i,_d(g.f2H)),i=Et(i,vn(An(g.wall),pn,tt)),g.shape==="circle"){const s=Ko(),o=Math.max(8,g.f2H-2.5);i=Et(i,Je(2.5,18,o,s-1.25,0,0)),i=ot(i,Je(10,18,o-2,s+5,0,2))}const e=yd(),t=!Lt()&&!Li()&&g.espLift>0,n=()=>Lt()?Je(ht.l+Pn,ht.w+Pn,pn+2,Er().x,Er().y,tt+g.espZ,1.5):Li()?Fo(Sd(!0),new At().makeTranslation(g.espX,g.espY,yr())):Je(e.w,e.d,pn+2,g.espX,g.espY,tt+g.espZ,1.5);if(t||(i=ot(i,n())),t){const a=tt+g.espLift+g.espZ,l=g.espRot===90,c=g.W+Nn();let u=l?Je(8,c,a+2.5-tt,g.espX,0,tt):Je(c,8,a+2.5-tt,0,g.espY,tt);u=Et(u,l?Je(13,11,a-tt,g.espX,g.espY+Oo,tt,1):Je(11,13,a-tt,g.espX+Oo,g.espY,tt,1)),u=oi(u,vn(An(0),a+2.5,0)),i=Et(i,u);const h=ht.l+Pn;i=ot(i,l?Je(10,h,2.5+1,g.espX,g.espY,a):Je(h,10,2.5+1,g.espX,g.espY,a)),i=ot(i,Fo(Ed(!0),new At().makeTranslation(g.espX,g.espY,a-Ys)));const p=4.3,f=1.3,x=.9,E=5;for(const _ of[-1,1])i=Et(i,l?Je(f,E,x,g.espX+_*(p+f/2),g.espY+Oo,a-x):Je(E,f,x,g.espX+Oo,g.espY+_*(p+f/2),a-x))}if(!Lt()){const s=$s();i=ot(i,Je(Sn.l+Pn+1,Sn.w+Pn,pn+2,s.x-.5,s.y,tt,.4))}if(Ki()){const s=$t();i=ot(i,Je(s.T+s.clr,s.L+s.clr,pn+2,g.batX,0,tt,1.5))}if(g.oledSide!=="none")if(g.oledPodOn){const s=jt(),{m:o,seatY:a,outHalf:l}=Gn(),c=a-s.t-2,u=tt+pn,h=Math.min(g.f2H-u-.1,8),p=Di()/2+li.clr;let f=Je(li.railT,4.5,h,p+li.railT/2,c+2.05,u,0,o);f=Et(f,Je(li.railT,4.5,h,-(p+li.railT/2),c+2.05,u,0,o)),f=Et(f,Je(2*p+2*li.railT,li.railT,h,0,c-li.clr-li.railT/2,u,0,o)),f=oi(f,vn(An(0),g.f2H,0)),i=Et(i,f);const x=od()+2*li.clr;i=ot(i,Je(x,g.wall+3.2,g.f2H-u+.6,0,l+g.oledProud+1-(g.wall+3.2)/2,u-.2,0,o)),i=ot(i,Je(x+.4,g.wall+3,pi+.4,0,l+.5-(g.wall+3)/2,g.f2H-.05,0,o))}else{const s=jt(),{m:o,seatY:a,proud:l,outHalf:c}=Gn(),u=a-s.t-2,h=c-u,p=mi();let f=Je(Di(),h,p-tt,0,c-h/2,tt,0,o);g.shape!=="circle"&&(f=oi(f,vn(An(-l),p,0))),i=Et(i,f),i=Md(i),t||(i=ot(i,n()))}{const s=Lt()?Er():$s(),o=Lt()?ht.usbZ+g.espZ:Sn.usbZ,a=g.shape==="circle"?Ko():ua(Math.abs(s.y)+5.5,Nn()/2,g.W/2,0),l=Math.max(5.4,a+.4-(s.edgeX-1.5)),c=new At().makeTranslation(a+.4-l/2,s.y,tt+o).multiply(new At().makeScale(l/9,1,3.5/3.8));i=ot(i,Fo(Qt.usb,c))}if(!Lt()){const s=g.wireRot===90?5:14,o=g.wireRot===90?14:5;i=ot(i,Je(s,o,tt+pn+1,g.wireX,g.wireY,-.4,2.4))}if(g.bzOn&&g.bzMount==="f2"){const s=tt+pn;let o=ot(zs(ze.d/2+ze.clr+ze.wall,ze.ring,s),zs(ze.d/2+ze.clr,ze.ring+.4,s-.2));o=oi(o,vn(An(0),s+ze.ring+1,0)),i=Et(i,o),i=ot(i,zs(ze.d/2+ze.clr,ze.sink+.05,s-ze.sink)),i=ot(i,Je(4,6,ze.sink+ze.ring+.2,g.bzX,g.bzY-(ze.d/2+ze.clr+ze.wall/2+.4),s-ze.sink))}if(g.bzOn&&g.bzMount==="f2s"){const s=tt+pn-ze.sideSink+ze.d/2,o=new In(ze.d/2+ze.clr,ze.d/2+ze.clr,ze.h+.5,48);o.rotateZ(Math.PI/2),o.translate(g.bzX,g.bzY,s),o.deleteAttribute("uv"),i=ot(i,qt(o))}i=vd(i);const r=g.oledSide!=="none"&&(g.oledProud>0||g.shape==="circle"||g.oledPodOn)?()=>{const s=jt(),{m:o,seatY:a,outHalf:l}=Gn(),c=a-s.t-2;return Je(Di(),l-c+.4,mi(),0,(l+c)/2+.2,0,0,o)}:null;return i=Kl(i,[g.f2H*.3,g.f2H*.66],r),i}function Md(i,e){const t=jt(),{m:n,seatY:r,proud:s,outHalf:o}=Gn(),a=t.t+2.2+s;i=ot(i,Je(t.w+.5,a,t.hgt+sd,0,r-a/2,4.2,0,n));const l=o-r+g.wall+2,c=new Zs(Xs(t.winW,t.winH,1.5),{depth:l,bevelEnabled:!1,curveSegments:12});if(c.deleteAttribute("uv"),c.rotateX(-Math.PI/2),c.translate(0,r-.8,4.2+t.winC),i=ot(i,qt(c,n)),t.pegs){const u=t.pegs,h=4.2+t.hgt/2;for(const p of[-1,1])for(const f of[-1,1]){const x=new In(u.d/2,u.d/2-.2,u.len,12);x.translate(u.ox+p*u.px/2,r-u.len/2+.05,h+f*u.pz/2),x.deleteAttribute("uv"),i=Et(i,qt(x,n))}}return i}function ny(){const i=jt(),{m:e,seatY:t,proud:n,outHalf:r}=Gn(),s=t-i.t-2,o=r-s,a=mi(),l=tt+pn+.05;let c=Je(Di(),o,a-l,0,r-o/2,l,0,e);c=ot(c,ot(vn(An(-n-2),a-l+2,l-.5),vn(An(g.wall+.05),a-l+2.4,l-.7)));const u=g.wall+2+n;let h=Je(od(),u,a-l,0,r+n-u/2,l,0,e);return g.shape!=="circle"&&(h=oi(h,vn(An(-n),a,0))),c=Et(c,h),c=Md(c),c}function iy(){const i=jt(),{m:e,seatY:t}=Gn(),n=t-i.t-2,r=mi()-g.f2H,s=g.f3H-an.tab,o=r-s;let a=Je(El(),.7,o,0,n-.5,s,0,e);a=Et(a,Je(El(),.9,o,0,n-.9,s,.45,e));const l=Zo();if(l>1){const c=n-.15-an.t;a=Et(a,Je(an.ribW,l+.1,g.f3H-s+.05,0,c-l/2+.05,s,0,e)),a=Et(a,ad(l,Sl(),an.ribW,c+.05,g.f3H-.05,e,Math.min(1.2,Sl()*.5)))}return a}function ry(){let i=_s(0,g.wall,g.f3H,0);i=Et(i,vn(An(g.wall-.1),Mn,g.f3H-Mn));const e=g.f3H+si();si()>.1&&(i=Et(i,Je(21,23+(_n()?g.swGap:0),si(),0,0,g.f3H,5)));const t=e-g.standSink-Ot.seatH,n=t-Ot.floorT;for(const r of pd()){i=Et(i,Je(Ot.cup,Ot.cup,e-n,0,r,n,3)),i=ot(i,Je(g.swBodyX,g.swBodyY,g.standSink+Ot.seatH+2,0,r,t,1));{const s=g.standSink+Ot.seatH+2,o=g.swBodyX/2+g.cornerOut-Ot.cornerSq/2,a=g.swBodyY/2+g.cornerOut-Ot.cornerSq/2;for(const l of[-1,1])for(const c of[-1,1])i=ot(i,Je(Ot.cornerSq,Ot.cornerSq,s,l*o,r+c*a,t))}for(const[s,o,a]of Ot.holes){const l=a>4?1:.6,c=new In(a/2,a/2+l,Ot.floorT+1.2,24);c.rotateX(Math.PI/2),c.translate(s,r+o,t-Ot.floorT/2-.05),c.deleteAttribute("uv"),i=ot(i,qt(c))}}if(g.ledOn){const r=fi(),s=Mn+si()+1;let o;if(r.rect)o=new jn(r.w+.3,r.t+.3,s);else{const a=r.d/2+.15;o=new In(a,a,s,24),o.rotateX(Math.PI/2)}o.translate(g.ledX,g.ledY,g.f3H-Mn+s/2-.5),o.deleteAttribute("uv"),i=ot(i,qt(o))}if(g.bzOn&&g.bzMount==="f2s"){const r=tt+pn-ze.sideSink+ze.d/2;if(r+ze.d/2+ze.clr>g.f2H){const s=new In(ze.d/2+ze.clr,ze.d/2+ze.clr,ze.h+.6,48);s.rotateZ(Math.PI/2),s.translate(g.bzX,g.bzY,r-g.f2H),s.deleteAttribute("uv"),i=ot(i,qt(s))}}if(g.bzOn&&g.bzMount==="f3"){const r=g.f3H-Mn,s=Math.min(6,r-.2);let o=ot(zs(ze.d/2+ze.clr+ze.wall,s,r-s),zs(ze.d/2+ze.clr,s+.2,r-s-.2));o=oi(o,vn(An(0),g.f3H,0)),i=Et(i,o)}if(g.steamOn&&(i=sy(i)),i=vd(i),g.oledSide!=="none"){const{m:r,seatY:s,outHalf:o}=Gn(),a=Math.min(mi()-g.f2H+.8,g.f3H+si()+1);if(a>0){const l=o-s+jt().t+3;i=ot(i,Je(Di()+.8,l,a+.1,0,o+.5-l/2,-.1,0,r))}if(Hl()){const l=s-jt().t-2;i=ot(i,Je(El()+.3,an.t+.4,an.tab+.2,0,l-.05-(an.t+.4)/2,g.f3H-an.tab-.1,0,r));const c=Zo();if(c>1){const u=l-.15-an.t;i=ot(i,Je(an.ribW+.3,c+.4,an.tab+.2,0,u-c/2+.05,g.f3H-an.tab-.1,0,r)),i=ot(i,ad(c+.5,Sl()*(1+.5/Math.max(c,1))+.4,an.ribW+.3,u+.2,g.f3H-.1,r))}}}return g.lidOn&&!_n()&&(i=oy(i)),i=Kl(i,[g.f3H*.4]),i}const Hn={ribW:2.8,gap:1.8,ribH:.8,grooveD:1};function sy(i){const e=Hn.ribW+Hn.gap,t=Math.max(g.W,Nn())/2,n=(h,p,f)=>{const E=fi().fl/2+h,_=new In(E,E,p,24);return _.rotateX(Math.PI/2),_.translate(g.ledX,g.ledY,f+p/2),_.deleteAttribute("uv"),qt(_)},r=(h,p,f,x)=>{let E=null;for(let _=x;_<=t;_+=e)for(const d of _===0?[1]:[-1,1]){const M=Je(g.W+4,h,p,0,d*_,f);E=E?Et(E,M):M}return E},s=ln.r-ln.bandW-1,o=1.6;let a=r(Hn.ribW,Hn.ribH,g.f3H,0);a=oi(a,vn(An(g.wall+.6),Hn.ribH+.2,g.f3H-.1)),g.lidOn&&!_n()&&(a=oi(a,ms(s,Hn.ribH+.2,g.f3H-.1))),a=Et(a,g.lidOn&&!_n()?Jl(s,s-o,Hn.ribH,g.f3H):_s(g.wall+.6,g.wall+.6+o,Hn.ribH,g.f3H)),a=ot(a,Je(17,17+(_n()?g.swGap:0),Hn.ribH+.4,0,0,g.f3H-.2)),g.ledOn&&(a=ot(a,n(1,Hn.ribH+.4,g.f3H-.2))),i=Et(i,a);const l=g.f3H-Hn.grooveD,c=Hn.grooveD+.2;let u=r(Hn.gap-.2,c,l,e/2);return u=oi(u,vn(An(g.wall+.6+o),c+.2,l-.1)),g.lidOn&&!_n()&&(u=oi(u,ms(s-o,c+.2,l-.1))),u=ot(u,Je(24,26+(_n()?g.swGap:0),c+.4,0,0,l-.2,6)),g.ledOn&&(u=ot(u,n(1.6,c+.4,l-.2))),ot(i,u)}const Jl=(i,e,t,n)=>ot(ms(i,t,n),ms(e,t+.2,n-.1));function zs(i,e,t){const n=new In(i,i,e,48);return n.rotateX(Math.PI/2),n.translate(g.bzX,g.bzY,t+e/2),n.deleteAttribute("uv"),qt(n)}function oy(i){return ot(i,Jl(ln.r-_r.out,ln.r-ln.bandW-.6,_r.d+.05,g.f3H-_r.d))}function ay(){const i=_r.out+g.fitClr;return Jl(ln.r-i,ln.r-i-ld,pi,0)}function ly(){let i=ot(ms(ln.r,g.lidH+.1,pi),ms(ln.r-ln.bandW,g.lidH+.4,pi-.15));if(i=Et(i,ay()),i=Et(i,Fo(Qt.bunLid,new At().makeTranslation(0,0,pi+g.lidH),1e-6)),g.oledSide!=="none"){const e=mi()-(g.f2H+g.f3H-pi);if(e>-.5){const{m:t,seatY:n,outHalf:r}=Gn(),s=r-n+jt().t+3;i=ot(i,Je(Di()+.8,s,e+.9,0,r+.5-s/2,-.1,0,t))}}return i}let Xi=!0,fr=!1;function Tn(i,e,t){const n=new xn(i,e);return t&&n.applyMatrix4(t),n.visible=Xi,n.userData.ghost=!0,n}const ci=(i,e,t,n=0)=>{const r=new At().makeRotationZ(n);return r.setPosition(i,e,t),r};function cy(){if(!Lt()){const e=$t();if(Ki()){const t=new jn(e.T,e.L,e.W);t.translate(0,0,e.W/2),xt[1].add(Tn(t,fn.bat,ci(g.batX,0,tt)))}else if(g.batType==="520")xt[0].add(Tn(Qt.bat,fn.bat,ci(0,0,Wi)));else{const t=new jn(e.L,e.W,e.T);t.translate(0,0,e.T/2),xt[0].add(Tn(t,fn.bat,ci(0,0,Wi)))}}if(Lt()){const e=Er(),t=Qt.esp.clone();t.rotateZ(Math.PI),t.translate(ht.l/2,ht.w/2,0),xt[1].add(Tn(t,fn.esp,ci(e.x,e.y,tt+g.espZ)))}else if(Li())xt[1].add(Tn(Sd(),fn.esp,ci(g.espX,g.espY,yr())));else if(g.espLift>0)xt[1].add(Tn(Ed(),fn.esp,ci(g.espX,g.espY,tt+g.espLift+g.espZ-Ys)));else{const e=g.espRot===90?Math.PI/2:0,t=Qt.esp.clone();t.translate(-24/2,-18/2,0),xt[1].add(Tn(t,fn.esp,ci(g.espX,g.espY,tt+g.espZ,e)))}if(!Lt()){const e=Qt.mod.clone();e.rotateZ(Math.PI),e.translate(Sn.l/2,Sn.w/2,0);const t=$s();xt[1].add(Tn(e,fn.mod,ci(t.x,t.y,tt)))}if(g.oledSide!=="none"){const e=jt(),{m:t,seatY:n}=Gn();let r;g.oledType==="096"?(r=new jn(e.w,e.t,e.hgt),r.translate(0,n-e.t/2-.15,4.2+e.hgt/2)):(r=Qt.oled.clone(),r.translate(-e.w/2,n-e.t-.15,4.2)),r.applyMatrix4(t),xt[1].add(Tn(r,fn.oled))}const i=g.f3H+si()-g.standSink-Ot.seatH;for(const e of pd()){const t=Qt.switch.clone();t.rotateZ(Math.PI),xt[2].add(Tn(t,fn.stand,ci(0,e,i-Ot.pinLen))),xt[2].add(Tn(Qt.face,fn.face,ci(0,e,g.f3H+si())))}if(g.ledOn){const e=fi(),t=g.f3H-Mn;if(e.rect){const n=()=>new jn(e.w/2,e.t,e.bodyH),r=n();r.translate(g.ledX-e.w/4,g.ledY,t+e.bodyH/2);const s=n();s.translate(g.ledX+e.w/4,g.ledY,t+e.bodyH/2);for(const o of[r,s])o.deleteAttribute("uv");xt[2].add(Tn(r,fn.ledR)),xt[2].add(Tn(s,fn.ledG))}else{const n=new In(e.d/2,e.d/2,e.cyl,20);n.rotateX(Math.PI/2),n.translate(g.ledX,g.ledY,t+e.cyl/2);const r=new aa(e.domeR,20,12);r.translate(g.ledX,g.ledY,t+e.cyl);const s=new In(e.fl/2,e.fl/2,1,20);s.rotateX(Math.PI/2),s.translate(g.ledX,g.ledY,t-.5);for(const o of[n,r,s])o.deleteAttribute("uv");xt[2].add(Tn(Qu([n,r,s]),fn.led))}}if(g.bzOn){const e=g.bzMount==="f3",t=g.bzMount==="f2s",n=new In(ze.d/2,ze.d/2,ze.h,28),r=new In(1.5,1.5,.5,16);let s;t?(s=tt+pn-ze.sideSink+ze.d/2,n.rotateZ(Math.PI/2),r.rotateZ(Math.PI/2),r.translate(-8.3/2-.3,0,0)):(s=e?g.f3H-Mn-ze.h/2:tt+pn-ze.sink+ze.h/2,n.rotateX(Math.PI/2),r.rotateX(Math.PI/2),r.translate(0,0,e?-8.3/2-.2:ze.h/2+.2)),n.translate(g.bzX,g.bzY,s),r.translate(g.bzX,g.bzY,s);for(const o of[n,r])o.deleteAttribute("uv");xt[e?2:1].add(Tn(Qu([n,r]),fn.bz))}}const Jo=document.getElementById("status");let Qo=null;function uy(){const i=g.tWall,e=g.tBridge,t=g.tFront,n=g.tBack,r=g.tWidth,s=g.tEdge+g.tClr,o=s/2,a=s+2*i,l=o+i/2,c=-(o+i/2),u=o+i,h=-(o+i),p=Math.max(.3,Math.min(g.tRound,i*.95,r/2-1));let f=Je(r,a,e,0,0,0,p);f=Et(f,Je(r,i,e+t,0,l,0,p)),f=Et(f,Je(r,i,e+n,0,c,0,p));const x={totalY:a,tops:[e+t,e+n],esp:null,oled:null};if(g.tEspOn){const _=ht.w+.6,d=ht.l+.6,M=ht.h+.6,y=e+2,b=y+d+i,D=h+.6,P=h-M-i;f=Et(f,Je(_+2*i,D-P,b-e,0,(D+P)/2,e,p));const L=h-M/2;f=ot(f,Je(_,M,d+25,0,L,y,.05)),f=ot(f,Je(12,D-P+2,y+5,0,(D+P)/2,-2,.05)),x.esp={cy:L,z0:y},x.tops.push(b)}if(g.tOledOn){const E=jo["096"],_=.6,d=E.w+_,M=E.hgt+_,y=E.t+_,b=i,D=1,P=e+3,L=P+i,G=u-.6,A=G+(.6+b+y+D),C=L+M+2;f=Et(f,Je(d+2*i,A-G,C-e,0,(A+G)/2,e,p));const H=u+b,$=H+y/2;f=ot(f,Je(d,y,M+25,0,$,L,.05)),f=ot(f,Je(E.winW,D+1,E.winH,0,H+y+D/2,L+E.winC-E.winH/2,.05)),x.oled={cy:$,botZ:L},x.tops.push(C)}return{man:f,info:x}}function hy(){Jo.classList.add("on"),setTimeout(()=>{try{const i=performance.now();xt.forEach(s=>{s.clear(),s.position.set(0,0,0)}),dr=[null,null,null,null],Jt=[null,null,null,null];const{man:e,info:t}=uy(),n=ql(e);if(e.delete(),Qo=n,xt[0].add(new xn(n,fr?$l:Yl)),t.esp){const s=new xn(new jn(ht.w,ht.h,ht.l),fn.esp);s.position.set(0,t.esp.cy,t.esp.z0+ht.l/2+.3),s.userData.ghost=!0,s.visible=Xi,xt[0].add(s)}if(t.oled){const s=jo["096"],o=new xn(new jn(s.w,s.t,s.hgt),fn.oled);o.position.set(0,t.oled.cy,t.oled.botZ+s.hgt/2+.3),o.userData.ghost=!0,o.visible=Xi,xt[0].add(o)}const r=Math.max(...t.tops);document.getElementById("dims").textContent=te("todoDims",g.tWidth,t.totalY.toFixed(0),r.toFixed(0),(performance.now()-i).toFixed(0)),document.getElementById("warnings").textContent=""}catch(i){Qo=null,document.getElementById("warnings").textContent=te("buildErrGeneric",i.message||i),console.error(i)}Jo.classList.remove("on")},10)}function Ks(){if(g.product==="todo"){hy();return}Jo.classList.add("on"),setTimeout(()=>{const i=[];try{const e=performance.now(),t=[ey,ty,ry,ly,ny,iy],n=te("layerNames");for(let r=0;r<6;r++){if(r<4?xt[r].clear():r===5&&xt[4].clear(),r===3&&(!g.lidOn||_n())){Jt[3]=null,dr[3]=null;continue}if(r===4&&!(g.oledSide!=="none"&&g.oledPodOn)){Jt[4]=null,dr[4]=null;continue}if(r===5&&!Hl()){Jt[5]=null,dr[5]=null;continue}try{const s=t[r](),o=ql(s);s.delete(),Jt[r]=o;const a=new xn(o,fr?$l:Yl);dr[r]=a,xt[r===4?1:r===5?4:r].add(a)}catch(s){Jt[r]=null,dr[r]=null,i.push(te("buildErr",n[r],s.message||s)),console.error(n[r],s)}}cy(),Ql(),vy(performance.now()-e,dy())}catch(e){i.push(te("buildErrGeneric",e.message||e)),console.error(e)}if(i.length){const e=document.getElementById("warnings");e.textContent=i.join(`
`)+(e.textContent?`
`+e.textContent:"")}Jo.classList.remove("on")},10)}function dy(){try{const i=u=>typeof u.volume=="function"?u.volume():u.getProperties().volume,e=[],t=u=>(e.push(u),u),n=t(qt(Jt[0])),r=t(t(qt(Jt[1])).translate([0,0,g.f1H])),s=t(t(qt(Jt[2])).translate([0,0,g.f1H+g.f2H])),o=i(t(n.intersect(r))),a=i(t(r.intersect(s)));let l=0;if(Jt[3]){const u=t(t(qt(Jt[3],null,1e-6)).translate([0,0,g.f1H+g.f2H+g.f3H-pi]));l=i(t(s.intersect(u)))}let c=0;if(Jt[4]){const u=t(t(qt(Jt[4])).translate([0,0,g.f1H]));c=i(t(r.intersect(u)))+i(t(s.intersect(u)))}if(Jt[5]){const u=t(t(qt(Jt[5])).translate([0,0,g.f1H+g.f2H]));c+=i(t(s.intersect(u)))}return e.forEach(u=>u.delete()),{i12:o,i23:a,i34:l,iPod:c,ok:o<.5&&a<.5&&l<.5&&c<.5}}catch{return null}}function Ql(){const e=26*+document.getElementById("explode").value;xt[0].position.z=0,xt[1].position.z=g.f1H+e,xt[2].position.z=g.f1H+g.f2H+e*2,xt[3].position.z=g.f1H+g.f2H+g.f3H-pi+e*3,xt[4].position.z=g.f1H+g.f2H+e*2+e*.8,ha()}document.getElementById("explode").addEventListener("input",()=>{document.getElementById("explodev").textContent=(+document.getElementById("explode").value).toFixed(2),Ql()});let Yi=!0;const Sr=new di;Qi.add(Sr);const mt={plus:14040111,minus:3355443,sda:3055191,scl:14721338,gpio:9323693,led:2850281,led2:2074746,bz:12736668},Cn={"5V":[-9,8],GND:[-6.5,8],"3V3":[-4,8],4:[-1.5,8],3:[1,8],2:[3.5,8],1:[6,8],0:[8.5,8],5:[-9,-8],6:[-6.5,-8],7:[-4,-8],8:[-1.5,-8],9:[1,-8],10:[3.5,-8],20:[6,-8],21:[8.5,-8]},fy=[0,1,2,3,4,5,6,7,8,9,10,20,21],Tl={gpio:{key:"swGpio",name:"roleSwitch"},gpio2:{key:"sw2Gpio",name:"roleSwitch2"},sda:{key:"sdaGpio",name:"roleOledSda"},scl:{key:"sclGpio",name:"roleOledScl"},led:{key:"ledGpio",name:"roleLed"},led2:{key:"led2Gpio",name:"roleLedGreen"},bz:{key:"bzGpio",name:"roleBuzzer"}},py=document.getElementById("wireTable");function Ad(){const i=r=>"#"+r.toString(16).padStart(6,"0"),e=[],t=r=>e.push(`<tr class="grp"><td colspan="4">${r}</td></tr>`),n=(r,s,o,a="")=>e.push(`<tr><td><span class="sw" style="background:${i(r)}"></span></td><td>${s}</td><td>${o}</td><td>${a}</td></tr>`);Lt()?(t(te("wtGrpPower")),n(mt.plus,te("wtUsbC"),te("wtEspDirect"),te("wtNoBattery"))):(t(te("wtGrpPowerChain")),n(mt.plus,te("wtBatPlus"),te("wtChgBplus")),n(mt.minus,te("wtBatMinus"),te("wtChgBminus")),n(mt.plus,te("wtChgOutPlus"),te("wtEsp5v")),n(mt.minus,te("wtChgOutMinus"),te("wtEspGnd"))),g.oledSide!=="none"&&(t(te("wtGrpOled")),n(mt.plus,te("wtOledVcc"),te("wtEsp3v3")),n(mt.minus,te("wtOledGnd"),te("wtEspGnd")),n(mt.sda,te("wtOledSda"),"GPIO "+g.sdaGpio),n(mt.scl,te("wtOledScl"),"GPIO "+g.sclGpio,te("wtSckNote"))),t(te("wtGrpSwitch")),_n()?(n(mt.gpio,te("wtSw1PinA"),"GPIO "+g.swGpio,te("wtPullup")),n(mt.minus,te("wtSw1PinB"),te("wtEspGnd")),n(mt.gpio,te("wtSw2PinA"),"GPIO "+g.sw2Gpio,te("wtPullup")),n(mt.minus,te("wtSw2PinB"),te("wtEspGnd"))):(n(mt.gpio,te("wtSwPinA"),"GPIO "+g.swGpio,te("wtPullup")),n(mt.minus,te("wtSwPinB"),te("wtEspGnd"))),g.ledOn&&(fi().rect?(t(te("wtGrpLedRgb")),n(mt.led,te("wtLedRed"),"GPIO "+g.ledGpio,te("wtResistor")),n(mt.led2,te("wtLedGreen"),"GPIO "+g.led2Gpio,te("wtResistor")),n(mt.minus,te("wtLedCommon"),te("wtEspGnd"))):(t(te("wtGrpLedRound",fi().d)),n(mt.led,te("wtLedPlusLeg"),"GPIO "+g.ledGpio,te("wtResistor")),n(mt.minus,te("wtLedMinusLeg"),te("wtEspGnd")))),g.bzOn&&(t(te("wtGrpBuzzer")),n(mt.bz,te("wtBzPlus"),"GPIO "+g.bzGpio,te("wtPwmTone")),n(mt.minus,te("wtBzMinus"),te("wtEspGnd"))),py.innerHTML=`<table><tbody>${e.join("")}</tbody></table>`}function my(i,e,t){const n=document.createElement("canvas");n.width=160,n.height=44;const r=n.getContext("2d");r.fillStyle="rgba(255,253,248,0.9)",r.fillRect(0,0,160,44),r.strokeStyle="#c9bfa5",r.lineWidth=3,r.strokeRect(0,0,160,44),r.fillStyle="#"+e.toString(16).padStart(6,"0"),r.font="bold 26px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(i,80,23);const s=new Gv(new kh({map:new Wv(n),depthTest:!1,transparent:!0}));return s.scale.set(7,1.9,1),s.position.copy(t).add(new B(0,0,2.2)),Sr.add(s),s}function hn(i,e,t,n,r){const s=[],o=i.map(c=>new B(...c)),a=new Xh(o,!1,"catmullrom",.3),l=new xn(new qo(a,40,.35,8),new Zi({color:e,roughness:.5}));if(Sr.add(l),s.push(l),r){const c=new xn(new qo(a,24,2,6),new Dl({transparent:!0,opacity:0,depthWrite:!1}));Sr.add(c),s.push(c)}for(const[c,u]of[[o[0],t],[o[o.length-1],n]]){if(!u)continue;const h=new xn(new aa(.6,10,8),new Zi({color:e}));h.position.copy(c),Sr.add(h),s.push(h),s.push(my(u,e,c))}r&&s.forEach(c=>{c.userData.tag=r})}function ha(){if(Ad(),Sr.clear(),!!Yi)try{const i=xt[0].position.z,e=xt[1].position.z,t=Lt()?null:$s(),n=t?t.x-Sn.l/2:0,r=e+tt+2,s=e+tt+pn+1.5;if(t)for(const[x,E,_,d]of[[1,mt.plus,te("wtBatPlus"),"B+"],[-1,mt.minus,te("wtBatMinus"),"B−"]])if(Ki())hn([[g.batX+x*2,x*4,e+tt+$t().W],[n+1.2,t.y+x*4.5,r+4],[n+1.2,t.y+x*4.5,r]],E,_,d);else{const M=i+Wi+$t().T,y=(g.wireX>=0?1:-1)*($t().L/2-4);hn([[y,x*5,M],[g.wireX+x*1.2,g.wireY,e-2],[g.wireX+x*1.2,g.wireY,s],[n+1.2,t.y+x*4.5,r+2],[n+1.2,t.y+x*4.5,r]],E,_,d)}const o=(x,E)=>{if(Lt()){const y=Er();return[y.x-x,y.y-E,e+tt+g.espZ+ht.h]}if(g.espRot==="s0")return[g.espX+x,g.espY,e+yr()+ht.w/2+E];if(g.espRot==="s90")return[g.espX,g.espY+x,e+yr()+ht.w/2+E];if(xr()){const y=e+yr()+ht.l/2+x;return g.espRot==="u90"?[g.espX,g.espY+E,y]:[g.espX+E,g.espY,y]}const[_,d]=g.espRot===90?[-E,x]:[x,E],M=g.espLift>0?g.espLift-Ys:0;return[g.espX+_,g.espY+d,e+tt+g.espZ+M+ht.h]},a=o(...Cn["5V"]),l=o(...Cn.GND),c=o(...Cn["3V3"]),u=o(...Cn[g.sdaGpio]||Cn[8]),h=o(...Cn[g.sclGpio]||Cn[9]),p=6,f=(x,E)=>[(x[0]+E[0])/2,(x[1]+E[1])/2,Math.max(x[2],E[2])+p];if(t){const x=[n+3.5,t.y+6,r],E=[n+3.5,t.y-6,r];hn([x,f(x,a),a],mt.plus,"OUT+","5V"),hn([E,f(E,l),l],mt.minus,"OUT−","GND")}if(g.oledSide!=="none"){const x=jt(),{m:E,seatY:_}=Gn(),d=4.2+(g.oledType==="096"?x.hgt-2.5:11.5),M=G=>{const A=-3.81+G*2.54,C=new B(A,_-x.t-.6,0).applyMatrix4(E);return[C.x,C.y,e+d]},y=M(0),b=M(1),D=M(2),P=M(3),L=o(-6.5,8);hn([c,f(c,b),b],mt.plus,"3V3","VCC"),hn([L,f(L,y),y],mt.minus,null,"GND"),hn([u,f(u,P),P],mt.sda,"G"+g.sdaGpio,"SDA","sda"),hn([h,f(h,D),D],mt.scl,"G"+g.sclGpio,"SCL","scl")}{const E=xt[2].position.z+g.f3H+si()-g.standSink-Ot.seatH,_=E-Ot.floorT-2,d=(y,b)=>[(y[0]+b[0])/2,(y[1]+b[1])/2,(_+b[2])/2],M=_n()?[{oy:-g.swGap/2,gpio:g.swGpio,tag:"gpio",lb:te("spSw1")},{oy:g.swGap/2,gpio:g.sw2Gpio,tag:"gpio2",lb:te("spSw2")}]:[{oy:0,gpio:g.swGpio,tag:"gpio",lb:te("spSw")}];for(const y of M){const b=o(...Cn[y.gpio]||Cn[4]),D=[3.8,y.oy-2.7],P=[-2.7,y.oy-5.2];hn([[...D,E+1],[...D,_],d(D,b),b],mt.gpio,y.lb,"G"+y.gpio,y.tag),hn([[...P,E+1],[...P,_],d(P,l),l],mt.minus,null,null)}}if(g.ledOn){const x=fi(),_=xt[2].position.z+g.f3H-Mn-1.2,d=o(...Cn[g.ledGpio]||Cn[3]),M=(y,b)=>[(y[0]+b[0])/2,(y[1]+b[1])/2,(y[2]+b[2])/2];if(x.rect){const y=o(...Cn[g.led2Gpio]||Cn[5]),b=[g.ledX-x.pitch,g.ledY,_],D=[g.ledX,g.ledY,_],P=[g.ledX+x.pitch,g.ledY,_];hn([b,M(b,d),d],mt.led,"LED R","G"+g.ledGpio,"led"),hn([P,M(P,y),y],mt.led2,"LED G","G"+g.led2Gpio,"led2"),hn([D,M(D,l),l],mt.minus,"LED−",null)}else{const y=[g.ledX-1.3,g.ledY,_],b=[g.ledX+1.3,g.ledY,_];hn([y,M(y,d),d],mt.led,"LED+","G"+g.ledGpio,"led"),hn([b,M(b,l),l],mt.minus,"LED−",null)}}if(g.bzOn){const x=o(...Cn[g.bzGpio]||Cn[2]),E=(M,y)=>[(M[0]+y[0])/2,(M[1]+y[1])/2,(M[2]+y[2])/2+3];let _,d;if(g.bzMount==="f2s"){const M=e+tt+pn-ze.sideSink+ze.d/2,y=g.bzX+ze.h/2+1;_=[y,g.bzY,M+3.25],d=[y,g.bzY,M-3.25]}else{const M=g.bzMount==="f3"?xt[2].position.z+g.f3H-Mn-ze.h-1:e+tt+pn-ze.sink+1;_=[g.bzX-3.25,g.bzY,M],d=[g.bzX+3.25,g.bzY,M]}hn([_,E(_,x),x],mt.bz,te("spBzPlus"),"G"+g.bzGpio,"bz"),hn([d,E(d,l),l],mt.minus,te("spBzMinus"),null)}}catch{}}document.getElementById("wiresBtn").addEventListener("click",i=>{Yi=!Yi,i.target.textContent=te("tgWires",Yi),document.getElementById("wireOverlay").style.display=Yi?"":"none",ha()});const Zn=document.createElement("div");Zn.style.cssText="position:fixed; display:none; z-index:50; background:#fffdf8; border:1px solid #ddd2b5;border-radius:10px; box-shadow:0 4px 14px rgba(77,58,20,.18); padding:8px; width:186px;";Zn.innerHTML='<div id="gpioTitle" style="font-size:11px; font-weight:600; color:#6b5d43; margin:2px 4px 6px;"></div><div id="gpioGrid" style="display:grid; grid-template-columns:repeat(4,1fr); gap:4px;"></div>';document.body.appendChild(Zn);const ah=Zn.querySelector("#gpioGrid"),gy=Zn.querySelector("#gpioTitle");function _y(i,e,t){const n=Tl[i];if(!n)return;gy.textContent=te("gpioSelect",te(n.name));const r=Object.values(Tl).filter(s=>s.key!==n.key).map(s=>+g[s.key]);ah.innerHTML="";for(const s of fy){const o=document.createElement("button");o.textContent="G"+s;const a=+g[n.key]===s,l=r.includes(s);o.disabled=l,o.style.cssText="padding:5px 0; font-size:11px; border-radius:6px;"+(a?"background:#e9b95f;color:#4d3a14;":l?"background:#efe9dc;color:#c3b89a;":"background:#f1ead7;color:#6b5d43;"),l||o.addEventListener("click",()=>{g[n.key]=s,la(),ha(),Zn.style.display="none"}),ah.appendChild(o)}Zn.style.left=Math.min(e+6,window.innerWidth-200)+"px",Zn.style.top=Math.min(t+6,window.innerHeight-150)+"px",Zn.style.display="block"}const lh=new Cx;Tr.domElement.addEventListener("contextmenu",i=>{if(!Yi)return;const e=Tr.domElement.getBoundingClientRect(),t=new Ae((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1);lh.setFromCamera(t,Cr);const n=lh.intersectObjects(Sr.children,!0).find(r=>Tl[r.object.userData.tag]);n&&(i.preventDefault(),_y(n.object.userData.tag,i.clientX,i.clientY))});window.addEventListener("pointerdown",i=>{Zn.contains(i.target)||(Zn.style.display="none")});window.addEventListener("keydown",i=>{i.key==="Escape"&&(Zn.style.display="none")});let ch=null;document.getElementById("animBtn").addEventListener("click",()=>{cancelAnimationFrame(ch);const i=document.getElementById("explode"),e=+i.value>.05?+i.value:1,t=+i.value>.05?0:1,n=performance.now(),r=1100;(function s(o){const a=Math.min((o-n)/r,1),l=a<.5?2*a*a:1-Math.pow(-2*a+2,2)/2;i.value=e+(t-e)*l,Ql(),a<1&&(ch=requestAnimationFrame(s))})(n)});document.getElementById("ghostBtn").addEventListener("click",i=>{Xi=!Xi,i.target.textContent=te("tgGhost",Xi),xt.forEach(e=>e.traverse(t=>{t.userData.ghost&&(t.visible=Xi)}))});document.getElementById("xrayBtn").addEventListener("click",i=>{fr=!fr,i.target.textContent=te("tgXray",fr),dr.forEach(e=>{e&&(e.material=fr?$l:Yl)})});function rs(i,e){const t=xd(),n=Fs(),r=Math.max(vr()-g.wall,.05);if(i>t||e>n)return!1;const s=i-(t-r),o=e-(n-r);return!(s>0&&o>0&&s*s+o*o>r*r)}function dn(i,e){return Math.abs(i.x-e.x)*2<i.w+e.w&&Math.abs(i.y-e.y)*2<i.d+e.d}function vy(i,e){const t=g.f1H+g.f2H+g.f3H+si(),n=e?e.ok?te("fitOk"):te("fitBad",e.i12.toFixed(1),e.i23.toFixed(1),(e.i34||0).toFixed(1),(e.iPod||0).toFixed(1)):"",r=g.shape==="circle"?`Ø${g.W}`:`${g.W} × ${g.D}`,s=g.lidOn&&!_n()?te("infoLid",ln.r*2,(pi+g.lidH+ln.h).toFixed(1)):"";document.getElementById("dims").textContent=te("infoDims",r,t.toFixed(1),s,i.toFixed(0),n);const o=[];e&&!e.ok&&o.push(te("wFit")),!Lt()&&!Ki()&&!rs($t().L/2+.4,$t().W/2+.4)&&o.push(te("wBatFit",$t().L,$t().W));const a=yd(),l=Lt()?{x:Er().x,y:Er().y,w:ht.l+Pn,d:ht.w+Pn}:{x:g.espX,y:g.espY,w:a.w,d:a.d},c=$s(),u=Lt()?null:{x:c.x,y:c.y,w:Sn.l+Pn,d:Sn.w+Pn},h=Ki()?{x:g.batX,y:0,w:$t().T+$t().clr,d:$t().L+$t().clr}:null;h&&(rs(Math.abs(g.batX)+h.w/2,h.d/2)||o.push(te("wBatStandFit",$t().T,$t().L)),dn(h,l)&&o.push(te("wBatStandEsp")),dn(h,u)&&o.push(te("wBatStandMod")),tt+$t().W>g.f2H+g.f3H-Mn-.3&&o.push(te("wBatStandTop",$t().W))),Lt()?(g.shape!=="circle"&&Math.abs(g.espY)+(ht.w+Pn)/2>Fs()-1&&o.push(te("wEspWallYNoBat")),l.x-l.w/2<-xd()+.5&&o.push(te("wEspWidthNoBat",ht.l))):rs(Math.abs(g.espX)+a.w/2,Math.abs(g.espY)+a.d/2)||o.push(te("wEspWall")),Li()&&yr()+(xr()?ht.l:ht.w)>g.f2H+g.f3H-Mn-.3&&o.push(te("wEspStandTop",xr()?ht.l:ht.w)),!Lt()&&g.shape!=="circle"&&Math.abs(g.modY)+(Sn.w+Pn)/2>Fs()-1&&o.push(te("wModWall")),!Lt()&&g.shape!=="circle"&&c.edgeX<Sn.l-2&&o.push(te("wModCurve"));const p=!Lt()&&!Li()&&g.espLift>0;if(u&&dn(l,u)&&(p?g.espLift<Sn.h+.8&&o.push(te("wEspLiftLow",g.espLift,Sn.h,(Sn.h+1).toFixed(0))):o.push(te("wEspModOverlap"))),p&&tt+g.espLift+g.espZ-Ys+ht.h>g.f2H+g.f3H-Mn-.3&&o.push(te("wEspLiftTop")),p){const _=g.espRot===90?{x:g.espX,y:0,w:8,d:Nn()}:{x:0,y:g.espY,w:g.W,d:8};u&&dn(_,u)&&o.push(te("wBeamMod")),h&&dn(_,h)&&o.push(te("wBeamBat"))}if(g.oledSide!=="none"){const _=Gn(),d=_.dHalf-_.seatY+jt().t+3,M=Di()+1.2,y=g.oledSide==="W"?{x:-(g.W/2-d/2),y:0,w:d,d:M}:{x:0,y:(g.oledSide==="N"?1:-1)*(Nn()/2-d/2),w:M,d};dn(l,y)&&o.push(te("wEspTower")),u&&dn(u,y)&&o.push(te("wModTower")),g.ledOn&&dn({x:g.ledX,y:g.ledY,w:fi().fl,d:fi().fl},y)&&o.push(te("wLedTower")),h&&dn(h,y)&&o.push(te("wBatTower")),mi()-g.f2H>g.f3H-Mn-.3&&o.push(te("wTowerTop")),_.seatY<jt().t+4&&o.push(te("wOledBig"))}!Lt()&&!Ki()&&g.f1H<Wi+$t().T+1.2&&o.push(te("wF1Low")),Hl()&&Zo()<an.ribL-.01&&o.push(te("wCoverRib",Zo().toFixed(1),an.ribL));const f=g.f3H+si()-g.standSink-Ot.seatH-Ot.floorT;if(f<.5&&o.push(te("wSwThrough")),_n()&&(g.D<60&&o.push(te("wDblD")),g.swGap<29&&o.push(te("wSwGap")),g.swGap/2+14.4>Fs()&&o.push(te("wCharWall"))),g.lidOn&&!_n()&&ln.r*2>Math.min(g.W,Nn())+.1&&o.push(te("wLidWide",ln.r*2)),g.ledOn){const _=fi().fl/2+.1;rs(Math.abs(g.ledX)+_,Math.abs(g.ledY)+_)||o.push(te("wLedWall"));const d=(g.bossOn?10.5:Ot.cup/2)+_,M=(g.bossOn?11.5:Ot.cup/2)+_;Math.abs(g.ledX)<d&&Math.abs(g.ledY)<M&&o.push(te("wLedBoss")),g.lidOn&&!_n()&&Math.hypot(g.ledX,g.ledY)+_>ln.r-ln.bandW-.6&&o.push(te("wLedBand"))}g.lidOn&&!_n()&&g.lidH+ln.innerH<sh()+.3&&o.push(te("wLidChar",Math.max(0,sh()+.5-ln.innerH).toFixed(1)));const x={x:0,y:0,w:Ot.cup,d:Ot.cup+(_n()?g.swGap:0)};h&&dn(h,x)&&tt+$t().W>g.f2H+f-.3&&o.push(te("wBatCup"));const E=Li()?yr()+(xr()?ht.l:ht.w):tt+g.espZ+(g.espLift>0?g.espLift-Ys:0)+ht.h;if((Li()||p)&&dn(l,x)&&E>g.f2H+f-.3&&o.push(te("wEspCup")),g.bzOn){const _=g.bzMount==="f2s",d=_?(ze.h+.5)/2:ze.d/2+ze.clr,M=ze.d/2+ze.clr,y={x:g.bzX,y:g.bzY,w:d*2,d:M*2};if((g.shape==="circle"?(_?Math.hypot(Math.abs(g.bzX)+d,Math.abs(g.bzY)+M):Math.hypot(g.bzX,g.bzY)+d)>g.W/2-g.wall+.1:!rs(Math.abs(g.bzX)+d,Math.abs(g.bzY)+M))&&o.push(te("wBzWall")),g.bzMount==="f3")dn(y,x)&&o.push(te("wBzCup")),g.ledOn&&Math.hypot(g.ledX-g.bzX,g.ledY-g.bzY)<ze.d/2+ze.clr+fi().fl/2+.3&&o.push(te("wBzLed")),g.f3H-Mn<ze.h&&o.push(te("wBzThick",(ze.h-g.f3H+Mn).toFixed(1)));else{dn(y,l)&&o.push(te("wBzEsp")),u&&dn(y,u)&&o.push(te("wBzMod"));const D=tt+pn+(_?ze.d-ze.sideSink:ze.h-ze.sink);_?(D>g.f2H+g.f3H-.3&&o.push(te("wBzLayFlipThrough")),D>g.f2H+f&&dn(y,{x:0,y:0,w:g.swBodyX+2,d:g.swBodyY+2})?o.push(te("wBzLayPocket")):D>g.f2H+f&&dn(y,x)&&o.push(te("wBzLayCup"))):dn(y,x)&&D>g.f2H+f-.2?o.push(te("wBzCupBelow")):D>g.f2H+g.f3H-Mn-.3&&o.push(te("wBzTop"))}}document.getElementById("warnings").textContent=o.join(`
`)}const xy=new Ix;function ec(i,e){const t=new xn(i),n=xy.parse(t,{binary:!0}),r=new Blob([n],{type:"application/octet-stream"}),s=document.createElement("a");s.href=URL.createObjectURL(r),s.download=e,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(s.href),2e3)}function vs(i,e){if(!Jt[i])return;let t=Jt[i].clone();i===2&&document.getElementById("flip3").checked&&(t.rotateX(Math.PI),t.computeBoundingBox(),t.translate(0,0,-t.boundingBox.min.z)),ec(t,e)}function yy(){if(!Jt[1]||g.oledSide==="none")return;const{m:i,seatY:e,proud:t,outHalf:n}=Gn(),r=e-jt().t-2-5,s=n+t+2,o=qt(Jt[1]),a=Je(Di()+8,s-r,mi()+1,0,(s+r)/2,-.3,0,i),l=oi(o,a),c=ql(l);l.delete(),ec(c,"oled_fit_test.stl")}document.getElementById("ex1").addEventListener("click",()=>vs(0,"floor1_battery.stl"));document.getElementById("ex2").addEventListener("click",()=>vs(1,"floor2_esp32.stl"));document.getElementById("ex3").addEventListener("click",()=>vs(2,"floor3_switch_lid.stl"));document.getElementById("ex4").addEventListener("click",()=>vs(3,"floor4_bun_lid.stl"));document.getElementById("ex5").addEventListener("click",()=>vs(4,"oled_pod.stl"));document.getElementById("ex6").addEventListener("click",()=>vs(5,"oled_back_cover.stl"));document.getElementById("exOledTest").addEventListener("click",yy);function tc(){document.body.classList.toggle("prod-dimsum",g.product==="dimsum"),document.body.classList.toggle("prod-todo",g.product==="todo");const i=document.getElementById("wireOverlay");i&&(i.style.display=g.product==="dimsum"&&Yi?"":"none")}const bd=document.getElementById("product");bd.value=g.product;bd.addEventListener("change",i=>{g.product=i.target.value,la(),tc(),Ks()});for(const i of["tEspOn","tOledOn"]){const e=document.getElementById(i);e.checked=g[i],e.addEventListener("change",t=>{g[i]=t.target.checked,Zt()})}document.getElementById("tEx1").addEventListener("click",()=>{Qo&&ec(Qo.clone(),"todo_supporter_imac.stl")});tc();const ol=document.getElementById("lang");ol&&(ol.value=ps,ol.addEventListener("change",i=>qx(i.target.value)));const qs=document.getElementById("settingsModal"),Ey=()=>{qs.hidden=!1},nc=()=>{qs.hidden=!0};document.getElementById("settingsBtn").addEventListener("click",Ey);document.getElementById("settingsClose").addEventListener("click",nc);qs.addEventListener("click",i=>{i.target===qs&&nc()});document.addEventListener("keydown",i=>{i.key==="Escape"&&!qs.hidden&&nc()});id();rd();Promise.all([Qx(),Fx({locateFile:()=>zx}).then(i=>{i.setup(),bl=i})]).then(Ks).catch(i=>{document.getElementById("warnings").textContent=te("initError",i),console.error(i)});
