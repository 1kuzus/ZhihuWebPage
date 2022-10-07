//点击头像下拉菜单
var avatar=document.querySelector('.inner .avatar')
var menubox=document.getElementById('menubox')
var showMenubox=0
avatar.onclick=function()
{
    if(showMenubox===0)
    {
        menubox.style.display='block'
    }
    else
    {
        menubox.style.display='none'
    }
    showMenubox=1-showMenubox
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

//收藏
var favourBtn=document.querySelectorAll('.content .floor .functions .fav')
var closeBtn=document.querySelector('.mask img')
var favour=document.querySelector('.mask .favour')
var mask=document.querySelector('.mask')
for(var i=0;i<favourBtn.length;i++)
{
    favourBtn[i].onclick=function()
    {
        favour.style.top='50%'
        closeBtn.style.top='50%'
        mask.style.opacity='1'
        mask.style.zIndex='10'
    }
}
closeBtn.onclick=function()
{
    favour.style.top='54%'
    closeBtn.style.top='54%'
    mask.style.opacity='0'
    setTimeout(function(){mask.style.zIndex='-1'},400)
}