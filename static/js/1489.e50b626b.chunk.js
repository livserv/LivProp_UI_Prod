"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[1489],{32829:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(25371),a=n(44414);function s(e){let{children:t,type:n}=e;return(0,a.jsx)(i.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}s.defaultProps={type:"scale"}},46278:(e,t,n)=>{n.d(t,{A:()=>l});n(9950);var i=n(63464),a=n(40033),s=n(28170),o=n(79739),r=n(10226),c=n(44414);const l=e=>{const{title:t,children:n,open:l,setOpen:d,onConfirm:u}=e;return(0,c.jsxs)(i.A,{open:l,onClose:()=>d(!1),style:{zIndex:1e4},children:[(0,c.jsx)(a.A,{sx:{m:0,p:2},id:"confirm-dialog",children:t}),(0,c.jsx)(s.A,{dividers:!0,children:n}),(0,c.jsxs)(o.A,{children:[(0,c.jsx)(r.A,{size:"large",type:"submit",variant:"contained",color:"secondary",onClick:()=>d(!1),children:"No"}),(0,c.jsx)(r.A,{size:"large",type:"submit",variant:"contained",color:"success",onClick:()=>{d(!1),u()},children:"Yes"})]})]})}},92728:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(9950),a=n(48205),s=n(44414);const o=i.forwardRef((function(e,t){return(0,s.jsx)(a.A,{direction:"up",ref:t,...e})}))},51637:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(9950),a=n(14857),s=n(48089),o=n(45180),r=n(82053),c=n(50704),l=n(44414);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,i.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:i,children:u,content:h=!0,contentSX:p={},darkTitle:g,elevation:m,secondary:x,shadow:f,sx:A={},title:b,...y}=e;const j=(0,a.A)();return i="dark"===j.palette.mode?i||!0:i,(0,l.jsxs)(s.A,{elevation:m||0,ref:t,...y,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===j.palette.mode?j.palette.divider:j.palette.grey.A800,boxShadow:!i||n&&"dark"!==j.palette.mode?"inherit":f||j.customShadows.z1,":hover":{boxShadow:i?f||j.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:j.typography.fontFamily,fontSize:"0.75rem"},...A},children:[!g&&b&&(0,l.jsx)(o.A,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:b,action:x}),g&&b&&(0,l.jsx)(o.A,{sx:d,title:(0,l.jsx)(r.A,{variant:"h3",children:b}),action:x}),h&&(0,l.jsx)(c.A,{sx:p,children:u}),!h&&u]})}))},26092:(e,t,n)=>{n.d(t,{A:()=>p});n(9950);var i=n(92728),a=n(63464),s=n(40033),o=n(28170),r=n(96319),c=n(59254),l=n(14857),d=n(25333),u=n(44414);const h=(0,c.Ay)(a.A)((e=>{let{theme:t}=e;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function p(e){const t=(0,l.A)(),{breakpoints:n}=t,{openPopUpDialog:a,setPopUpDialog:c,onClose:p=(()=>c(!1)),title:g,width:m="60%"}=e;return(0,u.jsxs)(h,{TransitionComponent:i.A,"aria-labelledby":"customized-dialog-title",open:a,PaperProps:{sx:{width:{width:m},[n.down("sm")]:{width:"90%"}}},children:[(0,u.jsx)(s.A,{sx:{m:0,p:2},id:"customized-dialog-title",children:g}),(0,u.jsx)(d.A,{"aria-label":"close",onClick:p,sx:{position:"absolute",right:8,top:8},children:(0,u.jsx)(r.A,{})}),(0,u.jsx)(o.A,{dividers:!0,children:e.children})]})}},93383:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(9950),a=n(10226),s=n(46639),o=n(44414);const r=function(e){let{onClick:t,disabled:n,isLoading:r,children:c,...l}=e;const[d,u]=i.useState(r);return(0,o.jsxs)(a.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:d||r||n,...l,children:[(d||r)&&(0,o.jsx)(s.A,{size:16,color:"primary",style:{marginRight:"10px"}}),c]})}},6716:(e,t,n)=>{n.d(t,{A:()=>A});n(9950);var i=n(60899),a=n(93230),s=n(3788),o=n(82053),r=n(10226),c=n(24516),l=n(29714),d=n(61467),u=n(32829),h=n(26092),p=n(44364),g=n(30334),m=n(70855),x=n(58178),f=n(44414);const A=function(e){let{isOpen:t,toggleOpen:n}=e;return(0,f.jsx)(h.A,{openPopUpDialog:t,setPopUpDialog:n,title:"Upload Training Documents",children:(0,f.jsx)(j,{setDocumentUploadDialogOpen:n})})},b=p.Og?p.Og:5242880,y=l.Ik().shape({file:l.gl().required("File is not selected").test("is-valid-size","Maximum allowed file size is ".concat(b/1048576," MB"),(e=>e&&e.size<=b))});function j(e){let{setDocumentUploadDialogOpen:t}=e;const[,n]=(0,m.G)(),l=null===n||void 0===n?void 0:n.trainingMedia;return(0,f.jsxs)(i.Ay,{container:!0,spacing:1,children:[(0,f.jsx)(i.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,f.jsx)(a.A,{spacing:1,children:(0,f.jsx)(s.A,{children:"File Upload (.csv, .txt, .docx, .pdf)"})})}),(0,f.jsx)(i.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,f.jsx)(d.l1,{initialValues:{file:null},validationSchema:y,onSubmit:async(e,n)=>{let{setErrors:i,setStatus:a,setSubmitting:s}=n;try{const{name:n}=e.file;l.some((e=>e.originalName===n))?(0,x.i)(!0,"The file already uploaded!. Please select another file","error"):(s(!0),await(0,g.MD)(e.file),a({success:!0}),t(!1),(0,x.i)(!0,"The file uploaded successfully!","success"))}catch(o){console.error("Error uploading the document:",o),a({success:!1}),i({submit:o.message}),s(!1),t(!1),(0,x.i)(!0,"Not able to upload the file. Try after sometime!","error")}},children:e=>{let{values:t,errors:n,isSubmitting:a,setFieldValue:s}=e;return(0,f.jsxs)(d.lV,{children:[(0,f.jsxs)(i.Ay,{container:!0,spacing:2,children:[(0,f.jsx)(i.Ay,{item:!0,xs:12,md:12,children:t.file&&(0,f.jsxs)(o.A,{variant:"body2",children:["Selected File: ",t.file.name]})}),(0,f.jsx)(i.Ay,{item:!0,xs:6,md:6,container:!0,justifyContent:"flex-end",children:(0,f.jsx)(d.D0,{type:"file",name:"file",as:e=>{let{field:t}=e;return(0,f.jsx)(u.A,{children:(0,f.jsxs)(r.A,{variant:"contained",component:"label",htmlFor:"file-input",size:"large",sx:{whiteSpace:"nowrap"},children:["Select File",(0,f.jsx)("input",{...t,type:"file",id:"file-input",style:{display:"none"},onChange:e=>{s("file",e.currentTarget.files[0])},accept:".csv,.txt,.docx,.doc,.pdf,text/plain"})]})})}})}),(0,f.jsx)(i.Ay,{item:!0,xs:6,md:6,children:(0,f.jsx)(u.A,{children:(0,f.jsx)(r.A,{variant:"contained",size:"large",type:"submit",disabled:a,children:a?"Uploading...":"Upload"})})})]}),(0,f.jsx)(i.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,f.jsx)(c.A,{error:!0,id:"helper-text-file-input",children:n.file})})]})}})})]})}},11489:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var i=n(9950),a=n(16491),s=n(60899),o=n(82053),r=n(93230),c=n(3788),l=n(2660),d=n(24516),u=n(33092),h=n(59254),p=n(80417),g=n(79046),m=n(12504),x=n(4120),f=n(94540),A=n(29714),b=n(61467),y=n(33340),j=n(70855),v=n(32829),S=n(30334),w=n(93383),_=n(26092),D=n(58178),T=n(57988),E=n(62375),C=n(50704),I=n(53065),P=n(25713),M=n(25333),U=n(25277),k=n(51637),N=n(46278);function O(e,t,n,i){function a(e,t,n){const{botsList:i}=y.nc.getState(),a=i.find((t=>t._id===e));if(a){const i=a.trainingMedia.map((e=>e.url===t?{...e,name:n}:e));((e,t)=>{y.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(e,i),y.nc.setState((()=>({trainingMediaUpdate:!0})))}else console.error("Bot not found for the given ID.")}a(n,e,"delete"===i?e:t)}var R=n(44414);const z=function(e){let{media:t,botId:n,organizationId:a}=e;const[r,c]=i.useState(!1),{name:u,url:h,type:p,originalName:g}=t;return(0,R.jsxs)(k.A,{contentSX:{p:2.25},children:[(0,R.jsxs)(C.A,{style:{padding:0,minHeight:"65px",maxHeight:"65px"},children:[g&&(0,R.jsxs)(o.A,{variant:"h6",style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"300px"},children:[(0,R.jsx)("strong",{children:"File Name :"})," ",(0,R.jsx)(I.A,{style:{cursor:"pointer"},title:g,children:(0,R.jsx)("span",{children:(0,R.jsx)("a",{href:h,target:"_blank",rel:"noreferrer",children:g})})})]}),"single_page"===p&&(0,R.jsxs)(o.A,{variant:"h6",style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"300px"},children:[(0,R.jsx)("strong",{children:"URL :"})," ",(0,R.jsx)(I.A,{style:{cursor:"pointer"},title:h,children:(0,R.jsx)("span",{children:(0,R.jsx)("a",{href:h,target:"_blank",rel:"noreferrer",children:h})})})]}),(0,R.jsxs)(o.A,{variant:"h6",children:[(0,R.jsx)("strong",{children:"Type :"})," ","single_page"===p?"Web Page":"Document"]}),(0,R.jsxs)(o.A,{variant:"h6",children:[(0,R.jsx)("strong",{children:"Document Name :"})," ",u===h?"NA":(0,R.jsx)(U.A,{label:u,onDelete:()=>((e,t,n)=>{O(e,t,n,"delete")})(h,u,n)})]})]}),(0,R.jsx)(P.A,{style:{justifyContent:"flex-end",padding:"1px"},children:(0,R.jsxs)(s.Ay,{container:!0,children:[(0,R.jsx)(s.Ay,{item:!0,xs:10,md:10,children:u===h&&(0,R.jsx)(b.l1,{initialValues:{trainingMediaName:"",url:h},validationSchema:A.Ik().shape({trainingMediaName:A.Yj().max(50,"Training Media Name length must be less than 50 characters").min(3,"Training Media Name length must be at least 3 characters").required("Training Media Name is required")}),onSubmit:async(e,t)=>{let{setErrors:i,setStatus:a,setSubmitting:s}=t;const{trainingMediaName:o}=e;try{O(h,o,n,"add"),a({success:!0}),s(!0)}catch(r){a({success:!1}),i({submit:r.message}),s(!1)}},children:e=>{let{errors:t,handleBlur:n,handleChange:i,handleSubmit:a,isSubmitting:o,touched:r,values:c}=e;return(0,R.jsx)("form",{noValidate:!0,onSubmit:a,children:(0,R.jsxs)(s.Ay,{container:!0,spacing:1,children:[(0,R.jsxs)(s.Ay,{item:!0,xs:8,md:8,children:[(0,R.jsx)(l.A,{id:"trainingMediaName",type:"trainingMediaName",name:"trainingMediaName",placeholder:"Document Name",defaultValue:c.trainingMediaName,onBlur:n,onChange:i,fullWidth:!0,autoComplete:"off",error:Boolean(r.trainingMediaName&&t&&t.trainingMediaName)}),r.trainingMediaName&&t.trainingMediaName&&(0,R.jsx)(d.A,{error:!0,id:"helper-text-training-media-name",children:t.trainingMediaName})]}),(0,R.jsx)(s.Ay,{item:!0,xs:1,md:1,children:(0,R.jsx)(v.A,{children:(0,R.jsx)(w.A,{isLoading:o,disabled:o,type:"submit",variant:"contained",color:"primary",children:"Add"})})})]})})}})}),(0,R.jsx)(s.Ay,{item:!0,xs:1,md:1,children:(0,R.jsx)(I.A,{title:"text/plain"===p?"View Document":"View Web Page",children:(0,R.jsx)(M.A,{variant:"text",onClick:()=>{return e=h,void window.open(e);var e},children:(0,R.jsx)(E.A,{style:{color:"#5ad74e"}})})})}),(0,R.jsxs)(s.Ay,{item:!0,xs:1,md:1,children:[(0,R.jsx)(I.A,{title:"Delete",children:(0,R.jsx)(M.A,{variant:"text",onClick:()=>c(!0),children:(0,R.jsx)(T.A,{style:{color:"#ff0000"},fontSize:"small"})})}),(0,R.jsxs)(N.A,{title:"Delete file?",open:r,setOpen:c,onConfirm:()=>(async(e,t,n,i)=>{try{const a={organizationId:i,botId:n,fileName:t,fileUrl:e};await(0,S.qt)(a,n,i),(0,D.i)(!0,"The file deleted successfully!","success")}catch(a){(0,D.i)(!0,"Not able to delete the file. Try after sometime!","error")}})(h,u,n,a),children:["Confirm the deletion of ",g||h,"?"]})]})]})})]})};var L=n(6716);const F=(0,h.Ay)(p.A)((e=>{let{theme:t}=e;return{position:"fixed","#trainingDocumentsSpeedDial &":{"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{left:"auto",right:t.spacing(2)},"&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{right:"auto",left:t.spacing(2)}}}}));function B(e){let{botId:t,organizationId:n}=e;const[a,s]=i.useState(!1),[o,r]=i.useState(!1),c=[{icon:(0,R.jsx)(m.A,{}),name:"File Upload (.csv, .txt, .docx, .pdf)",method:()=>{r(!0)}},{icon:(0,R.jsx)(x.A,{}),name:"Add Web Page url",method:()=>{s(!0)}}];return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(F,{ariaLabel:"Upload Training Documents",hidden:!1,icon:(0,R.jsx)(g.A,{}),direction:"down",sx:{"& .MuiFab-primary":{width:40,height:40}},children:c.map((e=>(0,R.jsx)(u.A,{icon:e.icon,tooltipTitle:e.name,onClick:e.method},e.name)))}),(0,R.jsx)(_.A,{openPopUpDialog:a,setPopUpDialog:s,title:"Upload Training Documents",children:(0,R.jsx)(K,{botId:t,organizationId:n,setWebPageUrlAddDialogOpen:s})}),(0,R.jsx)(L.A,{isOpen:o,toggleOpen:r})]})}const W=function(){var e;const[t,n]=(0,i.useState)(!1),[r,c]=(0,i.useState)(!1),l=(0,y.nc)((e=>e.botsList)),d=(0,y.nc)((e=>e.organizationId)),u=(0,y.nc)((e=>e.trainingMediaUpdate)),[h]=(0,j.G)(),p=null===(e=l.find((e=>e._id===h)))||void 0===e?void 0:e.trainingMedia;return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(a.A,{children:[(0,R.jsxs)(s.Ay,{container:!0,spacing:3,children:[(0,R.jsx)(s.Ay,{item:!0,xs:3,children:(0,R.jsx)(o.A,{variant:"h5",children:"Training Documents"})}),(0,R.jsx)(s.Ay,{item:!0,xs:6,sx:{position:"relative",display:"flex",justifyContent:"flex-end"},children:(0,R.jsx)("div",{style:{position:"fixed",right:75},children:(0,R.jsxs)(s.Ay,{container:!0,spacing:3,children:[(0,R.jsx)(s.Ay,{item:!0,children:u&&(0,R.jsx)(v.A,{children:(0,R.jsx)(w.A,{isLoading:t,disabled:t,variant:"contained",color:"success",size:"large",onClick:async()=>{try{n(!0);const e={botId:h,organizationId:d,trainingDocument:p};await(0,S.xW)(e,h),y.nc.setState((()=>({trainingMediaUpdate:!1}))),(0,D.i)(!0,"The document names updated successfully!","success"),n(!1)}catch(e){n(!1),(0,D.i)(!0,"Not able to add document names. Try after sometime!","error")}},children:"Save Changes"})})}),(0,R.jsx)(s.Ay,{item:!0,children:(0,R.jsx)(v.A,{children:(0,R.jsx)(w.A,{isLoading:r,disabled:r,variant:"contained",color:"success",size:"large",onClick:async()=>{c(!0);try{const e=await(0,S.Ei)(h,d),{deleted:t,totalDocs:i,supportedDocsCount:a,processedDocsCount:s,created:o,failedDocs:r}=e,l=r.length,u=l>0?l+" are failed to process":"all supported files processed successfully";c(!1),(0,D.i)(!0,"The bot training completed successfully! In ".concat(i," files ").concat(a," are supported, ").concat(s," files processed, ").concat(t," FAQ's deleted, ").concat(o," FAQ's created and ").concat(u),"success"),n(!1)}catch(e){c(!1),(0,D.i)(!0,"Not able to train the bot. Try after sometime!","error")}},children:"Train the bot"})})})]})})}),(0,R.jsx)(s.Ay,{item:!0,xs:1,sx:{position:"relative"},id:"trainingDocumentsSpeedDial",children:(0,R.jsx)(B,{botId:h,organizationId:d})})]}),(0,R.jsx)(a.A,{children:(0,R.jsx)(s.Ay,{container:!0,spacing:3,children:(0,R.jsx)(V,{trainingMedia:p,botId:h,organizationId:d})})})]})})};function K(e){let{botId:t,organizationId:n,setWebPageUrlAddDialogOpen:i}=e;const[,a]=(0,j.G)();return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(s.Ay,{item:!0,xs:12,children:(0,R.jsx)(b.l1,{initialValues:{webpageUrl:""},validationSchema:A.Ik().shape({webpageUrl:A.Yj().url("Enter valid url!").required("please enter webpage url")}),onSubmit:async(e,s)=>{let{setErrors:o,setStatus:r,setSubmitting:c}=s;try{const{trainingMedia:s}=a;if(s.some((t=>{var n,i;return(null===(n=t.url)||void 0===n?void 0:n.toLowerCase())===(null===(i=e.webpageUrl)||void 0===i?void 0:i.toLowerCase())})))(0,D.i)(!0,"This URL already available in the Training Documents!. Please add another URL","error");else{const a={url:e.webpageUrl};c(!0),await(0,S.KM)(a,t,n),r({success:!0}),i(!1),(0,D.i)(!0,"The url added successfully!","success")}}catch(l){console.error("Error adding training documents:-",l),r({success:!1}),o({submit:l.message}),c(!1),i(!1),(0,D.i)(!0,"Not able to add the url. Try after sometime!","error")}},children:e=>{let{errors:t,handleBlur:n,handleChange:i,handleSubmit:a,isSubmitting:o,touched:u,values:h}=e;return(0,R.jsx)("form",{noValidate:!0,onSubmit:a,children:(0,R.jsxs)(s.Ay,{container:!0,spacing:1,children:[(0,R.jsx)(s.Ay,{item:!0,xs:9,md:9,children:(0,R.jsxs)(r.A,{spacing:1,children:[(0,R.jsx)(c.A,{htmlFor:"webpage-url",children:"Webpage Url"}),(0,R.jsx)(l.A,{id:"webpage-url",type:"webpageUrl",defaultValue:h.webpageUrl,name:"webpageUrl",onBlur:n,onChange:i,autoComplete:"off",fullWidth:!0,placeholder:"https://www.yourwebsite.com/product-info",error:Boolean(u.webpageUrl&&t.webpageUrl)}),u.webpageUrl&&t.webpageUrl&&(0,R.jsx)(d.A,{error:!0,id:"helper-text-webpage-url",children:t.webpageUrl})]})}),(0,R.jsx)(s.Ay,{item:!0,xs:2,md:2,children:(0,R.jsxs)(r.A,{spacing:1,children:[(0,R.jsx)(c.A,{children:"\xa0"}),(0,R.jsx)(v.A,{children:(0,R.jsx)(w.A,{isLoading:o,disabled:o,color:"primary",size:"large",type:"submit",variant:"contained",id:"webpageUrlSubmit",children:"Add"})})]})})]})})}})})})}function V(e){let{trainingMedia:t,botId:n,organizationId:i}=e;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(s.Ay,{item:!0,xs:12,children:t&&0===t.length&&(0,R.jsx)(o.A,{variant:"caption",color:"#FF0000",children:(0,R.jsxs)(s.Ay,{container:!0,spacing:1,children:[(0,R.jsx)(s.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:(0,R.jsx)(f.A,{style:{fontSize:40}})}),(0,R.jsx)(s.Ay,{item:!0,xs:12,md:12,style:{display:"flex",justifyContent:"center"},children:"Training Documents are not uploaded!"})]})})}),t&&t.map(((e,t)=>(0,R.jsx)(s.Ay,{item:!0,xs:12,sm:6,md:4,children:(0,R.jsx)(z,{media:e,botId:n,organizationId:i})},t)))]})}},8478:(e,t,n)=>{n.d(t,{Jt:()=>s,Ne:()=>u,TF:()=>c,bE:()=>o,yJ:()=>r});var i=n(32026),a=n(44364);async function s(e,t){return l("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function o(e,t){return l("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function r(e,t){return l("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t){return l("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t,n){let{headers:i,noAuth:a,...s}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o="POST"===e||"PUT"===e||"DELETE"===e;t=u(t,o?void 0:n);const r=n instanceof FormData;if(r||(n=n&&"object"===typeof n&&o?JSON.stringify(n):void 0),i||(i={}),r||(i["Content-Type"]="application/json"),i.Accept="application/json",!1!==a){const e=sessionStorage.getItem("token");e&&(i.Authorization="Bearer ".concat(e))}try{const a=await fetch(t,{...s,headers:i,body:n,method:e}),o=await a.json();if(a.ok){const{data:e,...t}=o;return delete t.status,e&&!Object.keys(t).length?e:o}throw o.message?new Error(o.message):o}catch(l){var c;throw console.error("Error calling API: ",l),null!==(c=l.message)&&void 0!==c&&c.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(l.message)}}const d=(0,i.s8)(a.jn,"/");function u(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const i=n.reduce(((e,n)=>{let i=t[n];return null===i||void 0===i?e:(i="".concat(n,"=").concat(encodeURIComponent(i)),e?"".concat(e,"&").concat(i):i)}),"");i&&(e="".concat(e).concat(e.includes("?")?"&":"?").concat(i))}return e.startsWith("https://")?e:"".concat(d).concat(e)}},77382:(e,t,n)=>{n.d(t,{CA:()=>r,Mk:()=>s,bZ:()=>o});var i=n(8478),a=n(33340);async function s(e){const{organizationId:t,selectedBotId:n}=a.nc.getState(),s=await i.bE("/bot/".concat(t,"/").concat(n,"/knowledge-base"),e);a.nc.setState((t=>{const i={...t.kbDocs||{}};if(i[n]=[...i[n]],e._id){const e=i[n].findIndex((e=>e._id===s._id));e>=0?i[n][e]=s:i[n].push(s)}else i[n].push(s);return{kbDocs:i}}))}async function o(e){const{organizationId:t,selectedBotId:n,kbDocs:s}=a.nc.getState();if(e&&Array.isArray(null===s||void 0===s?void 0:s[n]))return;const o=await i.Jt("/bot/".concat(t,"/").concat(n,"/knowledge-base/list"));a.nc.setState((e=>({kbDocs:{...e.kbDocs||{},[n]:o}})))}async function r(e){const{organizationId:t,selectedBotId:n}=a.nc.getState();await i.TF("/bot/".concat(t,"/").concat(n,"/knowledge-base/").concat(e)),a.nc.setState((t=>{var i;const a={...t.kbDocs||{}};return a[n]=null===(i=a[n])||void 0===i?void 0:i.filter((t=>t._id!==e)),{kbDocs:a}}))}},30334:(e,t,n)=>{n.d(t,{Ei:()=>d,KM:()=>o,MD:()=>c,pn:()=>u,qt:()=>r,xW:()=>l});var i=n(8478),a=n(33340),s=n(77382);async function o(e,t,n){const s=await i.bE("/bot/add-training-media",e,{headers:{botId:t,organizationId:n}}),{trainingMedia:o}=s;((e,t)=>{a.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(t,o)}async function r(e,t,n){const s=await i.bE("/bot/delete-training-media-document",e,{headers:{botId:t,organizationId:n}}),{trainingDocuments:o}=s;((e,t)=>{a.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(t,o)}async function c(e){const{organizationId:t,selectedBotId:n}=a.nc.getState(),s=new FormData;s.append("file",e);const o={},r=sessionStorage.getItem("token");r&&(o.Authorization="Bearer ".concat(r)),o.Botid=n,o.Organizationid=t,o.Accept="application/json";const c=(0,i.Ne)("/bot/add-training-media");await fetch(c,{headers:o,method:"POST",body:s}).then((e=>e.json())).then((e=>{const{trainingMedia:t}=e.data;((e,t)=>{a.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(n,t)})).catch((e=>{throw new Error("File upload failed. Please try again.",e)}))}async function l(e,t){const n=await i.bE("/bot/add-tranining-document-name",e),{trainingMedia:s}=n;((e,t)=>{a.nc.setState((n=>{const i=n.botsList.map((n=>n._id===e?{...n,trainingMedia:t}:n));return{...n,botsList:i}}))})(t,s)}async function d(e,t){const n=await i.bE("/bot/".concat(t,"/").concat(e,"/knowledge-base/train"));return a.nc.setState((t=>{const n={...t.kbDocs||{}};return delete n[e],(0,s.bZ)().catch((e=>console.error("Error fetching Knowledge base content:",e))),{kbDocs:n}})),n}async function u(e){const t=await i.bE("/bot/add-bot-tax-details",e),{_id:n,botDetailsForVerification:s}=t;var o,r;return o=n,r=s,a.nc.setState((e=>{const t=e.botsList.map((e=>e._id===o?{...e,botDetailsForVerification:r}:e));return{...e,botsList:t}})),s}},70855:(e,t,n)=>{n.d(t,{G:()=>a});var i=n(33340);function a(e){const t=(0,i.nc)((e=>e.selectedBotId)),n=(0,i.nc)((n=>n.botsMap[e||t]));return[e||t,n]}},32026:(e,t,n)=>{function i(e,t){return e.replace(new RegExp("".concat(a(t),"+$")),"")}function a(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function s(e){const t=new Date(e),n=t.getDate(),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],a=t.getFullYear();return"".concat(i," ").concat(n,", ").concat(a)}function o(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const a=t.indexOf("."),s=t.substring(0,a),r=t.substring(a+1);i[s]=o(e[s],r,n)}else i[t]=n;return i}function r(e,t){return btoa("".concat(e,"_").concat(t,"_whatsapp_int"))}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let i=0;i<e;i++)n+=t.charAt(Math.floor(36*Math.random()));return n}function l(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const a=t.indexOf("."),s=t.substring(0,a),o=t.substring(a+1);i[s]=l(e[s],o,n)}else i[t]=n;return i}n.d(t,{G6:()=>o,OX:()=>c,Yq:()=>s,do:()=>l,qW:()=>r,s8:()=>i})},44364:(e,t,n)=>{n.d(t,{DX:()=>r,Og:()=>s,jn:()=>i,pA:()=>o,pR:()=>a});const i="https://backend.livhousing.com",a="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://backend.livhousing.com"}.TRAINING_MEDIA_MAXSIZE,o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://backend.livhousing.com"}.CONVERSATION_MEDIA_MAXSIZE,r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_BACKEND_URL:"https://backend.livhousing.com"}.REACT_APP_NGROK_BACKEND_URL||"https://backend.livhousing.com"}}]);