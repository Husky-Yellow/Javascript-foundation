/*jquery-v1.0 好来专用弹层组件-BY W */
/*--------------------------使用说明------------------------------------*/
/*v1.0 20180117
1.方法调用的缩写,默认为promptWindow,缩写为perwin。即promptWindow.open=perwin.open。
2.弹窗ID号 可指定对应弹窗关闭和打开  open方法返回的结果作为参数传给close方法 即可关闭指定弹窗 。
3.点击右上角X的时候默认关闭该窗体,如需关闭所有窗体,可重写closebtn方法调用close方法不传参即为关闭所有弹窗。
4.去掉了点击遮罩层即关闭弹窗的事件，新增遮罩层自定义事件,参数名mask:function(){},默认为关闭所有弹窗。
5.内容层偏移方向 align属性默认为center(即居中),可改为left(居左)或right(居右)。
6.弹窗移动 move属性默认为true,设置为false 可禁用弹窗移动。
7.css:样式表路径,例根目录时候"css/"(默认值为../../css/)
8.src:图片路径,例根目录时候"images/"(默认值为../../images/)
9.closebtn:关闭按钮和灰色蒙层的事件重写,默认为关闭弹窗
10.title 标题
11.content 内容
12.submit: function () { } 按钮1事件(无此参数时即无此按钮, 默认不调用)
13.submitname 按钮1名称(默认为确认)
14.cancel: function () { } 按钮2事件 无此参数时即无此按钮
15.cancelname 按钮2名称(默认为取消)
16.size: ['500', '500'] 窗体宽度和内容层高度(前宽后高, 默认为(600, 260))
17.promptWindow.open(） 打开弹窗
18.promptWindow.close(） 关闭弹窗
19.font:字体
20.fontsize:字体大小
21.move:是否可拖动
22.repeatmask:
23.align:对齐方式
24.domLen:dom长度
*/

/*----------------------------------------------------------------------*/
/*--------------------------调用示例------------------------------------*/
function alertHL(c) {
    var a = perwin.open({
        title: "提示",
        content: c,
        submit: function () {
            promptWindow.close(a);
        },
        size: ['600', '230'],
        css: "css/",
        src: "images/"
    });
}
/*----------------------------------------------------------------------*/

