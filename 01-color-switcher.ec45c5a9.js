!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=null;function i(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(o){t.setAttribute("disabled",""),isStopBtnActive=e.hasAttribute("disabled"),isStopBtnActive&&e.removeAttribute("disabled","");n=setInterval(i,1e3)})),e.addEventListener("click",(function(i){clearInterval(n),e.setAttribute("disabled",""),t.removeAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.ec45c5a9.js.map
