!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=null;function a(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(d){r=setInterval(a,1e3),t.setAttribute("disabled",""),e.hasAttribute("disabled")&&e.removeAttribute("disabled","")})),e.addEventListener("click",(function(a){clearInterval(r),e.setAttribute("disabled",""),t.removeAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.ae6298bd.js.map
