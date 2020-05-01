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
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\n\nhtml,\nbutton {\n  text-align: center;\n  font-size: 1rem;\n  font-family: 'Schoolbell', sans-serif;\n  letter-spacing: 5px;\n}\n\nbutton.btn {\n  padding: 1rem;\n  padding: 1rem 2rem;\n  text-align: center;\n  cursor: pointer;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  margin: 5px auto;\n  transition-duration: 0.4s;\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.game {\n  margin: 0 auto;\n}\n\n.title h1 {\n  font-size: 24px;\n  margin: 32px;\n}\n\n.world-wrapper {\n  margin: 0 auto;\n}\n\n.legend {\n  position: absolute;\n  top: 98px;\n  text-align: left;\n}\n\n.legend > div {\n  margin-left: 10px;\n  margin: 10px;\n}\n\n.legend-text {\n  font-size: 32px;\n  line-height: 32px;\n}\n\ndiv.chain-wrapper {\n  margin: 5px;\n}\n\n.chain-wrapper .image#chain-count {\n  height: 30px;\n  width: 30px;\n  margin-right: 5px;\n}\n\n.chain-wrapper .chain {\n  margin: 0 auto;\n}\n\n#world {\n  border: 2px solid black;\n  background-color: rgb(194, 255, 194);\n}\n\n.worm-left {\n  width: 20px;\n}\n\n.worm-right {\n  width: 20px;\n}\n\n.animate {\n  animation: pulse 2s ease;\n}\n\n.end-wrapper,\n.intro-wrapper {\n  position: absolute;\n  font-size: 32px;\n  margin: 0 auto;\n}\n\n.intro-wrapper {\n  font-size: 24px;\n  width: 100%;\n}\n\n.intro {\n  width: 100%;\n}\n\n.intro-message {\n  display: block;\n  width: 100%;\n  padding: 16px;\n}\n\n.start {\n  display: block;\n  cursor: pointer;\n  border-bottom: 1px solid black;\n  width: max-content;\n  margin: 16px auto;\n}\n\n.start:hover {\n  color: red;\n  border-bottom-color: red;\n}\n\n.game-end {\n  width: max-content;\n  margin: 0 auto;\n  padding: 30px 80px;\n}\n\n.game-end {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.game-end div {\n  margin-bottom: 5px;\n}\n\n.game-end > .wrapper > .score {\n  color: red;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(2);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n", ""]);
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

    _defineProperty(this, "removeHealthAnimation", function () {
      var wormL = document.getElementsByClassName('worm-left')[0];
      if (wormL) wormL.classList.remove('animate');
    });

    _defineProperty(this, "animateHealth", function () {
      var wormL = document.getElementsByClassName('worm-left')[0];
      if (wormL) wormL.classList.add('animate');
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
      gameEndWrapper.style.top = 98 + _this.worldSize.height / 4 + 'px';

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

    _defineProperty(_assertThisInitialized(_this), "clearTutorial", function () {
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

      _this.display.removeHealthAnimation();
    });

    _defineProperty(this, "handleMouseDown", function (e) {
      if (_this.energy.count <= 0.5) {
        _this.display.animateHealth();

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

    _defineProperty(this, "spawnWorms", function (r) {
      var size = {
        width: r * 2,
        height: r * 2
      };

      while (_this.worms.size < _this.wormCount) {
        var randomPos = _this.world.getRandomPos(r),
            worm = new _Worm_js__WEBPACK_IMPORTED_MODULE_12__["default"](randomPos, r, _this.world, WormSprite, size);

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

    _defineProperty(this, "initWorms", function (r) {
      _this.spawnWorms(r);
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
  }

  _createClass(Game, [{
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
      this.initEnergy();
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
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ "./src/Game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);




var width = Math.min(window.innerWidth / 1.2, 1200),
    height = Math.min(window.innerHeight / 1.2, 750),
    display = new _Display_DOMDisplay_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  width: width,
  height: height
}),
    game = new _Game__WEBPACK_IMPORTED_MODULE_2__["default"](display);
display.renderGame();
display.renderTitle();
display.renderWorld();
var introDisplay = new _Display_Intro_js__WEBPACK_IMPORTED_MODULE_1__["default"](display.game, display.worldWrapper, display.worldSize);

function handleClick() {
  console.log('clicked tutorial');
}

function handleClickStart() {
  introDisplay.clearTutorial();
  game.init();
}

introDisplay.renderIntro();
introDisplay.renderTutorialButton(handleClick);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRhX3N0cnVjdHVyZXMvZGlzdC9EYXRhU3RydWN0dXJlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9DaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlzcGxheS9ET01EaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9EaXNwbGF5L0ludHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9FbmVyZ3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vdmluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFyZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9QcmVkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dvcmxkLmpzIiwid2VicGFjazovLy8uL3NyYy9Xb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWdzL2NoaWxkLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy9jb3VudC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ3MvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ3MvcGFyZW50LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy9wcmVkYXRvci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ3Mvd29ybS1sZWZ0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy93b3JtLXJpZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy93b3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJDaGFpbiIsImRpc3BsYXkiLCJjb3VudCIsInNldENvdW50IiwidXBkYXRlQ2hhaW4iLCJNYXRoIiwibWF4IiwibWluIiwidXBkYXRlRWxlbWVudCIsInIiLCJjIiwidiIsImR4IiwiZHkiLCJDaGlsZCIsInBvcyIsInJhZGl1cyIsIndvcmxkIiwic3ByaXRlIiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidmVsIiwiY29sb3IiLCJjbGlja2luZyIsInBhcmVudCIsImNoYWluUG9zIiwiY2hpbGQiLCJuZXh0Q2hpbGQiLCJpbmRlcGVuZGVuY2UiLCJ4IiwieSIsImN1cnJEaXIiLCJzZXRSYW5kb21EaXIiLCJib3VuY2VCYWNrIiwicG9zQ2FjaGUiLCJtb3ZlcyIsImJpbmQiLCJoaXRzUHJlZGF0b3IiLCJnYW1lIiwiaXNJbmRlcGVuZGVudCIsImRlc3Ryb3lDaGlsZCIsImN1cnIiLCJkZWxldGVMYXN0Q2hpbGQiLCJlYXNpbmciLCJvZmZzZXQiLCJsZW5ndGgiLCJNb3ZpbmdPYmplY3QiLCJET01EaXNwbGF5Iiwic3JjIiwiY2xhc3NOYW1lIiwiaWQiLCJpbWciLCJJbWFnZSIsImNsYXNzTGlzdCIsImFkZCIsIndvcm1MIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicmVtb3ZlIiwidGFnIiwiY29udGVudCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5IiwibmFtZSIsImlubmVyVGV4dCIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsInZhbCIsImdldEVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsImhlYWRpbmciLCJhcHBlbmQiLCJ3b3JsZFdyYXBwZXIiLCJsZWdlbmQiLCJ3b3JsZFNpemUiLCJzdHlsZSIsImVuZXJneVdyYXBwZXIiLCJ1cGRhdGVFbmVyZ3lCYXIiLCJjaGFpbldyYXBwZXIiLCJjb3VudEltZyIsImNyZWF0ZUltYWdlIiwiY2hpbGRDb3VudEltZyIsImNoYWluIiwic2NvcmUiLCJoYW5kbGVDbGlja1JlcGxheSIsImhpZ2hTY29yZSIsImdhbWVFbmRXcmFwcGVyIiwiZ2FtZUVuZCIsInRvcCIsInJlbmRlckdhbWVPdmVyTWVzc2FnZSIsInJlbmRlckVuZFNjb3JlIiwicmVuZGVyUmVwbGF5QnV0dG9uIiwicmVtb3ZlQ2hpbGQiLCJtZXNzYWdlIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVuZFNjb3JlV3JhcHBlciIsImVuZFNjb3JlTGFiZWwiLCJlbmRTY29yZSIsInRvU3RyaW5nIiwiYmVzdFNjb3JlV3JhcHBlciIsImJlc3RTY29yZUxhYmVsIiwiYmVzdFNjb3JlIiwiZVciLCJpIiwiY2hpbGRFbGVtZW50Q291bnQiLCJsYXN0Q2hpbGQiLCJsZWZ0Iiwid29ybUNvdW50Iiwid29ybVJpZ2h0Iiwid29ybUxlZnQiLCJ3b3JtUiIsIkludHJvIiwiaGFuZGxlQ2xpY2tUdXRvcmlhbCIsImludHJvV3JhcHBlciIsImhhbmRsZUNsaWNrU3RhcnQiLCJsaW5rIiwiaW50cm9QaWMiLCJsb2dvIiwiaW50cm8iLCJpbnRyb01lc3NhZ2UiLCJFbmVyZ3kiLCJlbmVyZ3kiLCJ1cGRhdGVFbmVyZ3kiLCJDaGlsZFNwcml0ZSIsImNoaWxkSW1nIiwiUGFyZW50U3ByaXRlIiwicGFyZW50SW1hZ2UiLCJQcmVkYXRvclNwcml0ZSIsInByZWRhdG9ySW1hZ2UiLCJXb3JtU3ByaXRlIiwid29ybUltYWdlIiwiR2FtZSIsImNoaWxkQ291bnQiLCJwcmVkYXRvckNvdW50IiwiZSIsIm1vdXNlIiwiY2xpZW50WCIsImNsaWVudFkiLCJyZW1vdmVIZWFsdGhBbmltYXRpb24iLCJhbmltYXRlSGVhbHRoIiwiZ2V0Q2hpbGRDb3VudCIsImRlY3JlbWVudENvdW50QnlIYWxmIiwid29ybSIsIndvcm1zIiwiZGVsZXRlTm9kZSIsImNoaWxkcmVuIiwic3Bhd25DaGlsZHJlbiIsInRvQXJyYXkiLCJwcmVkYXRvcnMiLCJjaGVja0luUmFuZ2UiLCJoaXRzQ2hpbGQiLCJwcmVkYXRvciIsImF2b2lkUHJlZGF0b3IiLCJjaGVja0NvbGxpc2lvbldpdGhQcmVkYXRvciIsImhpdHNXb3JtIiwiaW5kZXBlbmRlbnRDIiwicmFuZG9tUG9zIiwiZ2V0UmFuZG9tUG9zIiwiYXBwZW5kVG9UYWlsIiwiUHJlZGF0b3IiLCJXb3JtIiwic3Bhd25QcmVkYXRvcnMiLCJpbml0aWFsUG9zIiwiUGFyZW50Iiwic3Bhd25Xb3JtcyIsImluaXQiLCJXb3JsZCIsIlNjb3JlIiwicmVzZXRHYW1lIiwiY2xlYXJHYW1lRW5kIiwicmVzZXQiLCJMaW5rZWRMaXN0IiwidGltZVNpbmNlV29ybSIsImluaXRXb3JsZCIsImluaXRDaGFpbiIsImluaXRQYXJlbnQiLCJpbml0Q2hpbGRyZW4iLCJpbml0UHJlZGF0b3JzIiwiaW5pdFdvcm1zIiwiYW5pbWF0aW9uUmVxIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNhbGN1bGF0ZUhpZ2hTY29yZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyR2FtZUVuZCIsInJlcGxheUdhbWUiLCJ0aW1lc3RhbXAiLCJnYW1lT3ZlciIsInRpbWVQYXNzZWQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0Iiwic2V0Q2xpY2tpbmciLCJyZW5kZXJTY29yZSIsInJlbmRlckNoYWluIiwicmVuZGVyRW5lcmd5IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlTW91c2VVcCIsImluaXRFbmVyZ3kiLCJpbml0U2NvcmUiLCJ2ZWxvY2l0eSIsImRpciIsImluZGV4IiwiZ2V0UmFuZG9tSW50IiwicG9zc2libGVEaXJlY3Rpb25zIiwic2V0Q3VyckRpciIsImNoZWNrT3V0T2ZCb3VuZHMiLCJib3VuZHMiLCJyaWdodCIsImJvdHRvbSIsImNvbnN0cnVjdG9yIiwic2V0VmVsb2NpdHkiLCJuUG9zIiwiZHJhd0ltYWdlIiwiY2xpcHBlZFgiLCJjbGlwcGVkWSIsIm1vdmVzV2l0aEN1cnNvciIsImhpdHNQYXJlbnQiLCJvYmoiLCJjdXNoaW9uIiwib1BvcyIsIm9SIiwicmFuZ2VYIiwicmFuZ2VZIiwid2l0aGluUmFuZ2UiLCJpblJhbmdlIiwib2Zmc2V0cyIsIm9mZnNldEwiLCJvZmZzZXRUIiwicmVsYXRpdmVYIiwicmVsYXRpdmVZIiwieERpZmYiLCJ5RGlmZiIsInZlbFgiLCJ2ZWxZIiwiY2xpcHBlZFBvcyIsImNsaXBQb3MiLCJzZXRQb3MiLCJzaGlmdCIsInB1c2giLCJzZXRQb3NDYWNoZSIsImN1cnJQcmVkQ29scyIsImRlbGV0ZUZyb21UYWlsIiwic2V0Q2hhaW5Qb3MiLCJzZXROZXh0Q2hpbGQiLCJzZXRJbmRlcGVuZGVuY2UiLCJkZWNyZW1lbnRDb3VudCIsInNldFBhcmVudCIsInNlYXJjaCIsImluY3JlbWVudENvdW50IiwiY2FsY3VsYXRlU2NvcmUiLCJ0YWlsIiwiY29sbGlkZWQiLCJjb2xsaWRpbmciLCJpbmNsdWRlcyIsInNsaWNlIiwic2V0Q3VyclByZWRDb2xzIiwiaW5kZXhPZiIsInNwbGljZSIsImRlc3Ryb3lXb3JtIiwiZmlyc3RDaGlsZCIsImhlYWQiLCJzZXRTY29yZSIsInVwZGF0ZVNjb3JlIiwiY2hhaW5Db3VudCIsInNjb3JlVG9BZGQiLCJuZXdTY29yZSIsInNldEhpZ2hTY29yZSIsImdldFJhbmRvbUJldHdlZW4iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwiZ2V0T2Zmc2V0cyIsImdldEJvdW5kcyIsInNldE9mZnNldHMiLCJzZXRCb3VuZHMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZW5kZXJHYW1lIiwicmVuZGVyVGl0bGUiLCJyZW5kZXJXb3JsZCIsImludHJvRGlzcGxheSIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImNsZWFyVHV0b3JpYWwiLCJyZW5kZXJJbnRybyIsInJlbmRlclR1dG9yaWFsQnV0dG9uIiwicmVuZGVyU3RhcnRMaW5rIiwiZmxvb3IiLCJyYW5kb20iLCJjZWlsIiwibnVtIiwiY2FsY3VsYXRlSHlwb3RlbnVzZSIsImEiLCJiIiwic3FydCIsInBvdyIsImVhc2VMaW5lYXIiLCJ0IiwiZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0EsY0FBYyxRQUFTLGlGQUFpRjtBQUN4RztBQUNBLGNBQWMsUUFBUyxNQUFNLDJCQUEyQixHQUFHLG1CQUFtQix1QkFBdUIsb0JBQW9CLDBDQUEwQyx3QkFBd0IsR0FBRyxnQkFBZ0Isa0JBQWtCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLHNCQUFzQiw4QkFBOEIscUJBQXFCLDhCQUE4Qiw0QkFBNEIsaUJBQWlCLDRCQUE0Qix1QkFBdUIs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QkFBVCxDQUE2QkMsQ0FBN0IsRUFBZ0NDLENBQWhDLEVBQW1DO0FBQ2pDLFNBQU8xUyxJQUFJLENBQUMyUyxJQUFMLENBQVUzUyxJQUFJLENBQUM0UyxHQUFMLENBQVNILENBQVQsRUFBWSxDQUFaLElBQWlCelMsSUFBSSxDQUFDNFMsR0FBTCxDQUFTRixDQUFULEVBQVksQ0FBWixDQUEzQixDQUFQO0FBQ0QsQyxDQUVEOzs7QUFDQSxTQUFTRyxVQUFULENBQW9CQyxDQUFwQixFQUF1QkosQ0FBdkIsRUFBMEJyUyxDQUExQixFQUE2QjBTLENBQTdCLEVBQWdDO0FBQzlCLFNBQVExUyxDQUFDLEdBQUd5UyxDQUFMLEdBQVVDLENBQVYsR0FBY0wsQ0FBckI7QUFDRCIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2Nob29sYmVsbCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5idXR0b24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdTY2hvb2xiZWxsJywgc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxufVxcblxcbmJ1dHRvbi5idG4ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmdhbWUge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi50aXRsZSBoMSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW46IDMycHg7XFxufVxcblxcbi53b3JsZC13cmFwcGVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubGVnZW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogOThweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5sZWdlbmQgPiBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5sZWdlbmQtdGV4dCB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG59XFxuXFxuZGl2LmNoYWluLXdyYXBwZXIge1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5jaGFpbi13cmFwcGVyIC5pbWFnZSNjaGFpbi1jb3VudCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uY2hhaW4td3JhcHBlciAuY2hhaW4ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiN3b3JsZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDI1NSwgMTk0KTtcXG59XFxuXFxuLndvcm0tbGVmdCB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLndvcm0tcmlnaHQge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5hbmltYXRlIHtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgZWFzZTtcXG59XFxuXFxuLmVuZC13cmFwcGVyLFxcbi5pbnRyby13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaW50cm8td3JhcHBlciB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmludHJvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW50cm8tbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnN0YXJ0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWFyZ2luOiAxNnB4IGF1dG87XFxufVxcblxcbi5zdGFydDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ2FtZS1lbmQge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAzMHB4IDgwcHg7XFxufVxcblxcbi5nYW1lLWVuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5nYW1lLWVuZCBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZ2FtZS1lbmQgPiAud3JhcHBlciA+IC5zY29yZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRhdGFTdHJ1Y3R1cmVzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRhdGFTdHJ1Y3R1cmVzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9zcmMvQmluYXJ5SGVhcC9NYXhCaW5hcnlIZWFwLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9CaW5hcnlIZWFwL01heEJpbmFyeUhlYXAuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXFxcIik7IH0gZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlOyB9IHJldHVybiB2YWx1ZTsgfVxcblxcbnZhciBNYXhCaW5hcnlIZWFwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gIGZ1bmN0aW9uIE1heEJpbmFyeUhlYXAoKSB7XFxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXhCaW5hcnlIZWFwKTtcXG5cXG4gICAgX2NvbnRlbnQuc2V0KHRoaXMsIHtcXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICB2YWx1ZTogdm9pZCAwXFxuICAgIH0pO1xcblxcbiAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2NvbnRlbnQsIFtdKTtcXG4gIH1cXG5cXG4gIF9jcmVhdGVDbGFzcyhNYXhCaW5hcnlIZWFwLCBbe1xcbiAgICBrZXk6IFxcXCJfc3dhcFxcXCIsXFxuICAgIC8vIF9tZXRob2RzIGFyZSBoZWxwZXJzLiBDaGFuZ2UgdG8gcHJpdmF0ZSB3aGVuIHByaXZhdGUgaW5zdGFuY2UgbWV0aG9kcyBhcmUgc3VwcG9ydGVkXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc3dhcChpLCBqKSB7XFxuICAgICAgdmFyIHRlbXAgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV0gPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2pdO1xcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbal0gPSB0ZW1wO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcIl9idWJibGVVcFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYnViYmxlVXAoaSkge1xcbiAgICAgIHZhciBlbGVtZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXTtcXG5cXG4gICAgICB3aGlsZSAoaSA+IDApIHtcXG4gICAgICAgIHZhciBwID0gTWF0aC5mbG9vcigoaSAtIDEpIC8gMiksXFxuICAgICAgICAgICAgcGFyZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtwXTtcXG5cXG4gICAgICAgIGlmIChlbGVtZW50ID4gcGFyZW50KSB7XFxuICAgICAgICAgIHRoaXMuX3N3YXAocCwgaSk7XFxuXFxuICAgICAgICAgIGkgPSBwO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcIl9zaW5rRG93blxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2lua0Rvd24ocCkge1xcbiAgICAgIHZhciBlbGVtZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtwXSxcXG4gICAgICAgICAgbGFzdEluZGV4ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxO1xcblxcbiAgICAgIHdoaWxlIChwIDwgbGFzdEluZGV4KSB7XFxuICAgICAgICB2YXIgciA9IDIgKiBwICsgMixcXG4gICAgICAgICAgICBsID0gciAtIDE7XFxuICAgICAgICB2YXIgc3dhcEluZGV4ID0gbnVsbCxcXG4gICAgICAgICAgICBsZWZ0ID0gdm9pZCAwLFxcbiAgICAgICAgICAgIHJpZ2h0ID0gdm9pZCAwLFxcbiAgICAgICAgICAgIG1pbiA9IGVsZW1lbnQ7XFxuXFxuICAgICAgICBpZiAobCA8PSBsYXN0SW5kZXgpIHtcXG4gICAgICAgICAgbGVmdCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbbF07XFxuICAgICAgICAgIGlmIChsZWZ0ID4gZWxlbWVudCkgc3dhcEluZGV4ID0gbDtcXG4gICAgICAgICAgbWluID0gbGVmdDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmIChyIDw9IGxhc3RJbmRleCkge1xcbiAgICAgICAgICByaWdodCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbcl07XFxuICAgICAgICAgIGlmIChyaWdodCA+IG1pbikgc3dhcEluZGV4ID0gcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmIChzd2FwSW5kZXggPT0gbnVsbCkgYnJlYWs7XFxuXFxuICAgICAgICB0aGlzLl9zd2FwKHAsIHN3YXBJbmRleCk7XFxuXFxuICAgICAgICBwID0gc3dhcEluZGV4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJwcmludE1heEhlYXBcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRNYXhIZWFwKCkge1xcbiAgICAgIGNvbnNvbGUubG9nKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkpO1xcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImluc2VydFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnQoZWxlbWVudCkge1xcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucHVzaChlbGVtZW50KTtcXG5cXG4gICAgICB0aGlzLl9idWJibGVVcChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCAtIDEpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImV4dHJhY3RNYXhcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdE1heCgpIHtcXG4gICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggPD0gMCkgcmV0dXJuIG51bGw7XFxuICAgICAgdmFyIGxhc3RJbmRleCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIC0gMSxcXG4gICAgICAgICAgZmlyc3RJbmRleCA9IDA7XFxuICAgICAgaWYgKGZpcnN0SW5kZXggIT09IGxhc3RJbmRleCkgdGhpcy5fc3dhcChmaXJzdEluZGV4LCBsYXN0SW5kZXgpO1xcblxcbiAgICAgIHZhciByZXN1bHQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnBvcCgpO1xcblxcbiAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCA+IDApIHtcXG4gICAgICAgIHRoaXMuX3NpbmtEb3duKDApO1xcbiAgICAgIH1cXG5cXG4gICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInJlbW92ZVxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoZWxlbWVudCkge1xcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldICE9PSBlbGVtZW50KSBjb250aW51ZTtcXG4gICAgICAgIHZhciBsYXN0SW5kZXggPSB0aGlzLnNpemUgLSAxO1xcblxcbiAgICAgICAgaWYgKGkgPT09IGxhc3RJbmRleCkge1xcbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnBvcCgpO1xcblxcbiAgICAgICAgICBicmVhaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRoaXMuX3N3YXAoaSwgbGFzdEluZGV4KTtcXG5cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucG9wKCk7XFxuXFxuICAgICAgICB0aGlzLl9idWJibGVVcChpKTtcXG5cXG4gICAgICAgIHRoaXMuX3NpbmtEb3duKGkpO1xcblxcbiAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInNpemVcXFwiLFxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGg7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwibWF4XFxcIixcXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgcmV0dXJuIHRoaXMuc2l6ZSA/IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbMF0gOiBudWxsO1xcbiAgICB9XFxuICB9XSk7XFxuXFxuICByZXR1cm4gTWF4QmluYXJ5SGVhcDtcXG59KCk7XFxuXFxudmFyIF9jb250ZW50ID0gbmV3IFdlYWtNYXAoKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IE1heEJpbmFyeUhlYXA7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvQmluYXJ5SGVhcC9NYXhCaW5hcnlIZWFwLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvQmluYXJ5SGVhcC9NaW5CaW5hcnlIZWFwLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9CaW5hcnlIZWFwL01pbkJpbmFyeUhlYXAuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXFxcIik7IH0gZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlOyB9IHJldHVybiB2YWx1ZTsgfVxcblxcbi8vIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9V0NtM1RxU2NCTThcXG4vLyBBbnkgbm9kZSBoYXMgYSB2YWx1ZSBhdCBsZWFzdCBhcyBzbWFsbCBhcyB0aGUgdmFsdWVzIGluIHRoYXQgbm9kZSdzIGNoaWxkcmVuLlxcbi8vIFNvdXJjZTogaHR0cHM6Ly9lbG9xdWVudGphdmFzY3JpcHQubmV0LzFzdF9lZGl0aW9uL2FwcGVuZGl4Mi5odG1sXFxudmFyIE1pbkJpbmFyeUhlYXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgZnVuY3Rpb24gTWluQmluYXJ5SGVhcCgpIHtcXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbkJpbmFyeUhlYXApO1xcblxcbiAgICBfY29udGVudC5zZXQodGhpcywge1xcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgfSk7XFxuXFxuICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfY29udGVudCwgW10pO1xcbiAgfVxcblxcbiAgX2NyZWF0ZUNsYXNzKE1pbkJpbmFyeUhlYXAsIFt7XFxuICAgIGtleTogXFxcIl9zd2FwXFxcIixcXG4gICAgLy8gX21ldGhvZHMgYXJlIGhlbHBlcnMuIENoYW5nZSB0byBwcml2YXRlIHdoZW4gcHJpdmF0ZSBpbnN0YW5jZSBtZXRob2RzIGFyZSBzdXBwb3J0ZWRcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zd2FwKGksIGopIHtcXG4gICAgICB2YXIgdGVtcCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV07XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXSA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbal07XFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtqXSA9IHRlbXA7XFxuICAgIH1cXG4gICAgLyogYnViYmxlVXAgXFxuICAgICAgMS4gQ29tcGFyZSBpdGVtIHRvIHBhcmVudCBhbmQgY2hlY2sgaWYgaXQncyBsZXNzIHRoYW4gcGFyZW50LiBcXG4gICAgICAyLiBJZiBpdCBpcyBsZXNzIHRoYW4gcGFyZW50LCBzd2FwIGl0LiBcXG4gICAgICAzLiBOb3csIGNvbXBhcmUgdG8gdGhlIG5ldyBwYXJlbnQgYW5kIGtlZXAgc3dhcHBpbmcgdW50aWwgaXQgZWl0aGVyIHJlYWNoZXMgdGhlIHRvcCBvZiB0aGUgaGVhcCBvciBpdCBpcyA+PSBwYXJlbnQuIFxcbiAgICAqL1xcblxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJfYnViYmxlVXBcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2J1YmJsZVVwKGkpIHtcXG4gICAgICB2YXIgZWxlbWVudCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV07XFxuICAgICAgLyogXFxuICAgICAgICBpbmRleGluZyBmcm9tIDBcXG4gICAgICAgIHAgaXMgdGhlIGluZGV4IG9mIHRoZSBwYXJlbnRcXG4gICAgICAgIGkgaXMgdGhlIGluZGV4IG9mIGVpdGhlciBsZWZ0IG9yIHJpZ2h0IGNoaWxkXFxuICAgICAgICBsIGlzIGluZGV4IG9mIGxlZnQgY2hpbGRcXG4gICAgICAgIHIgaXMgdGhlIGluZGV4IG9mIHRoZSByaWdodCBjaGlsZFxcbiAgICAgICAgIGwgPSAycCArIDFcXG4gICAgICAgIHIgPSAycCArIDJcXG4gICAgICAgIHAgPSBNYXRoLmZsb29yKChpLTEpLzIpXFxuICAgICAgICovXFxuXFxuXFxuICAgICAgd2hpbGUgKGkgPiAwKSB7XFxuICAgICAgICB2YXIgcCA9IE1hdGguZmxvb3IoKGkgLSAxKSAvIDIpLFxcbiAgICAgICAgICAgIHBhcmVudCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbcF07XFxuXFxuICAgICAgICBpZiAoZWxlbWVudCA8IHBhcmVudCkge1xcbiAgICAgICAgICB0aGlzLl9zd2FwKHAsIGkpOyAvLyBtYWtlIHN1cmUgdG8gY2hhbmdlIGluZGV4IHRvIHRoYXQgb2YgcGFyZW50IGFmdGVyIHN3YXBwaW5nXFxuXFxuXFxuICAgICAgICAgIGkgPSBwO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcIl9zaW5rRG93blxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2lua0Rvd24ocCkge1xcbiAgICAgIHZhciBlbGVtZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtwXSxcXG4gICAgICAgICAgbGFzdEluZGV4ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxO1xcblxcbiAgICAgIHdoaWxlIChwIDwgbGFzdEluZGV4KSB7XFxuICAgICAgICAvLyBJbmZvIGluIGdldHRpbmcgaW5kZXggaW4gYnViYmxlVXBcXG4gICAgICAgIHZhciByID0gMiAqIHAgKyAyLFxcbiAgICAgICAgICAgIGwgPSByIC0gMTsgLy9PciAyICogcCArIDFcXG5cXG4gICAgICAgIHZhciBzd2FwSW5kZXggPSBudWxsLFxcbiAgICAgICAgICAgIGxlZnQgPSB2b2lkIDAsXFxuICAgICAgICAgICAgcmlnaHQgPSB2b2lkIDAsXFxuICAgICAgICAgICAgbWluID0gZWxlbWVudDsgLy9zdGFydCBvdXQgYXNzdW1pbmcgdGhlIG1pbiBiZXR3ZWVuIGxlZnQsIHJpZ2h0LCBlbGVtZW50IGlzIHRoZSBlbGVtZW50XFxuICAgICAgICAvLyBpZiBlbGVtZW50IGhhcyBsZWZ0IGNoaWxkLCBjb21wYXJlXFxuICAgICAgICAvLyBpZiBsZWZ0IGNoaWxkIDwgZWxlbWVudCwgc2V0IHN3YXBJbmRleCB0byB0aGUgbGVmdCBpbmRleCAobCkgYW5kIG1pbiB0byBsZWZ0XFxuXFxuICAgICAgICBpZiAobCA8PSBsYXN0SW5kZXgpIHtcXG4gICAgICAgICAgbGVmdCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbbF07XFxuICAgICAgICAgIGlmIChsZWZ0IDwgZWxlbWVudCkgc3dhcEluZGV4ID0gbDtcXG4gICAgICAgICAgbWluID0gbGVmdDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmIChyIDw9IGxhc3RJbmRleCkge1xcbiAgICAgICAgICByaWdodCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbcl07IC8vIGNvbXBhcmUgdGhlIHJpZ2h0IHRvIHRoZSBtaW4gc28gZmFyIHRvIG1ha2Ugc3VyZSB0aGUgbWluIG9mIHRoZSB0aHJlZSBpdGVtcyBnZXRzIGJ1YmJsZWQgdXAgd2hpbGUgdGhlIHBhcmVudCBnZXRzIHN1bmtcXG5cXG4gICAgICAgICAgaWYgKHJpZ2h0IDwgbWluKSBzd2FwSW5kZXggPSByO1xcbiAgICAgICAgfSAvLyBwYXJlbnQgaXMgc21hbGxlciB0aGFuIGJvdGggbGVmdCBhbmQgcmlnaHQgY2hpbGQgc28gYnJlYWtcXG5cXG5cXG4gICAgICAgIGlmIChzd2FwSW5kZXggPT0gbnVsbCkgYnJlYWs7XFxuXFxuICAgICAgICB0aGlzLl9zd2FwKHAsIHN3YXBJbmRleCk7IC8vIHNldCB0aGUgcGFyZW50IGluZGV4IHRvIHRoZSBzd2FwIGluZGV4IHNvIGl0IHdpbGwgY29udGludWUgdG8gc2luayBkb3duXFxuXFxuXFxuICAgICAgICBwID0gc3dhcEluZGV4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJwcmludE1pbkhlYXBcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRNaW5IZWFwKCkge1xcbiAgICAgIGNvbnNvbGUubG9nKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkpO1xcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpO1xcbiAgICB9XFxuICAgIC8qIGluc2VydFxcbiAgICAgIDEuIGluc2VydCBuZXcgaXRlbSBpbnRvIHRoaXMuI2NvbnRlbnRcXG4gICAgICAyLiBidWJibGUgaXQgdXAgXFxuICAgICAgKi9cXG5cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiaW5zZXJ0XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydChlbGVtZW50KSB7XFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wdXNoKGVsZW1lbnQpO1xcblxcbiAgICAgIHRoaXMuX2J1YmJsZVVwKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIC0gMSk7XFxuICAgIH1cXG4gICAgLyogZXh0cmFjdE1pblxcbiAgICAgIDEuIHN3YXAgZmlyc3QgYW5kIGxhc3QgaXRlbXMgaWYgdGhpcy4jY29udGVudC5sZW5ndGggPiAxIChvciBmaXJzdCAhPT0gbGFzdClcXG4gICAgICAyLiBwb3Agb3V0IGxhc3QgaXRlbSBvZiBhcnJheSBhbmQgc2F2ZSBpdCBpbiByZXN1bHRcXG4gICAgICAzLiBJZiBsZW5ndGggaXMgbW9yZSB0aGFuIG9uZSwgYnViYmxlIHRoZSBmaXJzdCBpdGVtIGRvd25cXG4gICAgICA0LiBSZXR1cm4gdGhlIHJlc3VsdCB0aGF0IHdhcyBzYXZlZCBcXG4gICAgICAqL1xcblxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJleHRyYWN0TWluXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RNaW4oKSB7XFxuICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIDw9IDApIHJldHVybiBudWxsOyAvL3JldHVybiBudWxsIGlmIGFycmF5IGlzIGVtcHR5XFxuXFxuICAgICAgdmFyIGxhc3RJbmRleCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIC0gMSxcXG4gICAgICAgICAgZmlyc3RJbmRleCA9IDA7XFxuICAgICAgaWYgKGZpcnN0SW5kZXggIT09IGxhc3RJbmRleCkgdGhpcy5fc3dhcChmaXJzdEluZGV4LCBsYXN0SW5kZXgpO1xcblxcbiAgICAgIHZhciByZXN1bHQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnBvcCgpO1xcblxcbiAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCA+IDApIHtcXG4gICAgICAgIHRoaXMuX3NpbmtEb3duKDApO1xcbiAgICAgIH1cXG5cXG4gICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInJlbW92ZVxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoZWxlbWVudCkge1xcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcXG4gICAgICAgIC8vIGlmIGN1cnIgaXRlbSBkb2Vzbid0IG1hdGNoIHRoZSBlbGVtZW50IHRvIHJlbW92ZSwgY29udGludWUgc2VhcmNoaW5nXFxuICAgICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXSAhPT0gZWxlbWVudCkgY29udGludWU7IC8vIGlmIGl0IGRvZXMgbWF0Y2hcXG5cXG4gICAgICAgIHZhciBsYXN0SW5kZXggPSB0aGlzLnNpemUgLSAxOyAvLyBpZiBpdCdzIHRoZSBsYXN0IGl0ZW0sIHBvcCBpdCBhbmQgYnJlYWtcXG5cXG4gICAgICAgIGlmIChpID09PSBsYXN0SW5kZXgpIHtcXG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wb3AoKTtcXG5cXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgICB9IC8vIGlmIGl0J3Mgbm90IHRoZSBsYXN0IGl0ZW1cXG4gICAgICAgIC8vICAxLiBzd2FwIGl0IHdpdGggdGhlIGxhc3QgaXRlbVxcbiAgICAgICAgLy8gIDIuIHBvcCB0aGUgc3dhcHBlZCBsYXN0IGl0ZW1cXG4gICAgICAgIC8vICAzLiBUaGVuIGNhbGwgYnViYmxlVXAgYW5kIHNpbmtEb3duLlxcblxcblxcbiAgICAgICAgdGhpcy5fc3dhcChpLCBsYXN0SW5kZXgpO1xcblxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wb3AoKTtcXG5cXG4gICAgICAgIHRoaXMuX2J1YmJsZVVwKGkpO1xcblxcbiAgICAgICAgdGhpcy5fc2lua0Rvd24oaSk7XFxuXFxuICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwic2l6ZVxcXCIsXFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aDtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJtaW5cXFwiLFxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICByZXR1cm4gdGhpcy5zaXplID8gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVswXSA6IG51bGw7XFxuICAgIH1cXG4gIH1dKTtcXG5cXG4gIHJldHVybiBNaW5CaW5hcnlIZWFwO1xcbn0oKTtcXG5cXG52YXIgX2NvbnRlbnQgPSBuZXcgV2Vha01hcCgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gTWluQmluYXJ5SGVhcDtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9CaW5hcnlIZWFwL01pbkJpbmFyeUhlYXAuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9CaW5hcnlIZWFwL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvQmluYXJ5SGVhcC9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV2YWwoXCJ2YXIgTWluQmluYXJ5SGVhcCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTWluQmluYXJ5SGVhcCAqLyBcXFwiLi9zcmMvQmluYXJ5SGVhcC9NaW5CaW5hcnlIZWFwLmpzXFxcIik7XFxuXFxudmFyIE1heEJpbmFyeUhlYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL01heEJpbmFyeUhlYXAgKi8gXFxcIi4vc3JjL0JpbmFyeUhlYXAvTWF4QmluYXJ5SGVhcC5qc1xcXCIpO1xcblxcbm1vZHVsZS5leHBvcnRzID0ge1xcbiAgTWluQmluYXJ5SGVhcDogTWluQmluYXJ5SGVhcCxcXG4gIE1heEJpbmFyeUhlYXA6IE1heEJpbmFyeUhlYXBcXG59O1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0JpbmFyeUhlYXAvaW5kZXguanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9CaW5hcnlTZWFyY2hUcmVlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvQmluYXJ5U2VhcmNoVHJlZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXFxcIik7IH0gZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlOyB9IHJldHVybiB2YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbnZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQmluYXJ5VHJlZVRyYXZlcnNhbCAqLyBcXFwiLi9zcmMvQmluYXJ5VHJlZVRyYXZlcnNhbC5qc1xcXCIpLFxcbiAgICBCRlMgPSBfcmVxdWlyZS5CRlMsXFxuICAgIERGU0l0ZXJhdGl2ZSA9IF9yZXF1aXJlLkRGU0l0ZXJhdGl2ZTtcXG5cXG52YXIgQmluYXJ5U2VhcmNoVHJlZSA9IGZ1bmN0aW9uICgpIHtcXG4gIHZhciBmaW5kTWluTm9kZSA9IGZ1bmN0aW9uIGZpbmRNaW5Ob2RlKG5vZGUpIHtcXG4gICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCkgcmV0dXJuIG5vZGU7ZWxzZSByZXR1cm4gZmluZE1pbk5vZGUobm9kZS5sZWZ0KTtcXG4gIH07XFxuXFxuICB2YXIgVHJlZU5vZGUgPSBmdW5jdGlvbiBUcmVlTm9kZSh2YWwpIHtcXG4gICAgdmFyIGxlZnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XFxuICAgIHZhciByaWdodCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcXG5cXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyZWVOb2RlKTtcXG5cXG4gICAgdGhpcy52YWwgPSB2YWw7XFxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XFxuICAgIHRoaXMucmlnaHQgPSByaWdodDtcXG4gIH07XFxuXFxuICB2YXIgQmluYXJ5U2VhcmNoVHJlZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICAgIGZ1bmN0aW9uIEJpbmFyeVNlYXJjaFRyZWUoKSB7XFxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJpbmFyeVNlYXJjaFRyZWUpO1xcblxcbiAgICAgIF9yb290LnNldCh0aGlzLCB7XFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgICB9KTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3Jvb3QsIG51bGwpO1xcbiAgICB9XFxuXFxuICAgIF9jcmVhdGVDbGFzcyhCaW5hcnlTZWFyY2hUcmVlLCBbe1xcbiAgICAgIGtleTogXFxcImluc2VydFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydCh2YWwpIHtcXG4gICAgICAgIHZhciByZWN1cnNpdmVJbnNlcnROb2RlID0gZnVuY3Rpb24gcmVjdXJzaXZlSW5zZXJ0Tm9kZShub2RlLCBuZXdOb2RlKSB7XFxuICAgICAgICAgIGlmIChuZXdOb2RlLnZhbCA8IG5vZGUudmFsKSB7XFxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCkgbm9kZS5sZWZ0ID0gbmV3Tm9kZTtlbHNlIHJlY3Vyc2l2ZUluc2VydE5vZGUobm9kZS5sZWZ0LCBuZXdOb2RlKTtcXG4gICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkgbm9kZS5yaWdodCA9IG5ld05vZGU7ZWxzZSByZWN1cnNpdmVJbnNlcnROb2RlKG5vZGUucmlnaHQsIG5ld05vZGUpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9O1xcblxcbiAgICAgICAgdmFyIG5ld05vZGUgPSBuZXcgVHJlZU5vZGUodmFsKTtcXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpID09PSBudWxsKSBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3Jvb3QsIG5ld05vZGUpO2Vsc2UgcmVjdXJzaXZlSW5zZXJ0Tm9kZShfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpLCBuZXdOb2RlKTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJyZW1vdmVcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUodmFsKSB7XFxuICAgICAgICB2YXIgcmVtb3ZlTm9kZSA9IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSwgdmFsKSB7XFxuICAgICAgICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm4gbnVsbDtcXG5cXG4gICAgICAgICAgaWYgKHZhbCA8IG5vZGUudmFsKSB7XFxuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gcmVtb3ZlTm9kZShub2RlLmxlZnQsIHZhbCk7XFxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgaWYgKHZhbCA+IG5vZGUudmFsKSB7XFxuICAgICAgICAgICAgbm9kZS5yaWdodCA9IHJlbW92ZU5vZGUobm9kZS5yaWdodCwgdmFsKTtcXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcXG4gICAgICAgICAgfSAvLyBJZiB2YWwgbWF0Y2hlcyBub2RlLnZhbFxcblxcblxcbiAgICAgICAgICBpZiAodmFsID09PSBub2RlLnZhbCkge1xcbiAgICAgICAgICAgIC8vIGlmIG5vZGUgdG8gZGVsZXRlIGRvZXNuJ3QgaGF2ZSBhbnkgY2hpbGRyZW5cXG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcXG4gICAgICAgICAgICAgIG5vZGUgPSBudWxsO1xcbiAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XFxuICAgICAgICAgICAgfSAvLyBpZiBub2RlIHRvIGRlbGV0ZSBoYXMgb25lIHJpZ2h0IGNoaWxkXFxuXFxuXFxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCkge1xcbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucmlnaHQ7XFxuICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcXG4gICAgICAgICAgICB9IC8vIGlmIG5vZGUgdG8gZGVsZXRlIGhhcyBvbmUgbGVmdCBjaGlsZFxcblxcblxcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0ID09PSBudWxsKSB7XFxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xcbiAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XFxuICAgICAgICAgICAgfSAvLyBEZWxldGluZyBub2RlIHdpdGggdHdvIGNoaWxkcmVuXFxuICAgICAgICAgICAgLy8gZmluZCBtaW4gbm9kZSBpbiByaWdodCBzdWJ0cmVlLiBUaGlzIHdpbGwgYmUgYSB0ZXJtaW5hbCBub2RlXFxuICAgICAgICAgICAgLy8gdHJhdmVyc2UgZG93biByaWdodCBzdWJ0cmVlIGFuZCBjaGFuZ2UgdGhlIG5vZGUudmFsIHRvIHRoZSBtaW4gbm9kZSB2YWxcXG4gICAgICAgICAgICAvLyBUaGVuIGNhbGwgcmVtb3ZlTm9kZSBvbiB0aGUgcmlnaHQgc3VidHJlZSB3aXRoIHRoZSBtaW4ubm9kZSB2YWwgdG8gZGVsZXRlIHRoZSB0ZXJtaW5hbCBub2RlXFxuXFxuXFxuICAgICAgICAgICAgdmFyIHN1YiA9IGZpbmRNaW5Ob2RlKG5vZGUucmlnaHQpO1xcbiAgICAgICAgICAgIG5vZGUudmFsID0gc3ViLnZhbDtcXG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gcmVtb3ZlTm9kZShub2RlLnJpZ2h0LCBzdWIudmFsKTtcXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfTtcXG5cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfcm9vdCwgcmVtb3ZlTm9kZShfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpLCB2YWwpKTtcXG4gICAgICB9IC8vIHNlYXJjaGVzIHRyZWUgZm9yIHNwZWNpZmllZCB2YWwgYW5kIHJldHVybnMgdGhlIG5vZGUgaWYgZm91bmQsIG51bGwgb3RoZXJ3aXNlXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJzZWFyY2hcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2godmFsKSB7XFxuICAgICAgICB2YXIgcmVjdXJzaXZlU2VhcmNoID0gZnVuY3Rpb24gcmVjdXJzaXZlU2VhcmNoKG5vZGUsIHZhbCkge1xcbiAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XFxuICAgICAgICAgIGlmICh2YWwgPCBub2RlLnZhbCkgcmV0dXJuIHJlY3Vyc2l2ZVNlYXJjaChub2RlLmxlZnQsIHZhbCk7XFxuICAgICAgICAgIGlmICh2YWwgPiBub2RlLnZhbCkgcmV0dXJuIHJlY3Vyc2l2ZVNlYXJjaChub2RlLnJpZ2h0LCB2YWwpO1xcbiAgICAgICAgICBpZiAodmFsID09PSBub2RlLnZhbCkgcmV0dXJuIG5vZGU7XFxuICAgICAgICB9O1xcblxcbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVNlYXJjaChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpLCB2YWwpO1xcbiAgICAgIH0gLy8gdHJlZSB0cmF2ZXJzYWxzXFxuICAgICAgLy8gcmV0dXJucyBhcnJheSBvZiB2YWxzXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmludEluT3JkZXJcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludEluT3JkZXIoKSB7XFxuICAgICAgICB2YXIgcmVzID0gREZTSXRlcmF0aXZlLmluT3JkZXIoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSk7XFxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xcbiAgICAgICAgcmV0dXJuIHJlcztcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmludFByZU9yZGVyXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRQcmVPcmRlcigpIHtcXG4gICAgICAgIHZhciByZXMgPSBERlNJdGVyYXRpdmUucHJlT3JkZXIoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSk7XFxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xcbiAgICAgICAgcmV0dXJuIHJlcztcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmludFBvc3RPcmRlclxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50UG9zdE9yZGVyKCkge1xcbiAgICAgICAgdmFyIHJlcyA9IERGU0l0ZXJhdGl2ZS5wb3N0T3JkZXIoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSk7XFxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xcbiAgICAgICAgcmV0dXJuIHJlcztcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmludExldmVsT3JkZXJcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludExldmVsT3JkZXIoKSB7XFxuICAgICAgICB2YXIgcmVzID0gQkZTKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCkpO1xcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcXG4gICAgICAgIHJldHVybiByZXM7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicm9vdFxcXCIsXFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KTtcXG4gICAgICB9XFxuICAgIH1dKTtcXG5cXG4gICAgcmV0dXJuIEJpbmFyeVNlYXJjaFRyZWU7XFxuICB9KCk7XFxuXFxuICB2YXIgX3Jvb3QgPSBuZXcgV2Vha01hcCgpO1xcblxcbiAgcmV0dXJuIEJpbmFyeVNlYXJjaFRyZWU7XFxufSgpO1xcblxcbm1vZHVsZS5leHBvcnRzID0gQmluYXJ5U2VhcmNoVHJlZTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9CaW5hcnlTZWFyY2hUcmVlLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvQmluYXJ5VHJlZVRyYXZlcnNhbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0JpbmFyeVRyZWVUcmF2ZXJzYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5ldmFsKFwidmFyIFN0YWNrID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9TdGFjayAqLyBcXFwiLi9zcmMvU3RhY2suanNcXFwiKTtcXG5cXG52YXIgUXVldWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1F1ZXVlICovIFxcXCIuL3NyYy9RdWV1ZS5qc1xcXCIpO1xcblxcbnZhciBCRlMgPSBmdW5jdGlvbiBCRlMocm9vdCkge1xcbiAgdmFyIHJlcyA9IFtdLFxcbiAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKCk7XFxuICBxdWV1ZS5lbnF1ZXVlKHJvb3QpO1xcblxcbiAgd2hpbGUgKCFxdWV1ZS5pc0VtcHR5KCkpIHtcXG4gICAgdmFyIG5vZGUgPSBxdWV1ZS5kZXF1ZXVlKCk7XFxuICAgIHJlcy5wdXNoKG5vZGUudmFsKTtcXG4gICAgaWYgKG5vZGUubGVmdCkgcXVldWUuZW5xdWV1ZShub2RlLmxlZnQpO1xcbiAgICBpZiAobm9kZS5yaWdodCkgcXVldWUuZW5xdWV1ZShub2RlLnJpZ2h0KTtcXG4gIH1cXG5cXG4gIHJldHVybiByZXM7XFxufTtcXG5cXG52YXIgREZTUmVjdXJzaXZlID0ge1xcbiAgaW5PcmRlcjogZnVuY3Rpb24gaW5PcmRlcihyb290KSB7XFxuICAgIHZhciByZXMgPSBbXTtcXG5cXG4gICAgZnVuY3Rpb24gcmVjdXJzZShub2RlKSB7XFxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcXG4gICAgICAgIHJlY3Vyc2Uobm9kZS5sZWZ0KTtcXG4gICAgICAgIHJlcy5wdXNoKG5vZGUudmFsKTtcXG4gICAgICAgIHJlY3Vyc2Uobm9kZS5yaWdodCk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJlY3Vyc2Uocm9vdCk7XFxuICAgIHJldHVybiByZXM7XFxuICB9LFxcbiAgcHJlT3JkZXI6IGZ1bmN0aW9uIHByZU9yZGVyKHJvb3QpIHtcXG4gICAgdmFyIHJlcyA9IFtdO1xcblxcbiAgICBmdW5jdGlvbiByZWN1cnNlKG5vZGUpIHtcXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xcbiAgICAgICAgcmVzLnB1c2gobm9kZS52YWwpO1xcbiAgICAgICAgcmVjdXJzZShub2RlLmxlZnQpO1xcbiAgICAgICAgcmVjdXJzZShub2RlLnJpZ2h0KTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgcmVjdXJzZShyb290KTtcXG4gICAgcmV0dXJuIHJlcztcXG4gIH0sXFxuICBwb3N0T3JkZXI6IGZ1bmN0aW9uIHBvc3RPcmRlcihyb290KSB7XFxuICAgIHZhciByZXMgPSBbXTtcXG5cXG4gICAgZnVuY3Rpb24gcmVjdXJzZShub2RlKSB7XFxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcXG4gICAgICAgIHJlY3Vyc2Uobm9kZS5sZWZ0KTtcXG4gICAgICAgIHJlY3Vyc2Uobm9kZS5yaWdodCk7XFxuICAgICAgICByZXMucHVzaChub2RlLnZhbCk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJlY3Vyc2Uocm9vdCk7XFxuICAgIHJldHVybiByZXM7XFxuICB9XFxufTtcXG52YXIgREZTSXRlcmF0aXZlID0ge1xcbiAgaW5PcmRlcjogZnVuY3Rpb24gaW5PcmRlcihyb290KSB7XFxuICAgIHZhciByZXMgPSBbXSxcXG4gICAgICAgIHN0YWNrID0gbmV3IFN0YWNrKCk7XFxuICAgIHZhciBjdXJyID0gcm9vdDtcXG5cXG4gICAgd2hpbGUgKCFzdGFjay5pc0VtcHR5KCkgfHwgY3VyciAhPT0gbnVsbCkge1xcbiAgICAgIGlmIChjdXJyICE9PSBudWxsKSB7XFxuICAgICAgICBzdGFjay5wdXNoKGN1cnIpO1xcbiAgICAgICAgY3VyciA9IGN1cnIubGVmdDtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgY3VyciA9IHN0YWNrLnBvcCgpO1xcbiAgICAgICAgcmVzLnB1c2goY3Vyci52YWwpO1xcbiAgICAgICAgY3VyciA9IGN1cnIucmlnaHQ7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHJldHVybiByZXM7XFxuICB9LFxcbiAgcHJlT3JkZXI6IGZ1bmN0aW9uIHByZU9yZGVyKHJvb3QpIHtcXG4gICAgdmFyIHJlcyA9IFtdLFxcbiAgICAgICAgc3RhY2sgPSBuZXcgU3RhY2soKTtcXG4gICAgdmFyIGN1cnI7XFxuICAgIHN0YWNrLnB1c2gocm9vdCk7XFxuXFxuICAgIHdoaWxlICghc3RhY2suaXNFbXB0eSgpKSB7XFxuICAgICAgY3VyciA9IHN0YWNrLnBvcCgpO1xcbiAgICAgIHJlcy5wdXNoKGN1cnIudmFsKTtcXG4gICAgICBpZiAoY3Vyci5yaWdodCAhPT0gbnVsbCkgc3RhY2sucHVzaChjdXJyLnJpZ2h0KTtcXG4gICAgICBpZiAoY3Vyci5sZWZ0ICE9PSBudWxsKSBzdGFjay5wdXNoKGN1cnIubGVmdCk7XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHJlcztcXG4gIH0sXFxuICAvLyBJdGVyYXRpdmUgcG9zdCBvcmRlciB1c2luZyB0d28gc3RhY2tzXFxuICBwb3N0T3JkZXI6IGZ1bmN0aW9uIHBvc3RPcmRlcihyb290KSB7XFxuICAgIHZhciByZXMgPSBbXSxcXG4gICAgICAgIHN0YWNrMSA9IG5ldyBTdGFjaygpLFxcbiAgICAgICAgc3RhY2syID0gbmV3IFN0YWNrKCk7XFxuICAgIHZhciBjdXJyO1xcbiAgICBzdGFjazEucHVzaChyb290KTtcXG5cXG4gICAgd2hpbGUgKCFzdGFjazEuaXNFbXB0eSgpKSB7XFxuICAgICAgY3VyciA9IHN0YWNrMS5wb3AoKTtcXG4gICAgICBzdGFjazIucHVzaChjdXJyKTtcXG4gICAgICBpZiAoY3Vyci5sZWZ0ICE9IG51bGwpIHN0YWNrMS5wdXNoKGN1cnIubGVmdCk7XFxuICAgICAgaWYgKGN1cnIucmlnaHQgIT0gbnVsbCkgc3RhY2sxLnB1c2goY3Vyci5yaWdodCk7XFxuICAgIH1cXG5cXG4gICAgd2hpbGUgKCFzdGFjazIuaXNFbXB0eSgpKSB7XFxuICAgICAgY3VyciA9IHN0YWNrMi5wb3AoKTtcXG4gICAgICByZXMucHVzaChjdXJyLnZhbCk7XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHJlcztcXG4gIH1cXG59O1xcbm1vZHVsZS5leHBvcnRzID0ge1xcbiAgQkZTOiBCRlMsXFxuICBERlNJdGVyYXRpdmU6IERGU0l0ZXJhdGl2ZSxcXG4gIERGU1JlY3Vyc2l2ZTogREZTUmVjdXJzaXZlXFxufTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9CaW5hcnlUcmVlVHJhdmVyc2FsLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvR3JhcGguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvR3JhcGguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXZhbChcImZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XFxuXFxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXFxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cXFwiKTsgfVxcblxcbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFxcXCJ1bmRlZmluZWRcXFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcXFwicmV0dXJuXFxcIl0gIT0gbnVsbCkgX2lbXFxcInJldHVyblxcXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxcblxcbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFxcXCJ1bmRlZmluZWRcXFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyB0aHJvdyBfZTI7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxcXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXFxcIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMykgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTM7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcXFwicmV0dXJuXFxcIl0gIT0gbnVsbCkgaXRbXFxcInJldHVyblxcXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cXG5cXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFxcXCJzdHJpbmdcXFwiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXFxcIk9iamVjdFxcXCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFxcXCJNYXBcXFwiIHx8IG4gPT09IFxcXCJTZXRcXFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFxcXCJBcmd1bWVudHNcXFwiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxcblxcbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcXFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XFxuXFxudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9HcmFwaFRyYXZlcnNhbCAqLyBcXFwiLi9zcmMvR3JhcGhUcmF2ZXJzYWwuanNcXFwiKSxcXG4gICAgX0JGUyA9IF9yZXF1aXJlLkJGUyxcXG4gICAgREZTUmVjdXJzaXZlID0gX3JlcXVpcmUuREZTUmVjdXJzaXZlO1xcblxcbnZhciBHcmFwaCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICBmdW5jdGlvbiBHcmFwaCgpIHtcXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyYXBoKTtcXG5cXG4gICAgX3ZlcnRpY2VzLnNldCh0aGlzLCB7XFxuICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICB9KTtcXG5cXG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF92ZXJ0aWNlcywgbmV3IE1hcCgpKTtcXG4gIH1cXG5cXG4gIF9jcmVhdGVDbGFzcyhHcmFwaCwgW3tcXG4gICAga2V5OiBcXFwiYWRkVmVydGV4XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFZlcnRleCh2YWwpIHtcXG4gICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKHZhbCkpIHRocm93IFxcXCJ2ZXJ0ZXggd2l0aCB2YWx1ZSBcXFwiLmNvbmNhdCh2YWwsIFxcXCIgYWxyZWFkeSBleGlzdHMuXFxcIik7XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuc2V0KHZhbCwgbmV3IFNldCgpKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJhZGRFZGdlXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEVkZ2UodlZhbCwgZVZhbCkge1xcbiAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKHZWYWwpKSB0aHJvdyBcXFwidmVydGV4IHdpdGggdmFsdWUgXFxcIi5jb25jYXQodlZhbCwgXFxcIiBkb2Vzbid0IGV4aXN0LlxcXCIpO1xcbiAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKGVWYWwpKSB0aHJvdyBcXFwiZWRnZSB3aXRoIHZhbHVlIFxcXCIuY29uY2F0KGVWYWwsIFxcXCIgZG9lc24ndCBleGlzdC5cXFwiKTtcXG5cXG4gICAgICB2YXIgZWRnZXMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5nZXQodlZhbCk7XFxuXFxuICAgICAgaWYgKGVkZ2VzLmhhcyhlVmFsKSkgdGhyb3cgXFxcInZlcnRleCBhbHJlYWR5IGhhcyBlZGdlIFxcXCIuY29uY2F0KGVWYWwsIFxcXCIuXFxcIik7XFxuICAgICAgZWRnZXMuYWRkKGVWYWwpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImdldFZlcnRleEVkZ2VzXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZlcnRleEVkZ2VzKHZWYWwpIHtcXG4gICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2VmFsKSkgdGhyb3cgXFxcInZlcnRleCB3aXRoIHZhbHVlIFxcXCIuY29uY2F0KHZWYWwsIFxcXCIgZG9lc24ndCBleGlzdC5cXFwiKTtcXG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5nZXQodlZhbCkpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcImhhc0VkZ2VcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzRWRnZSh2VmFsLCBlVmFsKSB7XFxuICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModlZhbCkpIHJldHVybiBmYWxzZTtcXG5cXG4gICAgICB2YXIgZWRnZXMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5nZXQodlZhbCk7XFxuXFxuICAgICAgcmV0dXJuIGVkZ2VzLmhhcyhlVmFsKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJoYXNWZXJ0ZXhcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzVmVydGV4KHZWYWwpIHtcXG4gICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKHZWYWwpO1xcbiAgICB9XFxuICB9LCB7XFxuICAgIGtleTogXFxcInJlbW92ZUVkZ2VcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRWRnZSh2VmFsLCBlVmFsKSB7XFxuICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModlZhbCkpIHRocm93IFxcXCJ2ZXJ0ZXggd2l0aCB2YWx1ZSBcXFwiLmNvbmNhdCh2VmFsLCBcXFwiIGRvZXNuJ3QgZXhpc3QuXFxcIik7XFxuXFxuICAgICAgdmFyIGVkZ2VzID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuZ2V0KHZWYWwpO1xcblxcbiAgICAgIGVkZ2VzW1xcXCJkZWxldGVcXFwiXShlVmFsKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJyZW1vdmVWZXJ0ZXhcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlVmVydGV4KHZWYWwpIHtcXG4gICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2VmFsKSkgdGhyb3cgXFxcInZlcnRleCB3aXRoIHZhbHVlIFxcXCIuY29uY2F0KHZWYWwsIFxcXCIgZG9lc24ndCBleGlzdC5cXFwiKTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKVtcXFwiZGVsZXRlXFxcIl0odlZhbCk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiQkZTXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIEJGUyhzdGFydCwgY2FsbGJhY2spIHtcXG4gICAgICB2YXIgZ3JhcGggPSB0aGlzO1xcblxcbiAgICAgIF9CRlMoc3RhcnQsIGdyYXBoLCBjYWxsYmFjayk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiREZTXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIERGUyhzdGFydCwgY2FsbGJhY2spIHtcXG4gICAgICB2YXIgZ3JhcGggPSB0aGlzO1xcbiAgICAgIERGU1JlY3Vyc2l2ZShzdGFydCwgZ3JhcGgsIGNhbGxiYWNrKTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJwcmludEdyYXBoXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50R3JhcGgoKSB7XFxuICAgICAgdmFyIGdyYXBoID0ge307XFxuXFxuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpKSxcXG4gICAgICAgICAgX3N0ZXA7XFxuXFxuICAgICAgdHJ5IHtcXG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XFxuICAgICAgICAgIHZhciBfc3RlcCR2YWx1ZSA9IF9zbGljZWRUb0FycmF5KF9zdGVwLnZhbHVlLCAyKSxcXG4gICAgICAgICAgICAgIHZWYWwgPSBfc3RlcCR2YWx1ZVswXSxcXG4gICAgICAgICAgICAgIHZlcnRleEVkZ2VzID0gX3N0ZXAkdmFsdWVbMV07XFxuXFxuICAgICAgICAgIGdyYXBoW3ZWYWxdID0gW107XFxuICAgICAgICAgIHZhciBlZGdlcyA9ICcnO1xcblxcbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHZlcnRleEVkZ2VzKSxcXG4gICAgICAgICAgICAgIF9zdGVwMjtcXG5cXG4gICAgICAgICAgdHJ5IHtcXG4gICAgICAgICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xcbiAgICAgICAgICAgICAgdmFyIGVkZ2UgPSBfc3RlcDIudmFsdWU7XFxuICAgICAgICAgICAgICBlZGdlcyArPSBcXFwiXFxcIi5jb25jYXQoZWRnZSwgXFxcIiBcXFwiKTtcXG4gICAgICAgICAgICAgIGdyYXBoW3ZWYWxdLnB1c2goZWRnZSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICAgICAgICBfaXRlcmF0b3IyLmUoZXJyKTtcXG4gICAgICAgICAgfSBmaW5hbGx5IHtcXG4gICAgICAgICAgICBfaXRlcmF0b3IyLmYoKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiXFxcIi5jb25jYXQodlZhbCwgXFxcIiAtPiBcXFwiKS5jb25jYXQoZWRnZXMpKTtcXG4gICAgICAgIH1cXG4gICAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XFxuICAgICAgfSBmaW5hbGx5IHtcXG4gICAgICAgIF9pdGVyYXRvci5mKCk7XFxuICAgICAgfVxcblxcbiAgICAgIHJldHVybiBncmFwaDtcXG4gICAgfVxcbiAgfV0pO1xcblxcbiAgcmV0dXJuIEdyYXBoO1xcbn0oKTtcXG5cXG52YXIgX3ZlcnRpY2VzID0gbmV3IFdlYWtNYXAoKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0dyYXBoLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvR3JhcGhUcmF2ZXJzYWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvR3JhcGhUcmF2ZXJzYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXZhbChcImZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFxcXCJ1bmRlZmluZWRcXFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlxcXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXFxcInJldHVyblxcXCJdICE9IG51bGwpIGl0W1xcXCJyZXR1cm5cXFwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XFxuXFxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcXFwic3RyaW5nXFxcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFxcXCJPYmplY3RcXFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcXFwiTWFwXFxcIiB8fCBuID09PSBcXFwiU2V0XFxcIikgcmV0dXJuIEFycmF5LmZyb20obik7IGlmIChuID09PSBcXFwiQXJndW1lbnRzXFxcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cXG5cXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cXG5cXG52YXIgUXVldWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1F1ZXVlICovIFxcXCIuL3NyYy9RdWV1ZS5qc1xcXCIpO1xcblxcbnZhciBTdGFjayA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU3RhY2sgKi8gXFxcIi4vc3JjL1N0YWNrLmpzXFxcIik7IC8vIGJyZWFkdGggZmlyc3Qgc2VhcmNoIHdpdGggcXVldWVcXG5cXG5cXG52YXIgQkZTID0gZnVuY3Rpb24gQkZTKHN0YXJ0LCBncmFwaCwgY2FsbGJhY2spIHtcXG4gIC8vIHdpbGwga2VlcCB0cmFjayBvZiBuZXcgdmVydGljZXMgd2l0aCBxdWV1ZSBhbmQgdmlzaXRlZCBub2RlcyB3aXRoIGEgc2V0XFxuICB2YXIgcXVldWUgPSBuZXcgUXVldWUoKSxcXG4gICAgICB2aXNpdGVkID0gbmV3IFNldCgpO1xcbiAgcXVldWUuZW5xdWV1ZShzdGFydCk7IC8vdmVydGV4IGlzIHZpc2l0ZWQgaWYgaXQgZ2V0cyBwdXNoZWQgaW50byBxdWV1ZS5cXG5cXG4gIHZpc2l0ZWQuYWRkKHN0YXJ0KTtcXG5cXG4gIHdoaWxlICghcXVldWUuaXNFbXB0eSgpKSB7XFxuICAgIHZhciBjdXJyID0gcXVldWUuZGVxdWV1ZSgpLFxcbiAgICAgICAgZWRnZXMgPSBncmFwaC5nZXRWZXJ0ZXhFZGdlcyhjdXJyKTsgLy8gY2FsbCBjYWxsYmFjayBvbiBlYWNoIHZlcnRleCB0aGF0IGdldHMgZGVxdWV1ZWRcXG5cXG4gICAgY2FsbGJhY2soY3Vycik7IC8vaXRlcmF0ZSBvdmVyIGFsbCBlZGdlcyBhbmQgYWRkIHRoZSB1bnZpc2l0ZWQgb25lcyB0byBxdWV1ZVxcblxcbiAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZWRnZXMpLFxcbiAgICAgICAgX3N0ZXA7XFxuXFxuICAgIHRyeSB7XFxuICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcXG4gICAgICAgIHZhciBlVmFsID0gX3N0ZXAudmFsdWU7XFxuXFxuICAgICAgICBpZiAoIXZpc2l0ZWQuaGFzKGVWYWwpKSB7XFxuICAgICAgICAgIHF1ZXVlLmVucXVldWUoZVZhbCk7XFxuICAgICAgICAgIHZpc2l0ZWQuYWRkKGVWYWwpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcXG4gICAgfSBmaW5hbGx5IHtcXG4gICAgICBfaXRlcmF0b3IuZigpO1xcbiAgICB9XFxuICB9XFxufTsgLy9pdGVyYXRpdmUgZGVwdGggZmlyc3Qgc2VhcmNoLiBBbG1vc3Qgc2FtZSBhcyBCRlMuIE9ubHkgZGlmZmVyZW5jZSBpcyB0aGUgc3RhY2sgdnMgcXVldWVcXG5cXG5cXG52YXIgREZTSXRlcmF0aXZlID0gZnVuY3Rpb24gREZTSXRlcmF0aXZlKHN0YXJ0LCBncmFwaCwgY2FsbGJhY2spIHtcXG4gIHZhciBzdGFjayA9IG5ldyBTdGFjaygpLFxcbiAgICAgIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XFxuICBzdGFjay5wdXNoKHN0YXJ0KTtcXG4gIHZpc2l0ZWQuYWRkKHN0YXJ0KTtcXG5cXG4gIHdoaWxlICghc3RhY2suaXNFbXB0eSgpKSB7XFxuICAgIHZhciBjdXJyID0gc3RhY2sucG9wKCksXFxuICAgICAgICBlZGdlcyA9IGdyYXBoLmdldFZlcnRleEVkZ2VzKGN1cnIpO1xcbiAgICBjYWxsYmFjayhjdXJyKTtcXG5cXG4gICAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlZGdlcyksXFxuICAgICAgICBfc3RlcDI7XFxuXFxuICAgIHRyeSB7XFxuICAgICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcXG4gICAgICAgIHZhciBlVmFsID0gX3N0ZXAyLnZhbHVlO1xcblxcbiAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhlVmFsKSkge1xcbiAgICAgICAgICBzdGFjay5wdXNoKGVWYWwpO1xcbiAgICAgICAgICB2aXNpdGVkLmFkZChlVmFsKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgIF9pdGVyYXRvcjIuZShlcnIpO1xcbiAgICB9IGZpbmFsbHkge1xcbiAgICAgIF9pdGVyYXRvcjIuZigpO1xcbiAgICB9XFxuICB9XFxufTsgLy8gUmVjdXJzaXZlIGRlcHRoIGZpcnN0IHNlYXJjaFxcblxcblxcbnZhciBERlNSZWN1cnNpdmUgPSBmdW5jdGlvbiBERlNSZWN1cnNpdmUoc3RhcnQsIGdyYXBoLCBjYWxsYmFjaykge1xcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XFxuXFxuICB2YXIgcmVjdXJzaXZlREZTID0gZnVuY3Rpb24gcmVjdXJzaXZlREZTKGN1cnIpIHtcXG4gICAgaWYgKHZpc2l0ZWQuaGFzKGN1cnIpKSByZXR1cm47XFxuICAgIGNhbGxiYWNrKGN1cnIpO1xcbiAgICB2aXNpdGVkLmFkZChjdXJyKTtcXG4gICAgdmFyIGVkZ2VzID0gZ3JhcGguZ2V0VmVydGV4RWRnZXMoY3Vycik7XFxuXFxuICAgIHZhciBfaXRlcmF0b3IzID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZWRnZXMpLFxcbiAgICAgICAgX3N0ZXAzO1xcblxcbiAgICB0cnkge1xcbiAgICAgIGZvciAoX2l0ZXJhdG9yMy5zKCk7ICEoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uKCkpLmRvbmU7KSB7XFxuICAgICAgICB2YXIgZVZhbCA9IF9zdGVwMy52YWx1ZTtcXG5cXG4gICAgICAgIGlmICghdmlzaXRlZC5oYXMoZVZhbCkpIHtcXG4gICAgICAgICAgcmVjdXJzaXZlREZTKGVWYWwpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgX2l0ZXJhdG9yMy5lKGVycik7XFxuICAgIH0gZmluYWxseSB7XFxuICAgICAgX2l0ZXJhdG9yMy5mKCk7XFxuICAgIH1cXG4gIH07XFxuXFxuICByZWN1cnNpdmVERlMoc3RhcnQpO1xcbn07XFxuXFxubW9kdWxlLmV4cG9ydHMgPSB7XFxuICBCRlM6IEJGUyxcXG4gIERGU1JlY3Vyc2l2ZTogREZTUmVjdXJzaXZlLFxcbiAgREZTSXRlcmF0aXZlOiBERlNJdGVyYXRpdmVcXG59O1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL0dyYXBoVHJhdmVyc2FsLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvSGFzaFRhYmxlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9IYXNoVGFibGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcXFwidW5kZWZpbmVkXFxcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXFxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cXFwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1xcXCJyZXR1cm5cXFwiXSAhPSBudWxsKSBpdFtcXFwicmV0dXJuXFxcIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxcblxcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXFxcInN0cmluZ1xcXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcXFwiT2JqZWN0XFxcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXFxcIk1hcFxcXCIgfHwgbiA9PT0gXFxcIlNldFxcXCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXFxcIkFyZ3VtZW50c1xcXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XFxuXFxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXFxcInZhbHVlXFxcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxcblxcbi8qIGh0dHBzOi8vcmVhY3Rnby5jb20vaGFzaHRhYmxlLWphdmFzY3JpcHQvICovXFxuXFxuLypcXG5SdWRpbWVudGFyeSBqYXZhc2NyaXB0IGhhc2ggdGFibGUgcmVzb2x2aW5nIGNvbGxpc2lvbnMgd2l0aCBzZXBhcmF0ZSBjaGFpbmluZy4gXFxuVG9kbzogUmVzb2x2ZSBjb25mbGljdHMgd2l0aCBMaW5lYXIgUHJvYmluZywgU2VwYXJhdGUgQ2hhaW5pbmcgKGxpbmtlZCBsaXN0cylcXG4qL1xcbnZhciBIYXNoVGFibGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgZnVuY3Rpb24gSGFzaFRhYmxlKCkge1xcbiAgICB2YXIgc2l6ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogNDI7XFxuXFxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIYXNoVGFibGUpO1xcblxcbiAgICB0aGlzLmJ1Y2tldHMgPSBuZXcgQXJyYXkoc2l6ZSk7XFxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XFxuICB9XFxuXFxuICBfY3JlYXRlQ2xhc3MoSGFzaFRhYmxlLCBbe1xcbiAgICBrZXk6IFxcXCJoYXNoXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc2goa2V5KSB7XFxuICAgICAgcmV0dXJuIGtleS50b1N0cmluZygpLmxlbmd0aCAlIHRoaXMuc2l6ZTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJzZXRcXFwiLFxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcXG4gICAgICB2YXIgaSA9IHRoaXMuaGFzaChrZXkpOyAvLyBpZiBubyBjb2xsaXNpb24sIHNldCB0aGUgYnVja2V0IGF0IHBvc2l0aW9uIGkgdG8gYXJyYXlcXG5cXG4gICAgICBpZiAoIXRoaXMuYnVja2V0c1tpXSkgdGhpcy5idWNrZXRzW2ldID0gW107IC8vIHB1c2ggW2tleSwgdmFsXSBpbnRvIHRoZSBhcnJheVxcblxcbiAgICAgIHRoaXMuYnVja2V0c1tpXS5wdXNoKFtrZXksIHZhbHVlXSk7XFxuICAgICAgcmV0dXJuIGk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiZ2V0XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChrZXkpIHtcXG4gICAgICB2YXIgaSA9IHRoaXMuaGFzaChrZXkpO1xcbiAgICAgIGlmICghdGhpcy5idWNrZXRzW2ldKSByZXR1cm4gbnVsbDsgLy8gY2hlY2sgZWFjaCBwYWlyIGluc2lkZSB0aGUgYnVja2V0IGF0IHBvc2l0aW9uIGlcXG4gICAgICAvLyBpZiBrZXkgbWF0Y2hlcyBrZXkgYXQgcGFpclswXSByZXR1cm4gdGhlIHZhbCBhdCBwYWlyWzFdXFxuXFxuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHRoaXMuYnVja2V0c1tpXSksXFxuICAgICAgICAgIF9zdGVwO1xcblxcbiAgICAgIHRyeSB7XFxuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xcbiAgICAgICAgICB2YXIgcGFpciA9IF9zdGVwLnZhbHVlO1xcbiAgICAgICAgICBpZiAocGFpclswXSA9PT0ga2V5KSByZXR1cm4gcGFpclsxXTtcXG4gICAgICAgIH1cXG4gICAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XFxuICAgICAgfSBmaW5hbGx5IHtcXG4gICAgICAgIF9pdGVyYXRvci5mKCk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XSk7XFxuXFxuICByZXR1cm4gSGFzaFRhYmxlO1xcbn0oKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hUYWJsZTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9IYXNoVGFibGUuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9MaW5rZWRMaXN0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvTGlua2VkTGlzdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcXFwidW5kZWZpbmVkXFxcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXFxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cXFwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1xcXCJyZXR1cm5cXFwiXSAhPSBudWxsKSBpdFtcXFwicmV0dXJuXFxcIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxcblxcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXFxcInN0cmluZ1xcXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcXFwiT2JqZWN0XFxcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXFxcIk1hcFxcXCIgfHwgbiA9PT0gXFxcIlNldFxcXCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXFxcIkFyZ3VtZW50c1xcXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XFxuXFxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XFxuXFxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXFxcInZhbHVlXFxcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cXG5cXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5nZXQpIHsgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjcmlwdG9yLnZhbHVlOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcXFwiKTsgfSBpZiAoZGVzY3JpcHRvci5zZXQpIHsgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpOyB9IGVsc2UgeyBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFxcXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG52YXIgTGlua2VkTGlzdCA9IGZ1bmN0aW9uICgpIHtcXG4gIC8vIGNvbnN0IGhlYWQgPSBTeW1ib2woJ2hlYWQnKSAvL1RvIGtlZXAgaGVhZCBhcyBwcml2YXRlIGluIGxpbmtlZCBsaXN0XFxuICAvLyBjb25zdCBzaXplID0gU3ltYm9sKCdzaXplJylcXG4gIHZhciBMaXN0Tm9kZSA9IGZ1bmN0aW9uIExpc3ROb2RlKHZhbCkge1xcbiAgICB2YXIgbmV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcXG5cXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpc3ROb2RlKTtcXG5cXG4gICAgdGhpcy52YWwgPSB2YWw7XFxuICAgIHRoaXMubmV4dCA9IG5leHQ7XFxuICB9O1xcblxcbiAgdmFyIExpbmtlZExpc3QgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgICAvLyBQcml2YXRlIHN0YXRpYyBmaWVsZHNcXG4gICAgZnVuY3Rpb24gTGlua2VkTGlzdCgpIHtcXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlua2VkTGlzdCk7XFxuXFxuICAgICAgX2hlYWQuc2V0KHRoaXMsIHtcXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICAgIH0pO1xcblxcbiAgICAgIF9zaXplLnNldCh0aGlzLCB7XFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgICB9KTtcXG5cXG4gICAgICAvLyBUaGUgaGVhZCBhbmQgc2l6ZSBwcm9wZXJ0eSBzaG91bGRuJ3QgYmUgbW9kaWZpYWJsZSBvdXRzaWRlIHRoZSBjbGFzcy4gU28gdGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBnZXR0ZXIuIENsYXNzIGZpZWxkcyBhcmVuJ3Qgc3VwcG9ydGVkIGJ5IGEgbG90IG9mIGJyb3dzZXJzLiBVc2Ugc3ltYm9sIGluc3RlYWQgdG8gY3JlYXRlIHByaXZhdGUgY2xhc3MgdmFyaWFibGVzIGlmIHlvdSdyZSBub3QgdXNpbmcgYmFiZWwuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9oZWFkLCBudWxsKTtcXG5cXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIDApOyAvLyB0aGlzW2hlYWRdID0gbnVsbFxcbiAgICAgIC8vIHRoaXNbc2l6ZV0gPSAwXFxuXFxuICAgIH0gLy9nZXR0ZXJzXFxuXFxuXFxuICAgIF9jcmVhdGVDbGFzcyhMaW5rZWRMaXN0LCBbe1xcbiAgICAgIGtleTogXFxcImZyb21BcnJheVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZyb21BcnJheShhcnJheSkge1xcbiAgICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGFycmF5KSxcXG4gICAgICAgICAgICBfc3RlcDtcXG5cXG4gICAgICAgIHRyeSB7XFxuICAgICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XFxuICAgICAgICAgICAgdmFyIHZhbCA9IF9zdGVwLnZhbHVlO1xcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kVG9UYWlsKHZhbCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xcbiAgICAgICAgfSBmaW5hbGx5IHtcXG4gICAgICAgICAgX2l0ZXJhdG9yLmYoKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJ0b0FycmF5XFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdG9BcnJheSgpIHtcXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcXG5cXG4gICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG5cXG4gICAgICAgIHdoaWxlIChjdXJyKSB7XFxuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnIudmFsKTtcXG4gICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgICAgfSAvLyBUIOKAlCBPKDEpXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmVwZW5kVG9IZWFkXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlcGVuZFRvSGVhZCh2YWwpIHtcXG4gICAgICAgIHZhciBfdGhpcyRzaXplO1xcblxcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgTGlzdE5vZGUodmFsKTtcXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpID09IG51bGwpIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgbm9kZSk7ZWxzZSB7XFxuICAgICAgICAgIHZhciBwcmV2SGVhZCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XFxuXFxuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgbm9kZSk7XFxuXFxuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCkubmV4dCA9IHByZXZIZWFkO1xcbiAgICAgICAgfVxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZSA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSArIDEpLCBfdGhpcyRzaXplO1xcbiAgICAgIH0gLy8gVCDigJQgTyhuKVxcblxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwiYXBwZW5kVG9UYWlsXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVG9UYWlsKHZhbCkge1xcbiAgICAgICAgdmFyIF90aGlzJHNpemUyO1xcblxcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgTGlzdE5vZGUodmFsKTtcXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpID09IG51bGwpIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgbm9kZSk7ZWxzZSB7XFxuICAgICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG5cXG4gICAgICAgICAgd2hpbGUgKGN1cnIubmV4dCkge1xcbiAgICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgY3Vyci5uZXh0ID0gbm9kZTtcXG4gICAgICAgIH1cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemUyID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpICsgMSksIF90aGlzJHNpemUyO1xcbiAgICAgIH0gLy8gVCDigJQgTygxKVxcblxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwiZGVsZXRlRnJvbUhlYWRcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxldGVGcm9tSGVhZCgpIHtcXG4gICAgICAgIHZhciBfdGhpcyRzaXplMztcXG5cXG4gICAgICAgIHZhciBjdXJySGVhZCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XFxuXFxuICAgICAgICBpZiAoIWN1cnJIZWFkKSByZXR1cm4gbnVsbDtcXG5cXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgY3VyckhlYWQubmV4dCk7XFxuXFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplMyA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSAtIDEpLCBfdGhpcyRzaXplMztcXG4gICAgICAgIHJldHVybiBjdXJySGVhZC52YWw7XFxuICAgICAgfSAvLyBUIOKAlCBPKG4pXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJkZWxldGVGcm9tVGFpbFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZUZyb21UYWlsKCkge1xcbiAgICAgICAgdmFyIF90aGlzJHNpemU1O1xcblxcbiAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xcblxcbiAgICAgICAgaWYgKCFjdXJyKSByZXR1cm4gbnVsbDsgLy9IYW5kbGUgY2FzZSBvZiBzaW5nbGUgbm9kZSBpbiBsaW5rZWQgbGlzdFxcblxcbiAgICAgICAgaWYgKCFjdXJyLm5leHQpIHtcXG4gICAgICAgICAgdmFyIF90aGlzJHNpemU0O1xcblxcbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIG51bGwpO1xcblxcbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplNCA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSAtIDEpLCBfdGhpcyRzaXplNDtcXG4gICAgICAgICAgcmV0dXJuIGN1cnIudmFsO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdmFyIHByZXYgPSBudWxsO1xcblxcbiAgICAgICAgd2hpbGUgKGN1cnIubmV4dCkge1xcbiAgICAgICAgICBwcmV2ID0gY3VycjtcXG4gICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHByZXYubmV4dCA9IG51bGw7XFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplNSA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSAtIDEpLCBfdGhpcyRzaXplNTtcXG4gICAgICAgIHJldHVybiBjdXJyLnZhbDtcXG4gICAgICB9IC8vIFQg4oCUIE8obikuIE5vbiByZWN1cnNpdmUgdmVyc2lvbiBvZiBkZWxldGVOb2RlUmVjdXJzaXZlXFxuXFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJkZWxldGVOb2RlXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVsZXRlTm9kZSh2YWwpIHtcXG4gICAgICAgIHZhciBkZWxldGVNdWx0aXBsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XFxuICAgICAgICB2YXIgZGVsZXRlQ291bnQgPSAwO1xcblxcbiAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpLFxcbiAgICAgICAgICAgIHByZXYgPSBudWxsO1xcblxcbiAgICAgICAgd2hpbGUgKGN1cnIpIHtcXG4gICAgICAgICAgaWYgKGN1cnIudmFsID09PSB2YWwpIHtcXG4gICAgICAgICAgICB2YXIgX3RoaXMkc2l6ZTY7XFxuXFxuICAgICAgICAgICAgaWYgKCFwcmV2KSB7XFxuICAgICAgICAgICAgICAvL0Rvbid0IG5lZWQgdG8gZ2FyYmFnZSBjb2xsZWN0LiBUaGlzIGlzIEphdmFzY3JpcHQsIG5vdCBDKytcXG4gICAgICAgICAgICAgIC8vIGNvbnN0IHRlbXAgPSBjdXJyXFxuICAgICAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0OyAvLyB0ZW1wLm5leHQgPSBudWxsXFxuXFxuICAgICAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIGN1cnIpO1xcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICBwcmV2Lm5leHQgPSBjdXJyLm5leHQ7IC8vIGN1cnIubmV4dCA9IG51bGxcXG5cXG4gICAgICAgICAgICAgIGN1cnIgPSBwcmV2Lm5leHQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemU2ID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpIC0gMSksIF90aGlzJHNpemU2O1xcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50Kys7XFxuICAgICAgICAgICAgaWYgKCFkZWxldGVNdWx0aXBsZSkgcmV0dXJuIHRydWU7XFxuICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgcHJldiA9IGN1cnI7XFxuICAgICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgcmV0dXJuICEhZGVsZXRlQ291bnQ7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwic2VhcmNoXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2VhcmNoKHZhbCkge1xcbiAgICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xcblxcbiAgICAgICAgd2hpbGUgKGN1cnIpIHtcXG4gICAgICAgICAgaWYgKGN1cnIudmFsID09PSB2YWwpIHJldHVybiB0cnVlO1xcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInByaW50TGlzdFxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50TGlzdCgpIHtcXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnRvQXJyYXkoKTtcXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XFxuICAgICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImhlYWRcXFwiLFxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xcbiAgICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwic2l6ZVxcXCIsXFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJ0YWlsXFxcIixcXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcXG4gICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcXG5cXG4gICAgICAgIGlmICghY3VycikgcmV0dXJuIG51bGw7XFxuXFxuICAgICAgICB3aGlsZSAoY3Vyci5uZXh0KSB7XFxuICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICByZXR1cm4gY3VycjtcXG4gICAgICB9XFxuICAgIH1dKTtcXG5cXG4gICAgcmV0dXJuIExpbmtlZExpc3Q7XFxuICB9KCk7XFxuXFxuICB2YXIgX2hlYWQgPSBuZXcgV2Vha01hcCgpO1xcblxcbiAgdmFyIF9zaXplID0gbmV3IFdlYWtNYXAoKTtcXG5cXG4gIHJldHVybiBMaW5rZWRMaXN0O1xcbn0oKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IExpbmtlZExpc3Q7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vRGF0YVN0cnVjdHVyZXMvLi9zcmMvTGlua2VkTGlzdC5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL1F1ZXVlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL1F1ZXVlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVxcXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXFxcIik7IH0gZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlOyB9IHJldHVybiB2YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbnZhciBRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcXG4gIHZhciBRdWV1ZU5vZGUgPSBmdW5jdGlvbiBRdWV1ZU5vZGUoZGF0YSkge1xcbiAgICB2YXIgbmV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcXG5cXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFF1ZXVlTm9kZSk7XFxuXFxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XFxuICAgIHRoaXMubmV4dCA9IG5leHQ7XFxuICB9O1xcblxcbiAgdmFyIFF1ZXVlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gICAgLy9Mb29rIGluIC4vTGlua2VkTGlzdC5qcyB0byBzZWUgb3RoZXIgd2F5cyBvZiBkZWNsYXJpbmcgcHJpdmF0ZSBzdGF0aWMgZmllbGRzIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0NsYXNzZXMvQ2xhc3NfZmllbGRzI1ByaXZhdGVfZmllbGRzXFxuICAgIGZ1bmN0aW9uIFF1ZXVlKCkge1xcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBRdWV1ZSk7XFxuXFxuICAgICAgX2ZpcnN0LnNldCh0aGlzLCB7XFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcXG4gICAgICB9KTtcXG5cXG4gICAgICBfbGFzdC5zZXQodGhpcywge1xcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgICB2YWx1ZTogdm9pZCAwXFxuICAgICAgfSk7XFxuXFxuICAgICAgX3NpemUuc2V0KHRoaXMsIHtcXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICAgIH0pO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfZmlyc3QsIG51bGwpO1xcblxcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfbGFzdCwgbnVsbCk7XFxuXFxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAwKTtcXG4gICAgfVxcblxcbiAgICBfY3JlYXRlQ2xhc3MoUXVldWUsIFt7XFxuICAgICAga2V5OiBcXFwiZW5xdWV1ZVxcXCIsXFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVucXVldWUoaXRlbSkge1xcbiAgICAgICAgdmFyIF90aGlzJHNpemU7XFxuXFxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBRdWV1ZU5vZGUoaXRlbSk7XFxuXFxuICAgICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9sYXN0KSkge1xcbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2xhc3QpLm5leHQgPSBub2RlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9sYXN0LCBub2RlKTtcXG5cXG4gICAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCkpIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfZmlyc3QsIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfbGFzdCkpO1xcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZSA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSArIDEpLCBfdGhpcyRzaXplO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImRlcXVldWVcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXF1ZXVlKCkge1xcbiAgICAgICAgdmFyIF90aGlzJHNpemUyO1xcblxcbiAgICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KSkgcmV0dXJuIG51bGw7XFxuXFxuICAgICAgICB2YXIgZGF0YSA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpLmRhdGE7XFxuXFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2ZpcnN0LCBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KS5uZXh0KTtcXG5cXG4gICAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCkpIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfbGFzdCwgbnVsbCk7XFxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplMiA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSAtIDEpLCBfdGhpcyRzaXplMjtcXG4gICAgICAgIHJldHVybiBkYXRhO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcInBlZWtcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwZWVrKCkge1xcbiAgICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KSkgcmV0dXJuIG51bGw7XFxuICAgICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCkuZGF0YTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJpc0VtcHR5XFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNFbXB0eSgpIHtcXG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KSA9PT0gbnVsbDtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmludFF1ZXVlXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRRdWV1ZSgpIHtcXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcXG5cXG4gICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCk7XFxuXFxuICAgICAgICB3aGlsZSAoY3Vycikge1xcbiAgICAgICAgICByZXN1bHQucHVzaChjdXJyLmRhdGEpO1xcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcXG4gICAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwic2l6ZVxcXCIsXFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKTtcXG4gICAgICB9XFxuICAgIH1dKTtcXG5cXG4gICAgcmV0dXJuIFF1ZXVlO1xcbiAgfSgpO1xcblxcbiAgdmFyIF9maXJzdCA9IG5ldyBXZWFrTWFwKCk7XFxuXFxuICB2YXIgX2xhc3QgPSBuZXcgV2Vha01hcCgpO1xcblxcbiAgdmFyIF9zaXplID0gbmV3IFdlYWtNYXAoKTtcXG5cXG4gIHJldHVybiBRdWV1ZTtcXG59KCk7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9RdWV1ZS5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL1N0YWNrLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL1N0YWNrLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cXFwiKTsgfSB9XFxuXFxudmFyIFN0YWNrID0gZnVuY3Rpb24gKCkge1xcbiAgdmFyIHRvcCA9IFN5bWJvbCgndG9wJyk7IC8vVG8ga2VlcCB0b3AgYXMgcHJpdmF0ZSBpbiBzdGFja1xcblxcbiAgdmFyIFN0YWNrTm9kZSA9IGZ1bmN0aW9uIFN0YWNrTm9kZShkYXRhKSB7XFxuICAgIHZhciBuZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xcblxcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhY2tOb2RlKTtcXG5cXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcXG4gICAgdGhpcy5uZXh0ID0gbmV4dDtcXG4gIH07XFxuXFxuICB2YXIgU3RhY2sgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xcbiAgICBmdW5jdGlvbiBTdGFjaygpIHtcXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhY2spO1xcblxcbiAgICAgIHRoaXNbdG9wXSA9IG51bGw7XFxuICAgIH1cXG5cXG4gICAgX2NyZWF0ZUNsYXNzKFN0YWNrLCBbe1xcbiAgICAgIGtleTogXFxcInB1c2hcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcXG4gICAgICAgIHZhciBub2RlID0gbmV3IFN0YWNrTm9kZShpdGVtKTtcXG4gICAgICAgIG5vZGUubmV4dCA9IHRoaXNbdG9wXTtcXG4gICAgICAgIHRoaXNbdG9wXSA9IG5vZGU7XFxuICAgICAgfVxcbiAgICB9LCB7XFxuICAgICAga2V5OiBcXFwicG9wXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcG9wKCkge1xcbiAgICAgICAgaWYgKHRoaXNbdG9wXSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XFxuICAgICAgICB2YXIgaXRlbSA9IHRoaXNbdG9wXS5kYXRhO1xcbiAgICAgICAgdGhpc1t0b3BdID0gdGhpc1t0b3BdLm5leHQ7XFxuICAgICAgICByZXR1cm4gaXRlbTtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwZWVrXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcGVlaygpIHtcXG4gICAgICAgIGlmICh0aGlzW3RvcF0gPT09IG51bGwpIHJldHVybiBudWxsO1xcbiAgICAgICAgcmV0dXJuIHRoaXNbdG9wXS5kYXRhO1xcbiAgICAgIH1cXG4gICAgfSwge1xcbiAgICAgIGtleTogXFxcImlzRW1wdHlcXFwiLFxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0VtcHR5KCkge1xcbiAgICAgICAgcmV0dXJuIHRoaXNbdG9wXSA9PT0gbnVsbDtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJwcmludFN0YWNrXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRTdGFjaygpIHtcXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcXG4gICAgICAgIHZhciBjdXJyID0gdGhpc1t0b3BdO1xcblxcbiAgICAgICAgd2hpbGUgKGN1cnIpIHtcXG4gICAgICAgICAgcmVzdWx0LnB1c2goY3Vyci5kYXRhKTtcXG4gICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcXG4gICAgICAgIH0gLy8gY29uc29sZS5sb2cocmVzdWx0KVxcblxcblxcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcXG4gICAgICB9XFxuICAgIH0sIHtcXG4gICAgICBrZXk6IFxcXCJzdGFja1RvU3RyaW5nXFxcIixcXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhY2tUb1N0cmluZygpIHtcXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnByaW50U3RhY2soKSk7XFxuICAgICAgfVxcbiAgICB9XSk7XFxuXFxuICAgIHJldHVybiBTdGFjaztcXG4gIH0oKTtcXG5cXG4gIHJldHVybiBTdGFjaztcXG59KCk7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9EYXRhU3RydWN0dXJlcy8uL3NyYy9TdGFjay5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL1RyaWUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9UcmllLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcInZhciBfdGVtcCwgX3Jvb3Q7XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXFxcInVuZGVmaW5lZFxcXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxcXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXFxcIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcXFwicmV0dXJuXFxcIl0gIT0gbnVsbCkgaXRbXFxcInJldHVyblxcXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cXG5cXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFxcXCJzdHJpbmdcXFwiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXFxcIk9iamVjdFxcXCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFxcXCJNYXBcXFwiIHx8IG4gPT09IFxcXCJTZXRcXFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFxcXCJBcmd1bWVudHNcXFwiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxcblxcbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXFxcIik7IH0gfVxcblxcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFxcXCJ2YWx1ZVxcXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XFxuXFxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxcblxcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXFxcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcXFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XFxuXFxuLyogXFxuXFxuaHR0cHM6Ly9sZWV0Y29kZS5jb20vcHJvYmxlbXMvaW1wbGVtZW50LXRyaWUtcHJlZml4LXRyZWUvc29sdXRpb24vXFxuVmlzdWFsaXplIGEgdHJpZSBhcyBhIDI2IGJ5IG4gbWF0cml4IHdpdGggb25lIHdheSByZWxhdGlvbiBiZXR3ZWVuIHRoZSBsZXR0ZXJzIGluIGRpZmZlcmVudCBsZXZlbHMuIG4gaXMgdGhlIGxlbmd0aCBvZiB0aGUgbG9uZ2VzdCB3b3JkIGluIHRoZSB0cmllLlxcblxcbndvcmRzIOKAlCBkZWVkLCBub20sIG5vb25cXG5cXG5hICBiICBjICBkICBlICBmICBnICBoICBpICBqICBrICBsICBtICBuICBvIC4uLlxcbiAgICAgICAgICAg4oaYICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGmCBcXG5hICBiICBjICBkICBlICBmICBnICBoICBpICBqICBrICBsICBtICBuICBvIC4uLlxcbiAgICAgICAgICAgIOKGkyAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGmSDihpNcXG4gICAgICAgICAgICDihpMgICAgICAgICAgICAgICAgICAgICAgICAg4oaZICAg4oaTXFxuYSAgYiAgYyAgZCAgZSAgZiAgZyAgaCAgaSAgaiAgayAgbCAgbSAgbiAgbyAuLi5cXG4gICAgICAgICAg4oaZICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihplcXG5hICBiICBjICBkICBlICBmICBnICBoICBpICBqICBrICBsICBtICBuICBvIC4uLlxcblxcblRoZSByb290IHdvdWxkIGxvb2sgbGlrZTpcXG5cXG5jb25zdCB0cmllID1cXG57XFxuICBkOiB7IGU6IHsgZTogeyBkOiB7IGlzV29yZDogdHJ1ZSB9IH0gfSB9LFxcbiAgbjogeyBvOiB7IG86IHsgbjogeyBpc1dvcmQ6IHRydWUgfSB9LFxcbiAgICAgICBtOiB7IGlzV29yZDogdHJ1ZSB9IH1cXG4gICAgIH1cXG59XFxuXFxuKi9cXG4vLyBXZSdsbCBhc3N1bWUgdGhhdCB0aGUgd29yZHMgcHJvdmlkZWQgd2lsbCBjb25zaXN0IG9mIGxldHRlcnMgb25seSBhbmQgYXJlIGFsd2F5cyBsb3dlcmNhc2VcXG52YXIgVHJpZSA9IChfdGVtcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XFxuICBmdW5jdGlvbiBUcmllKCkge1xcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJpZSk7XFxuXFxuICAgIF9yb290LnNldCh0aGlzLCB7XFxuICAgICAgd3JpdGFibGU6IHRydWUsXFxuICAgICAgdmFsdWU6IHZvaWQgMFxcbiAgICB9KTtcXG5cXG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9yb290LCB7fSk7XFxuICB9XFxuXFxuICBfY3JlYXRlQ2xhc3MoVHJpZSwgW3tcXG4gICAga2V5OiBcXFwiX3RyYXZlcnNlXFxcIixcXG4gICAgLy8gaGVscGVyLiBDaGFuZ2UgdG8gcHJpdmF0ZSB3aGVuIHByaXZhdGUgaW5zdGFuY2UgbWV0aG9kcyBhcmUgc3VwcG9ydGVkXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdHJhdmVyc2Uod29yZCkge1xcbiAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KTtcXG5cXG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIod29yZCksXFxuICAgICAgICAgIF9zdGVwO1xcblxcbiAgICAgIHRyeSB7XFxuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xcbiAgICAgICAgICB2YXIgY2ggPSBfc3RlcC52YWx1ZTtcXG4gICAgICAgICAgaWYgKCFjdXJyKSByZXR1cm4gbnVsbDtcXG4gICAgICAgICAgY3VyciA9IGN1cnJbY2hdO1xcbiAgICAgICAgfVxcbiAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcXG4gICAgICB9IGZpbmFsbHkge1xcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcXG4gICAgICB9XFxuXFxuICAgICAgcmV0dXJuIGN1cnI7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwiaW5zZXJ0XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydCh3b3JkKSB7XFxuICAgICAgdmFyIGN1cnIgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpO1xcblxcbiAgICAgIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIod29yZCksXFxuICAgICAgICAgIF9zdGVwMjtcXG5cXG4gICAgICB0cnkge1xcbiAgICAgICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcXG4gICAgICAgICAgdmFyIGNoID0gX3N0ZXAyLnZhbHVlO1xcbiAgICAgICAgICBjdXJyW2NoXSA9IGN1cnJbY2hdID8gY3VycltjaF0gOiB7fTtcXG4gICAgICAgICAgY3VyciA9IGN1cnJbY2hdO1xcbiAgICAgICAgfVxcbiAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XFxuICAgICAgfSBmaW5hbGx5IHtcXG4gICAgICAgIF9pdGVyYXRvcjIuZigpO1xcbiAgICAgIH1cXG5cXG4gICAgICBjdXJyLmlzV29yZCA9IHRydWU7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwic2VhcmNoXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaCh3b3JkKSB7XFxuICAgICAgdmFyIG5vZGUgPSB0aGlzLl90cmF2ZXJzZSh3b3JkKTtcXG5cXG4gICAgICByZXR1cm4gbm9kZSAhPT0gbnVsbCAmJiBub2RlLmlzV29yZCA9PT0gdHJ1ZTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJzdGFydHNXaXRoXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0c1dpdGgod29yZCkge1xcbiAgICAgIHJldHVybiB0aGlzLl90cmF2ZXJzZSh3b3JkKSAhPT0gbnVsbDtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJyb290XFxcIixcXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XFxuICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCk7XFxuICAgIH1cXG4gIH1dKTtcXG5cXG4gIHJldHVybiBUcmllO1xcbn0oKSwgX3Jvb3QgPSBuZXcgV2Vha01hcCgpLCBfdGVtcCk7XFxubW9kdWxlLmV4cG9ydHMgPSBUcmllO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL1RyaWUuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5ldmFsKFwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cXG5cXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cXG5cXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxcblxcbnZhciBMaW5rZWRMaXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9MaW5rZWRMaXN0ICovIFxcXCIuL3NyYy9MaW5rZWRMaXN0LmpzXFxcIik7XFxuXFxudmFyIEhhc2hUYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vSGFzaFRhYmxlICovIFxcXCIuL3NyYy9IYXNoVGFibGUuanNcXFwiKTtcXG5cXG52YXIgU3RhY2sgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1N0YWNrICovIFxcXCIuL3NyYy9TdGFjay5qc1xcXCIpO1xcblxcbnZhciBRdWV1ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUXVldWUgKi8gXFxcIi4vc3JjL1F1ZXVlLmpzXFxcIik7XFxuXFxudmFyIFRyZWVUcmF2ZXJzYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0JpbmFyeVRyZWVUcmF2ZXJzYWwgKi8gXFxcIi4vc3JjL0JpbmFyeVRyZWVUcmF2ZXJzYWwuanNcXFwiKTtcXG5cXG52YXIgQmluYXJ5U2VhcmNoVHJlZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQmluYXJ5U2VhcmNoVHJlZSAqLyBcXFwiLi9zcmMvQmluYXJ5U2VhcmNoVHJlZS5qc1xcXCIpO1xcblxcbnZhciBUcmllID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9UcmllICovIFxcXCIuL3NyYy9UcmllLmpzXFxcIik7XFxuXFxudmFyIEJpbmFyeUhlYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0JpbmFyeUhlYXAgKi8gXFxcIi4vc3JjL0JpbmFyeUhlYXAvaW5kZXguanNcXFwiKTtcXG5cXG52YXIgR3JhcGhUcmF2ZXJzYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0dyYXBoVHJhdmVyc2FsICovIFxcXCIuL3NyYy9HcmFwaFRyYXZlcnNhbC5qc1xcXCIpO1xcblxcbnZhciBHcmFwaCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vR3JhcGggKi8gXFxcIi4vc3JjL0dyYXBoLmpzXFxcIik7XFxuXFxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkKHtcXG4gIExpbmtlZExpc3Q6IExpbmtlZExpc3QsXFxuICBIYXNoVGFibGU6IEhhc2hUYWJsZSxcXG4gIFN0YWNrOiBTdGFjayxcXG4gIFF1ZXVlOiBRdWV1ZSxcXG4gIFRyZWVUcmF2ZXJzYWw6IFRyZWVUcmF2ZXJzYWwsXFxuICBCaW5hcnlTZWFyY2hUcmVlOiBCaW5hcnlTZWFyY2hUcmVlLFxcbiAgVHJpZTogVHJpZVxcbn0sIEJpbmFyeUhlYXAsIHtcXG4gIEdyYXBoVHJhdmVyc2FsOiBHcmFwaFRyYXZlcnNhbCxcXG4gIEdyYXBoOiBHcmFwaFxcbn0pO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0RhdGFTdHJ1Y3R1cmVzLy4vc3JjL2luZGV4LmpzP1wiKTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFpbiB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXksIGNvdW50ID0gMCkge1xuICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXlcbiAgICB0aGlzLmNvdW50ID0gY291bnRcbiAgICB0aGlzLm1pbiA9IDBcbiAgfVxuXG4gIHNldENvdW50ID0gKGNvdW50KSA9PiB7XG4gICAgdGhpcy5jb3VudCA9IGNvdW50XG4gIH1cblxuICByZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLnNldENvdW50KDApXG4gICAgdGhpcy51cGRhdGVDaGFpbigpXG4gIH1cblxuICBpbmNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuY291bnQgKyAxXG4gICAgdGhpcy5zZXRDb3VudChjb3VudClcbiAgICB0aGlzLnVwZGF0ZUNoYWluKClcbiAgfVxuXG4gIGRlY3JlbWVudENvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5jb3VudFxuICAgIHRoaXMuY291bnQgPSBNYXRoLm1heChjb3VudCAtIDEsIHRoaXMubWluKVxuICAgIHRoaXMudXBkYXRlQ2hhaW4oKVxuICB9XG5cbiAgdXBkYXRlQ2hhaW4gPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNwbGF5LnVwZGF0ZUVsZW1lbnQoJyNjaGFpbicsIHRoaXMuY291bnQpXG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIHRoaXMudXBkYXRlQ2hhaW4oKVxuICB9XG59XG4iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vTW92aW5nT2JqZWN0J1xuXG5jb25zdCByID0gMTAsXG4gIGMgPSAnI2Y2ZTg3MicsXG4gIHYgPSB7IGR4OiAxLCBkeTogMSB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWxkIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcG9zLFxuICAgIHJhZGl1cyA9IHIsXG4gICAgd29ybGQsXG4gICAgc3ByaXRlLFxuICAgIHNpemUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSxcbiAgICB2ZWwgPSB2LFxuICAgIGNvbG9yID0gY1xuICApIHtcbiAgICBzdXBlcihwb3MsIHJhZGl1cywgd29ybGQsIHNwcml0ZSwgc2l6ZSwgdmVsLCBjb2xvcilcbiAgICB0aGlzLmluZGVwZW5kZW5jZSA9IHRydWVcbiAgICB0aGlzLmNoYWluUG9zID0gbnVsbFxuICAgIHRoaXMucGFyZW50ID0gbnVsbFxuICAgIHRoaXMubmV4dENoaWxkID0gbnVsbFxuICAgIHRoaXMucG9zQ2FjaGUgPSBbXVxuICAgIHRoaXMubW92ZXMgPSB0aGlzLm1vdmVzLmJpbmQodGhpcylcbiAgICB0aGlzLmhpdHNQcmVkYXRvciA9IHRoaXMuaGl0c1ByZWRhdG9yLmJpbmQodGhpcylcbiAgICB0aGlzLnNwcml0ZSA9IHNwcml0ZVxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICB0aGlzLmNsaWNraW5nID0gZmFsc2VcbiAgfVxuXG4gIHNldENsaWNraW5nID0gKGNsaWNraW5nKSA9PiB7XG4gICAgdGhpcy5jbGlja2luZyA9IGNsaWNraW5nXG4gIH1cblxuICBzZXRQYXJlbnQgPSAocGFyZW50KSA9PiB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgfVxuXG4gIHNldENoYWluUG9zID0gKGNoYWluUG9zKSA9PiB7XG4gICAgdGhpcy5jaGFpblBvcyA9IGNoYWluUG9zXG4gIH1cblxuICBzZXROZXh0Q2hpbGQgPSAoY2hpbGQpID0+IHtcbiAgICB0aGlzLm5leHRDaGlsZCA9IGNoaWxkXG4gIH1cblxuICBzZXRJbmRlcGVuZGVuY2UgPSAoaW5kZXBlbmRlbmNlKSA9PiB7XG4gICAgdGhpcy5pbmRlcGVuZGVuY2UgPSBpbmRlcGVuZGVuY2VcbiAgfVxuXG4gIGlzSW5kZXBlbmRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXBlbmRlbmNlXG4gIH1cblxuICBhdm9pZFByZWRhdG9yID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmluZGVwZW5kZW5jZSkge1xuICAgICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MsXG4gICAgICAgIHBvcyA9IHsgeDogeCArIHRoaXMuY3VyckRpclswXSwgeTogeSArIHRoaXMuY3VyckRpclsxXSB9XG5cbiAgICAgIHRoaXMuc2V0UmFuZG9tRGlyKClcbiAgICAgIHBvcyA9IHsgeDogeCArIHRoaXMuY3VyckRpclswXSwgeTogeSArIHRoaXMuY3VyckRpclsxXSB9XG5cbiAgICAgIHRoaXMuYm91bmNlQmFjayhwb3MpXG4gICAgfVxuICB9XG5cbiAgaGl0c1ByZWRhdG9yKGdhbWUpIHtcbiAgICBpZiAodGhpcy5pc0luZGVwZW5kZW50KCkpIGdhbWUuZGVzdHJveUNoaWxkKHRoaXMpXG4gICAgZWxzZSB7XG4gICAgICBsZXQgY3VyciA9IHRoaXMucGFyZW50LmRlbGV0ZUxhc3RDaGlsZCgpXG4gICAgICB3aGlsZSAoY3VyciAmJiBjdXJyICE9PSB0aGlzKSB7XG4gICAgICAgIGN1cnIgPSB0aGlzLnBhcmVudC5kZWxldGVMYXN0Q2hpbGQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdmVzKHBvcykge1xuICAgIGlmICh0aGlzLmlzSW5kZXBlbmRlbnQoKSkgc3VwZXIubW92ZXMoKVxuICAgIGVsc2Uge1xuICAgICAgLy8gUmVtb3ZlZCBlYXNpbmcgZm9yIG5vdy4gTWF5YmUgYWRkIGZvciBoaWdoZXIgbGV2ZWxzLiBDaGlsZHJlbiB0YWtlIHRvbyBsb25nIGxvbmcgdG8gbW92ZS5cbiAgICAgIC8vIGNvbnN0IGVhc2luZyA9IE1hdGgubWF4KDEgLSB0aGlzLmNoYWluUG9zICogMC4xMywgMC4xKSxcbiAgICAgIGNvbnN0IGVhc2luZyA9IDEsXG4gICAgICAgIHIgPSB0aGlzLnJhZGl1cyxcbiAgICAgICAgbmV4dENoaWxkID0gdGhpcy5uZXh0Q2hpbGRcblxuICAgICAgbGV0IG9mZnNldFxuICAgICAgaWYgKHRoaXMuY2xpY2tpbmcpIG9mZnNldCA9IDBcbiAgICAgIGVsc2Ugb2Zmc2V0ID0gMiAqIChyICsgMSkgKiB0aGlzLmNoYWluUG9zICsgKHRoaXMucGFyZW50LnJhZGl1cyAtIHIpXG5cbiAgICAgIHN1cGVyLm1vdmVzV2l0aEN1cnNvcihwb3MsIGVhc2luZywgb2Zmc2V0KVxuXG4gICAgICBpZiAobmV4dENoaWxkKVxuICAgICAgICBuZXh0Q2hpbGQubW92ZXModGhpcy5wb3NDYWNoZS5sZW5ndGggPyB0aGlzLnBvc0NhY2hlWzBdIDogcG9zKVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBSZWxhdGVkIHRvIHRoZSBET00gYW5kIGRpc3BsYXkgKGNyZWF0aW5nIGVsZW1lbnRzLCB1cGRhdGluZyBlbGVtZW50cyBldGMuKVxuICovXG5cbmltcG9ydCBjaGlsZENvdW50SW1nIGZyb20gJy4uL2ltZ3MvY291bnQucG5nJ1xuaW1wb3J0IHdvcm1MZWZ0IGZyb20gJy4uL2ltZ3Mvd29ybS1sZWZ0LnBuZydcbmltcG9ydCB3b3JtUmlnaHQgZnJvbSAnLi4vaW1ncy93b3JtLXJpZ2h0LnBuZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NRGlzcGxheSB7XG4gIGNvbnN0cnVjdG9yKHsgd2lkdGggPSA0MDAsIGhlaWdodCA9IDcwMCB9KSB7XG4gICAgdGhpcy5nYW1lID0gbnVsbFxuICAgIHRoaXMud29ybGRTaXplID0geyB3aWR0aCwgaGVpZ2h0IH1cbiAgICB0aGlzLndvcmxkV3JhcHBlciA9IG51bGxcbiAgICB0aGlzLmdhbWVFbmQgPSBudWxsXG4gICAgdGhpcy5sZWdlbmQgPSBudWxsXG4gIH1cblxuICBjcmVhdGVJbWFnZSA9IChzcmMsIGNsYXNzTmFtZSwgaWQpID0+IHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgIGltZy5zcmMgPSBzcmNcbiAgICBpZiAoY2xhc3NOYW1lKSBpbWcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgaWYgKGlkKSBpbWcuaWQgPSBpZFxuICAgIHJldHVybiBpbWdcbiAgfVxuXG4gIHJlbW92ZUhlYWx0aEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB3b3JtTCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dvcm0tbGVmdCcpWzBdXG4gICAgaWYgKHdvcm1MKSB3b3JtTC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJylcbiAgfVxuXG4gIGFuaW1hdGVIZWFsdGggPSAoKSA9PiB7XG4gICAgY29uc3Qgd29ybUwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3b3JtLWxlZnQnKVswXVxuICAgIGlmICh3b3JtTCkgd29ybUwuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXG4gIH1cblxuICBjcmVhdGVFbGVtZW50ID0gKHRhZywgY2xhc3NOYW1lLCBpZCwgY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcbiAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NOYW1lKSkge1xuICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGNsYXNzTmFtZSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWRcbiAgICBpZiAoY29udGVudCkgZWxlbWVudC5pbm5lclRleHQgPSBjb250ZW50XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIGdldEVsZW1lbnQgPSAoc2VsZWN0b3IpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgfVxuXG4gIHVwZGF0ZUVsZW1lbnQgPSAoc2VsZWN0b3IsIHZhbCkgPT4ge1xuICAgIHRoaXMuZ2V0RWxlbWVudChzZWxlY3RvcikuaW5uZXJUZXh0ID0gdmFsXG4gIH1cblxuICByZW5kZXJHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbWUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdnYW1lJywgJ2dhbWUnKVxuICAgIHRoaXMuZ2FtZSA9IGdhbWVcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2FtZSlcbiAgfVxuXG4gIHJlbmRlclRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAndGl0bGUnLCBudWxsKVxuICAgIGNvbnN0IGhlYWRpbmcgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2gxJywgbnVsbCwgbnVsbCwgJ0NISUNLRU4gTUVFVFMgV09STScpXG4gICAgdGhpcy5nYW1lLmFwcGVuZCh0aXRsZSlcbiAgICB0aXRsZS5hcHBlbmQoaGVhZGluZylcbiAgfVxuXG4gIHJlbmRlcldvcmxkID0gKCkgPT4ge1xuICAgIGNvbnN0IHdvcmxkV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3dvcmxkLXdyYXBwZXInKSxcbiAgICAgIHdvcmxkID0gdGhpcy5jcmVhdGVFbGVtZW50KCdjYW52YXMnLCBudWxsLCAnd29ybGQnKSxcbiAgICAgIGxlZ2VuZCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2xlZ2VuZCcpLFxuICAgICAgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLndvcmxkU2l6ZVxuICAgIHdvcmxkLndpZHRoID0gdGhpcy53b3JsZFNpemUud2lkdGhcbiAgICB3b3JsZC5oZWlnaHQgPSB0aGlzLndvcmxkU2l6ZS5oZWlnaHRcbiAgICB0aGlzLmdhbWUuYXBwZW5kKHdvcmxkV3JhcHBlcilcbiAgICB3b3JsZFdyYXBwZXIuYXBwZW5kKGxlZ2VuZClcbiAgICB3b3JsZFdyYXBwZXIuYXBwZW5kKHdvcmxkKVxuICAgIHdvcmxkV3JhcHBlci5zdHlsZS53aWR0aCA9IHdpZHRoICsgMiArICdweCdcbiAgICB3b3JsZFdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgMiArICdweCdcbiAgICB0aGlzLndvcmxkV3JhcHBlciA9IHdvcmxkV3JhcHBlclxuICAgIHRoaXMubGVnZW5kID0gbGVnZW5kXG4gICAgdGhpcy53b3JsZCA9IHdvcmxkXG4gIH1cblxuICByZW5kZXJFbmVyZ3kgPSAoKSA9PiB7XG4gICAgY29uc3QgZW5lcmd5V3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgJ2VuZXJneS13cmFwcGVyJyxcbiAgICAgICdlbmVyZ3ktd3JhcHBlcidcbiAgICApXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kQ2hpbGQoZW5lcmd5V3JhcHBlcilcbiAgICB0aGlzLnVwZGF0ZUVuZXJneUJhcig1KVxuICB9XG5cbiAgcmVuZGVyQ2hhaW4gPSAoKSA9PiB7XG4gICAgY29uc3QgY2hhaW5XcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY2hhaW4td3JhcHBlcicpXG4gICAgY29uc3QgY291bnRJbWcgPSB0aGlzLmNyZWF0ZUltYWdlKGNoaWxkQ291bnRJbWcsICdpbWFnZScsICdjaGFpbi1jb3VudCcpXG4gICAgY29uc3QgY2hhaW4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnbGVnZW5kLXRleHQnLCAnY2hhaW4nKVxuXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kKGNoYWluV3JhcHBlcilcbiAgICBjaGFpbldyYXBwZXIuYXBwZW5kKGNvdW50SW1nKVxuICAgIGNoYWluV3JhcHBlci5hcHBlbmQoY2hhaW4pXG4gIH1cblxuICB1cGRhdGVFbmVyZ3lCYXIoY291bnQpIHtcbiAgICBjb25zdCBlVyA9IHRoaXMuZ2V0RWxlbWVudCgnI2VuZXJneS13cmFwcGVyJyksXG4gICAgICBpID0gTWF0aC5taW4oY291bnQsIDUpICogMlxuXG4gICAgaWYgKGVXLmNoaWxkRWxlbWVudENvdW50ID4gaSkge1xuICAgICAgd2hpbGUgKGVXLmNoaWxkRWxlbWVudENvdW50ID4gaSkge1xuICAgICAgICBpZiAoZVcuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHJldHVyblxuICAgICAgICBlVy5yZW1vdmVDaGlsZChlVy5sYXN0Q2hpbGQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlVy5jaGlsZEVsZW1lbnRDb3VudCA8IGkpIHtcbiAgICAgIGxldCBsZWZ0ID0gdHJ1ZVxuICAgICAgbGV0IHdvcm1Db3VudCA9IGVXLmNoaWxkRWxlbWVudENvdW50XG4gICAgICBpZiAod29ybUNvdW50ICUgMiAhPT0gMCkge1xuICAgICAgICBlVy5hcHBlbmQodGhpcy5jcmVhdGVJbWFnZSh3b3JtUmlnaHQsICd3b3JtLXJpZ2h0JykpXG4gICAgICAgIHdvcm1Db3VudCsrXG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh3b3JtQ291bnQgPCBpKSB7XG4gICAgICAgIGNvbnN0IHdvcm1MID0gdGhpcy5jcmVhdGVJbWFnZSh3b3JtTGVmdCwgJ3dvcm0tbGVmdCcpXG4gICAgICAgIGNvbnN0IHdvcm1SID0gdGhpcy5jcmVhdGVJbWFnZSh3b3JtUmlnaHQsICd3b3JtLXJpZ2h0JylcbiAgICAgICAgaWYgKGxlZnQpIHtcbiAgICAgICAgICBlVy5hcHBlbmQod29ybUwpXG4gICAgICAgICAgbGVmdCA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSBpZiAoIWxlZnQpIHtcbiAgICAgICAgICBlVy5hcHBlbmQod29ybVIpXG4gICAgICAgICAgbGVmdCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICB3b3JtQ291bnQrK1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclNjb3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjb3JlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2xlZ2VuZC10ZXh0JywgJ3Njb3JlJ10sICdzY29yZScpXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kKHNjb3JlKVxuICB9XG5cbiAgcmVuZGVyR2FtZUVuZCA9IChoYW5kbGVDbGlja1JlcGxheSwgc2NvcmUsIGhpZ2hTY29yZSkgPT4ge1xuICAgIGNvbnN0IGdhbWVFbmRXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZW5kLXdyYXBwZXInKVxuICAgIGNvbnN0IGdhbWVFbmQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdnYW1lLWVuZCcpXG4gICAgZ2FtZUVuZFdyYXBwZXIuc3R5bGUud2lkdGggPSB0aGlzLndvcmxkU2l6ZS53aWR0aCArIDQgKyAncHgnXG4gICAgdGhpcy5nYW1lRW5kID0gZ2FtZUVuZFxuICAgIHRoaXMuZ2FtZUVuZFdyYXBwZXIgPSBnYW1lRW5kV3JhcHBlclxuICAgIHRoaXMud29ybGRXcmFwcGVyLmFwcGVuZChnYW1lRW5kV3JhcHBlcilcbiAgICBnYW1lRW5kV3JhcHBlci5hcHBlbmQoZ2FtZUVuZClcblxuICAgIGdhbWVFbmRXcmFwcGVyLnN0eWxlLnRvcCA9IDk4ICsgdGhpcy53b3JsZFNpemUuaGVpZ2h0IC8gNCArICdweCdcbiAgICB0aGlzLnJlbmRlckdhbWVPdmVyTWVzc2FnZSgpXG4gICAgdGhpcy5yZW5kZXJFbmRTY29yZShzY29yZSwgaGlnaFNjb3JlKVxuICAgIHRoaXMucmVuZGVyUmVwbGF5QnV0dG9uKGhhbmRsZUNsaWNrUmVwbGF5KVxuICB9XG5cbiAgY2xlYXJHYW1lRW5kID0gKCkgPT4ge1xuICAgIHRoaXMud29ybGRXcmFwcGVyLnJlbW92ZUNoaWxkKHRoaXMuZ2FtZUVuZFdyYXBwZXIpXG4gIH1cblxuICByZW5kZXJHYW1lT3Zlck1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2dhbWUtb3ZlcicsIG51bGwsICdHYW1lIE92ZXIhJylcbiAgICB0aGlzLmdhbWVFbmQuYXBwZW5kKG1lc3NhZ2UpXG4gIH1cblxuICByZW5kZXJSZXBsYXlCdXR0b24gPSAoaGFuZGxlQ2xpY2tSZXBsYXkpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdidG4nLCAncmVwbGF5JylcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gJ1JlcGxheSdcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrUmVwbGF5KVxuICAgIHRoaXMuZ2FtZUVuZC5hcHBlbmQoYnV0dG9uKVxuICB9XG5cbiAgcmVuZGVyRW5kU2NvcmUgPSAoc2NvcmUsIGhpZ2hTY29yZSkgPT4ge1xuICAgIGNvbnN0IGVuZFNjb3JlV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3dyYXBwZXInKVxuICAgIGNvbnN0IGVuZFNjb3JlTGFiZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICAnc2NvcmUtbGFiZWwnLFxuICAgICAgbnVsbCxcbiAgICAgICdZb3VyIHNjb3JlOiAnXG4gICAgKVxuICAgIGNvbnN0IGVuZFNjb3JlID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgJ3Njb3JlJyxcbiAgICAgICdlbmQtc2NvcmUnLFxuICAgICAgc2NvcmUudG9TdHJpbmcoKVxuICAgIClcbiAgICBjb25zdCBiZXN0U2NvcmVXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnd3JhcHBlcicpXG4gICAgY29uc3QgYmVzdFNjb3JlTGFiZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICAnc2NvcmUtbGFiZWwnLFxuICAgICAgbnVsbCxcbiAgICAgICdCZXN0IHNjb3JlOiAnXG4gICAgKVxuICAgIGNvbnN0IGJlc3RTY29yZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgICdzY29yZScsXG4gICAgICAnYmVzdC1zY29yZScsXG4gICAgICBoaWdoU2NvcmUudG9TdHJpbmcoKVxuICAgIClcblxuICAgIGVuZFNjb3JlV3JhcHBlci5hcHBlbmQoZW5kU2NvcmVMYWJlbClcbiAgICBlbmRTY29yZVdyYXBwZXIuYXBwZW5kKGVuZFNjb3JlKVxuICAgIGJlc3RTY29yZVdyYXBwZXIuYXBwZW5kKGJlc3RTY29yZUxhYmVsKVxuICAgIGJlc3RTY29yZVdyYXBwZXIuYXBwZW5kKGJlc3RTY29yZSlcbiAgICB0aGlzLmdhbWVFbmQuYXBwZW5kKGVuZFNjb3JlV3JhcHBlcilcbiAgICB0aGlzLmdhbWVFbmQuYXBwZW5kKGJlc3RTY29yZVdyYXBwZXIpXG4gIH1cbn1cbiIsImltcG9ydCBsb2dvIGZyb20gJy4uL2ltZ3MvbG9nby5wbmcnXG5pbXBvcnQgRE9NRGlzcGxheSBmcm9tICcuL0RPTURpc3BsYXknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludHJvIGV4dGVuZHMgRE9NRGlzcGxheSB7XG4gIGNvbnN0cnVjdG9yKGdhbWUsIHdvcmxkV3JhcHBlciwgd29ybGRTaXplKSB7XG4gICAgc3VwZXIod29ybGRTaXplKVxuICAgIHRoaXMuZ2FtZSA9IGdhbWVcbiAgICB0aGlzLndvcmxkV3JhcHBlciA9IHdvcmxkV3JhcHBlclxuXG4gICAgdGhpcy5pbnRyb1dyYXBwZXIgPSBudWxsXG4gIH1cblxuICByZW5kZXJUdXRvcmlhbEJ1dHRvbiA9IChoYW5kbGVDbGlja1R1dG9yaWFsKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnYnRuJywgJ3R1dG9yaWFsJylcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gJ1R1dG9yaWFsJ1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrVHV0b3JpYWwpXG4gICAgdGhpcy5pbnRyb1dyYXBwZXIuYXBwZW5kKGJ1dHRvbilcbiAgfVxuXG4gIHJlbmRlclN0YXJ0TGluayA9IChoYW5kbGVDbGlja1N0YXJ0KSA9PiB7XG4gICAgY29uc3QgbGluayA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYScsICdzdGFydCcsICdzdGFydCcpXG4gICAgbGluay5pbm5lclRleHQgPSAnVHV0b3JpYWxzIHIgZm9yIG5vb2JzLidcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tTdGFydClcbiAgICB0aGlzLmludHJvV3JhcHBlci5hcHBlbmQobGluaylcbiAgfVxuXG4gIHJlbmRlckludHJvID0gKCkgPT4ge1xuICAgIGNvbnN0IGludHJvV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ludHJvLXdyYXBwZXInKVxuICAgIGNvbnN0IGludHJvUGljID0gdGhpcy5jcmVhdGVJbWFnZShsb2dvLCAnbG9nbycpXG4gICAgY29uc3QgaW50cm8gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdpbnRybycpXG4gICAgY29uc3QgaW50cm9NZXNzYWdlID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgJ2ludHJvLW1lc3NhZ2UnLFxuICAgICAgbnVsbCxcbiAgICAgICdGZWFzdCBvbiB3b3JtcywgcHJvdGVjdCB5b3VyIGNoaWxkcmVuISdcbiAgICApXG4gICAgdGhpcy53b3JsZFdyYXBwZXIuYXBwZW5kKGludHJvV3JhcHBlcilcblxuICAgIGludHJvLmFwcGVuZChpbnRyb1BpYylcbiAgICBpbnRyby5hcHBlbmQoaW50cm9NZXNzYWdlKVxuICAgIGludHJvV3JhcHBlci5hcHBlbmQoaW50cm8pXG4gICAgaW50cm9XcmFwcGVyLnN0eWxlLndpZHRoID0gdGhpcy53b3JsZFNpemUud2lkdGggKyA0ICsgJ3B4J1xuICAgIGludHJvV3JhcHBlci5zdHlsZS50b3AgPSA5OCArIHRoaXMud29ybGRTaXplLmhlaWdodCAvIDYgKyAncHgnXG4gICAgdGhpcy5pbnRyb1dyYXBwZXIgPSBpbnRyb1dyYXBwZXJcbiAgfVxuXG4gIGNsZWFyVHV0b3JpYWwgPSAoKSA9PiB7XG4gICAgdGhpcy53b3JsZFdyYXBwZXIucmVtb3ZlQ2hpbGQodGhpcy5pbnRyb1dyYXBwZXIpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZXJneSB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXksIGVuZXJneSA9IDUsIG1heCA9IDUpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5jb3VudCA9IGVuZXJneVxuICAgIHRoaXMubWluID0gMFxuICAgIHRoaXMubWF4ID0gbWF4XG4gIH1cblxuICBzZXRDb3VudCA9IChjb3VudCkgPT4ge1xuICAgIHRoaXMuY291bnQgPSBjb3VudFxuICB9XG5cbiAgcmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRDb3VudCh0aGlzLm1heClcbiAgICB0aGlzLnVwZGF0ZUVuZXJneSgpXG4gIH1cblxuICBpbmNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IE1hdGgubWluKHRoaXMuY291bnQgKyAxLCB0aGlzLm1heClcbiAgICB0aGlzLnNldENvdW50KGNvdW50KVxuICAgIHRoaXMudXBkYXRlRW5lcmd5KClcbiAgfVxuXG4gIGRlY3JlbWVudENvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5jb3VudFxuICAgIHRoaXMuY291bnQgPSBNYXRoLm1heChjb3VudCAtIDEsIHRoaXMubWluKVxuICAgIHRoaXMudXBkYXRlRW5lcmd5KClcbiAgfVxuXG4gIGRlY3JlbWVudENvdW50QnlIYWxmID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5jb3VudFxuICAgIHRoaXMuY291bnQgPSBNYXRoLm1heChjb3VudCAtIDAuNSwgdGhpcy5taW4pXG4gICAgdGhpcy51cGRhdGVFbmVyZ3koKVxuICB9XG5cbiAgdXBkYXRlRW5lcmd5ID0gKCkgPT4ge1xuICAgIHRoaXMuZGlzcGxheS51cGRhdGVFbmVyZ3lCYXIodGhpcy5jb3VudClcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgdGhpcy51cGRhdGVFbmVyZ3koKVxuICB9XG59XG4iLCJpbXBvcnQgeyBMaW5rZWRMaXN0IH0gZnJvbSAnZGF0YV9zdHJ1Y3R1cmVzJ1xuaW1wb3J0IENoYWluIGZyb20gJy4vQ2hhaW4uanMnXG5pbXBvcnQgQ2hpbGQgZnJvbSAnLi9DaGlsZC5qcydcbmltcG9ydCBFbmVyZ3kgZnJvbSAnLi9FbmVyZ3kuanMnXG5pbXBvcnQgY2hpbGRJbWcgZnJvbSAnLi9pbWdzL2NoaWxkLnBuZydcbmltcG9ydCBwYXJlbnRJbWFnZSBmcm9tICcuL2ltZ3MvcGFyZW50LnBuZydcbmltcG9ydCBwcmVkYXRvckltYWdlIGZyb20gJy4vaW1ncy9wcmVkYXRvci5wbmcnXG5pbXBvcnQgd29ybUltYWdlIGZyb20gJy4vaW1ncy93b3JtLnBuZydcbmltcG9ydCBQYXJlbnQgZnJvbSAnLi9QYXJlbnQuanMnXG5pbXBvcnQgUHJlZGF0b3IgZnJvbSAnLi9QcmVkYXRvci5qcydcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJ1xuaW1wb3J0IFdvcmxkIGZyb20gJy4vV29ybGQuanMnXG5pbXBvcnQgV29ybSBmcm9tICcuL1dvcm0uanMnXG5cbmNvbnN0IENoaWxkU3ByaXRlID0gbmV3IEltYWdlKClcbkNoaWxkU3ByaXRlLnNyYyA9IGNoaWxkSW1nXG5jb25zdCBQYXJlbnRTcHJpdGUgPSBuZXcgSW1hZ2UoKVxuUGFyZW50U3ByaXRlLnNyYyA9IHBhcmVudEltYWdlXG5jb25zdCBQcmVkYXRvclNwcml0ZSA9IG5ldyBJbWFnZSgpXG5QcmVkYXRvclNwcml0ZS5zcmMgPSBwcmVkYXRvckltYWdlXG5jb25zdCBXb3JtU3ByaXRlID0gbmV3IEltYWdlKClcbldvcm1TcHJpdGUuc3JjID0gd29ybUltYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5LCBjaGlsZENvdW50ID0gNSwgcHJlZGF0b3JDb3VudCA9IDQsIHdvcm1Db3VudCA9IDEpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5tb3VzZSA9IHsgeDogbnVsbCwgeTogbnVsbCB9XG4gICAgdGhpcy53b3JsZCA9IG51bGxcbiAgICB0aGlzLnBhcmVudCA9IG51bGxcbiAgICB0aGlzLnByZWRhdG9ycyA9IG5ldyBMaW5rZWRMaXN0KClcbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMud29ybXMgPSBuZXcgTGlua2VkTGlzdCgpXG4gICAgdGhpcy5jaGlsZENvdW50ID0gY2hpbGRDb3VudFxuICAgIHRoaXMucHJlZGF0b3JDb3VudCA9IHByZWRhdG9yQ291bnRcbiAgICB0aGlzLndvcm1Db3VudCA9IHdvcm1Db3VudFxuICAgIHRoaXMuY2hhaW4gPSBudWxsXG4gICAgdGhpcy5lbmVyZ3kgPSBudWxsXG4gICAgdGhpcy5zY29yZSA9IG51bGxcbiAgICB0aGlzLnRpbWVTaW5jZVdvcm0gPSAwXG4gICAgdGhpcy5hbmltYXRpb25SZXEgPSBudWxsXG4gICAgdGhpcy5jbGlja2luZyA9IGZhbHNlXG4gICAgdGhpcy5pbml0ID0gdGhpcy5pbml0LmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZU1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgaWYgKHRoaXMuY2xpY2tpbmcpIHJldHVyblxuICAgIHRoaXMubW91c2UgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH1cbiAgICB0aGlzLmRpc3BsYXkucmVtb3ZlSGVhbHRoQW5pbWF0aW9uKClcbiAgfVxuXG4gIGhhbmRsZU1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgaWYgKHRoaXMuZW5lcmd5LmNvdW50IDw9IDAuNSkge1xuICAgICAgdGhpcy5kaXNwbGF5LmFuaW1hdGVIZWFsdGgoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IG1vdXNlID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9XG4gICAgdGhpcy5tb3VzZSA9IG1vdXNlXG4gICAgdGhpcy5jbGlja2luZyA9IHRydWVcbiAgICBpZiAodGhpcy5wYXJlbnQuZ2V0Q2hpbGRDb3VudCgpID4gMCkgdGhpcy5lbmVyZ3kuZGVjcmVtZW50Q291bnRCeUhhbGYoKVxuICB9XG5cbiAgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICB0aGlzLmNsaWNraW5nID0gZmFsc2VcbiAgfVxuXG4gIGRlc3Ryb3lXb3JtID0gKHdvcm0pID0+IHtcbiAgICB0aGlzLndvcm1zLmRlbGV0ZU5vZGUod29ybSlcbiAgfVxuXG4gIGRlc3Ryb3lDaGlsZCA9IChjaGlsZCkgPT4ge1xuICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlTm9kZShjaGlsZClcbiAgICB0aGlzLnNwYXduQ2hpbGRyZW4oMTcuNSlcbiAgfVxuXG4gIGNoZWNrSW5SYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCxcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KCksXG4gICAgICBwcmVkYXRvcnMgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KCksXG4gICAgICB3b3JtcyA9IHRoaXMud29ybXMudG9BcnJheSgpXG5cbiAgICAvLyBDaGlsZCBwcmVkYXRvciBjb2xsaXNpb25zXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKHBhcmVudC5jaGVja0luUmFuZ2UoY2hpbGQpKSB7XG4gICAgICAgIHBhcmVudC5oaXRzQ2hpbGQoY2hpbGQpXG4gICAgICAgIHRoaXMuc3Bhd25DaGlsZHJlbigxNy41KVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBwcmVkYXRvciBvZiBwcmVkYXRvcnMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMTApKSBjaGlsZC5hdm9pZFByZWRhdG9yKClcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMCkpIGNoaWxkLmhpdHNQcmVkYXRvcih0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBQYXJlbnQgcHJlZGF0b3IgY29sbGlzaW9uc1xuICAgIGZvciAoY29uc3QgcHJlZGF0b3Igb2YgcHJlZGF0b3JzKSB7XG4gICAgICBpZiAocGFyZW50LmNoZWNrSW5SYW5nZShwcmVkYXRvciwgNSkpXG4gICAgICAgIHBhcmVudC5jaGVja0NvbGxpc2lvbldpdGhQcmVkYXRvcihwcmVkYXRvcilcbiAgICB9XG5cbiAgICAvL1BhcmVudCB3b3JtIGNvbGxpc2lvbnNcbiAgICBmb3IgKGNvbnN0IHdvcm0gb2Ygd29ybXMpIHtcbiAgICAgIGlmIChwYXJlbnQuY2hlY2tJblJhbmdlKHdvcm0sIDIpKSBwYXJlbnQuaGl0c1dvcm0odGhpcywgd29ybSlcbiAgICB9XG4gIH1cblxuICBzcGF3bkNoaWxkcmVuID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuICAgIGxldCBpbmRlcGVuZGVudEMgPSB0aGlzLmNoaWxkcmVuLnNpemUgLSB0aGlzLnBhcmVudC5nZXRDaGlsZENvdW50KClcblxuICAgIHdoaWxlIChpbmRlcGVuZGVudEMgPCB0aGlzLmNoaWxkQ291bnQgJiYgdGhpcy5jaGlsZENvdW50ID4gMCkge1xuICAgICAgY29uc3QgcmFuZG9tUG9zID0gdGhpcy53b3JsZC5nZXRSYW5kb21Qb3MociksXG4gICAgICAgIGNoaWxkID0gbmV3IENoaWxkKHJhbmRvbVBvcywgciwgdGhpcy53b3JsZCwgQ2hpbGRTcHJpdGUsIHNpemUpXG5cbiAgICAgIGNoaWxkLnNldFJhbmRvbURpcigpXG4gICAgICB0aGlzLmNoaWxkcmVuLmFwcGVuZFRvVGFpbChjaGlsZClcbiAgICAgIGluZGVwZW5kZW50QyA9IHRoaXMuY2hpbGRyZW4uc2l6ZSAtIHRoaXMucGFyZW50LmdldENoaWxkQ291bnQoKVxuICAgIH1cbiAgfVxuXG4gIHNwYXduUHJlZGF0b3JzID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuXG4gICAgd2hpbGUgKHRoaXMucHJlZGF0b3JzLnNpemUgPCB0aGlzLnByZWRhdG9yQ291bnQpIHtcbiAgICAgIGNvbnN0IHJhbmRvbVBvcyA9IHRoaXMud29ybGQuZ2V0UmFuZG9tUG9zKHIpLFxuICAgICAgICBwcmVkYXRvciA9IG5ldyBQcmVkYXRvcihyYW5kb21Qb3MsIHIsIHRoaXMud29ybGQsIFByZWRhdG9yU3ByaXRlLCBzaXplKVxuICAgICAgcHJlZGF0b3Iuc2V0UmFuZG9tRGlyKClcbiAgICAgIHRoaXMucHJlZGF0b3JzLmFwcGVuZFRvVGFpbChwcmVkYXRvcilcbiAgICB9XG4gIH1cblxuICBzcGF3bldvcm1zID0gKHIpID0+IHtcbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuXG4gICAgd2hpbGUgKHRoaXMud29ybXMuc2l6ZSA8IHRoaXMud29ybUNvdW50KSB7XG4gICAgICBjb25zdCByYW5kb21Qb3MgPSB0aGlzLndvcmxkLmdldFJhbmRvbVBvcyhyKSxcbiAgICAgICAgd29ybSA9IG5ldyBXb3JtKHJhbmRvbVBvcywgciwgdGhpcy53b3JsZCwgV29ybVNwcml0ZSwgc2l6ZSlcbiAgICAgIHdvcm0uc2V0UmFuZG9tRGlyKClcbiAgICAgIHRoaXMud29ybXMuYXBwZW5kVG9UYWlsKHdvcm0pXG4gICAgfVxuICB9XG5cbiAgaW5pdENoaWxkcmVuID0gKHIpID0+IHtcbiAgICB0aGlzLnNwYXduQ2hpbGRyZW4ocilcbiAgfVxuXG4gIGluaXRQcmVkYXRvcnMgPSAocikgPT4ge1xuICAgIHRoaXMuc3Bhd25QcmVkYXRvcnMocilcbiAgfVxuXG4gIGluaXRQYXJlbnQgPSAocikgPT4ge1xuICAgIGNvbnN0IHNpemUgPSB7IHdpZHRoOiByICogMiwgaGVpZ2h0OiByICogMiB9XG4gICAgY29uc3QgaW5pdGlhbFBvcyA9IHtcbiAgICAgIHg6IHRoaXMud29ybGQuc2l6ZS53aWR0aCAvIDIgKyByLFxuICAgICAgeTogdGhpcy53b3JsZC5zaXplLmhlaWdodCAvIDIgKyByLFxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCA9IG5ldyBQYXJlbnQoXG4gICAgICBpbml0aWFsUG9zLFxuICAgICAgcixcbiAgICAgIHRoaXMud29ybGQsXG4gICAgICB0aGlzLmNoYWluLFxuICAgICAgdGhpcy5zY29yZSxcbiAgICAgIHRoaXMuZW5lcmd5LFxuICAgICAgUGFyZW50U3ByaXRlLFxuICAgICAgc2l6ZVxuICAgIClcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICB9XG5cbiAgaW5pdFdvcm1zID0gKHIpID0+IHtcbiAgICB0aGlzLnNwYXduV29ybXMocilcbiAgfVxuXG4gIGluaXRDaGFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFpbiA9IG5ldyBDaGFpbih0aGlzLmRpc3BsYXkpXG4gICAgY2hhaW4uaW5pdCgpXG4gICAgdGhpcy5jaGFpbiA9IGNoYWluXG4gIH1cblxuICBpbml0V29ybGQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd29ybGQgPSBuZXcgV29ybGQodGhpcy5kaXNwbGF5KVxuICAgIHdvcmxkLmluaXQoKVxuICAgIHRoaXMud29ybGQgPSB3b3JsZFxuICB9XG5cbiAgaW5pdFNjb3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjb3JlID0gbmV3IFNjb3JlKHRoaXMuZGlzcGxheSlcbiAgICBzY29yZS5pbml0KClcbiAgICB0aGlzLnNjb3JlID0gc2NvcmVcbiAgfVxuXG4gIGluaXRFbmVyZ3kgPSAoKSA9PiB7XG4gICAgY29uc3QgZW5lcmd5ID0gbmV3IEVuZXJneSh0aGlzLmRpc3BsYXkpXG4gICAgZW5lcmd5LmluaXQoKVxuICAgIHRoaXMuZW5lcmd5ID0gZW5lcmd5XG4gIH1cblxuICByZXBsYXlHYW1lID0gKCkgPT4ge1xuICAgIHRoaXMucmVzZXRHYW1lKClcbiAgICB0aGlzLmRpc3BsYXkuY2xlYXJHYW1lRW5kKClcbiAgfVxuXG4gIHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLmVuZXJneS5yZXNldCgpXG4gICAgdGhpcy5zY29yZS5yZXNldCgpXG4gICAgdGhpcy5tb3VzZSA9IHsgeDogbnVsbCwgeTogbnVsbCB9XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsXG4gICAgdGhpcy5wcmVkYXRvcnMgPSBuZXcgTGlua2VkTGlzdCgpXG4gICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBMaW5rZWRMaXN0KClcbiAgICB0aGlzLndvcm1zID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMuY2hhaW4gPSBudWxsXG4gICAgdGhpcy50aW1lU2luY2VXb3JtID0gMFxuXG4gICAgdGhpcy5pbml0V29ybGQoKVxuICAgIHRoaXMuaW5pdENoYWluKDEpXG4gICAgdGhpcy5pbml0UGFyZW50KDMwKVxuICAgIHRoaXMuaW5pdENoaWxkcmVuKDE3LjUpXG4gICAgdGhpcy5pbml0UHJlZGF0b3JzKDM1KVxuICAgIHRoaXMuaW5pdFdvcm1zKDIwKVxuICAgIHRoaXMuYW5pbWF0aW9uUmVxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpXG4gIH1cblxuICBnYW1lT3ZlciA9ICgpID0+IHtcbiAgICB0aGlzLnNjb3JlLmNhbGN1bGF0ZUhpZ2hTY29yZSgpXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uUmVxKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJHYW1lRW5kKFxuICAgICAgdGhpcy5yZXBsYXlHYW1lLFxuICAgICAgdGhpcy5zY29yZS5zY29yZSxcbiAgICAgIHRoaXMuc2NvcmUuaGlnaFNjb3JlXG4gICAgKVxuICAgIHJldHVyblxuICB9XG5cbiAgZHJhdyA9ICh0aW1lc3RhbXApID0+IHtcbiAgICBpZiAodGhpcy5lbmVyZ3kuY291bnQgPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmdhbWVPdmVyKClcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lUGFzc2VkID0gdGltZXN0YW1wIC0gdGhpcy50aW1lU2luY2VXb3JtXG4gICAgaWYgKHRpbWVQYXNzZWQgPj0gMjUwMCAmJiB0aGlzLndvcm1zLnNpemUgPD0gMCkge1xuICAgICAgdGhpcy5zcGF3bldvcm1zKDIwKVxuICAgICAgdGhpcy50aW1lU2luY2VXb3JtID0gdGltZXN0YW1wXG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzID0gdGhpcy53b3JsZC5jYW52YXMsXG4gICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KCksXG4gICAgICBwcmVkYXRvcnMgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KCksXG4gICAgICB3b3JtcyA9IHRoaXMud29ybXMudG9BcnJheSgpXG5cbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgIHRoaXMucGFyZW50Lm1vdmVzKHRoaXMubW91c2UpXG4gICAgdGhpcy5wYXJlbnQuZHJhdyhjdHgsIHsgeDogMzAsIHk6IDI1IH0pXG5cbiAgICBmb3IgKGNvbnN0IHByZWRhdG9yIG9mIHByZWRhdG9ycykge1xuICAgICAgcHJlZGF0b3IubW92ZXMoKVxuICAgICAgcHJlZGF0b3IuZHJhdyhjdHgsIHsgeDogMzAsIHk6IDI1IH0pXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB3b3JtIG9mIHdvcm1zKSB7XG4gICAgICB3b3JtLm1vdmVzKHRoaXMpXG4gICAgICB3b3JtLmRyYXcoY3R4LCB7IHg6IDAsIHk6IDAgfSlcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBpZiAoY2hpbGQuaW5kZXBlbmRlbmNlKSBjaGlsZC5tb3ZlcygpXG4gICAgICBjaGlsZC5kcmF3KGN0eCwgeyB4OiAxNSwgeTogMTUgfSlcblxuICAgICAgdGhpcy5jbGlja2luZyA/IGNoaWxkLnNldENsaWNraW5nKHRydWUpIDogY2hpbGQuc2V0Q2xpY2tpbmcoZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5jaGVja0luUmFuZ2UoKVxuICAgIHRoaXMuYW5pbWF0aW9uUmVxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpXG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIHRoaXMuZGlzcGxheS5yZW5kZXJHYW1lKClcbiAgICAvLyB0aGlzLmRpc3BsYXkucmVuZGVyVGl0bGUoKVxuICAgIC8vIHRoaXMuZGlzcGxheS5yZW5kZXJXb3JsZCgpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlclNjb3JlKClcbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyQ2hhaW4oKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJFbmVyZ3koKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlLCBmYWxzZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24sIGZhbHNlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwLCBmYWxzZSlcbiAgICB0aGlzLmluaXRFbmVyZ3koKVxuICAgIHRoaXMuaW5pdFdvcmxkKClcbiAgICB0aGlzLmluaXRTY29yZSgpXG4gICAgdGhpcy5pbml0Q2hhaW4oKVxuICAgIHRoaXMuaW5pdFBhcmVudCgzMClcbiAgICB0aGlzLmluaXRDaGlsZHJlbigxNy41KVxuICAgIHRoaXMuaW5pdFByZWRhdG9ycygzNSlcbiAgICB0aGlzLmluaXRXb3JtcygyMClcbiAgICB0aGlzLmFuaW1hdGlvblJlcSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21JbnQsIGluUmFuZ2UgfSBmcm9tICcuL3V0aWxzJ1xuXG5jb25zdCByID0gMTAsXG4gIGMgPSAnIzcyODBmNicsXG4gIHYgPSB7IGR4OiAxLCBkeTogMSB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBvcywgcmFkaXVzID0gciwgd29ybGQsIHNwcml0ZSwgc2l6ZSwgdmVsID0gdiwgY29sb3IgPSBjKSB7XG4gICAgdGhpcy5wb3MgPSBwb3NcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICAgIHRoaXMud29ybGQgPSB3b3JsZFxuICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMudmVsID0gdmVsXG4gICAgdGhpcy5jdXJyRGlyID0gWzAsIDBdXG4gICAgdGhpcy5wb3NDYWNoZSA9IFtdXG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKVxuICAgIHRoaXMubW92ZXNXaXRoQ3Vyc29yID0gdGhpcy5tb3Zlc1dpdGhDdXJzb3IuYmluZCh0aGlzKVxuICAgIHRoaXMubW92ZXMgPSB0aGlzLm1vdmVzLmJpbmQodGhpcylcbiAgICB0aGlzLmNoZWNrSW5SYW5nZSA9IHRoaXMuY2hlY2tJblJhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhpdHNQYXJlbnQgPSB0aGlzLmhpdHNQYXJlbnQuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c1ByZWRhdG9yID0gdGhpcy5oaXRzUHJlZGF0b3IuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c0NoaWxkID0gdGhpcy5oaXRzQ2hpbGQuYmluZCh0aGlzKVxuICB9XG5cbiAgc2V0VmVsb2NpdHkgPSAodmVsb2NpdHkpID0+IHtcbiAgICB0aGlzLnZlbCA9IHZlbG9jaXR5XG4gIH1cblxuICBzZXRQb3MgPSAocG9zKSA9PiB7XG4gICAgdGhpcy5wb3MgPSBwb3NcbiAgfVxuXG4gIHNldFBvc0NhY2hlID0gKHBvc0NhY2hlKSA9PiB7XG4gICAgdGhpcy5wb3NDYWNoZSA9IHBvc0NhY2hlXG4gIH1cblxuICBzZXRDdXJyRGlyID0gKGRpcikgPT4ge1xuICAgIHRoaXMuY3VyckRpciA9IGRpclxuICB9XG5cbiAgc2V0UmFuZG9tRGlyID0gKCkgPT4ge1xuICAgIC8qIFxuICAgIDggcG9zc2libGUgZGlyZWN0aW9ucy5cbiAgICBWZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbDogXG4gICAgICAgIOKGkSAgICAgIFxuICAgICAgICDihpFcbiAgIOKGkCAg4oaQICAg4oaSICDihpIgIFxuICAgICAgICDihpNcbiAgICAgICAg4oaTIFxuICAgIERpYWdvbmFsczpcbiAgICDihpYgICAgICDihpdcbiAgICAgIOKGliAg4oaXXG4gICAgICDihpkgIOKGmCBcbiAgICDihpkgICAgICDihphcbiAgICAqL1xuXG4gICAgY29uc3QgeyBkeCwgZHkgfSA9IHRoaXMudmVsXG4gICAgY29uc3QgaW5kZXggPSBnZXRSYW5kb21JbnQoOClcbiAgICBjb25zdCBwb3NzaWJsZURpcmVjdGlvbnMgPSBbXG4gICAgICAvLyAwIHZhbHVlcyBvZmYgc2xpZ2h0bHkgc28gb2JqZWN0cyBkb2Vzbid0IHN0aWNrIHRvIGVkZ2VzLlxuICAgICAgW2R4LCAwLjJdLFxuICAgICAgWy1keCwgMC4zXSxcbiAgICAgIFswLjE1LCBkeV0sXG4gICAgICBbMC4yMywgLWR5XSxcbiAgICAgIFtkeCwgZHldLFxuICAgICAgWy1keCwgZHldLFxuICAgICAgW2R4LCAtZHldLFxuICAgICAgWy1keCwgLWR5XSxcbiAgICBdXG5cbiAgICB0aGlzLnNldEN1cnJEaXIocG9zc2libGVEaXJlY3Rpb25zW2luZGV4XSlcbiAgfVxuXG4gIGNoZWNrT3V0T2ZCb3VuZHMgPSAocG9zKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMud29ybGQuY2hlY2tPdXRPZkJvdW5kcyhwb3MsIHRoaXMucmFkaXVzKVxuICB9XG5cbiAgZ2V0UmFuZG9tUG9zID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLndvcmxkLmdldFJhbmRvbVBvcyh0aGlzLnJhZGl1cylcbiAgfVxuICAvKiogQm91bmNlIG9iamVjdCBiYWNrIGlmIGl0IGhpdHMgdGhlIHdhbGwgKi9cbiAgYm91bmNlQmFjayA9IChwb3MpID0+IHtcbiAgICBjb25zdCB7IGJvdW5kcyB9ID0gdGhpcy53b3JsZCxcbiAgICAgIHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IH0gPSBib3VuZHMsXG4gICAgICByID0gdGhpcy5yYWRpdXNcblxuICAgIGxldCB7IHgsIHkgfSA9IHBvcyxcbiAgICAgIGR4ID0gdGhpcy5jdXJyRGlyWzBdLFxuICAgICAgZHkgPSB0aGlzLmN1cnJEaXJbMV1cblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdDaGlsZCcpIHtcbiAgICAgIGlmICh0aGlzLnZlbC5keCA+IDEgfHwgdGhpcy52ZWwuZHkgPiAxKSB7XG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHkoeyBkeDogMSwgZHk6IDEgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKGR4ID4gMSkge1xuICAgICAgICBkeCA9IGR4IC8gNVxuICAgICAgfVxuICAgICAgaWYgKGR5ID4gMSkge1xuICAgICAgICBkeSA9IGR5IC8gNVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4ICsgciA+IHJpZ2h0IHx8IHggLSByIDwgbGVmdCkge1xuICAgICAgdGhpcy5zZXRDdXJyRGlyKFstZHgsIGR5XSlcbiAgICB9XG5cbiAgICBpZiAoeSAtIHIgPCB0b3AgfHwgeSArIHIgPiBib3R0b20pIHtcbiAgICAgIHRoaXMuc2V0Q3VyckRpcihbZHgsIC1keV0pXG4gICAgfVxuICAgIC8vb2JqcyBnZXQgc3R1Y2sgaWYgcGFyYWxsZWwgdG8gd2FsbHMgYW5kIG91dCBvZiBib3VuZHNcbiAgICBsZXQgblBvcyA9IHsgeDogeCArIHRoaXMuY3VyckRpclswXSwgeTogeSArIHRoaXMuY3VyckRpclsxXSB9XG4gICAgaWYgKHRoaXMuY2hlY2tPdXRPZkJvdW5kcyhuUG9zKSkgdGhpcy5zZXRSYW5kb21EaXIoKVxuICB9XG5cbiAgY2hlY2tJblJhbmdlKG9iaiwgY3VzaGlvbiA9IDApIHtcbiAgICAvLyBOb3RlOiBvYmouY29uc3RydWN0b3IubmFtZSB3b24ndCB3b3JrIHdpdGggSUUgYW5kIHRoZXJlIGFyZSBzb21lIGNhdmVhdHMuIE1vcmUgaW5mbyAtLT4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRnVuY3Rpb24vbmFtZVxuXG4gICAgY29uc3Qgb1BvcyA9IG9iai5wb3MsXG4gICAgICBvUiA9IG9iai5yYWRpdXMgKyBjdXNoaW9uLFxuICAgICAgeyB4LCB5IH0gPSB0aGlzLnBvcyxcbiAgICAgIHJhbmdlWCA9IFtvUG9zLnggLSBvUiwgb1Bvcy54ICsgb1JdLFxuICAgICAgcmFuZ2VZID0gW29Qb3MueSAtIG9SLCBvUG9zLnkgKyBvUl0sXG4gICAgICByID0gdGhpcy5yYWRpdXMgKyBjdXNoaW9uXG5cbiAgICBjb25zdCB3aXRoaW5SYW5nZSA9XG4gICAgICAoaW5SYW5nZSh4IC0gciwgLi4ucmFuZ2VYKSB8fCBpblJhbmdlKHggKyByLCAuLi5yYW5nZVgpKSAmJlxuICAgICAgKGluUmFuZ2UoeSAtIHIsIC4uLnJhbmdlWSkgfHwgaW5SYW5nZSh5ICsgciwgLi4ucmFuZ2VZKSlcblxuICAgIHJldHVybiB3aXRoaW5SYW5nZVxuICB9XG5cbiAgLy8gQ2FuJ3QgdXNlIEBiYWJlbC9wbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcy4gc3VwZXIubW92ZSgpIGRvZXNuJ3Qgd29yayBpbiBzdWJjbGFzc2VzLlxuICBoaXRzUGFyZW50KG9iaikge31cblxuICBoaXRzUHJlZGF0b3Iob2JqKSB7fVxuXG4gIGhpdHNDaGlsZChvYmopIHt9XG5cbiAgLyoqIERyYXcgdGhlIG9iamVjdCBvbiBjYW52YXMgKi9cbiAgZHJhdyA9IChjdHgsIG9mZnNldCA9IHsgeDogMCwgeTogMCB9KSA9PiB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLnBvc1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLnNwcml0ZSxcbiAgICAgIHggLSBvZmZzZXQueCxcbiAgICAgIHkgLSBvZmZzZXQueSxcbiAgICAgIHRoaXMuc2l6ZS53aWR0aCxcbiAgICAgIHRoaXMuc2l6ZS5oZWlnaHRcbiAgICApXG4gIH1cblxuICBjbGlwUG9zID0gKHsgeCwgeSB9KSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfSA9IHRoaXMud29ybGQuYm91bmRzLFxuICAgICAgciA9IHRoaXMucmFkaXVzXG5cbiAgICBjb25zdCBjbGlwcGVkWCA9IHggPiBsZWZ0ICsgciAmJiB4IDwgcmlnaHQgLSByID8geCA6IHRoaXMucG9zLngsXG4gICAgICBjbGlwcGVkWSA9IHkgPiB0b3AgKyByICYmIHkgPCBib3R0b20gLSByID8geSA6IHRoaXMucG9zLnlcblxuICAgIHJldHVybiB7IHg6IGNsaXBwZWRYLCB5OiBjbGlwcGVkWSB9XG4gIH1cblxuICBtb3Zlc1dpdGhDdXJzb3IocG9zLCBlYXNpbmcsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB7IG9mZnNldHMgfSA9IHRoaXMud29ybGRcbiAgICBsZXQgeyB4LCB5IH0gPSBwb3NcblxuICAgIC8vIE9mZnNldHMgdG8gYWNjb3VudCBmb3IgbWFyZ2luLCBwYWRkaW5ncyBhcm91bmQgZ2FtZSB3b3JsZC5cbiAgICBjb25zdCBvZmZzZXRMID0gb2Zmc2V0cy5sZWZ0LFxuICAgICAgb2Zmc2V0VCA9IG9mZnNldHMudG9wLFxuICAgICAgcmVsYXRpdmVYID0geCAtIG9mZnNldEwsXG4gICAgICByZWxhdGl2ZVkgPSB5IC0gb2Zmc2V0VFxuXG4gICAgbGV0IHhEaWZmID0gcmVsYXRpdmVYIC0gdGhpcy5wb3MueCxcbiAgICAgIHlEaWZmID0gcmVsYXRpdmVZIC0gdGhpcy5wb3MueVxuXG4gICAgLy8gT2Zmc2V0IGNoaWxkcmVuIHNvIHRoZXkgZG9uJ3QgYWxsIG92ZXJsYXAgdGhlIHBhcmVudCB3aGVuIHN0YXRpb25hcnkgb3Igc2xvdyBtb3ZpbmcuXG4gICAgaWYgKHlEaWZmIDw9IDApIHlEaWZmICs9IG9mZnNldFxuICAgIC8vTW9yZSBpbmZvIG9uIHR3ZWVuaW5nLCBhbmltYXRpb24gLS0+IGh0dHBzOi8vc3BpY3l5b2dodXJ0LmNvbS90dXRvcmlhbHMvaHRtbDUtamF2YXNjcmlwdC1nYW1lLWRldmVsb3BtZW50L2NyZWF0ZS1hLXNtb290aC1jYW52YXMtYW5pbWF0aW9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNzk3MzU3Ny8xMTI3OTgxMVxuICAgIGNvbnN0IHZlbFggPSB4RGlmZiAqIGVhc2luZyxcbiAgICAgIHZlbFkgPSB5RGlmZiAqIGVhc2luZ1xuXG4gICAgdGhpcy52ZWxvY2l0eSA9IHsgeDogdmVsWCwgeTogdmVsWSB9XG5cbiAgICB4ID0gdGhpcy5wb3MueCArIHZlbFhcbiAgICB5ID0gdGhpcy5wb3MueSArIHZlbFlcblxuICAgIC8vRG9uJ3QgbGV0IG9iamVjdHMgcGFzcyBlZGdlXG4gICAgY29uc3QgY2xpcHBlZFBvcyA9IHRoaXMuY2xpcFBvcyh7IHgsIHkgfSlcblxuICAgIHRoaXMuc2V0UG9zKGNsaXBwZWRQb3MpXG5cbiAgICAvLyBDYWNoZSBsYXN0IDUgcG9zaXRpb25zLiBNYWtlcyBjaGlsZHJlbidzIG1vdmVtZW50IG1vcmUgbmF0dXJhbC5cbiAgICBjb25zdCBwb3NDYWNoZSA9IHRoaXMucG9zQ2FjaGVcbiAgICBpZiAocG9zQ2FjaGUubGVuZ3RoID4gNCkgcG9zQ2FjaGUuc2hpZnQoKVxuICAgIHBvc0NhY2hlLnB1c2gocG9zKVxuICAgIHRoaXMuc2V0UG9zQ2FjaGUocG9zQ2FjaGUpXG4gIH1cblxuICBtb3ZlcygpIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcyxcbiAgICAgIHBvcyA9IHsgeDogeCArIHRoaXMuY3VyckRpclswXSwgeTogeSArIHRoaXMuY3VyckRpclsxXSB9XG5cbiAgICBpZiAodGhpcy5jaGVja091dE9mQm91bmRzKHBvcykpIHRoaXMuYm91bmNlQmFjayhwb3MpXG5cbiAgICB0aGlzLnNldFBvcyhwb3MpXG4gIH1cbn1cbiIsImltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tICdkYXRhX3N0cnVjdHVyZXMnXG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vTW92aW5nT2JqZWN0J1xuXG5jb25zdCByID0gMTMsXG4gIGMgPSAnIzcyODBmNicsXG4gIGUgPSAxXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmVudCBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBvcyxcbiAgICByYWRpdXMgPSByLFxuICAgIHdvcmxkLFxuICAgIGNoYWluLFxuICAgIHNjb3JlLFxuICAgIGVuZXJneSxcbiAgICBzcHJpdGUsXG4gICAgc2l6ZSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9LFxuICAgIGNvbG9yID0gYyxcbiAgICBlYXNpbmcgPSBlXG4gICkge1xuICAgIHN1cGVyKHBvcywgcmFkaXVzLCB3b3JsZCwgc3ByaXRlLCBzaXplLCBudWxsLCBjb2xvcilcbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMuY2hhaW4gPSBjaGFpblxuICAgIHRoaXMuc2NvcmUgPSBzY29yZVxuICAgIHRoaXMuZW5lcmd5ID0gZW5lcmd5XG4gICAgdGhpcy5lYXNpbmcgPSBlYXNpbmdcbiAgICB0aGlzLmN1cnJQcmVkQ29scyA9IFtdXG4gICAgdGhpcy5wb3NDYWNoZSA9IFtdXG4gICAgdGhpcy5zcHJpdGUgPSBzcHJpdGVcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMubW92ZXMuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c1ByZWRhdG9yID0gdGhpcy5oaXRzUHJlZGF0b3IuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c0NoaWxkID0gdGhpcy5oaXRzQ2hpbGQuYmluZCh0aGlzKVxuICAgIHRoaXMuY2xpY2tpbmcgPSBmYWxzZVxuICB9XG5cbiAgc2V0Q3VyclByZWRDb2xzID0gKGN1cnJQcmVkQ29scykgPT4ge1xuICAgIHRoaXMuY3VyclByZWRDb2xzID0gY3VyclByZWRDb2xzXG4gIH1cblxuICBnZXRDaGlsZENvdW50ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnNpemVcbiAgfVxuXG4gIGRlbGV0ZUxhc3RDaGlsZCA9ICgpID0+IHtcbiAgICBsZXQgY3VyciA9IHRoaXMuY2hpbGRyZW4uZGVsZXRlRnJvbVRhaWwoKVxuICAgIGlmIChjdXJyKSB7XG4gICAgICBjdXJyLnNldENoYWluUG9zKG51bGwpXG4gICAgICBjdXJyLnNldE5leHRDaGlsZChudWxsKVxuICAgICAgY3Vyci5zZXRJbmRlcGVuZGVuY2UodHJ1ZSlcbiAgICAgIHRoaXMuY2hhaW4uZGVjcmVtZW50Q291bnQoKVxuICAgICAgY3Vyci5zZXRQYXJlbnQobnVsbClcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJcbiAgfVxuXG4gIGRlc3Ryb3lDaGlsZCA9IChjaGlsZCkgPT4ge1xuICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlTm9kZShjaGlsZClcbiAgfVxuXG4gIGFwcGVuZENoaWxkID0gKGNoaWxkKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNoaWxkcmVuLnNlYXJjaChjaGlsZCkpIHtcbiAgICAgIHRoaXMuY2hhaW4uaW5jcmVtZW50Q291bnQoKVxuICAgICAgdGhpcy5zY29yZS5jYWxjdWxhdGVTY29yZSh0aGlzLmdldENoaWxkQ291bnQoKSlcbiAgICAgIGNvbnN0IHRhaWwgPSB0aGlzLmNoaWxkcmVuLnRhaWwsXG4gICAgICAgIGxhc3RDaGlsZCA9IHRhaWwgJiYgdGFpbC52YWxcbiAgICAgIGlmIChsYXN0Q2hpbGQpIGxhc3RDaGlsZC5zZXROZXh0Q2hpbGQoY2hpbGQpXG5cbiAgICAgIHRoaXMuY2hpbGRyZW4uYXBwZW5kVG9UYWlsKGNoaWxkKVxuXG4gICAgICBjaGlsZC5zZXRDaGFpblBvcyh0aGlzLmdldENoaWxkQ291bnQoKSlcbiAgICAgIGNoaWxkLnNldFBhcmVudCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ29sbGlzaW9uV2l0aFByZWRhdG9yID0gKHByZWRhdG9yKSA9PiB7XG4gICAgY29uc3QgY29sbGlkZWQgPSBzdXBlci5jaGVja0luUmFuZ2UocHJlZGF0b3IpLFxuICAgICAgY29sbGlkaW5nID0gdGhpcy5jdXJyUHJlZENvbHMuaW5jbHVkZXMocHJlZGF0b3IpXG5cbiAgICAvKiBpZiBjb2xsaWRlZCBhbmQgZmlyc3QgY29udGFjdCxcbiAgICAgIGFkZCBwcmVkYXRvciB0byB0aGUgY3VycmVudCBjb2xsaXNpb25zIHdpdGggcHJlZGF0b3IsXG4gICAgICBjYWxsIGNvbGxpZGUgd2l0aCBwcmVkYXRvciAoZGVjcmVtZW50IGNoYWluIGNvdW50KVxuICAgICovXG4gICAgaWYgKGNvbGxpZGVkICYmICFjb2xsaWRpbmcpIHtcbiAgICAgIGNvbnN0IGN1cnJQcmVkQ29scyA9IHRoaXMuY3VyclByZWRDb2xzLnNsaWNlKClcbiAgICAgIGN1cnJQcmVkQ29scy5wdXNoKHByZWRhdG9yKVxuICAgICAgdGhpcy5zZXRDdXJyUHJlZENvbHMoY3VyclByZWRDb2xzKVxuICAgICAgdGhpcy5oaXRzUHJlZGF0b3IoKVxuICAgIH1cblxuICAgIC8qIGlmIHdhcyBjb2xsaWRpbmcgYW5kIHN0b3BwZWQgY29sbGlkaW5nLCByZW1vdmUgcHJlZGF0b3IgZnJvbSBjdXJyZW50IGNvbGxpc2lvbnMgKi9cbiAgICBpZiAoIWNvbGxpZGVkICYmIHN1cGVyLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgNSkgJiYgY29sbGlkaW5nKSB7XG4gICAgICBjb25zdCBjdXJyUHJlZENvbHMgPSB0aGlzLmN1cnJQcmVkQ29scy5zbGljZSgpLFxuICAgICAgICBpbmRleCA9IGN1cnJQcmVkQ29scy5pbmRleE9mKHByZWRhdG9yKVxuICAgICAgY3VyclByZWRDb2xzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIHRoaXMuc2V0Q3VyclByZWRDb2xzKGN1cnJQcmVkQ29scylcbiAgICB9XG4gIH1cblxuICBoaXRzUHJlZGF0b3IoKSB7XG4gICAgdGhpcy5jaGFpbi5yZXNldCgpXG4gICAgdGhpcy5lbmVyZ3kuZGVjcmVtZW50Q291bnQoKVxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KClcblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkLnNldFBhcmVudChudWxsKVxuICAgICAgY2hpbGQuc2V0Q2hhaW5Qb3MobnVsbClcbiAgICAgIGNoaWxkLnNldE5leHRDaGlsZChudWxsKVxuICAgICAgY2hpbGQuc2V0SW5kZXBlbmRlbmNlKHRydWUpXG4gICAgICBjb25zdCB2ZWwgPSB7IGR4OiAzLCBkeTogMyB9XG4gICAgICBjaGlsZC5zZXRWZWxvY2l0eSh2ZWwpXG5cbiAgICAgIGNvbnN0IFt4LCB5XSA9IGNoaWxkLmN1cnJEaXIsXG4gICAgICAgIHsgZHgsIGR5IH0gPSB2ZWxcbiAgICAgIGNoaWxkLnNldEN1cnJEaXIoW3ggKiBkeCwgeSAqIGR5XSlcbiAgICAgIGNoaWxkLnNldFJhbmRvbURpcigpXG4gICAgfVxuXG4gICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBMaW5rZWRMaXN0KClcbiAgfVxuXG4gIGhpdHNDaGlsZChvYmopIHtcbiAgICB0aGlzLmFwcGVuZENoaWxkKG9iailcbiAgICBvYmouc2V0SW5kZXBlbmRlbmNlKGZhbHNlKVxuICB9XG5cbiAgaGl0c1dvcm0oZ2FtZSwgd29ybSkge1xuICAgIHRoaXMuZW5lcmd5LmluY3JlbWVudENvdW50KClcbiAgICBnYW1lLmRlc3Ryb3lXb3JtKHdvcm0pXG4gIH1cblxuICBtb3Zlcyhwb3MpIHtcbiAgICBzdXBlci5tb3Zlc1dpdGhDdXJzb3IocG9zLCB0aGlzLmVhc2luZylcbiAgICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5jaGlsZHJlbi5oZWFkICYmIHRoaXMuY2hpbGRyZW4uaGVhZC52YWxcblxuICAgIGlmIChmaXJzdENoaWxkKVxuICAgICAgZmlyc3RDaGlsZC5tb3Zlcyh0aGlzLnBvc0NhY2hlLmxlbmd0aCA/IHRoaXMucG9zQ2FjaGVbMF0gOiBwb3MpXG4gIH1cbn1cbiIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9Nb3ZpbmdPYmplY3QnXG5cbmNvbnN0IHIgPSAxMCxcbiAgYyA9ICcjZjY3MjgwJyxcbiAgdiA9IHsgZHg6IDIuMiwgZHk6IDIuMiB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWRhdG9yIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcG9zLFxuICAgIHJhZGl1cyA9IHIsXG4gICAgd29ybGQsXG4gICAgc3ByaXRlLFxuICAgIHNpemUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSxcbiAgICB2ZWwgPSB2LFxuICAgIGNvbG9yID0gY1xuICApIHtcbiAgICBzdXBlcihwb3MsIHJhZGl1cywgd29ybGQsIHNwcml0ZSwgc2l6ZSwgdmVsLCBjb2xvcilcbiAgICB0aGlzLnNwcml0ZSA9IHNwcml0ZVxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5KSB7XG4gICAgdGhpcy5kaXNwbGF5ID0gZGlzcGxheVxuICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgdGhpcy5oaWdoU2NvcmUgPSAwXG4gIH1cblxuICBzZXRTY29yZSA9IChzY29yZSkgPT4ge1xuICAgIHRoaXMuc2NvcmUgPSBzY29yZVxuICB9XG5cbiAgc2V0SGlnaFNjb3JlID0gKHNjb3JlKSA9PiB7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSBzY29yZVxuICB9XG5cbiAgcmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTY29yZSgwKVxuICAgIHRoaXMudXBkYXRlU2NvcmUoKVxuICB9XG5cbiAgY2FsY3VsYXRlU2NvcmUgPSAoY2hpbGRDb3VudCkgPT4ge1xuICAgIGxldCBjaGFpbkNvdW50ID0gMSArIGNoaWxkQ291bnQgLy9jb3VudCBwYXJlbnRcbiAgICBsZXQgc2NvcmVUb0FkZCA9IGNoYWluQ291bnQgKiBjaGFpbkNvdW50ICogMTBcbiAgICBjb25zdCBuZXdTY29yZSA9IHRoaXMuc2NvcmUgKyBzY29yZVRvQWRkXG4gICAgdGhpcy5zZXRTY29yZShuZXdTY29yZSlcbiAgICB0aGlzLnVwZGF0ZVNjb3JlKClcbiAgfVxuXG4gIGNhbGN1bGF0ZUhpZ2hTY29yZSA9ICgpID0+IHtcbiAgICBjb25zdCBoaWdoU2NvcmUgPSBNYXRoLm1heCh0aGlzLnNjb3JlLCB0aGlzLmhpZ2hTY29yZSlcbiAgICB0aGlzLnNldEhpZ2hTY29yZShoaWdoU2NvcmUpXG4gIH1cblxuICB1cGRhdGVTY29yZSA9ICgpID0+IHtcbiAgICB0aGlzLmRpc3BsYXkudXBkYXRlRWxlbWVudCgnI3Njb3JlJywgdGhpcy5zY29yZSlcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgdGhpcy51cGRhdGVTY29yZSgpXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJhbmRvbUJldHdlZW4gfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZCB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXkpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5jYW52YXMgPSBkaXNwbGF5LndvcmxkXG4gICAgdGhpcy5zaXplID0gdGhpcy5kaXNwbGF5LndvcmxkU2l6ZVxuICAgIHRoaXMuYm91bmRzID0geyB0b3A6IG51bGwsIHJpZ2h0OiBudWxsLCBib3R0b206IG51bGwsIHJpZ2h0OiBudWxsIH1cbiAgICB0aGlzLm9mZnNldHMgPSB7IHRvcDogbnVsbCwgbGVmdDogbnVsbCB9XG4gIH1cblxuICBzZXRCb3VuZHMoYm91bmRzKSB7XG4gICAgdGhpcy5ib3VuZHMgPSBib3VuZHNcbiAgfVxuXG4gIHNldE9mZnNldHMob2Zmc2V0cykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHNcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCB0b3AgPSAwLFxuICAgICAgbGVmdCA9IDAsXG4gICAgICBib3R0b20gPSB0b3AgKyB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICByaWdodCA9IGxlZnQgKyB0aGlzLmNhbnZhcy53aWR0aFxuXG4gICAgcmV0dXJuIHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IH1cbiAgfVxuXG4gIGNoZWNrT3V0T2ZCb3VuZHMgPSAocG9zLCByKSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfSA9IHRoaXMuYm91bmRzLFxuICAgICAgeyB4LCB5IH0gPSBwb3NcblxuICAgIGlmICh4IC0gciA8IGxlZnQpIHJldHVybiB0cnVlXG4gICAgaWYgKHggKyByID4gcmlnaHQpIHJldHVybiB0cnVlXG4gICAgaWYgKHkgLSByIDwgdG9wKSByZXR1cm4gdHJ1ZVxuICAgIGlmICh5ICsgciA+IGJvdHRvbSkgcmV0dXJuIHRydWVcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmNhbnZhcy5vZmZzZXRUb3AsXG4gICAgICBsZWZ0ID0gdGhpcy5jYW52YXMub2Zmc2V0TGVmdFxuICAgIHJldHVybiB7IHRvcCwgbGVmdCB9XG4gIH1cblxuICBnZXRSYW5kb21Qb3MgPSAocmFkaXVzKSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfSA9IHRoaXMuYm91bmRzLFxuICAgICAgciA9IHJhZGl1c1xuXG4gICAgY29uc3QgeCA9IGdldFJhbmRvbUJldHdlZW4obGVmdCArIHIsIHJpZ2h0IC0gciksXG4gICAgICB5ID0gZ2V0UmFuZG9tQmV0d2Vlbih0b3AgKyByLCBib3R0b20gLSByKVxuXG4gICAgcmV0dXJuIHsgeCwgeSB9XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IG9mZnNldHMgPSB0aGlzLmdldE9mZnNldHMoKSxcbiAgICAgIGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKClcblxuICAgIHRoaXMuc2V0T2Zmc2V0cyhvZmZzZXRzKVxuICAgIHRoaXMuc2V0Qm91bmRzKGJvdW5kcylcbiAgfVxufVxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL01vdmluZ09iamVjdCdcblxuY29uc3QgciA9IDEwLFxuICBjID0gJyM5MzYzNDQnLFxuICB2ID0geyBkeDogMiwgZHk6IDIgfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZCBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBvcyxcbiAgICByYWRpdXMgPSByLFxuICAgIHdvcmxkLFxuICAgIHNwcml0ZSxcbiAgICBzaXplID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0sXG4gICAgdmVsID0gdixcbiAgICBjb2xvciA9IGNcbiAgKSB7XG4gICAgc3VwZXIocG9zLCByYWRpdXMsIHdvcmxkLCBzcHJpdGUsIHNpemUsIHZlbCwgY29sb3IpXG4gICAgdGhpcy5zcHJpdGUgPSBzcHJpdGVcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMubW92ZXMuYmluZCh0aGlzKVxuICB9XG5cbiAgbW92ZXMoZ2FtZSkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zLFxuICAgICAgcG9zID0geyB4OiB4ICsgdGhpcy5jdXJyRGlyWzBdLCB5OiB5ICsgdGhpcy5jdXJyRGlyWzFdIH1cblxuICAgIGlmICh0aGlzLmNoZWNrT3V0T2ZCb3VuZHMocG9zKSkge1xuICAgICAgZ2FtZS5kZXN0cm95V29ybSh0aGlzKVxuICAgIH1cblxuICAgIHRoaXMuc2V0UG9zKHBvcylcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjljODk1ZDM3MTA3NGNmZTJkMDMxMjU3N2ZjNzYzNWQzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MTZiZjkxNjRiNzIzMjgyNDNmNTdlMzliMzQ2MmUzMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmYyZjE5ZDc3Yjk5ZTAwOGIzMmVmZjkxMWZjMWYwN2UucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAzZGMzM2FkZTRlYWQ1Yjg3YTY1OWFiY2UzMjM5NjgzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmOWU2M2NkYjUxNmZhZGQyNWU2ODg1NWNlOTVkYjQ3Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTFjZjA4ZTljZmNmYjMxMzQ1NDYwN2E5ZDhjZjgzMTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFkOTYzYzQ2NGE0MmYxZTM1ZTlhOTAzZTE3MWYxMGU4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyZTZkODg3NDIyOTVkMGVhOTVjZjEzZmQ5YTM4ODI3Zi5wbmdcIjsiLCJpbXBvcnQgRE9NRGlzcGxheSBmcm9tICcuL0Rpc3BsYXkvRE9NRGlzcGxheS5qcydcbmltcG9ydCBJbnRybyBmcm9tICcuL0Rpc3BsYXkvSW50cm8uanMnXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5jb25zdCB3aWR0aCA9IE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoIC8gMS4yLCAxMjAwKSxcbiAgaGVpZ2h0ID0gTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0IC8gMS4yLCA3NTApLFxuICBkaXNwbGF5ID0gbmV3IERPTURpc3BsYXkoeyB3aWR0aCwgaGVpZ2h0IH0pLFxuICBnYW1lID0gbmV3IEdhbWUoZGlzcGxheSlcblxuZGlzcGxheS5yZW5kZXJHYW1lKClcbmRpc3BsYXkucmVuZGVyVGl0bGUoKVxuZGlzcGxheS5yZW5kZXJXb3JsZCgpXG5cbmNvbnN0IGludHJvRGlzcGxheSA9IG5ldyBJbnRybyhcbiAgZGlzcGxheS5nYW1lLFxuICBkaXNwbGF5LndvcmxkV3JhcHBlcixcbiAgZGlzcGxheS53b3JsZFNpemVcbilcblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gIGNvbnNvbGUubG9nKCdjbGlja2VkIHR1dG9yaWFsJylcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2tTdGFydCgpIHtcbiAgaW50cm9EaXNwbGF5LmNsZWFyVHV0b3JpYWwoKVxuICBnYW1lLmluaXQoKVxufVxuXG5pbnRyb0Rpc3BsYXkucmVuZGVySW50cm8oKVxuaW50cm9EaXNwbGF5LnJlbmRlclR1dG9yaWFsQnV0dG9uKGhhbmRsZUNsaWNrKVxuaW50cm9EaXNwbGF5LnJlbmRlclN0YXJ0TGluayhoYW5kbGVDbGlja1N0YXJ0KVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKVxufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21CZXR3ZWVuKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pXG4gIG1heCA9IE1hdGguZmxvb3IobWF4KVxuICAvLyBpbmNsdXNpdmVcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuZnVuY3Rpb24gaW5SYW5nZShudW0sIG1pbiwgbWF4KSB7XG4gIHJldHVybiBudW0gPj0gbWluICYmIG51bSA8PSBtYXhcbn1cblxuLy8gRGlkbid0IHVzZVxuZnVuY3Rpb24gY2FsY3VsYXRlSHlwb3RlbnVzZShhLCBiKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYSwgMikgKyBNYXRoLnBvdyhiLCAyKSlcbn1cblxuLy8gRGlkbid0IHVzZVxuZnVuY3Rpb24gZWFzZUxpbmVhcih0LCBiLCBjLCBkKSB7XG4gIHJldHVybiAoYyAqIHQpIC8gZCArIGJcbn1cbmV4cG9ydCB7IGdldFJhbmRvbUludCwgaW5SYW5nZSwgZ2V0UmFuZG9tQmV0d2VlbiB9XG4iXSwic291cmNlUm9vdCI6IiJ9