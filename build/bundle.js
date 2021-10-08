var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l;function c(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function u(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}const a="undefined"!=typeof window;let f=a?()=>window.performance.now():()=>Date.now(),d=a?t=>requestAnimationFrame(t):t;const m=new Set;function h(t){m.forEach((e=>{e.c(t)||(m.delete(e),e.f())})),0!==m.size&&d(h)}function g(t){let e;return 0===m.size&&d(h),{promise:new Promise((n=>{m.add(e={c:t,f:n})})),abort(){m.delete(e)}}}function p(t,e){t.appendChild(e)}function $(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function v(t){const e=w("style");return function(t,e){p(t.head||t,e)}($(t),e),e}function y(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function k(){return x(" ")}function j(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e,n){t.classList[n?"add":"remove"](e)}const T=new Set;let L,U=0;function D(t,e,n,o,r,s,i,l=0){const c=16.666/o;let u="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*s(t);u+=100*t+`%{${i(o,1-o)}}\n`}const a=u+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${l}`,d=$(t);T.add(d);const m=d.__svelte_stylesheet||(d.__svelte_stylesheet=v(t).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,m.insertRule(`@keyframes ${f} ${a}`,m.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${o}ms linear ${r}ms 1 both`,U+=1,f}function q(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),U-=r,U||d((()=>{U||(T.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),T.clear())})))}function z(t){L=t}function C(){if(!L)throw new Error("Function called outside component initialization");return L}const O=[],N=[],R=[],B=[],P=Promise.resolve();let H=!1;function F(t){R.push(t)}let J=!1;const M=new Set;function Z(){if(!J){J=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];z(e),W(e.$$)}for(z(null),O.length=0;N.length;)N.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];M.has(e)||(M.add(e),e())}R.length=0}while(O.length);for(;B.length;)B.pop()();H=!1,J=!1,M.clear()}}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}let G;function I(){return G||(G=Promise.resolve(),G.then((()=>{G=null}))),G}function K(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const Q=new Set;let V;function X(){V={r:0,c:[],p:V}}function Y(){V.r||r(V.c),V=V.p}function tt(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function et(t,e,n,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),V.c.push((()=>{Q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const nt={duration:0};function ot(t){t&&t.c()}function rt(t,e,o,i){const{fragment:l,on_mount:c,on_destroy:u,after_update:a}=t.$$;l&&l.m(e,o),i||F((()=>{const e=c.map(n).filter(s);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(F)}function st(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){-1===t.$$.dirty[0]&&(O.push(t),H||(H=!0,P.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(e,n,s,i,l,c,u,a=[-1]){const f=L;z(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let m=!1;if(d.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),m&&it(e,t)),n})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(b)}else d.fragment&&d.fragment.c();n.intro&&tt(e.$$.fragment),rt(e,n.target,n.anchor,n.customElement),Z()}z(f)}class ct{$destroy(){st(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ut=[];const at=function(e,n=t){let o;const r=new Set;function s(t){if(i(e,t)&&(e=t,o)){const t=!ut.length;for(const t of r)t[1](),ut.push(t,e);if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,l=t){const c=[i,l];return r.add(c),1===r.size&&(o=n(s)||t),i(e),()=>{r.delete(c),0===r.size&&(o(),o=null)}}}}([]);class ft{constructor(t){this.spec=t.spec,this.time=function(t){if(null!=t)return new Date(t);return}(t.time)}}class dt{constructor(t){this.japanese=t.japanese,this.chinese=t.chinese}}class mt{constructor(t){this.url=t.url,this.thumbnailUrl=t.thumbnailUrl}getThumbnailUrl(){if(this.thumbnailUrl)return this.thumbnailUrl;const t=this.url.length-4;return this.url.slice(0,t)+"-300x300"+this.url.slice(t)}}class ht{constructor(t){this.id=t.id,this.name=void 0!==t.name?new dt(t.name):void 0,this.onAir=void 0!==t.onAir?new ft(t.onAir):void 0,this.images=void 0!==t.images?t.images.map((t=>new mt(t))):void 0,this.story=t.story}}function gt(e){let n,o,r,s,i,l,u,a=e[0].name.chinese+"";return{c(){n=w("div"),o=w("img"),s=k(),i=w("div"),l=w("b"),u=x(a),E(o,"class","cover svelte-xwxb7p"),c(o.src,r=e[0].images[0].getThumbnailUrl())||E(o,"src",r),E(o,"alt","cover"),E(i,"class","container svelte-xwxb7p"),E(n,"class","card svelte-xwxb7p")},m(t,e){y(t,n,e),p(n,o),p(n,s),p(n,i),p(i,l),p(l,u)},p(t,[e]){1&e&&!c(o.src,r=t[0].images[0].getThumbnailUrl())&&E(o,"src",r),1&e&&a!==(a=t[0].name.chinese+"")&&A(u,a)},i:t,o:t,d(t){t&&b(n)}}}function pt(t,e,n){let{anime:o}=e;return t.$$set=t=>{"anime"in t&&n(0,o=t.anime)},[o]}class $t extends ct{constructor(t){super(),lt(this,t,pt,gt,i,{anime:0})}}function vt(t,e,n){const o=t.slice();return o[2]=e[n],o[4]=n,o}function yt(t,e,n){const o=t.slice();return o[5]=e[n],o}function bt(t){let e,n;return e=new $t({props:{anime:t[5]}}),{c(){ot(e.$$.fragment)},m(t,o){rt(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.anime=t[5]),e.$set(o)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function _t(t){let e,n,o,r,s,i,l,c=function(t){const e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return console.assert(t>=0&&t<=e.length),e[t]}(t[4])+"",u=t[2],a=[];for(let e=0;e<u.length;e+=1)a[e]=bt(yt(t,u,e));const f=t=>et(a[t],1,1,(()=>{a[t]=null}));return{c(){e=w("div"),n=w("div"),o=w("span"),r=x(c),s=k();for(let t=0;t<a.length;t+=1)a[t].c();i=k(),E(n,"class","header svelte-6q0gwy"),E(e,"class","weekday svelte-6q0gwy")},m(t,c){y(t,e,c),p(e,n),p(n,o),p(o,r),p(e,s);for(let t=0;t<a.length;t+=1)a[t].m(e,null);p(e,i),l=!0},p(t,n){if(1&n){let o;for(u=t[2],o=0;o<u.length;o+=1){const r=yt(t,u,o);a[o]?(a[o].p(r,n),tt(a[o],1)):(a[o]=bt(r),a[o].c(),tt(a[o],1),a[o].m(e,i))}for(X(),o=u.length;o<a.length;o+=1)f(o);Y()}},i(t){if(!l){for(let t=0;t<u.length;t+=1)tt(a[t]);l=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)et(a[t]);l=!1},d(t){t&&b(e),_(a,t)}}}function wt(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=_t(vt(t,o,e));const s=t=>et(r[t],1,1,(()=>{r[t]=null}));return{c(){e=w("div");for(let t=0;t<r.length;t+=1)r[t].c();E(e,"class","timetable svelte-6q0gwy")},m(t,o){y(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,[n]){if(1&n){let i;for(o=t[0],i=0;i<o.length;i+=1){const s=vt(t,o,i);r[i]?(r[i].p(s,n),tt(r[i],1)):(r[i]=_t(s),r[i].c(),tt(r[i],1),r[i].m(e,null))}for(X(),i=o.length;i<r.length;i+=1)s(i);Y()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)tt(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)et(r[t]);n=!1},d(t){t&&b(e),_(r,t)}}}function xt(t,e,n){let o=[[],[],[],[],[],[],[]];const r=at.subscribe((t=>{n(0,o=[[],[],[],[],[],[],[]]),t.forEach((t=>{const e=t.onAir.time;if(e){let n=e.toLocaleString("ja-JP",{timeZone:"Asia/Tokyo"}),r=new Date(n);r.setHours(r.getHours()-6),o[r.getDay()].push(t)}}))}));var s;return s=()=>{r()},C().$$.on_destroy.push(s),[o]}class kt extends ct{constructor(t){super(),lt(this,t,xt,wt,i,{})}}function jt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*s}}function Et(e){let n,o,r,s,i,l,u,a,f,d,m,h,g,$,v=e[0]?.name?.chinese+"";return{c(){n=w("div"),o=w("img"),s=k(),i=w("div"),l=w("div"),u=w("img"),d=k(),m=w("p"),h=x(v),E(o,"class","plus svelte-fonabj"),c(o.src,r="https://img.icons8.com/color/24/000000/plus--v1.png")||E(o,"src","https://img.icons8.com/color/24/000000/plus--v1.png"),E(o,"alt","icon"),c(u.src,a=e[0]?.images[0].getThumbnailUrl())||E(u,"src",a),E(u,"alt",f=e[0]?.name?.japanese),E(u,"loading","lazy"),E(u,"class","svelte-fonabj"),E(l,"class","cover svelte-fonabj"),E(m,"class","title svelte-fonabj"),E(i,"class","content svelte-fonabj"),E(n,"class","wrapper svelte-fonabj")},m(t,r){y(t,n,r),p(n,o),p(n,s),p(n,i),p(i,l),p(l,u),p(i,d),p(i,m),p(m,h),g||($=j(o,"click",e[1]),g=!0)},p(t,[e]){1&e&&!c(u.src,a=t[0]?.images[0].getThumbnailUrl())&&E(u,"src",a),1&e&&f!==(f=t[0]?.name?.japanese)&&E(u,"alt",f),1&e&&v!==(v=t[0]?.name?.chinese+"")&&A(h,v)},i:t,o:t,d(t){t&&b(n),g=!1,$()}}}function At(t,e,n){let o;u(t,at,(t=>n(2,o=t)));let{anime:r}=e;return t.$$set=t=>{"anime"in t&&n(0,r=t.anime)},[r,()=>{var t,e;t=at,o=[...new Set([...o,r])],e=o,t.set(e)}]}class St extends ct{constructor(t){super(),lt(this,t,At,Et,i,{anime:0})}}function Tt(t,e,n){const o=t.slice();return o[3]=e[n][0],o[0]=e[n][1],o}function Lt(t,e,n){const o=t.slice();return o[6]=e[n],o}function Ut(e){let n,o;return n=new St({props:{anime:e[6]}}),{c(){ot(n.$$.fragment)},m(t,e){rt(n,t,e),o=!0},p:t,i(t){o||(tt(n.$$.fragment,t),o=!0)},o(t){et(n.$$.fragment,t),o=!1},d(t){st(n,t)}}}function Dt(t){let e,n,o,r,s,i=t[3]+"",l=t[0],c=[];for(let e=0;e<l.length;e+=1)c[e]=Ut(Lt(t,l,e));const u=t=>et(c[t],1,1,(()=>{c[t]=null}));return{c(){e=w("h1"),n=x(i),o=k();for(let t=0;t<c.length;t+=1)c[t].c();r=x("")},m(t,i){y(t,e,i),p(e,n),y(t,o,i);for(let e=0;e<c.length;e+=1)c[e].m(t,i);y(t,r,i),s=!0},p(t,e){if(2&e){let n;for(l=t[0],n=0;n<l.length;n+=1){const o=Lt(t,l,n);c[n]?(c[n].p(o,e),tt(c[n],1)):(c[n]=Ut(o),c[n].c(),tt(c[n],1),c[n].m(r.parentNode,r))}for(X(),n=l.length;n<c.length;n+=1)u(n);Y()}},i(t){if(!s){for(let t=0;t<l.length;t+=1)tt(c[t]);s=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)et(c[t]);s=!1},d(t){t&&b(e),t&&b(o),_(c,t),t&&b(r)}}}function qt(t){let e,n,o=t[1],r=[];for(let e=0;e<o.length;e+=1)r[e]=Dt(Tt(t,o,e));const s=t=>et(r[t],1,1,(()=>{r[t]=null}));return{c(){e=w("div");for(let t=0;t<r.length;t+=1)r[t].c();E(e,"class","wrapper svelte-pmsvyi")},m(t,o){y(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,[n]){if(2&n){let i;for(o=t[1],i=0;i<o.length;i+=1){const s=Tt(t,o,i);r[i]?(r[i].p(s,n),tt(r[i],1)):(r[i]=Dt(s),r[i].c(),tt(r[i],1),r[i].m(e,null))}for(X(),i=o.length;i<r.length;i+=1)s(i);Y()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)tt(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)et(r[t]);n=!1},d(t){t&&b(e),_(r,t)}}}function zt(t,e,n){let{animeList:o}=e;const r=t=>{if(void 0===t)return"未定";let e=new Date(t);return e.setHours(e.getHours()-6),e.toLocaleDateString("ja-JP",{timeZone:"Asia/Tokyo",year:"numeric",month:"2-digit",day:"2-digit",weekday:"short"})};let s=[];return t.$$set=t=>{"animeList"in t&&n(0,o=t.animeList)},t.$$.update=()=>{if(1&t.$$.dirty){const t={};for(let e of o)t[r(e.onAir.time)]||(t[r(e.onAir.time)]=[]),t[r(e.onAir.time)].push(e);Object.keys(t).sort().forEach((e=>{s.push([e,t[e]])}))}},[o,s]}class Ct extends ct{constructor(t){super(),lt(this,t,zt,qt,i,{animeList:0})}}function Ot(t){let e;return{c(){e=x("Open")},m(t,n){y(t,e,n)},d(t){t&&b(e)}}}function Nt(t){let e;return{c(){e=x("Close")},m(t,n){y(t,e,n)},d(t){t&&b(e)}}}function Rt(n){let o,i,l,c,u;return i=new Ct({props:{animeList:n[3]}}),{c(){o=w("div"),ot(i.$$.fragment)},m(t,e){y(t,o,e),rt(i,o,null),u=!0},p(t,e){n=t},i(r){u||(tt(i.$$.fragment,r),F((()=>{c&&c.end(1),l=function(n,o,r){let i,l,c=o(n,r),u=!1,a=0;function d(){i&&q(n,i)}function m(){const{delay:o=0,duration:r=300,easing:s=e,tick:m=t,css:h}=c||nt;h&&(i=D(n,0,1,r,o,s,h,a++)),m(0,1);const p=f()+o,$=p+r;l&&l.abort(),u=!0,F((()=>K(n,!0,"start"))),l=g((t=>{if(u){if(t>=$)return m(1,0),K(n,!0,"end"),d(),u=!1;if(t>=p){const e=s((t-p)/r);m(e,1-e)}}return u}))}let h=!1;return{start(){h||(h=!0,q(n),s(c)?(c=c(),I().then(m)):m())},invalidate(){h=!1},end(){u&&(d(),u=!1)}}}(o,jt,n[1]),l.start()})),u=!0)},o(a){et(i.$$.fragment,a),l&&l.invalidate(),c=function(n,o,i){let l,c=o(n,i),u=!0;const a=V;function d(){const{delay:o=0,duration:s=300,easing:i=e,tick:d=t,css:m}=c||nt;m&&(l=D(n,1,0,s,o,i,m));const h=f()+o,p=h+s;F((()=>K(n,!1,"start"))),g((t=>{if(u){if(t>=p)return d(0,1),K(n,!1,"end"),--a.r||r(a.c),!1;if(t>=h){const e=i((t-h)/s);d(1-e,e)}}return u}))}return a.r+=1,s(c)?I().then((()=>{c=c(),d()})):d(),{end(t){t&&c.tick&&c.tick(1,0),u&&(l&&q(n,l),u=!1)}}}(o,jt,n[2]),u=!1},d(t){t&&b(o),st(i),t&&c&&c.end()}}}function Bt(t){let e,n,o,r,s,i;function l(t,e){return t[0]?Nt:Ot}let c=l(t),u=c(t),a=t[0]&&Rt(t);return{c(){e=w("nav"),n=w("button"),u.c(),o=k(),a&&a.c(),E(n,"class","svelte-1ifcbsq"),E(e,"class","svelte-1ifcbsq"),S(e,"open",t[0])},m(l,c){y(l,e,c),p(e,n),u.m(n,null),p(e,o),a&&a.m(e,null),r=!0,s||(i=j(n,"click",t[4]),s=!0)},p(t,[o]){c!==(c=l(t))&&(u.d(1),u=c(t),u&&(u.c(),u.m(n,null))),t[0]?a?(a.p(t,o),1&o&&tt(a,1)):(a=Rt(t),a.c(),tt(a,1),a.m(e,null)):a&&(X(),et(a,1,1,(()=>{a=null})),Y()),1&o&&S(e,"open",t[0])},i(t){r||(tt(a),r=!0)},o(t){et(a),r=!1},d(t){t&&b(e),u.d(),a&&a.d(),s=!1,i()}}}function Pt(t,e,n){let o=!1;let r=[];var s;s=async()=>{const t=await fetch("/assets/2021/10.json");for(let e of await t.json())r.push(new ht(e))},C().$$.on_mount.push(s);return[o,{delay:100,duration:200},{delay:0,duration:100},r,()=>n(0,o=!o)]}class Ht extends ct{constructor(t){super(),lt(this,t,Pt,Bt,i,{})}}function Ft(e){let n,o,r,s,i;return o=new Ht({}),s=new kt({}),{c(){n=w("main"),ot(o.$$.fragment),r=k(),ot(s.$$.fragment),E(n,"class","svelte-kd8zmu")},m(t,e){y(t,n,e),rt(o,n,null),p(n,r),rt(s,n,null),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),tt(s.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),et(s.$$.fragment,t),i=!1},d(t){t&&b(n),st(o),st(s)}}}return new class extends ct{constructor(t){super(),lt(this,t,null,Ft,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
