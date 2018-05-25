# SXIntro
## 特点
1、体积小，只有24kb
2、不依赖其他库
3、使用也很简单，没有过多的配置项


## 使用方式
在需要使用引导的标签中加入data-step属性值，值为1、2、3、4、5，代表引导的第几步。在js中调用SXIntro()构造函数，并设置引导配置。即可使用。一个DEMO如下
### html

```
<body>
	<div data-step="1">
		<h1>Welcome</h1>
	</div>
	<div data-step="2">
		<p>
			这是一个段落，导航将跳往这里
		</p>
	</div>

	<div data-step="4-7" style="display: inline-block;width:200px">
		<p>这是第四步</p>
	</div>

	<div data-step="5" style="float: right;width: 200px">
		<p>这是第五步</p>
	</div>
	<div data-step="6">
		<p>这是第六步</p>
	</div>
	<div data-step="3" style="position: fixed;bottom:0px">
		<p>这是一个新的段落，使用了fixed定位</p>
	</div>
</body>
```

### js
```
const intro = new SXIntro()
  .setIntro([
    {
      index: 1,
      tooltip: '你好',
      position: 'bottom'
    }, {
      index: 2,
      tooltip: '这是一段导航',
      position: 'bottom'
    }, {
      index: 3,
      tooltip: '这是fix元素',
      position: 'top'
    }, {
      index: 4,
      tooltip: '右边显示',
      position: 'right'
    }, {
      index: 5,
      tooltip: '左边显示',
      position: 'left'
    }, {
      index: 6,
      tooltip: '上边显示',
      position: 'top'
    }, {
      index: 7,
      tooltip: '哈哈，第七步，回到第四步的位置',
      position: 'right'
    }
  ])
  .start();
```

## API

### SXIntro（id,options） 构造函数

| 名称   |      类型      |  默认值 | 描述 |
|----------|:-------------|------:|:------|
| id |  string |  |  id元素选择符 |
| options.flag |    string   |   'data-step' | 标识符，可以自定义 |





## Demo
https://ustclx.github.io/SXIntro/demo/demo.html
