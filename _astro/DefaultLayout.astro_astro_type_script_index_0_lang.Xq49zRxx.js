const m=(...t)=>new Set(t.flatMap(e=>[...e])),At=m(),at=m(),w=Symbol();class mt{constructor(){this._m=new Map}emit(e,...s){for(const n of[...this._m.get(e)??[]])n(...s)}off(e,s){const n=this._m.get(e);n&&(n.delete(s),n.size||this._m.delete(e))}on(e,s){return(this._m.get(e)??this._m.set(e,m()).get(e)).add(s),()=>this.off(e,s)}}const ut=new mt,j=(t,e,...s)=>{ut.emit(e,t,...s),t[w]?.events.emit(e,...s),t[`on${e[0].toUpperCase()}${e.slice(1)}`]?.(...s)},S=Object,jt=t=>JSON.stringify(t),W=t=>t.replace(/-(\p{Ll})/gu,e=>e[1].toUpperCase()),G=t=>t.replace(/\p{Lu}/gu,e=>`-${e[0]}`.toLowerCase()),Ot=t=>G(t.replace(/^\p{Lu}/gu,e=>e.toLowerCase())),gt=t=>`${t??""}`,bt=t=>typeof t=="string",Rt=(t,e)=>t.getAttribute(e),Q=(t,e)=>S.prototype.hasOwnProperty.call(t,e),E=(t,e,s)=>{s===!0&&(s=""),bt(s)?t.setAttribute(e,s):t.removeAttribute(e)},U=t=>t.entries?.()??S.entries(t),xt=t=>t.nodeName=="TEMPLATE",T=document,X=window,tt=t=>t.cloneNode(!0),yt=t=>T.createElement(t),_t=t=>T.createTextNode(t),zt=t=>T.createComment(t),vt=()=>T.createDocumentFragment(),lt=()=>yt("template"),wt=(t,e)=>T.createTreeWalker(t,e),Ht=t=>{const e=T.implementation.createHTMLDocument(""),s=e.createElement("style");return s.textContent=t,e.body.append(s),s.sheet.cssRules||[]},H=(t,e,s)=>t.classList.toggle(e,s),et=()=>{const t=new WeakMap;return(s,n)=>(n?t.set(s,n):t).get(s)},Y=et(),Bt=t=>{for(const[e,s]of U(Y(t)||{}))s.length=0},B=(t,e,s)=>{const n=Y(t)||Y(t,{});let o=n[e];if(!o){let i=t[e];const r=S.getOwnPropertyDescriptor(t,e)||{};o=[],n[e]=o,S.defineProperty(t,e,{get:r.get||(()=>i),set:function(c){const f=i;if(!S.is(c,f)){r.set?.(c),i=c;for(const h of o)h(c,f)}}})}o.push(s)},A=(t,e,s,n,o)=>{for(const i of n){const r=kt(t,o,i);B(r,i,s);const c=()=>{for(const p of h)p?.()},f=t[w]?.events,h=[f?.on("update",s),f?.on("unlink",p=>{p.contains(e)&&c()}),f?.on("destroy",c)]}},kt=(t,e,s)=>Q(e,s)?e:Q(e,w)?t:kt(t,S.getPrototypeOf(e),s),O=et(),N=t=>{let e=O(t);if(t){let s=t.parentNode;for(;!e&&s;)e=O(s),s=s.parentNode}return e||O(T.body)||O(T.body,{[w]:!0})},st=(t,e)=>O(e,S.create(t)),St=t=>{const e=new Error(t);throw console.error(e),e};let $="",C=0,a=0,P=!1;const It={b:"\b",f:"\f",n:`
`,r:"\r",t:"	",v:"\v"},Kt={"-":t=>e=>[-t(e)[0]],"!":t=>e=>[!t(e)[0]],"~":t=>e=>[~t(e)[0]],"+":t=>e=>[+t(e)[0]],typeof:t=>e=>[typeof t(e)[0]]},ft={"||":[3,(t,e)=>s=>[t(s)[0]||e(s)[0]]],"??":[3,(t,e)=>s=>[t(s)[0]??e(s)[0]]],"&&":[4,(t,e)=>s=>[t(s)[0]&&e(s)[0]]],"|":[5,(t,e)=>s=>[t(s)[0]|e(s)[0]]],"^":[6,(t,e)=>s=>[t(s)[0]^e(s)[0]]],"&":[7,(t,e)=>s=>[t(s)[0]&e(s)[0]]],"===":[8,(t,e)=>s=>[t(s)[0]===e(s)[0]]],"==":[8,(t,e)=>s=>[t(s)[0]==e(s)[0]]],"!==":[8,(t,e)=>s=>[t(s)[0]!==e(s)[0]]],"!=":[8,(t,e)=>s=>[t(s)[0]!=e(s)[0]]],"<<":[10,(t,e)=>s=>[t(s)[0]<<e(s)[0]]],">>>":[10,(t,e)=>s=>[t(s)[0]>>>e(s)[0]]],">>":[10,(t,e)=>s=>[t(s)[0]>>e(s)[0]]],"<=":[9,(t,e)=>s=>[t(s)[0]<=e(s)[0]]],"<":[9,(t,e)=>s=>[t(s)[0]<e(s)[0]]],">=":[9,(t,e)=>s=>[t(s)[0]>=e(s)[0]]],">":[9,(t,e)=>s=>[t(s)[0]>e(s)[0]]],instanceof:[9,(t,e)=>s=>[t(s)[0]instanceof e(s)[0]]],in:[9,(t,e)=>s=>[t(s)[0]in e(s)[0]]],"+":[11,(t,e)=>s=>[t(s)[0]+e(s)[0]]],"-":[11,(t,e)=>s=>[t(s)[0]-e(s)[0]]],"**":[13,(t,e)=>s=>[t(s)[0]**e(s)[0]],1],"*":[12,(t,e)=>s=>[t(s)[0]*e(s)[0]]],"/":[12,(t,e)=>s=>[t(s)[0]/e(s)[0]]],"%":[12,(t,e)=>s=>[t(s)[0]%e(s)[0]]]},pt={true:!0,false:!1,null:null,undefined:void 0},Z=()=>[()=>[],m()],Wt=t=>{$=t,C=-1,g(1);let e=Z();try{P&&(e=_()||b()),P&&(e=Z(),b())}catch{}return[(...s)=>e[0](new Proxy({},{get(n,o){for(const i of s)if(o in i)return[i[o],i];return[X[o],X]}}))[0],e[1]]},v=(t=1)=>{C+=t,a=$.charCodeAt(C),P=a>=0},L=()=>$.charAt(C),M=(t=a)=>t>47&&t<58,F=(t=a)=>t>64&&t<91||t>96&&t<123||t>127||t==36||t==95,Tt=t=>F(t)||M(t),b=()=>{St(`Parse error at index ${C}: ${$}`)},g=(t=0)=>{for(t&&v(t);a==32||a==9||a==10||a==13;)v()},_=()=>{const t=()=>{const i=n.pop(),r=n.pop(),c=n.pop();n.push([r[1](c[0],i[0]),m(c[1],i[1])])},e=I();if(!e)return e;let s=V(ft);if(!s)return e;const n=[e,s,I()||b()],o=i=>i[2]^s[0]<=i[0];for(;s=V(ft);){for(;n.length>2&&o(n[n.length-2]);)t();n.push(s,I()||b())}for(;n.length>1;)t();return n[0]},V=t=>{for(const e of S.keys(t))if($.substr(C,e.length)==e&&(!F()||!Tt($.charCodeAt(C+e.length))))return g(e.length),t[e]},I=()=>{let t;if(M()||a==46)return Nt();if(a==34||a==39){const e=Ct();t=[()=>[e],m()]}else if(a===91)g(1),t=Dt(93,!0);else if(a===123)t=Ft();else{const e=V(Kt);if(e){const n=I()||b();return[e(n[0]),n[1]]}const s=nt();t=s in pt?[()=>[pt[s]],m()]:[n=>n[s],m([s])]}return Ut(t)},Ut=t=>{for(;a==46||a==91||a==40||a==63;){let e,s,n=m(),o=t;if(a==63){if(v(),a!==46)return v(-1),t;e=!0}if(a==91){g(1);const i=_()||b();s=(r,c)=>[r[0][i[0](c)[0]],r[0]],n=i[1],a!==93&&b(),g(1)}else if(a==40){g(1);const i=Dt(41);s=(r,c)=>[r[0].apply(r[1],i[0](c)[0])],n=i[1]}else if(a==46){g(1);const i=nt();s=r=>[r[0][i],r[0]]}else b();t=e?[i=>{const r=o[0](i);return r[0]==null?[]:s(r,i)},m(o[1],n)]:[i=>s(o[0](i),i),m(o[1],n)],g()}return t},Nt=()=>{let t="";for(;M();)t+=L(),v();if(a==46)for(t+=".",v();M();)t+=L(),v();if(a==101||a==69){t+=L(),v(),(a==43||a==45)&&(t+=L(),v()),M()||b();do t+=L(),v();while(M())}(F()||a==46||t==".")&&b(),g();const e=parseFloat(t);return[()=>[e],m()]},Ct=()=>{let t="";const e=a;for(v();P&&a!=e;){if(a==92){v();const s=L();t+=It[s]||s}else t+=L();v()}return P||b(),g(1),t},nt=()=>{let t=C;for(F()||b(),v();P&&Tt();)v();const e=$.slice(t,C);return g(),e},Dt=(t,e)=>{const s=[];for(;a!==t;)P||b(),s.push(e&&a==44?Z():_()),a==44?g(1):a!==t&&b();return g(1),[n=>[s.map(o=>o[0](n)[0])],m(...s.map(n=>n[1]))]},Ft=()=>{g(1);const t=[];for(;a!==125;){let e,s;P||b(),M()||a==46?s=Nt():a==34||a==39?e=Ct():a==91?(g(1),s=_(),a!=93&&b(),g(1)):e=nt(),e&&(s=[()=>[e],m()]),a==58?(g(1),t.push([s,_()])):e?t.push([s,[n=>[n[e][0]],m([e])]]):b(),a==44?g(1):a!==125&&b()}return g(1),[e=>{const s={};for(const[n,o]of t)s[n[0](e)[0]]=o[0](e)[0];return[s]},m(...t.map(e=>[e[0][1],e[1][1]]).flat())]},J=t=>{const e=new Map;return s=>e.has(s)?e.get(s):e.set(s,t(s)).get(s)},Pt=t=>{const e=t.split(/{{(.*?)}}/s);if(e.length<2)return null;const s=[];let n=!1,o=m();for(const i of e){if(n){const r=D.js(i);s.push(r[0]),o=m(o,r[1])}else s.push(i);n=!n}return[s,o]},Lt=t=>t?[(...e)=>t[0].map(s=>gt(s?.call?s(...e):s)).join(""),t[1]]:null,Jt=t=>{const e=Pt(t),s=e?.[0];return s?.length==3&&s[0]==""&&s[2]==""?[(...n)=>{const o=s[1](...n)??!1;return o===!!o?o:gt(o)},e[1]]:Lt(e)},qt=t=>Lt(Pt(t)),D={attr:J(Jt),js:J(Wt),text:J(qt)},Gt=(t,e,s,n)=>{const o=D.attr(s);if(o){const i=N(e),r=()=>{E(e,n,o[0](i,t))};A(t,e,r,o[1],i),r()}},Qt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:(t,e)=>t.target!==e,outside:(t,e)=>e.contains(t.target),ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>t.button!==0,middle:t=>t.button!==1,right:t=>t.button!==2,exact:(t,e,s)=>["ctrl","shift","alt","meta"].some(n=>t[`${n}Key`]&&!s.has(n))},Xt=(t,e,s,n)=>{const[o,...i]=W(n.slice(1)).split("."),r=S.create(N(e)),c=D.js(s),f=l=>{r.$event=l,c[0](r,t)},h={},p=m(i),x=l=>p.has(l)&&(p.delete(l),1);let d=e;for(const l of["passive","capture","once"])x(l)&&(h[l]=!0);x("window")&&(d=X),(x("document")||p.has("outside"))&&(d=T),d.addEventListener(o,l=>{[...p].some(u=>(Qt[u]||(y=>Ot(y.key)!==(u.match(/^code-\d+$/)?String.fromCodePoint(+u.split("-")[1]):u)))(l,e,p))||f(l)},h),E(e,n)},Yt=(t,e,s,n)=>{const o=D.js(s),i=N(e),r=()=>{for(const[c,f]of U(o[0](i,t)))H(e,c,!!f)};A(t,e,r,o[1],i),r(),E(e,n)},R=(t,e,s)=>{if(t?.[w]){const n=t[e];n!==s&&(t[e]=s,j(t,"change",e,n,s))}},Zt=(t,e,s,n)=>{const o=W(s);R(t,o,e),E(e,n)},Vt=(t,e,s,n)=>{const o=D.js(s),i=W(n.slice(1)),r=N(e),c=()=>{const f=o[0](r,t);e[i]=f};A(t,e,c,o[1],r),c(),E(e,n)},te=(t,e,s,n)=>{let o="key",i="value";const r=n.match(/^\s*(?:(?:(\S+)\s*,\s*)?(\S+)\s+of\s+)?(\S+)\s*$/);r&&(o=r[1]||o,i=r[2]||i,n=r[3]);const c=D.js(n),f=N(e);let h=new Map;const p=()=>{const x=c[0](f,t)||[];let d=h;h=new Map;let l=e;for(const[y,ct]of U(x)){let k=d.get(y);if(d.delete(y),k===l.nextSibling){const z=N(k);z[i]=ct}else{k&&(K(t,k),k.remove()),k=tt(s);const z=st(f,k);z[o]=y,z[i]=ct,ot(t,k),l.after(k)}l=k,h.set(y,l)}const u=vt();for(const y of d.values())u.appendChild(y);K(t,u)};A(t,e,p,c[1],f),p()},ee=(t,e,s,n)=>{const o=D.js(n),i=N(e);let r=null;const c=()=>{o[0](i,t)?r||(r=tt(s),st(i,r),ot(t,r),e.after(r)):r&&(K(t,r),r.remove(),r=null)};A(t,e,c,o[1],i),c()},se=(t,e,s,n)=>{let o="index";const i=n.match(/^(.*\S+)\s+as\s+(\S+)$/);i&&(n=i[1],o=i[2]);const r=D.js(n),c=N(e);let f=[];const h=()=>{let p=+r[0](c,t);for(;f.length>p;){const l=f.pop();K(t,l),l.remove()}let x=f.length+1,d=f[x-1]||e;for(;f.length<p;){let l=tt(s);const u=st(c,l);u[o]=x++,ot(t,l),f.push(l),d.after(l),d=l}};A(t,e,h,r[1],c),h()},ne={"*for":te,"*if":ee,"*repeat":se},q={"":Gt,"@":Xt,"#class":Yt,"#ref":Zt,".":Vt},oe=(t,e)=>{for(const s of[...e.attributes]){const n=s.nodeName,o=n.charAt(0);(q[n]||q[o]||q[""])?.(t,e,s.nodeValue||"",n)}},ie=(t,e,s)=>{const n=s.attributes;if(n){let o;for(const[i,r]of U(ne)){const c=n.getNamedItem(i);c&&(o&&St(`${o[0]} breaks ${i}`),o=[i,r,c.nodeValue||""])}if(o){const i=zt(`${o[0]}=${jt(o[2])}`);return s.before(i),e.previousNode(),s.remove(),e.nextNode(),E(s,o[0]),o[1](t,i,s,o[2],o[0]),e.previousNode(),1}}},re=(t,e)=>{const s=D.text(e.textContent||"");if(s){const n=N(e),o=()=>{e.nodeValue=s[0](n,t)};return A(t,e,o,s[1],n),o(),1}},ot=(t,e)=>{const s=vt();s.append(e),it(t,s)},it=(t,e)=>{const s=wt(e,133);let n;for(;n=s.nextNode();){xt(n)&&it(t,n.content);const o=n.nodeType;o==3?re(t,n):o==1&&(ie(t,s,n)||oe(t,n))}},K=(t,e)=>{j(t,"unlink",e)},dt=et(),ht="DOMContentLoaded",ce=(t,e,s)=>{const n=t.ownerDocument,o=()=>{let i=t;do if(i.nextSibling)return!0;while(i=i.parentNode)};if(e!=t||n.readyState!="loading"||o())Promise.resolve().then(s);else{const i=ae(n,t,r=>{(r||o())&&(i(),s())})}},ae=(t,e,s)=>{const n=()=>{s(!0)};t.addEventListener(ht,n);const o=e.getRootNode(),i=dt(o)||dt(o,{s:m()}),r=()=>{s(!1)};return i.s.add(r),i.o||(i.o=new MutationObserver(()=>{for(const c of[...i.s])c()}),i.o.observe(o,{childList:!0,subtree:!0})),()=>{i.s.delete(r),t.removeEventListener(ht,n),i.s.size||(i.o.disconnect(),delete i.o)}},Mt=(t,e,s)=>{const n=`fudgel_${t}`,o=le(e.style||"",t,n,e.useShadow);s=s||class{};const i=lt(),r=h=>{const p=wt(h.content,1);let x;for(;x=p.nextNode();)xt(x)&&r(x),H(x,n,!0)};i.innerHTML=e.template,r(i);const c={...e,attr:m(e.attr||[]),cssClassName:n,prop:m(e.prop||[]),style:o,tag:t,template:i.innerHTML};class f extends HTMLElement{attributeChangedCallback(p,x,d){R(this[w],W(p),d)}connectedCallback(){const p=c.useShadow?this.shadowRoot||this.attachShadow({mode:"open"}):this,x={...c,events:new mt,host:this,root:p,tagName:t},d=new s(x);this[w]=d,d[w]=x,at.add(d),H(this,n,!0);for(const l of c.attr){const u=G(l);R(d,l,Rt(this,u)),B(d,l,y=>{(bt(y)||y===null)&&d[w]&&E(this,u,y)})}for(const l of c.prop)Q(this,l)&&R(d,l,this[l]),B(this,l,u=>R(d,l,u)),B(d,l,u=>this[l]=u),this[l]=d[l];j(d,"init"),ce(this,p,()=>{if(d[w]){j(d,"parse");const l=lt();l.innerHTML=c.template,it(d,l.content),p.innerHTML="";const u=p.getRootNode();if(c.style&&!u.querySelector("style."+n)){const y=yt("style");H(y,n,!0),y.prepend(_t(c.style)),(u.body||u).prepend(y)}p.append(l.content),j(d,"viewInit")}})}disconnectedCallback(){const p=this[w];j(p,"destroy"),at.delete(p),Bt(this),delete p[w],delete this[w]}}f.observedAttributes=[...c.attr].map(G);try{const h=[f,s,c];ut.emit("component",...h),customElements.define(t,f),At.add(h)}catch{}return f},$t=(t,e,s,n)=>{t.selectorText&&(t.selectorText=t.selectorText.split(",").map(o=>{o=o.trim();const i=f=>`${f}.${s}`,r=(f,h)=>f.replace(/:host/,h),c=r(o,"")==o;return n?(c||o.includes(" "))&&(o=i(o)):(o=r(o,e),c&&(o=`${e} ${i(o)}`)),o}).join(","),e="");for(const o of t.cssRules??[])$t(o,e,s,n);return t.cssText},le=(t,e,s,n)=>[...Ht(t)].map(o=>$t(o,e,s,n)).join(""),rt=(t,...e)=>String.raw({raw:t},...e),Et=rt;Mt("flyout-menu",{style:rt`
            .menu {
                background: black;
                color: white;
                right: 100%;
                padding: 8px;
                position: fixed;
                top: 0;
                transition-property: left, right;
                transition-duration: 0.5s;
                transition-timing-function: ease-in-out;
                width: 300px;
                max-width: calc(100% - 120px);
                border-right: #333 solid 1px;
                border-bottom: #333 solid 1px;
                box-sizing: border-box;
                interpolate-size: allow-keywords;
            }

            .menu.flyout {
                right: calc(100% - min(calc(100% - 120px), 300px));
            }

            @media screen and (min-width: 1280px) {
                .menu {
                    display: none;
                }
            }

            svg {
                fill: white;
            }

            .toggle {
                position: absolute;
                top: 0;
                left: 100%;
                display: block;
                background: black;
                padding: 8px;
                border-right: #333 solid 1px;
                border-bottom: #333 solid 1px;
            }

            /* scrollbar on the left */
            .scrollable {
                max-height: 100vh;
                overflow-y: auto;
                padding-left: 8px;
                box-sizing: border-box;
                direction: rtl
            }

            .scrollable::-webkit-scrollbar {
                width: 8px;
            }

            .scrollable::-webkit-scrollbar-thumb {
                background: #333;
                border-radius: 4px;
            }

            menu-items {
                direction: ltr;
            }
        `,template:Et`
            <div #ref="menu" class="unprintable menu">
                <a class="toggle" @click.stop.prevent="toggle()" href="#">
                    <svg
                        viewBox="0 0 100 100"
                        width="40"
                        height="40"
                        style="fill: white"
                    >
                        <rect
                            x="5"
                            y="14"
                            width="90"
                            height="16"
                            rx="10"
                        ></rect>
                        <rect
                            x="5"
                            y="42"
                            width="90"
                            height="16"
                            rx="10"
                        ></rect>
                        <rect
                            x="5"
                            y="70"
                            width="90"
                            height="16"
                            rx="10"
                        ></rect>
                    </svg>
                </a>

                <div class="scrollable">
                    <menu-items></menu-items>
                </div>
            </div>
        `},class{menu;toggle(){this.menu.classList.toggle("flyout")}});Mt("menu-items",{style:rt`
            .top-image {
                max-width: 260px;
                width: 100%;
                padding: 1rem;
                box-sizing: border-box;
            }

            .site-name {
                font-size: 1.5rem;
                font-weight: bold;
                margin: 0.5rem 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .links {
                flex-direction: column;
                display: flex;
                gap: 0.5rem;
            }

            .links a {
                color: #ddd;
                text-decoration: none;
            }

            .site-name a {
                color: white;
                text-decoration: none;
            }

            .bottom-wrapper {
                display: flex;
                justify-content: center;
            }

            .bottom-image {
                width: 60%;
                max-width: 140px;
                padding: 1rem;
                box-sizing: border-box;
            }
        `,template:Et`
            <a href="/"
                ><img
                    class="top-image"
                    src="/Images/metacycle-dark-background.webp"
                    alt="Metacycle"
            /></a>

            <div class="site-name"><a href="/">Metacyclopedia</a></div>

            <p class="links">
                <a *for="link of links" href="{{link.href}}">{{link.text}}</a>
            </p>

            <div class="bottom-wrapper">
                <img
                    class="bottom-image"
                    src="/Images/tron.jpg"
                    alt="Tron Effect"
                />
            </div>
        `},class{links=[{href:"/",text:"Home"},{href:"/accessories/",text:"Accessories"},{href:"/battery/",text:"Battery"},{href:"/battery-activator/",text:"Battery Activator"},{href:"/can-bus/",text:"CAN Bus"},{href:"/charger/",text:"Charger"},{href:"/community/",text:"Community"},{href:"/connect-through-usb-port/",text:"Connect through USB Port"},{href:"/connect-via-bluetooth/",text:"Connect via Bluetooth"},{href:"/connect-with-20-pin-cable/",text:"Connect with 20-pin Cable"},{href:"/controller/",text:"Controller"},{href:"/display-unit/",text:"Display Unit"},{href:"/files/",text:"Files"},{href:"/metahack/",text:"MetaHack"},{href:"/motor/",text:"Motor"},{href:"/parts/",text:"Parts"},{href:"/problems/",text:"Problems"},{href:"/programming/",text:"Programming"},{href:"/programming-cable/",text:"Programming Cable"},{href:"/registration/",text:"Registration & VIN"},{href:"/removing-alarm-system/",text:"Removing Alarm System"},{href:"/serial-protocol/",text:"Serial Protocol"},{href:"/tools/",text:"Tools"},{href:"/tutorials/",text:"Tutorials"},{href:"/windows-software/",text:"Windows Software"}]});
