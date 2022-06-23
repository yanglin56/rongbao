// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "/*\n* \u9996\u5148\uFF0C\u8BBE\u7F6E\u4E0B\u5C45\u4F4F\u73AF\u5883\n*/\n. rongbao * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n. rongbao *::before,\n. rongbao *::after {\n    box-sizing: border-box;\n}\n/*\n* \u518D\u6765\u4E00\u4E2A\u62A4\u773C\u8272\n*/\nbody {\n    background: #dfe1b4; \n}\n/*\n * \u586B\u4E0A\u4E00\u4E2A\u5706\u5706\u7684\u5927\u8111\u888B\n */\n.head {\n    border: 1px solid #eef0ef;\n    width: 290px;\n    height: 260px;\n    position: absolute;\n    left: 50%;\n    margin-left: -135px;\n    top: 150px;\n    border-radius: 240px 240px 200px 210px;\n    z-index: 3;\n    background: #eef0ef;\n}\n/*\n* \u73B0\u5728\u9700\u8981\u4E00\u4E2A\u9F3B\u5B50\n*/\n.nose {\n    background: #161514;\n    width: 24px;\n    height: 8px;\n    position: relative;\n    left: 50%;\n    top: 320px;\n    margin-left: -6px;\n    border-radius: 0px 0px 25px 25px;\n    z-index: 4;\n}\n\n.yuan {\n    position: absolute;\n    width: 24px;\n    height: 10px;\n    top: -10px;\n    left: 0px;\n    border-radius: 10px 10px 0 0;\n    background: #161514;\n}\n/*\n* \u8FD8\u6709\u4E24\u53EA\u8033\u6735\n*/\n.ear {\n    width: 100px;\n    height: 100px;\n    position: absolute;\n    left: 50%;\n    top: 130px;\n    margin-left: -50px;\n    background: linear-gradient(90deg, rgba(194, 49, 27, 1) 0%, rgba(109, 24, 15, 1) 11%, rgba(43, 19, 14, 1) 35%, rgba(22, 19, 20, 1) 100%);\n    border-radius: 50% 40%;\n}\n\n.ear::before {\n    content: '';\n    display: block;\n    width: 18px;\n    height: 18px;\n    /* border: 3px solid red; */\n    border-radius: 58% 40% 6% 38%;\n    position: relative;\n    top: -8px;\n    left: 30px;\n    transform: rotate(30deg);\n    background: #dfe1b4;\n}\n\n.ear.left {\n    transform: translateX(-100px);\n}\n\n.ear.right {\n    transform: translateX(120px);\n    margin-top: -10px;\n}\n\n.ear.right::before {\n    transform: rotate(60deg);\n    margin-top: -2px;\n    margin-left: 12px;\n}\n/*\n* \u6709\u70B9\u53D1\u9ED1\u7684\u773C\u775B\n*/\n.eye {\n    border: 3px solid #000000;\n    /* width: 84px; */\n    width: 90px;\n    height: 100px;\n    position: absolute;\n    left: 50%;\n    top: 240px;\n    border-radius: 50% 0% 50% 50%;\n    z-index: 5;\n    background: linear-gradient(90deg, rgba(229, 70, 44, 1) 0%, rgba(24, 15, 13, 1) 0%, rgba(22, 19, 20, 1) 14%, rgba(43, 19, 14, 1) 38%, rgba(109, 24, 15, 1) 62%, rgba(229, 70, 44, 1) 100%);\n}\n\n.eye::before {\n    content: '';\n    display: block;\n    border: 2px solid #161514;\n    width: 40px;\n    height: 40px;\n    z-index: 8;\n    border-radius: 60% 50% 60% 50%;\n    position: relative;\n    top: 34px;\n    left: 20px;\n    transform: rotate(0deg);\n    background: #374049;\n}\n.eye::after {\n    content: '';\n    display: block;\n    border: 1px solid #161514;\n    width: 26px;\n    height: 30px;\n    z-index: 8;\n    border-radius: 60% 50% 60% 50%;\n    position: relative;\n    top: 0px;\n    left: 28px;\n    transform: rotate(30deg);\n    background: #131311;\n}\n.eye.left {\n    transform: translateX(-106px) rotate(-42deg);\n}\n.eye.right {\n    transform: translateX(30px) rotate(-42deg);\n}\n\n.eye.right::before {\n    margin-top: -8px;\n    margin-left: -14px;\n}\n\n.eye.right::after {\n    margin-top: 0px;\n    margin-left: -16px;\n}\n/*\n* \u5C0F\u5C0F\u7684\u5634\u5DF4\n*/\n.mouth {\n    width: 60px;\n    height: 20px;\n    z-index: 4;\n    position: absolute;\n    left: 50%;\n    top: 340px;\n    margin-left: -25px;\n}\n\n.mouth .up .lip.left {\n    border: 2px solid black;\n    width: 28px;\n    height: 10px;\n    border-radius: 0 0 50% 50%;\n    border-top-color: transparent;\n    margin-top: -3px;\n    position: relative;\n}\n\n.mouth .up .lip.left::before {\n    content: '';\n    display: block;\n    width: 28px;\n    height: 10px;\n    background: #eef0ef;\n    position: absolute;\n    top: -8px;\n    left: -10px;\n    transform: rotate(-4deg);\n}\n\n.mouth .up .lip.right {\n    border: 2px solid black;\n    width: 28px;\n    height: 10px;\n    border-radius: 0 0 50% 50%;\n    border-top-color: transparent;\n    margin-top: -10px;\n    margin-left: 25px;\n    position: relative;\n}\n\n.mouth .up .lip.right::before {\n    content: '';\n    display: block;\n    width: 50px;\n    height: 10px;\n    background: #eef0ef;\n    position: absolute;\n    top: -6px;\n    left: -2px;\n    transform: rotate(2deg);\n}\n/* \n* \u52A0\u4E00\u70B9\u70B9\u816E\u7EA2\n*/\n.face {\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    left: 50%;\n    top: 320px;\n    z-index: 4;\n    border-radius: 30% 30% 50% 50%;\n    background: #f6cfc2;\n    filter: blur(5px)\n}\n\n.face.left {\n    transform: translate(-90px);\n}\n\n.face.right {\n    transform: translate(90px);\n}\n/*\n* \u5706\u5706\u7684\u8EAB\u4F53\n*/\n.body {\n    border: 3px solid #c5593f;\n    width: 220px;\n    height: 270px;\n    position: relative;\n    left: 50%;\n    top: 300px;\n    margin-left: -100px;\n    border-radius: 50% 50% 40px 40px;\n    /* border-bottom-color: transparent; */\n    background: #eef0ef;\n    z-index: 1;\n}\n\n.body::before {\n    content: '';\n    display: block;\n    border: 3px solid #6c91b7;\n    width: 140px;\n    height: 120px;\n    margin-top: 180px;\n    margin-left: -30px;\n    border-radius: 0 0 50% 50%;\n    transform: rotate(30deg);\n    background: #6c91b7;\n}\n\n.body::after {\n    content: '';\n    display: block;\n    border: 3px solid #6c91b7;\n    width: 140px;\n    height: 120px;\n    margin-top: -120px;\n    margin-left: 90px;\n    border-radius: 0 0 50% 50%;\n    background: #6c91b7;\n}\n/*\n* \u77ED\u77ED\u7684\u53CC\u624B\u548C\u5C0F\u811A\n*/\n.hand {\n    border: 3px solid #0d0c0a;\n    width: 58px;\n    height: 110px;\n    position: relative;\n    left: 50%;\n    top: 130px;\n    margin-left: -50px;\n    border-radius: 60% 10% 30% 50%;\n    background: #0d0c0a;\n    z-index: 2;\n}\n\n.hand.left {\n    transform: translate(-100px) rotate(18deg);\n}\n\n.hand.right {\n    transform: translate(160px) rotate(160deg);\n    margin-top: -110px;\n}\n\n.foot {\n    border: 3px solid #0d0c0a;\n    width: 100px;\n    height: 80px;\n    position: relative;\n    left: 50%;\n    margin-left: -120px;\n    border-radius: 60% 50% 50% 50%;\n    background: #0d0c0a;\n}\n\n.foot.left {\n    transform: translate(20px) translateY(180px);\n}\n\n.foot.right {\n    transform: translate(120px) translateY(100px);\n}\n/*\n* \u8FD8\u5F97\u7A7F\u4E0A\u8863\u670D\n*/\n.clothes1 {\n    border: 80px solid green;\n    width: 0px;\n    height: 0px;\n    position: relative;\n    left: 50%;\n    top: -200px;\n    border-color: transparent transparent transparent green;\n    transform: rotate(10deg);\n}\n\n.clothes {\n    border: 3px solid #d35035;\n    width: 120px;\n    height: 160px;\n    position: relative;\n    left: 50%;\n    top: -220px;\n    transform: translate(-60px) rotate(50deg);\n    background: #d35035;\n    z-index: 2;\n}\n\n.clothes::before {\n    content: '';\n    display: block;\n    border: 2px solid #d35035;\n    width: 30px;\n    height: 20px;\n    transform: translateY(122px) rotate(50deg);\n    margin-top: 0px;\n    margin-left: -20px;\n    background: #d35035;\n}\n\n.clothes::after {\n    content: '';\n    display: block;\n    border: 2px solid #d35035;\n    width: 50px;\n    height: 100px;\n    margin-top: -36px;\n    margin-left: 88px;\n    border-radius: 0 10px 0 0;\n    transform: rotate(25deg);\n    background: #d35035;\n}\n\n.trousers {\n    border: 1px solid #6c91b7;\n    width: 220px;\n    height: 110px;\n    position: relative;\n    left: 50%;\n    top: -250px;\n    margin-left: -100px;\n    background: #6c91b7;\n    z-index: 1;\n}\n\n.trousers::before {\n    content: '';\n    display: block;\n    border: 2px solid #6c91b7;\n    width: 26px;\n    height: 40px;\n    transform: translate(180px) rotate(20deg);\n    margin-top: -30px;\n    background: #6c91b7;\n}\n\n.trousers::after {\n    content: '';\n    display: block;\n    border: 1px solid #6c91b7;\n    width: 26px;\n    height: 40px;\n    transform: translate(6px);\n    margin-top: -130px;\n    background: #6c91b7;\n}\n\n.trousers .pocket {\n    border: 2px solid rgb(226, 94, 94);\n    width: 50px;\n    height: 60px;\n    border-radius: 10% 50% 50% 20px;\n    background: #c5593f;\n}\n\n.trousers .pocket.left {\n    transform: translate(-22px) rotate(25deg);\n    margin-top: 28px;\n}\n\n.trousers .pocket.right {\n    transform: translate(185px) rotate(188deg);\n    margin-top: -54px;\n}\n/*\n\u597D\u4E86\uFF0C\u9001\u60A8\u4E00\u53EA\u5929\u624D\u5C0F\u718A\u732B\u5440\n\u02C1\u1FC1\u032D\u02C0\u02C1\u1FC1\u032E\u02C0\u02C1\u1FC1\u0331\u02C0\u02C1\u1FC1\u0325\u02C0\u02C1\u1FC1\u033C\u02C0\u02C1\u1FC1\u0329\u02C0\u02C1\u1FC1\u032C\u02C0 \u0295\u2022\u032B\u0361\u2022\u0F7C\u0294\u2022\u032B\u0361\u2022\u0F7B\u0295\u2022\u032B\u0361\u2022\u0294\u2022\u0353\u0361\u2022\u0294\n\u795D\u60A8\u5E73\u5B89\u559C\u4E50\n\u30FE(\uFFE3\u25BD\uFFE3)Bye~Bye~\n*/\n";
exports.default = string;
},{}],"HdJB":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
    id: undefined,
    time: 50,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    n: 1,
    init: function init() {
        player.ui.demo.innerText = _css2.default.substring(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
        player.bindEvents();
        player.play();
    },
    bindEvents: function bindEvents() {
        for (var key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                var value = player.events[key]; //pause /play /slow
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: function run() {
        player.n += 1;
        if (player.n > _css2.default.length) {
            window.clearInterval(player.id);
            return;
        }
        player.ui.demo.innerText = _css2.default.substring(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    },
    play: function play() {
        player.id = setInterval(player.run, player.time);
    },
    pause: function pause() {
        window.clearInterval(player.id);
    },
    slow: function slow() {
        player.pause();
        player.time = 150;
        player.play();
    },
    normal: function normal() {
        player.pause();
        player.time = 50;
        player.play();
    },
    fast: function fast() {
        player.pause();
        player.time = 0;
        player.play();
    }
};

player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.715b1d94.map