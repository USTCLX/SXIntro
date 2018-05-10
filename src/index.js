/**
 * created by lixiang in 2017/5/2
 * SXInro 主类
 */

import utils from './utils';
import './style.css';

class SXIntro {
	constructor(id) {
		this.id = id;
		this.targetElement = null;
		this.introItems = [];
		this.options = {
			nextLabel: '下一步',
			prevLabel: '上一步',
			skipLabel: '跳过',
			finishLabel: '完成',
			tooltipPosition: 'bottom',
			overlayOpacity: 0.8,
			helperElementPadding: 10
		};
		this.intros = [];
		this.initIntroElem = false;
		this.currentStep = 0;

		this.helperLayer = null;
		this.tooltipReferenceLayer = null;
		this.overlay = null;

		return this;
	}

	/**
   * 设置说明
   * 数组格式，数组中的次序即代表第几步的引导说明。
   * @param {arry} intros {1:'第一步：这里是XXX'，2:'第二步:这里是XXX'}
   */
	setIntro(intros) {
		if (utils.isArray(intros)) {
			this.intros = intros;
		} else {
			throw new Error('params must be a array');
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

		this.totalSteps = this.introItems.length;
	}

	/**
	 * 创建导航元素
	 */
	_createIntroElem() {
		const { options, targetElement, introItems} = this;
		const itemsLength = introItems.length;
		// 创建元素
		const overlay = document.createElement('div'); // 遮罩层
		const helperLayer = document.createElement('div');// 高亮层
		const tooltipReferenceLayer = document.createElement('div');// 引导定位层
		const tooltipLayer = document.createElement('div');// 引导层
		const arrowLayer = document.createElement('div');// 对话框箭头
		const textLayer = document.createElement('div');// 对话框文字
		const bulletLayer = document.createElement('div');// 子弹进度层
		const bulletUlLayer = document.createElement('ul');// ul列表
		const buttonLayer = document.createElement('div');// 按钮层
		const button1 = document.createElement('button'); // 跳过、完成按钮
		const button2 = document.createElement('button'); // 上一步按钮
		const button3 = document.createElement('button'); // 下一步按钮

		const liElems = [];
		const aElems = [];
		for (let i = 0; i < itemsLength; i++) {
			liElems[i] = document.createElement('li');
			aElems[i] = document.createElement('a');
		}


		// 设置属性
		overlay.style.opacity = options.overlayOpacity;
		button1.innerHTML = options.skipLabel;
		button2.innerHTML = options.prevLabel;
		button3.innerHTML = options.nextLabel;

		// 给元素增加class
		utils.addClass(overlay, 'intro-overlay', 'show');
		utils.addClass(helperLayer, 'intro-helperLayer');
		utils.addClass(tooltipReferenceLayer, 'intro-tooltipReferece');
		utils.addClass(tooltipLayer, 'intro-tooltip');
		utils.addClass(arrowLayer, 'intro-arrow');
		utils.addClass(textLayer, 'intro-tooltipText');
		utils.addClass(bulletLayer, 'intro-tooltipBullets');
		utils.addClass(buttonLayer, 'intro-tooltipButtons');
		utils.addClass(button1, 'intro-button');
		utils.addClass(button2, 'intro-button');
		utils.addClass(button3, 'intro-button');

		// 内部元素的组合
		for (let i = 0; i < itemsLength; i++) {
			utils.appendChild(liElems[i], aElems[i]);
			utils.appendChild(bulletUlLayer, liElems[i]);
		}
		utils.appendChild(bulletLayer, bulletUlLayer);
		utils.appendChild(buttonLayer, button1, button2, button3);
		utils.appendChild(tooltipLayer, arrowLayer, textLayer, bulletLayer, buttonLayer);
		utils.appendChild(tooltipReferenceLayer, tooltipLayer);

		// 追加元素到document中
		utils.appendChild(targetElement, overlay);
		utils.appendChild(targetElement, helperLayer);
		utils.appendChild(targetElement, tooltipReferenceLayer);

		this.helperLayer = helperLayer;
		this.tooltipReferenceLayer = tooltipReferenceLayer;
		this.overlay = overlay;
		this.initIntroElem = true;
	}

	_addEventListener() {
		const { tooltipReferenceLayer } = this;
		const buttons = utils.querySelector(tooltipReferenceLayer, '.intro-button');
		if (buttons.length !== 3) {
			return;
		}
		const [skipBtn, preBtn, nextBtn] = buttons;
		skipBtn.addEventListener('click', this._done.bind(this));
		preBtn.addEventListener('click', this._step.bind(this, -1));
		nextBtn.addEventListener('click', this._step.bind(this, 1));
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
		const elemProp = utils.getCSSProp(currentElem, 'position');
		if (elemProp === 'fixed') {
			utils.addClass(helperLayer, 'intro-fixed');
			utils.addClass(tooltipReferenceLayer, 'intro-fixed');
		} else {
			utils.removeClass(helperLayer, 'intro-fixed');
			utils.removeClass(tooltipReferenceLayer, 'intro-fixed');
		}

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
		const {
			options, tooltipReferenceLayer, introItems, currentStep, intros
		} = this;
		const currentElem = introItems[this.currentStep].elem;
		const elemPostition = utils.getOffset(currentElem);

		const tooltipLayer = utils.querySelector(tooltipReferenceLayer, '.intro-tooltip', true);
		const arrowLayer = utils.querySelector(tooltipLayer, '.intro-arrow', true);

		let left;
		let top;
		let bottom;
		let right;
		const offset = 10;
		const tooltipPosition = intros[currentStep].position;

		utils.removeClass(arrowLayer, 'bottom', 'top', 'right', 'left');

		switch (tooltipPosition) {
		case 'bottom':
			top = `${elemPostition.height + options.helperElementPadding + offset}px`;
			utils.addClass(arrowLayer, 'top');
			break;
		case 'top':
			bottom = `${elemPostition.height + options.helperElementPadding + offset}px`;
			utils.addClass(arrowLayer, 'bottom');
			break;
		case 'left':
			right = `${elemPostition.width + options.helperElementPadding + offset}px`;
			utils.addClass(arrowLayer, 'right');
			break;
		case 'right':
			left = `${elemPostition.width + options.helperElementPadding + offset}px`;
			utils.addClass(arrowLayer, 'left');
			break;
		default:
			// bottom
			top = `${elemPostition.height + options.helperElementPadding + offset}px`;
			break;
		}

		tooltipLayer.style.left = (left === undefined) ? '' : left;
		tooltipLayer.style.top = (top === undefined) ? '' : top;
		tooltipLayer.style.bottom = (bottom === undefined) ? '' : bottom;
		tooltipLayer.style.right = (right === undefined) ? '' : right;
	}

	/**
	 * 设置tooltip中的内容，包括当前文字，当前指示灯等
	 */
	_setTooltipLayerContent() {
		const { tooltipReferenceLayer, intros } = this;
		const textLayer = utils.querySelector(tooltipReferenceLayer, '.intro-tooltipText', true);
		const currentText = intros[this.currentStep].tooltip;

		textLayer.innerText = String(currentText || '');
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

	_changeBulletsStatus() {
		const {currentStep, tooltipReferenceLayer} = this;
		const aElems = utils.querySelector(tooltipReferenceLayer, 'a');
		aElems.forEach((aElem) => {
			utils.removeClass(aElem, 'active');
		});
		utils.addClass(aElems[currentStep], 'active');
	}

	/**
	 * 改变三个按钮的状态
	 */
	_changeButtonsStatus() {
		const { currentStep, totalSteps, options } = this;
		const buttons = utils.querySelector(this.tooltipReferenceLayer, '.intro-button');
		if (buttons.length !== 3) {
			throw new Error('buttons num is wrong!');
		}
		const [skipBtn, preBtn, nextBtn] = buttons;

		utils.removeClass(preBtn, 'intro-disabled');
		utils.removeAttribute(preBtn, 'disabled');
		utils.removeClass(nextBtn, 'intro-disabled');
		utils.removeAttribute(nextBtn, 'disabled');
		if (currentStep === 0) {
			// first step
			preBtn.setAttribute('disabled', 'disabled');
			utils.addClass(preBtn, 'intro-disabled');
		} else if (currentStep === (totalSteps - 1)) {
			// last step
			nextBtn.setAttribute('disabled', 'disabled');
			utils.addClass(nextBtn, 'intro-disabled');
			skipBtn.innerText = options.finishLabel;
		}
	}

	/**
	 * 执行一步
	 * @param {Number} id 0 currentStep不动，1 currentStep加1, -1 currentStep减1
	 */
	_step(id) {
		switch (id) {
		case 0:
			break;
		case 1:
			if (this.currentStep < (this.totalSteps - 1)) {
				this.currentStep++;
				this._hideTooltipLayer();
			}
			break;
		case -1:
			if (this.currentStep > 0) {
				this.currentStep--;
				this._hideTooltipLayer();
			}
			break;
		default:
			break;
		}

		utils.delay(() => {
			this._toggleShowElem();
			this._setMainLayerPositon();
			this._setTooltipLayerPosition();
			this._setTooltipLayerContent();
			this._changeBulletsStatus();
			this._changeButtonsStatus();
			this._showTooltipLayer(300);
		}, 100);
	}

	/**
	 * 完成
	 * 需要做一些内存回收等的处理
	 */
	_done() {
		const {
			introItems, currentStep, overlay, helperLayer, tooltipReferenceLayer
		} = this;

		// recovery
		utils.removeClass(introItems[currentStep].elem, 'intro-showElement');

		// hide
		utils.removeClass(overlay, 'show');
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
}

export default SXIntro;
