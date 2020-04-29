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

  var _count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  _classCallCheck(this, Chain);

  _defineProperty(this, "setCount", function (count) {
    _this.count = count;
  });

  _defineProperty(this, "reset", function () {
    _this.setCount(1);

    _this.updateChain();
  });

  _defineProperty(this, "incrementCount", function () {
    var count = Math.min(_this.count + 1, _this.max);

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
  this.max = max;
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
        var easing = Math.max(1 - this.chainPos * 0.13, 0.1),
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

  _defineProperty(this, "initChain", function (count) {
    var chain = new _Chain_js__WEBPACK_IMPORTED_MODULE_1__["default"](_this.display, count);
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
    console.log(_this.score.highScore);
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

    _this.initChain(1);

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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
          _this$currDir = _slicedToArray(_this.currDir, 2),
          dx = _this$currDir[0],
          dy = _this$currDir[1];

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
    e = 0.9;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRhX3N0cnVjdHVyZXMvZGlzdC9EYXRhU3RydWN0dXJlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9DaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRE9NRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRW5lcmd5LmpzIiwid2VicGFjazovLy8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9Nb3ZpbmdPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJlZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV29ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy9jaGlsZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ3MvY291bnQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWdzL2hlYXJ0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy9wYXJlbnQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWdzL3ByZWRhdG9yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy93b3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJDaGFpbiIsImRpc3BsYXkiLCJjb3VudCIsIm1heCIsInNldENvdW50IiwidXBkYXRlQ2hhaW4iLCJNYXRoIiwibWluIiwidXBkYXRlRWxlbWVudCIsInIiLCJjIiwidiIsImR4IiwiZHkiLCJDaGlsZCIsInBvcyIsInJhZGl1cyIsIndvcmxkIiwic3ByaXRlIiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidmVsIiwiY29sb3IiLCJwYXJlbnQiLCJjaGFpblBvcyIsImNoaWxkIiwibmV4dENoaWxkIiwiaW5kZXBlbmRlbmNlIiwieCIsInkiLCJjdXJyRGlyIiwic2V0UmFuZG9tRGlyIiwiYm91bmNlQmFjayIsInBvc0NhY2hlIiwibW92ZXMiLCJiaW5kIiwiaGl0c1ByZWRhdG9yIiwiZ2FtZSIsImlzSW5kZXBlbmRlbnQiLCJkZXN0cm95Q2hpbGQiLCJjdXJyIiwiZGVsZXRlTGFzdENoaWxkIiwiZWFzaW5nIiwib2Zmc2V0IiwibGVuZ3RoIiwiTW92aW5nT2JqZWN0IiwiRE9NRGlzcGxheSIsInNyYyIsImNsYXNzTmFtZSIsImlkIiwiaW1nIiwiSW1hZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0YWciLCJjb250ZW50IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsIm5hbWUiLCJpbm5lclRleHQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWwiLCJnZXRFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJoZWFkaW5nIiwiYXBwZW5kIiwid29ybGRXcmFwcGVyIiwibGVnZW5kIiwid29ybGRTaXplIiwic3R5bGUiLCJlbmVyZ3lXcmFwcGVyIiwidXBkYXRlRW5lcmd5QmFyIiwiY2hhaW5XcmFwcGVyIiwiY291bnRJbWciLCJjcmVhdGVJbWFnZSIsImNoaWxkQ291bnRJbWciLCJjaGFpbiIsInNjb3JlIiwiaGFuZGxlQ2xpY2tSZXBsYXkiLCJoaWdoU2NvcmUiLCJnYW1lRW5kV3JhcHBlciIsImdhbWVFbmQiLCJyZW5kZXJHYW1lT3Zlck1lc3NhZ2UiLCJyZW5kZXJFbmRTY29yZSIsInJlbmRlclJlcGxheUJ1dHRvbiIsInJlbW92ZUNoaWxkIiwibWVzc2FnZSIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbmRTY29yZVdyYXBwZXIiLCJlbmRTY29yZUxhYmVsIiwiZW5kU2NvcmUiLCJ0b1N0cmluZyIsImJlc3RTY29yZVdyYXBwZXIiLCJiZXN0U2NvcmVMYWJlbCIsImJlc3RTY29yZSIsImVXIiwiY2hpbGRFbGVtZW50Q291bnQiLCJpIiwiaGVhcnRGdWxsIiwiaGVhcnQiLCJFbmVyZ3kiLCJlbmVyZ3kiLCJ1cGRhdGVFbmVyZ3kiLCJDaGlsZFNwcml0ZSIsImNoaWxkSW1nIiwiUGFyZW50U3ByaXRlIiwicGFyZW50SW1hZ2UiLCJQcmVkYXRvclNwcml0ZSIsInByZWRhdG9ySW1hZ2UiLCJXb3JtU3ByaXRlIiwid29ybUltYWdlIiwiR2FtZSIsImNoaWxkQ291bnQiLCJwcmVkYXRvckNvdW50Iiwid29ybUNvdW50IiwiZSIsIm1vdXNlIiwiY2xpZW50WCIsImNsaWVudFkiLCJ3b3JtIiwid29ybXMiLCJkZWxldGVOb2RlIiwiY2hpbGRyZW4iLCJzcGF3bkNoaWxkcmVuIiwidG9BcnJheSIsInByZWRhdG9ycyIsImNoZWNrSW5SYW5nZSIsImhpdHNDaGlsZCIsInByZWRhdG9yIiwiYXZvaWRQcmVkYXRvciIsImNoZWNrQ29sbGlzaW9uV2l0aFByZWRhdG9yIiwiaGl0c1dvcm0iLCJpbmRlcGVuZGVudEMiLCJnZXRDaGlsZENvdW50IiwicmFuZG9tUG9zIiwiZ2V0UmFuZG9tUG9zIiwiYXBwZW5kVG9UYWlsIiwiUHJlZGF0b3IiLCJXb3JtIiwic3Bhd25QcmVkYXRvcnMiLCJpbml0aWFsUG9zIiwiUGFyZW50Iiwic3Bhd25Xb3JtcyIsImluaXQiLCJXb3JsZCIsIlNjb3JlIiwicmVzZXRHYW1lIiwiY2xlYXJHYW1lRW5kIiwicmVzZXQiLCJMaW5rZWRMaXN0IiwidGltZVNpbmNlV29ybSIsImluaXRXb3JsZCIsImluaXRDaGFpbiIsImluaXRQYXJlbnQiLCJpbml0Q2hpbGRyZW4iLCJpbml0UHJlZGF0b3JzIiwiaW5pdFdvcm1zIiwiYW5pbWF0aW9uUmVxIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNvbnNvbGUiLCJsb2ciLCJjYWxjdWxhdGVIaWdoU2NvcmUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbmRlckdhbWVFbmQiLCJyZXBsYXlHYW1lIiwidGltZXN0YW1wIiwiZ2FtZU92ZXIiLCJ0aW1lUGFzc2VkIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsInJlbmRlckdhbWUiLCJyZW5kZXJUaXRsZSIsInJlbmRlcldvcmxkIiwicmVuZGVyU2NvcmUiLCJyZW5kZXJDaGFpbiIsInJlbmRlckVuZXJneSIsImhhbmRsZU1vdXNlTW92ZSIsImluaXRFbmVyZ3kiLCJpbml0U2NvcmUiLCJkaXIiLCJpbmRleCIsImdldFJhbmRvbUludCIsInBvc3NpYmxlRGlyZWN0aW9ucyIsInNldEN1cnJEaXIiLCJjaGVja091dE9mQm91bmRzIiwiYm91bmRzIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiblBvcyIsImRyYXdJbWFnZSIsImNsaXBwZWRYIiwiY2xpcHBlZFkiLCJtb3Zlc1dpdGhDdXJzb3IiLCJoaXRzUGFyZW50Iiwib2JqIiwiY3VzaGlvbiIsIm9Qb3MiLCJvUiIsInJhbmdlWCIsInJhbmdlWSIsIndpdGhpblJhbmdlIiwiaW5SYW5nZSIsIm9mZnNldHMiLCJvZmZzZXRMIiwib2Zmc2V0VCIsInJlbGF0aXZlWCIsInJlbGF0aXZlWSIsInhEaWZmIiwieURpZmYiLCJ2ZWxYIiwidmVsWSIsInZlbG9jaXR5IiwiY2xpcHBlZFBvcyIsImNsaXBQb3MiLCJzZXRQb3MiLCJzaGlmdCIsInB1c2giLCJzZXRQb3NDYWNoZSIsImN1cnJQcmVkQ29scyIsImRlbGV0ZUZyb21UYWlsIiwic2V0Q2hhaW5Qb3MiLCJzZXROZXh0Q2hpbGQiLCJzZXRJbmRlcGVuZGVuY2UiLCJkZWNyZW1lbnRDb3VudCIsInNldFBhcmVudCIsInNlYXJjaCIsImluY3JlbWVudENvdW50IiwiY2FsY3VsYXRlU2NvcmUiLCJ0YWlsIiwibGFzdENoaWxkIiwiY29sbGlkZWQiLCJjb2xsaWRpbmciLCJpbmNsdWRlcyIsInNsaWNlIiwic2V0Q3VyclByZWRDb2xzIiwiaW5kZXhPZiIsInNwbGljZSIsImRlc3Ryb3lXb3JtIiwiZmlyc3RDaGlsZCIsImhlYWQiLCJzZXRTY29yZSIsInVwZGF0ZVNjb3JlIiwiY2hhaW5Db3VudCIsInNjb3JlVG9BZGQiLCJuZXdTY29yZSIsInNldEhpZ2hTY29yZSIsImdldFJhbmRvbUJldHdlZW4iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwiZ2V0T2Zmc2V0cyIsImdldEJvdW5kcyIsInNldE9mZnNldHMiLCJzZXRCb3VuZHMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJmbG9vciIsInJhbmRvbSIsImNlaWwiLCJudW0iLCJjYWxjdWxhdGVIeXBvdGVudXNlIiwiYSIsImIiLCJzcXJ0IiwicG93IiwiZWFzZUxpbmVhciIsInQiLCJkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztR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RUFBWSxDQUFaLElBQWlCNVEsSUFBSSxDQUFDK1EsR0FBTCxDQUFTRixDQUFULEVBQVksQ0FBWixDQUEzQixDQUFQO0FBQ0QsQyxDQUVEOzs7QUFDQSxTQUFTRyxVQUFULENBQW9CQyxDQUFwQixFQUF1QkosQ0FBdkIsRUFBMEJ6USxDQUExQixFQUE2QjhRLENBQTdCLEVBQWdDO0FBQzlCLFNBQVE5USxDQUFDLEdBQUc2USxDQUFMLEdBQVVDLENBQVYsR0FBY0wsQ0FBckI7QUFDRCIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2Nob29sYmVsbCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5idXR0b24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdTY2hvb2xiZWxsJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uLmJ0biB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmdhbWUge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi50aXRsZSBoMSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW46IDMycHg7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbn1cXG5cXG4ud29ybGQtd3JhcHBlciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmxlZ2VuZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDk4cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubGVnZW5kID4gZGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ubGVnZW5kLXRleHQge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxufVxcblxcbmRpdi5jaGFpbi13cmFwcGVyIHtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uY2hhaW4td3JhcHBlciAuaW1hZ2UjY2hhaW4tY291bnQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmNoYWluLXdyYXBwZXIgLmNoYWluIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jd29ybGQge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAyNTUsIDE5NCk7XFxufVxcblxcbi5oZWFydC1mdWxsIHtcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAxcyBlYXNlO1xcbn1cXG5cXG4uZW5kLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzNSU7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmdhbWUtZW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMzBweCA4MHB4O1xcbn1cXG4uZ2FtZS1lbmQgZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmdhbWUtZW5kID4gLndyYXBwZXIgPiAuc2NvcmUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNCk7XFxuICB9XFxuXFxuICAyNSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblxcbi8qIC5yZXBsYXktd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn0gKi9cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRGF0YVN0cnVjdHVyZXNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRGF0YVN0cnVjdHVyZXNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL3NyYy9CaW5hcnlIZWFwL01heEJpbmFyeUhlYXAuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0JpbmFyeUhlYXAvTWF4QmluYXJ5SGVhcC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcXFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XFxuXFxudmFyIE1heEJpbmFyeUhlYXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgZnVuY3Rpb24gTWF4QmluYXJ5SGVhcCgpIHtcXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1heEJpbmFyeUhlYXApO1xcblxcbiAgICBfY29udGVudC5zZXQodGhpcywge1xcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgfSk7XFxuXFxuICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfY29udGVudCwgW10pO1xcbiAgfVxcblxcbiAgX2NyZWF0ZUNsYXNzKE1heEJpbmFyeUhlYXAsIFt7XFxuICAgIGtleTogXFxcIl9zd2FwXFxcIixcXG4gICAgLy8gX21ldGhvZHMgYXJlIGhlbHBlcnMuIENoYW5nZSB0byBwcml2YXRlIHdoZW4gcHJpdmF0ZSBpbnN0YW5jZSBtZXRob2RzIGFyZSBzdXBwb3J0ZWRcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zd2FwKGksIGopIHtcXG4gICAgICB2YXIgdGVtcCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV07XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXSA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbal07XFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtqXSA9IHRlbXA7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiX2J1YmJsZVVwXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9idWJibGVVcChpKSB7XFxuICAgICAgdmFyIGVsZW1lbnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldO1xcblxcbiAgICAgIHdoaWxlIChpID4gMCkge1xcbiAgICAgICAgdmFyIHAgPSBNYXRoLmZsb29yKChpIC0gMSkgLyAyKSxcXG4gICAgICAgICAgICBwYXJlbnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW3BdO1xcblxcbiAgICAgICAgaWYgKGVsZW1lbnQgPiBwYXJlbnQpIHtcXG4gICAgICAgICAgdGhpcy5fc3dhcChwLCBpKTtcXG5cXG4gICAgICAgICAgaSA9IHA7XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICBicmVhaztcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiX3NpbmtEb3duXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zaW5rRG93bihwKSB7XFxuICAgICAgdmFyIGVsZW1lbnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW3BdLFxcbiAgICAgICAgICBsYXN0SW5kZXggPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCAtIDE7XFxuXFxuICAgICAgd2hpbGUgKHAgPCBsYXN0SW5kZXgpIHtcXG4gICAgICAgIHZhciByID0gMiAqIHAgKyAyLFxcbiAgICAgICAgICAgIGwgPSByIC0gMTtcXG4gICAgICAgIHZhciBzd2FwSW5kZXggPSBudWxsLFxcbiAgICAgICAgICAgIGxlZnQgPSB2b2lkIDAsXFxuICAgICAgICAgICAgcmlnaHQgPSB2b2lkIDAsXFxuICAgICAgICAgICAgbWluID0gZWxlbWVudDtcXG5cXG4gICAgICAgIGlmIChsIDw9IGxhc3RJbmRleCkge1xcbiAgICAgICAgICBsZWZ0ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtsXTtcXG4gICAgICAgICAgaWYgKGxlZnQgPiBlbGVtZW50KSBzd2FwSW5kZXggPSBsO1xcbiAgICAgICAgICBtaW4gPSBsZWZ0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaWYgKHIgPD0gbGFzdEluZGV4KSB7XFxuICAgICAgICAgIHJpZ2h0ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtyXTtcXG4gICAgICAgICAgaWYgKHJpZ2h0ID4gbWluKSBzd2FwSW5kZXggPSByO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaWYgKHN3YXBJbmRleCA9PSBudWxsKSBicmVhaztcXG5cXG4gICAgICAgIHRoaXMuX3N3YXAocCwgc3dhcEluZGV4KTtcXG5cXG4gICAgICAgIHAgPSBzd2FwSW5kZXg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInByaW50TWF4SGVhcFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludE1heEhlYXAoKSB7XFxuICAgICAgY29uc29sZS5sb2coX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KSk7XFxuICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiaW5zZXJ0XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydChlbGVtZW50KSB7XFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wdXNoKGVsZW1lbnQpO1xcblxcbiAgICAgIHRoaXMuX2J1YmJsZVVwKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIC0gMSk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiZXh0cmFjdE1heFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0TWF4KCkge1xcbiAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCA8PSAwKSByZXR1cm4gbnVsbDtcXG4gICAgICB2YXIgbGFzdEluZGV4ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxLFxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMDtcXG4gICAgICBpZiAoZmlyc3RJbmRleCAhPT0gbGFzdEluZGV4KSB0aGlzLl9zd2FwKGZpcnN0SW5kZXgsIGxhc3RJbmRleCk7XFxuXFxuICAgICAgdmFyIHJlc3VsdCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucG9wKCk7XFxuXFxuICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoID4gMCkge1xcbiAgICAgICAgdGhpcy5fc2lua0Rvd24oMCk7XFxuICAgICAgfVxcblxcbiAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwicmVtb3ZlXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50KSB7XFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xcbiAgICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV0gIT09IGVsZW1lbnQpIGNvbnRpbnVlO1xcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHRoaXMuc2l6ZSAtIDE7XFxuXFxuICAgICAgICBpZiAoaSA9PT0gbGFzdEluZGV4KSB7XFxuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucG9wKCk7XFxuXFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGhpcy5fc3dhcChpLCBsYXN0SW5kZXgpO1xcblxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wb3AoKTtcXG5cXG4gICAgICAgIHRoaXMuX2J1YmJsZVVwKGkpO1xcblxcbiAgICAgICAgdGhpcy5fc2lua0Rvd24oaSk7XFxuXFxuICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwic2l6ZVxcXCIsXFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aDtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJtYXhcXFwiLFxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICByZXR1cm4gdGhpcy5zaXplID8gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVswXSA6IG51bGw7XFxuICAgIH1cXG4gIH1dKTtcXG5cXG4gIHJldHVybiBNYXhCaW5hcnlIZWFwO1xcbn0oKTtcXG5cXG52YXIgX2NvbnRlbnQgPSBuZXcgV2Vha01hcCgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gTWF4QmluYXJ5SGVhcDtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9CaW5hcnlIZWFwL01heEJpbmFyeUhlYXAuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9CaW5hcnlIZWFwL01pbkJpbmFyeUhlYXAuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0JpbmFyeUhlYXAvTWluQmluYXJ5SGVhcC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcXFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XFxuXFxuLy8gaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1XQ20zVHFTY0JNOFxcbi8vIEFueSBub2RlIGhhcyBhIHZhbHVlIGF0IGxlYXN0IGFzIHNtYWxsIGFzIHRoZSB2YWx1ZXMgaW4gdGhhdCBub2RlJ3MgY2hpbGRyZW4uXFxuLy8gU291cmNlOiBodHRwczovL2Vsb3F1ZW50amF2YXNjcmlwdC5uZXQvMXN0X2VkaXRpb24vYXBwZW5kaXgyLmh0bWxcXG52YXIgTWluQmluYXJ5SGVhcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICBmdW5jdGlvbiBNaW5CaW5hcnlIZWFwKCkge1xcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWluQmluYXJ5SGVhcCk7XFxuXFxuICAgIF9jb250ZW50LnNldCh0aGlzLCB7XFxuICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICB9KTtcXG5cXG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9jb250ZW50LCBbXSk7XFxuICB9XFxuXFxuICBfY3JlYXRlQ2xhc3MoTWluQmluYXJ5SGVhcCwgW3tcXG4gICAga2V5OiBcXFwiX3N3YXBcXFwiLFxcbiAgICAvLyBfbWV0aG9kcyBhcmUgaGVscGVycy4gQ2hhbmdlIHRvIHByaXZhdGUgd2hlbiBwcml2YXRlIGluc3RhbmNlIG1ldGhvZHMgYXJlIHN1cHBvcnRlZFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3N3YXAoaSwgaikge1xcbiAgICAgIHZhciB0ZW1wID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtqXTtcXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2pdID0gdGVtcDtcXG4gICAgfVxcbiAgICAvKiBidWJibGVVcCBcXG4gICAgICAxLiBDb21wYXJlIGl0ZW0gdG8gcGFyZW50IGFuZCBjaGVjayBpZiBpdCdzIGxlc3MgdGhhbiBwYXJlbnQuIFxcbiAgICAgIDIuIElmIGl0IGlzIGxlc3MgdGhhbiBwYXJlbnQsIHN3YXAgaXQuIFxcbiAgICAgIDMuIE5vdywgY29tcGFyZSB0byB0aGUgbmV3IHBhcmVudCBhbmQga2VlcCBzd2FwcGluZyB1bnRpbCBpdCBlaXRoZXIgcmVhY2hlcyB0aGUgdG9wIG9mIHRoZSBoZWFwIG9yIGl0IGlzID49IHBhcmVudC4gXFxuICAgICovXFxuXFxuICB9LCB7XFxuICAgIGtleTogXFxcIl9idWJibGVVcFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYnViYmxlVXAoaSkge1xcbiAgICAgIHZhciBlbGVtZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXTtcXG4gICAgICAvKiBcXG4gICAgICAgIGluZGV4aW5nIGZyb20gMFxcbiAgICAgICAgcCBpcyB0aGUgaW5kZXggb2YgdGhlIHBhcmVudFxcbiAgICAgICAgaSBpcyB0aGUgaW5kZXggb2YgZWl0aGVyIGxlZnQgb3IgcmlnaHQgY2hpbGRcXG4gICAgICAgIGwgaXMgaW5kZXggb2YgbGVmdCBjaGlsZFxcbiAgICAgICAgciBpcyB0aGUgaW5kZXggb2YgdGhlIHJpZ2h0IGNoaWxkXFxuICAgICAgICAgbCA9IDJwICsgMVxcbiAgICAgICAgciA9IDJwICsgMlxcbiAgICAgICAgcCA9IE1hdGguZmxvb3IoKGktMSkvMilcXG4gICAgICAgKi9cXG5cXG5cXG4gICAgICB3aGlsZSAoaSA+IDApIHtcXG4gICAgICAgIHZhciBwID0gTWF0aC5mbG9vcigoaSAtIDEpIC8gMiksXFxuICAgICAgICAgICAgcGFyZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtwXTtcXG5cXG4gICAgICAgIGlmIChlbGVtZW50IDwgcGFyZW50KSB7XFxuICAgICAgICAgIHRoaXMuX3N3YXAocCwgaSk7IC8vIG1ha2Ugc3VyZSB0byBjaGFuZ2UgaW5kZXggdG8gdGhhdCBvZiBwYXJlbnQgYWZ0ZXIgc3dhcHBpbmdcXG5cXG5cXG4gICAgICAgICAgaSA9IHA7XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICBicmVhaztcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiX3NpbmtEb3duXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zaW5rRG93bihwKSB7XFxuICAgICAgdmFyIGVsZW1lbnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW3BdLFxcbiAgICAgICAgICBsYXN0SW5kZXggPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCAtIDE7XFxuXFxuICAgICAgd2hpbGUgKHAgPCBsYXN0SW5kZXgpIHtcXG4gICAgICAgIC8vIEluZm8gaW4gZ2V0dGluZyBpbmRleCBpbiBidWJibGVVcFxcbiAgICAgICAgdmFyIHIgPSAyICogcCArIDIsXFxuICAgICAgICAgICAgbCA9IHIgLSAxOyAvL09yIDIgKiBwICsgMVxcblxcbiAgICAgICAgdmFyIHN3YXBJbmRleCA9IG51bGwsXFxuICAgICAgICAgICAgbGVmdCA9IHZvaWQgMCxcXG4gICAgICAgICAgICByaWdodCA9IHZvaWQgMCxcXG4gICAgICAgICAgICBtaW4gPSBlbGVtZW50OyAvL3N0YXJ0IG91dCBhc3N1bWluZyB0aGUgbWluIGJldHdlZW4gbGVmdCwgcmlnaHQsIGVsZW1lbnQgaXMgdGhlIGVsZW1lbnRcXG4gICAgICAgIC8vIGlmIGVsZW1lbnQgaGFzIGxlZnQgY2hpbGQsIGNvbXBhcmVcXG4gICAgICAgIC8vIGlmIGxlZnQgY2hpbGQgPCBlbGVtZW50LCBzZXQgc3dhcEluZGV4IHRvIHRoZSBsZWZ0IGluZGV4IChsKSBhbmQgbWluIHRvIGxlZnRcXG5cXG4gICAgICAgIGlmIChsIDw9IGxhc3RJbmRleCkge1xcbiAgICAgICAgICBsZWZ0ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtsXTtcXG4gICAgICAgICAgaWYgKGxlZnQgPCBlbGVtZW50KSBzd2FwSW5kZXggPSBsO1xcbiAgICAgICAgICBtaW4gPSBsZWZ0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaWYgKHIgPD0gbGFzdEluZGV4KSB7XFxuICAgICAgICAgIHJpZ2h0ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtyXTsgLy8gY29tcGFyZSB0aGUgcmlnaHQgdG8gdGhlIG1pbiBzbyBmYXIgdG8gbWFrZSBzdXJlIHRoZSBtaW4gb2YgdGhlIHRocmVlIGl0ZW1zIGdldHMgYnViYmxlZCB1cCB3aGlsZSB0aGUgcGFyZW50IGdldHMgc3Vua1xcblxcbiAgICAgICAgICBpZiAocmlnaHQgPCBtaW4pIHN3YXBJbmRleCA9IHI7XFxuICAgICAgICB9IC8vIHBhcmVudCBpcyBzbWFsbGVyIHRoYW4gYm90aCBsZWZ0IGFuZCByaWdodCBjaGlsZCBzbyBicmVha1xcblxcblxcbiAgICAgICAgaWYgKHN3YXBJbmRleCA9PSBudWxsKSBicmVhaztcXG5cXG4gICAgICAgIHRoaXMuX3N3YXAocCwgc3dhcEluZGV4KTsgLy8gc2V0IHRoZSBwYXJlbnQgaW5kZXggdG8gdGhlIHN3YXAgaW5kZXggc28gaXQgd2lsbCBjb250aW51ZSB0byBzaW5rIGRvd25cXG5cXG5cXG4gICAgICAgIHAgPSBzd2FwSW5kZXg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInByaW50TWluSGVhcFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludE1pbkhlYXAoKSB7XFxuICAgICAgY29uc29sZS5sb2coX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KSk7XFxuICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCk7XFxuICAgIH1cXG4gICAgLyogaW5zZXJ0XFxuICAgICAgMS4gaW5zZXJ0IG5ldyBpdGVtIGludG8gdGhpcy4jY29udGVudFxcbiAgICAgIDIuIGJ1YmJsZSBpdCB1cCBcXG4gICAgICAqL1xcblxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJpbnNlcnRcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0KGVsZW1lbnQpIHtcXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnB1c2goZWxlbWVudCk7XFxuXFxuICAgICAgdGhpcy5fYnViYmxlVXAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxKTtcXG4gICAgfVxcbiAgICAvKiBleHRyYWN0TWluXFxuICAgICAgMS4gc3dhcCBmaXJzdCBhbmQgbGFzdCBpdGVtcyBpZiB0aGlzLiNjb250ZW50Lmxlbmd0aCA+IDEgKG9yIGZpcnN0ICE9PSBsYXN0KVxcbiAgICAgIDIuIHBvcCBvdXQgbGFzdCBpdGVtIG9mIGFycmF5IGFuZCBzYXZlIGl0IGluIHJlc3VsdFxcbiAgICAgIDMuIElmIGxlbmd0aCBpcyBtb3JlIHRoYW4gb25lLCBidWJibGUgdGhlIGZpcnN0IGl0ZW0gZG93blxcbiAgICAgIDQuIFJldHVybiB0aGUgcmVzdWx0IHRoYXQgd2FzIHNhdmVkIFxcbiAgICAgICovXFxuXFxuICB9LCB7XFxuICAgIGtleTogXFxcImV4dHJhY3RNaW5cXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdE1pbigpIHtcXG4gICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggPD0gMCkgcmV0dXJuIG51bGw7IC8vcmV0dXJuIG51bGwgaWYgYXJyYXkgaXMgZW1wdHlcXG5cXG4gICAgICB2YXIgbGFzdEluZGV4ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxLFxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMDtcXG4gICAgICBpZiAoZmlyc3RJbmRleCAhPT0gbGFzdEluZGV4KSB0aGlzLl9zd2FwKGZpcnN0SW5kZXgsIGxhc3RJbmRleCk7XFxuXFxuICAgICAgdmFyIHJlc3VsdCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucG9wKCk7XFxuXFxuICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoID4gMCkge1xcbiAgICAgICAgdGhpcy5fc2lua0Rvd24oMCk7XFxuICAgICAgfVxcblxcbiAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwicmVtb3ZlXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50KSB7XFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xcbiAgICAgICAgLy8gaWYgY3VyciBpdGVtIGRvZXNuJ3QgbWF0Y2ggdGhlIGVsZW1lbnQgdG8gcmVtb3ZlLCBjb250aW51ZSBzZWFyY2hpbmdcXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldICE9PSBlbGVtZW50KSBjb250aW51ZTsgLy8gaWYgaXQgZG9lcyBtYXRjaFxcblxcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHRoaXMuc2l6ZSAtIDE7IC8vIGlmIGl0J3MgdGhlIGxhc3QgaXRlbSwgcG9wIGl0IGFuZCBicmVha1xcblxcbiAgICAgICAgaWYgKGkgPT09IGxhc3RJbmRleCkge1xcbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnBvcCgpO1xcblxcbiAgICAgICAgICBicmVhaztcXG4gICAgICAgIH0gLy8gaWYgaXQncyBub3QgdGhlIGxhc3QgaXRlbVxcbiAgICAgICAgLy8gIDEuIHN3YXAgaXQgd2l0aCB0aGUgbGFzdCBpdGVtXFxuICAgICAgICAvLyAgMi4gcG9wIHRoZSBzd2FwcGVkIGxhc3QgaXRlbVxcbiAgICAgICAgLy8gIDMuIFRoZW4gY2FsbCBidWJibGVVcCBhbmQgc2lua0Rvd24uXFxuXFxuXFxuICAgICAgICB0aGlzLl9zd2FwKGksIGxhc3RJbmRleCk7XFxuXFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnBvcCgpO1xcblxcbiAgICAgICAgdGhpcy5fYnViYmxlVXAoaSk7XFxuXFxuICAgICAgICB0aGlzLl9zaW5rRG93bihpKTtcXG5cXG4gICAgICAgIGJyZWFrO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJzaXplXFxcIixcXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcIm1pblxcXCIsXFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgIHJldHVybiB0aGlzLnNpemUgPyBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpWzBdIDogbnVsbDtcXG4gICAgfVxcbiAgfV0pO1xcblxcbiAgcmV0dXJuIE1pbkJpbmFyeUhlYXA7XFxufSgpO1xcblxcbnZhciBfY29udGVudCA9IG5ldyBXZWFrTWFwKCk7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBNaW5CaW5hcnlIZWFwO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0JpbmFyeUhlYXAvTWluQmluYXJ5SGVhcC5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0JpbmFyeUhlYXAvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9CaW5hcnlIZWFwL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXZhbChcInZhciBNaW5CaW5hcnlIZWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NaW5CaW5hcnlIZWFwICovIFxcXCIuL3NyYy9CaW5hcnlIZWFwL01pbkJpbmFyeUhlYXAuanNcXFwiKTtcXG5cXG52YXIgTWF4QmluYXJ5SGVhcCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTWF4QmluYXJ5SGVhcCAqLyBcXFwiLi9zcmMvQmluYXJ5SGVhcC9NYXhCaW5hcnlIZWFwLmpzXFxcIik7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSB7XFxuICBNaW5CaW5hcnlIZWFwOiBNaW5CaW5hcnlIZWFwLFxcbiAgTWF4QmluYXJ5SGVhcDogTWF4QmluYXJ5SGVhcFxcbn07XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvQmluYXJ5SGVhcC9pbmRleC5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0JpbmFyeVNlYXJjaFRyZWUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9CaW5hcnlTZWFyY2hUcmVlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXZhbChcImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcXFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9CaW5hcnlUcmVlVHJhdmVyc2FsICovIFxcXCIuL3NyYy9CaW5hcnlUcmVlVHJhdmVyc2FsLmpzXFxcIiksXFxuICAgIEJGUyA9IF9yZXF1aXJlLkJGUyxcXG4gICAgREZTSXRlcmF0aXZlID0gX3JlcXVpcmUuREZTSXRlcmF0aXZlO1xcblxcbnZhciBCaW5hcnlTZWFyY2hUcmVlID0gZnVuY3Rpb24gKCkge1xcbiAgdmFyIGZpbmRNaW5Ob2RlID0gZnVuY3Rpb24gZmluZE1pbk5vZGUobm9kZSkge1xcbiAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSByZXR1cm4gbm9kZTtlbHNlIHJldHVybiBmaW5kTWluTm9kZShub2RlLmxlZnQpO1xcbiAgfTtcXG5cXG4gIHZhciBUcmVlTm9kZSA9IGZ1bmN0aW9uIFRyZWVOb2RlKHZhbCkge1xcbiAgICB2YXIgbGVmdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcXG4gICAgdmFyIHJpZ2h0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xcblxcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJlZU5vZGUpO1xcblxcbiAgICB0aGlzLnZhbCA9IHZhbDtcXG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xcbiAgfTtcXG5cXG4gIHZhciBCaW5hcnlTZWFyY2hUcmVlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gICAgZnVuY3Rpb24gQmluYXJ5U2VhcmNoVHJlZSgpIHtcXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmluYXJ5U2VhcmNoVHJlZSk7XFxuXFxuICAgICAgX3Jvb3Quc2V0KHRoaXMsIHtcXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICAgIH0pO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfcm9vdCwgbnVsbCk7XFxuICAgIH1cXG5cXG4gICAgX2NyZWF0ZUNsYXNzKEJpbmFyeVNlYXJjaFRyZWUsIFt7XFxuICAgICAga2V5OiBcXFwiaW5zZXJ0XFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0KHZhbCkge1xcbiAgICAgICAgdmFyIHJlY3Vyc2l2ZUluc2VydE5vZGUgPSBmdW5jdGlvbiByZWN1cnNpdmVJbnNlcnROb2RlKG5vZGUsIG5ld05vZGUpIHtcXG4gICAgICAgICAgaWYgKG5ld05vZGUudmFsIDwgbm9kZS52YWwpIHtcXG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSBub2RlLmxlZnQgPSBuZXdOb2RlO2Vsc2UgcmVjdXJzaXZlSW5zZXJ0Tm9kZShub2RlLmxlZnQsIG5ld05vZGUpO1xcbiAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0ID09PSBudWxsKSBub2RlLnJpZ2h0ID0gbmV3Tm9kZTtlbHNlIHJlY3Vyc2l2ZUluc2VydE5vZGUobm9kZS5yaWdodCwgbmV3Tm9kZSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH07XFxuXFxuICAgICAgICB2YXIgbmV3Tm9kZSA9IG5ldyBUcmVlTm9kZSh2YWwpO1xcbiAgICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCkgPT09IG51bGwpIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfcm9vdCwgbmV3Tm9kZSk7ZWxzZSByZWN1cnNpdmVJbnNlcnROb2RlKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCksIG5ld05vZGUpO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInJlbW92ZVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSh2YWwpIHtcXG4gICAgICAgIHZhciByZW1vdmVOb2RlID0gZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlLCB2YWwpIHtcXG4gICAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHJldHVybiBudWxsO1xcblxcbiAgICAgICAgICBpZiAodmFsIDwgbm9kZS52YWwpIHtcXG4gICAgICAgICAgICBub2RlLmxlZnQgPSByZW1vdmVOb2RlKG5vZGUubGVmdCwgdmFsKTtcXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBpZiAodmFsID4gbm9kZS52YWwpIHtcXG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gcmVtb3ZlTm9kZShub2RlLnJpZ2h0LCB2YWwpO1xcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xcbiAgICAgICAgICB9IC8vIElmIHZhbCBtYXRjaGVzIG5vZGUudmFsXFxuXFxuXFxuICAgICAgICAgIGlmICh2YWwgPT09IG5vZGUudmFsKSB7XFxuICAgICAgICAgICAgLy8gaWYgbm9kZSB0byBkZWxldGUgZG9lc24ndCBoYXZlIGFueSBjaGlsZHJlblxcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkge1xcbiAgICAgICAgICAgICAgbm9kZSA9IG51bGw7XFxuICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcXG4gICAgICAgICAgICB9IC8vIGlmIG5vZGUgdG8gZGVsZXRlIGhhcyBvbmUgcmlnaHQgY2hpbGRcXG5cXG5cXG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XFxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcXG4gICAgICAgICAgICAgIHJldHVybiBub2RlO1xcbiAgICAgICAgICAgIH0gLy8gaWYgbm9kZSB0byBkZWxldGUgaGFzIG9uZSBsZWZ0IGNoaWxkXFxuXFxuXFxuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQgPT09IG51bGwpIHtcXG4gICAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnQ7XFxuICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcXG4gICAgICAgICAgICB9IC8vIERlbGV0aW5nIG5vZGUgd2l0aCB0d28gY2hpbGRyZW5cXG4gICAgICAgICAgICAvLyBmaW5kIG1pbiBub2RlIGluIHJpZ2h0IHN1YnRyZWUuIFRoaXMgd2lsbCBiZSBhIHRlcm1pbmFsIG5vZGVcXG4gICAgICAgICAgICAvLyB0cmF2ZXJzZSBkb3duIHJpZ2h0IHN1YnRyZWUgYW5kIGNoYW5nZSB0aGUgbm9kZS52YWwgdG8gdGhlIG1pbiBub2RlIHZhbFxcbiAgICAgICAgICAgIC8vIFRoZW4gY2FsbCByZW1vdmVOb2RlIG9uIHRoZSByaWdodCBzdWJ0cmVlIHdpdGggdGhlIG1pbi5ub2RlIHZhbCB0byBkZWxldGUgdGhlIHRlcm1pbmFsIG5vZGVcXG5cXG5cXG4gICAgICAgICAgICB2YXIgc3ViID0gZmluZE1pbk5vZGUobm9kZS5yaWdodCk7XFxuICAgICAgICAgICAgbm9kZS52YWwgPSBzdWIudmFsO1xcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSByZW1vdmVOb2RlKG5vZGUucmlnaHQsIHN1Yi52YWwpO1xcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9O1xcblxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9yb290LCByZW1vdmVOb2RlKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCksIHZhbCkpO1xcbiAgICAgIH0gLy8gc2VhcmNoZXMgdHJlZSBmb3Igc3BlY2lmaWVkIHZhbCBhbmQgcmV0dXJucyB0aGUgbm9kZSBpZiBmb3VuZCwgbnVsbCBvdGhlcndpc2VcXG5cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInNlYXJjaFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaCh2YWwpIHtcXG4gICAgICAgIHZhciByZWN1cnNpdmVTZWFyY2ggPSBmdW5jdGlvbiByZWN1cnNpdmVTZWFyY2gobm9kZSwgdmFsKSB7XFxuICAgICAgICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm4gbnVsbDtcXG4gICAgICAgICAgaWYgKHZhbCA8IG5vZGUudmFsKSByZXR1cm4gcmVjdXJzaXZlU2VhcmNoKG5vZGUubGVmdCwgdmFsKTtcXG4gICAgICAgICAgaWYgKHZhbCA+IG5vZGUudmFsKSByZXR1cm4gcmVjdXJzaXZlU2VhcmNoKG5vZGUucmlnaHQsIHZhbCk7XFxuICAgICAgICAgIGlmICh2YWwgPT09IG5vZGUudmFsKSByZXR1cm4gbm9kZTtcXG4gICAgICAgIH07XFxuXFxuICAgICAgICByZXR1cm4gcmVjdXJzaXZlU2VhcmNoKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCksIHZhbCk7XFxuICAgICAgfSAvLyB0cmVlIHRyYXZlcnNhbHNcXG4gICAgICAvLyByZXR1cm5zIGFycmF5IG9mIHZhbHNcXG5cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50SW5PcmRlclxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50SW5PcmRlcigpIHtcXG4gICAgICAgIHZhciByZXMgPSBERlNJdGVyYXRpdmUuaW5PcmRlcihfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpKTtcXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XFxuICAgICAgICByZXR1cm4gcmVzO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50UHJlT3JkZXJcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludFByZU9yZGVyKCkge1xcbiAgICAgICAgdmFyIHJlcyA9IERGU0l0ZXJhdGl2ZS5wcmVPcmRlcihfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpKTtcXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XFxuICAgICAgICByZXR1cm4gcmVzO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50UG9zdE9yZGVyXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRQb3N0T3JkZXIoKSB7XFxuICAgICAgICB2YXIgcmVzID0gREZTSXRlcmF0aXZlLnBvc3RPcmRlcihfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpKTtcXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XFxuICAgICAgICByZXR1cm4gcmVzO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50TGV2ZWxPcmRlclxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50TGV2ZWxPcmRlcigpIHtcXG4gICAgICAgIHZhciByZXMgPSBCRlMoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSk7XFxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xcbiAgICAgICAgcmV0dXJuIHJlcztcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJyb290XFxcIixcXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpO1xcbiAgICAgIH1cXG4gICAgfV0pO1xcblxcbiAgICByZXR1cm4gQmluYXJ5U2VhcmNoVHJlZTtcXG4gIH0oKTtcXG5cXG4gIHZhciBfcm9vdCA9IG5ldyBXZWFrTWFwKCk7XFxuXFxuICByZXR1cm4gQmluYXJ5U2VhcmNoVHJlZTtcXG59KCk7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBCaW5hcnlTZWFyY2hUcmVlO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0JpbmFyeVNlYXJjaFRyZWUuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9CaW5hcnlUcmVlVHJhdmVyc2FsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvQmluYXJ5VHJlZVRyYXZlcnNhbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV2YWwoXCJ2YXIgU3RhY2sgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1N0YWNrICovIFxcXCIuL3NyYy9TdGFjay5qc1xcXCIpO1xcblxcbnZhciBRdWV1ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUXVldWUgKi8gXFxcIi4vc3JjL1F1ZXVlLmpzXFxcIik7XFxuXFxudmFyIEJGUyA9IGZ1bmN0aW9uIEJGUyhyb290KSB7XFxuICB2YXIgcmVzID0gW10sXFxuICAgICAgcXVldWUgPSBuZXcgUXVldWUoKTtcXG4gIHF1ZXVlLmVucXVldWUocm9vdCk7XFxuXFxuICB3aGlsZSAoIXF1ZXVlLmlzRW1wdHkoKSkge1xcbiAgICB2YXIgbm9kZSA9IHF1ZXVlLmRlcXVldWUoKTtcXG4gICAgcmVzLnB1c2gobm9kZS52YWwpO1xcbiAgICBpZiAobm9kZS5sZWZ0KSBxdWV1ZS5lbnF1ZXVlKG5vZGUubGVmdCk7XFxuICAgIGlmIChub2RlLnJpZ2h0KSBxdWV1ZS5lbnF1ZXVlKG5vZGUucmlnaHQpO1xcbiAgfVxcblxcbiAgcmV0dXJuIHJlcztcXG59O1xcblxcbnZhciBERlNSZWN1cnNpdmUgPSB7XFxuICBpbk9yZGVyOiBmdW5jdGlvbiBpbk9yZGVyKHJvb3QpIHtcXG4gICAgdmFyIHJlcyA9IFtdO1xcblxcbiAgICBmdW5jdGlvbiByZWN1cnNlKG5vZGUpIHtcXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xcbiAgICAgICAgcmVjdXJzZShub2RlLmxlZnQpO1xcbiAgICAgICAgcmVzLnB1c2gobm9kZS52YWwpO1xcbiAgICAgICAgcmVjdXJzZShub2RlLnJpZ2h0KTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgcmVjdXJzZShyb290KTtcXG4gICAgcmV0dXJuIHJlcztcXG4gIH0sXFxuICBwcmVPcmRlcjogZnVuY3Rpb24gcHJlT3JkZXIocm9vdCkge1xcbiAgICB2YXIgcmVzID0gW107XFxuXFxuICAgIGZ1bmN0aW9uIHJlY3Vyc2Uobm9kZSkge1xcbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XFxuICAgICAgICByZXMucHVzaChub2RlLnZhbCk7XFxuICAgICAgICByZWN1cnNlKG5vZGUubGVmdCk7XFxuICAgICAgICByZWN1cnNlKG5vZGUucmlnaHQpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICByZWN1cnNlKHJvb3QpO1xcbiAgICByZXR1cm4gcmVzO1xcbiAgfSxcXG4gIHBvc3RPcmRlcjogZnVuY3Rpb24gcG9zdE9yZGVyKHJvb3QpIHtcXG4gICAgdmFyIHJlcyA9IFtdO1xcblxcbiAgICBmdW5jdGlvbiByZWN1cnNlKG5vZGUpIHtcXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xcbiAgICAgICAgcmVjdXJzZShub2RlLmxlZnQpO1xcbiAgICAgICAgcmVjdXJzZShub2RlLnJpZ2h0KTtcXG4gICAgICAgIHJlcy5wdXNoKG5vZGUudmFsKTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgcmVjdXJzZShyb290KTtcXG4gICAgcmV0dXJuIHJlcztcXG4gIH1cXG59O1xcbnZhciBERlNJdGVyYXRpdmUgPSB7XFxuICBpbk9yZGVyOiBmdW5jdGlvbiBpbk9yZGVyKHJvb3QpIHtcXG4gICAgdmFyIHJlcyA9IFtdLFxcbiAgICAgICAgc3RhY2sgPSBuZXcgU3RhY2soKTtcXG4gICAgdmFyIGN1cnIgPSByb290O1xcblxcbiAgICB3aGlsZSAoIXN0YWNrLmlzRW1wdHkoKSB8fCBjdXJyICE9PSBudWxsKSB7XFxuICAgICAgaWYgKGN1cnIgIT09IG51bGwpIHtcXG4gICAgICAgIHN0YWNrLnB1c2goY3Vycik7XFxuICAgICAgICBjdXJyID0gY3Vyci5sZWZ0O1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBjdXJyID0gc3RhY2sucG9wKCk7XFxuICAgICAgICByZXMucHVzaChjdXJyLnZhbCk7XFxuICAgICAgICBjdXJyID0gY3Vyci5yaWdodDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHJlcztcXG4gIH0sXFxuICBwcmVPcmRlcjogZnVuY3Rpb24gcHJlT3JkZXIocm9vdCkge1xcbiAgICB2YXIgcmVzID0gW10sXFxuICAgICAgICBzdGFjayA9IG5ldyBTdGFjaygpO1xcbiAgICB2YXIgY3VycjtcXG4gICAgc3RhY2sucHVzaChyb290KTtcXG5cXG4gICAgd2hpbGUgKCFzdGFjay5pc0VtcHR5KCkpIHtcXG4gICAgICBjdXJyID0gc3RhY2sucG9wKCk7XFxuICAgICAgcmVzLnB1c2goY3Vyci52YWwpO1xcbiAgICAgIGlmIChjdXJyLnJpZ2h0ICE9PSBudWxsKSBzdGFjay5wdXNoKGN1cnIucmlnaHQpO1xcbiAgICAgIGlmIChjdXJyLmxlZnQgIT09IG51bGwpIHN0YWNrLnB1c2goY3Vyci5sZWZ0KTtcXG4gICAgfVxcblxcbiAgICByZXR1cm4gcmVzO1xcbiAgfSxcXG4gIC8vIEl0ZXJhdGl2ZSBwb3N0IG9yZGVyIHVzaW5nIHR3byBzdGFja3NcXG4gIHBvc3RPcmRlcjogZnVuY3Rpb24gcG9zdE9yZGVyKHJvb3QpIHtcXG4gICAgdmFyIHJlcyA9IFtdLFxcbiAgICAgICAgc3RhY2sxID0gbmV3IFN0YWNrKCksXFxuICAgICAgICBzdGFjazIgPSBuZXcgU3RhY2soKTtcXG4gICAgdmFyIGN1cnI7XFxuICAgIHN0YWNrMS5wdXNoKHJvb3QpO1xcblxcbiAgICB3aGlsZSAoIXN0YWNrMS5pc0VtcHR5KCkpIHtcXG4gICAgICBjdXJyID0gc3RhY2sxLnBvcCgpO1xcbiAgICAgIHN0YWNrMi5wdXNoKGN1cnIpO1xcbiAgICAgIGlmIChjdXJyLmxlZnQgIT0gbnVsbCkgc3RhY2sxLnB1c2goY3Vyci5sZWZ0KTtcXG4gICAgICBpZiAoY3Vyci5yaWdodCAhPSBudWxsKSBzdGFjazEucHVzaChjdXJyLnJpZ2h0KTtcXG4gICAgfVxcblxcbiAgICB3aGlsZSAoIXN0YWNrMi5pc0VtcHR5KCkpIHtcXG4gICAgICBjdXJyID0gc3RhY2syLnBvcCgpO1xcbiAgICAgIHJlcy5wdXNoKGN1cnIudmFsKTtcXG4gICAgfVxcblxcbiAgICByZXR1cm4gcmVzO1xcbiAgfVxcbn07XFxubW9kdWxlLmV4cG9ydHMgPSB7XFxuICBCRlM6IEJGUyxcXG4gIERGU0l0ZXJhdGl2ZTogREZTSXRlcmF0aXZlLFxcbiAgREZTUmVjdXJzaXZlOiBERlNSZWN1cnNpdmVcXG59O1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0JpbmFyeVRyZWVUcmF2ZXJzYWwuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9HcmFwaC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9HcmFwaC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5ldmFsKFwiZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cXG5cXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlxcXCIpOyB9XFxuXFxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXFxcInVuZGVmaW5lZFxcXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1xcXCJyZXR1cm5cXFwiXSAhPSBudWxsKSBfaVtcXFwicmV0dXJuXFxcIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XFxuXFxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXFxcInVuZGVmaW5lZFxcXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IHRocm93IF9lMjsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXFxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cXFwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UzKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMzsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1xcXCJyZXR1cm5cXFwiXSAhPSBudWxsKSBpdFtcXFwicmV0dXJuXFxcIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxcblxcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXFxcInN0cmluZ1xcXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcXFwiT2JqZWN0XFxcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXFxcIk1hcFxcXCIgfHwgbiA9PT0gXFxcIlNldFxcXCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXFxcIkFyZ3VtZW50c1xcXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XFxuXFxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXFxcInZhbHVlXFxcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5nZXQpIHsgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjcmlwdG9yLnZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5zZXQpIHsgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpOyB9IGVsc2UgeyBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFxcXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cXG5cXG52YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0dyYXBoVHJhdmVyc2FsICovIFxcXCIuL3NyYy9HcmFwaFRyYXZlcnNhbC5qc1xcXCIpLFxcbiAgICBfQkZTID0gX3JlcXVpcmUuQkZTLFxcbiAgICBERlNSZWN1cnNpdmUgPSBfcmVxdWlyZS5ERlNSZWN1cnNpdmU7XFxuXFxudmFyIEdyYXBoID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gIGZ1bmN0aW9uIEdyYXBoKCkge1xcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR3JhcGgpO1xcblxcbiAgICBfdmVydGljZXMuc2V0KHRoaXMsIHtcXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICB2YWx1ZTogdm9pZCAwXFxuICAgIH0pO1xcblxcbiAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3ZlcnRpY2VzLCBuZXcgTWFwKCkpO1xcbiAgfVxcblxcbiAgX2NyZWF0ZUNsYXNzKEdyYXBoLCBbe1xcbiAgICBrZXk6IFxcXCJhZGRWZXJ0ZXhcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVmVydGV4KHZhbCkge1xcbiAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModmFsKSkgdGhyb3cgXFxcInZlcnRleCB3aXRoIHZhbHVlIFxcXCIuY29uY2F0KHZhbCwgXFxcIiBhbHJlYWR5IGV4aXN0cy5cXFwiKTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5zZXQodmFsLCBuZXcgU2V0KCkpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImFkZEVkZ2VcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRWRnZSh2VmFsLCBlVmFsKSB7XFxuICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModlZhbCkpIHRocm93IFxcXCJ2ZXJ0ZXggd2l0aCB2YWx1ZSBcXFwiLmNvbmNhdCh2VmFsLCBcXFwiIGRvZXNuJ3QgZXhpc3QuXFxcIik7XFxuICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXMoZVZhbCkpIHRocm93IFxcXCJlZGdlIHdpdGggdmFsdWUgXFxcIi5jb25jYXQoZVZhbCwgXFxcIiBkb2Vzbid0IGV4aXN0LlxcXCIpO1xcblxcbiAgICAgIHZhciBlZGdlcyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmdldCh2VmFsKTtcXG5cXG4gICAgICBpZiAoZWRnZXMuaGFzKGVWYWwpKSB0aHJvdyBcXFwidmVydGV4IGFscmVhZHkgaGFzIGVkZ2UgXFxcIi5jb25jYXQoZVZhbCwgXFxcIi5cXFwiKTtcXG4gICAgICBlZGdlcy5hZGQoZVZhbCk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiZ2V0VmVydGV4RWRnZXNcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmVydGV4RWRnZXModlZhbCkge1xcbiAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKHZWYWwpKSB0aHJvdyBcXFwidmVydGV4IHdpdGggdmFsdWUgXFxcIi5jb25jYXQodlZhbCwgXFxcIiBkb2Vzbid0IGV4aXN0LlxcXCIpO1xcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmdldCh2VmFsKSk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiaGFzRWRnZVxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNFZGdlKHZWYWwsIGVWYWwpIHtcXG4gICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2VmFsKSkgcmV0dXJuIGZhbHNlO1xcblxcbiAgICAgIHZhciBlZGdlcyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmdldCh2VmFsKTtcXG5cXG4gICAgICByZXR1cm4gZWRnZXMuaGFzKGVWYWwpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImhhc1ZlcnRleFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNWZXJ0ZXgodlZhbCkge1xcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModlZhbCk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwicmVtb3ZlRWRnZVxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFZGdlKHZWYWwsIGVWYWwpIHtcXG4gICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2VmFsKSkgdGhyb3cgXFxcInZlcnRleCB3aXRoIHZhbHVlIFxcXCIuY29uY2F0KHZWYWwsIFxcXCIgZG9lc24ndCBleGlzdC5cXFwiKTtcXG5cXG4gICAgICB2YXIgZWRnZXMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5nZXQodlZhbCk7XFxuXFxuICAgICAgZWRnZXNbXFxcImRlbGV0ZVxcXCJdKGVWYWwpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInJlbW92ZVZlcnRleFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVWZXJ0ZXgodlZhbCkge1xcbiAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKHZWYWwpKSB0aHJvdyBcXFwidmVydGV4IHdpdGggdmFsdWUgXFxcIi5jb25jYXQodlZhbCwgXFxcIiBkb2Vzbid0IGV4aXN0LlxcXCIpO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpW1xcXCJkZWxldGVcXFwiXSh2VmFsKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJCRlNcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gQkZTKHN0YXJ0LCBjYWxsYmFjaykge1xcbiAgICAgIHZhciBncmFwaCA9IHRoaXM7XFxuXFxuICAgICAgX0JGUyhzdGFydCwgZ3JhcGgsIGNhbGxiYWNrKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJERlNcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gREZTKHN0YXJ0LCBjYWxsYmFjaykge1xcbiAgICAgIHZhciBncmFwaCA9IHRoaXM7XFxuICAgICAgREZTUmVjdXJzaXZlKHN0YXJ0LCBncmFwaCwgY2FsbGJhY2spO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInByaW50R3JhcGhcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRHcmFwaCgpIHtcXG4gICAgICB2YXIgZ3JhcGggPSB7fTtcXG5cXG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykpLFxcbiAgICAgICAgICBfc3RlcDtcXG5cXG4gICAgICB0cnkge1xcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcXG4gICAgICAgICAgdmFyIF9zdGVwJHZhbHVlID0gX3NsaWNlZFRvQXJyYXkoX3N0ZXAudmFsdWUsIDIpLFxcbiAgICAgICAgICAgICAgdlZhbCA9IF9zdGVwJHZhbHVlWzBdLFxcbiAgICAgICAgICAgICAgdmVydGV4RWRnZXMgPSBfc3RlcCR2YWx1ZVsxXTtcXG5cXG4gICAgICAgICAgZ3JhcGhbdlZhbF0gPSBbXTtcXG4gICAgICAgICAgdmFyIGVkZ2VzID0gJyc7XFxuXFxuICAgICAgICAgIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodmVydGV4RWRnZXMpLFxcbiAgICAgICAgICAgICAgX3N0ZXAyO1xcblxcbiAgICAgICAgICB0cnkge1xcbiAgICAgICAgICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XFxuICAgICAgICAgICAgICB2YXIgZWRnZSA9IF9zdGVwMi52YWx1ZTtcXG4gICAgICAgICAgICAgIGVkZ2VzICs9IFxcXCJcXFwiLmNvbmNhdChlZGdlLCBcXFwiIFxcXCIpO1xcbiAgICAgICAgICAgICAgZ3JhcGhbdlZhbF0ucHVzaChlZGdlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgICAgIF9pdGVyYXRvcjIuZShlcnIpO1xcbiAgICAgICAgICB9IGZpbmFsbHkge1xcbiAgICAgICAgICAgIF9pdGVyYXRvcjIuZigpO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJcXFwiLmNvbmNhdCh2VmFsLCBcXFwiIC0+IFxcXCIpLmNvbmNhdChlZGdlcykpO1xcbiAgICAgICAgfVxcbiAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcXG4gICAgICB9IGZpbmFsbHkge1xcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcXG4gICAgICB9XFxuXFxuICAgICAgcmV0dXJuIGdyYXBoO1xcbiAgICB9XFxuICB9XSk7XFxuXFxuICByZXR1cm4gR3JhcGg7XFxufSgpO1xcblxcbnZhciBfdmVydGljZXMgPSBuZXcgV2Vha01hcCgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gR3JhcGg7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvR3JhcGguanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9HcmFwaFRyYXZlcnNhbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9HcmFwaFRyYXZlcnNhbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5ldmFsKFwiZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXFxcInVuZGVmaW5lZFxcXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxcXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXFxcIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcXFwicmV0dXJuXFxcIl0gIT0gbnVsbCkgaXRbXFxcInJldHVyblxcXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cXG5cXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFxcXCJzdHJpbmdcXFwiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXFxcIk9iamVjdFxcXCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFxcXCJNYXBcXFwiIHx8IG4gPT09IFxcXCJTZXRcXFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFxcXCJBcmd1bWVudHNcXFwiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxcblxcbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxcblxcbnZhciBRdWV1ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUXVldWUgKi8gXFxcIi4vc3JjL1F1ZXVlLmpzXFxcIik7XFxuXFxudmFyIFN0YWNrID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9TdGFjayAqLyBcXFwiLi9zcmMvU3RhY2suanNcXFwiKTsgLy8gYnJlYWR0aCBmaXJzdCBzZWFyY2ggd2l0aCBxdWV1ZVxcblxcblxcbnZhciBCRlMgPSBmdW5jdGlvbiBCRlMoc3RhcnQsIGdyYXBoLCBjYWxsYmFjaykge1xcbiAgLy8gd2lsbCBrZWVwIHRyYWNrIG9mIG5ldyB2ZXJ0aWNlcyB3aXRoIHF1ZXVlIGFuZCB2aXNpdGVkIG5vZGVzIHdpdGggYSBzZXRcXG4gIHZhciBxdWV1ZSA9IG5ldyBRdWV1ZSgpLFxcbiAgICAgIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XFxuICBxdWV1ZS5lbnF1ZXVlKHN0YXJ0KTsgLy92ZXJ0ZXggaXMgdmlzaXRlZCBpZiBpdCBnZXRzIHB1c2hlZCBpbnRvIHF1ZXVlLlxcblxcbiAgdmlzaXRlZC5hZGQoc3RhcnQpO1xcblxcbiAgd2hpbGUgKCFxdWV1ZS5pc0VtcHR5KCkpIHtcXG4gICAgdmFyIGN1cnIgPSBxdWV1ZS5kZXF1ZXVlKCksXFxuICAgICAgICBlZGdlcyA9IGdyYXBoLmdldFZlcnRleEVkZ2VzKGN1cnIpOyAvLyBjYWxsIGNhbGxiYWNrIG9uIGVhY2ggdmVydGV4IHRoYXQgZ2V0cyBkZXF1ZXVlZFxcblxcbiAgICBjYWxsYmFjayhjdXJyKTsgLy9pdGVyYXRlIG92ZXIgYWxsIGVkZ2VzIGFuZCBhZGQgdGhlIHVudmlzaXRlZCBvbmVzIHRvIHF1ZXVlXFxuXFxuICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlZGdlcyksXFxuICAgICAgICBfc3RlcDtcXG5cXG4gICAgdHJ5IHtcXG4gICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xcbiAgICAgICAgdmFyIGVWYWwgPSBfc3RlcC52YWx1ZTtcXG5cXG4gICAgICAgIGlmICghdmlzaXRlZC5oYXMoZVZhbCkpIHtcXG4gICAgICAgICAgcXVldWUuZW5xdWV1ZShlVmFsKTtcXG4gICAgICAgICAgdmlzaXRlZC5hZGQoZVZhbCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICBfaXRlcmF0b3IuZShlcnIpO1xcbiAgICB9IGZpbmFsbHkge1xcbiAgICAgIF9pdGVyYXRvci5mKCk7XFxuICAgIH1cXG4gIH1cXG59OyAvL2l0ZXJhdGl2ZSBkZXB0aCBmaXJzdCBzZWFyY2guIEFsbW9zdCBzYW1lIGFzIEJGUy4gT25seSBkaWZmZXJlbmNlIGlzIHRoZSBzdGFjayB2cyBxdWV1ZVxcblxcblxcbnZhciBERlNJdGVyYXRpdmUgPSBmdW5jdGlvbiBERlNJdGVyYXRpdmUoc3RhcnQsIGdyYXBoLCBjYWxsYmFjaykge1xcbiAgdmFyIHN0YWNrID0gbmV3IFN0YWNrKCksXFxuICAgICAgdmlzaXRlZCA9IG5ldyBTZXQoKTtcXG4gIHN0YWNrLnB1c2goc3RhcnQpO1xcbiAgdmlzaXRlZC5hZGQoc3RhcnQpO1xcblxcbiAgd2hpbGUgKCFzdGFjay5pc0VtcHR5KCkpIHtcXG4gICAgdmFyIGN1cnIgPSBzdGFjay5wb3AoKSxcXG4gICAgICAgIGVkZ2VzID0gZ3JhcGguZ2V0VmVydGV4RWRnZXMoY3Vycik7XFxuICAgIGNhbGxiYWNrKGN1cnIpO1xcblxcbiAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGVkZ2VzKSxcXG4gICAgICAgIF9zdGVwMjtcXG5cXG4gICAgdHJ5IHtcXG4gICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xcbiAgICAgICAgdmFyIGVWYWwgPSBfc3RlcDIudmFsdWU7XFxuXFxuICAgICAgICBpZiAoIXZpc2l0ZWQuaGFzKGVWYWwpKSB7XFxuICAgICAgICAgIHN0YWNrLnB1c2goZVZhbCk7XFxuICAgICAgICAgIHZpc2l0ZWQuYWRkKGVWYWwpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XFxuICAgIH0gZmluYWxseSB7XFxuICAgICAgX2l0ZXJhdG9yMi5mKCk7XFxuICAgIH1cXG4gIH1cXG59OyAvLyBSZWN1cnNpdmUgZGVwdGggZmlyc3Qgc2VhcmNoXFxuXFxuXFxudmFyIERGU1JlY3Vyc2l2ZSA9IGZ1bmN0aW9uIERGU1JlY3Vyc2l2ZShzdGFydCwgZ3JhcGgsIGNhbGxiYWNrKSB7XFxuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcXG5cXG4gIHZhciByZWN1cnNpdmVERlMgPSBmdW5jdGlvbiByZWN1cnNpdmVERlMoY3Vycikge1xcbiAgICBpZiAodmlzaXRlZC5oYXMoY3VycikpIHJldHVybjtcXG4gICAgY2FsbGJhY2soY3Vycik7XFxuICAgIHZpc2l0ZWQuYWRkKGN1cnIpO1xcbiAgICB2YXIgZWRnZXMgPSBncmFwaC5nZXRWZXJ0ZXhFZGdlcyhjdXJyKTtcXG5cXG4gICAgdmFyIF9pdGVyYXRvcjMgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlZGdlcyksXFxuICAgICAgICBfc3RlcDM7XFxuXFxuICAgIHRyeSB7XFxuICAgICAgZm9yIChfaXRlcmF0b3IzLnMoKTsgIShfc3RlcDMgPSBfaXRlcmF0b3IzLm4oKSkuZG9uZTspIHtcXG4gICAgICAgIHZhciBlVmFsID0gX3N0ZXAzLnZhbHVlO1xcblxcbiAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhlVmFsKSkge1xcbiAgICAgICAgICByZWN1cnNpdmVERlMoZVZhbCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICBfaXRlcmF0b3IzLmUoZXJyKTtcXG4gICAgfSBmaW5hbGx5IHtcXG4gICAgICBfaXRlcmF0b3IzLmYoKTtcXG4gICAgfVxcbiAgfTtcXG5cXG4gIHJlY3Vyc2l2ZURGUyhzdGFydCk7XFxufTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IHtcXG4gIEJGUzogQkZTLFxcbiAgREZTUmVjdXJzaXZlOiBERlNSZWN1cnNpdmUsXFxuICBERlNJdGVyYXRpdmU6IERGU0l0ZXJhdGl2ZVxcbn07XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvR3JhcGhUcmF2ZXJzYWwuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9IYXNoVGFibGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0hhc2hUYWJsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcImZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFxcXCJ1bmRlZmluZWRcXFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlxcXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXFxcInJldHVyblxcXCJdICE9IG51bGwpIGl0W1xcXCJyZXR1cm5cXFwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XFxuXFxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcXFwic3RyaW5nXFxcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFxcXCJPYmplY3RcXFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcXFwiTWFwXFxcIiB8fCBuID09PSBcXFwiU2V0XFxcIikgcmV0dXJuIEFycmF5LmZyb20obik7IGlmIChuID09PSBcXFwiQXJndW1lbnRzXFxcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cXG5cXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuLyogaHR0cHM6Ly9yZWFjdGdvLmNvbS9oYXNodGFibGUtamF2YXNjcmlwdC8gKi9cXG5cXG4vKlxcblJ1ZGltZW50YXJ5IGphdmFzY3JpcHQgaGFzaCB0YWJsZSByZXNvbHZpbmcgY29sbGlzaW9ucyB3aXRoIHNlcGFyYXRlIGNoYWluaW5nLiBcXG5Ub2RvOiBSZXNvbHZlIGNvbmZsaWN0cyB3aXRoIExpbmVhciBQcm9iaW5nLCBTZXBhcmF0ZSBDaGFpbmluZyAobGlua2VkIGxpc3RzKVxcbiovXFxudmFyIEhhc2hUYWJsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICBmdW5jdGlvbiBIYXNoVGFibGUoKSB7XFxuICAgIHZhciBzaXplID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiA0MjtcXG5cXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhc2hUYWJsZSk7XFxuXFxuICAgIHRoaXMuYnVja2V0cyA9IG5ldyBBcnJheShzaXplKTtcXG4gICAgdGhpcy5zaXplID0gc2l6ZTtcXG4gIH1cXG5cXG4gIF9jcmVhdGVDbGFzcyhIYXNoVGFibGUsIFt7XFxuICAgIGtleTogXFxcImhhc2hcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzaChrZXkpIHtcXG4gICAgICByZXR1cm4ga2V5LnRvU3RyaW5nKCkubGVuZ3RoICUgdGhpcy5zaXplO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInNldFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xcbiAgICAgIHZhciBpID0gdGhpcy5oYXNoKGtleSk7IC8vIGlmIG5vIGNvbGxpc2lvbiwgc2V0IHRoZSBidWNrZXQgYXQgcG9zaXRpb24gaSB0byBhcnJheVxcblxcbiAgICAgIGlmICghdGhpcy5idWNrZXRzW2ldKSB0aGlzLmJ1Y2tldHNbaV0gPSBbXTsgLy8gcHVzaCBba2V5LCB2YWxdIGludG8gdGhlIGFycmF5XFxuXFxuICAgICAgdGhpcy5idWNrZXRzW2ldLnB1c2goW2tleSwgdmFsdWVdKTtcXG4gICAgICByZXR1cm4gaTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJnZXRcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGtleSkge1xcbiAgICAgIHZhciBpID0gdGhpcy5oYXNoKGtleSk7XFxuICAgICAgaWYgKCF0aGlzLmJ1Y2tldHNbaV0pIHJldHVybiBudWxsOyAvLyBjaGVjayBlYWNoIHBhaXIgaW5zaWRlIHRoZSBidWNrZXQgYXQgcG9zaXRpb24gaVxcbiAgICAgIC8vIGlmIGtleSBtYXRjaGVzIGtleSBhdCBwYWlyWzBdIHJldHVybiB0aGUgdmFsIGF0IHBhaXJbMV1cXG5cXG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodGhpcy5idWNrZXRzW2ldKSxcXG4gICAgICAgICAgX3N0ZXA7XFxuXFxuICAgICAgdHJ5IHtcXG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XFxuICAgICAgICAgIHZhciBwYWlyID0gX3N0ZXAudmFsdWU7XFxuICAgICAgICAgIGlmIChwYWlyWzBdID09PSBrZXkpIHJldHVybiBwYWlyWzFdO1xcbiAgICAgICAgfVxcbiAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcXG4gICAgICB9IGZpbmFsbHkge1xcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1dKTtcXG5cXG4gIHJldHVybiBIYXNoVGFibGU7XFxufSgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gSGFzaFRhYmxlO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0hhc2hUYWJsZS5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0xpbmtlZExpc3QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9MaW5rZWRMaXN0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcImZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFxcXCJ1bmRlZmluZWRcXFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlxcXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXFxcInJldHVyblxcXCJdICE9IG51bGwpIGl0W1xcXCJyZXR1cm5cXFwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XFxuXFxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcXFwic3RyaW5nXFxcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFxcXCJPYmplY3RcXFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcXFwiTWFwXFxcIiB8fCBuID09PSBcXFwiU2V0XFxcIikgcmV0dXJuIEFycmF5LmZyb20obik7IGlmIChuID09PSBcXFwiQXJndW1lbnRzXFxcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cXG5cXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cXG5cXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXFxcIik7IH0gZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlOyB9IHJldHVybiB2YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbnZhciBMaW5rZWRMaXN0ID0gZnVuY3Rpb24gKCkge1xcbiAgLy8gY29uc3QgaGVhZCA9IFN5bWJvbCgnaGVhZCcpIC8vVG8ga2VlcCBoZWFkIGFzIHByaXZhdGUgaW4gbGlua2VkIGxpc3RcXG4gIC8vIGNvbnN0IHNpemUgPSBTeW1ib2woJ3NpemUnKVxcbiAgdmFyIExpc3ROb2RlID0gZnVuY3Rpb24gTGlzdE5vZGUodmFsKSB7XFxuICAgIHZhciBuZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xcblxcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlzdE5vZGUpO1xcblxcbiAgICB0aGlzLnZhbCA9IHZhbDtcXG4gICAgdGhpcy5uZXh0ID0gbmV4dDtcXG4gIH07XFxuXFxuICB2YXIgTGlua2VkTGlzdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICAgIC8vIFByaXZhdGUgc3RhdGljIGZpZWxkc1xcbiAgICBmdW5jdGlvbiBMaW5rZWRMaXN0KCkge1xcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rZWRMaXN0KTtcXG5cXG4gICAgICBfaGVhZC5zZXQodGhpcywge1xcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgICB2YWx1ZTogdm9pZCAwXFxuICAgICAgfSk7XFxuXFxuICAgICAgX3NpemUuc2V0KHRoaXMsIHtcXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICAgIH0pO1xcblxcbiAgICAgIC8vIFRoZSBoZWFkIGFuZCBzaXplIHByb3BlcnR5IHNob3VsZG4ndCBiZSBtb2RpZmlhYmxlIG91dHNpZGUgdGhlIGNsYXNzLiBTbyB0aGVyZSBzaG91bGQgb25seSBiZSBhIGdldHRlci4gQ2xhc3MgZmllbGRzIGFyZW4ndCBzdXBwb3J0ZWQgYnkgYSBsb3Qgb2YgYnJvd3NlcnMuIFVzZSBzeW1ib2wgaW5zdGVhZCB0byBjcmVhdGUgcHJpdmF0ZSBjbGFzcyB2YXJpYWJsZXMgaWYgeW91J3JlIG5vdCB1c2luZyBiYWJlbC5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIG51bGwpO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgMCk7IC8vIHRoaXNbaGVhZF0gPSBudWxsXFxuICAgICAgLy8gdGhpc1tzaXplXSA9IDBcXG5cXG4gICAgfSAvL2dldHRlcnNcXG5cXG5cXG4gICAgX2NyZWF0ZUNsYXNzKExpbmtlZExpc3QsIFt7XFxuICAgICAga2V5OiBcXFwiZnJvbUFycmF5XFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZnJvbUFycmF5KGFycmF5KSB7XFxuICAgICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoYXJyYXkpLFxcbiAgICAgICAgICAgIF9zdGVwO1xcblxcbiAgICAgICAgdHJ5IHtcXG4gICAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcXG4gICAgICAgICAgICB2YXIgdmFsID0gX3N0ZXAudmFsdWU7XFxuICAgICAgICAgICAgdGhpcy5hcHBlbmRUb1RhaWwodmFsKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgICAgIF9pdGVyYXRvci5lKGVycik7XFxuICAgICAgICB9IGZpbmFsbHkge1xcbiAgICAgICAgICBfaXRlcmF0b3IuZigpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInRvQXJyYXlcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b0FycmF5KCkge1xcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xcblxcbiAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xcblxcbiAgICAgICAgd2hpbGUgKGN1cnIpIHtcXG4gICAgICAgICAgcmVzdWx0LnB1c2goY3Vyci52YWwpO1xcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcXG4gICAgICB9IC8vIFQg4oCUIE8oMSlcXG5cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByZXBlbmRUb0hlYWRcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVwZW5kVG9IZWFkKHZhbCkge1xcbiAgICAgICAgdmFyIF90aGlzJHNpemU7XFxuXFxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBMaXN0Tm9kZSh2YWwpO1xcbiAgICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCkgPT0gbnVsbCkgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9oZWFkLCBub2RlKTtlbHNlIHtcXG4gICAgICAgICAgdmFyIHByZXZIZWFkID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG5cXG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9oZWFkLCBub2RlKTtcXG5cXG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKS5uZXh0ID0gcHJldkhlYWQ7XFxuICAgICAgICB9XFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpICsgMSksIF90aGlzJHNpemU7XFxuICAgICAgfSAvLyBUIOKAlCBPKG4pXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJhcHBlbmRUb1RhaWxcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUb1RhaWwodmFsKSB7XFxuICAgICAgICB2YXIgX3RoaXMkc2l6ZTI7XFxuXFxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBMaXN0Tm9kZSh2YWwpO1xcbiAgICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCkgPT0gbnVsbCkgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9oZWFkLCBub2RlKTtlbHNlIHtcXG4gICAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xcblxcbiAgICAgICAgICB3aGlsZSAoY3Vyci5uZXh0KSB7XFxuICAgICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBjdXJyLm5leHQgPSBub2RlO1xcbiAgICAgICAgfVxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZTIgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgKyAxKSwgX3RoaXMkc2l6ZTI7XFxuICAgICAgfSAvLyBUIOKAlCBPKDEpXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJkZWxldGVGcm9tSGVhZFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZUZyb21IZWFkKCkge1xcbiAgICAgICAgdmFyIF90aGlzJHNpemUzO1xcblxcbiAgICAgICAgdmFyIGN1cnJIZWFkID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG5cXG4gICAgICAgIGlmICghY3VyckhlYWQpIHJldHVybiBudWxsO1xcblxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9oZWFkLCBjdXJySGVhZC5uZXh0KTtcXG5cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemUzID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpIC0gMSksIF90aGlzJHNpemUzO1xcbiAgICAgICAgcmV0dXJuIGN1cnJIZWFkLnZhbDtcXG4gICAgICB9IC8vIFQg4oCUIE8obilcXG5cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImRlbGV0ZUZyb21UYWlsXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVsZXRlRnJvbVRhaWwoKSB7XFxuICAgICAgICB2YXIgX3RoaXMkc2l6ZTU7XFxuXFxuICAgICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XFxuXFxuICAgICAgICBpZiAoIWN1cnIpIHJldHVybiBudWxsOyAvL0hhbmRsZSBjYXNlIG9mIHNpbmdsZSBub2RlIGluIGxpbmtlZCBsaXN0XFxuXFxuICAgICAgICBpZiAoIWN1cnIubmV4dCkge1xcbiAgICAgICAgICB2YXIgX3RoaXMkc2l6ZTQ7XFxuXFxuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgbnVsbCk7XFxuXFxuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemU0ID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpIC0gMSksIF90aGlzJHNpemU0O1xcbiAgICAgICAgICByZXR1cm4gY3Vyci52YWw7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB2YXIgcHJldiA9IG51bGw7XFxuXFxuICAgICAgICB3aGlsZSAoY3Vyci5uZXh0KSB7XFxuICAgICAgICAgIHByZXYgPSBjdXJyO1xcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgcHJldi5uZXh0ID0gbnVsbDtcXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemU1ID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpIC0gMSksIF90aGlzJHNpemU1O1xcbiAgICAgICAgcmV0dXJuIGN1cnIudmFsO1xcbiAgICAgIH0gLy8gVCDigJQgTyhuKS4gTm9uIHJlY3Vyc2l2ZSB2ZXJzaW9uIG9mIGRlbGV0ZU5vZGVSZWN1cnNpdmVcXG5cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImRlbGV0ZU5vZGVcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxldGVOb2RlKHZhbCkge1xcbiAgICAgICAgdmFyIGRlbGV0ZU11bHRpcGxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcXG4gICAgICAgIHZhciBkZWxldGVDb3VudCA9IDA7XFxuXFxuICAgICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCksXFxuICAgICAgICAgICAgcHJldiA9IG51bGw7XFxuXFxuICAgICAgICB3aGlsZSAoY3Vycikge1xcbiAgICAgICAgICBpZiAoY3Vyci52YWwgPT09IHZhbCkge1xcbiAgICAgICAgICAgIHZhciBfdGhpcyRzaXplNjtcXG5cXG4gICAgICAgICAgICBpZiAoIXByZXYpIHtcXG4gICAgICAgICAgICAgIC8vRG9uJ3QgbmVlZCB0byBnYXJiYWdlIGNvbGxlY3QuIFRoaXMgaXMgSmF2YXNjcmlwdCwgbm90IEMrK1xcbiAgICAgICAgICAgICAgLy8gY29uc3QgdGVtcCA9IGN1cnJcXG4gICAgICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7IC8vIHRlbXAubmV4dCA9IG51bGxcXG5cXG4gICAgICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgY3Vycik7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgIHByZXYubmV4dCA9IGN1cnIubmV4dDsgLy8gY3Vyci5uZXh0ID0gbnVsbFxcblxcbiAgICAgICAgICAgICAgY3VyciA9IHByZXYubmV4dDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZTYgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgLSAxKSwgX3RoaXMkc2l6ZTY7XFxuICAgICAgICAgICAgZGVsZXRlQ291bnQrKztcXG4gICAgICAgICAgICBpZiAoIWRlbGV0ZU11bHRpcGxlKSByZXR1cm4gdHJ1ZTtcXG4gICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBwcmV2ID0gY3VycjtcXG4gICAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICByZXR1cm4gISFkZWxldGVDb3VudDtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJzZWFyY2hcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2godmFsKSB7XFxuICAgICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XFxuXFxuICAgICAgICB3aGlsZSAoY3Vycikge1xcbiAgICAgICAgICBpZiAoY3Vyci52YWwgPT09IHZhbCkgcmV0dXJuIHRydWU7XFxuICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICByZXR1cm4gZmFsc2U7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicHJpbnRMaXN0XFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRMaXN0KCkge1xcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudG9BcnJheSgpO1xcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcXG4gICAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwiaGVhZFxcXCIsXFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJzaXplXFxcIixcXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInRhaWxcXFwiLFxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xcblxcbiAgICAgICAgaWYgKCFjdXJyKSByZXR1cm4gbnVsbDtcXG5cXG4gICAgICAgIHdoaWxlIChjdXJyLm5leHQpIHtcXG4gICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHJldHVybiBjdXJyO1xcbiAgICAgIH1cXG4gICAgfV0pO1xcblxcbiAgICByZXR1cm4gTGlua2VkTGlzdDtcXG4gIH0oKTtcXG5cXG4gIHZhciBfaGVhZCA9IG5ldyBXZWFrTWFwKCk7XFxuXFxuICB2YXIgX3NpemUgPSBuZXcgV2Vha01hcCgpO1xcblxcbiAgcmV0dXJuIExpbmtlZExpc3Q7XFxufSgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gTGlua2VkTGlzdDtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9MaW5rZWRMaXN0LmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvUXVldWUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvUXVldWUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcXFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxudmFyIFF1ZXVlID0gZnVuY3Rpb24gKCkge1xcbiAgdmFyIFF1ZXVlTm9kZSA9IGZ1bmN0aW9uIFF1ZXVlTm9kZShkYXRhKSB7XFxuICAgIHZhciBuZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xcblxcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUXVldWVOb2RlKTtcXG5cXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcXG4gICAgdGhpcy5uZXh0ID0gbmV4dDtcXG4gIH07XFxuXFxuICB2YXIgUXVldWUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgICAvL0xvb2sgaW4gLi9MaW5rZWRMaXN0LmpzIHRvIHNlZSBvdGhlciB3YXlzIG9mIGRlY2xhcmluZyBwcml2YXRlIHN0YXRpYyBmaWVsZHMgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvQ2xhc3Nlcy9DbGFzc19maWVsZHMjUHJpdmF0ZV9maWVsZHNcXG4gICAgZnVuY3Rpb24gUXVldWUoKSB7XFxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFF1ZXVlKTtcXG5cXG4gICAgICBfZmlyc3Quc2V0KHRoaXMsIHtcXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICAgIH0pO1xcblxcbiAgICAgIF9sYXN0LnNldCh0aGlzLCB7XFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgICB9KTtcXG5cXG4gICAgICBfc2l6ZS5zZXQodGhpcywge1xcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgICB2YWx1ZTogdm9pZCAwXFxuICAgICAgfSk7XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9maXJzdCwgbnVsbCk7XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9sYXN0LCBudWxsKTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIDApO1xcbiAgICB9XFxuXFxuICAgIF9jcmVhdGVDbGFzcyhRdWV1ZSwgW3tcXG4gICAgICBrZXk6IFxcXCJlbnF1ZXVlXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZW5xdWV1ZShpdGVtKSB7XFxuICAgICAgICB2YXIgX3RoaXMkc2l6ZTtcXG5cXG4gICAgICAgIHZhciBub2RlID0gbmV3IFF1ZXVlTm9kZShpdGVtKTtcXG5cXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2xhc3QpKSB7XFxuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfbGFzdCkubmV4dCA9IG5vZGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2xhc3QsIG5vZGUpO1xcblxcbiAgICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KSkgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9maXJzdCwgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9sYXN0KSk7XFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpICsgMSksIF90aGlzJHNpemU7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwiZGVxdWV1ZVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcXVldWUoKSB7XFxuICAgICAgICB2YXIgX3RoaXMkc2l6ZTI7XFxuXFxuICAgICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpKSByZXR1cm4gbnVsbDtcXG5cXG4gICAgICAgIHZhciBkYXRhID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCkuZGF0YTtcXG5cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfZmlyc3QsIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpLm5leHQpO1xcblxcbiAgICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KSkgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9sYXN0LCBudWxsKTtcXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemUyID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpIC0gMSksIF90aGlzJHNpemUyO1xcbiAgICAgICAgcmV0dXJuIGRhdGE7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicGVla1xcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBlZWsoKSB7XFxuICAgICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpKSByZXR1cm4gbnVsbDtcXG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KS5kYXRhO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImlzRW1wdHlcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0VtcHR5KCkge1xcbiAgICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpID09PSBudWxsO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50UXVldWVcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludFF1ZXVlKCkge1xcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xcblxcbiAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KTtcXG5cXG4gICAgICAgIHdoaWxlIChjdXJyKSB7XFxuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnIuZGF0YSk7XFxuICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJzaXplXFxcIixcXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpO1xcbiAgICAgIH1cXG4gICAgfV0pO1xcblxcbiAgICByZXR1cm4gUXVldWU7XFxuICB9KCk7XFxuXFxuICB2YXIgX2ZpcnN0ID0gbmV3IFdlYWtNYXAoKTtcXG5cXG4gIHZhciBfbGFzdCA9IG5ldyBXZWFrTWFwKCk7XFxuXFxuICB2YXIgX3NpemUgPSBuZXcgV2Vha01hcCgpO1xcblxcbiAgcmV0dXJuIFF1ZXVlO1xcbn0oKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL1F1ZXVlLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvU3RhY2suanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvU3RhY2suanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG52YXIgU3RhY2sgPSBmdW5jdGlvbiAoKSB7XFxuICB2YXIgdG9wID0gU3ltYm9sKCd0b3AnKTsgLy9UbyBrZWVwIHRvcCBhcyBwcml2YXRlIGluIHN0YWNrXFxuXFxuICB2YXIgU3RhY2tOb2RlID0gZnVuY3Rpb24gU3RhY2tOb2RlKGRhdGEpIHtcXG4gICAgdmFyIG5leHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XFxuXFxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGFja05vZGUpO1xcblxcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xcbiAgICB0aGlzLm5leHQgPSBuZXh0O1xcbiAgfTtcXG5cXG4gIHZhciBTdGFjayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICAgIGZ1bmN0aW9uIFN0YWNrKCkge1xcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGFjayk7XFxuXFxuICAgICAgdGhpc1t0b3BdID0gbnVsbDtcXG4gICAgfVxcblxcbiAgICBfY3JlYXRlQ2xhc3MoU3RhY2ssIFt7XFxuICAgICAga2V5OiBcXFwicHVzaFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2goaXRlbSkge1xcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgU3RhY2tOb2RlKGl0ZW0pO1xcbiAgICAgICAgbm9kZS5uZXh0ID0gdGhpc1t0b3BdO1xcbiAgICAgICAgdGhpc1t0b3BdID0gbm9kZTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwb3BcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwb3AoKSB7XFxuICAgICAgICBpZiAodGhpc1t0b3BdID09PSBudWxsKSByZXR1cm4gbnVsbDtcXG4gICAgICAgIHZhciBpdGVtID0gdGhpc1t0b3BdLmRhdGE7XFxuICAgICAgICB0aGlzW3RvcF0gPSB0aGlzW3RvcF0ubmV4dDtcXG4gICAgICAgIHJldHVybiBpdGVtO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInBlZWtcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwZWVrKCkge1xcbiAgICAgICAgaWYgKHRoaXNbdG9wXSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XFxuICAgICAgICByZXR1cm4gdGhpc1t0b3BdLmRhdGE7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwiaXNFbXB0eVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XFxuICAgICAgICByZXR1cm4gdGhpc1t0b3BdID09PSBudWxsO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50U3RhY2tcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludFN0YWNrKCkge1xcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xcbiAgICAgICAgdmFyIGN1cnIgPSB0aGlzW3RvcF07XFxuXFxuICAgICAgICB3aGlsZSAoY3Vycikge1xcbiAgICAgICAgICByZXN1bHQucHVzaChjdXJyLmRhdGEpO1xcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgfSAvLyBjb25zb2xlLmxvZyhyZXN1bHQpXFxuXFxuXFxuICAgICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInN0YWNrVG9TdHJpbmdcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFja1RvU3RyaW5nKCkge1xcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucHJpbnRTdGFjaygpKTtcXG4gICAgICB9XFxuICAgIH1dKTtcXG5cXG4gICAgcmV0dXJuIFN0YWNrO1xcbiAgfSgpO1xcblxcbiAgcmV0dXJuIFN0YWNrO1xcbn0oKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL1N0YWNrLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvVHJpZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL1RyaWUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5ldmFsKFwidmFyIF90ZW1wLCBfcm9vdDtcXG5cXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcXFwidW5kZWZpbmVkXFxcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXFxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cXFwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1xcXCJyZXR1cm5cXFwiXSAhPSBudWxsKSBpdFtcXFwicmV0dXJuXFxcIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxcblxcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXFxcInN0cmluZ1xcXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcXFwiT2JqZWN0XFxcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXFxcIk1hcFxcXCIgfHwgbiA9PT0gXFxcIlNldFxcXCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXFxcIkFyZ3VtZW50c1xcXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XFxuXFxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXFxcInZhbHVlXFxcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5nZXQpIHsgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjcmlwdG9yLnZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5zZXQpIHsgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpOyB9IGVsc2UgeyBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFxcXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cXG5cXG4vKiBcXG5cXG5odHRwczovL2xlZXRjb2RlLmNvbS9wcm9ibGVtcy9pbXBsZW1lbnQtdHJpZS1wcmVmaXgtdHJlZS9zb2x1dGlvbi9cXG5WaXN1YWxpemUgYSB0cmllIGFzIGEgMjYgYnkgbiBtYXRyaXggd2l0aCBvbmUgd2F5IHJlbGF0aW9uIGJldHdlZW4gdGhlIGxldHRlcnMgaW4gZGlmZmVyZW50IGxldmVscy4gbiBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBsb25nZXN0IHdvcmQgaW4gdGhlIHRyaWUuXFxuXFxud29yZHMg4oCUIGRlZWQsIG5vbSwgbm9vblxcblxcbmEgIGIgIGMgIGQgIGUgIGYgIGcgIGggIGkgIGogIGsgIGwgIG0gIG4gIG8gLi4uXFxuICAgICAgICAgICDihpggICAgICAgICAgICAgICAgICAgICAgICAgICAg4oaYIFxcbmEgIGIgIGMgIGQgIGUgIGYgIGcgIGggIGkgIGogIGsgIGwgIG0gIG4gIG8gLi4uXFxuICAgICAgICAgICAg4oaTICAgICAgICAgICAgICAgICAgICAgICAgICAg4oaZIOKGk1xcbiAgICAgICAgICAgIOKGkyAgICAgICAgICAgICAgICAgICAgICAgICDihpkgICDihpNcXG5hICBiICBjICBkICBlICBmICBnICBoICBpICBqICBrICBsICBtICBuICBvIC4uLlxcbiAgICAgICAgICDihpkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGmVxcbmEgIGIgIGMgIGQgIGUgIGYgIGcgIGggIGkgIGogIGsgIGwgIG0gIG4gIG8gLi4uXFxuXFxuVGhlIHJvb3Qgd291bGQgbG9vayBsaWtlOlxcblxcbmNvbnN0IHRyaWUgPVxcbntcXG4gIGQ6IHsgZTogeyBlOiB7IGQ6IHsgaXNXb3JkOiB0cnVlIH0gfSB9IH0sXFxuICBuOiB7IG86IHsgbzogeyBuOiB7IGlzV29yZDogdHJ1ZSB9IH0sXFxuICAgICAgIG06IHsgaXNXb3JkOiB0cnVlIH0gfVxcbiAgICAgfVxcbn1cXG5cXG4qL1xcbi8vIFdlJ2xsIGFzc3VtZSB0aGF0IHRoZSB3b3JkcyBwcm92aWRlZCB3aWxsIGNvbnNpc3Qgb2YgbGV0dGVycyBvbmx5IGFuZCBhcmUgYWx3YXlzIGxvd2VyY2FzZVxcbnZhciBUcmllID0gKF90ZW1wID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gIGZ1bmN0aW9uIFRyaWUoKSB7XFxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmllKTtcXG5cXG4gICAgX3Jvb3Quc2V0KHRoaXMsIHtcXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICB2YWx1ZTogdm9pZCAwXFxuICAgIH0pO1xcblxcbiAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3Jvb3QsIHt9KTtcXG4gIH1cXG5cXG4gIF9jcmVhdGVDbGFzcyhUcmllLCBbe1xcbiAgICBrZXk6IFxcXCJfdHJhdmVyc2VcXFwiLFxcbiAgICAvLyBoZWxwZXIuIENoYW5nZSB0byBwcml2YXRlIHdoZW4gcHJpdmF0ZSBpbnN0YW5jZSBtZXRob2RzIGFyZSBzdXBwb3J0ZWRcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF90cmF2ZXJzZSh3b3JkKSB7XFxuICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpO1xcblxcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih3b3JkKSxcXG4gICAgICAgICAgX3N0ZXA7XFxuXFxuICAgICAgdHJ5IHtcXG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XFxuICAgICAgICAgIHZhciBjaCA9IF9zdGVwLnZhbHVlO1xcbiAgICAgICAgICBpZiAoIWN1cnIpIHJldHVybiBudWxsO1xcbiAgICAgICAgICBjdXJyID0gY3VycltjaF07XFxuICAgICAgICB9XFxuICAgICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xcbiAgICAgIH0gZmluYWxseSB7XFxuICAgICAgICBfaXRlcmF0b3IuZigpO1xcbiAgICAgIH1cXG5cXG4gICAgICByZXR1cm4gY3VycjtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJpbnNlcnRcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0KHdvcmQpIHtcXG4gICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCk7XFxuXFxuICAgICAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih3b3JkKSxcXG4gICAgICAgICAgX3N0ZXAyO1xcblxcbiAgICAgIHRyeSB7XFxuICAgICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xcbiAgICAgICAgICB2YXIgY2ggPSBfc3RlcDIudmFsdWU7XFxuICAgICAgICAgIGN1cnJbY2hdID0gY3VycltjaF0gPyBjdXJyW2NoXSA6IHt9O1xcbiAgICAgICAgICBjdXJyID0gY3VycltjaF07XFxuICAgICAgICB9XFxuICAgICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgICBfaXRlcmF0b3IyLmUoZXJyKTtcXG4gICAgICB9IGZpbmFsbHkge1xcbiAgICAgICAgX2l0ZXJhdG9yMi5mKCk7XFxuICAgICAgfVxcblxcbiAgICAgIGN1cnIuaXNXb3JkID0gdHJ1ZTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJzZWFyY2hcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VhcmNoKHdvcmQpIHtcXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX3RyYXZlcnNlKHdvcmQpO1xcblxcbiAgICAgIHJldHVybiBub2RlICE9PSBudWxsICYmIG5vZGUuaXNXb3JkID09PSB0cnVlO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInN0YXJ0c1dpdGhcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRzV2l0aCh3b3JkKSB7XFxuICAgICAgcmV0dXJuIHRoaXMuX3RyYXZlcnNlKHdvcmQpICE9PSBudWxsO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInJvb3RcXFwiLFxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KTtcXG4gICAgfVxcbiAgfV0pO1xcblxcbiAgcmV0dXJuIFRyaWU7XFxufSgpLCBfcm9vdCA9IG5ldyBXZWFrTWFwKCksIF90ZW1wKTtcXG5tb2R1bGUuZXhwb3J0cyA9IFRyaWU7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvVHJpZS5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxcblxcbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxcblxcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XFxuXFxudmFyIExpbmtlZExpc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0xpbmtlZExpc3QgKi8gXFxcIi4vc3JjL0xpbmtlZExpc3QuanNcXFwiKTtcXG5cXG52YXIgSGFzaFRhYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9IYXNoVGFibGUgKi8gXFxcIi4vc3JjL0hhc2hUYWJsZS5qc1xcXCIpO1xcblxcbnZhciBTdGFjayA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU3RhY2sgKi8gXFxcIi4vc3JjL1N0YWNrLmpzXFxcIik7XFxuXFxudmFyIFF1ZXVlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9RdWV1ZSAqLyBcXFwiLi9zcmMvUXVldWUuanNcXFwiKTtcXG5cXG52YXIgVHJlZVRyYXZlcnNhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQmluYXJ5VHJlZVRyYXZlcnNhbCAqLyBcXFwiLi9zcmMvQmluYXJ5VHJlZVRyYXZlcnNhbC5qc1xcXCIpO1xcblxcbnZhciBCaW5hcnlTZWFyY2hUcmVlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9CaW5hcnlTZWFyY2hUcmVlICovIFxcXCIuL3NyYy9CaW5hcnlTZWFyY2hUcmVlLmpzXFxcIik7XFxuXFxudmFyIFRyaWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1RyaWUgKi8gXFxcIi4vc3JjL1RyaWUuanNcXFwiKTtcXG5cXG52YXIgQmluYXJ5SGVhcCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQmluYXJ5SGVhcCAqLyBcXFwiLi9zcmMvQmluYXJ5SGVhcC9pbmRleC5qc1xcXCIpO1xcblxcbnZhciBHcmFwaFRyYXZlcnNhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vR3JhcGhUcmF2ZXJzYWwgKi8gXFxcIi4vc3JjL0dyYXBoVHJhdmVyc2FsLmpzXFxcIik7XFxuXFxudmFyIEdyYXBoID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9HcmFwaCAqLyBcXFwiLi9zcmMvR3JhcGguanNcXFwiKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQoe1xcbiAgTGlua2VkTGlzdDogTGlua2VkTGlzdCxcXG4gIEhhc2hUYWJsZTogSGFzaFRhYmxlLFxcbiAgU3RhY2s6IFN0YWNrLFxcbiAgUXVldWU6IFF1ZXVlLFxcbiAgVHJlZVRyYXZlcnNhbDogVHJlZVRyYXZlcnNhbCxcXG4gIEJpbmFyeVNlYXJjaFRyZWU6IEJpbmFyeVNlYXJjaFRyZWUsXFxuICBUcmllOiBUcmllXFxufSwgQmluYXJ5SGVhcCwge1xcbiAgR3JhcGhUcmF2ZXJzYWw6IEdyYXBoVHJhdmVyc2FsLFxcbiAgR3JhcGg6IEdyYXBoXFxufSk7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvaW5kZXguanM/XCIpO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYWluIHtcbiAgY29uc3RydWN0b3IoZGlzcGxheSwgY291bnQgPSAxLCBtYXggPSAxMCkge1xuICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXlcbiAgICB0aGlzLmNvdW50ID0gY291bnRcbiAgICB0aGlzLm1pbiA9IDBcbiAgICB0aGlzLm1heCA9IG1heFxuICB9XG5cbiAgc2V0Q291bnQgPSAoY291bnQpID0+IHtcbiAgICB0aGlzLmNvdW50ID0gY291bnRcbiAgfVxuXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0Q291bnQoMSlcbiAgICB0aGlzLnVwZGF0ZUNoYWluKClcbiAgfVxuXG4gIGluY3JlbWVudENvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gTWF0aC5taW4odGhpcy5jb3VudCArIDEsIHRoaXMubWF4KVxuICAgIHRoaXMuc2V0Q291bnQoY291bnQpXG4gICAgdGhpcy51cGRhdGVDaGFpbigpXG4gIH1cblxuICBkZWNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuY291bnRcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5tYXgoY291bnQgLSAxLCB0aGlzLm1pbilcbiAgICB0aGlzLnVwZGF0ZUNoYWluKClcbiAgfVxuXG4gIHVwZGF0ZUNoYWluID0gKCkgPT4ge1xuICAgIHRoaXMuZGlzcGxheS51cGRhdGVFbGVtZW50KCcjY2hhaW4nLCB0aGlzLmNvdW50KVxuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZUNoYWluKClcbiAgfVxufVxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL01vdmluZ09iamVjdCdcblxuY29uc3QgciA9IDEwLFxuICBjID0gJyNmNmU4NzInLFxuICB2ID0geyBkeDogMSwgZHk6IDEgfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZCBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBvcyxcbiAgICByYWRpdXMgPSByLFxuICAgIHdvcmxkLFxuICAgIHNwcml0ZSxcbiAgICBzaXplID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0sXG4gICAgdmVsID0gdixcbiAgICBjb2xvciA9IGNcbiAgKSB7XG4gICAgc3VwZXIocG9zLCByYWRpdXMsIHdvcmxkLCBzcHJpdGUsIHNpemUsIHZlbCwgY29sb3IpXG4gICAgdGhpcy5pbmRlcGVuZGVuY2UgPSB0cnVlXG4gICAgdGhpcy5jaGFpblBvcyA9IG51bGxcbiAgICB0aGlzLnBhcmVudCA9IG51bGxcbiAgICB0aGlzLm5leHRDaGlsZCA9IG51bGxcbiAgICB0aGlzLnBvc0NhY2hlID0gW11cbiAgICB0aGlzLm1vdmVzID0gdGhpcy5tb3Zlcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaXRzUHJlZGF0b3IgPSB0aGlzLmhpdHNQcmVkYXRvci5iaW5kKHRoaXMpXG4gICAgdGhpcy5zcHJpdGUgPSBzcHJpdGVcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBzZXRQYXJlbnQgPSAocGFyZW50KSA9PiB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgfVxuXG4gIHNldENoYWluUG9zID0gKGNoYWluUG9zKSA9PiB7XG4gICAgdGhpcy5jaGFpblBvcyA9IGNoYWluUG9zXG4gIH1cblxuICBzZXROZXh0Q2hpbGQgPSAoY2hpbGQpID0+IHtcbiAgICB0aGlzLm5leHRDaGlsZCA9IGNoaWxkXG4gIH1cblxuICBzZXRJbmRlcGVuZGVuY2UgPSAoaW5kZXBlbmRlbmNlKSA9PiB7XG4gICAgdGhpcy5pbmRlcGVuZGVuY2UgPSBpbmRlcGVuZGVuY2VcbiAgfVxuXG4gIGlzSW5kZXBlbmRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXBlbmRlbmNlXG4gIH1cblxuICBhdm9pZFByZWRhdG9yID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmluZGVwZW5kZW5jZSkge1xuICAgICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MsXG4gICAgICAgIHBvcyA9IHsgeDogeCArIHRoaXMuY3VyckRpclswXSwgeTogeSArIHRoaXMuY3VyckRpclsxXSB9XG5cbiAgICAgIHRoaXMuc2V0UmFuZG9tRGlyKClcbiAgICAgIHBvcyA9IHsgeDogeCArIHRoaXMuY3VyckRpclswXSwgeTogeSArIHRoaXMuY3VyckRpclsxXSB9XG5cbiAgICAgIHRoaXMuYm91bmNlQmFjayhwb3MpXG4gICAgfVxuICB9XG5cbiAgaGl0c1ByZWRhdG9yKGdhbWUpIHtcbiAgICBpZiAodGhpcy5pc0luZGVwZW5kZW50KCkpIGdhbWUuZGVzdHJveUNoaWxkKHRoaXMpXG4gICAgZWxzZSB7XG4gICAgICBsZXQgY3VyciA9IHRoaXMucGFyZW50LmRlbGV0ZUxhc3RDaGlsZCgpXG4gICAgICB3aGlsZSAoY3VyciAmJiBjdXJyICE9PSB0aGlzKSB7XG4gICAgICAgIGN1cnIgPSB0aGlzLnBhcmVudC5kZWxldGVMYXN0Q2hpbGQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdmVzKHBvcykge1xuICAgIGlmICh0aGlzLmlzSW5kZXBlbmRlbnQoKSkgc3VwZXIubW92ZXMoKVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgZWFzaW5nID0gTWF0aC5tYXgoMSAtIHRoaXMuY2hhaW5Qb3MgKiAwLjEzLCAwLjEpLFxuICAgICAgICByID0gdGhpcy5yYWRpdXMsXG4gICAgICAgIG9mZnNldCA9IDIgKiAociArIDEpICogdGhpcy5jaGFpblBvcyArICh0aGlzLnBhcmVudC5yYWRpdXMgLSByKSxcbiAgICAgICAgbmV4dENoaWxkID0gdGhpcy5uZXh0Q2hpbGRcblxuICAgICAgc3VwZXIubW92ZXNXaXRoQ3Vyc29yKHBvcywgZWFzaW5nLCBvZmZzZXQpXG5cbiAgICAgIGlmIChuZXh0Q2hpbGQpXG4gICAgICAgIG5leHRDaGlsZC5tb3Zlcyh0aGlzLnBvc0NhY2hlLmxlbmd0aCA/IHRoaXMucG9zQ2FjaGVbMF0gOiBwb3MpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIFJlbGF0ZWQgdG8gdGhlIERPTSBhbmQgZGlzcGxheSAoY3JlYXRpbmcgZWxlbWVudHMsIHVwZGF0aW5nIGVsZW1lbnRzIGV0Yy4pXG4gKi9cblxuaW1wb3J0IGNoaWxkQ291bnRJbWcgZnJvbSAnLi9pbWdzL2NvdW50LnBuZydcbmltcG9ydCBoZWFydCBmcm9tICcuL2ltZ3MvaGVhcnQuc3ZnJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET01EaXNwbGF5IHtcbiAgY29uc3RydWN0b3IoeyB3aWR0aCA9IDQwMCwgaGVpZ2h0ID0gNzAwIH0pIHtcbiAgICB0aGlzLmdhbWUgPSBudWxsXG4gICAgdGhpcy53b3JsZFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfVxuICAgIHRoaXMud29ybGRXcmFwcGVyID0gbnVsbFxuICAgIHRoaXMuZ2FtZUVuZCA9IG51bGxcbiAgICB0aGlzLmxlZ2VuZCA9IG51bGxcbiAgfVxuXG4gIGNyZWF0ZUltYWdlID0gKHNyYywgY2xhc3NOYW1lLCBpZCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nLnNyYyA9IHNyY1xuICAgIGlmIChjbGFzc05hbWUpIGltZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICBpZiAoaWQpIGltZy5pZCA9IGlkXG4gICAgcmV0dXJuIGltZ1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudCA9ICh0YWcsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXG4gICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZSkpIHtcbiAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBjbGFzc05hbWUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpZCkgZWxlbWVudC5pZCA9IGlkXG4gICAgaWYgKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJUZXh0ID0gY29udGVudFxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBnZXRFbGVtZW50ID0gKHNlbGVjdG9yKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gIH1cblxuICB1cGRhdGVFbGVtZW50ID0gKHNlbGVjdG9yLCB2YWwpID0+IHtcbiAgICB0aGlzLmdldEVsZW1lbnQoc2VsZWN0b3IpLmlubmVyVGV4dCA9IHZhbFxuICB9XG5cbiAgcmVuZGVyR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZ2FtZScsICdnYW1lJylcbiAgICB0aGlzLmdhbWUgPSBnYW1lXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdhbWUpXG4gIH1cblxuICByZW5kZXJUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RpdGxlJywgbnVsbClcbiAgICBjb25zdCBoZWFkaW5nID0gdGhpcy5jcmVhdGVFbGVtZW50KCdoMScsIG51bGwsIG51bGwsICdDSElDS0VOIE1FRVRTIFdPUk0nKVxuICAgIHRoaXMuZ2FtZS5hcHBlbmQodGl0bGUpXG4gICAgdGl0bGUuYXBwZW5kKGhlYWRpbmcpXG4gIH1cblxuICByZW5kZXJXb3JsZCA9ICgpID0+IHtcbiAgICBjb25zdCB3b3JsZFdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3b3JsZC13cmFwcGVyJyksXG4gICAgICB3b3JsZCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnY2FudmFzJywgbnVsbCwgJ3dvcmxkJyksXG4gICAgICBsZWdlbmQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdsZWdlbmQnKSxcbiAgICAgIHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy53b3JsZFNpemVcbiAgICB3b3JsZC53aWR0aCA9IHRoaXMud29ybGRTaXplLndpZHRoXG4gICAgd29ybGQuaGVpZ2h0ID0gdGhpcy53b3JsZFNpemUuaGVpZ2h0XG4gICAgdGhpcy5nYW1lLmFwcGVuZCh3b3JsZFdyYXBwZXIpXG4gICAgd29ybGRXcmFwcGVyLmFwcGVuZChsZWdlbmQpXG4gICAgd29ybGRXcmFwcGVyLmFwcGVuZCh3b3JsZClcbiAgICB3b3JsZFdyYXBwZXIuc3R5bGUud2lkdGggPSB3aWR0aCArIDIgKyAncHgnXG4gICAgd29ybGRXcmFwcGVyLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIDIgKyAncHgnXG4gICAgdGhpcy53b3JsZFdyYXBwZXIgPSB3b3JsZFdyYXBwZXJcbiAgICB0aGlzLmxlZ2VuZCA9IGxlZ2VuZFxuICAgIHRoaXMud29ybGQgPSB3b3JsZFxuICB9XG5cbiAgcmVuZGVyRW5lcmd5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGVuZXJneVdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgICdlbmVyZ3ktd3JhcHBlcicsXG4gICAgICAnZW5lcmd5LXdyYXBwZXInXG4gICAgKVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZENoaWxkKGVuZXJneVdyYXBwZXIpXG4gICAgdGhpcy51cGRhdGVFbmVyZ3lCYXIoNSlcbiAgfVxuXG4gIHJlbmRlckNoYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoYWluV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NoYWluLXdyYXBwZXInKVxuICAgIGNvbnN0IGNvdW50SW1nID0gdGhpcy5jcmVhdGVJbWFnZShjaGlsZENvdW50SW1nLCAnaW1hZ2UnLCAnY2hhaW4tY291bnQnKVxuICAgIGNvbnN0IGNoYWluID0gdGhpcy5jcmVhdGVFbGVtZW50KCdzcGFuJywgJ2xlZ2VuZC10ZXh0JywgJ2NoYWluJylcblxuICAgIHRoaXMubGVnZW5kLmFwcGVuZChjaGFpbldyYXBwZXIpXG4gICAgY2hhaW5XcmFwcGVyLmFwcGVuZChjb3VudEltZylcbiAgICBjaGFpbldyYXBwZXIuYXBwZW5kKGNoYWluKVxuICB9XG5cbiAgdXBkYXRlRW5lcmd5QmFyKGNvdW50KSB7XG4gICAgdmFyIGVXID0gdGhpcy5nZXRFbGVtZW50KCcjZW5lcmd5LXdyYXBwZXInKVxuICAgIGlmIChlVy5jaGlsZEVsZW1lbnRDb3VudCA+IGNvdW50KSB7XG4gICAgICB3aGlsZSAoZVcuY2hpbGRFbGVtZW50Q291bnQgPiBjb3VudCkge1xuICAgICAgICBlVy5yZW1vdmVDaGlsZCh0aGlzLmdldEVsZW1lbnQoJy5oZWFydC1mdWxsJykpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpID0gTWF0aC5taW4oY291bnQsIDUpXG4gICAgICB3aGlsZSAoZVcuY2hpbGRFbGVtZW50Q291bnQgPCBpKSB7XG4gICAgICAgIGNvbnN0IGhlYXJ0RnVsbCA9IHRoaXMuY3JlYXRlSW1hZ2UoaGVhcnQsICdoZWFydC1mdWxsJylcbiAgICAgICAgZVcuYXBwZW5kKGhlYXJ0RnVsbClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJTY29yZSA9ICgpID0+IHtcbiAgICBjb25zdCBzY29yZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydsZWdlbmQtdGV4dCcsICdzY29yZSddLCAnc2NvcmUnKVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZChzY29yZSlcbiAgfVxuXG4gIHJlbmRlckdhbWVFbmQgPSAoaGFuZGxlQ2xpY2tSZXBsYXksIHNjb3JlLCBoaWdoU2NvcmUpID0+IHtcbiAgICBjb25zdCBnYW1lRW5kV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2VuZC13cmFwcGVyJylcbiAgICBjb25zdCBnYW1lRW5kID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZ2FtZS1lbmQnKVxuICAgIGdhbWVFbmRXcmFwcGVyLnN0eWxlLndpZHRoID0gdGhpcy53b3JsZFNpemUud2lkdGggKyA0ICsgJ3B4J1xuICAgIHRoaXMuZ2FtZUVuZCA9IGdhbWVFbmRcbiAgICB0aGlzLmdhbWVFbmRXcmFwcGVyID0gZ2FtZUVuZFdyYXBwZXJcbiAgICB0aGlzLndvcmxkV3JhcHBlci5hcHBlbmQoZ2FtZUVuZFdyYXBwZXIpXG4gICAgZ2FtZUVuZFdyYXBwZXIuYXBwZW5kKGdhbWVFbmQpXG4gICAgdGhpcy5yZW5kZXJHYW1lT3Zlck1lc3NhZ2UoKVxuICAgIHRoaXMucmVuZGVyRW5kU2NvcmUoc2NvcmUsIGhpZ2hTY29yZSlcbiAgICB0aGlzLnJlbmRlclJlcGxheUJ1dHRvbihoYW5kbGVDbGlja1JlcGxheSlcbiAgfVxuXG4gIGNsZWFyR2FtZUVuZCA9ICgpID0+IHtcbiAgICB0aGlzLndvcmxkV3JhcHBlci5yZW1vdmVDaGlsZCh0aGlzLmdhbWVFbmRXcmFwcGVyKVxuICB9XG5cbiAgcmVuZGVyR2FtZU92ZXJNZXNzYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdnYW1lLW92ZXInLCBudWxsLCAnR2FtZSBPdmVyIScpXG4gICAgdGhpcy5nYW1lRW5kLmFwcGVuZChtZXNzYWdlKVxuICB9XG5cbiAgcmVuZGVyUmVwbGF5QnV0dG9uID0gKGhhbmRsZUNsaWNrUmVwbGF5KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnYnRuJywgJ3JlcGxheScpXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9ICdSZXBsYXknXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja1JlcGxheSlcbiAgICB0aGlzLmdhbWVFbmQuYXBwZW5kKGJ1dHRvbilcbiAgfVxuXG4gIHJlbmRlckVuZFNjb3JlID0gKHNjb3JlLCBoaWdoU2NvcmUpID0+IHtcbiAgICBjb25zdCBlbmRTY29yZVdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3cmFwcGVyJylcbiAgICBjb25zdCBlbmRTY29yZUxhYmVsID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgJ3Njb3JlLWxhYmVsJyxcbiAgICAgIG51bGwsXG4gICAgICAnWW91ciBzY29yZTogJ1xuICAgIClcbiAgICBjb25zdCBlbmRTY29yZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgICdzY29yZScsXG4gICAgICAnZW5kLXNjb3JlJyxcbiAgICAgIHNjb3JlLnRvU3RyaW5nKClcbiAgICApXG4gICAgY29uc3QgYmVzdFNjb3JlV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3dyYXBwZXInKVxuICAgIGNvbnN0IGJlc3RTY29yZUxhYmVsID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgJ3Njb3JlLWxhYmVsJyxcbiAgICAgIG51bGwsXG4gICAgICAnQmVzdCBzY29yZTogJ1xuICAgIClcbiAgICBjb25zdCBiZXN0U2NvcmUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICAnc2NvcmUnLFxuICAgICAgJ2Jlc3Qtc2NvcmUnLFxuICAgICAgaGlnaFNjb3JlLnRvU3RyaW5nKClcbiAgICApXG5cbiAgICBlbmRTY29yZVdyYXBwZXIuYXBwZW5kKGVuZFNjb3JlTGFiZWwpXG4gICAgZW5kU2NvcmVXcmFwcGVyLmFwcGVuZChlbmRTY29yZSlcbiAgICBiZXN0U2NvcmVXcmFwcGVyLmFwcGVuZChiZXN0U2NvcmVMYWJlbClcbiAgICBiZXN0U2NvcmVXcmFwcGVyLmFwcGVuZChiZXN0U2NvcmUpXG4gICAgdGhpcy5nYW1lRW5kLmFwcGVuZChlbmRTY29yZVdyYXBwZXIpXG4gICAgdGhpcy5nYW1lRW5kLmFwcGVuZChiZXN0U2NvcmVXcmFwcGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVyZ3kge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5LCBlbmVyZ3kgPSA1LCBtYXggPSA1KSB7XG4gICAgdGhpcy5kaXNwbGF5ID0gZGlzcGxheVxuICAgIHRoaXMuY291bnQgPSBlbmVyZ3lcbiAgICB0aGlzLm1pbiA9IDBcbiAgICB0aGlzLm1heCA9IG1heFxuICB9XG5cbiAgc2V0Q291bnQgPSAoY291bnQpID0+IHtcbiAgICB0aGlzLmNvdW50ID0gY291bnRcbiAgfVxuXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0Q291bnQodGhpcy5tYXgpXG4gICAgdGhpcy51cGRhdGVFbmVyZ3koKVxuICB9XG5cbiAgaW5jcmVtZW50Q291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSBNYXRoLm1pbih0aGlzLmNvdW50ICsgMSwgdGhpcy5tYXgpXG4gICAgdGhpcy5zZXRDb3VudChjb3VudClcbiAgICB0aGlzLnVwZGF0ZUVuZXJneSgpXG4gIH1cblxuICBkZWNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuY291bnRcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5tYXgoY291bnQgLSAxLCB0aGlzLm1pbilcbiAgICB0aGlzLnVwZGF0ZUVuZXJneSgpXG4gIH1cblxuICB1cGRhdGVFbmVyZ3kgPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNwbGF5LnVwZGF0ZUVuZXJneUJhcih0aGlzLmNvdW50KVxuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZUVuZXJneSgpXG4gIH1cbn1cbiIsImltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tICdkYXRhX3N0cnVjdHVyZXMnXG5pbXBvcnQgQ2hhaW4gZnJvbSAnLi9DaGFpbi5qcydcbmltcG9ydCBDaGlsZCBmcm9tICcuL0NoaWxkLmpzJ1xuaW1wb3J0IEVuZXJneSBmcm9tICcuL0VuZXJneS5qcydcbmltcG9ydCBjaGlsZEltZyBmcm9tICcuL2ltZ3MvY2hpbGQucG5nJ1xuaW1wb3J0IHBhcmVudEltYWdlIGZyb20gJy4vaW1ncy9wYXJlbnQucG5nJ1xuaW1wb3J0IHByZWRhdG9ySW1hZ2UgZnJvbSAnLi9pbWdzL3ByZWRhdG9yLnBuZydcbmltcG9ydCB3b3JtSW1hZ2UgZnJvbSAnLi9pbWdzL3dvcm0ucG5nJ1xuaW1wb3J0IFBhcmVudCBmcm9tICcuL1BhcmVudC5qcydcbmltcG9ydCBQcmVkYXRvciBmcm9tICcuL1ByZWRhdG9yLmpzJ1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IFdvcmxkIGZyb20gJy4vV29ybGQuanMnXG5pbXBvcnQgV29ybSBmcm9tICcuL1dvcm0uanMnXG5cbmNvbnN0IENoaWxkU3ByaXRlID0gbmV3IEltYWdlKClcbkNoaWxkU3ByaXRlLnNyYyA9IGNoaWxkSW1nXG5jb25zdCBQYXJlbnRTcHJpdGUgPSBuZXcgSW1hZ2UoKVxuUGFyZW50U3ByaXRlLnNyYyA9IHBhcmVudEltYWdlXG5jb25zdCBQcmVkYXRvclNwcml0ZSA9IG5ldyBJbWFnZSgpXG5QcmVkYXRvclNwcml0ZS5zcmMgPSBwcmVkYXRvckltYWdlXG5jb25zdCBXb3JtU3ByaXRlID0gbmV3IEltYWdlKClcbldvcm1TcHJpdGUuc3JjID0gd29ybUltYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5LCBjaGlsZENvdW50ID0gNSwgcHJlZGF0b3JDb3VudCA9IDQsIHdvcm1Db3VudCA9IDEpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5tb3VzZSA9IHsgeDogbnVsbCwgeTogbnVsbCB9XG4gICAgdGhpcy53b3JsZCA9IG51bGxcbiAgICB0aGlzLnBhcmVudCA9IG51bGxcbiAgICB0aGlzLnByZWRhdG9ycyA9IG5ldyBMaW5rZWRMaXN0KClcbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMud29ybXMgPSBuZXcgTGlua2VkTGlzdCgpXG4gICAgdGhpcy5jaGlsZENvdW50ID0gY2hpbGRDb3VudFxuICAgIHRoaXMucHJlZGF0b3JDb3VudCA9IHByZWRhdG9yQ291bnRcbiAgICB0aGlzLndvcm1Db3VudCA9IHdvcm1Db3VudFxuICAgIHRoaXMuY2hhaW4gPSBudWxsXG4gICAgdGhpcy5lbmVyZ3kgPSBudWxsXG4gICAgdGhpcy5zY29yZSA9IG51bGxcbiAgICB0aGlzLnRpbWVTaW5jZVdvcm0gPSAwXG4gICAgdGhpcy5hbmltYXRpb25SZXEgPSBudWxsXG4gIH1cblxuICBoYW5kbGVNb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgIHRoaXMubW91c2UgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH1cbiAgfVxuXG4gIGRlc3Ryb3lXb3JtID0gKHdvcm0pID0+IHtcbiAgICB0aGlzLndvcm1zLmRlbGV0ZU5vZGUod29ybSlcbiAgfVxuXG4gIGRlc3Ryb3lDaGlsZCA9IChjaGlsZCkgPT4ge1xuICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlTm9kZShjaGlsZClcbiAgICB0aGlzLnNwYXduQ2hpbGRyZW4oMTcuNSlcbiAgfVxuXG4gIGNoZWNrSW5SYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCxcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KCksXG4gICAgICBwcmVkYXRvcnMgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KCksXG4gICAgICB3b3JtcyA9IHRoaXMud29ybXMudG9BcnJheSgpXG5cbiAgICAvLyBDaGlsZCBwcmVkYXRvciBjb2xsaXNpb25zXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKHBhcmVudC5jaGVja0luUmFuZ2UoY2hpbGQpKSB7XG4gICAgICAgIHBhcmVudC5oaXRzQ2hpbGQoY2hpbGQpXG4gICAgICAgIHRoaXMuc3Bhd25DaGlsZHJlbigxNy41KVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBwcmVkYXRvciBvZiBwcmVkYXRvcnMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMTApKSBjaGlsZC5hdm9pZFByZWRhdG9yKClcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMCkpIGNoaWxkLmhpdHNQcmVkYXRvcih0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBQYXJlbnQgcHJlZGF0b3IgY29sbGlzaW9uc1xuICAgIGZvciAoY29uc3QgcHJlZGF0b3Igb2YgcHJlZGF0b3JzKSB7XG4gICAgICBpZiAocGFyZW50LmNoZWNrSW5SYW5nZShwcmVkYXRvciwgNSkpXG4gICAgICAgIHBhcmVudC5jaGVja0NvbGxpc2lvbldpdGhQcmVkYXRvcihwcmVkYXRvcilcbiAgICB9XG5cbiAgICAvL1BhcmVudCB3b3JtIGNvbGxpc2lvbnNcbiAgICBmb3IgKGNvbnN0IHdvcm0gb2Ygd29ybXMpIHtcbiAgICAgIGlmIChwYXJlbnQuY2hlY2tJblJhbmdlKHdvcm0sIDIpKSBwYXJlbnQuaGl0c1dvcm0odGhpcywgd29ybSlcbiAgICB9XG4gIH1cblxuICBzcGF3bkNoaWxkcmVuID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuICAgIGxldCBpbmRlcGVuZGVudEMgPSB0aGlzLmNoaWxkcmVuLnNpemUgLSB0aGlzLnBhcmVudC5nZXRDaGlsZENvdW50KClcblxuICAgIHdoaWxlIChpbmRlcGVuZGVudEMgPCB0aGlzLmNoaWxkQ291bnQgJiYgdGhpcy5jaGlsZENvdW50ID4gMCkge1xuICAgICAgY29uc3QgcmFuZG9tUG9zID0gdGhpcy53b3JsZC5nZXRSYW5kb21Qb3MociksXG4gICAgICAgIGNoaWxkID0gbmV3IENoaWxkKHJhbmRvbVBvcywgciwgdGhpcy53b3JsZCwgQ2hpbGRTcHJpdGUsIHNpemUpXG5cbiAgICAgIGNoaWxkLnNldFJhbmRvbURpcigpXG4gICAgICB0aGlzLmNoaWxkcmVuLmFwcGVuZFRvVGFpbChjaGlsZClcbiAgICAgIGluZGVwZW5kZW50QyA9IHRoaXMuY2hpbGRyZW4uc2l6ZSAtIHRoaXMucGFyZW50LmdldENoaWxkQ291bnQoKVxuICAgIH1cbiAgfVxuXG4gIHNwYXduUHJlZGF0b3JzID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuXG4gICAgd2hpbGUgKHRoaXMucHJlZGF0b3JzLnNpemUgPCB0aGlzLnByZWRhdG9yQ291bnQpIHtcbiAgICAgIGNvbnN0IHJhbmRvbVBvcyA9IHRoaXMud29ybGQuZ2V0UmFuZG9tUG9zKHIpLFxuICAgICAgICBwcmVkYXRvciA9IG5ldyBQcmVkYXRvcihyYW5kb21Qb3MsIHIsIHRoaXMud29ybGQsIFByZWRhdG9yU3ByaXRlLCBzaXplKVxuICAgICAgcHJlZGF0b3Iuc2V0UmFuZG9tRGlyKClcbiAgICAgIHRoaXMucHJlZGF0b3JzLmFwcGVuZFRvVGFpbChwcmVkYXRvcilcbiAgICB9XG4gIH1cblxuICBzcGF3bldvcm1zID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuXG4gICAgd2hpbGUgKHRoaXMud29ybXMuc2l6ZSA8IHRoaXMud29ybUNvdW50KSB7XG4gICAgICBjb25zdCByYW5kb21Qb3MgPSB0aGlzLndvcmxkLmdldFJhbmRvbVBvcyhyKSxcbiAgICAgICAgd29ybSA9IG5ldyBXb3JtKHJhbmRvbVBvcywgciwgdGhpcy53b3JsZCwgV29ybVNwcml0ZSwgc2l6ZSlcbiAgICAgIHdvcm0uc2V0UmFuZG9tRGlyKClcbiAgICAgIHRoaXMud29ybXMuYXBwZW5kVG9UYWlsKHdvcm0pXG4gICAgfVxuICB9XG5cbiAgaW5pdENoaWxkcmVuID0gKHJhZGl1cykgPT4ge1xuICAgIHRoaXMuc3Bhd25DaGlsZHJlbihyYWRpdXMpXG4gIH1cblxuICBpbml0UHJlZGF0b3JzID0gKHJhZGl1cykgPT4ge1xuICAgIHRoaXMuc3Bhd25QcmVkYXRvcnMocmFkaXVzKVxuICB9XG5cbiAgaW5pdFBhcmVudCA9IChyKSA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IHsgd2lkdGg6IHIgKiAyLCBoZWlnaHQ6IHIgKiAyIH1cbiAgICBjb25zdCBpbml0aWFsUG9zID0ge1xuICAgICAgeDogdGhpcy53b3JsZC5zaXplLndpZHRoIC8gMiArIHIsXG4gICAgICB5OiB0aGlzLndvcmxkLnNpemUuaGVpZ2h0IC8gMiArIHIsXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gbmV3IFBhcmVudChcbiAgICAgIGluaXRpYWxQb3MsXG4gICAgICByLFxuICAgICAgdGhpcy53b3JsZCxcbiAgICAgIHRoaXMuY2hhaW4sXG4gICAgICB0aGlzLnNjb3JlLFxuICAgICAgdGhpcy5lbmVyZ3ksXG4gICAgICBQYXJlbnRTcHJpdGUsXG4gICAgICBzaXplXG4gICAgKVxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50XG4gIH1cblxuICBpbml0V29ybXMgPSAocmFkaXVzKSA9PiB7XG4gICAgdGhpcy5zcGF3bldvcm1zKHJhZGl1cylcbiAgfVxuXG4gIGluaXRDaGFpbiA9IChjb3VudCkgPT4ge1xuICAgIGNvbnN0IGNoYWluID0gbmV3IENoYWluKHRoaXMuZGlzcGxheSwgY291bnQpXG4gICAgY2hhaW4uaW5pdCgpXG4gICAgdGhpcy5jaGFpbiA9IGNoYWluXG4gIH1cblxuICBpbml0V29ybGQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd29ybGQgPSBuZXcgV29ybGQodGhpcy5kaXNwbGF5KVxuICAgIHdvcmxkLmluaXQoKVxuICAgIHRoaXMud29ybGQgPSB3b3JsZFxuICB9XG5cbiAgaW5pdFNjb3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjb3JlID0gbmV3IFNjb3JlKHRoaXMuZGlzcGxheSlcbiAgICBzY29yZS5pbml0KClcbiAgICB0aGlzLnNjb3JlID0gc2NvcmVcbiAgfVxuXG4gIGluaXRFbmVyZ3kgPSAoKSA9PiB7XG4gICAgY29uc3QgZW5lcmd5ID0gbmV3IEVuZXJneSh0aGlzLmRpc3BsYXkpXG4gICAgZW5lcmd5LmluaXQoKVxuICAgIHRoaXMuZW5lcmd5ID0gZW5lcmd5XG4gIH1cblxuICByZXBsYXlHYW1lID0gKCkgPT4ge1xuICAgIHRoaXMucmVzZXRHYW1lKClcbiAgICB0aGlzLmRpc3BsYXkuY2xlYXJHYW1lRW5kKClcbiAgfVxuXG4gIHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLmVuZXJneS5yZXNldCgpXG4gICAgdGhpcy5zY29yZS5yZXNldCgpXG4gICAgdGhpcy5tb3VzZSA9IHsgeDogbnVsbCwgeTogbnVsbCB9XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsXG4gICAgdGhpcy5wcmVkYXRvcnMgPSBuZXcgTGlua2VkTGlzdCgpXG4gICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBMaW5rZWRMaXN0KClcbiAgICB0aGlzLndvcm1zID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMuY2hhaW4gPSBudWxsXG4gICAgdGhpcy50aW1lU2luY2VXb3JtID0gMFxuXG4gICAgdGhpcy5pbml0V29ybGQoKVxuICAgIHRoaXMuaW5pdENoYWluKDEpXG4gICAgdGhpcy5pbml0UGFyZW50KDMwKVxuICAgIHRoaXMuaW5pdENoaWxkcmVuKDE3LjUpXG4gICAgdGhpcy5pbml0UHJlZGF0b3JzKDM1KVxuICAgIHRoaXMuaW5pdFdvcm1zKDIwKVxuICAgIHRoaXMuYW5pbWF0aW9uUmVxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpXG4gICAgY29uc29sZS5sb2codGhpcy5zY29yZS5oaWdoU2NvcmUpXG4gIH1cblxuICBnYW1lT3ZlciA9ICgpID0+IHtcbiAgICB0aGlzLnNjb3JlLmNhbGN1bGF0ZUhpZ2hTY29yZSgpXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uUmVxKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJHYW1lRW5kKFxuICAgICAgdGhpcy5yZXBsYXlHYW1lLFxuICAgICAgdGhpcy5zY29yZS5zY29yZSxcbiAgICAgIHRoaXMuc2NvcmUuaGlnaFNjb3JlXG4gICAgKVxuICAgIHJldHVyblxuICB9XG5cbiAgZHJhdyA9ICh0aW1lc3RhbXApID0+IHtcbiAgICBpZiAodGhpcy5lbmVyZ3kuY291bnQgPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmdhbWVPdmVyKClcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lUGFzc2VkID0gdGltZXN0YW1wIC0gdGhpcy50aW1lU2luY2VXb3JtXG4gICAgaWYgKHRpbWVQYXNzZWQgPj0gMjUwMCAmJiB0aGlzLndvcm1zLnNpemUgPD0gMCkge1xuICAgICAgdGhpcy5zcGF3bldvcm1zKDIwKVxuICAgICAgdGhpcy50aW1lU2luY2VXb3JtID0gdGltZXN0YW1wXG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzID0gdGhpcy53b3JsZC5jYW52YXMsXG4gICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KCksXG4gICAgICBwcmVkYXRvcnMgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KCksXG4gICAgICB3b3JtcyA9IHRoaXMud29ybXMudG9BcnJheSgpXG5cbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgIHRoaXMucGFyZW50Lm1vdmVzKHRoaXMubW91c2UpXG4gICAgdGhpcy5wYXJlbnQuZHJhdyhjdHgsIHsgeDogMzAsIHk6IDI1IH0pXG5cbiAgICBmb3IgKGNvbnN0IHByZWRhdG9yIG9mIHByZWRhdG9ycykge1xuICAgICAgcHJlZGF0b3IubW92ZXMoKVxuICAgICAgcHJlZGF0b3IuZHJhdyhjdHgsIHsgeDogMzAsIHk6IDI1IH0pXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB3b3JtIG9mIHdvcm1zKSB7XG4gICAgICB3b3JtLm1vdmVzKHRoaXMpXG4gICAgICB3b3JtLmRyYXcoY3R4LCB7IHg6IDAsIHk6IDAgfSlcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBpZiAoY2hpbGQuaW5kZXBlbmRlbmNlKSBjaGlsZC5tb3ZlcygpXG4gICAgICBjaGlsZC5kcmF3KGN0eCwgeyB4OiAxNSwgeTogMTUgfSlcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrSW5SYW5nZSgpXG4gICAgdGhpcy5hbmltYXRpb25SZXEgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdylcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlckdhbWUoKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJUaXRsZSgpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlcldvcmxkKClcbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyU2NvcmUoKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJDaGFpbigpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlckVuZXJneSgpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUsIGZhbHNlKVxuICAgIHRoaXMuaW5pdEVuZXJneSgpXG4gICAgdGhpcy5pbml0V29ybGQoKVxuICAgIHRoaXMuaW5pdFNjb3JlKClcbiAgICB0aGlzLmluaXRDaGFpbigxKVxuICAgIHRoaXMuaW5pdFBhcmVudCgzMClcbiAgICB0aGlzLmluaXRDaGlsZHJlbigxNy41KVxuICAgIHRoaXMuaW5pdFByZWRhdG9ycygzNSlcbiAgICB0aGlzLmluaXRXb3JtcygyMClcbiAgICB0aGlzLmFuaW1hdGlvblJlcSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21JbnQsIGluUmFuZ2UgfSBmcm9tICcuL3V0aWxzJ1xuXG5jb25zdCByID0gMTAsXG4gIGMgPSAnIzcyODBmNicsXG4gIHYgPSB7IGR4OiAxLCBkeTogMSB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBvcywgcmFkaXVzID0gciwgd29ybGQsIHNwcml0ZSwgc2l6ZSwgdmVsID0gdiwgY29sb3IgPSBjKSB7XG4gICAgdGhpcy5wb3MgPSBwb3NcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICAgIHRoaXMud29ybGQgPSB3b3JsZFxuICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMudmVsID0gdmVsXG4gICAgdGhpcy5jdXJyRGlyID0gWzAsIDBdXG4gICAgdGhpcy5wb3NDYWNoZSA9IFtdXG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKVxuICAgIHRoaXMubW92ZXNXaXRoQ3Vyc29yID0gdGhpcy5tb3Zlc1dpdGhDdXJzb3IuYmluZCh0aGlzKVxuICAgIHRoaXMubW92ZXMgPSB0aGlzLm1vdmVzLmJpbmQodGhpcylcbiAgICB0aGlzLmNoZWNrSW5SYW5nZSA9IHRoaXMuY2hlY2tJblJhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhpdHNQYXJlbnQgPSB0aGlzLmhpdHNQYXJlbnQuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c1ByZWRhdG9yID0gdGhpcy5oaXRzUHJlZGF0b3IuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c0NoaWxkID0gdGhpcy5oaXRzQ2hpbGQuYmluZCh0aGlzKVxuICB9XG5cbiAgc2V0UG9zID0gKHBvcykgPT4ge1xuICAgIHRoaXMucG9zID0gcG9zXG4gIH1cblxuICBzZXRQb3NDYWNoZSA9IChwb3NDYWNoZSkgPT4ge1xuICAgIHRoaXMucG9zQ2FjaGUgPSBwb3NDYWNoZVxuICB9XG5cbiAgc2V0Q3VyckRpciA9IChkaXIpID0+IHtcbiAgICB0aGlzLmN1cnJEaXIgPSBkaXJcbiAgfVxuXG4gIHNldFJhbmRvbURpciA9ICgpID0+IHtcbiAgICAvKiBcbiAgICA4IHBvc3NpYmxlIGRpcmVjdGlvbnMuXG4gICAgVmVydGljYWwgYW5kIGhvcml6b250YWw6IFxuICAgICAgICDihpEgICAgICBcbiAgICAgICAg4oaRXG4gICDihpAgIOKGkCAgIOKGkiAg4oaSICBcbiAgICAgICAg4oaTXG4gICAgICAgIOKGkyBcbiAgICBEaWFnb25hbHM6XG4gICAg4oaWICAgICAg4oaXXG4gICAgICDihpYgIOKGl1xuICAgICAg4oaZICDihpggXG4gICAg4oaZICAgICAg4oaYXG4gICAgKi9cblxuICAgIGNvbnN0IHsgZHgsIGR5IH0gPSB0aGlzLnZlbFxuICAgIGNvbnN0IGluZGV4ID0gZ2V0UmFuZG9tSW50KDgpXG4gICAgY29uc3QgcG9zc2libGVEaXJlY3Rpb25zID0gW1xuICAgICAgLy8gMCB2YWx1ZXMgb2ZmIHNsaWdodGx5IHNvIG9iamVjdHMgZG9lc24ndCBzdGljayB0byBlZGdlcy5cbiAgICAgIFtkeCwgMC4yXSxcbiAgICAgIFstZHgsIDAuM10sXG4gICAgICBbMC4xNSwgZHldLFxuICAgICAgWzAuMjMsIC1keV0sXG4gICAgICBbZHgsIGR5XSxcbiAgICAgIFstZHgsIGR5XSxcbiAgICAgIFtkeCwgLWR5XSxcbiAgICAgIFstZHgsIC1keV0sXG4gICAgXVxuXG4gICAgdGhpcy5zZXRDdXJyRGlyKHBvc3NpYmxlRGlyZWN0aW9uc1tpbmRleF0pXG4gIH1cblxuICBjaGVja091dE9mQm91bmRzID0gKHBvcykgPT4ge1xuICAgIHJldHVybiB0aGlzLndvcmxkLmNoZWNrT3V0T2ZCb3VuZHMocG9zLCB0aGlzLnJhZGl1cylcbiAgfVxuXG4gIGdldFJhbmRvbVBvcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy53b3JsZC5nZXRSYW5kb21Qb3ModGhpcy5yYWRpdXMpXG4gIH1cbiAgLyoqIEJvdW5jZSBvYmplY3QgYmFjayBpZiBpdCBoaXRzIHRoZSB3YWxsICovXG4gIGJvdW5jZUJhY2sgPSAocG9zKSA9PiB7XG4gICAgY29uc3QgeyBib3VuZHMgfSA9IHRoaXMud29ybGQsXG4gICAgICB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9ID0gYm91bmRzLFxuICAgICAgciA9IHRoaXMucmFkaXVzXG5cbiAgICBsZXQgeyB4LCB5IH0gPSBwb3MsXG4gICAgICBbZHgsIGR5XSA9IHRoaXMuY3VyckRpclxuXG4gICAgaWYgKHggKyByID4gcmlnaHQgfHwgeCAtIHIgPCBsZWZ0KSB7XG4gICAgICB0aGlzLnNldEN1cnJEaXIoWy1keCwgZHldKVxuICAgIH1cblxuICAgIGlmICh5IC0gciA8IHRvcCB8fCB5ICsgciA+IGJvdHRvbSkge1xuICAgICAgdGhpcy5zZXRDdXJyRGlyKFtkeCwgLWR5XSlcbiAgICB9XG4gICAgLy9vYmpzIGdldCBzdHVjayBpZiBwYXJhbGxlbCB0byB3YWxscyBhbmQgb3V0IG9mIGJvdW5kc1xuICAgIGxldCBuUG9zID0geyB4OiB4ICsgdGhpcy5jdXJyRGlyWzBdLCB5OiB5ICsgdGhpcy5jdXJyRGlyWzFdIH1cbiAgICBpZiAodGhpcy5jaGVja091dE9mQm91bmRzKG5Qb3MpKSB0aGlzLnNldFJhbmRvbURpcigpXG4gIH1cblxuICBjaGVja0luUmFuZ2Uob2JqLCBjdXNoaW9uID0gMCkge1xuICAgIC8vIE5vdGU6IG9iai5jb25zdHJ1Y3Rvci5uYW1lIHdvbid0IHdvcmsgd2l0aCBJRSBhbmQgdGhlcmUgYXJlIHNvbWUgY2F2ZWF0cy4gTW9yZSBpbmZvIC0tPiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9GdW5jdGlvbi9uYW1lXG5cbiAgICBjb25zdCBvUG9zID0gb2JqLnBvcyxcbiAgICAgIG9SID0gb2JqLnJhZGl1cyArIGN1c2hpb24sXG4gICAgICB7IHgsIHkgfSA9IHRoaXMucG9zLFxuICAgICAgcmFuZ2VYID0gW29Qb3MueCAtIG9SLCBvUG9zLnggKyBvUl0sXG4gICAgICByYW5nZVkgPSBbb1Bvcy55IC0gb1IsIG9Qb3MueSArIG9SXSxcbiAgICAgIHIgPSB0aGlzLnJhZGl1cyArIGN1c2hpb25cblxuICAgIGNvbnN0IHdpdGhpblJhbmdlID1cbiAgICAgIChpblJhbmdlKHggLSByLCAuLi5yYW5nZVgpIHx8IGluUmFuZ2UoeCArIHIsIC4uLnJhbmdlWCkpICYmXG4gICAgICAoaW5SYW5nZSh5IC0gciwgLi4ucmFuZ2VZKSB8fCBpblJhbmdlKHkgKyByLCAuLi5yYW5nZVkpKVxuXG4gICAgcmV0dXJuIHdpdGhpblJhbmdlXG4gIH1cblxuICAvLyBDYW4ndCB1c2UgQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1jbGFzcy1wcm9wZXJ0aWVzLiBzdXBlci5tb3ZlKCkgZG9lc24ndCB3b3JrIGluIHN1YmNsYXNzZXMuXG4gIGhpdHNQYXJlbnQob2JqKSB7fVxuXG4gIGhpdHNQcmVkYXRvcihvYmopIHt9XG5cbiAgaGl0c0NoaWxkKG9iaikge31cblxuICAvKiogRHJhdyB0aGUgb2JqZWN0IG9uIGNhbnZhcyAqL1xuICBkcmF3ID0gKGN0eCwgb2Zmc2V0ID0geyB4OiAwLCB5OiAwIH0pID0+IHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMucG9zXG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuc3ByaXRlLFxuICAgICAgeCAtIG9mZnNldC54LFxuICAgICAgeSAtIG9mZnNldC55LFxuICAgICAgdGhpcy5zaXplLndpZHRoLFxuICAgICAgdGhpcy5zaXplLmhlaWdodFxuICAgIClcbiAgfVxuXG4gIGNsaXBQb3MgPSAoeyB4LCB5IH0pID0+IHtcbiAgICBjb25zdCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9ID0gdGhpcy53b3JsZC5ib3VuZHMsXG4gICAgICByID0gdGhpcy5yYWRpdXNcblxuICAgIGNvbnN0IGNsaXBwZWRYID0geCA+IGxlZnQgKyByICYmIHggPCByaWdodCAtIHIgPyB4IDogdGhpcy5wb3MueCxcbiAgICAgIGNsaXBwZWRZID0geSA+IHRvcCArIHIgJiYgeSA8IGJvdHRvbSAtIHIgPyB5IDogdGhpcy5wb3MueVxuXG4gICAgcmV0dXJuIHsgeDogY2xpcHBlZFgsIHk6IGNsaXBwZWRZIH1cbiAgfVxuXG4gIG1vdmVzV2l0aEN1cnNvcihwb3MsIGVhc2luZywgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0gdGhpcy53b3JsZFxuICAgIGxldCB7IHgsIHkgfSA9IHBvc1xuXG4gICAgLy8gT2Zmc2V0cyB0byBhY2NvdW50IGZvciBtYXJnaW4sIHBhZGRpbmdzIGFyb3VuZCBnYW1lIHdvcmxkLlxuICAgIGNvbnN0IG9mZnNldEwgPSBvZmZzZXRzLmxlZnQsXG4gICAgICBvZmZzZXRUID0gb2Zmc2V0cy50b3AsXG4gICAgICByZWxhdGl2ZVggPSB4IC0gb2Zmc2V0TCxcbiAgICAgIHJlbGF0aXZlWSA9IHkgLSBvZmZzZXRUXG5cbiAgICBsZXQgeERpZmYgPSByZWxhdGl2ZVggLSB0aGlzLnBvcy54LFxuICAgICAgeURpZmYgPSByZWxhdGl2ZVkgLSB0aGlzLnBvcy55XG5cbiAgICAvLyBPZmZzZXQgY2hpbGRyZW4gc28gdGhleSBkb24ndCBhbGwgb3ZlcmxhcCB0aGUgcGFyZW50IHdoZW4gc3RhdGlvbmFyeSBvciBzbG93IG1vdmluZy5cbiAgICBpZiAoeURpZmYgPD0gMCkgeURpZmYgKz0gb2Zmc2V0XG4gICAgLy9Nb3JlIGluZm8gb24gdHdlZW5pbmcsIGFuaW1hdGlvbiAtLT4gaHR0cHM6Ly9zcGljeXlvZ2h1cnQuY29tL3R1dG9yaWFscy9odG1sNS1qYXZhc2NyaXB0LWdhbWUtZGV2ZWxvcG1lbnQvY3JlYXRlLWEtc21vb3RoLWNhbnZhcy1hbmltYXRpb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM3OTczNTc3LzExMjc5ODExXG4gICAgY29uc3QgdmVsWCA9IHhEaWZmICogZWFzaW5nLFxuICAgICAgdmVsWSA9IHlEaWZmICogZWFzaW5nXG5cbiAgICB0aGlzLnZlbG9jaXR5ID0geyB4OiB2ZWxYLCB5OiB2ZWxZIH1cblxuICAgIHggPSB0aGlzLnBvcy54ICsgdmVsWFxuICAgIHkgPSB0aGlzLnBvcy55ICsgdmVsWVxuXG4gICAgLy9Eb24ndCBsZXQgb2JqZWN0cyBwYXNzIGVkZ2VcbiAgICBjb25zdCBjbGlwcGVkUG9zID0gdGhpcy5jbGlwUG9zKHsgeCwgeSB9KVxuXG4gICAgdGhpcy5zZXRQb3MoY2xpcHBlZFBvcylcblxuICAgIC8vIENhY2hlIGxhc3QgNSBwb3NpdGlvbnMuIE1ha2VzIGNoaWxkcmVuJ3MgbW92ZW1lbnQgbW9yZSBuYXR1cmFsLlxuICAgIGNvbnN0IHBvc0NhY2hlID0gdGhpcy5wb3NDYWNoZVxuICAgIGlmIChwb3NDYWNoZS5sZW5ndGggPiA0KSBwb3NDYWNoZS5zaGlmdCgpXG4gICAgcG9zQ2FjaGUucHVzaChwb3MpXG4gICAgdGhpcy5zZXRQb3NDYWNoZShwb3NDYWNoZSlcbiAgfVxuXG4gIG1vdmVzKCkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zLFxuICAgICAgcG9zID0geyB4OiB4ICsgdGhpcy5jdXJyRGlyWzBdLCB5OiB5ICsgdGhpcy5jdXJyRGlyWzFdIH1cblxuICAgIGlmICh0aGlzLmNoZWNrT3V0T2ZCb3VuZHMocG9zKSkgdGhpcy5ib3VuY2VCYWNrKHBvcylcblxuICAgIHRoaXMuc2V0UG9zKHBvcylcbiAgfVxufVxuIiwiaW1wb3J0IHsgTGlua2VkTGlzdCB9IGZyb20gJ2RhdGFfc3RydWN0dXJlcydcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9Nb3ZpbmdPYmplY3QnXG5cbmNvbnN0IHIgPSAxMyxcbiAgYyA9ICcjNzI4MGY2JyxcbiAgZSA9IDAuOVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJlbnQgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwb3MsXG4gICAgcmFkaXVzID0gcixcbiAgICB3b3JsZCxcbiAgICBjaGFpbixcbiAgICBzY29yZSxcbiAgICBlbmVyZ3ksXG4gICAgc3ByaXRlLFxuICAgIHNpemUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSxcbiAgICBjb2xvciA9IGMsXG4gICAgZWFzaW5nID0gZVxuICApIHtcbiAgICBzdXBlcihwb3MsIHJhZGl1cywgd29ybGQsIHNwcml0ZSwgc2l6ZSwgbnVsbCwgY29sb3IpXG4gICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBMaW5rZWRMaXN0KClcbiAgICB0aGlzLmNoYWluID0gY2hhaW5cbiAgICB0aGlzLnNjb3JlID0gc2NvcmVcbiAgICB0aGlzLmVuZXJneSA9IGVuZXJneVxuICAgIHRoaXMuZWFzaW5nID0gZWFzaW5nXG4gICAgdGhpcy5jdXJyUHJlZENvbHMgPSBbXVxuICAgIHRoaXMucG9zQ2FjaGUgPSBbXVxuICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICAgIHRoaXMubW92ZXMgPSB0aGlzLm1vdmVzLmJpbmQodGhpcylcbiAgICB0aGlzLmhpdHNQcmVkYXRvciA9IHRoaXMuaGl0c1ByZWRhdG9yLmJpbmQodGhpcylcbiAgICB0aGlzLmhpdHNDaGlsZCA9IHRoaXMuaGl0c0NoaWxkLmJpbmQodGhpcylcbiAgfVxuXG4gIHNldEN1cnJQcmVkQ29scyA9IChjdXJyUHJlZENvbHMpID0+IHtcbiAgICB0aGlzLmN1cnJQcmVkQ29scyA9IGN1cnJQcmVkQ29sc1xuICB9XG5cbiAgZ2V0Q2hpbGRDb3VudCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5zaXplXG4gIH1cblxuICBkZWxldGVMYXN0Q2hpbGQgPSAoKSA9PiB7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmNoaWxkcmVuLmRlbGV0ZUZyb21UYWlsKClcbiAgICBpZiAoY3Vycikge1xuICAgICAgY3Vyci5zZXRDaGFpblBvcyhudWxsKVxuICAgICAgY3Vyci5zZXROZXh0Q2hpbGQobnVsbClcbiAgICAgIGN1cnIuc2V0SW5kZXBlbmRlbmNlKHRydWUpXG4gICAgICB0aGlzLmNoYWluLmRlY3JlbWVudENvdW50KClcbiAgICAgIGN1cnIuc2V0UGFyZW50KG51bGwpXG4gICAgfVxuICAgIHJldHVybiBjdXJyXG4gIH1cblxuICBkZXN0cm95Q2hpbGQgPSAoY2hpbGQpID0+IHtcbiAgICB0aGlzLmNoaWxkcmVuLmRlbGV0ZU5vZGUoY2hpbGQpXG4gIH1cblxuICBhcHBlbmRDaGlsZCA9IChjaGlsZCkgPT4ge1xuICAgIGlmICghdGhpcy5jaGlsZHJlbi5zZWFyY2goY2hpbGQpKSB7XG4gICAgICB0aGlzLmNoYWluLmluY3JlbWVudENvdW50KClcbiAgICAgIHRoaXMuc2NvcmUuY2FsY3VsYXRlU2NvcmUodGhpcy5nZXRDaGlsZENvdW50KCkpXG4gICAgICBjb25zdCB0YWlsID0gdGhpcy5jaGlsZHJlbi50YWlsLFxuICAgICAgICBsYXN0Q2hpbGQgPSB0YWlsICYmIHRhaWwudmFsXG4gICAgICBpZiAobGFzdENoaWxkKSBsYXN0Q2hpbGQuc2V0TmV4dENoaWxkKGNoaWxkKVxuXG4gICAgICB0aGlzLmNoaWxkcmVuLmFwcGVuZFRvVGFpbChjaGlsZClcblxuICAgICAgY2hpbGQuc2V0Q2hhaW5Qb3ModGhpcy5nZXRDaGlsZENvdW50KCkpXG4gICAgICBjaGlsZC5zZXRQYXJlbnQodGhpcylcbiAgICB9XG4gIH1cblxuICBjaGVja0NvbGxpc2lvbldpdGhQcmVkYXRvciA9IChwcmVkYXRvcikgPT4ge1xuICAgIGNvbnN0IGNvbGxpZGVkID0gc3VwZXIuY2hlY2tJblJhbmdlKHByZWRhdG9yKSxcbiAgICAgIGNvbGxpZGluZyA9IHRoaXMuY3VyclByZWRDb2xzLmluY2x1ZGVzKHByZWRhdG9yKVxuXG4gICAgLyogaWYgY29sbGlkZWQgYW5kIGZpcnN0IGNvbnRhY3QsXG4gICAgICBhZGQgcHJlZGF0b3IgdG8gdGhlIGN1cnJlbnQgY29sbGlzaW9ucyB3aXRoIHByZWRhdG9yLFxuICAgICAgY2FsbCBjb2xsaWRlIHdpdGggcHJlZGF0b3IgKGRlY3JlbWVudCBjaGFpbiBjb3VudClcbiAgICAqL1xuICAgIGlmIChjb2xsaWRlZCAmJiAhY29sbGlkaW5nKSB7XG4gICAgICBjb25zdCBjdXJyUHJlZENvbHMgPSB0aGlzLmN1cnJQcmVkQ29scy5zbGljZSgpXG4gICAgICBjdXJyUHJlZENvbHMucHVzaChwcmVkYXRvcilcbiAgICAgIHRoaXMuc2V0Q3VyclByZWRDb2xzKGN1cnJQcmVkQ29scylcbiAgICAgIHRoaXMuaGl0c1ByZWRhdG9yKClcbiAgICB9XG5cbiAgICAvKiBpZiB3YXMgY29sbGlkaW5nIGFuZCBzdG9wcGVkIGNvbGxpZGluZywgcmVtb3ZlIHByZWRhdG9yIGZyb20gY3VycmVudCBjb2xsaXNpb25zICovXG4gICAgaWYgKCFjb2xsaWRlZCAmJiBzdXBlci5jaGVja0luUmFuZ2UocHJlZGF0b3IsIDUpICYmIGNvbGxpZGluZykge1xuICAgICAgY29uc3QgY3VyclByZWRDb2xzID0gdGhpcy5jdXJyUHJlZENvbHMuc2xpY2UoKSxcbiAgICAgICAgaW5kZXggPSBjdXJyUHJlZENvbHMuaW5kZXhPZihwcmVkYXRvcilcbiAgICAgIGN1cnJQcmVkQ29scy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB0aGlzLnNldEN1cnJQcmVkQ29scyhjdXJyUHJlZENvbHMpXG4gICAgfVxuICB9XG5cbiAgaGl0c1ByZWRhdG9yKCkge1xuICAgIHRoaXMuY2hhaW4ucmVzZXQoKVxuICAgIHRoaXMuZW5lcmd5LmRlY3JlbWVudENvdW50KClcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4udG9BcnJheSgpXG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZC5zZXRQYXJlbnQobnVsbClcbiAgICAgIGNoaWxkLnNldENoYWluUG9zKG51bGwpXG4gICAgICBjaGlsZC5zZXROZXh0Q2hpbGQobnVsbClcbiAgICAgIGNoaWxkLnNldEluZGVwZW5kZW5jZSh0cnVlKVxuICAgIH1cblxuICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgTGlua2VkTGlzdCgpXG4gIH1cblxuICBoaXRzQ2hpbGQob2JqKSB7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChvYmopXG4gICAgb2JqLnNldEluZGVwZW5kZW5jZShmYWxzZSlcbiAgfVxuXG4gIGhpdHNXb3JtKGdhbWUsIHdvcm0pIHtcbiAgICB0aGlzLmVuZXJneS5pbmNyZW1lbnRDb3VudCgpXG4gICAgZ2FtZS5kZXN0cm95V29ybSh3b3JtKVxuICB9XG5cbiAgbW92ZXMocG9zKSB7XG4gICAgc3VwZXIubW92ZXNXaXRoQ3Vyc29yKHBvcywgdGhpcy5lYXNpbmcpXG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGRyZW4uaGVhZCAmJiB0aGlzLmNoaWxkcmVuLmhlYWQudmFsXG5cbiAgICBpZiAoZmlyc3RDaGlsZClcbiAgICAgIGZpcnN0Q2hpbGQubW92ZXModGhpcy5wb3NDYWNoZS5sZW5ndGggPyB0aGlzLnBvc0NhY2hlWzBdIDogcG9zKVxuICB9XG59XG4iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vTW92aW5nT2JqZWN0J1xuXG5jb25zdCByID0gMTAsXG4gIGMgPSAnI2Y2NzI4MCcsXG4gIHYgPSB7IGR4OiAyLjIsIGR5OiAyLjIgfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVkYXRvciBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBvcyxcbiAgICByYWRpdXMgPSByLFxuICAgIHdvcmxkLFxuICAgIHNwcml0ZSxcbiAgICBzaXplID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0sXG4gICAgdmVsID0gdixcbiAgICBjb2xvciA9IGNcbiAgKSB7XG4gICAgc3VwZXIocG9zLCByYWRpdXMsIHdvcmxkLCBzcHJpdGUsIHNpemUsIHZlbCwgY29sb3IpXG4gICAgdGhpcy5zcHJpdGUgPSBzcHJpdGVcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIHtcbiAgY29uc3RydWN0b3IoZGlzcGxheSkge1xuICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXlcbiAgICB0aGlzLnNjb3JlID0gMFxuICAgIHRoaXMuaGlnaFNjb3JlID0gMFxuICB9XG5cbiAgc2V0U2NvcmUgPSAoc2NvcmUpID0+IHtcbiAgICB0aGlzLnNjb3JlID0gc2NvcmVcbiAgfVxuXG4gIHNldEhpZ2hTY29yZSA9IChzY29yZSkgPT4ge1xuICAgIHRoaXMuaGlnaFNjb3JlID0gc2NvcmVcbiAgfVxuXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U2NvcmUoMClcbiAgICB0aGlzLnVwZGF0ZVNjb3JlKClcbiAgfVxuXG4gIGNhbGN1bGF0ZVNjb3JlID0gKGNoaWxkQ291bnQpID0+IHtcbiAgICBsZXQgY2hhaW5Db3VudCA9IDEgKyBjaGlsZENvdW50IC8vY291bnQgcGFyZW50XG4gICAgbGV0IHNjb3JlVG9BZGQgPSBjaGFpbkNvdW50ICogY2hhaW5Db3VudCAqIDEwXG4gICAgY29uc3QgbmV3U2NvcmUgPSB0aGlzLnNjb3JlICsgc2NvcmVUb0FkZFxuICAgIHRoaXMuc2V0U2NvcmUobmV3U2NvcmUpXG4gICAgdGhpcy51cGRhdGVTY29yZSgpXG4gIH1cblxuICBjYWxjdWxhdGVIaWdoU2NvcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgaGlnaFNjb3JlID0gTWF0aC5tYXgodGhpcy5zY29yZSwgdGhpcy5oaWdoU2NvcmUpXG4gICAgdGhpcy5zZXRIaWdoU2NvcmUoaGlnaFNjb3JlKVxuICB9XG5cbiAgdXBkYXRlU2NvcmUgPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNwbGF5LnVwZGF0ZUVsZW1lbnQoJyNzY29yZScsIHRoaXMuc2NvcmUpXG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIHRoaXMudXBkYXRlU2NvcmUoKVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21CZXR3ZWVuIH0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ybGQge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5KSB7XG4gICAgdGhpcy5kaXNwbGF5ID0gZGlzcGxheVxuICAgIHRoaXMuY2FudmFzID0gZGlzcGxheS53b3JsZFxuICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGlzcGxheS53b3JsZFNpemVcbiAgICB0aGlzLmJvdW5kcyA9IHsgdG9wOiBudWxsLCByaWdodDogbnVsbCwgYm90dG9tOiBudWxsLCByaWdodDogbnVsbCB9XG4gICAgdGhpcy5vZmZzZXRzID0geyB0b3A6IG51bGwsIGxlZnQ6IG51bGwgfVxuICB9XG5cbiAgc2V0Qm91bmRzKGJvdW5kcykge1xuICAgIHRoaXMuYm91bmRzID0gYm91bmRzXG4gIH1cblxuICBzZXRPZmZzZXRzKG9mZnNldHMpIHtcbiAgICB0aGlzLm9mZnNldHMgPSBvZmZzZXRzXG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgdG9wID0gMCxcbiAgICAgIGxlZnQgPSAwLFxuICAgICAgYm90dG9tID0gdG9wICsgdGhpcy5jYW52YXMuaGVpZ2h0LFxuICAgICAgcmlnaHQgPSBsZWZ0ICsgdGhpcy5jYW52YXMud2lkdGhcblxuICAgIHJldHVybiB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9XG4gIH1cblxuICBjaGVja091dE9mQm91bmRzID0gKHBvcywgcikgPT4ge1xuICAgIGNvbnN0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IH0gPSB0aGlzLmJvdW5kcyxcbiAgICAgIHsgeCwgeSB9ID0gcG9zXG5cbiAgICBpZiAoeCAtIHIgPCBsZWZ0KSByZXR1cm4gdHJ1ZVxuICAgIGlmICh4ICsgciA+IHJpZ2h0KSByZXR1cm4gdHJ1ZVxuICAgIGlmICh5IC0gciA8IHRvcCkgcmV0dXJuIHRydWVcbiAgICBpZiAoeSArIHIgPiBib3R0b20pIHJldHVybiB0cnVlXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5jYW52YXMub2Zmc2V0VG9wLFxuICAgICAgbGVmdCA9IHRoaXMuY2FudmFzLm9mZnNldExlZnRcbiAgICByZXR1cm4geyB0b3AsIGxlZnQgfVxuICB9XG5cbiAgZ2V0UmFuZG9tUG9zID0gKHJhZGl1cykgPT4ge1xuICAgIGNvbnN0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IH0gPSB0aGlzLmJvdW5kcyxcbiAgICAgIHIgPSByYWRpdXNcblxuICAgIGNvbnN0IHggPSBnZXRSYW5kb21CZXR3ZWVuKGxlZnQgKyByLCByaWdodCAtIHIpLFxuICAgICAgeSA9IGdldFJhbmRvbUJldHdlZW4odG9wICsgciwgYm90dG9tIC0gcilcblxuICAgIHJldHVybiB7IHgsIHkgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gdGhpcy5nZXRPZmZzZXRzKCksXG4gICAgICBib3VuZHMgPSB0aGlzLmdldEJvdW5kcygpXG5cbiAgICB0aGlzLnNldE9mZnNldHMob2Zmc2V0cylcbiAgICB0aGlzLnNldEJvdW5kcyhib3VuZHMpXG4gIH1cbn1cbiIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9Nb3ZpbmdPYmplY3QnXG5cbmNvbnN0IHIgPSAxMCxcbiAgYyA9ICcjOTM2MzQ0JyxcbiAgdiA9IHsgZHg6IDIsIGR5OiAyIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGQgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwb3MsXG4gICAgcmFkaXVzID0gcixcbiAgICB3b3JsZCxcbiAgICBzcHJpdGUsXG4gICAgc2l6ZSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9LFxuICAgIHZlbCA9IHYsXG4gICAgY29sb3IgPSBjXG4gICkge1xuICAgIHN1cGVyKHBvcywgcmFkaXVzLCB3b3JsZCwgc3ByaXRlLCBzaXplLCB2ZWwsIGNvbG9yKVxuICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICAgIHRoaXMubW92ZXMgPSB0aGlzLm1vdmVzLmJpbmQodGhpcylcbiAgfVxuXG4gIG1vdmVzKGdhbWUpIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcyxcbiAgICAgIHBvcyA9IHsgeDogeCArIHRoaXMuY3VyckRpclswXSwgeTogeSArIHRoaXMuY3VyckRpclsxXSB9XG5cbiAgICBpZiAodGhpcy5jaGVja091dE9mQm91bmRzKHBvcykpIHtcbiAgICAgIGdhbWUuZGVzdHJveVdvcm0odGhpcylcbiAgICB9XG5cbiAgICB0aGlzLnNldFBvcyhwb3MpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5Yzg5NWQzNzEwNzRjZmUyZDAzMTI1NzdmYzc2MzVkMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTE2YmY5MTY0YjcyMzI4MjQzZjU3ZTM5YjM0NjJlMzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ5MTc1MDU2N2YxYWZjMjA3N2M0NmUwMTVlYmVmZWE4LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwM2RjMzNhZGU0ZWFkNWI4N2E2NTlhYmNlMzIzOTY4My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjllNjNjZGI1MTZmYWRkMjVlNjg4NTVjZTk1ZGI0NzcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjJlNmQ4ODc0MjI5NWQwZWE5NWNmMTNmZDlhMzg4MjdmLnBuZ1wiOyIsImltcG9ydCBET01EaXNwbGF5IGZyb20gJy4vRE9NRGlzcGxheS5qcydcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSdcblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKFxuICBuZXcgRE9NRGlzcGxheSh7XG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC8gMS4yLFxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC8gMS4yLFxuICB9KVxuKVxuZ2FtZS5pbml0KClcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImZ1bmN0aW9uIGdldFJhbmRvbUludChtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSlcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQmV0d2VlbihtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKVxuICBtYXggPSBNYXRoLmZsb29yKG1heClcbiAgLy8gaW5jbHVzaXZlXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cbmZ1bmN0aW9uIGluUmFuZ2UobnVtLCBtaW4sIG1heCkge1xuICByZXR1cm4gbnVtID49IG1pbiAmJiBudW0gPD0gbWF4XG59XG5cbi8vIERpZG4ndCB1c2VcbmZ1bmN0aW9uIGNhbGN1bGF0ZUh5cG90ZW51c2UoYSwgYikge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGEsIDIpICsgTWF0aC5wb3coYiwgMikpXG59XG5cbi8vIERpZG4ndCB1c2VcbmZ1bmN0aW9uIGVhc2VMaW5lYXIodCwgYiwgYywgZCkge1xuICByZXR1cm4gKGMgKiB0KSAvIGQgKyBiXG59XG5leHBvcnQgeyBnZXRSYW5kb21JbnQsIGluUmFuZ2UsIGdldFJhbmRvbUJldHdlZW4gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==