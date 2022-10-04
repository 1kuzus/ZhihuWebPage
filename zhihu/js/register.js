//登录方式tab栏切换效果
var nav_items=document.querySelectorAll('.content .right .common .nav .nav_item')
var contents=document.querySelectorAll('.content .right .common .common_content')
for(var i=0;i<nav_items.length;i++)
{
    nav_items[i].setAttribute('index',i)//为导航栏元素设置索引
    nav_items[i].onclick=function()
    {
        for(var i=0;i<nav_items.length;i++)//还原导航栏元素属性
        {
            nav_items[i].className='nav_item fl'
        }
        this.className+=' nav_item_hightlight'//设置当前选项卡高亮
        var ind=this.getAttribute('index')//获取当前选项卡的索引
        contents[ind].style.display='block'
        contents[1-ind].style.display='none'//因为只有两个选项卡，在此用1-ind简化操作
    }
}

//密码显示隐藏
var eye=document.getElementById('eye')
var pwdInput=document.querySelector('.common_content .pwd input')
console.log(eye)
var show=false
eye.onclick=function()
{
    if(show)
    {
        pwdInput.type='password'
        eye.src='images/close.png'
    }
    else
    {
        pwdInput.type='text'
        eye.src='images/open.png'
    }
    show=1-show
}

//缩放到一定尺度时隐藏尾部
var footer=document.querySelector('.footer')
window.onresize=function()
{
    if(window.devicePixelRatio>1.5)
    {
        footer.style.display='none'
    }
    else
    {
        footer.style.display='block'
    }
}