using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;
using System.Text;
using System.IO;
using System.Drawing.Imaging;

/// <summary>
/// WaterMaker 的摘要说明
/// </summary>
public class WaterMaker
{
    public WaterMaker()
    {
        //
        // TODO: 在此处添加构造函数逻辑
        //
    }
    /// <summary>
    /// 加图片水印
    /// </summary>
    /// <param name="path">底层图片绝对地址</param>
    /// <param name="shuiyin">水印图片绝对地址</param>
    /// <param name="watermarker_width">水印宽度</param>
    /// <param name="watermarker_height">水印高度</param>
    /// <returns></returns>
    public string AddImageWaterMark(string path, string shuiyin, int watermarker_width, int watermarker_height)
    {
        System.Drawing.Image image = System.Drawing.Image.FromFile(path);
        Bitmap b = new Bitmap(image.Width, image.Height, System.Drawing.Imaging.PixelFormat.Format24bppRgb);
        Graphics g = Graphics.FromImage(b);
        g.Clear(Color.White);
        g.DrawImage(image, 0, 0, image.Width, image.Height);
        System.Drawing.Image watermark = new Bitmap(shuiyin);
        System.Drawing.Imaging.ImageAttributes imageAttributes = new System.Drawing.Imaging.ImageAttributes();
        System.Drawing.Imaging.ColorMap colorMap = new System.Drawing.Imaging.ColorMap();
        colorMap.OldColor = Color.FromArgb(255, 0, 255, 0);
        colorMap.NewColor = Color.FromArgb(0, 0, 0, 0);
        System.Drawing.Imaging.ColorMap[] remapTable = { colorMap };
        imageAttributes.SetRemapTable(remapTable, System.Drawing.Imaging.ColorAdjustType.Bitmap);
        float[][] colorMatrixElements = {
             new float[] {1.0f, 0.0f, 0.0f, 0.0f, 0.0f},
             new float[] {0.0f, 1.0f, 0.0f, 0.0f, 0.0f},
             new float[] {0.0f, 0.0f, 1.0f, 0.0f, 0.0f},
             new float[] {0.0f, 0.0f, 0.0f, 1.5f, 0.0f},//设置透明度0.3f
             new float[] {0.0f, 0.0f, 0.0f, 0.0f, 1.0f}
            };
        System.Drawing.Imaging.ColorMatrix colorMatrix = new System.Drawing.Imaging.ColorMatrix(colorMatrixElements);
        imageAttributes.SetColorMatrix(colorMatrix, System.Drawing.Imaging.ColorMatrixFlag.Default, System.Drawing.Imaging.ColorAdjustType.Bitmap);
        int xpos = 0;
        int ypos = 0;
        //xpos = ((image.Width - watermark.Width) - 50);//水印位置
        //ypos = image.Height - watermark.Height - 50;//水印位置
        watermarker_width = watermarker_width == 0 ? watermark.Width : watermarker_width;
        watermarker_height = watermarker_height == 0 ? watermark.Height : watermarker_height;
        xpos = (image.Width / 2) - (watermarker_width / 2);
        ypos = (image.Height / 2) - (watermarker_height / 2);


        g.DrawImage(watermark, new Rectangle(xpos, ypos, watermarker_width, watermarker_height), 0, 0, watermark.Width, watermark.Height, GraphicsUnit.Pixel, imageAttributes);
        watermark.Dispose();
        imageAttributes.Dispose();

        //保存加水印过后的图片,删除原始图片
        Random ro = new Random((int)DateTime.Now.Ticks);
        string fileName = DateTime.Now.ToString("yyyyMMddHHmmss") + ro.Next(10000) + "s" + "." + "jpg";
        b.Save(HttpContext.Current.Server.MapPath("../../fileupload/authorization/") + fileName);//保存打过水印的图片
        b.Dispose();
        image.Dispose();
        if (File.Exists(path))//删除原始文件
        {
            File.Delete(path);
        }
        return fileName;
    }

    /// <summary>
    /// 加文字水印
    /// </summary>
    /// <param name="filename">相对路径地址</param>
    /// <param name="text">文本</param>
    /// <param name="fontsize">字体大小</param>
    /// <param name="x">X轴</param>
    /// <param name="y">Y轴</param>
    /// <param name="rectwidth">区域宽度</param>
    /// <param name="rectheight">区域高度</param>
    /// <returns></returns>
    public string AddTextWaterMark(string filename, string text, float fontsize, int x, int y, float rectwidth, float rectheight)
    {
        if (!File.Exists(System.Web.HttpContext.Current.Server.MapPath(filename)))
        {
            throw new FileNotFoundException("the file don't exist!");
        }
        if (text == string.Empty)
        {
            return "";
        }
        //还需要判断文件类型是否为图像类型，这里就不赘述了 
        Image image = Image.FromFile(System.Web.HttpContext.Current.Server.MapPath(filename));
        Bitmap bitmap = new Bitmap(image, image.Width, image.Height);
        Graphics g = Graphics.FromImage(bitmap);
        //fontsize = 20.0f; //字体大小 
        float textwidth = text.Length * fontsize; //文本的长度 
                                                  //下面定义一个矩形区域，以后在这个矩形里画上白底黑字 
        float rectx = x;
        float recty = y;
        //float rectwidth = text.Length * (fontsize + 32);
        //float rectheight = fontsize + 16; //声明矩形域 
        RectangleF textarea = new RectangleF(rectx, recty, rectwidth, rectheight);
        Font font = new Font("宋体", fontsize); //定义字体 
        //Brush whitebrush = new SolidBrush(Color.White); //白笔刷，画背景用 
        Brush blackbrush = new SolidBrush(Color.Black); //黑笔刷，画文字用 
        //g.FillRectangle(whitebrush, rectx, recty, rectwidth, rectheight);
        g.DrawString(text, font, blackbrush, textarea);
        Random ro = new Random((int)DateTime.Now.Ticks);
        string fileName = DateTime.Now.ToString("yyyyMMddHHmmss") + ro.Next(10000) + "s2" + "." + "png";
        bitmap.Save(HttpContext.Current.Server.MapPath("../../fileupload/authorization/") + fileName);//保存打过水印的图片
        g.Dispose();
        bitmap.Dispose();
        image.Dispose();
        return fileName;
    }
}