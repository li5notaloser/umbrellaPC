
$(function(){
    $("#jianjie").on("click",function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab_box").load("aboutUs/intro.html",function(){

        });
    });
    $("#partner").on("click",function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab_box").load("aboutUs/partner.html",function(){

        });
    });
    $("#comeon").on("click",function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab_box").load("aboutUs/comeon.html",function(){

        });
    });
    $("#contact").on("click",function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab_box").load("aboutUs/contact.html",function(){

        });
    });
    //默认第一个产品体系加载显示
    $("#jianjie").trigger("click");
});
//改变导航条的背景
window.onload=function(){
    var test= document.getElementById('frame_1').contentWindow.document.getElementById('aboutUs');
    test.setAttribute("class","bg");
};
