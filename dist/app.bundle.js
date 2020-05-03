/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Schoolbell&display=swap);"]);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\n\nhtml,\nbutton {\n  text-align: center;\n  font-size: 1rem;\n  font-family: 'Schoolbell', sans-serif;\n  letter-spacing: 5px;\n}\n\nbutton.btn {\n  padding: 1rem;\n  padding: 1rem 2rem;\n  text-align: center;\n  cursor: pointer;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  margin: 5px auto;\n  transition-duration: 0.4s;\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.game {\n  margin: 0 auto;\n}\n\n.title h1 {\n  font-size: 24px;\n  margin: 32px;\n}\n\n.world-wrapper {\n  margin: 0 auto;\n}\n\n.legend {\n  position: absolute;\n  top: 98px;\n  text-align: left;\n}\n\n.legend > div {\n  margin-left: 10px;\n  margin: 10px;\n}\n\n.legend-text {\n  font-size: 32px;\n  line-height: 32px;\n}\n\ndiv.chain-wrapper {\n  margin: 5px;\n}\n\n.chain-wrapper .image#chain-count {\n  height: 30px;\n  width: 30px;\n  margin-right: 5px;\n}\n\n.chain-wrapper .chain {\n  margin: 0 auto;\n}\n\n#world {\n  border: 2px solid black;\n  background-color: rgb(194, 255, 194);\n}\n\n.worm-left {\n  width: 20px;\n}\n\n.worm-right {\n  width: 20px;\n}\n\n.animate {\n  animation: pulse 2s ease;\n}\n\n.end-wrapper,\n.intro-wrapper {\n  position: absolute;\n  font-size: 32px;\n  margin: 0 auto;\n}\n\n.intro-wrapper {\n  font-size: 24px;\n  width: 100%;\n}\n\n.intro {\n  width: 100%;\n}\n\n.intro-message {\n  display: block;\n  width: 100%;\n  padding: 16px;\n}\n\n.start {\n  display: block;\n  cursor: pointer;\n  border-bottom: 1px solid black;\n  width: max-content;\n  margin: 16px auto;\n}\n\n.start:hover {\n  color: red;\n  border-bottom-color: red;\n}\n\n.game-end {\n  width: max-content;\n  margin: 0 auto;\n  padding: 30px 80px;\n}\n\n.game-end {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.game-end div {\n  margin-bottom: 5px;\n}\n\n.game-end > .wrapper > .score {\n  color: red;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(2);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n.tutorial-wrapper {\n  position: absolute;\n  top: 98px;\n}\n\n.tutorial-message {\n  width: 60%;\n  margin: 0 auto;\n  font-size: 24px;\n  line-height: 1.5;\n  padding: 6px;\n}\n\n#tut-msg-1 {\n  font-size: 16px;\n  position: absolute;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/data_structures/dist/DataStructures.js":
/*!*************************************************************!*\
  !*** ./node_modules/data_structures/dist/DataStructures.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BinaryHeap/MaxBinaryHeap.js":
/*!*****************************************!*\
  !*** ./src/BinaryHeap/MaxBinaryHeap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\nvar MaxBinaryHeap = /*#__PURE__*/function () {\n  function MaxBinaryHeap() {\n    _classCallCheck(this, MaxBinaryHeap);\n\n    _content.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldSet(this, _content, []);\n  }\n\n  _createClass(MaxBinaryHeap, [{\n    key: \"_swap\",\n    // _methods are helpers. Change to private when private instance methods are supported\n    value: function _swap(i, j) {\n      var temp = _classPrivateFieldGet(this, _content)[i];\n\n      _classPrivateFieldGet(this, _content)[i] = _classPrivateFieldGet(this, _content)[j];\n      _classPrivateFieldGet(this, _content)[j] = temp;\n    }\n  }, {\n    key: \"_bubbleUp\",\n    value: function _bubbleUp(i) {\n      var element = _classPrivateFieldGet(this, _content)[i];\n\n      while (i > 0) {\n        var p = Math.floor((i - 1) / 2),\n            parent = _classPrivateFieldGet(this, _content)[p];\n\n        if (element > parent) {\n          this._swap(p, i);\n\n          i = p;\n        } else {\n          break;\n        }\n      }\n    }\n  }, {\n    key: \"_sinkDown\",\n    value: function _sinkDown(p) {\n      var element = _classPrivateFieldGet(this, _content)[p],\n          lastIndex = _classPrivateFieldGet(this, _content).length - 1;\n\n      while (p < lastIndex) {\n        var r = 2 * p + 2,\n            l = r - 1;\n        var swapIndex = null,\n            left = void 0,\n            right = void 0,\n            min = element;\n\n        if (l <= lastIndex) {\n          left = _classPrivateFieldGet(this, _content)[l];\n          if (left > element) swapIndex = l;\n          min = left;\n        }\n\n        if (r <= lastIndex) {\n          right = _classPrivateFieldGet(this, _content)[r];\n          if (right > min) swapIndex = r;\n        }\n\n        if (swapIndex == null) break;\n\n        this._swap(p, swapIndex);\n\n        p = swapIndex;\n      }\n    }\n  }, {\n    key: \"printMaxHeap\",\n    value: function printMaxHeap() {\n      console.log(_classPrivateFieldGet(this, _content));\n      return _classPrivateFieldGet(this, _content);\n    }\n  }, {\n    key: \"insert\",\n    value: function insert(element) {\n      _classPrivateFieldGet(this, _content).push(element);\n\n      this._bubbleUp(_classPrivateFieldGet(this, _content).length - 1);\n    }\n  }, {\n    key: \"extractMax\",\n    value: function extractMax() {\n      if (_classPrivateFieldGet(this, _content).length <= 0) return null;\n      var lastIndex = _classPrivateFieldGet(this, _content).length - 1,\n          firstIndex = 0;\n      if (firstIndex !== lastIndex) this._swap(firstIndex, lastIndex);\n\n      var result = _classPrivateFieldGet(this, _content).pop();\n\n      if (_classPrivateFieldGet(this, _content).length > 0) {\n        this._sinkDown(0);\n      }\n\n      return result;\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(element) {\n      for (var i = 0; i < this.size; i++) {\n        if (_classPrivateFieldGet(this, _content)[i] !== element) continue;\n        var lastIndex = this.size - 1;\n\n        if (i === lastIndex) {\n          _classPrivateFieldGet(this, _content).pop();\n\n          break;\n        }\n\n        this._swap(i, lastIndex);\n\n        _classPrivateFieldGet(this, _content).pop();\n\n        this._bubbleUp(i);\n\n        this._sinkDown(i);\n\n        break;\n      }\n    }\n  }, {\n    key: \"size\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _content).length;\n    }\n  }, {\n    key: \"max\",\n    get: function get() {\n      return this.size ? _classPrivateFieldGet(this, _content)[0] : null;\n    }\n  }]);\n\n  return MaxBinaryHeap;\n}();\n\nvar _content = new WeakMap();\n\nmodule.exports = MaxBinaryHeap;\n\n//# sourceURL=webpack://DataStructures/./src/BinaryHeap/MaxBinaryHeap.js?");

/***/ }),

/***/ "./src/BinaryHeap/MinBinaryHeap.js":
/*!*****************************************!*\
  !*** ./src/BinaryHeap/MinBinaryHeap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\n// https://www.youtube.com/watch?v=WCm3TqScBM8\n// Any node has a value at least as small as the values in that node's children.\n// Source: https://eloquentjavascript.net/1st_edition/appendix2.html\nvar MinBinaryHeap = /*#__PURE__*/function () {\n  function MinBinaryHeap() {\n    _classCallCheck(this, MinBinaryHeap);\n\n    _content.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldSet(this, _content, []);\n  }\n\n  _createClass(MinBinaryHeap, [{\n    key: \"_swap\",\n    // _methods are helpers. Change to private when private instance methods are supported\n    value: function _swap(i, j) {\n      var temp = _classPrivateFieldGet(this, _content)[i];\n\n      _classPrivateFieldGet(this, _content)[i] = _classPrivateFieldGet(this, _content)[j];\n      _classPrivateFieldGet(this, _content)[j] = temp;\n    }\n    /* bubbleUp \n      1. Compare item to parent and check if it's less than parent. \n      2. If it is less than parent, swap it. \n      3. Now, compare to the new parent and keep swapping until it either reaches the top of the heap or it is >= parent. \n    */\n\n  }, {\n    key: \"_bubbleUp\",\n    value: function _bubbleUp(i) {\n      var element = _classPrivateFieldGet(this, _content)[i];\n      /* \n        indexing from 0\n        p is the index of the parent\n        i is the index of either left or right child\n        l is index of left child\n        r is the index of the right child\n         l = 2p + 1\n        r = 2p + 2\n        p = Math.floor((i-1)/2)\n       */\n\n\n      while (i > 0) {\n        var p = Math.floor((i - 1) / 2),\n            parent = _classPrivateFieldGet(this, _content)[p];\n\n        if (element < parent) {\n          this._swap(p, i); // make sure to change index to that of parent after swapping\n\n\n          i = p;\n        } else {\n          break;\n        }\n      }\n    }\n  }, {\n    key: \"_sinkDown\",\n    value: function _sinkDown(p) {\n      var element = _classPrivateFieldGet(this, _content)[p],\n          lastIndex = _classPrivateFieldGet(this, _content).length - 1;\n\n      while (p < lastIndex) {\n        // Info in getting index in bubbleUp\n        var r = 2 * p + 2,\n            l = r - 1; //Or 2 * p + 1\n\n        var swapIndex = null,\n            left = void 0,\n            right = void 0,\n            min = element; //start out assuming the min between left, right, element is the element\n        // if element has left child, compare\n        // if left child < element, set swapIndex to the left index (l) and min to left\n\n        if (l <= lastIndex) {\n          left = _classPrivateFieldGet(this, _content)[l];\n          if (left < element) swapIndex = l;\n          min = left;\n        }\n\n        if (r <= lastIndex) {\n          right = _classPrivateFieldGet(this, _content)[r]; // compare the right to the min so far to make sure the min of the three items gets bubbled up while the parent gets sunk\n\n          if (right < min) swapIndex = r;\n        } // parent is smaller than both left and right child so break\n\n\n        if (swapIndex == null) break;\n\n        this._swap(p, swapIndex); // set the parent index to the swap index so it will continue to sink down\n\n\n        p = swapIndex;\n      }\n    }\n  }, {\n    key: \"printMinHeap\",\n    value: function printMinHeap() {\n      console.log(_classPrivateFieldGet(this, _content));\n      return _classPrivateFieldGet(this, _content);\n    }\n    /* insert\n      1. insert new item into this.#content\n      2. bubble it up \n      */\n\n  }, {\n    key: \"insert\",\n    value: function insert(element) {\n      _classPrivateFieldGet(this, _content).push(element);\n\n      this._bubbleUp(_classPrivateFieldGet(this, _content).length - 1);\n    }\n    /* extractMin\n      1. swap first and last items if this.#content.length > 1 (or first !== last)\n      2. pop out last item of array and save it in result\n      3. If length is more than one, bubble the first item down\n      4. Return the result that was saved \n      */\n\n  }, {\n    key: \"extractMin\",\n    value: function extractMin() {\n      if (_classPrivateFieldGet(this, _content).length <= 0) return null; //return null if array is empty\n\n      var lastIndex = _classPrivateFieldGet(this, _content).length - 1,\n          firstIndex = 0;\n      if (firstIndex !== lastIndex) this._swap(firstIndex, lastIndex);\n\n      var result = _classPrivateFieldGet(this, _content).pop();\n\n      if (_classPrivateFieldGet(this, _content).length > 0) {\n        this._sinkDown(0);\n      }\n\n      return result;\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(element) {\n      for (var i = 0; i < this.size; i++) {\n        // if curr item doesn't match the element to remove, continue searching\n        if (_classPrivateFieldGet(this, _content)[i] !== element) continue; // if it does match\n\n        var lastIndex = this.size - 1; // if it's the last item, pop it and break\n\n        if (i === lastIndex) {\n          _classPrivateFieldGet(this, _content).pop();\n\n          break;\n        } // if it's not the last item\n        //  1. swap it with the last item\n        //  2. pop the swapped last item\n        //  3. Then call bubbleUp and sinkDown.\n\n\n        this._swap(i, lastIndex);\n\n        _classPrivateFieldGet(this, _content).pop();\n\n        this._bubbleUp(i);\n\n        this._sinkDown(i);\n\n        break;\n      }\n    }\n  }, {\n    key: \"size\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _content).length;\n    }\n  }, {\n    key: \"min\",\n    get: function get() {\n      return this.size ? _classPrivateFieldGet(this, _content)[0] : null;\n    }\n  }]);\n\n  return MinBinaryHeap;\n}();\n\nvar _content = new WeakMap();\n\nmodule.exports = MinBinaryHeap;\n\n//# sourceURL=webpack://DataStructures/./src/BinaryHeap/MinBinaryHeap.js?");

/***/ }),

/***/ "./src/BinaryHeap/index.js":
/*!*********************************!*\
  !*** ./src/BinaryHeap/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MinBinaryHeap = __webpack_require__(/*! ./MinBinaryHeap */ \"./src/BinaryHeap/MinBinaryHeap.js\");\n\nvar MaxBinaryHeap = __webpack_require__(/*! ./MaxBinaryHeap */ \"./src/BinaryHeap/MaxBinaryHeap.js\");\n\nmodule.exports = {\n  MinBinaryHeap: MinBinaryHeap,\n  MaxBinaryHeap: MaxBinaryHeap\n};\n\n//# sourceURL=webpack://DataStructures/./src/BinaryHeap/index.js?");

/***/ }),

/***/ "./src/BinarySearchTree.js":
/*!*********************************!*\
  !*** ./src/BinarySearchTree.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar _require = __webpack_require__(/*! ./BinaryTreeTraversal */ \"./src/BinaryTreeTraversal.js\"),\n    BFS = _require.BFS,\n    DFSIterative = _require.DFSIterative;\n\nvar BinarySearchTree = function () {\n  var findMinNode = function findMinNode(node) {\n    if (node.left === null) return node;else return findMinNode(node.left);\n  };\n\n  var TreeNode = function TreeNode(val) {\n    var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n    _classCallCheck(this, TreeNode);\n\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  };\n\n  var BinarySearchTree = /*#__PURE__*/function () {\n    function BinarySearchTree() {\n      _classCallCheck(this, BinarySearchTree);\n\n      _root.set(this, {\n        writable: true,\n        value: void 0\n      });\n\n      _classPrivateFieldSet(this, _root, null);\n    }\n\n    _createClass(BinarySearchTree, [{\n      key: \"insert\",\n      value: function insert(val) {\n        var recursiveInsertNode = function recursiveInsertNode(node, newNode) {\n          if (newNode.val < node.val) {\n            if (node.left === null) node.left = newNode;else recursiveInsertNode(node.left, newNode);\n          } else {\n            if (node.right === null) node.right = newNode;else recursiveInsertNode(node.right, newNode);\n          }\n        };\n\n        var newNode = new TreeNode(val);\n        if (_classPrivateFieldGet(this, _root) === null) _classPrivateFieldSet(this, _root, newNode);else recursiveInsertNode(_classPrivateFieldGet(this, _root), newNode);\n      }\n    }, {\n      key: \"remove\",\n      value: function remove(val) {\n        var removeNode = function removeNode(node, val) {\n          if (node === null) return null;\n\n          if (val < node.val) {\n            node.left = removeNode(node.left, val);\n            return node;\n          }\n\n          if (val > node.val) {\n            node.right = removeNode(node.right, val);\n            return node;\n          } // If val matches node.val\n\n\n          if (val === node.val) {\n            // if node to delete doesn't have any children\n            if (node.left === null && node.right === null) {\n              node = null;\n              return node;\n            } // if node to delete has one right child\n\n\n            if (node.left === null) {\n              node = node.right;\n              return node;\n            } // if node to delete has one left child\n\n\n            if (node.right === null) {\n              node = node.left;\n              return node;\n            } // Deleting node with two children\n            // find min node in right subtree. This will be a terminal node\n            // traverse down right subtree and change the node.val to the min node val\n            // Then call removeNode on the right subtree with the min.node val to delete the terminal node\n\n\n            var sub = findMinNode(node.right);\n            node.val = sub.val;\n            node.right = removeNode(node.right, sub.val);\n            return node;\n          }\n        };\n\n        _classPrivateFieldSet(this, _root, removeNode(_classPrivateFieldGet(this, _root), val));\n      } // searches tree for specified val and returns the node if found, null otherwise\n\n    }, {\n      key: \"search\",\n      value: function search(val) {\n        var recursiveSearch = function recursiveSearch(node, val) {\n          if (node === null) return null;\n          if (val < node.val) return recursiveSearch(node.left, val);\n          if (val > node.val) return recursiveSearch(node.right, val);\n          if (val === node.val) return node;\n        };\n\n        return recursiveSearch(_classPrivateFieldGet(this, _root), val);\n      } // tree traversals\n      // returns array of vals\n\n    }, {\n      key: \"printInOrder\",\n      value: function printInOrder() {\n        var res = DFSIterative.inOrder(_classPrivateFieldGet(this, _root));\n        console.log(res);\n        return res;\n      }\n    }, {\n      key: \"printPreOrder\",\n      value: function printPreOrder() {\n        var res = DFSIterative.preOrder(_classPrivateFieldGet(this, _root));\n        console.log(res);\n        return res;\n      }\n    }, {\n      key: \"printPostOrder\",\n      value: function printPostOrder() {\n        var res = DFSIterative.postOrder(_classPrivateFieldGet(this, _root));\n        console.log(res);\n        return res;\n      }\n    }, {\n      key: \"printLevelOrder\",\n      value: function printLevelOrder() {\n        var res = BFS(_classPrivateFieldGet(this, _root));\n        console.log(res);\n        return res;\n      }\n    }, {\n      key: \"root\",\n      get: function get() {\n        return _classPrivateFieldGet(this, _root);\n      }\n    }]);\n\n    return BinarySearchTree;\n  }();\n\n  var _root = new WeakMap();\n\n  return BinarySearchTree;\n}();\n\nmodule.exports = BinarySearchTree;\n\n//# sourceURL=webpack://DataStructures/./src/BinarySearchTree.js?");

/***/ }),

/***/ "./src/BinaryTreeTraversal.js":
/*!************************************!*\
  !*** ./src/BinaryTreeTraversal.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./Stack */ \"./src/Stack.js\");\n\nvar Queue = __webpack_require__(/*! ./Queue */ \"./src/Queue.js\");\n\nvar BFS = function BFS(root) {\n  var res = [],\n      queue = new Queue();\n  queue.enqueue(root);\n\n  while (!queue.isEmpty()) {\n    var node = queue.dequeue();\n    res.push(node.val);\n    if (node.left) queue.enqueue(node.left);\n    if (node.right) queue.enqueue(node.right);\n  }\n\n  return res;\n};\n\nvar DFSRecursive = {\n  inOrder: function inOrder(root) {\n    var res = [];\n\n    function recurse(node) {\n      if (node !== null) {\n        recurse(node.left);\n        res.push(node.val);\n        recurse(node.right);\n      }\n    }\n\n    recurse(root);\n    return res;\n  },\n  preOrder: function preOrder(root) {\n    var res = [];\n\n    function recurse(node) {\n      if (node !== null) {\n        res.push(node.val);\n        recurse(node.left);\n        recurse(node.right);\n      }\n    }\n\n    recurse(root);\n    return res;\n  },\n  postOrder: function postOrder(root) {\n    var res = [];\n\n    function recurse(node) {\n      if (node !== null) {\n        recurse(node.left);\n        recurse(node.right);\n        res.push(node.val);\n      }\n    }\n\n    recurse(root);\n    return res;\n  }\n};\nvar DFSIterative = {\n  inOrder: function inOrder(root) {\n    var res = [],\n        stack = new Stack();\n    var curr = root;\n\n    while (!stack.isEmpty() || curr !== null) {\n      if (curr !== null) {\n        stack.push(curr);\n        curr = curr.left;\n      } else {\n        curr = stack.pop();\n        res.push(curr.val);\n        curr = curr.right;\n      }\n    }\n\n    return res;\n  },\n  preOrder: function preOrder(root) {\n    var res = [],\n        stack = new Stack();\n    var curr;\n    stack.push(root);\n\n    while (!stack.isEmpty()) {\n      curr = stack.pop();\n      res.push(curr.val);\n      if (curr.right !== null) stack.push(curr.right);\n      if (curr.left !== null) stack.push(curr.left);\n    }\n\n    return res;\n  },\n  // Iterative post order using two stacks\n  postOrder: function postOrder(root) {\n    var res = [],\n        stack1 = new Stack(),\n        stack2 = new Stack();\n    var curr;\n    stack1.push(root);\n\n    while (!stack1.isEmpty()) {\n      curr = stack1.pop();\n      stack2.push(curr);\n      if (curr.left != null) stack1.push(curr.left);\n      if (curr.right != null) stack1.push(curr.right);\n    }\n\n    while (!stack2.isEmpty()) {\n      curr = stack2.pop();\n      res.push(curr.val);\n    }\n\n    return res;\n  }\n};\nmodule.exports = {\n  BFS: BFS,\n  DFSIterative: DFSIterative,\n  DFSRecursive: DFSRecursive\n};\n\n//# sourceURL=webpack://DataStructures/./src/BinaryTreeTraversal.js?");

/***/ }),

/***/ "./src/Graph.js":
/*!**********************!*\
  !*** ./src/Graph.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\nvar _require = __webpack_require__(/*! ./GraphTraversal */ \"./src/GraphTraversal.js\"),\n    _BFS = _require.BFS,\n    DFSRecursive = _require.DFSRecursive;\n\nvar Graph = /*#__PURE__*/function () {\n  function Graph() {\n    _classCallCheck(this, Graph);\n\n    _vertices.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldSet(this, _vertices, new Map());\n  }\n\n  _createClass(Graph, [{\n    key: \"addVertex\",\n    value: function addVertex(val) {\n      if (_classPrivateFieldGet(this, _vertices).has(val)) throw \"vertex with value \".concat(val, \" already exists.\");\n\n      _classPrivateFieldGet(this, _vertices).set(val, new Set());\n    }\n  }, {\n    key: \"addEdge\",\n    value: function addEdge(vVal, eVal) {\n      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) throw \"vertex with value \".concat(vVal, \" doesn't exist.\");\n      if (!_classPrivateFieldGet(this, _vertices).has(eVal)) throw \"edge with value \".concat(eVal, \" doesn't exist.\");\n\n      var edges = _classPrivateFieldGet(this, _vertices).get(vVal);\n\n      if (edges.has(eVal)) throw \"vertex already has edge \".concat(eVal, \".\");\n      edges.add(eVal);\n    }\n  }, {\n    key: \"getVertexEdges\",\n    value: function getVertexEdges(vVal) {\n      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) throw \"vertex with value \".concat(vVal, \" doesn't exist.\");\n      return Array.from(_classPrivateFieldGet(this, _vertices).get(vVal));\n    }\n  }, {\n    key: \"hasEdge\",\n    value: function hasEdge(vVal, eVal) {\n      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) return false;\n\n      var edges = _classPrivateFieldGet(this, _vertices).get(vVal);\n\n      return edges.has(eVal);\n    }\n  }, {\n    key: \"hasVertex\",\n    value: function hasVertex(vVal) {\n      return _classPrivateFieldGet(this, _vertices).has(vVal);\n    }\n  }, {\n    key: \"removeEdge\",\n    value: function removeEdge(vVal, eVal) {\n      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) throw \"vertex with value \".concat(vVal, \" doesn't exist.\");\n\n      var edges = _classPrivateFieldGet(this, _vertices).get(vVal);\n\n      edges[\"delete\"](eVal);\n    }\n  }, {\n    key: \"removeVertex\",\n    value: function removeVertex(vVal) {\n      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) throw \"vertex with value \".concat(vVal, \" doesn't exist.\");\n\n      _classPrivateFieldGet(this, _vertices)[\"delete\"](vVal);\n    }\n  }, {\n    key: \"BFS\",\n    value: function BFS(start, callback) {\n      var graph = this;\n\n      _BFS(start, graph, callback);\n    }\n  }, {\n    key: \"DFS\",\n    value: function DFS(start, callback) {\n      var graph = this;\n      DFSRecursive(start, graph, callback);\n    }\n  }, {\n    key: \"printGraph\",\n    value: function printGraph() {\n      var graph = {};\n\n      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _vertices)),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var _step$value = _slicedToArray(_step.value, 2),\n              vVal = _step$value[0],\n              vertexEdges = _step$value[1];\n\n          graph[vVal] = [];\n          var edges = '';\n\n          var _iterator2 = _createForOfIteratorHelper(vertexEdges),\n              _step2;\n\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var edge = _step2.value;\n              edges += \"\".concat(edge, \" \");\n              graph[vVal].push(edge);\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n\n          console.log(\"\".concat(vVal, \" -> \").concat(edges));\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      return graph;\n    }\n  }]);\n\n  return Graph;\n}();\n\nvar _vertices = new WeakMap();\n\nmodule.exports = Graph;\n\n//# sourceURL=webpack://DataStructures/./src/Graph.js?");

/***/ }),

/***/ "./src/GraphTraversal.js":
/*!*******************************!*\
  !*** ./src/GraphTraversal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar Queue = __webpack_require__(/*! ./Queue */ \"./src/Queue.js\");\n\nvar Stack = __webpack_require__(/*! ./Stack */ \"./src/Stack.js\"); // breadth first search with queue\n\n\nvar BFS = function BFS(start, graph, callback) {\n  // will keep track of new vertices with queue and visited nodes with a set\n  var queue = new Queue(),\n      visited = new Set();\n  queue.enqueue(start); //vertex is visited if it gets pushed into queue.\n\n  visited.add(start);\n\n  while (!queue.isEmpty()) {\n    var curr = queue.dequeue(),\n        edges = graph.getVertexEdges(curr); // call callback on each vertex that gets dequeued\n\n    callback(curr); //iterate over all edges and add the unvisited ones to queue\n\n    var _iterator = _createForOfIteratorHelper(edges),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var eVal = _step.value;\n\n        if (!visited.has(eVal)) {\n          queue.enqueue(eVal);\n          visited.add(eVal);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n}; //iterative depth first search. Almost same as BFS. Only difference is the stack vs queue\n\n\nvar DFSIterative = function DFSIterative(start, graph, callback) {\n  var stack = new Stack(),\n      visited = new Set();\n  stack.push(start);\n  visited.add(start);\n\n  while (!stack.isEmpty()) {\n    var curr = stack.pop(),\n        edges = graph.getVertexEdges(curr);\n    callback(curr);\n\n    var _iterator2 = _createForOfIteratorHelper(edges),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var eVal = _step2.value;\n\n        if (!visited.has(eVal)) {\n          stack.push(eVal);\n          visited.add(eVal);\n        }\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  }\n}; // Recursive depth first search\n\n\nvar DFSRecursive = function DFSRecursive(start, graph, callback) {\n  var visited = new Set();\n\n  var recursiveDFS = function recursiveDFS(curr) {\n    if (visited.has(curr)) return;\n    callback(curr);\n    visited.add(curr);\n    var edges = graph.getVertexEdges(curr);\n\n    var _iterator3 = _createForOfIteratorHelper(edges),\n        _step3;\n\n    try {\n      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n        var eVal = _step3.value;\n\n        if (!visited.has(eVal)) {\n          recursiveDFS(eVal);\n        }\n      }\n    } catch (err) {\n      _iterator3.e(err);\n    } finally {\n      _iterator3.f();\n    }\n  };\n\n  recursiveDFS(start);\n};\n\nmodule.exports = {\n  BFS: BFS,\n  DFSRecursive: DFSRecursive,\n  DFSIterative: DFSIterative\n};\n\n//# sourceURL=webpack://DataStructures/./src/GraphTraversal.js?");

/***/ }),

/***/ "./src/HashTable.js":
/*!**************************!*\
  !*** ./src/HashTable.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* https://reactgo.com/hashtable-javascript/ */\n\n/*\nRudimentary javascript hash table resolving collisions with separate chaining. \nTodo: Resolve conflicts with Linear Probing, Separate Chaining (linked lists)\n*/\nvar HashTable = /*#__PURE__*/function () {\n  function HashTable() {\n    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 42;\n\n    _classCallCheck(this, HashTable);\n\n    this.buckets = new Array(size);\n    this.size = size;\n  }\n\n  _createClass(HashTable, [{\n    key: \"hash\",\n    value: function hash(key) {\n      return key.toString().length % this.size;\n    }\n  }, {\n    key: \"set\",\n    value: function set(key, value) {\n      var i = this.hash(key); // if no collision, set the bucket at position i to array\n\n      if (!this.buckets[i]) this.buckets[i] = []; // push [key, val] into the array\n\n      this.buckets[i].push([key, value]);\n      return i;\n    }\n  }, {\n    key: \"get\",\n    value: function get(key) {\n      var i = this.hash(key);\n      if (!this.buckets[i]) return null; // check each pair inside the bucket at position i\n      // if key matches key at pair[0] return the val at pair[1]\n\n      var _iterator = _createForOfIteratorHelper(this.buckets[i]),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var pair = _step.value;\n          if (pair[0] === key) return pair[1];\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }]);\n\n  return HashTable;\n}();\n\nmodule.exports = HashTable;\n\n//# sourceURL=webpack://DataStructures/./src/HashTable.js?");

/***/ }),

/***/ "./src/LinkedList.js":
/*!***************************!*\
  !*** ./src/LinkedList.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LinkedList = function () {\n  // const head = Symbol('head') //To keep head as private in linked list\n  // const size = Symbol('size')\n  var ListNode = function ListNode(val) {\n    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n    _classCallCheck(this, ListNode);\n\n    this.val = val;\n    this.next = next;\n  };\n\n  var LinkedList = /*#__PURE__*/function () {\n    // Private static fields\n    function LinkedList() {\n      _classCallCheck(this, LinkedList);\n\n      _head.set(this, {\n        writable: true,\n        value: void 0\n      });\n\n      _size.set(this, {\n        writable: true,\n        value: void 0\n      });\n\n      // The head and size property shouldn't be modifiable outside the class. So there should only be a getter. Class fields aren't supported by a lot of browsers. Use symbol instead to create private class variables if you're not using babel.\n      _classPrivateFieldSet(this, _head, null);\n\n      _classPrivateFieldSet(this, _size, 0); // this[head] = null\n      // this[size] = 0\n\n    } //getters\n\n\n    _createClass(LinkedList, [{\n      key: \"fromArray\",\n      value: function fromArray(array) {\n        var _iterator = _createForOfIteratorHelper(array),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var val = _step.value;\n            this.appendToTail(val);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }\n    }, {\n      key: \"toArray\",\n      value: function toArray() {\n        var result = [];\n\n        var curr = _classPrivateFieldGet(this, _head);\n\n        while (curr) {\n          result.push(curr.val);\n          curr = curr.next;\n        }\n\n        return result;\n      } // T — O(1)\n\n    }, {\n      key: \"prependToHead\",\n      value: function prependToHead(val) {\n        var _this$size;\n\n        var node = new ListNode(val);\n        if (_classPrivateFieldGet(this, _head) == null) _classPrivateFieldSet(this, _head, node);else {\n          var prevHead = _classPrivateFieldGet(this, _head);\n\n          _classPrivateFieldSet(this, _head, node);\n\n          _classPrivateFieldGet(this, _head).next = prevHead;\n        }\n        _classPrivateFieldSet(this, _size, (_this$size = +_classPrivateFieldGet(this, _size)) + 1), _this$size;\n      } // T — O(n)\n\n    }, {\n      key: \"appendToTail\",\n      value: function appendToTail(val) {\n        var _this$size2;\n\n        var node = new ListNode(val);\n        if (_classPrivateFieldGet(this, _head) == null) _classPrivateFieldSet(this, _head, node);else {\n          var curr = _classPrivateFieldGet(this, _head);\n\n          while (curr.next) {\n            curr = curr.next;\n          }\n\n          curr.next = node;\n        }\n        _classPrivateFieldSet(this, _size, (_this$size2 = +_classPrivateFieldGet(this, _size)) + 1), _this$size2;\n      } // T — O(1)\n\n    }, {\n      key: \"deleteFromHead\",\n      value: function deleteFromHead() {\n        var _this$size3;\n\n        var currHead = _classPrivateFieldGet(this, _head);\n\n        if (!currHead) return null;\n\n        _classPrivateFieldSet(this, _head, currHead.next);\n\n        _classPrivateFieldSet(this, _size, (_this$size3 = +_classPrivateFieldGet(this, _size)) - 1), _this$size3;\n        return currHead.val;\n      } // T — O(n)\n\n    }, {\n      key: \"deleteFromTail\",\n      value: function deleteFromTail() {\n        var _this$size5;\n\n        var curr = _classPrivateFieldGet(this, _head);\n\n        if (!curr) return null; //Handle case of single node in linked list\n\n        if (!curr.next) {\n          var _this$size4;\n\n          _classPrivateFieldSet(this, _head, null);\n\n          _classPrivateFieldSet(this, _size, (_this$size4 = +_classPrivateFieldGet(this, _size)) - 1), _this$size4;\n          return curr.val;\n        }\n\n        var prev = null;\n\n        while (curr.next) {\n          prev = curr;\n          curr = curr.next;\n        }\n\n        prev.next = null;\n        _classPrivateFieldSet(this, _size, (_this$size5 = +_classPrivateFieldGet(this, _size)) - 1), _this$size5;\n        return curr.val;\n      } // T — O(n). Non recursive version of deleteNodeRecursive\n\n    }, {\n      key: \"deleteNode\",\n      value: function deleteNode(val) {\n        var deleteMultiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n        var deleteCount = 0;\n\n        var curr = _classPrivateFieldGet(this, _head),\n            prev = null;\n\n        while (curr) {\n          if (curr.val === val) {\n            var _this$size6;\n\n            if (!prev) {\n              //Don't need to garbage collect. This is Javascript, not C++\n              // const temp = curr\n              curr = curr.next; // temp.next = null\n\n              _classPrivateFieldSet(this, _head, curr);\n            } else {\n              prev.next = curr.next; // curr.next = null\n\n              curr = prev.next;\n            }\n\n            _classPrivateFieldSet(this, _size, (_this$size6 = +_classPrivateFieldGet(this, _size)) - 1), _this$size6;\n            deleteCount++;\n            if (!deleteMultiple) return true;\n          } else {\n            prev = curr;\n            curr = curr.next;\n          }\n        }\n\n        return !!deleteCount;\n      }\n    }, {\n      key: \"search\",\n      value: function search(val) {\n        var curr = _classPrivateFieldGet(this, _head);\n\n        while (curr) {\n          if (curr.val === val) return true;\n          curr = curr.next;\n        }\n\n        return false;\n      }\n    }, {\n      key: \"printList\",\n      value: function printList() {\n        var result = this.toArray();\n        console.log(result);\n        return result;\n      }\n    }, {\n      key: \"head\",\n      get: function get() {\n        return _classPrivateFieldGet(this, _head);\n      }\n    }, {\n      key: \"size\",\n      get: function get() {\n        return _classPrivateFieldGet(this, _size);\n      }\n    }, {\n      key: \"tail\",\n      get: function get() {\n        var curr = _classPrivateFieldGet(this, _head);\n\n        if (!curr) return null;\n\n        while (curr.next) {\n          curr = curr.next;\n        }\n\n        return curr;\n      }\n    }]);\n\n    return LinkedList;\n  }();\n\n  var _head = new WeakMap();\n\n  var _size = new WeakMap();\n\n  return LinkedList;\n}();\n\nmodule.exports = LinkedList;\n\n//# sourceURL=webpack://DataStructures/./src/LinkedList.js?");

/***/ }),

/***/ "./src/Queue.js":
/*!**********************!*\
  !*** ./src/Queue.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Queue = function () {\n  var QueueNode = function QueueNode(data) {\n    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n    _classCallCheck(this, QueueNode);\n\n    this.data = data;\n    this.next = next;\n  };\n\n  var Queue = /*#__PURE__*/function () {\n    //Look in ./LinkedList.js to see other ways of declaring private static fields https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields#Private_fields\n    function Queue() {\n      _classCallCheck(this, Queue);\n\n      _first.set(this, {\n        writable: true,\n        value: void 0\n      });\n\n      _last.set(this, {\n        writable: true,\n        value: void 0\n      });\n\n      _size.set(this, {\n        writable: true,\n        value: void 0\n      });\n\n      _classPrivateFieldSet(this, _first, null);\n\n      _classPrivateFieldSet(this, _last, null);\n\n      _classPrivateFieldSet(this, _size, 0);\n    }\n\n    _createClass(Queue, [{\n      key: \"enqueue\",\n      value: function enqueue(item) {\n        var _this$size;\n\n        var node = new QueueNode(item);\n\n        if (_classPrivateFieldGet(this, _last)) {\n          _classPrivateFieldGet(this, _last).next = node;\n        }\n\n        _classPrivateFieldSet(this, _last, node);\n\n        if (!_classPrivateFieldGet(this, _first)) _classPrivateFieldSet(this, _first, _classPrivateFieldGet(this, _last));\n        _classPrivateFieldSet(this, _size, (_this$size = +_classPrivateFieldGet(this, _size)) + 1), _this$size;\n      }\n    }, {\n      key: \"dequeue\",\n      value: function dequeue() {\n        var _this$size2;\n\n        if (!_classPrivateFieldGet(this, _first)) return null;\n\n        var data = _classPrivateFieldGet(this, _first).data;\n\n        _classPrivateFieldSet(this, _first, _classPrivateFieldGet(this, _first).next);\n\n        if (!_classPrivateFieldGet(this, _first)) _classPrivateFieldSet(this, _last, null);\n        _classPrivateFieldSet(this, _size, (_this$size2 = +_classPrivateFieldGet(this, _size)) - 1), _this$size2;\n        return data;\n      }\n    }, {\n      key: \"peek\",\n      value: function peek() {\n        if (!_classPrivateFieldGet(this, _first)) return null;\n        return _classPrivateFieldGet(this, _first).data;\n      }\n    }, {\n      key: \"isEmpty\",\n      value: function isEmpty() {\n        return _classPrivateFieldGet(this, _first) === null;\n      }\n    }, {\n      key: \"printQueue\",\n      value: function printQueue() {\n        var result = [];\n\n        var curr = _classPrivateFieldGet(this, _first);\n\n        while (curr) {\n          result.push(curr.data);\n          curr = curr.next;\n        }\n\n        console.log(result);\n        return result;\n      }\n    }, {\n      key: \"size\",\n      get: function get() {\n        return _classPrivateFieldGet(this, _size);\n      }\n    }]);\n\n    return Queue;\n  }();\n\n  var _first = new WeakMap();\n\n  var _last = new WeakMap();\n\n  var _size = new WeakMap();\n\n  return Queue;\n}();\n\nmodule.exports = Queue;\n\n//# sourceURL=webpack://DataStructures/./src/Queue.js?");

/***/ }),

