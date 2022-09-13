"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[1989],{70172:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(14050),o=n(33555),c=n(6137),s=n(83716),l=n(83158),i=n(2155),a=n(46752),d=n(32340),u=n(6202),m=n(31212),v=n(59107),f=n(3657),p=n(21747),g=n(46898);const h=(0,a.y)("Avatar");h.media=h("media"),h.icon=h("icon");const Z=(0,r.X$)((e=>{var t;let{className:n,size:Z="large",chat:E,user:b,photo:y,userStatus:P,text:I,isSavedMessages:w,noVideo:A,noLoop:C,lastSyncTime:T,observeIntersection:N,onClick:k}=e;const{loadFullUser:B}=(0,o.Sv)(),S=(0,r.sO)(null),L=(0,r.sO)(null),U=(0,f.Op)(S,N),O=b&&(0,l.NB)(b),R=b&&(0,l.pK)(b.id);let q,x;const F=U&&!A&&(null==b?void 0:b.isPremium)&&(null==b?void 0:b.hasVideoAvatar),D=null==b||null===(t=b.fullInfo)||void 0===t?void 0:t.profilePhoto,V=F&&(null==D?void 0:D.isVideo),H="jumbo"===Z;w||O||(b?q=(0,l.RT)(b,H?"big":void 0):E?q=(0,l.RT)(E,H?"big":void 0):y&&(q=`photo${y.id}?size=m`),V&&(x=(0,l.RT)(b,void 0,"video")));const M=(0,u.Z)(q,!1,c.IU.BlobUrl,T),j=(0,u.Z)(x,!V,c.IU.BlobUrl,T),z=Boolean(M||j),J=Boolean(U&&j),{transitionClassNames:$}=(0,m.Z)(z,void 0,z,"slow");(0,p.Z)(L,J),(0,g.Z)(L,[J]),(0,r.d4)((()=>{const e=L.current;if(!e||!C)return;const t=()=>{e.currentTime=0};return e.addEventListener("ended",t),()=>e.removeEventListener("ended",t)}),[C]);const K=null==b?void 0:b.id;(0,r.d4)((()=>{F&&!D&&B({userId:K})}),[B,D,K,F]);const X=(0,v.Z)();let Y;const _=b?(0,l.Js)(b):E?(0,l.U)(X,E):I;if(w)Y=r.ZP.createElement("i",{className:(0,a.Z)(h.icon,"icon-avatar-saved-messages"),"aria-label":_});else if(O)Y=r.ZP.createElement("i",{className:(0,a.Z)(h.icon,"icon-avatar-deleted-account"),"aria-label":_});else if(R)Y=r.ZP.createElement("i",{className:(0,a.Z)(h.icon,"icon-reply-filled"),"aria-label":_});else if(z)Y=r.ZP.createElement(r.ZP.Fragment,null,r.ZP.createElement("img",{src:M,className:(0,a.Z)(h.media,"avatar-media",$,j&&"poster"),alt:_,decoding:"async"}),J&&r.ZP.createElement("video",{ref:L,src:j,className:(0,a.Z)(h.media,"avatar-media"),muted:!0,autoPlay:!0,disablePictureInPicture:!0,loop:!C,playsInline:!0}));else if(b){const e=(0,l.Js)(b);Y=e?(0,i.Xv)(e,2):void 0}else if(E){const e=(0,l.U)(X,E);Y=e&&(0,i.Xv)(e,(0,l.YC)(E.id)?2:1)}else I&&(Y=(0,i.Xv)(I,2));const W=!w&&b&&P&&(0,l.kM)(b,P),G=(0,a.Z)(`Avatar size-${Z}`,n,`color-bg-${(0,l.Rs)(b||E)}`,w&&"saved-messages",O&&"deleted-account",R&&"replies-bot-account",W&&"online",k&&"interactive",!w&&!M&&"no-photo"),Q=Boolean(w||M),ee=(0,r.I4)((e=>{k&&k(e,Q)}),[k,Q]),te=(b||E)&&(b||E).id;return r.ZP.createElement("div",{ref:S,className:G,onClick:ee,"data-test-sender-id":s.Cg?te:void 0,"aria-label":"string"==typeof Y?_:void 0},"string"==typeof Y?(0,d.Z)(Y,["jumbo"===Z?"hq_emoji":"emoji"]):Y)}))},21747:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(14050),o=n(69118),c=n(74753),s=n(45332),l=n(18674);function i(e,t){var n;const i=(0,r.sO)(null===(n=e.current)||void 0===n?void 0:n.paused),a=(0,r.sO)();a.current=t;const d=(0,r.I4)((()=>{e.current&&(i.current=!e.current.paused,i.current&&e.current.pause())}),[e]),u=(0,r.I4)((()=>{e.current&&i.current&&a.current&&document.body.contains(e.current)&&(0,c.Z)(e.current)}),[e]),m=(0,r.I4)((()=>{(0,o.T2)(u)}),[u]);(0,s.Z)(d,m),(0,l.ZP)(d,u)}},21273:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(91713),o=n(14050),c=n(69118),s=n(87675),l=n(77361),i=n(80036);const a=".ListItem",d=20,u=800,m=e=>{let{ref:t,className:n,items:m,itemSelector:v=a,preloadBackwards:f=d,sensitiveArea:p=u,withAbsolutePositioning:g,maxHeight:h,noScrollRestore:Z=!1,noScrollRestoreOnTop:E=!1,noFastList:b,cacheBuster:y,children:P,onLoadMore:I,onScroll:w,onKeyDown:A,onDragOver:C,onDragLeave:T}=e,N=(0,o.sO)(null);t&&(N=t);const k=(0,o.sO)({}),[B,S]=(0,o.Ye)((()=>I?[(0,c.Ds)((function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];I({direction:r.Uq.Backwards,noScroll:e})}),1e3,!0,!1),(0,c.Ds)((()=>{I({direction:r.Uq.Forwards})}),1e3,!0,!1)]:[]),[I,m]);(0,o.d4)((()=>{if(!B)return;if(f>0&&(!m||m.length<f))return void B(!0);const{scrollHeight:e,clientHeight:t}=N.current;t&&e<=t&&B()}),[m,B,f]),(0,o.bt)((()=>{const e=N.current,t=k.current;let n;if(t.listItemElements=e.querySelectorAll(v),t.currentAnchor&&Array.from(t.listItemElements).includes(t.currentAnchor)){const{scrollTop:r}=e;n=r+(t.currentAnchor.getBoundingClientRect().top-t.currentAnchorTop)}else{const e=t.listItemElements[0];e&&(t.currentAnchor=e,t.currentAnchorTop=e.getBoundingClientRect().top)}g||Z||E&&0===e.scrollTop||((0,s.Z)(e,n),t.isScrollTopJustUpdated=!0)}),[m,v,Z,E,y,g]);const L=(0,o.I4)((e=>{if(S&&B){const{isScrollTopJustUpdated:e,currentAnchor:t,currentAnchorTop:n}=k.current,r=k.current.listItemElements;if(e)return void(k.current.isScrollTopJustUpdated=!1);const o=r.length,c=N.current,{scrollTop:s,scrollHeight:l,offsetHeight:i}=c,a=s<=(o?r[0].offsetTop:0)+p,d=(o?r[o-1].offsetTop+r[o-1].offsetHeight:l)-(s+i)<=p;let u=!1;if(a){const e=r[0];if(e){const r=e.getBoundingClientRect().top,o=null!=t&&t.offsetParent&&t!==e?t.getBoundingClientRect().top:r;t&&void 0!==n&&o>n&&(k.current.currentAnchor=e,k.current.currentAnchorTop=r,u=!0,S())}}if(d){const e=r[o-1];if(e){const r=e.getBoundingClientRect().top,o=null!=t&&t.offsetParent&&t!==e?t.getBoundingClientRect().top:r;t&&void 0!==n&&o<n&&(k.current.currentAnchor=e,k.current.currentAnchorTop=r,u=!0,B())}}if(!u)if(null!=t&&t.offsetParent)k.current.currentAnchorTop=t.getBoundingClientRect().top;else{const e=r[0];e&&(k.current.currentAnchor=e,k.current.currentAnchorTop=e.getBoundingClientRect().top)}}w&&w(e)}),[B,S,w,p]);return o.ZP.createElement("div",{ref:N,className:n,onScroll:L,teactFastList:!b&&!g,onKeyDown:A,onDragOver:C,onDragLeave:T},g&&null!=m&&m.length?o.ZP.createElement("div",{teactFastList:!b,style:(0,i.Z)("position: relative",l.wZ&&`height: ${h}px`)},P):P)}},13103:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(14050),o=n(517),c=n(46752),s=n(18674),l=n(31212),i=n(274),a=n(59107),d=n(46590),u=n(231),m=n(62898);const v=e=>{let{dialogRef:t,title:n,className:v,isOpen:f,header:p,hasCloseButton:g,noBackdrop:h,children:Z,style:E,onClose:b,onCloseAnimationEnd:y,onEnter:P,shouldSkipHistoryAnimations:I}=e;const{shouldRender:w,transitionClassNames:A}=(0,l.Z)(f,y,I,void 0,I),C=(0,r.sO)(null);(0,r.d4)((()=>f?(0,o.Z)({onEsc:b,onEnter:P}):void 0),[f,b,P]),(0,r.d4)((()=>f&&C.current?function(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const r=n.findIndex((e=>e.isSameNode(document.activeElement)));let o=0;r>=0&&(o=t.shiftKey?r>0?r-1:n.length-1:r<n.length-1?r+1:0),n[o].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}(C.current):void 0),[f]),(0,d.Z)({isActive:f,onBack:b}),(0,i.Z)((e=>{let[t]=e;return document.body.classList.toggle("has-open-dialog",f),(f||!f&&void 0!==t)&&(0,s.YW)(200),()=>{document.body.classList.remove("has-open-dialog")}}),[f]);const T=(0,a.Z)();if(!w)return;const N=(0,c.Z)("Modal",v,A,h&&"transparent-backdrop");return r.ZP.createElement(m.Z,null,r.ZP.createElement("div",{ref:C,className:N,tabIndex:-1,role:"dialog"},r.ZP.createElement("div",{className:"modal-container"},r.ZP.createElement("div",{className:"modal-backdrop",onClick:b}),r.ZP.createElement("div",{className:"modal-dialog",ref:t},p||(n?r.ZP.createElement("div",{className:"modal-header"},g&&r.ZP.createElement(u.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:T("Close"),onClick:b},r.ZP.createElement("i",{className:"icon-close"})),r.ZP.createElement("div",{className:"modal-title"},n)):void 0),r.ZP.createElement("div",{className:"modal-content custom-scroll",style:E},Z)))))}},62898:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(14050),o=n(31664);const c=e=>{let{containerId:t,className:n,children:c}=e;const s=(0,r.sO)();return s.current||(s.current=document.createElement("div")),(0,r.bt)((()=>{const e=document.querySelector(t||"#portals");if(!e)return;const r=s.current;return n&&r.classList.add(n),e.appendChild(r),()=>{o.Z.render(void 0,r),e.removeChild(r)}}),[n,t]),o.Z.render(c,s.current)}},9211:(e,t,n)=>{n.d(t,{M:()=>c,P:()=>s});var r=n(86087),o=n(83716);function c(e,t){var n;const{appConfig:c}=e;if(!c)return o.pr[t][0];const s=(0,r.wV)(e),{limits:l}=c,i=null!==(n=l[t][s?1:0])&&void 0!==n?n:o.pr[t][s?1:0];return"dialogFilters"===t?i+1:i}function s(e,t){const{appConfig:n}=e;if(!n)return o.pr[t][1];const{limits:r}=n;return r[t][1]}},27407:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(14050),o=n(91713),c=n(60782),s=n(65326),l=n(87204);function i(e,t,n,r){const{length:c}=e,s=r?e.indexOf(r):0,l=t===o.Uq.Forwards?s:s+1||c,i=Math.max(0,l-n),a=l+n-1,d=e.slice(Math.max(0,i),a+1);let u,m;switch(t){case o.Uq.Forwards:u=l>0,m=i>=0;break;case o.Uq.Backwards:u=l<c,m=a<=c-1}return{newViewportIds:d,areSomeLocal:u,areAllLocal:m}}const a=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30;const d=(0,r.sO)(),u=(0,r.sO)((()=>{if(!t||d.current)return;const{newViewportIds:e}=i(t,o.Uq.Forwards,a,t[0]);return e})()),m=(0,s.Z)();n&&(d.current={});const v=(0,l.Z)(t),f=(0,l.Z)(n);if(!t||n||t===v&&n===f)t||(u.current=void 0);else{const{offsetId:e=t[0],direction:n=o.Uq.Forwards}=d.current||{},{newViewportIds:r}=i(t,n,a,e);u.current&&(0,c.et)(u.current,r)||(u.current=r)}const p=(0,r.I4)((n=>{let{direction:r,noScroll:s}=n;const l=u.current,v=l?r===o.Uq.Backwards?l[l.length-1]:l[0]:void 0;if(!t)return void(e&&e({offsetId:v}));s||(d.current={...d.current,direction:r,offsetId:v});const{newViewportIds:f,areSomeLocal:p,areAllLocal:g}=i(t,r,a,v);!p||l&&(0,c.et)(l,f)||(u.current=f,m()),!g&&e&&e({offsetId:v})}),[t,a,e,m]);return n?[t]:[u.current,p]}},62357:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(14050);const o=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const o=(0,r.sO)(e);(0,r.bt)((()=>{o.current=e}),[e]),(0,r.d4)((()=>{if(void 0===t)return;const e=setInterval((()=>o.current()),t);return n||o.current(),()=>clearInterval(e)}),[t,n])}},46898:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(14050),o=n(69118);function c(e,t){(0,r.d4)((()=>{const t=e.current;return()=>{t&&(0,o.T2)((()=>{t.pause(),t.src="",t.load()}))}}),t)}},87675:(e,t,n)=>{n.d(t,{Z:()=>s,z:()=>c});var r=n(77361),o=n(82972);function c(e){e.style.display="none",(0,o.Z)(e),e.style.display=""}const s=(e,t)=>{r.cj&&(e.style.overflow="hidden"),void 0!==t&&(e.scrollTop=t),r.cj&&(e.style.overflow="")}}}]);
//# sourceMappingURL=1989.c94da00b449c7f88e705.js.map