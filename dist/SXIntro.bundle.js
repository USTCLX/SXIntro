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

/***/ "./node_modules/css-loader/index.js!./src/style.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* 引导元素样式 */\r\n\r\n.intro-showElement, tr.intro-showElement>td, tr.intro-showElement>th {\r\n\tz-index: 9999999 !important;\r\n\tposition: relative;\r\n}\r\n\r\n/* 遮罩层样式 */\r\n\r\n.intro-overlay {\r\n\tposition: absolute;\r\n\tvisibility: hidden;\r\n\ttop: 0%;\r\n\tbottom: 0%;\r\n\tleft: 0%;\r\n\tright: 0%;\r\n\tz-index: 99999;\r\n\topacity: 0;\r\n\tbackground: -moz-radial-gradient(center, ellipse farthest-corner, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.9) 100%);\r\n\tbackground: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(0, 0, 0, 0.4)), color-stop(100%, rgba(0, 0, 0, 0.9)));\r\n\tbackground: -webkit-radial-gradient(center, ellipse farthest-corner, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.9) 100%);\r\n\tbackground: -o-radial-gradient(center, ellipse farthest-corner, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.9) 100%);\r\n\tbackground: -ms-radial-gradient(center, ellipse farthest-corner, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.9) 100%);\r\n\tbackground: radial-gradient(center, ellipse farthest-corner, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.9) 100%);\r\n\t-webkit-transition: opacity 0.1s ease-out;\r\n\t-moz-transition: opacity 0.1s ease-out;\r\n\t-ms-transition: opacity 0.1s ease-out;\r\n\t-o-transition: opacity 0.1s ease-out;\r\n\ttransition: opacity 0.1s ease-out;\r\n}\r\n\r\n.intro-overlay.show {\r\n\tvisibility: visible;\r\n}\r\n\r\n/* 高亮层样式 */\r\n\r\n.intro-helperLayer {\r\n\tbox-sizing: content-box;\r\n\tposition: absolute;\r\n\tz-index: 9999998;\r\n\tbackground-color: #FFF;\r\n\tbackground-color: rgba(255, 255, 255, .9);\r\n\tborder: 1px solid #777;\r\n\tborder: 1ps solide rgba(0, 0, 0, .5);\r\n\tborder-radius: 4px;\r\n\t-webkit-transition: all 0.3s ease-out;\r\n\t-moz-transition: all 0.3s ease-out;\r\n\t-moz-transition: all 0.3s ease-out;\r\n\t-ms-transition: all 0.3s ease-out;\r\n\t-o-transition: all 0.3s ease-out;\r\n\ttransition: all 0.3s ease-out;\r\n}\r\n\r\n.intro-helperLayer.intro-fixed {\r\n\tposition: fixed;\r\n}\r\n\r\n/* 引导对话框样式 */\r\n\r\n/* 定位层 */\r\n\r\n.intro-tooltipReferece {\r\n\tbox-sizing: content-box;\r\n\tposition: absolute;\r\n\tvisibility: hidden;\r\n\tz-index: 1000000000;\r\n\tbackground-color: transparent;\r\n\t-webkit-transition: all 0.3s ease-out;\r\n\t-moz-transition: all 0.3s ease-out;\r\n\t-moz-transition: all 0.3s ease-out;\r\n\t-ms-transition: all 0.3s ease-out;\r\n\t-o-transition: all 0.3s ease-out;\r\n\ttransition: all 0.3s ease-out;\r\n}\r\n\r\n.intro-tooltipReferece.intro-fixed {\r\n\tposition: fixed;\r\n}\r\n\r\n/* 对话框层 */\r\n\r\n.intro-tooltip {\r\n\tbox-sizing: content-box;\r\n\tposition: absolute;\r\n\tvisibility: visible;\r\n\tpadding: 10px;\r\n\tbackground-color: #FFF;\r\n\tmin-width: 200px;\r\n\tmax-width: 300px;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.1s ease-out;\r\n\t-moz-transition: opacity 0.1s ease-out;\r\n\t-ms-transition: opacity 0.1s ease-out;\r\n\t-o-transition: opacity 0.1s ease-out;\r\n\ttransition: opacity 0.1s ease-out\r\n}\r\n\r\n.intro-tooltip.show {\r\n\topacity: 1;\r\n}\r\n\r\n/* 对话框箭头 */\r\n\r\n.intro-arrow {\r\n\tcontent: '';\r\n\tborder: 5px solid transparent;\r\n\tposition: absolute;\r\n}\r\n\r\n.intro-arrow.top {\r\n\ttop: -10px;\r\n\tleft: 10px;\r\n\tborder-bottom-color: #FFF;\r\n}\r\n\r\n.intro-arrow.top-right {\r\n\ttop: -10px;\r\n\tright: 10px;\r\n\tborder-bottom-color: #FFF;\r\n}\r\n\r\n.intro-arrow.top-middle {\r\n\ttop: -10px;\r\n\tleft: 50%;\r\n\tborder-bottom-color: #FFF;\r\n}\r\n\r\n.intro-arrow.bottom {\r\n\tleft: 10px;\r\n\tbottom: -10px;\r\n\tborder-top-color: #FFF;\r\n}\r\n\r\n.intro-arrow.right {\r\n\ttop: 10px;\r\n\tright: -10px;\r\n\tborder-left-color: #FFF;\r\n}\r\n\r\n.intro-arrow.right-middle {\r\n\ttop: 50%;\r\n\tright: -10px;\r\n\tborder-left-color: #FFF;\r\n}\r\n\r\n.intro-arrow.left {\r\n\ttop: 10px;\r\n\tleft: -10px;\r\n\tborder-right-color: #FFF;\r\n}\r\n\r\n/* bullets */\r\n\r\n.intro-tooltipBullets {\r\n\ttext-align: center;\r\n}\r\n\r\n.intro-tooltipBullets ul {\r\n\tbox-sizing: content-box;\r\n\tclear: both;\r\n\tmargin: 15px auto 0;\r\n\tpadding: 0;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.intro-tooltipBullets ul li {\r\n\tbox-sizing: content-box;\r\n\tlist-style: none;\r\n\tfloat: left;\r\n\tmargin: 0 2px;\r\n}\r\n\r\n.intro-tooltipBullets ul li a {\r\n\tbox-sizing: content-box;\r\n\tdisplay: block;\r\n\twidth: 6px;\r\n\theight: 6px;\r\n\tbackground: #ccc;\r\n\tborder-radius: 6px;\r\n\t-moz-border-radius: 6px;\r\n\t-webkit-border-radius: 6px;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.intro-tooltipBullets ul li a.active {\r\n\tbackground-color: #999;\r\n}\r\n\r\n/* buttons */\r\n\r\n.intro-tooltipButtons {\r\n\ttext-align: right;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n.intro-button {\r\n\tbox-sizing: content-box;\r\n\tposition: relative;\r\n\toverflow: visible;\r\n\tdisplay: inline-block;\r\n\tpadding: 0.3em 0.8em;\r\n\tborder: 1px solid #d4d4d4;\r\n\tmargin: 10px 2px 0 0;\r\n\ttext-decoration: none;\r\n\ttext-shadow: 1px 1px 0 #fff;\r\n\tfont-size: 12px;\r\n\tcolor: #333;\r\n\twhite-space: nowrap;\r\n\tcursor: pointer;\r\n\toutline: none;\r\n\tbackground-color: #ececec;\r\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f4f4f4), to(#ececec));\r\n\tbackground-image: -moz-linear-gradient(#f4f4f4, #ececec);\r\n\tbackground-image: -o-linear-gradient(#f4f4f4, #ececec);\r\n\tbackground-image: linear-gradient(#f4f4f4, #ececec);\r\n\t-webkit-background-clip: padding;\r\n\t-moz-background-clip: padding;\r\n\t-o-background-clip: padding-box;\r\n\tbackground-clip: padding-box;\r\n\tborder-radius: 0.2em;\r\n}\r\n\r\n.intro-button.hide {\r\n\tdisplay: none;\r\n}\r\n\r\n.intro-button:active {\r\n\tbox-shadow: 1px 1px 1px #999 inset;\r\n\t-moz-box-shadow: 1px 1px 1px #999 inset;\r\n\t-webkit-box-shadow: 1px 1px 1px #999 inset;\r\n}\r\n\r\n.intro-disabled, .intro-disabled:hover, .intro-disabled:focus {\r\n\tcolor: #9a9a9a;\r\n\tborder-color: #d4d4d4;\r\n\tbox-shadow: none;\r\n\tcursor: not-allowed;\r\n\tbackground-color: #f4f4f4;\r\n\tbackground-image: none;\r\n\ttext-decoration: none;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * created by lixiang in 2017/5/2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * SXInro 主类
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

