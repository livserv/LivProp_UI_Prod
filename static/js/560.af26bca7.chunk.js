"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[560],{93748:(t,n,e)=>{e.r(n),e.d(n,{default:()=>d});var o=e(99584),c=e(23424),r=e(52216),a=e(35240),i=e(4260),s=e(80156),_=e(97884);const d=function(){const{organizationId:t,botId:n,recipientId:e,chatId:d}=(0,c.W4)(),[u,E]=o.useState();return o.useEffect((()=>{a._M("/bot/".concat(t,"/").concat(n,"/chat/history/").concat(e,"/").concat(d,"?includeBot=1")).then((t=>{var n;const e=(0,r._m)(null===(n=t.messages[0])||void 0===n?void 0:n.createdAt);t.botDesign=(0,s.A)(t.botDesign,{window:{width:"600px",height:"calc(100vh - 120px)"},header:{titleText:e+" (".concat(t.titleText,")")}}),E(t)}),(t=>{console.error("Unable to load chat conversations:",t)}))}),[t,n,e,d]),u?(0,_.jsx)("div",{className:"conversation-history",children:(0,_.jsx)(i.c,{botDesign:u.botDesign,messages:u.messages,showTime:!0})}):(0,_.jsx)("div",{children:"Loading... Please wait..."})}},35240:(t,n,e)=>{e.d(n,{Aj:()=>i,_M:()=>r,aE:()=>s,s$:()=>a,wz:()=>u});var o=e(52216),c=e(79028);async function r(t,n){return _("GET",t,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(t,n){return _("POST",t,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function i(t,n){return _("PUT",t,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(t,n){return _("DELETE",t,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function _(t,n,e){let{headers:o,noAuth:c,...r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a="POST"===t||"PUT"===t||"DELETE"===t;n=u(n,a?void 0:e);const i=e instanceof FormData;if(i||(e=e&&"object"===typeof e&&a?JSON.stringify(e):void 0),o||(o={}),i||(o["Content-Type"]="application/json"),o.Accept="application/json",!1!==c){const t=sessionStorage.getItem("token");t&&(o.Authorization="Bearer ".concat(t))}try{const c=await fetch(n,{...r,headers:o,body:e,method:t}),a=await c.json();if(c.ok){const{data:t,...n}=a;return delete n.status,t&&!Object.keys(n).length?t:a}throw a.message?new Error(a.message):a}catch(_){var s;throw console.error("Error calling API: ",_),null!==(s=_.message)&&void 0!==s&&s.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(_.message)}}const d=(0,o.Sm)(c.UX,"/");function u(t,n){if(!t)return t;const e=n&&Object.keys(n);if(null!==e&&void 0!==e&&e.length){const o=e.reduce(((t,e)=>{let o=n[e];return null===o||void 0===o?t:(o="".concat(e,"=").concat(encodeURIComponent(o)),t?"".concat(t,"&").concat(o):o)}),"");o&&(t="".concat(t).concat(t.includes("?")?"&":"?").concat(o))}return t.startsWith("https://")?t:"".concat(d).concat(t)}},52216:(t,n,e)=>{function o(t,n){return t.replace(new RegExp("".concat(c(n),"+$")),"")}function c(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function r(t){const n=new Date(t),e=n.getDate(),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()],c=n.getFullYear();return"".concat(o," ").concat(e,", ").concat(c)}function a(t,n,e){if(!n&&!t)return e;t=t||{};const o=Array.isArray(t)?[...t]:{...t};if(n.includes(".")){const c=n.indexOf("."),r=n.substring(0,c),i=n.substring(c+1);o[r]=a(t[r],i,e)}else o[n]=e;return o}e.d(n,{Sm:()=>o,_m:()=>r,eQ:()=>a})},79028:(t,n,e)=>{e.d(n,{AZ:()=>c,So:()=>i,UX:()=>o,cX:()=>r,vc:()=>a});const o="https://backend.livhousing.com",c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://backend.livhousing.com"}.REACT_APP_IP_DATA_API_KEY||"d5f26b13e02d0e43f0870c726797b2c2f726b739a4c91bf9e4bb59c2",r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://backend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NGROK_BACKEND_URL:"https://60f1-203-192-224-75.ngrok-free.app",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://backend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,i="https://60f1-203-192-224-75.ngrok-free.app"}}]);