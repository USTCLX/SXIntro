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
			tooltipPosition: 'bottom',
			overlayOpacity: 0.8,
			helperElementPadding: 10
		};
		this.intros = [];
		this.initIntroElem = false;
		this.currentStep = 0;

		this.helperLayer = null;
		this.tooltipReferenceLayer = null;

		// 设置根元素
		this._getTargetElem(id);

		// 设置需要导航的元素
		this._getIntroItems('*[data-step]');

		// 监听窗口事件
		// this._linstenEvent();

		return this;
	}

	/**
   * 设置说明
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
			// 创建元素
			this._createIntroElem();
		} else {
			console.log('aha');
		}

		// 提高被引导元素的z-index
		this._toggleShowElem();
		this._setMainLayerPositon();
		this._setTooltipLayerPosition();
		this._setTooltipLayerContent();
		this._showTooltipLayer(300);
		const self = this;
		utils.delay(() => {
			self.currentStep++;
			self._hideTooltipLayer();
			self._toggleShowElem();
			self._setMainLayerPositon();
			self._setTooltipLayerPosition();
			self._setTooltipLayerContent();
			self._showTooltipLayer(300);
		}, 1000);

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

		// 创建元素
		const overlay = document.createElement('div');
		const helperLayer = document.createElement('div');
		const tooltipReferenceLayer = document.createElement('div');
		const tooltipLayer = document.createElement('div');
		const arrowLayer = document.createElement('div');
		const textLayer = document.createElement('div');
		// const bulletLayer = document.createElement('div');


		// 给元素增加class
		utils.addClass(overlay, 'intro-overlay');
		utils.addClass(helperLayer, 'intro-helperLayer');
		utils.addClass(tooltipReferenceLayer, 'intro-tooltipReferece');
		utils.addClass(tooltipLayer, 'intro-tooltip');
		utils.addClass(arrowLayer, 'intro-arrow');
		utils.addClass(textLayer, 'intro-tooltipText');

		// 内部元素的组合
		utils.appendChild(tooltipLayer, arrowLayer);
		utils.appendChild(tooltipLayer, textLayer);
		utils.appendChild(tooltipReferenceLayer, tooltipLayer);

		// 设置属性
		overlay.style.opacity = options.overlayOpacity;


		// 追加元素到document中
		utils.appendChild(targetElement, overlay);
		utils.appendChild(targetElement, helperLayer);
		utils.appendChild(targetElement, tooltipReferenceLayer);

		this.helperLayer = helperLayer;
		this.tooltipReferenceLayer = tooltipReferenceLayer;
	}

	/**
	 * 设置helper和tooltipReferenceLayer的位置
	 */
	_setMainLayerPositon() {
		const {
			introItems, options, helperLayer, tooltipReferenceLayer
		} = this;
		const currentElem = introItems[this.currentStep].elem;
		const elemPostition = utils.getOffset(currentElem);

		helperLayer.style.left = `${elemPostition.left - (options.helperElementPadding / 2)}px`;
		helperLayer.style.top = `${elemPostition.top - (options.helperElementPadding / 2)}px`;
		helperLayer.style.width = `${elemPostition.width + options.helperElementPadding}px`;
		helperLayer.style.height = `${elemPostition.height + options.helperElementPadding}px`;

		tooltipReferenceLayer.style.left = `${elemPostition.left - (options.helperElementPadding / 2)}px`;
		tooltipReferenceLayer.style.top = `${elemPostition.top - (options.helperElementPadding / 2)}px`;
		tooltipReferenceLayer.style.width = `${elemPostition.width + options.helperElementPadding}px`;
		tooltipReferenceLayer.style.height = `${elemPostition.height + options.helperElementPadding}px`;
	}

	/**
	 * 设置tooltip的位置
	 * @param {Dom} tooltipLayer
	 */
	_setTooltipLayerPosition() {
		const { options, tooltipReferenceLayer, introItems } = this;
		const { tooltipPosition } = options;
		const currentElem = introItems[this.currentStep].elem;
		const elemPostition = utils.getOffset(currentElem);

		const tooltipLayer = utils.querySelector(tooltipReferenceLayer, '.intro-tooltip', true);
		const arrowLayer = utils.querySelector(tooltipLayer, '.intro-arrow', true);

		let left;
		let top;
		const offset = 10;

		switch (tooltipPosition) {
		case 'bottom':
			left = '0px';
			top = `${elemPostition.height + options.helperElementPadding + offset}px`;
			utils.addClass(arrowLayer, 'top');
			break;
		case 'top':
			break;
		case 'left':
			break;
		case 'right':
			break;
		default:
			left = '0px';
			top = `${elemPostition.height + options.helperElementPadding + offset}px`;
			break;
		}

		tooltipLayer.style.left = left;
		tooltipLayer.style.top = top;
	}

	/**
	 * 设置tooltip中的内容，包括当前文字，当前指示灯等
	 */
	_setTooltipLayerContent() {
		const { tooltipReferenceLayer, intros } = this;
		const textLayer = utils.querySelector(tooltipReferenceLayer, '.intro-tooltipText', true);
		const currentText = intros[this.currentStep + 1];

		console.log('textLayer', textLayer);
		textLayer.innerText = String(currentText);
	}

	/**
	 * 展现tooltipLayer 并可以延时执行
	 * @param {Number} delay 延时执行时间
	 */
	_showTooltipLayer(delay) {
		const { tooltipReferenceLayer } = this;
		const tooltipLayer = utils.querySelector(tooltipReferenceLayer, '.intro-tooltip', true);

		if (delay && utils.isNumber(delay) && delay > 0) {
			utils.delay(() => {
				utils.addClass(tooltipLayer, 'show');
			}, delay);
		} else {
			utils.addClass(tooltipLayer, 'show');
		}
	}

	/**
	 * 隐藏tooltipLayer 并可以延时执行
	 * @param {Number} delay 延时执行时间
	 */
	_hideTooltipLayer(delay) {
		const { tooltipReferenceLayer } = this;
		const tooltipLayer = utils.querySelector(tooltipReferenceLayer, '.intro-tooltip', true);

		if (delay && utils.isNumber(delay) && delay > 0) {
			utils.delay(() => {
				utils.removeClass(tooltipLayer, 'show');
			}, delay);
		} else {
			utils.removeClass(tooltipLayer, 'show');
		}
	}


	/**
	 * 转换元素的显示状态，即是否需要改变引导元素的z-index
	 */
	_toggleShowElem() {
		const { introItems, currentStep } = this;
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
