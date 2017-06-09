$(function(){
    $("#tixi").on("click",function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab_box").load("service/tixichanpin.html",function(){
            $(".attend").on("click",function(){
                $(".tab_box").load("service/attend.html",function(){
                    //点击我要办理 弹框弹出
                    $(".tijiao").on("click",function(){
                        prompt();
                    })


                });
            })

        });
    });
    $("#qiyeguanli").on("click",function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab_box").load("service/qiyexinyong.html",function(){
            $(".attend").on("click",function(){
                $(".tab_box").load("service/attend.html",function(){
                    //点击我要办理 弹框弹出
                    $(".tijiao").on("click",function(){
                        prompt();
                    })

                });
            })
        });
    });
    $("#fawu").on("click",function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab_box").load("service/qiyefawu.html",function(){
            $(".attend").on("click",function(){
                $(".tab_box").load("service/attend.html",function(){
                    //点击我要办理 弹框弹出
                    $(".tijiao").on("click",function(){
                        prompt();
                    })
                });
            })
        });
    });
    $("#shangbiao").on("click",function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab_box").load("service/shangbiao.html",function(){
            $(".attend").on("click",function(){
                $(".tab_box").load("service/attend.html",function(){
                    //点击我要办理 弹框弹出
                    $(".tijiao").on("click",function(){
                        prompt();
                    })
                });
            })
        });
    });
    $("#Internet").on("click",function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab_box").load("service/internet.html",function(){
            $(".attend").on("click",function(){
                $(".tab_box").load("service/attend.html",function(){
                    //点击我要办理 弹框弹出
                    $(".tijiao").on("click",function(){
                        prompt();
                    })
                });
            })
        });
    });
    //默认第一个产品体系加载显示
    $("#tixi").trigger("click");
    //弹框部分
    function prompt(){
        var state=2;
        //弹框提示登录 state=1是提示去登录；state=2 确认提交; state=3 提交成功
        if(state==1){
            $(".bgbox_login").css("display","block");
        }else if(state==2){
            $(".bgbox_ziliao").css("display","block");
        }
        $(".cancel_login").click(function(){
            $(".bgbox_login").css("display","none");
        });
        $(".ok_ziliao").click(function(){
            $(".bgbox_ok").css("display","block");
            $(".bgbox_ziliao").css("display","none");
        });
        $(".cancel_ziliao").click(function(){
            $(".bgbox_ziliao").css("display","none");
        });
        $(".ok").click(function(){
            $(".bgbox_ok").css("display","none");
            //完成提交 我要办理按钮消失
            $(".tijiao").css("display","none");
        });
    }

    var hash=window.location.hash;
    var Hash=hash.substr(1);
    if(Hash=="1"){
        $("#tixi").trigger("click");
    }else if(Hash=="2"){
        $("#qiyeguanli").trigger("click");
    }else if(Hash=="3"){
        $("#fawu").trigger("click");
    }else if(Hash=="4"){
        $("#shangbiao").trigger("click");
    }else if(Hash=="5"){
        $("#Internet").trigger("click");
    }


});
