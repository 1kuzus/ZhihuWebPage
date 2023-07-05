# ZhihuWebPage
`Task2-仿知乎web页面`

>2022-9-28 update  

准备素材~  
<br>

>2022-9-30 update  

做了首页的静态页面  
<br>

>2022-10-03 update  

学了一点js事件，实现了一下点击头像的下拉菜单效果  
<br>

>2022-10-05 update  

做了登录注册界面，学了一些API，实现了密码/验证码登录tab栏切换  
用js实现了一下显示/隐藏密码  
由于登录注册界面用了定位，主盒子居中，footer靠底，缩放的时候会叠在一起。改了好久但没debug成功，于是在js里判断`windows.devicePixelRatio`，如果大于一定比例自动隐藏footer，也算是一种不高明的解决办法  
<br>

>2022-10-6 update  

做了会员界面，实现了轮播图效果  
有学到一些小技巧：  
1.做圆形盒子可以把宽高设为一样长，然后`border-radius: 50%;`  
2.可以通过`input::-webkit-input-placeholder`设置占位符的样式  
3.有定位的盒子水平居中，在`left: 50%;`后可以用`transform: translateX(-50%);`来调整位置，比把`margin-left`设为负半宽度更灵活些  
<br>

>2022-10-7 update  

实现了首页tab栏滚动效果  
做了点击收藏按钮的效果  
优化了一些细节  

关于轮播图的优化尝试了好久，提交前终于实现了~  
主要的更新有两点：  

1.之前focus区域、图片的大小都是固定的`width: 1920px;`，虽然缩放时布局很稳定，但弊端是在低分辨率显示器上就没办法在浏览器可视窗口内完整显示(下方会出现滚动条)；或浏览器窗口不是全屏时，只要宽度小于1920px都不能完整显示。不过看知乎的官网上的轮播图是有一定弹性范围的，在1280px-1920px范围内都可以完整显示；于是决定采用百分比宽度，给背景色块(background盒子)和tab栏阴影都设置`min-width: 1280px;`，这样窗口缩小至宽度小于1280px时才会溢出窗口、出现下方滚动条；并给focus区设置`max-width: 1920px;`，这样缩小页面的时候也不会一直匹配屏幕宽度；但这时候高度属性不太好确定，又希望保持与图片一致的`1920:500`的宽高比，于是在js中由`resize`事件触发修改操作`focus.style.height=focus.offsetWidth*500/1920+'px'`(类似的，同时也会修改background盒子的高度)，从而保持页面比例。  

2.之前切换图片的悬浮按钮和会员信息板都是浮动后以`left`或`right`为基准定位的，现在改为以中心为基准，左右偏移固定像素值定位，这样不受父盒子宽度变化的影响，页面元素缩放时可以保持一致位置比例。  
<br>

>还没来得及做的...  

热榜部分拖动调整顺序  
写文章页面  

<br>

>部分效果

![image](https://github.com/1kuzus/ZhihuWebPage/blob/main/img/1.gif)

<br>

![image](https://github.com/1kuzus/ZhihuWebPage/blob/main/img/2.gif)

<br>

**1kuzus**
