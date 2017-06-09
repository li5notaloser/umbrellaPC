/**
 * Created by pc on 2017/5/25.
 */
$(function(){
    $(".attend").on("click",function(){
        $(".tab_box").load("service/attend.html",function(){
            //点击我要办理 弹框弹出
            $(".tijiao").on("click",function(){
                prompt();
            })
        });
    })
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
});