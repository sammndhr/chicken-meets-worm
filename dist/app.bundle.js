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
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\n\nhtml,\nbutton {\n  text-align: center;\n  font-size: 1rem;\n  font-family: 'Schoolbell', sans-serif;\n  letter-spacing: 5px;\n}\n\nbutton.btn {\n  padding: 1rem;\n  padding: 1rem 2rem;\n  text-align: center;\n  cursor: pointer;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  margin: 5px auto;\n  transition-duration: 0.4s;\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n#title:hover {\n  color: red;\n  cursor: pointer;\n}\n\n.game {\n  margin: 0 auto;\n}\n\n.title h1 {\n  font-size: 24px;\n  margin: 32px;\n}\n\n.world-wrapper {\n  margin: 0 auto;\n}\n\n.legend {\n  position: absolute;\n  top: 98px;\n  text-align: left;\n}\n\n.legend > div {\n  margin-left: 10px;\n  margin: 10px;\n}\n\n.legend-text {\n  font-size: 32px;\n  line-height: 32px;\n}\n\ndiv.chain-wrapper {\n  margin: 5px;\n}\n\n.chain-wrapper .image#chain-count {\n  height: 30px;\n  width: 30px;\n  margin-right: 5px;\n}\n\n.chain-wrapper .chain {\n  margin: 0 auto;\n}\n\n#world {\n  border: 2px solid black;\n  background-color: rgb(194, 255, 194);\n}\n\n.worm-left {\n  width: 20px;\n}\n\n.worm-right {\n  width: 20px;\n}\n\n.animate {\n  animation: pulse 2s ease;\n}\n\n.end-wrapper,\n.intro-wrapper {\n  position: absolute;\n  font-size: 32px;\n  margin: 0 auto;\n}\n\n.intro-wrapper {\n  font-size: 24px;\n  width: 100%;\n}\n\n.intro {\n  width: 100%;\n}\n\n.intro-message {\n  display: block;\n  width: 100%;\n  padding: 16px;\n}\n\n.start {\n  display: block;\n  cursor: pointer;\n  border-bottom: 1px solid black;\n  width: max-content;\n  margin: 16px auto;\n}\n\n.start:hover {\n  color: red;\n  border-bottom-color: red;\n}\n\n.game-end {\n  width: max-content;\n  margin: 0 auto;\n  padding: 30px 80px;\n}\n\n.game-end {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.game-end div {\n  margin-bottom: 5px;\n}\n\n.game-end > .wrapper > .score {\n  color: red;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(2);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n.tutorial-wrapper {\n  position: absolute;\n  top: 98px;\n}\n\n.tutorial-message {\n  width: 60%;\n  margin: 0 auto;\n  font-size: 24px;\n  line-height: 1.5;\n  padding: 6px;\n}\n\n#tut-msg-1 {\n  font-size: 16px;\n  position: absolute;\n}\n", ""]);
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

/***/ "./node_modules/data_structures/dist/BinaryHeap/MaxBinaryHeap.js":
/*!***********************************************************************!*\
  !*** ./node_modules/data_structures/dist/BinaryHeap/MaxBinaryHeap.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var MaxBinaryHeap = /*#__PURE__*/function () {
  function MaxBinaryHeap() {
    _classCallCheck(this, MaxBinaryHeap);

    _content.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _content, []);
  }

  _createClass(MaxBinaryHeap, [{
    key: "_swap",
    // _methods are helpers. Change to private when private instance methods are supported
    value: function _swap(i, j) {
      var temp = _classPrivateFieldGet(this, _content)[i];

      _classPrivateFieldGet(this, _content)[i] = _classPrivateFieldGet(this, _content)[j];
      _classPrivateFieldGet(this, _content)[j] = temp;
    }
  }, {
    key: "_bubbleUp",
    value: function _bubbleUp(i) {
      var element = _classPrivateFieldGet(this, _content)[i];

      while (i > 0) {
        var p = Math.floor((i - 1) / 2),
            parent = _classPrivateFieldGet(this, _content)[p];

        if (element > parent) {
          this._swap(p, i);

          i = p;
        } else {
          break;
        }
      }
    }
  }, {
    key: "_sinkDown",
    value: function _sinkDown(p) {
      var element = _classPrivateFieldGet(this, _content)[p],
          lastIndex = _classPrivateFieldGet(this, _content).length - 1;

      while (p < lastIndex) {
        var r = 2 * p + 2,
            l = r - 1;
        var swapIndex = null,
            left = void 0,
            right = void 0,
            min = element;

        if (l <= lastIndex) {
          left = _classPrivateFieldGet(this, _content)[l];
          if (left > element) swapIndex = l;
          min = left;
        }

        if (r <= lastIndex) {
          right = _classPrivateFieldGet(this, _content)[r];
          if (right > min) swapIndex = r;
        }

        if (swapIndex == null) break;

        this._swap(p, swapIndex);

        p = swapIndex;
      }
    }
  }, {
    key: "printMaxHeap",
    value: function printMaxHeap() {
      console.log(_classPrivateFieldGet(this, _content));
      return _classPrivateFieldGet(this, _content);
    }
  }, {
    key: "insert",
    value: function insert(element) {
      _classPrivateFieldGet(this, _content).push(element);

      this._bubbleUp(_classPrivateFieldGet(this, _content).length - 1);
    }
  }, {
    key: "extractMax",
    value: function extractMax() {
      if (_classPrivateFieldGet(this, _content).length <= 0) return null;
      var lastIndex = _classPrivateFieldGet(this, _content).length - 1,
          firstIndex = 0;
      if (firstIndex !== lastIndex) this._swap(firstIndex, lastIndex);

      var result = _classPrivateFieldGet(this, _content).pop();

      if (_classPrivateFieldGet(this, _content).length > 0) {
        this._sinkDown(0);
      }

      return result;
    }
  }, {
    key: "remove",
    value: function remove(element) {
      for (var i = 0; i < this.size; i++) {
        if (_classPrivateFieldGet(this, _content)[i] !== element) continue;
        var lastIndex = this.size - 1;

        if (i === lastIndex) {
          _classPrivateFieldGet(this, _content).pop();

          break;
        }

        this._swap(i, lastIndex);

        _classPrivateFieldGet(this, _content).pop();

        this._bubbleUp(i);

        this._sinkDown(i);

        break;
      }
    }
  }, {
    key: "size",
    get: function get() {
      return _classPrivateFieldGet(this, _content).length;
    }
  }, {
    key: "max",
    get: function get() {
      return this.size ? _classPrivateFieldGet(this, _content)[0] : null;
    }
  }]);

  return MaxBinaryHeap;
}();

var _content = new WeakMap();

module.exports = MaxBinaryHeap;

/***/ }),

/***/ "./node_modules/data_structures/dist/BinaryHeap/MinBinaryHeap.js":
/*!***********************************************************************!*\
  !*** ./node_modules/data_structures/dist/BinaryHeap/MinBinaryHeap.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

// https://www.youtube.com/watch?v=WCm3TqScBM8
// Any node has a value at least as small as the values in that node's children.
// Source: https://eloquentjavascript.net/1st_edition/appendix2.html
var MinBinaryHeap = /*#__PURE__*/function () {
  function MinBinaryHeap() {
    _classCallCheck(this, MinBinaryHeap);

    _content.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _content, []);
  }

  _createClass(MinBinaryHeap, [{
    key: "_swap",
    // _methods are helpers. Change to private when private instance methods are supported
    value: function _swap(i, j) {
      var temp = _classPrivateFieldGet(this, _content)[i];

      _classPrivateFieldGet(this, _content)[i] = _classPrivateFieldGet(this, _content)[j];
      _classPrivateFieldGet(this, _content)[j] = temp;
    }
    /* bubbleUp 
      1. Compare item to parent and check if it's less than parent. 
      2. If it is less than parent, swap it. 
      3. Now, compare to the new parent and keep swapping until it either reaches the top of the heap or it is >= parent. 
    */

  }, {
    key: "_bubbleUp",
    value: function _bubbleUp(i) {
      var element = _classPrivateFieldGet(this, _content)[i];
      /* 
        indexing from 0
        p is the index of the parent
        i is the index of either left or right child
        l is index of left child
        r is the index of the right child
         l = 2p + 1
        r = 2p + 2
        p = Math.floor((i-1)/2)
       */


      while (i > 0) {
        var p = Math.floor((i - 1) / 2),
            parent = _classPrivateFieldGet(this, _content)[p];

        if (element < parent) {
          this._swap(p, i); // make sure to change index to that of parent after swapping


          i = p;
        } else {
          break;
        }
      }
    }
  }, {
    key: "_sinkDown",
    value: function _sinkDown(p) {
      var element = _classPrivateFieldGet(this, _content)[p],
          lastIndex = _classPrivateFieldGet(this, _content).length - 1;

      while (p < lastIndex) {
        // Info in getting index in bubbleUp
        var r = 2 * p + 2,
            l = r - 1; //Or 2 * p + 1

        var swapIndex = null,
            left = void 0,
            right = void 0,
            min = element; //start out assuming the min between left, right, element is the element
        // if element has left child, compare
        // if left child < element, set swapIndex to the left index (l) and min to left

        if (l <= lastIndex) {
          left = _classPrivateFieldGet(this, _content)[l];
          if (left < element) swapIndex = l;
          min = left;
        }

        if (r <= lastIndex) {
          right = _classPrivateFieldGet(this, _content)[r]; // compare the right to the min so far to make sure the min of the three items gets bubbled up while the parent gets sunk

          if (right < min) swapIndex = r;
        } // parent is smaller than both left and right child so break


        if (swapIndex == null) break;

        this._swap(p, swapIndex); // set the parent index to the swap index so it will continue to sink down


        p = swapIndex;
      }
    }
  }, {
    key: "printMinHeap",
    value: function printMinHeap() {
      console.log(_classPrivateFieldGet(this, _content));
      return _classPrivateFieldGet(this, _content);
    }
    /* insert
      1. insert new item into this.#content
      2. bubble it up 
      */

  }, {
    key: "insert",
    value: function insert(element) {
      _classPrivateFieldGet(this, _content).push(element);

      this._bubbleUp(_classPrivateFieldGet(this, _content).length - 1);
    }
    /* extractMin
      1. swap first and last items if this.#content.length > 1 (or first !== last)
      2. pop out last item of array and save it in result
      3. If length is more than one, bubble the first item down
      4. Return the result that was saved 
      */

  }, {
    key: "extractMin",
    value: function extractMin() {
      if (_classPrivateFieldGet(this, _content).length <= 0) return null; //return null if array is empty

      var lastIndex = _classPrivateFieldGet(this, _content).length - 1,
          firstIndex = 0;
      if (firstIndex !== lastIndex) this._swap(firstIndex, lastIndex);

      var result = _classPrivateFieldGet(this, _content).pop();

      if (_classPrivateFieldGet(this, _content).length > 0) {
        this._sinkDown(0);
      }

      return result;
    }
  }, {
    key: "remove",
    value: function remove(element) {
      for (var i = 0; i < this.size; i++) {
        // if curr item doesn't match the element to remove, continue searching
        if (_classPrivateFieldGet(this, _content)[i] !== element) continue; // if it does match

        var lastIndex = this.size - 1; // if it's the last item, pop it and break

        if (i === lastIndex) {
          _classPrivateFieldGet(this, _content).pop();

          break;
        } // if it's not the last item
        //  1. swap it with the last item
        //  2. pop the swapped last item
        //  3. Then call bubbleUp and sinkDown.


        this._swap(i, lastIndex);

        _classPrivateFieldGet(this, _content).pop();

        this._bubbleUp(i);

        this._sinkDown(i);

        break;
      }
    }
  }, {
    key: "size",
    get: function get() {
      return _classPrivateFieldGet(this, _content).length;
    }
  }, {
    key: "min",
    get: function get() {
      return this.size ? _classPrivateFieldGet(this, _content)[0] : null;
    }
  }]);

  return MinBinaryHeap;
}();

var _content = new WeakMap();

module.exports = MinBinaryHeap;

/***/ }),

/***/ "./node_modules/data_structures/dist/BinaryHeap/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/data_structures/dist/BinaryHeap/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MinBinaryHeap = __webpack_require__(/*! ./MinBinaryHeap */ "./node_modules/data_structures/dist/BinaryHeap/MinBinaryHeap.js");

var MaxBinaryHeap = __webpack_require__(/*! ./MaxBinaryHeap */ "./node_modules/data_structures/dist/BinaryHeap/MaxBinaryHeap.js");

module.exports = {
  MinBinaryHeap: MinBinaryHeap,
  MaxBinaryHeap: MaxBinaryHeap
};

/***/ }),

/***/ "./node_modules/data_structures/dist/BinarySearchTree.js":
/*!***************************************************************!*\
  !*** ./node_modules/data_structures/dist/BinarySearchTree.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(/*! ./BinaryTreeTraversal */ "./node_modules/data_structures/dist/BinaryTreeTraversal.js"),
    BFS = _require.BFS,
    DFSIterative = _require.DFSIterative;

var BinarySearchTree = function () {
  var findMinNode = function findMinNode(node) {
    if (node.left === null) return node;else return findMinNode(node.left);
  };

  var TreeNode = function TreeNode(val) {
    var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, TreeNode);

    this.val = val;
    this.left = left;
    this.right = right;
  };

  var BinarySearchTree = /*#__PURE__*/function () {
    function BinarySearchTree() {
      _classCallCheck(this, BinarySearchTree);

      _root.set(this, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldSet(this, _root, null);
    }

    _createClass(BinarySearchTree, [{
      key: "insert",
      value: function insert(val) {
        var recursiveInsertNode = function recursiveInsertNode(node, newNode) {
          if (newNode.val < node.val) {
            if (node.left === null) node.left = newNode;else recursiveInsertNode(node.left, newNode);
          } else {
            if (node.right === null) node.right = newNode;else recursiveInsertNode(node.right, newNode);
          }
        };

        var newNode = new TreeNode(val);
        if (_classPrivateFieldGet(this, _root) === null) _classPrivateFieldSet(this, _root, newNode);else recursiveInsertNode(_classPrivateFieldGet(this, _root), newNode);
      }
    }, {
      key: "remove",
      value: function remove(val) {
        var removeNode = function removeNode(node, val) {
          if (node === null) return null;

          if (val < node.val) {
            node.left = removeNode(node.left, val);
            return node;
          }

          if (val > node.val) {
            node.right = removeNode(node.right, val);
            return node;
          } // If val matches node.val


          if (val === node.val) {
            // if node to delete doesn't have any children
            if (node.left === null && node.right === null) {
              node = null;
              return node;
            } // if node to delete has one right child


            if (node.left === null) {
              node = node.right;
              return node;
            } // if node to delete has one left child


            if (node.right === null) {
              node = node.left;
              return node;
            } // Deleting node with two children
            // find min node in right subtree. This will be a terminal node
            // traverse down right subtree and change the node.val to the min node val
            // Then call removeNode on the right subtree with the min.node val to delete the terminal node


            var sub = findMinNode(node.right);
            node.val = sub.val;
            node.right = removeNode(node.right, sub.val);
            return node;
          }
        };

        _classPrivateFieldSet(this, _root, removeNode(_classPrivateFieldGet(this, _root), val));
      } // searches tree for specified val and returns the node if found, null otherwise

    }, {
      key: "search",
      value: function search(val) {
        var recursiveSearch = function recursiveSearch(node, val) {
          if (node === null) return null;
          if (val < node.val) return recursiveSearch(node.left, val);
          if (val > node.val) return recursiveSearch(node.right, val);
          if (val === node.val) return node;
        };

        return recursiveSearch(_classPrivateFieldGet(this, _root), val);
      } // tree traversals
      // returns array of vals

    }, {
      key: "printInOrder",
      value: function printInOrder() {
        var res = DFSIterative.inOrder(_classPrivateFieldGet(this, _root));
        console.log(res);
        return res;
      }
    }, {
      key: "printPreOrder",
      value: function printPreOrder() {
        var res = DFSIterative.preOrder(_classPrivateFieldGet(this, _root));
        console.log(res);
        return res;
      }
    }, {
      key: "printPostOrder",
      value: function printPostOrder() {
        var res = DFSIterative.postOrder(_classPrivateFieldGet(this, _root));
        console.log(res);
        return res;
      }
    }, {
      key: "printLevelOrder",
      value: function printLevelOrder() {
        var res = BFS(_classPrivateFieldGet(this, _root));
        console.log(res);
        return res;
      }
    }, {
      key: "root",
      get: function get() {
        return _classPrivateFieldGet(this, _root);
      }
    }]);

    return BinarySearchTree;
  }();

  var _root = new WeakMap();

  return BinarySearchTree;
}();

module.exports = BinarySearchTree;

/***/ }),

/***/ "./node_modules/data_structures/dist/BinaryTreeTraversal.js":
/*!******************************************************************!*\
  !*** ./node_modules/data_structures/dist/BinaryTreeTraversal.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Stack = __webpack_require__(/*! ./Stack */ "./node_modules/data_structures/dist/Stack.js");

var Queue = __webpack_require__(/*! ./Queue */ "./node_modules/data_structures/dist/Queue.js");

var BFS = function BFS(root) {
  var res = [],
      queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    var node = queue.dequeue();
    res.push(node.val);
    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
  }

  return res;
};

var DFSRecursive = {
  inOrder: function inOrder(root) {
    var res = [];

    function recurse(node) {
      if (node !== null) {
        recurse(node.left);
        res.push(node.val);
        recurse(node.right);
      }
    }

    recurse(root);
    return res;
  },
  preOrder: function preOrder(root) {
    var res = [];

    function recurse(node) {
      if (node !== null) {
        res.push(node.val);
        recurse(node.left);
        recurse(node.right);
      }
    }

    recurse(root);
    return res;
  },
  postOrder: function postOrder(root) {
    var res = [];

    function recurse(node) {
      if (node !== null) {
        recurse(node.left);
        recurse(node.right);
        res.push(node.val);
      }
    }

    recurse(root);
    return res;
  }
};
var DFSIterative = {
  inOrder: function inOrder(root) {
    var res = [],
        stack = new Stack();
    var curr = root;

    while (!stack.isEmpty() || curr !== null) {
      if (curr !== null) {
        stack.push(curr);
        curr = curr.left;
      } else {
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
      }
    }

    return res;
  },
  preOrder: function preOrder(root) {
    var res = [],
        stack = new Stack();
    var curr;
    stack.push(root);

    while (!stack.isEmpty()) {
      curr = stack.pop();
      res.push(curr.val);
      if (curr.right !== null) stack.push(curr.right);
      if (curr.left !== null) stack.push(curr.left);
    }

    return res;
  },
  // Iterative post order using two stacks
  postOrder: function postOrder(root) {
    var res = [],
        stack1 = new Stack(),
        stack2 = new Stack();
    var curr;
    stack1.push(root);

    while (!stack1.isEmpty()) {
      curr = stack1.pop();
      stack2.push(curr);
      if (curr.left != null) stack1.push(curr.left);
      if (curr.right != null) stack1.push(curr.right);
    }

    while (!stack2.isEmpty()) {
      curr = stack2.pop();
      res.push(curr.val);
    }

    return res;
  }
};
module.exports = {
  BFS: BFS,
  DFSIterative: DFSIterative,
  DFSRecursive: DFSRecursive
};

/***/ }),

/***/ "./node_modules/data_structures/dist/Graph.js":
/*!****************************************************!*\
  !*** ./node_modules/data_structures/dist/Graph.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _require = __webpack_require__(/*! ./GraphTraversal */ "./node_modules/data_structures/dist/GraphTraversal.js"),
    _BFS = _require.BFS,
    DFSRecursive = _require.DFSRecursive;

var Graph = /*#__PURE__*/function () {
  function Graph() {
    _classCallCheck(this, Graph);

    _vertices.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _vertices, new Map());
  }

  _createClass(Graph, [{
    key: "addVertex",
    value: function addVertex(val) {
      if (_classPrivateFieldGet(this, _vertices).has(val)) throw "vertex with value ".concat(val, " already exists.");

      _classPrivateFieldGet(this, _vertices).set(val, new Set());
    }
  }, {
    key: "addEdge",
    value: function addEdge(vVal, eVal) {
      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) throw "vertex with value ".concat(vVal, " doesn't exist.");
      if (!_classPrivateFieldGet(this, _vertices).has(eVal)) throw "edge with value ".concat(eVal, " doesn't exist.");

      var edges = _classPrivateFieldGet(this, _vertices).get(vVal);

      if (edges.has(eVal)) throw "vertex already has edge ".concat(eVal, ".");
      edges.add(eVal);
    }
  }, {
    key: "getVertexEdges",
    value: function getVertexEdges(vVal) {
      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) throw "vertex with value ".concat(vVal, " doesn't exist.");
      return Array.from(_classPrivateFieldGet(this, _vertices).get(vVal));
    }
  }, {
    key: "hasEdge",
    value: function hasEdge(vVal, eVal) {
      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) return false;

      var edges = _classPrivateFieldGet(this, _vertices).get(vVal);

      return edges.has(eVal);
    }
  }, {
    key: "hasVertex",
    value: function hasVertex(vVal) {
      return _classPrivateFieldGet(this, _vertices).has(vVal);
    }
  }, {
    key: "removeEdge",
    value: function removeEdge(vVal, eVal) {
      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) throw "vertex with value ".concat(vVal, " doesn't exist.");

      var edges = _classPrivateFieldGet(this, _vertices).get(vVal);

      edges["delete"](eVal);
    }
  }, {
    key: "removeVertex",
    value: function removeVertex(vVal) {
      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) throw "vertex with value ".concat(vVal, " doesn't exist.");

      _classPrivateFieldGet(this, _vertices)["delete"](vVal);
    }
  }, {
    key: "BFS",
    value: function BFS(start, callback) {
      var graph = this;

      _BFS(start, graph, callback);
    }
  }, {
    key: "DFS",
    value: function DFS(start, callback) {
      var graph = this;
      DFSRecursive(start, graph, callback);
    }
  }, {
    key: "printGraph",
    value: function printGraph() {
      var graph = {};

      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _vertices)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              vVal = _step$value[0],
              vertexEdges = _step$value[1];

          graph[vVal] = [];
          var edges = '';

          var _iterator2 = _createForOfIteratorHelper(vertexEdges),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var edge = _step2.value;
              edges += "".concat(edge, " ");
              graph[vVal].push(edge);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          console.log("".concat(vVal, " -> ").concat(edges));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return graph;
    }
  }]);

  return Graph;
}();

var _vertices = new WeakMap();

module.exports = Graph;

/***/ }),

/***/ "./node_modules/data_structures/dist/GraphTraversal.js":
/*!*************************************************************!*\
  !*** ./node_modules/data_structures/dist/GraphTraversal.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Queue = __webpack_require__(/*! ./Queue */ "./node_modules/data_structures/dist/Queue.js");

var Stack = __webpack_require__(/*! ./Stack */ "./node_modules/data_structures/dist/Stack.js"); // breadth first search with queue


var BFS = function BFS(start, graph, callback) {
  // will keep track of new vertices with queue and visited nodes with a set
  var queue = new Queue(),
      visited = new Set();
  queue.enqueue(start); //vertex is visited if it gets pushed into queue.

  visited.add(start);

  while (!queue.isEmpty()) {
    var curr = queue.dequeue(),
        edges = graph.getVertexEdges(curr); // call callback on each vertex that gets dequeued

    callback(curr); //iterate over all edges and add the unvisited ones to queue

    var _iterator = _createForOfIteratorHelper(edges),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var eVal = _step.value;

        if (!visited.has(eVal)) {
          queue.enqueue(eVal);
          visited.add(eVal);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}; //iterative depth first search. Almost same as BFS. Only difference is the stack vs queue


var DFSIterative = function DFSIterative(start, graph, callback) {
  var stack = new Stack(),
      visited = new Set();
  stack.push(start);
  visited.add(start);

  while (!stack.isEmpty()) {
    var curr = stack.pop(),
        edges = graph.getVertexEdges(curr);
    callback(curr);

    var _iterator2 = _createForOfIteratorHelper(edges),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var eVal = _step2.value;

        if (!visited.has(eVal)) {
          stack.push(eVal);
          visited.add(eVal);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
}; // Recursive depth first search


var DFSRecursive = function DFSRecursive(start, graph, callback) {
  var visited = new Set();

  var recursiveDFS = function recursiveDFS(curr) {
    if (visited.has(curr)) return;
    callback(curr);
    visited.add(curr);
    var edges = graph.getVertexEdges(curr);

    var _iterator3 = _createForOfIteratorHelper(edges),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var eVal = _step3.value;

        if (!visited.has(eVal)) {
          recursiveDFS(eVal);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  };

  recursiveDFS(start);
};

module.exports = {
  BFS: BFS,
  DFSRecursive: DFSRecursive,
  DFSIterative: DFSIterative
};

/***/ }),

/***/ "./node_modules/data_structures/dist/HashTable.js":
/*!********************************************************!*\
  !*** ./node_modules/data_structures/dist/HashTable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* https://reactgo.com/hashtable-javascript/ */

/*
Rudimentary javascript hash table resolving collisions with separate chaining. 
Todo: Resolve conflicts with Linear Probing, Separate Chaining (linked lists)
*/
var HashTable = /*#__PURE__*/function () {
  function HashTable() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 42;

    _classCallCheck(this, HashTable);

    this.buckets = new Array(size);
    this.size = size;
  }

  _createClass(HashTable, [{
    key: "hash",
    value: function hash(key) {
      return key.toString().length % this.size;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var i = this.hash(key); // if no collision, set the bucket at position i to array

      if (!this.buckets[i]) this.buckets[i] = []; // push [key, val] into the array

      this.buckets[i].push([key, value]);
      return i;
    }
  }, {
    key: "get",
    value: function get(key) {
      var i = this.hash(key);
      if (!this.buckets[i]) return null; // check each pair inside the bucket at position i
      // if key matches key at pair[0] return the val at pair[1]

      var _iterator = _createForOfIteratorHelper(this.buckets[i]),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pair = _step.value;
          if (pair[0] === key) return pair[1];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return HashTable;
}();

module.exports = HashTable;

/***/ }),

/***/ "./node_modules/data_structures/dist/LinkedList.js":
/*!*********************************************************!*\
  !*** ./node_modules/data_structures/dist/LinkedList.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkedList = function () {
  // const head = Symbol('head') //To keep head as private in linked list
  // const size = Symbol('size')
  var ListNode = function ListNode(val) {
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, ListNode);

    this.val = val;
    this.next = next;
  };

  var LinkedList = /*#__PURE__*/function () {
    // Private static fields
    function LinkedList() {
      _classCallCheck(this, LinkedList);

      _head.set(this, {
        writable: true,
        value: void 0
      });

      _size.set(this, {
        writable: true,
        value: void 0
      });

      // The head and size property shouldn't be modifiable outside the class. So there should only be a getter. Class fields aren't supported by a lot of browsers. Use symbol instead to create private class variables if you're not using babel.
      _classPrivateFieldSet(this, _head, null);

      _classPrivateFieldSet(this, _size, 0); // this[head] = null
      // this[size] = 0

    } //getters


    _createClass(LinkedList, [{
      key: "fromArray",
      value: function fromArray(array) {
        var _iterator = _createForOfIteratorHelper(array),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var val = _step.value;
            this.appendToTail(val);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var result = [];

        var curr = _classPrivateFieldGet(this, _head);

        while (curr) {
          result.push(curr.val);
          curr = curr.next;
        }

        return result;
      } // T — O(1)

    }, {
      key: "prependToHead",
      value: function prependToHead(val) {
        var _this$size;

        var node = new ListNode(val);
        if (_classPrivateFieldGet(this, _head) == null) _classPrivateFieldSet(this, _head, node);else {
          var prevHead = _classPrivateFieldGet(this, _head);

          _classPrivateFieldSet(this, _head, node);

          _classPrivateFieldGet(this, _head).next = prevHead;
        }
        _classPrivateFieldSet(this, _size, (_this$size = +_classPrivateFieldGet(this, _size)) + 1), _this$size;
      } // T — O(n)

    }, {
      key: "appendToTail",
      value: function appendToTail(val) {
        var _this$size2;

        var node = new ListNode(val);
        if (_classPrivateFieldGet(this, _head) == null) _classPrivateFieldSet(this, _head, node);else {
          var curr = _classPrivateFieldGet(this, _head);

          while (curr.next) {
            curr = curr.next;
          }

          curr.next = node;
        }
        _classPrivateFieldSet(this, _size, (_this$size2 = +_classPrivateFieldGet(this, _size)) + 1), _this$size2;
      } // T — O(1)

    }, {
      key: "deleteFromHead",
      value: function deleteFromHead() {
        var _this$size3;

        var currHead = _classPrivateFieldGet(this, _head);

        if (!currHead) return null;

        _classPrivateFieldSet(this, _head, currHead.next);

        _classPrivateFieldSet(this, _size, (_this$size3 = +_classPrivateFieldGet(this, _size)) - 1), _this$size3;
        return currHead.val;
      } // T — O(n)

    }, {
      key: "deleteFromTail",
      value: function deleteFromTail() {
        var _this$size5;

        var curr = _classPrivateFieldGet(this, _head);

        if (!curr) return null; //Handle case of single node in linked list

        if (!curr.next) {
          var _this$size4;

          _classPrivateFieldSet(this, _head, null);

          _classPrivateFieldSet(this, _size, (_this$size4 = +_classPrivateFieldGet(this, _size)) - 1), _this$size4;
          return curr.val;
        }

        var prev = null;

        while (curr.next) {
          prev = curr;
          curr = curr.next;
        }

        prev.next = null;
        _classPrivateFieldSet(this, _size, (_this$size5 = +_classPrivateFieldGet(this, _size)) - 1), _this$size5;
        return curr.val;
      } // T — O(n). Non recursive version of deleteNodeRecursive

    }, {
      key: "deleteNode",
      value: function deleteNode(val) {
        var deleteMultiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var deleteCount = 0;

        var curr = _classPrivateFieldGet(this, _head),
            prev = null;

        while (curr) {
          if (curr.val === val) {
            var _this$size6;

            if (!prev) {
              //Don't need to garbage collect. This is Javascript, not C++
              // const temp = curr
              curr = curr.next; // temp.next = null

              _classPrivateFieldSet(this, _head, curr);
            } else {
              prev.next = curr.next; // curr.next = null

              curr = prev.next;
            }

            _classPrivateFieldSet(this, _size, (_this$size6 = +_classPrivateFieldGet(this, _size)) - 1), _this$size6;
            deleteCount++;
            if (!deleteMultiple) return true;
          } else {
            prev = curr;
            curr = curr.next;
          }
        }

        return !!deleteCount;
      }
    }, {
      key: "search",
      value: function search(val) {
        var curr = _classPrivateFieldGet(this, _head);

        while (curr) {
          if (curr.val === val) return true;
          curr = curr.next;
        }

        return false;
      }
    }, {
      key: "printList",
      value: function printList() {
        var result = this.toArray();
        console.log(result);
        return result;
      }
    }, {
      key: "head",
      get: function get() {
        return _classPrivateFieldGet(this, _head);
      }
    }, {
      key: "size",
      get: function get() {
        return _classPrivateFieldGet(this, _size);
      }
    }, {
      key: "tail",
      get: function get() {
        var curr = _classPrivateFieldGet(this, _head);

        if (!curr) return null;

        while (curr.next) {
          curr = curr.next;
        }

        return curr;
      }
    }]);

    return LinkedList;
  }();

  var _head = new WeakMap();

  var _size = new WeakMap();

  return LinkedList;
}();

module.exports = LinkedList;

/***/ }),

/***/ "./node_modules/data_structures/dist/Queue.js":
/*!****************************************************!*\
  !*** ./node_modules/data_structures/dist/Queue.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  var QueueNode = function QueueNode(data) {
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, QueueNode);

    this.data = data;
    this.next = next;
  };

  var Queue = /*#__PURE__*/function () {
    //Look in ./LinkedList.js to see other ways of declaring private static fields https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields#Private_fields
    function Queue() {
      _classCallCheck(this, Queue);

      _first.set(this, {
        writable: true,
        value: void 0
      });

      _last.set(this, {
        writable: true,
        value: void 0
      });

      _size.set(this, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldSet(this, _first, null);

      _classPrivateFieldSet(this, _last, null);

      _classPrivateFieldSet(this, _size, 0);
    }

    _createClass(Queue, [{
      key: "enqueue",
      value: function enqueue(item) {
        var _this$size;

        var node = new QueueNode(item);

        if (_classPrivateFieldGet(this, _last)) {
          _classPrivateFieldGet(this, _last).next = node;
        }

        _classPrivateFieldSet(this, _last, node);

        if (!_classPrivateFieldGet(this, _first)) _classPrivateFieldSet(this, _first, _classPrivateFieldGet(this, _last));
        _classPrivateFieldSet(this, _size, (_this$size = +_classPrivateFieldGet(this, _size)) + 1), _this$size;
      }
    }, {
      key: "dequeue",
      value: function dequeue() {
        var _this$size2;

        if (!_classPrivateFieldGet(this, _first)) return null;

        var data = _classPrivateFieldGet(this, _first).data;

        _classPrivateFieldSet(this, _first, _classPrivateFieldGet(this, _first).next);

        if (!_classPrivateFieldGet(this, _first)) _classPrivateFieldSet(this, _last, null);
        _classPrivateFieldSet(this, _size, (_this$size2 = +_classPrivateFieldGet(this, _size)) - 1), _this$size2;
        return data;
      }
    }, {
      key: "peek",
      value: function peek() {
        if (!_classPrivateFieldGet(this, _first)) return null;
        return _classPrivateFieldGet(this, _first).data;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return _classPrivateFieldGet(this, _first) === null;
      }
    }, {
      key: "printQueue",
      value: function printQueue() {
        var result = [];

        var curr = _classPrivateFieldGet(this, _first);

        while (curr) {
          result.push(curr.data);
          curr = curr.next;
        }

        console.log(result);
        return result;
      }
    }, {
      key: "size",
      get: function get() {
        return _classPrivateFieldGet(this, _size);
      }
    }]);

    return Queue;
  }();

  var _first = new WeakMap();

  var _last = new WeakMap();

  var _size = new WeakMap();

  return Queue;
}();

module.exports = Queue;

/***/ }),

