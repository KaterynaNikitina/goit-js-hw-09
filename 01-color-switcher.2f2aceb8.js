!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");function r(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(a){t.setAttribute("disabled",""),e.hasAttribute("disabled")&&e.removeAttribute("disabled","");intervalId=setInterval(r,1e3)})),e.addEventListener("click",(function(r){clearInterval(intervalId),e.setAttribute("disabled",""),t.removeAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.2f2aceb8.js.map
