
/**
 * 工具库
 * create on 2018/5/3 by lixiang
 */


const BaseType = {
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
	const str = Object.prototype.toString.call(obj);
	return str.slice(8, str.length - 1).toLowerCase();
}

/**
* 深拷贝
*/
function deepClone(source) {
	let copy;
	if (source === null || typeof values !== 'object') {
		return source;
	}

	if (source instanceof Date) {
		copy = new Date();
		copy.setTime(source.getTime());
	}

	if (source instanceof Array) {
		copy = [];
		for (let i = 0, il = source.length; i < il; ++i) {
			copy[i] = deepClone(source[i]);
		}
	}

	if (source instanceof Object) {
		copy = {};
		const arr = Object.keys(source);
		arr.forEach((key) => {
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
	let ele;
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
	const elem = baseElement || document.body;
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
	const { body } = document;
	const docEl = document.documentElement;
	const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
	const scrollLeft = window.pageXOffset || docEl.scrollTop || body.scrollTop;
	const rect = elem.getBoundingClientRect();
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
function addClass(...args) {
	if (args.length < 2) {
		return;
	}
	const elem = args[0];
	let currentKlass = elem.className;
	let klass;
	let klsReg;
	for (let i = 1, il = args.length; i < il; i++) {
		klass = args[i];
		klsReg = new RegExp(klass, 'ig');
		if (!klsReg.test(currentKlass)) {
			currentKlass += ` ${klass}`;
		}
	}
	currentKlass.replace('top', ' '); // 去除中间的多于空格
	elem.className = currentKlass;
}

/**
 * 为Dom元素删除Class
 */
function removeClass(...args) {
	if (args.length < 2) {
		return;
	}
	const elem = args[0];
	let currentKlass = elem.className;
	let klass;
	let klsReg;
	for (let i = 1, il = args.length; i < il; i++) {
		klass = args[i];
		klsReg = new RegExp(`\\s+${klass}`, 'ig');
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
function appendChild(...args) {
	const parent = args[0];
	if (args.length < 2) {
		return;
	}
	for (let i = 1, il = args.length; i < il; i++) {
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
function setAttribute(...args) {
	if (args.length < 3) {
		return;
	}
	const elem = args[0];
	const attr = args[1];
	const value = args[2];
	elem.setAttribute(attr, value);
}

/**
 * 为Dom元素删除属性
 * @param {参数} args
 */
function removeAttribute(...args) {
	if (args.length < 2) {
		return;
	}
	const elem = args[0];
	elem.removeAttribute(args[1]);
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
	const dataStep = getAttribute(dom, 'data-step');
	const arr = dataStep.split('-');
	return arr.map(item => parseInt(item, 10));
}

export default {
	deepClone,
	getEleById,
	isNumber,
	isObject,
	isString,
	isUndefined,
	isArray,
	querySelector,
	getAttribute,
	getOffset,
	addClass,
	removeClass,
	appendChild,
	delay,
	setAttribute,
	removeAttribute,
	getCSSProp,
	parseDataStep
};

