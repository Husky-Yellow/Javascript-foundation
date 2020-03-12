using HAOLAI.Models.Entity;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HAOLAI.Models.COM
{
    /// <summary>
    /// 文件上传
    /// </summary>
    public class Upload_Class
    {
        #region 文件上传
        /// <summary>
        /// 
        /// </summary>
        /// <param name="W_updpara">上传文件的参数</param>
        /// <returns></returns>
        public UploadReturnMessage_Class UploadifyFile(UploadParameter_Class W_updpara)
        {
            var reMsg = new UploadReturnMessage_Class();
            var filedata = W_updpara.W_HttpPFB;
            if (filedata == null || String.IsNullOrEmpty(filedata.FileName) || filedata.ContentLength == 0)
            {
                reMsg.UploadState = 3;
                reMsg.MessageInfo = "图片源错误";
                return reMsg;
            }
            string path = System.Web.HttpContext.Current.Server.MapPath(W_updpara.W_NewUrl);
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            string newFile = path + W_updpara.W_NewName;
            int state = 0;
            if (W_updpara.W_PicThreeState)
            {
                filedata.SaveAs(newFile);
                if (IsAllowedExtension(newFile))
                {
                    state = new Pic_Class().MakingImgThree(path, W_updpara.W_NewName, W_updpara.W_PicSize, W_updpara.W_flag) ? 1 : 0;
                }
                else
                {
                    //不是图片的话要删除服务器刚上传的文件
                    FileInfo fi = new FileInfo(newFile);
                    if (fi.Attributes.ToString().IndexOf("ReadOnly") != -1)
                        fi.Attributes = FileAttributes.Normal;
                    File.Delete(newFile);
                    state = 2;
                }
            }
            else
            {
                filedata.SaveAs(newFile);
            }
            switch (state)
            {
                case 0:
                    reMsg.UploadState = 0;
                    reMsg.MessageInfo = "上传失败";
                    break;
                case 1:
                    reMsg.UploadState = 1;
                    reMsg.MessageInfo = "上传成功";
                    break;
                case 2:
                    reMsg.UploadState = 2;
                    reMsg.MessageInfo = "不是图片";
                    break;
            }
            return reMsg;
        }
        #endregion

        #region 异常处理
        /// <summary>
        /// 判断图片是否合法
        /// </summary>
        /// <param name="newFile"></param>
        /// <returns></returns>
        public bool IsAllowedExtension(string newFile)
        {
            System.IO.FileStream fs = new System.IO.FileStream(newFile, System.IO.FileMode.Open, System.IO.FileAccess.Read);
            System.IO.BinaryReader r = new System.IO.BinaryReader(fs);
            string fileclass = "";
            byte buffer;
            buffer = r.ReadByte();
            fileclass = buffer.ToString();
            buffer = r.ReadByte();
            fileclass += buffer.ToString();
            r.Close();
            fs.Close();
            /* 文件扩展名说明
            *7173    gif 
            *255216   jpg
            *13780    png
            *6677    bmp
             */
            Dictionary<String, String> ftype = new Dictionary<string, string>();
            //添加允许的文件类型
            ftype.Add("7173", "gif");
            ftype.Add("255216", "jpg");
            ftype.Add("13780", "png");
            ftype.Add("6677", "bmp");
            if (ftype.ContainsKey(fileclass))
            {
                return true;
            }
            else
            {
                return false;
            }
            #endregion
        }
    }
}