$(function(){
    <!--调用Luara示例-->
    $(".example").luara({width:"100%",height:"470",interval:3000,selected:"seleted"});
    //文字滚动
    var Font=document.getElementById("Font");
    var rol1=document.getElementById("rol1");
    var rol2=document.getElementById("rol2");
    rol2.innerHTML=rol1.innerHTML;
    $(".roling").css("width",rol1.offsetWidth*2+"px");
    function rol(){
        if(Font.scrollLeft>=rol1.offsetWidth){
            Font.scrollLeft=0;
        }else{
            Font.scrollLeft++;
        }
    }
    setInterval(rol,20);
    $(".menu a").each(function(){
        $(this).click(function(){
            $(this).nextSibling().addClass("bg").siblings().removeClass("bg");
        })
    });
    //改变导航条的背景
    window.onload=function(){
        var test= document.getElementById('frame_1').contentWindow.document.getElementById('index');
        test.setAttribute("class","bg");
    };
    //hover 事件：qq出来
    $(".qq").mouseover(function(){
        $(".hoverqq").css("display","block");
    });
    $(".qq").mouseout(function(){
        $(".hoverqq").css("display","none");
    })
    $(".hoverqq").mouseover(function(){
        $(".hoverqq").css("display","block");
    });
    $(".hoverqq").mouseout(function(){
        $(".hoverqq").css("display","none");
    });
    //hover 事件：二维码出来
    $(".weixin").mouseover(function(){
        $(".hoverweixin").css("display","block");
    });
    $(".weixin").mouseout(function(){
        $(".hoverweixin").css("display","none");
    });
    $(".hoverweixin").mouseover(function(){
        $(".hoverweixin").css("display","block");
    });
    $(".hoverweixin").mouseout(function(){
        $(".hoverweixin").css("display","none");
    });
    //返回顶部
    $(".top_link").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });


});