var promptWindow = perwin = $.extend({
    open: function (option) {
        //if ($("body").find(".promptWindowBox").length > 0) return false;
        var css = option.css ? option.css : "../../css/";
        var src = option.src ? option.src : "../../images/";
        promptWindow.include(css + "promptWindow.css");
        //$.include('../../css/promptWindow.css');
        option = option != null ? option : {};
        var title = option.title ? option.title : "标题";
        var content = option.content ? option.content : "";
        var font = option.font ? option.font : "";
        var submitname = option.submitname ? option.submitname : "确认";
        var cancelname = option.cancelname ? option.cancelname : "取消";
        var size = option.size ? option.size : ['600', '260'];
        var move = option.move ? option.move : true;
        var fontsize = option.fontsize == null ? 14 : option.fontsize;
        //option.move = option.move || true;
        var repeatmask = option.repeatmask ? option.repeatmask : false;
        var align = option.align != null ? "text-align: " + option.align + ";" : "text-align: center;";
        var domLen = $(".promptWindowBox").length;
        var a = domLen + 1;
        $('<div>', { id: 'promptWindowBox_' + a, class: 'promptWindowBox' }).appendTo($('body'));
        $('<div>', { id: 'promptWindow_' + a, class: 'promptWindow mydiv', style: 'width:' + size[0] + 'px;margin-left:-' + (parseInt(size[0]) / 2) + 'px;margin-top:-' + ((parseInt(size[1]) + 150) / 2) + 'px;z-index:' + (99999 + parseInt(domLen) + 1) }).on('click', function () {

            //var maxH = 0;
            //for (var i = 0; i < $(".promptWindow").length; i++) {
            //    if (parseInt(maxH) < parseInt(document.getElementsByClassName("promptWindow")[i].style.zIndex)) {
            //        maxH = document.getElementsByClassName("promptWindow")[i].style.zIndex;
            //    }
            //}
            //$(this).css("z-index", (parseInt(maxH)+1))

        }).appendTo($('#promptWindowBox_' + a));
        $('<div>', { id: 'promptWindow_head_' + a, class: 'promptWindow_head' }).appendTo($('#promptWindow_' + a));
        $('<div>', { id: 'promptWindow_tit_' + a, class: 'promptWindow_tit', html: title }).appendTo($('#promptWindow_head_' + a));
        $('<div>', { id: 'promptWindow_close_' + a, class: 'promptWindow_close', html: '<img src="' + src + 'zz_close_02.png" />' }).on('click', '', option.closebtn != null && option.closebtn != undefined ? option.closebtn : function () { promptWindow.close(a); }).appendTo($('#promptWindow_head_' + a));
        $('<div>', { id: 'promptWindow_body_' + a, class: 'promptWindow_body' }).appendTo($('#promptWindow_' + a));
        $('<div>', { id: 'promptWindow_content1_' + a, class: 'promptWindow_content1', style: 'height:' + size[1] + 'px;' + align }).appendTo($('#promptWindow_body_' + a));
        $('<div>', { id: 'promptWindow_content2_' + a, class: 'promptWindow_content2', html: content, style: 'font-size:' + fontsize + 'px' }).appendTo($('#promptWindow_content1_' + a));
        $('<div>', { id: 'promptWindow_control_' + a, class: 'promptWindow_control' }).appendTo($('#promptWindow_body_' + a));
        if (option['submit'] != undefined && option['submit'] != null) {
            $('<input />', {
                id: 'promptWindow_submit_' + a,
                class: 'promptWindow_btn',
                type: 'button',
                style: 'width:' + size[0] * 0.9 + 'px;',
                value: submitname
            }).on('click', '', option.submit).appendTo($('#promptWindow_control_' + a));
        }
        if (option['cancel'] != undefined && option['cancel'] != null) {
            $('<input />', {
                id: 'promptWindow_cancel_' + a,
                class: 'promptWindow_btn2',
                type: 'button',
                style: 'width:' + size[0] * 0.9 + 'px;margin-top:10px;',
                value: cancelname
            }).on('click', '', option.cancel).appendTo($('#promptWindow_control_' + a));
        }
        //---新增样式分类，若一个按钮 则距底65px 否则正常20px 20161124 按要求修改
        if ($(".promptWindow_control").find("input").length > 1)
            $(".promptWindow_control").css("margin-bottom", "20px");
        else
            $(".promptWindow_control").css("margin-bottom", "40px");
        //---
        if (repeatmask) {
            $('<div>', { style: 'width:' + $(window).width() + 'px;' + 'height:' + $(window).height() + 'px;z-index:' + (99999 + parseInt(domLen)), class: 'promptWindow_meng' }).on('click', '', option.mask != null && option.mask != undefined ? option.mask : function () { return false; }).appendTo($('body'));
        }
        else {
            if ($(".promptWindow_meng").length == 0) {
                //该注解部分为灰色蒙层含点击关闭弹窗的功能,现取消(可能还会加回来)
                //$('<div>', { id: 'promptWindow_meng_' + a, style: 'width:' + $(window).width() + 'px;' + 'height:' + $(window).height() + 'px', class: 'promptWindow_meng' }).on('click', '', option.closebtn != null ? option.closebtn : function () { promptWindow.close(); }).appendTo($('#promptWindowBox_' + a));
                //生存在第一个弹窗层中的,若关闭第一个弹窗 则该蒙层无法生存
                //$('<div>', { id: 'promptWindow_meng' + a, style: 'width:' + $(window).width() + 'px;' + 'height:' + $(window).height() + 'px', class: 'promptWindow_meng' }).appendTo($('#promptWindowBox_' + a));
                //生在body中 跟其他弹窗无关
                $('<div>', { style: 'width:' + $(window).width() + 'px;' + 'height:' + $(window).height() + 'px', class: 'promptWindow_meng' }).on('click', '', option.mask != null && option.mask != undefined ? option.mask : function () { return false; }).appendTo($('body'));
            }
        }

        $(window).resize(function () { $(".promptWindow_meng").css({ "width": $(window).width(), "height": $(window).height() }) });
        if (move) { $("#promptWindow_head_" + a).on("mousedown", function (e) { $(this).css("cursor", "move"); var p = $(this).parent(); var offset_x = p.offset().left; var offset_y = p.offset().top; var mouse_x = e.pageX; var mouse_y = e.pageY; $(document).bind("mousemove", function (ev) { var _x = ev.pageX - mouse_x; var _y = ev.pageY - mouse_y; var pianyi_x = parseInt(size[0]) / 2; var pianyi_y = (parseInt(size[1]) + 150) / 2; var scroll_x = $(document).scrollLeft(); var scroll_y = $(document).scrollTop(); var now_x = (offset_x - scroll_x + _x + pianyi_x) + "px"; var now_y = (offset_y - scroll_y + _y + pianyi_y) + "px"; p.css({ top: now_y, left: now_x }); }); $(document).bind("mouseup", function () { $("#promptWindow_head_" + a).css("cursor", "default"); $(this).unbind("mousemove"); }); }) }
        return a;
    },
    close: function (a) {
        if (a != null)
            $("#promptWindowBox_" + a).remove();
        else
            $(".promptWindowBox").remove();
        //if ($(".promptWindowBox").length == 0) {
        $(".promptWindow_meng").remove();
        //}


    },
    include: function (file) { var includePath = ''; var files = typeof file == "string" ? [file] : file; for (var i = 0; i < files.length; i++) { var name = files[i].replace(/^\s|\s$/g, ""); var att = name.split('.'); var ext = att[att.length - 1].toLowerCase(); var isCSS = ext == "css"; var tag = isCSS ? "link" : "script"; var attr = isCSS ? " type='text/css' rel='stylesheet' " : " type='text/javascript' "; var link = (isCSS ? "href" : "src") + "='" + includePath + name + "'"; if ($(tag + "[" + link + "]").length == 0) $("head").prepend("<" + tag + attr + link + "></" + tag + ">"); } }
})


