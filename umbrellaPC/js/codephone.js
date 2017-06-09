/**
 * Created by pc on 2017/4/21.
 */
    //验证码部分
$(document).ready(function() {
    //获取验证码 1分钟倒计时
    $(".codephone").click(function(){
        //按钮变为不可点击状态
        $(this).attr("disabled","disabled");
        var times = 60 * 100; // 60秒
        countTime = setInterval(function() {
            times = --times < 0 ? 0 : times;
            var ms = Math.floor(times / 100).toString();

            if(ms.length <= 1) {
                ms = "0" + ms;
            }
            $(".codephone").html(ms+"s后重新发送");
            if(times == 0) {
                clearInterval(countTime);
                $(".codephone").text("重新发送");
                //按钮变为可以点击状态
                $(".codephone").attr("disabled",false);
            }
        }, 10);
    });
})