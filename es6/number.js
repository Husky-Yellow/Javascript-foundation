/**
 * 数值的扩展
 * 1、Math.trunc() //去除小数部分，返回整数部分
 *  对于非数值（eg:string)，内部先转成Number，再操作
 */
//1、Math.trunc()
Math.trunc(1.2); //1
Math.trunc(-0.2); //0
//  非数值，Math.trunc()内部先将其转成Number
Math.trunc('12.3'); //12
Math.trunc(true); //1
Math.trunc(false); //0
Math.trunc(null);  //0
//  空值和无法截取的值，返回NaN
Math.trunc(NaN); //NaN
Math.trunc('foo'); //NaN
Math.trunc(); //NaN
Math.trunc(undefined); //NaN

