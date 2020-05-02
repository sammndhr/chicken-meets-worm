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
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\n\nhtml,\nbutton {\n  text-align: center;\n  font-size: 1rem;\n  font-family: 'Schoolbell', sans-serif;\n  letter-spacing: 5px;\n}\n\nbutton.btn {\n  padding: 1rem;\n  padding: 1rem 2rem;\n  text-align: center;\n  cursor: pointer;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  margin: 5px auto;\n  transition-duration: 0.4s;\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.game {\n  margin: 0 auto;\n}\n\n.title h1 {\n  font-size: 24px;\n  margin: 32px;\n}\n\n.world-wrapper {\n  margin: 0 auto;\n}\n\n.legend {\n  position: absolute;\n  top: 98px;\n  text-align: left;\n}\n\n.legend > div {\n  margin-left: 10px;\n  margin: 10px;\n}\n\n.legend-text {\n  font-size: 32px;\n  line-height: 32px;\n}\n\ndiv.chain-wrapper {\n  margin: 5px;\n}\n\n.chain-wrapper .image#chain-count {\n  height: 30px;\n  width: 30px;\n  margin-right: 5px;\n}\n\n.chain-wrapper .chain {\n  margin: 0 auto;\n}\n\n#world {\n  border: 2px solid black;\n  background-color: rgb(194, 255, 194);\n}\n\n.worm-left {\n  width: 20px;\n}\n\n.worm-right {\n  width: 20px;\n}\n\n.animate {\n  animation: pulse 2s ease;\n}\n\n.end-wrapper,\n.intro-wrapper {\n  position: absolute;\n  font-size: 32px;\n  margin: 0 auto;\n}\n\n.intro-wrapper {\n  font-size: 24px;\n  width: 100%;\n}\n\n.intro {\n  width: 100%;\n}\n\n.intro-message {\n  display: block;\n  width: 100%;\n  padding: 16px;\n}\n\n.start {\n  display: block;\n  cursor: pointer;\n  border-bottom: 1px solid black;\n  width: max-content;\n  margin: 16px auto;\n}\n\n.start:hover {\n  color: red;\n  border-bottom-color: red;\n}\n\n.game-end {\n  width: max-content;\n  margin: 0 auto;\n  padding: 30px 80px;\n}\n\n.game-end {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.game-end div {\n  margin-bottom: 5px;\n}\n\n.game-end > .wrapper > .score {\n  color: red;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(2);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n.tutorial-wrapper {\n  position: absolute;\n}\n\n.tutorial-message {\n  width: 50%;\n  margin: 0 auto;\n}\n\n.tutorial-msg-keypress {\n  position: absolute;\n}\n", ""]);
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
      _this.getElement(selector).innerText = val;
    });

    _defineProperty(this, "renderGame", function () {
      var game = _this.createElement('div', 'game', 'game');

      _this.game = game;
      document.body.appendChild(_this.game);
    });

    _defineProperty(this, "renderTitle", function () {
      var title = _this.createElement('div', 'title', null);

      var heading = _this.createElement('h1', null, null, 'CHICKEN MEETS WORM');

      _this.game.append(title);

      title.append(heading);
    });

    _defineProperty(this, "renderWorld", function () {
      var worldWrapper = _this.createElement('div', 'world-wrapper'),
          world = _this.createElement('canvas', null, 'world'),
          legend = _this.createElement('div', 'legend', 'legend'),
          _this$worldSize = _this.worldSize,
          width = _this$worldSize.width,
          height = _this$worldSize.height;

      world.width = _this.worldSize.width;
      world.height = _this.worldSize.height;

      _this.game.append(worldWrapper);

      worldWrapper.append(legend);
      worldWrapper.append(world);
      worldWrapper.style.width = width + 2 + 'px';
      worldWrapper.style.height = height + 2 + 'px';
      _this.worldWrapper = worldWrapper;
      _this.legend = legend;
      _this.world = world;
    });

    _defineProperty(this, "renderGameEnd", function (handleClickReplay, score, highScore) {
      var gameEndWrapper = _this.createElement('div', 'end-wrapper');

      var gameEnd = _this.createElement('div', 'game-end');

      gameEndWrapper.style.width = _this.worldSize.width + 4 + 'px';
      _this.gameEnd = gameEnd;
      _this.gameEndWrapper = gameEndWrapper;

      _this.worldWrapper.append(gameEndWrapper);

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
      var message = _this.createElement('div', 'game-over', null, 'Game Over!');

      _this.gameEnd.append(message);
    });

    _defineProperty(this, "renderReplayButton", function (handleClickReplay) {
      var button = _this.createElement('button', 'btn', 'replay');

      button.innerText = 'Replay';
      button.addEventListener('click', handleClickReplay);

      _this.gameEnd.append(button);
    });

    _defineProperty(this, "renderEndScore", function (score, highScore) {
      var endScoreWrapper = _this.createElement('div', 'wrapper');

      var endScoreLabel = _this.createElement('span', 'score-label', null, 'Your score: ');

      var endScore = _this.createElement('span', 'score', 'end-score', score.toString());

      var bestScoreWrapper = _this.createElement('div', 'wrapper');

      var bestScoreLabel = _this.createElement('span', 'score-label', null, 'Best score: ');

      var bestScore = _this.createElement('span', 'score', 'best-score', highScore.toString());

      endScoreWrapper.append(endScoreLabel);
      endScoreWrapper.append(endScore);
      bestScoreWrapper.append(bestScoreLabel);
      bestScoreWrapper.append(bestScore);

      _this.gameEnd.append(endScoreWrapper);

      _this.gameEnd.append(bestScoreWrapper);
    });

    this.game = null;
    this.worldSize = {
      width: _width,
      height: _height
    };
    this.worldWrapper = null;
    this.gameEnd = null;
    this.legend = null;
    this.world = null;
    this.renderChain = this.renderChain.bind(this);
    this.renderEnergy = this.renderEnergy.bind(this);
    this.renderScore = this.renderScore.bind(this);
  }

  _createClass(DOMDisplay, [{
    key: "renderEnergy",
    value: function renderEnergy() {
      var energyWrapper = this.createElement('div', 'energy-wrapper', 'energy-wrapper');
      this.legend.appendChild(energyWrapper);
      this.updateEnergyBar(5);
    }
  }, {
    key: "renderChain",
    value: function renderChain() {
      var chainWrapper = this.createElement('div', 'chain-wrapper');
      var countImg = this.createImage(_imgs_count_png__WEBPACK_IMPORTED_MODULE_0__["default"], 'image', 'chain-count');
      var chain = this.createElement('span', 'legend-text', 'chain');
      this.legend.append(chainWrapper);
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
        var left = true;
        var wormCount = eW.childElementCount;

        if (wormCount % 2 !== 0) {
          eW.append(this.createImage(_imgs_worm_right_png__WEBPACK_IMPORTED_MODULE_2__["default"], 'worm-right'));
          wormCount++;
        }

        while (wormCount < i) {
          var wormL = this.createImage(_imgs_worm_left_png__WEBPACK_IMPORTED_MODULE_1__["default"], 'worm-left');
          var wormR = this.createImage(_imgs_worm_right_png__WEBPACK_IMPORTED_MODULE_2__["default"], 'worm-right');

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
      var score = this.createElement('div', ['legend-text', 'score'], 'score');
      this.legend.append(score);
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

  function Intro(game, worldWrapper, worldSize) {
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
      var introWrapper = _this.createElement('div', 'intro-wrapper');

      var introPic = _this.createImage(_imgs_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"], 'logo');

      var intro = _this.createElement('div', 'intro');

      var introMessage = _this.createElement('span', 'intro-message', null, 'Feast on worms, protect your children!');

      _this.worldWrapper.append(introWrapper);

      intro.append(introPic);
      intro.append(introMessage);
      introWrapper.append(intro);
      introWrapper.style.width = _this.worldSize.width + 4 + 'px';
      introWrapper.style.top = 98 + _this.worldSize.height / 6 + 'px';
      _this.introWrapper = introWrapper;
    });

    _defineProperty(_assertThisInitialized(_this), "clearIntro", function () {
      _this.worldWrapper.removeChild(_this.introWrapper);
    });

    _this.game = game;
    _this.worldWrapper = worldWrapper;
    _this.introWrapper = null;
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

  function Tutorial(game, world, worldWrapper, worldSize, _legend) {
    var _this;

    _classCallCheck(this, Tutorial);

    _this = _super.call(this, worldSize);

    _defineProperty(_assertThisInitialized(_this), "changeMessage", function (message, time) {
      _this.settimeout = setTimeout(function () {
        _this.updateElement('#tut-msg-0', message);
      }, time);
    });

    _defineProperty(_assertThisInitialized(_this), "renderMoveParentTut", function () {
      var legend = _this.legend;
      if (legend) legend.style.display = 'none';
      _this.tutorialMsgWrapper = _this.createElement('div', 'tutorial-wrapper');

      var message1 = _this.createElement('div', 'tutorial-message', 'tut-msg-0', 'Move your mouse to move the chicken.');

      var message2 = _this.createElement('div', 'tutorial-msg-keypress', 'tut-msg-1', 'Hit enter to continue and space to skip tutorial.');

      _this.worldWrapper.append(_this.tutorialMsgWrapper);

      _this.worldWrapper.append(message2);

      _this.tutorialMsgWrapper.style.width = _this.worldSize.width + 4 + 'px';
      _this.tutorialMsgWrapper.style.top = '120px';
      message2.style.width = _this.worldSize.width + 4 + 'px';
      message2.style.top = 65 + _this.worldSize.height + 'px';

      _this.tutorialMsgWrapper.append(message1);
    });

    _defineProperty(_assertThisInitialized(_this), "renderChildrenTut", function () {
      if (_this.legend) _this.legend.style.display = 'block';

      _this.updateElement('#tut-msg-0', 'Hover over the baby chicks to make them stick close to you.');

      _this.changeMessage('The longer your chain, the higher your score increments.', 3800);
    });

    _defineProperty(_assertThisInitialized(_this), "renderPredatorTut", function () {
      clearTimeout(_this.settimeout);

      var energyWrapper = _this.getElement('#energy-wrapper'); // if (energyWrapper) energyWrapper.style.display = 'none'


      _this.updateElement('#tut-msg-0', "Watch out for predators. Nyan-chan didn't get fat eating grass.");

      _this.changeMessage("The worms show your health. Every encounter with a cat costs you 1 worm. The game ends when you're out of worms.", 4000);
    });

    _defineProperty(_assertThisInitialized(_this), "renderClickParentTut", function () {
      clearTimeout(_this.settimeout);

      _this.updateElement('#tut-msg-0', 'CLICK to gather all your children in one place for the cheap price of half a worm.');

      _this.changeMessage("Do this sparingly, cause you wont't be able to move while clicking!", 5000);
    });

    _defineProperty(_assertThisInitialized(_this), "renderWormTut", function () {
      clearTimeout(_this.settimeout);

      _this.updateElement('#tut-msg-0', 'Replenish your energy by feasting on delicious worms. You can have some extra for the tutorial.');
    });

    _this.game = game;
    _this.world = world;
    _this.worldWrapper = worldWrapper;
    _this.introWrapper = null;
    _this.legend = _legend;
    _this.tutorialMsgWrapper = null;
    _this.settimeout = null;
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
      var size = {
        width: r * 2,
        height: r * 2
      };

      while (_this.worms.size < _this.wormCount) {
        var randomPos = _this.world.getRandomPos(r),
            worm = new _Worm_js__WEBPACK_IMPORTED_MODULE_12__["default"](randomPos, r, _this.world, WormSprite, size, vel && vel);

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

    _defineProperty(this, "replayGame", function () {
      _this.resetGame();

      _this.display.clearGameEnd();
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

      _this.display.renderGameEnd(_this.replayGame, _this.score.score, _this.score.highScore);

      return;
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

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      _this.parent.moves(_this.mouse);

      _this.parent.draw(ctx, {
        x: 30,
        y: 25
      });

      var _iterator = _createForOfIteratorHelper(predators),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var predator = _step.value;
          predator.moves();
          predator.draw(ctx, {
            x: 30,
            y: 25
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(worms),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var worm = _step2.value;
          worm.moves(_this);
          worm.draw(ctx, {
            x: 0,
            y: 0
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(children),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var child = _step3.value;
          if (child.independence) child.moves();
          child.draw(ctx, {
            x: 15,
            y: 15
          });
          _this.clicking ? child.setClicking(true) : child.setClicking(false);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
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
    this.checkInRange = this.checkInRange.bind(this);
    this.destroyChild = this.destroyChild.bind(this);
  }

  _createClass(Game, [{
    key: "destroyChild",
    value: function destroyChild(child) {
      this.children.deleteNode(child);
      this.spawnChildren(17.5);
    }
  }, {
    key: "checkInRange",
    value: function checkInRange() {
      var parent = this.parent,
          children = this.children.toArray(),
          predators = this.predators.toArray(),
          worms = this.worms.toArray(); // Child predator collisions

      var _iterator4 = _createForOfIteratorHelper(children),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var child = _step4.value;

          if (parent.checkInRange(child)) {
            parent.hitsChild(child);
            this.spawnChildren(17.5);
          }

          var _iterator7 = _createForOfIteratorHelper(predators),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var predator = _step7.value;
              if (child.checkInRange(predator, 10)) child.avoidPredator();
              if (child.checkInRange(predator, 0)) child.hitsPredator(this);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        } // Parent predator collisions

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var _iterator5 = _createForOfIteratorHelper(predators),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _predator = _step5.value;
          if (parent.checkInRange(_predator, 5)) parent.checkCollisionWithPredator(_predator);
        } //Parent worm collisions

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
          if (parent.checkInRange(worm, 2)) parent.hitsWorm(this, worm);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "init",
    value: function init() {
      // this.display.renderGame()
      // this.display.renderTitle()
      // this.display.renderWorld()
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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
          var vel = {
            dx: 3,
            dy: 3
          };
          child.setVelocity(vel);

          var _child$currDir = _slicedToArray(child.currDir, 2),
              x = _child$currDir[0],
              y = _child$currDir[1],
              dx = vel.dx,
              dy = vel.dy;

          child.setCurrDir([x * dx, y * dy]);
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

  function TutorialGame(display) {
    var _this;

    var childCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var predatorCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var wormCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, TutorialGame);

    _this = _super.call(this, display, childCount, predatorCount, wormCount);

    _defineProperty(_assertThisInitialized(_this), "drawTutorial", function (timestamp) {
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

        var _iterator = _createForOfIteratorHelper(children),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var child = _step.value;
            if (child.independence) child.moves();
            child.draw(ctx, {
              x: 15,
              y: 15
            });
            _this.clicking ? child.setClicking(true) : child.setClicking(false);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (_this.tutorialNo >= 2) {
        var predators = _this.predators.toArray();

        var _iterator2 = _createForOfIteratorHelper(predators),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var predator = _step2.value;
            predator.moves();
            predator.draw(ctx, {
              x: 30,
              y: 25
            });
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      if (_this.tutorialNo >= 2) {
        if (_this.energy.count === 0) {
          return _this.gameOver();
        }
      }

      if (_this.tutorialNo >= 4) {
        var timePassed = timestamp - _this.timeSinceWorm;

        if (timePassed >= 10 && _this.worms.size < _this.wormCount) {
          _this.spawnWorms(20, _defineProperty({
            dy: 0.5
          }, "dy", 0.5));

          _this.timeSinceWorm = timestamp;
        }

        var worms = _this.worms.toArray();

        var _iterator3 = _createForOfIteratorHelper(worms),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var worm = _step3.value;
            worm.moves(_assertThisInitialized(_this));
            worm.draw(ctx, {
              x: 0,
              y: 0
            });
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      _this.checkInRange();

      _this.animationReq = window.requestAnimationFrame(_this.drawTutorial);
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

      window.addEventListener('mousemove', _this.handleMouseMove, false);
      window.addEventListener('keydown', _this.handlePressSpace);
      _this.animationReq = window.requestAnimationFrame(_this.drawTutorial);
    });

    _defineProperty(_assertThisInitialized(_this), "initTutorial1", function () {
      _this.setTutorialNo(1);

      _this.display.renderScore();

      _this.display.renderChain();

      _this.initChain();

      _this.parent.chain = _this.chain;

      _this.initScore();

      _this.parent.score = _this.score;
      _this.childCount = 5;

      _this.initChildren(17.5);

      _this.display.renderChildrenTut();
    });

    _defineProperty(_assertThisInitialized(_this), "initTutorial2", function () {
      _this.setTutorialNo(2);

      _this.score.reset();

      _this.parent.deleteAllChildren();

      var _iterator4 = _createForOfIteratorHelper(_this.children.toArray()),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var child = _step4.value;
          child.setPos(child.getRandomPos());
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
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

      _this.score.reset();

      _this.energy.reset();

      _this.display.clearGameEnd();

      var children = _this.children.toArray();

      var _iterator5 = _createForOfIteratorHelper(children),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var child = _step5.value;

          _this.parent.hitsChild(child);

          child.moves(_this.parent.pos);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      var pred = _this.predators.toArray()[0];

      _this.animationReq = window.requestAnimationFrame(_this.drawTutorial);
      pred.setPos({
        x: 35,
        y: 35
      });
      pred.setCurrDir([0.23, -1]);

      _this.display.renderClickParentTut();
    });

    _defineProperty(_assertThisInitialized(_this), "initTutorial4", function () {
      _this.setTutorialNo(4);

      _this.score.reset();

      _this.energy.max = 5;

      _this.energy.reset();

      _this.display.clearGameEnd();

      _this.parent.deleteAllChildren();

      var _iterator6 = _createForOfIteratorHelper(_this.children.toArray()),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var child = _step6.value;
          child.setPos(child.getRandomPos());
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
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

      _this.display.renderWormTut();
    });

    _defineProperty(_assertThisInitialized(_this), "initGame", function () {
      window.removeEventListener('mousedown', _this.handleMouseDown, false);
      window.removeEventListener('mouseup', _this.handleMouseUp, false);
      window.cancelAnimationFrame(_this.animationReq);
      window.removeEventListener('mousemove', _this.handleMouseMove, false);
    });

    _defineProperty(_assertThisInitialized(_this), "handlePressSpace", function (e) {
      if (e.keyCode === 32) console.log('game start');
      if (e.keyCode !== 13) return;

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

    _this.tutorialNo = 0;
    _this.destroyChild = _this.destroyChild.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TutorialGame, [{
    key: "checkInRange",
    value: function checkInRange() {
      var parent = this.parent,
          children = this.children.toArray(),
          predators = this.predators.toArray(),
          worms = this.worms.toArray(); // Child predator collisions

      var _iterator7 = _createForOfIteratorHelper(children),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var child = _step7.value;

          if (parent.checkInRange(child)) {
            parent.hitsChild(child);
            if (this.tutorialNo > 5) this.spawnChildren(17.5);
          }

          var _iterator10 = _createForOfIteratorHelper(predators),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var predator = _step10.value;
              if (child.checkInRange(predator, 10)) child.avoidPredator();
              if (child.checkInRange(predator, 0)) child.hitsPredator(this);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        } // Parent predator collisions

      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      var _iterator8 = _createForOfIteratorHelper(predators),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _predator = _step8.value;
          if (parent.checkInRange(_predator, 5)) parent.checkCollisionWithPredator(_predator);
        } //Parent worm collisions

      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      var _iterator9 = _createForOfIteratorHelper(worms),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var worm = _step9.value;
          if (parent.checkInRange(worm, 2)) parent.hitsWorm(this, worm);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "destroyChild",
    value: function destroyChild(child) {
      this.children.deleteNode(child);
      if (this.tutorialNo > 100 || this.children.size < this.childCount) this.spawnChildren(17.5);
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
    this.canvas = display.world;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Child; });
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

var Child = /*#__PURE__*/function (_MovingObject) {
  _inherits(Child, _MovingObject);

  var _super = _createSuper(Child);

  function Child(pos) {
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

    _this = _super.call(this, pos, radius, world, sprite, size, vel, color);
    _this.sprite = sprite;
    _this.size = size;
    _this.moves = _this.moves.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Child, [{
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

  return Child;
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
var introDisplay = new _Display_Intro_js__WEBPACK_IMPORTED_MODULE_1__["default"](display.game, display.worldWrapper, display.worldSize);
var tutorialDisplay = new _Display_Tutorial_js__WEBPACK_IMPORTED_MODULE_2__["default"](display.game, display.world, display.worldWrapper, display.worldSize, display.legend);

function handleClickTutorial() {
  var tutorialGame = new _TutorialGame__WEBPACK_IMPORTED_MODULE_5__["default"](tutorialDisplay);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRhX3N0cnVjdHVyZXMvZGlzdC9EYXRhU3RydWN0dXJlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9DaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlzcGxheS9ET01EaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9EaXNwbGF5L0ludHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9EaXNwbGF5L1R1dG9yaWFsLmpzIiwid2VicGFjazovLy8uL3NyYy9FbmVyZ3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vdmluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFyZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9QcmVkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1R1dG9yaWFsR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ3MvY2hpbGQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWdzL2NvdW50LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy9wYXJlbnQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWdzL3ByZWRhdG9yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy93b3JtLWxlZnQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWdzL3dvcm0tcmlnaHQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWdzL3dvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkNoYWluIiwiZGlzcGxheSIsImNvdW50Iiwic2V0Q291bnQiLCJ1cGRhdGVDaGFpbiIsIk1hdGgiLCJtYXgiLCJtaW4iLCJ1cGRhdGVFbGVtZW50IiwiciIsImMiLCJ2IiwiZHgiLCJkeSIsIkNoaWxkIiwicG9zIiwicmFkaXVzIiwid29ybGQiLCJzcHJpdGUiLCJzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ2ZWwiLCJjb2xvciIsImNsaWNraW5nIiwicGFyZW50IiwiY2hhaW5Qb3MiLCJjaGlsZCIsIm5leHRDaGlsZCIsImluZGVwZW5kZW5jZSIsIngiLCJ5IiwiY3VyckRpciIsInNldFJhbmRvbURpciIsImJvdW5jZUJhY2siLCJwb3NDYWNoZSIsIm1vdmVzIiwiYmluZCIsImhpdHNQcmVkYXRvciIsImdhbWUiLCJpc0luZGVwZW5kZW50IiwiZGVzdHJveUNoaWxkIiwiY3VyciIsImRlbGV0ZUxhc3RDaGlsZCIsImVhc2luZyIsIm9mZnNldCIsImxlbmd0aCIsIk1vdmluZ09iamVjdCIsIkRPTURpc3BsYXkiLCJzcmMiLCJjbGFzc05hbWUiLCJpZCIsImltZyIsIkltYWdlIiwiY2xhc3NMaXN0IiwiYWRkIiwid29ybUNsYXNzIiwid29ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJlbW92ZSIsInRhZyIsImNvbnRlbnQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsIm5hbWUiLCJpbm5lclRleHQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWwiLCJnZXRFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJoZWFkaW5nIiwiYXBwZW5kIiwid29ybGRXcmFwcGVyIiwibGVnZW5kIiwid29ybGRTaXplIiwic3R5bGUiLCJoYW5kbGVDbGlja1JlcGxheSIsInNjb3JlIiwiaGlnaFNjb3JlIiwiZ2FtZUVuZFdyYXBwZXIiLCJnYW1lRW5kIiwidG9wIiwicmVuZGVyR2FtZU92ZXJNZXNzYWdlIiwicmVuZGVyRW5kU2NvcmUiLCJyZW5kZXJSZXBsYXlCdXR0b24iLCJyZW1vdmVDaGlsZCIsIm1lc3NhZ2UiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZW5kU2NvcmVXcmFwcGVyIiwiZW5kU2NvcmVMYWJlbCIsImVuZFNjb3JlIiwidG9TdHJpbmciLCJiZXN0U2NvcmVXcmFwcGVyIiwiYmVzdFNjb3JlTGFiZWwiLCJiZXN0U2NvcmUiLCJyZW5kZXJDaGFpbiIsInJlbmRlckVuZXJneSIsInJlbmRlclNjb3JlIiwiZW5lcmd5V3JhcHBlciIsInVwZGF0ZUVuZXJneUJhciIsImNoYWluV3JhcHBlciIsImNvdW50SW1nIiwiY3JlYXRlSW1hZ2UiLCJjaGlsZENvdW50SW1nIiwiY2hhaW4iLCJlVyIsImkiLCJjaGlsZEVsZW1lbnRDb3VudCIsImxhc3RDaGlsZCIsImxlZnQiLCJ3b3JtQ291bnQiLCJ3b3JtUmlnaHQiLCJ3b3JtTCIsIndvcm1MZWZ0Iiwid29ybVIiLCJJbnRybyIsImhhbmRsZUNsaWNrVHV0b3JpYWwiLCJpbnRyb1dyYXBwZXIiLCJoYW5kbGVDbGlja1N0YXJ0IiwibGluayIsImludHJvUGljIiwibG9nbyIsImludHJvIiwiaW50cm9NZXNzYWdlIiwiVHV0b3JpYWwiLCJ0aW1lIiwic2V0dGltZW91dCIsInNldFRpbWVvdXQiLCJ0dXRvcmlhbE1zZ1dyYXBwZXIiLCJtZXNzYWdlMSIsIm1lc3NhZ2UyIiwiY2hhbmdlTWVzc2FnZSIsImNsZWFyVGltZW91dCIsIkVuZXJneSIsImVuZXJneSIsInVwZGF0ZUVuZXJneSIsIkNoaWxkU3ByaXRlIiwiY2hpbGRJbWciLCJQYXJlbnRTcHJpdGUiLCJwYXJlbnRJbWFnZSIsIlByZWRhdG9yU3ByaXRlIiwicHJlZGF0b3JJbWFnZSIsIldvcm1TcHJpdGUiLCJ3b3JtSW1hZ2UiLCJHYW1lIiwiY2hpbGRDb3VudCIsInByZWRhdG9yQ291bnQiLCJlIiwibW91c2UiLCJjbGllbnRYIiwiY2xpZW50WSIsInJlbW92ZUFuaW1hdGlvbiIsImFuaW1hdGUiLCJnZXRDaGlsZENvdW50IiwiZGVjcmVtZW50Q291bnRCeUhhbGYiLCJ3b3JtcyIsImRlbGV0ZU5vZGUiLCJpbmRlcGVuZGVudEMiLCJjaGlsZHJlbiIsInJhbmRvbVBvcyIsImdldFJhbmRvbVBvcyIsImFwcGVuZFRvVGFpbCIsInByZWRhdG9ycyIsInByZWRhdG9yIiwiUHJlZGF0b3IiLCJXb3JtIiwic3Bhd25DaGlsZHJlbiIsInNwYXduUHJlZGF0b3JzIiwiaW5pdGlhbFBvcyIsIlBhcmVudCIsInNwYXduV29ybXMiLCJpbml0IiwiV29ybGQiLCJTY29yZSIsImluaXRDb3VudCIsInJlc2V0R2FtZSIsImNsZWFyR2FtZUVuZCIsInJlc2V0IiwiTGlua2VkTGlzdCIsInRpbWVTaW5jZVdvcm0iLCJpbml0V29ybGQiLCJpbml0Q2hhaW4iLCJpbml0UGFyZW50IiwiaW5pdENoaWxkcmVuIiwiaW5pdFByZWRhdG9ycyIsImluaXRXb3JtcyIsImFuaW1hdGlvblJlcSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJjYWxjdWxhdGVIaWdoU2NvcmUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbmRlckdhbWVFbmQiLCJyZXBsYXlHYW1lIiwidGltZXN0YW1wIiwiZ2FtZU92ZXIiLCJ0aW1lUGFzc2VkIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInRvQXJyYXkiLCJjbGVhclJlY3QiLCJzZXRDbGlja2luZyIsImNoZWNrSW5SYW5nZSIsImhpdHNDaGlsZCIsImF2b2lkUHJlZGF0b3IiLCJjaGVja0NvbGxpc2lvbldpdGhQcmVkYXRvciIsImhpdHNXb3JtIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlTW91c2VVcCIsImluaXRFbmVyZ3kiLCJpbml0U2NvcmUiLCJ2ZWxvY2l0eSIsImRpciIsImluZGV4IiwiZ2V0UmFuZG9tSW50IiwicG9zc2libGVEaXJlY3Rpb25zIiwic2V0Q3VyckRpciIsImNoZWNrT3V0T2ZCb3VuZHMiLCJib3VuZHMiLCJyaWdodCIsImJvdHRvbSIsImNvbnN0cnVjdG9yIiwic2V0VmVsb2NpdHkiLCJuUG9zIiwiZHJhd0ltYWdlIiwiY2xpcHBlZFgiLCJjbGlwcGVkWSIsIm1vdmVzV2l0aEN1cnNvciIsImhpdHNQYXJlbnQiLCJvYmoiLCJjdXNoaW9uIiwib1BvcyIsIm9SIiwicmFuZ2VYIiwicmFuZ2VZIiwid2l0aGluUmFuZ2UiLCJpblJhbmdlIiwib2Zmc2V0cyIsIm9mZnNldEwiLCJvZmZzZXRUIiwicmVsYXRpdmVYIiwicmVsYXRpdmVZIiwieERpZmYiLCJ5RGlmZiIsInZlbFgiLCJ2ZWxZIiwiY2xpcHBlZFBvcyIsImNsaXBQb3MiLCJzZXRQb3MiLCJzaGlmdCIsInB1c2giLCJzZXRQb3NDYWNoZSIsImN1cnJQcmVkQ29scyIsImRlbGV0ZUZyb21UYWlsIiwic2V0Q2hhaW5Qb3MiLCJzZXROZXh0Q2hpbGQiLCJzZXRJbmRlcGVuZGVuY2UiLCJkZWNyZW1lbnRDb3VudCIsInNldFBhcmVudCIsInNlYXJjaCIsImluY3JlbWVudENvdW50IiwiY2FsY3VsYXRlU2NvcmUiLCJ0YWlsIiwiY29sbGlkZWQiLCJjb2xsaWRpbmciLCJpbmNsdWRlcyIsInNsaWNlIiwic2V0Q3VyclByZWRDb2xzIiwiaW5kZXhPZiIsInNwbGljZSIsImRlc3Ryb3lXb3JtIiwiZmlyc3RDaGlsZCIsImhlYWQiLCJzZXRTY29yZSIsInVwZGF0ZVNjb3JlIiwiY2hhaW5Db3VudCIsInNjb3JlVG9BZGQiLCJuZXdTY29yZSIsInNldEhpZ2hTY29yZSIsIlR1dG9yaWFsR2FtZSIsInR1dG9yaWFsTm8iLCJkcmF3VHV0b3JpYWwiLCJudW1iZXIiLCJpbml0VHV0b3JpYWwwIiwic2V0VHV0b3JpYWxObyIsInJlbmRlck1vdmVQYXJlbnRUdXQiLCJoYW5kbGVQcmVzc1NwYWNlIiwicmVuZGVyQ2hpbGRyZW5UdXQiLCJkZWxldGVBbGxDaGlsZHJlbiIsInByZWQiLCJyZW5kZXJQcmVkYXRvclR1dCIsInJlbmRlckNsaWNrUGFyZW50VHV0IiwicmVuZGVyV29ybVR1dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXlDb2RlIiwiY29uc29sZSIsImxvZyIsImluaXRUdXRvcmlhbDEiLCJpbml0VHV0b3JpYWwyIiwiaW5pdFR1dG9yaWFsMyIsImluaXRUdXRvcmlhbDQiLCJnZXRSYW5kb21CZXR3ZWVuIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsImdldE9mZnNldHMiLCJnZXRCb3VuZHMiLCJzZXRPZmZzZXRzIiwic2V0Qm91bmRzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVuZGVyR2FtZSIsInJlbmRlclRpdGxlIiwicmVuZGVyV29ybGQiLCJpbnRyb0Rpc3BsYXkiLCJ0dXRvcmlhbERpc3BsYXkiLCJ0dXRvcmlhbEdhbWUiLCJjbGVhckludHJvIiwiaW5pdFR1dG9yaWFsIiwicmVuZGVySW50cm8iLCJyZW5kZXJUdXRvcmlhbEJ1dHRvbiIsInJlbmRlclN0YXJ0TGluayIsImZsb29yIiwicmFuZG9tIiwiY2VpbCIsIm51bSIsImNhbGN1bGF0ZUh5cG90ZW51c2UiLCJhIiwiYiIsInNxcnQiLCJwb3ciLCJlYXNlTGluZWFyIiwidCIsImQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEw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Q0MsQ0FBaEMsRUFBbUM7QUFDakMsU0FBTzNVLElBQUksQ0FBQzRVLElBQUwsQ0FBVTVVLElBQUksQ0FBQzZVLEdBQUwsQ0FBU0gsQ0FBVCxFQUFZLENBQVosSUFBaUIxVSxJQUFJLENBQUM2VSxHQUFMLENBQVNGLENBQVQsRUFBWSxDQUFaLENBQTNCLENBQVA7QUFDRCxDLENBRUQ7OztBQUNBLFNBQVNHLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXVCSixDQUF2QixFQUEwQnRVLENBQTFCLEVBQTZCMlUsQ0FBN0IsRUFBZ0M7QUFDOUIsU0FBUTNVLENBQUMsR0FBRzBVLENBQUwsR0FBVUMsQ0FBVixHQUFjTCxDQUFyQjtBQUNEIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TY2hvb2xiZWxsJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogJ1NjaG9vbGJlbGwnLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG59XFxuXFxuYnV0dG9uLmJ0biB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luOiA1cHggYXV0bztcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZ2FtZSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnRpdGxlIGgxIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG1hcmdpbjogMzJweDtcXG59XFxuXFxuLndvcmxkLXdyYXBwZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5sZWdlbmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA5OHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmxlZ2VuZCA+IGRpdiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmxlZ2VuZC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG5kaXYuY2hhaW4td3JhcHBlciB7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLmNoYWluLXdyYXBwZXIgLmltYWdlI2NoYWluLWNvdW50IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5jaGFpbi13cmFwcGVyIC5jaGFpbiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI3dvcmxkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMjU1LCAxOTQpO1xcbn1cXG5cXG4ud29ybS1sZWZ0IHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4ud29ybS1yaWdodCB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmFuaW1hdGUge1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBlYXNlO1xcbn1cXG5cXG4uZW5kLXdyYXBwZXIsXFxuLmludHJvLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5pbnRyby13cmFwcGVyIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW50cm8ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbnRyby1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXJnaW46IDE2cHggYXV0bztcXG59XFxuXFxuLnN0YXJ0OmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZWQ7XFxufVxcblxcbi5nYW1lLWVuZCB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDMwcHggODBweDtcXG59XFxuXFxuLmdhbWUtZW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmdhbWUtZW5kIGRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5nYW1lLWVuZCA+IC53cmFwcGVyID4gLnNjb3JlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cXG4udHV0b3JpYWwtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi50dXRvcmlhbC1tZXNzYWdlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnR1dG9yaWFsLW1zZy1rZXlwcmVzcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEYXRhU3RydWN0dXJlc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEYXRhU3RydWN0dXJlc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL0JpbmFyeUhlYXAvTWF4QmluYXJ5SGVhcC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvQmluYXJ5SGVhcC9NYXhCaW5hcnlIZWFwLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5ldmFsKFwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXFxcInZhbHVlXFxcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5nZXQpIHsgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjcmlwdG9yLnZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5zZXQpIHsgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpOyB9IGVsc2UgeyBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFxcXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cXG5cXG52YXIgTWF4QmluYXJ5SGVhcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICBmdW5jdGlvbiBNYXhCaW5hcnlIZWFwKCkge1xcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWF4QmluYXJ5SGVhcCk7XFxuXFxuICAgIF9jb250ZW50LnNldCh0aGlzLCB7XFxuICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICB9KTtcXG5cXG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9jb250ZW50LCBbXSk7XFxuICB9XFxuXFxuICBfY3JlYXRlQ2xhc3MoTWF4QmluYXJ5SGVhcCwgW3tcXG4gICAga2V5OiBcXFwiX3N3YXBcXFwiLFxcbiAgICAvLyBfbWV0aG9kcyBhcmUgaGVscGVycy4gQ2hhbmdlIHRvIHByaXZhdGUgd2hlbiBwcml2YXRlIGluc3RhbmNlIG1ldGhvZHMgYXJlIHN1cHBvcnRlZFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3N3YXAoaSwgaikge1xcbiAgICAgIHZhciB0ZW1wID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtqXTtcXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2pdID0gdGVtcDtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJfYnViYmxlVXBcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2J1YmJsZVVwKGkpIHtcXG4gICAgICB2YXIgZWxlbWVudCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV07XFxuXFxuICAgICAgd2hpbGUgKGkgPiAwKSB7XFxuICAgICAgICB2YXIgcCA9IE1hdGguZmxvb3IoKGkgLSAxKSAvIDIpLFxcbiAgICAgICAgICAgIHBhcmVudCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbcF07XFxuXFxuICAgICAgICBpZiAoZWxlbWVudCA+IHBhcmVudCkge1xcbiAgICAgICAgICB0aGlzLl9zd2FwKHAsIGkpO1xcblxcbiAgICAgICAgICBpID0gcDtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJfc2lua0Rvd25cXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NpbmtEb3duKHApIHtcXG4gICAgICB2YXIgZWxlbWVudCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbcF0sXFxuICAgICAgICAgIGxhc3RJbmRleCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIC0gMTtcXG5cXG4gICAgICB3aGlsZSAocCA8IGxhc3RJbmRleCkge1xcbiAgICAgICAgdmFyIHIgPSAyICogcCArIDIsXFxuICAgICAgICAgICAgbCA9IHIgLSAxO1xcbiAgICAgICAgdmFyIHN3YXBJbmRleCA9IG51bGwsXFxuICAgICAgICAgICAgbGVmdCA9IHZvaWQgMCxcXG4gICAgICAgICAgICByaWdodCA9IHZvaWQgMCxcXG4gICAgICAgICAgICBtaW4gPSBlbGVtZW50O1xcblxcbiAgICAgICAgaWYgKGwgPD0gbGFzdEluZGV4KSB7XFxuICAgICAgICAgIGxlZnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2xdO1xcbiAgICAgICAgICBpZiAobGVmdCA+IGVsZW1lbnQpIHN3YXBJbmRleCA9IGw7XFxuICAgICAgICAgIG1pbiA9IGxlZnQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpZiAociA8PSBsYXN0SW5kZXgpIHtcXG4gICAgICAgICAgcmlnaHQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW3JdO1xcbiAgICAgICAgICBpZiAocmlnaHQgPiBtaW4pIHN3YXBJbmRleCA9IHI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpZiAoc3dhcEluZGV4ID09IG51bGwpIGJyZWFrO1xcblxcbiAgICAgICAgdGhpcy5fc3dhcChwLCBzd2FwSW5kZXgpO1xcblxcbiAgICAgICAgcCA9IHN3YXBJbmRleDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwicHJpbnRNYXhIZWFwXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50TWF4SGVhcCgpIHtcXG4gICAgICBjb25zb2xlLmxvZyhfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpKTtcXG4gICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJpbnNlcnRcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0KGVsZW1lbnQpIHtcXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnB1c2goZWxlbWVudCk7XFxuXFxuICAgICAgdGhpcy5fYnViYmxlVXAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJleHRyYWN0TWF4XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RNYXgoKSB7XFxuICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIDw9IDApIHJldHVybiBudWxsO1xcbiAgICAgIHZhciBsYXN0SW5kZXggPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCAtIDEsXFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwO1xcbiAgICAgIGlmIChmaXJzdEluZGV4ICE9PSBsYXN0SW5kZXgpIHRoaXMuX3N3YXAoZmlyc3RJbmRleCwgbGFzdEluZGV4KTtcXG5cXG4gICAgICB2YXIgcmVzdWx0ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wb3AoKTtcXG5cXG4gICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggPiAwKSB7XFxuICAgICAgICB0aGlzLl9zaW5rRG93bigwKTtcXG4gICAgICB9XFxuXFxuICAgICAgcmV0dXJuIHJlc3VsdDtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJyZW1vdmVcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQpIHtcXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XFxuICAgICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXSAhPT0gZWxlbWVudCkgY29udGludWU7XFxuICAgICAgICB2YXIgbGFzdEluZGV4ID0gdGhpcy5zaXplIC0gMTtcXG5cXG4gICAgICAgIGlmIChpID09PSBsYXN0SW5kZXgpIHtcXG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wb3AoKTtcXG5cXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB0aGlzLl9zd2FwKGksIGxhc3RJbmRleCk7XFxuXFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnBvcCgpO1xcblxcbiAgICAgICAgdGhpcy5fYnViYmxlVXAoaSk7XFxuXFxuICAgICAgICB0aGlzLl9zaW5rRG93bihpKTtcXG5cXG4gICAgICAgIGJyZWFrO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJzaXplXFxcIixcXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcIm1heFxcXCIsXFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgIHJldHVybiB0aGlzLnNpemUgPyBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpWzBdIDogbnVsbDtcXG4gICAgfVxcbiAgfV0pO1xcblxcbiAgcmV0dXJuIE1heEJpbmFyeUhlYXA7XFxufSgpO1xcblxcbnZhciBfY29udGVudCA9IG5ldyBXZWFrTWFwKCk7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBNYXhCaW5hcnlIZWFwO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0JpbmFyeUhlYXAvTWF4QmluYXJ5SGVhcC5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0JpbmFyeUhlYXAvTWluQmluYXJ5SGVhcC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvQmluYXJ5SGVhcC9NaW5CaW5hcnlIZWFwLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5ldmFsKFwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXFxcInZhbHVlXFxcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5nZXQpIHsgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjcmlwdG9yLnZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5zZXQpIHsgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpOyB9IGVsc2UgeyBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFxcXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cXG5cXG4vLyBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVdDbTNUcVNjQk04XFxuLy8gQW55IG5vZGUgaGFzIGEgdmFsdWUgYXQgbGVhc3QgYXMgc21hbGwgYXMgdGhlIHZhbHVlcyBpbiB0aGF0IG5vZGUncyBjaGlsZHJlbi5cXG4vLyBTb3VyY2U6IGh0dHBzOi8vZWxvcXVlbnRqYXZhc2NyaXB0Lm5ldC8xc3RfZWRpdGlvbi9hcHBlbmRpeDIuaHRtbFxcbnZhciBNaW5CaW5hcnlIZWFwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gIGZ1bmN0aW9uIE1pbkJpbmFyeUhlYXAoKSB7XFxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaW5CaW5hcnlIZWFwKTtcXG5cXG4gICAgX2NvbnRlbnQuc2V0KHRoaXMsIHtcXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICB2YWx1ZTogdm9pZCAwXFxuICAgIH0pO1xcblxcbiAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2NvbnRlbnQsIFtdKTtcXG4gIH1cXG5cXG4gIF9jcmVhdGVDbGFzcyhNaW5CaW5hcnlIZWFwLCBbe1xcbiAgICBrZXk6IFxcXCJfc3dhcFxcXCIsXFxuICAgIC8vIF9tZXRob2RzIGFyZSBoZWxwZXJzLiBDaGFuZ2UgdG8gcHJpdmF0ZSB3aGVuIHByaXZhdGUgaW5zdGFuY2UgbWV0aG9kcyBhcmUgc3VwcG9ydGVkXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc3dhcChpLCBqKSB7XFxuICAgICAgdmFyIHRlbXAgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV0gPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2pdO1xcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbal0gPSB0ZW1wO1xcbiAgICB9XFxuICAgIC8qIGJ1YmJsZVVwIFxcbiAgICAgIDEuIENvbXBhcmUgaXRlbSB0byBwYXJlbnQgYW5kIGNoZWNrIGlmIGl0J3MgbGVzcyB0aGFuIHBhcmVudC4gXFxuICAgICAgMi4gSWYgaXQgaXMgbGVzcyB0aGFuIHBhcmVudCwgc3dhcCBpdC4gXFxuICAgICAgMy4gTm93LCBjb21wYXJlIHRvIHRoZSBuZXcgcGFyZW50IGFuZCBrZWVwIHN3YXBwaW5nIHVudGlsIGl0IGVpdGhlciByZWFjaGVzIHRoZSB0b3Agb2YgdGhlIGhlYXAgb3IgaXQgaXMgPj0gcGFyZW50LiBcXG4gICAgKi9cXG5cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiX2J1YmJsZVVwXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9idWJibGVVcChpKSB7XFxuICAgICAgdmFyIGVsZW1lbnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldO1xcbiAgICAgIC8qIFxcbiAgICAgICAgaW5kZXhpbmcgZnJvbSAwXFxuICAgICAgICBwIGlzIHRoZSBpbmRleCBvZiB0aGUgcGFyZW50XFxuICAgICAgICBpIGlzIHRoZSBpbmRleCBvZiBlaXRoZXIgbGVmdCBvciByaWdodCBjaGlsZFxcbiAgICAgICAgbCBpcyBpbmRleCBvZiBsZWZ0IGNoaWxkXFxuICAgICAgICByIGlzIHRoZSBpbmRleCBvZiB0aGUgcmlnaHQgY2hpbGRcXG4gICAgICAgICBsID0gMnAgKyAxXFxuICAgICAgICByID0gMnAgKyAyXFxuICAgICAgICBwID0gTWF0aC5mbG9vcigoaS0xKS8yKVxcbiAgICAgICAqL1xcblxcblxcbiAgICAgIHdoaWxlIChpID4gMCkge1xcbiAgICAgICAgdmFyIHAgPSBNYXRoLmZsb29yKChpIC0gMSkgLyAyKSxcXG4gICAgICAgICAgICBwYXJlbnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW3BdO1xcblxcbiAgICAgICAgaWYgKGVsZW1lbnQgPCBwYXJlbnQpIHtcXG4gICAgICAgICAgdGhpcy5fc3dhcChwLCBpKTsgLy8gbWFrZSBzdXJlIHRvIGNoYW5nZSBpbmRleCB0byB0aGF0IG9mIHBhcmVudCBhZnRlciBzd2FwcGluZ1xcblxcblxcbiAgICAgICAgICBpID0gcDtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJfc2lua0Rvd25cXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NpbmtEb3duKHApIHtcXG4gICAgICB2YXIgZWxlbWVudCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbcF0sXFxuICAgICAgICAgIGxhc3RJbmRleCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIC0gMTtcXG5cXG4gICAgICB3aGlsZSAocCA8IGxhc3RJbmRleCkge1xcbiAgICAgICAgLy8gSW5mbyBpbiBnZXR0aW5nIGluZGV4IGluIGJ1YmJsZVVwXFxuICAgICAgICB2YXIgciA9IDIgKiBwICsgMixcXG4gICAgICAgICAgICBsID0gciAtIDE7IC8vT3IgMiAqIHAgKyAxXFxuXFxuICAgICAgICB2YXIgc3dhcEluZGV4ID0gbnVsbCxcXG4gICAgICAgICAgICBsZWZ0ID0gdm9pZCAwLFxcbiAgICAgICAgICAgIHJpZ2h0ID0gdm9pZCAwLFxcbiAgICAgICAgICAgIG1pbiA9IGVsZW1lbnQ7IC8vc3RhcnQgb3V0IGFzc3VtaW5nIHRoZSBtaW4gYmV0d2VlbiBsZWZ0LCByaWdodCwgZWxlbWVudCBpcyB0aGUgZWxlbWVudFxcbiAgICAgICAgLy8gaWYgZWxlbWVudCBoYXMgbGVmdCBjaGlsZCwgY29tcGFyZVxcbiAgICAgICAgLy8gaWYgbGVmdCBjaGlsZCA8IGVsZW1lbnQsIHNldCBzd2FwSW5kZXggdG8gdGhlIGxlZnQgaW5kZXggKGwpIGFuZCBtaW4gdG8gbGVmdFxcblxcbiAgICAgICAgaWYgKGwgPD0gbGFzdEluZGV4KSB7XFxuICAgICAgICAgIGxlZnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2xdO1xcbiAgICAgICAgICBpZiAobGVmdCA8IGVsZW1lbnQpIHN3YXBJbmRleCA9IGw7XFxuICAgICAgICAgIG1pbiA9IGxlZnQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpZiAociA8PSBsYXN0SW5kZXgpIHtcXG4gICAgICAgICAgcmlnaHQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW3JdOyAvLyBjb21wYXJlIHRoZSByaWdodCB0byB0aGUgbWluIHNvIGZhciB0byBtYWtlIHN1cmUgdGhlIG1pbiBvZiB0aGUgdGhyZWUgaXRlbXMgZ2V0cyBidWJibGVkIHVwIHdoaWxlIHRoZSBwYXJlbnQgZ2V0cyBzdW5rXFxuXFxuICAgICAgICAgIGlmIChyaWdodCA8IG1pbikgc3dhcEluZGV4ID0gcjtcXG4gICAgICAgIH0gLy8gcGFyZW50IGlzIHNtYWxsZXIgdGhhbiBib3RoIGxlZnQgYW5kIHJpZ2h0IGNoaWxkIHNvIGJyZWFrXFxuXFxuXFxuICAgICAgICBpZiAoc3dhcEluZGV4ID09IG51bGwpIGJyZWFrO1xcblxcbiAgICAgICAgdGhpcy5fc3dhcChwLCBzd2FwSW5kZXgpOyAvLyBzZXQgdGhlIHBhcmVudCBpbmRleCB0byB0aGUgc3dhcCBpbmRleCBzbyBpdCB3aWxsIGNvbnRpbnVlIHRvIHNpbmsgZG93blxcblxcblxcbiAgICAgICAgcCA9IHN3YXBJbmRleDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwicHJpbnRNaW5IZWFwXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50TWluSGVhcCgpIHtcXG4gICAgICBjb25zb2xlLmxvZyhfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpKTtcXG4gICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KTtcXG4gICAgfVxcbiAgICAvKiBpbnNlcnRcXG4gICAgICAxLiBpbnNlcnQgbmV3IGl0ZW0gaW50byB0aGlzLiNjb250ZW50XFxuICAgICAgMi4gYnViYmxlIGl0IHVwIFxcbiAgICAgICovXFxuXFxuICB9LCB7XFxuICAgIGtleTogXFxcImluc2VydFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnQoZWxlbWVudCkge1xcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucHVzaChlbGVtZW50KTtcXG5cXG4gICAgICB0aGlzLl9idWJibGVVcChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCAtIDEpO1xcbiAgICB9XFxuICAgIC8qIGV4dHJhY3RNaW5cXG4gICAgICAxLiBzd2FwIGZpcnN0IGFuZCBsYXN0IGl0ZW1zIGlmIHRoaXMuI2NvbnRlbnQubGVuZ3RoID4gMSAob3IgZmlyc3QgIT09IGxhc3QpXFxuICAgICAgMi4gcG9wIG91dCBsYXN0IGl0ZW0gb2YgYXJyYXkgYW5kIHNhdmUgaXQgaW4gcmVzdWx0XFxuICAgICAgMy4gSWYgbGVuZ3RoIGlzIG1vcmUgdGhhbiBvbmUsIGJ1YmJsZSB0aGUgZmlyc3QgaXRlbSBkb3duXFxuICAgICAgNC4gUmV0dXJuIHRoZSByZXN1bHQgdGhhdCB3YXMgc2F2ZWQgXFxuICAgICAgKi9cXG5cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiZXh0cmFjdE1pblxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0TWluKCkge1xcbiAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCA8PSAwKSByZXR1cm4gbnVsbDsgLy9yZXR1cm4gbnVsbCBpZiBhcnJheSBpcyBlbXB0eVxcblxcbiAgICAgIHZhciBsYXN0SW5kZXggPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCAtIDEsXFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwO1xcbiAgICAgIGlmIChmaXJzdEluZGV4ICE9PSBsYXN0SW5kZXgpIHRoaXMuX3N3YXAoZmlyc3RJbmRleCwgbGFzdEluZGV4KTtcXG5cXG4gICAgICB2YXIgcmVzdWx0ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wb3AoKTtcXG5cXG4gICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggPiAwKSB7XFxuICAgICAgICB0aGlzLl9zaW5rRG93bigwKTtcXG4gICAgICB9XFxuXFxuICAgICAgcmV0dXJuIHJlc3VsdDtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJyZW1vdmVcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQpIHtcXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XFxuICAgICAgICAvLyBpZiBjdXJyIGl0ZW0gZG9lc24ndCBtYXRjaCB0aGUgZWxlbWVudCB0byByZW1vdmUsIGNvbnRpbnVlIHNlYXJjaGluZ1xcbiAgICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV0gIT09IGVsZW1lbnQpIGNvbnRpbnVlOyAvLyBpZiBpdCBkb2VzIG1hdGNoXFxuXFxuICAgICAgICB2YXIgbGFzdEluZGV4ID0gdGhpcy5zaXplIC0gMTsgLy8gaWYgaXQncyB0aGUgbGFzdCBpdGVtLCBwb3AgaXQgYW5kIGJyZWFrXFxuXFxuICAgICAgICBpZiAoaSA9PT0gbGFzdEluZGV4KSB7XFxuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucG9wKCk7XFxuXFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgfSAvLyBpZiBpdCdzIG5vdCB0aGUgbGFzdCBpdGVtXFxuICAgICAgICAvLyAgMS4gc3dhcCBpdCB3aXRoIHRoZSBsYXN0IGl0ZW1cXG4gICAgICAgIC8vICAyLiBwb3AgdGhlIHN3YXBwZWQgbGFzdCBpdGVtXFxuICAgICAgICAvLyAgMy4gVGhlbiBjYWxsIGJ1YmJsZVVwIGFuZCBzaW5rRG93bi5cXG5cXG5cXG4gICAgICAgIHRoaXMuX3N3YXAoaSwgbGFzdEluZGV4KTtcXG5cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucG9wKCk7XFxuXFxuICAgICAgICB0aGlzLl9idWJibGVVcChpKTtcXG5cXG4gICAgICAgIHRoaXMuX3NpbmtEb3duKGkpO1xcblxcbiAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInNpemVcXFwiLFxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGg7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwibWluXFxcIixcXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgcmV0dXJuIHRoaXMuc2l6ZSA/IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbMF0gOiBudWxsO1xcbiAgICB9XFxuICB9XSk7XFxuXFxuICByZXR1cm4gTWluQmluYXJ5SGVhcDtcXG59KCk7XFxuXFxudmFyIF9jb250ZW50ID0gbmV3IFdlYWtNYXAoKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IE1pbkJpbmFyeUhlYXA7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvQmluYXJ5SGVhcC9NaW5CaW5hcnlIZWFwLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvQmluYXJ5SGVhcC9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0JpbmFyeUhlYXAvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5ldmFsKFwidmFyIE1pbkJpbmFyeUhlYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL01pbkJpbmFyeUhlYXAgKi8gXFxcIi4vc3JjL0JpbmFyeUhlYXAvTWluQmluYXJ5SGVhcC5qc1xcXCIpO1xcblxcbnZhciBNYXhCaW5hcnlIZWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NYXhCaW5hcnlIZWFwICovIFxcXCIuL3NyYy9CaW5hcnlIZWFwL01heEJpbmFyeUhlYXAuanNcXFwiKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IHtcXG4gIE1pbkJpbmFyeUhlYXA6IE1pbkJpbmFyeUhlYXAsXFxuICBNYXhCaW5hcnlIZWFwOiBNYXhCaW5hcnlIZWFwXFxufTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9CaW5hcnlIZWFwL2luZGV4LmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvQmluYXJ5U2VhcmNoVHJlZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0JpbmFyeVNlYXJjaFRyZWUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5ldmFsKFwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXFxcInZhbHVlXFxcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5nZXQpIHsgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjcmlwdG9yLnZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5zZXQpIHsgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpOyB9IGVsc2UgeyBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFxcXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG52YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0JpbmFyeVRyZWVUcmF2ZXJzYWwgKi8gXFxcIi4vc3JjL0JpbmFyeVRyZWVUcmF2ZXJzYWwuanNcXFwiKSxcXG4gICAgQkZTID0gX3JlcXVpcmUuQkZTLFxcbiAgICBERlNJdGVyYXRpdmUgPSBfcmVxdWlyZS5ERlNJdGVyYXRpdmU7XFxuXFxudmFyIEJpbmFyeVNlYXJjaFRyZWUgPSBmdW5jdGlvbiAoKSB7XFxuICB2YXIgZmluZE1pbk5vZGUgPSBmdW5jdGlvbiBmaW5kTWluTm9kZShub2RlKSB7XFxuICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwpIHJldHVybiBub2RlO2Vsc2UgcmV0dXJuIGZpbmRNaW5Ob2RlKG5vZGUubGVmdCk7XFxuICB9O1xcblxcbiAgdmFyIFRyZWVOb2RlID0gZnVuY3Rpb24gVHJlZU5vZGUodmFsKSB7XFxuICAgIHZhciBsZWZ0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xcbiAgICB2YXIgcmlnaHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XFxuXFxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmVlTm9kZSk7XFxuXFxuICAgIHRoaXMudmFsID0gdmFsO1xcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XFxuICB9O1xcblxcbiAgdmFyIEJpbmFyeVNlYXJjaFRyZWUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgICBmdW5jdGlvbiBCaW5hcnlTZWFyY2hUcmVlKCkge1xcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCaW5hcnlTZWFyY2hUcmVlKTtcXG5cXG4gICAgICBfcm9vdC5zZXQodGhpcywge1xcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgICB2YWx1ZTogdm9pZCAwXFxuICAgICAgfSk7XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9yb290LCBudWxsKTtcXG4gICAgfVxcblxcbiAgICBfY3JlYXRlQ2xhc3MoQmluYXJ5U2VhcmNoVHJlZSwgW3tcXG4gICAgICBrZXk6IFxcXCJpbnNlcnRcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnQodmFsKSB7XFxuICAgICAgICB2YXIgcmVjdXJzaXZlSW5zZXJ0Tm9kZSA9IGZ1bmN0aW9uIHJlY3Vyc2l2ZUluc2VydE5vZGUobm9kZSwgbmV3Tm9kZSkge1xcbiAgICAgICAgICBpZiAobmV3Tm9kZS52YWwgPCBub2RlLnZhbCkge1xcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwpIG5vZGUubGVmdCA9IG5ld05vZGU7ZWxzZSByZWN1cnNpdmVJbnNlcnROb2RlKG5vZGUubGVmdCwgbmV3Tm9kZSk7XFxuICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQgPT09IG51bGwpIG5vZGUucmlnaHQgPSBuZXdOb2RlO2Vsc2UgcmVjdXJzaXZlSW5zZXJ0Tm9kZShub2RlLnJpZ2h0LCBuZXdOb2RlKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfTtcXG5cXG4gICAgICAgIHZhciBuZXdOb2RlID0gbmV3IFRyZWVOb2RlKHZhbCk7XFxuICAgICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSA9PT0gbnVsbCkgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9yb290LCBuZXdOb2RlKTtlbHNlIHJlY3Vyc2l2ZUluc2VydE5vZGUoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSwgbmV3Tm9kZSk7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicmVtb3ZlXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKHZhbCkge1xcbiAgICAgICAgdmFyIHJlbW92ZU5vZGUgPSBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUsIHZhbCkge1xcbiAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XFxuXFxuICAgICAgICAgIGlmICh2YWwgPCBub2RlLnZhbCkge1xcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IHJlbW92ZU5vZGUobm9kZS5sZWZ0LCB2YWwpO1xcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGlmICh2YWwgPiBub2RlLnZhbCkge1xcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSByZW1vdmVOb2RlKG5vZGUucmlnaHQsIHZhbCk7XFxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XFxuICAgICAgICAgIH0gLy8gSWYgdmFsIG1hdGNoZXMgbm9kZS52YWxcXG5cXG5cXG4gICAgICAgICAgaWYgKHZhbCA9PT0gbm9kZS52YWwpIHtcXG4gICAgICAgICAgICAvLyBpZiBub2RlIHRvIGRlbGV0ZSBkb2Vzbid0IGhhdmUgYW55IGNoaWxkcmVuXFxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XFxuICAgICAgICAgICAgICBub2RlID0gbnVsbDtcXG4gICAgICAgICAgICAgIHJldHVybiBub2RlO1xcbiAgICAgICAgICAgIH0gLy8gaWYgbm9kZSB0byBkZWxldGUgaGFzIG9uZSByaWdodCBjaGlsZFxcblxcblxcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwpIHtcXG4gICAgICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xcbiAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XFxuICAgICAgICAgICAgfSAvLyBpZiBub2RlIHRvIGRlbGV0ZSBoYXMgb25lIGxlZnQgY2hpbGRcXG5cXG5cXG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkge1xcbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdDtcXG4gICAgICAgICAgICAgIHJldHVybiBub2RlO1xcbiAgICAgICAgICAgIH0gLy8gRGVsZXRpbmcgbm9kZSB3aXRoIHR3byBjaGlsZHJlblxcbiAgICAgICAgICAgIC8vIGZpbmQgbWluIG5vZGUgaW4gcmlnaHQgc3VidHJlZS4gVGhpcyB3aWxsIGJlIGEgdGVybWluYWwgbm9kZVxcbiAgICAgICAgICAgIC8vIHRyYXZlcnNlIGRvd24gcmlnaHQgc3VidHJlZSBhbmQgY2hhbmdlIHRoZSBub2RlLnZhbCB0byB0aGUgbWluIG5vZGUgdmFsXFxuICAgICAgICAgICAgLy8gVGhlbiBjYWxsIHJlbW92ZU5vZGUgb24gdGhlIHJpZ2h0IHN1YnRyZWUgd2l0aCB0aGUgbWluLm5vZGUgdmFsIHRvIGRlbGV0ZSB0aGUgdGVybWluYWwgbm9kZVxcblxcblxcbiAgICAgICAgICAgIHZhciBzdWIgPSBmaW5kTWluTm9kZShub2RlLnJpZ2h0KTtcXG4gICAgICAgICAgICBub2RlLnZhbCA9IHN1Yi52YWw7XFxuICAgICAgICAgICAgbm9kZS5yaWdodCA9IHJlbW92ZU5vZGUobm9kZS5yaWdodCwgc3ViLnZhbCk7XFxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH07XFxuXFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3Jvb3QsIHJlbW92ZU5vZGUoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSwgdmFsKSk7XFxuICAgICAgfSAvLyBzZWFyY2hlcyB0cmVlIGZvciBzcGVjaWZpZWQgdmFsIGFuZCByZXR1cm5zIHRoZSBub2RlIGlmIGZvdW5kLCBudWxsIG90aGVyd2lzZVxcblxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwic2VhcmNoXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2VhcmNoKHZhbCkge1xcbiAgICAgICAgdmFyIHJlY3Vyc2l2ZVNlYXJjaCA9IGZ1bmN0aW9uIHJlY3Vyc2l2ZVNlYXJjaChub2RlLCB2YWwpIHtcXG4gICAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHJldHVybiBudWxsO1xcbiAgICAgICAgICBpZiAodmFsIDwgbm9kZS52YWwpIHJldHVybiByZWN1cnNpdmVTZWFyY2gobm9kZS5sZWZ0LCB2YWwpO1xcbiAgICAgICAgICBpZiAodmFsID4gbm9kZS52YWwpIHJldHVybiByZWN1cnNpdmVTZWFyY2gobm9kZS5yaWdodCwgdmFsKTtcXG4gICAgICAgICAgaWYgKHZhbCA9PT0gbm9kZS52YWwpIHJldHVybiBub2RlO1xcbiAgICAgICAgfTtcXG5cXG4gICAgICAgIHJldHVybiByZWN1cnNpdmVTZWFyY2goX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSwgdmFsKTtcXG4gICAgICB9IC8vIHRyZWUgdHJhdmVyc2Fsc1xcbiAgICAgIC8vIHJldHVybnMgYXJyYXkgb2YgdmFsc1xcblxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicHJpbnRJbk9yZGVyXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRJbk9yZGVyKCkge1xcbiAgICAgICAgdmFyIHJlcyA9IERGU0l0ZXJhdGl2ZS5pbk9yZGVyKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCkpO1xcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcXG4gICAgICAgIHJldHVybiByZXM7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicHJpbnRQcmVPcmRlclxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50UHJlT3JkZXIoKSB7XFxuICAgICAgICB2YXIgcmVzID0gREZTSXRlcmF0aXZlLnByZU9yZGVyKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCkpO1xcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcXG4gICAgICAgIHJldHVybiByZXM7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicHJpbnRQb3N0T3JkZXJcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludFBvc3RPcmRlcigpIHtcXG4gICAgICAgIHZhciByZXMgPSBERlNJdGVyYXRpdmUucG9zdE9yZGVyKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCkpO1xcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcXG4gICAgICAgIHJldHVybiByZXM7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicHJpbnRMZXZlbE9yZGVyXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRMZXZlbE9yZGVyKCkge1xcbiAgICAgICAgdmFyIHJlcyA9IEJGUyhfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpKTtcXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XFxuICAgICAgICByZXR1cm4gcmVzO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInJvb3RcXFwiLFxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCk7XFxuICAgICAgfVxcbiAgICB9XSk7XFxuXFxuICAgIHJldHVybiBCaW5hcnlTZWFyY2hUcmVlO1xcbiAgfSgpO1xcblxcbiAgdmFyIF9yb290ID0gbmV3IFdlYWtNYXAoKTtcXG5cXG4gIHJldHVybiBCaW5hcnlTZWFyY2hUcmVlO1xcbn0oKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IEJpbmFyeVNlYXJjaFRyZWU7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvQmluYXJ5U2VhcmNoVHJlZS5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0JpbmFyeVRyZWVUcmF2ZXJzYWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9CaW5hcnlUcmVlVHJhdmVyc2FsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXZhbChcInZhciBTdGFjayA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU3RhY2sgKi8gXFxcIi4vc3JjL1N0YWNrLmpzXFxcIik7XFxuXFxudmFyIFF1ZXVlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9RdWV1ZSAqLyBcXFwiLi9zcmMvUXVldWUuanNcXFwiKTtcXG5cXG52YXIgQkZTID0gZnVuY3Rpb24gQkZTKHJvb3QpIHtcXG4gIHZhciByZXMgPSBbXSxcXG4gICAgICBxdWV1ZSA9IG5ldyBRdWV1ZSgpO1xcbiAgcXVldWUuZW5xdWV1ZShyb290KTtcXG5cXG4gIHdoaWxlICghcXVldWUuaXNFbXB0eSgpKSB7XFxuICAgIHZhciBub2RlID0gcXVldWUuZGVxdWV1ZSgpO1xcbiAgICByZXMucHVzaChub2RlLnZhbCk7XFxuICAgIGlmIChub2RlLmxlZnQpIHF1ZXVlLmVucXVldWUobm9kZS5sZWZ0KTtcXG4gICAgaWYgKG5vZGUucmlnaHQpIHF1ZXVlLmVucXVldWUobm9kZS5yaWdodCk7XFxuICB9XFxuXFxuICByZXR1cm4gcmVzO1xcbn07XFxuXFxudmFyIERGU1JlY3Vyc2l2ZSA9IHtcXG4gIGluT3JkZXI6IGZ1bmN0aW9uIGluT3JkZXIocm9vdCkge1xcbiAgICB2YXIgcmVzID0gW107XFxuXFxuICAgIGZ1bmN0aW9uIHJlY3Vyc2Uobm9kZSkge1xcbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XFxuICAgICAgICByZWN1cnNlKG5vZGUubGVmdCk7XFxuICAgICAgICByZXMucHVzaChub2RlLnZhbCk7XFxuICAgICAgICByZWN1cnNlKG5vZGUucmlnaHQpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICByZWN1cnNlKHJvb3QpO1xcbiAgICByZXR1cm4gcmVzO1xcbiAgfSxcXG4gIHByZU9yZGVyOiBmdW5jdGlvbiBwcmVPcmRlcihyb290KSB7XFxuICAgIHZhciByZXMgPSBbXTtcXG5cXG4gICAgZnVuY3Rpb24gcmVjdXJzZShub2RlKSB7XFxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcXG4gICAgICAgIHJlcy5wdXNoKG5vZGUudmFsKTtcXG4gICAgICAgIHJlY3Vyc2Uobm9kZS5sZWZ0KTtcXG4gICAgICAgIHJlY3Vyc2Uobm9kZS5yaWdodCk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJlY3Vyc2Uocm9vdCk7XFxuICAgIHJldHVybiByZXM7XFxuICB9LFxcbiAgcG9zdE9yZGVyOiBmdW5jdGlvbiBwb3N0T3JkZXIocm9vdCkge1xcbiAgICB2YXIgcmVzID0gW107XFxuXFxuICAgIGZ1bmN0aW9uIHJlY3Vyc2Uobm9kZSkge1xcbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XFxuICAgICAgICByZWN1cnNlKG5vZGUubGVmdCk7XFxuICAgICAgICByZWN1cnNlKG5vZGUucmlnaHQpO1xcbiAgICAgICAgcmVzLnB1c2gobm9kZS52YWwpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICByZWN1cnNlKHJvb3QpO1xcbiAgICByZXR1cm4gcmVzO1xcbiAgfVxcbn07XFxudmFyIERGU0l0ZXJhdGl2ZSA9IHtcXG4gIGluT3JkZXI6IGZ1bmN0aW9uIGluT3JkZXIocm9vdCkge1xcbiAgICB2YXIgcmVzID0gW10sXFxuICAgICAgICBzdGFjayA9IG5ldyBTdGFjaygpO1xcbiAgICB2YXIgY3VyciA9IHJvb3Q7XFxuXFxuICAgIHdoaWxlICghc3RhY2suaXNFbXB0eSgpIHx8IGN1cnIgIT09IG51bGwpIHtcXG4gICAgICBpZiAoY3VyciAhPT0gbnVsbCkge1xcbiAgICAgICAgc3RhY2sucHVzaChjdXJyKTtcXG4gICAgICAgIGN1cnIgPSBjdXJyLmxlZnQ7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIGN1cnIgPSBzdGFjay5wb3AoKTtcXG4gICAgICAgIHJlcy5wdXNoKGN1cnIudmFsKTtcXG4gICAgICAgIGN1cnIgPSBjdXJyLnJpZ2h0O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICByZXR1cm4gcmVzO1xcbiAgfSxcXG4gIHByZU9yZGVyOiBmdW5jdGlvbiBwcmVPcmRlcihyb290KSB7XFxuICAgIHZhciByZXMgPSBbXSxcXG4gICAgICAgIHN0YWNrID0gbmV3IFN0YWNrKCk7XFxuICAgIHZhciBjdXJyO1xcbiAgICBzdGFjay5wdXNoKHJvb3QpO1xcblxcbiAgICB3aGlsZSAoIXN0YWNrLmlzRW1wdHkoKSkge1xcbiAgICAgIGN1cnIgPSBzdGFjay5wb3AoKTtcXG4gICAgICByZXMucHVzaChjdXJyLnZhbCk7XFxuICAgICAgaWYgKGN1cnIucmlnaHQgIT09IG51bGwpIHN0YWNrLnB1c2goY3Vyci5yaWdodCk7XFxuICAgICAgaWYgKGN1cnIubGVmdCAhPT0gbnVsbCkgc3RhY2sucHVzaChjdXJyLmxlZnQpO1xcbiAgICB9XFxuXFxuICAgIHJldHVybiByZXM7XFxuICB9LFxcbiAgLy8gSXRlcmF0aXZlIHBvc3Qgb3JkZXIgdXNpbmcgdHdvIHN0YWNrc1xcbiAgcG9zdE9yZGVyOiBmdW5jdGlvbiBwb3N0T3JkZXIocm9vdCkge1xcbiAgICB2YXIgcmVzID0gW10sXFxuICAgICAgICBzdGFjazEgPSBuZXcgU3RhY2soKSxcXG4gICAgICAgIHN0YWNrMiA9IG5ldyBTdGFjaygpO1xcbiAgICB2YXIgY3VycjtcXG4gICAgc3RhY2sxLnB1c2gocm9vdCk7XFxuXFxuICAgIHdoaWxlICghc3RhY2sxLmlzRW1wdHkoKSkge1xcbiAgICAgIGN1cnIgPSBzdGFjazEucG9wKCk7XFxuICAgICAgc3RhY2syLnB1c2goY3Vycik7XFxuICAgICAgaWYgKGN1cnIubGVmdCAhPSBudWxsKSBzdGFjazEucHVzaChjdXJyLmxlZnQpO1xcbiAgICAgIGlmIChjdXJyLnJpZ2h0ICE9IG51bGwpIHN0YWNrMS5wdXNoKGN1cnIucmlnaHQpO1xcbiAgICB9XFxuXFxuICAgIHdoaWxlICghc3RhY2syLmlzRW1wdHkoKSkge1xcbiAgICAgIGN1cnIgPSBzdGFjazIucG9wKCk7XFxuICAgICAgcmVzLnB1c2goY3Vyci52YWwpO1xcbiAgICB9XFxuXFxuICAgIHJldHVybiByZXM7XFxuICB9XFxufTtcXG5tb2R1bGUuZXhwb3J0cyA9IHtcXG4gIEJGUzogQkZTLFxcbiAgREZTSXRlcmF0aXZlOiBERlNJdGVyYXRpdmUsXFxuICBERlNSZWN1cnNpdmU6IERGU1JlY3Vyc2l2ZVxcbn07XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvQmluYXJ5VHJlZVRyYXZlcnNhbC5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0dyYXBoLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0dyYXBoLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxcblxcbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxcXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXFxcIik7IH1cXG5cXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcXFwidW5kZWZpbmVkXFxcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXFxcInJldHVyblxcXCJdICE9IG51bGwpIF9pW1xcXCJyZXR1cm5cXFwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cXG5cXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcXFwidW5kZWZpbmVkXFxcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgdGhyb3cgX2UyOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlxcXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTMpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UzOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXFxcInJldHVyblxcXCJdICE9IG51bGwpIGl0W1xcXCJyZXR1cm5cXFwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XFxuXFxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcXFwic3RyaW5nXFxcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFxcXCJPYmplY3RcXFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcXFwiTWFwXFxcIiB8fCBuID09PSBcXFwiU2V0XFxcIikgcmV0dXJuIEFycmF5LmZyb20obik7IGlmIChuID09PSBcXFwiQXJndW1lbnRzXFxcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cXG5cXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXFxcIik7IH0gZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlOyB9IHJldHVybiB2YWx1ZTsgfVxcblxcbnZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vR3JhcGhUcmF2ZXJzYWwgKi8gXFxcIi4vc3JjL0dyYXBoVHJhdmVyc2FsLmpzXFxcIiksXFxuICAgIF9CRlMgPSBfcmVxdWlyZS5CRlMsXFxuICAgIERGU1JlY3Vyc2l2ZSA9IF9yZXF1aXJlLkRGU1JlY3Vyc2l2ZTtcXG5cXG52YXIgR3JhcGggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgZnVuY3Rpb24gR3JhcGgoKSB7XFxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmFwaCk7XFxuXFxuICAgIF92ZXJ0aWNlcy5zZXQodGhpcywge1xcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgfSk7XFxuXFxuICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfdmVydGljZXMsIG5ldyBNYXAoKSk7XFxuICB9XFxuXFxuICBfY3JlYXRlQ2xhc3MoR3JhcGgsIFt7XFxuICAgIGtleTogXFxcImFkZFZlcnRleFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRWZXJ0ZXgodmFsKSB7XFxuICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2YWwpKSB0aHJvdyBcXFwidmVydGV4IHdpdGggdmFsdWUgXFxcIi5jb25jYXQodmFsLCBcXFwiIGFscmVhZHkgZXhpc3RzLlxcXCIpO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLnNldCh2YWwsIG5ldyBTZXQoKSk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiYWRkRWRnZVxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFZGdlKHZWYWwsIGVWYWwpIHtcXG4gICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2VmFsKSkgdGhyb3cgXFxcInZlcnRleCB3aXRoIHZhbHVlIFxcXCIuY29uY2F0KHZWYWwsIFxcXCIgZG9lc24ndCBleGlzdC5cXFwiKTtcXG4gICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyhlVmFsKSkgdGhyb3cgXFxcImVkZ2Ugd2l0aCB2YWx1ZSBcXFwiLmNvbmNhdChlVmFsLCBcXFwiIGRvZXNuJ3QgZXhpc3QuXFxcIik7XFxuXFxuICAgICAgdmFyIGVkZ2VzID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuZ2V0KHZWYWwpO1xcblxcbiAgICAgIGlmIChlZGdlcy5oYXMoZVZhbCkpIHRocm93IFxcXCJ2ZXJ0ZXggYWxyZWFkeSBoYXMgZWRnZSBcXFwiLmNvbmNhdChlVmFsLCBcXFwiLlxcXCIpO1xcbiAgICAgIGVkZ2VzLmFkZChlVmFsKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJnZXRWZXJ0ZXhFZGdlc1xcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWZXJ0ZXhFZGdlcyh2VmFsKSB7XFxuICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModlZhbCkpIHRocm93IFxcXCJ2ZXJ0ZXggd2l0aCB2YWx1ZSBcXFwiLmNvbmNhdCh2VmFsLCBcXFwiIGRvZXNuJ3QgZXhpc3QuXFxcIik7XFxuICAgICAgcmV0dXJuIEFycmF5LmZyb20oX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuZ2V0KHZWYWwpKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJoYXNFZGdlXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0VkZ2UodlZhbCwgZVZhbCkge1xcbiAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKHZWYWwpKSByZXR1cm4gZmFsc2U7XFxuXFxuICAgICAgdmFyIGVkZ2VzID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuZ2V0KHZWYWwpO1xcblxcbiAgICAgIHJldHVybiBlZGdlcy5oYXMoZVZhbCk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiaGFzVmVydGV4XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc1ZlcnRleCh2VmFsKSB7XFxuICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2VmFsKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJyZW1vdmVFZGdlXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUVkZ2UodlZhbCwgZVZhbCkge1xcbiAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKHZWYWwpKSB0aHJvdyBcXFwidmVydGV4IHdpdGggdmFsdWUgXFxcIi5jb25jYXQodlZhbCwgXFxcIiBkb2Vzbid0IGV4aXN0LlxcXCIpO1xcblxcbiAgICAgIHZhciBlZGdlcyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmdldCh2VmFsKTtcXG5cXG4gICAgICBlZGdlc1tcXFwiZGVsZXRlXFxcIl0oZVZhbCk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwicmVtb3ZlVmVydGV4XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVZlcnRleCh2VmFsKSB7XFxuICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModlZhbCkpIHRocm93IFxcXCJ2ZXJ0ZXggd2l0aCB2YWx1ZSBcXFwiLmNvbmNhdCh2VmFsLCBcXFwiIGRvZXNuJ3QgZXhpc3QuXFxcIik7XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcylbXFxcImRlbGV0ZVxcXCJdKHZWYWwpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcIkJGU1xcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBCRlMoc3RhcnQsIGNhbGxiYWNrKSB7XFxuICAgICAgdmFyIGdyYXBoID0gdGhpcztcXG5cXG4gICAgICBfQkZTKHN0YXJ0LCBncmFwaCwgY2FsbGJhY2spO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcIkRGU1xcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBERlMoc3RhcnQsIGNhbGxiYWNrKSB7XFxuICAgICAgdmFyIGdyYXBoID0gdGhpcztcXG4gICAgICBERlNSZWN1cnNpdmUoc3RhcnQsIGdyYXBoLCBjYWxsYmFjayk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwicHJpbnRHcmFwaFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludEdyYXBoKCkge1xcbiAgICAgIHZhciBncmFwaCA9IHt9O1xcblxcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKSksXFxuICAgICAgICAgIF9zdGVwO1xcblxcbiAgICAgIHRyeSB7XFxuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xcbiAgICAgICAgICB2YXIgX3N0ZXAkdmFsdWUgPSBfc2xpY2VkVG9BcnJheShfc3RlcC52YWx1ZSwgMiksXFxuICAgICAgICAgICAgICB2VmFsID0gX3N0ZXAkdmFsdWVbMF0sXFxuICAgICAgICAgICAgICB2ZXJ0ZXhFZGdlcyA9IF9zdGVwJHZhbHVlWzFdO1xcblxcbiAgICAgICAgICBncmFwaFt2VmFsXSA9IFtdO1xcbiAgICAgICAgICB2YXIgZWRnZXMgPSAnJztcXG5cXG4gICAgICAgICAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih2ZXJ0ZXhFZGdlcyksXFxuICAgICAgICAgICAgICBfc3RlcDI7XFxuXFxuICAgICAgICAgIHRyeSB7XFxuICAgICAgICAgICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcXG4gICAgICAgICAgICAgIHZhciBlZGdlID0gX3N0ZXAyLnZhbHVlO1xcbiAgICAgICAgICAgICAgZWRnZXMgKz0gXFxcIlxcXCIuY29uY2F0KGVkZ2UsIFxcXCIgXFxcIik7XFxuICAgICAgICAgICAgICBncmFwaFt2VmFsXS5wdXNoKGVkZ2UpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XFxuICAgICAgICAgIH0gZmluYWxseSB7XFxuICAgICAgICAgICAgX2l0ZXJhdG9yMi5mKCk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgY29uc29sZS5sb2coXFxcIlxcXCIuY29uY2F0KHZWYWwsIFxcXCIgLT4gXFxcIikuY29uY2F0KGVkZ2VzKSk7XFxuICAgICAgICB9XFxuICAgICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xcbiAgICAgIH0gZmluYWxseSB7XFxuICAgICAgICBfaXRlcmF0b3IuZigpO1xcbiAgICAgIH1cXG5cXG4gICAgICByZXR1cm4gZ3JhcGg7XFxuICAgIH1cXG4gIH1dKTtcXG5cXG4gIHJldHVybiBHcmFwaDtcXG59KCk7XFxuXFxudmFyIF92ZXJ0aWNlcyA9IG5ldyBXZWFrTWFwKCk7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBHcmFwaDtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9HcmFwaC5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0dyYXBoVHJhdmVyc2FsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0dyYXBoVHJhdmVyc2FsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcXFwidW5kZWZpbmVkXFxcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXFxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cXFwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1xcXCJyZXR1cm5cXFwiXSAhPSBudWxsKSBpdFtcXFwicmV0dXJuXFxcIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxcblxcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXFxcInN0cmluZ1xcXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcXFwiT2JqZWN0XFxcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXFxcIk1hcFxcXCIgfHwgbiA9PT0gXFxcIlNldFxcXCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXFxcIkFyZ3VtZW50c1xcXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XFxuXFxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XFxuXFxudmFyIFF1ZXVlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9RdWV1ZSAqLyBcXFwiLi9zcmMvUXVldWUuanNcXFwiKTtcXG5cXG52YXIgU3RhY2sgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1N0YWNrICovIFxcXCIuL3NyYy9TdGFjay5qc1xcXCIpOyAvLyBicmVhZHRoIGZpcnN0IHNlYXJjaCB3aXRoIHF1ZXVlXFxuXFxuXFxudmFyIEJGUyA9IGZ1bmN0aW9uIEJGUyhzdGFydCwgZ3JhcGgsIGNhbGxiYWNrKSB7XFxuICAvLyB3aWxsIGtlZXAgdHJhY2sgb2YgbmV3IHZlcnRpY2VzIHdpdGggcXVldWUgYW5kIHZpc2l0ZWQgbm9kZXMgd2l0aCBhIHNldFxcbiAgdmFyIHF1ZXVlID0gbmV3IFF1ZXVlKCksXFxuICAgICAgdmlzaXRlZCA9IG5ldyBTZXQoKTtcXG4gIHF1ZXVlLmVucXVldWUoc3RhcnQpOyAvL3ZlcnRleCBpcyB2aXNpdGVkIGlmIGl0IGdldHMgcHVzaGVkIGludG8gcXVldWUuXFxuXFxuICB2aXNpdGVkLmFkZChzdGFydCk7XFxuXFxuICB3aGlsZSAoIXF1ZXVlLmlzRW1wdHkoKSkge1xcbiAgICB2YXIgY3VyciA9IHF1ZXVlLmRlcXVldWUoKSxcXG4gICAgICAgIGVkZ2VzID0gZ3JhcGguZ2V0VmVydGV4RWRnZXMoY3Vycik7IC8vIGNhbGwgY2FsbGJhY2sgb24gZWFjaCB2ZXJ0ZXggdGhhdCBnZXRzIGRlcXVldWVkXFxuXFxuICAgIGNhbGxiYWNrKGN1cnIpOyAvL2l0ZXJhdGUgb3ZlciBhbGwgZWRnZXMgYW5kIGFkZCB0aGUgdW52aXNpdGVkIG9uZXMgdG8gcXVldWVcXG5cXG4gICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGVkZ2VzKSxcXG4gICAgICAgIF9zdGVwO1xcblxcbiAgICB0cnkge1xcbiAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XFxuICAgICAgICB2YXIgZVZhbCA9IF9zdGVwLnZhbHVlO1xcblxcbiAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhlVmFsKSkge1xcbiAgICAgICAgICBxdWV1ZS5lbnF1ZXVlKGVWYWwpO1xcbiAgICAgICAgICB2aXNpdGVkLmFkZChlVmFsKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgIF9pdGVyYXRvci5lKGVycik7XFxuICAgIH0gZmluYWxseSB7XFxuICAgICAgX2l0ZXJhdG9yLmYoKTtcXG4gICAgfVxcbiAgfVxcbn07IC8vaXRlcmF0aXZlIGRlcHRoIGZpcnN0IHNlYXJjaC4gQWxtb3N0IHNhbWUgYXMgQkZTLiBPbmx5IGRpZmZlcmVuY2UgaXMgdGhlIHN0YWNrIHZzIHF1ZXVlXFxuXFxuXFxudmFyIERGU0l0ZXJhdGl2ZSA9IGZ1bmN0aW9uIERGU0l0ZXJhdGl2ZShzdGFydCwgZ3JhcGgsIGNhbGxiYWNrKSB7XFxuICB2YXIgc3RhY2sgPSBuZXcgU3RhY2soKSxcXG4gICAgICB2aXNpdGVkID0gbmV3IFNldCgpO1xcbiAgc3RhY2sucHVzaChzdGFydCk7XFxuICB2aXNpdGVkLmFkZChzdGFydCk7XFxuXFxuICB3aGlsZSAoIXN0YWNrLmlzRW1wdHkoKSkge1xcbiAgICB2YXIgY3VyciA9IHN0YWNrLnBvcCgpLFxcbiAgICAgICAgZWRnZXMgPSBncmFwaC5nZXRWZXJ0ZXhFZGdlcyhjdXJyKTtcXG4gICAgY2FsbGJhY2soY3Vycik7XFxuXFxuICAgIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZWRnZXMpLFxcbiAgICAgICAgX3N0ZXAyO1xcblxcbiAgICB0cnkge1xcbiAgICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XFxuICAgICAgICB2YXIgZVZhbCA9IF9zdGVwMi52YWx1ZTtcXG5cXG4gICAgICAgIGlmICghdmlzaXRlZC5oYXMoZVZhbCkpIHtcXG4gICAgICAgICAgc3RhY2sucHVzaChlVmFsKTtcXG4gICAgICAgICAgdmlzaXRlZC5hZGQoZVZhbCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICBfaXRlcmF0b3IyLmUoZXJyKTtcXG4gICAgfSBmaW5hbGx5IHtcXG4gICAgICBfaXRlcmF0b3IyLmYoKTtcXG4gICAgfVxcbiAgfVxcbn07IC8vIFJlY3Vyc2l2ZSBkZXB0aCBmaXJzdCBzZWFyY2hcXG5cXG5cXG52YXIgREZTUmVjdXJzaXZlID0gZnVuY3Rpb24gREZTUmVjdXJzaXZlKHN0YXJ0LCBncmFwaCwgY2FsbGJhY2spIHtcXG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xcblxcbiAgdmFyIHJlY3Vyc2l2ZURGUyA9IGZ1bmN0aW9uIHJlY3Vyc2l2ZURGUyhjdXJyKSB7XFxuICAgIGlmICh2aXNpdGVkLmhhcyhjdXJyKSkgcmV0dXJuO1xcbiAgICBjYWxsYmFjayhjdXJyKTtcXG4gICAgdmlzaXRlZC5hZGQoY3Vycik7XFxuICAgIHZhciBlZGdlcyA9IGdyYXBoLmdldFZlcnRleEVkZ2VzKGN1cnIpO1xcblxcbiAgICB2YXIgX2l0ZXJhdG9yMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGVkZ2VzKSxcXG4gICAgICAgIF9zdGVwMztcXG5cXG4gICAgdHJ5IHtcXG4gICAgICBmb3IgKF9pdGVyYXRvcjMucygpOyAhKF9zdGVwMyA9IF9pdGVyYXRvcjMubigpKS5kb25lOykge1xcbiAgICAgICAgdmFyIGVWYWwgPSBfc3RlcDMudmFsdWU7XFxuXFxuICAgICAgICBpZiAoIXZpc2l0ZWQuaGFzKGVWYWwpKSB7XFxuICAgICAgICAgIHJlY3Vyc2l2ZURGUyhlVmFsKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgIF9pdGVyYXRvcjMuZShlcnIpO1xcbiAgICB9IGZpbmFsbHkge1xcbiAgICAgIF9pdGVyYXRvcjMuZigpO1xcbiAgICB9XFxuICB9O1xcblxcbiAgcmVjdXJzaXZlREZTKHN0YXJ0KTtcXG59O1xcblxcbm1vZHVsZS5leHBvcnRzID0ge1xcbiAgQkZTOiBCRlMsXFxuICBERlNSZWN1cnNpdmU6IERGU1JlY3Vyc2l2ZSxcXG4gIERGU0l0ZXJhdGl2ZTogREZTSXRlcmF0aXZlXFxufTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9HcmFwaFRyYXZlcnNhbC5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0hhc2hUYWJsZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvSGFzaFRhYmxlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5ldmFsKFwiZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXFxcInVuZGVmaW5lZFxcXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxcXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXFxcIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcXFwicmV0dXJuXFxcIl0gIT0gbnVsbCkgaXRbXFxcInJldHVyblxcXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cXG5cXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFxcXCJzdHJpbmdcXFwiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXFxcIk9iamVjdFxcXCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFxcXCJNYXBcXFwiIHx8IG4gPT09IFxcXCJTZXRcXFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFxcXCJBcmd1bWVudHNcXFwiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxcblxcbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG4vKiBodHRwczovL3JlYWN0Z28uY29tL2hhc2h0YWJsZS1qYXZhc2NyaXB0LyAqL1xcblxcbi8qXFxuUnVkaW1lbnRhcnkgamF2YXNjcmlwdCBoYXNoIHRhYmxlIHJlc29sdmluZyBjb2xsaXNpb25zIHdpdGggc2VwYXJhdGUgY2hhaW5pbmcuIFxcblRvZG86IFJlc29sdmUgY29uZmxpY3RzIHdpdGggTGluZWFyIFByb2JpbmcsIFNlcGFyYXRlIENoYWluaW5nIChsaW5rZWQgbGlzdHMpXFxuKi9cXG52YXIgSGFzaFRhYmxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gIGZ1bmN0aW9uIEhhc2hUYWJsZSgpIHtcXG4gICAgdmFyIHNpemUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDQyO1xcblxcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFzaFRhYmxlKTtcXG5cXG4gICAgdGhpcy5idWNrZXRzID0gbmV3IEFycmF5KHNpemUpO1xcbiAgICB0aGlzLnNpemUgPSBzaXplO1xcbiAgfVxcblxcbiAgX2NyZWF0ZUNsYXNzKEhhc2hUYWJsZSwgW3tcXG4gICAga2V5OiBcXFwiaGFzaFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNoKGtleSkge1xcbiAgICAgIHJldHVybiBrZXkudG9TdHJpbmcoKS5sZW5ndGggJSB0aGlzLnNpemU7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwic2V0XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XFxuICAgICAgdmFyIGkgPSB0aGlzLmhhc2goa2V5KTsgLy8gaWYgbm8gY29sbGlzaW9uLCBzZXQgdGhlIGJ1Y2tldCBhdCBwb3NpdGlvbiBpIHRvIGFycmF5XFxuXFxuICAgICAgaWYgKCF0aGlzLmJ1Y2tldHNbaV0pIHRoaXMuYnVja2V0c1tpXSA9IFtdOyAvLyBwdXNoIFtrZXksIHZhbF0gaW50byB0aGUgYXJyYXlcXG5cXG4gICAgICB0aGlzLmJ1Y2tldHNbaV0ucHVzaChba2V5LCB2YWx1ZV0pO1xcbiAgICAgIHJldHVybiBpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImdldFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoa2V5KSB7XFxuICAgICAgdmFyIGkgPSB0aGlzLmhhc2goa2V5KTtcXG4gICAgICBpZiAoIXRoaXMuYnVja2V0c1tpXSkgcmV0dXJuIG51bGw7IC8vIGNoZWNrIGVhY2ggcGFpciBpbnNpZGUgdGhlIGJ1Y2tldCBhdCBwb3NpdGlvbiBpXFxuICAgICAgLy8gaWYga2V5IG1hdGNoZXMga2V5IGF0IHBhaXJbMF0gcmV0dXJuIHRoZSB2YWwgYXQgcGFpclsxXVxcblxcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih0aGlzLmJ1Y2tldHNbaV0pLFxcbiAgICAgICAgICBfc3RlcDtcXG5cXG4gICAgICB0cnkge1xcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcXG4gICAgICAgICAgdmFyIHBhaXIgPSBfc3RlcC52YWx1ZTtcXG4gICAgICAgICAgaWYgKHBhaXJbMF0gPT09IGtleSkgcmV0dXJuIHBhaXJbMV07XFxuICAgICAgICB9XFxuICAgICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xcbiAgICAgIH0gZmluYWxseSB7XFxuICAgICAgICBfaXRlcmF0b3IuZigpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfV0pO1xcblxcbiAgcmV0dXJuIEhhc2hUYWJsZTtcXG59KCk7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBIYXNoVGFibGU7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvSGFzaFRhYmxlLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvTGlua2VkTGlzdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0xpbmtlZExpc3QuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5ldmFsKFwiZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXFxcInVuZGVmaW5lZFxcXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxcXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXFxcIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcXFwicmV0dXJuXFxcIl0gIT0gbnVsbCkgaXRbXFxcInJldHVyblxcXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cXG5cXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFxcXCJzdHJpbmdcXFwiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXFxcIk9iamVjdFxcXCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFxcXCJNYXBcXFwiIHx8IG4gPT09IFxcXCJTZXRcXFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFxcXCJBcmd1bWVudHNcXFwiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxcblxcbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxcblxcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcXFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxudmFyIExpbmtlZExpc3QgPSBmdW5jdGlvbiAoKSB7XFxuICAvLyBjb25zdCBoZWFkID0gU3ltYm9sKCdoZWFkJykgLy9UbyBrZWVwIGhlYWQgYXMgcHJpdmF0ZSBpbiBsaW5rZWQgbGlzdFxcbiAgLy8gY29uc3Qgc2l6ZSA9IFN5bWJvbCgnc2l6ZScpXFxuICB2YXIgTGlzdE5vZGUgPSBmdW5jdGlvbiBMaXN0Tm9kZSh2YWwpIHtcXG4gICAgdmFyIG5leHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XFxuXFxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaXN0Tm9kZSk7XFxuXFxuICAgIHRoaXMudmFsID0gdmFsO1xcbiAgICB0aGlzLm5leHQgPSBuZXh0O1xcbiAgfTtcXG5cXG4gIHZhciBMaW5rZWRMaXN0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gICAgLy8gUHJpdmF0ZSBzdGF0aWMgZmllbGRzXFxuICAgIGZ1bmN0aW9uIExpbmtlZExpc3QoKSB7XFxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmtlZExpc3QpO1xcblxcbiAgICAgIF9oZWFkLnNldCh0aGlzLCB7XFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgICB9KTtcXG5cXG4gICAgICBfc2l6ZS5zZXQodGhpcywge1xcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgICB2YWx1ZTogdm9pZCAwXFxuICAgICAgfSk7XFxuXFxuICAgICAgLy8gVGhlIGhlYWQgYW5kIHNpemUgcHJvcGVydHkgc2hvdWxkbid0IGJlIG1vZGlmaWFibGUgb3V0c2lkZSB0aGUgY2xhc3MuIFNvIHRoZXJlIHNob3VsZCBvbmx5IGJlIGEgZ2V0dGVyLiBDbGFzcyBmaWVsZHMgYXJlbid0IHN1cHBvcnRlZCBieSBhIGxvdCBvZiBicm93c2Vycy4gVXNlIHN5bWJvbCBpbnN0ZWFkIHRvIGNyZWF0ZSBwcml2YXRlIGNsYXNzIHZhcmlhYmxlcyBpZiB5b3UncmUgbm90IHVzaW5nIGJhYmVsLlxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgbnVsbCk7XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAwKTsgLy8gdGhpc1toZWFkXSA9IG51bGxcXG4gICAgICAvLyB0aGlzW3NpemVdID0gMFxcblxcbiAgICB9IC8vZ2V0dGVyc1xcblxcblxcbiAgICBfY3JlYXRlQ2xhc3MoTGlua2VkTGlzdCwgW3tcXG4gICAgICBrZXk6IFxcXCJmcm9tQXJyYXlcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmcm9tQXJyYXkoYXJyYXkpIHtcXG4gICAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihhcnJheSksXFxuICAgICAgICAgICAgX3N0ZXA7XFxuXFxuICAgICAgICB0cnkge1xcbiAgICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xcbiAgICAgICAgICAgIHZhciB2YWwgPSBfc3RlcC52YWx1ZTtcXG4gICAgICAgICAgICB0aGlzLmFwcGVuZFRvVGFpbCh2YWwpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcXG4gICAgICAgIH0gZmluYWxseSB7XFxuICAgICAgICAgIF9pdGVyYXRvci5mKCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwidG9BcnJheVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XFxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XFxuXFxuICAgICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XFxuXFxuICAgICAgICB3aGlsZSAoY3Vycikge1xcbiAgICAgICAgICByZXN1bHQucHVzaChjdXJyLnZhbCk7XFxuICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICAgIH0gLy8gVCDigJQgTygxKVxcblxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicHJlcGVuZFRvSGVhZFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXBlbmRUb0hlYWQodmFsKSB7XFxuICAgICAgICB2YXIgX3RoaXMkc2l6ZTtcXG5cXG4gICAgICAgIHZhciBub2RlID0gbmV3IExpc3ROb2RlKHZhbCk7XFxuICAgICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKSA9PSBudWxsKSBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIG5vZGUpO2Vsc2Uge1xcbiAgICAgICAgICB2YXIgcHJldkhlYWQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xcblxcbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIG5vZGUpO1xcblxcbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpLm5leHQgPSBwcmV2SGVhZDtcXG4gICAgICAgIH1cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemUgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgKyAxKSwgX3RoaXMkc2l6ZTtcXG4gICAgICB9IC8vIFQg4oCUIE8obilcXG5cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImFwcGVuZFRvVGFpbFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRvVGFpbCh2YWwpIHtcXG4gICAgICAgIHZhciBfdGhpcyRzaXplMjtcXG5cXG4gICAgICAgIHZhciBub2RlID0gbmV3IExpc3ROb2RlKHZhbCk7XFxuICAgICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKSA9PSBudWxsKSBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIG5vZGUpO2Vsc2Uge1xcbiAgICAgICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XFxuXFxuICAgICAgICAgIHdoaWxlIChjdXJyLm5leHQpIHtcXG4gICAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGN1cnIubmV4dCA9IG5vZGU7XFxuICAgICAgICB9XFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplMiA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSArIDEpLCBfdGhpcyRzaXplMjtcXG4gICAgICB9IC8vIFQg4oCUIE8oMSlcXG5cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImRlbGV0ZUZyb21IZWFkXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVsZXRlRnJvbUhlYWQoKSB7XFxuICAgICAgICB2YXIgX3RoaXMkc2l6ZTM7XFxuXFxuICAgICAgICB2YXIgY3VyckhlYWQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xcblxcbiAgICAgICAgaWYgKCFjdXJySGVhZCkgcmV0dXJuIG51bGw7XFxuXFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIGN1cnJIZWFkLm5leHQpO1xcblxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZTMgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgLSAxKSwgX3RoaXMkc2l6ZTM7XFxuICAgICAgICByZXR1cm4gY3VyckhlYWQudmFsO1xcbiAgICAgIH0gLy8gVCDigJQgTyhuKVxcblxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwiZGVsZXRlRnJvbVRhaWxcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxldGVGcm9tVGFpbCgpIHtcXG4gICAgICAgIHZhciBfdGhpcyRzaXplNTtcXG5cXG4gICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG5cXG4gICAgICAgIGlmICghY3VycikgcmV0dXJuIG51bGw7IC8vSGFuZGxlIGNhc2Ugb2Ygc2luZ2xlIG5vZGUgaW4gbGlua2VkIGxpc3RcXG5cXG4gICAgICAgIGlmICghY3Vyci5uZXh0KSB7XFxuICAgICAgICAgIHZhciBfdGhpcyRzaXplNDtcXG5cXG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9oZWFkLCBudWxsKTtcXG5cXG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZTQgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgLSAxKSwgX3RoaXMkc2l6ZTQ7XFxuICAgICAgICAgIHJldHVybiBjdXJyLnZhbDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHZhciBwcmV2ID0gbnVsbDtcXG5cXG4gICAgICAgIHdoaWxlIChjdXJyLm5leHQpIHtcXG4gICAgICAgICAgcHJldiA9IGN1cnI7XFxuICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBwcmV2Lm5leHQgPSBudWxsO1xcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZTUgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgLSAxKSwgX3RoaXMkc2l6ZTU7XFxuICAgICAgICByZXR1cm4gY3Vyci52YWw7XFxuICAgICAgfSAvLyBUIOKAlCBPKG4pLiBOb24gcmVjdXJzaXZlIHZlcnNpb24gb2YgZGVsZXRlTm9kZVJlY3Vyc2l2ZVxcblxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwiZGVsZXRlTm9kZVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZU5vZGUodmFsKSB7XFxuICAgICAgICB2YXIgZGVsZXRlTXVsdGlwbGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xcbiAgICAgICAgdmFyIGRlbGV0ZUNvdW50ID0gMDtcXG5cXG4gICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKSxcXG4gICAgICAgICAgICBwcmV2ID0gbnVsbDtcXG5cXG4gICAgICAgIHdoaWxlIChjdXJyKSB7XFxuICAgICAgICAgIGlmIChjdXJyLnZhbCA9PT0gdmFsKSB7XFxuICAgICAgICAgICAgdmFyIF90aGlzJHNpemU2O1xcblxcbiAgICAgICAgICAgIGlmICghcHJldikge1xcbiAgICAgICAgICAgICAgLy9Eb24ndCBuZWVkIHRvIGdhcmJhZ2UgY29sbGVjdC4gVGhpcyBpcyBKYXZhc2NyaXB0LCBub3QgQysrXFxuICAgICAgICAgICAgICAvLyBjb25zdCB0ZW1wID0gY3VyclxcbiAgICAgICAgICAgICAgY3VyciA9IGN1cnIubmV4dDsgLy8gdGVtcC5uZXh0ID0gbnVsbFxcblxcbiAgICAgICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9oZWFkLCBjdXJyKTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgcHJldi5uZXh0ID0gY3Vyci5uZXh0OyAvLyBjdXJyLm5leHQgPSBudWxsXFxuXFxuICAgICAgICAgICAgICBjdXJyID0gcHJldi5uZXh0O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplNiA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSAtIDEpLCBfdGhpcyRzaXplNjtcXG4gICAgICAgICAgICBkZWxldGVDb3VudCsrO1xcbiAgICAgICAgICAgIGlmICghZGVsZXRlTXVsdGlwbGUpIHJldHVybiB0cnVlO1xcbiAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIHByZXYgPSBjdXJyO1xcbiAgICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHJldHVybiAhIWRlbGV0ZUNvdW50O1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInNlYXJjaFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaCh2YWwpIHtcXG4gICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG5cXG4gICAgICAgIHdoaWxlIChjdXJyKSB7XFxuICAgICAgICAgIGlmIChjdXJyLnZhbCA9PT0gdmFsKSByZXR1cm4gdHJ1ZTtcXG4gICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHJldHVybiBmYWxzZTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmludExpc3RcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludExpc3QoKSB7XFxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy50b0FycmF5KCk7XFxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJoZWFkXFxcIixcXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInNpemVcXFwiLFxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSk7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwidGFpbFxcXCIsXFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XFxuXFxuICAgICAgICBpZiAoIWN1cnIpIHJldHVybiBudWxsO1xcblxcbiAgICAgICAgd2hpbGUgKGN1cnIubmV4dCkge1xcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgcmV0dXJuIGN1cnI7XFxuICAgICAgfVxcbiAgICB9XSk7XFxuXFxuICAgIHJldHVybiBMaW5rZWRMaXN0O1xcbiAgfSgpO1xcblxcbiAgdmFyIF9oZWFkID0gbmV3IFdlYWtNYXAoKTtcXG5cXG4gIHZhciBfc2l6ZSA9IG5ldyBXZWFrTWFwKCk7XFxuXFxuICByZXR1cm4gTGlua2VkTGlzdDtcXG59KCk7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBMaW5rZWRMaXN0O1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0xpbmtlZExpc3QuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9RdWV1ZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9RdWV1ZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5ldmFsKFwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXFxcInZhbHVlXFxcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5nZXQpIHsgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjcmlwdG9yLnZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5zZXQpIHsgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpOyB9IGVsc2UgeyBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFxcXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG52YXIgUXVldWUgPSBmdW5jdGlvbiAoKSB7XFxuICB2YXIgUXVldWVOb2RlID0gZnVuY3Rpb24gUXVldWVOb2RlKGRhdGEpIHtcXG4gICAgdmFyIG5leHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XFxuXFxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBRdWV1ZU5vZGUpO1xcblxcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xcbiAgICB0aGlzLm5leHQgPSBuZXh0O1xcbiAgfTtcXG5cXG4gIHZhciBRdWV1ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICAgIC8vTG9vayBpbiAuL0xpbmtlZExpc3QuanMgdG8gc2VlIG90aGVyIHdheXMgb2YgZGVjbGFyaW5nIHByaXZhdGUgc3RhdGljIGZpZWxkcyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9DbGFzc2VzL0NsYXNzX2ZpZWxkcyNQcml2YXRlX2ZpZWxkc1xcbiAgICBmdW5jdGlvbiBRdWV1ZSgpIHtcXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUXVldWUpO1xcblxcbiAgICAgIF9maXJzdC5zZXQodGhpcywge1xcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgICB2YWx1ZTogdm9pZCAwXFxuICAgICAgfSk7XFxuXFxuICAgICAgX2xhc3Quc2V0KHRoaXMsIHtcXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICAgIH0pO1xcblxcbiAgICAgIF9zaXplLnNldCh0aGlzLCB7XFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgICB9KTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2ZpcnN0LCBudWxsKTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2xhc3QsIG51bGwpO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgMCk7XFxuICAgIH1cXG5cXG4gICAgX2NyZWF0ZUNsYXNzKFF1ZXVlLCBbe1xcbiAgICAgIGtleTogXFxcImVucXVldWVcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnF1ZXVlKGl0ZW0pIHtcXG4gICAgICAgIHZhciBfdGhpcyRzaXplO1xcblxcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgUXVldWVOb2RlKGl0ZW0pO1xcblxcbiAgICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfbGFzdCkpIHtcXG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9sYXN0KS5uZXh0ID0gbm9kZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfbGFzdCwgbm9kZSk7XFxuXFxuICAgICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpKSBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2ZpcnN0LCBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2xhc3QpKTtcXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemUgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgKyAxKSwgX3RoaXMkc2l6ZTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJkZXF1ZXVlXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVxdWV1ZSgpIHtcXG4gICAgICAgIHZhciBfdGhpcyRzaXplMjtcXG5cXG4gICAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCkpIHJldHVybiBudWxsO1xcblxcbiAgICAgICAgdmFyIGRhdGEgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KS5kYXRhO1xcblxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9maXJzdCwgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCkubmV4dCk7XFxuXFxuICAgICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpKSBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2xhc3QsIG51bGwpO1xcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZTIgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgLSAxKSwgX3RoaXMkc2l6ZTI7XFxuICAgICAgICByZXR1cm4gZGF0YTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwZWVrXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcGVlaygpIHtcXG4gICAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCkpIHJldHVybiBudWxsO1xcbiAgICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpLmRhdGE7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwiaXNFbXB0eVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XFxuICAgICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCkgPT09IG51bGw7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicHJpbnRRdWV1ZVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50UXVldWUoKSB7XFxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XFxuXFxuICAgICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpO1xcblxcbiAgICAgICAgd2hpbGUgKGN1cnIpIHtcXG4gICAgICAgICAgcmVzdWx0LnB1c2goY3Vyci5kYXRhKTtcXG4gICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XFxuICAgICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInNpemVcXFwiLFxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSk7XFxuICAgICAgfVxcbiAgICB9XSk7XFxuXFxuICAgIHJldHVybiBRdWV1ZTtcXG4gIH0oKTtcXG5cXG4gIHZhciBfZmlyc3QgPSBuZXcgV2Vha01hcCgpO1xcblxcbiAgdmFyIF9sYXN0ID0gbmV3IFdlYWtNYXAoKTtcXG5cXG4gIHZhciBfc2l6ZSA9IG5ldyBXZWFrTWFwKCk7XFxuXFxuICByZXR1cm4gUXVldWU7XFxufSgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gUXVldWU7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvUXVldWUuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9TdGFjay5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9TdGFjay5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5ldmFsKFwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXFxcInZhbHVlXFxcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbnZhciBTdGFjayA9IGZ1bmN0aW9uICgpIHtcXG4gIHZhciB0b3AgPSBTeW1ib2woJ3RvcCcpOyAvL1RvIGtlZXAgdG9wIGFzIHByaXZhdGUgaW4gc3RhY2tcXG5cXG4gIHZhciBTdGFja05vZGUgPSBmdW5jdGlvbiBTdGFja05vZGUoZGF0YSkge1xcbiAgICB2YXIgbmV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcXG5cXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YWNrTm9kZSk7XFxuXFxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XFxuICAgIHRoaXMubmV4dCA9IG5leHQ7XFxuICB9O1xcblxcbiAgdmFyIFN0YWNrID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gICAgZnVuY3Rpb24gU3RhY2soKSB7XFxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YWNrKTtcXG5cXG4gICAgICB0aGlzW3RvcF0gPSBudWxsO1xcbiAgICB9XFxuXFxuICAgIF9jcmVhdGVDbGFzcyhTdGFjaywgW3tcXG4gICAgICBrZXk6IFxcXCJwdXNoXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaChpdGVtKSB7XFxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBTdGFja05vZGUoaXRlbSk7XFxuICAgICAgICBub2RlLm5leHQgPSB0aGlzW3RvcF07XFxuICAgICAgICB0aGlzW3RvcF0gPSBub2RlO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInBvcFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBvcCgpIHtcXG4gICAgICAgIGlmICh0aGlzW3RvcF0gPT09IG51bGwpIHJldHVybiBudWxsO1xcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzW3RvcF0uZGF0YTtcXG4gICAgICAgIHRoaXNbdG9wXSA9IHRoaXNbdG9wXS5uZXh0O1xcbiAgICAgICAgcmV0dXJuIGl0ZW07XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicGVla1xcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBlZWsoKSB7XFxuICAgICAgICBpZiAodGhpc1t0b3BdID09PSBudWxsKSByZXR1cm4gbnVsbDtcXG4gICAgICAgIHJldHVybiB0aGlzW3RvcF0uZGF0YTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJpc0VtcHR5XFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNFbXB0eSgpIHtcXG4gICAgICAgIHJldHVybiB0aGlzW3RvcF0gPT09IG51bGw7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicHJpbnRTdGFja1xcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50U3RhY2soKSB7XFxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XFxuICAgICAgICB2YXIgY3VyciA9IHRoaXNbdG9wXTtcXG5cXG4gICAgICAgIHdoaWxlIChjdXJyKSB7XFxuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnIuZGF0YSk7XFxuICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XFxuICAgICAgICB9IC8vIGNvbnNvbGUubG9nKHJlc3VsdClcXG5cXG5cXG4gICAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwic3RhY2tUb1N0cmluZ1xcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YWNrVG9TdHJpbmcoKSB7XFxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5wcmludFN0YWNrKCkpO1xcbiAgICAgIH1cXG4gICAgfV0pO1xcblxcbiAgICByZXR1cm4gU3RhY2s7XFxuICB9KCk7XFxuXFxuICByZXR1cm4gU3RhY2s7XFxufSgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvU3RhY2suanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9UcmllLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvVHJpZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJ2YXIgX3RlbXAsIF9yb290O1xcblxcbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFxcXCJ1bmRlZmluZWRcXFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlxcXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXFxcInJldHVyblxcXCJdICE9IG51bGwpIGl0W1xcXCJyZXR1cm5cXFwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XFxuXFxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcXFwic3RyaW5nXFxcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFxcXCJPYmplY3RcXFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcXFwiTWFwXFxcIiB8fCBuID09PSBcXFwiU2V0XFxcIikgcmV0dXJuIEFycmF5LmZyb20obik7IGlmIChuID09PSBcXFwiQXJndW1lbnRzXFxcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cXG5cXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXFxcIik7IH0gZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlOyB9IHJldHVybiB2YWx1ZTsgfVxcblxcbi8qIFxcblxcbmh0dHBzOi8vbGVldGNvZGUuY29tL3Byb2JsZW1zL2ltcGxlbWVudC10cmllLXByZWZpeC10cmVlL3NvbHV0aW9uL1xcblZpc3VhbGl6ZSBhIHRyaWUgYXMgYSAyNiBieSBuIG1hdHJpeCB3aXRoIG9uZSB3YXkgcmVsYXRpb24gYmV0d2VlbiB0aGUgbGV0dGVycyBpbiBkaWZmZXJlbnQgbGV2ZWxzLiBuIGlzIHRoZSBsZW5ndGggb2YgdGhlIGxvbmdlc3Qgd29yZCBpbiB0aGUgdHJpZS5cXG5cXG53b3JkcyDigJQgZGVlZCwgbm9tLCBub29uXFxuXFxuYSAgYiAgYyAgZCAgZSAgZiAgZyAgaCAgaSAgaiAgayAgbCAgbSAgbiAgbyAuLi5cXG4gICAgICAgICAgIOKGmCAgICAgICAgICAgICAgICAgICAgICAgICAgICDihpggXFxuYSAgYiAgYyAgZCAgZSAgZiAgZyAgaCAgaSAgaiAgayAgbCAgbSAgbiAgbyAuLi5cXG4gICAgICAgICAgICDihpMgICAgICAgICAgICAgICAgICAgICAgICAgICDihpkg4oaTXFxuICAgICAgICAgICAg4oaTICAgICAgICAgICAgICAgICAgICAgICAgIOKGmSAgIOKGk1xcbmEgIGIgIGMgIGQgIGUgIGYgIGcgIGggIGkgIGogIGsgIGwgIG0gIG4gIG8gLi4uXFxuICAgICAgICAgIOKGmSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oaZXFxuYSAgYiAgYyAgZCAgZSAgZiAgZyAgaCAgaSAgaiAgayAgbCAgbSAgbiAgbyAuLi5cXG5cXG5UaGUgcm9vdCB3b3VsZCBsb29rIGxpa2U6XFxuXFxuY29uc3QgdHJpZSA9XFxue1xcbiAgZDogeyBlOiB7IGU6IHsgZDogeyBpc1dvcmQ6IHRydWUgfSB9IH0gfSxcXG4gIG46IHsgbzogeyBvOiB7IG46IHsgaXNXb3JkOiB0cnVlIH0gfSxcXG4gICAgICAgbTogeyBpc1dvcmQ6IHRydWUgfSB9XFxuICAgICB9XFxufVxcblxcbiovXFxuLy8gV2UnbGwgYXNzdW1lIHRoYXQgdGhlIHdvcmRzIHByb3ZpZGVkIHdpbGwgY29uc2lzdCBvZiBsZXR0ZXJzIG9ubHkgYW5kIGFyZSBhbHdheXMgbG93ZXJjYXNlXFxudmFyIFRyaWUgPSAoX3RlbXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgZnVuY3Rpb24gVHJpZSgpIHtcXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyaWUpO1xcblxcbiAgICBfcm9vdC5zZXQodGhpcywge1xcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgfSk7XFxuXFxuICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfcm9vdCwge30pO1xcbiAgfVxcblxcbiAgX2NyZWF0ZUNsYXNzKFRyaWUsIFt7XFxuICAgIGtleTogXFxcIl90cmF2ZXJzZVxcXCIsXFxuICAgIC8vIGhlbHBlci4gQ2hhbmdlIHRvIHByaXZhdGUgd2hlbiBwcml2YXRlIGluc3RhbmNlIG1ldGhvZHMgYXJlIHN1cHBvcnRlZFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3RyYXZlcnNlKHdvcmQpIHtcXG4gICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCk7XFxuXFxuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHdvcmQpLFxcbiAgICAgICAgICBfc3RlcDtcXG5cXG4gICAgICB0cnkge1xcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcXG4gICAgICAgICAgdmFyIGNoID0gX3N0ZXAudmFsdWU7XFxuICAgICAgICAgIGlmICghY3VycikgcmV0dXJuIG51bGw7XFxuICAgICAgICAgIGN1cnIgPSBjdXJyW2NoXTtcXG4gICAgICAgIH1cXG4gICAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XFxuICAgICAgfSBmaW5hbGx5IHtcXG4gICAgICAgIF9pdGVyYXRvci5mKCk7XFxuICAgICAgfVxcblxcbiAgICAgIHJldHVybiBjdXJyO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImluc2VydFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnQod29yZCkge1xcbiAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KTtcXG5cXG4gICAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHdvcmQpLFxcbiAgICAgICAgICBfc3RlcDI7XFxuXFxuICAgICAgdHJ5IHtcXG4gICAgICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XFxuICAgICAgICAgIHZhciBjaCA9IF9zdGVwMi52YWx1ZTtcXG4gICAgICAgICAgY3VycltjaF0gPSBjdXJyW2NoXSA/IGN1cnJbY2hdIDoge307XFxuICAgICAgICAgIGN1cnIgPSBjdXJyW2NoXTtcXG4gICAgICAgIH1cXG4gICAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICAgIF9pdGVyYXRvcjIuZShlcnIpO1xcbiAgICAgIH0gZmluYWxseSB7XFxuICAgICAgICBfaXRlcmF0b3IyLmYoKTtcXG4gICAgICB9XFxuXFxuICAgICAgY3Vyci5pc1dvcmQgPSB0cnVlO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInNlYXJjaFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2god29yZCkge1xcbiAgICAgIHZhciBub2RlID0gdGhpcy5fdHJhdmVyc2Uod29yZCk7XFxuXFxuICAgICAgcmV0dXJuIG5vZGUgIT09IG51bGwgJiYgbm9kZS5pc1dvcmQgPT09IHRydWU7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwic3RhcnRzV2l0aFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydHNXaXRoKHdvcmQpIHtcXG4gICAgICByZXR1cm4gdGhpcy5fdHJhdmVyc2Uod29yZCkgIT09IG51bGw7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwicm9vdFxcXCIsXFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpO1xcbiAgICB9XFxuICB9XSk7XFxuXFxuICByZXR1cm4gVHJpZTtcXG59KCksIF9yb290ID0gbmV3IFdlYWtNYXAoKSwgX3RlbXApO1xcbm1vZHVsZS5leHBvcnRzID0gVHJpZTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9UcmllLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXZhbChcImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XFxuXFxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XFxuXFxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cXG5cXG52YXIgTGlua2VkTGlzdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTGlua2VkTGlzdCAqLyBcXFwiLi9zcmMvTGlua2VkTGlzdC5qc1xcXCIpO1xcblxcbnZhciBIYXNoVGFibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0hhc2hUYWJsZSAqLyBcXFwiLi9zcmMvSGFzaFRhYmxlLmpzXFxcIik7XFxuXFxudmFyIFN0YWNrID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9TdGFjayAqLyBcXFwiLi9zcmMvU3RhY2suanNcXFwiKTtcXG5cXG52YXIgUXVldWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1F1ZXVlICovIFxcXCIuL3NyYy9RdWV1ZS5qc1xcXCIpO1xcblxcbnZhciBUcmVlVHJhdmVyc2FsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9CaW5hcnlUcmVlVHJhdmVyc2FsICovIFxcXCIuL3NyYy9CaW5hcnlUcmVlVHJhdmVyc2FsLmpzXFxcIik7XFxuXFxudmFyIEJpbmFyeVNlYXJjaFRyZWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0JpbmFyeVNlYXJjaFRyZWUgKi8gXFxcIi4vc3JjL0JpbmFyeVNlYXJjaFRyZWUuanNcXFwiKTtcXG5cXG52YXIgVHJpZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vVHJpZSAqLyBcXFwiLi9zcmMvVHJpZS5qc1xcXCIpO1xcblxcbnZhciBCaW5hcnlIZWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9CaW5hcnlIZWFwICovIFxcXCIuL3NyYy9CaW5hcnlIZWFwL2luZGV4LmpzXFxcIik7XFxuXFxudmFyIEdyYXBoVHJhdmVyc2FsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9HcmFwaFRyYXZlcnNhbCAqLyBcXFwiLi9zcmMvR3JhcGhUcmF2ZXJzYWwuanNcXFwiKTtcXG5cXG52YXIgR3JhcGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0dyYXBoICovIFxcXCIuL3NyYy9HcmFwaC5qc1xcXCIpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZCh7XFxuICBMaW5rZWRMaXN0OiBMaW5rZWRMaXN0LFxcbiAgSGFzaFRhYmxlOiBIYXNoVGFibGUsXFxuICBTdGFjazogU3RhY2ssXFxuICBRdWV1ZTogUXVldWUsXFxuICBUcmVlVHJhdmVyc2FsOiBUcmVlVHJhdmVyc2FsLFxcbiAgQmluYXJ5U2VhcmNoVHJlZTogQmluYXJ5U2VhcmNoVHJlZSxcXG4gIFRyaWU6IFRyaWVcXG59LCBCaW5hcnlIZWFwLCB7XFxuICBHcmFwaFRyYXZlcnNhbDogR3JhcGhUcmF2ZXJzYWwsXFxuICBHcmFwaDogR3JhcGhcXG59KTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9pbmRleC5qcz9cIik7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhaW4ge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5LCBjb3VudCA9IDApIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5jb3VudCA9IGNvdW50XG4gICAgdGhpcy5taW4gPSAwXG4gIH1cblxuICBzZXRDb3VudCA9IChjb3VudCkgPT4ge1xuICAgIHRoaXMuY291bnQgPSBjb3VudFxuICB9XG5cbiAgcmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRDb3VudCgwKVxuICAgIHRoaXMudXBkYXRlQ2hhaW4oKVxuICB9XG5cbiAgaW5jcmVtZW50Q291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmNvdW50ICsgMVxuICAgIHRoaXMuc2V0Q291bnQoY291bnQpXG4gICAgdGhpcy51cGRhdGVDaGFpbigpXG4gIH1cblxuICBkZWNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuY291bnRcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5tYXgoY291bnQgLSAxLCB0aGlzLm1pbilcbiAgICB0aGlzLnVwZGF0ZUNoYWluKClcbiAgfVxuXG4gIHVwZGF0ZUNoYWluID0gKCkgPT4ge1xuICAgIHRoaXMuZGlzcGxheS51cGRhdGVFbGVtZW50KCcjY2hhaW4nLCB0aGlzLmNvdW50KVxuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZUNoYWluKClcbiAgfVxufVxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL01vdmluZ09iamVjdCdcblxuY29uc3QgciA9IDEwLFxuICBjID0gJyNmNmU4NzInLFxuICB2ID0geyBkeDogMSwgZHk6IDEgfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZCBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBvcyxcbiAgICByYWRpdXMgPSByLFxuICAgIHdvcmxkLFxuICAgIHNwcml0ZSxcbiAgICBzaXplID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0sXG4gICAgdmVsID0gdixcbiAgICBjb2xvciA9IGNcbiAgKSB7XG4gICAgc3VwZXIocG9zLCByYWRpdXMsIHdvcmxkLCBzcHJpdGUsIHNpemUsIHZlbCwgY29sb3IpXG4gICAgdGhpcy5pbmRlcGVuZGVuY2UgPSB0cnVlXG4gICAgdGhpcy5jaGFpblBvcyA9IG51bGxcbiAgICB0aGlzLnBhcmVudCA9IG51bGxcbiAgICB0aGlzLm5leHRDaGlsZCA9IG51bGxcbiAgICB0aGlzLnBvc0NhY2hlID0gW11cbiAgICB0aGlzLm1vdmVzID0gdGhpcy5tb3Zlcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaXRzUHJlZGF0b3IgPSB0aGlzLmhpdHNQcmVkYXRvci5iaW5kKHRoaXMpXG4gICAgdGhpcy5zcHJpdGUgPSBzcHJpdGVcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgdGhpcy5jbGlja2luZyA9IGZhbHNlXG4gIH1cblxuICBzZXRDbGlja2luZyA9IChjbGlja2luZykgPT4ge1xuICAgIHRoaXMuY2xpY2tpbmcgPSBjbGlja2luZ1xuICB9XG5cbiAgc2V0UGFyZW50ID0gKHBhcmVudCkgPT4ge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50XG4gIH1cblxuICBzZXRDaGFpblBvcyA9IChjaGFpblBvcykgPT4ge1xuICAgIHRoaXMuY2hhaW5Qb3MgPSBjaGFpblBvc1xuICB9XG5cbiAgc2V0TmV4dENoaWxkID0gKGNoaWxkKSA9PiB7XG4gICAgdGhpcy5uZXh0Q2hpbGQgPSBjaGlsZFxuICB9XG5cbiAgc2V0SW5kZXBlbmRlbmNlID0gKGluZGVwZW5kZW5jZSkgPT4ge1xuICAgIHRoaXMuaW5kZXBlbmRlbmNlID0gaW5kZXBlbmRlbmNlXG4gIH1cblxuICBpc0luZGVwZW5kZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmluZGVwZW5kZW5jZVxuICB9XG5cbiAgYXZvaWRQcmVkYXRvciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbmRlcGVuZGVuY2UpIHtcbiAgICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zLFxuICAgICAgICBwb3MgPSB7IHg6IHggKyB0aGlzLmN1cnJEaXJbMF0sIHk6IHkgKyB0aGlzLmN1cnJEaXJbMV0gfVxuXG4gICAgICB0aGlzLnNldFJhbmRvbURpcigpXG4gICAgICBwb3MgPSB7IHg6IHggKyB0aGlzLmN1cnJEaXJbMF0sIHk6IHkgKyB0aGlzLmN1cnJEaXJbMV0gfVxuXG4gICAgICB0aGlzLmJvdW5jZUJhY2socG9zKVxuICAgIH1cbiAgfVxuXG4gIGhpdHNQcmVkYXRvcihnYW1lKSB7XG4gICAgaWYgKHRoaXMuaXNJbmRlcGVuZGVudCgpKSBnYW1lLmRlc3Ryb3lDaGlsZCh0aGlzKVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGN1cnIgPSB0aGlzLnBhcmVudC5kZWxldGVMYXN0Q2hpbGQoKVxuICAgICAgd2hpbGUgKGN1cnIgJiYgY3VyciAhPT0gdGhpcykge1xuICAgICAgICBjdXJyID0gdGhpcy5wYXJlbnQuZGVsZXRlTGFzdENoaWxkKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3Zlcyhwb3MpIHtcbiAgICBpZiAodGhpcy5pc0luZGVwZW5kZW50KCkpIHN1cGVyLm1vdmVzKClcbiAgICBlbHNlIHtcbiAgICAgIC8vIFJlbW92ZWQgZWFzaW5nIGZvciBub3cuIE1heWJlIGFkZCBmb3IgaGlnaGVyIGxldmVscy4gQ2hpbGRyZW4gdGFrZSB0b28gbG9uZyBsb25nIHRvIG1vdmUuXG4gICAgICAvLyBjb25zdCBlYXNpbmcgPSBNYXRoLm1heCgxIC0gdGhpcy5jaGFpblBvcyAqIDAuMTMsIDAuMSksXG4gICAgICBjb25zdCBlYXNpbmcgPSAxLFxuICAgICAgICByID0gdGhpcy5yYWRpdXMsXG4gICAgICAgIG5leHRDaGlsZCA9IHRoaXMubmV4dENoaWxkXG5cbiAgICAgIGxldCBvZmZzZXRcbiAgICAgIGlmICh0aGlzLmNsaWNraW5nKSBvZmZzZXQgPSAwXG4gICAgICBlbHNlIG9mZnNldCA9IDIgKiAociArIDEpICogdGhpcy5jaGFpblBvcyArICh0aGlzLnBhcmVudC5yYWRpdXMgLSByKVxuXG4gICAgICBzdXBlci5tb3Zlc1dpdGhDdXJzb3IocG9zLCBlYXNpbmcsIG9mZnNldClcblxuICAgICAgaWYgKG5leHRDaGlsZClcbiAgICAgICAgbmV4dENoaWxkLm1vdmVzKHRoaXMucG9zQ2FjaGUubGVuZ3RoID8gdGhpcy5wb3NDYWNoZVswXSA6IHBvcylcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogUmVsYXRlZCB0byB0aGUgRE9NIGFuZCBkaXNwbGF5IChjcmVhdGluZyBlbGVtZW50cywgdXBkYXRpbmcgZWxlbWVudHMgZXRjLilcbiAqL1xuXG5pbXBvcnQgY2hpbGRDb3VudEltZyBmcm9tICcuLi9pbWdzL2NvdW50LnBuZydcbmltcG9ydCB3b3JtTGVmdCBmcm9tICcuLi9pbWdzL3dvcm0tbGVmdC5wbmcnXG5pbXBvcnQgd29ybVJpZ2h0IGZyb20gJy4uL2ltZ3Mvd29ybS1yaWdodC5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTURpc3BsYXkge1xuICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNDAwLCBoZWlnaHQgPSA3MDAgfSkge1xuICAgIHRoaXMuZ2FtZSA9IG51bGxcbiAgICB0aGlzLndvcmxkU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9XG4gICAgdGhpcy53b3JsZFdyYXBwZXIgPSBudWxsXG4gICAgdGhpcy5nYW1lRW5kID0gbnVsbFxuICAgIHRoaXMubGVnZW5kID0gbnVsbFxuICAgIHRoaXMud29ybGQgPSBudWxsXG4gICAgdGhpcy5yZW5kZXJDaGFpbiA9IHRoaXMucmVuZGVyQ2hhaW4uYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyRW5lcmd5ID0gdGhpcy5yZW5kZXJFbmVyZ3kuYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyU2NvcmUgPSB0aGlzLnJlbmRlclNjb3JlLmJpbmQodGhpcylcbiAgfVxuXG4gIGNyZWF0ZUltYWdlID0gKHNyYywgY2xhc3NOYW1lLCBpZCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nLnNyYyA9IHNyY1xuICAgIGlmIChjbGFzc05hbWUpIGltZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICBpZiAoaWQpIGltZy5pZCA9IGlkXG4gICAgcmV0dXJuIGltZ1xuICB9XG5cbiAgcmVtb3ZlQW5pbWF0aW9uID0gKHdvcm1DbGFzcykgPT4ge1xuICAgIGNvbnN0IHdvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHdvcm1DbGFzcylbMF1cbiAgICBpZiAod29ybSkgd29ybS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJylcbiAgfVxuXG4gIGFuaW1hdGUgPSAod29ybUNsYXNzKSA9PiB7XG4gICAgY29uc3Qgd29ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUod29ybUNsYXNzKVswXVxuICAgIGlmICh3b3JtKSB3b3JtLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKVxuICB9XG5cbiAgY3JlYXRlRWxlbWVudCA9ICh0YWcsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXG4gICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZSkpIHtcbiAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBjbGFzc05hbWUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpZCkgZWxlbWVudC5pZCA9IGlkXG4gICAgaWYgKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJUZXh0ID0gY29udGVudFxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBnZXRFbGVtZW50ID0gKHNlbGVjdG9yKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gIH1cblxuICB1cGRhdGVFbGVtZW50ID0gKHNlbGVjdG9yLCB2YWwpID0+IHtcbiAgICB0aGlzLmdldEVsZW1lbnQoc2VsZWN0b3IpLmlubmVyVGV4dCA9IHZhbFxuICB9XG5cbiAgcmVuZGVyR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZ2FtZScsICdnYW1lJylcbiAgICB0aGlzLmdhbWUgPSBnYW1lXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdhbWUpXG4gIH1cblxuICByZW5kZXJUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RpdGxlJywgbnVsbClcbiAgICBjb25zdCBoZWFkaW5nID0gdGhpcy5jcmVhdGVFbGVtZW50KCdoMScsIG51bGwsIG51bGwsICdDSElDS0VOIE1FRVRTIFdPUk0nKVxuICAgIHRoaXMuZ2FtZS5hcHBlbmQodGl0bGUpXG4gICAgdGl0bGUuYXBwZW5kKGhlYWRpbmcpXG4gIH1cblxuICByZW5kZXJXb3JsZCA9ICgpID0+IHtcbiAgICBjb25zdCB3b3JsZFdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3b3JsZC13cmFwcGVyJyksXG4gICAgICB3b3JsZCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnY2FudmFzJywgbnVsbCwgJ3dvcmxkJyksXG4gICAgICBsZWdlbmQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdsZWdlbmQnLCAnbGVnZW5kJyksXG4gICAgICB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMud29ybGRTaXplXG4gICAgd29ybGQud2lkdGggPSB0aGlzLndvcmxkU2l6ZS53aWR0aFxuICAgIHdvcmxkLmhlaWdodCA9IHRoaXMud29ybGRTaXplLmhlaWdodFxuICAgIHRoaXMuZ2FtZS5hcHBlbmQod29ybGRXcmFwcGVyKVxuICAgIHdvcmxkV3JhcHBlci5hcHBlbmQobGVnZW5kKVxuICAgIHdvcmxkV3JhcHBlci5hcHBlbmQod29ybGQpXG4gICAgd29ybGRXcmFwcGVyLnN0eWxlLndpZHRoID0gd2lkdGggKyAyICsgJ3B4J1xuICAgIHdvcmxkV3JhcHBlci5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAyICsgJ3B4J1xuICAgIHRoaXMud29ybGRXcmFwcGVyID0gd29ybGRXcmFwcGVyXG4gICAgdGhpcy5sZWdlbmQgPSBsZWdlbmRcbiAgICB0aGlzLndvcmxkID0gd29ybGRcbiAgfVxuXG4gIHJlbmRlckVuZXJneSgpIHtcbiAgICBjb25zdCBlbmVyZ3lXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICAnZW5lcmd5LXdyYXBwZXInLFxuICAgICAgJ2VuZXJneS13cmFwcGVyJ1xuICAgIClcbiAgICB0aGlzLmxlZ2VuZC5hcHBlbmRDaGlsZChlbmVyZ3lXcmFwcGVyKVxuICAgIHRoaXMudXBkYXRlRW5lcmd5QmFyKDUpXG4gIH1cblxuICByZW5kZXJDaGFpbigpIHtcbiAgICBjb25zdCBjaGFpbldyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjaGFpbi13cmFwcGVyJylcbiAgICBjb25zdCBjb3VudEltZyA9IHRoaXMuY3JlYXRlSW1hZ2UoY2hpbGRDb3VudEltZywgJ2ltYWdlJywgJ2NoYWluLWNvdW50JylcbiAgICBjb25zdCBjaGFpbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnc3BhbicsICdsZWdlbmQtdGV4dCcsICdjaGFpbicpXG5cbiAgICB0aGlzLmxlZ2VuZC5hcHBlbmQoY2hhaW5XcmFwcGVyKVxuICAgIGNoYWluV3JhcHBlci5hcHBlbmQoY291bnRJbWcpXG4gICAgY2hhaW5XcmFwcGVyLmFwcGVuZChjaGFpbilcbiAgfVxuXG4gIHVwZGF0ZUVuZXJneUJhcihjb3VudCkge1xuICAgIGNvbnN0IGVXID0gdGhpcy5nZXRFbGVtZW50KCcjZW5lcmd5LXdyYXBwZXInKSxcbiAgICAgIGkgPSBNYXRoLm1pbihjb3VudCwgNSkgKiAyXG5cbiAgICBpZiAoZVcuY2hpbGRFbGVtZW50Q291bnQgPiBpKSB7XG4gICAgICB3aGlsZSAoZVcuY2hpbGRFbGVtZW50Q291bnQgPiBpKSB7XG4gICAgICAgIGlmIChlVy5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkgcmV0dXJuXG4gICAgICAgIGVXLnJlbW92ZUNoaWxkKGVXLmxhc3RDaGlsZClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVXLmNoaWxkRWxlbWVudENvdW50IDwgaSkge1xuICAgICAgbGV0IGxlZnQgPSB0cnVlXG4gICAgICBsZXQgd29ybUNvdW50ID0gZVcuY2hpbGRFbGVtZW50Q291bnRcbiAgICAgIGlmICh3b3JtQ291bnQgJSAyICE9PSAwKSB7XG4gICAgICAgIGVXLmFwcGVuZCh0aGlzLmNyZWF0ZUltYWdlKHdvcm1SaWdodCwgJ3dvcm0tcmlnaHQnKSlcbiAgICAgICAgd29ybUNvdW50KytcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHdvcm1Db3VudCA8IGkpIHtcbiAgICAgICAgY29uc3Qgd29ybUwgPSB0aGlzLmNyZWF0ZUltYWdlKHdvcm1MZWZ0LCAnd29ybS1sZWZ0JylcbiAgICAgICAgY29uc3Qgd29ybVIgPSB0aGlzLmNyZWF0ZUltYWdlKHdvcm1SaWdodCwgJ3dvcm0tcmlnaHQnKVxuICAgICAgICBpZiAobGVmdCkge1xuICAgICAgICAgIGVXLmFwcGVuZCh3b3JtTClcbiAgICAgICAgICBsZWZ0ID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIGlmICghbGVmdCkge1xuICAgICAgICAgIGVXLmFwcGVuZCh3b3JtUilcbiAgICAgICAgICBsZWZ0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHdvcm1Db3VudCsrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2NvcmUoKSB7XG4gICAgY29uc3Qgc2NvcmUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnbGVnZW5kLXRleHQnLCAnc2NvcmUnXSwgJ3Njb3JlJylcbiAgICB0aGlzLmxlZ2VuZC5hcHBlbmQoc2NvcmUpXG4gIH1cblxuICByZW5kZXJHYW1lRW5kID0gKGhhbmRsZUNsaWNrUmVwbGF5LCBzY29yZSwgaGlnaFNjb3JlKSA9PiB7XG4gICAgY29uc3QgZ2FtZUVuZFdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdlbmQtd3JhcHBlcicpXG4gICAgY29uc3QgZ2FtZUVuZCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2dhbWUtZW5kJylcbiAgICBnYW1lRW5kV3JhcHBlci5zdHlsZS53aWR0aCA9IHRoaXMud29ybGRTaXplLndpZHRoICsgNCArICdweCdcbiAgICB0aGlzLmdhbWVFbmQgPSBnYW1lRW5kXG4gICAgdGhpcy5nYW1lRW5kV3JhcHBlciA9IGdhbWVFbmRXcmFwcGVyXG4gICAgdGhpcy53b3JsZFdyYXBwZXIuYXBwZW5kKGdhbWVFbmRXcmFwcGVyKVxuICAgIGdhbWVFbmRXcmFwcGVyLmFwcGVuZChnYW1lRW5kKVxuXG4gICAgZ2FtZUVuZFdyYXBwZXIuc3R5bGUudG9wID0gOTggKyB0aGlzLndvcmxkU2l6ZS5oZWlnaHQgLyA0ICsgJ3B4J1xuICAgIHRoaXMucmVuZGVyR2FtZU92ZXJNZXNzYWdlKClcbiAgICB0aGlzLnJlbmRlckVuZFNjb3JlKHNjb3JlLCBoaWdoU2NvcmUpXG4gICAgdGhpcy5yZW5kZXJSZXBsYXlCdXR0b24oaGFuZGxlQ2xpY2tSZXBsYXkpXG4gIH1cblxuICBjbGVhckdhbWVFbmQgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZUVuZCA9IHRoaXMuZ2V0RWxlbWVudCgnLmVuZC13cmFwcGVyJyksXG4gICAgICB3b3JsZFdyYXBwZXIgPSB0aGlzLmdldEVsZW1lbnQoJy53b3JsZC13cmFwcGVyJylcbiAgICBpZiAoZ2FtZUVuZCkgd29ybGRXcmFwcGVyLnJlbW92ZUNoaWxkKGdhbWVFbmQpXG4gIH1cblxuICByZW5kZXJHYW1lT3Zlck1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2dhbWUtb3ZlcicsIG51bGwsICdHYW1lIE92ZXIhJylcbiAgICB0aGlzLmdhbWVFbmQuYXBwZW5kKG1lc3NhZ2UpXG4gIH1cblxuICByZW5kZXJSZXBsYXlCdXR0b24gPSAoaGFuZGxlQ2xpY2tSZXBsYXkpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdidG4nLCAncmVwbGF5JylcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gJ1JlcGxheSdcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrUmVwbGF5KVxuICAgIHRoaXMuZ2FtZUVuZC5hcHBlbmQoYnV0dG9uKVxuICB9XG5cbiAgcmVuZGVyRW5kU2NvcmUgPSAoc2NvcmUsIGhpZ2hTY29yZSkgPT4ge1xuICAgIGNvbnN0IGVuZFNjb3JlV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3dyYXBwZXInKVxuICAgIGNvbnN0IGVuZFNjb3JlTGFiZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICAnc2NvcmUtbGFiZWwnLFxuICAgICAgbnVsbCxcbiAgICAgICdZb3VyIHNjb3JlOiAnXG4gICAgKVxuICAgIGNvbnN0IGVuZFNjb3JlID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgJ3Njb3JlJyxcbiAgICAgICdlbmQtc2NvcmUnLFxuICAgICAgc2NvcmUudG9TdHJpbmcoKVxuICAgIClcbiAgICBjb25zdCBiZXN0U2NvcmVXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnd3JhcHBlcicpXG4gICAgY29uc3QgYmVzdFNjb3JlTGFiZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICAnc2NvcmUtbGFiZWwnLFxuICAgICAgbnVsbCxcbiAgICAgICdCZXN0IHNjb3JlOiAnXG4gICAgKVxuICAgIGNvbnN0IGJlc3RTY29yZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgICdzY29yZScsXG4gICAgICAnYmVzdC1zY29yZScsXG4gICAgICBoaWdoU2NvcmUudG9TdHJpbmcoKVxuICAgIClcblxuICAgIGVuZFNjb3JlV3JhcHBlci5hcHBlbmQoZW5kU2NvcmVMYWJlbClcbiAgICBlbmRTY29yZVdyYXBwZXIuYXBwZW5kKGVuZFNjb3JlKVxuICAgIGJlc3RTY29yZVdyYXBwZXIuYXBwZW5kKGJlc3RTY29yZUxhYmVsKVxuICAgIGJlc3RTY29yZVdyYXBwZXIuYXBwZW5kKGJlc3RTY29yZSlcbiAgICB0aGlzLmdhbWVFbmQuYXBwZW5kKGVuZFNjb3JlV3JhcHBlcilcbiAgICB0aGlzLmdhbWVFbmQuYXBwZW5kKGJlc3RTY29yZVdyYXBwZXIpXG4gIH1cbn1cbiIsImltcG9ydCBsb2dvIGZyb20gJy4uL2ltZ3MvbG9nby5wbmcnXG5pbXBvcnQgRE9NRGlzcGxheSBmcm9tICcuL0RPTURpc3BsYXknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludHJvIGV4dGVuZHMgRE9NRGlzcGxheSB7XG4gIGNvbnN0cnVjdG9yKGdhbWUsIHdvcmxkV3JhcHBlciwgd29ybGRTaXplKSB7XG4gICAgc3VwZXIod29ybGRTaXplKVxuICAgIHRoaXMuZ2FtZSA9IGdhbWVcbiAgICB0aGlzLndvcmxkV3JhcHBlciA9IHdvcmxkV3JhcHBlclxuICAgIHRoaXMuaW50cm9XcmFwcGVyID0gbnVsbFxuICB9XG5cbiAgcmVuZGVyVHV0b3JpYWxCdXR0b24gPSAoaGFuZGxlQ2xpY2tUdXRvcmlhbCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ2J0bicsICd0dXRvcmlhbCcpXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9ICdUdXRvcmlhbCdcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja1R1dG9yaWFsKVxuICAgIHRoaXMuaW50cm9XcmFwcGVyLmFwcGVuZChidXR0b24pXG4gIH1cblxuICByZW5kZXJTdGFydExpbmsgPSAoaGFuZGxlQ2xpY2tTdGFydCkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2EnLCAnc3RhcnQnLCAnc3RhcnQnKVxuICAgIGxpbmsuaW5uZXJUZXh0ID0gJ1R1dG9yaWFscyByIGZvciBub29icy4nXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrU3RhcnQpXG4gICAgdGhpcy5pbnRyb1dyYXBwZXIuYXBwZW5kKGxpbmspXG4gIH1cblxuICByZW5kZXJJbnRybyA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRyb1dyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdpbnRyby13cmFwcGVyJylcbiAgICBjb25zdCBpbnRyb1BpYyA9IHRoaXMuY3JlYXRlSW1hZ2UobG9nbywgJ2xvZ28nKVxuICAgIGNvbnN0IGludHJvID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnaW50cm8nKVxuICAgIGNvbnN0IGludHJvTWVzc2FnZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgICdpbnRyby1tZXNzYWdlJyxcbiAgICAgIG51bGwsXG4gICAgICAnRmVhc3Qgb24gd29ybXMsIHByb3RlY3QgeW91ciBjaGlsZHJlbiEnXG4gICAgKVxuICAgIHRoaXMud29ybGRXcmFwcGVyLmFwcGVuZChpbnRyb1dyYXBwZXIpXG5cbiAgICBpbnRyby5hcHBlbmQoaW50cm9QaWMpXG4gICAgaW50cm8uYXBwZW5kKGludHJvTWVzc2FnZSlcbiAgICBpbnRyb1dyYXBwZXIuYXBwZW5kKGludHJvKVxuICAgIGludHJvV3JhcHBlci5zdHlsZS53aWR0aCA9IHRoaXMud29ybGRTaXplLndpZHRoICsgNCArICdweCdcbiAgICBpbnRyb1dyYXBwZXIuc3R5bGUudG9wID0gOTggKyB0aGlzLndvcmxkU2l6ZS5oZWlnaHQgLyA2ICsgJ3B4J1xuICAgIHRoaXMuaW50cm9XcmFwcGVyID0gaW50cm9XcmFwcGVyXG4gIH1cblxuICBjbGVhckludHJvID0gKCkgPT4ge1xuICAgIHRoaXMud29ybGRXcmFwcGVyLnJlbW92ZUNoaWxkKHRoaXMuaW50cm9XcmFwcGVyKVxuICB9XG59XG4iLCJpbXBvcnQgRE9NRGlzcGxheSBmcm9tICcuL0RPTURpc3BsYXknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1dG9yaWFsIGV4dGVuZHMgRE9NRGlzcGxheSB7XG4gIGNvbnN0cnVjdG9yKGdhbWUsIHdvcmxkLCB3b3JsZFdyYXBwZXIsIHdvcmxkU2l6ZSwgbGVnZW5kKSB7XG4gICAgc3VwZXIod29ybGRTaXplKVxuICAgIHRoaXMuZ2FtZSA9IGdhbWVcbiAgICB0aGlzLndvcmxkID0gd29ybGRcbiAgICB0aGlzLndvcmxkV3JhcHBlciA9IHdvcmxkV3JhcHBlclxuICAgIHRoaXMuaW50cm9XcmFwcGVyID0gbnVsbFxuICAgIHRoaXMubGVnZW5kID0gbGVnZW5kXG4gICAgdGhpcy50dXRvcmlhbE1zZ1dyYXBwZXIgPSBudWxsXG4gICAgdGhpcy5zZXR0aW1lb3V0ID0gbnVsbFxuICB9XG5cbiAgY2hhbmdlTWVzc2FnZSA9IChtZXNzYWdlLCB0aW1lKSA9PiB7XG4gICAgdGhpcy5zZXR0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUVsZW1lbnQoJyN0dXQtbXNnLTAnLCBtZXNzYWdlKVxuICAgIH0sIHRpbWUpXG4gIH1cblxuICByZW5kZXJNb3ZlUGFyZW50VHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMubGVnZW5kXG4gICAgaWYgKGxlZ2VuZCkgbGVnZW5kLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLnR1dG9yaWFsTXNnV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3R1dG9yaWFsLXdyYXBwZXInKVxuICAgIGNvbnN0IG1lc3NhZ2UxID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICAndHV0b3JpYWwtbWVzc2FnZScsXG4gICAgICAndHV0LW1zZy0wJyxcbiAgICAgICdNb3ZlIHlvdXIgbW91c2UgdG8gbW92ZSB0aGUgY2hpY2tlbi4nXG4gICAgKVxuICAgIGNvbnN0IG1lc3NhZ2UyID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICAndHV0b3JpYWwtbXNnLWtleXByZXNzJyxcbiAgICAgICd0dXQtbXNnLTEnLFxuICAgICAgJ0hpdCBlbnRlciB0byBjb250aW51ZSBhbmQgc3BhY2UgdG8gc2tpcCB0dXRvcmlhbC4nXG4gICAgKVxuICAgIHRoaXMud29ybGRXcmFwcGVyLmFwcGVuZCh0aGlzLnR1dG9yaWFsTXNnV3JhcHBlcilcbiAgICB0aGlzLndvcmxkV3JhcHBlci5hcHBlbmQobWVzc2FnZTIpXG4gICAgdGhpcy50dXRvcmlhbE1zZ1dyYXBwZXIuc3R5bGUud2lkdGggPSB0aGlzLndvcmxkU2l6ZS53aWR0aCArIDQgKyAncHgnXG4gICAgdGhpcy50dXRvcmlhbE1zZ1dyYXBwZXIuc3R5bGUudG9wID0gJzEyMHB4J1xuXG4gICAgbWVzc2FnZTIuc3R5bGUud2lkdGggPSB0aGlzLndvcmxkU2l6ZS53aWR0aCArIDQgKyAncHgnXG4gICAgbWVzc2FnZTIuc3R5bGUudG9wID0gNjUgKyB0aGlzLndvcmxkU2l6ZS5oZWlnaHQgKyAncHgnXG4gICAgdGhpcy50dXRvcmlhbE1zZ1dyYXBwZXIuYXBwZW5kKG1lc3NhZ2UxKVxuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW5UdXQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGVnZW5kKSB0aGlzLmxlZ2VuZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgdGhpcy51cGRhdGVFbGVtZW50KFxuICAgICAgJyN0dXQtbXNnLTAnLFxuICAgICAgJ0hvdmVyIG92ZXIgdGhlIGJhYnkgY2hpY2tzIHRvIG1ha2UgdGhlbSBzdGljayBjbG9zZSB0byB5b3UuJ1xuICAgIClcbiAgICB0aGlzLmNoYW5nZU1lc3NhZ2UoXG4gICAgICAnVGhlIGxvbmdlciB5b3VyIGNoYWluLCB0aGUgaGlnaGVyIHlvdXIgc2NvcmUgaW5jcmVtZW50cy4nLFxuICAgICAgMzgwMFxuICAgIClcbiAgfVxuXG4gIHJlbmRlclByZWRhdG9yVHV0ID0gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnNldHRpbWVvdXQpXG4gICAgY29uc3QgZW5lcmd5V3JhcHBlciA9IHRoaXMuZ2V0RWxlbWVudCgnI2VuZXJneS13cmFwcGVyJylcbiAgICAvLyBpZiAoZW5lcmd5V3JhcHBlcikgZW5lcmd5V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy51cGRhdGVFbGVtZW50KFxuICAgICAgJyN0dXQtbXNnLTAnLFxuICAgICAgXCJXYXRjaCBvdXQgZm9yIHByZWRhdG9ycy4gTnlhbi1jaGFuIGRpZG4ndCBnZXQgZmF0IGVhdGluZyBncmFzcy5cIlxuICAgIClcbiAgICB0aGlzLmNoYW5nZU1lc3NhZ2UoXG4gICAgICBcIlRoZSB3b3JtcyBzaG93IHlvdXIgaGVhbHRoLiBFdmVyeSBlbmNvdW50ZXIgd2l0aCBhIGNhdCBjb3N0cyB5b3UgMSB3b3JtLiBUaGUgZ2FtZSBlbmRzIHdoZW4geW91J3JlIG91dCBvZiB3b3Jtcy5cIixcbiAgICAgIDQwMDBcbiAgICApXG4gIH1cblxuICByZW5kZXJDbGlja1BhcmVudFR1dCA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zZXR0aW1lb3V0KVxuICAgIHRoaXMudXBkYXRlRWxlbWVudChcbiAgICAgICcjdHV0LW1zZy0wJyxcbiAgICAgICdDTElDSyB0byBnYXRoZXIgYWxsIHlvdXIgY2hpbGRyZW4gaW4gb25lIHBsYWNlIGZvciB0aGUgY2hlYXAgcHJpY2Ugb2YgaGFsZiBhIHdvcm0uJ1xuICAgIClcbiAgICB0aGlzLmNoYW5nZU1lc3NhZ2UoXG4gICAgICBcIkRvIHRoaXMgc3BhcmluZ2x5LCBjYXVzZSB5b3Ugd29udCd0IGJlIGFibGUgdG8gbW92ZSB3aGlsZSBjbGlja2luZyFcIixcbiAgICAgIDUwMDBcbiAgICApXG4gIH1cblxuICByZW5kZXJXb3JtVHV0ID0gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnNldHRpbWVvdXQpXG4gICAgdGhpcy51cGRhdGVFbGVtZW50KFxuICAgICAgJyN0dXQtbXNnLTAnLFxuICAgICAgJ1JlcGxlbmlzaCB5b3VyIGVuZXJneSBieSBmZWFzdGluZyBvbiBkZWxpY2lvdXMgd29ybXMuIFlvdSBjYW4gaGF2ZSBzb21lIGV4dHJhIGZvciB0aGUgdHV0b3JpYWwuJ1xuICAgIClcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lcmd5IHtcbiAgY29uc3RydWN0b3IoZGlzcGxheSwgZW5lcmd5ID0gNSwgbWF4ID0gNSkge1xuICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXlcbiAgICB0aGlzLmNvdW50ID0gZW5lcmd5XG4gICAgdGhpcy5taW4gPSAwXG4gICAgdGhpcy5tYXggPSBtYXhcbiAgfVxuXG4gIHNldENvdW50ID0gKGNvdW50KSA9PiB7XG4gICAgdGhpcy5jb3VudCA9IGNvdW50XG4gIH1cblxuICByZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLnNldENvdW50KHRoaXMubWF4KVxuICAgIHRoaXMudXBkYXRlRW5lcmd5KClcbiAgfVxuXG4gIGluY3JlbWVudENvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gTWF0aC5taW4odGhpcy5jb3VudCArIDEsIHRoaXMubWF4KVxuICAgIHRoaXMuc2V0Q291bnQoY291bnQpXG4gICAgdGhpcy51cGRhdGVFbmVyZ3koKVxuICB9XG5cbiAgZGVjcmVtZW50Q291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmNvdW50XG4gICAgdGhpcy5jb3VudCA9IE1hdGgubWF4KGNvdW50IC0gMSwgdGhpcy5taW4pXG4gICAgdGhpcy51cGRhdGVFbmVyZ3koKVxuICB9XG5cbiAgZGVjcmVtZW50Q291bnRCeUhhbGYgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmNvdW50XG4gICAgdGhpcy5jb3VudCA9IE1hdGgubWF4KGNvdW50IC0gMC41LCB0aGlzLm1pbilcbiAgICB0aGlzLnVwZGF0ZUVuZXJneSgpXG4gIH1cblxuICB1cGRhdGVFbmVyZ3kgPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNwbGF5LnVwZGF0ZUVuZXJneUJhcih0aGlzLmNvdW50KVxuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZUVuZXJneSgpXG4gIH1cbn1cbiIsImltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tICdkYXRhX3N0cnVjdHVyZXMnXG5pbXBvcnQgQ2hhaW4gZnJvbSAnLi9DaGFpbi5qcydcbmltcG9ydCBDaGlsZCBmcm9tICcuL0NoaWxkLmpzJ1xuaW1wb3J0IEVuZXJneSBmcm9tICcuL0VuZXJneS5qcydcbmltcG9ydCBjaGlsZEltZyBmcm9tICcuL2ltZ3MvY2hpbGQucG5nJ1xuaW1wb3J0IHBhcmVudEltYWdlIGZyb20gJy4vaW1ncy9wYXJlbnQucG5nJ1xuaW1wb3J0IHByZWRhdG9ySW1hZ2UgZnJvbSAnLi9pbWdzL3ByZWRhdG9yLnBuZydcbmltcG9ydCB3b3JtSW1hZ2UgZnJvbSAnLi9pbWdzL3dvcm0ucG5nJ1xuaW1wb3J0IFBhcmVudCBmcm9tICcuL1BhcmVudC5qcydcbmltcG9ydCBQcmVkYXRvciBmcm9tICcuL1ByZWRhdG9yLmpzJ1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnXG5pbXBvcnQgV29ybGQgZnJvbSAnLi9Xb3JsZC5qcydcbmltcG9ydCBXb3JtIGZyb20gJy4vV29ybS5qcydcblxuY29uc3QgQ2hpbGRTcHJpdGUgPSBuZXcgSW1hZ2UoKVxuQ2hpbGRTcHJpdGUuc3JjID0gY2hpbGRJbWdcbmNvbnN0IFBhcmVudFNwcml0ZSA9IG5ldyBJbWFnZSgpXG5QYXJlbnRTcHJpdGUuc3JjID0gcGFyZW50SW1hZ2VcbmNvbnN0IFByZWRhdG9yU3ByaXRlID0gbmV3IEltYWdlKClcblByZWRhdG9yU3ByaXRlLnNyYyA9IHByZWRhdG9ySW1hZ2VcbmNvbnN0IFdvcm1TcHJpdGUgPSBuZXcgSW1hZ2UoKVxuV29ybVNwcml0ZS5zcmMgPSB3b3JtSW1hZ2VcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXksIGNoaWxkQ291bnQgPSA1LCBwcmVkYXRvckNvdW50ID0gNCwgd29ybUNvdW50ID0gMSkge1xuICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXlcbiAgICB0aGlzLm1vdXNlID0geyB4OiBudWxsLCB5OiBudWxsIH1cbiAgICB0aGlzLndvcmxkID0gbnVsbFxuICAgIHRoaXMucGFyZW50ID0gbnVsbFxuICAgIHRoaXMucHJlZGF0b3JzID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgTGlua2VkTGlzdCgpXG4gICAgdGhpcy53b3JtcyA9IG5ldyBMaW5rZWRMaXN0KClcbiAgICB0aGlzLmNoaWxkQ291bnQgPSBjaGlsZENvdW50XG4gICAgdGhpcy5wcmVkYXRvckNvdW50ID0gcHJlZGF0b3JDb3VudFxuICAgIHRoaXMud29ybUNvdW50ID0gd29ybUNvdW50XG4gICAgdGhpcy5jaGFpbiA9IG51bGxcbiAgICB0aGlzLmVuZXJneSA9IG51bGxcbiAgICB0aGlzLnNjb3JlID0gbnVsbFxuICAgIHRoaXMudGltZVNpbmNlV29ybSA9IDBcbiAgICB0aGlzLmFuaW1hdGlvblJlcSA9IG51bGxcbiAgICB0aGlzLmNsaWNraW5nID0gZmFsc2VcbiAgICB0aGlzLmluaXQgPSB0aGlzLmluaXQuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hlY2tJblJhbmdlID0gdGhpcy5jaGVja0luUmFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVzdHJveUNoaWxkID0gdGhpcy5kZXN0cm95Q2hpbGQuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICBpZiAodGhpcy5jbGlja2luZykgcmV0dXJuXG4gICAgdGhpcy5tb3VzZSA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfVxuICAgIHRoaXMuZGlzcGxheS5yZW1vdmVBbmltYXRpb24oJ3dvcm0tbGVmdCcpXG4gIH1cblxuICBoYW5kbGVNb3VzZURvd24gPSAoZSkgPT4ge1xuICAgIGlmICh0aGlzLmVuZXJneS5jb3VudCA8PSAwLjUpIHtcbiAgICAgIHRoaXMuZGlzcGxheS5hbmltYXRlKCd3b3JtLWxlZnQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IG1vdXNlID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9XG4gICAgdGhpcy5tb3VzZSA9IG1vdXNlXG4gICAgdGhpcy5jbGlja2luZyA9IHRydWVcbiAgICBpZiAodGhpcy5wYXJlbnQuZ2V0Q2hpbGRDb3VudCgpID4gMCkgdGhpcy5lbmVyZ3kuZGVjcmVtZW50Q291bnRCeUhhbGYoKVxuICB9XG5cbiAgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICB0aGlzLmNsaWNraW5nID0gZmFsc2VcbiAgfVxuXG4gIGRlc3Ryb3lXb3JtID0gKHdvcm0pID0+IHtcbiAgICB0aGlzLndvcm1zLmRlbGV0ZU5vZGUod29ybSlcbiAgfVxuXG4gIGRlc3Ryb3lDaGlsZChjaGlsZCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlTm9kZShjaGlsZClcbiAgICB0aGlzLnNwYXduQ2hpbGRyZW4oMTcuNSlcbiAgfVxuXG4gIGNoZWNrSW5SYW5nZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCxcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KCksXG4gICAgICBwcmVkYXRvcnMgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KCksXG4gICAgICB3b3JtcyA9IHRoaXMud29ybXMudG9BcnJheSgpXG5cbiAgICAvLyBDaGlsZCBwcmVkYXRvciBjb2xsaXNpb25zXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKHBhcmVudC5jaGVja0luUmFuZ2UoY2hpbGQpKSB7XG4gICAgICAgIHBhcmVudC5oaXRzQ2hpbGQoY2hpbGQpXG4gICAgICAgIHRoaXMuc3Bhd25DaGlsZHJlbigxNy41KVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBwcmVkYXRvciBvZiBwcmVkYXRvcnMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMTApKSBjaGlsZC5hdm9pZFByZWRhdG9yKClcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMCkpIGNoaWxkLmhpdHNQcmVkYXRvcih0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBQYXJlbnQgcHJlZGF0b3IgY29sbGlzaW9uc1xuICAgIGZvciAoY29uc3QgcHJlZGF0b3Igb2YgcHJlZGF0b3JzKSB7XG4gICAgICBpZiAocGFyZW50LmNoZWNrSW5SYW5nZShwcmVkYXRvciwgNSkpXG4gICAgICAgIHBhcmVudC5jaGVja0NvbGxpc2lvbldpdGhQcmVkYXRvcihwcmVkYXRvcilcbiAgICB9XG5cbiAgICAvL1BhcmVudCB3b3JtIGNvbGxpc2lvbnNcbiAgICBmb3IgKGNvbnN0IHdvcm0gb2Ygd29ybXMpIHtcbiAgICAgIGlmIChwYXJlbnQuY2hlY2tJblJhbmdlKHdvcm0sIDIpKSBwYXJlbnQuaGl0c1dvcm0odGhpcywgd29ybSlcbiAgICB9XG4gIH1cblxuICBzcGF3bkNoaWxkcmVuID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuICAgIGxldCBpbmRlcGVuZGVudEMgPSB0aGlzLmNoaWxkcmVuLnNpemUgLSB0aGlzLnBhcmVudC5nZXRDaGlsZENvdW50KClcblxuICAgIHdoaWxlIChpbmRlcGVuZGVudEMgPCB0aGlzLmNoaWxkQ291bnQgJiYgdGhpcy5jaGlsZENvdW50ID4gMCkge1xuICAgICAgY29uc3QgcmFuZG9tUG9zID0gdGhpcy53b3JsZC5nZXRSYW5kb21Qb3MociksXG4gICAgICAgIGNoaWxkID0gbmV3IENoaWxkKHJhbmRvbVBvcywgciwgdGhpcy53b3JsZCwgQ2hpbGRTcHJpdGUsIHNpemUpXG5cbiAgICAgIGNoaWxkLnNldFJhbmRvbURpcigpXG4gICAgICB0aGlzLmNoaWxkcmVuLmFwcGVuZFRvVGFpbChjaGlsZClcbiAgICAgIGluZGVwZW5kZW50QyA9IHRoaXMuY2hpbGRyZW4uc2l6ZSAtIHRoaXMucGFyZW50LmdldENoaWxkQ291bnQoKVxuICAgIH1cbiAgfVxuXG4gIHNwYXduUHJlZGF0b3JzID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuXG4gICAgd2hpbGUgKHRoaXMucHJlZGF0b3JzLnNpemUgPCB0aGlzLnByZWRhdG9yQ291bnQpIHtcbiAgICAgIGNvbnN0IHJhbmRvbVBvcyA9IHRoaXMud29ybGQuZ2V0UmFuZG9tUG9zKHIpLFxuICAgICAgICBwcmVkYXRvciA9IG5ldyBQcmVkYXRvcihyYW5kb21Qb3MsIHIsIHRoaXMud29ybGQsIFByZWRhdG9yU3ByaXRlLCBzaXplKVxuICAgICAgcHJlZGF0b3Iuc2V0UmFuZG9tRGlyKClcbiAgICAgIHRoaXMucHJlZGF0b3JzLmFwcGVuZFRvVGFpbChwcmVkYXRvcilcbiAgICB9XG4gIH1cblxuICBzcGF3bldvcm1zID0gKHIsIHZlbCkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSB7IHdpZHRoOiByICogMiwgaGVpZ2h0OiByICogMiB9XG5cbiAgICB3aGlsZSAodGhpcy53b3Jtcy5zaXplIDwgdGhpcy53b3JtQ291bnQpIHtcbiAgICAgIGNvbnN0IHJhbmRvbVBvcyA9IHRoaXMud29ybGQuZ2V0UmFuZG9tUG9zKHIpLFxuICAgICAgICB3b3JtID0gbmV3IFdvcm0ocmFuZG9tUG9zLCByLCB0aGlzLndvcmxkLCBXb3JtU3ByaXRlLCBzaXplLCB2ZWwgJiYgdmVsKVxuICAgICAgd29ybS5zZXRSYW5kb21EaXIoKVxuICAgICAgdGhpcy53b3Jtcy5hcHBlbmRUb1RhaWwod29ybSlcbiAgICB9XG4gIH1cblxuICBpbml0Q2hpbGRyZW4gPSAocikgPT4ge1xuICAgIHRoaXMuc3Bhd25DaGlsZHJlbihyKVxuICB9XG5cbiAgaW5pdFByZWRhdG9ycyA9IChyKSA9PiB7XG4gICAgdGhpcy5zcGF3blByZWRhdG9ycyhyKVxuICB9XG5cbiAgaW5pdFBhcmVudCA9IChyKSA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IHsgd2lkdGg6IHIgKiAyLCBoZWlnaHQ6IHIgKiAyIH1cbiAgICBjb25zdCBpbml0aWFsUG9zID0ge1xuICAgICAgeDogdGhpcy53b3JsZC5zaXplLndpZHRoIC8gMiArIHIsXG4gICAgICB5OiB0aGlzLndvcmxkLnNpemUuaGVpZ2h0IC8gMiArIHIsXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gbmV3IFBhcmVudChcbiAgICAgIGluaXRpYWxQb3MsXG4gICAgICByLFxuICAgICAgdGhpcy53b3JsZCxcbiAgICAgIHRoaXMuY2hhaW4sXG4gICAgICB0aGlzLnNjb3JlLFxuICAgICAgdGhpcy5lbmVyZ3ksXG4gICAgICBQYXJlbnRTcHJpdGUsXG4gICAgICBzaXplXG4gICAgKVxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50XG4gIH1cblxuICBpbml0V29ybXMgPSAociwgdmVsKSA9PiB7XG4gICAgdGhpcy5zcGF3bldvcm1zKHIsIHZlbClcbiAgfVxuXG4gIGluaXRDaGFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFpbiA9IG5ldyBDaGFpbih0aGlzLmRpc3BsYXkpXG4gICAgY2hhaW4uaW5pdCgpXG4gICAgdGhpcy5jaGFpbiA9IGNoYWluXG4gIH1cblxuICBpbml0V29ybGQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd29ybGQgPSBuZXcgV29ybGQodGhpcy5kaXNwbGF5KVxuICAgIHdvcmxkLmluaXQoKVxuICAgIHRoaXMud29ybGQgPSB3b3JsZFxuICB9XG5cbiAgaW5pdFNjb3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjb3JlID0gbmV3IFNjb3JlKHRoaXMuZGlzcGxheSlcbiAgICBzY29yZS5pbml0KClcbiAgICB0aGlzLnNjb3JlID0gc2NvcmVcbiAgfVxuXG4gIGluaXRFbmVyZ3kgPSAoaW5pdENvdW50LCBtYXgpID0+IHtcbiAgICBjb25zdCBlbmVyZ3kgPSBuZXcgRW5lcmd5KHRoaXMuZGlzcGxheSwgaW5pdENvdW50LCBtYXgpXG4gICAgZW5lcmd5LmluaXQoKVxuICAgIHRoaXMuZW5lcmd5ID0gZW5lcmd5XG4gIH1cblxuICByZXBsYXlHYW1lID0gKCkgPT4ge1xuICAgIHRoaXMucmVzZXRHYW1lKClcbiAgICB0aGlzLmRpc3BsYXkuY2xlYXJHYW1lRW5kKClcbiAgfVxuXG4gIHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLmVuZXJneS5yZXNldCgpXG4gICAgdGhpcy5zY29yZS5yZXNldCgpXG4gICAgdGhpcy5tb3VzZSA9IHsgeDogbnVsbCwgeTogbnVsbCB9XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsXG4gICAgdGhpcy5wcmVkYXRvcnMgPSBuZXcgTGlua2VkTGlzdCgpXG4gICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBMaW5rZWRMaXN0KClcbiAgICB0aGlzLndvcm1zID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMuY2hhaW4gPSBudWxsXG4gICAgdGhpcy50aW1lU2luY2VXb3JtID0gMFxuXG4gICAgdGhpcy5pbml0V29ybGQoKVxuICAgIHRoaXMuaW5pdENoYWluKClcbiAgICB0aGlzLmluaXRQYXJlbnQoMzApXG4gICAgdGhpcy5pbml0Q2hpbGRyZW4oMTcuNSlcbiAgICB0aGlzLmluaXRQcmVkYXRvcnMoMzUpXG4gICAgdGhpcy5pbml0V29ybXMoMjApXG4gICAgdGhpcy5hbmltYXRpb25SZXEgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdylcbiAgfVxuXG4gIGdhbWVPdmVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2NvcmUuY2FsY3VsYXRlSGlnaFNjb3JlKClcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25SZXEpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlckdhbWVFbmQoXG4gICAgICB0aGlzLnJlcGxheUdhbWUsXG4gICAgICB0aGlzLnNjb3JlLnNjb3JlLFxuICAgICAgdGhpcy5zY29yZS5oaWdoU2NvcmVcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cblxuICBkcmF3ID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgIGlmICh0aGlzLmVuZXJneS5jb3VudCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FtZU92ZXIoKVxuICAgIH1cblxuICAgIGNvbnN0IHRpbWVQYXNzZWQgPSB0aW1lc3RhbXAgLSB0aGlzLnRpbWVTaW5jZVdvcm1cbiAgICBpZiAodGltZVBhc3NlZCA+PSAyNTAwICYmIHRoaXMud29ybXMuc2l6ZSA8PSAwKSB7XG4gICAgICB0aGlzLnNwYXduV29ybXMoMjApXG4gICAgICB0aGlzLnRpbWVTaW5jZVdvcm0gPSB0aW1lc3RhbXBcbiAgICB9XG5cbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLndvcmxkLmNhbnZhcyxcbiAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgICAgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKSxcbiAgICAgIHByZWRhdG9ycyA9IHRoaXMucHJlZGF0b3JzLnRvQXJyYXkoKSxcbiAgICAgIHdvcm1zID0gdGhpcy53b3Jtcy50b0FycmF5KClcblxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuXG4gICAgdGhpcy5wYXJlbnQubW92ZXModGhpcy5tb3VzZSlcbiAgICB0aGlzLnBhcmVudC5kcmF3KGN0eCwgeyB4OiAzMCwgeTogMjUgfSlcblxuICAgIGZvciAoY29uc3QgcHJlZGF0b3Igb2YgcHJlZGF0b3JzKSB7XG4gICAgICBwcmVkYXRvci5tb3ZlcygpXG4gICAgICBwcmVkYXRvci5kcmF3KGN0eCwgeyB4OiAzMCwgeTogMjUgfSlcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHdvcm0gb2Ygd29ybXMpIHtcbiAgICAgIHdvcm0ubW92ZXModGhpcylcbiAgICAgIHdvcm0uZHJhdyhjdHgsIHsgeDogMCwgeTogMCB9KVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGlmIChjaGlsZC5pbmRlcGVuZGVuY2UpIGNoaWxkLm1vdmVzKClcbiAgICAgIGNoaWxkLmRyYXcoY3R4LCB7IHg6IDE1LCB5OiAxNSB9KVxuXG4gICAgICB0aGlzLmNsaWNraW5nID8gY2hpbGQuc2V0Q2xpY2tpbmcodHJ1ZSkgOiBjaGlsZC5zZXRDbGlja2luZyhmYWxzZSlcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrSW5SYW5nZSgpXG4gICAgdGhpcy5hbmltYXRpb25SZXEgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gdGhpcy5kaXNwbGF5LnJlbmRlckdhbWUoKVxuICAgIC8vIHRoaXMuZGlzcGxheS5yZW5kZXJUaXRsZSgpXG4gICAgLy8gdGhpcy5kaXNwbGF5LnJlbmRlcldvcmxkKClcbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyU2NvcmUoKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJDaGFpbigpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlckVuZXJneSgpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUsIGZhbHNlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93biwgZmFsc2UpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXAsIGZhbHNlKVxuICAgIHRoaXMuaW5pdEVuZXJneSg1LCA1KVxuICAgIHRoaXMuaW5pdFdvcmxkKClcbiAgICB0aGlzLmluaXRTY29yZSgpXG4gICAgdGhpcy5pbml0Q2hhaW4oKVxuICAgIHRoaXMuaW5pdFBhcmVudCgzMClcbiAgICB0aGlzLmluaXRDaGlsZHJlbigxNy41KVxuICAgIHRoaXMuaW5pdFByZWRhdG9ycygzNSlcbiAgICB0aGlzLmluaXRXb3JtcygyMClcbiAgICB0aGlzLmFuaW1hdGlvblJlcSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21JbnQsIGluUmFuZ2UgfSBmcm9tICcuL3V0aWxzJ1xuXG5jb25zdCByID0gMTAsXG4gIGMgPSAnIzcyODBmNicsXG4gIHYgPSB7IGR4OiAxLCBkeTogMSB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBvcywgcmFkaXVzID0gciwgd29ybGQsIHNwcml0ZSwgc2l6ZSwgdmVsID0gdiwgY29sb3IgPSBjKSB7XG4gICAgdGhpcy5wb3MgPSBwb3NcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICAgIHRoaXMud29ybGQgPSB3b3JsZFxuICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMudmVsID0gdmVsXG4gICAgdGhpcy5jdXJyRGlyID0gWzAsIDBdXG4gICAgdGhpcy5wb3NDYWNoZSA9IFtdXG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKVxuICAgIHRoaXMubW92ZXNXaXRoQ3Vyc29yID0gdGhpcy5tb3Zlc1dpdGhDdXJzb3IuYmluZCh0aGlzKVxuICAgIHRoaXMubW92ZXMgPSB0aGlzLm1vdmVzLmJpbmQodGhpcylcbiAgICB0aGlzLmNoZWNrSW5SYW5nZSA9IHRoaXMuY2hlY2tJblJhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhpdHNQYXJlbnQgPSB0aGlzLmhpdHNQYXJlbnQuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c1ByZWRhdG9yID0gdGhpcy5oaXRzUHJlZGF0b3IuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c0NoaWxkID0gdGhpcy5oaXRzQ2hpbGQuYmluZCh0aGlzKVxuICB9XG5cbiAgc2V0VmVsb2NpdHkgPSAodmVsb2NpdHkpID0+IHtcbiAgICB0aGlzLnZlbCA9IHZlbG9jaXR5XG4gIH1cblxuICBzZXRQb3MgPSAocG9zKSA9PiB7XG4gICAgdGhpcy5wb3MgPSBwb3NcbiAgfVxuXG4gIHNldFBvc0NhY2hlID0gKHBvc0NhY2hlKSA9PiB7XG4gICAgdGhpcy5wb3NDYWNoZSA9IHBvc0NhY2hlXG4gIH1cblxuICBzZXRDdXJyRGlyID0gKGRpcikgPT4ge1xuICAgIHRoaXMuY3VyckRpciA9IGRpclxuICB9XG5cbiAgc2V0UmFuZG9tRGlyID0gKCkgPT4ge1xuICAgIC8qIFxuICAgIDggcG9zc2libGUgZGlyZWN0aW9ucy5cbiAgICBWZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbDogXG4gICAgICAgIOKGkSAgICAgIFxuICAgICAgICDihpFcbiAgIOKGkCAg4oaQICAg4oaSICDihpIgIFxuICAgICAgICDihpNcbiAgICAgICAg4oaTIFxuICAgIERpYWdvbmFsczpcbiAgICDihpYgICAgICDihpdcbiAgICAgIOKGliAg4oaXXG4gICAgICDihpkgIOKGmCBcbiAgICDihpkgICAgICDihphcbiAgICAqL1xuXG4gICAgY29uc3QgeyBkeCwgZHkgfSA9IHRoaXMudmVsXG4gICAgY29uc3QgaW5kZXggPSBnZXRSYW5kb21JbnQoOClcbiAgICBjb25zdCBwb3NzaWJsZURpcmVjdGlvbnMgPSBbXG4gICAgICAvLyAwIHZhbHVlcyBvZmYgc2xpZ2h0bHkgc28gb2JqZWN0cyBkb2Vzbid0IHN0aWNrIHRvIGVkZ2VzLlxuICAgICAgW2R4LCAwLjJdLFxuICAgICAgWy1keCwgMC4zXSxcbiAgICAgIFswLjE1LCBkeV0sXG4gICAgICBbMC4yMywgLWR5XSxcbiAgICAgIFtkeCwgZHldLFxuICAgICAgWy1keCwgZHldLFxuICAgICAgW2R4LCAtZHldLFxuICAgICAgWy1keCwgLWR5XSxcbiAgICBdXG5cbiAgICB0aGlzLnNldEN1cnJEaXIocG9zc2libGVEaXJlY3Rpb25zW2luZGV4XSlcbiAgfVxuXG4gIGNoZWNrT3V0T2ZCb3VuZHMgPSAocG9zKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMud29ybGQuY2hlY2tPdXRPZkJvdW5kcyhwb3MsIHRoaXMucmFkaXVzKVxuICB9XG5cbiAgZ2V0UmFuZG9tUG9zID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLndvcmxkLmdldFJhbmRvbVBvcyh0aGlzLnJhZGl1cylcbiAgfVxuICAvKiogQm91bmNlIG9iamVjdCBiYWNrIGlmIGl0IGhpdHMgdGhlIHdhbGwgKi9cbiAgYm91bmNlQmFjayA9IChwb3MpID0+IHtcbiAgICBjb25zdCB7IGJvdW5kcyB9ID0gdGhpcy53b3JsZCxcbiAgICAgIHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IH0gPSBib3VuZHMsXG4gICAgICByID0gdGhpcy5yYWRpdXNcblxuICAgIGxldCB7IHgsIHkgfSA9IHBvcyxcbiAgICAgIGR4ID0gdGhpcy5jdXJyRGlyWzBdLFxuICAgICAgZHkgPSB0aGlzLmN1cnJEaXJbMV1cblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdDaGlsZCcpIHtcbiAgICAgIGlmICh0aGlzLnZlbC5keCA+IDEgfHwgdGhpcy52ZWwuZHkgPiAxKSB7XG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHkoeyBkeDogMSwgZHk6IDEgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKGR4ID4gMSkge1xuICAgICAgICBkeCA9IGR4IC8gNVxuICAgICAgfVxuICAgICAgaWYgKGR5ID4gMSkge1xuICAgICAgICBkeSA9IGR5IC8gNVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4ICsgciA+IHJpZ2h0IHx8IHggLSByIDwgbGVmdCkge1xuICAgICAgdGhpcy5zZXRDdXJyRGlyKFstZHgsIGR5XSlcbiAgICB9XG5cbiAgICBpZiAoeSAtIHIgPCB0b3AgfHwgeSArIHIgPiBib3R0b20pIHtcbiAgICAgIHRoaXMuc2V0Q3VyckRpcihbZHgsIC1keV0pXG4gICAgfVxuICAgIC8vb2JqcyBnZXQgc3R1Y2sgaWYgcGFyYWxsZWwgdG8gd2FsbHMgYW5kIG91dCBvZiBib3VuZHNcbiAgICBsZXQgblBvcyA9IHsgeDogeCArIHRoaXMuY3VyckRpclswXSwgeTogeSArIHRoaXMuY3VyckRpclsxXSB9XG4gICAgaWYgKHRoaXMuY2hlY2tPdXRPZkJvdW5kcyhuUG9zKSkgdGhpcy5zZXRSYW5kb21EaXIoKVxuICB9XG5cbiAgY2hlY2tJblJhbmdlKG9iaiwgY3VzaGlvbiA9IDApIHtcbiAgICAvLyBOb3RlOiBvYmouY29uc3RydWN0b3IubmFtZSB3b24ndCB3b3JrIHdpdGggSUUgYW5kIHRoZXJlIGFyZSBzb21lIGNhdmVhdHMuIE1vcmUgaW5mbyAtLT4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRnVuY3Rpb24vbmFtZVxuXG4gICAgY29uc3Qgb1BvcyA9IG9iai5wb3MsXG4gICAgICBvUiA9IG9iai5yYWRpdXMgKyBjdXNoaW9uLFxuICAgICAgeyB4LCB5IH0gPSB0aGlzLnBvcyxcbiAgICAgIHJhbmdlWCA9IFtvUG9zLnggLSBvUiwgb1Bvcy54ICsgb1JdLFxuICAgICAgcmFuZ2VZID0gW29Qb3MueSAtIG9SLCBvUG9zLnkgKyBvUl0sXG4gICAgICByID0gdGhpcy5yYWRpdXMgKyBjdXNoaW9uXG5cbiAgICBjb25zdCB3aXRoaW5SYW5nZSA9XG4gICAgICAoaW5SYW5nZSh4IC0gciwgLi4ucmFuZ2VYKSB8fCBpblJhbmdlKHggKyByLCAuLi5yYW5nZVgpKSAmJlxuICAgICAgKGluUmFuZ2UoeSAtIHIsIC4uLnJhbmdlWSkgfHwgaW5SYW5nZSh5ICsgciwgLi4ucmFuZ2VZKSlcblxuICAgIHJldHVybiB3aXRoaW5SYW5nZVxuICB9XG5cbiAgLy8gQ2FuJ3QgdXNlIEBiYWJlbC9wbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcy4gc3VwZXIubW92ZSgpIGRvZXNuJ3Qgd29yayBpbiBzdWJjbGFzc2VzLlxuICBoaXRzUGFyZW50KG9iaikge31cblxuICBoaXRzUHJlZGF0b3Iob2JqKSB7fVxuXG4gIGhpdHNDaGlsZChvYmopIHt9XG5cbiAgLyoqIERyYXcgdGhlIG9iamVjdCBvbiBjYW52YXMgKi9cbiAgZHJhdyA9IChjdHgsIG9mZnNldCA9IHsgeDogMCwgeTogMCB9KSA9PiB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLnBvc1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLnNwcml0ZSxcbiAgICAgIHggLSBvZmZzZXQueCxcbiAgICAgIHkgLSBvZmZzZXQueSxcbiAgICAgIHRoaXMuc2l6ZS53aWR0aCxcbiAgICAgIHRoaXMuc2l6ZS5oZWlnaHRcbiAgICApXG4gIH1cblxuICBjbGlwUG9zID0gKHsgeCwgeSB9KSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfSA9IHRoaXMud29ybGQuYm91bmRzLFxuICAgICAgciA9IHRoaXMucmFkaXVzXG5cbiAgICBjb25zdCBjbGlwcGVkWCA9IHggPiBsZWZ0ICsgciAmJiB4IDwgcmlnaHQgLSByID8geCA6IHRoaXMucG9zLngsXG4gICAgICBjbGlwcGVkWSA9IHkgPiB0b3AgKyByICYmIHkgPCBib3R0b20gLSByID8geSA6IHRoaXMucG9zLnlcblxuICAgIHJldHVybiB7IHg6IGNsaXBwZWRYLCB5OiBjbGlwcGVkWSB9XG4gIH1cblxuICBtb3Zlc1dpdGhDdXJzb3IocG9zLCBlYXNpbmcsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB7IG9mZnNldHMgfSA9IHRoaXMud29ybGRcbiAgICBsZXQgeyB4LCB5IH0gPSBwb3NcblxuICAgIC8vIE9mZnNldHMgdG8gYWNjb3VudCBmb3IgbWFyZ2luLCBwYWRkaW5ncyBhcm91bmQgZ2FtZSB3b3JsZC5cbiAgICBjb25zdCBvZmZzZXRMID0gb2Zmc2V0cy5sZWZ0LFxuICAgICAgb2Zmc2V0VCA9IG9mZnNldHMudG9wLFxuICAgICAgcmVsYXRpdmVYID0geCAtIG9mZnNldEwsXG4gICAgICByZWxhdGl2ZVkgPSB5IC0gb2Zmc2V0VFxuXG4gICAgbGV0IHhEaWZmID0gcmVsYXRpdmVYIC0gdGhpcy5wb3MueCxcbiAgICAgIHlEaWZmID0gcmVsYXRpdmVZIC0gdGhpcy5wb3MueVxuXG4gICAgLy8gT2Zmc2V0IGNoaWxkcmVuIHNvIHRoZXkgZG9uJ3QgYWxsIG92ZXJsYXAgdGhlIHBhcmVudCB3aGVuIHN0YXRpb25hcnkgb3Igc2xvdyBtb3ZpbmcuXG4gICAgaWYgKHlEaWZmIDw9IDApIHlEaWZmICs9IG9mZnNldFxuICAgIC8vTW9yZSBpbmZvIG9uIHR3ZWVuaW5nLCBhbmltYXRpb24gLS0+IGh0dHBzOi8vc3BpY3l5b2dodXJ0LmNvbS90dXRvcmlhbHMvaHRtbDUtamF2YXNjcmlwdC1nYW1lLWRldmVsb3BtZW50L2NyZWF0ZS1hLXNtb290aC1jYW52YXMtYW5pbWF0aW9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNzk3MzU3Ny8xMTI3OTgxMVxuICAgIGNvbnN0IHZlbFggPSB4RGlmZiAqIGVhc2luZyxcbiAgICAgIHZlbFkgPSB5RGlmZiAqIGVhc2luZ1xuXG4gICAgdGhpcy52ZWxvY2l0eSA9IHsgeDogdmVsWCwgeTogdmVsWSB9XG5cbiAgICB4ID0gdGhpcy5wb3MueCArIHZlbFhcbiAgICB5ID0gdGhpcy5wb3MueSArIHZlbFlcblxuICAgIC8vRG9uJ3QgbGV0IG9iamVjdHMgcGFzcyBlZGdlXG4gICAgY29uc3QgY2xpcHBlZFBvcyA9IHRoaXMuY2xpcFBvcyh7IHgsIHkgfSlcblxuICAgIHRoaXMuc2V0UG9zKGNsaXBwZWRQb3MpXG5cbiAgICAvLyBDYWNoZSBsYXN0IDUgcG9zaXRpb25zLiBNYWtlcyBjaGlsZHJlbidzIG1vdmVtZW50IG1vcmUgbmF0dXJhbC5cbiAgICBjb25zdCBwb3NDYWNoZSA9IHRoaXMucG9zQ2FjaGVcbiAgICBpZiAocG9zQ2FjaGUubGVuZ3RoID4gNCkgcG9zQ2FjaGUuc2hpZnQoKVxuICAgIHBvc0NhY2hlLnB1c2gocG9zKVxuICAgIHRoaXMuc2V0UG9zQ2FjaGUocG9zQ2FjaGUpXG4gIH1cblxuICBtb3ZlcygpIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcyxcbiAgICAgIHBvcyA9IHsgeDogeCArIHRoaXMuY3VyckRpclswXSwgeTogeSArIHRoaXMuY3VyckRpclsxXSB9XG5cbiAgICBpZiAodGhpcy5jaGVja091dE9mQm91bmRzKHBvcykpIHRoaXMuYm91bmNlQmFjayhwb3MpXG5cbiAgICB0aGlzLnNldFBvcyhwb3MpXG4gIH1cbn1cbiIsImltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tICdkYXRhX3N0cnVjdHVyZXMnXG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vTW92aW5nT2JqZWN0J1xuXG5jb25zdCByID0gMTMsXG4gIGMgPSAnIzcyODBmNicsXG4gIGUgPSAxXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmVudCBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBvcyxcbiAgICByYWRpdXMgPSByLFxuICAgIHdvcmxkLFxuICAgIGNoYWluLFxuICAgIHNjb3JlLFxuICAgIGVuZXJneSxcbiAgICBzcHJpdGUsXG4gICAgc2l6ZSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9LFxuICAgIGNvbG9yID0gYyxcbiAgICBlYXNpbmcgPSBlXG4gICkge1xuICAgIHN1cGVyKHBvcywgcmFkaXVzLCB3b3JsZCwgc3ByaXRlLCBzaXplLCBudWxsLCBjb2xvcilcbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMuY2hhaW4gPSBjaGFpblxuICAgIHRoaXMuc2NvcmUgPSBzY29yZVxuICAgIHRoaXMuZW5lcmd5ID0gZW5lcmd5XG4gICAgdGhpcy5lYXNpbmcgPSBlYXNpbmdcbiAgICB0aGlzLmN1cnJQcmVkQ29scyA9IFtdXG4gICAgdGhpcy5wb3NDYWNoZSA9IFtdXG4gICAgdGhpcy5zcHJpdGUgPSBzcHJpdGVcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMubW92ZXMuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c1ByZWRhdG9yID0gdGhpcy5oaXRzUHJlZGF0b3IuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c0NoaWxkID0gdGhpcy5oaXRzQ2hpbGQuYmluZCh0aGlzKVxuICAgIHRoaXMuY2xpY2tpbmcgPSBmYWxzZVxuICB9XG5cbiAgc2V0Q3VyclByZWRDb2xzID0gKGN1cnJQcmVkQ29scykgPT4ge1xuICAgIHRoaXMuY3VyclByZWRDb2xzID0gY3VyclByZWRDb2xzXG4gIH1cblxuICBnZXRDaGlsZENvdW50ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnNpemVcbiAgfVxuXG4gIGRlbGV0ZUFsbENoaWxkcmVuID0gKCkgPT4ge1xuICAgIHdoaWxlICh0aGlzLmdldENoaWxkQ291bnQoKSA+IDEpIHtcbiAgICAgIHRoaXMuZGVsZXRlTGFzdENoaWxkKClcbiAgICB9XG4gIH1cblxuICBkZWxldGVMYXN0Q2hpbGQgPSAoKSA9PiB7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmNoaWxkcmVuLmRlbGV0ZUZyb21UYWlsKClcbiAgICBpZiAoY3Vycikge1xuICAgICAgY3Vyci5zZXRDaGFpblBvcyhudWxsKVxuICAgICAgY3Vyci5zZXROZXh0Q2hpbGQobnVsbClcbiAgICAgIGN1cnIuc2V0SW5kZXBlbmRlbmNlKHRydWUpXG4gICAgICB0aGlzLmNoYWluLmRlY3JlbWVudENvdW50KClcbiAgICAgIGN1cnIuc2V0UGFyZW50KG51bGwpXG4gICAgfVxuICAgIHJldHVybiBjdXJyXG4gIH1cblxuICBkZXN0cm95Q2hpbGQgPSAoY2hpbGQpID0+IHtcbiAgICB0aGlzLmNoaWxkcmVuLmRlbGV0ZU5vZGUoY2hpbGQpXG4gIH1cblxuICBhcHBlbmRDaGlsZCA9IChjaGlsZCkgPT4ge1xuICAgIGlmICghdGhpcy5jaGlsZHJlbi5zZWFyY2goY2hpbGQpKSB7XG4gICAgICB0aGlzLmNoYWluLmluY3JlbWVudENvdW50KClcbiAgICAgIHRoaXMuc2NvcmUuY2FsY3VsYXRlU2NvcmUodGhpcy5nZXRDaGlsZENvdW50KCkpXG4gICAgICBjb25zdCB0YWlsID0gdGhpcy5jaGlsZHJlbi50YWlsLFxuICAgICAgICBsYXN0Q2hpbGQgPSB0YWlsICYmIHRhaWwudmFsXG4gICAgICBpZiAobGFzdENoaWxkKSBsYXN0Q2hpbGQuc2V0TmV4dENoaWxkKGNoaWxkKVxuXG4gICAgICB0aGlzLmNoaWxkcmVuLmFwcGVuZFRvVGFpbChjaGlsZClcblxuICAgICAgY2hpbGQuc2V0Q2hhaW5Qb3ModGhpcy5nZXRDaGlsZENvdW50KCkpXG4gICAgICBjaGlsZC5zZXRQYXJlbnQodGhpcylcbiAgICB9XG4gIH1cblxuICBjaGVja0NvbGxpc2lvbldpdGhQcmVkYXRvciA9IChwcmVkYXRvcikgPT4ge1xuICAgIGNvbnN0IGNvbGxpZGVkID0gc3VwZXIuY2hlY2tJblJhbmdlKHByZWRhdG9yKSxcbiAgICAgIGNvbGxpZGluZyA9IHRoaXMuY3VyclByZWRDb2xzLmluY2x1ZGVzKHByZWRhdG9yKVxuXG4gICAgLyogaWYgY29sbGlkZWQgYW5kIGZpcnN0IGNvbnRhY3QsXG4gICAgICBhZGQgcHJlZGF0b3IgdG8gdGhlIGN1cnJlbnQgY29sbGlzaW9ucyB3aXRoIHByZWRhdG9yLFxuICAgICAgY2FsbCBjb2xsaWRlIHdpdGggcHJlZGF0b3IgKGRlY3JlbWVudCBjaGFpbiBjb3VudClcbiAgICAqL1xuICAgIGlmIChjb2xsaWRlZCAmJiAhY29sbGlkaW5nKSB7XG4gICAgICBjb25zdCBjdXJyUHJlZENvbHMgPSB0aGlzLmN1cnJQcmVkQ29scy5zbGljZSgpXG4gICAgICBjdXJyUHJlZENvbHMucHVzaChwcmVkYXRvcilcbiAgICAgIHRoaXMuc2V0Q3VyclByZWRDb2xzKGN1cnJQcmVkQ29scylcbiAgICAgIHRoaXMuaGl0c1ByZWRhdG9yKClcbiAgICB9XG5cbiAgICAvKiBpZiB3YXMgY29sbGlkaW5nIGFuZCBzdG9wcGVkIGNvbGxpZGluZywgcmVtb3ZlIHByZWRhdG9yIGZyb20gY3VycmVudCBjb2xsaXNpb25zICovXG4gICAgaWYgKCFjb2xsaWRlZCAmJiBzdXBlci5jaGVja0luUmFuZ2UocHJlZGF0b3IsIDUpICYmIGNvbGxpZGluZykge1xuICAgICAgY29uc3QgY3VyclByZWRDb2xzID0gdGhpcy5jdXJyUHJlZENvbHMuc2xpY2UoKSxcbiAgICAgICAgaW5kZXggPSBjdXJyUHJlZENvbHMuaW5kZXhPZihwcmVkYXRvcilcbiAgICAgIGN1cnJQcmVkQ29scy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB0aGlzLnNldEN1cnJQcmVkQ29scyhjdXJyUHJlZENvbHMpXG4gICAgfVxuICB9XG5cbiAgaGl0c1ByZWRhdG9yKCkge1xuICAgIHRoaXMuY2hhaW4ucmVzZXQoKVxuICAgIHRoaXMuZW5lcmd5LmRlY3JlbWVudENvdW50KClcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4udG9BcnJheSgpXG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZC5zZXRQYXJlbnQobnVsbClcbiAgICAgIGNoaWxkLnNldENoYWluUG9zKG51bGwpXG4gICAgICBjaGlsZC5zZXROZXh0Q2hpbGQobnVsbClcbiAgICAgIGNoaWxkLnNldEluZGVwZW5kZW5jZSh0cnVlKVxuICAgICAgY29uc3QgdmVsID0geyBkeDogMywgZHk6IDMgfVxuICAgICAgY2hpbGQuc2V0VmVsb2NpdHkodmVsKVxuXG4gICAgICBjb25zdCBbeCwgeV0gPSBjaGlsZC5jdXJyRGlyLFxuICAgICAgICB7IGR4LCBkeSB9ID0gdmVsXG4gICAgICBjaGlsZC5zZXRDdXJyRGlyKFt4ICogZHgsIHkgKiBkeV0pXG4gICAgICBjaGlsZC5zZXRSYW5kb21EaXIoKVxuICAgIH1cblxuICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgTGlua2VkTGlzdCgpXG4gIH1cblxuICBoaXRzQ2hpbGQob2JqKSB7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChvYmopXG4gICAgb2JqLnNldEluZGVwZW5kZW5jZShmYWxzZSlcbiAgfVxuXG4gIGhpdHNXb3JtKGdhbWUsIHdvcm0pIHtcbiAgICB0aGlzLmVuZXJneS5pbmNyZW1lbnRDb3VudCgpXG4gICAgZ2FtZS5kZXN0cm95V29ybSh3b3JtKVxuICB9XG5cbiAgbW92ZXMocG9zKSB7XG4gICAgc3VwZXIubW92ZXNXaXRoQ3Vyc29yKHBvcywgdGhpcy5lYXNpbmcpXG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGRyZW4uaGVhZCAmJiB0aGlzLmNoaWxkcmVuLmhlYWQudmFsXG5cbiAgICBpZiAoZmlyc3RDaGlsZClcbiAgICAgIGZpcnN0Q2hpbGQubW92ZXModGhpcy5wb3NDYWNoZS5sZW5ndGggPyB0aGlzLnBvc0NhY2hlWzBdIDogcG9zKVxuICB9XG59XG4iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vTW92aW5nT2JqZWN0J1xuXG5jb25zdCByID0gMTAsXG4gIGMgPSAnI2Y2NzI4MCcsXG4gIHYgPSB7IGR4OiAyLjIsIGR5OiAyLjIgfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVkYXRvciBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBvcyxcbiAgICByYWRpdXMgPSByLFxuICAgIHdvcmxkLFxuICAgIHNwcml0ZSxcbiAgICBzaXplID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0sXG4gICAgdmVsID0gdixcbiAgICBjb2xvciA9IGNcbiAgKSB7XG4gICAgc3VwZXIocG9zLCByYWRpdXMsIHdvcmxkLCBzcHJpdGUsIHNpemUsIHZlbCwgY29sb3IpXG4gICAgdGhpcy5zcHJpdGUgPSBzcHJpdGVcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIHtcbiAgY29uc3RydWN0b3IoZGlzcGxheSkge1xuICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXlcbiAgICB0aGlzLnNjb3JlID0gMFxuICAgIHRoaXMuaGlnaFNjb3JlID0gMFxuICB9XG5cbiAgc2V0U2NvcmUgPSAoc2NvcmUpID0+IHtcbiAgICB0aGlzLnNjb3JlID0gc2NvcmVcbiAgfVxuXG4gIHNldEhpZ2hTY29yZSA9IChzY29yZSkgPT4ge1xuICAgIHRoaXMuaGlnaFNjb3JlID0gc2NvcmVcbiAgfVxuXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U2NvcmUoMClcbiAgICB0aGlzLnVwZGF0ZVNjb3JlKClcbiAgfVxuXG4gIGNhbGN1bGF0ZVNjb3JlID0gKGNoaWxkQ291bnQpID0+IHtcbiAgICBsZXQgY2hhaW5Db3VudCA9IDEgKyBjaGlsZENvdW50IC8vY291bnQgcGFyZW50XG4gICAgbGV0IHNjb3JlVG9BZGQgPSBjaGFpbkNvdW50ICogY2hhaW5Db3VudCAqIDEwXG4gICAgY29uc3QgbmV3U2NvcmUgPSB0aGlzLnNjb3JlICsgc2NvcmVUb0FkZFxuICAgIHRoaXMuc2V0U2NvcmUobmV3U2NvcmUpXG4gICAgdGhpcy51cGRhdGVTY29yZSgpXG4gIH1cblxuICBjYWxjdWxhdGVIaWdoU2NvcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgaGlnaFNjb3JlID0gTWF0aC5tYXgodGhpcy5zY29yZSwgdGhpcy5oaWdoU2NvcmUpXG4gICAgdGhpcy5zZXRIaWdoU2NvcmUoaGlnaFNjb3JlKVxuICB9XG5cbiAgdXBkYXRlU2NvcmUgPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNwbGF5LnVwZGF0ZUVsZW1lbnQoJyNzY29yZScsIHRoaXMuc2NvcmUpXG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIHRoaXMudXBkYXRlU2NvcmUoKVxuICB9XG59XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdXRvcmlhbEdhbWUgZXh0ZW5kcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoZGlzcGxheSwgY2hpbGRDb3VudCA9IDAsIHByZWRhdG9yQ291bnQgPSAwLCB3b3JtQ291bnQgPSAwKSB7XG4gICAgc3VwZXIoZGlzcGxheSwgY2hpbGRDb3VudCwgcHJlZGF0b3JDb3VudCwgd29ybUNvdW50KVxuICAgIHRoaXMudHV0b3JpYWxObyA9IDBcbiAgICB0aGlzLmRlc3Ryb3lDaGlsZCA9IHRoaXMuZGVzdHJveUNoaWxkLmJpbmQodGhpcylcbiAgfVxuICBjaGVja0luUmFuZ2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQsXG4gICAgICBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4udG9BcnJheSgpLFxuICAgICAgcHJlZGF0b3JzID0gdGhpcy5wcmVkYXRvcnMudG9BcnJheSgpLFxuICAgICAgd29ybXMgPSB0aGlzLndvcm1zLnRvQXJyYXkoKVxuXG4gICAgLy8gQ2hpbGQgcHJlZGF0b3IgY29sbGlzaW9uc1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGlmIChwYXJlbnQuY2hlY2tJblJhbmdlKGNoaWxkKSkge1xuICAgICAgICBwYXJlbnQuaGl0c0NoaWxkKGNoaWxkKVxuICAgICAgICBpZiAodGhpcy50dXRvcmlhbE5vID4gNSkgdGhpcy5zcGF3bkNoaWxkcmVuKDE3LjUpXG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHByZWRhdG9yIG9mIHByZWRhdG9ycykge1xuICAgICAgICBpZiAoY2hpbGQuY2hlY2tJblJhbmdlKHByZWRhdG9yLCAxMCkpIGNoaWxkLmF2b2lkUHJlZGF0b3IoKVxuICAgICAgICBpZiAoY2hpbGQuY2hlY2tJblJhbmdlKHByZWRhdG9yLCAwKSkgY2hpbGQuaGl0c1ByZWRhdG9yKHRoaXMpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFBhcmVudCBwcmVkYXRvciBjb2xsaXNpb25zXG4gICAgZm9yIChjb25zdCBwcmVkYXRvciBvZiBwcmVkYXRvcnMpIHtcbiAgICAgIGlmIChwYXJlbnQuY2hlY2tJblJhbmdlKHByZWRhdG9yLCA1KSlcbiAgICAgICAgcGFyZW50LmNoZWNrQ29sbGlzaW9uV2l0aFByZWRhdG9yKHByZWRhdG9yKVxuICAgIH1cblxuICAgIC8vUGFyZW50IHdvcm0gY29sbGlzaW9uc1xuICAgIGZvciAoY29uc3Qgd29ybSBvZiB3b3Jtcykge1xuICAgICAgaWYgKHBhcmVudC5jaGVja0luUmFuZ2Uod29ybSwgMikpIHBhcmVudC5oaXRzV29ybSh0aGlzLCB3b3JtKVxuICAgIH1cbiAgfVxuXG4gIGRyYXdUdXRvcmlhbCA9ICh0aW1lc3RhbXApID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLndvcmxkLmNhbnZhcyxcbiAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgICBpZiAodGhpcy50dXRvcmlhbE5vID49IDApIHtcbiAgICAgIHRoaXMucGFyZW50Lm1vdmVzKHRoaXMubW91c2UpXG4gICAgICB0aGlzLnBhcmVudC5kcmF3KGN0eCwgeyB4OiAzMCwgeTogMjUgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy50dXRvcmlhbE5vID49IDEpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KClcblxuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICBpZiAoY2hpbGQuaW5kZXBlbmRlbmNlKSBjaGlsZC5tb3ZlcygpXG4gICAgICAgIGNoaWxkLmRyYXcoY3R4LCB7IHg6IDE1LCB5OiAxNSB9KVxuXG4gICAgICAgIHRoaXMuY2xpY2tpbmcgPyBjaGlsZC5zZXRDbGlja2luZyh0cnVlKSA6IGNoaWxkLnNldENsaWNraW5nKGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnR1dG9yaWFsTm8gPj0gMikge1xuICAgICAgY29uc3QgcHJlZGF0b3JzID0gdGhpcy5wcmVkYXRvcnMudG9BcnJheSgpXG4gICAgICBmb3IgKGNvbnN0IHByZWRhdG9yIG9mIHByZWRhdG9ycykge1xuICAgICAgICBwcmVkYXRvci5tb3ZlcygpXG4gICAgICAgIHByZWRhdG9yLmRyYXcoY3R4LCB7IHg6IDMwLCB5OiAyNSB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnR1dG9yaWFsTm8gPj0gMikge1xuICAgICAgaWYgKHRoaXMuZW5lcmd5LmNvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVPdmVyKClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMudHV0b3JpYWxObyA+PSA0KSB7XG4gICAgICBjb25zdCB0aW1lUGFzc2VkID0gdGltZXN0YW1wIC0gdGhpcy50aW1lU2luY2VXb3JtXG4gICAgICBpZiAodGltZVBhc3NlZCA+PSAxMCAmJiB0aGlzLndvcm1zLnNpemUgPCB0aGlzLndvcm1Db3VudCkge1xuICAgICAgICB0aGlzLnNwYXduV29ybXMoMjAsIHsgZHk6IDAuNSwgZHk6IDAuNSB9KVxuICAgICAgICB0aGlzLnRpbWVTaW5jZVdvcm0gPSB0aW1lc3RhbXBcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd29ybXMgPSB0aGlzLndvcm1zLnRvQXJyYXkoKVxuICAgICAgZm9yIChjb25zdCB3b3JtIG9mIHdvcm1zKSB7XG4gICAgICAgIHdvcm0ubW92ZXModGhpcylcbiAgICAgICAgd29ybS5kcmF3KGN0eCwgeyB4OiAwLCB5OiAwIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2hlY2tJblJhbmdlKClcblxuICAgIHRoaXMuYW5pbWF0aW9uUmVxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXdUdXRvcmlhbClcbiAgfVxuXG4gIHNldFR1dG9yaWFsTm8gPSAobnVtYmVyKSA9PiB7XG4gICAgdGhpcy50dXRvcmlhbE5vID0gbnVtYmVyXG4gIH1cblxuICBpbml0VHV0b3JpYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5pbml0VHV0b3JpYWwwKClcbiAgfVxuXG4gIGluaXRUdXRvcmlhbDAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRUdXRvcmlhbE5vKDApXG4gICAgdGhpcy5pbml0V29ybGQoKVxuXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlck1vdmVQYXJlbnRUdXQoKVxuICAgIHRoaXMuaW5pdFBhcmVudCgzMClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUsIGZhbHNlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVQcmVzc1NwYWNlKVxuICAgIHRoaXMuYW5pbWF0aW9uUmVxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXdUdXRvcmlhbClcbiAgfVxuXG4gIGluaXRUdXRvcmlhbDEgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRUdXRvcmlhbE5vKDEpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlclNjb3JlKClcbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyQ2hhaW4oKVxuICAgIHRoaXMuaW5pdENoYWluKClcbiAgICB0aGlzLnBhcmVudC5jaGFpbiA9IHRoaXMuY2hhaW5cbiAgICB0aGlzLmluaXRTY29yZSgpXG4gICAgdGhpcy5wYXJlbnQuc2NvcmUgPSB0aGlzLnNjb3JlXG4gICAgdGhpcy5jaGlsZENvdW50ID0gNVxuICAgIHRoaXMuaW5pdENoaWxkcmVuKDE3LjUpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlckNoaWxkcmVuVHV0KClcbiAgfVxuXG4gIGluaXRUdXRvcmlhbDIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRUdXRvcmlhbE5vKDIpXG4gICAgdGhpcy5zY29yZS5yZXNldCgpXG4gICAgdGhpcy5wYXJlbnQuZGVsZXRlQWxsQ2hpbGRyZW4oKVxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbi50b0FycmF5KCkpIHtcbiAgICAgIGNoaWxkLnNldFBvcyhjaGlsZC5nZXRSYW5kb21Qb3MoKSlcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyRW5lcmd5KClcbiAgICB0aGlzLmluaXRFbmVyZ3koMywgMylcbiAgICB0aGlzLnBhcmVudC5lbmVyZ3kgPSB0aGlzLmVuZXJneVxuICAgIHRoaXMucHJlZGF0b3JDb3VudCA9IDFcbiAgICB0aGlzLmluaXRQcmVkYXRvcnMoMzUpXG4gICAgY29uc3QgcHJlZCA9IHRoaXMucHJlZGF0b3JzLnRvQXJyYXkoKVswXVxuICAgIHByZWQuc2V0UG9zKHsgeDogMzUsIHk6IDM1IH0pXG4gICAgcHJlZC5zZXRDdXJyRGlyKFswLjIzLCAtcHJlZC52ZWwuZHldKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJQcmVkYXRvclR1dCgpXG4gIH1cblxuICBpbml0VHV0b3JpYWwzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0VHV0b3JpYWxObygzKVxuICAgIHRoaXMuc2NvcmUucmVzZXQoKVxuICAgIHRoaXMuZW5lcmd5LnJlc2V0KClcbiAgICB0aGlzLmRpc3BsYXkuY2xlYXJHYW1lRW5kKClcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KClcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLnBhcmVudC5oaXRzQ2hpbGQoY2hpbGQpXG4gICAgICBjaGlsZC5tb3Zlcyh0aGlzLnBhcmVudC5wb3MpXG4gICAgfVxuICAgIGNvbnN0IHByZWQgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KClbMF1cblxuICAgIHRoaXMuYW5pbWF0aW9uUmVxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXdUdXRvcmlhbClcblxuICAgIHByZWQuc2V0UG9zKHsgeDogMzUsIHk6IDM1IH0pXG4gICAgcHJlZC5zZXRDdXJyRGlyKFswLjIzLCAtMV0pXG5cbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyQ2xpY2tQYXJlbnRUdXQoKVxuICB9XG5cbiAgaW5pdFR1dG9yaWFsNCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFR1dG9yaWFsTm8oNClcbiAgICB0aGlzLnNjb3JlLnJlc2V0KClcbiAgICB0aGlzLmVuZXJneS5tYXggPSA1XG4gICAgdGhpcy5lbmVyZ3kucmVzZXQoKVxuXG4gICAgdGhpcy5kaXNwbGF5LmNsZWFyR2FtZUVuZCgpXG5cbiAgICB0aGlzLnBhcmVudC5kZWxldGVBbGxDaGlsZHJlbigpXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKSkge1xuICAgICAgY2hpbGQuc2V0UG9zKGNoaWxkLmdldFJhbmRvbVBvcygpKVxuICAgIH1cbiAgICBjb25zdCBwcmVkID0gdGhpcy5wcmVkYXRvcnMudG9BcnJheSgpWzBdXG5cbiAgICBwcmVkLnNldFBvcyh7IHg6IDM1LCB5OiAzNSB9KVxuICAgIHByZWQuc2V0Q3VyckRpcihbMC4yMywgLTFdKVxuICAgIHRoaXMud29ybUNvdW50ID0gNVxuICAgIHRoaXMuaW5pdFdvcm1zKDIwLCB7IGR4OiAwLjUsIGR5OiAwLjUgfSlcblxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJXb3JtVHV0KClcbiAgfVxuXG4gIGRlc3Ryb3lDaGlsZChjaGlsZCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlTm9kZShjaGlsZClcbiAgICBpZiAodGhpcy50dXRvcmlhbE5vID4gMTAwIHx8IHRoaXMuY2hpbGRyZW4uc2l6ZSA8IHRoaXMuY2hpbGRDb3VudClcbiAgICAgIHRoaXMuc3Bhd25DaGlsZHJlbigxNy41KVxuICB9XG5cbiAgaW5pdEdhbWUgPSAoKSA9PiB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTW91c2VEb3duLCBmYWxzZSlcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcCwgZmFsc2UpXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uUmVxKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpXG4gIH1cblxuICBoYW5kbGVQcmVzc1NwYWNlID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMikgY29uc29sZS5sb2coJ2dhbWUgc3RhcnQnKVxuICAgIGlmIChlLmtleUNvZGUgIT09IDEzKSByZXR1cm5cbiAgICBpZiAodGhpcy50dXRvcmlhbE5vID09PSAwKSB7XG4gICAgICB0aGlzLmluaXRUdXRvcmlhbDEoKVxuICAgIH0gZWxzZSBpZiAodGhpcy50dXRvcmlhbE5vID09PSAxKSB7XG4gICAgICB0aGlzLmluaXRUdXRvcmlhbDIoKVxuICAgIH0gZWxzZSBpZiAodGhpcy50dXRvcmlhbE5vID09PSAyKSB7XG4gICAgICB0aGlzLmluaXRUdXRvcmlhbDMoKVxuICAgIH0gZWxzZSBpZiAodGhpcy50dXRvcmlhbE5vID09PSAzKSB7XG4gICAgICB0aGlzLmluaXRUdXRvcmlhbDQoKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tQmV0d2VlbiB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmxkIHtcbiAgY29uc3RydWN0b3IoZGlzcGxheSkge1xuICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXlcbiAgICB0aGlzLmNhbnZhcyA9IGRpc3BsYXkud29ybGRcbiAgICB0aGlzLnNpemUgPSB0aGlzLmRpc3BsYXkud29ybGRTaXplXG4gICAgdGhpcy5ib3VuZHMgPSB7IHRvcDogbnVsbCwgcmlnaHQ6IG51bGwsIGJvdHRvbTogbnVsbCwgcmlnaHQ6IG51bGwgfVxuICAgIHRoaXMub2Zmc2V0cyA9IHsgdG9wOiBudWxsLCBsZWZ0OiBudWxsIH1cbiAgfVxuXG4gIHNldEJvdW5kcyhib3VuZHMpIHtcbiAgICB0aGlzLmJvdW5kcyA9IGJvdW5kc1xuICB9XG5cbiAgc2V0T2Zmc2V0cyhvZmZzZXRzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0c1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IHRvcCA9IDAsXG4gICAgICBsZWZ0ID0gMCxcbiAgICAgIGJvdHRvbSA9IHRvcCArIHRoaXMuY2FudmFzLmhlaWdodCxcbiAgICAgIHJpZ2h0ID0gbGVmdCArIHRoaXMuY2FudmFzLndpZHRoXG5cbiAgICByZXR1cm4geyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfVxuICB9XG5cbiAgY2hlY2tPdXRPZkJvdW5kcyA9IChwb3MsIHIpID0+IHtcbiAgICBjb25zdCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9ID0gdGhpcy5ib3VuZHMsXG4gICAgICB7IHgsIHkgfSA9IHBvc1xuXG4gICAgaWYgKHggLSByIDwgbGVmdCkgcmV0dXJuIHRydWVcbiAgICBpZiAoeCArIHIgPiByaWdodCkgcmV0dXJuIHRydWVcbiAgICBpZiAoeSAtIHIgPCB0b3ApIHJldHVybiB0cnVlXG4gICAgaWYgKHkgKyByID4gYm90dG9tKSByZXR1cm4gdHJ1ZVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuY2FudmFzLm9mZnNldFRvcCxcbiAgICAgIGxlZnQgPSB0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0XG4gICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH1cbiAgfVxuXG4gIGdldFJhbmRvbVBvcyA9IChyYWRpdXMpID0+IHtcbiAgICBjb25zdCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9ID0gdGhpcy5ib3VuZHMsXG4gICAgICByID0gcmFkaXVzXG5cbiAgICBjb25zdCB4ID0gZ2V0UmFuZG9tQmV0d2VlbihsZWZ0ICsgciwgcmlnaHQgLSByKSxcbiAgICAgIHkgPSBnZXRSYW5kb21CZXR3ZWVuKHRvcCArIHIsIGJvdHRvbSAtIHIpXG5cbiAgICByZXR1cm4geyB4LCB5IH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IHRoaXMuZ2V0T2Zmc2V0cygpLFxuICAgICAgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKVxuXG4gICAgdGhpcy5zZXRPZmZzZXRzKG9mZnNldHMpXG4gICAgdGhpcy5zZXRCb3VuZHMoYm91bmRzKVxuICB9XG59XG4iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vTW92aW5nT2JqZWN0J1xuXG5jb25zdCByID0gMTAsXG4gIGMgPSAnIzkzNjM0NCcsXG4gIHYgPSB7IGR4OiAyLCBkeTogMiB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWxkIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcG9zLFxuICAgIHJhZGl1cyA9IHIsXG4gICAgd29ybGQsXG4gICAgc3ByaXRlLFxuICAgIHNpemUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSxcbiAgICB2ZWwgPSB2LFxuICAgIGNvbG9yID0gY1xuICApIHtcbiAgICBzdXBlcihwb3MsIHJhZGl1cywgd29ybGQsIHNwcml0ZSwgc2l6ZSwgdmVsLCBjb2xvcilcbiAgICB0aGlzLnNwcml0ZSA9IHNwcml0ZVxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICB0aGlzLm1vdmVzID0gdGhpcy5tb3Zlcy5iaW5kKHRoaXMpXG4gIH1cblxuICBtb3ZlcyhnYW1lKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MsXG4gICAgICBwb3MgPSB7IHg6IHggKyB0aGlzLmN1cnJEaXJbMF0sIHk6IHkgKyB0aGlzLmN1cnJEaXJbMV0gfVxuXG4gICAgaWYgKHRoaXMuY2hlY2tPdXRPZkJvdW5kcyhwb3MpKSB7XG4gICAgICBnYW1lLmRlc3Ryb3lXb3JtKHRoaXMpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRQb3MocG9zKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWM4OTVkMzcxMDc0Y2ZlMmQwMzEyNTc3ZmM3NjM1ZDMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkxNmJmOTE2NGI3MjMyODI0M2Y1N2UzOWIzNDYyZTMzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2ZjJmMTlkNzdiOTllMDA4YjMyZWZmOTExZmMxZjA3ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDNkYzMzYWRlNGVhZDViODdhNjU5YWJjZTMyMzk2ODMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY5ZTYzY2RiNTE2ZmFkZDI1ZTY4ODU1Y2U5NWRiNDc3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MWNmMDhlOWNmY2ZiMzEzNDU0NjA3YTlkOGNmODMxOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWQ5NjNjNDY0YTQyZjFlMzVlOWE5MDNlMTcxZjEwZTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjJlNmQ4ODc0MjI5NWQwZWE5NWNmMTNmZDlhMzg4MjdmLnBuZ1wiOyIsImltcG9ydCBET01EaXNwbGF5IGZyb20gJy4vRGlzcGxheS9ET01EaXNwbGF5LmpzJ1xuaW1wb3J0IEludHJvIGZyb20gJy4vRGlzcGxheS9JbnRyby5qcydcbmltcG9ydCBUdXRvcmlhbCBmcm9tICcuL0Rpc3BsYXkvVHV0b3JpYWwuanMnXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IFR1dG9yaWFsR2FtZSBmcm9tICcuL1R1dG9yaWFsR2FtZSdcblxuY29uc3Qgd2lkdGggPSBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCAvIDEuMiwgMTIwMCksXG4gIGhlaWdodCA9IE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCAvIDEuMiwgNzUwKSxcbiAgZGlzcGxheSA9IG5ldyBET01EaXNwbGF5KHsgd2lkdGgsIGhlaWdodCB9KSxcbiAgZ2FtZSA9IG5ldyBHYW1lKGRpc3BsYXkpXG5cbmRpc3BsYXkucmVuZGVyR2FtZSgpXG5kaXNwbGF5LnJlbmRlclRpdGxlKClcbmRpc3BsYXkucmVuZGVyV29ybGQoKVxuXG5jb25zdCBpbnRyb0Rpc3BsYXkgPSBuZXcgSW50cm8oXG4gIGRpc3BsYXkuZ2FtZSxcbiAgZGlzcGxheS53b3JsZFdyYXBwZXIsXG4gIGRpc3BsYXkud29ybGRTaXplXG4pXG5cbmNvbnN0IHR1dG9yaWFsRGlzcGxheSA9IG5ldyBUdXRvcmlhbChcbiAgZGlzcGxheS5nYW1lLFxuICBkaXNwbGF5LndvcmxkLFxuICBkaXNwbGF5LndvcmxkV3JhcHBlcixcbiAgZGlzcGxheS53b3JsZFNpemUsXG4gIGRpc3BsYXkubGVnZW5kXG4pXG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrVHV0b3JpYWwoKSB7XG4gIGNvbnN0IHR1dG9yaWFsR2FtZSA9IG5ldyBUdXRvcmlhbEdhbWUodHV0b3JpYWxEaXNwbGF5KVxuICBpbnRyb0Rpc3BsYXkuY2xlYXJJbnRybygpXG5cbiAgdHV0b3JpYWxHYW1lLmluaXRUdXRvcmlhbCgpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrU3RhcnQoKSB7XG4gIGludHJvRGlzcGxheS5jbGVhckludHJvKClcbiAgZ2FtZS5pbml0KClcbn1cblxuaW50cm9EaXNwbGF5LnJlbmRlckludHJvKClcbmludHJvRGlzcGxheS5yZW5kZXJUdXRvcmlhbEJ1dHRvbihoYW5kbGVDbGlja1R1dG9yaWFsKVxuaW50cm9EaXNwbGF5LnJlbmRlclN0YXJ0TGluayhoYW5kbGVDbGlja1N0YXJ0KVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKVxufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21CZXR3ZWVuKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pXG4gIG1heCA9IE1hdGguZmxvb3IobWF4KVxuICAvLyBpbmNsdXNpdmVcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuZnVuY3Rpb24gaW5SYW5nZShudW0sIG1pbiwgbWF4KSB7XG4gIHJldHVybiBudW0gPj0gbWluICYmIG51bSA8PSBtYXhcbn1cblxuLy8gRGlkbid0IHVzZVxuZnVuY3Rpb24gY2FsY3VsYXRlSHlwb3RlbnVzZShhLCBiKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYSwgMikgKyBNYXRoLnBvdyhiLCAyKSlcbn1cblxuLy8gRGlkbid0IHVzZVxuZnVuY3Rpb24gZWFzZUxpbmVhcih0LCBiLCBjLCBkKSB7XG4gIHJldHVybiAoYyAqIHQpIC8gZCArIGJcbn1cbmV4cG9ydCB7IGdldFJhbmRvbUludCwgaW5SYW5nZSwgZ2V0UmFuZG9tQmV0d2VlbiB9XG4iXSwic291cmNlUm9vdCI6IiJ9