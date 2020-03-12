/*
* @Author: DELL
* @Date:   2018-05-17 15:10:03
* @Last Modified by:   DELL
* @Last Modified time: 2018-05-17 16:30:17
*/
function People(){
	this._name = name;
}
People.prototype.say = function(){
	alert("peo-hello"+this._name);
}
function Student(){
}
Student.prototype = new People();
var superSsay = Student.prototype.say;
Student.prototype.say = function(){
	superSsay.call(this);
	alert("stu-hello"+this._name);
}
var s = new Student("iwen");
s.say() 

