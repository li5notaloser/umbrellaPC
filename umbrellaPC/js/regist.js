/**
 * Created by pc on 2017/4/21.
 */
$(function(){
    //            手机号码验证
    $(".phone").blur(function(){
        var res1=checkPhone(".phone" , ".phonerror");
    });
    //        手机号码验证 js代码
    function checkPhone(obj,objerror){
        var phone = $(obj).val();
        if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
            $(objerror).css("display","block");
            $(objerror).text("手机号码有误，请重填");
            return false;
        }else{
            $(objerror).css("display","none");
        }
    }

    //用户名 和 企业名称为必填选项
    $(".user").blur(function(){
        var res2=checknull(".user" , ".usererror","用户名不能为空");
    });
    $(".qiye").blur(function(){
        var res2=checknull(".qiye" , ".qiyerror","企业名称不能为空");
    });
    function checknull(obj,objerror,errormes){
        var name = $(obj).val();
        if(name=='' || name==null){
            $(objerror).css("display","block");
            $(objerror).text(errormes);
            return false;
        }else{
            $(objerror).css("display","none");
        }
    }

    //营业执照编号验证
    $(".licencecode").blur(function(){
        var res2=checkLicence(".licencecode" , ".licencecoderror");
    });
    function checkLicence(obj,objerror){
        var licence=$(obj).val();
        if(!(/^[A-Za-z0-9]+$/.test(licence))){
            $(objerror).css("display","block");
            $(objerror).text("营业执照编号错误，请重填");
            return false;
        }else{
            $(objerror).css("display","none");
        }
    }
    //当表单验证通过时候 点击下一步 否则 点击无效
    $("#finish").click(function(){


        $(".phone").trigger("blur");
        $(".user").trigger("blur");
        $(".qiye").trigger("blur");
        $(".licencecode").trigger("blur");
    });
    function Url(obj){
        window.location.href=obj;
    }
});

