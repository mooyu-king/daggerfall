import{aj as y,g as T}from"./main-BoKDoX6A.js";import{F}from"./labGrass-DUYtOofK.js";import{B as s,a as P}from"./blowShapes-cPECpha1.js";import"./mathf-Bz0mEc0c.js";import"./grassPixelArt-BsaiYvLm.js";import"./enhancedLighting-OKvUqk8X.js";const p=.25,A=.35,v=.3,L=.06,w=.1,C=.0625,O=`
// edge: metres to the shape's outline (unsigned); fin: 1 inside, 0 outside; s: the fill coordinate (0 its root, 1 its far
// edge); t: how far the fill has reached; nowK: 0..1 through the last stretch; flash: the landing's 1..0; col: its colour
vec4 telegraphStyle(float edge, float fin, float s, float t, float nowK, float flash, vec3 col, float fogK) {
  float aa = min(max(fwidth(edge), 1e-4), ${w.toFixed(4)});
  float core = 1.0 - smoothstep(aa, 2.2 * aa, edge);
  float keyl = (1.0 - fin) * (1.0 - core) * (1.0 - smoothstep(2.2 * aa, 5.0 * aa, edge));
  float glow = (1.0 - fin) * smoothstep(4.0 * aa, 6.0 * aa, edge) * exp(-(edge - 5.0 * aa) / (4.0 * aa + 0.08));   // past the keyline, never over it
  float fs = max(fwidth(s), 1e-4);
  float filled = fin * (1.0 - smoothstep(t - fs, t + fs, s));
  vec3 lineCol = mix(col, vec3(1.0, 0.95, 0.85), 0.45 * nowK);
  vec3 rgb = col * (fin * 0.10 + filled * (0.22 + 0.40 * t * t + 0.25 * nowK)) + lineCol * (core * (0.9 + 0.6 * nowK) + glow * 0.2);
  float a = fin * (0.20 + 0.20 * filled) + keyl * 0.55 + core * 0.6;
  if (flash > 0.0) {
    vec3 hot = mix(col, vec3(1.0, 0.96, 0.88), 0.6);
    rgb = hot * fin * (0.25 + 1.1 * flash) + lineCol * core;
    a = fin * (0.35 + 0.35 * flash) + core * 0.6;
  }
  return vec4(rgb * fogK, clamp(a, 0.0, 1.0) * fogK);
}
// TELL3: the iron mark over the style's colour - p the fragment's place in the shape's own frame (across, along)
vec4 telegraphIron(vec4 o, float edge, float fin, vec2 p, vec3 col, float fogK) {
  float aa = min(max(fwidth(edge), 1e-4), ${w.toFixed(4)});
  float inner = fin * (1.0 - smoothstep(aa, 2.2 * aa, abs(edge - ${p.toFixed(3)})));
  float u = (p.x + p.y) / ${A.toFixed(3)};
  float fu = max(fwidth(u), 1e-4);
  float hatch = fin * (1.0 - smoothstep(0.12, 0.12 + fu, abs(fract(u) - 0.5))) * step(${p.toFixed(3)} + 2.2 * aa, edge);
  vec3 rgb = col * (inner * 0.9 + hatch * 0.35);
  return vec4(o.rgb + rgb * fogK, clamp(o.a + (inner * 0.55 + hatch * 0.18) * fogK, 0.0, 1.0));
}
// TELL9: telegraph contrast over the style (and iron's) - the line widened to twice its width, a white keyline outside
// it, and a poise mark's fill dotted (iron 1 keeps its hatch alone); AUDIT TELL U2: a dark band between the two
vec4 telegraphContrast(vec4 o, float edge, float fin, vec2 p, float iron, vec3 col, float fogK) {
  float aa = min(max(fwidth(edge), 1e-4), ${C.toFixed(4)});
  float thick = (1.0 - smoothstep(2.2 * aa, 4.4 * aa, edge)) * smoothstep(aa, 2.2 * aa, edge);
  float kd = (1.0 - fin) * smoothstep(4.0 * aa, 4.4 * aa, edge) * (1.0 - smoothstep(5.0 * aa, 5.4 * aa, edge));
  float kw = (1.0 - fin) * smoothstep(5.0 * aa, 5.4 * aa, edge) * (1.0 - smoothstep(7.0 * aa, 7.5 * aa, edge));
  vec2 q = (fract(p / ${v.toFixed(3)} + 0.5) - 0.5) * ${v.toFixed(3)};
  float fq = max(fwidth(length(q)), 1e-4);
  float dots = (1.0 - iron) * fin * (1.0 - smoothstep(${L.toFixed(3)}, ${L.toFixed(3)} + fq, length(q))) * step(0.1 + 4.4 * aa, edge);
  vec3 rgb = col * (thick * 0.9 + dots * 0.55) + vec3(1.0) * kw * 0.85;
  return vec4(o.rgb * (1.0 - kd * 0.7 * fogK) + rgb * fogK, clamp(o.a + (thick * 0.6 + kd * 0.6 + kw * 0.6 + dots * 0.3) * fogK, 0.0, 1.0));
}`,b=()=>T("telegraphContrast")===!0,E=Object.freeze({lunge:0,sweep:1,slam:2,ring:3,charge:0,leap:2,aimed:0,pyre:2}),x=Object.freeze({lunge:s.lunge.len,sweep:s.sweep.r,slam:s.slam.ahead+s.slam.r,ring:s.ring.rOut,charge:s.charge.len,leap:s.leap.range+s.leap.r,aimed:0,pyre:s.pyre.range+s.pyre.r}),_=(t,a=null)=>(Number.isFinite(a)&&(t==="leap"||t==="aimed"||t==="pyre")?a+(t==="leap"?s.leap.r:t==="pyre"?s.pyre.r:0):x[t]??k)+.6,k=Math.max(...Object.values(x))+.3;function I(t){return t.kind==="lunge"||t.kind==="charge"?[t.len??0,t.halfW??0,0,0]:t.kind==="aimed"?[t.ahead??0,t.halfW??0,0,0]:[t.r??0,t.ahead??0,0,0]}const N=t=>(t.kind==="lunge"||t.kind==="charge"?(t.len??0)+(t.halfW??0):t.kind==="aimed"?(t.ahead??0)+(t.halfW??0):(t.ahead??0)+(t.r??0))+.6,S=.06,K=(t=0)=>S+(t>0?t:0),u=.12;function Q(t,a,n,l=0){if(t==="lunge"||t==="charge"){const e=s[t],o=n>=-.3&&n<=e.len&&Math.abs(a)<=e.halfW,r=Math.max(0,(n+.3)/(e.len+.3)),f=o&&(e.len-n<u||n+.3<u||e.halfW-Math.abs(a)<u);return{inside:o,edge:r,rim:f}}if(t==="sweep"){const e=s.sweep,o=Math.hypot(a,n),r=o<1e-9?0:Math.acos(Math.max(-1,Math.min(1,n/o))),f=o<=e.r&&(o<.5||r<=e.halfArc),g=f&&(e.r-o<u||o>=.5&&(e.halfArc-r)*o<u);return{inside:f,edge:o/e.r,rim:g}}if(t==="ring"){const e=s.ring,o=Math.hypot(a,n),r=o>=e.rIn&&o<=e.rOut;return{inside:r,edge:Math.max(0,(o-e.rIn)/(e.rOut-e.rIn)),rim:r&&(o-e.rIn<u||e.rOut-o<u)}}if(t==="aimed"){const e=s.aimed.halfW,o=n>=-.3&&n<=l&&Math.abs(a)<=e;return{inside:o,edge:Math.max(0,(n+.3)/(l+.3)),rim:o&&(l-n<u||e-Math.abs(a)<u)}}if(t==="leap"||t==="pyre"){const e=s[t].r,o=Math.hypot(a,n-l);return{inside:o<=e,edge:o/e,rim:o<=e&&e-o<u}}const i=s.slam,h=Math.hypot(a,n-i.ahead),c=h<=i.r;return{inside:c,edge:h/i.r,rim:c&&i.r-h<u}}const D=`#version 300 es
layout(location = 0) in vec2 aCorner;
uniform mat4 uVP;
uniform vec3 uOrigin;
uniform float uYaw;
uniform float uHalf;
uniform float uLift;
uniform vec2 uSlope;   // AUDIT TACT D8: the ground's rise per metre (across, along) - the quad lies on the slope it marks
out vec2 vLocal;   // (across, along) in the blow's frame
out vec3 vWorld;   // AUDIT TACT D9: where the fog measures from
void main() {
  vec2 f = vec2(sin(uYaw), cos(uYaw));
  vec2 w = vec2(-f.y, f.x);   // across, as inBlow reads it: (-fz, fx)
  vLocal = aCorner * uHalf;
  vec2 xz = uOrigin.xz + w * vLocal.x + f * vLocal.y;
  vWorld = vec3(xz.x, uOrigin.y + uLift + dot(uSlope, vLocal), xz.y);
  gl_Position = uVP * vec4(vWorld, 1.0);
}`,U=`#version 300 es
precision highp float;
in vec2 vLocal;
uniform int uKind;
uniform float uT;
uniform float uFlash;
uniform vec3 uColor;
uniform vec4 uP;   // lunge (TELL6: and the charge): len, halfW / sweep: r, halfArc / slam (and the leap): r, ahead / TELL6 ring: rIn, rOut
uniform float uNow;   // TELL2: 0..1 through the last stretch before the landing
uniform float uNearFloor;   // TELL2: the fog's floor for a mark near the player (0 none)
uniform float uIron;   // TELL3: 1 an iron blow - its second rim and its hatch
uniform float uCut;   // TELL5: a cut feint's fade, 1..0 (0 none) - it goes out dashed
uniform float uShatter;   // AUDIT TELL (3.2): a broken wind-up's shatter, 1..0 (0 none) - white and cracked, going out
uniform float uContrast;   // TELL9: 1 the player's telegraph contrast - the bolder line, the white keyline, the dots
in vec3 vWorld;
uniform int uFogMode;
uniform float uFogDensity;
uniform vec2 uFogRange;
uniform vec3 uCamPos;
out vec4 oColor;
${F}
${O}
void main() {
  float across = vLocal.x, along = vLocal.y;
  bool inside = false;
  float edge = 0.0;   // the fill coordinate: 0 at its root, 1 at its far edge
  float dist = 0.0;   // TELL2: metres to the outline, unsigned (the line's, the keyline's and the glow's)
  if (uKind == 0) {
    inside = along >= -0.3 && along <= uP.x && abs(across) <= uP.y;
    edge = max(0.0, (along + 0.3) / (uP.x + 0.3));
    vec2 q = abs(vec2(across, along - (uP.x - 0.3) * 0.5)) - vec2(uP.y, (uP.x + 0.3) * 0.5);
    dist = abs(length(max(q, 0.0)) + min(max(q.x, q.y), 0.0));
  } else if (uKind == 1) {
    float d = length(vec2(across, along));
    float ang = d < 1e-9 ? 0.0 : acos(clamp(along / d, -1.0, 1.0));
    inside = d <= uP.x && (d < 0.5 || ang <= uP.y);
    edge = d / uP.x;
    // AUDIT TELL U8: the disc at its feet is the shape's too (ai/foeBlows.js inBlow) and wears the outline - behind the
    // arc its rim is the edge, and outside both the nearer of the two is
    dist = inside ? (d < 0.5 && ang > uP.y ? 0.5 - d : min(uP.x - d, d >= 0.5 ? (uP.y - ang) * d : 1e3)) : min(max(d - uP.x, (ang - uP.y) * d), d - 0.5);
  } else if (uKind == 2) {
    float d = length(vec2(across, along - uP.y));
    inside = d <= uP.x;
    edge = d / uP.x;
    dist = abs(uP.x - d);
  } else {   // TELL6: the ring - safe at its feet
    float d = length(vec2(across, along));
    inside = d >= uP.x && d <= uP.y;
    edge = max(0.0, (d - uP.x) / (uP.y - uP.x));
    dist = inside ? min(d - uP.x, uP.y - d) : (d < uP.x ? uP.x - d : d - uP.y);
  }
  // TELL2: the line, the keyline and the glow reach a little past the outline; nothing else outside it is drawn - AUDIT
  // TELL U10: drawn as nothing (below), never dropped ahead of the style's derivatives, which a 2x2 block shares
  bool beyond = !inside && dist > 0.5;
  // AUDIT TACT D9: fogged as the ground it lies on - never a glow through the murk; TELL2: never lost a step away
  float fogK = max(fogFactorAt(vWorld), uNearFloor);
  oColor = telegraphStyle(dist, inside ? 1.0 : 0.0, edge, uT, uNow, uFlash, uColor, fogK);
  if (uIron > 0.5) oColor = telegraphIron(oColor, dist, inside ? 1.0 : 0.0, vec2(across, along), uColor, fogK);   // TELL3
  if (uContrast > 0.5) oColor = telegraphContrast(oColor, dist, inside ? 1.0 : 0.0, vec2(across, along), uIron, uColor, fogK);   // TELL9
  if (uShatter > 0.0) {   // AUDIT TELL (3.2): the mark white and whole-filled, broken into shards along two crossing cracks
    float cr = min(abs(fract(across * 1.9 + along * 0.7) - 0.5), abs(fract(along * 1.3 - across * 0.6) - 0.5));
    float shard = inside ? smoothstep(0.04, 0.09, cr) : 1.0;
    oColor = telegraphStyle(dist, inside ? 1.0 : 0.0, edge, 1.0, 0.0, 0.0, vec3(1.0), fogK) * (uShatter * shard);
  }
  if (uCut > 0.0) oColor *= uCut * step(0.5, fract((across + along) * 2.5));   // TELL5: a feint cut - dashed, fading
  if (beyond) oColor = vec4(0.0);   // AUDIT TELL U10: premultiplied nothing - the blend leaves the floor as it was
}`,M=new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),R=new Float32Array([0,1]),W=new Float32Array([0,0,0]),B=new Float32Array([0,0,0,0]);class J{constructor(a){this.gl=a,this.program=y(a,D,U,"foeTelegraph"),this.u={};for(const n of["uVP","uOrigin","uYaw","uHalf","uLift","uKind","uT","uFlash","uColor","uP","uSlope","uFogMode","uFogDensity","uFogRange","uCamPos","uFocus","uNow","uNearFloor","uIron","uCut","uContrast","uShatter"])this.u[n]=a.getUniformLocation(this.program,n);this.vao=a.createVertexArray(),a.bindVertexArray(this.vao),this.vbo=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,this.vbo),a.bufferData(a.ARRAY_BUFFER,M,a.STATIC_DRAW),a.enableVertexAttribArray(0),a.vertexAttribPointer(0,2,a.FLOAT,!1,8,0),a.bindVertexArray(null),this._vp=new Float32Array(16),this.drawn=0}draw(a,n,l,i=null,{contrast:h=b(),snowRise:c=0}={}){if(this.drawn=0,!a?.length||!n||!l)return 0;const e=this.gl,o=this.u;H(this._vp,n,l),e.useProgram(this.program),e.uniformMatrix4fv(o.uVP,!1,this._vp),e.uniform1f(o.uLift,K(c)),e.uniform1f(o.uContrast,h?1:0),e.uniform1i(o.uFogMode,i?i.mode:0),e.uniform1f(o.uFogDensity,i?.density??0),e.uniform2fv(o.uFogRange,i?.range??R),e.uniform3fv(o.uCamPos,i?.camPos??W),o.uFocus&&e.uniform4fv(o.uFocus,i?.focus??B),e.bindVertexArray(this.vao),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.disable(e.CULL_FACE),e.enable(e.POLYGON_OFFSET_FILL),e.polygonOffset(-2,-4);for(const{blow:r,phase:f,nearFloor:g=0}of a){e.uniform3f(o.uOrigin,r.origin[0],r.origin[1],r.origin[2]),e.uniform1f(o.uYaw,r.yaw),e.uniform2f(o.uSlope,r.slope?.[0]??0,r.slope?.[1]??0),e.uniform1i(o.uKind,E[r.kind]??0),e.uniform1f(o.uHalf,_(r.kind,r.ahead));const d=s[r.kind];r.kind==="lunge"||r.kind==="charge"?e.uniform4f(o.uP,d.len,d.halfW,0,0):r.kind==="sweep"?e.uniform4f(o.uP,d.r,d.halfArc,0,0):r.kind==="ring"?e.uniform4f(o.uP,d.rIn,d.rOut,0,0):r.kind==="leap"||r.kind==="pyre"?e.uniform4f(o.uP,d.r,r.ahead??0,0,0):r.kind==="aimed"?e.uniform4f(o.uP,r.ahead??0,d.halfW,0,0):e.uniform4f(o.uP,d.r,d.ahead,0,0),r.technique&&(e.uniform1f(o.uHalf,N(r)),e.uniform4f(o.uP,...I(r))),e.uniform1f(o.uT,f.t),e.uniform1f(o.uFlash,f.flash),e.uniform1f(o.uNow,f.flash>0?0:q(r,f)),e.uniform1f(o.uNearFloor,g>0?g:0),e.uniform1f(o.uIron,r.guard==="iron"?1:0),e.uniform1f(o.uCut,f.cut>0?f.cut:0),e.uniform1f(o.uShatter,f.shatter>0?f.shatter:0);const m=r.color??[1,.42,.12];e.uniform3f(o.uColor,m[0],m[1],m[2]),e.drawArrays(e.TRIANGLES,0,6),this.drawn++}return e.disable(e.POLYGON_OFFSET_FILL),e.polygonOffset(0,0),e.bindVertexArray(null),e.enable(e.CULL_FACE),e.depthMask(!0),e.disable(e.BLEND),this.drawn}}function q(t,a){const n=(t.land-t.start)*(1-a.t);return Math.max(0,Math.min(1,1-n/P))}function H(t,a,n){for(let l=0;l<4;l++)for(let i=0;i<4;i++)t[l*4+i]=a[i]*n[l*4]+a[4+i]*n[l*4+1]+a[8+i]*n[l*4+2]+a[12+i]*n[l*4+3];return t}export{E as BLOW_KIND,S as BLOW_LIFT,k as BLOW_QUAD_HALF,J as FoeTelegraphPass,Q as blowField,q as nowShare,_ as quadHalf,N as techniqueQuadHalf,I as techniqueUniform,b as telegraphContrastOn,K as telegraphLift};
