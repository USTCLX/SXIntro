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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * created by lixiang in 2017/5/2\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * SXInro 主类\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SXIntro = function () {\n\tfunction SXIntro(id) {\n\t\t_classCallCheck(this, SXIntro);\n\n\t\tthis.targetElement = null;\n\t\tthis.introItems = [];\n\t\tthis.options = {\n\t\t\tnextLabel: '下一步 &rarr;',\n\t\t\tprevLabel: '上一步 &larr;',\n\t\t\tskipLabel: '跳过',\n\t\t\tdonwLabel: '完成',\n\t\t\ttooltipPosition: 'bottom',\n\t\t\toverlayOpacity: 0.8,\n\t\t\thelperElementPadding: 10\n\t\t};\n\t\tthis.intros = [];\n\t\tthis.initIntroElem = false;\n\t\tthis.currentStep = 0;\n\n\t\tthis.helperLayer = null;\n\t\tthis.tooltipReferenceLayer = null;\n\n\t\t// 设置根元素\n\t\tthis._getTargetElem(id);\n\n\t\t// 设置需要导航的元素\n\t\tthis._getIntroItems('*[data-step]');\n\n\t\t// 监听窗口事件\n\t\t// this._linstenEvent();\n\n\t\treturn this;\n\t}\n\n\t/**\n   * 设置说明\n   * 数组格式，数组中的次序即代表第几步的引导说明。\n   * @param {arry} intros {1:'第一步：这里是XXX'，2:'第二步:这里是XXX'}\n   */\n\n\n\t_createClass(SXIntro, [{\n\t\tkey: 'setIntro',\n\t\tvalue: function setIntro(intros) {\n\t\t\tif (_utils2.default.isObject(intros)) {\n\t\t\t\tthis.intros = intros;\n\t\t\t} else {\n\t\t\t\tthrow new Error('params must be a object');\n\t\t\t}\n\t\t\tvar self = this;\n\t\t\tthis.introItems.forEach(function (item, index) {\n\t\t\t\titem.intro = self.intros[index + 1];\n\t\t\t});\n\n\t\t\treturn this;\n\t\t}\n\n\t\t/**\n    * 开始启动引导\n    */\n\n\t}, {\n\t\tkey: 'start',\n\t\tvalue: function start() {\n\t\t\tif (!this.initIntroElem) {\n\t\t\t\t// 创建元素\n\t\t\t\tthis._createIntroElem();\n\t\t\t} else {\n\t\t\t\tconsole.log('aha');\n\t\t\t}\n\n\t\t\t// 提高被引导元素的z-index\n\t\t\tthis._toggleShowElem();\n\t\t\tthis._setMainLayerPositon();\n\t\t\tthis._setTooltipLayerPosition();\n\t\t\tthis._setTooltipLayerContent();\n\t\t\tthis._showTooltipLayer(300);\n\t\t\tvar self = this;\n\t\t\t_utils2.default.delay(function () {\n\t\t\t\tself.currentStep++;\n\t\t\t\tself._hideTooltipLayer();\n\t\t\t\tself._toggleShowElem();\n\t\t\t\tself._setMainLayerPositon();\n\t\t\t\tself._setTooltipLayerPosition();\n\t\t\t\tself._setTooltipLayerContent();\n\t\t\t\tself._showTooltipLayer(300);\n\t\t\t}, 1000);\n\n\t\t\treturn this;\n\t\t}\n\n\t\t/**\n    * 获取targetElem\n    * @param {string} id\n    */\n\n\t}, {\n\t\tkey: '_getTargetElem',\n\t\tvalue: function _getTargetElem(id) {\n\t\t\tif (_utils2.default.isUndefined(id)) {\n\t\t\t\tthis.targetElement = document.body;\n\t\t\t} else if (_utils2.default.isString(id)) {\n\t\t\t\tthis.targetElement = _utils2.default.getEleById(id);\n\t\t\t}\n\t\t}\n\n\t\t/**\n   * 获取需要引导的元素集合\n   * @param {String} selector\n   */\n\n\t}, {\n\t\tkey: '_getIntroItems',\n\t\tvalue: function _getIntroItems(selector) {\n\t\t\tvar tempIntroItems = _utils2.default.querySelector(this.targetElement, selector);\n\t\t\tvar step = 0;\n\t\t\tthis.introItems = [];\n\t\t\tfor (var i = 0, il = tempIntroItems.length; i < il; i++) {\n\t\t\t\tstep = parseInt(_utils2.default.getAttribute(tempIntroItems[i], 'data-step'), 10);\n\t\t\t\tthis.introItems.push({\n\t\t\t\t\telem: tempIntroItems[i],\n\t\t\t\t\tintro: '',\n\t\t\t\t\tstep: step\n\t\t\t\t});\n\t\t\t}\n\t\t\tthis.introItems.sort(function (a, b) {\n\t\t\t\treturn a.step - b.step;\n\t\t\t});\n\t\t}\n\n\t\t/**\n   * 创建导航元素\n   */\n\n\t}, {\n\t\tkey: '_createIntroElem',\n\t\tvalue: function _createIntroElem() {\n\t\t\tvar options = this.options,\n\t\t\t    targetElement = this.targetElement;\n\n\t\t\t// 创建元素\n\n\t\t\tvar overlay = document.createElement('div');\n\t\t\tvar helperLayer = document.createElement('div');\n\t\t\tvar tooltipReferenceLayer = document.createElement('div');\n\t\t\tvar tooltipLayer = document.createElement('div');\n\t\t\tvar arrowLayer = document.createElement('div');\n\t\t\tvar textLayer = document.createElement('div');\n\t\t\t// const bulletLayer = document.createElement('div');\n\n\n\t\t\t// 给元素增加class\n\t\t\t_utils2.default.addClass(overlay, 'intro-overlay');\n\t\t\t_utils2.default.addClass(helperLayer, 'intro-helperLayer');\n\t\t\t_utils2.default.addClass(tooltipReferenceLayer, 'intro-tooltipReferece');\n\t\t\t_utils2.default.addClass(tooltipLayer, 'intro-tooltip');\n\t\t\t_utils2.default.addClass(arrowLayer, 'intro-arrow');\n\t\t\t_utils2.default.addClass(textLayer, 'intro-tooltipText');\n\n\t\t\t// 内部元素的组合\n\t\t\t_utils2.default.appendChild(tooltipLayer, arrowLayer);\n\t\t\t_utils2.default.appendChild(tooltipLayer, textLayer);\n\t\t\t_utils2.default.appendChild(tooltipReferenceLayer, tooltipLayer);\n\n\t\t\t// 设置属性\n\t\t\toverlay.style.opacity = options.overlayOpacity;\n\n\t\t\t// 追加元素到document中\n\t\t\t_utils2.default.appendChild(targetElement, overlay);\n\t\t\t_utils2.default.appendChild(targetElement, helperLayer);\n\t\t\t_utils2.default.appendChild(targetElement, tooltipReferenceLayer);\n\n\t\t\tthis.helperLayer = helperLayer;\n\t\t\tthis.tooltipReferenceLayer = tooltipReferenceLayer;\n\t\t}\n\n\t\t/**\n   * 设置helper和tooltipReferenceLayer的位置\n   */\n\n\t}, {\n\t\tkey: '_setMainLayerPositon',\n\t\tvalue: function _setMainLayerPositon() {\n\t\t\tvar introItems = this.introItems,\n\t\t\t    options = this.options,\n\t\t\t    helperLayer = this.helperLayer,\n\t\t\t    tooltipReferenceLayer = this.tooltipReferenceLayer;\n\n\t\t\tvar currentElem = introItems[this.currentStep].elem;\n\t\t\tvar elemPostition = _utils2.default.getOffset(currentElem);\n\n\t\t\thelperLayer.style.left = elemPostition.left - options.helperElementPadding / 2 + 'px';\n\t\t\thelperLayer.style.top = elemPostition.top - options.helperElementPadding / 2 + 'px';\n\t\t\thelperLayer.style.width = elemPostition.width + options.helperElementPadding + 'px';\n\t\t\thelperLayer.style.height = elemPostition.height + options.helperElementPadding + 'px';\n\n\t\t\ttooltipReferenceLayer.style.left = elemPostition.left - options.helperElementPadding / 2 + 'px';\n\t\t\ttooltipReferenceLayer.style.top = elemPostition.top - options.helperElementPadding / 2 + 'px';\n\t\t\ttooltipReferenceLayer.style.width = elemPostition.width + options.helperElementPadding + 'px';\n\t\t\ttooltipReferenceLayer.style.height = elemPostition.height + options.helperElementPadding + 'px';\n\t\t}\n\n\t\t/**\n   * 设置tooltip的位置\n   * @param {Dom} tooltipLayer\n   */\n\n\t}, {\n\t\tkey: '_setTooltipLayerPosition',\n\t\tvalue: function _setTooltipLayerPosition() {\n\t\t\tvar options = this.options,\n\t\t\t    tooltipReferenceLayer = this.tooltipReferenceLayer,\n\t\t\t    introItems = this.introItems;\n\t\t\tvar tooltipPosition = options.tooltipPosition;\n\n\t\t\tvar currentElem = introItems[this.currentStep].elem;\n\t\t\tvar elemPostition = _utils2.default.getOffset(currentElem);\n\n\t\t\tvar tooltipLayer = _utils2.default.querySelector(tooltipReferenceLayer, '.intro-tooltip', true);\n\t\t\tvar arrowLayer = _utils2.default.querySelector(tooltipLayer, '.intro-arrow', true);\n\n\t\t\tvar left = void 0;\n\t\t\tvar top = void 0;\n\t\t\tvar offset = 10;\n\n\t\t\tswitch (tooltipPosition) {\n\t\t\t\tcase 'bottom':\n\t\t\t\t\tleft = '0px';\n\t\t\t\t\ttop = elemPostition.height + options.helperElementPadding + offset + 'px';\n\t\t\t\t\t_utils2.default.addClass(arrowLayer, 'top');\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'top':\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'left':\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'right':\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t\t\tleft = '0px';\n\t\t\t\t\ttop = elemPostition.height + options.helperElementPadding + offset + 'px';\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\ttooltipLayer.style.left = left;\n\t\t\ttooltipLayer.style.top = top;\n\t\t}\n\n\t\t/**\n   * 设置tooltip中的内容，包括当前文字，当前指示灯等\n   */\n\n\t}, {\n\t\tkey: '_setTooltipLayerContent',\n\t\tvalue: function _setTooltipLayerContent() {\n\t\t\tvar tooltipReferenceLayer = this.tooltipReferenceLayer,\n\t\t\t    intros = this.intros;\n\n\t\t\tvar textLayer = _utils2.default.querySelector(tooltipReferenceLayer, '.intro-tooltipText', true);\n\t\t\tvar currentText = intros[this.currentStep + 1];\n\n\t\t\tconsole.log('textLayer', textLayer);\n\t\t\ttextLayer.innerText = String(currentText);\n\t\t}\n\n\t\t/**\n   * 展现tooltipLayer 并可以延时执行\n   * @param {Number} delay 延时执行时间\n   */\n\n\t}, {\n\t\tkey: '_showTooltipLayer',\n\t\tvalue: function _showTooltipLayer(delay) {\n\t\t\tvar tooltipReferenceLayer = this.tooltipReferenceLayer;\n\n\t\t\tvar tooltipLayer = _utils2.default.querySelector(tooltipReferenceLayer, '.intro-tooltip', true);\n\n\t\t\tif (delay && _utils2.default.isNumber(delay) && delay > 0) {\n\t\t\t\t_utils2.default.delay(function () {\n\t\t\t\t\t_utils2.default.addClass(tooltipLayer, 'show');\n\t\t\t\t}, delay);\n\t\t\t} else {\n\t\t\t\t_utils2.default.addClass(tooltipLayer, 'show');\n\t\t\t}\n\t\t}\n\n\t\t/**\n   * 隐藏tooltipLayer 并可以延时执行\n   * @param {Number} delay 延时执行时间\n   */\n\n\t}, {\n\t\tkey: '_hideTooltipLayer',\n\t\tvalue: function _hideTooltipLayer(delay) {\n\t\t\tvar tooltipReferenceLayer = this.tooltipReferenceLayer;\n\n\t\t\tvar tooltipLayer = _utils2.default.querySelector(tooltipReferenceLayer, '.intro-tooltip', true);\n\n\t\t\tif (delay && _utils2.default.isNumber(delay) && delay > 0) {\n\t\t\t\t_utils2.default.delay(function () {\n\t\t\t\t\t_utils2.default.removeClass(tooltipLayer, 'show');\n\t\t\t\t}, delay);\n\t\t\t} else {\n\t\t\t\t_utils2.default.removeClass(tooltipLayer, 'show');\n\t\t\t}\n\t\t}\n\n\t\t/**\n   * 转换元素的显示状态，即是否需要改变引导元素的z-index\n   */\n\n\t}, {\n\t\tkey: '_toggleShowElem',\n\t\tvalue: function _toggleShowElem() {\n\t\t\tvar introItems = this.introItems,\n\t\t\t    currentStep = this.currentStep;\n\n\t\t\tvar lastElem = introItems[currentStep - 1] && introItems[currentStep - 1].elem;\n\t\t\tvar currentElem = introItems[currentStep].elem;\n\n\t\t\tif (lastElem) {\n\t\t\t\t_utils2.default.removeClass(lastElem, 'intro-showElement');\n\t\t\t}\n\t\t\tif (currentElem) {\n\t\t\t\t_utils2.default.addClass(currentElem, 'intro-showElement');\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn SXIntro;\n}();\n\nexports.default = SXIntro;\n\n//# sourceURL=webpack://SXIntro/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/**\r\n * 工具库\r\n * create on 2018/5/3 by lixiang\r\n */\n\nvar BaseType = {\n\tString: 'string',\n\tObject: 'object',\n\tFunction: 'function',\n\tBoolean: 'boolean',\n\tArray: 'array',\n\tRegExp: 'regexp',\n\tNumber: 'number'\n};\n\n/**\r\n * 返回对象类型，小写字符串\r\n */\nfunction checkType(obj) {\n\tvar str = Object.prototype.toString.call(obj);\n\treturn str.slice(8, str.length - 1).toLowerCase();\n}\n\n/**\r\n* 深拷贝\r\n*/\nfunction deepClone(source) {\n\tvar copy = void 0;\n\tif (source === null || (typeof values === 'undefined' ? 'undefined' : _typeof(values)) !== 'object') {\n\t\treturn source;\n\t}\n\n\tif (source instanceof Date) {\n\t\tcopy = new Date();\n\t\tcopy.setTime(source.getTime());\n\t}\n\n\tif (source instanceof Array) {\n\t\tcopy = [];\n\t\tfor (var i = 0, il = source.length; i < il; ++i) {\n\t\t\tcopy[i] = deepClone(source[i]);\n\t\t}\n\t}\n\n\tif (source instanceof Object) {\n\t\tcopy = {};\n\t\tvar arr = Object.keys(source);\n\t\tarr.forEach(function (key) {\n\t\t\tcopy[key] = deepClone(source[key]);\n\t\t});\n\t}\n\treturn copy;\n}\n\n/**\r\n * 判断一个对象是否是字符串\r\n * @param obj\r\n * @returns {boolean}\r\n */\nfunction isString(obj) {\n\treturn checkType(obj) === BaseType.String;\n}\n\n/**\r\n* 判断一个对象是否是数字\r\n* @param obj\r\n* @returns {boolean}\r\n*/\nfunction isNumber(obj) {\n\treturn checkType(obj) === BaseType.Number;\n}\n\n/**\r\n* 判断一个对象是否是个纯对象\r\n* @param obj\r\n* @returns {boolean}\r\n*/\nfunction isObject(obj) {\n\treturn checkType(obj) === BaseType.Object;\n}\n\n/**\r\n * 判断对象是否为undefined\r\n * @param {object} obj\r\n */\nfunction isUndefined(obj) {\n\treturn obj === undefined;\n}\n\n/**\r\n * 判断对象是否为数组\r\n * @param {object} obj\r\n */\nfunction isArray(obj) {\n\treturn checkType(obj) === BaseType.Array;\n}\n\n/**\r\n * 根据id获取Dom元素\r\n * @param {string} id\r\n */\nfunction getEleById(id) {\n\tvar ele = void 0;\n\tif (checkType(id) === BaseType.String) {\n\t\tele = document.getElementById(id);\n\t} else {\n\t\tele = null;\n\t}\n\treturn ele;\n}\n\n/**\r\n * 获取元素\r\n * @param {DOM} baseElement\r\n * @param {String} selectors\r\n * @param {Boolen}\r\n */\nfunction querySelector(baseElement, selectors, single) {\n\tvar elem = baseElement || document.body;\n\tif (!isString(selectors) || !elem.querySelectorAll) {\n\t\tthrow new Error('querySelector err');\n\t}\n\treturn single ? elem.querySelector(selectors) : elem.querySelectorAll(selectors);\n}\n\n/**\r\n * 获取元素的属性值\r\n * @param {DOM} elem Dom元素\r\n * @param {String} attr\r\n */\nfunction getAttribute(elem, attr) {\n\treturn elem.getAttribute(attr);\n}\n\n/**\r\n * 获取元素的坐标\r\n * @param {DOM} element\r\n */\nfunction getOffset(elem) {\n\tvar _document = document,\n\t    body = _document.body;\n\n\tvar docEl = document.documentElement;\n\tvar scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;\n\tvar scrollLeft = window.pageXOffset || docEl.scrollTop || body.scrollTop;\n\tvar rect = elem.getBoundingClientRect();\n\treturn {\n\t\ttop: rect.top + scrollTop,\n\t\tleft: rect.left + scrollLeft,\n\t\twidth: rect.width,\n\t\theight: rect.height\n\t};\n}\n\n/**\r\n * 为Dom元素增加Class\r\n * @param {DOM} elem\r\n * @param {String} klass\r\n */\nfunction addClass(elem, klass) {\n\tvar currentKlass = elem.className;\n\tvar klsReg = new RegExp(klass, 'ig');\n\tif (!klsReg.test(currentKlass)) {\n\t\telem.className = currentKlass + ' ' + klass;\n\t}\n}\n\n/**\r\n * 为Dom元素删除Class\r\n * @param {DOM} elem\r\n * @param {String} klass\r\n */\nfunction removeClass(elem, klass) {\n\tvar currentKlass = elem.className;\n\tvar klsReg = new RegExp(klass, 'ig');\n\tif (klsReg.test(currentKlass)) {\n\t\tcurrentKlass = currentKlass.replace(klass, '');\n\t\telem.className = currentKlass;\n\t}\n}\n\n/**\r\n * 向元素中追加子元素\r\n * @param {DOM} parent 父元素\r\n * @param {DOM} child 子元素\r\n */\nfunction appendChild(parent, child) {\n\tparent.appendChild(child);\n}\n\n/**\r\n * 延时执行函数\r\n * @param {function} fn 函数\r\n * @param {延迟时间} time\r\n */\nfunction delay(fn, time) {\n\twindow.setTimeout(fn, time);\n}\n\nexports.default = {\n\tdeepClone: deepClone,\n\tgetEleById: getEleById,\n\tisNumber: isNumber,\n\tisObject: isObject,\n\tisString: isString,\n\tisUndefined: isUndefined,\n\tisArray: isArray,\n\tquerySelector: querySelector,\n\tgetAttribute: getAttribute,\n\tgetOffset: getOffset,\n\taddClass: addClass,\n\tremoveClass: removeClass,\n\tappendChild: appendChild,\n\tdelay: delay\n};\n\n//# sourceURL=webpack://SXIntro/./src/utils.js?");

/***/ })

/******/ })["default"];
});