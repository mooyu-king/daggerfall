import{t as _e}from"./songPlayer-ByMoA1hP.js";import{e2 as Re,aB as Le,A as ke,U as Me,m as Ie,z as Se,aA as Pe,aQ as Fe,aK as De}from"./main-BoKDoX6A.js";import{b as Ne}from"./brandMark-vqf6NEZ9.js";import{b as Ce,I as Ue,a as ze,S as ye}from"./introMap-Bo5XNeNU.js";import{a as Oe}from"./enhancedStyle-DmWjjmxy.js";import"./professionLaw-CaJWT8qI.js";import"./mapsTables-Brf1I0Fy.js";import"./gameDate-CQxCCpuA.js";import"./plusCursor-Bct4-Trx.js";const Be=new URL(""+new URL("theme-BdzbOjcX.mp3",import.meta.url).href,import.meta.url).href,Ve=.82,Z=.26,He=15e3;function Ge(i,e){const t=i.getOutputTimestamp?.();return t&&t.performanceTime>0&&Number.isFinite(t.contextTime)?t.contextTime+(e-t.performanceTime)/1e3:i.currentTime-Math.max(0,i.outputLatency??i.baseLatency??0)}class Xe{constructor({makeContext:e,fetcher:t=globalThis.fetch?.bind(globalThis),readVolume:n=_e,subscribe:s=Re,now:c=()=>performance.now()}={}){this.makeContext=e??(()=>{const o=globalThis.AudioContext??globalThis.webkitAudioContext;return o?new o({latencyHint:"interactive"}):null}),this.fetcher=t,this.readVolume=n,this.subscribe=s,this.now=c,this.context=null,this.source=null,this.gain=null,this.buffer=null,this.loading=null,this.startedAt=null,this.level=Ve,this.unsubscribe=null,this.disposed=!1,this.lastTime=0,this.abort=new globalThis.AbortController,this.loadTimer=null}prepare(){return this.loading?this.loading:(this.loading=this._prepare(),this.loading)}async _prepare(){try{if(this.context=this.makeContext(),!this.context)throw new Error("Web Audio is unavailable");this.gain=this.context.createGain(),this.gain.gain.value=Math.max(0,this.readVolume())*this.level,this.gain.connect(this.context.destination),this.unsubscribe=this.subscribe((n,s)=>{n==="Controls"&&s==="MusicVolume"&&this.setLevel(this.level,.12)});const e=this.context,t=async()=>{const n=await this.fetcher(Be,{signal:this.abort.signal});if(!n.ok)throw new Error(`Theme request failed (${n.status})`);const s=await n.arrayBuffer();return this.disposed?null:e.decodeAudioData(s)};return this.buffer=await Promise.race([t(),new Promise((n,s)=>{this.loadTimer=setTimeout(()=>{this.abort.abort(),s(new Error("Theme loading timed out"))},He)})]),this.disposed?(this.buffer=null,!1):!0}catch(e){return this.disposed||console.warn("[intro] music unavailable:",e.message),!1}finally{clearTimeout(this.loadTimer),this.loadTimer=null}}unlock(){if(this.disposed)return Promise.resolve(!1);this.prepare();try{return Promise.resolve(this.context?.resume()).then(()=>this.context?.state==="running").catch(()=>!1)}catch{return Promise.resolve(!1)}}start(){if(this.disposed||!this.buffer||this.context?.state!=="running")return!1;if(this.source)return!0;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=!0,e.connect(this.gain),this.source=e,this.startedAt=this.context.currentTime+.06,e.start(this.startedAt),!0}time(e=this.now()){if(this.startedAt===null)return 0;if(!this.context)return this.lastTime;if(this.context.state!=="running")return this.lastTime;const t=Math.max(0,Ge(this.context,e)-this.startedAt);return this.lastTime=Math.max(this.lastTime,t),this.lastTime}setLevel(e,t=.9){if(this.level=Math.max(0,Math.min(1,e)),!this.gain||this.disposed)return;const n=this.gain.gain,s=this.context.currentTime,c=this.level*Math.max(0,Math.min(1,this.readVolume()));if(n.cancelAndHoldAtTime)n.cancelAndHoldAtTime(s);else{const o=n.value;n.cancelScheduledValues(s),n.setValueAtTime(o,s)}n.linearRampToValueAtTime(c,s+Math.max(.01,t))}async pause(){this.context?.state==="running"&&(this.time(),await this.context.suspend())}async dispose(){if(this.disposed)return;this.disposed=!0,this.abort.abort(),clearTimeout(this.loadTimer),this.unsubscribe?.(),this.unsubscribe=null;const e=this.source;this.source=null;try{e?.stop()}catch{}e?.disconnect(),this.gain?.disconnect(),this.buffer=null,this.gain=null;const t=this.context;this.context=null;try{await t?.close()}catch{}}}const P=230016/12e3,ee=11.712,Q=P-.78,G=P+1.35,J=1.1,$e=P+2.4,X=17.54,ie=i=>Math.max(0,Math.min(1,i)),be=i=>{const e=ie(i);return e*e*e*(e*(e*6-15)+10)},M=(i,e,t)=>be((i-e)/(t-e)),Te=Object.freeze([{key:"interkarma",caption:"Built on the work of",start:1.25,up:2.25,out:4.55,end:5.3},{key:"nexus",caption:"With the modding community of",start:5.65,up:6.6,out:8.5,end:9.3}]);function Ye(i,e){return M(e,i.start,i.up)*(1-M(e,i.out,i.end))}const H=5.5,xe=7;function We(i,e=!1){if(e)return{opacity:i<P?0:1,y:0,scale:1,blur:0,impact:0};if(i<Q)return{opacity:0,y:0,scale:1/H,blur:xe,impact:0};if(i<P){const t=ie((i-Q)/(P-Q)),n=H-(H-1)*t;return{opacity:M(t,0,.16),y:0,scale:1/n,blur:xe*(n-1)/(H-1),impact:0}}return{opacity:1,y:0,scale:1,blur:0,impact:Math.exp(-(i-P)*8)}}function je(i,e=16/9,t=!1){const n=Math.max(0,Math.min($e,i)),s=ie(n/9.5),c=M(n,9.45,ee+.45),o=M(n,ee,X),a=[-470+235*s+235*o,32+4*Math.sin(s*Math.PI*1.4)+c*290+o*325,32+Math.sin(s*Math.PI*1.8)*13+o*235],x=[a[0]+340*(1-o),12*(1-o),-5],_=t?1.2:1.03+.17*c,b=2*Math.atan(Math.tan(_/2)/Math.max(.45,e));return t?{eye:[0,647,267],aim:[0,0,-5],fov:b}:{eye:a,aim:x,fov:b}}function qe(i,e=!1){const t=Math.max(0,i);return{time:t,landscapeTime:e?X:Math.min(t,X),opening:M(t,0,1.5),cloud:M(t,10.25,11.35)*(1-M(t,ee,12.35)),shade:.16+.5*M(t,X,P+.25),title:We(t,e),credits:Te.map(n=>({...n,opacity:Ye(n,t)})),ready:t>=G,prompt:M(t,G,G+.65)}}const te=.7,Ke=9e5,$=`
precision highp float;
const vec3 sun = normalize(vec3(0.84,0.24,-0.30));
float grain(vec2 p) { return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
float cloudNoise(vec2 p) {
  vec2 i=floor(p),f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(grain(i),grain(i+vec2(1,0)),f.x),mix(grain(i+vec2(0,1)),grain(i+vec2(1)),f.x),f.y);
}
float cloudField(vec2 p) {
  float a=0.52,v=0.0;
  for(int i=0;i<4;i++){ v+=a*cloudNoise(p); p=mat2(1.6,-1.2,1.2,1.6)*p+7.3; a*=0.5; }
  return v;
}
vec3 skyLight(vec3 ray) {
  float horizon=exp(-abs(ray.y)*5.0);
  float glow=pow(max(0.0,dot(ray,sun)),12.0);
  vec3 colour=mix(vec3(0.055,0.10,0.17),vec3(0.50,0.43,0.34),horizon);
  colour+=vec3(0.50,0.26,0.09)*glow*0.5;
  float disc=smoothstep(0.99960,0.99993,dot(ray,sun));
  return colour+vec3(0.95,0.73,0.42)*disc*0.6;
}
vec3 haze(vec3 colour,vec3 world,vec3 eye) {
  float distanceToEye=length(world-eye);
  float density=0.0015*exp(-max(0.0,eye.y-30.0)/340.0);
  float f=1.0-exp(-distanceToEye*density);
  return mix(colour,skyLight(normalize(world-eye)),min(0.63,f));
}
`,Qe=`#version 300 es
void main(){vec2 p=vec2((gl_VertexID<<1)&2,gl_VertexID&2);gl_Position=vec4(p*2.0-1.0,0,1);}`,Je=`#version 300 es
${$}
uniform vec2 resolution; uniform mat3 basis; uniform float halfFov;
out vec4 colour;
void main(){
  vec2 p=gl_FragCoord.xy/resolution*2.0-1.0;
  vec3 ray=normalize(basis*vec3(p.x*resolution.x/resolution.y*halfFov,p.y*halfFov,1));
  colour=vec4(skyLight(ray),1);
}`,Ze=`#version 300 es
precision highp float;
layout(location=0) in vec2 uv;
uniform sampler2D field; uniform mat4 vp; uniform vec2 extent;
out vec2 texcoord; out vec3 world;
void main(){
  texcoord=uv;
  float h=max(0.0,textureLod(field,uv,0.0).a*255.0-${ye.toFixed(1)})*${te};
  world=vec3((uv.x-0.5)*extent.x,h,(uv.y-0.5)*extent.y);
  gl_Position=vp*vec4(world,1);
}`,et=`#version 300 es
${$}
uniform sampler2D field; uniform vec3 eye; uniform vec2 extent; uniform float time;
in vec2 texcoord; in vec3 world; out vec4 colour;
void main(){
  vec4 sampleAt=texture(field,texcoord);
  if(sampleAt.a*255.0<=${ye.toFixed(1)}+0.45) discard;
  vec2 d=1.0/vec2(textureSize(field,0));
  float dx=(texture(field,texcoord+vec2(d.x,0)).a-texture(field,texcoord-vec2(d.x,0)).a)*255.0*${te};
  float dz=(texture(field,texcoord+vec2(0,d.y)).a-texture(field,texcoord-vec2(0,d.y)).a)*255.0*${te};
  vec3 normal=normalize(vec3(-dx/(2.0*d.x*extent.x),1,-dz/(2.0*d.y*extent.y)));
  float diffuse=max(0.0,dot(normal,sun));
  float shadow=cloudField((world.xz+vec2(time*2.0,-time))/150.0);
  vec3 c=sampleAt.rgb*(vec3(0.36,0.43,0.50)+vec3(0.93,0.78,0.55)*diffuse);
  c*=1.0-0.14*smoothstep(0.48,0.7,shadow);
  float edge=min(min(texcoord.x,1.0-texcoord.x),min(texcoord.y,1.0-texcoord.y));
  c=mix(vec3(0.09,0.14,0.17),c,smoothstep(0.0,0.025,edge));
  colour=vec4(haze(c,world,eye),1);
}`,ve=`#version 300 es
precision highp float;
uniform mat4 vp; uniform float altitude; out vec3 world;
void main(){
  const vec2 corners[6]=vec2[6](vec2(-1,-1),vec2(1,-1),vec2(-1,1),vec2(-1,1),vec2(1,-1),vec2(1,1));
  world=vec3(corners[gl_VertexID].x*6000.0,altitude,corners[gl_VertexID].y*6000.0);
  gl_Position=vp*vec4(world,1);
}`,tt=`#version 300 es
${$}
uniform vec3 eye; uniform float time; uniform sampler2D field; uniform vec2 extent;
in vec3 world; out vec4 colour;
void main(){
  vec2 p=world.xz;
  float wave=sin(p.x*0.17+p.y*0.21+time*1.4)*0.017+sin(p.x*0.41-p.y*0.12-time)*0.009;
  vec3 n=normalize(vec3(wave,1.0,wave*0.56));
  vec3 v=normalize(eye-world);
  float fresnel=pow(1.0-max(0.0,dot(v,n)),4.0);
  float glint=pow(max(0.0,dot(reflect(-sun,n),v)),190.0);
  vec2 uv=p/extent+0.5;
  vec3 sea=vec3(0.035,0.095,0.13);
  if(all(greaterThan(uv,vec2(0)))&&all(lessThan(uv,vec2(1)))) sea=texture(field,uv).rgb*0.54;
  vec3 c=mix(sea,skyLight(reflect(-v,n))*0.60,0.25+0.50*fresnel);
  c+=vec3(0.9,0.66,0.30)*glint*0.7;
  colour=vec4(haze(c,world,eye),1);
}`,it=`#version 300 es
${$}
uniform vec3 eye; uniform float time; uniform float altitude;
in vec3 world; out vec4 colour;
void main(){
  vec2 p=(world.xz+vec2(time*2.0,-time*0.7))/170.0;
  float field=cloudField(p);
  float density=smoothstep(0.49,0.72,field);
  float bright=clamp((field-cloudField(p+sun.xz*0.35))*3.0+0.55,0.0,1.0);
  vec3 c=mix(vec3(0.36,0.42,0.48),vec3(0.81,0.77,0.66),bright);
  float edge=1.0-smoothstep(1200.0,3000.0,length(world.xz-eye.xz));
  float facing=smoothstep(0.0,15.0,abs(eye.y-altitude));
  colour=vec4(haze(c,world,eye),density*0.46*edge*facing);
}`;function nt(i=256,e=160){const t=new Float32Array((i+1)*(e+1)*2);for(let c=0;c<=e;c++)for(let o=0;o<=i;o++){const a=(c*(i+1)+o)*2;t[a]=o/i,t[a+1]=c/e}const n=new Uint32Array(i*e*6);let s=0;for(let c=0;c<e;c++)for(let o=0;o<i;o++){const a=c*(i+1)+o,x=a+i+1;n.set([a,x,a+1,a+1,x,x+1],s),s+=6}return{vertices:t,indices:n}}function rt(i){const e=i.getContext("webgl2",{alpha:!1,antialias:!0,powerPreference:"low-power"});if(!e)return null;const t=[];let n=!1;const s=(a,x)=>(t.push(()=>x.call(e,a)),a),c=()=>{if(!n){n=!0;for(const a of t.reverse())a();t.length=0,o(),Pe(e)}},o=Le(c);try{const a=(p,E)=>{const w=[],g=s(e.createProgram(),e.deleteProgram);try{for(const[f,l]of[[e.VERTEX_SHADER,p],[e.FRAGMENT_SHADER,E]]){const u=e.createShader(f);if(w.push(u),e.shaderSource(u,l),e.compileShader(u),!e.getShaderParameter(u,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(u));e.attachShader(g,u)}if(e.linkProgram(g),!e.getProgramParameter(g,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(g))}finally{for(const f of w)e.deleteShader(f)}const I=new Map;return{program:g,u:f=>(I.has(f)||I.set(f,e.getUniformLocation(g,f)),I.get(f))}},x=a(Qe,Je),_=a(Ze,et),b=a(ve,tt),F=a(ve,it),T=Ce({w:768,h:480}),R=new Uint8Array(T.w*T.h*4);for(let p=0;p<T.height.length;p++)R.set(T.colour.subarray(p*3,p*3+3),p*4),R[p*4+3]=T.height[p];const D=s(e.createTexture(),e.deleteTexture);e.bindTexture(e.TEXTURE_2D,D),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,T.w,T.h,0,e.RGBA,e.UNSIGNED_BYTE,R),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.generateMipmap(e.TEXTURE_2D);const k=nt(),O=s(e.createVertexArray(),e.deleteVertexArray);e.bindVertexArray(O),e.bindBuffer(e.ARRAY_BUFFER,s(e.createBuffer(),e.deleteBuffer)),e.bufferData(e.ARRAY_BUFFER,k.vertices,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s(e.createBuffer(),e.deleteBuffer)),e.bufferData(e.ELEMENT_ARRAY_BUFFER,k.indices,e.STATIC_DRAW),e.bindVertexArray(null);const B=new Float32Array(9),L=new Float32Array(16);return{render(p,E,w,g=!1){if(n||e.isContextLost())return;const I=Math.min(1.25,Math.sqrt(Ke/Math.max(1,E*w))),S=Math.max(1,Math.round(E*I)),f=Math.max(1,Math.round(w*I));(i.width!==S||i.height!==f)&&(i.width=S,i.height=f),e.viewport(0,0,S,f);const l=je(p,E/w,g),u=ke(l.eye,l.aim,Me);Ie(Se(l.fov,E/w,.5,1e4),u,L),B.set([u[0],u[4],u[8],u[1],u[5],u[9],-u[2],-u[6],-u[10]]),e.depthMask(!0),e.clear(e.DEPTH_BUFFER_BIT),e.disable(e.DEPTH_TEST),e.disable(e.BLEND),e.useProgram(x.program),e.uniform2f(x.u("resolution"),S,f),e.uniformMatrix3fv(x.u("basis"),!1,B),e.uniform1f(x.u("halfFov"),Math.tan(l.fov/2)),e.drawArrays(e.TRIANGLES,0,3),e.enable(e.DEPTH_TEST),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,D);const N=y=>{e.useProgram(y.program),e.uniformMatrix4fv(y.u("vp"),!1,L),e.uniform3fv(y.u("eye"),l.eye),e.uniform2f(y.u("extent"),Ue,ze),e.uniform1f(y.u("time"),g?0:Math.min(p,24)),e.uniform1i(y.u("field"),0)};N(b),e.uniform1f(b.u("altitude"),-.15),e.drawArrays(e.TRIANGLES,0,6),N(_),e.bindVertexArray(O),e.drawElements(e.TRIANGLES,k.indices.length,e.UNSIGNED_INT,0),e.bindVertexArray(null),N(F),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1);for(const y of l.eye[1]>260?[232,247,262]:[262,247,232])e.uniform1f(F.u("altitude"),y),e.drawArrays(e.TRIANGLES,0,6);e.depthMask(!0),e.disable(e.BLEND)},dispose:c}}catch(a){return c(),console.warn("[intro] landscape unavailable:",a.message),null}}const ot=Object.freeze({interkarma:new URL(""+new URL("interkarma-tGdFPUtH.webp",import.meta.url).href,import.meta.url).href,nexus:new URL(""+new URL("nexus-BAdfrqEd.webp",import.meta.url).href,import.meta.url).href}),at=`${Fe}
#intro{position:fixed;inset:0;z-index:30;overflow:hidden;background:#06090b;color:#e5d5ab;
 ${De}isolation:isolate;touch-action:manipulation;}
#intro *{box-sizing:border-box} #intro [hidden]{display:none!important}
.intro-film{position:absolute;inset:0;overflow:hidden;opacity:0;background:radial-gradient(ellipse at 65% 42%,#6d6250 0,#233541 36%,#080e17 76%)}
.intro-landscape{position:absolute;inset:0;display:block;width:100%;height:100%;will-change:transform}
.intro-cloud,.intro-shade,.intro-vignette{position:absolute;inset:0;pointer-events:none}
.intro-cloud{background:#d5d8d4;opacity:0}.intro-shade{background:#030609;opacity:.2}
.intro-vignette{background:radial-gradient(ellipse at 50% 48%,transparent 28%,rgba(1,3,5,.35) 70%,rgba(1,3,5,.88) 100%)}
.intro-letterbox{position:absolute;inset:0;pointer-events:none;border-top:5.5dvh solid #040608;border-bottom:5.5dvh solid #040608}
.intro-credit{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;opacity:0;pointer-events:none;text-align:center}
.intro-credit p{margin:0;font-size:clamp(11px,1.15vw,15px);text-transform:uppercase;letter-spacing:.26em;text-shadow:0 2px 12px #000}
.intro-credit img{display:block;max-width:62vw;max-height:29dvh;width:auto;height:auto;object-fit:contain;filter:drop-shadow(0 3px 14px #0008)}
.intro-credit[data-credit=nexus] img{max-width:45vw;max-height:17dvh}
/* BR5: the box keeps BR4's height - 86vw and 1240px x 850/2112 x 526/322 for the DFO mark's 1.63:1 */
.intro-title{position:absolute;left:50%;top:48%;width:min(56.5vw,815px);opacity:0;pointer-events:none;transform-origin:50% 50%;will-change:transform,opacity,filter}
.intro-title .brand-logo{display:block;width:100%;height:auto}
.intro-title-fallback{font-size:clamp(28px,7vw,100px);text-align:center;margin:0;letter-spacing:.05em}
.intro-light{position:absolute;inset:0;opacity:0;pointer-events:none;background:radial-gradient(ellipse at 50% 50%,#ebd3a025,transparent 58%)}
.intro-gate{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:22px;text-align:center;background:radial-gradient(ellipse at 50% 42%,#14222dcc,#030609 75%);padding:28px;cursor:pointer}
#intro button{font:inherit;cursor:pointer;touch-action:manipulation;color:inherit}
.intro-begin{min-height:48px;min-width:168px;padding:13px 26px;background:#08101888;border:1px solid #8c7851;font-size:13px!important;letter-spacing:.18em;text-transform:uppercase}
.intro-begin:hover{background:#ad8b3a20;border-color:#dec78c}
#intro button:focus-visible{outline:2px solid #e9d397;outline-offset:6px}
.intro-begin:disabled{opacity:.5;cursor:wait}
.intro-status{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}
.intro-skip{position:absolute;right:max(20px,env(safe-area-inset-right));top:max(16px,env(safe-area-inset-top));z-index:3;min-height:44px;padding:10px 16px;background:#04060899;border:1px solid #b1a17a42;font-size:11px!important;letter-spacing:.15em;text-transform:uppercase}
.intro-continue{position:absolute;left:50%;bottom:max(13dvh,60px);transform:translateX(-50%);white-space:nowrap;min-height:48px;padding:12px 28px;background:none;border:0;font-size:12px!important;letter-spacing:.25em;text-transform:uppercase;opacity:0}
.intro-continue:before,.intro-continue:after{content:'◆';display:inline-block;font-size:7px;vertical-align:middle;color:#bfa878;margin:0 18px}
.intro-footer{position:absolute;bottom:max(18px,env(safe-area-inset-bottom));left:20px;right:20px;text-align:center;font-size:11px;line-height:1.5;letter-spacing:.18em;text-transform:uppercase;color:#898a82;pointer-events:none}
@media(max-width:600px){.intro-credit img{max-width:80vw;max-height:24dvh}.intro-credit[data-credit=nexus] img{max-width:72vw}.intro-credit p{font-size:11px;letter-spacing:.18em}.intro-continue{bottom:23dvh;font-size:11px!important;letter-spacing:.16em}.intro-title{width:94vw}.intro-letterbox{border-width:4dvh 0}.intro-footer{font-size:11px}}
@media(max-height:450px){.intro-continue{bottom:7dvh}.intro-title{width:min(48.7vw,657px)}.intro-footer{bottom:6px}.intro-gate{gap:12px}}
`,m=(i,e,t,n)=>{const s=i.createElement(e);return t&&(s.className=t),n&&(s.textContent=n),s};async function ge(i){let e;try{return await Promise.race([i.decode(),new Promise((t,n)=>{e=setTimeout(()=>n(new Error("Image timed out")),1e4)})]),i.naturalWidth>0}catch{return i.hidden=!0,!1}finally{clearTimeout(e)}}async function st({theme:i,onReveal:e,doc:t=document,freezeAt:n=null,debug:s=!1}={}){const c=t.defaultView,o=c.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,a=m(t,"section");a.id="intro",a.setAttribute("aria-label","DFO Online introduction");const x=m(t,"style");x.textContent=at,a.append(x),Oe(t);const _=m(t,"div","intro-film"),b=m(t,"canvas","intro-landscape");b.setAttribute("aria-hidden","true");const F=m(t,"div","intro-cloud"),T=m(t,"div","intro-shade");_.append(b,F,T,m(t,"div","intro-vignette"),m(t,"div","intro-letterbox"));const R=[],D=new Map;for(const r of Te){const v=m(t,"div","intro-credit");v.dataset.credit=r.key,v.setAttribute("aria-hidden","true");const A=m(t,"img");A.src=ot[r.key],A.alt=r.key==="interkarma"?"Interkarma — Daggerfall Unity":"Nexus Mods",v.append(m(t,"p",null,r.caption),A),D.set(r.key,v),R.push(ge(A)),_.append(v)}const k=m(t,"div","intro-title"),O=Ne(t);k.append(O),R.push(ge(O).then(r=>{r||k.append(m(t,"h1","intro-title-fallback","DFO Online"))}));const B=m(t,"div","intro-light");_.append(k,B);const L=m(t,"div","intro-gate"),p=m(t,"button","intro-begin","Begin");p.type="button",p.disabled=!0;const E=m(t,"p","intro-status","Preparing the journey…");E.setAttribute("role","status"),L.append(p,E);const w=m(t,"button","intro-skip","Skip intro");w.type="button";const g=m(t,"button","intro-continue","Tap to continue");g.type="button",g.hidden=!0;const I=m(t,"div","intro-footer");a.append(_,L,w,g,I),t.body.append(a);const S=Promise.all(R).catch(()=>{});let f=null,l="preparing",u=!1,N=null,y=null;const Ee=["preparing","ready","paused"];let Y=null,C=null,W=null,ne=!1,re=0,oe=0,ae=0,V=1e3/60,j=0,se;const we=new Promise(r=>{se=r}),h={phase:l,time:0,frames:0,impactTime:null,readyTime:null,fadeStart:null};s&&(c.__intro={theme:i,state:h,snapshot:()=>({...h,sourceRunning:!!i.source,level:i.level,audioState:i.context?.state,time:i.time()})}),s&&n!==null&&(c.__intro.seek=r=>(Number.isFinite(r)&&r>=0&&(n=r),j));const q=()=>{u||(u=!0,c.cancelAnimationFrame(N),c.removeEventListener("keydown",de,!0),c.removeEventListener("keyup",pe,!0),a.removeEventListener("click",ue),b.removeEventListener("webglcontextlost",fe),f?.dispose(),f=null,a.remove(),C&&(C.inert=!1,C.querySelector("button:not(:disabled)")?.focus({preventScroll:!0})),h.phase="menu",se())},U=()=>{if(u||y!==null)return;const r=i.unlock();Promise.all([r,i.prepare()]).then(([v,A])=>{v&&A&&!i.disposed&&(i.setLevel(Z,J),i.start())}),i.setLevel(Z,J),l="transition",y=performance.now(),h.fadeStart=i.time(),p.disabled=!0,g.disabled=!0,w.disabled=!0,a.setAttribute("aria-hidden","true");try{e(),C=t.getElementById("enhanced-menu"),C&&(C.inert=!0)}catch(v){console.warn("[intro] menu handoff failed:",v.message),q()}},le=async()=>{if(l==="transition"||u||l==="starting")return;const r=l==="paused";l="starting",p.disabled=!0,E.textContent="Opening…";const v=await i.unlock();await S;const A=await i.prepare();if(!(u||y!==null)){if(!A){Y=G+1,L.hidden=!0,l="hold",I.textContent="Music couldn’t load. You can still continue.";return}if(!v||!i.start()){l=r?"paused":"ready",p.disabled=!1,p.textContent=r?"Resume":"Begin",E.textContent="Tap anywhere to enable sound.";return}l="playing",L.hidden=!0,E.textContent=""}},ce=()=>!L.hidden&&Ee.includes(l);function ue(r){if(r.stopPropagation(),l==="transition"){r.preventDefault();return}if(r.target.closest(".intro-skip")){U();return}if(ce()){le();return}l==="hold"&&U()}function de(r){if(l==="transition"){r.preventDefault(),r.stopImmediatePropagation();return}r.repeat||(r.key==="Escape"?(r.preventDefault(),r.stopImmediatePropagation(),U()):(r.key==="Enter"||r.key===" ")&&(l==="hold"||ce())&&(r.preventDefault(),r.stopImmediatePropagation(),r.target===w||l==="hold"?U():le()))}function pe(r){l==="transition"&&(r.preventDefault(),r.stopImmediatePropagation())}function fe(r){r.preventDefault(),f?.dispose(),f=null,h.landscapeReady=!1}a.addEventListener("click",ue),c.addEventListener("keydown",de,!0),c.addEventListener("keyup",pe,!0),b.addEventListener("webglcontextlost",fe);const Ae=r=>{if(u)return;const v=r-ae;ae=r,v>4&&v<45&&(V+=(v-V)*.12);const A=n??Y??i.time(r+V),d=qe(A,o);if(l==="playing"&&n===null&&i.context?.state!=="running"&&!t.hidden&&(l="paused",L.hidden=!1,p.disabled=!1,p.textContent="Resume",E.textContent="Tap anywhere to resume the music and film."),l==="paused"&&i.context?.state==="running"&&(l="playing",L.hidden=!0),["playing","hold","paused","transition"].includes(l)||n!==null){_.style.opacity=String(Y!==null?1:d.opening);const z=Math.max(1,a.clientWidth),K=Math.max(1,a.clientHeight);!t.hidden&&(W===null||d.landscapeTime!==W.landscapeTime||z!==re||K!==oe)&&(f?.render(d.landscapeTime,z,K,o),W=d,re=z,oe=K),b.style.transform=`translateY(${(d.title.impact*6).toFixed(2)}px) scale(${(1+d.title.impact*.012).toFixed(5)})`,F.style.opacity=String(o?0:d.cloud*.88),T.style.opacity=String(d.shade);for(const he of d.credits)D.get(he.key).style.opacity=String(he.opacity);k.style.opacity=String(d.title.opacity),k.style.transform=`translate(-50%,-50%) translateY(${(d.title.y*a.clientHeight).toFixed(3)}px) scale(${d.title.scale.toFixed(5)})`,k.style.filter=d.title.blur>.02?`blur(${d.title.blur.toFixed(2)}px)`:"none",B.style.opacity=String(d.title.impact*.6),g.hidden=!d.ready,g.style.opacity=String(d.prompt),d.ready&&l==="playing"&&(l="hold",w.hidden=!0),d.ready&&!ne&&y===null&&(ne=!0,g.focus({preventScroll:!0}))}if(j++,s&&(h.phase=l,h.time=A,h.frames=j,h.frameMs=v,h.presentationMs=r+V,h.titleY=d.title.y,h.titleOpacity=d.title.opacity,h.titleScale=d.title.scale,h.titleBlur=d.title.blur,d.title.impact>0&&h.impactTime===null&&(h.impactTime=A),d.ready&&h.readyTime===null&&(h.readyTime=A)),y!==null){const z=(performance.now()-y)/(J*1e3);if(a.style.opacity=String(1-be(z)),z>=1){q();return}}N=c.requestAnimationFrame(me)},me=r=>{try{Ae(r)}catch(v){console.warn("[intro] stopping the film:",v.message),U(),q()}};return N=c.requestAnimationFrame(me),(async()=>{if(await new Promise(r=>c.requestAnimationFrame(()=>c.requestAnimationFrame(r))),!u){const r=i.prepare();f=rt(b),h.landscapeReady=!!f,f?.render(0,a.clientWidth,a.clientHeight,o),await Promise.all([r,S]),!u&&y===null&&l==="preparing"&&(l="ready",p.disabled=!1,E.textContent=o?"Tap anywhere to begin. Reduced motion is on.":"Tap anywhere to begin. Sound on for the full experience.",n!==null?(l="playing",L.hidden=!0):p.focus({preventScroll:!0}))}})().catch(r=>{console.warn("[intro] preparation failed:",r.message),U()}),we}async function yt(i,{skip:e=!1,menuMusic:t=!1,doc:n=document,debug:s=!1,freezeAt:c=null,theme:o=new Xe}={}){let a=null;const x=()=>{a??=i()},_=()=>{n.hidden?o.pause().catch(()=>{}):o.source&&o.unlock()};let b=!1;const F=()=>{b||o.disposed||(b=!0,Promise.all([o.unlock(),o.prepare()]).then(([R,D])=>{R&&D&&!o.disposed&&(o.setLevel(Z,0),o.start())}))},T=()=>{o.source&&o.context?.state!=="running"?o.unlock():e&&t&&!o.source&&F()};n.addEventListener("visibilitychange",_),n.addEventListener("pointerdown",T),n.addEventListener("keydown",T);try{if(!e)try{await st({theme:o,onReveal:x,doc:n,freezeAt:c,debug:s})}catch(R){console.warn("[intro] opening the menu:",R.message)}return x(),await a}finally{n.removeEventListener("visibilitychange",_),n.removeEventListener("pointerdown",T),n.removeEventListener("keydown",T),await o.dispose(),s&&n.defaultView.__intro&&(n.defaultView.__intro.state.phase="disposed")}}export{ot as INTRO_CREDIT_URLS,yt as runCinematicFrontDoor,st as runIntro};
