const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./audio-DNWFK9ua.js","./blocksFile-Dag4clyG.js","./main-BoKDoX6A.js","./textureReplacement-Dm152d-u.js","./soundClips-aeaFc5y0.js","./professionLaw-CaJWT8qI.js","./mapsTables-Brf1I0Fy.js","./gameDate-CQxCCpuA.js","./soundReplacer-oJM0b_Wb.js","./uiClickSound-BRscs2q0.js"])))=>i.map(i=>d[i]);
import{aD as Fr,dq as Mi,eK as Hi,g as Y,az as ao,b5 as Br,aT as Te,as as M,ej as Ma,_ as Ha,aK as re,eL as Ci,aQ as ji,s as Ui}from"./main-BoKDoX6A.js";import{cw as Ca,aw as Pi,cv as Wr,iL as No,iM as Lo,iN as qi,e4 as _i,Y as Gi,_ as Fi,I as Bi,iO as Wi,bj as Ki,iP as Vi,cI as Xi,bl as Kr,iQ as dt,iR as Yi,iS as Qi,iT as Vr}from"./professionLaw-CaJWT8qI.js";import{C as L,a as vt,b as Zi,M as Ji}from"./mapsTables-Brf1I0Fy.js";import{s as es,S as ts,d as as}from"./gameDate-CQxCCpuA.js";import{CURSOR_CSS as os,installPlusCursor as rs}from"./plusCursor-Bct4-Trx.js";const Xr="dfjs.travel.pace2",Me=Object.freeze([5,10,20,30,40,60,100]),xt=100,he=60,kt=Object.freeze(["speed","foe"]),Yr=Object.freeze({speed:he,foe:5}),J=Object.freeze({title:"Travel speed",speed:"Speed",foe:"Near enemies",tip:{speed:`How fast a journey runs (×${xt} on a road only - leaving it drops to ×${he})`,foe:`The slowest the clock runs while enemies are near (×${xt} on a road only)`},roadOnly:`×${xt} only on a road`,slower:"Slower",faster:"Faster"});function oo(e,t=!1){const a=Number(e),o=t?xt:he;if(!Number.isFinite(a))return Me[0];let n=Me[0];for(const i of Me)i<=a&&i<=o&&(n=i);return n}let mt=null,ye=!1;const Do=Object.freeze({road:40,open:20});let Ke=null;const ro=e=>{const t=e?xt:he;return Ke?Math.min(t,e?Ke.road:Ke.open):t};function vg(e){const t=e?{road:Number(e.road)||Do.road,open:Number(e.open)||Do.open}:null;if((t?.road??0)===(Ke?.road??0)&&(t?.open??0)===(Ke?.open??0))return;Ke=t;const a=It();for(const o of[...yt])try{o(a,"zone")}catch{}}const yt=new Set;function ns(){const e={...Yr};let t=null;try{t=Fr()?.getItem(Xr)??null}catch{t=null}if(t)try{const a=JSON.parse(t);for(const o of kt)Number.isFinite(a?.[o])&&(e[o]=oo(a[o],!1))}catch{}return e}function Qr(e,t){mt=e;try{Fr()?.setItem(Xr,JSON.stringify(mt))}catch{}for(const a of[...yt])try{a(mt,t)}catch{}}function It(){return mt??=ns(),mt}const is=()=>ye;function kg(e){const t=ye;if(ye=!!e,t===ye)return;const a=It();if(!ye&&(a.speed>he||a.foe>he)){Qr({speed:Math.min(a.speed,he),foe:Math.min(a.foe,he)},"ground");return}for(const o of[...yt])try{o(a,"ground")}catch{}}function no(e){const t=It()[e]??Yr[e];return Math.min(t,ro(ye))}const yg=e=>Math.min(ro(e),It().speed);function ss(e,t){if(!kt.includes(e))return null;const a=oo(t,ye),o=It();return o[e]!==a&&Qr({...o,[e]:a},e),a}function ls(e,t){if(!kt.includes(e))return null;const a=no(e);let o=Me.indexOf(oo(a,!0));return o=Math.max(0,Math.min(Me.length-1,o+(t>0?1:-1))),ss(e,Me[o])}function ps(e){return no(e)<ro(ye)}function ds(e){return yt.add(e),()=>yt.delete(e)}const cs=Object.freeze([Object.freeze({fromMs:Date.UTC(2026,9,3,17,7,30),minutesPerMs:24/60/1e3})]);function hs(e){const t=e.reduce((s,p,l)=>(s.push(l===0?Ca(p.fromMs):s[l-1]+(p.fromMs-e[l-1].fromMs)*e[l-1].minutesPerMs),s),[]),a=s=>{for(let p=e.length-1;p>=0;p--)if(s>=e[p].fromMs)return p;return-1};return{minutesAt:s=>{const p=a(s);return p<0?Ca(s):t[p]+(s-e[p].fromMs)*e[p].minutesPerMs},wallMsAt:s=>{for(let p=e.length-1;p>=0;p--)if(s>=t[p])return e[p].fromMs+(s-t[p])/e[p].minutesPerMs;return Wr(s)},rateAt:s=>{const p=a(s);return p<0?Pi:e[p].minutesPerMs}}}const io=hs(cs),gs=e=>io.minutesAt(e),$g=e=>io.wallMsAt(e),Tg=e=>io.rateAt(e),Zr=1440,xs=17*60,ms=19*60,bs=20*60,fs=22*60,us=24*60,Jr=1,ws=2e4,en=1e4,so=27262,vs=e=>Math.floor(Ca(e)/Zr),ja=e=>Number.isSafeInteger(e)&&e>=0&&e%Jr===0;function Gt(e){let t=rt.get(e);if(t)return t;const a=e*Zr,o=n=>Math.round(Wr(a+n));return t=Object.freeze({day:e,omenAt:o(xs),riseAt:o(ms),openAt:o(bs),sealAt:o(fs),wrathAt:o(us)}),rt.size>=8&&rt.delete(rt.keys().next().value),rt.set(e,t),t}const rt=new Map;function Eg(e){let t=vs(e);if(ja(t-1)&&e<Gt(t-1).wrathAt+en)return Gt(t-1);for(;!ja(t);)t++;return Gt(t)}function ks(e,t,a=null){if(!e||!Number.isFinite(t))return"quiet";const o=Number.isFinite(a)&&a>=e.openAt?Math.min(a,e.wrathAt):e.wrathAt;return t>=o+en?"gone":t>=o?"collapsing":t>=e.sealAt?"closed":t>=e.openAt?"open":t>=e.riseAt+ws?"sealed":t>=e.riseAt?"rising":t>=e.omenAt?"omen":"quiet"}const Sg=e=>e==="rising"||e==="sealed"||e==="open"||e==="closed"||e==="collapsing",Ig=e=>e!=="quiet"&&e!=="gone";function Og(e,t,a=ks(e,t)){return e?a==="omen"||a==="rising"||a==="sealed"?{to:"open",ms:Math.max(0,e.openAt-t)}:a==="open"?{to:"seal",ms:Math.max(0,e.sealAt-t)}:a==="closed"?{to:"collapse",ms:Math.max(0,e.wrathAt-t)}:null:null}const Ag=e=>e?`${e.to==="open"?"opens":e.to==="seal"?"seals":"collapses"} in ${ys(e.ms)}`:null;function ys(e){const t=Math.max(0,Math.ceil((Number.isFinite(e)?e:0)/1e3));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}const $s=/^gate:(?:0|[1-9]\d{0,8})$/,zg=e=>`gate:${e}`,Rg=e=>$s.test(String(e??"")),Ng=(e,t)=>{const a=Gt(e);return ja(e)&&t>=a.openAt&&t<a.sealAt};function He(...e){let t=2166136261;for(const a of e)t^=a>>>0,t=Math.imul(t,16777619),t^=t>>>15,t=Math.imul(t,739982445),t^=t>>>12;return t>>>0}const lo=(e,t)=>He(so,e,t),$t=(e,t)=>lo(e,t)/4294967296,tn=e=>Math.floor(e/Jr);function Mo(e,t){const a=Array.from({length:t},(o,n)=>n);for(let o=t-1;o>0;o--){const n=He(so,e,11,o)%(o+1),i=a[o];a[o]=a[n],a[n]=i}return a}function Lg(e,t){const a=t?.length??0;if(!a)return null;const o=tn(e);if(a<=2)return t[(o%a+a)%a];const n=Math.floor(o/a),i=o-n*a,s=Mo(n,a);if(s[0]===Mo(n-1,a)[a-1]){const p=s[0];s[0]=s[1],s[1]=p}return t[s[i]]}const Dg=(e,t)=>t?.length?t[lo(e,2)%t.length]:null,Xt=819.2,Ts=200;function Es(e){const t=$t(e,3)*2*Math.PI,a=Math.sqrt($t(e,4))*Ts;return[Xt/2+Math.cos(t)*a,Xt/2+Math.sin(t)*a]}const Mg=e=>$t(e,8)*2*Math.PI,Ss=2,Is=1.2;function Hg(e,t,a,o=Es(e)){const n=t+o[0]/Xt,i=a+1-o[1]/Xt,s=$t(e,6)*2*Math.PI,p=Math.sqrt($t(e,7))*Is;return{cx:n+Math.cos(s)*p,cy:i+Math.sin(s)*p,r:Ss,gx:n,gy:i}}const Ho=Object.freeze([Object.freeze({id:"ruhn",name:"Valkynaz Ruhn",title:"Warden of the Burning Gate"})]),Cg=e=>Ho[lo(e,5)%Ho.length],Os=12,As=13,zs=14,Rs=15;function Rt(e,t,a){const o=Array.from({length:a},(n,i)=>i);for(let n=a-1;n>0;n--){const i=He(so,e,t,n)%(n+1),s=o[n];o[n]=o[i],o[i]=s}return o}const Co=(e,t)=>e.a!==t.a&&!e.t.some(a=>t.t.includes(a));function Ns(){if(Nt)return Nt;const e=No.length,t=Lo.length,a=t+t%2;if(Math.floor(t/2)!==e)throw new Error("gateLaw: the marks need two trials an aspect, or one over");const o=Rt(0,As,t),n=Rt(0,Os,e),s=Rt(0,zs,a-1).map(g=>{const m=[[g,a-1]];for(let b=1;b<a/2;b++)m.push([(g+b)%(a-1),(g-b+a-1)%(a-1)]);return m.filter(b=>b[0]<t&&b[1]<t).map(([b,x])=>[o[b],o[x]].sort((u,T)=>u-T))}),p=[];for(let g=0;g<e;g++)for(const m of s)p.push(m.map((b,x)=>({a:n[(x+g)%e],t:b})));const l=[],c=(g,m)=>{if(g===p.length)return Co(m,l[0][0]);const b=Rt(g,Rs,p[g].length).map(x=>p[g][x]);for(let x=0;x<b.length;x++)if(!(m&&!Co(m,b[x]))){for(let u=b.length-1;u>=0;u--)if(u!==x&&(l[g]=[b[x],...b.filter((T,y)=>y!==x&&y!==u),b[u]],c(g+1,b[u])))return!0}return!1};if(!c(0,null))throw new Error("gateLaw: the marks have no cycle");return Nt=Object.freeze(l.flat().map(g=>Object.freeze([No[g.a].id,...g.t.map(m=>Lo[m].id)]))),Nt}let Nt=null;function jg(e){const t=Ns(),a=tn(e);return t[(a%t.length+t.length)%t.length]}const Ug=({near:e,left:t})=>`Dagon's Breach rises near ${e}. It opens in ${t}.`,Pg=({near:e,boss:t})=>`The Covenant tears Dagon's Breach near ${e} shut. ${t} is cast back into the Deadlands.`,qg=({boss:e,md:t})=>{const{aspect:a,trials:o}=qi(t),n=o.map(s=>s.name),i=n.length>1?`${n.slice(0,-1).join(", ")} and ${n[n.length-1]}`:n[0]??"";return`${e} comes ${a.epithet} tonight${i?`, ${i}`:""}.`},ga=(...e)=>Object.freeze(e),Tt=Object.freeze({daggerfall:Object.freeze({id:"daggerfall",name:"Daggerfall",regions:ga(17,59,58,60,18,42,41,32)}),wayrest:Object.freeze({id:"wayrest",name:"Wayrest",regions:ga(23,33,34,35,36,37,5,38,39,40,57)}),sentinel:Object.freeze({id:"sentinel",name:"Sentinel",regions:ga(20,0,1,11,43,44,45,46,47,48,49,50,51,52,53,54,55,56,61)})}),sa=Object.freeze({19:Object.freeze(["daggerfall","sentinel"]),21:Object.freeze(["daggerfall","wayrest"]),22:Object.freeze(["wayrest","sentinel"])});Object.freeze(Object.keys(sa).map(Number));const Ft=Object.freeze({balfiera:9,orsinium:26,wrothgarian:16}),Ls=Object.freeze(Object.values(Ft)),an=new Map;for(const e of Object.values(Tt))for(const t of e.regions)an.set(t,e.id);const la=e=>an.get(e)??null,po=e=>Number.isInteger(e)&&Object.prototype.hasOwnProperty.call(sa,e),co=e=>Ls.includes(e),Ua=24125,Ds=Object.freeze({tree:1,herb:2,vein:3,boulder:4,dvein:5}),pe=(e,t,a,o)=>Object.freeze({tree:e,herb:t,vein:a,boulder:o}),Ms=Object.freeze({[L.Woodlands]:pe(12,8,4,3),[L.MountainWoods]:pe(10,6,6,4),[L.Mountain]:pe(4,4,12,5),[L.HauntedWoodlands]:pe(8,8,4,3),[L.Swamp]:pe(6,10,2,0),[L.Rainforest]:pe(12,10,2,0),[L.Subtropical]:pe(8,8,4,3),[L.Desert]:pe(0,6,10,5),[L.Desert2]:pe(0,6,10,5)}),Ue=(e,t)=>Ms[e]?.[t]??0,bt=Object.freeze([40,25,15,10,6,4]),R=(...e)=>Object.freeze(e),on=Object.freeze({[L.Woodlands]:Object.freeze([R(9,18,10,11),R(16,17,19,20,23),R(25,26)]),[L.MountainWoods]:Object.freeze([R(14,18,15),R(12),R(22)]),[L.Mountain]:Object.freeze([R(14,8),R(13),R(26)]),[L.HauntedWoodlands]:Object.freeze([R(8,12),R(21,24),R(27)]),[L.Swamp]:Object.freeze([R(12,13,9),R(28),R(24)]),[L.Rainforest]:Object.freeze([R(28,15),R(27,31,10),R(22)]),[L.Subtropical]:Object.freeze([R(29,30,11),R(31,28),R(25)]),[L.Desert]:Object.freeze([R(32,8),R(30,29),R(25)]),[L.Desert2]:Object.freeze([R(32,8),R(30,29),R(25)])}),Hs=3;function Cs(e){let t=null;for(const a of Object.values(on))for(let o=0;o<a.length;o++)a[o].includes(e)&&(t===null||o+1<t)&&(t=o+1);return t}const _g=e=>_i(e,Cs),rn=Object.freeze([10,11]),nn=Object.freeze([19,20,21,22]),sn=Object.freeze([23,24,25,26]),js=Object.freeze([15,16,17]),Us=Object.freeze([...rn,...nn,...sn,...js]);Object.freeze([...rn,...nn,...sn]);const jo=(e,t)=>t!==ts.Winter||!Us.includes(e),Gg=e=>Math.floor(e/864e5),Ps=e=>as(Math.floor(gs(e*864e5))),qs=e=>es(Ps(e)),Uo=(e,t)=>Number.isSafeInteger(e)&&Number.isSafeInteger(t)&&e>=0&&t>=0&&e<Zi&&t<Ji,pa=e=>Number.isSafeInteger(e)&&e>=0&&e<vt.length,_s=({kind:e,x:t,y:a,day:o,slot:n})=>`${e}:${t}:${a}:${o}:${n}`,Gs=({dungeon:e,day:t,slot:a})=>`dvein:${e}:${t}:${a}`,Fs=({day:e,id:t})=>`body:${e}:${t}`,Bs=/^(tree|herb|vein|boulder):(\d{1,3}):(\d{1,3}):(\d{1,6}):(\d{1,2})$/,Ws=/^dvein:(\d{1,7}):(\d{1,6}):(\d{1,2})$/,Ks=/^body:(\d{1,6}):([0-9a-f]{12})$/,Vs=({x:e,y:t,day:a,id:o})=>`haul:${e}:${t}:${a}:${o}`,Xs=/^haul:(\d{1,3}):(\d{1,3}):(\d{1,6}):([0-9a-f]{12})$/,Ys=1048575,ln=e=>Number.isSafeInteger(e)&&e>=0&&e<=Ys;function Fg(e){if(typeof e!="string")return null;const t=Ks.exec(e);if(t)return Fs({day:Number(t[1]),id:t[2]})===e?{kind:"body",day:Number(t[1]),id:t[2]}:null;const a=Xs.exec(e);if(a){const[c,g,m]=[Number(a[1]),Number(a[2]),Number(a[3])];return Uo(c,g)&&Vs({x:c,y:g,day:m,id:a[4]})===e?{kind:"haul",x:c,y:g,day:m,id:a[4]}:null}const o=Ws.exec(e);if(o){const[c,g,m]=[Number(o[1]),Number(o[2]),Number(o[3])];return ln(c)&&Gs({dungeon:c,day:g,slot:m})===e?{kind:"dvein",dungeon:c,day:g,slot:m}:null}const n=Bs.exec(e);if(!n)return null;const[i,s,p,l]=[Number(n[2]),Number(n[3]),Number(n[4]),Number(n[5])];return Uo(i,s)&&_s({kind:n[1],x:i,y:s,day:p,slot:l})===e?{kind:n[1],x:i,y:s,day:p,slot:l}:null}const pn=(e,t,a,o,n,i)=>He(Ua,t,a,o,Ds[e]??0,n,i),_=(e,t,a,o,n,i)=>pn(e,t,a,o,n,i)/4294967296;function Qs(e,t){const a=bt.slice(0,t),o=a.reduce((i,s)=>i+s,0);let n=e*o;for(let i=0;i<a.length;i++){if(n<a[i])return i+1;n-=a[i]}return a.length}function Zs({x:e,y:t,day:a,slot:o,climate:n,confirmed:i=!1,seasonalEye:s=!1}){const p=on[n];if(!p)return null;const l=qs(a),c=.04+.92*_("herb",e,t,a,o,1),g=.04+.92*_("herb",e,t,a,o,2),m=Qs(_("herb",e,t,a,o,3),i?Hs:2),b=p[m-1],x=b[Math.floor(_("herb",e,t,a,o,4)*b.length)];if(jo(x,l))return{slot:o,u:c,v:g,tier:m,herb:x,offSeason:!1};if(s)return{slot:o,u:c,v:g,tier:m,herb:x,offSeason:!0};for(let u=m;u>=1;u--){const T=p[u-1].filter(y=>jo(y,l));if(T.length)return{slot:o,u:c,v:g,tier:u,herb:T[Math.floor(_("herb",e,t,a,o,5)*T.length)],offSeason:!1}}return null}function Bg({x:e,y:t,day:a,climate:o,confirmed:n=!1,seasonalEye:i=!1}){const s=Ue(o,"herb"),p=[];for(let l=0;l<s;l++){const c=Zs({x:e,y:t,day:a,slot:l,climate:o,confirmed:n,seasonalEye:i});c&&p.push(c)}return p}const dn=Object.freeze({[L.Woodlands]:R("metal:iron","metal:copper","metal:tin","metal:lodestone"),[L.MountainWoods]:R("metal:iron","metal:copper","metal:silver","metal:lead"),[L.Mountain]:R("metal:iron","metal:silver","metal:gold","metal:platinum","ore:mithril"),[L.HauntedWoodlands]:R("metal:iron","metal:lead","metal:mercury"),[L.Swamp]:R("metal:iron","metal:mercury","metal:sulphur"),[L.Rainforest]:R("metal:iron","metal:copper","metal:gold"),[L.Subtropical]:R("metal:iron","metal:copper","metal:tin","metal:sulphur"),[L.Desert]:R("metal:iron","metal:lead","metal:sulphur","metal:gold","ore:ebony"),[L.Desert2]:R("metal:iron","metal:lead","metal:sulphur","metal:gold","ore:ebony")}),Po=R("metal:silver","metal:gold","ore:dwarven","metal:platinum","ore:adamantium"),Js=Object.freeze([L.Woodlands,L.HauntedWoodlands]),el=e=>Js.includes(e)?[...Po,"ore:moonstone"]:[...Po],cn=3,tl=4;function hn(e){const t=la(e);return t==="daggerfall"?{ore:"ore:moonstone",slots:2}:t==="wayrest"?{ore:"ore:mithril",slots:1}:t==="sentinel"?{ore:"ore:ebony",slots:1}:e===Ft.orsinium||e===Ft.wrothgarian?{ore:"ore:orichalcum",slots:1}:e===Ft.balfiera?{ore:"ore:adamantium",slots:1}:null}const Et=e=>Gi(e)?.tier??0;function ho(e,t,a,o=7){const n=[...new Set(e.map(Et))].filter(c=>c>=1&&c<=o).sort((c,g)=>c-g);if(!n.length)return null;const i=n.map(c=>bt[c-1]??bt[bt.length-1]);let s=t*i.reduce((c,g)=>c+g,0),p=n[n.length-1];for(let c=0;c<n.length;c++){if(s<i[c]){p=n[c];break}s-=i[c]}const l=e.filter(c=>Et(c)===p);return{tier:p,material:l[Math.min(l.length-1,Math.floor(a*l.length))]}}function gn({climate:e,region:t=null,confirmed:a=!1}){if(!dn[e])return 0;const o=a&&t!==null?hn(t):null;return Ue(e,"vein")+(o?.slots??0)}function al({x:e,y:t,day:a,slot:o,climate:n,region:i=null,confirmed:s=!1}){const p=dn[n];if(!p||!Number.isSafeInteger(o)||o<0||o>=gn({climate:n,region:i,confirmed:s}))return null;const l=.04+.92*_("vein",e,t,a,o,1),c=.04+.92*_("vein",e,t,a,o,2);if(o>=Ue(n,"vein")){const m=hn(i);return{slot:o,u:l,v:c,tier:Et(m.ore),material:m.ore,signature:!0}}const g=ho(p,_("vein",e,t,a,o,3),_("vein",e,t,a,o,4),s?7:cn);return g?{slot:o,u:l,v:c,tier:g.tier,material:g.material,signature:!1}:null}function Wg(e){const t=[];for(let a=0;a<gn(e);a++){const o=al({...e,slot:a});o&&t.push(o)}return t}function ol({x:e,y:t,day:a,slot:o,climate:n}){return o>=Ue(n,"boulder")?null:{slot:o,u:.04+.92*_("boulder",e,t,a,o,1),v:.04+.92*_("boulder",e,t,a,o,2),tier:1,material:"stone:rough"}}function Kg(e){const t=[];for(let a=0;a<Ue(e.climate,"boulder");a++){const o=ol({...e,slot:a});o&&t.push(o)}return t}const xn=(e,t)=>1+pn("dvein",e,0,t,0,0)%tl;function rl({dungeon:e,day:t,slot:a,climate:o,confirmed:n=!1}){if(!ln(e)||a>=xn(e,t))return null;const i=el(o),s=ho(i,_("dvein",e,0,t,a,3),_("dvein",e,0,t,a,4),n?7:cn);return s?{slot:a,tier:s.tier,material:s.material,marker:_("dvein",e,0,t,a,1),bearing:2*Math.PI*_("dvein",e,0,t,a,2)}:null}function Vg(e){const t=[];for(let a=0;a<xn(e.dungeon,e.day);a++){const o=rl({...e,slot:a});o&&t.push(o)}return t}const nl=Object.freeze({[L.Woodlands]:R("log:oak","log:cherry"),[L.MountainWoods]:R("log:pine","log:oak"),[L.Mountain]:R("log:pine"),[L.HauntedWoodlands]:R("log:oak","log:cherry"),[L.Swamp]:R("log:oak"),[L.Rainforest]:R("log:teak","log:mahogany"),[L.Subtropical]:R("log:cherry","log:teak")}),il=Object.freeze({[L.Rainforest]:"log:ironwood",[L.HauntedWoodlands]:"log:ghostwood"}),sl=1/20,ll="log:pine",pl=bt[0]/100,dl=e=>!!e&&!e.some(t=>Et(t)===1);function cl({x:e,y:t,day:a,slot:o,climate:n,confirmed:i=!1}){const s=nl[n];if(!s||!Number.isSafeInteger(o)||o<0||o>=Ue(n,"tree"))return null;const p=.04+.92*_("tree",e,t,a,o,1),l=.04+.92*_("tree",e,t,a,o,2),c=il[n];if(i&&c&&_("tree",e,t,a,o,5)<sl)return{slot:o,u:p,v:l,tier:Et(c),material:c,rare:!0};if(dl(s)&&_("tree",e,t,a,o,6)<pl)return{slot:o,u:p,v:l,tier:1,material:ll,rare:!1};const g=ho(s,_("tree",e,t,a,o,3),_("tree",e,t,a,o,4),i?7:2);return g?{slot:o,u:p,v:l,tier:g.tier,material:g.material,rare:!1}:null}function Xg(e){const t=[];for(let a=0;a<Ue(e.climate,"tree");a++){const o=cl({...e,slot:a});o&&t.push(o)}return t}Object.freeze({[L.Woodlands]:R("gem:amber"),[L.Rainforest]:R("gem:jade"),[L.Desert]:R("gem:turquoise"),[L.Desert2]:R("gem:turquoise"),[L.Swamp]:R("gem:malachite"),[L.Mountain]:R("gem:ruby","gem:sapphire","gem:emerald")});const Yg=31,Qg=2,hl=24,Zg=10,qo=6;function Jg(e,t,a,o){const n=[];for(let i=0;i<hl;i++)n.push({u:He(Ua,e,t,a,qo,o,2*i)/4294967296,v:He(Ua,e,t,a,qo,o,2*i+1)/4294967296});return n}const ex=Object.freeze({ageS:7*86400,confirm:3,dispute:2}),tx=(e,t)=>`${e},${t}`,ax=e=>e?.state==="confirmed"||e?.state==="disputed",gl="1.2",xl="LordSquacquerone",ml="https://www.nexusmods.com/daggerfallunity/mods/1222",bl=["StreamingAssets/Fonts/FONT0003-SDF.ttf","StreamingAssets/Fonts/FONT0002-SDF.ttf","StreamingAssets/Textures/cancelbuttonbackgroundcolor.png","StreamingAssets/Textures/CifRci/Buttons.rci_0-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_1-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_10-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_11-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_12-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_13-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_14-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_15-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_16-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_17-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_18-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_19-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_2-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_20-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_21-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_22-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_23-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_24-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_25-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_26-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_27-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_28-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_29-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_3-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_30-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_31-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_32-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_33-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_34-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_35-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_36-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_37-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_4-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_5-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_6-0.png","StreamingAssets/Textures/CifRci/BUTTONS.RCI_7-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_8-0.png","StreamingAssets/Textures/CifRci/Buttons.rci_9-0.png","StreamingAssets/Textures/deletesavebuttonbackgroundcolor.png","StreamingAssets/Textures/Img/AMAP00I0.IMG.png","StreamingAssets/Textures/Img/AMAP01I0.IMG.png","StreamingAssets/Textures/Img/BANK00I0.IMG.png","StreamingAssets/Textures/Img/BANK01I0.IMG.png","StreamingAssets/Textures/Img/BANK01I1.IMG.png","StreamingAssets/Textures/Img/BANK01I2.IMG.png","StreamingAssets/Textures/Img/BIOG00I0.IMG.png","StreamingAssets/Textures/Img/BOOK00I0.IMG.png","StreamingAssets/Textures/Img/BUTN01I0.IMG.png","StreamingAssets/Textures/Img/BUTN02I0.IMG.png","StreamingAssets/Textures/Img/CHAR00I0.IMG.png","StreamingAssets/Textures/Img/CHAR01I0.IMG.png","StreamingAssets/Textures/Img/CHAR02I0.IMG.png","StreamingAssets/Textures/Img/CHAR02I1.IMG.png","StreamingAssets/Textures/Img/CHAR03I0.IMG.png","StreamingAssets/Textures/Img/CHAR03I1.IMG.png","StreamingAssets/Textures/Img/CHAR04I0.IMG.png","StreamingAssets/Textures/Img/CHAR05I0.IMG.png","StreamingAssets/Textures/Img/CHAR05I1.IMG.png","StreamingAssets/Textures/Img/COMPASS.IMG.png","StreamingAssets/Textures/Img/COMPBOX.IMG.png","StreamingAssets/Textures/Img/CORT01I0.IMG.png","StreamingAssets/Textures/Img/CUST00I0.IMG.png","StreamingAssets/Textures/Img/CUST01I0.IMG.png","StreamingAssets/Textures/Img/CUST02I0.IMG.png","StreamingAssets/Textures/Img/CUST03I0.IMG.png","StreamingAssets/Textures/Img/DAED00I0.IMG.png","StreamingAssets/Textures/Img/DIE_00I0.IMG.png","StreamingAssets/Textures/Img/GILD00I0.IMG.png","StreamingAssets/Textures/Img/GILD01I0.IMG.png","StreamingAssets/Textures/Img/GNRC00I0.IMG.png","StreamingAssets/Textures/Img/GNRC01I0.IMG.png","StreamingAssets/Textures/Img/INFO00I0.IMG.png","StreamingAssets/Textures/Img/INFO01I0.IMG.png","StreamingAssets/Textures/Img/INVE00I0.IMG.png","StreamingAssets/Textures/Img/INVE01I0.IMG.png","StreamingAssets/Textures/Img/INVE02I0.IMG.png","StreamingAssets/Textures/Img/INVE05I0.IMG.png","StreamingAssets/Textures/Img/INVE06I0.IMG.png","StreamingAssets/Textures/Img/INVE07I0.IMG.png","StreamingAssets/Textures/Img/INVE08I0.IMG.png","StreamingAssets/Textures/Img/INVE09I0.IMG.png","StreamingAssets/Textures/Img/INVE10I0.IMG.png","StreamingAssets/Textures/Img/INVE11I0.IMG.png","StreamingAssets/Textures/Img/INVE12I0.IMG.png","StreamingAssets/Textures/Img/INVE13I0.IMG.png","StreamingAssets/Textures/Img/INVE14I0.IMG.png","StreamingAssets/Textures/Img/INVE15I0.IMG.png","StreamingAssets/Textures/Img/ITEM00I0.IMG.png","StreamingAssets/Textures/Img/ITEM01I0.IMG.png","StreamingAssets/Textures/Img/LAMP00I0.IMG.png","StreamingAssets/Textures/Img/LGBK00I0.IMG.png","StreamingAssets/Textures/Img/MAP100I0.IMG.png","StreamingAssets/Textures/Img/MASK00I0.IMG.png","StreamingAssets/Textures/Img/MASK01I0.IMG.png","StreamingAssets/Textures/Img/MASK04I0.IMG.png","StreamingAssets/Textures/Img/MASK05I0.IMG.png","StreamingAssets/Textures/Img/MBRD00I0.IMG.png","StreamingAssets/Textures/Img/MOVE00I0.IMG.png","StreamingAssets/Textures/Img/MOVE01I0.IMG.png","StreamingAssets/Textures/Img/OPTN00I0.IMG.png","StreamingAssets/Textures/Img/PICK00I0.IMG.png","StreamingAssets/Textures/Img/PICK03I0.IMG.png","StreamingAssets/Textures/Img/PRIS00I0.IMG.png","StreamingAssets/Textures/Img/REPR01I0.IMG.png","StreamingAssets/Textures/Img/REST00I0.IMG.png","StreamingAssets/Textures/Img/REST01I0.IMG.png","StreamingAssets/Textures/Img/REST02I0.IMG.png","StreamingAssets/Textures/Img/SCBG00I0.IMG.png","StreamingAssets/Textures/Img/SCBG01I0.IMG.png","StreamingAssets/Textures/Img/SCBG02I0.IMG.png","StreamingAssets/Textures/Img/SCBG03I0.IMG.png","StreamingAssets/Textures/Img/SCBG04I0.IMG.png","StreamingAssets/Textures/Img/SCBG05I0.IMG.png","StreamingAssets/Textures/Img/SCBG06I0.IMG.png","StreamingAssets/Textures/Img/SCBG07I0.IMG.png","StreamingAssets/Textures/Img/SCBG08I0.IMG.png","StreamingAssets/Textures/Img/SHOP00I0.IMG.png","StreamingAssets/Textures/Img/SPBK00I0.IMG.png","StreamingAssets/Textures/Img/SPBK01I0.IMG.png","StreamingAssets/Textures/Img/TALK01I0.IMG.png","StreamingAssets/Textures/Img/TALK02I0.IMG.png","StreamingAssets/Textures/Img/TALK03I0.IMG.png","StreamingAssets/Textures/Img/TELE00I0.IMG.png","StreamingAssets/Textures/Img/TMAP00I0.IMG.png","StreamingAssets/Textures/Img/TMPL00I0.IMG.png","StreamingAssets/Textures/Img/TOWN00I0.IMG.png","StreamingAssets/Textures/Img/TRAV0I00.IMG.png","StreamingAssets/Textures/Img/TRAV0I04.IMG.png","StreamingAssets/Textures/Img/TVRN00I0.IMG.png","StreamingAssets/Textures/mainpanelbackgroundcolor.png","StreamingAssets/Textures/namepanelbackgroundcolor.png","StreamingAssets/Textures/renameSaveButtonBackgroundColor.png","StreamingAssets/Textures/savebuttonbackgroundcolor.png","StreamingAssets/Textures/switchcharbuttonbackgroundcolor.png","StreamingAssets/Textures/switchclassicbuttonbackgroundcolor.png","StreamingAssets/Textures/Img/MAIN03I0.IMG.png","StreamingAssets/Textures/Img/MAIN04I0.IMG.png","StreamingAssets/Textures/Img/MAIN05I0.IMG.png"],Lt={ModVersion:gl,ModAuthor:xl,Source:ml,Files:bl},Bt="none",go=Object.freeze({grimoire:Object.freeze({id:"grimoire",title:"GrimoireUI",version:Lt.ModVersion,author:Lt.ModAuthor,source:Lt.Source,dir:"art/grimoire-ui",vendor:"grimoire-ui",files:Object.freeze([...Lt.Files])})}),xo=e=>e===Bt||Object.hasOwn(go,e)?e:null;function fl(e=globalThis.location?.search??""){return xo(Br("uipack",e))}function da(e){if(Mi(e)!=="classic")return null;const a=fl(e)??(Hi(e)?Bt:xo(Y("uiPack"))??Bt);return a===Bt?null:go[a]}function ox(e){return xo(e)?Te("uiPack",e):!1}const ul=e=>e.replace(/^StreamingAssets\/Textures\//,"").replace(/^StreamingAssets\//,""),xa=new WeakMap;function ca(e){if(xa.has(e))return xa.get(e);const t=new Map,a=new Map,o=new Map,n=new Map;for(const s of e.files){const p=ul(s);let l;(l=/^Img\/(.+)\.png$/i.exec(p))?t.set(l[1].toUpperCase(),p):(l=/^CifRci\/(.+)\.png$/i.exec(p))?a.set(l[1].toUpperCase(),p):(l=/^Fonts\/(FONT\d{4})-SDF\.(ttf|otf)$/i.exec(p))?n.set(`${l[1].toUpperCase()}.FNT`,p):(l=/^([^/]+)\.png$/i.exec(p))&&o.set(l[1].toLowerCase(),p)}const i=Object.freeze({img:t,cifRci:a,colours:o,fonts:n});return xa.set(e,i),i}const tt=(e,t,a=ao??globalThis.document?.baseURI??"http://localhost/")=>new URL(`${e.dir}/${t.split("/").map(encodeURIComponent).join("/")}`,a).href;function rx(e,t){const a=da(t);if(!a)return null;const o=ca(a).img.get(String(e).toUpperCase());return o?tt(a,o):null}function nx(e,t,a=0,o){const n=da(o);if(!n)return null;const i=ca(n).cifRci.get(`${String(e).toUpperCase()}_${t}-${a}`);return i?tt(n,i):null}function ix(e,t){const a=da(t);if(!a)return null;const o=ca(a).colours.get(String(e).toLowerCase());return o?tt(a,o):null}function sx(e,t){const a=da(t);if(!a)return null;const o=ca(a).fonts.get(`${String(e).toUpperCase().replace(/\.FNT$/,"")}.FNT`);return o?tt(a,o):null}let wl=async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`${e}: ${t.status}`);return new Uint8Array(await t.arrayBuffer())};const lx=e=>wl(e),mn=-100,bn=100,fn=Object.freeze([0,10,20,30,40,50,60,70,80,90]),P=Object.freeze({FightersGuild:41,MagesGuild:40,ThievesGuild:42,DarkBrotherhood:108}),ae=Object.freeze({Akatosh:26,Arkay:21,Dibella:29,Julianos:27,Kynareth:35,Mara:24,Stendarr:33,Zenithar:22}),$e=Object.freeze({Horn:411,Dragon:368,Flame:410,Hawk:417,Owl:413,Rose:409,Wheel:415,Candle:408,Raven:414,Scarab:416}),vl=1e7,px=10,kl=Object.freeze({gate:Object.freeze({amount:50}),raid:Object.freeze({amount:30}),writ:Object.freeze({perDay:3}),deed:Object.freeze({amount:25,perDay:4,members:3,tenureS:7*86400}),motherlode:Object.freeze({amount:10,perDay:1}),serpent:Object.freeze({amount:40,stood:.5}),gather:Object.freeze({chance:.1,amount:Object.freeze([2,5]),perDay:30}),find:Object.freeze({chance:Object.freeze({corpse:.05,pile:.12,search:.15}),amount:Object.freeze([1,4]),perDay:20})}),dx=Object.freeze({kinds:Object.freeze(["gate","raid","serpent"]),perDay:150}),yl=Object.freeze({goldPerMark:8,perDay:300}),$l=1e6,cx=e=>Math.floor(e/86400),hx=(e,t=$l)=>Number.isSafeInteger(e)&&e>=1&&e<=t,gx=e=>e*yl.goldPerMark,xx=/^[A-Za-z0-9_-]{8,40}$/,Dt=e=>`${Number(e).toLocaleString("en-US")} silver`,Tl=Object.freeze(["corpse","pile","search"]),mx=e=>Tl.includes(e)?kl.find.chance[e]:0,El=29150,un=Object.freeze([Object.freeze({id:"calm",name:"Calm",weight:40}),Object.freeze({id:"harvest",name:"Harvest",weight:10}),Object.freeze({id:"blight",name:"Blight",weight:5}),Object.freeze({id:"plague",name:"Plague",weight:5}),Object.freeze({id:"orcs",name:"Orc Raids",weight:10}),Object.freeze({id:"daedra",name:"Daedric Incursion",weight:10}),Object.freeze({id:"wedding",name:"Royal Wedding",weight:5}),Object.freeze({id:"bandits",name:"Bandit Summer",weight:5}),Object.freeze({id:"storms",name:"Storm Season",weight:5}),Object.freeze({id:"revolt",name:"Tax Revolt",weight:5})]),Sl=new Map(un.map(e=>[e.id,e])),Il=Object.freeze(["daggerfall","wayrest","sentinel","marches","free"]),Ol=e=>Tt[e]?`the Kingdom of ${Tt[e].name}`:e==="marches"?"the Marches":e==="free"?"the Free Lands":null,wn=e=>la(e)??(po(e)?"marches":co(e)?"free":null);function Al(e,t){const a=Il.indexOf(t);if(a<0||!Number.isSafeInteger(e))return"calm";let o=He(El,e,a)%100;for(const n of un){if(o<n.weight)return n.id;o-=n.weight}return"calm"}const bx=(e,t,a)=>a?Al(e,wn(t)):"calm",_o=e=>Sl.get(e)?.name??null,Yt=Object.freeze({harvestYield:1.25,blightYield:.75,plagueWatch:.5,plagueFestival:2,orcsCampInfluence:50,orcsCampsDay:5,orcsInfluenceWeek:250,daedraGates:2,weddingFestival:.5,weddingStanding:3,banditsCourier:2,stormsFish:1.5,stormsSea:1.5,revoltTithe:5,revoltStanding:-3}),Go=Object.freeze({calm:"Nothing stirs.",harvest:"Gathering yields a quarter more.",blight:"Herbs and wood yield a quarter less.",plague:"The Watch counts half, and Festivals cost double.",orcs:"Each World of Daggerfall camp cleared gives your guild 50 influence at its seat in the region (5 a day, 250 a week).",daedra:"Gate kills give double influence and double silver.",wedding:"Festivals cost half, and every held seat gains 3 Standing.",bandits:"Couriers into the land take twice as long.",storms:"Fishing yields half again, and the sea is slow.",revolt:"A Tithe above 5% costs 3 Standing more."});function fx(e,t,a){const o=Ol(wn(e));return!o||!t?null:`The Tide in ${o} this week: ${_o(t)} - ${Go[t][0].toLowerCase()}${Go[t].slice(1)}${a?` Next week: ${_o(a)}.`:""}`}const zl=(...e)=>Object.freeze(e.map(([t,a])=>Object.freeze([t,a]))),U=(e,...t)=>Object.freeze({marks:e,needs:zl(...t)}),vn=Object.freeze([Object.freeze({id:"walls",name:"Walls",where:"any",tiers:Object.freeze([U(1e3,["stone:cut",400],["plank:oak",100]),U(3e3,["stone:cut",800],["ingot:iron",200]),U(8e3,["stone:cut",1600],["ingot:steel",200])])}),Object.freeze({id:"gatehouse",name:"Gatehouse",where:"gate",tiers:Object.freeze([U(2e3,["stone:cut",300],["ingot:iron",200]),U(5e3,["stone:cut",600],["ingot:steel",200]),U(12e3,["stone:cut",1e3],["ingot:mithril",100])])}),Object.freeze({id:"watchtowers",name:"Watchtowers",where:"any",tiers:Object.freeze([U(800,["stone:cut",200],["plank:pine",200]),U(2e3,["stone:cut",400],["ingot:iron",100])])}),Object.freeze({id:"barracks",name:"Barracks",where:"any",tiers:Object.freeze([U(1500,["plank:oak",300],["ingot:iron",100]),U(4e3,["plank:oak",600],["ingot:steel",200]),U(9e3,["plank:teak",800],["ingot:mithril",100])])}),Object.freeze({id:"market",name:"Market Hall",where:"any",tiers:Object.freeze([U(1e3,["plank:oak",200],["stone:cut",100]),U(2500,["plank:cherry",400],["stone:cut",200]),U(6e3,["plank:mahogany",400],["metal:gold",50])])}),Object.freeze({id:"shrine",name:"Shrine",where:"any",tiers:Object.freeze([U(1e3,["stone:cut",100],["metal:silver",20]),U(3e3,["stone:cut",200],["gem:pearl",10])])}),Object.freeze({id:"forge",name:"Forge",where:"any",tiers:Object.freeze([U(1e3,["stone:cut",200],["ingot:iron",100]),U(2500,["stone:cut",300],["ingot:steel",100])])}),Object.freeze({id:"workshop",name:"Workshop",where:"any",tiers:Object.freeze([U(1e3,["plank:oak",200],["ingot:iron",50]),U(2500,["plank:teak",300],["ingot:steel",50])])}),Object.freeze({id:"apothecary",name:"Apothecary",where:"any",tiers:Object.freeze([U(1e3,["stone:cut",100],["plank:oak",100]),U(2500,["stone:cut",200],["gem:pearl",20])])}),Object.freeze({id:"harbour",name:"Harbour",where:"coast",tiers:Object.freeze([U(2e3,["plank:oak",400],["stone:cut",200]),U(5e3,["plank:teak",800],["stone:cut",400])])})]),Rl=new Map(vn.map(e=>[e.id,e])),ux=Object.freeze([...new Set(vn.flatMap(e=>e.tiers.flatMap(t=>t.needs.map(([a])=>a))))].sort()),Ce=e=>typeof e=="string"?Rl.get(e)??null:null,wx=e=>Ce(e)?.tiers.length??0,vx=(e,t)=>Number.isSafeInteger(t)&&t>=1?Ce(e)?.tiers[t-1]??null:null;function kx(e,t){const a=Ce(e);return a?a.where==="gate"?t?.tier==="crown"||t?.tier==="palace"&&Number(t?.walls??0)>=3:a.where==="coast"?!!t?.coastal:!0:!1}const Nl=(e,t)=>(e??[]).map(([a,o])=>[a,Math.max(0,o-Math.max(0,Number(t?.get?.(a)??t?.[a]??0)))]),Ll=3e3,Fo=Object.freeze({vitality:2e4,perTier:.5,blowShare:.1}),Dl=e=>Math.round(Fo.vitality*(1+Fo.perTier*Math.max(0,Math.min(3,Number(e)||0)))),yx=(e,t,a)=>`The Watchtowers of ${e} see ${t} past ${a<=.25?"a quarter":"half"} of our defence.`,Ml=e=>[0,2,4,6][Math.max(0,Math.min(3,Number(e)||0))],Hl=(e,t)=>e+Math.max(0,Math.min(3,Number(t)||0)),Cl=50,kn=e=>Math.max(0,Math.min(2,Number(e)||0)),jl=e=>Cl*kn(e),Ul=Object.freeze({forge:Object.freeze(["smithing"]),workshop:Object.freeze(["carpentry","outfitting","masonry"]),apothecary:Object.freeze(["alchemy","cooking","jewelcrafting"])});function Pl(e,t){let a=0;for(const[o,n]of Object.entries(Ul))n.includes(e)&&(a+=Math.max(0,Number(t?.[o]??0)||0));return a}function $x(e,t,a){const o=t&&e?.holder?.guild?.id===t?Pl(a,e.forts??{}):0;return{steps:o,seat:o>0?e.key??null:null}}const ql=e=>Number(e)>=1;function Tx(e,t,a,o=!1){if(o)return!0;if(!Number.isFinite(e)||!Number.isFinite(t)||typeof a!="function")return!1;for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++)if(a(e+i,t+n))return!0;return!1}const Ex=(e,t)=>!!t&&e?.holder?.guild?.id===t&&ql(e?.forts?.harbour??0),Sx="work:ram",_l=Object.freeze({captainRenown:50,rebels:12,windowMs:2*3600*1e3}),Bo=Object.freeze({walls:e=>`the defenders' wave ${Ll/1e3*e} s faster`,gatehouse:e=>`its vitality ${Dl(e).toLocaleString("en-US")}`,watchtowers:e=>`the holder told when a challenger passes ${e>=2?"a quarter":"half"} of its defence`,barracks:e=>`${Ml(e)} town guards fight for the holder`,market:e=>`the town's boards list ${25*e}% more, the Tithe's cap ${e} ${e===1?"point":"points"} higher`,shrine:e=>`Standing +${kn(e)} a week, +${jl(e)} influence for each gate felled in the region`,forge:e=>`members smithing here ${e===1?"a quality step":`${e} quality steps`} better`,workshop:e=>`members' carpentry, outfitting and masonry here ${e===1?"a quality step":`${e} quality steps`} better`,apothecary:e=>`members' jewellery here ${e===1?"a quality step":`${e} quality steps`} better, their dishes ${e===1?"half again":e===2?"twice":`${(2+e)/2} times`} the XP, their brews +${10*e}% Potent chance`,harbour:()=>"a port for the holder's members"});function Ix(e,t,{nameOf:a=(i,s)=>`${i}`,whenOf:o=i=>new Date(i).toISOString(),seatTier:n=null}={}){const i=Ce(e);if(!i)return"";const s=Math.max(0,Number(t?.tier??0)||0),p=s>0?`${i.name}: tier ${s} - ${Bo[e](s)}.`:e==="gatehouse"&&n==="crown"?`${i.name}: standing - ${Bo.gatehouse(0)}.`:`${i.name}: none raised.`;if(t?.building==null)return p;if(t.standsAt!=null)return`${p} Tier ${t.building} stands ${o(Number(t.standsAt)*1e3)}.`;const l=new Map(t.held??[]),c=Nl(t.needs??[],l).filter(([,g])=>g>0).map(([g,m])=>`${m.toLocaleString("en-US")} ${a(g,m)}`);return`${p} Raising tier ${t.building}: ${c.length?`${c.join(", ")} still wanted`:"every need met"}.`}const Gl="k1",Fl=2*24*3600,Bl=400;new TextEncoder;const Wl=new TextDecoder;function Kl(e){return!(!e||typeof e!="object"||Array.isArray(e)||e.n!==void 0||e.k!==void 0||e.t!==void 0||e.o!==void 0||e.d!==void 0||e.b!==void 0||e.w!==void 0||typeof e.s!="string"||!Bi.test(e.s)||!Number.isSafeInteger(e.x)||e.x<0||e.x>=1e3||!Number.isSafeInteger(e.y)||e.y<0||e.y>=500||!Number.isSafeInteger(e.c)||e.c<0||e.c>4294967295||!Number.isSafeInteger(e.i)||!Number.isSafeInteger(e.e)||e.e<=e.i||e.e-e.i>Fl)}function Ox(e){if(typeof e!="string"||e.length>Bl)return null;const t=e.split(".");if(t.length!==3||t[0]!==Gl)return null;const a=Fi.decode(t[1]);if(!a)return null;let o;try{o=JSON.parse(Wl.decode(a))}catch{return null}return Kl(o)?{...o,signed:t[2].length>0}:null}const ge=e=>Ki.find(t=>t.key===e)?.hex??null,Vl=Object.freeze(["palace","crown"]),Ye=Object.freeze({17:"daggerfall",23:"wayrest",20:"sentinel"}),Ax=86400,Xl=e=>Number.isSafeInteger(e)&&e>=0&&e<=4294967295,Yl=e=>Number.isSafeInteger(e)&&e>=0&&e<=61,Ql=e=>Array.isArray(e)&&e.length===2&&Number.isSafeInteger(e[0])&&Number.isSafeInteger(e[1])&&e[0]>=0&&e[0]<1e3&&e[1]>=0&&e[1]<500,Zl=e=>typeof e=="string"&&e.length>=1&&e.length<=48&&/^[\x20-\x7e]+$/.test(e)&&e.trim()===e;function zx(e){if(!e||typeof e!="object")return null;const{key:t,name:a,region:o,tier:n,pixel:i}=e;return!Xl(t)||!Zl(a)||!Yl(o)||!Vl.includes(n)||!Ql(i)||n==="crown"&&(!Object.prototype.hasOwnProperty.call(Ye,o)||a!==Tt[Ye[o]]?.name)?null:{key:t,name:a,region:o,tier:n,pixel:[i[0],i[1]]}}const ha=e=>Tt[e]?.name??null;function yn(e){return e?.tier==="crown"?`the Crown Charter of ${ha(Ye[e.region])??e.name}`:`the Charter of ${e?.name??"the town"}`}const E=e=>`${/^the /i.test(e.name)?`the ${e.name.slice(4)}`:e.name} <${e.tag}>`,xe=e=>{const t=E(e);return`${t[0].toUpperCase()}${t.slice(1)}`};function Rx(e,t=e?.holder?.guild??null,a=Date.now()){const o=$n(e?.battle,a);if(e.tier==="crown"){const n=ha(Ye[e.region])??e.name;return(t?`${e.name}, capital of the Kingdom of ${n}, held by ${E(t)}.`:`${e.name}, capital of the Kingdom of ${n}. Its Crown Charter is unheld.`)+o}return(t?`${e.name}, held by ${E(t)}.`:`${e.name}. Its Charter is unheld.`)+o}function $n(e,t){return e?.kind!=="siege"||!Number.isFinite(e.startsAt)||e.state==="void"||Number.isFinite(e.endsAt)&&t>=e.endsAt*1e3?"":` A siege is called for ${uo(e.startsAt*1e3)}.`}function Jl(e,t=null){const a=yn(e);return`${a[0].toUpperCase()}${a.slice(1)}: ${t?`held by ${E(t)}`:"unheld"}`}const Mt=ge("ash"),Wo=Object.freeze({daggerfall:ge("azure"),wayrest:ge("crimson"),sentinel:ge("gold")}),ep=ge("vert"),Ht=Object.freeze({daggerfall:"azure",wayrest:"crimson",sentinel:"gold"});function Nx(e){const t=e.tier==="crown"?Wo[Ye[e.region]]??null:null,a=po(e.region)?sa[e.region].map(l=>Wo[l]):co(e.region)?[ep]:null,o=e.holder?.guild?.heraldry??null,n=o?ge(o.field):null,i=o?ge(o.border)??Mt:Mt,s=e.battle??null,p=!e.holder&&s?.kind==="tourney"?[ge(s.guild?.heraldry?.field)??Mt,ge(s.against?.heraldry?.field)??Mt]:null;return{ring:i,crown:t,second:a,fill:n,split:p,siege:s?.kind==="siege"}}const Lx="#d9532b",Dx=e=>e?.holder?.guild?.heraldry??tp(e);function tp(e){if(co(e.region))return null;if(po(e.region)){const[a,o]=sa[e.region];return{field:Ht[a],border:Ht[o],device:null}}const t=la(e.region);return t?{field:Ht[t],border:Ht[t],device:null}:null}const Mx=8,Qe=36e5,mo=7*24*Qe,Tn=Wi+6*24*Qe+18*Qe,ap=2*24*Qe,op=e=>Math.floor((e-Tn)/mo),rp=e=>Tn+e*mo,Hx=e=>e-rp(op(e))>=mo-ap?"reckoning":"muster",np=5,ip=Object.freeze({pledge:Object.freeze([0,1]),tribute:Object.freeze([0])}),Cx=(e,t)=>(ip[t]??[]).includes(e),sp=10,lp=2e3,jx=7*86400,Ux=12,pp=(e,t,a=`${t}s`)=>`${e} ${e===1?t:a}`;function Ko(e){const t=Math.max(0,Math.floor(e)),a=Math.floor(t/86400),o=Math.floor(t%86400/3600),n=Math.floor(t%3600/60);return a>0?`${a}d ${o}h`:o>0?`${o}h ${n}m`:`${n}m`}function Px({phase:e,reckoningAt:t,turningAt:a},o){return e==="reckoning"?`The Reckoning: pledges are locked. The Turning comes Sunday 18:00 UTC, in ${Ko(a-o)}.`:`The Muster: pledges close Friday 18:00 UTC, in ${Ko(t-o)}.`}const qx=(e,t)=>`${t+1}. ${E(e.guild)} - ${e.influence.toLocaleString("en-US")} influence${e.shrine>0?` (its Shrine's ${e.shrine.toLocaleString("en-US")})`:""}`,_x=e=>`No guild has pledged to ${e.name} this week.`;function Gx(e,t,a=()=>null){if(!t)return["Join a guild to fight for a seat."];const o=[],n=t.pledges.find(i=>i.region===e.region);return n?n.held&&n.key===e.key?o.push("Your guild holds this Charter, and is pledged to it."):n.held?o.push(`Your guild holds ${a(n.key)??"another seat"} in this region, and is pledged to it.`):n.key===e.key?o.push(`Your guild is pledged to ${e.name}.`):o.push(`Your guild is pledged to ${a(n.key)??"another seat"} in this region.`):o.push("Your guild has not pledged in this region this week."),t.seasoned?t.bound&&t.bound!==t.guild?o.push("Your account fights for another guild this week."):n?.key===e.key&&o.push(`Your influence here this week: ${t.influence.toLocaleString("en-US")} of ${lp.toLocaleString("en-US")}.`):o.push("You count for your guild after 7 days in it."),o}const Fx=Object.freeze({pledge:e=>`Pledge to ${e.name}`,move:e=>`Move the pledge to ${e.name}`,drop:"Take the pledge down",full:`Your guild has pledged in ${np} regions this week.`}),Bx=e=>e>0?`Tribute: up to ${e.toLocaleString("en-US")} silver more this week, 1 influence per ${sp} silver (the silver is spent).`:"Tribute: no room left this week - it is at most a fifth of your guild's influence here.",Vo=Object.freeze({palace:6e3,crown:3e4}),dp=Object.freeze({palace:8e3,crown:8e4}),Wx=.1,Kx=50,cp=5,En=e=>`week ${e}`;function hp(e,t,a=null){const o=e?.data??{},n=yn(t),i=In(e?.week??0,a);switch(e?.kind){case"claim":return`${i}, ${E(o.guild)} took ${n} with ${Number(o.total??0).toLocaleString("en-US")} influence.`;case"contested":return`${i}, ${n} was Contested between ${E(o.a)} and ${E(o.b)}. A Tourney decides it.`;case"right":return`${i}, ${E(o.guild)} won a Right of Siege against ${E(o.holder)} at ${t.name}.`;case"held":return`${i}, ${E(o.guild)} held ${t.name} unchallenged.`;case"season-end":return`At the end of ${Ee(Number(o.season))??"the Season"}, ${E(o.guild)} held ${t.name}${o.kept?", as it had the whole Season through":""}.`;case"relinquish":return`${i}, ${E(o.guild)} gave up ${n}.`;case"strike":return o.guild?`${i}, ${t.name} was struck from the registry, and ${E(o.guild)}'s Charter with it${Number(o.refund)>0?` - its claim fee of ${Dt(Number(o.refund))} refunded`:""}.`:`${i}, ${t.name} was struck from the registry.`;case"unregistered":return`${i}, ${n} lapsed - ${t.name} is no longer confirmed in the registry.`;case"neglect":return`${i}, ${E(o.guild)} could not pay the upkeep of ${n}. ${t.name} is in Neglect.`;case"late":return`${i}, ${E(o.guild)} paid the upkeep it owed for ${n}.`;case"lapse":return`${i}, ${n} lapsed - ${E(o.guild)} could not pay its upkeep two weeks running.`;case"edict":return`${i}, ${E(o.guild)} proclaimed ${On(o.edict)??"an Edict"} at ${t.name}.`;case"edict-unpaid":return`${i}, ${E(o.guild)} could not pay for the ${ie[o.edict]?.name??"Edict"} it proclaimed at ${t.name}.`;case"battle-moved":return`${i}, the battle for ${t.name} was moved to ${uo(Number(o.at??0)*1e3)}, so that no guild fights twice at once.`;case"battle-void":return`${i}, no hour of the week could hold the battle for ${t.name}; it is void.`;case"siege-taken":return Number.isSafeInteger(o.minutes)&&o.minutes>0?`${i}, ${E(o.guild)} stormed the gates of ${t.name} and took its Charter from ${E(o.from)} after ${Sn(o.minutes)} ${o.minutes===1?"minute":"minutes"}.`:`${i}, ${E(o.guild)} took ${n} by siege from ${E(o.from)}.`;case"siege-held":return`${i}, ${E(o.guild)} held ${t.name} against the siege of ${E(o.against)}${o.throne===1?", though its Throne was reached":""}.${o.throne===0?" The Throne was never reached.":""}`;case"siege-forfeit":return`${i}, ${E(o.against)} never came to the siege of ${t.name}; ${E(o.guild)} holds it by forfeit.`;case"siege-absent":return`${i}, neither side came to the siege of ${t.name}; ${E(o.guild)} keeps it.`;case"tourney-won":return`${i}, ${E(o.guild)} won the Tourney for ${n}.`;case"tourney-unheld":return`${i}, the Tourney for ${t.name} was fought, but neither guild could pay for ${n}.`;case"revolt":return`${i}, ${t.name}'s Standing under ${E(o.guild)} fell to nothing, and the town rose in revolt.`;case"revolt-down":return`${i}, ${t.name} rose against ${E(o.guild)}. The rebel captain fell at the palace door, and the Charter held.`;case"revolt-stood":return`${i}, ${t.name} rose against ${E(o.guild)}, and the rebel captain held the palace door. ${n} lapsed.`;case"siege-void":return o.battle==="tourney"?`${i}, no result of the Tourney for ${t.name} came; it is void, and ${n} stays unheld.`:o.carried?`${i}, no result of the siege of ${t.name} came; it is void, ${E(o.holder)} keeps it for now, and ${E(o.guild)}'s Right of Siege carries to the next week.`:`${i}, no result of the siege of ${t.name} came; it is void, and ${E(o.holder)} keeps it.`;case"siege-voided":return`${i}, ${o.battle==="tourney"?`the Tourney for ${t.name}`:o.battle==="revolt"?`the revolt at ${t.name}`:`the siege of ${t.name}`} was voided by the Moderators${o.restored?`, and ${n} went back to ${E(o.holder)}`:""}.`;case"conscription":return`${i}, the crown's Conscription brought ${E(o.guild)} ${Dt(Number(o.marks??0))} of its kingdom's Tithe.`;case"conscripted":return`${i}, ${E(o.guild)} paid ${Dt(Number(o.marks??0))} of its Tithe to ${E(o.crown)}'s Conscription.`;case"royal-champion":return`${i}, ${o.name||"a contender"} won the Royal Tourney at ${t.name} with ${pp(Number(o.wins??0),"bout")} - Champion of ${ha(o.kingdom)??t.name}.`;case"royal-none":return`${i}, no bout of the Royal Tourney at ${t.name} was won; its prize went home.`;case"fealty-sworn":return`${i}, ${E(o.vassal)} swore fealty to ${E(o.liege)}.`;case"fealty-broken":return`${i}, ${E(o.breaker)} broke the fealty between ${E(o.vassal)} and ${E(o.liege)}.`;case"fealty-tribute":return`${i}, ${E(o.vassal)} paid ${Dt(Number(o.marks??0))} in fealty to ${E(o.liege)}.`;case"fealty-lapsed":return`${i}, the fealty between ${E(o.vassal)} and ${E(o.liege)} lapsed.`;case"fort-begun":return`${i}, ${E(o.guild)} began raising ${t.name}'s ${Ce(o.work)?.name??"works"} to ${Qo(o.work)} ${Yo[o.tier]??"next"} tier.`;case"walls-kept":return`${i}, a Fortifier's work kept ${t.name}'s Walls standing as the seat was taken.`;case"fort-raised":return`${i}, ${t.name}'s ${Ce(o.work)?.name??"works"} stood at ${Qo(o.work)} ${Yo[o.tier]??"next"} tier.`;default:return null}}const Xo=Object.freeze(["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]),gp=Object.freeze(["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]),Yo=Object.freeze({1:"first",2:"second",3:"third"}),Qo=e=>e==="walls"||e==="watchtowers"||!Ce(e)?"their":"its";function Sn(e){return!Number.isSafeInteger(e)||e<0?String(e):e<20?Xo[e]:e<100?gp[Math.floor(e/10)]+(e%10?`-${Xo[e%10]}`:""):e.toLocaleString("en-US")}const xp=Object.freeze(["first","second","third","fourth","fifth","sixth","seventh","eighth"]);function In(e,t=null){const a=Nn(e,t),o=a?xp[e-a.start]:null;return o?`In the ${o} week of ${Ee(a.n)}`:`In ${En(e)}`}const Vx=e=>`The Hall of Records of ${e?.name??"the seat"}`,Xx="Nothing is written here yet.";function Yx(e,t,a=null){const o=[];for(const n of e??[]){const i=hp(n,t,a);if(!i)continue;const s=Nn(Number(n?.week),a),p=s?Ee(s.n):null,l=o.at(-1);l&&l.heading===p?l.lines.push(i):o.push({heading:p,lines:[i]})}return o}function mp(e){const t=Number(e?.standing),a=e?.was;return typeof a=="number"&&Number.isFinite(a)&&Number.isFinite(t)?t-a:null}function bp(e){return e==null?"":`, ${e>0?`up ${e}`:e<0?`down ${0-e}`:"steady"} since the last Turning`}const fp=e=>e?`Held by ${E(e.guild)} since ${En(e.since)}. Standing ${e.standing}${bp(mp(e))}.`:"No guild holds this Charter.";function up(e){return e?e.kind==="revolt"?`The town rises against ${E(e.against)} this week - a Rebel Captain holds the palace door.`:e.kind==="tourney"?`${xe(e.guild)} and ${E(e.against)} meet in a Tourney for the Charter this week.`:`${xe(e.guild)} has won a Right of Siege against ${E(e.against)} this week.`:null}function Qx(e,t=Date.now()){if(!e?.name)return null;const a=e.holder??null,o=[Jl(e,a?.guild??null)];a?.guild&&o.push(fp(a));const n=Ap(e,a);n&&o.push(n);const i=up(e.battle??null);i&&o.push(i);const s=$n(e.battle,t).trim();return s&&o.push(s),{title:e.name,lines:o}}const Zx=Object.freeze({arm:"Give up the Charter",sure:"Press again to give up the Charter"}),Jx=(e,t=null)=>t==null?`To claim it at the Turning: ${Vo[e.tier].toLocaleString("en-US")} influence, and ${dp[e.tier].toLocaleString("en-US")} silver from the guild's treasury.`:`To win a Right of Siege: more than the holder's defence of ${t.toLocaleString("en-US")}, and at least ${Vo[e.tier].toLocaleString("en-US")} influence.`,Zo=e=>Number.isSafeInteger(e)&&e>=1?`, Season ${e}`:"";function wp(e,t,a){if(!Array.isArray(t))return null;const o=a?.(t[0])??null,n=o?ha(Ye[o.region]??la(o.region)):null;switch(e){case"warden":return o?`Warden of ${o.name}`:null;case"protector":return n?`Protector of ${n}`:null;case"crowned":return`Crowned in Season ${t[1]}`;case"keeper":return o?`Keeper of ${o.name}${Zo(t[1])}`:null;case"champion":return n?`Champion of ${n}${Zo(t[1])}`:null;default:return null}}const vp=Object.freeze({palace:10,crown:15});function kp(e,t,a=null){let o=null,n=1/0;for(const i of e){if(i.region!==t)continue;const s=a?(i.pixel[0]-a[0])**2+(i.pixel[1]-a[1])**2:0;(s<n||s===n&&i.key<o.key)&&(o=i,n=s)}return o}const yp=Object.freeze({palace:.1,crown:.15}),$p=80,Tp=.05,Ep=.1;function em(e,t=null){const a=e?.holder;if(!a)return 1;const n=(t!=null&&a.guild?.id===t?(yp[e.tier]??0)+(a.standing>=$p?Tp:0):0)+(a.edict==="market-day"?Ep:0);return Math.max(0,1-n)}const Le=Object.freeze({titheLow:2,titheHigh:-3,unchallenged:cp,gate:2,gateWeekMax:6,noWatch:-5,siegeHeld:15,throneReached:-5,festival:10,neglect:-10,writ:1,writWeekMax:5,paidLate:-5,revoltTo:20,curfew:-2,levy:-2,openGates:3,conscripted:-5,fealtyBroken:-10,wedding:Yt.weddingStanding,taxRevolt:Yt.revoltStanding}),Sp=20,tm=.25,bo=e=>e!=null&&e<Sp,ie=Object.freeze({"market-day":Object.freeze({name:"Market Day",standing:0,cost:null,repeat:!0}),"open-gates":Object.freeze({name:"Open Gates",standing:Le.openGates,cost:null,repeat:!1}),curfew:Object.freeze({name:"Curfew",standing:Le.curfew,cost:null,repeat:!1}),festival:Object.freeze({name:"Festival",standing:Le.festival,cost:Object.freeze({palace:2500,crown:1e4}),repeat:!1}),levy:Object.freeze({name:"Levy",standing:Le.levy,cost:null,repeat:!1}),bounty:Object.freeze({name:"Bounty",standing:0,cost:null,repeat:!1}),conscription:Object.freeze({name:"Conscription",standing:0,cost:null,repeat:!1,crown:!0}),"royal-tourney":Object.freeze({name:"Royal Tourney",standing:0,cost:Object.freeze({crown:5e3}),repeat:!1,crown:!0})}),fo=e=>typeof e=="string"&&Object.hasOwn(ie,e),On=e=>fo(e)?e==="market-day"||e==="open-gates"?ie[e].name:`a ${ie[e].name}`:null,An=e=>{const t=On(e);return t&&t[0].toUpperCase()+t.slice(1)},am=(e,t)=>fo(e)&&(!ie[e].crown||t==="crown"),om=(e,t)=>fo(e)&&(e!==t||ie[e].repeat),Ip=(e,t,a="calm")=>Math.floor((ie[e]?.cost?.[t]??0)*(e==="festival"?a==="plague"?Yt.plagueFestival:a==="wedding"?Yt.weddingFestival:1:1)),rm=20,nm=Object.freeze({attributes:5,gameDays:1}),im=e=>e?.holder?.edict==="festival",sm=Object.freeze([0,1]),lm=100,pm=2,dm=(e,t)=>!!e&&!!t&&e.holder?.guild?.id===t,cm=Object.freeze({where:"The Charter Room",clear:"Too near someone of the court - keep two metres from every person and every quest mark.",room:"The Charter Room is the palace's largest room - set the piece down there."}),hm=Object.freeze({guardLevels:5,crimeFactor:2}),Op=Object.freeze({"market-day":"The town's shops ask a tenth less of everyone.","open-gates":"Every home in the town stands open to all. Standing +3.",curfew:"The guards are stronger at night and every crime costs twice the reputation. Standing -2.",festival:"Music and banners; everyone in the town is Festive, +5 to every attribute for a day. Standing +10.",levy:"A tenth of what is gathered near the town goes to its stockpile. Standing -2.",bounty:"Camps near the town yield double, and the treasury pays 20 silver a camp cleared, from what is set aside.",conscription:"The kingdom's palace seats held by other guilds pay the crown 2% of their week's Tithe, a March's 1%. Standing -5 at every seat that pays.","royal-tourney":"A duel ladder all week at the castle's square, every blow refereed; the week's champion takes the prize and the title Champion of the kingdom for good."});function gm(e,t,a="calm"){const o=ie[e];if(!o)return null;const n=Ip(e,t,a);return`${o.name}: ${Op[e]}${n?` Costs ${n.toLocaleString("en-US")} silver.`:""}`}const zn=e=>Hl(vp[e?.tier]??0,e?.forts?.market??0);function xm(e,t,a=null){const o=kp(e??[],t,a),n=Number(o?.holder?.tithe??0);return o?.holder&&n>0?Math.min(Math.trunc(n),zn(o)):0}function mm(e,t){if(!t)return[];const a=[t.next?`Proclaimed for next week: ${ie[t.next]?.name??t.next}.`:"No Edict is proclaimed for next week."];return bo(t.standing)&&a.push(`Unrest: challengers earn a quarter more influence at ${e.name}.`),a.push(`Upkeep at the Turning: ${Number(t.upkeep??0).toLocaleString("en-US")} silver from the treasury (the Tithe at most ${zn(e)}%).`),t.owed>0&&a.push(`Neglect: ${Number(t.owed).toLocaleString("en-US")} silver of upkeep is owed with it, or the Charter lapses.`),a}function Ap(e,t){if(!t)return null;const a=t.edict&&ie[t.edict]?`${An(t.edict)} is proclaimed.`:"No Edict rules this week.";return`Tithe ${t.tithe??0}%. ${a}${bo(t.standing)?` ${e.name} is in Unrest.`:""}`}function bm(e){const t=e?.holder;if(!t)return null;const a=[];return bo(t.standing)&&a.push("The town is in Unrest."),t.edict&&ie[t.edict]&&a.push(`${An(t.edict)} is proclaimed.`),a.length?a.join(" "):null}function fm(e){const t=/^(\d{1,3}),(\d{1,3}):(?:\d{1,10}(?:\.\d{1,3})?|hold)$/.exec(typeof e=="string"?e:"");if(!t)return null;const a=Number(t[1]),o=Number(t[2]);return a<1e3&&o<500?[a,o]:null}const Rn=Object.freeze(["Wednesday","Thursday","Friday","Saturday"]),zp=Object.freeze([16,17,18,19,20,21,22,23,0,1,2]),um=Object.freeze({day:0,hour:20}),Rp=(e,t)=>Number.isSafeInteger(e)&&e>=0&&e<Rn.length&&Number.isSafeInteger(t)&&zp.includes(t),wm=Object.freeze({daggerfall:Object.freeze({day:3,hour:20}),wayrest:Object.freeze({day:3,hour:21}),sentinel:Object.freeze({day:3,hour:22})}),ma=Object.freeze({palace:30*6e4,crown:45*6e4,tourney:20*6e4,revolt:2*3600*1e3}),vm=e=>e.kind==="tourney"||e.kind==="revolt"?ma[e.kind]:ma[e.tier]??ma.palace,Np=2*Qe,Lp=e=>e.kind==="siege"&&e.tier==="crown"?Qe:Np,Dp=10*6e4,km=5e3,Pa=e=>String(e).padStart(2,"0");function uo(e){const t=new Date(e);return`${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getUTCDay()]} at ${Pa(t.getUTCHours())}:${Pa(t.getUTCMinutes())} UTC`}const ym=e=>e&&Rp(e.day,e.hour)?`${Rn[e.day]} ${Pa(e.hour)}:00 UTC${e.hour<16?" (the night after)":""}`:null;function $m(e,t){if(!e)return null;const a=uo(e.startsAt),o=e.moved?" (moved, so that no guild fights twice at once)":"";return e.kind==="tourney"?`${xe(e.attackerGuild)} and ${E(e.defenderGuild)} meet in a Tourney for ${t}. Battle is joined ${a}${o}.`:e.kind==="revolt"?`${t} rises against ${E(e.defenderGuild)}: a Rebel Captain and ${Sn(_l.rebels)} rebels hold its palace door. The revolt begins ${a}${o}: fell the Captain within two hours, or the Charter lapses.`:`${xe(e.attackerGuild)} has won the Right of Siege at ${t}. ${xe(e.defenderGuild)} holds its Charter. Battle is joined ${a}${o}.`}const Tm=(e,t,a,o)=>`${e}: ${t} of ${a} signed${o?` (${o} Sellsword${o===1?"":"s"})`:""}.`,Em=Object.freeze({"battle-none":"No battle is named here this week.","battle-not-side":"Your guild fights on neither side of this battle.","sign-closed":"The rosters closed ten minutes before the battle.","sign-new-member":"Only members of seven days at the Turning may sign.","sign-unbound":"Only members whose account counted for the guild in the week that won the Right may sign.","sign-bound-elsewhere":"Your account fights for another guild this week.","side-full":"This side is full.","sellswords-full":"This side has hired all the Sellswords it may.","sellsword-member":"A Sellsword may belong to neither guild.","sellsword-cooling":"This Sellsword fought for the other side in the last four weeks.","sign-twice":"You are signed already.","window-reckoning":"The window is locked from the Reckoning until the Turning, Sunday 18:00 UTC."}),Sm=e=>e.starts_at+Lp({kind:e.kind,tier:e.tier})/1e3,Im=e=>e.starts_at-Dp/1e3;Object.freeze({held:Le.siegeHeld,forfeit:10});const Om=Object.freeze({"pass-early":"The field opens ten minutes before the battle.","pass-late":"The battle's window has closed.","field-bad":"Your game could not work out this town's field.","field-unsettled":"Waiting for the other side's scouts to agree on the field - try again in a moment.","honours-character":"Honours go to the character who signed for this battle - play them to claim it.","honours-twice":"Your Honours from this battle are claimed already.","battle-void":"That battle is void - at its Turning, or by the Moderators - and its result does not count.","battle-settled":"That battle's week is settled - its Turning has reckoned it, and it can no longer be voided.","heraldry-siege":"Your guild fights a battle for a seat this week. Its heraldry may change after the Turning."});Object.freeze({kingdom:.02,march:.01,standing:Le.conscripted});const Am=Object.freeze({"royal-none":"No Royal Tourney is proclaimed here this week.","royal-over":"That week's Royal Tourney has its champion already.","ring-unsettled":"Waiting for another contender's scouts to agree on the ring - try again in a moment."});function zm(e){if(!e)return[];const t=[`A Royal Tourney is proclaimed: a duel ladder all week at the castle's square, every blow refereed. The week's champion takes ${Number(e.prize??0).toLocaleString("en-US")} silver and the title for good.`],a=(e.ladder??[]).map((o,n)=>`${n+1}. ${o.name||"Someone"} - ${o.wins} won, ${o.losses} lost`);return[...t,...a.length?a:["No bout has been won yet."]]}Object.freeze({tribute:.05,reachShare:.5,breakStanding:Le.fealtyBroken});const ba=8,Rm=Object.freeze({"fealty-unfit":"Fealty is sworn by a guild holding a palace of a crown's kingdom (or a March it claims) to that crown's holder.","fealty-none":"There is no such offer of fealty.","fealty-sworn":"Your guild is sworn already.","fealty-pledged":"One of you is pledged against the other's seat this week.","fealty-pledge":"Your guild may not pledge against its liege's or its vassal's seat.","pact-none":"There is no such Pact.","pact-signed":"A Pact stands between your guilds already.","pact-self":"A guild makes no Pact with itself.","pact-pledged":"One of you is pledged against the other's seat this week.","pact-pledge":"Your guild may not pledge against a seat its Pact partner holds.","guild-unknown":"There is no guild by that tag."}),Nm=Object.freeze({"fealty-accept":"Accept","fealty-withdraw":"Withdraw","fealty-break":"Break fealty","pact-accept":"Sign","pact-withdraw":"Withdraw","pact-break":"Break the Pact","fealty-decline":"Decline","pact-decline":"Decline"});function Lm(e){const t=[];for(const a of e?.fealty??[]){const o=a.asVassal?a.liege:a.vassal;a.state==="sworn"?t.push({text:a.asVassal?`Your guild is sworn to ${E(a.liege)}.`:`${xe(a.vassal)} is sworn to your guild.`,act:"fealty-break",tag:o.tag}):a.state==="breaking"?t.push({text:`The fealty between ${E(a.vassal)} and ${E(a.liege)} ends at the Turning.`,act:null,tag:o.tag}):a.mine?t.push({text:a.asVassal?`Your guild offers to swear fealty to ${E(a.liege)}.`:`Your guild offers to take ${E(a.vassal)} as its vassal.`,act:"fealty-withdraw",tag:o.tag}):t.push({text:a.asVassal?`${xe(a.liege)} offers to take your guild as its vassal.`:`${xe(a.vassal)} offers to swear fealty to your guild.`,act:"fealty-accept",alt:"fealty-decline",tag:o.tag})}for(const a of e?.pacts??[])a.state==="signed"?t.push({text:`A Pact of non-aggression with ${E(a.with)}, until week ${a.until}. Breaking it early is announced to everyone.`,act:"pact-break",tag:a.with.tag}):a.mine?t.push({text:`Your guild offers ${E(a.with)} a Pact of non-aggression.`,act:"pact-withdraw",tag:a.with.tag}):t.push({text:`${xe(a.with)} offers your guild a Pact of non-aggression, until week ${a.until}.`,act:"pact-accept",alt:"pact-decline",tag:a.with.tag});return t}const Ct=4,fa=Object.freeze(["Morning Star","Sun's Dawn","First Seed","Rain's Hand","Second Seed","Midyear","Sun's Height","Last Seed","Hearthfire","Frostfall","Sun's Dusk","Evening Star"]);function Nn(e,t){if(t==null||!Number.isSafeInteger(e)||e<t)return null;if(e<t+Ct)return{n:0,start:t,end:t+Ct};const a=1+Math.floor((e-t-Ct)/ba),o=t+Ct+(a-1)*ba;return{n:a,start:o,end:o+ba}}const Mp=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],Hp=e=>{let t="";for(const[a,o]of Mp)for(;e>=a;)t+=o,e-=a;return t};function Ee(e){if(!Number.isSafeInteger(e)||e<0)return null;if(e===0)return"Season 0";const t=Math.floor((e-1)/fa.length)+1;return`the Season of ${fa[(e-1)%fa.length]}${t>1?` ${Hp(t)}`:""}`}const Dm=(e,t)=>t?`Week ${e-t.start+1} of ${t.end-t.start} of ${Ee(t.n)}.`:null;new Set(Object.values(ae));const Cp=new Set(Object.values($e)),Ot=Object.freeze([...Object.values(P),...Object.values(ae),...Object.values($e)].sort((e,t)=>e-t)),jp=new Set(Ot),oe=e=>typeof e=="number"&&jp.has(e),Up=fn.length-1,Mm=6e4,Hm=10*6e4,Cm=3e4,jm=15*6e4,Um="ChaptersRoll",Ze=e=>typeof e=="number"&&Number.isFinite(e)?Math.trunc(e):0,Ge=(e,t=bn)=>Math.max(mn,Math.min(t,Ze(e)));function Pp(e,t,a=0){if(!e||typeof e!="object"||Array.isArray(e))return!1;const o=Object.keys(e);if(o.length<a||o.length>Ot.length)return!1;for(const n of o){const i=Number(n);if(String(i)!==n||!oe(i))return!1;const s=e[n];if(typeof s!="number"||!Number.isSafeInteger(s)||!t(s))return!1}return!0}const qp=e=>Pp(e,t=>t>=mn&&t<=bn);fn[8];function Pm(e,t){const a={};if(!e||!t)return a;for(const o of Ot){if(!Object.hasOwn(e,o)||!Object.hasOwn(t,o))continue;const n=Ge(e[o])-Ge(t[o]);n!==0&&(a[o]=n)}return a}function qm(e,t,a,o){const n={},i={};for(const s of Ot){const p=Ge(o?.[s]);if(i[s]=p,!e||!Object.hasOwn(e,s))continue;const l=t&&Object.hasOwn(t,s)?Ge(e[s])-Ge(t[s])-Ze(a?.[s]):0;n[s]=Ge(p+l)}return{local:n,base:i}}function _m(e){if(!e||typeof e!="object")return null;const{seq:t,factions:a}=e;if(!Number.isSafeInteger(t)||t<0||!qp(a))return null;const o={};for(const[n,i]of Object.entries(a))o[Number(n)]=i;return{seq:t,factions:o}}function Ln(e){if(typeof e!="string")return null;if(Object.hasOwn(P,e))return P[e];const t=/^(Temple|Order):([A-Za-z]+)$/.exec(e);if(!t)return null;const a=t[1]==="Temple"?ae:$e;return Object.hasOwn(a,t[2])?a[t[2]]:null}function Gm(e,t=!1){if(!e||typeof e!="object")return null;const a=Object.hasOwn(e,"mortal")&&Object.hasOwn(e,"vampire"),o=a?[e.mortal,e.vampire]:[e],n=a?t?e.vampire:e.mortal:e,i=new Map,s=new Set;for(const p of o)if(!(!p||typeof p!="object"))for(const l of Object.values(p)){const c=Ln(l?.guild),g=Ze(l?.rank);c==null||!(g>=0)||(i.set(c,Math.max(i.get(c)??0,Math.min(Up,g))),p===n&&s.add(c))}return[...i].sort((p,l)=>p[0]-l[0]).map(([p,l])=>s.has(p)?{f:p,rank:l}:{f:p,rank:l,d:1})}const Fm=e=>e?e.map(t=>`${t.f}:${t.rank}${t.d===1?"d":""}`).join(","):null,_p=e=>typeof e=="string"&&e?e.replace(/^The /,"the "):"the guild",Bm=e=>`Your standing with ${_p(e)} rises no further today. The rest will follow in the days to come.`;function Gp(e){return e===P.FightersGuild?["metals","wood"]:e===P.MagesGuild?["herbs","metals"]:e===P.ThievesGuild?["metals","herbs","wood","stone"]:e===P.DarkBrotherhood?["herbs"]:Object.values(ae).includes(e)?["herbs"]:Object.values($e).includes(e)?["metals","wood"]:[]}const Fp=Object.freeze([P.ThievesGuild,P.DarkBrotherhood]),ue=e=>Fp.includes(e),Bp=Object.freeze(["gate","raid"]);function Wp(e){return e===P.FightersGuild?["gate","raid"]:e===P.MagesGuild?["gate"]:e===P.DarkBrotherhood?["gate","raid"]:Object.values(ae).includes(e)?["gate"]:Object.values($e).includes(e)?["gate","raid"]:[]}const Kp=Object.freeze({gate:"hold a gate",raid:"defend a raided town"});function Wm(e,t,a=null){const o=Wp(e);if(!o.length)return null;const n=(Array.isArray(t)?t:[]).filter(l=>l?.faction===e),i=n.some(l=>l.member===!0),s=o.map(l=>`${Kp[l]}${i&&n.some(c=>c.kind===l&&c.done===!0)?" (done today)":""}`),p=`standing each time, more for the day's first of ${o.length>1?"each":"it"}`;return`${i?"Duties here":"Its members' duties here"}: ${s.join(", ")} - ${p}${!i||Xp(a)?", and Merit":""}.`}const Vp=Object.freeze({Raven:"Order of the Raven",Dragon:"Knights of the Dragon",Owl:"Knights of the Owl",Candle:"Order of the Candle",Flame:"Knights of the Flame",Horn:"Host of the Horn",Rose:"Knights of the Rose",Wheel:"Knights of the Wheel",Scarab:"Order of the Scarab",Hawk:"Knights of the Hawk"});function Z(e){if(e===P.FightersGuild)return"Fighters Guild";if(e===P.MagesGuild)return"Mages Guild";if(e===P.ThievesGuild)return"Thieves Guild";if(e===P.DarkBrotherhood)return"Dark Brotherhood";const t=Object.keys(ae).find(o=>ae[o]===e);if(t)return`Temple of ${t}`;const a=Object.keys($e).find(o=>$e[o]===e);return a?Vp[a]:null}function Km(e,t=0){const a=[...new Set(e??[])].map(Z).filter(Boolean).map(i=>`the ${i}`);if(!a.length)return null;const o=a.length===1?a[0]:`${a.slice(0,-1).join(", ")} and ${a[a.length-1]}`,n=Number.isSafeInteger(t)&&t>0?`, ${t.toLocaleString("en-US")} Merit to ${a.length===1?"its chapter":"their chapters"} here`:"";return`${o.charAt(0).toUpperCase()}${o.slice(1)} will remember it${n}.`}function Vm(e){if(!e||typeof e!="object")return null;const{key:t,region:a,factions:o}=e;if(!Number.isSafeInteger(t)||t<0||t>4294967295||!pa(a)||!Array.isArray(o)||!o.length||o.length>Ot.length||!o.every(oe))return null;const n=[...new Set(o)].sort((i,s)=>i-s);return n.length!==o.length?null:{key:t,region:a,factions:n}}const Xm=100,Ym=50,Qm=7*86400,Zm=600;Object.freeze(["writ",...Bp]);const Jm=e=>e==="hall"||e==="member",Xp=e=>!!e&&e.from==null&&!e.elsewhere&&Number(e.merit)<Number(e.max);function eb(e,t){const a=Z(e?.faction)??"guild";if(e.from!=null&&e.from>t){const o=Math.ceil((e.from-t)/86400);return`The ${a} counts your Merit after a week in the guild - ${o===1?"tomorrow":`in ${o} days`}`}return e.elsewhere?`Your Merit with the ${a} this week is another chapter's`:`Merit with the ${a} here this week: ${Number(e.merit).toLocaleString("en-US")} of ${Number(e.max).toLocaleString("en-US")}`}const tb=50,ab=0,ob=100,rb=10,nb=3,ib=3,sb=60,Ve=Object.freeze([Object.freeze({band:"failing",name:"Failing",from:0,price:1.25,writs:.5,shelf:-4}),Object.freeze({band:"steady",name:"Steady",from:20,price:1,writs:1,shelf:0}),Object.freeze({band:"thriving",name:"Thriving",from:70,price:.9,writs:1.5,shelf:4}),Object.freeze({band:"ascendant",name:"Ascendant",from:90,price:.8,writs:1.5,shelf:4})]),Yp=2,Qp=2;Ve.find(e=>e.band==="ascendant").from;const Zp=e=>Ve.find(t=>t.band===e)?.name??e;function At(e){if(typeof e!="number"||!Number.isFinite(e))return Ve[1];let t=Ve[0];for(const a of Ve)e>=a.from&&(t=a);return t}function Jp(e){return`The chapter of the ${Z(e?.faction)??"guild"} here is ${At(e?.strength).name} (Strength ${Number(e?.strength)})`}const ed=e=>{const t=Math.round((1-e)*100);return{10:"a tenth cheaper",20:"a fifth cheaper",25:"a quarter cheaper",[-25]:"a quarter dearer",[-10]:"a tenth dearer"}[t]??(t>0?`${t}% cheaper`:`${-t}% dearer`)};function lb(e,t,{shut:a=!1}={}){const o=At(e),n=jn(t),i=n.includes("training")?t===P.MagesGuild||t===ae.Kynareth?"training and spells":"training":null,s=o.band==="failing"?`it loses ${Yp} Strength more each week its members' Merit lifts it by less than ${Qp}`:null,p=o.band==="ascendant"&&oe(t)&&!ue(t)?"whoever holds its Master's chair is its High Master":null,l=b=>`${b.charAt(0).toUpperCase()}${b.slice(1)}`;if(a)return s||p?`${l(s??p)}.`:null;if(o.band==="steady"){const b=[i?"prices":null,n.includes("shelf")?"shelf":null,"chapter writs"].filter(Boolean);return`Its halls keep their usual ${b.length>1?`${b.slice(0,-1).join(", ")} and ${b[b.length-1]}`:b[0]}.`}const g=[i&&o.price!==1?`${i} ${ed(o.price)}`:null,n.includes("shelf")&&o.shelf!==0?o.shelf>0?"a richer shelf":"a poorer shelf":null,o.writs>1?"half again the chapter writs":o.writs<1?"half the chapter writs":null].filter(Boolean).join(", "),m=s??p;return`${l(g)}${m?` - and ${m}`:""}.`}const td=1,ad=20,od=e=>At(e).price,pb=(e,t)=>t===1||!(e>0)?e:Math.max(1,Math.round(e*t));function rd(e,t,a=0){const o=At(t).shelf+a;return!(e>0)||o===0?e:Math.max(td,Math.min(Math.max(ad,e),e+o))}const nd=Object.freeze(["master","officer"]),Jo=Object.freeze({master:1,officer:3}),id=Object.freeze({master:9,officer:8}),qa=7,db=14*86400,cb=7*86400,hb=4;function _a(e){return Array.isArray(e)?e.filter(t=>oe(t?.f)&&pa(t?.region)&&nd.includes(t?.seat)).map(t=>({f:t.f,region:t.region,seat:t.seat})):[]}function gb(e,t,a){const o=_a(e).find(n=>n.f===t&&n.region===a);return o?id[o.seat]:null}function xb(e,t,a){const o=e?.[t];return!o||typeof o!="object"||Ze(o.rank)!==qa||!(typeof a=="number"&&a>Ze(o.rank))?e:{...e,[t]:new Proxy(o,{get:(n,i)=>i==="rank"?a:n[i]})}}function mb(e){if(!e||typeof e!="object")return[];const t=Object.hasOwn(e,"mortal")&&Object.hasOwn(e,"vampire")?[e.mortal,e.vampire]:[e],a=new Set;for(const o of t)if(!(!o||typeof o!="object"))for(const n of Object.values(o)){const i=Ln(n?.guild);i==null||!(Ze(n?.rank)>qa)||(n.rank=qa,a.add(i))}return[...a].sort((o,n)=>o-n)}const Dn=Object.freeze({master:"the Master's chair",officer:"a council chair"}),sd=e=>e.length===1?e[0]:`${e.slice(0,-1).join(", ")} and ${e[e.length-1]}`;function ua(e,t=!0){const a=Dn[e?.seat]??"a chair";return`You ${t?"hold":"no longer hold"} ${a} of the ${Z(e?.f)??"guild"} in ${vt[e?.region]??"its region"}.`}function bb(e,t){const a=_a(t);if(e==null)return a.map(p=>ua(p));const o=_a(e),n=p=>`${p.f}|${p.region}`,i=new Map(o.map(p=>[n(p),p.seat])),s=new Set(a.map(n));return[...a.filter(p=>i.get(n(p))!==p.seat).map(p=>ua(p)),...o.filter(p=>!s.has(n(p))).map(p=>ua(p,!1))]}function fb(e){const t=[...new Set(Array.isArray(e)?e:[])].map(Z).filter(Boolean).map(n=>`the ${n}`);if(!t.length)return null;const a=t.length===1,o=sd(t);return`${o.charAt(0).toUpperCase()}${o.slice(1)} ${a?"keeps":"keep"} ranks 8 and 9 for ${a?"its":"their"} chapters' Masters and councils, won by Merit - your rank there is 7.`}const ub=(e,t)=>e*100+t,ld=e=>typeof e=="number"&&Number.isSafeInteger(e)&&e>=0?{f:Math.floor(e/100),region:e%100}:null,pd=Object.freeze({chaptermaster:"Master",chapterofficer:"Councillor",formermaster:"Former Master",highmaster:"High Master",seasonmaster:"Master"}),dd=e=>Number.isSafeInteger(e)&&e>=1&&e<=9999;function cd(e,t){const a=typeof e=="string"?pd[e]:null,o=Array.isArray(t)?ld(t[0]):null;return!a||!o||!oe(o.f)||ue(o.f)||!pa(o.region)?null:e==="seasonmaster"?dd(t[1])?`${a} of the ${Z(o.f)}, ${vt[o.region]}, Season ${t[1]}`:null:`${a} of the ${Z(o.f)}, ${vt[o.region]}`}function hd(e){const t=Gp(e);return t.length>1?t:[]}const gd=(e,t)=>typeof t=="string"&&hd(e).includes(t);function wb(e,t){return gd(e,t)?`The ${Z(e)} chapter's Master asks for ${t} this week.`:null}function vb(e,t=null){if(e?.kind==="event"||e?.kind==="season")return vd(e);if(e?.kind==="patron")return Sd(e);if(e?.kind!=="seat"||!oe(e?.faction)||ue(e.faction))return null;const a=`the ${Z(e.faction)}`,o=e?.data?.from??null,n=e?.data?.to??null,i=l=>Dn[l];let s=null;if(!o&&i(n)?s=`took ${i(n)} of ${a}`:o==="officer"&&n==="master"?s=`rose to the Master's chair of ${a}`:o==="master"&&n==="officer"?s=`gave the Master's chair of ${a} up, and kept a council chair`:i(o)&&!n&&(s=`lost ${i(o)} of ${a}`),!s)return null;const p=typeof e?.name=="string"&&e.name?e.name:"A member since gone";return`${Number.isSafeInteger(e?.week)?`${In(e.week,t)}, `:""}${p} ${s}.`}const xd=32;function md(e){if(!Array.isArray(e))return[];const t=e.filter(a=>typeof a?.name=="string"&&a.name.trim()).map(a=>({seat:String(a.seat),name:String(a.name).trim().slice(0,xd)}));return[...t.filter(a=>a.seat==="master").slice(0,Jo.master),...t.filter(a=>a.seat==="officer").slice(0,Jo.officer)]}function kb(e,t){return!oe(e)||ue(e)||!pa(t)?null:`The Roll of the ${Z(e)}, ${vt[t]}`}const bd=e=>e.length<2?e.join(""):`${e.slice(0,-1).join(", ")} and ${e[e.length-1]}`;function yb(e,t){const a=md(t?.seats),o=a.find(i=>i.seat==="master"),n=a.filter(i=>i.seat==="officer").map(i=>i.name);return[...Number.isFinite(t?.strength)?[`${Jp({faction:e,strength:t.strength})}.`]:[],o?`${At(t?.strength).band==="ascendant"?"High Master":"Master"} of the chapter: ${o.name}.`:"The Master's chair stands empty.",n.length?`Its council: ${bd(n)}.`:"No council chair is held."]}const fd=Object.freeze([Object.freeze({id:"calm",name:"Calm",weight:30}),Object.freeze({id:"schism",name:"Schism",weight:15}),Object.freeze({id:"succession",name:"Succession",weight:10}),Object.freeze({id:"crackdown",name:"Crackdown",weight:10}),Object.freeze({id:"rivalry",name:"Rivalry",weight:15})]),ud=fd.map(e=>e.id),wd=e=>typeof e=="string"&&ud.includes(e),$b=Object.freeze({schismMasters:2,schismMoved:10,successionAscendant:10,crackdownHidden:2,crackdownCurfew:10,crackdownMerit:1.5,crackdownShut:30,rivalryThriving:10,rivalrySwing:10});Object.freeze([Object.freeze([P.FightersGuild,P.ThievesGuild]),Object.freeze([P.DarkBrotherhood,ae.Arkay]),Object.freeze([P.DarkBrotherhood,ae.Stendarr]),...Object.values($e).map(e=>Object.freeze([P.DarkBrotherhood,e])),Object.freeze([P.MagesGuild,ae.Julianos])]);const wa=e=>oe(e)&&!ue(e)?`the ${Z(e)}`:"its rival in the shadows";function vd(e){if(!oe(e?.faction)||ue(e.faction))return null;const t=Ee(e?.data?.season);if(!t)return null;const a=`the ${Z(e.faction)}`;if(e.kind==="season"){const i=typeof e?.name=="string"&&e.name?e.name:"A member since gone";return`Through ${t}, ${i} held the Master's chair of ${a}.`}const o=e.data,n=o.event==="decline"?o.fell>0?`${a}'s decline cost it ${o.fell} Strength`:`${a} held against its decline`:o.event==="crackdown"?o.shut?`a crackdown shut the halls of ${a} for the Season after`:`${a} weathered a crackdown`:o.event==="rivalry"?o.won===!0?`${a} won its rivalry with ${wa(o.rival)}`:o.won===!1?`${a} lost its rivalry with ${wa(o.rival)}`:`${a}'s rivalry with ${wa(o.rival)} ended even`:o.event==="ascendancy"?`${a} stood ascendant`:o.event==="schism"?Qt(o.doctrine)?`${a}'s schism ended, and it holds to ${Hn[o.doctrine]} for the Season after`:`${a}'s schism ended with neither side carried`:o.event==="succession"&&Number.isSafeInteger(o.heir)?`${a}'s hall took a new head`:null;return n?`At the end of ${t}, ${n}.`:null}const Mn=Object.freeze(["training","shelf","writs"]),Qt=e=>typeof e=="string"&&Mn.includes(e),Hn=Object.freeze({training:"cheaper training",shelf:"a deeper shelf",writs:"more writs"}),Cn=Object.freeze({training:.9,shelf:2,writs:1});function jn(e){return Cp.has(e)||ue(e)?["writs"]:e===P.FightersGuild||e===ae.Kynareth?["training","writs"]:[...Mn]}const kd=3,yd=e=>kd,$d=(e,t)=>Number.isSafeInteger(t)&&t>=0&&t<yd(),Tb=e=>Qt(e)?Hn[e]:null;function wo(e){const t=wd(e?.event)?String(e.event):null;return{event:t,season:Number.isSafeInteger(e?.season)&&e.season>=0?e.season:null,rival:t==="rivalry"&&oe(e?.rival)?e.rival:null,shut:e?.shut===!0,doctrine:Qt(e?.doctrine)?String(e.doctrine):null,sides:t==="schism"&&Array.isArray(e?.sides)&&e.sides.length===2&&e.sides.every(Qt)?[String(e.sides[0]),String(e.sides[1])]:null,heir:t==="succession"&&$d("succession",e?.heir)?e.heir:null}}function Eb(e,t,a=null){if(!e)return 1;const o=wo(e),n=od(e.strength);return(Od(e,a)?Math.min(n,Id):n)*(t==="training"&&o.doctrine==="training"?Cn.training:1)}const Sb=(e,t)=>t?rd(e,t.strength,wo(t).doctrine==="shelf"?Cn.shelf:0):e,Ib=e=>wo(e).shut,Ob="The hall is shut this Season, by the watch's order.",Un=1e3,Td=(e,t=0)=>Number.isSafeInteger(e)&&e>=Un&&e>t&&e<=vl;function Ed(e){return!e||typeof e.id!="string"||!Vi.test(e.id)||typeof e.name!="string"||!e.name.trim()?null:{id:e.id,name:e.name.trim().slice(0,Kr),tag:typeof e.tag=="string"&&Xi.test(e.tag)?e.tag:""}}function Sd(e){if(e?.kind!=="patron"||!oe(e?.faction)||ue(e.faction))return null;const t=Ee(e?.data?.season),a=typeof e?.data?.name=="string"?e.data.name.trim().slice(0,Kr):"";return!t||!a?null:`For ${t}, ${a} took the patronage of the ${Z(e.faction)}.`}const Pn="thriving",Id=Ve.find(e=>e.band===Pn).price,Od=(e,t)=>typeof t=="string"&&t!==""&&e?.patron?.id===t,Ad=Object.freeze([500,1e3,5e3]);function Ab(e){const t=Number.isSafeInteger(e?.marks)&&e.marks>0?e.marks:0;return(t?Ad.map(o=>t+o):[1,2,5].map(o=>o*Un)).filter(o=>Td(o,t))}const qn=e=>`${e.toLocaleString("en-US")} silver`;function zb(e,t=null){const a=Ed(e);if(!a)return null;const o=t!=null&&jn(t).includes("training");return`Its patron this Season: ${a.name}${a.tag?` <${a.tag}>`:""}${o?` - its members pay ${Zp(Pn)}'s prices here, or the band's where better`:""}.`}function Rb(e){const t=Ee(e?.season);return!t||!Number.isSafeInteger(e?.marks)||e.marks<0?null:e.marks>0?`Your guild bids ${qn(e.marks)} for its patronage in ${t}.`:`Your guild has not bid for its patronage in ${t}.`}function Nb(e,t,a){const o=Ee(t);return!oe(e)||ue(e)||!o||!Number.isSafeInteger(a)?null:`Your guild bids ${qn(a)} for the patronage of the ${Z(e)} in ${o}.`}let _n=()=>null;function Lb(e){_n=typeof e=="function"?e:()=>null}function se(e){if(!Array.isArray(e)||e.length<3)return null;const t=a=>Math.max(0,Math.min(255,Math.round(Number(a)*255))).toString(16).padStart(2,"0");return`#${t(e[0])}${t(e[1])}${t(e[2])}`}const zd=Object.freeze({founder:"Founder",developer:"Developer",dungeonmaster:"Dungeon Master",disciple:"Disciple",apostle:"Apostle",hierophant:"Hierophant",shadowfang:"Shadow Fang",penitent:"Penitent",gatebreaker:"Gatebreaker",herald:"Herald",warden:"Warden",protector:"Protector",crowned:"Crowned",keeper:"Keeper",champion:"Champion",grandchampion:"Grand Champion",arenachampion:"Arena Champion",aegis:"Aegis of Oblivion",primarch:"Primarch",crystalfist:"Crystal Fist",hourbreaker:"Hourbreaker",hoursfirst:"Hour's First",iliacchampion:"Iliac Champion",chaptermaster:"Chapter Master",chapterofficer:"Chapter Councillor",formermaster:"Former Master",highmaster:"High Master",seasonmaster:"Season Master"}),Rd=Object.freeze({dagonfire:"Dagon's Fire",oblivionward:"Oblivion Ward",radiance:"Golden Radiance",shadowcloak:"Holo Shadow Cloak",seraphwings:"Seraph Wings",resonance:"Crystal Resonance",turninghour:"The Turning Hour",firsthour:"The First Hour"}),Nd=Object.freeze([.051,.027,.035,1]),Gn=Object.freeze([.827,.098,.235,1]),Ld=Object.freeze([1,.133,.18,1]),Fn=Object.freeze([1,.843,0,1]),Bn=Object.freeze([.529,.808,.922,1]),Dd=Object.freeze([1,.953,.839,1]),Md=Object.freeze([.62,.05,.07,1]),Wn=Object.freeze([1,.42,.08,1]),Hd=Object.freeze([1,.82,.32,1]),Cd=Object.freeze([.439,.188,.878,1]),Kn=Object.freeze([.698,.302,1,1]),jd=Object.freeze([.925,.863,1,1]),Ud=Object.freeze([.302,.102,.58,1]),Pd=Object.freeze([.847,.812,.682,1]),qd=Object.freeze([.639,.286,.643,1]),_d=Object.freeze([.71,.525,.184,1]),Vn=Object.freeze([.91,.753,.376,1]),Gd=Object.freeze([1,.945,.769,1]),Xn=Object.freeze([.902,.553,.443,1]),Fd=Object.freeze([1,.851,.659,1]),Bd=Object.freeze([1,.969,.918,1]),W=Object.freeze({founder:Object.freeze([1,.784,.29,1]),developer:Object.freeze([.886,.271,.227,1]),dungeonmaster:Object.freeze([1,.549,.102,1]),disciple:Object.freeze([.369,.784,.722,1]),apostle:Object.freeze([.616,.486,.941,1]),hierophant:Object.freeze([.91,.451,.749,1]),shadowfang:Gn,penitent:Fn,gatebreaker:Wn,herald:Object.freeze([.31,.49,1,1]),warden:Object.freeze([.769,.549,.29,1]),protector:Object.freeze([.58,.365,.851,1]),crowned:Object.freeze([1,.886,.541,1]),keeper:Object.freeze([.471,.706,.443,1]),champion:Object.freeze([.851,.867,.89,1]),grandchampion:Object.freeze([.804,.498,.196,1]),arenachampion:Object.freeze([.557,.776,.247,1]),aegis:Kn,primarch:Pd,crystalfist:qd,hourbreaker:Vn,hoursfirst:Xn,iliacchampion:Object.freeze([.239,.608,.82,1]),chaptermaster:Object.freeze([.498,.698,.898,1]),chapterofficer:Object.freeze([.659,.769,.867,1]),formermaster:Object.freeze([.604,.627,.659,1]),highmaster:Object.freeze([.365,.612,.925,1]),seasonmaster:Object.freeze([.435,.561,.722,1])}),Zt=Object.freeze({shadowfang:Object.freeze([Nd,Gn]),penitent:Object.freeze([Fn,Dd,Bn]),gatebreaker:Object.freeze([Md,Wn,Hd]),hourbreaker:Object.freeze([_d,Vn,Gd]),hoursfirst:Object.freeze([Xn,Fd,Bd]),aegis:Object.freeze([Cd,Kn,jd])}),Wd=Object.freeze({penitent:Object.freeze([0,0,0,1]),gatebreaker:Object.freeze([0,0,0,1]),aegis:Object.freeze([0,0,0,1]),hoursfirst:Object.freeze([0,0,0,1])}),Yn=Object.freeze({sprout:Object.freeze([.42,.82,.36,1]),dev:W.developer,mod:Object.freeze([.29,.565,.886,1]),dm:W.dungeonmaster,disciple:W.disciple,apostle:W.apostle,hierophant:W.hierophant,shadowfang:W.shadowfang,penitent:W.penitent,herald:W.herald,tower:W.warden,crownDF:Object.freeze([.231,.435,.847,1]),crownWR:Object.freeze([.702,.149,.18,1]),crownSN:Object.freeze([.831,.627,.09,1]),laurel:W.arenachampion,aegis:W.aegis,primarch:W.primarch,crystalfist:W.crystalfist}),Kd=Object.freeze({shadowfang:Object.freeze([...Zt.shadowfang].reverse())}),Vd=.55,Xd=Object.freeze({shadowfang:Object.freeze({path:"M9.3 4.7L11.8 5.5L9.8 6.2Z",rgba:Ld}),penitent:Object.freeze({path:"M8 3.2L8.65 3.85L8 4.5L7.35 3.85ZM7.45 4.5H8.55V6.3H7.45ZM5.9 6.3H10.1V7.3H5.9ZM7.25 7.3H8.75L8 14Z",rgba:Bn}),aegis:Object.freeze({path:"M4.4 12.9Q2.2 13.2 0.3 14.6Q2.8 14.3 5 14.3Q4 15 3 15.8Q5.4 15.3 6.6 14.5L8 15.95L9.4 14.5Q10.6 15.3 13 15.8Q12 15 11 14.3Q13.2 14.3 15.7 14.6Q13.8 13.2 11.6 12.9Q8 14 4.4 12.9Z",rgba:Ud})}),Yd=Object.freeze({sprout:"+",dev:"*",mod:"#",dm:"&",disciple:"~",apostle:"^",hierophant:"!",shadowfang:">",penitent:"|",herald:"<",tower:"=",crownDF:"D",crownWR:"W",crownSN:"S",laurel:"@",aegis:"O",primarch:"t",crystalfist:"\\"}),Qd=Object.freeze({sprout:"M8 15V7M8 9C8 9 5 9 3.5 7.5S2 3 2 3s3 0 4.5 1.5S8 9 8 9zM8 8c0 0 3 0 4.5-1.5S14 2 14 2s-3 0-4.5 1.5S8 8 8 8z",dev:"M5.5 4L1.5 8l4 4M10.5 4l4 4-4 4",mod:"M8 1.5L2.5 3.5v4c0 3.5 2.4 6 5.5 7 3.1-1 5.5-3.5 5.5-7v-4z",dm:"M8 1.5l5.6 3.25v6.5L8 14.5l-5.6-3.25v-6.5zM8 4.5L4.5 10.5h7zM8 1.5v3M2.4 11.25l2.1-.75M13.6 11.25l-2.1-.75",disciple:"M8 1.5c1.6 2.6 3.5 4.1 3.5 6.8a3.5 3.5 0 0 1-7 0C4.5 5.6 6.4 4.1 8 1.5zM8 9.2c.7.9 1.2 1.6 1.2 2.4a1.2 1.2 0 0 1-2.4 0c0-.8.5-1.5 1.2-2.4z",apostle:"M8 4.5C6.5 3.5 4.5 3 1.5 3v9.5c3 0 5 .5 6.5 1.5 1.5-1 3.5-1.5 6.5-1.5V3c-3 0-5 .5-6.5 1.5zM8 4.5V14",hierophant:"M2 13h12M2.5 13L1.8 5l3.6 3L8 2.5 10.6 8l3.6-3-.7 8",shadowfang:"M15.9 6.3Q15.8 5.5 15 5.3L11.4 4.1L9.9 3.3L8.7 0.3L6.9 3.2Q4.9 2.1 2.5 2.4Q4.2 3.2 5 4.5Q2.8 4.8 1 6.3Q3.2 6.6 4.3 7.6Q2.3 8.7 1.1 10.5Q3.2 10 4.8 10.2Q3.6 11.7 3.2 13.8Q5.2 12.2 6.8 11.9Q6.3 13.4 6.5 15.3Q7.8 13.2 9.2 12.7Q9.6 14 10.4 15.2Q10.5 12.9 11.6 12L12.9 11.3L15.1 10.7L14 10.4L13.8 9.4L13.3 10.3L9.8 8.8L11.7 8.3L12.1 9.5L12.6 8.1L14.4 7.6L14.8 8.7L15.2 7.4L15.9 7Z",penitent:"M8 .8L13 8.2L8 15.2L3 8.2Z",herald:"M1.2 3.6V6.4M1.2 5H8.6M8.6 5L14.8 1.8V8.2ZM3 5V13.6L5.2 11.6L7.4 13.6V5",tower:"M3.5 15V6.5H2.5V2.5h2.2v1.8h1.6V2.5h3.4v1.8h1.6V2.5h2.2v4h-1V15h-3.2v-3.2a1.3 1.3 0 0 0-2.6 0V15z",crownDF:"M1.5 12.5h13V14h-13zM1.5 11.5L1 4.5l3.2 3L5.6 2.8 8 6.6l2.4-3.8 1.4 4.7 3.2-3-.5 7z",crownWR:"M1.5 12.5h13V14h-13zM1.5 11.5L1 4.5l3.2 3L5.6 2.8 8 6.6l2.4-3.8 1.4 4.7 3.2-3-.5 7z",crownSN:"M1.5 12.5h13V14h-13zM1.5 11.5L1 4.5l3.2 3L5.6 2.8 8 6.6l2.4-3.8 1.4 4.7 3.2-3-.5 7z",laurel:"M8 14.5C4.5 13 2.5 10 3 5M8 14.5C11.5 13 13.5 10 13 5M3.2 7L1.6 6M3.6 9.6L1.8 9.4M5 12L3.4 12.6M12.8 7L14.4 6M12.4 9.6L14.2 9.4M11 12L12.6 12.6M3 5L2.4 3.2M13 5L13.6 3.2",aegis:"M8 0.9V10.9M3 7.2V12.8M13 7.2V12.8M3 10.2A5 2.6 0 1 0 13 10.2A5 2.6 0 1 0 3 10.2",primarch:"M7.2 0.4H8.8V15.6H7.2ZM6 1.4H10V2.9H6ZM2.9 3.8H13.1V5.4H2.9ZM6 9.6L10 12.9V14.5L6 11.2Z",crystalfist:"M0.77 6.99L0.77 6.26L1.32 5.71L2.05 5.71L10.11 13.77L10.11 14.5L9.56 15.05L8.82 15.05ZM0.77 2.23L0.77 1.5L1.32 0.95L2.05 0.95L14.5 13.4L14.5 14.13L13.95 14.68L13.22 14.68ZM5.89 2.6L5.89 1.87L6.44 1.32L7.18 1.32L15.23 9.37L15.23 10.11L14.68 10.66L13.95 10.66Z"}),Zd=Object.freeze({sprout:!0,dev:!0,mod:!0,dm:!0,disciple:!0,apostle:!0,hierophant:!0,shadowfang:!1,penitent:!0,herald:!0,tower:!1,crownDF:!1,crownWR:!1,crownSN:!1,laurel:!0,aegis:!0,primarch:!1,crystalfist:!1});function Jd(e){const t=e?.title;if(typeof t!="string"||!dt.includes(t))return null;const a=(Yi.includes(t)?wp(t,e?.ts,_n):Qi.includes(t)?cd(t,e?.ts):null)??zd[t];return a?{key:t,text:a,rgba:W[t]??null,gradient:Zt[t]??null,edge:Wd[t]??null}:null}function Db(e,t){if(!Array.isArray(e)||!e.length)return null;if(e.length===1)return e[0];const a=Math.max(0,Math.min(1,Number(t)||0))*(e.length-1),o=Math.min(e.length-2,Math.floor(a)),n=a-o,i=e[o],s=e[o+1];return[0,1,2,3].map(p=>i[p]+(s[p]-i[p])*n)}const ec=e=>`linear-gradient(90deg, ${e.map(se).join(", ")})`,Qn=Object.freeze(["color","backgroundImage","webkitBackgroundClip","backgroundClip","webkitTextFillColor","webkitTextStroke","fontWeight","textShadow","filter"]);function Zn(e){const t=Object.fromEntries(Qn.map(a=>[a,""]));if(!e)return t;if(t.color=se(e.rgba)??"",Array.isArray(e.gradient)&&e.gradient.length>1){const a=se(e.edge??e.rgba)??"";t.backgroundImage=ec(e.gradient),t.webkitBackgroundClip="text",t.backgroundClip="text",t.webkitTextFillColor="transparent",t.fontWeight="500",t.textShadow="none",t.filter=`drop-shadow(1px 0 0 ${a}) drop-shadow(0 1px 0 ${a}) drop-shadow(0 1px 0 #000)`}return t}function Mb(e,t){const a=Zn(t);for(const o of Qn)e.style[o]=a[o];return e}function tc(e){const t=Array.isArray(e?.glyphs)?e.glyphs:[],a=[];for(const o of Vr)t.includes(o)&&a.push({key:o,mark:Yd[o]??"",rgba:Yn[o]??null,path:Qd[o]??"",gradient:Kd[o]??null,detail:Xd[o]??null});return a}const nt=(e,t)=>`${e}-${t}`,er=Object.freeze({dagonfire:"gatebreaker",oblivionward:"aegis",radiance:"primarch",shadowcloak:"shadowfang",seraphwings:"founder",resonance:"crystalfist",turninghour:"hourbreaker",firsthour:"hoursfirst"}),ac={backgroundImage:"background-image",webkitBackgroundClip:"-webkit-background-clip",backgroundClip:"background-clip",webkitTextFillColor:"-webkit-text-fill-color",webkitTextStroke:"-webkit-text-stroke",fontWeight:"font-weight",textShadow:"text-shadow",filter:"filter"},va=e=>{const t=Zn(Jd({title:e}));return Object.entries(ac).filter(([a])=>t[a]).map(([a,o])=>`${o}: ${t[a]};`).join(" ")},oc=()=>[...dt.map(e=>`.card button.acttitle.${nt("tl",e)} { color: ${se(W[e])}; }`),...dt.filter(e=>Zt[e]).map(e=>`.card button.acttitle.${nt("tl",e)} .acttitleword { ${va(e)} }`),...Vr.map(e=>`.card .acctglyph.${nt("gl",e)} .acctglyphart { color: ${se(Yn[e])}; }`),...dt.map(e=>`.card .acctworntitle.${nt("tl",e)} { color: ${se(W[e])}; }`),...dt.filter(e=>Zt[e]).map(e=>`.card .acctworntitle.${nt("tl",e)} .acctwornword { ${va(e)} }`),...Object.keys(Rd).map(e=>`.card button.acttitle.actaura.aura-${e} { color: ${se(W[er[e]])}; }
.card button.acttitle.actaura.aura-${e} .actauraword { ${va(er[e])} }`)].join(`
`),Hb=e=>tc(e).map(t=>t.mark).join("");function Cb(e,t,a,o=1.8){const n=nc(e,t,a,o);return n&&t.rgba&&(n.style.color=se(t.rgba)??""),n}let rc=0;function nc(e,t,a,o=1.8){const n=e?.createElementNS?.("http://www.w3.org/2000/svg","svg");if(!n)return null;const i="http://www.w3.org/2000/svg";n.setAttribute("class",a),n.setAttribute("viewBox","0 0 16 16"),n.setAttribute("aria-hidden","true");const s=e.createElementNS(i,"path");s.setAttribute("d",t.path);const p=Array.isArray(t.gradient)&&t.gradient.length>1?t.gradient:null;if(p){const l=`dfglyph-grad-${++rc}`;n.setAttribute("overflow","visible"),s.setAttribute("fill",`url(#${l})`),s.setAttribute("stroke","currentColor"),s.setAttribute("stroke-width",String(Vd)),s.setAttribute("stroke-linejoin","round"),n.append(s);const c=e.createElementNS(i,"defs"),g=e.createElementNS(i,"linearGradient");g.setAttribute("id",l),g.setAttribute("gradientUnits","userSpaceOnUse"),g.setAttribute("x1","0"),g.setAttribute("y1","0"),g.setAttribute("x2","16"),g.setAttribute("y2","0"),p.forEach((m,b)=>{const x=e.createElementNS(i,"stop");x.setAttribute("offset",String(b/(p.length-1))),x.setAttribute("stop-color",se(m)??""),g.append(x)}),c.append(g),n.append(c)}else Zd[t.key]?(s.setAttribute("fill","none"),s.setAttribute("stroke","currentColor"),s.setAttribute("stroke-width",String(o)),s.setAttribute("stroke-linecap","round"),s.setAttribute("stroke-linejoin","round")):s.setAttribute("fill","currentColor"),n.append(s);if(t.detail?.path){const l=e.createElementNS(i,"path");l.setAttribute("d",t.detail.path),l.setAttribute("fill",se(t.detail.rgba)??"currentColor"),n.append(l)}return n}const f={outline:"#050608",stoneHi:"#c2b79a",stoneLit:"#9a9079",stoneMid:"#7a7260",stoneLo:"#5a5446",stoneDim:"#3a352a",stoneDark:"#25221b",brassHi:"#f3cf86",brass:"#c08a3e",brassLo:"#7a5424",brassDark:"#3d2a12",ground:"rgba(12,14,18,0.93)",groundPanel:"rgba(15,17,22,0.92)",groundButton:"#1c1f26",groundButtonHi:"#262a33",groundChip:"rgba(12,14,18,0.84)",gold:"rgb(243,239,44)",groove:"rgba(163,152,128,0.26)"},S=f,ic=700,vo={window:[".dlg-win",".px-win",".pack-win",".loot-win",".px-about",".px-profile",".hmbox",".px-support",".travelpanel-bar",".tview-bar",".tview-side",".tview-confirm","#wp-menu","#travel-pace-box",".helmpanel-bar",".saddlepanel-bar",".hmroot .hmtools","body .dfdecor-card","body .broker-win","body .dfnaval-win","body .bounty-win","body .notice-win","body .aw-win","body .lgs-win"],windowGround:[".talk-shell .talk-panel"],panel:["body .rvncard",".pack-shell .fate-confirm",".px-sys .rvn-row",".px-sys .cmp-row",".px-sys .hld-row",".px-sys .hld-refit",".px-sys .fam-node",".px-sys .fam-card",".px-sys .fam-hallrow","body .lgs-card",".port-host .port-card",".pack-shell .statflip-back",".pack-shell .packdetail .card",".pack-shell .card",".hmcard",".px-sys .card",".px-sys .dcard",".shell .card",".shell .dcard",".notice",".inputbox",".lv-note",".cr-shell .cr-entry",".cr-shell .cr-sharebox",".shell .ft-rail",".shell .look-panel",".trade-shell .trade-detail",".trade-shell .sb-ask .card",".tavern-shell .sb-ask .card","body .dfsocial","body .dfprofile-card","body .dfchat-box",".inv-tip > .card",".inv-menu",".inv-info > .card",".pbind > .card","body .dfpage-card","body .dfpeer-card","body .dfsocial-toast","body .dfduel-toast","body .dfdecor-bar","body .broker-card","body .dfnaval-plate","body .dfnaval-card","body .bounty-card","body .arena-plate","body .aw-card",".px-win .card.acctin ul.acctfacts.acctrecord li"],panelAccent:["body .rvncard",".notice",".inputbox","body .dfsocial-toast","body .dfdecor-bar"],button:[".port-host .port-btn",".pack-shell .statflip-btn",".inv-info .act",".pbind .act",".px-sys .act",".shell .act",".px-win .card .act",".pack-shell .act",".px-setwrap .act",".px-setwrap .step",".shell .step",".wizard .bigbtn",".wizard .reflexbtn",".lv-pick .lv-arrow",".lv-pick .lv-press",".shell .look-arrow",".cr-shell .cr-rm",".px-winclose",".talk-head .act",".talk-say .act",".px-qwhere .act",".px-qentry-where .act",".cr-shell .cr-where .act",".px-qmeta .act","body .dfsocial-btn","body .dfsocial-close","body .dfprofile-close",".dlg-shell .dlg-btn","body .broker-shell .act","body .bounty-shell .act","body .lgs-shell .act","body .notice-shell .act","body .aw-shell .act","body .arena-shout",".trade-shell .act",".tavern-shell .act",".sb-shell .act",".cr-shell .act",".trade-shell .packtab",".travelpanel-act",".tview-back",".tview-mode",".tview-filter",".tview-map",".tview-pace-step",".travelpanel-pace-step",".pbox-pace-step",".tview-wp-go",".tview-wp-x","#wp-menu .wpm-btn","#wp-menu .wpm-kind",".helmpanel-btn",".saddlepanel-btn",".hmroot .hmtool","body .dfpage-btn","body .dfpeer-btn:not(.cancel)","body .dfduel-btn","body .dfprofile-duel","body .dfdecor-btn","body .dfdecor-open","body .dfprofile-wed","body .dfnaval-btn",".px-menu .doorbtn"],primary:[".lv-ok",".hmroot .act:not(.hmtool)","body .dfdecor-place","body .bounty-shell .act.primary","body .lgs-shell .act.primary","body .notice-shell .act.primary","body .aw-shell .act.primary","body .dfnaval-take"],warn:["body .dfsocial-btn.warn","body .dfprofile-duel","body .dfnaval-scuttle",".pack-shell .fate-confirm .act.warn",".px-sys .cmp-acts .act.warn"],tile:[".port-host .port-tile",".pack-shell .sf-chip",".port-host .port-iconcell",".pack-shell .itemrow",".pack-shell .equipped .wornrow",".pack-shell .wornsock",".wizard .racegrid button",".wizard .facegrid button",".shell .ft-tile",".shell .ft-seg",".shell .ft-mchip",".shell .ft-tile-more",".sb-shell .sb-chip",".cr-shell .sb-chip",".piletab",".hmpick","body .dfdecor-chip","body .dfnaval-choice"],chip:["body .rvncard-rank",".px-sys .rvn-rank",".px-sys .hld-state",".px-sys .fam-chip","body .rvncard-mood",".px-sys .rvn-mood",".pack-shell .fate-mood",".px-sys .cmp-rank",".px-sys .cmp-mood",".hud-qspell",".pack-shell .sf-tile",".pack-shell .sf-pill",".hud-qstag",".hud-readied",".lv-note-key",".shell .subbtn .count",".hb .hb-caption","body .dfnaval-chip","body .dfnaval-gun","body .arena-timer","body .arena-tag","body .aw-chip"],well:["body .rvncard-face",".px-sys .rvn-face",".px-sys .hld-art",".px-sys .hld-field",".px-sys .fam-view",".px-sys .fam-card .fam-face","body .lgs-face",".pack-shell .fate-face",".px-sys .cmp-face",".px-sys .cmp-slot",".trade-shell .packcol",".pack-shell .sf-sec",".shell .opt-search",".shell .ft-tile-drawer",".port-host .port-field",".port-host .port-canvas",".port-host .port-picture img",".port-host .port-pictureword",".wizard .namebox",".sb-shell .sb-rename input",".cr-shell .cr-compose input",".hmsearch input",".talk-face",".pack-shell .figure-doll",".pack-shell .wornmap-doll.noart",".shell .look-pic",".shell .dcard code",".px-setwrap .dcard code",".px-meter",".shell .swatch",".px-setwrap .swatch",".travelpanel-accel",".tview-pace-num",".travelpanel-pace-num",".pbox-pace-num",".tview-compass","body .dfpage-leaf","body .dfdecor-list","body .dfdecor-preview","body .dfdecor-thumb","body .dfdecor-search","body .dfparty-face","body .dfnaval-holdlist"],input:[".shell .opt-search",".wizard .namebox",".sb-shell .sb-rename input",".cr-shell .cr-compose input",".hmsearch input","body .dfsocial-field","body .dfchat-input","body .dfdecor-search",".tview-wp-pick","#wp-menu input.wpm-name"],meterFill:[".px-fill"],header:[".port-host .port-head",".px-win .px-tabs",".talk-head",".sb-shell .sb-top",".cr-shell .sb-top",".trade-shell .sb-top","body .broker-head","body .dfnaval-winhead","body .bounty-head","body .notice-head","body .aw-head",".tavern-shell .sb-top",".pack-shell .pack-id",".hmbox-title",".loot-win .remotehead",".trade-shell .remotehead","body .dfsocial-head","body .dfchat-tabs","body .dfsocial-tabs"],headerRule:["body .rvncard-name",".shell .ft-drawer-label",".pack-shell .sf-sec h4",".pack-shell .card h3",".hmcard h3",".hmcard h2",".lv-crown",".talk-modes",".talk-cats","body .dfsocial-sec","body .dfpeer-name","body .dfdecor-head","body .dfnaval-sechead"],footer:[".port-host .port-foot",".dlg-shell .dlg-acts",".trade-shell .trade-footer",".pack-shell .pack-dock",".pack-shell .packbar",".talk-say"],footerRule:[".lv-foot",".wizard .actionbar"],rule:[".port-host .port-stat",".pack-shell .sf-row",".pack-shell .sf-th",".px-stat",".px-sys .row",".shell .row",".px-setwrap .row",".hmresult",".hmpair",".cr-shell .cr-head","body .dfprofile-head","body .dfsocial-letterhead","body .dfsocial-row"],ruleTop:[".px-qarch",".wplaque-list","body .dfchat-form"],listRow:[".pack-shell .loot-win .itemrow",".trade-shell .itemrow","body .dfdecor-row","body .broker-offer","body .dfnaval-item","body .bounty-post","body .aw-tier"],wing:[".px-qwing"],wingFlip:[".px-qwing.px-flip"],railRight:[".px-qrail",".shell .side",".shell .subrail"],railLeft:[".talk-topics",".shell .detail","body .dfchat-who"],tabs:[".px-tabs button",".talk-mode","body .dfsocial-tab","body .dfchat-tab"],chosen:['.ft-seg:not(.ft-seg-switch) .ft-segb[aria-pressed="true"]','.ft-seg.ft-seg-switch .ft-segb:not(.off)[aria-pressed="true"]'],chosenLocked:['.ft-seg.locked:not(.ft-seg-switch) .ft-segb[aria-pressed="true"]'],qrow:[".port-host .port-row",".pack-shell .sf-tr",".pick-shell .pick-row",".px-qrow",".talk-row"],square:["body .dfsocial","body .dfprofile-card","body .dfchat-box","body .dfsocial-btn","body .dfsocial-close","body .dfprofile-close","body .dfsocial-field","body .dfchat-input","body .dfsocial-toast","body .dfsocial-badge","body .dfsocial-letter","body .dfprofile-renown","body .dfprofile-duel","body .dfprofile-wed","body .dfpage-card","body .dfpage-leaf","body .dfpage-btn","body .dfpeer-card","body .dfpeer-btn","body .dfduel-toast","body .dfduel-btn","body .dfdecor-card","body .dfdecor-open","body .dfdecor-search","body .dfdecor-chip","body .dfdecor-list","body .dfdecor-thumb","body .dfdecor-preview","body .dfdecor-btn","body .dfdecor-bar"]},w=(e,t="")=>e.map(a=>`${a}${t}`).join(`,
`),Ae=12,de=8,tr=de-2;function sc(e=S){const t=Ae*2+1,a=[e.outline,e.stoneHi,e.stoneLit,e.stoneMid,e.stoneLo,e.outline,"#16140f","#0c0d10"],o=[e.outline,e.stoneDark,e.stoneDim,"#443e31","#4f4838",e.outline,e.stoneLo,"#1c1a15"],n=11,i=[],s=(l,c,g)=>{g&&i.push(`<rect x='${l}' y='${c}' width='1' height='1' fill='${g}'/>`)},p=(l,c)=>{if(l>=n||c>=n||l+c>n+4)return null;if(l===0||c===0||l===n-1||c===n-1||l+c===n+4)return e.outline;const g=4;return l>=g&&l<=g+2&&c>=g&&c<=g+2?l===g+1&&c===g+1?e.brassHi:l===g||c===g?e.brassDark:e.brassLo:l===1||c===1?e.brassHi:l===n-2||c===n-2||l+c===n+3?e.brassLo:e.brass};for(let l=0;l<t;l++)for(let c=0;c<t;c++){const g=c<Ae,m=c>Ae,b=l<Ae,x=l>Ae,u=l,T=t-1-l,y=c,A=t-1-c;if((g||m)&&(b||x)){const D=b?u:T,H=g?y:A,G=p(D,H);if(G){s(c,l,G);continue}D<de&&H<de?s(c,l,D<=H?b?a[D]:o[D]:g?a[H]:o[H]):D<de?s(c,l,b?a[D]:o[D]):H<de&&s(c,l,g?a[H]:o[H])}else b?u<de&&s(c,l,a[u]):x?T<de&&s(c,l,o[T]):g?y<de&&s(c,l,a[y]):m&&A<de&&s(c,l,o[A])}return`<svg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${t}' shape-rendering='crispEdges'>${i.join("")}</svg>`}const lc=`url("data:image/svg+xml,${encodeURIComponent(sc())}")`,Jt="repeating-conic-gradient(rgba(255,255,255,0.022) 0 25%, transparent 0 50%) 0 0 / 4px 4px",Fe=`${S.stoneLit} ${S.stoneDim} ${S.stoneDark} ${S.stoneMid}`,ka=`${S.stoneMid} #2e2a21 ${S.stoneDark} ${S.stoneLo}`,ft=`${S.stoneDark} ${S.stoneMid} ${S.stoneLit} ${S.stoneDim}`,ze=`${S.brassHi} ${S.brassLo} #5c3f1a ${S.brass}`,pc="#e0584a #5a130f #3d0d0a #b83a2e",dc="#ff8a76 #7a1d16 #5a130f #e0584a",cc="#3d0d0a #b83a2e #e0584a #5a130f",X=`0 0 0 1px ${S.outline}`,De="linear-gradient(180deg, rgba(255,255,255,0.08) 0 2px, transparent 2px calc(100% - 3px), rgba(0,0,0,0.32) calc(100% - 3px))";function hc(e=vo){const t=[...e.button,...e.primary];return`
/* ── FRAME1: THE STONE-AND-BRASS KIT (ui/enhancedFrame.js) ─────────
   Generated: every rule below comes from a role list in that module.
   Paint only - no widths, no padding, no sizes. */

/* WINDOW */
${w(e.window)} {
  border-image: ${lc} ${Ae} / ${Ae}px / ${tr}px stretch;
  background: ${Jt}, ${S.ground};
  box-shadow: 4px 4px 0 ${tr}px rgba(0,0,0,0.42);
  outline: none; }
${w(e.windowGround)} { background: ${Jt}, ${S.ground}; }
/* the brass fittings stand where the gems stood */
${w(e.window," .px-corner")} { display: none; }

/* PANEL */
${w(e.panel)} {
  border-color: ${Fe};
  background-color: ${S.groundPanel};
  box-shadow: ${X}, inset 0 0 0 1px rgba(5,6,8,0.75), inset 0 3px 0 -1px rgba(255,255,255,0.04),
    3px 3px 0 1px rgba(0,0,0,0.4);
  outline: none; }
${w(e.panelAccent)} { border-left-color: ${S.brass}; }

/* BUTTON + PRIMARY - raised; brass under the pointer or the pad; sunk
   while held; flat when it cannot be pressed. */
${w(t)} {
  border-color: ${Fe};
  background-color: ${S.groundButton}; background-image: ${De};
  box-shadow: ${X}, 2px 2px 0 1px rgba(0,0,0,0.45);
  transition: none; }
${w(e.primary)} { border-color: ${ze}; background-color: #2a2217; }
${w(t,":hover")},
${w(t,":focus-visible")},
${w(e.button,".on")},
${w(e.button,".primary")} {
  border-color: ${ze}; background-color: ${S.groundButtonHi}; background-image: ${De}; }
${w(e.primary,":hover")}, ${w(e.primary,":focus-visible")} { background-color: #3a2e1c; }
/* WARN - a press that costs something: the edge in blood, brighter under the pointer (never brass), sunk while
   held; before the disabled rule, so a warn that cannot be pressed goes flat like any other. AUDIT MERGE-PLUS D4:
   the lit band is said in the warn's own rules (a lane's native \`background\` shorthand outweighed the kit's and
   wiped it - at rest on Leave, under the pointer on Challenge), and the sunk blood edge comes AFTER the pressable's
   sunk stone, which stood at the same weight and won on the duel. (A theme's ground stands under a warn, as under
   every press; the blood edge is its mark.) */
${w(e.warn)} { border-color: ${pc}; background-color: #241514; background-image: ${De}; color: #f4dfd8; }
${w(e.warn,":hover:not(:disabled)")}, ${w(e.warn,":focus-visible")} { border-color: ${dc}; background-color: #321b19; background-image: ${De}; color: #fff3ee; }
${w(t,":active:not(:disabled)")} {
  border-color: ${ft}; translate: 1px 1px;
  box-shadow: ${X}, inset 2px 2px 0 rgba(0,0,0,0.5); }
${w(e.warn,":active:not(:disabled)")} { border-color: ${cc}; }
${w(t,":disabled")},
${w(t,"[disabled]")} {
  border-color: rgba(125,116,96,0.3); background-color: rgba(12,14,18,0.6); background-image: none;
  box-shadow: 0 0 0 1px rgba(5,6,8,0.6); translate: none; }

/* TILE - the button without its drop, for dense grids */
${w(e.tile)} {
  border-color: ${ka};
  background-image: linear-gradient(180deg, rgba(255,255,255,0.06) 0 2px, transparent 2px);
  box-shadow: ${X}; transition: none; }
${w(e.tile,":hover")}, ${w(e.tile,":focus-visible")} { border-color: ${ze}; }
${w(e.tile,".on")}, ${w(e.tile,".sel")}, ${w(e.tile,'[aria-pressed="true"]')} {
  border-color: ${ze};
  background-image: linear-gradient(180deg, rgba(243,207,134,0.14) 0 2px, rgba(192,138,62,0.08) 2px); }
${w(e.tile,".dragover")} { box-shadow: ${X}, inset 0 2px 0 ${S.brass}; }
${w(e.tile,":active")} { border-color: ${ft}; }

/* CHIP - a readout, never pressed */
${w(e.chip)} {
  border-color: ${ka}; background-color: ${S.groundChip};
  box-shadow: ${X}, 2px 2px 0 1px rgba(0,0,0,0.35); }

/* WELL - sunk into the surface. Inputs light brass while typed in. */
${w(e.well)} {
  border-color: ${ft};
  box-shadow: ${X}, inset 2px 2px 0 rgba(0,0,0,0.5); }
${w(e.input)} { background-color: rgba(4,5,7,0.7); }
${w(e.input,":focus")} { border-color: ${S.brassLo} ${S.brass} ${S.brassHi} ${S.brassLo}; outline: none; }

/* METERS - the fill banded like the vitals: lit top, shaded foot, a lit leading edge */
${w(e.meterFill)} {
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.28), inset 0 -2px 0 rgba(0,0,0,0.35),
    inset -2px 0 0 rgba(255,255,255,0.4); }
.px-skill .px-fill { box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), inset -2px 0 0 rgba(255,255,255,0.4); }

/* HEADER - the band that names a window: a lit ground over a groove */
${w(e.header)} {
  border-bottom-color: ${S.outline};
  background-image: linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015));
  box-shadow: 0 1px 0 ${S.groove}, inset 0 1px 0 rgba(255,255,255,0.05); }
${w(e.headerRule)} { border-bottom-color: ${S.outline}; box-shadow: 0 1px 0 ${S.groove}; }

/* FOOTER - the band the window's actions stand on */
${w(e.footer)} {
  border-top-color: ${S.outline};
  background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2));
  box-shadow: inset 0 1px 0 ${S.groove}; }
${w(e.footerRule)} { border-top-color: ${S.outline}; box-shadow: inset 0 1px 0 ${S.groove}; }

/* RULES AND RAILS - engraved: a dark cut with the light catching under it */
${w(e.rule)} { border-bottom-color: rgba(5,6,8,0.6); box-shadow: 0 1px 0 rgba(163,152,128,0.13); }
${w(e.railRight)} { border-right-color: rgba(5,6,8,0.75); }
${w(e.railLeft)} { border-left-color: rgba(5,6,8,0.75); }

/* WHERE YOU ARE - the chosen tab and quest row carry a brass mark, not only a colour */
${w(e.tabs,".on")} { box-shadow: inset 0 -2px 0 ${S.brass}; background: rgba(192,138,62,0.08); }
${w(e.tabs,":hover:not(.on)")} { box-shadow: inset 0 -2px 0 rgba(192,138,62,0.4); }
${w(e.qrow,".on")} { box-shadow: inset 2px 0 0 ${S.brass}; background: rgba(192,138,62,0.07); }

${w(e.ruleTop)} { border-top-color: rgba(5,6,8,0.6); box-shadow: inset 0 1px 0 rgba(163,152,128,0.13); }
.px-qarch.px-qfirst { box-shadow: none; }   /* the first heading has no rule above it */
${w(e.square)} { border-radius: 0; }

/* LIST ROWS - lines, not boxes; the chosen one carries the brass mark */
${w(e.listRow)} { border-bottom-color: rgba(5,6,8,0.55); background-image: none;
  box-shadow: 0 1px 0 rgba(163,152,128,0.1); }
${w(e.listRow,":hover")}, ${w(e.listRow,":focus-visible")} { border-bottom-color: rgba(5,6,8,0.55);
  box-shadow: 0 1px 0 rgba(163,152,128,0.1), inset 2px 0 0 rgba(192,138,62,0.45); }
${w(e.listRow,".on")} { border-bottom-color: rgba(5,6,8,0.55); background-image: none;
  box-shadow: 0 1px 0 rgba(163,152,128,0.1), inset 2px 0 0 ${S.brass}; }

/* THE QUEST PAGE'S WINGS AND DIVIDERS - engraved, fading out */
${w(e.wing)} { background: linear-gradient(180deg, rgba(5,6,8,0.85) 0 1px, rgba(163,152,128,0.55) 1px);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000); mask-image: linear-gradient(90deg, transparent, #000); }
${w(e.wingFlip)} { -webkit-mask-image: linear-gradient(90deg, #000, transparent); mask-image: linear-gradient(90deg, #000, transparent); }
.px-divider::before, .px-divider::after { background: linear-gradient(180deg, rgba(5,6,8,0.85) 0 1px, rgba(163,152,128,0.55) 1px); }

/* THE HOTBAR - ten sockets cut into stone: a stone rim, a sunk face,
   and brass for what is in hand. Prefixed with .hb because the hotbar's
   own sheet is injected after this one. */
.hb .hb-slot { background-color: rgba(10,12,16,0.9); background-image: none;   /* a plain sunk face - no dot dither */
  box-shadow: ${X}, 2px 2px 0 1px rgba(0,0,0,0.5); }
.hb .hb-frame { border-color: ${ka};
  box-shadow: inset 0 0 0 1px rgba(5,6,8,0.8), inset 2px 2px 0 1px rgba(0,0,0,0.35); }
.hb .hb-slot.hb-empty .hb-frame { border-style: solid; border-color: rgba(122,114,96,0.35) rgba(37,34,27,0.6) rgba(37,34,27,0.6) rgba(122,114,96,0.3); }
.hb .hb-slot.hb-active .hb-frame { border-color: ${ze};
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.6), inset 0 0 14px rgba(192,138,62,0.35); }
.hb .hb-key { color: #c9bfa4; text-shadow: 1px 1px 0 #000; }
.hb .hb-wear { box-shadow: 0 0 0 1px ${S.outline}; }
.hb .hb-slot.hb-strike .hb-frame { border-color: ${S.brassHi} ${S.brass} ${S.brassLo} ${S.brassHi}; }

/* THE QUICKSLOT DIAMOND - the rim is a clipped rhombus, so its bevel is
   a BACKGROUND lit from the top left; the ground inside it is sunk. */
.hud-qdiamond .hud-qframe { background: linear-gradient(135deg, ${S.stoneHi} 0%, ${S.stoneMid} 45%, ${S.stoneDim} 70%, ${S.stoneDark} 100%); }
.hud-qdiamond .hud-qground { background: linear-gradient(135deg, rgba(4,5,7,0.92) 0%, rgba(14,16,20,0.86) 55%, rgba(26,28,33,0.84) 100%); }
.hud-qdiamond .hud-qcell.socket .hud-qframe { background: linear-gradient(135deg, rgba(122,114,96,0.55), rgba(37,34,27,0.55)); }
.hud-qdiamond .hud-qcell.cycling .hud-qframe { background: linear-gradient(135deg, #fff39a, ${S.gold} 50%, #9a8a14); }

/* THE HUD'S OTHER TRACKS (target, breath) wear the vitals' frame */
.hud-track { border-color: ${Fe}; background-color: rgba(8,9,12,0.85);
  box-shadow: ${X}, 2px 2px 0 1px rgba(0,0,0,0.45); }
.hud-foe .hud-track { box-shadow: ${X}; }   /* FOE-SHADOW (2026-10-06, the player: "dont let the foe health bar have 2 shadows"): the ring alone */
.hud-foe .hud-fill { background: linear-gradient(180deg, #f2a597 0 1px, #c8483a 1px calc(100% - 1px), #7a2019 calc(100% - 1px)); }
.hud-breath .hud-fill { box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.35); }
.hud-compass { border-bottom-color: ${S.stoneLit}; box-shadow: 0 2px 0 rgba(5,6,8,0.55); }

/* TOASTS - a HUD line (a skill up, a loot tally, a hunger line) is WORDS, not a box:
   no ground, no frame, a dark outline so it reads against any sky - and it FADES where
   it stands when its time is up (TOAST_FADE_MS, ui/enhancedNotice.js), not slide away. */
/* PLUS1b: the toasts keep their panel (the kit's panel dress, through .notice) - only the leaving changed. */
.notice.notice-toast.notice-out { transform: translateX(0); opacity: 0; transition: opacity ${ic}ms ease-out; }

/* SKILL2: A SKILL-UP IS WORDS, NOT A BOX - the level-up strip above the vitals
   (ui/levelNotice.js) keeps its box for the level row, the one row you act on; a
   skill line is yellow outlined text like the other HUD lines, and every line that
   expires fades where it stands over FADE_MS (700ms) instead of blinking off. */
.lv-note.lv-note-skill { background: none; border-color: transparent; box-shadow: none; }
.lv-note.lv-note-skill .lv-note-gem, .lv-note.lv-note-skill .lv-note-title, .lv-note.lv-note-skill .lv-note-sub {
  color: rgb(243,239,44);
  text-shadow: -1px 0 0 ${S.outline}, 1px 0 0 ${S.outline}, 0 -1px 0 ${S.outline}, 0 1px 0 ${S.outline}, 2px 2px 0 rgb(93,77,12); }
.lv-note.lv-fading { animation: lv-note-fade 700ms ease-out forwards; }
@keyframes lv-note-fade { from { opacity: 1; } to { opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .lv-note.lv-fading { animation-duration: 1ms; } }

/* THE CROSSHAIR PLAQUE - it sits on the world you are looking at, so it is a veil, not a
   slab: the panel dress stays (frame, ring), the ground lets the scene through. */
.wplaque, .wplaque-stats { background-color: rgba(10,12,17,0.72);
  box-shadow: ${X}, inset 0 0 0 1px rgba(5,6,8,0.45), 2px 2px 0 1px rgba(0,0,0,0.25); }
.wplaque { border-color: rgba(154,144,121,0.6) rgba(58,53,42,0.6) rgba(37,34,27,0.6) rgba(110,103,85,0.6); }

/* THE CHOSEN OPTION - green, banded like the fatigue bar, lit on top */
${w(e.chosen)} {
  background: linear-gradient(180deg, #5fc27c 0 1px, #3a9a5a 1px 3px, #2f8a4f 3px calc(100% - 3px), #216b3b calc(100% - 3px));
  color: #f2fbe8; text-shadow: 1px 1px 0 #0a2413; box-shadow: 0 0 0 1px ${S.outline}; }
${w(e.chosen,":hover:not(:disabled)")} { color: #ffffff; }
/* an option the online lane has set keeps its brass words, on the same green */
${w(e.chosenLocked)} { color: ${S.brassHi}; }

/* SCROLLBARS - a stone slider in a sunk channel */
.shell ::-webkit-scrollbar-thumb, .px-win ::-webkit-scrollbar-thumb {
  background: ${S.stoneMid}; border-color: ${Fe}; }
.shell ::-webkit-scrollbar-track, .px-win ::-webkit-scrollbar-track { background: rgba(0,0,0,0.35); }

@media (prefers-reduced-motion: reduce) {
  ${w(t,":active:not(:disabled)")} { translate: none; }
}
`}function gc(e){const t=[];let a=0,o=0;for(let n=0;n<e.length;n++){const i=e[n];i==="("?a++:i===")"?a--:i===","&&a===0&&(t.push(e.slice(o,n).trim()),o=n+1)}return t.push(e.slice(o).trim()),t.filter(Boolean)}function xc(e,t){const a=String(e).replace(/\/\*[\s\S]*?\*\//g,"");let o="",n=0;for(;n<a.length;){const i=a.indexOf("{",n);if(i<0)break;const s=a.slice(n,i).trim();let p=1,l=i+1;for(;l<a.length&&p;)a[l]==="{"?p++:a[l]==="}"&&p--,l++;const c=a.slice(i+1,l-1);if(/^@(media|supports)\b/.test(s)){const g=xc(c,t);g&&(o+=`${s} {
${g}}
`)}else if(s.startsWith("@"))o+=`${s} {${c}}
`;else{const g=gc(s).filter(t);g.length&&(o+=`${g.join(`,
`)} {${c}}
`)}n=l}return o}const mc=(e,t)=>`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='m' x='0%' y='0%' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.022 0.05' numOctaves='5' seed='7' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 ${e} 0 0 0 0 ${e} 0 0 0 0 ${e} 0 0 0 ${t} 0'/></filter><rect width='220' height='220' filter='url(%23m)'/></svg>`).replace(/%2523/g,"%23")}") 0 0 / 220px 220px`,bc=e=>`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><filter id='g' x='0%' y='0%' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ${e} 0'/></filter><rect width='96' height='96' filter='url(%23g)'/></svg>`).replace(/%2523/g,"%23")}")`,Se=e=>{const t=e.replace("#","");return`${parseInt(t.slice(0,2),16)}, ${parseInt(t.slice(2,4),16)}, ${parseInt(t.slice(4,6),16)}`},fc=.06,uc=e=>{const[t,a,o]=[1,3,5].map(n=>parseInt(String(e).slice(n,n+2),16)/255).map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4);return .2126*t+.7152*a+.0722*o},jb=e=>e.ink&&uc(e.panel)>fc?e.ink:e.panel,ko=Object.freeze({slate:{name:"Slate",swatch:"#171b21"},stone:{name:"Stone",swatch:"#6a6a64",ink:"#3c3c38",slate:"#4a4a45",iron:"#77776f",ground:"#51514c",panel:"#5a5a54",button:"#4a4a45",buttonHi:"#5f5f58",chip:"rgba(60,60,56,0.9)",input:"rgba(30,30,28,0.75)",marble:mc(1,.2),grit:bc(.55)},iron:{name:"Iron",swatch:"#2f3844",ink:"#161b22",slate:"#1f262f",iron:"#3a4552",ground:"#232a33",panel:"#28303a",button:"#2c3440",buttonHi:"#36404d",chip:"rgba(28,34,42,0.9)",input:"rgba(8,10,14,0.75)"},ember:{name:"Ember",swatch:"#3a1a14",ink:"#1a0d0a",slate:"#24110d",iron:"#4a2a22",ground:"#2a1510",panel:"#301914",button:"#3a1d16",buttonHi:"#4a261c",chip:"rgba(40,20,15,0.9)",input:"rgba(14,6,4,0.75)"},forest:{name:"Forest",swatch:"#1c2e22",ink:"#0c140f",slate:"#122018",iron:"#2c4234",ground:"#15231a",panel:"#1a2b20",button:"#1f3226",buttonHi:"#284030",chip:"rgba(20,34,25,0.9)",input:"rgba(5,10,7,0.75)"},night:{name:"Night",swatch:"#18203a",ink:"#0b0f1c",slate:"#121831",iron:"#2c3656",ground:"#131a30",panel:"#182038",button:"#1c2542",buttonHi:"#263052",chip:"rgba(20,26,48,0.9)",input:"rgba(5,7,14,0.75)"}}),Jn="slate";function wc(e,t,a=vo){if(!t.ground)return"";const o=(c,g="")=>c.map(m=>`:root[data-plus-theme="${e}"] ${m}${g}`).join(`,
`),n=[...a.button,...a.primary],i=t.marble?`${t.grit}, ${t.marble.replace(/ 0 0 \/ .*$/,"")}`:"",s=t.marble?"96px 96px, 220px 220px":"",p=t.marble?`${t.grit} 0 0 / 96px 96px, ${t.marble}, `:"",l=(c,g)=>t.marble?`${o(c)} { background-image: ${g?`${g}, `:""}${i}; background-size: ${g?"auto, ":""}${s}; }
`:"";return`
/* PLUS2: ${t.name} */
:root[data-plus-theme="${e}"] { --ink: ${t.ink}; --slate: ${t.slate}; --iron: ${t.iron}; }
${o(a.window)}, ${o(a.windowGround)} { background: ${p}${Jt}, ${t.ground}; }
${o(a.panel)} { background-color: ${t.panel}; }
${l(a.panel)}
/* PLUS4: a skill-up is WORDS, not a box (SKILL2, frameCss above) - Slate never paints a theme sheet
   at all, so that rule stood unchallenged and skill-ups there stayed backgroundless; every OTHER
   theme's panel rule (just above) outweighs it by specificity and put the box back. Repeat the "no
   box" law here, at the theme's own specificity, so every theme reads the same as Slate does. */
:root[data-plus-theme="${e}"] .lv-note.lv-note-skill { background: none; }
/* PLUS6: the same for the HUD's toasts (a skill-up, a loot tally): the theme's panel rule above outweighed the
   kit's "words, not a box" and put the box back on every theme but Slate */
:root[data-plus-theme="${e}"] .notice.notice-toast { background: none; border-color: transparent; box-shadow: none; }
${o(n)} { background-color: ${t.button}; }
${o(n,":hover")}, ${o(n,":focus-visible")}, ${o(a.button,".on")}, ${o(a.button,".primary")} { background-color: ${t.buttonHi}; }
${l(n,De)}${o(a.tile)} { background-color: ${t.button}; }
${l(a.tile,"linear-gradient(180deg, rgba(255,255,255,0.06) 0 2px, transparent 2px)")}${o(a.chip)} { background-color: ${t.chip}; }
${l(a.chip)}
${o(a.input)} { background-color: ${t.input}; }
/* PLUS2c: the crosshair's world plaque - tinted, never opaque. It reads over the game world, so
   every theme keeps the SAME 0.9 alpha slate wears (see enhancedStyle.js .wplaque/.wplaque-stats)
   rather than the panel role's flat colour, which would black out the world behind it. */
:root[data-plus-theme="${e}"] .wplaque, :root[data-plus-theme="${e}"] .wplaque-stats { background: rgba(${Se(t.panel)}, 0.9); }
/* PLUS2c: the hotbar and the quickslot diamond - the same sunk stone as everything else, but kept
   at slate's own alpha rather than the tile role's flat colour: these sit right over the game
   world (not inside a window), so a theme must tint them, not black them out. */
:root[data-plus-theme="${e}"] .hb .hb-slot { background-color: rgba(${Se(t.panel)}, 0.9); }
/* PLUS6: on EVERY theme the hotbar sockets and the quickslot diamond wear the SAME stone as the status chips
   (Hungry, Dehydrated...) - the chip role's colour, and on a textured theme its grit and marble too - one rock */
:root[data-plus-theme="${e}"] .hb .hb-slot { background-color: ${t.chip}; ${t.marble?`background-image: ${i}; background-size: ${s};`:"background-image: none;"} }
:root[data-plus-theme="${e}"] .hud-qdiamond .hud-qground { background: ${p}${t.chip}; }
${t.marble?`/* PLUS6: on a TEXTURED theme (Stone) the hotbar's sockets and the quickslot diamond wear the very ground the
   status blocks under the vitals do (Hungry, Dehydrated - the chip role): the chip's own colour with the grit and
   the marble over it. Only a textured theme writes this; every other theme keeps its own tint above. */
:root[data-plus-theme="${e}"] .hb .hb-slot { background-color: ${t.chip}; background-image: ${i}; background-size: ${s}; }
:root[data-plus-theme="${e}"] .hud-qdiamond .hud-qground { background: ${p}${t.chip}; }`:""}
:root[data-plus-theme="${e}"] .hud-qdiamond .hud-qground {
  background: linear-gradient(135deg, rgba(${Se(t.ink)},0.92) 0%, rgba(${Se(t.panel)},0.86) 55%, rgba(${Se(t.button)},0.84) 100%); }
/* PLUS2c: the Ascend screen's crown and foot bars, in the theme's own stone rather than Slate's
   fixed ink - same translucent gradient shape, just the theme's ground fading to its ink. */
:root[data-plus-theme="${e}"] .lv-sky .lv-crown, :root[data-plus-theme="${e}"] .lv-sky .lv-foot {
  background: linear-gradient(180deg, rgba(${Se(t.ground)}, 0.92), rgba(${Se(t.ink)}, 0.9)); }
/* PLUS2b: the rails and the backdrop - a textured stone is the WHOLE screen (the dark starfield put away, the page
   itself the rock); a coloured one tints the starfield from the page's own ink beneath it. */
${o([...a.railRight,...a.railLeft,".shell > .side","aside.side"])} { background-color: ${t.slate}; }
${l([...a.railRight,...a.railLeft,".shell > .side","aside.side"])}${t.marble?`:root[data-plus-theme="${e}"] .px-ground { opacity: 0; }
:root[data-plus-theme="${e}"] body { background: ${p}${t.ink}; }`:`:root[data-plus-theme="${e}"] .px-ground { opacity: 0.4; }`}`}const vc=Object.entries(ko).map(([e,t])=>wc(e,t)).join(`
`),Ga=`${hc()}
/* ── PLUS2: THE COLOURS (after the kit, so a theme's ground wins by the page attribute) ── */
${vc}
`,kc=Object.freeze({window:["main > section"],header:["main > section > h2"],panel:[".cols > div",".grid > div",".step",".qa > div"],button:[".plaque",".ask",".doorlinks a"],primary:[".doorplaques .plaque:first-child"],well:[".step::before"]}),ei=16,yc=(e,t,a=S)=>{const o=ei,n=(s,p,l,c,g)=>`linear-gradient(${s}, ${s}) ${e} ${p}px ${t} ${l}px / ${c}px ${g}px no-repeat`,i=o/2-3;return[n(a.brassHi,i+2,i+2,2,2),n(a.brassDark,i,i,6,6),n(a.brassHi,1,1,o-2,2),n(a.brassHi,1,1,2,o-2),n(a.brassLo,1,o-3,o-2,2),n(a.brassLo,o-3,1,2,o-2),n(a.brass,1,1,o-2,o-2),n(a.outline,0,0,o,o)]};function $c(e=kc,t=S){const a=[...e.button,...e.primary],o=[["left","top"],["right","top"],["left","bottom"],["right","bottom"]].flatMap(([n,i])=>yc(n,i,t));return`/* ── PLUS-SITE: THE STONE-AND-BRASS KIT (ui/enhancedFrame.js siteKitCss), the game's tones ── */
/* WINDOW - carved stone: the bevel lit from the top left, the outline, the engraved line inside, the hard drop */
${w(e.window)} {
  border-color: ${t.stoneHi} ${t.stoneDim} ${t.stoneDark} ${t.stoneLit};
  background: ${Jt}, ${t.ground};
  box-shadow: 0 0 0 1px ${t.outline}, 0 0 0 3px ${t.stoneLo}, 0 0 0 4px ${t.outline}, inset 0 0 0 1px ${t.outline},
    inset 0 0 0 2px #16140f, 6px 6px 0 4px rgba(0,0,0,0.42); }
/* ...and its brass fittings, one at each corner, standing over the stone as the game's do */
${w(e.window,"::before")} {
  content: ''; position: absolute; inset: -${ei/2+2}px; pointer-events: none;
  background: ${o.join(`,
    `)}; }
/* HEADER - the band that names a window: a lit ground over a groove */
${w(e.header)} {
  background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0) 70%);
  box-shadow: 0 2px 0 ${t.outline}, 0 3px 0 ${t.groove}; }
/* PANEL - a box inside a window: a stone bevel and an engraved inner line */
${w(e.panel)} {
  border-color: ${Fe};
  background-color: ${t.groundPanel};
  box-shadow: ${X}, inset 0 0 0 1px rgba(5,6,8,0.75), inset 0 3px 0 -1px rgba(255,255,255,0.04), 3px 3px 0 1px rgba(0,0,0,0.4); }
/* BUTTON + PRIMARY - raised; brass under the pointer and the keyboard; sunk while held */
${w(a)} {
  border-color: ${Fe};
  background-color: ${t.groundButton}; background-image: ${De};
  box-shadow: ${X}, 2px 2px 0 1px rgba(0,0,0,0.45); }
${w(e.primary)} { border-color: ${ze}; background-color: #2a2217; }
${w(a,":hover")},
${w(a,":focus-visible")} { border-color: ${ze}; background-color: ${t.groundButtonHi}; background-image: ${De}; }
${w(e.primary,":hover")}, ${w(e.primary,":focus-visible")} { background-color: #3a2e1c; }
${w(a,":active")} { border-color: ${ft}; translate: 1px 1px; box-shadow: ${X}, inset 2px 2px 0 rgba(0,0,0,0.5); }
/* WELL - sunk into the surface */
${w(e.well)} { border-color: ${ft}; background-color: rgba(4,5,7,0.7); box-shadow: ${X}, inset 2px 2px 0 rgba(0,0,0,0.5); }
@media (prefers-reduced-motion: reduce) { ${w(a,":active")} { translate: none; } }
`}$c();const jt=[".rest-shell .px-body > .card"],Tc=[".px-sys .acts",".px-win .card .acts",".pack-shell .acts",".sb-shell .sb-acts",".cr-shell .sb-acts",".hmacts",".lv-acts"],Ec=[".px-sys .act",".px-win .card .act",".pack-shell .act",".sb-shell .sb-acts .act",".cr-shell .sb-acts .act",".hmroot .act:not(.hmtool)",".lv-ok",".talk-head .act",".talk-say .act"],Sc=`
/* ── LAYOUT1: BUTTON ROWS (ui/enhancedFrame.js) ─────────────────── */
${w(Tc)} { justify-content: center; gap: 10px; }
${w(Ec)} { min-width: 104px; text-align: center; justify-content: center; }

/* ONE PANE - a window whose body is a single card (the rest window: the choice, the
   hours, the sleep, the wake-up) is ONE frame. The card draws no box of its own
   inside the window's, so it is not a screen in a screen. */
${w(jt)} { border: 0; background: none; box-shadow: none; outline: none; margin: 0; padding: 18px 22px 16px; }
${w(jt.map(e=>`${e}.wake`))} { text-align: center; }
${w(jt.map(e=>`${e}.wake p`))} { font-size: 18px; margin: 4px 0 14px; }
${w(jt.map(e=>`${e} .acts`))} { justify-content: center; }
`,Ic=`
/* ── DLG1: THE DECISION BOX (ui/enhancedDialog.js) ───────────────── */
.dlg-shell { position: fixed; inset: 0; z-index: 38; display: flex; align-items: center; justify-content: center;
  padding: 24px; background: rgba(5,6,8,0.5); font-family: ${M};
  -webkit-font-smoothing: none; font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0;
  color: #d8cfae; }
.dlg-shell .dlg-win.px-win { width: auto; height: auto; min-width: min(340px, 92vw); max-width: min(560px, 92vw);
  max-height: 80dvh; }
.dlg-body { padding: 22px 28px 18px; overflow-y: auto; display: flex; flex-direction: column; gap: 2px;
  text-align: center; }
.dlg-row { margin: 0; font-size: 17px; line-height: 1.45; text-shadow: 2px 2px 0 rgba(0,0,0,0.85);
  overflow-wrap: anywhere; }
.dlg-row.hl { color: rgb(219,130,40); }
.dlg-row .dlg-cell + .dlg-cell { margin-left: 18px; }
.dlg-acts { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; padding: 12px 20px 14px;
  border-top: 2px solid rgba(125,116,96,0.55); }
.dlg-btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  min-width: 112px; min-height: 44px; padding: 6px 18px; border: 2px solid rgba(125,116,96,0.55);
  font: inherit; font-size: 16px; letter-spacing: 0.16em; text-indent: 0.16em; text-transform: uppercase;
  color: #d8cfae; cursor: pointer; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.dlg-btn:hover, .dlg-btn:focus-visible, .dlg-btn.primary { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.dlg-key { display: inline-flex; align-items: center; justify-content: center; min-width: 20px; height: 20px;
  padding: 0 4px; font-size: 12px; letter-spacing: 0; text-indent: 0; color: #0e1013; text-shadow: none;
  background: #c9bfa4; box-shadow: inset -2px -2px 0 #7a7260, inset 2px 2px 0 #efe8d6, 0 0 0 1px #050608; }
.dlg-btn.primary .dlg-key { background: #e2b064; box-shadow: inset -2px -2px 0 #7a5424, inset 2px 2px 0 #f3cf86, 0 0 0 1px #050608; }
`,Oc=`
/* ── PORT5: THE PORTED WINDOWS ─────────────────────────────────────── */
.port-host { position: fixed; inset: 0; z-index: 13; font-family: ${M};
  -webkit-font-smoothing: none; font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0; color: #d8cfae; }
.port-shell { display: flex; align-items: center; justify-content: center; padding: 24px; }
.port-win.px-win { width: min(640px, 94vw); height: auto; max-height: min(92dvh, 780px); display: flex; flex-direction: column; }
.port-win.size-narrow { width: min(420px, 94vw); }
.port-win.size-wide { width: min(1000px, 96vw); }
.port-inner { display: flex; flex-direction: column; min-height: 0; flex: 1; }
.port-head { padding: 12px 18px 10px; text-align: center; border-bottom: 2px solid rgba(125,116,96,0.55); }
.port-title { margin: 0; font: inherit; font-size: 20px; letter-spacing: 0.18em; text-indent: 0.18em; text-transform: uppercase;
  color: #efe8d6; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.port-sub { display: block; margin-top: 4px; font-size: 13px; letter-spacing: 0.1em; color: #8f8670; }
.port-body { flex: 1; min-height: 0; overflow-y: auto; padding: 16px 20px; display: flex; flex-direction: column; gap: 14px; }
.port-foot { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; padding: 12px 18px 14px;
  border-top: 2px solid rgba(125,116,96,0.55); }

.port-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-width: 104px; min-height: 40px;
  padding: 6px 16px; border: 2px solid rgba(125,116,96,0.55); font: inherit; font-size: 15px; letter-spacing: 0.14em;
  text-indent: 0.14em; text-transform: uppercase; color: #d8cfae; cursor: pointer; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.port-btn:hover, .port-btn.primary, .port-btn.on { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.port-btn:disabled { color: #5e5848; text-shadow: none; cursor: default; }
.port-actions { display: flex; gap: 8px; }
.port-actions.column { flex-direction: column; }
.port-actions.column .port-btn { width: 100%; }
.port-actions.row { justify-content: center; flex-wrap: wrap; }

.port-stats { margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 4px 20px; }
.port-stat { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; padding: 5px 2px;
  border-bottom: 2px solid rgba(125,116,96,0.3); }
.port-stat dt { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #8f8670; }
.port-stat dd { margin: 0; font-size: 16px; color: #efe8d6; font-variant-numeric: tabular-nums; }
.port-stat.warn dd { color: #e0584a; }
.port-heading { margin: 0 0 8px; font: inherit; font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; color: #a89f88; }

.port-cols { display: grid; grid-template-columns: var(--port-cols); gap: 18px; align-items: start; }
.port-col, .port-group { display: flex; flex-direction: column; gap: 10px; min-width: 0; }
.port-group.port-card { padding: 12px; border: 2px solid rgba(125,116,96,0.55); }

.port-tiles { display: grid; grid-template-columns: repeat(auto-fill, 58px); gap: 6px; overflow-y: auto; padding: 4px; }
.port-tiles.list { grid-template-columns: 1fr; }
.port-tile { position: relative; width: 58px; height: 58px; display: flex; align-items: center; justify-content: center;
  padding: 0; border: 2px solid rgba(125,116,96,0.45); background: rgba(10,12,17,0.6); font: inherit; color: #c5bda2; cursor: pointer; }
.port-tiles.list .port-tile { width: auto; height: auto; min-height: 54px; justify-content: flex-start; gap: 10px; padding: 4px 12px 4px 4px; }
.port-tile.off { opacity: 0.45; cursor: default; }
.port-pic { width: 42px; height: 42px; flex: 0 0 auto; display: flex; align-items: center; justify-content: center; font-size: 14px; }
.port-pic img { max-width: 100%; max-height: 100%; image-rendering: pixelated; }
.port-badge { position: absolute; right: 3px; bottom: 1px; font-size: 11px; color: #e2b064; text-shadow: 1px 1px 0 #050608; }
.port-tilewords { display: flex; flex-direction: column; text-align: left; gap: 2px; }
.port-tilename { font-size: 15px; }
.port-tilesub { font-size: 12px; color: #8f8670; }

.port-rows { display: flex; flex-direction: column; overflow-y: auto; }
.port-row { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 38px; padding: 4px 10px; border: 0;
  border-bottom: 2px solid rgba(125,116,96,0.25); background: none; font: inherit; font-size: 15px; color: #d8cfae; text-align: left;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
button.port-row { cursor: pointer; }
.port-rowmark { font-size: 11px; color: rgb(243,239,44); visibility: hidden; }
button.port-row:hover, .port-row.on { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
button.port-row:hover .port-rowmark, .port-row.on .port-rowmark { visibility: visible; }
.port-row.muted { color: #9c937d; }
.port-rowwords { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.port-rowsub { font-size: 12px; color: #8f8670; text-shadow: none; }
.port-rowvalue { margin-left: auto; }
.port-empty { margin: 6px 4px; font-size: 14px; color: #9c937d; grid-column: 1 / -1; }

.port-fieldrow { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.port-fieldlabel { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #8f8670; }
.port-field { flex: 1; min-width: 150px; min-height: 38px; display: flex; align-items: center; padding: 4px 10px;
  border: 2px solid rgba(125,116,96,0.55); font-size: 17px; color: #efe8d6; }
.port-fieldvalue:empty::before { content: attr(data-empty); }
.port-caret { color: rgb(243,239,44); animation: port-caret 1s steps(1, end) infinite; }
@keyframes port-caret { 50% { opacity: 0; } }

.port-chiprow { display: flex; flex-direction: column; gap: 6px; }
.port-chiplabel { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #8f8670; }
.port-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.port-btn.port-chip { min-width: 0; min-height: 34px; padding: 4px 10px; font-size: 13px; letter-spacing: 0.06em; text-indent: 0; text-transform: none; }

.port-group.port-spins { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 6px 16px; }
.port-group.port-spins > .port-heading { grid-column: 1 / -1; margin-bottom: 0; }
.port-spin { display: grid; grid-template-columns: minmax(0, 1fr) 36px 52px 36px; align-items: center; gap: 6px; }
.port-spin.off { opacity: 0.4; }
.port-spinlabel { font-size: 13px; color: #a89f88; }
.port-btn.port-spinbtn { min-width: 36px; min-height: 32px; padding: 0; text-indent: 0; letter-spacing: 0; font-size: 18px; }
.port-spinvalue { text-align: center; font-size: 17px; font-variant-numeric: tabular-nums; color: #efe8d6; }
/* HOLD-STEP: the value is a field - type a number, Enter (or leave it) to set it; and a held button is a hold, never a
   scroll a finger started */
.port-spinfield { width: 100%; min-width: 0; box-sizing: border-box; padding: 3px 0; font: inherit; font-size: 17px;
  background: rgba(0,0,0,0.35); border: 1px solid rgba(125,116,96,0.55); border-radius: 0; }
.port-spinfield:focus { outline: none; border-color: rgb(243,239,44); }
.port-btn.port-spinbtn { touch-action: none; user-select: none; -webkit-user-select: none; }

.port-screen { display: flex; justify-content: center; }
.port-canvas { width: min(640px, 100%); aspect-ratio: 320 / 200; image-rendering: pixelated; background: #000;
  border: 2px solid rgba(125,116,96,0.55); }
.port-text p { margin: 0; font-size: 17px; line-height: 1.5; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.port-text.center { text-align: center; }
.port-picture { display: flex; justify-content: center; }
.port-picture img { width: 48px; height: 48px; image-rendering: pixelated; border: 2px solid rgba(125,116,96,0.55); }
.port-pictureword { min-width: 48px; min-height: 48px; display: flex; align-items: center; justify-content: center; border: 2px solid rgba(125,116,96,0.55); }
.port-icongrid { display: grid; grid-template-columns: repeat(auto-fill, 46px); gap: 6px; max-height: 56dvh; overflow-y: auto; padding: 4px; }
.port-iconcell { width: 46px; height: 46px; display: flex; align-items: center; justify-content: center; padding: 0;
  border: 2px solid rgba(125,116,96,0.45); background: rgba(10,12,17,0.6); cursor: pointer; font: inherit; color: #8f8670; }
.port-iconcell img { width: 32px; height: 32px; image-rendering: pixelated; }
@media (max-width: 760px) { .port-cols { grid-template-columns: 1fr; } }

/* ── PORT5: THE ENHANCED LIST ───────────────────────────────────── */
.pick-shell .pick-win.px-win { width: min(460px, 92vw); max-height: min(80dvh, 640px); display: flex; flex-direction: column; }
.pick-list { flex: 1; min-height: 0; overflow-y: auto; padding: 8px 6px; display: flex; flex-direction: column; }
.pick-row { display: flex; align-items: center; gap: 10px; min-height: 38px; padding: 4px 12px; border: 0; background: none;
  font: inherit; font-size: 16px; color: #d8cfae; text-align: left; cursor: pointer; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.pick-mark { font-size: 11px; color: rgb(243,239,44); visibility: hidden; }
.pick-row:hover, .pick-row.on { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.pick-row:hover .pick-mark, .pick-row.on .pick-mark { visibility: visible; }
.pick-num { margin-left: auto; font-size: 11px; color: #9c937d; text-shadow: none; }
`;`${f.stoneLit}${f.stoneDim}${f.stoneDark}${f.stoneMid}`;`${f.brassHi}${f.brassLo}${f.brass}`;const Ac=`
/* ── LV2: THE ASCEND SCREEN (ui/levelUpStyle.js) ─────────────────── */
/* PLUS2c: the sky stays a sky under every colour. A Plus theme dims (or, textured, hides
   outright) the same .px-ground the rest of the enhanced skin uses as a backdrop behind its
   windows, which read fine dimmed since a window's own ground sits over it. The Ascend screen has
   no window ground of its own - the sky IS the screen - so that dimming reads as "the stars went
   missing" the moment a theme other than Slate is picked. The root also wears \`.px-home\`
   (ui/enhancedLevelUp.js's \`el('div', 'px-home lv-sky')\`), so keying on both lifts this to FOUR
   classes of specificity against the theme rule's three (:root[attr] + .px-ground) - it wins by
   weight, not by injection order, and needs no !important. */
:root .px-home.lv-sky .px-ground { opacity: 1; }
.lv-sky .lv-crown, .lv-sky .lv-foot {
  background: linear-gradient(180deg, rgba(24,27,34,0.92), rgba(12,14,18,0.9)); }
.lv-sky .lv-crown { box-shadow: 0 1px 0 ${f.groove}, 0 4px 0 rgba(0,0,0,0.35); }
.lv-sky .lv-foot { box-shadow: inset 0 1px 0 ${f.groove}, 0 -4px 0 rgba(0,0,0,0.25); }

/* the pool: a brass plaque */
/* bevels drawn as inset shadows, so no plaque adds a pixel to its band */
.lv-plate .lv-count { display: inline-block; min-width: 64px; padding: 0 14px; background: rgba(20,16,10,0.88);
  box-shadow: 0 0 0 1px ${f.outline}, inset 2px 2px 0 ${f.brassHi}, inset -2px -2px 0 #5c3f1a, 3px 3px 0 1px rgba(0,0,0,0.45); }
.lv-plate.spent .lv-count { background: rgba(12,14,18,0.88);
  box-shadow: 0 0 0 1px ${f.outline}, inset 2px 2px 0 ${f.stoneLit}, inset -2px -2px 0 ${f.stoneDark}, 3px 3px 0 1px rgba(0,0,0,0.45); }

/* a star: the gem, the name and its value - plain numbers, no plaque */
.lv-star .lv-gem { display: inline-block; }
.lv-star .lv-val { display: inline-block; }
.lv-star.raised .lv-val { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }

/* the chosen attribute, under the figure */
.lv-choice .lv-pickname { padding: 0 14px; background: rgba(12,14,18,0.8);
  box-shadow: 0 0 0 1px ${f.outline}, inset 2px 2px 0 ${f.stoneLit}, inset -2px -2px 0 ${f.stoneDark}; }
.lv-plate .lv-howto { position: absolute; right: 26px; top: 50%; transform: translateY(-50%); max-width: 250px; margin: 0;
  font-size: 12px; line-height: 1.5; text-align: right; color: #8f8670; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
@media (max-width: 900px) { .lv-plate .lv-howto { display: none; } }

/* the ribbon: a sunk channel */
.lv-sky .lv-ribbonwrap { background: rgba(0,0,0,0.3); border-top-color: ${f.outline};
  box-shadow: inset 0 2px 0 rgba(0,0,0,0.45), 0 -1px 0 ${f.groove}; }

/* ── LV2: WHAT A CLICK LEAVES ──────────────────────────────────── */
@keyframes lv-pick { 0% { transform: scale(1.6); } 50% { transform: scale(1.25); } 100% { transform: scale(1); } }
@keyframes lv-flash { 0% { transform: scale(1.9); color: #fffbe0; } 40% { transform: scale(1.4); } 100% { transform: scale(1); } }
@keyframes lv-dim { 0% { transform: scale(0.6); opacity: 0.5; } 100% { transform: scale(1); } }
@keyframes lv-shake { 0%, 100% { translate: 0 0; } 25% { translate: -3px 0; } 50% { translate: 3px 0; } 75% { translate: -2px 0; } }
@keyframes lv-rise { 0% { transform: translate(-50%, 0); opacity: 1; } 70% { opacity: 1; } 100% { transform: translate(-50%, -26px); opacity: 0; } }
@keyframes lv-fall { 0% { transform: translate(-50%, 0); opacity: 1; } 70% { opacity: 1; } 100% { transform: translate(-50%, 20px); opacity: 0; } }
.lv-star.fx-pick .lv-gem { animation: lv-pick 240ms steps(3, end); }
.lv-star.fx-up .lv-gem { animation: lv-flash 320ms steps(4, end); }
.lv-star.fx-down .lv-gem { animation: lv-dim 260ms steps(3, end); }
.lv-star.fx-no .lv-val { animation: lv-shake 240ms steps(4, end); }
.lv-pop { position: absolute; left: 50%; top: 0; pointer-events: none; font-size: 16px; line-height: 1;
  letter-spacing: 0; text-indent: 0; }
.lv-pop.up { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); animation: lv-rise 640ms steps(8, end) forwards; }
.lv-pop.down { color: #e0584a; text-shadow: 2px 2px 0 #3a0f0b; top: auto; bottom: 0; animation: lv-fall 560ms steps(7, end) forwards; }
@media (prefers-reduced-motion: reduce) {
  .lv-star.fx-pick .lv-gem, .lv-star.fx-up .lv-gem, .lv-star.fx-down .lv-gem, .lv-star.fx-no .lv-val { animation: none; }
  .lv-pop { display: none; }
}
`,zc=[".px-win",".pack-win",".loot-win",".px-about",".px-profile",".px-support",".hmbox",".inputbox",".dlg-win"],Fa=240,Ba=180,ar=zc.join(", "),Pe=24,Rc=`
/* ── WM1: WINDOWS UNFOLD AND FOLD (ui/windowMotion.js) ───────────── */
@keyframes wm-unfold {
  0%   { clip-path: inset(50% -${Pe}px 50% -${Pe}px); filter: brightness(1.9); }
  35%  { filter: brightness(1.25); }
  100% { clip-path: inset(-${Pe}px); filter: brightness(1); }
}
@keyframes wm-fold {
  0%   { clip-path: inset(-${Pe}px); filter: brightness(1); opacity: 1; }
  45%  { filter: brightness(1.3); opacity: 1; }
  100% { clip-path: inset(50% -${Pe}px 50% -${Pe}px); filter: brightness(1.9); opacity: 0.2; }
}
@keyframes wm-fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes wm-fade-out { from { opacity: 1; } to { opacity: 0; } }
.wm-host-in { animation: wm-fade-in ${Fa-60}ms ease-out both; }
.wm-in { animation: wm-unfold ${Fa}ms steps(8, end) both; }
.wm-ghost { pointer-events: none !important; z-index: 39 !important; }   /* under the asset picker (dataSource.js ASSET_PICKER_Z, MWFIX 1) */
.wm-ghost.wm-host-out { animation: wm-fade-out ${Ba}ms ease-in both; }
.wm-ghost .wm-out, .wm-ghost.wm-out { animation: wm-fold ${Ba}ms steps(6, end) both; }
@media (prefers-reduced-motion: reduce) {
  .wm-in, .wm-ghost .wm-out, .wm-ghost.wm-out { animation: none; }
  .wm-host-in { animation-duration: 120ms; }
  .wm-ghost.wm-host-out { animation-duration: 100ms; }
}
`;function Nc(e=globalThis){const t=e.location?.search??"";return Ma("nomotion",t)?!1:Ma("motion",t)?!0:!e.navigator?.webdriver}const St=e=>e?.nodeType!==1?[]:(e.matches?.(ar)?[e]:[]).concat([...e.querySelectorAll?.(ar)??[]]),Ut=e=>St(e)[0]?.className??"",ti=new WeakMap;let ya=null,Lc=0;const Dc=["fill","stroke","clip-path","mask","filter","marker-start","marker-mid","marker-end","style"];function Mc(e,t){const a=new Map;for(const n of e)n.id&&(a.set(n.id,n.id+t),n.id+=t);if(!a.size)return a;const o=n=>n.replace(/url\(#([^)]+)\)/g,(i,s)=>a.has(s)?`url(#${a.get(s)})`:i);for(const n of e){for(const s of Dc){const p=n.getAttribute?.(s);p&&p.includes("url(#")&&n.setAttribute(s,o(p))}const i=n.getAttribute?.("href");i?.startsWith("#")&&a.has(i.slice(1))&&n.setAttribute("href",`#${a.get(i.slice(1))}`)}return a}function Hc(e,t){const a=e.cloneNode(!0),o=[e,...e.querySelectorAll("*")],n=[a,...a.querySelectorAll("*")],i=[];for(let p=0;p<o.length&&p<n.length;p++){if(o[p].tagName==="CANVAS"&&o[p].width&&o[p].height)try{n[p].getContext("2d")?.drawImage(o[p],0,0)}catch{}const l=ti.get(o[p]);l&&i.push([n[p],l])}Mc(n,`-wm-ghost${++Lc}`),a.classList.add("wm-ghost","wm-host-out"),a.setAttribute("aria-hidden","true"),a.inert=!0;for(const p of St(a))p.classList.add("wm-out");t.body.append(a);for(const[p,l]of i)p.scrollTop=l.top,p.scrollLeft=l.left;setTimeout(()=>{try{a.remove()}catch{}},Ba+60)}function Cc(e){e.classList.add("wm-host-in");const t=St(e);for(const a of t)a.classList.add("wm-in");setTimeout(()=>{e.classList.remove("wm-host-in");for(const a of t)a.classList.remove("wm-in")},Fa+60)}function jc(e=globalThis.document){const t=(e?.defaultView??globalThis).MutationObserver;!e?.body||ya||typeof t!="function"||Nc(e.defaultView??globalThis)&&(e.addEventListener("scroll",a=>{const o=a.target;o?.nodeType===1&&ti.set(o,{top:o.scrollTop,left:o.scrollLeft})},{capture:!0,passive:!0}),ya=new t(a=>{const o=[],n=[];for(const p of a){for(const l of p.addedNodes)St(l).length&&!l.classList?.contains("wm-ghost")&&o.push(l);for(const l of p.removedNodes)St(l).length&&!l.classList?.contains("wm-ghost")&&n.push(l)}const i=new Set(o.map(Ut)),s=new Set(n.map(Ut));for(const p of n)!i.has(Ut(p))&&!p.isConnected&&Hc(p,e);for(const p of o)!s.has(Ut(p))&&p.isConnected&&Cc(p)}),ya.observe(e.body,{childList:!0}))}const Uc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges"><path fill="currentColor" fill-rule="evenodd" d="M6 1H10V2H12V3H13V5H14V11H13V13H12V14H10V15H6V14H4V13H3V11H2V5H3V3H4V2H6ZM6 3V4H5V5H4V11H5V12H6V13H10V12H11V11H12V5H11V4H10V3Z"/><rect fill="currentColor" x="7" y="4" width="2" height="8"/><rect fill="currentColor" x="4" y="7" width="8" height="2"/><rect fill="currentColor" x="6" y="6" width="4" height="4"/></svg>',ai=Uc.replace('viewBox="0 0 16 16"','viewBox="-1 -1 18 18"').replace('<path fill="currentColor"','<g fill="#72f0d8" stroke="#050608" stroke-width="2" paint-order="stroke"><path').replaceAll('<rect fill="currentColor"',"<rect").replace("</svg>","</g></svg>"),oi=`url("data:image/svg+xml;utf8,${encodeURIComponent(ai)}")`,or=new Map;function Pc(e){const t=String(e??"").toLowerCase();if(!/^#[0-9a-f]{6}$/.test(t))return oi;let a=or.get(t);return a||(a=`url("data:image/svg+xml;utf8,${encodeURIComponent(ai.replace("#72f0d8",t))}")`,or.set(t,a)),a}const Ub=e=>Pc(e).slice(5,-2),I="var(--hud-scale, 1)",v=".prof-meter.prof-reticle",qc=`drop-shadow(0 0 1px ${f.outline}) drop-shadow(0 0 1px ${f.outline})`,_c="#8fc9de",Pt="#e0875a",Gc=`/* ── PROF-RETICLE: the act on the crosshair ── */
${v} { position: fixed; left: var(--rx, 50%); top: var(--ry, 50%); transform: translate(-50%, -50%); z-index: 12;
  width: calc(150px * ${I}); height: calc(140px * ${I}); padding: 0; margin: 0; background: none; border: 0; box-shadow: none;
  pointer-events: none; font-family: ${M}; -webkit-font-smoothing: none; font-variant-ligatures: none;
  font-feature-settings: 'liga' 0, 'clig' 0; font-size: calc(11px * ${I}); color: #efe0b8; text-align: center;
  text-shadow: 1px 1px 0 ${f.outline}, -1px 1px 0 ${f.outline}, 1px -1px 0 ${f.outline}, -1px -1px 0 ${f.outline}; }
${v}[hidden] { display: none; }
${v} .prof-rc { position: absolute; left: 50%; top: 50%; width: 0; height: 0; }
${v} svg { position: absolute; left: 0; top: 0; overflow: visible; filter: ${qc}; }

/* under the crosshair: the count, the hint */
${v} .prof-under { position: absolute; left: 0; top: calc(20px * ${I}); transform: translateX(-50%); display: flex; flex-direction: column;
  align-items: center; gap: calc(3px * ${I}); white-space: nowrap; }
${v} .prof-under:empty { display: none; }
${v} .prof-pips { display: flex; justify-content: center; gap: calc(4px * ${I}); }
${v} .prof-pip, ${v} .prof-slot { width: calc(6px * ${I}); height: calc(6px * ${I}); transform: rotate(45deg); background: rgba(5,6,8,0.55);
  box-shadow: 0 0 0 1px ${f.outline}, inset 0 0 0 1px ${f.stoneMid}; }
${v} .prof-pip.on, ${v} .prof-slot.found { background: ${f.brass}; box-shadow: 0 0 0 1px ${f.outline}, inset 0 0 0 1px ${f.brassHi}; }
${v} .prof-slot.missed { background: #5a2a20; box-shadow: 0 0 0 1px ${f.outline}, inset 0 0 0 1px #8a4a3a; }
${v} .prof-slot.next { box-shadow: 0 0 0 1px ${f.outline}, inset 0 0 0 1px ${f.brassHi}; }
${v} .prof-slips { color: ${Pt}; font-size: calc(11px * ${I}); }
${v} .prof-slips:empty { display: none; }
${v} .prof-hint { position: absolute; left: 0; top: calc(34px * ${I}); transform: translateX(-50%); margin: 0; width: max-content;
  max-width: min(86vw, calc(330px * ${I})); white-space: normal; line-height: 1.3; color: #efe0b8; opacity: 1; transition: opacity 0.6s; }
${v} .prof-hint.faded { opacity: 0; }
${v}.fish-tug .prof-hint { color: ${f.brassHi}; }
${v}.bruised .prof-hint { color: ${Pt}; }

/* the marks: the face's points where they stand, the glint and the reach it counts in, the knife */
${v} .prof-face { position: absolute; left: 0; top: 0; width: 0; height: 0; margin: 0; overflow: visible; background: none; box-shadow: none; }
${v} .prof-point { position: absolute; width: calc(5px * ${I}); height: calc(5px * ${I}); aspect-ratio: auto; margin: calc(-2.5px * ${I}) 0 0 calc(-2.5px * ${I});
  border-radius: 50%; background: rgba(233,228,217,0.6); box-shadow: 0 0 0 1px ${f.outline}; }
${v} .prof-point.first { width: calc(7px * ${I}); height: calc(7px * ${I}); margin: calc(-3.5px * ${I}) 0 0 calc(-3.5px * ${I}); background: ${f.brassHi}; }
${v} .prof-glint { position: absolute; width: calc(9px * ${I}); height: calc(9px * ${I}); aspect-ratio: auto; margin: calc(-4.5px * ${I}) 0 0 calc(-4.5px * ${I});
  border-radius: 50%; background: #fff6d8; box-shadow: 0 0 0 1px ${f.outline}, 0 0 6px 2px rgba(243,207,134,0.75); animation: none; }
${v} .prof-glint::before { content: ''; position: absolute; left: 50%; top: 50%; width: 260%; height: 2px; transform: translate(-50%, -50%);
  background: linear-gradient(90deg, transparent, #fff6d8 40% 60%, transparent); animation: prof-twinkle 0.5s ease-in-out infinite alternate; }
${v} .prof-glint::after { content: ''; position: absolute; left: 50%; top: 50%; width: 2px; height: 260%; transform: translate(-50%, -50%);
  background: linear-gradient(180deg, transparent, #fff6d8 40% 60%, transparent); animation: prof-twinkle 0.5s ease-in-out infinite alternate-reverse; }
@keyframes prof-twinkle { from { opacity: 0.35; } to { opacity: 1; } }
${v} .prof-zone { display: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); box-sizing: border-box;
  border-radius: 50%; border: 1px dashed rgba(243,207,134,0.7); box-shadow: 0 0 0 1px rgba(5,6,8,0.35); }
${v} .prof-glint > .prof-zone, ${v} .prof-point.first > .prof-zone { display: block; }
${v} .prof-aim { position: absolute; left: 0; top: 0; width: calc(3px * ${I}); height: calc(3px * ${I}); aspect-ratio: auto;
  margin: calc(-1.5px * ${I}) 0 0 calc(-1.5px * ${I}); border: 0; background: ${f.brassHi}; box-shadow: 0 0 0 1px ${f.outline}; }
${v} .prof-aim::after { content: none; }

/* the knife's line: the tolerance it is scored in, the line through the points, the line drawn */
${v} .prof-line, ${v} .prof-tube { position: absolute; inset: auto; left: 0; top: 0; width: 1px; height: 1px; }
${v} .prof-tube { filter: none; }
${v} .trace-tube { fill: none; stroke: rgba(243,207,134,0.12); stroke-linecap: round; stroke-linejoin: round; }
${v} .prof-line .trace-guide { fill: none; stroke: rgba(239,224,184,0.75); stroke-width: calc(1px * ${I}); stroke-dasharray: 4 3; vector-effect: none; }
${v} .prof-line .trace-drawn { fill: none; stroke: ${f.brassHi}; stroke-width: calc(2px * ${I}); stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: none; }

/* the ring round the crosshair: the notch, the band, the ring closing */
${v} .prof-ring { width: calc(80px * ${I}); height: auto; aspect-ratio: 1; margin: 0; transform: translate(-50%, -50%); border-radius: 0; background: none; box-shadow: none; }
${v} .ring-notch { fill: none; stroke: rgba(233,228,217,0.8); stroke-width: 1.2; }
${v} .ring-band { fill: none; stroke: rgba(243,207,134,0.38); }
${v}.clean-cut .ring-band { stroke: rgba(243,207,134,0.8); }
${v} .ring-line { fill: none; stroke: #efe0b8; stroke-width: 1.4; }
${v} .ring-line.in-band { stroke: ${f.brassHi}; stroke-width: 2.2; }
${v} .prof-ringbar { position: absolute; left: 0; top: calc(11px * ${I}); width: calc(60px * ${I}); height: calc(5px * ${I}); margin: 0;
  transform: translateX(-50%); background: rgba(5,6,8,0.7); box-shadow: 0 0 0 1px ${f.outline}; }
${v} .prof-ringbar.in-band .prof-ringmark { background: ${f.brassHi}; }

/* the hold's arc, the throw's, the net's fill, the glint's time left */
${v} .prof-arc { height: auto; aspect-ratio: 1; transform: translate(-50%, -50%); }
${v} .arc-track { fill: none; stroke: rgba(5,6,8,0.3); stroke-width: 2.2; }
${v} .arc-fill { fill: none; stroke: ${f.brassHi}; stroke-width: 2.4; }
${v} .prof-hold.bruised .arc-fill { stroke: ${Pt}; }
${v} .prof-netfill .arc-fill { stroke: ${_c}; }
${v} .prof-glint .prof-arc { left: 50%; top: 50%; filter: none; }
${v} .prof-glintclock .arc-track { stroke: rgba(5,6,8,0.35); stroke-width: 1.6; }
${v} .prof-glintclock .arc-fill { stroke: rgba(243,207,134,0.9); stroke-width: 1.6; }

/* the water's: the throw's metres, the float, the tug's ring, the haul's bar beside the crosshair */
${v} .prof-rlabel { position: absolute; left: calc(26px * ${I}); top: 0; transform: translateY(-50%); white-space: nowrap; color: #efe0b8; }
${v} .prof-float { position: absolute; left: 0; top: calc(13px * ${I}); width: calc(6px * ${I}); height: calc(8px * ${I}); margin-left: calc(-3px * ${I});
  border-radius: 50% 50% 45% 45%; background: linear-gradient(180deg, #c8553f 0 45%, #efe0b8 45%); box-shadow: 0 0 0 1px ${f.outline};
  animation: prof-bob 0.9s ease-in-out infinite alternate; }
${v} .prof-float.school { box-shadow: 0 0 0 1px ${f.outline}, 0 0 0 calc(4px * ${I}) rgba(143,201,222,0.3); }
${v} .prof-float.dip { translate: 0 calc(3px * ${I}); animation: none; background: linear-gradient(180deg, ${f.brassHi} 0 45%, #efe0b8 45%); }
@keyframes prof-bob { from { translate: 0 -1px; } to { translate: 0 1px; } }
${v} .prof-tugring { position: absolute; left: 0; top: 0; width: calc(36px * ${I}); height: calc(36px * ${I}); margin: calc(-18px * ${I}) 0 0 calc(-18px * ${I});
  box-sizing: border-box; border-radius: 50%; border: 2px solid ${f.brassHi}; box-shadow: 0 0 0 1px ${f.outline}, 0 0 8px 2px rgba(243,207,134,0.6);
  animation: prof-tug 0.45s ease-out infinite; }
@keyframes prof-tug { from { opacity: 1; transform: scale(0.7); } to { opacity: 0.2; transform: scale(1.25); } }
${v} .prof-haulbar { position: absolute; left: calc(24px * ${I}); top: calc(-30px * ${I}); width: calc(7px * ${I}); height: calc(60px * ${I}); margin: 0;
  background: rgba(5,6,8,0.7); box-shadow: 0 0 0 1px ${f.outline}; }
${v} .prof-haulband { left: 0; right: 0; top: auto; background: rgba(120,190,220,0.45); box-shadow: inset 0 0 0 1px rgba(170,220,240,0.8); }
${v} .prof-haulbar.slipping .prof-haulband { background: rgba(224,135,90,0.4); box-shadow: inset 0 0 0 1px ${Pt}; }
${v} .prof-haulweight { left: calc(-3px * ${I}); right: calc(-3px * ${I}); top: auto; width: auto; height: 3px; margin: 0 0 -1.5px 0;
  background: #efe0b8; box-shadow: 0 0 0 1px ${f.outline}; }

/* a flash where a blow, a chop, a find or a slip lands */
${v} .prof-burst { position: absolute; left: 0; top: 0; width: calc(24px * ${I}); height: calc(24px * ${I}); margin: calc(-12px * ${I}) 0 0 calc(-12px * ${I});
  border-radius: 50%; pointer-events: none; opacity: 0; background: radial-gradient(circle, rgba(255,246,216,0.95) 0 18%, rgba(239,224,184,0.45) 36%, transparent 68%); }
${v} .prof-burst.gold { background: radial-gradient(circle, #fff6d8 0 18%, rgba(243,207,134,0.8) 38%, transparent 70%); }
${v} .prof-nick { background: radial-gradient(circle, rgba(245,189,180,0.95) 0 16%, rgba(224,135,90,0.5) 36%, transparent 66%); }
${v} .prof-burst.on.a { animation: prof-flash-a 0.42s ease-out forwards; }
${v} .prof-burst.on.b { animation: prof-flash-b 0.42s ease-out forwards; }
@keyframes prof-flash-a { from { opacity: 1; transform: scale(0.4); } to { opacity: 0; transform: scale(1.4); } }
@keyframes prof-flash-b { from { opacity: 1; transform: scale(0.4); } to { opacity: 0; transform: scale(1.4); } }

@media (prefers-reduced-motion: reduce) {
  ${v} .prof-glint::before, ${v} .prof-glint::after, ${v} .prof-float, ${v} .prof-tugring { animation: none; }
  ${v} .prof-burst.on.a, ${v} .prof-burst.on.b { animation: none; opacity: 0.85; }
  ${v} .prof-hint { transition: none; }
}
`,Fc=`/* ── PROF-STATIONS: the stations' acts, dressed ── */
.prof-craft { background: rgba(10,12,17,0.9); border: 2px solid #7d7460; box-shadow: 0 0 0 1px ${f.outline}, inset 0 0 0 1px rgba(0,0,0,0.55);
  font-family: ${M}; -webkit-font-smoothing: none; color: #d8cfae; text-shadow: 1px 1px 0 ${f.outline}; }
.prof-craft > b { color: #efe0b8; }
.prof-heatword { color: #d8cfae; }
.prof-heatbar { height: 14px; border: 0; margin: 4px 0;
  box-shadow: 0 0 0 1px ${f.outline}, 0 0 0 3px ${f.stoneLo}, 0 0 0 4px ${f.outline}, 0 0 calc(var(--heat) * 14px) rgba(246,160,60, calc(var(--heat) * 0.8)); }
.prof-heatband { top: -4px; bottom: -4px; border: 2px solid ${f.stoneHi}; box-shadow: 0 0 0 1px ${f.outline}, inset 0 0 0 1px ${f.outline}; }
.prof-heatbar.prof-inband .prof-heatband { border-color: ${f.brassHi}; box-shadow: 0 0 0 1px ${f.outline}, inset 0 0 0 1px ${f.outline}, 0 0 8px 1px rgba(243,207,134,0.8); }
.prof-heatmark { top: -6px; bottom: -6px; width: 3px; margin-left: -1.5px; background: #efe0b8; box-shadow: 0 0 0 1px ${f.outline}; }
.prof-strikes { gap: 7px; align-items: center; padding: 2px 3px; }
.prof-strike { display: inline-block; width: 8px; height: 8px; font-size: 0; color: transparent; text-shadow: none; transform: rotate(45deg);
  background: rgba(5,6,8,0.55); box-shadow: 0 0 0 1px ${f.outline}, inset 0 0 0 1px ${f.stoneMid}; }
.prof-strike.hit { color: transparent; background: ${f.brass}; box-shadow: 0 0 0 1px ${f.outline}, inset 0 0 0 1px ${f.brassHi}; }
.prof-strike.miss { color: transparent; background: #5a2a20; box-shadow: 0 0 0 1px ${f.outline}, inset 0 0 0 1px #8a4a3a; }
.prof-board { box-shadow: 0 0 0 1px ${f.outline}, 0 0 0 3px #7d7460, 0 0 0 4px ${f.outline}, inset 0 0 12px rgba(5,6,8,0.5); margin: 4px; }
.prof-trail { stroke: ${f.brassHi}; }
@media (prefers-reduced-motion: reduce) { .prof-heatbar { box-shadow: 0 0 0 1px ${f.outline}, 0 0 0 3px ${f.stoneLo}, 0 0 0 4px ${f.outline}; } }`,yo=Object.freeze({world:Object.freeze({light:"#f6f2ea",dark:"#24160a"}),region:Object.freeze({light:"#8fe28f",dark:"#194815"}),lang:Object.freeze({light:"#ffaad4",dark:"#76134e"}),party:Object.freeze({light:"#6fe6d4",dark:"#0a4641"}),guild:Object.freeze({light:"#d2b6ff",dark:"#4e1f8f"}),local:Object.freeze({light:"#c4beb2",dark:"#443e39"})}),qt=Object.freeze({other:Object.freeze({light:"#f4b86c",dark:"#7a170c"}),mine:Object.freeze({light:"#e8cf86",dark:"#563500"}),party:Object.freeze({light:"#73ff73",dark:"#0c491d"}),friend:Object.freeze({light:"#8fd0ff",dark:"#153d7c"})}),qe=Object.freeze({mention:Object.freeze({light:"#ffd35a",dark:"#4a2600"}),wash:Object.freeze({light:"rgba(255, 200, 70, 0.16)",dark:"rgba(214, 150, 20, 0.22)"}),bar:Object.freeze({light:"#ffc845",dark:"#a8620a"})}),Bc=":not(.system):not(.red):not(.dm):not(.ooc):not(.me):not(.roll)";function rr(e,t,a=!1){const o=a?" !important":"";return Object.entries(yo).map(([n,i])=>`${e} .dfchat-line[data-ch="${n}"]${Bc} .dfchat-text { color: ${i[t]}${o}; }`).join(`
`)}function nr(e,t,a=!1){const o=a?" !important":"";return Object.entries(yo).map(([n,i])=>`${e} :is(.dfchat-tab, .dfchat-chan)[data-tab="${n}"]::before { background: ${i[t]}${o}; }`).join(`
`)}const Wa=(e,t=globalThis.document)=>new URL(`art/${e}`,ao??t?.baseURI??"http://localhost/").href,ri=go.grimoire,me=e=>tt(ri,`Img/${e}.IMG.png`),Wc="grimoire-desk.jpg",Kc=(e=globalThis.document)=>Wa(Wc,e),Vc=()=>tt(ri,"Fonts/FONT0003-SDF.ttf"),ea=3,Ka=Object.freeze({page:Object.freeze({img:"TALK01I0",box:[576,207,354,369],make:"tile"}),scroll:Object.freeze({img:"LGBK00I0",box:[72,93,816,414],make:"tile"}),wood:Object.freeze({img:"INFO01I0",box:[0,0,618,420],make:"tile"}),tear:Object.freeze({img:"TALK01I0",box:[552,177,399,420],make:"tear"}),cubby:Object.freeze({img:"INVE00I0",box:[513,144,156,117],make:"plain"}),stone:Object.freeze({img:"INVE00I0",box:[159,39,312,540],make:"tile"}),exit:Object.freeze({img:"INVE00I0",box:[666,534,117,66],make:"plain"}),book:Object.freeze({img:"BIOG00I0",box:[63,195,777,402],make:"plain",clarity:Object.freeze([[1,.9,7],[.6,.45,6]]),contrast:1.03}),desk:Object.freeze({img:"BIOG00I0",box:[0,0,960,600],make:"plain",clarity:Object.freeze([[1,1.2,7],[.6,.6,6]]),contrast:1.05}),pick:Object.freeze({img:"PICK00I0",box:[33,33,495,318],make:"plain"}),plate:Object.freeze({img:"INVE00I0",box:[0,0,275,28],make:"plate",crisp:!1}),rule:Object.freeze({img:"SPBK00I0",box:[426,117,312,7],make:"pack",crisp:!1}),compBox:Object.freeze({img:"COMPBOX",box:[0,0,207,51],make:"plain",crisp:!1}),compass:Object.freeze({img:"COMPASS",box:[0,0,966,42],make:"plain",crisp:!1}),spbk:Object.freeze({img:"SPBK00I0",box:[0,0,777,492],make:"spbk",crisp:!1}),sideScroll:Object.freeze({img:"REPR01I0",box:[0,0,390,153],make:"plain"}),scrollMid:Object.freeze({img:"PICK00I0",box:[120,99,360,180],make:"plain"}),vialFatigue:Object.freeze({img:"MAIN03I0",box:[0,0,32,256],make:"vial",crisp:!1}),vialHealth:Object.freeze({img:"MAIN04I0",box:[0,0,32,256],make:"vial",crisp:!1}),vialMagicka:Object.freeze({img:"MAIN05I0",box:[0,0,32,256],make:"vial",crisp:!1})}),Xc=Object.freeze({TALK01I0:[960,600],LGBK00I0:[960,600],INFO01I0:[960,600],INVE00I0:[960,600],PICK00I0:[600,384],MAIN03I0:[32,256],MAIN04I0:[32,256],MAIN05I0:[32,256],COMPBOX:[207,51],COMPASS:[966,42],BIOG00I0:[960,600],REPR01I0:[390,153],SPBK00I0:[777,492],MAP100I0:[1200,750],OPTN00I0:[572,322]}),Yc="grimoire-wood.jpg",ct=Object.freeze([100,189]),Qc=e=>{if(e==="wood")return[...ct];const t=Ka[e].box;return[Math.ceil(t[2]/ea),Math.ceil(t[3]/ea)]},ve=Object.freeze({margin:4,band:13}),ir=Object.freeze({lo:70,hi:120}),Zc=.55,we=Object.freeze({top:8,bottom:8,outer:8,gutter:26}),$a=130,ni=Object.freeze({top:4,side:5,bottom:4}),Jc=Object.freeze([Object.freeze({box:[10,444,340,38],from:[404,442]}),Object.freeze({box:[400,444,240,38],from:[404,442]})]),eh=Object.freeze([Object.freeze({box:[118,2,86,20],from:[22,42]})]);function sr(e,t,a){const o=C(t),n=o.getImageData(0,0,t.width,t.height),i=n.data,s=t.width,p=new Uint8ClampedArray(i);for(const{box:[l,c,g,m],from:[b,x]}of a){const u=x-b;for(let T=c;T<c+m;T++){const y=(T-c)%(2*u),A=b+(y<u?y:2*u-1-y);for(let D=l;D<l+g;D++){const H=Math.min(1,Math.min(D-l,l+g-1-D)/6,Math.min(T-c,c+m-1-T)/4),G=(T*s+D)*4,q=(A*s+D)*4;for(let Q=0;Q<3;Q++)i[G+Q]=Math.round(p[q+Q]*H+p[G+Q]*(1-H))}}}return o.putImageData(n,0,0),t}const ta=e=>`--grim-${e}`;function th(e,t,a=1){const o=Math.max(2,Math.min(8,Math.round(Math.min(e/480,t/300)))),n=Math.max(2,Math.round(3*a)),i=Math.max(1,Math.round(2*a)),s=Math.max(1,Math.round(a)),p=Math.max(2,Math.ceil(Math.max(e/320,t/200))),l=Math.max(2,Math.floor(Math.min(e/320,t/200)));return{gp:n,gq:i,gk:s,gs:o,cover:p,fit:l}}const ah=(e,t)=>Math.max(1,Math.min(e/320,t/200));let lr=null;function oh(e=globalThis.document){const t=e?.defaultView,a=e?.documentElement;if(!t||!a?.style)return null;const o=()=>{const n=t.devicePixelRatio||1,i=th(t.innerWidth*n,t.innerHeight*n,n);return a.style.setProperty("--gp",`${i.gp/n}px`),a.style.setProperty("--gq",`${i.gq/n}px`),a.style.setProperty("--gk",`${i.gk/n}px`),a.style.setProperty("--gs",`${i.gs/n}px`),a.style.setProperty("--gc",`${i.cover/n}px`),a.style.setProperty("--gd",`${ah(t.innerWidth,t.innerHeight)}px`),a.dataset.grimGp=String(i.gp),i};return lr||(lr=o,t.addEventListener?.("resize",o)),o()}const B=(e,t,a)=>{const o=e.createElement("canvas");return o.width=t,o.height=a,o},C=e=>e.getContext("2d",{willReadFrequently:!0}),zt=e=>C(e).getImageData(0,0,e.width,e.height);function Ta(e,t){return new Promise((a,o)=>{const n=new(e.defaultView?.Image??globalThis.Image);n.decoding="async",n.onload=()=>a(n),n.onerror=()=>o(new Error(`grimoire art: ${t}`)),n.src=t})}function Re(e,t,[a,o,n,i]){const s=B(e,n,i);return C(s).drawImage(t,a,o,n,i,0,0,n,i),s}function ii(e,t,a=ea){const o=Math.ceil(t.width/a),n=Math.ceil(t.height/a),i=zt(t).data,s=t.width,p=t.height,l=B(e,o,n),c=C(l).createImageData(o,n),g=c.data;for(let m=0;m<n;m++)for(let b=0;b<o;b++){let x=0,u=0,T=0,y=0,A=0;for(let H=m*a;H<Math.min(p,m*a+a);H++)for(let G=b*a;G<Math.min(s,b*a+a);G++){const q=(H*s+G)*4,Q=i[q+3];x+=i[q]*Q,u+=i[q+1]*Q,T+=i[q+2]*Q,y+=Q,A++}const D=(m*o+b)*4;y>0&&(g[D]=Math.round(x/y),g[D+1]=Math.round(u/y),g[D+2]=Math.round(T/y)),g[D+3]=Math.round(y/A)}return C(l).putImageData(c,0,0),l}function rh(e,t,a=Zc){if(!(a>0))return t;const o=t.width,n=t.height,i=zt(t).data,s=B(e,o,n),p=C(s).createImageData(o,n),l=p.data;for(let c=0;c<n;c++)for(let g=0;g<o;g++){const m=(c*o+g)*4;for(let b=0;b<3;b++){let x=0,u=0;for(let T=-1;T<=1;T++)for(let y=-1;y<=1;y++){if(!y&&!T)continue;const A=Math.min(o-1,Math.max(0,g+y)),D=Math.min(n-1,Math.max(0,c+T));x+=i[(D*o+A)*4+b],u++}l[m+b]=Math.max(0,Math.min(255,Math.round(i[m+b]+a*(i[m+b]-x/u))))}l[m+3]=i[m+3]}return C(s).putImageData(p,0,0),s}function nh(e,t,a,o){const n=Math.max(1,Math.ceil(o*3)),i=[];let s=0;for(let c=-n;c<=n;c++){const g=Math.exp(-(c*c)/(2*o*o));i.push(g),s+=g}for(let c=0;c<i.length;c++)i[c]/=s;const p=new Float32Array(t*a*3),l=new Float32Array(t*a*3);for(let c=0;c<a;c++)for(let g=0;g<t;g++)for(let m=0;m<3;m++){let b=0;for(let x=-n;x<=n;x++)b+=e[(c*t+Math.min(t-1,Math.max(0,g+x)))*4+m]*i[x+n];p[(c*t+g)*3+m]=b}for(let c=0;c<a;c++)for(let g=0;g<t;g++)for(let m=0;m<3;m++){let b=0;for(let x=-n;x<=n;x++)b+=p[(Math.min(a-1,Math.max(0,c+x))*t+g)*3+m]*i[x+n];l[(c*t+g)*3+m]=b}return l}function Va(e,t,a,o=1){const n=t.width,i=t.height,s=C(t),p=s.getImageData(0,0,n,i),l=p.data;for(const[c,g,m=0]of a){const b=nh(l,n,i,c);for(let x=0,u=0;x<l.length;x+=4,u+=3){const T=l[x]-b[u],y=l[x+1]-b[u+1],A=l[x+2]-b[u+2],D=Math.max(Math.abs(T),Math.abs(y),Math.abs(A)),H=m>0?Math.max(0,Math.min(1,(D-m)/m)):1;H&&(l[x]=Math.max(0,Math.min(255,Math.round(l[x]+g*H*T))),l[x+1]=Math.max(0,Math.min(255,Math.round(l[x+1]+g*H*y))),l[x+2]=Math.max(0,Math.min(255,Math.round(l[x+2]+g*H*A))))}}if(o!==1)for(let c=0;c<l.length;c+=4)for(let g=0;g<3;g++)l[c+g]=Math.max(0,Math.min(255,Math.round((l[c+g]-128)*o+128)));return s.putImageData(p,0,0),t}const le=Object.freeze({skills:Object.freeze({img:"MAP100I0",h:96,poly:Object.freeze([[603,6],[607,6],[608,11],[620,12],[632,14],[641,19],[648,27],[652,36],[655,46],[659,56],[660,75],[659,95],[657,108],[653,121],[647,132],[638,142],[626,150],[614,155],[600,155],[588,149],[576,141],[566,131],[558,121],[553,111],[552,95],[552,52],[555,42],[560,32],[566,24],[573,18],[584,14],[596,12],[602,11]])}),magic:Object.freeze({img:"INFO01I0",cells:Object.freeze([207,0,112,72]),rows:Object.freeze(["29-30","29-35 51-53","28-61","27-63","26-65 72-83","27-66 70-87","26-67 68-95","25-102","25-103","24-104","24-106","23-112","23-112","23-112","22-112","22-112","21-112","20-112","20-112","20-111","19-109","19-111","18-110","18-110","17-109","17-108","17-107","16-106","15-105","15-105","14-106","14-107","14-107","13-107","13-106","12-106","11-106","11-106","11-105","10-105","10-104","9-104","8-104","8-104","8-104","8-104","6-103","5-102","4-102","4-102","3-107","3-109","3-110","1-112","1-112","0-98 102-111","0-99 105-109","1-99","3-99","8-98","13-97","21-97","27-97","35-96","36-96","36-96","43-96","49-95","62-95","70-95","77-94","85-93"])}),map:Object.freeze({img:"MAP100I0",h:84,poly:null}),items:Object.freeze({file:"grimoire-dial-chest.png",size:Object.freeze([130,132]),h:80})});function $o(e){const t=le[e];if(t.file)return[0,0,...t.size];if(t.cells)return t.cells.map(s=>s*ea);if(!t.poly)return[0,0,...Xc[t.img]];const a=t.poly.map(s=>s[0]),o=t.poly.map(s=>s[1]),n=Math.floor(Math.min(...a)),i=Math.floor(Math.min(...o));return[n,i,Math.ceil(Math.max(...a))-n,Math.ceil(Math.max(...o))-i]}function si(e){const t=le[e];if(t.cells)return[t.cells[2],t.cells[3]];const[,,a,o]=$o(e);return[Math.round(t.h*a/o),t.h]}const ih=e=>le[e].rows.map(t=>t?t.split(" ").map(a=>a.split("-").map(Number)):[]),Ea=Object.freeze({pass:Object.freeze([[1.4,1.1,2],[.7,.5,2]]),finish:Object.freeze([[.6,.6,1]]),contrast:1.08});function ut(e,t,a,o){let n=t;for(;n.width/2>=a&&n.height/2>=o;){const p=B(e,Math.ceil(n.width/2),Math.ceil(n.height/2)),l=C(p);l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(n,0,0,p.width,p.height),n=p}const i=B(e,a,o),s=C(i);return s.imageSmoothingEnabled=!0,s.imageSmoothingQuality="high",s.drawImage(n,0,0,a,o),i}function sh(e,t,a,o){const n=le[a],[i,s,p,l]=$o(a);if(n.cells){const T=ii(e,Re(e,t,[i,s,p,l])),y=C(T),A=y.getImageData(0,0,T.width,T.height),D=A.data;return ih(a).forEach((H,G)=>{for(let q=0;q<T.width;q++)H.some(([Q,Di])=>q>=Q&&q<Di)||(D[(G*T.width+q)*4+3]=0)}),y.putImageData(A,0,0),T}let c=Re(e,t,[i,s,p,l]);if(n.lift)for(;c.width*1.5<p*o;)c=Va(e,ut(e,c,c.width*2,c.height*2),Ea.pass);const g=Math.max(1,Math.round(p*o)),m=Math.max(1,Math.round(l*o));if(c=ut(e,c,g,m),n.lift&&(c=Va(e,c,Ea.finish,Ea.contrast)),!n.poly)return c;const b=B(e,g,m),x=C(b),u=()=>{x.beginPath(),n.poly.forEach(([T,y],A)=>{const D=(T-i)*o,H=(y-s)*o;A?x.lineTo(D,H):x.moveTo(D,H)}),x.closePath()};return x.save(),u(),x.clip(),x.drawImage(c,0,0),x.restore(),n.inset&&(x.globalCompositeOperation="destination-out",x.lineJoin="round",x.lineWidth=2*n.inset*o,u(),x.stroke(),x.globalCompositeOperation="source-over"),b}const li=e=>`dial${e[0].toUpperCase()}${e.slice(1)}`,pr=.28;function lh(e,t,a="xy"){const o=t.width,n=t.height,i=zt(t).data,s=Math.floor(o/2),p=Math.floor(n/2),l=B(e,o,n),c=C(l).createImageData(o,n),g=c.data,m=o*pr,b=n*pr;for(let x=0;x<n;x++)for(let u=0;u<o;u++){const T=a.includes("x")?Math.min(1,Math.min(u,o-1-u)/m):1,y=a.includes("y")?Math.min(1,Math.min(x,n-1-x)/b):1;let A=T*y;A=A*A*(3-2*A);const D=(x*o+u)*4,H=((a.includes("y")?(x+p)%n:x)*o+(a.includes("x")?(u+s)%o:u))*4,G=(x*o+u)*4;for(let q=0;q<4;q++)g[G+q]=Math.round(i[D+q]*A+i[H+q]*(1-A))}return C(l).putImageData(c,0,0),l}function ph(e,t){const a=C(t),o=a.getImageData(0,0,t.width,t.height),n=o.data,i=(ir.lo+ir.hi)/2;for(let s=0;s<n.length;s+=4){const p=.299*n[s]+.587*n[s+1]+.114*n[s+2];n[s+3]=n[s+3]>0&&p>=i?255:0}return a.putImageData(o,0,0),t}function dh(e,t,a){const{margin:o}=ve,n=a.width+o*2,i=a.height+o*2,s=B(e,n,i),p=C(s);p.imageSmoothingEnabled=!1,p.fillStyle=p.createPattern(t,"repeat"),p.fillRect(0,0,n,i),p.fillStyle="rgba(0,0,0,0.3)",p.fillRect(0,0,n,i),p.fillStyle="rgba(255,214,150,0.32)",p.fillRect(1,1,n-2,1),p.fillRect(1,1,1,i-2),p.fillStyle="rgba(0,0,0,0.6)",p.fillRect(1,i-2,n-2,1),p.fillRect(n-2,1,1,i-2),p.fillStyle="#120a04",p.fillRect(0,0,n,1),p.fillRect(0,i-1,n,1),p.fillRect(0,0,1,i),p.fillRect(n-1,0,1,i);const l=B(e,a.width,a.height),c=C(l);return c.drawImage(a,0,0),c.globalCompositeOperation="source-in",c.fillStyle="rgba(10,5,2,0.6)",c.fillRect(0,0,l.width,l.height),p.drawImage(l,o+1,o+1),p.drawImage(a,o,o),s}const ch=Object.freeze([15,3,100,43]);function hh(e,t,a){const[o,n,i,s]=ch,p=B(e,i,s),l=C(p);l.imageSmoothingEnabled=!1,l.drawImage(a,0,0,a.width,a.height,0,0,i,s);const c=l.getImageData(0,0,i,s),g=c.data,m=4;for(let u=0;u<s;u++)for(let T=0;T<i;T++){const y=Math.min(1,Math.min(T,i-1-T)/m,Math.min(u,s-1-u)/2);g[(u*i+T)*4+3]=Math.round(255*y)}l.putImageData(c,0,0);const b=B(e,t.width,t.height),x=C(b);return x.drawImage(t,0,0),x.drawImage(p,o,n),b}function ce(e,t,a,o){const n=B(e,o,t.height);return C(n).drawImage(t,a,0,o,t.height,0,0,o,t.height),n}function Sa(e,t,a,o){const n=B(e,t.width,t.height),i=C(n);i.drawImage(t,0,0);const s=i.getImageData(0,0,n.width,n.height),p=s.data;for(let l=0;l<p.length;l+=4){const c=l/4%n.width;if(o?c<a:c>=n.width-a)continue;const g=.299*p[l]+.587*p[l+1]+.114*p[l+2];p[l]=Math.round(g*.42+p[l]*.1+22),p[l+1]=Math.round(g*.4+p[l+1]*.1+20),p[l+2]=Math.round(g*.4+p[l+2]*.1+22)}return i.putImageData(s,0,0),n}function dr(e,t,a){const o=B(e,t.height,t.width),n=C(o);return n.imageSmoothingEnabled=!1,a?(n.translate(t.height,0),n.rotate(Math.PI/2)):(n.translate(0,t.width),n.rotate(-Math.PI/2)),n.drawImage(t,0,0),o}function gh(e,t){const{tubeFrom:a,tubeLen:o}=F,n=t.height,i=zt(t).data,s=t.width,p=B(e,o,n),l=C(p).createImageData(o,n),c=l.data;for(let g=0;g<n;g++){const m=[0,1,2,3].map(b=>{const x=[];for(let u=a;u<Math.min(s,a+48);u++)x.push(i[(g*s+u)*4+b]);return x.sort((u,T)=>u-T),x[x.length>>1]});for(let b=0;b<o;b++){const x=(g*o+b)*4;c[x]=m[0],c[x+1]=m[1],c[x+2]=m[2],c[x+3]=m[3]}}for(const[g,m]of[[5,3],[17,6],[26,4],[11,7]]){if(m>=n)continue;const b=(m*o+g)*4;for(let x=0;x<3;x++)c[b+x]=Math.min(255,Math.round(c[b+x]*1.25+14))}return C(p).putImageData(l,0,0),p}function cr(e,t){const{tubeFrom:a,footFrom:o,bodyLen:n}=F,i=t.width,s=t.height,p=zt(t).data,l=o-a,c=B(e,n,s),g=C(c).createImageData(n,s),m=g.data;for(let b=0;b<s;b++)for(let x=0;x<4;x++){const u=[];for(let y=a;y<o;y++)u.push(p[(b*i+y)*4+x]);const T=u.map((y,A)=>{let D=0,H=0;for(let G=Math.max(0,A-4);G<=Math.min(l-1,A+4);G++)D+=u[G],H++;return D/H});for(let y=0;y<n;y++){const A=y/(n-1)*(l-1),D=Math.floor(A),H=A-D,G=T[D]*(1-H)+T[Math.min(l-1,D+1)]*H,q=y%l,Q=x===3?0:u[q]-T[q];m[(b*n+y)*4+x]=Math.max(0,Math.min(255,Math.round(G+Q)))}}return C(c).putImageData(g,0,0),c}const F=Object.freeze({cork:6,tubeFrom:28,tubeLen:32,footFrom:76,bodyLen:240});function _e(e,t){const a=B(e,t.width,t.height),o=C(a);return o.imageSmoothingEnabled=!1,o.translate(t.width,t.height),o.rotate(Math.PI),o.drawImage(t,0,0),a}function xh(e,t){const a=Math.max(2,Math.round(t.height*.05)),o=dr(e,t,!1),n=dr(e,t,!0),i=gh(e,o),s=ce(e,o,0,F.cork),p=Sa(e,o,a,!0),l=o.width-F.footFrom,c={full:o,empty:p,up:n,upEmpty:Sa(e,n,a,!1),tube:i,tubeEmpty:Sa(e,i,0,!0),cork:s,head:ce(e,o,0,F.tubeFrom),headEmpty:ce(e,p,0,F.tubeFrom),body:cr(e,o),bodyEmpty:cr(e,p),foot:ce(e,o,F.footFrom,l),footEmpty:ce(e,p,F.footFrom,l)};return Object.assign(c,{upHead:_e(e,c.head),upHeadEmpty:_e(e,c.headEmpty),upFoot:_e(e,c.foot),upFootEmpty:_e(e,c.footEmpty),upBody:_e(e,c.body),upBodyEmpty:_e(e,c.bodyEmpty)})}function mh(e,t){const{top:a,side:o,bottom:n}=ni,i=t.width,s=t.height,p=C(t),l=p.getImageData(0,0,i,s),c=l.data,g=m=>.299*c[m]+.587*c[m+1]+.114*c[m+2];for(let m=a;m<s-n;m++){const b=[];for(let A=o;A<i-o;A++)b.push((m*i+A)*4);const x=b.map(g).sort((A,D)=>A-D),u=x[Math.floor(x.length*.7)],T=b.filter(A=>g(A)>=u-10),y=[0,1,2].map(A=>T.reduce((D,H)=>D+c[H+A],0)/Math.max(1,T.length));for(const A of b)g(A)<u-10&&(c[A]=Math.round(y[0]),c[A+1]=Math.round(y[1]),c[A+2]=Math.round(y[2]))}return p.putImageData(l,0,0),t}function bh(e,t){const a=B(e,t.width,t.height),o=C(a);o.drawImage(t,0,0);const n=o.getImageData(0,0,a.width,a.height),i=n.data;for(let s=0;s<i.length;s+=4).299*i[s]+.587*i[s+1]+.114*i[s+2]<30||(i[s]=Math.min(255,Math.round(i[s]*1.32+18)),i[s+1]=Math.min(255,Math.round(i[s+1]*1.3+12)),i[s+2]=Math.min(255,Math.round(i[s+2]*1.22+2)));return o.putImageData(n,0,0),a}const fh=e=>`url("${e.toDataURL("image/png")}")`;let it=null;function uh(e=globalThis.document){if(it)return it;const t=e?.documentElement;return!t?.style||typeof e.createElement!="function"||!e.createElement("canvas").getContext?.("2d")?it=Promise.resolve([]):(oh(e),it=(async()=>{const a=[...new Set([...Object.values(Ka),...Object.values(le)].map(g=>g.img).filter(Boolean))],o=Object.fromEntries(await Promise.all(a.map(async g=>[g,await Ta(e,me(g))]))),n={};for(const[g,m]of Object.entries(Ka)){let b=m.make==="plate"||m.make==="spbk"||m.make==="pack"?Re(e,o[m.img],m.box):ii(e,Re(e,o[m.img],m.box));if(g==="desk"&&(b=sr(e,b,eh)),m.clarity?b=Va(e,b,m.clarity,m.contrast??1):m.crisp!==!1&&m.make!=="tear"&&(b=rh(e,b)),m.make==="tile")n[g]=lh(e,b);else if(m.make==="tear")n[g]=ph(e,b);else if(m.make==="spbk")n[g]=sr(e,b,Jc);else if(m.make==="plate")n[g]=mh(e,b),n[`${g}On`]=bh(e,n[g]);else if(m.make==="vial"){const x=xh(e,b);Object.assign(n,{[g]:x.full,[`${g}Empty`]:x.empty,[`${g}Up`]:x.up,[`${g}UpEmpty`]:x.upEmpty,[`${g}Tube`]:x.tube,[`${g}TubeEmpty`]:x.tubeEmpty,[`${g}Head`]:x.head,[`${g}HeadEmpty`]:x.headEmpty,[`${g}Foot`]:x.foot,[`${g}FootEmpty`]:x.footEmpty,[`${g}Body`]:x.body,[`${g}BodyEmpty`]:x.bodyEmpty,[`${g}UpHead`]:x.upHead,[`${g}UpHeadEmpty`]:x.upHeadEmpty,[`${g}UpFoot`]:x.upFoot,[`${g}UpFootEmpty`]:x.upFootEmpty,[`${g}UpBody`]:x.upBody,[`${g}UpBodyEmpty`]:x.upBodyEmpty}),n.vialCork??=x.cork}else n[g]=b}const i=await Ta(e,Wa(Yc,e)).catch(()=>null);let s=n.wood;if(i){const g=Math.max(2,Math.round(3*(e.defaultView?.devicePixelRatio||1)));n.wood=ut(e,Re(e,i,[0,0,i.width,i.height]),ct[0]*g,ct[1]*g),s=ut(e,Re(e,i,[0,0,i.width,i.height]),ct[0],ct[1])}n.frame=dh(e,s,n.tear),n.sideScroll=hh(e,n.sideScroll,n.scrollMid);const p=Math.round(n.sideScroll.width*.115);n.rodL=ce(e,n.sideScroll,0,p),n.rodR=ce(e,n.sideScroll,n.sideScroll.width-p,p),n.bookL=ce(e,n.book,0,$a),n.bookR=ce(e,n.book,$a,n.book.width-$a);const l=Math.min(3,Math.max(1,e.defaultView?.devicePixelRatio||1));for(const g of Object.keys(le)){const[,,,m]=$o(g),[,b]=si(g),x=le[g],u=x.file?await Ta(e,Wa(x.file,e)).catch(()=>null):o[x.img];u&&(n[li(g)]=x.file?ut(e,Re(e,u,[0,0,...x.size]),Math.round(b*l*x.size[0]/x.size[1]),Math.round(b*l)):sh(e,u,g,b*l/m))}const c=[];for(const[g,m]of Object.entries(n))g!=="tear"&&(t.style.setProperty(ta(g),fh(m)),c.push(g));return t.style.setProperty(ta("compbox"),`url("${me("COMPBOX")}")`),t.dataset.grimArt="ready",c})().catch(a=>(console.warn("[grimoire] the dress keeps its flat tones -",a?.message??a),[])),it)}const wt="grimoire",r=':root[data-plus-dress="grimoire"]',pi="DFO Alagard",be=`'${pi}', 'Alagard', Georgia, serif`,wh=e=>{const t=Br("dress",globalThis.location?.search??"");return(t===wt||t==="none"?t:Y("plusDress"))===wt?wt:"none"},di=Object.freeze({cream:"Cream page",scroll:"Tan scroll"}),ci=Object.freeze({desk:"The desk",map:"The map"}),hi=Object.freeze({upright:"Upright vials",row:"Vials in a row"}),gi=Object.freeze({book:"DFO book",pack:"GrimoireUI's own"}),vh=()=>Object.hasOwn(gi,Y("grimoireSpellbook"))?Y("grimoireSpellbook"):"book",kh=()=>Object.hasOwn(hi,Y("grimoireVitals"))?Y("grimoireVitals"):"upright",yh=()=>Object.hasOwn(di,Y("grimoirePages"))?Y("grimoirePages"):"cream",$h=()=>Object.hasOwn(ci,Y("grimoireBackdrop"))?Y("grimoireBackdrop"):"desk",hr=Object.freeze({magic:"#1f4f9e",rare:"#5c4600",legendary:"#9a4210",aetheric:"#1d6a86",artifact:"#5e2a96",gilded:"#7a4a00"}),Ia="color-mix(in srgb, var(--set, #4fb8a8) 40%, #120a04)",Th="color-mix(in srgb, var(--sigil, #72f0d8) 35%, #120a04)",Eh=Object.freeze({ink:"#2b1a0c",inkSoft:"#5b3b1f",inkFaint:"#80603e",red:"#8e1a10",redHi:"#b52418",redDeep:"#5a0a06",yellow:"#f4e04c",yellowDeep:"#c8a52a",goldLeaf:"#d8b04a",cream:"#efdcae",page:"#e3c995",scroll:"#c99a5c",tan:"#b3834a",wood:"#3a2414",woodDark:"#1c1108",woodLit:"#7a5230",woodMid:"#53351d",outline:"#140b04"}),h=Eh,xi=Object.freeze({"--ink":"#0e1013","--slate":"#171b21","--iron":"#2b323b","--bone":"#e9e4d9","--dim":"#9a9486","--brass":"#c08a3e","--blood":"#8c3a32","--ruby":"#b91309","--verdigris":"#4e7f72","--emerald":"#2c7341","--cinnabar":"#bf2a1f"}),gr={white:[255,255,255,1],black:[0,0,0,1],transparent:[0,0,0,0]};function je(e){const t=String(e).trim().toLowerCase();if(Object.hasOwn(gr,t))return[...gr[t]];let a=/^#([0-9a-f]{3,8})$/.exec(t);if(a){const o=a[1];return o.length===3||o.length===4?[...o].map((n,i)=>i<3?parseInt(n+n,16):parseInt(n+n,16)/255).concat(o.length===3?[1]:[]):o.length===6||o.length===8?[0,2,4].map(n=>parseInt(o.slice(n,n+2),16)).concat([o.length===8?parseInt(o.slice(6),16)/255:1]):null}if(a=/^rgba?\(([^)]*)\)$/.exec(t),a){const o=a[1].split(/[\s,/]+/).filter(Boolean);if(o.length<3)return null;const n=o.slice(0,3).map(s=>s.endsWith("%")?parseFloat(s)*2.55:parseFloat(s)),i=o[3]==null?1:o[3].endsWith("%")?parseFloat(o[3])/100:parseFloat(o[3]);return n.some(Number.isNaN)||Number.isNaN(i)?null:[...n,i]}return null}function To([e,t,a]){const o=e/255,n=t/255,i=a/255,s=Math.max(o,n,i),p=Math.min(o,n,i),l=(s+p)/2;if(s===p)return[0,0,l];const c=s-p,g=l>.5?c/(2-s-p):c/(s+p);return[(s===o?(n-i)/c+(n<i?6:0):s===n?(i-o)/c+2:(o-n)/c+4)*60,g,l]}const mi=e=>Math.round(e*1e3)/1e3,te=(e,t,a,o)=>o>=1?`hsl(${Math.round(e)} ${Math.round(t*100)}% ${Math.round(a*100)}%)`:`hsl(${Math.round(e)} ${Math.round(t*100)}% ${Math.round(a*100)}% / ${mi(o)})`,Je=([e,t,a])=>(Math.max(e,t,a)-Math.min(e,t,a))/255,Wt="#f4e04c",ht="1px 1px 0 #3a2400, 2px 2px 0 rgba(58,36,0,0.35)",bi=e=>e<=20?16:e<=40?32:48,at=([e,t,a])=>(.299*e+.587*t+.114*a)/255;function Sh(e){const t=je(e);if(!t)return null;const[a,o,n,i]=t;if(i===0)return null;const s=at(t);if(s<.42)return null;const[p,l]=To([a,o,n]),c=Math.min(1,(s-.42)/.5);if(Je(t)<.16)return te(26,.6,.21-.13*c,i);if(p>=50&&p<=72&&Je(t)>.5)return i>=1?Wt:`rgba(244, 224, 76, ${mi(i)})`;if(p>=38&&p<=72)return te(5,.8,.29,i);if(p>=18&&p<38)return te(p,.72,xr(p,.72,.24),i);const g=Math.max(.55,Math.min(.85,l));return te(p,g,xr(p,g,.25),i)}const Ih=.055;function xr(e,t,a){let o=a;for(;o>.08;o-=.01){const n=(1-Math.abs(2*o-1))*t,i=n*(1-Math.abs(e/60%2-1)),s=o-n/2,[p,l,c]=e<60?[n,i,0]:e<120?[i,n,0]:e<180?[0,n,i]:e<240?[0,i,n]:e<300?[i,0,n]:[n,0,i],g=m=>{const b=m+s;return b<=.03928?b/12.92:((b+.055)/1.055)**2.4};if(.2126*g(p)+.7152*g(l)+.0722*g(c)<=Ih)break}return Math.round(o*100)/100}function Oh(e){const t=je(e);if(!t)return null;const[,,,a]=t;if(a===0||Je(t)>=.16)return null;const o=at(t);return o<.3?null:te(40,.5,Math.max(.66,Math.min(.9,o*.95+.04)),a)}function mr(e){const t=je(e);if(!t)return null;const[,,,a]=t;if(a===0||Je(t)>=.22)return null;const o=at(t);return o>.75?null:te(28,.42,Math.max(.03,o*.95),a)}function Ah(e){const t=je(e);if(!t)return null;const[a,o,n,i]=t;if(i===0)return null;const s=at(t);if(s>=.35)return null;const[p,l]=To([a,o,n]);return Je(t)>=.12&&s>.08?te(p,Math.min(.7,l),.42,i*.3):te(30,.45,.32,Math.min(.2,i*.16))}function br(e,t=!1){const a=je(e);if(!a)return null;const[o,n,i,s]=a;if(s===0)return null;const p=at(a),[l,c]=To([o,n,i]);return Je(a)>=.16?p>.45?te(l>=38&&l<=72?5:l,Math.min(.8,c),.34,s):null:p<.35?te(26,.5,.17,t?s*.45:Math.min(1,s*.75)):te(30,.38,.42,s)}const fi=/#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|\b(?:white|black)\b/g,Xa=new Map,ui=Symbol("ambiguous"),zh=/(?:^|[;{\s])(--[a-z][a-z0-9-]*)\s*:\s*(#[0-9a-fA-F]{3,8}|rgba?\([^)]*\))\s*(?:!important\s*)?(?=;|$)/gi;function Eo(e){const t=String(e).replace(/\/\*[\s\S]*?\*\//g,"");let a=0;for(;a<t.length;){const o=t.indexOf("{",a);if(o<0)break;const n=t.slice(a,o).trim();let i=1,s=o+1;for(;s<t.length&&i;)t[s]==="{"?i++:t[s]==="}"&&i--,s++;const p=t.slice(o+1,s-1);if(a=s,/^@(media|supports)\b/.test(n)){Eo(p);continue}if(!(n.startsWith("@")||/data-plus-theme|data-plus-dress/.test(n)))for(const l of p.matchAll(zh)){const c=l[1],g=l[2].toLowerCase().replace(/\s+/g,"");if(Object.hasOwn(xi,c))continue;const m=Xa.get(c);Xa.set(c,m===void 0||m===g?g:ui)}}}const Rh=e=>{const t=Xa.get(e);return xi[e]??(t===ui?void 0:t)};function So(e){let t="",a=0;for(;;){const o=e.indexOf("var(",a);if(o<0)return t+e.slice(a);let n=0,i=o+3;for(;i<e.length;i++)if(e[i]==="(")n++;else if(e[i]===")"&&--n===0)break;if(i>=e.length)return t+e.slice(a);const s=e.slice(o+4,i),p=s.indexOf(","),l=(p<0?s:s.slice(0,p)).trim(),c=Rh(l);t+=e.slice(a,o)+(c??`var(${l}${p<0?"":`,${So(s.slice(p+1))}`})`),a=i+1}}function Ie(e,t){let a=!1;const o=So(e).replace(fi,n=>{const i=t(n);return i==null?n:(a=!0,i)});return a?o:null}const k=vo,Nh=Object.freeze([...new Set([...k.window,...k.windowGround,...k.panel,...k.railRight,...k.railLeft,".shell .detail"])]),Lh=Object.freeze([...new Set([...k.button,...k.primary,...k.warn,...k.tile,...k.chip,...k.well,...k.input,...k.header,...k.footer,...k.tabs,...k.chosen])]),st=(e,t="")=>e.map(a=>`${a}${t}`).join(", "),fr='[data-grim="ink"]',aa='[data-grim="wood"]',ur=`:is(${fr}, ${fr} *)`,wr=`:not(${aa}, ${aa} *)`,vr=`:is(${aa}, ${aa} *)`,kr=":not([data-grim])",Dh=Object.freeze([".shell",".wizard",".px-home",".lv-sky"]),Mh=":is([data-grim-desk] *):not([data-grim], [data-grim] *)",Hh=Nh.join(", "),Ch=Lh.join(", "),yr=Dh.join(", "),Kt=Object.freeze(k.button.filter(e=>!/doorbtn|packtab/.test(e))),$r=Kt.join(", "),jh=/^\s*(?:\S\s*)?(cancel|stop|back|no|never ?mind)\s*$/i,Uh=/^\s*(strength|intelligence|willpower|agility|endurance|personality|speed|luck)\s*$/i,Ph=/^\s*(health|fatigue|magicka)\s*$/i,qh=new RegExp(`\\b(${Object.keys(le).join("|")})\\b`,"i"),_h=/^\s*(?:\S\s*)?(close|exit|done|leave)\s*$/i;function Oa(e){let t=0;const a=(l,c)=>{l.dataset&&l.dataset.grim!==c&&(l.dataset.grim=c,t++)},o=(l,c)=>{e.matches?.(l)&&a(e,c);for(const g of e.querySelectorAll?.(l)??[])a(g,c)};o(Hh,"ink"),o(Ch,"wood");const n=l=>{l.dataset&&l.dataset.grimDesk==null&&(l.dataset.grimDesk="",t++)};e.matches?.(yr)&&n(e);for(const l of e.querySelectorAll?.(yr)??[])n(l);const i=l=>{let c=l.parentElement;for(;c&&c.dataset&&c.dataset.grim==null&&c.dataset.grimDesk==null;)c=c.parentElement;const g=c?.dataset?.grim==="ink"?"page":"wood";l.dataset.grimOn!==g&&(l.dataset.grimOn=g,t++),_h.test(l.textContent??"")&&l.dataset.grimExit==null&&(l.dataset.grimExit="",t++),jh.test(l.textContent??"")&&l.dataset.grimCancel==null&&(l.dataset.grimCancel="",t++)};e.matches?.($r)&&i(e);for(const l of e.querySelectorAll?.($r)??[])i(l);const s=e.matches?.(".px-mrow")?[e]:[...e.querySelectorAll?.(".px-mrow")??[]];for(const l of s){const c=l.querySelector?.(".px-mtop .k")?.textContent??"",g=Uh.test(c)?"attr":Ph.test(c)?"vital":null;g&&l.dataset&&l.dataset.grimMeter!==g&&(l.dataset.grimMeter=g,t++)}const p=e.matches?.(".px-dial .px-arm")?[e]:[...e.querySelectorAll?.(".px-dial .px-arm")??[]];for(const l of p){const c=qh.exec(l.textContent??"")?.[1]?.toLowerCase();c&&l.dataset&&l.dataset.grimIcon!==c&&(l.dataset.grimIcon=c,t++)}return t}const Gh=250,oa=()=>globalThis.performance?.now?.()??Date.now(),wi=e=>!!e.defaultView?.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;let vi=-1/0;function Fh(e){(e?.matches?.(ne)||e?.querySelector?.(ne))&&(vi=oa()),fe?.el&&e&&(e===fe.el||e.contains?.(fe.el))&&(fe.goneAt=oa())}let fe=null;const ki=250;function Bh(e,t,a=oa()){return e&&e.kind===t.kind&&e.goneAt!=null&&a-e.goneAt<=ki?e.tab!==t.tab||e.row!==t.row?"turn":null:"open"}let Wh=null;function yi(e){(Wh??=Promise.all([Ha(()=>import("./audio-DNWFK9ua.js").then(t=>t.hu),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),Ha(()=>import("./soundClips-aeaFc5y0.js"),[],import.meta.url)]).catch(()=>null)).then(t=>{t&&t[0].audio?.playOneShot?.(t[1].SOUND[e],1)}).catch(()=>{})}function Kh(e){const t=e.matches?.(".px-journal")?[e]:[...e.querySelectorAll?.(".px-journal")??[]];for(const a of t){if(a.dataset.grimBook!=null)continue;a.dataset.grimBook="";const o=a.closest?.(".px-win"),n=a.closest?.(".sb-shell, .cr-shell, .px-home"),i=l=>l.find(c=>c.classList.contains("on"))?.textContent.trim()??"",s={el:a,kind:`${n?.className??""}|${o?.className??""}`,spellbook:!!a.closest?.(".sb-shell"),tab:i(o?[...o.querySelectorAll(":scope > .px-tabs button")]:[]),row:i([...a.querySelectorAll(":scope > .px-qrail .px-qrow")])},p=Bh(fe,s);fe=s,s.spellbook&&p==="open"&&yi("OpenBook")}}function Vh(){const e=fe;!e?.spellbook||e.goneAt==null||setTimeout(()=>{fe===e&&!e.el.isConnected&&(yi("PageTurn"),fe=null)},ki+20)}const ra=new WeakMap;let Tr=null;function Xh(e){const t=e.ownerDocument,a=t.defaultView?.ResizeObserver;(()=>{const n=e.getBoundingClientRect();n.width&&n.height&&ra.set(e,{left:n.left,top:n.top,width:n.width,height:n.height})})(),typeof a=="function"&&(Tr??=new a(n=>{for(const i of n){const s=i.target.getBoundingClientRect();s.width&&ra.set(i.target,{left:s.left,top:s.top,width:s.width,height:s.height})}}),Tr.observe(e))}function Yh(e,t,a=null){if(wi(t))return;if(a===t.body&&!e.matches?.(ne)&&e.style?.position==="fixed"){const n=[...e.querySelectorAll?.(ne)??[]];if(n.length){const i=e.cloneNode(!0);i.removeAttribute("id"),i.querySelectorAll("[id]").forEach(p=>p.removeAttribute("id")),i.setAttribute("aria-hidden","true"),i.style.pointerEvents="none",i.dataset.grimGhost="";for(const p of i.querySelectorAll(ne)){p.querySelectorAll(":scope > .grim-rod").forEach(l=>l.remove()),p.dataset.grimUnroll="closing",p.style.setProperty("--uw",`${ra.get(n[0])?.width??0}px`);for(const l of["l","r"]){const c=t.createElement("i");c.className=`grim-rod ${l}`,p.append(c)}}t.body.append(i);const s=()=>i.remove();i.addEventListener("animationend",p=>{p.target.dataset?.grimUnroll==="closing"&&s()}),setTimeout(s,900);return}}const o=e?.matches?.(ne)?[e]:[...e?.querySelectorAll?.(ne)??[]];for(const n of o){const i=ra.get(n);if(!i)continue;const s=n.cloneNode(!0);s.querySelectorAll(".grim-rod").forEach(l=>l.remove()),s.setAttribute("aria-hidden","true"),s.dataset.grimUnroll="closing",Object.assign(s.style,{position:"fixed",left:`${i.left}px`,top:`${i.top}px`,width:`${i.width}px`,height:`${i.height}px`,margin:"0",zIndex:"60",pointerEvents:"none",transform:"none",maxWidth:"none",maxHeight:"none",minWidth:"0",minHeight:"0",boxSizing:"border-box"}),s.style.setProperty("--uw",`${i.width}px`);for(const l of["l","r"]){const c=t.createElement("i");c.className=`grim-rod ${l}`,s.append(c)}t.body.append(s);const p=()=>s.remove();s.addEventListener("animationend",l=>{l.target===s&&p()}),setTimeout(p,900)}}function Qh(e){const t=e.matches?.(".sb-shell > .px-win")?[e]:[...e.querySelectorAll?.(".sb-shell > .px-win")??[]];for(const a of t){if(a.querySelector(":scope > .grim-sbarrow"))continue;const o=a.ownerDocument;for(const[n,i]of[["up","Scroll the spells up"],["down","Scroll the spells down"]]){const s=o.createElement("button");s.type="button",s.className=`grim-sbarrow ${n}`,s.setAttribute("aria-label",i),s.textContent=i,s.onclick=p=>{p.stopPropagation();const l=a.querySelector(".px-qrail");l?.scrollBy?.({top:(n==="up"?-1:1)*Math.max(40,l.clientHeight*.8),behavior:"auto"})},a.append(s)}}}const ne=".rest-win, .dlg-win, .port-win.size-narrow, .sb-ask > .card, .px-setwrap .detail.open";function Er(e){const t=e.matches?.(ne)?[e]:[...e.querySelectorAll?.(ne)??[]];for(const a of t){if(a.dataset.grimUnroll!=null)continue;a.dataset.grimUnroll="";const o=a.ownerDocument;if(Xh(a),wi(o)||oa()-vi<=Gh)continue;a.style.setProperty("--uw",`${a.offsetWidth}px`);const n=["l","r"].map(s=>{const p=o.createElement("i");return p.className=`grim-rod ${s}`,p.setAttribute("aria-hidden","true"),p});a.append(...n),a.dataset.grimUnroll="open";const i=()=>{n.forEach(s=>s.remove()),a.dataset.grimUnroll==="open"&&(a.dataset.grimUnroll="done")};n[0].addEventListener("animationend",i),setTimeout(i,1200)}}function lt(e,t){const a=/(::?(?:before|after|first-letter|first-line|placeholder|selection|marker|-webkit-[a-z-]+|-moz-[a-z-]+))+$/i.exec(e);let o=a?e.slice(0,a.index):e;const n=a?a[0]:"";return(!o||/[\s>+~]$/.test(o))&&(o+="*"),`${o}${t}${n}`}const Sr=/\.on\b|\.sel\b|\.active\b|\.open\b|:hover|:focus|\[aria-(pressed|selected|current)/,Zh=/data-plus-theme|data-plus-dress|^:root\b|^html\b|^body$|(^|\s)\.(hud|hb|lv-sky|px-ground|ld)\b|\.hud-|\.hb-/;function Jh(e){const t=[];let a=0,o=null,n=0;for(let i=0;i<e.length;i++){const s=e[i];if(o){s===o&&e[i-1]!=="\\"&&(o=null);continue}s==='"'||s==="'"?o=s:s==="("?a++:s===")"?a--:s===";"&&a===0&&(t.push(e.slice(n,i)),n=i+1)}return t.push(e.slice(n)),t.map(i=>{const s=i.indexOf(":");return s<0?null:{prop:i.slice(0,s).trim().toLowerCase(),value:i.slice(s+1).trim()}}).filter(i=>i&&i.prop&&i.value)}function e0(e){const t=[];let a=0,o=0;for(let n=0;n<e.length;n++){const i=e[n];i==="("||i==="["?a++:i===")"||i==="]"?a--:i===","&&a===0&&(t.push(e.slice(o,n).trim()),o=n+1)}return t.push(e.slice(o).trim()),t.filter(Boolean)}const Ir=/'Pixelify Five',\s*'Pixelify Sans'|'Pixelify Sans'|"Pixelify Sans"|var\(--(display|data|brand)\)|'Cormorant'|'Barlow Semi Condensed'|'Grenze Gotisch'/,t0=e=>/!important\s*$/.test(e)?" !important":"",a0=e=>e.replace(/\s*!important\s*$/,"");function o0(e,{state:t=!1}={}){const a=[],o=[],n=[],i=[],s=[];let p=null;for(const{prop:l,value:c}of Jh(e)){const g=t0(c),m=a0(c);if((l==="font-family"||l==="font")&&Ir.test(m))a.push(`${l}: ${l==="font"?`${m.slice(0,m.search(Ir)).trimEnd()} ${be}`.trim():be}${g}`),l==="font-family"&&a.push("-webkit-font-smoothing: none","font-synthesis: none","font-variant-ligatures: normal");else if(l==="text-transform"&&/uppercase/.test(m))a.push(`text-transform: none${g}`);else if(l==="font-size"){const b=/^([\d.]+)px$/.exec(m);b&&a.push(`font-size: ${bi(+b[1])}px${g}`)}else if(l==="font-weight"&&(/bold/.test(m)||+m>=500))a.push(`font-weight: 400${g}`);else if(l==="content"&&/^(['"])(?:\\25c[67]\s*|[\u25c6\u25c7]\s*)+\1$/i.test(m.trim()))a.push(`content: none${g}`);else if(l==="letter-spacing"){const b=/^(-?[\d.]+)(em|px)$/.exec(m);b&&+b[1]!=0&&!(b[2]==="px"&&Number.isInteger(+b[1])&&+b[1]<=2)&&a.push(`letter-spacing: 0${g}`)}else if(l==="color"||l==="-webkit-text-fill-color"||l==="caret-color"){const b=Ie(m,u=>{const T=Sh(u);return t&&T&&/#f4e04c|rgba\(244, 224, 76/.test(T)?te(5,.8,.29,je(u)[3]):T});b&&o.push(`${l}: ${b}${g}`),l==="color"&&b&&/#f4e04c|rgba\(244, 224, 76/.test(b)&&(p=`text-shadow: ${ht}${g}`);const x=Ie(m,Oh);x&&i.push(`${l}: ${x}${g}`)}else if(l==="text-shadow"){const b=So(m).match(fi)??[];b.length&&b.every(x=>{const u=je(x);return u&&at(u)<.4})&&o.push(`text-shadow: none${g}`)}else if(l==="background"||l==="background-color"||l==="background-image"){const b=Ie(m,Ah);b&&n.push(`${l}: ${b}${g}`);const x=Ie(m,mr);x&&s.push(`${l}: ${x}${g}`)}else if(/^(border(-(top|right|bottom|left))?(-color)?|outline(-color)?|column-rule(-color)?)$/.test(l)){const b=Ie(m,u=>br(u));b&&n.push(`${l}: ${b}${g}`);const x=Ie(m,mr);x&&s.push(`${l}: ${x}${g}`)}else if(l==="box-shadow"){const b=Ie(m,x=>br(x,!0));b&&n.push(`${l}: ${b}${g}`)}}return p&&o.push(p),{face:a.join("; "),ink:o.join("; "),wash:n.join("; "),wood:i.join("; "),woodGround:s.join("; ")}}function $i(e){const t=String(e).replace(/\/\*[\s\S]*?\*\//g,"");Eo(t);let a="",o=0;for(;o<t.length;){const n=t.indexOf("{",o);if(n<0)break;const i=t.slice(o,n).trim();let s=1,p=n+1;for(;p<t.length&&s;)t[p]==="{"?s++:t[p]==="}"&&s--,p++;const l=t.slice(n+1,p-1);if(o=p,/^@(media|supports)\b/.test(i)){const m=$i(l);m&&(a+=`${i} {
${m}}
`);continue}if(i.startsWith("@"))continue;const c=e0(i),g=[[c.filter(m=>!Sr.test(m)),!1],[c.filter(m=>Sr.test(m)),!0]];for(const[m,b]of g){if(!m.length)continue;const x=o0(l,{state:b});if(!x.face&&!x.ink&&!x.wash&&!x.wood&&!x.woodGround)continue;x.face&&(a+=`${m.map(y=>/^(:root|html)\b/.test(y)?y.replace(/^(:root|html)/,r):`${r} ${y}`).join(`,
`)} { ${x.face} }
`);const u=m.filter(y=>!Zh.test(y));if(!u.length)continue;x.ink&&(a+=`${u.map(y=>`${r} ${lt(y,`${ur}${wr}`)}`).join(`,
`)} { ${x.ink} }
`),x.wash&&(a+=`${u.map(y=>`${r} ${lt(y,`${ur}${wr}${kr}`)}`).join(`,
`)} { ${x.wash} }
`),x.wood&&(a+=`${u.map(y=>`${r} ${lt(y,vr)}`).join(`,
`)} { ${x.wood} }
`),x.woodGround&&(a+=`${u.map(y=>`${r} ${lt(y,`${vr}${kr}`)}`).join(`,
`)} { ${x.woodGround} }
`);const T=[x.wood,x.woodGround].filter(Boolean).join("; ");T&&(a+=`${u.map(y=>`${r} ${lt(y,Mh)}`).join(`,
`)} { ${T} }
`)}}return a}const r0=(e=Vc())=>`
@font-face { font-family: '${pi}'; src: url("${e}") format('truetype'); font-display: swap; }
${r} { --display: ${be}; --data: ${be}; --brand: ${be}; -webkit-font-smoothing: none; font-synthesis: none; }
${r} body, ${r} .hud, ${r} #enhanced-menu, ${r} .shell, ${r} .px-win { font-family: ${be}; }`,O=(e,t="")=>e.map(a=>`${r} ${a}${t}`).join(`,
`),z=(e,t="none")=>`var(${ta(e)}, ${t})`,n0={gp:3,gq:2,gk:1,gs:3,gc:5,gd:4,gfoe:1.45,gboss:2.05},d=(e,t="gp")=>`calc(${e} * var(--${t}, ${n0[t]}px))`,j=e=>d(e,"gs"),ot=(e,t)=>`${z(e)} 0 0 / ${d(Qc(e)[0])} auto repeat, ${t}`,Ne=ot("page",h.page),Vt=ot("scroll",h.scroll),ke=(e=.18)=>`linear-gradient(rgba(0,0,0,${e}), rgba(0,0,0,${e})), ${ot("wood",h.wood)}`;`${ot("wood","#6a2a14")}`;`${ot("wood","#7a3418")}`;const{top:Aa,bottom:za,outer:Ya,gutter:na}=we,ia=(e,t="gp")=>{const[a,o]=e==="left"?[na,Ya]:[Ya,na],n=i=>d(i,t);return`background: #d9bc86; border-style: solid; border-width: ${n(Aa)} ${n(a)} ${n(za)} ${n(o)};
  border-image: ${z(e==="left"?"bookL":"bookR")} ${Aa} ${a} ${za} ${o} fill / ${n(Aa)} ${n(a)} ${n(za)} ${n(o)} stretch;`},K=(e,t=!1)=>`${z("vialCork")} 0 0 / ${d(F.cork,"gq")} 100% no-repeat,
  ${z(`vial${e}Tube${t?"Empty":""}`)} ${d(F.cork,"gq")} 0 / ${d(F.tubeLen,"gq")} 100% repeat-x`,gt=d(11,"gq"),Xe=86-F.footFrom,ee=(e,t=!1,a="gq")=>{const o=t?"Empty":"",n=t?"100%":"100cqw";return`${z(`vial${e}Head${o}`)} 0 0 / ${d(F.tubeFrom,a)} 100% no-repeat,
  ${z(`vial${e}Foot${o}`)} ${t?"100%":`calc(100cqw - ${d(Xe,a)})`} 0 / ${d(Xe,a)} 100% no-repeat,
  ${z(`vial${e}Body${o}`)} ${d(F.tubeFrom,a)} 0 / calc(${n} - ${d(F.tubeFrom+Xe,a)}) 100% no-repeat`},Or=(e,t=!1,a="gq")=>{const o=t?"Empty":"",n=t?"100%":"100cqw";return`${z(`vial${e}UpFoot${o}`)} 0 0 / ${d(Xe,a)} 100% no-repeat,
  ${z(`vial${e}UpHead${o}`)} ${t?"100%":`calc(100cqw - ${d(F.tubeFrom,a)})`} 0 / ${d(F.tubeFrom,a)} 100% no-repeat,
  ${z(`vial${e}UpBody${o}`)} ${d(Xe,a)} 0 / calc(${n} - ${d(F.tubeFrom+Xe,a)}) 100% no-repeat`},Be=`border-bottom: ${d(7,"gk")} solid transparent !important; border-image: ${z("rule")} 0 22 7 20 / 0 ${d(22,"gk")} ${d(7,"gk")} ${d(20,"gk")} stretch !important;`,$=e=>`calc(${e} * var(--gp, 3px) / 3)`,N=`${r}[data-grim-spellbook="pack"] .sb-shell`,i0=`linear-gradient(180deg, #0e0703 0 ${d(1)}, rgba(255,214,150,0.26) ${d(1)} ${d(2)}, rgba(0,0,0,0) ${d(2)} calc(100% - ${d(2)}),
    rgba(0,0,0,0.5) calc(100% - ${d(2)}) calc(100% - ${d(1)}), #0e0703 calc(100% - ${d(1)})),
  linear-gradient(90deg, #0e0703 0 ${d(1)}, rgba(255,214,150,0.14) ${d(1)} ${d(2)}, rgba(0,0,0,0) ${d(2)} calc(100% - ${d(2)}), rgba(0,0,0,0.4) calc(100% - ${d(2)}) calc(100% - ${d(1)}), #0e0703 calc(100% - ${d(1)})),
  linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), ${ot("wood",h.wood)}`,Ti=e=>{const t=a=>e.map(o=>`${r} ${o} ${a}`).join(", ");return`${t(".px-meter")} { height: ${gt} !important; border: 0 !important; border-radius: 0 !important; overflow: hidden;
  background: ${K("Fatigue",!0)}, #0a120a !important; box-shadow: 0 0 0 ${d(1,"gq")} ${h.outline}, ${d(1,"gq")} ${d(2,"gq")} 0 rgba(0,0,0,0.35) !important; }
${t(".px-meter:has(> .px-fill.blood)")} { background: ${K("Health",!0)}, #1a0a0a !important; }
${t(".px-meter:has(> .px-fill.verdigris)")} { background: ${K("Magicka",!0)}, #0a0e18 !important; }
${t(".px-fill")} { height: 100% !important; box-shadow: none !important; background: ${K("Fatigue")}, #3a8a3a !important; }
${t(".px-fill.blood")} { background: ${K("Health")}, #8a1c18 !important; }
${t(".px-fill.verdigris")} { background: ${K("Magicka")}, #2f5fb4 !important; }
${t(".px-meter:has(> .px-fill.thin)")} { height: ${d(3,"gq")} !important; background: rgba(40,22,8,0.55) !important; box-shadow: 0 0 0 ${d(1,"gq")} ${h.outline} !important; }
${t(".px-fill.thin")} { background: linear-gradient(180deg, #fff0a0 0 ${d(1,"gq")}, ${h.goldLeaf} ${d(1,"gq")} ${d(2,"gq")}, #9a7420 ${d(2,"gq")}) !important; }
/* GRIM4 (Dudey: "the bars in the ascend and status screen also do not look like the player health/stam/mana bars"): a
   vital's row is the HUD's own vial; GRIM5 ("the vial bars are toooshort in the stat screen"): drawn out to the row's
   length - the vial's own head (cork and lit shoulder), its glass, and its own foot at the far end, each at the HUD's
   pixels (ui/grimoireArt.js VIAL_CUT). The track is a size container, so the liquid lays the foot at the TRACK's end
   (100cqw) however little of the vial it fills - the glass and the liquid one picture, the liquid cut where it stops. */
${t('.px-mrow[data-grim-meter="vital"] .px-meter')} { width: 100% !important; container-type: inline-size; box-shadow: 0 0 0 ${d(1,"gq")} ${h.outline} !important;
  filter: drop-shadow(${d(1,"gq")} ${d(1,"gq")} 0 rgba(0,0,0,0.55)); background: ${ee("Fatigue",!0)}, #0a120a !important; }
${t('.px-mrow[data-grim-meter="vital"] .px-meter:has(> .px-fill.blood)')} { background: ${ee("Health",!0)}, #1a0a0a !important; }
${t('.px-mrow[data-grim-meter="vital"] .px-meter:has(> .px-fill.verdigris)')} { background: ${ee("Magicka",!0)}, #0a0e18 !important; }
${t('.px-mrow[data-grim-meter="vital"] .px-fill')} { position: relative; background: ${ee("Fatigue")}, #3a8a3a !important; }
${t('.px-mrow[data-grim-meter="vital"] .px-fill.blood')} { background: ${ee("Health")}, #8a1c18 !important; }
${t('.px-mrow[data-grim-meter="vital"] .px-fill.verdigris')} { background: ${ee("Magicka")}, #2f5fb4 !important; }
${t('.px-mrow[data-grim-meter="attr"]')} { margin: 0 0 12px; }   /* the skill grid's 8 and its row gap's 4 */
${t('.px-mrow[data-grim-meter="attr"] .px-mtop')} { margin-bottom: 3px; }
${t('.px-mrow[data-grim-meter="attr"] .px-meter')} { height: ${d(3,"gq")} !important; background: rgba(40,22,8,0.55) !important; box-shadow: 0 0 0 ${d(1,"gq")} ${h.outline} !important; }
${t('.px-mrow[data-grim-meter="attr"] .px-fill')} { background: linear-gradient(180deg, #fff0a0 0 ${d(1,"gq")}, ${h.goldLeaf} ${d(1,"gq")} ${d(2,"gq")}, #9a7420 ${d(2,"gq")}) !important; }`};`${h.redDeep}`;const Oe=`1px 1px 0 ${h.outline}, 2px 2px 0 rgba(0,0,0,0.45)`,s0=[...k.button,...k.primary],{top:Io,side:et,bottom:Oo}=ni,Ao=`${d(Io,"gk")} ${d(et,"gk")} ${d(Oo,"gk")} ${d(et,"gk")}`,Ei=`border-style: solid !important; border-width: ${Ao} !important; border-radius: 0 !important;
  box-shadow: ${d(1,"gk")} ${d(2,"gk")} 0 rgba(0,0,0,0.45) !important; outline: none;`,Qa=`background: #8e7048 !important; ${Ei}
  border-image: ${z("plate")} ${Io} ${et} ${Oo} ${et} fill / ${Ao} stretch !important;
  color: #2a1a0a !important; text-shadow: 0 1px 0 rgba(255,232,180,0.32) !important; opacity: 1;`,Za=`background: #c8a874 !important; ${Ei}
  border-image: ${z("plateOn")} ${Io} ${et} ${Oo} ${et} fill / ${Ao} stretch !important;
  color: ${h.red} !important; text-shadow: 0 1px 0 rgba(255,244,210,0.45) !important;
  text-decoration: underline solid ${h.red} !important; text-decoration-thickness: ${d(1,"gk")} !important; text-underline-offset: 0.22em !important;`,Ja="color: #120a04 !important; filter: brightness(1.14);",l0="rgba(74,44,18,0.38)",p0="rgba(74,44,18,0.68)",d0="rgba(142,26,16,0.78)",c0="rgba(232,207,152,0.3)",h0="rgba(232,207,152,0.6)",Ra=':is([data-grim="wood"], [data-grim="wood"] *, [data-grim-desk] *, .shell .list, .shell .pane, .shell .panes)',g0=`${r} ::-webkit-scrollbar { width: ${d(3)}; height: ${d(3)}; background: transparent; }
${r} ::-webkit-scrollbar-button { display: none; width: 0; height: 0; }
${r} ::-webkit-scrollbar-corner { background: transparent; }
${r} ::-webkit-scrollbar-track { border: 0; border-radius: 0; box-shadow: none;
  background: linear-gradient(90deg, transparent 0 ${d(1)}, rgba(92,56,24,0.14) ${d(1)} ${d(2)}, transparent ${d(2)}); }
${r} ::-webkit-scrollbar-track:horizontal { background: linear-gradient(180deg, transparent 0 ${d(1)}, rgba(92,56,24,0.14) ${d(1)} ${d(2)}, transparent ${d(2)}); }
${r} ::-webkit-scrollbar-thumb { border: 0; border-radius: 0; box-shadow: none; min-height: ${d(10)}; background: ${l0}; }
${r} ::-webkit-scrollbar-thumb:hover { background: ${p0}; }
${r} ::-webkit-scrollbar-thumb:active { background: ${d0}; }
${r} ${Ra}::-webkit-scrollbar-track { background: linear-gradient(90deg, transparent 0 ${d(1)}, rgba(232,207,152,0.1) ${d(1)} ${d(2)}, transparent ${d(2)}); }
${r} ${Ra}::-webkit-scrollbar-thumb { background: ${c0}; }
${r} ${Ra}::-webkit-scrollbar-thumb:hover { background: ${h0}; }
/* THE SETTINGS IN THE BOOK - compact (Dudey: "the filers and the search function in the settings take so much place
   there isnt much left for seeing the rest"): the categories in tight rows, and the search, the filters, All off and
   Reset on one slim strip (two at most) - the page is for the settings. A touch screen keeps its thumb-sized targets. */
@media (any-pointer: fine) {
  ${r} .px-journal .subrail { padding: ${d(1)} ${d(1)} ${d(2)} !important; gap: 0 ${d(1)} !important; }
  ${r} .px-journal .subrail .subbtn { min-height: 0 !important; padding: 1px ${d(2)} !important; font-size: 16px !important; line-height: 20px !important; }
  ${r} .opt-tools { padding: ${d(1)} ${d(2)} !important; gap: ${d(1)} ${d(2)} !important; flex-wrap: wrap; }
  ${r} .opt-search { flex: 1 1 ${d(60)} !important; width: auto !important; max-width: 34% !important; min-height: 0 !important; height: 26px; padding: 0 ${d(2)} !important; font-size: 16px !important; }
  ${r} .opt-filters { gap: 0 ${d(1)} !important; flex: 0 1 auto; }
  ${r} .opt-filters .chip { min-height: 0 !important; padding: 1px ${d(2)} !important; font-size: 16px !important; line-height: 20px !important; }
  ${r} .opt-tools .acts { gap: ${d(2)} !important; margin: 0 0 0 auto !important; flex-wrap: nowrap; }
  ${r} .opt-tools .act { min-height: 0 !important; padding: 1px ${d(1)} !important; font-size: 16px !important; line-height: 20px !important; white-space: nowrap; }
  ${r} .sec-jump { gap: 0 ${d(1)} !important; padding: ${d(1)} ${d(2)} !important; }
  ${r} .sec-jumpbtn { min-height: 0 !important; padding: 0 ${d(2)} !important; font-size: 16px !important; line-height: 22px !important; }
}
/* A BAR THAT STAYS PUT while the rest scrolls under it (the settings' search and filters, the pool's head, a review's
   head, the controls' head) keeps a ground of its own - the page's paper on a page, the desk's wood on the desk - or
   the rows scroll visibly through it (Dudey: "the settings menu isnt working correctly") */
${r} :is(.opt-tools, .poolbar, .reviewhead, .ctl-head) { background: ${ke(.34)} !important; box-shadow: 0 ${d(1)} 0 rgba(0,0,0,0.35) !important; }
${r} :is([data-grim="ink"], .px-journal) :is(.opt-tools, .poolbar, .reviewhead, .ctl-head) {
  background: linear-gradient(180deg, #ddc28e, #d6b982) !important; border-bottom: ${d(1)} solid rgba(74,44,18,0.45) !important;
  box-shadow: 0 ${d(1)} 0 rgba(74,44,18,0.12) !important; }`,x0=Object.freeze([".px-about",".px-profile",".px-support",".travelpanel-bar",".tview-bar",".tview-side",".tview-confirm","#wp-menu","#travel-pace-box",".helmpanel-bar",".saddlepanel-bar",".hmroot .hmtools","body .dfdecor-bar"]);function m0(){const e=ve.band;return`
/* ── GRIM1: THE DFO GRIMOIRE KIT (ui/grimoireDress.js) ── */
/* GRIM3: every picture is drawn pixel for pixel on the one grid - never smoothed (a photo, a video, the world and the
   paper doll's canvas stay as they are drawn) */
${r} *:not(img, video, canvas, iframe), ${r} *::before, ${r} *::after { image-rendering: pixelated; }
/* ...but the game's wordmark is no picture of the pack's: it is drawn smooth, as it was made */
${r} .px-wordmark, ${r} .px-wordmark *, ${r} .px-wordmark::before, ${r} .px-wordmark::after { image-rendering: auto; }
/* WINDOW - a torn page pinned on a board: the pack's cream page for a ground, the frame cut from its talk page and the
   spellmaker's desk (ui/grimoireArt.js), reaching outside the box so no window moves a pixel */
${O(k.window)}, ${O(k.windowGround)} {
  background: ${Ne}; color: ${h.ink};
  border-image: ${z("frame")} ${e} / ${d(e)} / ${d(e-4)} round;
  box-shadow: 6px 10px 26px rgba(0,0,0,0.6); outline: none; }
${r}[data-grim-pages="scroll"] :is(${st(k.window)}), ${r}[data-grim-pages="scroll"] :is(${st(k.windowGround)}) { background: ${Vt}; }
${r}:not([data-grim-art="ready"]) :is(${st(k.window)}) { border-color: ${h.woodLit} ${h.woodDark} ${h.outline} ${h.woodMid}; border-image: none;
  box-shadow: 0 0 0 4px ${h.wood}, 0 0 0 5px ${h.outline}, 6px 10px 26px rgba(0,0,0,0.65); }
${O(k.window," .px-corner")} { display: none; }
/* a SMALL window - a plaque in a corner, a bar along an edge, a menu at the pointer - is a scrap of page in a thin
   wooden frame: the torn-page board is for a window you read */
${O(x0)} { border-image: none; border-color: ${h.woodLit} ${h.woodDark} ${h.outline} ${h.woodMid};
  box-shadow: 0 0 0 2px ${h.wood}, 0 0 0 3px ${h.outline}, 3px 5px 12px rgba(0,0,0,0.55); }

/* PANEL - a box inside a page: a sheet of the older, tan scroll laid on it, its edge a brown line */
${O(k.panel)} { background: ${Vt}; color: ${h.ink};
  border-color: rgba(92,56,24,0.75) rgba(60,34,14,0.8) rgba(48,26,10,0.85) rgba(80,48,20,0.75);
  box-shadow: inset 0 0 14px rgba(96,54,16,0.32), 1px 2px 0 rgba(48,26,10,0.28); outline: none; }
${r}[data-grim-pages="scroll"] :is(${st(k.panel)}) { background: ${Ne}; }
${O(k.panelAccent)} { border-left-color: ${h.red}; }

/* RAILS - the left-hand page of the talk window: the same page, ruled off from the right-hand one */
${O([...k.railRight,".shell > .side","aside.side"])} { background: linear-gradient(rgba(120,70,20,0.07), rgba(120,70,20,0.07)), ${Ne}; border-right-color: rgba(60,34,14,0.75); color: ${h.ink}; }
${O(k.railLeft)} { border-left-color: rgba(60,34,14,0.75); }
/* THE MENUS' OWN SCREENS (Continue, Load Game, Settings, Overhauls): the rail is a page, the room beside it the desk the
   pack's cards and pages are laid on */
${r} .shell .pane, ${r} .shell .panes, ${r} .shell .list { background: ${ke(.32)} !important; }

/* PRESS - GrimoireUI presses nothing on a plate but its red Exit. What you can do on a page is WRITTEN on it, in ink,
   as its inventory writes Wagon, Info, Equip, Remove, Use and Gold down its parchment strip - red under the pointer,
   underlined in the pack's dotted rule. What stands on wood is lettered in its yellow, as its spellmaker letters Buy
   and New on the desk. Which is which is the press's own ground: the dress stamps it as it lands (data-grim-on). */
${O(s0)} { background: none; border-color: transparent; border-radius: 0; box-shadow: none; transition: none; filter: none;
  text-decoration: none; }
${r} [data-grim-on="page"] { background: none !important; border-color: transparent !important; box-shadow: none !important; border-radius: 0;
  color: ${h.ink} !important; text-shadow: 0 1px 0 rgba(255,240,205,0.4) !important; text-decoration: none; }
${r} [data-grim-on="page"].primary { color: ${h.red} !important; }
/* HUD-CLASS: a chosen press (\`.on\` - a word the HUD writes too) is named by its own press root, so no rule of the dress
   can reach the HUD's \`.on\` (test/hudclass_sheets.test.js); at rest only, so the hover after it still wins as it did */
${O(Kt,'[data-grim-on="page"].on:not(:hover):not(:focus-visible)')} { color: ${h.red} !important; }
${r} [data-grim-on="page"]:hover, ${r} [data-grim-on="page"]:focus-visible { color: ${h.redHi} !important; background: none !important;
  text-decoration: underline solid ${h.red}; text-underline-offset: 0.2em; outline: none; }
/* CANCEL - the way back out of a question: the pack's red word over its red rule */
${r} [data-grim-cancel][data-grim-on="page"] { color: ${h.red} !important; padding-left: 18px !important; padding-right: 18px !important;
  background: linear-gradient(${h.red}, ${h.red}) center bottom / calc(100% - 24px) 3px no-repeat,
    radial-gradient(circle, ${h.red} 1px, transparent 1.6px) left bottom / 6px 3px repeat-x !important; }
${r} [data-grim-on="wood"] { background: none !important; border-color: transparent !important; box-shadow: none !important; border-radius: 0;
  color: ${h.yellow} !important; text-shadow: 1px 1px 0 ${h.outline}, 2px 2px 0 rgba(0,0,0,0.5) !important; }
${r} [data-grim-on="wood"].primary { color: #fff27a !important; text-decoration: underline solid rgba(255,242,122,0.6); text-underline-offset: 0.22em; }
/* HUD-CLASS: the chosen press on wood by its own press root, as on the page - its rule underlined only while it is not
   disabled, where the plainer rule's underline gave way to the disabled one's */
${O(Kt,'[data-grim-on="wood"].on:not(:hover):not(:focus-visible)')} { color: #fff27a !important; }
${O(Kt,'[data-grim-on="wood"].on:not(:hover):not(:focus-visible):not(:disabled):not([disabled])')} {
  text-decoration: underline solid rgba(255,242,122,0.6); text-underline-offset: 0.22em; }
${r} [data-grim-on="wood"]:hover, ${r} [data-grim-on="wood"]:focus-visible { color: #fff8b0 !important; background: rgba(255,214,120,0.08) !important;
  text-decoration: underline dotted rgba(255,242,122,0.7); text-underline-offset: 0.22em; outline: none; }
${r} [data-grim-on]:active:not(:disabled) { translate: 1px 1px; }
${r} [data-grim-on]:disabled, ${r} [data-grim-on][disabled] { opacity: 0.45; text-decoration: none; background: none !important; translate: none; }
/* INK-DISABLED (2026-10-11): a press on a PAGE that cannot be pressed is written in the softer ink, solid - at 45% the
   brown on the tan scroll stood under 2:1, and the reason written beside its word (a friend's "offline", "no username",
   what a guild's name still needs) went with it. The softer ink still reads as the dead press beside the live one. */
${r} [data-grim-on="page"]:is(:disabled, [disabled]) { opacity: 1 !important; color: ${h.inkSoft} !important; text-decoration: none !important; cursor: default; }
/* ...and the reason itself (a press's \`*-why\`, written inside it): the press is a wooden surface to the ink, so its
   reason was re-said for the wood - cream on the scroll. On a page it is the soft ink, as its word is. */
${r} [data-grim-on="page"] [class$="-why"] { color: ${h.inkSoft} !important; text-shadow: none !important; }
/* EXIT - the way out of a window (its Close) and the one press a screen is for, in the pack's own red Exit frame: cut
   from its inventory's Exit press (ui/grimoireArt.js), the pack's yellow lettering set in it */
${r} [data-grim-exit], ${O([...k.primary,".px-winclose",".lv-ok"])} {
  background: linear-gradient(180deg, #6a0404, #4a0202) !important; color: ${h.yellow} !important;
  border: 2px solid #8a0c08 !important; border-image: ${z("exit")} 7 6 7 7 / ${d(7,"gq")} ${d(6,"gq")} ${d(7,"gq")} ${d(7,"gq")} stretch !important; border-radius: 0 !important;
  box-shadow: ${d(1,"gq")} ${d(1,"gq")} 0 rgba(0,0,0,0.55) !important;
  text-shadow: 1px 1px 0 #2a0000, 2px 2px 0 rgba(0,0,0,0.4) !important; text-decoration: none !important; }
${r} [data-grim-exit]:hover, ${r} [data-grim-exit]:focus-visible, ${O([...k.primary,".px-winclose",".lv-ok"],":hover")}, ${O([...k.primary,".px-winclose",".lv-ok"],":focus-visible")} {
  background: linear-gradient(180deg, #8a0806, #5a0302) !important; color: #fff27a !important; filter: brightness(1.12); outline: none; }
/* WARN - a press that costs something: written in the pack's red, struck under with a hard line */
${O(k.warn)} { color: ${h.red} !important; text-decoration: underline solid rgba(142,26,16,0.6) !important; text-underline-offset: 0.22em; }
${r} [data-grim-on="wood"]:is(${st(k.warn)}) { color: #ff8a6a !important; }

/* TILE - the inventory's wooden shelf box: what you pick sits IN it. Chosen, it is framed in the pack's yellow. */
${O(k.tile)} { background: rgba(14,8,3,0.92); color: ${h.cream}; text-shadow: ${Oe};
  border-color: #5a3a1e #2a170a #1c0f05 #4a2e16; border-radius: 0;
  border-image: ${z("cubby")} 5 5 7 6 fill / ${d(5,"gq")} ${d(5,"gq")} ${d(7,"gq")} ${d(6,"gq")} stretch; box-shadow: 0 0 0 1px ${h.outline}; transition: none; }
${O(k.tile,":hover")}, ${O(k.tile,":focus-visible")} { box-shadow: 0 0 0 1px ${h.outline}, inset 0 0 0 2px rgba(216,176,74,0.55); }
${O(k.tile,".on")}, ${O(k.tile,".sel")}, ${O(k.tile,'[aria-pressed="true"]')} {
  box-shadow: 0 0 0 1px ${h.outline}, inset 0 0 0 2px ${h.goldLeaf}, inset 0 0 16px rgba(216,176,74,0.28); }
${O(k.tile,":active")} { box-shadow: 0 0 0 1px ${h.outline}, inset 2px 3px 0 rgba(0,0,0,0.6); }

/* CHIP - a small plaque of the desk's wood, never pressed */
${O(k.chip)} { background: ${ke(.12)}; color: ${h.cream}; text-shadow: ${Oe};
  border-color: ${h.woodLit} #2a180a ${h.outline} ${h.woodMid}; box-shadow: 0 0 0 1px ${h.outline}, 2px 2px 0 rgba(0,0,0,0.35); }

/* WELL - sunk into the board: a dark hollow with the light caught on its far lip */
${O(k.well)} { background-color: rgba(22,13,6,0.9); color: ${h.cream};
  border-color: ${h.outline} ${h.woodMid} ${h.woodLit} #2a170a; box-shadow: 0 0 0 1px rgba(20,11,4,0.5), inset 2px 3px 0 rgba(0,0,0,0.55); }
/* a FIELD is a strip of fresh page in a dark frame, written in ink */
${O(k.input)} { background: ${h.cream}; color: ${h.ink}; text-shadow: none; caret-color: ${h.red};
  border-color: ${h.outline} ${h.woodLit} ${h.goldLeaf} ${h.woodMid}; }
/* INK-FIELDS (2026-10-11: the guild's name and the map's Find a place typed in cream and in yellow on the cream): a field
   is a WOODEN surface to the ink (its role says so) and its own sheet's light word - and, focused, the map's yellow - was
   re-said for the wood, which outweighs the plain rule above. What is typed in a field is ink, whatever is focused; the
   chat's own field said this first (below) and every field says it now. */
${O(k.input)}, ${O(k.input,":focus")} { color: ${h.ink} !important; -webkit-text-fill-color: ${h.ink} !important; caret-color: ${h.red} !important;
  text-shadow: none !important; }
${O(k.input,"::placeholder")} { color: ${h.inkFaint} !important; -webkit-text-fill-color: ${h.inkFaint} !important; opacity: 1; }
${O(k.input,":focus")} { border-color: ${h.red} ${h.goldLeaf} ${h.goldLeaf} ${h.red}; outline: none; }

/* BANDS - a window's name and the shelf its presses stand on: a plank of the desk across the page. GRIM3 (Dudey: "the
   wooden bars in the inventory look cheap"): a real plank - the desk's grain at the grid's pixels in a black outline,
   its top edge lit and its foot shaded a pixel each - laid on the page inside its torn edge,
   never a strip of texture run on under it */
/* a band whose own sheet gives it no room (the shop's "On the shelf") gets a plank's worth, so no word sits on its line */
${r} .remotehead { padding: ${d(2)} ${d(4)} !important; display: flex; align-items: center; min-height: ${d(14)}; box-sizing: border-box; }
${r} .remotehead .remotewho h3, ${r} .remotehead .remotewho .meta { margin: 0; line-height: 16px; }
${O([...k.header,...k.footer])} { background: ${i0} !important; color: ${h.cream}; text-shadow: ${Oe};
  border-color: transparent; border-image: none; box-shadow: 0 ${d(1)} 0 rgba(0,0,0,0.35); }
${O(k.headerRule)} { border-bottom-color: rgba(60,34,14,0.7); border-bottom-style: dotted; box-shadow: none; }
${O(k.footerRule)} { border-top-color: rgba(60,34,14,0.7); border-top-style: dotted; box-shadow: none; }

/* TABS - GRIM3: the pack's own tab plates (its inventory's), at its own pixels; the open one lit, its name red */
${O(k.tabs)} { ${Qa} }
${O(k.tabs,".on")} { ${Za} }
${O(k.tabs,":hover:not(.on)")}, ${O(k.tabs,":focus-visible:not(.on)")} { ${Ja} outline: none; }

/* RULES - ruled in brown ink, the pack's dotted line under a heading */
${O(k.rule)} { border-bottom-color: rgba(92,56,24,0.4); box-shadow: none; }
${O(k.ruleTop)} { border-top-color: rgba(92,56,24,0.4); box-shadow: none; }
${O(k.listRow)} { border-bottom-color: rgba(92,56,24,0.35); border-bottom-style: dotted; background-image: none; box-shadow: none; }
/* NO-BAR (2026-10-12, Mac: the Reforge's rows "have those lines"): a row under the pointer or chosen is not marked with a
   red bar down its edge - the page is washed under it, a shade deeper when it is the chosen one, as a finger on a page */
${O(k.listRow,":hover")}, ${O(k.listRow,":focus-visible")} { box-shadow: none; background-color: rgba(142,26,16,0.07); }
${O(k.listRow,".on")} { box-shadow: none; background-color: rgba(142,26,16,0.13); }
${O(k.qrow,".on")} { box-shadow: none; background: rgba(142,26,16,0.13); }
${O(k.wing)} { background: linear-gradient(180deg, rgba(60,34,14,0.75) 0 1px, transparent 1px); }
${r} .px-divider::before, ${r} .px-divider::after { background: rgba(60,34,14,0.6); }
${r} .px-sigil, ${r} .px-divider i { color: ${h.red}; }
/* NO-LINES (2026-10-11, a player: "those weird lines everywhere, those are not needed"): a page of the pack is not ruled
   off line by line. The thin separators under a row, over a row and under a heading, the wings and the dashes either
   side of a section's name are gone; what tells two rows apart is their spacing, as on the pack's own pages. */
${O([...k.rule,...k.listRow,...k.headerRule])} { border-bottom-color: transparent !important; box-shadow: none; }
${O([...k.ruleTop,...k.footerRule])} { border-top-color: transparent !important; box-shadow: none; }
${O(k.wing)} { background: none !important; }
${r} .px-divider::before, ${r} .px-divider::after { content: none !important; }
${r} .empty { border-color: transparent !important; background: rgba(120,70,20,0.08); }   /* an empty state: a wash of the page, no dashed box */
${r} .px-divider > span, ${r} .px-divider { color: ${h.red}; letter-spacing: 0.08em; }
/* the talk window: its two pages part by the scroll's own shading at the gutter, not a dotted line */
${r} .talk-topics { box-shadow: inset -10px 0 12px -10px rgba(60,34,14,0.55); }
${r} .talk-list > *, ${r} .talk-row { border-color: transparent !important; }
/* the Professions page: a profession is a line on the page (its bar the gold leaf in its groove), never a box; the open
   one marked as a rail's open row is. A choice at 50 is a scrap of the page tinted, its name in red; the chosen one
   darker, its name underlined in the pack's red */
${r} .prof-row { background: none !important; border-color: transparent !important; color: ${h.ink} !important; }
${r} .prof-row:hover { background: rgba(142,26,16,0.06) !important; }
${r} .prof-row.on { box-shadow: none !important; background: rgba(142,26,16,0.13) !important; }
${r} .prof-row.on .prof-name { color: ${h.red} !important; }
${r} .prof-row .prof-rank { color: ${h.inkSoft} !important; }
${r} .prof-spec { background: rgba(120,70,20,0.1) !important; border-color: transparent !important; box-shadow: none !important; color: ${h.ink} !important; }
${r} .prof-spec b { color: ${h.red} !important; text-shadow: none !important; }
${r} .prof-spec:hover:not(:disabled) { background: rgba(142,26,16,0.08) !important; }
${r} .prof-spec.on { background: rgba(142,26,16,0.14) !important; }
${r} .prof-spec.on b { text-decoration: underline solid ${h.red}; text-underline-offset: 0.2em; }
${r} .prof-spec.coming { border-style: none !important; font-style: italic; }
/* MASTER SKILLS: no box round a career group - its name in red over the pack's own dotted ink rule (the one its pages
   rule a heading with), its pips in gold leaf, its skills laid on the page under it */
${r} .px-mgroup { border-color: transparent !important; background: none !important; padding: 0 2px 2px !important; margin-bottom: 18px !important; }
${r} .px-mhead { border-bottom: 0; padding-bottom: 8px !important; margin-bottom: 10px !important; ${Be} }
${r} .px-mname { color: ${h.red} !important; text-shadow: none !important; }
${r} .px-mcount { color: ${h.inkSoft} !important; }
${r} .px-pips, ${r} .px-pip.on { color: ${h.goldLeaf} !important; text-shadow: 0 1px 0 ${h.outline} !important; }
/* THE REFORGE ON THE PAGE (2026-10-12, Mac: "make sure the fonts are readable the grey ones arent. plus make it look
   better"): a row reads as the pack's own price lists do - what it is in the book's red when it is a family to scry
   (an item keeps its rarity's ink), what it is for in ink beneath, its price in ink beside, and the press written in
   red when it can be pressed; a press that cannot says why in the softer ink, leaning, never faded. */
${r} .reforge-shell .broker-offer .broker-price { color: ${h.ink} !important; text-shadow: none !important; opacity: 1 !important; }
${r} .reforge-shell .broker-offer.scry-row .broker-name { color: #7a170c !important; text-shadow: none !important; }   /* the page's red, a shade deep: 4.7:1 on its darkest */
${r} .reforge-shell .broker-offer .broker-set { color: ${h.ink} !important; text-shadow: none !important; }
${r} .reforge-shell .broker-buy[data-grim-on="page"]:not(:disabled):not([disabled]):not(:hover) { color: #7a170c !important; }
${r} .reforge-shell .broker-buy[data-grim-on="page"]:is(:disabled, [disabled]) { color: #4f3218 !important; font-style: italic; }   /* 5:1 */
${r} .reforge-shell .broker-offer { padding-top: 8px !important; padding-bottom: 8px !important; }
${r} body .reforge-shell .reforge-tabs .act.reforge-tab.on[data-grim-on]:not(:hover):not(:focus-visible) { color: #7a170c !important; text-decoration: underline solid #7a170c !important; text-underline-offset: 0.22em; }   /* the open page's word, 4.7:1 and underlined */

/* THE NOTICE - GRIM3 (Dudey: "the notification box is unreadable"): a note on the tan scroll is written in the pack's
   brown ink and nothing else - Plus's hard dark shadow under each word, re-said in ink, doubled every letter - at the
   face's own size, its line a whole pixel of the grid, the red rule down its edge */
${r} .notice:not(.notice-toast) { border: ${d(1)} solid rgba(48,26,10,0.85) !important; border-left: ${d(2)} solid ${h.red} !important; border-right: 0 !important;
  box-shadow: ${d(1)} ${d(2)} 0 rgba(0,0,0,0.4), 0 8px 18px rgba(0,0,0,0.4) !important; padding: 12px 18px 10px 16px; }
${r} .notice:not(.notice-toast), ${r} .notice:not(.notice-toast) * { text-shadow: none !important; }
${r} .notice:not(.notice-toast) .notice-row { color: ${h.ink} !important; font-size: 16px; line-height: 20px; }
${r} .notice:not(.notice-toast) .notice-row.highlight { color: ${h.red} !important; }
${r} .notice:not(.notice-toast) .notice-hint { color: ${h.inkSoft} !important; border-top: 2px dotted rgba(92,56,24,0.55); font-size: 16px; letter-spacing: 0; text-transform: none; }

/* THE UI OVERHAUL CARD's own little rows, legible on their page */
${r} .look-colours-label { color: ${h.ink} !important; text-shadow: none !important; font-size: 12px; }
${r} .look-colour { background: none !important; border-color: rgba(92,56,24,0.45) !important; color: ${h.ink} !important; text-shadow: none !important; }
${r} .look-colour[aria-pressed="true"] { border-color: ${h.red} !important; color: ${h.red} !important; background: rgba(142,26,16,0.08) !important; }

/* THE CHOSEN OPTION - the pack's green wax seal (the Options window's Continue) */
${O(k.chosen)} { background: linear-gradient(180deg, #4fa064 0 1px, #2f7a46 1px calc(100% - 2px), #1d5530 calc(100% - 2px)); color: #f6efd0;
  text-shadow: 1px 1px 0 #0a2010; box-shadow: 0 0 0 1px ${h.outline}, inset 0 0 0 1px rgba(255,255,255,0.12); }

/* SCROLLBARS - GRIM3: a scroll's wooden rod in a groove ruled into the page, every line a whole pixel of the grid: the
   groove a dark channel with a lit far lip, the rod turned wood with a lit left face, a shaded right one and its two
   brass-capped ends; pressed, the rod is the pack's red */
${g0}
@supports not selector(::-webkit-scrollbar) { ${r} * { scrollbar-color: ${h.woodMid} rgba(92,56,24,0.18); } }

/* THE FRONT DOOR AND EVERY FULL SCREEN - the pack's own desk (its Biography screen: the candle, the open book) or its
   map of the Iliac Bay, where Plus had its starfield. GRIM3: the desk is drawn at a whole number of screen pixels to
   each of its own (--gc, the smallest that covers the screen), so its every pixel is the same square */
${r} .px-ground { opacity: 0 !important; animation: none !important; }
${r} .lv-sky { background: radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 100%), ${ke(.3)}; }
/* the loading screen on the desk; character creation over the pack's map of the Iliac Bay, as its own chargen screens
   stand over the map of Tamriel */
${r} .ld { background: radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.62) 100%),
  url("${me("BIOG00I0")}") 50% 100% / ${d(320,"gc")} ${d(200,"gc")} no-repeat, ${h.woodDark}; image-rendering: auto; }
${r} .wizard, ${r}[data-grim-backdrop="map"] .ld {
  background: radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.6) 100%), url("${me("TMAP00I0")}") 50% 50% / ${d(320,"gc")} ${d(200,"gc")} no-repeat, ${h.woodDark}; }
/* Plus's diamond marks beside a word go; the pack marks nothing that way */
${r} .px-c, ${r} .port-rowmark, ${r} .pick-mark, ${r} .px-qmark, ${r} .px-qtimed, ${r} .worntile, ${r} .px-profilegem, ${r} .px-gem,
${r} .px-divider i, ${r} .px-term { visibility: hidden !important; }
${r} body { background: ${h.woodDark}; }
${r} .px-vignette, ${r} .px-stars, ${r} .px-star { display: none !important; }
${r} .px-menu .doorbtn::before, ${r} .px-menu .doorbtn::after { color: ${h.yellowDeep}; }

/* ── THE HUD ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
/* THE VITALS - the pack's three glass vials, on their sides: GRIM3: each bar is the vial at its own pixels - its cork,
   then its tube repeated along the bar (ui/grimoireArt.js VIAL_CUT), never one picture stretched - the glass drained
   where the bar has gone, the words in the pack's lettering over the glass. No stone, no brass clasps. */
${r} .hud-vital::before, ${r} .hud-vital::after { display: none; }
${r} .hud-vital .hud-track { height: ${gt}; border-color: transparent; border-radius: 0; background: ${K("Health",!0)}, #1a0a0a;
  box-shadow: 0 0 0 ${d(1,"gq")} ${h.outline}; filter: drop-shadow(${d(1,"gq")} ${d(1,"gq")} 0 rgba(0,0,0,0.55)); }
${r} .hud-magicka .hud-track { background: ${K("Magicka",!0)}, #0a0e18; }
${r} .hud-fatigue .hud-track { background: ${K("Fatigue",!0)}, #0a120a; }
${r} .hud-vital .hud-fill { background: ${K("Health")}, var(--v-body); }
${r} .hud-magicka .hud-fill { background: ${K("Magicka")}, var(--v-body); }
${r} .hud-fatigue .hud-fill { background: ${K("Fatigue")}, var(--v-body); }
${r} .hud-vital .hud-fill::after { width: min(1px, 100%); opacity: 0.5; }
${r} .hud-vital .hud-chunk { display: none !important; }
${r} .hud-vlabel { padding-left: ${d(F.cork+2,"gq")}; color: #fff3cf; letter-spacing: 0; text-transform: none; font-size: 12px;
  text-shadow: -1px 0 0 #120804, 1px 0 0 #120804, 0 -1px 0 #120804, 0 1px 0 #120804, 1px 2px 0 rgba(0,0,0,0.6); }
${r} .hud-num { color: #fffbe6; font-size: 12px; text-shadow: -1px 0 0 #120804, 1px 0 0 #120804, 0 -1px 0 #120804, 0 1px 0 #120804, 1px 2px 0 rgba(0,0,0,0.6); }
${r} .hud-vital.low .hud-track { animation: grim-vlow 0.9s steps(1, end) infinite; }
@keyframes grim-vlow { 0% { filter: drop-shadow(0 0 3px #ff2a14) drop-shadow(1px 2px 0 rgba(0,0,0,0.6)); } 50% { filter: drop-shadow(1px 2px 0 rgba(0,0,0,0.6)); } }
@media (prefers-reduced-motion: reduce) { ${r} .hud-vital.low .hud-track { animation: none; filter: drop-shadow(0 0 3px #ff2a14); } }
/* the foe's bar, the breath and the grip: the same glass - the red vial, the blue, the green */
${r} .hud-foe .hud-track, ${r} .hud-breath .hud-track { height: ${gt}; border-color: transparent; border-radius: 0;
  box-shadow: 0 0 0 ${d(1,"gq")} ${h.outline}; filter: drop-shadow(${d(1,"gq")} ${d(1,"gq")} 0 rgba(0,0,0,0.55)); }
/* THE FOE'S BAR - the pack's red vial on its side, as wide as the compass is long and as tall as your own vials */
${r} .hud-foe .hud-foetrack { width: min(360px, 50vw); height: ${gt}; }
${r} .hud-foe .hud-track { background: ${K("Health",!0)}, #1a0a0a; }
${r} .hud-foe .hud-fill { background: ${K("Health")}, #8a1c18; }
${r} .hud-foe .hud-chunk { display: none !important; }
/* the foe's bar is the player's own glass, as thick as the player's vials - whichever face the foe bar is set to (the
   blade picture stood twice as thick: Dudey, "the enemy hp bar should be scaled the same as the players hp bar in
   thickness") */
${r} .hud-foe.blade .hud-foeblade { display: none !important; }
${r} .hud-foe.blade .hud-foetrack { display: block !important; }
/* GRIM3: WHAT A BAR LOSES DRAINS AWAY IN THE GLASS (Dudey, on the fuse it replaced: "we need a different fitting effect
   thats not too much"): what a blow, a spell or a sprint took stays a moment as the vial's own liquid gone dark - the
   same glass, the same tube, darkened and dulled - and drains back to the liquid at the game's own pace (the held strip
   the bar always kept, enhancedHud.js lossTick). No flame, no spark: a vial losing what it held. */
${r} .hud-vital .hud-ghost, ${r} .hud-foe .hud-foetrack .hud-ghost { opacity: 1; border-radius: 0; z-index: -1; display: block;
  background: ${K("Health")}, #5a1410; filter: brightness(0.5) saturate(0.75); animation: none; }
${r} .hud-magicka .hud-ghost { background: ${K("Magicka")}, #142a5a; }
${r} .hud-fatigue .hud-ghost { background: ${K("Fatigue")}, #1a3a14; }
${r}[data-grim-vitals="upright"] .hud-vital .hud-ghost { background: ${z("vialHealthUp")} 0 0 / ${d(86,"gq")} 100% no-repeat, #5a1410; }
${r}[data-grim-vitals="upright"] .hud-magicka .hud-ghost { background: ${z("vialMagickaUp")} 0 0 / ${d(86,"gq")} 100% no-repeat, #142a5a; }
${r}[data-grim-vitals="upright"] .hud-fatigue .hud-ghost { background: ${z("vialFatigueUp")} 0 0 / ${d(86,"gq")} 100% no-repeat, #1a3a14; }
${r} .hud-foename { font-size: 16px; margin-bottom: 2px; }
${r} .hud-foepoise { width: min(360px, 50vw); height: ${d(3,"gq")}; max-height: ${d(3,"gq")}; margin-top: ${d(2,"gq")}; background: rgba(28,14,6,0.75); box-shadow: 0 0 0 ${d(1,"gq")} ${h.outline}; border-radius: 0; }
${r} .hud-foepoise.poise-windup .hud-poisefill { background: linear-gradient(180deg, #f6dc7a 0 ${d(1,"gq")}, ${h.goldLeaf} ${d(1,"gq")}); }
${r} .hud-poiseword { color: ${h.yellow}; text-shadow: ${Oe}; text-transform: none; letter-spacing: 0; }
${r} .hud-foename, ${r} .hud-breathlabel { color: ${h.yellow}; text-transform: none; letter-spacing: 0.02em;
  text-shadow: -1px 0 0 #120804, 1px 0 0 #120804, 0 -1px 0 #120804, 0 1px 0 #120804, 1px 2px 0 rgba(0,0,0,0.6); }
/* RENOWN - a strip of page with the climb to the next rank in gold leaf */
${r} .hud-renowntrack { background: ${Ne}; border-color: ${h.woodLit} ${h.woodDark} ${h.outline} ${h.woodMid}; box-shadow: 0 0 0 1px ${h.outline}; }
${r} .hud-renowntrack .hud-fill { background: linear-gradient(180deg, #f6dc7a 0 2px, ${h.goldLeaf} 2px calc(100% - 3px), #9a7420 calc(100% - 3px)); }
${r} .hud-renownnum { color: ${h.ink}; text-shadow: 0 1px 0 rgba(255,240,200,0.5); }
${r} .hud-renownbox { color: ${h.yellow}; text-shadow: ${Oe}; }

/* THE COMPASS - GRIM3 (Dudey: "the compas needs to look more like a compass not like a board with NSWE in it"; "its
   HUGE!!! turning it around would also make more sense"): the pack's own compass - its gilded dome in its wooden box
   (COMPBOX) over its parchment strip (COMPASS: N, E, S, W and the ticks between, drawn by the pack) - on the game's own
   grid (ui/grimoireArt.js compBox, compass), two and a half screen pixels to each of its own (--gcm: "still a bit too
   big" at the pack's 3x, "a bit too small" at 2x), and turned over to hang from the top of the screen: the box's flat back on the
   screen's edge, its dome bowing down, the gold needle pointing down at the heading from above. Only the box is turned;
   the strip reads the right way up, its letters let down under the needle, sliding under the dome as you turn (the HUD says the heading, --hud-heading). The
   quest's, the party's and Detect's marks still ride the strip; the HUD's word points go - the strip writes its own. */
${r} .hud-top { top: 0 !important; }
${r} .hud-compass { --gcm: calc(var(--gq, 2px) * 1.25); width: calc(69 * var(--gcm)); height: calc(17 * var(--gcm)); background: none; border: 0; box-shadow: none;
  filter: drop-shadow(${d(1,"gq")} ${d(1,"gq")} 0 rgba(0,0,0,0.55)); }
/* GRIM4 (Dudey: "The compass looks blurry make better readable"): the box and the strip are the pack's own pictures at
   ITS resolution - three of its pixels to one of the game's - drawn smooth at the compass's size, never the game-grid
   cut stretched pixel for pixel by two and a half (which smeared every letter): N, E, S and W keep the pack's own
   strokes. */
${r} .hud-compass::after { content: ''; position: absolute; inset: 0; z-index: 3; pointer-events: none; image-rendering: auto;
  background: url("${me("COMPBOX")}") 0 0 / 100% 100% no-repeat; transform: scaleY(-1); }
${r} .hud-compass .hud-strip { left: calc(2 * var(--gcm)); right: calc(2 * var(--gcm)); top: calc(2 * var(--gcm)); bottom: var(--gcm); image-rendering: auto;
  background: url("${me("COMPASS")}") no-repeat #bc8941;
  background-size: calc(322 * var(--gcm)) calc(14 * var(--gcm));
  background-position: calc((32.5 - 32.83 - var(--hud-heading, 0) * 257) * var(--gcm)) calc(4 * var(--gcm)); }
/* TURN1 (Dudey: "let the players rotate the compass with alt + u"): unlocked, the compass carries a turn-over press
   beside its X; turned, the box stands the way the pack painted it - the dome up, the needle under it - and the strip's
   letters rise to meet the needle. */
${r} #hud-layout-handles i[data-hm-handle="turn"] { display: block; }
${r} .hud-compass[data-hm-turn]::after { transform: none; }
${r} .hud-compass[data-hm-turn] .hud-strip { top: var(--gcm); bottom: calc(2 * var(--gcm));
  background-position-y: calc(0.5 * var(--gcm)); }
${r} .hud-compass .hud-point { visibility: hidden; }
${r} .hud-needle { display: none; }

/* THE HOTBAR - a row of the inventory's shelf boxes; the key in yellow on the lip, what is in hand framed in gold */
${r} .hb .hb-slot { background: rgba(14,8,3,0.82); border-image: ${z("cubby")} 5 5 7 6 fill / ${d(5,"gq")} ${d(5,"gq")} ${d(7,"gq")} ${d(6,"gq")} stretch;
  box-shadow: 0 0 0 1px ${h.outline}, 2px 3px 0 rgba(0,0,0,0.45); }
${r} .hb .hb-frame { border-color: transparent; box-shadow: none; }
${r} .hb .hb-slot.hb-empty .hb-frame { border-color: transparent; }
${r} .hb .hb-slot.hb-active .hb-frame { border-color: ${h.goldLeaf}; box-shadow: inset 0 0 12px rgba(216,176,74,0.45); }
${r} .hb .hb-slot.hb-strike .hb-frame { border-color: #fff27a ${h.goldLeaf} ${h.yellowDeep} #fff27a; }
${r} .hb .hb-key { color: ${h.yellow}; text-shadow: ${Oe}; }
${r} .hb .hb-caption { background: ${ke(.1)}; color: ${h.cream}; border-color: ${h.woodLit} #2a180a ${h.outline} ${h.woodMid}; }

/* THE QUICKSLOT DIAMOND - a rhombus of the desk's wood with a gilded rim */
${r} .hud-qdiamond .hud-qframe { background: linear-gradient(135deg, #f0d276 0%, ${h.goldLeaf} 30%, #8a6418 70%, #4a3208 100%); }
${r} .hud-qdiamond .hud-qground { background: linear-gradient(135deg, rgba(58,36,20,0.95) 0%, rgba(30,18,8,0.92) 60%, rgba(18,10,4,0.9) 100%); }
${r} .hud-qdiamond .hud-qcell.socket .hud-qframe { background: linear-gradient(135deg, rgba(122,82,48,0.7), rgba(42,24,10,0.7)); }
${r} .hud-qdiamond .hud-qcell.cycling .hud-qframe { background: linear-gradient(135deg, #fff39a, ${h.yellow} 50%, #9a8a14); }

/* THE DIAL - GRIM4 (Dudey: "instead of words give this fitting symbols, all in the style of grimoire"): each door of the
   Tab dial is a piece of the pack's own painting (ui/grimoireArt.js DIAL_ICONS) - the Empire's helm for Skills, the
   spellmaker's spellbook for Magic, the map of Tamriel for Map, the Save Game chest for Items - standing at the same
   distance from the knot on all four sides, the rule from each reaching the same breath short of it. The word stays
   on the door for a reader of the page, unseen; the symbol under the pointer (or the keys) is lit and edged in the
   pack's yellow, the others a shade back. */
${r} .px-dial .px-rose { --dial-r: clamp(64px, calc(39vh - 110px), 150px); --dial-k: 1; }
${r} .px-dial .px-arm[data-grim-icon] { font-size: 0 !important; letter-spacing: 0; text-indent: 0; gap: 0; padding: 6px; min-width: 0; min-height: 0;
  text-shadow: none; color: transparent; }
${r} .px-dial .px-arm[data-grim-icon] .px-term { display: none; }
${r} .px-dial .px-arm[data-grim-icon] .px-c { visibility: visible !important; display: block; flex: 0 0 auto; font-size: 0; color: transparent; text-shadow: none;
  background: center / 100% 100% no-repeat; image-rendering: auto;
  filter: brightness(0.78) saturate(0.85) drop-shadow(2px 3px 0 rgba(0,0,0,0.55)); }
${r} .px-dial .px-arm[data-grim-icon]:is(.on, :hover, :focus-visible) .px-c {
  filter: drop-shadow(0 0 1px ${h.yellow}) drop-shadow(0 0 5px rgba(244,224,76,0.5)) drop-shadow(2px 3px 0 rgba(0,0,0,0.55)); }
${Object.keys(le).map(t=>{const[a,o]=si(t);return`${r} .px-dial .px-arm[data-grim-icon="${t}"] .px-c { width: calc(${a}px * var(--dial-k)); height: calc(${o}px * var(--dial-k));
  background-image: var(${ta(li(t))}, none);${le[t].cells?" image-rendering: pixelated;":""} }`}).join(`
`)}
${r} .px-dial .px-arm[data-grim-icon]::after { content: none; }
${r} .px-dial .px-arm[data-grim-icon]::before { background: rgba(216,176,74,0.4); }
${r} .px-dial .px-arm[data-grim-icon]:is(.on, :hover)::before { background: ${h.goldLeaf}; }
${r} .px-dial .px-arm.px-n[data-grim-icon] { left: 50%; top: calc(50% - var(--dial-r)); bottom: auto; transform: translate(-50%, -100%); }
${r} .px-dial .px-arm.px-s[data-grim-icon] { left: 50%; top: calc(50% + var(--dial-r)); bottom: auto; transform: translate(-50%, 0); }
${r} .px-dial .px-arm.px-w[data-grim-icon] { left: calc(50% - var(--dial-r)); right: auto; top: 50%; transform: translate(-100%, -50%); }
${r} .px-dial .px-arm.px-e[data-grim-icon] { left: calc(50% + var(--dial-r)); right: auto; top: 50%; transform: translate(0, -50%); }
${r} .px-dial .px-arm.px-n[data-grim-icon]::before { left: 50%; top: calc(100% + 8px); bottom: auto; width: 2px; height: calc(var(--dial-r) - 46px); transform: translateX(-50%); }
${r} .px-dial .px-arm.px-s[data-grim-icon]::before { left: 50%; bottom: calc(100% + 8px); top: auto; width: 2px; height: calc(var(--dial-r) - 46px); transform: translateX(-50%); }
${r} .px-dial .px-arm.px-w[data-grim-icon]::before { left: calc(100% + 8px); right: auto; top: 50%; height: 2px; width: calc(var(--dial-r) - 46px); transform: translateY(-50%); }
${r} .px-dial .px-arm.px-e[data-grim-icon]::before { right: calc(100% + 8px); left: auto; top: 50%; height: 2px; width: calc(var(--dial-r) - 46px); transform: translateY(-50%); }
@media (max-width: 480px) { ${r} .px-dial .px-rose { --dial-k: 0.72; --dial-r: clamp(56px, calc(43vw - 90px), 110px); } }

/* THE FOE'S VIAL AND THE BOSS'S - GRIM4 (Dudey: "The lifebar of the enemy and the boss are not looking like the lifebar
   of the player"): the very vial your own health stands in - the pack's whole red vial, cork, glass, its light and its
   bubbles, at its own pixels (ui/grimoireArt.js vialHealth), laid on its side - never a length of tube repeated. The
   foe's is your vial's size exactly (as long as the compass is wide); a boss's the same vial at the game's full scale,
   the bigger glass for the bigger foe. What a blow took drains in the glass, darkened, as yours does. */
${r} .hud-foe .hud-foetrack { width: ${d(86,"gq")}; height: ${gt}; background: ${z("vialHealthEmpty")} 0 0 / 100% 100% no-repeat, #1a0a0a; }
${r} .hud-foe .hud-foetrack .hud-fill { background: ${z("vialHealth")} 0 0 / ${d(86,"gq")} 100% no-repeat, #8a1c18; }
${r} .hud-foe .hud-foetrack .hud-ghost { background: ${z("vialHealth")} 0 0 / ${d(86,"gq")} 100% no-repeat, #5a1410; }
${r} .hud-foe .hud-foetrack .hud-fill { position: relative; }
${r} .hud-foe .hud-foetrack .hud-fill::after, ${r} .wb-boss-fill::before { content: ''; position: absolute; top: 0; bottom: 0; right: 0; width: min(1px, 100%);
  background: var(--v-hi, #f2a597); opacity: 0.5; }
${r} .hud-foe .hud-foepoise { width: ${d(86,"gq")}; }
/* ...and the breath and the grip are the same glass whole: the blue vial and the green */
${r} .hud-breath .hud-track { width: ${d(86,"gq")}; background: ${z("vialMagickaEmpty")} 0 0 / 100% 100% no-repeat, #0a0e18; }
${r} .hud-breath .hud-fill { background: ${z("vialMagicka")} 0 0 / ${d(86,"gq")} 100% no-repeat, #2f5fb4; }
${r} .hud-grip .hud-track { background: ${z("vialFatigueEmpty")} 0 0 / 100% 100% no-repeat, #0a120a; }
${r} .hud-grip .hud-fill { background: ${z("vialFatigue")} 0 0 / ${d(86,"gq")} 100% no-repeat, #3a8a3a; }
${r} .wb-boss-track { width: ${d(86)}; max-width: 100%; height: ${d(11)}; margin: ${d(2,"gq")} auto ${d(2,"gq")}; box-sizing: border-box; border: 0 !important; border-radius: 0;
  background: ${z("vialHealthEmpty")} 0 0 / 100% 100% no-repeat, #1a0a0a !important; box-shadow: 0 0 0 ${d(1,"gq")} ${h.outline} !important;
  filter: drop-shadow(${d(1,"gq")} ${d(1,"gq")} 0 rgba(0,0,0,0.55)); }
${r} .wb-boss-track::before, ${r} .wb-boss-track::after, ${r} .wb-boss-fill::after { display: none !important; }
${r} .wb-boss-fill { background: ${z("vialHealth")} 0 0 / ${d(86)} 100% no-repeat, #8a1c18 !important; box-shadow: none !important; }
${r} .wb-boss-ghost { background: ${z("vialHealth")} 0 0 / ${d(86)} 100% no-repeat, #5a1410 !important; filter: brightness(0.5) saturate(0.75); opacity: 1 !important; }
${r} .wb-boss-bar.sea .wb-boss-track { background: ${z("vialMagickaEmpty")} 0 0 / 100% 100% no-repeat, #0a0e18 !important; }
${r} .wb-boss-bar.sea .wb-boss-fill { background: ${z("vialMagicka")} 0 0 / ${d(86)} 100% no-repeat, #2f5fb4 !important; }
${r} .wb-boss-bar.sea .wb-boss-ghost { background: ${z("vialMagicka")} 0 0 / ${d(86)} 100% no-repeat, #142a5a !important; }
${r} .wb-boss-bar.brass .wb-boss-fill { filter: sepia(1) saturate(1.8) hue-rotate(-6deg) brightness(1.08); }
${r} .wb-boss-mark { top: 0; bottom: 0; width: ${d(1,"gq")}; background: rgba(20,11,4,0.8) !important; }
${r} .wb-boss-name { color: ${h.yellow}; letter-spacing: 0.02em; text-transform: none;
  text-shadow: -1px 0 0 #120804, 1px 0 0 #120804, 0 -1px 0 #120804, 0 1px 0 #120804, 1px 2px 0 rgba(0,0,0,0.6); }
@media (prefers-reduced-motion: no-preference) { ${r} .wb-boss-bar.low .wb-boss-track { animation: grim-vlow 0.9s steps(1, end) infinite; } }

/* THE REVENANT'S CARD - GRIM4 (Dudey: "the revenant window isnt readable"): a card on the tan scroll is written in the
   pack's ink, flat - the stack's hard dark shadow (meant for words over the world) under every letter doubled each one
   on the paper. Its name in ink over the dotted rule, what it is in red, its rank and kind in the softer ink, what it
   says in ink; the two chips stay lettered on their wood. */
${r} .rvncard, ${r} .rvncard :not(.rvncard-rank, .rvncard-mood) { text-shadow: none !important; }
${r} .rvncard .rvncard-kicker { line-height: 20px; }
${r} .rvncard .rvncard-name { color: ${h.ink} !important; line-height: 20px; padding-bottom: 2px; margin-bottom: 4px; border-bottom: 2px dotted rgba(92,56,24,0.55) !important; }
${r} .rvncard .rvncard-sub { color: ${h.inkSoft} !important; line-height: 20px; }
${r} .rvncard .rvncard-say { color: ${h.ink} !important; line-height: 20px; }
${r} .rvncard .rvncard-body { color: ${h.inkSoft} !important; line-height: 20px; }
${r} .rvncard .rvncard-mood { line-height: 18px; vertical-align: 0; }

/* HOW MANY - GRIM5 (Dudey: "the "of 5" my inner monk is killing me xD its not in the middle next ot the how many box"): the
   question's three parts on one line, each centred on the field - a word's own margin (a note's, re-said) never lifts
   one of them off it */
${r} .qtyfield { align-items: center; }
${r} .qtyfield > span { margin: 0 !important; padding: 0 !important; line-height: 20px; align-self: center; }
/* THE PACK'S FOOT - GRIM5 (Dudey: "The gold counter is also a bit misplaced"): the purse's word and figure stand on
   the plank's middle line as the carry weight's do - never on the Drop press's baseline, which lifted them - and the
   carry's bar is a bar: the skill's thin gold groove at a length of its own, never squeezed to a sliver */
${r} .pack-shell .packgold { align-items: center; }
${r} .pack-shell .packbar :is(.packcarry, .packgold) > :is(.k, .v) { line-height: 20px; }
${r} .pack-shell .packcarry .px-meter { flex: 0 0 auto; width: ${d(60,"gq")}; height: ${d(3,"gq")}; border: 0; border-radius: 0;
  background: rgba(20,11,4,0.6); box-shadow: 0 0 0 ${d(1,"gq")} ${h.outline}, 0 1px 0 ${d(1,"gq")} rgba(255,214,150,0.12); }
${r} .pack-shell .packcarry .px-fill { box-shadow: none; background: linear-gradient(180deg, #fff0a0 0 ${d(1,"gq")}, ${h.goldLeaf} ${d(1,"gq")} ${d(2,"gq")}, #9a7420 ${d(2,"gq")}); }
${r} .pack-shell .packcarry .px-fill.blood { background: linear-gradient(180deg, #f2a597 0 ${d(1,"gq")}, #b53a2e ${d(1,"gq")} ${d(2,"gq")}, #6a1c14 ${d(2,"gq")}); }

/* GRIM6 - Dudey's last list.
   The front door's settings jumped when a group was pressed: Plus's ground canvas (hidden under the dress, but still
   1200 pixels tall in a 960-pixel frame) let the press scroll the whole menu up - it is out of the page here. */
${r} .px-ground { display: none !important; }
/* the held map's Find me press goes ON THE DUNGEON'S SHEET (Dudey: "remove the find me button in dungeon 3d handdrawn map")
   - and stays on the world's and the town's, left of Close (FINDME-SHEET, Mac: "the worldmap is also missing the find me
   button next to close"): the rule took it off every sheet, the world map's with the dungeon's */
${r} .hmroot[data-hm-sheet="automap"] .hmfindme { display: none !important; }
/* THE PACK'S DOLL (Dudey: "box fonts leaving the box ... this cant happening"): a slot's word and a piece's name are
   written INSIDE the shelf box - kept off its frame by the frame's own width - wrapping between words, never run over
   the wood or cut at the edge */
${r} .pack-shell .equipped .wornrow { padding: ${d(5,"gq")} ${d(5,"gq")} ${d(7,"gq")} ${d(6,"gq")} !important; overflow: hidden; }
${r} .pack-shell .equipped .wornrow .worntext { min-width: 0; max-width: 100%; }
${r} .pack-shell .equipped .wornrow :is(.wornslot, .wornname) { white-space: normal !important; overflow-wrap: break-word; max-width: 100%;
  line-height: 16px; letter-spacing: 0 !important; }
${r} .pack-shell .equipped .wornpair > .wornrow :is(.wornslot, .wornname) { text-align: center; }
/* THE CHAT, on its page (Dudey: "The chat fonts when i type in it are white ... same for reading names"): what you type
   is ink on the field; a name keeps its colour, deepened to read on the paper (a plain one is ink); the times, the tags
   and the roster's head the softer ink; a herald's line the blue ink */
${r} body .dfchat-input { color: ${h.ink} !important; -webkit-text-fill-color: ${h.ink} !important; caret-color: ${h.red}; text-shadow: none !important; }
${r} body .dfchat-input::placeholder { color: ${h.inkFaint} !important; -webkit-text-fill-color: ${h.inkFaint} !important; }
${r} .dfchat-box :is(.dfchat-name, .dfchat-who-name) { text-shadow: none !important; }
/* NAME-INK (2026-10-11, Mac: "the color was the problem not the font"): a name deepened to three tenths was the ink its
   words are written in, and a speaker read as part of the line. A name is in a colour of its own on the page (ui/
   chatColours.js NAME_COLOURS, each 4.5:1 or better on the page): a stranger's the page's red, my own a brown gold, a
   party member's green and a friend's blue - social's two colours (set on the element) each deepened by hand, not by a
   filter, so they keep their hue. */
${r} .dfchat-box :is(.dfchat-name, .dfchat-who-name) { color: ${qt.other.dark} !important; filter: none !important; }
${r} .dfchat-box .dfchat-line.mine .dfchat-name, ${r} .dfchat-box .dfchat-who-row.me .dfchat-who-name { color: ${qt.mine.dark} !important; }
${r} :is(.dfchat-box, .dfsocial) :is(.dfchat-name, .dfchat-who-name, .dfsocial-name)[style*="115, 255, 115"] { color: ${qt.party.dark} !important; filter: none !important; }
${r} :is(.dfchat-box, .dfsocial) :is(.dfchat-name, .dfchat-who-name, .dfsocial-name)[style*="143, 208, 255"] { color: ${qt.friend.dark} !important; filter: none !important; }
/* CHAT-COLOURS on the page: the chat is written on the CREAM page (the lighter of the pack's two), so a channel's
   colour - ink-dark, each 4.5:1 or better - reads as a colour and not as the ink; a pip of it on each tab's plate */
${r} body .dfchat-box { background: ${Ne} !important; }
${rr(`${r} body .dfchat[data-colours="on"] .dfchat-box`,"dark",!0)}
${nr(`${r} body .dfchat[data-colours="on"] .dfchat-box`,"dark",!0)}
${r} body .dfchat[data-colours="on"] .dfchat-box :is(.dfchat-tab, .dfchat-chan)[data-tab]::before { box-shadow: 0 0 0 1px rgba(255,240,205,0.7) !important; }
${Object.entries(yo).map(([t,a])=>`${r} body .dfchat[data-colours="on"] .dfchat-box .dfchat-chan[data-tab="${t}"] { color: ${a.dark} !important; }`).join(`
`)}
/* ...and the lines standing over the world keep the light colours, under the HUD's outline (the box's ink is the box's) */
${rr(`${r} body .dfchat[data-colours="on"] .dfchat-peek`,"light",!0)}
${nr(`${r} body .dfchat[data-colours="on"] .dfchat-peek`,"light",!0)}
/* PING1 on the page: the line on a gold wash with a bar at its edge, my @name the deep brown-gold, underlined */
${r} .dfchat-box .dfchat-line.ping { background: ${qe.wash.dark} !important; box-shadow: inset 3px 0 0 ${qe.bar.dark} !important; }
${r} .dfchat-box .dfchat-mention { color: ${qe.mention.dark} !important; text-decoration: underline solid ${qe.bar.dark}; text-underline-offset: 0.18em; }
${r} .dfchat-peek .dfchat-mention { color: ${qe.mention.light} !important; }
/* THE UNREAD COUNT ON A TAB'S PLATE (2026-10-11, Mac: "make the 5 shown in the channel not cover whatever it is the 5
   is also not really well placed"): Plus's dot is a 7px disc with its number drawn at no size, and on the plate the
   face's own size came back - the number stood over the dot, above the word's line and against the plate's edge. On the
   page it is a wax seal: the book's red disc, the number in cream at the middle of it, beside the word on its line and
   clear of it; a tab holding a line that names me, the mention's gold with the number in ink. */
${r} body .dfchat-box .dfchat-tab .dfchat-badge:not(:empty) { display: inline-flex !important; align-items: center; justify-content: center;
  box-sizing: border-box; min-width: 17px; height: 17px; padding: 0 4px !important; margin: 0 0 0 7px !important; border-radius: 9px !important;
  font-size: 12px !important; line-height: 1 !important; letter-spacing: 0 !important; text-indent: 0 !important; vertical-align: middle;
  position: relative; top: -1px; color: #fff0c8 !important; -webkit-text-fill-color: #fff0c8 !important; text-shadow: none !important;
  text-decoration: none !important; background: ${h.red} !important; box-shadow: 0 0 0 1px rgba(40,14,4,0.65), inset 0 1px 0 rgba(255,190,150,0.35) !important; }
${r} body .dfchat-box .dfchat-tab.pinged .dfchat-badge:not(:empty) { background: #e2ad42 !important; color: ${h.ink} !important; -webkit-text-fill-color: ${h.ink} !important;
  box-shadow: 0 0 0 1px rgba(60,30,4,0.7), inset 0 1px 0 rgba(255,240,190,0.6) !important; }
${r} .dfchat-badge.ping { background: ${qe.bar.dark} !important; }
/* THE SOCIAL PANEL, on its scroll (2026-10-11: "those fonts need to be made readable"): a name keeps the colour its
   standing earns (a friend's blue, a party's green - set on the element, which no sheet's ink can re-say) deepened to
   read on the tan as the chat's names are - half as bright stood at 2.3:1 on the scroll, three tenths stands near 4:1 -
   and a plain name, a subject, a letter's own words are ink. INK-VARS reads the rest (its greys, its bone) as ink. */
${r} .dfsocial :is(.dfsocial-name, .dfsocial-subject)[style*="color"] { filter: brightness(0.3) saturate(1.6); text-shadow: none !important; }   /* (a party's and a friend's names: their own deepened colour, NAME-INK above) */
${r} .dfsocial :is(.dfsocial-name, .dfsocial-subject, .dfsocial-lettertext):not([style*="color"]) { color: ${h.ink} !important; text-shadow: none !important; }
${r} .dfsocial .dfsocial-letter.read .dfsocial-name { color: ${h.inkSoft} !important; }
${r} .dfchat-box :is(.dfchat-time, .dfchat-tag, .dfchat-whohead, .dfchat-who-more, .dfchat-who-tag) { color: ${h.inkSoft} !important; text-shadow: none !important; }
${r} .dfchat-box .dfchat-line.system .dfchat-text { color: #163a6a !important; text-shadow: none !important; }   /* CHAT-COLOURS: 5:1 on the cream page's darkest (the herald's #1f4f8e stood at 3.6) */
${r} .dfchat-box :is(.dfchat-time, .dfchat-tag) { color: #4f3218 !important; }   /* ...and a line's time and tag 5:1 too, on the mention's wash as well */
/* ...and with the box shut (Dudey: "make sure the blue event text is readable when the chat box is not open"), the lines
   that stand over the world wear the HUD's hard outline, every one - a herald's blue among them */
${r} .dfchat-peek, ${r} .dfchat-peek * {
  text-shadow: -1px 0 0 #120804, 1px 0 0 #120804, 0 -1px 0 #120804, 0 1px 0 #120804, 1px 2px 0 rgba(0,0,0,0.6) !important; }
${r} .dfchat-peek .dfchat-line.system .dfchat-text { color: #9cc8ff !important; }

/* THE OVERWORLD'S FILTERS - GRIM4 (Dudey: "the numbers next to the filters are hardly readable"): a count is written in
   ink at the face's own size, as its word is, on the same line; the block is wide enough that no word is cut, and the
   waypoints' hint wraps on its page instead of running off it. */
${r} .tview-side { width: 316px; }
${r} .tview-filter .tview-fnum { font-size: 16px !important; line-height: 20px; color: ${h.inkSoft} !important; text-shadow: none !important; opacity: 1; }
${r} .tview-filter.on .tview-fnum { color: ${h.ink} !important; }
${r} .tview-filter.tview-wp-pick { white-space: normal; overflow: visible; text-overflow: clip; line-height: 20px; }
/* THE PACE STEPS (Dudey: "the + next to the speed multiplayers is too close to the boxes"): the minus and the plus are
   drawn, not lettered - a glyph sits wherever its face put it in its cell - each a bar of ink at the grid's pixels,
   centred in its own step, the two steps the same breath either side of the number's well; red under the pointer */
${r} :is(.tview-pace-row, .travelpanel-pace-row, .pbox-pace-row) { grid-template-columns: 1fr 24px 66px 24px; column-gap: 6px; }
${r} :is(.tview-pace-num, .travelpanel-pace-num, .pbox-pace-num) { margin: 0 !important; }
${r} :is(.tview-pace-step, .travelpanel-pace-step, .pbox-pace-step) { position: relative; width: 24px; min-width: 0; padding: 0; font-size: 0 !important; color: transparent !important; }
${r} :is(.tview-pace-step, .travelpanel-pace-step, .pbox-pace-step)::before { content: ''; position: absolute; left: 50%; top: 50%;
  width: ${d(5,"gq")}; height: ${d(1,"gq")}; transform: translate(-50%, -50%); background: ${h.ink}; }
${r} :is(.tview-pace-num, .travelpanel-pace-num, .pbox-pace-num) + :is(.tview-pace-step, .travelpanel-pace-step, .pbox-pace-step)::after { content: ''; position: absolute; left: 50%; top: 50%;
  width: ${d(1,"gq")}; height: ${d(5,"gq")}; transform: translate(-50%, -50%); background: ${h.ink}; }
${r} :is(.tview-pace-step, .travelpanel-pace-step, .pbox-pace-step):is(:hover, :focus-visible):not(:disabled)::before,
${r} :is(.tview-pace-num, .travelpanel-pace-num, .pbox-pace-num) + :is(.tview-pace-step, .travelpanel-pace-step, .pbox-pace-step):is(:hover, :focus-visible):not(:disabled)::after { background: ${h.red}; }

/* THE HUD'S WORDS - a skill up, a loot line, the mode word: the pack's yellow lettering with its hard black edge, the
   way its death screen writes "Welcome Adventurer" */
${r} .notice.notice-toast, ${r} .lv-note.lv-note-skill .lv-note-title, ${r} .lv-note.lv-note-skill .lv-note-sub, ${r} .hud-modeword {
  color: ${h.yellow}; text-shadow: -1px 0 0 ${h.outline}, 1px 0 0 ${h.outline}, 0 -1px 0 ${h.outline}, 0 1px 0 ${h.outline}, 2px 2px 0 rgba(0,0,0,0.6); }
${r} .hud-cross { filter: sepia(0.6) saturate(1.4); }
/* the crosshair's world plaque - a scrap of page held over the world, never a slab */
${r} .wplaque, ${r} .wplaque-stats { background: ${z("page")} 0 0 / 355px auto repeat, rgba(227,201,149,0.92); color: ${h.ink};
  border-color: rgba(92,56,24,0.8) rgba(60,34,14,0.85) rgba(48,26,10,0.9) rgba(80,48,20,0.8); box-shadow: 0 0 0 1px ${h.outline}, 3px 4px 10px rgba(0,0,0,0.45); }
/* THE PACK'S STATS PAGE AND ITS PLAQUES (Dudey: "the stat button is hard to read in inventory and the statpage is also
   hard to read and the armor shown is also hard to read"): what is written straight on the paper is in ink - the
   page's head, its "against a level" and its rules line - and the doll's two plaques (the flip to Stats / Paperdoll and
   the overall Armour) are scraps of page with dark letters, never faint words over the painting */
${r} .sf-head h3 { color: ${h.red} !important; text-shadow: none !important; }
${r} .sf-head p, ${r} .sf-chips-k, ${r} .sf-err { color: ${h.ink} !important; text-shadow: none !important; opacity: 1 !important; }
${r} .sf-foot { color: ${h.inkSoft} !important; text-shadow: none !important; opacity: 1 !important; }
${r} .statflip-btn, ${r} .wornac-total { background: ${z("page")} 0 0 / 355px auto repeat, rgba(227,201,149,0.96) !important; color: ${h.ink} !important;
  text-shadow: none !important; opacity: 1 !important; border: 2px solid ${h.outline} !important; border-radius: 0 !important;
  box-shadow: inset 0 0 0 1px rgba(255,240,205,0.35), 2px 2px 0 rgba(0,0,0,0.45) !important; }
${r} .statflip-btn { padding: 2px 10px !important; }
/* FLIP-FIT (Dudey's pack: the Stats side stood ~300px wider than the card and, turned over, spilled LEFT under the
   jewellery column): the card's back is held to the card's own width - one track that never grows past it, faces that
   may shrink, the five tiles that share the width instead of standing on their words' width. */
${r} .pack-shell .statflip { min-width: 0 !important; max-width: 100% !important; }
${r} .pack-shell .statflip-inner { grid-template-columns: minmax(0, 1fr) !important; grid-template-rows: minmax(0, 1fr) !important; min-width: 0 !important; }
${r} .pack-shell .statflip-face { min-width: 0 !important; max-width: 100% !important; }
${r} .pack-shell .statflip-back { overflow: hidden !important; }
${r} .pack-shell .statflip-scroll { position: absolute !important; inset: 0 !important; max-width: 100% !important; }
${r} .pack-shell .statflip .sf-page { max-width: 100% !important; min-width: 0 !important; }
${r} .pack-shell .statflip .sf-tiles { grid-template-columns: repeat(auto-fit, minmax(min(100%, 84px), 1fr)) !important; }
${r} .pack-shell .statflip .sf-tile { min-width: 0 !important; overflow-wrap: break-word; }
${r} .statflip-btn:hover, ${r} .statflip-btn:focus-visible { color: ${h.red} !important; }
${r} .wornac-total .k { color: ${h.inkSoft} !important; text-shadow: none !important; opacity: 1 !important; }
${r} .wornac-total .v { color: ${h.red} !important; text-shadow: none !important; opacity: 1 !important; }
/* ...and written on it in ink (Dudey, of the quick loot: "no one can read that" - the HUD's pale outlined letters were
   left on the paper): every word dark and flat, the lit row in red, a tier's colour deepened to read on paper */
${r} :is(.wplaque, .wplaque-stats), ${r} :is(.wplaque, .wplaque-stats) * { color: ${h.ink} !important; text-shadow: none !important; -webkit-text-stroke: 0 !important; }
${r} :is(.wplaque-sub, .wplaque-count, .wplaque-keys, .wplaque-statkey, .wplaque-more, .wplaque-empty, .wplaque-renown) { color: ${h.inkSoft} !important; }
${r} .wplaque-title { color: ${h.ink} !important; }
${r} .wplaque-title::first-letter { color: ${h.red} !important; }
${r} .wplaque-row.sel { background: rgba(142,26,16,0.12) !important; box-shadow: inset 2px 0 0 ${h.red} !important; }
${r} .wplaque-row.sel, ${r} .wplaque-row.sel * { color: ${h.red} !important; }
${r} .wplaque-row[data-rarity="magic"] > span:first-child { color: #1f4f9e !important; }
${r} .wplaque-row[data-rarity="rare"] > span:first-child { color: #5c4600 !important; }
${r} .wplaque-row[data-rarity="legendary"] > span:first-child { color: #9a4210 !important; }
${r} .wplaque-row[data-rarity="aetheric"] > span:first-child { color: #1d6a86 !important; }
${r} .wplaque-row[data-rarity="artifact"] > span:first-child { color: #5e2a96 !important; }
${r} .wplaque-row[data-rarity="gilded"] > span:first-child { color: #7a4a00 !important; }

/* INK-TONES (2026-10-10, a player: "make the fonts better visible ... the blue and Mora's Mantle ones ... don't make them
   totally different"): a rarity's, a set's and the sigil's words are drawn in their OWN colour - a CSS variable
   (--rar, --set, --sigil), which the ink cannot re-say - so on the page they stayed Plus's pale glow, made for black
   stone. On paper each is that same colour deepened into the ink: the tier's tone as the loot plaque already writes
   it, a set's own colour mixed down with the ink (so every set keeps its hue), the sigil's teal likewise. */
${Object.entries(hr).map(([t,a])=>`${r} .card[data-rarity="${t}"] > ul.rarity > li:first-child, ${r} .card[data-rarity="${t}"] > .card-body > ul.rarity > li:first-child { color: ${a} !important; text-shadow: none !important; }`).join(`
`)}
/* INK-VARS: the Sigil Broker's offers and its card's name, in their tier's colour (var(--rar)) - the aetheric's pale
   blue and the gilded's gold leaf stood on the parchment at under 1.5:1 - deepened into the ink as the card's tier line is */
${Object.entries(hr).map(([t,a])=>`${r} [data-rarity="${t}"] .broker-name, ${r} .broker-card[data-rarity="${t}"] h3 { color: ${a} !important; text-shadow: none !important; }`).join(`
`)}
/* the set's ribbon under the pack, and its block on an item's card */
${r} .setline { color: ${h.ink} !important; text-shadow: none !important;
  background: linear-gradient(90deg, rgba(var(--set-rgb),0.2), rgba(var(--set-rgb),0.06) 72%) !important;
  border-color: ${Ia} !important; box-shadow: inset 0 0 0 1px rgba(255,240,205,0.25) !important; }
${r} .setline:hover, ${r} .setline:focus-visible { background: linear-gradient(90deg, rgba(var(--set-rgb),0.32), rgba(var(--set-rgb),0.1) 76%) !important; }
${r} :is(.setline-name, .setline-count, .set-name, .set-count, .set-tier.awake .set-tier-name) { color: ${Ia} !important; text-shadow: none !important; }
${r} .setline-stage { color: ${h.inkSoft} !important; text-shadow: none !important; }
${r} .setline-pips i { background: rgba(43,26,12,0.12) !important; border-color: ${h.inkSoft} !important; }
${r} .setline-pips i.on { background: ${Ia} !important; border-color: ${h.ink} !important; box-shadow: none !important; }
/* a tier not yet awake is still written in ink - softer, never greyed out to nothing */
${r} .set-tier:not(.awake) { opacity: 1 !important; }
${r} .set-tier:not(.awake) :is(.set-tier-name, .set-tier-text) { color: ${h.inkFaint} !important; text-shadow: none !important; }
${r} .set-tier.awake .set-tier-text, ${r} .setbox p.set-stage { color: ${h.ink} !important; text-shadow: none !important; }
/* the sigil's block */
${r} .sigilbox:not([data-stage="dormant"]) :is(.sigil-word, .sigil-stage, .sigil-progress, p.sigil-progress) { color: ${Th} !important; text-shadow: none !important; }
${r} .sigilbox[data-stage="dormant"] :is(.sigil-word, .sigil-stage, .sigil-progress, p.sigil-progress, .sigil-effect) { color: ${h.inkFaint} !important; text-shadow: none !important; }

/* ASCEND - the pack's character sheet, open on the desk: the eight attributes written down the left-hand page as a
   ledger (the one chosen in red), the bonus points and the choice on the right-hand page, the skills on a strip of
   scroll under the book, the vials and the red Exit-framed Ascend on the plank at the foot. Plus's star map is gone:
   the stars ARE the ledger's lines - the same presses, laid out as the pack lays its sheet. */
${r} .lv-sky .px-vignette { display: none; }
${r} .lv-crown { background: ${ke(.3)} !important; border-bottom: 2px solid ${h.outline}; box-shadow: 0 2px 0 rgba(255,214,150,0.15), 0 4px 10px rgba(0,0,0,0.5) !important; }
${r} .lv-crown .k { color: #c9a46a !important; text-transform: none; letter-spacing: 0.02em; }
${r} .lv-crown .v { color: ${h.cream} !important; }
${r} .lv-jump { color: ${h.yellow} !important; text-shadow: 1px 1px 0 ${h.outline}, 2px 2px 0 rgba(0,0,0,0.5) !important; }
${r} .lv-barnote { color: #c9a46a !important; }
${r} .lv-foot { background: ${ke(.3)} !important; border-top: 2px solid ${h.outline}; box-shadow: 0 -2px 0 rgba(255,214,150,0.15) !important; }
${r} .lv-foot .k, ${r} .lv-foot .v { color: ${h.cream} !important; }
${r} .lv-vitals { gap: 32px; justify-content: center; }
/* the three vials stand centred under the book, the Ascend at the plank's right end - not centred in what the Ascend
   leaves of the plank (a third column the Ascend's own width balances it) */
@media (min-width: 1000px) and (min-height: 620px) {
  ${r} .lv-foot { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); align-items: end; }
  ${r} .lv-foot > .lv-vitals { grid-column: 2; }
  ${r} .lv-foot > .lv-acts { grid-column: 3; justify-self: end; }
}
${r} .lv-vitals .px-mrow[data-grim-meter="vital"] { flex: 0 0 auto; width: min(${d(130,"gq")}, calc((100vw - 420px) / 3)); }
${Ti([".lv-sky",".lv-foot"])}
@media (min-width: 1000px) and (min-height: 620px) {
  ${r} .lv-sky { grid-template-columns: minmax(16px, 1fr) minmax(0, ${j(180)}) ${j(14)} minmax(0, ${j(180)}) minmax(16px, 1fr);
    grid-template-rows: auto auto minmax(0, 1fr) auto auto minmax(0, 0.15fr) auto; }
  /* GRIM3: the book is the board's leather and its two pages, each drawn at the grid's own pixels (the same book every
     list-beside-a-page window is): the board behind (::before), the left page (::after), the right page the skills' own
     column - so no picture of a book is ever stretched to the screen */
  ${r} .lv-sky::after { content: ''; grid-column: 2 / 3; grid-row: 2 / 7; z-index: 0; position: relative; pointer-events: none;
    margin: ${j(4)} calc(-1 * ${j(7)}) ${j(3)} calc(-1 * ${j(4)}); ${ia("left","gs")}
    filter: drop-shadow(${j(1)} ${j(2)} 0 rgba(0,0,0,0.5)) drop-shadow(0 6px 14px rgba(0,0,0,0.45)); }
  ${r} .lv-crown { grid-column: 1 / -1; grid-row: 1; }
  /* the left-hand page: the eight attributes, and in the page left under them, centred both ways - the points still
     to give, then the chosen attribute between its - and its +, the way the pack's own chargen sets a value between
     its two arrows */
  ${r} .lv-stage { grid-column: 2; grid-row: 2 / 4; display: flex; flex-direction: column; margin-top: ${j(4+we.top)}; padding: ${j(1)} ${j(we.gutter-6)} 0 ${j(we.outer-3)}; align-items: stretch; z-index: 1; min-height: 0; }
  /* GRIM5 (Dudey: "put the points left under the last number of the attributes not too close"): the points stand on the
     ledger's own columns - the box in the figures' column, its right edge on theirs, its word before it - a line's breath
     under the last attribute */
  ${r} .lv-plate { grid-column: 2; grid-row: 4; justify-self: stretch; align-self: end; z-index: 1; margin: 16px 0 0; font-size: 16px;
    padding: 0 calc(${j(we.gutter-6)} + 10px) 0 calc(${j(we.outer-3)} + 10px);
    display: grid; grid-template-columns: minmax(0, 1fr) auto 2.2em; column-gap: 10px; align-items: center; text-align: right; }
  ${r} .lv-plate { align-items: baseline !important; }
  ${r} .lv-plate > .lv-count { grid-column: 2; grid-row: 1; justify-self: end; margin-right: -12px !important; }
  ${r} .lv-plate > .lv-countk { grid-column: 1; grid-row: 1; justify-self: end; margin-right: 6px !important; }
  ${r} .lv-plate > :is(.lv-hint, .lv-refuse) { grid-column: 1 / 3; grid-row: 2; justify-self: end; max-width: none; }
  ${r} .lv-plate > * { position: static !important; margin: 0 !important; transform: none !important; inset: auto !important; }
  ${r} .lv-plate .lv-howto, ${r} .lv-plate .lv-hint:empty, ${r} .lv-plate .lv-refuse:empty { display: none; }
  ${r} .lv-plate .lv-hint, ${r} .lv-plate .lv-refuse { max-width: 200px; font-size: 16px; }
  ${r} .lv-plate .lv-countk { font-size: 16px; color: ${h.red} !important; }
  ${r} .lv-choice { grid-column: 2; grid-row: 5; align-self: start; justify-self: stretch; z-index: 1; margin: ${j(3)} ${j(we.gutter-6)} 0 ${j(we.outer-3)}; padding: 0; gap: 0; }
  ${r} .lv-choice .lv-ask { display: none; }
  ${r} .lv-choice .lv-pick { width: 100%; justify-content: center; align-items: center; gap: 6px; }
  ${r} .lv-choice .lv-pickname { width: auto; min-width: 190px; flex: 0 1 auto; }
  ${r} .lv-choice .lv-pickname .n { font-size: 32px !important; }
  ${r} .lv-choice .lv-pickname .f { font-size: 16px !important; }
  ${r} .lv-choice .lv-pick .lv-arrow, ${r} .lv-choice .lv-pick .lv-press { width: 36px; min-width: 36px; height: 36px; padding: 0; font-size: 32px; line-height: 32px; }
  ${r} .lv-choice .lv-pick .lv-press { color: ${h.red} !important; border: 0 !important; background: none !important; box-shadow: none !important; }
  ${r} .lv-choice .lv-pick .lv-press:disabled { opacity: 0.35; }
  ${r} .lv-choice .lv-blurb { width: 100%; max-width: none; min-height: 0; text-align: center; }
  ${r} .lv-choice .lv-blurb p { font-size: 16px; line-height: 16px; margin: 4px 0 0; }
  /* the right-hand page: the skills, written down it from the top to the foot */
  ${r} .lv-ribbonwrap { grid-column: 4; grid-row: 2 / 7; z-index: 1; min-height: 0; position: relative;
    margin: ${j(4)} calc(-1 * ${j(4)}) ${j(3)} calc(-1 * ${j(7)}); padding: ${j(1)} ${j(1)} ${j(1)} 0 !important;
    display: flex; flex-direction: column; ${ia("right","gs").replace(/;/g," !important;")} box-shadow: none !important;
    filter: drop-shadow(${j(1)} ${j(2)} 0 rgba(0,0,0,0.5)) drop-shadow(0 6px 14px rgba(0,0,0,0.45)); }
  ${r} .lv-ribbonwrap::before { content: 'Skills'; display: block; text-align: center; font-family: ${be}; font-size: 32px; color: ${h.red};
    padding-bottom: 6px; margin-bottom: 8px; ${Be} }
  ${r} .lv-ribbon { flex: 1 1 auto; min-height: 0; display: grid !important; grid-template-columns: 1fr; grid-auto-rows: min-content; align-content: space-evenly;
    column-gap: 22px; overflow-x: hidden !important; overflow-y: auto !important; mask-image: none !important; -webkit-mask-image: none !important; padding: 0 !important; }
  /* GRIM4 (Dudey: "make sure theres not so much space left on the book pages when using different resolutions"): a long
     list (15 skills and more) is the same ledger as a short one - one column, its lines spread down the whole page,
     never packed at the top of it - at the face's small size; where the page is tall enough for every line at the
     large size it is written large, and only where it is too short for one column does it take two (the page is a
     size container: what it holds never sets its height) */
  ${r} .lv-ribbonwrap { container: lvpage / size; }
  ${r} .lv-ribbon:has(.lv-sk:nth-child(15)) { grid-template-columns: 1fr; grid-auto-rows: minmax(min-content, 1fr); align-content: stretch; }
  ${r} .lv-ribbon:has(.lv-sk:nth-child(15)) .lv-sk { align-content: center; padding-top: 2px !important; padding-bottom: 2px !important; }
  ${r} .lv-ribbon:has(.lv-sk:nth-child(22)) { grid-template-columns: 1fr 1fr; }
  @container lvpage (max-height: 620px) { ${r} .lv-ribbon:has(.lv-sk:nth-child(15)) { grid-template-columns: 1fr 1fr; } }
  @container lvpage (min-height: 860px) {
    ${r} .lv-ribbon:has(.lv-sk:nth-child(15)):not(:has(.lv-sk:nth-child(20))) .lv-sk .n,
    ${r} .lv-ribbon:has(.lv-sk:nth-child(15)):not(:has(.lv-sk:nth-child(20))) .lv-sk .v { font-size: 32px !important; }
  }
  ${r} .lv-sk { display: grid !important; grid-template-columns: 1fr auto 14px; align-items: baseline; gap: 0 8px; width: auto !important; min-height: 0 !important;
    padding: 6px 8px !important; border-bottom: 1px dotted rgba(92,56,24,0.45) !important; text-align: left; }
  ${r} .lv-sk .n { font-size: 32px !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  ${r} .lv-sk .v { font-size: 32px !important; }
  ${r} .lv-ribbon:has(.lv-sk:nth-child(15)) .lv-sk .n, ${r} .lv-ribbon:has(.lv-sk:nth-child(15)) .lv-sk .v { font-size: 16px !important; }
  ${r} .lv-sk.on { background: rgba(142,26,16,0.13) !important; box-shadow: none !important; }
  ${r} .lv-skrole { margin: 8px 0 0; text-align: center; font-size: 16px; }
  ${r} .lv-foot { grid-column: 1 / -1; grid-row: 7; }
}
/* the ledger */
${r} .lv-lines { display: none; }
${r} .lv-figure { width: 100% !important; height: auto !important; aspect-ratio: auto !important; max-height: none !important;
  display: flex; flex-direction: column; justify-content: flex-start; gap: 0; }
/* GRIM3 (Dudey: "the spaces between the atributes can be a bit bigger ... them empty space where the left stat points
   are in is a bit much"): on the open book the eight lines share the page down to the points, each its own airy line */
@media (min-width: 1000px) and (min-height: 620px) {
  ${r} .lv-stage > .lv-figure { flex: 1 1 auto; min-height: 0; display: grid !important; grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto repeat(8, minmax(0, 1fr)); align-content: stretch; justify-content: stretch; }
  ${r} .lv-stage > .lv-figure > .lv-star { align-items: center !important; padding-top: 4px !important; padding-bottom: 4px !important; }
}
${r} .lv-figure::before { content: 'Attributes'; display: block; text-align: center; font-family: ${be}; font-size: 32px; color: ${h.red};
  padding-bottom: 6px; margin-bottom: 8px; ${Be} }
${r} .lv-star { position: relative !important; left: auto !important; top: auto !important; transform: none !important;
  display: grid !important; grid-template-columns: 1fr auto 2.2em; align-items: baseline; gap: 0 10px; width: 100%;
  padding: 2px 10px !important; background: none !important; border: 0; text-align: left; }   /* GRIM5: no dotted rule under each (Dudey: "remove those dotted lines") */
${r} .lv-star .lv-gem { display: none !important; }
${r} .lv-star .lv-name { font-size: 32px !important; letter-spacing: 0 !important; text-indent: 0 !important; text-transform: none !important;
  color: ${h.ink} !important; text-shadow: none !important; }
${r} .lv-star .lv-val { font-size: 32px !important; color: ${h.ink} !important; text-shadow: none !important; }
${r} .lv-star .lv-delta { font-size: 16px !important; color: ${h.red} !important; text-shadow: none !important; }
${r} .lv-star:hover .lv-name, ${r} .lv-star:focus-visible .lv-name { color: ${h.redHi} !important; }
${r} .lv-star.on { background: rgba(142,26,16,0.1) !important; box-shadow: inset 4px 0 0 ${h.red}; }
${r} .lv-star.on .lv-name, ${r} .lv-star.on .lv-val, ${r} .lv-star.raised .lv-val { color: ${h.red} !important; }
${r} .lv-star.full .lv-val { color: ${h.inkFaint} !important; }
${r} .lv-star.boosted:not(.full) .lv-val { color: #1f3a8a !important; }
${r} .lv-star.lowered:not(.full) .lv-val { color: #8a3a0a !important; }
/* the right-hand page: the bonus points, the choice and its gloss */
/* GRIM5 (Dudey: "make sure that the points left in the box are centralized"): the figure's ink in the box's very middle -
   the face sets a digit high in its line and leaves its spacing at the right, so the box pads it down and across */
${r} .lv-count { font-size: 32px !important; line-height: 32px; padding: 7px 10px 3px 12px; display: block !important;
  width: auto !important; height: auto !important; min-width: 0; box-sizing: border-box; text-align: right !important; text-indent: 0 !important; letter-spacing: 0 !important;
  color: ${h.red} !important; text-shadow: none !important; background: none !important;
  border: 2px solid rgba(60,34,14,0.75) !important; box-shadow: inset 0 0 0 3px rgba(227,201,149,0.9), inset 0 0 0 4px rgba(60,34,14,0.5) !important; }
${r} .lv-countk, ${r} .lv-howto, ${r} .lv-hint, ${r} .lv-refuse, ${r} .lv-ask, ${r} .lv-blurb p { color: ${h.inkSoft} !important; text-shadow: none !important; text-transform: none !important; letter-spacing: 0.01em !important; }
${r} .lv-ask { color: ${h.red} !important; font-size: 18px; ${Be} padding-bottom: 4px; }
${r} .lv-pickname { background: none !important; border: 0 !important; box-shadow: none !important; }
${r} .lv-pickname .n { color: ${h.red} !important; font-size: 30px !important; text-shadow: none !important; }
${r} .lv-pickname .f, ${r} .lv-pickname .c { color: ${h.ink} !important; text-shadow: none !important; }
${r} .lv-pick .lv-arrow, ${r} .lv-pick .lv-press { background: none !important; border-color: transparent !important; box-shadow: none !important;
  color: ${h.ink} !important; text-shadow: none !important; font-size: 26px; }
${r} .lv-pick .lv-arrow:hover, ${r} .lv-pick .lv-press:hover { color: ${h.red} !important; background: rgba(142,26,16,0.08) !important; }
/* the skills: on a narrow screen a strip of the tan scroll under the book; on a wide one, the right-hand page */
@media not all and (min-width: 1000px) and (min-height: 620px) {
  ${r} .lv-ribbonwrap { background: ${Vt} !important; border: 0 !important;
    box-shadow: 0 0 0 2px rgba(60,34,14,0.6), 0 0 0 4px #8a6436, 0 0 0 5px ${h.outline}, 4px 8px 14px 5px rgba(0,0,0,0.45) !important; }
}
${r} .lv-sk { background: none !important; border-color: transparent !important; box-shadow: none !important; }
${r} .lv-sk .n, ${r} .lv-sk .v { color: ${h.ink} !important; text-shadow: none !important; }
${r} .lv-sk.on .n, ${r} .lv-sk.on .v, ${r} .lv-sk .lv-up { color: ${h.red} !important; }
${r} .lv-skrole, ${r} .lv-skrole .g { color: ${h.inkSoft} !important; text-shadow: none !important; }

`}const b0=Object.freeze({x:75/960,y:208/600,w:755/960,h:372/600,spine:13/755}),Na="(min-width: 900px) and (min-aspect-ratio: 5/4)";function f0(){const e=b0,t=`${h.red}`;return`
/* ── GRIM2: THE ROSTERS - each screen stood where the pack stands it ── */

/* THE FRONT DOOR - the pack's desk, its book open, and the doors written on its two pages in ink, the way the pack's
   own chooser writes "Would you like to:" - no stack of presses down the middle of the screen. */
${r} .px-home:not(.px-over):not(.lv-sky) { --gbw: ${d(320,"gd")}; --gbh: ${d(200,"gd")};
  --gbx: calc((100vw - var(--gbw)) / 2); --gby: calc((100vh - var(--gbh)) / 2); background: #120a05; }
/* GRIM6 (Dudey: "the background around the book looks too pixelated washed out"): the desk is the pack's own painting at
   ITS resolution, drawn smooth, never the game-grid cut blown up pixel by pixel; it stands where GRIM3 set it.
   GRIM3: the desk is Daggerfall's 320 x 200 picture, whole - the candle, the inkwell, the quill - at the biggest whole
   number of screen pixels to each of its own it fits at (--gd: ui/grimoireArt.js deskScale - DESK-FILL: now the exact fit, the whole desk as big as the screen holds it), centred, its edges
   falling away into the dark room round it; never scaled by a part of a pixel, never smoothed, and worked on its own
   grid (grimoireArt.js clarify) so the grain, the brass and the paper read crisp (Dudey: "the main screen background
   looks like i have not glasses on") */
/* DESK-HD: the detailed desk (ui/grimoireArt.js grimoireDeskUrl), its room's dark edges already in it - so no
   vignette is laid over it again; the pack's BIOG00I0 stands under it, seen only if the painting cannot load */
${r} .px-home:not(.px-over):not(.lv-sky)::before { content: ''; position: absolute; inset: 0; pointer-events: none;
  background: url("${Kc()}") var(--gbx) var(--gby) / var(--gbw) var(--gbh) no-repeat,
    url("${me("BIOG00I0")}") var(--gbx) var(--gby) / var(--gbw) var(--gbh) no-repeat; image-rendering: auto; }
${r}[data-grim-backdrop="map"] .px-home:not(.px-over):not(.lv-sky)::before { background: radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.6) 100%),
  url("${me("TMAP00I0")}") center / cover no-repeat; }
${r} .px-home:not(.px-over):not(.lv-sky) .px-rule { display: none; }
@media ${Na} {
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) > .px-stage:not(.px-acctstage) { display: block; padding: 0; }
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-wordmark { position: absolute; left: 50%; top: max(4px, calc(var(--gby) + var(--gbh) * 0.005));
    translate: -50% 0; width: min(calc(var(--gbw) * 0.3), 470px); z-index: 1; filter: drop-shadow(0 6px 10px rgba(0,0,0,0.6)); }
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-menu {
    position: absolute; box-sizing: border-box;
    left: calc(var(--gbx) + var(--gbw) * ${e.x.toFixed(4)}); top: calc(var(--gby) + var(--gbh) * ${e.y.toFixed(4)});
    width: calc(var(--gbw) * ${e.w.toFixed(4)}); height: calc(var(--gbh) * ${e.h.toFixed(4)});
    padding: calc(var(--gbh) * 0.05) calc(var(--gbw) * 0.045) calc(var(--gbh) * 0.04);
    display: grid; grid-template-columns: 1fr 1fr; column-gap: calc(var(--gbw) * 0.09); grid-template-rows: auto repeat(4, minmax(0, auto));
    grid-auto-flow: column; align-content: start; row-gap: calc(var(--gbh) * 0.012); }
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-menu::before,
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-menu::after {
    grid-row: 1; justify-self: center; padding-bottom: calc(var(--gbh) * 0.012); margin-bottom: calc(var(--gbh) * 0.012);
    font-family: ${be}; font-size: 32px; color: ${t};
    ${Be} width: 80%; text-align: center; }
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-menu::before { content: 'Thy Journey'; grid-column: 1; }
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-menu::after { content: 'The Realm'; grid-column: 2; }
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-menu .doorbtn {
    width: auto; min-height: 0; margin: 0; padding: calc(var(--gbh) * 0.006) 0.4em; justify-content: center;
    background: none; border: 0; border-radius: 0; box-shadow: none; translate: none; filter: none;
    font-size: 32px; letter-spacing: 0; color: ${h.ink}; text-shadow: 0 1px 0 rgba(255,240,205,0.45); }
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-menu .doorbtn .px-c { display: none; }
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-menu .doorbtn:hover,
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-menu .doorbtn:focus-visible {
    background: none; color: ${h.red}; text-decoration: underline dotted rgba(142,26,16,0.7); text-underline-offset: 0.18em; outline: none; }
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-menu .doorbtn:disabled { background: none; filter: none; color: rgba(43,26,12,0.38); text-shadow: none; }
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-foot { position: absolute; left: 0; right: 0; bottom: 0; }
}
@media ${Na} and (min-height: 1250px) {
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-menu .doorbtn,
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-menu::before,
  ${r}:not([data-grim-backdrop="map"]) .px-home:not(.px-over):not(.lv-sky) .px-menu::after { font-size: 48px; }
}
/* the map, or a screen too narrow for the book: the doors on one page, held up over it */
@media not all and ${Na} {
  ${r} .px-home:not(.px-over):not(.lv-sky) .px-menu { background: ${Ne}; padding: 22px 26px; gap: 4px;
    border: 2px solid; border-image: ${z("frame")} ${ve.band} / ${ve.band}px / ${ve.band-14}px round; box-shadow: 6px 10px 26px rgba(0,0,0,0.65); }
}
${r}[data-grim-backdrop="map"] .px-home:not(.px-over):not(.lv-sky) .px-menu { background: ${Ne}; padding: 22px 26px; gap: 4px;
  border: 2px solid; border-image: ${z("frame")} ${ve.band} / ${ve.band}px / ${ve.band-14}px round; box-shadow: 6px 10px 26px rgba(0,0,0,0.65); }
${r} .px-home:not(.px-over):not(.lv-sky) .px-menu .doorbtn .px-c { display: none; }
${r} .px-home:not(.px-over):not(.lv-sky) .px-wordmark { background: radial-gradient(ellipse 60% 55% at 50% 45%, rgba(28,17,8,0.92) 35%, rgba(28,17,8,0) 72%); }

/* THE INVENTORY - the pack's own: its wooden tab plates in one row across the top, the jewellery down the left as
   pairs of shelf boxes each named beneath, the body on the grey marble in the middle, the goods in shelf boxes on the
   right. (Wide screens; a phone keeps the stacked pack.) */
@media (min-width: 1000px) {
  ${r} .pack-shell .pack { display: grid; grid-template-columns: 132px minmax(0, 1fr) minmax(230px, 290px);
    grid-template-rows: auto minmax(0, 1fr); grid-template-areas: "tabs tabs tabs" "shelf doll list"; gap: 10px 12px; padding: 8px 14px 10px; }
  ${r} .pack-shell .pack-main, ${r} .pack-shell .charcol, ${r} .pack-shell .pack-dock { display: contents; }
  ${r} .pack-shell .packcats { grid-area: tabs; padding: 0; border: 0; overflow: visible; }
  ${r} .pack-shell .pack-dock .packcats .packtabs, ${r} .pack-shell .packtabs { display: grid; grid-template-columns: repeat(9, minmax(0, 1fr)); gap: 4px; }
  ${r} .pack-shell .pack-dock .packtab { min-height: 30px; padding: 2px 6px; justify-content: center; font-size: 13px; }
  ${r} .pack-shell .equipped { grid-area: doll; min-height: 0; padding: 10px; background: ${z("stone")} 0 0 / 310px auto repeat, #6b6b68;
    border: 2px solid; border-color: ${h.outline} ${h.woodLit} ${h.goldLeaf} ${h.woodMid};
    box-shadow: 0 0 0 3px ${h.wood}, 0 0 0 4px ${h.outline}, inset 3px 4px 10px rgba(0,0,0,0.45); }
  /* PACK-ROOM (2026-10-10): the worn map is held to its column (STATS-OVERLAP), and there the figure - as wide as it is
     tall allows - left each flank ~80px, a pair's names broken a letter at a time ("Mo/un/t"). The goods give 40px
     back and the figure stands at most 210px wide: each flank about twice what it was, its names whole words. */
  ${r} .pack-shell .wornmap-doll.hasart { max-width: 210px; }
  ${r} .pack-shell .wornshelf { grid-area: shelf; flex-direction: column; justify-content: space-between; gap: 6px; margin: 0; padding: 4px 0; }
  ${r} .pack-shell .shelfgrp { flex: 0 0 auto; gap: 2px; }
  ${r} .pack-shell .shelflabel { font-size: 14px; color: #e3c27a; text-shadow: 1px 1px 0 ${h.outline}, 2px 2px 0 rgba(0,0,0,0.5); }
  ${r} .pack-shell .packlists { grid-area: list; min-height: 0; padding: 8px; background: rgba(14,8,3,0.55);
    border: 2px solid; border-color: ${h.outline} ${h.woodLit} ${h.woodLit} ${h.woodMid}; box-shadow: inset 2px 3px 8px rgba(0,0,0,0.55); }
  ${r} .pack-shell .charcol > :not(.equipped):not(.wornshelf), ${r} .pack-shell .pack-dock > :not(.packcats):not(.packlists) { grid-column: 2 / 4; }
  /* SET-ROW (2026-10-11, Mac: "this shouldnt happen the inventory box next to the paperdoll shouldnt get smaller aswell"):
     the worn sets' lines stood in a row of their own across the doll AND the goods, and the goods' box gave up their
     height. They are the doll's: a row under the doll alone, the goods' box running down beside them to the band */
  ${r} .pack-shell .pack:has(> .pack-main .setstrip, .setstrip) { grid-template-rows: auto minmax(0, 1fr) auto;
    grid-template-areas: "tabs tabs tabs" "shelf doll list" "shelf sets list"; }
  ${r} .pack-shell .charcol > .setstrip { grid-area: sets !important; margin: 0 !important; min-width: 0; }
}
/* THE BOOKS - a window that is a list beside a page (the character and system window, the spellbook, the chronicle)
   is the pack's open book laid on its desk: the list on the left-hand page, the page it opens on the right, the spine
   between them - and the presses on a page are WRITTEN on it, the way the pack's spellbook writes Delete, Up, Sort and
   Down along its foot, the one it is for in red.
   GRIM3 (Dudey: "the book is in a window thats in a window"; "keep the style ... POLISH it"): the book lies on the desk
   board, as the pack's Biography book lies on its desk - no torn page under it, no leather slab round it, and no strip
   of board between the tabs and the book: the plates stand on the book's own top edge. The board is
   the desk's wood in a hard bevel; the tabs are the pack's own tab plates across its top; the book is the pack's own
   painted book, each page a 9-slice of the painting (its corners as painted, its edges and the gutter's curve drawn
   along the page), so it keeps the painting's depth and never deforms, whatever the window holds: it is always
   exactly the board's room, and each page scrolls within itself. */
${r} .px-win:has(> .px-body > .px-journal) { background: ${ke(.14)} !important; border: 0 !important; border-image: none !important; outline: none !important;
  box-shadow: 0 0 0 ${d(1)} #0c0603, inset ${d(1)} ${d(1)} 0 0 rgba(255,214,150,0.24), inset calc(-1 * ${d(1)}) calc(-1 * ${d(1)}) 0 0 rgba(0,0,0,0.55),
    inset 0 0 0 ${d(2)} rgba(0,0,0,0.12), 0 14px 30px rgba(0,0,0,0.6) !important; }
${r} .px-win:has(> .px-body > .px-journal) > .px-body { padding: 0 ${d(4)} ${d(4)} !important; overflow: visible !important; background: none !important;
  display: flex; flex-direction: column; position: relative; z-index: 1; min-height: 0; border: 0 !important; box-shadow: none !important; }
${r} .px-journal { gap: 0; position: relative; flex: 1 1 auto; min-height: 0 !important; height: auto; background: none; border: 0; padding: 0;
  filter: drop-shadow(${d(1)} ${d(2)} 0 rgba(0,0,0,0.5)) drop-shadow(0 4px 10px rgba(0,0,0,0.35)); }
${r} .px-journal > .px-qrail { ${ia("left")} flex: 0 0 auto; width: 31%; min-width: min(${d(84)}, 44%); max-width: 44%; min-height: 0; overflow-y: auto; overflow-x: hidden; box-shadow: none;
  padding: ${d(1)} 0 ${d(1)} ${d(1)}; border-right-width: ${d(na-7)}; }
${r} .px-journal > .px-qdetail { ${ia("right")} flex: 1 1 0; min-width: 0; min-height: 0; overflow-y: auto; overflow-x: hidden; box-shadow: none;
  padding: ${d(2)} calc(${d(2)} + ${d(na-Ya)}) ${d(1)} ${d(2)}; }
/* PAGE-CENTRE (2026-10-12, a player: "on the pause menu, the elements on the right-hand menu seem to be skewed very far to
   the right instead of centered on the page"): the right-hand page's 9-slice gives its gutter edge BG of the pack's
   pixels and its outer edge BO, so what was written on it stood the gutter's width in from the spine and a hair from the
   page's edge. The outer side takes the difference as padding: the writing stands as far from the edge as from the
   spine, in the middle of the page. */
${r} .px-journal .px-qrow { color: ${h.ink}; min-width: 0; }
/* a page scrolls down, never across (Dudey: "the spellbook has 2 scrollbars"): a long name wraps, its cost keeps its place */
${r} .px-journal .px-qrail .px-qrow { overflow-wrap: anywhere; } ${r} .px-journal .px-qrail .sb-cost { flex: 0 0 auto; padding-left: ${d(2)}; }
${r} .px-journal .px-qrow.on { color: ${h.red}; background: rgba(142,26,16,0.1); }
/* the tabs: the pack's plates in a row across the top of the board */
${r} .px-win:has(> .px-body > .px-journal) > .px-tabs { background: none !important; border: 0 !important; box-shadow: none !important;
  padding: ${d(3)} ${d(4)} 0 !important; gap: ${d(1)} !important; justify-content: center; align-items: flex-end; flex-wrap: nowrap;
  position: relative; z-index: 2; margin-bottom: calc(-1 * ${d(2)}); }
${r} .px-win:has(> .px-body > .px-journal) > .px-tabs button { min-height: 0; margin: 0; padding: ${d(1,"gk")} ${d(10,"gk")} 0 !important; flex: 0 1 ${d(46)};
  font-size: 16px; line-height: 20px; letter-spacing: 0; text-indent: 0; text-transform: none; justify-content: center; ${Qa} transition: none; }
${r} .px-win:has(> .px-body > .px-journal) > .px-tabs button:hover:not(.on), ${r} .px-win:has(> .px-body > .px-journal) > .px-tabs button:focus-visible:not(.on) { ${Ja} }
${r} .px-win:has(> .px-body > .px-journal) > .px-tabs button.on { ${Za} }
@media (max-width: 480px) {
  ${r} .px-journal > .px-qrail { flex: 0 0 auto; max-height: 32%; }
}
${Ti([".px-journal"])}

/* a question's answers are written on its scroll, not stood on a plank across it */
${r} .dlg-win .dlg-acts { background: none !important; border-color: rgba(92,56,24,0.55) !important; border-top-style: dotted !important; box-shadow: none !important; }
${r} .dlg-win .dlg-btn { background: none !important; border-color: transparent !important; box-shadow: none !important; border-radius: 0;
  color: #f4e04c !important; text-shadow: ${ht} !important; font-size: 16px !important; line-height: 24px !important; }
${r} .dlg-win .dlg-btn:hover, ${r} .dlg-win .dlg-btn:focus-visible { color: #fff27a !important; background: none !important; }
${r} .dlg-win .dlg-btn[data-grim-cancel] { color: ${h.red} !important; text-shadow: none !important; }
/* a line of a list on a page is written in ink; the chosen one in the pack's red, never Plus's gold */
${r} [data-grim="ink"] .port-row:not(.on) .port-rowname, ${r} [data-grim="ink"] .port-row:not(.on) .port-rowvalue { color: ${h.ink} !important; text-shadow: none !important; }
${r} [data-grim="ink"] .port-row.on, ${r} [data-grim="ink"] .port-row.on *, ${r} [data-grim="ink"] .pick-row.on, ${r} [data-grim="ink"] .pick-row.on * { color: ${h.red} !important; text-shadow: none !important; }

/* THE ITEM SCROLLS - what an item is and what you can do with it (the hover card, the right-click menu, the Info box,
   the bindings card) is a little scroll of the list picker's, its rods drawn smaller, held over the shelves */
/* (one picture edge to edge - its own parchment filled in, no second paper laid inside it: Dudey, "in both of them is
   btw a slight window to see in the scroll"; drawn INSIDE its box, the rods too - the hover card's holder clips what
   stands outside it, which cut the rods off and left a plain sheet) */
${O([".pack-shell .packtip > .card",".inv-tip > .card",".inv-menu",".inv-info > .card",".pbind > .card"])} { background: none !important; border: 2px solid transparent !important; border-radius: 0 !important;
  border-image: ${z("sideScroll")} 15 fill / ${d(15,"gq")} / 0 round !important; outline: none !important;
  padding: ${d(6,"gq")} ${d(16,"gq")} !important;
  box-shadow: none !important; filter: drop-shadow(${d(1,"gq")} ${d(2,"gq")} 0 rgba(0,0,0,0.5)) drop-shadow(3px 7px 8px rgba(0,0,0,0.45)); color: ${h.ink}; }
/* what you can do with the item is the pack's own parchment strip - Wagon, Info, Equip, Remove, Use, Gold - big words
   written down the scroll, one under the other, the one it is for in red; no boxes, no plates, no frames */
${r} .pack-shell .packtip > .card .acts, ${r} .inv-info > .card .acts { display: flex !important; flex-flow: row wrap !important;
  justify-content: center !important; align-items: center !important; gap: 0 10px !important; border-top: 2px dotted rgba(92,56,24,0.55) !important; padding-top: 6px !important; margin-top: 6px !important; }
${r} .pack-shell .packtip > .card .acts .act, ${r} .inv-menu button, ${r} .inv-menu .act, ${r} .inv-info > .card .acts .act {
  background: none !important; border: 0 !important; box-shadow: none !important; border-radius: 0 !important; outline: none;
  flex: 0 0 auto !important; width: auto !important; min-width: 0 !important; max-width: none !important; min-height: 0 !important; height: auto !important; margin: 0 !important; padding: 0 6px !important;
  font-size: 16px !important; line-height: 24px !important; letter-spacing: 0 !important; text-transform: none !important; text-decoration: none !important;
  color: ${h.ink} !important; text-shadow: 1px 1px 0 rgba(255,240,205,0.45) !important; translate: none !important; filter: none !important; }
${r} .inv-menu { display: flex !important; flex-direction: column !important; align-items: center !important; gap: 0 !important; }
${r} .pack-shell .packtip > .card .acts .act.primary, ${r} .inv-menu .primary, ${r} .inv-info > .card .acts .act.primary { color: ${h.red} !important; }
${r} .pack-shell .packtip > .card .acts .act:hover, ${r} .pack-shell .packtip > .card .acts .act:focus-visible,
${r} .inv-menu button:hover, ${r} .inv-menu button:focus-visible, ${r} .inv-info > .card .acts .act:hover { color: ${h.redHi} !important; background: none !important; }
${r} .pack-shell .packtip > .card .acts .act:disabled, ${r} .inv-menu button:disabled { color: rgba(43,26,12,0.35) !important; }
${r} .pack-shell .packtip > .card h3, ${r} .inv-tip > .card h3 { font-size: 32px !important; color: ${h.red} !important; text-shadow: none !important; }

/* THE SCROLLS - a question or a short choice (the rest window, a yes or no) is the pack's list-picker scroll, its two
   rods top and foot; the rest's three ways to rest are written across it in a row, as the pack's Rest scroll writes
   "For a while - Until fully healed - Loiter a while", with Cancel in red beneath */
${O([".rest-win",".dlg-win",".port-win.size-narrow",".sb-ask > .card"])} { background: none !important; border: 2px solid transparent !important;
  border-image: ${z("sideScroll")} 15 fill / ${d(15)} / ${d(5)} ${d(13)} round !important;
  box-shadow: none !important; outline: none !important; filter: drop-shadow(${d(1)} ${d(2)} 0 rgba(0,0,0,0.45)) drop-shadow(4px 8px 10px rgba(0,0,0,0.5)); }
/* GRIM3: THE SCROLL UNROLLS as it opens (markGrimoireUnroll): its rods together in the middle, rolling apart, the
   parchment between them coming into the light, and the rods landing on the scroll's own */
${r} [data-grim-unroll="open"] { animation: grim-unroll 560ms cubic-bezier(0.25, 0.8, 0.3, 1) both; }
/* ...and rolls shut as it closes: its likeness, where it stood, the rods coming back together over it */
${r} [data-grim-unroll="closing"] { animation: grim-unroll 380ms cubic-bezier(0.6, 0, 0.8, 0.3) reverse both; }
${r} [data-grim-unroll="closing"] > .grim-rod { animation-duration: 380ms; animation-direction: reverse; animation-timing-function: cubic-bezier(0.6, 0, 0.8, 0.3); }
/* the writing comes up as the parchment opens out and goes as it rolls in - never a sliver of a word left between the
   rods */
${r} [data-grim-unroll="open"] > :not(.grim-rod) { animation: grim-ink-show 560ms linear both; }
${r} [data-grim-unroll="closing"] > :not(.grim-rod) { animation: grim-ink-show 380ms linear reverse both; }
@keyframes grim-ink-show { 0%, 40% { opacity: 0; } 100% { opacity: 1; } }
@keyframes grim-unroll { from { clip-path: inset(calc(-1 * ${d(8)}) calc(50% - ${d(15)})); } to { clip-path: inset(calc(-1 * ${d(8)}) calc(-1 * ${d(13)})); } }
${r}:not([data-grim-spellbook="pack"]) .grim-sbarrow { display: none; }
${r} .grim-rod { position: absolute; z-index: 20; pointer-events: none; display: block; top: calc(-1 * ${d(5)}); bottom: calc(-1 * ${d(5)}); width: ${d(15)};
  border: 0 solid transparent; border-width: ${d(15)} 0; box-sizing: border-box; background: none;
  animation: grim-rod-l 560ms cubic-bezier(0.25, 0.8, 0.3, 1) both; }
${r} .grim-rod.l { border-image: ${z("rodL")} 15 0 fill / ${d(15)} 0 stretch; left: calc(-1 * ${d(13)}); }
${r} .grim-rod.r { border-image: ${z("rodR")} 15 0 fill / ${d(15)} 0 stretch; right: calc(-1 * ${d(13)}); animation-name: grim-rod-r; }
/* the rods ride the clip's own edges: both are moved the same way (left / right, inset - one style pass), never one on
   the compositor and the other on the page, which drift apart while the game draws its frame and left the parchment
   showing outside the rods, or the scroll snapping shut (Dudey: "the resting window is also not closing the scroll
   correctly") */
@keyframes grim-rod-l { 0% { left: calc(50% - ${d(15)}); } 96% { opacity: 1; } 100% { left: calc(-1 * ${d(13)}); opacity: 0; } }
@keyframes grim-rod-r { 0% { right: calc(50% - ${d(15)}); } 96% { opacity: 1; } 100% { right: calc(-1 * ${d(13)}); opacity: 0; } }
${r} .rest-win .card, ${r} .dlg-win .card { background: none !important; border-color: transparent !important; box-shadow: none !important; outline: none; }
/* a service's menu and a confirm on the scroll: no plank across it - its name and its presses written in ink, the one it
   is for in red, the way out in the pack's red Exit */
${r} .sb-ask > .card { position: relative; }
${r} .port-win.size-narrow .port-head, ${r} .port-win.size-narrow .port-foot, ${r} .port-win.size-narrow .port-inner,
${r} .sb-ask > .card .sb-acts { background: none !important; border: 0 !important; border-image: none !important; box-shadow: none !important; }
${r} .port-win.size-narrow .port-head :is(h1, h2, h3, p, span), ${r} .sb-ask > .card :is(p, span, h3) { color: ${h.ink} !important; text-shadow: none !important; }
${r} .port-win.size-narrow .port-head h2::first-letter { color: ${h.red}; }
${r} :is(.port-win.size-narrow, .sb-ask > .card) [data-grim-on]:not([data-grim-exit]) { color: ${h.ink} !important; text-shadow: 0 1px 0 rgba(255,240,205,0.4) !important; }
${r} :is(.port-win.size-narrow, .sb-ask > .card) [data-grim-on].primary:not([data-grim-exit]) { color: ${h.red} !important; }
${r} :is(.port-win.size-narrow, .sb-ask > .card) [data-grim-on]:not([data-grim-exit]):hover { color: ${h.redHi} !important; text-decoration: underline solid ${h.red}; text-underline-offset: 0.2em; }
${r} .rest-win > .px-body, ${r} .dlg-win > .px-body { background: none; border-color: transparent; box-shadow: none; }
${r} .rest-win h2 { color: ${h.ink} !important; text-shadow: none !important; text-align: center; font-size: 32px !important; line-height: 34px;
  padding-bottom: 4px; margin-bottom: 2px; ${Be} }
/* the rest scroll is a short question, not a window (Dudey: "the resting window is pretty big") */
${r} .rest-win { max-width: min(92vw, 420px) !important; }
${r} .rest-win .card { padding: 6px 10px !important; }
${r} .rest-win h2::first-letter { color: ${h.red}; }
${r} .rest-win .acts.selection-acts { border-top: 0 !important; box-shadow: none !important; }
${r} .rest-win .acts.selection-acts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px 10px; align-items: stretch; }
${r} .rest-win .acts.selection-acts { margin-top: 6px !important; padding-top: 4px !important; }
${r} .rest-win .acts.selection-acts .act { width: auto; min-height: 0; white-space: normal; line-height: 24px; padding: 2px 4px; font-size: 24px; }
${r} .rest-win .acts.selection-acts .act:last-child:nth-child(4) { grid-column: 1 / -1; justify-self: center; margin-top: 4px; color: ${h.red} !important; }

/* THE TALK WINDOW - as the pack lays it: what you can ask down a scroll on the LEFT (its "Tell me about... / Where
   is..." page), the conversation on the right-hand page, the speaker's name and the tone on the plank above; what the
   speaker says in Daggerfall's yellow over the page's ink, your own words in the pack's blue */
${r} .talk-main { grid-template-columns: minmax(240px, 36%) 1fr; }
${r} .talk-topics { order: -1; border-left: 0 !important; border-right: 0 !important; background: ${Vt}; }   /* NO-LINES: the gutter's shading parts the pages */
${r} .talk-log { background: none; }
${r} .talk-log .talk-entry.a, ${r} .talk-log .talk-entry.a * { color: ${Wt} !important; text-shadow: ${ht} !important; }
${r} .talk-log .talk-entry.q, ${r} .talk-log .talk-entry.q * { color: #7a9ae8 !important; text-shadow: 1px 1px 0 #10183a !important; }
@media (max-width: 640px) { ${r} .talk-topics { border-right: 0 !important; } }

/* the pack's tab plates: the lighter wood, the name cut in dark; the chosen page's tab a scrap of page, its name red */
${r} .pack-shell .packtabs .packtab { ${Qa} }
${r} .pack-shell .packtabs .packtab .count { color: ${h.inkSoft} !important; text-shadow: none !important; }
${r} .pack-shell .packtabs .packtab.tabempty { color: rgba(42,26,10,0.72) !important; opacity: 1; }
${r} .pack-shell .packtabs .packtab.tabempty .count { color: rgba(42,26,10,0.6) !important; }
${r} .pack-shell .packtabs .packtab:hover:not(.on) { ${Ja} }
${r} .pack-shell .packtabs .packtab.on { ${Za} }
${r} .pack-shell .packtabs .packtab.on .count { color: ${h.red} !important; text-shadow: none !important; }
${r} .pack-shell .packtab.on::after { content: none; }

/* THE SPELLBOOK AS GRIMOIRE DRAWS IT - GRIM3 (a player: "(optionallly) rettain the look of the original GrimoireUI
   spellbook"; the card's Spellbook: GrimoireUI's own). The window is the pack's own spellbook picture (SPBK00I0, at the
   pack's own pixels: --gp / 3 each), its title, spine arrows, three boxes, ruled bands and red EXIT as painted, and every
   press and word of the enhanced book written where the pack writes it: the spells down the left page (the spine's
   arrows turn it), the spell's name over the right page, its cost and its target and element in the three boxes, one
   effect to each ruled band, Ready - Hotbar - Rename - Icon - Delete along the foot where the pack wrote DELETE UP SORT
   DOWN (lifted off the picture, ui/grimoireArt.js SPBK_WIPES), and Close on its EXIT. */
${N} > .px-win { width: ${$(777)} !important; height: ${$(492)} !important; max-width: none !important; max-height: none !important;
  padding: 0 !important; position: relative; display: block !important; outline: none !important;
  background: ${z("spbk",`url("${me("SPBK00I0")}")`)} 0 0 / 100% 100% no-repeat !important; border: 0 !important; border-image: none !important;
  box-shadow: ${d(2)} ${d(3)} 0 rgba(0,0,0,0.45), 0 14px 30px rgba(0,0,0,0.6) !important; filter: none !important; }
${N} > .px-win > .sb-top { position: absolute !important; inset: 0 !important; display: block !important; height: auto !important; padding: 0 !important;
  background: none !important; border: 0 !important; border-image: none !important; box-shadow: none !important; pointer-events: none; }
${N} .sb-top .sb-spacer { display: none; }
${N} .sb-top .sb-who h2 { position: absolute; left: ${$(80)}; top: 0; width: ${$(200)}; height: ${$(32)}; margin: 0; opacity: 0; }
${N} .sb-top .sb-magicka { position: absolute; left: ${$(26)}; top: ${$(34)}; width: ${$(318)}; margin: 0; text-align: center;
  color: ${h.inkSoft} !important; text-shadow: none !important; font-size: 16px; letter-spacing: 0; text-transform: none; }
${N} .sb-top .act { pointer-events: auto; position: absolute !important; left: ${$(650)}; top: ${$(447)}; width: ${$(125)}; height: ${$(43)};
  margin: 0 !important; padding: 0 !important; color: transparent !important; text-shadow: none !important; font-size: 16px;
  background: none !important; border: 0 !important; border-image: none !important; box-shadow: none !important; translate: none !important; }
${N} .sb-top .act:hover, ${N} .sb-top .act:focus-visible { background: rgba(255,232,120,0.14) !important; box-shadow: inset 0 0 0 ${$(3)} rgba(255,236,130,0.55) !important; outline: none; }
${N} > .px-win > .px-body { position: absolute !important; inset: 0 !important; padding: 0 !important; margin: 0 !important; overflow: visible !important;
  background: none !important; border: 0 !important; display: block !important; pointer-events: none; }
/* the body lies over the whole picture to place its pieces: it lets a press through (to the EXIT under it), and only
   the list and the page's own pieces take one (Dudey: "the exit button of the og grimoire spellbook isnt working") */
${N} .px-journal { pointer-events: none; }
${N} .px-journal > .px-qrail { pointer-events: auto; }
${N} .px-journal { position: static !important; display: block !important; height: 100%; background: none !important; border: 0 !important; padding: 0 !important; filter: none !important; }
${N} .px-journal > .px-qrail { position: absolute; left: ${$(26)}; top: ${$(58)}; width: ${$(318)}; height: ${$(382)}; margin: 0;
  border: 0 !important; border-image: none !important; background: none !important; padding: 0 !important; overflow-y: auto; scrollbar-width: none; }
${N} .px-journal > .px-qrail::-webkit-scrollbar { display: none; width: 0; }
${N} .px-qrail .px-qrow { min-height: 0; padding: ${$(4)} ${$(8)} !important; font-size: 16px; line-height: 20px; letter-spacing: 0; text-transform: none; }
${N} .px-qrail .sb-cost { color: ${h.inkSoft} !important; text-shadow: none !important; font-size: 16px; }
${N} .px-qrail .px-qrow.on .sb-cost { color: ${h.red} !important; }
${N} .px-journal > .px-qdetail { position: absolute; inset: 0; border: 0 !important; border-image: none !important; background: none !important;
  padding: 0 !important; overflow: visible; pointer-events: none; }
${N} .px-qdetail > * { pointer-events: auto; }
${N} .px-qdetail > .px-qname { position: absolute; left: ${$(424)}; top: ${$(4)}; width: ${$(326)}; height: ${$(28)}; margin: 0; justify-content: center; }
${N} .px-qdetail > .px-qname .px-qwing { display: none; }
${N} .px-qdetail > .px-qname h3 { font-size: 16px !important; line-height: 20px; color: ${h.red} !important; text-shadow: none !important; letter-spacing: 0; text-indent: 0; text-transform: none;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
${N} .px-qdetail > .px-qmeta { position: absolute; left: ${$(441)}; top: ${$(35)}; width: ${$(58)}; height: ${$(61)}; margin: 0;
  display: flex; align-items: center; justify-content: center; text-align: center; }
${N} .px-qmeta .px-qtimer { color: ${Wt} !important; text-shadow: ${ht} !important; font-size: 16px; line-height: 16px; letter-spacing: 0; text-transform: none; }
${N} .px-qmeta .px-qtimer.urgent { color: #ff7a5a !important; }
${N} .px-qdetail > .sb-frame { position: absolute; left: ${$(540)}; top: ${$(35)}; width: ${$(184)}; height: ${$(61)}; margin: 0;
  display: grid; grid-template-columns: ${$(86)} ${$(60)}; column-gap: ${$(38)}; flex-wrap: nowrap; gap: 0 ${$(38)}; }
${N} .sb-frame .sb-chip { display: flex; align-items: center; justify-content: center; text-align: center; padding: 0 !important; border: 0 !important; background: none !important;
  box-shadow: none !important; color: ${Wt} !important; text-shadow: ${ht} !important; font-size: 16px; line-height: 16px; letter-spacing: 0; text-transform: none; }
${N} .px-qdetail > .px-divider { display: none; }
${N} .px-qdetail > .sb-effects, ${N} .px-qdetail > .px-note { position: absolute; left: ${$(430)}; top: ${$(124)}; width: ${$(312)}; height: ${$(316)}; margin: 0;
  display: grid; grid-template-rows: repeat(3, ${$(112)}); row-gap: ${$(3)}; overflow: hidden; gap: ${$(3)} 0; }
${N} .sb-effects .sb-effect { padding: ${$(4)} ${$(6)}; border: 0 !important; background: none !important; overflow: hidden; }
${N} .sb-effect .sb-group { color: ${h.ink} !important; font-size: 16px; } ${N} .sb-effect .sb-sub { color: ${h.inkSoft} !important; font-size: 16px; letter-spacing: 0; text-transform: none; }
${N} .sb-effect .sb-nums { margin: ${$(2)} 0 0 ${$(10)}; } ${N} .sb-effect .sb-num { color: ${h.red} !important; text-shadow: none !important; font-size: 16px; letter-spacing: 0; }
${N} .px-qdetail > .sb-acts { position: absolute !important; left: ${$(18)}; top: ${$(446)}; width: ${$(622)}; height: ${$(36)}; margin: 0 !important; padding: 0 !important;
  display: flex !important; align-items: center; justify-content: flex-start; gap: 0 ${$(6)}; flex-wrap: nowrap; border: 0 !important; background: none !important; box-shadow: none !important; }
${N} .px-qdetail > .sb-acts .act { font-size: 16px !important; line-height: 20px; padding: 0 ${$(3)} !important; min-height: 0; white-space: nowrap;
  flex: 0 0 auto !important; width: auto !important; min-width: 0 !important; margin: 0 !important; }
${N} .px-qdetail > .sb-acts .act:first-child { color: ${h.red} !important; }
${N} .px-qdetail > .sb-acts .act:nth-child(4) { margin-left: auto !important; }
${N} .px-qdetail > .sb-rename, ${N} .px-qdetail > .sheet-notice { position: absolute; left: ${$(430)}; top: ${$(392)}; width: ${$(312)}; margin: 0; }
${N} .px-qdetail > .sb-icons { position: absolute; left: ${$(426)}; top: ${$(104)}; width: ${$(320)}; height: ${$(336)}; max-height: none; margin: 0;
  background: #d8bc88 !important; border: ${$(3)} solid rgba(60,34,14,0.7) !important; box-sizing: border-box; }
${N} .px-qdetail:has(> .sb-icons) > .sb-effects { visibility: hidden; }
${N} .grim-sbarrow { position: absolute; z-index: 5; left: ${$(358)}; width: ${$(36)}; height: ${$(44)}; padding: 0; margin: 0; border: 0; cursor: pointer;
  background: none; color: transparent; font-size: 0; }
${N} .grim-sbarrow.up { top: ${$(36)}; } ${N} .grim-sbarrow.down { top: ${$(398)}; }
${N} .grim-sbarrow:hover, ${N} .grim-sbarrow:focus-visible { background: radial-gradient(closest-side, rgba(255,240,180,0.45), rgba(255,240,180,0)); outline: none; }
${N}:not([data-grim-art]) > .px-win, ${r}:not([data-grim-art="ready"])[data-grim-spellbook="pack"] .sb-shell > .px-win { background-color: #d9bc86 !important; }

/* THE VITALS, UPRIGHT - Daggerfall's own three bars in the corner (health, fatigue, magicka, left to right), each the
   pack's vial standing on its foot with the cork on top, the liquid rising from the foot. The bars keep their own
   fill: the dress turns each track on its end (the HUD's scale and the move editor's nudges ride as ever). */
${r}[data-grim-vitals="upright"] .hud-bars { position: absolute; left: calc(50% + (18px - 50vw) / var(--hud-scale, 1)); bottom: calc(-4px / var(--hud-scale, 1));
  align-items: flex-end; gap: 6px; }
${r}[data-grim-vitals="upright"] .hud-vital { width: ${d(11,"gq")}; height: ${d(86,"gq")}; }
${r}[data-grim-vitals="upright"] .hud-health { order: 1; } ${r}[data-grim-vitals="upright"] .hud-fatigue { order: 2; } ${r}[data-grim-vitals="upright"] .hud-magicka { order: 3; }
${r}[data-grim-vitals="upright"] .hud-vital .hud-track { position: absolute; left: 0; bottom: 0; width: ${d(86,"gq")} !important; height: ${d(11,"gq")};
  transform-origin: 0 100%; transform: translateX(${d(11,"gq")}) rotate(-90deg); box-shadow: 0 0 0 ${d(1,"gq")} ${h.outline};
  filter: drop-shadow(calc(-1 * ${d(1,"gq")}) ${d(1,"gq")} 0 rgba(0,0,0,0.6)); }
${r}[data-grim-vitals="upright"] .hud-vital .hud-track { background: ${z("vialHealthUpEmpty")} 0 0 / 100% 100% no-repeat, #1a0a0a; }
${r}[data-grim-vitals="upright"] .hud-magicka .hud-track { background: ${z("vialMagickaUpEmpty")} 0 0 / 100% 100% no-repeat, #0a0e18; }
${r}[data-grim-vitals="upright"] .hud-fatigue .hud-track { background: ${z("vialFatigueUpEmpty")} 0 0 / 100% 100% no-repeat, #0a120a; }
${r}[data-grim-vitals="upright"] .hud-vital .hud-fill { background: ${z("vialHealthUp")} 0 0 / ${d(86,"gq")} 100% no-repeat, var(--v-body); }
${r}[data-grim-vitals="upright"] .hud-magicka .hud-fill { background: ${z("vialMagickaUp")} 0 0 / ${d(86,"gq")} 100% no-repeat, var(--v-body); }
${r}[data-grim-vitals="upright"] .hud-fatigue .hud-fill { background: ${z("vialFatigueUp")} 0 0 / ${d(86,"gq")} 100% no-repeat, var(--v-body); }
${r}[data-grim-vitals="upright"] .hud-vlabel, ${r}[data-grim-vitals="upright"] .hud-num { display: none; }
${r}[data-grim-vitals="upright"] .hud-vital.low .hud-track { animation: grim-vlow-up 0.9s steps(1, end) infinite; }
@keyframes grim-vlow-up { 0% { filter: drop-shadow(0 0 3px #ff2a14) drop-shadow(-2px 1px 0 rgba(0,0,0,0.6)); } 50% { filter: drop-shadow(-2px 1px 0 rgba(0,0,0,0.6)); } }
/* the quick block (its caption, the mode word, and the status tiles) steps right of the vials */
${r}[data-grim-vitals="upright"] .hud-quick { left: calc(24px + 112px * var(--hud-scale, 1) + env(safe-area-inset-left, 0px)); }
/* the Renown row keeps its place under the hotbar, the width of the hotbar now the vials have gone to the corner */
${r}[data-grim-vitals="upright"] .hud-renown { width: calc(2 * min(190px, 23vw) + 16px); }

/* ── FOE-PLATE / VIAL-LONG (2026-10-11: "change the monster and bosses hp bar iam not sold that it look good enough yet
   iam also not a fan of the animation when it loses hp (same for the other bars) ... and when i use alt + u and try to make
   the bar smaller and larger and longer it bugs out") ──────────────────────────────────────────────────────────────────
   NO DRAIN. What a blow takes is gone at once, as Daggerfall's own bars drop - the darkened liquid that held where the bar
   was and drained after it is not drawn on any bar (yours, a foe's, a boss's); the low-health pulse stands. */
${r} :is(.hud-vital, .hud-foe, .hud-breath) .hud-ghost, ${r} .hud-chunk, ${r} .wb-boss-ghost { display: none !important; }
${r} .wb-boss-fill { transition: none !important; }
/* THE FOE'S BAR: nothing behind it (a board under it only hid the world - "nothing like this please"), no thicker than
   your own vials: the foe's name in Daggerfall's yellow over the pack's red vial DRAWN OUT - the vial's own head, its
   glass and its own foot at the track's end (longVial), so the bar is the vial at ANY length: the editor's length handle
   draws more glass, never a stretched picture or a liquid that stops short of its own glass. Its width is the editor's
   own measure (min(280px, 40vw)), so a first pull on the handle never jumps. */
/* BAR-SCREEN (2026-10-11: 22 and 33 pixels "too thick", 11 "too thin" - "please remember ppl have different resolutions"):
   THE TWO BARS ARE THE SCREEN'S SIZE, NOT A PIXEL COUNT. The foe's glass is 1.75% of the screen's height (16px on a
   917-pixel-high view, 19 on 1080, 25 on 1440, 38 on 2160; never under 13), the boss's 1.4 times it, and each is as
   long as its thickness allows (the foe's 17.5 of them, under 40% of the width; the boss's 20.5, under 88%). The vial is
   drawn at that same measure - its cork, its glass and its foot each 1/11 of the thickness to the game's pixel (--gfoe,
   --gboss) - so a taller screen draws the same vial bigger, never a thinner one. The editor's sizes and lengths ride on
   top, from this same base (its length rules re-said below), and the player's HUD scale over the foe's as ever. */
${r} { --grim-foe-h: clamp(13px, 1.75vh, 48px); --grim-boss-h: clamp(18px, 2.45vh, 64px);
  --gfoe: calc(var(--grim-foe-h) / 11); --gboss: calc(var(--grim-boss-h) / 11);
  --grim-foe-w: min(calc(var(--grim-foe-h) * 17.5), 40vw); --grim-boss-w: min(calc(var(--grim-boss-h) * 20.5), 88vw); }
${r} .hud .hud-foe { gap: 0; align-items: stretch; margin-top: ${d(3,"gq")}; }
${r} .hud .hud-foe .hud-foename { margin: 0 0 ${d(2,"gq")}; line-height: 20px; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  max-width: var(--grim-foe-w); align-self: center; }
${r} .hud .hud-foe[data-hm-len] .hud-foename { max-width: calc(var(--grim-foe-w) * var(--hml, 1)); }
${r} .hud .hud-foe .hud-foetrack { width: var(--grim-foe-w); height: var(--grim-foe-h); container-type: inline-size; align-self: center;
  background: ${ee("Health",!0,"gfoe")}, #1a0a0a; box-shadow: 0 0 0 1px ${h.outline}; filter: drop-shadow(1px 1px 0 rgba(0,0,0,0.55)); }
${r} .hud .hud-foe .hud-foetrack .hud-fill { background: ${ee("Health",!1,"gfoe")}, #8a1c18; }
${r} .hud .hud-foe[data-hm-len] .hud-foetrack { width: calc(var(--grim-foe-w) * var(--hml, 1)) !important; }
/* THE EDITOR'S PREVIEW (no foe yet): its "Enemy (preview)" stands on the name's own line - the name is empty, and a line
   with no words has no height and clipped its label away */
${r} .hud .hud-foe[data-hm-dummy]:not(.on) .hud-foename { overflow: visible; min-height: 20px; max-width: none; align-self: stretch; }
${r} .hud .hud-foe[data-hm-dummy]:not(.on) .hud-foename::after { color: ${h.yellow};
  text-shadow: -1px 0 0 #120804, 1px 0 0 #120804, 0 -1px 0 #120804, 0 1px 0 #120804, 1px 2px 0 rgba(0,0,0,0.6); }
${r} .hud .hud-foe .hud-foepoise { width: auto; align-self: stretch; margin: ${d(2,"gq")} 0 0; }
/* ...stepped down under a boss's bar while one stands - or while the editor shows his last one as its preview (the bar a
   fight left on the page, hidden, which the editor stands up again) - so the two never write over each other */
${r} body:has(> .wb-boss-bar:not([data-hm-ghost]):is(:not([style*="display: none"]), [data-hm-dummy])) .hud .hud-foe { margin-top: calc(${d(3,"gq")} + (90px + var(--grim-boss-h)) / var(--hud-scale, 1)); }
/* ...and under the editor's stand-in for his bar by its own (shorter) height - it is a name and a glass, no marks, no
   chips; the full push sent the foe's preview down under the editor's own banner ("i cant see the enemy bar and its
   missplaced in this mode"), and none laid it under the stand-in */
${r} body:has(> .wb-boss-bar[data-hm-ghost]) .hud .hud-foe {
  margin-top: calc(${d(3,"gq")} + (52px + var(--grim-boss-h)) / var(--hud-scale, 1)); }
/* THE BOSS'S BAR: the bigger glass, as thick as it was - the red vial drawn out the bar's whole width, his name in the
   yellow and his title in the cream over it, the night's marks and the court's chips under it, his phases notched into
   the glass; nothing behind it. Its length is the editor's too (the bar's width; the glass follows it). */
${r} .wb-boss-name { font-size: 16px; line-height: 20px; }
${r} .wb-boss-sub { color: ${h.cream} !important; line-height: 16px;
  text-shadow: -1px 0 0 #120804, 1px 0 0 #120804, 0 -1px 0 #120804, 0 1px 0 #120804, 1px 2px 0 rgba(0,0,0,0.6); }
/* BAR-SCREEN: the boss's measure (above) - its width the bar's, its glass's thickness the screen's */
${r} .wb-boss-bar { width: var(--grim-boss-w); }
${r} .wb-boss-bar[data-hm-len] { width: calc(var(--grim-boss-w) * var(--hml, 1)) !important; }
${r} .wb-boss-track { width: 100% !important; max-width: none; margin: ${d(2,"gq")} 0 ${d(2,"gq")}; container-type: inline-size; height: var(--grim-boss-h);
  background: ${ee("Health",!0,"gboss")}, #1a0a0a !important; box-shadow: 0 0 0 ${d(1,"gq")} ${h.outline} !important; }
${r} .wb-boss-fill { background: ${ee("Health",!1,"gboss")}, #8a1c18 !important; }
${r} .wb-boss-bar.sea .wb-boss-track { background: ${ee("Magicka",!0,"gboss")}, #0a0e18 !important; }
${r} .wb-boss-bar.sea .wb-boss-fill { background: ${ee("Magicka",!1,"gboss")}, #2f5fb4 !important; }
${r} .wb-boss-mark { top: ${d(1,"gq")}; bottom: ${d(1,"gq")}; width: ${d(1,"gq")}; background: rgba(20,11,4,0.85) !important; box-shadow: ${d(1,"gq")} 0 0 rgba(255,214,150,0.35); }
${r} .wb-boss-foot .wb-boss-tag { text-shadow: ${Oe}; }
/* his attack's name is called UNDER the bar, over the world in the HUD's hard outline - its own reserved line stood empty
   between his blows, and a bar that grew and shrank with each call would jump */
${r} .wb-boss-callout { position: absolute; left: 0; right: 0; top: calc(100% + ${d(2,"gq")}); display: block; margin: 0; min-height: 0; text-align: center;
  white-space: nowrap; text-shadow: -1px 0 0 #120804, 1px 0 0 #120804, 0 -1px 0 #120804, 0 1px 0 #120804, 1px 2px 0 rgba(0,0,0,0.6); }
${r} .wb-boss-callout-line { max-width: 60%; margin: 1px auto 0; }

/* CHOSEN-CHIP (FIELD BUGS, the decorator: "the decorations menu doesn't show what tabs on it are active (I think I have
   "all" chosen in the screenshot)"): A CHOSEN CHIP SAYS SO OVER ITS PICTURE. The kit marks a chosen tile with a gold
   line inside it (box-shadow, inset) - and a tile is the pack's shelf box, a border-image drawn with its fill, which
   paints over every inset shadow: a chosen Catalogue, All or Small stood exactly as the others did. The mark is now
   what the picture cannot cover - the pack's bright yellow word, underlined, as a chosen press on wood is lettered, and
   a gold frame laid OVER the box (an outline, drawn above the border-image) - on every pickable cell that says it is
   pressed: the decorator's tabs, filters, sizes, sorts, rooms and grid, and any chip of the tile role like them. */
${O(k.tile,'[aria-pressed="true"]')} { color: #fff27a !important; outline: 2px solid ${h.goldLeaf} !important; outline-offset: -3px;
  text-decoration: underline solid rgba(255,242,122,0.6); text-underline-offset: 0.22em; }

/* SETTING-SCROLL (2026-10-11, Mac: "when you click on a mod or something to see its descriptions in the menu it in the same
   window show the description outside in a scroll like you would hover or click an item in the inventory" - "ingame it
   should show a scroll outside on the right of the window (outside of the book)"): A SETTING'S WORDS ARE A SCROLL BESIDE
   THE BOOK. The pause book's settings page raised its description as a sheet from the page's foot, over the very rows it
   described, its Close a stray word on the paper. Here it is the item scroll the pack's shelves hold out (THE ITEM
   SCROLLS above): the picker's scroll, rods and all, standing to the RIGHT of the book - or, where the screen leaves
   less room there than a scroll needs, slid in over the book's own edge just as far as keeps it whole on the screen.
   It unrolls as it opens and rolls shut as it closes (UNROLL_SEL), and its Close is the red word at its foot.
   HOW IT GETS OUT: the sheet was placed in the page's own column (.panes, positioned and clipping); with the column no
   longer its anchor, the book itself is (its filter makes the spread the containing block), so nothing between clips
   it. The book is centred, so the room to its right is half of what the screen leaves beside it. */
${r} .px-setwrap .panes { position: static !important; }
${r} .px-setwrap .detail { display: none; }
${r} .px-setwrap .detail.open { display: flex; flex-direction: column; transform: none !important; transition: none !important;
  --grim-sw: min(340px, 92vw);
  /* clear of the book by the rod that stands out of the scroll's box (px(13)), and kept whole on the screen with it */
  left: min(calc(100% + ${d(13)} + 12px), calc((100% + 100vw) / 2 - var(--grim-sw) - ${d(13)} - 8px)) !important; right: auto !important;
  top: 9% !important; bottom: auto !important; width: var(--grim-sw); max-height: 82% !important; overflow-y: auto; z-index: 30;
  box-sizing: border-box; background: none !important; border: 2px solid transparent !important; border-radius: 0 !important;
  border-image: ${z("sideScroll")} 15 fill / ${d(15)} / ${d(5)} ${d(13)} round !important;
  padding: ${d(8,"gq")} ${d(18,"gq")} ${d(6,"gq")} !important; color: ${h.ink};
  filter: drop-shadow(${d(1)} ${d(2)} 0 rgba(0,0,0,0.45)) drop-shadow(4px 8px 10px rgba(0,0,0,0.5)); }
${r}:not([data-grim-art="ready"]) .px-setwrap .detail.open { background: ${h.page} !important; border-color: ${h.woodLit} ${h.woodDark} ${h.outline} ${h.woodMid} !important; }
${r} .px-setwrap .detail.open > .dcard, ${r} .px-setwrap .detail.open > .card { order: 1; background: none !important; border: 0 !important; border-image: none !important;
  box-shadow: none !important; padding: 0 !important; margin: 0 !important; color: ${h.ink}; }
${r} .px-setwrap .detail.open h3 { color: ${h.red} !important; font-size: 32px !important; line-height: 34px; margin: 0 0 ${d(2,"gq")} !important; text-shadow: none !important;
  border: 0 !important; overflow-wrap: anywhere; }
${r} .px-setwrap .detail.open :is(p, li) { color: ${h.ink} !important; text-shadow: none !important; line-height: 20px; }
${r} .px-setwrap .detail.open .status { color: ${h.inkSoft} !important; }
${r} .px-setwrap .detail.open code { display: inline-block; background: none !important; color: ${h.inkSoft} !important; border: 0 !important; padding: 0 !important; outline: none !important; box-shadow: none !important;
  border-top: 2px dotted rgba(92,56,24,0.45) !important; padding-top: ${d(1)} !important; text-shadow: none !important; }
${r} .px-setwrap .detail.open > .sheet-close { order: 2; align-self: center; width: auto !important; min-height: 0 !important; margin: ${d(3,"gq")} 0 0 !important;
  padding: 0 ${d(3,"gq")} !important; background: none !important; border: 0 !important; box-shadow: none !important; border-image: none !important;
  color: ${h.red} !important; letter-spacing: 0 !important; text-transform: none !important; text-shadow: none !important; font-size: 16px !important; line-height: 24px; }
${r} .px-setwrap .detail.open > .sheet-close:hover, ${r} .px-setwrap .detail.open > .sheet-close:focus-visible { color: ${h.redHi} !important;
  text-decoration: underline solid ${h.red}; text-underline-offset: 0.2em; outline: none; }

/* ...AND ON THE FRONT DOOR ("handle it the best you can in main menu"): the menu's settings already stand the words in a
   column of their own, right of the list, on the desk's wood - so there the card itself is the same scroll, held out in
   that column (the book's has no room of its own and steps outside; this one has its own). */
${r} .shell .detail > :is(.dcard, .card) { position: relative; margin: ${d(6,"gq")} ${d(13)} ${d(4,"gq")} !important; box-sizing: border-box;
  background: none !important; border: 2px solid transparent !important; border-radius: 0 !important; box-shadow: none !important; outline: none !important;
  border-image: ${z("sideScroll")} 15 fill / ${d(15)} / ${d(5)} ${d(13)} round !important;
  padding: ${d(8,"gq")} ${d(18,"gq")} ${d(6,"gq")} !important; color: ${h.ink};
  filter: drop-shadow(${d(1)} ${d(2)} 0 rgba(0,0,0,0.45)) drop-shadow(4px 8px 10px rgba(0,0,0,0.5)); }
${r}:not([data-grim-art="ready"]) .shell .detail > :is(.dcard, .card) { background: ${h.page} !important; }
${r} .shell .detail > :is(.dcard, .card) h3 { color: ${h.red} !important; font-size: 32px !important; line-height: 34px; margin: 0 0 ${d(2,"gq")} !important;
  text-shadow: none !important; border: 0 !important; overflow-wrap: anywhere; }
${r} .shell .detail > :is(.dcard, .card) :is(p, li) { color: ${h.ink} !important; text-shadow: none !important; line-height: 20px; }
${r} .shell .detail > :is(.dcard, .card) .status { color: ${h.inkSoft} !important; }
${r} .shell .detail > :is(.dcard, .card) code { display: inline-block; background: none !important; color: ${h.inkSoft} !important; border: 0 !important; outline: none !important;
  box-shadow: none !important; padding: ${d(1)} 0 0 !important; border-top: 2px dotted rgba(92,56,24,0.45) !important; text-shadow: none !important; }

/* SETTINGS-SCROLL (2026-10-11, a video of the book's Settings: "when scrolling up and down the text is overlapped and
   hidden except for a small section"): THE KEYS' HEAD STICKS AS ONE LINE. In the book the settings scroll is a short
   window (301 pixels of a 648-high screen), the search bar sticks over it (91 in the pack's lettering) and the Controls
   head stuck under that at 163 - its sentence in the pack's 16-pixel face, three lines on the page's measure - so the
   rows scrolled through 47 pixels. The sentence is the intro's own law, said in the card above it (enhancedControls.js
   ctl-intro-law), so the stuck head keeps what must stay in reach - Primary, Defaults and Confirm, and the line a
   Confirm owes when it owes one - and a question about a key (ctl-asking) still stands in it whole. */
${r} .ctl-head:not(.ctl-asking) > p.meta { display: none !important; }
${r} .ctl-head:not(.ctl-asking) { padding: ${d(1)} ${d(3)} !important; }
${r} .ctl-head:not(.ctl-asking) .acts { flex-wrap: nowrap !important; justify-content: center; gap: ${d(4)} !important; margin: 0 !important; }
${r} .ctl-head:not(.ctl-asking) .acts .act { min-height: 0 !important; padding-top: 1px !important; padding-bottom: 1px !important; line-height: 20px; }
${r} .ctl-head .ctl-notice { margin: 1px 0 0 !important; line-height: 18px; text-align: center; }
/* ...and a key's row in the book is a line, not a thumb's target, where there is no thumb: 68 pixels a row (a 44-pixel
   row and 11 of padding each side) showed two keys at a time in that window. A touch screen keeps its targets. */
@media (any-pointer: fine) {
  ${r} .px-journal .ctl-row { padding-top: 3px !important; padding-bottom: 3px !important; min-height: 0 !important; }
  ${r} .px-journal .ctl-row > :is(.row-main, .ctl) { min-height: 0 !important; }
  ${r} .px-journal .ctl-row :is(.ctl-key, .ctl-clear) { min-height: 0 !important; padding-top: 1px !important; padding-bottom: 1px !important; line-height: 20px; }
}

/* THE UPRIGHT VIALS AT ANY HEIGHT: the editor's length is the vials' height (they stand; a length across them was a width
   the vial picture pinned, so the handle did nothing); lengthened, each is drawn out (longUp) - its foot, its glass, its
   head - so a tall vial is the HUD's own vial taller. The handle is on their top edge (--hm-len-axis), and a size taken
   from the corner grows them from the corner they stand in. */
${r}[data-grim-vitals="upright"] .hud .hud-bars, ${r}[data-grim-vitals="upright"] .hud .hud-bars .hud-vital { --hm-len-axis: y; }
${r}[data-grim-vitals="upright"] .hud .hud-bars[data-hm] { transform-origin: 0 100%; }
${r}[data-grim-vitals="upright"] .hud .hud-bars[data-hm-len] .hud-vital, ${r}[data-grim-vitals="upright"] .hud .hud-bars .hud-vital[data-hm-len] {
  height: calc(${d(86,"gq")} * var(--hml-g, 1) * var(--hml-b, 1)); }
${["Health","Magicka","Fatigue"].map(a=>{const o=n=>`${r}[data-grim-vitals="upright"] .hud .hud-bars[data-hm-len] .hud-${a.toLowerCase()} ${n}, ${r}[data-grim-vitals="upright"] .hud .hud-bars .hud-${a.toLowerCase()}[data-hm-len] ${n}`;return`${o(".hud-track")} { width: calc(${d(86,"gq")} * var(--hml-g, 1) * var(--hml-b, 1)) !important; container-type: inline-size;
  background: ${Or(a,!0)}, #120a06; }
${o(".hud-fill")} { background: ${Or(a)}, var(--v-body); }`}).join(`
`)}
`}const u0=()=>w0(`${r0()}
${m0()}
${f0()}`),w0=e=>e.replace(/font-size:\s*([\d.]+)px/g,(t,a)=>`font-size: ${bi(+a)}px`),v0=u0(),Ar="dfo-grimoire-kit",zr="dfo-grimoire-ink",Rr=e=>{let t=e.textContent??"";return t.includes(Ga)&&(t=t.replace(Ga,"")),t},_t=new WeakMap;let pt=null;function k0(e=globalThis.document){if(!e?.head)return!1;const t=e.documentElement;t.dataset.plusDress=wt,t.dataset.grimPages=yh(),t.dataset.grimBackdrop=$h(),t.dataset.grimVitals=kh(),t.dataset.grimSpellbook=vh();let a=e.getElementById(Ar);a||(a=e.createElement("style"),a.id=Ar,a.textContent=v0);let o=e.getElementById(zr);o||(o=e.createElement("style"),o.id=zr);const n=()=>{let s=!1;for(const p of e.querySelectorAll("style"))p!==a&&p!==o&&_t.get(p)?.len!==(p.textContent??"").length&&Eo(Rr(p));for(const p of e.querySelectorAll("style")){if(p===a||p===o)continue;const l=(p.textContent??"").length,c=_t.get(p);c&&c.len===l||(_t.set(p,{len:l,ink:$i(Rr(p))}),s=!0)}(s||!o.textContent)&&(o.textContent=[...e.querySelectorAll("style")].map(p=>_t.get(p)?.ink??"").join(`
`)),(e.head.lastElementChild!==o||o.previousElementSibling!==a)&&e.head.append(a,o)};n(),e.body&&Oa(e.body);const i=e.defaultView?.MutationObserver??globalThis.MutationObserver;if(!pt&&typeof i=="function"){const s=new WeakSet,p=c=>{Oa(c),Er(c),Qh(c),Kh(c)},l=c=>{c.nodeType!==1||s.has(c)||c.classList?.contains("hud")||(s.add(c),p(c),pt.observe(c,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}))};if(pt=new i(c=>{let g=!1;const m=[];for(const x of c)for(const u of x.removedNodes??[])u.nodeType===1&&!u.classList?.contains("grim-rod")&&u.dataset?.grimGhost==null&&(Fh(u),m.push([u,x.target]));if(!c.some(x=>[...x.addedNodes??[]].some(u=>u.nodeType===1&&(u.matches?.(ne)||u.querySelector?.(ne)))))for(const[x,u]of m)Yh(x,e,u);m.length&&Vh();for(const x of c){if(x.type==="attributes"){x.target.nodeType===1&&(Oa(x.target),Er(x.target));continue}for(const u of x.addedNodes){if(u.nodeName==="STYLE"){u!==a&&u!==o&&(g=!0);continue}u.nodeType!==1||u.classList?.contains("grim-rod")||u.classList?.contains("grim-sbarrow")||(x.target===e.body||x.target===e.documentElement?l(u):p(u))}}g&&n()}),pt.observe(e.head,{childList:!0}),e.body){pt.observe(e.body,{childList:!0});for(const c of e.body.children)l(c)}setInterval(n,2e3)}return uh(e),!0}function Pb(e,t=globalThis.document){return Object.hasOwn(di,e)?(Te("grimoirePages",e),t?.documentElement?.dataset&&(t.documentElement.dataset.grimPages=e),!0):!1}function qb(e,t=globalThis.document){return Object.hasOwn(hi,e)?(Te("grimoireVitals",e),t?.documentElement?.dataset&&(t.documentElement.dataset.grimVitals=e),!0):!1}function _b(e,t=globalThis.document){return Object.hasOwn(gi,e)?(Te("grimoireSpellbook",e),t?.documentElement?.dataset&&(t.documentElement.dataset.grimSpellbook=e),!0):!1}function Gb(e,t=globalThis.document){return Object.hasOwn(ci,e)?(Te("grimoireBackdrop",e),t?.documentElement?.dataset&&(t.documentElement.dataset.grimBackdrop=e),!0):!1}const Nr="dfo-text-font",Si=Object.freeze({game:"Game",sans:"Sans",mono:"Monospace",dyslexic:"Dyslexic",system:"My font"}),eo="OpenDyslexic",y0="fonts/opendyslexic",Lr=Object.freeze({sans:"system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', 'Helvetica Neue', Arial, sans-serif",mono:"ui-monospace, 'Cascadia Mono', 'SF Mono', Menlo, Consolas, 'DejaVu Sans Mono', 'Liberation Mono', monospace",dyslexic:`'${eo}', 'Comic Sans MS', sans-serif`}),Dr=Object.freeze([".px-wordmark",".shell .brand h1",".look-emblem"]),Ii=e=>String(e??"").replace(/["'\\{}<>;\n\r]/g,"").replace(/\s+/g," ").trim().slice(0,64),zo=()=>Object.hasOwn(Si,Y("textFont"))?Y("textFont"):"game",Oi=()=>Ii(Y("textFontSystem"));function $0(e=zo(),t=Oi()){return e==="system"?t?`'${t}', ${Lr.sans}`:null:Lr[e]??null}const Mr=(e,t=ao??globalThis.document?.baseURI??"http://localhost/")=>new URL(`${y0}/${e}`,t).href;function T0(e=zo(),t=Oi()){const a=$0(e,t),o=[...Dr,...Dr.map(i=>`${i} *`)].join(", ");let n=`/* TEXT-FONT: ui/textFont.js */
`;return e==="dyslexic"&&(n+=`@font-face { font-family: '${eo}'; font-weight: 400; font-display: swap; src: url("${Mr("opendyslexic-latin-400-normal.woff2")}") format('woff2'); }
@font-face { font-family: '${eo}'; font-weight: 700; font-display: swap; src: url("${Mr("opendyslexic-latin-700-normal.woff2")}") format('woff2'); }
`),a&&(n+=`:root { --dfo-text-font: ${a}; }
body, body *:not(:is(${o})) { font-family: var(--dfo-text-font) !important; -webkit-font-smoothing: auto !important; font-synthesis: weight style !important; }
`),n}function Ro(e=globalThis.document){if(!e?.head)return!1;const t=e.documentElement;t?.dataset&&(t.dataset.textFont=zo());let a=e.getElementById(Nr);return a||(a=e.createElement("style"),a.id=Nr),a.textContent=T0(),e.head.append(a),!0}function Fb(e,t=globalThis.document){return Object.hasOwn(Si,e)?(Te("textFont",e),Ro(t),!0):!1}function Bb(e,t=globalThis.document){return Te("textFontSystem",Ii(e)),Ro(t),!0}async function Wb(e=globalThis){if(typeof e?.queryLocalFonts!="function")return[];try{const t=await e.queryLocalFonts();return[...new Set(t.map(a=>a.family).filter(Boolean))].sort((a,o)=>a.localeCompare(o))}catch{return[]}}const Kb=(e=globalThis)=>typeof e?.queryLocalFonts=="function",Hr="enhanced-plus-style",E0=()=>Object.hasOwn(ko,Y("plusTheme"))?Y("plusTheme"):Jn;function Ai(e=globalThis.document){const t=e?.documentElement;if(t?.dataset){if(Ro(e),wh()===wt){t.dataset.plusTheme=Jn,k0(e);return}t.dataset.plusTheme=E0()}}function Vb(e,t=globalThis.document){return Object.hasOwn(ko,e)?(Te("plusTheme",e),Ai(t),!0):!1}const S0=`
/* ── VB2: THE VITALS, DRESSED (Enhanced Plus) ── */
.hud-bars { display: flex; align-items: center; gap: 16px; }
/* VB2: THE VITALS, DRESSED. Still the pixel language - every edge a
   whole pixel, every shade a hard stop, nothing blurred - but built
   the way the classic's carved chrome is: a stone bevel lit from the
   top left, a brass clasp at each end, the fill banded like a painted
   sprite rather than flat, and a faint
   chunk that stands where the bar WAS after a hit before it drains.
   The outer box is the same 24px it was, so the quickslot diamond's
   "22 + 32 * scale" line still clears it at every scale. Each vital
   sets five tones and the rules below read only those. */
.hud-vital { position: relative; display: flex; align-items: center;
  --v-hi: #f2a597; --v-lite: #d8685a; --v-body: #b53a2e; --v-lo: #8a2820; --v-deep: #5c1812;
  --v-ground: #1e0d0b; }
.hud-magicka { --v-hi: #b7c8ff; --v-lite: #6f8fe6; --v-body: #3f5fc4; --v-lo: #2c4394; --v-deep: #1b2a62;
  --v-ground: #0c1122; }
.hud-fatigue { --v-hi: #b9f0c4; --v-lite: #5fc27c; --v-body: #2f9152; --v-lo: #216b3b; --v-deep: #134526;
  --v-ground: #0a1a10; }
.hud-vital .hud-track { width: min(190px, 23vw); height: 20px;
  display: flex; align-items: center; justify-content: space-between;
  border: 2px solid; border-color: #9a9079 #3a352a #25221b #6e6755;
  background:
    linear-gradient(180deg, rgba(0,0,0,0.6) 0 2px, transparent 2px),
    var(--v-ground);
  box-shadow: 0 0 0 1px #050608, 3px 3px 0 1px rgba(0,0,0,0.45); isolation: isolate; }
.hud-vital .hud-fill { position: absolute; inset: 0; width: 100%;
  background:
    linear-gradient(180deg, var(--v-hi) 0 2px, var(--v-lite) 2px 6px, var(--v-body) 6px 13px,
      var(--v-lo) 13px 17px, var(--v-deep) 17px 100%); }
/* the leading edge: a 2px lit column where the fill stops, which is
   what makes the level read at a glance. min() so an empty fill keeps
   no stray sliver. */
.hud-vital .hud-fill::after { content: ''; position: absolute; top: 0; bottom: 0; right: 0;
  width: min(2px, 100%); background: var(--v-hi); opacity: 0.85; }
/* GHOST-DIM (2026-10-02, Discord "Fatigue Bar": "the pending change on the fatigue bar is white ... Please lower the
   opacity for the damaged part of the bar"): the strip where the bar WAS is the bar's own body tone, faint - it was
   its palest tone under a cream line at 0.55, which on fatigue's mint read as a white bar still full. Lost reads as
   lost: darker than any band of the fill, never brighter. */
.hud-vital .hud-ghost { position: absolute; inset: 0; width: 0; display: block; z-index: -1;
  background: var(--v-body); opacity: 0.35; }
/* the brass clasps, one at each end, the full height of the frame so
   they add nothing to the row's box */
.hud-vital::before, .hud-vital::after { content: ''; position: absolute; top: 0; bottom: 0; z-index: 2;
  width: 6px; box-shadow: 0 0 0 1px #050608;
  background:
    linear-gradient(180deg, transparent 0 10px, #3d2a12 10px 14px, transparent 14px),
    linear-gradient(180deg, #f3cf86 0 2px, transparent 2px),
    linear-gradient(90deg, #e2b064 0 2px, #c08a3e 2px 4px, #7a5424 4px 6px); }
.hud-vital::before { left: -4px; }
.hud-vital::after { right: -4px; }
.hud-vlabel { position: relative; z-index: 1; padding-left: 10px;
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #efe8d6;
  text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.7); }
.hud-num { position: relative; z-index: 1; padding-right: 10px;
  font-size: 12px; font-variant-numeric: tabular-nums; color: #fffaf0;
  text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.7); }
/* UI3: A PHONE'S VITALS SAY THEIR NUMBERS ALONE. A 23vw track holds "MAGICKA" or "70%" but not both - on a phone the
   two ran into one word ("MAGICKA70%") - and the three colours already name the bars (the reference's own order). */
@media (max-width: 640px) {
  .hud-vlabel { display: none; }
  .hud-vital .hud-track { justify-content: center; }
  .hud-num { padding-right: 0; }
}
/* FRAME1: THE FOE'S BAR loses health the way yours does. The same five
   tones as the health bar, so a foe's red and yours are one red. */
.hud-foe { --v-hi: #f2a597; --v-lite: #d8685a; --v-body: #b53a2e; --v-lo: #8a2820; --v-deep: #5c1812; }
.hud-foetrack { isolation: isolate; }
.hud-foetrack .hud-ghost { position: absolute; inset: 0; width: 0; display: block; z-index: -1;
  background: linear-gradient(180deg, #fff6e4 0 1px, var(--v-hi) 1px); opacity: 0.6; }
/* FRAME1: THE CHUNK. When a frame takes a real bite out of a bar, the
   bitten span breaks off as two pieces that drop and fade - in 8 hard
   steps, never a smooth tween, and without rotation (a rotated pixel is
   a blurred one). Two nodes per bar and two identical animations per
   node, so back-to-back hits each get a piece of their own. */
.hud-chunk { position: absolute; top: 0; bottom: 0; display: none; z-index: 0; pointer-events: none; }   /* under the words (z 1), over the fill */
.hud-chunk.fa, .hud-chunk.fb { display: block; }
.hud-chunk::before, .hud-chunk::after { content: ''; position: absolute; top: 0; bottom: 0; opacity: 0;
  background: linear-gradient(180deg, #fff6e4 0 2px, var(--v-lite) 2px calc(100% - 3px), var(--v-lo) calc(100% - 3px));
  box-shadow: 0 0 0 1px #050608; }
.hud-chunk::before { left: 0; width: 55%; }
.hud-chunk::after { left: 55%; right: 0; }
.hud-chunk.fa::before { animation: hud-chunk-l 560ms steps(8, end) forwards; }
.hud-chunk.fa::after { animation: hud-chunk-r 640ms steps(8, end) forwards; }
.hud-chunk.fb::before { animation: hud-chunk-l2 560ms steps(8, end) forwards; }
.hud-chunk.fb::after { animation: hud-chunk-r2 640ms steps(8, end) forwards; }
@keyframes hud-chunk-l { 0% { opacity: 1; transform: translate(0, 0); } 25% { opacity: 1; transform: translate(-1px, 3px); }
  100% { opacity: 0; transform: translate(-4px, 22px); } }
@keyframes hud-chunk-l2 { 0% { opacity: 1; transform: translate(0, 0); } 25% { opacity: 1; transform: translate(-1px, 3px); }
  100% { opacity: 0; transform: translate(-4px, 22px); } }
@keyframes hud-chunk-r { 0% { opacity: 1; transform: translate(0, 0); } 35% { opacity: 1; transform: translate(2px, 5px); }
  100% { opacity: 0; transform: translate(5px, 28px); } }
@keyframes hud-chunk-r2 { 0% { opacity: 1; transform: translate(0, 0); } 35% { opacity: 1; transform: translate(2px, 5px); }
  100% { opacity: 0; transform: translate(5px, 28px); } }
@media (prefers-reduced-motion: reduce) { .hud-chunk { display: none !important; } }
/* LOW HEALTH: the frame snaps to blood and back - a warning, stepped
   like every other state here, never faded. */
.hud-vital.low .hud-track { animation: hud-vlow 0.9s steps(1, end) infinite; }
@keyframes hud-vlow {
  0% { border-color: #e0584a #7a1d16 #5a130f #b83a2e; }
  50% { border-color: #9a9079 #3a352a #25221b #6e6755; }
}
@media (prefers-reduced-motion: reduce) {
  .hud-vital.low .hud-track { animation: none; border-color: #e0584a #7a1d16 #5a130f #b83a2e; }
}
`,I0=`
/* DROPS-AUDIT F4: the drop's PLUS4/PLUS5 edits to the held map's choices and the counter's columns landed in the
   PLAIN sheet and changed plain Enhanced; they are Plus's, here. The choice itself reads in --bone with the labels'
   shadow, the chosen one brighter on a brass tint; the shelf and basket columns carry a box and a heading rule; the
   detail strip keeps the kit's square corner. */
.hmpick { color: var(--bone); text-shadow: 1px 1px 0 rgba(0,0,0,0.85); }
.hmpick.on { color: #f3cf86; text-shadow: 1px 1px 0 rgba(0,0,0,0.85); border-color: var(--brass); background: rgba(192,138,62,0.16); }
.trade-shell .packcol { padding: 6px 10px 18px; border: 1px solid rgba(125,116,96,0.4); }
.trade-shell .remotehead { border-bottom: 2px solid rgba(125,116,96,0.3); padding-bottom: 10px; }
.trade-shell .trade-detail { border-radius: 0; }
/* PADPLUS1: the quickslot tags' pad glyphs are vectors under Plus - drawn bigger and smooth, not pixel-doubled */
.hud-qsglyph { width: 18px; height: 18px; image-rendering: auto; }
/* the pack's empty pages dim under their own class - the sheet's .empty is a dashed 26px component (ui/enhancedInventory.js) */
.packtab.tabempty { opacity: 0.45; }
/* PLUS1c: a page's COUNT reads as plainly as its name - the name's colour and size (the chosen page's yellow
   included), and no offset shadow: at 11px in the dim tone the tab's 2px shadow read as a second, doubled number. */
.pack-shell .packtab .count { color: inherit; font-size: 12px; text-shadow: none; }
/* PLUS1e: THE FEATURES DESCRIPTION FOLLOWS THE SCROLL IN THE PAUSE WINDOW TOO. There the pane sits in .px-qdetail,
   which is overflow:auto but never overflows - the window's body is what scrolls - and a sticky rail sticks to its
   NEAREST scroll box, so the rail stuck to one that never moved and scrolled away with the tiles. Opening that box
   (for the Features pane only) makes the body the rail's scroller, as the title screen's pane already is. */
.px-qdetail.px-sys:has(.ft-panes) { overflow: visible; }
.px-qdetail.px-sys .ft-rail { max-height: min(calc(100dvh - 300px), 520px); overflow-y: auto; }   /* a long description scrolls inside itself, never past the window's foot */
/* PLUS1d: THE CHAT'S FORM IN TWO ROWS - the field alone across the whole conversation column (it ends where the
   roster begins, never under it), and its buttons on a row beneath: the emoji at the left, Send, Hide and close at
   the right. The chat's own sheet is injected after this one, so every rule carries a leading body. */
body .dfchat-form { flex-wrap: wrap; row-gap: 6px; align-items: center; }
body .dfchat-form .dfchat-input { flex: 1 1 100%; min-height: 34px; }
body .dfchat-form .dfchat-emoji { margin-right: auto; }
body .dfchat-form .dfchat-send, body .dfchat-form .dfchat-hide, body .dfchat-form .dfchat-close {
  display: inline-flex; align-items: center; justify-content: center; min-height: 30px; padding: 4px 12px; font-size: 13px; }
body .dfchat-form .dfchat-send { min-width: 72px; }
body .dfchat-form .dfchat-close { min-width: 32px; padding: 4px 8px; }
/* PLUS2: the colour swatches on the UI Overhaul card */
.look-colours { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin: 4px 0 12px; }
.look-colours-label { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--dim); margin-right: 4px; }
.look-colour { display: inline-flex; align-items: center; gap: 6px; min-height: 32px; padding: 3px 9px 3px 5px;
  font: inherit; font-size: 12px; color: #d8cfae; cursor: pointer;
  background: rgba(12,14,18,0.6); border: 2px solid rgba(125,116,96,0.45); }
.look-colour[aria-pressed="true"] { border-color: #c08a3e; color: rgb(243,239,44); }
.look-colour:hover, .look-colour:focus-visible { border-color: #c08a3e; outline: none; }
/* TEXT-FONT: the installed font's name, typed in a field written in that font */
.look-fontname { flex: 1 1 180px; min-width: 0; min-height: 32px; padding: 4px 8px; font-size: 15px; color: #1d150b;
  background: rgba(255,250,236,0.9); border: 2px solid rgba(125,116,96,0.6); }
.look-fontname:focus { outline: none; border-color: #c08a3e; }
.look-colour-chip { display: inline-block; width: 16px; height: 16px; box-shadow: 0 0 0 1px #050608, inset 0 0 0 1px rgba(255,255,255,0.15); }
/* (PLUS1b's one status row under the vitals is gone - UI3: its effects and needs are the status widget's tiles,
   ui/hudStatus.js, on the quickslot block at the left edge.) */
/* RENOWN4b: the Renown row under Plus's vitals is as wide as THEIR row - three min(190px, 23vw) tracks and Plus's two
   16px gaps, at every width (Plus keeps its tracks and gap on a phone too) - the end caps' 4px aside. */
.hud-renown { width: calc(3 * min(190px, 23vw) + 32px); }
/* PLUS6: THE TRAVEL CARD'S OPTIONS, THEIR TWO FACES SWAPPED (Speed / Passage / Rest - ui/heldMap.js .hmpick).
   The CHOSEN option wore dark engraved words meant for a pale fill - but a textured theme (Stone) lays its own
   stone over every tile, the pale fill went and the pick read as dark on grey. So the two faces swap: the chosen
   option takes the bright, shadowed words (and keeps its brass frame), and the option NOT chosen takes the quiet
   face - struck into the stone on a textured theme, a dimmed bone on the dark ones (where dark words would vanish). */
.hmpick { color: #9a9079; text-shadow: 1px 1px 0 rgba(0,0,0,0.85); }
.hmpick:hover, .hmpick:focus-visible { color: #d8cfae; }
.hmpick.on { color: #fffaf0; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.55); border-color: ${f.brassHi} ${f.brassLo} #5c3f1a ${f.brass}; }
:root[data-plus-theme="stone"] .hmpick:not(.on) { color: #1f1c17; text-shadow: 1px 1px 0 rgba(255,255,255,0.34); }
:root[data-plus-theme="stone"] .hmpick:not(.on):hover { color: #1a1814; }
/* PLUS6: THE FOOD & DRINK MENU (ui/enhancedTavern.js foodMenu) - ONE window, not a column inside it. The menu
   column drew the pack's own column ground inside the tavern window and every dish was a raised tile in that - a
   box of boxes. Now the column is the window's own ground, the dishes are the lines of a bill of fare (an engraved
   rule under each, a lit band and a brass mark under the pointer), the price stands at the right in brass, a
   section's name sits centred between two engraved rules, and Back stands centred under the list. */
.tavern-shell .tavern-menu { background: none; border: 0; box-shadow: none; padding: 0; display: flex; flex-direction: column; }
.tavern-shell .tavern-menu-list { gap: 0; margin: 0; padding: 0 2px; }
.tavern-shell .tavern-row { min-height: 44px; padding: 10px 14px; margin: 0; border: 0; background: none;
  border-bottom: 2px solid rgba(5,6,8,0.5); box-shadow: 0 1px 0 rgba(163,152,128,0.16); cursor: pointer; }
.tavern-shell .tavern-row .itemname { font-size: 15px; color: #efe8d6; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.5); }
.tavern-shell .tavern-row .tavern-price { font-size: 14px; color: ${f.brassHi}; text-shadow: 1px 1px 0 #050608; }
.tavern-shell .tavern-row:hover, .tavern-shell .tavern-row:focus-visible { outline: none;
  background: linear-gradient(90deg, rgba(243,207,134,0.13), rgba(243,207,134,0.03) 70%, transparent);
  box-shadow: 0 1px 0 rgba(163,152,128,0.16), inset 3px 0 0 ${f.brass}; }
.tavern-shell .tavern-row:hover .itemname, .tavern-shell .tavern-row:focus-visible .itemname { color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
.tavern-shell .tavern-row:active { background: rgba(0,0,0,0.18); }
.tavern-shell .tavern-menu-header { display: flex; align-items: center; gap: 12px; margin: 16px 0 6px; font-size: 12px;
  letter-spacing: 0.22em; text-indent: 0.22em; color: ${f.brassHi}; text-shadow: 1px 1px 0 #050608; }
.tavern-shell .tavern-menu-header::before, .tavern-shell .tavern-menu-header::after { content: ''; flex: 1 1 auto; height: 2px;
  background: rgba(5,6,8,0.5); box-shadow: 0 1px 0 rgba(163,152,128,0.2); }
.tavern-shell .tavern-menu-header:first-child { margin-top: 2px; }
.tavern-shell .tavern-menu > .act { align-self: center; min-width: 140px; margin-top: 16px; }
.tavern-shell .tavern-menu-list { -webkit-mask-image: linear-gradient(180deg, #000 calc(100% - 22px), transparent); mask-image: linear-gradient(180deg, #000 calc(100% - 22px), transparent); padding-bottom: 18px; }
/* the tavern's (and the merchant popup's) buttons read like every other stone button: bright, spaced capitals */
.tavern-shell .act { text-align: center; justify-content: center; color: #e6dec6; text-transform: uppercase; letter-spacing: 0.14em; text-indent: 0.14em; font-size: 14px;
  text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.45); }
.tavern-shell .act:hover, .tavern-shell .act:focus-visible, .tavern-shell .act.primary { color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }

/* PLUS6: THE SHOP (ui/enhancedTrade.js). Its category tabs were words with an underline in a loose 2x2; they are
   the kit's stone buttons now (enhancedFrame.js button role), two by two, the chosen page brass-framed with gold
   words. The two columns are WELLS sunk into the window rather than raised boxes inside it, the shelf's rows are the
   lines of a list (the listRow role) with the icon in a small sunk socket, and the column's heading is the pixel
   face, not the display serif it fell back to. */
.trade-shell .packtabs { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 6px; margin: 4px 0 12px; }
.trade-shell .packtab { min-height: 38px; padding: 6px 8px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
  color: #e6dec6; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.45); border-bottom-width: 2px; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; }
.trade-shell .packtab.on, .trade-shell .packtab:hover, .trade-shell .packtab:focus-visible { color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); outline: none; }
/* theme-neutral: the columns and their heading show the THEME'S own window ground through a light shade - no fill of their own */
.trade-shell .packlists, .trade-shell .px-body { background: none; }
.trade-shell .packlists { background: none; }
.trade-shell .packcol { background: rgba(0,0,0,0.2); border-width: 2px; }
.trade-shell .remotehead { background: none; }
.trade-shell .remotehead { background-color: transparent; background-image: none; }
.trade-shell .remotewho h3 { font-family: inherit; font-weight: 400; font-size: 16px; letter-spacing: 0.14em; text-transform: uppercase;
  color: #efe8d6; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.45); }
.trade-shell .remotewho .meta { color: #a89f88; }
.trade-shell .itemrow { background: none; border-top: 0; border-left: 0; border-right: 0; border-bottom-width: 2px; min-height: 46px; padding: 8px 10px; }
.trade-shell .itemrow:hover { background: linear-gradient(90deg, rgba(243,207,134,0.1), transparent 70%); }
.trade-shell .itemrow .itemname { color: #efe8d6; text-shadow: 1px 1px 0 #050608; }
.trade-shell .itemrow:hover .itemname, .trade-shell .itemrow.on .itemname, .trade-shell .itemrow.picked .itemname { color: rgb(243,239,44); }
.trade-shell .itemrow .itemwt { color: #c9bfa4; }
.trade-shell .itemrow .tile { width: 34px; height: 34px; border: 2px solid; border-color: #25221b #7a7260 #9a9079 #3a352a;
  background: rgba(0,0,0,0.28); box-shadow: 0 0 0 1px #050608;
  /* LIST-FIT (2026-09-27, kurkku on Discord: "Equipment sprites too big for the boxes"): a FLEX room, as the loot
     window's tile is. The base tile is a grid, and a grid's auto row gives a picture's max-height: 100% (the tier
     frame's cap, D2 below) nothing to resolve against - only the width was held, and a tall picture (a pauldron, a
     dai-katana) hung out of the box into the rows beneath. The shop and a player trade (a trade-shell too). */
  display: flex; align-items: center; justify-content: center; }

/* LEVEL-PLUS: THE LEVELING QUESTION (ui/enhancedLevelingChoice.js) - the last screen of making a character, in the
   rest window's shell: an eyebrow, the question as the heading, one line of lead, then the two systems side by side as
   sunk stone tiles (stacked on a phone). The chosen tile rises in brass; a tile shut online (LEVEL-ONLINE) is dimmed
   with its reason where its Choose would be. Tints and bevels only - every Plus theme keeps its own stone. */
.lvl-shell { z-index: 30; display: flex; align-items: center; justify-content: center; padding: 16px; }
.lvl-shell .px-win { width: min(780px, 100%); height: auto; max-height: min(640px, 92dvh); }
.lvl-shell .px-body { overflow: auto; }
.lvl-card { padding: 22px 26px 18px; }
.lvl-eyebrow { text-align: center; font-size: 11px; letter-spacing: 0.3em; text-indent: 0.3em; text-transform: uppercase;
  color: ${f.brass}; text-shadow: 1px 1px 0 #050608; }
.lvl-card h2.lvl-title { margin: 6px 0 8px; font-family: inherit; font-weight: 400; text-align: center; font-size: 24px; letter-spacing: 0.18em; text-indent: 0.18em;
  text-transform: uppercase; color: #efe8d6; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.5); }
.lvl-lead { margin: 0 0 18px; text-align: center; font-size: 14px; color: #c9bfa4; text-shadow: 1px 1px 0 #050608; }
.lvl-opts { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; }
/* LEGACY-CHOICE: Project Legacy's online popup puts three answers - the window widens so the three stand in one row
   (each tile no narrower than 210px), and a narrower screen wraps them as the grid does two */
.lvl-shell .px-win.lvl-three { width: min(1000px, 100%); }
.lvl-three .lvl-opts { grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); }
.lvl-opt { font: inherit; text-align: left; color: #d8cfae; cursor: pointer; display: flex; flex-direction: column; gap: 10px;
  padding: 14px 16px 12px; background: rgba(0,0,0,0.32); border: 2px solid;
  border-color: ${f.stoneDark} ${f.stoneMid} ${f.stoneLit} ${f.stoneDim};
  box-shadow: 0 0 0 1px #050608, inset 0 2px 0 rgba(0,0,0,0.45); transition: none; }
.lvl-opt.is-on, .lvl-opt:focus-visible { outline: none; background: rgba(192,138,62,0.12);
  border-color: ${f.brassHi} ${f.brassLo} #5c3f1a ${f.brass};
  box-shadow: 0 0 0 1px #050608, 0 0 14px rgba(243,207,134,0.18), inset 0 1px 0 rgba(255,244,210,0.18); }
.lvl-opt-head { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }   /* AUDIT LEGACY II U10: a long tag wraps under the title, never past the card */
.lvl-key { flex: 0 0 auto; min-width: 22px; text-align: center; font-size: 12px; padding: 1px 4px; color: #a89f88;
  border: 1px solid rgba(125,116,96,0.55); }
.lvl-opt.is-on .lvl-key { color: rgb(243,239,44); border-color: ${f.brass}; }
.lvl-opt-title { font-size: 18px; letter-spacing: 0.08em; text-transform: uppercase; color: #efe8d6; text-shadow: 1px 1px 0 #050608; }
.lvl-opt.is-on .lvl-opt-title { color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
.lvl-tag { margin-left: auto; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #9c937d; white-space: normal; text-align: right; }
.lvl-opt-body { margin: 0; font-size: 14px; line-height: 1.5; color: #c5bda2; text-shadow: 1px 1px 0 #050608; }
.lvl-opt-foot { margin-top: auto; padding-top: 10px; border-top: 2px solid rgba(5,6,8,0.5); box-shadow: inset 0 1px 0 rgba(163,152,128,0.16);
  display: flex; justify-content: flex-end; }
.lvl-pick { font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; color: #a89f88; }
.lvl-opt.is-on .lvl-pick { color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
.lvl-lock { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: ${f.brass}; }
.lvl-opt:disabled { cursor: default; opacity: 0.55; }
.lvl-hint { margin-top: 16px; text-align: center; font-size: 12px; letter-spacing: 0.06em; color: #9c937d; }
@media (max-width: 560px) {
  .lvl-shell { padding: 8px; } .lvl-shell .px-win { max-height: 96dvh; } .lvl-shell .px-body { padding: 10px 8px; } .lvl-card { padding: 14px 12px 12px; }
  .lvl-card h2.lvl-title { font-size: 20px; }
  .lvl-opt { min-height: 44px; padding: 12px 12px 10px; gap: 8px; } .lvl-opts { gap: 10px; } .lvl-lead { margin-bottom: 12px; } .lvl-hint { margin-top: 10px; }
}

/* PLUS6: THE REST WINDOW WHILE RESTING (ui/enhancedRest.js restingCard) - a title, a readout, a meter and a clear
   space before Stop. The vitals line sat on the button; now the rest reads top to bottom as a card: the mode as the
   window's heading, the hours in a large brass readout, a sunk meter with a banded brass fill, the vitals as three
   small stats, and Stop on its own band under an engraved rule. Tints only - every theme keeps its own stone. */
.rest-shell .px-win { width: min(460px, 92vw); max-height: min(480px, 84dvh); }
.rest-shell .card h2 { margin: 0 0 16px; text-align: center; font-size: 20px; letter-spacing: 0.18em; text-indent: 0.18em;
  text-transform: uppercase; color: #efe8d6; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.5); }
.rest-shell .meter { margin: 0 0 6px; }
.rest-shell .meter-k { display: flex; justify-content: space-between; align-items: baseline; font-size: 12px; letter-spacing: 0.14em;
  text-transform: uppercase; color: #c9bfa4; text-shadow: 1px 1px 0 #050608; }
.rest-shell .meter-v { text-transform: none; font-size: 26px; letter-spacing: 0.04em; color: ${f.brassHi}; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.5); }
.rest-shell .meter-track { height: 14px; margin-top: 8px; background: rgba(0,0,0,0.4); border: 2px solid;
  border-color: ${f.stoneDark} ${f.stoneMid} ${f.stoneLit} ${f.stoneDim};
  box-shadow: 0 0 0 1px #050608, inset 0 2px 0 rgba(0,0,0,0.5); }
.rest-shell .meter-fill.brass { background: linear-gradient(180deg, ${f.brassHi} 0 2px, #d49a48 2px 6px, ${f.brass} 6px 8px, ${f.brassLo} 8px);
  box-shadow: inset -2px 0 0 rgba(255,244,210,0.7); }
.rest-shell .vitals-line { margin: 14px 0 0; text-align: center; font-size: 13px; letter-spacing: 0.04em; color: #d8cfae;
  text-shadow: 1px 1px 0 #050608; word-spacing: 0.4em; }
.rest-shell .card .acts { margin-top: 22px; padding-top: 16px; border-top: 2px solid rgba(5,6,8,0.5);
  box-shadow: inset 0 1px 0 rgba(163,152,128,0.2); justify-content: center; }
.rest-shell .card > p:not(.vitals-line) { text-align: center; }
/* AUDIT LIVED1b U7: the rest's clock line (AUDIT LIVED1 O) - one centred line under the readouts; empty offline, and gone */
.rest-shell .clock-line { margin: 10px 0 0; text-align: center; font-size: 12px; letter-spacing: 0.02em; color: #d8cfae;
  text-shadow: 1px 1px 0 #050608; }
.rest-shell .clock-line:empty { display: none; }

/* PLUS6: THE REST WINDOW WHILE RESTING - a title, the hours as a large gold readout, a sunk track with a banded
   brass fill, the three vitals as readouts, and Stop in its own foot under an engraved rule (it sat on the text). */
.rest-shell .card h2 { margin: 0 0 18px; text-align: center; font-size: 20px; letter-spacing: 0.2em; text-indent: 0.2em;
  text-transform: uppercase; color: #efe8d6; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.5); }
.rest-shell .meter { margin: 0 0 18px; }
.rest-shell .meter-k { display: flex; justify-content: space-between; align-items: baseline; font-size: 12px;
  letter-spacing: 0.14em; text-transform: uppercase; color: #c9bfa4; text-shadow: 1px 1px 0 #050608; }
.rest-shell .meter-v { float: none; font-size: 22px; letter-spacing: 0; color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
.rest-shell .meter-track { height: 14px; margin-top: 8px; border: 2px solid; border-color: #25221b #7a7260 #9a9079 #3a352a;
  background: rgba(0,0,0,0.45); box-shadow: 0 0 0 1px #050608, inset 0 2px 0 rgba(0,0,0,0.5); }
.rest-shell .meter-fill.brass { background: linear-gradient(180deg, #f3cf86 0 2px, #d9a452 2px 5px, #c08a3e 5px 8px, #7a5424 8px); }
.rest-shell .vitals-line { display: flex; justify-content: space-between; gap: 10px; margin: 0; }
.rest-shell .vitals-line .rv { flex: 1 1 0; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 6px 4px;
  background: rgba(0,0,0,0.22); box-shadow: 0 0 0 1px rgba(5,6,8,0.6), inset 0 2px 0 rgba(0,0,0,0.3); }
.rest-shell .rv-k { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #a89f88; }
.rest-shell .rv-v { font-size: 16px; color: #efe8d6; text-shadow: 1px 1px 0 #050608; font-variant-numeric: tabular-nums; }
.rest-shell .card .acts { margin-top: 20px; padding-top: 16px; border-top: 2px solid rgba(5,6,8,0.5);
  box-shadow: inset 0 1px 0 rgba(163,152,128,0.2); justify-content: center; }
.rest-shell .act { min-width: 130px; text-align: center; justify-content: center; color: #e6dec6; text-transform: uppercase; letter-spacing: 0.14em; }
/* the shop's buttons read like every other stone button */
.trade-shell .act { text-align: center; justify-content: center; color: #e6dec6; text-transform: uppercase; letter-spacing: 0.12em;
  text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.45); }
.trade-shell .act:hover, .trade-shell .act.primary:not(:disabled) { color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }

/* PLUS6: THE TALK WINDOW's buttons read like every other stone button, and its UNCHOSEN tone and mode words
   (Normal, Blunt, Where is) are quieter than the chosen one but still legible on every theme */
.talk-head .act, .talk-say .act { text-align: center; justify-content: center; color: #e6dec6; text-transform: uppercase;
  letter-spacing: 0.12em; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.45); }
.talk-head .act:hover, .talk-say .act:hover { color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
.talk-tone button:not([aria-pressed="true"]), .talk-mode:not(.on) { color: #b3aa92; text-shadow: 1px 1px 0 #050608; }
.talk-tone button:not([aria-pressed="true"]):hover, .talk-mode:not(.on):hover { color: #efe8d6; }

/* PLUS7: THE INVENTORY'S HOVER CARD AND RIGHT-CLICK MENU (ui/enhancedInventory.js). They float on <body>, outside
   the pack's own sheet scope, so they carry their own face; the kit's panel role colours them per theme. */
.inv-tip, .inv-menu { position: fixed; z-index: 39; font-family: ${M}; -webkit-font-smoothing: none;
  font-variant-ligatures: none; color: #d8cfae; }
.inv-tip { pointer-events: none; width: min(290px, 80vw); max-height: calc(100vh - 16px); overflow: hidden; }
/* AUDIT SET U13: a hover card taller than the screen sheds what a glance can spare (ui/enhancedInventory.js fitTip) -
   CARD-FIT: its set and sigil blocks are the card's short dress already, so the steps take the picture's size, then
   the picture and the tiers' briefs (their names stay); the Info box keeps every word. The screen's edge is the last
   word. */
.inv-tip.tip-compact .bigicon img { width: 56px; height: 56px; }
.inv-tip.tip-compact .set-tier-text { font-size: 11px; line-height: 1.2; }
.inv-tip.tip-tight .bigicon, .inv-tip.tip-tight .set-tier-text, .inv-tip.tip-tight .sigil-note { display: none; }
.inv-tip > .card { margin: 0; padding: 14px 16px 12px; border: 2px solid; }
.inv-tip .bigicon { display: flex; justify-content: center; margin: 0 0 8px; }
.inv-tip .bigicon img { width: 96px; height: 96px; object-fit: contain; image-rendering: pixelated; }
.inv-tip h3 { margin: 0 0 4px; font: inherit; font-size: 17px; letter-spacing: 0.04em; color: #efe8d6;
  text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.45); }
.inv-tip .meta { margin: 0 0 8px; font-size: 12px; color: #a89f88; }
.inv-tip .rarity { margin: 0 0 8px; padding: 0; list-style: none; font-size: 12px; color: ${f.brassHi}; }   /* RARITY-UI: the tier line wears its pips, so the list's bullets went */
.inv-tip dl.stats > .pair { display: contents; }   /* CARD-FIT: a pair's group steps out of the hover card's grid */
.inv-tip dl.stats { display: grid; grid-template-columns: auto 1fr; gap: 3px 14px; margin: 0; padding-top: 8px;
  border-top: 2px solid rgba(5,6,8,0.45); box-shadow: inset 0 1px 0 rgba(163,152,128,0.16); }
.inv-tip dt { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #a89f88; align-self: center; }
.inv-tip dd { margin: 0; font-size: 14px; color: #efe8d6; text-align: right; font-variant-numeric: tabular-nums; }
.inv-menu { min-width: 190px; padding: 6px; display: flex; flex-direction: column; border: 2px solid; }
.inv-menu-head { margin: 2px 6px 6px; padding-bottom: 6px; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  color: ${f.brassHi}; border-bottom: 2px solid rgba(5,6,8,0.45); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.inv-menu-item { display: block; width: 100%; min-height: 34px; padding: 6px 12px; border: 0; background: none; text-align: left;
  font: inherit; font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase; color: #e6dec6;
  text-shadow: 1px 1px 0 #050608; cursor: pointer; }
.inv-menu-item:hover, .inv-menu-item:focus-visible { outline: none; color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12);
  background: linear-gradient(90deg, rgba(243,207,134,0.14), transparent 80%); box-shadow: inset 3px 0 0 ${f.brass}; }
/* PLUS10: THE INFO BOX - the classic Info popup's own text (TEXT.RSC), in the kit's stone over the pack. */
.inv-info { position: fixed; inset: 0; z-index: 39; display: flex; align-items: center; justify-content: center;
  padding: 16px; background: rgba(0,0,0,0.35); font-family: ${M}; -webkit-font-smoothing: none; }
.inv-info > .card { width: min(380px, 92vw); max-height: 86vh; overflow: hidden; margin: 0; padding: 16px 18px 14px;
  border: 2px solid; display: flex; flex-direction: column; gap: 10px; }
/* CARD-FIT U9: the words scroll, Close stands under them */
.inv-info-body { flex: 1 1 auto; min-height: 0; overflow-y: auto; overscroll-behavior: contain; display: flex; flex-direction: column; gap: 10px; }
.inv-info-box p { margin: 0 0 4px; font-size: 14px; line-height: 1.3; color: #e6dec6; text-shadow: 1px 1px 0 #050608; }
.inv-info-box p.center { text-align: center; }
.inv-info-box:first-child p:first-child { font-size: 16px; color: #efe8d6; }
.inv-info-box.more { padding-top: 10px; border-top: 2px solid rgba(5,6,8,0.45); box-shadow: inset 0 1px 0 rgba(163,152,128,0.16); }
.inv-info-box.more p { color: ${f.brassHi}; }
.inv-info > .card > .act { align-self: center; min-width: 120px; }
.inv-dismantle .acts { justify-content: center; margin-top: 10px; }   /* SS5: the dismantle's Dismantle and Keep, under the question */
.inv-target .inv-info-body { gap: 0; }   /* MEND-AIM: the kit's chooser - one row a piece, the menu's own rows */
.inv-target .inv-menu-item { text-transform: none; letter-spacing: 0.02em; }
.inv-target .acts { justify-content: center; }


/* PLUS5: THE PAUSE WINDOW'S RAIL AND TAB ROW (Quests/Stats/System, and Stats' own Character/
   Attributes/Skills/Advantages/Standing rail) were in FRAME_ROLES already - the kit paints their
   BORDER and the chosen row's brass mark - but neither band carries a fill of its own, so between
   those painted edges it still reads as the window's bare ground with words on it, not a stone
   strip the way the shop and tavern's own header bands (also a header-role selector) do. One flat
   tint, the same weight the kit's own panel ground keeps, gives both bands a surface to sit on. */
.px-win .px-tabs { background-color: rgba(15,17,22,0.55); }
.px-qrail { background-color: rgba(15,17,22,0.4); }

/* PLUS9: THE SPLIT WORN PANELS (ui/enhancedInventory.js WORN_FAMILIES). Chest, arms and legs are one grid cell
   holding two half panels - armour | clothes, left | right. Each half is a .wornrow, so the kit's tile stone, the
   brass of the picked one, the drag and the hover card all come along; these rules only split the cell and fit it.
   PLUS9b: with the real paper doll standing in the centre a half is only ~75px wide, so side by side the icon and
   the name could not both fit (the name was cut to four letters, and PLUS9 had dropped the icon for it). A FILLED
   half is now a little stack - the item's picture, its name under it on up to two lines - and its slot word goes to
   the hover card (the cell's place says it anyway). An EMPTY half keeps the open diamond and the slot word, so the
   player still sees where a shirt or a pauldron goes. A half wide enough for a row (a container query, not a guess at
   the screen) lays out as the full panels do. */
.pack-shell .equipped .wornpair { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 6px;
  min-width: 0; min-height: 0; container-type: inline-size; }
.pack-shell .equipped .wornpair > .wornrow { min-width: 0; min-height: 0;
  flex-direction: column; align-items: center; justify-content: center; gap: 3px; padding: 4px 4px; text-align: center; }
.pack-shell .wornpair > .wornrow .tile { width: 28px; height: 28px; font-size: 14px; }
.pack-shell .wornpair > .wornrow .tile img { max-width: 28px; max-height: 28px; }
.pack-shell .wornpair > .wornrow .worntile { font-size: 16px; line-height: 1; }
.pack-shell .wornpair > .wornrow .worntext { width: 100%; align-items: center; gap: 1px; }
.pack-shell .wornpair > .wornrow:not(.wornempty) .wornslot { display: none; }
.pack-shell .wornpair > .wornrow .wornslot { font-size: 11px; letter-spacing: 0.06em; line-height: 1.15;
  white-space: normal; text-align: center; }
.pack-shell .wornpair > .wornrow .wornname { font-size: 11px; line-height: 1.15; text-align: center;
  white-space: normal; overflow-wrap: anywhere; max-width: 100%;
  display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; line-clamp: 2; }
.pack-shell .wornpair > .wornrow.wornempty .wornname { display: none; }   /* the open diamond and the slot word carry an empty */
/* a pair with room for two rows (each half ~170px): icon beside the slot word and the name, like the full panels */
@container (min-width: 346px) {
  .pack-shell .equipped .wornpair > .wornrow { flex-direction: row; justify-content: flex-start; gap: 10px;
    padding: 4px 10px; text-align: left; }
  .pack-shell .wornpair > .wornrow .tile { width: 34px; height: 34px; }
  .pack-shell .wornpair > .wornrow .tile img { max-width: 30px; max-height: 30px; }
  .pack-shell .wornpair > .wornrow .worntext { align-items: flex-start; gap: 3px; }
  .pack-shell .wornpair > .wornrow:not(.wornempty) .wornslot { display: block; }
  .pack-shell .wornpair > .wornrow .wornslot, .pack-shell .wornpair > .wornrow .wornname { text-align: left; }
  .pack-shell .wornpair > .wornrow .wornslot { font-size: 11px; letter-spacing: 0.12em; white-space: nowrap;
    overflow: hidden; text-overflow: ellipsis; max-width: 100%; }
  .pack-shell .wornpair > .wornrow .wornname { font-size: 12px; }
}
@media (min-width: 1300px) {
  .pack-shell .equipped .wornpair { gap: 8px; }
}
/* UI1 (bible/10-UI/Slots-Hotbar-Status.md): THE BODY'S PICTURES GROW TOO, where the map has the room - a desktop's
   pack, whose five rows stand 64px and more. A worn panel's picture has a room up to 56px square (a 48px box: the
   grid's own, so the pack's slot and the body's are one picture), a half panel's up to 44 (a 36px box) over its name;
   a short window's row shrinks the room with it, and the picture inside shrinks whole (ui/textureCanvas.js
   fittedImg). The room is no box: the panel is the frame (UI1b). The phone's map keeps its compact rows. */
@media (min-width: 1000px) {
  .pack-shell .charcol .equipped .wornrow .tile { width: auto; height: min(56px, calc(100% - 4px)); aspect-ratio: 1; font-size: 26px; }
  .pack-shell .charcol .equipped .wornpair > .wornrow .tile { height: min(44px, calc(100% - 26px)); font-size: 18px; }
}
/* PLUS11: FIVE ROWS, NOT SIX - the accessories left the grid for the shelf, so every panel is a fifth taller.
   The three rules mirror the enhanced sheet's own three (the map, the map in the pack's column, and that column at
   desktop widths), one class deeper so they win. */
.pack-shell .wornmap.plus5 { grid-template-rows: repeat(5, minmax(44px, 1fr)); }
.pack-shell .charcol .wornmap.plus5 { grid-template-rows: repeat(5, minmax(44px, auto)); }
@media (min-width: 1000px) { .pack-shell .charcol .wornmap.plus5 { grid-template-rows: repeat(5, minmax(48px, 1fr)); } }
/* PLUS11: THE ACCESSORY SHELF - under the doll where Mount / Cart stood: six labelled pairs of square sockets in a
   row, the classic shelf turned on its side. The kit paints the sockets (enhancedFrame.js tile role). */
.pack-shell .wornshelf { display: flex; gap: 10px; margin-top: 10px; min-width: 0; padding: 0 2px; }
.pack-shell .shelfgrp { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 4px; }
.pack-shell .shelfpair { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px; width: 100%; max-width: 116px; }
.pack-shell .wornsock { position: relative; aspect-ratio: 1; min-width: 0; min-height: 0; max-height: 56px; margin: 0;
  display: flex; align-items: center; justify-content: center; padding: 2px; overflow: hidden;
  background: rgba(10,12,17,0.72); border: 2px solid rgba(125,116,96,0.35); color: #a89f88; font: inherit;
  touch-action: pan-y; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }
.pack-shell button.wornsock { cursor: pointer; }
.pack-shell .wornsock .tile { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;
  border: 0; background: none; font-size: 13px; color: #d8cfae; }
.pack-shell .wornsock .tile img { max-width: 100%; max-height: 100%; }
/* AUDIT UI A1: a phone's accessory socket (23px across six pairs) shrinks its picture whole on purpose (UI1) - smoothly */
@media (max-width: 640px) { .pack-shell .wornsock .tile img.fit { image-rendering: auto; } }
.pack-shell .wornsock .worntile { font-size: 14px; color: rgba(125,116,96,0.55); }
.pack-shell .wornsock.wornempty { background: rgba(0,0,0,0.18); border-color: rgba(125,116,96,0.22); }
.pack-shell .wornsock.dragging { opacity: 0.4; }
body.draglock .pack-shell .wornsock { touch-action: none; }
.pack-shell .wornshelf.dragover { outline: 2px solid var(--brass); outline-offset: 3px; }
.pack-shell .shelflabel { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #a89f88; text-shadow: 1px 1px 0 #050608; }
@media (max-width: 640px) { .pack-shell .shelflabel { letter-spacing: 0; } }   /* AUDIT FONT3 L6: after the rule it narrows - AMULETS and CRYSTALS whole in a 52px group (BRACELETS was cut before FONT3 too) */
`,O0=`
/* ── PLUS8: THE JOURNEY BAR ── */
.travelpanel { font-family: ${M}; -webkit-font-smoothing: none; font-variant-ligatures: none;
  font-feature-settings: 'liga' 0, 'clig' 0; color: #d8cfae;
  /* the compass's foot: .hud-top at 18px, the strip 26px and its 2px rule, all times the HUD scale */
  --tp-top: calc(18px + 28px * var(--hud-scale, 1) + 20px); }
body:has(.hud-foe.on) .travelpanel { --tp-top: calc(18px + 28px * var(--hud-scale, 1) + 20px + 46px * var(--hud-scale, 1)); }
body:has(.hud-foe.on.blade) .travelpanel { --tp-top: calc(18px + 28px * var(--hud-scale, 1) + 20px + 76px * var(--hud-scale, 1)); }
/* ── PLUS-MAP: THE 3D DUNGEON MAP'S BAR ── the map's turn, tilt, floor and view as Enhanced Plus buttons in a carved
   bar over the foot of the paper (ui/heldMap.js _renderTools), in the journey bar's stone and parting rules; the floor
   readout between Down and Up in the journey's gold numerals */
.hmroot .hmtools { position: absolute; left: 50%; bottom: 58px; transform: translateX(-50%); z-index: 2;
  display: flex; align-items: stretch; max-width: calc(100vw - 32px); box-sizing: border-box; border: 2px solid; border-radius: 0;
  pointer-events: auto; ${re} }
/* PLUS-MAP (Mac: "the fonts dont look like this ... make sure its enhanced plus"): the bar speaks the Plus pixel face
   outright - the map's root is lettered in the body face, and the bar inherited it */
.hmroot .hmtools button, .hmroot .hmtools .hmfloor, .hmroot .hmtools .dlg-key { ${Ci} }   /* AUDIT FONT3 F2: the face alone - the trio's reading pair (0.5px) outranked .hmtool's own 0.12em here, at (0,2,1) over (0,2,0); the weight and spacing inherit */
.hmroot .hmtoolgroup { display: flex; align-items: center; gap: 6px; padding: 7px 12px; }
.hmroot .hmtoolgroup + .hmtoolgroup { border-left: 2px solid rgba(5,6,8,0.55); box-shadow: inset 1px 0 0 rgba(163,152,128,0.18); }
.hmroot .hmtool { display: inline-flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px;
  min-width: 58px; min-height: 58px; padding: 6px 8px 5px; border: 2px solid; border-radius: 0; font-family: inherit;
  font-size: 12px; letter-spacing: 0.12em; text-indent: 0.12em; text-transform: uppercase; color: #e6dec6;
  text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.45); cursor: pointer; }
.hmroot .hmtool .hmtoolicon { width: 22px; height: 22px; filter: drop-shadow(1px 1px 0 #050608); }
.hmroot .hmtool .dlg-key { min-width: 18px; height: 16px; padding: 0 4px; font-size: 11px; letter-spacing: 0.04em; text-indent: 0; }
.hmroot .hmtool:hover, .hmroot .hmtool:focus-visible, .hmroot .hmtool.on { outline: none; color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
.hmroot .hmtool:disabled { color: #6c6552; text-shadow: none; cursor: default; opacity: 0.7; }
.hmroot .hmfloor { display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 92px; padding: 0 6px;
  font-variant-numeric: tabular-nums; }
.hmroot .hmfloornum { font-size: 19px; letter-spacing: 0.04em; color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
.hmroot .hmfloorof { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #a89f88; text-shadow: 1px 1px 0 #050608; }
.hmroot .hmflooryou { font-size: 11px; letter-spacing: 0.06em; color: #d8cfae; text-shadow: 1px 1px 0 #050608; white-space: nowrap; }
@media (max-width: 860px) { .hmroot .hmtools { bottom: 92px; } .hmroot .hmtool { min-width: 46px; min-height: 50px; } .hmroot .hmtoollabel { display: none; } }
.travelpanel-bar { top: var(--tp-top); min-width: min(720px, 92vw); max-width: calc(100vw - 32px); box-sizing: border-box;
  border: 2px solid; border-radius: 0; align-items: stretch; }
.travelpanel-dest { gap: 3px; padding: 10px 18px 10px 20px; }
.travelpanel-label { font-size: 11px; letter-spacing: 0.2em; color: #a89f88; text-shadow: 1px 1px 0 #050608; }
.travelpanel-name { font-family: inherit; font-size: 21px; line-height: 1.15; letter-spacing: 0.04em; color: #efe8d6;
  text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.5); }
.travelpanel.following .travelpanel-name, .travelpanel-bar.following .travelpanel-name { color: ${f.brassHi}; }
.travelpanel-sub { font-size: 12px; letter-spacing: 0.06em; color: #c9bfa4; text-shadow: 1px 1px 0 #050608;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-variant-numeric: tabular-nums; }
/* the parting rules: a dark cut with the light catching beside it, the kit's engraved line stood on end */
.travelpanel-speed, .travelpanel-acts { border-left: 2px solid rgba(5,6,8,0.55); box-shadow: inset 1px 0 0 rgba(163,152,128,0.18); }
.travelpanel-speed { align-items: center; gap: 6px; padding: 8px 18px; }
.travelpanel-speed > .travelpanel-label { text-indent: 0.2em; }
.travelpanel-accel { min-width: 64px; height: 30px; box-sizing: border-box; display: grid; place-items: center; padding: 0 8px;
  border: 2px solid; background: rgba(0,0,0,0.38); font-family: inherit; font-size: 17px; letter-spacing: 0.04em;
  font-variant-numeric: tabular-nums; color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
/* TV2: the clock held under the ground's rate while the land loads (systems/travelGovernor.js; OW6: or an alerted enemy
   near) - the rate that runs first */
.travelpanel-accel.held { min-width: 92px; color: rgb(236,160,60); }
/* RATE-LAW: the ground's word under the socket */
.travelpanel-ground { font-size: 11px; letter-spacing: 0.06em; color: #c9bfa4; text-shadow: 1px 1px 0 #050608; }
.travelpanel-acts { gap: 8px; padding: 8px 16px; }
.travelpanel-act { min-width: 78px; min-height: 36px; padding: 6px 14px; border: 2px solid; border-radius: 0;
  font-family: inherit; font-size: 13px; letter-spacing: 0.14em; text-indent: 0.14em; text-align: center; color: #e6dec6;
  text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.45); }
.travelpanel-act:hover, .travelpanel-act:focus-visible {
  outline: none; color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
/* the journey's word (a stop, a speed refused): outlined gold words under the bar, the HUD lines' own face */
.travelpanel-msg { top: calc(var(--tp-top) + 104px); max-width: calc(100vw - 48px); text-align: center; font-size: 14px;
  letter-spacing: 0.06em; color: rgb(243,239,44);
  text-shadow: -1px 0 0 #050608, 1px 0 0 #050608, 0 -1px 0 #050608, 0 1px 0 #050608, 2px 2px 0 rgb(93,77,12); }
/* the junction disc: a round socket - an outline, a stone ring lit from the top left, a brass lip, sunk inside */
.travelpanel-junction { top: calc(var(--tp-top) + 112px); border: 0;
  background: color-mix(in srgb, var(--ink) 84%, transparent);
  box-shadow: inset 3px 3px 0 rgba(0,0,0,0.5), 0 0 0 2px ${f.brass}, 0 0 0 3px ${f.outline},
    -2px -2px 0 4px ${f.stoneLit}, 2px 2px 0 4px ${f.stoneDark}, 0 0 0 6px ${f.outline},
    4px 4px 0 6px rgba(0,0,0,0.42); }
/* while the disc stands alone (a junction stop) it takes the bar's place under the compass */
.travelpanel.junction-only .travelpanel-junction { top: var(--tp-top); }
/* a textured stone (Stone): the small labels are struck into the rock, the words keep their light */
:root[data-plus-theme="stone"] .travelpanel-label { color: #15130f; text-shadow: 1px 1px 0 rgba(255,255,255,0.36); }
:root[data-plus-theme="stone"] .travelpanel-sub { color: #e6dec6; }
:root[data-plus-theme="stone"] .travelpanel-speed, :root[data-plus-theme="stone"] .travelpanel-acts {
  border-left-color: rgba(5,6,8,0.5); box-shadow: inset 1px 0 0 rgba(255,255,255,0.16); }
@media (max-width: 760px) {
  .travelpanel-bar { min-width: 0; width: calc(100vw - 24px); }
  .travelpanel-name { font-size: 17px; }
  .travelpanel-dest { padding: 8px 12px; }
  .travelpanel-speed { padding: 8px 10px; }
  .travelpanel-acts { padding: 8px 10px; gap: 6px; }
  .travelpanel-act { min-width: 0; padding: 6px 9px; font-size: 12px; letter-spacing: 0.1em; text-indent: 0.1em; }
  .travelpanel-junction { width: 108px; height: 108px; right: 14px; }
}
/* a phone held upright: the destination takes the whole first row, the time and the three presses the second */
@media (max-width: 560px) {
  .travelpanel-bar { flex-wrap: wrap; }
  .travelpanel-dest { flex: 1 1 100%; border-bottom: 2px solid rgba(5,6,8,0.55); box-shadow: 0 1px 0 rgba(163,152,128,0.18); }
  .travelpanel-speed { flex-direction: row; padding: 8px 8px 8px 12px; border-left: 0; box-shadow: none; }
  .travelpanel-speed { flex-direction: column; align-items: flex-start; }
  .travelpanel-speed > .travelpanel-label { display: none; }   /* the x40 in its socket says what it is; the row needs the room */
  .travelpanel-accel { min-width: 52px; }
  .travelpanel-acts { flex: 1 1 auto; padding: 8px 12px 8px 8px; }
  .travelpanel-act { flex: 1 1 0; min-width: 0; padding: 6px 4px; }
  .travelpanel-msg { top: calc(var(--tp-top) + 152px); }
  .travelpanel-junction { top: calc(var(--tp-top) + 164px); }
}
@media (prefers-reduced-motion: reduce) { .travelpanel-msg { transition: none; } }
/* ── OW-BLOCK: THE OVERWORLD'S BLOCK ── bottom right, one carved stone, one pixel face; its sections parted by the kit's
   engraved line (a dark cut with the light catching under it) - the kit paints the frame (FRAME_ROLES) */
.tview-bar { font-family: ${M}; -webkit-font-smoothing: none; font-variant-ligatures: none;
  font-feature-settings: 'liga' 0, 'clig' 0; color: #d8cfae; border: 2px solid; border-radius: 0; width: 292px; }
.tview-bar > * + * { border-top: 2px solid rgba(5,6,8,0.55); box-shadow: inset 0 1px 0 rgba(163,152,128,0.18); }
.tview-head { padding: 9px 14px 8px; gap: 12px; }
.tview-title, .tview-label { font-size: 11px; letter-spacing: 0.2em; color: #a89f88; text-shadow: 1px 1px 0 #050608; }
.tview-where { font-size: 13px; line-height: 1.2; letter-spacing: 0.03em; color: #efe8d6; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.5); }
.tview-trip { font-size: 11px; letter-spacing: 0.03em; color: ${f.brassHi}; text-shadow: 1px 1px 0 #050608; }
.tview-idle { padding: 10px 14px; }
.tview-idle-name { font-size: 16px; line-height: 1.15; letter-spacing: 0.04em; color: #a89f88; text-shadow: 1px 1px 0 #050608; }
.tview-idle-sub { font-size: 11px; letter-spacing: 0.04em; color: #8f8772; text-shadow: 1px 1px 0 #050608; }
#travel-view .tview-dock .travelpanel-dest { padding: 10px 14px 5px; }
#travel-view .tview-dock .travelpanel-name { font-size: 17px; }
#travel-view .tview-dock .travelpanel-speed { padding: 3px 0 10px 14px; }
#travel-view .tview-dock .travelpanel-acts { padding: 3px 14px 10px 8px; }
#travel-view .tview-dock .travelpanel-act { min-height: 30px; padding: 4px 10px; font-size: 12px; }
#travel-view .tview-dock > .travelpanel-msg { bottom: calc(100% + 12px); }
.tview-tools { padding: 9px 14px; }
.tview-mode { min-width: 56px; min-height: 30px; padding: 4px 10px; border: 2px solid; border-radius: 0; font-family: inherit;
  font-size: 12px; letter-spacing: 0.12em; text-indent: 0.12em; color: #a89f88; text-shadow: 1px 1px 0 #050608; }
.tview-mode + .tview-mode { border-left: 2px solid; }
.tview-mode.on { color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
.tview-map, .tview-back { min-height: 32px; padding: 5px 14px; border: 2px solid; border-radius: 0; font-family: inherit; font-size: 13px;
  letter-spacing: 0.14em; text-indent: 0.14em; color: #e6dec6; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.45); }
.tview-map:hover, .tview-map:focus-visible, .tview-back:hover, .tview-back:focus-visible, .tview-mode:hover, .tview-mode:focus-visible {
  outline: none; color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
.tview-filters { padding: 9px 12px 11px; gap: 5px; }
/* FILTERS-LEFT: the filters' own block, bottom left - the right's block's stone and face */
.tview-side { font-family: ${M}; -webkit-font-smoothing: none; font-variant-ligatures: none;
  font-feature-settings: 'liga' 0, 'clig' 0; color: #d8cfae; border: 2px solid; border-radius: 0; width: 292px; }
.tview-side-head { font-family: inherit; font-size: 11px; padding: 8px 14px; color: #a89f88; text-shadow: 1px 1px 0 #050608; }
.tview-side-head:hover, .tview-side-head:focus-visible { outline: none; color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
.tview-side > .tview-filters { border-top: 2px solid rgba(5,6,8,0.55); box-shadow: inset 0 1px 0 rgba(163,152,128,0.18); }
:root[data-plus-theme="stone"] .tview-side > .tview-filters { border-top-color: rgba(5,6,8,0.5); box-shadow: inset 0 1px 0 rgba(255,255,255,0.16); }
:root[data-plus-theme="stone"] .tview-side-head { color: #15130f; text-shadow: 1px 1px 0 rgba(255,255,255,0.36); }
.tview-mode.tview-wp-go, .tview-mode.tview-wp-x { min-width: 0; min-height: 26px; height: 26px; padding: 0 9px; border: 2px solid; font-size: 11px; }
.tview-mode.tview-wp-x { width: 26px; padding: 0; font-size: 14px; text-indent: 0; }
.tview-wp-pick:disabled { color: #6c6552; text-shadow: none; }
#wp-menu { font-family: ${M}; -webkit-font-smoothing: none; font-variant-ligatures: none; border-radius: 0; }
#wp-menu { color: #d8cfae; border: 2px solid; padding: 12px 14px 14px; }
#wp-menu .wpm-title { font-size: 15px; letter-spacing: 0.04em; color: #efe8d6; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.5); }
#wp-menu .wpm-sub, #wp-menu .wpm-label { font-size: 11px; letter-spacing: 0.18em; color: #a89f88; text-shadow: 1px 1px 0 #050608; }
#wp-menu .wpm-btn, #wp-menu .wpm-kind { min-height: 30px; border: 2px solid; border-radius: 0; font-family: inherit; font-size: 12px;
  letter-spacing: 0.12em; text-indent: 0.12em; text-transform: uppercase; color: #e6dec6; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.45); }
#wp-menu .wpm-kind + .wpm-kind { border-left: 2px solid; }
#wp-menu .wpm-kind { color: #a89f88; }
#wp-menu .wpm-kind.on, #wp-menu .wpm-btn.main, #wp-menu .wpm-btn:hover, #wp-menu .wpm-btn:focus-visible, #wp-menu .wpm-kind:not(:disabled):hover {
  outline: none; color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
#wp-menu .wpm-kind:disabled { color: #6c6552; text-shadow: none; }
#wp-menu input.wpm-name { min-height: 30px; border: 2px solid; border-radius: 0; font-family: inherit; font-size: 13px; color: #efe8d6; }
#wp-menu .wpm-x { font-family: inherit; color: #a89f88; }
#wp-menu .wpm-x:hover { color: rgb(243,239,44); }
#wp-menu .wpm-swatch { height: 22px; border-radius: 0; border: 2px solid #050608; }
#wp-menu .wpm-swatch.on { border-color: rgb(243,239,44); box-shadow: 0 0 0 1px #050608; }
#wp-menu .wpm-note { color: #c9bfa4; text-shadow: 1px 1px 0 #050608; }
.tview-wp-row { border: 2px solid rgba(5,6,8,0.55); border-radius: 0; }
.tview-wp-name { color: #efe8d6; text-shadow: 1px 1px 0 #050608; }
.tview-wp-dist { color: #a89f88; text-shadow: 1px 1px 0 #050608; }
/* PACE-DIALS: THE SPEED DIALS, the kit's own - two stone presses round a sunk socket with the rate in the journey's gold
   numerals (the old spinner's dress, PLUS8's .travelpanel-accel), the dial's word in the block's lettering. The kit paints
   the stone (FRAME_ROLES: the presses are buttons, the socket a well); these place, size and letter. */
.tview-pace, .travelpanel-pace, .pbox-pace { font-family: ${M}; -webkit-font-smoothing: none; font-variant-ligatures: none;
  font-feature-settings: 'liga' 0, 'clig' 0; }
.tview-pace-word, .travelpanel-pace-word, .pbox-pace-word { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #d8cfae;
  text-shadow: 1px 1px 0 #050608; }
.tview-pace-num, .travelpanel-pace-num, .pbox-pace-num { height: 30px; border: 2px solid; font-family: inherit; font-size: 16px;
  color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
.tview-pace-step, .travelpanel-pace-step, .pbox-pace-step { height: 30px; min-width: 30px; border: 2px solid; border-radius: 0;
  font-family: inherit; font-size: 15px; color: #e6dec6; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.45); }
.tview-pace-step:hover:not(:disabled), .travelpanel-pace-step:hover:not(:disabled), .pbox-pace-step:hover:not(:disabled),
.tview-pace-step:focus-visible, .travelpanel-pace-step:focus-visible, .pbox-pace-step:focus-visible {
  outline: none; color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
.tview-pace-step:disabled, .travelpanel-pace-step:disabled, .pbox-pace-step:disabled { color: #6c6552; text-shadow: none; cursor: default; }
.tview-filter { border: 2px solid; border-radius: 0; font-family: inherit; font-size: 11px; letter-spacing: 0.05em; padding: 4px 7px;
  color: #8f8772; text-shadow: 1px 1px 0 #050608; }
.tview-filter.on { color: #efe8d6; }
.tview-filter:hover, .tview-filter:focus-visible { outline: none; color: rgb(243,239,44); text-shadow: 1px 1px 0 rgb(93,77,12); }
.tview-fdot { width: 8px; height: 8px; border-radius: 0; box-shadow: 0 0 0 1px #050608, 1px 1px 0 1px rgba(0,0,0,0.5); }
.tview-fnum { font-size: 11px; color: #a89f88; text-shadow: 1px 1px 0 #050608; }
.tview-foot { padding: 9px 14px 11px; }
.tview-confirm { font-family: ${M}; -webkit-font-smoothing: none; font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0;
  border: 2px solid; border-radius: 0; padding: 16px 22px; gap: 14px; }
.tview-confirm-ask { font-size: 16px; letter-spacing: 0.04em; color: #efe8d6; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.5); }
.tview-confirm-row { font-size: 12px; letter-spacing: 0.04em; color: #a89f88; text-shadow: 1px 1px 0 #050608; }
.tview-confirm-presses > .tview-mode { min-width: 84px; min-height: 32px; border: 2px solid; border-radius: 0; }
:root[data-plus-theme="stone"] .tview-title, :root[data-plus-theme="stone"] .tview-label { color: #15130f; text-shadow: 1px 1px 0 rgba(255,255,255,0.36); }
:root[data-plus-theme="stone"] .tview-bar > * + * { border-top-color: rgba(5,6,8,0.5); box-shadow: inset 0 1px 0 rgba(255,255,255,0.16); }
`,A0="<svg xmlns='http://www.w3.org/2000/svg' viewBox='-1 -1 12 12' shape-rendering='crispEdges'><path fill='#f3cf86' stroke='#050608' stroke-width='2' paint-order='stroke' fill-rule='evenodd' d='M2 0H8V1H9V4H7V2H3V4H1V1H2ZM0 4H10V10H0ZM4 6V8H6V6Z'/></svg>",La=`url("data:image/svg+xml,${encodeURIComponent(A0)}")`,z0=Object.freeze({magic:"--rar: #6f9ee8; --rar-hi: #b3cdf6; --rar-lo: #34568f; --rar-rgb: 111,158,232; --rar-pips: '\\25c6';",rare:"--rar: #e4c34f; --rar-hi: #f6e398; --rar-lo: #8f7420; --rar-rgb: 228,195,79; --rar-pips: '\\25c6\\25c6';",legendary:"--rar: #e07a2e; --rar-hi: #f7b684; --rar-lo: #8e4518; --rar-rgb: 224,122,46; --rar-pips: '\\25c6\\25c6\\25c6';",aetheric:"--rar: #bfe8ff; --rar-hi: #f0faff; --rar-lo: #4d7fa3; --rar-rgb: 191,232,255; --rar-pips: '\\25c8';",artifact:"--rar: #b57bee; --rar-hi: #dcbcf8; --rar-lo: #683a9c; --rar-rgb: 181,123,238; --rar-pips: '\\2726';",gilded:"--rar: #ffcf4d; --rar-hi: #fff1b8; --rar-lo: #8f6410; --rar-rgb: 255,207,77; --rar-pips: '\\2726\\2726';"}),R0="--rar-pips: '\\25c6\\25c6\\25c6\\2605';",N0=(e="")=>[...Object.entries(z0).map(([t,a])=>`${e}[data-rarity="${t}"] { ${a} }`),`${e}[data-rarity="legendary"][data-exalted] { ${R0} }`].join(`
`),L0=":root { --sigil: #72f0d8; --sigil-mid: #2fb8a2; --sigil-lo: #0f5048; --sigil-rgb: 114,240,216; }",D0="@keyframes sigil-breathe { from { opacity: 0.72; } to { opacity: 1; } }",M0=`/* the block on the card */
.sigilbox { position: relative; margin: 8px 0 10px; padding: 8px 10px 7px; text-align: left;
  border: 2px solid; border-color: #54c9b4 #0e3f39 #0e3f39 #54c9b4;
  background: radial-gradient(ellipse at 12% 0%, rgba(var(--sigil-rgb),0.2), transparent 60%), rgba(6,20,20,0.82);
  box-shadow: 0 0 0 1px #050608, inset 0 0 14px rgba(var(--sigil-rgb),0.16), 0 0 10px rgba(var(--sigil-rgb),0.18); }
.sigilbox[data-stage="dormant"] { border-color: #5e6b69 #252b2a #252b2a #5e6b69; background: rgba(12,15,15,0.82);
  box-shadow: 0 0 0 1px #050608, inset 0 0 10px rgba(0,0,0,0.4); }
.sigil-head { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
.sigil-rune { flex: 0 0 auto; display: inline-flex; width: 20px; height: 20px; color: var(--sigil);
  filter: drop-shadow(0 0 4px rgba(var(--sigil-rgb),0.85)) drop-shadow(1px 1px 0 #050608);
  animation: sigil-breathe 2.4s steps(6, end) infinite alternate; }
.sigil-rune svg { width: 100%; height: 100%; image-rendering: pixelated; }
.sigilbox[data-stage="dormant"] .sigil-rune { color: #7d8b88; filter: drop-shadow(1px 1px 0 #050608); animation: none; }
.sigil-title { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
.sigil-word { font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: #9fded2; }
.sigil-stage { font-size: 15px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--sigil);
  text-shadow: 1px 1px 0 #050608, 0 0 8px rgba(var(--sigil-rgb),0.6); }
.sigilbox[data-stage="dormant"] .sigil-word, .sigilbox[data-stage="dormant"] .sigil-stage { color: #8d9a97; text-shadow: 1px 1px 0 #050608; }
.sigil-effect { margin: 0 0 6px; font-size: 13px; color: #e6fbf6; text-shadow: 1px 1px 0 #050608; }
.sigil-stages { display: flex; gap: 5px; margin: 0 0 6px; }
.sigil-gem { flex: 1 1 0; height: 7px; border: 1px solid; border-color: #3c5a56 #121c1b #121c1b #3c5a56; background: rgba(0,0,0,0.5); }
.sigil-gem.grown { background: linear-gradient(180deg, #7b8f8b, #435451); border-color: #9fb3af #2a3534 #2a3534 #9fb3af; }
.sigil-gem.awake { background: linear-gradient(180deg, #c8fff4 0 1px, var(--sigil) 1px 4px, var(--sigil-mid) 4px);
  border-color: #c8fff4 var(--sigil-lo) var(--sigil-lo) #c8fff4; box-shadow: 0 0 5px rgba(var(--sigil-rgb),0.55); }
.sigil-meter { position: relative; height: 10px; border: 2px solid; border-color: #0b1f1d #4c8d84 #4c8d84 #0b1f1d;
  background: rgba(0,0,0,0.6); box-shadow: 0 0 0 1px #050608; overflow: hidden; }
.sigil-fill { position: absolute; left: 0; top: 0; bottom: 0; display: block;
  background: linear-gradient(180deg, #d2fff6 0 1px, var(--sigil) 1px 4px, var(--sigil-mid) 4px 100%); }
.sigil-fill::after { content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: min(2px, 100%); background: #eafffb; }
.sigilbox[data-stage="dormant"] .sigil-fill { background: linear-gradient(180deg, #a9b5b3 0 1px, #6d7b78 1px); }
.sigilbox[data-stage="dormant"] .sigil-meter { border-color: #0f1312 #5e6b69 #5e6b69 #0f1312; }
.sigilbox[data-stage="dormant"] .sigil-progress, .sigilbox[data-stage="dormant"] .sigil-effect { color: #9aa6a3; }
.sigil-progress { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; margin: 4px 0 0;
  font-size: 11px; letter-spacing: 0.06em; color: #9fded2; font-variant-numeric: tabular-nums; }
.sigil-party { color: #85a8a1; font-style: italic; letter-spacing: 0.02em; }
.sigil-note { margin: 3px 0 0; font-size: 11px; color: #85a8a1; font-style: italic; }
/* AUDIT SET U9: the pack card's own paragraph rule (.pack-shell .card p: centred, 14px, its parchment colour) outranks
   a bare class, so the block's three lines drew as the card's - the set block's own fix (its lines say whose they are) */
.pack-shell .card .sigilbox p.sigil-effect { font-size: 13px; color: #e6fbf6; text-align: left; text-shadow: 1px 1px 0 #050608; }
.pack-shell .card .sigilbox p.sigil-progress { font-size: 11px; color: #9fded2; text-align: left; text-shadow: none; }
.pack-shell .card .sigilbox p.sigil-note { font-size: 11px; color: #85a8a1; text-align: left; text-shadow: none; }
.pack-shell .card .sigilbox[data-stage="dormant"] p.sigil-effect, .pack-shell .card .sigilbox[data-stage="dormant"] p.sigil-progress { color: #9aa6a3; }
.inv-info .sigilbox { margin: 8px 0 10px; }
/* CARD-FIT: THE CARD'S DRESS (ui/sigilCard.js, the default) - two rows: the rune, the stage and the numbers toward the
   next beside them; the five stages as one bar, the stage it grows into filled as far as it has drunk (--fill). */
.sigilbox.compact { margin: 6px 0 8px; padding: 6px 9px 7px; }
.sigilbox.compact .sigil-head { flex-wrap: wrap; row-gap: 2px; margin-bottom: 5px; }
.sigilbox.compact .sigil-rune { width: 16px; height: 16px; }
.sigilbox.compact .sigil-stage { font-size: 13px; }
.sigilbox.compact .sigil-head .sigil-progress { display: block; margin: 0 0 0 auto; font-size: 11px; color: #9fded2;
  white-space: nowrap; text-shadow: 1px 1px 0 #050608; }
.sigilbox.compact .sigil-stages { margin: 0; gap: 4px; }
.sigilbox.compact .sigil-gem { height: 8px; }
.sigilbox.compact .sigil-gem.next { background: linear-gradient(90deg, var(--sigil-mid) 0 var(--fill, 0%), rgba(0,0,0,0.5) var(--fill, 0%)); }
.sigilbox.compact[data-stage="dormant"] .sigil-gem.next { background: linear-gradient(90deg, #6d7b78 0 var(--fill, 0%), rgba(0,0,0,0.5) var(--fill, 0%)); }
.pack-shell .card .sigilbox.compact p.sigil-effect, .sigilbox.compact p.sigil-effect { margin: 5px 0 0; font-size: 12px; }
.pack-shell .card .sigilbox.compact p.sigil-note, .sigilbox.compact p.sigil-note { margin: 3px 0 0; }`,H0=`.setbox { position: relative; margin: 8px 0 10px; padding: 8px 10px 8px; text-align: left; border: 2px solid;
  border-color: var(--set-hi) var(--set-lo) var(--set-lo) var(--set-hi);
  background: radial-gradient(ellipse at 12% 0%, rgba(var(--set-rgb),0.22), transparent 62%), rgba(16,12,10,0.86);
  box-shadow: 0 0 0 1px #050608, inset 0 0 14px rgba(var(--set-rgb),0.14), 0 0 10px rgba(var(--set-rgb),0.14); }
.setbox[data-stage="asleep"] { filter: saturate(0.4); }
.set-head { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.set-name { font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--set);
  text-shadow: 1px 1px 0 #050608, 0 0 8px rgba(var(--set-rgb),0.5); }
.set-count { font-size: 12px; color: var(--set-hi); font-variant-numeric: tabular-nums; text-shadow: 1px 1px 0 #050608; }
/* the card's own paragraph rule (.pack-shell .card p: centred, 14px) outranks a bare class - the block's lines say
   whose they are */
.pack-shell .card .setbox p.set-role, .inv-info .setbox p.set-role, .setbox p.set-role { margin: 1px 0 6px; font-size: 11px;
  color: #b9ab93; font-style: italic; text-align: left; text-shadow: 1px 1px 0 #050608; }
.set-places { display: flex; gap: 4px; margin: 0 0 6px; }
.set-place { flex: 1 1 0; height: 8px; border: 1px solid; border-color: #4a4036 #17120e #17120e #4a4036; background: rgba(0,0,0,0.5); }
.set-place.on { background: linear-gradient(180deg, var(--set-hi) 0 1px, var(--set) 1px 5px, var(--set-lo) 5px);
  border-color: var(--set-hi) var(--set-lo) var(--set-lo) var(--set-hi); box-shadow: 0 0 5px rgba(var(--set-rgb),0.5); }
.pack-shell .card .setbox p.set-stage, .inv-info .setbox p.set-stage, .setbox p.set-stage { margin: 0 0 4px; font-size: 12px;
  color: #e8dcc6; text-align: left; text-shadow: 1px 1px 0 #050608; }
.set-tier { display: flex; gap: 8px; align-items: flex-start; margin: 5px 0 0; opacity: 0.55; }
.set-tier.awake { opacity: 1; }
.set-at { flex: 0 0 auto; width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700; color: #050608; background: #8a7d69; border: 1px solid;
  border-color: #b9ab93 #3a3129 #3a3129 #b9ab93; }
.set-tier.awake .set-at { background: var(--set); border-color: var(--set-hi) var(--set-lo) var(--set-lo) var(--set-hi);
  box-shadow: 0 0 6px rgba(var(--set-rgb),0.6); }
.set-tier-body { display: flex; flex-direction: column; min-width: 0; }
.set-tier-name { font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--set-hi); }
.set-tier:not(.awake) .set-tier-name { color: #b9ab93; }
.set-tier-text { font-size: 12px; line-height: 1.35; color: #e6dccb; }
.inv-info .setbox { margin: 8px 0 10px; }
/* CARD-FIT: THE CARD'S DRESS (ui/setCard.js, the default) - the stage rides the head, the places are a thin row, and a
   tier is ONE row: its number, its name and its brief running on as the width allows. The Info box wears the whole. */
.setbox.compact { margin: 6px 0 8px; padding: 6px 9px 6px; }
.setbox.compact .set-name { font-size: 13px; }
.setbox.compact .set-places { margin: 4px 0 4px; gap: 3px; }
.setbox.compact .set-place { height: 6px; }
.pack-shell .card .setbox.compact p.set-stage, .setbox.compact p.set-stage { margin: 0 0 2px; font-size: 11px; color: #d6cab3; }
.setbox.compact .set-tier { margin: 3px 0 0; gap: 6px; align-items: baseline; }
.setbox.compact .set-at { width: 15px; height: 15px; font-size: 11px; align-self: flex-start; }
.setbox.compact .set-tier-body { flex: 1 1 auto; flex-direction: row; flex-wrap: wrap; align-items: baseline; column-gap: 6px; }
.setbox.compact .set-tier-name { font-size: 11px; }
.setbox.compact .set-tier-text { flex: 1 0 100%; font-size: 12px; line-height: 1.3; }
/* a power's recovery, on its name's line, in the dashed frame the HUD's recovering chip wears */
.setbox.compact .set-tier-every { flex: 0 0 auto; margin-left: auto; padding: 0 3px; font-size: 11px;
  line-height: 13px; color: var(--set-hi); border: 1px dashed var(--set-lo); font-variant-numeric: tabular-nums; }`,C0=`.techbox { --tech: #59c7ff; --tech-hi: #c4ecff; --tech-mid: #2f8fc8; --tech-lo: #12405e; --tech-rgb: 89,199,255;
  position: relative; margin: 8px 0 10px; padding: 8px 10px 7px; text-align: left; border: 2px solid;
  border-color: #4fb0e6 var(--tech-lo) var(--tech-lo) #4fb0e6;
  background: radial-gradient(ellipse at 12% 0%, rgba(var(--tech-rgb),0.2), transparent 60%), rgba(6,14,22,0.84);
  box-shadow: 0 0 0 1px #050608, inset 0 0 14px rgba(var(--tech-rgb),0.14), 0 0 10px rgba(var(--tech-rgb),0.16); }
.techbox[data-state="asleep"] { filter: saturate(0.35); }
/* the Info box's head: the glyph beside two rows - the word and the roll, then the name the whole width */
.tech-head { display: grid; grid-template-columns: auto 1fr auto; grid-template-areas: "glyph word roll" "glyph name name";
  align-items: center; column-gap: 8px; row-gap: 1px; margin-bottom: 5px; }
.tech-glyph { grid-area: glyph; display: inline-flex; width: 20px; height: 20px; color: var(--tech);
  filter: drop-shadow(0 0 4px rgba(var(--tech-rgb),0.8)) drop-shadow(1px 1px 0 #050608); }
.tech-glyph svg { width: 100%; height: 100%; }
.tech-word { grid-area: word; font-size: 11px; line-height: 12px; letter-spacing: 0.3em; text-transform: uppercase; color: #9fd3f0; }
.tech-name { grid-area: name; min-width: 0; font-size: 15px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--tech);
  text-shadow: 1px 1px 0 #050608, 0 0 8px rgba(var(--tech-rgb),0.55); }
.tech-roll { grid-area: roll; white-space: nowrap; font-size: 11px; color: var(--tech-hi); font-variant-numeric: tabular-nums;
  text-shadow: 1px 1px 0 #050608; }
.tech-band { color: #7fa9c2; }
.tech-effect { margin: 0 0 6px; font-size: 13px; line-height: 1.35; color: #e6f6ff; text-shadow: 1px 1px 0 #050608; }
/* the foot: the key as a keycap and how it is pressed, then the price - the fatigue and the recovery, in the dashed
   frame the HUD's recovering chip wears (the set block's .set-tier-every) - one group at the right that wraps whole */
.tech-foot { display: flex; align-items: center; flex-wrap: wrap; gap: 4px 8px; font-size: 11px; color: #9fc4da;
  font-variant-numeric: tabular-nums; }
.tech-key { padding: 0 4px; line-height: 14px; letter-spacing: 0.04em; color: #050608; background: var(--tech); border: 1px solid;
  border-color: var(--tech-hi) var(--tech-lo) var(--tech-lo) var(--tech-hi); box-shadow: 0 0 0 1px #050608; }
.tech-key.unbound { color: #9fc4da; background: rgba(0,0,0,0.5); border-color: #3c5566 #121c22 #121c22 #3c5566; box-shadow: none; }
.tech-price { margin-left: auto; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; }
.tech-cost { color: #cfe6f3; }
.tech-every { padding: 0 3px; line-height: 13px; color: var(--tech-hi); border: 1px dashed var(--tech-mid); }
.tech-power, .tech-press { margin: 5px 0 0; font-size: 12px; line-height: 1.35; color: #cfe6f3; }
.tech-note { margin: 4px 0 0; font-size: 11px; color: #85a3b5; font-style: italic; }
/* CARD-FIT: THE CARD'S DRESS (ui/techniqueCard.js, the default) - one row at the head (the glyph, the name, the roll at
   the right; a name too long for it puts the roll under it, never the name), the glyph on its own 16px grid */
.techbox.compact { margin: 6px 0 8px; padding: 5px 8px 6px; }
.techbox.compact .tech-head { display: flex; align-items: center; flex-wrap: wrap; column-gap: 7px; row-gap: 1px; margin-bottom: 3px; }
.techbox.compact .tech-glyph { width: 16px; height: 16px; }
.techbox.compact .tech-name { font-size: 13px; letter-spacing: 0.04em; }
.techbox.compact .tech-roll { margin-left: auto; }
/* AUDIT SET U9's law: the pack card's own paragraph rule (.pack-shell .card p: centred, 14px, its parchment colour)
   outranks a bare class - the block's lines say whose they are (the pack's cards draw the card's dress alone; the Info
   box stands outside the pack) */
.pack-shell .card .techbox.compact p.tech-effect, .techbox.compact p.tech-effect { margin: 0 0 4px; font-size: 12px; color: #e6f6ff;
  text-align: left; text-shadow: 1px 1px 0 #050608; }
.pack-shell .card .techbox p.tech-note { font-size: 11px; color: #85a3b5; text-align: left; text-shadow: none; }
/* THE SHRINK STEPS' SHARE (CARD-FIT, AUDIT SET U13): a card that will not fit sheds what a glance can spare - how the key
   is pressed and the duel's note first, then the whole foot (the Info box carries every word) */
.inv-tip.tip-compact .techbox .tech-how, .pack-shell .packtip.packdetail .card.card-compact .techbox .tech-how,
.inv-tip.tip-compact .techbox .tech-note, .pack-shell .packtip.packdetail .card.card-compact .techbox .tech-note { display: none; }
.inv-tip.tip-tight .techbox .tech-foot, .pack-shell .packtip.packdetail .card.card-tight .techbox .tech-foot { display: none; }
.inv-tip.tip-tight .techbox.compact p.tech-effect, .pack-shell .packtip.packdetail .card.card-tight .techbox.compact p.tech-effect { margin: 0; }`,j0=`/* ── SET7: THE SIGIL BROKER'S WINDOW (ui/brokerWindow.js) - the Info box's kind: a stone window over the world, the
   day's six offers in a list, the one pressed shown whole beside it (under it on a phone). The kit dresses the window,
   the card, the rows, the header and the presses (ui/enhancedFrame.js FRAME_ROLES); this is the layout. ── */
.broker-shell { position: fixed; inset: 0; z-index: 39; display: flex; align-items: center; justify-content: center;
  padding: 16px; background: rgba(0,0,0,0.42); font-family: ${M}; -webkit-font-smoothing: none; }
.broker-win { width: min(980px, 96vw); max-height: 92vh; display: flex; flex-direction: column; overflow: hidden;
  border: 2px solid; background: rgba(14,12,11,0.96); }
.broker-head { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 14px; padding: 12px 16px; border-bottom: 2px solid rgba(5,6,8,0.6); }
.broker-title { flex: 1 1 280px; min-width: 0; }
.broker-title h2 { margin: 0; font-size: 20px; letter-spacing: 0.12em; text-transform: uppercase; color: #efe0b8; text-shadow: 2px 2px 0 #050608; }
.broker-sub { margin: 2px 0 0; font-size: 12px; color: #b9ab93; }
.broker-note { margin: 4px 0 0; font-size: 12px; color: #e59a8e; }
.broker-note.ok { color: #f3cf86; }
.broker-purse { flex: 0 0 auto; white-space: nowrap; padding: 4px 10px; font-size: 13px; color: #ffd6d0; letter-spacing: 0.06em; border: 1px solid #7a2a24;
  background: rgba(90,20,16,0.45); box-shadow: 0 0 8px rgba(224,64,48,0.35); text-shadow: 1px 1px 0 #050608; }
.broker-body { display: flex; gap: 14px; padding: 12px 16px 16px; min-height: 0; overflow: auto; }
.broker-offers { flex: 1 1 55%; list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.broker-offer { display: grid; grid-template-columns: 48px minmax(0, 1fr) 124px 148px; align-items: center; gap: 10px;   /* SS2: the price's column one width in every row - WB12a: "12 Deadlands Embers" is 120px, "4" 115 - so the prices stand in a line */
  padding: 6px 10px; cursor: pointer; border: 1px solid transparent; }
.broker-offer.on { background: linear-gradient(90deg, rgba(243,207,134,0.12), transparent 85%); }
.broker-frame { position: relative; width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center;
  border: 2px solid; border-color: var(--rar-hi, #6d6252) var(--rar-lo, #231e18) var(--rar-lo, #231e18) var(--rar-hi, #6d6252);
  background: radial-gradient(ellipse at 50% 115%, rgba(var(--rar-rgb, 120,110,90),0.3), transparent 68%), rgba(0,0,0,0.45); }
.broker-frame .tile { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; font-size: 13px; color: #e6dccb; }
.broker-frame .tile img { max-width: 36px; max-height: 36px; image-rendering: pixelated; }
.broker-frame[data-sigil]::after { content: ''; position: absolute; right: 2px; top: 2px; width: 10px; height: 10px; pointer-events: none;
  background: var(--set-rune) center / contain no-repeat; }
.broker-offer-body { display: flex; flex-direction: column; min-width: 0; }
.broker-name { font-size: 14px; color: var(--rar, #e8dcc6); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-shadow: 1px 1px 0 #050608; }
.broker-set { font-size: 11px; color: #b9ab93; letter-spacing: 0.04em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.broker-price { font-size: 12px; color: #ffcfc8; white-space: nowrap; font-variant-numeric: tabular-nums; }
.broker-buy { width: 100%; min-width: 0; white-space: nowrap; }   /* one column's width in every row: the prices stand in a line */
.broker-close { flex: 0 0 auto; }
.broker-offer.no-bought .broker-name, .broker-offer.no-bought .broker-price { opacity: 0.5; }
.broker-offer.no-stones .broker-price { color: #9a8e7c; }
.broker-card { flex: 1 1 45%; min-width: 0; margin: 0; padding: 12px 14px; border: 2px solid; align-self: flex-start; }
.broker-card h3 { margin: 0 0 6px; font-family: inherit; font-size: 16px; color: var(--rar, #efe8d6); }   /* AUDIT SET U14: the window's pixel face, as the pack's own card (.pack-shell .card h3) - never the display serif */
.broker-card ul.rarity { list-style: none; margin: 0 0 8px; padding: 0; font-size: 13px; line-height: 1.45; color: #e6dccb; }
.broker-card ul.rarity li:first-child { text-transform: uppercase; letter-spacing: 0.16em; font-size: 11px; color: #b9ab93; }
.broker-card .setbox p.set-role { margin: 1px 0 6px; font-size: 11px; color: #b9ab93; font-style: italic; text-align: left; }
.broker-card .setbox p.set-stage { margin: 0 0 4px; font-size: 12px; color: #e8dcc6; text-align: left; }
.broker-card .boundline { margin: 8px 0 0; font-size: 12px; letter-spacing: 0.04em; color: #f3cf86; text-shadow: 1px 1px 0 #050608; }   /* SS4: the pack card's own line, on both skins' Broker sheets */
/* WB9g: THE INSIGNIA - its heading under the day's stock, its rows in the wares' own grid, the title's word in its fire,
   the aura's ring turning, and a piece's card with its sign large */
.broker-insignia-head { display: flex; flex-direction: column; gap: 2px; margin-top: 8px; padding: 12px 10px 4px; border-top: 1px solid rgba(243,207,134,0.25); }
.broker-insignia-title { font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; color: #ffb45c; text-shadow: 1px 1px 0 #050608, 0 0 8px rgba(255,107,20,0.45); }
.broker-insig .broker-frame { border-color: #ff8a3d #5a1208 #5a1208 #ff8a3d;
  background: radial-gradient(ellipse at 50% 62%, rgba(255,107,20,0.38), transparent 70%), rgba(20,4,2,0.82); }
.broker-insig.worn .broker-price { color: #ffd152; }
.broker-insig.owned .broker-price { color: #f3cf86; }
.broker-shell .insignia-sign { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; overflow: hidden; }
.broker-shell .insignia-word { font-size: 8px; letter-spacing: 0.01em; white-space: nowrap; }
.broker-shell .insignia-word.mono { font-size: 26px; letter-spacing: 0; line-height: 1; }   /* AUDIT WB9: the row's sign, the word's first letter */
.broker-shell .aura-ring { display: block; width: 30px; height: 30px; border-radius: 50%;
  background: conic-gradient(from 0deg, #ff6b14, #9e0d12, #ffd152, #ff6b14, #9e0d12, #ffd152, #ff6b14);
  -webkit-mask: radial-gradient(circle, transparent 48%, #000 54%, #000 70%, transparent 76%);
  mask: radial-gradient(circle, transparent 48%, #000 54%, #000 70%, transparent 76%);
  filter: drop-shadow(0 0 4px #ff6b14); animation: aura-turn 3.2s linear infinite; }
@keyframes aura-turn { to { transform: rotate(360deg); } }
.broker-shell .insignia-sign.hero { width: 100%; height: 120px; margin: 4px 0 10px; }
.broker-shell .insignia-sign.hero .insignia-word { font-size: 28px; letter-spacing: 0.06em; }
.broker-shell .insignia-sign.hero .aura-ring { width: 110px; height: 110px; filter: drop-shadow(0 0 12px #ff6b14) drop-shadow(0 0 3px #ffd152); }
.broker-insignia-card .insignia-what { margin: 0 0 8px; font-size: 13px; line-height: 1.45; color: #e6dccb; }
.broker-insignia-card .insignia-kept { margin: 0; font-size: 12px; line-height: 1.45; color: #b9ab93; }
@media (prefers-reduced-motion: reduce) { .broker-shell .aura-ring { animation: none; } }
@media (max-width: 720px) {
  .broker-shell { padding: 8px; }
  .broker-head { padding: 10px 12px; }
  .broker-title { flex-basis: 100%; }
  .broker-title h2 { font-size: 17px; letter-spacing: 0.08em; }
  .broker-purse { margin-right: auto; font-size: 12px; letter-spacing: 0.02em; }
  .broker-body { flex-direction: column; padding: 10px 12px 12px; }
  .broker-offer { grid-template-columns: 44px minmax(0, 1fr) 112px; padding: 6px 8px; }
  .broker-offer .broker-price { grid-column: 2; grid-row: 2; }
  .broker-offer .broker-buy { grid-column: 3; grid-row: 1 / span 2; padding-left: 6px; padding-right: 6px; letter-spacing: 0.03em; }
}`,U0=`/* ── LOOT9/LOOT10: THE REFORGE'S WINDOW (ui/reforgeWindow.js) ── */
.reforge-tabs { display: flex; flex-wrap: wrap; gap: 6px; padding: 8px 16px 0; }
.reforge-tabs[hidden] { display: none; }
.broker-offer.codex-row, .broker-offer.codex-set { grid-template-columns: minmax(0, 1fr); }
.broker-offer.codex-set { cursor: default; }
.broker-offer.codex-row .broker-set, .broker-offer.codex-set .broker-set { white-space: normal; }   /* a hint and a set's pieces read whole, a phone's too */
.broker-offer.codex-row:not(.found) .broker-name { color: #8d8270; }
.broker-offer.codex-gilded { grid-template-columns: minmax(0, 1fr); }   /* GILDED1: the Gilded rung's rows, at the page's head - a Legendary's row's shape */
.broker-offer.codex-gilded .broker-set { white-space: normal; }
.broker-offer.codex-gilded:not(.found) .broker-name { color: #8d8270; }
.broker-offer.codex-gilded.found .broker-name { color: #ffcf4d; }
.broker-offer.scry-row > .broker-offer-body { grid-column: 1 / span 2; }   /* AUDIT LOOT II B2: a family's row has no picture - its words take the frame's column too (a phone's as well), its price and press where his stand */
.broker-offer.scry-row .broker-set { white-space: normal; }   /* the haunts read whole */
/* SCRY-FIT (2026-10-12, a player: "the text is all scrunched - so you cannot purchase any of the actual scry readings"):
   the price of a reading - "3 Welkynd Shards and 500 gold" - is twice the Broker's 124px price column, and it ran on
   over the press beside it: the Scry word (or its "Need 378 more gold") drawn on top of the price, neither readable.
   A row of the Reforge's sizes its price and its press to their words, and the row's own words give way. A family's row
   has no picture, so its words take the first column alone. */
.reforge-shell .broker-offer:not(.codex-row):not(.codex-set):not(.codex-gilded):not(.scry-row) { grid-template-columns: 48px minmax(0, 1fr) max-content minmax(112px, max-content); }
.reforge-shell .broker-offer.scry-row { grid-template-columns: minmax(0, 1fr) max-content minmax(112px, max-content); }
.reforge-shell .broker-offer.scry-row > .broker-offer-body { grid-column: 1; }
.reforge-shell .broker-offer .broker-price { text-align: right; }
@media (max-width: 720px) {
  .reforge-shell .broker-offer:not(.codex-row):not(.codex-set):not(.codex-gilded):not(.scry-row) { grid-template-columns: 44px minmax(0, 1fr) minmax(112px, max-content); }
  .reforge-shell .broker-offer.scry-row { grid-template-columns: minmax(0, 1fr) minmax(112px, max-content); }
  .reforge-shell .broker-offer.scry-row .broker-price { grid-column: 1; grid-row: 2; text-align: left; }
  .reforge-shell .broker-offer.scry-row .broker-buy { grid-column: 2; grid-row: 1 / span 2; }
}
.broker-offer > .reforge-keep { grid-column: 4; }
.reforge-card .reforge-line, .imprint-card .imprint-choice { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 4px 8px; margin: 2px 0; }
.reforge-card .reforge-press, .imprint-card .imprint-press { width: auto; flex: 0 0 auto; }
.reforge-card .hone-press { width: auto; flex: 0 0 auto; }   /* LOOT17: the hone's press, beside the line's Reforge */
.reforge-card .reforge-detail { order: 1; flex: 1 0 100%; font-size: 0.85em; opacity: 0.8; }   /* AUDIT TECH1: a technique's "what a press does", the row under its line */
@media (max-width: 720px) {
  .reforge-tabs { padding: 6px 12px 0; }
  .broker-offer > .reforge-keep { grid-column: 3; grid-row: 3; }   /* the Broker's phone rule spans every press over two rows: Keep sat on Break it */
}`,P0=`/* ── BOUNTY1: THE BOUNTY BOARD ── */
.bounty-shell { position: fixed; inset: 0; z-index: 39; display: flex; align-items: center; justify-content: center;
  padding: 16px; background: rgba(0,0,0,0.46); font-family: ${M}; -webkit-font-smoothing: none; }
.bounty-win { width: min(960px, 96vw); max-height: 92vh; display: flex; flex-direction: column; overflow: hidden;
  border: 2px solid; background: rgba(14,12,11,0.96); }
.bounty-win.bounty-noticewin { width: min(560px, 94vw); }
/* AUDIT FB1010 A3: the board's window is one height whatever it holds - the note line, a list grown by a take, a long
   story - so a press at Take's place stays on Take; the list and the notice's page scroll inside it */
.bounty-win:not(.bounty-noticewin) { height: min(600px, 92vh); }
.bounty-win:not(.bounty-noticewin) .bounty-body { flex: 1 1 auto; overflow: hidden; }
.bounty-win:not(.bounty-noticewin) .bounty-side { min-height: 0; overflow: auto; }
.bounty-head { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 14px; padding: 12px 16px; border-bottom: 2px solid rgba(5,6,8,0.6); }
.bounty-title { flex: 1 1 280px; min-width: 0; }
.bounty-title h2 { margin: 0; font-size: 20px; letter-spacing: 0.12em; text-transform: uppercase; color: #efe0b8; text-shadow: 2px 2px 0 #050608; }
.bounty-sub { margin: 2px 0 0; font-size: 12px; color: #b9ab93; }
.bounty-note { margin: 4px 0 0; font-size: 12px; color: #e59a8e; }
.bounty-note:empty { display: none; }
.bounty-note.ok { color: #9fe8b4; }
.bounty-close { flex: 0 0 auto; }
.bounty-body { display: flex; gap: 14px; padding: 12px 16px 16px; min-height: 0; overflow: auto; }
.bounty-side { flex: 1 1 50%; min-width: 0; display: flex; flex-direction: column; gap: 6px; }
.bounty-posts, .bounty-held { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }
.bounty-post { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 10px; padding: 8px 10px;
  cursor: pointer; border: 1px solid transparent; }
.bounty-post.on { background: linear-gradient(90deg, rgba(243,207,134,0.12), transparent 85%); }
.bounty-post-body { display: flex; flex-direction: column; min-width: 0; }
.bounty-post-title { font-size: 14px; color: #efe8d6; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-shadow: 1px 1px 0 #050608; }
.bounty-post-meta { font-size: 11px; color: #b9ab93; letter-spacing: 0.03em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.bounty-state { font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: #b9ab93; white-space: nowrap; }
.bounty-state.st-open { color: #f3cf86; }
.bounty-state.st-held { color: #9fe8b4; }
.bounty-post.st-paid .bounty-post-title, .bounty-post.st-paid .bounty-state { opacity: 0.55; }
.bounty-empty { padding: 10px; font-size: 13px; color: #b9ab93; font-style: italic; }
.bounty-heldhead { margin: 10px 0 2px; font-family: inherit; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #b9ab93; }
.bounty-heldrow { display: flex; flex-direction: column; padding: 4px 10px; border-left: 2px solid #c08a3e; background: rgba(243,207,134,0.05); }
.bounty-card { flex: 1 1 50%; min-width: 0; min-height: 0; margin: 0; padding: 12px 14px; border: 2px solid; align-self: stretch;
  display: flex; flex-direction: column; gap: 8px; }
.bounty-cardpage { flex: 1 1 auto; min-height: 0; overflow: auto; }
.bounty-card h3 { margin: 0 0 8px; font-family: inherit; font-size: 16px; color: #efe8d6; }
.bounty-tier { margin: -4px 0 8px; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #c9a86a; }
.bounty-story { margin: 0 0 6px; font-size: 13px; line-height: 1.5; color: #e6dccb; }
.bounty-poster { margin: 0 0 8px; font-size: 12px; color: #b9ab93; font-style: italic; text-align: right; }
.bounty-mapline { margin: 0 0 10px; font-size: 12px; color: #f3cf86; text-shadow: 1px 1px 0 #050608; }
.bounty-reward { display: flex; flex-direction: column; gap: 2px; margin: 0 0 8px; padding: 6px 8px; background: rgba(0,0,0,0.3); }
.bounty-reward-head { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #b9ab93; }
.bounty-gold { font-size: 14px; color: #f3cf86; text-shadow: 1px 1px 0 #050608; }
.bounty-itemhint { font-size: 12px; color: #d8ccb6; }
.bounty-progress, .bounty-mates, .bounty-why { margin: 0 0 8px; font-size: 12px; color: #9fe8b4; }
.bounty-why { color: #b9ab93; }
.bounty-acts { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; }
.bounty-acts .bounty-drop { margin-right: auto; }
.bounty-noticebody { display: flex; flex-direction: column; gap: 10px; padding: 14px 16px 16px; overflow: auto; }
.bounty-noticebody .bounty-story { font-size: 14px; }
.bounty-rewardbox { display: flex; flex-direction: column; gap: 3px; align-self: stretch; }
.bounty-rewarditem { font-size: 15px; text-shadow: 1px 1px 0 #050608; }
@media (max-width: 720px) {
  .bounty-shell { padding: 8px; }
  .bounty-body { flex-direction: column; padding: 10px 12px 12px; }
  .bounty-win:not(.bounty-noticewin) .bounty-side { flex: 0 1 auto; max-height: 45%; }
  .bounty-card { flex: 1 1 auto; }
  .bounty-title h2 { font-size: 17px; letter-spacing: 0.08em; }
}
@media (pointer: coarse) { .bounty-post { min-height: 44px; } }`,q0=`/* ── NOTICE1: THE NOTICE BOARD ── */
.notice-shell { position: fixed; inset: 0; z-index: 39; display: flex; align-items: center; justify-content: center;
  padding: 16px; background: rgba(0,0,0,0.46); font-family: ${M}; -webkit-font-smoothing: none; }
.notice-win { width: min(1040px, 96vw); max-height: 92vh; display: flex; flex-direction: column; overflow: hidden;
  border: 2px solid; background: rgba(14,12,11,0.96); }
.notice-head { flex: none; display: flex; align-items: flex-start; gap: 10px 14px; padding: 12px 16px 8px; }
.notice-title { flex: 1 1 auto; min-width: 0; }
.notice-title h2 { margin: 0; font-size: 20px; letter-spacing: 0.12em; text-transform: uppercase; color: #efe0b8; text-shadow: 2px 2px 0 #050608;
  overflow-wrap: anywhere; }
.notice-sub { margin: 3px 0 0; font-size: 13px; color: #c9bba1; }
.notice-word { margin: 4px 0 0; font-size: 13px; color: #f0a597; }
.notice-word:empty { display: none; }
.notice-word.ok { color: #9fe8b4; }
.notice-headacts { flex: none; display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; }
/* the strip scrolls sideways, so it is no longer free to shrink: a tall tab's cork squeezed it to a sliver */
.notice-tabs { flex: none; display: flex; gap: 2px; padding: 0 12px; border-bottom: 2px solid rgba(5,6,8,0.6); overflow-x: auto; overflow-y: hidden;
  scrollbar-width: none; }
.notice-tab { flex: none; padding: 8px 12px 6px; font-family: inherit; font-size: 14px; letter-spacing: 0.12em; text-transform: uppercase;
  white-space: nowrap; color: #b9ab93; background: none; border: 0; }
.notice-tab.on { color: #f3cf86; box-shadow: inset 0 -2px 0 #c08a3e; }
/* AUDIT 657 B1: the chosen tab's line and the focus ring inside the tab - the strip scrolls sideways now, so it clips
   whatever stands past it (the line was a border pulled 2px below the strip, and drew nothing) */
.notice-tab:focus-visible { outline: 2px solid #f3cf86; outline-offset: -2px; }
@media (forced-colors: active) { .notice-tab.on { outline: 2px solid Highlight; outline-offset: -2px; } }   /* a shadow is painted over there */
.notice-tabcount { margin-left: 6px; padding: 0 5px; font-size: 11px; letter-spacing: 0.04em; color: #fff4dc; background: #9b2d1f; }
/* TOAST-SPLIT: the cork and the italic line are the board's own classes - .notice-body and .notice-hint are the HUD
   toasts' (ui/enhancedNotice.js), and a rule on either dressed both. */
.notice-cork { padding: 14px 16px 16px; min-height: 0; overflow: auto;
  background: radial-gradient(circle at 20% 30%, rgba(0,0,0,0.18) 0 1px, transparent 2px) 0 0 / 7px 7px,
    radial-gradient(circle at 70% 60%, rgba(255,220,160,0.05) 0 1px, transparent 2px) 0 0 / 11px 11px,
    linear-gradient(160deg, #5b3f26, #47301c 60%, #3b2816); }
.notice-grid { list-style: none; margin: 0 0 16px; padding: 4px; display: grid; gap: 14px; align-items: start;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }
.notice-grid:last-child { margin-bottom: 0; }
.notice-card { position: relative; display: flex; flex-direction: column; gap: 6px; min-height: 110px; padding: 18px 14px 28px;
  cursor: pointer; color: #2a1f12;
  background: linear-gradient(175deg, #efe2c2, #e2d1aa 70%, #d6c294); box-shadow: 3px 4px 0 rgba(5,6,8,0.45), inset 0 0 18px rgba(120,84,40,0.25); }
.notice-card:hover, .notice-card:focus-visible { outline: 2px solid #f3cf86; outline-offset: 1px; }
.notice-card h4 { margin: 0; font-family: inherit; font-size: 15px; line-height: 1.3; color: #1d150b; overflow-wrap: anywhere; }
.notice-snippet { margin: 0; font-size: 13px; line-height: 1.5; white-space: pre-wrap; overflow: hidden; overflow-wrap: anywhere; display: -webkit-box;
  -webkit-line-clamp: 5; -webkit-box-orient: vertical; }
.notice-foot { margin-top: auto; display: flex; justify-content: space-between; align-items: baseline; gap: 6px; padding-right: 22px;
  font-size: 12px; color: #5a4630; }
.notice-new { padding: 0 5px; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #fff4dc; background: #9b2d1f; }
.notice-pin { position: absolute; top: 5px; left: 50%; width: 10px; height: 10px; margin-left: -5px; border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #f5d9a0, #9a6a2a 60%, #3c2610); box-shadow: 1px 2px 0 rgba(0,0,0,0.5); }
.notice-seal { position: absolute; right: 10px; bottom: 7px; width: 18px; height: 18px; border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, rgba(255,255,255,0.35), transparent 45%), var(--seal, #b89b6a);
  box-shadow: 0 0 0 2px rgba(0,0,0,0.18); }
.notice-card.seal-town, .notice-read.seal-town { --seal: #cbb892; }
.notice-card.seal-server, .notice-read.seal-server { --seal: #a3261a; }
.notice-card.seal-player, .notice-read.seal-player { --seal: #c98a2b; }
.notice-card.seal-guild, .notice-read.seal-guild { --seal: #4f6f8f; }
.notice-card.seal-bounty, .notice-read.seal-bounty { --seal: #161311; }
.notice-card.hidden { opacity: 0.6; }
/* BOARD-UI: whatever stands on the cork itself stands on a dark panel - the cork's grain under bone ink read 3:1 */
.notice-empty { grid-column: 1 / -1; margin: 0; padding: 10px 12px; font-size: 15px; line-height: 1.5; color: #e6dccb; font-style: italic;
  background: rgba(12,10,8,0.72); border-left: 2px solid rgba(192,138,62,0.6); }
.notice-panel { margin: 0 0 12px; padding: 12px 14px; font-size: 15px; line-height: 1.55; color: #e9e1cf;
  background: rgba(12,10,8,0.8); border: 1px solid rgba(192,138,62,0.32); }
.notice-panel > h3, .notice-panel > summary { margin: 0 0 8px; font-family: inherit; font-size: 14px; font-weight: normal; letter-spacing: 0.14em;
  text-transform: uppercase; color: #f3cf86; }
/* AUDIT PLAIN-UI U3: a fold's line a finger's target (44px with its padding, drawn where it stood) and a ring of its own */
.notice-panel > summary { margin: -11px 0; padding: 11px 0; cursor: pointer; }
.notice-panel[open] > summary { margin-bottom: -3px; }
.notice-panel > summary:focus-visible { outline: 2px dashed #f3cf86; outline-offset: 2px; }
.notice-panel p { margin: 0 0 6px; }
.notice-panel p:last-child { margin-bottom: 0; }
.notice-read { position: relative; max-width: 640px; margin: 0 auto; padding: 22px 20px 18px; color: #2a1f12;
  background: linear-gradient(175deg, #efe2c2, #e2d1aa 70%, #d6c294); box-shadow: 4px 5px 0 rgba(5,6,8,0.45), inset 0 0 22px rgba(120,84,40,0.25); }
.notice-read h3 { margin: 0 0 8px; font-family: inherit; font-size: 18px; color: #1d150b; overflow-wrap: anywhere; }
.notice-guild { margin: 0 0 8px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #34506c; }
.notice-text { margin: 0 0 12px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; overflow-wrap: anywhere; }
.notice-meta { margin: 0 0 12px; font-size: 12px; color: #5a4630; }
.notice-mod { margin: 0 0 10px; font-size: 12px; color: #8a2c1f; }
.notice-acts { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; }
.notice-form { max-width: 640px; margin: 0 auto; padding: 18px 18px 16px; display: flex; flex-direction: column; gap: 12px; color: #2a1f12;
  background: linear-gradient(175deg, #efe2c2, #e2d1aa 70%, #d6c294); box-shadow: 4px 5px 0 rgba(5,6,8,0.45); }
.notice-field { display: flex; flex-direction: column; gap: 4px; }
.notice-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #5a4630; }
.notice-input, .notice-textarea, .notice-select { font: inherit; font-size: 14px; color: #1d150b; background: rgba(255,250,236,0.7);
  border: 1px solid #9c8358; padding: 6px 8px; min-height: 32px; box-sizing: border-box; }
.notice-textarea { resize: vertical; min-height: 120px; line-height: 1.45; }
.notice-days { width: 6em; }
.notice-count { align-self: flex-end; font-size: 12px; color: #5a4630; }
.notice-tip { margin: 0; font-size: 12px; color: #5a4630; font-style: italic; }
/* GUILD1e: the Guilds tab - a guild's own notes under its banner, and the town's recruitment posters. BOARD-UI: a section's
   name over its own grid, ruled, so the Notices tab's two kinds and the Guilds tab's two lists read apart */
.notice-section { margin: 4px 4px 10px; padding-bottom: 4px; display: flex; align-items: center; gap: 10px; font-family: inherit; font-size: 13px;
  font-weight: normal; letter-spacing: 0.1em; text-transform: uppercase; color: #f3cf86; text-shadow: 1px 1px 0 #050608;
  border-bottom: 1px solid rgba(243,207,134,0.25); }
.notice-section .notice-sectioncount { margin-left: auto; font-size: 12px; letter-spacing: 0.04em; text-transform: none; color: #c9bba1; }
.notice-banner { flex: none; width: 22px; height: auto; filter: drop-shadow(2px 3px 0 rgba(5,6,8,0.45)); }
.notice-poster .notice-banner { width: 30px; align-self: center; }
/* SEAT1b: the Seat tab - the week's clock, the standings (each guild under its banner, the reader's own marked), the
   reader's own lines and the levers (ui/seatTab.js). BOARD-UI: each part its own panel, under its own name */
.notice-seat-week, .notice-seat-mine { margin: 0 0 6px; font-size: 15px; color: #e9e1cf; }
.notice-standings { list-style: none; margin: 0 0 8px; padding: 0; display: flex; flex-direction: column; gap: 4px; }
.notice-standing { display: grid; grid-template-columns: 22px minmax(0, 1fr); align-items: center; gap: 2px 10px; padding: 6px 10px; font-size: 15px;
  color: #f3ead8; background: rgba(255,255,255,0.04); border-left: 2px solid transparent; }
.notice-standing.mine { border-left-color: #f3cf86; background: rgba(243,207,134,0.1); }
.notice-standing .notice-banner { width: auto; height: 32px; grid-row: 1 / span 2; justify-self: center; }
.notice-standing .seat-bar { grid-column: 2; height: 5px; background: rgba(5,6,8,0.7); }
.notice-standing .seat-bar > i { display: block; height: 100%; background: linear-gradient(180deg, #f5dfa8 0 1px, #c08a3e 1px); }
.notice-standing .seat-bar.past > i { background: linear-gradient(180deg, #b6f0c6 0 1px, #4f9a63 1px); }
.notice-seat-levers { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 8px 0 4px; }
.notice-seat-levers .notice-input { width: 7em; }
.notice-seat-drakes { width: 7em; }
/* SEAT1c: this week's battle, and the Chronicle */
.notice-seat-battle { margin: 0 0 6px; font-size: 15px; color: #f3e36a; }
.notice-chronicle { margin: 0 0 8px; padding: 0 0 0 4px; list-style: none; font-size: 14px; color: #e6dccb; line-height: 1.5; }
.notice-chronicle li { display: flex; align-items: baseline; gap: 8px; padding: 2px 0; }
.seat-head { display: flex; align-items: center; gap: 12px; }
.seat-head .notice-banner { width: auto; height: 56px; }
.seat-head .seat-charter { margin: 0; font-size: 17px; letter-spacing: 0.08em; text-transform: uppercase; color: #f3cf86; }
.seat-phases { display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 8px; padding: 0; list-style: none; }
.seat-phases li { padding: 3px 10px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #9d9180; border: 1px solid rgba(192,138,62,0.25); }
.seat-phases li.on { color: #1d150b; background: #f3cf86; border-color: #f3cf86; }
.seat-guide ol { margin: 0; padding: 0 0 0 20px; }
.seat-guide li { margin: 0 0 6px; }
.seat-guide b { color: #f3cf86; font-weight: normal; }
/* PLAIN-UI (bible/10-UI/Plain-Words.md): what the seat is and the reader's next step, first; the board's words under the
   guide, each word in brass over its meaning. The chapters' guide and words on the Work tab wear the same (board-) */
.seat-about { margin: 0 0 8px; }
.seat-next { margin: 0; padding: 6px 10px; color: #f3ead8; background: rgba(243,207,134,0.1); border-left: 2px solid #f3cf86; }
.seat-next .seat-next-pledge { display: block; margin-top: 8px; }
.board-guide ol { margin: 0; padding: 0 0 0 22px; }
.board-guide li { margin: 0 0 8px; }
.board-guide li:last-child { margin-bottom: 0; }
.board-guide b, .board-words dt { color: #f3cf86; font-weight: normal; }
.board-words dl { margin: 0; display: grid; grid-template-columns: minmax(8em, max-content) minmax(0, 1fr); gap: 6px 14px; }
.board-words dd { margin: 0; }
.seat-who { min-width: 0; }
.seat-who p { margin: 0 0 4px; }
.notice-standing .seat-nobanner { grid-row: 1 / span 2; }
.notice-seat-towers { padding: 4px 10px; font-size: 15px; color: #e9e1cf; }
.notice-seat-fight, .notice-seat-royal, .notice-seat-politics { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; }
.notice-seat-fight p, .notice-seat-royal p, .notice-seat-politics p { margin: 0; }
.notice-seat-politics { margin-top: 10px; }
.notice-seat-works > .notice-seat-head { margin: 0 0 8px; font-family: inherit; font-size: 14px; font-weight: normal; letter-spacing: 0.14em;
  text-transform: uppercase; color: #f3cf86; }
.notice-seat-works-line, .notice-seat-works-stock { margin: 0 0 6px; }
.notice-seat-works .act { margin: 0 0 8px; }
@media (max-width: 720px) {
  .notice-shell { padding: 8px; }
  .notice-cork { padding: 10px; }
  .board-words dl { grid-template-columns: minmax(0, 1fr); gap: 2px; }
  .board-words dd { margin: 0 0 8px; }
  .notice-grid { grid-template-columns: 1fr; }
  .notice-head { flex-wrap: wrap; }
  .notice-title h2 { font-size: 17px; letter-spacing: 0.08em; }
}
@media (pointer: coarse) { .notice-card { min-height: 96px; } .notice-tab { padding: 12px 12px 10px; } }`,_0=`/* ── ARENA3: THE ARENA WINDOW ── */
.aw-shell { position: fixed; inset: 0; z-index: 39; display: flex; align-items: center; justify-content: center;
  padding: 16px; background: rgba(0,0,0,0.5); font-family: ${M}; -webkit-font-smoothing: none; color: #efe8d6; }
.aw-win { --red: #c23a2b; --red-hi: #f2a597; --red-lo: #6e1a12; --blue: #3768b8; --blue-hi: #a9c8f2; --blue-lo: #172f5c;
  --brass: #c08a3e; --brass-hi: #f3cf86; --bone: #efe8d6; --mute: #b9ab93;
  position: relative; width: min(1040px, 96vw); height: min(760px, 92vh); display: flex; flex-direction: column; overflow: hidden;
  border: 2px solid; background: rgba(14,12,11,0.97); }
.aw-win[data-banner="red"] { box-shadow: inset 0 3px 0 -1px var(--red); }
.aw-win[data-banner="blue"] { box-shadow: inset 0 3px 0 -1px var(--blue); }
.aw-pennant { display: inline-block; flex: 0 0 auto; width: 9px; height: 13px; vertical-align: -2px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 74%, 0 100%); background: #5d5447; box-shadow: 1px 1px 0 #050608; }
.aw-pennant[data-banner="red"] { background: linear-gradient(180deg, var(--red-hi) 0 2px, var(--red) 2px 70%, var(--red-lo)); }
.aw-pennant[data-banner="blue"] { background: linear-gradient(180deg, var(--blue-hi) 0 2px, var(--blue) 2px 70%, var(--blue-lo)); }
.aw-pennant[data-banner=""] { background: linear-gradient(180deg, #8d8270 0 2px, #4a4237 2px); }
.aw-head { flex: 0 0 auto; display: flex; flex-wrap: wrap; align-items: center; gap: 8px 16px; padding: 12px 16px 10px; border-bottom: 2px solid rgba(5,6,8,0.6); }
.aw-crest { width: 26px; height: 38px; }
.aw-title { flex: 1 1 300px; min-width: 0; }
.aw-title h2 { margin: 0; font-size: 20px; letter-spacing: 0.12em; text-transform: uppercase; color: #efe0b8; text-shadow: 2px 2px 0 #050608; }
.aw-sub { margin: 2px 0 0; font-size: 12px; color: var(--mute); }
.aw-note { margin: 4px 0 0; font-size: 12px; color: #e59a8e; }
.aw-note:empty { display: none; }
.aw-note.ok { color: var(--brass-hi); }
.aw-id { order: 3; flex: 1 1 100%; display: flex; flex-wrap: wrap; align-items: center; gap: 6px 8px; min-width: 0;
  padding: 7px 0 0 42px; border-top: 1px solid rgba(243,207,134,0.14); }
.aw-name { font-size: 15px; color: var(--bone); text-shadow: 1px 1px 0 #050608; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.aw-rec { margin-left: auto; }
.aw-rec { font-size: 12px; color: var(--mute); white-space: nowrap; }
.aw-chip { display: inline-flex; align-items: center; gap: 4px; padding: 1px 6px; font-size: 11px; letter-spacing: 0.08em; white-space: nowrap;
  color: var(--bone); border: 1px solid #5a5446; background: rgba(5,6,8,0.55); }
.aw-titlechip { color: var(--brass-hi); border-color: #7a5424; text-transform: uppercase; }
.aw-bannerchip.b-red { color: var(--red-hi); border-color: var(--red); }
.aw-bannerchip.b-blue { color: var(--blue-hi); border-color: var(--blue); }
.aw-laurel { color: #d9f0a8; border-color: #6f8a32; text-transform: uppercase; }
.aw-laurel::before { content: ''; width: 9px; height: 9px; border-radius: 50% 50% 50% 0; border: 2px solid #9cc04a; border-right-color: transparent; border-bottom-color: transparent; transform: rotate(-45deg); }
.aw-close { flex: 0 0 auto; align-self: flex-start; }
.aw-tabs { flex: 0 0 auto; display: flex; gap: 4px; padding: 8px 16px 0; border-bottom: 2px solid rgba(5,6,8,0.6); overflow-x: auto; scrollbar-width: none; }
.aw-tabs::-webkit-scrollbar { display: none; }
/* AUDIT PRE-MERGE 1003 U13: the six tabs need about 520 pixels - under it Records and Rules stood past the edge with the
   scrollbar hidden and nothing to say they were there (a selected one too). They wrap to a second row instead */
@media (max-width: 520px) { .aw-tabs { flex-wrap: wrap; row-gap: 4px; overflow-x: visible; } }
.aw-tab { flex: 0 0 auto; padding: 6px 14px 5px; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: -2px; }
.aw-tab.on { color: var(--brass-hi); }
.aw-body { flex: 1 1 auto; min-height: 0; overflow: auto; padding: 14px 16px 18px; display: flex; flex-direction: column; gap: 12px; overscroll-behavior: contain; }
.aw-card { margin: 0; padding: 12px 14px; border: 2px solid; min-width: 0; }
.aw-card h3 { margin: 0; font-family: inherit; font-size: 15px; letter-spacing: 0.06em; color: #efe0b8; text-shadow: 1px 1px 0 #050608; }
.aw-card h4 { margin: 10px 0 6px; font-family: inherit; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--mute); }
.aw-cardhead { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 4px 10px; margin-bottom: 8px; }
.aw-state { color: var(--brass-hi); border-color: #7a5424; }
.aw-line { margin: 6px 0 0; font-size: 13px; line-height: 1.45; color: #e6dccb; }
.aw-gives { color: var(--brass-hi); }
.aw-warn { color: #e8b0a4; }
.aw-empty { margin: 8px 0 0; font-size: 13px; color: var(--mute); font-style: italic; }
.aw-cards { display: grid; gap: 12px; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
.aw-bout-card.k-exhibition { grid-column: 1 / -1; }
/* AUDIT PRE-MERGE 1003b U1: a private session's card spans the page too - in one 300 px cell its member rows gave the
   three presses every pixel and the names none (48 of 62 names 0 px wide at 1280) */
.aw-bout-card.k-session { grid-column: 1 / -1; }
.aw-tierline { margin: -4px 0 8px; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--mute); }
.aw-versus { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); align-items: stretch; gap: 10px; }
.aw-fighter { display: flex; flex-direction: column; gap: 3px; min-width: 0; padding: 10px 12px; border: 1px solid #3a352a; background: rgba(5,6,8,0.4); }
.aw-fighter[data-banner="red"] { border-left: 3px solid var(--red); background: linear-gradient(90deg, rgba(194,58,43,0.16), rgba(5,6,8,0.4) 60%); }
.aw-fighter[data-banner="blue"] { border-right: 3px solid var(--blue); text-align: right; align-items: flex-end;
  background: linear-gradient(270deg, rgba(55,104,184,0.18), rgba(5,6,8,0.4) 60%); }
.aw-fname { display: flex; align-items: center; gap: 6px; min-width: 0; max-width: 100%; }
.aw-fighter[data-banner="blue"] .aw-fname { flex-direction: row-reverse; }
.aw-fn { font-size: 15px; color: var(--bone); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-shadow: 1px 1px 0 #050608; }
.aw-fbill, .aw-fkind { font-size: 11px; color: var(--mute); max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.aw-fnums { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px; }
.aw-fighter[data-banner="blue"] .aw-fnums { justify-content: flex-end; }
.aw-odds { color: var(--brass-hi); border-color: #7a5424; font-variant-numeric: tabular-nums; }
.aw-fav { color: #d9f0a8; border-color: #6f8a32; text-transform: uppercase; }
.aw-vs { align-self: center; font-size: 13px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--brass-hi); text-shadow: 1px 1px 0 #050608; }
.aw-wagerline { margin: 8px 0 0; font-size: 12px; color: var(--brass-hi); }
.aw-opp { margin: 0; font-size: 14px; color: var(--bone); }
.aw-acts { display: flex; flex-wrap: wrap; gap: 8px 10px; margin-top: 10px; }
.aw-press { display: inline-flex; flex-direction: column; gap: 3px; }
.aw-act { min-width: 96px; }
.aw-why { font-size: 11px; color: var(--mute); max-width: 180px; }
.aw-wager { display: flex; flex-direction: column; gap: 8px; margin-top: 10px; padding: 10px; border: 1px dashed #7a5424; background: rgba(243,207,134,0.04); }
.aw-wager-sides, .aw-stakes { display: flex; flex-wrap: wrap; gap: 6px; }
.aw-side[data-banner="red"].on { box-shadow: inset 3px 0 0 var(--red); }
.aw-side[data-banner="blue"].on { box-shadow: inset 3px 0 0 var(--blue); }
.aw-stake { min-width: 64px; }
.aw-place { align-self: flex-start; }
.aw-owed { margin: 0; padding: 6px 10px; font-size: 13px; color: var(--brass-hi); border-left: 2px solid var(--brass); background: rgba(243,207,134,0.06); }
/* ARENA4: online - the bouts on the sand now, the challenge's offer, the rating and rank chips */
.aw-live { list-style: none; margin: 8px 0 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }
.aw-liveb { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 4px 10px; align-items: center; padding: 6px 8px;
  border-left: 2px solid #3a352a; background: rgba(5,6,8,0.38); }
.aw-liveb[data-kind="pvp"] { border-left-color: #e05a3a; }
.aw-livewho { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 8px; min-width: 0; }
.aw-livef { display: inline-flex; align-items: center; gap: 5px; min-width: 0; max-width: 100%; }
.aw-livemeta { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; grid-column: 1; font-size: 11px; color: var(--mute); }
.aw-liveb .aw-acts { grid-column: 2; grid-row: 1 / span 2; margin: 0; }
.aw-offer { display: flex; align-items: center; gap: 8px; margin: 8px 0 0; padding: 8px 10px; border: 1px solid #e05a3a; background: rgba(224,90,58,0.08); }
.aw-rating { color: #cfe3ff; border-color: #4a6a98; font-variant-numeric: tabular-nums; }
.aw-rankchip { color: var(--brass-hi); border-color: #7a5424; }
.aw-rankchip.champ { color: #d9f0a8; border-color: #6f8a32; }
.aw-champline { padding: 4px 8px; border-left: 2px solid #6f8a32; background: rgba(111,138,50,0.1); }
.aw-online { color: #cfe3ff; }
@media (max-width: 520px) { .aw-liveb { grid-template-columns: minmax(0, 1fr); } .aw-liveb .aw-acts { grid-column: 1; grid-row: auto; } }
/* ARENA6: a private session - its code large enough to read off a stream, its members (the Red's and the Blue's marked in
   words and at the edge), its results, and the join field */
.aw-privcode { margin: 8px 0 2px; font-size: 26px; letter-spacing: 0.3em; font-variant-numeric: tabular-nums; color: var(--brass-hi);
  text-shadow: 1px 1px 0 #050608; overflow-wrap: anywhere; }
.aw-privmembers { list-style: none; margin: 8px 0 0; padding: 0; display: flex; flex-direction: column; gap: 4px; max-height: 260px; overflow-y: auto; }
.aw-privm { display: grid; grid-template-columns: minmax(12ch, 1fr) auto; gap: 4px 10px; align-items: center; padding: 5px 8px;   /* AUDIT PRE-MERGE 1003b U1: a name keeps twelve characters */
  border-left: 2px solid #3a352a; background: rgba(5,6,8,0.38); }
.aw-privm.red { border-left-color: var(--red, #c23a2b); }
.aw-privm.blue { border-left-color: var(--blue, #3768b8); }
.aw-privm.me .aw-fn { color: var(--brass-hi); }
.aw-privwho { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 6px; min-width: 0; }
.aw-privrole { font-size: 11px; }
.aw-privm .aw-acts { margin: 0; justify-content: flex-end; }
.aw-privm .aw-act { min-width: 0; }
/* AUDIT PRE-MERGE 1003b U4: a session's press shut by aria-disabled (it keeps the focus) looks shut, as a disabled one */
.aw-act[aria-disabled="true"] { opacity: 0.4; cursor: not-allowed; }
/* AUDIT PRE-MERGE 1003b U10: what a screen reader reads and nobody sees */
.aw-sr { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
.aw-privcode { position: relative; }
.aw-privresults { list-style: none; margin: 0; padding: 0; }
.aw-privjoin { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 10px 0 0; }
.aw-privlabel { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--mute); }   /* AUDIT PRE-MERGE 1003b U11 */
.aw-privinput::placeholder { letter-spacing: normal; text-transform: none; }
.aw-privinput { min-width: 0; width: 15ch; padding: 6px 8px; font: inherit; font-size: 16px; letter-spacing: 0.2em; text-transform: uppercase;
  color: #efe0b8; background: rgba(5,6,8,0.6); border: 1px solid #5a4a2a; }
.aw-privinput:focus-visible { outline: 2px solid var(--brass-hi); outline-offset: 1px; }
@media (max-width: 520px) { .aw-privm { grid-template-columns: minmax(0, 1fr); } .aw-privcode { font-size: 22px; } }
/* the ladder: the ten tiers as a column, the one picked whole beside it */
.aw-ladder { display: grid; grid-template-columns: minmax(240px, 0.85fr) minmax(0, 1.4fr); gap: 14px; align-items: start; }
.aw-tiers { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column-reverse; gap: 3px; }
/* AUDIT PRE-MERGE 1003 U14: a tier is a list item holding its press - the press a button, laid as the row was */
.aw-tier { display: grid; grid-template-columns: 26px minmax(0, 1fr) auto; grid-template-rows: auto auto; align-items: center; gap: 0 8px;
  padding: 5px 8px; cursor: pointer; border: 1px solid transparent;
  width: 100%; margin: 0; font: inherit; color: inherit; text-align: left; background: transparent; }
.aw-tier.on { background: linear-gradient(90deg, rgba(243,207,134,0.14), transparent 85%); }
.aw-tiern { grid-row: 1 / span 2; display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; font-size: 13px;
  color: var(--mute); border: 1px solid #4a4438; background: rgba(5,6,8,0.6); }
.aw-tier[data-state="cleared"] .aw-tiern { color: #1d150b; background: linear-gradient(180deg, var(--brass-hi), var(--brass)); border-color: #5c3f1a; }
.aw-tier[data-state="current"] .aw-tiern { color: var(--brass-hi); border-color: var(--brass); box-shadow: 0 0 6px rgba(243,207,134,0.35); }
.aw-tiername { font-size: 14px; color: var(--bone); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.aw-tier[data-state="locked"] .aw-tiername { color: #8d8270; }
.aw-tierstate { grid-column: 3; grid-row: 1 / span 2; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--mute); }
.aw-tier[data-state="current"] .aw-tierstate { color: var(--brass-hi); }
.aw-pips { display: inline-flex; align-items: center; gap: 4px; }
.aw-pips i { width: 7px; height: 7px; transform: rotate(45deg); background: rgba(0,0,0,0.6); border: 1px solid #5d5245; }
.aw-pips i.on { background: var(--brass-hi); border-color: #5c3f1a; }
.aw-pips i.crown { width: 9px; height: 9px; margin-left: 3px; }
.aw-pips i.crown.on { background: #e05a3a; border-color: #ffb08e; box-shadow: 0 0 4px rgba(224,90,58,0.6); }
.aw-tierbouts { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; }
.aw-tb { display: grid; grid-template-columns: 120px minmax(0, 1fr) auto; gap: 8px; align-items: baseline; padding: 5px 8px; font-size: 13px;
  border-left: 2px solid #3a352a; background: rgba(5,6,8,0.35); }
.aw-tb.won { border-left-color: var(--brass); }
.aw-tb.next { border-left-color: #e05a3a; background: rgba(224,90,58,0.08); }
.aw-tb.champ .aw-tbl { color: #ffb08e; }
.aw-tbl { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--mute); }
.aw-tbo { color: var(--bone); }
.aw-tbm { font-size: 11px; color: var(--brass-hi); text-transform: uppercase; letter-spacing: 0.08em; }
.aw-tb.next .aw-tbm { color: #ffb08e; }
.aw-chips { display: flex; flex-wrap: wrap; gap: 6px; }
/* the team: the season's split, the banner, the roster */
.aw-split-nums { display: flex; justify-content: space-between; gap: 10px; margin-bottom: 4px; font-size: 14px; font-variant-numeric: tabular-nums; }
.aw-split-n { display: inline-flex; align-items: center; gap: 6px; }
.aw-split-n.b-red { color: var(--red-hi); }
.aw-split-n.b-blue { color: var(--blue-hi); flex-direction: row-reverse; }
.aw-split { position: relative; height: 14px; border: 2px solid; border-color: #25221b #6e6755 #9a9079 #3a352a;
  background: linear-gradient(180deg, var(--blue-hi) 0 2px, var(--blue) 2px 9px, var(--blue-lo)); }
.aw-split-red { position: absolute; left: 0; top: 0; bottom: 0; background: linear-gradient(180deg, var(--red-hi) 0 2px, var(--red) 2px 9px, var(--red-lo)); }
.aw-split-mid { position: absolute; left: 50%; top: -3px; bottom: -3px; width: 2px; margin-left: -1px; background: var(--brass-hi); box-shadow: 0 0 0 1px #050608; }
.aw-bannerhead { display: flex; align-items: center; gap: 12px; }
.aw-flag { width: 28px; height: 42px; }
.aw-bannerwords { flex: 1 1 auto; min-width: 0; }
.aw-motto { margin: 2px 0 0; font-size: 12px; font-style: italic; color: var(--mute); }
.aw-bannercard[data-banner="red"] { box-shadow: inset 3px 0 0 var(--red); }
.aw-bannercard[data-banner="blue"] { box-shadow: inset 3px 0 0 var(--blue); }
.aw-mini { list-style: none; margin: 8px 0 0; padding: 0; display: flex; flex-direction: column; gap: 2px; font-size: 13px; }
.aw-mini li { display: flex; justify-content: space-between; gap: 8px; }
.aw-pts { color: var(--brass-hi); font-variant-numeric: tabular-nums; }
.aw-stats { display: grid; gap: 8px; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); }
.aw-stat { display: flex; flex-direction: column; gap: 2px; padding: 8px 10px; border: 1px solid #3a352a; background: rgba(5,6,8,0.45); }
.aw-stat .k { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--mute); }
.aw-stat .v { font-size: 18px; color: var(--bone); font-variant-numeric: tabular-nums; text-shadow: 1px 1px 0 #050608; }
/* the boards */
.aw-subtabs { display: flex; flex-wrap: wrap; gap: 6px; }
.aw-subtab { font-size: 12px; }
.aw-boardsub { margin: 2px 0 10px; font-size: 12px; color: var(--mute); }
.aw-table { width: 100%; border-collapse: collapse; font-size: 13px; font-variant-numeric: tabular-nums; }
.aw-table th { padding: 4px 8px; text-align: left; font-size: 11px; font-weight: 400; letter-spacing: 0.12em; text-transform: uppercase; color: var(--mute);
  border-bottom: 1px solid rgba(243,207,134,0.25); }
.aw-table td { padding: 5px 8px; border-bottom: 1px solid rgba(5,6,8,0.6); white-space: nowrap; }
.aw-rank { width: 36px; color: var(--mute); }
.aw-row:nth-child(-n+3) .aw-rank { color: var(--brass-hi); }
.aw-table .aw-nm { width: 46%; }
.aw-who { display: flex; align-items: center; gap: 6px; min-width: 0; max-width: 360px; }
.aw-who .aw-n { overflow: hidden; text-overflow: ellipsis; }
.aw-home { font-size: 11px; color: #8d8270; overflow: hidden; text-overflow: ellipsis; }
.aw-row.you td { background: rgba(243,207,134,0.1); color: var(--brass-hi); }
.aw-row.you td:first-child { box-shadow: inset 2px 0 0 var(--brass-hi); }
.aw-gap td { padding: 0 8px; color: #8d8270; text-align: center; letter-spacing: 0.3em; }
/* the records */
.aw-bouts { list-style: none; margin: 8px 0 0; padding: 0; display: flex; flex-direction: column; gap: 4px; }
.aw-bout { display: grid; grid-template-columns: 56px minmax(0, 1fr) auto; gap: 10px; align-items: center; padding: 5px 8px;
  border-left: 2px solid #3a352a; background: rgba(5,6,8,0.35); }
.aw-bout.won { border-left-color: var(--brass); }
.aw-bout.lost { border-left-color: #8a2820; }
.aw-res { justify-content: center; text-transform: uppercase; }
.aw-res.won { color: var(--brass-hi); border-color: #7a5424; }
.aw-res.lost { color: #ff9a8a; border-color: #7a2a24; }
.aw-boutwhat { display: flex; flex-direction: column; min-width: 0; }
.aw-bo { font-size: 13px; color: var(--bone); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.aw-bt { font-size: 11px; color: var(--mute); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.aw-bouttail { display: flex; flex-direction: column; align-items: flex-end; gap: 1px; font-size: 11px; color: var(--mute); white-space: nowrap; }
.aw-bp { color: var(--brass-hi); }
.aw-bpts { color: #d9f0a8; }
/* ARENA5: a kept bout's Watch the replay, under its row - a small press, so a kept row stays a row */
.aw-boutacts { grid-column: 2 / -1; display: flex; justify-content: flex-end; margin-top: -4px; }
body .aw-shell .aw-boutacts .act { min-width: 0; padding: 3px 12px; font-size: 12px; }
.aw-wagerlist { list-style: none; margin: 8px 0 0; padding: 0; display: flex; flex-direction: column; gap: 3px; font-size: 13px; }
.aw-wl { padding: 3px 8px; border-left: 2px solid #3a352a; }
.aw-wl.s-won { border-left-color: var(--brass); color: var(--brass-hi); }
.aw-wl.s-lost { color: var(--mute); }
.aw-wl.s-open { border-left-color: #e05a3a; }
/* the rules */
.aw-rules { display: grid; gap: 12px; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); }
.aw-rule ul { margin: 8px 0 0; padding: 0 0 0 16px; display: flex; flex-direction: column; gap: 5px; font-size: 13px; line-height: 1.45; color: #e6dccb; }
.aw-rule li::marker { color: var(--brass); }
@media (max-width: 720px) {
  .aw-shell { padding: 6px; }
  .aw-win { width: 100%; height: 96vh; }
  .aw-head { padding: 10px 12px 8px; gap: 6px 10px; }
  .aw-crest { width: 18px; height: 27px; }
  .aw-title { flex: 1 1 0; }
  .aw-close { padding-left: 10px; padding-right: 10px; }
  .aw-title h2 { font-size: 16px; letter-spacing: 0.06em; }
  .aw-id { padding-left: 0; }
  .aw-rec { margin-left: 0; }
  .aw-tabs { padding: 6px 10px 0; }
  .aw-tab { padding: 6px 10px 5px; letter-spacing: 0.08em; }
  .aw-body { padding: 10px 10px 14px; }
  .aw-cards, .aw-rules { grid-template-columns: minmax(0, 1fr); }
  .aw-versus { grid-template-columns: minmax(0, 1fr); }
  .aw-vs { justify-self: center; }
  .aw-fighter[data-banner="blue"] { text-align: left; align-items: flex-start; border-right: 1px solid #3a352a; border-left: 3px solid var(--blue); }
  .aw-fighter[data-banner="blue"] .aw-fname { flex-direction: row; }
  .aw-fighter[data-banner="blue"] .aw-fnums { justify-content: flex-start; }
  .aw-ladder { grid-template-columns: minmax(0, 1fr); }
  .aw-tb { grid-template-columns: minmax(0, 1fr) auto; }
  .aw-tbl { grid-column: 1 / -1; }
  .aw-table { table-layout: fixed; }
  .aw-table .opt { display: none; }
  .aw-table td, .aw-table th { padding: 5px 4px; overflow: hidden; text-overflow: ellipsis; }
  /* AUDIT PRE-MERGE 1003 U5: by the column's class, the header's own now (ui/arenaWindow.js table) - a board with no rank
     column (the banners') keeps its first column; the header's word whole in it ("R..." before) */
  .aw-table .aw-rank { width: 34px; }
  .aw-table th.aw-rank { padding-left: 2px; padding-right: 2px; letter-spacing: 0; text-overflow: clip; }
  .aw-table .aw-nm { width: 48%; }
  .aw-home { display: none; }
  .aw-bout { grid-template-columns: 52px minmax(0, 1fr); }
  .aw-bt { white-space: normal; }   /* AUDIT PRE-MERGE 1003 U5: how each bout ended, whole - it was cut at "on t..." */
  .aw-bouttail { grid-column: 2; flex-direction: row; flex-wrap: wrap; gap: 2px 8px; justify-content: flex-start; white-space: normal; }
  .aw-boutacts { grid-column: 2; justify-content: flex-start; }
}
@media (pointer: coarse) { .aw-tier, .aw-tab, .aw-subtab, .aw-stake, .aw-side, .aw-boutacts .aw-act { min-height: 40px; } }
@media (prefers-reduced-motion: reduce) { .aw-tier, .aw-card { transition: none; } }
/* AUDIT PRE-MERGE 1003 U9: UNDER FORCED COLOURS every chosen state was a colour or a shadow the system paints over - the
   page, the side and the stake backed, the board, the tier - and a won pip drew as hollow as one to win. The chosen
   carry the system's Highlight as an outline; a won pip is filled with the system's own ink */
@media (forced-colors: active) {
  .aw-tab.on, .aw-side.on, .aw-stake.on, .aw-subtab.on, .aw-tier.on { outline: 2px solid Highlight; outline-offset: -2px; }
  .aw-pips i.on { background: CanvasText; forced-color-adjust: none; }
  .aw-privm.red, .aw-privm.blue { border-left-color: Highlight; }   /* ARENA6: a session's picked fighters */
}`,G0=`/* ── PROF1: THE PROFESSIONS ── */
.notice-tab { cursor: pointer; }
.notice-card.seal-court, .notice-read.seal-court { --seal: #6b3fa0; }
.notice-writ { cursor: default; }
.notice-writ .writ-kind { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #5b3c86; }
.notice-writ .writ-need { margin: 0; font-size: 15px; line-height: 1.3; color: #1d150b; }
.notice-writ .writ-pay, .notice-writ .writ-left { margin: 0; font-size: 13px; color: #4a3a25; }
.notice-writ .writ-take { display: flex; align-items: center; gap: 8px; margin-top: auto; padding-top: 6px; font-size: 12px; color: #5a4630; }
.notice-writ.done { opacity: 0.62; }
/* BOARD-UI: the day's count over the cards, on its own dark strip */
.notice-worktoday { margin: 0 4px 12px; padding: 6px 10px; font-size: 15px; letter-spacing: 0.04em; color: #e9e1cf;
  background: rgba(12,10,8,0.72); border-left: 2px solid rgba(192,138,62,0.6); }
/* CHAP3a: the account's Merit in a chapter here, under the day's count, on the guild seal's strip */
.notice-merit { margin: -8px 4px 12px; padding: 4px 10px; font-size: 14px; letter-spacing: 0.03em; color: #e9e1cf;
  background: rgba(12,10,8,0.6); border-left: 2px solid rgba(120,150,190,0.6); }
/* CHAP3b: a chapter of the region, its band and Strength, under the Merit lines */
.notice-merit + .notice-chapter, .notice-worktoday + .notice-chapter { margin-top: -8px; }
.notice-chapter { margin: 0 4px 12px; padding: 4px 10px; font-size: 14px; letter-spacing: 0.03em; color: #d8cfbb;
  background: rgba(12,10,8,0.5); border-left: 2px solid rgba(79,111,143,0.5); }
/* GUILD3d (bible/11-Multiplayer/Guilds-Made-Plain.md): a chapter's card - one panel a chapter, its lines on the panel's
   own dark ground (no strip of their own), its band's effects the brightest line, its duties the quietest */
.notice-chapter-card { border-left: 2px solid rgba(79,111,143,0.6); }
.notice-chapter-card .notice-chapter, .notice-chapter-card .notice-merit { margin: 0 0 6px; padding: 0; background: none; border-left: 0; }
.notice-chapter-card .notice-band { color: #e9e1cf; }
.notice-chapter-card .notice-duties { color: #b9ab93; }
.prof-cols { display: grid; grid-template-columns: minmax(180px, 0.9fr) 1.4fr; gap: 14px; }
.prof-list { display: flex; flex-direction: column; gap: 4px; }
.prof-row { display: grid; grid-template-columns: 1fr auto; gap: 2px 8px; padding: 4px 8px; text-align: left; font: inherit; font-size: 12px;
  color: var(--bone, #e9e4d9); background: rgba(10,8,6,0.55); border: 1px solid rgba(192,138,62,0.25); cursor: pointer; }
.prof-row .px-meter { grid-column: 1 / -1; height: 5px; }
.prof-row.on { border-color: var(--brass, #c08a3e); background: rgba(192,138,62,0.16); }
.prof-rank { color: #b9ab93; font-size: 11px; }
.prof-pane { min-width: 0; }
.prof-title { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
.prof-title h3 { margin: 0; font-size: 16px; letter-spacing: 0.1em; text-transform: uppercase; color: #efe0b8; }
.prof-rankline, .prof-xp, .prof-today, .prof-limit { font-size: 12px; color: #b9ab93; }
.prof-xp, .prof-today, .prof-limit { margin: 4px 0; }
.prof-specs { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.prof-spec { display: flex; flex-direction: column; gap: 4px; padding: 8px; text-align: left; font: inherit; font-size: 12px; color: #d9cfbd;
  background: rgba(10,8,6,0.6); border: 1px solid rgba(192,138,62,0.3); cursor: pointer; }
.prof-spec b { color: #f3cf86; letter-spacing: 0.06em; }
.prof-spec.on { border-color: var(--brass, #c08a3e); box-shadow: inset 0 0 0 1px rgba(243,207,134,0.5); }
.prof-spec.coming { border-style: dashed; }
.prof-spec:disabled { cursor: default; opacity: 0.72; }
.prof-spec.on:disabled { opacity: 1; }
.prof-cost { font-style: normal; font-size: 11px; color: #e8b872; }
.prof-of { font-style: normal; font-size: 11px; color: #9c8f78; }   /* CRAFT3: whose choice a merged craft's card is */
.prof-locked { opacity: 0.55; }
.prof-word { margin: 8px 0 0; font-size: 12px; color: #e59a8e; }
.prof-gentle { display: flex; align-items: center; gap: 6px; margin: 10px 0 0; font-size: 12px; color: #b9ab93; cursor: pointer; }
.prof-storehead { display: flex; gap: 8px; margin: 4px 0 6px; }
.prof-search, .prof-sort, .prof-qty { font: inherit; font-size: 12px; color: #1d150b; background: rgba(255,250,236,0.85); border: 1px solid #9c8358; padding: 4px 6px; }
.prof-search { flex: 1 1 auto; min-width: 0; }
.prof-qty { width: 5.5em; }
.prof-families { display: flex; flex-wrap: wrap; gap: 4px; margin: 0 0 8px; }
.prof-family { font: inherit; font-size: 11px; padding: 3px 8px; color: #b9ab93; background: rgba(10,8,6,0.55); border: 1px solid rgba(192,138,62,0.25); cursor: pointer; }
.prof-family.on { color: #f3cf86; border-color: var(--brass, #c08a3e); }
.prof-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(128px, 1fr)); gap: 6px; }
.prof-mat { display: grid; grid-template-columns: 1fr auto; gap: 2px 6px; padding: 6px 8px; text-align: left; font: inherit; font-size: 12px;
  color: var(--bone, #e9e4d9); background: rgba(10,8,6,0.6); border: 1px solid rgba(192,138,62,0.25); cursor: pointer; }
.prof-mat.on { border-color: var(--brass, #c08a3e); background: rgba(192,138,62,0.16); }
.prof-count { color: #f3cf86; font-variant-numeric: tabular-nums; }
.prof-split { grid-column: 1 / -1; font-size: 11px; color: var(--bone); }
/* Existing readable text roles follow the active theme rather than one hard-coded Stone palette. */
.px-qdetail.prof-detail .px-note { color: var(--bone); }
.prof-matbar { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 10px 0 4px; font-size: 12px; color: #d9cfbd; }
.prof-smelt { display: grid; grid-template-columns: minmax(0, 1fr) 64px auto; align-items: center; gap: 4px 8px;
  padding: 4px 0; border-bottom: 1px solid rgba(192,138,62,0.18); font-size: 12px; color: #d9cfbd; }
.prof-smelt b { color: #efe0b8; font-weight: normal; }
/* AUDIT 32 P7: the name, the count and the button one row, the inputs under them - placed, never flowed: the inputs line
   spanned its row and pushed the count and the button into the name's and the count's tracks (a 220px button, a 0px
   fourth track; on a phone the button in the 64px track, 30px past the pane). The pause window's pane is 428px at 800,
   so the rows are the phone's everywhere, as they always drew. */
.prof-smelt b { grid-column: 1; grid-row: 1; } .prof-smelt .prof-qty { grid-column: 2; grid-row: 1; }
.prof-smelt .act { grid-column: 3; grid-row: 1; } .prof-smelt .prof-split { grid-column: 1 / -1; grid-row: 2; }
@media (max-width: 560px) { .prof-smelt .act { min-width: 0; } }
/* PROF3: the anvil - its recipes, a recipe's inputs, and the heat (a bar the glow's marker runs along, the band on it) */
.prof-metals { margin-top: 4px; }
.prof-recipe { display: grid; grid-template-columns: 1fr auto; width: 100%; gap: 2px 8px; padding: 4px 8px; margin: 2px 0; text-align: left; font: inherit;
  font-size: 12px; color: var(--bone, #e9e4d9); background: rgba(10,8,6,0.6); border: 1px solid rgba(192,138,62,0.25); cursor: pointer; }
.prof-recipe.on { border-color: var(--brass, #c08a3e); background: rgba(192,138,62,0.16); }
.prof-recipe b { color: #efe0b8; font-weight: normal; }
.prof-recipe .prof-split { grid-column: auto; }
.prof-craft { display: flex; flex-direction: column; gap: 4px; margin: 8px 0; padding: 8px; font-size: 12px; color: #d9cfbd;
  border: 1px solid rgba(192,138,62,0.3); background: rgba(10,8,6,0.5); }
.prof-craft > b { color: #efe0b8; font-weight: normal; }
.prof-input { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.prof-input.prof-short { color: #d98b6e; }
.prof-heat { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 4px; }
.prof-heatword { flex: 1 1 100%; color: #efe0b8; }
.prof-heatbar { --heat: 0; position: relative; flex: 1 1 220px; height: 18px; border: 1px solid rgba(192,138,62,0.5);
  background: linear-gradient(90deg, #2a1a12, #7a2e10 45%, #d86a18 70%, #f6d58a 88%, #fff6e0);
  box-shadow: 0 0 calc(var(--heat) * 14px) rgba(246,160,60, calc(var(--heat) * 0.8)); }
.prof-heatband { position: absolute; top: -3px; bottom: -3px; border: 2px solid #efe0b8; box-sizing: border-box; }
.prof-heatmark { position: absolute; top: -5px; bottom: -5px; width: 3px; margin-left: -1px; background: #fff; }
.prof-heatbar.prof-inband .prof-heatband { border-color: #fff6e0; box-shadow: 0 0 6px #f6d58a; }
.prof-strikes { display: flex; gap: 4px; font-size: 14px; color: #6f6456; }
.prof-strike.hit { color: #f6d58a; }
.prof-strike.miss { color: #d98b6e; }
@media (prefers-reduced-motion: reduce) { .prof-heatbar { box-shadow: none; } }
/* PROF11: the mason's bench - a work's two buttons in the row's button track; the chisel's stone, its scored lines
   across it, the marked one lit (a shape as well as a colour: its line doubled), the chisel's own line framed */
.prof-smelt .prof-workacts { grid-column: 3; grid-row: 1; display: flex; gap: 4px; }
.prof-stone { flex: 1 1 100%; display: flex; flex-direction: column; gap: 6px; padding: 8px 10px;
  background: linear-gradient(180deg, #8a8478, #6c675d 60%, #57534b); border: 1px solid rgba(192,138,62,0.5); }
.prof-chisel-line { position: relative; height: 22px; padding: 0 6px; text-align: left; font: inherit; font-size: 11px; color: #2a2620;
  background: transparent; border: 0; border-bottom: 2px dashed rgba(40,36,30,0.55); cursor: pointer; }
.prof-chisel-line.marked { border-bottom: 4px double #f6d58a; color: #fff6e0; text-shadow: 0 0 4px #f6d58a; }
.prof-chisel-line.at { outline: 2px solid #efe0b8; outline-offset: -2px; }
.prof-stone.prof-inband { box-shadow: 0 0 6px #f6d58a; }
@media (pointer: coarse) { .prof-chisel-line { height: 40px; } }
/* PROF9: the pan on the fire - its bar runs raw to burnt (a pale dough, a browned crust, the char), the heat's window
   and marker over it; the window a shape as well as a colour (its edged band) */
.prof-heatbar.prof-panbar { background: linear-gradient(90deg, #d9c9a0, #c79a58 40%, #9a5a24 62%, #5a2a14 82%, #1a0e08); }
/* PROF10: the facet - the dial runs the stone's whole turn (dark stone, the light's window an edged band on it, the
   bearing's marker), the stone itself turning beside it; under reduced motion it stands still */
.prof-heatbar.prof-facetbar { background: linear-gradient(90deg, #2a3040, #4a5a78 50%, #2a3040); }
.prof-gem { display: inline-block; min-width: 1.6em; text-align: center; color: #cfe3ff; font-weight: bold; }
@media (pointer: coarse) { .prof-recipe { min-height: 40px; } }
.prof-matline { flex: 1 1 220px; }
@media (max-width: 720px) { .prof-cols { grid-template-columns: 1fr; } .prof-specs { grid-template-columns: 1fr; } }
@media (pointer: coarse) { .prof-row, .prof-mat, .prof-spec, .prof-family { min-height: 40px; } }
/* in the world */
.prof-prompt { position: fixed; left: 50%; bottom: calc(96px * var(--hud-scale, 1)); transform: translateX(-50%); z-index: 12; pointer-events: none;
  padding: 4px 12px; font-family: ${M}; font-size: calc(14px * var(--hud-scale, 1)); color: #efe0b8;
  width: max-content; max-width: calc(100vw - 24px); box-sizing: border-box; white-space: normal; text-align: center;
  background: rgba(10,8,6,0.72); border: 1px solid rgba(192,138,62,0.5); text-shadow: 1px 1px 0 #050608; }
/* AUDIT 32 P9: a body's prompt ran off both edges of a phone (490-742px, nowrap) - it wraps inside the screen now, and the
   choice key's line stands on its own under the verb */
@media (max-width: 560px) { .prof-prompt .prof-alt { display: block; } }
.prof-prompt:empty { display: none; }
.prof-prompt kbd { font: inherit; color: #f3cf86; }
.prof-prompt .dim { color: #b9ab93; }
.prof-meter { position: fixed; left: 50%; top: 50%; z-index: 12; pointer-events: none; transform: translate(-50%, 28px);
  width: calc(160px * var(--hud-scale, 1) * var(--prof-meter-scale, 1)); font-family: ${M};
  font-size: calc(11px * var(--hud-scale, 1)); color: #efe0b8; text-align: center; text-shadow: 1px 1px 0 #050608; }
.prof-meter[hidden] { display: none; }
@media (pointer: coarse) { .prof-meter { --prof-meter-scale: 1.3; } }
.prof-bar { position: relative; height: calc(8px * var(--hud-scale, 1)); background: rgba(5,6,8,0.8); box-shadow: 0 0 0 1px #050608; }
.prof-bar > i { position: absolute; left: 0; top: 0; bottom: 0; background: linear-gradient(180deg, #f5dfa8 0 1px, #c08a3e 1px); }
.prof-meter.bruised .prof-bar > i { background: linear-gradient(180deg, #f5bdb4 0 1px, #b5553f 1px); }
.prof-meter .prof-hint { margin-top: 3px; }
.prof-leaves { position: relative; height: calc(80px * var(--hud-scale, 1)); margin-bottom: 4px;
  background: radial-gradient(circle at 30% 40%, rgba(74,110,48,0.9), rgba(38,58,26,0.92) 60%), #263a1a; box-shadow: 0 0 0 2px #050608; }
.prof-glint { position: absolute; width: 16%; aspect-ratio: 1; margin: -8% 0 0 -8%; border-radius: 50%;
  background: radial-gradient(circle, #fff6d8 0 20%, rgba(243,207,134,0.8) 35%, transparent 70%); animation: prof-glint 0.5s ease-in-out infinite alternate; }
@keyframes prof-glint { from { transform: scale(0.8); } to { transform: scale(1.1); } }
.prof-finds { letter-spacing: 0.2em; }
.prof-face { position: relative; height: calc(64px * var(--hud-scale, 1)); margin-bottom: 4px;
  background: radial-gradient(circle at 40% 35%, rgba(112,104,94,0.92), rgba(58,54,50,0.94) 65%), #3a3632; box-shadow: 0 0 0 2px #050608; }
.prof-point { position: absolute; width: 4%; aspect-ratio: 1; margin: -2% 0 0 -2%; border-radius: 50%; background: rgba(239,224,184,0.45); }
/* AUDIT 32 P11: the trace's line through its points, and its first point marked */
.prof-line { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.prof-line polyline { fill: none; stroke: rgba(239,224,184,0.35); stroke-width: 1px; stroke-dasharray: 3 3; vector-effect: non-scaling-stroke; }
.prof-point.first { width: 6%; margin: -3% 0 0 -3%; background: #f3cf86; box-shadow: 0 0 0 1px #050608; }
.prof-face.prof-traceface .prof-glint { width: 9%; margin: -4.5% 0 0 -4.5%; }   /* a passed point lit, each its own at nine to a line */
.prof-face .prof-glint { width: 22%; margin: -11% 0 0 -11%; }
.prof-aim { position: absolute; width: 10%; aspect-ratio: 1; margin: -5% 0 0 -5%; border: 1px solid #efe0b8; box-sizing: border-box;
  box-shadow: 0 0 0 1px #050608; }
.prof-meter.struck-glint .prof-face { box-shadow: 0 0 0 2px #050608, 0 0 6px 2px rgba(243,207,134,0.8); }
.prof-ring { position: relative; width: calc(64px * var(--hud-scale, 1)); height: calc(64px * var(--hud-scale, 1)); margin: 0 auto 4px;
  border-radius: 50%; background-color: #4a3524; box-shadow: 0 0 0 2px #050608; }
.prof-notch, .prof-ringline { position: absolute; left: 50%; top: 50%; aspect-ratio: 1; transform: translate(-50%, -50%); border-radius: 50%;
  box-sizing: border-box; }
.prof-notch { border: 2px solid #050608; background: #2a1d12; }
.prof-ringline { border: 2px solid #efe0b8; box-shadow: 0 0 0 1px #050608; }
.prof-ring.in-band .prof-ringline { border-color: #f3cf86; box-shadow: 0 0 0 1px #050608, 0 0 6px 1px rgba(243,207,134,0.9); }
.prof-meter.clean-cut .prof-ring { box-shadow: 0 0 0 2px #050608, 0 0 6px 2px rgba(243,207,134,0.8); }
.prof-ringbar { position: relative; height: calc(10px * var(--hud-scale, 1)); margin-bottom: 4px; background: rgba(5,6,8,0.8); box-shadow: 0 0 0 1px #050608; }
.prof-ringband { position: absolute; top: 0; bottom: 0; background: rgba(243,207,134,0.45); }
.prof-ringmark { position: absolute; top: -2px; bottom: -2px; width: 2px; margin-left: -1px; background: #efe0b8; }
/* PROF8: the net's haul - the tension band on the bar, the weight on it; the tug's flash */
.prof-haulbar { position: relative; height: calc(12px * var(--hud-scale, 1)); margin-bottom: 4px; background: rgba(5,6,8,0.8); box-shadow: 0 0 0 1px #050608; }
.prof-haulband { position: absolute; top: 0; bottom: 0; background: rgba(120,190,220,0.45); box-shadow: inset 0 0 0 1px rgba(170,220,240,0.7); }
.prof-haulweight { position: absolute; top: -3px; bottom: -3px; width: 4px; margin-left: -2px; background: #efe0b8; }
.prof-meter.fish-tug .prof-hint { color: #f5dfa8; font-weight: bold; }
.prof-toasts { position: fixed; right: 12px; top: 34%; z-index: 12; display: flex; flex-direction: column; gap: 4px; align-items: flex-end;
  pointer-events: none; font-family: ${M}; font-size: calc(12px * var(--hud-scale, 1)); }
.prof-toast { padding: 3px 10px; color: #efe0b8; background: rgba(10,8,6,0.78); border-left: 2px solid var(--brass, #c08a3e);
  text-shadow: 1px 1px 0 #050608; transition: opacity 0.4s; }
.prof-toast.fade { opacity: 0; }
.prof-chip { align-self: center; margin-top: 4px; padding: 1px 10px; font-family: ${M}; font-size: calc(11px * var(--hud-scale, 1));
  color: #efe0b8; background: rgba(10,8,6,0.72); border: 1px solid rgba(192,138,62,0.4); text-shadow: 1px 1px 0 #050608; pointer-events: none; }
.prof-chip:empty { display: none; }
.prof-banner { position: fixed; left: 50%; top: 22%; transform: translateX(-50%); z-index: 13; pointer-events: none; padding: 8px 24px;
  font-family: ${M}; font-size: calc(18px * var(--hud-scale, 1)); letter-spacing: 0.12em; text-transform: uppercase; color: #f3cf86;
  background: rgba(10,8,6,0.82); border: 2px solid var(--brass, #c08a3e); text-shadow: 2px 2px 0 #050608; }
.prof-banner:empty { display: none; }
/* PROF5 (FOUND): PROF4's plane was drawn undressed - an SVG polyline with no rule fills black and strokes nothing */
.prof-plane { display: flex; flex-direction: column; gap: 6px; }
.prof-board { position: relative; height: 96px; touch-action: none; cursor: crosshair; background: linear-gradient(#8a6a44, #6f5233);
  box-shadow: inset 0 0 0 2px #050608, inset 0 0 12px rgba(5,6,8,0.5); }
.prof-board svg { display: block; width: 100%; height: 100%; }
.prof-grain { fill: none; stroke: #3b2a18; stroke-width: 1.6; vector-effect: non-scaling-stroke; }
.prof-trail { fill: none; stroke: #f3cf86; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; vector-effect: non-scaling-stroke; }
.prof-boardhead { fill: rgba(239,224,184,0.22); stroke: none; }
/* ── PROF5: THE MARKET TAB ── BOARD-UI: Your silver on a strip at the top, the views in their parts (Buy, Sell), the
   columns named over the rows, the type a step larger, the forms' fields under their names */
.market-body { display: flex; flex-direction: column; gap: 10px; }
.market-wallet { margin: 0; padding: 6px 10px; font-size: 13px; letter-spacing: 0.04em; color: #f3cf86;
  background: rgba(12,10,8,0.72); border-left: 2px solid rgba(192,138,62,0.6); }
.market-views { display: flex; flex-wrap: wrap; gap: 4px 18px; align-items: center; }
.market-viewgroup { display: flex; flex-wrap: wrap; align-items: center; gap: 2px; }
.market-viewpart { margin-right: 4px; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #a89a84; }
.market-filters { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
.market-search { flex: 1 1 140px; min-width: 0; }
.market-num { width: 5.5em; }
.market-rows, .market-list { display: flex; flex-direction: column; gap: 4px; margin: 0; padding: 0; list-style: none; }
.market-row, .market-listhead { display: grid; grid-template-columns: minmax(0, 1.6fr) auto minmax(0, 1.4fr) auto 60px; gap: 2px 12px; align-items: center;
  padding: 6px 10px; text-align: left; font: inherit; font-size: 13px; }
.market-row { color: var(--bone, #e9e4d9); background: rgba(10,8,6,0.62); border: 1px solid rgba(192,138,62,0.25); cursor: pointer; }
.market-listhead { padding-top: 0; padding-bottom: 0; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #c9bba1; }
.market-materialhead > :last-child { grid-column: 4 / span 2; }
.market-row.on { border-color: var(--brass, #c08a3e); background: rgba(192,138,62,0.16); }
.market-row b { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: normal; color: #f3ead8; }
.market-price { color: #f3cf86; white-space: nowrap; }
.market-where, .market-quality, .market-units, .market-state { color: #c9bba1; font-size: 12px; }
.market-median { color: #cdbd9f; font-size: 12px; white-space: nowrap; }
.market-mine, .market-mod { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #efe0b8; }
.market-line { width: 60px; height: 16px; }
.market-line polyline { fill: none; stroke: #f3cf86; stroke-width: 1.4; vector-effect: non-scaling-stroke; }
.market-bar, .market-counterrow, .market-order, .market-listing, .market-histrow { display: flex; flex-wrap: wrap; gap: 6px 10px; align-items: center;
  padding: 6px 10px; font-size: 13px; color: var(--bone, #e9e4d9); background: rgba(10,8,6,0.55); border-left: 2px solid var(--brass, #c08a3e); }
.market-ask { flex: 1 1 200px; }
.market-road, .market-counter, .market-listform, .market-orderform, .market-suppliers { display: flex; flex-direction: column; gap: 8px;
  padding: 8px 12px; background: rgba(10,8,6,0.62); border: 1px solid rgba(192,138,62,0.3); color: var(--bone, #e9e4d9); font-size: 13px; }
.market-road h4, .market-counter h4, .market-listform h4, .market-orderform h4, .market-body > h4, .market-mine-view h4, .market-history h4,
.market-suppliers > summary { margin: 0; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #efe0b8; }
.market-mine-view, .market-history { display: flex; flex-direction: column; gap: 8px; }
.market-mine-view > h4, .market-history > h4 { margin-top: 6px; }
.market-roadline { margin: 0; }
/* BOARD-UI: the suppliers' counters folded under one line; inside, each counter's rows in even columns */
.market-suppliers > summary { cursor: pointer; }
.market-suppliers .market-counter { padding: 0; background: none; border: 0; }
.market-counter { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 6px; }
.market-counter > h4, .market-counter > .notice-tip { grid-column: 1 / -1; }
.market-counterrow { display: grid; grid-template-columns: minmax(0, 1fr) auto 4.5em auto; gap: 4px 10px; }
.market-counterrow b { font-weight: normal; color: #f3ead8; overflow-wrap: anywhere; }
/* BOARD-UI: a form's fields under their names, the press at the row's end */
.market-fields { display: flex; flex-wrap: wrap; align-items: flex-end; gap: 8px 12px; }
.market-field { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.market-field-wide { flex: 1 1 200px; }
.market-field .notice-select { width: 100%; }
/* in the field's column a select's own flex-basis (AUDIT 31 U14's 160px) is its HEIGHT - the field takes the row's basis */
.market-field > * { flex: 0 0 auto; }
.market-formnotes:empty { display: none; }
.market-listing.state-sold, .market-listing.state-cancelled, .market-listing.state-expired, .market-listing.state-removed { opacity: 0.62; }
/* AUDIT 30 U5: a crafted row its own columns - its quality line the width the name gave up; at a phone's width two
   even columns, every cell able to shrink (the name drew 0px, the price over the road) */
.market-piece { grid-template-columns: minmax(0, 1.6fr) minmax(0, 1.4fr) auto minmax(0, 1.4fr); }
.market-row > * { min-width: 0; }
.market-where, .market-quality { overflow-wrap: anywhere; }
/* AUDIT 30 U14: the board's parchment ink (#5a4630) on the market's dark boxes read 1.6:1 - the market's own. (The
   popup's upper case and rule it once undid here never reach the tip since TOAST-SPLIT.) */
.market-body .notice-tip, .market-body .notice-label { color: #cdbd9f; }
/* PROF5b: an auction's row - its name, its quality and its standing bid across, where it stands and when it ends under */
.market-auction { grid-template-columns: minmax(0, 1.6fr) minmax(0, 1.2fr) auto; }
.market-auction .market-where { grid-column: 1 / -1; }
/* PROF6: the Work tab's guild writs (NOTICE1's guild blue - no guild's colours are stored until SEAT1c's heraldry) and
   commissions (green), "Yours", the forms - the market's dark boxes, the board's cards */
.notice-card.seal-commission, .notice-read.seal-commission { --seal: #3f7a3a; }
.notice-writ.seal-guild .writ-kind { color: #2f4a66; }
.notice-writ.seal-commission .writ-kind { color: #2f5a2b; }
.notice-writ .writ-take { flex-wrap: wrap; }
.notice-writ .work-num { width: 4.5em; }
.notice-writ .writ-banner { width: auto; height: 40px; align-self: flex-start; }
/* a card as narrow as its column - the Fill's select names a piece in full, and its longest name set the track's width */
.notice-grid > .notice-writ { min-width: 0; }
.notice-writ .work-select { max-width: 100%; min-width: 0; width: 100%; flex: 1 1 140px; text-overflow: ellipsis; }
.notice-writ .writ-need { overflow-wrap: anywhere; }
.work-more { display: flex; flex-direction: column; gap: 10px; margin-top: 10px; }
.work-yours, .work-form { display: flex; flex-direction: column; gap: 6px; padding: 6px 10px; background: rgba(10,8,6,0.5);
  border: 1px solid rgba(192,138,62,0.3); color: var(--bone, #e9e4d9); font-size: 12px; }
.work-head { margin: 0; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #efe0b8; }
.work-rows { display: flex; flex-direction: column; gap: 4px; margin: 0; padding: 0; list-style: none; }
.work-row { display: flex; flex-wrap: wrap; gap: 4px 10px; align-items: center; padding: 4px 8px; background: rgba(10,8,6,0.4);
  border-left: 2px solid var(--brass, #c08a3e); }
.work-what { flex: 1 1 220px; min-width: 0; overflow-wrap: anywhere; }
.work-where { color: #b9ab93; font-size: 11px; }
.work-fields { display: flex; flex-wrap: wrap; gap: 6px 10px; align-items: center; }
.work-fields .work-select { flex: 1 1 150px; min-width: 0; max-width: 100%; }
.work-num { width: 5.5em; }
.work-text { flex: 1 1 140px; min-width: 0; }
.work-hint { margin: 0; color: #cdbd9f; font-style: italic; }
.work-acts { display: flex; flex-wrap: wrap; gap: 8px; }
.work-open.on { border-color: var(--brass, #c08a3e); background: rgba(192,138,62,0.16); }
.work-none { font-style: italic; }
/* AUDIT 31 U2: every field under its visible name; U14: a field as tall as a button beside it, a form's select never
   clipped, an armed Decline marked */
.work-label { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.work-label-text { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #cdbd9f; }
.work-label-wide { flex: 1 1 150px; }
.work-label .work-select, .work-label .work-text { width: 100%; }
/* in the label's column a field's own flex-basis is its HEIGHT - a select 150px tall; the label takes the row's basis */
.work-label > .work-select, .work-label > .work-text, .work-label > .work-num, .work-label > .work-label-text { flex: 0 0 auto; }
.notice-writ .work-label-text { color: #5a4630; }
.work-fields .work-num, .notice-writ .work-num, .market-num { min-height: 32px; box-sizing: border-box; }
.work-decline.armed { border-color: #b8563a; color: #f3cf86; }
.notice-writ .work-label { flex: 1 1 140px; }
/* AUDIT 31 U14: a List form's select as wide as its form - a piece's long name set the form's width past a phone's.
   BOARD-UI: its width is its field's now (.market-field-wide) - a flex-basis here was the select's HEIGHT in the field */
.market-listform .notice-select, .market-orderform .notice-select { min-width: 0; max-width: 100%; text-overflow: ellipsis; }
.market-listform, .market-orderform, .market-mine-view { min-width: 0; max-width: 100%; }
/* AUDIT 31 U3: an auction's standing bid wraps under its name at a phone's width - "opening 500 Drakes - no bids yet"
   was cut to "opening 500 Drakes - no" */
.market-auction .market-price { white-space: normal; overflow-wrap: anywhere; }
/* a long maker's name cut the piece's own ("Silverthorn-of-the-Iliac's Mithril Longs...") - a Masterwork's name wraps */
.market-auction b { white-space: normal; overflow-wrap: anywhere; }
@media (max-width: 640px) { .market-row, .market-piece { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); } .market-row > b { grid-column: 1 / -1; }
  .market-line, .market-listhead { display: none; }
  .market-counter { grid-template-columns: minmax(0, 1fr); }
  /* AUDIT 657 B2: a counter's row on two lines at a phone's width - its name on the first, the price, the count and the
     press under it; four columns left the name none, a letter a line */
  .market-counterrow { grid-template-columns: minmax(0, 1fr) 4.5em auto; } .market-counterrow > b { grid-column: 1 / -1; }
  .market-views { flex-wrap: nowrap; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; }
  .market-viewgroup { flex: none; flex-wrap: nowrap; }
  .market-view { flex: none; white-space: nowrap; }
  .market-auction { grid-template-columns: minmax(0, 1fr); } .market-auction > * { grid-column: 1 / -1; }
  .market-row b { white-space: normal; overflow-wrap: anywhere; } }
@media (prefers-reduced-motion: reduce) { .prof-glint { animation: none; } .prof-toast { transition: none; } }
${Gc}
${Fc}`,F0=`
/* ── RARITY-UI: THE TIER ON THE ICON'S FRAME ── */
${N0()}
/* the pack's grid (and the remote pane's): the tile IS the icon's frame - and AUDIT 625 W3, the wallet's sheet's, whose
   pieces are the grid's own tiles */
.pack-shell .walletpieces .itemrow[data-rarity], .pack-shell .pack-dock .itemrow[data-rarity] {
  border-color: var(--rar-hi) var(--rar-lo) var(--rar-lo) var(--rar-hi);
  background-image: radial-gradient(ellipse at 50% 115%, rgba(var(--rar-rgb),0.26), transparent 68%),
    linear-gradient(180deg, rgba(255,255,255,0.06) 0 2px, transparent 2px);
  box-shadow: 0 0 0 1px #050608, inset 0 0 0 1px rgba(var(--rar-rgb),0.3), inset 0 0 12px rgba(var(--rar-rgb),0.2); }
.pack-shell .walletpieces .itemrow[data-rarity]:hover, .pack-shell .walletpieces .itemrow[data-rarity]:focus-visible,
.pack-shell .pack-dock .itemrow[data-rarity]:hover, .pack-shell .pack-dock .itemrow[data-rarity]:focus-visible {
  border-color: var(--rar-hi);
  box-shadow: 0 0 0 1px #050608, 0 0 9px rgba(var(--rar-rgb),0.6), inset 0 0 0 1px rgba(var(--rar-rgb),0.45),
    inset 0 0 16px rgba(var(--rar-rgb),0.32); }
.pack-shell .pack-dock .itemrow[data-rarity].on { border-color: var(--rar-hi); outline-color: rgba(var(--rar-rgb),0.7);
  box-shadow: 0 0 0 1px #050608, 0 0 12px rgba(var(--rar-rgb),0.55), inset 0 0 16px rgba(var(--rar-rgb),0.32); }
/* the tier's pips, bottom-left - the corner the key chip (top-left) and the count (bottom-right) leave free */
.pack-shell .walletpieces .itemrow[data-rarity]::before, .pack-shell .pack-dock .itemrow[data-rarity]::before { content: var(--rar-pips); position: absolute; left: 3px; bottom: 1px;
  font-size: 8px; line-height: 1; letter-spacing: 1px; color: var(--rar); pointer-events: none;
  text-shadow: 1px 1px 0 #050608, 0 0 4px rgba(var(--rar-rgb),0.7); }
/* UI1 (bible/10-UI/Slots-Hotbar-Status.md): THE SLOT IS THE FRAME, AND ONLY IT (Mac: "rarity outlines ... the
   UI/Hotbar border itself instead of it being an icon within an icon") - the sprite, fitted to the slot's 52px room
   (ui/iconFit.js), stands straight on the slot's own ground under the tier's border, in no second box. The stack's
   count takes the slot's last corner. */
.pack-shell .walletpieces .itemrow .count, .pack-shell .pack-dock .itemrow .count { right: 4px; bottom: 3px; z-index: 2; font-size: 11px; line-height: 1; color: #efe8d6;
  pointer-events: none; text-shadow: -1px 0 0 #050608, 1px 0 0 #050608, 0 -1px 0 #050608, 0 1px 0 #050608, 1px 1px 0 #050608; }
.pack-shell .walletpieces .itemrow.hasbar .count, .pack-shell .pack-dock .itemrow.hasbar .count { bottom: 7px; }
.pack-shell .walletpieces .itemrow[data-locked] .count, .pack-shell .pack-dock .itemrow[data-locked] .count { right: 16px; }   /* the padlock keeps the corner (LOCK1) */
/* a LIST's row keeps its engraved rule - the icon inside it is the frame (the loot window, the shop, a player trade) */
.pack-shell .loot-win .itemrow[data-rarity] .tile, .trade-shell .itemrow[data-rarity] .tile,
.ptrade-shell .itemrow[data-rarity] .tile {
  border: 2px solid; border-color: var(--rar-hi) var(--rar-lo) var(--rar-lo) var(--rar-hi);
  background: radial-gradient(ellipse at 50% 115%, rgba(var(--rar-rgb),0.3), transparent 70%), rgba(8,9,12,0.7);
  box-shadow: 0 0 0 1px #050608, inset 0 0 8px rgba(var(--rar-rgb),0.28); }
.pack-shell .loot-win .itemrow[data-rarity]:hover .tile, .trade-shell .itemrow[data-rarity]:hover .tile,
.ptrade-shell .itemrow[data-rarity]:hover .tile {
  box-shadow: 0 0 0 1px #050608, 0 0 8px rgba(var(--rar-rgb),0.55), inset 0 0 10px rgba(var(--rar-rgb),0.35); }
/* UI1b (Mac: "rarity outlines actually [on] the UI/Hotbar border itself instead of it being an icon within an icon"):
   A WORN PANEL IS ITS PIECE'S FRAME, as a grid slot and a shelf socket are - the tier on the panel's own border, lit
   from the top left, its glow behind the picture; the picture stands in no second box. It had been the list's rule: a
   small framed tile inside the big panel. */
/* AUDIT UI A2: :root first - a textured theme lays its stone on every tile at (0,5,0) (enhancedFrame.js themeCss), and
   at (0,4,0) this lost its glow to it under Stone; level with it, and later, it wins */
:root .pack-shell .equipped .wornrow[data-rarity] {
  border-color: var(--rar-hi) var(--rar-lo) var(--rar-lo) var(--rar-hi);
  background-image: radial-gradient(ellipse 72px 80% at 40px 50%, rgba(var(--rar-rgb),0.28), transparent),
    linear-gradient(180deg, rgba(255,255,255,0.06) 0 2px, transparent 2px);
  box-shadow: 0 0 0 1px #050608, inset 0 0 0 1px rgba(var(--rar-rgb),0.3), inset 0 0 12px rgba(var(--rar-rgb),0.18); }
.pack-shell .equipped .wornpair > .wornrow[data-rarity] {
  background-image: radial-gradient(ellipse at 50% 38%, rgba(var(--rar-rgb),0.28), transparent 70%),
    linear-gradient(180deg, rgba(255,255,255,0.06) 0 2px, transparent 2px); }
.pack-shell .equipped .wornrow[data-rarity]:hover, .pack-shell .equipped .wornrow[data-rarity]:focus-visible {
  border-color: var(--rar-hi);
  box-shadow: 0 0 0 1px #050608, 0 0 9px rgba(var(--rar-rgb),0.6), inset 0 0 0 1px rgba(var(--rar-rgb),0.45),
    inset 0 0 16px rgba(var(--rar-rgb),0.32); }
.pack-shell .equipped .wornrow[data-rarity].on { border-color: var(--rar-hi); outline-color: rgba(var(--rar-rgb),0.7);
  box-shadow: 0 0 0 1px #050608, 0 0 12px rgba(var(--rar-rgb),0.55), inset 0 0 16px rgba(var(--rar-rgb),0.32); }
/* the shelf's sockets are their icons' frames */
.pack-shell .wornsock[data-rarity] { border-color: var(--rar-hi) var(--rar-lo) var(--rar-lo) var(--rar-hi);
  box-shadow: 0 0 0 1px #050608, inset 0 0 10px rgba(var(--rar-rgb),0.3); }
.pack-shell .wornsock[data-rarity]:hover { box-shadow: 0 0 0 1px #050608, 0 0 8px rgba(var(--rar-rgb),0.55), inset 0 0 12px rgba(var(--rar-rgb),0.36); }
/* the carried tile keeps its tier in the hand */
.dragghost[data-rarity] .tile.has-icon, .dragghost[data-rarity] .tile { border: 2px solid;
  border-color: var(--rar-hi) var(--rar-lo) var(--rar-lo) var(--rar-hi); box-shadow: 0 0 10px rgba(var(--rar-rgb),0.55); }
/* the hotbar and the crossbar: the slot's own frame */
.hb .hb-slot[data-rarity] .hb-frame { border-color: var(--rar-hi) var(--rar-lo) var(--rar-lo) var(--rar-hi);
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.55), inset 0 0 12px rgba(var(--rar-rgb),0.3); }
.hb .hb-slot.hb-active[data-rarity] .hb-frame { border-color: var(--rar-hi);
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.55), inset 0 0 14px rgba(192,138,62,0.35), 0 0 8px rgba(var(--rar-rgb),0.6); }
/* the quickslot diamond: the frame is a clipped rhombus, so its colour is a BACKGROUND (enhancedStyle's own note) */
.hud-qdiamond .hud-qcell[data-rarity]:not(.socket) .hud-qframe {
  background: linear-gradient(135deg, var(--rar-hi) 0%, var(--rar) 45%, var(--rar-lo) 100%); }
/* the card: the name in the tier's colour, the tier's word marked, the big picture lit from below */
.inv-tip .card[data-rarity] h3, .inv-info .card[data-rarity] .inv-info-box:first-child p:first-child,
.pack-shell .packdetail .card[data-rarity] h3 { color: var(--rar); text-shadow: 1px 1px 0 #050608, 0 0 8px rgba(var(--rar-rgb),0.45); }
.card[data-rarity] > ul.rarity > li:first-child, .card[data-rarity] > .card-body > ul.rarity > li:first-child { color: var(--rar); letter-spacing: 0.18em; }
.card[data-rarity] > ul.rarity > li:first-child::before, .card[data-rarity] > .card-body > ul.rarity > li:first-child::before { content: var(--rar-pips); margin-right: 6px; font-size: 9px;
  letter-spacing: 1px; text-shadow: 0 0 4px rgba(var(--rar-rgb),0.7); }
.inv-tip > .card[data-rarity] { border-top-color: var(--rar); }
.bigicon[data-rarity] img { filter: drop-shadow(0 0 7px rgba(var(--rar-rgb),0.55)) drop-shadow(1px 1px 0 #050608); }
/* GILDED1: THE GOLD LEAF CATCHES THE LIGHT. A Gilded piece's frame breathes a gold glow - stepped, so it reads as
   pixels and not as a blur - wherever it stands: a pack tile, a worn row and socket, a hotbar slot. The states above and
   below still win the moment they last (a drop target, a refusal); a player who asks the system for less motion gets a
   still glow at its brighter end. */
@keyframes gilded-glow { from { box-shadow: 0 0 0 1px #050608, 0 0 5px rgba(255,207,77,0.35), inset 0 0 9px rgba(255,207,77,0.16); }
  to { box-shadow: 0 0 0 1px #050608, 0 0 12px rgba(255,207,77,0.72), inset 0 0 15px rgba(255,207,77,0.32); } }
.pack-shell .pack-dock .itemrow[data-rarity="gilded"], .pack-shell .walletpieces .itemrow[data-rarity="gilded"],
.pack-shell .equipped .wornrow[data-rarity="gilded"], .pack-shell .wornsock[data-rarity="gilded"],
.hb .hb-slot[data-rarity="gilded"] .hb-frame, .hud-qdiamond .hud-qcell[data-rarity="gilded"]:not(.socket) .hud-qframe {
  animation: gilded-glow 2.6s steps(8, end) infinite alternate; }
.bigicon[data-rarity="gilded"] img { filter: drop-shadow(0 0 9px rgba(255,207,77,0.8)) drop-shadow(0 0 2px #fff1b8) drop-shadow(1px 1px 0 #050608); }
@media (prefers-reduced-motion: reduce) {
  .pack-shell .pack-dock .itemrow[data-rarity="gilded"], .pack-shell .walletpieces .itemrow[data-rarity="gilded"],
  .pack-shell .equipped .wornrow[data-rarity="gilded"], .pack-shell .wornsock[data-rarity="gilded"],
  .hb .hb-slot[data-rarity="gilded"] .hb-frame, .hud-qdiamond .hud-qcell[data-rarity="gilded"]:not(.socket) .hud-qframe {
    animation: none; box-shadow: 0 0 0 1px #050608, 0 0 12px rgba(255,207,77,0.72), inset 0 0 15px rgba(255,207,77,0.32); } }
/* AUDIT MERGE-PLUS D2: a list's picture keeps its icon INSIDE the tier's 2px frame - a worn pair's 28px tile is
   border-box, and its 28px icon cap painted over two of the frame's four edges */
.pack-shell .loot-win .itemrow[data-rarity] .tile img, .trade-shell .itemrow[data-rarity] .tile img,
.ptrade-shell .itemrow[data-rarity] .tile img { max-width: 100%; max-height: 100%; }
/* AUDIT MERGE-PLUS D1: A TIER NEVER HIDES A STATE. The tier's frame is laid after the kit and outranks it, so every
   passing state painted on the same frame is said again here, at the tier's weight and after it: the reorder's
   insertion mark, the picked socket (and a socket as a drop target), the hotbar's strike, refusal and drop target,
   the refused drag. The state wins the moment it lasts; the tier's glow stays under it where there is room. */
.pack-shell .walletpieces .itemrow[data-rarity].dragover, .pack-shell .pack-dock .itemrow[data-rarity].dragover {
  box-shadow: 0 0 0 1px #050608, inset 0 2px 0 #c08a3e, inset 0 0 12px rgba(var(--rar-rgb),0.2); }
.pack-shell .wornsock[data-rarity].on { border-color: var(--rar-hi); outline-color: rgba(var(--rar-rgb),0.7);
  background-image: linear-gradient(180deg, rgba(243,207,134,0.14) 0 2px, rgba(192,138,62,0.08) 2px);
  box-shadow: 0 0 0 1px #050608, 0 0 12px rgba(var(--rar-rgb),0.55), inset 0 0 16px rgba(var(--rar-rgb),0.32); }
.pack-shell .wornsock[data-rarity].dragover { box-shadow: 0 0 0 1px #050608, inset 0 2px 0 #c08a3e, inset 0 0 10px rgba(var(--rar-rgb),0.3); }
.hb .hb-slot[data-rarity].hb-strike .hb-frame { border-color: #f3cf86 #c08a3e #7a5424 #f3cf86; }
.hb .hb-slot[data-rarity].hb-deny .hb-frame { border-color: var(--blood, #8c3a32); }
.hb .hb-slot[data-rarity].dragover .hb-frame { border-color: var(--verdigris, #4e7f72); border-style: solid; }
.dragghost.refused[data-rarity] .tile.has-icon, .dragghost.refused[data-rarity] .tile { border-color: var(--blood, #8c3a32);
  box-shadow: 0 0 10px rgba(140,58,50,0.55); }

/* ── SIGIL-UI: THE RUNE IN THE CORNER, AND THE SIGIL'S OWN BLOCK ── */
${L0}
/* AUDIT MERGE-PLUS D5: the corner rune is a PICTURE with its black outline drawn in (ui/sigilRune.js
   SIGIL_RUNE_TILE_SVG), as the padlock is - it was a mask over the teal, and a masked glyph's drop shadow is clipped
   by its own mask, so the outline and glow it was given never drew. D6: and every picture markItemFrame marks
   wears it - the loot window's, the shop's and the trade's rows and the carried tile, not only the grid's. */
.pack-shell .pack-dock .itemrow[data-sigil]::after, .pack-shell .wornsock[data-sigil]::after,
.pack-shell .equipped .wornrow[data-sigil]::after, .hb .hb-slot[data-sigil]::before,
.hud-qdiamond .hud-qcell[data-sigil]:not(.socket) .hud-qbody::after,
.pack-shell .loot-win .itemrow[data-sigil] .tile::after, .trade-shell .itemrow[data-sigil] .tile::after,
.ptrade-shell .itemrow[data-sigil] .tile::after, .dragghost[data-sigil] .tile::after {
  content: ''; position: absolute; width: 11px; height: 11px; pointer-events: none; z-index: 2;
  background: ${oi} center / contain no-repeat;
  animation: sigil-breathe 2.4s steps(6, end) infinite alternate; }
.pack-shell .pack-dock .itemrow[data-sigil]::after, .pack-shell .wornsock[data-sigil]::after,
.pack-shell .equipped .wornrow[data-sigil]::after { right: 3px; top: 3px; }   /* UI1b: the panel is the frame, so its corner */
.pack-shell .equipped .wornrow[data-sigil] .worncount { right: 18px; }   /* the family's count steps off the rune's corner */
.dragghost[data-sigil] .tile { position: relative; }
.pack-shell .loot-win .itemrow[data-sigil] .tile::after,
.trade-shell .itemrow[data-sigil] .tile::after, .ptrade-shell .itemrow[data-sigil] .tile::after,
.dragghost[data-sigil] .tile::after { right: -4px; top: -4px; width: 9px; height: 9px; }
.hb .hb-slot[data-sigil]::before { right: 3px; bottom: 9px; }
.hud-qdiamond .hud-qcell[data-sigil]:not(.socket) .hud-qbody::after { left: calc(50% - 6px); top: 12%; width: 12px; height: 12px; }
${D0}
${M0}
@media (prefers-reduced-motion: reduce) {
  .sigil-rune, .pack-shell .pack-dock .itemrow[data-sigil]::after, .pack-shell .wornsock[data-sigil]::after,
  .pack-shell .equipped .wornrow[data-sigil]::after, .hb .hb-slot[data-sigil]::before,
  .hud-qdiamond .hud-qcell[data-sigil]:not(.socket) .hud-qbody::after,
  .pack-shell .loot-win .itemrow[data-sigil] .tile::after, .trade-shell .itemrow[data-sigil] .tile::after,
  .ptrade-shell .itemrow[data-sigil] .tile::after, .dragghost[data-sigil] .tile::after { animation: none; } }
/* ── SET5: A SET PIECE'S RUNE IN ITS SET'S COLOUR, ITS SET'S BLOCK ON THE CARD, THE DOLL'S STRIP (ui/setCard.js) ──
   The rune: markItemFrame writes --set-rune (ui/sigilRune.js sigilRuneTileUrl, the set's colour) beside data-set, and
   this rule - the rune rule's own selectors, later and as specific - swaps the picture; every other line of the rune
   stays the sigil's. The block and the strip take --set, --set-hi, --set-lo and --set-rgb from the set's record
   (setShades), so the sheet names no set. */
.pack-shell .pack-dock .itemrow[data-set]::after, .pack-shell .wornsock[data-set]::after,
.pack-shell .equipped .wornrow[data-set]::after, .hb .hb-slot[data-set]::before,
.hud-qdiamond .hud-qcell[data-set]:not(.socket) .hud-qbody::after,
.pack-shell .loot-win .itemrow[data-set] .tile::after, .trade-shell .itemrow[data-set] .tile::after,
.ptrade-shell .itemrow[data-set] .tile::after, .dragghost[data-set] .tile::after { background-image: var(--set-rune); }
${H0}
${C0}
.setstrip { display: flex; flex-direction: column; gap: 4px; margin: 8px 0 0; flex: 0 0 auto;
  max-height: 136px; overflow-y: auto; overscroll-behavior: contain; }   /* CARD-FIT U16: five lines, then it scrolls - eight sets can be worn at once, and the column clips */
.setline { display: flex; align-items: center; gap: 8px; min-height: 24px; padding: 2px 8px; cursor: pointer; text-align: left;
  font: inherit; font-size: 12px; color: #e8dcc6; border: 1px solid; border-color: var(--set-hi) var(--set-lo) var(--set-lo) var(--set-hi);
  background: linear-gradient(90deg, rgba(var(--set-rgb),0.22), rgba(10,8,6,0.82) 70%); box-shadow: 0 0 0 1px #050608; }
.setline:hover, .setline:focus-visible { background: linear-gradient(90deg, rgba(var(--set-rgb),0.36), rgba(10,8,6,0.82) 76%); outline: none; }
.setline-name { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--set);
  letter-spacing: 0.04em; text-shadow: 1px 1px 0 #050608; }
.setline-count { font-variant-numeric: tabular-nums; color: var(--set-hi); }
.setline-pips { display: inline-flex; gap: 4px; padding: 0 2px; }
.setline-pips i { width: 7px; height: 7px; transform: rotate(45deg); background: rgba(0,0,0,0.6); border: 1px solid #5d5245; }
.setline-pips i.on { background: var(--set); border-color: var(--set-hi); box-shadow: 0 0 4px rgba(var(--set-rgb),0.7); }
.setline-stage { min-width: 64px; text-align: right; color: #b9ab93; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; }
@media (pointer: coarse) { .setline { min-height: 40px; } .setstrip { max-height: 216px; } }   /* AUDIT SET U14: a line a thumb presses, as every other press on a touch screen */
${j0}
${U0}
${P0}
${q0}
${G0}
${_0}
/* ── WEAR-UI: THE HOTBAR'S WEAR BAR, ON EVERY PICTURE OF A PIECE THAT WEARS (ui/enhancedInventory.js wearBar) ──
   The hotbar's own bar (3px, a hard black ring, its green and its red under 40), a lit pixel on top like every fill
   here. Along the foot of a grid tile or a socket; inside the foot of a list's picture. A broken piece's track goes
   to blood. The grid's tier pips step up over it. */
.pack-shell .wear, .trade-shell .wear, .ptrade-shell .wear { position: absolute; left: 4px; right: 4px; bottom: 2px; height: 3px;
  display: block; z-index: 1; pointer-events: none; background: rgba(5,6,8,0.82); box-shadow: 0 0 0 1px #050608; }
.pack-shell .wear > i, .trade-shell .wear > i, .ptrade-shell .wear > i { display: block; height: 100%;
  background: linear-gradient(180deg, #c8f5da 0 1px, #74d9a0 1px); }
.pack-shell .wear.worn > i, .trade-shell .wear.worn > i, .ptrade-shell .wear.worn > i { background: linear-gradient(180deg, #f5bdb4 0 1px, #d98074 1px); }
.pack-shell .wear.broken, .trade-shell .wear.broken, .ptrade-shell .wear.broken { background: rgba(122,29,22,0.9); }
.pack-shell .loot-win .itemrow .tile, .pack-shell .wornrow .tile, .trade-shell .itemrow .tile, .ptrade-shell .itemrow .tile { position: relative; }
.pack-shell .loot-win .itemrow .wear, .pack-shell .wornrow .wear, .trade-shell .itemrow .wear, .ptrade-shell .itemrow .wear { left: 2px; right: 2px; bottom: 0; }
.pack-shell .walletpieces .itemrow.hasbar[data-rarity]::before, .pack-shell .pack-dock .itemrow.hasbar[data-rarity]::before { bottom: 6px; }
/* ── LOCK1: THE PADLOCK ON A LOCKED PIECE (systems/itemLock.js) - bottom-right of a grid tile or a socket (above the
   wear bar's end when there is one; the key chip has the top-left), the top-left corner of a list's picture (the
   rune has its top-right). The card says it in words. */
.pack-shell [data-locked] .tile::before, .trade-shell [data-locked] .tile::before, .ptrade-shell [data-locked] .tile::before {
  content: ''; position: absolute; right: 2px; bottom: 2px; width: 11px; height: 11px; z-index: 2; pointer-events: none;
  background: ${La} center / contain no-repeat; }
.pack-shell .hasbar[data-locked] .tile::before { bottom: 6px; }
.pack-shell .loot-win [data-locked] .tile::before,
.trade-shell [data-locked] .tile::before, .ptrade-shell [data-locked] .tile::before { right: auto; bottom: auto; left: -4px; top: -4px; }
/* UI1b: a worn panel's padlock is the panel's, top left - the rune has its top right */
.pack-shell .equipped .wornrow[data-locked] .tile::before { content: none; }
.pack-shell .equipped .wornrow[data-locked]::before { content: ''; position: absolute; left: 3px; top: 3px; width: 11px; height: 11px;
  z-index: 2; pointer-events: none; background: ${La} center / contain no-repeat; }
.card .lockline, .card .boundline, .pack-shell .card p.lockline, .pack-shell .card p.boundline { margin: 6px 0 4px; font-size: 12px; letter-spacing: 0.04em; color: #f3cf86; text-shadow: 1px 1px 0 #050608; }
.card .lockline::before { content: ''; display: inline-block; width: 11px; height: 11px; margin-right: 6px; vertical-align: -1px;
  background: ${La} center / contain no-repeat; }
/* ── LOOT18: A JUNK PIECE (systems/itemJunk.js) - its picture dimmed and greyed wherever it is drawn; the card says it in
   words, in the lock's line style without the padlock, muted. */
.pack-shell [data-junk] .tile > *, .trade-shell [data-junk] .tile > *, .ptrade-shell [data-junk] .tile > * { opacity: 0.5; filter: grayscale(0.7); }
.card .junkline, .pack-shell .card p.junkline { color: #a89f88; }
`,Cr="#e2dccd",zi="#fbf8f0",B0="#ffd98a",jr="#ffc4bb",V="-1px 0 0 #050608, 1px 0 0 #050608, 0 -1px 0 #050608, 0 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.7)",Ur="linear-gradient(180deg, #f3cf86 0 2px, transparent 2px), linear-gradient(90deg, #e2b064 0 2px, #c08a3e 2px 4px, #7a5424 4px 6px)",W0=`
/* A native hover turned the words to ink on a brass fill; the kit's hover keeps the ground dark, so the words stay
   bone. Where the native hover outweighed the kit's (a :not() in it), the kit's hover is said again at its weight. */
body .dfprofile-close:hover, body .dfdecor-btn:hover, body .dfduel-btn:hover, body .dfdecor-open:hover { color: var(--bone, #e9e4d9); }
body .dfpage-btn:hover:not(:disabled), body .dfpeer-btn:not(.cancel):hover:not([disabled]) {
  color: var(--bone, #e9e4d9); background-color: ${f.groundButtonHi};
  background-image: linear-gradient(180deg, rgba(255,255,255,0.08) 0 2px, transparent 2px calc(100% - 3px), rgba(0,0,0,0.32) calc(100% - 3px)); }
body .dfpeer-btn.cancel:hover:not([disabled]) { background: none; color: var(--bone, #e9e4d9); }
/* The lane drew its presses borderless or on a 1px line, so the kit's bevel had no edge to paint: a 2px edge (width
   and style only - the kit owns the colour), taken out of the padding so each press keeps its size (the sheet is
   border-box). The touch skin's own paddings outweigh these and stand. */
body .dfsocial-btn, body .dfsocial-close, body .dfprofile-close, body .dfprofile-duel, body .dfprofile-wed, body .dfpage-btn, body .dfpeer-btn:not(.cancel),
body .dfduel-btn, body .dfdecor-btn, body .dfdecor-open { border-width: 2px; border-style: solid; }
body .dfsocial-btn { padding: 2px 6px; }
body .dfsocial-close { padding: 0 6px; }
body .dfprofile-close, body .dfpage-btn { padding: 4px 10px; }
body .dfprofile-duel, body .dfprofile-wed { padding: 5px 11px; }
body .dfpeer-btn:not(.cancel) { padding: 4px 6px; }
body .dfduel-btn { padding: 3px 11px; }
body .dfdecor-btn { padding: 3px 13px; }
body .dfdecor-open { padding: 5px 11px; }
/* the duel strip: the skin's pixel face (it was the page's own), and the challenge's blood down its left edge */
body .dfduel-toast { ${re} border-left-color: #b83a2e;
  box-shadow: 0 0 0 1px #050608, inset 3px 0 0 #b83a2e, inset 0 0 0 1px rgba(5,6,8,0.75), 3px 3px 0 1px rgba(0,0,0,0.4); }
/* the Social panel: the tab's count a red seal, the presence dot a square gem, a letter's row marked like a list's */
body .dfsocial-badge { background: #b83a2e; color: #fff6ee; box-shadow: 0 0 0 1px #050608, inset 0 1px 0 rgba(255,255,255,0.28);
  text-shadow: 1px 1px 0 rgba(0,0,0,0.55); }
body .dfsocial-dot { border-radius: 0; }
body .dfsocial-row .dfsocial-dot, body .dfsocial-letter .dfsocial-dot.unread { box-shadow: 0 0 0 1px #050608, inset 1px 1px 0 rgba(255,255,255,0.3); }
body .dfsocial-letter:hover, body .dfsocial-letter:focus-visible { box-shadow: inset 2px 0 0 ${f.brass}; }
body .dfsocial-sec { color: #b3a684; }
/* the decorator: the chosen piece carries the list's brass mark */
body .dfdecor-row[aria-selected="true"] { box-shadow: 0 1px 0 rgba(163,152,128,0.1), inset 2px 0 0 ${f.brass}; }
/* RENOWN, wherever a name wears it: the box is a brass plaque - over a player's head, on the profile card and on the
   HUD's own row */
body .dfname-renown, body .dfprofile-renown, .hud-renownbox { border-radius: 0; border-color: ${f.brassHi} ${f.brassLo} #5c3f1a ${f.brass};
  background: rgba(12,14,18,0.88); color: ${f.brassHi}; box-shadow: 0 0 0 1px #050608, 2px 2px 0 1px rgba(0,0,0,0.45);
  text-shadow: 1px 1px 0 #050608; }
/* RENOWN4's bar, the vitals' way (VB2): a stone bevel, the gold banded from a lit top, a lit leading edge, what is
   earned and not yet answered paler after it, a brass clasp at each end. Paint only - the row keeps its 22px.
   UI3: at the vitals' own height now, so banded as they are (a lit 2px, the light, the body, the low, the deep), and
   the XP inside it in their numbers' face. */
.hud-renown .hud-renowntrack { border-color: #9a9079 #3a352a #25221b #6e6755; isolation: isolate;
  background: linear-gradient(180deg, rgba(0,0,0,0.6) 0 2px, transparent 2px), #171208;
  box-shadow: 0 0 0 1px #050608, 2px 2px 0 1px rgba(0,0,0,0.45); }
.hud-renown .hud-fill { background: linear-gradient(180deg, #fff0b8 0 2px, #f2c46b 2px 6px, #d9a441 6px 13px, #a87a2a 13px 17px, #6e4f1a 17px 100%); }
.hud-renown .hud-fill::after { content: ''; position: absolute; top: 0; bottom: 0; right: 0; width: min(2px, 100%); background: #fff0b8; opacity: 0.85; }
.hud-renownghost { background: linear-gradient(180deg, rgba(255,240,184,0.5) 0 2px, rgba(242,196,107,0.3) 2px); }
.hud-renownnum { color: #fffaf0; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.7); }
.hud-renown .hud-renowntrack::before, .hud-renown .hud-renowntrack::after { content: ''; position: absolute; top: -2px; bottom: -2px;
  width: 6px; z-index: 2; box-shadow: 0 0 0 1px #050608; background: ${Ur}; }
.hud-renown .hud-renowntrack::before { left: -6px; }
.hud-renown .hud-renowntrack::after { right: -6px; }
/* the party's lines in the vitals' own tones, banded from a lit top, each in a hard black ring */
body .dfparty-track { background: rgba(5,6,8,0.72); box-shadow: 0 0 0 1px #050608, 1px 1px 0 1px rgba(0,0,0,0.35); }
body .dfparty-vital.health .dfparty-fill { background: linear-gradient(180deg, #f2a597 0 1px, #d8685a 1px 2px, #b53a2e 2px 4px, #8a2820 4px); }
body .dfparty-vital.fatigue .dfparty-fill { background: linear-gradient(180deg, #b9f0c4 0 1px, #2f9152 1px); }
body .dfparty-vital.magicka .dfparty-fill { background: linear-gradient(180deg, #b7c8ff 0 1px, #3f5fc4 1px); }
/* THE GATE (WB2, WB4): the boss's bar is a vital - the stone bevel, the fire banded from a lit top with a lit edge,
   the phase marks cut in, brass clasps, the ward a brass cage around it - and the words are the HUD's: the pixel
   face, outlined. The fire's own colours stay his. */
body .wb-boss-bar { ${re} letter-spacing: 0.06em; color: #efe8d6; text-shadow: 1px 1px 0 #050608, 2px 2px 0 rgba(0,0,0,0.7); }
body .wb-boss-name { font-size: 14px; letter-spacing: 0.14em; text-shadow: ${V}; }
/* WB13c: his epithet under his name; the trailing segment the foe bar's own */
body .wb-boss-sub { font-size: 11px; letter-spacing: 0.08em; color: #d8cfae; text-shadow: ${V}; }
body .wb-boss-ghost { background: linear-gradient(180deg, #fff6e4 0 2px, #ffc08a 2px); opacity: 0.6; }
/* WB9a: the night's marks under his health - each chip its sign and name, in the HUD's pixel face */
body .wb-boss-marks { column-gap: 14px; margin: 3px 0 4px; }
body .wb-boss-chip { text-shadow: ${V}; }
body .wb-boss-chip-head { font-size: 11px; letter-spacing: 0.12em; color: #efe8d6; }
body .wb-boss-chip-icon { filter: drop-shadow(1px 1px 0 #050608); }
body .wb-boss-chip-name { font-size: 11px; }
body .wb-boss-track { margin: 7px 0 6px; border: 2px solid; border-color: #9a9079 #3a352a #25221b #6e6755; isolation: isolate;
  background: linear-gradient(180deg, rgba(0,0,0,0.6) 0 2px, transparent 2px), #1e0906;
  box-shadow: 0 0 0 1px #050608, 3px 3px 0 1px rgba(0,0,0,0.45); }
body .wb-boss-fill { background: linear-gradient(180deg, #ffc08a 0 2px, #ff7a3a 2px 4px, #d8341a 4px 8px, #9a1a0a 8px 10px, #5c0a04 10px); }
body .wb-boss-fill::after { content: ''; position: absolute; top: 0; bottom: 0; right: 0; width: min(2px, 100%); background: #ffd9a8; opacity: 0.85; }
body .wb-boss-mark { top: 0; bottom: 0; z-index: 1; background: linear-gradient(90deg, #050608 0 1px, rgba(255,230,200,0.55) 1px); }
/* WB13c: the ward a lit cage, apart from the frame's brass */
body .wb-boss-ward { inset: -5px; border-color: #ffe9a8; box-shadow: 0 0 0 1px #050608, 0 0 0 3px rgba(255,210,122,0.45), inset 0 0 0 1px #050608; }
body .wb-boss-track::before, body .wb-boss-track::after { content: ''; position: absolute; top: -2px; bottom: -2px; width: 6px; z-index: 2;
  box-shadow: 0 0 0 1px #050608; background: ${Ur}; }
body .wb-boss-track::before { left: -6px; }
body .wb-boss-track::after { right: -6px; }
body .wb-boss-callout { font-size: 15px; letter-spacing: 0.12em; text-shadow: ${V}; }
body .wb-boss-callout.cin { animation-timing-function: steps(3); }
/* WB13c: the line to the landing a hard pixel; Dagon's plate and MOVE in a black ring, no glow */
body .wb-boss-callout-line { height: 2px; box-shadow: 0 1px 0 #050608; opacity: 1; }
body .wb-boss-callout.dagon .wb-boss-callout-text { font-size: 15px; color: #efe8d6; box-shadow: 0 0 0 1px #050608, 2px 2px 0 1px rgba(0,0,0,0.45); }
body .wb-boss-move { font-size: 12px; color: #fff6e4; background: #b8320c; box-shadow: 0 0 0 1px #050608, 2px 2px 0 1px rgba(0,0,0,0.45); }
body .wb-boss-foot { font-size: 11px; opacity: 1; color: #d8cfae; }
body .wb-boss-tag { background: rgba(5,6,8,0.6); border-color: #3a352a; box-shadow: 1px 1px 0 rgba(0,0,0,0.45); text-shadow: ${V}; }
body .wb-boss-wrath { color: #ff9a7a; border-color: #8a2820; }
body .wb-boss-wrath.near { color: #fff6e4; }
@media (max-width: 640px) { body .wb-boss-chip-head, body .wb-boss-chip-name { font-size: 11px; letter-spacing: 0; } }   /* FONT3's floor: a phone narrows the chip by its tracking, not under 11px */
body .wb-gate-banner { ${re} font-size: 14px; letter-spacing: 0.14em; text-shadow: ${V}; }
body .wb-gate-banner.sd-brass { text-shadow: ${V}; }   /* AUDIT SD III (T3): an Abyss Dungeon's door outlined as the gate's, in its own brass - its glow is the classic skin's */
/* WB13e: the fight's beats in the HUD's face, outlined - the name large, the rule a brass line */
body .wb-title-card { ${re} color: #efe8d6; text-shadow: ${V}; }
body .wb-title-kicker { font-size: 12px; letter-spacing: 0.3em; color: ${f.brassHi}; }
body .wb-title-main { font-size: 34px; letter-spacing: 0.12em; color: #fff6e4; text-shadow: ${V}, 0 0 14px rgba(255,90,30,0.45); }
body .wb-title-rule { height: 2px; background: linear-gradient(90deg, transparent, ${f.brass}, transparent); box-shadow: 0 1px 0 #050608; }
body .wb-title-sub { font-size: 14px; letter-spacing: 0.06em; color: #d8cfae; }
@media (max-width: 640px), (max-height: 480px) { body .wb-title-main { font-size: 24px; } body .wb-title-sub { font-size: 12px; } }
/* AUDIT SD III (T4): the Hour's card the same way - the HUD's face, outlined - in its own brass and light (it stood in the
   serif on the Plus skin, the one readout of the fight's that did) */
body .sd-title-card { ${re} color: #efe8d6; text-shadow: ${V}; }
body .sd-title-kicker { font-size: 12px; letter-spacing: 0.3em; color: ${f.brassHi}; }
body .sd-title-main { font-size: 34px; letter-spacing: 0.12em; color: #fff1cf; text-shadow: ${V}, 0 0 14px rgba(232,192,96,0.45); }
body .sd-title-rule { height: 2px; background: linear-gradient(90deg, transparent, ${f.brass}, transparent); box-shadow: 0 1px 0 #050608; }
body .sd-title-sub { font-size: 14px; letter-spacing: 0.06em; color: #d8cfae; }
@media (max-width: 640px), (max-height: 480px) { body .sd-title-main { font-size: 24px; } body .sd-title-sub { font-size: 12px; } }
/* FONT3 + WB13c (both 2026-10-02, the same surface found from two sides; the dress is WB13c's, the weight FONT3's
   reading 500): the ground's warning in the HUD's face, outlined on a dark band (it stood in the serif among pixel words, orange
   on the orange rim); the way out's arrow in a hard black edge */
body .wb-ground-warn { ${re} font-size: 16px; letter-spacing: 0.1em; text-shadow: ${V};
  background: rgba(5,6,8,0.55); padding: 2px 8px; box-shadow: 0 0 0 1px rgba(5,6,8,0.8); }
body .wb-ground-arrow svg { filter: drop-shadow(1px 0 0 #050608) drop-shadow(-1px 0 0 #050608) drop-shadow(0 1px 0 #050608) drop-shadow(0 -1px 0 #050608); }
/* WB9a: the marks' card - a stone panel in the brass frame, the pixel face outlined; each aspect keeps its own colour */
body .wb-marks-card { ${re} letter-spacing: 0.05em; color: #efe8d6; text-shadow: ${V};
  background: linear-gradient(180deg, rgba(0,0,0,0.5) 0 2px, transparent 2px), rgba(20,14,10,0.92);
  border: 2px solid; border-color: ${f.brassHi} ${f.brassLo} #5c3f1a ${f.brass};
  box-shadow: 0 0 0 1px #050608, 3px 3px 0 1px rgba(0,0,0,0.45); }
body .wb-marks-title { font-size: 11px; letter-spacing: 0.2em; color: ${f.brassHi}; }
body .wb-marks-sub { font-size: 14px; color: #efe8d6; }
body .wb-marks-name { font-size: 12px; letter-spacing: 0.12em; }
body .wb-marks-text { font-size: 11px; color: #d8cfae; opacity: 1; }
body .wb-marks-tip { font-size: 11px; font-style: normal; color: #b9ab86; opacity: 1; }
/* GATE-UX: the damage chart - the marks' card's stone panel and brass frame, the pixel face outlined, the bars the
   fire's one hue banded from a lit top; my row a brass ring and its words */
body .wb-dmg-chart { ${re} letter-spacing: 0.04em; color: #efe8d6; text-shadow: ${V};
  background: linear-gradient(180deg, rgba(0,0,0,0.5) 0 2px, transparent 2px), rgba(20,14,10,0.92);
  border: 2px solid; border-color: ${f.brassHi} ${f.brassLo} #5c3f1a ${f.brass};
  box-shadow: 0 0 0 1px #050608, 3px 3px 0 1px rgba(0,0,0,0.45); }
body .wb-dmg-title { font-size: 11px; letter-spacing: 0.2em; color: ${f.brassHi}; }
body .wb-dmg-sub { font-size: 13px; color: #efe8d6; }
body .wb-dmg-head { font-size: 11px; letter-spacing: 0.1em; color: #b9ab86; border-bottom-color: rgba(154,144,121,0.45); }
body .wb-dmg-name { font-size: 12px; }
body .wb-dmg-lv { font-size: 11px; color: #d8cfae; opacity: 1; }
body .wb-dmg-you { font-size: 11px; color: ${f.brassHi}; }
body .wb-dmg-num { font-size: 11px; letter-spacing: 0; }   /* AUDIT FONT3 L7: a five-digit Best in its 44px column */
body .wb-dmg-track { background: rgba(5,6,8,0.72); box-shadow: 0 0 0 1px #050608; border-radius: 0; }
body .wb-dmg-fill { background: linear-gradient(180deg, #ffc08a 0 1px, #ff7a3a 1px 2px, #d8341a 2px); border-radius: 0; }
body .wb-dmg-mine { outline: 1px solid ${f.brassHi}; background: rgba(192,138,62,0.14); }
body .wb-dmg-more { font-size: 11px; font-style: normal; color: #b9ab86; opacity: 1; }
/* ARENA2: THE BOUT'S HUD (ui/arenaHud.js) - the plate is a panel and the clock and the crowd's marks chips (the kit's
   roles); here what a role cannot say: the HUD's words in the pixel face outlined, each track a vital's stone bevel
   with its fill banded from a lit top (health the vitals' red, stamina their green, the crowd's mood brass), the
   crowd's middle a brass tick, the darling's mark brass and the villain's blood, my own name brass, a banner's mark
   down the plate's inner edge (ARENA3's teams paint it; today mine brass, theirs blood). */
body .arena-hud { ${re} font-weight: 400; color: #efe8d6; text-shadow: ${V}; }
body .arena-plate { padding: 7px 12px 8px; }
body .arena-track { border: 2px solid; border-color: #9a9079 #3a352a #25221b #6e6755; background: rgba(5,6,8,0.78);
  box-shadow: 0 0 0 1px #050608; }
body .arena-fill { background: linear-gradient(180deg, #f2a597 0 2px, #d8685a 2px 4px, #b53a2e 4px 8px, #8a2820 8px); }
body .arena-stam .arena-fill { background: linear-gradient(180deg, #b9f0c4 0 1px, #49b06a 1px 3px, #2f9152 3px); }
body .arena-crowd .arena-fill { background: linear-gradient(180deg, #fff0b8 0 1px, #f2c46b 1px 3px, #d9a441 3px 5px, #a87a2a 5px); }
body .arena-crowd-mid { background: ${f.brassHi}; box-shadow: 0 0 0 1px #050608; }
body .arena-ftr[data-you="1"] .arena-ftr-name { color: ${f.brassHi}; }
body .arena-ftr[data-banner="you"] .arena-track, body .arena-ftr[data-banner="a"] .arena-track { box-shadow: 0 0 0 1px #050608, inset 2px 0 0 ${f.brass}; }
body .arena-ftr[data-banner="them"] .arena-track, body .arena-ftr[data-banner="b"] .arena-track { box-shadow: 0 0 0 1px #050608, inset -2px 0 0 #b83a2e; }
body .arena-tag[data-tag="darling"] { color: ${f.brassHi}; }
body .arena-tag[data-tag="villain"] { color: #ff9a8a; }
body .arena-out { color: #ff9a8a; }
body .arena-timer { font-size: 17px; letter-spacing: 0.1em; color: #fffaf0; }
body .arena-vs { color: #d8cfae; opacity: 1; }
body .arena-crowd-word[data-band="roar"], body .arena-crowd-word[data-band="cheer"] { color: ${f.brassHi}; }
body .arena-crowd-word[data-band="boo"], body .arena-crowd-word[data-band="jeer"] { color: #ff9a8a; }
body .arena-bark { font-size: 14px; letter-spacing: 0.08em; }
body .arena-hint { color: ${f.brassHi}; }
/* AUDIT MERGE-PLUS D3: STONE'S LIGHT GROUND. The lane's newer surfaces joined the window and panel roles above, and
   Stone paints those a light grey their words were never chosen for - they had kept their own dark ground on every
   theme until then (the F-menu's Cancel read at 2.3:1, a refused row's reason at 4.1:1). On Stone the lane's dim
   word (--dim, set on the surface so everything inside inherits it), the refusal's and the note's words, the
   decorator's amber reasons and its red price are lifted to 4.5:1 or better, each over a hard black drop. */
:root[data-plus-theme="stone"] body .dfdecor-card, :root[data-plus-theme="stone"] body .dfpage-card,
:root[data-plus-theme="stone"] body .dfpeer-card, :root[data-plus-theme="stone"] body .dfsocial-toast,
:root[data-plus-theme="stone"] body .dfduel-toast, :root[data-plus-theme="stone"] body .dfdecor-bar {
  --dim: ${Cr}; text-shadow: 1px 1px 0 rgba(5,6,8,0.85); }
:root[data-plus-theme="stone"] body .dfpeer-why, :root[data-plus-theme="stone"] body .dfpeer-btn[disabled]:hover .dfpeer-why,
:root[data-plus-theme="stone"] body .dfpage-note, :root[data-plus-theme="stone"] body .dfduel-sub { color: ${zi}; }
:root[data-plus-theme="stone"] body .dfdecor-pick-why, :root[data-plus-theme="stone"] body .dfdecor-bar-why { color: ${B0}; }
:root[data-plus-theme="stone"] body .dfdecor-row.dim .dfdecor-row-price { color: ${jr}; }
/* Profession status uses the existing Stone red word role on its lighter panel. */
:root[data-plus-theme="stone"] body .px-qdetail.prof-detail .prof-word { color: ${jr}; }
/* AUDIT NAV1 (the presentation): the sea fight's dim words join them - on Stone the plate's hint (the board key's line)
   read 1.9:1, its waters 2.9, its labels and the card's sub-line 3.8, the plunder window's sub-line, lede and counts
   3.3-3.5 */
:root[data-plus-theme="stone"] body .dfnaval-hint, :root[data-plus-theme="stone"] body .dfnaval-waters,
:root[data-plus-theme="stone"] body .dfnaval-bar-label, :root[data-plus-theme="stone"] body .dfnaval-card-sub,
:root[data-plus-theme="stone"] body .dfnaval-winsub, :root[data-plus-theme="stone"] body .dfnaval-lede,
:root[data-plus-theme="stone"] body .dfnaval-count, :root[data-plus-theme="stone"] body .dfnaval-choice span,
:root[data-plus-theme="stone"] body .dfnaval-yardrow span { color: ${Cr}; text-shadow: 1px 1px 0 rgba(5,6,8,0.85); }
`,K0=`
.pack-shell .equipped .wornac { position: absolute; right: 3px; top: 3px; z-index: 2; min-width: 16px; height: 15px; padding: 0 3px;
  display: flex; align-items: center; justify-content: center; font-size: 11px; line-height: 1; color: #efe8d6;
  font-variant-numeric: tabular-nums; background: rgba(5,6,8,0.8); border: 1px solid rgba(192,138,62,0.8);
  border-radius: 1px 1px 7px 7px; text-shadow: 1px 1px 0 #050608; }
.pack-shell .equipped .wornrow[data-sigil] > .wornac { right: 17px; }
.pack-shell .equipped .wornac.nil { color: #9c937d; border-color: rgba(125,116,96,0.5); }
/* HOOD-SAID (FIELD BUGS 2026-09-30): a raised hood's chip, in the part plate's dress and its corner, round-topped like
   the hood it names, stepping off a family's count */
.pack-shell .equipped .wornhood { position: absolute; right: 3px; top: 3px; z-index: 2; height: 15px; padding: 0 4px;
  display: flex; align-items: center; font-size: 11px; line-height: 1; letter-spacing: 0.08em; text-transform: uppercase;
  color: #efe8d6; background: rgba(5,6,8,0.8); border: 1px solid rgba(192,138,62,0.8); border-radius: 7px 7px 1px 1px;
  text-shadow: 1px 1px 0 #050608; }
.pack-shell .equipped .worncount ~ .wornhood { right: 20px; }
.pack-shell .wornmap .wornac-total { position: absolute; left: 4px; top: 4px; z-index: 2; display: flex; flex-direction: column;
  align-items: center; gap: 1px; padding: 2px 5px 3px; white-space: nowrap; background: rgba(5,6,8,0.8);
  border: 2px solid rgba(192,138,62,0.8); box-shadow: 0 0 0 1px #050608; text-shadow: 1px 1px 0 #050608; }
.pack-shell .wornac-total .k { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #a89f88; }
.pack-shell .wornac-total .v { font-size: 16px; line-height: 1; color: #f3cf86; font-variant-numeric: tabular-nums; }
.card .cmp { margin: 8px 0 0; padding-top: 6px; border-top: 2px solid rgba(5,6,8,0.45); box-shadow: inset 0 1px 0 rgba(163,152,128,0.16); }
.card .cmp .cmp-head, .pack-shell .card .cmp p.cmp-head { margin: 0 0 4px; font-size: 11px; letter-spacing: 0.1em;
  text-transform: uppercase; text-align: center; color: #a89f88; }
.inv-tip .cmp dl.stats { border-top: 0; box-shadow: none; padding-top: 2px; }
.pack-shell .packtip.packdetail .card .cmp .stats { margin-top: 2px; }
.card .cmp .cmp-d { margin-left: 6px; font-variant-numeric: tabular-nums; }
.card .cmp .cmp-sep { margin-left: 4px; color: #9c937d; }
.card .cmp .cmp-sep + .cmp-d { margin-left: 4px; }
.card .cmp .cmp-d.up { color: #74d9a0; }
.card .cmp .cmp-d.down { color: #d98074; }
.card .cmp .cmp-d.same { color: #a89f88; }
/* LOOT18: the lines a wear would change - a line a row, its chip at its end; a lost line struck through */
.card .cmp-lines .cmp-linelist { list-style: none; margin: 0; padding: 0; }
.card .cmp-lines .cmp-line { display: flex; flex-wrap: wrap; align-items: baseline; gap: 2px 6px; margin: 1px 0; }
.card .cmp-lines .cmp-d.new { color: #f3cf86; }
.card .cmp-lines .cmp-line.lost .cmp-v { text-decoration: line-through; color: #a89f88; }
.card .cmp-lines .cmp-note { flex-basis: 100%; font-size: 11px; color: #a89f88; }
`,V0=[F0,W0],X0=`
/* ── PLUS-MENU: THE DOORS ── */
/* AUDIT PLUS-MENU M1: the stage's own width, never the viewport's - a phone's stage keeps 24px a side, and 100vw - 32px
   ran the rail 8px past it, so the whole door panned sideways under a thumb */
.px-home .px-menu { width: min(384px, 100%); align-items: stretch; gap: 8px; }
.px-menu .doorbtn { justify-content: space-between; border: 2px solid; padding: 6px 24px; }
.px-menu .doorbtn .px-c { visibility: visible; color: #5a5446; text-shadow: 1px 1px 0 #050608; }
.px-menu .doorbtn:hover .px-c, .px-menu .doorbtn:focus-visible .px-c { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
/* AUDIT PLUS-MENU M4: on Stone's light ground the dim stone diamond was gone (1.2:1) - the lit stone, at rest only */
:root[data-plus-theme="stone"] .px-menu .doorbtn:not(:hover):not(:focus-visible) .px-c { color: #9a9079; }
/* a phone: the doors at the 44px tap floor and a size down, so the rail stands above the foot's plaques on a tall phone
   (the stage still scrolls where it cannot - PX8) */
@media (max-width: 480px) {
  .px-home .px-menu { gap: 6px; }
  .px-menu .doorbtn { padding: 2px 16px; min-height: 44px; font-size: 22px; }
}
/* the rule under the wordmark: two gilt bars fading out from the gem */
.px-home .px-rule::before, .px-home .px-rule::after { height: 2px; opacity: 1; box-shadow: 0 1px 0 #050608; }
.px-home .px-rule::before { background: linear-gradient(90deg, transparent, #7a5424 45%, #f3cf86); }
.px-home .px-rule::after { background: linear-gradient(90deg, #f3cf86, #7a5424 55%, transparent); }
`,Y0=`${S0}
${I0}
${O0}
${os}
${Ic}
${Oc}
${Ac}
${Rc}
${Sc}
${K0}
${X0}
/* FRAME1: LAST, on purpose - see ui/enhancedFrame.js */
${Ga}
/* RARITY-UI + SIGIL-UI, then PLUS-DRESS: after the kit - each outranks the kit's stone at the same weight */
${V0.join(`
`)}
`;function Q0(e,t){const a=(l,c,g="")=>{const m=e.createElement(l);return m.className=c,g&&(m.textContent=g),m},o=a("div",`${t}-pace`);o.setAttribute?.("role","group"),o.setAttribute?.("aria-label",J.title),o.append(a("div",`${t}-label ${t}-pace-title`,J.title));const n={};for(const l of kt){const c=a("div",`${t}-pace-row`);c.title=J.tip[l];const g=a("span",`${t}-pace-word`,J[l]),m=a("button",`${t}-pace-step`,"−"),b=a("span",`${t}-pace-num`,""),x=a("button",`${t}-pace-step`,"+");for(const[u,T,y]of[[m,-1,J.slower],[x,1,J.faster]])u.type="button",u.setAttribute?.("aria-label",`${y} - ${J[l].toLowerCase()}`),u.tabIndex=-1,u.onpointerdown=A=>A.preventDefault?.(),u.onclick=A=>{A.preventDefault(),A.stopPropagation?.(),ls(l,T)};c.append(g,m,b,x),n[l]={row:c,down:m,up:x,num:b},o.append(c)}const i=l=>l.stopPropagation?.();o.addEventListener?.("mousedown",i),o.addEventListener?.("mouseup",i),o.addEventListener?.("pointerdown",i);const s=()=>{for(const l of kt){const c=n[l],g=no(l),m=`×${g}`;c.num.textContent!==m&&(c.num.textContent=m),c.down.disabled=g<=Me[0];const b=ps(l);c.up.disabled=!b,c.up.title=!b&&!is()&&g>=he?J.roadOnly:`${J.faster} - ${J[l].toLowerCase()}`,c.down.title=`${J.slower} - ${J[l].toLowerCase()}`}},p=ds(s);return s(),{root:o,paint:s,dispose:()=>p()}}function Ri(e,t=""){const a=o=>`:where(${t?`${t} `:""}.${e}-${o})`;return`
${a("pace")} { display: flex; flex-direction: column; gap: 6px; padding: 9px 14px 10px; }
${a("pace-title")} { padding: 0; }
${a("pace-row")} { display: grid; grid-template-columns: 1fr 30px 66px 30px; align-items: center; gap: 0; min-width: 0; }
${a("pace-word")} { padding-right: 8px; font-size: 12px; letter-spacing: 0.06em; color: var(--bone, #e9e4d9); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
${a("pace-num")} { height: 30px; box-sizing: border-box; display: grid; place-items: center; margin: 0 -2px; position: relative; z-index: 1;
  font-size: 16px; letter-spacing: 0.04em; font-variant-numeric: tabular-nums; color: var(--brass, #c08a3e);
  background: rgba(0,0,0,0.38); border: 1px solid rgba(192,138,62,0.4); }
${a("pace-step")} { pointer-events: auto; height: 30px; padding: 0; cursor: pointer; line-height: 1; font-family: inherit; font-size: 16px;
  color: var(--bone, #e9e4d9); background: rgba(43,50,59,0.9); border: 1px solid rgba(192,138,62,0.4); border-radius: 2px; }
${a("pace-step")}:hover:not(:disabled) { border-color: var(--verdigris, #4e7f72); color: rgb(243,239,44); }
${a("pace-step")}:disabled { cursor: default; color: #6c6552; }
`}const Da="travel-pace-box",Pr="travel-pace-box-style";let We=null;function Xb(e=globalThis.document){if(!e?.body)return!1;if(We?.root?.isConnected)return!0;if(!e.getElementById?.(Pr)){const t=e.createElement("style");t.id=Pr,t.textContent=`${Ri("pbox")}
#${Da} { position: fixed; right: 12px; top: 64px; z-index: 30; width: 190px; pointer-events: auto; box-sizing: border-box;
  font-family: system-ui, sans-serif; background: rgba(14,16,19,0.88); border: 1px solid rgba(192,138,62,0.5); border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.5); }
#${Da} .pbox-label { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #9a9384; }`,(e.head??e.body).append(t)}return We=Q0(e,"pbox"),We.root.id=Da,e.body.append(We.root),!0}function Yb(){const e=We;e&&(We=null,e.dispose(),e.root.remove?.())}const Ni="#3fd6c6",Z0="rgba(40, 200, 185, 0.14)",Qb="Sea serpent",Zb=Object.freeze({ring:Ni,fill:Z0}),Li="#e8b24a",J0="rgba(232, 178, 74, 0.16)",Jb="Abyss Dungeon",ef=Object.freeze({ring:Li,fill:J0}),to=4,eg=Object.freeze(["+..###.","+.#####","+.#####","+.#####","+..###."]),tg=Object.freeze([".+.+..","+.+...","......","####..","######","####.#","######","####.."]),ag=Object.freeze([Object.freeze({id:"patreon",name:"Patreon",label:"Support on Patreon",url:"https://www.patreon.com/c/dfenhanced",art:eg}),Object.freeze({id:"kofi",name:"Ko-fi",label:"Support on Ko-fi",url:"https://ko-fi.com/daggerfallonline",art:tg})]);function og(e,t=to){const a=e.art.length,o=Math.max(...e.art.map(p=>p.length)),n=p=>p==="#"?"var(--mk-hi)":"var(--mk-lo)";let i="transparent";const s=[];return e.art.forEach((p,l)=>[...p].forEach((c,g)=>{if(c!=="."){if(g===0&&l===0){i=n(c);return}s.push(`${g*t}px ${l*t}px 0 ${n(c)}`)}})),`.supmark-${e.id} { width: ${o*t}px; height: ${a*t}px; }
.supmark-${e.id}::before { background: ${i}; box-shadow: ${s.join(", ")}; }`}const rg=`/* SUPPORT1: the asks' marks (ui/supportAsks.js) - the site's corner and the door's icons */
.supmark { --mk-hi: var(--brass); --mk-lo: #7d7460; position: relative; display: block; flex: none; }
.supmark::before { content: ''; position: absolute; left: 0; top: 0; width: ${to}px; height: ${to}px; }
a:hover > .supmark, a:focus-visible > .supmark { --mk-hi: rgb(243,239,44); }
${ag.map(e=>og(e)).join(`
`)}
`,qr=300,ng=190,_r=8,tf=12,ig=`:root {
  --ink: #0e1013;
  --slate: #171b21;
  --iron: #2b323b;
  --bone: #e9e4d9;
  --dim: #9a9486;
  --brass: #c08a3e;
  --blood: #8c3a32;
  --ruby: #b91309;
  --verdigris: #4e7f72;
  --emerald: #2c7341;
  --cinnabar: #bf2a1f;

  --display: 'Cormorant', Georgia, serif;
  --data: 'Barlow Semi Condensed', system-ui, sans-serif;
  --brand: 'Grenze Gotisch', 'Cormorant', Georgia, serif;

  --side: 264px;
  --gap: 1px;
}`,sg="Cormorant:wght@300;400;600",lg="Barlow+Semi+Condensed:wght@400;500;600",pg="Jacquard+12",dg="Pixelify+Sans:wght@400;500",cg=e=>`https://fonts.googleapis.com/css2?${e.map(t=>`family=${t}`).join("&")}&display=swap`,hg=cg([sg,lg,pg,dg]),gg=`
/* ── FIX-D: the digit five is Silkscreen's - see ui/pixelifyFive.js */
${ji}
/* ── TOKENS ── see ENHANCED_TOKENS above */
${ig}

/* ── FONT3: THE GAME SPEAKS ONE FACE (2026-10-02, Mac: "we need to ensure everything recieves our enhanced font").
   The page's own face was --data, Barlow Semi Condensed - the LAUNCHER's - and --display, Cormorant, the menu's
   face before PX1 made the menu pixel. PX1 and FONT1 set the pixel stack on each surface's root, so every surface
   whose root they did not reach, and every rule under a root that named --data or --display again (the Features
   and Overhauls panes, the About credits, the chargen skills and questions, the picked item's tier lines, the
   death screen's words), still drew in one of the two. Root by root is the leak's own shape, so the leak is closed
   where it starts: the body wears the whole trio and the reading pair (ui/pixelifyFive.js PIXEL_FONT_CSS), and the
   two menu-era tokens name the pixel stack on every page this sheet is laid on. ENHANCED_TOKENS keeps its values
   for the one page that reads them without this sheet - the site's landing page (scripts/landingHtml.mjs). --brand
   was Grenze Gotisch, which no request has ever loaded; the skin's pixel wordmark face stands in for it. */
:root { --data: ${M}; --display: ${M}; --brand: 'Jacquard 12', ${M}; }

* { box-sizing: border-box; }
html, body { height: 100%; margin: 0; }
body {
  background: var(--ink);
  color: var(--bone);
  ${re}
  font-size: 15px;
  overflow: hidden;
}
button { font: inherit; background: none; border: 0; color: inherit; cursor: pointer; text-align: left; }
/* FONT3: a form control takes the browser's own face unless told (DROPS-FONT's law) - the Test Room's select was the
   one still in it. The font shorthand only: a control keeps the UA's letter-spacing, as buttons always have. */
select, input, textarea { font: inherit; }
#app { height: 100dvh; }

/* ── SHELL ─────────────────────────────────────────────────
   Two columns and nothing else. Daggerfall's own start screen is
   a picture with three words painted on it; the words are the
   whole interface, so they get a column of their own and the
   other column answers them. */
.shell {
  height: 100%;
  display: grid;
  grid-template-columns: var(--side) 1fr;
  gap: var(--gap);
  background: var(--iron);
}
.side { background: var(--ink); display: flex; flex-direction: column; min-height: 0; }
.pane { background: var(--slate); overflow: auto; min-height: 0; }

/* ── BRAND ─────────────────────────────────────────────────
   The wordmark is TYPE, not the classic .IMG. PICK03I0 has its
   labels painted into the bitmap at 320x200, which is the exact
   thing this overhaul exists to stop doing: art that carries text
   cannot reflow, cannot scale and cannot be read on a phone. */
.brand { padding: 30px 22px 24px; }
.brand h1 {
  font-family: var(--display); font-weight: 300; font-size: 34px;
  letter-spacing: 0.03em; margin: 0; line-height: 1;
}
.brand .sub {
  color: var(--brass); font-size: 11px; letter-spacing: 0.26em;
  text-transform: uppercase; margin-top: 9px;
}

/* ── A HINT LINE ─────────────────────────────────────────────
   The small line under a control that says what it does (the skin
   card's "Until you choose one..."). It was the door switch's "switch
   anytime" first; MENU-TOGGLE retired that switch - the interface is
   chosen on the Overhauls page - and the line stays for its readers. */
.skinhint { flex-basis: 100%; color: var(--dim); font-size: 11px; letter-spacing: 0.12em; margin-top: 5px; }

/* ── RAIL ──────────────────────────────────────────────────
   Six destinations, one press each. Classic makes you leave the
   menu to reach settings and gives mods nowhere to live at all.
   Everything is here, and what is not built yet is here too,
   saying so. */
.rail { padding: 6px 0 20px; flex: 1; min-height: 0; overflow: auto; }
.railbtn {
  display: block; width: 100%; padding: 13px 22px; min-height: 48px;
  border-left: 2px solid transparent; color: var(--dim);
  letter-spacing: 0.05em;
}
.railbtn:hover { color: var(--bone); }
.railbtn.on { color: var(--brass); border-left-color: var(--brass); background: #12161b; }
.railbtn .rk { display: block; font-size: 15px; }

.foot {
  padding: 14px 22px max(18px, env(safe-area-inset-bottom));
  border-top: 1px solid var(--iron); color: #8b8578; font-size: 11px;
  letter-spacing: 0.08em;
}
.foot span { color: var(--dim); }

/* ── PANE HEAD ─────────────────────────────────────────────
   ONE LINE. It carried a kicker, a title and a blurb, which is
   the rail's own word said three times before the player reaches
   anything they can press. */
.head { padding: 28px 30px 18px; border-bottom: 1px solid var(--iron); }
.head h2 { font-family: var(--display); font-weight: 300; font-size: 30px; margin: 0; }

/* U51: A READING COLUMN. The body had no width at all, so a card
   carrying three lines stretched the full 1500px of a desktop pane and
   every screen but Settings - which owns its own three columns - read
   as mostly empty. The cap is the measure the .empty paragraph already
   uses one rule down (58ch), rounded to a pixel the cards can share,
   and it is
   LEFT rather than centred so the column starts on the same x as the
   heading above it. */
.body { padding: 24px 30px 40px; max-width: 720px; }
.body.flush { padding: 0; max-width: none; }
.body.wide { max-width: 1180px; }   /* FT14: the features grid is scanned, not read - the 720px reading measure is the wrong bound for it */

/* ── CARDS + ACTIONS ───────────────────────────────────────── */
.card { border: 1px solid var(--iron); padding: 20px; margin-bottom: 16px; background: #12161b; }
.card.slot { padding: 14px 18px; margin-bottom: 10px; }   /* SLOTS1: one save, one card, in a list */
.card.slot h3 { font-size: 19px; }
.card.slot .stats { margin-bottom: 12px; }
.card.slot .meta { margin-bottom: 10px; }
.card h3 { font-family: var(--display); font-weight: 400; font-size: 22px; margin: 0 0 4px; }
.card .meta { color: var(--dim); font-size: 13px; margin: 0 0 16px; }
/* UXB1-E (2026-09-25, the UX backlog): the online rules, offline - what
   differs as name, now, arrow, then; the room's value in brass. */
.svsync-list { list-style: none; margin: 0 0 16px; padding: 0; }
.svsync-row { display: grid; grid-template-columns: minmax(0, 1fr) auto auto auto; gap: 8px; align-items: baseline;
  padding: 6px 0; border-bottom: 1px solid rgba(125,116,96,0.25); font-size: 14px; }
.svsync-row:last-child { border-bottom: 0; }
.svsync-was { color: var(--dim); }
.svsync-arrow { color: var(--dim); }
.svsync-to { color: var(--brass); }
.svsync .acts { display: flex; flex-wrap: wrap; gap: 10px; }
.stats { display: grid; grid-template-columns: auto 1fr; gap: 7px 18px; margin: 0 0 18px; }
.stats dt { color: var(--dim); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; }
.stats dd { margin: 0; font-variant-numeric: tabular-nums; }

/* ── TILE1: THE SAVE TILE (ui/saveTile.js) ─────────────────────────
   Mac: "a detailed tile based design for your saves... showing your
   portrait and character information".

   A GRID RATHER THAN A LIST. Three panes listed the same slots as full
   width cards, so four saves filled a screen and a player scrolled to
   find a character they would have recognised at a glance. The tiles
   are as wide as they need to be and as many as fit.

   THE TILE ITSELF IS A THREE PART GRID: the face down the left in its
   own column, everything about the character beside it, and the
   actions along the foot spanning both - so the buttons line up across
   every tile in a row however tall the text above them runs.

   It borrows the skin rather than bringing one: --iron for the rule,
   --bone for the name, --dim for the quiet lines, --brass for the
   primary. Nothing here is a new design language. */
.svgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 14px; margin-bottom: 18px; }
.svtile {
  /* THREE ROWS: the character, a filler that eats the slack, and the
     foot. Without the filler every tile's buttons sat wherever its own
     text ended, and a row of equal-height tiles had its buttons at four
     different heights - measured in tools/saveTileProbe.mjs, and it
     reads as four misaligned cards rather than one row. */
  display: grid; grid-template-columns: 96px 1fr; grid-template-rows: auto 1fr auto;
  gap: 0 16px;
  border: 1px solid var(--iron); background: #12161b; padding: 16px; position: relative;
}
/* The slot this pane is ABOUT - the most recent, or the one a save
   would overwrite. One brass edge, no badge and no extra word. */
.svtile.sv-current { border-color: var(--brass); }

/* THE WELL. A fixed box so a tile is the same height whether its
   portrait loaded or not - a grid that reflows when ten CIF reads land
   is a list that jumps under a player's finger. */
.svface {
  grid-row: 1 / span 2; width: 96px; height: 116px;
  border: 1px solid var(--iron); background: #0a0c11;
  display: flex; align-items: center; justify-content: center; overflow: hidden;
}
.svface canvas {
  /* THE PIXELS, AS THEY ARE. A 2x nearest-neighbour head is the art
     Daggerfall shipped; smoothing it is a portrait of a different
     game. */
  image-rendering: pixelated; max-width: 100%; max-height: 100%; display: block;
}
.svinitial { font-family: var(--display); font-size: 40px; color: var(--iron); }

.svwho { grid-column: 2; grid-row: 1; min-width: 0; }
.svwho h3 { font-family: var(--display); font-weight: 400; font-size: 21px; margin: 0 0 2px; overflow-wrap: anywhere; }
.svsub { color: var(--bone); font-size: 13px; margin: 0 0 2px; }
.svhouse { color: #d8c79a; font-size: 12px; font-style: italic; margin: 0 0 2px; overflow-wrap: anywhere; }   /* LEGACY7: the house on the roster's tile */
.svwhen { color: var(--dim); font-size: 12px; margin: 0 0 10px; }
.svwho .stats { gap: 4px 14px; margin: 0; }

/* THE NAME AND THE SLOT SHARE ONE ROW. Not the slot pinned to the
   tile's corner: a slot name is the player's own words and can be a
   sentence, and pinned it ran straight into a long character name
   (measured at "Mithriil Stormaire" beside "a very long slot name
   indeed"). Sharing a row makes the slot GIVE WAY, which is the right
   precedence - the character is who a player is looking for. */
.svtop { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
.svtop h3 { flex: 0 1 auto; min-width: 0; }
.svslot {
  flex: 0 1 auto; min-width: 0;
  font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--dim);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

/* ── THE CLOUD LINE (ACC2) ───────────────────────────────────────
   ONE line and at most one button, and only when there is an account
   to have a backup on. ACC0's wall is at cloud saves, and a player
   without one is not nagged about it on every tile. */
/* The foot: pinned to the bottom row, spanning both columns. */
.svfoot { grid-column: 1 / -1; grid-row: 3; }
.svcloud {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--iron);
}
.svsay { font-size: 12px; letter-spacing: 0.06em; color: var(--dim); flex: 1 1 auto; }
.svcloud.is-saved .svsay { color: var(--verdigris); }
.svcloud.is-bad .svsay { color: var(--ruby); }
/* ACC2c: a save whose ONLY copy is the backup. Brass rather than the
   verdigris a backed-up local save gets, because they are opposite
   facts wearing the same sentence shape - one says "there are two of
   these" and this one says "there is one, and it is not here". */
.svcloud.is-only .svsay { color: var(--brass); }
/* FIELD 2026-09-27: a backup that is a LATER save than this device's copy - brass too, for the same reason: the
   copy that is ahead is not the one on this tile. */
.svcloud.is-newer .svsay { color: var(--brass); }
.svcloud .act { padding: 7px 12px; min-height: 32px; font-size: 12px; }

/* ── ACC2c: THE CLOUD-ONLY GRID ──────────────────────────────────
   Its own block under the pane's own tiles, with a rule above it, so
   the eye reads two groups rather than one grid of tiles that answer
   different buttons. No new colours and no new box: the heading is the
   display face every heading here is in, and the tiles inside are the
   same tiles. */
.svcloudonly { margin-top: 6px; padding-top: 16px; border-top: 1px solid var(--iron); }
.svcloudonly h4 {
  font-family: var(--display); font-weight: 400; font-size: 17px;
  margin: 0 0 2px; color: var(--bone);
}
.svcloudonly .meta { margin: 0 0 14px; }

.svtile .acts { margin-top: 12px; }
.svtile .acts .act { padding: 9px 16px; min-height: 38px; }

/* A phone holds one tile across, and the face beside the text still
   reads - so the columns stay and only the gaps tighten. */
@media (max-width: 560px) {
  .svgrid { grid-template-columns: 1fr; }
  .svtile { padding: 14px; gap: 4px 12px; }
}

.acts { display: flex; gap: 8px; flex-wrap: wrap; }
.act {
  padding: 12px 20px; border: 1px solid var(--iron); color: var(--dim);
  letter-spacing: 0.06em; min-height: 46px;
}
.act:hover { color: var(--bone); border-color: var(--dim); }
.act.primary { border-color: var(--brass); color: var(--brass); }
/* A value pill inside a settings row is drawn compact (a 44px pill
   beside a 44px row is a wall of brass) and TARGETED at 44 the same
   way the stepper is. */
.row .act { position: relative; }
.row .act::after {
  content: ''; position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 100%; height: 44px; min-width: 44px;
}
.act.primary:hover { background: var(--brass); color: var(--ink); }
/* QS2: the ON state of a toggling act - the readied plaque's own brass, so
   "this slot holds this item" reads the same way "this hand holds this weapon"
   does one surface over. It is the act's BORDER and not a second control, so
   the 44px target rule below still measures the same button. */
.act.on { border-color: var(--brass); color: var(--brass); }
.act[disabled] { opacity: 0.4; cursor: not-allowed; }
.act[disabled]:hover { color: var(--dim); border-color: var(--iron); }

/* ── EMPTY STATE ───────────────────────────────────────────
   THE ANTI-LIE LAW, borrowed from the char sheet's withheld
   logbook: a thing that does not work yet is shown and says why.
   It is never shown working, and never quietly absent. */
/* CR1: the credits card - a modder's name beside the work, on the screen. */
.credits-head { color: var(--brass); font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; font-weight: 400; margin: 18px 0 8px; }
.credit { border-top: 1px solid var(--iron); padding: 12px 0 10px; }
.credit-title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 12px; }
.credit-name { font-family: var(--display); font-size: 19px; }
.credit-by { color: var(--brass); font-size: 13px; }
.credit-what { margin: 6px 0 0; font-size: 13px; line-height: 1.5; }
.credit-terms { margin: 6px 0 0; color: var(--dim); font-size: 12px; }
.credit-link { display: inline-block; margin-top: 6px; color: var(--brass); font-size: 12px; letter-spacing: 0.04em; text-decoration: none; border-bottom: 1px solid var(--iron); }
.credit-link:hover, .credit-link:focus-visible { border-bottom-color: var(--brass); }
.empty { border: 1px dashed var(--iron); padding: 26px 22px; margin-bottom: 16px; }
.empty h3 { font-family: var(--display); font-weight: 400; font-size: 21px; margin: 0 0 8px; color: var(--dim); }
.empty p { color: var(--dim); margin: 0 0 10px; max-width: 58ch; font-size: 14px; }
.empty p:last-child { margin-bottom: 0; }
.tag {
  display: inline-block; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--brass); border: 1px solid #3a3226; padding: 3px 8px; margin-bottom: 12px;
}
.tag.grey { color: var(--dim); border-color: var(--iron); }

/* ── FT0: THE FEATURES HOME ─────────────────────────────────
   One list; every row wears its kind(s) as a coloured label and the
   chip row filters by kind. Three kinds, three of the skin's OWN
   tokens - brass is the port's, verdigris the modders' (the live
   tier's colour already), bone Daggerfall's - so no fourth colour
   is born here. A row wearing two kinds wears two labels. */
.chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.chip {
  font-family: var(--data); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
  padding: 7px 12px; border: 1px solid var(--iron); color: var(--dim); background: transparent; cursor: pointer;
}
.chip .n { margin-left: 8px; color: var(--dim); }
.chip:hover { color: var(--bone); border-color: var(--dim); }
.chip.on { background: var(--iron); color: var(--bone); }
.chip.enhanced.on { color: var(--brass); border-color: var(--brass); }
.chip.mod.on { color: var(--verdigris); border-color: var(--verdigris); }
.chip.classic.on { color: var(--bone); border-color: var(--bone); }
.kinds { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 4px; }
.kind { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; padding: 2px 6px; border: 1px solid; }
.kind.enhanced { color: var(--brass); border-color: var(--brass); }
.kind.mod { color: var(--verdigris); border-color: var(--verdigris); }
.kind.classic { color: var(--bone); border-color: var(--dim); }

/* ── SETTINGS: RAIL | LIST | DETAIL ────────────────────────
   The same three-pane shape the in-game screens use, because it
   is the same problem: too many rows to show at once, and no row
   that may be deleted. Disclosure, not deletion. */
.panes { display: grid; grid-template-columns: 178px minmax(280px, 1fr) minmax(280px, 340px); gap: var(--gap); background: var(--iron); height: 100%; min-height: 0; }
.subrail { background: var(--ink); overflow: auto; padding: 8px 0; }
.list { background: var(--slate); overflow: auto; }
.detail { background: #12161b; overflow: auto; }

.subbtn {
  display: block; width: 100%; padding: 11px 16px; min-height: 46px;
  border-left: 2px solid transparent; color: var(--dim); font-size: 14px;
}
.subbtn:hover { color: var(--bone); }
.subbtn.on { color: var(--brass); border-left-color: var(--brass); background: #12161b; }
.subbtn .count { float: right; font-size: 11px; color: #8b8578; font-variant-numeric: tabular-nums; }
/* The affordance for "tap me again to read about this group and reset
   it" - the only way to the category card on a phone (AUDIT F8). It
   shows on the ACTIVE tab only, because that is the only tab the
   gesture applies to. */
.subbtn .more-dot { display: none; }

.row {
  display: flex; align-items: center; gap: 14px; width: 100%;
  padding: 11px 18px; min-height: 52px; border-bottom: 1px solid #20262e;
}
.row:hover { background: #12161b; }
.row.on { background: #12161b; box-shadow: inset 2px 0 0 var(--brass); }
.row-main {
  flex: 1; min-width: 0;
  /* THE WHOLE ROW HEIGHT, not the height of the words in it. This was
     a 19px target inside a 52px row - the label sized itself and the
     36px of row around it hit nothing at all. */
  align-self: stretch; display: flex; flex-direction: column; justify-content: center;
  padding: 6px 0; min-height: 44px;
}
.row-name { font-size: 14px; }
.row.blocked .row-name { color: var(--dim); }
/* AUDIT 39: THE ANNOTATION LINES, which had no rule at all. A note
   under a label inherits \`body\`'s 15px full-bone, so it drew LARGER
   and brighter than the 14px .row-name it hangs from - the bare
   running text the AUDIT UI 2 sweep was written for and cannot see:
   that sweep compares one shell against another, and a class styled
   in NO shell has nothing to compare. Base rules, so every shell
   that draws one gets the same treatment. */
.row-note, .row-sub { color: var(--dim); font-size: 12.5px; margin-top: 3px; }
.note { color: var(--dim); font-size: 13px; margin: 10px 0 0; max-width: 58ch; }

/* THE CONTROL IS THE VALUE. A row shows the word a player reads,
   never the ini string - \`4\` reads Beautiful, \`True\` reads On.
   (settingsLaw.formatValue owns that, and this borrows it whole.) */
.ctl { display: flex; align-items: center; gap: 2px; flex: 0 0 auto; }
/* AUDIT UI (2026-08-27): A ROW'S VALUE BUTTON. It was sized INLINE in
   three places - b.style.minHeight = '38px' - and an inline style is
   unreachable by a media query, so the coarse-pointer rule below could
   not raise it however it was written. The size lives in the sheet
   now, which is the only place a responsive law can see. */
.rowact { min-height: 38px; padding: 8px 16px; }
.val {
  min-width: 76px; text-align: right; font-variant-numeric: tabular-nums;
  color: var(--brass); font-size: 14px;
}
.row.blocked .val { color: #8b8578; }
.step {
  width: 34px; height: 34px; display: grid; place-items: center;
  border: 1px solid var(--iron); color: var(--dim); margin-left: 6px;
  position: relative;
  /* CC-STEP: the glyph is a minus sign and a plus at the button's own
     size - 22px on a 34px button, 26px on the 44px thumb one - so it
     reads across the room, not as a speck. */
  font-size: 22px; line-height: 1; font-weight: 500;
}
.step:hover { color: var(--bone); border-color: var(--dim); }
/* AUDIT 24's finding, and this file FAILED IT until 2026-08-25.
   The drawn size and the TARGET size really are two rects - a 44px
   pill reads as a button bar and a 34px target is not a thumb - but
   the rule that was here said content:'' and position:absolute and
   nothing else, so it drew no box, claimed no space and hit nothing.
   A comment asserting a law the code does not implement is worse than
   no comment: it is the thing a reader checks INSTEAD of measuring.
   Measured now, on a Pixel 5, by tools/enhancedTapProbe.mjs.

   The pseudo-element is centred on the pill and forced to 44,
   so the target grows
   OUTWARD from the drawn pill and the row's own height is unchanged. */
.step::after {
  content: ''; position: absolute; inset: -5px -5px;
  min-width: 44px; min-height: 44px;
  left: 50%; top: 50%; transform: translate(-50%, -50%);
  width: 44px; height: 44px;
}
.swatch { width: 26px; height: 20px; border: 1px solid var(--iron); }

/* THE TIER IS A DOT. The word was correct and it was also
   twenty-one repetitions of STORED down one column - the state
   still shows, and the sentence explaining it is one press away
   in the help panel where it is read once. */
.tier {
  width: 6px; height: 6px; border-radius: 50%; flex: 0 0 auto;
  margin-left: 12px; background: #2f3742;
}
.tier.live { background: var(--verdigris); }
.tier.unavailable { background: var(--blood); }
/* FPS-VSYNC: a key the desktop app reads at its next start - live, but
   not yet: the live colour as a ring (AUDIT 28e: it wore the stored
   tier's grey). */
.tier.restart { background: transparent; box-shadow: inset 0 0 0 1.5px var(--verdigris); }
/* SO1: TIER IS A GROUP. The live rows sit flat; the stored and the
   unavailable fold under a heading that carries their count, so the
   list a beginner sees is short and nothing is ever hidden. */
.group { border-top: 1px solid #20262e; margin-top: 6px; }
.group-head {
  display: flex; align-items: center; gap: 10px; width: 100%; padding: 14px 18px;
  background: none; border: 0; color: #8c8578; font: inherit; font-size: 12px;
  letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; text-align: left;
}
.group-head:hover { color: var(--bone); }
.group-head .count { color: #8b8578; font-variant-numeric: tabular-nums; }
.group-head .group-chev { margin-left: auto; color: var(--brass); font-size: 16px; line-height: 1; }
.group.open .group-head { color: var(--bone); }

.dcard { padding: 24px 20px 32px; }
.dcard h3 { font-family: var(--display); font-weight: 400; font-size: 22px; margin: 0 0 10px; }
.dcard p { color: var(--dim); font-size: 13px; margin: 0 0 14px; }
.dcard .status { color: var(--bone); font-size: 13px; }
.dcard code {
  display: inline-block; font-family: ui-monospace, monospace; font-size: 11px;
  color: #8b8578; letter-spacing: 0.04em; margin-top: 18px;
}
.sheet-close { display: none; }

/* ── PHONE ─────────────────────────────────────────────────
   The rail goes to the BOTTOM, in the thumb's arc - the same law
   the in-game prototype follows and for the same reason. The
   settings sub-rail becomes a horizontal scroller and the help
   becomes a sheet, because one column is one column. */
/* AUDIT UI (2026-08-27): A THUMB IS NOT A SCREEN WIDTH. Every 44px rule
   in this sheet hangs off max-width 860px, which is a PROXY - and it
   fails on the very device the proxy stands in for. Measured on an iPad
   in landscape: 1080px wide, pointer:coarse true, touch true, and the
   skin switch drew 28px, the settings steppers 34px, the value buttons
   38px. The width query stays, because a narrow window wants the
   roomier layout whatever is pointing at it; the coarse-pointer query
   joins it, because that is the question actually being asked. */
@media (max-width: 860px), (pointer: coarse) {
  .shell { grid-template-columns: 1fr; grid-template-rows: auto 1fr auto; }
  .side { display: contents; }
  .brand { padding: 22px 20px 16px; background: var(--ink); }
  .brand h1 { font-size: 27px; }
  .rail {
    order: 3; display: flex; gap: 2px; padding: 0 12px 12px;
    padding-bottom: max(12px, env(safe-area-inset-bottom));
    background: var(--ink); overflow-x: auto; overflow-y: hidden;
    scrollbar-width: none; flex: 0 0 auto;
  }
  .rail::-webkit-scrollbar { display: none; }
  .railbtn {
    width: auto; white-space: nowrap; border-left: 0; border-top: 2px solid var(--iron);
    padding: 12px 14px; min-height: 50px; text-align: center;
  }
  .railbtn.on { border-left: 0; border-top-color: var(--brass); background: none; }
  .railbtn .rn { display: none; }
  /* U51: IT WRAPS RATHER THAN SCROLLS. Seven destinations do not fit
     one phone row, the scrollbar is hidden two rules up, and an
     off-screen destination with no affordance is a destination that
     does not exist - which is the AUDIT 24 shape exactly: a control
     that is drawn, exists, and cannot be reached on the device that
     needs it most. SIX did not fit either, so this is the front door's
     bug as much as the pause door's; it only became visible when the
     rail grew a seventh entry and the one pushed off the end was EXIT.
     NOT THE WIZARD'S RAIL: that one is a WALK through ten stages in
     order, it shows where you ARE rather than where you may go, and a
     walk that wraps stops reading as a line. */
  .rail { flex-wrap: wrap; overflow-x: visible; }
  .railbtn { flex: 1 1 auto; }
  .wizard .rail { flex-wrap: nowrap; overflow-x: auto; }
  .foot { display: none; }
  .pane { order: 2; }
  .head { padding: 22px 20px 16px; }
  .head h2 { font-size: 26px; }
  .body { padding: 18px 20px 30px; }

  .panes { grid-template-columns: 1fr; grid-template-rows: auto 1fr; }
  .subrail {
    display: flex; overflow-x: auto; overflow-y: hidden; padding: 0;
    scrollbar-width: none;
  }
  .subrail::-webkit-scrollbar { display: none; }
  .subbtn {
    width: auto; white-space: nowrap; border-left: 0; border-bottom: 2px solid transparent;
    padding: 12px 15px;
  }
  .subbtn.on { border-left: 0; border-bottom-color: var(--brass); }
  .subbtn .count { float: none; margin-left: 7px; }
  /* THE ONLY WAY TO THE CATEGORY CARD ON A PHONE (AUDIT F8), so the
     gesture needs to be visible. Active tab only - it is the only tab
     the second tap applies to. */
  .subbtn.on .more-dot {
    display: inline-block; width: 4px; height: 4px; border-radius: 50%;
    background: var(--brass); vertical-align: middle; margin-left: 7px;
  }
  .detail {
    position: fixed; left: 0; right: 0; bottom: 0; max-height: 74dvh; z-index: 20;
    transform: translateY(101%); transition: transform 0.22s ease;
    border-top: 1px solid var(--brass);
    padding-bottom: max(80px, calc(env(safe-area-inset-bottom) + 80px));
  }
  .detail.open { transform: translateY(0); }
  .sheet-close {
    display: block; width: 100%; padding: 14px; min-height: 48px;
    color: var(--dim); font-size: 12px; letter-spacing: 0.16em;
    text-transform: uppercase; border-bottom: 1px solid var(--iron);
  }
}

/* SHORT-TOUCH (2026-09-27, Discord - players on an AYN Thor and an Android phone: "I can login, get to the main
   screen but I'm unable to select online, load game, anything"; "I luckily have a tiny, tiny space under the title I
   can use to scroll but it's quite annoying"). A SHORT LANDSCAPE TOUCH SCREEN KEEPS THE TWO COLUMNS. The rule above
   stacks the brand, the pane and the rail in one column - right for a phone held upright, where height is plenty.
   Held sideways it is not: 411 px tall, the brand's logo spans the screen's width and stands about 250 px, the
   wrapped rail takes two rows, and the pane between them - where every button that continues, loads or joins a game
   lives - was left a few pixels. The title and the rail drew; the pane each rail press opened could not be seen, and
   the sliver of it was the "tiny space" that scrolled. Where height is the constraint and width is not, the desk's
   two columns come back - the rail down the side, the pane the whole height - with the thumb's 44 px rows. Not the
   wizard: its rail is a readout and its phone strip is its own (below). */
@media (pointer: coarse) and (orientation: landscape) and (max-height: 560px) and (min-width: 600px) {
  .shell:not(.wizard) { grid-template-columns: min(var(--side), 34vw) 1fr; grid-template-rows: none; }
  .shell:not(.wizard) > .side { display: flex; flex-direction: column; min-height: 0; }
  .shell:not(.wizard) .brand { padding: 10px 14px 6px; }
  .shell:not(.wizard) .rail { order: 0; display: block; flex: 1; min-height: 0; overflow-x: hidden; overflow-y: auto;
    padding: 4px 0 max(8px, env(safe-area-inset-bottom)); }
  .shell:not(.wizard) .railbtn { display: block; width: 100%; min-height: 44px; padding: 10px 16px; border-top: 0;
    border-left: 2px solid transparent; text-align: left; white-space: normal; }
  .shell:not(.wizard) .railbtn.on { border-left-color: var(--brass); background: #12161b; }
  .shell:not(.wizard) > .pane { order: 0; }
  .shell:not(.wizard) .head { padding: 12px 18px 10px; }
  .shell:not(.wizard) .head h2 { font-size: 22px; }
  .shell:not(.wizard) .body { padding: 12px 18px 22px; }
}

@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }

/* ── THE CHARACTER SHEET (U52) ──────────────────────────────
   The first IN-GAME screen in this language. Three columns because
   the sheet answers three questions - what you are, what you can do,
   what state you are in - and the classic sheet answers all three in
   one 320x200 panel by showing nine skills at a time.

   It borrows the menu's card, act and stats rules whole rather than
   restating them: one design language, one home. What is new here is
   the METER, which the eight attributes and the four vitals share -
   they are the same shape at two scales, so they are one rule. */
.sheet-shell { height: 100%; display: flex; flex-direction: column; min-height: 0; }

.sheet-id {
  display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;
  padding: 26px 30px 18px; border-bottom: 1px solid var(--iron); background: var(--ink);
}
.sheet-id h2 { font-family: var(--display); font-weight: 300; font-size: 30px; margin: 0; }
.sheet-id .meta { color: var(--dim); font-size: 13px; margin: 6px 0 0; }

.sheet {
  flex: 1; min-height: 0; display: grid; gap: var(--gap);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  background: var(--iron);
}
.sheetcol { background: var(--slate); overflow: auto; padding: 20px 22px 26px; min-height: 0; }
.colhead {
  font-family: var(--data); font-weight: 500; font-size: 11px; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--dim); margin: 0 0 16px;
}

/* THE METER. A label, its numbers, and a track - and the track is the
   thing the classic sheet has no room for at all: eight attributes as
   bare integers make you do the comparing. */
.meter { margin-bottom: 13px; }
.meter-k { font-size: 14px; }
.meter-v { float: right; color: var(--dim); font-size: 13px; font-variant-numeric: tabular-nums; }
.meter-track { clear: both; height: 4px; background: #0b0e12; margin-top: 6px; }
.meter-fill { height: 100%; }
.meter-fill.brass { background: var(--brass); }
.meter-fill.blood { background: var(--blood); }
.meter-fill.verdigris { background: var(--verdigris); }
.meter-fill.iron { background: var(--dim); }

/* SKILLS. The career groups are the character's chosen shape and are
   headed; the miscellaneous remainder is one press away. A career row
   is brighter than a miscellaneous one because that difference IS the
   character - it is what the three groups mean. */
.skillgroup {
  font-family: var(--data); font-weight: 500; font-size: 11px; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--brass); margin: 18px 0 8px;
}
.skillgroup:first-of-type { margin-top: 0; }
.skillrow {
  display: flex; justify-content: space-between; gap: 12px;
  padding: 7px 0; border-bottom: 1px solid #1b2027; color: var(--dim); font-size: 14px;
}
.skillrow.career { color: var(--bone); }
.skill-v { font-variant-numeric: tabular-nums; }
.act.more { width: 100%; margin-top: 18px; text-align: center; }

/* THE FOUR NAVIGATION BUTTONS, in the thumb's arc on a phone and along
   the foot of the sheet everywhere. A button is drawn only where the
   host handed a factory.
   AUDIT 39: the view that drew them - ui/enhancedCharSheet.js's own
   sheet - retired with PX27's door, so this block and the .sheet-id /
   .sheetcol / .meter / .skillrow rules above it now style nothing. The
   sheet's SHARED parts are still live (.sheet-notice below is drawn by
   the pack and the spellbook); untangling the rest is a sweep of this
   file, not of that module. */
.sheet-nav {
  display: flex; gap: 8px; flex-wrap: wrap; padding: 16px 30px;
  padding-bottom: max(16px, env(safe-area-inset-bottom));
  border-top: 1px solid var(--iron); background: var(--ink);
}
.sheet-nav .act { flex: 1 1 auto; text-align: center; }
.sheet-notice { color: #d98074; font-size: 13px; margin: 0; padding: 12px 30px 0; }

@media (max-width: 860px) {
  .sheet { grid-template-columns: 1fr; grid-auto-rows: min-content; overflow: auto; }
  .sheetcol { overflow: visible; }
  .sheet-id { padding: 20px; }
  .sheet-id h2 { font-size: 25px; }
  .sheet-nav { padding: 12px 16px; padding-bottom: max(12px, env(safe-area-inset-bottom)); }
}

/* ── THE PACK + THE SLOT MAP (U53) ─────────────────────────
   Three columns: what you are wearing, what you are carrying, and
   what one of them is. The schematic gets a column of its own because
   it is the screen's whole argument - twenty-seven slots read at a
   glance rather than hunted for on a picture of a person. */
.pack-shell { height: 100%; display: flex; flex-direction: column; min-height: 0; }
.pack-id {
  display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;
  padding: 26px 30px 18px; border-bottom: 1px solid var(--iron); background: var(--ink);
}
.pack-id h2 { font-family: var(--display); font-weight: 300; font-size: 30px; margin: 0; }
.pack-id .meta { color: var(--dim); font-size: 13px; margin: 6px 0 0; font-variant-numeric: tabular-nums; }

.pack {
  flex: 1; min-height: 0; display: grid; gap: var(--gap);
  grid-template-columns: minmax(240px, 320px) minmax(0, 1fr) minmax(240px, 320px);
  background: var(--iron);
}
.packcol { background: var(--slate); overflow: auto; padding: 18px 20px 26px; min-height: 0; }

/* ── THE CHARACTER COLUMN ───────────────────────────────────
   U59. The avatar and the worn list, stacked - one picture of the
   player and one reading of what is on them. The panel is the space
   the VOXEL render lands in later; only its contents change. */
.charcol {
  display: flex; flex-direction: column; gap: 16px; min-height: 0; overflow: auto;
  padding: 14px 14px 22px; background: var(--ink);
}
.figure-doll {
  display: grid; place-items: center; padding: 4px 0 10px;
  /* STICKY, because the column scrolls and the whole point of this
     slice is seeing the avatar AND the worn list at once - a doll that
     scrolls away the moment you read past the boots is the small
     button again. */
  position: sticky; top: 0; z-index: 1; background: var(--ink);
}
/* PIXELATED, and capped by HEIGHT rather than width: the panel is
   110x184, so a width cap on a tall column leaves it swimming. The cap
   is deliberately well under its 3x natural size - at full height the
   worn list started below the fold, which is the thing this was
   supposed to fix. */
.figure-doll img {
  image-rendering: pixelated; max-width: 100%; max-height: 32vh;
  height: auto; cursor: pointer;
}
.equipped { display: flex; flex-direction: column; }
.equippedhead { margin: 0 2px 8px; }
.equippedhead h3 { font-family: var(--display); font-weight: 300; font-size: 17px; margin: 0; }
.equippedhead .meta { color: var(--dim); font-size: 11.5px; margin: 4px 0 0; font-variant-numeric: tabular-nums; }
.wornrow {
  display: flex; align-items: baseline; gap: 10px; width: 100%;
  padding: 9px 8px; min-height: 44px; text-align: left;
  border-bottom: 1px solid #1b2027;
}
.wornrow:not(.wornempty):hover { background: #12161b; }
.wornrow.on { background: #12161b; box-shadow: inset 2px 0 0 var(--brass); }
/* THE SLOT IS THE CONSTANT and the item is the news, so the label is
   the quiet half and sits in a fixed gutter the eye can run down. */
.wornslot {
  flex: 0 0 88px; color: var(--dim); font-size: 11px; letter-spacing: 0.08em;
  text-transform: uppercase; line-height: 1.35;
}
.wornname { flex: 1 1 auto; min-width: 0; font-size: 13.5px; }
.wornname.wornempty { color: #2b333d; }
/* An empty row is a SLOT, not a control - it must read as
   unavailable rather than as a button that does nothing, and it must
   be cheap: twenty-two of the twenty-seven are empty on a bare
   character, and at full row height they bury the five that matter. */
.wornrow.wornempty {
  min-height: 0; padding: 3px 8px; border-bottom-color: #14181d;
}
.wornrow.wornempty .wornslot { font-size: 11px; color: #333c47; }


/* THE SLOT MAP. The figure is a schematic in --iron so it reads as
   scaffolding; the NODES carry the information, and a filled one is
   brass and twice the radius of an empty one - the difference has to
   survive being glanced at on a phone. */
.slotmap { background: var(--ink); padding: 14px 10px 10px; height: 100%; overflow: auto; }
.slotmap svg { width: 100%; height: auto; max-height: 62vh; display: block; }
.slotmap .figure path { fill: none; stroke: #232a33; stroke-width: 1.5; }
.slotmap .node circle { fill: #171b21; stroke: var(--iron); stroke-width: 1.5; transition: none; }
.slotmap .node.off circle { stroke: #232a33; }
.slotmap .node.filled circle { fill: var(--brass); stroke: var(--brass); }
.slotmap .node.filled { cursor: pointer; }
.slotmap .node.filled:hover circle { fill: var(--bone); stroke: var(--bone); }
.slotmap .node:focus-visible circle { stroke: var(--bone); stroke-width: 2.5; outline: none; }
.slotcount {
  color: var(--dim); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
  text-align: center; margin: 8px 0 0;
}

/* THE TABS are DFU's four pages (nativeInventory.js TABS), counted. */
.packtabs { display: flex; gap: 2px; margin: 0 0 14px; flex-wrap: wrap; }
.packtab {
  flex: 1 1 auto; padding: 10px 12px; min-height: 44px; text-align: center;
  border-bottom: 2px solid transparent; color: var(--dim); font-size: 13px;
}
.packtab.on { color: var(--brass); border-bottom-color: var(--brass); }
.packtab.empty { opacity: 0.45; }   /* PX31: an empty page keeps its place, dimmed */
.packtab .count { display: block; font-size: 11px; color: var(--dim); font-variant-numeric: tabular-nums; }

.itemrow {
  display: flex; align-items: center; gap: 11px; width: 100%;
  padding: 9px 8px; min-height: 48px; border-bottom: 1px solid #1b2027; text-align: left;
}
.itemrow:hover { background: #12161b; }
.itemrow.on { background: #12161b; box-shadow: inset 2px 0 0 var(--brass); }
/* INV1: the drag's three states. The row being carried goes quiet, the
   row it would land before takes a line above it, and the body lights
   its whole frame - a drop on the map is one target, not twelve. */
.itemrow.dragging, .wornrow.dragging { opacity: 0.4; }
/* AUDIT INV1 Fb: the drag is pointer-driven, so the browser must not
   also long-press-select the row out from under it on a touch.
   AUDIT INV2 A1: BUT THE LIST MUST STILL SCROLL. Under .pack-shell every
   row is a 56px tile in a wrapping grid, so a blanket none here left the 6px gap
   between tiles as the only surface a finger could scroll from - every
   finger-down was a drag at a 4px threshold, and INV2 had just made a
   release off the panel a DROP. A flick pans the list now; a touch drag
   begins on a HOLD (enhancedInventory's TOUCH_HOLD_MS).
   INV3: AND .draglock DOES NOT TAKE THE PAN BACK FOR THAT GESTURE.
   Chromium reads the effective touch-action when the touch SEQUENCE
   begins, so a class that lands 320ms later reaches the next gesture
   and not the one in flight - measured, with the lock on the list
   scrolled and the pointer cancelled exactly as with no lock at all.
   What holds a live gesture is preventDefault on a cancelable
   touchmove, which enhancedInventory's onDragHold takes. These rules
   stay for the gesture that does begin under the class: a SECOND finger
   panning the list out from under a live drag. */
.itemrow { touch-action: pan-y; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }
.pack-shell img { -webkit-user-drag: none; }   /* HB1b: an icon is never the browser's to drag - the pane's drag starts on it at once */   /* MAC-R4: no iOS long-press callout over a hold */
body.draglock .itemrow, body.draglock .packlists { touch-action: none; }
/* MAC-M2 (Mac: "hold to drag ... doesn't work when trying to take items
   off your character"): THE BODY'S PANELS TAKE THE SAME GESTURE, so
   they take the same two rules - a hold must not also long-press-select
   the slot name out from under the finger, and a second finger must not
   pan the body out from under a live drag (INV3: which is all
   .draglock was ever able to do). */
.wornrow { touch-action: pan-y; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }   /* MAC-R4 */
body.draglock .wornrow, body.draglock .wornmap { touch-action: none; }
.itemrow.dragover { box-shadow: inset 0 2px 0 var(--brass); }
.wornmap.dragover { outline: 2px solid var(--brass); outline-offset: -2px; }
/* MAC-M2: and the other direction lights the DOCK - carrying a worn
   piece into the pack is one target, the way the map is one. */
.pack-dock.dragover { outline: 2px solid var(--brass); outline-offset: -2px; }
/* INV2 (Mac: "a detailed click and drag that literally drags the icon"):
   THE GHOST. The item's own tile under the pointer, with the act a
   release would perform written beneath it.

   pointer-events: none is not decoration - the drag hit-tests with
   elementFromPoint under the cursor, and a node sitting there would
   answer ITSELF on every move and the drag would never find a target.
   It sits on the BODY, above the pause door's own layer, so the item can
   be carried off the panel and over the world, which is where a drop
   lands it.

   AUDIT INV2 A7: THE LADDER, walked rather than eyeballed. Every
   z-index literal in src/ and index.html: the doors' hosts are 11-14,
   the boot error and three bottom sheets are 20, enhancedChunk's "the
   game was updated" scrim is 30, the notice stack (ENH-NOTICE1; AUDIT
   ENH-NOTICE3 A7 lifted it off a tie with that scrim) is 31, the asset
   picker is 40 (and test/mwattach.test.js holds that it outranks
   everything). The first
   cut put the ghost at 30 - a straight COLLISION with the update scrim,
   which won only by an accident of which host it happened to be mounted
   inside. 16 clears every door host and loses to every notice that
   deserves to interrupt a drag. */
.dragghost {
  position: fixed; z-index: 16; pointer-events: none;
  transform: translate(-50%, -60%);
  display: grid; justify-items: center; gap: 4px;
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.55));
  /* AUDIT INV2 A6: the pack's own skin is scoped to .pack-shell and the
     ghost is the BODY's child, so none of it reaches here - the chip
     would have come out in the page's modern sans beside a pixel-skinned
     grid. The carried tile is deliberately BIGGER than the one in the
     list (it is lifted), but it is the same face. */
  font-family: ${M};
}
/* The border has to beat the has-icon rule, which clears it - same
   specificity, later in the file, so the first cut's brass frame was
   simply cancelled on every ghost carrying a real sprite, which is every
   ghost in a shipped install (AUDIT INV2 A5). */
.dragghost .tile.has-icon, .dragghost .tile {
  width: 56px; height: 56px; background: rgba(23, 27, 33, 0.92);
  border: 1px solid var(--brass);
}
.dragghost .tile img { max-width: 40px; max-height: 40px; }
.ghostact {
  font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--slate); background: var(--brass); padding: 2px 6px;
  white-space: nowrap; opacity: 0;
}
.ghostact.on { opacity: 1; }
/* A release the law would refuse says so BEFORE it happens. AUDIT INV2
   A8/A9: through the sheet's own token for a forbidden state (--blood,
   which is what .tier.unavailable, .px-stat .v.bad and .ctl-notice.bad
   all use) rather than a fifth hard-coded red - and never by COLOUR
   ALONE. The chip carries the word, so a reader who cannot tell the two
   borders apart still reads which of the two "nothing lands here" states
   this is: one that will say why, and one that is simply not a target. */
.dragghost.refused .tile.has-icon, .dragghost.refused .tile { border-color: var(--blood); }
.dragghost.refused .ghostact { background: var(--blood); color: var(--bone); opacity: 1; }
.tile {
  flex: 0 0 auto; width: 30px; height: 30px; display: grid; place-items: center;
  border: 1px solid var(--iron); color: var(--dim); font-size: 11px; letter-spacing: 0.06em;
}
/* THE REAL ICON, when the archive is here. No border: the sprite is a
   1-bit cutout on nothing, and a box round it makes it look like a
   placeholder, which is what it replaced. */
.tile.has-icon { border-color: transparent; }
.tile img { image-rendering: pixelated; max-width: 30px; max-height: 30px; }
img.fit { image-rendering: pixelated; }   /* AUDIT UI A1: a fitted picture drawn at its own device size is copied pixel for pixel (textureCanvas.js showFitted) */
.bigicon {
  display: grid; place-items: center; padding: 6px 0 14px; min-height: 72px;
}
.bigicon img { image-rendering: pixelated; max-width: 100%; max-height: 120px; }
.itemname { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; }
.itemname small { color: var(--dim); font-size: 11.5px; }
/* LR1: THE TIER COLOURS (systems/lootRarity.js RARITIES - the five
   hexes here are pinned against that table; SET6: the Aetheric's). A rolled row wears
   data-rarity; the picked card's heading and the plaque's rows
   wear the same attribute. Common wears nothing. */
.itemrow[data-rarity="magic"] .itemname > span:first-child, .packdetail .card[data-rarity="magic"] h3, .wplaque-row[data-rarity="magic"] > span:first-child { color: #6f9ee8; }
.itemrow[data-rarity="rare"] .itemname > span:first-child, .packdetail .card[data-rarity="rare"] h3, .wplaque-row[data-rarity="rare"] > span:first-child { color: #e4c34f; }
.itemrow[data-rarity="legendary"] .itemname > span:first-child, .packdetail .card[data-rarity="legendary"] h3, .wplaque-row[data-rarity="legendary"] > span:first-child { color: #e07a2e; }
.itemrow[data-rarity="aetheric"] .itemname > span:first-child, .packdetail .card[data-rarity="aetheric"] h3, .wplaque-row[data-rarity="aetheric"] > span:first-child { color: #bfe8ff; }
.itemrow[data-rarity="artifact"] .itemname > span:first-child, .packdetail .card[data-rarity="artifact"] h3, .wplaque-row[data-rarity="artifact"] > span:first-child { color: #b57bee; }
.itemrow[data-rarity="gilded"] .itemname > span:first-child, .packdetail .card[data-rarity="gilded"] h3, .wplaque-row[data-rarity="gilded"] > span:first-child { color: #ffcf4d; }
.packdetail ul.rarity { list-style: none; margin: 4px 0 10px; padding: 0; font-family: var(--data); font-size: 13px; line-height: 1.5; }
.packdetail ul.rarity li:first-child { text-transform: uppercase; letter-spacing: 0.16em; font-size: 11px; color: var(--dim); }
.packdetail ul.rarity li.lore { color: var(--dim); font-style: italic; }   /* CARD-FIT: by its own class - the card's list carries no lore now, and its last AFFIX wore the lore's dim italic */
.itemwt { flex: 0 0 auto; color: var(--dim); font-size: 12px; font-variant-numeric: tabular-nums; }
/* QS2: THE ROW'S CHIP - '1', '2' or SWAP at the row's right end, on the rows
   whose KIND is in a slot. The HUD's readied chip's label (.hud-readykind)
   is the face it borrows, because it is the same fact in the same words one
   surface over: 10px, letter-spaced, uppercase, brass, in a 2px frame. */
.qs-mark { flex: 0 0 auto; border: 2px solid rgba(125, 116, 96, 0.5); color: var(--brass);
  font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
  padding: 1px 5px; line-height: 1.5; font-variant-numeric: tabular-nums; }
.packempty { color: var(--dim); font-size: 14px; margin: 10px 2px; }
.packdetail .sheet-close { display: none; }

/* ── THE REMOTE SIDE ────────────────────────────────────────
   DFU's window is TWO lists side by side, so these are PEERS sharing
   one grid cell rather than a panel hung off the pack. Splitting the
   middle column keeps the outer three-column shape - and every phone
   rule written against it - exactly as it was. */
.packlists {
  display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--gap); min-height: 0; background: var(--iron);
}
.packremote { background: #10141a; }
.remotehead {
  display: flex; align-items: flex-start; justify-content: space-between;
  gap: 10px; flex-wrap: wrap; margin: 0 0 14px;
}
.remotewho h3 {
  font-family: var(--display); font-weight: 300; font-size: 19px; margin: 0;
}
.remotewho .meta {
  color: var(--dim); font-size: 12px; margin: 5px 0 0; font-variant-numeric: tabular-nums;
}
.remoteacts { display: flex; gap: 6px; flex-wrap: wrap; }
.goldfield {
  display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
  padding: 12px; margin: 0 0 14px; background: var(--ink); border: 1px solid var(--iron);
}
.goldfield input {
  flex: 1 1 90px; min-width: 0; min-height: 44px; padding: 0 12px;
  background: #0b0e12; border: 1px solid var(--iron); color: var(--bone);
  font: inherit; font-size: 15px; font-variant-numeric: tabular-nums;
}
.goldfield input:focus-visible { outline: none; border-color: var(--brass); }
/* DISC25-F: the card's how-many field - a stack's split, beside the button that moves it */
.qtyfield { display: inline-flex; align-items: center; gap: 6px; color: var(--dim); font-size: 12px; }
.qtyfield input {
  width: 64px; min-height: 36px; padding: 0 8px;
  background: #0b0e12; border: 1px solid var(--iron); color: var(--bone);
  font: inherit; font-size: 14px; font-variant-numeric: tabular-nums;
}
.qtyfield input:focus-visible { outline: none; border-color: var(--brass); }
/* ONLINE1: the Online card's two fields */
.card label.field { display: flex; flex-direction: column; gap: 6px; margin: 10px 0; }
/* ACC1e F1: THIS SAID var(--ash) AND NOTHING HAS EVER DEFINED --ash.
   Not here, not in enhanced.html, not in the landing page's injected
   block - the whole tree has one USE of it and no declaration, so the
   property was invalid at computed-value time and every field label in
   the enhanced skin inherited --bone instead. ONLINE1's two fields, the
   save slot's name, and now this arc's: all of them have been drawing
   their labels in the body colour since the day the rule was written.
   --dim is what this wanted and what .card .meta one line up already
   uses for exactly this job - a quiet label over a loud value. */
.card label.field .fieldlabel { font-size: 13px; color: var(--dim); letter-spacing: 0.02em; }
.card label.field input {
  min-height: 44px; padding: 0 12px;
  background: #0b0e12; border: 1px solid var(--iron); color: var(--bone);
  font: inherit; font-size: 15px;
}
.card label.field input:focus-visible { outline: none; border-color: var(--brass); }
/* NAME-F2: a refused name, and the reason under it. Red on the border
   rather than a red field - the text the player typed stays readable,
   which matters when what they have to do is edit it. */
.card label.field.bad input { border-color: #b4553f; }
.card p.meta.nameveto:empty { display: none; }
.card p.meta.nameveto.bad { color: #e0906f; }

/* ── ACC1e: THE ACCOUNT CARD ────────────────────────────────────────
   Three shapes and no fourth. Everything else it wears - .card, .tag,
   .acts, .act, label.field, .fieldlabel - already existed and is
   already worn by the Online pane this card sits inside. A screen that
   arrives with its own palette is the drift this file exists to stop. */

/* A FIELD'S HINT. The rule under the box ("at least 8 characters"),
   said BEFORE the press rather than as a refusal after it. Quieter
   than the label above it, because it is help rather than a name. */
.card label.field .fieldhint { font-size: 11.5px; color: var(--dim); opacity: 0.85; }
/* ...AND THE GROUP NEEDS ROOM UNDER IT, which the probe measured
   rather than anybody eyeballing: at the shared 10px field margin a
   hint sat 6px under its own box and 10px above the NEXT field's
   label. Nearer its own, but by four pixels - which is not a grouping
   a reader can see, so the hint read as a caption for the box below
   it. The gap inside a field stays 6px and the gap BETWEEN fields
   goes to 20px, so proximity says what belongs together. */
.card.acct label.field { margin: 0 0 20px; }

/* THE REFUSAL, AND THE CONFIRMATION. NAME-F2's own reasoning: the red
   lives on the border and on this line, never on the text the player
   typed, because what they have to do next is EDIT that text. The good
   line is verdigris rather than a green - brass turning is the skin's
   own idea of a thing that has settled. */
.card p.meta.acctwhy { margin: 10px 0 14px; font-size: 13px; }
.card p.meta.acctwhy.bad { color: #e0906f; }
.card p.meta.acctwhy.good { color: var(--verdigris); }
.card p.meta.acctwhy:empty { display: none; }

/* TERMS1: THE BOXES - "reviewed and checked off by players before
   creating an account". A tick and a sentence whose last words are the
   document it agrees to. The whole ROW is the tick's target (it is a
   <label>) and stands at the field's 44px, because a 20px square is not
   a thumb's; the sentence is the field label's quiet size; the box is
   the browser's own, in the skin's brass (accent-color) rather than a
   drawn fourth shape - told the page is dark (color-scheme), or its
   UNTICKED face is the browser's white square, the one bright thing on
   the card; and the document's name is brass and underlined, so the
   thing to read is the thing that looks pressable. */
.card label.acctagree {
  display: flex; align-items: center; gap: 10px; min-height: 44px; margin: 0 0 6px;
  font-size: 13px; line-height: 1.45; color: var(--dim); cursor: pointer;
}
.card label.acctagree input { flex: 0 0 auto; width: 20px; height: 20px; margin: 0; accent-color: var(--brass); color-scheme: dark; cursor: pointer; }
.card label.acctagree a { color: var(--brass); text-decoration: underline; text-underline-offset: 3px; }
.card label.acctagree input:focus-visible, .card label.acctagree a:focus-visible { outline: 2px solid var(--brass); outline-offset: 2px; }

/* ACC3c - THE WARDROBE. Mac put the equip control on the account card
   ("tap the account icon to equip 1 feature along with signing out"),
   so it borrows .fieldlabel and .act's own vocabulary rather than
   bringing a third one - the rule this whole card was written under.

   A TITLE BUTTON CARRIES ITS COLOUR AND NOTHING ELSE UNTIL IT IS WORN.
   Unworn it is an outline in the title's own gold or red; worn it
   fills, which is the one state change a player has to be able to read
   across the room. The colour is written by the card from
   ui/playerBadge.js - the same table the name over a head reads - so
   the swatch here and the label in the world cannot drift.

   THE GLYPHS ARE NOT BUTTONS and must not look like them: no border,
   no hover, no pointer. A glyph is true of an account rather than
   chosen by one, and a control that cannot be operated is worse than
   a fact that never offered. */
.card .acctwear { margin: 0 0 16px; display: flex; flex-direction: column; gap: 6px; }
.card .acctwear .fieldlabel { margin-top: 6px; }
.card .acctwearrow { display: flex; flex-wrap: wrap; gap: 8px; }
.card button.acttitle {
  font: inherit; font-size: 13px; letter-spacing: 0.04em;
  padding: 6px 12px; border: 1px solid currentColor; border-radius: 2px;
  background: transparent; cursor: pointer;
}
.card button.acttitle:hover:not(:disabled) { background: rgba(255, 255, 255, 0.06); }
.card button.acttitle:disabled { opacity: 0.5; cursor: default; }
/* WORN vs HELD, and the difference has to read WITHOUT the colour,
   because the colour already says WHICH title and cannot also say
   whether it is on. Unworn is dimmed to two thirds behind a hairline;
   worn is full strength behind a doubled edge with a faint fill under
   it. A filled swatch was tried and refused: filling with
   currentColor leaves the label on its own colour, invisible. */
.card button.acttitle { opacity: 0.62; }
.card button.acttitle.worn {
  opacity: 1; border-width: 2px; padding: 5px 11px;
  background: rgba(255, 255, 255, 0.08);
}
.card .acctglyph {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 12.5px; color: var(--dim);
}
.card .acctglyphart { width: 15px; height: 15px; display: block; }
/* GLYPH-WEAR: a glyph is pressed off and on - a bare chip, faded while hidden, full strength while shown */
.card button.acctglyph {
  background: none; border: 1px solid transparent; border-radius: 6px; padding: 3px 6px;
  font: inherit; font-size: 12.5px; color: var(--dim); cursor: pointer; opacity: 0.45;
}
.card button.acctglyph.worn { opacity: 1; }
.card button.acctglyph:hover:not(:disabled) { border-color: rgba(255, 255, 255, 0.18); }
.card button.acctglyph:disabled { cursor: default; }
/* PATREON-LINK - THE PATRON'S ROW. Link Patreon is a LINK (the account read carries it, so the press opens it at once,
   as TERMS1's document links do), worn as an .act so it reads as the button it is; what the pledge holds is a fact
   beside it, drawn as the glyphs' facts are - quiet, not pressable. */
.card a.act { display: inline-flex; align-items: center; text-decoration: none; }
.card .acctpatreon .acctwearrow { align-items: center; }
.card .acctpatreonstate { display: inline-flex; align-items: center; font-size: 12.5px; color: var(--dim); }
/* One rule per title and per glyph, WALKED out of the vocabulary in
   ui/playerBadge.js - so the gold on this card and the gold over a
   head are one fact, and a title added to the token gets a colour
   here without anybody remembering to write one. */
${oc()}

/* THE SIGNED-IN FACTS. A key and a value per row, the key quiet and
   letter-spaced the way .qs-mark and the rarity headings are, so it
   reads as a label rather than as half a sentence. */
.card ul.acctfacts { list-style: none; margin: 0 0 16px; padding: 0; }
.card ul.acctfacts li {
  display: flex; align-items: baseline; gap: 12px;
  padding: 7px 0; border-bottom: 1px solid var(--iron);
}
.card ul.acctfacts li:last-child { border-bottom: 0; }
.card ul.acctfacts .acctkey {
  flex: 0 0 96px; font-size: 11px; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--dim);
}
.card ul.acctfacts .acctval { flex: 1 1 auto; min-width: 0; color: var(--bone); font-size: 15px; overflow-wrap: anywhere; }
/* RENOWN1 - THE RENOWN, LEFT OF THE NAME on the account card: the
   plate the name over a head wears (ui/nameLayer.js .dfname-renown), at the
   heading's scale. */
.card h3 .acctrenown { display: inline-block; vertical-align: middle; font-size: 0.6em; line-height: 1.2;
  padding: 1px 5px; border-radius: 2px; min-width: 1.4em; text-align: center; font-variant-numeric: tabular-nums;
  color: #f2c46b; background: rgba(242, 196, 107, 0.1); border: 1px solid rgba(242, 196, 107, 0.8); margin-right: 0.35em; }
.card h3 .acctrenown:empty { display: none; }   /* AUDIT RENOWN1 UI-8: an empty box is never drawn, whatever the script above it does */

/* ═══ PROFILE-MENU: THE SIGNED-IN CARD IS A PROFILE ════════════════
   (2026-10-07, Mac: "organize and detail the player profile (the top
   right icon section)".) ui/enhancedAccount.js draws it in the order a
   player reads one - WHO (the plate), WHAT THEY HAVE DONE (the record,
   the characters), WHAT THEY WEAR, THE ACCOUNT - each a section under a
   head of its own. Paint here; under Plus the record's tiles play the
   kit's panel role (ui/enhancedFrame.js). */
.card.acctin { display: flex; flex-direction: column; gap: 16px; }
/* THE PLATE: the portrait over the name, on the window's one axis. */
.card .acctplate { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center;
  padding-bottom: 16px; border-bottom: 1px solid var(--iron); }
.card .acctportrait { position: relative; flex: none; width: 88px; height: 88px; border-radius: 50%; overflow: hidden;
  border: 3px solid var(--brass); background: radial-gradient(circle at 50% 38%, #1b2029 0%, #0a0c11 72%);
  box-shadow: 0 0 0 2px var(--iron), 0 3px 10px rgba(0,0,0,0.65); }
.card .acctportrait canvas { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 20%;
  image-rendering: pixelated; }
.card .acctportrait.hasface { background: #0a0c11; }   /* the face fills the well - no night glow behind it */
.card .acctsilhouette { position: absolute; inset: 0; }
.card .acctsilhouette::before { content: ''; position: absolute; left: 31%; top: 16%; width: 38%; height: 40%;
  border-radius: 48% 48% 44% 44%; background: #3a424d; }
.card .acctsilhouette::after { content: ''; position: absolute; left: 12%; top: 58%; width: 76%; height: 60%;
  border-radius: 50% 50% 0 0; background: #3a424d; }
.card .acctident { display: flex; flex-direction: column; align-items: center; gap: 6px; min-width: 0; max-width: 100%; }
.card .acctident h3 { margin: 0; overflow-wrap: anywhere; }
/* the title worn, in its own colour (the badge rule below), and the glyphs shown */
.card .acctworn { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 6px 10px; }
.card .acctworntitle { font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; }
.card .acctwornword, .card button.acttitle .acttitleword { display: inline-block; }
.card h3 .acctname { vertical-align: middle; }
.card .acctworn .acctglyph { gap: 0; }
.card .acctworn .acctglyphart { width: 18px; height: 18px; }
.card .acctcharline { font-size: 13px; color: var(--dim); overflow-wrap: anywhere; }
/* THE SECTIONS: two columns where the window is wide, one where it is not (a container, so the WINDOW's width says) */
.card.acctin { container-type: inline-size; }
.card .acctgrid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 16px; align-items: start; }
/* AUDIT PROFILE-MENU P2: two columns only where both have something in them (ui/enhancedAccount.js marks the grid) */
@container (min-width: 600px) { .card .acctgrid.acctgrid2 { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 20px; } }
.card .acctcol { display: flex; flex-direction: column; gap: 16px; min-width: 0; }
.card .acctsec { min-width: 0; }
.card .acctsec .acctwear, .card .acctsec ul.acctfacts { margin-bottom: 0; }
/* a section's head: the heading caps between two engraved wings */
.card .acctsechead { display: flex; align-items: center; gap: 10px; margin: 0 0 8px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.22em; text-indent: 0.22em; text-transform: uppercase; color: var(--brass); }
.card .acctsechead::before, .card .acctsechead::after { content: ''; flex: 1; height: 1px; background: var(--iron); }
/* THE RECORD: a tile a deed - the figure large, its name small under it */
.card ul.acctfacts.acctrecord { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
.card ul.acctfacts.acctrecord li { flex-direction: column; align-items: center; justify-content: center; gap: 4px;
  padding: 10px 8px; border: 2px solid var(--iron); background: rgba(0,0,0,0.25); text-align: center; }
.card ul.acctfacts.acctrecord li:last-child { border-bottom: 2px solid var(--iron); }
.card ul.acctfacts.acctrecord .acctkey { order: 2; flex: none; font-size: 11px; letter-spacing: 0.12em; }
.card ul.acctfacts.acctrecord .acctval { order: 1; flex: none; font-size: 17px; line-height: 1.2; }
.card ul.acctfacts.acctrecord .acctbar { order: 3; flex: none; margin-top: 4px; }
/* the duels' tile takes the row: its figure is words, and its bar is the share won */
.card ul.acctfacts.acctrecord li:has(.acctbar) { grid-column: 1 / -1; }
.card ul.acctfacts.acctrecord li:has(.acctbar) .acctval { font-size: 15px; }
/* THE CHARACTERS: a row each, the way to the next level drawn under it */
.card ul.acctfacts.acctchars li { flex-wrap: wrap; gap: 6px 12px; }
.card ul.acctfacts.acctchars .acctkey { display: none; }
.card ul.acctfacts.acctchars .acctval { font-size: 14px; }
/* THE BAR: a meter in the skin's brass, the browser's own <progress> told how to draw (ACC1e: no style from script) */
.card progress.acctbar { -webkit-appearance: none; appearance: none; display: block; flex: 1 0 100%; width: 100%; height: 8px;
  margin: 2px 0 0; border: 1px solid var(--iron); background: #0b0e12; color: var(--brass); }
.card progress.acctbar::-webkit-progress-bar { background: #0b0e12; }
.card progress.acctbar::-webkit-progress-value { background: linear-gradient(180deg, #f3cf86 0 2px, #c08a3e 2px 5px, #7a5424 5px); }
.card progress.acctbar::-moz-progress-bar { background: linear-gradient(180deg, #f3cf86 0 2px, #c08a3e 2px 5px, #7a5424 5px); }

/* ═══ THE RECOVERY CODE ═══════════════════════════════════════════
   THE ONE MOMENT THIS STRING EXISTS. Email is completely optional
   (Mac), so there is no address to send a reset to and this code IS
   the reset - a player who does not write it down has a forgotten
   password away from losing the account and the saves behind it.
   So it is drawn as a PLAQUE rather than as a line of text: brass on
   ink inside a brass frame, the loudest thing the skin can say
   without a colour it does not own, and wide letter-spacing because
   what happens next is a human transcribing it onto paper.
   Selectable on purpose - user-select: all makes one click take the
   whole code, since a half-copied recovery code is worse than none. */
.card .acctcode {
  margin: 4px 0 16px; padding: 16px 12px;
  border: 1px solid var(--brass); background: #0b0e12;
  text-align: center;
}
.card .acctcode code {
  /* FONT3: THE ONE WORD NOT IN THE PIXEL FACE, on purpose. The code's alphabet is Crockford's (server-account
     password.js CODE_ALPHABET) and keeps B and 8, G and 6, S and 5, O and 0 apart as different symbols - pairs
     Pixelify Sans draws alike at this size. A code mistyped from paper is an account lost, so the plaque names the
     launcher face outright rather than the --data token (which is the pixel stack in this sheet now). */
  font-family: 'Barlow Semi Condensed', system-ui, sans-serif; -webkit-font-smoothing: antialiased; font-size: clamp(17px, 4.6vw, 23px); font-weight: 600;
  letter-spacing: 0.22em; color: var(--brass);
  word-break: break-all; user-select: all; -webkit-user-select: all;
}
/* The phone: 0.22em of tracking on a 23-line is what pushes a 23
   character code into a second line, and a code that wraps mid-group
   is a code somebody mistypes. The clamp above shrinks it first; this
   loosens the grip rather than letting it overflow the card. */
@media (max-width: 420px) {
  .card .acctcode { padding: 14px 8px; }
  .card .acctcode code { letter-spacing: 0.12em; }
}
.goldfield .meta { flex: 1 0 100%; color: var(--dim); font-size: 11.5px; margin: 0; }

/* THE LISTS STACK BELOW THE PACK'S OWN BREAKPOINT, not at it: two
   half-width lists are still readable at 1100px, and one of them
   sitting under the doll is not. */
@media (max-width: 1100px) {
  /* The PAIR scrolls as one when it stacks - two independently
     scrolling half-height lists in one column is a scroll trap. */
  .packlists { grid-template-columns: 1fr; grid-auto-rows: min-content; overflow: auto; }
  .packlists .packcol { overflow: visible; }
  /* THE LIST YOU CAME FOR GOES FIRST. Opening a corpse and being shown
     your own pack is the screen answering a question nobody asked; the
     ground and the wagon are the other way round, because there you
     came to put something down. */
  .packlists.remotefirst .packremote { order: 0; }
  .packlists.remotefirst > .packcol:not(.packremote) { order: 1; }
}

/* U53's "THE SCHEMATIC GOES LAST ON A PHONE" stood here - an order rule over .pack's children. PX19f put the region
   in .pack-main and the list in .pack-dock, so it ordered nothing, and it is gone (PACK-PHONE, FIELD BUGS 2026-09-30):
   a phone's list is kept on the screen by the stacked pack's own rules now, the dock's floor and the region's scroll
   (the pack's rules, after PX31's). */

.iconnote { color: var(--dim); font-size: 11.5px; margin: 12px 2px 0; line-height: 1.5; }

@media (max-width: 860px) {
  .pack { grid-template-columns: 1fr; grid-auto-rows: min-content; overflow: auto; }
  .packcol, .charcol { overflow: visible; }
  .slotmap svg { max-height: 40vh; }
  .figure-doll img { max-height: 30vh; }
  .pack-id { padding: 20px; }
  .pack-id h2 { font-size: 25px; }
  /* THE DETAIL IS A SHEET, the same answer the settings pane gives to
     the same problem: three columns do not fit one phone, and a third
     column below the fold is a control the player cannot reach. It
     rises when an item is picked. */
  .packdetail {
    position: fixed; left: 0; right: 0; bottom: 0; max-height: 70dvh; z-index: 20;
    overflow: auto; transform: translateY(101%); transition: transform 0.22s ease;
    border-top: 1px solid var(--brass);
    padding-bottom: max(24px, calc(env(safe-area-inset-bottom) + 24px));
  }
  .packdetail.open { transform: translateY(0); }
  .packdetail .sheet-close {
    display: block; width: 100%; padding: 14px; min-height: 48px;
    color: var(--dim); font-size: 12px; letter-spacing: 0.16em;
    text-transform: uppercase; border-bottom: 1px solid var(--iron); text-align: center;
  }
  /* QS2: FIVE BUTTONS, ONE PHONE. The .acts row already wraps, so nothing was
     ever cut off - but 20px of horizontal padding on each of five turns one row
     into three inside a sheet that is already 70dvh tall. Narrower HERE only
     (the settings pane's own pills are untouched), and the 46px min-height the
     44px touch target rests on is kept exactly: this changes how wide a button
     is, never how tall. */
  .packdetail .acts { gap: 6px; }
  .packdetail .acts .act { padding-left: 12px; padding-right: 12px; flex: 1 1 auto; text-align: center; }
}

/* ── THE WIZARD ─────────────────────────────────────────────
   Character creation borrows the menu's shell whole - same rail, same
   panes, same phone laws - because it is the same interface one press
   further in. What it adds is a WALK: the rail shows where you are
   rather than where you may go, and an action bar sits under the
   stage because Back must be a control you can see (AUDIT 17j found
   the wizard's back arms wrong on every screen it checked). */
.wizard .railbtn { cursor: default; pointer-events: none; }   /* DISC10-B: the walk's rail is a readout - no pointer, no hover */
.wizard .railbtn.done .rk { color: var(--dim); }
.wizard .railbtn.done { border-left-color: #3a3226; }
.wizard .railbtn.todo .rk { color: #4a4740; }
.wizard .railbtn[disabled] { cursor: default; }
.wizard .pane { display: flex; flex-direction: column; }

.stagebody {
  flex: 1; min-height: 0; display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 340px);
  /* CHARGEN-REFLEX: the row must be able to SHRINK. A grid's implicit
     row is auto, which is max-content, so a stage taller than the
     pane kept its full height while .stagebody itself shrank under
     flex:1 + min-height:0 - and the difference spilled out of the
     bottom as VISIBLE overflow, underneath the opaque .actionbar that
     follows it. minmax(0, 1fr) is what lets the row give way so the
     stage can scroll inside its own box instead. */
  grid-template-rows: minmax(0, 1fr);
  gap: var(--gap); background: var(--iron);
}
.stagebody.solo { grid-template-columns: 1fr; }
.stagebody > .detail { background: #12161b; overflow: auto; }
.stagebody .empty { margin: 30px; background: var(--slate); }

.actionbar {
  display: flex; gap: 8px; padding: 12px 20px;
  padding-bottom: max(12px, env(safe-area-inset-bottom));
  border-top: 1px solid var(--iron); background: var(--ink);
}

/* ── A STAGE THAT IS ONLY ITS QUESTION ──────────────────────────
   Sex and the class METHOD are two choices each. Two choices get two
   large targets and an empty screen around them: a two-button question
   dressed as a form is a two-button question that reads as work. */
/* CHARGEN-REFLEX: "safe center" and a scroll, because plain "center"
   is a trap. When the content is taller than the box, centred content
   overflows BOTH ways and the half above the start edge can never be
   scrolled to - "safe" falls back to "start" in exactly that case, and
   overflow-y then makes the rest reachable. This stage is centred when
   it fits and scrolls when it does not, which is what a question with
   five tall answers needs on a short window. */
.choose { display: grid; place-content: safe center; gap: 28px; padding: 40px 30px; height: 100%; overflow-y: auto; }
.choose h2 {
  font-family: var(--display); font-weight: 300; font-size: 30px;
  margin: 0; text-align: center;
}
.bigchoice { display: grid; grid-template-columns: repeat(2, minmax(200px, 260px)); gap: 12px; }
.bigchoice.tall { grid-template-columns: minmax(280px, 420px); }
.bigbtn {
  padding: 26px 22px; min-height: 88px; border: 1px solid #39424e;
  background: #12161b; color: var(--dim); text-align: center;
  letter-spacing: 0.05em; font-size: 17px;
}
.bigchoice.tall .bigbtn { text-align: left; }
.bigbtn:hover { color: var(--bone); border-color: var(--dim); }
.bigbtn.on { color: var(--brass); border-color: var(--brass); }
.bigk { display: block; font-size: 17px; color: var(--bone); }
.bigbtn:hover .bigk { color: var(--brass); }
.bign { display: block; font-size: 13px; color: var(--dim); margin-top: 7px; letter-spacing: 0.02em; }
.stagebody > .list { background: var(--slate); overflow: auto; }

/* ── A QUESTION AND ITS ANSWERS ─────────────────────────────────
   DFU stacks ten answer buttons in two columns because it has 320x200
   to spend. The answers are SENTENCES, so one column and full width
   reads far better and costs nothing but scroll. */
.question { padding: 34px 30px 40px; max-width: 760px; margin: 0 auto; width: 100%; overflow: auto; }
.qcount {
  color: var(--brass); font-size: 11px; letter-spacing: 0.2em;
  text-transform: uppercase; margin-bottom: 12px;
}
.question h2 {
  font-family: var(--display); font-weight: 300; font-size: 27px;
  margin: 0 0 24px; line-height: 1.25;
}
.answers { display: flex; flex-direction: column; gap: 8px; }
.answer {
  padding: 15px 18px; min-height: 52px; border: 1px solid var(--iron);
  background: #12161b; color: var(--dim); font-size: 15px; line-height: 1.4;
}
.answer:hover { color: var(--bone); border-color: var(--brass); }
.repbox { max-width: 560px; }
.repbox p { color: var(--dim); font-size: 14px; margin: 0 0 8px; }

/* ── THE NAME BOX ───────────────────────────────────────────────── */
.namebox {
  width: min(420px, 80vw); padding: 14px 16px; min-height: 52px;
  background: #12161b; border: 1px solid #39424e; color: var(--bone);
  font-family: var(--display); font-size: 24px; letter-spacing: 0.02em;
  text-align: center;
}
.namebox:focus { outline: none; border-color: var(--brass); }
.choose .acts { justify-content: center; }

/* ── THE FACE PICKER ────────────────────────────────────────────
   DFU shows one portrait with a previous/next pair because it has
   320x200 to spend. Ten fit here at once, and a picker you can see all
   of is one decision instead of ten. */
.facegrid { display: grid; grid-template-columns: repeat(5, auto); gap: 10px; justify-content: center; }
.facecell {
  padding: 6px; border: 1px solid var(--iron); background: #12161b;
  display: grid; place-items: center; min-width: 56px; min-height: 64px;
  image-rendering: pixelated;
}
.facecell canvas { display: block; image-rendering: pixelated; }
.facecell:hover { border-color: var(--dim); }
.facecell.on { border-color: var(--brass); box-shadow: inset 0 0 0 1px var(--brass); }
.facenum { color: #4a4740; font-size: 15px; }

/* ── POOLS AND SPINNERS ─────────────────────────────────────────
   The pool is the gate on both of these screens - DFU will not leave
   until it is spent - so it is stated, and the primary says how many
   are left rather than refusing in silence. */
.poolbar {
  display: flex; justify-content: space-between; align-items: baseline; gap: 28px;
  padding: 12px 18px; border-bottom: 1px solid #20262e;
  position: sticky; top: 0; background: var(--slate); z-index: 2;
}
/* CHAR1: the bar carries one figure or two, so each key/value pair is a
   CELL. A cell spreads its own key and value to its ends and grows to
   fill what it is given - one cell is the row, and is the bar exactly as
   it was before the total joined it; two share the row in halves. */
.poolcell { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; flex: 1 1 auto; }
.poolk { color: var(--dim); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; }
.poolv { color: var(--brass); font-size: 19px; font-variant-numeric: tabular-nums; }
@media (max-width: 520px) {
  /* two figures do not fit a phone's width side by side - they stack,
     rather than squeezing the total's now-arrow-final onto two lines */
  .poolbar { flex-wrap: wrap; row-gap: 6px; }
  .poolcell { flex-basis: 100%; }
}

.skillpane { padding: 24px 30px 34px; overflow: auto; max-width: 760px; margin: 0 auto; width: 100%; }
.skillgroup { margin-bottom: 22px; }
.skillhead {
  display: flex; justify-content: space-between; align-items: baseline;
  padding: 0 0 8px; border-bottom: 1px solid var(--iron); margin-bottom: 4px;
}
.skillk { color: var(--bone); font-size: 14px; letter-spacing: 0.12em; text-transform: uppercase; }
.skillpool { color: var(--brass); font-size: 12px; }
.skillpane .row { border-bottom: 1px solid #20262e; }
.skillpane .acts { justify-content: flex-end; }
/* CC-GRID: the custom-class builder on one page. Two columns from 900px
   up - the twelve skills down one, the attributes and the class itself
   down the other - with the name and the acts spanning both; the
   list it always was below that width. */
@media (min-width: 900px) {
  .skillpane.builder { max-width: 1180px; display: grid; grid-template-columns: 1fr 1fr; column-gap: 34px; align-content: start; }
  .skillpane.builder > .span { grid-column: 1 / -1; }
  .skillpane.builder .builder-col { min-width: 0; }
}

/* ── REVIEW ─────────────────────────────────────────────────────
   The stage that closes the wizard. Everything on it is a control you
   have already met, which is the point: a review you cannot edit is a
   receipt. */
.reviewhead {
  display: flex; gap: 16px; align-items: center; padding: 18px;
  border-bottom: 1px solid var(--iron); background: #12161b;
  position: sticky; top: 0; z-index: 2;
}
.reviewface { border: 1px solid var(--iron); padding: 4px; line-height: 0; }
.reviewface canvas { display: block; image-rendering: pixelated; }
.reviewid { flex: 1; min-width: 0; }
.namebox.small {
  width: 100%; font-size: 20px; text-align: left; padding: 8px 10px; min-height: 44px;
}
.reviewsub { color: var(--dim); font-size: 12px; letter-spacing: 0.06em; margin-top: 6px; }
.skillhead.review { padding: 14px 18px 8px; margin-bottom: 0; }
.reflexpick { display: flex; flex-direction: column; gap: 4px; margin: 0 0 22px; }
.reflexbtn {
  padding: 11px 14px; min-height: 44px; border: 1px solid var(--iron);
  background: #12161b; color: var(--dim); font-size: 14px;
}
.reflexbtn:hover { color: var(--bone); border-color: var(--dim); }
.reflexbtn.on { color: var(--brass); border-color: var(--brass); }

/* ── THE PROVINCE MAP ───────────────────────────────────────
   Traced from the player's own TAMRIEL2.IMG (ui/provinceMap.js), so
   these are Bethesda's coastlines and ours is only the ink. Unselected
   provinces are drawn as outline alone: a map where every region is
   filled is a map where none of them is chosen. */
.mappane { padding: 20px; display: grid; place-items: center; min-height: 0; }
.map { width: 100%; height: 100%; min-height: 0; display: block; }
.prov {
  fill: #1b2027; stroke: #39424e; stroke-width: 0.6;
  stroke-linejoin: round; transition: fill 0.12s ease, stroke 0.12s ease;
  cursor: pointer;
}
/* CSS owns the highlight. It used to be a class the view re-rendered
   itself to apply, and that repaint destroyed the node the pointer was
   over - see ui/enhancedChargen.js's pointerenter handler. */
.prov:not(.inert):hover { fill: #2b3440; stroke: var(--dim); }
/* The Imperial Province: drawn, unlit, unpressable. */
.prov.inert { fill: #141922; stroke: #252c35; cursor: default; }
.provlabel.inert { fill: #4a4740; }
.prov.on { fill: rgba(192, 138, 62, 0.22); stroke: var(--brass); stroke-width: 0.9; }
.provlabel {
  fill: var(--dim); font-family: var(--data); font-size: 6px;
  letter-spacing: 0.06em; pointer-events: none; user-select: none;
}
.provlabel.on { fill: var(--brass); }
.mapnote { color: var(--dim); font-size: 13px; margin: 0 0 16px; }

/* The map's own fallback, and a real control in its own right: eight
   homelands read perfectly well as eight buttons. */
.racegrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 8px; }
.racecell {
  padding: 16px; min-height: 56px; border: 1px solid var(--iron);
  color: var(--dim); letter-spacing: 0.04em;
}
.racecell:hover { color: var(--bone); border-color: var(--dim); }
.racecell.on { color: var(--brass); border-color: var(--brass); }

/* The wizard's phone progress strip. Hidden on a desk, where the rail
   already says it at length. */
.stepstrip { display: none; }
.segs { display: flex; gap: 3px; }
.seg { flex: 1; height: 2px; background: var(--iron); }
.seg.on { background: var(--brass); }
.steptext {
  color: var(--dim); font-size: 11px; letter-spacing: 0.14em;
  text-transform: uppercase; margin-top: 8px;
}

/* THE PRE-MERGE AUDIT (0927b): THE REVIEW'S HEADER STOPS PINNING WHERE THE SCREEN IS SHORT. With the stage one
   scroller, the sticky header - the face at the scale the real host draws it, 105-175px - covered the whole of a
   landscape phone's 136-186px stage, and not one of the 40 steppers under it could be reached. A short touch screen
   wider than 860px (a Pro Max on its side) had 32px left under it. A tall phone keeps it pinned: there it fits. */
@media (max-height: 500px) {
  .stagebody.stacked .reviewhead { position: static; }
}

/* THE PRE-MERGE AUDIT (0927b): THE RACE AND CLASS STAGES ARE ONE COLUMN ONLY WHERE THE SCREEN IS SHORT. On a
   landscape phone the phone block's 1fr row left the map 0-30px (its provinces drawn at 10x11px) and the class list
   0-8px; stacked, every province and row is reached by scrolling. A TALL phone keeps the rows below: stacked there,
   the class stage's "Read about the X" sat under all 19 rows, where the rows had put it on screen. A confirm SHEET
   keeps its own scroll (made visible, "Play as a Healer" could not be reached). */
@media (max-width: 860px) and (max-height: 500px) {
  .stagebody.stacked-short { display: block; overflow-y: auto; }
  .stagebody.stacked-short > .list, .stagebody.stacked-short > .detail:not(.wizsheet) { overflow: visible; }
}

/* FIELD 2026-09-27 (michelle!!, "unable to add attributes (mobile)"): THE MENU'S SHEET RULE HANGS OFF A COARSE
   POINTER TOO (AUDIT UI's query, above), and the wizard undid it only under 860px - so a touch screen wider than
   that (an iPhone Pro Max or an iPad on its side) had the stats card, and its Continue, and the review's Begin
   pushed below the screen as a closed sheet. The reset rides the rule's own query; the phone's look below. */
@media (max-width: 860px), (pointer: coarse) {
  .stagebody > .detail:not(.wizsheet) {
    position: static; transform: none; max-height: none; z-index: auto;
    border-top: 0; padding-bottom: 0;
  }
  .stagebody > .detail:not(.wizsheet) .sheet-close { display: none; }
}

@media (max-width: 860px) {
  /* ONE COLUMN. The map takes the height it needs for its own aspect
     and the prompt sits under it - a picker whose prompt is off-screen
     is a picker that looks broken. Only the DESCRIPTION becomes a
     sheet, raised by the press that chose the province, because it is
     long and because DFU's is modal. */
  .stagebody { grid-template-columns: 1fr; grid-template-rows: auto 1fr; }
  /* the map keeps the room it had - it is the picker, not a header */
  .stagebody { grid-template-rows: 1fr auto; }
  /* FIELD 2026-09-27 (michelle!!, "i can't see the different options"): ...but on the STATS and REVIEW stages the
     1fr row is the LIST and the card under it is sized first - about 454px of "What these buy you" and Roll again -
     so on an iPhone with Safari's toolbar the attribute rows had 0-5px, each part scrolling inside its own box on a
     page that cannot scroll. Those two are one column that scrolls as one. */
  .stagebody.stacked { display: block; overflow-y: auto; }
  .stagebody.stacked > .list, .stagebody.stacked > .detail { overflow: visible; }
  .mappane { padding: 12px; }
  /* The MENU's phone rule turns every .detail into a sheet, and this
     one is not the menu's - so the inline arm undoes it explicitly.
     A shared class name across two screens is worth the reset: the
     alternative is a second class doing the same job in a second
     stylesheet, which is how two screens drift. */
  .stagebody > .detail:not(.wizsheet) {
    position: static; transform: none; max-height: none; z-index: auto;
    border-top: 1px solid var(--iron); padding-bottom: 0;
    background: var(--slate);
  }
  .stagebody > .detail:not(.wizsheet) .sheet-close { display: none; }
  .stagebody > .detail.wizsheet {
    position: fixed; left: 0; right: 0; bottom: 0; max-height: 72dvh; z-index: 20;
    background: #12161b;
    transform: translateY(101%); transition: transform 0.22s ease;
    border-top: 1px solid var(--brass);
    padding-bottom: max(76px, calc(env(safe-area-inset-bottom) + 76px));
  }
  .stagebody > .detail.wizsheet.open { transform: translateY(0); }
  /* the rail is the desk's; the strip is the phone's - never both */
  .wizard .rail { display: none; }
  .choose { padding: 28px 20px; gap: 22px; }
  .choose h2 { font-size: 24px; }
  .question { padding: 22px 20px 30px; }
  .facegrid { grid-template-columns: repeat(4, auto); gap: 8px; }
  .skillpane { padding: 18px 20px 28px; }
  .question h2 { font-size: 22px; }
  .bigchoice, .bigchoice.tall { grid-template-columns: 1fr; }
  .wizard .stepstrip { display: block; order: 3; background: var(--ink); padding: 12px 20px max(12px, env(safe-area-inset-bottom)); }
  .wizard .brand { padding-bottom: 12px; }
  .provlabel { font-size: 7px; }
}

/* ── THE HELD MAP (MAP1, 2026-09-18) ───────────────────────
   The enhanced travel map is Mac's own sprite of two hands holding a
   parchment (public/art/held-map.png), with the Iliac Bay inked onto
   the sheet by ui/inkMap.js. The root is OPAQUE black - the sprite's
   own ground - so the world beneath is never seen; the stage is the
   sprite's 4:3 letterboxed into the viewport, the ink canvas lies on
   the paper's rectangle and the hands canvas keys the thumbs back over
   it. Every class is hm-prefixed (the .detail/.packcol/.empty lesson). */
/* MAP-FIELD2 (Mac): the map is HELD, so the world is behind it on both
   lanes - the root's own black made it a picture of hands rather than
   hands, and it is what put the sprite in a letterbox. */
.hmroot {
  position: fixed; inset: 0; z-index: 13; overflow: hidden;
  background: transparent; cursor: grab; touch-action: none;
  font-family: var(--body, sans-serif); color: var(--bone);
}
.hmroot:active { cursor: grabbing; }
/* FIELD BUGS 2026-10-09e MAP-SCALE ("icons and text too small on high resolutions"): THE MAP'S SCALE (ui/mapScale.js,
   set on the root by ui/heldMap.js _layout as --hm-ui) - every piece over the sheet is zoomed by it as one, as the
   sheet's own ink is drawn at it. A zoomed box multiplies its viewport units too (standardized CSS zoom), so every
   bound below that is written in vw or vh divides by it: a bound stays the screen's, its margins the chrome's. */
.hmroot { --hm-ui: 1; }
.hmroot > :not(.hmstage) { zoom: var(--hm-ui, 1); }
/* MAP3: the hands lane - the Morrowind arm and the world show through,
   the ink canvas lies on the held paper under its matrix3d */
.hmroot.hmlanehands .hmink { will-change: transform; }
/* AUDIT-MAP2: the foot had the root's black behind it; over the world it
   needs its own scrim - MAP-FIELD2: on BOTH lanes now, for the same
   reason, because neither has a black behind it any more */
.hmroot .hmfoot { background: rgba(10, 12, 17, 0.94); padding: 6px 10px; border-radius: 4px;
  /* EM3-3D fix (Mac's shot: the key tips ran into the HUD's bars): near-opaque, so the vitals and the HUD's words
     under the window do not read through the line, and never wider than the screen - it wraps instead */
  max-width: calc(100vw / var(--hm-ui, 1) - 36px); flex-wrap: wrap; row-gap: 4px; }
.hmstage { position: absolute; will-change: transform; }
/* the painting is 1448x1086 and is only ever shown SMALLER than that, so
   it is scaled smooth - a pixelated downscale would alias its dither.
   MAP-FIELD2: it is a CANVAS now, not an <img> - the painting's own
   black matte is keyed off into it before the stage shows it */
.hmsprite {
  position: absolute; inset: 0; width: 100%; height: 100%; display: block;
  user-select: none; -webkit-user-drag: none; pointer-events: none;
}
.hmink { position: absolute; display: block; }
.hmhands {
  position: absolute; inset: 0; width: 100%; height: 100%; display: block;
  pointer-events: none;
}
.hmtop {
  position: absolute; top: 0; left: 0; right: 0; display: flex;
  align-items: flex-start; gap: 14px; padding: 14px 18px;
  pointer-events: none;
}
.hmlabel {
  flex: 1 1 auto; min-width: 0; font-family: var(--display);
  font-weight: 300; font-size: 24px; line-height: 1.2;
  text-shadow: 0 1px 8px rgba(0,0,0,0.8); min-height: 30px;
}
.hmsearch { position: relative; flex: 0 1 300px; pointer-events: auto; }
.hmsearch input {
  width: 100%; min-height: 44px; padding: 8px 12px;
  background: rgba(10, 13, 17, 0.82); border: 1px solid var(--iron);
  color: var(--bone); font-size: 14px;
}
.hmsearch input:focus { outline: none; border-color: var(--brass); }
.hmresults {
  display: none; position: absolute; top: 100%; left: 0; right: 0;
  margin: 4px 0 0; padding: 0; list-style: none; max-height: calc(46vh / var(--hm-ui, 1));
  overflow: auto; background: rgba(10, 13, 17, 0.94);
  border: 1px solid var(--iron); z-index: 1;
}
.hmresults.open { display: block; }
.hmresult {
  display: flex; justify-content: space-between; gap: 12px; width: 100%;
  min-height: 44px; padding: 9px 12px; text-align: left; font-size: 13.5px;
}
.hmresult:hover { background: #12161b; }
.hmresult-region { color: var(--dim); font-size: 12px; }
.hmclose { pointer-events: auto; }
.hmfindme { pointer-events: auto; margin-right: 8px; }
.hmcard {
  display: none; position: absolute; right: 18px; bottom: 18px;
  width: min(340px, calc(100vw / var(--hm-ui, 1) - 36px)); padding: 18px 20px;
  background: rgba(10, 13, 17, 0.92); border: 1px solid var(--iron);
  margin-bottom: env(safe-area-inset-bottom);
}
.hmcard.open { display: block; }
.hmname { font-family: var(--display); font-weight: 300; font-size: 24px; margin: 0; }
.hmmeta { color: var(--dim); font-size: 13px; margin: 4px 0 12px; }
.hmprompt { font-size: 14px; margin: 10px 0 12px; }
.hmacts { display: flex; gap: 8px; margin-top: 12px; }
.hmacts .act { flex: 1 1 auto; text-align: center; }
.act.hmghost { color: var(--dim); border-color: var(--iron); }
.hmpair { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
.hmpair-k {
  flex: 0 0 64px; color: var(--dim); font-size: 11px;
  letter-spacing: 0.12em; text-transform: uppercase;
}
.hmpick {
  flex: 1 1 auto; min-height: 44px; padding: 8px 6px; font-size: 13px;
  color: var(--dim); background: transparent; border: 1px solid var(--iron);
}
.hmpick.on { color: var(--brass); border-color: var(--brass); background: #12161b; }
.hmtrip { margin: 12px 0 0; }
/* the foot: the hint, the zoom band and (SOC6) the party legend in ONE
   row, so nothing floats at a guessed height (AUDIT SOC C10/D5's lesson) */
.hmfoot {
  position: absolute; left: 18px; bottom: 18px; display: flex; gap: 12px; align-items: center;
  padding-bottom: env(safe-area-inset-bottom); pointer-events: none;
}
.hmhint, .hmband {
  color: var(--dim); font-size: 11px; letter-spacing: 0.08em; opacity: 0.8;
}
.hmband { text-transform: uppercase; letter-spacing: 0.18em; padding-left: 12px; border-left: 1px solid var(--iron); }
/* EM3-3D fix: with no key line before it (the solid dungeon map has none) the band needs no divider */
.hmhint[style*="none"] + .hmband { padding-left: 0; border-left: 0; }
.hmlegend {
  position: static; flex: none; display: none;
  align-items: center; gap: 8px; padding: 6px 10px; font-size: 12px;
  color: var(--bone); background: rgba(10, 13, 17, 0.82);
  border: 1px solid var(--iron); pointer-events: none;
}
.hmlegend.open { display: flex; }
.hmlegdot { width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 0 1px rgba(0,0,0,0.8); }
/* MAP2: the ports button in the foot row (shown only while the mod
   restricts ships to ports), and the box over the sheet - the I key's
   building list, the H help, the resume prompt */
.hmports { display: none; pointer-events: auto; min-height: 36px; padding: 6px 12px; font-size: 12px; }
/* TV1: the Overworld door, beside the ports - shown by the sheet where the host can lift the camera */
.hmover { display: none; pointer-events: auto; min-height: 36px; padding: 6px 12px; font-size: 12px; color: var(--brass); border-color: rgba(192,138,62,0.6); }
.hmports.on { color: var(--brass); border-color: var(--brass); }
.hmbox {
  display: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
  width: min(460px, calc(100vw / var(--hm-ui, 1) - 36px)); max-height: calc(70vh / var(--hm-ui, 1)); overflow: auto; padding: 18px 22px;
  background: rgba(10, 13, 17, 0.94); border: 1px solid var(--iron); z-index: 2;
}
.hmbox.open { display: block; }
/* AUDIT-MAP H6: while a box is up the rest of the chrome is pointer-dead */
.hmroot.hmmodal .hmtop, .hmroot.hmmodal .hmcard, .hmroot.hmmodal .hmfoot { pointer-events: none; }
.hmbox-title { font-family: var(--display); font-weight: 300; font-size: 22px; margin: 0 0 10px; text-align: center; }
.hmbox-row { font-size: 14px; margin: 6px 0; white-space: pre-wrap; }
.hmbox-prompt { text-align: center; font-size: 15px; margin: 4px 0 14px; }
.hmbox-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 18px; margin: 10px 0; font-size: 13.5px; }
.hmbox-hint { color: var(--dim); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; text-align: center; margin: 12px 0 0; }
@media (max-width: 860px) {
  .hmlabel { font-size: 18px; }
  .hmtop { flex-wrap: wrap; }
  .hmsearch { flex: 1 1 100%; order: 3; }
  .hmhint { display: none; }
  .hmcard { right: 12px; bottom: 76px; }
  .hmfoot { left: 12px; bottom: 12px; flex-wrap: wrap; max-width: calc(100vw / var(--hm-ui, 1) - 24px); }
  /* AUDIT GUIDE K6: the legend wraps inside the foot - it ran nowrap off a phone's edge, the quest's word first lost */
  .hmlegend { flex: 1 1 auto; flex-wrap: wrap; min-width: 0; }
}
/* AUDIT GUIDE K3: while a place is picked the card stands above the foot - a foot grown by the legend or the Overworld's
   button lay over the card's Travel press, and took it */
.hmroot.hmcardup .hmcard { z-index: 1; }
/* AUDIT GUIDE K8: the quests that point at the picked place, named on its card */
.hmquest { color: #c9962c; font-size: 13px; margin: 2px 0; text-align: center; }

/* ── PX1: THE PIXEL HOME (Mac, 2026-08-27) ──────────────────
   The boot menu's front face in Daggerfall's own idiom, adopted from
   menu-pixel.html: no boxes - the list floats over the dithered night
   (src/ui/pixelGround.js), the wordmark is pixel blackletter, and the
   focused row wears THE CLASSIC SHADOWED-LABEL PAIR - yellow
   243,239,44 over its 93,77,12 shadow at +1,+1 (scaled x2 for the
   larger type), the idiom every native window draws. States SNAP:
   pixels do not tween, so there are no transitions in this block. */
.px-home { position: fixed; inset: 0; overflow: hidden; background: #0a0c11;
  font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0;   /* the fi ligature - see .shell */
  font-family: ${M}; color: #d8cfae;
  -webkit-font-smoothing: none; }
/* PX2: the pause face - a scrim, not the night; the paused frame is
   the ground. */
.px-home.px-over { background: rgba(10,12,17,0.55); }   /* PX4: the game reads through */
/* ── PX3: THE PAUSE WINDOW ── a framed panel with tabs (Mac's
   reference: Skyrim's journal), whole pixels throughout: 2px border,
   corner gems, a tab strip whose active tab wears the classic gold
   pair. The window scrolls its body; the scrim keeps the foot. */
.px-win { position: relative; width: min(920px, 94vw); height: min(620px, 74dvh);
  display: flex; flex-direction: column;
  background: rgba(10,12,17,0.72); border: 2px solid #7d7460; }   /* PX4: slight transparency, per the reference */
/* Each gem CENTERS on its corner: the core is 2px with 4px shadow
   arms, so a translate by half its own size puts the diamond's heart
   exactly on the frame's corner point. SCOPED under .px-win because
   the base .px-gem rule sits LATER in this sheet and its
   position:relative won the single-class tie - all four gems piled up
   relative at the top-left (caught by the geometry probe). */
.px-win .px-corner { position: absolute; }
.px-win .px-tl { left: -1px; top: -1px; transform: translate(-50%,-50%); }
.px-win .px-tr { right: -1px; top: -1px; transform: translate(50%,-50%); }
.px-win .px-bl { left: -1px; bottom: -1px; transform: translate(-50%,50%); }
.px-win .px-br { right: -1px; bottom: -1px; transform: translate(50%,50%); }
/* AUDIT HOLDINGS C4: four tabs - Quests, Stats, Holdings, System - outgrew a narrow window (the strip never wrapped,
   its host clips: under ~720 px both end tabs were cut); tighter under 900 px and 660 px, wrapped as a last resort, never cut */
.px-tabs { display: flex; flex-wrap: wrap; justify-content: center; gap: 4px;
  border-bottom: 2px solid rgba(125,116,96,0.55); padding: 6px 8px 2px; }
/* AUDIT LEGACY U5: five tabs (Project Legacy's Family) - the spacing a step tighter, so the five stand on one row in the
   window's 920 px; the narrower steps below are unchanged */
.px-tabs button { font: inherit; font-size: 20px; letter-spacing: 0.12em; text-indent: 0.12em;
  text-transform: uppercase; color: #d8cfae; background: none; border: 0; cursor: pointer;
  min-height: 44px; padding: 6px 12px; display: flex; align-items: center; gap: 8px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); transition: none; }
.px-tabs button .px-c { font-size: 15px; color: rgb(243,239,44); visibility: hidden;
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-tabs button:hover, .px-tabs button:focus-visible { outline: none;
  color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-tabs button.on { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-tabs button.on .px-c, .px-tabs button:hover .px-c, .px-tabs button:focus-visible .px-c { visibility: visible; }
.px-body { flex: 1; overflow-y: auto; padding: 18px 26px; }
/* System: the same floating list, sized for a panel. */
.px-menu.px-compact { gap: 0; }
.px-menu.px-compact button { font-size: 22px; min-height: 46px; padding: 6px 22px; }
/* Stats */
.px-statshead { display: flex; flex-direction: column; align-items: center; gap: 4px;
  margin: 6px 0 16px; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-statshead strong { font-size: 26px; font-weight: 400; letter-spacing: 0.1em; }
.px-statshead span { color: #9c937d; font-size: 16px; letter-spacing: 0.12em; text-transform: uppercase; }
.px-statgrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 6px 18px; margin-bottom: 14px; }
.px-stat { display: flex; justify-content: space-between; gap: 10px;
  border-bottom: 2px solid rgba(125,116,96,0.3); padding: 6px 2px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-stat .k { color: #9c937d; font-size: 15px; letter-spacing: 0.14em; text-transform: uppercase; align-self: center; }
.px-stat .v { font-size: 19px; white-space: nowrap; }
.px-attrs { grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); }
/* Quests */
.px-quest { margin: 0 0 16px; padding: 10px 14px; border-left: 2px solid var(--brass);
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-quest p { margin: 0 0 4px; font-size: 17px; line-height: 1.45; }
.px-note { color: #9c937d; text-align: center; margin-top: 24px; font-size: 17px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
/* ── PX4: THE JOURNAL ── the reference's shape: names on a left rail
   (the archive beneath a small heading), the chosen quest on the
   right - its name inside wing rules, the latest entry as the
   description, the trail as diamond-marked entries under a titled
   divider. */
.px-journal { display: flex; gap: 0; min-height: 100%; }
.px-qrail { flex: 0 0 240px; border-right: 2px solid rgba(125,116,96,0.45);
  padding: 4px 12px 4px 0; overflow-y: auto; }
.px-qrow { font: inherit; font-size: 16px; letter-spacing: 0.08em; text-transform: uppercase;
  color: #d8cfae; background: none; border: 0; cursor: pointer; text-align: left;
  display: flex; align-items: center; gap: 10px; width: 100%;
  min-height: 44px; padding: 6px 8px; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); transition: none; }
.px-qrow .px-c { font-size: 12px; color: rgb(243,239,44); visibility: hidden;
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-qrow:hover, .px-qrow:focus-visible { outline: none; color: rgb(243,239,44);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-qrow.on { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-qrow.on .px-c, .px-qrow:hover .px-c, .px-qrow:focus-visible .px-c { visibility: visible; }
.px-qrow.done { color: #9c937d; }
.px-qrow.done.on { color: rgb(243,239,44); }
.px-qarch { color: #9c937d; font-size: 13px; letter-spacing: 0.3em; text-indent: 0.3em;
  text-transform: uppercase; text-align: center; margin: 14px 0 4px;
  border-top: 2px solid rgba(125,116,96,0.3); padding-top: 10px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.px-qarch.px-qfirst { border-top: 0; padding-top: 2px; margin-top: 2px; }   /* PX5: the first heading needs no rule above it */
/* PX5: a running clock on a rail row - a gold gem pushed to the right. */
.px-qtimed { margin-left: auto; font-size: 11px; color: rgb(243,239,44);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
/* PX5: the kind tag and the timer under the quest name. */
.px-qmeta { display: flex; align-items: center; justify-content: center; gap: 18px;
  margin: -8px 0 12px; }
.px-qkind { color: #9c937d; font-size: 13px; letter-spacing: 0.24em; text-indent: 0.24em;
  text-transform: uppercase; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.px-qtimer { color: #c5bda2; font-size: 14px; letter-spacing: 0.1em;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-qtimer.urgent { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
/* GUIDE2: THE WHERE LINE - where the quest's latest entry sends the player, in the find-place box's own words, the way
   there beside it where a map can open, and the note when the player's map is known not to have the place. The place is
   the reading; the button is set off from it, never drawn inside the prose. */
.px-qwhere { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px 14px;
  margin: -4px 0 14px; }
.px-qwhere-place { color: #d8cfae; font-size: 15px; letter-spacing: 0.04em; overflow-wrap: anywhere; text-align: center;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-qwhere-place::before { content: '\\25c8'; content: '\\25c8' / ''; margin-right: 8px; color: var(--brass); }   /* AUDIT GUIDE U18: decorative - its alt text empty */
.px-qwhere .act, .px-qentry-where .act { min-height: 32px; padding: 2px 12px; font-size: 13px; }
.px-qwhere-note { flex-basis: 100%; text-align: center; color: #b9b094; font-size: 13px; line-height: 1.5;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
/* GUIDE2: an older entry's own place, the classic logbook's click on any entry - quieter than the quest's where. */
.px-qentry-where { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 12px; margin: 2px 0 4px; }
.px-qentry-where-place { color: #9d9479; font-size: 13px; overflow-wrap: anywhere; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
@media (pointer: coarse) { .px-qwhere .act, .px-qentry-where .act { min-height: 44px; } }
/* PX5: the world's date and time, bottom-right on the scrim. */
.px-clock { position: absolute; right: 18px; bottom: 12px; text-align: right;
  display: flex; flex-direction: column; gap: 2px;
  color: #c5bda2; font-size: 15px; letter-spacing: 0.1em;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-clocktime { color: #9c937d; font-size: 13px; letter-spacing: 0.14em; }
/* ── PX6: THE STATS PAGE ── meters and rows in whole pixels. */
.px-mrow { margin: 0 0 14px; }
.px-mtop { display: flex; justify-content: space-between; align-items: baseline; margin: 0 0 5px; }
.px-mtop .k { color: #9c937d; font-size: 14px; letter-spacing: 0.16em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.px-mtop .v { font-size: 18px; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); white-space: nowrap; }
.px-meter { height: 10px; border: 2px solid rgba(125,116,96,0.55); background: rgba(0,0,0,0.4); }
.px-fill { height: 100%; background: #d8cfae; }
.px-fill.blood { background: var(--blood); }
.px-fill.verdigris { background: var(--verdigris); }
.px-fill.thin { background: rgba(216,207,174,0.75); }
/* SOFTCAP1: skills past 100 - the second, gold bar and its milestone ticks */
.px-skillmeter { display: flex; flex-direction: column; gap: 2px; }
.px-meter.px-over { position: relative; height: 4px; border-width: 1px; border-color: rgba(201,162,39,0.6); }
.px-fill.px-overfill { background: linear-gradient(90deg, #c9a227, #f0d77a); }
.px-tick { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(0,0,0,0.55); }
/* SOFTCAP3: the Master Skills pane, and its Yes/No card's backdrop over the pause page */
.px-master { margin: 4px 0 12px; }
.px-master-state { color: #f0d77a; margin-bottom: 6px; }
.px-master-about { margin: 0 0 6px; color: var(--dim); font-size: 13px; line-height: 1.45; }
.px-master-note { margin: 6px 0; color: #d8cfae; }
.px-master-slots { margin: 6px 0; color: #efe6c8; }
.px-skill .k.px-mastered { color: #f0d77a; }
.px-master-back { margin-bottom: 4px; }
/* SOFTCAP6: the Master Skills page - a short lead, then one card per career group: its name, its slots as brass
   pips and its count; each skill a row with its bar(s) and, on the right, its state - a gold tag, a Master button,
   or a quiet word. Tuned to the Stats page's own type (the .px-mtop row) and brass (--brass). */
.px-master-lead { margin: 2px 0 14px; color: var(--dim); font-size: 14px; letter-spacing: 0.04em; }
.px-mgroup { margin: 0 0 16px; padding: 10px 14px 4px; border: 1px solid rgba(125,116,96,0.35); background: rgba(0,0,0,0.18); }
.px-mhead { display: flex; align-items: baseline; gap: 12px; margin: 0 0 10px; padding-bottom: 6px; border-bottom: 1px solid rgba(125,116,96,0.3); }
.px-mname { color: #d8cfae; font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; }
.px-pips { display: inline-flex; gap: 4px; color: var(--brass); font-size: 13px; }
.px-pip.on { color: #f0d77a; text-shadow: 0 0 6px rgba(240,215,122,0.35); }
.px-mcount { margin-left: auto; color: #9c937d; font-size: 13px; letter-spacing: 0.08em; }
.px-mrow2 { display: flex; align-items: center; gap: 16px; margin: 0 0 10px; }
.px-mrow2 .px-mbody { flex: 1 1 auto; min-width: 0; }
.px-mrow2 .px-mtop { margin-bottom: 3px; }
.px-mrow2 .px-meter { height: 6px; border-width: 2px; }
.px-mrow2.is-mastered .px-mtop .k { color: #f0d77a; }
.px-mside { flex: 0 0 132px; display: flex; justify-content: flex-end; }
.px-mtag { color: #9c937d; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; white-space: nowrap; }
.px-mtag.gold { color: #f0d77a; }
.px-mbtn { min-height: 34px; min-width: 104px; }
.px-master-foot { margin-top: 6px; }
.px-master-ask { position: fixed; inset: 0; z-index: 35; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.55); }
.px-master-ask .yesnobox { position: static; transform: none; }
.px-skillgrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4px 26px; margin-bottom: 8px; }
.px-skill { margin: 0 0 8px; }
.px-skill .px-meter { height: 6px; border-width: 2px; }
.px-skill .px-mtop { margin-bottom: 3px; }
.px-skill .px-mtop .v { font-size: 16px; }
.px-disclose { width: auto; margin: 10px auto 0; }
/* MAC-G: a special's SOURCE rides the row as a quiet tag - the label
   is the fact, the class or race name is only where it came from, so
   it must not compete with it at the value's 19px. */
.px-stat .v.px-src { font-size: 13px; color: #9c937d; letter-spacing: 0.12em;
  text-transform: uppercase; align-self: center; }
.px-stat .v.won { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-stat .v.bad { color: var(--blood); }
/* GUILD-REP: a guild row carries three facts - the affiliation, the
   rank title and the reputation - so the title takes the slack and
   the number keeps the social rows' right edge. */
.px-guild .v.px-rank { margin-left: auto; font-size: 16px; align-self: center; }
/* BUFF-END: a spell's row on the Stats page's Effects - its name, its rounds, and End where it may be ended */
.px-effect .v.px-src { margin-left: auto; align-self: center; }
.px-effect .act { align-self: center; min-height: 44px; padding: 2px 14px; }   /* a finger's target, as the sheet's doors are */
/* ── PX7: THE SYSTEM PAGE ── the shell's own panes repainted in whole
   pixels. The LAWS stay in the pane functions; every rule here is
   paint over the same markup (.card/.act/.empty/.stats/.tag/.row). */
.px-sys .card, .px-sys .dcard { background: rgba(0,0,0,0.35); border: 2px solid rgba(125,116,96,0.55);
  padding: 16px 20px; margin: 0 0 14px; }
.px-sys h3 { font-family: inherit;   /* the shell's own h3 rule sets Cormorant; the window is pixel */
  font-size: 22px; font-weight: 400; letter-spacing: 0.12em; text-indent: 0.12em;
  text-transform: uppercase; margin: 0 0 6px; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-sys p, .px-sys .meta { color: #c5bda2; font-size: 16px; line-height: 1.5; margin: 0 0 8px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-sys .tag { display: inline-block; color: rgb(243,239,44); font-size: 12px;
  letter-spacing: 0.24em; text-indent: 0.24em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgb(93,77,12); margin: 0 0 4px; }
.px-sys .stats { display: grid; grid-template-columns: auto 1fr; gap: 4px 18px; margin: 8px 0 10px; }
.px-sys .stats dt { color: #9c937d; font-size: 14px; letter-spacing: 0.14em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.px-sys .stats dd { margin: 0; font-size: 16px; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-sys .acts { display: flex; gap: 12px; margin-top: 10px; }
.px-sys .act { font: inherit; font-size: 17px; letter-spacing: 0.16em; text-indent: 0.16em;
  text-transform: uppercase; color: #d8cfae; background: none; cursor: pointer;
  border: 2px solid rgba(125,116,96,0.55); padding: 8px 20px; min-height: 44px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); transition: none; }
.px-sys .act:hover, .px-sys .act:focus-visible { outline: none; color: rgb(243,239,44);
  border-color: var(--brass); text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-sys .act.primary { color: rgb(243,239,44); border-color: var(--brass);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-sys .act:disabled { color: rgba(125,116,96,0.45); border-color: rgba(125,116,96,0.3);
  cursor: default; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.px-sys .empty { text-align: center; margin: 14px 0; }
.px-sys .empty h3 { font-size: 17px; color: #c5bda2; }
.px-sys .empty p { color: #9c937d; font-size: 15px; }
/* Mods' DFU-switch rows keep their shell markup; here they read as
   quiet key/value rows. */
.px-sys .row { display: flex; align-items: center; justify-content: space-between; gap: 12px;
  border-bottom: 2px solid rgba(125,116,96,0.3); min-height: 44px; }
.px-sys .row-main { font: inherit; background: none; border: 0; color: inherit; text-align: left;
  cursor: default; padding: 6px 0; }
.px-sys .row-name { font-size: 15px; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-sys .ctl { display: flex; align-items: center; gap: 8px; }
.px-sys .ctl .val { color: #9c937d; font-size: 14px; letter-spacing: 0.1em;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
/* ── FIX-F: THE CONTROLS PANE ── the rebinding grid the enhanced skin
   never had. Paint only: the markup is the shell's own
   (.card/.row/.row-main/.row-name/.ctl/.act/.acts) so the pane reads
   as every other page on both faces, and the ctl- prefixed rules add
   three things a keybind row needs and a settings row does not — a
   binding button wide enough for "LSHIFT + T", the two duplicate
   colours the classic grid paints (red inside the shown set, blue
   across the two — systems/controlsConfig.js's INTERNAL_DUPE_COLOR
   and CROSS_DUPE_COLOR), and the armed state. NO FACE IS DECLARED
   HERE: the .shell and .px-win rules already put Pixelify over
   everything inside them, and a second declaration would be the drift
   FIX-D closed. */
.ctl-key { min-width: 154px; text-align: center; font-variant-numeric: tabular-nums; }
.ctl-key.ctl-arm { color: var(--brass); border-color: var(--brass); }
.ctl-key.ctl-dupe { color: var(--blood); border-color: var(--blood); }
.ctl-key.ctl-cross { color: #4a9ae8; border-color: #4a9ae8; }
.ctl-clear { min-width: 44px; padding: 8px 10px; text-align: center; }
.ctl-clear:hover { color: var(--blood); border-color: var(--blood); }
.ctl-notice { margin: 10px 0 0; font-size: 13px; color: var(--dim); }
.ctl-notice.bad { color: var(--blood); }
.ctl-group h3 { margin-bottom: 2px; }
/* TORCH-BIND (2026-09-22, a player: "Keybind changes do not stick?" - they
   had not found Continue, 53 rows above): the head card with Continue stays
   in view while the list scrolls, and a second Continue closes the list.
   (The button reads Confirm since UXB1-B.) */
.ctl-head { position: sticky; top: 0; z-index: 2; }
/* UNSAVED-MARK (FIELD BUGS 2026-10-11, "It shows that my selected key is set ... it just didn't save"): on Settings the
   toolbar is sticky at the top of the same scroll (ORG2), and stood over the head and its Confirm - the head sticks
   under it now, at the toolbar's own measured height (enhancedMenu.js optionsToolbar, --opt-tools-h). A key a Confirm
   still owes is marked on its row, and the Confirm that owes it is lit. */
.opt-tools + .opt-body .ctl-head { top: var(--opt-tools-h, 0px); }
.opt-tools + .opt-body .ctl-row { scroll-margin-top: calc(var(--opt-tools-h, 0px) + 160px); }   /* a row scrolled to (a pad's focus, a find) lands under both */
.ctl-row.ctl-unsaved { box-shadow: inset 3px 0 0 var(--brass); }
.ctl-row.ctl-unsaved .ctl-unsaved-note, .ctl-pending { color: var(--brass); }
.ctl-head.ctl-owed .ctl-continue { box-shadow: 0 0 0 2px var(--brass), 0 0 12px rgba(192,138,62,0.55); }
/* ...and on a phone the scroll between the toolbar and the rail is a few rows tall: the head is its buttons on one line
   and the line a Confirm owes - the law's sentence is the intro's to say there, and each owed row says it again */
@media (max-width: 480px) {
  .ctl-head:not(.ctl-asking) > p.meta { display: none; }
  .ctl-head:not(.ctl-asking) .acts { flex-wrap: nowrap; gap: 6px; }
  .ctl-head:not(.ctl-asking) .acts .act { flex: 1 1 0; min-width: 0; padding-left: 6px; padding-right: 6px; }
  .ctl-head .ctl-notice { margin-top: 6px; }
}
.ctl-foot { display: flex; justify-content: flex-end; }
.ctl-row:last-child { border-bottom: 0; }
/* UXB1-D (2026-09-25, the UX backlog): a question about a key stands in the
   sticky head (brass-edged, so it reads as the thing waiting on an answer)
   over the list it no longer replaces - and the rows it is about say so:
   the row the key would go to in brass, the row that holds it now in the
   duplicate's red. */
.ctl-head.ctl-asking { border-color: var(--brass); box-shadow: 0 6px 18px rgba(0,0,0,0.45); }
.ctl-row.ctl-want { box-shadow: inset 3px 0 0 var(--brass); }
.ctl-row.ctl-want .ctl-key { color: var(--brass); border-color: var(--brass); }
.ctl-row.ctl-holder { box-shadow: inset 3px 0 0 var(--blood); }
.ctl-row.ctl-holder .ctl-key { color: var(--blood); border-color: var(--blood); }
/* UXB1-S: a SHARED key - one press, several actions, chosen - in its own
   colour (a clash keeps the red and the blue), with the other actions it
   answers named under the row. */
.ctl-key.ctl-shared { color: #6fcf8a; border-color: #6fcf8a; }
/* ...and the three states read in BOTH faces: the door's .shell .act and
   the pause face's button rules outrank a bare two-class selector, so on
   the main menu's Settings even DFU's red clash drew as a plain key. */
.shell .ctl-key.ctl-dupe, .px-sys .ctl-key.ctl-dupe { color: var(--blood); border-color: var(--blood); }
.shell .ctl-key.ctl-cross, .px-sys .ctl-key.ctl-cross { color: #4a9ae8; border-color: #4a9ae8; }
.shell .ctl-key.ctl-shared, .px-sys .ctl-key.ctl-shared { color: #6fcf8a; border-color: #6fcf8a; }
.ctl-alsos { color: #6fcf8a; }
.ctl-prompt .ctl-share { border-color: #6fcf8a; }
/* UXB1-F: the keys this page names and cannot move - drawn as a key's face,
   dashed and dim, so nobody reads one as a button to press. */
.ctl-fixedkey { display: inline-block; min-width: 154px; padding: 8px 12px; text-align: center;
  border: 1px dashed var(--iron); color: var(--dim); font-variant-numeric: tabular-nums; }
.px-sys .ctl-fixedkey { font-size: 15px; letter-spacing: 0.08em; padding: 6px 12px; min-width: 150px; }
@media (max-width: 480px) { .ctl-fixedkey, .px-sys .ctl-fixedkey { min-width: 104px; } }
/* ...and the window's face, where the same markup is drawn in whole
   pixels (the .px-sys block above). */
.px-sys .ctl-key { font-size: 15px; letter-spacing: 0.08em; text-indent: 0.08em;
  padding: 6px 12px; min-width: 150px; }
.px-sys .ctl-key.ctl-arm { color: rgb(243,239,44); border-color: var(--brass);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-sys .ctl-clear { font-size: 15px; letter-spacing: 0; text-indent: 0;
  padding: 6px 10px; min-width: 44px; }
.px-sys .ctl-notice { font-size: 15px; color: #9c937d;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.px-sys .ctl-notice.bad { color: var(--blood); }
.px-sys .ctl-head .acts { flex-wrap: wrap; }
/* UXB1-S: the page's cards are a 35% wash (the door's .shell and the pause
   face's .px-sys alike), and a STICKY one is read over
   the rows scrolling under it - the question and its answers came out
   printed across a row's words. The head alone is backed solid. */
.shell .card.ctl-head, .px-sys .card.ctl-head { background: #0d1014; }
@media (max-width: 480px) {
  .ctl-key, .px-sys .ctl-key { min-width: 104px; }
}
.px-qdetail { flex: 1; padding: 4px 6px 4px 22px; overflow-y: auto; }
.px-qname { display: flex; align-items: center; justify-content: center; gap: 14px; margin: 6px 0 14px; }
.px-qname h3 { font-size: 24px; font-weight: 400; letter-spacing: 0.14em; text-indent: 0.14em;
  text-transform: uppercase; margin: 0; text-align: center;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-qwing { flex: 1; height: 2px; max-width: 120px;
  background: linear-gradient(90deg, transparent, rgba(125,116,96,0.7)); }
.px-qwing.px-flip { background: linear-gradient(90deg, rgba(125,116,96,0.7), transparent); }
.px-qdesc p { margin: 0 0 5px; font-size: 17px; line-height: 1.5;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-qgap { height: 10px; }
.px-divider { display: flex; align-items: center; justify-content: center; gap: 12px; margin: 16px 0 12px; }
.px-divider::before, .px-divider::after { content: ''; flex: 1; height: 2px; max-width: 140px;
  background: rgba(125,116,96,0.55); }
.px-divword { color: #9c937d; font-size: 13px; letter-spacing: 0.3em; text-indent: 0.3em;
  text-transform: uppercase; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.px-qentry { display: flex; gap: 12px; margin: 0 0 12px; }
.px-qmark { color: var(--brass); font-size: 14px; line-height: 1.6;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-qentry p { margin: 0 0 4px; font-size: 16px; line-height: 1.45; color: #c5bda2;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-qverdict { text-align: center; color: #9c937d; font-size: 14px; letter-spacing: 0.2em;
  text-transform: uppercase; margin: -6px 0 12px; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.px-qverdict.won { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
@media (max-width: 900px) {
  .px-tabs button { font-size: 18px; letter-spacing: 0.1em; text-indent: 0.1em; padding: 6px 10px; gap: 6px; }
}
@media (max-width: 660px) {
  .px-tabs button { font-size: 15px; letter-spacing: 0.06em; text-indent: 0.06em; padding: 6px 6px; gap: 0; }
  .px-tabs button .px-c { display: none; }
}
/* AUDIT LEGACY II U9: five tabs (Project Legacy's Family) on a phone held upright and a small tablet - a step tighter
   again, so the strip stands on one row from 320 px; wrapped still as the last resort, never cut */
@media (max-width: 780px) and (min-width: 661px) {
  .px-tabs button { font-size: 16px; letter-spacing: 0.06em; text-indent: 0.06em; padding: 6px 8px; gap: 4px; }
}
@media (max-width: 420px) {
  .px-tabs { gap: 2px; padding: 6px 4px 2px; }
  .px-tabs button { font-size: 13px; letter-spacing: 0.02em; text-indent: 0.02em; padding: 6px 4px; }
}
@media (max-width: 480px) {
  .px-win { width: 100vw; height: calc(100dvh - 48px); border-left: 0; border-right: 0; }
  /* PX4: the journal stacks - the rail is a strip of rows across the
     top, the detail beneath, both still whole pixels. */
  .px-journal { flex-direction: column; }
  .px-qrail { flex: 0 0 auto; max-height: 32%; border-right: 0;
    border-bottom: 2px solid rgba(125,116,96,0.45); padding: 0 0 6px; }
  .px-qdetail { padding: 10px 2px 4px; }
}
.px-ground { position: absolute; left: -25%; top: -25%; width: 150%; height: 150%;
  image-rendering: pixelated; animation: px-drift 160s linear infinite alternate; }
@keyframes px-drift { from { transform: translate(0,0) } to { transform: translate(4%,2%) } }
.px-vignette { position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(95% 95% at 50% 45%, transparent 60%, rgba(0,0,0,0.5) 100%); }
.px-stage { position: relative; height: 100%; display: flex; flex-direction: column;
  align-items: center; justify-content: center; padding: 24px; }
.px-wordmark { font-family: 'Jacquard 12', var(--brand); font-weight: 400; margin: 0;
  font-size: 96px; line-height: 1; text-align: center;
  text-shadow: 4px 4px 0 rgba(0,0,0,0.7); }
/* INTRO2: one supplied wordmark, at its natural aspect ratio. BR4: it
   carries its own alpha, so it draws with no blend mode - screen would
   erase its black outlines and the ONLINE lettering. */
/* BR5: the DFO mark is 526 x 322 (1.63:1) and painted to its edges, where
   BR4's was 2.48:1 with its last 81 of 850 rows empty. Each box keeps the
   HEIGHT it had, so nothing above or below it moves: the door's old mark
   stood 540 x 769/2112 tall, and the same height at the new ratio is
   540 x 769/2112 x 526/322 = 321px wide (84vw -> 50vw; the short landscape
   screen's 394px -> 234, 56vw -> 33.3vw). */
.px-wordmark:has(.brand-logo) { width: min(321px, 50vw); line-height: 0; flex-shrink: 0; }
.brand-logo { display: block; width: 100%; height: auto; object-fit: contain;
  image-rendering: auto; }
/* BR5: the masthead's mark spent 769/2112 of the column's width in height
   (BR4's file less its empty rows); the DFO mark spends the same height at
   769/2112 x 526/322 = 59.5% of the width, centred. No margin pulls
   anything up any more - the file has no empty rows. */
.brand-home .brand-logo { width: 59.5%; margin: 0 auto; }
.brand-home { display: block; width: 100%; border: 0; padding: 0; background: transparent; cursor: pointer; }
.brand-home:focus-visible { outline: 2px solid var(--brass); outline-offset: 6px; }
.shell .brand h1:has(.brand-logo) { line-height: 0; }
@media (max-height: 560px) and (min-width: 600px) {
  .px-wordmark:has(.brand-logo) { width: min(234px, 33.3vw); }   /* BR4: INTRO2's 430px, at the same height; BR5: BR4's 394px, at the same height */
}
.px-wordmark small { display: block; font-family: ${M};
  font-size: 16px; letter-spacing: 0.5em; text-indent: 0.5em;
  text-transform: uppercase; color: #9c937d; margin-top: 8px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.px-rule { display: flex; align-items: center; gap: 16px;
  width: min(420px, 70vw); margin: 28px 0 30px; }
.px-rule::before, .px-rule::after { content: ''; flex: 1; height: 2px;
  background: #7d7460; opacity: 0.55; }
.px-gem { position: relative; width: 2px; height: 2px; background: var(--brass);
  box-shadow:
    0 -4px 0 var(--brass), 0 4px 0 var(--brass),
    -4px 0 0 var(--brass), 4px 0 0 var(--brass),
    -2px -2px 0 var(--brass), 2px -2px 0 var(--brass),
    -2px 2px 0 var(--brass), 2px 2px 0 var(--brass); }
.px-menu { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.px-menu button { font: inherit; font-size: 28px; font-weight: 400;
  letter-spacing: 0.18em; text-indent: 0.18em; text-transform: uppercase;
  color: #d8cfae; background: none; border: 0; cursor: pointer;
  padding: 8px 26px; min-height: 48px; text-align: center;
  display: flex; align-items: center; gap: 18px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); transition: none; }
.px-menu button .px-c { font-size: 22px; color: rgb(243,239,44); visibility: hidden;
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-menu button:hover, .px-menu button:focus-visible { outline: none;
  color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-menu button:hover .px-c, .px-menu button:focus-visible .px-c { visibility: visible; }
/* PX1b: THREE ZONES - build left, the skin toggle dead center, About
   the bottom-right box. A grid, because flex space-between centers the
   middle child only when the outer two happen to weigh the same. */
.px-foot { position: absolute; left: 0; right: 0; bottom: 0; pointer-events: none;
  display: grid; grid-template-columns: 1fr auto 1fr; align-items: end;
  padding: 12px 16px; font-size: 15px; letter-spacing: 0.12em;
  text-transform: uppercase; color: #9c937d;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.px-build { justify-self: start; }
/* MENU-TOGGLE: the skin switch that stood centred is retired; the centre is left open and About keeps the right. */
.px-foot .px-about { grid-column: 3; }
/* LOAD1: the Screenshots plaque - About's box, beside it on the right. */
.px-footright { grid-column: 3; justify-self: end; display: flex; align-items: flex-end; gap: 10px; }
/* TUT1: the Tutorials plaque - About's box, over the build line at the left. */
.px-footleft { grid-column: 1; justify-self: start; display: flex; flex-direction: column; align-items: flex-start; gap: 8px; }
.px-footleft .px-about { justify-self: auto; }
/* The About box: the ONE box on the boxless face, which is what makes
   it read as a plaque rather than a menu row. 2px border in whole
   pixels, gold on hover by the same pair. */
.px-about { pointer-events: auto; font: inherit; font-size: 16px; letter-spacing: 0.14em; text-indent: 0.14em;
  text-transform: uppercase; color: #d8cfae; cursor: pointer;
  justify-self: end; min-height: 44px; padding: 8px 18px;
  background: rgba(10,12,17,0.55); border: 2px solid #7d7460;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); transition: none; }
.px-about:hover, .px-about:focus-visible { outline: none;
  color: rgb(243,239,44); border-color: var(--brass);
  text-shadow: 2px 2px 0 rgb(93,77,12); }

/* ── ACC1f: THE PROFILE MARK AND THE ACCOUNT WINDOW ─────────────────
   Mac: the online details live "as a popup on main menu startup and a
   new profile icon". The mark takes the door's TOP-RIGHT corner - the
   one the foot's About box does not use - and wears the About box's
   own face rather than a new one, because two corner buttons that
   look unrelated read as two different kinds of thing. */
.px-profile {
  /* PROFILE1 (Mac: "more like a profile icon less like a button"): NO BOX.
     The portrait is the mark and the caption sits beside it on the
     picture, the way a name sits beside a face - a bordered rectangle
     in the corner read as one more menu button. */
  position: absolute; top: 16px; right: 18px; z-index: 4;
  display: flex; flex-direction: row-reverse; align-items: center; gap: 12px;
  font: inherit; color: #d8cfae; cursor: pointer; text-align: right;
  min-height: 44px; padding: 0; background: none; border: 0;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8);
}
.px-profile:focus-visible { outline: none; }
/* THE PORTRAIT: a round well rimmed in brass over the iron ring, the
   face inside at its own pixels. */
.px-portrait {
  position: relative; flex: none; width: 58px; height: 58px; border-radius: 50%;
  background: radial-gradient(circle at 50% 38%, #1b2029 0%, #0a0c11 72%);
  border: 3px solid var(--brass);
  box-shadow: 0 0 0 2px var(--iron), 0 3px 10px rgba(0,0,0,0.65);
  transition: border-color 120ms, box-shadow 120ms, transform 120ms;
}
.px-portrait canvas {
  position: absolute; inset: 0; width: 100%; height: 100%; border-radius: 50%;
  object-fit: cover; object-position: 50% 20%;
  /* THE PIXELS, AS THEY ARE - the save tiles' law (.svface canvas). */
  image-rendering: pixelated;
}
/* No character yet, no game data, or a face that would not draw: a
   hooded head and shoulders in iron, never an empty ring. */
.px-silhouette { position: absolute; inset: 0; border-radius: 50%; overflow: hidden; }
.px-silhouette::before { content: ''; position: absolute; left: 31%; top: 16%; width: 38%; height: 40%;
  border-radius: 48% 48% 44% 44%; background: #3a424d; }
.px-silhouette::after { content: ''; position: absolute; left: 12%; top: 58%; width: 76%; height: 60%;
  border-radius: 50% 50% 0 0; background: #3a424d; }
/* The gem on the rim: FILLED with a session, HOLLOW without (ACC1f's
   at-a-glance "am I signed in", kept). */
.px-profilegem {
  position: absolute; right: -4px; bottom: -3px; font-size: 13px; line-height: 1;
  color: var(--iron); text-shadow: 0 0 2px #000, 1px 1px 0 #000;
}
.px-profilegem.on { color: var(--brass); }
.px-profile:hover .px-portrait, .px-profile:focus-visible .px-portrait {
  border-color: rgb(243,239,44); box-shadow: 0 0 0 2px var(--iron), 0 0 14px rgba(243,239,44,0.35);
  transform: translateY(-1px);
}
.px-profiletext { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; }
.px-profilename {
  max-width: 14ch; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase;
}
.px-profilesub {
  max-width: 22ch; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  font-size: 12px; letter-spacing: 0.04em; color: #9d957f;
}
/* SUPPORT1: ON THE FRONT DOOR THE CAPTION IS BOUNDED IN PIXELS. Its two lines' 14ch and 22ch are the font's - up to
   158px in Pixelify Sans - and a reach that is the font's cannot be the band's (THE CORNERS' BAND, below). 140px keeps
   "No character yet" whole (123px) and holds the mark's reach to 234px, so the band ended at 1007 under BR4's 540px
   mark and a 1024x768 door still fit without a scroll (BR5's 321px mark ends it at 788); a character's longer line
   ends in its ellipsis three letters sooner. */
.px-home:not(.px-over) .px-profilename { max-width: min(14ch, 140px); }
.px-home:not(.px-over) .px-profilesub { max-width: min(22ch, 140px); }
.px-profile:hover .px-profilename, .px-profile:focus-visible .px-profilename {
  color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }

/* ── SUPPORT1: THE ASKS (Mac, 2026-10-05: "add the patron/kofi ingame on the main menu as 2 icons") ──────────────────
   The door's TOP-LEFT corner, the one it had free - and the only home a pair of icons has at every size without
   standing on something a player presses: the foot's centre runs under the last row of the menu on a 768px screen (the
   PX8 shape), and a phone's foot is full (the build, and Screenshots over About). Patreon's mark and Ko-fi's mug,
   drawn by ui/supportAsks.js exactly as the website's corner draws them, a 44px target each, in a plaque wearing the
   About box's own face (ACC1f: two corner marks that look unrelated read as two kinds of thing) - the kit's carved
   frame under Plus (ui/enhancedFrame.js, the window role). A mark lights in the classic pair's gold under the pointer
   and the keyboard (the marks' own rule). */
${rg}
.px-support { position: absolute; top: 16px; left: 18px; z-index: 4; display: flex; gap: 2px; padding: 2px;
  background: rgba(10,12,17,0.55); border: 2px solid #7d7460; }
/* Each mark stands on its feet 12px up, so the two five-row bodies (MARK_BODY_ROWS) centre in the 44px cell side by
   side and the mug's steam rises into the room above its own. */
.px-supportlink { display: flex; align-items: flex-end; justify-content: center; width: 44px; height: 44px;
  padding-bottom: 12px; border: 0; outline: none; }

/* THE WINDOW is the pause window's frame with the account card inside
   it, so the door has ONE kind of modal rather than two. It is
   shorter, because the card is a card and not a journal. */
/* THE SCRIM. Without it the door's own menu reads straight through the
   window - CONTINUE and NEW GAME sitting behind the sign-in copy - and
   a modal you can read the page through is a modal nobody believes is
   modal. The pause face uses rgba(10,12,17,0.55) over a LIVE frame;
   this sits over the still door, so it can be heavier. */
/* THE SCRIM SITS UNDER THE WORDMARK, not over it. The first cut
   centred the window on the viewport, which put it across the logo -
   the best thing on that screen, covered by a sign-in box - and used
   an 0.82 scrim that flattened the whole door to mud. Lighter now, and
   the window stands in the space the menu list occupies, which is what
   it is standing in for. */
.px-acctstage { position: absolute; inset: 0; z-index: 5;
  display: grid; grid-template-rows: auto 1fr; justify-items: center;
  padding: clamp(270px, 33vh, 400px) 16px 24px;
  background: rgba(8,10,15,0.6); }
.px-win.px-acctwin { height: auto; max-height: min(580px, 58dvh); width: min(500px, 92vw);
  background: #0a0c11; align-self: start; }
/* SHORT-TOUCH: the sign-in window on a short screen. The stage's top padding holds the logo clear above it - 270 px
   down a 411 px screen, which left the window 140 px of itself over the menu, its Close off the bottom and every
   menu button under it dead to a tap. Where the screen is short the window takes the height instead. */
@media (max-height: 560px) {
  /* two classes, so PX8's short-stage padding below (7dvh over 132 px, for the home's scrolling list) does not
     reclaim the stage the window needs */
  .px-stage.px-acctstage { padding: max(10px, env(safe-area-inset-top)) 16px 10px; overflow: hidden; }
  .px-win.px-acctwin { max-height: calc(100dvh - 20px); }
}
.px-win.px-acctwin .px-body { padding: 22px 26px 24px; }

/* ═══ ONE AXIS ════════════════════════════════════════════════════
   Mac: "Nothing is centered". It was true and it read as rushed - a
   left-aligned tag over a left-aligned heading over left-aligned
   buttons, with a Close centred underneath them. The window is
   symmetrical about one line now, contents included. */
.px-win.px-acctwin .card.acct { text-align: center; }
.px-win.px-acctwin .card.acct .tag { display: inline-block; }
.px-win.px-acctwin .card.acct .acts { justify-content: center; }
.px-win.px-acctwin .card.acct label.field { align-items: center; }
.px-win.px-acctwin .card.acct label.field input { text-align: center; width: 100%; }
.px-win.px-acctwin .card.acct label.acctagree { justify-content: center; }   /* TERMS1: the boxes stand on the window's one axis too */
.px-win.px-acctwin .card.acct ul.acctfacts li { justify-content: center; }
/* AUDIT RENOWN1 UI-1: the KEY keeps its width and the VALUE may shrink and wrap. Both were "0 0 auto", and the
   Renown rows were the first long values this list held - "Mara Venn - Renown 10, 490 / 2,150 XP to Renown 11"
   ran off both sides of a phone's window, the key and the name cut away where nothing could scroll to them. */
.px-win.px-acctwin .card.acct ul.acctfacts .acctkey { flex: 0 0 auto; }
.px-win.px-acctwin .card.acct ul.acctfacts .acctval { flex: 0 1 auto; min-width: 0; overflow-wrap: anywhere; }
/* The card inside brings its own frame, and a box inside a box reads
   as a mistake - the window IS the frame here. */
.px-win.px-acctwin .card.acct { border: 0; background: none; padding: 0; margin: 0; }
/* PROFILE-MENU: signed in, the window widens for the profile's two columns, and the sections read as ledgers - a
   key left and its value right - under the plate that keeps the window's one axis. */
.px-win.px-acctwin:has(.card.acct.acctin) { max-height: min(720px, calc(100dvh - clamp(270px, 33vh, 400px) - 84px)); }
/* AUDIT PROFILE-MENU P2: wide only for two columns - a profile with one has nothing to stand beside it */
.px-win.px-acctwin:has(.acctgrid2) { width: min(820px, 94vw); }
/* AUDIT PROFILE-MENU P1: A SHORT SCREEN GIVES IT THE HEIGHT, as SHORT-TOUCH gives the sign-in window - the stage drops its
   deep top padding there, but the rule above still took the 270px it no longer has: a landscape phone (844x390) drew a
   window 36px tall, and 740x360 one of 6 */
@media (max-height: 560px) { .px-win.px-acctwin:has(.card.acct.acctin) { max-height: calc(100dvh - 20px); } }
/* AUDIT PROFILE-MENU P4: CLOSE IS ALWAYS IN REACH. The profile is long, and its row of presses (Change password, Sign out,
   Close) stood under all of it - 470px of scrolling on a phone to put the window away. It stands at the window's foot,
   over a fade of the window's own ink, wherever the body is scrolled. */
.px-win.px-acctwin .card.acct.acctin .acts { position: sticky; bottom: 0; z-index: 1; padding-bottom: 20px;
  background: linear-gradient(180deg, transparent, var(--ink) 16px); }
/* the body's own foot padding is the bar's (scrolled words show through a scroller's padding, under a bar stuck above it) */
.px-win.px-acctwin:has(.card.acct.acctin) .px-body { padding-bottom: 0; }
/* a phone: the four presses two to a row, not four rows of the screen */
@media (max-width: 480px) {
  .px-win.px-acctwin .card.acct.acctin .acts { gap: 8px; }
  .px-win.px-acctwin .card.acct.acctin .acts .act { flex: 1 1 40%; min-width: 0; padding-left: 8px; padding-right: 8px; }
}
.px-over .px-win.px-acctwin:has(.card.acct.acctin) { max-height: min(760px, 86dvh); }
/* a phone: the window is the screen's, the door shut behind it - over the corner marks and the menu, which read through
   a 0.6 scrim under a window too short to cover them */
@media (max-width: 480px) {
  .px-stage.px-acctstage { padding: max(10px, env(safe-area-inset-top)) 8px max(10px, env(safe-area-inset-bottom)); background: rgba(8,10,15,0.88); }
  .px-win.px-acctwin, .px-win.px-acctwin:has(.card.acct.acctin) { width: 100%; max-height: calc(100dvh - 20px); }
  .px-win.px-acctwin .px-body { padding: 18px 16px 20px; }
}
.px-win.px-acctwin .card.acct.acctin .acctsec { text-align: left; }
.px-win.px-acctwin .card.acct.acctin ul.acctfacts li { justify-content: space-between; }
.px-win.px-acctwin .card.acct.acctin ul.acctfacts .acctval { text-align: right; }
.px-win.px-acctwin .card.acct.acctin ul.acctfacts.acctrecord li { justify-content: center; }
.px-win.px-acctwin .card.acct.acctin ul.acctfacts.acctrecord .acctval { text-align: center; }
.px-win.px-acctwin .card.acct.acctin ul.acctfacts.acctchars .acctval { text-align: left; }
.px-win.px-acctwin .card.acct.acctin .acctwearrow { justify-content: flex-start; }
.px-win.px-acctwin .card.acct.acctin .acts { padding-top: 14px; border-top: 1px solid var(--iron); }

/* DISC23-B2 (Mac: "a choosable skin system in the menu player profile
   system itself"): THE SKIN, under the account on the same axis. No box
   of its own (the window is the frame, as above), a rule between the
   two so they read as two things. A tile is the SPRITE, front on and
   standing, point-sampled as every sprite in the world is, with its
   name under it; the worn one takes the doubled brass edge the worn
   title does, so "on" reads the same way on both halves of the card. */
.px-win.px-acctwin .card.skincard { border: 0; background: none; padding: 18px 0 0; margin: 18px 0 0;
  border-top: 1px solid var(--iron); text-align: center; }
/* SKIN2 (Mac: "2 single panels for unmounted/mount that can be opened
   to view available skins"): each panel is closed to its worn skin - the
   picture, the panel's name over the skin's - as one wide press, and
   opens under itself to the grid; the open one takes the brass edge. */
.card .skinpanel { margin: 10px 0 0; border: 1px solid var(--iron); border-radius: 2px; background: rgba(0,0,0,0.2); }
.card .skinpanel.open { border-color: var(--brass); }
.card button.skinhead { display: flex; align-items: center; gap: 12px; width: 100%; min-height: 64px;
  font: inherit; color: var(--bone); text-align: left; padding: 6px 12px; background: none; border: 0; cursor: pointer; }
.card button.skinhead:hover { background: rgba(192,138,62,0.08); }
.card button.skinhead:focus-visible { outline: 2px solid var(--brass); outline-offset: -2px; }
.card button.skinhead .skinart { height: 56px; }
.card .skinheadtext { display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0; }
.card .skinheadtext .fieldlabel { display: block; margin: 0; }
.card .skinheadtext .skinname { font-size: 14px; }
.card .skinchev { color: var(--brass); font-size: 14px; }
.card .skinbody { padding: 0 8px 8px; border-top: 1px solid var(--iron); }
.card .skinbody > .skingrid:first-child { margin-top: 8px; }
.card .skingroup { display: block; margin: 10px 0 6px; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--dim); }
.card.skincard .skinhint { color: var(--brass); }
.card.skincard .acts { justify-content: center; }
.card .skingrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(86px, 1fr)); gap: 6px; }
.card button.skintile { display: flex; flex-direction: column; align-items: center; gap: 4px;
  font: inherit; font-size: 11px; line-height: 1.2; color: var(--dim);
  padding: 6px 4px; background: rgba(0,0,0,0.25); border: 1px solid var(--iron); border-radius: 2px; cursor: pointer; }
.card button.skintile:hover { color: var(--bone); border-color: var(--dim); }
.card button.skintile.worn { color: var(--bone); border: 2px solid var(--brass); padding: 5px 3px;
  background: rgba(192,138,62,0.12); }
.card button.skintile:focus-visible { outline: 2px solid var(--brass); outline-offset: 1px; }
.card .skinart { height: 72px; width: auto; image-rendering: pixelated; pointer-events: none; }
.px-winfoot { display: flex; justify-content: center; padding: 6px 0 18px; }
.px-winclose {
  font: inherit; font-size: 16px; letter-spacing: 0.14em; text-indent: 0.14em;
  text-transform: uppercase; color: #d8cfae; cursor: pointer;
  min-height: 44px; padding: 8px 22px;
  background: rgba(10,12,17,0.55); border: 2px solid #7d7460;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8);
}
.px-winclose:hover, .px-winclose:focus-visible { outline: none;
  color: rgb(243,239,44); border-color: var(--brass);
  text-shadow: 2px 2px 0 rgb(93,77,12); }

/* PROFILE2 (Mac: "make the profile icon visible somehow on the pause
   menu"): over the game the mark is a size smaller, so it stands in the
   scrim above the pause window (74dvh tall, centred) rather than over
   its tabs; and its window is centred - there is no wordmark to sit
   under, which is what the door's deep top padding is for. */
.px-over .px-profile { top: 10px; right: 12px; }
.px-over .px-portrait { width: 48px; height: 48px; }
.px-over .px-acctstage { padding: 24px 16px; grid-template-rows: 1fr; align-items: center; }
/* TIMERS1 (Mac: "a new unique UI element for reset times ... an enhanced plus button on the pause menu next to the
   profile icon"): THE HOURGLASS, beside the profile mark (ui/enhancedTimers.js placeBeside measures the mark - its
   width is its caption's; 300px off the edge stands in until it has), and its window in the pause window's frame. */
.px-timersmark { position: absolute; top: 12px; right: 300px; z-index: 4; display: flex; align-items: center; gap: 8px;
  min-height: 44px; padding: 0 6px; background: none; border: 0; cursor: pointer; color: #d8cfae;
  font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-timersmark:hover, .px-timersmark:focus-visible { color: #f3cf86; outline: none; }
.px-hourglass { display: block; width: 27px; height: 36px; image-rendering: pixelated; filter: drop-shadow(2px 2px 0 rgba(0,0,0,0.8));
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 12' shape-rendering='crispEdges'><rect x='0' y='0' width='9' height='1' fill='%23c08a3e'/><rect x='0' y='11' width='9' height='1' fill='%23c08a3e'/><rect x='1' y='1' width='1' height='2' fill='%23d8cfae'/><rect x='7' y='1' width='1' height='2' fill='%23d8cfae'/><rect x='2' y='1' width='5' height='1' fill='%23f3cf86'/><rect x='3' y='2' width='3' height='1' fill='%23f3cf86'/><rect x='2' y='3' width='1' height='1' fill='%23d8cfae'/><rect x='6' y='3' width='1' height='1' fill='%23d8cfae'/><rect x='3' y='4' width='1' height='1' fill='%23d8cfae'/><rect x='5' y='4' width='1' height='1' fill='%23d8cfae'/><rect x='4' y='3' width='1' height='4' fill='%23f3cf86'/><rect x='3' y='6' width='1' height='1' fill='%23d8cfae'/><rect x='5' y='6' width='1' height='1' fill='%23d8cfae'/><rect x='2' y='7' width='1' height='1' fill='%23d8cfae'/><rect x='6' y='7' width='1' height='1' fill='%23d8cfae'/><rect x='1' y='8' width='1' height='3' fill='%23d8cfae'/><rect x='7' y='8' width='1' height='3' fill='%23d8cfae'/><rect x='3' y='9' width='3' height='1' fill='%23f3cf86'/><rect x='2' y='10' width='5' height='1' fill='%23f3cf86'/></svg>") center / contain no-repeat; }
.px-timersmark:hover .px-hourglass, .px-timersmark:focus-visible .px-hourglass { transform: rotate(180deg); transition: transform 240ms steps(4); }
.px-timersstage { position: absolute; inset: 0; z-index: 5; display: grid; justify-items: center; align-items: center;
  padding: 24px 16px; background: rgba(8,10,15,0.6); }
.px-win.px-timerswin { height: auto; max-height: min(680px, 86dvh); width: min(560px, 94vw); background: #0a0c11; }
.px-win.px-timerswin .px-body { padding: 20px 24px 22px; overflow-y: auto; }
.px-timerswin .tm-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.px-timerswin .tm-title { margin: 0; font-size: 22px; letter-spacing: 0.18em; text-transform: uppercase; color: #efe8d6; }
.px-timerswin .tm-lead { margin: 6px 0 4px; font-size: 12px; color: var(--dim); }
.px-timerswin .tm-section { margin: 16px 0 6px; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--brass); }
.px-timerswin .tm-row { display: flex; align-items: center; gap: 12px; padding: 9px 10px 9px 14px; position: relative;
  border-bottom: 1px solid rgba(125,116,96,0.25); }
.px-timerswin .tm-row::before { content: '\\25c6'; position: absolute; left: 0; top: 12px; font-size: 9px; color: var(--tm-kind, #9c937d); }
.px-timerswin .tm-gate { --tm-kind: #e2554c; } .px-timerswin .tm-serpent { --tm-kind: ${Ni}; } .px-timerswin .tm-super { --tm-kind: ${Li}; } .px-timerswin .tm-raid { --tm-kind: #f2c46b; } .px-timerswin .tm-battle { --tm-kind: #d98074; }
.px-timerswin .tm-seat { --tm-kind: #c08a3e; } .px-timerswin .tm-reset { --tm-kind: #85a8a1; }
.px-timerswin .tm-row.live { background: rgba(192,138,62,0.08); }
.px-timerswin .tm-text { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.px-timerswin .tm-name { font-size: 15px; color: #efe8d6; }
.px-timerswin .tm-where { font-size: 12px; color: #a89f88; overflow-wrap: anywhere; }
.px-timerswin .tm-detail { font-size: 12px; color: var(--dim); overflow-wrap: anywhere; }
.px-timerswin .tm-clock { flex: 0 0 auto; display: flex; flex-direction: column; align-items: flex-end; gap: 2px; text-align: right; }
.px-timerswin .tm-count { font-size: 18px; color: #f3cf86; font-variant-numeric: tabular-nums; letter-spacing: 0.04em; }
.px-timerswin .tm-row.live .tm-count { color: #9fe8b4; }
.px-timerswin .tm-when { font-size: 11px; color: var(--dim); white-space: nowrap; }
.px-timerswin .tm-empty { color: var(--dim); font-size: 13px; }
/* AUDIT TIMERS1 UI-4: STONE'S LIGHT GROUND (AUDIT MERGE-PLUS D3's law) - the window takes the theme's panel, and Stone's
   light grey left the dim words at 2.6:1 and the where line at 3.0; lifted past 4.5:1 over a hard black drop. */
:root[data-plus-theme="stone"] .px-timerswin { --dim: #e2dccd; --brass: #ffd98a; text-shadow: 1px 1px 0 rgba(5,6,8,0.85); }
/* AUDIT PROFILE-MENU P3: the profile on Stone's light ground, the same lift - its tiles' names read 2.3:1 and its heads 2.6:1 */
:root[data-plus-theme="stone"] .px-acctwin { --dim: #e2dccd; --brass: #ffd98a; text-shadow: 1px 1px 0 rgba(5,6,8,0.85); }
:root[data-plus-theme="stone"] .px-timerswin .tm-where { color: #fbf8f0; }
:root[data-plus-theme="stone"] .px-timerswin .tm-count { color: #ffe3a6; }
:root[data-plus-theme="stone"] .px-timerswin .tm-row.live .tm-count { color: #c8ffd6; }
@media (max-width: 560px) {
  .px-win.px-timerswin .px-body { padding: 16px 14px 18px; }
  .px-timerswin .tm-count { font-size: 16px; }
}
/* SERVER-POST (Mac: "an ingame server mailbox that goes next to the hourglass in the pause menu. It should show
   notifications whenever players have a message"): THE MAILBOX - an envelope beside the hourglass (ui/enhancedPost.js;
   placed as the hourglass is, beside it - 360px off the edge stands in until it is measured), a count on it while
   anything waits, and its window in the pause window's frame on the hourglass's own stage (.px-timersstage). */
.px-postmark { position: absolute; top: 12px; right: 360px; z-index: 4; display: flex; align-items: center;
  min-height: 44px; min-width: 44px; justify-content: center; padding: 0 6px; background: none; border: 0; cursor: pointer; }
.px-postmark:focus-visible { outline: 2px solid #f3cf86; outline-offset: 2px; }
.px-envelope { display: block; width: 30px; height: 24px; image-rendering: pixelated; filter: drop-shadow(2px 2px 0 rgba(0,0,0,0.8));
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8' shape-rendering='crispEdges'><rect x='0' y='0' width='10' height='8' fill='%23c08a3e'/><rect x='1' y='1' width='8' height='6' fill='%23d8cfae'/><rect x='1' y='1' width='1' height='1' fill='%23c08a3e'/><rect x='2' y='2' width='1' height='1' fill='%23c08a3e'/><rect x='3' y='3' width='1' height='1' fill='%23c08a3e'/><rect x='8' y='1' width='1' height='1' fill='%23c08a3e'/><rect x='7' y='2' width='1' height='1' fill='%23c08a3e'/><rect x='6' y='3' width='1' height='1' fill='%23c08a3e'/><rect x='4' y='4' width='2' height='1' fill='%23b8322b'/></svg>") center / contain no-repeat; }
.px-postmark:hover .px-envelope, .px-postmark:focus-visible .px-envelope { transform: translateY(-2px); transition: transform 160ms steps(2); }
.px-postbadge { position: absolute; top: 2px; right: -4px; min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px;
  background: #b8322b; color: #fff4e0; font-size: 11px; line-height: 18px; text-align: center; letter-spacing: 0;
  box-shadow: 0 0 0 2px #0a0c11; font-variant-numeric: tabular-nums; }
.px-postbadge:empty { display: none; }
@keyframes pm-nudge { 0%, 70%, 100% { transform: rotate(0deg); } 80% { transform: rotate(-8deg); } 90% { transform: rotate(8deg); } }
.px-postmark.waiting .px-envelope { animation: pm-nudge 2.4s steps(6) infinite; }
@media (prefers-reduced-motion: reduce) { .px-postmark.waiting .px-envelope { animation: none; } }
.px-win.px-postwin { height: auto; max-height: min(680px, 86dvh); width: min(560px, 94vw); background: #0a0c11; }
.px-win.px-postwin .px-body { padding: 20px 24px 22px; overflow-y: auto; }
.px-postwin .pm-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.px-postwin .pm-title { margin: 0; font-size: 22px; letter-spacing: 0.18em; text-transform: uppercase; color: #efe8d6; }
.px-postwin .pm-say { margin: 6px 0 4px; min-height: 16px; font-size: 12px; color: #e8a49c; }
.px-postwin .pm-say.ok { color: #9fe8b4; }
.px-postwin .pm-empty { color: var(--dim); font-size: 13px; }
.px-postwin .pm-list { display: flex; flex-direction: column; }
.px-postwin .pm-row { display: flex; align-items: center; gap: 12px; width: 100%; padding: 10px 10px; text-align: left; cursor: pointer;
  background: none; border: 0; border-bottom: 1px solid rgba(125,116,96,0.25); color: inherit; font: inherit; }
.px-postwin .pm-row:hover { background: rgba(192,138,62,0.1); }
.px-postwin .pm-row:focus-visible { background: rgba(192,138,62,0.14); outline: 2px solid #f3cf86; outline-offset: -2px; }   /* AUDIT SERVER-POST: the focus seen, not a tint alone */
.px-postwin .pm-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.px-postwin .pm-dot { flex: 0 0 8px; width: 8px; height: 8px; background: transparent; }
.px-postwin .pm-row.unread .pm-dot, .px-postwin .pm-row.gift .pm-dot { background: #f3cf86; box-shadow: 0 0 6px rgba(243,207,134,0.6); }
.px-postwin .pm-text { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.px-postwin .pm-subject { font-size: 15px; color: #efe8d6; overflow-wrap: anywhere; margin: 0; }
.px-postwin .pm-row.unread .pm-subject { color: #fff4e0; }
.px-postwin .pm-from { font-size: 12px; color: var(--dim); margin: 0; }
.px-postwin .pm-chip { flex: 0 0 auto; display: flex; flex-direction: column; align-items: flex-end; gap: 2px; font-size: 13px; text-align: right; }
.px-postwin .pm-state { font-size: 11px; color: var(--dim); }
.px-postwin .pm-piece { display: flex; flex-direction: column; gap: 8px; padding-top: 6px; }
.px-postwin .pm-piece .pm-subject { font-size: 18px; }
.px-postwin .pm-body { margin: 6px 0; font-size: 14px; line-height: 1.5; color: #e2dccd; white-space: pre-wrap; overflow-wrap: anywhere; }
.px-postwin .pm-item { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 14px;
  border: 1px solid rgba(192,138,62,0.55); background: rgba(192,138,62,0.08); }
.px-postwin .pm-itemname { font-size: 16px; letter-spacing: 0.04em; }
.px-postwin .pm-foot { display: flex; justify-content: space-between; gap: 12px; margin-top: 8px; }
.px-postwin [data-rarity="magic"] { color: #6f9ee8; } .px-postwin [data-rarity="rare"] { color: #e4c34f; } .px-postwin [data-rarity="legendary"] { color: #e07a2e; }
.px-postwin [data-rarity="aetheric"] { color: #bfe8ff; } .px-postwin [data-rarity="artifact"] { color: #b57bee; } .px-postwin [data-rarity="gilded"] { color: #ffcf4d; }
/* AUDIT SERVER-POST: the tiers above are LR1's own hexes (systems/lootRarity.js RARITIES, pinned against it - a stylesheet
   never imports the loot ladder, which reaches the whole combat graph); on Stone's light panel the three darkest read
   3.0-3.3:1 and are lifted past 4.5:1 there alone. */
:root[data-plus-theme="stone"] .px-postwin [data-rarity="magic"] { color: #b4cdf7; }
:root[data-plus-theme="stone"] .px-postwin [data-rarity="legendary"] { color: #f7b27a; }
:root[data-plus-theme="stone"] .px-postwin [data-rarity="artifact"] { color: #dcbaf9; }
:root[data-plus-theme="stone"] .px-postwin { --dim: #e2dccd; --brass: #ffd98a; text-shadow: 1px 1px 0 rgba(5,6,8,0.85); }
@media (max-width: 560px) {
  .px-win.px-postwin .px-body { padding: 16px 14px 18px; }
  .px-postwin .pm-item { flex-direction: column; align-items: stretch; }
}
@media (max-height: 560px) { .px-win.px-postwin { max-height: calc(100dvh - 20px); } }   /* AUDIT SERVER-POST: a short screen's window, as the timers' */
.px-over .px-win.px-acctwin { align-self: center; max-height: min(640px, 86dvh); }
@media (max-width: 480px) {
  /* On a phone the wordmark owns the top, so the mark loses its caption
     and keeps its portrait and gem - a 48px target, over the 44px floor. */
  .px-profile { top: 10px; right: 10px; }
  .px-portrait { width: 48px; height: 48px; }
  .px-profiletext { display: none; }
  .px-support { top: 10px; left: 10px; }   /* SUPPORT1: the asks mirror it, the opposite corner */
}
@media (max-width: 480px) {
  .px-wordmark { font-size: 60px; }
  .px-menu button { font-size: 24px; letter-spacing: 0.12em; text-indent: 0.12em; }

  /* PX1b: a phone foot was two rows, the skin toggle over build and About; MENU-TOGGLE retired the toggle, so it is
     one row - build, and About on the right. */
  .px-foot { grid-template-columns: 1fr auto; grid-template-areas: 'build about'; }
  .px-build { grid-area: build; align-self: center; }
  .px-foot .px-about { grid-area: about; grid-column: auto; }
  /* LOAD1: on a phone the two plaques stack at the right - inside the 132px the stage keeps for the foot (PX8) */
  .px-footright { grid-area: about; grid-column: auto; flex-direction: column; gap: 8px; }
  .px-footleft { grid-area: build; grid-column: auto; }
}
@media (prefers-reduced-motion: reduce) { .px-ground { animation: none; } }
/* PX8, caught by the tap probe TWICE: centering the list on a SHORT
   screen ran its last rows UNDER the fixed foot, whose skin switch
   then intercepted their taps - Load Game was drawn and unreachable,
   the AUDIT F1 shape exactly. The first fix keyed on max-WIDTH and a
   landscape phone (851x393) sailed past it: the condition was never
   'narrow', it was 'short'. The stage stops centering, scrolls, and
   reserves the foot's height whenever height is the constraint; the
   foot stacks two rows only where width also runs out. */
@media (max-height: 560px), (max-width: 480px) {
  .px-stage { justify-content: flex-start; padding: 7dvh 24px 132px; overflow-y: auto; }
  /* Keep the ordinary pause panel above the clock; its body remains the scroller. */
  .px-over > .px-stage:not(.px-acctstage):not(.px-timersstage) > .px-win { max-height: calc(100dvh - max(7dvh, 64px) - 64px); }
}
/* DOOR-FIT (2026-10-05, Mac: "Fix these now", of SUPPORT1's finding): THE FRONT DOOR NEVER CUTS ITSELF OFF. Its stage
   centred by justify-content and scrolled only under PX8's 560px, a threshold set before the door grew to eight rows,
   so a desktop window from 561 to about 690px tall (the eight-row door's own height) ran off BOTH ends of the screen
   with nothing to scroll - the wordmark's top, and under about 620px the whole last row (1366x568, 1280x568). At every width the phone rule does not
   take, it now starts at the top, scrolls, and centres by auto margins, which take the room that is left and none that
   is not: where the door fits nothing moves, and where it does not every row can be reached. */
@media (min-width: 481px) {
  .px-home:not(.px-over) > .px-stage:not(.px-acctstage) { justify-content: flex-start; overflow-y: auto; }
  .px-home:not(.px-over) > .px-stage:not(.px-acctstage) > :first-child { margin-top: auto; }
  .px-home:not(.px-over) > .px-stage:not(.px-acctstage) > :last-child { margin-bottom: auto; }
}
/* SUPPORT1: THE CORNERS' BAND - the front door's twin of AUDIT TIMERS1 UI-2 (below), which stands the pause window
   clear of the corner marks over a game. With a mark in each top corner, the door's stage starts below them wherever
   the wordmark is wide enough to reach under either: the asks reach 122px in (18, their 98, the Plus frame's 6), the
   profile 234 (18, its 58px portrait, the 12px gap, its caption's 140px bound, the frame's 6), and
   (vw - min(321px, 50vw)) / 2 is less than 234 at every width under 789 (BR5: BR4's min(540px, 84vw) took it to
   1008) - and on a phone, where the marks stand 10px in and the caption is hidden, always. Measured rather than argued: tools/supportAsksProbe.mjs maps the logo's own
   opaque pixels onto the screen across 192 sizes, a caption at its bound among them. The band costs height, and where
   the door no longer fits it scrolls (DOOR-FIT, above); its foot keeps the one-row foot's 68px, so the last row can be
   scrolled clear of About and Screenshots. */
@media (min-width: 481px) and (max-width: 788px) {
  .px-home:not(.px-over) > .px-stage:not(.px-acctstage) { padding: 84px 24px 76px; }
}
@media (max-width: 480px) {
  .px-home:not(.px-over) > .px-stage:not(.px-acctstage) { padding-top: max(7dvh, 72px); }
}
/* Inventory and Spellbook own direct window shells. Keep their controls above the measured controller legend. */
html.plus-pad-prompts-visible .pack-shell,
html.plus-pad-prompts-visible .sb-shell { box-sizing: border-box;
  padding-bottom: calc(var(--plus-pad-clearance, 0px) + 8px); }
html.plus-pad-prompts-visible .pack-shell > .pack-win,
html.plus-pad-prompts-visible .sb-shell > .px-win {
  max-height: calc(100dvh - var(--plus-pad-clearance, 0px) - 8px); }
/* B12.01 + controller legend: reserve the measured wrapped bar, then the existing calendar row. */
html.plus-pad-prompts-visible .px-clock { bottom: calc(var(--plus-pad-clearance, 0px) + 12px); }
html.plus-pad-prompts-visible .px-over > .px-stage:not(.px-acctstage):not(.px-timersstage) {
  padding-bottom: calc(var(--plus-pad-clearance, 0px) + 64px); }
html.plus-pad-prompts-visible .px-over > .px-stage:not(.px-acctstage):not(.px-timersstage) > .px-win {
  max-height: calc(100dvh - max(7dvh, 64px) - var(--plus-pad-clearance, 0px) - 64px); }
/* AUDIT TIMERS1 UI-1: the timers window's stage is not the pause stage - two classes, so the rule above (one class,
   later) cannot take its padding and pin the window to the left; centred, its own padding, its list the one scroll.
   UI-2: and over the game on a short screen the pause window stands clear of the corner marks (the profile and the
   hourglass, 56px tall) - it had its tabs under them, a tap on SYSTEM's top half opening the timers. */
.px-stage.px-timersstage { display: grid; justify-content: center; align-content: center; justify-items: center; align-items: center;
  padding: 24px 16px; overflow: hidden; }   /* the content's own centring too - the pause stage's short-screen flex-start packed the track left */
@media (max-height: 560px) {
  .px-stage.px-timersstage { padding: 10px 12px; }
  .px-win.px-timerswin { max-height: calc(100dvh - 20px); }
  .px-over .px-stage:not(.px-acctstage):not(.px-timersstage) { padding-top: max(7dvh, 64px); }
}

/* ── PX8: THE SHELL WEARS THE PIXELS (Mac: "Settings next") ─────
   The section shell - side rail, pane, and above all the settings
   three-pane screen - repainted into the pixel idiom. EVERY RULE
   HERE IS PAINT: scoped under .shell (the menu's root alone; the
   wizard, sheet and inventory own other roots), later in the sheet
   so it wins the ties, and it moves NO geometry - the 44px targets
   AUDIT F1's tap probe measures, the phone sheet, the second-tap
   gesture and the dot all keep their sizes and their laws. */
.shell { font-family: ${M}; -webkit-font-smoothing: none;
  /* U63 (found on the site, which wears the same face): Pixelify Sans
     ships an fi LIGATURE whose glyph reads as a capital A - "files"
     renders "Ales", "first" renders "Arst", "Difficulty" renders
     "DifAculty". Every enhanced screen is set in this face, so the
     ligatures go off at the root of both faces. */
  font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0; }
.shell button { transition: none; border-radius: 0; }
.shell .brand h1 { font-family: 'Jacquard 12', var(--brand); font-weight: 400;
  letter-spacing: 0.02em; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.shell .railbtn { letter-spacing: 0.12em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.shell .railbtn.on { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.shell .railbtn:hover { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.shell .head h2 { font-family: inherit; font-weight: 400; letter-spacing: 0.14em;
  text-transform: uppercase; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.shell .card, .shell .dcard { border: 2px solid rgba(125,116,96,0.55); border-radius: 0;
  background: rgba(0,0,0,0.35); }
/* ACC1f: ...AND THE DOOR'S WINDOW, which is a third host for the same
   markup. This rule was .shell only, so the account card's heading
   came out in Cormorant inside a pixel-skinned window - the one thing
   on the door not drawn in whole pixels. Found by screenshotting it. */
.shell .card h3, .shell .dcard h3, .shell .empty h3,
.px-win .card h3, .px-win .dcard h3, .px-win .empty h3 { font-family: inherit; font-weight: 400;
  letter-spacing: 0.12em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
/* CR1: the credited work's title wears the pixel face like every other
   heading in this shell - the serif is the old skin's, and it was the
   one serif line on the screen. */
.shell .credit-name { font-family: inherit; font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.shell .tag { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12);
  letter-spacing: 0.24em; background: none; border: 0; }
/* ACC1f: the same widening as the heading above - these were .shell
   only, so a card's buttons inside the door's window came out
   lowercase and unspaced beside a CLOSE that was neither. */
.shell .act, .px-win .card .act { border: 2px solid rgba(125,116,96,0.55); border-radius: 0; background: none;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--bone);
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.shell .act:hover, .shell .act:focus-visible,
.px-win .card .act:hover, .px-win .card .act:focus-visible { color: rgb(243,239,44); border-color: var(--brass);
  background: none; text-shadow: 2px 2px 0 rgb(93,77,12); }
.shell .act.primary, .px-win .card .act.primary { color: rgb(243,239,44); border-color: var(--brass); background: none;
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.shell .act:disabled, .px-win .card .act:disabled { color: rgba(125,116,96,0.45); border-color: rgba(125,116,96,0.3); }
/* ── the settings screen ── */
.shell .subbtn { letter-spacing: 0.1em; text-transform: uppercase; border-radius: 0;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.shell .subbtn.on { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.shell .subbtn .count { font-family: inherit; border-radius: 0;
  border: 2px solid rgba(125,116,96,0.4); background: none; }
.shell .more-dot { border-radius: 0; width: 6px; height: 6px; background: var(--brass); }
.shell .legend i { border-radius: 0; width: 6px; height: 6px; }
.shell .row { border-radius: 0; }
.shell .row.on { outline: 2px solid rgba(192,138,62,0.6); outline-offset: -2px; }
.shell .row-name { text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.shell .ctl .val { letter-spacing: 0.08em; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
/* ── PX23: THE SPELLBOOK ────────────────────────────────────────
   The journal's bones a fifth time; only the paint is new. The rail
   carries a cost beside each name (the classic's row is "cost - name",
   and a column reads better than a prefix), and the effects are the
   words the classic prints, one to a line under their own divider. */
/* PX29 (Mac: "the new chronicle UI appears on the lefthand side when it
   should be centered"): AND SO DID THE SPELLBOOK. .px-home is
   position:fixed inset:0 with no flex of its own - the pause face
   centres its window by putting it in a .px-stage, and these two
   windows never got one, so both sat hard against the top-left. 260px
   and 140px off, measured. It was only invisible because every shot I
   took of them was of the ELEMENT rather than the viewport.
   The fourth shared-part fault of this arc, so it is fixed for the
   FAMILY rather than for the window that was reported. */
.sb-shell, .cr-shell { display: flex; align-items: center; justify-content: center; }
.sb-shell .px-win { width: min(920px, 94vw); height: min(620px, 86dvh); }
.sb-shell .sb-top, .cr-shell .sb-top { display: grid; grid-template-columns: 1fr auto 1fr;
  align-items: center; padding: 12px 16px;
  border-bottom: 2px solid rgba(125,116,96,0.35); }
.sb-shell .sb-who, .cr-shell .sb-who { text-align: center; }
.sb-shell .sb-who h2, .cr-shell .sb-who h2 { font-family: inherit; font-weight: 400; font-size: 20px; margin: 0;
  letter-spacing: 0.18em; text-indent: 0.18em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.sb-shell .sb-magicka, .cr-shell .sb-magicka { margin: 6px 0 0; color: #9c937d;
  font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.sb-shell .sb-top .act, .cr-shell .sb-top .act { justify-self: end; }
.sb-shell .sb-row { display: flex; align-items: center; }
.sb-shell .sb-cost, .cr-shell .sb-cost { margin-left: auto; color: var(--brass); font-size: 13px;
  font-variant-numeric: tabular-nums; }
.sb-shell .sb-row.on .sb-cost { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.sb-shell .sb-effects { display: flex; flex-direction: column; gap: 8px; margin: 4px 0 0; }
.sb-shell .sb-effect { display: flex; align-items: baseline; gap: 10px; font-size: 15px;
  color: #d8cfae; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.sb-shell .sb-sub { color: #9c937d; font-size: 13px; letter-spacing: 0.12em;
  text-transform: uppercase; }
/* ── ET1: THE TALK PANEL ─────────────────────────────────────────
   Mac's reference is Fallout/Skyrim: a rectangle across the bottom of
   the view with the world - and the person - still standing behind
   it. No scrim. The frame is the pause window's (.px-win: 2px border,
   corner gems, slight transparency) so the panel reads as the same
   family; the conversation on the left, the topics on the right, the
   player-says line and ASK along the foot. On a phone the two columns
   stack and the panel takes the width. */
.talk-shell { position: absolute; inset: 0; font-family: ${M}; color: #d8cfae;
  -webkit-font-smoothing: none; font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0; }
.talk-shell .talk-panel { position: absolute; left: 50%; bottom: max(16px, 3dvh); transform: translateX(-50%);
  width: min(1080px, 96vw); height: min(440px, 52dvh); background: rgba(10,12,17,0.84); }
.talk-head { display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 14px;
  padding: 8px 14px; border-bottom: 2px solid rgba(125,116,96,0.55); }
.talk-who { display: flex; align-items: center; gap: 12px; min-width: 0; }
.talk-face { width: 48px; height: 48px; image-rendering: pixelated; border: 2px solid rgba(125,116,96,0.55);
  background: #0a0c11; flex: 0 0 auto; }
.talk-who h2 { font: inherit; font-size: 20px; letter-spacing: 0.08em; text-transform: uppercase; margin: 0;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.talk-named { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
/* PLAIN-UI (bible/10-UI/Plain-Words.md): a living resident's regard under their name - the standing, a bar from -100 to
   +100 with its middle marked, and the number; the standing's colour on the name and the mark */
.talk-regard { display: flex; align-items: center; align-self: flex-start; gap: 8px; font: inherit; font-size: 14px; letter-spacing: 0.06em;
  cursor: pointer; background: none; border: 0; padding: 2px 0; min-height: 24px; text-align: left; }
/* AUDIT PLAIN-UI U10: the badge says it can be pressed - a mark after the number, the name underlined under a pointer */
.talk-regard-value::after { content: ' ?'; color: #9c937d; }
.talk-regard:hover .talk-regard-name, .talk-regard:focus-visible .talk-regard-name { text-decoration: underline dotted; }
.talk-regard:focus-visible { outline: 1px dashed currentColor; outline-offset: 2px; }
.talk-regard-words { grid-column: 1 / -1; margin: 0; font-size: 14px; line-height: 1.45; color: #c9bfa3; max-height: 4.4em; overflow-y: auto; max-width: 72ch; }   /* AUDIT PLAIN-UI C5: a short screen keeps its conversation; U9: a line a reader can follow */
.talk-regard-name { text-transform: uppercase; }
.talk-regard-bar { position: relative; width: 96px; height: 6px; flex: 0 0 auto; background: rgba(0,0,0,0.55);
  box-shadow: inset 0 0 0 1px rgba(125,116,96,0.55); }
.talk-regard-bar::before { content: ''; position: absolute; left: 50%; top: -2px; bottom: -2px; width: 1px; background: rgba(216,207,174,0.45); }
.talk-regard-bar i { position: absolute; top: -3px; width: 4px; height: 12px; margin-left: -2px; background: currentColor; }
.talk-regard-value { color: #d8cfae; }
.talk-regard.friend { color: #8fd6a0; }
.talk-regard.neutral { color: #c9bfa3; }
.talk-regard.enemy { color: #e9a06a; }
.talk-regard.hostile { color: #ef7b6b; }
.talk-tone { display: flex; gap: 2px; }
.talk-tone button, .talk-mode, .talk-cat, .talk-row, .talk-back { font: inherit; background: none; border: 0;
  color: #d8cfae; cursor: pointer; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); transition: none; }
.talk-tone button { font-size: 15px; letter-spacing: 0.14em; text-indent: 0.14em; text-transform: uppercase;
  min-height: 40px; padding: 4px 12px; color: #9c937d; }
.talk-tone button:hover, .talk-tone button[aria-pressed="true"] { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.talk-head .act, .talk-say .act { font: inherit; font-size: 15px; letter-spacing: 0.12em; text-indent: 0.12em;
  text-transform: uppercase; min-height: 40px; padding: 6px 16px; }
.talk-main { flex: 1; display: grid; grid-template-columns: 1fr minmax(240px, 34%); min-height: 0; }
.talk-log { overflow-y: auto; padding: 12px 18px; display: flex; flex-direction: column; gap: 8px; min-height: 0; }
.talk-entry { max-width: 88%; padding: 6px 10px; font-size: 16px; line-height: 1.35; cursor: pointer;
  border-left: 2px solid transparent; }
.talk-entry.a { align-self: flex-start; }
.talk-entry.q { align-self: flex-end; text-align: right; color: #b2cfff; border-left: 0; border-right: 2px solid transparent; }
.talk-entry.on { border-color: var(--brass); background: rgba(125,116,96,0.12); }
.talk-entry .talk-copied { color: #7aa0ff; margin-left: 8px; font-size: 13px; white-space: nowrap; }
.talk-topics { border-left: 2px solid rgba(125,116,96,0.45); display: flex; flex-direction: column; min-height: 0; }
.talk-modes, .talk-cats { display: flex; border-bottom: 2px solid rgba(125,116,96,0.35); }
.talk-mode { flex: 1; font-size: 15px; letter-spacing: 0.12em; text-indent: 0.12em; text-transform: uppercase;
  min-height: 40px; color: #9c937d; }
.talk-mode:hover, .talk-mode.on { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.talk-cat { flex: 1; font-size: 13px; letter-spacing: 0.1em; text-indent: 0.1em; text-transform: uppercase;
  min-height: 36px; color: #9c937d; }
.talk-cat:hover, .talk-cat.on { color: #d8cfae; }
.talk-cat[disabled] { opacity: 0.35; cursor: default; }   /* TALK02I0's greyed strip */
.talk-cat[disabled]:hover { color: #9c937d; }
.talk-list { flex: 1; overflow-y: auto; padding: 6px 0; min-height: 0; }
.talk-row { display: flex; align-items: center; gap: 8px; width: 100%; text-align: left; font-size: 16px;
  min-height: 36px; padding: 4px 14px; }
.talk-row .px-c { font-size: 13px; color: rgb(243,239,44); visibility: hidden; text-shadow: 2px 2px 0 rgb(93,77,12); flex: 0 0 auto; }
.talk-row:hover, .talk-row.on { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.talk-row:hover .px-c, .talk-row.on .px-c { visibility: visible; }
.talk-row.group::after { content: '\\203a'; margin-left: auto; color: #9c937d; }
.talk-back { display: block; width: 100%; text-align: left; font-size: 13px; letter-spacing: 0.1em; text-indent: 0.1em;
  text-transform: uppercase; color: #9c937d; padding: 6px 14px; min-height: 32px; }
.talk-back:hover { color: #d8cfae; }
.talk-hint { color: #9c937d; font-size: 14px; padding: 14px; margin: 0; }
.talk-say { display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 10px;
  padding: 8px 14px; border-top: 2px solid rgba(125,116,96,0.55); }
.talk-q { color: #b2cfff; font-size: 16px; min-height: 22px; line-height: 1.3; }
.talk-q.none { color: #9c937d; }
@media (max-width: 720px) {
  .talk-shell .talk-panel { width: 100vw; height: min(600px, 70dvh); bottom: 0; }
  .talk-head { grid-template-columns: 1fr auto; padding: 6px 10px; }
  .talk-head .door-goodbye { grid-row: 1; grid-column: 2; }   /* the name and Goodbye share the first row */
  .talk-tone { grid-row: 2; grid-column: 1 / -1; justify-content: center; }
  .talk-main { grid-template-columns: 1fr; grid-template-rows: 1fr 1fr; }
  .talk-topics { border-left: 0; border-top: 2px solid rgba(125,116,96,0.45); }
  .talk-say { grid-template-columns: auto 1fr; }
  .talk-say .talk-q { grid-column: 1 / -1; }
}
/* ── PX30: THE GAMEPLAY HUD ─────────────────────────────────────
   Mac's reference is ESO's Clean UI - a compass across the top, the
   target named beneath it, three vitals along the bottom and the
   effects under those - read back in this arc's own language: square
   2px frames, the Pixelify face, brass and bone, the classic shadowed
   pair for what is live, and states that SNAP.

   IT IS A READOUT. pointer-events none everywhere, because nothing
   here is pressed; the game is underneath and stays reachable. */
.hud { position: fixed; inset: 0; z-index: 4; pointer-events: none;
  font-family: ${M}; -webkit-font-smoothing: none;
  font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0;
  color: #d8cfae; text-shadow: 2px 2px 0 rgba(0,0,0,0.85);
  /* PX30c: ONE variable the whole HUD reads, so a scale change moves
     every bar, chip and letter together rather than thirty rules
     drifting apart. Set from GUI/EnhancedHUDScale each frame, guarded. */
  --hud-scale: 1; }
.hud-top { position: absolute; left: 50%; top: 18px;
  transform: translateX(-50%) scale(var(--hud-scale)); transform-origin: top center;
  display: flex; flex-direction: column; align-items: center; gap: 10px; }
.hud-bottom { position: absolute; left: 50%; bottom: 22px;
  transform: translateX(-50%) scale(var(--hud-scale)); transform-origin: bottom center;
  display: flex; flex-direction: column; align-items: center; gap: 10px; }

/* THE COMPASS. A strip of a quarter of the circle, the points placed
   by heading and HIDDEN when they fall off it - a marker pinned to the
   rim would say "north is exactly there", which is a lie. */

/* TO1 - THE ENHANCED LANE'S TRAVEL PANEL (ui/enhancedTravelControl.js).
   Mac's own addition beside the mod: the five controls of Hazelnut's
   320x27 strip, in this skin's language and at the screen's own
   resolution. It sits ABOVE the HUD's z-index 4 and below every window,
   because it is up while the player walks and must not cover a map or
   a message box. Like the HUD it is pointer-transparent; its BUTTONS
   are not, which is the touch-quickslot pattern and the only way a
   panel that does not pause the game can still be clicked. */
.travelpanel { position: fixed; inset: 0; z-index: 5; pointer-events: none;
  font-family: var(--data); color: var(--bone); }
.travelpanel-bar { position: absolute; left: 50%; top: 14px; transform: translateX(-50%);
  display: flex; align-items: stretch; gap: 0; min-width: min(680px, 92vw);
  background: linear-gradient(180deg, rgba(23,27,33,0.94), rgba(14,16,19,0.94));
  border: 1px solid rgba(192,138,62,0.45); border-radius: 3px;
  box-shadow: 0 2px 14px rgba(0,0,0,0.55); }
/* AUDIT-TO1 F1: the bar and the message stand down while the junction disc alone is up */
.travelpanel-bar.hidden { display: none; }
.travelpanel-dest { flex: 1 1 auto; display: flex; flex-direction: column; justify-content: center;
  padding: 7px 14px; min-width: 0; }
.travelpanel-label { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--dim); }
.travelpanel-name { font-family: var(--display); font-size: 20px; line-height: 1.1; color: var(--bone);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.travelpanel-sub { font-size: 11px; color: var(--dim); letter-spacing: 0.04em; }
.travelpanel.following .travelpanel-name { color: var(--brass); }
.travelpanel-speed { display: flex; flex-direction: column; justify-content: center; gap: 2px;
  padding: 7px 14px; border-left: 1px solid rgba(192,138,62,0.25); }
.travelpanel-accel { font-family: var(--display); font-size: 19px; min-width: 46px; text-align: center; color: var(--brass); }
.travelpanel-accel.held { font-size: 15px; min-width: 84px; color: #d9a441; }   /* TV2: held while the land loads; OW6: or an alerted enemy near */
/* RATE-LAW: the ground the rate is the ground's of, under the readout - a word, no control */
.travelpanel-ground { font-size: 11px; letter-spacing: 0.06em; color: var(--dim); white-space: nowrap; text-align: center; }
.travelpanel-acts { display: flex; align-items: center; gap: 6px; padding: 7px 12px;
  border-left: 1px solid rgba(192,138,62,0.25); }
.travelpanel-act { pointer-events: auto; padding: 6px 12px; cursor: pointer;
  background: rgba(43,50,59,0.9); color: var(--bone); border: 1px solid rgba(192,138,62,0.4);
  border-radius: 2px; font-family: var(--data); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; }
.travelpanel-act:hover { background: rgba(78,127,114,0.35); border-color: var(--verdigris); }
.travelpanel-exit:hover { background: rgba(140,58,50,0.45); border-color: var(--blood); }
/* TV1 (bible/06-Systems/Travel-View.md): THE TRAVEL VIEW'S READOUT - a HUD, never a window (ui/travelViewHud.js).
   Under the travel panel (z 4 < its 5): the panel's bar owns the top while a journey runs, this bar the foot. The
   traveller's mark is anchored at its centre on the projected feet; a mark's label hangs under its dot. */
.tview { position: fixed; inset: 0; z-index: 4; pointer-events: none;
  font-family: var(--data); color: var(--bone); transition: opacity 120ms linear; }
.tview-you { position: absolute; left: 0; top: 0; width: 0; height: 0; will-change: transform; }
.tview-ring { position: absolute; left: -15px; top: -9px; width: 30px; height: 18px; border-radius: 50%;
  border: 2px solid var(--brass); box-shadow: 0 0 6px rgba(192,138,62,0.55), inset 0 0 4px rgba(0,0,0,0.6); }
.tview-chev { position: absolute; left: -9px; top: -9px; width: 18px; height: 18px; }
.tview-chev::before { content: ''; position: absolute; left: 4px; top: -13px; border-left: 5px solid transparent;
  border-right: 5px solid transparent; border-bottom: 9px solid var(--brass); filter: drop-shadow(0 1px 1px #000); }
/* AUDIT DEEP2 E15: the drawn places in words, for a screen reader - off the screen, never hidden from it */
.tview-said { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; margin: -1px; padding: 0; }
/* PERF-TV: every mark on one canvas - the dots, plates, edge arrows and the destination's ring drawn by
   ui/travelViewHud.js drawMarks in TRAVEL_VIEW_MARK_COLORS; never a target (a plate's click is found by position).
   TV2's route line stays an SVG under it (a dark casing, the brass line dashed over it). */
.tview-canvas { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.tview-route { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; }
.tview-route-casing { fill: none; stroke: rgba(0,0,0,0.55); stroke-width: 6; stroke-linecap: round; stroke-linejoin: round; }
.tview-route-line { fill: none; stroke: var(--brass); stroke-width: 2.5; stroke-dasharray: 9 6; stroke-linecap: round;
  stroke-linejoin: round; }
.tview-trip { font-size: 11.5px; color: var(--brass); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
/* OW-BLOCK (2026-09-29, the player: "the whole bar in the top is too much ... a light weight block menu ... as much free
   screen as possible", "put the overworld block to the right"): THE OVERWORLD'S BLOCK - one compact column in the bottom-right corner,
   top to bottom: where (the compass beside it), the journey or none, the path and the map, the filters, the way back.
   AUDIT DEEP2 E1/E13's law holds: its foot is MEASURED clear of whatever stands under it (travelViewHud.js
   measureFurniture writes it; 18px is where it starts) and it takes its own clicks. On a touch screen the corner is the
   buttons': it stands at the top right. */
.tview-bar { position: absolute; right: 18px; bottom: 18px; pointer-events: auto; box-sizing: border-box;
  width: 276px; max-width: calc(100vw - 36px); display: flex; flex-direction: column;
  background: linear-gradient(180deg, rgba(23,27,33,0.9), rgba(14,16,19,0.93));
  border: 1px solid rgba(192,138,62,0.45); border-radius: 3px; box-shadow: 0 2px 14px rgba(0,0,0,0.55); }
.tview-bar > * + * { border-top: 1px solid rgba(192,138,62,0.2); }
.tview-head { display: flex; align-items: center; gap: 10px; padding: 8px 12px 7px; min-width: 0; }   /* OW-BLOCK: where, and the trip - no compass (the HUD's is at the top) */
.tview-compass { flex: 0 0 auto; width: 30px; height: 30px; border-radius: 50%; position: relative;
  border: 1px solid rgba(192,138,62,0.55); background: rgba(14,16,19,0.8); }
.tview-needle { position: absolute; inset: 0; text-align: center; font-family: var(--display); font-size: 11px;
  line-height: 12px; color: var(--brass); will-change: transform; }
.tview-needle::after { content: ''; position: absolute; left: 50%; top: 12px; width: 2px; height: 10px;
  margin-left: -1px; background: linear-gradient(180deg, var(--brass), rgba(192,138,62,0)); }
.tview-text { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
.tview-title, .tview-label { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--dim); }
.tview-where { font-size: 12.5px; color: var(--bone); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tview-hint { display: none; }   /* OW-BLOCK: the hints are the head's tooltip */
/* the journey, or none */
.tview-dock { position: static; display: flex; flex-direction: column; min-width: 0; }
.tview-idle { padding: 9px 12px; }
.tview-idle-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.tview-idle-name { font-size: 14px; color: var(--dim); }
.tview-idle-sub { font-size: 11px; line-height: 1.35; color: var(--dim); letter-spacing: 0.03em; }
/* the journey's own bar, reflowed into the column: the place on a line of its own, the clock and Camp / Exit under it
   (its Map is the block's own, below) - its frame, place and parting rules dropped */
#travel-view .tview-dock > .travelpanel-bar { position: static; transform: none; top: auto; left: auto; width: auto;
  min-width: 0; max-width: none; display: flex; flex-wrap: wrap; align-items: center; gap: 0;
  border: 0; border-image: none; border-radius: 0; background: none; box-shadow: none; }
#travel-view .tview-dock > .travelpanel-bar.hidden { display: none; }
#travel-view .tview-dock .travelpanel-dest, #travel-view .tview-dock .travelpanel-speed, #travel-view .tview-dock .travelpanel-acts {
  border: 0; box-shadow: none; background: none; }
#travel-view .tview-dock .travelpanel-dest { flex: 1 1 100%; min-width: 0; max-width: none; padding: 9px 12px 5px; }
#travel-view .tview-dock .travelpanel-name { display: block; font-size: 16px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
#travel-view .tview-dock .travelpanel-speed { flex: 0 0 auto; flex-direction: column; align-items: flex-start; justify-content: center; gap: 0; padding: 3px 0 9px 12px; }
#travel-view .tview-dock .travelpanel-speed > .travelpanel-label { display: none; }
/* the clock on the left, Camp ABOVE Exit on the right */
#travel-view .tview-dock .travelpanel-acts { flex: 0 0 auto; margin-left: auto; display: flex; flex-direction: column; align-items: stretch; justify-content: center; gap: 6px; padding: 3px 12px 9px 8px; }
#travel-view .tview-dock .travelpanel-acts .travelpanel-act { min-width: 78px; text-align: center; }
#travel-view .tview-dock .travelpanel-act[data-act="map"] { display: none; }
#travel-view .tview-dock .travelpanel-act { padding: 5px 9px; }
#travel-view .tview-dock > .travelpanel-msg { position: absolute; right: 0; left: auto; top: auto; bottom: calc(100% + 10px); transform: none;
  white-space: nowrap; pointer-events: none; }
/* the path and the map */
.tview-tools { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 8px 12px; }
.tview-modes { display: flex; align-items: center; gap: 8px; }
.tview-moderow { display: flex; gap: 0; }
.tview-mode { pointer-events: auto; padding: 5px 10px; cursor: pointer; background: rgba(43,50,59,0.9); color: var(--dim);
  border: 1px solid rgba(192,138,62,0.4); font-family: var(--data); font-size: 11.5px; letter-spacing: 0.1em; text-transform: uppercase; }
.tview-mode + .tview-mode { border-left: 0; }
.tview-mode:first-child { border-radius: 2px 0 0 2px; } .tview-mode:last-child { border-radius: 0 2px 2px 0; }
.tview-mode:hover { color: var(--bone); border-color: var(--verdigris); }
.tview-mode.on { background: rgba(192,138,62,0.28); color: var(--brass); }
.tview-map, .tview-back { pointer-events: auto; flex: 0 0 auto; padding: 6px 14px; cursor: pointer;
  background: rgba(43,50,59,0.9); color: var(--bone); border: 1px solid rgba(192,138,62,0.4); border-radius: 2px;
  font-family: var(--data); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; }
.tview-map:hover, .tview-back:hover { background: rgba(78,127,114,0.35); border-color: var(--verdigris); }
.tview-mode:focus-visible, .tview-map:focus-visible, .tview-back:focus-visible { outline: 1px solid var(--brass); outline-offset: 1px; }
/* OW-FILTER: the switches, two to a row - a dot in each group's own mark colour (TRAVEL_VIEW_MARK_COLORS), its word,
   how many there are. Off is dimmed, never gone - the count still speaks. */
.tview-filters { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; padding: 8px 10px 10px; }
.tview-filters > .tview-label { grid-column: 1 / -1; padding: 0 2px 2px; }
.tview-filter { display: grid; grid-template-columns: 8px 1fr auto; align-items: center; gap: 7px; min-width: 0;
  padding: 4px 7px; cursor: pointer; text-align: left; color: var(--dim); background: rgba(43,50,59,0.45);
  border: 1px solid transparent; border-radius: 2px; font-family: var(--data); font-size: 11.5px; letter-spacing: 0.04em;
  transition: color 120ms ease, background-color 120ms ease, border-color 120ms ease; }
.tview-filter.on { color: var(--bone); background: rgba(43,50,59,0.9); border-color: rgba(192,138,62,0.3); }
.tview-filter:hover { border-color: var(--verdigris); }
.tview-filter:focus-visible { outline: 1px solid var(--brass); outline-offset: 1px; }
.tview-fword { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tview-fdot { width: 8px; height: 8px; border-radius: 50%; box-shadow: 0 0 0 1px rgba(0,0,0,0.65); opacity: 0.3; transition: opacity 120ms ease; }
.tview-filter.on .tview-fdot { opacity: 1; }
.tview-fdot-towns { background: #e9e4d9; } .tview-fdot-distant { background: #c08a3e; } .tview-fdot-dungeons { background: #b0443a; }
.tview-fdot-enemies { background: #e0503c; } .tview-fdot-travellers { background: #4e7f72; } .tview-fdot-gathering { background: linear-gradient(135deg, #e586ec, #d9894a 50%, #d4e157); }
.tview-fnum { min-width: 2ch; text-align: right; font-size: 11px; color: var(--dim); font-variant-numeric: tabular-nums; }
/* OW-WHO / OW-NODE-KM (FIELD BUGS 2026-10-04e): the players by kin - each switch's dot the colour their names wear
   (systems/travelViewFilters.js TV_KIN_COLORS; a stranger the traveller's verdigris) - and the two steps, pressed round */
.tview-fdot-kin-friends { background: #8fd0ff; } .tview-fdot-kin-guild { background: #c9a6ff; } .tview-fdot-kin-others { background: #4e7f72; }
.tview-filter.tview-cycle { grid-template-columns: 1fr; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tview-filter.tview-cycle-wide { grid-column: 1 / -1; }
/* SEAT-TIP: the held map's card (.hmtip), over the Overworld - placed in the root's viewport pixels; over the block
   (.hmtip's own z-index stands later in the sheet, so this rule names both classes to outweigh it) */
.hmtip.tview-tip { z-index: 4; }
.tview-filter:not(.on) .tview-fnum { opacity: 0.6; }
/* OW-CONFIRM: the view's own question - over the map's upper middle, in the block's stone; its presses the Path switch's */
.tview-confirm { position: absolute; left: 50%; top: 28%; transform: translate(-50%, -50%); pointer-events: auto; z-index: 2;
  box-sizing: border-box; min-width: 280px; max-width: min(460px, calc(100vw - 32px)); padding: 14px 18px 14px;
  display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center;
  background: linear-gradient(180deg, rgba(23,27,33,0.94), rgba(14,16,19,0.95));
  border: 1px solid rgba(192,138,62,0.45); border-radius: 3px; box-shadow: 0 4px 22px rgba(0,0,0,0.6); }
.tview-confirm-words { display: flex; flex-direction: column; gap: 4px; }
.tview-confirm-ask { font-size: 16px; color: var(--bone); }
.tview-confirm-row { font-size: 12px; color: var(--dim); }
.tview-confirm-presses { gap: 8px; }
.tview-confirm-presses > .tview-mode { min-width: 84px; padding: 6px 14px; border-left: 1px solid rgba(192,138,62,0.4); border-radius: 2px; }
/* the way back */
.tview-foot { display: flex; padding: 8px 12px 10px; }
.tview-foot > .tview-back { flex: 1 1 auto; text-align: center; }
@media (pointer: coarse) { .tview-bar { bottom: auto; top: 14px; } }
/* OW-WHO (FIELD BUGS 2026-10-04e): the Players' switches and the two steps made the filters three rows taller - on a
   touch screen the block stands from the top, and a phone held landscape ran it off the foot. The switches scroll
   within their own section (the block itself never clips: the docked journey's word hangs above it) */
@media (pointer: coarse) { .tview-filters { max-height: 38vh; overflow-y: auto; overscroll-behavior: contain; } }
@media (max-width: 520px) { .tview-bar { right: 10px; width: calc(100vw - 20px); } }
@media (prefers-reduced-motion: reduce) { .tview-filter, .tview-fdot { transition: none; } }
/* PACE-DIALS (2026-10-06): the travel speed dials in the Overworld's block - journey or none */
${Ri("tview")}
/* FILTERS-LEFT (2026-10-06, the player: "move the filters for the overworld to the left bottom side"): THE FILTERS' OWN
   BLOCK in the bottom-left corner - the right's journey block's stone; its foot MEASURED clear of what stands under it
   (travelViewHud.js measureFurniture, as the right's block is); its head folds it away. */
.tview-side { position: absolute; left: calc(8px + env(safe-area-inset-left, 0px)); bottom: calc(8px + env(safe-area-inset-bottom, 0px)); pointer-events: auto; box-sizing: border-box;
  width: 268px; max-width: calc(100vw - 36px); max-height: calc(100vh - 120px); display: flex; flex-direction: column;
  background: linear-gradient(180deg, rgba(23,27,33,0.9), rgba(14,16,19,0.93));
  border: 1px solid rgba(192,138,62,0.45); border-radius: 3px; box-shadow: 0 2px 14px rgba(0,0,0,0.55); }
.tview-side-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 7px 12px; cursor: pointer;
  background: none; border: 0; color: var(--dim); font-family: var(--data); font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; text-align: left; }
.tview-side-head:hover { color: var(--bone); }
.tview-side-head:focus-visible { outline: 1px solid var(--brass); outline-offset: -2px; }
.tview-side-fold { font-size: 12px; letter-spacing: 0; }
.tview-side > .tview-filters { border-top: 1px solid rgba(192,138,62,0.2); overflow-y: auto; overscroll-behavior: contain; min-height: 0; }
.tview-side.folded > .tview-filters { display: none; }
/* WAYPOINTS (2026-10-06): the kinds' switches (each dot its flags' default colour), the follow dropdown, the followed list */
.tview-fdot-wp-personal { background: #e0473a; } .tview-fdot-wp-party { background: #5cc464; } .tview-fdot-wp-guild { background: #b072e8; }
.tview-wp-pick { grid-column: 1 / -1; }
.tview-wp-pick:disabled { cursor: default; }
.tview-wp-pop { grid-column: 1 / -1; display: flex; flex-direction: column; gap: 4px; }
.tview-wp-opt { grid-template-columns: 11px 1fr auto; }
.tview-wp-list { grid-column: 1 / -1; display: flex; flex-direction: column; gap: 3px; }
.tview-wp-row { display: grid; grid-template-columns: 11px 1fr auto auto 24px; align-items: center; gap: 6px; min-width: 0;
  padding: 3px 4px 3px 7px; background: rgba(43,50,59,0.6); border: 1px solid rgba(192,138,62,0.25); border-radius: 2px; }
.tview-wp-flag { width: 11px; height: 9px; box-shadow: 0 0 0 1px rgba(0,0,0,0.7); clip-path: polygon(0 0, 100% 0, 68% 50%, 100% 100%, 0 100%); }
.tview-wp-name { min-width: 0; font-size: 11.5px; color: var(--bone); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tview-wp-dist { font-size: 11px; color: var(--dim); font-variant-numeric: tabular-nums; white-space: nowrap; }
.tview-mode.tview-wp-go, .tview-mode.tview-wp-x { min-width: 0; min-height: 24px; height: 24px; padding: 0 8px; line-height: 1; border-left: 1px solid rgba(192,138,62,0.4); border-radius: 2px; }
.tview-mode.tview-wp-x { width: 24px; padding: 0; font-size: 14px; }
@media (pointer: coarse) { .tview-side { left: 10px; bottom: 14px; max-height: 45vh; } }
@media (max-width: 520px) { .tview-side { left: 10px; width: calc(100vw - 20px); } }
.travelpanel-msg { position: absolute; left: 50%; top: 86px; transform: translateX(-50%);
  font-size: 13px; color: var(--brass); text-shadow: 0 1px 2px rgba(0,0,0,0.9);
  opacity: 0; transition: opacity 180ms ease; }
.travelpanel-msg.show { opacity: 1; }
/* The junction map. "image-rendering: pixelated" because it IS a
   hundred texels a side - the mod's own Point filter mode, which is
   its shipped default. */
.travelpanel-junction { position: absolute; right: 22px; top: 96px; width: 160px; height: 160px;
  display: none; image-rendering: pixelated;
  border: 1px solid rgba(192,138,62,0.4); border-radius: 50%;
  background: rgba(14,16,19,0.72); box-shadow: 0 2px 12px rgba(0,0,0,0.5); }
.travelpanel-junction.show { display: block; }
@media (max-width: 760px) {
  .travelpanel-bar { min-width: 96vw; }
  .travelpanel-name { font-size: 16px; }
  .travelpanel-act { padding: 6px 8px; font-size: 11px; }
  .travelpanel-junction { width: 108px; height: 108px; right: 12px; }
}

.hud-compass { position: relative; width: min(520px, 60vw); height: 26px;
  border-bottom: 2px solid rgba(125,116,96,0.55); }
.hud-strip { position: absolute; inset: 0; overflow: hidden; }
.hud-point { position: absolute; top: 2px; transform: translateX(-50%);
  font-size: 12px; letter-spacing: 0.18em; color: #a89f88; }
.hud-point.hud-cardinal { font-size: 15px; color: #d8cfae; }
.hud-needle { position: absolute; left: 50%; bottom: -2px; width: 2px; height: 8px;
  transform: translateX(-50%); background: var(--brass); }

/* THE TARGET. Hidden until you strike something, and it fades. */
.hud-foe { display: none; flex-direction: column; align-items: center; gap: 4px; }
.hud-foe.on { display: flex; }
.hud-foename { font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; }
.hud-track { position: relative; width: min(320px, 46vw); height: 10px;
  background: rgba(10,12,17,0.75); border: 2px solid rgba(125,116,96,0.55); }
.hud-fill { display: block; height: 100%; width: 100%; background: #d98074; }
.hud-foetrack { width: min(280px, 40vw); height: 8px; }
/* FOEBAR1: THE BLADE FACE. The two pictures are one crop of the friend's
   1000x1000 art (src/ui/assets/, 981x130 - the union alpha box of both),
   so they register pixel for pixel; the red one is clipped in from the
   tips by the draw. The pictures themselves are set by enhancedHud.js's
   build (module-relative URLs, so the build's base carries them). */
.hud-foe.blade .hud-foetrack { display: none; }
.hud-foeblade { display: none; position: relative; width: min(360px, 54vw); aspect-ratio: 981 / 130; }
.hud-foe.blade .hud-foeblade { display: block; }
.hud-bladeempty, .hud-bladefull { position: absolute; inset: 0; display: block;
  background-position: center; background-size: 100% 100%; background-repeat: no-repeat; }
.hud-bladeempty { opacity: 0.72; }   /* FOEBAR1b: the drained bar lets the world through, as the friend's picture does */
/* TELL9 (bible/12-Enhanced-AI/Feud-Arc.md 11.1): THE POISE TRACK under the foe's health - its wind-up read. Empty
   outside one; amber, filling toward its poise; red and HATCHED for iron (never by colour alone); a white flash at a
   break, "Staggered"; "Open" through an overreach. AUDIT TELL U3: the word stands centred UNDER the track (beside it, it
   ran past the bar's right under a narrow screen's quest card), and the card clears it (the --qt-clear rules below).
   U4: the flash plays on THIS foe's break alone (its flash class, enhancedHud.js) - never on a bar turned onto a staggered one.
   POISE-BOX (field, 2026-10-05): every state class is the track's own, poise-<state> and poise-flash - the bare word
   'empty' took the sheet's .empty component above (a dashed box, 26px of padding), and the idle track stood 54px tall. */
.hud-foepoise { display: none; position: relative; width: min(280px, 40vw); height: 6px;
  background: rgba(10,12,17,0.6); border: 1px solid rgba(125,116,96,0.45); }
.hud-foe.poised .hud-foepoise { display: block; }
.hud-foepoise { box-sizing: content-box; max-height: 6px; }   /* POISE-QUIET: a thin track under the bar, never a block */
.hud-poisefill { display: block; height: 100%; width: 0; background: transparent; }
.hud-foepoise.poise-windup .hud-poisefill { background: #e0a43a; }
.hud-foepoise.poise-iron .hud-poisefill { background: repeating-linear-gradient(135deg, #d8342c 0 4px, #7a1410 4px 6px); }
.hud-foepoise.poise-staggered .hud-poisefill { background: #fff; }
.hud-foepoise.poise-staggered.poise-flash .hud-poisefill { animation: hud-poise-flash 0.45s ease-out; }
.hud-foepoise.poise-open { border-color: rgba(241,192,79,0.9); }
.hud-poiseword { position: absolute; left: 50%; top: calc(100% + 3px); transform: translateX(-50%); white-space: nowrap; line-height: 13px;
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; }
.hud-foepoise.poise-iron .hud-poiseword { color: #ff6a5a; }
.hud-foepoise.poise-staggered .hud-poiseword { color: #fff; }
.hud-foepoise.poise-open .hud-poiseword { color: #f1c04f; }
@keyframes hud-poise-flash { 0% { box-shadow: 0 0 10px 3px rgba(255,255,255,0.9); } 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); } }
@media (prefers-reduced-motion: reduce) { .hud-foepoise.poise-staggered.poise-flash .hud-poisefill { animation: none; } }

/* THE VITALS. Magicka, health, fatigue - the reference's own order and
   DFU's own three, each with its number beside it. */
/* PX30c: THE NUMBER IS IN THE BAR. A figure beside a bar is a second
   thing to look at; a percentage ON it is the bar saying what it
   means, and the label rides in there too so each names itself rather
   than relying on a colour a player has to learn. Both sit ABOVE the
   fill and take the shadow, which is what keeps them legible over a
   full bar and an empty one alike. */
.hud-bars { display: flex; align-items: center; gap: 14px; }
.hud-vital { display: flex; align-items: center; }
.hud-vital .hud-track { width: min(190px, 23vw); height: 20px;
  display: flex; align-items: center; justify-content: space-between; }
.hud-vital .hud-fill { position: absolute; inset: 0; width: 100%; }
.hud-vlabel { position: relative; z-index: 1; padding-left: 8px;
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.9); }
.hud-num { position: relative; z-index: 1; padding-right: 8px;
  font-size: 12px; font-variant-numeric: tabular-nums;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.9); }
.hud-health .hud-fill { background: #d98074; }
.hud-magicka .hud-fill { background: #6f8fd9; }
.hud-fatigue .hud-fill { background: #74d9a0; }
/* RENOWN4: MY RENOWN, under the vitals and as wide as their row (three tracks and two gaps) - the box every name
   wears (ui/nameLayer.js .dfname-renown) in this HUD's square 2px frame, a thin bar in the box's own gold with what
   is earned and not yet answered faint after the fill, and the numbers. Online only: \`.on\` while the page knows my
   level; \`.nobar\` while it knows the level and not yet the total (a service before acct13), the box alone.
   RENOWN-BAR (2026-09-26, Mac: "center the bar properly", then "keep the other bar and remove the xp. Just have it
   visible in the player profile"): no numbers on the HUD - the box and the thin bar; the numbers are the profile
   menu's Renown row - and the row is THREE COLUMNS, the box, the bar and an empty column the box's width, so the
   bar's middle is the row's, which is the vitals' (tools/renownBarProbe.mjs measures it). 36px is the box's own
   width (1.6em of 13px, 5px of padding and a 2px frame a side), and the box stretches to it. */
.hud-renown { display: none; align-items: center; gap: 8px; height: 22px; width: calc(3 * min(190px, 23vw) + 28px); }   /* RENOWN4b: 22px, the box's own height - the lift below counts it */
.hud-renown.on { display: grid; grid-template-columns: 36px minmax(0, 1fr) 36px; }
.hud-renownbox { flex: 0 0 auto; min-width: 1.6em; padding: 1px 5px; text-align: center;
  font-size: 13px; line-height: 1.2; font-variant-numeric: tabular-nums;
  color: #f2c46b; background: rgba(14,16,19,0.78); border: 2px solid rgba(242,196,107,0.8); }
.hud-renown .hud-renowntrack { width: auto; height: 20px; display: flex; align-items: center; justify-content: center; }   /* UI3: the vitals' height, the XP inside */
.hud-renown .hud-fill { position: absolute; left: 0; top: 0; bottom: 0; width: 0; height: auto; background: #f2c46b; }
.hud-renownghost { position: absolute; left: 0; top: 0; bottom: 0; width: 0; display: block; background: rgba(242,196,107,0.35); }
.hud-renown.nobar .hud-renowntrack { display: none; }
.hud-renownnum { position: relative; z-index: 1; max-width: 100%; padding: 0 8px; overflow: hidden; text-overflow: ellipsis;
  white-space: nowrap; font-size: 12px; line-height: 1; font-variant-numeric: tabular-nums; text-shadow: 2px 2px 0 rgba(0,0,0,0.9); }

/* PX30b: THE BREATH, above the vitals - drawn only while held, and
   red below DFU's own short-on-breath line. */
.hud-breath { display: none; align-items: center; gap: 8px; }
.hud-breath.on { display: flex; }
.hud-breath .hud-track { width: min(140px, 18vw); height: 8px; }
.hud-breath .hud-fill { background: #f7ef29; }
.hud-breath.short .hud-fill { background: #8a1f1f; }
.hud-grip .hud-fill { background: #c9b98a; }   /* CLIMB2: the grip - stone and chalk, not the breath's yellow */
.hud-breathlabel { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
  color: #9c937d; }

/* ── QS3: THE QUICKSLOT DIAMOND ──────────────────────────────────
   Mac's reference is the Demon's Souls remake's bottom-left diamond:
   the off hand left, the weapon right, two consumables above and
   below. It REPLACES PX30b's "Ready"/"Hand" plaques, which said two of
   the same four things in words under the vitals.

   THE CELL IS CLIPPED, NEVER ROTATED. A 45-degree transform on a cell
   would rotate the sprite inside it, and a rotated pixel sprite is a
   blurred one - which breaks the only rule this whole language has. So
   the diamond is a clip-path on two stacked squares (the frame, and
   the ground inset by the same 2px every frame in this skin is) and
   the CONTENT sits upright inside them.

   THE GEOMETRY IS ONE NUMBER. Four cells of --qs-cell at the four
   points of a --qs-box square touch along their facing edges when
   (box - cell) = cell, so box = 2 * cell; the 4px here is the gap the
   reference leaves between them, measured along the axis rather than
   across the edge. Every other placement below is (box - cell) / 2.

   AN EMPTY CELL IS A SOCKET - the frame at a third of its alpha and
   nothing in it. This is the arc's recorded departure from PX30b's
   "each plaque only when filled": the SHAPE is the readout here, and a
   diamond with a corner missing is not a diamond. See the header of
   ui/enhancedHud.js. */
.hud-quick { position: absolute;
  left: calc(24px + env(safe-area-inset-left, 0px));
  /* THE BLOCK'S BOTTOM EDGE RIDES THE VITALS' TOP LINE. \`.hud-bottom\`
     is anchored 22px up and its vitals row is 30px tall, both scaled, so
     the row's top edge sits at 22 + 30 * scale from the bottom (748 at 1,
     718 at 2 on an 800px viewport - tools/qs3Probe.mjs). The bars are
     centred and this is a corner, so at scale 1 they never meet; past
     about 1.2 the bars are wide enough to reach this column, and then
     the block must already be above them - not only at 2, which is where
     the first draft measured (a 30px-per-unit step that cleared 2 and
     put the bottom cell IN the magicka bar at 1.5, AUDIT QS). 22 + 32 *
     scale: the bars' own line plus two pixels of air, at every scale. */
  bottom: calc(22px + 32px * var(--hud-scale) + env(safe-area-inset-bottom, 0px));
  transform: scale(var(--hud-scale)); transform-origin: bottom left;
  /* 22px under the diamond holds the bottom tag (4px of air and a 16px chip). */
  padding: 0 30px 22px; display: flex; flex-direction: column; align-items: flex-start;
  --qs-cell: 84px; --qs-box: 172px; }
/* TI2: a FIXED virtual stick lives bottom-left at inset 36 radius 56 -
   so it owns x 36..148, which is this corner. The block steps clear of
   it rather than standing on it; the HUD toggles the class off the same
   pref the stick reads. */
.hud-quick.stickclear { left: calc(156px + env(safe-area-inset-left, 0px)); }
/* RENOWN4b (Mac: "ensure the new xp bar doesnt overlap anything"): THE RENOWN ROW LIFTS THE LINE THIS BLOCK RIDES.
   The block's bottom is the vitals' top line and two pixels (22 + 32 x scale, above) - and the Renown row stands
   UNDER the vitals, its 22px and the column's 10px gap, so while it is lit the vitals stand 32 x scale higher and the
   block goes up with them. Without it the bars reached the block's column on a 1024px screen at scale 1 (on a 1280px
   one past 1.16) and the magicka bar stood in the diamond. (UI3: no status row under the vitals now - its chips are
   the status widget's tiles, on this block - so the vitals stand 10 x scale lower than this line counts, and the
   block keeps it as air.) (test/renown4b.test.js models every edge.) */
.hud:has(.hud-renown.on) .hud-quick { bottom: calc(22px + 64px * var(--hud-scale) + env(safe-area-inset-bottom, 0px)); }
/* The caption row: the interaction mode's word, where it already stood,
   and the readied spell beside it. CAPPED AT THE DIAMOND'S OWN WIDTH
   and wrapping, because a readied spell can be called anything and an
   unbounded row made the block 515px wide on a 430px phone - measured,
   and the whole block ran off the right edge with it. */
.hud-qcap { display: flex; flex-wrap: wrap; align-items: center; gap: 8px;
  min-height: 20px; max-width: var(--qs-box); }
.hud-readied { display: none; align-items: baseline; gap: 8px; padding: 3px 10px;
  background: rgba(10,12,17,0.6); border: 2px solid var(--brass); }
.hud-readied.on { display: flex; }
.hud-readykind { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
  color: #9c937d; }
.hud-readyname { font-size: 13px; color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }

/* QS6 - THE SPELL CHIP. The diamond's four corners are the two hands
   and the two consumables; a spell is in none of them, so the spell
   slot reads on the CAPTION, beside the readied chip it replaces when
   the two would say the same word. It wears its OWN key, because the
   key is what changes it: a tap readies, a hold cycles the book.
   The tag inside is the corner chip's own class, un-cornered - the
   diamond positions those absolutely and this one sits in a row. */
.hud-qspell { display: none; align-items: center; gap: 6px; padding: 3px 10px;
  max-width: 100%; background: rgba(10,12,17,0.6); border: 2px solid rgba(125,116,96,0.55); }
.hud-qspell.on { display: flex; }
.hud-qspell.qspell-empty { display: flex; opacity: 0.55; }   /* HOTSLOT: the empty socket, dim, wearing its key */
.hud-qspell .hud-qstag { position: static; transform: none; background: none; border: 0;
  min-width: 0; height: auto; padding: 0; color: #9c937d; }
.hud-qspname { font-size: 13px; color: #d8cfae; text-shadow: 2px 2px 0 rgba(10,12,17,0.9);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.hud-qspicon { flex: 0 0 auto; filter: drop-shadow(1px 1px 0 rgba(0,0,0,0.85)); }   /* UI2: the spell's own icon, before its name */
/* IN HAND: the same bone-and-amber the readied chip wears, because it
   is saying the same thing the readied chip used to say. */
.hud-qspell.readied { border-color: var(--brass); }
.hud-qspell.readied .hud-qspname { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
/* A GHOST: a spell the book no longer holds - the slot keeps the name
   so the refusal can say which one, and the chip says so first. */
.hud-qspell.ghost .hud-qspname { color: #6a6353; }
/* BEING CYCLED: a hold is turning this slot right now. The lamp lingers
   a moment past the release (QUICK_CYCLE_LINGER_MS) so the last name a
   player landed on is the one they see. */
.hud-qspell.cycling { border-color: rgb(243,239,44); }
.hud-qcell.cycling .hud-qframe { background: rgb(243,239,44); }   /* the frame is a clipped rhombus, so its colour is a BACKGROUND */

.hud-qdiamond { position: relative; width: var(--qs-box); height: var(--qs-box); margin-top: 18px; }
/* AUDIT QS F1: THE CELL ITSELF IS THE RHOMBUS. The clip was on the
   frame and the ground alone, and the cell under them was a SQUARE -
   four squares that overlap in four patches, later siblings winning -
   so on a phone a fifth of the taps inside one cell's picture fired
   another cell's action, and the empty middle of the diamond swallowed
   a tap meant for the game. clip-path clips the hit test as it clips
   the paint; the tags are the diamond's children, not the cells', and
   stand outside it. */
.hud-qcell { position: absolute; width: var(--qs-cell); height: var(--qs-cell);
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); }
.hud-qc1 { left: calc((var(--qs-box) - var(--qs-cell)) / 2); top: 0; }
.hud-qoff { left: 0; top: calc((var(--qs-box) - var(--qs-cell)) / 2); }
.hud-qmain { left: calc(var(--qs-box) - var(--qs-cell)); top: calc((var(--qs-box) - var(--qs-cell)) / 2); }
.hud-qc2 { left: calc((var(--qs-box) - var(--qs-cell)) / 2); top: calc(var(--qs-box) - var(--qs-cell)); }
.hud-qframe { position: absolute; inset: 0; background: rgba(125,116,96,0.55);
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); }
.hud-qground { position: absolute; inset: 2px; background: rgba(10,12,17,0.75);
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); }
.hud-qbody { position: absolute; inset: 0; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 3px; }
/* NO WIDTH ATTRIBUTE and no forced square: a dagger is tall and narrow
   and a cuirass wide, so both axes are capped and the shape stands -
   the inventory tile's own reasoning, at the HUD's size. */
.hud-qicon { display: block; max-width: 44px; max-height: 44px; image-rendering: pixelated; }
.hud-qinit { font-size: 13px; letter-spacing: 0.08em; color: #a89f88; }
/* QS5 - THE DURABILITY IS THE CELL'S OWN LOWER EDGES (Mac: "a better
   design for durability instead of the line sitting inside with the
   sprite"). A strip under the art was a second object competing with
   the picture in an 84px cell; the diamond already draws the two lines
   the gauge needs. The stroke is inside the rhombus, because the cell
   is clipped to it and a stroke on the boundary would lose its outer
   half; it is crisp rather than smooth, which is what every other
   drawn thing in this skin is. */
.hud-qwear { display: none; position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: none; overflow: visible; }
.hud-qcell.hasbar .hud-qwear { display: block; }
.hud-qwtrack { fill: none; stroke: rgba(10,12,17,0.85); stroke-width: 5; }
.hud-qwfill { fill: none; stroke: var(--brass); stroke-width: 5; }
.hud-qcell.worn .hud-qwfill { stroke: #d98074; }
/* The count, inside the lower-right face of a consumable cell. */
.hud-qcount { position: absolute; right: 26px; bottom: 18px; font-size: 12px;
  font-variant-numeric: tabular-nums; color: #d8cfae; }
/* THE STATES, all of them a class the HUD toggles only on change.
   A sheathed weapon is HALF THERE; a ghost - a slot whose kind has run
   out of the pack, or a swap weapon that left it - keeps its place in
   grey, and its count still reads 0 in the classic shadowed pair this
   UI has always used for what is urgent. */
.hud-qcell.sheathed { opacity: 0.5; }
.hud-qcell.ghost .hud-qicon, .hud-qcell.ghost .hud-qinit { filter: grayscale(1); opacity: 0.4; }
.hud-qcell.ghost .hud-qcount { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.hud-qcell.socket .hud-qframe { background: rgba(125,116,96,0.35); }
.hud-qcell.socket .hud-qbody, .hud-qcell.socket .hud-qcount { display: none; }
/* THE TAGS, at the diamond's four outer points: the keyboard key in
   the pixel face, or our own pad glyph (ui/padGlyphs.js) when the pad
   is the live device. Hidden outright when nothing is bound - a chip
   reading NONE tells a player to press a key that does not exist. */
.hud-qstag { display: none; position: absolute; align-items: center; justify-content: center;
  min-width: 14px; height: 16px; padding: 0 4px;
  background: rgba(10,12,17,0.75); border: 2px solid rgba(125,116,96,0.55);
  font-size: 11px; line-height: 1; letter-spacing: 0.14em; text-transform: uppercase; color: #d8cfae; }
.hud-qstag.on { display: flex; }
.hud-qsglyph { display: block; width: 12px; height: 12px; image-rendering: pixelated; }
.hud-qstop { left: 50%; top: 0; transform: translate(-50%, calc(-100% - 4px)); }
.hud-qsbottom { left: 50%; top: 100%; transform: translate(-50%, 4px); }
.hud-qsleft { left: 0; top: 50%; transform: translate(calc(-100% - 4px), -50%); }
.hud-qsright { left: 100%; top: 50%; transform: translate(4px, -50%); }
/* DEPARTURE 2 (ui/enhancedHud.js's header): on a phone the cells are
   the only control for the two quick uses and the swap, so they - and
   only they - take a finger. The \`.hud\` root stays pointer-events
   none, which is what keeps the game underneath reachable. TOUCH-FIRST
   is the pair \`pointer: coarse\` AND \`hover: none\` (AUDIT QS F8): a
   desktop with a touchscreen answers coarse alone, and a mouse click
   on the diamond there fired a slot and swallowed a swing. */
@media (pointer: coarse) and (hover: none) {
  .hud-qcell { pointer-events: auto; touch-action: none; }
  /* QS6: the spell chip is a control on a phone too - tap to ready,
     hold to cycle the book, the same pair the cells carry. */
  .hud-qspell { pointer-events: auto; touch-action: none; }
  /* AUDIT QS F10: a chip naming a KEY on a device with no keyboard
     tells the player to press something that is not there; a pad's
     glyph stays, because a pad on a phone is a pad. */
  .hud-qstag.key { display: none; }
}
/* The switch (features 'quickslot-diamond') hides the diamond and its
   tags; the caption row above it stays, because the mode word lives
   there and the switch is about the diamond. */
.hud-quick.nodiamond .hud-qdiamond { display: none; }
/* QS6: and the spell chip with it - it is a quickslot readout, not the
   mode word. The KEY still works, as the diamond's four do. */
.hud-quick.nodiamond .hud-qspell { display: none; }

/* PX32: THE RETICLE. A square cross in bone with the classic shadow,
   at the viewport's centre; the mode's word takes its place under the
   styles where the icon IS the crosshair, and sits in the corner under
   the others - hudCrosshair.js's own laws. Not scaled by the HUD's
   scale: a reticle is a point, and the scale is for things read at
   the edges. */
.hud-reticle { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
  display: flex; align-items: center; justify-content: center; }
.hud-cross { position: relative; display: block; width: 18px; height: 18px; }
.hud-cross::before, .hud-cross::after { content: ''; position: absolute; background: #d8cfae;
  box-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.hud-cross::before { left: 0; top: 8px; width: 18px; height: 2px; }
.hud-cross::after { left: 8px; top: 0; width: 2px; height: 18px; }
.hud-modeword { font-size: 13px; letter-spacing: 0.2em; text-indent: 0.2em; text-transform: uppercase;
  color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.hud-modecentre { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }
/* QS3: the mode word is the quickslot diamond's caption now - it stood
   at left 24 / bottom 24, which is exactly where the diamond goes, so
   rather than move one out of the other's way it moved INTO it. Its
   show/hide laws are untouched. */
.hud-modecorner { flex: 0 0 auto; }

/* UI3: THE STATUS WIDGET (ui/hudStatus.js). The effects left the foot of the HUD - a row of text chips under the vitals
   and the Renown bar - for a column of SQUARE tiles at the left edge, standing on the quickslot block's caption (the
   block's first child, so it rides the block's corner and scale and grows up, never down into the diamond). A grid
   that fills its rows top to bottom and then wraps into a next column: the HUD writes the rows - the tiles the band
   above the caption holds, measured, never more than there are tiles - so a long list grows sideways before it meets
   the chat, the escort faces or the touch buttons. A tile: a 2px bevel in its kind's colours, a 16px picture at two to
   one, its time on a plate at its foot, its name beside it where there is room. */
.hud-stat { display: grid; grid-auto-flow: column; grid-auto-columns: max-content; gap: 8px 14px; margin-bottom: 8px; }
.hud-stat:empty { display: none; }
/* NO BAND ABOVE THE CAPTION (a phone on its side, where the diamond reaches the top; the chat opened tall on a laptop):
   the widget stands BESIDE the diamond instead - out of the block's column, clear of the right tag in the block's own
   padding, from the caption's top or from under what stands above where that reaches lower (the HUD writes its \`top\`
   and its rows off the diamond's height - hudStatus.js statSide) - icons alone (.stat-tight). HUD-CLASS: each state is the widget's own word, stat-<state> - as the bare 'side' it took the windows' .side column above (its --ink ground). */
.hud-stat.stat-side { position: absolute; left: 100%; top: 0; margin: 0 0 0 8px; }
.hud-stat.stat-noroom { display: none; }   /* no band above and none beside: it steps aside rather than stand over anything */
.hst-cell { --hst-hi: #c2b79a; --hst-lo: #3a352a; display: flex; align-items: center; gap: 8px; min-width: 0; }
.hst-tile { position: relative; flex: 0 0 auto; width: 36px; height: 36px; display: grid; place-items: center;
  border: 2px solid; border-color: var(--hst-hi) var(--hst-lo) var(--hst-lo) var(--hst-hi);
  background: rgba(10,12,17,0.82); box-shadow: 0 0 0 1px #050608, 2px 2px 0 1px rgba(0,0,0,0.45); }
.hst-pic { display: block; width: 32px; height: 32px; image-rendering: pixelated; }
/* THE FRAME SAYS WHAT IT IS: mine on me green, another's (a poison, a disease) red, a need felt amber and one that
   costs red - RED MEANS IT COSTS - a set power its set's colour; an item's held magic dashed, a recovery dashed and
   dimmed (the chips' own two marks) */
.hst-cell.buff { --hst-hi: #b9f0c4; --hst-lo: #216b3b; }
.hst-cell.debuff { --hst-hi: #f2a597; --hst-lo: #8a2820; }
/* BUFF-END: with the mouse freed a spell the player may end takes the pointer (the HUD stays pointer-transparent
   otherwise) - a right-click ends it; the hover lights its frame the way a pressed button lights */
.hud-stat.ending .hst-cell.can-end { pointer-events: auto; cursor: pointer; }
.hud-stat.ending .hst-cell.can-end:hover .hst-tile { border-color: rgb(243,239,44) rgb(93,77,12) rgb(93,77,12) rgb(243,239,44); }
.hst-cell.warn { --hst-hi: #f3cf86; --hst-lo: #7a5424; }
.hst-cell.danger { --hst-hi: #ff9a7a; --hst-lo: #b53a2e; }
.hst-cell.set { --hst-hi: var(--set-hi, #e6dccb); --hst-lo: var(--set-lo, #3a352a); }
.hst-cell.set .hst-tile { box-shadow: 0 0 0 1px #050608, 0 0 8px rgba(var(--set-rgb, 185,171,147),0.45); }
.hst-cell.item .hst-tile { border-style: dashed; }
.hst-cell.recovering .hst-tile { border-style: dashed; box-shadow: 0 0 0 1px #050608; opacity: 0.72; }
.hst-foot { position: absolute; left: 50%; bottom: -6px; transform: translateX(-50%); padding: 1px 3px;   /* inside a short screen's 6px gap too */
  font-size: 11px; line-height: 1; font-variant-numeric: tabular-nums; white-space: nowrap; color: #fffaf0;
  background: rgba(5,6,8,0.9); text-shadow: 1px 1px 0 #050608; }
.hst-name { font-size: 12px; letter-spacing: 0.06em; white-space: nowrap; max-width: 120px; overflow: hidden;
  text-overflow: ellipsis; color: #d8cfae; }
.hst-cell.danger .hst-name { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
/* "+N": the tiles past the screen's middle, folded into one - its count in its middle, in the kit's stone frame */
.hst-cell.more .hst-foot { position: static; transform: none; padding: 0; background: none; font-size: 12px; }
.hst-cell.set .hst-name { color: var(--set-hi, #e6dccb); text-shadow: 1px 1px 0 #050608; }
/* ENDING: the picture blinks - DFU's own quarter second off and on (hudActiveSpells.js BLINK_INTERVAL), never an item's */
.hst-cell.blink .hst-pic { animation: hst-blink 0.5s steps(1, end) infinite; }
@keyframes hst-blink { 50% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .hst-cell.blink .hst-pic { animation: none; }
  .hst-cell.blink .hst-tile { border-color: rgb(243,239,44) rgb(93,77,12) rgb(93,77,12) rgb(243,239,44); }
}
/* THE NAMES GO where there is no room for them: a phone, a short screen, a band under three rows (.stat-tight) */
.hud-stat.stat-tight .hst-name { display: none; }
@media (max-width: 640px), (max-height: 500px) { .hud-stat .hst-name { display: none; } }
/* A SHORT SCREEN (a phone on its side, where the diamond reaches the top): smaller tiles - the picture at one and a half,
   closer together - the numbers hudStatus.js STAT_METRICS.short counts its rows in */
@media (max-height: 500px) {
  .hst-tile { width: 28px; height: 28px; }
  .hst-pic { width: 24px; height: 24px; }
  .hud-stat { gap: 6px 10px; }
}

/* FONT1: THE MID-SCREEN LABEL - DaggerfallHUD's OTHER text surface
   (AUDIT 64 F34, ui/midScreenText.js): one centred line that replaces
   itself, where the mode word and every "You are too far away" is
   spoken. DFU puts it at native y=146 of 200.

   AUDIT FONT F11: 73% IS THAT PROPORTION ONLY AT 16:10, and this rule
   used to claim outright that a player swapping skins finds the line
   where they left it. The classic label is a NativePanel child, and
   nativePanel.nativeMetrics FLOORS the fit (\`Math.floor(min(w/320,
   h/200))\`) and centres the panel in what is left, so at 1280x1024 the
   panel is 320x200 at scale 4 with oy 112 and the label sits at
   (112 + 146*4)/1024 = 68%, not 73%. So the module WRITES the real
   number: ui/enhancedHudText.js sets --hudmid-top in CSS pixels from
   the same floored arithmetic, off the same canvas, and 73% is the
   fallback for a frame that has not been drawn yet.

   AUDIT SD IV (T5): ITS WIDTH ITS OWN - a fixed box at left 50% with no width shrinks to the half of the screen right of
   it, so the 86vw cap never held: a phone wrapped every line at 195 px, the Hour's longest into four rows over the
   ground's warning. max-content to the cap - divided by the HUD scale, which grows the box after it is laid out (a
   line at scale 2 ran off both sides). The prison's line, never scaled, keeps the cap whole. */
.hudmid { position: fixed; left: 50%; top: var(--hudmid-top, 73%); transform: translateX(-50%) scale(var(--hud-scale, 1));
  transform-origin: top center; z-index: 4; pointer-events: none; text-align: center;
  width: max-content; max-width: calc(min(680px, 86vw) / var(--hud-scale, 1)); font-size: 15px; letter-spacing: 0.04em;
  font-family: ${M}; -webkit-font-smoothing: none;
  font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0;
  color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
/* AUDIT FONT3 F4: THE PRISON'S LINE is the prison screen's, not the HUD's - it rides the native panel (its size is the
   panel's 7-row cell at the panel's scale, ui/prisonScreen.js), never the HUD scale (which takes it to 7.5px at 0.5),
   in DaggerfallCourtWindow's own colour and shadow (DAYS_LABEL_COLOR / DAYS_LABEL_SHADOW). */
.hudmid.hudprison { transform: translateX(-50%); max-width: min(680px, 86vw); font-size: var(--prison-px, 22px); letter-spacing: 0.06em;
  color: rgb(232,196,76); text-shadow: 2px 2px 0 rgb(48,36,20); }

/* FONT1: THE ONLINE STATUS LINE - the socket's own word (connecting,
   reconnecting, refused), top-left where the classic drew it and clear
   of the chat panel's corner at 44. The online lane IS the enhanced
   lane (systems/onlineLane.js), so this line is never seen in any
   other face. Brass rather than the popup's yellow: it is the machine
   talking, not the game. */
.hudstatus { position: fixed; left: calc(8px + var(--ui-pillar, 0px) + env(safe-area-inset-left, 0px));   /* RETRO-UI */
  top: calc(8px + env(safe-area-inset-top, 0px)); z-index: 4; pointer-events: none;
  max-width: min(420px, 60vw); font-size: 13px; letter-spacing: 0.04em;
  font-family: ${M}; -webkit-font-smoothing: none;
  font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0;
  color: #e0b070; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }

@media (max-width: 860px) {
  .hud-top { top: 10px; }
  .hud-bottom { bottom: 12px; gap: 8px; }
  .hud-bars { gap: 10px; }
  .hud-vital .hud-track { width: 26vw; }
  .hud-renown { width: calc(78vw + 20px); }   /* RENOWN4: the vitals' row here - three 26vw tracks and two 10px gaps */
  /* QS3: the diamond shrinks with everything else - one number, and
     the four placements follow it. MEASURED against the touch layer's
     bottom-right column and the vitals above it at 860x400 and
     430x860, at hud scale 1 and 2. */
  .hud-quick { --qs-cell: 60px; --qs-box: 124px; padding: 0 24px 22px;
    left: calc(14px + env(safe-area-inset-left, 0px));
    /* ...AND IT SITS ABOVE THE TOUCH LAYER'S BUTTON ROW. ui/touch.js
       puts Jump, sheathe, the mode cycle and the social door along the
       bottom-right at edge 16, 48 tall, and the leftmost of them starts
       at x = W - 280: on a 430px phone that is 150, which the diamond's
       right tag reached. 76 is the same number ui/partyPanel.js uses to
       clear that layer's other row - 16 + 48 and twelve of air. */
    bottom: calc(76px + 30px * (var(--hud-scale) - 1) + env(safe-area-inset-bottom, 0px)); }
  .hud-quick.stickclear { left: calc(160px + env(safe-area-inset-left, 0px)); }
  /* RENOWN4b: and here the Renown row lifts the vitals by its 22px and the 8px gap - the block goes up the same 30 */
  .hud:has(.hud-renown.on) .hud-quick { bottom: calc(46px + 60px * var(--hud-scale) + env(safe-area-inset-bottom, 0px)); }
  .hud-qdiamond { margin-top: 14px; }
  .hud-qicon { max-width: 32px; max-height: 32px; }
  .hud-qwtrack, .hud-qwfill { stroke-width: 6; }
  .hud-qcount { right: 18px; bottom: 13px; font-size: 11px; }
}

/* RENOWN4b: ON A TOUCH SCREEN THE BOTTOM-RIGHT IS THE TOUCH LAYER'S (ui/touch.js: jump, sheathe, the mode and the social
   door, from 16 to 64px up and from 16 to 280px in from the right, over the safe area) - so the Renown row does not
   stand under the vitals there: it stands ABOVE them (the bars and the rows under them take a later place in the
   column) and never lower than 68px, four clear of that row. Its margin makes up whatever the vitals below it do not,
   at every scale (the column is scaled, so the margin is the clearance over the scale); the quickslot block rides
   two pixels above the row's top, whichever of its two lines is higher at this scale (the margin's 68px, or the
   stack's own height once that is past it). (UI3: the row of effect and need chips that stood under the vitals, and
   lifted it all by its 24px and gap, is the status widget's tiles now, on the block itself.) TOUCH-FIRST is the pair
   the diamond's own taps use (AUDIT QS F8). */
@media (pointer: coarse) and (hover: none) {
  .hud-bars { order: 1; }
  .hud-renown { margin-bottom: max(0px, calc((46px + env(safe-area-inset-bottom, 0px)) / var(--hud-scale) - 30px)); }
  .hud:has(.hud-renown.on) .hud-quick { bottom: calc(max(24px + 62px * var(--hud-scale), 70px + 32px * var(--hud-scale)) + env(safe-area-inset-bottom, 0px)); }
}
@media (pointer: coarse) and (hover: none) and (max-width: 860px) {
  .hud-renown { margin-bottom: max(0px, calc((56px + env(safe-area-inset-bottom, 0px)) / var(--hud-scale) - 28px)); }
  .hud:has(.hud-renown.on) .hud-quick { bottom: calc(max(14px + 58px * var(--hud-scale), 70px + 30px * var(--hud-scale)) + env(safe-area-inset-bottom, 0px)); }
}

/* PX25: the doors the F5 sheet carried, on the page that is the sheet. */
.px-sheetdoors { display: flex; flex-wrap: wrap; gap: 10px; margin: 24px 0 0; }
.px-sheetdoors .act { min-height: 44px; }
.sb-shell .sb-acts { display: flex; gap: 10px; margin-top: 22px; flex-wrap: wrap; }
/* PX23b: the two icons the classic draws, as the words they mean. */
.sb-shell .sb-frame, .cr-shell .sb-frame { display: flex; flex-wrap: wrap; gap: 8px; margin: 10px 0 0; }
.sb-shell .sb-chip, .cr-shell .sb-chip { padding: 4px 10px; border: 2px solid rgba(125,116,96,0.35);
  color: #a89f88; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
/* ...and the numbers each effect record already held. */
.sb-shell .sb-effect { display: block; }
.sb-shell .sb-effline { display: flex; align-items: baseline; gap: 10px; }
.sb-shell .sb-nums { display: flex; flex-wrap: wrap; gap: 6px 14px; margin: 4px 0 0 26px; }
.sb-shell .sb-num { color: var(--brass); font-size: 12px; letter-spacing: 0.1em;
  font-variant-numeric: tabular-nums; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
/* SB-ICON: the icon grid under the spell's buttons - the spell maker's picker, in the book. 12 to a row, as the classic grid. */
.sb-shell .sb-icons { display: grid; grid-template-columns: repeat(auto-fill, minmax(44px, 1fr)); gap: 6px; margin: 16px 0 0; max-height: 260px; overflow-y: auto; padding: 8px; border: 2px solid rgba(125,116,96,0.35); background: rgba(0,0,0,0.25); }
.sb-shell .sb-icon { pointer-events: auto; display: grid; place-items: center; width: 100%; aspect-ratio: 1; min-height: 40px; padding: 0; cursor: pointer; background: rgba(43,50,59,0.9); border: 2px solid rgba(125,116,96,0.45); }
.sb-shell .sb-icon img { width: 32px; height: 32px; image-rendering: pixelated; }
.sb-shell .sb-icon:hover, .sb-shell .sb-icon:focus-visible { outline: none; border-color: var(--verdigris); }
.sb-shell .sb-icon.on { border-color: var(--brass); background: rgba(192,138,62,0.28); }
.sb-shell .sb-iconnum { font-size: 11px; color: var(--dim); }
.sb-shell .sb-iconbtn.on { color: var(--brass); }
.sb-shell .sb-rename { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; margin: 16px 0 0; }
.sb-shell .sb-renamelabel { color: #9c937d; font-size: 12px; letter-spacing: 0.14em;
  text-transform: uppercase; }
.sb-shell .sb-rename input { flex: 1; min-width: 160px; min-height: 44px; padding: 8px 12px;
  background: rgba(10,12,17,0.6); border: 2px solid rgba(125,116,96,0.35);
  color: #d8cfae; font: inherit; font-size: 15px; }
.sb-shell .sb-rename input:focus { outline: none; border-color: var(--brass); }
/* AUDIT-39r: the delete prompt covers the window it asks about. DFU's
   DaggerfallMessageBox is a PUSHED window, so the book beneath it is
   inert; here the book's controls are disabled and this scrim is what
   makes that visible rather than merely true. */
.sb-shell .sb-ask { position: absolute; inset: 0; display: flex; align-items: center;
  justify-content: center; background: rgba(10,12,17,0.72); padding: 20px;
  z-index: 10; }
.sb-shell .sb-ask .card { max-width: 420px; margin: 0; text-align: center; }
.sb-shell .sb-ask .sb-acts { justify-content: center; }

/* ── THE TRADE COUNTER (enhancedTrade.js) ──────────────────────────
   Same bones as the spellbook/chronicle shells above - centred frame,
   the sb-top/sb-who header, the sb-ask confirm scrim - plus the
   pack's own two-list grid (.packlists/.packcol/.itemrow, all
   unscoped already) for the shelf and the basket. A window that wore
   .px-home/.px-over alone and none of this got no centring, no scrim
   overlay and no side-by-side lists - three symptoms of the one
   missing class, not three separate faults. */
.trade-shell { display: flex; align-items: center; justify-content: center; }
.trade-shell .px-win { width: min(960px, 96vw); height: min(640px, 86dvh); }
.trade-shell .sb-top { display: grid; grid-template-columns: 1fr auto 1fr;
  align-items: center; padding: 12px 16px;
  border-bottom: 2px solid rgba(125,116,96,0.35); }
.trade-shell .sb-who { text-align: center; }
.trade-shell .sb-who h2 { font-family: inherit; font-weight: 400; font-size: 18px; margin: 0;
  letter-spacing: 0.1em; text-indent: 0.1em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.trade-shell .sb-top .act { justify-self: end; }
/* THE TWO LISTS. The shop's shelf/basket and the staged lot, side by
   side - the same .packlists grid the pack's own remote pane uses, so
   the two screens read as one family rather than two. Under 1100px it
   stacks exactly as the pack's own does (the media query above this
   block already covers .packlists unscoped). */
.trade-shell .px-body { display: flex; flex-direction: column; overflow: hidden; padding: 18px 26px 0; }
.trade-shell .packlists { margin: 0; flex: 1 1 auto; min-height: 0; }
.trade-shell .packcol { padding: 0 2px 18px; overflow-y: auto; min-height: 0; }
/* THE TABS. The base .packtab is flex: 1 1 auto in a wrapping row -
   fine at the pack's own full width (four tabs, one row, never wraps),
   but this column is half that wide: "Ingredients" alone wraps to its
   own row and, still flex-growing, stretches to fill it - one
   underline four times its neighbours' width. A small fixed 2x2 grid
   has no row for a lone flex item to stretch across. */
.trade-shell .packtabs { display: grid; grid-template-columns: repeat(2, 1fr); flex-wrap: unset; }
.trade-shell .packtab { flex: unset; }
.trade-shell .trade-footer { padding: 14px 26px;
  border-top: 2px solid rgba(125,116,96,0.35); background: rgba(10,12,17,0.4); }
.trade-shell .trade-cost { flex: 1 1 auto; color: var(--brass); font-size: 13px;
  font-variant-numeric: tabular-nums; align-self: center; }
.trade-shell .itemrow.on { background: rgba(125,116,96,0.16); box-shadow: inset 2px 0 0 var(--brass); }
.trade-shell .itemrow.ghost { opacity: 0.5; }
.trade-shell .itemrow.picked { background: rgba(125,116,96,0.22); box-shadow: inset 2px 0 0 var(--brass); }
/* THE TOOLTIP STRIP - a single click's itemLine, read but not moved
   (enhancedTrade.js's own "selected"); a double click, or the footer's
   primary button reaching for this same pending pick, is the transfer.
   One row rather than enhancedInventory.js's sliding third column -
   this window is two columns, not three. */
.trade-shell .trade-detail { display: flex; align-items: center; gap: 14px;
  margin: 10px 0 0; padding: 10px 14px; background: rgba(0,0,0,0.28);
  border: 1px solid rgba(125,116,96,0.4); border-radius: 2px; flex: 0 0 auto; }
.trade-shell .trade-detail .tile { flex: 0 0 auto; }
.trade-shell .trade-detail { min-height: 78px; box-sizing: border-box; }   /* TRADE-STEADY: the strip's room kept, filled or not */
.trade-shell .trade-detail-empty { justify-content: center; }
.trade-shell .trade-detail-empty .meta { margin: 0; font-size: 12px; color: #7d745f; letter-spacing: 0.04em; }
.trade-shell .trade-detail-info { flex: 1 1 auto; min-width: 0; }
.trade-shell .trade-detail-info h4 { margin: 0 0 4px; font-size: 14px; font-weight: 400;
  color: #e8e0c8; }
.trade-shell .trade-detail-info .meta { margin: 0; font-size: 12px; color: #a99b7a;
  overflow-wrap: break-word; }
.trade-shell .trade-detail-info .trade-quote { margin: 4px 0 0; font-size: 13px;
  color: var(--brass); font-variant-numeric: tabular-nums; }
/* UXB1-K (2026-09-25, the UX backlog): the repair counter's clock - each
   job's countdown at the row's end, where the weight sits, in the brass a
   finished job wears and the dim of one still on the bench; and the hour
   and day it is ready on the strip. */
.trade-shell .itemrepair { flex: 0 0 auto; margin-left: 10px; font-size: 12px; color: var(--dim);
  font-variant-numeric: tabular-nums; white-space: nowrap; }
.trade-shell .itemrepair.done { color: var(--brass); }
.trade-shell .itemrow.ghost .itemrepair { opacity: 1; }
.trade-shell .trade-detail-info .trade-ready { color: #d8cfae; }
/* UXB1-L: the count for a shelf stack - a stepper over a numeric field,
   and All; the field narrow, the steps the settings pane's own. */
.trade-shell .trade-qty { display: flex; align-items: center; gap: 8px; margin: 6px 0 0; flex-wrap: wrap; }
.trade-shell .trade-qtyk { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #a99b7a; }
.trade-shell .trade-qtyin { width: 64px; min-height: 32px; padding: 4px 6px; text-align: center;
  font: inherit; font-size: 14px; color: #e8e0c8; background: rgba(0,0,0,0.35);
  border: 1px solid rgba(125,116,96,0.6); font-variant-numeric: tabular-nums; }
.trade-shell .trade-qtyin:focus { outline: none; border-color: var(--brass); }
.trade-shell .trade-qtyall { padding: 4px 10px; min-height: 32px; }
/* THE CONFIRM/REFUSAL BOX, over the counter it interrupts - Buy/Sell's
   Yes/No, the letter-of-credit notice, and the steal roll's own ask.
   DISC28-C (Discord: the shelf's row markers drawn over the haggle box): a modal is a LAYER, not a place in the
   DOM. The rows' own furniture climbs out of auto - the wear bar at 1 (WEAR-UI), the rune and the padlock at 2 -
   and nothing between them and this scrim makes a stacking context, so a positioned scrim at z auto painted UNDER
   every positive layer whatever the DOM order. All three shells' boxes stand at 10, above anything a row carries
   (test/disc28_shopbox.test.js reads every z-index their shells declare). */
.trade-shell .sb-ask { position: absolute; inset: 0; display: flex; align-items: center;
  justify-content: center; background: rgba(10,12,17,0.72); padding: 20px;
  z-index: 10; }
.trade-shell .sb-ask .card { max-width: 420px; margin: 0; text-align: center; }
.trade-shell .sb-ask .sb-acts { justify-content: center; }

/* ── THE TAVERN PANEL (enhancedTavern.js) ──────────────────────────
   The SAME missing-shell bug the trade counter shipped with (above):
   .px-win with no scoped rule over it centres nothing and keeps
   whatever the base rule's own min(920px,94vw)/min(620px,74dvh)
   computes to, which at most window sizes IS most of the screen. A
   four-button panel, a one-line room form or an eleven-row drink list
   need nowhere near that - this shell pins it to a small dialog
   instead, the size the content actually asks for. */
.tavern-shell { display: flex; align-items: center; justify-content: center; }
/* AUDIT ENH-NOTICE3 B1: with the words on the notice panel the click-catcher is THE SCREEN, not the window's rectangle - DFU's ClickAnywhereToClose takes the press anywhere, and the panel stands at the right edge, outside a centred window. */
.tavern-shell .sb-ask.sb-screen { position: fixed; inset: 0; }
.tavern-shell .px-win { width: min(460px, 92vw); height: auto; max-height: min(560px, 82dvh); }
/* PARTY-REST DROP (2026-09-22): the enhanced rest window (ui/enhancedRest.js) - a small centred dialog in the
   tavern panel's own size class, never the generic .px-win default (min(920px,94vw) x min(620px,74dvh) - most of
   the screen, pinned top-left, the same missing-shell bug the tavern and merchant panels shipped with); the hours
   field big and centred, not the gold field's small left-aligned one; the vitals line under the meter (REST-VITALS1). */
.rest-shell { display: flex; align-items: center; justify-content: center; }
.rest-shell .px-win { width: min(420px, 92vw); height: auto; max-height: min(420px, 80dvh); }
.rest-shell .selection-acts { flex-direction: column; align-items: stretch; }   /* AUDIT PARTY-REST: the four choices as a column, not a wrapped row */
.rest-shell .hours-field { display: block; width: 140px; margin: 4px auto 22px; font-family: inherit;
  font-size: 34px; text-align: center; background: #0e1013; color: var(--bone, #e9e4d9);
  border: 1px solid var(--iron, #2b323b); border-radius: 3px; padding: 6px 8px; }
.rest-shell .vitals-line { margin: 10px 0 0; font-size: 14px; color: var(--dim, #9a9486); font-variant-numeric: tabular-nums; }
.rest-shell .clock-line { margin: 8px 0 0; font-size: 13px; color: var(--dim, #9a9486); text-align: center; }   /* AUDIT LIVED1b U7 */
.rest-shell .clock-line:empty { display: none; }
.tavern-shell .px-body { flex: 0 1 auto; overflow-y: auto; padding: 18px 22px 22px; }
.tavern-shell .sb-top { display: grid; grid-template-columns: 1fr auto 1fr;
  align-items: center; padding: 12px 16px;
  border-bottom: 2px solid rgba(125,116,96,0.35); }
.tavern-shell .sb-who { text-align: center; }
.tavern-shell .sb-who h2 { font-family: inherit; font-weight: 400; font-size: 17px; margin: 0;
  letter-spacing: 0.1em; text-indent: 0.1em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.tavern-shell .sb-top .act { justify-self: end; }
.tavern-shell .tavern-greeting { margin: 0 0 16px; text-align: center; color: #c9bfa0;
  font-size: 13px; line-height: 1.5; font-style: italic; }
/* THE FOUR-BUTTON PANEL, a vertical stack rather than the footer's
   horizontal row - this is the whole content of the main screen, not
   an actions bar under something else. */
.tavern-shell .tavern-menu-acts { display: flex; flex-direction: column; gap: 10px; }
.tavern-shell .tavern-act { width: 100%; padding: 12px 16px; font-size: 14px;
  text-align: center; justify-content: center; }
/* THE ROOM FORM: one line, one field, one button. */
.tavern-shell .tavern-room { display: flex; flex-direction: column; gap: 14px; }
.tavern-shell .tavern-room .goldfield { display: flex; gap: 10px; align-items: center; }
.tavern-shell .tavern-room .goldfield input { flex: 1 1 auto; background: rgba(0,0,0,0.35);
  border: 1px solid rgba(125,116,96,0.5); color: #e8e0c8; padding: 8px 10px;
  font-family: inherit; font-size: 14px; border-radius: 2px; }
/* THE FOOD & DRINK LIST - the pack's own itemrow, two columns (a name
   and a price) rather than one run-on line, so it reads like every
   other list this skin draws instead of the odd one out. */
.tavern-shell .tavern-menu { padding: 0; overflow: visible; min-height: auto; }
.tavern-shell .tavern-menu-list { display: flex; flex-direction: column; gap: 4px;
  max-height: min(340px, 50dvh); overflow-y: auto; margin-bottom: 14px; }
.tavern-shell .tavern-row { display: flex; align-items: center; justify-content: space-between;
  gap: 12px; width: 100%; text-align: left; }
.tavern-shell .tavern-price { color: var(--brass); font-variant-numeric: tabular-nums; flex: 0 0 auto; }
.tavern-shell .tavern-menu-header { margin: 10px 0 2px; font-size: 11px; letter-spacing: 0.12em;
  text-transform: uppercase; color: #9c937d; }
.tavern-shell .tavern-menu-header:first-child { margin-top: 0; }
/* THE CONFIRM/REFUSAL BOX - the room offer's Yes/No, the not-hungry and
   not-enough-gold notices, a meal or a drink's own line. */
.tavern-shell .sb-ask { position: absolute; inset: 0; display: flex; align-items: center;
  justify-content: center; background: rgba(10,12,17,0.72); padding: 20px;
  z-index: 10; }
.tavern-shell .sb-ask .card { max-width: 380px; margin: 0; text-align: center; }
.tavern-shell .sb-ask .sb-acts { justify-content: center; }

/* ── THE MERCHANT/REPAIR POPUP (enhancedMerchantPanel.js) ──────────
   Reuses .tavern-shell's whole frame - centring, header, button-list
   styling - just narrower: three or four short labels need nowhere
   near the tavern's 460px. */
.merchant-shell .px-win { width: min(320px, 88vw); }

/* ── PX24: THE CHRONICLE ────────────────────────────────────────
   The spellbook's frame with a reading column instead of a card: the
   notes and messages are ENTRIES, each under its own numbered
   divider, and the history is one page of prose rather than the
   classic's four-lines-and-a-Next-button. */
.cr-shell .px-win { width: min(920px, 94vw); height: min(620px, 86dvh); }
.cr-shell .cr-prose p, .cr-shell .cr-entry p { margin: 0 0 10px; font-size: 15px;
  line-height: 1.65; color: #d8cfae; text-shadow: 2px 2px 0 rgba(0,0,0,0.8);
  overflow-wrap: anywhere; }
/* JOURNAL1 (tools/journalProbe.mjs found it): A WORD TOO LONG FOR THE COLUMN BREAKS INSIDE IT. The notebook's lines are
   seventy columns of DFU's fixed-width page, and one unbroken run of them - a word, an address, a page kept from another
   player, the pieces breakableNote cuts - is wider than this proportional column; without the break the text ran out of
   its card and the whole section scrolled sideways (672px in 624 at a desktop, 652 in 315 on a phone). */
.cr-shell .cr-prose { max-width: 62ch; }
/* PX24b: AN ENTRY IS A CARD WITH A DATE. The notebook stamps every
   note with the day and the city it was written in; the first draft
   flattened that into the body and numbered the entries instead. The
   head carries the date, the body the words, and a note carries the
   remove the classic has always had. */
.cr-shell .cr-entries { display: flex; flex-direction: column; gap: 14px; }
.cr-shell .cr-entry { max-width: 66ch; padding: 12px 16px 10px;
  background: rgba(10,12,17,0.5); border: 2px solid rgba(125,116,96,0.3); }
.cr-shell .cr-entry:hover { border-color: rgba(125,116,96,0.55); }
.cr-shell .cr-head { display: flex; align-items: baseline; gap: 12px;
  padding-bottom: 8px; margin-bottom: 10px;
  border-bottom: 2px solid rgba(125,116,96,0.28); }
.cr-shell .cr-when { flex: 1; min-width: 0; color: var(--brass); font-size: 12px;
  letter-spacing: 0.14em; text-transform: uppercase;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.cr-shell .cr-rm { flex: 0 0 auto; min-width: 28px; min-height: 28px; padding: 0 8px;
  background: none; border: 2px solid rgba(125,116,96,0.35); color: #9c937d;
  font: inherit; font-size: 14px; cursor: pointer; }
.cr-shell .cr-rm:hover, .cr-shell .cr-rm:focus-visible { outline: none;
  color: rgb(243,239,44); border-color: var(--brass); text-shadow: 2px 2px 0 rgb(93,77,12); }
/* PX24c: a message has no dated head; the card keeps its frame and the
   head row collapses rather than printing a lie.
   AND THE THIRD SCOPING FAULT: .sb-frame and .sb-chip were scoped to
   the spellbook alone, so the chronicle's identity line rendered as
   bare running text - after the head (PX24) and the divider (PX23).
   The family's shared parts share their selector now, and the pin
   below holds all three together so there is no fourth. */
.cr-shell .cr-head.cr-headless { padding-bottom: 0; margin-bottom: 0; border-bottom: 0; }
.cr-shell .cr-head.cr-headless .cr-when { display: none; }
/* MAC-F: A CARD FOLDS TO ITS HEAD. The caret and the date are ONE
   button so the handle is the thing already being read; it has to
   carry the head's own type, because a <button> does not inherit it.
   A headless card keeps the caret - that is its only handle - and
   takes the room back under it that the head row gave up. */
.cr-shell .cr-fold { flex: 1; min-width: 0; display: flex; align-items: baseline; gap: 10px;
  padding: 0; background: none; border: 0; font: inherit; color: inherit;
  text-align: left; cursor: pointer; }
.cr-shell .cr-fold .cr-caret { flex: 0 0 auto; color: #9c937d; font-size: 11px; }
.cr-shell .cr-fold:hover .cr-when, .cr-shell .cr-fold:focus-visible .cr-when,
.cr-shell .cr-fold:hover .cr-caret, .cr-shell .cr-fold:focus-visible .cr-caret {
  color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.cr-shell .cr-fold:focus-visible { outline: none; }
.cr-shell .cr-head.cr-headless .cr-fold { padding-bottom: 6px; }
.cr-shell .cr-foldall { margin: 0 0 14px; max-width: 66ch; }
.cr-shell .cr-entry.cr-shut { padding-bottom: 12px; }
.cr-shell .cr-entry.cr-shut .cr-head { padding-bottom: 0; margin-bottom: 0; border-bottom: 0; }
/* QUEST1: the Share button, inside the chosen quest's own opened frame -
   a small action set off from the prose below it, not another line of
   journal text. */
.cr-shell .cr-share { min-width: 60px; }
/* GUIDE2: A LIVE QUEST'S WHERE AND WHEN - under its head, standing when the card is shut (they are the quest's state, as
   its title is): the place in the find-place box's words, the way there, the note, and the deadline the pause tab has
   carried since PX5. */
.cr-shell .cr-where { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 12px; margin: 0 0 10px; max-width: 66ch; }
.cr-shell .cr-whereplace { color: #d8cfae; font-size: 14px; overflow-wrap: anywhere; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.cr-shell .cr-whereplace::before { content: '\\25c8'; content: '\\25c8' / ''; margin-right: 8px; color: var(--brass); }   /* AUDIT GUIDE U18 */
.cr-shell .cr-where .act { min-height: 30px; padding: 2px 10px; font-size: 13px; }
.cr-shell .cr-wherenote { flex-basis: 100%; color: #b9b094; font-size: 13px; line-height: 1.5; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.cr-shell .cr-timer { color: #c5bda2; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.cr-shell .cr-timer.urgent { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.cr-shell .cr-entry.cr-shut .cr-where { margin: 8px 0 0; }
@media (pointer: coarse) { .cr-shell .cr-where .act { min-height: 44px; } }
/* JOURNAL1: A NOTE'S SHARE - the strip under the note's head: who the page can be held out to (the players near
   enough to talk to, a button each, which wraps as the names do), and the letter. What the last press did is said
   under it in the journal's dim hand. A name at its widest breaks inside its button rather than out of the card. */
.cr-shell .cr-sharebox { display: flex; flex-direction: column; gap: 8px; margin: 0 0 12px; padding: 10px 12px;
  background: rgba(10,12,17,0.55); border: 2px solid rgba(125,116,96,0.3); }
.cr-shell .cr-sharerow { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; min-width: 0; }
.cr-shell .cr-sharelabel { flex: none; color: var(--brass); font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.cr-shell .cr-sharewhy, .cr-shell .cr-shareword { color: #b9b094; font-size: 13px; line-height: 1.5; overflow-wrap: anywhere;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.cr-shell .cr-sharebox .act { max-width: 100%; overflow-wrap: anywhere; text-align: left; }
@media (pointer: coarse) { .cr-shell .cr-sharebox .act { min-height: 44px; } }
.cr-shell .sb-frame { margin: 0 0 16px; }
.cr-shell .cr-compose { display: flex; gap: 10px; margin: 0 0 18px; max-width: 66ch; }
.cr-shell .cr-compose input { flex: 1; min-width: 0; min-height: 44px; padding: 8px 12px;
  background: rgba(10,12,17,0.6); border: 2px solid rgba(125,116,96,0.35);
  color: #d8cfae; font: inherit; font-size: 15px; }
.cr-shell .cr-compose input:focus { outline: none; border-color: var(--brass); }
.cr-shell .cr-compose input::placeholder { color: #9c937d; }
@media (pointer: coarse) { .cr-shell .cr-rm { min-width: 44px; min-height: 44px; } }
.cr-shell .cr-row .sb-cost { color: #9c937d; }
.cr-shell .cr-row.on .sb-cost { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }

/* AUDIT UI: the settings row's own controls, sized for a thumb wherever
   there is one. Here rather than in each component, so the LAW has one
   home and the next control added to a row inherits it. */
@media (pointer: coarse) {
  .step { width: 44px; height: 44px; }
  .rowact, .ctl .act { min-height: 44px; }
  .step { font-size: 26px; }   /* CC-STEP: the glyph grows with the thumb-sized button (its own rule, so the 44px law's line above stays the one the pins find) */
  /* FT16: THE TILE'S CONTROLS JOIN THE LAW. FT14 replaced the list's
     one cycling .ctl .act - which this block already sized - with a
     segmented bar, chips and a drawer door, and none of them inherited
     it: the outdoors switch measured 20px on a phone, less than half
     the target, which is the AUDIT 24 shape the law exists to stop.
     tools/enhancedMenuProbe.mjs had been red since FT14 and so nobody
     saw it. Sized here rather than in the FT block below, because this
     is where the law lives and the next control added must find it. */
  .ft-segb, .ft-mchip, .ft-tile-more, .opt-search, .opt-filters .chip, .sec-jumpbtn { min-height: 44px; }   /* FT18: the search is a thumb's target too (ORG2: and the filters and the jumps) */
  .ft-keys-to { min-height: 44px; }   /* UXB1-F: the keys' door is a control too */
}
.shell .step { border: 2px solid rgba(125,116,96,0.55); border-radius: 0; background: none;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.shell .step:hover { color: rgb(243,239,44); border-color: var(--brass);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.shell .swatch { border: 2px solid rgba(125,116,96,0.55); border-radius: 0; }
.shell .dcard h3 { font-size: 20px; }
.shell .dcard code { font-family: inherit; border: 2px solid rgba(125,116,96,0.4);
  border-radius: 0; background: rgba(0,0,0,0.35); letter-spacing: 0.06em; }
.shell .sheet-close { letter-spacing: 0.2em; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
/* tier dots stay their tier colours; only the shape squares off. */
/* ── PX11: THE SHELL STANDS ON THE SKY (Mac: the fullscreen settings
   gets the treatment) ── the boot shell renders over the home's own
   ground canvas; every old panel colour comes off and real 2px rules
   replace the painted grid gaps. Paint and grounds only - the grid,
   the sizes and every measured target are exactly where they were. */
.shell { position: relative; z-index: 1; background: transparent; }
.shell .side { background: rgba(10,12,17,0.62); border-right: 2px solid rgba(125,116,96,0.35); }
.shell .pane { background: transparent; }
.shell .head { background: transparent; border-bottom: 2px solid rgba(125,116,96,0.35); }
.shell .panes { background: transparent; }
.shell .subrail { background: rgba(10,12,17,0.45); border-right: 2px solid rgba(125,116,96,0.35); }
.shell .list { background: rgba(10,12,17,0.38); }   /* a breath of scrim so the stars stay behind the words */
.shell .detail { background: rgba(10,12,17,0.55); border-left: 2px solid rgba(125,116,96,0.35); }
.shell .row { background: none; border-bottom: 2px solid rgba(125,116,96,0.3); }
.shell .row:hover { background: rgba(0,0,0,0.25); }
.shell .row.on { background: rgba(0,0,0,0.25); box-shadow: none; }
.shell .foot { background: transparent; }

/* ── PX12: THE DETAIL PASS ──────────────────────────────────────
   The craft layer, named flaw by flaw before it was written:
   1. SCROLLBARS. The browser default broke the idiom on every
      scrolling column. Square 10px rails, dim square thumbs, brass
      on hover - shell and pause window alike, plus the Firefox pair.
   2. THE GEM SPEAKS EVERYWHERE. The rail's and the category strip's
      active rows take the same diamond every other surface leads
      with - the glyph, never a rotated box (a rotated square
      anti-aliases its diagonals; the pixel font does not).
   3. SECTION TITLES take the window's wing rules.
   4. ONE DATA COLOUR. Values read #c5bda2 in the window and brass in
      the shell; data is c5bda2 everywhere now - brass is ornament,
      gold is the hand.
   5. THE F8 DOT becomes the diamond it always wanted to be.
   6. EMPTY STATES shed the dashed 1px box for a quiet open diamond
      over pixel type.
   7. KEYBOARD FOCUS in the language: rows and chips take the gold
      pair plus a brass outline under :focus-visible, so a tab is as
      visible as a hover.
   8. NOTHING EASES. The last row transition dies. */
/* CURSOR-EDGE: EVERY SCROLLBAR ON THE PAGE IS A CUSTOM ONE. A native scrollbar shows the OS arrow whatever cursor its
   element wears (the gauntlet included); a ::-webkit-scrollbar one takes its scroller's. Chromium (121+) draws the
   native one wherever scrollbar-color or scrollbar-width applies - and scrollbar-color inherits, so the standard pair
   stands only where ::-webkit-scrollbar does not (Firefox). Unscoped, so a scroller outside .shell and .px-win is held. */
@media (any-pointer: fine) {   /* AUDIT part five UI2: a touch screen keeps its overlay scrollbar - no cursor to keep */
::-webkit-scrollbar { width: 10px; height: 10px; } }
::-webkit-scrollbar-track { background: rgba(0,0,0,0.3); }
::-webkit-scrollbar-thumb {
  background: rgba(125,116,96,0.5); border: 2px solid rgba(0,0,0,0.3); border-radius: 0; }
::-webkit-scrollbar-thumb:hover { background: var(--brass); }
@supports not selector(::-webkit-scrollbar) {
  .shell, .px-win { scrollbar-width: thin; scrollbar-color: rgba(125,116,96,0.6) rgba(0,0,0,0.3); } }

.shell .railbtn.on .rk::before, .shell .railbtn:focus-visible .rk::before {
  content: '\\25c6  '; color: rgb(243,239,44); font-size: 12px;
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.shell .subbtn.on::before { content: '\\25c6'; color: rgb(243,239,44); font-size: 11px;
  margin-right: 8px; text-shadow: 2px 2px 0 rgb(93,77,12); }
.shell .more-dot { width: auto; height: auto; background: none; }
.shell .more-dot::before { content: '\\25c6'; color: var(--brass); font-size: 10px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }

.shell .head { display: flex; align-items: center; gap: 16px;
  border-bottom: 2px solid rgba(125,116,96,0.35); }
.shell .head::before, .shell .head::after { content: ''; flex: 1; height: 2px; max-width: 110px;
  background: linear-gradient(90deg, transparent, rgba(125,116,96,0.7)); }
.shell .head::after { background: linear-gradient(90deg, rgba(125,116,96,0.7), transparent); }
.shell .head h2 { font-size: 24px; letter-spacing: 0.14em; text-indent: 0.14em; }

.shell .val, .px-setwrap .val { color: #c5bda2; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }

.shell .empty, .px-sys .empty { border: 0; text-align: center; padding: 20px 22px; }
.shell .empty::before, .px-sys .empty::before { content: '\\25c7'; display: block;
  color: rgba(125,116,96,0.7); font-size: 15px; margin-bottom: 8px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.shell .empty h3 { font-family: inherit; font-size: 16px; letter-spacing: 0.14em;
  text-transform: uppercase; color: #c5bda2; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.shell .empty p { text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }

.shell .row-main:focus-visible { outline: 2px solid var(--brass); outline-offset: -2px; }
.shell .row-main:focus-visible .row-name { color: rgb(243,239,44);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.shell .subbtn:focus-visible, .shell .railbtn:focus-visible { outline: none;
  color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-qrow:focus-visible { outline: none; }
.px-setwrap .row-main:focus-visible { outline: 2px solid var(--brass); outline-offset: -2px; }

.shell .row, .shell .act, .shell .step { transition: none; }
.shell .dcard .status { color: #c5bda2; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.shell .tag { border: 2px solid rgba(125,116,96,0.4); color: rgb(243,239,44);
  text-shadow: 2px 2px 0 rgb(93,77,12); letter-spacing: 0.24em; }

/* ── PX13: THE WIZARD WEARS THE PIXELS ──────────────────────────
   The new-game walk on the same sky, in the same language - paint
   over U50's machine, which does not move: every stage, every back
   arm, the keyboard table and the walk-not-a-menu rail law are the
   flow's and stay the flow's.
   THE RAIL IS A GEM SPINE: done stages carry a dim filled diamond,
   the current stage the gold pair, the road ahead an open one - the
   walk drawn as ornament, read at a glance. */
.wizard { background: transparent; }
.wizard .railbtn .rk::before { content: '\\25c7  '; color: rgba(125,116,96,0.55);
  font-size: 12px; }
.wizard .railbtn.done .rk::before { content: '\\25c6  '; color: #9c937d; }
.wizard .railbtn.on .rk::before { content: '\\25c6  '; color: rgb(243,239,44);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.wizard .railbtn.done { border-left-color: transparent; }
.wizard .railbtn.done .rk { color: #9c937d; }
.wizard .railbtn.todo .rk { color: rgba(125,116,96,0.5); }
.wizard .stepstrip .seg { border-radius: 0; background: rgba(125,116,96,0.3); }
.wizard .stepstrip .seg.on { background: var(--brass); }
.wizard .steptext { letter-spacing: 0.14em; text-transform: uppercase; color: #9c937d;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
/* The stage questions take the window's wing rules - every screen
   asks its one question between the same ornaments. */
.wizard .choose h2 { font-family: inherit; font-weight: 400; font-size: 24px;
  letter-spacing: 0.14em; text-indent: 0.14em; text-transform: uppercase;
  display: flex; align-items: center; justify-content: center; gap: 14px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.wizard .choose h2::before, .wizard .choose h2::after { content: ''; flex: 0 0 90px; height: 2px; }
.wizard .choose h2::before { background: linear-gradient(90deg, transparent, rgba(125,116,96,0.7)); }
.wizard .choose h2::after { background: linear-gradient(90deg, rgba(125,116,96,0.7), transparent); }
/* The big choices: pixel plaques - the About box's language at
   decision size. */
.wizard .bigbtn { border: 2px solid rgba(125,116,96,0.55); border-radius: 0;
  background: rgba(10,12,17,0.55); color: #d8cfae; font-family: inherit;
  letter-spacing: 0.1em; text-transform: uppercase; font-size: 16px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); transition: none; }
.wizard .bigbtn:hover, .wizard .bigbtn:focus-visible { outline: none;
  color: rgb(243,239,44); border-color: var(--brass); background: rgba(0,0,0,0.35);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.wizard .bigbtn.on { color: rgb(243,239,44); border-color: var(--brass);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
/* The race grid and the map's fallback list ride the same plaque. */
.wizard .racegrid button { border: 2px solid rgba(125,116,96,0.55); border-radius: 0;
  background: rgba(10,12,17,0.55); color: #d8cfae; font-family: inherit;
  letter-spacing: 0.1em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); transition: none; }
.wizard .racegrid button:hover, .wizard .racegrid button:focus-visible { outline: none;
  color: rgb(243,239,44); border-color: var(--brass);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
/* The name box: a pixel field - ink ground, 2px frame, gold focus. */
.wizard .namebox { font-family: inherit; font-size: 20px; letter-spacing: 0.08em;
  color: #d8cfae; background: rgba(0,0,0,0.4); border: 2px solid rgba(125,116,96,0.55);
  border-radius: 0; padding: 10px 14px; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.wizard .namebox:focus { outline: none; border-color: var(--brass);
  color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
/* The ten faces: 2px frames, the chosen one gold - and the number
   fallback reads as a plaque, not a hole. */
.wizard .facegrid button { border: 2px solid rgba(125,116,96,0.55); border-radius: 0;
  background: rgba(10,12,17,0.55); transition: none; }
.wizard .facegrid button:hover, .wizard .facegrid button:focus-visible { outline: none; border-color: var(--brass); }
.wizard .facegrid button.on { border-color: var(--brass);
  outline: 2px solid rgba(192,138,62,0.5); outline-offset: 2px; }
.wizard .facenum { font-family: inherit; color: #9c937d; font-size: 18px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
/* Reflexes: the five bands as plaques, the chosen one gold. */
.wizard .reflexbtn { border: 2px solid rgba(125,116,96,0.55); border-radius: 0;
  background: rgba(10,12,17,0.55); color: #d8cfae; font-family: inherit;
  letter-spacing: 0.12em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); transition: none; }
.wizard .reflexbtn:hover, .wizard .reflexbtn:focus-visible { outline: none;
  color: rgb(243,239,44); border-color: var(--brass); text-shadow: 2px 2px 0 rgb(93,77,12); }
.wizard .reflexbtn.on { color: rgb(243,239,44); border-color: var(--brass);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
/* The map's caption and the pending-stage words sit in pixel dim. */
.wizard .mapnote { color: #9c937d; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
/* PX17a: the description reads as prose - a size a person reads at,
   air between the lines, air between the paragraphs. */
.wizard .dcard p { font-size: 15px; line-height: 1.6; margin: 0 0 12px;
  color: #c5bda2; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
/* The action bar's Back/Cancel is the shell's own .act, already
   repainted; the bar just loses its old hairline for the 2px rule. */
.wizard .actionbar { border-top: 2px solid rgba(125,116,96,0.35); background: transparent; }
/* PX13b (Mac: "the main background is still the old basic ui"): the
   stage ground was .stagebody's var(--iron) - the SAME gap-paint
   trick PX10b found on the settings .panes, one file later. Off, and
   the walk floats on the sky like every other face; the class list
   keeps the shell's 0.38 breath and the dcard its own bordered card. */
.wizard .stagebody { background: transparent; }

/* ── UXB1 (2026-09-25, the UX backlog) - THE WIZARD'S ADDITIONS ──
   G: an attribute's line, beside the stats and under the builder's
   attributes. I: the difficulty dagger - DFU's track on its side, the
   band Create allows, the dagger where daggerY puts it. H: the class
   file card. J: the review's three columns (below). */
/* the retired sheet's .skillgroup rule (uppercase, spaced) reaches any
   text a group holds that is not a button - these two are prose */
.attrhelp, .dagger { text-transform: none; letter-spacing: normal; }
.attrhelp { margin: 0 0 14px; }
.attrhelp h4 { margin: 0 0 4px; font-size: 13px; font-weight: 400; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--brass); text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.wizard .dcard .attrhelp p, .attrhelp p { margin: 0; font-size: 13.5px; line-height: 1.45; color: #c5bda2; }
.skillgroup .attrhelp { padding: 8px 18px 0; margin: 0; }
.dagger { padding: 10px 18px 6px; }
.dagger-head { display: flex; justify-content: space-between; align-items: baseline; }
.dagger-val { color: var(--brass); font-size: 18px; font-variant-numeric: tabular-nums;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.dagger.red .dagger-val { color: var(--blood); }
.dagger-track { position: relative; height: 44px; margin: 6px 8px 2px; border-bottom: 2px solid rgba(125,116,96,0.45); }
.dagger-band { position: absolute; bottom: 0; height: 8px; background: rgba(192,138,62,0.18);
  border: 1px solid rgba(192,138,62,0.55); border-bottom: 0; }
.dagger-zero { position: absolute; bottom: 0; width: 2px; height: 12px; background: rgba(125,116,96,0.85);
  transform: translateX(-1px); }
.dagger-mark { position: absolute; bottom: 2px; transform: translateX(-50%); line-height: 0; }
.dagger-glyph { display: block; transform: rotate(180deg); filter: drop-shadow(2px 2px 0 rgba(0,0,0,0.7)); }
.dagger-blade { fill: #d8cfae; }
.dagger-guard { fill: var(--brass); }
.dagger-grip { fill: #7d5a2e; }
.dagger.red .dagger-blade { fill: var(--blood); }
.dagger-ends { display: flex; justify-content: space-between; font-size: 11px; letter-spacing: 0.14em;
  text-transform: uppercase; color: #9c937d; margin: 0 6px; }
.dagger-note { margin-top: 4px; }
.dagger.red .dagger-note { color: var(--blood); }
.skillpane > .dagger { padding-left: 0; padding-right: 0; margin-bottom: 10px; }
.classio { margin: 12px 0 0; }
.classio h3 { margin: 0 0 6px; }
.classio-text { display: block; width: 100%; box-sizing: border-box; min-height: 64px; margin: 8px 0 0;
  font: inherit; font-size: 13px; color: #d8cfae; background: rgba(0,0,0,0.4);
  border: 2px solid rgba(125,116,96,0.55); border-radius: 0; padding: 8px 10px; resize: vertical; }
.classio-text:focus { outline: none; border-color: var(--brass); }
.classio-note { margin: 10px 0 0; font-size: 13px; color: var(--brass); text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.b-acts .act.on { border-color: var(--brass); color: rgb(243,239,44); }
/* J: the builder's grid areas - the DOM keeps the phone's reading order
   (name, skills, attributes, class, acts) and the grid places it. */
@media (min-width: 900px) {
  .skillpane.builder { grid-template-areas: "name name" "skills attrs" "skills klass" "acts acts" "io io"; }
  .skillpane.builder > .b-name { grid-area: name; }
  .skillpane.builder > .b-skills { grid-area: skills; }
  .skillpane.builder > .b-attrs { grid-area: attrs; }
  .skillpane.builder > .b-class { grid-area: klass; }
  .skillpane.builder > .b-acts { grid-area: acts; }
  .skillpane.builder > .b-io { grid-area: io; }
}
/* UXB1-J (2026-09-25, the UX backlog: "Try to modify the character
   creation menu to prevent the need for scrolling on standard aspect
   ratios (can't account for everything, but 16:9 shouldn't need to)"):
   THE DESK'S WIZARD. Measured in a browser at 1920x1080, 1600x900,
   1366x768 and 1280x720, the class list, the skills, the review and the
   builder all scrolled at every one (the builder by 119px even at 1080,
   the review by 613) and the biography and reflexes at the smaller two.
   A mouse needs no 44px target - that floor is the finger's
   (enhancedTapProbe.mjs, pointer: coarse keeps every rule above) - so
   on a fine pointer a row is its words and its stepper, the long lists
   take the width the desk has (the class list two columns, the skills
   and the review three, the builder three), and the plaques lose the
   air a phone's thumb needed. */
@media (min-width: 1100px) and (pointer: fine) {
  .wizard .row { min-height: 0; padding-top: 2px; padding-bottom: 2px; }
  .wizard .row-main { min-height: 32px; padding: 2px 0; }
  .wizard .row-note, .wizard .row-sub { margin-top: 1px; }
  .wizard .skillgroup { margin: 0 0 12px; }
  .wizard .skillhead { padding-bottom: 5px; }
  .wizard .skillpane { padding-top: 18px; padding-bottom: 18px; }
  .wizard .poolbar { padding-top: 8px; padding-bottom: 8px; }
  .wizard .stagebody > .list.classlist { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
    align-content: start; column-gap: 12px; }
  .wizard .skillpane.skills3 { max-width: 1180px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 28px; align-content: start; }
  .wizard .skillpane.skills3 > .acts { grid-column: 1 / -1; }
  .wizard .reviewgrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); column-gap: 20px; }
  .wizard .reviewhead { padding-top: 12px; padding-bottom: 12px; }
  .wizard .question { padding-top: 22px; padding-bottom: 22px; }
  .wizard .question h2 { margin-bottom: 14px; }
  .wizard .answers { gap: 5px; }
  .wizard .answer { min-height: 36px; padding: 7px 14px; }
  .wizard .choose { gap: 18px; padding-top: 22px; padding-bottom: 22px; }
  .wizard .bigbtn { min-height: 60px; padding: 14px 18px; }
  .wizard .reflexbtn { min-height: 36px; padding: 7px 12px; }
  .skillpane.builder { grid-template-columns: repeat(3, minmax(0, 1fr)); column-gap: 26px;
    grid-template-areas: "skills attrs name" "skills attrs klass" "skills attrs acts" "io io io"; }
  .skillpane.builder > .b-name { align-self: start; width: 100%; box-sizing: border-box; }
  /* a third of the pane: the name box's 20px would cut its own question short */
  .wizard .skillpane.builder > .b-name { font-size: 16px; letter-spacing: 0.04em; }
  .skillpane.builder > .b-acts { justify-content: flex-start; flex-wrap: wrap; }
  /* the review's columns are narrow at 1280: the row gives its padding
     to the name, and a name that still does not fit ellipsizes rather
     than running under its value */
  .wizard .reviewgrid .row { padding-left: 8px; padding-right: 4px; gap: 6px; }
  .wizard .reviewgrid .row-name { font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .wizard .reviewgrid .skillhead.review { padding: 10px 8px 5px; }
  .wizard .reviewgrid .ctl .val { min-width: 2ch; text-align: right; }
  /* a class's description is TEXT.RSC rows - lines of one text - not
     paragraphs, so they sit closer on a desk */
  .wizard .dcard p { margin-bottom: 6px; line-height: 1.45; }
}

/* ── PX14/PX17d: THE DIAL, BUILT ── the in-game compass rose with
   its craft pass. FADE INTO VIEW: opacity and the depth-of-field
   blur step in together over 220ms in five pixel steps - the world
   behind falls out of focus (backdrop blur + a light desaturate),
   which is the reference's own gesture; reduced-motion gets the end
   state at once. CLOSE IS INSTANT - the dial must be gone before the
   window it opens takes the keys. Everything else is the family:
   corner gems framing the dial space, a layered diamond knot, 2px
   arm rules with a mid gem and an open terminal, labels in the caps,
   the chosen arm in the gold pair with its flanking diamonds. */
.px-dial { position: fixed; inset: 0; z-index: 14; background: rgba(10,12,17,0.4);
  display: grid; place-items: center; grid-template-rows: 1fr auto;
  font-family: ${M}; -webkit-font-smoothing: none; color: #d8cfae;
  opacity: 0; backdrop-filter: blur(0px) saturate(100%);
  -webkit-backdrop-filter: blur(0px) saturate(100%);
  transition: opacity 0.22s steps(5, end), backdrop-filter 0.22s steps(5, end),
    -webkit-backdrop-filter 0.22s steps(5, end); }
.px-dial.on { opacity: 1; backdrop-filter: blur(7px) saturate(82%);
  -webkit-backdrop-filter: blur(7px) saturate(82%); }
@media (prefers-reduced-motion: reduce) {
  .px-dial { transition: none; opacity: 1; backdrop-filter: blur(7px) saturate(82%);
    -webkit-backdrop-filter: blur(7px) saturate(82%); }
}
.px-rose { position: relative; width: min(560px, 86vw); height: min(500px, 78vh); }
.px-rose .px-corner { position: absolute; }
.px-rose .px-tl { left: -1px; top: -1px; transform: translate(-50%,-50%); }
.px-rose .px-tr { right: -1px; top: -1px; transform: translate(50%,-50%); }
.px-rose .px-bl { left: -1px; bottom: -1px; transform: translate(-50%,50%); }
.px-rose .px-br { right: -1px; bottom: -1px; transform: translate(50%,50%); }
/* THE KNOT: three layered diamonds, one center. */
.px-knotwrap { position: absolute; left: 50%; top: 50%; width: 0; height: 0; }
.px-knot { position: absolute; left: 0; top: 0; transform: translate(-50%,-50%);
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-knot-outer { font-size: 64px; color: rgba(125,116,96,0.4); }
.px-knot-mid { font-size: 34px; color: var(--brass); }
.px-knot-core { font-size: 14px; color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
/* THE ARMS: a 2px rule from the knot, a small gem at its middle, an
   open terminal past the label. */
.px-arm { position: absolute; font: inherit; font-size: 22px; letter-spacing: 0.18em;
  text-indent: 0.18em; text-transform: uppercase; color: #c5bda2; background: none;
  border: 0; cursor: pointer; min-height: 44px; min-width: 44px; padding: 8px 14px;
  display: flex; align-items: center; gap: 12px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); transition: none; }
.px-arm .px-c { font-size: 13px; color: rgb(243,239,44); visibility: hidden;
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-arm .px-term { font-size: 11px; color: rgba(125,116,96,0.7);
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-arm::before { content: ''; position: absolute; background: rgba(125,116,96,0.55); }
.px-arm::after { content: '\\25c6'; position: absolute; font-size: 9px;
  color: rgba(192,138,62,0.8); text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-arm.on, .px-arm:hover, .px-arm:focus-visible { outline: none;
  color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-arm.on .px-c, .px-arm:hover .px-c, .px-arm:focus-visible .px-c { visibility: visible; }
.px-arm.on .px-term, .px-arm:hover .px-term { color: var(--brass); }
.px-arm.on::before, .px-arm:hover::before { background: var(--brass); }
.px-n { left: 50%; top: 5%; transform: translateX(-50%); flex-direction: column; gap: 6px; }
.px-n .px-term { order: -1; }
.px-n::before { left: 50%; top: 100%; width: 2px; height: 92px; transform: translateX(-50%); }
.px-n::after { left: 50%; top: calc(100% + 42px); transform: translate(-50%,-50%); }
.px-s { left: 50%; bottom: 5%; transform: translateX(-50%); flex-direction: column-reverse; gap: 6px; }
.px-s .px-term { order: -1; }
.px-s::before { left: 50%; bottom: 100%; width: 2px; height: 92px; transform: translateX(-50%); }
.px-s::after { left: 50%; bottom: calc(100% + 42px); transform: translate(-50%,50%); }
.px-e { right: 3%; top: 50%; transform: translateY(-50%); flex-direction: row-reverse; }
/* PX18b (Mac): the horizontal rules stopped ON the knot while the
   vertical ones stopped short - measured -38px vs +12px clearance.
   62px gives east and west the same 12px breath as north and south;
   the mid gems recentre with them. */
.px-e::before { right: 100%; top: 50%; height: 2px; width: 62px; transform: translateY(-50%); }
.px-e::after { right: calc(100% + 31px); top: 50%; transform: translate(50%,-50%); }
.px-w { left: 3%; top: 50%; transform: translateY(-50%); }
.px-w .px-term { order: -1; }
.px-w::before { left: 100%; top: 50%; height: 2px; width: 62px; transform: translateY(-50%); }
.px-w::after { left: calc(100% + 31px); top: 50%; transform: translate(-50%,-50%); }
/* THE HINT: the keys, taught where they are used. */
.px-dialhint { color: #9c937d; font-size: 13px; letter-spacing: 0.2em; text-indent: 0.2em;
  text-transform: uppercase; margin: 0 0 18px; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
@media (max-width: 480px) {
  .px-arm { font-size: 17px; }
  .px-n::before, .px-s::before { height: 58px; }
  .px-e::before, .px-w::before { width: 34px; }
  .px-n::after { top: calc(100% + 26px); }
  .px-s::after { bottom: calc(100% + 26px); }
  .px-e::after { right: calc(100% + 17px); }
  .px-w::after { left: calc(100% + 17px); }
  .px-knot-outer { font-size: 46px; }
  .px-knot-mid { font-size: 26px; }
}

/* ── PX19: THE PACK IS A WINDOW ── (Mac: centered, window-based).
   The pause window's own frame - corner gems, 2px dim border, 0.72
   ink glass - centered over the live game, arriving with THE DIAL'S
   OWN GESTURE: a five-step fade while the world behind drops into
   depth-of-field. Inside, the reference's anatomy compressed to a
   window: the category spine left, bare names middle (local over the
   ground/wagon pair, the pair law intact), the SHOWCASE right -
   figure above, the bracketed plaque beneath - and the window
   carries its own footer: items, the carry meter (blood past
   four-fifths), gold. */
.pack-shell { position: absolute; inset: 0; z-index: 1; background: rgba(10,12,17,0.45);
  display: grid; place-items: center;
  font-family: ${M}; -webkit-font-smoothing: none; color: #d8cfae;
  opacity: 0; backdrop-filter: blur(0px) saturate(100%); -webkit-backdrop-filter: blur(0px) saturate(100%);
  transition: opacity 0.22s steps(5, end), backdrop-filter 0.22s steps(5, end),
    -webkit-backdrop-filter 0.22s steps(5, end); }
.pack-shell.on { opacity: 1; backdrop-filter: blur(6px) saturate(85%);
  -webkit-backdrop-filter: blur(6px) saturate(85%); }
@media (prefers-reduced-motion: reduce) {
  .pack-shell { transition: none; opacity: 1; backdrop-filter: blur(6px) saturate(85%);
    -webkit-backdrop-filter: blur(6px) saturate(85%); } }
.pack-shell button { transition: none; border-radius: 0; }
/* ── HN1: DAMAGE NUMBERS ──────────────────────────────────────────
   Rising from just above the reticle, in the HUD's own bone, with the
   critical strike and the backstab in brass and larger, the miss and
   the ineffective material dim. The layer takes no pointer events and
   sits under the windows (z 1), so a number never blocks a click or
   floats over the pack. */
#enhanced-hitnums { position: fixed; inset: 0; pointer-events: none; z-index: 1; overflow: hidden; }
.hitnum { position: absolute; left: 50%; top: 42%;
  transform: translate(calc(-50% + var(--dx, 0px)), 0);
  /* HN1b (Mac, from a three-face comparison: "the middle") - the numbers
     are set in the enhanced skin's own face, Pixelify Sans, unsmoothed
     like every other pixel glyph on the HUD. Cormorant was the serif
     odd one out; Jacquard 12 crits were unmistakable and unreadable in
     the half second a number lives. */
  font-family: ${M}; -webkit-font-smoothing: none;
  font-size: calc(26px * var(--hud-scale, 1)); font-weight: 600;
  letter-spacing: 0.04em; color: #e6dcb8; text-shadow: 2px 2px 0 rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.6);
  animation: hitnum-rise var(--rise, 950ms) cubic-bezier(0.2, 0.7, 0.3, 1) forwards; will-change: transform, opacity; }
.hitnum-crit { font-size: calc(36px * var(--hud-scale, 1)); font-weight: 700; color: #f1c04f; text-shadow: 2px 2px 0 rgba(60,40,0,0.95), 0 0 10px rgba(241,192,79,0.45);
  animation-name: hitnum-crit; }
.hitnum-miss, .hitnum-ineffective, .hitnum-absorbed { font-size: calc(20px * var(--hud-scale, 1)); font-weight: 500; color: rgba(168,159,136,0.85); }
.hitnum-warded { font-size: calc(20px * var(--hud-scale, 1)); font-weight: 600; color: #ffdf8e; }   /* WB13d: the gate boss's ward, in its gold */
/* PARTY-BUFFS: a heal I took - "+N" in green, from a little under the reticle so it never reads as a blow I struck */
.hitnum-heal { top: 50%; color: #8fe27f; text-shadow: 2px 2px 0 rgba(0,40,0,0.9), 0 0 8px rgba(120,220,100,0.35); }
.hitnum-tag { display: block; font-size: calc(12px * var(--hud-scale, 1)); font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase;
  text-align: center; color: #f1c04f; margin-top: -2px; }
/* TELL9 (bible/12-Enhanced-AI/Feud-Arc.md 11.2): a word alone - a door's word with no number to join ("Holds" on a spell's
   landing), and a perfect dodge's "Perfect", bright, a little under the reticle where no blow of mine rises */
.hitnum-word { font-size: calc(16px * var(--hud-scale, 1)); font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #f1c04f; }
.hitnum-perfect { top: 50%; font-size: calc(24px * var(--hud-scale, 1)); font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase;
  color: #fff6d8; text-shadow: 2px 2px 0 rgba(60,40,0,0.95), 0 0 12px rgba(255,236,170,0.6); }
@keyframes hitnum-rise {
  0%   { opacity: 0; transform: translate(calc(-50% + var(--dx, 0px)), 10px) scale(0.9); }
  12%  { opacity: 1; transform: translate(calc(-50% + var(--dx, 0px)), 0) scale(1); }
  70%  { opacity: 1; }
  100% { opacity: 0; transform: translate(calc(-50% + var(--dx, 0px)), -64px) scale(1); }
}
@keyframes hitnum-crit {
  0%   { opacity: 0; transform: translate(calc(-50% + var(--dx, 0px)), 10px) scale(0.6); }
  14%  { opacity: 1; transform: translate(calc(-50% + var(--dx, 0px)), -4px) scale(1.18); }
  30%  { transform: translate(calc(-50% + var(--dx, 0px)), -8px) scale(1); }
  72%  { opacity: 1; }
  100% { opacity: 0; transform: translate(calc(-50% + var(--dx, 0px)), -80px) scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  .hitnum, .hitnum-crit { animation-name: hitnum-still; }
  @keyframes hitnum-still { 0% { opacity: 1; } 80% { opacity: 1; } 100% { opacity: 0; } }
}
.pack-win { position: relative; width: min(1040px, 95vw); height: min(660px, 94dvh);   /* PX22: a short viewport keeps its rows before its margins */
  display: flex; flex-direction: column;
  background: rgba(10,12,17,0.72); border: 2px solid #7d7460;
  transform: translateY(8px); transition: transform 0.22s steps(5, end); }
.pack-shell.on .pack-win { transform: none; }
@media (prefers-reduced-motion: reduce) { .pack-win { transform: none; transition: none; } }
.pack-win .px-corner { position: absolute; }
.pack-win .px-tl { left: -1px; top: -1px; transform: translate(-50%,-50%); }
.pack-win .px-tr { right: -1px; top: -1px; transform: translate(50%,-50%); }
.pack-win .px-bl { left: -1px; bottom: -1px; transform: translate(-50%,50%); }
.pack-win .px-br { right: -1px; bottom: -1px; transform: translate(50%,50%); }
.pack-shell .pack-id { display: flex; justify-content: space-between; align-items: center;
  background: transparent; border-bottom: 2px solid rgba(125,116,96,0.35); padding: 8px 16px; }
.pack-shell .pack-id h2 { font-family: inherit; font-weight: 400; font-size: 20px; margin: 0;
  letter-spacing: 0.18em; text-indent: 0.18em; text-transform: uppercase;
  display: flex; align-items: center; gap: 14px; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.pack-shell .pack-id h2::before { content: ''; flex: 0 0 48px; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(125,116,96,0.7)); }
/* PACK-PHONE: the phone's Body switch, beside Close - drawn by the touch-phone rule alone (after PX31's) */
.pack-shell .pack-id .dolltoggle { display: none; margin: 0 8px 0 auto; white-space: nowrap; }
/* PX19f: the reference's skeleton - the character region and the
   details share the top; the inventory is a BOTTOM DOCK. */
.pack-shell .pack { flex: 1; min-height: 0; display: flex; flex-direction: column;
  background: transparent; }
/* PX22 (Mac: the more items, the more the main inventory scrunches -
   Layer 1): THE CHARACTER REGION IS ITS OWN CONTENT'S HEIGHT, and the
   dock takes whatever remains and SCROLLS INSIDE. Item count now moves
   nothing but the scrollbar. What stood here let the dock size to its
   content up to 38% and take that from the character region, and never
   made the list a clipped viewport - the third row of tiles ran under
   the footer, the flex min-height trap. The first cut of this fix gave
   the region a fixed 48% share and the render showed the worn map's
   last rows cut off under it: the map is taller than a share, so the
   share is the map's. */
.pack-shell .pack-main { flex: 0 0 auto; display: grid;
  grid-template-columns: 1fr; }   /* PX19i: the details ride a tooltip; the character takes the width */
.pack-shell .pack-dock { flex: 1 1 auto; min-height: 100px; display: flex;
  flex-direction: column; border-top: 2px solid rgba(125,116,96,0.35);
  background: rgba(0,0,0,0.25); }   /* PX22: never less than the tabs and one row */
.pack-shell .packcats { flex: 0 0 auto; }
/* PX22: a 40px tab strip, not 64 - the 24px it gives back is the
   difference between one row of tiles and two at the 660px window. */
.pack-shell .pack-dock .packtab { min-height: 36px; padding: 2px 14px; }

.pack-shell .packcats { background: transparent; border-right: 0;
  border-bottom: 2px solid rgba(125,116,96,0.3); overflow-x: auto; padding: 0 8px; }
.pack-shell .packtabs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 6px; margin: 0; }   /* PX31: nine pages, three by three */
.pack-shell .packtab { display: flex; align-items: center; gap: 6px; text-align: left; min-width: 0; overflow: hidden;
  min-height: 44px; padding: 8px 6px; border: 0; background: none; cursor: pointer;
  color: #a89f88; font-family: inherit; font-size: 12px; letter-spacing: 0.06em;
  text-transform: uppercase; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); white-space: nowrap; text-overflow: ellipsis; }
.pack-shell .packtab .count { font-family: inherit; font-size: 11px; color: #9c937d;
  background: none; border: 0; margin-left: auto; }
.pack-shell .packtab:hover, .pack-shell .packtab:focus-visible { outline: none; color: #d8cfae; }
.pack-shell .packtab.on { color: rgb(243,239,44);
  box-shadow: inset 0 -2px 0 var(--brass); text-shadow: 2px 2px 0 rgb(93,77,12); }
.pack-shell .packtab.on::after { content: '\\25c6'; font-size: 10px; margin-left: 8px; }
.pack-shell .packlists { display: block; background: transparent; overflow-y: auto;
  flex: 1 1 auto; min-height: 0; }   /* PX22: the dock's scroll viewport - min-height 0 is what makes overflow clip */
/* The dock's rows are the reference's TILE GRID: square panels, the
   monogram carrying the item, the count in the corner, the name in
   the title and the plaque. The tiles live directly in .packcol -
   '.list' is the SHELL'S word, the .detail/.packcol lesson again
   (and backticks may NEVER appear inside this template literal:
   this comment's first draft closed ENHANCED_CSS mid-file and made
   the rest a tagged-template call - the octal lesson's sibling). */
.pack-shell .pack-dock .packcol { padding: 8px 10px; display: flex; flex-wrap: wrap;
  gap: 6px; align-content: flex-start; }
/* AUDIT 625 W3: the wallet's sheet holds its pieces as the dock's own tiles, wrapped as the dock wraps them */
.pack-shell .walletsheet .walletpieces { display: flex; flex-wrap: wrap; gap: 6px; padding: 6px 0 2px; }
/* WALLET-UI: the wallet's ledger - its two parts under their names, a label and a figure a row, the figures in one
   column at the right; an empty one dimmed, a letter's worth under its count */
.pack-shell .walletsheet { text-align: left; margin: 2px 0 6px; }
.pack-shell .walletsheet .wallet-head { margin: 12px 0 4px; padding: 0 0 4px; border-bottom: 1px solid rgba(125,116,96,0.35);
  font-family: inherit; font-weight: 400; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--dim); }
.pack-shell .walletsheet .wallet-head:first-child { margin-top: 8px; }
.pack-shell .walletsheet .wallet-row { display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
  padding: 3px 0; font-size: 14px; line-height: 1.35; }
.pack-shell .walletsheet .wallet-k { color: var(--dim); }
.pack-shell .walletsheet .wallet-v { color: var(--bone); text-align: right; font-variant-numeric: tabular-nums; }
.pack-shell .walletsheet .wallet-row.none .wallet-v, .pack-shell .walletsheet .wallet-v.why { color: var(--dim); opacity: 0.75; }
.pack-shell .walletsheet .wallet-v.why { font-size: 12px; }
.pack-shell .walletsheet .wallet-note { margin: -2px 0 3px; text-align: right; font-size: 12px; color: var(--dim); }
/* PX22: the tab strip is ALSO a .packcol and inherited that 8px; it
   carries its tabs and nothing else, so 0 vertical padding - the 16px
   is the difference between one row of tiles and two at 660px. */
.pack-shell .pack-dock .packcol.packcats { padding: 0 8px; }
.pack-shell .itemrow { position: relative; display: flex; align-items: center;
  justify-content: center; width: 64px; height: 64px; padding: 0; cursor: pointer;
  background: rgba(10,12,17,0.6); border: 2px solid rgba(125,116,96,0.35);
  color: #a89f88; font-family: inherit; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
/* UI1 (bible/10-UI/Slots-Hotbar-Status.md): THE SLOT IS THE FRAME. 64px (it was 56) round a 52px room the picture is
   fitted into (ui/iconFit.js SLOT_BOX.grid - the room less two pixels a side) - a room, not a box: the tier's border
   is the slot's own (the Plus sheet's ITEM_FRAME_CSS). A phone's slot is 56 round a 44px room, so a 390px screen keeps
   six a row. */
.pack-shell .itemrow .tile { display: flex; width: 52px; height: 52px; align-items: center;
  justify-content: center; border: 0; background: none; font-size: 18px; color: #c5bda2; }
@media (max-width: 640px) {
  .pack-shell .itemrow { width: 56px; height: 56px; }
  .pack-shell .itemrow .tile { width: 44px; height: 44px; font-size: 16px; }
}
.pack-shell .itemrow .itemname { position: absolute; width: 1px; height: 1px;
  overflow: hidden; clip-path: inset(50%); }   /* the probes read it; the plaque shows it */
.pack-shell .itemrow .itemwt { display: none; }
/* QS2: in the pixel face a row is a 64px TILE (UI1; it was 56), so the chip is a corner badge
   rather than a column - top-left, opposite the stack count at bottom-right,
   with the tile's own shadowed pixel text and no frame of its own (the tile is
   already framed). */
.pack-shell .itemrow .qs-mark { position: absolute; left: 2px; top: 1px; border: 0;
  padding: 0; font-size: 11px; letter-spacing: 0.12em; color: var(--brass);
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.pack-shell .itemrow .rowcount, .pack-shell .itemrow .count { position: absolute;
  right: 2px; bottom: 1px; font-size: 11px; color: var(--brass);
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.pack-shell .itemrow:hover, .pack-shell .itemrow:focus-visible { outline: none;
  border-color: var(--brass); color: #d8cfae; }
.pack-shell .itemrow.on { border-color: var(--brass); color: rgb(243,239,44);
  outline: 2px solid rgba(192,138,62,0.5); outline-offset: 2px; box-shadow: none;
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.pack-shell .packempty { color: #9c937d; padding: 12px 16px; font-size: 14px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.pack-shell .remotehead, .pack-shell .equippedhead { font-family: inherit; color: #9c937d;
  font-size: 11px; letter-spacing: 0.3em; text-indent: 0.3em; text-transform: uppercase;
  text-align: center; background: none; border-top: 2px solid rgba(125,116,96,0.3);
  border-bottom: 0; padding: 10px 0 4px; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.pack-shell .remotewho, .pack-shell .remotewho * { font-family: inherit; }
.pack-shell h3, .pack-shell .equippedhead h3, .pack-shell .remotehead * { font-family: inherit;
  font-weight: 400; letter-spacing: 0.24em; text-indent: 0.24em; text-transform: uppercase; }
.pack-shell .equippedhead h3 { font-size: 17px; color: #d8cfae; margin: 0;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.pack-shell .equippedhead .meta { font-size: 11px; color: #9c937d; margin: 2px 0 0; }
.pack-shell .remoteacts { padding: 0 10px; }
/* The showcase column: the figure over the plaque, both scrolling
   together, the game glass behind them through the window. */
/* PX19g/i: NO SCROLLING CHARACTER SHEET, NO WEB CHROME - and no
   right panel: the details are a TOOLTIP, absolutely placed beside
   its anchor inside the frame, in the plaque's own dress; the phone
   keeps the .packdetail bottom sheet's physics untouched. */
.pack-shell .charcol { overflow: hidden; padding: 12px 22px 16px; display: flex;
  flex-direction: column; justify-content: stretch; min-height: 0; }
/* PX22: the map is a flex ITEM under the transport strip, at its own
   compact height - not 100% of a column it shares. The strip drew
   OVER the map's last two rows in every screenshot before this
   (Mac's included): the map claimed the whole column and the strip
   landed on top of it. Rows at 40px keep the figure standing and give
   the dock a third row of tiles at a 660px window. */
.pack-shell .charcol .wornmap { height: auto; flex: 0 0 auto;
  grid-template-rows: repeat(6, minmax(40px, auto)); gap: 8px; }
/* PX22: COMPACT WORN ROWS - a 34px tile and 4px of padding make a
   42px row that still carries the family word and the piece's name;
   the 60px row that stood here was the whole reason the map could not
   fit above two rows of tiles. The transport plaques match. */
.pack-shell .charcol .equipped .wornrow { min-height: 40px; padding: 4px 12px; gap: 12px; }
.pack-shell .charcol .wornrow .tile { width: 34px; height: 34px; }
/* PX31 (Mac: the inventory is hidden at the bottom and gets no
   breathing room): AT DESKTOP WIDTHS THE DOCK IS A COLUMN, not a
   dock. Measured on the shipped screen before this rule at three
   desktop viewports, all identical because the window is capped at
   660: title 62, character region 400, tab strip 38, and the item
   list left with A 116px VIEWPORT - 17.6% of the window, two tiles
   deep and 1036 wide. The region is fixed to its content (the worn
   map is 298 tall and does not shrink), so every pixel the window
   does not have comes out of the list, and the list was the only
   thing in the window that scrolls.
   The window is WIDE and the layout was stacked, so the fix is
   horizontal: the region keeps the width it actually uses (the map
   is width min(960px,100%) and its flanks are 1fr, so it narrows
   without a rewrite) and the list takes the rest at FULL HEIGHT.
   Nothing about the window's height changes - raising the 660 cap
   is what swallowed the game behind the window on 2026-08-31 and
   was reverted whole.
   THE PHONE IS NOT THIS PROBLEM and is not touched: a Pixel 5
   measured a 250px list showing seven rows, because there the
   window is 94dvh and the region is the same 400. The breakpoint is
   min-width, so the stacked layout stays the default and this is
   the wide-screen departure from it.
   (PACK-PHONE, 2026-09-30: it was. That Pixel 5 had no ARENA2 behind
   the page, so no doll - with the art the stacked list is 0px. The
   stacked layout's own departure follows this block.) */
@media (min-width: 1000px) {
  .pack-shell .pack { display: grid; grid-template-columns: minmax(0, 1fr) minmax(300px, 380px);
    flex-direction: row; min-height: 0; }
  .pack-shell .pack-main { min-width: 0; min-height: 0; }
  /* the border moves with the wall: it was the top of a dock and it
     is the side of a column. */
  .pack-shell .pack-dock { min-height: 0; border-top: 0;
    border-left: 2px solid rgba(125,116,96,0.35); }
  /* THE TAB STRIP IS A 2x2, DELIBERATELY. The four tabs need about
     550px on one line and no column here is that wide, so the strip
     WRAPPED - which cost the same 76px this grid costs and looked
     like an accident, the counts flung to the right of two ragged
     rows by their own margin-left:auto. TABS is imported from
     PX31's nine pages (ui/packPages.js), always, so three by three
     is a shape rather than a guess. */
  .pack-shell .pack-dock .packcats .packtabs { display: grid;
    grid-template-columns: repeat(3, 1fr); gap: 0 8px; }
  /* THE MAP FILLS THE COLUMN IT WAS GIVEN. Stacked, the region was
     its content's height and the map was flex 0 0 auto so it would
     not steal from the list below it. Beside the list it steals
     nothing, and left at content height it drew 180px of dead glass
     under the transport strip. Filling is not just tidier: the doll
     is height-driven at aspect-ratio 110/184, so a taller map is a
     BIGGER SPRITE, which is what PX20a asked for and what the
     stacked layout could not afford.
     THE GROWING ELEMENT IS THE WRAPPER, not the map. .charcol holds
     .equipped and .transport; the map is a child of .equipped, whose
     own flex:1 (line ~2194) was correct all along and had nothing to
     fill because .equipped defaults to flex 0 1 auto. Two rules that
     both look like the fix and only one of them is it. */
  .pack-shell .charcol .equipped { flex: 1 1 auto; min-height: 0; }
  .pack-shell .charcol .wornmap { grid-template-rows: repeat(6, minmax(44px, 1fr)); }
}
/* PACK-PHONE (FIELD BUGS 2026-09-30, Discord: "Still can't use my
   bag/Inventory on mobile"; "we dont really need paperdoll on phone or
   at least if it could be hidden"): UNDER THE COLUMN LAYOUT THE REGION
   GIVES WAY. The stacked pack held its character region at its
   content's height (PX22's 0 0 auto) in a window capped at 660px, and
   the dock took what was left. With the doll's art nothing was left:
   the doll's cell is height-driven (height 100%, aspect-ratio 110/184)
   in a map whose rows are auto, a height that resolves to nothing, so
   the sprite stood at its 4x bitmap size, 440x736. Measured in
   Chromium with the real pack and a 440x736 figure standing in for the
   art: a phone on its side (915x412) had a 0px list and not one tile a
   finger could reach; upright (412x915) the panels' columns came to 0px
   and the list to 8px; a tablet upright and a 900px mouse window read
   0px too. So the region shrinks and scrolls on its own; the dock grows
   from nothing, so the item count never sizes it, and never takes less
   than 45% of the pack; and the doll is capped at a third of the screen
   and at 240px, which is what the 660px window's region holds beside
   that dock with the shelf under it. Inside the region's scroll the
   column clips nothing and the map keeps its height. The column's width
   is still the region's: one that clips nothing sizes the region's 1fr
   to its own min-content, and at 360px the map ran past the screen.
   The title gives way before Close does: a phone's width had pushed
   Close half off the screen. */
@media (max-width: 999px) {
  .pack-shell .pack-id > div { min-width: 0; overflow: hidden; }
  .pack-shell .pack-main { flex: 0 1 auto; min-height: 0; overflow-y: auto; overscroll-behavior: contain; }
  .pack-shell .pack-dock { flex: 1 1 0; min-height: 45%; }
  .pack-shell .charcol { overflow: visible; min-width: 0; }
  .pack-shell .charcol .equipped { flex: 0 0 auto; }
  .pack-shell .charcol .wornmap-doll.hasart { height: min(34dvh, 240px); }
}
/* PACK-PHONE: ON A PHONE THE BODY IS A CHOICE, hidden until the
   header's Body shows it (uiPrefs packPhoneDoll, remembered). The worn
   panels stand either way and keep every act - a tap reads the piece,
   its card takes it off - so nothing worn is out of reach; the doll's
   column closes up and the panels take the width. The overall armour
   figure goes with the body it heads; each part's number stays on its
   panel. The tab strip is one row that scrolls sideways: the nine
   pages' three-by-three is 110px of a phone's dock. The header's two
   buttons are a card's 64px, not LAYOUT1's 104, and the name cuts to an
   ellipsis, so Body and Close fit a 360px screen beside PACK.
   TOUCH-FIRST is TI3's pair (ui/touchDevice.js), and a phone is under
   641px wide upright or under 541px tall on its side - a tablet keeps
   its figure, capped as above. */
@media (pointer: coarse) and (hover: none) and (max-width: 640px), (pointer: coarse) and (hover: none) and (max-height: 540px) {
  .pack-shell .pack-id h2::before { display: none; }
  .pack-shell .pack-id h2 { min-width: 0; }
  .pack-shell .pack-id .pack-who { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .pack-shell .pack-id .act { min-width: 64px; padding: 8px 10px; letter-spacing: 0.06em; }
  .pack-shell .pack-id .dolltoggle { display: inline-block; }
  .pack-shell .pack-dock .packcats .packtabs { display: flex; flex-wrap: nowrap; overflow-x: auto; }
  .pack-shell .pack-dock .packtab { flex: 0 0 auto; }
  .pack-shell:not(.showdoll) .wornmap-doll, .pack-shell:not(.showdoll) .wornmap .wornac-total { display: none; }
  .pack-shell:not(.showdoll) .charcol .wornmap { grid-template-columns: minmax(0, 1fr) 0 minmax(0, 1fr); column-gap: 6px; }
}
/* PACK-PHONE: A PHONE ON ITS SIDE IS TWO COLUMNS, the region beside
   the dock and each the pack's whole height, as PX31 stands them on
   the desk: stacked, 412px of screen split three ways left the list
   nothing. The one row is the height's, not min-content's: under 861px
   the old phone rule's grid-auto-rows reached this grid, and a phone
   740px wide scrolled the whole pack instead of its list. */
@media (pointer: coarse) and (hover: none) and (orientation: landscape) and (max-height: 540px) {
  .pack-shell .pack { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); grid-template-rows: minmax(0, 1fr); }
  .pack-shell .pack-main { min-width: 0; }
  .pack-shell .pack-dock { min-height: 0; border-top: 0; border-left: 2px solid rgba(125,116,96,0.35); }
}
/* .packtip.packdetail outranks the base .packdetail column rules
   (same-specificity, later-in-sheet was the trap: the tip computed
   RELATIVE, joined the flex column and folded the whole window -
   caught by measuring pre/post heights, 557 -> 260). */
.pack-shell .packtip.packdetail { position: absolute; z-index: 4;
  width: 320px; max-width: 320px;
  /* the tip is INVISIBLE FURNITURE: the base sheet's .packcol slate
     ground + padding were riding under the card and drew a grey mat
     around the plaque - the CARD is the frame, the wrapper is
     nothing. */
  background: transparent; padding: 0; border: 0;
  /* PX21f (Mac: "the tooltip that pops up when you click on an item
     has scrolling"): AND NO OVERFLOW. .packcol is a COLUMN's rule -
     slate ground, padding, and overflow:auto - and PX19j turned off
     the first two on this element without noticing the third. A
     tooltip is not a scroll box: it is as tall as what it says. The
     2px scrollHeight/clientHeight gap that rounding leaves was enough
     to draw a scrollbar on it wherever scrollbars are not overlays. */
  overflow: visible;
  /* CARD-FIT: and none of the phone COLUMN's sheet (the <=860px .packdetail rule: bottom 0, max-height 70dvh) - on a
     phone on its side the tip stood stretched to the window's foot and cut at 252 px, its card running on under it */
  max-height: none; bottom: auto; right: auto; }
/* ...and the tip's CARD is near-opaque: the 0.72 glass is the pause
   window's, made for a dimmed scrim - a tooltip floats over LIVE
   text, and glass there reads as the dock bleeding through the
   plaque. */
.pack-shell .packtip.packdetail .card { background: rgba(10,12,17,0.96); }   /* (0,4,0): the base card rule ties at (0,3,0) later in the sheet - the same tie the tip's position rule already paid */
/* CARD-FIT (2026-09-28, Discord - Cruor: "all the buttons on it's pop-up card are.. off the screen, because it's got
   a bit much on it!"): THE CARD IS A COLUMN AND ITS BUTTONS ARE ALWAYS ON SCREEN. Its words are .card-body and its
   buttons are .acts UNDER the body, never inside it; the placement caps the card at its window (enhancedInventory.js
   fitCard writes max-height, the phone sheet's share of the screen), sheds the picture's size and then the picture, and
   past that the BODY scrolls - the buttons stay where they are. A set piece's card stood 1,000 px tall in a 660 px
   window; tools/cardFitProbe.mjs presses every button of the heaviest cards at six screens. */
.pack-shell .packtip.packdetail .card { display: flex; flex-direction: column; overflow: hidden; }
.pack-shell .packtip.packdetail .card-body { flex: 1 1 auto; min-height: 0; overflow-y: auto; overscroll-behavior: contain; }
/* CURSOR-EDGE: the thin bar as a ::-webkit-scrollbar (.pack-shell's own rule hides its scrollbars; this one is shown) */
.pack-shell .packtip.packdetail .card-body::-webkit-scrollbar { display: block; width: 6px; }
.pack-shell .packtip.packdetail .card-body::-webkit-scrollbar-track { background: transparent; }
.pack-shell .packtip.packdetail .card-body::-webkit-scrollbar-thumb { background: rgba(125,116,96,0.7); border: 0; }
@supports not selector(::-webkit-scrollbar) {
  .pack-shell .packtip.packdetail .card-body { scrollbar-width: thin; scrollbar-color: rgba(125,116,96,0.7) transparent; } }
.pack-shell .packtip.packdetail .card > .acts { flex: 0 0 auto; margin-top: 8px; padding-top: 10px;
  border-top: 2px solid rgba(125,116,96,0.35); }
.pack-shell .packtip.packdetail .card .bigicon { padding: 2px 0 8px; min-height: 0; }
.pack-shell .packtip.packdetail .card.card-compact .bigicon img { max-width: 56px; max-height: 56px; }
.pack-shell .packtip.packdetail .card.card-tight .bigicon { display: none; }
/* the numbers as whole PAIRS that flow two a line where they fit (a pair is never broken across two) - four rows of
   one pair each were 100 px of a 660 px window - and the buttons four a row. Anywhere else a card's pairs are the grid's
   own cells, as they always were (.stats > .pair steps out of the way). */
.stats > .pair { display: contents; }
.pack-shell .packtip.packdetail .card .stats { display: flex; flex-wrap: wrap; justify-content: center; gap: 4px 16px;
  margin: 8px 0 0; }
.pack-shell .packtip.packdetail .card .stats .pair { display: inline-flex; align-items: baseline; gap: 6px; white-space: nowrap; }
.pack-shell .packtip.packdetail .card .stats dt { font-size: 11px; letter-spacing: 0.12em; }
.pack-shell .packtip.packdetail .card .stats dd { font-size: 13px; white-space: normal; }
.pack-shell .packtip.packdetail .card > .acts { gap: 6px; }
.pack-shell .packtip.packdetail .card > .acts .act { flex: 1 1 auto; min-width: 64px; min-height: 36px; padding: 5px 8px;
  font-size: 12px; letter-spacing: 0.06em; }   /* LAYOUT1's 104 px a button (enhancedFrame.js) is a dialog's OK and Cancel; a card's tool row wants four a line */
@media (pointer: coarse) { .pack-shell .packtip.packdetail .card > .acts .act { min-height: 44px; } }
/* the tip's close bar belongs to the phone's SHEET: a card standing beside its row closes by a tap away, and the bar
   cost a phone on its side 44 of the window's 338 px */
@media (min-width: 641px) { .pack-shell .packtip.packdetail .sheet-close { display: none; } }
@media (max-width: 640px) {
  /* the phone's card is a SHEET risen from the screen's foot (the .packdetail sheet's own place) - it was fixed with no
     foot of its own, so it stood where the window's flow left it and ran on below the screen */
  .pack-shell .packtip.packdetail { position: fixed; width: auto; max-width: none;
    left: 0 !important; right: 0; top: auto !important; bottom: 0; max-height: none; }
}
.pack-shell .figure-doll { border: 2px solid rgba(125,116,96,0.55); background: rgba(0,0,0,0.3); }
.pack-shell .slotmap, .pack-shell .wornlist, .pack-shell .equipped { background: rgba(0,0,0,0.3); }
/* PX19d: THE SLOTS STAND ON THE BODY (Mac's concept reference) - the
   worn map places each tile AT the classic doll's own anatomical
   coordinate, scaled: helm above, amulets and rings on their flanks,
   hands at the hands, feet below, marks and crystals in the off-body
   row the map already gives them. The DOLL stands behind the tiles
   when its art can draw; the tiles alone are the schematic when it
   cannot. The chosen tile wears the gold pair and the brass frame;
   an empty slot is a dim open diamond and NOT a button. */
.pack-shell .equipped { display: flex; flex-direction: column; min-height: 0;
  text-align: center; }
.pack-shell .equipped .wornmap { flex: 1; min-height: 0; }
/* PX20c: the name in the title bar, after PACK, in the dim - the bar
   already names the window, so the character is the second word. */
.pack-shell .pack-id .pack-who { color: #9c937d; margin-left: 4px; }
.pack-shell .pack-id .pack-who::before { content: '\\00b7'; margin-right: 14px; }
/* PX19g: the region FITS ITS SPACE - 5 rows of 52 + gaps + the WORN
   head ~= 310, inside the main area's ~380 - so the character sheet
   never scrolls. The doll owns the center: a framed panel spanning
   rows 2-4, art inside when it can draw, a quiet Avatar plaque when
   it cannot. */
/* PX20a (Mac: "spread out and organize the center now that we have
   more space"): PX19i freed the whole width when the details became a
   tooltip, and the map kept the 380px it was given when it had a third
   of the window - a 1036px area with 330px of dead air down each side.
   The map is now SIZED TO ITS SPACE: wider, with the centre column
   carrying half again the flanks (it holds a standing figure; they
   hold a word and a monogram), and rows that FILL the height instead
   of stopping at 52px: five rows of 1fr each, with the
   map claiming the area's height, so the composition breathes at any
   window size rather than at one. */
.pack-shell .wornmap { position: relative; display: grid;
  /* PX20c: the centre column is AUTO - it takes exactly the width the
     aspect-locked sprite asks for, so there is no air beside the
     figure and the two flanks split everything that is left. The map
     then fills the region it was given rather than floating in it. */
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  grid-template-rows: repeat(6, minmax(44px, 1fr));
  gap: 12px; width: min(960px, 100%); height: 100%; margin: 0 auto;
  align-content: stretch; }
/* PX20a (Mac: "enlarge the paper sprite and remove the background"):
   the sprite stands on the window's own glass. PX19g framed it because
   an empty frame reads Avatar and the composition never collapses -
   that reasoning holds only when there is NO ART, so the frame is now
   the placeholder's alone (the .noart class). With art, no border, no
   background, no outline: a character standing among their gear. */
.pack-shell .wornmap-doll { grid-area: 1 / 2 / span 6 / auto;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 4px; border: 0; background: none; outline: 0;
  overflow: visible; color: rgba(125,116,96,0.6); padding: 2px 0; }
.pack-shell .wornmap-doll.model img, .pack-shell .wornmap-doll.model canvas { cursor: ew-resize; image-rendering: auto; object-fit: contain; max-height: 100%; }   /* MF1: the model is a canvas */
.pack-shell .wornmap-doll.noart { border: 2px solid rgba(125,116,96,0.45);
  background: rgba(0,0,0,0.35); outline: 2px solid rgba(125,116,96,0.25);
  outline-offset: 3px; overflow: hidden; }
/* PX20c (Mac: "ensure the paperdoll's slot is a perfect fit"): the
   cell was whatever the grid's centre column happened to be, so the
   sprite sat inside it with air down both sides - object-fit letterbox,
   which is a fit only in the sense that nothing overflows. The cell now
   CARRIES THE SPRITE'S OWN ASPECT: aspect-ratio 110/184, the classic
   paperdoll's exact proportion, height-driven and centred in the
   column. The sprite then fills it edge to edge with no letterbox at
   all, and it stays a perfect fit at every window size because the
   ratio is the constraint rather than a measured pixel. */
.pack-shell .wornmap-doll img, .pack-shell .wornmap-doll canvas { display: block; height: 100%; width: 100%;
  object-fit: contain; image-rendering: pixelated;
  filter: drop-shadow(3px 3px 0 rgba(0,0,0,0.55)); }
.pack-shell .wornmap-doll.hasart { aspect-ratio: 110 / 184; height: 100%; width: auto;
  justify-self: center; align-self: center; padding: 0; }
.pack-shell .wornmap-doll .wornslot { color: rgba(125,116,96,0.6); }
/* PX20c: the tile is a ROW again, because the width is there now - a
   big monogram on the left, the family word and THE PIECE'S NAME
   stacked beside it. PX19g had to hide the name when the tiles were
   52px squares and it clipped; nothing about that reasoning survives a
   300px tile, so the name comes back where a player reads it. */
.pack-shell .equipped .wornrow { position: relative; z-index: 1;
  display: flex; flex-direction: row; align-items: center; justify-content: flex-start;
  gap: 14px; min-height: 44px; padding: 8px 14px; overflow: hidden; text-align: left;
  background: rgba(10,12,17,0.72); border: 2px solid rgba(125,116,96,0.35);
  color: #a89f88; font-family: inherit; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
/* PX19g hid this line because a 52px square clipped it; PX20c gives
   the tiles the region's whole width and the name comes back - the
   family word above it in the dim, the piece itself in the bone. */
.pack-shell .wornrow .wornname { display: block; font-size: 14px; color: #d8cfae;
  max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.pack-shell .wornrow.wornempty .wornname { color: rgba(125,116,96,0.5); }
/* The word and the name are one stack beside the monogram. */
.pack-shell .wornrow .worntext {
  display: flex; flex-direction: column; gap: 3px;
  min-width: 0; align-items: flex-start; }
.pack-shell .wornrow .worntile, .pack-shell .wornrow .tile { flex: 0 0 auto; }
.pack-shell .worncount { position: absolute; right: 5px; top: 4px; font-size: 11px;
  color: var(--brass); text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.pack-shell .wornrow .tile { display: flex; width: 40px; height: 40px; align-items: center;
  justify-content: center; border: 0; background: none; font-size: 24px; color: #c5bda2; }
/* PX20c: the tiles carry the area now, so the MONOGRAM carries the
   tile - the reference's own read is the piece, big, with its family
   word under it. */
.pack-shell .wornrow .worntile { font-size: 26px; color: rgba(125,116,96,0.6); }
.pack-shell .wornslot { flex: 0 0 auto;   /* the base rule's 88px was a column WIDTH; on a vertical tile it becomes 88px of HEIGHT */
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
  color: #9c937d; max-width: 100%; line-height: 1.1; white-space: nowrap; }
.pack-shell .wornrow .itemwt { display: none; }
.pack-shell button.wornrow { cursor: pointer; }
.pack-shell button.wornrow:hover, .pack-shell button.wornrow:focus-visible { outline: none;
  color: rgb(243,239,44); border-color: var(--brass); text-shadow: 2px 2px 0 rgb(93,77,12); }
.pack-shell .wornrow.on { color: rgb(243,239,44); border-color: var(--brass);
  outline: 2px solid rgba(192,138,62,0.5); outline-offset: 2px;
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.pack-shell .wornrow.wornempty { color: rgba(125,116,96,0.5);
  border-color: rgba(125,116,96,0.22); background: rgba(0,0,0,0.18); }
.pack-shell button.wornrow .tile { color: #d8cfae; }
.pack-shell .wornrow.wornempty .wornname { display: none; }   /* the open diamond and the slot word carry an empty */
.pack-shell .packdetail { position: relative; transform: none; width: 100%; max-width: 420px; }
.pack-shell .packdetail .card, .pack-shell .card { min-width: 0; max-width: none;
  border: 2px solid rgba(216,207,174,0.7); outline: 2px solid rgba(125,116,96,0.35);
  outline-offset: 4px; border-radius: 0; background: rgba(10,12,17,0.72); padding: 14px 18px; }
.pack-shell .card h3 { font-family: inherit; font-weight: 400; font-size: 18px;
  letter-spacing: 0.14em; text-indent: 0.14em; text-transform: uppercase; text-align: center;
  margin: 0 0 8px; padding-bottom: 8px; border-bottom: 2px solid rgba(125,116,96,0.5);
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.pack-shell .card .stats { display: grid; grid-template-columns: auto auto;
  justify-content: center; align-items: baseline; gap: 6px 14px; margin: 10px 0; }
.pack-shell .card .stats dt { color: #9c937d; font-size: 11px; letter-spacing: 0.22em;
  text-transform: uppercase; text-align: right; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.pack-shell .card .stats dd { margin: 0; font-size: 19px; overflow-wrap: anywhere;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.pack-shell .card .meta, .pack-shell .card p { color: #c5bda2; text-align: center; font-size: 14px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.pack-shell .card .tag { float: right; color: #c5bda2; font-size: 11px; letter-spacing: 0.2em;
  text-transform: uppercase; border: 0; background: none;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.pack-shell .acts { display: flex; justify-content: center; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
.pack-shell .act { border: 2px solid rgba(125,116,96,0.55); border-radius: 0; background: none;
  color: #d8cfae; font-family: inherit; letter-spacing: 0.12em; text-transform: uppercase;
  min-height: 44px; padding: 8px 14px; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.pack-shell .act:hover, .pack-shell .act:focus-visible { outline: none;
  color: rgb(243,239,44); border-color: var(--brass); background: none;
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.pack-shell .act.primary { color: rgb(243,239,44); border-color: var(--brass); background: none;
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.pack-shell .act:disabled { color: rgba(125,116,96,0.45); border-color: rgba(125,116,96,0.3); }
.pack-shell .sheet-close { color: #9c937d; background: none; border: 0;
  letter-spacing: 0.2em; text-transform: uppercase; min-height: 44px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.pack-shell .packbar { display: flex; align-items: center; gap: 22px;
  border-top: 2px solid rgba(125,116,96,0.35); background: rgba(0,0,0,0.3);
  padding: 8px 16px; }
.pack-shell .packbar .k { color: #9c937d; font-size: 11px; letter-spacing: 0.22em;
  text-transform: uppercase; margin-right: 8px; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.pack-shell .packbar .v { font-size: 16px; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.pack-shell .packitems { color: #9c937d; font-size: 12px; letter-spacing: 0.14em;
  text-transform: uppercase; margin-right: auto; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.pack-shell .packcarry { display: flex; align-items: center; gap: 10px; }
/* AUDIT2 GOLD-DROP 1: the meter gives way first, and no word breaks - with the button the row can ask more than a
   641-760px window has, and the carry's two words then broke onto a second line, a 57px footer. */
.pack-shell .packcarry .px-meter { flex: 0 1 140px; min-width: 0; height: 8px;
  border: 2px solid rgba(125,116,96,0.55); background: rgba(0,0,0,0.4); }
.pack-shell .packitems, .pack-shell .packcarry, .pack-shell .packgold { white-space: nowrap; }
.pack-shell .packgold { display: flex; align-items: baseline; }
/* GOLD-DROP: the pack's gold button, beside the purse; its field over the bar (AUDIT GOLD-DROP 1).
   AUDIT2 GOLD-DROP 1: AND IT TAKES NO HEIGHT. The footer stood 38px before the button - a line of text and its
   padding - and the window's height is fixed, so a 32px button (footer 50) and a finger's 44 (62) came out of the
   item list: a row of tiles at 1024x600 and on a tablet. Its margins sink it into the footer's own padding and it
   stands centred, out of the purse's baseline, so it draws at 32 and the footer keeps its 38. */
.pack-shell .packgold .goldbtn { align-self: center; margin: -6px 0 -6px 12px; min-height: 32px; padding: 0 12px;
  font-size: 12px; }
/* AUDIT2 BAG1 U3: the footer's bag button (AUDIT BAG1 H2's door on a plain pack) is the gold button's kind - it took an
   .act's own height, and the footer grew out of the item list under it */
.pack-shell .packbar .bagbtn { align-self: center; margin: -6px 0 -6px 12px; min-height: 32px; padding: 0 12px;
  font-size: 12px; }
/* AUDIT2 GOLD-DROP 1: a finger's 44px is the TARGET, not the drawing (the .step rule's two rects). It stays inside
   the footer - reaching above it, a worn row or a tile painted over its top and cut it to 40 - so under a finger
   the footer's inside is 44px (46 with its rule; drawn at 44 the button made it 62) and the target fills it: 8px
   past the button's padding edge each way, its 2px border and the 6 of padding it is sunk into. */
@media (pointer: coarse) {
  .pack-shell .packbar { padding-top: 12px; padding-bottom: 12px; }
  .pack-shell .packgold .goldbtn, .pack-shell .packbar .bagbtn { position: relative; }
  .pack-shell .packgold .goldbtn::after, .pack-shell .packbar .bagbtn::after { content: ''; position: absolute; left: 0; right: 0; top: -8px; bottom: -8px; }
}
/* AUDIT GOLD-DROP 1: THE FIELD FLOATS, as DFU's popup does. It was a row of the window below the bar, and the
   window's height is fixed, so its ~110px came out of the item list - a stacked window (641-999px) has about 50px
   of list, which went to nothing while the dock ran 50px under the footer. Hung off the footer's top edge it
   covers the dock's foot while it is open and moves nothing. AUDIT2 GOLD-DROP 2: and it is the one floater - the
   item's card and the field never stand together (render), so neither covers the other's buttons. */
.pack-shell .packbar { position: relative; }
.pack-shell .packbar > .goldfield { position: absolute; right: 16px; bottom: calc(100% + 8px); z-index: 5;
  width: min(360px, calc(100% - 32px)); margin: 0; background: rgba(10,12,17,0.96);
  border: 2px solid rgba(216,207,174,0.7); outline: 2px solid rgba(125,116,96,0.35); outline-offset: 4px; }
.pack-shell ::-webkit-scrollbar { display: none; }
.pack-shell .pack-dock .packcol, .pack-shell .packlists, .loot-win { scrollbar-width: none; }
.loot-win::-webkit-scrollbar { display: none; }
/* PX19c: THE LOOT WINDOW - containers, corpses, the wagon and a
   littered ground ride their OWN smaller window beside the pack,
   the same frame language one size down; absent entirely when the
   ground is bare. */
.pack-shell { grid-auto-flow: column; gap: 18px; }
/* PX21e (Mac: "in the tooltip for looting, it makes you scroll which
   should not be a thing at all"): THE WINDOW DOES NOT SCROLL. It
   carried overflow-y ITSELF, so a pile past the cap scrolled its own
   title and buttons out of sight - which is the part that reads as
   broken. The frame is fixed furniture now; only the LIST inside it
   can move, and it WIDENS to two columns first, which holds any
   container Daggerfall builds without moving at all. */
/* PX21f: VISIBLE, not hidden. PX21e used overflow:hidden to stop
   the frame scrolling, and it does - but the tooltip is a CHILD of
   this frame in the loot-only flow, so a tip near the bottom edge
   would have been clipped invisibly, which is worse than the scroll it
   replaced. The no-scroll guarantee does not need clipping: the head
   is fixed and the list has min-height 0, so the content cannot
   exceed the frame in the first place. */
.loot-win { position: relative; width: min(340px, 90vw); max-height: min(700px, 86dvh);
  display: flex; flex-direction: column; overflow: visible;
  background: rgba(10,12,17,0.72); border: 2px solid #7d7460; padding-bottom: 8px; }
.loot-win.wide { width: min(680px, 94vw); }
/* CART-FIT (2026-09-27, Discord: "My resolution is 1366 x 768. I tried setting the HUD to %50, but I still can't see
   all the items"). The pack beside a side window - the wagon, the player's own storage - clamped each frame to the
   viewport ALONE: min(1040px, 95vw) and min(680px, 94vw) side by side want 1040 + 18 + 680 = 1738 px, and the host
   clips (inventoryDoor.js, overflow hidden), so at 1366 or 1280 wide the wagon's list stood off the right edge, out of
   reach. PAIRED, the two share the width: the side window is one 340 px column (its list scrolls when it outgrows the
   frame - the price of seeing every row, which PX21e's two columns cannot pay here) and the pack takes what is left;
   from 1770 px (both at full size, with the page's margin) the wide two-column window returns. The phone keeps its
   stack (max-width 640px, below). The HUD scale was never this window's (enhancedHud.js --hud-scale). */
@media (min-width: 641px) {
  .pack-shell.paired .loot-win, .pack-shell.paired .loot-win.wide { width: 340px; }
  .pack-shell.paired .loot-win.wide .remotelist { display: block; }
  .pack-shell.paired .pack-win { width: min(1040px, calc(100vw - 32px - 18px - 340px)); }
}
@media (min-width: 1770px) {
  .pack-shell.paired .loot-win.wide { width: 680px; }
  .pack-shell.paired .loot-win.wide .remotelist { display: grid; }
}
.loot-win .px-corner { position: absolute; }
.loot-win .px-tl { left: -1px; top: -1px; transform: translate(-50%,-50%); }
.loot-win .px-tr { right: -1px; top: -1px; transform: translate(50%,-50%); }
.loot-win .px-bl { left: -1px; bottom: -1px; transform: translate(-50%,50%); }
.loot-win .px-br { right: -1px; bottom: -1px; transform: translate(50%,50%); }
.loot-win .packremote { border-top: 0; background: transparent; padding: 0 0 4px; }
.loot-win .remotehead { border-top: 0; padding: 14px 16px 10px;
  border-bottom: 2px solid rgba(125,116,96,0.3); }

/* ── PX21b: THE LOOT WINDOW READS ───────────────────────────────
   Mac: "give it a solid redesign with readability". The loot list
   inherited the DOCK's 56px tile grid - anonymous squares with the
   name behind a clip-path - which is right for a bag you already know
   and wrong for a chest you have never opened: the whole question a
   container asks is WHAT IS IN IT. So in this window the rows are
   ROWS: the icon, the name, its material and word beneath, the weight
   on the right, one per line, at a size a player reads at a glance. */
/* PX21d (Mac: "center all the elements at the top in the loot
   window"): the head inherited the base sheet's space-between row -
   the title and the meta left, the buttons pushed right - which is a
   COLUMN's header, made when the remote was a column beside the pack.
   In a 340px window of its own it reads as two things that fell to
   opposite walls. The head is a centred stack now: the title, the
   count under it, the buttons in a centred row beneath, each one
   sitting over the list it acts on. The base rules are untouched;
   this is the loot frame's own dress. */
.loot-win .remotehead { flex-direction: column; align-items: center;
  justify-content: center; text-align: center; gap: 10px; margin: 0; }
.loot-win .remotewho { display: flex; flex-direction: column; align-items: center; }
.loot-win .remoteacts { justify-content: center; padding: 0; }
.loot-win .remotewho h3 { font-size: 16px; color: #d8cfae; }
.loot-win .remotewho .meta { font-size: 12px; letter-spacing: 0.14em; color: #9c937d;
  text-transform: uppercase; margin-top: 6px; }
.loot-win .packlists, .loot-win .packcol { display: block; padding: 0; }
/* The column is a flex box so the head stays put and the list takes
   what is left; min-height 0 is what lets a flex child actually shrink
   rather than push its parent open. */
.loot-win .packremote { display: flex; flex-direction: column; min-height: 0; flex: 1; }
.loot-win .remotehead { flex: 0 0 auto; }
.loot-win .remotelist { flex: 1; min-height: 0; overflow-y: auto; scrollbar-width: none; }
.loot-win .remotelist::-webkit-scrollbar { display: none; }
/* LOOT-STACK: the pile's tabs, one per body, over the head - the lit
   one is the body this window is open on. They wrap rather than scroll,
   so a pile of five on a phone is two rows and never a hidden tab; each
   is a finger's height, because a phone has no other way to the pile. */
.piletabs { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px;
  padding: 12px 12px 0; }
.piletab { font: inherit; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  min-height: 32px; padding: 4px 10px; display: inline-flex; align-items: center; gap: 6px;
  color: #9c937d; background: rgba(0,0,0,0.35); border: 1px solid rgba(125,116,96,0.45);
  cursor: pointer; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); max-width: 100%; }
.piletab:hover, .piletab:focus-visible { outline: none; color: #d8cfae; border-color: var(--brass); }
.piletab.on { color: rgb(243,239,44); border-color: var(--brass); cursor: default; }
.piletabname { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.piletabn { color: #d8cfae; font-variant-numeric: tabular-nums; }
/* WAGON-FILTER (2026-10-04, Mac: "The wagon needs a filter option"): the player's own store - the wagon, their
   storage, the Materials Bag - carries a search and a category menu between the head and the rows, in ONE row of
   fixed furniture (PX21e: the rows scroll, never the frame). AUDIT WAGON-FILTER C1: the first cut's wrapping chips and
   hint stood 202-236 px tall and left a phone on its side 1 px of list; one row is 44 px. The menu wears the search's
   dress, the brass on focus. */
.storefilter { display: flex; align-items: center; gap: 6px; padding: 6px 10px; flex: 0 0 auto;
  border-bottom: 2px solid rgba(125,116,96,0.3); }
.storesearch, .storecat { font: inherit; font-size: 13px; min-height: 32px; box-sizing: border-box; color: #d8cfae;
  background: rgba(0,0,0,0.35); border: 1px solid rgba(125,116,96,0.45); border-radius: 0; }
.storesearch { flex: 1 1 0; min-width: 0; padding: 0 8px; }
.storecat { flex: 0 1 auto; max-width: 48%; padding: 0 4px; }
.storecat option { color: #d8cfae; background: #10141a; }
.storesearch::placeholder { color: #9c937d; }
.storesearch:focus, .storecat:focus { outline: none; border-color: var(--brass); }
/* SHIFT-STOW's line: its own element, so hiding it leaves no band - on a touch screen (no Shift) and a short screen
   (the list first) */
.storehint { margin: 0; padding: 4px 10px 0; flex: 0 0 auto; font-size: 11px; letter-spacing: 0.06em; color: #9c937d;
  text-align: center; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
@media (pointer: coarse), (max-height: 640px) { .storehint { display: none; } }   /* SHIFT-STOW: no Shift to tell of, or no room */
/* NOT MULTICOL. column-count was the obvious answer and it is the
   wrong one: a multicol box that is also a SCROLL container fragments
   in the block direction, so the overflow columns went below the fold
   and the list scrolled anyway - measured, 14 rows spilling 203px past
   the frame. A GRID has no fragmentation: two tracks, rows in reading
   order, a definite height, nothing to overflow. */
.loot-win.wide .remotelist { display: grid; grid-template-columns: 1fr 1fr;
  align-content: start; }
.loot-win.wide .remotelist .packempty { grid-column: 1 / -1; }
.loot-win .itemrow { width: 100%; height: auto; min-height: 52px;
  display: flex; align-items: center; justify-content: flex-start; gap: 12px;
  padding: 8px 14px; border: 0; border-bottom: 2px solid rgba(125,116,96,0.16);
  text-align: left; }
.loot-win .itemrow:last-child { border-bottom: 0; }
.loot-win .itemrow .tile { width: 38px; height: 38px; font-size: 18px; flex: 0 0 auto; }
.loot-win .itemrow .itemname { position: static; width: auto; height: auto;
  clip-path: none; overflow: hidden; display: flex; flex-direction: column; gap: 2px;
  min-width: 0; flex: 1; font-size: 14px; color: #d8cfae; }
.loot-win .itemrow .itemname > span { overflow: hidden; text-overflow: ellipsis;
  white-space: nowrap; }
.loot-win .itemrow .itemname small { font-size: 11px; letter-spacing: 0.12em;
  text-transform: uppercase; color: #9c937d; }
.loot-win .itemrow .itemwt { display: block; flex: 0 0 auto; font-size: 12px;
  color: #9c937d; font-variant-numeric: tabular-nums; }
.loot-win .itemrow .rowcount, .loot-win .itemrow .count { position: static;
  font-size: 12px; margin-left: 4px; }
.loot-win .itemrow:hover, .loot-win .itemrow:focus-visible { background: rgba(125,116,96,0.12); }
.loot-win .itemrow.on { background: rgba(192,138,62,0.14); outline: 0;
  box-shadow: inset 3px 0 0 var(--brass); }

/* ── WORLD-HOVER (PX21c): THE PLAQUE AT THE CROSSHAIR ───────────
   A readout, not a control: the same dress as the floating windows,
   with pointer-events off because nothing here is clickable. It SNAPS
   on and off - the whole point is that it answers before you have
   finished deciding to ask.

   PX21c stood it at "bottom: 16%" and said in a comment that it was
   "centred low so it never sits on the reticle" - avoiding the cross
   by standing far from it, because the rule had nowhere to read the
   cross's real place. It does now: ui/worldPlaque.js measures the
   reticle off hudCrosshair's own exports and writes --wp-x/--wp-top,
   so the plaque hangs a fixed gap BELOW the cross and grows downward.
   A docked large HUD moves the reticle (ROAD-E E5) and moves this with
   it. The percentages are the fallback for a frame not yet drawn. */
.wplaque { position: fixed; left: var(--wp-x, 50%); top: var(--wp-top, 55%);
  transform: translateX(-50%);
  z-index: 6; display: none; min-width: 190px; max-width: ${qr}px; --wp-pad-x: 14px; padding: 10px var(--wp-pad-x);
  background: rgba(10,12,17,0.9); border: 2px solid #7d7460; pointer-events: none;
  font-family: ${M}; -webkit-font-smoothing: none; color: #d8cfae;
  font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.wplaque.on { display: block; }
.wplaque-title { font-size: 15px; line-height: 1.4; text-align: center; color: #d8cfae; }
.wplaque-titleline { display: block; }
/* RENOWN1 - a player's Renown on the plaque: the number in the box it wears over their head (ui/nameLayer.js
   .dfname-renown), left of the name on the title's first line. */
.wplaque-renown { display: inline-block; margin-right: 0.4em; padding: 0 0.3em; min-width: 1.2em; text-align: center;
  font-size: 0.85em; line-height: 1.3; vertical-align: 1px; font-variant-numeric: tabular-nums;
  color: #f2c46b; background: rgba(14, 16, 19, 0.6); border: 1px solid rgba(242, 196, 107, 0.8); border-radius: 2px; }
.wplaque-sub { font-size: 12px; line-height: 1.4; text-align: center; color: #9c937d; }
/* UXB1-N (2026-09-25, the UX backlog): somebody else's container - its
   title in the ember a warning wears, its "Private property" line under
   it in a quieter ember - so it never reads as the shop's own stock. */
.wplaque.tone-private .wplaque-title { color: #e0875a; }
.wplaque.tone-private .wplaque-sub { color: #a8674a; }
/* PX21c's head rule, re-homed. Its TYPOGRAPHY retires with it - 11px
   uppercase letterspaced was a KIND label ("LOOT", "REMAINS"), and the
   merged surface names the thing itself ("Wardrobe", "Shop Shelf",
   "Skeletal Warrior (dead)"), which is strictly more. What survives is
   the divider, and only where there is something to divide.
   LOOT-STACK moved it from the TITLE's foot to the LIST's top edge. It
   divides the LABEL - the title and every sub-line under it - from what
   the thing holds, and at the title's foot it stood between the title
   and its own sub-lines: a locked chest's "Lock Level: 12" drew as the
   first row of its contents, and a pile's "2 of 3" as a heading over
   the body's list (tools/lootStackProbe.mjs photographed it). The list
   exists only on an itemised frame (has-list), so the divider still
   stands only where there is something to divide. */
.wplaque-list { padding-top: 8px; margin-top: 8px; border-top: 2px solid rgba(125,116,96,0.3); }
.wplaque-row { display: flex; align-items: baseline; gap: 10px; font-size: 14px;
  line-height: 1.5; }
.wplaque-count { margin-left: auto; color: var(--brass); font-size: 12px; }
/* QUICK-LOOT B3: THE HIGHLIGHT. Negative margins with matching padding
   so the band reaches the plaque's inner edges without the row's own
   box moving - a highlight that reflowed the list would shift every
   name under it each time the wheel turned, which is the one thing a
   readout at the crosshair must not do. The rarity colours above are
   on the row's first span and are untouched by this, so a highlighted
   artifact still reads as an artifact.
   LOOT-STACK (tools/lootStackProbe.mjs measured it): the margin is the
   PLAQUE's own padding (--wp-pad-x), not a second 14 - the narrow sheet
   pads 12, and there the band ran 2px into the border on both sides -
   and the padding MATCHES it on both sides, where the left was 12 and
   stood the lit name 2px left of every other name in the list, the
   very shift this rule exists to prevent (the brass bar is an inset
   shadow and takes no room). */
.wplaque-row.sel { background: rgba(125,116,96,0.28); box-shadow: inset 2px 0 0 var(--brass);
  margin: 0 calc(-1 * var(--wp-pad-x)); padding: 0 var(--wp-pad-x); }
/* AUDIT DISC7 A4: a refused verb (the F-card's disabled row): its reason in its name, italic in the card's own lighter bone (SOC C12's 4.9:1), never dimmed by opacity */
.wplaque-row.off { font-style: italic; color: #c8c2b4; }
/* ...and the line that says what the keys do, under the list. */
.wplaque-keys { margin-top: 8px; padding-top: 6px; border-top: 1px solid rgba(125,116,96,0.35);
  color: #9c937d; font-size: 11px; text-align: center; }
.wplaque-empty, .wplaque-more { color: #9c937d; font-size: 12px; }
/* QUICK-LOOT-STATS: the lit row's numbers, beside the list. Same box as
   the plaque itself - a player should read them as one surface, not as
   a tooltip about a tooltip. Absolutely positioned against the plaque's
   own fixed box, so it rides the reticle's anchor with no second
   variable to keep in step. The SIDE is decided in JS (worldPlaque.js
   statsSide) because it depends on the window's width, which a media
   query cannot compare against the reticle's x. */
.wplaque-stats { position: absolute; top: 0; width: ${ng}px; box-sizing: border-box;
  padding: 8px 10px; background: rgba(10,12,17,0.9); border: 2px solid #7d7460;
  text-align: left; }
.wplaque-stats[data-side="right"] { left: calc(100% + ${_r}px); }
.wplaque-stats[data-side="left"] { right: calc(100% + ${_r}px); }
/* BELOW is the phone's answer, and it is not a fallback that looks
   broken: full width under the list, in the plaque's own flow rather
   than beside it. */
.wplaque-stats[data-side="below"] { position: static; width: auto; margin-top: 8px;
  border: 0; border-top: 1px solid rgba(125,116,96,0.35); padding: 6px 0 0; background: none; }
.wplaque-statrow { display: flex; align-items: baseline; gap: 10px; font-size: 12px;
  line-height: 1.5; color: #d8cfae; }
.wplaque-statkey { color: #9c937d; }
/* The value is RIGHT-ALIGNED, not merely pushed right. A condition
   reads "Slightly Used (75%)" and the panel is deliberately narrow, so
   that row wraps - and a wrapped value that is only pushed by an auto
   margin sets its second line hard against the LABEL, which reads as a
   different row. Aligning the text keeps both lines flush to the same
   edge as every value above and below it. Seen, not guessed:
   tools/quickLootStatsProbe.mjs photographs this row. */
.wplaque-statval { margin-left: auto; text-align: right; }
/* A sentence row (a raw meat's "cook it at a fire") has no key, so it
   must not be pushed to the right edge by the auto margin the paired
   rows use for their value. */
.wplaque-statnote .wplaque-statval { margin-left: 0; text-align: left; color: #a49a80; }
/* AUDIT-WH R7: THE LIST HAS ITS OWN NODE AND HAD NO RULE. The draw
   emits a .wplaque-list wrapper round the rows and nothing styled it,
   so the block existed only to be an unstyled div - and a plaque under
   the reticle GROWS DOWNWARD, which on a short viewport (a laptop
   under browser chrome, a 16:10 window with a docked large HUD) walks
   a six-row pile off the bottom of the screen. The cap is the room
   BELOW the cross, which is what the anchor already knows: --wp-top is
   the plaque's own top edge, so 100vh minus it is exactly what is
   left. The TITLE never moves - it is the thing the reticle is about -
   so the rows are what gives. No scrollbar chrome: a readout is not a
   control (the whole surface is pointer-events: none), so the overflow
   is a CLIP, and the "and N more" tail already tells the truth about
   what is not shown.
   LOOT-STACK: and the clip is DOWNWARD only. The cap is about height -
   the rows are what gives - and hidden clipped across as well, which
   cut QUICK-LOOT B3's highlight band off at the list's edges (it reaches
   out to the plaque's) and the first two pixels of the lit name with it.
   A clip on the one axis leaves the other visible (hidden cannot: it
   makes the other axis auto); a browser without clip drops that
   declaration and keeps hidden, today's clip, whole. */
.wplaque-list { display: block; max-height: calc(100vh - var(--wp-top, 55%) - 24px);
  overflow: hidden; overflow-x: visible; overflow-y: clip; }
/* AUDIT ENH-NOTICE3 A6's lesson: a more-specific base rule outranks a
   media block, so every base selector above is one class. */
@media (max-width: 720px) { .wplaque { max-width: 88vw; --wp-pad-x: 12px; padding: 8px var(--wp-pad-x); }
  .wplaque-row, .wplaque-title { font-size: 13px; } .wplaque-sub { font-size: 11px; } }

/* Action lists can grow with cabin and crew verbs. Bound the whole panel, including its title;
   worldPlaque keeps the keyboard/wheel selection visible without adding a second input handler. */
.wplaque.has-actions { box-sizing: border-box; min-width: 0; width: max-content;
  max-width: min(${qr}px, calc(100vw - 24px));
  max-height: calc(100vh - var(--wp-top, 55%) - 12px);
  max-height: calc(100dvh - var(--wp-top, 55%) - 12px); }
.wplaque.on.has-actions { display: flex; flex-direction: column; }
.wplaque.has-actions > :not(.wplaque-list) { flex-shrink: 0; }
.wplaque.has-actions .wplaque-acts { position: relative; min-height: 0; max-height: none;
  margin-left: calc(-1 * var(--wp-pad-x)); margin-right: calc(-1 * var(--wp-pad-x));
  padding-left: var(--wp-pad-x); padding-right: var(--wp-pad-x);
  overflow-y: hidden; overflow-x: hidden; }
.wplaque.has-actions .wplaque-row { overflow-wrap: anywhere; }
/* Action plaques retain the active theme's original translucent world surface and use its readable body-text role. */
.wplaque.has-actions:not(.tone-private) .wplaque-title, .wplaque.has-actions .wplaque-row { color: var(--bone); }
:root[data-plus-theme="stone"] .wplaque.has-actions:not(.tone-private) .wplaque-title, :root[data-plus-theme="stone"] .wplaque.has-actions .wplaque-row { color: ${zi}; }

/* ── PX21a: THE TRANSPORT STRIP - retired (PLUS-DEAD, 2026-09-26): Mount and Cart are a split cell of the worn grid
   (PLUS11), and the strip plain Enhanced drew went with it. */

/* PX22: an empty section still stands, and says so. */
.px-qnone { padding: 6px 14px 10px; color: rgba(125,116,96,0.55); font-size: 13px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
@media (max-width: 640px) {
  .pack-win { width: 100vw; height: 100dvh; border-left: 0; border-right: 0; }
  /* PX19f: on a phone the main area is the character region alone
     (the detail keeps its SHEET) and the dock grows to half. */
  .pack-shell .pack-main { grid-template-columns: 1fr; }
  .pack-shell .pack-dock { max-height: 50%; }
  /* the stage dissolves but its CHILDREN keep flowing - display:none
     here would hide the fixed detail SHEET inside it; contents lets
     the sheet fix to the viewport while the figure alone hides. */
  /* PX19f/i: the phone shows the character region; the detail is the
     .packdetail sheet, now the tooltip's phone dress. */
  /* the loot window stacks under the pack on a phone */
  .pack-shell { grid-auto-flow: row; gap: 0; }
  .loot-win { width: 100vw; max-height: 40dvh; border-left: 0; border-right: 0; }
  /* AUDIT GOLD-DROP 1: the footer as one row is never under ~550px (580 with a seven-digit purse), the host clips
     and the page will not zoom, so the Gold button at its end stood past a phone's right edge.
     AUDIT2 GOLD-DROP 1: AND IT STAYS ONE ROW. Wrapped, it was 90px where it had been 57, and the window took the
     difference from the list - a 375px or 390px phone lost its one row of tiles. The count goes (every tab carries
     its page's), the meter gives way first and the carry clips before the purse or its button can be pushed off. */
  .pack-shell .packitems { display: none; }
  .pack-shell .packbar { gap: 12px; }
  .pack-shell .packcarry { flex: 1 1 auto; min-width: 0; overflow: hidden; }
  .pack-shell .packgold { flex: 0 0 auto; }
}
/* AUDIT2 GOLD-DROP 1/3: under 520px the row still overran - at 320 the carry's meter ran past the screen's edge,
   30px, 44 with an eight-digit purse - so the two words leave the eye and stay for a reader (a tile name's clip)
   and the button's sides come in. At 320 an eight-digit purse fits with a pixel to spare. */
@media (max-width: 520px) {
  .pack-shell .packbar .k { position: absolute; width: 1px; height: 1px; margin: 0; overflow: hidden;
    clip-path: inset(50%); }
  .pack-shell .packgold .goldbtn, .pack-shell .packbar .bagbtn { padding: 0 8px; }
}

/* ── PX9: SETTINGS INSIDE THE PAUSE WINDOW ──────────────────────
   The same paneSettings DOM, reflowed for the window: the category
   subrail becomes a wrapping chip strip on top, the rows scroll
   beneath, and the help/reset detail rises as a SHEET inside the
   window - the phone pattern the screen already carries, applied one
   size up. All paint and flow; the machine underneath is untouched. */
.px-setwrap { padding: 0; overflow: hidden; display: flex; }
.px-setwrap .panes { display: flex; flex-direction: column; flex: 1; min-width: 0; position: relative; overflow: hidden;
  background: none; }   /* PX10b: the slate lived on .panes (its base gap-colour trick), not .list */
.px-setwrap .subrail { display: flex; flex-direction: row; flex-wrap: wrap; gap: 2px;
  width: auto; border-right: 0; border-bottom: 2px solid rgba(125,116,96,0.45);
  padding: 4px 6px 6px; overflow: visible; }
.px-setwrap .subbtn { width: auto; min-height: 40px; padding: 6px 12px; font-size: 14px;   /* ORG2: a strip of tabs, not a column */
  display: flex; align-items: center; gap: 8px;
  color: #d8cfae; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-setwrap .subbtn.on { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-setwrap .subbtn .count { font-size: 11px; }
.px-setwrap .list { flex: 1; overflow-y: auto; padding: 8px 12px 12px; background: none; }   /* PX10b: the old sheet's slate panel, off */
.px-setwrap .row { min-height: 44px; }
/* AUDIT MERGE-PLUS D7: A LABEL IS NEVER CUT FOR ITS VALUE. On a 320px phone the skin's name ("Enhanced Plus") took
   the row and left its label 28px ("Interf"): in the settings' rows (the main menu's panes, the pause menu's), the
   label keeps at least its longest word, and a value that will not fit beside it wraps inside its own button
   instead (a stepper cannot wrap, and keeps its size). The wizard's rows are not these, and keep their ellipsis. */
.panes .row > .row-main, .px-setwrap .row > .row-main { min-width: min-content; }
.panes .row > .ctl, .px-setwrap .row > .ctl { flex-shrink: 1; }
/* The sheet: absolute within the window (px-win is relative), risen
   by the same .open class the phone sheet uses. */
.px-setwrap .detail { position: absolute; left: 0; right: 0; bottom: 0; max-height: 78%;
  overflow-y: auto; z-index: 5; background: rgba(10,12,17,0.96);
  border-top: 2px solid var(--brass);
  transform: translateY(101%); transition: transform 0.18s steps(4); }
.px-setwrap .detail.open { transform: translateY(0); }
.px-setwrap .sheet-close { display: block; width: 100%; min-height: 44px;
  color: #9c937d; letter-spacing: 0.2em; text-transform: uppercase;
  border-bottom: 2px solid rgba(125,116,96,0.4);
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
@media (prefers-reduced-motion: reduce) { .px-setwrap .detail { transition: none; } }

/* ── PX10b: THE ROWS SHED THE OLD CHROME (Mac: "it's the old ui
   backdrop") ── the base .row/.step/.val rules are the OLD sheet's -
   slate hover fills, 1px iron hairlines, brass inset - and PX8's
   repaint was scoped to .shell, which the pause window is not in.
   Same repaint, scoped here; the 44px target pseudo-element and every
   size stay exactly as measured. */
.px-setwrap .row { background: none; border-bottom: 2px solid rgba(125,116,96,0.3); }
.px-setwrap .row:hover { background: rgba(0,0,0,0.25); }
.px-setwrap .row.on { background: rgba(0,0,0,0.25); box-shadow: none;
  outline: 2px solid rgba(192,138,62,0.6); outline-offset: -2px; }
.px-setwrap .row-name { font-size: 15px; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-setwrap .val { color: #c5bda2; letter-spacing: 0.08em;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.px-setwrap .step { border: 2px solid rgba(125,116,96,0.55); border-radius: 0;
  background: none; color: #d8cfae; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-setwrap .step:hover { color: rgb(243,239,44); border-color: var(--brass);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-setwrap .act { border: 2px solid rgba(125,116,96,0.55); border-radius: 0;
  background: none; color: #d8cfae; letter-spacing: 0.14em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); transition: none; }
.px-setwrap .act:hover, .px-setwrap .act:focus-visible { color: rgb(243,239,44);
  border-color: var(--brass); background: none; text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-setwrap .act.primary { color: rgb(243,239,44); border-color: var(--brass);
  background: none; text-shadow: 2px 2px 0 rgb(93,77,12); }
.px-setwrap .swatch { border: 2px solid rgba(125,116,96,0.55); border-radius: 0; }
.px-setwrap .legend i, .px-setwrap .row i { border-radius: 0; }
.px-setwrap .dcard h3 { font-family: inherit; font-weight: 400; letter-spacing: 0.12em;
  text-transform: uppercase; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-setwrap .dcard p { color: #c5bda2; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.px-setwrap .dcard code { font-family: inherit; border: 2px solid rgba(125,116,96,0.4);
  border-radius: 0; background: rgba(0,0,0,0.35); letter-spacing: 0.06em; }

/* ── PX18: THE WORLD MAP WEARS THE PIXELS ── the held map's chrome
   (the sprite IS the picture; the label, the search, the card and the
   foot float over it) joins the family: Pixelify chrome, 2px frames,
   the gold pair on the hand, glass panels at the established scrims,
   the travel card in the pack's plaque language. The ink on the sheet
   and every travel law underneath are untouched. */
#enhanced-travelmap, .hmroot { font-family: ${M};
  -webkit-font-smoothing: none; color: #d8cfae; }
.hmroot button { transition: none; border-radius: 0; }
.hmtop { background: linear-gradient(rgba(10,12,17,0.55), rgba(10,12,17,0)); }
.hmlabel { font-family: inherit; letter-spacing: 0.18em; text-indent: 0.18em;
  text-transform: uppercase; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.hmsearch input { font-family: inherit; font-size: 16px; letter-spacing: 0.06em;
  color: #d8cfae; background: rgba(0,0,0,0.4); border: 2px solid rgba(125,116,96,0.55);
  border-radius: 0; padding: 8px 12px; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.hmsearch input:focus { outline: none; border-color: var(--brass); color: rgb(243,239,44);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.hmresult { font-family: inherit; border: 0; border-bottom: 2px solid rgba(125,116,96,0.3);
  background: rgba(10,12,17,0.72); color: #c5bda2; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.hmresult:hover, .hmresult:focus-visible { outline: none; color: rgb(243,239,44);
  background: rgba(0,0,0,0.5); text-shadow: 2px 2px 0 rgb(93,77,12); }
.hmresult-region { color: #9c937d; }
.hmcard { position: absolute; border: 2px solid rgba(216,207,174,0.7);
  outline: 2px solid rgba(125,116,96,0.35); outline-offset: 4px; border-radius: 0;
  background: rgba(10,12,17,0.72); font-family: inherit;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.hmcard h3, .hmcard h2 { font-family: inherit; font-weight: 400; letter-spacing: 0.14em;
  text-indent: 0.14em; text-transform: uppercase; text-align: center;
  border-bottom: 2px solid rgba(125,116,96,0.5); padding-bottom: 8px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.hmmeta { color: #9c937d; font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase;
  text-align: center; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.hmprompt { color: #c5bda2; text-align: center; font-size: 15px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.hmpair { display: flex; justify-content: space-between; gap: 14px;
  border-bottom: 2px solid rgba(125,116,96,0.3); min-height: 32px; align-items: baseline; }
.hmpair-k { color: #9c937d; font-size: 13px; letter-spacing: 0.18em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.hmacts { display: flex; justify-content: center; gap: 10px; }
.hmroot .act { border: 2px solid var(--brass); border-radius: 0; background: none;
  color: rgb(243,239,44); font-family: inherit; letter-spacing: 0.14em; text-transform: uppercase;
  min-height: 44px; padding: 8px 16px; text-shadow: 2px 2px 0 rgb(93,77,12); }
.hmroot .act.hmghost { border-color: rgba(125,116,96,0.55); color: #d8cfae;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.hmroot .act:hover, .hmroot .act:focus-visible { outline: none; color: rgb(243,239,44);
  border-color: var(--brass); background: rgba(0,0,0,0.35); text-shadow: 2px 2px 0 rgb(93,77,12); }
.hmhint, .hmband, .hmlegend { color: #9c937d; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.hmbox { border: 2px solid rgba(216,207,174,0.7); outline: 2px solid rgba(125,116,96,0.35); outline-offset: 4px;
  border-radius: 0; background: rgba(10,12,17,0.86); font-family: inherit; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.hmbox-title { font-family: inherit; font-weight: 400; letter-spacing: 0.14em; text-transform: uppercase;
  border-bottom: 2px solid rgba(125,116,96,0.5); padding-bottom: 8px; }
.hmbox-row, .hmbox-grid { color: #c5bda2; }
/* EVENT-TIP: a world event's card at the pointer - the gate's ring, a raided town (ui/eventMapMarks.js) - in the
   pixel home's plaque language; placed in viewport pixels over the root (ui/heldMap.js _showTip) */
.hmtip { position: absolute; z-index: 3; display: none; pointer-events: none; max-width: min(320px, calc(100vw / var(--hm-ui, 1) - 16px));
  padding: 8px 12px; background: rgba(10,12,17,0.9); border: 2px solid rgba(216,207,174,0.7);
  outline: 2px solid rgba(125,116,96,0.35); outline-offset: 2px; color: #d8cfae; font-family: inherit;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.hmtip-title { letter-spacing: 0.14em; text-transform: uppercase; color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12);
  border-bottom: 2px solid rgba(125,116,96,0.5); padding-bottom: 4px; margin-bottom: 4px; }
.hmtip-line { font-size: 14px; line-height: 1.35; color: #c5bda2; }
/* MAP-KEY: the key - the classic map's four filters, each a toggle with the glyphs it hides beside it - stands ON the
   foot: anchored to the row's own top edge (bottom: 100% of the foot it is a child of), so it rises with the row when
   the row wraps and never floats at a guessed height (AUDIT SOC C10/D5). Out of the row's flow on purpose: a wrapping
   flex row sizes itself as if every child sat on one line, and the key would stretch the hint's scrim to its width
   and its own. A solid panel, so a press between its glyphs is not a drag of the map under it. Whole here, as the
   hover card's rule is: the key was born in the pixel home. Its toggles wear that home's frame at the foot's size -
   the gold pair while their kinds are shown, the ghost frame and a struck word while the store's flag hides them -
   and the glyphs' words are in the rows' bone. */
.hmkey { position: absolute; left: 0; bottom: calc(100% + 4px); width: max-content; max-width: calc(100vw / var(--hm-ui, 1) - 36px);
  display: grid; grid-template-columns: max-content auto; gap: 3px 10px; align-items: center;
  padding: 6px 10px; border-radius: 4px; background: rgba(10, 12, 17, 0.94); pointer-events: auto; }
.hmkeyrow { display: contents; }
.hmkeyflt { pointer-events: auto; text-align: left; }
.hmroot .act.hmkeyflt { min-height: 24px; padding: 2px 10px; font-size: 12px; }
.hmroot .act.hmkeyflt:not(.on) { border-color: rgba(125,116,96,0.55); color: #9c937d; text-decoration: line-through;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.hmroot .act.hmkeyflt:not(.on):hover { color: #d8cfae; border-color: var(--brass); }
.hmkeykinds { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 12px; }
.hmkeykind { display: inline-flex; align-items: center; gap: 5px; pointer-events: auto; font-size: 11px;
  color: #c5bda2; letter-spacing: 0.08em; text-transform: uppercase; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.hmkeykind.dim { opacity: 0.4; }
.hmkeyrow.off .hmkeykind { opacity: 0.3; }
.hmkeychip { flex: none; display: block; box-shadow: 0 0 0 1px rgba(0,0,0,0.8); }
/* OW-WHO: the Players row's word - the row's first cell, so never hidden with the glyphs' words on a phone (the
   grid's rows are display: contents, and a hidden first cell would shift every row after it a column) */
.hmkeywho { font-size: 11px; color: #c5bda2; letter-spacing: 0.08em; text-transform: uppercase; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
/* WILD2: THE ZONE MAP'S LEGEND (ui/wildZoneMap.js buildZoneLegend) - the Wrothgarian Mountains' four rings, where I
   stand and the zone's laws, in the held map's plaque language (the hover card's frame, the key's bone and brass): a
   panel on the right of the paper, the room the zone map's view leaves it (ZONE_LEGEND_W). Each ring's swatch is its
   fill on the sheet; the ring I stand in wears the brass edge. A solid panel, so a press on it is never a drag. */
.hmwild { position: absolute; z-index: 2; top: 76px; right: 18px; width: min(300px, calc(100vw / var(--hm-ui, 1) - 36px));
  max-height: calc(100% - 170px); overflow: hidden; padding: 12px 14px 14px; pointer-events: auto;
  display: flex; flex-direction: column;   /* LEGEND-FIT: the laws scroll, the foot's buttons never leave the panel */
  background: rgba(10,12,17,0.92); border: 2px solid rgba(216,207,174,0.7); outline: 2px solid rgba(125,116,96,0.35);
  outline-offset: 3px; color: #d8cfae; font-family: inherit; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
.hmwild-head { border-bottom: 2px solid rgba(125,116,96,0.5); padding-bottom: 8px; margin-bottom: 8px; }
.hmwild-kicker { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--cinnabar); }
.hmwild-title { font-size: 18px; letter-spacing: 0.12em; text-transform: uppercase; color: rgb(243,239,44);
  text-shadow: 2px 2px 0 rgb(93,77,12); }
.hmwild-where { font-size: 13px; line-height: 1.35; color: #9c937d; margin-bottom: 10px; }
.hmwild-where.in { color: #e9e4d9; }
.hmwild-rings { list-style: none; margin: 0 0 10px; padding: 0; display: grid; gap: 4px; }
.hmwild-ring { display: grid; grid-template-columns: 16px 1fr auto; grid-template-rows: auto auto; gap: 0 8px;
  align-items: center; padding: 5px 8px; border: 2px solid rgba(125,116,96,0.35); background: rgba(0,0,0,0.25); }
.hmwild-ring.mine { border-color: var(--brass); background: rgba(192,138,62,0.12); }
.hmwild-sw { grid-row: 1 / span 2; width: 14px; height: 14px; border: 2px solid; box-shadow: 0 0 0 1px rgba(0,0,0,0.8); }
.hmwild-rname { font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: #e9e4d9; }
.hmwild-rname b { color: rgb(243,239,44); font-weight: 400; margin-right: 2px; text-shadow: 2px 2px 0 rgb(93,77,12); }
.hmwild-bonus { font-size: 14px; color: #f08a6a; font-variant-numeric: tabular-nums; }
.hmwild-depth { grid-column: 2 / span 2; font-size: 11px; color: #9c937d; letter-spacing: 0.06em; }
.hmwild-rules { margin: 0 0 12px; padding-left: 16px; font-size: 12px; line-height: 1.4; color: #c5bda2; }
.hmwild-rules li { margin: 0 0 3px; }
.hmwild-head, .hmwild-where, .hmwild-rings, .hmwild-foot { flex: none; }
.hmwild-rules { flex: 1 1 auto; min-height: 0; overflow-y: auto; }
.hmwild-foot { display: grid; gap: 6px; padding-top: 8px; border-top: 2px solid rgba(125,116,96,0.35); }
.hmroot .act.hmwild-go { border-color: var(--brass); color: rgb(243,239,44); }
.hmroot .act.hmwild-back { width: 100%; min-height: 36px; }
.hmroot .act.hmkeyzone { border-color: var(--cinnabar); color: #f3d7c9; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
@media (max-width: 860px) {
  /* a phone keeps the paper: the legend a compact strip of the four rings under the search, the laws left to the HUD */
  .hmwild { top: 128px; bottom: auto; right: 12px; left: 12px; width: auto; max-height: calc(30vh / var(--hm-ui, 1)); padding: 8px 10px 10px; }
  .hmwild-rules, .hmwild-depth { display: none; }
  .hmwild-ring { padding: 3px 8px; }
  .hmwild-title { font-size: 15px; }
}
@media (max-width: 860px) {
  .hmkey { max-width: calc(100vw / var(--hm-ui, 1) - 24px); }
  .hmkeyname { display: none; }   /* a phone keeps the toggles and the glyphs; each glyph's title names it */
  /* the card rides up to clear the foot row here (bottom: 76px), which is where the key stands: while a place is
     picked the key steps aside, or it would lie over the card's own Travel button */
  .hmroot.hmcardup .hmkey { display: none; }
}

/* ── FT14: ONE ROOF (2026-09-15) ───────────────────────────────
   The features home stops being a list. Twenty-eight tiles in a
   grid, grouped by what they change, with a rail that reads out
   the one you point at.

   THE CONTROL IS A BAR AND THERE ARE NO SWITCHES. Off is its
   first segment, so a two-state row and a five-state row are the
   same object at two widths - which is the whole reason a tile
   works at all: the bar sits UNDER the name instead of out at the
   right margin, so the control stops setting the row's width and
   the thing fits a card.

   The colours are the skin's own: brass for what the online lane
   forces, emerald for what is on, iron for what is not. The
   left edge carries that, so the grid can be read for state
   without reading a word of it.

   DISC23-C (Skeptikali: "if a feature would be enabled, the ON
   button would turn Green, and if a feature would be disabled, the
   OFF button would turn Red, it would help a lot for people with
   darker screens or smaller resolutions"): a SWITCH's pressed
   segment is FILLED - emerald when the feature is on, cinnabar on
   its Off - where it was a grey block with coloured letters. Both
   fills carry the bone label at 4.5:1 or better and stand off the
   bar's ink at 3:1 or better, so the state reads from the colour
   alone. A CHOICE (no Off segment) keeps the grey block: it has no
   off to be red about. A forced switch keeps its fill - the brass
   edge and the "online" tag say it is forced. */
/* ── ORG2 (2026-10-09, Mac: "Graphic settings needs its own tab, etc. I really need you to go all in"): ONE SETTINGS
   SCREEN ─────────────────────────────────────────────────────────────────────────────────────────────────────────────
   The Features home's tiles are ROWS of the one screen now: the name, the labels and the note's first sentence on the
   left, the bar on the right - the settings list's own shape - and the drawer under both. The bar keeps every law it
   had (DISC23-C's fills, the forced brass, Off first), and the left edge keeps the state stripe: emerald on, brass
   forced, iron off. Over the rows: the toolbar (one search over every tab, the filters, the actions) stuck to the top of
   the list, the tab's head, the jump strip and the sections' heads. A row changed from how the game ships wears a
   small CHANGED mark after its name. */
.opt-tools { position: sticky; top: 0; z-index: 3; display: flex; flex-wrap: wrap; gap: 8px 10px; align-items: center;
  padding: 10px 18px; background: rgba(14,17,22,0.97); border-bottom: 1px solid #20262e; }
.opt-search { flex: 1 1 100%; min-width: 0; min-height: 38px; padding: 0 12px; background: var(--ink);
  border: 1px solid var(--iron); color: var(--bone); font: inherit; font-size: 14px; }
.opt-search::placeholder { color: var(--dim); }
.opt-search:focus-visible { outline: none; border-color: var(--brass); }
.opt-filters { display: flex; flex-wrap: wrap; gap: 4px; }
.opt-filters .chip { padding: 5px 9px; font-size: 11px; }
.opt-tools .acts { margin: 0 0 0 auto; gap: 6px; }
.opt-tools .act { min-height: 30px; padding: 5px 10px; font-size: 11px; letter-spacing: 0.08em; }
.opt-body > .card { margin: 12px 18px; }
.opt-bindings { padding: 6px 18px 18px; }
.sec-jump { display: flex; flex-wrap: wrap; gap: 4px; padding: 4px 18px 12px; border-bottom: 1px solid #20262e; }
.sec-jumpbtn { font-family: var(--data); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--dim);
  background: none; border: 1px solid var(--iron); padding: 5px 9px; cursor: pointer; }
.sec-jumpbtn:hover { color: var(--bone); border-color: var(--dim); }
.sec-jumpbtn:focus-visible { outline: 2px solid var(--brass); outline-offset: 1px; }
.sec-head { padding: 22px 18px 8px; scroll-margin-top: 100px; border-bottom: 1px solid #20262e; }
.sec-title { display: flex; align-items: baseline; gap: 8px; }
.sec-head h3 { margin: 0; font-family: var(--data); font-size: 13px; letter-spacing: 0.08em; color: var(--brass); font-weight: 600; }
.sec-head .count { font-size: 11px; color: #8b8578; font-variant-numeric: tabular-nums; }
.row.changed .row-name::after, .ft-tile.changed .ft-tile-name::after { content: 'Changed'; margin-left: 8px; padding: 1px 5px;
  font-family: var(--data); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--brass);
  border: 1px solid rgba(201,162,39,0.6); vertical-align: 2px; }
.opt-preset .ft-segb { min-width: 64px; }
.opt-preset .ft-segb.custom { color: var(--brass); background: rgba(0,0,0,0.35); cursor: default; display: inline-flex; align-items: center; justify-content: center; }

/* the Features row */
.ft-tile { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, auto); column-gap: 16px; row-gap: 6px;
  align-items: center; padding: 11px 18px 11px 20px; border-bottom: 1px solid #20262e; }
.ft-tile::before { content: ''; position: absolute; left: 0; top: 10px; bottom: 10px; width: 3px; background: var(--iron); }
.ft-tile[data-on="1"]::before { background: var(--emerald); }
.ft-tile[data-locked="1"]::before { background: var(--brass); }
.ft-tile:hover { background: rgba(0,0,0,0.18); }
.ft-tile.sel { background: rgba(0,0,0,0.3); }
.ft-tile-main { grid-column: 1; min-width: 0; text-align: left; background: none; border: 0; padding: 0; color: inherit; font: inherit; cursor: pointer; }
.ft-tile-main:focus-visible { outline: 2px solid var(--brass); outline-offset: 2px; }
.ft-tile-name { font-size: 14px; color: var(--bone); line-height: 1.25; letter-spacing: 0; }   /* AUDIT FONT3 L4: a mod's "X by Author" on one line where it fits */
.ft-tile-meta { display: flex; flex-wrap: wrap; gap: 5px; align-items: center; margin-top: 5px; }
.ft-tile-meta .kind { font-size: 11px; padding: 1px 5px; }
.ft-tile-lock { font-family: var(--data); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--brass); }
.ft-tile-ctl { grid-column: 2; justify-self: end; max-width: 440px; }
.ft-tile-more, .ft-tile-drawer { grid-column: 1 / -1; }

/* the bar */
.ft-seg { display: flex; flex-wrap: wrap; background: var(--ink); border: 1px solid var(--iron); padding: 2px; gap: 2px; }
.ft-segb { font-family: var(--data); font-size: 11.5px; letter-spacing: 0.03em; color: var(--dim);
  background: none; border: 0; padding: 5px 10px; cursor: pointer; flex: 1 1 auto; white-space: nowrap; }
.ft-segb:hover:not(:disabled) { color: var(--bone); }
.ft-segb[aria-pressed="true"] { background: var(--iron); color: var(--bone); }
.ft-seg.locked .ft-segb[aria-pressed="true"] { color: var(--brass); }
.ft-seg.ft-seg-switch .ft-segb[aria-pressed="true"] { background: var(--emerald); color: var(--bone); }
.ft-seg.ft-seg-switch .ft-segb.off[aria-pressed="true"] { background: var(--cinnabar); color: var(--bone); }
.ft-segb:disabled { cursor: default; }
.ft-segb:focus-visible { outline: 2px solid var(--brass); outline-offset: -2px; }

/* the drawer's door, and the drawer */
.ft-tile-more { justify-self: start; font-family: var(--data); font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--dim); background: none; border: 0; padding: 2px 0; cursor: pointer; text-align: left; }
.ft-tile-more:hover { color: var(--bone); }
.ft-tile-car { display: inline-block; }
.ft-tile-car.open { transform: rotate(90deg); }
.ft-tile-drawer { border-top: 1px solid var(--iron); padding-top: 7px; display: flex; flex-direction: column; gap: 6px; }
.ft-drawer-label { font-family: var(--data); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--dim); }
.ft-chipset { display: flex; flex-wrap: wrap; gap: 4px; }
.ft-mchip { font-family: var(--data); font-size: 11px; background: var(--ink); color: var(--dim);
  border: 1px solid var(--iron); padding: 2px 6px; cursor: pointer; }
.ft-mchip[aria-pressed="true"] { color: var(--verdigris); border-color: var(--verdigris); }
.ft-mchip:hover { color: var(--bone); }
.ft-tile-drawer .row { padding: 4px 0; border: 0; }
.ft-tile-drawer .row-note, .ft-tile-drawer .row-sub { display: none; }   /* the help pane carries the words */
/* UXB1-F: a mod's keys on its row - read-only, the key in a dashed box (a
   key's face, not a button), and one press through to Controls. */
.ft-key { font-family: var(--data); font-size: 11px; letter-spacing: 0.08em; color: var(--bone);
  border: 1px dashed var(--iron); padding: 2px 8px; min-width: 28px; text-align: center; }
.ft-keys-to { align-self: flex-start; font-size: 11px; padding: 4px 10px; }

/* a Features row's card in the help pane */
.ft-card { display: flex; flex-direction: column; gap: 9px; }
.ft-rail-k { font-family: var(--data); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--dim); }
.ft-rail-note { font-size: 13px; line-height: 1.55; color: var(--bone); margin: 0; opacity: 0.9; }
.ft-rail-effect { font-size: 12px; line-height: 1.45; color: var(--dim); margin: 0;
  border-left: 2px solid var(--brass); padding-left: 8px; }
.ft-rail-kv { display: grid; grid-template-columns: auto 1fr; gap: 3px 10px; margin: 0;
  border-top: 1px solid var(--iron); padding-top: 8px; }
.ft-rail-kv dt { font-family: var(--data); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--dim); padding-top: 2px; }
.ft-rail-kv dd { margin: 0; font-size: 12px; color: var(--bone); opacity: 0.85; }

@media (max-width: 860px) {
  .ft-tile { grid-template-columns: minmax(0, 1fr); padding: 11px 14px 11px 16px; }
  .ft-tile-ctl { grid-column: 1; justify-self: stretch; max-width: none; }
  .opt-tools { padding: 8px 12px; }
  .sec-jump { top: 0; position: static; flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; padding: 6px 12px; }
  .sec-jump::-webkit-scrollbar { display: none; }
  .sec-jumpbtn { flex: none; white-space: nowrap; }
  .sec-head { scroll-margin-top: 60px; padding: 18px 14px 8px; }
  /* the help pane is a SHEET over the rows on a phone: the shell's see-through scrim let the rows read through it */
  .shell .detail { background: rgb(10,12,17); border-left: 0; }
}
/* the pause window: the list is narrower than the screen, so the bar goes under the words there too */
.px-setwrap .ft-tile { grid-template-columns: minmax(0, 1fr); }
.px-setwrap .ft-tile-ctl { grid-column: 1; justify-self: stretch; max-width: none; }
.px-setwrap .opt-tools { background: rgba(10,12,17,0.97); }
.px-setwrap .sec-head { padding: 14px 4px 6px; scroll-margin-top: 90px; }
.px-setwrap .sec-head h3 { font-size: 13px; }
.px-setwrap .opt-tools { padding: 8px 4px; }
.opt-note { padding: 8px 18px; font-size: 12.5px; color: var(--dim); }

/* -- FT16 (2026-09-15, Mac: "make the new feature UI elements have the
   same transparent design as the list we used to have") -----------
   Every component family on this screen has two paints: the base tokens above, and a .shell override for PX11, where
   the boot door stands on the live sky and every painted panel colour comes off (.shell .pane, .shell .list, .shell
   .row - transparent grounds, low-alpha scrims, and 2px rules in the brass line rather than 1px iron). The pause window
   is NOT in this scope: .px-win panels are opaque on purpose, there being a game behind them. A switch's filled
   segment (DISC23-C) outranks the translucent press below, so it reads the same on the shell as on the pause window. */
.shell .ft-tile { border-bottom: 2px solid rgba(125,116,96,0.3); }
.shell .ft-tile:hover { background: rgba(0,0,0,0.25); }
.shell .ft-tile-name { text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.shell .ft-seg { background: rgba(0,0,0,0.3); border: 2px solid rgba(125,116,96,0.35); }
.shell .ft-segb[aria-pressed="true"] { background: rgba(0,0,0,0.45); }
.shell .ft-mchip { background: rgba(0,0,0,0.3); border: 2px solid rgba(125,116,96,0.35); }
.shell .ft-mchip[aria-pressed="true"] { border-color: var(--verdigris); }
.shell .opt-search { background: rgba(0,0,0,0.3); border: 2px solid rgba(125,116,96,0.35); }   /* FT18: the search, in the shell's paint */
.shell .opt-tools { background: rgba(10,12,17,0.94); border-bottom: 2px solid rgba(125,116,96,0.35); }
.shell .ft-tile-drawer { border-top: 2px solid rgba(125,116,96,0.3); }
.shell .ft-rail-kv { border-top: 2px solid rgba(125,116,96,0.3); }
.shell .sec-jump { border-bottom: 2px solid rgba(125,116,96,0.35); }
.shell .sec-jumpbtn { border: 2px solid rgba(125,116,96,0.35); text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.shell .sec-head { border-bottom: 2px solid rgba(125,116,96,0.3); }
.shell .sec-head h3 { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }

/* ── OVH1: THE OVERHAULS (2026-09-24, Mac: "3 large panels ... directional arrows allowing you to switch being
   different feature sets") ─────────────────────────────────────────────────────────────────────────────────────
   Three tall cards side by side - a look for the world, one for its sounds, one for its screens - each a carousel of
   whole choices. The picture is the choice's own where it has one (a UI pack's art); otherwise an emblem in the
   display face. The left edge keeps the Features law: verdigris for the look in use, iron for one being browsed,
   brass for a mix of the player's own (Custom). Two columns, then one, as the screen narrows. */
.look-emptyline { font-family: var(--data); font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--dim); }
.look-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; align-items: stretch; }
.look-panel { position: relative; background: var(--slate); border: 1px solid var(--iron); padding: 14px 14px 14px 17px;
  display: flex; flex-direction: column; gap: 10px; min-width: 0; }
.look-panel::before { content: ''; position: absolute; left: 0; top: -1px; bottom: -1px; width: 3px; background: var(--iron); }
.look-panel[data-state="on"]::before { background: var(--verdigris); }
.look-panel[data-state="custom"]::before { background: var(--brass); }
.look-panel:focus-visible { outline: 2px solid var(--brass); outline-offset: 2px; }
.look-title { font-family: var(--data); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--bone); margin: 0; font-weight: 600; }
.look-pic { position: relative; aspect-ratio: 16 / 10; background: var(--ink); border: 1px solid var(--iron);
  display: grid; place-items: center; overflow: hidden; }
.look-pic img { width: 100%; height: 100%; object-fit: cover; display: block; }
.look-emblem { font-family: var(--brand); font-size: clamp(34px, 4.2vw, 56px); color: var(--bone); opacity: 0.9;
  line-height: 1; text-align: center; padding: 0 10px; }
.look-emblem small { display: block; font-family: var(--data); font-size: 11px; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--dim); margin-top: 10px; }
.look-pic[data-look="enhanced"] .look-emblem, .look-pic[data-look="enhanced-plus"] .look-emblem { color: var(--verdigris); }   /* AUDIT MERGE-PLUS D8: the UI panel's card is enhanced-plus now (PLUS-ONLY); the sound panel's stays enhanced */
.look-badge { position: absolute; top: 8px; left: 8px; font-family: var(--data); font-size: 11px; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--ink); background: var(--verdigris); padding: 2px 6px; }
.look-nav { display: grid; grid-template-columns: 40px minmax(0, 1fr) 40px; align-items: center; gap: 8px; }
.look-arrow { font-family: var(--display); font-size: 28px; line-height: 1; color: var(--bone); background: var(--ink);
  border: 1px solid var(--iron); height: 40px; cursor: pointer; }
.look-arrow:hover { border-color: var(--dim); }
.look-arrow:focus-visible { outline: 2px solid var(--brass); outline-offset: 1px; }
.look-arrow:disabled { opacity: 0.3; cursor: default; }
.look-name { font-family: var(--display); font-size: 22px; color: var(--bone); text-align: center; line-height: 1.1;
  overflow-wrap: anywhere; }
.look-by { font-family: var(--data); font-size: 11px; color: var(--dim); text-align: center; margin-top: 3px; }
.look-dots { display: flex; justify-content: center; gap: 5px; margin-top: 6px; }
.look-dot { width: 6px; height: 6px; background: var(--iron); }
.look-dot.at { background: var(--bone); }
.look-dot.on { outline: 1px solid var(--verdigris); outline-offset: 1px; }
.look-blurb { font-size: 13px; line-height: 1.5; color: var(--bone); opacity: 0.85; margin: 0; flex: 1; }
.look-use { align-self: stretch; }
.look-use:disabled { opacity: 0.6; cursor: default; }
.look-note { font-size: 12px; line-height: 1.45; color: var(--dim); margin: 0; border-left: 2px solid var(--brass); padding-left: 8px; }
@media (max-width: 1100px) { .look-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 720px) { .look-grid { grid-template-columns: minmax(0, 1fr); } .look-pic { aspect-ratio: 16 / 7; } }
@media (pointer: coarse) { .look-arrow { height: 44px; } .look-nav { grid-template-columns: 44px minmax(0, 1fr) 44px; } }
.shell .look-panel { background: none; border: 2px solid rgba(125,116,96,0.3); }
.shell .look-panel::before { left: -2px; top: -2px; bottom: -2px; }
.shell .look-pic { background: rgba(0,0,0,0.35); border: 2px solid rgba(125,116,96,0.35); }
.shell .look-arrow { background: rgba(0,0,0,0.3); border: 2px solid rgba(125,116,96,0.35); }
.px-sys .look-grid { grid-template-columns: minmax(0, 1fr); }
/* ── LV2: THE RISING ── the enhanced level-up notification. Mac:
   "Next up, I want to implement a new element. The enhanced level up
   notification", with the window deferred - "Notify, then you choose".

   WHERE IT SITS, AND WHY NOT WHERE THE REFERENCE PUTS IT. Skyrim's
   notification is top-centre; this HUD's top-centre is taken by the
   compass strip at 18 (and was, until ENH-NOTICE3 moved PopupText's
   rows to the right-edge notice stack, by the popup column under it,
   which is where every other line in the game arrived). So it goes
   where THIS hud already puts what is happening to YOU: above
   the bottom block, with the vitals and the quickslots, growing
   upward from a fixed foot so a flurry of skill rows never walks down
   into them.

   It is pointer-transparent like the rest of the HUD (the key is the
   way in, and a pointer-locked player has no cursor to click with
   anyway - ui/player/pointerLock.js's whole subject). */
/* THE STRIP HANGS IN \`.hud-bottom\`, above every row the HUD carries -
   see ui/levelNotice.js's rehome and AUDIT LV2 F4. These are the
   FALLBACK's numbers, for the frame before the HUD host exists: a
   body-level strip needs a place, and 150px clears an empty block. The
   rule below takes over the moment it is home, and inside the column
   no number here is consulted. */
#enhanced-levelnotice {
  position: fixed; left: 50%; bottom: 150px; transform: translateX(-50%);
  z-index: 4; pointer-events: none;
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  font-family: ${M}; -webkit-font-smoothing: none;
  font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.85);
  max-width: min(560px, 92vw);
}
.lv-note {
  display: flex; align-items: center; gap: 10px;
  padding: 5px 14px; color: #d8cfae;
  background: rgba(10,12,17,0.55); border: 2px solid rgba(125,116,96,0.55);
}
.lv-note-gem { font-size: 15px; line-height: 1; color: #9c937d; }
.lv-note-body { display: flex; align-items: baseline; gap: 10px; min-width: 0; }
.lv-note-title { font-size: 15px; letter-spacing: 0.16em; text-indent: 0.16em; text-transform: uppercase; }
.lv-note-sub { font-size: 17px; color: #d8cfae; }
/* The key the level's row names, in the plate the controls pane uses
   for a binding - it IS a binding, and a player who has seen it there
   reads it here without being told. */
.lv-note-key {
  font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
  color: #9c937d; border: 2px solid rgba(125,116,96,0.45); padding: 1px 7px;
}
/* THE LEVEL'S ROW WEARS THE CLASSIC GOLD PAIR, because it is the one
   row that is asking for something. A skill line reports; this one
   invites. */
.lv-note-level { border-color: rgb(243,239,44); }
.lv-note-level .lv-note-gem,
.lv-note-level .lv-note-title { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.lv-note-level .lv-note-sub { font-size: 19px; color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.lv-note-level .lv-note-key { color: #d8cfae; border-color: rgba(243,239,44,0.55); }
/* A MASTERY is the rarest thing this strip ever says - a primary skill
   at 100, once per skill per character - so it is the only row that
   takes the brass. */
.lv-note-mastery { border-color: var(--brass); }
.lv-note-mastery .lv-note-gem, .lv-note-mastery .lv-note-title { color: var(--brass); }
/* STANDING: the announcement has had its moment and the level is still
   unspent, so the row folds down to a quiet reminder that stays. It is
   the same element, not a second one - a reminder drawn somewhere else
   is a second thing to keep in step with the first. */
.lv-note.lv-standing { padding: 3px 10px; background: rgba(10,12,17,0.42); border-color: rgba(125,116,96,0.4); }
.lv-note.lv-standing .lv-note-title { font-size: 12px; letter-spacing: 0.2em; text-indent: 0.2em; }
.lv-note.lv-standing .lv-note-sub { font-size: 13px; }
.lv-note.lv-standing .lv-note-gem { font-size: 12px; }
.lv-note.lv-standing.lv-note-level { border-color: rgba(243,239,44,0.55); }
/* ...AND AT HOME IT IS A ROW LIKE THE OTHERS. The column places it,
   the column's own transform scales it, and the block's height - which
   changes with the breath bar and the Renown row (UI3: the effect chips
   and the needs strip are the status widget's now, not the column's) -
   is the flex box's business and not a constant in this sheet. The
   gap is \`.hud-bottom\`'s 10px, so it stands off the rows the same
   distance they stand off each other. */
/* LV3: THE LEVEL'S ROW IS A BUTTON where there is a key to press (ui/levelNotice.js rowNode). The strip is
   pointer-events:none so it never eats a click meant for the world; this one row opts back in. */
button.lv-note.lv-clickable {
  font: inherit; text-align: inherit; text-shadow: inherit; letter-spacing: inherit;
  cursor: pointer; pointer-events: auto; -webkit-appearance: none; appearance: none;
}
button.lv-note.lv-clickable:hover, button.lv-note.lv-clickable:focus-visible {
  background: rgba(40,36,12,0.72); border-color: rgb(243,239,44); outline: none;
}
.hud-bottom > #enhanced-levelnotice {
  position: static; transform: none; left: auto; bottom: auto; z-index: auto;
}
@media (max-width: 720px) {
  #enhanced-levelnotice { bottom: 128px; gap: 3px; max-width: 94vw; }
  .lv-note { padding: 4px 10px; gap: 8px; }
  .lv-note-title { font-size: 13px; letter-spacing: 0.1em; text-indent: 0.1em; }
  .lv-note-sub { font-size: 15px; }
  .lv-note-level .lv-note-sub { font-size: 16px; }
}
@media (max-height: 620px) {
  #enhanced-levelnotice { bottom: 118px; }
}

/* ── ENH-NOTICE1: THE NOTICE PANEL (ui/enhancedNotice.js) ── DFU's
   click-anywhere message box, the enhanced way: a panel that slides in
   from the RIGHT edge instead of the parchment in the middle. The
   stack is pointer-transparent so the click that dismisses the box
   lands on the canvas as it always has (ClickAnywhereToClose is the
   box's law, not the panel's); the panel itself is the words, a rule
   and the one-line hint. Two boxes at once stack downward, newest
   last, each with its own slide. AUDIT ENH-NOTICE3 A1: the stack is
   capped at 90vh and CLIPS what will not fit (a short viewport under
   eight toasts and a box spilled the last toast off the screen); the
   boxes stand first, so what is lost is the newest toast. */
.notice-stack {
  position: fixed; right: var(--ui-pillar, 0px); top: 50%; transform: translateY(-50%);   /* RETRO-UI: at the picture's edge, inside retro mode's pillarbox */
  z-index: 31; pointer-events: none;
  display: flex; flex-direction: column; align-items: flex-end; gap: 10px;
  max-width: min(520px, 70vw); max-height: 90vh; overflow: hidden;
  font-family: ${M}; -webkit-font-smoothing: none;
  font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0;
  color: #d8cfae; text-shadow: 2px 2px 0 rgba(0,0,0,0.85);
}
/* THE SLIDE: appended a full width off the right edge, the \`notice-in\`
   class carries it to rest; \`notice-out\` sends it back the way it came
   and the module removes the node after the transition's length
   (NOTICE_SLIDE_MS - keep the two in step, and keep the out-curve
   plain: a back-loaded bezier left the panel half-way out when the
   node was taken, measured in the headless browser). */
/* NOTICE-FIT (2026-09-22, kurkku: "I think we also need the sizing of
   the boxes to properly adjust for the text instead of always being
   wide"): THE PANEL IS AS WIDE AS WHAT IT SAYS. This carried a FIXED
   \`width\`, so "You are healthy." and a four-paragraph quest box were
   the same slab - and at the right edge, where the panel is read
   against the world behind it, the empty half is the thing the eye
   reads first. A flex item under \`align-items: flex-end\` with no width
   is already shrink-to-fit, so the cap alone is the whole law: the
   rows set the width, wrapping only once they reach it. The HINT sets
   a floor of its own (one short uppercase line) and a box never
   narrows past it, which is what keeps a one-word box from becoming a
   sliver; a toast wears no hint and hugs its line. */
.notice {
  box-sizing: border-box; max-width: min(520px, 70vw);
  padding: 14px 20px 10px 18px;
  background: rgba(10,12,17,0.9); border: 2px solid rgba(125,116,96,0.6); border-right: 0;
  border-left: 4px solid var(--brass);
  transform: translateX(110%); opacity: 0;
  transition: transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 200ms ease-out;
}
.notice.notice-in { transform: translateX(0); opacity: 1; }
/* OW-NOTICES (2026-09-29, the player: "the notifications on the right side go into the box"): under the Overworld its
   block stands at the right edge (ui/travelViewHud.js publishBlock) - the stack stands clear of it: at the foot, its own
   foot over the block's top and growing upward; on a touch screen (the block at the top) from under the block down. */
/* OW-NOFLASH (2026-09-29, the player: "when i click to move out of not moving somewhere the old topscreen travel screen
   popsup for a fraction of a seconds"): a journey's bar is built at the top of the screen and docked into the block on
   the view's next frame - while the block stands, the bar is never seen anywhere but docked in it. */
:root[data-tview-block] #enhanced-travel > .travelpanel-bar, :root[data-tview-block] #enhanced-travel > .travelpanel-msg { visibility: hidden; }
:root[data-tview-block="foot"] .notice-stack { top: auto; transform: none;
  bottom: calc(100vh - var(--tview-block-top, 50vh) + 12px); max-height: calc(var(--tview-block-top, 50vh) - 24px); }
:root[data-tview-block="top"] .notice-stack { transform: none;
  top: calc(var(--tview-block-bottom, 0px) + 12px); max-height: calc(100vh - var(--tview-block-bottom, 0px) - 24px); }
.notice.notice-out { transform: translateX(110%); opacity: 0; transition-timing-function: ease-in, ease-in; }
.notice-body { display: flex; flex-direction: column; gap: 2px; max-height: 70vh; overflow: hidden; }
.notice-row { font-size: 15px; line-height: 1.35; min-height: 1.35em; white-space: pre-wrap; overflow-wrap: anywhere; }
.notice-row.center { text-align: center; }
/* SetHighlightColor's row (AUDIT 64 F28/F35): the parchment reads it in
   the caller's colour, the panel in the blood the sheet already
   keeps for a warning. */
.notice-row.highlight { color: var(--blood); }
/* A tab-stopped row (the status box's columns): the cells keep their
   columns as a grid keeps them, the parchment's x-stops become gaps. */
.notice-row.cells { display: flex; gap: 1.2em; }
.notice-cell { white-space: nowrap; }
.notice-cell:first-child { min-width: 7em; }
.notice-hint {
  margin-top: 10px; padding-top: 6px; border-top: 1px solid rgba(125,116,96,0.35);
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #9c937d;
  text-align: right;
}
/* ENH-NOTICE3: A TOAST - one PopupText row (DaggerfallUI.AddHUDText:
   a Climates & Calories line, an ambient line, a skill-up, a loot
   tally) in the same stack, timed by PopupText's own timer and never
   dismissed, so it wears no hint and a quieter edge than the box the
   player must answer: the popup column's yellow (nativePanel
   DEFAULT_TEXT_COLOR rgb(243,239,44)) on the box's dark, so the two
   kinds read apart at a glance. */
.notice.notice-toast {
  padding: 8px 18px 8px 14px; border-left-color: rgba(243,239,44,0.55);
  background: rgba(10,12,17,0.82);
}
.notice.notice-toast .notice-row { font-size: 14px; color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); text-align: center; }
/* GUIDE3: THE HERALD'S NOTICE (ui/questHerald.js) - a quest's news as one
   toast of three rows, read at a glance, so three weights are the whole
   design: what happened in the sheet's small brass caps, to which quest in
   the toast's own yellow, and the one thing to know (the new entry's
   opening, the time left) in the box's quiet bone, capped to a readable
   measure. A main-quest title wears the brass beside it. */
.notice.notice-toast .notice-row.herald-kind { font-size: 11px; line-height: 1.5; letter-spacing: 0.16em; text-transform: uppercase; color: var(--brass); text-shadow: 1px 1px 0 rgba(0,0,0,0.85); }
.notice.notice-toast .notice-row.herald-title.main { color: #e8c170; }
.notice.notice-toast .notice-row.herald-line { font-size: 13px; color: #d8cfae; text-shadow: 2px 2px 0 rgba(0,0,0,0.85); max-width: 30em; margin: 0 auto; }
/* GUIDE4: THE TRACKER'S CARD (ui/questTracker.js) - the quest the HUD
   follows, at the right-upper edge on the party list's own line (92, which
   clears the FPS read-out; ui/partyPanel.js steps under it by the height
   the card publishes). Read against the world, so it is right-aligned to
   its edge on a plate that fades out toward the middle of the screen, and
   quiet: the title in bone (a main quest's in brass), the entry's opening
   in the dim, where it points after the lens's place mark, and the time
   left in the journal's own words, gold under a day as the journal's is.
   A touch screen keeps the party list's 76; a phone takes it under the
   compass and the foe blade; a short screen keeps the title and the time. */
.qtrack {
  position: fixed; right: calc(8px + var(--ui-pillar, 0px) + env(safe-area-inset-right, 0px)); top: calc(92px + env(safe-area-inset-top, 0px));   /* RETRO-UI */
  z-index: 5; pointer-events: none; box-sizing: border-box; width: 260px; max-width: calc(100vw - 16px);
  display: flex; flex-direction: column; gap: 2px; padding: 5px 10px 6px 18px; text-align: right;
  /* AUDIT GUIDE U9: the toast's own plate (0.82) - at 0.6 the dim rows fell under 4.5:1 over a bright sky or snow */
  background: linear-gradient(90deg, rgba(10,12,17,0) 0%, rgba(10,12,17,0.82) 32%);
  border-right: 3px solid rgba(192,138,62,0.75);
  font-family: ${M}; -webkit-font-smoothing: none;
  font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0;
  color: #d8cfae; text-shadow: 2px 2px 0 rgba(0,0,0,0.85);
  /* AUDIT GUIDE U8: where the compass ends at the HUD's own scale (ui/questTracker.js copies --hud-scale here) - the
     travel panel's --tp-top sum, less its gap - so a scaled-up compass or foe frame never stands on the card */
  --qt-clear: calc(18px + 28px * var(--hud-scale, 1) + 30px);
}
.qtrack.touch { top: calc(max(76px, var(--qt-clear)) + env(safe-area-inset-top, 0px)); }
@media (max-width: 900px) {
  body:has(.hud-foe.on) .qtrack { --qt-clear: calc(18px + 28px * var(--hud-scale, 1) + 30px + 46px * var(--hud-scale, 1)); }
  body:has(.hud-foe.on.blade) .qtrack { --qt-clear: calc(18px + 28px * var(--hud-scale, 1) + 30px + 76px * var(--hud-scale, 1)); }
  /* TELL9: the poise track under it - its 6px, its border and its 4px gap more; AUDIT TELL U3: and its word under it,
     13px and a 3px gap */
  body:has(.hud-foe.on.poised) .qtrack { --qt-clear: calc(18px + 28px * var(--hud-scale, 1) + 30px + 74px * var(--hud-scale, 1)); }
  body:has(.hud-foe.on.blade.poised) .qtrack { --qt-clear: calc(18px + 28px * var(--hud-scale, 1) + 30px + 104px * var(--hud-scale, 1)); }
}
/* AUDIT GUIDE T1/D1, U1, U7: the card steps aside - keeping its line, so the party list never jumps - for what stands
   in its corner a while: the Overworld's block at the top of a touch screen, a narrow screen's chat lines, a journey's
   junction disc */
:root[data-tview-block="top"] .qtrack,
body:has(.travelpanel-junction.show) .qtrack { visibility: hidden; }
@media (max-width: 720px) { body:has(.dfchat-peek:not(:empty)) .qtrack { visibility: hidden; } }
/* AUDIT PRE-MERGE 1003 U4: ...and for a bout's versus bar (ui/arenaHud.js, 560 wide, centred under the compass) on a
   screen too narrow for both - 1100 and under, the bar's half and the card's 268 from the edge - where the bar stood on
   the card on every phone and up to 1024 */
@media (max-width: 1100px) { body:has(.arena-hud.on) .qtrack { visibility: hidden; } }
/* AUDIT PRE-MERGE 1003b M2: and inside retro mode's pillarbox, by the picture's width (enhancedHud.js wearUiPillar) */
:root[data-ui-narrow] body:has(.arena-hud.on) .qtrack { visibility: hidden; }
/* AUDIT GUIDE U10: under forced colours a background image goes; the card keeps a plate of the system's own */
@media (forced-colors: active) { .qtrack { background-color: Canvas; } }
.qtrack-head { display: flex; justify-content: flex-end; align-items: baseline; gap: 6px; }
.qtrack-mark { font-size: 11px; color: var(--brass); }
.qtrack-title { font-size: 14px; line-height: 1.3; color: #e9e4d9; }
.qtrack.main .qtrack-title { color: #e8c170; }
.qtrack-line { font-size: 12px; line-height: 1.3; color: #cdc3a7;
  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }   /* the cap (TRACKER_OPENING_MAX) keeps it to two; a wide face wraps to three, and a clamp at two cut it mid-word - seen in Chromium */
.qtrack-where { font-size: 12px; line-height: 1.3; color: #d6b36b; }
.qtrack-where::before { content: '\\25c8'; content: '\\25c8' / ''; margin-right: 5px; }   /* AUDIT GUIDE U18 */
/* GUIDE5: a place the entry names but the player's map does not hold - no mark; the talk arc's answer, quietly */
.qtrack-note { font-size: 11px; line-height: 1.3; color: #b0a993; font-style: italic; }   /* AUDIT GUIDE U9: lighter dim rows */
.qtrack-time { font-size: 12px; letter-spacing: 0.08em; color: #c5bda2; }
.qtrack.urgent .qtrack-time { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
/* the journal's Track toggle (ui/questTracker.js trackButton): pressed, it wears the card's brass edge and the card's
   filled diamond - AUDIT GUIDE T6/U13: its word never changes; the diamond is drawn, not read (its alt text empty) */
.qtrack-pinbox { display: inline-flex; align-items: center; gap: 8px; }
.act.qtrack-pin.on { color: var(--brass); border-color: rgba(192,138,62,0.75); }
.act.qtrack-pin.on::before { content: '\\25c6 '; content: '\\25c6 ' / ''; }
/* AUDIT GUIDE U14: the quest the HUD follows, said where the choice is made */
.qtrack-on { font-size: 11px; letter-spacing: 0.08em; color: var(--brass); }
.qtrack-on:empty { display: none; }
@media (max-width: 560px) {
  .qtrack, .qtrack.touch { top: calc(max(104px, var(--qt-clear)) + env(safe-area-inset-top, 0px)); width: min(260px, calc(100vw - 16px)); }
}
@media (max-height: 500px) {
  .qtrack-line, .qtrack-where, .qtrack-note { display: none; }
}
/* AUDIT GUIDE H8: a short screen keeps the herald's kind and title - its stack is capped at 90vh and a three-row notice
   was clipped whole, or clipped the HUD's own lines beside it */
@media (max-height: 520px) {
  .notice.notice-toast .notice-row.herald-line { display: none; }
}
/* AUDIT GUIDE H3: the herald's own voice - read, never seen */
.qherald-live { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden;
  clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap; border: 0; }
/* AUDIT HCC U5: THE FIELD'S OWN WINDOW (ui/enhancedInputBox.js) - DaggerfallInputMessageBox in the skin's face.
   ENH-NOTICE1's law: a field is a decision, not a notice, so it is not in the right-edge stack; it stands where the
   player looks while typing - centred, or at the top for showAtTopOfScreen - in the box's own panel and rule. It
   takes no pointer (the keys are the host's, routed to the box), and sits on the notice stack's rung. */
.inputbox {
  position: fixed; left: 50%; top: 46%; transform: translate(-50%, -50%); z-index: 31; pointer-events: none;
  box-sizing: border-box; min-width: min(340px, 88vw); max-width: min(520px, 88vw);
  padding: 14px 20px 10px 18px;
  background: rgba(10,12,17,0.92); border: 2px solid rgba(125,116,96,0.6); border-left: 4px solid var(--brass);
  font-family: ${M}; -webkit-font-smoothing: none;
  font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0;
  color: #d8cfae; text-shadow: 2px 2px 0 rgba(0,0,0,0.85);
}
.inputbox.top { top: 8px; transform: translateX(-50%); }
/* UXB1-M: DaggerfallMessageBox's YesNo in the skin's face (ui/yesNoBox.js) -
   the input box's panel, but a decision the pointer answers: it TAKES
   pointer events, and its two buttons stand under the question, No marked
   as the default Return presses. */
.inputbox.yesnobox { pointer-events: auto; }
.yesnobox-acts { display: flex; justify-content: center; gap: 12px; margin: 6px 0 2px; }
.yesnobox-acts .act { min-width: 96px; min-height: 40px; text-align: center; }
.inputbox-rows { display: flex; flex-direction: column; gap: 2px; margin-bottom: 8px; }
.inputbox-field {
  font-size: 15px; line-height: 1.35; white-space: pre; overflow: hidden;
  padding: 4px 8px; border: 1px solid rgba(125,116,96,0.6); background: rgba(0,0,0,0.35);
}
.inputbox-label { color: #a89c7a; }
.inputbox-caret { display: inline-block; width: 0.55em; height: 1.1em; vertical-align: text-bottom;
  border-bottom: 2px solid var(--brass); animation: inputbox-caret 1s steps(1) infinite; }
@keyframes inputbox-caret { 50% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .inputbox-caret { animation: none; } }
@media (max-width: 720px) {
  .notice-stack { max-width: 88vw; gap: 6px; }
  .notice { max-width: 88vw; padding: 10px 14px 8px 12px; }   /* NOTICE-FIT: the phone's cap, still a cap */
  .notice.notice-toast { padding: 6px 12px 6px 10px; }
  /* AUDIT ENH-NOTICE3 A6: the toast rule (0-2-1) outranked these
     blocks' bare .notice-row (0-1-0), so a toast stayed 14px on a
     phone while the box beside it dropped to 13 - the panel merely
     read set larger than the one to answer. */
  .notice-row, .notice.notice-toast .notice-row { font-size: 13px; }
  .notice-cell:first-child { min-width: 5em; }
}
@media (max-height: 520px) {
  .notice-body { max-height: 60vh; }
  .notice-row, .notice.notice-toast .notice-row { font-size: 13px; line-height: 1.25; }
}

/* ── LV1: THE ASCENSION ── the level-up window, on the sky the enhanced
   skin already stands on (ui/pixelGround.js). Mac's brief: Skyrim's
   level-up screen "in our own constellation vision".

   THE LAYOUT IS A COLUMN AND NOT A WINDOW. Every other enhanced screen
   is a .px-win framed panel over the paused game, because every other
   screen is a thing you OPEN. This one is a thing that HAPPENS to you:
   the game has stopped to tell you something, and a frame around it
   would put it in the same class as the inventory. The reference does
   the same - Skyrim's level-up is the whole screen, no window at all -
   and it is why the sky is opaque here rather than the pause scrim.

   WHOLE PIXELS AND NO TWEENS, per the .px-home block above: states
   snap, the gold pair is the classic shadowed label, and the only
   motion on screen is the sky's own 8fps dither. */
.lv-sky { position: fixed; inset: 0; overflow: hidden; z-index: 14;
  display: grid; grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto auto minmax(0,1fr) auto auto auto;
  align-content: stretch; }
/* EVERY BAND MAY SHRINK. A grid item's default min-width is auto - its
   MIN-CONTENT - so the ribbon, which is a scroller with thirty-five
   skills in it, sized the whole column at 1776px inside a 1400px
   window: the race cell and the Ascend button were both drawn off the
   right-hand edge, on a screen whose only button that one is. Caught by
   the geometry probe, which is why it measures boxes rather than
   reading text. */
.lv-sky > * { min-width: 0; }
.lv-sky .px-ground, .lv-sky .px-vignette { position: absolute; }
/* Every band of the column sits over the sky, not in it. */
.lv-crown, .lv-plate, .lv-stage, .lv-choice, .lv-ribbonwrap, .lv-foot { position: relative; z-index: 1; }
/* EVERY BAND OWNS ITS ROW. The grid above has six tracks for six bands,
   and the flexible one (minmax(0,1fr)) is the STAGE's. The plate is
   display:none on a screen that owes no points (ASCEND-ANYTIME's "Your
   stars"), and a display:none item leaves the grid entirely - so with
   auto-placement every band after it slid up a track: the stage took an
   auto row and the CHOICE landed in the 1fr row, where minmax(0,...)
   let it shrink below its own content and paint over the skill ribbon.
   Pinning the rows makes the plate's row an empty auto track (0px)
   instead of a reshuffle. */
.lv-crown { grid-row: 1; }
.lv-plate { grid-row: 2; }
.lv-stage { grid-row: 3; }
.lv-choice { grid-row: 4; }
.lv-ribbonwrap { grid-row: 5; }
.lv-foot { grid-row: 6; }

/* THE CROWN: name | level | race, the three the classic sheet leads
   with (DaggerfallCharacterSheetWindow.cs:134-204) and the three
   Skyrim's own rail carries. Rules above and below, nothing boxed. */
.lv-crown { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;
  gap: 18px; padding: 14px 26px 12px; border-bottom: 2px solid rgba(125,116,96,0.45); }
.lv-crown .k { color: #9c937d; font-size: 13px; letter-spacing: 0.22em; text-indent: 0.22em;
  text-transform: uppercase; display: block; margin-bottom: 2px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.lv-crown .v { font-size: 22px; letter-spacing: 0.06em; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.lv-crown .lv-race { text-align: right; }
.lv-level { text-align: center; min-width: min(360px, 46vw); }
.lv-level .lv-jump { font-size: 26px; letter-spacing: 0.1em; white-space: nowrap;
  color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.lv-level .px-meter { margin-top: 6px; }
.lv-level .lv-barnote { color: #9c937d; font-size: 12px; letter-spacing: 0.12em;
  text-transform: uppercase; margin-top: 4px; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }

/* THE PLATE: what is left to spend. Skyrim's "Perks to increase: 12"
   sits in exactly this slot, and it is the number this screen is
   about, so it is the largest thing on it after the figure. */
.lv-plate { text-align: center; padding: 12px 20px 6px; }
.lv-plate .lv-count { font-size: 40px; line-height: 1; letter-spacing: 0.06em;
  color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.lv-plate .lv-countk { display: block; color: #9c937d; font-size: 13px; letter-spacing: 0.22em;
  text-indent: 0.22em; text-transform: uppercase; margin-top: 4px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.lv-plate.spent .lv-count { color: #d8cfae; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.lv-refuse { color: var(--ruby); font-size: 15px; letter-spacing: 0.06em; margin: 6px 0 0;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.lv-hint { color: #d8cfae; font-size: 14px; margin: 3px 0 0; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }

/* THE FIGURE. The stage is a fixed 100x62 coordinate space
   (STAR_FIGURE.box) laid out as an aspect box, so the lines and the
   stars read the SAME numbers - ui/levelingChoice.js's law about a
   picture and its hit test, applied to a drawing that has both in one
   element tree. */
.lv-stage { display: flex; align-items: center; justify-content: center; padding: 6px 20px; min-height: 0; }
.lv-figure { position: relative; width: min(880px, 92vw); aspect-ratio: 100 / 62; max-height: 100%; }
.lv-lines { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.lv-lines line { stroke: rgba(125,116,96,0.55); stroke-width: 0.35; }
.lv-lines line.lit { stroke: rgb(243,239,44); stroke-width: 0.45; }
/* THE ANCHOR IS THE GEM, NOT THE BOX. A star is a diamond with a name
   and a number stacked under it, so centring the whole BOX on the
   figure's point ran every line through the labels and left the gems
   floating above them - the drawing said the lines connected the
   words. Translating by half a gem instead puts the diamond itself on
   the point, which is what a constellation is: the lines meet at the
   stars. */
.lv-star { position: absolute; transform: translate(-50%, calc(-1 * var(--lv-anchor, 15px)));
  display: flex; flex-direction: column; align-items: center; gap: 1px;
  min-width: 68px; min-height: 44px; padding: 4px 8px;
  font: inherit; color: #d8cfae; background: none; border: 0; cursor: pointer;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); transition: none; }
.lv-star .lv-gem { font-size: 20px; line-height: 1; color: #d8cfae; }
.lv-star .lv-name { font-size: 12px; letter-spacing: 0.16em; text-indent: 0.16em; text-transform: uppercase; color: #9c937d; }
.lv-star .lv-val { font-size: 19px; letter-spacing: 0.04em; }
.lv-star .lv-delta { font-size: 13px; color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.lv-star:hover, .lv-star:focus-visible { outline: none; color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.lv-star:hover .lv-name, .lv-star:focus-visible .lv-name { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.lv-star.on { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.lv-star.on .lv-name { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.lv-star.on .lv-gem, .lv-star.raised .lv-gem { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
/* A RAISED star wears a ring of its own, so the figure still says what
   was spent when the focus has moved on. */
.lv-star.raised { color: rgb(243,239,44); }
.lv-star.full .lv-val { color: #9c937d; }

/* THE CHOICE: the focused star, spelled out, with the two presses.
   The mod's HIDE-DO-NOT-GREY rule is the STARS' business (a star with
   no legal press simply does not light); these two are the window's
   furniture and stay put, dimmed, because a button that vanishes under
   the pointer is worse than one that says no - ui/virtueLevelUp.js's
   own words for its own pair. */
.lv-choice { display: flex; flex-direction: column; align-items: center; gap: 6px;
  padding: 4px 20px 10px; }
.lv-ask { color: #9c937d; font-size: 14px; letter-spacing: 0.2em; text-indent: 0.2em;
  text-transform: uppercase; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.lv-pick { display: flex; align-items: center; gap: 10px; }
.lv-pick .lv-arrow, .lv-pick .lv-press { font: inherit; font-size: 22px; line-height: 1;
  min-width: 48px; min-height: 44px; color: #d8cfae; background: none;
  border: 2px solid rgba(125,116,96,0.55); cursor: pointer;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); transition: none; }
.lv-pick .lv-arrow:hover, .lv-pick .lv-press:hover,
.lv-pick .lv-arrow:focus-visible, .lv-pick .lv-press:focus-visible {
  outline: none; color: rgb(243,239,44); border-color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.lv-pick .lv-press[disabled] { color: #4a463d; border-color: rgba(125,116,96,0.25); cursor: not-allowed; }
.lv-pick .lv-press[disabled]:hover { color: #4a463d; border-color: rgba(125,116,96,0.25); text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.lv-pickname { min-width: min(320px, 60vw); text-align: center; }
.lv-pickname .n { display: block; font-size: 26px; letter-spacing: 0.12em; text-indent: 0.12em;
  text-transform: uppercase; color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.lv-pickname .f { display: block; font-size: 17px; margin-top: 2px; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.lv-pickname .c { display: block; font-size: 12px; color: #9c937d; letter-spacing: 0.14em;
  text-transform: uppercase; margin-top: 2px; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
/* ASCEND-LIVE: a star wears what the character HAS, in the two colours the
   classic sheet gives a live value above or below its permanent one
   (DaggerfallUnityStatIncreasedTextColor / StatDrainedTextColor -
   ui/charsheet.js STAT_INCREASED_COLOR, STAT_DRAINED_COLOR), and the line
   over its blurb says so in words. The tint outranks a RAISED star's gold
   (a point spent where it cannot show must still read as the bonus's) and
   yields to a FULL star's grey (a star that takes no point says that
   first) - by specificity, not by which sheet came last (AUDIT 28e). */
.lv-star.boosted:not(.full) .lv-val { color: rgb(178,207,255); text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
.lv-star.lowered:not(.full) .lv-val { color: rgb(190,85,24); text-shadow: 2px 2px 0 rgba(0,0,0,0.8); }
/* THE LINE: one line, never two - it sits over the blurb in the
   attribute's own cell (.lv-about, below). */
.lv-live { height: 1.3em; line-height: 1.3em; font-size: 13px; white-space: nowrap; overflow: hidden;
  text-overflow: ellipsis; color: rgb(178,207,255); text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.lv-live.lowered { color: rgb(190,85,24); }
.lv-live:empty { display: none; }
.lv-blurb { color: #c5bda2; font-size: 16px; line-height: 1.5; margin: 2px 0 0; max-width: 62ch;
  text-align: center; text-shadow: 2px 2px 0 rgba(0,0,0,0.8); display: grid; }
/* The eight in one cell, the chosen one seen: the band's height is the
   tallest's, whichever is chosen (AUDIT 28e). */
.lv-blurb > .lv-about { grid-area: 1 / 1; min-width: 0; visibility: hidden; }
.lv-blurb > .lv-about.on { visibility: visible; }
.lv-about > p { margin: 0; }
/* On a phone, or a screen with no height to spare, the line takes its
   blurb's place rather than a line of its own, so a cursed character's
   column is as tall as anyone's - at 360 wide a line's 17px was a figure
   whose stars overlapped, and at 844x390 it pushed Ascend, the one way
   out, below the screen (AUDIT 28e). */
@media (max-width: 480px), (max-height: 620px) {
  .lv-about:has(> .lv-live:not(:empty)) > p { display: none; }
}
/* In the blurb's place on a narrow phone it may take the blurb's two
   lines (at 320 wide one line cut "won't show" off). */
@media (max-width: 480px) {
  .lv-live { height: auto; max-height: 2.6em; white-space: normal; }
}
/* ...and with no height to spare a blurb is one line, so the stacked
   eight cost no more than the shortest did - and so is the line, even on
   a narrow phone (after the rule above, so this one holds). */
@media (max-height: 620px) {
  .lv-about > p { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .lv-live { height: 1.3em; max-height: none; white-space: nowrap; }
}

/* THE RIBBON: the skills, and what each did for this level. Skyrim
   scrolls its skills across the foot of the sky; ours does the same,
   and the focused one is the one that is spelled out beneath. */
.lv-ribbonwrap { border-top: 2px solid rgba(125,116,96,0.45); padding: 8px 0 4px; }
.lv-ribbon { display: flex; gap: 0; overflow-x: auto; overscroll-behavior-x: contain; scrollbar-width: none; min-width: 0;
  padding: 0 20px; scroll-snap-type: x proximity; }
.lv-ribbon::-webkit-scrollbar { display: none; }
.lv-sk { flex: 0 0 auto; scroll-snap-align: center; font: inherit; color: #9c937d;
  background: none; border: 0; cursor: pointer; min-height: 44px; padding: 4px 14px;
  display: flex; align-items: baseline; gap: 8px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); transition: none; }
.lv-sk .n { font-size: 14px; letter-spacing: 0.14em; text-transform: uppercase; }
.lv-sk .v { font-size: 17px; color: #d8cfae; }
.lv-sk:hover, .lv-sk:focus-visible { outline: none; color: #d8cfae; }
.lv-sk.on { color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.lv-sk.on .n { font-size: 20px; }
.lv-sk.on .v { font-size: 24px; color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
/* A skill that ROSE since the last sheet carries DFU's own mark - the
   uint[2] mask the classic sheet highlights (PlayerEntity.
   SetSkillRecentlyIncreased). */
.lv-sk .lv-up { font-size: 12px; color: rgb(243,239,44); text-shadow: 2px 2px 0 rgb(93,77,12); }
.lv-skrole { text-align: center; color: #9c937d; font-size: 14px; margin: 2px 0 0;
  letter-spacing: 0.04em; text-shadow: 2px 2px 0 rgba(0,0,0,0.7); }
.lv-skrole .g { color: #c5bda2; letter-spacing: 0.16em; text-transform: uppercase; font-size: 12px; }

/* THE FOOT: the three bars, and the one way out. */
.lv-foot { display: flex; align-items: flex-end; gap: 22px; flex-wrap: wrap;
  padding: 10px 26px 16px; border-top: 2px solid rgba(125,116,96,0.45); }
.lv-vitals { display: flex; gap: 22px; flex: 1 1 320px; min-width: 0; }
.lv-vitals .px-mrow { flex: 1 1 0; margin: 0; min-width: 0; }
.lv-acts { display: flex; gap: 10px; align-items: center; }
.lv-ok { font: inherit; font-size: 20px; letter-spacing: 0.16em; text-indent: 0.16em;
  text-transform: uppercase; min-height: 48px; padding: 8px 26px;
  color: rgb(243,239,44); background: none; border: 2px solid rgb(243,239,44);
  cursor: pointer; text-shadow: 2px 2px 0 rgb(93,77,12); transition: none; }
.lv-ok:hover, .lv-ok:focus-visible { outline: none; background: rgba(243,239,44,0.14); }
/* NOT YET - the paint of a disabled control on a button that is not
   disabled. The refusal has to be REACHABLE (see the window's own note
   beside its classList toggle), so this is a look and an aria state,
   never the attribute. */
.lv-ok.notyet { color: #9c937d; border-color: rgba(125,116,96,0.5);
  text-shadow: 2px 2px 0 rgba(0,0,0,0.8); background: none; }
.lv-ok.notyet:hover, .lv-ok.notyet:focus-visible { color: #d8cfae; background: rgba(0,0,0,0.3); }

/* PHONE. The figure keeps its aspect and gives up height; the crown
   drops to two rows so the name never truncates; the ribbon is already
   a scroller and needs nothing. Targets stay at 44px throughout - they
   are sized that way above, not shrunk here. */
@media (max-width: 720px) {
  .lv-crown { grid-template-columns: 1fr 1fr; gap: 8px 14px; padding: 10px 14px 8px; }
  .lv-level { grid-column: 1 / -1; order: -1; min-width: 0; }
  .lv-crown .v { font-size: 18px; }
  .lv-plate { padding: 8px 14px 4px; }
  .lv-plate .lv-count { font-size: 32px; }
  .lv-stage { padding: 4px 8px; }
  .lv-figure { width: 96vw; }
  /* THE NAMES COME OFF THE STARS. A star's box is as wide as the word
     in it - Intelligence is eighty-odd pixels - and at this width that
     is a fifth of the whole figure, so two of them touch and a press
     lands on the wrong attribute (the probe's phone run). The name is
     not lost: the focused attribute is spelled out below the figure in
     type twice this size, which is where a player reads it anyway. */
  .lv-star { min-width: 56px; padding: 2px 4px; --lv-anchor: 12px; }
  .lv-star .lv-name { display: none; }
  .lv-star .lv-val { font-size: 16px; }
  .lv-star .lv-gem { font-size: 16px; }
  .lv-pickname { min-width: 0; }
  .lv-pickname .n { font-size: 21px; }
  .lv-blurb { font-size: 14px; padding: 0 12px; }
  .lv-foot { padding: 8px 14px 12px; gap: 10px; }
  .lv-vitals { flex: 1 1 100%; gap: 10px; }
  .lv-acts { flex: 1 1 100%; justify-content: center; }
  /* THE THREE BARS STACK THEIR OWN LABELS. Side by side in 390px the
     label and the value of each meter ran into the next meter's label
     - "HEALTH96 / 118FATIGUE104 / 120" - which is three numbers a
     player cannot read at the moment the window is telling them their
     health went up. The row stays three columns (the comparison is the
     point); it is each meter's HEAD that goes vertical. */
  .lv-vitals .px-mtop { flex-direction: column; align-items: flex-start; gap: 1px; margin-bottom: 3px; }
  .lv-vitals .px-mtop .k { font-size: 11px; letter-spacing: 0.1em; }
  .lv-vitals .px-mtop .v { font-size: 14px; }
}
/* SHORT AND WIDE - a laptop in a hotel room, the aspect ratio the
   enhanced menu's own probe measures at. The figure is what gives:
   it is the only band on the column that can. */
@media (max-height: 620px) {
  .lv-plate { padding: 6px 20px 2px; }
  .lv-plate .lv-count { font-size: 30px; }
  .lv-crown { padding: 8px 20px 6px; }
  .lv-blurb { font-size: 14px; }
  .lv-ribbonwrap { padding: 4px 0 2px; }
  /* ...and the same answer vertically: a short stage squeezes the
     figure's ROWS together, so the tall part of a star - its name -
     goes, and the box falls back to its 44px floor. */
  .lv-star { min-height: 44px; padding: 2px 6px; --lv-anchor: 12px; }
  .lv-star .lv-name { display: none; }
  .lv-star .lv-val { font-size: 17px; }
  .lv-star .lv-gem { font-size: 15px; }
}
`,xg="dagger-enhanced-style",Gr=xg;function af(e=document){if(e.getElementById(Gr))return;const t=e.createElement("style");if(t.id=Gr,t.textContent=gg,e.head.append(t),Ui()&&!e.getElementById(Hr)){const a=e.createElement("style");a.id=Hr,a.textContent=Y0,e.head.append(a),jc(e),rs(e),Ai(e)}Ha(()=>import("./uiClickSound-BRscs2q0.js"),__vite__mapDeps([9,0,1,2,3,4,5,6,7,8]),import.meta.url).then(a=>a.installUiClickSound(e)).catch(()=>{})}function of(e=document,t=globalThis.location?.search??""){if(Ma("nofonts",t)||e.getElementById("dagger-enhanced-fonts"))return;const a=e.createElement("link");a.id="dagger-enhanced-fonts",a.rel="stylesheet",a.href=hg,e.head.append(a)}export{Eg as $,Zg as A,ex as B,hn as C,el as D,la as E,Tl as F,ax as G,on as H,Lg as I,Dg as J,Tt as K,Es as L,yl as M,Hg as N,Gt as O,G0 as P,en as Q,ja as R,Qg as S,lo as T,cn as U,dn as V,nl as W,He as X,Mg as Y,Xt as Z,so as _,of as a,nm as a$,ks as a0,Sg as a1,Ig as a2,Og as a3,Ag as a4,Cg as a5,Ug as a6,ys as a7,qg as a8,jg as a9,jm as aA,qm as aB,Fm as aC,Cm as aD,_a as aE,mb as aF,Gm as aG,Ot as aH,Ge as aI,Pm as aJ,Hm as aK,Mm as aL,Ye as aM,zx as aN,yx as aO,Ce as aP,op as aQ,bx as aR,Nn as aS,ym as aT,ie as aU,Ax as aV,Ux as aW,Xl as aX,hm as aY,fm as aZ,bm as a_,Pg as aa,Zr as ab,bs as ac,fs as ad,us as ae,ws as af,Ho as ag,Vx as ah,Yx as ai,vb as aj,hp as ak,E as al,Xx as am,se as an,Vd as ao,Zd as ap,Jd as aq,tc as ar,no as as,Vm as at,oe as au,P as av,wo as aw,md as ax,Ed as ay,_m as az,Q0 as b,ae as b$,em as b0,kp as b1,Zn as b2,Qn as b3,Cb as b4,qt as b5,qe as b6,rr as b7,nr as b8,yo as b9,Z as bA,At as bB,Lb as bC,Um as bD,gb as bE,Do as bF,qa as bG,Dx as bH,dm as bI,kb as bJ,yb as bK,Ng as bL,Yb as bM,Tx as bN,Hb as bO,zd as bP,Rd as bQ,$g as bR,Ex as bS,Yt as bT,$x as bU,Jm as bV,Qx as bW,xm as bX,pb as bY,cm as bZ,$e as b_,W as ba,Mb as bb,sm as bc,ip as bd,vl as be,qd as bf,Qd as bg,Xd as bh,Gd as bi,Vn as bj,_d as bk,Fd as bl,Xn as bm,ds as bn,kg as bo,zg as bp,Rg as bq,Xb as br,Km as bs,vg as bt,Bm as bu,fb as bv,bb as bw,Tg as bx,Rx as by,gs as bz,xx as c,Ee as c$,Eb as c0,Ob as c1,Ib as c2,xb as c3,lm as c4,Sb as c5,pm as c6,_g as c7,f as c8,N0 as c9,$h as cA,ci as cB,kh as cC,hi as cD,vh as cE,gi as cF,E0 as cG,Vb as cH,zo as cI,Si as cJ,tt as cK,Oi as cL,Kb as cM,Wb as cN,Ii as cO,Bb as cP,Pb as cQ,Gb as cR,qb as cS,_b as cT,Fb as cU,Rm as cV,Am as cW,Om as cX,Em as cY,km as cZ,Jr as c_,ko as ca,jb as cb,_r as cc,ng as cd,tf as ce,qr as cf,Db as cg,Lx as ch,Nx as ci,Zb as cj,ef as ck,Ni as cl,Li as cm,Jl as cn,Qb as co,Jb as cp,go as cq,Bt as cr,da as cs,ox as ct,nt as cu,nc as cv,cs as cw,ag as cx,yh as cy,di as cz,Dt as d,up as d$,rp as d0,vm as d1,Hx as d2,Dp as d3,vs as d4,ap as d5,Mx as d6,im as d7,yg as d8,Yg as d9,U0 as dA,px as dB,ux as dC,Sx as dD,vn as dE,kx as dF,Ix as dG,wx as dH,vx as dI,np as dJ,Vo as dK,dp as dL,Wx as dM,Kx as dN,Sp as dO,vp as dP,sp as dQ,tm as dR,jx as dS,lp as dT,Fx as dU,fp as dV,Ap as dW,mm as dX,Dm as dY,fx as dZ,Px as d_,mx as da,Pc as db,Ub as dc,bn as dd,mn as de,fn as df,sx as dg,lx as dh,rx as di,ix as dj,nx as dk,ic as dl,Tb as dm,kd as dn,ue as dp,ub as dq,$m as dr,xc as ds,hc as dt,Uc as du,L0 as dv,D0 as dw,M0 as dx,H0 as dy,j0 as dz,dx as e,Jx as e0,Gx as e1,Zx as e2,Cx as e3,Tm as e4,Im as e5,Sm as e6,zm as e7,qx as e8,_x as e9,Jo as eA,hb as eB,q0 as eC,eb as eD,Jp as eE,lb as eF,wb as eG,zb as eH,Rb as eI,Ab as eJ,Wm as eK,Xp as eL,Nb as eM,Xm as eN,Ym as eO,Qm as eP,Zm as eQ,db as eR,cb as eS,Un as eT,_0 as eU,P0 as eV,Bx as ea,Lm as eb,Nm as ec,zn as ed,am as ee,om as ef,gm as eg,rm as eh,wm as ei,um as ej,Rn as ek,zp as el,Ko as em,Ve as en,fd as eo,Pn as ep,ab as eq,ob as er,tb as es,sb as et,rb as eu,ib as ev,nb as ew,Yp as ex,$b as ey,id as ez,gx as f,$l as g,tx as h,af as i,Fg as j,kl as k,Gg as l,hx as m,Bg as n,_s as o,Ri as p,Vg as q,Ox as r,Gs as s,Kg as t,cx as u,Wg as v,Xg as w,Fs as x,Vs as y,Jg as z};
