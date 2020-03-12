$(function(){
    var src_show =$(".screen");         //屏幕显示
    src_show.html("0");
    var result ="",                          //输出结果
          result_1="",                      //第一个数字
          result_2 = "";                   //第二个数字
    var change=0;                       //运算符
    var num = $(".num");                 //数字键
    var equal = $(".btn_equal");         //等于符
    var calcu = $(".calcu");                 //运算符
    var reset = $(".btn_reset");             //清零符
    var negtive = $(".btn_negtive"),         //负号符
          neg=1;
    var del = $(".btn_delete");                //退格符
    //负号操作
    negtive.click(function(){
        if(src_show.text()=="0"){           //当屏幕显示为0时
            src_show.html("-0");
            neg=0;
        }else if(src_show.text()=="-0"){
            src_show.html("0");
            neg=1;
        }else{                           //当屏幕显示不为0
            result=src_show.text();
            if(neg==0){                  //显示为负数时
                neg=1;
            }else if(neg==1){            //显示为正数时
                neg=0;
            }
            result=-result;
            src_show.html(result);
        }
    })
    //数字键
    num.click(function(){
        result+=$(this).text();
        if(neg==0){
            src_show.html(-result);
        }else{
            src_show.html(result);
        }
    })
    //四则运算操作
    calcu.click(function(){
        result_1=parseFloat(src_show.text());
        if($(this).hasClass("btn_plus")){
            change=1;
        }
        if($(this).hasClass("btn_minus")){
            change=2;
        }
        if($(this).hasClass("btn_multiplied")){
            change=3;
        }
        if($(this).hasClass("btn_divided")){
            change=4;
        }
        result="";
        // src_show.html("0");
        neg=1;
    });
    //等于操作
    equal.click(function(){
        if(result==""){
            result_1=parseFloat(src_show.text());
        }else{
            result_2 = parseFloat(src_show.text());
        }
        if(change ==1){
            result = result_1+result_2;
        }
        if(change ==2){
            result = result_1-result_2;
        }
        if(change ==3){
            result = result_1*result_2;
        }
        if(change ==4){
            result = result_1/result_2;
        }
        src_show.html(result);
        if(result<0){
            neg=0;
        }else{
            neg=1;
        }
        result="";
    });
    //清零符
    reset.click(function(){
        src_show.html("0");
        result ="";
        result_1="";
        result_2 = "";
        change=0;
        neg=1;
    });
    //退格符
    del.click(function(){
        if(result.length==1||result==""){    //输入一位数退格
            result="";
            if(neg==1){
                src_show.html("0");
            }else if(neg==0){
                src_show.html("-0");
            }
        }else{
            result=result.substr(0,result.length-1);
            if(neg==1){
                src_show.html(result);
            }else if(neg==0){
                src_show.html(-result);
            }
        }
    })
})