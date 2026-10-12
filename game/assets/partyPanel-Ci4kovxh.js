import{ag as Ee}from"./notify-DFqlyxC7.js";import{c_ as $e,cZ as we}from"./audio-DNWFK9ua.js";import{o as he}from"./textureReplacement-Dm152d-u.js";import{aR as Ne,aQ as Ie,aK as Fe}from"./main-BoKDoX6A.js";import"./controlsConfig-Bg-kRIme.js";import"./input-BD7Z56oz.js";import"./touchButtons-Dsogy_bJ.js";import{gT as Se,gV as pe,pQ as Pe}from"./weaponWidgetAssets-D5E7F89L.js";import{b6 as Oe}from"./professionLaw-CaJWT8qI.js";import{p as be,b as fe,a as Re}from"./partyBuffs-BGBr7PjW.js";import{S as de}from"./startDungeon-Dt6bFZVp.js";import"./enhancedStyle-DmWjjmxy.js";import"./mapsTables-Brf1I0Fy.js";import"./gameDate-CQxCCpuA.js";import"./plusCursor-Bct4-Trx.js";import"./soundClips-aeaFc5y0.js";import"./blocksFile-Dag4clyG.js";import"./soundReplacer-oJM0b_Wb.js";import"./gamepad-eT-5y5Nm.js";import"./billboardXml-mPCqD_4G.js";import"./blowShapes-cPECpha1.js";import"./dfmodTextures-Ca8zM-vp.js";import"./seasonsIliacBayAssets-CnKFvzbQ.js";import"./grassPixelArt-BsaiYvLm.js";import"./mwFirstPerson-BZT3rdCc.js";import"./mwNpc-CKlbMFSo.js";import"./weaponSheathing-B2hDJfSG.js";const ce="dagger-party-style",He="★",F="- / -",De="?",j=32,ge=34,Me=`
${Ie}
/* AUDIT SOC C6: 92, NOT 40. The FPS read-out is the other thing in this corner (ui/fpsCounter.js: top 8, z 9) and
   it is FOUR LINES tall with the renderer's counts on - measured at 76px in Chromium, bottom edge 84 - so a HUD at
   40 put its first card's portrait straight through the middle of it. 92 clears the read-out with eight pixels to
   spare; the touch value stays 76, which is the number that clears the touch layer's own top-right buttons. */
/* GUIDE4: ...and it steps under the quest tracker's card, which stands on the same line (ui/questTracker.js publishes
   its height as --dfquest-h, 0 with no card), so the two never cover each other. */
.dfparty { position: fixed; right: calc(8px + env(safe-area-inset-right, 0px)); top: calc(92px + var(--dfquest-h, 0px) + env(safe-area-inset-top, 0px));
  width: 200px; max-width: calc(100vw - 16px); z-index: 5; pointer-events: none;
  /* AUDIT GUIDE U17: stepped under the card, a full party is cut at the window's foot - never pushed off it */
  max-height: calc(100dvh - 100px - var(--dfquest-h, 0px) - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px)); overflow: hidden;
  display: flex; flex-direction: column; gap: 3px;
  ${Fe} color: var(--bone, #e9e4d9);
  -webkit-user-select: none; user-select: none; }
/* below the touch layer's own top-right row of buttons (ui/touch.js: top 16, 44 tall) */
.dfparty.touch { top: calc(76px + var(--dfquest-h, 0px) + env(safe-area-inset-top, 0px)); }
/* AUDIT SOC C7: A PHONE HAS NO TOP-RIGHT CORNER TO SPARE. At 430x860 with the touch skin the HUD covered most of every
   chat peek line and the open friends panel under it besides. Narrower AND out of that corner: the HUD drops to the
   bottom right, above the touch layer's own jump and sheathe column (ui/touch.js: bottom 16, 48 tall, so 76 clears
   them), where nothing is written and the finger never goes (the HUD takes no pointer). */
@media (max-width: 560px) {
  .dfparty, .dfparty.touch { width: 180px; top: auto; bottom: calc(76px + env(safe-area-inset-bottom, 0px)); }
}
/* AUDIT PARTY8: A PHONE HELD SIDEWAYS is wider than 560 and shorter than the stack - seven rows from top 76 ran to
   438 on a 430-tall screen, over the touch layer's jump and sheathe row (bottom 16, 48 tall). Capped so the bottom
   clears that row by the same 76 the portrait rule keeps; what does not fit is cut, never drawn over the buttons. */
@media (max-height: 560px) and (min-width: 561px) {
  .dfparty.touch { max-height: calc(100dvh - 152px - var(--dfquest-h, 0px) - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px)); overflow: hidden; }
}
/* AUDIT PRE-MERGE 1003 U4: A BOUT'S VERSUS BAR (ui/arenaHud.js, 560 wide, centred under the compass) reaches this corner on
   a screen under 980 - its half and this list's 208 from the edge - and stood on the list there; the list steps aside
   while the bar stands, as the quest card does. A phone's list is at the foot (above), clear of it. */
@media (min-width: 561px) and (max-width: 980px) { body:has(.arena-hud.on) .dfparty { visibility: hidden; } }
.dfparty-title { font-size: 11px; letter-spacing: .18em; text-transform: uppercase; text-align: right;
  color: var(--dim, #9a9486); text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.dfparty-count { margin-left: 6px; letter-spacing: 0; color: var(--bone, #e9e4d9); font-variant-numeric: tabular-nums; }
/* AUDIT WK-U6: MY COMPANIONS ARE NEVER THE FIRST CUT. Under the height cap (a phone held sideways, a short window under
   the quest card) the panel cuts at its foot what does not fit, and my companions' cards stood last - a full party cut
   them whole, every time. They stand in a list of their own after the seats', never shrunk; the seats' list shrinks
   instead and is cut at its own foot, the order kept. Being cut, it reaches up into the title's line by as much as it
   is drawn back, so a heal's "+N" rising off the first seat (.dfparty-heal, 12px over its card) is not cut with it. */
.dfparty-list { display: flex; flex-direction: column; gap: 3px; min-height: 0; overflow: hidden; padding-top: 14px; margin-top: -14px; }
.dfparty-mates { display: flex; flex-direction: column; gap: 3px; flex: none; }
.dfparty-list:empty, .dfparty-mates:empty { display: none; }
/* PARTY8-B: QUIET ROWS - no plate behind a card (no border, no fill, no blur: seven boxed cards were fourteen edges
   over the world). A row is a portrait, a name and thin lines under it; the text carries the HUD's hard shadow. */
.dfparty-card { position: relative; display: flex; gap: 6px; padding: 3px 0; }   /* relative: PARTY-BUFFS' heal floats off it */
/* away: the whole card goes quiet - the portrait too, so a grey face is never mistaken for a live one */
.dfparty-card.away { opacity: .46; filter: grayscale(1); }
.dfparty-card.mate .dfparty-thin { display: none; }   /* COMPANION-KIT: the crew carry no stamina or magicka */
.dfparty-face { flex: none; box-sizing: content-box; width: ${j}px; height: ${ge}px; overflow: hidden;   /* AUDIT PARTY8: the sheet's border-box took the 1px border out of the plate and squashed a 31-wide head */
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(180deg, #232830, #14171b); border: 1px solid var(--iron, #2b323b);
  box-shadow: 2px 2px 0 rgba(0,0,0,0.6); }
.dfparty-facepix { display: none; max-width: 100%; max-height: 100%; image-rendering: pixelated; }
.dfparty-face.has .dfparty-facepix { display: block; }
.dfparty-face.has .dfparty-facemark { display: none; }
.dfparty-facemark { font-size: 13px; font-weight: 600; color: var(--dim, #9a9486); opacity: .45; }
/* AUDIT WK-U4: A COMPANION'S LETTER IS HIS ROLE, WRITTEN - not the hole a face is still on its way to, which the dim
   mark at .45 is (1.9:1 on the plate). In the name's own bone, whole (11.7:1 on the plate's lighter stop); his role
   line under the bar is a member's place line, at its weight (it was dimmed again, 2.5:1 over snow). The mark is the
   plate's, read by nobody: the card's name says who he is (aria-hidden on the node). */
.dfparty-card.mate .dfparty-facemark { opacity: 1; color: var(--bone, #e9e4d9); }
.dfparty-body { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; gap: 3px; }
.dfparty-head { display: flex; align-items: baseline; gap: 4px; min-width: 0; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.dfparty-name { min-width: 0; flex: 0 1 auto; font-weight: 600; font-size: 12px; line-height: 1.2;
  color: ${Se}; letter-spacing: 0;   /* AUDIT FONT3 L7: a long name loses no more of itself to the tracking */ overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dfparty-lead { flex: none; font-size: 11px; line-height: 1; color: var(--brass, #c08a3e); }
.dfparty-lead.off { display: none; }
/* the health digits, at the row's right edge: drawn ONLY while the seat is under half health (.low), in the
   health's own red - a healthy party is names and bars and nothing else. The node is written for every pose. */
.dfparty-hp { margin-left: auto; flex: none; font-size: 11px; line-height: 1.2; color: #e2554c; font-variant-numeric: tabular-nums; }
.dfparty-hp.off { display: none; }
.dfparty-hp.blank { color: var(--dim, #9a9486); }   /* AUDIT PARTY8: a seat with no pose yet - dashes, dim */
/* the health is the one real bar; stamina and magicka are two hairlines under it, side by side - their shape, not
   their weight. The tracks are square-cornered and black, the enhanced HUD's own. */
.dfparty-bars { display: flex; flex-direction: column; gap: 3px; }
.dfparty-vital { display: flex; align-items: center; }
.dfparty-track { flex: 1; min-width: 0; height: 5px; overflow: hidden;
  background: rgba(0, 0, 0, .65); box-shadow: 0 0 0 1px rgba(0, 0, 0, .5); }
.dfparty-thin { display: flex; gap: 3px; }
.dfparty-thin .dfparty-vital { flex: 1; min-width: 0; }
.dfparty-thin .dfparty-track { height: 2px; }
.dfparty-fill { height: 100%; width: 0%; }
/* the skin's own hues - the blood red, a moss green, a dusk blue - not the web's primaries */
.dfparty-vital.health .dfparty-fill { background: linear-gradient(180deg, #d9463c, #7d1b15); }
.dfparty-vital.fatigue .dfparty-fill { background: linear-gradient(180deg, #4faa58, #2d6b34); }
.dfparty-vital.magicka .dfparty-fill { background: linear-gradient(180deg, #5d74d8, #33418f); }
/* a hit: the health fill flares for a beat, so the eye is pulled to the seat that took it. Two names for one
   animation - a fresh hit on a fill still flaring takes the other name, which restarts it with no reflow forced. */
@keyframes dfparty-hit { 0% { filter: brightness(2.6); } 100% { filter: brightness(1); } }
@keyframes dfparty-hit2 { 0% { filter: brightness(2.6); } 100% { filter: brightness(1); } }
.dfparty-fill.hit { animation: dfparty-hit .6s ease-out; }
.dfparty-fill.hit2 { animation: dfparty-hit2 .6s ease-out; }
/* the digits beside a bar are kept on the node (a pin reads them) and drawn nowhere: the bar says the shape */
.dfparty-num { display: none; }
/* the place line: drawn only for a seat that is NOT where I am (.off otherwise) - a party walking together says
   nothing under the bars; the one who wandered into a dungeon says where. An away seat says when it was last seen. */
.dfparty-where { font-size: 11px; line-height: 1; letter-spacing: 0;   /* AUDIT FONT3 L2: the floor's 11px on a 1.2 line took a row past PARTY8's 48px budget */ color: var(--dim, #9a9486); text-shadow: 2px 2px 0 rgba(0,0,0,0.85);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dfparty-where.off { display: none; }
/* PARTY-BUFFS (2026-09-27, Tabitha: "buff timers or SOME sort of indicator that we have placed a buff on a party teammate
   [preferably on their party portrait]"): the member's own live effects, under the bars - the spell's icon (its words
   while the art is on its way) with the rounds left over its corner, a debuff outlined in the health's red. Drawn
   only while there are any, so a party with nothing on it is still names and bars. */
.dfparty-fx { display: flex; flex-wrap: wrap; gap: 2px; }
.dfparty-fx.off { display: none; }
.dfparty-fxe { position: relative; width: 16px; height: 16px; flex: none; box-sizing: border-box;
  background: rgba(0,0,0,.55); box-shadow: 0 0 0 1px rgba(0,0,0,.6); }
.dfparty-fxe.debuff { box-shadow: 0 0 0 1px #e2554c; }
.dfparty-fxe img { display: block; width: 16px; height: 16px; image-rendering: pixelated; }
.dfparty-fxw { display: block; font-size: 7px; line-height: 16px; text-align: center; color: var(--bone, #e9e4d9); overflow: hidden; }
.dfparty-fxr { position: absolute; right: -1px; bottom: -2px; font-size: 7px; line-height: 1; color: #fff;
  text-shadow: 1px 1px 0 #000, -1px 0 0 #000; font-variant-numeric: tabular-nums; }
/* ...and a heal the member gained: "+N" in green, rising off the health bar and gone (Tabitha: "floating Heal numbers") */
@keyframes dfparty-heal { 0% { opacity: 0; transform: translateY(4px); } 15% { opacity: 1; } 100% { opacity: 0; transform: translateY(-14px); } }
.dfparty-heal { position: absolute; left: ${j+8}px; top: 2px; font-size: 11px; font-weight: 600; color: #7ee07a;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); animation: dfparty-heal 1.2s ease-out forwards; pointer-events: none; }
@media (prefers-reduced-motion: reduce) { .dfparty-heal { animation-name: dfparty-heal-still; } @keyframes dfparty-heal-still { 0%, 80% { opacity: 1; } 100% { opacity: 0; } } }
`;function Ue(a=document){if(a.getElementById?.(ce))return;const h=a.createElement("style");h.id=ce,h.textContent=Me,(a.head??a.body).append(h)}const Y=Object.freeze([Object.freeze({key:"health",now:"h",max:"hm",label:"Health"}),Object.freeze({key:"fatigue",now:"f",max:"fm",label:"Stamina"}),Object.freeze({key:"magicka",now:"m",max:"mm",label:"Magicka"})]),_e=a=>`${a?.race??"Breton"}|${a?.gender==="female"?"female":"male"}|${Math.max(0,Math.min(we-1,(a?.face??0)|0))}`;function Le(a){if(!a)return"";const h=String(a.loc??"").trim(),d=a.in===1?"dungeon":a.in===2?"inside":"";return h&&d?`${h} - ${d}`:h||d||"the wilderness"}function D(a,h){const d=Number(h),x=Number(a);return!Number.isFinite(d)||d<=0||!Number.isFinite(x)?0:Math.max(0,Math.min(100,Math.round(x/d*100)))}const me=50,ue=(a,h)=>!!a&&!!h&&a.px===h.px&&a.py===h.py&&(a.in??0)===(h.in??0)&&((a.in??0)!==2||(a.bk??null)===(h.bk??null))&&!((a.in??0)===1&&a.px===de.x&&a.py===de.y),Ke=a=>a?`${a.px},${a.py},${a.in??0},${a.bk??""}`:"";function ye(a,h){const d=Number(a),x=Number(h);return!Number.isFinite(d)||!Number.isFinite(x)?F:`${Math.max(0,Math.round(d))} / ${Math.max(0,Math.round(x))}`}const Ye="TFAC00I0.RCI";function je({fetchBytes:a,palette:h}={}){const d=new Map,x=u=>{let v=d.get(u);return v||(v=(async()=>{const k=new Ee;return k.load(await a(u),u,h),k})(),d.set(u,v)),v};return async u=>{if(!a||!h)return null;if(Number.isInteger(u?.common)&&u.common>=0){const T=(await x(Ye)).getDFBitmap(u.common,0);return T?he(T,h):null}const v=$e(u?.race??"Breton",u?.gender==="female"?"female":"male"),k=Math.max(0,Math.min(we-1,(u?.face??0)|0)),$=(await x(v.heads)).getDFBitmap(k,0);return $?he($,h):null}}const xe=a=>`${a?.key}|${a?.name}|${a?.role}|${Math.round(Number(a?.h)||0)}/${Math.round(Number(a?.hm)||0)}|${be(a?.fx)}`;function xt({social:a,doc:h=document,art:d=null,faceLoader:x=null,touch:u=Ne(),here:v=null,fxIcon:k=null,companions:z=null}={}){let $=z;Ue(h);const B=k??(e=>{try{return Pe(e)}catch{return null}}),T=()=>v?.()??null,q=()=>Ke(T()),ve=x??je(d??{}),p=(e,t,r)=>{const n=h.createElement(e);return n.className=t,r!=null&&(n.textContent=r),n},w=(e,t)=>{e.textContent!==t&&(e.textContent=t)},c=(e,t)=>{e.className!==t&&(e.className=t)},V=(e,t)=>{e.style.width!==t&&(e.style.width=t)},b=p("div",`dfparty${u?" touch":""}`);b.setAttribute("role","group"),b.setAttribute("aria-label","Party");const W=p("div","dfparty-title","Party"),G=p("span","dfparty-count","");W.append(G);const S=p("div","dfparty-list"),P=p("div","dfparty-mates");b.append(W,S,P),h.body.append(b),b.style.display="none";const y=new Map,C=new Map,O=new Map;let M=-1,U=-1,_="",E=!1,X=!1,N=null;const Q=()=>{try{const e=$?.()??[];return Array.isArray(e)?e:[]}catch{return[]}};let R=!0,Z=!1;const J=()=>{const e=!E&&X?"":"none";b.style.display!==e&&(b.style.display=e)},ee=e=>{const t=!!e;if(t!==E){if(E=t,E)for(const r of y.values())r.hpH=null;E||(N=null),J()}},L=(e,t,r)=>{if(e.drawn===t||!r?.width||!r?.height||r.colors?.byteLength!==r.width*r.height*4)return;const n=e.pix.getContext?.("2d");if(!n?.createImageData||!n.putImageData)return;e.pix.width=r.width,e.pix.height=r.height;const i=Math.max(1,Math.min(Math.floor(j/r.width),Math.floor(ge/r.height)));e.pix.style.width=`${r.width*i}px`,e.pix.style.height=`${r.height*i}px`;const o=n.createImageData(r.width,r.height);o.data.set(new Uint8ClampedArray(r.colors.buffer)),n.putImageData(o,0,0),e.drawn=t,c(e.facebox,"dfparty-face has")},Ae=(e,t,r)=>{if(C.has(t)){const i=C.get(t);i&&L(e,t,i);return}let n=O.get(t);n||(n=Promise.resolve().then(()=>ve(r)).then(i=>(O.delete(t),C.set(t,i??null),i??null),i=>(O.delete(t),C.set(t,null),Z||(Z=!0,console.warn("[party] portrait art unavailable:",i?.message??i)),null)),O.set(t,n)),n.then(i=>{R&&i&&e.faceKey===t&&L(e,t,i)})},te=()=>{const e=p("div","dfparty-card"),t=p("div","dfparty-face"),r=h.createElement("canvas");r.className="dfparty-facepix";const n=p("span","dfparty-facemark",De);n.setAttribute("aria-hidden","true"),t.append(r,n);const i=p("div","dfparty-body"),o=p("div","dfparty-head"),m=p("span","dfparty-name"),s=p("span","dfparty-lead off",He);s.setAttribute("title","Party leader"),s.setAttribute("aria-label","Party leader");const l=p("span","dfparty-hp off",F);o.append(m,s,l);const f=p("div","dfparty-where off"),g=p("div","dfparty-bars"),A=Y.map(I=>{const H=p("div",`dfparty-vital ${I.key}`),ie=p("div","dfparty-track"),se=p("div","dfparty-fill"),le=p("span","dfparty-num",F);return ie.append(se),H.append(ie,le),H.setAttribute("role","group"),H.setAttribute("aria-label",I.label),{row:H,fill:se,num:le}}),re=p("div","dfparty-thin");re.append(A[1].row,A[2].row),g.append(A[0].row,re);const oe=p("div","dfparty-fx off");i.append(o,g,oe,f),e.append(t,i);for(const I of A)I.fill.addEventListener?.("animationend",()=>c(I.fill,"dfparty-fill"));return{node:e,facebox:t,pix:r,facemark:n,name:m,lead:s,where:f,hp:l,vitals:A,fx:oe,fxKey:"#",faceKey:null,drawn:null,away:null,hpPct:null,hpH:null,hmH:null,hitFlip:!1}},ae=(e,t)=>{const r=Array.isArray(t)?t:[],n=r.map(o=>B(o.i)),i=`${be(r)}#${n.map(o=>o?1:0).join("")}`;i!==e.fxKey&&(e.fxKey=i,e.fx.replaceChildren?.(),r.forEach((o,m)=>{const s=p("span",`dfparty-fxe${o.d?" debuff":""}`),l=n[m];if(l){const f=h.createElement("img");f.src=l,f.alt="",s.append(f)}else s.append(p("span","dfparty-fxw",Re(o.n)));s.append(p("span","dfparty-fxr",String(o.r))),s.setAttribute("title",`${o.n||"Spell"} - ${o.r} rounds${o.d?" (harmful)":""}`),e.fx.append(s)}),c(e.fx,`dfparty-fx${r.length?"":" off"}`))},ne=(e,t)=>{const r=p("span","dfparty-heal",`+${t}`);e.node.append(r);const n=()=>r.remove?.();r.addEventListener?.("animationend",n),setTimeout(n,1500)},ke=(e,t,r)=>{const n=t.p??null;c(e.node,`dfparty-card${t.online?"":" away"}`);const i=t.name??"";e.name.textContent!==i&&(w(e.name,i),e.name.setAttribute("title",i)),c(e.lead,`dfparty-lead${r?"":" off"}`),e.away=t.online?null:{seen:t.seen},w(e.where,t.online?Le(n):pe(!1,t.seen,a.now())),c(e.where,`dfparty-where${!t.online||n&&!ue(n,T())?"":" off"}`);for(let f=0;f<Y.length;f++){const g=Y[f],A=e.vitals[f];V(A.fill,`${n?D(n[g.now],n[g.max]):0}%`),w(A.num,n?ye(n[g.now],n[g.max]):F)}w(e.hp,e.vitals[0].num.textContent);const o=n?D(n.h,n.hm):null;c(e.hp,`dfparty-hp${o==null&&t.online?" blank":o!=null&&o<me&&t.online?"":" off"}`);const m=n&&Number.isFinite(Number(n.h))?Number(n.h):null;m!=null&&e.hpH!=null&&m<e.hpH&&t.online&&(e.hitFlip=!e.hitFlip,c(e.vitals[0].fill,`dfparty-fill ${e.hitFlip?"hit":"hit2"}`));const s=t.online?fe(e.hpH,n):0;s>0&&ne(e,s),e.hpH=m,ae(e,t.online?n?.fx:null),e.hpPct=o;const l=n?_e(n):null;l!==e.faceKey?(e.faceKey=l,e.drawn=null,c(e.facebox,"dfparty-face"),l&&Ae(e,l,n)):l&&!e.drawn&&C.get(l)&&L(e,l,C.get(l))},Te=()=>{const e=q();if(e!==_){_=e;const t=T();for(const[r,n]of y){if(n.away||r.startsWith("companion:"))continue;const i=a.party?.members?.find(o=>o.acct===r)?.p??null;c(n.where,`dfparty-where${i&&!ue(i,t)?"":" off"}`)}}for(const t of y.values())t.away&&w(t.where,pe(!1,t.away.seen,a.now()))},Ce=(e,t)=>{c(e.node,"dfparty-card mate");const r=String(t.name??"");e.name.textContent!==r&&(w(e.name,r),e.name.setAttribute("title",r)),c(e.lead,"dfparty-lead off"),w(e.where,String(t.role??"")),c(e.where,`dfparty-where${t.role?"":" off"}`);const n=Number(t.h),i=Number(t.hm),o=Number.isFinite(n)&&Number.isFinite(i)&&i>0?{h:n,hm:i}:null;V(e.vitals[0].fill,`${o?D(o.h,o.hm):0}%`),w(e.vitals[0].num,o?ye(o.h,o.hm):F),w(e.hp,e.vitals[0].num.textContent);const m=o?D(o.h,o.hm):null;c(e.hp,`dfparty-hp${m!=null&&m<me?"":" off"}`),o&&e.hmH!=null&&o.hm!==e.hmH&&(e.hpH=null),e.hmH=o?o.hm:null,o&&e.hpH!=null&&o.h<e.hpH&&(e.hitFlip=!e.hitFlip,c(e.vitals[0].fill,`dfparty-fill ${e.hitFlip?"hit":"hit2"}`));const s=o?fe(e.hpH,o):0;s>0&&ne(e,s),e.hpH=o?o.h:null,ae(e,t.fx),e.hpPct=m;const l=(String(t.role??t.name??"?").trim()[0]??"?").toUpperCase();e.facemark&&e.facemark.textContent!==l&&(e.facemark.textContent=l)},K=()=>{_=q();const e=a?.others?.()??[],t=a?.party?.leader??null,r=Q();N=r.map(xe).join("#"),X=e.length>0||r.length>0,w(G,a?.party?`${a?.party?.members?.length??e.length+1}/${Oe}`:"");const n=new Set([...e.map(s=>s.acct),...r.map(s=>`companion:${s.key}`)]);for(const[s,l]of y)n.has(s)||(l.node.remove?.(),y.delete(s));const i=[];for(const s of e){let l=y.get(s.acct);l||(l=te(),y.set(s.acct,l)),ke(l,s,s.acct===t),i.push(l.node)}const o=[];for(const s of r){const l=`companion:${s.key}`;let f=y.get(l);f||(f=te(),y.set(l,f)),Ce(f,s),o.push(f.node)}const m=(s,l)=>s.children.length===l.length&&l.every((f,g)=>s.children[g]===f);m(S,i)||S.replaceChildren(...i),m(P,o)||P.replaceChildren(...o),J()};return{root:b,list:S,mates:P,setHidden:ee,render({covered:e=!1}={}){if(!R||(ee(e),E))return;const t=Q().map(xe).join("#");if(!a){t!==N&&K();return}if(t!==N){M=a.version,U=a.poseVersion??0,K();return}if(a.version===M&&(a.poseVersion??0)===U){Te();return}M=a.version,U=a.poseVersion??0,K()},setCompanions(e){$=typeof e=="function"?e:null,N=null},cardCount:()=>y.size,cardFor:e=>y.get(e)??null,destroy(){R&&(R=!1,y.clear(),b.remove?.())}}}export{Ye as COMMON_FACES_FILE,De as FACE_BLANK_MARK,ge as FACE_BOX_H,j as FACE_BOX_W,me as HP_DIGITS_BELOW,He as LEADER_MARK,Me as PARTY_CSS,ce as PARTY_STYLE_ID,Y as PARTY_VITALS,F as VITALS_BLANK,D as barPercent,xe as companionKey,je as createFaceLoader,xt as createPartyPanel,_e as faceKeyOf,Ke as hereKeyOf,Ue as injectPartyStyle,Le as placeText,ye as vitalsText,ue as withMe};
