!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);const o=[["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],["Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\"],["CapsLK","a","s","d","f","g","h","j","k","l",";","'","Enter"],["Shift","z","x","c","v","b","n","m",",",".","/","Shift","▲","4"],["Ctrl","Win","Alt","","Alt","Ctrl","◄","▼","►"]];let r=document.createElement("div"),c=document.createElement("div"),a=document.createElement("textarea");r.classList.add("container"),document.body.appendChild(r),a.classList.add("text-area","container__text-area"),r.appendChild(a),a.focus(),c.classList.add("keyboard"),r.appendChild(c);for(let e=0;e<o.length;e++){let t=document.createElement("div");t.classList.add("row",`row${e}`),c.append(t);for(let n=0;n<o[e].length;n++){const r=document.createElement("div");r.classList.add("key",`key_${o[e][n]}`),t.appendChild(r),r.textContent=o[e][n]}}document.body.addEventListener("keydown",e=>{console.log(e.key);let t=document.querySelector(`.key_${e.key}`);console.log(t),t.classList.add("keyActive"),setTimeout(()=>t.classList.remove("keyActive"),100)}),c.addEventListener("click",e=>{console.log(e.target.textContent),a.value+=e.target.textContent;let t=document.querySelector(`.key_${e.target.textContent}`);t.classList.add("keyActive"),setTimeout(()=>t.classList.remove("keyActive"),100)})},function(e,t){}]);