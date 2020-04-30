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
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\n\nhtml,\nbutton {\n  text-align: center;\n  font-size: 1rem;\n  font-family: 'Schoolbell', sans-serif;\n}\n\nbutton.btn {\n  padding: 1rem;\n  padding: 1rem 2rem;\n  text-align: center;\n  cursor: pointer;\n  letter-spacing: 5px;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  margin: 5px auto;\n  transition-duration: 0.4s;\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.game {\n  margin: 0 auto;\n}\n\n.title h1 {\n  font-size: 24px;\n  margin: 32px;\n  letter-spacing: 5px;\n}\n\n.world-wrapper {\n  margin: 0 auto;\n}\n\n.legend {\n  position: absolute;\n  top: 98px;\n  text-align: left;\n}\n\n.legend > div {\n  margin-left: 10px;\n  margin: 10px;\n}\n\n.legend-text {\n  font-size: 32px;\n  line-height: 32px;\n}\n\ndiv.chain-wrapper {\n  margin: 5px;\n}\n\n.chain-wrapper .image#chain-count {\n  height: 30px;\n  width: 30px;\n  margin-right: 5px;\n}\n\n.chain-wrapper .chain {\n  margin: 0 auto;\n}\n\n#world {\n  border: 2px solid black;\n  background-color: rgb(194, 255, 194);\n}\n\n.heart-full {\n  margin-right: 2px;\n  animation: pulse 1s ease;\n}\n\n.end-wrapper {\n  position: absolute;\n  top: 35%;\n  font-size: 32px;\n  margin: 0 auto;\n}\n\n.game-end {\n  background-color: rgba(255, 255, 255, 0.5);\n  width: max-content;\n  margin: 0 auto;\n  padding: 30px 80px;\n}\n.game-end div {\n  margin-bottom: 5px;\n}\n\n.game-end > .wrapper > .score {\n  color: red;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0.24);\n  }\n\n  25% {\n    transform: scale(0.5);\n  }\n\n  50% {\n    transform: scale(0.75);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n/* .replay-wrapper {\n  position: absolute;\n  top: 50%;\n  font-size: 32px;\n  margin: 0 auto;\n} */\n", ""]);
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
        // const easing = Math.max(1 - this.chainPos * 0.13, 0.1),
        var easing = 1,
            _r = this.radius,
            offset = 2 * (_r + 1) * this.chainPos + (this.parent.radius - _r),
            nextChild = this.nextChild;

        _get(_getPrototypeOf(Child.prototype), "movesWithCursor", this).call(this, pos, easing, offset);

        if (nextChild) nextChild.moves(this.posCache.length ? this.posCache[0] : pos);
      }
    }
  }]);

  return Child;
}(_MovingObject__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/DOMDisplay.js":
/*!***************************!*\
  !*** ./src/DOMDisplay.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DOMDisplay; });
/* harmony import */ var _imgs_count_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/count.png */ "./src/imgs/count.png");
/* harmony import */ var _imgs_heart_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/heart.svg */ "./src/imgs/heart.svg");
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
          legend = _this.createElement('div', 'legend'),
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

    _defineProperty(this, "renderEnergy", function () {
      var energyWrapper = _this.createElement('div', 'energy-wrapper', 'energy-wrapper');

      _this.legend.appendChild(energyWrapper);

      _this.updateEnergyBar(5);
    });

    _defineProperty(this, "renderChain", function () {
      var chainWrapper = _this.createElement('div', 'chain-wrapper');

      var countImg = _this.createImage(_imgs_count_png__WEBPACK_IMPORTED_MODULE_0__["default"], 'image', 'chain-count');

      var chain = _this.createElement('span', 'legend-text', 'chain');

      _this.legend.append(chainWrapper);

      chainWrapper.append(countImg);
      chainWrapper.append(chain);
    });

    _defineProperty(this, "renderScore", function () {
      var score = _this.createElement('div', ['legend-text', 'score'], 'score');

      _this.legend.append(score);
    });

    _defineProperty(this, "renderGameEnd", function (handleClickReplay, score, highScore) {
      var gameEndWrapper = _this.createElement('div', 'end-wrapper');

      var gameEnd = _this.createElement('div', 'game-end');

      gameEndWrapper.style.width = _this.worldSize.width + 4 + 'px';
      _this.gameEnd = gameEnd;
      _this.gameEndWrapper = gameEndWrapper;

      _this.worldWrapper.append(gameEndWrapper);

      gameEndWrapper.append(gameEnd);

      _this.renderGameOverMessage();

      _this.renderEndScore(score, highScore);

      _this.renderReplayButton(handleClickReplay);
    });

    _defineProperty(this, "clearGameEnd", function () {
      _this.worldWrapper.removeChild(_this.gameEndWrapper);
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
  }

  _createClass(DOMDisplay, [{
    key: "updateEnergyBar",
    value: function updateEnergyBar(count) {
      var eW = this.getElement('#energy-wrapper');

      if (eW.childElementCount > count) {
        while (eW.childElementCount > count) {
          eW.removeChild(this.getElement('.heart-full'));
        }
      } else {
        var i = Math.min(count, 5);

        while (eW.childElementCount < i) {
          var heartFull = this.createImage(_imgs_heart_svg__WEBPACK_IMPORTED_MODULE_1__["default"], 'heart-full');
          eW.append(heartFull);
        }
      }
    }
  }]);

  return DOMDisplay;
}();



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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _World_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./World.js */ "./src/World.js");
/* harmony import */ var _Worm_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Worm.js */ "./src/Worm.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var ChildSprite = new Image();
ChildSprite.src = _imgs_child_png__WEBPACK_IMPORTED_MODULE_4__["default"];
var ParentSprite = new Image();
ParentSprite.src = _imgs_parent_png__WEBPACK_IMPORTED_MODULE_5__["default"];
var PredatorSprite = new Image();
PredatorSprite.src = _imgs_predator_png__WEBPACK_IMPORTED_MODULE_6__["default"];
var WormSprite = new Image();
WormSprite.src = _imgs_worm_png__WEBPACK_IMPORTED_MODULE_7__["default"];

