import{j as r}from"./vendor.2c7996a3.js";const{useState:s,useRef:a,useCallback:u,useLayoutEffect:c}=r;function g(){const t=a(null),[n,i]=s(200),e=u(()=>{const{top:o}=t.current.getBoundingClientRect();i(window.innerHeight-o)},[]);return c(()=>(e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}),[e]),[t,n]}export{g as u};