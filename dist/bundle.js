!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);const r=[["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],["Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\"],["CapsLK","a","s","d","f","g","h","j","k","l",";","'","Enter"],["Shift","z","x","c","v","b","n","m",",",".","/","Shift","▲","4"],["Ctrl","Win","Alt","","Alt","Ctrl","◄","▼","►"]];let o=document.createElement("div"),a=document.createElement("div"),c=document.createElement("textarea");o.classList.add("container"),document.body.appendChild(o),c.classList.add("text-area","container__text-area"),o.appendChild(c),c.focus(),a.classList.add("keyboard"),o.appendChild(a);for(let e=0;e<r.length;e++){let t=document.createElement("div");t.classList.add("row",`row${e}`),a.append(t);for(let n=0;n<r[e].length;n++){const o=document.createElement("div");o.classList.add("key",`key_${r[e][n]}`),t.appendChild(o),o.textContent=r[e][n]}}document.body.addEventListener("keydown",e=>{console.log(e.key);let t=document.querySelector(`.key_${e.key}`);console.log(t),t.classList.add("keyActive"),setTimeout(()=>t.classList.remove("keyActive"),100)})},function(e,t){}]);