/// <reference path="checks.js" />
$(function () {
    BindCheck();
})
function BindCheck() {
    var htmlImg = '<img class="check" src="images/check.jpg" /><img class="checked" src="images/checked.jpg" style="display:none;" />';
    $(".cbo").html("");
    $(".cbo").html(htmlImg);
    $(".cbo").click(function () {
        if ($(this).find(".checked").css("display") == "block") {
            $(this).find(".check").css("display", "block").next().css("display", "none");
            $(this).attr("check", "");
        } else {
            CancelSameName($(this));
            $(this).find(".check").css("display", "none").next().css("display", "block");
            $(this).attr("check", "check");
        }
    })
}
//取消所有已勾选
function CancelSameName(me) {
    var $Same = $("div[name=" + $(me).attr("name") + "]");
    $Same.find(".checked").css("display", "none").prev().css("display", "block");
    $Same.attr("check", "");
}