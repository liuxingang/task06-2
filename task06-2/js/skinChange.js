/**
 * Created by gang on 2015/12/9.
 */
window.onload = function () {
    //检查localStorage.theme是否存在，若存在就调用皮肤更换颜色函数将localStorage.theme传入
    if (localStorage.theme) {
        skinChange(localStorage.theme);
    }
}
/*定义皮肤更换函数*/
function skinChange(c) {
    document.getElementById("m-menu").style.borderTopColor = c;
    document.getElementById("home").style.background = c;
    var text = document.getElementsByClassName("a-g");
    for (var i = 0; i < text.length; i++) {
        text[i].style.color = c;
    }
    //自定义属性储存颜色
    localStorage.theme = c;
}
