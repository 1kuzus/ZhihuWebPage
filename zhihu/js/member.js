var curPicId=0//当前展示的图片
var bkg=document.querySelector('.background')//背景
var focus=document.querySelector('.focus')//轮播图
var larr=document.querySelector('.larr')//左箭头
var rarr=document.querySelector('.rarr')//右箭头
var pics=focus.querySelector('ul')
var dots=focus.querySelector('ol')
var picWidth=focus.offsetWidth
var colors=['#e7d9b5','#737fa9','#725c58','#3c5b8A','#216865','#dfccb7']

//缓动函数
//obj：移动的对象
//leftPos：要移动到的绝对左侧距离
function ease(obj,leftDes)
{
    clearInterval(obj.timer)//清除对象之前的计时器
    var move=function()
    {
        if(obj.offsetLeft===leftDes)
        {
            clearInterval(obj.timer)
        }
        else
        {
            var step=(leftDes-obj.offsetLeft)/15
            step=step>0?Math.ceil(step):Math.floor(step)
            obj.style.left=obj.offsetLeft+step+'px'
        }
    }
    obj.timer=setInterval(move,10)//设置移动动画定时器
}

//鼠标进入/离开，左右箭头显示/隐藏/
focus.onmouseenter=function()
{
    larr.style.opacity='1'
    rarr.style.opacity='1'
    clearInterval(autoPlayTimer)
    autoPlayTimer=null
}
focus.onmouseleave=function()
{
    larr.style.opacity='0'
    rarr.style.opacity='0'
    clearInterval(autoPlayTimer)
    autoPlayTimer=setInterval(function(){rarr.click()},2400)
}

//根据pics(ul)中图片数量向dots(ol)中添加圆点
for(var i=0;i<pics.children.length;i++)
{
    var dot=document.createElement('li')
    dot.setAttribute('index',i)
    dot.onclick=function()
    {
        //点击圆点切换背景图、更改背景颜色
        curPicId=this.getAttribute('index')
        bkg.style.backgroundColor=colors[curPicId]
        ease(pics,-curPicId*picWidth)
        //设置当前圆点高亮
        for(var i=0;i<dots.children.length;i++)
        {
            dots.children[i].className=''
        }
        this.className='current_dot'
    }
    dots.appendChild(dot)
}
dots.children[0].className='current_dot'
pics.appendChild(pics.children[0].cloneNode(true))//克隆第一张图片到最后作无缝切换

//点击左右按钮
larr.onclick=function()
{
    //更新curPicId变量
    if(curPicId===0)//当前已经是最后一张图片(克隆后的第一张)时先循环还原
    {
        curPicId=pics.children.length-1
        pics.style.left=-curPicId*picWidth+'px'
    }
    curPicId--
    //设置当前圆点
    for(var i=0;i<dots.children.length;i++)
    {
        dots.children[i].className=''
    }
    dots.children[curPicId%dots.children.length].className='current_dot'
    //更改背景颜色
    bkg.style.backgroundColor=colors[curPicId%dots.children.length]
    //移动轮播图
    ease(pics,-curPicId*picWidth)
}
rarr.onclick=function()
{
    //更新curPicId变量
    if(curPicId===pics.children.length-1)//当前已经是最后一张图片(克隆后的第一张)时先循环还原
    {
        curPicId=0
        pics.style.left=0
    }
    curPicId++
    //设置当前圆点
    for(var i=0;i<dots.children.length;i++)
    {
        dots.children[i].className=''
    }
    dots.children[curPicId%dots.children.length].className='current_dot'
    //更改背景颜色
    bkg.style.backgroundColor=colors[curPicId%dots.children.length]
    //移动轮播图
    ease(pics,-curPicId*picWidth)
}

//自动播放，相当于手动触发右箭头点击事件
var autoPlayTimer=setInterval(function(){rarr.click()},2400)