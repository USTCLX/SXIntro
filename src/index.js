
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

    if (utils.isUndefined(id)) {
      this.targetElement = document.body;
    } else if (utils.isString(id)) {
      this.targetElement = utils.getEleById(id);
    }

    return this;
  }

  setIntro(intros) {
    if (utils.isArray(intros)) {
      this.intros = intros;
    }
  }
}

export default SXIntro;
