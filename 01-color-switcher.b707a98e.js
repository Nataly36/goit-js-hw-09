let t=null;const e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]"),a=document.querySelector("body");e.addEventListener("click",(function(){e.disabled=!0,d.disabled=!1,t=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),d.addEventListener("click",(function(){e.disabled=!1,d.disabled=!0,clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.b707a98e.js.map
