using HAOLAI.Models.COM;
using HAOLAI.Models.Entity;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HAOLAI.Controllers
{
    public class TestController : Controller
    {
        //
        // GET: /Test/

        public ActionResult TestIndex()
        {
            return View();
        }
        [HttpPost]
        public ActionResult TestIndex(HttpPostedFileBase file)
        {
            //案例
            //★★★开始★★★
            var W_updpara = new UploadParameter_Class();
            W_updpara.W_HttpPFB = file; //已由客户端上载的单个文件
            W_updpara.W_NewName = "朱坤大帅哥.jpg"; //文件名
            W_updpara.W_NewUrl = "~/"; //服务器存储地址
            W_updpara.W_PicSize = new string[] { "100", "100" }; //缩略图大小
            W_updpara.W_PicThreeState = true; //是否上传图片（原图、大图、缩略图）
            W_updpara.W_flag = 70; //大图压缩率
            var a = new Upload_Class().UploadifyFile(W_updpara);
            //★★★结束★★★
            ViewData["asdf"] = a.UploadState;
            ViewBag.asd = a.MessageInfo;
            return View();
        }

    }
}
