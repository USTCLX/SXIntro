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
			overlayOpacity: 0.8,
			helperElementPadding: 10
		};
		this.intros = [];
		this.initIntroElem = false;
		this.currentStep = 0;

		// 设置根元素
		this._getTargetElem(id);

		// 设置需要导航的元素
		this._getIntroItems('*[data-step]');

		// 监听窗口事件
		// this._linstenEvent();

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
		if (!this.initIntroElem) {
			this._createIntroElem();
		} else {
			console.log('aha');
		}
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

	/**
	 * 创建导航元素
	 */
	_createIntroElem() {
		const { options, targetElement } = this;

		const overlay = document.createElement('div');
		const helperLayer = document.createElement('div');
		// const tooltipReference = document.createElement('div');
		overlay.setAttribute('class', 'intro-overlay');
		helperLayer.setAttribute('class', 'intro-helperLayer');

		// reset layers attr
		overlay.style.opacity = options.overlayOpacity;
		this._setLayerPositon(helperLayer);

		// show intro element
		this._toggleShowElem();

		targetElement.appendChild(overlay);
		targetElement.appendChild(helperLayer);
	}

	/**
	 * 设置layer的位置
	 * @param {*} layer
	 */
	_setLayerPositon(layer) {
		const { introItems, options } = this;
		const currentElem = introItems[this.currentStep].elem;
		const elemPostition = utils.getOffset(currentElem);

		layer.style.left = `${elemPostition.left - (options.helperElementPadding / 2)}px`;
		layer.style.top = `${elemPostition.top - (options.helperElementPadding / 2)}px`;
		layer.style.width = `${elemPostition.width + options.helperElementPadding}px`;
		layer.style.height = `${elemPostition.height + options.helperElementPadding}px`;
	}

	/**
	 * 转换元素的显示状态，即是否需要改变引导元素的z-index
	 */
	_toggleShowElem() {
		const {introItems, currentStep} = this;
		const lastElem = introItems[currentStep - 1] && introItems[currentStep - 1].elem;
		const currentElem = introItems[currentStep].elem;

		if (lastElem) {
			utils.removeClass(lastElem, 'intro-showElement');
		}
		if (currentElem) {
			utils.addClass(currentElem, 'intro-showElement');
		}
	}
}

export default SXIntro;
