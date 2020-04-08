var data = [
    
        {
            "name":"陶国荣",
            "sex":"男",
            "email":"t@163.com"
        },
        {
            "name":"陶国荣",
            "sex":"男",
            "email":"t@163.com"
        }
    
];
// 初始化保存内容变量
var strHTML = "";
// 遍历获取的数据
$.each(data,function(){
    strHTML += "姓名:" + this["name"] + "<br>";
    strHTML += "性别:" + this["sex"] + "<br>";
    strHTML += "邮箱:" + this["email"] + "<br>";
})
// 显示处理后的数据
$("#divTip").html(strHTML);