/**
 * created by lixiang in 2017/5/2
 * SXInro 主类
 */

import utils from './utils';

class SXIntro {
	constructor(id) {
		this.targetElement = null;
		this.introItems = [];
		this.options = {
			nextLabel: '下一步 &rarr;',
			prevLabel: '上一步 &larr;',
			skipLabel: '跳过',
			donwLabel: '完成',
			tooltipPositio: 'bottom',
			overlayOpacity: 0.8
		};
		this.intros = [];

		this._getTargetElem(id);

		this._getIntroItems('*[data-step]');

		return this;
	}

	/**
   *  设置说明
   * 数组格式，数组中的次序即代表第几步的引导说明。
   * @param {arry} intros {1:'第一步：这里是XXX'，2:'第二步:这里是XXX'}
   */
	setIntro(intros) {
		if (utils.isObject(intros)) {
			this.intros = intros;
		} else {
			throw new Error('params must be a object');
		}
		const self = this;
		this.introItems.forEach((item, index) => {
			item.intro = self.intros[index + 1];
		});

		return this;
	}

	/**
   * 开始启动引导
   */
	start() {
		console.log(this);
		return this;
	}


	/**
   * 获取targetElem
   * @param {string} id
   */
	_getTargetElem(id) {
		if (utils.isUndefined(id)) {
			this.targetElement = document.body;
		} else if (utils.isString(id)) {
			this.targetElement = utils.getEleById(id);
		}
	}

	/**
	 * 获取需要引导的元素集合
	 * @param {String} selector
	 */
	_getIntroItems(selector) {
		const tempIntroItems = utils.querySelector(this.targetElement, selector);
		let step = 0;
		this.introItems = [];
		for (let i = 0, il = tempIntroItems.length; i < il; i++) {
			step = parseInt(utils.getAttribute(tempIntroItems[i], 'data-step'), 10);
			this.introItems.push({
				elem: tempIntroItems[i],
				intro: '',
				step
			});
		}
		this.introItems.sort((a, b) => a.step - b.step);
	}
}

export default SXIntro;