/***/ "./node_modules/data_structures/dist/Stack.js":
/*!****************************************************!*\
  !*** ./node_modules/data_structures/dist/Stack.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  var top = Symbol('top'); //To keep top as private in stack

  var StackNode = function StackNode(data) {
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, StackNode);

    this.data = data;
    this.next = next;
  };

  var Stack = /*#__PURE__*/function () {
    function Stack() {
      _classCallCheck(this, Stack);

      this[top] = null;
    }

    _createClass(Stack, [{
      key: "push",
      value: function push(item) {
        var node = new StackNode(item);
        node.next = this[top];
        this[top] = node;
      }
    }, {
      key: "pop",
      value: function pop() {
        if (this[top] === null) return null;
        var item = this[top].data;
        this[top] = this[top].next;
        return item;
      }
    }, {
      key: "peek",
      value: function peek() {
        if (this[top] === null) return null;
        return this[top].data;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this[top] === null;
      }
    }, {
      key: "printStack",
      value: function printStack() {
        var result = [];
        var curr = this[top];

        while (curr) {
          result.push(curr.data);
          curr = curr.next;
        } // console.log(result)


        return result;
      }
    }, {
      key: "stackToString",
      value: function stackToString() {
        return JSON.stringify(this.printStack());
      }
    }]);

    return Stack;
  }();

  return Stack;
}();

module.exports = Stack;

/***/ }),

/***/ "./node_modules/data_structures/dist/Trie.js":
/*!***************************************************!*\
  !*** ./node_modules/data_structures/dist/Trie.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _temp, _root;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/* 

https://leetcode.com/problems/implement-trie-prefix-tree/solution/
Visualize a trie as a 26 by n matrix with one way relation between the letters in different levels. n is the length of the longest word in the trie.

words — deed, nom, noon

a  b  c  d  e  f  g  h  i  j  k  l  m  n  o ...
           ↘                            ↘ 
a  b  c  d  e  f  g  h  i  j  k  l  m  n  o ...
            ↓                           ↙ ↓
            ↓                         ↙   ↓
a  b  c  d  e  f  g  h  i  j  k  l  m  n  o ...
          ↙                             ↙
a  b  c  d  e  f  g  h  i  j  k  l  m  n  o ...

The root would look like:

const trie =
{
  d: { e: { e: { d: { isWord: true } } } },
  n: { o: { o: { n: { isWord: true } },
       m: { isWord: true } }
     }
}

*/
// We'll assume that the words provided will consist of letters only and are always lowercase
var Trie = (_temp = /*#__PURE__*/function () {
  function Trie() {
    _classCallCheck(this, Trie);

    _root.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _root, {});
  }

  _createClass(Trie, [{
    key: "_traverse",
    // helper. Change to private when private instance methods are supported
    value: function _traverse(word) {
      var curr = _classPrivateFieldGet(this, _root);

      var _iterator = _createForOfIteratorHelper(word),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ch = _step.value;
          if (!curr) return null;
          curr = curr[ch];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return curr;
    }
  }, {
    key: "insert",
    value: function insert(word) {
      var curr = _classPrivateFieldGet(this, _root);

      var _iterator2 = _createForOfIteratorHelper(word),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ch = _step2.value;
          curr[ch] = curr[ch] ? curr[ch] : {};
          curr = curr[ch];
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      curr.isWord = true;
    }
  }, {
    key: "search",
    value: function search(word) {
      var node = this._traverse(word);

      return node !== null && node.isWord === true;
    }
  }, {
    key: "startsWith",
    value: function startsWith(word) {
      return this._traverse(word) !== null;
    }
  }, {
    key: "root",
    get: function get() {
      return _classPrivateFieldGet(this, _root);
    }
  }]);

  return Trie;
}(), _root = new WeakMap(), _temp);
module.exports = Trie;

/***/ }),

/***/ "./node_modules/data_structures/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/data_structures/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LinkedList = __webpack_require__(/*! ./LinkedList */ "./node_modules/data_structures/dist/LinkedList.js");

var HashTable = __webpack_require__(/*! ./HashTable */ "./node_modules/data_structures/dist/HashTable.js");

var Stack = __webpack_require__(/*! ./Stack */ "./node_modules/data_structures/dist/Stack.js");

var Queue = __webpack_require__(/*! ./Queue */ "./node_modules/data_structures/dist/Queue.js");

var TreeTraversal = __webpack_require__(/*! ./BinaryTreeTraversal */ "./node_modules/data_structures/dist/BinaryTreeTraversal.js");

var BinarySearchTree = __webpack_require__(/*! ./BinarySearchTree */ "./node_modules/data_structures/dist/BinarySearchTree.js");

var Trie = __webpack_require__(/*! ./Trie */ "./node_modules/data_structures/dist/Trie.js");

var BinaryHeap = __webpack_require__(/*! ./BinaryHeap */ "./node_modules/data_structures/dist/BinaryHeap/index.js");

var GraphTraversal = __webpack_require__(/*! ./GraphTraversal */ "./node_modules/data_structures/dist/GraphTraversal.js");

var Graph = __webpack_require__(/*! ./Graph */ "./node_modules/data_structures/dist/Graph.js");