__webpack_require__(/*! ./style.css */ "./src/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SXIntro = function () {
	function SXIntro(id, opts) {
		var _this = this;

		_classCallCheck(this, SXIntro);

		this.id = id;
		this.targetElement = null;
		this.introItems = [];
		this.options = {
			nextLabel: '下一步',
			prevLabel: '上一步',
			skipLabel: '跳过',
			finishLabel: '完成',
			nextLabelHide: false,
			prevLabelHide: false,
			skipLabelHide: false,
			tooltipPosition: 'bottom',
			overlayOpacity: 0.8,
			helperElementPadding: 10
		};
		this.intros = [];
		this.initIntroElem = false;
		this.currentStep = 0;
		this.lastStep = 0;

		this.helperLayer = null;
		this.tooltipReferenceLayer = null;
		this.overlay = null;

		if (opts) {
			var keys = Object.keys(this.options);
			keys.forEach(function (key) {
				_this.options[key] = opts[key];
			});
		}

		return this;
	}

	/**
   * 设置说明
   * 数组格式，数组中的次序即代表第几步的引导说明。
   * @param {arry} intros {1:'第一步：这里是XXX'，2:'第二步:这里是XXX'}
   */


	_createClass(SXIntro, [{
		key: 'setIntro',
		value: function setIntro(intros) {
			if (_utils2.default.isArray(intros)) {
				this.intros = intros;
			} else {
				throw new Error('params must be a array');
			}
			var self = this;
			this.introItems.forEach(function (item, index) {
				item.intro = self.intros[index + 1];
			});

			return this;
		}

		/**
    * 开始启动引导
    */

	}, {
		key: 'start',
		value: function start() {
			// 设置根元素
			this._getTargetElem(this.id);
			// 设置需要导航的元素
			this._getIntroItems('*[data-step]');
			// 创建元素
			this._createIntroElem();
			// 监听事件
			this._addEventListener();
			// 第一步
			this._step(0);

			return this;
		}

		/**
    * 获取targetElem
    * @param {string} id
    */

	}, {
		key: '_getTargetElem',
		value: function _getTargetElem(id) {
			if (_utils2.default.isUndefined(id)) {
				this.targetElement = document.body;
			} else if (_utils2.default.isString(id)) {
				this.targetElement = _utils2.default.getEleById(id);
			}
		}

		/**
   * 获取需要引导的元素集合
   * @param {String} selector
   */

	}, {
		key: '_getIntroItems',
		value: function _getIntroItems(selector) {
			var _this2 = this;

			var tempIntroItems = _utils2.default.querySelector(this.targetElement, selector);
			this.introItems = [];

			var _loop = function _loop(i, il) {
				var elem = tempIntroItems[i];
				var steps = _utils2.default.parseDataStep(elem);
				steps.forEach(function (step) {
					_this2.introItems.push({
						elem: elem,
						intro: '',
						step: step
					});
				});
			};

			for (var i = 0, il = tempIntroItems.length; i < il; i++) {
				_loop(i, il);
			}
			this.introItems.sort(function (a, b) {
				return a.step - b.step;
			});

			this.totalSteps = this.introItems.length;
		}

		/**
   * 创建导航元素
   */

	}, {
		key: '_createIntroElem',
		value: function _createIntroElem() {
			var options = this.options,
			    targetElement = this.targetElement,
			    introItems = this.introItems;

			var itemsLength = introItems.length;
			// 创建元素
			var overlay = document.createElement('div'); // 遮罩层
			var helperLayer = document.createElement('div'); // 高亮层
			var tooltipReferenceLayer = document.createElement('div'); // 引导定位层
			var tooltipLayer = document.createElement('div'); // 引导层
			var arrowLayer = document.createElement('div'); // 对话框箭头
			var textLayer = document.createElement('div'); // 对话框文字
			var bulletLayer = document.createElement('div'); // 子弹进度层
			var bulletUlLayer = document.createElement('ul'); // ul列表
			var buttonLayer = document.createElement('div'); // 按钮层
			var button1 = document.createElement('button'); // 跳过、完成按钮
			var button2 = document.createElement('button'); // 上一步按钮
			var button3 = document.createElement('button'); // 下一步按钮

			var liElems = [];
			var aElems = [];
			for (var i = 0; i < itemsLength; i++) {
				liElems[i] = document.createElement('li');
				aElems[i] = document.createElement('a');
			}

			// 设置属性
			overlay.style.opacity = options.overlayOpacity;
			button1.innerHTML = options.skipLabel;
			button2.innerHTML = options.prevLabel;
			button3.innerHTML = options.nextLabel;

			// 给元素增加class
			_utils2.default.addClass(overlay, 'intro-overlay', 'show');
			_utils2.default.addClass(helperLayer, 'intro-helperLayer');
			_utils2.default.addClass(tooltipReferenceLayer, 'intro-tooltipReferece');
			_utils2.default.addClass(tooltipLayer, 'intro-tooltip');
			_utils2.default.addClass(arrowLayer, 'intro-arrow');
			_utils2.default.addClass(textLayer, 'intro-tooltipText');
			_utils2.default.addClass(bulletLayer, 'intro-tooltipBullets');
			_utils2.default.addClass(buttonLayer, 'intro-tooltipButtons');
			_utils2.default.addClass(button1, 'intro-button');
			_utils2.default.addClass(button2, 'intro-button');
			_utils2.default.addClass(button3, 'intro-button');

			if (options.skipLabelHide) {
				_utils2.default.addClass(button1, 'hide');
			}

			if (options.prevLabelHide) {
				_utils2.default.addClass(button2, 'hide');
			}

			if (options.nextLabelHide) {
				_utils2.default.addClass(button3, 'hide');
			}

			// 内部元素的组合
			for (var _i = 0; _i < itemsLength; _i++) {
				_utils2.default.appendChild(liElems[_i], aElems[_i]);
				_utils2.default.appendChild(bulletUlLayer, liElems[_i]);
			}
			_utils2.default.appendChild(bulletLayer, bulletUlLayer);
			_utils2.default.appendChild(buttonLayer, button1, button2, button3);
			_utils2.default.appendChild(tooltipLayer, arrowLayer, textLayer, bulletLayer, buttonLayer);
			_utils2.default.appendChild(tooltipReferenceLayer, tooltipLayer);

			// 追加元素到document中
			_utils2.default.appendChild(targetElement, overlay);
			_utils2.default.appendChild(targetElement, helperLayer);
			_utils2.default.appendChild(targetElement, tooltipReferenceLayer);

			this.helperLayer = helperLayer;
			this.tooltipReferenceLayer = tooltipReferenceLayer;
			this.overlay = overlay;
			this.initIntroElem = true;
		}
	}, {
		key: '_addEventListener',
		value: function _addEventListener() {
			var tooltipReferenceLayer = this.tooltipReferenceLayer;

			var buttons = _utils2.default.querySelector(tooltipReferenceLayer, '.intro-button');
			if (buttons.length !== 3) {
				return;
			}

			var _buttons = _slicedToArray(buttons, 3),
			    skipBtn = _buttons[0],
			    preBtn = _buttons[1],
			    nextBtn = _buttons[2];

			skipBtn.addEventListener('click', this._done.bind(this));
			preBtn.addEventListener('click', this._step.bind(this, -1));
			nextBtn.addEventListener('click', this._step.bind(this, 1));
		}

		/**
   * 设置helper和tooltipReferenceLayer的位置
   */

	}, {
		key: '_setMainLayerPositon',
		value: function _setMainLayerPositon() {
			var introItems = this.introItems,
			    options = this.options,
			    helperLayer = this.helperLayer,
			    tooltipReferenceLayer = this.tooltipReferenceLayer;

			var currentElem = introItems[this.currentStep].elem;
			var elemPostition = _utils2.default.getOffset(currentElem);
			var elemProp = _utils2.default.getCSSProp(currentElem, 'position');
			if (elemProp === 'fixed') {
				_utils2.default.addClass(helperLayer, 'intro-fixed');
				_utils2.default.addClass(tooltipReferenceLayer, 'intro-fixed');
			} else {
				_utils2.default.removeClass(helperLayer, 'intro-fixed');
				_utils2.default.removeClass(tooltipReferenceLayer, 'intro-fixed');
			}

			helperLayer.style.left = elemPostition.left - options.helperElementPadding / 2 + 'px';
			helperLayer.style.top = elemPostition.top - options.helperElementPadding / 2 + 'px';
			helperLayer.style.width = elemPostition.width + options.helperElementPadding + 'px';
			helperLayer.style.height = elemPostition.height + options.helperElementPadding + 'px';

			tooltipReferenceLayer.style.left = elemPostition.left - options.helperElementPadding / 2 + 'px';
			tooltipReferenceLayer.style.top = elemPostition.top - options.helperElementPadding / 2 + 'px';
			tooltipReferenceLayer.style.width = elemPostition.width + options.helperElementPadding + 'px';
			tooltipReferenceLayer.style.height = elemPostition.height + options.helperElementPadding + 'px';
		}

		/**
   * 设置tooltip的位置
   * @param {Dom} tooltipLayer
   */

	}, {
		key: '_setTooltipLayerPosition',
		value: function _setTooltipLayerPosition() {
			var options = this.options,
			    tooltipReferenceLayer = this.tooltipReferenceLayer,
			    introItems = this.introItems,
			    currentStep = this.currentStep,
			    intros = this.intros;

			var currentElem = introItems[this.currentStep].elem;
			var elemPostition = _utils2.default.getOffset(currentElem);

			var tooltipLayer = _utils2.default.querySelector(tooltipReferenceLayer, '.intro-tooltip', true);
			var arrowLayer = _utils2.default.querySelector(tooltipLayer, '.intro-arrow', true);

			var left = void 0;
			var top = void 0;
			var bottom = void 0;
			var right = void 0;
			var offset = 10;
			var tooltipPosition = intros[currentStep].position;

			_utils2.default.removeClass(arrowLayer, 'bottom', 'top', 'right', 'left');

			switch (tooltipPosition) {
				case 'bottom':
					top = elemPostition.height + options.helperElementPadding + offset + 'px';
					_utils2.default.addClass(arrowLayer, 'top');
					break;
				case 'top':
					bottom = elemPostition.height + options.helperElementPadding + offset + 'px';
					_utils2.default.addClass(arrowLayer, 'bottom');
					break;
				case 'left':
					right = elemPostition.width + options.helperElementPadding + offset + 'px';
					_utils2.default.addClass(arrowLayer, 'right');
					break;
				case 'right':
					left = elemPostition.width + options.helperElementPadding + offset + 'px';
					_utils2.default.addClass(arrowLayer, 'left');
					break;
				default:
					// bottom
					top = elemPostition.height + options.helperElementPadding + offset + 'px';
					break;
			}

			tooltipLayer.style.left = left === undefined ? '' : left;
			tooltipLayer.style.top = top === undefined ? '' : top;
			tooltipLayer.style.bottom = bottom === undefined ? '' : bottom;
			tooltipLayer.style.right = right === undefined ? '' : right;
		}

		/**
   * 设置tooltip中的内容，包括当前文字，当前指示灯等
   */

	}, {
		key: '_setTooltipLayerContent',
		value: function _setTooltipLayerContent() {
			var tooltipReferenceLayer = this.tooltipReferenceLayer,
			    intros = this.intros;

			var textLayer = _utils2.default.querySelector(tooltipReferenceLayer, '.intro-tooltipText', true);
			var currentText = intros[this.currentStep].tooltip;

			textLayer.innerHTML = String(currentText || '');
		}

		/**
   * 展现tooltipLayer 并可以延时执行
   * @param {Number} delay 延时执行时间
   */

	}, {
		key: '_showTooltipLayer',
		value: function _showTooltipLayer(delay) {
			var tooltipReferenceLayer = this.tooltipReferenceLayer;

			var tooltipLayer = _utils2.default.querySelector(tooltipReferenceLayer, '.intro-tooltip', true);

			if (delay && _utils2.default.isNumber(delay) && delay > 0) {
				_utils2.default.delay(function () {
					_utils2.default.addClass(tooltipLayer, 'show');
				}, delay);
			} else {
				_utils2.default.addClass(tooltipLayer, 'show');
			}
		}

		/**
   * 隐藏tooltipLayer 并可以延时执行
   * @param {Number} delay 延时执行时间
   */

	}, {
		key: '_hideTooltipLayer',
		value: function _hideTooltipLayer(delay) {
			var tooltipReferenceLayer = this.tooltipReferenceLayer;

			var tooltipLayer = _utils2.default.querySelector(tooltipReferenceLayer, '.intro-tooltip', true);

			if (delay && _utils2.default.isNumber(delay) && delay > 0) {
				_utils2.default.delay(function () {
					_utils2.default.removeClass(tooltipLayer, 'show');
				}, delay);
			} else {
				_utils2.default.removeClass(tooltipLayer, 'show');
			}
		}

		/**
   * 转换元素的显示状态，即是否需要改变引导元素的z-index
   * @param{number} delay 延迟
   */

	}, {
		key: '_toggleShowElem',
		value: function _toggleShowElem(delay) {
			var introItems = this.introItems,
			    currentStep = this.currentStep;

			var lastElem = introItems[this.lastStep].elem;
			var currentElem = introItems[currentStep].elem;

			var toggle = function toggle() {
				if (lastElem) {
					_utils2.default.removeClass(lastElem, 'intro-showElement');
				}
				if (currentElem) {
					_utils2.default.addClass(currentElem, 'intro-showElement');
				}
			};

			if (delay) {
				_utils2.default.delay(toggle, delay);
			} else {
				toggle();
			}
		}
	}, {
		key: '_changeBulletsStatus',
		value: function _changeBulletsStatus() {
			var currentStep = this.currentStep,
			    tooltipReferenceLayer = this.tooltipReferenceLayer;

			var aElems = _utils2.default.querySelector(tooltipReferenceLayer, 'a');
			aElems.forEach(function (aElem) {
				_utils2.default.removeClass(aElem, 'active');
			});
			_utils2.default.addClass(aElems[currentStep], 'active');
		}

		/**
   * 改变三个按钮的状态
   */

	}, {
		key: '_changeButtonsStatus',
		value: function _changeButtonsStatus() {
			var currentStep = this.currentStep,
			    totalSteps = this.totalSteps,
			    options = this.options;

			var buttons = _utils2.default.querySelector(this.tooltipReferenceLayer, '.intro-button');
			if (buttons.length !== 3) {
				throw new Error('buttons num is wrong!');
			}

			var _buttons2 = _slicedToArray(buttons, 3),
			    skipBtn = _buttons2[0],
			    preBtn = _buttons2[1],
			    nextBtn = _buttons2[2];

			_utils2.default.removeClass(preBtn, 'intro-disabled');
			_utils2.default.removeAttribute(preBtn, 'disabled');
			_utils2.default.removeClass(nextBtn, 'intro-disabled');
			_utils2.default.removeAttribute(nextBtn, 'disabled');
			if (currentStep === 0) {
				// first step
				preBtn.setAttribute('disabled', 'disabled');
				_utils2.default.addClass(preBtn, 'intro-disabled');
			} else if (currentStep === totalSteps - 1) {
				// last step
				nextBtn.setAttribute('disabled', 'disabled');
				_utils2.default.addClass(nextBtn, 'intro-disabled');
				skipBtn.innerText = options.finishLabel;
			}
		}

		/**
   * 执行一步
   * @param {Number} id 0 currentStep不动，1 currentStep加1, -1 currentStep减1
   */

	}, {
		key: '_step',
		value: function _step(id) {
			var _this3 = this;

			switch (id) {
				case 0:
					this.lastStep = this.currentStep;
					break;
				case 1:
					if (this.currentStep < this.totalSteps - 1) {
						this.lastStep = this.currentStep;
						this.currentStep++;
						this._hideTooltipLayer();
					}
					break;
				case -1:
					if (this.currentStep > 0) {
						this.lastStep = this.currentStep;
						this.currentStep--;
						this._hideTooltipLayer();
					}
					break;
				default:
					break;
			}

			_utils2.default.delay(function () {
				_this3._setMainLayerPositon();
				_this3._toggleShowElem();
				_this3._setTooltipLayerPosition();
				_this3._setTooltipLayerContent();
				_this3._changeBulletsStatus();
				_this3._changeButtonsStatus();
				_this3._showTooltipLayer(300);
			}, 100);
		}

		/**
   * 完成
   * 需要做一些内存回收等的处理
   */

	}, {
		key: '_done',
		value: function _done() {
			var introItems = this.introItems,
			    currentStep = this.currentStep,
			    overlay = this.overlay,
			    helperLayer = this.helperLayer,
			    tooltipReferenceLayer = this.tooltipReferenceLayer;

			// recovery

			_utils2.default.removeClass(introItems[currentStep].elem, 'intro-showElement');

			// hide
			_utils2.default.removeClass(overlay, 'show');
			this._hideTooltipLayer();

			// destory element
			overlay.remove();
			helperLayer.remove();
			tooltipReferenceLayer.remove();

			// destory
			this.initIntroElem = false;
			this.currentStep = 0;
			this.totalSteps = 0;
			this.introItems = [];
		}
	}]);

	return SXIntro;
}();

