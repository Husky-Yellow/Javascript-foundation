using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HAOLAI.Models.Entity
{
    public class UploadReturnMessage_Class
    {
        /// <summary>
        /// 上传状态：0上传失败，1上传成功，2不是图片，3图片源错误
        /// </summary>
        public int UploadState { get; set; }
        /// <summary>
        /// 错误消息
        /// </summary>
        public string MessageInfo { get; set; }
    }
}