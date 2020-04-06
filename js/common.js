// --------下拉菜单动画-----start

function getPop(className) {
    var navLeft = document.querySelector(className);
    var lis = navLeft.children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            this.children[1].display = "block";
        };
        lis[i].onmouseout = function () {
            this.children[1].display = "none";
        }
    }
}
getPop(".left-nav");
getPop(".right-nav");
// --------下拉菜单动画-----end

// --------头部导航栏动画-----start
initLink();
function initLink(){
    if(document.getElementsByName('myset')) {
    var arrLink = document.getElementsByName('myset');
    for (i = 0; i < arrLink.length; i++) {
        var link = arrLink[i];
        link.onclick = Nav;
     }
    }
}
function Nav(event) {
    var target = event.currentTarget;
    //上次选择的a的样式
    if(document.getElementsByName('myset')){
        var arrLink = document.getElementsByName('myset');
        for(i = 0; i < arrLink.length; i++) {
            var link = arrLink[i];
            if(link.className === 'on') {
                link.className = '';
            }
        }
    }
    target.className = 'on';
    return false;//阻止浏览器默认事件
}
// --------头部导航栏动画-----end




// --------更多按钮的动画-----start
var block = document.querySelectorAll(".block");
var num = block.length;
for (var i = 0; i < num; i++) (function (i) {
    var more = block[i].querySelector(".more");
    var changeScale = block[i].querySelector(".changeScale");
    block[i].addEventListener('mouseenter', function () {
        more.style.display = "block";
        changeScale.style.transform = "scale(1.1)";
        changeScale.style.transition = "all 0.6s";
    });
    block[i].addEventListener('mouseleave', function () {
        more.style.display = "none";
        changeScale.style.transform = "scale(1)";
        changeScale.style.transition = "all 0.6s";
    })
})(i);
// --------更多按钮的动画-----end


// --------中间的nav-bar转换------start
initLinkStyle(".catg_name");
function initLinkStyle(className){
    cat=document.querySelector(className);
    a=cat.querySelectorAll("a");
    for( var i = 0; i < a.length; i++) {
        a[i].onclick = clickNav;
    }
}
function clickNav(event) {
    var target = event.currentTarget;
    for(var i = 0; i < a.length; i++) {
        if(a[i].className === 'active') {
            a[i].className = '';
        }
    }
    target.className = 'active';
    return false;//阻止浏览器默认事件
}

// --------中间的nav-bar转换------end


