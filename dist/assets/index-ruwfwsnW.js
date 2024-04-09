var ze=Object.defineProperty;var Ue=(t,e,n)=>e in t?ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ie=(t,e,n)=>(Ue(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function S(){}function xe(t){return t()}function be(){return Object.create(null)}function G(t){t.forEach(xe)}function Ie(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ne;function Z(t,e){return t===e?!0:(ne||(ne=document.createElement("a")),ne.href=e,t===ne.href)}function We(t){return Object.keys(t).length===0}function g(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function Y(t){return document.createTextNode(t)}function E(){return Y(" ")}function qe(){return Y("")}function z(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function De(t){return Array.from(t.childNodes)}function Oe(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ge(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}let te;function ee(t){te=t}function me(){if(!te)throw new Error("Function called outside component initialization");return te}function ve(t){me().$$.on_mount.push(t)}function Ve(t){me().$$.on_destroy.push(t)}function X(){const t=me();return(e,n,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[e];if(o){const i=Ge(e,n,{cancelable:r});return o.slice().forEach(u=>{u.call(t,i)}),!i.defaultPrevented}return!0}}const H=[],_e=[];let K=[];const ye=[],He=Promise.resolve();let fe=!1;function Ke(){fe||(fe=!0,He.then(Be))}function pe(t){K.push(t)}const le=new Set;let V=0;function Be(){if(V!==0)return;const t=te;do{try{for(;V<H.length;){const e=H[V];V++,ee(e),Ye(e.$$)}}catch(e){throw H.length=0,V=0,e}for(ee(null),H.length=0,V=0;_e.length;)_e.pop()();for(let e=0;e<K.length;e+=1){const n=K[e];le.has(n)||(le.add(n),n())}K.length=0}while(H.length);for(;ye.length;)ye.pop()();fe=!1,le.clear(),ee(t)}function Ye(t){if(t.fragment!==null){t.update(),G(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(pe)}}function Qe(t){const e=[],n=[];K.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),K=e}const re=new Set;let D;function Q(){D={r:0,c:[],p:D}}function J(){D.r||G(D.c),D=D.p}function $(t,e){t&&t.i&&(re.delete(t),t.i(e))}function k(t,e,n,r){if(t&&t.o){if(re.has(t))return;re.add(t),D.c.push(()=>{re.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function T(t){t&&t.c()}function L(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),pe(()=>{const i=t.$$.on_mount.map(xe).filter(Ie);t.$$.on_destroy?t.$$.on_destroy.push(...i):G(i),t.$$.on_mount=[]}),o.forEach(pe)}function N(t,e){const n=t.$$;n.fragment!==null&&(Qe(n.after_update),G(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Je(t,e){t.$$.dirty[0]===-1&&(H.push(t),Ke(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,r,o,i,u=null,d=[-1]){const c=te;ee(t);const s=t.$$={fragment:null,ctx:[],props:i,update:S,not_equal:o,bound:be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:be(),dirty:d,skip_bound:!1,root:e.target||c.$$.root};u&&u(s.root);let l=!1;if(s.ctx=n?n(t,e.props||{},(a,p,...f)=>{const b=f.length?f[0]:p;return s.ctx&&o(s.ctx[a],s.ctx[a]=b)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](b),l&&Je(t,a)),p}):[],s.update(),l=!0,G(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const a=De(e.target);s.fragment&&s.fragment.l(a),a.forEach(O)}else s.fragment&&s.fragment.c();e.intro&&$(t.$$.fragment),L(t,e.target,e.anchor),Be()}ee(c)}class q{constructor(){ie(this,"$$");ie(this,"$$set")}$destroy(){N(this,1),this.$destroy=S}$on(e,n){if(!Ie(n))return S;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!We(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Xe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Xe);function Ze(t){let e,n,r,o,i,u,d,c,s,l,a,p,f,b,_,h,y,C,w,I;return{c(){e=v("section"),n=v("label"),r=v("input"),o=E(),i=v("img"),d=E(),c=v("label"),s=v("input"),l=E(),a=v("img"),f=E(),b=v("label"),_=v("input"),h=E(),y=v("img"),m(r,"type","radio"),m(r,"id","paper"),m(r,"name","move"),r.value="paper",m(r,"class","svelte-1befqf4"),Z(i.src,u="./public/images/Paper.png")||m(i,"src",u),m(i,"alt","Paper"),m(i,"class","image svelte-1befqf4"),m(n,"for","paper"),m(n,"class","hand paper svelte-1befqf4"),m(s,"type","radio"),m(s,"id","scissors"),m(s,"name","move"),s.value="scissors",m(s,"class","svelte-1befqf4"),Z(a.src,p="./public/images/Scissors.png")||m(a,"src",p),m(a,"alt","Scissors"),m(a,"class","image svelte-1befqf4"),m(c,"for","scissors"),m(c,"class","hand scissors svelte-1befqf4"),m(_,"type","radio"),m(_,"id","rock"),m(_,"name","move"),_.value="rock",m(_,"class","svelte-1befqf4"),Z(y.src,C="./public/images/Rock.png")||m(y,"src",C),m(y,"alt","Rock"),m(y,"class","image svelte-1befqf4"),m(b,"for","rock"),m(b,"class","hand rock svelte-1befqf4"),m(e,"class","first-step svelte-1befqf4")},m(x,B){R(x,e,B),g(e,n),g(n,r),g(n,o),g(n,i),g(e,d),g(e,c),g(c,s),g(c,l),g(c,a),g(e,f),g(e,b),g(b,_),g(b,h),g(b,y),w||(I=[z(r,"change",t[1]),z(s,"change",t[2]),z(_,"change",t[3])],w=!0)},p:S,i:S,o:S,d(x){x&&O(e),w=!1,G(I)}}}function et(t){const e=X();function n(u){e("setpage",{page:3,move:u})}return[n,()=>n("paper"),()=>n("scissors"),()=>n("rock")]}class Le extends q{constructor(e){super(),W(this,e,et,Ze,U,{})}}function tt(t){let e;return{c(){e=v("div"),e.innerHTML='<div class="userhand svelte-1w0xacn"><h3 class="svelte-1w0xacn">YOU PICKED</h3> <div class="handImageContainer svelte-1w0xacn"><img src="./public/images/Paper.png" alt="ChooseImage" class="svelte-1w0xacn"/></div> <div class="referee svelte-1w0xacn"><div class="decision"><h2 class="svelte-1w0xacn">YOU WIN</h2></div> <div class="newGame svelte-1w0xacn">PLAY AGAIN</div></div> <div class="rivalhand"><h3 class="svelte-1w0xacn">THE HOUSE PICKED</h3> <div class="handImageContainer svelte-1w0xacn"><img src="./public/images/Rock.png" alt="ChooseImageRival" class="svelte-1w0xacn"/></div></div></div>',m(e,"class","contest svelte-1w0xacn")},m(n,r){R(n,e,r)},p:S,i:S,o:S,d(n){n&&O(e)}}}function nt(t,e,n){let{selectedItem:r}=e;return X(),t.$$set=o=>{"selectedItem"in o&&n(0,r=o.selectedItem)},[r]}class Ne extends q{constructor(e){super(),W(this,e,nt,tt,U,{selectedItem:0})}}function rt(t){let e,n,r,o;return{c(){e=v("section"),n=v("p"),r=Y("Selected Item: "),o=Y(t[0]),m(e,"class","third-step")},m(i,u){R(i,e,u),g(e,n),g(n,r),g(n,o)},p(i,[u]){u&1&&Oe(o,i[0])},i:S,o:S,d(i){i&&O(e)}}}function ot(t,e,n){let{selectedItem:r}=e;return X(),t.$$set=o=>{"selectedItem"in o&&n(0,r=o.selectedItem)},[r]}class Re extends q{constructor(e){super(),W(this,e,ot,rt,U,{selectedItem:0})}}function st(t){let e,n,r,o,i,u,d,c,s,l,a,p,f,b,_,h,y,C,w,I,x,B,A;return{c(){e=v("section"),n=v("label"),r=v("input"),o=E(),i=v("button"),i.textContent="Save",u=E(),d=v("div"),c=v("img"),l=E(),a=v("button"),a.textContent="PLAY ONLINE",p=E(),f=v("span"),b=Y(t[1]),_=Y(" waiting"),h=E(),y=v("div"),C=v("img"),I=E(),x=v("button"),x.textContent="PLAY COMPUTER",m(r,"type","text"),m(r,"placeholder","Enter your name"),r.value=t[0],m(r,"class","username-input svelte-7xaprw"),m(i,"class","svelte-7xaprw"),Z(c.src,s="./public/images/icon-online.png")||m(c,"src",s),m(c,"alt","Online"),m(c,"class","svelte-7xaprw"),m(a,"class","play-online-button svelte-7xaprw"),m(f,"class","waiting-number svelte-7xaprw"),m(d,"class","playOnline svelte-7xaprw"),Z(C.src,w="./public/images/icon-comp.png")||m(C,"src",w),m(C,"alt","Computer"),m(C,"class","svelte-7xaprw"),m(x,"class","play-computer-button svelte-7xaprw"),m(y,"class","withComputer svelte-7xaprw"),m(n,"class","menu-container"),m(e,"class","menu svelte-7xaprw")},m(M,j){R(M,e,j),g(e,n),g(n,r),g(n,o),g(n,i),g(n,u),g(n,d),g(d,c),g(d,l),g(d,a),g(d,p),g(d,f),g(f,b),g(f,_),g(n,h),g(n,y),g(y,C),g(y,I),g(y,x),B||(A=[z(r,"input",t[2]),z(i,"click",t[3]),z(a,"click",t[4]),z(x,"click",t[5])],B=!0)},p(M,[j]){j&1&&r.value!==M[0]&&(r.value=M[0]),j&2&&Oe(b,M[1])},i:S,o:S,d(M){M&&O(e),B=!1,G(A)}}}function it(t,e,n){let r="",o=0;const i=X();function u(l){n(0,r=l.target.value)}function d(){if(!r.trim()){alert("Please enter your name!");return}}function c(){o<2&&n(1,o++,o),o===2&&i("playersReady")}function s(){i("playWithComputer")}return[r,o,u,d,c,s]}class Pe extends q{constructor(e){super(),W(this,e,it,st,U,{})}}function lt(t){let e,n,r;return{c(){e=v("footer"),e.innerHTML='<button class="footer-button svelte-edsf0z"><span class="footer-text svelte-edsf0z">RULES</span></button>',m(e,"class","footer-container svelte-edsf0z")},m(o,i){R(o,e,i),n||(r=z(e,"click",t[0]),n=!0)},p:S,i:S,o:S,d(o){o&&O(e),n=!1,r()}}}function ct(t){const e=X();function n(){e("openRules")}return[n]}class Fe extends q{constructor(e){super(),W(this,e,ct,lt,U,{})}}function at(t){let e,n,r,o,i,u,d,c;return{c(){e=v("section"),n=v("p"),n.textContent="RULES",r=E(),o=v("picture"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="304" height="270" class="svelte-bwese1"><defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".097"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="b" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".097"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><ellipse cx="53.189" cy="54.815" fill="#B1B4C5" rx="53.189" ry="54.815"></ellipse><ellipse cx="53.189" cy="52.385" fill="url(#a)" rx="53.189" ry="52.385"></ellipse><g transform="translate(12.357 12.421)"><ellipse cx="40.832" cy="41.044" fill="#E1E4ED" rx="40.832" ry="41.044"></ellipse><path fill="#8A90AC" fill-rule="nonzero" d="M56.697 30.417a2.125 2.125 0 00-.904-.146c-.417.03-.755.201-.955.481-1.177 1.666-2.141 4.81-2.919 7.337-.357 1.169-.836 2.733-1.183 3.475-.362-2.08.047-9.697.206-12.63l.002-.047c.11-2.038.125-2.396.1-2.553-.174-1.118-.618-1.852-1.319-2.18-.708-.333-1.629-.186-2.62.417-.497.303-.635 1.345-1.061 6.067l-.002.02c-.235 2.595-.776 8.568-1.441 9.563-.75-1.392-1.784-9.3-2.23-12.722-.312-2.397-.494-3.774-.616-4.19-.257-.87-1.343-1.611-2.418-1.653-.895-.044-1.629.415-1.98 1.214-.655.736-.423 3.179.302 8.964.344 2.754 1.056 8.441.608 9.08-.893-.099-2.427-3.661-4.559-10.592-.598-1.942-.783-2.525-.967-2.78-.362-.891-1.593-1.578-2.696-1.5a2.314 2.314 0 00-.277.036c-.578.116-1.896.653-1.615 3.13.779 3.435 1.624 5.957 2.445 8.405l.016.05c.491 1.465.955 2.85 1.387 4.388 1.016 3.63.621 5.882.616 5.907-.034.232-.105.374-.211.423a.405.405 0 01-.143.033c-.322.023-.805-.193-1.055-.333-.568-1.098-3.4-6.33-5.967-7.055L25.15 41l-.093.008c-.942.09-1.634.45-2.057 1.068-.67.978-.393 2.224-.325 2.474l.038.09c.02.037 2.079 3.825 2.397 5.587.275 1.511 1.696 3.148 2.838 4.464l.047.054c.373.43.695.802.948 1.146 3.316 3.492 8.558 6.428 8.601 6.452.654.487 1.018.958 1.056 1.363a.595.595 0 01-.117.43l-.114.12.725.711 13.832-.98.59-2.73c1.823-7.705 1.442-14.275 1.436-14.319.007-.242.518-2.58.93-4.468l.011-.048c.82-3.763 1.838-8.444 2.034-10.225.085-.761-.398-1.46-1.23-1.779z"></path></g><g transform="translate(196)"><ellipse cx="53.686" cy="54.815" fill="#B1B4C5" rx="53.686" ry="54.815"></ellipse><ellipse cx="53.686" cy="52.385" fill="url(#b)" rx="53.686" ry="52.385"></ellipse><g transform="translate(12.473 12.421)"><ellipse cx="41.214" cy="41.044" fill="#E1E4ED" rx="41.214" ry="41.044"></ellipse><path fill="#8A90AC" fill-rule="nonzero" d="M30.455 40.692l4.451-6.234c-1.85-.307-5.248-.375-8.031 2.397-4.388 4.37-6.165 13.809-6.535 16.093l11.15 11.105c2.008-.17 10.896-1.353 19.46-9.881.09-.184 2.177-1.72.471-3.418-.814-.81-2.162-.796-2.993.033a1.051 1.051 0 01-1.497.015 1.04 1.04 0 01.015-1.49l3.026-3.014c1.538-1.532.089-4.116-2.058-3.495l-2.477 2.112a1.065 1.065 0 01-1.497-.103c-.384-.443-.302-1.114.135-1.492 8.654-7.562 7.39-6.65 12.958-11.848 2.08-1.725-.536-4.776-2.586-3.03L40.978 40.506a1.051 1.051 0 01-1.378-.015c-.445-.383-.455-.934-.164-1.37l9.395-14.545c1.373-1.852-1.33-3.91-2.776-2.042L32.164 41.881a1.05 1.05 0 01-1.47.255 1.02 1.02 0 01-.24-1.444z"></path></g></g><g transform="translate(98 160)"><ellipse cx="53.686" cy="54.815" fill="#B1B4C5" rx="53.686" ry="54.815"></ellipse><ellipse cx="53.686" cy="52.385" fill="url(#b)" rx="53.686" ry="52.385"></ellipse><g transform="translate(12.473 12.421)"><ellipse cx="41.214" cy="41.044" fill="#E1E4ED" rx="41.214" ry="41.044"></ellipse><path fill="#8A90AC" fill-rule="nonzero" d="M57.179 35.15c-.475-5.997-7.208-5.385-7.208-5.385-2.842-5.01-7.281-1.381-7.281-1.381-3.41-4.911-7.687-.36-7.687-.36-7.373-.796-7.087 5.234-7.087 5.234-.173 1.917 1.04 7.847 1.04 7.847-1.094-3.418-3.467-.581-3.467-.581-2.917 4.502-.721 6.967-.721 6.967 3.947 4.626 12.357 10.18 12.357 10.18 3.046 1.745 1.757 3.3 1.757 3.3l18.42-3.044.424-3.494c2.8-8.472-.547-19.284-.547-19.284z"></path></g></g><text fill="#B1B4C5" font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="13" font-style="condensed" font-weight="bold"><tspan x="134" y="31">BEATS</tspan></text><text fill="#B1B4C5" font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="13" font-style="condensed" font-weight="bold"><tspan x="40" y="147">BEATS</tspan></text><text fill="#B1B4C5" font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="13" font-style="condensed" font-weight="bold"><tspan x="235" y="147">BEATS</tspan></text><g fill="#B1B4C5" transform="matrix(-1 0 0 1 177 39)"><rect width="50" height="4" y="10" rx="2"></rect><path d="M41.963 2.015l8.59 8.728c.716.727.71 1.896-.013 2.616a1.833 1.833 0 01-2.6-.013l-8.59-8.728a1.855 1.855 0 01.013-2.616 1.833 1.833 0 012.6.013z"></path><path d="M39.35 19.382l8.59-8.728a1.833 1.833 0 012.6-.013c.723.72.729 1.889.013 2.616l-8.59 8.728a1.833 1.833 0 01-2.6.013 1.855 1.855 0 01-.013-2.616z"></path></g><g fill="#B1B4C5" transform="scale(1 -1) rotate(-55 -82.574 -131.195)"><rect width="50" height="4" y="10" rx="2"></rect><path d="M41.963 2.015l8.59 8.728c.716.727.71 1.896-.013 2.616a1.833 1.833 0 01-2.6-.013l-8.59-8.728a1.855 1.855 0 01.013-2.616 1.833 1.833 0 012.6.013z"></path><path d="M39.35 19.382l8.59-8.728a1.833 1.833 0 012.6-.013c.723.72.729 1.889.013 2.616l-8.59 8.728a1.833 1.833 0 01-2.6.013 1.855 1.855 0 01-.013-2.616z"></path></g><g fill="#B1B4C5" transform="rotate(-55 240.022 -103.651)"><rect width="50" height="4" y="10" rx="2"></rect><path d="M41.963 2.015l8.59 8.728c.716.727.71 1.896-.013 2.616a1.833 1.833 0 01-2.6-.013l-8.59-8.728a1.855 1.855 0 01.013-2.616 1.833 1.833 0 012.6.013z"></path><path d="M39.35 19.382l8.59-8.728a1.833 1.833 0 012.6-.013c.723.72.729 1.889.013 2.616l-8.59 8.728a1.833 1.833 0 01-2.6.013 1.855 1.855 0 01-.013-2.616z"></path></g></g></svg>',i=E(),u=v("figure"),u.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#3B4262" fill-rule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"></path></svg>',m(n,"class","rules-title svelte-bwese1"),m(o,"class","rules-picture svelte-bwese1"),m(u,"class","rules-close-icon svelte-bwese1"),m(e,"class","rules-container svelte-bwese1")},m(s,l){R(s,e,l),g(e,n),g(e,r),g(e,o),g(e,i),g(e,u),d||(c=z(u,"click",t[0]),d=!0)},p:S,i:S,o:S,d(s){s&&O(e),d=!1,c()}}}function ut(t,e,n){let{step:r}=e;const o=X();function i(){o("closeRules",{page:r})}return t.$$set=u=>{"step"in u&&n(1,r=u.step)},[i,r]}class Te extends q{constructor(e){super(),W(this,e,ut,at,U,{step:1})}}function ft(t){let e;return{c(){e=v("header"),e.innerHTML='<section class="header-container-logo svelte-7dd99y"><p class="item-name svelte-7dd99y">ROCK</p> <p class="item-name svelte-7dd99y">PAPER</p> <p class="item-name svelte-7dd99y">SCISSORS</p></section> <div class="header-container-score svelte-7dd99y"><p class="score-text svelte-7dd99y">SCORE</p> <p class="score-number svelte-7dd99y">0</p></div>',m(e,"class","header-container svelte-7dd99y")},m(n,r){R(n,e,r)},p:S,i:S,o:S,d(n){n&&O(e)}}}class Ae extends q{constructor(e){super(),W(this,e,null,ft,U,{})}}var Me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function dt(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var o=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return t[r]}})}),n}var oe={exports:{}},ge={};(function(t){(function(){var e,n,r,o,i={}.hasOwnProperty,u=[].slice;e={LF:`
`,NULL:"\0"},r=function(){var d;function c(s,l,a){this.command=s,this.headers=l??{},this.body=a??""}return c.prototype.toString=function(){var s,l,a,p,f;s=[this.command],a=this.headers["content-length"]===!1,a&&delete this.headers["content-length"],f=this.headers;for(l in f)i.call(f,l)&&(p=f[l],s.push(""+l+":"+p));return this.body&&!a&&s.push("content-length:"+c.sizeOfUTF8(this.body)),s.push(e.LF+this.body),s.join(e.LF)},c.sizeOfUTF8=function(s){return s?encodeURI(s).match(/%..|./g).length:0},d=function(s){var l,a,p,f,b,_,h,y,C,w,I,x,B,A,M,j,P;for(f=s.search(RegExp(""+e.LF+e.LF)),b=s.substring(0,f).split(e.LF),p=b.shift(),_={},x=function(F){return F.replace(/^\s+|\s+$/g,"")},j=b.reverse(),B=0,M=j.length;B<M;B++)w=j[B],y=w.indexOf(":"),_[x(w.substring(0,y))]=x(w.substring(y+1));if(l="",I=f+2,_["content-length"])C=parseInt(_["content-length"]),l=(""+s).substring(I,I+C);else for(a=null,h=A=I,P=s.length;(I<=P?A<P:A>P)&&(a=s.charAt(h),a!==e.NULL);h=I<=P?++A:--A)l+=a;return new c(p,_,l)},c.unmarshall=function(s){var l;return function(){var a,p,f,b;for(f=s.split(RegExp(""+e.NULL+e.LF+"*")),b=[],a=0,p=f.length;a<p;a++)l=f[a],(l!=null?l.length:void 0)>0&&b.push(d(l));return b}()},c.marshall=function(s,l,a){var p;return p=new c(s,l,a),p.toString()+e.NULL},c}(),n=function(){var d;function c(s){this.ws=s,this.ws.binaryType="arraybuffer",this.counter=0,this.connected=!1,this.heartbeat={outgoing:1e4,incoming:1e4},this.maxWebSocketFrameSize=16*1024,this.subscriptions={}}return c.prototype.debug=function(s){var l;return typeof window<"u"&&window!==null&&(l=window.console)!=null?l.log(s):void 0},d=function(){return Date.now?Date.now():new Date().valueOf},c.prototype._transmit=function(s,l,a){var p;for(p=r.marshall(s,l,a),typeof this.debug=="function"&&this.debug(">>> "+p);;)if(p.length>this.maxWebSocketFrameSize)this.ws.send(p.substring(0,this.maxWebSocketFrameSize)),p=p.substring(this.maxWebSocketFrameSize),typeof this.debug=="function"&&this.debug("remaining = "+p.length);else return this.ws.send(p)},c.prototype._setupHeartbeat=function(s){var l,a,p,f,b,_;if(!((b=s.version)!==o.VERSIONS.V1_1&&b!==o.VERSIONS.V1_2)&&(_=function(){var h,y,C,w;for(C=s["heart-beat"].split(","),w=[],h=0,y=C.length;h<y;h++)f=C[h],w.push(parseInt(f));return w}(),a=_[0],l=_[1],this.heartbeat.outgoing===0||l===0||(p=Math.max(this.heartbeat.outgoing,l),typeof this.debug=="function"&&this.debug("send PING every "+p+"ms"),this.pinger=o.setInterval(p,function(h){return function(){return h.ws.send(e.LF),typeof h.debug=="function"?h.debug(">>> PING"):void 0}}(this))),!(this.heartbeat.incoming===0||a===0)))return p=Math.max(this.heartbeat.incoming,a),typeof this.debug=="function"&&this.debug("check PONG every "+p+"ms"),this.ponger=o.setInterval(p,function(h){return function(){var y;if(y=d()-h.serverActivity,y>p*2)return typeof h.debug=="function"&&h.debug("did not receive server activity for the last "+y+"ms"),h.ws.close()}}(this))},c.prototype._parseConnect=function(){var s,l,a,p;switch(s=1<=arguments.length?u.call(arguments,0):[],p={},s.length){case 2:p=s[0],l=s[1];break;case 3:s[1]instanceof Function?(p=s[0],l=s[1],a=s[2]):(p.login=s[0],p.passcode=s[1],l=s[2]);break;case 4:p.login=s[0],p.passcode=s[1],l=s[2],a=s[3];break;default:p.login=s[0],p.passcode=s[1],l=s[2],a=s[3],p.host=s[4]}return[p,l,a]},c.prototype.connect=function(){var s,l,a,p;return s=1<=arguments.length?u.call(arguments,0):[],p=this._parseConnect.apply(this,s),a=p[0],this.connectCallback=p[1],l=p[2],typeof this.debug=="function"&&this.debug("Opening Web Socket..."),this.ws.onmessage=function(f){return function(b){var _,h,y,C,w,I,x,B,A,M,j,P;if(C=typeof ArrayBuffer<"u"&&b.data instanceof ArrayBuffer?(_=new Uint8Array(b.data),typeof f.debug=="function"&&f.debug("--- got data length: "+_.length),function(){var F,he,se;for(se=[],F=0,he=_.length;F<he;F++)h=_[F],se.push(String.fromCharCode(h));return se}().join("")):b.data,f.serverActivity=d(),C===e.LF){typeof f.debug=="function"&&f.debug("<<< PONG");return}for(typeof f.debug=="function"&&f.debug("<<< "+C),j=r.unmarshall(C),P=[],A=0,M=j.length;A<M;A++)switch(w=j[A],w.command){case"CONNECTED":typeof f.debug=="function"&&f.debug("connected to server "+w.headers.server),f.connected=!0,f._setupHeartbeat(w.headers),P.push(typeof f.connectCallback=="function"?f.connectCallback(w):void 0);break;case"MESSAGE":B=w.headers.subscription,x=f.subscriptions[B]||f.onreceive,x?(y=f,I=w.headers["message-id"],w.ack=function(F){return F==null&&(F={}),y.ack(I,B,F)},w.nack=function(F){return F==null&&(F={}),y.nack(I,B,F)},P.push(x(w))):P.push(typeof f.debug=="function"?f.debug("Unhandled received MESSAGE: "+w):void 0);break;case"RECEIPT":P.push(typeof f.onreceipt=="function"?f.onreceipt(w):void 0);break;case"ERROR":P.push(typeof l=="function"?l(w):void 0);break;default:P.push(typeof f.debug=="function"?f.debug("Unhandled frame: "+w):void 0)}return P}}(this),this.ws.onclose=function(f){return function(){var b;return b="Whoops! Lost connection to "+f.ws.url,typeof f.debug=="function"&&f.debug(b),f._cleanUp(),typeof l=="function"?l(b):void 0}}(this),this.ws.onopen=function(f){return function(){return typeof f.debug=="function"&&f.debug("Web Socket Opened..."),a["accept-version"]=o.VERSIONS.supportedVersions(),a["heart-beat"]=[f.heartbeat.outgoing,f.heartbeat.incoming].join(","),f._transmit("CONNECT",a)}}(this)},c.prototype.disconnect=function(s,l){return l==null&&(l={}),this._transmit("DISCONNECT",l),this.ws.onclose=null,this.ws.close(),this._cleanUp(),typeof s=="function"?s():void 0},c.prototype._cleanUp=function(){if(this.connected=!1,this.pinger&&o.clearInterval(this.pinger),this.ponger)return o.clearInterval(this.ponger)},c.prototype.send=function(s,l,a){return l==null&&(l={}),a==null&&(a=""),l.destination=s,this._transmit("SEND",l,a)},c.prototype.subscribe=function(s,l,a){var p;return a==null&&(a={}),a.id||(a.id="sub-"+this.counter++),a.destination=s,this.subscriptions[a.id]=l,this._transmit("SUBSCRIBE",a),p=this,{id:a.id,unsubscribe:function(){return p.unsubscribe(a.id)}}},c.prototype.unsubscribe=function(s){return delete this.subscriptions[s],this._transmit("UNSUBSCRIBE",{id:s})},c.prototype.begin=function(s){var l,a;return a=s||"tx-"+this.counter++,this._transmit("BEGIN",{transaction:a}),l=this,{id:a,commit:function(){return l.commit(a)},abort:function(){return l.abort(a)}}},c.prototype.commit=function(s){return this._transmit("COMMIT",{transaction:s})},c.prototype.abort=function(s){return this._transmit("ABORT",{transaction:s})},c.prototype.ack=function(s,l,a){return a==null&&(a={}),a["message-id"]=s,a.subscription=l,this._transmit("ACK",a)},c.prototype.nack=function(s,l,a){return a==null&&(a={}),a["message-id"]=s,a.subscription=l,this._transmit("NACK",a)},c}(),o={VERSIONS:{V1_0:"1.0",V1_1:"1.1",V1_2:"1.2",supportedVersions:function(){return"1.1,1.0"}},client:function(d,c){var s,l;return c==null&&(c=["v10.stomp","v11.stomp"]),s=o.WebSocketClass||WebSocket,l=new s(d,c),new n(l)},over:function(d){return new n(d)},Frame:r},t!==null&&(t.Stomp=o),typeof window<"u"&&window!==null?(o.setInterval=function(d,c){return window.setInterval(c,d)},o.clearInterval=function(d){return window.clearInterval(d)},window.Stomp=o):t||(self.Stomp=o)}).call(Me)})(ge);var de={};const mt={},gt=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"})),ht=dt(gt);var ce,we;function bt(){if(we)return ce;we=1;var t=function(){if(typeof self=="object"&&self)return self;if(typeof window=="object"&&window)return window;throw new Error("Unable to resolve global `this`")};return ce=function(){if(this)return this;if(typeof globalThis=="object"&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch{return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}(),ce}const vt="websocket",_t="Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",yt=["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],wt="Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",$t=["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],kt="1.0.34",St={type:"git",url:"https://github.com/theturtle32/WebSocket-Node.git"},Ct="https://github.com/theturtle32/WebSocket-Node",Et={node:">=4.0.0"},xt={bufferutil:"^4.0.1",debug:"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2",yaeti:"^0.0.6"},It={"buffer-equal":"^1.0.0",gulp:"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1",jshint:"^2.0.0",tape:"^4.9.1"},Ot={verbose:!1},Bt={test:"tape test/unit/*.js",gulp:"gulp"},Lt="index",Nt={lib:"./lib"},Rt="lib/browser.js",Pt="Apache-2.0",Ft={name:vt,description:_t,keywords:yt,author:wt,contributors:$t,version:kt,repository:St,homepage:Ct,engines:Et,dependencies:xt,devDependencies:It,config:Ot,scripts:Bt,main:Lt,directories:Nt,browser:Rt,license:Pt};var ae,$e;function Tt(){return $e||($e=1,ae=Ft.version),ae}var ue,ke;function At(){if(ke)return ue;ke=1;var t;if(typeof globalThis=="object")t=globalThis;else try{t=bt()}catch{}finally{if(!t&&typeof window<"u"&&(t=window),!t)throw new Error("Could not determine global this")}var e=t.WebSocket||t.MozWebSocket,n=Tt();function r(o,i){var u;return i?u=new e(o,i):u=new e(o),u}return e&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach(function(o){Object.defineProperty(r,o,{get:function(){return e[o]}})}),ue={w3cwebsocket:e?r:null,version:n},ue}(function(){var t,e,n,r,o,i;t=ge,e=ht,t.Stomp.setInterval=function(u,d){return setInterval(d,u)},t.Stomp.clearInterval=function(u){return clearInterval(u)},o=function(u,d){var c,s;return c=null,s={url:"tcp:// "+d+":"+u,send:function(l){return c.write(l)},close:function(){return c.end()}},c=e.connect(u,d,function(l){return s.onopen()}),c.on("error",function(l){return typeof s.onclose=="function"?s.onclose(l):void 0}),c.on("close",function(l){return typeof s.onclose=="function"?s.onclose(l):void 0}),c.on("data",function(l){var a;return a={data:l.toString()},s.onmessage(a)}),s},i=function(u){var d,c,s,l;return d=At().client,c=null,l={url:u,send:function(a){return c.sendUTF(a)},close:function(){return c.close()}},s=new d,s.on("connect",function(a){return c=a,l.onopen(),c.on("error",function(p){return typeof l.onclose=="function"?l.onclose(p):void 0}),c.on("close",function(){return typeof l.onclose=="function"?l.onclose():void 0}),c.on("message",function(p){var f;if(p.type==="utf8")return f={data:p.utf8Data},l.onmessage(f)})}),s.connect(u),l},n=function(u,d){var c;return c=o(d,u),t.Stomp.over(c)},r=function(u){var d;return d=i(u),t.Stomp.over(d)},de.overTCP=n,de.overWS=r}).call(Me);var Mt=ge,je=de;oe.exports=Mt.Stomp;oe.exports.overTCP=je.overTCP;oe.exports.overWS=je.overWS;var jt=oe.exports;const zt=pt(jt);function Ut(t){let e,n,r,o,i,u,d,c;const s=[Vt,Gt,Dt,qt],l=[];function a(f,b){return f[2]===1?0:f[2]===2?1:f[2]===3?2:f[2]===4?3:-1}~(r=a(t))&&(o=l[r]=s[r](t)),u=new Fe({}),u.$on("openRules",t[5]);let p=t[1]&&Se(t);return{c(){e=v("main"),n=v("div"),o&&o.c(),i=E(),T(u.$$.fragment),d=E(),p&&p.c(),m(n,"class","desktop-content svelte-sepg2a"),m(e,"class","app-desktop svelte-sepg2a")},m(f,b){R(f,e,b),g(e,n),~r&&l[r].m(n,null),g(n,i),L(u,n,null),g(e,d),p&&p.m(e,null),c=!0},p(f,b){let _=r;r=a(f),r===_?~r&&l[r].p(f,b):(o&&(Q(),k(l[_],1,1,()=>{l[_]=null}),J()),~r?(o=l[r],o?o.p(f,b):(o=l[r]=s[r](f),o.c()),$(o,1),o.m(n,i)):o=null),f[1]?p?(p.p(f,b),b&2&&$(p,1)):(p=Se(f),p.c(),$(p,1),p.m(e,null)):p&&(Q(),k(p,1,1,()=>{p=null}),J())},i(f){c||($(o),$(u.$$.fragment,f),$(p),c=!0)},o(f){k(o),k(u.$$.fragment,f),k(p),c=!1},d(f){f&&O(e),~r&&l[r].d(),N(u),p&&p.d()}}}function Wt(t){let e,n,r,o=!t[1]&&Ce(t),i=t[1]&&Ee(t);return{c(){e=v("main"),o&&o.c(),n=E(),i&&i.c(),m(e,"class","app svelte-sepg2a")},m(u,d){R(u,e,d),o&&o.m(e,null),g(e,n),i&&i.m(e,null),r=!0},p(u,d){u[1]?o&&(Q(),k(o,1,1,()=>{o=null}),J()):o?(o.p(u,d),d&2&&$(o,1)):(o=Ce(u),o.c(),$(o,1),o.m(e,n)),u[1]?i?(i.p(u,d),d&2&&$(i,1)):(i=Ee(u),i.c(),$(i,1),i.m(e,null)):i&&(Q(),k(i,1,1,()=>{i=null}),J())},i(u){r||($(o),$(i),r=!0)},o(u){k(o),k(i),r=!1},d(u){u&&O(e),o&&o.d(),i&&i.d()}}}function qt(t){let e,n;return e=new Re({props:{selectedItem:t[3]}}),e.$on("setpage",t[9]),{c(){T(e.$$.fragment)},m(r,o){L(e,r,o),n=!0},p(r,o){const i={};o&8&&(i.selectedItem=r[3]),e.$set(i)},i(r){n||($(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Dt(t){let e,n;return e=new Ne({props:{selectedItem:t[3]}}),{c(){T(e.$$.fragment)},m(r,o){L(e,r,o),n=!0},p(r,o){const i={};o&8&&(i.selectedItem=r[3]),e.$set(i)},i(r){n||($(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Gt(t){let e,n,r,o;return e=new Ae({}),r=new Le({}),r.$on("setpage",t[4]),{c(){T(e.$$.fragment),n=E(),T(r.$$.fragment)},m(i,u){L(e,i,u),R(i,n,u),L(r,i,u),o=!0},p:S,i(i){o||($(e.$$.fragment,i),$(r.$$.fragment,i),o=!0)},o(i){k(e.$$.fragment,i),k(r.$$.fragment,i),o=!1},d(i){i&&O(n),N(e,i),N(r,i)}}}function Vt(t){let e,n;return e=new Pe({}),e.$on("usernameSaved",t[7]),{c(){T(e.$$.fragment)},m(r,o){L(e,r,o),n=!0},p:S,i(r){n||($(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Se(t){let e,n,r;return n=new Te({props:{step:t[2]}}),n.$on("setpage",t[6]),n.$on("closeRules",t[6]),{c(){e=v("div"),T(n.$$.fragment),m(e,"class","rules-page svelte-sepg2a")},m(o,i){R(o,e,i),L(n,e,null),r=!0},p(o,i){const u={};i&4&&(u.step=o[2]),n.$set(u)},i(o){r||($(n.$$.fragment,o),r=!0)},o(o){k(n.$$.fragment,o),r=!1},d(o){o&&O(e),N(n)}}}function Ce(t){let e,n,r,o,i;const u=[Qt,Yt,Kt,Ht],d=[];function c(s,l){return s[2]===1?0:s[2]===2?1:s[2]===3?2:s[2]===4?3:-1}return~(e=c(t))&&(n=d[e]=u[e](t)),o=new Fe({}),o.$on("openRules",t[5]),{c(){n&&n.c(),r=E(),T(o.$$.fragment)},m(s,l){~e&&d[e].m(s,l),R(s,r,l),L(o,s,l),i=!0},p(s,l){let a=e;e=c(s),e===a?~e&&d[e].p(s,l):(n&&(Q(),k(d[a],1,1,()=>{d[a]=null}),J()),~e?(n=d[e],n?n.p(s,l):(n=d[e]=u[e](s),n.c()),$(n,1),n.m(r.parentNode,r)):n=null)},i(s){i||($(n),$(o.$$.fragment,s),i=!0)},o(s){k(n),k(o.$$.fragment,s),i=!1},d(s){s&&O(r),~e&&d[e].d(s),N(o,s)}}}function Ht(t){let e,n;return e=new Re({props:{selectedItem:t[3]}}),e.$on("setpage",t[8]),{c(){T(e.$$.fragment)},m(r,o){L(e,r,o),n=!0},p(r,o){const i={};o&8&&(i.selectedItem=r[3]),e.$set(i)},i(r){n||($(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Kt(t){let e,n;return e=new Ne({props:{selectedItem:t[3]}}),{c(){T(e.$$.fragment)},m(r,o){L(e,r,o),n=!0},p(r,o){const i={};o&8&&(i.selectedItem=r[3]),e.$set(i)},i(r){n||($(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Yt(t){let e,n,r,o;return e=new Ae({}),r=new Le({}),r.$on("setpage",t[4]),{c(){T(e.$$.fragment),n=E(),T(r.$$.fragment)},m(i,u){L(e,i,u),R(i,n,u),L(r,i,u),o=!0},p:S,i(i){o||($(e.$$.fragment,i),$(r.$$.fragment,i),o=!0)},o(i){k(e.$$.fragment,i),k(r.$$.fragment,i),o=!1},d(i){i&&O(n),N(e,i),N(r,i)}}}function Qt(t){let e,n;return e=new Pe({}),e.$on("usernameSaved",t[7]),{c(){T(e.$$.fragment)},m(r,o){L(e,r,o),n=!0},p:S,i(r){n||($(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Ee(t){let e,n,r;return n=new Te({props:{step:t[2]}}),n.$on("setpage",t[6]),n.$on("closeRules",t[6]),{c(){e=v("div"),T(n.$$.fragment),m(e,"class","rules-page svelte-sepg2a")},m(o,i){R(o,e,i),L(n,e,null),r=!0},p(o,i){const u={};i&4&&(u.step=o[2]),n.$set(u)},i(o){r||($(n.$$.fragment,o),r=!0)},o(o){k(n.$$.fragment,o),r=!1},d(o){o&&O(e),N(n)}}}function Jt(t){let e,n,r,o;const i=[Wt,Ut],u=[];function d(c,s){return c[0]?0:1}return e=d(t),n=u[e]=i[e](t),{c(){n.c(),r=qe()},m(c,s){u[e].m(c,s),R(c,r,s),o=!0},p(c,[s]){let l=e;e=d(c),e===l?u[e].p(c,s):(Q(),k(u[l],1,1,()=>{u[l]=null}),J(),n=u[e],n?n.p(c,s):(n=u[e]=i[e](c),n.c()),$(n,1),n.m(r.parentNode,r))},i(c){o||($(n),o=!0)},o(c){k(n),o=!1},d(c){c&&O(r),u[e].d(c)}}}function Xt(t,e,n){let r;ve(()=>{r=new zt.Client({brokerURL:"ws://localhost:8080/gs-guide-websocket"}),r.onConnect=h=>{console.log("Connected: "+h)},r.onWebSocketError=h=>{console.error("Error with websocket",h)},r.onStompError=h=>{console.error("Broker reported error: "+h.headers.message),console.error("Additional details: "+h.body)},r.activate()}),Ve(()=>{r&&(r.deactivate(),console.log("Disconnected"))});const o=window.matchMedia("(min-width: 1024px)");let i=!o.matches;function u(h){n(0,i=!h.matches)}ve(()=>{o.addEventListener("change",u)});let d=!1,c=1,s;function l(h){const y=h.detail;n(2,c=y.page),n(3,s=y.move)}function a(){n(1,d=!0)}function p(h){n(2,c=h.detail.page),n(1,d=!1)}function f(){n(2,c=2)}return[i,d,c,s,l,a,p,f,h=>n(2,c=h.detail.page),h=>n(2,c=h.detail.page)]}class Zt extends q{constructor(e){super(),W(this,e,Xt,Jt,U,{})}}new Zt({target:document.getElementById("app")});