module.exports = _objectSpread(_objectSpread({
  LinkedList: LinkedList,
  HashTable: HashTable,
  Stack: Stack,
  Queue: Queue,
  TreeTraversal: TreeTraversal,
  BinarySearchTree: BinarySearchTree,
  Trie: Trie
}, BinaryHeap), {}, {
  GraphTraversal: GraphTraversal,
  Graph: Graph
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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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
      var title = _this.createElement('div', 'title', 'title'),
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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
/* harmony import */ var data_structures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data_structures */ "./node_modules/data_structures/dist/index.js");
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

      while (this.checkOutOfBounds(pos)) {
        this.setRandomDir();
        pos = {
          x: x + this.currDir[0],
          y: y + this.currDir[1]
        };
      } // objects keep getting stuck at the wall
      // if (this.checkOutOfBounds(pos)) this.bounceBack(pos)


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
/* harmony import */ var data_structures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data_structures */ "./node_modules/data_structures/dist/index.js");
/* harmony import */ var data_structures__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(data_structures__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovingObject */ "./src/MovingObject.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
var title = display.getElement('#title');
title.addEventListener('click', handleClickTitle, false);
var introDisplay = new _Display_Intro_js__WEBPACK_IMPORTED_MODULE_1__["default"](display.worldSize),
    tutorialDisplay = new _Display_Tutorial_js__WEBPACK_IMPORTED_MODULE_2__["default"](display.worldSize);

function handleClickTitle() {
  location.reload();
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRhX3N0cnVjdHVyZXMvZGlzdC9CaW5hcnlIZWFwL01heEJpbmFyeUhlYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGFfc3RydWN0dXJlcy9kaXN0L0JpbmFyeUhlYXAvTWluQmluYXJ5SGVhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0YV9zdHJ1Y3R1cmVzL2Rpc3QvQmluYXJ5SGVhcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0YV9zdHJ1Y3R1cmVzL2Rpc3QvQmluYXJ5U2VhcmNoVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0YV9zdHJ1Y3R1cmVzL2Rpc3QvQmluYXJ5VHJlZVRyYXZlcnNhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0YV9zdHJ1Y3R1cmVzL2Rpc3QvR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGFfc3RydWN0dXJlcy9kaXN0L0dyYXBoVHJhdmVyc2FsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRhX3N0cnVjdHVyZXMvZGlzdC9IYXNoVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGFfc3RydWN0dXJlcy9kaXN0L0xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGFfc3RydWN0dXJlcy9kaXN0L1F1ZXVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRhX3N0cnVjdHVyZXMvZGlzdC9TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0YV9zdHJ1Y3R1cmVzL2Rpc3QvVHJpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0YV9zdHJ1Y3R1cmVzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9DaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2hpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rpc3BsYXkvRE9NRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlzcGxheS9JbnRyby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlzcGxheS9UdXRvcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRW5lcmd5LmpzIiwid2VicGFjazovLy8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9Nb3ZpbmdPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJlZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9UdXRvcmlhbEdhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dvcmxkLmpzIiwid2VicGFjazovLy8uL3NyYy9Xb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWdzL2NoaWxkLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy9jb3VudC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ3MvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ3MvcGFyZW50LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy9wcmVkYXRvci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ3Mvd29ybS1sZWZ0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy93b3JtLXJpZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1ncy93b3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJDaGFpbiIsImRpc3BsYXkiLCJjb3VudCIsInNldENvdW50IiwidXBkYXRlQ2hhaW4iLCJNYXRoIiwibWF4IiwibWluIiwidXBkYXRlRWxlbWVudCIsInIiLCJjIiwidiIsImR4IiwiZHkiLCJDaGlsZCIsInBvcyIsInJhZGl1cyIsIndvcmxkIiwic3ByaXRlIiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidmVsIiwiY29sb3IiLCJjbGlja2luZyIsInBhcmVudCIsImNoYWluUG9zIiwiY2hpbGQiLCJuZXh0Q2hpbGQiLCJpbmRlcGVuZGVuY2UiLCJ4IiwieSIsImN1cnJEaXIiLCJzZXRSYW5kb21EaXIiLCJib3VuY2VCYWNrIiwicG9zQ2FjaGUiLCJtb3ZlcyIsImJpbmQiLCJoaXRzUHJlZGF0b3IiLCJnYW1lIiwiaXNJbmRlcGVuZGVudCIsImRlc3Ryb3lDaGlsZCIsImN1cnIiLCJkZWxldGVMYXN0Q2hpbGQiLCJlYXNpbmciLCJvZmZzZXQiLCJsZW5ndGgiLCJNb3ZpbmdPYmplY3QiLCJET01EaXNwbGF5Iiwic3JjIiwiY2xhc3NOYW1lIiwiaWQiLCJpbWciLCJJbWFnZSIsImNsYXNzTGlzdCIsImFkZCIsIndvcm1DbGFzcyIsIndvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJyZW1vdmUiLCJ0YWciLCJjb250ZW50IiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJuYW1lIiwiaW5uZXJUZXh0Iiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwidmFsIiwiZWxlbSIsImdldEVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsImhlYWRpbmciLCJhcHBlbmQiLCJ3b3JsZFdyYXBwZXIiLCJ3b3JsZFNpemUiLCJzdHlsZSIsImxlZ2VuZCIsImhhbmRsZUNsaWNrUmVwbGF5Iiwic2NvcmUiLCJoaWdoU2NvcmUiLCJnYW1lRW5kV3JhcHBlciIsImdhbWVFbmQiLCJ0b3AiLCJyZW5kZXJHYW1lT3Zlck1lc3NhZ2UiLCJyZW5kZXJFbmRTY29yZSIsInJlbmRlclJlcGxheUJ1dHRvbiIsInJlbW92ZUNoaWxkIiwibWVzc2FnZSIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbmRTY29yZVdyYXBwZXIiLCJlbmRTY29yZUxhYmVsIiwiZW5kU2NvcmUiLCJ0b1N0cmluZyIsImJlc3RTY29yZVdyYXBwZXIiLCJiZXN0U2NvcmVMYWJlbCIsImJlc3RTY29yZSIsInJlbmRlckNoYWluIiwicmVuZGVyRW5lcmd5IiwicmVuZGVyU2NvcmUiLCJlbmVyZ3lXcmFwcGVyIiwidXBkYXRlRW5lcmd5QmFyIiwiY2hhaW5XcmFwcGVyIiwiY291bnRJbWciLCJjcmVhdGVJbWFnZSIsImNoaWxkQ291bnRJbWciLCJjaGFpbiIsImVXIiwiaSIsImNoaWxkRWxlbWVudENvdW50IiwibGFzdENoaWxkIiwibGVmdCIsIndvcm1Db3VudCIsIndvcm1SaWdodCIsIndvcm1MIiwid29ybUxlZnQiLCJ3b3JtUiIsIkludHJvIiwiaGFuZGxlQ2xpY2tUdXRvcmlhbCIsImludHJvV3JhcHBlciIsImhhbmRsZUNsaWNrU3RhcnQiLCJsaW5rIiwiaW50cm9QaWMiLCJsb2dvIiwiaW50cm8iLCJpbnRyb01lc3NhZ2UiLCJUdXRvcmlhbCIsInNldHRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJwb3AiLCJjbGVhckVsZW1lbnQiLCJ0aW1lIiwicHVzaCIsInNldFRpbWVvdXQiLCJ0dXRvcmlhbFdyYXBwZXIiLCJtZXNzYWdlMSIsIm1lc3NhZ2UyIiwiY2hhbmdlTWVzc2FnZSIsInJlbmRlckxlZ2VuZCIsImNsZWFyUHJldlR1dCIsIkVuZXJneSIsImVuZXJneSIsInVwZGF0ZUVuZXJneSIsIkNoaWxkU3ByaXRlIiwiY2hpbGRJbWciLCJQYXJlbnRTcHJpdGUiLCJwYXJlbnRJbWFnZSIsIlByZWRhdG9yU3ByaXRlIiwicHJlZGF0b3JJbWFnZSIsIldvcm1TcHJpdGUiLCJ3b3JtSW1hZ2UiLCJHYW1lIiwiY2hpbGRDb3VudCIsInByZWRhdG9yQ291bnQiLCJlIiwibW91c2UiLCJjbGllbnRYIiwiY2xpZW50WSIsInJlbW92ZUFuaW1hdGlvbiIsImFuaW1hdGUiLCJnZXRDaGlsZENvdW50IiwiZGVjcmVtZW50Q291bnRCeUhhbGYiLCJ3b3JtcyIsImRlbGV0ZU5vZGUiLCJjaGlsZHJlbiIsInNwYXduQ2hpbGRyZW4iLCJ0b0FycmF5IiwicHJlZGF0b3JzIiwiY2hlY2tJblJhbmdlIiwiaGl0c0NoaWxkIiwicHJlZGF0b3IiLCJhdm9pZFByZWRhdG9yIiwiY2hlY2tDb2xsaXNpb25XaXRoUHJlZGF0b3IiLCJoaXRzV29ybSIsImluZGVwZW5kZW50QyIsInJhbmRvbVBvcyIsImdldFJhbmRvbVBvcyIsImFwcGVuZFRvVGFpbCIsIlByZWRhdG9yIiwiV29ybSIsInNwYXduUHJlZGF0b3JzIiwiaW5pdGlhbFBvcyIsIlBhcmVudCIsInNwYXduV29ybXMiLCJpbml0IiwiV29ybGQiLCJTY29yZSIsImluaXRDb3VudCIsInJlc2V0IiwiTGlua2VkTGlzdCIsInRpbWVTaW5jZVdvcm0iLCJpbml0V29ybGQiLCJpbml0Q2hhaW4iLCJpbml0UGFyZW50IiwiaW5pdENoaWxkcmVuIiwiaW5pdFByZWRhdG9ycyIsImluaXRXb3JtcyIsImFuaW1hdGlvblJlcSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJjYWxjdWxhdGVIaWdoU2NvcmUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbmRlckdhbWVFbmQiLCJyZXBsYXlHYW1lIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsInRpbWVzdGFtcCIsImdhbWVPdmVyIiwidGltZVBhc3NlZCIsImNsZWFyQ2FudmFzIiwic2V0Q2xpY2tpbmciLCJjbGVhckdhbWUiLCJyZXNldEdhbWUiLCJjbGVhckdhbWVFbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlTW91c2VVcCIsImluaXRFbmVyZ3kiLCJpbml0U2NvcmUiLCJ2ZWxvY2l0eSIsImRpciIsImluZGV4IiwiZ2V0UmFuZG9tSW50IiwicG9zc2libGVEaXJlY3Rpb25zIiwic2V0Q3VyckRpciIsImNoZWNrT3V0T2ZCb3VuZHMiLCJib3VuZHMiLCJyaWdodCIsImJvdHRvbSIsImNvbnN0cnVjdG9yIiwic2V0VmVsb2NpdHkiLCJuUG9zIiwiZHJhd0ltYWdlIiwiY2xpcHBlZFgiLCJjbGlwcGVkWSIsIm1vdmVzV2l0aEN1cnNvciIsImhpdHNQYXJlbnQiLCJvYmoiLCJjdXNoaW9uIiwib1BvcyIsIm9SIiwicmFuZ2VYIiwicmFuZ2VZIiwid2l0aGluUmFuZ2UiLCJpblJhbmdlIiwib2Zmc2V0cyIsIm9mZnNldEwiLCJvZmZzZXRUIiwicmVsYXRpdmVYIiwicmVsYXRpdmVZIiwieERpZmYiLCJ5RGlmZiIsInZlbFgiLCJ2ZWxZIiwiY2xpcHBlZFBvcyIsImNsaXBQb3MiLCJzZXRQb3MiLCJzaGlmdCIsInNldFBvc0NhY2hlIiwiaXNUdXRvcmlhbCIsImN1cnJQcmVkQ29scyIsImRlbGV0ZUZyb21UYWlsIiwic2V0Q2hhaW5Qb3MiLCJzZXROZXh0Q2hpbGQiLCJzZXRJbmRlcGVuZGVuY2UiLCJkZWNyZW1lbnRDb3VudCIsInNldFBhcmVudCIsInNlYXJjaCIsImluY3JlbWVudENvdW50IiwiY2FsY3VsYXRlU2NvcmUiLCJ0YWlsIiwiY29sbGlkZWQiLCJjb2xsaWRpbmciLCJpbmNsdWRlcyIsInNsaWNlIiwic2V0Q3VyclByZWRDb2xzIiwiaW5kZXhPZiIsInNwbGljZSIsImRlc3Ryb3lXb3JtIiwiZmlyc3RDaGlsZCIsImhlYWQiLCJzZXRTY29yZSIsInVwZGF0ZVNjb3JlIiwiY2hhaW5Db3VudCIsInNjb3JlVG9BZGQiLCJuZXdTY29yZSIsInNldEhpZ2hTY29yZSIsIlR1dG9yaWFsR2FtZSIsIm9uVHV0b3JpYWxFbmQiLCJ0dXRvcmlhbE5vIiwiaW5pdFR1dG9yaWFsMSIsImluaXRUdXRvcmlhbDIiLCJpbml0VHV0b3JpYWwzIiwiaW5pdFR1dG9yaWFsNCIsImtleUNvZGUiLCJoYW5kbGVQcmVzc0VudGVyIiwiaGFuZGxlUHJlc3NTcGFjZSIsIm51bWJlciIsImluaXRUdXRvcmlhbDAiLCJzZXRUdXRvcmlhbE5vIiwicmVuZGVyTW92ZVBhcmVudFR1dCIsInNldElzVHV0b3JpYWwiLCJoYW5kbGVQcmVzc0tleSIsInJlbmRlckNoaWxkcmVuVHV0IiwiZGVsZXRlQWxsQ2hpbGRyZW4iLCJwcmVkIiwicmVuZGVyUHJlZGF0b3JUdXQiLCJyZW5kZXJDbGlja1BhcmVudFR1dCIsInJlbmRlcldvcm1UdXQiLCJjbGVhclR1dG9yaWFsIiwiZ2V0UmFuZG9tQmV0d2VlbiIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJnZXRPZmZzZXRzIiwiZ2V0Qm91bmRzIiwic2V0T2Zmc2V0cyIsInNldEJvdW5kcyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlbmRlckdhbWUiLCJyZW5kZXJUaXRsZSIsInJlbmRlcldvcmxkIiwiaGFuZGxlQ2xpY2tUaXRsZSIsImludHJvRGlzcGxheSIsInR1dG9yaWFsRGlzcGxheSIsImxvY2F0aW9uIiwicmVsb2FkIiwidHV0b3JpYWxHYW1lIiwiY2xlYXJJbnRybyIsImluaXRUdXRvcmlhbCIsInJlbmRlckludHJvIiwicmVuZGVyVHV0b3JpYWxCdXR0b24iLCJyZW5kZXJTdGFydExpbmsiLCJmbG9vciIsInJhbmRvbSIsImNlaWwiLCJudW0iLCJjYWxjdWxhdGVIeXBvdGVudXNlIiwiYSIsImIiLCJzcXJ0IiwicG93IiwiZWFzZUxpbmVhciIsInQiLCJkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7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QTNCLENBQVA7QUFDRCxDLENBRUQ7OztBQUNBLFNBQVNHLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXVCSixDQUF2QixFQUEwQm5WLENBQTFCLEVBQTZCd1YsQ0FBN0IsRUFBZ0M7QUFDOUIsU0FBUXhWLENBQUMsR0FBR3VWLENBQUwsR0FBVUMsQ0FBVixHQUFjTCxDQUFyQjtBQUNEIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TY2hvb2xiZWxsJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogJ1NjaG9vbGJlbGwnLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG59XFxuXFxuYnV0dG9uLmJ0biB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luOiA1cHggYXV0bztcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jdGl0bGU6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdhbWUge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi50aXRsZSBoMSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW46IDMycHg7XFxufVxcblxcbi53b3JsZC13cmFwcGVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubGVnZW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogOThweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5sZWdlbmQgPiBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5sZWdlbmQtdGV4dCB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG59XFxuXFxuZGl2LmNoYWluLXdyYXBwZXIge1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5jaGFpbi13cmFwcGVyIC5pbWFnZSNjaGFpbi1jb3VudCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uY2hhaW4td3JhcHBlciAuY2hhaW4ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiN3b3JsZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDI1NSwgMTk0KTtcXG59XFxuXFxuLndvcm0tbGVmdCB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLndvcm0tcmlnaHQge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5hbmltYXRlIHtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgZWFzZTtcXG59XFxuXFxuLmVuZC13cmFwcGVyLFxcbi5pbnRyby13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaW50cm8td3JhcHBlciB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmludHJvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW50cm8tbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnN0YXJ0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWFyZ2luOiAxNnB4IGF1dG87XFxufVxcblxcbi5zdGFydDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ2FtZS1lbmQge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAzMHB4IDgwcHg7XFxufVxcblxcbi5nYW1lLWVuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5nYW1lLWVuZCBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZ2FtZS1lbmQgPiAud3JhcHBlciA+IC5zY29yZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuLnR1dG9yaWFsLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA5OHB4O1xcbn1cXG5cXG4udHV0b3JpYWwtbWVzc2FnZSB7XFxuICB3aWR0aDogNjAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG4jdHV0LW1zZy0xIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XG5cbnZhciBNYXhCaW5hcnlIZWFwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWF4QmluYXJ5SGVhcCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWF4QmluYXJ5SGVhcCk7XG5cbiAgICBfY29udGVudC5zZXQodGhpcywge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogdm9pZCAwXG4gICAgfSk7XG5cbiAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2NvbnRlbnQsIFtdKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXhCaW5hcnlIZWFwLCBbe1xuICAgIGtleTogXCJfc3dhcFwiLFxuICAgIC8vIF9tZXRob2RzIGFyZSBoZWxwZXJzLiBDaGFuZ2UgdG8gcHJpdmF0ZSB3aGVuIHByaXZhdGUgaW5zdGFuY2UgbWV0aG9kcyBhcmUgc3VwcG9ydGVkXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zd2FwKGksIGopIHtcbiAgICAgIHZhciB0ZW1wID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXTtcblxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtpXSA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbal07XG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2pdID0gdGVtcDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2J1YmJsZVVwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9idWJibGVVcChpKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV07XG5cbiAgICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgICB2YXIgcCA9IE1hdGguZmxvb3IoKGkgLSAxKSAvIDIpLFxuICAgICAgICAgICAgcGFyZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtwXTtcblxuICAgICAgICBpZiAoZWxlbWVudCA+IHBhcmVudCkge1xuICAgICAgICAgIHRoaXMuX3N3YXAocCwgaSk7XG5cbiAgICAgICAgICBpID0gcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfc2lua0Rvd25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NpbmtEb3duKHApIHtcbiAgICAgIHZhciBlbGVtZW50ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtwXSxcbiAgICAgICAgICBsYXN0SW5kZXggPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChwIDwgbGFzdEluZGV4KSB7XG4gICAgICAgIHZhciByID0gMiAqIHAgKyAyLFxuICAgICAgICAgICAgbCA9IHIgLSAxO1xuICAgICAgICB2YXIgc3dhcEluZGV4ID0gbnVsbCxcbiAgICAgICAgICAgIGxlZnQgPSB2b2lkIDAsXG4gICAgICAgICAgICByaWdodCA9IHZvaWQgMCxcbiAgICAgICAgICAgIG1pbiA9IGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGwgPD0gbGFzdEluZGV4KSB7XG4gICAgICAgICAgbGVmdCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbbF07XG4gICAgICAgICAgaWYgKGxlZnQgPiBlbGVtZW50KSBzd2FwSW5kZXggPSBsO1xuICAgICAgICAgIG1pbiA9IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAociA8PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgICByaWdodCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbcl07XG4gICAgICAgICAgaWYgKHJpZ2h0ID4gbWluKSBzd2FwSW5kZXggPSByO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN3YXBJbmRleCA9PSBudWxsKSBicmVhaztcblxuICAgICAgICB0aGlzLl9zd2FwKHAsIHN3YXBJbmRleCk7XG5cbiAgICAgICAgcCA9IHN3YXBJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHJpbnRNYXhIZWFwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50TWF4SGVhcCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkpO1xuICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluc2VydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnQoZWxlbWVudCkge1xuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wdXNoKGVsZW1lbnQpO1xuXG4gICAgICB0aGlzLl9idWJibGVVcChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0TWF4XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RNYXgoKSB7XG4gICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggPD0gMCkgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgbGFzdEluZGV4ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwO1xuICAgICAgaWYgKGZpcnN0SW5kZXggIT09IGxhc3RJbmRleCkgdGhpcy5fc3dhcChmaXJzdEluZGV4LCBsYXN0SW5kZXgpO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wb3AoKTtcblxuICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9zaW5rRG93bigwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldICE9PSBlbGVtZW50KSBjb250aW51ZTtcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHRoaXMuc2l6ZSAtIDE7XG5cbiAgICAgICAgaWYgKGkgPT09IGxhc3RJbmRleCkge1xuICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucG9wKCk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N3YXAoaSwgbGFzdEluZGV4KTtcblxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLnBvcCgpO1xuXG4gICAgICAgIHRoaXMuX2J1YmJsZVVwKGkpO1xuXG4gICAgICAgIHRoaXMuX3NpbmtEb3duKGkpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaXplXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1heFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2l6ZSA/IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbMF0gOiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXhCaW5hcnlIZWFwO1xufSgpO1xuXG52YXIgX2NvbnRlbnQgPSBuZXcgV2Vha01hcCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1heEJpbmFyeUhlYXA7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cblxuLy8gaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1XQ20zVHFTY0JNOFxuLy8gQW55IG5vZGUgaGFzIGEgdmFsdWUgYXQgbGVhc3QgYXMgc21hbGwgYXMgdGhlIHZhbHVlcyBpbiB0aGF0IG5vZGUncyBjaGlsZHJlbi5cbi8vIFNvdXJjZTogaHR0cHM6Ly9lbG9xdWVudGphdmFzY3JpcHQubmV0LzFzdF9lZGl0aW9uL2FwcGVuZGl4Mi5odG1sXG52YXIgTWluQmluYXJ5SGVhcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1pbkJpbmFyeUhlYXAoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbkJpbmFyeUhlYXApO1xuXG4gICAgX2NvbnRlbnQuc2V0KHRoaXMsIHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IHZvaWQgMFxuICAgIH0pO1xuXG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9jb250ZW50LCBbXSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWluQmluYXJ5SGVhcCwgW3tcbiAgICBrZXk6IFwiX3N3YXBcIixcbiAgICAvLyBfbWV0aG9kcyBhcmUgaGVscGVycy4gQ2hhbmdlIHRvIHByaXZhdGUgd2hlbiBwcml2YXRlIGluc3RhbmNlIG1ldGhvZHMgYXJlIHN1cHBvcnRlZFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc3dhcChpLCBqKSB7XG4gICAgICB2YXIgdGVtcCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV07XG5cbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV0gPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2pdO1xuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVtqXSA9IHRlbXA7XG4gICAgfVxuICAgIC8qIGJ1YmJsZVVwIFxuICAgICAgMS4gQ29tcGFyZSBpdGVtIHRvIHBhcmVudCBhbmQgY2hlY2sgaWYgaXQncyBsZXNzIHRoYW4gcGFyZW50LiBcbiAgICAgIDIuIElmIGl0IGlzIGxlc3MgdGhhbiBwYXJlbnQsIHN3YXAgaXQuIFxuICAgICAgMy4gTm93LCBjb21wYXJlIHRvIHRoZSBuZXcgcGFyZW50IGFuZCBrZWVwIHN3YXBwaW5nIHVudGlsIGl0IGVpdGhlciByZWFjaGVzIHRoZSB0b3Agb2YgdGhlIGhlYXAgb3IgaXQgaXMgPj0gcGFyZW50LiBcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2J1YmJsZVVwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9idWJibGVVcChpKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbaV07XG4gICAgICAvKiBcbiAgICAgICAgaW5kZXhpbmcgZnJvbSAwXG4gICAgICAgIHAgaXMgdGhlIGluZGV4IG9mIHRoZSBwYXJlbnRcbiAgICAgICAgaSBpcyB0aGUgaW5kZXggb2YgZWl0aGVyIGxlZnQgb3IgcmlnaHQgY2hpbGRcbiAgICAgICAgbCBpcyBpbmRleCBvZiBsZWZ0IGNoaWxkXG4gICAgICAgIHIgaXMgdGhlIGluZGV4IG9mIHRoZSByaWdodCBjaGlsZFxuICAgICAgICAgbCA9IDJwICsgMVxuICAgICAgICByID0gMnAgKyAyXG4gICAgICAgIHAgPSBNYXRoLmZsb29yKChpLTEpLzIpXG4gICAgICAgKi9cblxuXG4gICAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgICAgdmFyIHAgPSBNYXRoLmZsb29yKChpIC0gMSkgLyAyKSxcbiAgICAgICAgICAgIHBhcmVudCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudClbcF07XG5cbiAgICAgICAgaWYgKGVsZW1lbnQgPCBwYXJlbnQpIHtcbiAgICAgICAgICB0aGlzLl9zd2FwKHAsIGkpOyAvLyBtYWtlIHN1cmUgdG8gY2hhbmdlIGluZGV4IHRvIHRoYXQgb2YgcGFyZW50IGFmdGVyIHN3YXBwaW5nXG5cblxuICAgICAgICAgIGkgPSBwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9zaW5rRG93blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2lua0Rvd24ocCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW3BdLFxuICAgICAgICAgIGxhc3RJbmRleCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHAgPCBsYXN0SW5kZXgpIHtcbiAgICAgICAgLy8gSW5mbyBpbiBnZXR0aW5nIGluZGV4IGluIGJ1YmJsZVVwXG4gICAgICAgIHZhciByID0gMiAqIHAgKyAyLFxuICAgICAgICAgICAgbCA9IHIgLSAxOyAvL09yIDIgKiBwICsgMVxuXG4gICAgICAgIHZhciBzd2FwSW5kZXggPSBudWxsLFxuICAgICAgICAgICAgbGVmdCA9IHZvaWQgMCxcbiAgICAgICAgICAgIHJpZ2h0ID0gdm9pZCAwLFxuICAgICAgICAgICAgbWluID0gZWxlbWVudDsgLy9zdGFydCBvdXQgYXNzdW1pbmcgdGhlIG1pbiBiZXR3ZWVuIGxlZnQsIHJpZ2h0LCBlbGVtZW50IGlzIHRoZSBlbGVtZW50XG4gICAgICAgIC8vIGlmIGVsZW1lbnQgaGFzIGxlZnQgY2hpbGQsIGNvbXBhcmVcbiAgICAgICAgLy8gaWYgbGVmdCBjaGlsZCA8IGVsZW1lbnQsIHNldCBzd2FwSW5kZXggdG8gdGhlIGxlZnQgaW5kZXggKGwpIGFuZCBtaW4gdG8gbGVmdFxuXG4gICAgICAgIGlmIChsIDw9IGxhc3RJbmRleCkge1xuICAgICAgICAgIGxlZnQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2xdO1xuICAgICAgICAgIGlmIChsZWZ0IDwgZWxlbWVudCkgc3dhcEluZGV4ID0gbDtcbiAgICAgICAgICBtaW4gPSBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHIgPD0gbGFzdEluZGV4KSB7XG4gICAgICAgICAgcmlnaHQgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW3JdOyAvLyBjb21wYXJlIHRoZSByaWdodCB0byB0aGUgbWluIHNvIGZhciB0byBtYWtlIHN1cmUgdGhlIG1pbiBvZiB0aGUgdGhyZWUgaXRlbXMgZ2V0cyBidWJibGVkIHVwIHdoaWxlIHRoZSBwYXJlbnQgZ2V0cyBzdW5rXG5cbiAgICAgICAgICBpZiAocmlnaHQgPCBtaW4pIHN3YXBJbmRleCA9IHI7XG4gICAgICAgIH0gLy8gcGFyZW50IGlzIHNtYWxsZXIgdGhhbiBib3RoIGxlZnQgYW5kIHJpZ2h0IGNoaWxkIHNvIGJyZWFrXG5cblxuICAgICAgICBpZiAoc3dhcEluZGV4ID09IG51bGwpIGJyZWFrO1xuXG4gICAgICAgIHRoaXMuX3N3YXAocCwgc3dhcEluZGV4KTsgLy8gc2V0IHRoZSBwYXJlbnQgaW5kZXggdG8gdGhlIHN3YXAgaW5kZXggc28gaXQgd2lsbCBjb250aW51ZSB0byBzaW5rIGRvd25cblxuXG4gICAgICAgIHAgPSBzd2FwSW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInByaW50TWluSGVhcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludE1pbkhlYXAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpKTtcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpO1xuICAgIH1cbiAgICAvKiBpbnNlcnRcbiAgICAgIDEuIGluc2VydCBuZXcgaXRlbSBpbnRvIHRoaXMuI2NvbnRlbnRcbiAgICAgIDIuIGJ1YmJsZSBpdCB1cCBcbiAgICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnNlcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0KGVsZW1lbnQpIHtcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucHVzaChlbGVtZW50KTtcblxuICAgICAgdGhpcy5fYnViYmxlVXAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgLyogZXh0cmFjdE1pblxuICAgICAgMS4gc3dhcCBmaXJzdCBhbmQgbGFzdCBpdGVtcyBpZiB0aGlzLiNjb250ZW50Lmxlbmd0aCA+IDEgKG9yIGZpcnN0ICE9PSBsYXN0KVxuICAgICAgMi4gcG9wIG91dCBsYXN0IGl0ZW0gb2YgYXJyYXkgYW5kIHNhdmUgaXQgaW4gcmVzdWx0XG4gICAgICAzLiBJZiBsZW5ndGggaXMgbW9yZSB0aGFuIG9uZSwgYnViYmxlIHRoZSBmaXJzdCBpdGVtIGRvd25cbiAgICAgIDQuIFJldHVybiB0aGUgcmVzdWx0IHRoYXQgd2FzIHNhdmVkIFxuICAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RNaW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdE1pbigpIHtcbiAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aCA8PSAwKSByZXR1cm4gbnVsbDsgLy9yZXR1cm4gbnVsbCBpZiBhcnJheSBpcyBlbXB0eVxuXG4gICAgICB2YXIgbGFzdEluZGV4ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5sZW5ndGggLSAxLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwO1xuICAgICAgaWYgKGZpcnN0SW5kZXggIT09IGxhc3RJbmRleCkgdGhpcy5fc3dhcChmaXJzdEluZGV4LCBsYXN0SW5kZXgpO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wb3AoKTtcblxuICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9zaW5rRG93bigwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICAgIC8vIGlmIGN1cnIgaXRlbSBkb2Vzbid0IG1hdGNoIHRoZSBlbGVtZW50IHRvIHJlbW92ZSwgY29udGludWUgc2VhcmNoaW5nXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpW2ldICE9PSBlbGVtZW50KSBjb250aW51ZTsgLy8gaWYgaXQgZG9lcyBtYXRjaFxuXG4gICAgICAgIHZhciBsYXN0SW5kZXggPSB0aGlzLnNpemUgLSAxOyAvLyBpZiBpdCdzIHRoZSBsYXN0IGl0ZW0sIHBvcCBpdCBhbmQgYnJlYWtcblxuICAgICAgICBpZiAoaSA9PT0gbGFzdEluZGV4KSB7XG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KS5wb3AoKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIGlmIGl0J3Mgbm90IHRoZSBsYXN0IGl0ZW1cbiAgICAgICAgLy8gIDEuIHN3YXAgaXQgd2l0aCB0aGUgbGFzdCBpdGVtXG4gICAgICAgIC8vICAyLiBwb3AgdGhlIHN3YXBwZWQgbGFzdCBpdGVtXG4gICAgICAgIC8vICAzLiBUaGVuIGNhbGwgYnViYmxlVXAgYW5kIHNpbmtEb3duLlxuXG5cbiAgICAgICAgdGhpcy5fc3dhcChpLCBsYXN0SW5kZXgpO1xuXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY29udGVudCkucG9wKCk7XG5cbiAgICAgICAgdGhpcy5fYnViYmxlVXAoaSk7XG5cbiAgICAgICAgdGhpcy5fc2lua0Rvd24oaSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNpemVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NvbnRlbnQpLmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWluXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaXplID8gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jb250ZW50KVswXSA6IG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1pbkJpbmFyeUhlYXA7XG59KCk7XG5cbnZhciBfY29udGVudCA9IG5ldyBXZWFrTWFwKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWluQmluYXJ5SGVhcDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIE1pbkJpbmFyeUhlYXAgPSByZXF1aXJlKCcuL01pbkJpbmFyeUhlYXAnKTtcblxudmFyIE1heEJpbmFyeUhlYXAgPSByZXF1aXJlKCcuL01heEJpbmFyeUhlYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1pbkJpbmFyeUhlYXA6IE1pbkJpbmFyeUhlYXAsXG4gIE1heEJpbmFyeUhlYXA6IE1heEJpbmFyeUhlYXBcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9CaW5hcnlUcmVlVHJhdmVyc2FsJyksXG4gICAgQkZTID0gX3JlcXVpcmUuQkZTLFxuICAgIERGU0l0ZXJhdGl2ZSA9IF9yZXF1aXJlLkRGU0l0ZXJhdGl2ZTtcblxudmFyIEJpbmFyeVNlYXJjaFRyZWUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmaW5kTWluTm9kZSA9IGZ1bmN0aW9uIGZpbmRNaW5Ob2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSByZXR1cm4gbm9kZTtlbHNlIHJldHVybiBmaW5kTWluTm9kZShub2RlLmxlZnQpO1xuICB9O1xuXG4gIHZhciBUcmVlTm9kZSA9IGZ1bmN0aW9uIFRyZWVOb2RlKHZhbCkge1xuICAgIHZhciBsZWZ0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICAgIHZhciByaWdodCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmVlTm9kZSk7XG5cbiAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfTtcblxuICB2YXIgQmluYXJ5U2VhcmNoVHJlZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmluYXJ5U2VhcmNoVHJlZSgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCaW5hcnlTZWFyY2hUcmVlKTtcblxuICAgICAgX3Jvb3Quc2V0KHRoaXMsIHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICAgIH0pO1xuXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3Jvb3QsIG51bGwpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCaW5hcnlTZWFyY2hUcmVlLCBbe1xuICAgICAga2V5OiBcImluc2VydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydCh2YWwpIHtcbiAgICAgICAgdmFyIHJlY3Vyc2l2ZUluc2VydE5vZGUgPSBmdW5jdGlvbiByZWN1cnNpdmVJbnNlcnROb2RlKG5vZGUsIG5ld05vZGUpIHtcbiAgICAgICAgICBpZiAobmV3Tm9kZS52YWwgPCBub2RlLnZhbCkge1xuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCkgbm9kZS5sZWZ0ID0gbmV3Tm9kZTtlbHNlIHJlY3Vyc2l2ZUluc2VydE5vZGUobm9kZS5sZWZ0LCBuZXdOb2RlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQgPT09IG51bGwpIG5vZGUucmlnaHQgPSBuZXdOb2RlO2Vsc2UgcmVjdXJzaXZlSW5zZXJ0Tm9kZShub2RlLnJpZ2h0LCBuZXdOb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG5ld05vZGUgPSBuZXcgVHJlZU5vZGUodmFsKTtcbiAgICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCkgPT09IG51bGwpIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfcm9vdCwgbmV3Tm9kZSk7ZWxzZSByZWN1cnNpdmVJbnNlcnROb2RlKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCksIG5ld05vZGUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUodmFsKSB7XG4gICAgICAgIHZhciByZW1vdmVOb2RlID0gZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlLCB2YWwpIHtcbiAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICBpZiAodmFsIDwgbm9kZS52YWwpIHtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IHJlbW92ZU5vZGUobm9kZS5sZWZ0LCB2YWwpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbCA+IG5vZGUudmFsKSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gcmVtb3ZlTm9kZShub2RlLnJpZ2h0LCB2YWwpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgfSAvLyBJZiB2YWwgbWF0Y2hlcyBub2RlLnZhbFxuXG5cbiAgICAgICAgICBpZiAodmFsID09PSBub2RlLnZhbCkge1xuICAgICAgICAgICAgLy8gaWYgbm9kZSB0byBkZWxldGUgZG9lc24ndCBoYXZlIGFueSBjaGlsZHJlblxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIG5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH0gLy8gaWYgbm9kZSB0byBkZWxldGUgaGFzIG9uZSByaWdodCBjaGlsZFxuXG5cbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfSAvLyBpZiBub2RlIHRvIGRlbGV0ZSBoYXMgb25lIGxlZnQgY2hpbGRcblxuXG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xuICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH0gLy8gRGVsZXRpbmcgbm9kZSB3aXRoIHR3byBjaGlsZHJlblxuICAgICAgICAgICAgLy8gZmluZCBtaW4gbm9kZSBpbiByaWdodCBzdWJ0cmVlLiBUaGlzIHdpbGwgYmUgYSB0ZXJtaW5hbCBub2RlXG4gICAgICAgICAgICAvLyB0cmF2ZXJzZSBkb3duIHJpZ2h0IHN1YnRyZWUgYW5kIGNoYW5nZSB0aGUgbm9kZS52YWwgdG8gdGhlIG1pbiBub2RlIHZhbFxuICAgICAgICAgICAgLy8gVGhlbiBjYWxsIHJlbW92ZU5vZGUgb24gdGhlIHJpZ2h0IHN1YnRyZWUgd2l0aCB0aGUgbWluLm5vZGUgdmFsIHRvIGRlbGV0ZSB0aGUgdGVybWluYWwgbm9kZVxuXG5cbiAgICAgICAgICAgIHZhciBzdWIgPSBmaW5kTWluTm9kZShub2RlLnJpZ2h0KTtcbiAgICAgICAgICAgIG5vZGUudmFsID0gc3ViLnZhbDtcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSByZW1vdmVOb2RlKG5vZGUucmlnaHQsIHN1Yi52YWwpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfcm9vdCwgcmVtb3ZlTm9kZShfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpLCB2YWwpKTtcbiAgICAgIH0gLy8gc2VhcmNoZXMgdHJlZSBmb3Igc3BlY2lmaWVkIHZhbCBhbmQgcmV0dXJucyB0aGUgbm9kZSBpZiBmb3VuZCwgbnVsbCBvdGhlcndpc2VcblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZWFyY2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2godmFsKSB7XG4gICAgICAgIHZhciByZWN1cnNpdmVTZWFyY2ggPSBmdW5jdGlvbiByZWN1cnNpdmVTZWFyY2gobm9kZSwgdmFsKSB7XG4gICAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgICAgIGlmICh2YWwgPCBub2RlLnZhbCkgcmV0dXJuIHJlY3Vyc2l2ZVNlYXJjaChub2RlLmxlZnQsIHZhbCk7XG4gICAgICAgICAgaWYgKHZhbCA+IG5vZGUudmFsKSByZXR1cm4gcmVjdXJzaXZlU2VhcmNoKG5vZGUucmlnaHQsIHZhbCk7XG4gICAgICAgICAgaWYgKHZhbCA9PT0gbm9kZS52YWwpIHJldHVybiBub2RlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZWN1cnNpdmVTZWFyY2goX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSwgdmFsKTtcbiAgICAgIH0gLy8gdHJlZSB0cmF2ZXJzYWxzXG4gICAgICAvLyByZXR1cm5zIGFycmF5IG9mIHZhbHNcblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwcmludEluT3JkZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludEluT3JkZXIoKSB7XG4gICAgICAgIHZhciByZXMgPSBERlNJdGVyYXRpdmUuaW5PcmRlcihfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Jvb3QpKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicHJpbnRQcmVPcmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50UHJlT3JkZXIoKSB7XG4gICAgICAgIHZhciByZXMgPSBERlNJdGVyYXRpdmUucHJlT3JkZXIoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInByaW50UG9zdE9yZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRQb3N0T3JkZXIoKSB7XG4gICAgICAgIHZhciByZXMgPSBERlNJdGVyYXRpdmUucG9zdE9yZGVyKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwcmludExldmVsT3JkZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludExldmVsT3JkZXIoKSB7XG4gICAgICAgIHZhciByZXMgPSBCRlMoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJvb3RcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQmluYXJ5U2VhcmNoVHJlZTtcbiAgfSgpO1xuXG4gIHZhciBfcm9vdCA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgcmV0dXJuIEJpbmFyeVNlYXJjaFRyZWU7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmluYXJ5U2VhcmNoVHJlZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFN0YWNrID0gcmVxdWlyZSgnLi9TdGFjaycpO1xuXG52YXIgUXVldWUgPSByZXF1aXJlKCcuL1F1ZXVlJyk7XG5cbnZhciBCRlMgPSBmdW5jdGlvbiBCRlMocm9vdCkge1xuICB2YXIgcmVzID0gW10sXG4gICAgICBxdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuICBxdWV1ZS5lbnF1ZXVlKHJvb3QpO1xuXG4gIHdoaWxlICghcXVldWUuaXNFbXB0eSgpKSB7XG4gICAgdmFyIG5vZGUgPSBxdWV1ZS5kZXF1ZXVlKCk7XG4gICAgcmVzLnB1c2gobm9kZS52YWwpO1xuICAgIGlmIChub2RlLmxlZnQpIHF1ZXVlLmVucXVldWUobm9kZS5sZWZ0KTtcbiAgICBpZiAobm9kZS5yaWdodCkgcXVldWUuZW5xdWV1ZShub2RlLnJpZ2h0KTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG52YXIgREZTUmVjdXJzaXZlID0ge1xuICBpbk9yZGVyOiBmdW5jdGlvbiBpbk9yZGVyKHJvb3QpIHtcbiAgICB2YXIgcmVzID0gW107XG5cbiAgICBmdW5jdGlvbiByZWN1cnNlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHJlY3Vyc2Uobm9kZS5sZWZ0KTtcbiAgICAgICAgcmVzLnB1c2gobm9kZS52YWwpO1xuICAgICAgICByZWN1cnNlKG5vZGUucmlnaHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlY3Vyc2Uocm9vdCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSxcbiAgcHJlT3JkZXI6IGZ1bmN0aW9uIHByZU9yZGVyKHJvb3QpIHtcbiAgICB2YXIgcmVzID0gW107XG5cbiAgICBmdW5jdGlvbiByZWN1cnNlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHJlcy5wdXNoKG5vZGUudmFsKTtcbiAgICAgICAgcmVjdXJzZShub2RlLmxlZnQpO1xuICAgICAgICByZWN1cnNlKG5vZGUucmlnaHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlY3Vyc2Uocm9vdCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSxcbiAgcG9zdE9yZGVyOiBmdW5jdGlvbiBwb3N0T3JkZXIocm9vdCkge1xuICAgIHZhciByZXMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIHJlY3Vyc2Uobm9kZSkge1xuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcmVjdXJzZShub2RlLmxlZnQpO1xuICAgICAgICByZWN1cnNlKG5vZGUucmlnaHQpO1xuICAgICAgICByZXMucHVzaChub2RlLnZhbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVjdXJzZShyb290KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59O1xudmFyIERGU0l0ZXJhdGl2ZSA9IHtcbiAgaW5PcmRlcjogZnVuY3Rpb24gaW5PcmRlcihyb290KSB7XG4gICAgdmFyIHJlcyA9IFtdLFxuICAgICAgICBzdGFjayA9IG5ldyBTdGFjaygpO1xuICAgIHZhciBjdXJyID0gcm9vdDtcblxuICAgIHdoaWxlICghc3RhY2suaXNFbXB0eSgpIHx8IGN1cnIgIT09IG51bGwpIHtcbiAgICAgIGlmIChjdXJyICE9PSBudWxsKSB7XG4gICAgICAgIHN0YWNrLnB1c2goY3Vycik7XG4gICAgICAgIGN1cnIgPSBjdXJyLmxlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyID0gc3RhY2sucG9wKCk7XG4gICAgICAgIHJlcy5wdXNoKGN1cnIudmFsKTtcbiAgICAgICAgY3VyciA9IGN1cnIucmlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfSxcbiAgcHJlT3JkZXI6IGZ1bmN0aW9uIHByZU9yZGVyKHJvb3QpIHtcbiAgICB2YXIgcmVzID0gW10sXG4gICAgICAgIHN0YWNrID0gbmV3IFN0YWNrKCk7XG4gICAgdmFyIGN1cnI7XG4gICAgc3RhY2sucHVzaChyb290KTtcblxuICAgIHdoaWxlICghc3RhY2suaXNFbXB0eSgpKSB7XG4gICAgICBjdXJyID0gc3RhY2sucG9wKCk7XG4gICAgICByZXMucHVzaChjdXJyLnZhbCk7XG4gICAgICBpZiAoY3Vyci5yaWdodCAhPT0gbnVsbCkgc3RhY2sucHVzaChjdXJyLnJpZ2h0KTtcbiAgICAgIGlmIChjdXJyLmxlZnQgIT09IG51bGwpIHN0YWNrLnB1c2goY3Vyci5sZWZ0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9LFxuICAvLyBJdGVyYXRpdmUgcG9zdCBvcmRlciB1c2luZyB0d28gc3RhY2tzXG4gIHBvc3RPcmRlcjogZnVuY3Rpb24gcG9zdE9yZGVyKHJvb3QpIHtcbiAgICB2YXIgcmVzID0gW10sXG4gICAgICAgIHN0YWNrMSA9IG5ldyBTdGFjaygpLFxuICAgICAgICBzdGFjazIgPSBuZXcgU3RhY2soKTtcbiAgICB2YXIgY3VycjtcbiAgICBzdGFjazEucHVzaChyb290KTtcblxuICAgIHdoaWxlICghc3RhY2sxLmlzRW1wdHkoKSkge1xuICAgICAgY3VyciA9IHN0YWNrMS5wb3AoKTtcbiAgICAgIHN0YWNrMi5wdXNoKGN1cnIpO1xuICAgICAgaWYgKGN1cnIubGVmdCAhPSBudWxsKSBzdGFjazEucHVzaChjdXJyLmxlZnQpO1xuICAgICAgaWYgKGN1cnIucmlnaHQgIT0gbnVsbCkgc3RhY2sxLnB1c2goY3Vyci5yaWdodCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKCFzdGFjazIuaXNFbXB0eSgpKSB7XG4gICAgICBjdXJyID0gc3RhY2syLnBvcCgpO1xuICAgICAgcmVzLnB1c2goY3Vyci52YWwpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQkZTOiBCRlMsXG4gIERGU0l0ZXJhdGl2ZTogREZTSXRlcmF0aXZlLFxuICBERlNSZWN1cnNpdmU6IERGU1JlY3Vyc2l2ZVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IHRocm93IF9lMjsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UzKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMzsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpOyB9IGlmIChkZXNjcmlwdG9yLmdldCkgeyByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7IH1cblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkgeyB2YXIgZGVzY3JpcHRvciA9IHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTsgaWYgKCFkZXNjcmlwdG9yKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpOyB9IGlmIChkZXNjcmlwdG9yLnNldCkgeyBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IH0gZWxzZSB7IGlmICghZGVzY3JpcHRvci53cml0YWJsZSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFwiKTsgfSBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7IH0gcmV0dXJuIHZhbHVlOyB9XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4vR3JhcGhUcmF2ZXJzYWwnKSxcbiAgICBfQkZTID0gX3JlcXVpcmUuQkZTLFxuICAgIERGU1JlY3Vyc2l2ZSA9IF9yZXF1aXJlLkRGU1JlY3Vyc2l2ZTtcblxudmFyIEdyYXBoID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR3JhcGgoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyYXBoKTtcblxuICAgIF92ZXJ0aWNlcy5zZXQodGhpcywge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogdm9pZCAwXG4gICAgfSk7XG5cbiAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3ZlcnRpY2VzLCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdyYXBoLCBbe1xuICAgIGtleTogXCJhZGRWZXJ0ZXhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVmVydGV4KHZhbCkge1xuICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2YWwpKSB0aHJvdyBcInZlcnRleCB3aXRoIHZhbHVlIFwiLmNvbmNhdCh2YWwsIFwiIGFscmVhZHkgZXhpc3RzLlwiKTtcblxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuc2V0KHZhbCwgbmV3IFNldCgpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkRWRnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFZGdlKHZWYWwsIGVWYWwpIHtcbiAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKHZWYWwpKSB0aHJvdyBcInZlcnRleCB3aXRoIHZhbHVlIFwiLmNvbmNhdCh2VmFsLCBcIiBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuaGFzKGVWYWwpKSB0aHJvdyBcImVkZ2Ugd2l0aCB2YWx1ZSBcIi5jb25jYXQoZVZhbCwgXCIgZG9lc24ndCBleGlzdC5cIik7XG5cbiAgICAgIHZhciBlZGdlcyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmdldCh2VmFsKTtcblxuICAgICAgaWYgKGVkZ2VzLmhhcyhlVmFsKSkgdGhyb3cgXCJ2ZXJ0ZXggYWxyZWFkeSBoYXMgZWRnZSBcIi5jb25jYXQoZVZhbCwgXCIuXCIpO1xuICAgICAgZWRnZXMuYWRkKGVWYWwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRWZXJ0ZXhFZGdlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWZXJ0ZXhFZGdlcyh2VmFsKSB7XG4gICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2VmFsKSkgdGhyb3cgXCJ2ZXJ0ZXggd2l0aCB2YWx1ZSBcIi5jb25jYXQodlZhbCwgXCIgZG9lc24ndCBleGlzdC5cIik7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5nZXQodlZhbCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNFZGdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0VkZ2UodlZhbCwgZVZhbCkge1xuICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModlZhbCkpIHJldHVybiBmYWxzZTtcblxuICAgICAgdmFyIGVkZ2VzID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF92ZXJ0aWNlcykuZ2V0KHZWYWwpO1xuXG4gICAgICByZXR1cm4gZWRnZXMuaGFzKGVWYWwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNWZXJ0ZXhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzVmVydGV4KHZWYWwpIHtcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModlZhbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUVkZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRWRnZSh2VmFsLCBlVmFsKSB7XG4gICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmhhcyh2VmFsKSkgdGhyb3cgXCJ2ZXJ0ZXggd2l0aCB2YWx1ZSBcIi5jb25jYXQodlZhbCwgXCIgZG9lc24ndCBleGlzdC5cIik7XG5cbiAgICAgIHZhciBlZGdlcyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpLmdldCh2VmFsKTtcblxuICAgICAgZWRnZXNbXCJkZWxldGVcIl0oZVZhbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVZlcnRleFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVWZXJ0ZXgodlZhbCkge1xuICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKS5oYXModlZhbCkpIHRocm93IFwidmVydGV4IHdpdGggdmFsdWUgXCIuY29uY2F0KHZWYWwsIFwiIGRvZXNuJ3QgZXhpc3QuXCIpO1xuXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3ZlcnRpY2VzKVtcImRlbGV0ZVwiXSh2VmFsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiQkZTXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIEJGUyhzdGFydCwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBncmFwaCA9IHRoaXM7XG5cbiAgICAgIF9CRlMoc3RhcnQsIGdyYXBoLCBjYWxsYmFjayk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkRGU1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBERlMoc3RhcnQsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgZ3JhcGggPSB0aGlzO1xuICAgICAgREZTUmVjdXJzaXZlKHN0YXJ0LCBncmFwaCwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwcmludEdyYXBoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50R3JhcGgoKSB7XG4gICAgICB2YXIgZ3JhcGggPSB7fTtcblxuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfdmVydGljZXMpKSxcbiAgICAgICAgICBfc3RlcDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgX3N0ZXAkdmFsdWUgPSBfc2xpY2VkVG9BcnJheShfc3RlcC52YWx1ZSwgMiksXG4gICAgICAgICAgICAgIHZWYWwgPSBfc3RlcCR2YWx1ZVswXSxcbiAgICAgICAgICAgICAgdmVydGV4RWRnZXMgPSBfc3RlcCR2YWx1ZVsxXTtcblxuICAgICAgICAgIGdyYXBoW3ZWYWxdID0gW107XG4gICAgICAgICAgdmFyIGVkZ2VzID0gJyc7XG5cbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHZlcnRleEVkZ2VzKSxcbiAgICAgICAgICAgICAgX3N0ZXAyO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgICAgIHZhciBlZGdlID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgICAgICAgICBlZGdlcyArPSBcIlwiLmNvbmNhdChlZGdlLCBcIiBcIik7XG4gICAgICAgICAgICAgIGdyYXBoW3ZWYWxdLnB1c2goZWRnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IyLmUoZXJyKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgX2l0ZXJhdG9yMi5mKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc29sZS5sb2coXCJcIi5jb25jYXQodlZhbCwgXCIgLT4gXCIpLmNvbmNhdChlZGdlcykpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBncmFwaDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR3JhcGg7XG59KCk7XG5cbnZhciBfdmVydGljZXMgPSBuZXcgV2Vha01hcCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoOyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbnZhciBRdWV1ZSA9IHJlcXVpcmUoJy4vUXVldWUnKTtcblxudmFyIFN0YWNrID0gcmVxdWlyZSgnLi9TdGFjaycpOyAvLyBicmVhZHRoIGZpcnN0IHNlYXJjaCB3aXRoIHF1ZXVlXG5cblxudmFyIEJGUyA9IGZ1bmN0aW9uIEJGUyhzdGFydCwgZ3JhcGgsIGNhbGxiYWNrKSB7XG4gIC8vIHdpbGwga2VlcCB0cmFjayBvZiBuZXcgdmVydGljZXMgd2l0aCBxdWV1ZSBhbmQgdmlzaXRlZCBub2RlcyB3aXRoIGEgc2V0XG4gIHZhciBxdWV1ZSA9IG5ldyBRdWV1ZSgpLFxuICAgICAgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgcXVldWUuZW5xdWV1ZShzdGFydCk7IC8vdmVydGV4IGlzIHZpc2l0ZWQgaWYgaXQgZ2V0cyBwdXNoZWQgaW50byBxdWV1ZS5cblxuICB2aXNpdGVkLmFkZChzdGFydCk7XG5cbiAgd2hpbGUgKCFxdWV1ZS5pc0VtcHR5KCkpIHtcbiAgICB2YXIgY3VyciA9IHF1ZXVlLmRlcXVldWUoKSxcbiAgICAgICAgZWRnZXMgPSBncmFwaC5nZXRWZXJ0ZXhFZGdlcyhjdXJyKTsgLy8gY2FsbCBjYWxsYmFjayBvbiBlYWNoIHZlcnRleCB0aGF0IGdldHMgZGVxdWV1ZWRcblxuICAgIGNhbGxiYWNrKGN1cnIpOyAvL2l0ZXJhdGUgb3ZlciBhbGwgZWRnZXMgYW5kIGFkZCB0aGUgdW52aXNpdGVkIG9uZXMgdG8gcXVldWVcblxuICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlZGdlcyksXG4gICAgICAgIF9zdGVwO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgIHZhciBlVmFsID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhlVmFsKSkge1xuICAgICAgICAgIHF1ZXVlLmVucXVldWUoZVZhbCk7XG4gICAgICAgICAgdmlzaXRlZC5hZGQoZVZhbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgfVxuICB9XG59OyAvL2l0ZXJhdGl2ZSBkZXB0aCBmaXJzdCBzZWFyY2guIEFsbW9zdCBzYW1lIGFzIEJGUy4gT25seSBkaWZmZXJlbmNlIGlzIHRoZSBzdGFjayB2cyBxdWV1ZVxuXG5cbnZhciBERlNJdGVyYXRpdmUgPSBmdW5jdGlvbiBERlNJdGVyYXRpdmUoc3RhcnQsIGdyYXBoLCBjYWxsYmFjaykge1xuICB2YXIgc3RhY2sgPSBuZXcgU3RhY2soKSxcbiAgICAgIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHN0YWNrLnB1c2goc3RhcnQpO1xuICB2aXNpdGVkLmFkZChzdGFydCk7XG5cbiAgd2hpbGUgKCFzdGFjay5pc0VtcHR5KCkpIHtcbiAgICB2YXIgY3VyciA9IHN0YWNrLnBvcCgpLFxuICAgICAgICBlZGdlcyA9IGdyYXBoLmdldFZlcnRleEVkZ2VzKGN1cnIpO1xuICAgIGNhbGxiYWNrKGN1cnIpO1xuXG4gICAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlZGdlcyksXG4gICAgICAgIF9zdGVwMjtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgICB2YXIgZVZhbCA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICBpZiAoIXZpc2l0ZWQuaGFzKGVWYWwpKSB7XG4gICAgICAgICAgc3RhY2sucHVzaChlVmFsKTtcbiAgICAgICAgICB2aXNpdGVkLmFkZChlVmFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIF9pdGVyYXRvcjIuZigpO1xuICAgIH1cbiAgfVxufTsgLy8gUmVjdXJzaXZlIGRlcHRoIGZpcnN0IHNlYXJjaFxuXG5cbnZhciBERlNSZWN1cnNpdmUgPSBmdW5jdGlvbiBERlNSZWN1cnNpdmUoc3RhcnQsIGdyYXBoLCBjYWxsYmFjaykge1xuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcblxuICB2YXIgcmVjdXJzaXZlREZTID0gZnVuY3Rpb24gcmVjdXJzaXZlREZTKGN1cnIpIHtcbiAgICBpZiAodmlzaXRlZC5oYXMoY3VycikpIHJldHVybjtcbiAgICBjYWxsYmFjayhjdXJyKTtcbiAgICB2aXNpdGVkLmFkZChjdXJyKTtcbiAgICB2YXIgZWRnZXMgPSBncmFwaC5nZXRWZXJ0ZXhFZGdlcyhjdXJyKTtcblxuICAgIHZhciBfaXRlcmF0b3IzID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZWRnZXMpLFxuICAgICAgICBfc3RlcDM7XG5cbiAgICB0cnkge1xuICAgICAgZm9yIChfaXRlcmF0b3IzLnMoKTsgIShfc3RlcDMgPSBfaXRlcmF0b3IzLm4oKSkuZG9uZTspIHtcbiAgICAgICAgdmFyIGVWYWwgPSBfc3RlcDMudmFsdWU7XG5cbiAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhlVmFsKSkge1xuICAgICAgICAgIHJlY3Vyc2l2ZURGUyhlVmFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2l0ZXJhdG9yMy5lKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIF9pdGVyYXRvcjMuZigpO1xuICAgIH1cbiAgfTtcblxuICByZWN1cnNpdmVERlMoc3RhcnQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEJGUzogQkZTLFxuICBERlNSZWN1cnNpdmU6IERGU1JlY3Vyc2l2ZSxcbiAgREZTSXRlcmF0aXZlOiBERlNJdGVyYXRpdmVcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKiBodHRwczovL3JlYWN0Z28uY29tL2hhc2h0YWJsZS1qYXZhc2NyaXB0LyAqL1xuXG4vKlxuUnVkaW1lbnRhcnkgamF2YXNjcmlwdCBoYXNoIHRhYmxlIHJlc29sdmluZyBjb2xsaXNpb25zIHdpdGggc2VwYXJhdGUgY2hhaW5pbmcuIFxuVG9kbzogUmVzb2x2ZSBjb25mbGljdHMgd2l0aCBMaW5lYXIgUHJvYmluZywgU2VwYXJhdGUgQ2hhaW5pbmcgKGxpbmtlZCBsaXN0cylcbiovXG52YXIgSGFzaFRhYmxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSGFzaFRhYmxlKCkge1xuICAgIHZhciBzaXplID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiA0MjtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIYXNoVGFibGUpO1xuXG4gICAgdGhpcy5idWNrZXRzID0gbmV3IEFycmF5KHNpemUpO1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSGFzaFRhYmxlLCBbe1xuICAgIGtleTogXCJoYXNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc2goa2V5KSB7XG4gICAgICByZXR1cm4ga2V5LnRvU3RyaW5nKCkubGVuZ3RoICUgdGhpcy5zaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBpID0gdGhpcy5oYXNoKGtleSk7IC8vIGlmIG5vIGNvbGxpc2lvbiwgc2V0IHRoZSBidWNrZXQgYXQgcG9zaXRpb24gaSB0byBhcnJheVxuXG4gICAgICBpZiAoIXRoaXMuYnVja2V0c1tpXSkgdGhpcy5idWNrZXRzW2ldID0gW107IC8vIHB1c2ggW2tleSwgdmFsXSBpbnRvIHRoZSBhcnJheVxuXG4gICAgICB0aGlzLmJ1Y2tldHNbaV0ucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICB2YXIgaSA9IHRoaXMuaGFzaChrZXkpO1xuICAgICAgaWYgKCF0aGlzLmJ1Y2tldHNbaV0pIHJldHVybiBudWxsOyAvLyBjaGVjayBlYWNoIHBhaXIgaW5zaWRlIHRoZSBidWNrZXQgYXQgcG9zaXRpb24gaVxuICAgICAgLy8gaWYga2V5IG1hdGNoZXMga2V5IGF0IHBhaXJbMF0gcmV0dXJuIHRoZSB2YWwgYXQgcGFpclsxXVxuXG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodGhpcy5idWNrZXRzW2ldKSxcbiAgICAgICAgICBfc3RlcDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgcGFpciA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIGlmIChwYWlyWzBdID09PSBrZXkpIHJldHVybiBwYWlyWzFdO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhhc2hUYWJsZTtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoVGFibGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTsgfSBpZiAoZGVzY3JpcHRvci5nZXQpIHsgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjcmlwdG9yLnZhbHVlOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHsgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7IGlmICghZGVzY3JpcHRvcikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTsgfSBpZiAoZGVzY3JpcHRvci5zZXQpIHsgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpOyB9IGVsc2UgeyBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcIik7IH0gZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlOyB9IHJldHVybiB2YWx1ZTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTGlua2VkTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gY29uc3QgaGVhZCA9IFN5bWJvbCgnaGVhZCcpIC8vVG8ga2VlcCBoZWFkIGFzIHByaXZhdGUgaW4gbGlua2VkIGxpc3RcbiAgLy8gY29uc3Qgc2l6ZSA9IFN5bWJvbCgnc2l6ZScpXG4gIHZhciBMaXN0Tm9kZSA9IGZ1bmN0aW9uIExpc3ROb2RlKHZhbCkge1xuICAgIHZhciBuZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpc3ROb2RlKTtcblxuICAgIHRoaXMudmFsID0gdmFsO1xuICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gIH07XG5cbiAgdmFyIExpbmtlZExpc3QgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgc3RhdGljIGZpZWxkc1xuICAgIGZ1bmN0aW9uIExpbmtlZExpc3QoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlua2VkTGlzdCk7XG5cbiAgICAgIF9oZWFkLnNldCh0aGlzLCB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdm9pZCAwXG4gICAgICB9KTtcblxuICAgICAgX3NpemUuc2V0KHRoaXMsIHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUaGUgaGVhZCBhbmQgc2l6ZSBwcm9wZXJ0eSBzaG91bGRuJ3QgYmUgbW9kaWZpYWJsZSBvdXRzaWRlIHRoZSBjbGFzcy4gU28gdGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBnZXR0ZXIuIENsYXNzIGZpZWxkcyBhcmVuJ3Qgc3VwcG9ydGVkIGJ5IGEgbG90IG9mIGJyb3dzZXJzLiBVc2Ugc3ltYm9sIGluc3RlYWQgdG8gY3JlYXRlIHByaXZhdGUgY2xhc3MgdmFyaWFibGVzIGlmIHlvdSdyZSBub3QgdXNpbmcgYmFiZWwuXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIG51bGwpO1xuXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIDApOyAvLyB0aGlzW2hlYWRdID0gbnVsbFxuICAgICAgLy8gdGhpc1tzaXplXSA9IDBcblxuICAgIH0gLy9nZXR0ZXJzXG5cblxuICAgIF9jcmVhdGVDbGFzcyhMaW5rZWRMaXN0LCBbe1xuICAgICAga2V5OiBcImZyb21BcnJheVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZyb21BcnJheShhcnJheSkge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoYXJyYXkpLFxuICAgICAgICAgICAgX3N0ZXA7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgICAgdmFyIHZhbCA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRUb1RhaWwodmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ0b0FycmF5XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdG9BcnJheSgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcblxuICAgICAgICB3aGlsZSAoY3Vycikge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnIudmFsKTtcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gLy8gVCDigJQgTygxKVxuXG4gICAgfSwge1xuICAgICAga2V5OiBcInByZXBlbmRUb0hlYWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVwZW5kVG9IZWFkKHZhbCkge1xuICAgICAgICB2YXIgX3RoaXMkc2l6ZTtcblxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBMaXN0Tm9kZSh2YWwpO1xuICAgICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKSA9PSBudWxsKSBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIG5vZGUpO2Vsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SGVhZCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XG5cbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIG5vZGUpO1xuXG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKS5uZXh0ID0gcHJldkhlYWQ7XG4gICAgICAgIH1cbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZSA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSArIDEpLCBfdGhpcyRzaXplO1xuICAgICAgfSAvLyBUIOKAlCBPKG4pXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYXBwZW5kVG9UYWlsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVG9UYWlsKHZhbCkge1xuICAgICAgICB2YXIgX3RoaXMkc2l6ZTI7XG5cbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgTGlzdE5vZGUodmFsKTtcbiAgICAgICAgaWYgKF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCkgPT0gbnVsbCkgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9oZWFkLCBub2RlKTtlbHNlIHtcbiAgICAgICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XG5cbiAgICAgICAgICB3aGlsZSAoY3Vyci5uZXh0KSB7XG4gICAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1cnIubmV4dCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZTIgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgKyAxKSwgX3RoaXMkc2l6ZTI7XG4gICAgICB9IC8vIFQg4oCUIE8oMSlcblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWxldGVGcm9tSGVhZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZUZyb21IZWFkKCkge1xuICAgICAgICB2YXIgX3RoaXMkc2l6ZTM7XG5cbiAgICAgICAgdmFyIGN1cnJIZWFkID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcblxuICAgICAgICBpZiAoIWN1cnJIZWFkKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIGN1cnJIZWFkLm5leHQpO1xuXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemUzID0gK19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSkpIC0gMSksIF90aGlzJHNpemUzO1xuICAgICAgICByZXR1cm4gY3VyckhlYWQudmFsO1xuICAgICAgfSAvLyBUIOKAlCBPKG4pXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVsZXRlRnJvbVRhaWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxldGVGcm9tVGFpbCgpIHtcbiAgICAgICAgdmFyIF90aGlzJHNpemU1O1xuXG4gICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcblxuICAgICAgICBpZiAoIWN1cnIpIHJldHVybiBudWxsOyAvL0hhbmRsZSBjYXNlIG9mIHNpbmdsZSBub2RlIGluIGxpbmtlZCBsaXN0XG5cbiAgICAgICAgaWYgKCFjdXJyLm5leHQpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkc2l6ZTQ7XG5cbiAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2hlYWQsIG51bGwpO1xuXG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZTQgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgLSAxKSwgX3RoaXMkc2l6ZTQ7XG4gICAgICAgICAgcmV0dXJuIGN1cnIudmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByZXYgPSBudWxsO1xuXG4gICAgICAgIHdoaWxlIChjdXJyLm5leHQpIHtcbiAgICAgICAgICBwcmV2ID0gY3VycjtcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldi5uZXh0ID0gbnVsbDtcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZTUgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgLSAxKSwgX3RoaXMkc2l6ZTU7XG4gICAgICAgIHJldHVybiBjdXJyLnZhbDtcbiAgICAgIH0gLy8gVCDigJQgTyhuKS4gTm9uIHJlY3Vyc2l2ZSB2ZXJzaW9uIG9mIGRlbGV0ZU5vZGVSZWN1cnNpdmVcblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWxldGVOb2RlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVsZXRlTm9kZSh2YWwpIHtcbiAgICAgICAgdmFyIGRlbGV0ZU11bHRpcGxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICAgICAgdmFyIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCksXG4gICAgICAgICAgICBwcmV2ID0gbnVsbDtcblxuICAgICAgICB3aGlsZSAoY3Vycikge1xuICAgICAgICAgIGlmIChjdXJyLnZhbCA9PT0gdmFsKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkc2l6ZTY7XG5cbiAgICAgICAgICAgIGlmICghcHJldikge1xuICAgICAgICAgICAgICAvL0Rvbid0IG5lZWQgdG8gZ2FyYmFnZSBjb2xsZWN0LiBUaGlzIGlzIEphdmFzY3JpcHQsIG5vdCBDKytcbiAgICAgICAgICAgICAgLy8gY29uc3QgdGVtcCA9IGN1cnJcbiAgICAgICAgICAgICAgY3VyciA9IGN1cnIubmV4dDsgLy8gdGVtcC5uZXh0ID0gbnVsbFxuXG4gICAgICAgICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfaGVhZCwgY3Vycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcmV2Lm5leHQgPSBjdXJyLm5leHQ7IC8vIGN1cnIubmV4dCA9IG51bGxcblxuICAgICAgICAgICAgICBjdXJyID0gcHJldi5uZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpemUsIChfdGhpcyRzaXplNiA9ICtfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3NpemUpKSAtIDEpLCBfdGhpcyRzaXplNjtcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50Kys7XG4gICAgICAgICAgICBpZiAoIWRlbGV0ZU11bHRpcGxlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldiA9IGN1cnI7XG4gICAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhIWRlbGV0ZUNvdW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZWFyY2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2godmFsKSB7XG4gICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9oZWFkKTtcblxuICAgICAgICB3aGlsZSAoY3Vycikge1xuICAgICAgICAgIGlmIChjdXJyLnZhbCA9PT0gdmFsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwcmludExpc3RcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludExpc3QoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnRvQXJyYXkoKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaGVhZFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2hlYWQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzaXplXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInRhaWxcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICB2YXIgY3VyciA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaGVhZCk7XG5cbiAgICAgICAgaWYgKCFjdXJyKSByZXR1cm4gbnVsbDtcblxuICAgICAgICB3aGlsZSAoY3Vyci5uZXh0KSB7XG4gICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjdXJyO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMaW5rZWRMaXN0O1xuICB9KCk7XG5cbiAgdmFyIF9oZWFkID0gbmV3IFdlYWtNYXAoKTtcblxuICB2YXIgX3NpemUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIHJldHVybiBMaW5rZWRMaXN0O1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmtlZExpc3Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgUXVldWVOb2RlID0gZnVuY3Rpb24gUXVldWVOb2RlKGRhdGEpIHtcbiAgICB2YXIgbmV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBRdWV1ZU5vZGUpO1xuXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLm5leHQgPSBuZXh0O1xuICB9O1xuXG4gIHZhciBRdWV1ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgLy9Mb29rIGluIC4vTGlua2VkTGlzdC5qcyB0byBzZWUgb3RoZXIgd2F5cyBvZiBkZWNsYXJpbmcgcHJpdmF0ZSBzdGF0aWMgZmllbGRzIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0NsYXNzZXMvQ2xhc3NfZmllbGRzI1ByaXZhdGVfZmllbGRzXG4gICAgZnVuY3Rpb24gUXVldWUoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUXVldWUpO1xuXG4gICAgICBfZmlyc3Quc2V0KHRoaXMsIHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICAgIH0pO1xuXG4gICAgICBfbGFzdC5zZXQodGhpcywge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxuICAgICAgfSk7XG5cbiAgICAgIF9zaXplLnNldCh0aGlzLCB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdm9pZCAwXG4gICAgICB9KTtcblxuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9maXJzdCwgbnVsbCk7XG5cbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfbGFzdCwgbnVsbCk7XG5cbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgMCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFF1ZXVlLCBbe1xuICAgICAga2V5OiBcImVucXVldWVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnF1ZXVlKGl0ZW0pIHtcbiAgICAgICAgdmFyIF90aGlzJHNpemU7XG5cbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgUXVldWVOb2RlKGl0ZW0pO1xuXG4gICAgICAgIGlmIChfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2xhc3QpKSB7XG4gICAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9sYXN0KS5uZXh0ID0gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfbGFzdCwgbm9kZSk7XG5cbiAgICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KSkgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9maXJzdCwgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9sYXN0KSk7XG4gICAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2l6ZSwgKF90aGlzJHNpemUgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgKyAxKSwgX3RoaXMkc2l6ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVxdWV1ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcXVldWUoKSB7XG4gICAgICAgIHZhciBfdGhpcyRzaXplMjtcblxuICAgICAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpKSByZXR1cm4gbnVsbDtcblxuICAgICAgICB2YXIgZGF0YSA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpLmRhdGE7XG5cbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9maXJzdCwgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCkubmV4dCk7XG5cbiAgICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KSkgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9sYXN0LCBudWxsKTtcbiAgICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaXplLCAoX3RoaXMkc2l6ZTIgPSArX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaXplKSkgLSAxKSwgX3RoaXMkc2l6ZTI7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwZWVrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcGVlaygpIHtcbiAgICAgICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2ZpcnN0KS5kYXRhO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0VtcHR5XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZmlyc3QpID09PSBudWxsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwcmludFF1ZXVlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRRdWV1ZSgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9maXJzdCk7XG5cbiAgICAgICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChjdXJyLmRhdGEpO1xuICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzaXplXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2l6ZSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFF1ZXVlO1xuICB9KCk7XG5cbiAgdmFyIF9maXJzdCA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgdmFyIF9sYXN0ID0gbmV3IFdlYWtNYXAoKTtcblxuICB2YXIgX3NpemUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIHJldHVybiBRdWV1ZTtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU3RhY2sgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0b3AgPSBTeW1ib2woJ3RvcCcpOyAvL1RvIGtlZXAgdG9wIGFzIHByaXZhdGUgaW4gc3RhY2tcblxuICB2YXIgU3RhY2tOb2RlID0gZnVuY3Rpb24gU3RhY2tOb2RlKGRhdGEpIHtcbiAgICB2YXIgbmV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGFja05vZGUpO1xuXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLm5leHQgPSBuZXh0O1xuICB9O1xuXG4gIHZhciBTdGFjayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RhY2soKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhY2spO1xuXG4gICAgICB0aGlzW3RvcF0gPSBudWxsO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTdGFjaywgW3tcbiAgICAgIGtleTogXCJwdXNoXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IFN0YWNrTm9kZShpdGVtKTtcbiAgICAgICAgbm9kZS5uZXh0ID0gdGhpc1t0b3BdO1xuICAgICAgICB0aGlzW3RvcF0gPSBub2RlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwb3BcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwb3AoKSB7XG4gICAgICAgIGlmICh0aGlzW3RvcF0gPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgaXRlbSA9IHRoaXNbdG9wXS5kYXRhO1xuICAgICAgICB0aGlzW3RvcF0gPSB0aGlzW3RvcF0ubmV4dDtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInBlZWtcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwZWVrKCkge1xuICAgICAgICBpZiAodGhpc1t0b3BdID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXNbdG9wXS5kYXRhO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0VtcHR5XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbdG9wXSA9PT0gbnVsbDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicHJpbnRTdGFja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50U3RhY2soKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgdmFyIGN1cnIgPSB0aGlzW3RvcF07XG5cbiAgICAgICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChjdXJyLmRhdGEpO1xuICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgICAgIH0gLy8gY29uc29sZS5sb2cocmVzdWx0KVxuXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3RhY2tUb1N0cmluZ1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YWNrVG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnByaW50U3RhY2soKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFN0YWNrO1xuICB9KCk7XG5cbiAgcmV0dXJuIFN0YWNrO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3RlbXAsIF9yb290O1xuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7IH0gaWYgKGRlc2NyaXB0b3IuZ2V0KSB7IHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7IHZhciBkZXNjcmlwdG9yID0gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpOyBpZiAoIWRlc2NyaXB0b3IpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7IH0gaWYgKGRlc2NyaXB0b3Iuc2V0KSB7IGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgfSBlbHNlIHsgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpOyB9IGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTsgfSByZXR1cm4gdmFsdWU7IH1cblxuLyogXG5cbmh0dHBzOi8vbGVldGNvZGUuY29tL3Byb2JsZW1zL2ltcGxlbWVudC10cmllLXByZWZpeC10cmVlL3NvbHV0aW9uL1xuVmlzdWFsaXplIGEgdHJpZSBhcyBhIDI2IGJ5IG4gbWF0cml4IHdpdGggb25lIHdheSByZWxhdGlvbiBiZXR3ZWVuIHRoZSBsZXR0ZXJzIGluIGRpZmZlcmVudCBsZXZlbHMuIG4gaXMgdGhlIGxlbmd0aCBvZiB0aGUgbG9uZ2VzdCB3b3JkIGluIHRoZSB0cmllLlxuXG53b3JkcyDigJQgZGVlZCwgbm9tLCBub29uXG5cbmEgIGIgIGMgIGQgIGUgIGYgIGcgIGggIGkgIGogIGsgIGwgIG0gIG4gIG8gLi4uXG4gICAgICAgICAgIOKGmCAgICAgICAgICAgICAgICAgICAgICAgICAgICDihpggXG5hICBiICBjICBkICBlICBmICBnICBoICBpICBqICBrICBsICBtICBuICBvIC4uLlxuICAgICAgICAgICAg4oaTICAgICAgICAgICAgICAgICAgICAgICAgICAg4oaZIOKGk1xuICAgICAgICAgICAg4oaTICAgICAgICAgICAgICAgICAgICAgICAgIOKGmSAgIOKGk1xuYSAgYiAgYyAgZCAgZSAgZiAgZyAgaCAgaSAgaiAgayAgbCAgbSAgbiAgbyAuLi5cbiAgICAgICAgICDihpkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGmVxuYSAgYiAgYyAgZCAgZSAgZiAgZyAgaCAgaSAgaiAgayAgbCAgbSAgbiAgbyAuLi5cblxuVGhlIHJvb3Qgd291bGQgbG9vayBsaWtlOlxuXG5jb25zdCB0cmllID1cbntcbiAgZDogeyBlOiB7IGU6IHsgZDogeyBpc1dvcmQ6IHRydWUgfSB9IH0gfSxcbiAgbjogeyBvOiB7IG86IHsgbjogeyBpc1dvcmQ6IHRydWUgfSB9LFxuICAgICAgIG06IHsgaXNXb3JkOiB0cnVlIH0gfVxuICAgICB9XG59XG5cbiovXG4vLyBXZSdsbCBhc3N1bWUgdGhhdCB0aGUgd29yZHMgcHJvdmlkZWQgd2lsbCBjb25zaXN0IG9mIGxldHRlcnMgb25seSBhbmQgYXJlIGFsd2F5cyBsb3dlcmNhc2VcbnZhciBUcmllID0gKF90ZW1wID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVHJpZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJpZSk7XG5cbiAgICBfcm9vdC5zZXQodGhpcywge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogdm9pZCAwXG4gICAgfSk7XG5cbiAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3Jvb3QsIHt9KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUcmllLCBbe1xuICAgIGtleTogXCJfdHJhdmVyc2VcIixcbiAgICAvLyBoZWxwZXIuIENoYW5nZSB0byBwcml2YXRlIHdoZW4gcHJpdmF0ZSBpbnN0YW5jZSBtZXRob2RzIGFyZSBzdXBwb3J0ZWRcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3RyYXZlcnNlKHdvcmQpIHtcbiAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KTtcblxuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHdvcmQpLFxuICAgICAgICAgIF9zdGVwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBjaCA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIGlmICghY3VycikgcmV0dXJuIG51bGw7XG4gICAgICAgICAgY3VyciA9IGN1cnJbY2hdO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbnNlcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0KHdvcmQpIHtcbiAgICAgIHZhciBjdXJyID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9yb290KTtcblxuICAgICAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih3b3JkKSxcbiAgICAgICAgICBfc3RlcDI7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIGNoID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgICAgIGN1cnJbY2hdID0gY3VycltjaF0gPyBjdXJyW2NoXSA6IHt9O1xuICAgICAgICAgIGN1cnIgPSBjdXJyW2NoXTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvcjIuZShlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2l0ZXJhdG9yMi5mKCk7XG4gICAgICB9XG5cbiAgICAgIGN1cnIuaXNXb3JkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VhcmNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaCh3b3JkKSB7XG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX3RyYXZlcnNlKHdvcmQpO1xuXG4gICAgICByZXR1cm4gbm9kZSAhPT0gbnVsbCAmJiBub2RlLmlzV29yZCA9PT0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRzV2l0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydHNXaXRoKHdvcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLl90cmF2ZXJzZSh3b3JkKSAhPT0gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicm9vdFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcm9vdCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRyaWU7XG59KCksIF9yb290ID0gbmV3IFdlYWtNYXAoKSwgX3RlbXApO1xubW9kdWxlLmV4cG9ydHMgPSBUcmllOyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIExpbmtlZExpc3QgPSByZXF1aXJlKCcuL0xpbmtlZExpc3QnKTtcblxudmFyIEhhc2hUYWJsZSA9IHJlcXVpcmUoJy4vSGFzaFRhYmxlJyk7XG5cbnZhciBTdGFjayA9IHJlcXVpcmUoJy4vU3RhY2snKTtcblxudmFyIFF1ZXVlID0gcmVxdWlyZSgnLi9RdWV1ZScpO1xuXG52YXIgVHJlZVRyYXZlcnNhbCA9IHJlcXVpcmUoJy4vQmluYXJ5VHJlZVRyYXZlcnNhbCcpO1xuXG52YXIgQmluYXJ5U2VhcmNoVHJlZSA9IHJlcXVpcmUoJy4vQmluYXJ5U2VhcmNoVHJlZScpO1xuXG52YXIgVHJpZSA9IHJlcXVpcmUoJy4vVHJpZScpO1xuXG52YXIgQmluYXJ5SGVhcCA9IHJlcXVpcmUoJy4vQmluYXJ5SGVhcCcpO1xuXG52YXIgR3JhcGhUcmF2ZXJzYWwgPSByZXF1aXJlKCcuL0dyYXBoVHJhdmVyc2FsJyk7XG5cbnZhciBHcmFwaCA9IHJlcXVpcmUoJy4vR3JhcGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe1xuICBMaW5rZWRMaXN0OiBMaW5rZWRMaXN0LFxuICBIYXNoVGFibGU6IEhhc2hUYWJsZSxcbiAgU3RhY2s6IFN0YWNrLFxuICBRdWV1ZTogUXVldWUsXG4gIFRyZWVUcmF2ZXJzYWw6IFRyZWVUcmF2ZXJzYWwsXG4gIEJpbmFyeVNlYXJjaFRyZWU6IEJpbmFyeVNlYXJjaFRyZWUsXG4gIFRyaWU6IFRyaWVcbn0sIEJpbmFyeUhlYXApLCB7fSwge1xuICBHcmFwaFRyYXZlcnNhbDogR3JhcGhUcmF2ZXJzYWwsXG4gIEdyYXBoOiBHcmFwaFxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhaW4ge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5LCBjb3VudCA9IDApIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5jb3VudCA9IGNvdW50XG4gICAgdGhpcy5taW4gPSAwXG4gIH1cblxuICBzZXRDb3VudCA9IChjb3VudCkgPT4ge1xuICAgIHRoaXMuY291bnQgPSBjb3VudFxuICB9XG5cbiAgcmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRDb3VudCgwKVxuICAgIHRoaXMudXBkYXRlQ2hhaW4oKVxuICB9XG5cbiAgaW5jcmVtZW50Q291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmNvdW50ICsgMVxuICAgIHRoaXMuc2V0Q291bnQoY291bnQpXG4gICAgdGhpcy51cGRhdGVDaGFpbigpXG4gIH1cblxuICBkZWNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuY291bnRcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5tYXgoY291bnQgLSAxLCB0aGlzLm1pbilcbiAgICB0aGlzLnVwZGF0ZUNoYWluKClcbiAgfVxuXG4gIHVwZGF0ZUNoYWluID0gKCkgPT4ge1xuICAgIHRoaXMuZGlzcGxheS51cGRhdGVFbGVtZW50KCcjY2hhaW4nLCB0aGlzLmNvdW50KVxuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZUNoYWluKClcbiAgfVxufVxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL01vdmluZ09iamVjdCdcblxuY29uc3QgciA9IDEwLFxuICBjID0gJyNmNmU4NzInLFxuICB2ID0geyBkeDogMSwgZHk6IDEgfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZCBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBvcyxcbiAgICByYWRpdXMgPSByLFxuICAgIHdvcmxkLFxuICAgIHNwcml0ZSxcbiAgICBzaXplID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0sXG4gICAgdmVsID0gdixcbiAgICBjb2xvciA9IGNcbiAgKSB7XG4gICAgc3VwZXIocG9zLCByYWRpdXMsIHdvcmxkLCBzcHJpdGUsIHNpemUsIHZlbCwgY29sb3IpXG4gICAgdGhpcy5pbmRlcGVuZGVuY2UgPSB0cnVlXG4gICAgdGhpcy5jaGFpblBvcyA9IG51bGxcbiAgICB0aGlzLnBhcmVudCA9IG51bGxcbiAgICB0aGlzLm5leHRDaGlsZCA9IG51bGxcbiAgICB0aGlzLnBvc0NhY2hlID0gW11cbiAgICB0aGlzLm1vdmVzID0gdGhpcy5tb3Zlcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaXRzUHJlZGF0b3IgPSB0aGlzLmhpdHNQcmVkYXRvci5iaW5kKHRoaXMpXG4gICAgdGhpcy5zcHJpdGUgPSBzcHJpdGVcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgdGhpcy5jbGlja2luZyA9IGZhbHNlXG4gIH1cblxuICBzZXRDbGlja2luZyA9IChjbGlja2luZykgPT4ge1xuICAgIHRoaXMuY2xpY2tpbmcgPSBjbGlja2luZ1xuICB9XG5cbiAgc2V0UGFyZW50ID0gKHBhcmVudCkgPT4ge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50XG4gIH1cblxuICBzZXRDaGFpblBvcyA9IChjaGFpblBvcykgPT4ge1xuICAgIHRoaXMuY2hhaW5Qb3MgPSBjaGFpblBvc1xuICB9XG5cbiAgc2V0TmV4dENoaWxkID0gKGNoaWxkKSA9PiB7XG4gICAgdGhpcy5uZXh0Q2hpbGQgPSBjaGlsZFxuICB9XG5cbiAgc2V0SW5kZXBlbmRlbmNlID0gKGluZGVwZW5kZW5jZSkgPT4ge1xuICAgIHRoaXMuaW5kZXBlbmRlbmNlID0gaW5kZXBlbmRlbmNlXG4gIH1cblxuICBpc0luZGVwZW5kZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmluZGVwZW5kZW5jZVxuICB9XG5cbiAgYXZvaWRQcmVkYXRvciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbmRlcGVuZGVuY2UpIHtcbiAgICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zLFxuICAgICAgICBwb3MgPSB7IHg6IHggKyB0aGlzLmN1cnJEaXJbMF0sIHk6IHkgKyB0aGlzLmN1cnJEaXJbMV0gfVxuXG4gICAgICB0aGlzLnNldFJhbmRvbURpcigpXG4gICAgICBwb3MgPSB7IHg6IHggKyB0aGlzLmN1cnJEaXJbMF0sIHk6IHkgKyB0aGlzLmN1cnJEaXJbMV0gfVxuXG4gICAgICB0aGlzLmJvdW5jZUJhY2socG9zKVxuICAgIH1cbiAgfVxuXG4gIGhpdHNQcmVkYXRvcihnYW1lKSB7XG4gICAgaWYgKHRoaXMuaXNJbmRlcGVuZGVudCgpKSBnYW1lLmRlc3Ryb3lDaGlsZCh0aGlzKVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGN1cnIgPSB0aGlzLnBhcmVudC5kZWxldGVMYXN0Q2hpbGQoKVxuICAgICAgd2hpbGUgKGN1cnIgJiYgY3VyciAhPT0gdGhpcykge1xuICAgICAgICBjdXJyID0gdGhpcy5wYXJlbnQuZGVsZXRlTGFzdENoaWxkKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3Zlcyhwb3MpIHtcbiAgICBpZiAodGhpcy5pc0luZGVwZW5kZW50KCkpIHN1cGVyLm1vdmVzKClcbiAgICBlbHNlIHtcbiAgICAgIC8vIFJlbW92ZWQgZWFzaW5nIGZvciBub3cuIE1heWJlIGFkZCBmb3IgaGlnaGVyIGxldmVscy4gQ2hpbGRyZW4gdGFrZSB0b28gbG9uZyBsb25nIHRvIG1vdmUuXG4gICAgICAvLyBjb25zdCBlYXNpbmcgPSBNYXRoLm1heCgxIC0gdGhpcy5jaGFpblBvcyAqIDAuMTMsIDAuMSksXG4gICAgICBjb25zdCBlYXNpbmcgPSAxLFxuICAgICAgICByID0gdGhpcy5yYWRpdXMsXG4gICAgICAgIG5leHRDaGlsZCA9IHRoaXMubmV4dENoaWxkXG5cbiAgICAgIGxldCBvZmZzZXRcbiAgICAgIGlmICh0aGlzLmNsaWNraW5nKSBvZmZzZXQgPSAwXG4gICAgICBlbHNlIG9mZnNldCA9IDIgKiAociArIDEpICogdGhpcy5jaGFpblBvcyArICh0aGlzLnBhcmVudC5yYWRpdXMgLSByKVxuXG4gICAgICBzdXBlci5tb3Zlc1dpdGhDdXJzb3IocG9zLCBlYXNpbmcsIG9mZnNldClcblxuICAgICAgaWYgKG5leHRDaGlsZClcbiAgICAgICAgbmV4dENoaWxkLm1vdmVzKHRoaXMucG9zQ2FjaGUubGVuZ3RoID8gdGhpcy5wb3NDYWNoZVswXSA6IHBvcylcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogUmVsYXRlZCB0byB0aGUgRE9NIGFuZCBkaXNwbGF5IChjcmVhdGluZyBlbGVtZW50cywgdXBkYXRpbmcgZWxlbWVudHMgZXRjLilcbiAqL1xuXG5pbXBvcnQgY2hpbGRDb3VudEltZyBmcm9tICcuLi9pbWdzL2NvdW50LnBuZydcbmltcG9ydCB3b3JtTGVmdCBmcm9tICcuLi9pbWdzL3dvcm0tbGVmdC5wbmcnXG5pbXBvcnQgd29ybVJpZ2h0IGZyb20gJy4uL2ltZ3Mvd29ybS1yaWdodC5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTURpc3BsYXkge1xuICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNDAwLCBoZWlnaHQgPSA3MDAgfSkge1xuICAgIHRoaXMud29ybGRTaXplID0geyB3aWR0aCwgaGVpZ2h0IH1cbiAgICB0aGlzLnJlbmRlckNoYWluID0gdGhpcy5yZW5kZXJDaGFpbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZW5kZXJFbmVyZ3kgPSB0aGlzLnJlbmRlckVuZXJneS5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZW5kZXJTY29yZSA9IHRoaXMucmVuZGVyU2NvcmUuYmluZCh0aGlzKVxuICB9XG5cbiAgY3JlYXRlSW1hZ2UgPSAoc3JjLCBjbGFzc05hbWUsIGlkKSA9PiB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICBpbWcuc3JjID0gc3JjXG4gICAgaWYgKGNsYXNzTmFtZSkgaW1nLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgIGlmIChpZCkgaW1nLmlkID0gaWRcbiAgICByZXR1cm4gaW1nXG4gIH1cblxuICByZW1vdmVBbmltYXRpb24gPSAod29ybUNsYXNzKSA9PiB7XG4gICAgY29uc3Qgd29ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUod29ybUNsYXNzKVswXVxuICAgIGlmICh3b3JtKSB3b3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKVxuICB9XG5cbiAgYW5pbWF0ZSA9ICh3b3JtQ2xhc3MpID0+IHtcbiAgICBjb25zdCB3b3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh3b3JtQ2xhc3MpWzBdXG4gICAgaWYgKHdvcm0pIHdvcm0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXG4gIH1cblxuICBjcmVhdGVFbGVtZW50ID0gKHRhZywgY2xhc3NOYW1lLCBpZCwgY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcbiAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NOYW1lKSkge1xuICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGNsYXNzTmFtZSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWRcbiAgICBpZiAoY29udGVudCkgZWxlbWVudC5pbm5lclRleHQgPSBjb250ZW50XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIGdldEVsZW1lbnQgPSAoc2VsZWN0b3IpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgfVxuXG4gIHVwZGF0ZUVsZW1lbnQgPSAoc2VsZWN0b3IsIHZhbCkgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSB0aGlzLmdldEVsZW1lbnQoc2VsZWN0b3IpXG4gICAgaWYgKGVsZW0pIGVsZW0uaW5uZXJUZXh0ID0gdmFsXG4gIH1cblxuICBjbGVhckVsZW1lbnQgPSAoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBlbGVtID0gdGhpcy5nZXRFbGVtZW50KHNlbGVjdG9yKVxuICAgIGlmIChlbGVtKSBlbGVtLmlubmVyVGV4dCA9ICcnXG4gIH1cblxuICByZW5kZXJHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbWUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdnYW1lJywgJ2dhbWUnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZSlcbiAgfVxuXG4gIHJlbmRlclRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAndGl0bGUnLCAndGl0bGUnKSxcbiAgICAgIGhlYWRpbmcgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2gxJywgbnVsbCwgbnVsbCwgJ0NISUNLRU4gTUVFVFMgV09STScpLFxuICAgICAgZ2FtZSA9IHRoaXMuZ2V0RWxlbWVudCgnI2dhbWUnKVxuXG4gICAgZ2FtZS5hcHBlbmQodGl0bGUpXG4gICAgdGl0bGUuYXBwZW5kKGhlYWRpbmcpXG4gIH1cblxuICByZW5kZXJXb3JsZCA9ICgpID0+IHtcbiAgICBjb25zdCB3b3JsZFdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAnd29ybGQtd3JhcHBlcicsXG4gICAgICAgICd3b3JsZC13cmFwcGVyJ1xuICAgICAgKSxcbiAgICAgIHdvcmxkID0gdGhpcy5jcmVhdGVFbGVtZW50KCdjYW52YXMnLCBudWxsLCAnd29ybGQnKSxcbiAgICAgIHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy53b3JsZFNpemUsXG4gICAgICBnYW1lID0gdGhpcy5nZXRFbGVtZW50KCcjZ2FtZScpXG5cbiAgICB3b3JsZC53aWR0aCA9IHRoaXMud29ybGRTaXplLndpZHRoXG4gICAgd29ybGQuaGVpZ2h0ID0gdGhpcy53b3JsZFNpemUuaGVpZ2h0XG4gICAgZ2FtZS5hcHBlbmQod29ybGRXcmFwcGVyKVxuICAgIHdvcmxkV3JhcHBlci5hcHBlbmQod29ybGQpXG4gICAgd29ybGRXcmFwcGVyLnN0eWxlLndpZHRoID0gd2lkdGggKyAyICsgJ3B4J1xuICAgIHdvcmxkV3JhcHBlci5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAyICsgJ3B4J1xuICB9XG5cbiAgcmVuZGVyTGVnZW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2xlZ2VuZCcsICdsZWdlbmQnKSxcbiAgICAgIHdvcmxkV3JhcHBlciA9IHRoaXMuZ2V0RWxlbWVudCgnI3dvcmxkLXdyYXBwZXInKVxuICAgIHdvcmxkV3JhcHBlci5hcHBlbmQobGVnZW5kKVxuICB9XG5cbiAgcmVuZGVyRW5lcmd5KCkge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0RWxlbWVudCgnI2xlZ2VuZCcpLFxuICAgICAgZW5lcmd5V3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICdlbmVyZ3ktd3JhcHBlcicsXG4gICAgICAgICdlbmVyZ3ktd3JhcHBlcidcbiAgICAgIClcblxuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChlbmVyZ3lXcmFwcGVyKVxuICAgIHRoaXMudXBkYXRlRW5lcmd5QmFyKDUpXG4gIH1cblxuICByZW5kZXJDaGFpbigpIHtcbiAgICBjb25zdCBjaGFpbldyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjaGFpbi13cmFwcGVyJyksXG4gICAgICBjb3VudEltZyA9IHRoaXMuY3JlYXRlSW1hZ2UoY2hpbGRDb3VudEltZywgJ2ltYWdlJywgJ2NoYWluLWNvdW50JyksXG4gICAgICBjaGFpbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnc3BhbicsICdsZWdlbmQtdGV4dCcsICdjaGFpbicpLFxuICAgICAgbGVnZW5kID0gdGhpcy5nZXRFbGVtZW50KCcjbGVnZW5kJylcblxuICAgIGxlZ2VuZC5hcHBlbmQoY2hhaW5XcmFwcGVyKVxuICAgIGNoYWluV3JhcHBlci5hcHBlbmQoY291bnRJbWcpXG4gICAgY2hhaW5XcmFwcGVyLmFwcGVuZChjaGFpbilcbiAgfVxuXG4gIHVwZGF0ZUVuZXJneUJhcihjb3VudCkge1xuICAgIGNvbnN0IGVXID0gdGhpcy5nZXRFbGVtZW50KCcjZW5lcmd5LXdyYXBwZXInKSxcbiAgICAgIGkgPSBNYXRoLm1pbihjb3VudCwgNSkgKiAyXG5cbiAgICBpZiAoZVcuY2hpbGRFbGVtZW50Q291bnQgPiBpKSB7XG4gICAgICB3aGlsZSAoZVcuY2hpbGRFbGVtZW50Q291bnQgPiBpKSB7XG4gICAgICAgIGlmIChlVy5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkgcmV0dXJuXG4gICAgICAgIGVXLnJlbW92ZUNoaWxkKGVXLmxhc3RDaGlsZClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVXLmNoaWxkRWxlbWVudENvdW50IDwgaSkge1xuICAgICAgbGV0IGxlZnQgPSB0cnVlLFxuICAgICAgICB3b3JtQ291bnQgPSBlVy5jaGlsZEVsZW1lbnRDb3VudFxuXG4gICAgICBpZiAod29ybUNvdW50ICUgMiAhPT0gMCkge1xuICAgICAgICBlVy5hcHBlbmQodGhpcy5jcmVhdGVJbWFnZSh3b3JtUmlnaHQsICd3b3JtLXJpZ2h0JykpXG4gICAgICAgIHdvcm1Db3VudCsrXG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh3b3JtQ291bnQgPCBpKSB7XG4gICAgICAgIGNvbnN0IHdvcm1MID0gdGhpcy5jcmVhdGVJbWFnZSh3b3JtTGVmdCwgJ3dvcm0tbGVmdCcpLFxuICAgICAgICAgIHdvcm1SID0gdGhpcy5jcmVhdGVJbWFnZSh3b3JtUmlnaHQsICd3b3JtLXJpZ2h0JylcblxuICAgICAgICBpZiAobGVmdCkge1xuICAgICAgICAgIGVXLmFwcGVuZCh3b3JtTClcbiAgICAgICAgICBsZWZ0ID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIGlmICghbGVmdCkge1xuICAgICAgICAgIGVXLmFwcGVuZCh3b3JtUilcbiAgICAgICAgICBsZWZ0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHdvcm1Db3VudCsrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2NvcmUoKSB7XG4gICAgY29uc3Qgc2NvcmUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnbGVnZW5kLXRleHQnLCAnc2NvcmUnXSwgJ3Njb3JlJyksXG4gICAgICBsZWdlbmQgPSB0aGlzLmdldEVsZW1lbnQoJyNsZWdlbmQnKVxuXG4gICAgbGVnZW5kLmFwcGVuZChzY29yZSlcbiAgfVxuXG4gIHJlbmRlckdhbWVFbmQgPSAoaGFuZGxlQ2xpY2tSZXBsYXksIHNjb3JlLCBoaWdoU2NvcmUpID0+IHtcbiAgICBjb25zdCBnYW1lRW5kV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2VuZC13cmFwcGVyJyksXG4gICAgICBnYW1lRW5kID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZ2FtZS1lbmQnKSxcbiAgICAgIHdvcmxkV3JhcHBlciA9IHRoaXMuZ2V0RWxlbWVudCgnI3dvcmxkLXdyYXBwZXInKVxuXG4gICAgZ2FtZUVuZFdyYXBwZXIuc3R5bGUud2lkdGggPSB0aGlzLndvcmxkU2l6ZS53aWR0aCArIDQgKyAncHgnXG4gICAgd29ybGRXcmFwcGVyLmFwcGVuZChnYW1lRW5kV3JhcHBlcilcbiAgICBnYW1lRW5kV3JhcHBlci5hcHBlbmQoZ2FtZUVuZClcbiAgICBnYW1lRW5kV3JhcHBlci5zdHlsZS50b3AgPSA5OCArIHRoaXMud29ybGRTaXplLmhlaWdodCAvIDQgKyAncHgnXG5cbiAgICB0aGlzLnJlbmRlckdhbWVPdmVyTWVzc2FnZSgpXG4gICAgdGhpcy5yZW5kZXJFbmRTY29yZShzY29yZSwgaGlnaFNjb3JlKVxuICAgIHRoaXMucmVuZGVyUmVwbGF5QnV0dG9uKGhhbmRsZUNsaWNrUmVwbGF5KVxuICB9XG5cbiAgY2xlYXJHYW1lRW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbWVFbmQgPSB0aGlzLmdldEVsZW1lbnQoJy5lbmQtd3JhcHBlcicpLFxuICAgICAgd29ybGRXcmFwcGVyID0gdGhpcy5nZXRFbGVtZW50KCcud29ybGQtd3JhcHBlcicpXG5cbiAgICBpZiAoZ2FtZUVuZCkgd29ybGRXcmFwcGVyLnJlbW92ZUNoaWxkKGdhbWVFbmQpXG4gIH1cblxuICByZW5kZXJHYW1lT3Zlck1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2dhbWUtb3ZlcicsIG51bGwsICdHYW1lIE92ZXIhJyksXG4gICAgICBnYW1lRW5kID0gdGhpcy5nZXRFbGVtZW50KCcuZ2FtZS1lbmQnKVxuXG4gICAgZ2FtZUVuZC5hcHBlbmQobWVzc2FnZSlcbiAgfVxuXG4gIHJlbmRlclJlcGxheUJ1dHRvbiA9IChoYW5kbGVDbGlja1JlcGxheSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ2J0bicsICdyZXBsYXknKSxcbiAgICAgIGdhbWVFbmQgPSB0aGlzLmdldEVsZW1lbnQoJy5nYW1lLWVuZCcpXG5cbiAgICBidXR0b24uaW5uZXJUZXh0ID0gJ1JlcGxheSdcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja1JlcGxheSlcbiAgICBnYW1lRW5kLmFwcGVuZChidXR0b24pXG4gIH1cblxuICByZW5kZXJFbmRTY29yZSA9IChzY29yZSwgaGlnaFNjb3JlKSA9PiB7XG4gICAgY29uc3QgZW5kU2NvcmVXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnd3JhcHBlcicpLFxuICAgICAgZW5kU2NvcmVMYWJlbCA9IHRoaXMuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICAnc2NvcmUtbGFiZWwnLFxuICAgICAgICBudWxsLFxuICAgICAgICAnWW91ciBzY29yZTogJ1xuICAgICAgKSxcbiAgICAgIGVuZFNjb3JlID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgICdzY29yZScsXG4gICAgICAgICdlbmQtc2NvcmUnLFxuICAgICAgICBzY29yZS50b1N0cmluZygpXG4gICAgICApLFxuICAgICAgYmVzdFNjb3JlV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3dyYXBwZXInKSxcbiAgICAgIGJlc3RTY29yZUxhYmVsID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgICdzY29yZS1sYWJlbCcsXG4gICAgICAgIG51bGwsXG4gICAgICAgICdCZXN0IHNjb3JlOiAnXG4gICAgICApLFxuICAgICAgYmVzdFNjb3JlID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgICdzY29yZScsXG4gICAgICAgICdiZXN0LXNjb3JlJyxcbiAgICAgICAgaGlnaFNjb3JlLnRvU3RyaW5nKClcbiAgICAgICksXG4gICAgICBnYW1lRW5kID0gdGhpcy5nZXRFbGVtZW50KCcuZ2FtZS1lbmQnKVxuXG4gICAgZW5kU2NvcmVXcmFwcGVyLmFwcGVuZChlbmRTY29yZUxhYmVsKVxuICAgIGVuZFNjb3JlV3JhcHBlci5hcHBlbmQoZW5kU2NvcmUpXG4gICAgYmVzdFNjb3JlV3JhcHBlci5hcHBlbmQoYmVzdFNjb3JlTGFiZWwpXG4gICAgYmVzdFNjb3JlV3JhcHBlci5hcHBlbmQoYmVzdFNjb3JlKVxuICAgIGdhbWVFbmQuYXBwZW5kKGVuZFNjb3JlV3JhcHBlcilcbiAgICBnYW1lRW5kLmFwcGVuZChiZXN0U2NvcmVXcmFwcGVyKVxuICB9XG59XG4iLCJpbXBvcnQgbG9nbyBmcm9tICcuLi9pbWdzL2xvZ28ucG5nJ1xuaW1wb3J0IERPTURpc3BsYXkgZnJvbSAnLi9ET01EaXNwbGF5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRybyBleHRlbmRzIERPTURpc3BsYXkge1xuICBjb25zdHJ1Y3Rvcih3b3JsZFNpemUpIHtcbiAgICBzdXBlcih3b3JsZFNpemUpXG4gIH1cblxuICByZW5kZXJUdXRvcmlhbEJ1dHRvbiA9IChoYW5kbGVDbGlja1R1dG9yaWFsKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnYnRuJywgJ3R1dG9yaWFsJylcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gJ1R1dG9yaWFsJ1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrVHV0b3JpYWwpXG4gICAgdGhpcy5pbnRyb1dyYXBwZXIuYXBwZW5kKGJ1dHRvbilcbiAgfVxuXG4gIHJlbmRlclN0YXJ0TGluayA9IChoYW5kbGVDbGlja1N0YXJ0KSA9PiB7XG4gICAgY29uc3QgbGluayA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYScsICdzdGFydCcsICdzdGFydCcpXG4gICAgbGluay5pbm5lclRleHQgPSAnVHV0b3JpYWxzIHIgZm9yIG5vb2JzLidcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tTdGFydClcbiAgICB0aGlzLmludHJvV3JhcHBlci5hcHBlbmQobGluaylcbiAgfVxuXG4gIHJlbmRlckludHJvID0gKCkgPT4ge1xuICAgIGNvbnN0IGludHJvV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ludHJvLXdyYXBwZXInKSxcbiAgICAgIGludHJvUGljID0gdGhpcy5jcmVhdGVJbWFnZShsb2dvLCAnbG9nbycpLFxuICAgICAgaW50cm8gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdpbnRybycpLFxuICAgICAgaW50cm9NZXNzYWdlID0gdGhpcy5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgICdpbnRyby1tZXNzYWdlJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJ0ZlYXN0IG9uIHdvcm1zLCBwcm90ZWN0IHlvdXIgY2hpbGRyZW4hJ1xuICAgICAgKSxcbiAgICAgIHdvcmxkV3JhcHBlciA9IHRoaXMuZ2V0RWxlbWVudCgnI3dvcmxkLXdyYXBwZXInKVxuICAgIHdvcmxkV3JhcHBlci5hcHBlbmQoaW50cm9XcmFwcGVyKVxuXG4gICAgaW50cm8uYXBwZW5kKGludHJvUGljKVxuICAgIGludHJvLmFwcGVuZChpbnRyb01lc3NhZ2UpXG4gICAgaW50cm9XcmFwcGVyLmFwcGVuZChpbnRybylcbiAgICBpbnRyb1dyYXBwZXIuc3R5bGUud2lkdGggPSB0aGlzLndvcmxkU2l6ZS53aWR0aCArIDQgKyAncHgnXG4gICAgaW50cm9XcmFwcGVyLnN0eWxlLnRvcCA9IDk4ICsgdGhpcy53b3JsZFNpemUuaGVpZ2h0IC8gNiArICdweCdcbiAgICB0aGlzLmludHJvV3JhcHBlciA9IGludHJvV3JhcHBlclxuICB9XG5cbiAgY2xlYXJJbnRybyA9ICgpID0+IHtcbiAgICBjb25zdCB3b3JsZFdyYXBwZXIgPSB0aGlzLmdldEVsZW1lbnQoJyN3b3JsZC13cmFwcGVyJylcbiAgICB3b3JsZFdyYXBwZXIucmVtb3ZlQ2hpbGQodGhpcy5pbnRyb1dyYXBwZXIpXG4gIH1cbn1cbiIsImltcG9ydCBET01EaXNwbGF5IGZyb20gJy4vRE9NRGlzcGxheSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHV0b3JpYWwgZXh0ZW5kcyBET01EaXNwbGF5IHtcbiAgY29uc3RydWN0b3Iod29ybGRTaXplKSB7XG4gICAgc3VwZXIod29ybGRTaXplKVxuICAgIHRoaXMuc2V0dGltZW91dCA9IFtdXG4gIH1cblxuICBjbGVhclByZXZUdXQgPSAoKSA9PiB7XG4gICAgd2hpbGUgKHRoaXMuc2V0dGltZW91dC5sZW5ndGgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNldHRpbWVvdXQucG9wKCkpXG4gICAgfVxuICAgIHRoaXMuY2xlYXJFbGVtZW50KCcjdHV0LW1zZy0xJylcbiAgfVxuXG4gIGNoYW5nZU1lc3NhZ2UgPSAoc2VsZWN0b3IsIG1lc3NhZ2UsIHRpbWUpID0+IHtcbiAgICB0aGlzLnNldHRpbWVvdXQucHVzaChcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnQoc2VsZWN0b3IsIG1lc3NhZ2UpXG4gICAgICB9LCB0aW1lKVxuICAgIClcbiAgfVxuXG4gIHJlbmRlck1vdmVQYXJlbnRUdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgdHV0b3JpYWxXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHV0b3JpYWwtd3JhcHBlcicpLFxuICAgICAgbWVzc2FnZTEgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAndHV0b3JpYWwtbWVzc2FnZScsXG4gICAgICAgICd0dXQtbXNnLTAnLFxuICAgICAgICAnTW92ZSB5b3VyIG1vdXNlIHRvIG1vdmUgdGhlIGNoaWNrZW4uJ1xuICAgICAgKSxcbiAgICAgIG1lc3NhZ2UyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHV0b3JpYWwtbWVzc2FnZScsICd0dXQtbXNnLTEnKSxcbiAgICAgIHdvcmxkV3JhcHBlciA9IHRoaXMuZ2V0RWxlbWVudCgnI3dvcmxkLXdyYXBwZXInKVxuXG4gICAgd29ybGRXcmFwcGVyLmFwcGVuZCh0dXRvcmlhbFdyYXBwZXIpXG4gICAgdHV0b3JpYWxXcmFwcGVyLnN0eWxlLndpZHRoID0gdGhpcy53b3JsZFNpemUud2lkdGggKyA0ICsgJ3B4J1xuICAgIHR1dG9yaWFsV3JhcHBlci5zdHlsZS5oZWlnaHQgPSB0aGlzLndvcmxkU2l6ZS5oZWlnaHQgKyA0ICsgJ3B4J1xuICAgIG1lc3NhZ2UyLnN0eWxlLndpZHRoID0gdGhpcy53b3JsZFNpemUud2lkdGggKyA0ICsgJ3B4J1xuICAgIG1lc3NhZ2UyLnN0eWxlLnRvcCA9IHRoaXMud29ybGRTaXplLmhlaWdodCAtIDM2ICsgJ3B4J1xuICAgIHR1dG9yaWFsV3JhcHBlci5hcHBlbmQobWVzc2FnZTEpXG4gICAgdHV0b3JpYWxXcmFwcGVyLmFwcGVuZChtZXNzYWdlMilcblxuICAgIHRoaXMuY2hhbmdlTWVzc2FnZShcbiAgICAgICcjdHV0LW1zZy0xJyxcbiAgICAgICdQcmVzcyBTUEFDRSB0byBjb250aW51ZSBhbmQgRU5URVIgdG8gc2tpcCB0dXRvcmlhbC4nLFxuICAgICAgMjUwMFxuICAgIClcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuVHV0ID0gKCkgPT4ge1xuICAgIHRoaXMucmVuZGVyTGVnZW5kKClcbiAgICB0aGlzLmNsZWFyUHJldlR1dCgpXG5cbiAgICB0aGlzLnVwZGF0ZUVsZW1lbnQoXG4gICAgICAnI3R1dC1tc2ctMCcsXG4gICAgICAnSG92ZXIgb3ZlciB0aGUgYmFieSBjaGlja3MgdG8gbWFrZSB0aGVtIHN0aWNrIGNsb3NlIHRvIHlvdS4nXG4gICAgKVxuICAgIHRoaXMuY2hhbmdlTWVzc2FnZShcbiAgICAgICcjdHV0LW1zZy0wJyxcbiAgICAgICdUaGUgbG9uZ2VyIHlvdXIgY2hhaW4sIHRoZSBoaWdoZXIgeW91ciBzY29yZSBpbmNyZW1lbnRzLicsXG4gICAgICAzNTAwXG4gICAgKVxuICAgIHRoaXMuY2hhbmdlTWVzc2FnZShcbiAgICAgICcjdHV0LW1zZy0xJyxcbiAgICAgICdQcmVzcyBTUEFDRSB0byBjb250aW51ZSBhbmQgRU5URVIgdG8gc2tpcCB0dXRvcmlhbC4nLFxuICAgICAgNjAwMFxuICAgIClcbiAgfVxuXG4gIHJlbmRlclByZWRhdG9yVHV0ID0gKCkgPT4ge1xuICAgIHRoaXMuY2xlYXJQcmV2VHV0KClcbiAgICB0aGlzLnVwZGF0ZUVsZW1lbnQoXG4gICAgICAnI3R1dC1tc2ctMCcsXG4gICAgICBcIldhdGNoIG91dCBmb3IgcHJlZGF0b3JzLiBOeWFuLWNoYW4gZGlkbid0IGdldCBmYXQgZWF0aW5nIGdyYXNzLlwiXG4gICAgKVxuICAgIHRoaXMuY2hhbmdlTWVzc2FnZShcbiAgICAgICcjdHV0LW1zZy0wJyxcbiAgICAgIFwiVGhlIHdvcm1zIHNob3cgeW91ciBoZWFsdGguIEV2ZXJ5IGVuY291bnRlciB3aXRoIGEgY2F0IGNvc3RzIHlvdSAxIHdvcm0uIFRoZSBnYW1lIGVuZHMgd2hlbiB5b3UncmUgb3V0IG9mIHdvcm1zLlwiLFxuICAgICAgNTAwMFxuICAgIClcbiAgICB0aGlzLmNoYW5nZU1lc3NhZ2UoXG4gICAgICAnI3R1dC1tc2ctMScsXG4gICAgICAnUHJlc3MgU1BBQ0UgdG8gY29udGludWUgYW5kIEVOVEVSIHRvIHNraXAgdHV0b3JpYWwuJyxcbiAgICAgIDgwMDBcbiAgICApXG4gIH1cblxuICByZW5kZXJDbGlja1BhcmVudFR1dCA9ICgpID0+IHtcbiAgICB0aGlzLmNsZWFyUHJldlR1dCgpXG4gICAgdGhpcy51cGRhdGVFbGVtZW50KFxuICAgICAgJyN0dXQtbXNnLTAnLFxuICAgICAgJ0NMSUNLIHRvIGdhdGhlciBhbGwgeW91ciBjaGlsZHJlbiBpbiBvbmUgcGxhY2UgZm9yIHRoZSBjaGVhcCBwcmljZSBvZiBoYWxmIGEgd29ybS4nXG4gICAgKVxuICAgIHRoaXMuY2hhbmdlTWVzc2FnZShcbiAgICAgICcjdHV0LW1zZy0wJyxcbiAgICAgIFwiRG8gdGhpcyBzcGFyaW5nbHksIGNhdXNlIHlvdSB3b24ndCBiZSBhYmxlIHRvIG1vdmUgd2hpbGUgY2xpY2tpbmchIEFuZCB5b3UgY2FuJ3QgdXNlIGl0IGlmIHlvdSBkb24ndCBoYXZlIGVub3VnaCB3b3Jtcy5cIixcbiAgICAgIDQwMDBcbiAgICApXG4gICAgdGhpcy5jaGFuZ2VNZXNzYWdlKFxuICAgICAgJyN0dXQtbXNnLTEnLFxuICAgICAgJ1ByZXNzIFNQQUNFIHRvIGNvbnRpbnVlIGFuZCBFTlRFUiB0byBza2lwIHR1dG9yaWFsLicsXG4gICAgICA3MDAwXG4gICAgKVxuICB9XG5cbiAgcmVuZGVyV29ybVR1dCA9ICgpID0+IHtcbiAgICB0aGlzLmNsZWFyUHJldlR1dCgpXG4gICAgdGhpcy51cGRhdGVFbGVtZW50KFxuICAgICAgJyN0dXQtbXNnLTAnLFxuICAgICAgJ1JlcGxlbmlzaCB5b3VyIGVuZXJneSBieSBmZWFzdGluZyBvbiBkZWxpY2lvdXMgd29ybXMuJ1xuICAgIClcbiAgICB0aGlzLmNoYW5nZU1lc3NhZ2UoXG4gICAgICAnI3R1dC1tc2ctMCcsXG4gICAgICAnWW91IGNhbiBoYXZlIHNvbWUgZXh0cmEgZm9yIHRoZSB0dXRvcmlhbC4nLFxuICAgICAgMzUwMFxuICAgIClcbiAgICB0aGlzLmNoYW5nZU1lc3NhZ2UoXG4gICAgICAnI3R1dC1tc2ctMCcsXG4gICAgICBcIkNvbmdyYXR1bGF0aW9ucyB5b3UncmUgbm8gbG9uZ2VyIGEgbm9vYiEgUHJlc3MgRU5URVIgdG8gc3RhcnQhXCIsXG4gICAgICA2MDAwXG4gICAgKVxuICB9XG5cbiAgY2xlYXJUdXRvcmlhbCA9ICgpID0+IHtcbiAgICB0aGlzLmNsZWFyUHJldlR1dCgpXG4gICAgY29uc3Qgd29ybGRXcmFwcGVyID0gdGhpcy5nZXRFbGVtZW50KCcjd29ybGQtd3JhcHBlcicpLFxuICAgICAgbGVnZW5kID0gdGhpcy5nZXRFbGVtZW50KCcjbGVnZW5kJyksXG4gICAgICB0dXRvcmlhbFdyYXBwZXIgPSB0aGlzLmdldEVsZW1lbnQoJy50dXRvcmlhbC13cmFwcGVyJylcblxuICAgIGlmIChsZWdlbmQpIHdvcmxkV3JhcHBlci5yZW1vdmVDaGlsZChsZWdlbmQpXG4gICAgaWYgKHR1dG9yaWFsV3JhcHBlcikgd29ybGRXcmFwcGVyLnJlbW92ZUNoaWxkKHR1dG9yaWFsV3JhcHBlcilcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lcmd5IHtcbiAgY29uc3RydWN0b3IoZGlzcGxheSwgZW5lcmd5ID0gNSwgbWF4ID0gNSkge1xuICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXlcbiAgICB0aGlzLmNvdW50ID0gZW5lcmd5XG4gICAgdGhpcy5taW4gPSAwXG4gICAgdGhpcy5tYXggPSBtYXhcbiAgfVxuXG4gIHNldENvdW50ID0gKGNvdW50KSA9PiB7XG4gICAgdGhpcy5jb3VudCA9IGNvdW50XG4gIH1cblxuICByZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLnNldENvdW50KHRoaXMubWF4KVxuICAgIHRoaXMudXBkYXRlRW5lcmd5KClcbiAgfVxuXG4gIGluY3JlbWVudENvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gTWF0aC5taW4odGhpcy5jb3VudCArIDEsIHRoaXMubWF4KVxuICAgIHRoaXMuc2V0Q291bnQoY291bnQpXG4gICAgdGhpcy51cGRhdGVFbmVyZ3koKVxuICB9XG5cbiAgZGVjcmVtZW50Q291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmNvdW50XG4gICAgdGhpcy5jb3VudCA9IE1hdGgubWF4KGNvdW50IC0gMSwgdGhpcy5taW4pXG4gICAgdGhpcy51cGRhdGVFbmVyZ3koKVxuICB9XG5cbiAgZGVjcmVtZW50Q291bnRCeUhhbGYgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmNvdW50XG4gICAgdGhpcy5jb3VudCA9IE1hdGgubWF4KGNvdW50IC0gMC41LCB0aGlzLm1pbilcbiAgICB0aGlzLnVwZGF0ZUVuZXJneSgpXG4gIH1cblxuICB1cGRhdGVFbmVyZ3kgPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNwbGF5LnVwZGF0ZUVuZXJneUJhcih0aGlzLmNvdW50KVxuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZUVuZXJneSgpXG4gIH1cbn1cbiIsImltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tICdkYXRhX3N0cnVjdHVyZXMnXG5pbXBvcnQgQ2hhaW4gZnJvbSAnLi9DaGFpbi5qcydcbmltcG9ydCBDaGlsZCBmcm9tICcuL0NoaWxkLmpzJ1xuaW1wb3J0IEVuZXJneSBmcm9tICcuL0VuZXJneS5qcydcbmltcG9ydCBjaGlsZEltZyBmcm9tICcuL2ltZ3MvY2hpbGQucG5nJ1xuaW1wb3J0IHBhcmVudEltYWdlIGZyb20gJy4vaW1ncy9wYXJlbnQucG5nJ1xuaW1wb3J0IHByZWRhdG9ySW1hZ2UgZnJvbSAnLi9pbWdzL3ByZWRhdG9yLnBuZydcbmltcG9ydCB3b3JtSW1hZ2UgZnJvbSAnLi9pbWdzL3dvcm0ucG5nJ1xuaW1wb3J0IFBhcmVudCBmcm9tICcuL1BhcmVudC5qcydcbmltcG9ydCBQcmVkYXRvciBmcm9tICcuL1ByZWRhdG9yLmpzJ1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnXG5pbXBvcnQgV29ybGQgZnJvbSAnLi9Xb3JsZC5qcydcbmltcG9ydCBXb3JtIGZyb20gJy4vV29ybS5qcydcblxuY29uc3QgQ2hpbGRTcHJpdGUgPSBuZXcgSW1hZ2UoKVxuQ2hpbGRTcHJpdGUuc3JjID0gY2hpbGRJbWdcbmNvbnN0IFBhcmVudFNwcml0ZSA9IG5ldyBJbWFnZSgpXG5QYXJlbnRTcHJpdGUuc3JjID0gcGFyZW50SW1hZ2VcbmNvbnN0IFByZWRhdG9yU3ByaXRlID0gbmV3IEltYWdlKClcblByZWRhdG9yU3ByaXRlLnNyYyA9IHByZWRhdG9ySW1hZ2VcbmNvbnN0IFdvcm1TcHJpdGUgPSBuZXcgSW1hZ2UoKVxuV29ybVNwcml0ZS5zcmMgPSB3b3JtSW1hZ2VcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXksIGNoaWxkQ291bnQgPSA1LCBwcmVkYXRvckNvdW50ID0gNCwgd29ybUNvdW50ID0gMSkge1xuICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXlcbiAgICB0aGlzLm1vdXNlID0geyB4OiBudWxsLCB5OiBudWxsIH1cbiAgICB0aGlzLndvcmxkID0gbnVsbFxuICAgIHRoaXMucGFyZW50ID0gbnVsbFxuICAgIHRoaXMucHJlZGF0b3JzID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgTGlua2VkTGlzdCgpXG4gICAgdGhpcy53b3JtcyA9IG5ldyBMaW5rZWRMaXN0KClcbiAgICB0aGlzLmNoaWxkQ291bnQgPSBjaGlsZENvdW50XG4gICAgdGhpcy5wcmVkYXRvckNvdW50ID0gcHJlZGF0b3JDb3VudFxuICAgIHRoaXMud29ybUNvdW50ID0gd29ybUNvdW50XG4gICAgdGhpcy5jaGFpbiA9IG51bGxcbiAgICB0aGlzLmVuZXJneSA9IG51bGxcbiAgICB0aGlzLnNjb3JlID0gbnVsbFxuICAgIHRoaXMudGltZVNpbmNlV29ybSA9IDBcbiAgICB0aGlzLmFuaW1hdGlvblJlcSA9IG51bGxcbiAgICB0aGlzLmNsaWNraW5nID0gZmFsc2VcbiAgICB0aGlzLmluaXQgPSB0aGlzLmluaXQuYmluZCh0aGlzKVxuICAgIHRoaXMuY2xlYXJHYW1lID0gdGhpcy5jbGVhckdhbWUuYmluZCh0aGlzKVxuICAgIHRoaXMucmVwbGF5R2FtZSA9IHRoaXMucmVwbGF5R2FtZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVNb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgIGlmICh0aGlzLmNsaWNraW5nKSByZXR1cm5cbiAgICB0aGlzLm1vdXNlID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9XG4gICAgdGhpcy5kaXNwbGF5LnJlbW92ZUFuaW1hdGlvbignd29ybS1sZWZ0JylcbiAgfVxuXG4gIGhhbmRsZU1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgaWYgKHRoaXMuZW5lcmd5LmNvdW50IDw9IDAuNSkge1xuICAgICAgdGhpcy5kaXNwbGF5LmFuaW1hdGUoJ3dvcm0tbGVmdCcpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgbW91c2UgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH1cbiAgICB0aGlzLm1vdXNlID0gbW91c2VcbiAgICB0aGlzLmNsaWNraW5nID0gdHJ1ZVxuICAgIGlmICh0aGlzLnBhcmVudC5nZXRDaGlsZENvdW50KCkgPiAwKSB0aGlzLmVuZXJneS5kZWNyZW1lbnRDb3VudEJ5SGFsZigpXG4gIH1cblxuICBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICAgIHRoaXMuY2xpY2tpbmcgPSBmYWxzZVxuICB9XG5cbiAgZGVzdHJveVdvcm0gPSAod29ybSkgPT4ge1xuICAgIHRoaXMud29ybXMuZGVsZXRlTm9kZSh3b3JtKVxuICB9XG5cbiAgZGVzdHJveUNoaWxkID0gKGNoaWxkKSA9PiB7XG4gICAgdGhpcy5jaGlsZHJlbi5kZWxldGVOb2RlKGNoaWxkKVxuICAgIHRoaXMuc3Bhd25DaGlsZHJlbigxNy41KVxuICB9XG5cbiAgY2hlY2tJblJhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50LFxuICAgICAgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKSxcbiAgICAgIHByZWRhdG9ycyA9IHRoaXMucHJlZGF0b3JzLnRvQXJyYXkoKSxcbiAgICAgIHdvcm1zID0gdGhpcy53b3Jtcy50b0FycmF5KClcblxuICAgIC8vIENoaWxkIHByZWRhdG9yIGNvbGxpc2lvbnNcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBpZiAocGFyZW50LmNoZWNrSW5SYW5nZShjaGlsZCkpIHtcbiAgICAgICAgcGFyZW50LmhpdHNDaGlsZChjaGlsZClcbiAgICAgICAgdGhpcy5zcGF3bkNoaWxkcmVuKDE3LjUpXG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHByZWRhdG9yIG9mIHByZWRhdG9ycykge1xuICAgICAgICBpZiAoY2hpbGQuY2hlY2tJblJhbmdlKHByZWRhdG9yLCAxMCkpIGNoaWxkLmF2b2lkUHJlZGF0b3IoKVxuICAgICAgICBpZiAoY2hpbGQuY2hlY2tJblJhbmdlKHByZWRhdG9yLCAwKSkgY2hpbGQuaGl0c1ByZWRhdG9yKHRoaXMpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFBhcmVudCBwcmVkYXRvciBjb2xsaXNpb25zXG4gICAgZm9yIChjb25zdCBwcmVkYXRvciBvZiBwcmVkYXRvcnMpIHtcbiAgICAgIGlmIChwYXJlbnQuY2hlY2tJblJhbmdlKHByZWRhdG9yLCA1KSlcbiAgICAgICAgcGFyZW50LmNoZWNrQ29sbGlzaW9uV2l0aFByZWRhdG9yKHByZWRhdG9yKVxuICAgIH1cblxuICAgIC8vUGFyZW50IHdvcm0gY29sbGlzaW9uc1xuICAgIGZvciAoY29uc3Qgd29ybSBvZiB3b3Jtcykge1xuICAgICAgaWYgKHBhcmVudC5jaGVja0luUmFuZ2Uod29ybSwgMikpIHBhcmVudC5oaXRzV29ybSh0aGlzLCB3b3JtKVxuICAgIH1cbiAgfVxuXG4gIHNwYXduQ2hpbGRyZW4gPSAocikgPT4ge1xuICAgIGNvbnN0IHNpemUgPSB7IHdpZHRoOiByICogMiwgaGVpZ2h0OiByICogMiB9XG4gICAgbGV0IGluZGVwZW5kZW50QyA9IHRoaXMuY2hpbGRyZW4uc2l6ZSAtIHRoaXMucGFyZW50LmdldENoaWxkQ291bnQoKVxuXG4gICAgd2hpbGUgKGluZGVwZW5kZW50QyA8IHRoaXMuY2hpbGRDb3VudCAmJiB0aGlzLmNoaWxkQ291bnQgPiAwKSB7XG4gICAgICBjb25zdCByYW5kb21Qb3MgPSB0aGlzLndvcmxkLmdldFJhbmRvbVBvcyhyKSxcbiAgICAgICAgY2hpbGQgPSBuZXcgQ2hpbGQocmFuZG9tUG9zLCByLCB0aGlzLndvcmxkLCBDaGlsZFNwcml0ZSwgc2l6ZSlcblxuICAgICAgY2hpbGQuc2V0UmFuZG9tRGlyKClcbiAgICAgIHRoaXMuY2hpbGRyZW4uYXBwZW5kVG9UYWlsKGNoaWxkKVxuICAgICAgaW5kZXBlbmRlbnRDID0gdGhpcy5jaGlsZHJlbi5zaXplIC0gdGhpcy5wYXJlbnQuZ2V0Q2hpbGRDb3VudCgpXG4gICAgfVxuICB9XG5cbiAgc3Bhd25QcmVkYXRvcnMgPSAocikgPT4ge1xuICAgIGNvbnN0IHNpemUgPSB7IHdpZHRoOiByICogMiwgaGVpZ2h0OiByICogMiB9XG5cbiAgICB3aGlsZSAodGhpcy5wcmVkYXRvcnMuc2l6ZSA8IHRoaXMucHJlZGF0b3JDb3VudCkge1xuICAgICAgY29uc3QgcmFuZG9tUG9zID0gdGhpcy53b3JsZC5nZXRSYW5kb21Qb3MociksXG4gICAgICAgIHByZWRhdG9yID0gbmV3IFByZWRhdG9yKHJhbmRvbVBvcywgciwgdGhpcy53b3JsZCwgUHJlZGF0b3JTcHJpdGUsIHNpemUpXG4gICAgICBwcmVkYXRvci5zZXRSYW5kb21EaXIoKVxuICAgICAgdGhpcy5wcmVkYXRvcnMuYXBwZW5kVG9UYWlsKHByZWRhdG9yKVxuICAgIH1cbiAgfVxuXG4gIHNwYXduV29ybXMgPSAociwgdmVsKSA9PiB7XG4gICAgaWYgKCF2ZWwpIHZlbCA9IHsgZHg6IDIsIGR5OiAyIH1cbiAgICBjb25zdCBzaXplID0geyB3aWR0aDogciAqIDIsIGhlaWdodDogciAqIDIgfVxuICAgIHdoaWxlICh0aGlzLndvcm1zLnNpemUgPCB0aGlzLndvcm1Db3VudCkge1xuICAgICAgY29uc3QgcmFuZG9tUG9zID0gdGhpcy53b3JsZC5nZXRSYW5kb21Qb3MociksXG4gICAgICAgIHdvcm0gPSBuZXcgV29ybShyYW5kb21Qb3MsIHIsIHRoaXMud29ybGQsIFdvcm1TcHJpdGUsIHNpemUsIHZlbClcbiAgICAgIHdvcm0uc2V0UmFuZG9tRGlyKClcbiAgICAgIHRoaXMud29ybXMuYXBwZW5kVG9UYWlsKHdvcm0pXG4gICAgfVxuICB9XG5cbiAgaW5pdENoaWxkcmVuID0gKHIpID0+IHtcbiAgICB0aGlzLnNwYXduQ2hpbGRyZW4ocilcbiAgfVxuXG4gIGluaXRQcmVkYXRvcnMgPSAocikgPT4ge1xuICAgIHRoaXMuc3Bhd25QcmVkYXRvcnMocilcbiAgfVxuXG4gIGluaXRQYXJlbnQgPSAocikgPT4ge1xuICAgIGNvbnN0IHNpemUgPSB7IHdpZHRoOiByICogMiwgaGVpZ2h0OiByICogMiB9XG4gICAgY29uc3QgaW5pdGlhbFBvcyA9IHtcbiAgICAgIHg6IHRoaXMud29ybGQuc2l6ZS53aWR0aCAvIDIgKyByLFxuICAgICAgeTogdGhpcy53b3JsZC5zaXplLmhlaWdodCAvIDIgKyByLFxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCA9IG5ldyBQYXJlbnQoXG4gICAgICBpbml0aWFsUG9zLFxuICAgICAgcixcbiAgICAgIHRoaXMud29ybGQsXG4gICAgICB0aGlzLmNoYWluLFxuICAgICAgdGhpcy5zY29yZSxcbiAgICAgIHRoaXMuZW5lcmd5LFxuICAgICAgUGFyZW50U3ByaXRlLFxuICAgICAgc2l6ZVxuICAgIClcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICB9XG5cbiAgaW5pdFdvcm1zID0gKHIsIHZlbCkgPT4ge1xuICAgIHRoaXMuc3Bhd25Xb3JtcyhyLCB2ZWwpXG4gIH1cblxuICBpbml0Q2hhaW4gPSAoKSA9PiB7XG4gICAgY29uc3QgY2hhaW4gPSBuZXcgQ2hhaW4odGhpcy5kaXNwbGF5KVxuICAgIGNoYWluLmluaXQoKVxuICAgIHRoaXMuY2hhaW4gPSBjaGFpblxuICB9XG5cbiAgaW5pdFdvcmxkID0gKCkgPT4ge1xuICAgIGNvbnN0IHdvcmxkID0gbmV3IFdvcmxkKHRoaXMuZGlzcGxheSlcbiAgICB3b3JsZC5pbml0KClcbiAgICB0aGlzLndvcmxkID0gd29ybGRcbiAgfVxuXG4gIGluaXRTY29yZSA9ICgpID0+IHtcbiAgICBjb25zdCBzY29yZSA9IG5ldyBTY29yZSh0aGlzLmRpc3BsYXkpXG4gICAgc2NvcmUuaW5pdCgpXG4gICAgdGhpcy5zY29yZSA9IHNjb3JlXG4gIH1cblxuICBpbml0RW5lcmd5ID0gKGluaXRDb3VudCwgbWF4KSA9PiB7XG4gICAgY29uc3QgZW5lcmd5ID0gbmV3IEVuZXJneSh0aGlzLmRpc3BsYXksIGluaXRDb3VudCwgbWF4KVxuICAgIGVuZXJneS5pbml0KClcbiAgICB0aGlzLmVuZXJneSA9IGVuZXJneVxuICB9XG5cbiAgcmVwbGF5R2FtZSgpIHtcbiAgICB0aGlzLnJlc2V0R2FtZSgpXG4gICAgdGhpcy5kaXNwbGF5LmNsZWFyR2FtZUVuZCgpXG4gIH1cblxuICByZXNldEdhbWUgPSAoKSA9PiB7XG4gICAgdGhpcy5lbmVyZ3kucmVzZXQoKVxuICAgIHRoaXMuc2NvcmUucmVzZXQoKVxuICAgIHRoaXMubW91c2UgPSB7IHg6IG51bGwsIHk6IG51bGwgfVxuICAgIHRoaXMucGFyZW50ID0gbnVsbFxuICAgIHRoaXMucHJlZGF0b3JzID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgTGlua2VkTGlzdCgpXG4gICAgdGhpcy53b3JtcyA9IG5ldyBMaW5rZWRMaXN0KClcbiAgICB0aGlzLmNoYWluID0gbnVsbFxuICAgIHRoaXMudGltZVNpbmNlV29ybSA9IDBcblxuICAgIHRoaXMuaW5pdFdvcmxkKClcbiAgICB0aGlzLmluaXRDaGFpbigpXG4gICAgdGhpcy5pbml0UGFyZW50KDMwKVxuICAgIHRoaXMuaW5pdENoaWxkcmVuKDE3LjUpXG4gICAgdGhpcy5pbml0UHJlZGF0b3JzKDM1KVxuICAgIHRoaXMuaW5pdFdvcm1zKDIwKVxuICAgIHRoaXMuYW5pbWF0aW9uUmVxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpXG4gIH1cblxuICBjbGVhckdhbWUoKSB7XG4gICAgdGhpcy5kaXNwbGF5LmNsZWFyR2FtZUVuZCgpXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uUmVxKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTW91c2VEb3duLCBmYWxzZSlcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcCwgZmFsc2UpXG4gIH1cblxuICBnYW1lT3ZlciA9ICgpID0+IHtcbiAgICB0aGlzLnNjb3JlLmNhbGN1bGF0ZUhpZ2hTY29yZSgpXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uUmVxKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJHYW1lRW5kKFxuICAgICAgdGhpcy5yZXBsYXlHYW1lLFxuICAgICAgdGhpcy5zY29yZS5zY29yZSxcbiAgICAgIHRoaXMuc2NvcmUuaGlnaFNjb3JlXG4gICAgKVxuICAgIHJldHVyblxuICB9XG5cbiAgY2xlYXJDYW52YXMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy53b3JsZC5jYW52YXMsXG4gICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICB9XG5cbiAgZHJhdyA9ICh0aW1lc3RhbXApID0+IHtcbiAgICBpZiAodGhpcy5lbmVyZ3kuY291bnQgPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmdhbWVPdmVyKClcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lUGFzc2VkID0gdGltZXN0YW1wIC0gdGhpcy50aW1lU2luY2VXb3JtXG4gICAgaWYgKHRpbWVQYXNzZWQgPj0gMjUwMCAmJiB0aGlzLndvcm1zLnNpemUgPD0gMCkge1xuICAgICAgdGhpcy5zcGF3bldvcm1zKDIwKVxuICAgICAgdGhpcy50aW1lU2luY2VXb3JtID0gdGltZXN0YW1wXG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzID0gdGhpcy53b3JsZC5jYW52YXMsXG4gICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KCksXG4gICAgICBwcmVkYXRvcnMgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KCksXG4gICAgICB3b3JtcyA9IHRoaXMud29ybXMudG9BcnJheSgpXG5cbiAgICB0aGlzLmNsZWFyQ2FudmFzKClcblxuICAgIHRoaXMucGFyZW50Lm1vdmVzKHRoaXMubW91c2UpXG4gICAgdGhpcy5wYXJlbnQuZHJhdyhjdHgsIHsgeDogMzAsIHk6IDI1IH0pXG5cbiAgICBmb3IgKGNvbnN0IHByZWRhdG9yIG9mIHByZWRhdG9ycykge1xuICAgICAgcHJlZGF0b3IubW92ZXMoKVxuICAgICAgcHJlZGF0b3IuZHJhdyhjdHgsIHsgeDogMzAsIHk6IDI1IH0pXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB3b3JtIG9mIHdvcm1zKSB7XG4gICAgICB3b3JtLm1vdmVzKHRoaXMpXG4gICAgICB3b3JtLmRyYXcoY3R4LCB7IHg6IDAsIHk6IDAgfSlcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBpZiAoY2hpbGQuaW5kZXBlbmRlbmNlKSBjaGlsZC5tb3ZlcygpXG4gICAgICBjaGlsZC5kcmF3KGN0eCwgeyB4OiAxNSwgeTogMTUgfSlcblxuICAgICAgdGhpcy5jbGlja2luZyA/IGNoaWxkLnNldENsaWNraW5nKHRydWUpIDogY2hpbGQuc2V0Q2xpY2tpbmcoZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5jaGVja0luUmFuZ2UoKVxuICAgIHRoaXMuYW5pbWF0aW9uUmVxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJMZWdlbmQoKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJTY29yZSgpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlckNoYWluKClcbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyRW5lcmd5KClcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTW91c2VEb3duLCBmYWxzZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcCwgZmFsc2UpXG4gICAgdGhpcy5pbml0RW5lcmd5KDUsIDUpXG4gICAgdGhpcy5pbml0V29ybGQoKVxuICAgIHRoaXMuaW5pdFNjb3JlKClcbiAgICB0aGlzLmluaXRDaGFpbigpXG4gICAgdGhpcy5pbml0UGFyZW50KDMwKVxuICAgIHRoaXMuaW5pdENoaWxkcmVuKDE3LjUpXG4gICAgdGhpcy5pbml0UHJlZGF0b3JzKDM1KVxuICAgIHRoaXMuaW5pdFdvcm1zKDIwKVxuICAgIHRoaXMuYW5pbWF0aW9uUmVxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJhbmRvbUludCwgaW5SYW5nZSB9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IHIgPSAxMCxcbiAgYyA9ICcjNzI4MGY2JyxcbiAgdiA9IHsgZHg6IDEsIGR5OiAxIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocG9zLCByYWRpdXMgPSByLCB3b3JsZCwgc3ByaXRlLCBzaXplLCB2ZWwgPSB2LCBjb2xvciA9IGMpIHtcbiAgICB0aGlzLnBvcyA9IHBvc1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gICAgdGhpcy53b3JsZCA9IHdvcmxkXG4gICAgdGhpcy5zcHJpdGUgPSBzcHJpdGVcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgdGhpcy52ZWwgPSB2ZWxcbiAgICB0aGlzLmN1cnJEaXIgPSBbMCwgMF1cbiAgICB0aGlzLnBvc0NhY2hlID0gW11cblxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpXG4gICAgdGhpcy5tb3Zlc1dpdGhDdXJzb3IgPSB0aGlzLm1vdmVzV2l0aEN1cnNvci5iaW5kKHRoaXMpXG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMubW92ZXMuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hlY2tJblJhbmdlID0gdGhpcy5jaGVja0luUmFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c1BhcmVudCA9IHRoaXMuaGl0c1BhcmVudC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaXRzUHJlZGF0b3IgPSB0aGlzLmhpdHNQcmVkYXRvci5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaXRzQ2hpbGQgPSB0aGlzLmhpdHNDaGlsZC5iaW5kKHRoaXMpXG4gIH1cblxuICBzZXRWZWxvY2l0eSA9ICh2ZWxvY2l0eSkgPT4ge1xuICAgIHRoaXMudmVsID0gdmVsb2NpdHlcbiAgfVxuXG4gIHNldFBvcyA9IChwb3MpID0+IHtcbiAgICB0aGlzLnBvcyA9IHBvc1xuICB9XG5cbiAgc2V0UG9zQ2FjaGUgPSAocG9zQ2FjaGUpID0+IHtcbiAgICB0aGlzLnBvc0NhY2hlID0gcG9zQ2FjaGVcbiAgfVxuXG4gIHNldEN1cnJEaXIgPSAoZGlyKSA9PiB7XG4gICAgdGhpcy5jdXJyRGlyID0gZGlyXG4gIH1cblxuICBzZXRSYW5kb21EaXIgPSAoKSA9PiB7XG4gICAgLyogXG4gICAgOCBwb3NzaWJsZSBkaXJlY3Rpb25zLlxuICAgIFZlcnRpY2FsIGFuZCBob3Jpem9udGFsOiBcbiAgICAgICAg4oaRICAgICAgXG4gICAgICAgIOKGkVxuICAg4oaQICDihpAgICDihpIgIOKGkiAgXG4gICAgICAgIOKGk1xuICAgICAgICDihpMgXG4gICAgRGlhZ29uYWxzOlxuICAgIOKGliAgICAgIOKGl1xuICAgICAg4oaWICDihpdcbiAgICAgIOKGmSAg4oaYIFxuICAgIOKGmSAgICAgIOKGmFxuICAgICovXG5cbiAgICBsZXQgeyBkeCwgZHkgfSA9IHRoaXMudmVsXG4gICAgZHggPSBkeCA/IGR4IDogMVxuICAgIGR5ID0gZHkgPyBkeSA6IDFcbiAgICBjb25zdCBpbmRleCA9IGdldFJhbmRvbUludCg4KVxuICAgIGNvbnN0IHBvc3NpYmxlRGlyZWN0aW9ucyA9IFtcbiAgICAgIC8vIDAgdmFsdWVzIG9mZiBzbGlnaHRseSBzbyBvYmplY3RzIGRvZXNuJ3Qgc3RpY2sgdG8gZWRnZXMuXG4gICAgICBbZHgsIDAuMl0sXG4gICAgICBbLWR4LCAwLjNdLFxuICAgICAgWzAuMTUsIGR5XSxcbiAgICAgIFswLjIzLCAtZHldLFxuICAgICAgW2R4LCBkeV0sXG4gICAgICBbLWR4LCBkeV0sXG4gICAgICBbZHgsIC1keV0sXG4gICAgICBbLWR4LCAtZHldLFxuICAgIF1cblxuICAgIHRoaXMuc2V0Q3VyckRpcihwb3NzaWJsZURpcmVjdGlvbnNbaW5kZXhdKVxuICB9XG5cbiAgY2hlY2tPdXRPZkJvdW5kcyA9IChwb3MpID0+IHtcbiAgICByZXR1cm4gdGhpcy53b3JsZC5jaGVja091dE9mQm91bmRzKHBvcywgdGhpcy5yYWRpdXMpXG4gIH1cblxuICBnZXRSYW5kb21Qb3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMud29ybGQuZ2V0UmFuZG9tUG9zKHRoaXMucmFkaXVzKVxuICB9XG4gIC8qKiBCb3VuY2Ugb2JqZWN0IGJhY2sgaWYgaXQgaGl0cyB0aGUgd2FsbCAqL1xuICBib3VuY2VCYWNrID0gKHBvcykgPT4ge1xuICAgIGNvbnN0IHsgYm91bmRzIH0gPSB0aGlzLndvcmxkLFxuICAgICAgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfSA9IGJvdW5kcyxcbiAgICAgIHIgPSB0aGlzLnJhZGl1c1xuXG4gICAgbGV0IHsgeCwgeSB9ID0gcG9zLFxuICAgICAgZHggPSB0aGlzLmN1cnJEaXJbMF0sXG4gICAgICBkeSA9IHRoaXMuY3VyckRpclsxXVxuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IubmFtZSA9PT0gJ0NoaWxkJykge1xuICAgICAgaWYgKHRoaXMudmVsLmR4ID4gMSB8fCB0aGlzLnZlbC5keSA+IDEpIHtcbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eSh7IGR4OiAxLCBkeTogMSB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoZHggPiAxKSB7XG4gICAgICAgIGR4ID0gZHggLyA1XG4gICAgICB9XG4gICAgICBpZiAoZHkgPiAxKSB7XG4gICAgICAgIGR5ID0gZHkgLyA1XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggKyByID4gcmlnaHQgfHwgeCAtIHIgPCBsZWZ0KSB7XG4gICAgICB0aGlzLnNldEN1cnJEaXIoWy1keCwgZHldKVxuICAgIH1cblxuICAgIGlmICh5IC0gciA8IHRvcCB8fCB5ICsgciA+IGJvdHRvbSkge1xuICAgICAgdGhpcy5zZXRDdXJyRGlyKFtkeCwgLWR5XSlcbiAgICB9XG4gICAgLy9vYmpzIGdldCBzdHVjayBpZiBwYXJhbGxlbCB0byB3YWxscyBhbmQgb3V0IG9mIGJvdW5kc1xuICAgIGxldCBuUG9zID0geyB4OiB4ICsgdGhpcy5jdXJyRGlyWzBdLCB5OiB5ICsgdGhpcy5jdXJyRGlyWzFdIH1cbiAgICBpZiAodGhpcy5jaGVja091dE9mQm91bmRzKG5Qb3MpKSB0aGlzLnNldFJhbmRvbURpcigpXG4gIH1cblxuICBjaGVja0luUmFuZ2Uob2JqLCBjdXNoaW9uID0gMCkge1xuICAgIC8vIE5vdGU6IG9iai5jb25zdHJ1Y3Rvci5uYW1lIHdvbid0IHdvcmsgd2l0aCBJRSBhbmQgdGhlcmUgYXJlIHNvbWUgY2F2ZWF0cy4gTW9yZSBpbmZvIC0tPiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9GdW5jdGlvbi9uYW1lXG5cbiAgICBjb25zdCBvUG9zID0gb2JqLnBvcyxcbiAgICAgIG9SID0gb2JqLnJhZGl1cyArIGN1c2hpb24sXG4gICAgICB7IHgsIHkgfSA9IHRoaXMucG9zLFxuICAgICAgcmFuZ2VYID0gW29Qb3MueCAtIG9SLCBvUG9zLnggKyBvUl0sXG4gICAgICByYW5nZVkgPSBbb1Bvcy55IC0gb1IsIG9Qb3MueSArIG9SXSxcbiAgICAgIHIgPSB0aGlzLnJhZGl1cyArIGN1c2hpb25cblxuICAgIGNvbnN0IHdpdGhpblJhbmdlID1cbiAgICAgIChpblJhbmdlKHggLSByLCAuLi5yYW5nZVgpIHx8IGluUmFuZ2UoeCArIHIsIC4uLnJhbmdlWCkpICYmXG4gICAgICAoaW5SYW5nZSh5IC0gciwgLi4ucmFuZ2VZKSB8fCBpblJhbmdlKHkgKyByLCAuLi5yYW5nZVkpKVxuXG4gICAgcmV0dXJuIHdpdGhpblJhbmdlXG4gIH1cblxuICAvLyBDYW4ndCB1c2UgQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1jbGFzcy1wcm9wZXJ0aWVzLiBzdXBlci5tb3ZlKCkgZG9lc24ndCB3b3JrIGluIHN1YmNsYXNzZXMuXG4gIGhpdHNQYXJlbnQob2JqKSB7fVxuXG4gIGhpdHNQcmVkYXRvcihvYmopIHt9XG5cbiAgaGl0c0NoaWxkKG9iaikge31cblxuICAvKiogRHJhdyB0aGUgb2JqZWN0IG9uIGNhbnZhcyAqL1xuICBkcmF3ID0gKGN0eCwgb2Zmc2V0ID0geyB4OiAwLCB5OiAwIH0pID0+IHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMucG9zXG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuc3ByaXRlLFxuICAgICAgeCAtIG9mZnNldC54LFxuICAgICAgeSAtIG9mZnNldC55LFxuICAgICAgdGhpcy5zaXplLndpZHRoLFxuICAgICAgdGhpcy5zaXplLmhlaWdodFxuICAgIClcbiAgfVxuXG4gIGNsaXBQb3MgPSAoeyB4LCB5IH0pID0+IHtcbiAgICBjb25zdCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9ID0gdGhpcy53b3JsZC5ib3VuZHMsXG4gICAgICByID0gdGhpcy5yYWRpdXNcblxuICAgIGNvbnN0IGNsaXBwZWRYID0geCA+IGxlZnQgKyByICYmIHggPCByaWdodCAtIHIgPyB4IDogdGhpcy5wb3MueCxcbiAgICAgIGNsaXBwZWRZID0geSA+IHRvcCArIHIgJiYgeSA8IGJvdHRvbSAtIHIgPyB5IDogdGhpcy5wb3MueVxuXG4gICAgcmV0dXJuIHsgeDogY2xpcHBlZFgsIHk6IGNsaXBwZWRZIH1cbiAgfVxuXG4gIG1vdmVzV2l0aEN1cnNvcihwb3MsIGVhc2luZywgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0gdGhpcy53b3JsZFxuICAgIGxldCB7IHgsIHkgfSA9IHBvc1xuXG4gICAgLy8gT2Zmc2V0cyB0byBhY2NvdW50IGZvciBtYXJnaW4sIHBhZGRpbmdzIGFyb3VuZCBnYW1lIHdvcmxkLlxuICAgIGNvbnN0IG9mZnNldEwgPSBvZmZzZXRzLmxlZnQsXG4gICAgICBvZmZzZXRUID0gb2Zmc2V0cy50b3AsXG4gICAgICByZWxhdGl2ZVggPSB4IC0gb2Zmc2V0TCxcbiAgICAgIHJlbGF0aXZlWSA9IHkgLSBvZmZzZXRUXG5cbiAgICBsZXQgeERpZmYgPSByZWxhdGl2ZVggLSB0aGlzLnBvcy54LFxuICAgICAgeURpZmYgPSByZWxhdGl2ZVkgLSB0aGlzLnBvcy55XG5cbiAgICAvLyBPZmZzZXQgY2hpbGRyZW4gc28gdGhleSBkb24ndCBhbGwgb3ZlcmxhcCB0aGUgcGFyZW50IHdoZW4gc3RhdGlvbmFyeSBvciBzbG93IG1vdmluZy5cbiAgICBpZiAoeURpZmYgPD0gMCkgeURpZmYgKz0gb2Zmc2V0XG4gICAgLy9Nb3JlIGluZm8gb24gdHdlZW5pbmcsIGFuaW1hdGlvbiAtLT4gaHR0cHM6Ly9zcGljeXlvZ2h1cnQuY29tL3R1dG9yaWFscy9odG1sNS1qYXZhc2NyaXB0LWdhbWUtZGV2ZWxvcG1lbnQvY3JlYXRlLWEtc21vb3RoLWNhbnZhcy1hbmltYXRpb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM3OTczNTc3LzExMjc5ODExXG4gICAgY29uc3QgdmVsWCA9IHhEaWZmICogZWFzaW5nLFxuICAgICAgdmVsWSA9IHlEaWZmICogZWFzaW5nXG5cbiAgICB0aGlzLnZlbG9jaXR5ID0geyB4OiB2ZWxYLCB5OiB2ZWxZIH1cblxuICAgIHggPSB0aGlzLnBvcy54ICsgdmVsWFxuICAgIHkgPSB0aGlzLnBvcy55ICsgdmVsWVxuXG4gICAgLy9Eb24ndCBsZXQgb2JqZWN0cyBwYXNzIGVkZ2VcbiAgICBjb25zdCBjbGlwcGVkUG9zID0gdGhpcy5jbGlwUG9zKHsgeCwgeSB9KVxuXG4gICAgdGhpcy5zZXRQb3MoY2xpcHBlZFBvcylcblxuICAgIC8vIENhY2hlIGxhc3QgNSBwb3NpdGlvbnMuIE1ha2VzIGNoaWxkcmVuJ3MgbW92ZW1lbnQgbW9yZSBuYXR1cmFsLlxuICAgIGNvbnN0IHBvc0NhY2hlID0gdGhpcy5wb3NDYWNoZVxuICAgIGlmIChwb3NDYWNoZS5sZW5ndGggPiA0KSBwb3NDYWNoZS5zaGlmdCgpXG4gICAgcG9zQ2FjaGUucHVzaChwb3MpXG4gICAgdGhpcy5zZXRQb3NDYWNoZShwb3NDYWNoZSlcbiAgfVxuXG4gIG1vdmVzKCkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zLFxuICAgICAgcG9zID0geyB4OiB4ICsgdGhpcy5jdXJyRGlyWzBdLCB5OiB5ICsgdGhpcy5jdXJyRGlyWzFdIH1cblxuICAgIHdoaWxlICh0aGlzLmNoZWNrT3V0T2ZCb3VuZHMocG9zKSkge1xuICAgICAgdGhpcy5zZXRSYW5kb21EaXIoKVxuICAgICAgcG9zID0geyB4OiB4ICsgdGhpcy5jdXJyRGlyWzBdLCB5OiB5ICsgdGhpcy5jdXJyRGlyWzFdIH1cbiAgICB9XG4gICAgLy8gb2JqZWN0cyBrZWVwIGdldHRpbmcgc3R1Y2sgYXQgdGhlIHdhbGxcbiAgICAvLyBpZiAodGhpcy5jaGVja091dE9mQm91bmRzKHBvcykpIHRoaXMuYm91bmNlQmFjayhwb3MpXG5cbiAgICB0aGlzLnNldFBvcyhwb3MpXG4gIH1cbn1cbiIsImltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tICdkYXRhX3N0cnVjdHVyZXMnXG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vTW92aW5nT2JqZWN0J1xuXG5jb25zdCByID0gMTMsXG4gIGMgPSAnIzcyODBmNicsXG4gIGUgPSAxXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmVudCBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBvcyxcbiAgICByYWRpdXMgPSByLFxuICAgIHdvcmxkLFxuICAgIGNoYWluLFxuICAgIHNjb3JlLFxuICAgIGVuZXJneSxcbiAgICBzcHJpdGUsXG4gICAgc2l6ZSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9LFxuICAgIGNvbG9yID0gYyxcbiAgICBlYXNpbmcgPSBlXG4gICkge1xuICAgIHN1cGVyKHBvcywgcmFkaXVzLCB3b3JsZCwgc3ByaXRlLCBzaXplLCBudWxsLCBjb2xvcilcbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3IExpbmtlZExpc3QoKVxuICAgIHRoaXMuY2hhaW4gPSBjaGFpblxuICAgIHRoaXMuc2NvcmUgPSBzY29yZVxuICAgIHRoaXMuZW5lcmd5ID0gZW5lcmd5XG4gICAgdGhpcy5lYXNpbmcgPSBlYXNpbmdcbiAgICB0aGlzLmN1cnJQcmVkQ29scyA9IFtdXG4gICAgdGhpcy5wb3NDYWNoZSA9IFtdXG4gICAgdGhpcy5zcHJpdGUgPSBzcHJpdGVcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMubW92ZXMuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c1ByZWRhdG9yID0gdGhpcy5oaXRzUHJlZGF0b3IuYmluZCh0aGlzKVxuICAgIHRoaXMuaGl0c0NoaWxkID0gdGhpcy5oaXRzQ2hpbGQuYmluZCh0aGlzKVxuICAgIHRoaXMuY2xpY2tpbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5pc1R1dG9yaWFsID0gZmFsc2VcbiAgfVxuXG4gIHNldElzVHV0b3JpYWwgPSAodmFsKSA9PiB7XG4gICAgdGhpcy5pc1R1dG9yaWFsID0gdmFsXG4gIH1cblxuICBzZXRDdXJyUHJlZENvbHMgPSAoY3VyclByZWRDb2xzKSA9PiB7XG4gICAgdGhpcy5jdXJyUHJlZENvbHMgPSBjdXJyUHJlZENvbHNcbiAgfVxuXG4gIGdldENoaWxkQ291bnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uc2l6ZVxuICB9XG5cbiAgZGVsZXRlQWxsQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgd2hpbGUgKHRoaXMuZ2V0Q2hpbGRDb3VudCgpID4gMSkge1xuICAgICAgdGhpcy5kZWxldGVMYXN0Q2hpbGQoKVxuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUxhc3RDaGlsZCA9ICgpID0+IHtcbiAgICBsZXQgY3VyciA9IHRoaXMuY2hpbGRyZW4uZGVsZXRlRnJvbVRhaWwoKVxuICAgIGlmIChjdXJyKSB7XG4gICAgICBjdXJyLnNldENoYWluUG9zKG51bGwpXG4gICAgICBjdXJyLnNldE5leHRDaGlsZChudWxsKVxuICAgICAgY3Vyci5zZXRJbmRlcGVuZGVuY2UodHJ1ZSlcbiAgICAgIHRoaXMuY2hhaW4uZGVjcmVtZW50Q291bnQoKVxuICAgICAgY3Vyci5zZXRQYXJlbnQobnVsbClcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJcbiAgfVxuXG4gIGRlc3Ryb3lDaGlsZCA9IChjaGlsZCkgPT4ge1xuICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlTm9kZShjaGlsZClcbiAgfVxuXG4gIGFwcGVuZENoaWxkID0gKGNoaWxkKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNoaWxkcmVuLnNlYXJjaChjaGlsZCkpIHtcbiAgICAgIHRoaXMuY2hhaW4uaW5jcmVtZW50Q291bnQoKVxuICAgICAgdGhpcy5zY29yZS5jYWxjdWxhdGVTY29yZSh0aGlzLmdldENoaWxkQ291bnQoKSlcbiAgICAgIGNvbnN0IHRhaWwgPSB0aGlzLmNoaWxkcmVuLnRhaWwsXG4gICAgICAgIGxhc3RDaGlsZCA9IHRhaWwgJiYgdGFpbC52YWxcbiAgICAgIGlmIChsYXN0Q2hpbGQpIGxhc3RDaGlsZC5zZXROZXh0Q2hpbGQoY2hpbGQpXG5cbiAgICAgIHRoaXMuY2hpbGRyZW4uYXBwZW5kVG9UYWlsKGNoaWxkKVxuXG4gICAgICBjaGlsZC5zZXRDaGFpblBvcyh0aGlzLmdldENoaWxkQ291bnQoKSlcbiAgICAgIGNoaWxkLnNldFBhcmVudCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ29sbGlzaW9uV2l0aFByZWRhdG9yID0gKHByZWRhdG9yKSA9PiB7XG4gICAgY29uc3QgY29sbGlkZWQgPSBzdXBlci5jaGVja0luUmFuZ2UocHJlZGF0b3IpLFxuICAgICAgY29sbGlkaW5nID0gdGhpcy5jdXJyUHJlZENvbHMuaW5jbHVkZXMocHJlZGF0b3IpXG5cbiAgICAvKiBpZiBjb2xsaWRlZCBhbmQgZmlyc3QgY29udGFjdCxcbiAgICAgIGFkZCBwcmVkYXRvciB0byB0aGUgY3VycmVudCBjb2xsaXNpb25zIHdpdGggcHJlZGF0b3IsXG4gICAgICBjYWxsIGNvbGxpZGUgd2l0aCBwcmVkYXRvciAoZGVjcmVtZW50IGNoYWluIGNvdW50KVxuICAgICovXG4gICAgaWYgKGNvbGxpZGVkICYmICFjb2xsaWRpbmcpIHtcbiAgICAgIGNvbnN0IGN1cnJQcmVkQ29scyA9IHRoaXMuY3VyclByZWRDb2xzLnNsaWNlKClcbiAgICAgIGN1cnJQcmVkQ29scy5wdXNoKHByZWRhdG9yKVxuICAgICAgdGhpcy5zZXRDdXJyUHJlZENvbHMoY3VyclByZWRDb2xzKVxuICAgICAgdGhpcy5oaXRzUHJlZGF0b3IoKVxuICAgIH1cblxuICAgIC8qIGlmIHdhcyBjb2xsaWRpbmcgYW5kIHN0b3BwZWQgY29sbGlkaW5nLCByZW1vdmUgcHJlZGF0b3IgZnJvbSBjdXJyZW50IGNvbGxpc2lvbnMgKi9cbiAgICBpZiAoIWNvbGxpZGVkICYmIHN1cGVyLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgNSkgJiYgY29sbGlkaW5nKSB7XG4gICAgICBjb25zdCBjdXJyUHJlZENvbHMgPSB0aGlzLmN1cnJQcmVkQ29scy5zbGljZSgpLFxuICAgICAgICBpbmRleCA9IGN1cnJQcmVkQ29scy5pbmRleE9mKHByZWRhdG9yKVxuICAgICAgY3VyclByZWRDb2xzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIHRoaXMuc2V0Q3VyclByZWRDb2xzKGN1cnJQcmVkQ29scylcbiAgICB9XG4gIH1cblxuICBoaXRzUHJlZGF0b3IoKSB7XG4gICAgdGhpcy5jaGFpbi5yZXNldCgpXG4gICAgdGhpcy5lbmVyZ3kuZGVjcmVtZW50Q291bnQoKVxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi50b0FycmF5KClcblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkLnNldFBhcmVudChudWxsKVxuICAgICAgY2hpbGQuc2V0Q2hhaW5Qb3MobnVsbClcbiAgICAgIGNoaWxkLnNldE5leHRDaGlsZChudWxsKVxuICAgICAgY2hpbGQuc2V0SW5kZXBlbmRlbmNlKHRydWUpXG5cbiAgICAgIGlmICghdGhpcy5pc1R1dG9yaWFsKSB7XG4gICAgICAgIGNvbnN0IHZlbCA9IHsgZHg6IDIsIGR5OiAyIH1cbiAgICAgICAgY2hpbGQuc2V0VmVsb2NpdHkodmVsKVxuICAgICAgfVxuICAgICAgY2hpbGQuc2V0UmFuZG9tRGlyKClcbiAgICB9XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3IExpbmtlZExpc3QoKVxuICB9XG5cbiAgaGl0c0NoaWxkKG9iaikge1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQob2JqKVxuICAgIG9iai5zZXRJbmRlcGVuZGVuY2UoZmFsc2UpXG4gIH1cblxuICBoaXRzV29ybShnYW1lLCB3b3JtKSB7XG4gICAgdGhpcy5lbmVyZ3kuaW5jcmVtZW50Q291bnQoKVxuICAgIGdhbWUuZGVzdHJveVdvcm0od29ybSlcbiAgfVxuXG4gIG1vdmVzKHBvcykge1xuICAgIHN1cGVyLm1vdmVzV2l0aEN1cnNvcihwb3MsIHRoaXMuZWFzaW5nKVxuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkcmVuLmhlYWQgJiYgdGhpcy5jaGlsZHJlbi5oZWFkLnZhbFxuXG4gICAgaWYgKGZpcnN0Q2hpbGQpXG4gICAgICBmaXJzdENoaWxkLm1vdmVzKHRoaXMucG9zQ2FjaGUubGVuZ3RoID8gdGhpcy5wb3NDYWNoZVswXSA6IHBvcylcbiAgfVxufVxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL01vdmluZ09iamVjdCdcblxuY29uc3QgciA9IDEwLFxuICBjID0gJyNmNjcyODAnLFxuICB2ID0geyBkeDogMi4yLCBkeTogMi4yIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlZGF0b3IgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwb3MsXG4gICAgcmFkaXVzID0gcixcbiAgICB3b3JsZCxcbiAgICBzcHJpdGUsXG4gICAgc2l6ZSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9LFxuICAgIHZlbCA9IHYsXG4gICAgY29sb3IgPSBjXG4gICkge1xuICAgIHN1cGVyKHBvcywgcmFkaXVzLCB3b3JsZCwgc3ByaXRlLCBzaXplLCB2ZWwsIGNvbG9yKVxuICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXkpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5zY29yZSA9IDBcbiAgICB0aGlzLmhpZ2hTY29yZSA9IDBcbiAgfVxuXG4gIHNldFNjb3JlID0gKHNjb3JlKSA9PiB7XG4gICAgdGhpcy5zY29yZSA9IHNjb3JlXG4gIH1cblxuICBzZXRIaWdoU2NvcmUgPSAoc2NvcmUpID0+IHtcbiAgICB0aGlzLmhpZ2hTY29yZSA9IHNjb3JlXG4gIH1cblxuICByZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFNjb3JlKDApXG4gICAgdGhpcy51cGRhdGVTY29yZSgpXG4gIH1cblxuICBjYWxjdWxhdGVTY29yZSA9IChjaGlsZENvdW50KSA9PiB7XG4gICAgbGV0IGNoYWluQ291bnQgPSAxICsgY2hpbGRDb3VudCAvL2NvdW50IHBhcmVudFxuICAgIGxldCBzY29yZVRvQWRkID0gY2hhaW5Db3VudCAqIGNoYWluQ291bnQgKiAxMFxuICAgIGNvbnN0IG5ld1Njb3JlID0gdGhpcy5zY29yZSArIHNjb3JlVG9BZGRcbiAgICB0aGlzLnNldFNjb3JlKG5ld1Njb3JlKVxuICAgIHRoaXMudXBkYXRlU2NvcmUoKVxuICB9XG5cbiAgY2FsY3VsYXRlSGlnaFNjb3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IGhpZ2hTY29yZSA9IE1hdGgubWF4KHRoaXMuc2NvcmUsIHRoaXMuaGlnaFNjb3JlKVxuICAgIHRoaXMuc2V0SGlnaFNjb3JlKGhpZ2hTY29yZSlcbiAgfVxuXG4gIHVwZGF0ZVNjb3JlID0gKCkgPT4ge1xuICAgIHRoaXMuZGlzcGxheS51cGRhdGVFbGVtZW50KCcjc2NvcmUnLCB0aGlzLnNjb3JlKVxuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZVNjb3JlKClcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdXRvcmlhbEdhbWUgZXh0ZW5kcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZGlzcGxheSxcbiAgICBvblR1dG9yaWFsRW5kLFxuICAgIGNoaWxkQ291bnQgPSAwLFxuICAgIHByZWRhdG9yQ291bnQgPSAwLFxuICAgIHdvcm1Db3VudCA9IDBcbiAgKSB7XG4gICAgc3VwZXIoZGlzcGxheSwgY2hpbGRDb3VudCwgcHJlZGF0b3JDb3VudCwgd29ybUNvdW50KVxuICAgIHRoaXMudHV0b3JpYWxObyA9IDBcbiAgICB0aGlzLm9uVHV0b3JpYWxFbmQgPSBvblR1dG9yaWFsRW5kXG4gICAgdGhpcy5jbGVhckdhbWUgPSB0aGlzLmNsZWFyR2FtZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXBsYXlHYW1lID0gdGhpcy5yZXBsYXlHYW1lLmJpbmQodGhpcylcbiAgfVxuXG4gIGRlc3Ryb3lDaGlsZCA9IChjaGlsZCkgPT4ge1xuICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlTm9kZShjaGlsZClcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5zaXplIDwgdGhpcy5jaGlsZENvdW50KSB0aGlzLnNwYXduQ2hpbGRyZW4oMTcuNSlcbiAgfVxuXG4gIGNsZWFyR2FtZSgpIHtcbiAgICBzdXBlci5jbGVhckdhbWUoKVxuICAgIHRoaXMuY2xlYXJDYW52YXMoKVxuICAgIHRoaXMuZGlzcGxheS5jbGVhclR1dG9yaWFsKClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlUHJlc3NLZXkpXG4gIH1cblxuICByZXBsYXlHYW1lKCkge1xuICAgIHN1cGVyLnJlcGxheUdhbWUoKVxuICAgIHRoaXMucGFyZW50LnNldElzVHV0b3JpYWwodHJ1ZSlcbiAgfVxuXG4gIGhhbmRsZVByZXNzU3BhY2UgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudHV0b3JpYWxObyA9PT0gMCkge1xuICAgICAgdGhpcy5pbml0VHV0b3JpYWwxKClcbiAgICB9IGVsc2UgaWYgKHRoaXMudHV0b3JpYWxObyA9PT0gMSkge1xuICAgICAgdGhpcy5pbml0VHV0b3JpYWwyKClcbiAgICB9IGVsc2UgaWYgKHRoaXMudHV0b3JpYWxObyA9PT0gMikge1xuICAgICAgdGhpcy5pbml0VHV0b3JpYWwzKClcbiAgICB9IGVsc2UgaWYgKHRoaXMudHV0b3JpYWxObyA9PT0gMykge1xuICAgICAgdGhpcy5pbml0VHV0b3JpYWw0KClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQcmVzc0VudGVyID0gKCkgPT4ge1xuICAgIHRoaXMuY2xlYXJHYW1lKClcbiAgICB0aGlzLm9uVHV0b3JpYWxFbmQoKVxuICB9XG5cbiAgaGFuZGxlUHJlc3NLZXkgPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB0aGlzLmhhbmRsZVByZXNzRW50ZXIoKVxuICAgIGlmIChlLmtleUNvZGUgPT09IDMyKSB0aGlzLmhhbmRsZVByZXNzU3BhY2UoKVxuICB9XG5cbiAgY2hlY2tJblJhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50LFxuICAgICAgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKSxcbiAgICAgIHByZWRhdG9ycyA9IHRoaXMucHJlZGF0b3JzLnRvQXJyYXkoKSxcbiAgICAgIHdvcm1zID0gdGhpcy53b3Jtcy50b0FycmF5KClcblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGlmIChwYXJlbnQuY2hlY2tJblJhbmdlKGNoaWxkKSkge1xuICAgICAgICBwYXJlbnQuaGl0c0NoaWxkKGNoaWxkKVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBwcmVkYXRvciBvZiBwcmVkYXRvcnMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMTApKSBjaGlsZC5hdm9pZFByZWRhdG9yKClcbiAgICAgICAgaWYgKGNoaWxkLmNoZWNrSW5SYW5nZShwcmVkYXRvciwgMCkpIGNoaWxkLmhpdHNQcmVkYXRvcih0aGlzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgcHJlZGF0b3Igb2YgcHJlZGF0b3JzKSB7XG4gICAgICBpZiAocGFyZW50LmNoZWNrSW5SYW5nZShwcmVkYXRvciwgNSkpXG4gICAgICAgIHBhcmVudC5jaGVja0NvbGxpc2lvbldpdGhQcmVkYXRvcihwcmVkYXRvcilcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHdvcm0gb2Ygd29ybXMpIHtcbiAgICAgIGlmIChwYXJlbnQuY2hlY2tJblJhbmdlKHdvcm0sIDIpKSBwYXJlbnQuaGl0c1dvcm0odGhpcywgd29ybSlcbiAgICB9XG4gIH1cblxuICBkcmF3ID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgIGlmIChbMiwgM10uaW5jbHVkZXModGhpcy50dXRvcmlhbE5vKSAmJiB0aGlzLmVuZXJneS5jb3VudCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FtZU92ZXIoKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMud29ybGQuY2FudmFzLFxuICAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgIGlmICh0aGlzLnR1dG9yaWFsTm8gPj0gMCkge1xuICAgICAgdGhpcy5wYXJlbnQubW92ZXModGhpcy5tb3VzZSlcbiAgICAgIHRoaXMucGFyZW50LmRyYXcoY3R4LCB7IHg6IDMwLCB5OiAyNSB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnR1dG9yaWFsTm8gPj0gMSkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKVxuXG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChjaGlsZC5pbmRlcGVuZGVuY2UpIGNoaWxkLm1vdmVzKClcbiAgICAgICAgY2hpbGQuZHJhdyhjdHgsIHsgeDogMTUsIHk6IDE1IH0pXG5cbiAgICAgICAgdGhpcy5jbGlja2luZyA/IGNoaWxkLnNldENsaWNraW5nKHRydWUpIDogY2hpbGQuc2V0Q2xpY2tpbmcoZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHV0b3JpYWxObyA+PSAyKSB7XG4gICAgICBjb25zdCBwcmVkYXRvcnMgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KClcbiAgICAgIGZvciAoY29uc3QgcHJlZGF0b3Igb2YgcHJlZGF0b3JzKSB7XG4gICAgICAgIHByZWRhdG9yLm1vdmVzKClcbiAgICAgICAgcHJlZGF0b3IuZHJhdyhjdHgsIHsgeDogMzAsIHk6IDI1IH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHV0b3JpYWxObyA+PSA0KSB7XG4gICAgICBjb25zdCB0aW1lUGFzc2VkID0gdGltZXN0YW1wIC0gdGhpcy50aW1lU2luY2VXb3JtXG4gICAgICBpZiAodGltZVBhc3NlZCA+PSA1KSB7XG4gICAgICAgIHdoaWxlICh0aGlzLndvcm1zLnNpemUgPCB0aGlzLndvcm1Db3VudCkge1xuICAgICAgICAgIHRoaXMuc3Bhd25Xb3JtcygyMCwgeyBkeDogMC41LCBkeTogMC41IH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lU2luY2VXb3JtID0gdGltZXN0YW1wXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdvcm1zID0gdGhpcy53b3Jtcy50b0FycmF5KClcbiAgICAgIGZvciAoY29uc3Qgd29ybSBvZiB3b3Jtcykge1xuICAgICAgICB3b3JtLm1vdmVzKHRoaXMpXG4gICAgICAgIHdvcm0uZHJhdyhjdHgsIHsgeDogMCwgeTogMCB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2hlY2tJblJhbmdlKClcbiAgICB0aGlzLmFuaW1hdGlvblJlcSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KVxuICB9XG5cbiAgc2V0VHV0b3JpYWxObyA9IChudW1iZXIpID0+IHtcbiAgICB0aGlzLnR1dG9yaWFsTm8gPSBudW1iZXJcbiAgfVxuXG4gIGluaXRUdXRvcmlhbCA9ICgpID0+IHtcbiAgICB0aGlzLmluaXRUdXRvcmlhbDAoKVxuICB9XG5cbiAgaW5pdFR1dG9yaWFsMCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFR1dG9yaWFsTm8oMClcbiAgICB0aGlzLmluaXRXb3JsZCgpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlck1vdmVQYXJlbnRUdXQoKVxuICAgIHRoaXMuaW5pdFBhcmVudCgzMClcbiAgICB0aGlzLnBhcmVudC5zZXRJc1R1dG9yaWFsKHRydWUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlLCBmYWxzZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlUHJlc3NLZXkpXG4gICAgdGhpcy5hbmltYXRpb25SZXEgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdylcbiAgfVxuXG4gIGluaXRUdXRvcmlhbDEgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRUdXRvcmlhbE5vKDEpXG4gICAgdGhpcy5kaXNwbGF5LnJlbmRlckNoaWxkcmVuVHV0KClcbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyU2NvcmUoKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJDaGFpbigpXG4gICAgdGhpcy5pbml0Q2hhaW4oKVxuICAgIHRoaXMucGFyZW50LmNoYWluID0gdGhpcy5jaGFpblxuICAgIHRoaXMuaW5pdFNjb3JlKClcbiAgICB0aGlzLnBhcmVudC5zY29yZSA9IHRoaXMuc2NvcmVcbiAgICB0aGlzLmNoaWxkQ291bnQgPSA1XG4gICAgdGhpcy5pbml0Q2hpbGRyZW4oMTcuNSlcbiAgfVxuXG4gIGluaXRUdXRvcmlhbDIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRUdXRvcmlhbE5vKDIpXG4gICAgdGhpcy5zY29yZS5yZXNldCgpXG4gICAgdGhpcy5wYXJlbnQuc2V0SXNUdXRvcmlhbCh0cnVlKVxuXG4gICAgdGhpcy5wYXJlbnQuZGVsZXRlQWxsQ2hpbGRyZW4oKVxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbi50b0FycmF5KCkpIHtcbiAgICAgIGNoaWxkLnNldFBvcyhjaGlsZC5nZXRSYW5kb21Qb3MoKSlcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyRW5lcmd5KClcbiAgICB0aGlzLmluaXRFbmVyZ3koMywgMylcbiAgICB0aGlzLnBhcmVudC5lbmVyZ3kgPSB0aGlzLmVuZXJneVxuICAgIHRoaXMucHJlZGF0b3JDb3VudCA9IDFcbiAgICB0aGlzLmluaXRQcmVkYXRvcnMoMzUpXG4gICAgY29uc3QgcHJlZCA9IHRoaXMucHJlZGF0b3JzLnRvQXJyYXkoKVswXVxuICAgIHByZWQuc2V0UG9zKHsgeDogMzUsIHk6IDM1IH0pXG4gICAgcHJlZC5zZXRDdXJyRGlyKFswLjIzLCAtcHJlZC52ZWwuZHldKVxuICAgIHRoaXMuZGlzcGxheS5yZW5kZXJQcmVkYXRvclR1dCgpXG4gIH1cblxuICBpbml0VHV0b3JpYWwzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0VHV0b3JpYWxObygzKVxuICAgIHRoaXMucmVwbGF5R2FtZSgpXG4gICAgdGhpcy5wYXJlbnQuc2V0SXNUdXRvcmlhbCh0cnVlKVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgdGhpcy5wYXJlbnQuaGl0c0NoaWxkKGNoaWxkKVxuICAgICAgY2hpbGQubW92ZXModGhpcy5wYXJlbnQucG9zKVxuICAgIH1cblxuICAgIGNvbnN0IHByZWQgPSB0aGlzLnByZWRhdG9ycy50b0FycmF5KClbMF1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcCwgZmFsc2UpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTW91c2VEb3duLCBmYWxzZSlcblxuICAgIHByZWQuc2V0UG9zKHsgeDogMzUsIHk6IDM1IH0pXG4gICAgcHJlZC5zZXRDdXJyRGlyKFswLjIzLCAtMV0pXG5cbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyQ2xpY2tQYXJlbnRUdXQoKVxuICB9XG5cbiAgaW5pdFR1dG9yaWFsNCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFR1dG9yaWFsTm8oNClcbiAgICB0aGlzLmVuZXJneS5tYXggPSA1XG4gICAgdGhpcy5yZXBsYXlHYW1lKClcbiAgICB0aGlzLnBhcmVudC5kZWxldGVBbGxDaGlsZHJlbigpXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKSkge1xuICAgICAgY2hpbGQuc2V0UG9zKGNoaWxkLmdldFJhbmRvbVBvcygpKVxuICAgIH1cbiAgICBjb25zdCBwcmVkID0gdGhpcy5wcmVkYXRvcnMudG9BcnJheSgpWzBdXG5cbiAgICBwcmVkLnNldFBvcyh7IHg6IDM1LCB5OiAzNSB9KVxuICAgIHByZWQuc2V0Q3VyckRpcihbMC4yMywgLTFdKVxuICAgIHRoaXMud29ybUNvdW50ID0gNVxuICAgIHRoaXMuaW5pdFdvcm1zKDIwLCB7IGR4OiAwLjUsIGR5OiAwLjUgfSlcbiAgICB0aGlzLmNoaWxkQ291bnQgPSAwXG4gICAgdGhpcy5wYXJlbnQuaGl0c1ByZWRhdG9yKClcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4udG9BcnJheSgpKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lDaGlsZChjaGlsZClcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BsYXkucmVuZGVyV29ybVR1dCgpXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJhbmRvbUJldHdlZW4gfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZCB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXkpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgdGhpcy5jYW52YXMgPSBkaXNwbGF5LmdldEVsZW1lbnQoJyN3b3JsZCcpXG4gICAgdGhpcy5zaXplID0gdGhpcy5kaXNwbGF5LndvcmxkU2l6ZVxuICAgIHRoaXMuYm91bmRzID0geyB0b3A6IG51bGwsIHJpZ2h0OiBudWxsLCBib3R0b206IG51bGwsIHJpZ2h0OiBudWxsIH1cbiAgICB0aGlzLm9mZnNldHMgPSB7IHRvcDogbnVsbCwgbGVmdDogbnVsbCB9XG4gIH1cblxuICBzZXRCb3VuZHMoYm91bmRzKSB7XG4gICAgdGhpcy5ib3VuZHMgPSBib3VuZHNcbiAgfVxuXG4gIHNldE9mZnNldHMob2Zmc2V0cykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHNcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCB0b3AgPSAwLFxuICAgICAgbGVmdCA9IDAsXG4gICAgICBib3R0b20gPSB0b3AgKyB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICByaWdodCA9IGxlZnQgKyB0aGlzLmNhbnZhcy53aWR0aFxuXG4gICAgcmV0dXJuIHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IH1cbiAgfVxuXG4gIGNoZWNrT3V0T2ZCb3VuZHMgPSAocG9zLCByKSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfSA9IHRoaXMuYm91bmRzLFxuICAgICAgeyB4LCB5IH0gPSBwb3NcblxuICAgIGlmICh4IC0gciA8IGxlZnQpIHJldHVybiB0cnVlXG4gICAgaWYgKHggKyByID4gcmlnaHQpIHJldHVybiB0cnVlXG4gICAgaWYgKHkgLSByIDwgdG9wKSByZXR1cm4gdHJ1ZVxuICAgIGlmICh5ICsgciA+IGJvdHRvbSkgcmV0dXJuIHRydWVcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmNhbnZhcy5vZmZzZXRUb3AsXG4gICAgICBsZWZ0ID0gdGhpcy5jYW52YXMub2Zmc2V0TGVmdFxuICAgIHJldHVybiB7IHRvcCwgbGVmdCB9XG4gIH1cblxuICBnZXRSYW5kb21Qb3MgPSAocmFkaXVzKSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfSA9IHRoaXMuYm91bmRzLFxuICAgICAgciA9IHJhZGl1c1xuXG4gICAgY29uc3QgeCA9IGdldFJhbmRvbUJldHdlZW4obGVmdCArIHIsIHJpZ2h0IC0gciksXG4gICAgICB5ID0gZ2V0UmFuZG9tQmV0d2Vlbih0b3AgKyByLCBib3R0b20gLSByKVxuXG4gICAgcmV0dXJuIHsgeCwgeSB9XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IG9mZnNldHMgPSB0aGlzLmdldE9mZnNldHMoKSxcbiAgICAgIGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKClcblxuICAgIHRoaXMuc2V0T2Zmc2V0cyhvZmZzZXRzKVxuICAgIHRoaXMuc2V0Qm91bmRzKGJvdW5kcylcbiAgfVxufVxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL01vdmluZ09iamVjdCdcblxuY29uc3QgciA9IDEwLFxuICBjID0gJyM5MzYzNDQnLFxuICB2ID0geyBkeDogMiwgZHk6IDIgfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JtIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcG9zLFxuICAgIHJhZGl1cyA9IHIsXG4gICAgd29ybGQsXG4gICAgc3ByaXRlLFxuICAgIHNpemUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSxcbiAgICB2ZWwgPSB2LFxuICAgIGNvbG9yID0gY1xuICApIHtcbiAgICBzdXBlcihwb3MsIHJhZGl1cywgd29ybGQsIHNwcml0ZSwgc2l6ZSwgdmVsLCBjb2xvcilcbiAgICB0aGlzLnNwcml0ZSA9IHNwcml0ZVxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICB0aGlzLm1vdmVzID0gdGhpcy5tb3Zlcy5iaW5kKHRoaXMpXG4gIH1cblxuICBtb3ZlcyhnYW1lKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MsXG4gICAgICBwb3MgPSB7IHg6IHggKyB0aGlzLmN1cnJEaXJbMF0sIHk6IHkgKyB0aGlzLmN1cnJEaXJbMV0gfVxuXG4gICAgaWYgKHRoaXMuY2hlY2tPdXRPZkJvdW5kcyhwb3MpKSB7XG4gICAgICBnYW1lLmRlc3Ryb3lXb3JtKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuc2V0UG9zKHBvcylcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjljODk1ZDM3MTA3NGNmZTJkMDMxMjU3N2ZjNzYzNWQzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MTZiZjkxNjRiNzIzMjgyNDNmNTdlMzliMzQ2MmUzMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmYyZjE5ZDc3Yjk5ZTAwOGIzMmVmZjkxMWZjMWYwN2UucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAzZGMzM2FkZTRlYWQ1Yjg3YTY1OWFiY2UzMjM5NjgzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmOWU2M2NkYjUxNmZhZGQyNWU2ODg1NWNlOTVkYjQ3Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTFjZjA4ZTljZmNmYjMxMzQ1NDYwN2E5ZDhjZjgzMTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFkOTYzYzQ2NGE0MmYxZTM1ZTlhOTAzZTE3MWYxMGU4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyZTZkODg3NDIyOTVkMGVhOTVjZjEzZmQ5YTM4ODI3Zi5wbmdcIjsiLCJpbXBvcnQgRE9NRGlzcGxheSBmcm9tICcuL0Rpc3BsYXkvRE9NRGlzcGxheS5qcydcbmltcG9ydCBJbnRybyBmcm9tICcuL0Rpc3BsYXkvSW50cm8uanMnXG5pbXBvcnQgVHV0b3JpYWwgZnJvbSAnLi9EaXNwbGF5L1R1dG9yaWFsLmpzJ1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBUdXRvcmlhbEdhbWUgZnJvbSAnLi9UdXRvcmlhbEdhbWUnXG5cbmNvbnN0IHdpZHRoID0gTWF0aC5taW4od2luZG93LmlubmVyV2lkdGggLyAxLjIsIDEyMDApLFxuICBoZWlnaHQgPSBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQgLyAxLjIsIDc1MCksXG4gIGRpc3BsYXkgPSBuZXcgRE9NRGlzcGxheSh7IHdpZHRoLCBoZWlnaHQgfSksXG4gIGdhbWUgPSBuZXcgR2FtZShkaXNwbGF5KVxuXG5kaXNwbGF5LnJlbmRlckdhbWUoKVxuZGlzcGxheS5yZW5kZXJUaXRsZSgpXG5kaXNwbGF5LnJlbmRlcldvcmxkKClcblxuY29uc3QgdGl0bGUgPSBkaXNwbGF5LmdldEVsZW1lbnQoJyN0aXRsZScpXG50aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrVGl0bGUsIGZhbHNlKVxuXG5jb25zdCBpbnRyb0Rpc3BsYXkgPSBuZXcgSW50cm8oZGlzcGxheS53b3JsZFNpemUpLFxuICB0dXRvcmlhbERpc3BsYXkgPSBuZXcgVHV0b3JpYWwoZGlzcGxheS53b3JsZFNpemUpXG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrVGl0bGUoKSB7XG4gIGxvY2F0aW9uLnJlbG9hZCgpXG59XG5cbmZ1bmN0aW9uIG9uVHV0b3JpYWxFbmQoKSB7XG4gIGdhbWUuaW5pdCgpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrVHV0b3JpYWwoKSB7XG4gIGNvbnN0IHR1dG9yaWFsR2FtZSA9IG5ldyBUdXRvcmlhbEdhbWUodHV0b3JpYWxEaXNwbGF5LCBvblR1dG9yaWFsRW5kKVxuICBpbnRyb0Rpc3BsYXkuY2xlYXJJbnRybygpXG4gIHR1dG9yaWFsR2FtZS5pbml0VHV0b3JpYWwoKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGlja1N0YXJ0KCkge1xuICBpbnRyb0Rpc3BsYXkuY2xlYXJJbnRybygpXG4gIGdhbWUuaW5pdCgpXG59XG5cbmludHJvRGlzcGxheS5yZW5kZXJJbnRybygpXG5pbnRyb0Rpc3BsYXkucmVuZGVyVHV0b3JpYWxCdXR0b24oaGFuZGxlQ2xpY2tUdXRvcmlhbClcbmludHJvRGlzcGxheS5yZW5kZXJTdGFydExpbmsoaGFuZGxlQ2xpY2tTdGFydClcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImZ1bmN0aW9uIGdldFJhbmRvbUludChtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSlcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQmV0d2VlbihtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKVxuICBtYXggPSBNYXRoLmZsb29yKG1heClcbiAgLy8gaW5jbHVzaXZlXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cbmZ1bmN0aW9uIGluUmFuZ2UobnVtLCBtaW4sIG1heCkge1xuICByZXR1cm4gbnVtID49IG1pbiAmJiBudW0gPD0gbWF4XG59XG5cbi8vIERpZG4ndCB1c2VcbmZ1bmN0aW9uIGNhbGN1bGF0ZUh5cG90ZW51c2UoYSwgYikge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGEsIDIpICsgTWF0aC5wb3coYiwgMikpXG59XG5cbi8vIERpZG4ndCB1c2VcbmZ1bmN0aW9uIGVhc2VMaW5lYXIodCwgYiwgYywgZCkge1xuICByZXR1cm4gKGMgKiB0KSAvIGQgKyBiXG59XG5leHBvcnQgeyBnZXRSYW5kb21JbnQsIGluUmFuZ2UsIGdldFJhbmRvbUJldHdlZW4gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==