exports.default = SXIntro;

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 工具库
 * create on 2018/5/3 by lixiang
 */

var BaseType = {
	String: 'string',
	Object: 'object',
	Function: 'function',
	Boolean: 'boolean',
	Array: 'array',
	RegExp: 'regexp',
	Number: 'number'
};

/**
 * 返回对象类型，小写字符串
 */
function checkType(obj) {
	var str = Object.prototype.toString.call(obj);
	return str.slice(8, str.length - 1).toLowerCase();
}

/**
* 深拷贝
*/
function deepClone(source) {
	var copy = void 0;
	if (source === null || (typeof values === 'undefined' ? 'undefined' : _typeof(values)) !== 'object') {
		return source;
	}

	if (source instanceof Date) {
		copy = new Date();
		copy.setTime(source.getTime());
	}

	if (source instanceof Array) {
		copy = [];
		for (var i = 0, il = source.length; i < il; ++i) {
			copy[i] = deepClone(source[i]);
		}
	}

	if (source instanceof Object) {
		copy = {};
		var arr = Object.keys(source);
		arr.forEach(function (key) {
			copy[key] = deepClone(source[key]);
		});
	}
	return copy;
}

/**
 * 判断一个对象是否是字符串
 * @param obj
 * @returns {boolean}
 */
function isString(obj) {
	return checkType(obj) === BaseType.String;
}

/**
* 判断一个对象是否是数字
* @param obj
* @returns {boolean}
*/
function isNumber(obj) {
	return checkType(obj) === BaseType.Number;
}

/**
* 判断一个对象是否是个纯对象
* @param obj
* @returns {boolean}
*/
function isObject(obj) {
	return checkType(obj) === BaseType.Object;
}

/**
 * 判断对象是否为undefined
 * @param {object} obj
 */
function isUndefined(obj) {
	return obj === undefined;
}

/**
 * 判断对象是否为数组
 * @param {object} obj
 */
function isArray(obj) {
	return checkType(obj) === BaseType.Array;
}

/**
 * 根据id获取Dom元素
 * @param {string} id
 */
function getEleById(id) {
	var ele = void 0;
	if (checkType(id) === BaseType.String) {
		ele = document.getElementById(id);
	} else {
		ele = null;
	}
	return ele;
}

/**
 * 获取元素
 * @param {DOM} baseElement
 * @param {String} selectors
 * @param {Boolen}
 */
function querySelector(baseElement, selectors, single) {
	var elem = baseElement || document.body;
	if (!isString(selectors) || !elem.querySelectorAll) {
		throw new Error('querySelector err');
	}
	return single ? elem.querySelector(selectors) : elem.querySelectorAll(selectors);
}

/**
 * 获取元素的属性值
 * @param {DOM} elem Dom元素
 * @param {String} attr
 */
function getAttribute(elem, attr) {
	return elem.getAttribute(attr);
}

/**
 * 获取元素的坐标
 * @param {DOM} element
 */
function getOffset(elem) {
	var _document = document,
	    body = _document.body;

	var docEl = document.documentElement;
	var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
	var scrollLeft = window.pageXOffset || docEl.scrollTop || body.scrollTop;
	var rect = elem.getBoundingClientRect();
	return {
		top: rect.top + scrollTop,
		left: rect.left + scrollLeft,
		width: rect.width,
		height: rect.height,
		right: rect.right,
		bottom: rect.left
	};
}

/**
 * 为Dom元素增加Class
 */
function addClass() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	if (args.length < 2) {
		return;
	}
	var elem = args[0];
	var currentKlass = elem.className;
	var klass = void 0;
	var klsReg = void 0;
	for (var i = 1, il = args.length; i < il; i++) {
		klass = args[i];
		klsReg = new RegExp(klass, 'ig');
		if (!klsReg.test(currentKlass)) {
			currentKlass += ' ' + klass;
		}
	}
	currentKlass.replace('top', ' '); // 去除中间的多于空格
	elem.className = currentKlass;
}

/**
 * 为Dom元素删除Class
 */
function removeClass() {
	for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	}

	if (args.length < 2) {
		return;
	}
	var elem = args[0];
	var currentKlass = elem.className;
	var klass = void 0;
	var klsReg = void 0;
	for (var i = 1, il = args.length; i < il; i++) {
		klass = args[i];
		klsReg = new RegExp('\\s+' + klass, 'ig');
		if (klsReg.test(currentKlass)) {
			currentKlass = currentKlass.replace(klsReg, '');
		}
	}
	elem.className = currentKlass;
}

/**
 * 向元素中追加子元素
 * @param {DOM} parent 父元素
 * @param {DOM} child 子元素
 */
function appendChild() {
	for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		args[_key3] = arguments[_key3];
	}

	var parent = args[0];
	if (args.length < 2) {
		return;
	}
	for (var i = 1, il = args.length; i < il; i++) {
		parent.appendChild(args[i]);
	}
}

/**
 * 延时执行函数
 * @param {function} fn 函数
 * @param {延迟时间} time
 */
function delay(fn, time) {
	window.setTimeout(fn, time);
}

/**
 * 为Dom元素增加属性
 * @param {参数} args
 */
function setAttribute() {
	if (arguments.length < 3) {
		return;
	}
	var elem = arguments.length <= 0 ? undefined : arguments[0];
	var attr = arguments.length <= 1 ? undefined : arguments[1];
	var value = arguments.length <= 2 ? undefined : arguments[2];
	elem.setAttribute(attr, value);
}

/**
 * 为Dom元素删除属性
 * @param {参数} args
 */
function removeAttribute() {
	if (arguments.length < 2) {
		return;
	}
	var elem = arguments.length <= 0 ? undefined : arguments[0];
	elem.removeAttribute(arguments.length <= 1 ? undefined : arguments[1]);
}

/**
 * 获取元素的css属性
 * @param {Domain} elem Dom元素
 * @param {string} prop 属性字符串 如 'position'
 */
function getCSSProp(elem, prop) {
	return window.getComputedStyle(elem, null).getPropertyValue(prop);
}

/**
 * 解析dom中data-step数据
 * @param {Domain} dom dom元素
 */
function parseDataStep(dom) {
	var dataStep = getAttribute(dom, 'data-step');
	var arr = dataStep.split('-');
	return arr.map(function (item) {
		return parseInt(item, 10);
	});
}

