# SXIntro
## 特点
1、体积小，只有24kb


## 使用方式
在需要使用引导的标签中加入data-step属性值，值为1、2、3、4、5，代表引导的第几步。在js中调用SXIntro()构造函数，并设置引导配置。即可使用。

```
 const intro = new SXIntro().setIntro([
 {
  tooltip:'第一步',
  position:'bottom'
 },{
  tooltip:'第二步',
  position:'right'
 }
 ])
 .start()
```
