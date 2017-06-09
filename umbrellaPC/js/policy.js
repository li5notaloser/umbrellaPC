$(function(){
    $("#industry").on("click",function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab_box").load("policy/policylist.html",function(){
            //点击详情页面加载
        $(".profession li").on("click",function(){
            $(".tab_box").load("policy/policydetails.html",function(){
            });
        });

            //页面跳转部分
            $('.M-box1').pagination({
                totalData:100,
                showData:5,
                jump:true,
                coping:true,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                callback:function(api){
                    //            console.log(api.getCurrent());
                }
            },function(api){
                //        console.log(api.getCurrent());
            });

        });

    });

    $("#policy").on("click",function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab_box").load("policy/industry.html",function(){
            $(".national li").on("click",function(){
                $(".tab_box").load("policy/policydetails.html",function(){
                });
            });
            //页面跳转部分
            $('.M-box2').pagination({
                totalData:100,
                showData:5,
                jump:true,
                coping:true,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上页',
                nextContent:'下页',
                callback:function(api){
                    //            console.log(api.getCurrent());
                }
            },function(api){
                //        console.log(api.getCurrent());
            });
        });
    });
    //默认行业动态页面显示
    $("#industry").trigger("click");
    var hash=window.location.hash;
    var Hash=hash.substr(1);
    if(Hash=="more1"){
        $("#industry").trigger("click");
    }else if(Hash=="more2"){
        $("#policy").trigger("click");
    }


});
//改变导航条的背景
window.onload=function(){
    var test= document.getElementById('frame_1').contentWindow.document.getElementById('polity');
    test.setAttribute("class","bg");
};