var Game = function Game(display) {
  var _this = this;

  var childCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var predatorCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
  var wormCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  _classCallCheck(this, Game);

  _defineProperty(this, "handleMouseMove", function (e) {
    _this.mouse = {
      x: e.clientX,
      y: e.clientY
    };
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

  _defineProperty(this, "spawnWorms", function (r) {
    var size = {
      width: r * 2,
      height: r * 2
    };

    while (_this.worms.size < _this.wormCount) {
      var randomPos = _this.world.getRandomPos(r),
          worm = new _Worm_js__WEBPACK_IMPORTED_MODULE_13__["default"](randomPos, r, _this.world, WormSprite, size);

      worm.setRandomDir();

      _this.worms.appendToTail(worm);
    }
  });

  _defineProperty(this, "initChildren", function (radius) {
    _this.spawnChildren(radius);
  });

  _defineProperty(this, "initPredators", function (radius) {
    _this.spawnPredators(radius);
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

  _defineProperty(this, "initWorms", function (radius) {
    _this.spawnWorms(radius);
  });

  _defineProperty(this, "initChain", function () {
    var chain = new _Chain_js__WEBPACK_IMPORTED_MODULE_1__["default"](_this.display);
    chain.init();
    _this.chain = chain;
  });

  _defineProperty(this, "initWorld", function () {
    var world = new _World_js__WEBPACK_IMPORTED_MODULE_12__["default"](_this.display);
    world.init();
    _this.world = world;
  });

  _defineProperty(this, "initScore", function () {
    var score = new _Score_js__WEBPACK_IMPORTED_MODULE_10__["default"](_this.display);
    score.init();
    _this.score = score;
  });

  _defineProperty(this, "initEnergy", function () {
    var energy = new _Energy_js__WEBPACK_IMPORTED_MODULE_3__["default"](_this.display);
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

    _this.initChain(1);

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
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    _this.checkInRange();

    _this.animationReq = window.requestAnimationFrame(_this.draw);
  });

  _defineProperty(this, "init", function () {
    _this.display.renderGame();

    _this.display.renderTitle();

    _this.display.renderWorld();

    _this.display.renderScore();

    _this.display.renderChain();

    _this.display.renderEnergy();

    window.addEventListener('mousemove', _this.handleMouseMove, false);

    _this.initEnergy();

    _this.initWorld();

    _this.initScore();

    _this.initChain();

    _this.initParent(30);

    _this.initChildren(17.5);

    _this.initPredators(35);

    _this.initWorms(20);

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
};



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

/***/ "./src/imgs/heart.svg":
/*!****************************!*\
  !*** ./src/imgs/heart.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "491750567f1afc2077c46e015ebefea8.svg");

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
/* harmony import */ var _DOMDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMDisplay.js */ "./src/DOMDisplay.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/Game.js");


var game = new _Game__WEBPACK_IMPORTED_MODULE_1__["default"](new _DOMDisplay_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  width: window.innerWidth / 1.2,
  height: window.innerHeight / 1.2
}));
game.init();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRhX3N0cnVjdHVyZXMvZGlzdC9EYXRhU3RydWN0dXJlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9DaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRE9NRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRW5lcmd5LmpzIiwid2VicGFjazovLy8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9Nb3ZpbmdPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJlZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV29ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy9jaGlsZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ3MvY291bnQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWdzL2hlYXJ0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy9wYXJlbnQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWdzL3ByZWRhdG9yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy93b3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJDaGFpbiIsImRpc3BsYXkiLCJjb3VudCIsInNldENvdW50IiwidXBkYXRlQ2hhaW4iLCJNYXRoIiwibWF4IiwibWluIiwidXBkYXRlRWxlbWVudCIsInIiLCJjIiwidiIsImR4IiwiZHkiLCJDaGlsZCIsInBvcyIsInJhZGl1cyIsIndvcmxkIiwic3ByaXRlIiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidmVsIiwiY29sb3IiLCJwYXJlbnQiLCJjaGFpblBvcyIsImNoaWxkIiwibmV4dENoaWxkIiwiaW5kZXBlbmRlbmNlIiwieCIsInkiLCJjdXJyRGlyIiwic2V0UmFuZG9tRGlyIiwiYm91bmNlQmFjayIsInBvc0NhY2hlIiwibW92ZXMiLCJiaW5kIiwiaGl0c1ByZWRhdG9yIiwiZ2FtZSIsImlzSW5kZXBlbmRlbnQiLCJkZXN0cm95Q2hpbGQiLCJjdXJyIiwiZGVsZXRlTGFzdENoaWxkIiwiZWFzaW5nIiwib2Zmc2V0IiwibGVuZ3RoIiwiTW92aW5nT2JqZWN0IiwiRE9NRGlzcGxheSIsInNyYyIsImNsYXNzTmFtZSIsImlkIiwiaW1nIiwiSW1hZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0YWciLCJjb250ZW50IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsIm5hbWUiLCJpbm5lclRleHQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWwiLCJnZXRFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJoZWFkaW5nIiwiYXBwZW5kIiwid29ybGRXcmFwcGVyIiwibGVnZW5kIiwid29ybGRTaXplIiwic3R5bGUiLCJlbmVyZ3lXcmFwcGVyIiwidXBkYXRlRW5lcmd5QmFyIiwiY2hhaW5XcmFwcGVyIiwiY291bnRJbWciLCJjcmVhdGVJbWFnZSIsImNoaWxkQ291bnRJbWciLCJjaGFpbiIsInNjb3JlIiwiaGFuZGxlQ2xpY2tSZXBsYXkiLCJoaWdoU2NvcmUiLCJnYW1lRW5kV3JhcHBlciIsImdhbWVFbmQiLCJyZW5kZXJHYW1lT3Zlck1lc3NhZ2UiLCJyZW5kZXJFbmRTY29yZSIsInJlbmRlclJlcGxheUJ1dHRvbiIsInJlbW92ZUNoaWxkIiwibWVzc2FnZSIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbmRTY29yZVdyYXBwZXIiLCJlbmRTY29yZUxhYmVsIiwiZW5kU2NvcmUiLCJ0b1N0cmluZyIsImJlc3RTY29yZVdyYXBwZXIiLCJiZXN0U2NvcmVMYWJlbCIsImJlc3RTY29yZSIsImVXIiwiY2hpbGRFbGVtZW50Q291bnQiLCJpIiwiaGVhcnRGdWxsIiwiaGVhcnQiLCJFbmVyZ3kiLCJlbmVyZ3kiLCJ1cGRhdGVFbmVyZ3kiLCJDaGlsZFNwcml0ZSIsImNoaWxkSW1nIiwiUGFyZW50U3ByaXRlIiwicGFyZW50SW1hZ2UiLCJQcmVkYXRvclNwcml0ZSIsInByZWRhdG9ySW1hZ2UiLCJXb3JtU3ByaXRlIiwid29ybUltYWdlIiwiR2FtZSIsImNoaWxkQ291bnQiLCJwcmVkYXRvckNvdW50Iiwid29ybUNvdW50IiwiZSIsIm1vdXNlIiwiY2xpZW50WCIsImNsaWVudFkiLCJ3b3JtIiwid29ybXMiLCJkZWxldGVOb2RlIiwiY2hpbGRyZW4iLCJzcGF3bkNoaWxkcmVuIiwidG9BcnJheSIsInByZWRhdG9ycyIsImNoZWNrSW5SYW5nZSIsImhpdHNDaGlsZCIsInByZWRhdG9yIiwiYXZvaWRQcmVkYXRvciIsImNoZWNrQ29sbGlzaW9uV2l0aFByZWRhdG9yIiwiaGl0c1dvcm0iLCJpbmRlcGVuZGVudEMiLCJnZXRDaGlsZENvdW50IiwicmFuZG9tUG9zIiwiZ2V0UmFuZG9tUG9zIiwiYXBwZW5kVG9UYWlsIiwiUHJlZGF0b3IiLCJXb3JtIiwic3Bhd25QcmVkYXRvcnMiLCJpbml0aWFsUG9zIiwiUGFyZW50Iiwic3Bhd25Xb3JtcyIsImluaXQiLCJXb3JsZCIsIlNjb3JlIiwicmVzZXRHYW1lIiwiY2xlYXJHYW1lRW5kIiwicmVzZXQiLCJMaW5rZWRMaXN0IiwidGltZVNpbmNlV29ybSIsImluaXRXb3JsZCIsImluaXRDaGFpbiIsImluaXRQYXJlbnQiLCJpbml0Q2hpbGRyZW4iLCJpbml0UHJlZGF0b3JzIiwiaW5pdFdvcm1zIiwiYW5pbWF0aW9uUmVxIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNhbGN1bGF0ZUhpZ2hTY29yZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyR2FtZUVuZCIsInJlcGxheUdhbWUiLCJ0aW1lc3RhbXAiLCJnYW1lT3ZlciIsInRpbWVQYXNzZWQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwicmVuZGVyR2FtZSIsInJlbmRlclRpdGxlIiwicmVuZGVyV29ybGQiLCJyZW5kZXJTY29yZSIsInJlbmRlckNoYWluIiwicmVuZGVyRW5lcmd5IiwiaGFuZGxlTW91c2VNb3ZlIiwiaW5pdEVuZXJneSIsImluaXRTY29yZSIsInZlbG9jaXR5IiwiZGlyIiwiaW5kZXgiLCJnZXRSYW5kb21JbnQiLCJwb3NzaWJsZURpcmVjdGlvbnMiLCJzZXRDdXJyRGlyIiwiY2hlY2tPdXRPZkJvdW5kcyIsImJvdW5kcyIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImNvbnN0cnVjdG9yIiwic2V0VmVsb2NpdHkiLCJuUG9zIiwiZHJhd0ltYWdlIiwiY2xpcHBlZFgiLCJjbGlwcGVkWSIsIm1vdmVzV2l0aEN1cnNvciIsImhpdHNQYXJlbnQiLCJvYmoiLCJjdXNoaW9uIiwib1BvcyIsIm9SIiwicmFuZ2VYIiwicmFuZ2VZIiwid2l0aGluUmFuZ2UiLCJpblJhbmdlIiwib2Zmc2V0cyIsIm9mZnNldEwiLCJvZmZzZXRUIiwicmVsYXRpdmVYIiwicmVsYXRpdmVZIiwieERpZmYiLCJ5RGlmZiIsInZlbFgiLCJ2ZWxZIiwiY2xpcHBlZFBvcyIsImNsaXBQb3MiLCJzZXRQb3MiLCJzaGlmdCIsInB1c2giLCJzZXRQb3NDYWNoZSIsImN1cnJQcmVkQ29scyIsImRlbGV0ZUZyb21UYWlsIiwic2V0Q2hhaW5Qb3MiLCJzZXROZXh0Q2hpbGQiLCJzZXRJbmRlcGVuZGVuY2UiLCJkZWNyZW1lbnRDb3VudCIsInNldFBhcmVudCIsInNlYXJjaCIsImluY3JlbWVudENvdW50IiwiY2FsY3VsYXRlU2NvcmUiLCJ0YWlsIiwibGFzdENoaWxkIiwiY29sbGlkZWQiLCJjb2xsaWRpbmciLCJpbmNsdWRlcyIsInNsaWNlIiwic2V0Q3VyclByZWRDb2xzIiwiaW5kZXhPZiIsInNwbGljZSIsImRlc3Ryb3lXb3JtIiwiZmlyc3RDaGlsZCIsImhlYWQiLCJzZXRTY29yZSIsInVwZGF0ZVNjb3JlIiwiY2hhaW5Db3VudCIsInNjb3JlVG9BZGQiLCJuZXdTY29yZSIsInNldEhpZ2hTY29yZSIsImdldFJhbmRvbUJldHdlZW4iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwiZ2V0T2Zmc2V0cyIsImdldEJvdW5kcyIsInNldE9mZnNldHMiLCJzZXRCb3VuZHMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJmbG9vciIsInJhbmRvbSIsImNlaWwiLCJudW0iLCJjYWxjdWxhdGVIeXBvdGVudXNlIiwiYSIsImIiLCJzcXJ0IiwicG93IiwiZWFzZUxpbmVhciIsInQiLCJkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtR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b2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNjaG9vbGJlbGwmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU2Nob29sYmVsbCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbi5idG4ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBtYXJnaW46IDVweCBhdXRvO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5nYW1lIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4udGl0bGUgaDEge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbWFyZ2luOiAzMnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG59XFxuXFxuLndvcmxkLXdyYXBwZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5sZWdlbmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA5OHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmxlZ2VuZCA+IGRpdiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmxlZ2VuZC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG5kaXYuY2hhaW4td3JhcHBlciB7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLmNoYWluLXdyYXBwZXIgLmltYWdlI2NoYWluLWNvdW50IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5jaGFpbi13cmFwcGVyIC5jaGFpbiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI3dvcmxkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMjU1LCAxOTQpO1xcbn1cXG5cXG4uaGVhcnQtZnVsbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDJweDtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMXMgZWFzZTtcXG59XFxuXFxuLmVuZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzUlO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5nYW1lLWVuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDMwcHggODBweDtcXG59XFxuLmdhbWUtZW5kIGRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5nYW1lLWVuZCA+IC53cmFwcGVyID4gLnNjb3JlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjQpO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cXG4vKiAucmVwbGF5LXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59ICovXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRhdGFTdHJ1Y3R1cmVzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRhdGFTdHJ1Y3R1cmVzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9zcmMvQmluYXJ5SGVhcC9NYXhCaW5hcnlIZWFwLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9CaW5hcnlIZWFwL01heEJpbmFyeUhlYXAuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXFxcIik7IH0gZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlOyB9IHJldHVybiB2YWx1ZTsgfVxcblxcbnZhciBNYXhCaW5hcnlIZWFwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gIGZ1bmN0aW9uIE1heEJpbmFyeUhlYXAoKSB7XFxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXhCaW5hcnlIZWFwKTtcXG5cXG4gICAgX2NvbnRlbnQuc2V0KHRoaXMsIHtcXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICB2YWx1ZTogdm9pZCAwXFxuICAgIH0pO1xcblxcbiAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2NvbnRlbnQsIFtdKTtcXG4gIH1cXG5cXG4gIF9jcmVhdGVDbGFzcyhNYXhCaW5hcnlIZWFwLCBbe1xcbiAgICBrZXk6IFxcXCJfc3dhcFxcXCIsXFxuICAgIC8vIF9tZXRob2RzIGFyZSBoZWxwZXJzLiBDaGFuZ2UgdG8gcHJpdmF0ZSB3aGVuIHByaXZhdGUgaW5zdGFuY2UgbWV0aG9kcyBhcmUgc3VwcG9ydGVkXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc3dhcChpLCBqKSB7XFxuICAgICAgdmFyIHRlbXAgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV0gPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2pdO1xcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbal0gPSB0ZW1wO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcIl9idWJibGVVcFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYnViYmxlVXAoaSkge1xcbiAgICAgIHZhciBlbGVtZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXTtcXG5cXG4gICAgICB3aGlsZSAoaSA+IDApIHtcXG4gICAgICAgIHZhciBwID0gTWF0aC5mbG9vcigoaSAtIDEpIC8gMiksXFxuICAgICAgICAgICAgcGFyZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtwXTtcXG5cXG4gICAgICAgIGlmIChlbGVtZW50ID4gcGFyZW50KSB7XFxuICAgICAgICAgIHRoaXMuX3N3YXAocCwgaSk7XFxuXFxuICAgICAgICAgIGkgPSBwO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcIl9zaW5rRG93blxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2lua0Rvd24ocCkge1xcbiAgICAgIHZhciBlbGVtZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtwXSxcXG4gICAgICAgICAgbGFzdEluZGV4ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxO1xcblxcbiAgICAgIHdoaWxlIChwIDwgbGFzdEluZGV4KSB7XFxuICAgICAgICB2YXIgciA9IDIgKiBwICsgMixcXG4gICAgICAgICAgICBsID0gciAtIDE7XFxuICAgICAgICB2YXIgc3dhcEluZGV4ID0gbnVsbCxcXG4gICAgICAgICAgICBsZWZ0ID0gdm9pZCAwLFxcbiAgICAgICAgICAgIHJpZ2h0ID0gdm9pZCAwLFxcbiAgICAgICAgICAgIG1pbiA9IGVsZW1lbnQ7XFxuXFxuICAgICAgICBpZiAobCA8PSBsYXN0SW5kZXgpIHtcXG4gICAgICAgICAgbGVmdCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbbF07XFxuICAgICAgICAgIGlmIChsZWZ0ID4gZWxlbWVudCkgc3dhcEluZGV4ID0gbDtcXG4gICAgICAgICAgbWluID0gbGVmdDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmIChyIDw9IGxhc3RJbmRleCkge1xcbiAgICAgICAgICByaWdodCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbcl07XFxuICAgICAgICAgIGlmIChyaWdodCA+IG1pbikgc3dhcEluZGV4ID0gcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmIChzd2FwSW5kZXggPT0gbnVsbCkgYnJlYWs7XFxuXFxuICAgICAgICB0aGlzLl9zd2FwKHAsIHN3YXBJbmRleCk7XFxuXFxuICAgICAgICBwID0gc3dhcEluZGV4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJwcmludE1heEhlYXBcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRNYXhIZWFwKCkge1xcbiAgICAgIGNvbnNvbGUubG9nKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkpO1xcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImluc2VydFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnQoZWxlbWVudCkge1xcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucHVzaChlbGVtZW50KTtcXG5cXG4gICAgICB0aGlzLl9idWJibGVVcChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCAtIDEpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImV4dHJhY3RNYXhcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdE1heCgpIHtcXG4gICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggPD0gMCkgcmV0dXJuIG51bGw7XFxuICAgICAgdmFyIGxhc3RJbmRleCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIC0gMSxcXG4gICAgICAgICAgZmlyc3RJbmRleCA9IDA7XFxuICAgICAgaWYgKGZpcnN0SW5kZXggIT09IGxhc3RJbmRleCkgdGhpcy5fc3dhcChmaXJzdEluZGV4LCBsYXN0SW5kZXgpO1xcblxcbiAgICAgIHZhciByZXN1bHQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnBvcCgpO1xcblxcbiAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCA+IDApIHtcXG4gICAgICAgIHRoaXMuX3NpbmtEb3duKDApO1xcbiAgICAgIH1cXG5cXG4gICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInJlbW92ZVxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoZWxlbWVudCkge1xcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldICE9PSBlbGVtZW50KSBjb250aW51ZTtcXG4gICAgICAgIHZhciBsYXN0SW5kZXggPSB0aGlzLnNpemUgLSAxO1xcblxcbiAgICAgICAgaWYgKGkgPT09IGxhc3RJbmRleCkge1xcbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnBvcCgpO1xcblxcbiAgICAgICAgICBicmVhaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRoaXMuX3N3YXAoaSwgbGFzdEluZGV4KTtcXG5cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucG9wKCk7XFxuXFxuICAgICAgICB0aGlzLl9idWJibGVVcChpKTtcXG5cXG4gICAgICAgIHRoaXMuX3NpbmtEb3duKGkpO1xcblxcbiAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInNpemVcXFwiLFxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGg7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwibWF4XFxcIixcXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgcmV0dXJuIHRoaXMuc2l6ZSA/IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbMF0gOiBudWxsO1xcbiAgICB9XFxuICB9XSk7XFxuXFxuICByZXR1cm4gTWF4QmluYXJ5SGVhcDtcXG59KCk7XFxuXFxudmFyIF9jb250ZW50ID0gbmV3IFdlYWtNYXAoKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IE1heEJpbmFyeUhlYXA7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvQmluYXJ5SGVhcC9NYXhCaW5hcnlIZWFwLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvQmluYXJ5SGVhcC9NaW5CaW5hcnlIZWFwLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9CaW5hcnlIZWFwL01pbkJpbmFyeUhlYXAuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXFxcIik7IH0gZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlOyB9IHJldHVybiB2YWx1ZTsgfVxcblxcbi8vIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9V0NtM1RxU2NCTThcXG4vLyBBbnkgbm9kZSBoYXMgYSB2YWx1ZSBhdCBsZWFzdCBhcyBzbWFsbCBhcyB0aGUgdmFsdWVzIGluIHRoYXQgbm9kZSdzIGNoaWxkcmVuLlxcbi8vIFNvdXJjZTogaHR0cHM6Ly9lbG9xdWVudGphdmFzY3JpcHQubmV0LzFzdF9lZGl0aW9uL2FwcGVuZGl4Mi5odG1sXFxudmFyIE1pbkJpbmFyeUhlYXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgZnVuY3Rpb24gTWluQmluYXJ5SGVhcCgpIHtcXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbkJpbmFyeUhlYXApO1xcblxcbiAgICBfY29udGVudC5zZXQodGhpcywge1xcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgfSk7XFxuXFxuICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfY29udGVudCwgW10pO1xcbiAgfVxcblxcbiAgX2NyZWF0ZUNsYXNzKE1pbkJpbmFyeUhlYXAsIFt7XFxuICAgIGtleTogXFxcIl9zd2FwXFxcIixcXG4gICAgLy8gX21ldGhvZHMgYXJlIGhlbHBlcnMuIENoYW5nZSB0byBwcml2YXRlIHdoZW4gcHJpdmF0ZSBpbnN0YW5jZSBtZXRob2RzIGFyZSBzdXBwb3J0ZWRcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zd2FwKGksIGopIHtcXG4gICAgICB2YXIgdGVtcCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV07XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXSA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbal07XFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtqXSA9IHRlbXA7XFxuICAgIH1cXG4gICAgLyogYnViYmxlVXAgXFxuICAgICAgMS4gQ29tcGFyZSBpdGVtIHRvIHBhcmVudCBhbmQgY2hlY2sgaWYgaXQncyBsZXNzIHRoYW4gcGFyZW50LiBcXG4gICAgICAyLiBJZiBpdCBpcyBsZXNzIHRoYW4gcGFyZW50LCBzd2FwIGl0LiBcXG4gICAgICAzLiBOb3csIGNvbXBhcmUgdG8gdGhlIG5ldyBwYXJlbnQgYW5kIGtlZXAgc3dhcHBpbmcgdW50aWwgaXQgZWl0aGVyIHJlYWNoZXMgdGhlIHRvcCBvZiB0aGUgaGVhcCBvciBpdCBpcyA+PSBwYXJlbnQuIFxcbiAgICAqL1xcblxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJfYnViYmxlVXBcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2J1YmJsZVVwKGkpIHtcXG4gICAgICB2YXIgZWxlbWVudCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV07XFxuICAgICAgLyogXFxuICAgICAgICBpbmRleGluZyBmcm9tIDBcXG4gICAgICAgIHAgaXMgdGhlIGluZGV4IG9mIHRoZSBwYXJlbnRcXG4gICAgICAgIGkgaXMgdGhlIGluZGV4IG9mIGVpdGhlciBsZWZ0IG9yIHJpZ2h0IGNoaWxkXFxuICAgICAgICBsIGlzIGluZGV4IG9mIGxlZnQgY2hpbGRcXG4gICAgICAgIHIgaXMgdGhlIGluZGV4IG9mIHRoZSByaWdodCBjaGlsZFxcbiAgICAgICAgIGwgPSAycCArIDFcXG4gICAgICAgIHIgPSAycCArIDJcXG4gICAgICAgIHAgPSBNYXRoLmZsb29yKChpLTEpLzIpXFxuICAgICAgICovXFxuXFxuXFxuICAgICAgd2hpbGUgKGkgPiAwKSB7XFxuICAgICAgICB2YXIgcCA9IE1hdGguZmxvb3IoKGkgLSAxKSAvIDIpLFxcbiAgICAgICAgICAgIHBhcmVudCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbcF07XFxuXFxuICAgICAgICBpZiAoZWxlbWVudCA8IHBhcmVudCkge1xcbiAgICAgICAgICB0aGlzLl9zd2FwKHAsIGkpOyAvLyBtYWtlIHN1cmUgdG8gY2hhbmdlIGluZGV4IHRvIHRoYXQgb2YgcGFyZW50IGFmdGVyIHN3YXBwaW5nXFxuXFxuXFxuICAgICAgICAgIGkgPSBwO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcIl9zaW5rRG93blxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2lua0Rvd24ocCkge1xcbiAgICAgIHZhciBlbGVtZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtwXSxcXG4gICAgICAgICAgbGFzdEluZGV4ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxO1xcblxcbiAgICAgIHdoaWxlIChwIDwgbGFzdEluZGV4KSB7XFxuICAgICAgICAvLyBJbmZvIGluIGdldHRpbmcgaW5kZXggaW4gYnViYmxlVXBcXG4gICAgICAgIHZhciByID0gMiAqIHAgKyAyLFxcbiAgICAgICAgICAgIGwgPSByIC0gMTsgLy9PciAyICogcCArIDFcXG5cXG4gICAgICAgIHZhciBzd2FwSW5kZXggPSBudWxsLFxcbiAgICAgICAgICAgIGxlZnQgPSB2b2lkIDAsXFxuICAgICAgICAgICAgcmlnaHQgPSB2b2lkIDAsXFxuICAgICAgICAgICAgbWluID0gZWxlbWVudDsgLy9zdGFydCBvdXQgYXNzdW1pbmcgdGhlIG1pbiBiZXR3ZWVuIGxlZnQsIHJpZ2h0LCBlbGVtZW50IGlzIHRoZSBlbGVtZW50XFxuICAgICAgICAvLyBpZiBlbGVtZW50IGhhcyBsZWZ0IGNoaWxkLCBjb21wYXJlXFxuICAgICAgICAvLyBpZiBsZWZ0IGNoaWxkIDwgZWxlbWVudCwgc2V0IHN3YXBJbmRleCB0byB0aGUgbGVmdCBpbmRleCAobCkgYW5kIG1pbiB0byBsZWZ0XFxuXFxuICAgICAgICBpZiAobCA8PSBsYXN0SW5kZXgpIHtcXG4gICAgICAgICAgbGVmdCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbbF07XFxuICAgICAgICAgIGlmIChsZWZ0IDwgZWxlbWVudCkgc3dhcEluZGV4ID0gbDtcXG4gICAgICAgICAgbWluID0gbGVmdDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmIChyIDw9IGxhc3RJbmRleCkge1xcbiAgICAgICAgICByaWdodCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbcl07IC8vIGNvbXBhcmUgdGhlIHJpZ2h0IHRvIHRoZSBtaW4gc28gZmFyIHRvIG1ha2Ugc3VyZSB0aGUgbWluIG9mIHRoZSB0aHJlZSBpdGVtcyBnZXRzIGJ1YmJsZWQgdXAgd2hpbGUgdGhlIHBhcmVudCBnZXRzIHN1bmtcXG5cXG4gICAgICAgICAgaWYgKHJpZ2h0IDwgbWluKSBzd2FwSW5kZXggPSByO1xcbiAgICAgICAgfSAvLyBwYXJlbnQgaXMgc21hbGxlciB0aGFuIGJvdGggbGVmdCBhbmQgcmlnaHQgY2hpbGQgc28gYnJlYWtcXG5cXG5cXG4gICAgICAgIGlmIChzd2FwSW5kZXggPT0gbnVsbCkgYnJlYWs7XFxuXFxuICAgICAgICB0aGlzLl9zd2FwKHAsIHN3YXBJbmRleCk7IC8vIHNldCB0aGUgcGFyZW50IGluZGV4IHRvIHRoZSBzd2FwIGluZGV4IHNvIGl0IHdpbGwgY29udGludWUgdG8gc2luayBkb3duXFxuXFxuXFxuICAgICAgICBwID0gc3dhcEluZGV4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJwcmludE1pbkhlYXBcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRNaW5IZWFwKCkge1xcbiAgICAgIGNvbnNvbGUubG9nKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkpO1xcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpO1xcbiAgICB9XFxuICAgIC8qIGluc2VydFxcbiAgICAgIDEuIGluc2VydCBuZXcgaXRlbSBpbnRvIHRoaXMuI2NvbnRlbnRcXG4gICAgICAyLiBidWJibGUgaXQgdXAgXFxuICAgICAgKi9cXG5cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiaW5zZXJ0XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydChlbGVtZW50KSB7XFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wdXNoKGVsZW1lbnQpO1xcblxcbiAgICAgIHRoaXMuX2J1YmJsZVVwKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIC0gMSk7XFxuICAgIH1cXG4gICAgLyogZXh0cmFjdE1pblxcbiAgICAgIDEuIHN3YXAgZmlyc3QgYW5kIGxhc3QgaXRlbXMgaWYgdGhpcy4jY29udGVudC5sZW5ndGggPiAxIChvciBmaXJzdCAhPT0gbGFzdClcXG4gICAgICAyLiBwb3Agb3V0IGxhc3QgaXRlbSBvZiBhcnJheSBhbmQgc2F2ZSBpdCBpbiByZXN1bHRcXG4gICAgICAzLiBJZiBsZW5ndGggaXMgbW9yZSB0aGFuIG9uZSwgYnViYmxlIHRoZSBmaXJzdCBpdGVtIGRvd25cXG4gICAgICA0LiBSZXR1cm4gdGhlIHJlc3VsdCB0aGF0IHdhcyBzYXZlZCBcXG4gICAgICAqL1xcblxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJleHRyYWN0TWluXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RNaW4oKSB7XFxuICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIDw9IDApIHJldHVybiBudWxsOyAvL3JldHVybiBudWxsIGlmIGFycmF5IGlzIGVtcHR5XFxuXFxuICAgICAgdmFyIGxhc3RJbmRleCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIC0gMSxcXG4gICAgICAgICAgZmlyc3RJbmRleCA9IDA7XFxuICAgICAgaWYgKGZpcnN0SW5kZXggIT09IGxhc3RJbmRleCkgdGhpcy5fc3dhcChmaXJzdEluZGV4LCBsYXN0SW5kZXgpO1xcblxcbiAgICAgIHZhciByZXN1bHQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnBvcCgpO1xcblxcbiAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCA+IDApIHtcXG4gICAgICAgIHRoaXMuX3NpbmtEb3duKDApO1xcbiAgICAgIH1cXG5cXG4gICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInJlbW92ZVxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoZWxlbWVudCkge1xcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcXG4gICAgICAgIC8vIGlmIGN1cnIgaXRlbSBkb2Vzbid0IG1hdGNoIHRoZSBlbGVtZW50IHRvIHJlbW92ZSwgY29udGludWUgc2VhcmNoaW5nXFxuICAgICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXSAhPT0gZWxlbWVudCkgY29udGludWU7IC8vIGlmIGl0IGRvZXMgbWF0Y2hcXG5cXG4gICAgICAgIHZhciBsYXN0SW5kZXggPSB0aGlzLnNpemUgLSAxOyAvLyBpZiBpdCdzIHRoZSBsYXN0IGl0ZW0sIHBvcCBpdCBhbmQgYnJlYWtcXG5cXG4gICAgICAgIGlmIChpID09PSBsYXN0SW5kZXgpIHtcXG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wb3AoKTtcXG5cXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgICB9IC8vIGlmIGl0J3Mgbm90IHRoZSBsYXN0IGl0ZW1cXG4gICAgICAgIC8vICAxLiBzd2FwIGl0IHdpdGggdGhlIGxhc3QgaXRlbVxcbiAgICAgICAgLy8gIDIuIHBvcCB0aGUgc3dhcHBlZCBsYXN0IGl0ZW1cXG4gICAgICAgIC8vICAzLiBUaGVuIGNhbGwgYnViYmxlVXAgYW5kIHNpbmtEb3duLlxcblxcblxcbiAgICAgICAgdGhpcy5fc3dhcChpLCBsYXN0SW5kZXgpO1xcblxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wb3AoKTtcXG5cXG4gICAgICAgIHRoaXMuX2J1YmJsZVVwKGkpO1xcblxcbiAgICAgICAgdGhpcy5fc2lua0Rvd24oaSk7XFxuXFxuICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwic2l6ZVxcXCIsXFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aDtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJtaW5cXFwiLFxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICByZXR1cm4gdGhpcy5zaXplID8gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVswXSA6IG51bGw7XFxuICAgIH1cXG4gIH1dKTtcXG5cXG4gIHJldHVybiBNaW5CaW5hcnlIZWFwO1xcbn0oKTtcXG5cXG52YXIgX2NvbnRlbnQgPSBuZXcgV2Vha01hcCgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gTWluQmluYXJ5SGVhcDtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9CaW5hcnlIZWFwL01pbkJpbmFyeUhlYXAuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9CaW5hcnlIZWFwL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvQmluYXJ5SGVhcC9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV2YWwoXCJ2YXIgTWluQmluYXJ5SGVhcCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTWluQmluYXJ5SGVhcCAqLyBcXFwiLi9zcmMvQmluYXJ5SGVhcC9NaW5CaW5hcnlIZWFwLmpzXFxcIik7XFxuXFxudmFyIE1heEJpbmFyeUhlYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL01heEJpbmFyeUhlYXAgKi8gXFxcIi4vc3JjL0JpbmFyeUhlYXAvTWF4QmluYXJ5SGVhcC5qc1xcXCIpO1xcblxcbm1vZHVsZS5leHBvcnRzID0ge1xcbiAgTWluQmluYXJ5SGVhcDogTWluQmluYXJ5SGVhcCxcXG4gIE1heEJpbmFyeUhlYXA6IE1heEJpbmFyeUhlYXBcXG59O1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0JpbmFyeUhlYXAvaW5kZXguanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9CaW5hcnlTZWFyY2hUcmVlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvQmluYXJ5U2VhcmNoVHJlZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXFxcIik7IH0gZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlOyB9IHJldHVybiB2YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbnZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQmluYXJ5VHJlZVRyYXZlcnNhbCAqLyBcXFwiLi9zcmMvQmluYXJ5VHJlZVRyYXZlcnNhbC5qc1xcXCIpLFxcbiAgICBCRlMgPSBfcmVxdWlyZS5CRlMsXFxuICAgIERGU0l0ZXJhdGl2ZSA9IF9yZXF1aXJlLkRGU0l0ZXJhdGl2ZTtcXG5cXG52YXIgQmluYXJ5U2VhcmNoVHJlZSA9IGZ1bmN0aW9uICgpIHtcXG4gIHZhciBmaW5kTWluTm9kZSA9IGZ1bmN0aW9uIGZpbmRNaW5Ob2RlKG5vZGUpIHtcXG4gICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCkgcmV0dXJuIG5vZGU7ZWxzZSByZXR1cm4gZmluZE1pbk5vZGUobm9kZS5sZWZ0KTtcXG4gIH07XFxuXFxuICB2YXIgVHJlZU5vZGUgPSBmdW5jdGlvbiBUcmVlTm9kZSh2YWwpIHtcXG4gICAgdmFyIGxlZnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XFxuICAgIHZhciByaWdodCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcXG5cXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyZWVOb2RlKTtcXG5cXG4gICAgdGhpcy52YWwgPSB2YWw7XFxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XFxuICAgIHRoaXMucmlnaHQgPSByaWdodDtcXG4gIH07XFxuXFxuICB2YXIgQmluYXJ5U2VhcmNoVHJlZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICAgIGZ1bmN0aW9uIEJpbmFyeVNlYXJjaFRyZWUoKSB7XFxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJpbmFyeVNlYXJjaFRyZWUpO1xcblxcbiAgICAgIF9yb290LnNldCh0aGlzLCB7XFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgICB9KTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3Jvb3QsIG51bGwpO1xcbiAgICB9XFxuXFxuICAgIF9jcmVhdGVDbGFzcyhCaW5hcnlTZWFyY2hUcmVlLCBbe1xcbiAgICAgIGtleTogXFxcImluc2VydFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydCh2YWwpIHtcXG4gICAgICAgIHZhciByZWN1cnNpdmVJbnNlcnROb2RlID0gZnVuY3Rpb24gcmVjdXJzaXZlSW5zZXJ0Tm9kZShub2RlLCBuZXdOb2RlKSB7XFxuICAgICAgICAgIGlmIChuZXdOb2RlLnZhbCA8IG5vZGUudmFsKSB7XFxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCkgbm9kZS5sZWZ0ID0gbmV3Tm9kZTtlbHNlIHJlY3Vyc2l2ZUluc2VydE5vZGUobm9kZS5sZWZ0LCBuZXdOb2RlKTtcXG4gICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkgbm9kZS5yaWdodCA9IG5ld05vZGU7ZWxzZSByZWN1cnNpdmVJbnNlcnROb2RlKG5vZGUucmlnaHQsIG5ld05vZGUpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9O1xcblxcbiAgICAgICAgdmFyIG5ld05vZGUgPSBuZXcgVHJlZU5vZGUodmFsKTtcXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpID09PSBudWxsKSBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3Jvb3QsIG5ld05vZGUpO2Vsc2UgcmVjdXJzaXZlSW5zZXJ0Tm9kZShfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpLCBuZXdOb2RlKTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJyZW1vdmVcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUodmFsKSB7XFxuICAgICAgICB2YXIgcmVtb3ZlTm9kZSA9IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSwgdmFsKSB7XFxuICAgICAgICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm4gbnVsbDtcXG5cXG4gICAgICAgICAgaWYgKHZhbCA8IG5vZGUudmFsKSB7XFxuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gcmVtb3ZlTm9kZShub2RlLmxlZnQsIHZhbCk7XFxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgaWYgKHZhbCA+IG5vZGUudmFsKSB7XFxuICAgICAgICAgICAgbm9kZS5yaWdodCA9IHJlbW92ZU5vZGUobm9kZS5yaWdodCwgdmFsKTtcXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcXG4gICAgICAgICAgfSAvLyBJZiB2YWwgbWF0Y2hlcyBub2RlLnZhbFxcblxcblxcbiAgICAgICAgICBpZiAodmFsID09PSBub2RlLnZhbCkge1xcbiAgICAgICAgICAgIC8vIGlmIG5vZGUgdG8gZGVsZXRlIGRvZXNuJ3QgaGF2ZSBhbnkgY2hpbGRyZW5cXG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcXG4gICAgICAgICAgICAgIG5vZGUgPSBudWxsO1xcbiAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XFxuICAgICAgICAgICAgfSAvLyBpZiBub2RlIHRvIGRlbGV0ZSBoYXMgb25lIHJpZ2h0IGNoaWxkXFxuXFxuXFxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCkge1xcbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucmlnaHQ7XFxuICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcXG4gICAgICAgICAgICB9IC8vIGlmIG5vZGUgdG8gZGVsZXRlIGhhcyBvbmUgbGVmdCBjaGlsZFxcblxcblxcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0ID09PSBudWxsKSB7XFxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xcbiAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XFxuICAgICAgICAgICAgfSAvLyBEZWxldGluZyBub2RlIHdpdGggdHdvIGNoaWxkcmVuXFxuICAgICAgICAgICAgLy8gZmluZCBtaW4gbm9kZSBpbiByaWdodCBzdWJ0cmVlLiBUaGlzIHdpbGwgYmUgYSB0ZXJtaW5hbCBub2RlXFxuICAgICAgICAgICAgLy8gdHJhdmVyc2UgZG93biByaWdodCBzdWJ0cmVlIGFuZCBjaGFuZ2UgdGhlIG5vZGUudmFsIHRvIHRoZSBtaW4gbm9kZSB2YWxcXG4gICAgICAgICAgICAvLyBUaGVuIGNhbGwgcmVtb3ZlTm9kZSBvbiB0aGUgcmlnaHQgc3VidHJlZSB3aXRoIHRoZSBtaW4ubm9kZSB2YWwgdG8gZGVsZXRlIHRoZSB0ZXJtaW5hbCBub2RlXFxuXFxuXFxuICAgICAgICAgICAgdmFyIHN1YiA9IGZpbmRNaW5Ob2RlKG5vZGUucmlnaHQpO1xcbiAgICAgICAgICAgIG5vZGUudmFsID0gc3ViLnZhbDtcXG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gcmVtb3ZlTm9kZShub2RlLnJpZ2h0LCBzdWIudmFsKTtcXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfTtcXG5cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfcm9vdCwgcmVtb3ZlTm9kZShfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpLCB2YWwpKTtcXG4gICAgICB9IC8vIHNlYXJjaGVzIHRyZWUgZm9yIHNwZWNpZmllZCB2YWwgYW5kIHJldHVybnMgdGhlIG5vZGUgaWYgZm91bmQsIG51bGwgb3RoZXJ3aXNlXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJzZWFyY2hcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2godmFsKSB7XFxuICAgICAgICB2YXIgcmVjdXJzaXZlU2VhcmNoID0gZnVuY3Rpb24gcmVjdXJzaXZlU2VhcmNoKG5vZGUsIHZhbCkge1xcbiAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XFxuICAgICAgICAgIGlmICh2YWwgPCBub2RlLnZhbCkgcmV0dXJuIHJlY3Vyc2l2ZVNlYXJjaChub2RlLmxlZnQsIHZhbCk7XFxuICAgICAgICAgIGlmICh2YWwgPiBub2RlLnZhbCkgcmV0dXJuIHJlY3Vyc2l2ZVNlYXJjaChub2RlLnJpZ2h0LCB2YWwpO1xcbiAgICAgICAgICBpZiAodmFsID09PSBub2RlLnZhbCkgcmV0dXJuIG5vZGU7XFxuICAgICAgICB9O1xcblxcbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVNlYXJjaChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpLCB2YWwpO1xcbiAgICAgIH0gLy8gdHJlZSB0cmF2ZXJzYWxzXFxuICAgICAgLy8gcmV0dXJucyBhcnJheSBvZiB2YWxzXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmludEluT3JkZXJcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludEluT3JkZXIoKSB7XFxuICAgICAgICB2YXIgcmVzID0gREZTSXRlcmF0aXZlLmluT3JkZXIoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSk7XFxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xcbiAgICAgICAgcmV0dXJuIHJlcztcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmludFByZU9yZGVyXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRQcmVPcmRlcigpIHtcXG4gICAgICAgIHZhciByZXMgPSBERlNJdGVyYXRpdmUucHJlT3JkZXIoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSk7XFxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xcbiAgICAgICAgcmV0dXJuIHJlcztcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmludFBvc3RPcmRlclxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50UG9zdE9yZGVyKCkge1xcbiAgICAgICAgdmFyIHJlcyA9IERGU0l0ZXJhdGl2ZS5wb3N0T3JkZXIoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSk7XFxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xcbiAgICAgICAgcmV0dXJuIHJlcztcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmludExldmVsT3JkZXJcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludExldmVsT3JkZXIoKSB7XFxuICAgICAgICB2YXIgcmVzID0gQkZTKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCkpO1xcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcXG4gICAgICAgIHJldHVybiByZXM7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicm9vdFxcXCIsXFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KTtcXG4gICAgICB9XFxuICAgIH1dKTtcXG5cXG4gICAgcmV0dXJuIEJpbmFyeVNlYXJjaFRyZWU7XFxuICB9KCk7XFxuXFxuICB2YXIgX3Jvb3QgPSBuZXcgV2Vha01hcCgpO1xcblxcbiAgcmV0dXJuIEJpbmFyeVNlYXJjaFRyZWU7XFxufSgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gQmluYXJ5U2VhcmNoVHJlZTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9CaW5hcnlTZWFyY2hUcmVlLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvQmluYXJ5VHJlZVRyYXZlcnNhbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0JpbmFyeVRyZWVUcmF2ZXJzYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5ldmFsKFwidmFyIFN0YWNrID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9TdGFjayAqLyBcXFwiLi9zcmMvU3RhY2suanNcXFwiKTtcXG5cXG52YXIgUXVldWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1F1ZXVlICovIFxcXCIuL3NyYy9RdWV1ZS5qc1xcXCIpO1xcblxcbnZhciBCRlMgPSBmdW5jdGlvbiBCRlMocm9vdCkge1xcbiAgdmFyIHJlcyA9IFtdLFxcbiAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKCk7XFxuICBxdWV1ZS5lbnF1ZXVlKHJvb3QpO1xcblxcbiAgd2hpbGUgKCFxdWV1ZS5pc0VtcHR5KCkpIHtcXG4gICAgdmFyIG5vZGUgPSBxdWV1ZS5kZXF1ZXVlKCk7XFxuICAgIHJlcy5wdXNoKG5vZGUudmFsKTtcXG4gICAgaWYgKG5vZGUubGVmdCkgcXVldWUuZW5xdWV1ZShub2RlLmxlZnQpO1xcbiAgICBpZiAobm9kZS5yaWdodCkgcXVldWUuZW5xdWV1ZShub2RlLnJpZ2h0KTtcXG4gIH1cXG5cXG4gIHJldHVybiByZXM7XFxufTtcXG5cXG52YXIgREZTUmVjdXJzaXZlID0ge1xcbiAgaW5PcmRlcjogZnVuY3Rpb24gaW5PcmRlcihyb290KSB7XFxuICAgIHZhciByZXMgPSBbXTtcXG5cXG4gICAgZnVuY3Rpb24gcmVjdXJzZShub2RlKSB7XFxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcXG4gICAgICAgIHJlY3Vyc2Uobm9kZS5sZWZ0KTtcXG4gICAgICAgIHJlcy5wdXNoKG5vZGUudmFsKTtcXG4gICAgICAgIHJlY3Vyc2Uobm9kZS5yaWdodCk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJlY3Vyc2Uocm9vdCk7XFxuICAgIHJldHVybiByZXM7XFxuICB9LFxcbiAgcHJlT3JkZXI6IGZ1bmN0aW9uIHByZU9yZGVyKHJvb3QpIHtcXG4gICAgdmFyIHJlcyA9IFtdO1xcblxcbiAgICBmdW5jdGlvbiByZWN1cnNlKG5vZGUpIHtcXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xcbiAgICAgICAgcmVzLnB1c2gobm9kZS52YWwpO1xcbiAgICAgICAgcmVjdXJzZShub2RlLmxlZnQpO1xcbiAgICAgICAgcmVjdXJzZShub2RlLnJpZ2h0KTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgcmVjdXJzZShyb290KTtcXG4gICAgcmV0dXJuIHJlcztcXG4gIH0sXFxuICBwb3N0T3JkZXI6IGZ1bmN0aW9uIHBvc3RPcmRlcihyb290KSB7XFxuICAgIHZhciByZXMgPSBbXTtcXG5cXG4gICAgZnVuY3Rpb24gcmVjdXJzZShub2RlKSB7XFxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcXG4gICAgICAgIHJlY3Vyc2Uobm9kZS5sZWZ0KTtcXG4gICAgICAgIHJlY3Vyc2Uobm9kZS5yaWdodCk7XFxuICAgICAgICByZXMucHVzaChub2RlLnZhbCk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJlY3Vyc2Uocm9vdCk7XFxuICAgIHJldHVybiByZXM7XFxuICB9XFxufTtcXG52YXIgREZTSXRlcmF0aXZlID0ge1xcbiAgaW5PcmRlcjogZnVuY3Rpb24gaW5PcmRlcihyb290KSB7XFxuICAgIHZhciByZXMgPSBbXSxcXG4gICAgICAgIHN0YWNrID0gbmV3IFN0YWNrKCk7XFxuICAgIHZhciBjdXJyID0gcm9vdDtcXG5cXG4gICAgd2hpbGUgKCFzdGFjay5pc0VtcHR5KCkgfHwgY3VyciAhPT0gbnVsbCkge1xcbiAgICAgIGlmIChjdXJyICE9PSBudWxsKSB7XFxuICAgICAgICBzdGFjay5wdXNoKGN1cnIpO1xcbiAgICAgICAgY3VyciA9IGN1cnIubGVmdDtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgY3VyciA9IHN0YWNrLnBvcCgpO1xcbiAgICAgICAgcmVzLnB1c2goY3Vyci52YWwpO1xcbiAgICAgICAgY3VyciA9IGN1cnIucmlnaHQ7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJldHVybiByZXM7XFxuICB9LFxcbiAgcHJlT3JkZXI6IGZ1bmN0aW9uIHByZU9yZGVyKHJvb3QpIHtcXG4gICAgdmFyIHJlcyA9IFtdLFxcbiAgICAgICAgc3RhY2sgPSBuZXcgU3RhY2soKTtcXG4gICAgdmFyIGN1cnI7XFxuICAgIHN0YWNrLnB1c2gocm9vdCk7XFxuXFxuICAgIHdoaWxlICghc3RhY2suaXNFbXB0eSgpKSB7XFxuICAgICAgY3VyciA9IHN0YWNrLnBvcCgpO1xcbiAgICAgIHJlcy5wdXNoKGN1cnIudmFsKTtcXG4gICAgICBpZiAoY3Vyci5yaWdodCAhPT0gbnVsbCkgc3RhY2sucHVzaChjdXJyLnJpZ2h0KTtcXG4gICAgICBpZiAoY3Vyci5sZWZ0ICE9PSBudWxsKSBzdGFjay5wdXNoKGN1cnIubGVmdCk7XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHJlcztcXG4gIH0sXFxuICAvLyBJdGVyYXRpdmUgcG9zdCBvcmRlciB1c2luZyB0d28gc3RhY2tzXFxuICBwb3N0T3JkZXI6IGZ1bmN0aW9uIHBvc3RPcmRlcihyb290KSB7XFxuICAgIHZhciByZXMgPSBbXSxcXG4gICAgICAgIHN0YWNrMSA9IG5ldyBTdGFjaygpLFxcbiAgICAgICAgc3RhY2syID0gbmV3IFN0YWNrKCk7XFxuICAgIHZhciBjdXJyO1xcbiAgICBzdGFjazEucHVzaChyb290KTtcXG5cXG4gICAgd2hpbGUgKCFzdGFjazEuaXNFbXB0eSgpKSB7XFxuICAgICAgY3VyciA9IHN0YWNrMS5wb3AoKTtcXG4gICAgICBzdGFjazIucHVzaChjdXJyKTtcXG4gICAgICBpZiAoY3Vyci5sZWZ0ICE9IG51bGwpIHN0YWNrMS5wdXNoKGN1cnIubGVmdCk7XFxuICAgICAgaWYgKGN1cnIucmlnaHQgIT0gbnVsbCkgc3RhY2sxLnB1c2goY3Vyci5yaWdodCk7XFxuICAgIH1cXG5cXG4gICAgd2hpbGUgKCFzdGFjazIuaXNFbXB0eSgpKSB7XFxuICAgICAgY3VyciA9IHN0YWNrMi5wb3AoKTtcXG4gICAgICByZXMucHVzaChjdXJyLnZhbCk7XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHJlcztcXG4gIH1cXG59O1xcbm1vZHVsZS5leHBvcnRzID0ge1xcbiAgQkZTOiBCRlMsXFxuICBERlNJdGVyYXRpdmU6IERGU0l0ZXJhdGl2ZSxcXG4gIERGU1JlY3Vyc2l2ZTogREZTUmVjdXJzaXZlXFxufTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9CaW5hcnlUcmVlVHJhdmVyc2FsLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvR3JhcGguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvR3JhcGguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXZhbChcImZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XFxuXFxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXFxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cXFwiKTsgfVxcblxcbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFxcXCJ1bmRlZmluZWRcXFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcXFwicmV0dXJuXFxcIl0gIT0gbnVsbCkgX2lbXFxcInJldHVyblxcXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxcblxcbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFxcXCJ1bmRlZmluZWRcXFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyB0aHJvdyBfZTI7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxcXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXFxcIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMykgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTM7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcXFwicmV0dXJuXFxcIl0gIT0gbnVsbCkgaXRbXFxcInJldHVyblxcXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cXG5cXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFxcXCJzdHJpbmdcXFwiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXFxcIk9iamVjdFxcXCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFxcXCJNYXBcXFwiIHx8IG4gPT09IFxcXCJTZXRcXFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFxcXCJBcmd1bWVudHNcXFwiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxcblxcbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcXFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XFxuXFxudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9HcmFwaFRyYXZlcnNhbCAqLyBcXFwiLi9zcmMvR3JhcGhUcmF2ZXJzYWwuanNcXFwiKSxcXG4gICAgX0JGUyA9IF9yZXF1aXJlLkJGUyxcXG4gICAgREZTUmVjdXJzaXZlID0gX3JlcXVpcmUuREZTUmVjdXJzaXZlO1xcblxcbnZhciBHcmFwaCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICBmdW5jdGlvbiBHcmFwaCgpIHtcXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyYXBoKTtcXG5cXG4gICAgX3ZlcnRpY2VzLnNldCh0aGlzLCB7XFxuICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICB9KTtcXG5cXG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF92ZXJ0aWNlcywgbmV3IE1hcCgpKTtcXG4gIH1cXG5cXG4gIF9jcmVhdGVDbGFzcyhHcmFwaCwgW3tcXG4gICAga2V5OiBcXFwiYWRkVmVydGV4XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFZlcnRleCh2YWwpIHtcXG4gICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKHZhbCkpIHRocm93IFxcXCJ2ZXJ0ZXggd2l0aCB2YWx1ZSBcXFwiLmNvbmNhdCh2YWwsIFxcXCIgYWxyZWFkeSBleGlzdHMuXFxcIik7XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuc2V0KHZhbCwgbmV3IFNldCgpKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJhZGRFZGdlXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEVkZ2UodlZhbCwgZVZhbCkge1xcbiAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKHZWYWwpKSB0aHJvdyBcXFwidmVydGV4IHdpdGggdmFsdWUgXFxcIi5jb25jYXQodlZhbCwgXFxcIiBkb2Vzbid0IGV4aXN0LlxcXCIpO1xcbiAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKGVWYWwpKSB0aHJvdyBcXFwiZWRnZSB3aXRoIHZhbHVlIFxcXCIuY29uY2F0KGVWYWwsIFxcXCIgZG9lc24ndCBleGlzdC5cXFwiKTtcXG5cXG4gICAgICB2YXIgZWRnZXMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5nZXQodlZhbCk7XFxuXFxuICAgICAgaWYgKGVkZ2VzLmhhcyhlVmFsKSkgdGhyb3cgXFxcInZlcnRleCBhbHJlYWR5IGhhcyBlZGdlIFxcXCIuY29uY2F0KGVWYWwsIFxcXCIuXFxcIik7XFxuICAgICAgZWRnZXMuYWRkKGVWYWwpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImdldFZlcnRleEVkZ2VzXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZlcnRleEVkZ2VzKHZWYWwpIHtcXG4gICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2VmFsKSkgdGhyb3cgXFxcInZlcnRleCB3aXRoIHZhbHVlIFxcXCIuY29uY2F0KHZWYWwsIFxcXCIgZG9lc24ndCBleGlzdC5cXFwiKTtcXG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5nZXQodlZhbCkpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImhhc0VkZ2VcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzRWRnZSh2VmFsLCBlVmFsKSB7XFxuICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModlZhbCkpIHJldHVybiBmYWxzZTtcXG5cXG4gICAgICB2YXIgZWRnZXMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5nZXQodlZhbCk7XFxuXFxuICAgICAgcmV0dXJuIGVkZ2VzLmhhcyhlVmFsKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJoYXNWZXJ0ZXhcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzVmVydGV4KHZWYWwpIHtcXG4gICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKHZWYWwpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInJlbW92ZUVkZ2VcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRWRnZSh2VmFsLCBlVmFsKSB7XFxuICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModlZhbCkpIHRocm93IFxcXCJ2ZXJ0ZXggd2l0aCB2YWx1ZSBcXFwiLmNvbmNhdCh2VmFsLCBcXFwiIGRvZXNuJ3QgZXhpc3QuXFxcIik7XFxuXFxuICAgICAgdmFyIGVkZ2VzID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuZ2V0KHZWYWwpO1xcblxcbiAgICAgIGVkZ2VzW1xcXCJkZWxldGVcXFwiXShlVmFsKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJyZW1vdmVWZXJ0ZXhcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlVmVydGV4KHZWYWwpIHtcXG4gICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2VmFsKSkgdGhyb3cgXFxcInZlcnRleCB3aXRoIHZhbHVlIFxcXCIuY29uY2F0KHZWYWwsIFxcXCIgZG9lc24ndCBleGlzdC5cXFwiKTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKVtcXFwiZGVsZXRlXFxcIl0odlZhbCk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiQkZTXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIEJGUyhzdGFydCwgY2FsbGJhY2spIHtcXG4gICAgICB2YXIgZ3JhcGggPSB0aGlzO1xcblxcbiAgICAgIF9CRlMoc3RhcnQsIGdyYXBoLCBjYWxsYmFjayk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiREZTXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIERGUyhzdGFydCwgY2FsbGJhY2spIHtcXG4gICAgICB2YXIgZ3JhcGggPSB0aGlzO1xcbiAgICAgIERGU1JlY3Vyc2l2ZShzdGFydCwgZ3JhcGgsIGNhbGxiYWNrKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJwcmludEdyYXBoXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50R3JhcGgoKSB7XFxuICAgICAgdmFyIGdyYXBoID0ge307XFxuXFxuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpKSxcXG4gICAgICAgICAgX3N0ZXA7XFxuXFxuICAgICAgdHJ5IHtcXG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XFxuICAgICAgICAgIHZhciBfc3RlcCR2YWx1ZSA9IF9zbGljZWRUb0FycmF5KF9zdGVwLnZhbHVlLCAyKSxcXG4gICAgICAgICAgICAgIHZWYWwgPSBfc3RlcCR2YWx1ZVswXSxcXG4gICAgICAgICAgICAgIHZlcnRleEVkZ2VzID0gX3N0ZXAkdmFsdWVbMV07XFxuXFxuICAgICAgICAgIGdyYXBoW3ZWYWxdID0gW107XFxuICAgICAgICAgIHZhciBlZGdlcyA9ICcnO1xcblxcbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHZlcnRleEVkZ2VzKSxcXG4gICAgICAgICAgICAgIF9zdGVwMjtcXG5cXG4gICAgICAgICAgdHJ5IHtcXG4gICAgICAgICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xcbiAgICAgICAgICAgICAgdmFyIGVkZ2UgPSBfc3RlcDIudmFsdWU7XFxuICAgICAgICAgICAgICBlZGdlcyArPSBcXFwiXFxcIi5jb25jYXQoZWRnZSwgXFxcIiBcXFwiKTtcXG4gICAgICAgICAgICAgIGdyYXBoW3ZWYWxdLnB1c2goZWRnZSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICAgICAgICBfaXRlcmF0b3IyLmUoZXJyKTtcXG4gICAgICAgICAgfSBmaW5hbGx5IHtcXG4gICAgICAgICAgICBfaXRlcmF0b3IyLmYoKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiXFxcIi5jb25jYXQodlZhbCwgXFxcIiAtPiBcXFwiKS5jb25jYXQoZWRnZXMpKTtcXG4gICAgICAgIH1cXG4gICAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XFxuICAgICAgfSBmaW5hbGx5IHtcXG4gICAgICAgIF9pdGVyYXRvci5mKCk7XFxuICAgICAgfVxcblxcbiAgICAgIHJldHVybiBncmFwaDtcXG4gICAgfVxcbiAgfV0pO1xcblxcbiAgcmV0dXJuIEdyYXBoO1xcbn0oKTtcXG5cXG52YXIgX3ZlcnRpY2VzID0gbmV3IFdlYWtNYXAoKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0dyYXBoLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvR3JhcGhUcmF2ZXJzYWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvR3JhcGhUcmF2ZXJzYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXZhbChcImZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFxcXCJ1bmRlZmluZWRcXFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlxcXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXFxcInJldHVyblxcXCJdICE9IG51bGwpIGl0W1xcXCJyZXR1cm5cXFwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XFxuXFxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcXFwic3RyaW5nXFxcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFxcXCJPYmplY3RcXFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcXFwiTWFwXFxcIiB8fCBuID09PSBcXFwiU2V0XFxcIikgcmV0dXJuIEFycmF5LmZyb20obik7IGlmIChuID09PSBcXFwiQXJndW1lbnRzXFxcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cXG5cXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cXG5cXG52YXIgUXVldWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1F1ZXVlICovIFxcXCIuL3NyYy9RdWV1ZS5qc1xcXCIpO1xcblxcbnZhciBTdGFjayA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU3RhY2sgKi8gXFxcIi4vc3JjL1N0YWNrLmpzXFxcIik7IC8vIGJyZWFkdGggZmlyc3Qgc2VhcmNoIHdpdGggcXVldWVcXG5cXG5cXG52YXIgQkZTID0gZnVuY3Rpb24gQkZTKHN0YXJ0LCBncmFwaCwgY2FsbGJhY2spIHtcXG4gIC8vIHdpbGwga2VlcCB0cmFjayBvZiBuZXcgdmVydGljZXMgd2l0aCBxdWV1ZSBhbmQgdmlzaXRlZCBub2RlcyB3aXRoIGEgc2V0XFxuICB2YXIgcXVldWUgPSBuZXcgUXVldWUoKSxcXG4gICAgICB2aXNpdGVkID0gbmV3IFNldCgpO1xcbiAgcXVldWUuZW5xdWV1ZShzdGFydCk7IC8vdmVydGV4IGlzIHZpc2l0ZWQgaWYgaXQgZ2V0cyBwdXNoZWQgaW50byBxdWV1ZS5cXG5cXG4gIHZpc2l0ZWQuYWRkKHN0YXJ0KTtcXG5cXG4gIHdoaWxlICghcXVldWUuaXNFbXB0eSgpKSB7XFxuICAgIHZhciBjdXJyID0gcXVldWUuZGVxdWV1ZSgpLFxcbiAgICAgICAgZWRnZXMgPSBncmFwaC5nZXRWZXJ0ZXhFZGdlcyhjdXJyKTsgLy8gY2FsbCBjYWxsYmFjayBvbiBlYWNoIHZlcnRleCB0aGF0IGdldHMgZGVxdWV1ZWRcXG5cXG4gICAgY2FsbGJhY2soY3Vycik7IC8vaXRlcmF0ZSBvdmVyIGFsbCBlZGdlcyBhbmQgYWRkIHRoZSB1bnZpc2l0ZWQgb25lcyB0byBxdWV1ZVxcblxcbiAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZWRnZXMpLFxcbiAgICAgICAgX3N0ZXA7XFxuXFxuICAgIHRyeSB7XFxuICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcXG4gICAgICAgIHZhciBlVmFsID0gX3N0ZXAudmFsdWU7XFxuXFxuICAgICAgICBpZiAoIXZpc2l0ZWQuaGFzKGVWYWwpKSB7XFxuICAgICAgICAgIHF1ZXVlLmVucXVldWUoZVZhbCk7XFxuICAgICAgICAgIHZpc2l0ZWQuYWRkKGVWYWwpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcXG4gICAgfSBmaW5hbGx5IHtcXG4gICAgICBfaXRlcmF0b3IuZigpO1xcbiAgICB9XFxuICB9XFxufTsgLy9pdGVyYXRpdmUgZGVwdGggZmlyc3Qgc2VhcmNoLiBBbG1vc3Qgc2FtZSBhcyBCRlMuIE9ubHkgZGlmZmVyZW5jZSBpcyB0aGUgc3RhY2sgdnMgcXVldWVcXG5cXG5cXG52YXIgREZTSXRlcmF0aXZlID0gZnVuY3Rpb24gREZTSXRlcmF0aXZlKHN0YXJ0LCBncmFwaCwgY2FsbGJhY2spIHtcXG4gIHZhciBzdGFjayA9IG5ldyBTdGFjaygpLFxcbiAgICAgIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XFxuICBzdGFjay5wdXNoKHN0YXJ0KTtcXG4gIHZpc2l0ZWQuYWRkKHN0YXJ0KTtcXG5cXG4gIHdoaWxlICghc3RhY2suaXNFbXB0eSgpKSB7XFxuICAgIHZhciBjdXJyID0gc3RhY2sucG9wKCksXFxuICAgICAgICBlZGdlcyA9IGdyYXBoLmdldFZlcnRleEVkZ2VzKGN1cnIpO1xcbiAgICBjYWxsYmFjayhjdXJyKTtcXG5cXG4gICAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlZGdlcyksXFxuICAgICAgICBfc3RlcDI7XFxuXFxuICAgIHRyeSB7XFxuICAgICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcXG4gICAgICAgIHZhciBlVmFsID0gX3N0ZXAyLnZhbHVlO1xcblxcbiAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhlVmFsKSkge1xcbiAgICAgICAgICBzdGFjay5wdXNoKGVWYWwpO1xcbiAgICAgICAgICB2aXNpdGVkLmFkZChlVmFsKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgIF9pdGVyYXRvcjIuZShlcnIpO1xcbiAgICB9IGZpbmFsbHkge1xcbiAgICAgIF9pdGVyYXRvcjIuZigpO1xcbiAgICB9XFxuICB9XFxufTsgLy8gUmVjdXJzaXZlIGRlcHRoIGZpcnN0IHNlYXJjaFxcblxcblxcbnZhciBERlNSZWN1cnNpdmUgPSBmdW5jdGlvbiBERlNSZWN1cnNpdmUoc3RhcnQsIGdyYXBoLCBjYWxsYmFjaykge1xcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XFxuXFxuICB2YXIgcmVjdXJzaXZlREZTID0gZnVuY3Rpb24gcmVjdXJzaXZlREZTKGN1cnIpIHtcXG4gICAgaWYgKHZpc2l0ZWQuaGFzKGN1cnIpKSByZXR1cm47XFxuICAgIGNhbGxiYWNrKGN1cnIpO1xcbiAgICB2aXNpdGVkLmFkZChjdXJyKTtcXG4gICAgdmFyIGVkZ2VzID0gZ3JhcGguZ2V0VmVydGV4RWRnZXMoY3Vycik7XFxuXFxuICAgIHZhciBfaXRlcmF0b3IzID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZWRnZXMpLFxcbiAgICAgICAgX3N0ZXAzO1xcblxcbiAgICB0cnkge1xcbiAgICAgIGZvciAoX2l0ZXJhdG9yMy5zKCk7ICEoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uKCkpLmRvbmU7KSB7XFxuICAgICAgICB2YXIgZVZhbCA9IF9zdGVwMy52YWx1ZTtcXG5cXG4gICAgICAgIGlmICghdmlzaXRlZC5oYXMoZVZhbCkpIHtcXG4gICAgICAgICAgcmVjdXJzaXZlREZTKGVWYWwpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgX2l0ZXJhdG9yMy5lKGVycik7XFxuICAgIH0gZmluYWxseSB7XFxuICAgICAgX2l0ZXJhdG9yMy5mKCk7XFxuICAgIH1cXG4gIH07XFxuXFxuICByZWN1cnNpdmVERlMoc3RhcnQpO1xcbn07XFxuXFxubW9kdWxlLmV4cG9ydHMgPSB7XFxuICBCRlM6IEJGUyxcXG4gIERGU1JlY3Vyc2l2ZTogREZTUmVjdXJzaXZlLFxcbiAgREZTSXRlcmF0aXZlOiBERlNJdGVyYXRpdmVcXG59O1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0dyYXBoVHJhdmVyc2FsLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvSGFzaFRhYmxlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9IYXNoVGFibGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcXFwidW5kZWZpbmVkXFxcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXFxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cXFwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1xcXCJyZXR1cm5cXFwiXSAhPSBudWxsKSBpdFtcXFwicmV0dXJuXFxcIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxcblxcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXFxcInN0cmluZ1xcXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcXFwiT2JqZWN0XFxcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXFxcIk1hcFxcXCIgfHwgbiA9PT0gXFxcIlNldFxcXCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXFxcIkFyZ3VtZW50c1xcXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XFxuXFxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXFxcInZhbHVlXFxcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxcblxcbi8qIGh0dHBzOi8vcmVhY3Rnby5jb20vaGFzaHRhYmxlLWphdmFzY3JpcHQvICovXFxuXFxuLypcXG5SdWRpbWVudGFyeSBqYXZhc2NyaXB0IGhhc2ggdGFibGUgcmVzb2x2aW5nIGNvbGxpc2lvbnMgd2l0aCBzZXBhcmF0ZSBjaGFpbmluZy4gXFxuVG9kbzogUmVzb2x2ZSBjb25mbGljdHMgd2l0aCBMaW5lYXIgUHJvYmluZywgU2VwYXJhdGUgQ2hhaW5pbmcgKGxpbmtlZCBsaXN0cylcXG4qL1xcbnZhciBIYXNoVGFibGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgZnVuY3Rpb24gSGFzaFRhYmxlKCkge1xcbiAgICB2YXIgc2l6ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogNDI7XFxuXFxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIYXNoVGFibGUpO1xcblxcbiAgICB0aGlzLmJ1Y2tldHMgPSBuZXcgQXJyYXkoc2l6ZSk7XFxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XFxuICB9XFxuXFxuICBfY3JlYXRlQ2xhc3MoSGFzaFRhYmxlLCBbe1xcbiAgICBrZXk6IFxcXCJoYXNoXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc2goa2V5KSB7XFxuICAgICAgcmV0dXJuIGtleS50b1N0cmluZygpLmxlbmd0aCAlIHRoaXMuc2l6ZTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJzZXRcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcXG4gICAgICB2YXIgaSA9IHRoaXMuaGFzaChrZXkpOyAvLyBpZiBubyBjb2xsaXNpb24sIHNldCB0aGUgYnVja2V0IGF0IHBvc2l0aW9uIGkgdG8gYXJyYXlcXG5cXG4gICAgICBpZiAoIXRoaXMuYnVja2V0c1tpXSkgdGhpcy5idWNrZXRzW2ldID0gW107IC8vIHB1c2ggW2tleSwgdmFsXSBpbnRvIHRoZSBhcnJheVxcblxcbiAgICAgIHRoaXMuYnVja2V0c1tpXS5wdXNoKFtrZXksIHZhbHVlXSk7XFxuICAgICAgcmV0dXJuIGk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiZ2V0XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChrZXkpIHtcXG4gICAgICB2YXIgaSA9IHRoaXMuaGFzaChrZXkpO1xcbiAgICAgIGlmICghdGhpcy5idWNrZXRzW2ldKSByZXR1cm4gbnVsbDsgLy8gY2hlY2sgZWFjaCBwYWlyIGluc2lkZSB0aGUgYnVja2V0IGF0IHBvc2l0aW9uIGlcXG4gICAgICAvLyBpZiBrZXkgbWF0Y2hlcyBrZXkgYXQgcGFpclswXSByZXR1cm4gdGhlIHZhbCBhdCBwYWlyWzFdXFxuXFxuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHRoaXMuYnVja2V0c1tpXSksXFxuICAgICAgICAgIF9zdGVwO1xcblxcbiAgICAgIHRyeSB7XFxuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xcbiAgICAgICAgICB2YXIgcGFpciA9IF9zdGVwLnZhbHVlO1xcbiAgICAgICAgICBpZiAocGFpclswXSA9PT0ga2V5KSByZXR1cm4gcGFpclsxXTtcXG4gICAgICAgIH1cXG4gICAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XFxuICAgICAgfSBmaW5hbGx5IHtcXG4gICAgICAgIF9pdGVyYXRvci5mKCk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XSk7XFxuXFxuICByZXR1cm4gSGFzaFRhYmxlO1xcbn0oKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hUYWJsZTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9IYXNoVGFibGUuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9MaW5rZWRMaXN0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvTGlua2VkTGlzdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcXFwidW5kZWZpbmVkXFxcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXFxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cXFwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1xcXCJyZXR1cm5cXFwiXSAhPSBudWxsKSBpdFtcXFwicmV0dXJuXFxcIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxcblxcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXFxcInN0cmluZ1xcXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcXFwiT2JqZWN0XFxcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXFxcIk1hcFxcXCIgfHwgbiA9PT0gXFxcIlNldFxcXCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXFxcIkFyZ3VtZW50c1xcXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XFxuXFxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XFxuXFxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXFxcInZhbHVlXFxcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5nZXQpIHsgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjcmlwdG9yLnZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5zZXQpIHsgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpOyB9IGVsc2UgeyBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFxcXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG52YXIgTGlua2VkTGlzdCA9IGZ1bmN0aW9uICgpIHtcXG4gIC8vIGNvbnN0IGhlYWQgPSBTeW1ib2woJ2hlYWQnKSAvL1RvIGtlZXAgaGVhZCBhcyBwcml2YXRlIGluIGxpbmtlZCBsaXN0XFxuICAvLyBjb25zdCBzaXplID0gU3ltYm9sKCdzaXplJylcXG4gIHZhciBMaXN0Tm9kZSA9IGZ1bmN0aW9uIExpc3ROb2RlKHZhbCkge1xcbiAgICB2YXIgbmV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcXG5cXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpc3ROb2RlKTtcXG5cXG4gICAgdGhpcy52YWwgPSB2YWw7XFxuICAgIHRoaXMubmV4dCA9IG5leHQ7XFxuICB9O1xcblxcbiAgdmFyIExpbmtlZExpc3QgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgICAvLyBQcml2YXRlIHN0YXRpYyBmaWVsZHNcXG4gICAgZnVuY3Rpb24gTGlua2VkTGlzdCgpIHtcXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlua2VkTGlzdCk7XFxuXFxuICAgICAgX2hlYWQuc2V0KHRoaXMsIHtcXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICAgIH0pO1xcblxcbiAgICAgIF9zaXplLnNldCh0aGlzLCB7XFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgICB9KTtcXG5cXG4gICAgICAvLyBUaGUgaGVhZCBhbmQgc2l6ZSBwcm9wZXJ0eSBzaG91bGRuJ3QgYmUgbW9kaWZpYWJsZSBvdXRzaWRlIHRoZSBjbGFzcy4gU28gdGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBnZXR0ZXIuIENsYXNzIGZpZWxkcyBhcmVuJ3Qgc3VwcG9ydGVkIGJ5IGEgbG90IG9mIGJyb3dzZXJzLiBVc2Ugc3ltYm9sIGluc3RlYWQgdG8gY3JlYXRlIHByaXZhdGUgY2xhc3MgdmFyaWFibGVzIGlmIHlvdSdyZSBub3QgdXNpbmcgYmFiZWwuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9oZWFkLCBudWxsKTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIDApOyAvLyB0aGlzW2hlYWRdID0gbnVsbFxcbiAgICAgIC8vIHRoaXNbc2l6ZV0gPSAwXFxuXFxuICAgIH0gLy9nZXR0ZXJzXFxuXFxuXFxuICAgIF9jcmVhdGVDbGFzcyhMaW5rZWRMaXN0LCBbe1xcbiAgICAgIGtleTogXFxcImZyb21BcnJheVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZyb21BcnJheShhcnJheSkge1xcbiAgICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGFycmF5KSxcXG4gICAgICAgICAgICBfc3RlcDtcXG5cXG4gICAgICAgIHRyeSB7XFxuICAgICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XFxuICAgICAgICAgICAgdmFyIHZhbCA9IF9zdGVwLnZhbHVlO1xcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kVG9UYWlsKHZhbCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xcbiAgICAgICAgfSBmaW5hbGx5IHtcXG4gICAgICAgICAgX2l0ZXJhdG9yLmYoKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJ0b0FycmF5XFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdG9BcnJheSgpIHtcXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcXG5cXG4gICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG5cXG4gICAgICAgIHdoaWxlIChjdXJyKSB7XFxuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnIudmFsKTtcXG4gICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgICAgfSAvLyBUIOKAlCBPKDEpXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmVwZW5kVG9IZWFkXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlcGVuZFRvSGVhZCh2YWwpIHtcXG4gICAgICAgIHZhciBfdGhpcyRzaXplO1xcblxcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgTGlzdE5vZGUodmFsKTtcXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpID09IG51bGwpIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgbm9kZSk7ZWxzZSB7XFxuICAgICAgICAgIHZhciBwcmV2SGVhZCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XFxuXFxuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgbm9kZSk7XFxuXFxuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCkubmV4dCA9IHByZXZIZWFkO1xcbiAgICAgICAgfVxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZSA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSArIDEpLCBfdGhpcyRzaXplO1xcbiAgICAgIH0gLy8gVCDigJQgTyhuKVxcblxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwiYXBwZW5kVG9UYWlsXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVG9UYWlsKHZhbCkge1xcbiAgICAgICAgdmFyIF90aGlzJHNpemUyO1xcblxcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgTGlzdE5vZGUodmFsKTtcXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpID09IG51bGwpIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgbm9kZSk7ZWxzZSB7XFxuICAgICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG5cXG4gICAgICAgICAgd2hpbGUgKGN1cnIubmV4dCkge1xcbiAgICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgY3Vyci5uZXh0ID0gbm9kZTtcXG4gICAgICAgIH1cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemUyID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpICsgMSksIF90aGlzJHNpemUyO1xcbiAgICAgIH0gLy8gVCDigJQgTygxKVxcblxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwiZGVsZXRlRnJvbUhlYWRcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxldGVGcm9tSGVhZCgpIHtcXG4gICAgICAgIHZhciBfdGhpcyRzaXplMztcXG5cXG4gICAgICAgIHZhciBjdXJySGVhZCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XFxuXFxuICAgICAgICBpZiAoIWN1cnJIZWFkKSByZXR1cm4gbnVsbDtcXG5cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgY3VyckhlYWQubmV4dCk7XFxuXFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplMyA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSAtIDEpLCBfdGhpcyRzaXplMztcXG4gICAgICAgIHJldHVybiBjdXJySGVhZC52YWw7XFxuICAgICAgfSAvLyBUIOKAlCBPKG4pXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJkZWxldGVGcm9tVGFpbFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZUZyb21UYWlsKCkge1xcbiAgICAgICAgdmFyIF90aGlzJHNpemU1O1xcblxcbiAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xcblxcbiAgICAgICAgaWYgKCFjdXJyKSByZXR1cm4gbnVsbDsgLy9IYW5kbGUgY2FzZSBvZiBzaW5nbGUgbm9kZSBpbiBsaW5rZWQgbGlzdFxcblxcbiAgICAgICAgaWYgKCFjdXJyLm5leHQpIHtcXG4gICAgICAgICAgdmFyIF90aGlzJHNpemU0O1xcblxcbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIG51bGwpO1xcblxcbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplNCA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSAtIDEpLCBfdGhpcyRzaXplNDtcXG4gICAgICAgICAgcmV0dXJuIGN1cnIudmFsO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdmFyIHByZXYgPSBudWxsO1xcblxcbiAgICAgICAgd2hpbGUgKGN1cnIubmV4dCkge1xcbiAgICAgICAgICBwcmV2ID0gY3VycjtcXG4gICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHByZXYubmV4dCA9IG51bGw7XFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplNSA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSAtIDEpLCBfdGhpcyRzaXplNTtcXG4gICAgICAgIHJldHVybiBjdXJyLnZhbDtcXG4gICAgICB9IC8vIFQg4oCUIE8obikuIE5vbiByZWN1cnNpdmUgdmVyc2lvbiBvZiBkZWxldGVOb2RlUmVjdXJzaXZlXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJkZWxldGVOb2RlXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVsZXRlTm9kZSh2YWwpIHtcXG4gICAgICAgIHZhciBkZWxldGVNdWx0aXBsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XFxuICAgICAgICB2YXIgZGVsZXRlQ291bnQgPSAwO1xcblxcbiAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpLFxcbiAgICAgICAgICAgIHByZXYgPSBudWxsO1xcblxcbiAgICAgICAgd2hpbGUgKGN1cnIpIHtcXG4gICAgICAgICAgaWYgKGN1cnIudmFsID09PSB2YWwpIHtcXG4gICAgICAgICAgICB2YXIgX3RoaXMkc2l6ZTY7XFxuXFxuICAgICAgICAgICAgaWYgKCFwcmV2KSB7XFxuICAgICAgICAgICAgICAvL0Rvbid0IG5lZWQgdG8gZ2FyYmFnZSBjb2xsZWN0LiBUaGlzIGlzIEphdmFzY3JpcHQsIG5vdCBDKytcXG4gICAgICAgICAgICAgIC8vIGNvbnN0IHRlbXAgPSBjdXJyXFxuICAgICAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0OyAvLyB0ZW1wLm5leHQgPSBudWxsXFxuXFxuICAgICAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIGN1cnIpO1xcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICBwcmV2Lm5leHQgPSBjdXJyLm5leHQ7IC8vIGN1cnIubmV4dCA9IG51bGxcXG5cXG4gICAgICAgICAgICAgIGN1cnIgPSBwcmV2Lm5leHQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemU2ID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpIC0gMSksIF90aGlzJHNpemU2O1xcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50Kys7XFxuICAgICAgICAgICAgaWYgKCFkZWxldGVNdWx0aXBsZSkgcmV0dXJuIHRydWU7XFxuICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgcHJldiA9IGN1cnI7XFxuICAgICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgcmV0dXJuICEhZGVsZXRlQ291bnQ7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwic2VhcmNoXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2VhcmNoKHZhbCkge1xcbiAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xcblxcbiAgICAgICAgd2hpbGUgKGN1cnIpIHtcXG4gICAgICAgICAgaWYgKGN1cnIudmFsID09PSB2YWwpIHJldHVybiB0cnVlO1xcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50TGlzdFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50TGlzdCgpIHtcXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnRvQXJyYXkoKTtcXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XFxuICAgICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImhlYWRcXFwiLFxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwic2l6ZVxcXCIsXFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJ0YWlsXFxcIixcXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG5cXG4gICAgICAgIGlmICghY3VycikgcmV0dXJuIG51bGw7XFxuXFxuICAgICAgICB3aGlsZSAoY3Vyci5uZXh0KSB7XFxuICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICByZXR1cm4gY3VycjtcXG4gICAgICB9XFxuICAgIH1dKTtcXG5cXG4gICAgcmV0dXJuIExpbmtlZExpc3Q7XFxuICB9KCk7XFxuXFxuICB2YXIgX2hlYWQgPSBuZXcgV2Vha01hcCgpO1xcblxcbiAgdmFyIF9zaXplID0gbmV3IFdlYWtNYXAoKTtcXG5cXG4gIHJldHVybiBMaW5rZWRMaXN0O1xcbn0oKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IExpbmtlZExpc3Q7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvTGlua2VkTGlzdC5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL1F1ZXVlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL1F1ZXVlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXFxcIik7IH0gZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlOyB9IHJldHVybiB2YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbnZhciBRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcXG4gIHZhciBRdWV1ZU5vZGUgPSBmdW5jdGlvbiBRdWV1ZU5vZGUoZGF0YSkge1xcbiAgICB2YXIgbmV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcXG5cXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFF1ZXVlTm9kZSk7XFxuXFxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XFxuICAgIHRoaXMubmV4dCA9IG5leHQ7XFxuICB9O1xcblxcbiAgdmFyIFF1ZXVlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gICAgLy9Mb29rIGluIC4vTGlua2VkTGlzdC5qcyB0byBzZWUgb3RoZXIgd2F5cyBvZiBkZWNsYXJpbmcgcHJpdmF0ZSBzdGF0aWMgZmllbGRzIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0NsYXNzZXMvQ2xhc3NfZmllbGRzI1ByaXZhdGVfZmllbGRzXFxuICAgIGZ1bmN0aW9uIFF1ZXVlKCkge1xcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBRdWV1ZSk7XFxuXFxuICAgICAgX2ZpcnN0LnNldCh0aGlzLCB7XFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgICB9KTtcXG5cXG4gICAgICBfbGFzdC5zZXQodGhpcywge1xcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgICB2YWx1ZTogdm9pZCAwXFxuICAgICAgfSk7XFxuXFxuICAgICAgX3NpemUuc2V0KHRoaXMsIHtcXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICAgIH0pO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfZmlyc3QsIG51bGwpO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfbGFzdCwgbnVsbCk7XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAwKTtcXG4gICAgfVxcblxcbiAgICBfY3JlYXRlQ2xhc3MoUXVldWUsIFt7XFxuICAgICAga2V5OiBcXFwiZW5xdWV1ZVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVucXVldWUoaXRlbSkge1xcbiAgICAgICAgdmFyIF90aGlzJHNpemU7XFxuXFxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBRdWV1ZU5vZGUoaXRlbSk7XFxuXFxuICAgICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9sYXN0KSkge1xcbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2xhc3QpLm5leHQgPSBub2RlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9sYXN0LCBub2RlKTtcXG5cXG4gICAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCkpIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfZmlyc3QsIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfbGFzdCkpO1xcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZSA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSArIDEpLCBfdGhpcyRzaXplO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImRlcXVldWVcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXF1ZXVlKCkge1xcbiAgICAgICAgdmFyIF90aGlzJHNpemUyO1xcblxcbiAgICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KSkgcmV0dXJuIG51bGw7XFxuXFxuICAgICAgICB2YXIgZGF0YSA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpLmRhdGE7XFxuXFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2ZpcnN0LCBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KS5uZXh0KTtcXG5cXG4gICAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCkpIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfbGFzdCwgbnVsbCk7XFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplMiA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSAtIDEpLCBfdGhpcyRzaXplMjtcXG4gICAgICAgIHJldHVybiBkYXRhO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInBlZWtcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwZWVrKCkge1xcbiAgICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KSkgcmV0dXJuIG51bGw7XFxuICAgICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCkuZGF0YTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJpc0VtcHR5XFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNFbXB0eSgpIHtcXG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KSA9PT0gbnVsbDtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmludFF1ZXVlXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRRdWV1ZSgpIHtcXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcXG5cXG4gICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCk7XFxuXFxuICAgICAgICB3aGlsZSAoY3Vycikge1xcbiAgICAgICAgICByZXN1bHQucHVzaChjdXJyLmRhdGEpO1xcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcXG4gICAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwic2l6ZVxcXCIsXFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKTtcXG4gICAgICB9XFxuICAgIH1dKTtcXG5cXG4gICAgcmV0dXJuIFF1ZXVlO1xcbiAgfSgpO1xcblxcbiAgdmFyIF9maXJzdCA9IG5ldyBXZWFrTWFwKCk7XFxuXFxuICB2YXIgX2xhc3QgPSBuZXcgV2Vha01hcCgpO1xcblxcbiAgdmFyIF9zaXplID0gbmV3IFdlYWtNYXAoKTtcXG5cXG4gIHJldHVybiBRdWV1ZTtcXG59KCk7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9RdWV1ZS5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL1N0YWNrLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL1N0YWNrLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxudmFyIFN0YWNrID0gZnVuY3Rpb24gKCkge1xcbiAgdmFyIHRvcCA9IFN5bWJvbCgndG9wJyk7IC8vVG8ga2VlcCB0b3AgYXMgcHJpdmF0ZSBpbiBzdGFja1xcblxcbiAgdmFyIFN0YWNrTm9kZSA9IGZ1bmN0aW9uIFN0YWNrTm9kZShkYXRhKSB7XFxuICAgIHZhciBuZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xcblxcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhY2tOb2RlKTtcXG5cXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcXG4gICAgdGhpcy5uZXh0ID0gbmV4dDtcXG4gIH07XFxuXFxuICB2YXIgU3RhY2sgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgICBmdW5jdGlvbiBTdGFjaygpIHtcXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhY2spO1xcblxcbiAgICAgIHRoaXNbdG9wXSA9IG51bGw7XFxuICAgIH1cXG5cXG4gICAgX2NyZWF0ZUNsYXNzKFN0YWNrLCBbe1xcbiAgICAgIGtleTogXFxcInB1c2hcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcXG4gICAgICAgIHZhciBub2RlID0gbmV3IFN0YWNrTm9kZShpdGVtKTtcXG4gICAgICAgIG5vZGUubmV4dCA9IHRoaXNbdG9wXTtcXG4gICAgICAgIHRoaXNbdG9wXSA9IG5vZGU7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicG9wXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcG9wKCkge1xcbiAgICAgICAgaWYgKHRoaXNbdG9wXSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XFxuICAgICAgICB2YXIgaXRlbSA9IHRoaXNbdG9wXS5kYXRhO1xcbiAgICAgICAgdGhpc1t0b3BdID0gdGhpc1t0b3BdLm5leHQ7XFxuICAgICAgICByZXR1cm4gaXRlbTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwZWVrXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcGVlaygpIHtcXG4gICAgICAgIGlmICh0aGlzW3RvcF0gPT09IG51bGwpIHJldHVybiBudWxsO1xcbiAgICAgICAgcmV0dXJuIHRoaXNbdG9wXS5kYXRhO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImlzRW1wdHlcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0VtcHR5KCkge1xcbiAgICAgICAgcmV0dXJuIHRoaXNbdG9wXSA9PT0gbnVsbDtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmludFN0YWNrXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRTdGFjaygpIHtcXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcXG4gICAgICAgIHZhciBjdXJyID0gdGhpc1t0b3BdO1xcblxcbiAgICAgICAgd2hpbGUgKGN1cnIpIHtcXG4gICAgICAgICAgcmVzdWx0LnB1c2goY3Vyci5kYXRhKTtcXG4gICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgIH0gLy8gY29uc29sZS5sb2cocmVzdWx0KVxcblxcblxcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJzdGFja1RvU3RyaW5nXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhY2tUb1N0cmluZygpIHtcXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnByaW50U3RhY2soKSk7XFxuICAgICAgfVxcbiAgICB9XSk7XFxuXFxuICAgIHJldHVybiBTdGFjaztcXG4gIH0oKTtcXG5cXG4gIHJldHVybiBTdGFjaztcXG59KCk7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9TdGFjay5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL1RyaWUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9UcmllLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcInZhciBfdGVtcCwgX3Jvb3Q7XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXFxcInVuZGVmaW5lZFxcXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxcXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXFxcIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcXFwicmV0dXJuXFxcIl0gIT0gbnVsbCkgaXRbXFxcInJldHVyblxcXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cXG5cXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFxcXCJzdHJpbmdcXFwiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXFxcIk9iamVjdFxcXCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFxcXCJNYXBcXFwiIHx8IG4gPT09IFxcXCJTZXRcXFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFxcXCJBcmd1bWVudHNcXFwiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxcblxcbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcXFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XFxuXFxuLyogXFxuXFxuaHR0cHM6Ly9sZWV0Y29kZS5jb20vcHJvYmxlbXMvaW1wbGVtZW50LXRyaWUtcHJlZml4LXRyZWUvc29sdXRpb24vXFxuVmlzdWFsaXplIGEgdHJpZSBhcyBhIDI2IGJ5IG4gbWF0cml4IHdpdGggb25lIHdheSByZWxhdGlvbiBiZXR3ZWVuIHRoZSBsZXR0ZXJzIGluIGRpZmZlcmVudCBsZXZlbHMuIG4gaXMgdGhlIGxlbmd0aCBvZiB0aGUgbG9uZ2VzdCB3b3JkIGluIHRoZSB0cmllLlxcblxcbndvcmRzIOKAlCBkZWVkLCBub20sIG5vb25cXG5cXG5hICBiICBjICBkICBlICBmICBnICBoICBpICBqICBrICBsICBtICBuICBvIC4uLlxcbiAgICAgICAgICAg4oaYICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGmCBcXG5hICBiICBjICBkICBlICBmICBnICBoICBpICBqICBrICBsICBtICBuICBvIC4uLlxcbiAgICAgICAgICAgIOKGkyAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGmSDihpNcXG4gICAgICAgICAgICDihpMgICAgICAgICAgICAgICAgICAgICAgICAg4oaZICAg4oaTXFxuYSAgYiAgYyAgZCAgZSAgZiAgZyAgaCAgaSAgaiAgayAgbCAgbSAgbiAgbyAuLi5cXG4gICAgICAgICAg4oaZICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihplcXG5hICBiICBjICBkICBlICBmICBnICBoICBpICBqICBrICBsICBtICBuICBvIC4uLlxcblxcblRoZSByb290IHdvdWxkIGxvb2sgbGlrZTpcXG5cXG5jb25zdCB0cmllID1cXG57XFxuICBkOiB7IGU6IHsgZTogeyBkOiB7IGlzV29yZDogdHJ1ZSB9IH0gfSB9LFxcbiAgbjogeyBvOiB7IG86IHsgbjogeyBpc1dvcmQ6IHRydWUgfSB9LFxcbiAgICAgICBtOiB7IGlzV29yZDogdHJ1ZSB9IH1cXG4gICAgIH1cXG59XFxuXFxuKi9cXG4vLyBXZSdsbCBhc3N1bWUgdGhhdCB0aGUgd29yZHMgcHJvdmlkZWQgd2lsbCBjb25zaXN0IG9mIGxldHRlcnMgb25seSBhbmQgYXJlIGFsd2F5cyBsb3dlcmNhc2VcXG52YXIgVHJpZSA9IChfdGVtcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICBmdW5jdGlvbiBUcmllKCkge1xcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJpZSk7XFxuXFxuICAgIF9yb290LnNldCh0aGlzLCB7XFxuICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICB9KTtcXG5cXG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9yb290LCB7fSk7XFxuICB9XFxuXFxuICBfY3JlYXRlQ2xhc3MoVHJpZSwgW3tcXG4gICAga2V5OiBcXFwiX3RyYXZlcnNlXFxcIixcXG4gICAgLy8gaGVscGVyLiBDaGFuZ2UgdG8gcHJpdmF0ZSB3aGVuIHByaXZhdGUgaW5zdGFuY2UgbWV0aG9kcyBhcmUgc3VwcG9ydGVkXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdHJhdmVyc2Uod29yZCkge1xcbiAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KTtcXG5cXG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIod29yZCksXFxuICAgICAgICAgIF9zdGVwO1xcblxcbiAgICAgIHRyeSB7XFxuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xcbiAgICAgICAgICB2YXIgY2ggPSBfc3RlcC52YWx1ZTtcXG4gICAgICAgICAgaWYgKCFjdXJyKSByZXR1cm4gbnVsbDtcXG4gICAgICAgICAgY3VyciA9IGN1cnJbY2hdO1xcbiAgICAgICAgfVxcbiAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcXG4gICAgICB9IGZpbmFsbHkge1xcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcXG4gICAgICB9XFxuXFxuICAgICAgcmV0dXJuIGN1cnI7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiaW5zZXJ0XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydCh3b3JkKSB7XFxuICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpO1xcblxcbiAgICAgIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIod29yZCksXFxuICAgICAgICAgIF9zdGVwMjtcXG5cXG4gICAgICB0cnkge1xcbiAgICAgICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcXG4gICAgICAgICAgdmFyIGNoID0gX3N0ZXAyLnZhbHVlO1xcbiAgICAgICAgICBjdXJyW2NoXSA9IGN1cnJbY2hdID8gY3VycltjaF0gOiB7fTtcXG4gICAgICAgICAgY3VyciA9IGN1cnJbY2hdO1xcbiAgICAgICAgfVxcbiAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XFxuICAgICAgfSBmaW5hbGx5IHtcXG4gICAgICAgIF9pdGVyYXRvcjIuZigpO1xcbiAgICAgIH1cXG5cXG4gICAgICBjdXJyLmlzV29yZCA9IHRydWU7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwic2VhcmNoXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaCh3b3JkKSB7XFxuICAgICAgdmFyIG5vZGUgPSB0aGlzLl90cmF2ZXJzZSh3b3JkKTtcXG5cXG4gICAgICByZXR1cm4gbm9kZSAhPT0gbnVsbCAmJiBub2RlLmlzV29yZCA9PT0gdHJ1ZTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJzdGFydHNXaXRoXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0c1dpdGgod29yZCkge1xcbiAgICAgIHJldHVybiB0aGlzLl90cmF2ZXJzZSh3b3JkKSAhPT0gbnVsbDtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJyb290XFxcIixcXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCk7XFxuICAgIH1cXG4gIH1dKTtcXG5cXG4gIHJldHVybiBUcmllO1xcbn0oKSwgX3Jvb3QgPSBuZXcgV2Vha01hcCgpLCBfdGVtcCk7XFxubW9kdWxlLmV4cG9ydHMgPSBUcmllO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL1RyaWUuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5ldmFsKFwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cXG5cXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cXG5cXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxcblxcbnZhciBMaW5rZWRMaXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9MaW5rZWRMaXN0ICovIFxcXCIuL3NyYy9MaW5rZWRMaXN0LmpzXFxcIik7XFxuXFxudmFyIEhhc2hUYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vSGFzaFRhYmxlICovIFxcXCIuL3NyYy9IYXNoVGFibGUuanNcXFwiKTtcXG5cXG52YXIgU3RhY2sgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1N0YWNrICovIFxcXCIuL3NyYy9TdGFjay5qc1xcXCIpO1xcblxcbnZhciBRdWV1ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUXVldWUgKi8gXFxcIi4vc3JjL1F1ZXVlLmpzXFxcIik7XFxuXFxudmFyIFRyZWVUcmF2ZXJzYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0JpbmFyeVRyZWVUcmF2ZXJzYWwgKi8gXFxcIi4vc3JjL0JpbmFyeVRyZWVUcmF2ZXJzYWwuanNcXFwiKTtcXG5cXG52YXIgQmluYXJ5U2VhcmNoVHJlZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQmluYXJ5U2VhcmNoVHJlZSAqLyBcXFwiLi9zcmMvQmluYXJ5U2VhcmNoVHJlZS5qc1xcXCIpO1xcblxcbnZhciBUcmllID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9UcmllICovIFxcXCIuL3NyYy9UcmllLmpzXFxcIik7XFxuXFxudmFyIEJpbmFyeUhlYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0JpbmFyeUhlYXAgKi8gXFxcIi4vc3JjL0JpbmFyeUhlYXAvaW5kZXguanNcXFwiKTtcXG5cXG52YXIgR3JhcGhUcmF2ZXJzYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0dyYXBoVHJhdmVyc2FsICovIFxcXCIuL3NyYy9HcmFwaFRyYXZlcnNhbC5qc1xcXCIpO1xcblxcbnZhciBHcmFwaCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vR3JhcGggKi8gXFxcIi4vc3JjL0dyYXBoLmpzXFxcIik7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkKHtcXG4gIExpbmtlZExpc3Q6IExpbmtlZExpc3QsXFxuICBIYXNoVGFibGU6IEhhc2hUYWJsZSxcXG4gIFN0YWNrOiBTdGFjayxcXG4gIFF1ZXVlOiBRdWV1ZSxcXG4gIFRyZWVUcmF2ZXJzYWw6IFRyZWVUcmF2ZXJzYWwsXFxuICBCaW5hcnlTZWFyY2hUcmVlOiBCaW5hcnlTZWFyY2hUcmVlLFxcbiAgVHJpZTogVHJpZVxcbn0sIEJpbmFyeUhlYXAsIHtcXG4gIEdyYXBoVHJhdmVyc2FsOiBHcmFwaFRyYXZlcnNhbCxcXG4gIEdyYXBoOiBHcmFwaFxcbn0pO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL2luZGV4LmpzP1wiKTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFpbiB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXksIGNvdW50ID0gMCkge1xuICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXlcbiAgICB0aGlzLmNvdW50ID0gY291bnRcbiAgICB0aGlzLm1pbiA9IDBcbiAgfVxuXG4gIHNldENvdW50ID0gKGNvdW50KSA9PiB7XG4gICAgdGhpcy5jb3VudCA9IGNvdW50XG4gIH1cblxuICByZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLnNldENvdW50KDApXG4gICAgdGhpcy51cGRhdGVDaGFpbigpXG4gIH1cblxuICBpbmNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuY291bnQgKyAxXG4gICAgdGhpcy5zZXRDb3VudChjb3VudClcbiAgICB0aGlzLnVwZGF0ZUNoYWluKClcbiAgfVxuXG4gIGRlY3JlbWVudENvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5jb3VudFxuICAgIHRoaXMuY291bnQgPSBNYXRoLm1heChjb3VudCAtIDEsIHRoaXMubWluKVxuICAgIHRoaXMudXBkYXRlQ2hhaW4oKVxuICB9XG5cbiAgdXBkYXRlQ2hhaW4gPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNwbGF5LnVwZGF0ZUVsZW1lbnQoJyNjaGFpbicsIHRoaXMuY291bnQpXG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIHRoaXMudXBkYXRlQ2hhaW4oKVxuICB9XG59XG4iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vTW92aW5nT2JqZWN0J1xuXG5jb25zdCByID0gMTAsXG4gIGMgPSAnI2Y2ZTg3MicsXG4gIHYgPSB7IGR4OiAxLCBkeTogMSB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWxkIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcG9zLFxuICAgIHJhZGl1cyA9IHIsXG4gICAgd29ybGQsXG4gICAgc3ByaXRlLFxuICAgIHNpemUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSxcbiAgICB2ZWwgPSB2LFxuICAgIGNvbG9yID0gY1xuICApIHtcbiAgICBzdXBlcihwb3MsIHJhZGl1cywgd29ybGQsIHNwcml0ZSwgc2l6ZSwgdmVsLCBjb2xvcilcbiAgICB0aGlzLmluZGVwZW5kZW5jZSA9IHRydWVcbiAgICB0aGlzLmNoYWluUG9zID0gbnVsbFxuICAgIHRoaXMucGFyZW50ID0gbnVsbFxuICAgIHRoaXMubmV4dENoaWxkID0gbnVsbFxuICAgIHRoaXMucG9zQ2FjaGUgPSBbXVxuICAgIHRoaXMubW92ZXMgPSB0aGlzLm1vdmVzLmJpbmQodGhpcylcbiAgICB0aGlzLmhpdHNQcmVkYXRvciA9IHRoaXMuaGl0c1ByZWRhdG9yLmJpbmQodGhpcylcbiAgICB0aGlzLnNwcml0ZSA9IHNwcml0ZVxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIHNldFBhcmVudCA9IChwYXJlbnQpID0+IHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICB9XG5cbiAgc2V0Q2hhaW5Qb3MgPSAoY2hhaW5Qb3MpID0+IHtcbiAgICB0aGlzLmNoYWluUG9zID0gY2hhaW5Qb3NcbiAgfVxuXG4gIHNldE5leHRDaGlsZCA9IChjaGlsZCkgPT4ge1xuICAgIHRoaXMubmV4dENoaWxkID0gY2hpbGRcbiAgfVxuXG4gIHNldEluZGVwZW5kZW5jZSA9IChpbmRlcGVuZGVuY2UpID0+IHtcbiAgICB0aGlzLmluZGVwZW5kZW5jZSA9IGluZGVwZW5kZW5jZVxuICB9XG5cbiAgaXNJbmRlcGVuZGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5pbmRlcGVuZGVuY2VcbiAgfVxuXG4gIGF2b2lkUHJlZGF0b3IgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaW5kZXBlbmRlbmNlKSB7XG4gICAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcyxcbiAgICAgICAgcG9zID0geyB4OiB4ICsgdGhpcy5jdXJyRGlyWzBdLCB5OiB5ICsgdGhpcy5jdXJyRGlyWzFdIH1cblxuICAgICAgdGhpcy5zZXRSYW5kb21EaXIoKVxuICAgICAgcG9zID0geyB4OiB4ICsgdGhpcy5jdXJyRGlyWzBdLCB5OiB5ICsgdGhpcy5jdXJyRGlyWzFdIH1cblxuICAgICAgdGhpcy5ib3VuY2VCYWNrKHBvcylcbiAgICB9XG4gIH1cblxuICBoaXRzUHJlZGF0b3IoZ2FtZSkge1xuICAgIGlmICh0aGlzLmlzSW5kZXBlbmRlbnQoKSkgZ2FtZS5kZXN0cm95Q2hpbGQodGhpcylcbiAgICBlbHNlIHtcbiAgICAgIGxldCBjdXJyID0gdGhpcy5wYXJlbnQuZGVsZXRlTGFzdENoaWxkKClcbiAgICAgIHdoaWxlIChjdXJyICYmIGN1cnIgIT09IHRoaXMpIHtcbiAgICAgICAgY3VyciA9IHRoaXMucGFyZW50LmRlbGV0ZUxhc3RDaGlsZCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW92ZXMocG9zKSB7XG4gICAgaWYgKHRoaXMuaXNJbmRlcGVuZGVudCgpKSBzdXBlci5tb3ZlcygpXG4gICAgZWxzZSB7XG4gICAgICAvLyBjb25zdCBlYXNpbmcgPSBNYXRoLm1heCgxIC0gdGhpcy5jaGFpblBvcyAqIDAuMTMsIDAuMSksXG4gICAgICBjb25zdCBlYXNpbmcgPSAxLFxuICAgICAgICByID0gdGhpcy5yYWRpdXMsXG4gICAgICAgIG9mZnNldCA9IDIgKiAociArIDEpICogdGhpcy5jaGFpblBvcyArICh0aGlzLnBhcmVudC5yYWRpdXMgLSByKSxcbiAgICAgICAgbmV4dENoaWxkID0gdGhpcy5uZXh0Q2hpbGRcblxuICAgICAgc3VwZXIubW92ZXNXaXRoQ3Vyc29yKHBvcywgZWFzaW5nLCBvZmZzZXQpXG5cbiAgICAgIGlmIChuZXh0Q2hpbGQpXG4gICAgICAgIG5leHRDaGlsZC5tb3Zlcyh0aGlzLnBvc0NhY2hlLmxlbmd0aCA/IHRoaXMucG9zQ2FjaGVbMF0gOiBwb3MpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIFJlbGF0ZWQgdG8gdGhlIERPTSBhbmQgZGlzcGxheSAoY3JlYXRpbmcgZWxlbWVudHMsIHVwZGF0aW5nIGVsZW1lbnRzIGV0Yy4pXG4gKi9cblxuaW1wb3J0IGNoaWxkQ291bnRJbWcgZnJvbSAnLi9pbWdzL2NvdW50LnBuZydcbmltcG9ydCBoZWFydCBmcm9tICcuL2ltZ3MvaGVhcnQuc3ZnJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET01EaXNwbGF5IHtcbiAgY29uc3RydWN0b3IoeyB3aWR0aCA9IDQwMCwgaGVpZ2h0ID0gNzAwIH0pIHtcbiAgICB0aGlzLmdhbWUgPSBudWxsXG4gICAgdGhpcy53b3JsZFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfVxuICAgIHRoaXMud29ybGRXcmFwcGVyID0gbnVsbFxuICAgIHRoaXMuZ2FtZUVuZCA9IG51bGxcbiAgICB0aGlzLmxlZ2VuZCA9IG51bGxcbiAgfVxuXG4gIGNyZWF0ZUltYWdlID0gKHNyYywgY2xhc3NOYW1lLCBpZCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nLnNyYyA9IHNyY1xuICAgIGlmIChjbGFzc05hbWUpIGltZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICBpZiAoaWQpIGltZy5pZCA9IGlkXG4gICAgcmV0dXJuIGltZ1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudCA9ICh0YWcsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXG4gICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZSkpIHtcbiAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBjbGFzc05hbWUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpZCkgZWxlbWVudC5pZCA9IGlkXG4gICAgaWYgKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJUZXh0ID0gY29udGVudFxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBnZXRFbGVtZW50ID0gKHNlbGVjdG9yKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gIH1cblxuICB1cGRhdGVFbGVtZW50ID0gKHNlbGVjdG9yLCB2YWwpID0+IHtcbiAgICB0aGlzLmdldEVsZW1lbnQoc2VsZWN0b3IpLmlubmVyVGV4dCA9IHZhbFxuICB9XG5cbiAgcmVuZGVyR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZ2FtZScsICdnYW1lJylcbiAgICB0aGlzLmdhbWUgPSBnYW1lXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdhbWUpXG4gIH1cblxuICByZW5kZXJUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RpdGxlJywgbnVsbClcbiAgICBjb25zdCBoZWFkaW5nID0gdGhpcy5jcmVhdGVFbGVtZW50KCdoMScsIG51bGwsIG51bGwsICdDSElDS0VOIE1FRVRTIFdPUk0nKVxuICAgIHRoaXMuZ2FtZS5hcHBlbmQodGl0bGUpXG4gICAgdGl0bGUuYXBwZW5kKGhlYWRpbmcpXG4gIH1cblxuICByZW5kZXJXb3JsZCA9ICgpID0+IHtcbiAgICBjb25zdCB3b3JsZFdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3b3JsZC13cmFwcGVyJyksXG4gICAgICB3b3JsZCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnY2FudmFzJywgbnVsbCwgJ3dvcmxkJyksXG4gICAgICBsZWdlbmQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdsZWdlbmQnKSxcbiAgICAgIHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy53b3JsZFNpemVcbiAgICB3b3JsZC53aWR0aCA9IHRoaXMud29ybGRTaXplLndpZHRoXG4gICAgd29ybGQuaGVpZ2h0ID0gdGhpcy53b3JsZFNpemUuaGVpZ2h0XG4gICAgdGhpcy5nYW1lLmFwcGVuZCh3b3JsZFdyYXBwZXIpXG4gICAgd29ybGRXcmFwcGVyLmFwcGVuZChsZWdlbmQpXG4gICAgd29ybGRXcmFwcGVyLmFwcGVuZCh3b3JsZClcbiAgICB3b3JsZFdyYXBwZXIuc3R5bGUud2lkdGggPSB3aWR0aCArIDIgKyAncHgnXG4gICAgd29ybGRXcmFwcGVyLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIDIgKyAncHgnXG4gICAgdGhpcy53b3JsZFdyYXBwZXIgPSB3b3JsZFdyYXBwZXJcbiAgICB0aGlzLmxlZ2VuZCA9IGxlZ2VuZFxuICAgIHRoaXMud29ybGQgPSB3b3JsZFxuICB9XG5cbiAgcmVuZGVyRW5lcmd5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGVuZXJneVdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgICdlbmVyZ3ktd3JhcHBlcicsXG4gICAgICAnZW5lcmd5LXdyYXBwZXInXG4gICAgKVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZENoaWxkKGVuZXJneVdyYXBwZXIpXG4gICAgdGhpcy51cGRhdGVFbmVyZ3lCYXIoNSlcbiAgfVxuXG4gIHJlbmRlckNoYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoYWluV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NoYWluLXdyYXBwZXInKVxuICAgIGNvbnN0IGNvdW50SW1nID0gdGhpcy5jcmVhdGVJbWFnZShjaGlsZENvdW50SW1nLCAnaW1hZ2UnLCAnY2hhaW4tY291bnQnKVxuICAgIGNvbnN0IGNoYWluID0gdGhpcy5jcmVhdGVFbGVtZW50KCdzcGFuJywgJ2xlZ2VuZC10ZXh0JywgJ2NoYWluJylcblxuICAgIHRoaXMubGVnZW5kLmFwcGVuZChjaGFpbldyYXBwZXIpXG4gICAgY2hhaW5XcmFwcGVyLmFwcGVuZChjb3VudEltZylcbiAgICBjaGFpbldyYXBwZXIuYXBwZW5kKGNoYWluKVxuICB9XG5cbiAgdXBkYXRlRW5lcmd5QmFyKGNvdW50KSB7XG4gICAgdmFyIGVXID0gdGhpcy5nZXRFbGVtZW50KCcjZW5lcmd5LXdyYXBwZXInKVxuICAgIGlmIChlVy5jaGlsZEVsZW1lbnRDb3VudCA+IGNvdW50KSB7XG4gICAgICB3aGlsZSAoZVcuY2hpbGRFbGVtZW50Q291bnQgPiBjb3VudCkge1xuICAgICAgICBlVy5yZW1vdmVDaGlsZCh0aGlzLmdldEVsZW1lbnQoJy5oZWFydC1mdWxsJykpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpID0gTWF0aC5taW4oY291bnQsIDUpXG4gICAgICB3aGlsZSAoZVcuY2hpbGRFbGVtZW50Q291bnQgPCBpKSB7XG4gICAgICAgIGNvbnN0IGhlYXJ0RnVsbCA9IHRoaXMuY3JlYXRlSW1hZ2UoaGVhcnQsICdoZWFydC1mdWxsJylcbiAgICAgICAgZVcuYXBwZW5kKGhlYXJ0RnVsbClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJTY29yZSA9ICgpID0+IHtcbiAgICBjb25zdCBzY29yZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydsZWdlbmQtdGV4dCcsICdzY29yZSddLCAnc2NvcmUnKVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZChzY29yZSlcbiAgfVxuXG4gIHJlbmRlckdhbWVFbmQgPSAoaGFuZGxlQ2xpY2tSZXBsYXksIHNjb3JlLCBoaWdoU2NvcmUpID0+IHtcbiAgICBjb25zdCBnYW1lRW5kV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2VuZC13cmFwcGVyJylcbiAgICBjb25zdCBnYW1lRW5kID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZ2FtZS1lbmQnKVxuICAgIGdhbWVFbmRXcmFwcGVyLnN0eWxlLndpZHRoID0gdGhpcy53b3JsZFNpemUud2lkdGggKyA0ICsgJ3B4J1xuICAgIHRoaXMuZ2FtZUVuZCA9IGdhbWVFbmRcbiAgICB0aGlzLmdhbWVFbmRXcmFwcGVyID0gZ2FtZUVuZFdyYXBwZXJcbiAgICB0aGlzLndvcmxkV3JhcHBlci5hcHBlbmQoZ2FtZUVuZFdyYXBwZXIpXG4gICAgZ2FtZUVuZFdyYXBwZXIuYXBwZW5kKGdhbWVFbmQpXG4gICAgdGhpcy5yZW5kZXJHYW1lT3Zlck1lc3NhZ2UoKVxuICAgIHRoaXMucmVuZGVyRW5kU2NvcmUoc2NvcmUsIGhpZ2hTY29yZSlcbiAgICB0aGlzLnJlbmRlclJlcGxheUJ1dHRvbihoYW5kbGVDbGlja1JlcGxheSlcbiAgfVxuXG4gIGNsZWFyR2FtZUVuZCA9ICgpID0+IHtcbiAgICB0aGlzLndvcmxkV3JhcHBlci5yZW1vdmVDaGlsZCh0aGlzLmdhbWVFbmRXcmFwcGVyKVxuICB9XG5cbiAgcmVuZGVyR2FtZU92ZXJNZXNzYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdnYW1lLW92ZXInLCBudWxsLCAnR2FtZSBPdmVyIScpXG4gICAgdGhpcy5nYW1lRW5kLmFwcGVuZChtZXNzYWdlKVxuICB9XG5cbiAgcmVuZGVyUmVwbGF5QnV0dG9uID0gKGhhbmRsZUNsaWNrUmVwbGF5KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnYnRuJywgJ3JlcGxheScpXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9ICdSZXBsYXknXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja1JlcGxheSlcbiAgICB0aGlzLmdhbWVFbmQuYXBwZW5kKGJ1dHRvbilcbiAgfVxuXG4gIHJlbmRlckVuZFNjb3JlID0gKHNjb3JlLCBoaWdoU2NvcmUpID0+IHtcbiAgICBjb25zdCBlbmRTY29yZVdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3cmFwcGVyJylcbiAgICBjb25zdCBlbmRTY29yZUxhYmVsID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgJ3Njb3JlLWxhYmVsJyxcbiAgICAgIG51bGwsXG4gICAgICAnWW91ciBzY29yZTogJ1xuICAgIClcbiAgICBjb25zdCBlbmRTY29yZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgICdzY29yZScsXG4gICAgICAnZW5kLXNjb3JlJyxcbiAgICAgIHNjb3JlLnRvU3RyaW5nKClcbiAgICApXG4gICAgY29uc3QgYmVzdFNjb3JlV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3dyYXBwZXInKVxuICAgIGNvbnN0IGJlc3RTY29yZUxhYmVsID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgJ3Njb3JlLWxhYmVsJyxcbiAgICAgIG51bGwsXG4gICAgICAnQmVzdCBzY29yZTogJ1xuICAgIClcbiAgICBjb25zdCBiZXN0U2NvcmUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICAnc2NvcmUnLFxuICAgICAgJ2Jlc3Qtc2NvcmUnLFxuICAgICAgaGlnaFNjb3JlLnRvU3RyaW5nKClcbiAgICApXG5cbiAgICBlbmRTY29yZVdyYXBwZXIuYXBwZW5kKGVuZFNjb3JlTGFiZWwpXG4gICAgZW5kU2NvcmVXcmFwcGVyLmFwcGVuZChlbmRTY29yZSlcbiAgICBiZXN0U2NvcmVXcmFwcGVyLmFwcGVuZChiZXN0U2NvcmVMYWJlbClcbiAgICBiZXN0U2NvcmVXcmFwcGVyLmFwcGVuZChiZXN0U2NvcmUpXG4gICAgdGhpcy5nYW1lRW5kLmFwcGVuZChlbmRTY29yZVdyYXBwZXIpXG4gICAgdGhpcy5nYW1lRW5kLmFwcGVuZChiZXN0U2NvcmVXcmFwcGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVyZ3kge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5LCBlbmVyZ3kgPSA1LCBtYXggPSA1KSB7XG4gICAgdGhpcy5kaXNwbGF5ID0gZGlzcGxheVxuICAgIHRoaXMuY291bnQgPSBlbmVyZ3lcbiAgICB0aGlzLm1pbiA9IDBcbiAgICB0aGlzLm1heCA9IG1heFxuICB9XG5cbiAgc2V0Q291bnQgPSAoY291bnQpID0+IHtcbiAgICB0aGlzLmNvdW50ID0gY291bnRcbiAgfVxuXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0Q291bnQodGhpcy5tYXgpXG4gICAgdGhpcy51cGRhdGVFbmVyZ3koKVxuICB9XG5cbiAgaW5jcmVtZW50Q291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSBNYXRoLm1pbih0aGlzLmNvdW50ICsgMSwgdGhpcy5tYXgpXG4gICAgdGhpcy5zZXRDb3VudChjb3VudClcbiAgICB0aGlzLnVwZGF0ZUVuZXJneSgpXG4gIH1cblxuICBkZWNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuY291bnRcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5tYXgoY291bnQgLSAxLCB0aGlzLm1pbilcbiAgICB0aGlzLnVwZGF0ZUVuZXJneSgpXG4gIH1cblxuICB1cGRhdGVFbmVyZ3kgPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNwbGF5LnVwZGF0ZUVuZXJneUJhcih0aGlzLmNvdW50KVxuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZUVuZXJneSgpXG4gIH1cbn1cbiIsImltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tICdkYXRhX3N0cnVjdHVyZXMnXG5pbXBvcnQgQ2hhaW4gZnJvbSAnLi9DaGFpbi5qcydcbmltcG9ydCBDaGlsZCBmcm9tICcuL0NoaWxkLmpzJ1xuaW1wb3J0IEVuZXJneSBmcm9tICcuL0VuZXJneS5qcydcbmltcG9ydCBjaGlsZEltZyBmcm9tICcuL2ltZ3MvY2hpbGQucG5nJ1xuaW1wb3J0IHBhcmVudEltYWdlIGZyb20gJy4vaW1ncy9wYXJlbnQucG5nJ1xuaW1wb3J0IHByZWRhdG9ySW1hZ2UgZnJvbSAnLi9pbWdzL3ByZWRhdG9yLnBuZydcbmltcG9ydCB3b3JtSW1hZ2UgZnJvbSAnLi9pbWdzL3dvcm0ucG5nJ1xuaW1wb3J0IFBhcmVudCBmcm9tICcuL1BhcmVudC5qcydcbmltcG9ydCBQcmVkYXRvciBmcm9tICcuL1ByZWRhdG9yLmpzJ1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IFdvcmxkIGZyb20gJy4vV29ybGQuanMnXG5pbXBvcnQgV29ybSBmcm9tICcuL1dvcm0uanMnXG5cbmNvbnN0IENoaWxkU3ByaXRlID0gbmV3IEltYWdlKClcbkNoaWxkU3ByaXRlLnNyYyA9IGNoaWxkSW1nXG5jb25zdCBQYXJlbnRTcHJpdGUgPSBuZXcgSW1hZ2UoKVxuUGFyZW50U3ByaXRlLnNyYyA9IHBhcmVudEltYWdlXG5jb25zdCBQcmVkYXRvclNwcml0ZSA9IG5ldyBJbWFnZSgpXG5QcmVkYXRvclNwcml0ZS5zcmMgPSBwcmVkYXRvckltYWdlXG5jb25zdCBXb3JtU3ByaXRlID0gbmV3IEltYWdlKClcbldvcm1TcHJpdGUuc3JjID0gd29ybUltYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5LCBjaGlsZENvdW50ID0gNSwgcHJlZGF0b3JDb3VudCA9IDQsIHdvcm1Db3VudCA9IDEpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5tb3VzZSA9IHsgeDogbnVsbCwgeTogbnVsbCB9XG4gICAgdGhpcy53b3JsZCA9IG51bGxcbiAgICB0aGlzLnBhcmVudCA9IG51bGxcbiAgICB0aGlzLnByZWRhdG9ycyA9IG5ldyBMaW5rZWRMaXN0KClcbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMud29ybXMgPSBuZXcgTGlua2VkTGlzdCgpXG4gICAgdGhpcy5jaGlsZENvdW50ID0gY2hpbGRDb3VudFxuICAgIHRoaXMucHJlZGF0b3JDb3VudCA9IHByZWRhdG9yQ291bnRcbiAgICB0aGlzLndvcm1Db3VudCA9IHdvcm1Db3VudFxuICAgIHRoaXMuY2hhaW4gPSBudWxsXG4gICAgdGhpcy5lbmVyZ3kgPSBudWxsXG4gICAgdGhpcy5zY29yZSA9IG51bGxcbiAgICB0aGlzLnRpbWVTaW5jZVdvcm0gPSAwXG4gICAgdGhpcy5hbmltYXRpb25SZXEgPSBudWxsXG4gIH1cblxuICBoYW5kbGVNb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgIHRoaXMubW91c2UgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH1cbiAgfVxuXG4gIGRlc3Ryb3lXb3JtID0gKHdvcm0pID0+IHtcbiAgICB0aGlzLndvcm1zLmRlbGV0ZU5vZGUod29ybSlcbiAgfVxuXG4gIGRlc3Ryb3lDaGlsZCA9IChjaGlsZCkgPT4ge1xuICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlTm9kZShjaGlsZClcbiAgICB0aGlzLnNwYXduQ2hpbGRyZW4oMTcuNSlcbiAgfVxuXG4gIGNoZWNrSW5SYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCxcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KCksXG4gICAgICBwcmVkYXRvcnMgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KCksXG4gICAgICB3b3JtcyA9IHRoaXMud29ybXMudG9BcnJheSgpXG5cbiAgICAvLyBDaGlsZCBwcmVkYXRvciBjb2xsaXNpb25zXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKHBhcmVudC5jaGVja0luUmFuZ2UoY2hpbGQpKSB7XG4gICAgICAgIHBhcmVudC5oaXRzQ2hpbGQoY2hpbGQpXG4gICAgICAgIHRoaXMuc3Bhd25DaGlsZHJlbigxNy41KVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBwcmVkYXRvciBvZiBwcmVkYXRvcnMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMTApKSBjaGlsZC5hdm9pZFByZWRhdG9yKClcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMCkpIGNoaWxkLmhpdHNQcmVkYXRvcih0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBQYXJlbnQgcHJlZGF0b3IgY29sbGlzaW9uc1xuICAgIGZvciAoY29uc3QgcHJlZGF0b3Igb2YgcHJlZGF0b3JzKSB7XG4gICAgICBpZiAocGFyZW50LmNoZWNrSW5SYW5nZShwcmVkYXRvciwgNSkpXG4gICAgICAgIHBhcmVudC5jaGVja0NvbGxpc2lvbldpdGhQcmVkYXRvcihwcmVkYXRvcilcbiAgICB9XG5cbiAgICAvL1BhcmVudCB3b3JtIGNvbGxpc2lvbnNcbiAgICBmb3IgKGNvbnN0IHdvcm0gb2Ygd29ybXMpIHtcbiAgICAgIGlmIChwYXJlbnQuY2hlY2tJblJhbmdlKHdvcm0sIDIpKSBwYXJlbnQuaGl0c1dvcm0odGhpcywgd29ybSlcbiAgICB9XG4gIH1cblxuICBzcGF3bkNoaWxkcmVuID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuICAgIGxldCBpbmRlcGVuZGVudEMgPSB0aGlzLmNoaWxkcmVuLnNpemUgLSB0aGlzLnBhcmVudC5nZXRDaGlsZENvdW50KClcblxuICAgIHdoaWxlIChpbmRlcGVuZGVudEMgPCB0aGlzLmNoaWxkQ291bnQgJiYgdGhpcy5jaGlsZENvdW50ID4gMCkge1xuICAgICAgY29uc3QgcmFuZG9tUG9zID0gdGhpcy53b3JsZC5nZXRSYW5kb21Qb3MociksXG4gICAgICAgIGNoaWxkID0gbmV3IENoaWxkKHJhbmRvbVBvcywgciwgdGhpcy53b3JsZCwgQ2hpbGRTcHJpdGUsIHNpemUpXG5cbiAgICAgIGNoaWxkLnNldFJhbmRvbURpcigpXG4gICAgICB0aGlzLmNoaWxkcmVuLmFwcGVuZFRvVGFpbChjaGlsZClcbiAgICAgIGluZGVwZW5kZW50QyA9IHRoaXMuY2hpbGRyZW4uc2l6ZSAtIHRoaXMucGFyZW50LmdldENoaWxkQ291bnQoKVxuICAgIH1cbiAgfVxuXG4gIHNwYXduUHJlZGF0b3JzID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuXG4gICAgd2hpbGUgKHRoaXMucHJlZGF0b3JzLnNpemUgPCB0aGlzLnByZWRhdG9yQ291bnQpIHtcbiAgICAgIGNvbnN0IHJhbmRvbVBvcyA9IHRoaXMud29ybGQuZ2V0UmFuZG9tUG9zKHIpLFxuICAgICAgICBwcmVkYXRvciA9IG5ldyBQcmVkYXRvcihyYW5kb21Qb3MsIHIsIHRoaXMud29ybGQsIFByZWRhdG9yU3ByaXRlLCBzaXplKVxuICAgICAgcHJlZGF0b3Iuc2V0UmFuZG9tRGlyKClcbiAgICAgIHRoaXMucHJlZGF0b3JzLmFwcGVuZFRvVGFpbChwcmVkYXRvcilcbiAgICB9XG4gIH1cblxuICBzcGF3bldvcm1zID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuXG4gICAgd2hpbGUgKHRoaXMud29ybXMuc2l6ZSA8IHRoaXMud29ybUNvdW50KSB7XG4gICAgICBjb25zdCByYW5kb21Qb3MgPSB0aGlzLndvcmxkLmdldFJhbmRvbVBvcyhyKSxcbiAgICAgICAgd29ybSA9IG5ldyBXb3JtKHJhbmRvbVBvcywgciwgdGhpcy53b3JsZCwgV29ybVNwcml0ZSwgc2l6ZSlcbiAgICAgIHdvcm0uc2V0UmFuZG9tRGlyKClcbiAgICAgIHRoaXMud29ybXMuYXBwZW5kVG9UYWlsKHdvcm0pXG4gICAgfVxuICB9XG5cbiAgaW5pdENoaWxkcmVuID0gKHJhZGl1cykgPT4ge1xuICAgIHRoaXMuc3Bhd25DaGlsZHJlbihyYWRpdXMpXG4gIH1cblxuICBpbml0UHJlZGF0b3JzID0gKHJhZGl1cykgPT4ge1xuICAgIHRoaXMuc3Bhd25QcmVkYXRvcnMocmFkaXVzKVxuICB9XG5cbiAgaW5pdFBhcmVudCA9IChyKSA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IHsgd2lkdGg6IHIgKiAyLCBoZWlnaHQ6IHIgKiAyIH1cbiAgICBjb25zdCBpbml0aWFsUG9zID0ge1xuICAgICAgeDogdGhpcy53b3JsZC5zaXplLndpZHRoIC8gMiArIHIsXG4gICAgICB5OiB0aGlzLndvcmxkLnNpemUuaGVpZ2h0IC8gMiArIHIsXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gbmV3IFBhcmVudChcbiAgICAgIGluaXRpYWxQb3MsXG4gICAgICByLFxuICAgICAgdGhpcy53b3JsZCxcbiAgICAgIHRoaXMuY2hhaW4sXG4gICAgICB0aGlzLnNjb3JlLFxuICAgICAgdGhpcy5lbmVyZ3ksXG4gICAgICBQYXJlbnRTcHJpdGUsXG4gICAgICBzaXplXG4gICAgKVxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50XG4gIH1cblxuICBpbml0V29ybXMgPSAocmFkaXVzKSA9PiB7XG4gICAgdGhpcy5zcGF3bldvcm1zKHJhZGl1cylcbiAgfVxuXG4gIGluaXRDaGFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFpbiA9IG5ldyBDaGFpbih0aGlzLmRpc3BsYXkpXG4gICAgY2hhaW4uaW5pdCgpXG4gICAgdGhpcy5jaGFpbiA9IGNoYWluXG4gIH1cblxuICBpbml0V29ybGQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd29ybGQgPSBuZXcgV29ybGQodGhpcy5kaXNwbGF5KVxuICAgIHdvcmxkLmluaXQoKVxuICAgIHRoaXMud29ybGQgPSB3b3JsZFxuICB9XG5cbiAgaW5pdFNjb3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjb3JlID0gbmV3IFNjb3JlKHRoaXMuZGlzcGxheSlcbiAgICBzY29yZS5pbml0KClcbiAgICB0aGlzLnNjb3JlID0gc2NvcmVcbiAgfVxuXG4gIGluaXRFbmVyZ3kgPSAoKSA9PiB7XG4gICAgY29uc3QgZW5lcmd5ID0gbmV3IEVuZXJneSh0aGlzLmRpc3BsYXkpXG4gICAgZW5lcmd5LmluaXQoKVxuICAgIHRoaXMuZW5lcmd5ID0gZW5lcmd5XG4gIH1cblxuICByZXBsYXlHYW1lID0gKCkgPT4ge1xuICAgIHRoaXMucmVzZXRHYW1lKClcbiAgICB0aGlzLmRpc3BsYXkuY2xlYXJHYW1lRW5kKClcbiAgfVxuXG4gIHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLmVuZXJneS5yZXNldCgpXG4gICAgdGhpcy5zY29yZS5yZXNldCgpXG4gICAgdGhpcy5tb3VzZSA9IHsgeDogbnVsbCwgeTogbnVsbCB9XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsXG4gICAgdGhpcy5wcmVkYXRvcnMgPSBuZXcgTGlua2VkTGlzdCgpXG4gICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBMaW5rZWRMaXN0KClcbiAgICB0aGlzLndvcm1zID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMuY2hhaW4gPSBudWxsXG4gICAgdGhpcy50aW1lU2luY2VXb3JtID0gMFxuXG4gICAgdGhpcy5pbml0V29ybGQoKVxuICAgIHRoaXMuaW5pdENoYWluKDEpXG4gICAgdGhpcy5pbml0UGFyZW50KDMwKVxuICAgIHRoaXMuaW5pdENoaWxkcmVuKDE3LjUpXG4gICAgdGhpcy5pbml0UHJlZGF0b3JzKDM1KVxuICAgIHRoaXMuaW5pdFdvcm1zKDIwKVxuICAgIHRoaXMuYW5pbWF0aW9uUmVxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpXG4gIH1cblxuICBnYW1lT3ZlciA9ICgpID0+IHtcbiAgICB0aGlzLnNjb3JlLmNhbGN1bGF0ZUhpZ2hTY29yZSgpXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uUmVxKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJHYW1lRW5kKFxuICAgICAgdGhpcy5yZXBsYXlHYW1lLFxuICAgICAgdGhpcy5zY29yZS5zY29yZSxcbiAgICAgIHRoaXMuc2NvcmUuaGlnaFNjb3JlXG4gICAgKVxuICAgIHJldHVyblxuICB9XG5cbiAgZHJhdyA9ICh0aW1lc3RhbXApID0+IHtcbiAgICBpZiAodGhpcy5lbmVyZ3kuY291bnQgPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmdhbWVPdmVyKClcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lUGFzc2VkID0gdGltZXN0YW1wIC0gdGhpcy50aW1lU2luY2VXb3JtXG4gICAgaWYgKHRpbWVQYXNzZWQgPj0gMjUwMCAmJiB0aGlzLndvcm1zLnNpemUgPD0gMCkge1xuICAgICAgdGhpcy5zcGF3bldvcm1zKDIwKVxuICAgICAgdGhpcy50aW1lU2luY2VXb3JtID0gdGltZXN0YW1wXG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzID0gdGhpcy53b3JsZC5jYW52YXMsXG4gICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KCksXG4gICAgICBwcmVkYXRvcnMgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KCksXG4gICAgICB3b3JtcyA9IHRoaXMud29ybXMudG9BcnJheSgpXG5cbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgIHRoaXMucGFyZW50Lm1vdmVzKHRoaXMubW91c2UpXG4gICAgdGhpcy5wYXJlbnQuZHJhdyhjdHgsIHsgeDogMzAsIHk6IDI1IH0pXG5cbiAgICBmb3IgKGNvbnN0IHByZWRhdG9yIG9mIHByZWRhdG9ycykge1xuICAgICAgcHJlZGF0b3IubW92ZXMoKVxuICAgICAgcHJlZGF0b3IuZHJhdyhjdHgsIHsgeDogMzAsIHk6IDI1IH0pXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB3b3JtIG9mIHdvcm1zKSB7XG4gICAgICB3b3JtLm1vdmVzKHRoaXMpXG4gICAgICB3b3JtLmRyYXcoY3R4LCB7IHg6IDAsIHk6IDAgfSlcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBpZiAoY2hpbGQuaW5kZXBlbmRlbmNlKSBjaGlsZC5tb3ZlcygpXG4gICAgICBjaGlsZC5kcmF3KGN0eCwgeyB4OiAxNSwgeTogMTUgfSlcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrSW5SYW5nZSgpXG4gICAgdGhpcy5hbmltYXRpb25SZXEgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdylcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlckdhbWUoKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJUaXRsZSgpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlcldvcmxkKClcbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyU2NvcmUoKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJDaGFpbigpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlckVuZXJneSgpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUsIGZhbHNlKVxuICAgIHRoaXMuaW5pdEVuZXJneSgpXG4gICAgdGhpcy5pbml0V29ybGQoKVxuICAgIHRoaXMuaW5pdFNjb3JlKClcbiAgICB0aGlzLmluaXRDaGFpbigpXG4gICAgdGhpcy5pbml0UGFyZW50KDMwKVxuICAgIHRoaXMuaW5pdENoaWxkcmVuKDE3LjUpXG4gICAgdGhpcy5pbml0UHJlZGF0b3JzKDM1KVxuICAgIHRoaXMuaW5pdFdvcm1zKDIwKVxuICAgIHRoaXMuYW5pbWF0aW9uUmVxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJhbmRvbUludCwgaW5SYW5nZSB9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IHIgPSAxMCxcbiAgYyA9ICcjNzI4MGY2JyxcbiAgdiA9IHsgZHg6IDEsIGR5OiAxIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocG9zLCByYWRpdXMgPSByLCB3b3JsZCwgc3ByaXRlLCBzaXplLCB2ZWwgPSB2LCBjb2xvciA9IGMpIHtcbiAgICB0aGlzLnBvcyA9IHBvc1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gICAgdGhpcy53b3JsZCA9IHdvcmxkXG4gICAgdGhpcy5zcHJpdGUgPSBzcHJpdGVcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgdGhpcy52ZWwgPSB2ZWxcbiAgICB0aGlzLmN1cnJEaXIgPSBbMCwgMF1cbiAgICB0aGlzLnBvc0NhY2hlID0gW11cblxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpXG4gICAgdGhpcy5tb3Zlc1dpdGhDdXJzb3IgPSB0aGlzLm1vdmVzV2l0aEN1cnNvci5iaW5kKHRoaXMpXG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMubW92ZXMuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hlY2tJblJhbmdlID0gdGhpcy5jaGVja0luUmFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c1BhcmVudCA9IHRoaXMuaGl0c1BhcmVudC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaXRzUHJlZGF0b3IgPSB0aGlzLmhpdHNQcmVkYXRvci5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaXRzQ2hpbGQgPSB0aGlzLmhpdHNDaGlsZC5iaW5kKHRoaXMpXG4gIH1cblxuICBzZXRWZWxvY2l0eSA9ICh2ZWxvY2l0eSkgPT4ge1xuICAgIHRoaXMudmVsID0gdmVsb2NpdHlcbiAgfVxuXG4gIHNldFBvcyA9IChwb3MpID0+IHtcbiAgICB0aGlzLnBvcyA9IHBvc1xuICB9XG5cbiAgc2V0UG9zQ2FjaGUgPSAocG9zQ2FjaGUpID0+IHtcbiAgICB0aGlzLnBvc0NhY2hlID0gcG9zQ2FjaGVcbiAgfVxuXG4gIHNldEN1cnJEaXIgPSAoZGlyKSA9PiB7XG4gICAgdGhpcy5jdXJyRGlyID0gZGlyXG4gIH1cblxuICBzZXRSYW5kb21EaXIgPSAoKSA9PiB7XG4gICAgLyogXG4gICAgOCBwb3NzaWJsZSBkaXJlY3Rpb25zLlxuICAgIFZlcnRpY2FsIGFuZCBob3Jpem9udGFsOiBcbiAgICAgICAg4oaRICAgICAgXG4gICAgICAgIOKGkVxuICAg4oaQICDihpAgICDihpIgIOKGkiAgXG4gICAgICAgIOKGk1xuICAgICAgICDihpMgXG4gICAgRGlhZ29uYWxzOlxuICAgIOKGliAgICAgIOKGl1xuICAgICAg4oaWICDihpdcbiAgICAgIOKGmSAg4oaYIFxuICAgIOKGmSAgICAgIOKGmFxuICAgICovXG5cbiAgICBjb25zdCB7IGR4LCBkeSB9ID0gdGhpcy52ZWxcbiAgICBjb25zdCBpbmRleCA9IGdldFJhbmRvbUludCg4KVxuICAgIGNvbnN0IHBvc3NpYmxlRGlyZWN0aW9ucyA9IFtcbiAgICAgIC8vIDAgdmFsdWVzIG9mZiBzbGlnaHRseSBzbyBvYmplY3RzIGRvZXNuJ3Qgc3RpY2sgdG8gZWRnZXMuXG4gICAgICBbZHgsIDAuMl0sXG4gICAgICBbLWR4LCAwLjNdLFxuICAgICAgWzAuMTUsIGR5XSxcbiAgICAgIFswLjIzLCAtZHldLFxuICAgICAgW2R4LCBkeV0sXG4gICAgICBbLWR4LCBkeV0sXG4gICAgICBbZHgsIC1keV0sXG4gICAgICBbLWR4LCAtZHldLFxuICAgIF1cblxuICAgIHRoaXMuc2V0Q3VyckRpcihwb3NzaWJsZURpcmVjdGlvbnNbaW5kZXhdKVxuICB9XG5cbiAgY2hlY2tPdXRPZkJvdW5kcyA9IChwb3MpID0+IHtcbiAgICByZXR1cm4gdGhpcy53b3JsZC5jaGVja091dE9mQm91bmRzKHBvcywgdGhpcy5yYWRpdXMpXG4gIH1cblxuICBnZXRSYW5kb21Qb3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMud29ybGQuZ2V0UmFuZG9tUG9zKHRoaXMucmFkaXVzKVxuICB9XG4gIC8qKiBCb3VuY2Ugb2JqZWN0IGJhY2sgaWYgaXQgaGl0cyB0aGUgd2FsbCAqL1xuICBib3VuY2VCYWNrID0gKHBvcykgPT4ge1xuICAgIGNvbnN0IHsgYm91bmRzIH0gPSB0aGlzLndvcmxkLFxuICAgICAgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfSA9IGJvdW5kcyxcbiAgICAgIHIgPSB0aGlzLnJhZGl1c1xuXG4gICAgbGV0IHsgeCwgeSB9ID0gcG9zLFxuICAgICAgZHggPSB0aGlzLmN1cnJEaXJbMF0sXG4gICAgICBkeSA9IHRoaXMuY3VyckRpclsxXVxuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IubmFtZSA9PT0gJ0NoaWxkJykge1xuICAgICAgaWYgKHRoaXMudmVsLmR4ID4gMSB8fCB0aGlzLnZlbC5keSA+IDEpIHtcbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eSh7IGR4OiAxLCBkeTogMSB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoZHggPiAxKSB7XG4gICAgICAgIGR4ID0gZHggLyA1XG4gICAgICB9XG4gICAgICBpZiAoZHkgPiAxKSB7XG4gICAgICAgIGR5ID0gZHkgLyA1XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggKyByID4gcmlnaHQgfHwgeCAtIHIgPCBsZWZ0KSB7XG4gICAgICB0aGlzLnNldEN1cnJEaXIoWy1keCwgZHldKVxuICAgIH1cblxuICAgIGlmICh5IC0gciA8IHRvcCB8fCB5ICsgciA+IGJvdHRvbSkge1xuICAgICAgdGhpcy5zZXRDdXJyRGlyKFtkeCwgLWR5XSlcbiAgICB9XG4gICAgLy9vYmpzIGdldCBzdHVjayBpZiBwYXJhbGxlbCB0byB3YWxscyBhbmQgb3V0IG9mIGJvdW5kc1xuICAgIGxldCBuUG9zID0geyB4OiB4ICsgdGhpcy5jdXJyRGlyWzBdLCB5OiB5ICsgdGhpcy5jdXJyRGlyWzFdIH1cbiAgICBpZiAodGhpcy5jaGVja091dE9mQm91bmRzKG5Qb3MpKSB0aGlzLnNldFJhbmRvbURpcigpXG4gIH1cblxuICBjaGVja0luUmFuZ2Uob2JqLCBjdXNoaW9uID0gMCkge1xuICAgIC8vIE5vdGU6IG9iai5jb25zdHJ1Y3Rvci5uYW1lIHdvbid0IHdvcmsgd2l0aCBJRSBhbmQgdGhlcmUgYXJlIHNvbWUgY2F2ZWF0cy4gTW9yZSBpbmZvIC0tPiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9GdW5jdGlvbi9uYW1lXG5cbiAgICBjb25zdCBvUG9zID0gb2JqLnBvcyxcbiAgICAgIG9SID0gb2JqLnJhZGl1cyArIGN1c2hpb24sXG4gICAgICB7IHgsIHkgfSA9IHRoaXMucG9zLFxuICAgICAgcmFuZ2VYID0gW29Qb3MueCAtIG9SLCBvUG9zLnggKyBvUl0sXG4gICAgICByYW5nZVkgPSBbb1Bvcy55IC0gb1IsIG9Qb3MueSArIG9SXSxcbiAgICAgIHIgPSB0aGlzLnJhZGl1cyArIGN1c2hpb25cblxuICAgIGNvbnN0IHdpdGhpblJhbmdlID1cbiAgICAgIChpblJhbmdlKHggLSByLCAuLi5yYW5nZVgpIHx8IGluUmFuZ2UoeCArIHIsIC4uLnJhbmdlWCkpICYmXG4gICAgICAoaW5SYW5nZSh5IC0gciwgLi4ucmFuZ2VZKSB8fCBpblJhbmdlKHkgKyByLCAuLi5yYW5nZVkpKVxuXG4gICAgcmV0dXJuIHdpdGhpblJhbmdlXG4gIH1cblxuICAvLyBDYW4ndCB1c2UgQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1jbGFzcy1wcm9wZXJ0aWVzLiBzdXBlci5tb3ZlKCkgZG9lc24ndCB3b3JrIGluIHN1YmNsYXNzZXMuXG4gIGhpdHNQYXJlbnQob2JqKSB7fVxuXG4gIGhpdHNQcmVkYXRvcihvYmopIHt9XG5cbiAgaGl0c0NoaWxkKG9iaikge31cblxuICAvKiogRHJhdyB0aGUgb2JqZWN0IG9uIGNhbnZhcyAqL1xuICBkcmF3ID0gKGN0eCwgb2Zmc2V0ID0geyB4OiAwLCB5OiAwIH0pID0+IHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMucG9zXG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuc3ByaXRlLFxuICAgICAgeCAtIG9mZnNldC54LFxuICAgICAgeSAtIG9mZnNldC55LFxuICAgICAgdGhpcy5zaXplLndpZHRoLFxuICAgICAgdGhpcy5zaXplLmhlaWdodFxuICAgIClcbiAgfVxuXG4gIGNsaXBQb3MgPSAoeyB4LCB5IH0pID0+IHtcbiAgICBjb25zdCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9ID0gdGhpcy53b3JsZC5ib3VuZHMsXG4gICAgICByID0gdGhpcy5yYWRpdXNcblxuICAgIGNvbnN0IGNsaXBwZWRYID0geCA+IGxlZnQgKyByICYmIHggPCByaWdodCAtIHIgPyB4IDogdGhpcy5wb3MueCxcbiAgICAgIGNsaXBwZWRZID0geSA+IHRvcCArIHIgJiYgeSA8IGJvdHRvbSAtIHIgPyB5IDogdGhpcy5wb3MueVxuXG4gICAgcmV0dXJuIHsgeDogY2xpcHBlZFgsIHk6IGNsaXBwZWRZIH1cbiAgfVxuXG4gIG1vdmVzV2l0aEN1cnNvcihwb3MsIGVhc2luZywgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0gdGhpcy53b3JsZFxuICAgIGxldCB7IHgsIHkgfSA9IHBvc1xuXG4gICAgLy8gT2Zmc2V0cyB0byBhY2NvdW50IGZvciBtYXJnaW4sIHBhZGRpbmdzIGFyb3VuZCBnYW1lIHdvcmxkLlxuICAgIGNvbnN0IG9mZnNldEwgPSBvZmZzZXRzLmxlZnQsXG4gICAgICBvZmZzZXRUID0gb2Zmc2V0cy50b3AsXG4gICAgICByZWxhdGl2ZVggPSB4IC0gb2Zmc2V0TCxcbiAgICAgIHJlbGF0aXZlWSA9IHkgLSBvZmZzZXRUXG5cbiAgICBsZXQgeERpZmYgPSByZWxhdGl2ZVggLSB0aGlzLnBvcy54LFxuICAgICAgeURpZmYgPSByZWxhdGl2ZVkgLSB0aGlzLnBvcy55XG5cbiAgICAvLyBPZmZzZXQgY2hpbGRyZW4gc28gdGhleSBkb24ndCBhbGwgb3ZlcmxhcCB0aGUgcGFyZW50IHdoZW4gc3RhdGlvbmFyeSBvciBzbG93IG1vdmluZy5cbiAgICBpZiAoeURpZmYgPD0gMCkgeURpZmYgKz0gb2Zmc2V0XG4gICAgLy9Nb3JlIGluZm8gb24gdHdlZW5pbmcsIGFuaW1hdGlvbiAtLT4gaHR0cHM6Ly9zcGljeXlvZ2h1cnQuY29tL3R1dG9yaWFscy9odG1sNS1qYXZhc2NyaXB0LWdhbWUtZGV2ZWxvcG1lbnQvY3JlYXRlLWEtc21vb3RoLWNhbnZhcy1hbmltYXRpb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM3OTczNTc3LzExMjc5ODExXG4gICAgY29uc3QgdmVsWCA9IHhEaWZmICogZWFzaW5nLFxuICAgICAgdmVsWSA9IHlEaWZmICogZWFzaW5nXG5cbiAgICB0aGlzLnZlbG9jaXR5ID0geyB4OiB2ZWxYLCB5OiB2ZWxZIH1cblxuICAgIHggPSB0aGlzLnBvcy54ICsgdmVsWFxuICAgIHkgPSB0aGlzLnBvcy55ICsgdmVsWVxuXG4gICAgLy9Eb24ndCBsZXQgb2JqZWN0cyBwYXNzIGVkZ2VcbiAgICBjb25zdCBjbGlwcGVkUG9zID0gdGhpcy5jbGlwUG9zKHsgeCwgeSB9KVxuXG4gICAgdGhpcy5zZXRQb3MoY2xpcHBlZFBvcylcblxuICAgIC8vIENhY2hlIGxhc3QgNSBwb3NpdGlvbnMuIE1ha2VzIGNoaWxkcmVuJ3MgbW92ZW1lbnQgbW9yZSBuYXR1cmFsLlxuICAgIGNvbnN0IHBvc0NhY2hlID0gdGhpcy5wb3NDYWNoZVxuICAgIGlmIChwb3NDYWNoZS5sZW5ndGggPiA0KSBwb3NDYWNoZS5zaGlmdCgpXG4gICAgcG9zQ2FjaGUucHVzaChwb3MpXG4gICAgdGhpcy5zZXRQb3NDYWNoZShwb3NDYWNoZSlcbiAgfVxuXG4gIG1vdmVzKCkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zLFxuICAgICAgcG9zID0geyB4OiB4ICsgdGhpcy5jdXJyRGlyWzBdLCB5OiB5ICsgdGhpcy5jdXJyRGlyWzFdIH1cblxuICAgIGlmICh0aGlzLmNoZWNrT3V0T2ZCb3VuZHMocG9zKSkgdGhpcy5ib3VuY2VCYWNrKHBvcylcblxuICAgIHRoaXMuc2V0UG9zKHBvcylcbiAgfVxufVxuIiwiaW1wb3J0IHsgTGlua2VkTGlzdCB9IGZyb20gJ2RhdGFfc3RydWN0dXJlcydcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9Nb3ZpbmdPYmplY3QnXG5cbmNvbnN0IHIgPSAxMyxcbiAgYyA9ICcjNzI4MGY2JyxcbiAgZSA9IDFcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyZW50IGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcG9zLFxuICAgIHJhZGl1cyA9IHIsXG4gICAgd29ybGQsXG4gICAgY2hhaW4sXG4gICAgc2NvcmUsXG4gICAgZW5lcmd5LFxuICAgIHNwcml0ZSxcbiAgICBzaXplID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0sXG4gICAgY29sb3IgPSBjLFxuICAgIGVhc2luZyA9IGVcbiAgKSB7XG4gICAgc3VwZXIocG9zLCByYWRpdXMsIHdvcmxkLCBzcHJpdGUsIHNpemUsIG51bGwsIGNvbG9yKVxuICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgTGlua2VkTGlzdCgpXG4gICAgdGhpcy5jaGFpbiA9IGNoYWluXG4gICAgdGhpcy5zY29yZSA9IHNjb3JlXG4gICAgdGhpcy5lbmVyZ3kgPSBlbmVyZ3lcbiAgICB0aGlzLmVhc2luZyA9IGVhc2luZ1xuICAgIHRoaXMuY3VyclByZWRDb2xzID0gW11cbiAgICB0aGlzLnBvc0NhY2hlID0gW11cbiAgICB0aGlzLnNwcml0ZSA9IHNwcml0ZVxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICB0aGlzLm1vdmVzID0gdGhpcy5tb3Zlcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaXRzUHJlZGF0b3IgPSB0aGlzLmhpdHNQcmVkYXRvci5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaXRzQ2hpbGQgPSB0aGlzLmhpdHNDaGlsZC5iaW5kKHRoaXMpXG4gIH1cblxuICBzZXRDdXJyUHJlZENvbHMgPSAoY3VyclByZWRDb2xzKSA9PiB7XG4gICAgdGhpcy5jdXJyUHJlZENvbHMgPSBjdXJyUHJlZENvbHNcbiAgfVxuXG4gIGdldENoaWxkQ291bnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uc2l6ZVxuICB9XG5cbiAgZGVsZXRlTGFzdENoaWxkID0gKCkgPT4ge1xuICAgIGxldCBjdXJyID0gdGhpcy5jaGlsZHJlbi5kZWxldGVGcm9tVGFpbCgpXG4gICAgaWYgKGN1cnIpIHtcbiAgICAgIGN1cnIuc2V0Q2hhaW5Qb3MobnVsbClcbiAgICAgIGN1cnIuc2V0TmV4dENoaWxkKG51bGwpXG4gICAgICBjdXJyLnNldEluZGVwZW5kZW5jZSh0cnVlKVxuICAgICAgdGhpcy5jaGFpbi5kZWNyZW1lbnRDb3VudCgpXG4gICAgICBjdXJyLnNldFBhcmVudChudWxsKVxuICAgIH1cbiAgICByZXR1cm4gY3VyclxuICB9XG5cbiAgZGVzdHJveUNoaWxkID0gKGNoaWxkKSA9PiB7XG4gICAgdGhpcy5jaGlsZHJlbi5kZWxldGVOb2RlKGNoaWxkKVxuICB9XG5cbiAgYXBwZW5kQ2hpbGQgPSAoY2hpbGQpID0+IHtcbiAgICBpZiAoIXRoaXMuY2hpbGRyZW4uc2VhcmNoKGNoaWxkKSkge1xuICAgICAgdGhpcy5jaGFpbi5pbmNyZW1lbnRDb3VudCgpXG4gICAgICB0aGlzLnNjb3JlLmNhbGN1bGF0ZVNjb3JlKHRoaXMuZ2V0Q2hpbGRDb3VudCgpKVxuICAgICAgY29uc3QgdGFpbCA9IHRoaXMuY2hpbGRyZW4udGFpbCxcbiAgICAgICAgbGFzdENoaWxkID0gdGFpbCAmJiB0YWlsLnZhbFxuICAgICAgaWYgKGxhc3RDaGlsZCkgbGFzdENoaWxkLnNldE5leHRDaGlsZChjaGlsZClcblxuICAgICAgdGhpcy5jaGlsZHJlbi5hcHBlbmRUb1RhaWwoY2hpbGQpXG5cbiAgICAgIGNoaWxkLnNldENoYWluUG9zKHRoaXMuZ2V0Q2hpbGRDb3VudCgpKVxuICAgICAgY2hpbGQuc2V0UGFyZW50KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgY2hlY2tDb2xsaXNpb25XaXRoUHJlZGF0b3IgPSAocHJlZGF0b3IpID0+IHtcbiAgICBjb25zdCBjb2xsaWRlZCA9IHN1cGVyLmNoZWNrSW5SYW5nZShwcmVkYXRvciksXG4gICAgICBjb2xsaWRpbmcgPSB0aGlzLmN1cnJQcmVkQ29scy5pbmNsdWRlcyhwcmVkYXRvcilcblxuICAgIC8qIGlmIGNvbGxpZGVkIGFuZCBmaXJzdCBjb250YWN0LFxuICAgICAgYWRkIHByZWRhdG9yIHRvIHRoZSBjdXJyZW50IGNvbGxpc2lvbnMgd2l0aCBwcmVkYXRvcixcbiAgICAgIGNhbGwgY29sbGlkZSB3aXRoIHByZWRhdG9yIChkZWNyZW1lbnQgY2hhaW4gY291bnQpXG4gICAgKi9cbiAgICBpZiAoY29sbGlkZWQgJiYgIWNvbGxpZGluZykge1xuICAgICAgY29uc3QgY3VyclByZWRDb2xzID0gdGhpcy5jdXJyUHJlZENvbHMuc2xpY2UoKVxuICAgICAgY3VyclByZWRDb2xzLnB1c2gocHJlZGF0b3IpXG4gICAgICB0aGlzLnNldEN1cnJQcmVkQ29scyhjdXJyUHJlZENvbHMpXG4gICAgICB0aGlzLmhpdHNQcmVkYXRvcigpXG4gICAgfVxuXG4gICAgLyogaWYgd2FzIGNvbGxpZGluZyBhbmQgc3RvcHBlZCBjb2xsaWRpbmcsIHJlbW92ZSBwcmVkYXRvciBmcm9tIGN1cnJlbnQgY29sbGlzaW9ucyAqL1xuICAgIGlmICghY29sbGlkZWQgJiYgc3VwZXIuY2hlY2tJblJhbmdlKHByZWRhdG9yLCA1KSAmJiBjb2xsaWRpbmcpIHtcbiAgICAgIGNvbnN0IGN1cnJQcmVkQ29scyA9IHRoaXMuY3VyclByZWRDb2xzLnNsaWNlKCksXG4gICAgICAgIGluZGV4ID0gY3VyclByZWRDb2xzLmluZGV4T2YocHJlZGF0b3IpXG4gICAgICBjdXJyUHJlZENvbHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgdGhpcy5zZXRDdXJyUHJlZENvbHMoY3VyclByZWRDb2xzKVxuICAgIH1cbiAgfVxuXG4gIGhpdHNQcmVkYXRvcigpIHtcbiAgICB0aGlzLmNoYWluLnJlc2V0KClcbiAgICB0aGlzLmVuZXJneS5kZWNyZW1lbnRDb3VudCgpXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgY2hpbGQuc2V0UGFyZW50KG51bGwpXG4gICAgICBjaGlsZC5zZXRDaGFpblBvcyhudWxsKVxuICAgICAgY2hpbGQuc2V0TmV4dENoaWxkKG51bGwpXG4gICAgICBjaGlsZC5zZXRJbmRlcGVuZGVuY2UodHJ1ZSlcbiAgICAgIGNvbnN0IHZlbCA9IHsgZHg6IDMsIGR5OiAzIH1cbiAgICAgIGNoaWxkLnNldFZlbG9jaXR5KHZlbClcblxuICAgICAgY29uc3QgW3gsIHldID0gY2hpbGQuY3VyckRpcixcbiAgICAgICAgeyBkeCwgZHkgfSA9IHZlbFxuICAgICAgY2hpbGQuc2V0Q3VyckRpcihbeCAqIGR4LCB5ICogZHldKVxuICAgICAgY2hpbGQuc2V0UmFuZG9tRGlyKClcbiAgICB9XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3IExpbmtlZExpc3QoKVxuICB9XG5cbiAgaGl0c0NoaWxkKG9iaikge1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQob2JqKVxuICAgIG9iai5zZXRJbmRlcGVuZGVuY2UoZmFsc2UpXG4gIH1cblxuICBoaXRzV29ybShnYW1lLCB3b3JtKSB7XG4gICAgdGhpcy5lbmVyZ3kuaW5jcmVtZW50Q291bnQoKVxuICAgIGdhbWUuZGVzdHJveVdvcm0od29ybSlcbiAgfVxuXG4gIG1vdmVzKHBvcykge1xuICAgIHN1cGVyLm1vdmVzV2l0aEN1cnNvcihwb3MsIHRoaXMuZWFzaW5nKVxuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkcmVuLmhlYWQgJiYgdGhpcy5jaGlsZHJlbi5oZWFkLnZhbFxuXG4gICAgaWYgKGZpcnN0Q2hpbGQpXG4gICAgICBmaXJzdENoaWxkLm1vdmVzKHRoaXMucG9zQ2FjaGUubGVuZ3RoID8gdGhpcy5wb3NDYWNoZVswXSA6IHBvcylcbiAgfVxufVxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL01vdmluZ09iamVjdCdcblxuY29uc3QgciA9IDEwLFxuICBjID0gJyNmNjcyODAnLFxuICB2ID0geyBkeDogMi4yLCBkeTogMi4yIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlZGF0b3IgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwb3MsXG4gICAgcmFkaXVzID0gcixcbiAgICB3b3JsZCxcbiAgICBzcHJpdGUsXG4gICAgc2l6ZSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9LFxuICAgIHZlbCA9IHYsXG4gICAgY29sb3IgPSBjXG4gICkge1xuICAgIHN1cGVyKHBvcywgcmFkaXVzLCB3b3JsZCwgc3ByaXRlLCBzaXplLCB2ZWwsIGNvbG9yKVxuICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXkpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5zY29yZSA9IDBcbiAgICB0aGlzLmhpZ2hTY29yZSA9IDBcbiAgfVxuXG4gIHNldFNjb3JlID0gKHNjb3JlKSA9PiB7XG4gICAgdGhpcy5zY29yZSA9IHNjb3JlXG4gIH1cblxuICBzZXRIaWdoU2NvcmUgPSAoc2NvcmUpID0+IHtcbiAgICB0aGlzLmhpZ2hTY29yZSA9IHNjb3JlXG4gIH1cblxuICByZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFNjb3JlKDApXG4gICAgdGhpcy51cGRhdGVTY29yZSgpXG4gIH1cblxuICBjYWxjdWxhdGVTY29yZSA9IChjaGlsZENvdW50KSA9PiB7XG4gICAgbGV0IGNoYWluQ291bnQgPSAxICsgY2hpbGRDb3VudCAvL2NvdW50IHBhcmVudFxuICAgIGxldCBzY29yZVRvQWRkID0gY2hhaW5Db3VudCAqIGNoYWluQ291bnQgKiAxMFxuICAgIGNvbnN0IG5ld1Njb3JlID0gdGhpcy5zY29yZSArIHNjb3JlVG9BZGRcbiAgICB0aGlzLnNldFNjb3JlKG5ld1Njb3JlKVxuICAgIHRoaXMudXBkYXRlU2NvcmUoKVxuICB9XG5cbiAgY2FsY3VsYXRlSGlnaFNjb3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IGhpZ2hTY29yZSA9IE1hdGgubWF4KHRoaXMuc2NvcmUsIHRoaXMuaGlnaFNjb3JlKVxuICAgIHRoaXMuc2V0SGlnaFNjb3JlKGhpZ2hTY29yZSlcbiAgfVxuXG4gIHVwZGF0ZVNjb3JlID0gKCkgPT4ge1xuICAgIHRoaXMuZGlzcGxheS51cGRhdGVFbGVtZW50KCcjc2NvcmUnLCB0aGlzLnNjb3JlKVxuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZVNjb3JlKClcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tQmV0d2VlbiB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmxkIHtcbiAgY29uc3RydWN0b3IoZGlzcGxheSkge1xuICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXlcbiAgICB0aGlzLmNhbnZhcyA9IGRpc3BsYXkud29ybGRcbiAgICB0aGlzLnNpemUgPSB0aGlzLmRpc3BsYXkud29ybGRTaXplXG4gICAgdGhpcy5ib3VuZHMgPSB7IHRvcDogbnVsbCwgcmlnaHQ6IG51bGwsIGJvdHRvbTogbnVsbCwgcmlnaHQ6IG51bGwgfVxuICAgIHRoaXMub2Zmc2V0cyA9IHsgdG9wOiBudWxsLCBsZWZ0OiBudWxsIH1cbiAgfVxuXG4gIHNldEJvdW5kcyhib3VuZHMpIHtcbiAgICB0aGlzLmJvdW5kcyA9IGJvdW5kc1xuICB9XG5cbiAgc2V0T2Zmc2V0cyhvZmZzZXRzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0c1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IHRvcCA9IDAsXG4gICAgICBsZWZ0ID0gMCxcbiAgICAgIGJvdHRvbSA9IHRvcCArIHRoaXMuY2FudmFzLmhlaWdodCxcbiAgICAgIHJpZ2h0ID0gbGVmdCArIHRoaXMuY2FudmFzLndpZHRoXG5cbiAgICByZXR1cm4geyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfVxuICB9XG5cbiAgY2hlY2tPdXRPZkJvdW5kcyA9IChwb3MsIHIpID0+IHtcbiAgICBjb25zdCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9ID0gdGhpcy5ib3VuZHMsXG4gICAgICB7IHgsIHkgfSA9IHBvc1xuXG4gICAgaWYgKHggLSByIDwgbGVmdCkgcmV0dXJuIHRydWVcbiAgICBpZiAoeCArIHIgPiByaWdodCkgcmV0dXJuIHRydWVcbiAgICBpZiAoeSAtIHIgPCB0b3ApIHJldHVybiB0cnVlXG4gICAgaWYgKHkgKyByID4gYm90dG9tKSByZXR1cm4gdHJ1ZVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuY2FudmFzLm9mZnNldFRvcCxcbiAgICAgIGxlZnQgPSB0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0XG4gICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH1cbiAgfVxuXG4gIGdldFJhbmRvbVBvcyA9IChyYWRpdXMpID0+IHtcbiAgICBjb25zdCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9ID0gdGhpcy5ib3VuZHMsXG4gICAgICByID0gcmFkaXVzXG5cbiAgICBjb25zdCB4ID0gZ2V0UmFuZG9tQmV0d2VlbihsZWZ0ICsgciwgcmlnaHQgLSByKSxcbiAgICAgIHkgPSBnZXRSYW5kb21CZXR3ZWVuKHRvcCArIHIsIGJvdHRvbSAtIHIpXG5cbiAgICByZXR1cm4geyB4LCB5IH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IHRoaXMuZ2V0T2Zmc2V0cygpLFxuICAgICAgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKVxuXG4gICAgdGhpcy5zZXRPZmZzZXRzKG9mZnNldHMpXG4gICAgdGhpcy5zZXRCb3VuZHMoYm91bmRzKVxuICB9XG59XG4iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vTW92aW5nT2JqZWN0J1xuXG5jb25zdCByID0gMTAsXG4gIGMgPSAnIzkzNjM0NCcsXG4gIHYgPSB7IGR4OiAyLCBkeTogMiB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWxkIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcG9zLFxuICAgIHJhZGl1cyA9IHIsXG4gICAgd29ybGQsXG4gICAgc3ByaXRlLFxuICAgIHNpemUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSxcbiAgICB2ZWwgPSB2LFxuICAgIGNvbG9yID0gY1xuICApIHtcbiAgICBzdXBlcihwb3MsIHJhZGl1cywgd29ybGQsIHNwcml0ZSwgc2l6ZSwgdmVsLCBjb2xvcilcbiAgICB0aGlzLnNwcml0ZSA9IHNwcml0ZVxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICB0aGlzLm1vdmVzID0gdGhpcy5tb3Zlcy5iaW5kKHRoaXMpXG4gIH1cblxuICBtb3ZlcyhnYW1lKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MsXG4gICAgICBwb3MgPSB7IHg6IHggKyB0aGlzLmN1cnJEaXJbMF0sIHk6IHkgKyB0aGlzLmN1cnJEaXJbMV0gfVxuXG4gICAgaWYgKHRoaXMuY2hlY2tPdXRPZkJvdW5kcyhwb3MpKSB7XG4gICAgICBnYW1lLmRlc3Ryb3lXb3JtKHRoaXMpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRQb3MocG9zKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWM4OTVkMzcxMDc0Y2ZlMmQwMzEyNTc3ZmM3NjM1ZDMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkxNmJmOTE2NGI3MjMyODI0M2Y1N2UzOWIzNDYyZTMzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0OTE3NTA1NjdmMWFmYzIwNzdjNDZlMDE1ZWJlZmVhOC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDNkYzMzYWRlNGVhZDViODdhNjU5YWJjZTMyMzk2ODMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY5ZTYzY2RiNTE2ZmFkZDI1ZTY4ODU1Y2U5NWRiNDc3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyZTZkODg3NDIyOTVkMGVhOTVjZjEzZmQ5YTM4ODI3Zi5wbmdcIjsiLCJpbXBvcnQgRE9NRGlzcGxheSBmcm9tICcuL0RPTURpc3BsYXkuanMnXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnXG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShcbiAgbmV3IERPTURpc3BsYXkoe1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAvIDEuMixcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAvIDEuMixcbiAgfSlcbilcbmdhbWUuaW5pdCgpXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJmdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCkpXG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUJldHdlZW4obWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbilcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpXG4gIC8vIGluY2x1c2l2ZVxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5mdW5jdGlvbiBpblJhbmdlKG51bSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIG51bSA+PSBtaW4gJiYgbnVtIDw9IG1heFxufVxuXG4vLyBEaWRuJ3QgdXNlXG5mdW5jdGlvbiBjYWxjdWxhdGVIeXBvdGVudXNlKGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhhLCAyKSArIE1hdGgucG93KGIsIDIpKVxufVxuXG4vLyBEaWRuJ3QgdXNlXG5mdW5jdGlvbiBlYXNlTGluZWFyKHQsIGIsIGMsIGQpIHtcbiAgcmV0dXJuIChjICogdCkgLyBkICsgYlxufVxuZXhwb3J0IHsgZ2V0UmFuZG9tSW50LCBpblJhbmdlLCBnZXRSYW5kb21CZXR3ZWVuIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=