/***/ "./src/Stack.js":
/*!**********************!*\
  !*** ./src/Stack.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Stack = function () {\n  var top = Symbol('top'); //To keep top as private in stack\n\n  var StackNode = function StackNode(data) {\n    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n    _classCallCheck(this, StackNode);\n\n    this.data = data;\n    this.next = next;\n  };\n\n  var Stack = /*#__PURE__*/function () {\n    function Stack() {\n      _classCallCheck(this, Stack);\n\n      this[top] = null;\n    }\n\n    _createClass(Stack, [{\n      key: \"push\",\n      value: function push(item) {\n        var node = new StackNode(item);\n        node.next = this[top];\n        this[top] = node;\n      }\n    }, {\n      key: \"pop\",\n      value: function pop() {\n        if (this[top] === null) return null;\n        var item = this[top].data;\n        this[top] = this[top].next;\n        return item;\n      }\n    }, {\n      key: \"peek\",\n      value: function peek() {\n        if (this[top] === null) return null;\n        return this[top].data;\n      }\n    }, {\n      key: \"isEmpty\",\n      value: function isEmpty() {\n        return this[top] === null;\n      }\n    }, {\n      key: \"printStack\",\n      value: function printStack() {\n        var result = [];\n        var curr = this[top];\n\n        while (curr) {\n          result.push(curr.data);\n          curr = curr.next;\n        } // console.log(result)\n\n\n        return result;\n      }\n    }, {\n      key: \"stackToString\",\n      value: function stackToString() {\n        return JSON.stringify(this.printStack());\n      }\n    }]);\n\n    return Stack;\n  }();\n\n  return Stack;\n}();\n\nmodule.exports = Stack;\n\n//# sourceURL=webpack://DataStructures/./src/Stack.js?");

/***/ }),

/***/ "./src/Trie.js":
/*!*********************!*\
  !*** ./src/Trie.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _temp, _root;\n\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\n/* \n\nhttps://leetcode.com/problems/implement-trie-prefix-tree/solution/\nVisualize a trie as a 26 by n matrix with one way relation between the letters in different levels. n is the length of the longest word in the trie.\n\nwords — deed, nom, noon\n\na  b  c  d  e  f  g  h  i  j  k  l  m  n  o ...\n           ↘                            ↘ \na  b  c  d  e  f  g  h  i  j  k  l  m  n  o ...\n            ↓                           ↙ ↓\n            ↓                         ↙   ↓\na  b  c  d  e  f  g  h  i  j  k  l  m  n  o ...\n          ↙                             ↙\na  b  c  d  e  f  g  h  i  j  k  l  m  n  o ...\n\nThe root would look like:\n\nconst trie =\n{\n  d: { e: { e: { d: { isWord: true } } } },\n  n: { o: { o: { n: { isWord: true } },\n       m: { isWord: true } }\n     }\n}\n\n*/\n// We'll assume that the words provided will consist of letters only and are always lowercase\nvar Trie = (_temp = /*#__PURE__*/function () {\n  function Trie() {\n    _classCallCheck(this, Trie);\n\n    _root.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldSet(this, _root, {});\n  }\n\n  _createClass(Trie, [{\n    key: \"_traverse\",\n    // helper. Change to private when private instance methods are supported\n    value: function _traverse(word) {\n      var curr = _classPrivateFieldGet(this, _root);\n\n      var _iterator = _createForOfIteratorHelper(word),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var ch = _step.value;\n          if (!curr) return null;\n          curr = curr[ch];\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      return curr;\n    }\n  }, {\n    key: \"insert\",\n    value: function insert(word) {\n      var curr = _classPrivateFieldGet(this, _root);\n\n      var _iterator2 = _createForOfIteratorHelper(word),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var ch = _step2.value;\n          curr[ch] = curr[ch] ? curr[ch] : {};\n          curr = curr[ch];\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n\n      curr.isWord = true;\n    }\n  }, {\n    key: \"search\",\n    value: function search(word) {\n      var node = this._traverse(word);\n\n      return node !== null && node.isWord === true;\n    }\n  }, {\n    key: \"startsWith\",\n    value: function startsWith(word) {\n      return this._traverse(word) !== null;\n    }\n  }, {\n    key: \"root\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _root);\n    }\n  }]);\n\n  return Trie;\n}(), _root = new WeakMap(), _temp);\nmodule.exports = Trie;\n\n//# sourceURL=webpack://DataStructures/./src/Trie.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar LinkedList = __webpack_require__(/*! ./LinkedList */ \"./src/LinkedList.js\");\n\nvar HashTable = __webpack_require__(/*! ./HashTable */ \"./src/HashTable.js\");\n\nvar Stack = __webpack_require__(/*! ./Stack */ \"./src/Stack.js\");\n\nvar Queue = __webpack_require__(/*! ./Queue */ \"./src/Queue.js\");\n\nvar TreeTraversal = __webpack_require__(/*! ./BinaryTreeTraversal */ \"./src/BinaryTreeTraversal.js\");\n\nvar BinarySearchTree = __webpack_require__(/*! ./BinarySearchTree */ \"./src/BinarySearchTree.js\");\n\nvar Trie = __webpack_require__(/*! ./Trie */ \"./src/Trie.js\");\n\nvar BinaryHeap = __webpack_require__(/*! ./BinaryHeap */ \"./src/BinaryHeap/index.js\");\n\nvar GraphTraversal = __webpack_require__(/*! ./GraphTraversal */ \"./src/GraphTraversal.js\");\n\nvar Graph = __webpack_require__(/*! ./Graph */ \"./src/Graph.js\");\n\nmodule.exports = _objectSpread({\n  LinkedList: LinkedList,\n  HashTable: HashTable,\n  Stack: Stack,\n  Queue: Queue,\n  TreeTraversal: TreeTraversal,\n  BinarySearchTree: BinarySearchTree,\n  Trie: Trie\n}, BinaryHeap, {\n  GraphTraversal: GraphTraversal,\n  Graph: Graph\n});\n\n//# sourceURL=webpack://DataStructures/./src/index.js?");

/***/ })

/******/ });
});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Chain.js":
/*!**********************!*\
  !*** ./src/Chain.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chain; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Chain = function Chain(display) {
  var _this = this;

  var _count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  _classCallCheck(this, Chain);

  _defineProperty(this, "setCount", function (count) {
    _this.count = count;
  });

  _defineProperty(this, "reset", function () {
    _this.setCount(0);

    _this.updateChain();
  });

  _defineProperty(this, "incrementCount", function () {
    var count = _this.count + 1;

    _this.setCount(count);

    _this.updateChain();
  });

  _defineProperty(this, "decrementCount", function () {
    var count = _this.count;
    _this.count = Math.max(count - 1, _this.min);

    _this.updateChain();
  });

  _defineProperty(this, "updateChain", function () {
    _this.display.updateElement('#chain', _this.count);
  });

  _defineProperty(this, "init", function () {
    _this.updateChain();
  });

  this.display = display;
  this.count = _count;
  this.min = 0;
};



/***/ }),

/***/ "./src/Child.js":
/*!**********************!*\
  !*** ./src/Child.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Child; });
/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ "./src/MovingObject.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var r = 10,
    c = '#f6e872',
    v = {
  dx: 1,
  dy: 1
};

var Child = /*#__PURE__*/function (_MovingObject) {
  _inherits(Child, _MovingObject);

  var _super = _createSuper(Child);

  function Child(_pos) {
    var _this;

    var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : r;
    var world = arguments.length > 2 ? arguments[2] : undefined;
    var sprite = arguments.length > 3 ? arguments[3] : undefined;
    var size = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      width: 0,
      height: 0
    };
    var vel = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : v;
    var color = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : c;

    _classCallCheck(this, Child);

    _this = _super.call(this, _pos, radius, world, sprite, size, vel, color);

    _defineProperty(_assertThisInitialized(_this), "setClicking", function (clicking) {
      _this.clicking = clicking;
    });

    _defineProperty(_assertThisInitialized(_this), "setParent", function (parent) {
      _this.parent = parent;
    });

    _defineProperty(_assertThisInitialized(_this), "setChainPos", function (chainPos) {
      _this.chainPos = chainPos;
    });

    _defineProperty(_assertThisInitialized(_this), "setNextChild", function (child) {
      _this.nextChild = child;
    });

    _defineProperty(_assertThisInitialized(_this), "setIndependence", function (independence) {
      _this.independence = independence;
    });

    _defineProperty(_assertThisInitialized(_this), "isIndependent", function () {
      return _this.independence;
    });

    _defineProperty(_assertThisInitialized(_this), "avoidPredator", function () {
      if (_this.independence) {
        var _this$pos = _this.pos,
            x = _this$pos.x,
            y = _this$pos.y,
            pos = {
          x: x + _this.currDir[0],
          y: y + _this.currDir[1]
        };

        _this.setRandomDir();

        pos = {
          x: x + _this.currDir[0],
          y: y + _this.currDir[1]
        };

        _this.bounceBack(pos);
      }
    });

    _this.independence = true;
    _this.chainPos = null;
    _this.parent = null;
    _this.nextChild = null;
    _this.posCache = [];
    _this.moves = _this.moves.bind(_assertThisInitialized(_this));
    _this.hitsPredator = _this.hitsPredator.bind(_assertThisInitialized(_this));
    _this.sprite = sprite;
    _this.size = size;
    _this.clicking = false;
    return _this;
  }

  _createClass(Child, [{
    key: "hitsPredator",
    value: function hitsPredator(game) {
      if (this.isIndependent()) game.destroyChild(this);else {
        var curr = this.parent.deleteLastChild();

        while (curr && curr !== this) {
          curr = this.parent.deleteLastChild();
        }
      }
    }
  }, {
    key: "moves",
    value: function moves(pos) {
      if (this.isIndependent()) _get(_getPrototypeOf(Child.prototype), "moves", this).call(this);else {
        // Removed easing for now. Maybe add for higher levels. Children take too long long to move.
        // const easing = Math.max(1 - this.chainPos * 0.13, 0.1),
        var easing = 1,
            _r = this.radius,
            nextChild = this.nextChild;
        var offset;
        if (this.clicking) offset = 0;else offset = 2 * (_r + 1) * this.chainPos + (this.parent.radius - _r);

        _get(_getPrototypeOf(Child.prototype), "movesWithCursor", this).call(this, pos, easing, offset);

        if (nextChild) nextChild.moves(this.posCache.length ? this.posCache[0] : pos);
      }
    }
  }]);

  return Child;
}(_MovingObject__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/Display/DOMDisplay.js":
/*!***********************************!*\
  !*** ./src/Display/DOMDisplay.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DOMDisplay; });
/* harmony import */ var _imgs_count_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/count.png */ "./src/imgs/count.png");
/* harmony import */ var _imgs_worm_left_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/worm-left.png */ "./src/imgs/worm-left.png");
/* harmony import */ var _imgs_worm_right_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/worm-right.png */ "./src/imgs/worm-right.png");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Related to the DOM and display (creating elements, updating elements etc.)
 */




var DOMDisplay = /*#__PURE__*/function () {
  function DOMDisplay(_ref) {
    var _this = this;

    var _ref$width = _ref.width,
        _width = _ref$width === void 0 ? 400 : _ref$width,
        _ref$height = _ref.height,
        _height = _ref$height === void 0 ? 700 : _ref$height;

    _classCallCheck(this, DOMDisplay);

    _defineProperty(this, "createImage", function (src, className, id) {
      var img = new Image();
      img.src = src;
      if (className) img.classList.add(className);
      if (id) img.id = id;
      return img;
    });

    _defineProperty(this, "removeAnimation", function (wormClass) {
      var worm = document.getElementsByClassName(wormClass)[0];
      if (worm) worm.classList.remove('animate');
    });

    _defineProperty(this, "animate", function (wormClass) {
      var worm = document.getElementsByClassName(wormClass)[0];
      if (worm) worm.classList.add('animate');
    });

    _defineProperty(this, "createElement", function (tag, className, id, content) {
      var element = document.createElement(tag);
      if (typeof className === 'string') element.classList.add(className);

      if (Array.isArray(className)) {
        var _iterator = _createForOfIteratorHelper(className),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var name = _step.value;
            element.classList.add(name);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (id) element.id = id;
      if (content) element.innerText = content;
      return element;
    });

    _defineProperty(this, "getElement", function (selector) {
      return document.querySelector(selector);
    });

    _defineProperty(this, "updateElement", function (selector, val) {
      var elem = _this.getElement(selector);

      if (elem) elem.innerText = val;
    });

    _defineProperty(this, "clearElement", function (selector) {
      var elem = _this.getElement(selector);

      if (elem) elem.innerText = '';
    });

    _defineProperty(this, "renderGame", function () {
      var game = _this.createElement('div', 'game', 'game');

      document.body.appendChild(game);
    });

    _defineProperty(this, "renderTitle", function () {
      var title = _this.createElement('div', 'title', null),
          heading = _this.createElement('h1', null, null, 'CHICKEN MEETS WORM'),
          game = _this.getElement('#game');

      game.append(title);
      title.append(heading);
    });

    _defineProperty(this, "renderWorld", function () {
      var worldWrapper = _this.createElement('div', 'world-wrapper', 'world-wrapper'),
          world = _this.createElement('canvas', null, 'world'),
          _this$worldSize = _this.worldSize,
          width = _this$worldSize.width,
          height = _this$worldSize.height,
          game = _this.getElement('#game');

      world.width = _this.worldSize.width;
      world.height = _this.worldSize.height;
      game.append(worldWrapper);
      worldWrapper.append(world);
      worldWrapper.style.width = width + 2 + 'px';
      worldWrapper.style.height = height + 2 + 'px';
    });

    _defineProperty(this, "renderLegend", function () {
      var legend = _this.createElement('div', 'legend', 'legend'),
          worldWrapper = _this.getElement('#world-wrapper');

      worldWrapper.append(legend);
    });

    _defineProperty(this, "renderGameEnd", function (handleClickReplay, score, highScore) {
      var gameEndWrapper = _this.createElement('div', 'end-wrapper'),
          gameEnd = _this.createElement('div', 'game-end'),
          worldWrapper = _this.getElement('#world-wrapper');

      gameEndWrapper.style.width = _this.worldSize.width + 4 + 'px';
      worldWrapper.append(gameEndWrapper);
      gameEndWrapper.append(gameEnd);
      gameEndWrapper.style.top = 98 + _this.worldSize.height / 4 + 'px';

      _this.renderGameOverMessage();

      _this.renderEndScore(score, highScore);

      _this.renderReplayButton(handleClickReplay);
    });

    _defineProperty(this, "clearGameEnd", function () {
      var gameEnd = _this.getElement('.end-wrapper'),
          worldWrapper = _this.getElement('.world-wrapper');

      if (gameEnd) worldWrapper.removeChild(gameEnd);
    });

    _defineProperty(this, "renderGameOverMessage", function () {
      var message = _this.createElement('div', 'game-over', null, 'Game Over!'),
          gameEnd = _this.getElement('.game-end');

      gameEnd.append(message);
    });

    _defineProperty(this, "renderReplayButton", function (handleClickReplay) {
      var button = _this.createElement('button', 'btn', 'replay'),
          gameEnd = _this.getElement('.game-end');

      button.innerText = 'Replay';
      button.addEventListener('click', handleClickReplay);
      gameEnd.append(button);
    });

    _defineProperty(this, "renderEndScore", function (score, highScore) {
      var endScoreWrapper = _this.createElement('div', 'wrapper'),
          endScoreLabel = _this.createElement('span', 'score-label', null, 'Your score: '),
          endScore = _this.createElement('span', 'score', 'end-score', score.toString()),
          bestScoreWrapper = _this.createElement('div', 'wrapper'),
          bestScoreLabel = _this.createElement('span', 'score-label', null, 'Best score: '),
          bestScore = _this.createElement('span', 'score', 'best-score', highScore.toString()),
          gameEnd = _this.getElement('.game-end');

      endScoreWrapper.append(endScoreLabel);
      endScoreWrapper.append(endScore);
      bestScoreWrapper.append(bestScoreLabel);
      bestScoreWrapper.append(bestScore);
      gameEnd.append(endScoreWrapper);
      gameEnd.append(bestScoreWrapper);
    });

    this.worldSize = {
      width: _width,
      height: _height
    };
    this.renderChain = this.renderChain.bind(this);
    this.renderEnergy = this.renderEnergy.bind(this);
    this.renderScore = this.renderScore.bind(this);
  }

  _createClass(DOMDisplay, [{
    key: "renderEnergy",
    value: function renderEnergy() {
      var legend = this.getElement('#legend'),
          energyWrapper = this.createElement('div', 'energy-wrapper', 'energy-wrapper');
      legend.appendChild(energyWrapper);
      this.updateEnergyBar(5);
    }
  }, {
    key: "renderChain",
    value: function renderChain() {
      var chainWrapper = this.createElement('div', 'chain-wrapper'),
          countImg = this.createImage(_imgs_count_png__WEBPACK_IMPORTED_MODULE_0__["default"], 'image', 'chain-count'),
          chain = this.createElement('span', 'legend-text', 'chain'),
          legend = this.getElement('#legend');
      legend.append(chainWrapper);
      chainWrapper.append(countImg);
      chainWrapper.append(chain);
    }
  }, {
    key: "updateEnergyBar",
    value: function updateEnergyBar(count) {
      var eW = this.getElement('#energy-wrapper'),
          i = Math.min(count, 5) * 2;

      if (eW.childElementCount > i) {
        while (eW.childElementCount > i) {
          if (eW.childElementCount === 0) return;
          eW.removeChild(eW.lastChild);
        }
      } else if (eW.childElementCount < i) {
        var left = true,
            wormCount = eW.childElementCount;

        if (wormCount % 2 !== 0) {
          eW.append(this.createImage(_imgs_worm_right_png__WEBPACK_IMPORTED_MODULE_2__["default"], 'worm-right'));
          wormCount++;
        }

        while (wormCount < i) {
          var wormL = this.createImage(_imgs_worm_left_png__WEBPACK_IMPORTED_MODULE_1__["default"], 'worm-left'),
              wormR = this.createImage(_imgs_worm_right_png__WEBPACK_IMPORTED_MODULE_2__["default"], 'worm-right');

          if (left) {
            eW.append(wormL);
            left = false;
          } else if (!left) {
            eW.append(wormR);
            left = true;
          }

          wormCount++;
        }
      }
    }
  }, {
    key: "renderScore",
    value: function renderScore() {
      var score = this.createElement('div', ['legend-text', 'score'], 'score'),
          legend = this.getElement('#legend');
      legend.append(score);
    }
  }]);

  return DOMDisplay;
}();



/***/ }),

/***/ "./src/Display/Intro.js":
/*!******************************!*\
  !*** ./src/Display/Intro.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Intro; });
/* harmony import */ var _imgs_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/logo.png */ "./src/imgs/logo.png");
/* harmony import */ var _DOMDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMDisplay */ "./src/Display/DOMDisplay.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Intro = /*#__PURE__*/function (_DOMDisplay) {
  _inherits(Intro, _DOMDisplay);

  var _super = _createSuper(Intro);

  function Intro(worldSize) {
    var _this;

    _classCallCheck(this, Intro);

    _this = _super.call(this, worldSize);

    _defineProperty(_assertThisInitialized(_this), "renderTutorialButton", function (handleClickTutorial) {
      var button = _this.createElement('button', 'btn', 'tutorial');

      button.innerText = 'Tutorial';
      button.addEventListener('click', handleClickTutorial);

      _this.introWrapper.append(button);
    });

    _defineProperty(_assertThisInitialized(_this), "renderStartLink", function (handleClickStart) {
      var link = _this.createElement('a', 'start', 'start');

      link.innerText = 'Tutorials r for noobs.';
      link.addEventListener('click', handleClickStart);

      _this.introWrapper.append(link);
    });

    _defineProperty(_assertThisInitialized(_this), "renderIntro", function () {
      var introWrapper = _this.createElement('div', 'intro-wrapper'),
          introPic = _this.createImage(_imgs_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"], 'logo'),
          intro = _this.createElement('div', 'intro'),
          introMessage = _this.createElement('span', 'intro-message', null, 'Feast on worms, protect your children!'),
          worldWrapper = _this.getElement('#world-wrapper');

      worldWrapper.append(introWrapper);
      intro.append(introPic);
      intro.append(introMessage);
      introWrapper.append(intro);
      introWrapper.style.width = _this.worldSize.width + 4 + 'px';
      introWrapper.style.top = 98 + _this.worldSize.height / 6 + 'px';
      _this.introWrapper = introWrapper;
    });

    _defineProperty(_assertThisInitialized(_this), "clearIntro", function () {
      var worldWrapper = _this.getElement('#world-wrapper');

      worldWrapper.removeChild(_this.introWrapper);
    });

    return _this;
  }

  return Intro;
}(_DOMDisplay__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/Display/Tutorial.js":
/*!*********************************!*\
  !*** ./src/Display/Tutorial.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tutorial; });
/* harmony import */ var _DOMDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMDisplay */ "./src/Display/DOMDisplay.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Tutorial = /*#__PURE__*/function (_DOMDisplay) {
  _inherits(Tutorial, _DOMDisplay);

  var _super = _createSuper(Tutorial);

  function Tutorial(worldSize) {
    var _this;

    _classCallCheck(this, Tutorial);

    _this = _super.call(this, worldSize);

    _defineProperty(_assertThisInitialized(_this), "clearPrevTut", function () {
      while (_this.settimeout.length) {
        clearTimeout(_this.settimeout.pop());
      }

      _this.clearElement('#tut-msg-1');
    });

    _defineProperty(_assertThisInitialized(_this), "changeMessage", function (selector, message, time) {
      _this.settimeout.push(setTimeout(function () {
        _this.updateElement(selector, message);
      }, time));
    });

    _defineProperty(_assertThisInitialized(_this), "renderMoveParentTut", function () {
      var tutorialWrapper = _this.createElement('div', 'tutorial-wrapper'),
          message1 = _this.createElement('div', 'tutorial-message', 'tut-msg-0', 'Move your mouse to move the chicken.'),
          message2 = _this.createElement('div', 'tutorial-message', 'tut-msg-1'),
          worldWrapper = _this.getElement('#world-wrapper');

      worldWrapper.append(tutorialWrapper);
      tutorialWrapper.style.width = _this.worldSize.width + 4 + 'px';
      tutorialWrapper.style.height = _this.worldSize.height + 4 + 'px';
      message2.style.width = _this.worldSize.width + 4 + 'px';
      message2.style.top = _this.worldSize.height - 36 + 'px';
      tutorialWrapper.append(message1);
      tutorialWrapper.append(message2);

      _this.changeMessage('#tut-msg-1', 'Press SPACE to continue and ENTER to skip tutorial.', 2500);
    });

    _defineProperty(_assertThisInitialized(_this), "renderChildrenTut", function () {
      _this.renderLegend();

      _this.clearPrevTut();

      _this.updateElement('#tut-msg-0', 'Hover over the baby chicks to make them stick close to you.');

      _this.changeMessage('#tut-msg-0', 'The longer your chain, the higher your score increments.', 3500);

      _this.changeMessage('#tut-msg-1', 'Press SPACE to continue and ENTER to skip tutorial.', 6000);
    });

    _defineProperty(_assertThisInitialized(_this), "renderPredatorTut", function () {
      _this.clearPrevTut();

      _this.updateElement('#tut-msg-0', "Watch out for predators. Nyan-chan didn't get fat eating grass.");

      _this.changeMessage('#tut-msg-0', "The worms show your health. Every encounter with a cat costs you 1 worm. The game ends when you're out of worms.", 5000);

      _this.changeMessage('#tut-msg-1', 'Press SPACE to continue and ENTER to skip tutorial.', 8000);
    });

    _defineProperty(_assertThisInitialized(_this), "renderClickParentTut", function () {
      _this.clearPrevTut();

      _this.updateElement('#tut-msg-0', 'CLICK to gather all your children in one place for the cheap price of half a worm.');

      _this.changeMessage('#tut-msg-0', "Do this sparingly, cause you won't be able to move while clicking! And you can't use it if you don't have enough worms.", 4000);

      _this.changeMessage('#tut-msg-1', 'Press SPACE to continue and ENTER to skip tutorial.', 7000);
    });

    _defineProperty(_assertThisInitialized(_this), "renderWormTut", function () {
      _this.clearPrevTut();

      _this.updateElement('#tut-msg-0', 'Replenish your energy by feasting on delicious worms.');

      _this.changeMessage('#tut-msg-0', 'You can have some extra for the tutorial.', 3500);

      _this.changeMessage('#tut-msg-0', "Congratulations you're no longer a noob! Press ENTER to start!", 6000);
    });

    _defineProperty(_assertThisInitialized(_this), "clearTutorial", function () {
      _this.clearPrevTut();

      var worldWrapper = _this.getElement('#world-wrapper'),
          legend = _this.getElement('#legend'),
          tutorialWrapper = _this.getElement('.tutorial-wrapper');

      if (legend) worldWrapper.removeChild(legend);
      if (tutorialWrapper) worldWrapper.removeChild(tutorialWrapper);
    });

    _this.settimeout = [];
    return _this;
  }

  return Tutorial;
}(_DOMDisplay__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/Energy.js":
/*!***********************!*\
  !*** ./src/Energy.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Energy; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Energy = function Energy(display) {
  var _this = this;

  var energy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

  _classCallCheck(this, Energy);

  _defineProperty(this, "setCount", function (count) {
    _this.count = count;
  });

  _defineProperty(this, "reset", function () {
    _this.setCount(_this.max);

    _this.updateEnergy();
  });

  _defineProperty(this, "incrementCount", function () {
    var count = Math.min(_this.count + 1, _this.max);

    _this.setCount(count);

    _this.updateEnergy();
  });

  _defineProperty(this, "decrementCount", function () {
    var count = _this.count;
    _this.count = Math.max(count - 1, _this.min);

    _this.updateEnergy();
  });

  _defineProperty(this, "decrementCountByHalf", function () {
    var count = _this.count;
    _this.count = Math.max(count - 0.5, _this.min);

    _this.updateEnergy();
  });

  _defineProperty(this, "updateEnergy", function () {
    _this.display.updateEnergyBar(_this.count);
  });

  _defineProperty(this, "init", function () {
    _this.updateEnergy();
  });

  this.display = display;
  this.count = energy;
  this.min = 0;
  this.max = max;
};



/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var data_structures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data_structures */ "./node_modules/data_structures/dist/DataStructures.js");
/* harmony import */ var data_structures__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(data_structures__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chain.js */ "./src/Chain.js");
/* harmony import */ var _Child_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Child.js */ "./src/Child.js");
/* harmony import */ var _Energy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Energy.js */ "./src/Energy.js");
/* harmony import */ var _imgs_child_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/child.png */ "./src/imgs/child.png");
/* harmony import */ var _imgs_parent_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/parent.png */ "./src/imgs/parent.png");
/* harmony import */ var _imgs_predator_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgs/predator.png */ "./src/imgs/predator.png");
/* harmony import */ var _imgs_worm_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgs/worm.png */ "./src/imgs/worm.png");
/* harmony import */ var _Parent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Parent.js */ "./src/Parent.js");
/* harmony import */ var _Predator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Predator.js */ "./src/Predator.js");
/* harmony import */ var _Score_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Score.js */ "./src/Score.js");
/* harmony import */ var _World_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./World.js */ "./src/World.js");
/* harmony import */ var _Worm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Worm.js */ "./src/Worm.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var ChildSprite = new Image();
ChildSprite.src = _imgs_child_png__WEBPACK_IMPORTED_MODULE_4__["default"];
var ParentSprite = new Image();
ParentSprite.src = _imgs_parent_png__WEBPACK_IMPORTED_MODULE_5__["default"];
var PredatorSprite = new Image();
PredatorSprite.src = _imgs_predator_png__WEBPACK_IMPORTED_MODULE_6__["default"];
var WormSprite = new Image();
WormSprite.src = _imgs_worm_png__WEBPACK_IMPORTED_MODULE_7__["default"];

