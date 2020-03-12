/*
* @Author: DELL
* @Date:   2018-05-18 20:54:00
* @Last Modified by:   DELL
* @Last Modified time: 2018-05-18 21:41:29
*/
// function People(){

// }
// People.prototype.say = function(){
// 	alert("hello");
// }

// function Student(){

// }
// Student.prototype = new People();
// var s = new Student();   //扩展
// s.say()

// function People(name){    //name是参数
// 	this._name = name;    //this索引 指定参数
// }
// People.prototype.say = function(){
// 	alert("peo-hello"+this._name);
// }

// function Student(name){
// 	this._name = name;
// }
// Student.prototype = new People();  //继承People
// var superSsay = Student.prototype.say;  //调用父类方法
// Student.prototype.say = function(){
// 	superSsay.call(this);          //call调用
// 	alert("stu-hello"+this._name);
// }
// var s = new Student("iwen"); //传递这个参数
// s.say()

(function(){
	var n = "iwenss";
	function People(name){    //name是参数
	this._name = name;    //this索引 指定参数
	}
	People.prototype.say = function(){
		alert("peo-hello"+this._name+n);
	}
	window.People = People;    // 外部公开接口
}());                   //(function（）{。。。}（）)；是一种隐藏方法 一个函数套另一个函数  封装
	//函数里最后面的小括号代表想让这个函数执行
(function(){
	function Student(name){
	this._name = name;
}
Student.prototype = new People();  //继承People
var superSsay = Student.prototype.say;  //调用父类方法
Student.prototype.say = function(){
	superSsay.call(this);          //call调用
	alert("stu-hello"+this._name);
}
window.Student = Student;
}());
var s = new Student("iwen"); //传递这个参数
s.say()
