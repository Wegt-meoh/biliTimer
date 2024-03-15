# b站首页换一换按钮自动点击脚本

## 使用方法

### 浏览器控制台执行

1. 复制index.js的所有内容
1. 打开浏览器的开发者工具(按f12或者右键页面选择检查)
1. 在开发者工具中点击控制台(英文下为console)
1. 在控制台的命令行中粘贴然后回车执行脚本
1. 输入`addTimer()`回车执行
1. 能看到页面右上角已经出现计时器的输入框，默认值为6秒

### Arc浏览器boost

1. 复制index.js的所有内容
1. 粘贴到bilibili网站boost的js中
1. 添加一句`window.addEventListener("load", addTimer);`
1. 刷新页面
1. 能看到页面右上角已经出现计时器的输入框，默认值为6秒