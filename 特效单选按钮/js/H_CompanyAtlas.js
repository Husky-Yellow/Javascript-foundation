$(function () {
    $(".H_Atlastit_3 li").click(function () {
        $(".H_Atlastit_3 li").attr("check", "");
        $(this).attr("check", "check");
        $(".H_Atlastit_3 li").css("border-color", "#fff");
        $(this).css("border-color", "#0081E4");
        $(".H_Atlastit_3 li").children().hide();
        $(this).children().show();
    })
    $(".H_Atlastit_3 li").hover(
		function () {
		    $(this).css("border-color", "#0081E4");
		}, function () {
		    if ($(this).attr("check") != "check") {
		        $(this).css("border-color", "#fff");
		    }
		}
	)

    $(".selphoto").click(function () {
        var typeid = $(this).attr("typeid");
    })

    //$(".H_EnterpriseLogo_3").hover(
	//	function () {
	//	    $(".H_Hidelist").children().show();
	//	    $(".H_Scoreboard").show();
	//	    $(".H_Scoreboard").hover(
	//			function () {
	//			    $(this).show();
	//			},
	//			function () {
	//			    if ($(this).attr("Pushpin") != "tru") {
	//			        $(this).hide()
	//			    }
	//			})
	//	},
	//	function () {
	//	    $(".H_Hidelist").children().hide();
	//	}
	//)

    //	������϶Ա�ʱ��ʾ�����ԱȽϵĶ���
    $(".H_Hidelist").hover(
		function () {
		    $(this).children().show();
		},
		function () {
		    $(this).children().hide();
		}
	)
    //���ŵ�ͼ����ʱ��ͼ�껻ɫ
    $(".H_Hidelist ul li").mouseover(function () {
        switch ($(this).attr("title")) {
            case "ѡ���":
                $("img", $(this)).attr("src", "../Template/Default/IMG/Enterprise/ChoiceBlue.png");
                break;
            case "��˾��Ϣ":
                $("img", $(this)).attr("src", "../Template/Default/IMG/Enterprise/DetailsBlue.png");
                break;
            case "�ղ�":
                $("img", $(this)).attr("src", "../Template/Default/IMG/Enterprise/HeartBlue.png");
                break;
            case "����":
                $("img", $(this)).attr("src", "../Template/Default/IMG/Enterprise/ShareBlue.png");
                break;
            case "�ٱ�":
                $("img", $(this)).attr("src", "../Template/Default/IMG/Enterprise/ReportBlue.png");
                break;
        }
    })
    $(".H_Hidelist ul li").mouseout(function () {
        switch ($(this).attr("title")) {
            case "ѡ���":
                $("img", $(this)).attr("src", "../Template/Default/IMG/Enterprise/ChoiceGray.png");
                break;
            case "��˾��Ϣ":
                $("img", $(this)).attr("src", "../Template/Default/IMG/Enterprise/DetailsGray.png");
                break;
            case "�ղ�":
                $("img", $(this)).attr("src", "../Template/Default/IMG/Enterprise/HeartGray.png");
                break;
            case "����":
                $("img", $(this)).attr("src", "../Template/Default/IMG/Enterprise/ShareGray.png");
                break;
            case "�ٱ�":
                $("img", $(this)).attr("src", "../Template/Default/IMG/Enterprise/ReportGray.png");
                break;
        }
    })
})
//////////////////////////////////////////////////////////
//�����Ͳ鿴��˾ͼ��
//2018-3-27 19:51:16
//����
////////////////////////////////////////////////////////
function SelPhoto(typeid) {
    $.post("/EnterpriseAJAX/K_SelEntPhoto", { "Typeid": typeid }, function (Num) {
        if (Num > 0) {
            var html = "";
            for (var i = 0; i < Num - 1; i++) {
                html += '<li>'
                    + '<div class="H_Atlas">'
                        + '<div class="H_AtlasPic">'
                            + '<img src="" alt="" /></div>'
                        + '<p>��˾����</p>'
                    + '</div>'
                + '</li>';
            }
            $("#photolist").html(html);
        }
    })
}


function chooise(obj) {
    var classname = $(obj).attr("class");
    $(".H_AtlasCon_2").hide();
    $("#" + classname).show();
}