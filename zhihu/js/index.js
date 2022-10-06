//点击头像下拉菜单
var avatar=document.querySelector('.inner .avatar')
var menubox=document.getElementById('menubox')
flag=0
avatar.onclick=function()
{
    if(flag===0)
    {
        menubox.style.display='block'
    }
    else
    {
        menubox.style.display='none'
    }
    flag=1-flag
}

//滚动切换tab栏
var inner=document.querySelector('.header .inner')
function EaseSwitchTab(mtDes,callback)//平滑切换tab栏
{
    clearInterval(inner.timer)
    inner.timer=setInterval(function()
    {
        var mt=inner.style.marginTop.replace('px','')-0//上边距数值
        if(mt===mtDes)
        {
            clearInterval(inner.timer)
            callback&&callback()
        }
        else
        {
            var step=(mtDes-mt)/30
            step=step>0?Math.ceil(step):Math.floor(step)
            inner.style.marginTop=mt+step+'px'
        }
    },3)
}
var timerFlag=true
document.onscroll=function()
{
    if(timerFlag)
    {
        timerFlag=false
        if(window.scrollY>=70)
        {
            EaseSwitchTab(-52,function(){timerFlag=true})
        }
        else
        {
            EaseSwitchTab(0,function(){timerFlag=true})
        }
    }
}