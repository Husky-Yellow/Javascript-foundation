using System;
using System.Collections.Generic;
using System.Data;
using System.Data.OleDb;
using System.Linq;
using System.Web;

namespace HAOLAI.Models.COM
{
    public class Public_Excel_Class
    {
        #region 读取Excel
        /// <summary>
        /// 读取Excel
        /// </summary>
        /// <param name="url"></param>
        /// <param name="sheetname"></param>
        /// <returns></returns>
        public DataSet GetExcel(string url, string sheetname)
        {
            string webFilePath = url;
            string _strConn = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + webFilePath + ";Extended Properties='Excel 12.0;HDR=YES;IMEX=1'";
            if (sheetname == "")
            {
                sheetname = "Sheet1";//excel标签名称
            }

            new OleDbConnection(_strConn);

            var ada = new OleDbDataAdapter("select * from [" + sheetname + "$]", _strConn);

            var ds = new DataSet();

            ada.Fill(ds);

            return ds;
        }
        #endregion
    }
}