var Game = /*#__PURE__*/function () {
  function Game(display) {
    var _this = this;

    var childCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    var predatorCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
    var wormCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _classCallCheck(this, Game);

    _defineProperty(this, "handleMouseMove", function (e) {
      if (_this.clicking) return;
      _this.mouse = {
        x: e.clientX,
        y: e.clientY
      };

      _this.display.removeAnimation('worm-left');
    });

    _defineProperty(this, "handleMouseDown", function (e) {
      if (_this.energy.count <= 0.5) {
        _this.display.animate('worm-left');

        return;
      }

      var mouse = {
        x: e.clientX,
        y: e.clientY
      };
      _this.mouse = mouse;
      _this.clicking = true;
      if (_this.parent.getChildCount() > 0) _this.energy.decrementCountByHalf();
    });

    _defineProperty(this, "handleMouseUp", function () {
      _this.clicking = false;
    });

    _defineProperty(this, "destroyWorm", function (worm) {
      _this.worms.deleteNode(worm);
    });

    _defineProperty(this, "destroyChild", function (child) {
      _this.children.deleteNode(child);

      _this.spawnChildren(17.5);
    });

    _defineProperty(this, "checkInRange", function () {
      var parent = _this.parent,
          children = _this.children.toArray(),
          predators = _this.predators.toArray(),
          worms = _this.worms.toArray(); // Child predator collisions


      var _iterator = _createForOfIteratorHelper(children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;

          if (parent.checkInRange(child)) {
            parent.hitsChild(child);

            _this.spawnChildren(17.5);
          }

          var _iterator4 = _createForOfIteratorHelper(predators),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var predator = _step4.value;
              if (child.checkInRange(predator, 10)) child.avoidPredator();
              if (child.checkInRange(predator, 0)) child.hitsPredator(_this);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        } // Parent predator collisions

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(predators),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _predator = _step2.value;
          if (parent.checkInRange(_predator, 5)) parent.checkCollisionWithPredator(_predator);
        } //Parent worm collisions

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(worms),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var worm = _step3.value;
          if (parent.checkInRange(worm, 2)) parent.hitsWorm(_this, worm);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    });

    _defineProperty(this, "spawnChildren", function (r) {
      var size = {
        width: r * 2,
        height: r * 2
      };

      var independentC = _this.children.size - _this.parent.getChildCount();

      while (independentC < _this.childCount && _this.childCount > 0) {
        var randomPos = _this.world.getRandomPos(r),
            child = new _Child_js__WEBPACK_IMPORTED_MODULE_2__["default"](randomPos, r, _this.world, ChildSprite, size);

        child.setRandomDir();

        _this.children.appendToTail(child);

        independentC = _this.children.size - _this.parent.getChildCount();
      }
    });

    _defineProperty(this, "spawnPredators", function (r) {
      var size = {
        width: r * 2,
        height: r * 2
      };

      while (_this.predators.size < _this.predatorCount) {
        var randomPos = _this.world.getRandomPos(r),
            predator = new _Predator_js__WEBPACK_IMPORTED_MODULE_9__["default"](randomPos, r, _this.world, PredatorSprite, size);

        predator.setRandomDir();

        _this.predators.appendToTail(predator);
      }
    });

    _defineProperty(this, "spawnWorms", function (r, vel) {
      if (!vel) vel = {
        dx: 2,
        dy: 2
      };
      var size = {
        width: r * 2,
        height: r * 2
      };

      while (_this.worms.size < _this.wormCount) {
        var randomPos = _this.world.getRandomPos(r),
            worm = new _Worm_js__WEBPACK_IMPORTED_MODULE_12__["default"](randomPos, r, _this.world, WormSprite, size, vel);

        worm.setRandomDir();

        _this.worms.appendToTail(worm);
      }
    });

    _defineProperty(this, "initChildren", function (r) {
      _this.spawnChildren(r);
    });

    _defineProperty(this, "initPredators", function (r) {
      _this.spawnPredators(r);
    });

    _defineProperty(this, "initParent", function (r) {
      var size = {
        width: r * 2,
        height: r * 2
      };
      var initialPos = {
        x: _this.world.size.width / 2 + r,
        y: _this.world.size.height / 2 + r
      };
      var parent = new _Parent_js__WEBPACK_IMPORTED_MODULE_8__["default"](initialPos, r, _this.world, _this.chain, _this.score, _this.energy, ParentSprite, size);
      _this.parent = parent;
    });

    _defineProperty(this, "initWorms", function (r, vel) {
      _this.spawnWorms(r, vel);
    });

    _defineProperty(this, "initChain", function () {
      var chain = new _Chain_js__WEBPACK_IMPORTED_MODULE_1__["default"](_this.display);
      chain.init();
      _this.chain = chain;
    });

    _defineProperty(this, "initWorld", function () {
      var world = new _World_js__WEBPACK_IMPORTED_MODULE_11__["default"](_this.display);
      world.init();
      _this.world = world;
    });

    _defineProperty(this, "initScore", function () {
      var score = new _Score_js__WEBPACK_IMPORTED_MODULE_10__["default"](_this.display);
      score.init();
      _this.score = score;
    });

    _defineProperty(this, "initEnergy", function (initCount, max) {
      var energy = new _Energy_js__WEBPACK_IMPORTED_MODULE_3__["default"](_this.display, initCount, max);
      energy.init();
      _this.energy = energy;
    });

    _defineProperty(this, "resetGame", function () {
      _this.energy.reset();

      _this.score.reset();

      _this.mouse = {
        x: null,
        y: null
      };
      _this.parent = null;
      _this.predators = new data_structures__WEBPACK_IMPORTED_MODULE_0__["LinkedList"]();
      _this.children = new data_structures__WEBPACK_IMPORTED_MODULE_0__["LinkedList"]();
      _this.worms = new data_structures__WEBPACK_IMPORTED_MODULE_0__["LinkedList"]();
      _this.chain = null;
      _this.timeSinceWorm = 0;

      _this.initWorld();

      _this.initChain();

      _this.initParent(30);

      _this.initChildren(17.5);

      _this.initPredators(35);

      _this.initWorms(20);

      _this.animationReq = window.requestAnimationFrame(_this.draw);
    });

    _defineProperty(this, "gameOver", function () {
      _this.score.calculateHighScore();

      window.cancelAnimationFrame(_this.animationReq);
      _this.animationReq = null;

      _this.display.renderGameEnd(_this.replayGame, _this.score.score, _this.score.highScore);

      return;
    });

    _defineProperty(this, "clearCanvas", function () {
      var canvas = _this.world.canvas,
          ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    _defineProperty(this, "draw", function (timestamp) {
      if (_this.energy.count === 0) {
        return _this.gameOver();
      }

      var timePassed = timestamp - _this.timeSinceWorm;

      if (timePassed >= 2500 && _this.worms.size <= 0) {
        _this.spawnWorms(20);

        _this.timeSinceWorm = timestamp;
      }

      var canvas = _this.world.canvas,
          ctx = canvas.getContext('2d'),
          children = _this.children.toArray(),
          predators = _this.predators.toArray(),
          worms = _this.worms.toArray();

      _this.clearCanvas();

      _this.parent.moves(_this.mouse);

      _this.parent.draw(ctx, {
        x: 30,
        y: 25
      });

      var _iterator5 = _createForOfIteratorHelper(predators),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var predator = _step5.value;
          predator.moves();
          predator.draw(ctx, {
            x: 30,
            y: 25
          });
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      var _iterator6 = _createForOfIteratorHelper(worms),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var worm = _step6.value;
          worm.moves(_this);
          worm.draw(ctx, {
            x: 0,
            y: 0
          });
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var _iterator7 = _createForOfIteratorHelper(children),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var child = _step7.value;
          if (child.independence) child.moves();
          child.draw(ctx, {
            x: 15,
            y: 15
          });
          _this.clicking ? child.setClicking(true) : child.setClicking(false);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      _this.checkInRange();

      _this.animationReq = window.requestAnimationFrame(_this.draw);
    });

    this.display = display;
    this.mouse = {
      x: null,
      y: null
    };
    this.world = null;
    this.parent = null;
    this.predators = new data_structures__WEBPACK_IMPORTED_MODULE_0__["LinkedList"]();
    this.children = new data_structures__WEBPACK_IMPORTED_MODULE_0__["LinkedList"]();
    this.worms = new data_structures__WEBPACK_IMPORTED_MODULE_0__["LinkedList"]();
    this.childCount = childCount;
    this.predatorCount = predatorCount;
    this.wormCount = wormCount;
    this.chain = null;
    this.energy = null;
    this.score = null;
    this.timeSinceWorm = 0;
    this.animationReq = null;
    this.clicking = false;
    this.init = this.init.bind(this);
    this.clearGame = this.clearGame.bind(this);
    this.replayGame = this.replayGame.bind(this);
  }

  _createClass(Game, [{
    key: "replayGame",
    value: function replayGame() {
      this.resetGame();
      this.display.clearGameEnd();
    }
  }, {
    key: "clearGame",
    value: function clearGame() {
      this.display.clearGameEnd();
      window.cancelAnimationFrame(this.animationReq);
      window.removeEventListener('mousemove', this.handleMouseMove, false);
      window.removeEventListener('mousedown', this.handleMouseDown, false);
      window.removeEventListener('mouseup', this.handleMouseUp, false);
    }
  }, {
    key: "init",
    value: function init() {
      this.display.renderLegend();
      this.display.renderScore();
      this.display.renderChain();
      this.display.renderEnergy();
      window.addEventListener('mousemove', this.handleMouseMove, false);
      window.addEventListener('mousedown', this.handleMouseDown, false);
      window.addEventListener('mouseup', this.handleMouseUp, false);
      this.initEnergy(5, 5);
      this.initWorld();
      this.initScore();
      this.initChain();
      this.initParent(30);
      this.initChildren(17.5);
      this.initPredators(35);
      this.initWorms(20);
      this.animationReq = window.requestAnimationFrame(this.draw);
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/MovingObject.js":
/*!*****************************!*\
  !*** ./src/MovingObject.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovingObject; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var r = 10,
    c = '#7280f6',
    v = {
  dx: 1,
  dy: 1
};

var MovingObject = /*#__PURE__*/function () {
  function MovingObject(_pos) {
    var _this = this;

    var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : r;
    var world = arguments.length > 2 ? arguments[2] : undefined;
    var sprite = arguments.length > 3 ? arguments[3] : undefined;
    var size = arguments.length > 4 ? arguments[4] : undefined;
    var vel = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : v;
    var color = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : c;

    _classCallCheck(this, MovingObject);

    _defineProperty(this, "setVelocity", function (velocity) {
      _this.vel = velocity;
    });

    _defineProperty(this, "setPos", function (pos) {
      _this.pos = pos;
    });

    _defineProperty(this, "setPosCache", function (posCache) {
      _this.posCache = posCache;
    });

    _defineProperty(this, "setCurrDir", function (dir) {
      _this.currDir = dir;
    });

    _defineProperty(this, "setRandomDir", function () {
      /* 
      8 possible directions.
      Vertical and horizontal: 
          ↑      
          ↑
      ←  ←   →  →  
          ↓
          ↓ 
      Diagonals:
      ↖      ↗
        ↖  ↗
        ↙  ↘ 
      ↙      ↘
      */
      var _this$vel = _this.vel,
          dx = _this$vel.dx,
          dy = _this$vel.dy;
      dx = dx ? dx : 1;
      dy = dy ? dy : 1;
      var index = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(8);
      var possibleDirections = [// 0 values off slightly so objects doesn't stick to edges.
      [dx, 0.2], [-dx, 0.3], [0.15, dy], [0.23, -dy], [dx, dy], [-dx, dy], [dx, -dy], [-dx, -dy]];

      _this.setCurrDir(possibleDirections[index]);
    });

    _defineProperty(this, "checkOutOfBounds", function (pos) {
      return _this.world.checkOutOfBounds(pos, _this.radius);
    });

    _defineProperty(this, "getRandomPos", function () {
      return _this.world.getRandomPos(_this.radius);
    });

    _defineProperty(this, "bounceBack", function (pos) {
      var bounds = _this.world.bounds,
          top = bounds.top,
          right = bounds.right,
          bottom = bounds.bottom,
          left = bounds.left,
          r = _this.radius;
      var x = pos.x,
          y = pos.y,
          dx = _this.currDir[0],
          dy = _this.currDir[1];

      if (_this.constructor.name === 'Child') {
        if (_this.vel.dx > 1 || _this.vel.dy > 1) {
          _this.setVelocity({
            dx: 1,
            dy: 1
          });
        }

        if (dx > 1) {
          dx = dx / 5;
        }

        if (dy > 1) {
          dy = dy / 5;
        }
      }

      if (x + r > right || x - r < left) {
        _this.setCurrDir([-dx, dy]);
      }

      if (y - r < top || y + r > bottom) {
        _this.setCurrDir([dx, -dy]);
      } //objs get stuck if parallel to walls and out of bounds


      var nPos = {
        x: x + _this.currDir[0],
        y: y + _this.currDir[1]
      };
      if (_this.checkOutOfBounds(nPos)) _this.setRandomDir();
    });

    _defineProperty(this, "draw", function (ctx) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        x: 0,
        y: 0
      };
      var _this$pos = _this.pos,
          x = _this$pos.x,
          y = _this$pos.y;
      ctx.drawImage(_this.sprite, x - offset.x, y - offset.y, _this.size.width, _this.size.height);
    });

    _defineProperty(this, "clipPos", function (_ref) {
      var x = _ref.x,
          y = _ref.y;
      var _this$world$bounds = _this.world.bounds,
          top = _this$world$bounds.top,
          right = _this$world$bounds.right,
          bottom = _this$world$bounds.bottom,
          left = _this$world$bounds.left,
          r = _this.radius;
      var clippedX = x > left + r && x < right - r ? x : _this.pos.x,
          clippedY = y > top + r && y < bottom - r ? y : _this.pos.y;
      return {
        x: clippedX,
        y: clippedY
      };
    });

    this.pos = _pos;
    this.radius = radius;
    this.world = world;
    this.sprite = sprite;
    this.size = size;
    this.color = color;
    this.vel = vel;
    this.currDir = [0, 0];
    this.posCache = [];
    this.draw = this.draw.bind(this);
    this.movesWithCursor = this.movesWithCursor.bind(this);
    this.moves = this.moves.bind(this);
    this.checkInRange = this.checkInRange.bind(this);
    this.hitsParent = this.hitsParent.bind(this);
    this.hitsPredator = this.hitsPredator.bind(this);
    this.hitsChild = this.hitsChild.bind(this);
  }

  _createClass(MovingObject, [{
    key: "checkInRange",
    value: function checkInRange(obj) {
      var cushion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      // Note: obj.constructor.name won't work with IE and there are some caveats. More info --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
      var oPos = obj.pos,
          oR = obj.radius + cushion,
          _this$pos2 = this.pos,
          x = _this$pos2.x,
          y = _this$pos2.y,
          rangeX = [oPos.x - oR, oPos.x + oR],
          rangeY = [oPos.y - oR, oPos.y + oR],
          r = this.radius + cushion;
      var withinRange = (_utils__WEBPACK_IMPORTED_MODULE_0__["inRange"].apply(void 0, [x - r].concat(rangeX)) || _utils__WEBPACK_IMPORTED_MODULE_0__["inRange"].apply(void 0, [x + r].concat(rangeX))) && (_utils__WEBPACK_IMPORTED_MODULE_0__["inRange"].apply(void 0, [y - r].concat(rangeY)) || _utils__WEBPACK_IMPORTED_MODULE_0__["inRange"].apply(void 0, [y + r].concat(rangeY)));
      return withinRange;
    } // Can't use @babel/plugin-proposal-class-properties. super.move() doesn't work in subclasses.

  }, {
    key: "hitsParent",
    value: function hitsParent(obj) {}
  }, {
    key: "hitsPredator",
    value: function hitsPredator(obj) {}
  }, {
    key: "hitsChild",
    value: function hitsChild(obj) {}
    /** Draw the object on canvas */

  }, {
    key: "movesWithCursor",
    value: function movesWithCursor(pos, easing) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var offsets = this.world.offsets;
      var x = pos.x,
          y = pos.y; // Offsets to account for margin, paddings around game world.

      var offsetL = offsets.left,
          offsetT = offsets.top,
          relativeX = x - offsetL,
          relativeY = y - offsetT;
      var xDiff = relativeX - this.pos.x,
          yDiff = relativeY - this.pos.y; // Offset children so they don't all overlap the parent when stationary or slow moving.

      if (yDiff <= 0) yDiff += offset; //More info on tweening, animation --> https://spicyyoghurt.com/tutorials/html5-javascript-game-development/create-a-smooth-canvas-animation https://stackoverflow.com/a/37973577/11279811

      var velX = xDiff * easing,
          velY = yDiff * easing;
      this.velocity = {
        x: velX,
        y: velY
      };
      x = this.pos.x + velX;
      y = this.pos.y + velY; //Don't let objects pass edge

      var clippedPos = this.clipPos({
        x: x,
        y: y
      });
      this.setPos(clippedPos); // Cache last 5 positions. Makes children's movement more natural.

      var posCache = this.posCache;
      if (posCache.length > 4) posCache.shift();
      posCache.push(pos);
      this.setPosCache(posCache);
    }
  }, {
    key: "moves",
    value: function moves() {
      var _this$pos3 = this.pos,
          x = _this$pos3.x,
          y = _this$pos3.y,
          pos = {
        x: x + this.currDir[0],
        y: y + this.currDir[1]
      };
      if (this.checkOutOfBounds(pos)) this.bounceBack(pos);
      this.setPos(pos);
    }
  }]);

  return MovingObject;
}();



/***/ }),

/***/ "./src/Parent.js":
/*!***********************!*\
  !*** ./src/Parent.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parent; });
/* harmony import */ var data_structures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data_structures */ "./node_modules/data_structures/dist/DataStructures.js");
/* harmony import */ var data_structures__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(data_structures__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovingObject */ "./src/MovingObject.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var r = 13,
    c = '#7280f6',
    e = 1;

var Parent = /*#__PURE__*/function (_MovingObject) {
  _inherits(Parent, _MovingObject);

  var _super = _createSuper(Parent);

  function Parent(pos) {
    var _this;

    var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : r;
    var world = arguments.length > 2 ? arguments[2] : undefined;
    var chain = arguments.length > 3 ? arguments[3] : undefined;
    var score = arguments.length > 4 ? arguments[4] : undefined;
    var energy = arguments.length > 5 ? arguments[5] : undefined;
    var sprite = arguments.length > 6 ? arguments[6] : undefined;
    var size = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {
      width: 0,
      height: 0
    };
    var color = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : c;
    var easing = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : e;

    _classCallCheck(this, Parent);

    _this = _super.call(this, pos, radius, world, sprite, size, null, color);

    _defineProperty(_assertThisInitialized(_this), "setIsTutorial", function (val) {
      _this.isTutorial = val;
    });

    _defineProperty(_assertThisInitialized(_this), "setCurrPredCols", function (currPredCols) {
      _this.currPredCols = currPredCols;
    });

    _defineProperty(_assertThisInitialized(_this), "getChildCount", function () {
      return _this.children.size;
    });

    _defineProperty(_assertThisInitialized(_this), "deleteAllChildren", function () {
      while (_this.getChildCount() > 1) {
        _this.deleteLastChild();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "deleteLastChild", function () {
      var curr = _this.children.deleteFromTail();

      if (curr) {
        curr.setChainPos(null);
        curr.setNextChild(null);
        curr.setIndependence(true);

        _this.chain.decrementCount();

        curr.setParent(null);
      }

      return curr;
    });

    _defineProperty(_assertThisInitialized(_this), "destroyChild", function (child) {
      _this.children.deleteNode(child);
    });

    _defineProperty(_assertThisInitialized(_this), "appendChild", function (child) {
      if (!_this.children.search(child)) {
        _this.chain.incrementCount();

        _this.score.calculateScore(_this.getChildCount());

        var tail = _this.children.tail,
            lastChild = tail && tail.val;
        if (lastChild) lastChild.setNextChild(child);

        _this.children.appendToTail(child);

        child.setChainPos(_this.getChildCount());
        child.setParent(_assertThisInitialized(_this));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "checkCollisionWithPredator", function (predator) {
      var collided = _get(_getPrototypeOf(Parent.prototype), "checkInRange", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), predator),
          colliding = _this.currPredCols.includes(predator);
      /* if collided and first contact,
        add predator to the current collisions with predator,
        call collide with predator (decrement chain count)
      */


      if (collided && !colliding) {
        var currPredCols = _this.currPredCols.slice();

        currPredCols.push(predator);

        _this.setCurrPredCols(currPredCols);

        _this.hitsPredator();
      }
      /* if was colliding and stopped colliding, remove predator from current collisions */


      if (!collided && _get(_getPrototypeOf(Parent.prototype), "checkInRange", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), predator, 5) && colliding) {
        var _currPredCols = _this.currPredCols.slice(),
            index = _currPredCols.indexOf(predator);

        _currPredCols.splice(index, 1);

        _this.setCurrPredCols(_currPredCols);
      }
    });

    _this.children = new data_structures__WEBPACK_IMPORTED_MODULE_0__["LinkedList"]();
    _this.chain = chain;
    _this.score = score;
    _this.energy = energy;
    _this.easing = easing;
    _this.currPredCols = [];
    _this.posCache = [];
    _this.sprite = sprite;
    _this.size = size;
    _this.moves = _this.moves.bind(_assertThisInitialized(_this));
    _this.hitsPredator = _this.hitsPredator.bind(_assertThisInitialized(_this));
    _this.hitsChild = _this.hitsChild.bind(_assertThisInitialized(_this));
    _this.clicking = false;
    _this.isTutorial = false;
    return _this;
  }

  _createClass(Parent, [{
    key: "hitsPredator",
    value: function hitsPredator() {
      this.chain.reset();
      this.energy.decrementCount();
      var children = this.children.toArray();

      var _iterator = _createForOfIteratorHelper(children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          child.setParent(null);
          child.setChainPos(null);
          child.setNextChild(null);
          child.setIndependence(true);

          if (!this.isTutorial) {
            var vel = {
              dx: 2,
              dy: 2
            };
            child.setVelocity(vel);
          }

          child.setRandomDir();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.children = new data_structures__WEBPACK_IMPORTED_MODULE_0__["LinkedList"]();
    }
  }, {
    key: "hitsChild",
    value: function hitsChild(obj) {
      this.appendChild(obj);
      obj.setIndependence(false);
    }
  }, {
    key: "hitsWorm",
    value: function hitsWorm(game, worm) {
      this.energy.incrementCount();
      game.destroyWorm(worm);
    }
  }, {
    key: "moves",
    value: function moves(pos) {
      _get(_getPrototypeOf(Parent.prototype), "movesWithCursor", this).call(this, pos, this.easing);

      var firstChild = this.children.head && this.children.head.val;
      if (firstChild) firstChild.moves(this.posCache.length ? this.posCache[0] : pos);
    }
  }]);

  return Parent;
}(_MovingObject__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/Predator.js":
/*!*************************!*\
  !*** ./src/Predator.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Predator; });
/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ "./src/MovingObject.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var r = 10,
    c = '#f67280',
    v = {
  dx: 2.2,
  dy: 2.2
};

var Predator = /*#__PURE__*/function (_MovingObject) {
  _inherits(Predator, _MovingObject);

  var _super = _createSuper(Predator);

  function Predator(pos) {
    var _this;

    var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : r;
    var world = arguments.length > 2 ? arguments[2] : undefined;
    var sprite = arguments.length > 3 ? arguments[3] : undefined;
    var size = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      width: 0,
      height: 0
    };
    var vel = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : v;
    var color = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : c;

    _classCallCheck(this, Predator);

    _this = _super.call(this, pos, radius, world, sprite, size, vel, color);
    _this.sprite = sprite;
    _this.size = size;
    return _this;
  }

  return Predator;
}(_MovingObject__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/Score.js":
/*!**********************!*\
  !*** ./src/Score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Score; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Score = function Score(display) {
  var _this = this;

  _classCallCheck(this, Score);

  _defineProperty(this, "setScore", function (score) {
    _this.score = score;
  });

  _defineProperty(this, "setHighScore", function (score) {
    _this.highScore = score;
  });

  _defineProperty(this, "reset", function () {
    _this.setScore(0);

    _this.updateScore();
  });

  _defineProperty(this, "calculateScore", function (childCount) {
    var chainCount = 1 + childCount; //count parent

    var scoreToAdd = chainCount * chainCount * 10;
    var newScore = _this.score + scoreToAdd;

    _this.setScore(newScore);

    _this.updateScore();
  });

  _defineProperty(this, "calculateHighScore", function () {
    var highScore = Math.max(_this.score, _this.highScore);

    _this.setHighScore(highScore);
  });

  _defineProperty(this, "updateScore", function () {
    _this.display.updateElement('#score', _this.score);
  });

  _defineProperty(this, "init", function () {
    _this.updateScore();
  });

  this.display = display;
  this.score = 0;
  this.highScore = 0;
};



/***/ }),

/***/ "./src/TutorialGame.js":
/*!*****************************!*\
  !*** ./src/TutorialGame.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TutorialGame; });
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/Game.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var TutorialGame = /*#__PURE__*/function (_Game) {
  _inherits(TutorialGame, _Game);

  var _super = _createSuper(TutorialGame);

  function TutorialGame(display, onTutorialEnd) {
    var _this;

    var childCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var predatorCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var wormCount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    _classCallCheck(this, TutorialGame);

    _this = _super.call(this, display, childCount, predatorCount, wormCount);

    _defineProperty(_assertThisInitialized(_this), "destroyChild", function (child) {
      _this.children.deleteNode(child);

      if (_this.children.size < _this.childCount) _this.spawnChildren(17.5);
    });

    _defineProperty(_assertThisInitialized(_this), "handlePressSpace", function () {
      if (_this.tutorialNo === 0) {
        _this.initTutorial1();
      } else if (_this.tutorialNo === 1) {
        _this.initTutorial2();
      } else if (_this.tutorialNo === 2) {
        _this.initTutorial3();
      } else if (_this.tutorialNo === 3) {
        _this.initTutorial4();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePressEnter", function () {
      _this.clearGame();

      _this.onTutorialEnd();
    });

    _defineProperty(_assertThisInitialized(_this), "handlePressKey", function (e) {
      if (e.keyCode === 13) _this.handlePressEnter();
      if (e.keyCode === 32) _this.handlePressSpace();
    });

    _defineProperty(_assertThisInitialized(_this), "checkInRange", function () {
      var parent = _this.parent,
          children = _this.children.toArray(),
          predators = _this.predators.toArray(),
          worms = _this.worms.toArray();

      var _iterator = _createForOfIteratorHelper(children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;

          if (parent.checkInRange(child)) {
            parent.hitsChild(child);
          }

          var _iterator4 = _createForOfIteratorHelper(predators),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var predator = _step4.value;
              if (child.checkInRange(predator, 10)) child.avoidPredator();
              if (child.checkInRange(predator, 0)) child.hitsPredator(_assertThisInitialized(_this));
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(predators),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _predator = _step2.value;
          if (parent.checkInRange(_predator, 5)) parent.checkCollisionWithPredator(_predator);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(worms),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var worm = _step3.value;
          if (parent.checkInRange(worm, 2)) parent.hitsWorm(_assertThisInitialized(_this), worm);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "draw", function (timestamp) {
      if ([2, 3].includes(_this.tutorialNo) && _this.energy.count === 0) {
        return _this.gameOver();
      }

      var canvas = _this.world.canvas,
          ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (_this.tutorialNo >= 0) {
        _this.parent.moves(_this.mouse);

        _this.parent.draw(ctx, {
          x: 30,
          y: 25
        });
      }

      if (_this.tutorialNo >= 1) {
        var children = _this.children.toArray();

        var _iterator5 = _createForOfIteratorHelper(children),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var child = _step5.value;
            if (child.independence) child.moves();
            child.draw(ctx, {
              x: 15,
              y: 15
            });
            _this.clicking ? child.setClicking(true) : child.setClicking(false);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }

      if (_this.tutorialNo >= 2) {
        var predators = _this.predators.toArray();

        var _iterator6 = _createForOfIteratorHelper(predators),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var predator = _step6.value;
            predator.moves();
            predator.draw(ctx, {
              x: 30,
              y: 25
            });
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }

      if (_this.tutorialNo >= 4) {
        var timePassed = timestamp - _this.timeSinceWorm;

        if (timePassed >= 5) {
          while (_this.worms.size < _this.wormCount) {
            _this.spawnWorms(20, {
              dx: 0.5,
              dy: 0.5
            });
          }

          _this.timeSinceWorm = timestamp;
        }

        var worms = _this.worms.toArray();

        var _iterator7 = _createForOfIteratorHelper(worms),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var worm = _step7.value;
            worm.moves(_assertThisInitialized(_this));
            worm.draw(ctx, {
              x: 0,
              y: 0
            });
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }

      _this.checkInRange();

      _this.animationReq = window.requestAnimationFrame(_this.draw);
    });

    _defineProperty(_assertThisInitialized(_this), "setTutorialNo", function (number) {
      _this.tutorialNo = number;
    });

    _defineProperty(_assertThisInitialized(_this), "initTutorial", function () {
      _this.initTutorial0();
    });

    _defineProperty(_assertThisInitialized(_this), "initTutorial0", function () {
      _this.setTutorialNo(0);

      _this.initWorld();

      _this.display.renderMoveParentTut();

      _this.initParent(30);

      _this.parent.setIsTutorial(true);

      window.addEventListener('mousemove', _this.handleMouseMove, false);
      window.addEventListener('keydown', _this.handlePressKey);
      _this.animationReq = window.requestAnimationFrame(_this.draw);
    });

    _defineProperty(_assertThisInitialized(_this), "initTutorial1", function () {
      _this.setTutorialNo(1);

      _this.display.renderChildrenTut();

      _this.display.renderScore();

      _this.display.renderChain();

      _this.initChain();

      _this.parent.chain = _this.chain;

      _this.initScore();

      _this.parent.score = _this.score;
      _this.childCount = 5;

      _this.initChildren(17.5);
    });

    _defineProperty(_assertThisInitialized(_this), "initTutorial2", function () {
      _this.setTutorialNo(2);

      _this.score.reset();

      _this.parent.setIsTutorial(true);

      _this.parent.deleteAllChildren();

      var _iterator8 = _createForOfIteratorHelper(_this.children.toArray()),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var child = _step8.value;
          child.setPos(child.getRandomPos());
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      _this.display.renderEnergy();

      _this.initEnergy(3, 3);

      _this.parent.energy = _this.energy;
      _this.predatorCount = 1;

      _this.initPredators(35);

      var pred = _this.predators.toArray()[0];

      pred.setPos({
        x: 35,
        y: 35
      });
      pred.setCurrDir([0.23, -pred.vel.dy]);

      _this.display.renderPredatorTut();
    });

    _defineProperty(_assertThisInitialized(_this), "initTutorial3", function () {
      _this.setTutorialNo(3);

      _this.replayGame();

      _this.parent.setIsTutorial(true);

      var children = _this.children.toArray();

      var _iterator9 = _createForOfIteratorHelper(children),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var child = _step9.value;

          _this.parent.hitsChild(child);

          child.moves(_this.parent.pos);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      var pred = _this.predators.toArray()[0];

      window.addEventListener('mouseup', _this.handleMouseUp, false);
      window.addEventListener('mousedown', _this.handleMouseDown, false);
      pred.setPos({
        x: 35,
        y: 35
      });
      pred.setCurrDir([0.23, -1]);

      _this.display.renderClickParentTut();
    });

    _defineProperty(_assertThisInitialized(_this), "initTutorial4", function () {
      _this.setTutorialNo(4);

      _this.energy.max = 5;

      _this.replayGame();

      _this.parent.deleteAllChildren();

      var _iterator10 = _createForOfIteratorHelper(_this.children.toArray()),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var child = _step10.value;
          child.setPos(child.getRandomPos());
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      var pred = _this.predators.toArray()[0];

      pred.setPos({
        x: 35,
        y: 35
      });
      pred.setCurrDir([0.23, -1]);
      _this.wormCount = 5;

      _this.initWorms(20, {
        dx: 0.5,
        dy: 0.5
      });

      _this.childCount = 0;

      _this.parent.hitsPredator();

      var _iterator11 = _createForOfIteratorHelper(_this.children.toArray()),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _child = _step11.value;

          _this.destroyChild(_child);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      _this.display.renderWormTut();
    });

    _this.tutorialNo = 0;
    _this.onTutorialEnd = onTutorialEnd;
    _this.clearGame = _this.clearGame.bind(_assertThisInitialized(_this));
    _this.replayGame = _this.replayGame.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TutorialGame, [{
    key: "clearGame",
    value: function clearGame() {
      _get(_getPrototypeOf(TutorialGame.prototype), "clearGame", this).call(this);

      this.clearCanvas();
      this.display.clearTutorial();
      window.removeEventListener('keydown', this.handlePressKey);
    }
  }, {
    key: "replayGame",
    value: function replayGame() {
      _get(_getPrototypeOf(TutorialGame.prototype), "replayGame", this).call(this);

      this.parent.setIsTutorial(true);
    }
  }]);

  return TutorialGame;
}(_Game__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/World.js":
/*!**********************!*\
  !*** ./src/World.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return World; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var World = /*#__PURE__*/function () {
  function World(display) {
    var _this = this;

    _classCallCheck(this, World);

    _defineProperty(this, "checkOutOfBounds", function (pos, r) {
      var _this$bounds = _this.bounds,
          top = _this$bounds.top,
          right = _this$bounds.right,
          bottom = _this$bounds.bottom,
          left = _this$bounds.left,
          x = pos.x,
          y = pos.y;
      if (x - r < left) return true;
      if (x + r > right) return true;
      if (y - r < top) return true;
      if (y + r > bottom) return true;
      return false;
    });

    _defineProperty(this, "getRandomPos", function (radius) {
      var _this$bounds2 = _this.bounds,
          top = _this$bounds2.top,
          right = _this$bounds2.right,
          bottom = _this$bounds2.bottom,
          left = _this$bounds2.left,
          r = radius;
      var x = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(left + r, right - r),
          y = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(top + r, bottom - r);
      return {
        x: x,
        y: y
      };
    });

    this.display = display;
    this.canvas = display.getElement('#world');
    this.size = this.display.worldSize;
    this.bounds = _defineProperty({
      top: null,
      right: null,
      bottom: null
    }, "right", null);
    this.offsets = {
      top: null,
      left: null
    };
  }

  _createClass(World, [{
    key: "setBounds",
    value: function setBounds(bounds) {
      this.bounds = bounds;
    }
  }, {
    key: "setOffsets",
    value: function setOffsets(offsets) {
      this.offsets = offsets;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var top = 0,
          left = 0,
          bottom = top + this.canvas.height,
          right = left + this.canvas.width;
      return {
        top: top,
        right: right,
        bottom: bottom,
        left: left
      };
    }
  }, {
    key: "getOffsets",
    value: function getOffsets() {
      var top = this.canvas.offsetTop,
          left = this.canvas.offsetLeft;
      return {
        top: top,
        left: left
      };
    }
  }, {
    key: "init",
    value: function init() {
      var offsets = this.getOffsets(),
          bounds = this.getBounds();
      this.setOffsets(offsets);
      this.setBounds(bounds);
    }
  }]);

  return World;
}();



/***/ }),

/***/ "./src/Worm.js":
/*!*********************!*\
  !*** ./src/Worm.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Worm; });
/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ "./src/MovingObject.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var r = 10,
    c = '#936344',
    v = {
  dx: 2,
  dy: 2
};

var Worm = /*#__PURE__*/function (_MovingObject) {
  _inherits(Worm, _MovingObject);

  var _super = _createSuper(Worm);

  function Worm(pos) {
    var _this;

    var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : r;
    var world = arguments.length > 2 ? arguments[2] : undefined;
    var sprite = arguments.length > 3 ? arguments[3] : undefined;
    var size = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      width: 0,
      height: 0
    };
    var vel = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : v;
    var color = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : c;

    _classCallCheck(this, Worm);

    _this = _super.call(this, pos, radius, world, sprite, size, vel, color);
    _this.sprite = sprite;
    _this.size = size;
    _this.moves = _this.moves.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Worm, [{
    key: "moves",
    value: function moves(game) {
      var _this$pos = this.pos,
          x = _this$pos.x,
          y = _this$pos.y,
          pos = {
        x: x + this.currDir[0],
        y: y + this.currDir[1]
      };

      if (this.checkOutOfBounds(pos)) {
        game.destroyWorm(this);
      }

      this.setPos(pos);
    }
  }]);

  return Worm;
}(_MovingObject__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/imgs/child.png":
/*!****************************!*\
  !*** ./src/imgs/child.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9c895d371074cfe2d0312577fc7635d3.png");

/***/ }),

/***/ "./src/imgs/count.png":
/*!****************************!*\
  !*** ./src/imgs/count.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "916bf9164b72328243f57e39b3462e33.png");

/***/ }),

/***/ "./src/imgs/logo.png":
/*!***************************!*\
  !*** ./src/imgs/logo.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6f2f19d77b99e008b32eff911fc1f07e.png");

/***/ }),

/***/ "./src/imgs/parent.png":
/*!*****************************!*\
  !*** ./src/imgs/parent.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "03dc33ade4ead5b87a659abce3239683.png");

/***/ }),

/***/ "./src/imgs/predator.png":
/*!*******************************!*\
  !*** ./src/imgs/predator.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f9e63cdb516fadd25e68855ce95db477.png");

/***/ }),

/***/ "./src/imgs/worm-left.png":
/*!********************************!*\
  !*** ./src/imgs/worm-left.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "91cf08e9cfcfb313454607a9d8cf8319.png");

/***/ }),

/***/ "./src/imgs/worm-right.png":
/*!*********************************!*\
  !*** ./src/imgs/worm-right.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1d963c464a42f1e35e9a903e171f10e8.png");

/***/ }),

/***/ "./src/imgs/worm.png":
/*!***************************!*\
  !*** ./src/imgs/worm.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2e6d88742295d0ea95cf13fd9a38827f.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Display_DOMDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Display/DOMDisplay.js */ "./src/Display/DOMDisplay.js");
/* harmony import */ var _Display_Intro_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display/Intro.js */ "./src/Display/Intro.js");
/* harmony import */ var _Display_Tutorial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Display/Tutorial.js */ "./src/Display/Tutorial.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game */ "./src/Game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TutorialGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TutorialGame */ "./src/TutorialGame.js");






var width = Math.min(window.innerWidth / 1.2, 1200),
    height = Math.min(window.innerHeight / 1.2, 750),
    display = new _Display_DOMDisplay_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  width: width,
  height: height
}),
    game = new _Game__WEBPACK_IMPORTED_MODULE_3__["default"](display);
display.renderGame();
display.renderTitle();
display.renderWorld();
var introDisplay = new _Display_Intro_js__WEBPACK_IMPORTED_MODULE_1__["default"](display.worldSize);
var tutorialDisplay = new _Display_Tutorial_js__WEBPACK_IMPORTED_MODULE_2__["default"](display.worldSize);

function onTutorialEnd() {
  game.init();
}

function handleClickTutorial() {
  var tutorialGame = new _TutorialGame__WEBPACK_IMPORTED_MODULE_5__["default"](tutorialDisplay, onTutorialEnd);
  introDisplay.clearIntro();
  tutorialGame.initTutorial();
}

function handleClickStart() {
  introDisplay.clearIntro();
  game.init();
}

introDisplay.renderIntro();
introDisplay.renderTutorialButton(handleClickTutorial);
introDisplay.renderStartLink(handleClickStart);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInt, inRange, getRandomBetween */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inRange", function() { return inRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBetween", function() { return getRandomBetween; });
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max); // inclusive

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function inRange(num, min, max) {
  return num >= min && num <= max;
} // Didn't use


function calculateHypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
} // Didn't use