exports.default = {
	deepClone: deepClone,
	getEleById: getEleById,
	isNumber: isNumber,
	isObject: isObject,
	isString: isString,
	isUndefined: isUndefined,
	isArray: isArray,
	querySelector: querySelector,
	getAttribute: getAttribute,
	getOffset: getOffset,
	addClass: addClass,
	removeClass: removeClass,
	appendChild: appendChild,
	delay: delay,
	setAttribute: setAttribute,
	removeAttribute: removeAttribute,
	getCSSProp: getCSSProp,
	parseDataStep: parseDataStep
};

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TWEludHJvL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TWEludHJvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1NYSW50cm8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL1NYSW50cm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vU1hJbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9TWEludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly9TWEludHJvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL1NYSW50cm8vLi9zcmMvc3R5bGUuY3NzPzc1MjgiLCJ3ZWJwYWNrOi8vU1hJbnRyby8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJTWEludHJvIiwiaWQiLCJvcHRzIiwidGFyZ2V0RWxlbWVudCIsImludHJvSXRlbXMiLCJvcHRpb25zIiwibmV4dExhYmVsIiwicHJldkxhYmVsIiwic2tpcExhYmVsIiwiZmluaXNoTGFiZWwiLCJuZXh0TGFiZWxIaWRlIiwicHJldkxhYmVsSGlkZSIsInNraXBMYWJlbEhpZGUiLCJ0b29sdGlwUG9zaXRpb24iLCJvdmVybGF5T3BhY2l0eSIsImhlbHBlckVsZW1lbnRQYWRkaW5nIiwiaW50cm9zIiwiaW5pdEludHJvRWxlbSIsImN1cnJlbnRTdGVwIiwibGFzdFN0ZXAiLCJoZWxwZXJMYXllciIsInRvb2x0aXBSZWZlcmVuY2VMYXllciIsIm92ZXJsYXkiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsInV0aWxzIiwiaXNBcnJheSIsIkVycm9yIiwic2VsZiIsIml0ZW0iLCJpbmRleCIsImludHJvIiwiX2dldFRhcmdldEVsZW0iLCJfZ2V0SW50cm9JdGVtcyIsIl9jcmVhdGVJbnRyb0VsZW0iLCJfYWRkRXZlbnRMaXN0ZW5lciIsIl9zdGVwIiwiaXNVbmRlZmluZWQiLCJkb2N1bWVudCIsImJvZHkiLCJpc1N0cmluZyIsImdldEVsZUJ5SWQiLCJzZWxlY3RvciIsInRlbXBJbnRyb0l0ZW1zIiwicXVlcnlTZWxlY3RvciIsImkiLCJpbCIsImVsZW0iLCJzdGVwcyIsInBhcnNlRGF0YVN0ZXAiLCJzdGVwIiwicHVzaCIsImxlbmd0aCIsInNvcnQiLCJhIiwiYiIsInRvdGFsU3RlcHMiLCJpdGVtc0xlbmd0aCIsImNyZWF0ZUVsZW1lbnQiLCJ0b29sdGlwTGF5ZXIiLCJhcnJvd0xheWVyIiwidGV4dExheWVyIiwiYnVsbGV0TGF5ZXIiLCJidWxsZXRVbExheWVyIiwiYnV0dG9uTGF5ZXIiLCJidXR0b24xIiwiYnV0dG9uMiIsImJ1dHRvbjMiLCJsaUVsZW1zIiwiYUVsZW1zIiwic3R5bGUiLCJvcGFjaXR5IiwiaW5uZXJIVE1MIiwiYWRkQ2xhc3MiLCJhcHBlbmRDaGlsZCIsImJ1dHRvbnMiLCJza2lwQnRuIiwicHJlQnRuIiwibmV4dEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJfZG9uZSIsImJpbmQiLCJjdXJyZW50RWxlbSIsImVsZW1Qb3N0aXRpb24iLCJnZXRPZmZzZXQiLCJlbGVtUHJvcCIsImdldENTU1Byb3AiLCJyZW1vdmVDbGFzcyIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImJvdHRvbSIsInJpZ2h0Iiwib2Zmc2V0IiwicG9zaXRpb24iLCJ1bmRlZmluZWQiLCJjdXJyZW50VGV4dCIsInRvb2x0aXAiLCJTdHJpbmciLCJkZWxheSIsImlzTnVtYmVyIiwibGFzdEVsZW0iLCJ0b2dnbGUiLCJhRWxlbSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsIl9oaWRlVG9vbHRpcExheWVyIiwiX3NldE1haW5MYXllclBvc2l0b24iLCJfdG9nZ2xlU2hvd0VsZW0iLCJfc2V0VG9vbHRpcExheWVyUG9zaXRpb24iLCJfc2V0VG9vbHRpcExheWVyQ29udGVudCIsIl9jaGFuZ2VCdWxsZXRzU3RhdHVzIiwiX2NoYW5nZUJ1dHRvbnNTdGF0dXMiLCJfc2hvd1Rvb2x0aXBMYXllciIsInJlbW92ZSIsIkJhc2VUeXBlIiwiRnVuY3Rpb24iLCJCb29sZWFuIiwiQXJyYXkiLCJSZWdFeHAiLCJOdW1iZXIiLCJjaGVja1R5cGUiLCJvYmoiLCJzdHIiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwiZGVlcENsb25lIiwic291cmNlIiwiY29weSIsInZhbHVlcyIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImFyciIsImlzT2JqZWN0IiwiZWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJiYXNlRWxlbWVudCIsInNlbGVjdG9ycyIsInNpbmdsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRBdHRyaWJ1dGUiLCJhdHRyIiwiZG9jRWwiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJhcmdzIiwiY3VycmVudEtsYXNzIiwiY2xhc3NOYW1lIiwia2xhc3MiLCJrbHNSZWciLCJ0ZXN0IiwicmVwbGFjZSIsInBhcmVudCIsImZuIiwidGltZSIsInNldFRpbWVvdXQiLCJ2YWx1ZSIsInByb3AiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImRvbSIsImRhdGFTdGVwIiwic3BsaXQiLCJtYXAiLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztB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QUtkbkcsbUJBTGM7QUFNZEgseUJBTmM7QUFPZFgsaUJBUGM7QUFRZGtCLDZCQVJjO0FBU2RzRywyQkFUYztBQVVkOUQscUJBVmM7QUFXZFgsbUJBWGM7QUFZZGMseUJBWmM7QUFhZGIseUJBYmM7QUFjZDBCLGFBZGM7QUFlZE0sMkJBZmM7QUFnQmRELGlDQWhCYztBQWlCZG5CLHVCQWpCYztBQWtCZHJDO0FBbEJjLEMiLCJmaWxlIjoiU1hJbnRyby5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTWEludHJvXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNYSW50cm9cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyog5byV5a+85YWD57Sg5qC35byPICovXFxyXFxuXFxyXFxuLmludHJvLXNob3dFbGVtZW50LCB0ci5pbnRyby1zaG93RWxlbWVudD50ZCwgdHIuaW50cm8tc2hvd0VsZW1lbnQ+dGgge1xcclxcblxcdHotaW5kZXg6IDk5OTk5OTkgIWltcG9ydGFudDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi8qIOmBrue9qeWxguagt+W8jyAqL1xcclxcblxcclxcbi5pbnRyby1vdmVybGF5IHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdHRvcDogMCU7XFxyXFxuXFx0Ym90dG9tOiAwJTtcXHJcXG5cXHRsZWZ0OiAwJTtcXHJcXG5cXHRyaWdodDogMCU7XFxyXFxuXFx0ei1pbmRleDogOTk5OTk7XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyLCByZ2JhKDAsIDAsIDAsIDAuNCkgMCwgcmdiYSgwLCAwLCAwLCAwLjkpIDEwMCUpO1xcclxcblxcdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMCwgMCwgMCwgMC40KSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgwLCAwLCAwLCAwLjkpKSk7XFxyXFxuXFx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciwgcmdiYSgwLCAwLCAwLCAwLjQpIDAsIHJnYmEoMCwgMCwgMCwgMC45KSAxMDAlKTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciwgcmdiYSgwLCAwLCAwLCAwLjQpIDAsIHJnYmEoMCwgMCwgMCwgMC45KSAxMDAlKTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIsIHJnYmEoMCwgMCwgMCwgMC40KSAwLCByZ2JhKDAsIDAsIDAsIDAuOSkgMTAwJSk7XFxyXFxuXFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIsIHJnYmEoMCwgMCwgMCwgMC40KSAwLCByZ2JhKDAsIDAsIDAsIDAuOSkgMTAwJSk7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1vdXQ7XFxyXFxuXFx0LW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1vdXQ7XFxyXFxuXFx0LW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlLW91dDtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1vdXQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8tb3ZlcmxheS5zaG93IHtcXHJcXG5cXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiDpq5jkuq7lsYLmoLflvI8gKi9cXHJcXG5cXHJcXG4uaW50cm8taGVscGVyTGF5ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR6LWluZGV4OiA5OTk5OTk4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOSk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzc3NztcXHJcXG5cXHRib3JkZXI6IDFwcyBzb2xpZGUgcmdiYSgwLCAwLCAwLCAuNSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxyXFxuXFx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXHJcXG5cXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcclxcblxcdC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvLWhlbHBlckxheWVyLmludHJvLWZpeGVkIHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIOW8leWvvOWvueivneahhuagt+W8jyAqL1xcclxcblxcclxcbi8qIOWumuS9jeWxgiAqL1xcclxcblxcclxcbi5pbnRyby10b29sdGlwUmVmZXJlY2Uge1xcclxcblxcdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFx0ei1pbmRleDogMTAwMDAwMDAwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcclxcblxcdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxyXFxuXFx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXHJcXG5cXHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5pbnRyby10b29sdGlwUmVmZXJlY2UuaW50cm8tZml4ZWQge1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyog5a+56K+d5qGG5bGCICovXFxyXFxuXFxyXFxuLmludHJvLXRvb2x0aXAge1xcclxcblxcdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXHJcXG5cXHRtaW4td2lkdGg6IDIwMHB4O1xcclxcblxcdG1heC13aWR0aDogMzAwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcdGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1vdXQ7XFxyXFxuXFx0LW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1vdXQ7XFxyXFxuXFx0LW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlLW91dDtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1vdXQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2Utb3V0XFxyXFxufVxcclxcblxcclxcbi5pbnRyby10b29sdGlwLnNob3cge1xcclxcblxcdG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIOWvueivneahhueureWktCAqL1xcclxcblxcclxcbi5pbnRyby1hcnJvdyB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Ym9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8tYXJyb3cudG9wIHtcXHJcXG5cXHR0b3A6IC0xMHB4O1xcclxcblxcdGxlZnQ6IDEwcHg7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI0ZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvLWFycm93LnRvcC1yaWdodCB7XFxyXFxuXFx0dG9wOiAtMTBweDtcXHJcXG5cXHRyaWdodDogMTBweDtcXHJcXG5cXHRib3JkZXItYm90dG9tLWNvbG9yOiAjRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8tYXJyb3cudG9wLW1pZGRsZSB7XFxyXFxuXFx0dG9wOiAtMTBweDtcXHJcXG5cXHRsZWZ0OiA1MCU7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI0ZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvLWFycm93LmJvdHRvbSB7XFxyXFxuXFx0bGVmdDogMTBweDtcXHJcXG5cXHRib3R0b206IC0xMHB4O1xcclxcblxcdGJvcmRlci10b3AtY29sb3I6ICNGRkY7XFxyXFxufVxcclxcblxcclxcbi5pbnRyby1hcnJvdy5yaWdodCB7XFxyXFxuXFx0dG9wOiAxMHB4O1xcclxcblxcdHJpZ2h0OiAtMTBweDtcXHJcXG5cXHRib3JkZXItbGVmdC1jb2xvcjogI0ZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvLWFycm93LnJpZ2h0LW1pZGRsZSB7XFxyXFxuXFx0dG9wOiA1MCU7XFxyXFxuXFx0cmlnaHQ6IC0xMHB4O1xcclxcblxcdGJvcmRlci1sZWZ0LWNvbG9yOiAjRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8tYXJyb3cubGVmdCB7XFxyXFxuXFx0dG9wOiAxMHB4O1xcclxcblxcdGxlZnQ6IC0xMHB4O1xcclxcblxcdGJvcmRlci1yaWdodC1jb2xvcjogI0ZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLyogYnVsbGV0cyAqL1xcclxcblxcclxcbi5pbnRyby10b29sdGlwQnVsbGV0cyB7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8tdG9vbHRpcEJ1bGxldHMgdWwge1xcclxcblxcdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcblxcdGNsZWFyOiBib3RoO1xcclxcblxcdG1hcmdpbjogMTVweCBhdXRvIDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5pbnRyby10b29sdGlwQnVsbGV0cyB1bCBsaSB7XFxyXFxuXFx0Ym94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG5cXHRtYXJnaW46IDAgMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8tdG9vbHRpcEJ1bGxldHMgdWwgbGkgYSB7XFxyXFxuXFx0Ym94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDZweDtcXHJcXG5cXHRoZWlnaHQ6IDZweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjY2NjO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG5cXHQtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG5cXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnRyby10b29sdGlwQnVsbGV0cyB1bCBsaSBhLmFjdGl2ZSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLyogYnV0dG9ucyAqL1xcclxcblxcclxcbi5pbnRyby10b29sdGlwQnV0dG9ucyB7XFxyXFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvLWJ1dHRvbiB7XFxyXFxuXFx0Ym94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG92ZXJmbG93OiB2aXNpYmxlO1xcclxcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHRwYWRkaW5nOiAwLjNlbSAwLjhlbTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xcclxcblxcdG1hcmdpbjogMTBweCAycHggMCAwO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHR0ZXh0LXNoYWRvdzogMXB4IDFweCAwICNmZmY7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGNvbG9yOiAjMzMzO1xcclxcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAwLCAwIDEwMCUsIGZyb20oI2Y0ZjRmNCksIHRvKCNlY2VjZWMpKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgjZjRmNGY0LCAjZWNlY2VjKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoI2Y0ZjRmNCwgI2VjZWNlYyk7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmNGY0ZjQsICNlY2VjZWMpO1xcclxcblxcdC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xcclxcblxcdC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xcclxcblxcdC1vLWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuXFx0YmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvLWJ1dHRvbi5oaWRlIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8tYnV0dG9uOmFjdGl2ZSB7XFxyXFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAxcHggIzk5OSBpbnNldDtcXHJcXG5cXHQtbW96LWJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM5OTkgaW5zZXQ7XFxyXFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAjOTk5IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8tZGlzYWJsZWQsIC5pbnRyby1kaXNhYmxlZDpob3ZlciwgLmludHJvLWRpc2FibGVkOmZvY3VzIHtcXHJcXG5cXHRjb2xvcjogIzlhOWE5YTtcXHJcXG5cXHRib3JkZXItY29sb3I6ICNkNGQ0ZDQ7XFxyXFxuXFx0Ym94LXNoYWRvdzogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvKipcclxuICogY3JlYXRlZCBieSBsaXhpYW5nIGluIDIwMTcvNS8yXHJcbiAqIFNYSW5ybyDkuLvnsbtcclxuICovXHJcblxyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY2xhc3MgU1hJbnRybyB7XHJcblx0Y29uc3RydWN0b3IoaWQsIG9wdHMpIHtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XHJcblx0XHR0aGlzLmludHJvSXRlbXMgPSBbXTtcclxuXHRcdHRoaXMub3B0aW9ucyA9IHtcclxuXHRcdFx0bmV4dExhYmVsOiAn5LiL5LiA5q2lJyxcclxuXHRcdFx0cHJldkxhYmVsOiAn5LiK5LiA5q2lJyxcclxuXHRcdFx0c2tpcExhYmVsOiAn6Lez6L+HJyxcclxuXHRcdFx0ZmluaXNoTGFiZWw6ICflrozmiJAnLFxyXG5cdFx0XHRuZXh0TGFiZWxIaWRlOiBmYWxzZSxcclxuXHRcdFx0cHJldkxhYmVsSGlkZTogZmFsc2UsXHJcblx0XHRcdHNraXBMYWJlbEhpZGU6IGZhbHNlLFxyXG5cdFx0XHR0b29sdGlwUG9zaXRpb246ICdib3R0b20nLFxyXG5cdFx0XHRvdmVybGF5T3BhY2l0eTogMC44LFxyXG5cdFx0XHRoZWxwZXJFbGVtZW50UGFkZGluZzogMTBcclxuXHRcdH07XHJcblx0XHR0aGlzLmludHJvcyA9IFtdO1xyXG5cdFx0dGhpcy5pbml0SW50cm9FbGVtID0gZmFsc2U7XHJcblx0XHR0aGlzLmN1cnJlbnRTdGVwID0gMDtcclxuXHRcdHRoaXMubGFzdFN0ZXAgPSAwO1xyXG5cclxuXHRcdHRoaXMuaGVscGVyTGF5ZXIgPSBudWxsO1xyXG5cdFx0dGhpcy50b29sdGlwUmVmZXJlbmNlTGF5ZXIgPSBudWxsO1xyXG5cdFx0dGhpcy5vdmVybGF5ID0gbnVsbDtcclxuXHJcblx0XHRpZiAob3B0cykge1xyXG5cdFx0XHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zKTtcclxuXHRcdFx0a2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnNba2V5XSA9IG9wdHNba2V5XTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuICAgKiDorr7nva7or7TmmI5cclxuICAgKiDmlbDnu4TmoLzlvI/vvIzmlbDnu4TkuK3nmoTmrKHluo/ljbPku6PooajnrKzlh6DmraXnmoTlvJXlr7zor7TmmI7jgIJcclxuICAgKiBAcGFyYW0ge2Fycnl9IGludHJvcyB7MTon56ys5LiA5q2l77ya6L+Z6YeM5pivWFhYJ++8jDI6J+esrOS6jOatpTrov5nph4zmmK9YWFgnfVxyXG4gICAqL1xyXG5cdHNldEludHJvKGludHJvcykge1xyXG5cdFx0aWYgKHV0aWxzLmlzQXJyYXkoaW50cm9zKSkge1xyXG5cdFx0XHR0aGlzLmludHJvcyA9IGludHJvcztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcigncGFyYW1zIG11c3QgYmUgYSBhcnJheScpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XHJcblx0XHR0aGlzLmludHJvSXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0aXRlbS5pbnRybyA9IHNlbGYuaW50cm9zW2luZGV4ICsgMV07XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICAqIOW8gOWni+WQr+WKqOW8leWvvFxyXG4gICAqL1xyXG5cdHN0YXJ0KCkge1xyXG5cdFx0Ly8g6K6+572u5qC55YWD57SgXHJcblx0XHR0aGlzLl9nZXRUYXJnZXRFbGVtKHRoaXMuaWQpO1xyXG5cdFx0Ly8g6K6+572u6ZyA6KaB5a+86Iiq55qE5YWD57SgXHJcblx0XHR0aGlzLl9nZXRJbnRyb0l0ZW1zKCcqW2RhdGEtc3RlcF0nKTtcclxuXHRcdC8vIOWIm+W7uuWFg+e0oFxyXG5cdFx0dGhpcy5fY3JlYXRlSW50cm9FbGVtKCk7XHJcblx0XHQvLyDnm5HlkKzkuovku7ZcclxuXHRcdHRoaXMuX2FkZEV2ZW50TGlzdGVuZXIoKTtcclxuXHRcdC8vIOesrOS4gOatpVxyXG5cdFx0dGhpcy5fc3RlcCgwKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICAqIOiOt+WPlnRhcmdldEVsZW1cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcclxuICAgKi9cclxuXHRfZ2V0VGFyZ2V0RWxlbShpZCkge1xyXG5cdFx0aWYgKHV0aWxzLmlzVW5kZWZpbmVkKGlkKSkge1xyXG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xyXG5cdFx0fSBlbHNlIGlmICh1dGlscy5pc1N0cmluZyhpZCkpIHtcclxuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gdXRpbHMuZ2V0RWxlQnlJZChpZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDojrflj5bpnIDopoHlvJXlr7znmoTlhYPntKDpm4blkIhcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcclxuXHQgKi9cclxuXHRfZ2V0SW50cm9JdGVtcyhzZWxlY3Rvcikge1xyXG5cdFx0Y29uc3QgdGVtcEludHJvSXRlbXMgPSB1dGlscy5xdWVyeVNlbGVjdG9yKHRoaXMudGFyZ2V0RWxlbWVudCwgc2VsZWN0b3IpO1xyXG5cdFx0dGhpcy5pbnRyb0l0ZW1zID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMCwgaWwgPSB0ZW1wSW50cm9JdGVtcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGVsZW0gPSB0ZW1wSW50cm9JdGVtc1tpXTtcclxuXHRcdFx0Y29uc3Qgc3RlcHMgPSB1dGlscy5wYXJzZURhdGFTdGVwKGVsZW0pO1xyXG5cdFx0XHRzdGVwcy5mb3JFYWNoKChzdGVwKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pbnRyb0l0ZW1zLnB1c2goe1xyXG5cdFx0XHRcdFx0ZWxlbSxcclxuXHRcdFx0XHRcdGludHJvOiAnJyxcclxuXHRcdFx0XHRcdHN0ZXBcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmludHJvSXRlbXMuc29ydCgoYSwgYikgPT4gYS5zdGVwIC0gYi5zdGVwKTtcclxuXHJcblx0XHR0aGlzLnRvdGFsU3RlcHMgPSB0aGlzLmludHJvSXRlbXMubGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICog5Yib5bu65a+86Iiq5YWD57SgXHJcblx0ICovXHJcblx0X2NyZWF0ZUludHJvRWxlbSgpIHtcclxuXHRcdGNvbnN0IHsgb3B0aW9ucywgdGFyZ2V0RWxlbWVudCwgaW50cm9JdGVtcyB9ID0gdGhpcztcclxuXHRcdGNvbnN0IGl0ZW1zTGVuZ3RoID0gaW50cm9JdGVtcy5sZW5ndGg7XHJcblx0XHQvLyDliJvlu7rlhYPntKBcclxuXHRcdGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8g6YGu572p5bGCXHJcblx0XHRjb25zdCBoZWxwZXJMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOy8vIOmrmOS6ruWxglxyXG5cdFx0Y29uc3QgdG9vbHRpcFJlZmVyZW5jZUxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7Ly8g5byV5a+85a6a5L2N5bGCXHJcblx0XHRjb25zdCB0b29sdGlwTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsvLyDlvJXlr7zlsYJcclxuXHRcdGNvbnN0IGFycm93TGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsvLyDlr7nor53moYbnrq3lpLRcclxuXHRcdGNvbnN0IHRleHRMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOy8vIOWvueivneahhuaWh+Wtl1xyXG5cdFx0Y29uc3QgYnVsbGV0TGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsvLyDlrZDlvLnov5vluqblsYJcclxuXHRcdGNvbnN0IGJ1bGxldFVsTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpOy8vIHVs5YiX6KGoXHJcblx0XHRjb25zdCBidXR0b25MYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOy8vIOaMiemSruWxglxyXG5cdFx0Y29uc3QgYnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvLyDot7Pov4fjgIHlrozmiJDmjInpkq5cclxuXHRcdGNvbnN0IGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgLy8g5LiK5LiA5q2l5oyJ6ZKuXHJcblx0XHRjb25zdCBidXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vIOS4i+S4gOatpeaMiemSrlxyXG5cclxuXHRcdGNvbnN0IGxpRWxlbXMgPSBbXTtcclxuXHRcdGNvbnN0IGFFbGVtcyA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtc0xlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxpRWxlbXNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdFx0XHRhRWxlbXNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdC8vIOiuvue9ruWxnuaAp1xyXG5cdFx0b3ZlcmxheS5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vdmVybGF5T3BhY2l0eTtcclxuXHRcdGJ1dHRvbjEuaW5uZXJIVE1MID0gb3B0aW9ucy5za2lwTGFiZWw7XHJcblx0XHRidXR0b24yLmlubmVySFRNTCA9IG9wdGlvbnMucHJldkxhYmVsO1xyXG5cdFx0YnV0dG9uMy5pbm5lckhUTUwgPSBvcHRpb25zLm5leHRMYWJlbDtcclxuXHJcblx0XHQvLyDnu5nlhYPntKDlop7liqBjbGFzc1xyXG5cdFx0dXRpbHMuYWRkQ2xhc3Mob3ZlcmxheSwgJ2ludHJvLW92ZXJsYXknLCAnc2hvdycpO1xyXG5cdFx0dXRpbHMuYWRkQ2xhc3MoaGVscGVyTGF5ZXIsICdpbnRyby1oZWxwZXJMYXllcicpO1xyXG5cdFx0dXRpbHMuYWRkQ2xhc3ModG9vbHRpcFJlZmVyZW5jZUxheWVyLCAnaW50cm8tdG9vbHRpcFJlZmVyZWNlJyk7XHJcblx0XHR1dGlscy5hZGRDbGFzcyh0b29sdGlwTGF5ZXIsICdpbnRyby10b29sdGlwJyk7XHJcblx0XHR1dGlscy5hZGRDbGFzcyhhcnJvd0xheWVyLCAnaW50cm8tYXJyb3cnKTtcclxuXHRcdHV0aWxzLmFkZENsYXNzKHRleHRMYXllciwgJ2ludHJvLXRvb2x0aXBUZXh0Jyk7XHJcblx0XHR1dGlscy5hZGRDbGFzcyhidWxsZXRMYXllciwgJ2ludHJvLXRvb2x0aXBCdWxsZXRzJyk7XHJcblx0XHR1dGlscy5hZGRDbGFzcyhidXR0b25MYXllciwgJ2ludHJvLXRvb2x0aXBCdXR0b25zJyk7XHJcblx0XHR1dGlscy5hZGRDbGFzcyhidXR0b24xLCAnaW50cm8tYnV0dG9uJyk7XHJcblx0XHR1dGlscy5hZGRDbGFzcyhidXR0b24yLCAnaW50cm8tYnV0dG9uJyk7XHJcblx0XHR1dGlscy5hZGRDbGFzcyhidXR0b24zLCAnaW50cm8tYnV0dG9uJyk7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMuc2tpcExhYmVsSGlkZSkge1xyXG5cdFx0XHR1dGlscy5hZGRDbGFzcyhidXR0b24xLCAnaGlkZScpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcHRpb25zLnByZXZMYWJlbEhpZGUpIHtcclxuXHRcdFx0dXRpbHMuYWRkQ2xhc3MoYnV0dG9uMiwgJ2hpZGUnKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucy5uZXh0TGFiZWxIaWRlKSB7XHJcblx0XHRcdHV0aWxzLmFkZENsYXNzKGJ1dHRvbjMsICdoaWRlJyk7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdC8vIOWGhemDqOWFg+e0oOeahOe7hOWQiFxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtc0xlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHV0aWxzLmFwcGVuZENoaWxkKGxpRWxlbXNbaV0sIGFFbGVtc1tpXSk7XHJcblx0XHRcdHV0aWxzLmFwcGVuZENoaWxkKGJ1bGxldFVsTGF5ZXIsIGxpRWxlbXNbaV0pO1xyXG5cdFx0fVxyXG5cdFx0dXRpbHMuYXBwZW5kQ2hpbGQoYnVsbGV0TGF5ZXIsIGJ1bGxldFVsTGF5ZXIpO1xyXG5cdFx0dXRpbHMuYXBwZW5kQ2hpbGQoYnV0dG9uTGF5ZXIsIGJ1dHRvbjEsIGJ1dHRvbjIsIGJ1dHRvbjMpO1xyXG5cdFx0dXRpbHMuYXBwZW5kQ2hpbGQodG9vbHRpcExheWVyLCBhcnJvd0xheWVyLCB0ZXh0TGF5ZXIsIGJ1bGxldExheWVyLCBidXR0b25MYXllcik7XHJcblx0XHR1dGlscy5hcHBlbmRDaGlsZCh0b29sdGlwUmVmZXJlbmNlTGF5ZXIsIHRvb2x0aXBMYXllcik7XHJcblxyXG5cdFx0Ly8g6L+95Yqg5YWD57Sg5YiwZG9jdW1lbnTkuK1cclxuXHRcdHV0aWxzLmFwcGVuZENoaWxkKHRhcmdldEVsZW1lbnQsIG92ZXJsYXkpO1xyXG5cdFx0dXRpbHMuYXBwZW5kQ2hpbGQodGFyZ2V0RWxlbWVudCwgaGVscGVyTGF5ZXIpO1xyXG5cdFx0dXRpbHMuYXBwZW5kQ2hpbGQodGFyZ2V0RWxlbWVudCwgdG9vbHRpcFJlZmVyZW5jZUxheWVyKTtcclxuXHJcblx0XHR0aGlzLmhlbHBlckxheWVyID0gaGVscGVyTGF5ZXI7XHJcblx0XHR0aGlzLnRvb2x0aXBSZWZlcmVuY2VMYXllciA9IHRvb2x0aXBSZWZlcmVuY2VMYXllcjtcclxuXHRcdHRoaXMub3ZlcmxheSA9IG92ZXJsYXk7XHJcblx0XHR0aGlzLmluaXRJbnRyb0VsZW0gPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0X2FkZEV2ZW50TGlzdGVuZXIoKSB7XHJcblx0XHRjb25zdCB7IHRvb2x0aXBSZWZlcmVuY2VMYXllciB9ID0gdGhpcztcclxuXHRcdGNvbnN0IGJ1dHRvbnMgPSB1dGlscy5xdWVyeVNlbGVjdG9yKHRvb2x0aXBSZWZlcmVuY2VMYXllciwgJy5pbnRyby1idXR0b24nKTtcclxuXHRcdGlmIChidXR0b25zLmxlbmd0aCAhPT0gMykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBbc2tpcEJ0biwgcHJlQnRuLCBuZXh0QnRuXSA9IGJ1dHRvbnM7XHJcblx0XHRza2lwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fZG9uZS5iaW5kKHRoaXMpKTtcclxuXHRcdHByZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX3N0ZXAuYmluZCh0aGlzLCAtMSkpO1xyXG5cdFx0bmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX3N0ZXAuYmluZCh0aGlzLCAxKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDorr7nva5oZWxwZXLlkox0b29sdGlwUmVmZXJlbmNlTGF5ZXLnmoTkvY3nva5cclxuXHQgKi9cclxuXHRfc2V0TWFpbkxheWVyUG9zaXRvbigpIHtcclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0aW50cm9JdGVtcywgb3B0aW9ucywgaGVscGVyTGF5ZXIsIHRvb2x0aXBSZWZlcmVuY2VMYXllclxyXG5cdFx0fSA9IHRoaXM7XHJcblx0XHRjb25zdCBjdXJyZW50RWxlbSA9IGludHJvSXRlbXNbdGhpcy5jdXJyZW50U3RlcF0uZWxlbTtcclxuXHRcdGNvbnN0IGVsZW1Qb3N0aXRpb24gPSB1dGlscy5nZXRPZmZzZXQoY3VycmVudEVsZW0pO1xyXG5cdFx0Y29uc3QgZWxlbVByb3AgPSB1dGlscy5nZXRDU1NQcm9wKGN1cnJlbnRFbGVtLCAncG9zaXRpb24nKTtcclxuXHRcdGlmIChlbGVtUHJvcCA9PT0gJ2ZpeGVkJykge1xyXG5cdFx0XHR1dGlscy5hZGRDbGFzcyhoZWxwZXJMYXllciwgJ2ludHJvLWZpeGVkJyk7XHJcblx0XHRcdHV0aWxzLmFkZENsYXNzKHRvb2x0aXBSZWZlcmVuY2VMYXllciwgJ2ludHJvLWZpeGVkJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR1dGlscy5yZW1vdmVDbGFzcyhoZWxwZXJMYXllciwgJ2ludHJvLWZpeGVkJyk7XHJcblx0XHRcdHV0aWxzLnJlbW92ZUNsYXNzKHRvb2x0aXBSZWZlcmVuY2VMYXllciwgJ2ludHJvLWZpeGVkJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aGVscGVyTGF5ZXIuc3R5bGUubGVmdCA9IGAke2VsZW1Qb3N0aXRpb24ubGVmdCAtIChvcHRpb25zLmhlbHBlckVsZW1lbnRQYWRkaW5nIC8gMil9cHhgO1xyXG5cdFx0aGVscGVyTGF5ZXIuc3R5bGUudG9wID0gYCR7ZWxlbVBvc3RpdGlvbi50b3AgLSAob3B0aW9ucy5oZWxwZXJFbGVtZW50UGFkZGluZyAvIDIpfXB4YDtcclxuXHRcdGhlbHBlckxheWVyLnN0eWxlLndpZHRoID0gYCR7ZWxlbVBvc3RpdGlvbi53aWR0aCArIG9wdGlvbnMuaGVscGVyRWxlbWVudFBhZGRpbmd9cHhgO1xyXG5cdFx0aGVscGVyTGF5ZXIuc3R5bGUuaGVpZ2h0ID0gYCR7ZWxlbVBvc3RpdGlvbi5oZWlnaHQgKyBvcHRpb25zLmhlbHBlckVsZW1lbnRQYWRkaW5nfXB4YDtcclxuXHJcblx0XHR0b29sdGlwUmVmZXJlbmNlTGF5ZXIuc3R5bGUubGVmdCA9IGAke2VsZW1Qb3N0aXRpb24ubGVmdCAtIChvcHRpb25zLmhlbHBlckVsZW1lbnRQYWRkaW5nIC8gMil9cHhgO1xyXG5cdFx0dG9vbHRpcFJlZmVyZW5jZUxheWVyLnN0eWxlLnRvcCA9IGAke2VsZW1Qb3N0aXRpb24udG9wIC0gKG9wdGlvbnMuaGVscGVyRWxlbWVudFBhZGRpbmcgLyAyKX1weGA7XHJcblx0XHR0b29sdGlwUmVmZXJlbmNlTGF5ZXIuc3R5bGUud2lkdGggPSBgJHtlbGVtUG9zdGl0aW9uLndpZHRoICsgb3B0aW9ucy5oZWxwZXJFbGVtZW50UGFkZGluZ31weGA7XHJcblx0XHR0b29sdGlwUmVmZXJlbmNlTGF5ZXIuc3R5bGUuaGVpZ2h0ID0gYCR7ZWxlbVBvc3RpdGlvbi5oZWlnaHQgKyBvcHRpb25zLmhlbHBlckVsZW1lbnRQYWRkaW5nfXB4YDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOiuvue9rnRvb2x0aXDnmoTkvY3nva5cclxuXHQgKiBAcGFyYW0ge0RvbX0gdG9vbHRpcExheWVyXHJcblx0ICovXHJcblx0X3NldFRvb2x0aXBMYXllclBvc2l0aW9uKCkge1xyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRvcHRpb25zLCB0b29sdGlwUmVmZXJlbmNlTGF5ZXIsIGludHJvSXRlbXMsIGN1cnJlbnRTdGVwLCBpbnRyb3NcclxuXHRcdH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgY3VycmVudEVsZW0gPSBpbnRyb0l0ZW1zW3RoaXMuY3VycmVudFN0ZXBdLmVsZW07XHJcblx0XHRjb25zdCBlbGVtUG9zdGl0aW9uID0gdXRpbHMuZ2V0T2Zmc2V0KGN1cnJlbnRFbGVtKTtcclxuXHJcblx0XHRjb25zdCB0b29sdGlwTGF5ZXIgPSB1dGlscy5xdWVyeVNlbGVjdG9yKHRvb2x0aXBSZWZlcmVuY2VMYXllciwgJy5pbnRyby10b29sdGlwJywgdHJ1ZSk7XHJcblx0XHRjb25zdCBhcnJvd0xheWVyID0gdXRpbHMucXVlcnlTZWxlY3Rvcih0b29sdGlwTGF5ZXIsICcuaW50cm8tYXJyb3cnLCB0cnVlKTtcclxuXHJcblx0XHRsZXQgbGVmdDtcclxuXHRcdGxldCB0b3A7XHJcblx0XHRsZXQgYm90dG9tO1xyXG5cdFx0bGV0IHJpZ2h0O1xyXG5cdFx0Y29uc3Qgb2Zmc2V0ID0gMTA7XHJcblx0XHRjb25zdCB0b29sdGlwUG9zaXRpb24gPSBpbnRyb3NbY3VycmVudFN0ZXBdLnBvc2l0aW9uO1xyXG5cclxuXHRcdHV0aWxzLnJlbW92ZUNsYXNzKGFycm93TGF5ZXIsICdib3R0b20nLCAndG9wJywgJ3JpZ2h0JywgJ2xlZnQnKTtcclxuXHJcblx0XHRzd2l0Y2ggKHRvb2x0aXBQb3NpdGlvbikge1xyXG5cdFx0Y2FzZSAnYm90dG9tJzpcclxuXHRcdFx0dG9wID0gYCR7ZWxlbVBvc3RpdGlvbi5oZWlnaHQgKyBvcHRpb25zLmhlbHBlckVsZW1lbnRQYWRkaW5nICsgb2Zmc2V0fXB4YDtcclxuXHRcdFx0dXRpbHMuYWRkQ2xhc3MoYXJyb3dMYXllciwgJ3RvcCcpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ3RvcCc6XHJcblx0XHRcdGJvdHRvbSA9IGAke2VsZW1Qb3N0aXRpb24uaGVpZ2h0ICsgb3B0aW9ucy5oZWxwZXJFbGVtZW50UGFkZGluZyArIG9mZnNldH1weGA7XHJcblx0XHRcdHV0aWxzLmFkZENsYXNzKGFycm93TGF5ZXIsICdib3R0b20nKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICdsZWZ0JzpcclxuXHRcdFx0cmlnaHQgPSBgJHtlbGVtUG9zdGl0aW9uLndpZHRoICsgb3B0aW9ucy5oZWxwZXJFbGVtZW50UGFkZGluZyArIG9mZnNldH1weGA7XHJcblx0XHRcdHV0aWxzLmFkZENsYXNzKGFycm93TGF5ZXIsICdyaWdodCcpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0bGVmdCA9IGAke2VsZW1Qb3N0aXRpb24ud2lkdGggKyBvcHRpb25zLmhlbHBlckVsZW1lbnRQYWRkaW5nICsgb2Zmc2V0fXB4YDtcclxuXHRcdFx0dXRpbHMuYWRkQ2xhc3MoYXJyb3dMYXllciwgJ2xlZnQnKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHQvLyBib3R0b21cclxuXHRcdFx0dG9wID0gYCR7ZWxlbVBvc3RpdGlvbi5oZWlnaHQgKyBvcHRpb25zLmhlbHBlckVsZW1lbnRQYWRkaW5nICsgb2Zmc2V0fXB4YDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0dG9vbHRpcExheWVyLnN0eWxlLmxlZnQgPSAobGVmdCA9PT0gdW5kZWZpbmVkKSA/ICcnIDogbGVmdDtcclxuXHRcdHRvb2x0aXBMYXllci5zdHlsZS50b3AgPSAodG9wID09PSB1bmRlZmluZWQpID8gJycgOiB0b3A7XHJcblx0XHR0b29sdGlwTGF5ZXIuc3R5bGUuYm90dG9tID0gKGJvdHRvbSA9PT0gdW5kZWZpbmVkKSA/ICcnIDogYm90dG9tO1xyXG5cdFx0dG9vbHRpcExheWVyLnN0eWxlLnJpZ2h0ID0gKHJpZ2h0ID09PSB1bmRlZmluZWQpID8gJycgOiByaWdodDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOiuvue9rnRvb2x0aXDkuK3nmoTlhoXlrrnvvIzljIXmi6zlvZPliY3mloflrZfvvIzlvZPliY3mjIfnpLrnga/nrYlcclxuXHQgKi9cclxuXHRfc2V0VG9vbHRpcExheWVyQ29udGVudCgpIHtcclxuXHRcdGNvbnN0IHsgdG9vbHRpcFJlZmVyZW5jZUxheWVyLCBpbnRyb3MgfSA9IHRoaXM7XHJcblx0XHRjb25zdCB0ZXh0TGF5ZXIgPSB1dGlscy5xdWVyeVNlbGVjdG9yKHRvb2x0aXBSZWZlcmVuY2VMYXllciwgJy5pbnRyby10b29sdGlwVGV4dCcsIHRydWUpO1xyXG5cdFx0Y29uc3QgY3VycmVudFRleHQgPSBpbnRyb3NbdGhpcy5jdXJyZW50U3RlcF0udG9vbHRpcDtcclxuXHJcblx0XHR0ZXh0TGF5ZXIuaW5uZXJIVE1MID0gU3RyaW5nKGN1cnJlbnRUZXh0IHx8ICcnKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOWxleeOsHRvb2x0aXBMYXllciDlubblj6/ku6Xlu7bml7bmiafooYxcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gZGVsYXkg5bu25pe25omn6KGM5pe26Ze0XHJcblx0ICovXHJcblx0X3Nob3dUb29sdGlwTGF5ZXIoZGVsYXkpIHtcclxuXHRcdGNvbnN0IHsgdG9vbHRpcFJlZmVyZW5jZUxheWVyIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgdG9vbHRpcExheWVyID0gdXRpbHMucXVlcnlTZWxlY3Rvcih0b29sdGlwUmVmZXJlbmNlTGF5ZXIsICcuaW50cm8tdG9vbHRpcCcsIHRydWUpO1xyXG5cclxuXHRcdGlmIChkZWxheSAmJiB1dGlscy5pc051bWJlcihkZWxheSkgJiYgZGVsYXkgPiAwKSB7XHJcblx0XHRcdHV0aWxzLmRlbGF5KCgpID0+IHtcclxuXHRcdFx0XHR1dGlscy5hZGRDbGFzcyh0b29sdGlwTGF5ZXIsICdzaG93Jyk7XHJcblx0XHRcdH0sIGRlbGF5KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHV0aWxzLmFkZENsYXNzKHRvb2x0aXBMYXllciwgJ3Nob3cnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOmakOiXj3Rvb2x0aXBMYXllciDlubblj6/ku6Xlu7bml7bmiafooYxcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gZGVsYXkg5bu25pe25omn6KGM5pe26Ze0XHJcblx0ICovXHJcblx0X2hpZGVUb29sdGlwTGF5ZXIoZGVsYXkpIHtcclxuXHRcdGNvbnN0IHsgdG9vbHRpcFJlZmVyZW5jZUxheWVyIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgdG9vbHRpcExheWVyID0gdXRpbHMucXVlcnlTZWxlY3Rvcih0b29sdGlwUmVmZXJlbmNlTGF5ZXIsICcuaW50cm8tdG9vbHRpcCcsIHRydWUpO1xyXG5cclxuXHRcdGlmIChkZWxheSAmJiB1dGlscy5pc051bWJlcihkZWxheSkgJiYgZGVsYXkgPiAwKSB7XHJcblx0XHRcdHV0aWxzLmRlbGF5KCgpID0+IHtcclxuXHRcdFx0XHR1dGlscy5yZW1vdmVDbGFzcyh0b29sdGlwTGF5ZXIsICdzaG93Jyk7XHJcblx0XHRcdH0sIGRlbGF5KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHV0aWxzLnJlbW92ZUNsYXNzKHRvb2x0aXBMYXllciwgJ3Nob3cnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOi9rOaNouWFg+e0oOeahOaYvuekuueKtuaAge+8jOWNs+aYr+WQpumcgOimgeaUueWPmOW8leWvvOWFg+e0oOeahHotaW5kZXhcclxuXHQgKiBAcGFyYW17bnVtYmVyfSBkZWxheSDlu7bov59cclxuXHQgKi9cclxuXHRfdG9nZ2xlU2hvd0VsZW0oZGVsYXkpIHtcclxuXHRcdGNvbnN0IHsgaW50cm9JdGVtcywgY3VycmVudFN0ZXAgfSA9IHRoaXM7XHJcblx0XHRjb25zdCBsYXN0RWxlbSA9IGludHJvSXRlbXNbdGhpcy5sYXN0U3RlcF0uZWxlbTtcclxuXHRcdGNvbnN0IGN1cnJlbnRFbGVtID0gaW50cm9JdGVtc1tjdXJyZW50U3RlcF0uZWxlbTtcclxuXHJcblx0XHRjb25zdCB0b2dnbGUgPSAoKSA9PiB7XHJcblx0XHRcdGlmIChsYXN0RWxlbSkge1xyXG5cdFx0XHRcdHV0aWxzLnJlbW92ZUNsYXNzKGxhc3RFbGVtLCAnaW50cm8tc2hvd0VsZW1lbnQnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoY3VycmVudEVsZW0pIHtcclxuXHRcdFx0XHR1dGlscy5hZGRDbGFzcyhjdXJyZW50RWxlbSwgJ2ludHJvLXNob3dFbGVtZW50Jyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKGRlbGF5KSB7XHJcblx0XHRcdHV0aWxzLmRlbGF5KHRvZ2dsZSwgZGVsYXkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dG9nZ2xlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRfY2hhbmdlQnVsbGV0c1N0YXR1cygpIHtcclxuXHRcdGNvbnN0IHsgY3VycmVudFN0ZXAsIHRvb2x0aXBSZWZlcmVuY2VMYXllciB9ID0gdGhpcztcclxuXHRcdGNvbnN0IGFFbGVtcyA9IHV0aWxzLnF1ZXJ5U2VsZWN0b3IodG9vbHRpcFJlZmVyZW5jZUxheWVyLCAnYScpO1xyXG5cdFx0YUVsZW1zLmZvckVhY2goKGFFbGVtKSA9PiB7XHJcblx0XHRcdHV0aWxzLnJlbW92ZUNsYXNzKGFFbGVtLCAnYWN0aXZlJyk7XHJcblx0XHR9KTtcclxuXHRcdHV0aWxzLmFkZENsYXNzKGFFbGVtc1tjdXJyZW50U3RlcF0sICdhY3RpdmUnKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOaUueWPmOS4ieS4quaMiemSrueahOeKtuaAgVxyXG5cdCAqL1xyXG5cdF9jaGFuZ2VCdXR0b25zU3RhdHVzKCkge1xyXG5cdFx0Y29uc3QgeyBjdXJyZW50U3RlcCwgdG90YWxTdGVwcywgb3B0aW9ucyB9ID0gdGhpcztcclxuXHRcdGNvbnN0IGJ1dHRvbnMgPSB1dGlscy5xdWVyeVNlbGVjdG9yKHRoaXMudG9vbHRpcFJlZmVyZW5jZUxheWVyLCAnLmludHJvLWJ1dHRvbicpO1xyXG5cdFx0aWYgKGJ1dHRvbnMubGVuZ3RoICE9PSAzKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignYnV0dG9ucyBudW0gaXMgd3JvbmchJyk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBbc2tpcEJ0biwgcHJlQnRuLCBuZXh0QnRuXSA9IGJ1dHRvbnM7XHJcblxyXG5cdFx0dXRpbHMucmVtb3ZlQ2xhc3MocHJlQnRuLCAnaW50cm8tZGlzYWJsZWQnKTtcclxuXHRcdHV0aWxzLnJlbW92ZUF0dHJpYnV0ZShwcmVCdG4sICdkaXNhYmxlZCcpO1xyXG5cdFx0dXRpbHMucmVtb3ZlQ2xhc3MobmV4dEJ0biwgJ2ludHJvLWRpc2FibGVkJyk7XHJcblx0XHR1dGlscy5yZW1vdmVBdHRyaWJ1dGUobmV4dEJ0biwgJ2Rpc2FibGVkJyk7XHJcblx0XHRpZiAoY3VycmVudFN0ZXAgPT09IDApIHtcclxuXHRcdFx0Ly8gZmlyc3Qgc3RlcFxyXG5cdFx0XHRwcmVCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHR1dGlscy5hZGRDbGFzcyhwcmVCdG4sICdpbnRyby1kaXNhYmxlZCcpO1xyXG5cdFx0fSBlbHNlIGlmIChjdXJyZW50U3RlcCA9PT0gKHRvdGFsU3RlcHMgLSAxKSkge1xyXG5cdFx0XHQvLyBsYXN0IHN0ZXBcclxuXHRcdFx0bmV4dEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdHV0aWxzLmFkZENsYXNzKG5leHRCdG4sICdpbnRyby1kaXNhYmxlZCcpO1xyXG5cdFx0XHRza2lwQnRuLmlubmVyVGV4dCA9IG9wdGlvbnMuZmluaXNoTGFiZWw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDmiafooYzkuIDmraVcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gaWQgMCBjdXJyZW50U3RlcOS4jeWKqO+8jDEgY3VycmVudFN0ZXDliqAxLCAtMSBjdXJyZW50U3RlcOWHjzFcclxuXHQgKi9cclxuXHRfc3RlcChpZCkge1xyXG5cdFx0c3dpdGNoIChpZCkge1xyXG5cdFx0Y2FzZSAwOlxyXG5cdFx0XHR0aGlzLmxhc3RTdGVwID0gdGhpcy5jdXJyZW50U3RlcDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDE6XHJcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRTdGVwIDwgKHRoaXMudG90YWxTdGVwcyAtIDEpKSB7XHJcblx0XHRcdFx0dGhpcy5sYXN0U3RlcCA9IHRoaXMuY3VycmVudFN0ZXA7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50U3RlcCsrO1xyXG5cdFx0XHRcdHRoaXMuX2hpZGVUb29sdGlwTGF5ZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgLTE6XHJcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRTdGVwID4gMCkge1xyXG5cdFx0XHRcdHRoaXMubGFzdFN0ZXAgPSB0aGlzLmN1cnJlbnRTdGVwO1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudFN0ZXAtLTtcclxuXHRcdFx0XHR0aGlzLl9oaWRlVG9vbHRpcExheWVyKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHR1dGlscy5kZWxheSgoKSA9PiB7XHJcblx0XHRcdHRoaXMuX3NldE1haW5MYXllclBvc2l0b24oKTtcclxuXHRcdFx0dGhpcy5fdG9nZ2xlU2hvd0VsZW0oKTtcclxuXHRcdFx0dGhpcy5fc2V0VG9vbHRpcExheWVyUG9zaXRpb24oKTtcclxuXHRcdFx0dGhpcy5fc2V0VG9vbHRpcExheWVyQ29udGVudCgpO1xyXG5cdFx0XHR0aGlzLl9jaGFuZ2VCdWxsZXRzU3RhdHVzKCk7XHJcblx0XHRcdHRoaXMuX2NoYW5nZUJ1dHRvbnNTdGF0dXMoKTtcclxuXHRcdFx0dGhpcy5fc2hvd1Rvb2x0aXBMYXllcigzMDApO1xyXG5cdFx0fSwgMTAwKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOWujOaIkFxyXG5cdCAqIOmcgOimgeWBmuS4gOS6m+WGheWtmOWbnuaUtuetieeahOWkhOeQhlxyXG5cdCAqL1xyXG5cdF9kb25lKCkge1xyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRpbnRyb0l0ZW1zLCBjdXJyZW50U3RlcCwgb3ZlcmxheSwgaGVscGVyTGF5ZXIsIHRvb2x0aXBSZWZlcmVuY2VMYXllclxyXG5cdFx0fSA9IHRoaXM7XHJcblxyXG5cdFx0Ly8gcmVjb3ZlcnlcclxuXHRcdHV0aWxzLnJlbW92ZUNsYXNzKGludHJvSXRlbXNbY3VycmVudFN0ZXBdLmVsZW0sICdpbnRyby1zaG93RWxlbWVudCcpO1xyXG5cclxuXHRcdC8vIGhpZGVcclxuXHRcdHV0aWxzLnJlbW92ZUNsYXNzKG92ZXJsYXksICdzaG93Jyk7XHJcblx0XHR0aGlzLl9oaWRlVG9vbHRpcExheWVyKCk7XHJcblxyXG5cdFx0Ly8gZGVzdG9yeSBlbGVtZW50XHJcblx0XHRvdmVybGF5LnJlbW92ZSgpO1xyXG5cdFx0aGVscGVyTGF5ZXIucmVtb3ZlKCk7XHJcblx0XHR0b29sdGlwUmVmZXJlbmNlTGF5ZXIucmVtb3ZlKCk7XHJcblxyXG5cdFx0Ly8gZGVzdG9yeVxyXG5cdFx0dGhpcy5pbml0SW50cm9FbGVtID0gZmFsc2U7XHJcblx0XHR0aGlzLmN1cnJlbnRTdGVwID0gMDtcclxuXHRcdHRoaXMudG90YWxTdGVwcyA9IDA7XHJcblx0XHR0aGlzLmludHJvSXRlbXMgPSBbXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNYSW50cm87XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxyXG4vKipcclxuICog5bel5YW35bqTXHJcbiAqIGNyZWF0ZSBvbiAyMDE4LzUvMyBieSBsaXhpYW5nXHJcbiAqL1xyXG5cclxuXHJcbmNvbnN0IEJhc2VUeXBlID0ge1xyXG5cdFN0cmluZzogJ3N0cmluZycsXHJcblx0T2JqZWN0OiAnb2JqZWN0JyxcclxuXHRGdW5jdGlvbjogJ2Z1bmN0aW9uJyxcclxuXHRCb29sZWFuOiAnYm9vbGVhbicsXHJcblx0QXJyYXk6ICdhcnJheScsXHJcblx0UmVnRXhwOiAncmVnZXhwJyxcclxuXHROdW1iZXI6ICdudW1iZXInXHJcbn07XHJcblxyXG4vKipcclxuICog6L+U5Zue5a+56LGh57G75Z6L77yM5bCP5YaZ5a2X56ym5LiyXHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVja1R5cGUob2JqKSB7XHJcblx0Y29uc3Qgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XHJcblx0cmV0dXJuIHN0ci5zbGljZSg4LCBzdHIubGVuZ3RoIC0gMSkudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuLyoqXHJcbiog5rex5ou36LSdXHJcbiovXHJcbmZ1bmN0aW9uIGRlZXBDbG9uZShzb3VyY2UpIHtcclxuXHRsZXQgY29weTtcclxuXHRpZiAoc291cmNlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZXMgIT09ICdvYmplY3QnKSB7XHJcblx0XHRyZXR1cm4gc291cmNlO1xyXG5cdH1cclxuXHJcblx0aWYgKHNvdXJjZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuXHRcdGNvcHkgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0Y29weS5zZXRUaW1lKHNvdXJjZS5nZXRUaW1lKCkpO1xyXG5cdH1cclxuXHJcblx0aWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRjb3B5ID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMCwgaWwgPSBzb3VyY2UubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xyXG5cdFx0XHRjb3B5W2ldID0gZGVlcENsb25lKHNvdXJjZVtpXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoc291cmNlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRjb3B5ID0ge307XHJcblx0XHRjb25zdCBhcnIgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xyXG5cdFx0YXJyLmZvckVhY2goKGtleSkgPT4ge1xyXG5cdFx0XHRjb3B5W2tleV0gPSBkZWVwQ2xvbmUoc291cmNlW2tleV0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJldHVybiBjb3B5O1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5LiA5Liq5a+56LGh5piv5ZCm5piv5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBvYmpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcclxuXHRyZXR1cm4gY2hlY2tUeXBlKG9iaikgPT09IEJhc2VUeXBlLlN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiog5Yik5pat5LiA5Liq5a+56LGh5piv5ZCm5piv5pWw5a2XXHJcbiogQHBhcmFtIG9ialxyXG4qIEByZXR1cm5zIHtib29sZWFufVxyXG4qL1xyXG5mdW5jdGlvbiBpc051bWJlcihvYmopIHtcclxuXHRyZXR1cm4gY2hlY2tUeXBlKG9iaikgPT09IEJhc2VUeXBlLk51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiog5Yik5pat5LiA5Liq5a+56LGh5piv5ZCm5piv5Liq57qv5a+56LGhXHJcbiogQHBhcmFtIG9ialxyXG4qIEByZXR1cm5zIHtib29sZWFufVxyXG4qL1xyXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcclxuXHRyZXR1cm4gY2hlY2tUeXBlKG9iaikgPT09IEJhc2VUeXBlLk9iamVjdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreWvueixoeaYr+WQpuS4unVuZGVmaW5lZFxyXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcclxuXHRyZXR1cm4gb2JqID09PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3lr7nosaHmmK/lkKbkuLrmlbDnu4RcclxuICogQHBhcmFtIHtvYmplY3R9IG9ialxyXG4gKi9cclxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcclxuXHRyZXR1cm4gY2hlY2tUeXBlKG9iaikgPT09IEJhc2VUeXBlLkFycmF5O1xyXG59XHJcblxyXG4vKipcclxuICog5qC55o2uaWTojrflj5ZEb23lhYPntKBcclxuICogQHBhcmFtIHtzdHJpbmd9IGlkXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRFbGVCeUlkKGlkKSB7XHJcblx0bGV0IGVsZTtcclxuXHRpZiAoY2hlY2tUeXBlKGlkKSA9PT0gQmFzZVR5cGUuU3RyaW5nKSB7XHJcblx0XHRlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGVsZSA9IG51bGw7XHJcblx0fVxyXG5cdHJldHVybiBlbGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5blhYPntKBcclxuICogQHBhcmFtIHtET019IGJhc2VFbGVtZW50XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvcnNcclxuICogQHBhcmFtIHtCb29sZW59XHJcbiAqL1xyXG5mdW5jdGlvbiBxdWVyeVNlbGVjdG9yKGJhc2VFbGVtZW50LCBzZWxlY3RvcnMsIHNpbmdsZSkge1xyXG5cdGNvbnN0IGVsZW0gPSBiYXNlRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5O1xyXG5cdGlmICghaXNTdHJpbmcoc2VsZWN0b3JzKSB8fCAhZWxlbS5xdWVyeVNlbGVjdG9yQWxsKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ3F1ZXJ5U2VsZWN0b3IgZXJyJyk7XHJcblx0fVxyXG5cdHJldHVybiBzaW5nbGUgPyBlbGVtLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzKSA6IGVsZW0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMpO1xyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5YWD57Sg55qE5bGe5oCn5YC8XHJcbiAqIEBwYXJhbSB7RE9NfSBlbGVtIERvbeWFg+e0oFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gYXR0clxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsZW0sIGF0dHIpIHtcclxuXHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoYXR0cik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5blhYPntKDnmoTlnZDmoIdcclxuICogQHBhcmFtIHtET019IGVsZW1lbnRcclxuICovXHJcbmZ1bmN0aW9uIGdldE9mZnNldChlbGVtKSB7XHJcblx0Y29uc3QgeyBib2R5IH0gPSBkb2N1bWVudDtcclxuXHRjb25zdCBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHRjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xyXG5cdGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xyXG5cdGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdHJldHVybiB7XHJcblx0XHR0b3A6IHJlY3QudG9wICsgc2Nyb2xsVG9wLFxyXG5cdFx0bGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCxcclxuXHRcdHdpZHRoOiByZWN0LndpZHRoLFxyXG5cdFx0aGVpZ2h0OiByZWN0LmhlaWdodCxcclxuXHRcdHJpZ2h0OiByZWN0LnJpZ2h0LFxyXG5cdFx0Ym90dG9tOiByZWN0LmxlZnRcclxuXHR9O1xyXG59XHJcblxyXG4vKipcclxuICog5Li6RG9t5YWD57Sg5aKe5YqgQ2xhc3NcclxuICovXHJcbmZ1bmN0aW9uIGFkZENsYXNzKC4uLmFyZ3MpIHtcclxuXHRpZiAoYXJncy5sZW5ndGggPCAyKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGNvbnN0IGVsZW0gPSBhcmdzWzBdO1xyXG5cdGxldCBjdXJyZW50S2xhc3MgPSBlbGVtLmNsYXNzTmFtZTtcclxuXHRsZXQga2xhc3M7XHJcblx0bGV0IGtsc1JlZztcclxuXHRmb3IgKGxldCBpID0gMSwgaWwgPSBhcmdzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcclxuXHRcdGtsYXNzID0gYXJnc1tpXTtcclxuXHRcdGtsc1JlZyA9IG5ldyBSZWdFeHAoa2xhc3MsICdpZycpO1xyXG5cdFx0aWYgKCFrbHNSZWcudGVzdChjdXJyZW50S2xhc3MpKSB7XHJcblx0XHRcdGN1cnJlbnRLbGFzcyArPSBgICR7a2xhc3N9YDtcclxuXHRcdH1cclxuXHR9XHJcblx0Y3VycmVudEtsYXNzLnJlcGxhY2UoJ3RvcCcsICcgJyk7IC8vIOWOu+mZpOS4remXtOeahOWkmuS6juepuuagvFxyXG5cdGVsZW0uY2xhc3NOYW1lID0gY3VycmVudEtsYXNzO1xyXG59XHJcblxyXG4vKipcclxuICog5Li6RG9t5YWD57Sg5Yig6ZmkQ2xhc3NcclxuICovXHJcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKC4uLmFyZ3MpIHtcclxuXHRpZiAoYXJncy5sZW5ndGggPCAyKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGNvbnN0IGVsZW0gPSBhcmdzWzBdO1xyXG5cdGxldCBjdXJyZW50S2xhc3MgPSBlbGVtLmNsYXNzTmFtZTtcclxuXHRsZXQga2xhc3M7XHJcblx0bGV0IGtsc1JlZztcclxuXHRmb3IgKGxldCBpID0gMSwgaWwgPSBhcmdzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcclxuXHRcdGtsYXNzID0gYXJnc1tpXTtcclxuXHRcdGtsc1JlZyA9IG5ldyBSZWdFeHAoYFxcXFxzKyR7a2xhc3N9YCwgJ2lnJyk7XHJcblx0XHRpZiAoa2xzUmVnLnRlc3QoY3VycmVudEtsYXNzKSkge1xyXG5cdFx0XHRjdXJyZW50S2xhc3MgPSBjdXJyZW50S2xhc3MucmVwbGFjZShrbHNSZWcsICcnKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxlbS5jbGFzc05hbWUgPSBjdXJyZW50S2xhc3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkJHlhYPntKDkuK3ov73liqDlrZDlhYPntKBcclxuICogQHBhcmFtIHtET019IHBhcmVudCDniLblhYPntKBcclxuICogQHBhcmFtIHtET019IGNoaWxkIOWtkOWFg+e0oFxyXG4gKi9cclxuZnVuY3Rpb24gYXBwZW5kQ2hpbGQoLi4uYXJncykge1xyXG5cdGNvbnN0IHBhcmVudCA9IGFyZ3NbMF07XHJcblx0aWYgKGFyZ3MubGVuZ3RoIDwgMikge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRmb3IgKGxldCBpID0gMSwgaWwgPSBhcmdzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcclxuXHRcdHBhcmVudC5hcHBlbmRDaGlsZChhcmdzW2ldKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlu7bml7bmiafooYzlh73mlbBcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4g5Ye95pWwXHJcbiAqIEBwYXJhbSB75bu26L+f5pe26Ze0fSB0aW1lXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWxheShmbiwgdGltZSkge1xyXG5cdHdpbmRvdy5zZXRUaW1lb3V0KGZuLCB0aW1lKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOS4ukRvbeWFg+e0oOWinuWKoOWxnuaAp1xyXG4gKiBAcGFyYW0ge+WPguaVsH0gYXJnc1xyXG4gKi9cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKC4uLmFyZ3MpIHtcclxuXHRpZiAoYXJncy5sZW5ndGggPCAzKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGNvbnN0IGVsZW0gPSBhcmdzWzBdO1xyXG5cdGNvbnN0IGF0dHIgPSBhcmdzWzFdO1xyXG5cdGNvbnN0IHZhbHVlID0gYXJnc1syXTtcclxuXHRlbGVtLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkuLpEb23lhYPntKDliKDpmaTlsZ7mgKdcclxuICogQHBhcmFtIHvlj4LmlbB9IGFyZ3NcclxuICovXHJcbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZSguLi5hcmdzKSB7XHJcblx0aWYgKGFyZ3MubGVuZ3RoIDwgMikge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRjb25zdCBlbGVtID0gYXJnc1swXTtcclxuXHRlbGVtLnJlbW92ZUF0dHJpYnV0ZShhcmdzWzFdKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluWFg+e0oOeahGNzc+WxnuaAp1xyXG4gKiBAcGFyYW0ge0RvbWFpbn0gZWxlbSBEb23lhYPntKBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3Ag5bGe5oCn5a2X56ym5LiyIOWmgiAncG9zaXRpb24nXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRDU1NQcm9wKGVsZW0sIHByb3ApIHtcclxuXHRyZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOino+aekGRvbeS4rWRhdGEtc3RlcOaVsOaNrlxyXG4gKiBAcGFyYW0ge0RvbWFpbn0gZG9tIGRvbeWFg+e0oFxyXG4gKi9cclxuZnVuY3Rpb24gcGFyc2VEYXRhU3RlcChkb20pIHtcclxuXHRjb25zdCBkYXRhU3RlcCA9IGdldEF0dHJpYnV0ZShkb20sICdkYXRhLXN0ZXAnKTtcclxuXHRjb25zdCBhcnIgPSBkYXRhU3RlcC5zcGxpdCgnLScpO1xyXG5cdHJldHVybiBhcnIubWFwKGl0ZW0gPT4gcGFyc2VJbnQoaXRlbSwgMTApKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRlZXBDbG9uZSxcclxuXHRnZXRFbGVCeUlkLFxyXG5cdGlzTnVtYmVyLFxyXG5cdGlzT2JqZWN0LFxyXG5cdGlzU3RyaW5nLFxyXG5cdGlzVW5kZWZpbmVkLFxyXG5cdGlzQXJyYXksXHJcblx0cXVlcnlTZWxlY3RvcixcclxuXHRnZXRBdHRyaWJ1dGUsXHJcblx0Z2V0T2Zmc2V0LFxyXG5cdGFkZENsYXNzLFxyXG5cdHJlbW92ZUNsYXNzLFxyXG5cdGFwcGVuZENoaWxkLFxyXG5cdGRlbGF5LFxyXG5cdHNldEF0dHJpYnV0ZSxcclxuXHRyZW1vdmVBdHRyaWJ1dGUsXHJcblx0Z2V0Q1NTUHJvcCxcclxuXHRwYXJzZURhdGFTdGVwXHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9