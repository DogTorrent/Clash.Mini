import{r as f,R as y,p as d,u as S,b as a,j as p,d as T,U as R,V as W,E as w,W as L,C as N,q as C,X as j,Y as O,g as I,Z as k,x as z}from"./index-6781bfae.js";import{r as E,s as $,f as M}from"./logs-560d0475.js";import{d as A}from"./debounce-c1ba2006.js";import{u as F}from"./useRemainingViewPortHeight-dd3b06de.js";import{F as H,p as B}from"./Fab-452138f5.js";import{P as D,a as V}from"./play-78c344ca.js";function v(){return v=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},v.apply(this,arguments)}function Y(e,o){if(e==null)return{};var t=q(e,o),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(o.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function q(e,o){if(e==null)return{};var t={},n=Object.keys(e),r,s;for(s=0;s<n.length;s++)r=n[s],!(o.indexOf(r)>=0)&&(t[r]=e[r]);return t}var b=f.forwardRef(function(e,o){var t=e.color,n=t===void 0?"currentColor":t,r=e.size,s=r===void 0?24:r,i=Y(e,["color","size"]);return y.createElement("svg",v({ref:o,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),y.createElement("circle",{cx:"11",cy:"11",r:"8"}),y.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});b.propTypes={color:d.string,size:d.oneOfType([d.string,d.number])};b.displayName="Search";const U=b,X="_RuleSearch_ue4xf_1",Z="_RuleSearchContainer_ue4xf_10",G="_inputWrapper_ue4xf_20",J="_input_ue4xf_20",K="_iconWrapper_ue4xf_45",g={RuleSearch:X,RuleSearchContainer:Z,inputWrapper:G,input:J,iconWrapper:K};function Q({dispatch:e,searchText:o,updateSearchText:t}){const{t:n}=S(),[r,s]=f.useState(o),i=f.useCallback(c=>{e(t(c))},[e,t]),u=f.useMemo(()=>A(i,300),[i]),m=c=>{s(c.target.value),u(c.target.value)};return a("div",{className:g.RuleSearch,children:p("div",{className:g.RuleSearchContainer,children:[a("div",{className:g.inputWrapper,children:a("input",{type:"text",value:r,onChange:m,className:g.input,placeholder:n("Search")})}),a("div",{className:g.iconWrapper,children:a(U,{size:20})})]})})}const ee=e=>({searchText:R(e),updateSearchText:W}),te=T(ee)(Q),re="_logMeta_pycfb_1",oe="_logType_pycfb_8",ne="_logTime_pycfb_17",ae="_logText_pycfb_22",se="_logsWrapper_pycfb_37",ce="_logPlaceholder_pycfb_54",le="_logPlaceholderIcon_pycfb_67",l={logMeta:re,logType:oe,logTime:ne,logText:ae,logsWrapper:se,logPlaceholder:ce,logPlaceholderIcon:le},{useCallback:x,useEffect:ie}=z,pe={debug:"#389d3d",info:"#58c3f2",warning:"#cc5abb",error:"#c11c1c"},ge={debug:"debug",info:"info",warning:"warn",error:"error"};function ue({time:e,payload:o,type:t}){return p("div",{className:l.logMeta,children:[a("span",{className:l.logTime,children:e}),p("span",{className:l.logType,style:{color:pe[t]},children:["[ ",ge[t]," ]"]}),a("span",{className:l.logText,children:o})]})}function he({dispatch:e,logLevel:o,apiConfig:t,logs:n,logStreamingPaused:r}){const s=w(),i=x(()=>{r?E({...t,logLevel:o}):$(),s.app.updateAppConfig("logStreamingPaused",!r)},[t,o,r,s.app]),u=x(_=>e(L(_)),[e]);ie(()=>{M({...t,logLevel:o},u)},[t,o,u]);const[m,c]=F(),{t:h}=S();return p("div",{children:[a(N,{title:h("Logs")}),a(te,{}),a("div",{ref:m,children:n.length===0?p("div",{className:l.logPlaceholder,style:{height:c*.9},children:[a("div",{className:l.logPlaceholderIcon,children:a(C,{width:200,height:200})}),a("div",{children:h("no_logs")})]}):p("div",{className:l.logsWrapper,style:{height:c*.85},children:[n.map((_,P)=>a("div",{className:"",children:a(ue,{..._})},P)),a(H,{icon:r?a(D,{size:16}):a(V,{size:16}),mainButtonStyles:r?{background:"#e74c3c"}:{},style:B,text:h(r?"Resume Refresh":"Pause Refresh"),onClick:i})]})})]})}const de=e=>({logs:j(e),logLevel:O(e),apiConfig:I(e),logStreamingPaused:k(e)}),xe=T(de)(he);export{xe as default};