function easeLinear(t, b, c, d) {
  return c * t / d + b;
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRhX3N0cnVjdHVyZXMvZGlzdC9EYXRhU3RydWN0dXJlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9DaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlzcGxheS9ET01EaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9EaXNwbGF5L0ludHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9EaXNwbGF5L1R1dG9yaWFsLmpzIiwid2VicGFjazovLy8uL3NyYy9FbmVyZ3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vdmluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFyZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9QcmVkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1R1dG9yaWFsR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ3MvY2hpbGQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWdzL2NvdW50LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy9wYXJlbnQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWdzL3ByZWRhdG9yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy93b3JtLWxlZnQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWdzL3dvcm0tcmlnaHQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWdzL3dvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkNoYWluIiwiZGlzcGxheSIsImNvdW50Iiwic2V0Q291bnQiLCJ1cGRhdGVDaGFpbiIsIk1hdGgiLCJtYXgiLCJtaW4iLCJ1cGRhdGVFbGVtZW50IiwiciIsImMiLCJ2IiwiZHgiLCJkeSIsIkNoaWxkIiwicG9zIiwicmFkaXVzIiwid29ybGQiLCJzcHJpdGUiLCJzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ2ZWwiLCJjb2xvciIsImNsaWNraW5nIiwicGFyZW50IiwiY2hhaW5Qb3MiLCJjaGlsZCIsIm5leHRDaGlsZCIsImluZGVwZW5kZW5jZSIsIngiLCJ5IiwiY3VyckRpciIsInNldFJhbmRvbURpciIsImJvdW5jZUJhY2siLCJwb3NDYWNoZSIsIm1vdmVzIiwiYmluZCIsImhpdHNQcmVkYXRvciIsImdhbWUiLCJpc0luZGVwZW5kZW50IiwiZGVzdHJveUNoaWxkIiwiY3VyciIsImRlbGV0ZUxhc3RDaGlsZCIsImVhc2luZyIsIm9mZnNldCIsImxlbmd0aCIsIk1vdmluZ09iamVjdCIsIkRPTURpc3BsYXkiLCJzcmMiLCJjbGFzc05hbWUiLCJpZCIsImltZyIsIkltYWdlIiwiY2xhc3NMaXN0IiwiYWRkIiwid29ybUNsYXNzIiwid29ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJlbW92ZSIsInRhZyIsImNvbnRlbnQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsIm5hbWUiLCJpbm5lclRleHQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWwiLCJlbGVtIiwiZ2V0RWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiaGVhZGluZyIsImFwcGVuZCIsIndvcmxkV3JhcHBlciIsIndvcmxkU2l6ZSIsInN0eWxlIiwibGVnZW5kIiwiaGFuZGxlQ2xpY2tSZXBsYXkiLCJzY29yZSIsImhpZ2hTY29yZSIsImdhbWVFbmRXcmFwcGVyIiwiZ2FtZUVuZCIsInRvcCIsInJlbmRlckdhbWVPdmVyTWVzc2FnZSIsInJlbmRlckVuZFNjb3JlIiwicmVuZGVyUmVwbGF5QnV0dG9uIiwicmVtb3ZlQ2hpbGQiLCJtZXNzYWdlIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVuZFNjb3JlV3JhcHBlciIsImVuZFNjb3JlTGFiZWwiLCJlbmRTY29yZSIsInRvU3RyaW5nIiwiYmVzdFNjb3JlV3JhcHBlciIsImJlc3RTY29yZUxhYmVsIiwiYmVzdFNjb3JlIiwicmVuZGVyQ2hhaW4iLCJyZW5kZXJFbmVyZ3kiLCJyZW5kZXJTY29yZSIsImVuZXJneVdyYXBwZXIiLCJ1cGRhdGVFbmVyZ3lCYXIiLCJjaGFpbldyYXBwZXIiLCJjb3VudEltZyIsImNyZWF0ZUltYWdlIiwiY2hpbGRDb3VudEltZyIsImNoYWluIiwiZVciLCJpIiwiY2hpbGRFbGVtZW50Q291bnQiLCJsYXN0Q2hpbGQiLCJsZWZ0Iiwid29ybUNvdW50Iiwid29ybVJpZ2h0Iiwid29ybUwiLCJ3b3JtTGVmdCIsIndvcm1SIiwiSW50cm8iLCJoYW5kbGVDbGlja1R1dG9yaWFsIiwiaW50cm9XcmFwcGVyIiwiaGFuZGxlQ2xpY2tTdGFydCIsImxpbmsiLCJpbnRyb1BpYyIsImxvZ28iLCJpbnRybyIsImludHJvTWVzc2FnZSIsIlR1dG9yaWFsIiwic2V0dGltZW91dCIsImNsZWFyVGltZW91dCIsInBvcCIsImNsZWFyRWxlbWVudCIsInRpbWUiLCJwdXNoIiwic2V0VGltZW91dCIsInR1dG9yaWFsV3JhcHBlciIsIm1lc3NhZ2UxIiwibWVzc2FnZTIiLCJjaGFuZ2VNZXNzYWdlIiwicmVuZGVyTGVnZW5kIiwiY2xlYXJQcmV2VHV0IiwiRW5lcmd5IiwiZW5lcmd5IiwidXBkYXRlRW5lcmd5IiwiQ2hpbGRTcHJpdGUiLCJjaGlsZEltZyIsIlBhcmVudFNwcml0ZSIsInBhcmVudEltYWdlIiwiUHJlZGF0b3JTcHJpdGUiLCJwcmVkYXRvckltYWdlIiwiV29ybVNwcml0ZSIsIndvcm1JbWFnZSIsIkdhbWUiLCJjaGlsZENvdW50IiwicHJlZGF0b3JDb3VudCIsImUiLCJtb3VzZSIsImNsaWVudFgiLCJjbGllbnRZIiwicmVtb3ZlQW5pbWF0aW9uIiwiYW5pbWF0ZSIsImdldENoaWxkQ291bnQiLCJkZWNyZW1lbnRDb3VudEJ5SGFsZiIsIndvcm1zIiwiZGVsZXRlTm9kZSIsImNoaWxkcmVuIiwic3Bhd25DaGlsZHJlbiIsInRvQXJyYXkiLCJwcmVkYXRvcnMiLCJjaGVja0luUmFuZ2UiLCJoaXRzQ2hpbGQiLCJwcmVkYXRvciIsImF2b2lkUHJlZGF0b3IiLCJjaGVja0NvbGxpc2lvbldpdGhQcmVkYXRvciIsImhpdHNXb3JtIiwiaW5kZXBlbmRlbnRDIiwicmFuZG9tUG9zIiwiZ2V0UmFuZG9tUG9zIiwiYXBwZW5kVG9UYWlsIiwiUHJlZGF0b3IiLCJXb3JtIiwic3Bhd25QcmVkYXRvcnMiLCJpbml0aWFsUG9zIiwiUGFyZW50Iiwic3Bhd25Xb3JtcyIsImluaXQiLCJXb3JsZCIsIlNjb3JlIiwiaW5pdENvdW50IiwicmVzZXQiLCJMaW5rZWRMaXN0IiwidGltZVNpbmNlV29ybSIsImluaXRXb3JsZCIsImluaXRDaGFpbiIsImluaXRQYXJlbnQiLCJpbml0Q2hpbGRyZW4iLCJpbml0UHJlZGF0b3JzIiwiaW5pdFdvcm1zIiwiYW5pbWF0aW9uUmVxIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNhbGN1bGF0ZUhpZ2hTY29yZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyR2FtZUVuZCIsInJlcGxheUdhbWUiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwidGltZXN0YW1wIiwiZ2FtZU92ZXIiLCJ0aW1lUGFzc2VkIiwiY2xlYXJDYW52YXMiLCJzZXRDbGlja2luZyIsImNsZWFyR2FtZSIsInJlc2V0R2FtZSIsImNsZWFyR2FtZUVuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVNb3VzZVVwIiwiaW5pdEVuZXJneSIsImluaXRTY29yZSIsInZlbG9jaXR5IiwiZGlyIiwiaW5kZXgiLCJnZXRSYW5kb21JbnQiLCJwb3NzaWJsZURpcmVjdGlvbnMiLCJzZXRDdXJyRGlyIiwiY2hlY2tPdXRPZkJvdW5kcyIsImJvdW5kcyIsInJpZ2h0IiwiYm90dG9tIiwiY29uc3RydWN0b3IiLCJzZXRWZWxvY2l0eSIsIm5Qb3MiLCJkcmF3SW1hZ2UiLCJjbGlwcGVkWCIsImNsaXBwZWRZIiwibW92ZXNXaXRoQ3Vyc29yIiwiaGl0c1BhcmVudCIsIm9iaiIsImN1c2hpb24iLCJvUG9zIiwib1IiLCJyYW5nZVgiLCJyYW5nZVkiLCJ3aXRoaW5SYW5nZSIsImluUmFuZ2UiLCJvZmZzZXRzIiwib2Zmc2V0TCIsIm9mZnNldFQiLCJyZWxhdGl2ZVgiLCJyZWxhdGl2ZVkiLCJ4RGlmZiIsInlEaWZmIiwidmVsWCIsInZlbFkiLCJjbGlwcGVkUG9zIiwiY2xpcFBvcyIsInNldFBvcyIsInNoaWZ0Iiwic2V0UG9zQ2FjaGUiLCJpc1R1dG9yaWFsIiwiY3VyclByZWRDb2xzIiwiZGVsZXRlRnJvbVRhaWwiLCJzZXRDaGFpblBvcyIsInNldE5leHRDaGlsZCIsInNldEluZGVwZW5kZW5jZSIsImRlY3JlbWVudENvdW50Iiwic2V0UGFyZW50Iiwic2VhcmNoIiwiaW5jcmVtZW50Q291bnQiLCJjYWxjdWxhdGVTY29yZSIsInRhaWwiLCJjb2xsaWRlZCIsImNvbGxpZGluZyIsImluY2x1ZGVzIiwic2xpY2UiLCJzZXRDdXJyUHJlZENvbHMiLCJpbmRleE9mIiwic3BsaWNlIiwiZGVzdHJveVdvcm0iLCJmaXJzdENoaWxkIiwiaGVhZCIsInNldFNjb3JlIiwidXBkYXRlU2NvcmUiLCJjaGFpbkNvdW50Iiwic2NvcmVUb0FkZCIsIm5ld1Njb3JlIiwic2V0SGlnaFNjb3JlIiwiVHV0b3JpYWxHYW1lIiwib25UdXRvcmlhbEVuZCIsInR1dG9yaWFsTm8iLCJpbml0VHV0b3JpYWwxIiwiaW5pdFR1dG9yaWFsMiIsImluaXRUdXRvcmlhbDMiLCJpbml0VHV0b3JpYWw0Iiwia2V5Q29kZSIsImhhbmRsZVByZXNzRW50ZXIiLCJoYW5kbGVQcmVzc1NwYWNlIiwibnVtYmVyIiwiaW5pdFR1dG9yaWFsMCIsInNldFR1dG9yaWFsTm8iLCJyZW5kZXJNb3ZlUGFyZW50VHV0Iiwic2V0SXNUdXRvcmlhbCIsImhhbmRsZVByZXNzS2V5IiwicmVuZGVyQ2hpbGRyZW5UdXQiLCJkZWxldGVBbGxDaGlsZHJlbiIsInByZWQiLCJyZW5kZXJQcmVkYXRvclR1dCIsInJlbmRlckNsaWNrUGFyZW50VHV0IiwicmVuZGVyV29ybVR1dCIsImNsZWFyVHV0b3JpYWwiLCJnZXRSYW5kb21CZXR3ZWVuIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsImdldE9mZnNldHMiLCJnZXRCb3VuZHMiLCJzZXRPZmZzZXRzIiwic2V0Qm91bmRzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVuZGVyR2FtZSIsInJlbmRlclRpdGxlIiwicmVuZGVyV29ybGQiLCJpbnRyb0Rpc3BsYXkiLCJ0dXRvcmlhbERpc3BsYXkiLCJ0dXRvcmlhbEdhbWUiLCJjbGVhckludHJvIiwiaW5pdFR1dG9yaWFsIiwicmVuZGVySW50cm8iLCJyZW5kZXJUdXRvcmlhbEJ1dHRvbiIsInJlbmRlclN0YXJ0TGluayIsImZsb29yIiwicmFuZG9tIiwiY2VpbCIsIm51bSIsImNhbGN1bGF0ZUh5cG90ZW51c2UiLCJhIiwiYiIsInNxcnQiLCJwb3ciLCJlYXNlTGluZWFyIiwidCIsImQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztR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LENBQTFCLEVBQTZCcVYsQ0FBN0IsRUFBZ0M7QUFDOUIsU0FBUXJWLENBQUMsR0FBR29WLENBQUwsR0FBVUMsQ0FBVixHQUFjTCxDQUFyQjtBQUNEIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TY2hvb2xiZWxsJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogJ1NjaG9vbGJlbGwnLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG59XFxuXFxuYnV0dG9uLmJ0biB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luOiA1cHggYXV0bztcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZ2FtZSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnRpdGxlIGgxIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG1hcmdpbjogMzJweDtcXG59XFxuXFxuLndvcmxkLXdyYXBwZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5sZWdlbmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA5OHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmxlZ2VuZCA+IGRpdiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmxlZ2VuZC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG5kaXYuY2hhaW4td3JhcHBlciB7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLmNoYWluLXdyYXBwZXIgLmltYWdlI2NoYWluLWNvdW50IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5jaGFpbi13cmFwcGVyIC5jaGFpbiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI3dvcmxkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMjU1LCAxOTQpO1xcbn1cXG5cXG4ud29ybS1sZWZ0IHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4ud29ybS1yaWdodCB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmFuaW1hdGUge1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBlYXNlO1xcbn1cXG5cXG4uZW5kLXdyYXBwZXIsXFxuLmludHJvLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5pbnRyby13cmFwcGVyIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW50cm8ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbnRyby1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXJnaW46IDE2cHggYXV0bztcXG59XFxuXFxuLnN0YXJ0OmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZWQ7XFxufVxcblxcbi5nYW1lLWVuZCB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDMwcHggODBweDtcXG59XFxuXFxuLmdhbWUtZW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmdhbWUtZW5kIGRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5nYW1lLWVuZCA+IC53cmFwcGVyID4gLnNjb3JlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cXG4udHV0b3JpYWwtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDk4cHg7XFxufVxcblxcbi50dXRvcmlhbC1tZXNzYWdlIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbiN0dXQtbXNnLTEge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRGF0YVN0cnVjdHVyZXNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRGF0YVN0cnVjdHVyZXNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL3NyYy9CaW5hcnlIZWFwL01heEJpbmFyeUhlYXAuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0JpbmFyeUhlYXAvTWF4QmluYXJ5SGVhcC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcXFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XFxuXFxudmFyIE1heEJpbmFyeUhlYXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgZnVuY3Rpb24gTWF4QmluYXJ5SGVhcCgpIHtcXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1heEJpbmFyeUhlYXApO1xcblxcbiAgICBfY29udGVudC5zZXQodGhpcywge1xcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgfSk7XFxuXFxuICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfY29udGVudCwgW10pO1xcbiAgfVxcblxcbiAgX2NyZWF0ZUNsYXNzKE1heEJpbmFyeUhlYXAsIFt7XFxuICAgIGtleTogXFxcIl9zd2FwXFxcIixcXG4gICAgLy8gX21ldGhvZHMgYXJlIGhlbHBlcnMuIENoYW5nZSB0byBwcml2YXRlIHdoZW4gcHJpdmF0ZSBpbnN0YW5jZSBtZXRob2RzIGFyZSBzdXBwb3J0ZWRcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zd2FwKGksIGopIHtcXG4gICAgICB2YXIgdGVtcCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV07XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXSA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbal07XFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtqXSA9IHRlbXA7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiX2J1YmJsZVVwXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9idWJibGVVcChpKSB7XFxuICAgICAgdmFyIGVsZW1lbnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldO1xcblxcbiAgICAgIHdoaWxlIChpID4gMCkge1xcbiAgICAgICAgdmFyIHAgPSBNYXRoLmZsb29yKChpIC0gMSkgLyAyKSxcXG4gICAgICAgICAgICBwYXJlbnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW3BdO1xcblxcbiAgICAgICAgaWYgKGVsZW1lbnQgPiBwYXJlbnQpIHtcXG4gICAgICAgICAgdGhpcy5fc3dhcChwLCBpKTtcXG5cXG4gICAgICAgICAgaSA9IHA7XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICBicmVhaztcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiX3NpbmtEb3duXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zaW5rRG93bihwKSB7XFxuICAgICAgdmFyIGVsZW1lbnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW3BdLFxcbiAgICAgICAgICBsYXN0SW5kZXggPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCAtIDE7XFxuXFxuICAgICAgd2hpbGUgKHAgPCBsYXN0SW5kZXgpIHtcXG4gICAgICAgIHZhciByID0gMiAqIHAgKyAyLFxcbiAgICAgICAgICAgIGwgPSByIC0gMTtcXG4gICAgICAgIHZhciBzd2FwSW5kZXggPSBudWxsLFxcbiAgICAgICAgICAgIGxlZnQgPSB2b2lkIDAsXFxuICAgICAgICAgICAgcmlnaHQgPSB2b2lkIDAsXFxuICAgICAgICAgICAgbWluID0gZWxlbWVudDtcXG5cXG4gICAgICAgIGlmIChsIDw9IGxhc3RJbmRleCkge1xcbiAgICAgICAgICBsZWZ0ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtsXTtcXG4gICAgICAgICAgaWYgKGxlZnQgPiBlbGVtZW50KSBzd2FwSW5kZXggPSBsO1xcbiAgICAgICAgICBtaW4gPSBsZWZ0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaWYgKHIgPD0gbGFzdEluZGV4KSB7XFxuICAgICAgICAgIHJpZ2h0ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtyXTtcXG4gICAgICAgICAgaWYgKHJpZ2h0ID4gbWluKSBzd2FwSW5kZXggPSByO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaWYgKHN3YXBJbmRleCA9PSBudWxsKSBicmVhaztcXG5cXG4gICAgICAgIHRoaXMuX3N3YXAocCwgc3dhcEluZGV4KTtcXG5cXG4gICAgICAgIHAgPSBzd2FwSW5kZXg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInByaW50TWF4SGVhcFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludE1heEhlYXAoKSB7XFxuICAgICAgY29uc29sZS5sb2coX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KSk7XFxuICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiaW5zZXJ0XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydChlbGVtZW50KSB7XFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wdXNoKGVsZW1lbnQpO1xcblxcbiAgICAgIHRoaXMuX2J1YmJsZVVwKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIC0gMSk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiZXh0cmFjdE1heFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0TWF4KCkge1xcbiAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCA8PSAwKSByZXR1cm4gbnVsbDtcXG4gICAgICB2YXIgbGFzdEluZGV4ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxLFxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMDtcXG4gICAgICBpZiAoZmlyc3RJbmRleCAhPT0gbGFzdEluZGV4KSB0aGlzLl9zd2FwKGZpcnN0SW5kZXgsIGxhc3RJbmRleCk7XFxuXFxuICAgICAgdmFyIHJlc3VsdCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucG9wKCk7XFxuXFxuICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoID4gMCkge1xcbiAgICAgICAgdGhpcy5fc2lua0Rvd24oMCk7XFxuICAgICAgfVxcblxcbiAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwicmVtb3ZlXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50KSB7XFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xcbiAgICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV0gIT09IGVsZW1lbnQpIGNvbnRpbnVlO1xcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHRoaXMuc2l6ZSAtIDE7XFxuXFxuICAgICAgICBpZiAoaSA9PT0gbGFzdEluZGV4KSB7XFxuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucG9wKCk7XFxuXFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGhpcy5fc3dhcChpLCBsYXN0SW5kZXgpO1xcblxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wb3AoKTtcXG5cXG4gICAgICAgIHRoaXMuX2J1YmJsZVVwKGkpO1xcblxcbiAgICAgICAgdGhpcy5fc2lua0Rvd24oaSk7XFxuXFxuICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwic2l6ZVxcXCIsXFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aDtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJtYXhcXFwiLFxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICByZXR1cm4gdGhpcy5zaXplID8gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVswXSA6IG51bGw7XFxuICAgIH1cXG4gIH1dKTtcXG5cXG4gIHJldHVybiBNYXhCaW5hcnlIZWFwO1xcbn0oKTtcXG5cXG52YXIgX2NvbnRlbnQgPSBuZXcgV2Vha01hcCgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gTWF4QmluYXJ5SGVhcDtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9CaW5hcnlIZWFwL01heEJpbmFyeUhlYXAuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9CaW5hcnlIZWFwL01pbkJpbmFyeUhlYXAuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0JpbmFyeUhlYXAvTWluQmluYXJ5SGVhcC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcXFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XFxuXFxuLy8gaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1XQ20zVHFTY0JNOFxcbi8vIEFueSBub2RlIGhhcyBhIHZhbHVlIGF0IGxlYXN0IGFzIHNtYWxsIGFzIHRoZSB2YWx1ZXMgaW4gdGhhdCBub2RlJ3MgY2hpbGRyZW4uXFxuLy8gU291cmNlOiBodHRwczovL2Vsb3F1ZW50amF2YXNjcmlwdC5uZXQvMXN0X2VkaXRpb24vYXBwZW5kaXgyLmh0bWxcXG52YXIgTWluQmluYXJ5SGVhcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICBmdW5jdGlvbiBNaW5CaW5hcnlIZWFwKCkge1xcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWluQmluYXJ5SGVhcCk7XFxuXFxuICAgIF9jb250ZW50LnNldCh0aGlzLCB7XFxuICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICB9KTtcXG5cXG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9jb250ZW50LCBbXSk7XFxuICB9XFxuXFxuICBfY3JlYXRlQ2xhc3MoTWluQmluYXJ5SGVhcCwgW3tcXG4gICAga2V5OiBcXFwiX3N3YXBcXFwiLFxcbiAgICAvLyBfbWV0aG9kcyBhcmUgaGVscGVycy4gQ2hhbmdlIHRvIHByaXZhdGUgd2hlbiBwcml2YXRlIGluc3RhbmNlIG1ldGhvZHMgYXJlIHN1cHBvcnRlZFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3N3YXAoaSwgaikge1xcbiAgICAgIHZhciB0ZW1wID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtqXTtcXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2pdID0gdGVtcDtcXG4gICAgfVxcbiAgICAvKiBidWJibGVVcCBcXG4gICAgICAxLiBDb21wYXJlIGl0ZW0gdG8gcGFyZW50IGFuZCBjaGVjayBpZiBpdCdzIGxlc3MgdGhhbiBwYXJlbnQuIFxcbiAgICAgIDIuIElmIGl0IGlzIGxlc3MgdGhhbiBwYXJlbnQsIHN3YXAgaXQuIFxcbiAgICAgIDMuIE5vdywgY29tcGFyZSB0byB0aGUgbmV3IHBhcmVudCBhbmQga2VlcCBzd2FwcGluZyB1bnRpbCBpdCBlaXRoZXIgcmVhY2hlcyB0aGUgdG9wIG9mIHRoZSBoZWFwIG9yIGl0IGlzID49IHBhcmVudC4gXFxuICAgICovXFxuXFxuICB9LCB7XFxuICAgIGtleTogXFxcIl9idWJibGVVcFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYnViYmxlVXAoaSkge1xcbiAgICAgIHZhciBlbGVtZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXTtcXG4gICAgICAvKiBcXG4gICAgICAgIGluZGV4aW5nIGZyb20gMFxcbiAgICAgICAgcCBpcyB0aGUgaW5kZXggb2YgdGhlIHBhcmVudFxcbiAgICAgICAgaSBpcyB0aGUgaW5kZXggb2YgZWl0aGVyIGxlZnQgb3IgcmlnaHQgY2hpbGRcXG4gICAgICAgIGwgaXMgaW5kZXggb2YgbGVmdCBjaGlsZFxcbiAgICAgICAgciBpcyB0aGUgaW5kZXggb2YgdGhlIHJpZ2h0IGNoaWxkXFxuICAgICAgICAgbCA9IDJwICsgMVxcbiAgICAgICAgciA9IDJwICsgMlxcbiAgICAgICAgcCA9IE1hdGguZmxvb3IoKGktMSkvMilcXG4gICAgICAgKi9cXG5cXG5cXG4gICAgICB3aGlsZSAoaSA+IDApIHtcXG4gICAgICAgIHZhciBwID0gTWF0aC5mbG9vcigoaSAtIDEpIC8gMiksXFxuICAgICAgICAgICAgcGFyZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtwXTtcXG5cXG4gICAgICAgIGlmIChlbGVtZW50IDwgcGFyZW50KSB7XFxuICAgICAgICAgIHRoaXMuX3N3YXAocCwgaSk7IC8vIG1ha2Ugc3VyZSB0byBjaGFuZ2UgaW5kZXggdG8gdGhhdCBvZiBwYXJlbnQgYWZ0ZXIgc3dhcHBpbmdcXG5cXG5cXG4gICAgICAgICAgaSA9IHA7XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICBicmVhaztcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiX3NpbmtEb3duXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zaW5rRG93bihwKSB7XFxuICAgICAgdmFyIGVsZW1lbnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW3BdLFxcbiAgICAgICAgICBsYXN0SW5kZXggPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCAtIDE7XFxuXFxuICAgICAgd2hpbGUgKHAgPCBsYXN0SW5kZXgpIHtcXG4gICAgICAgIC8vIEluZm8gaW4gZ2V0dGluZyBpbmRleCBpbiBidWJibGVVcFxcbiAgICAgICAgdmFyIHIgPSAyICogcCArIDIsXFxuICAgICAgICAgICAgbCA9IHIgLSAxOyAvL09yIDIgKiBwICsgMVxcblxcbiAgICAgICAgdmFyIHN3YXBJbmRleCA9IG51bGwsXFxuICAgICAgICAgICAgbGVmdCA9IHZvaWQgMCxcXG4gICAgICAgICAgICByaWdodCA9IHZvaWQgMCxcXG4gICAgICAgICAgICBtaW4gPSBlbGVtZW50OyAvL3N0YXJ0IG91dCBhc3N1bWluZyB0aGUgbWluIGJldHdlZW4gbGVmdCwgcmlnaHQsIGVsZW1lbnQgaXMgdGhlIGVsZW1lbnRcXG4gICAgICAgIC8vIGlmIGVsZW1lbnQgaGFzIGxlZnQgY2hpbGQsIGNvbXBhcmVcXG4gICAgICAgIC8vIGlmIGxlZnQgY2hpbGQgPCBlbGVtZW50LCBzZXQgc3dhcEluZGV4IHRvIHRoZSBsZWZ0IGluZGV4IChsKSBhbmQgbWluIHRvIGxlZnRcXG5cXG4gICAgICAgIGlmIChsIDw9IGxhc3RJbmRleCkge1xcbiAgICAgICAgICBsZWZ0ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtsXTtcXG4gICAgICAgICAgaWYgKGxlZnQgPCBlbGVtZW50KSBzd2FwSW5kZXggPSBsO1xcbiAgICAgICAgICBtaW4gPSBsZWZ0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaWYgKHIgPD0gbGFzdEluZGV4KSB7XFxuICAgICAgICAgIHJpZ2h0ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtyXTsgLy8gY29tcGFyZSB0aGUgcmlnaHQgdG8gdGhlIG1pbiBzbyBmYXIgdG8gbWFrZSBzdXJlIHRoZSBtaW4gb2YgdGhlIHRocmVlIGl0ZW1zIGdldHMgYnViYmxlZCB1cCB3aGlsZSB0aGUgcGFyZW50IGdldHMgc3Vua1xcblxcbiAgICAgICAgICBpZiAocmlnaHQgPCBtaW4pIHN3YXBJbmRleCA9IHI7XFxuICAgICAgICB9IC8vIHBhcmVudCBpcyBzbWFsbGVyIHRoYW4gYm90aCBsZWZ0IGFuZCByaWdodCBjaGlsZCBzbyBicmVha1xcblxcblxcbiAgICAgICAgaWYgKHN3YXBJbmRleCA9PSBudWxsKSBicmVhaztcXG5cXG4gICAgICAgIHRoaXMuX3N3YXAocCwgc3dhcEluZGV4KTsgLy8gc2V0IHRoZSBwYXJlbnQgaW5kZXggdG8gdGhlIHN3YXAgaW5kZXggc28gaXQgd2lsbCBjb250aW51ZSB0byBzaW5rIGRvd25cXG5cXG5cXG4gICAgICAgIHAgPSBzd2FwSW5kZXg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInByaW50TWluSGVhcFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludE1pbkhlYXAoKSB7XFxuICAgICAgY29uc29sZS5sb2coX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KSk7XFxuICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCk7XFxuICAgIH1cXG4gICAgLyogaW5zZXJ0XFxuICAgICAgMS4gaW5zZXJ0IG5ldyBpdGVtIGludG8gdGhpcy4jY29udGVudFxcbiAgICAgIDIuIGJ1YmJsZSBpdCB1cCBcXG4gICAgICAqL1xcblxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJpbnNlcnRcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0KGVsZW1lbnQpIHtcXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnB1c2goZWxlbWVudCk7XFxuXFxuICAgICAgdGhpcy5fYnViYmxlVXAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxKTtcXG4gICAgfVxcbiAgICAvKiBleHRyYWN0TWluXFxuICAgICAgMS4gc3dhcCBmaXJzdCBhbmQgbGFzdCBpdGVtcyBpZiB0aGlzLiNjb250ZW50Lmxlbmd0aCA+IDEgKG9yIGZpcnN0ICE9PSBsYXN0KVxcbiAgICAgIDIuIHBvcCBvdXQgbGFzdCBpdGVtIG9mIGFycmF5IGFuZCBzYXZlIGl0IGluIHJlc3VsdFxcbiAgICAgIDMuIElmIGxlbmd0aCBpcyBtb3JlIHRoYW4gb25lLCBidWJibGUgdGhlIGZpcnN0IGl0ZW0gZG93blxcbiAgICAgIDQuIFJldHVybiB0aGUgcmVzdWx0IHRoYXQgd2FzIHNhdmVkIFxcbiAgICAgICovXFxuXFxuICB9LCB7XFxuICAgIGtleTogXFxcImV4dHJhY3RNaW5cXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdE1pbigpIHtcXG4gICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggPD0gMCkgcmV0dXJuIG51bGw7IC8vcmV0dXJuIG51bGwgaWYgYXJyYXkgaXMgZW1wdHlcXG5cXG4gICAgICB2YXIgbGFzdEluZGV4ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxLFxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMDtcXG4gICAgICBpZiAoZmlyc3RJbmRleCAhPT0gbGFzdEluZGV4KSB0aGlzLl9zd2FwKGZpcnN0SW5kZXgsIGxhc3RJbmRleCk7XFxuXFxuICAgICAgdmFyIHJlc3VsdCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucG9wKCk7XFxuXFxuICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoID4gMCkge1xcbiAgICAgICAgdGhpcy5fc2lua0Rvd24oMCk7XFxuICAgICAgfVxcblxcbiAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwicmVtb3ZlXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50KSB7XFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xcbiAgICAgICAgLy8gaWYgY3VyciBpdGVtIGRvZXNuJ3QgbWF0Y2ggdGhlIGVsZW1lbnQgdG8gcmVtb3ZlLCBjb250aW51ZSBzZWFyY2hpbmdcXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldICE9PSBlbGVtZW50KSBjb250aW51ZTsgLy8gaWYgaXQgZG9lcyBtYXRjaFxcblxcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHRoaXMuc2l6ZSAtIDE7IC8vIGlmIGl0J3MgdGhlIGxhc3QgaXRlbSwgcG9wIGl0IGFuZCBicmVha1xcblxcbiAgICAgICAgaWYgKGkgPT09IGxhc3RJbmRleCkge1xcbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnBvcCgpO1xcblxcbiAgICAgICAgICBicmVhaztcXG4gICAgICAgIH0gLy8gaWYgaXQncyBub3QgdGhlIGxhc3QgaXRlbVxcbiAgICAgICAgLy8gIDEuIHN3YXAgaXQgd2l0aCB0aGUgbGFzdCBpdGVtXFxuICAgICAgICAvLyAgMi4gcG9wIHRoZSBzd2FwcGVkIGxhc3QgaXRlbVxcbiAgICAgICAgLy8gIDMuIFRoZW4gY2FsbCBidWJibGVVcCBhbmQgc2lua0Rvd24uXFxuXFxuXFxuICAgICAgICB0aGlzLl9zd2FwKGksIGxhc3RJbmRleCk7XFxuXFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnBvcCgpO1xcblxcbiAgICAgICAgdGhpcy5fYnViYmxlVXAoaSk7XFxuXFxuICAgICAgICB0aGlzLl9zaW5rRG93bihpKTtcXG5cXG4gICAgICAgIGJyZWFrO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJzaXplXFxcIixcXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcIm1pblxcXCIsXFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgIHJldHVybiB0aGlzLnNpemUgPyBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpWzBdIDogbnVsbDtcXG4gICAgfVxcbiAgfV0pO1xcblxcbiAgcmV0dXJuIE1pbkJpbmFyeUhlYXA7XFxufSgpO1xcblxcbnZhciBfY29udGVudCA9IG5ldyBXZWFrTWFwKCk7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBNaW5CaW5hcnlIZWFwO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0JpbmFyeUhlYXAvTWluQmluYXJ5SGVhcC5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0JpbmFyeUhlYXAvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9CaW5hcnlIZWFwL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXZhbChcInZhciBNaW5CaW5hcnlIZWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NaW5CaW5hcnlIZWFwICovIFxcXCIuL3NyYy9CaW5hcnlIZWFwL01pbkJpbmFyeUhlYXAuanNcXFwiKTtcXG5cXG52YXIgTWF4QmluYXJ5SGVhcCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTWF4QmluYXJ5SGVhcCAqLyBcXFwiLi9zcmMvQmluYXJ5SGVhcC9NYXhCaW5hcnlIZWFwLmpzXFxcIik7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSB7XFxuICBNaW5CaW5hcnlIZWFwOiBNaW5CaW5hcnlIZWFwLFxcbiAgTWF4QmluYXJ5SGVhcDogTWF4QmluYXJ5SGVhcFxcbn07XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvQmluYXJ5SGVhcC9pbmRleC5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0JpbmFyeVNlYXJjaFRyZWUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9CaW5hcnlTZWFyY2hUcmVlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXZhbChcImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcXFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9CaW5hcnlUcmVlVHJhdmVyc2FsICovIFxcXCIuL3NyYy9CaW5hcnlUcmVlVHJhdmVyc2FsLmpzXFxcIiksXFxuICAgIEJGUyA9IF9yZXF1aXJlLkJGUyxcXG4gICAgREZTSXRlcmF0aXZlID0gX3JlcXVpcmUuREZTSXRlcmF0aXZlO1xcblxcbnZhciBCaW5hcnlTZWFyY2hUcmVlID0gZnVuY3Rpb24gKCkge1xcbiAgdmFyIGZpbmRNaW5Ob2RlID0gZnVuY3Rpb24gZmluZE1pbk5vZGUobm9kZSkge1xcbiAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSByZXR1cm4gbm9kZTtlbHNlIHJldHVybiBmaW5kTWluTm9kZShub2RlLmxlZnQpO1xcbiAgfTtcXG5cXG4gIHZhciBUcmVlTm9kZSA9IGZ1bmN0aW9uIFRyZWVOb2RlKHZhbCkge1xcbiAgICB2YXIgbGVmdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcXG4gICAgdmFyIHJpZ2h0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xcblxcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJlZU5vZGUpO1xcblxcbiAgICB0aGlzLnZhbCA9IHZhbDtcXG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xcbiAgfTtcXG5cXG4gIHZhciBCaW5hcnlTZWFyY2hUcmVlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gICAgZnVuY3Rpb24gQmluYXJ5U2VhcmNoVHJlZSgpIHtcXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmluYXJ5U2VhcmNoVHJlZSk7XFxuXFxuICAgICAgX3Jvb3Quc2V0KHRoaXMsIHtcXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICAgIH0pO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfcm9vdCwgbnVsbCk7XFxuICAgIH1cXG5cXG4gICAgX2NyZWF0ZUNsYXNzKEJpbmFyeVNlYXJjaFRyZWUsIFt7XFxuICAgICAga2V5OiBcXFwiaW5zZXJ0XFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0KHZhbCkge1xcbiAgICAgICAgdmFyIHJlY3Vyc2l2ZUluc2VydE5vZGUgPSBmdW5jdGlvbiByZWN1cnNpdmVJbnNlcnROb2RlKG5vZGUsIG5ld05vZGUpIHtcXG4gICAgICAgICAgaWYgKG5ld05vZGUudmFsIDwgbm9kZS52YWwpIHtcXG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSBub2RlLmxlZnQgPSBuZXdOb2RlO2Vsc2UgcmVjdXJzaXZlSW5zZXJ0Tm9kZShub2RlLmxlZnQsIG5ld05vZGUpO1xcbiAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0ID09PSBudWxsKSBub2RlLnJpZ2h0ID0gbmV3Tm9kZTtlbHNlIHJlY3Vyc2l2ZUluc2VydE5vZGUobm9kZS5yaWdodCwgbmV3Tm9kZSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH07XFxuXFxuICAgICAgICB2YXIgbmV3Tm9kZSA9IG5ldyBUcmVlTm9kZSh2YWwpO1xcbiAgICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCkgPT09IG51bGwpIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfcm9vdCwgbmV3Tm9kZSk7ZWxzZSByZWN1cnNpdmVJbnNlcnROb2RlKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCksIG5ld05vZGUpO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInJlbW92ZVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSh2YWwpIHtcXG4gICAgICAgIHZhciByZW1vdmVOb2RlID0gZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlLCB2YWwpIHtcXG4gICAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHJldHVybiBudWxsO1xcblxcbiAgICAgICAgICBpZiAodmFsIDwgbm9kZS52YWwpIHtcXG4gICAgICAgICAgICBub2RlLmxlZnQgPSByZW1vdmVOb2RlKG5vZGUubGVmdCwgdmFsKTtcXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBpZiAodmFsID4gbm9kZS52YWwpIHtcXG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gcmVtb3ZlTm9kZShub2RlLnJpZ2h0LCB2YWwpO1xcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xcbiAgICAgICAgICB9IC8vIElmIHZhbCBtYXRjaGVzIG5vZGUudmFsXFxuXFxuXFxuICAgICAgICAgIGlmICh2YWwgPT09IG5vZGUudmFsKSB7XFxuICAgICAgICAgICAgLy8gaWYgbm9kZSB0byBkZWxldGUgZG9lc24ndCBoYXZlIGFueSBjaGlsZHJlblxcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkge1xcbiAgICAgICAgICAgICAgbm9kZSA9IG51bGw7XFxuICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcXG4gICAgICAgICAgICB9IC8vIGlmIG5vZGUgdG8gZGVsZXRlIGhhcyBvbmUgcmlnaHQgY2hpbGRcXG5cXG5cXG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XFxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcXG4gICAgICAgICAgICAgIHJldHVybiBub2RlO1xcbiAgICAgICAgICAgIH0gLy8gaWYgbm9kZSB0byBkZWxldGUgaGFzIG9uZSBsZWZ0IGNoaWxkXFxuXFxuXFxuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQgPT09IG51bGwpIHtcXG4gICAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnQ7XFxuICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcXG4gICAgICAgICAgICB9IC8vIERlbGV0aW5nIG5vZGUgd2l0aCB0d28gY2hpbGRyZW5cXG4gICAgICAgICAgICAvLyBmaW5kIG1pbiBub2RlIGluIHJpZ2h0IHN1YnRyZWUuIFRoaXMgd2lsbCBiZSBhIHRlcm1pbmFsIG5vZGVcXG4gICAgICAgICAgICAvLyB0cmF2ZXJzZSBkb3duIHJpZ2h0IHN1YnRyZWUgYW5kIGNoYW5nZSB0aGUgbm9kZS52YWwgdG8gdGhlIG1pbiBub2RlIHZhbFxcbiAgICAgICAgICAgIC8vIFRoZW4gY2FsbCByZW1vdmVOb2RlIG9uIHRoZSByaWdodCBzdWJ0cmVlIHdpdGggdGhlIG1pbi5ub2RlIHZhbCB0byBkZWxldGUgdGhlIHRlcm1pbmFsIG5vZGVcXG5cXG5cXG4gICAgICAgICAgICB2YXIgc3ViID0gZmluZE1pbk5vZGUobm9kZS5yaWdodCk7XFxuICAgICAgICAgICAgbm9kZS52YWwgPSBzdWIudmFsO1xcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSByZW1vdmVOb2RlKG5vZGUucmlnaHQsIHN1Yi52YWwpO1xcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9O1xcblxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9yb290LCByZW1vdmVOb2RlKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCksIHZhbCkpO1xcbiAgICAgIH0gLy8gc2VhcmNoZXMgdHJlZSBmb3Igc3BlY2lmaWVkIHZhbCBhbmQgcmV0dXJucyB0aGUgbm9kZSBpZiBmb3VuZCwgbnVsbCBvdGhlcndpc2VcXG5cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInNlYXJjaFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaCh2YWwpIHtcXG4gICAgICAgIHZhciByZWN1cnNpdmVTZWFyY2ggPSBmdW5jdGlvbiByZWN1cnNpdmVTZWFyY2gobm9kZSwgdmFsKSB7XFxuICAgICAgICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm4gbnVsbDtcXG4gICAgICAgICAgaWYgKHZhbCA8IG5vZGUudmFsKSByZXR1cm4gcmVjdXJzaXZlU2VhcmNoKG5vZGUubGVmdCwgdmFsKTtcXG4gICAgICAgICAgaWYgKHZhbCA+IG5vZGUudmFsKSByZXR1cm4gcmVjdXJzaXZlU2VhcmNoKG5vZGUucmlnaHQsIHZhbCk7XFxuICAgICAgICAgIGlmICh2YWwgPT09IG5vZGUudmFsKSByZXR1cm4gbm9kZTtcXG4gICAgICAgIH07XFxuXFxuICAgICAgICByZXR1cm4gcmVjdXJzaXZlU2VhcmNoKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCksIHZhbCk7XFxuICAgICAgfSAvLyB0cmVlIHRyYXZlcnNhbHNcXG4gICAgICAvLyByZXR1cm5zIGFycmF5IG9mIHZhbHNcXG5cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50SW5PcmRlclxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50SW5PcmRlcigpIHtcXG4gICAgICAgIHZhciByZXMgPSBERlNJdGVyYXRpdmUuaW5PcmRlcihfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpKTtcXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XFxuICAgICAgICByZXR1cm4gcmVzO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50UHJlT3JkZXJcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludFByZU9yZGVyKCkge1xcbiAgICAgICAgdmFyIHJlcyA9IERGU0l0ZXJhdGl2ZS5wcmVPcmRlcihfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpKTtcXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XFxuICAgICAgICByZXR1cm4gcmVzO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50UG9zdE9yZGVyXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRQb3N0T3JkZXIoKSB7XFxuICAgICAgICB2YXIgcmVzID0gREZTSXRlcmF0aXZlLnBvc3RPcmRlcihfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpKTtcXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XFxuICAgICAgICByZXR1cm4gcmVzO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50TGV2ZWxPcmRlclxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50TGV2ZWxPcmRlcigpIHtcXG4gICAgICAgIHZhciByZXMgPSBCRlMoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSk7XFxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xcbiAgICAgICAgcmV0dXJuIHJlcztcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJyb290XFxcIixcXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpO1xcbiAgICAgIH1cXG4gICAgfV0pO1xcblxcbiAgICByZXR1cm4gQmluYXJ5U2VhcmNoVHJlZTtcXG4gIH0oKTtcXG5cXG4gIHZhciBfcm9vdCA9IG5ldyBXZWFrTWFwKCk7XFxuXFxuICByZXR1cm4gQmluYXJ5U2VhcmNoVHJlZTtcXG59KCk7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBCaW5hcnlTZWFyY2hUcmVlO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0JpbmFyeVNlYXJjaFRyZWUuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9CaW5hcnlUcmVlVHJhdmVyc2FsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvQmluYXJ5VHJlZVRyYXZlcnNhbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV2YWwoXCJ2YXIgU3RhY2sgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1N0YWNrICovIFxcXCIuL3NyYy9TdGFjay5qc1xcXCIpO1xcblxcbnZhciBRdWV1ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUXVldWUgKi8gXFxcIi4vc3JjL1F1ZXVlLmpzXFxcIik7XFxuXFxudmFyIEJGUyA9IGZ1bmN0aW9uIEJGUyhyb290KSB7XFxuICB2YXIgcmVzID0gW10sXFxuICAgICAgcXVldWUgPSBuZXcgUXVldWUoKTtcXG4gIHF1ZXVlLmVucXVldWUocm9vdCk7XFxuXFxuICB3aGlsZSAoIXF1ZXVlLmlzRW1wdHkoKSkge1xcbiAgICB2YXIgbm9kZSA9IHF1ZXVlLmRlcXVldWUoKTtcXG4gICAgcmVzLnB1c2gobm9kZS52YWwpO1xcbiAgICBpZiAobm9kZS5sZWZ0KSBxdWV1ZS5lbnF1ZXVlKG5vZGUubGVmdCk7XFxuICAgIGlmIChub2RlLnJpZ2h0KSBxdWV1ZS5lbnF1ZXVlKG5vZGUucmlnaHQpO1xcbiAgfVxcblxcbiAgcmV0dXJuIHJlcztcXG59O1xcblxcbnZhciBERlNSZWN1cnNpdmUgPSB7XFxuICBpbk9yZGVyOiBmdW5jdGlvbiBpbk9yZGVyKHJvb3QpIHtcXG4gICAgdmFyIHJlcyA9IFtdO1xcblxcbiAgICBmdW5jdGlvbiByZWN1cnNlKG5vZGUpIHtcXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xcbiAgICAgICAgcmVjdXJzZShub2RlLmxlZnQpO1xcbiAgICAgICAgcmVzLnB1c2gobm9kZS52YWwpO1xcbiAgICAgICAgcmVjdXJzZShub2RlLnJpZ2h0KTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgcmVjdXJzZShyb290KTtcXG4gICAgcmV0dXJuIHJlcztcXG4gIH0sXFxuICBwcmVPcmRlcjogZnVuY3Rpb24gcHJlT3JkZXIocm9vdCkge1xcbiAgICB2YXIgcmVzID0gW107XFxuXFxuICAgIGZ1bmN0aW9uIHJlY3Vyc2Uobm9kZSkge1xcbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XFxuICAgICAgICByZXMucHVzaChub2RlLnZhbCk7XFxuICAgICAgICByZWN1cnNlKG5vZGUubGVmdCk7XFxuICAgICAgICByZWN1cnNlKG5vZGUucmlnaHQpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICByZWN1cnNlKHJvb3QpO1xcbiAgICByZXR1cm4gcmVzO1xcbiAgfSxcXG4gIHBvc3RPcmRlcjogZnVuY3Rpb24gcG9zdE9yZGVyKHJvb3QpIHtcXG4gICAgdmFyIHJlcyA9IFtdO1xcblxcbiAgICBmdW5jdGlvbiByZWN1cnNlKG5vZGUpIHtcXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xcbiAgICAgICAgcmVjdXJzZShub2RlLmxlZnQpO1xcbiAgICAgICAgcmVjdXJzZShub2RlLnJpZ2h0KTtcXG4gICAgICAgIHJlcy5wdXNoKG5vZGUudmFsKTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgcmVjdXJzZShyb290KTtcXG4gICAgcmV0dXJuIHJlcztcXG4gIH1cXG59O1xcbnZhciBERlNJdGVyYXRpdmUgPSB7XFxuICBpbk9yZGVyOiBmdW5jdGlvbiBpbk9yZGVyKHJvb3QpIHtcXG4gICAgdmFyIHJlcyA9IFtdLFxcbiAgICAgICAgc3RhY2sgPSBuZXcgU3RhY2soKTtcXG4gICAgdmFyIGN1cnIgPSByb290O1xcblxcbiAgICB3aGlsZSAoIXN0YWNrLmlzRW1wdHkoKSB8fCBjdXJyICE9PSBudWxsKSB7XFxuICAgICAgaWYgKGN1cnIgIT09IG51bGwpIHtcXG4gICAgICAgIHN0YWNrLnB1c2goY3Vycik7XFxuICAgICAgICBjdXJyID0gY3Vyci5sZWZ0O1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBjdXJyID0gc3RhY2sucG9wKCk7XFxuICAgICAgICByZXMucHVzaChjdXJyLnZhbCk7XFxuICAgICAgICBjdXJyID0gY3Vyci5yaWdodDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHJlcztcXG4gIH0sXFxuICBwcmVPcmRlcjogZnVuY3Rpb24gcHJlT3JkZXIocm9vdCkge1xcbiAgICB2YXIgcmVzID0gW10sXFxuICAgICAgICBzdGFjayA9IG5ldyBTdGFjaygpO1xcbiAgICB2YXIgY3VycjtcXG4gICAgc3RhY2sucHVzaChyb290KTtcXG5cXG4gICAgd2hpbGUgKCFzdGFjay5pc0VtcHR5KCkpIHtcXG4gICAgICBjdXJyID0gc3RhY2sucG9wKCk7XFxuICAgICAgcmVzLnB1c2goY3Vyci52YWwpO1xcbiAgICAgIGlmIChjdXJyLnJpZ2h0ICE9PSBudWxsKSBzdGFjay5wdXNoKGN1cnIucmlnaHQpO1xcbiAgICAgIGlmIChjdXJyLmxlZnQgIT09IG51bGwpIHN0YWNrLnB1c2goY3Vyci5sZWZ0KTtcXG4gICAgfVxcblxcbiAgICByZXR1cm4gcmVzO1xcbiAgfSxcXG4gIC8vIEl0ZXJhdGl2ZSBwb3N0IG9yZGVyIHVzaW5nIHR3byBzdGFja3NcXG4gIHBvc3RPcmRlcjogZnVuY3Rpb24gcG9zdE9yZGVyKHJvb3QpIHtcXG4gICAgdmFyIHJlcyA9IFtdLFxcbiAgICAgICAgc3RhY2sxID0gbmV3IFN0YWNrKCksXFxuICAgICAgICBzdGFjazIgPSBuZXcgU3RhY2soKTtcXG4gICAgdmFyIGN1cnI7XFxuICAgIHN0YWNrMS5wdXNoKHJvb3QpO1xcblxcbiAgICB3aGlsZSAoIXN0YWNrMS5pc0VtcHR5KCkpIHtcXG4gICAgICBjdXJyID0gc3RhY2sxLnBvcCgpO1xcbiAgICAgIHN0YWNrMi5wdXNoKGN1cnIpO1xcbiAgICAgIGlmIChjdXJyLmxlZnQgIT0gbnVsbCkgc3RhY2sxLnB1c2goY3Vyci5sZWZ0KTtcXG4gICAgICBpZiAoY3Vyci5yaWdodCAhPSBudWxsKSBzdGFjazEucHVzaChjdXJyLnJpZ2h0KTtcXG4gICAgfVxcblxcbiAgICB3aGlsZSAoIXN0YWNrMi5pc0VtcHR5KCkpIHtcXG4gICAgICBjdXJyID0gc3RhY2syLnBvcCgpO1xcbiAgICAgIHJlcy5wdXNoKGN1cnIudmFsKTtcXG4gICAgfVxcblxcbiAgICByZXR1cm4gcmVzO1xcbiAgfVxcbn07XFxubW9kdWxlLmV4cG9ydHMgPSB7XFxuICBCRlM6IEJGUyxcXG4gIERGU0l0ZXJhdGl2ZTogREZTSXRlcmF0aXZlLFxcbiAgREZTUmVjdXJzaXZlOiBERlNSZWN1cnNpdmVcXG59O1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0JpbmFyeVRyZWVUcmF2ZXJzYWwuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9HcmFwaC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9HcmFwaC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5ldmFsKFwiZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cXG5cXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlxcXCIpOyB9XFxuXFxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXFxcInVuZGVmaW5lZFxcXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1xcXCJyZXR1cm5cXFwiXSAhPSBudWxsKSBfaVtcXFwicmV0dXJuXFxcIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XFxuXFxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXFxcInVuZGVmaW5lZFxcXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IHRocm93IF9lMjsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXFxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cXFwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UzKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMzsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1xcXCJyZXR1cm5cXFwiXSAhPSBudWxsKSBpdFtcXFwicmV0dXJuXFxcIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxcblxcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXFxcInN0cmluZ1xcXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcXFwiT2JqZWN0XFxcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXFxcIk1hcFxcXCIgfHwgbiA9PT0gXFxcIlNldFxcXCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXFxcIkFyZ3VtZW50c1xcXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XFxuXFxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXFxcInZhbHVlXFxcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5nZXQpIHsgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjcmlwdG9yLnZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5zZXQpIHsgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpOyB9IGVsc2UgeyBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFxcXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cXG5cXG52YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0dyYXBoVHJhdmVyc2FsICovIFxcXCIuL3NyYy9HcmFwaFRyYXZlcnNhbC5qc1xcXCIpLFxcbiAgICBfQkZTID0gX3JlcXVpcmUuQkZTLFxcbiAgICBERlNSZWN1cnNpdmUgPSBfcmVxdWlyZS5ERlNSZWN1cnNpdmU7XFxuXFxudmFyIEdyYXBoID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gIGZ1bmN0aW9uIEdyYXBoKCkge1xcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR3JhcGgpO1xcblxcbiAgICBfdmVydGljZXMuc2V0KHRoaXMsIHtcXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICB2YWx1ZTogdm9pZCAwXFxuICAgIH0pO1xcblxcbiAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3ZlcnRpY2VzLCBuZXcgTWFwKCkpO1xcbiAgfVxcblxcbiAgX2NyZWF0ZUNsYXNzKEdyYXBoLCBbe1xcbiAgICBrZXk6IFxcXCJhZGRWZXJ0ZXhcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVmVydGV4KHZhbCkge1xcbiAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModmFsKSkgdGhyb3cgXFxcInZlcnRleCB3aXRoIHZhbHVlIFxcXCIuY29uY2F0KHZhbCwgXFxcIiBhbHJlYWR5IGV4aXN0cy5cXFwiKTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5zZXQodmFsLCBuZXcgU2V0KCkpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImFkZEVkZ2VcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRWRnZSh2VmFsLCBlVmFsKSB7XFxuICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModlZhbCkpIHRocm93IFxcXCJ2ZXJ0ZXggd2l0aCB2YWx1ZSBcXFwiLmNvbmNhdCh2VmFsLCBcXFwiIGRvZXNuJ3QgZXhpc3QuXFxcIik7XFxuICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXMoZVZhbCkpIHRocm93IFxcXCJlZGdlIHdpdGggdmFsdWUgXFxcIi5jb25jYXQoZVZhbCwgXFxcIiBkb2Vzbid0IGV4aXN0LlxcXCIpO1xcblxcbiAgICAgIHZhciBlZGdlcyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmdldCh2VmFsKTtcXG5cXG4gICAgICBpZiAoZWRnZXMuaGFzKGVWYWwpKSB0aHJvdyBcXFwidmVydGV4IGFscmVhZHkgaGFzIGVkZ2UgXFxcIi5jb25jYXQoZVZhbCwgXFxcIi5cXFwiKTtcXG4gICAgICBlZGdlcy5hZGQoZVZhbCk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiZ2V0VmVydGV4RWRnZXNcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmVydGV4RWRnZXModlZhbCkge1xcbiAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKHZWYWwpKSB0aHJvdyBcXFwidmVydGV4IHdpdGggdmFsdWUgXFxcIi5jb25jYXQodlZhbCwgXFxcIiBkb2Vzbid0IGV4aXN0LlxcXCIpO1xcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmdldCh2VmFsKSk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiaGFzRWRnZVxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNFZGdlKHZWYWwsIGVWYWwpIHtcXG4gICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2VmFsKSkgcmV0dXJuIGZhbHNlO1xcblxcbiAgICAgIHZhciBlZGdlcyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmdldCh2VmFsKTtcXG5cXG4gICAgICByZXR1cm4gZWRnZXMuaGFzKGVWYWwpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImhhc1ZlcnRleFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNWZXJ0ZXgodlZhbCkge1xcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModlZhbCk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwicmVtb3ZlRWRnZVxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFZGdlKHZWYWwsIGVWYWwpIHtcXG4gICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2VmFsKSkgdGhyb3cgXFxcInZlcnRleCB3aXRoIHZhbHVlIFxcXCIuY29uY2F0KHZWYWwsIFxcXCIgZG9lc24ndCBleGlzdC5cXFwiKTtcXG5cXG4gICAgICB2YXIgZWRnZXMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5nZXQodlZhbCk7XFxuXFxuICAgICAgZWRnZXNbXFxcImRlbGV0ZVxcXCJdKGVWYWwpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInJlbW92ZVZlcnRleFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVWZXJ0ZXgodlZhbCkge1xcbiAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKHZWYWwpKSB0aHJvdyBcXFwidmVydGV4IHdpdGggdmFsdWUgXFxcIi5jb25jYXQodlZhbCwgXFxcIiBkb2Vzbid0IGV4aXN0LlxcXCIpO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpW1xcXCJkZWxldGVcXFwiXSh2VmFsKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJCRlNcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gQkZTKHN0YXJ0LCBjYWxsYmFjaykge1xcbiAgICAgIHZhciBncmFwaCA9IHRoaXM7XFxuXFxuICAgICAgX0JGUyhzdGFydCwgZ3JhcGgsIGNhbGxiYWNrKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJERlNcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gREZTKHN0YXJ0LCBjYWxsYmFjaykge1xcbiAgICAgIHZhciBncmFwaCA9IHRoaXM7XFxuICAgICAgREZTUmVjdXJzaXZlKHN0YXJ0LCBncmFwaCwgY2FsbGJhY2spO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInByaW50R3JhcGhcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRHcmFwaCgpIHtcXG4gICAgICB2YXIgZ3JhcGggPSB7fTtcXG5cXG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykpLFxcbiAgICAgICAgICBfc3RlcDtcXG5cXG4gICAgICB0cnkge1xcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcXG4gICAgICAgICAgdmFyIF9zdGVwJHZhbHVlID0gX3NsaWNlZFRvQXJyYXkoX3N0ZXAudmFsdWUsIDIpLFxcbiAgICAgICAgICAgICAgdlZhbCA9IF9zdGVwJHZhbHVlWzBdLFxcbiAgICAgICAgICAgICAgdmVydGV4RWRnZXMgPSBfc3RlcCR2YWx1ZVsxXTtcXG5cXG4gICAgICAgICAgZ3JhcGhbdlZhbF0gPSBbXTtcXG4gICAgICAgICAgdmFyIGVkZ2VzID0gJyc7XFxuXFxuICAgICAgICAgIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodmVydGV4RWRnZXMpLFxcbiAgICAgICAgICAgICAgX3N0ZXAyO1xcblxcbiAgICAgICAgICB0cnkge1xcbiAgICAgICAgICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XFxuICAgICAgICAgICAgICB2YXIgZWRnZSA9IF9zdGVwMi52YWx1ZTtcXG4gICAgICAgICAgICAgIGVkZ2VzICs9IFxcXCJcXFwiLmNvbmNhdChlZGdlLCBcXFwiIFxcXCIpO1xcbiAgICAgICAgICAgICAgZ3JhcGhbdlZhbF0ucHVzaChlZGdlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgICAgIF9pdGVyYXRvcjIuZShlcnIpO1xcbiAgICAgICAgICB9IGZpbmFsbHkge1xcbiAgICAgICAgICAgIF9pdGVyYXRvcjIuZigpO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJcXFwiLmNvbmNhdCh2VmFsLCBcXFwiIC0+IFxcXCIpLmNvbmNhdChlZGdlcykpO1xcbiAgICAgICAgfVxcbiAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcXG4gICAgICB9IGZpbmFsbHkge1xcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcXG4gICAgICB9XFxuXFxuICAgICAgcmV0dXJuIGdyYXBoO1xcbiAgICB9XFxuICB9XSk7XFxuXFxuICByZXR1cm4gR3JhcGg7XFxufSgpO1xcblxcbnZhciBfdmVydGljZXMgPSBuZXcgV2Vha01hcCgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gR3JhcGg7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvR3JhcGguanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9HcmFwaFRyYXZlcnNhbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9HcmFwaFRyYXZlcnNhbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5ldmFsKFwiZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXFxcInVuZGVmaW5lZFxcXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxcXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXFxcIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcXFwicmV0dXJuXFxcIl0gIT0gbnVsbCkgaXRbXFxcInJldHVyblxcXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cXG5cXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFxcXCJzdHJpbmdcXFwiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXFxcIk9iamVjdFxcXCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFxcXCJNYXBcXFwiIHx8IG4gPT09IFxcXCJTZXRcXFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFxcXCJBcmd1bWVudHNcXFwiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxcblxcbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxcblxcbnZhciBRdWV1ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUXVldWUgKi8gXFxcIi4vc3JjL1F1ZXVlLmpzXFxcIik7XFxuXFxudmFyIFN0YWNrID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9TdGFjayAqLyBcXFwiLi9zcmMvU3RhY2suanNcXFwiKTsgLy8gYnJlYWR0aCBmaXJzdCBzZWFyY2ggd2l0aCBxdWV1ZVxcblxcblxcbnZhciBCRlMgPSBmdW5jdGlvbiBCRlMoc3RhcnQsIGdyYXBoLCBjYWxsYmFjaykge1xcbiAgLy8gd2lsbCBrZWVwIHRyYWNrIG9mIG5ldyB2ZXJ0aWNlcyB3aXRoIHF1ZXVlIGFuZCB2aXNpdGVkIG5vZGVzIHdpdGggYSBzZXRcXG4gIHZhciBxdWV1ZSA9IG5ldyBRdWV1ZSgpLFxcbiAgICAgIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XFxuICBxdWV1ZS5lbnF1ZXVlKHN0YXJ0KTsgLy92ZXJ0ZXggaXMgdmlzaXRlZCBpZiBpdCBnZXRzIHB1c2hlZCBpbnRvIHF1ZXVlLlxcblxcbiAgdmlzaXRlZC5hZGQoc3RhcnQpO1xcblxcbiAgd2hpbGUgKCFxdWV1ZS5pc0VtcHR5KCkpIHtcXG4gICAgdmFyIGN1cnIgPSBxdWV1ZS5kZXF1ZXVlKCksXFxuICAgICAgICBlZGdlcyA9IGdyYXBoLmdldFZlcnRleEVkZ2VzKGN1cnIpOyAvLyBjYWxsIGNhbGxiYWNrIG9uIGVhY2ggdmVydGV4IHRoYXQgZ2V0cyBkZXF1ZXVlZFxcblxcbiAgICBjYWxsYmFjayhjdXJyKTsgLy9pdGVyYXRlIG92ZXIgYWxsIGVkZ2VzIGFuZCBhZGQgdGhlIHVudmlzaXRlZCBvbmVzIHRvIHF1ZXVlXFxuXFxuICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlZGdlcyksXFxuICAgICAgICBfc3RlcDtcXG5cXG4gICAgdHJ5IHtcXG4gICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xcbiAgICAgICAgdmFyIGVWYWwgPSBfc3RlcC52YWx1ZTtcXG5cXG4gICAgICAgIGlmICghdmlzaXRlZC5oYXMoZVZhbCkpIHtcXG4gICAgICAgICAgcXVldWUuZW5xdWV1ZShlVmFsKTtcXG4gICAgICAgICAgdmlzaXRlZC5hZGQoZVZhbCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICBfaXRlcmF0b3IuZShlcnIpO1xcbiAgICB9IGZpbmFsbHkge1xcbiAgICAgIF9pdGVyYXRvci5mKCk7XFxuICAgIH1cXG4gIH1cXG59OyAvL2l0ZXJhdGl2ZSBkZXB0aCBmaXJzdCBzZWFyY2guIEFsbW9zdCBzYW1lIGFzIEJGUy4gT25seSBkaWZmZXJlbmNlIGlzIHRoZSBzdGFjayB2cyBxdWV1ZVxcblxcblxcbnZhciBERlNJdGVyYXRpdmUgPSBmdW5jdGlvbiBERlNJdGVyYXRpdmUoc3RhcnQsIGdyYXBoLCBjYWxsYmFjaykge1xcbiAgdmFyIHN0YWNrID0gbmV3IFN0YWNrKCksXFxuICAgICAgdmlzaXRlZCA9IG5ldyBTZXQoKTtcXG4gIHN0YWNrLnB1c2goc3RhcnQpO1xcbiAgdmlzaXRlZC5hZGQoc3RhcnQpO1xcblxcbiAgd2hpbGUgKCFzdGFjay5pc0VtcHR5KCkpIHtcXG4gICAgdmFyIGN1cnIgPSBzdGFjay5wb3AoKSxcXG4gICAgICAgIGVkZ2VzID0gZ3JhcGguZ2V0VmVydGV4RWRnZXMoY3Vycik7XFxuICAgIGNhbGxiYWNrKGN1cnIpO1xcblxcbiAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGVkZ2VzKSxcXG4gICAgICAgIF9zdGVwMjtcXG5cXG4gICAgdHJ5IHtcXG4gICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xcbiAgICAgICAgdmFyIGVWYWwgPSBfc3RlcDIudmFsdWU7XFxuXFxuICAgICAgICBpZiAoIXZpc2l0ZWQuaGFzKGVWYWwpKSB7XFxuICAgICAgICAgIHN0YWNrLnB1c2goZVZhbCk7XFxuICAgICAgICAgIHZpc2l0ZWQuYWRkKGVWYWwpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XFxuICAgIH0gZmluYWxseSB7XFxuICAgICAgX2l0ZXJhdG9yMi5mKCk7XFxuICAgIH1cXG4gIH1cXG59OyAvLyBSZWN1cnNpdmUgZGVwdGggZmlyc3Qgc2VhcmNoXFxuXFxuXFxudmFyIERGU1JlY3Vyc2l2ZSA9IGZ1bmN0aW9uIERGU1JlY3Vyc2l2ZShzdGFydCwgZ3JhcGgsIGNhbGxiYWNrKSB7XFxuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcXG5cXG4gIHZhciByZWN1cnNpdmVERlMgPSBmdW5jdGlvbiByZWN1cnNpdmVERlMoY3Vycikge1xcbiAgICBpZiAodmlzaXRlZC5oYXMoY3VycikpIHJldHVybjtcXG4gICAgY2FsbGJhY2soY3Vycik7XFxuICAgIHZpc2l0ZWQuYWRkKGN1cnIpO1xcbiAgICB2YXIgZWRnZXMgPSBncmFwaC5nZXRWZXJ0ZXhFZGdlcyhjdXJyKTtcXG5cXG4gICAgdmFyIF9pdGVyYXRvcjMgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlZGdlcyksXFxuICAgICAgICBfc3RlcDM7XFxuXFxuICAgIHRyeSB7XFxuICAgICAgZm9yIChfaXRlcmF0b3IzLnMoKTsgIShfc3RlcDMgPSBfaXRlcmF0b3IzLm4oKSkuZG9uZTspIHtcXG4gICAgICAgIHZhciBlVmFsID0gX3N0ZXAzLnZhbHVlO1xcblxcbiAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhlVmFsKSkge1xcbiAgICAgICAgICByZWN1cnNpdmVERlMoZVZhbCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICBfaXRlcmF0b3IzLmUoZXJyKTtcXG4gICAgfSBmaW5hbGx5IHtcXG4gICAgICBfaXRlcmF0b3IzLmYoKTtcXG4gICAgfVxcbiAgfTtcXG5cXG4gIHJlY3Vyc2l2ZURGUyhzdGFydCk7XFxufTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IHtcXG4gIEJGUzogQkZTLFxcbiAgREZTUmVjdXJzaXZlOiBERlNSZWN1cnNpdmUsXFxuICBERlNJdGVyYXRpdmU6IERGU0l0ZXJhdGl2ZVxcbn07XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvR3JhcGhUcmF2ZXJzYWwuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9IYXNoVGFibGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0hhc2hUYWJsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcImZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFxcXCJ1bmRlZmluZWRcXFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlxcXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXFxcInJldHVyblxcXCJdICE9IG51bGwpIGl0W1xcXCJyZXR1cm5cXFwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XFxuXFxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcXFwic3RyaW5nXFxcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFxcXCJPYmplY3RcXFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcXFwiTWFwXFxcIiB8fCBuID09PSBcXFwiU2V0XFxcIikgcmV0dXJuIEFycmF5LmZyb20obik7IGlmIChuID09PSBcXFwiQXJndW1lbnRzXFxcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cXG5cXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuLyogaHR0cHM6Ly9yZWFjdGdvLmNvbS9oYXNodGFibGUtamF2YXNjcmlwdC8gKi9cXG5cXG4vKlxcblJ1ZGltZW50YXJ5IGphdmFzY3JpcHQgaGFzaCB0YWJsZSByZXNvbHZpbmcgY29sbGlzaW9ucyB3aXRoIHNlcGFyYXRlIGNoYWluaW5nLiBcXG5Ub2RvOiBSZXNvbHZlIGNvbmZsaWN0cyB3aXRoIExpbmVhciBQcm9iaW5nLCBTZXBhcmF0ZSBDaGFpbmluZyAobGlua2VkIGxpc3RzKVxcbiovXFxudmFyIEhhc2hUYWJsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICBmdW5jdGlvbiBIYXNoVGFibGUoKSB7XFxuICAgIHZhciBzaXplID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiA0MjtcXG5cXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhc2hUYWJsZSk7XFxuXFxuICAgIHRoaXMuYnVja2V0cyA9IG5ldyBBcnJheShzaXplKTtcXG4gICAgdGhpcy5zaXplID0gc2l6ZTtcXG4gIH1cXG5cXG4gIF9jcmVhdGVDbGFzcyhIYXNoVGFibGUsIFt7XFxuICAgIGtleTogXFxcImhhc2hcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzaChrZXkpIHtcXG4gICAgICByZXR1cm4ga2V5LnRvU3RyaW5nKCkubGVuZ3RoICUgdGhpcy5zaXplO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInNldFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xcbiAgICAgIHZhciBpID0gdGhpcy5oYXNoKGtleSk7IC8vIGlmIG5vIGNvbGxpc2lvbiwgc2V0IHRoZSBidWNrZXQgYXQgcG9zaXRpb24gaSB0byBhcnJheVxcblxcbiAgICAgIGlmICghdGhpcy5idWNrZXRzW2ldKSB0aGlzLmJ1Y2tldHNbaV0gPSBbXTsgLy8gcHVzaCBba2V5LCB2YWxdIGludG8gdGhlIGFycmF5XFxuXFxuICAgICAgdGhpcy5idWNrZXRzW2ldLnB1c2goW2tleSwgdmFsdWVdKTtcXG4gICAgICByZXR1cm4gaTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJnZXRcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGtleSkge1xcbiAgICAgIHZhciBpID0gdGhpcy5oYXNoKGtleSk7XFxuICAgICAgaWYgKCF0aGlzLmJ1Y2tldHNbaV0pIHJldHVybiBudWxsOyAvLyBjaGVjayBlYWNoIHBhaXIgaW5zaWRlIHRoZSBidWNrZXQgYXQgcG9zaXRpb24gaVxcbiAgICAgIC8vIGlmIGtleSBtYXRjaGVzIGtleSBhdCBwYWlyWzBdIHJldHVybiB0aGUgdmFsIGF0IHBhaXJbMV1cXG5cXG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodGhpcy5idWNrZXRzW2ldKSxcXG4gICAgICAgICAgX3N0ZXA7XFxuXFxuICAgICAgdHJ5IHtcXG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XFxuICAgICAgICAgIHZhciBwYWlyID0gX3N0ZXAudmFsdWU7XFxuICAgICAgICAgIGlmIChwYWlyWzBdID09PSBrZXkpIHJldHVybiBwYWlyWzFdO1xcbiAgICAgICAgfVxcbiAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcXG4gICAgICB9IGZpbmFsbHkge1xcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1dKTtcXG5cXG4gIHJldHVybiBIYXNoVGFibGU7XFxufSgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gSGFzaFRhYmxlO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0hhc2hUYWJsZS5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0xpbmtlZExpc3QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9MaW5rZWRMaXN0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcImZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFxcXCJ1bmRlZmluZWRcXFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlxcXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXFxcInJldHVyblxcXCJdICE9IG51bGwpIGl0W1xcXCJyZXR1cm5cXFwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XFxuXFxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcXFwic3RyaW5nXFxcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFxcXCJPYmplY3RcXFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcXFwiTWFwXFxcIiB8fCBuID09PSBcXFwiU2V0XFxcIikgcmV0dXJuIEFycmF5LmZyb20obik7IGlmIChuID09PSBcXFwiQXJndW1lbnRzXFxcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cXG5cXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cXG5cXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXFxcIik7IH0gZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlOyB9IHJldHVybiB2YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbnZhciBMaW5rZWRMaXN0ID0gZnVuY3Rpb24gKCkge1xcbiAgLy8gY29uc3QgaGVhZCA9IFN5bWJvbCgnaGVhZCcpIC8vVG8ga2VlcCBoZWFkIGFzIHByaXZhdGUgaW4gbGlua2VkIGxpc3RcXG4gIC8vIGNvbnN0IHNpemUgPSBTeW1ib2woJ3NpemUnKVxcbiAgdmFyIExpc3ROb2RlID0gZnVuY3Rpb24gTGlzdE5vZGUodmFsKSB7XFxuICAgIHZhciBuZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xcblxcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlzdE5vZGUpO1xcblxcbiAgICB0aGlzLnZhbCA9IHZhbDtcXG4gICAgdGhpcy5uZXh0ID0gbmV4dDtcXG4gIH07XFxuXFxuICB2YXIgTGlua2VkTGlzdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICAgIC8vIFByaXZhdGUgc3RhdGljIGZpZWxkc1xcbiAgICBmdW5jdGlvbiBMaW5rZWRMaXN0KCkge1xcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rZWRMaXN0KTtcXG5cXG4gICAgICBfaGVhZC5zZXQodGhpcywge1xcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgICB2YWx1ZTogdm9pZCAwXFxuICAgICAgfSk7XFxuXFxuICAgICAgX3NpemUuc2V0KHRoaXMsIHtcXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICAgIH0pO1xcblxcbiAgICAgIC8vIFRoZSBoZWFkIGFuZCBzaXplIHByb3BlcnR5IHNob3VsZG4ndCBiZSBtb2RpZmlhYmxlIG91dHNpZGUgdGhlIGNsYXNzLiBTbyB0aGVyZSBzaG91bGQgb25seSBiZSBhIGdldHRlci4gQ2xhc3MgZmllbGRzIGFyZW4ndCBzdXBwb3J0ZWQgYnkgYSBsb3Qgb2YgYnJvd3NlcnMuIFVzZSBzeW1ib2wgaW5zdGVhZCB0byBjcmVhdGUgcHJpdmF0ZSBjbGFzcyB2YXJpYWJsZXMgaWYgeW91J3JlIG5vdCB1c2luZyBiYWJlbC5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIG51bGwpO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgMCk7IC8vIHRoaXNbaGVhZF0gPSBudWxsXFxuICAgICAgLy8gdGhpc1tzaXplXSA9IDBcXG5cXG4gICAgfSAvL2dldHRlcnNcXG5cXG5cXG4gICAgX2NyZWF0ZUNsYXNzKExpbmtlZExpc3QsIFt7XFxuICAgICAga2V5OiBcXFwiZnJvbUFycmF5XFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZnJvbUFycmF5KGFycmF5KSB7XFxuICAgICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoYXJyYXkpLFxcbiAgICAgICAgICAgIF9zdGVwO1xcblxcbiAgICAgICAgdHJ5IHtcXG4gICAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcXG4gICAgICAgICAgICB2YXIgdmFsID0gX3N0ZXAudmFsdWU7XFxuICAgICAgICAgICAgdGhpcy5hcHBlbmRUb1RhaWwodmFsKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgICAgIF9pdGVyYXRvci5lKGVycik7XFxuICAgICAgICB9IGZpbmFsbHkge1xcbiAgICAgICAgICBfaXRlcmF0b3IuZigpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInRvQXJyYXlcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b0FycmF5KCkge1xcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xcblxcbiAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xcblxcbiAgICAgICAgd2hpbGUgKGN1cnIpIHtcXG4gICAgICAgICAgcmVzdWx0LnB1c2goY3Vyci52YWwpO1xcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcXG4gICAgICB9IC8vIFQg4oCUIE8oMSlcXG5cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByZXBlbmRUb0hlYWRcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVwZW5kVG9IZWFkKHZhbCkge1xcbiAgICAgICAgdmFyIF90aGlzJHNpemU7XFxuXFxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBMaXN0Tm9kZSh2YWwpO1xcbiAgICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCkgPT0gbnVsbCkgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9oZWFkLCBub2RlKTtlbHNlIHtcXG4gICAgICAgICAgdmFyIHByZXZIZWFkID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG5cXG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9oZWFkLCBub2RlKTtcXG5cXG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKS5uZXh0ID0gcHJldkhlYWQ7XFxuICAgICAgICB9XFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpICsgMSksIF90aGlzJHNpemU7XFxuICAgICAgfSAvLyBUIOKAlCBPKG4pXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJhcHBlbmRUb1RhaWxcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUb1RhaWwodmFsKSB7XFxuICAgICAgICB2YXIgX3RoaXMkc2l6ZTI7XFxuXFxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBMaXN0Tm9kZSh2YWwpO1xcbiAgICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCkgPT0gbnVsbCkgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9oZWFkLCBub2RlKTtlbHNlIHtcXG4gICAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xcblxcbiAgICAgICAgICB3aGlsZSAoY3Vyci5uZXh0KSB7XFxuICAgICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBjdXJyLm5leHQgPSBub2RlO1xcbiAgICAgICAgfVxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZTIgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgKyAxKSwgX3RoaXMkc2l6ZTI7XFxuICAgICAgfSAvLyBUIOKAlCBPKDEpXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJkZWxldGVGcm9tSGVhZFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZUZyb21IZWFkKCkge1xcbiAgICAgICAgdmFyIF90aGlzJHNpemUzO1xcblxcbiAgICAgICAgdmFyIGN1cnJIZWFkID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG5cXG4gICAgICAgIGlmICghY3VyckhlYWQpIHJldHVybiBudWxsO1xcblxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9oZWFkLCBjdXJySGVhZC5uZXh0KTtcXG5cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemUzID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpIC0gMSksIF90aGlzJHNpemUzO1xcbiAgICAgICAgcmV0dXJuIGN1cnJIZWFkLnZhbDtcXG4gICAgICB9IC8vIFQg4oCUIE8obilcXG5cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImRlbGV0ZUZyb21UYWlsXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVsZXRlRnJvbVRhaWwoKSB7XFxuICAgICAgICB2YXIgX3RoaXMkc2l6ZTU7XFxuXFxuICAgICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XFxuXFxuICAgICAgICBpZiAoIWN1cnIpIHJldHVybiBudWxsOyAvL0hhbmRsZSBjYXNlIG9mIHNpbmdsZSBub2RlIGluIGxpbmtlZCBsaXN0XFxuXFxuICAgICAgICBpZiAoIWN1cnIubmV4dCkge1xcbiAgICAgICAgICB2YXIgX3RoaXMkc2l6ZTQ7XFxuXFxuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgbnVsbCk7XFxuXFxuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemU0ID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpIC0gMSksIF90aGlzJHNpemU0O1xcbiAgICAgICAgICByZXR1cm4gY3Vyci52YWw7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB2YXIgcHJldiA9IG51bGw7XFxuXFxuICAgICAgICB3aGlsZSAoY3Vyci5uZXh0KSB7XFxuICAgICAgICAgIHByZXYgPSBjdXJyO1xcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgcHJldi5uZXh0ID0gbnVsbDtcXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemU1ID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpIC0gMSksIF90aGlzJHNpemU1O1xcbiAgICAgICAgcmV0dXJuIGN1cnIudmFsO1xcbiAgICAgIH0gLy8gVCDigJQgTyhuKS4gTm9uIHJlY3Vyc2l2ZSB2ZXJzaW9uIG9mIGRlbGV0ZU5vZGVSZWN1cnNpdmVcXG5cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImRlbGV0ZU5vZGVcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxldGVOb2RlKHZhbCkge1xcbiAgICAgICAgdmFyIGRlbGV0ZU11bHRpcGxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcXG4gICAgICAgIHZhciBkZWxldGVDb3VudCA9IDA7XFxuXFxuICAgICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCksXFxuICAgICAgICAgICAgcHJldiA9IG51bGw7XFxuXFxuICAgICAgICB3aGlsZSAoY3Vycikge1xcbiAgICAgICAgICBpZiAoY3Vyci52YWwgPT09IHZhbCkge1xcbiAgICAgICAgICAgIHZhciBfdGhpcyRzaXplNjtcXG5cXG4gICAgICAgICAgICBpZiAoIXByZXYpIHtcXG4gICAgICAgICAgICAgIC8vRG9uJ3QgbmVlZCB0byBnYXJiYWdlIGNvbGxlY3QuIFRoaXMgaXMgSmF2YXNjcmlwdCwgbm90IEMrK1xcbiAgICAgICAgICAgICAgLy8gY29uc3QgdGVtcCA9IGN1cnJcXG4gICAgICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7IC8vIHRlbXAubmV4dCA9IG51bGxcXG5cXG4gICAgICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgY3Vycik7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgIHByZXYubmV4dCA9IGN1cnIubmV4dDsgLy8gY3Vyci5uZXh0ID0gbnVsbFxcblxcbiAgICAgICAgICAgICAgY3VyciA9IHByZXYubmV4dDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZTYgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgLSAxKSwgX3RoaXMkc2l6ZTY7XFxuICAgICAgICAgICAgZGVsZXRlQ291bnQrKztcXG4gICAgICAgICAgICBpZiAoIWRlbGV0ZU11bHRpcGxlKSByZXR1cm4gdHJ1ZTtcXG4gICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBwcmV2ID0gY3VycjtcXG4gICAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICByZXR1cm4gISFkZWxldGVDb3VudDtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJzZWFyY2hcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2godmFsKSB7XFxuICAgICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XFxuXFxuICAgICAgICB3aGlsZSAoY3Vycikge1xcbiAgICAgICAgICBpZiAoY3Vyci52YWwgPT09IHZhbCkgcmV0dXJuIHRydWU7XFxuICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICByZXR1cm4gZmFsc2U7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicHJpbnRMaXN0XFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRMaXN0KCkge1xcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudG9BcnJheSgpO1xcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcXG4gICAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwiaGVhZFxcXCIsXFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJzaXplXFxcIixcXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInRhaWxcXFwiLFxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xcblxcbiAgICAgICAgaWYgKCFjdXJyKSByZXR1cm4gbnVsbDtcXG5cXG4gICAgICAgIHdoaWxlIChjdXJyLm5leHQpIHtcXG4gICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHJldHVybiBjdXJyO1xcbiAgICAgIH1cXG4gICAgfV0pO1xcblxcbiAgICByZXR1cm4gTGlua2VkTGlzdDtcXG4gIH0oKTtcXG5cXG4gIHZhciBfaGVhZCA9IG5ldyBXZWFrTWFwKCk7XFxuXFxuICB2YXIgX3NpemUgPSBuZXcgV2Vha01hcCgpO1xcblxcbiAgcmV0dXJuIExpbmtlZExpc3Q7XFxufSgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gTGlua2VkTGlzdDtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9MaW5rZWRMaXN0LmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvUXVldWUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvUXVldWUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcXFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxudmFyIFF1ZXVlID0gZnVuY3Rpb24gKCkge1xcbiAgdmFyIFF1ZXVlTm9kZSA9IGZ1bmN0aW9uIFF1ZXVlTm9kZShkYXRhKSB7XFxuICAgIHZhciBuZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xcblxcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUXVldWVOb2RlKTtcXG5cXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcXG4gICAgdGhpcy5uZXh0ID0gbmV4dDtcXG4gIH07XFxuXFxuICB2YXIgUXVldWUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgICAvL0xvb2sgaW4gLi9MaW5rZWRMaXN0LmpzIHRvIHNlZSBvdGhlciB3YXlzIG9mIGRlY2xhcmluZyBwcml2YXRlIHN0YXRpYyBmaWVsZHMgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvQ2xhc3Nlcy9DbGFzc19maWVsZHMjUHJpdmF0ZV9maWVsZHNcXG4gICAgZnVuY3Rpb24gUXVldWUoKSB7XFxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFF1ZXVlKTtcXG5cXG4gICAgICBfZmlyc3Quc2V0KHRoaXMsIHtcXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICAgIH0pO1xcblxcbiAgICAgIF9sYXN0LnNldCh0aGlzLCB7XFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgICB9KTtcXG5cXG4gICAgICBfc2l6ZS5zZXQodGhpcywge1xcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgICB2YWx1ZTogdm9pZCAwXFxuICAgICAgfSk7XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9maXJzdCwgbnVsbCk7XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9sYXN0LCBudWxsKTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIDApO1xcbiAgICB9XFxuXFxuICAgIF9jcmVhdGVDbGFzcyhRdWV1ZSwgW3tcXG4gICAgICBrZXk6IFxcXCJlbnF1ZXVlXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZW5xdWV1ZShpdGVtKSB7XFxuICAgICAgICB2YXIgX3RoaXMkc2l6ZTtcXG5cXG4gICAgICAgIHZhciBub2RlID0gbmV3IFF1ZXVlTm9kZShpdGVtKTtcXG5cXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2xhc3QpKSB7XFxuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfbGFzdCkubmV4dCA9IG5vZGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2xhc3QsIG5vZGUpO1xcblxcbiAgICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KSkgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9maXJzdCwgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9sYXN0KSk7XFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpICsgMSksIF90aGlzJHNpemU7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwiZGVxdWV1ZVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcXVldWUoKSB7XFxuICAgICAgICB2YXIgX3RoaXMkc2l6ZTI7XFxuXFxuICAgICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpKSByZXR1cm4gbnVsbDtcXG5cXG4gICAgICAgIHZhciBkYXRhID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCkuZGF0YTtcXG5cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfZmlyc3QsIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpLm5leHQpO1xcblxcbiAgICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KSkgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9sYXN0LCBudWxsKTtcXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemUyID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpIC0gMSksIF90aGlzJHNpemUyO1xcbiAgICAgICAgcmV0dXJuIGRhdGE7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicGVla1xcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBlZWsoKSB7XFxuICAgICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpKSByZXR1cm4gbnVsbDtcXG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KS5kYXRhO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImlzRW1wdHlcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0VtcHR5KCkge1xcbiAgICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpID09PSBudWxsO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50UXVldWVcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludFF1ZXVlKCkge1xcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xcblxcbiAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KTtcXG5cXG4gICAgICAgIHdoaWxlIChjdXJyKSB7XFxuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnIuZGF0YSk7XFxuICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJzaXplXFxcIixcXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpO1xcbiAgICAgIH1cXG4gICAgfV0pO1xcblxcbiAgICByZXR1cm4gUXVldWU7XFxuICB9KCk7XFxuXFxuICB2YXIgX2ZpcnN0ID0gbmV3IFdlYWtNYXAoKTtcXG5cXG4gIHZhciBfbGFzdCA9IG5ldyBXZWFrTWFwKCk7XFxuXFxuICB2YXIgX3NpemUgPSBuZXcgV2Vha01hcCgpO1xcblxcbiAgcmV0dXJuIFF1ZXVlO1xcbn0oKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL1F1ZXVlLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvU3RhY2suanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvU3RhY2suanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG52YXIgU3RhY2sgPSBmdW5jdGlvbiAoKSB7XFxuICB2YXIgdG9wID0gU3ltYm9sKCd0b3AnKTsgLy9UbyBrZWVwIHRvcCBhcyBwcml2YXRlIGluIHN0YWNrXFxuXFxuICB2YXIgU3RhY2tOb2RlID0gZnVuY3Rpb24gU3RhY2tOb2RlKGRhdGEpIHtcXG4gICAgdmFyIG5leHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XFxuXFxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGFja05vZGUpO1xcblxcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xcbiAgICB0aGlzLm5leHQgPSBuZXh0O1xcbiAgfTtcXG5cXG4gIHZhciBTdGFjayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICAgIGZ1bmN0aW9uIFN0YWNrKCkge1xcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGFjayk7XFxuXFxuICAgICAgdGhpc1t0b3BdID0gbnVsbDtcXG4gICAgfVxcblxcbiAgICBfY3JlYXRlQ2xhc3MoU3RhY2ssIFt7XFxuICAgICAga2V5OiBcXFwicHVzaFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2goaXRlbSkge1xcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgU3RhY2tOb2RlKGl0ZW0pO1xcbiAgICAgICAgbm9kZS5uZXh0ID0gdGhpc1t0b3BdO1xcbiAgICAgICAgdGhpc1t0b3BdID0gbm9kZTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwb3BcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwb3AoKSB7XFxuICAgICAgICBpZiAodGhpc1t0b3BdID09PSBudWxsKSByZXR1cm4gbnVsbDtcXG4gICAgICAgIHZhciBpdGVtID0gdGhpc1t0b3BdLmRhdGE7XFxuICAgICAgICB0aGlzW3RvcF0gPSB0aGlzW3RvcF0ubmV4dDtcXG4gICAgICAgIHJldHVybiBpdGVtO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInBlZWtcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwZWVrKCkge1xcbiAgICAgICAgaWYgKHRoaXNbdG9wXSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XFxuICAgICAgICByZXR1cm4gdGhpc1t0b3BdLmRhdGE7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwiaXNFbXB0eVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XFxuICAgICAgICByZXR1cm4gdGhpc1t0b3BdID09PSBudWxsO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50U3RhY2tcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludFN0YWNrKCkge1xcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xcbiAgICAgICAgdmFyIGN1cnIgPSB0aGlzW3RvcF07XFxuXFxuICAgICAgICB3aGlsZSAoY3Vycikge1xcbiAgICAgICAgICByZXN1bHQucHVzaChjdXJyLmRhdGEpO1xcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgfSAvLyBjb25zb2xlLmxvZyhyZXN1bHQpXFxuXFxuXFxuICAgICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInN0YWNrVG9TdHJpbmdcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFja1RvU3RyaW5nKCkge1xcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucHJpbnRTdGFjaygpKTtcXG4gICAgICB9XFxuICAgIH1dKTtcXG5cXG4gICAgcmV0dXJuIFN0YWNrO1xcbiAgfSgpO1xcblxcbiAgcmV0dXJuIFN0YWNrO1xcbn0oKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL1N0YWNrLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvVHJpZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL1RyaWUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5ldmFsKFwidmFyIF90ZW1wLCBfcm9vdDtcXG5cXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcXFwidW5kZWZpbmVkXFxcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXFxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cXFwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1xcXCJyZXR1cm5cXFwiXSAhPSBudWxsKSBpdFtcXFwicmV0dXJuXFxcIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxcblxcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXFxcInN0cmluZ1xcXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcXFwiT2JqZWN0XFxcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXFxcIk1hcFxcXCIgfHwgbiA9PT0gXFxcIlNldFxcXCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXFxcIkFyZ3VtZW50c1xcXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XFxuXFxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXFxcInZhbHVlXFxcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5nZXQpIHsgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjcmlwdG9yLnZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5zZXQpIHsgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpOyB9IGVsc2UgeyBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFxcXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cXG5cXG4vKiBcXG5cXG5odHRwczovL2xlZXRjb2RlLmNvbS9wcm9ibGVtcy9pbXBsZW1lbnQtdHJpZS1wcmVmaXgtdHJlZS9zb2x1dGlvbi9cXG5WaXN1YWxpemUgYSB0cmllIGFzIGEgMjYgYnkgbiBtYXRyaXggd2l0aCBvbmUgd2F5IHJlbGF0aW9uIGJldHdlZW4gdGhlIGxldHRlcnMgaW4gZGlmZmVyZW50IGxldmVscy4gbiBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBsb25nZXN0IHdvcmQgaW4gdGhlIHRyaWUuXFxuXFxud29yZHMg4oCUIGRlZWQsIG5vbSwgbm9vblxcblxcbmEgIGIgIGMgIGQgIGUgIGYgIGcgIGggIGkgIGogIGsgIGwgIG0gIG4gIG8gLi4uXFxuICAgICAgICAgICDihpggICAgICAgICAgICAgICAgICAgICAgICAgICAg4oaYIFxcbmEgIGIgIGMgIGQgIGUgIGYgIGcgIGggIGkgIGogIGsgIGwgIG0gIG4gIG8gLi4uXFxuICAgICAgICAgICAg4oaTICAgICAgICAgICAgICAgICAgICAgICAgICAg4oaZIOKGk1xcbiAgICAgICAgICAgIOKGkyAgICAgICAgICAgICAgICAgICAgICAgICDihpkgICDihpNcXG5hICBiICBjICBkICBlICBmICBnICBoICBpICBqICBrICBsICBtICBuICBvIC4uLlxcbiAgICAgICAgICDihpkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGmVxcbmEgIGIgIGMgIGQgIGUgIGYgIGcgIGggIGkgIGogIGsgIGwgIG0gIG4gIG8gLi4uXFxuXFxuVGhlIHJvb3Qgd291bGQgbG9vayBsaWtlOlxcblxcbmNvbnN0IHRyaWUgPVxcbntcXG4gIGQ6IHsgZTogeyBlOiB7IGQ6IHsgaXNXb3JkOiB0cnVlIH0gfSB9IH0sXFxuICBuOiB7IG86IHsgbzogeyBuOiB7IGlzV29yZDogdHJ1ZSB9IH0sXFxuICAgICAgIG06IHsgaXNXb3JkOiB0cnVlIH0gfVxcbiAgICAgfVxcbn1cXG5cXG4qL1xcbi8vIFdlJ2xsIGFzc3VtZSB0aGF0IHRoZSB3b3JkcyBwcm92aWRlZCB3aWxsIGNvbnNpc3Qgb2YgbGV0dGVycyBvbmx5IGFuZCBhcmUgYWx3YXlzIGxvd2VyY2FzZVxcbnZhciBUcmllID0gKF90ZW1wID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gIGZ1bmN0aW9uIFRyaWUoKSB7XFxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmllKTtcXG5cXG4gICAgX3Jvb3Quc2V0KHRoaXMsIHtcXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICB2YWx1ZTogdm9pZCAwXFxuICAgIH0pO1xcblxcbiAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3Jvb3QsIHt9KTtcXG4gIH1cXG5cXG4gIF9jcmVhdGVDbGFzcyhUcmllLCBbe1xcbiAgICBrZXk6IFxcXCJfdHJhdmVyc2VcXFwiLFxcbiAgICAvLyBoZWxwZXIuIENoYW5nZSB0byBwcml2YXRlIHdoZW4gcHJpdmF0ZSBpbnN0YW5jZSBtZXRob2RzIGFyZSBzdXBwb3J0ZWRcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF90cmF2ZXJzZSh3b3JkKSB7XFxuICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpO1xcblxcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih3b3JkKSxcXG4gICAgICAgICAgX3N0ZXA7XFxuXFxuICAgICAgdHJ5IHtcXG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XFxuICAgICAgICAgIHZhciBjaCA9IF9zdGVwLnZhbHVlO1xcbiAgICAgICAgICBpZiAoIWN1cnIpIHJldHVybiBudWxsO1xcbiAgICAgICAgICBjdXJyID0gY3VycltjaF07XFxuICAgICAgICB9XFxuICAgICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xcbiAgICAgIH0gZmluYWxseSB7XFxuICAgICAgICBfaXRlcmF0b3IuZigpO1xcbiAgICAgIH1cXG5cXG4gICAgICByZXR1cm4gY3VycjtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJpbnNlcnRcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0KHdvcmQpIHtcXG4gICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCk7XFxuXFxuICAgICAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih3b3JkKSxcXG4gICAgICAgICAgX3N0ZXAyO1xcblxcbiAgICAgIHRyeSB7XFxuICAgICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xcbiAgICAgICAgICB2YXIgY2ggPSBfc3RlcDIudmFsdWU7XFxuICAgICAgICAgIGN1cnJbY2hdID0gY3VycltjaF0gPyBjdXJyW2NoXSA6IHt9O1xcbiAgICAgICAgICBjdXJyID0gY3VycltjaF07XFxuICAgICAgICB9XFxuICAgICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgICBfaXRlcmF0b3IyLmUoZXJyKTtcXG4gICAgICB9IGZpbmFsbHkge1xcbiAgICAgICAgX2l0ZXJhdG9yMi5mKCk7XFxuICAgICAgfVxcblxcbiAgICAgIGN1cnIuaXNXb3JkID0gdHJ1ZTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJzZWFyY2hcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VhcmNoKHdvcmQpIHtcXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX3RyYXZlcnNlKHdvcmQpO1xcblxcbiAgICAgIHJldHVybiBub2RlICE9PSBudWxsICYmIG5vZGUuaXNXb3JkID09PSB0cnVlO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInN0YXJ0c1dpdGhcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRzV2l0aCh3b3JkKSB7XFxuICAgICAgcmV0dXJuIHRoaXMuX3RyYXZlcnNlKHdvcmQpICE9PSBudWxsO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInJvb3RcXFwiLFxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KTtcXG4gICAgfVxcbiAgfV0pO1xcblxcbiAgcmV0dXJuIFRyaWU7XFxufSgpLCBfcm9vdCA9IG5ldyBXZWFrTWFwKCksIF90ZW1wKTtcXG5tb2R1bGUuZXhwb3J0cyA9IFRyaWU7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvVHJpZS5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxcblxcbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxcblxcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XFxuXFxudmFyIExpbmtlZExpc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0xpbmtlZExpc3QgKi8gXFxcIi4vc3JjL0xpbmtlZExpc3QuanNcXFwiKTtcXG5cXG52YXIgSGFzaFRhYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9IYXNoVGFibGUgKi8gXFxcIi4vc3JjL0hhc2hUYWJsZS5qc1xcXCIpO1xcblxcbnZhciBTdGFjayA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU3RhY2sgKi8gXFxcIi4vc3JjL1N0YWNrLmpzXFxcIik7XFxuXFxudmFyIFF1ZXVlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9RdWV1ZSAqLyBcXFwiLi9zcmMvUXVldWUuanNcXFwiKTtcXG5cXG52YXIgVHJlZVRyYXZlcnNhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQmluYXJ5VHJlZVRyYXZlcnNhbCAqLyBcXFwiLi9zcmMvQmluYXJ5VHJlZVRyYXZlcnNhbC5qc1xcXCIpO1xcblxcbnZhciBCaW5hcnlTZWFyY2hUcmVlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9CaW5hcnlTZWFyY2hUcmVlICovIFxcXCIuL3NyYy9CaW5hcnlTZWFyY2hUcmVlLmpzXFxcIik7XFxuXFxudmFyIFRyaWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1RyaWUgKi8gXFxcIi4vc3JjL1RyaWUuanNcXFwiKTtcXG5cXG52YXIgQmluYXJ5SGVhcCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQmluYXJ5SGVhcCAqLyBcXFwiLi9zcmMvQmluYXJ5SGVhcC9pbmRleC5qc1xcXCIpO1xcblxcbnZhciBHcmFwaFRyYXZlcnNhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vR3JhcGhUcmF2ZXJzYWwgKi8gXFxcIi4vc3JjL0dyYXBoVHJhdmVyc2FsLmpzXFxcIik7XFxuXFxudmFyIEdyYXBoID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9HcmFwaCAqLyBcXFwiLi9zcmMvR3JhcGguanNcXFwiKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQoe1xcbiAgTGlua2VkTGlzdDogTGlua2VkTGlzdCxcXG4gIEhhc2hUYWJsZTogSGFzaFRhYmxlLFxcbiAgU3RhY2s6IFN0YWNrLFxcbiAgUXVldWU6IFF1ZXVlLFxcbiAgVHJlZVRyYXZlcnNhbDogVHJlZVRyYXZlcnNhbCxcXG4gIEJpbmFyeVNlYXJjaFRyZWU6IEJpbmFyeVNlYXJjaFRyZWUsXFxuICBUcmllOiBUcmllXFxufSwgQmluYXJ5SGVhcCwge1xcbiAgR3JhcGhUcmF2ZXJzYWw6IEdyYXBoVHJhdmVyc2FsLFxcbiAgR3JhcGg6IEdyYXBoXFxufSk7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvaW5kZXguanM/XCIpO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYWluIHtcbiAgY29uc3RydWN0b3IoZGlzcGxheSwgY291bnQgPSAwKSB7XG4gICAgdGhpcy5kaXNwbGF5ID0gZGlzcGxheVxuICAgIHRoaXMuY291bnQgPSBjb3VudFxuICAgIHRoaXMubWluID0gMFxuICB9XG5cbiAgc2V0Q291bnQgPSAoY291bnQpID0+IHtcbiAgICB0aGlzLmNvdW50ID0gY291bnRcbiAgfVxuXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0Q291bnQoMClcbiAgICB0aGlzLnVwZGF0ZUNoYWluKClcbiAgfVxuXG4gIGluY3JlbWVudENvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5jb3VudCArIDFcbiAgICB0aGlzLnNldENvdW50KGNvdW50KVxuICAgIHRoaXMudXBkYXRlQ2hhaW4oKVxuICB9XG5cbiAgZGVjcmVtZW50Q291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmNvdW50XG4gICAgdGhpcy5jb3VudCA9IE1hdGgubWF4KGNvdW50IC0gMSwgdGhpcy5taW4pXG4gICAgdGhpcy51cGRhdGVDaGFpbigpXG4gIH1cblxuICB1cGRhdGVDaGFpbiA9ICgpID0+IHtcbiAgICB0aGlzLmRpc3BsYXkudXBkYXRlRWxlbWVudCgnI2NoYWluJywgdGhpcy5jb3VudClcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgdGhpcy51cGRhdGVDaGFpbigpXG4gIH1cbn1cbiIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9Nb3ZpbmdPYmplY3QnXG5cbmNvbnN0IHIgPSAxMCxcbiAgYyA9ICcjZjZlODcyJyxcbiAgdiA9IHsgZHg6IDEsIGR5OiAxIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGQgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwb3MsXG4gICAgcmFkaXVzID0gcixcbiAgICB3b3JsZCxcbiAgICBzcHJpdGUsXG4gICAgc2l6ZSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9LFxuICAgIHZlbCA9IHYsXG4gICAgY29sb3IgPSBjXG4gICkge1xuICAgIHN1cGVyKHBvcywgcmFkaXVzLCB3b3JsZCwgc3ByaXRlLCBzaXplLCB2ZWwsIGNvbG9yKVxuICAgIHRoaXMuaW5kZXBlbmRlbmNlID0gdHJ1ZVxuICAgIHRoaXMuY2hhaW5Qb3MgPSBudWxsXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsXG4gICAgdGhpcy5uZXh0Q2hpbGQgPSBudWxsXG4gICAgdGhpcy5wb3NDYWNoZSA9IFtdXG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMubW92ZXMuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c1ByZWRhdG9yID0gdGhpcy5oaXRzUHJlZGF0b3IuYmluZCh0aGlzKVxuICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICAgIHRoaXMuY2xpY2tpbmcgPSBmYWxzZVxuICB9XG5cbiAgc2V0Q2xpY2tpbmcgPSAoY2xpY2tpbmcpID0+IHtcbiAgICB0aGlzLmNsaWNraW5nID0gY2xpY2tpbmdcbiAgfVxuXG4gIHNldFBhcmVudCA9IChwYXJlbnQpID0+IHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICB9XG5cbiAgc2V0Q2hhaW5Qb3MgPSAoY2hhaW5Qb3MpID0+IHtcbiAgICB0aGlzLmNoYWluUG9zID0gY2hhaW5Qb3NcbiAgfVxuXG4gIHNldE5leHRDaGlsZCA9IChjaGlsZCkgPT4ge1xuICAgIHRoaXMubmV4dENoaWxkID0gY2hpbGRcbiAgfVxuXG4gIHNldEluZGVwZW5kZW5jZSA9IChpbmRlcGVuZGVuY2UpID0+IHtcbiAgICB0aGlzLmluZGVwZW5kZW5jZSA9IGluZGVwZW5kZW5jZVxuICB9XG5cbiAgaXNJbmRlcGVuZGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5pbmRlcGVuZGVuY2VcbiAgfVxuXG4gIGF2b2lkUHJlZGF0b3IgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaW5kZXBlbmRlbmNlKSB7XG4gICAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcyxcbiAgICAgICAgcG9zID0geyB4OiB4ICsgdGhpcy5jdXJyRGlyWzBdLCB5OiB5ICsgdGhpcy5jdXJyRGlyWzFdIH1cblxuICAgICAgdGhpcy5zZXRSYW5kb21EaXIoKVxuICAgICAgcG9zID0geyB4OiB4ICsgdGhpcy5jdXJyRGlyWzBdLCB5OiB5ICsgdGhpcy5jdXJyRGlyWzFdIH1cblxuICAgICAgdGhpcy5ib3VuY2VCYWNrKHBvcylcbiAgICB9XG4gIH1cblxuICBoaXRzUHJlZGF0b3IoZ2FtZSkge1xuICAgIGlmICh0aGlzLmlzSW5kZXBlbmRlbnQoKSkgZ2FtZS5kZXN0cm95Q2hpbGQodGhpcylcbiAgICBlbHNlIHtcbiAgICAgIGxldCBjdXJyID0gdGhpcy5wYXJlbnQuZGVsZXRlTGFzdENoaWxkKClcbiAgICAgIHdoaWxlIChjdXJyICYmIGN1cnIgIT09IHRoaXMpIHtcbiAgICAgICAgY3VyciA9IHRoaXMucGFyZW50LmRlbGV0ZUxhc3RDaGlsZCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW92ZXMocG9zKSB7XG4gICAgaWYgKHRoaXMuaXNJbmRlcGVuZGVudCgpKSBzdXBlci5tb3ZlcygpXG4gICAgZWxzZSB7XG4gICAgICAvLyBSZW1vdmVkIGVhc2luZyBmb3Igbm93LiBNYXliZSBhZGQgZm9yIGhpZ2hlciBsZXZlbHMuIENoaWxkcmVuIHRha2UgdG9vIGxvbmcgbG9uZyB0byBtb3ZlLlxuICAgICAgLy8gY29uc3QgZWFzaW5nID0gTWF0aC5tYXgoMSAtIHRoaXMuY2hhaW5Qb3MgKiAwLjEzLCAwLjEpLFxuICAgICAgY29uc3QgZWFzaW5nID0gMSxcbiAgICAgICAgciA9IHRoaXMucmFkaXVzLFxuICAgICAgICBuZXh0Q2hpbGQgPSB0aGlzLm5leHRDaGlsZFxuXG4gICAgICBsZXQgb2Zmc2V0XG4gICAgICBpZiAodGhpcy5jbGlja2luZykgb2Zmc2V0ID0gMFxuICAgICAgZWxzZSBvZmZzZXQgPSAyICogKHIgKyAxKSAqIHRoaXMuY2hhaW5Qb3MgKyAodGhpcy5wYXJlbnQucmFkaXVzIC0gcilcblxuICAgICAgc3VwZXIubW92ZXNXaXRoQ3Vyc29yKHBvcywgZWFzaW5nLCBvZmZzZXQpXG5cbiAgICAgIGlmIChuZXh0Q2hpbGQpXG4gICAgICAgIG5leHRDaGlsZC5tb3Zlcyh0aGlzLnBvc0NhY2hlLmxlbmd0aCA/IHRoaXMucG9zQ2FjaGVbMF0gOiBwb3MpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIFJlbGF0ZWQgdG8gdGhlIERPTSBhbmQgZGlzcGxheSAoY3JlYXRpbmcgZWxlbWVudHMsIHVwZGF0aW5nIGVsZW1lbnRzIGV0Yy4pXG4gKi9cblxuaW1wb3J0IGNoaWxkQ291bnRJbWcgZnJvbSAnLi4vaW1ncy9jb3VudC5wbmcnXG5pbXBvcnQgd29ybUxlZnQgZnJvbSAnLi4vaW1ncy93b3JtLWxlZnQucG5nJ1xuaW1wb3J0IHdvcm1SaWdodCBmcm9tICcuLi9pbWdzL3dvcm0tcmlnaHQucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET01EaXNwbGF5IHtcbiAgY29uc3RydWN0b3IoeyB3aWR0aCA9IDQwMCwgaGVpZ2h0ID0gNzAwIH0pIHtcbiAgICB0aGlzLndvcmxkU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9XG4gICAgdGhpcy5yZW5kZXJDaGFpbiA9IHRoaXMucmVuZGVyQ2hhaW4uYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyRW5lcmd5ID0gdGhpcy5yZW5kZXJFbmVyZ3kuYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyU2NvcmUgPSB0aGlzLnJlbmRlclNjb3JlLmJpbmQodGhpcylcbiAgfVxuXG4gIGNyZWF0ZUltYWdlID0gKHNyYywgY2xhc3NOYW1lLCBpZCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nLnNyYyA9IHNyY1xuICAgIGlmIChjbGFzc05hbWUpIGltZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICBpZiAoaWQpIGltZy5pZCA9IGlkXG4gICAgcmV0dXJuIGltZ1xuICB9XG5cbiAgcmVtb3ZlQW5pbWF0aW9uID0gKHdvcm1DbGFzcykgPT4ge1xuICAgIGNvbnN0IHdvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHdvcm1DbGFzcylbMF1cbiAgICBpZiAod29ybSkgd29ybS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJylcbiAgfVxuXG4gIGFuaW1hdGUgPSAod29ybUNsYXNzKSA9PiB7XG4gICAgY29uc3Qgd29ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUod29ybUNsYXNzKVswXVxuICAgIGlmICh3b3JtKSB3b3JtLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKVxuICB9XG5cbiAgY3JlYXRlRWxlbWVudCA9ICh0YWcsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXG4gICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZSkpIHtcbiAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBjbGFzc05hbWUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpZCkgZWxlbWVudC5pZCA9IGlkXG4gICAgaWYgKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJUZXh0ID0gY29udGVudFxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBnZXRFbGVtZW50ID0gKHNlbGVjdG9yKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gIH1cblxuICB1cGRhdGVFbGVtZW50ID0gKHNlbGVjdG9yLCB2YWwpID0+IHtcbiAgICBjb25zdCBlbGVtID0gdGhpcy5nZXRFbGVtZW50KHNlbGVjdG9yKVxuICAgIGlmIChlbGVtKSBlbGVtLmlubmVyVGV4dCA9IHZhbFxuICB9XG5cbiAgY2xlYXJFbGVtZW50ID0gKHNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgZWxlbSA9IHRoaXMuZ2V0RWxlbWVudChzZWxlY3RvcilcbiAgICBpZiAoZWxlbSkgZWxlbS5pbm5lclRleHQgPSAnJ1xuICB9XG5cbiAgcmVuZGVyR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZ2FtZScsICdnYW1lJylcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWUpXG4gIH1cblxuICByZW5kZXJUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RpdGxlJywgbnVsbCksXG4gICAgICBoZWFkaW5nID0gdGhpcy5jcmVhdGVFbGVtZW50KCdoMScsIG51bGwsIG51bGwsICdDSElDS0VOIE1FRVRTIFdPUk0nKSxcbiAgICAgIGdhbWUgPSB0aGlzLmdldEVsZW1lbnQoJyNnYW1lJylcblxuICAgIGdhbWUuYXBwZW5kKHRpdGxlKVxuICAgIHRpdGxlLmFwcGVuZChoZWFkaW5nKVxuICB9XG5cbiAgcmVuZGVyV29ybGQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd29ybGRXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgJ3dvcmxkLXdyYXBwZXInLFxuICAgICAgICAnd29ybGQtd3JhcHBlcidcbiAgICAgICksXG4gICAgICB3b3JsZCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnY2FudmFzJywgbnVsbCwgJ3dvcmxkJyksXG4gICAgICB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMud29ybGRTaXplLFxuICAgICAgZ2FtZSA9IHRoaXMuZ2V0RWxlbWVudCgnI2dhbWUnKVxuXG4gICAgd29ybGQud2lkdGggPSB0aGlzLndvcmxkU2l6ZS53aWR0aFxuICAgIHdvcmxkLmhlaWdodCA9IHRoaXMud29ybGRTaXplLmhlaWdodFxuICAgIGdhbWUuYXBwZW5kKHdvcmxkV3JhcHBlcilcbiAgICB3b3JsZFdyYXBwZXIuYXBwZW5kKHdvcmxkKVxuICAgIHdvcmxkV3JhcHBlci5zdHlsZS53aWR0aCA9IHdpZHRoICsgMiArICdweCdcbiAgICB3b3JsZFdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgMiArICdweCdcbiAgfVxuXG4gIHJlbmRlckxlZ2VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdsZWdlbmQnLCAnbGVnZW5kJyksXG4gICAgICB3b3JsZFdyYXBwZXIgPSB0aGlzLmdldEVsZW1lbnQoJyN3b3JsZC13cmFwcGVyJylcbiAgICB3b3JsZFdyYXBwZXIuYXBwZW5kKGxlZ2VuZClcbiAgfVxuXG4gIHJlbmRlckVuZXJneSgpIHtcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldEVsZW1lbnQoJyNsZWdlbmQnKSxcbiAgICAgIGVuZXJneVdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAnZW5lcmd5LXdyYXBwZXInLFxuICAgICAgICAnZW5lcmd5LXdyYXBwZXInXG4gICAgICApXG5cbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQoZW5lcmd5V3JhcHBlcilcbiAgICB0aGlzLnVwZGF0ZUVuZXJneUJhcig1KVxuICB9XG5cbiAgcmVuZGVyQ2hhaW4oKSB7XG4gICAgY29uc3QgY2hhaW5XcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY2hhaW4td3JhcHBlcicpLFxuICAgICAgY291bnRJbWcgPSB0aGlzLmNyZWF0ZUltYWdlKGNoaWxkQ291bnRJbWcsICdpbWFnZScsICdjaGFpbi1jb3VudCcpLFxuICAgICAgY2hhaW4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnbGVnZW5kLXRleHQnLCAnY2hhaW4nKSxcbiAgICAgIGxlZ2VuZCA9IHRoaXMuZ2V0RWxlbWVudCgnI2xlZ2VuZCcpXG5cbiAgICBsZWdlbmQuYXBwZW5kKGNoYWluV3JhcHBlcilcbiAgICBjaGFpbldyYXBwZXIuYXBwZW5kKGNvdW50SW1nKVxuICAgIGNoYWluV3JhcHBlci5hcHBlbmQoY2hhaW4pXG4gIH1cblxuICB1cGRhdGVFbmVyZ3lCYXIoY291bnQpIHtcbiAgICBjb25zdCBlVyA9IHRoaXMuZ2V0RWxlbWVudCgnI2VuZXJneS13cmFwcGVyJyksXG4gICAgICBpID0gTWF0aC5taW4oY291bnQsIDUpICogMlxuXG4gICAgaWYgKGVXLmNoaWxkRWxlbWVudENvdW50ID4gaSkge1xuICAgICAgd2hpbGUgKGVXLmNoaWxkRWxlbWVudENvdW50ID4gaSkge1xuICAgICAgICBpZiAoZVcuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHJldHVyblxuICAgICAgICBlVy5yZW1vdmVDaGlsZChlVy5sYXN0Q2hpbGQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlVy5jaGlsZEVsZW1lbnRDb3VudCA8IGkpIHtcbiAgICAgIGxldCBsZWZ0ID0gdHJ1ZSxcbiAgICAgICAgd29ybUNvdW50ID0gZVcuY2hpbGRFbGVtZW50Q291bnRcblxuICAgICAgaWYgKHdvcm1Db3VudCAlIDIgIT09IDApIHtcbiAgICAgICAgZVcuYXBwZW5kKHRoaXMuY3JlYXRlSW1hZ2Uod29ybVJpZ2h0LCAnd29ybS1yaWdodCcpKVxuICAgICAgICB3b3JtQ291bnQrK1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAod29ybUNvdW50IDwgaSkge1xuICAgICAgICBjb25zdCB3b3JtTCA9IHRoaXMuY3JlYXRlSW1hZ2Uod29ybUxlZnQsICd3b3JtLWxlZnQnKSxcbiAgICAgICAgICB3b3JtUiA9IHRoaXMuY3JlYXRlSW1hZ2Uod29ybVJpZ2h0LCAnd29ybS1yaWdodCcpXG5cbiAgICAgICAgaWYgKGxlZnQpIHtcbiAgICAgICAgICBlVy5hcHBlbmQod29ybUwpXG4gICAgICAgICAgbGVmdCA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSBpZiAoIWxlZnQpIHtcbiAgICAgICAgICBlVy5hcHBlbmQod29ybVIpXG4gICAgICAgICAgbGVmdCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICB3b3JtQ291bnQrK1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclNjb3JlKCkge1xuICAgIGNvbnN0IHNjb3JlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2xlZ2VuZC10ZXh0JywgJ3Njb3JlJ10sICdzY29yZScpLFxuICAgICAgbGVnZW5kID0gdGhpcy5nZXRFbGVtZW50KCcjbGVnZW5kJylcblxuICAgIGxlZ2VuZC5hcHBlbmQoc2NvcmUpXG4gIH1cblxuICByZW5kZXJHYW1lRW5kID0gKGhhbmRsZUNsaWNrUmVwbGF5LCBzY29yZSwgaGlnaFNjb3JlKSA9PiB7XG4gICAgY29uc3QgZ2FtZUVuZFdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdlbmQtd3JhcHBlcicpLFxuICAgICAgZ2FtZUVuZCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2dhbWUtZW5kJyksXG4gICAgICB3b3JsZFdyYXBwZXIgPSB0aGlzLmdldEVsZW1lbnQoJyN3b3JsZC13cmFwcGVyJylcblxuICAgIGdhbWVFbmRXcmFwcGVyLnN0eWxlLndpZHRoID0gdGhpcy53b3JsZFNpemUud2lkdGggKyA0ICsgJ3B4J1xuICAgIHdvcmxkV3JhcHBlci5hcHBlbmQoZ2FtZUVuZFdyYXBwZXIpXG4gICAgZ2FtZUVuZFdyYXBwZXIuYXBwZW5kKGdhbWVFbmQpXG4gICAgZ2FtZUVuZFdyYXBwZXIuc3R5bGUudG9wID0gOTggKyB0aGlzLndvcmxkU2l6ZS5oZWlnaHQgLyA0ICsgJ3B4J1xuXG4gICAgdGhpcy5yZW5kZXJHYW1lT3Zlck1lc3NhZ2UoKVxuICAgIHRoaXMucmVuZGVyRW5kU2NvcmUoc2NvcmUsIGhpZ2hTY29yZSlcbiAgICB0aGlzLnJlbmRlclJlcGxheUJ1dHRvbihoYW5kbGVDbGlja1JlcGxheSlcbiAgfVxuXG4gIGNsZWFyR2FtZUVuZCA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lRW5kID0gdGhpcy5nZXRFbGVtZW50KCcuZW5kLXdyYXBwZXInKSxcbiAgICAgIHdvcmxkV3JhcHBlciA9IHRoaXMuZ2V0RWxlbWVudCgnLndvcmxkLXdyYXBwZXInKVxuXG4gICAgaWYgKGdhbWVFbmQpIHdvcmxkV3JhcHBlci5yZW1vdmVDaGlsZChnYW1lRW5kKVxuICB9XG5cbiAgcmVuZGVyR2FtZU92ZXJNZXNzYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdnYW1lLW92ZXInLCBudWxsLCAnR2FtZSBPdmVyIScpLFxuICAgICAgZ2FtZUVuZCA9IHRoaXMuZ2V0RWxlbWVudCgnLmdhbWUtZW5kJylcblxuICAgIGdhbWVFbmQuYXBwZW5kKG1lc3NhZ2UpXG4gIH1cblxuICByZW5kZXJSZXBsYXlCdXR0b24gPSAoaGFuZGxlQ2xpY2tSZXBsYXkpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdidG4nLCAncmVwbGF5JyksXG4gICAgICBnYW1lRW5kID0gdGhpcy5nZXRFbGVtZW50KCcuZ2FtZS1lbmQnKVxuXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9ICdSZXBsYXknXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tSZXBsYXkpXG4gICAgZ2FtZUVuZC5hcHBlbmQoYnV0dG9uKVxuICB9XG5cbiAgcmVuZGVyRW5kU2NvcmUgPSAoc2NvcmUsIGhpZ2hTY29yZSkgPT4ge1xuICAgIGNvbnN0IGVuZFNjb3JlV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3dyYXBwZXInKSxcbiAgICAgIGVuZFNjb3JlTGFiZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgJ3Njb3JlLWxhYmVsJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJ1lvdXIgc2NvcmU6ICdcbiAgICAgICksXG4gICAgICBlbmRTY29yZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICAnc2NvcmUnLFxuICAgICAgICAnZW5kLXNjb3JlJyxcbiAgICAgICAgc2NvcmUudG9TdHJpbmcoKVxuICAgICAgKSxcbiAgICAgIGJlc3RTY29yZVdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3cmFwcGVyJyksXG4gICAgICBiZXN0U2NvcmVMYWJlbCA9IHRoaXMuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICAnc2NvcmUtbGFiZWwnLFxuICAgICAgICBudWxsLFxuICAgICAgICAnQmVzdCBzY29yZTogJ1xuICAgICAgKSxcbiAgICAgIGJlc3RTY29yZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICAnc2NvcmUnLFxuICAgICAgICAnYmVzdC1zY29yZScsXG4gICAgICAgIGhpZ2hTY29yZS50b1N0cmluZygpXG4gICAgICApLFxuICAgICAgZ2FtZUVuZCA9IHRoaXMuZ2V0RWxlbWVudCgnLmdhbWUtZW5kJylcblxuICAgIGVuZFNjb3JlV3JhcHBlci5hcHBlbmQoZW5kU2NvcmVMYWJlbClcbiAgICBlbmRTY29yZVdyYXBwZXIuYXBwZW5kKGVuZFNjb3JlKVxuICAgIGJlc3RTY29yZVdyYXBwZXIuYXBwZW5kKGJlc3RTY29yZUxhYmVsKVxuICAgIGJlc3RTY29yZVdyYXBwZXIuYXBwZW5kKGJlc3RTY29yZSlcbiAgICBnYW1lRW5kLmFwcGVuZChlbmRTY29yZVdyYXBwZXIpXG4gICAgZ2FtZUVuZC5hcHBlbmQoYmVzdFNjb3JlV3JhcHBlcilcbiAgfVxufVxuIiwiaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1ncy9sb2dvLnBuZydcbmltcG9ydCBET01EaXNwbGF5IGZyb20gJy4vRE9NRGlzcGxheSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50cm8gZXh0ZW5kcyBET01EaXNwbGF5IHtcbiAgY29uc3RydWN0b3Iod29ybGRTaXplKSB7XG4gICAgc3VwZXIod29ybGRTaXplKVxuICB9XG5cbiAgcmVuZGVyVHV0b3JpYWxCdXR0b24gPSAoaGFuZGxlQ2xpY2tUdXRvcmlhbCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ2J0bicsICd0dXRvcmlhbCcpXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9ICdUdXRvcmlhbCdcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja1R1dG9yaWFsKVxuICAgIHRoaXMuaW50cm9XcmFwcGVyLmFwcGVuZChidXR0b24pXG4gIH1cblxuICByZW5kZXJTdGFydExpbmsgPSAoaGFuZGxlQ2xpY2tTdGFydCkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2EnLCAnc3RhcnQnLCAnc3RhcnQnKVxuICAgIGxpbmsuaW5uZXJUZXh0ID0gJ1R1dG9yaWFscyByIGZvciBub29icy4nXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrU3RhcnQpXG4gICAgdGhpcy5pbnRyb1dyYXBwZXIuYXBwZW5kKGxpbmspXG4gIH1cblxuICByZW5kZXJJbnRybyA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRyb1dyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdpbnRyby13cmFwcGVyJyksXG4gICAgICBpbnRyb1BpYyA9IHRoaXMuY3JlYXRlSW1hZ2UobG9nbywgJ2xvZ28nKSxcbiAgICAgIGludHJvID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnaW50cm8nKSxcbiAgICAgIGludHJvTWVzc2FnZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICAnaW50cm8tbWVzc2FnZScsXG4gICAgICAgIG51bGwsXG4gICAgICAgICdGZWFzdCBvbiB3b3JtcywgcHJvdGVjdCB5b3VyIGNoaWxkcmVuISdcbiAgICAgICksXG4gICAgICB3b3JsZFdyYXBwZXIgPSB0aGlzLmdldEVsZW1lbnQoJyN3b3JsZC13cmFwcGVyJylcbiAgICB3b3JsZFdyYXBwZXIuYXBwZW5kKGludHJvV3JhcHBlcilcblxuICAgIGludHJvLmFwcGVuZChpbnRyb1BpYylcbiAgICBpbnRyby5hcHBlbmQoaW50cm9NZXNzYWdlKVxuICAgIGludHJvV3JhcHBlci5hcHBlbmQoaW50cm8pXG4gICAgaW50cm9XcmFwcGVyLnN0eWxlLndpZHRoID0gdGhpcy53b3JsZFNpemUud2lkdGggKyA0ICsgJ3B4J1xuICAgIGludHJvV3JhcHBlci5zdHlsZS50b3AgPSA5OCArIHRoaXMud29ybGRTaXplLmhlaWdodCAvIDYgKyAncHgnXG4gICAgdGhpcy5pbnRyb1dyYXBwZXIgPSBpbnRyb1dyYXBwZXJcbiAgfVxuXG4gIGNsZWFySW50cm8gPSAoKSA9PiB7XG4gICAgY29uc3Qgd29ybGRXcmFwcGVyID0gdGhpcy5nZXRFbGVtZW50KCcjd29ybGQtd3JhcHBlcicpXG4gICAgd29ybGRXcmFwcGVyLnJlbW92ZUNoaWxkKHRoaXMuaW50cm9XcmFwcGVyKVxuICB9XG59XG4iLCJpbXBvcnQgRE9NRGlzcGxheSBmcm9tICcuL0RPTURpc3BsYXknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1dG9yaWFsIGV4dGVuZHMgRE9NRGlzcGxheSB7XG4gIGNvbnN0cnVjdG9yKHdvcmxkU2l6ZSkge1xuICAgIHN1cGVyKHdvcmxkU2l6ZSlcbiAgICB0aGlzLnNldHRpbWVvdXQgPSBbXVxuICB9XG5cbiAgY2xlYXJQcmV2VHV0ID0gKCkgPT4ge1xuICAgIHdoaWxlICh0aGlzLnNldHRpbWVvdXQubGVuZ3RoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5zZXR0aW1lb3V0LnBvcCgpKVxuICAgIH1cbiAgICB0aGlzLmNsZWFyRWxlbWVudCgnI3R1dC1tc2ctMScpXG4gIH1cblxuICBjaGFuZ2VNZXNzYWdlID0gKHNlbGVjdG9yLCBtZXNzYWdlLCB0aW1lKSA9PiB7XG4gICAgdGhpcy5zZXR0aW1lb3V0LnB1c2goXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50KHNlbGVjdG9yLCBtZXNzYWdlKVxuICAgICAgfSwgdGltZSlcbiAgICApXG4gIH1cblxuICByZW5kZXJNb3ZlUGFyZW50VHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHR1dG9yaWFsV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3R1dG9yaWFsLXdyYXBwZXInKSxcbiAgICAgIG1lc3NhZ2UxID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgJ3R1dG9yaWFsLW1lc3NhZ2UnLFxuICAgICAgICAndHV0LW1zZy0wJyxcbiAgICAgICAgJ01vdmUgeW91ciBtb3VzZSB0byBtb3ZlIHRoZSBjaGlja2VuLidcbiAgICAgICksXG4gICAgICBtZXNzYWdlMiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3R1dG9yaWFsLW1lc3NhZ2UnLCAndHV0LW1zZy0xJyksXG4gICAgICB3b3JsZFdyYXBwZXIgPSB0aGlzLmdldEVsZW1lbnQoJyN3b3JsZC13cmFwcGVyJylcblxuICAgIHdvcmxkV3JhcHBlci5hcHBlbmQodHV0b3JpYWxXcmFwcGVyKVxuICAgIHR1dG9yaWFsV3JhcHBlci5zdHlsZS53aWR0aCA9IHRoaXMud29ybGRTaXplLndpZHRoICsgNCArICdweCdcbiAgICB0dXRvcmlhbFdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy53b3JsZFNpemUuaGVpZ2h0ICsgNCArICdweCdcbiAgICBtZXNzYWdlMi5zdHlsZS53aWR0aCA9IHRoaXMud29ybGRTaXplLndpZHRoICsgNCArICdweCdcbiAgICBtZXNzYWdlMi5zdHlsZS50b3AgPSB0aGlzLndvcmxkU2l6ZS5oZWlnaHQgLSAzNiArICdweCdcbiAgICB0dXRvcmlhbFdyYXBwZXIuYXBwZW5kKG1lc3NhZ2UxKVxuICAgIHR1dG9yaWFsV3JhcHBlci5hcHBlbmQobWVzc2FnZTIpXG5cbiAgICB0aGlzLmNoYW5nZU1lc3NhZ2UoXG4gICAgICAnI3R1dC1tc2ctMScsXG4gICAgICAnUHJlc3MgU1BBQ0UgdG8gY29udGludWUgYW5kIEVOVEVSIHRvIHNraXAgdHV0b3JpYWwuJyxcbiAgICAgIDI1MDBcbiAgICApXG4gIH1cblxuICByZW5kZXJDaGlsZHJlblR1dCA9ICgpID0+IHtcbiAgICB0aGlzLnJlbmRlckxlZ2VuZCgpXG4gICAgdGhpcy5jbGVhclByZXZUdXQoKVxuXG4gICAgdGhpcy51cGRhdGVFbGVtZW50KFxuICAgICAgJyN0dXQtbXNnLTAnLFxuICAgICAgJ0hvdmVyIG92ZXIgdGhlIGJhYnkgY2hpY2tzIHRvIG1ha2UgdGhlbSBzdGljayBjbG9zZSB0byB5b3UuJ1xuICAgIClcbiAgICB0aGlzLmNoYW5nZU1lc3NhZ2UoXG4gICAgICAnI3R1dC1tc2ctMCcsXG4gICAgICAnVGhlIGxvbmdlciB5b3VyIGNoYWluLCB0aGUgaGlnaGVyIHlvdXIgc2NvcmUgaW5jcmVtZW50cy4nLFxuICAgICAgMzUwMFxuICAgIClcbiAgICB0aGlzLmNoYW5nZU1lc3NhZ2UoXG4gICAgICAnI3R1dC1tc2ctMScsXG4gICAgICAnUHJlc3MgU1BBQ0UgdG8gY29udGludWUgYW5kIEVOVEVSIHRvIHNraXAgdHV0b3JpYWwuJyxcbiAgICAgIDYwMDBcbiAgICApXG4gIH1cblxuICByZW5kZXJQcmVkYXRvclR1dCA9ICgpID0+IHtcbiAgICB0aGlzLmNsZWFyUHJldlR1dCgpXG4gICAgdGhpcy51cGRhdGVFbGVtZW50KFxuICAgICAgJyN0dXQtbXNnLTAnLFxuICAgICAgXCJXYXRjaCBvdXQgZm9yIHByZWRhdG9ycy4gTnlhbi1jaGFuIGRpZG4ndCBnZXQgZmF0IGVhdGluZyBncmFzcy5cIlxuICAgIClcbiAgICB0aGlzLmNoYW5nZU1lc3NhZ2UoXG4gICAgICAnI3R1dC1tc2ctMCcsXG4gICAgICBcIlRoZSB3b3JtcyBzaG93IHlvdXIgaGVhbHRoLiBFdmVyeSBlbmNvdW50ZXIgd2l0aCBhIGNhdCBjb3N0cyB5b3UgMSB3b3JtLiBUaGUgZ2FtZSBlbmRzIHdoZW4geW91J3JlIG91dCBvZiB3b3Jtcy5cIixcbiAgICAgIDUwMDBcbiAgICApXG4gICAgdGhpcy5jaGFuZ2VNZXNzYWdlKFxuICAgICAgJyN0dXQtbXNnLTEnLFxuICAgICAgJ1ByZXNzIFNQQUNFIHRvIGNvbnRpbnVlIGFuZCBFTlRFUiB0byBza2lwIHR1dG9yaWFsLicsXG4gICAgICA4MDAwXG4gICAgKVxuICB9XG5cbiAgcmVuZGVyQ2xpY2tQYXJlbnRUdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5jbGVhclByZXZUdXQoKVxuICAgIHRoaXMudXBkYXRlRWxlbWVudChcbiAgICAgICcjdHV0LW1zZy0wJyxcbiAgICAgICdDTElDSyB0byBnYXRoZXIgYWxsIHlvdXIgY2hpbGRyZW4gaW4gb25lIHBsYWNlIGZvciB0aGUgY2hlYXAgcHJpY2Ugb2YgaGFsZiBhIHdvcm0uJ1xuICAgIClcbiAgICB0aGlzLmNoYW5nZU1lc3NhZ2UoXG4gICAgICAnI3R1dC1tc2ctMCcsXG4gICAgICBcIkRvIHRoaXMgc3BhcmluZ2x5LCBjYXVzZSB5b3Ugd29uJ3QgYmUgYWJsZSB0byBtb3ZlIHdoaWxlIGNsaWNraW5nISBBbmQgeW91IGNhbid0IHVzZSBpdCBpZiB5b3UgZG9uJ3QgaGF2ZSBlbm91Z2ggd29ybXMuXCIsXG4gICAgICA0MDAwXG4gICAgKVxuICAgIHRoaXMuY2hhbmdlTWVzc2FnZShcbiAgICAgICcjdHV0LW1zZy0xJyxcbiAgICAgICdQcmVzcyBTUEFDRSB0byBjb250aW51ZSBhbmQgRU5URVIgdG8gc2tpcCB0dXRvcmlhbC4nLFxuICAgICAgNzAwMFxuICAgIClcbiAgfVxuXG4gIHJlbmRlcldvcm1UdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5jbGVhclByZXZUdXQoKVxuICAgIHRoaXMudXBkYXRlRWxlbWVudChcbiAgICAgICcjdHV0LW1zZy0wJyxcbiAgICAgICdSZXBsZW5pc2ggeW91ciBlbmVyZ3kgYnkgZmVhc3Rpbmcgb24gZGVsaWNpb3VzIHdvcm1zLidcbiAgICApXG4gICAgdGhpcy5jaGFuZ2VNZXNzYWdlKFxuICAgICAgJyN0dXQtbXNnLTAnLFxuICAgICAgJ1lvdSBjYW4gaGF2ZSBzb21lIGV4dHJhIGZvciB0aGUgdHV0b3JpYWwuJyxcbiAgICAgIDM1MDBcbiAgICApXG4gICAgdGhpcy5jaGFuZ2VNZXNzYWdlKFxuICAgICAgJyN0dXQtbXNnLTAnLFxuICAgICAgXCJDb25ncmF0dWxhdGlvbnMgeW91J3JlIG5vIGxvbmdlciBhIG5vb2IhIFByZXNzIEVOVEVSIHRvIHN0YXJ0IVwiLFxuICAgICAgNjAwMFxuICAgIClcbiAgfVxuXG4gIGNsZWFyVHV0b3JpYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5jbGVhclByZXZUdXQoKVxuICAgIGNvbnN0IHdvcmxkV3JhcHBlciA9IHRoaXMuZ2V0RWxlbWVudCgnI3dvcmxkLXdyYXBwZXInKSxcbiAgICAgIGxlZ2VuZCA9IHRoaXMuZ2V0RWxlbWVudCgnI2xlZ2VuZCcpLFxuICAgICAgdHV0b3JpYWxXcmFwcGVyID0gdGhpcy5nZXRFbGVtZW50KCcudHV0b3JpYWwtd3JhcHBlcicpXG5cbiAgICBpZiAobGVnZW5kKSB3b3JsZFdyYXBwZXIucmVtb3ZlQ2hpbGQobGVnZW5kKVxuICAgIGlmICh0dXRvcmlhbFdyYXBwZXIpIHdvcmxkV3JhcHBlci5yZW1vdmVDaGlsZCh0dXRvcmlhbFdyYXBwZXIpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZXJneSB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXksIGVuZXJneSA9IDUsIG1heCA9IDUpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5jb3VudCA9IGVuZXJneVxuICAgIHRoaXMubWluID0gMFxuICAgIHRoaXMubWF4ID0gbWF4XG4gIH1cblxuICBzZXRDb3VudCA9IChjb3VudCkgPT4ge1xuICAgIHRoaXMuY291bnQgPSBjb3VudFxuICB9XG5cbiAgcmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRDb3VudCh0aGlzLm1heClcbiAgICB0aGlzLnVwZGF0ZUVuZXJneSgpXG4gIH1cblxuICBpbmNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IE1hdGgubWluKHRoaXMuY291bnQgKyAxLCB0aGlzLm1heClcbiAgICB0aGlzLnNldENvdW50KGNvdW50KVxuICAgIHRoaXMudXBkYXRlRW5lcmd5KClcbiAgfVxuXG4gIGRlY3JlbWVudENvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5jb3VudFxuICAgIHRoaXMuY291bnQgPSBNYXRoLm1heChjb3VudCAtIDEsIHRoaXMubWluKVxuICAgIHRoaXMudXBkYXRlRW5lcmd5KClcbiAgfVxuXG4gIGRlY3JlbWVudENvdW50QnlIYWxmID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5jb3VudFxuICAgIHRoaXMuY291bnQgPSBNYXRoLm1heChjb3VudCAtIDAuNSwgdGhpcy5taW4pXG4gICAgdGhpcy51cGRhdGVFbmVyZ3koKVxuICB9XG5cbiAgdXBkYXRlRW5lcmd5ID0gKCkgPT4ge1xuICAgIHRoaXMuZGlzcGxheS51cGRhdGVFbmVyZ3lCYXIodGhpcy5jb3VudClcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgdGhpcy51cGRhdGVFbmVyZ3koKVxuICB9XG59XG4iLCJpbXBvcnQgeyBMaW5rZWRMaXN0IH0gZnJvbSAnZGF0YV9zdHJ1Y3R1cmVzJ1xuaW1wb3J0IENoYWluIGZyb20gJy4vQ2hhaW4uanMnXG5pbXBvcnQgQ2hpbGQgZnJvbSAnLi9DaGlsZC5qcydcbmltcG9ydCBFbmVyZ3kgZnJvbSAnLi9FbmVyZ3kuanMnXG5pbXBvcnQgY2hpbGRJbWcgZnJvbSAnLi9pbWdzL2NoaWxkLnBuZydcbmltcG9ydCBwYXJlbnRJbWFnZSBmcm9tICcuL2ltZ3MvcGFyZW50LnBuZydcbmltcG9ydCBwcmVkYXRvckltYWdlIGZyb20gJy4vaW1ncy9wcmVkYXRvci5wbmcnXG5pbXBvcnQgd29ybUltYWdlIGZyb20gJy4vaW1ncy93b3JtLnBuZydcbmltcG9ydCBQYXJlbnQgZnJvbSAnLi9QYXJlbnQuanMnXG5pbXBvcnQgUHJlZGF0b3IgZnJvbSAnLi9QcmVkYXRvci5qcydcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJ1xuaW1wb3J0IFdvcmxkIGZyb20gJy4vV29ybGQuanMnXG5pbXBvcnQgV29ybSBmcm9tICcuL1dvcm0uanMnXG5cbmNvbnN0IENoaWxkU3ByaXRlID0gbmV3IEltYWdlKClcbkNoaWxkU3ByaXRlLnNyYyA9IGNoaWxkSW1nXG5jb25zdCBQYXJlbnRTcHJpdGUgPSBuZXcgSW1hZ2UoKVxuUGFyZW50U3ByaXRlLnNyYyA9IHBhcmVudEltYWdlXG5jb25zdCBQcmVkYXRvclNwcml0ZSA9IG5ldyBJbWFnZSgpXG5QcmVkYXRvclNwcml0ZS5zcmMgPSBwcmVkYXRvckltYWdlXG5jb25zdCBXb3JtU3ByaXRlID0gbmV3IEltYWdlKClcbldvcm1TcHJpdGUuc3JjID0gd29ybUltYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5LCBjaGlsZENvdW50ID0gNSwgcHJlZGF0b3JDb3VudCA9IDQsIHdvcm1Db3VudCA9IDEpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5tb3VzZSA9IHsgeDogbnVsbCwgeTogbnVsbCB9XG4gICAgdGhpcy53b3JsZCA9IG51bGxcbiAgICB0aGlzLnBhcmVudCA9IG51bGxcbiAgICB0aGlzLnByZWRhdG9ycyA9IG5ldyBMaW5rZWRMaXN0KClcbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMud29ybXMgPSBuZXcgTGlua2VkTGlzdCgpXG4gICAgdGhpcy5jaGlsZENvdW50ID0gY2hpbGRDb3VudFxuICAgIHRoaXMucHJlZGF0b3JDb3VudCA9IHByZWRhdG9yQ291bnRcbiAgICB0aGlzLndvcm1Db3VudCA9IHdvcm1Db3VudFxuICAgIHRoaXMuY2hhaW4gPSBudWxsXG4gICAgdGhpcy5lbmVyZ3kgPSBudWxsXG4gICAgdGhpcy5zY29yZSA9IG51bGxcbiAgICB0aGlzLnRpbWVTaW5jZVdvcm0gPSAwXG4gICAgdGhpcy5hbmltYXRpb25SZXEgPSBudWxsXG4gICAgdGhpcy5jbGlja2luZyA9IGZhbHNlXG4gICAgdGhpcy5pbml0ID0gdGhpcy5pbml0LmJpbmQodGhpcylcbiAgICB0aGlzLmNsZWFyR2FtZSA9IHRoaXMuY2xlYXJHYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLnJlcGxheUdhbWUgPSB0aGlzLnJlcGxheUdhbWUuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICBpZiAodGhpcy5jbGlja2luZykgcmV0dXJuXG4gICAgdGhpcy5tb3VzZSA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfVxuICAgIHRoaXMuZGlzcGxheS5yZW1vdmVBbmltYXRpb24oJ3dvcm0tbGVmdCcpXG4gIH1cblxuICBoYW5kbGVNb3VzZURvd24gPSAoZSkgPT4ge1xuICAgIGlmICh0aGlzLmVuZXJneS5jb3VudCA8PSAwLjUpIHtcbiAgICAgIHRoaXMuZGlzcGxheS5hbmltYXRlKCd3b3JtLWxlZnQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IG1vdXNlID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9XG4gICAgdGhpcy5tb3VzZSA9IG1vdXNlXG4gICAgdGhpcy5jbGlja2luZyA9IHRydWVcbiAgICBpZiAodGhpcy5wYXJlbnQuZ2V0Q2hpbGRDb3VudCgpID4gMCkgdGhpcy5lbmVyZ3kuZGVjcmVtZW50Q291bnRCeUhhbGYoKVxuICB9XG5cbiAgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICB0aGlzLmNsaWNraW5nID0gZmFsc2VcbiAgfVxuXG4gIGRlc3Ryb3lXb3JtID0gKHdvcm0pID0+IHtcbiAgICB0aGlzLndvcm1zLmRlbGV0ZU5vZGUod29ybSlcbiAgfVxuXG4gIGRlc3Ryb3lDaGlsZCA9IChjaGlsZCkgPT4ge1xuICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlTm9kZShjaGlsZClcbiAgICB0aGlzLnNwYXduQ2hpbGRyZW4oMTcuNSlcbiAgfVxuXG4gIGNoZWNrSW5SYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCxcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KCksXG4gICAgICBwcmVkYXRvcnMgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KCksXG4gICAgICB3b3JtcyA9IHRoaXMud29ybXMudG9BcnJheSgpXG5cbiAgICAvLyBDaGlsZCBwcmVkYXRvciBjb2xsaXNpb25zXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKHBhcmVudC5jaGVja0luUmFuZ2UoY2hpbGQpKSB7XG4gICAgICAgIHBhcmVudC5oaXRzQ2hpbGQoY2hpbGQpXG4gICAgICAgIHRoaXMuc3Bhd25DaGlsZHJlbigxNy41KVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBwcmVkYXRvciBvZiBwcmVkYXRvcnMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMTApKSBjaGlsZC5hdm9pZFByZWRhdG9yKClcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMCkpIGNoaWxkLmhpdHNQcmVkYXRvcih0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBQYXJlbnQgcHJlZGF0b3IgY29sbGlzaW9uc1xuICAgIGZvciAoY29uc3QgcHJlZGF0b3Igb2YgcHJlZGF0b3JzKSB7XG4gICAgICBpZiAocGFyZW50LmNoZWNrSW5SYW5nZShwcmVkYXRvciwgNSkpXG4gICAgICAgIHBhcmVudC5jaGVja0NvbGxpc2lvbldpdGhQcmVkYXRvcihwcmVkYXRvcilcbiAgICB9XG5cbiAgICAvL1BhcmVudCB3b3JtIGNvbGxpc2lvbnNcbiAgICBmb3IgKGNvbnN0IHdvcm0gb2Ygd29ybXMpIHtcbiAgICAgIGlmIChwYXJlbnQuY2hlY2tJblJhbmdlKHdvcm0sIDIpKSBwYXJlbnQuaGl0c1dvcm0odGhpcywgd29ybSlcbiAgICB9XG4gIH1cblxuICBzcGF3bkNoaWxkcmVuID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuICAgIGxldCBpbmRlcGVuZGVudEMgPSB0aGlzLmNoaWxkcmVuLnNpemUgLSB0aGlzLnBhcmVudC5nZXRDaGlsZENvdW50KClcblxuICAgIHdoaWxlIChpbmRlcGVuZGVudEMgPCB0aGlzLmNoaWxkQ291bnQgJiYgdGhpcy5jaGlsZENvdW50ID4gMCkge1xuICAgICAgY29uc3QgcmFuZG9tUG9zID0gdGhpcy53b3JsZC5nZXRSYW5kb21Qb3MociksXG4gICAgICAgIGNoaWxkID0gbmV3IENoaWxkKHJhbmRvbVBvcywgciwgdGhpcy53b3JsZCwgQ2hpbGRTcHJpdGUsIHNpemUpXG5cbiAgICAgIGNoaWxkLnNldFJhbmRvbURpcigpXG4gICAgICB0aGlzLmNoaWxkcmVuLmFwcGVuZFRvVGFpbChjaGlsZClcbiAgICAgIGluZGVwZW5kZW50QyA9IHRoaXMuY2hpbGRyZW4uc2l6ZSAtIHRoaXMucGFyZW50LmdldENoaWxkQ291bnQoKVxuICAgIH1cbiAgfVxuXG4gIHNwYXduUHJlZGF0b3JzID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuXG4gICAgd2hpbGUgKHRoaXMucHJlZGF0b3JzLnNpemUgPCB0aGlzLnByZWRhdG9yQ291bnQpIHtcbiAgICAgIGNvbnN0IHJhbmRvbVBvcyA9IHRoaXMud29ybGQuZ2V0UmFuZG9tUG9zKHIpLFxuICAgICAgICBwcmVkYXRvciA9IG5ldyBQcmVkYXRvcihyYW5kb21Qb3MsIHIsIHRoaXMud29ybGQsIFByZWRhdG9yU3ByaXRlLCBzaXplKVxuICAgICAgcHJlZGF0b3Iuc2V0UmFuZG9tRGlyKClcbiAgICAgIHRoaXMucHJlZGF0b3JzLmFwcGVuZFRvVGFpbChwcmVkYXRvcilcbiAgICB9XG4gIH1cblxuICBzcGF3bldvcm1zID0gKHIsIHZlbCkgPT4ge1xuICAgIGlmICghdmVsKSB2ZWwgPSB7IGR4OiAyLCBkeTogMiB9XG4gICAgY29uc3Qgc2l6ZSA9IHsgd2lkdGg6IHIgKiAyLCBoZWlnaHQ6IHIgKiAyIH1cbiAgICB3aGlsZSAodGhpcy53b3Jtcy5zaXplIDwgdGhpcy53b3JtQ291bnQpIHtcbiAgICAgIGNvbnN0IHJhbmRvbVBvcyA9IHRoaXMud29ybGQuZ2V0UmFuZG9tUG9zKHIpLFxuICAgICAgICB3b3JtID0gbmV3IFdvcm0ocmFuZG9tUG9zLCByLCB0aGlzLndvcmxkLCBXb3JtU3ByaXRlLCBzaXplLCB2ZWwpXG4gICAgICB3b3JtLnNldFJhbmRvbURpcigpXG4gICAgICB0aGlzLndvcm1zLmFwcGVuZFRvVGFpbCh3b3JtKVxuICAgIH1cbiAgfVxuXG4gIGluaXRDaGlsZHJlbiA9IChyKSA9PiB7XG4gICAgdGhpcy5zcGF3bkNoaWxkcmVuKHIpXG4gIH1cblxuICBpbml0UHJlZGF0b3JzID0gKHIpID0+IHtcbiAgICB0aGlzLnNwYXduUHJlZGF0b3JzKHIpXG4gIH1cblxuICBpbml0UGFyZW50ID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuICAgIGNvbnN0IGluaXRpYWxQb3MgPSB7XG4gICAgICB4OiB0aGlzLndvcmxkLnNpemUud2lkdGggLyAyICsgcixcbiAgICAgIHk6IHRoaXMud29ybGQuc2l6ZS5oZWlnaHQgLyAyICsgcixcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgPSBuZXcgUGFyZW50KFxuICAgICAgaW5pdGlhbFBvcyxcbiAgICAgIHIsXG4gICAgICB0aGlzLndvcmxkLFxuICAgICAgdGhpcy5jaGFpbixcbiAgICAgIHRoaXMuc2NvcmUsXG4gICAgICB0aGlzLmVuZXJneSxcbiAgICAgIFBhcmVudFNwcml0ZSxcbiAgICAgIHNpemVcbiAgICApXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgfVxuXG4gIGluaXRXb3JtcyA9IChyLCB2ZWwpID0+IHtcbiAgICB0aGlzLnNwYXduV29ybXMociwgdmVsKVxuICB9XG5cbiAgaW5pdENoYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoYWluID0gbmV3IENoYWluKHRoaXMuZGlzcGxheSlcbiAgICBjaGFpbi5pbml0KClcbiAgICB0aGlzLmNoYWluID0gY2hhaW5cbiAgfVxuXG4gIGluaXRXb3JsZCA9ICgpID0+IHtcbiAgICBjb25zdCB3b3JsZCA9IG5ldyBXb3JsZCh0aGlzLmRpc3BsYXkpXG4gICAgd29ybGQuaW5pdCgpXG4gICAgdGhpcy53b3JsZCA9IHdvcmxkXG4gIH1cblxuICBpbml0U2NvcmUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2NvcmUgPSBuZXcgU2NvcmUodGhpcy5kaXNwbGF5KVxuICAgIHNjb3JlLmluaXQoKVxuICAgIHRoaXMuc2NvcmUgPSBzY29yZVxuICB9XG5cbiAgaW5pdEVuZXJneSA9IChpbml0Q291bnQsIG1heCkgPT4ge1xuICAgIGNvbnN0IGVuZXJneSA9IG5ldyBFbmVyZ3kodGhpcy5kaXNwbGF5LCBpbml0Q291bnQsIG1heClcbiAgICBlbmVyZ3kuaW5pdCgpXG4gICAgdGhpcy5lbmVyZ3kgPSBlbmVyZ3lcbiAgfVxuXG4gIHJlcGxheUdhbWUoKSB7XG4gICAgdGhpcy5yZXNldEdhbWUoKVxuICAgIHRoaXMuZGlzcGxheS5jbGVhckdhbWVFbmQoKVxuICB9XG5cbiAgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIHRoaXMuZW5lcmd5LnJlc2V0KClcbiAgICB0aGlzLnNjb3JlLnJlc2V0KClcbiAgICB0aGlzLm1vdXNlID0geyB4OiBudWxsLCB5OiBudWxsIH1cbiAgICB0aGlzLnBhcmVudCA9IG51bGxcbiAgICB0aGlzLnByZWRhdG9ycyA9IG5ldyBMaW5rZWRMaXN0KClcbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMud29ybXMgPSBuZXcgTGlua2VkTGlzdCgpXG4gICAgdGhpcy5jaGFpbiA9IG51bGxcbiAgICB0aGlzLnRpbWVTaW5jZVdvcm0gPSAwXG5cbiAgICB0aGlzLmluaXRXb3JsZCgpXG4gICAgdGhpcy5pbml0Q2hhaW4oKVxuICAgIHRoaXMuaW5pdFBhcmVudCgzMClcbiAgICB0aGlzLmluaXRDaGlsZHJlbigxNy41KVxuICAgIHRoaXMuaW5pdFByZWRhdG9ycygzNSlcbiAgICB0aGlzLmluaXRXb3JtcygyMClcbiAgICB0aGlzLmFuaW1hdGlvblJlcSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KVxuICB9XG5cbiAgY2xlYXJHYW1lKCkge1xuICAgIHRoaXMuZGlzcGxheS5jbGVhckdhbWVFbmQoKVxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvblJlcSlcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUsIGZhbHNlKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93biwgZmFsc2UpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXAsIGZhbHNlKVxuICB9XG5cbiAgZ2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zY29yZS5jYWxjdWxhdGVIaWdoU2NvcmUoKVxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvblJlcSlcbiAgICB0aGlzLmFuaW1hdGlvblJlcSA9IG51bGxcbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyR2FtZUVuZChcbiAgICAgIHRoaXMucmVwbGF5R2FtZSxcbiAgICAgIHRoaXMuc2NvcmUuc2NvcmUsXG4gICAgICB0aGlzLnNjb3JlLmhpZ2hTY29yZVxuICAgIClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNsZWFyQ2FudmFzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMud29ybGQuY2FudmFzLFxuICAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgfVxuXG4gIGRyYXcgPSAodGltZXN0YW1wKSA9PiB7XG4gICAgaWYgKHRoaXMuZW5lcmd5LmNvdW50ID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5nYW1lT3ZlcigpXG4gICAgfVxuXG4gICAgY29uc3QgdGltZVBhc3NlZCA9IHRpbWVzdGFtcCAtIHRoaXMudGltZVNpbmNlV29ybVxuICAgIGlmICh0aW1lUGFzc2VkID49IDI1MDAgJiYgdGhpcy53b3Jtcy5zaXplIDw9IDApIHtcbiAgICAgIHRoaXMuc3Bhd25Xb3JtcygyMClcbiAgICAgIHRoaXMudGltZVNpbmNlV29ybSA9IHRpbWVzdGFtcFxuICAgIH1cblxuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMud29ybGQuY2FudmFzLFxuICAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyksXG4gICAgICBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4udG9BcnJheSgpLFxuICAgICAgcHJlZGF0b3JzID0gdGhpcy5wcmVkYXRvcnMudG9BcnJheSgpLFxuICAgICAgd29ybXMgPSB0aGlzLndvcm1zLnRvQXJyYXkoKVxuXG4gICAgdGhpcy5jbGVhckNhbnZhcygpXG5cbiAgICB0aGlzLnBhcmVudC5tb3Zlcyh0aGlzLm1vdXNlKVxuICAgIHRoaXMucGFyZW50LmRyYXcoY3R4LCB7IHg6IDMwLCB5OiAyNSB9KVxuXG4gICAgZm9yIChjb25zdCBwcmVkYXRvciBvZiBwcmVkYXRvcnMpIHtcbiAgICAgIHByZWRhdG9yLm1vdmVzKClcbiAgICAgIHByZWRhdG9yLmRyYXcoY3R4LCB7IHg6IDMwLCB5OiAyNSB9KVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgd29ybSBvZiB3b3Jtcykge1xuICAgICAgd29ybS5tb3Zlcyh0aGlzKVxuICAgICAgd29ybS5kcmF3KGN0eCwgeyB4OiAwLCB5OiAwIH0pXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKGNoaWxkLmluZGVwZW5kZW5jZSkgY2hpbGQubW92ZXMoKVxuICAgICAgY2hpbGQuZHJhdyhjdHgsIHsgeDogMTUsIHk6IDE1IH0pXG5cbiAgICAgIHRoaXMuY2xpY2tpbmcgPyBjaGlsZC5zZXRDbGlja2luZyh0cnVlKSA6IGNoaWxkLnNldENsaWNraW5nKGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuY2hlY2tJblJhbmdlKClcbiAgICB0aGlzLmFuaW1hdGlvblJlcSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyTGVnZW5kKClcbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyU2NvcmUoKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJDaGFpbigpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlckVuZXJneSgpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUsIGZhbHNlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93biwgZmFsc2UpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXAsIGZhbHNlKVxuICAgIHRoaXMuaW5pdEVuZXJneSg1LCA1KVxuICAgIHRoaXMuaW5pdFdvcmxkKClcbiAgICB0aGlzLmluaXRTY29yZSgpXG4gICAgdGhpcy5pbml0Q2hhaW4oKVxuICAgIHRoaXMuaW5pdFBhcmVudCgzMClcbiAgICB0aGlzLmluaXRDaGlsZHJlbigxNy41KVxuICAgIHRoaXMuaW5pdFByZWRhdG9ycygzNSlcbiAgICB0aGlzLmluaXRXb3JtcygyMClcbiAgICB0aGlzLmFuaW1hdGlvblJlcSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21JbnQsIGluUmFuZ2UgfSBmcm9tICcuL3V0aWxzJ1xuXG5jb25zdCByID0gMTAsXG4gIGMgPSAnIzcyODBmNicsXG4gIHYgPSB7IGR4OiAxLCBkeTogMSB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBvcywgcmFkaXVzID0gciwgd29ybGQsIHNwcml0ZSwgc2l6ZSwgdmVsID0gdiwgY29sb3IgPSBjKSB7XG4gICAgdGhpcy5wb3MgPSBwb3NcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICAgIHRoaXMud29ybGQgPSB3b3JsZFxuICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMudmVsID0gdmVsXG4gICAgdGhpcy5jdXJyRGlyID0gWzAsIDBdXG4gICAgdGhpcy5wb3NDYWNoZSA9IFtdXG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKVxuICAgIHRoaXMubW92ZXNXaXRoQ3Vyc29yID0gdGhpcy5tb3Zlc1dpdGhDdXJzb3IuYmluZCh0aGlzKVxuICAgIHRoaXMubW92ZXMgPSB0aGlzLm1vdmVzLmJpbmQodGhpcylcbiAgICB0aGlzLmNoZWNrSW5SYW5nZSA9IHRoaXMuY2hlY2tJblJhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhpdHNQYXJlbnQgPSB0aGlzLmhpdHNQYXJlbnQuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c1ByZWRhdG9yID0gdGhpcy5oaXRzUHJlZGF0b3IuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c0NoaWxkID0gdGhpcy5oaXRzQ2hpbGQuYmluZCh0aGlzKVxuICB9XG5cbiAgc2V0VmVsb2NpdHkgPSAodmVsb2NpdHkpID0+IHtcbiAgICB0aGlzLnZlbCA9IHZlbG9jaXR5XG4gIH1cblxuICBzZXRQb3MgPSAocG9zKSA9PiB7XG4gICAgdGhpcy5wb3MgPSBwb3NcbiAgfVxuXG4gIHNldFBvc0NhY2hlID0gKHBvc0NhY2hlKSA9PiB7XG4gICAgdGhpcy5wb3NDYWNoZSA9IHBvc0NhY2hlXG4gIH1cblxuICBzZXRDdXJyRGlyID0gKGRpcikgPT4ge1xuICAgIHRoaXMuY3VyckRpciA9IGRpclxuICB9XG5cbiAgc2V0UmFuZG9tRGlyID0gKCkgPT4ge1xuICAgIC8qIFxuICAgIDggcG9zc2libGUgZGlyZWN0aW9ucy5cbiAgICBWZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbDogXG4gICAgICAgIOKGkSAgICAgIFxuICAgICAgICDihpFcbiAgIOKGkCAg4oaQICAg4oaSICDihpIgIFxuICAgICAgICDihpNcbiAgICAgICAg4oaTIFxuICAgIERpYWdvbmFsczpcbiAgICDihpYgICAgICDihpdcbiAgICAgIOKGliAg4oaXXG4gICAgICDihpkgIOKGmCBcbiAgICDihpkgICAgICDihphcbiAgICAqL1xuXG4gICAgbGV0IHsgZHgsIGR5IH0gPSB0aGlzLnZlbFxuICAgIGR4ID0gZHggPyBkeCA6IDFcbiAgICBkeSA9IGR5ID8gZHkgOiAxXG4gICAgY29uc3QgaW5kZXggPSBnZXRSYW5kb21JbnQoOClcbiAgICBjb25zdCBwb3NzaWJsZURpcmVjdGlvbnMgPSBbXG4gICAgICAvLyAwIHZhbHVlcyBvZmYgc2xpZ2h0bHkgc28gb2JqZWN0cyBkb2Vzbid0IHN0aWNrIHRvIGVkZ2VzLlxuICAgICAgW2R4LCAwLjJdLFxuICAgICAgWy1keCwgMC4zXSxcbiAgICAgIFswLjE1LCBkeV0sXG4gICAgICBbMC4yMywgLWR5XSxcbiAgICAgIFtkeCwgZHldLFxuICAgICAgWy1keCwgZHldLFxuICAgICAgW2R4LCAtZHldLFxuICAgICAgWy1keCwgLWR5XSxcbiAgICBdXG5cbiAgICB0aGlzLnNldEN1cnJEaXIocG9zc2libGVEaXJlY3Rpb25zW2luZGV4XSlcbiAgfVxuXG4gIGNoZWNrT3V0T2ZCb3VuZHMgPSAocG9zKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMud29ybGQuY2hlY2tPdXRPZkJvdW5kcyhwb3MsIHRoaXMucmFkaXVzKVxuICB9XG5cbiAgZ2V0UmFuZG9tUG9zID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLndvcmxkLmdldFJhbmRvbVBvcyh0aGlzLnJhZGl1cylcbiAgfVxuICAvKiogQm91bmNlIG9iamVjdCBiYWNrIGlmIGl0IGhpdHMgdGhlIHdhbGwgKi9cbiAgYm91bmNlQmFjayA9IChwb3MpID0+IHtcbiAgICBjb25zdCB7IGJvdW5kcyB9ID0gdGhpcy53b3JsZCxcbiAgICAgIHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IH0gPSBib3VuZHMsXG4gICAgICByID0gdGhpcy5yYWRpdXNcblxuICAgIGxldCB7IHgsIHkgfSA9IHBvcyxcbiAgICAgIGR4ID0gdGhpcy5jdXJyRGlyWzBdLFxuICAgICAgZHkgPSB0aGlzLmN1cnJEaXJbMV1cblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdDaGlsZCcpIHtcbiAgICAgIGlmICh0aGlzLnZlbC5keCA+IDEgfHwgdGhpcy52ZWwuZHkgPiAxKSB7XG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHkoeyBkeDogMSwgZHk6IDEgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKGR4ID4gMSkge1xuICAgICAgICBkeCA9IGR4IC8gNVxuICAgICAgfVxuICAgICAgaWYgKGR5ID4gMSkge1xuICAgICAgICBkeSA9IGR5IC8gNVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4ICsgciA+IHJpZ2h0IHx8IHggLSByIDwgbGVmdCkge1xuICAgICAgdGhpcy5zZXRDdXJyRGlyKFstZHgsIGR5XSlcbiAgICB9XG5cbiAgICBpZiAoeSAtIHIgPCB0b3AgfHwgeSArIHIgPiBib3R0b20pIHtcbiAgICAgIHRoaXMuc2V0Q3VyckRpcihbZHgsIC1keV0pXG4gICAgfVxuICAgIC8vb2JqcyBnZXQgc3R1Y2sgaWYgcGFyYWxsZWwgdG8gd2FsbHMgYW5kIG91dCBvZiBib3VuZHNcbiAgICBsZXQgblBvcyA9IHsgeDogeCArIHRoaXMuY3VyckRpclswXSwgeTogeSArIHRoaXMuY3VyckRpclsxXSB9XG4gICAgaWYgKHRoaXMuY2hlY2tPdXRPZkJvdW5kcyhuUG9zKSkgdGhpcy5zZXRSYW5kb21EaXIoKVxuICB9XG5cbiAgY2hlY2tJblJhbmdlKG9iaiwgY3VzaGlvbiA9IDApIHtcbiAgICAvLyBOb3RlOiBvYmouY29uc3RydWN0b3IubmFtZSB3b24ndCB3b3JrIHdpdGggSUUgYW5kIHRoZXJlIGFyZSBzb21lIGNhdmVhdHMuIE1vcmUgaW5mbyAtLT4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRnVuY3Rpb24vbmFtZVxuXG4gICAgY29uc3Qgb1BvcyA9IG9iai5wb3MsXG4gICAgICBvUiA9IG9iai5yYWRpdXMgKyBjdXNoaW9uLFxuICAgICAgeyB4LCB5IH0gPSB0aGlzLnBvcyxcbiAgICAgIHJhbmdlWCA9IFtvUG9zLnggLSBvUiwgb1Bvcy54ICsgb1JdLFxuICAgICAgcmFuZ2VZID0gW29Qb3MueSAtIG9SLCBvUG9zLnkgKyBvUl0sXG4gICAgICByID0gdGhpcy5yYWRpdXMgKyBjdXNoaW9uXG5cbiAgICBjb25zdCB3aXRoaW5SYW5nZSA9XG4gICAgICAoaW5SYW5nZSh4IC0gciwgLi4ucmFuZ2VYKSB8fCBpblJhbmdlKHggKyByLCAuLi5yYW5nZVgpKSAmJlxuICAgICAgKGluUmFuZ2UoeSAtIHIsIC4uLnJhbmdlWSkgfHwgaW5SYW5nZSh5ICsgciwgLi4ucmFuZ2VZKSlcblxuICAgIHJldHVybiB3aXRoaW5SYW5nZVxuICB9XG5cbiAgLy8gQ2FuJ3QgdXNlIEBiYWJlbC9wbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcy4gc3VwZXIubW92ZSgpIGRvZXNuJ3Qgd29yayBpbiBzdWJjbGFzc2VzLlxuICBoaXRzUGFyZW50KG9iaikge31cblxuICBoaXRzUHJlZGF0b3Iob2JqKSB7fVxuXG4gIGhpdHNDaGlsZChvYmopIHt9XG5cbiAgLyoqIERyYXcgdGhlIG9iamVjdCBvbiBjYW52YXMgKi9cbiAgZHJhdyA9IChjdHgsIG9mZnNldCA9IHsgeDogMCwgeTogMCB9KSA9PiB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLnBvc1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLnNwcml0ZSxcbiAgICAgIHggLSBvZmZzZXQueCxcbiAgICAgIHkgLSBvZmZzZXQueSxcbiAgICAgIHRoaXMuc2l6ZS53aWR0aCxcbiAgICAgIHRoaXMuc2l6ZS5oZWlnaHRcbiAgICApXG4gIH1cblxuICBjbGlwUG9zID0gKHsgeCwgeSB9KSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfSA9IHRoaXMud29ybGQuYm91bmRzLFxuICAgICAgciA9IHRoaXMucmFkaXVzXG5cbiAgICBjb25zdCBjbGlwcGVkWCA9IHggPiBsZWZ0ICsgciAmJiB4IDwgcmlnaHQgLSByID8geCA6IHRoaXMucG9zLngsXG4gICAgICBjbGlwcGVkWSA9IHkgPiB0b3AgKyByICYmIHkgPCBib3R0b20gLSByID8geSA6IHRoaXMucG9zLnlcblxuICAgIHJldHVybiB7IHg6IGNsaXBwZWRYLCB5OiBjbGlwcGVkWSB9XG4gIH1cblxuICBtb3Zlc1dpdGhDdXJzb3IocG9zLCBlYXNpbmcsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB7IG9mZnNldHMgfSA9IHRoaXMud29ybGRcbiAgICBsZXQgeyB4LCB5IH0gPSBwb3NcblxuICAgIC8vIE9mZnNldHMgdG8gYWNjb3VudCBmb3IgbWFyZ2luLCBwYWRkaW5ncyBhcm91bmQgZ2FtZSB3b3JsZC5cbiAgICBjb25zdCBvZmZzZXRMID0gb2Zmc2V0cy5sZWZ0LFxuICAgICAgb2Zmc2V0VCA9IG9mZnNldHMudG9wLFxuICAgICAgcmVsYXRpdmVYID0geCAtIG9mZnNldEwsXG4gICAgICByZWxhdGl2ZVkgPSB5IC0gb2Zmc2V0VFxuXG4gICAgbGV0IHhEaWZmID0gcmVsYXRpdmVYIC0gdGhpcy5wb3MueCxcbiAgICAgIHlEaWZmID0gcmVsYXRpdmVZIC0gdGhpcy5wb3MueVxuXG4gICAgLy8gT2Zmc2V0IGNoaWxkcmVuIHNvIHRoZXkgZG9uJ3QgYWxsIG92ZXJsYXAgdGhlIHBhcmVudCB3aGVuIHN0YXRpb25hcnkgb3Igc2xvdyBtb3ZpbmcuXG4gICAgaWYgKHlEaWZmIDw9IDApIHlEaWZmICs9IG9mZnNldFxuICAgIC8vTW9yZSBpbmZvIG9uIHR3ZWVuaW5nLCBhbmltYXRpb24gLS0+IGh0dHBzOi8vc3BpY3l5b2dodXJ0LmNvbS90dXRvcmlhbHMvaHRtbDUtamF2YXNjcmlwdC1nYW1lLWRldmVsb3BtZW50L2NyZWF0ZS1hLXNtb290aC1jYW52YXMtYW5pbWF0aW9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNzk3MzU3Ny8xMTI3OTgxMVxuICAgIGNvbnN0IHZlbFggPSB4RGlmZiAqIGVhc2luZyxcbiAgICAgIHZlbFkgPSB5RGlmZiAqIGVhc2luZ1xuXG4gICAgdGhpcy52ZWxvY2l0eSA9IHsgeDogdmVsWCwgeTogdmVsWSB9XG5cbiAgICB4ID0gdGhpcy5wb3MueCArIHZlbFhcbiAgICB5ID0gdGhpcy5wb3MueSArIHZlbFlcblxuICAgIC8vRG9uJ3QgbGV0IG9iamVjdHMgcGFzcyBlZGdlXG4gICAgY29uc3QgY2xpcHBlZFBvcyA9IHRoaXMuY2xpcFBvcyh7IHgsIHkgfSlcblxuICAgIHRoaXMuc2V0UG9zKGNsaXBwZWRQb3MpXG5cbiAgICAvLyBDYWNoZSBsYXN0IDUgcG9zaXRpb25zLiBNYWtlcyBjaGlsZHJlbidzIG1vdmVtZW50IG1vcmUgbmF0dXJhbC5cbiAgICBjb25zdCBwb3NDYWNoZSA9IHRoaXMucG9zQ2FjaGVcbiAgICBpZiAocG9zQ2FjaGUubGVuZ3RoID4gNCkgcG9zQ2FjaGUuc2hpZnQoKVxuICAgIHBvc0NhY2hlLnB1c2gocG9zKVxuICAgIHRoaXMuc2V0UG9zQ2FjaGUocG9zQ2FjaGUpXG4gIH1cblxuICBtb3ZlcygpIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcyxcbiAgICAgIHBvcyA9IHsgeDogeCArIHRoaXMuY3VyckRpclswXSwgeTogeSArIHRoaXMuY3VyckRpclsxXSB9XG5cbiAgICBpZiAodGhpcy5jaGVja091dE9mQm91bmRzKHBvcykpIHRoaXMuYm91bmNlQmFjayhwb3MpXG5cbiAgICB0aGlzLnNldFBvcyhwb3MpXG4gIH1cbn1cbiIsImltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tICdkYXRhX3N0cnVjdHVyZXMnXG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vTW92aW5nT2JqZWN0J1xuXG5jb25zdCByID0gMTMsXG4gIGMgPSAnIzcyODBmNicsXG4gIGUgPSAxXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmVudCBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBvcyxcbiAgICByYWRpdXMgPSByLFxuICAgIHdvcmxkLFxuICAgIGNoYWluLFxuICAgIHNjb3JlLFxuICAgIGVuZXJneSxcbiAgICBzcHJpdGUsXG4gICAgc2l6ZSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9LFxuICAgIGNvbG9yID0gYyxcbiAgICBlYXNpbmcgPSBlXG4gICkge1xuICAgIHN1cGVyKHBvcywgcmFkaXVzLCB3b3JsZCwgc3ByaXRlLCBzaXplLCBudWxsLCBjb2xvcilcbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMuY2hhaW4gPSBjaGFpblxuICAgIHRoaXMuc2NvcmUgPSBzY29yZVxuICAgIHRoaXMuZW5lcmd5ID0gZW5lcmd5XG4gICAgdGhpcy5lYXNpbmcgPSBlYXNpbmdcbiAgICB0aGlzLmN1cnJQcmVkQ29scyA9IFtdXG4gICAgdGhpcy5wb3NDYWNoZSA9IFtdXG4gICAgdGhpcy5zcHJpdGUgPSBzcHJpdGVcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMubW92ZXMuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c1ByZWRhdG9yID0gdGhpcy5oaXRzUHJlZGF0b3IuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c0NoaWxkID0gdGhpcy5oaXRzQ2hpbGQuYmluZCh0aGlzKVxuICAgIHRoaXMuY2xpY2tpbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5pc1R1dG9yaWFsID0gZmFsc2VcbiAgfVxuXG4gIHNldElzVHV0b3JpYWwgPSAodmFsKSA9PiB7XG4gICAgdGhpcy5pc1R1dG9yaWFsID0gdmFsXG4gIH1cblxuICBzZXRDdXJyUHJlZENvbHMgPSAoY3VyclByZWRDb2xzKSA9PiB7XG4gICAgdGhpcy5jdXJyUHJlZENvbHMgPSBjdXJyUHJlZENvbHNcbiAgfVxuXG4gIGdldENoaWxkQ291bnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uc2l6ZVxuICB9XG5cbiAgZGVsZXRlQWxsQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgd2hpbGUgKHRoaXMuZ2V0Q2hpbGRDb3VudCgpID4gMSkge1xuICAgICAgdGhpcy5kZWxldGVMYXN0Q2hpbGQoKVxuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUxhc3RDaGlsZCA9ICgpID0+IHtcbiAgICBsZXQgY3VyciA9IHRoaXMuY2hpbGRyZW4uZGVsZXRlRnJvbVRhaWwoKVxuICAgIGlmIChjdXJyKSB7XG4gICAgICBjdXJyLnNldENoYWluUG9zKG51bGwpXG4gICAgICBjdXJyLnNldE5leHRDaGlsZChudWxsKVxuICAgICAgY3Vyci5zZXRJbmRlcGVuZGVuY2UodHJ1ZSlcbiAgICAgIHRoaXMuY2hhaW4uZGVjcmVtZW50Q291bnQoKVxuICAgICAgY3Vyci5zZXRQYXJlbnQobnVsbClcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJcbiAgfVxuXG4gIGRlc3Ryb3lDaGlsZCA9IChjaGlsZCkgPT4ge1xuICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlTm9kZShjaGlsZClcbiAgfVxuXG4gIGFwcGVuZENoaWxkID0gKGNoaWxkKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNoaWxkcmVuLnNlYXJjaChjaGlsZCkpIHtcbiAgICAgIHRoaXMuY2hhaW4uaW5jcmVtZW50Q291bnQoKVxuICAgICAgdGhpcy5zY29yZS5jYWxjdWxhdGVTY29yZSh0aGlzLmdldENoaWxkQ291bnQoKSlcbiAgICAgIGNvbnN0IHRhaWwgPSB0aGlzLmNoaWxkcmVuLnRhaWwsXG4gICAgICAgIGxhc3RDaGlsZCA9IHRhaWwgJiYgdGFpbC52YWxcbiAgICAgIGlmIChsYXN0Q2hpbGQpIGxhc3RDaGlsZC5zZXROZXh0Q2hpbGQoY2hpbGQpXG5cbiAgICAgIHRoaXMuY2hpbGRyZW4uYXBwZW5kVG9UYWlsKGNoaWxkKVxuXG4gICAgICBjaGlsZC5zZXRDaGFpblBvcyh0aGlzLmdldENoaWxkQ291bnQoKSlcbiAgICAgIGNoaWxkLnNldFBhcmVudCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ29sbGlzaW9uV2l0aFByZWRhdG9yID0gKHByZWRhdG9yKSA9PiB7XG4gICAgY29uc3QgY29sbGlkZWQgPSBzdXBlci5jaGVja0luUmFuZ2UocHJlZGF0b3IpLFxuICAgICAgY29sbGlkaW5nID0gdGhpcy5jdXJyUHJlZENvbHMuaW5jbHVkZXMocHJlZGF0b3IpXG5cbiAgICAvKiBpZiBjb2xsaWRlZCBhbmQgZmlyc3QgY29udGFjdCxcbiAgICAgIGFkZCBwcmVkYXRvciB0byB0aGUgY3VycmVudCBjb2xsaXNpb25zIHdpdGggcHJlZGF0b3IsXG4gICAgICBjYWxsIGNvbGxpZGUgd2l0aCBwcmVkYXRvciAoZGVjcmVtZW50IGNoYWluIGNvdW50KVxuICAgICovXG4gICAgaWYgKGNvbGxpZGVkICYmICFjb2xsaWRpbmcpIHtcbiAgICAgIGNvbnN0IGN1cnJQcmVkQ29scyA9IHRoaXMuY3VyclByZWRDb2xzLnNsaWNlKClcbiAgICAgIGN1cnJQcmVkQ29scy5wdXNoKHByZWRhdG9yKVxuICAgICAgdGhpcy5zZXRDdXJyUHJlZENvbHMoY3VyclByZWRDb2xzKVxuICAgICAgdGhpcy5oaXRzUHJlZGF0b3IoKVxuICAgIH1cblxuICAgIC8qIGlmIHdhcyBjb2xsaWRpbmcgYW5kIHN0b3BwZWQgY29sbGlkaW5nLCByZW1vdmUgcHJlZGF0b3IgZnJvbSBjdXJyZW50IGNvbGxpc2lvbnMgKi9cbiAgICBpZiAoIWNvbGxpZGVkICYmIHN1cGVyLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgNSkgJiYgY29sbGlkaW5nKSB7XG4gICAgICBjb25zdCBjdXJyUHJlZENvbHMgPSB0aGlzLmN1cnJQcmVkQ29scy5zbGljZSgpLFxuICAgICAgICBpbmRleCA9IGN1cnJQcmVkQ29scy5pbmRleE9mKHByZWRhdG9yKVxuICAgICAgY3VyclByZWRDb2xzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIHRoaXMuc2V0Q3VyclByZWRDb2xzKGN1cnJQcmVkQ29scylcbiAgICB9XG4gIH1cblxuICBoaXRzUHJlZGF0b3IoKSB7XG4gICAgdGhpcy5jaGFpbi5yZXNldCgpXG4gICAgdGhpcy5lbmVyZ3kuZGVjcmVtZW50Q291bnQoKVxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KClcblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkLnNldFBhcmVudChudWxsKVxuICAgICAgY2hpbGQuc2V0Q2hhaW5Qb3MobnVsbClcbiAgICAgIGNoaWxkLnNldE5leHRDaGlsZChudWxsKVxuICAgICAgY2hpbGQuc2V0SW5kZXBlbmRlbmNlKHRydWUpXG5cbiAgICAgIGlmICghdGhpcy5pc1R1dG9yaWFsKSB7XG4gICAgICAgIGNvbnN0IHZlbCA9IHsgZHg6IDIsIGR5OiAyIH1cbiAgICAgICAgY2hpbGQuc2V0VmVsb2NpdHkodmVsKVxuICAgICAgfVxuICAgICAgY2hpbGQuc2V0UmFuZG9tRGlyKClcbiAgICB9XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3IExpbmtlZExpc3QoKVxuICB9XG5cbiAgaGl0c0NoaWxkKG9iaikge1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQob2JqKVxuICAgIG9iai5zZXRJbmRlcGVuZGVuY2UoZmFsc2UpXG4gIH1cblxuICBoaXRzV29ybShnYW1lLCB3b3JtKSB7XG4gICAgdGhpcy5lbmVyZ3kuaW5jcmVtZW50Q291bnQoKVxuICAgIGdhbWUuZGVzdHJveVdvcm0od29ybSlcbiAgfVxuXG4gIG1vdmVzKHBvcykge1xuICAgIHN1cGVyLm1vdmVzV2l0aEN1cnNvcihwb3MsIHRoaXMuZWFzaW5nKVxuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkcmVuLmhlYWQgJiYgdGhpcy5jaGlsZHJlbi5oZWFkLnZhbFxuXG4gICAgaWYgKGZpcnN0Q2hpbGQpXG4gICAgICBmaXJzdENoaWxkLm1vdmVzKHRoaXMucG9zQ2FjaGUubGVuZ3RoID8gdGhpcy5wb3NDYWNoZVswXSA6IHBvcylcbiAgfVxufVxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL01vdmluZ09iamVjdCdcblxuY29uc3QgciA9IDEwLFxuICBjID0gJyNmNjcyODAnLFxuICB2ID0geyBkeDogMi4yLCBkeTogMi4yIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlZGF0b3IgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwb3MsXG4gICAgcmFkaXVzID0gcixcbiAgICB3b3JsZCxcbiAgICBzcHJpdGUsXG4gICAgc2l6ZSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9LFxuICAgIHZlbCA9IHYsXG4gICAgY29sb3IgPSBjXG4gICkge1xuICAgIHN1cGVyKHBvcywgcmFkaXVzLCB3b3JsZCwgc3ByaXRlLCBzaXplLCB2ZWwsIGNvbG9yKVxuICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXkpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5zY29yZSA9IDBcbiAgICB0aGlzLmhpZ2hTY29yZSA9IDBcbiAgfVxuXG4gIHNldFNjb3JlID0gKHNjb3JlKSA9PiB7XG4gICAgdGhpcy5zY29yZSA9IHNjb3JlXG4gIH1cblxuICBzZXRIaWdoU2NvcmUgPSAoc2NvcmUpID0+IHtcbiAgICB0aGlzLmhpZ2hTY29yZSA9IHNjb3JlXG4gIH1cblxuICByZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFNjb3JlKDApXG4gICAgdGhpcy51cGRhdGVTY29yZSgpXG4gIH1cblxuICBjYWxjdWxhdGVTY29yZSA9IChjaGlsZENvdW50KSA9PiB7XG4gICAgbGV0IGNoYWluQ291bnQgPSAxICsgY2hpbGRDb3VudCAvL2NvdW50IHBhcmVudFxuICAgIGxldCBzY29yZVRvQWRkID0gY2hhaW5Db3VudCAqIGNoYWluQ291bnQgKiAxMFxuICAgIGNvbnN0IG5ld1Njb3JlID0gdGhpcy5zY29yZSArIHNjb3JlVG9BZGRcbiAgICB0aGlzLnNldFNjb3JlKG5ld1Njb3JlKVxuICAgIHRoaXMudXBkYXRlU2NvcmUoKVxuICB9XG5cbiAgY2FsY3VsYXRlSGlnaFNjb3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IGhpZ2hTY29yZSA9IE1hdGgubWF4KHRoaXMuc2NvcmUsIHRoaXMuaGlnaFNjb3JlKVxuICAgIHRoaXMuc2V0SGlnaFNjb3JlKGhpZ2hTY29yZSlcbiAgfVxuXG4gIHVwZGF0ZVNjb3JlID0gKCkgPT4ge1xuICAgIHRoaXMuZGlzcGxheS51cGRhdGVFbGVtZW50KCcjc2NvcmUnLCB0aGlzLnNjb3JlKVxuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZVNjb3JlKClcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdXRvcmlhbEdhbWUgZXh0ZW5kcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZGlzcGxheSxcbiAgICBvblR1dG9yaWFsRW5kLFxuICAgIGNoaWxkQ291bnQgPSAwLFxuICAgIHByZWRhdG9yQ291bnQgPSAwLFxuICAgIHdvcm1Db3VudCA9IDBcbiAgKSB7XG4gICAgc3VwZXIoZGlzcGxheSwgY2hpbGRDb3VudCwgcHJlZGF0b3JDb3VudCwgd29ybUNvdW50KVxuICAgIHRoaXMudHV0b3JpYWxObyA9IDBcbiAgICB0aGlzLm9uVHV0b3JpYWxFbmQgPSBvblR1dG9yaWFsRW5kXG4gICAgdGhpcy5jbGVhckdhbWUgPSB0aGlzLmNsZWFyR2FtZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXBsYXlHYW1lID0gdGhpcy5yZXBsYXlHYW1lLmJpbmQodGhpcylcbiAgfVxuXG4gIGRlc3Ryb3lDaGlsZCA9IChjaGlsZCkgPT4ge1xuICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlTm9kZShjaGlsZClcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5zaXplIDwgdGhpcy5jaGlsZENvdW50KSB0aGlzLnNwYXduQ2hpbGRyZW4oMTcuNSlcbiAgfVxuXG4gIGNsZWFyR2FtZSgpIHtcbiAgICBzdXBlci5jbGVhckdhbWUoKVxuICAgIHRoaXMuY2xlYXJDYW52YXMoKVxuICAgIHRoaXMuZGlzcGxheS5jbGVhclR1dG9yaWFsKClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlUHJlc3NLZXkpXG4gIH1cblxuICByZXBsYXlHYW1lKCkge1xuICAgIHN1cGVyLnJlcGxheUdhbWUoKVxuICAgIHRoaXMucGFyZW50LnNldElzVHV0b3JpYWwodHJ1ZSlcbiAgfVxuXG4gIGhhbmRsZVByZXNzU3BhY2UgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudHV0b3JpYWxObyA9PT0gMCkge1xuICAgICAgdGhpcy5pbml0VHV0b3JpYWwxKClcbiAgICB9IGVsc2UgaWYgKHRoaXMudHV0b3JpYWxObyA9PT0gMSkge1xuICAgICAgdGhpcy5pbml0VHV0b3JpYWwyKClcbiAgICB9IGVsc2UgaWYgKHRoaXMudHV0b3JpYWxObyA9PT0gMikge1xuICAgICAgdGhpcy5pbml0VHV0b3JpYWwzKClcbiAgICB9IGVsc2UgaWYgKHRoaXMudHV0b3JpYWxObyA9PT0gMykge1xuICAgICAgdGhpcy5pbml0VHV0b3JpYWw0KClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQcmVzc0VudGVyID0gKCkgPT4ge1xuICAgIHRoaXMuY2xlYXJHYW1lKClcbiAgICB0aGlzLm9uVHV0b3JpYWxFbmQoKVxuICB9XG5cbiAgaGFuZGxlUHJlc3NLZXkgPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB0aGlzLmhhbmRsZVByZXNzRW50ZXIoKVxuICAgIGlmIChlLmtleUNvZGUgPT09IDMyKSB0aGlzLmhhbmRsZVByZXNzU3BhY2UoKVxuICB9XG5cbiAgY2hlY2tJblJhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50LFxuICAgICAgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKSxcbiAgICAgIHByZWRhdG9ycyA9IHRoaXMucHJlZGF0b3JzLnRvQXJyYXkoKSxcbiAgICAgIHdvcm1zID0gdGhpcy53b3Jtcy50b0FycmF5KClcblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGlmIChwYXJlbnQuY2hlY2tJblJhbmdlKGNoaWxkKSkge1xuICAgICAgICBwYXJlbnQuaGl0c0NoaWxkKGNoaWxkKVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBwcmVkYXRvciBvZiBwcmVkYXRvcnMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMTApKSBjaGlsZC5hdm9pZFByZWRhdG9yKClcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMCkpIGNoaWxkLmhpdHNQcmVkYXRvcih0aGlzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgcHJlZGF0b3Igb2YgcHJlZGF0b3JzKSB7XG4gICAgICBpZiAocGFyZW50LmNoZWNrSW5SYW5nZShwcmVkYXRvciwgNSkpXG4gICAgICAgIHBhcmVudC5jaGVja0NvbGxpc2lvbldpdGhQcmVkYXRvcihwcmVkYXRvcilcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHdvcm0gb2Ygd29ybXMpIHtcbiAgICAgIGlmIChwYXJlbnQuY2hlY2tJblJhbmdlKHdvcm0sIDIpKSBwYXJlbnQuaGl0c1dvcm0odGhpcywgd29ybSlcbiAgICB9XG4gIH1cblxuICBkcmF3ID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgIGlmIChbMiwgM10uaW5jbHVkZXModGhpcy50dXRvcmlhbE5vKSAmJiB0aGlzLmVuZXJneS5jb3VudCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FtZU92ZXIoKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMud29ybGQuY2FudmFzLFxuICAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgIGlmICh0aGlzLnR1dG9yaWFsTm8gPj0gMCkge1xuICAgICAgdGhpcy5wYXJlbnQubW92ZXModGhpcy5tb3VzZSlcbiAgICAgIHRoaXMucGFyZW50LmRyYXcoY3R4LCB7IHg6IDMwLCB5OiAyNSB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnR1dG9yaWFsTm8gPj0gMSkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKVxuXG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChjaGlsZC5pbmRlcGVuZGVuY2UpIGNoaWxkLm1vdmVzKClcbiAgICAgICAgY2hpbGQuZHJhdyhjdHgsIHsgeDogMTUsIHk6IDE1IH0pXG5cbiAgICAgICAgdGhpcy5jbGlja2luZyA/IGNoaWxkLnNldENsaWNraW5nKHRydWUpIDogY2hpbGQuc2V0Q2xpY2tpbmcoZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHV0b3JpYWxObyA+PSAyKSB7XG4gICAgICBjb25zdCBwcmVkYXRvcnMgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KClcbiAgICAgIGZvciAoY29uc3QgcHJlZGF0b3Igb2YgcHJlZGF0b3JzKSB7XG4gICAgICAgIHByZWRhdG9yLm1vdmVzKClcbiAgICAgICAgcHJlZGF0b3IuZHJhdyhjdHgsIHsgeDogMzAsIHk6IDI1IH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHV0b3JpYWxObyA+PSA0KSB7XG4gICAgICBjb25zdCB0aW1lUGFzc2VkID0gdGltZXN0YW1wIC0gdGhpcy50aW1lU2luY2VXb3JtXG4gICAgICBpZiAodGltZVBhc3NlZCA+PSA1KSB7XG4gICAgICAgIHdoaWxlICh0aGlzLndvcm1zLnNpemUgPCB0aGlzLndvcm1Db3VudCkge1xuICAgICAgICAgIHRoaXMuc3Bhd25Xb3JtcygyMCwgeyBkeDogMC41LCBkeTogMC41IH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lU2luY2VXb3JtID0gdGltZXN0YW1wXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdvcm1zID0gdGhpcy53b3Jtcy50b0FycmF5KClcbiAgICAgIGZvciAoY29uc3Qgd29ybSBvZiB3b3Jtcykge1xuICAgICAgICB3b3JtLm1vdmVzKHRoaXMpXG4gICAgICAgIHdvcm0uZHJhdyhjdHgsIHsgeDogMCwgeTogMCB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2hlY2tJblJhbmdlKClcbiAgICB0aGlzLmFuaW1hdGlvblJlcSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KVxuICB9XG5cbiAgc2V0VHV0b3JpYWxObyA9IChudW1iZXIpID0+IHtcbiAgICB0aGlzLnR1dG9yaWFsTm8gPSBudW1iZXJcbiAgfVxuXG4gIGluaXRUdXRvcmlhbCA9ICgpID0+IHtcbiAgICB0aGlzLmluaXRUdXRvcmlhbDAoKVxuICB9XG5cbiAgaW5pdFR1dG9yaWFsMCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFR1dG9yaWFsTm8oMClcbiAgICB0aGlzLmluaXRXb3JsZCgpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlck1vdmVQYXJlbnRUdXQoKVxuICAgIHRoaXMuaW5pdFBhcmVudCgzMClcbiAgICB0aGlzLnBhcmVudC5zZXRJc1R1dG9yaWFsKHRydWUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlLCBmYWxzZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlUHJlc3NLZXkpXG4gICAgdGhpcy5hbmltYXRpb25SZXEgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdylcbiAgfVxuXG4gIGluaXRUdXRvcmlhbDEgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRUdXRvcmlhbE5vKDEpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlckNoaWxkcmVuVHV0KClcbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyU2NvcmUoKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJDaGFpbigpXG4gICAgdGhpcy5pbml0Q2hhaW4oKVxuICAgIHRoaXMucGFyZW50LmNoYWluID0gdGhpcy5jaGFpblxuICAgIHRoaXMuaW5pdFNjb3JlKClcbiAgICB0aGlzLnBhcmVudC5zY29yZSA9IHRoaXMuc2NvcmVcbiAgICB0aGlzLmNoaWxkQ291bnQgPSA1XG4gICAgdGhpcy5pbml0Q2hpbGRyZW4oMTcuNSlcbiAgfVxuXG4gIGluaXRUdXRvcmlhbDIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRUdXRvcmlhbE5vKDIpXG4gICAgdGhpcy5zY29yZS5yZXNldCgpXG4gICAgdGhpcy5wYXJlbnQuc2V0SXNUdXRvcmlhbCh0cnVlKVxuXG4gICAgdGhpcy5wYXJlbnQuZGVsZXRlQWxsQ2hpbGRyZW4oKVxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbi50b0FycmF5KCkpIHtcbiAgICAgIGNoaWxkLnNldFBvcyhjaGlsZC5nZXRSYW5kb21Qb3MoKSlcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyRW5lcmd5KClcbiAgICB0aGlzLmluaXRFbmVyZ3koMywgMylcbiAgICB0aGlzLnBhcmVudC5lbmVyZ3kgPSB0aGlzLmVuZXJneVxuICAgIHRoaXMucHJlZGF0b3JDb3VudCA9IDFcbiAgICB0aGlzLmluaXRQcmVkYXRvcnMoMzUpXG4gICAgY29uc3QgcHJlZCA9IHRoaXMucHJlZGF0b3JzLnRvQXJyYXkoKVswXVxuICAgIHByZWQuc2V0UG9zKHsgeDogMzUsIHk6IDM1IH0pXG4gICAgcHJlZC5zZXRDdXJyRGlyKFswLjIzLCAtcHJlZC52ZWwuZHldKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJQcmVkYXRvclR1dCgpXG4gIH1cblxuICBpbml0VHV0b3JpYWwzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0VHV0b3JpYWxObygzKVxuICAgIHRoaXMucmVwbGF5R2FtZSgpXG4gICAgdGhpcy5wYXJlbnQuc2V0SXNUdXRvcmlhbCh0cnVlKVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgdGhpcy5wYXJlbnQuaGl0c0NoaWxkKGNoaWxkKVxuICAgICAgY2hpbGQubW92ZXModGhpcy5wYXJlbnQucG9zKVxuICAgIH1cblxuICAgIGNvbnN0IHByZWQgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KClbMF1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcCwgZmFsc2UpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTW91c2VEb3duLCBmYWxzZSlcblxuICAgIHByZWQuc2V0UG9zKHsgeDogMzUsIHk6IDM1IH0pXG4gICAgcHJlZC5zZXRDdXJyRGlyKFswLjIzLCAtMV0pXG5cbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyQ2xpY2tQYXJlbnRUdXQoKVxuICB9XG5cbiAgaW5pdFR1dG9yaWFsNCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFR1dG9yaWFsTm8oNClcbiAgICB0aGlzLmVuZXJneS5tYXggPSA1XG4gICAgdGhpcy5yZXBsYXlHYW1lKClcbiAgICB0aGlzLnBhcmVudC5kZWxldGVBbGxDaGlsZHJlbigpXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKSkge1xuICAgICAgY2hpbGQuc2V0UG9zKGNoaWxkLmdldFJhbmRvbVBvcygpKVxuICAgIH1cbiAgICBjb25zdCBwcmVkID0gdGhpcy5wcmVkYXRvcnMudG9BcnJheSgpWzBdXG5cbiAgICBwcmVkLnNldFBvcyh7IHg6IDM1LCB5OiAzNSB9KVxuICAgIHByZWQuc2V0Q3VyckRpcihbMC4yMywgLTFdKVxuICAgIHRoaXMud29ybUNvdW50ID0gNVxuICAgIHRoaXMuaW5pdFdvcm1zKDIwLCB7IGR4OiAwLjUsIGR5OiAwLjUgfSlcbiAgICB0aGlzLmNoaWxkQ291bnQgPSAwXG4gICAgdGhpcy5wYXJlbnQuaGl0c1ByZWRhdG9yKClcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4udG9BcnJheSgpKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lDaGlsZChjaGlsZClcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyV29ybVR1dCgpXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJhbmRvbUJldHdlZW4gfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZCB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXkpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5jYW52YXMgPSBkaXNwbGF5LmdldEVsZW1lbnQoJyN3b3JsZCcpXG4gICAgdGhpcy5zaXplID0gdGhpcy5kaXNwbGF5LndvcmxkU2l6ZVxuICAgIHRoaXMuYm91bmRzID0geyB0b3A6IG51bGwsIHJpZ2h0OiBudWxsLCBib3R0b206IG51bGwsIHJpZ2h0OiBudWxsIH1cbiAgICB0aGlzLm9mZnNldHMgPSB7IHRvcDogbnVsbCwgbGVmdDogbnVsbCB9XG4gIH1cblxuICBzZXRCb3VuZHMoYm91bmRzKSB7XG4gICAgdGhpcy5ib3VuZHMgPSBib3VuZHNcbiAgfVxuXG4gIHNldE9mZnNldHMob2Zmc2V0cykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHNcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCB0b3AgPSAwLFxuICAgICAgbGVmdCA9IDAsXG4gICAgICBib3R0b20gPSB0b3AgKyB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICByaWdodCA9IGxlZnQgKyB0aGlzLmNhbnZhcy53aWR0aFxuXG4gICAgcmV0dXJuIHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IH1cbiAgfVxuXG4gIGNoZWNrT3V0T2ZCb3VuZHMgPSAocG9zLCByKSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfSA9IHRoaXMuYm91bmRzLFxuICAgICAgeyB4LCB5IH0gPSBwb3NcblxuICAgIGlmICh4IC0gciA8IGxlZnQpIHJldHVybiB0cnVlXG4gICAgaWYgKHggKyByID4gcmlnaHQpIHJldHVybiB0cnVlXG4gICAgaWYgKHkgLSByIDwgdG9wKSByZXR1cm4gdHJ1ZVxuICAgIGlmICh5ICsgciA+IGJvdHRvbSkgcmV0dXJuIHRydWVcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmNhbnZhcy5vZmZzZXRUb3AsXG4gICAgICBsZWZ0ID0gdGhpcy5jYW52YXMub2Zmc2V0TGVmdFxuICAgIHJldHVybiB7IHRvcCwgbGVmdCB9XG4gIH1cblxuICBnZXRSYW5kb21Qb3MgPSAocmFkaXVzKSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfSA9IHRoaXMuYm91bmRzLFxuICAgICAgciA9IHJhZGl1c1xuXG4gICAgY29uc3QgeCA9IGdldFJhbmRvbUJldHdlZW4obGVmdCArIHIsIHJpZ2h0IC0gciksXG4gICAgICB5ID0gZ2V0UmFuZG9tQmV0d2Vlbih0b3AgKyByLCBib3R0b20gLSByKVxuXG4gICAgcmV0dXJuIHsgeCwgeSB9XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IG9mZnNldHMgPSB0aGlzLmdldE9mZnNldHMoKSxcbiAgICAgIGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKClcblxuICAgIHRoaXMuc2V0T2Zmc2V0cyhvZmZzZXRzKVxuICAgIHRoaXMuc2V0Qm91bmRzKGJvdW5kcylcbiAgfVxufVxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL01vdmluZ09iamVjdCdcblxuY29uc3QgciA9IDEwLFxuICBjID0gJyM5MzYzNDQnLFxuICB2ID0geyBkeDogMiwgZHk6IDIgfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JtIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcG9zLFxuICAgIHJhZGl1cyA9IHIsXG4gICAgd29ybGQsXG4gICAgc3ByaXRlLFxuICAgIHNpemUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSxcbiAgICB2ZWwgPSB2LFxuICAgIGNvbG9yID0gY1xuICApIHtcbiAgICBzdXBlcihwb3MsIHJhZGl1cywgd29ybGQsIHNwcml0ZSwgc2l6ZSwgdmVsLCBjb2xvcilcbiAgICB0aGlzLnNwcml0ZSA9IHNwcml0ZVxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICB0aGlzLm1vdmVzID0gdGhpcy5tb3Zlcy5iaW5kKHRoaXMpXG4gIH1cblxuICBtb3ZlcyhnYW1lKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MsXG4gICAgICBwb3MgPSB7IHg6IHggKyB0aGlzLmN1cnJEaXJbMF0sIHk6IHkgKyB0aGlzLmN1cnJEaXJbMV0gfVxuXG4gICAgaWYgKHRoaXMuY2hlY2tPdXRPZkJvdW5kcyhwb3MpKSB7XG4gICAgICBnYW1lLmRlc3Ryb3lXb3JtKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuc2V0UG9zKHBvcylcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjljODk1ZDM3MTA3NGNmZTJkMDMxMjU3N2ZjNzYzNWQzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MTZiZjkxNjRiNzIzMjgyNDNmNTdlMzliMzQ2MmUzMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmYyZjE5ZDc3Yjk5ZTAwOGIzMmVmZjkxMWZjMWYwN2UucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAzZGMzM2FkZTRlYWQ1Yjg3YTY1OWFiY2UzMjM5NjgzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmOWU2M2NkYjUxNmZhZGQyNWU2ODg1NWNlOTVkYjQ3Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTFjZjA4ZTljZmNmYjMxMzQ1NDYwN2E5ZDhjZjgzMTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFkOTYzYzQ2NGE0MmYxZTM1ZTlhOTAzZTE3MWYxMGU4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyZTZkODg3NDIyOTVkMGVhOTVjZjEzZmQ5YTM4ODI3Zi5wbmdcIjsiLCJpbXBvcnQgRE9NRGlzcGxheSBmcm9tICcuL0Rpc3BsYXkvRE9NRGlzcGxheS5qcydcbmltcG9ydCBJbnRybyBmcm9tICcuL0Rpc3BsYXkvSW50cm8uanMnXG5pbXBvcnQgVHV0b3JpYWwgZnJvbSAnLi9EaXNwbGF5L1R1dG9yaWFsLmpzJ1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBUdXRvcmlhbEdhbWUgZnJvbSAnLi9UdXRvcmlhbEdhbWUnXG5cbmNvbnN0IHdpZHRoID0gTWF0aC5taW4od2luZG93LmlubmVyV2lkdGggLyAxLjIsIDEyMDApLFxuICBoZWlnaHQgPSBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQgLyAxLjIsIDc1MCksXG4gIGRpc3BsYXkgPSBuZXcgRE9NRGlzcGxheSh7IHdpZHRoLCBoZWlnaHQgfSksXG4gIGdhbWUgPSBuZXcgR2FtZShkaXNwbGF5KVxuXG5kaXNwbGF5LnJlbmRlckdhbWUoKVxuZGlzcGxheS5yZW5kZXJUaXRsZSgpXG5kaXNwbGF5LnJlbmRlcldvcmxkKClcblxuY29uc3QgaW50cm9EaXNwbGF5ID0gbmV3IEludHJvKGRpc3BsYXkud29ybGRTaXplKVxuXG5jb25zdCB0dXRvcmlhbERpc3BsYXkgPSBuZXcgVHV0b3JpYWwoZGlzcGxheS53b3JsZFNpemUpXG5cbmZ1bmN0aW9uIG9uVHV0b3JpYWxFbmQoKSB7XG4gIGdhbWUuaW5pdCgpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrVHV0b3JpYWwoKSB7XG4gIGNvbnN0IHR1dG9yaWFsR2FtZSA9IG5ldyBUdXRvcmlhbEdhbWUodHV0b3JpYWxEaXNwbGF5LCBvblR1dG9yaWFsRW5kKVxuICBpbnRyb0Rpc3BsYXkuY2xlYXJJbnRybygpXG4gIHR1dG9yaWFsR2FtZS5pbml0VHV0b3JpYWwoKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGlja1N0YXJ0KCkge1xuICBpbnRyb0Rpc3BsYXkuY2xlYXJJbnRybygpXG4gIGdhbWUuaW5pdCgpXG59XG5cbmludHJvRGlzcGxheS5yZW5kZXJJbnRybygpXG5pbnRyb0Rpc3BsYXkucmVuZGVyVHV0b3JpYWxCdXR0b24oaGFuZGxlQ2xpY2tUdXRvcmlhbClcbmludHJvRGlzcGxheS5yZW5kZXJTdGFydExpbmsoaGFuZGxlQ2xpY2tTdGFydClcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImZ1bmN0aW9uIGdldFJhbmRvbUludChtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSlcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQmV0d2VlbihtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKVxuICBtYXggPSBNYXRoLmZsb29yKG1heClcbiAgLy8gaW5jbHVzaXZlXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cbmZ1bmN0aW9uIGluUmFuZ2UobnVtLCBtaW4sIG1heCkge1xuICByZXR1cm4gbnVtID49IG1pbiAmJiBudW0gPD0gbWF4XG59XG5cbi8vIERpZG4ndCB1c2VcbmZ1bmN0aW9uIGNhbGN1bGF0ZUh5cG90ZW51c2UoYSwgYikge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGEsIDIpICsgTWF0aC5wb3coYiwgMikpXG59XG5cbi8vIERpZG4ndCB1c2VcbmZ1bmN0aW9uIGVhc2VMaW5lYXIodCwgYiwgYywgZCkge1xuICByZXR1cm4gKGMgKiB0KSAvIGQgKyBiXG59XG5leHBvcnQgeyBnZXRSYW5kb21JbnQsIGluUmFuZ2UsIGdldFJhbmRvbUJldHdlZW4gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==