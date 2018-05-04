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
 * 获取元素集合
 * @param {DOM} baseElement
 * @param {选择器} selectors
 */
function querySelector(baseElement, selectors) {
	if (!baseElement || !isString(selectors) || !baseElement.querySelectorAll) {
		throw new Error('querySelector err');
	}
	return baseElement.querySelectorAll(selectors);
}

function getAttribute(elem, attr) {
	return elem.getAttribute(attr);
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
	getAttribute
};

