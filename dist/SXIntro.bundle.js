(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SXIntro"] = factory();
	else
		root["SXIntro"] = factory();
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * created by lixiang in 2017/5/2\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * SXInro 主类\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SXIntro = function () {\n\tfunction SXIntro(id) {\n\t\t_classCallCheck(this, SXIntro);\n\n\t\tthis.targetElement = null;\n\t\tthis.introItems = [];\n\t\tthis.options = {\n\t\t\tnextLabel: '下一步 &rarr;',\n\t\t\tprevLabel: '上一步 &larr;',\n\t\t\tskipLabel: '跳过',\n\t\t\tdonwLabel: '完成',\n\t\t\ttooltipPositio: 'bottom',\n\t\t\toverlayOpacity: 0.8\n\t\t};\n\t\tthis.intros = [];\n\n\t\tthis._getTargetElem(id);\n\n\t\tthis._getIntroItems('*[data-step]');\n\n\t\treturn this;\n\t}\n\n\t/**\n   *  设置说明\n   * 数组格式，数组中的次序即代表第几步的引导说明。\n   * @param {arry} intros {1:'第一步：这里是XXX'，2:'第二步:这里是XXX'}\n   */\n\n\n\t_createClass(SXIntro, [{\n\t\tkey: 'setIntro',\n\t\tvalue: function setIntro(intros) {\n\t\t\tif (_utils2.default.isObject(intros)) {\n\t\t\t\tthis.intros = intros;\n\t\t\t} else {\n\t\t\t\tthrow new Error('params must be a object');\n\t\t\t}\n\t\t\tvar self = this;\n\t\t\tthis.introItems.forEach(function (item, index) {\n\t\t\t\titem.intro = self.intros[index + 1];\n\t\t\t});\n\n\t\t\treturn this;\n\t\t}\n\n\t\t/**\n    * 开始启动引导\n    */\n\n\t}, {\n\t\tkey: 'start',\n\t\tvalue: function start() {\n\t\t\tconsole.log(this);\n\t\t\treturn this;\n\t\t}\n\n\t\t/**\n    * 获取targetElem\n    * @param {string} id\n    */\n\n\t}, {\n\t\tkey: '_getTargetElem',\n\t\tvalue: function _getTargetElem(id) {\n\t\t\tif (_utils2.default.isUndefined(id)) {\n\t\t\t\tthis.targetElement = document.body;\n\t\t\t} else if (_utils2.default.isString(id)) {\n\t\t\t\tthis.targetElement = _utils2.default.getEleById(id);\n\t\t\t}\n\t\t}\n\n\t\t/**\n   * 获取需要引导的元素集合\n   * @param {String} selector\n   */\n\n\t}, {\n\t\tkey: '_getIntroItems',\n\t\tvalue: function _getIntroItems(selector) {\n\t\t\tvar tempIntroItems = _utils2.default.querySelector(this.targetElement, selector);\n\t\t\tvar step = 0;\n\t\t\tthis.introItems = [];\n\t\t\tfor (var i = 0, il = tempIntroItems.length; i < il; i++) {\n\t\t\t\tstep = parseInt(_utils2.default.getAttribute(tempIntroItems[i], 'data-step'), 10);\n\t\t\t\tthis.introItems.push({\n\t\t\t\t\telem: tempIntroItems[i],\n\t\t\t\t\tintro: '',\n\t\t\t\t\tstep: step\n\t\t\t\t});\n\t\t\t}\n\t\t\tthis.introItems.sort(function (a, b) {\n\t\t\t\treturn a.step - b.step;\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn SXIntro;\n}();\n\nexports.default = SXIntro;\n\n//# sourceURL=webpack://SXIntro/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/**\r\n * 工具库\r\n * create on 2018/5/3 by lixiang\r\n */\n\nvar BaseType = {\n\tString: 'string',\n\tObject: 'object',\n\tFunction: 'function',\n\tBoolean: 'boolean',\n\tArray: 'array',\n\tRegExp: 'regexp',\n\tNumber: 'number'\n};\n\n/**\r\n * 返回对象类型，小写字符串\r\n */\nfunction checkType(obj) {\n\tvar str = Object.prototype.toString.call(obj);\n\treturn str.slice(8, str.length - 1).toLowerCase();\n}\n\n/**\r\n* 深拷贝\r\n*/\nfunction deepClone(source) {\n\tvar copy = void 0;\n\tif (source === null || (typeof values === 'undefined' ? 'undefined' : _typeof(values)) !== 'object') {\n\t\treturn source;\n\t}\n\n\tif (source instanceof Date) {\n\t\tcopy = new Date();\n\t\tcopy.setTime(source.getTime());\n\t}\n\n\tif (source instanceof Array) {\n\t\tcopy = [];\n\t\tfor (var i = 0, il = source.length; i < il; ++i) {\n\t\t\tcopy[i] = deepClone(source[i]);\n\t\t}\n\t}\n\n\tif (source instanceof Object) {\n\t\tcopy = {};\n\t\tvar arr = Object.keys(source);\n\t\tarr.forEach(function (key) {\n\t\t\tcopy[key] = deepClone(source[key]);\n\t\t});\n\t}\n\treturn copy;\n}\n\n/**\r\n * 判断一个对象是否是字符串\r\n * @param obj\r\n * @returns {boolean}\r\n */\nfunction isString(obj) {\n\treturn checkType(obj) === BaseType.String;\n}\n\n/**\r\n* 判断一个对象是否是数字\r\n* @param obj\r\n* @returns {boolean}\r\n*/\nfunction isNumber(obj) {\n\treturn checkType(obj) === BaseType.Number;\n}\n\n/**\r\n* 判断一个对象是否是个纯对象\r\n* @param obj\r\n* @returns {boolean}\r\n*/\nfunction isObject(obj) {\n\treturn checkType(obj) === BaseType.Object;\n}\n\n/**\r\n * 判断对象是否为undefined\r\n * @param {object} obj\r\n */\nfunction isUndefined(obj) {\n\treturn obj === undefined;\n}\n\n/**\r\n * 判断对象是否为数组\r\n * @param {object} obj\r\n */\nfunction isArray(obj) {\n\treturn checkType(obj) === BaseType.Array;\n}\n\n/**\r\n * 根据id获取Dom元素\r\n * @param {string} id\r\n */\nfunction getEleById(id) {\n\tvar ele = void 0;\n\tif (checkType(id) === BaseType.String) {\n\t\tele = document.getElementById(id);\n\t} else {\n\t\tele = null;\n\t}\n\treturn ele;\n}\n\n/**\r\n * 获取元素集合\r\n * @param {DOM} baseElement\r\n * @param {选择器} selectors\r\n */\nfunction querySelector(baseElement, selectors) {\n\tif (!baseElement || !isString(selectors) || !baseElement.querySelectorAll) {\n\t\tthrow new Error('querySelector err');\n\t}\n\treturn baseElement.querySelectorAll(selectors);\n}\n\nfunction getAttribute(elem, attr) {\n\treturn elem.getAttribute(attr);\n}\n\nexports.default = {\n\tdeepClone: deepClone,\n\tgetEleById: getEleById,\n\tisNumber: isNumber,\n\tisObject: isObject,\n\tisString: isString,\n\tisUndefined: isUndefined,\n\tisArray: isArray,\n\tquerySelector: querySelector,\n\tgetAttribute: getAttribute\n};\n\n//# sourceURL=webpack://SXIntro/./src/utils.js?");

/***/ })

/******/ })["default"];
});