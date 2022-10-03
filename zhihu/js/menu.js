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