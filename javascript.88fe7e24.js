parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kz6Y":[function(require,module,exports) {
module.exports="/octave/a.65bcab5e.mp3";
},{}],"lyfl":[function(require,module,exports) {
module.exports="/octave/as.2f70dae2.mp3";
},{}],"wsJw":[function(require,module,exports) {
module.exports="/octave/b.7dbc6a6d.mp3";
},{}],"qQXM":[function(require,module,exports) {
module.exports="/octave/c.d1b16d08.mp3";
},{}],"krVR":[function(require,module,exports) {
module.exports="/octave/cs.75a1daf0.mp3";
},{}],"wukm":[function(require,module,exports) {
module.exports="/octave/d.8c32b3fe.mp3";
},{}],"BMqG":[function(require,module,exports) {
module.exports="/octave/ds.43b28b87.mp3";
},{}],"Ango":[function(require,module,exports) {
module.exports="/octave/e.a563951b.mp3";
},{}],"JDix":[function(require,module,exports) {
module.exports="/octave/f.eedf7472.mp3";
},{}],"FFa0":[function(require,module,exports) {
module.exports="/octave/fs.54fd76e8.mp3";
},{}],"hS95":[function(require,module,exports) {
module.exports="/octave/g.e7d9caee.mp3";
},{}],"aBVp":[function(require,module,exports) {
module.exports="/octave/gs.898b8a69.mp3";
},{}],"agu0":[function(require,module,exports) {
module.exports={a:require("./a.mp3"),as:require("./as.mp3"),b:require("./b.mp3"),c:require("./c.mp3"),cs:require("./cs.mp3"),d:require("./d.mp3"),ds:require("./ds.mp3"),e:require("./e.mp3"),f:require("./f.mp3"),fs:require("./fs.mp3"),g:require("./g.mp3"),gs:require("./gs.mp3")};
},{"./a.mp3":"kz6Y","./as.mp3":"lyfl","./b.mp3":"wsJw","./c.mp3":"qQXM","./cs.mp3":"krVR","./d.mp3":"wukm","./ds.mp3":"BMqG","./e.mp3":"Ango","./f.mp3":"JDix","./fs.mp3":"FFa0","./g.mp3":"hS95","./gs.mp3":"aBVp"}],"ZZvM":[function(require,module,exports) {
"use strict";var e=r(require("../assets/*.mp3"));function r(e){return e&&e.__esModule?e:{default:e}}var t=Array.from(document.querySelectorAll(".set li"));t.forEach(function(r){var t=r.classList.item(1);r.addEventListener("click",function(){var r=e.default[t];new Audio(r).play()})});
},{"../assets/*.mp3":"agu0"}]},{},["ZZvM"], null)
//# sourceMappingURL=/octave/javascript.88fe7e24.js.map