using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HAOLAI.Models.Entity
{
    public class UploadParameter_Class
    {
        /// <summary>
        /// 上传数据基类
        /// </summary>
        public HttpPostedFileBase W_HttpPFB { get; set; }
        /// <summary>
        /// 保存位置
        /// </summary>
        public string W_NewUrl { get; set; }
        /// <summary>
        /// 文件名称
        /// </summary>
        public string W_NewName { get; set; }
        /// <summary>
        /// 是否生成大图与缩略图
        /// </summary>
        public bool W_PicThreeState { get; set; }
        /// <summary>
        /// 缩略图比例：宽=[0],高=[1]
        /// </summary>
        public string[] W_PicSize { get; set; }
        /// <summary>
        /// 大图压缩力度
        /// </summary>
        public int W_flag { get; set; }
    }
}