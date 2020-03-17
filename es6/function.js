/**
 * 函数的扩展
 * 1、函数参数的默认值
 * 2、与解构赋值默认值结合使用
 * 3、rest参数，类似java的动态参数
 */
//1、函数参数的默认值
let f1 = function(x, y = 'world'){
    console.log(x + y);
}
f1('hello'); //hello world
f1('hello', ''); //hello
f1('hello', 'Node'); //hello Node

//2、与解构赋值默认值结合使用
let f2 = function({x = 1, y = 2}){
    console.log( x, y);
}
f2({}); //1 2
f2({y:1}); //1 1
// f2(); // TypeError: Cannot read property 'x' of undefined
//  上面的f2()报错，是因为没有参数时，变量x、y就不会生成；
//  解决办法是为函数参数设置一个总的默认值
let f22 = function({x = 1, y = 2} = {}){
    console.log(x, y);
}
f22(); //1 2
//3、rest参数
let sum = function(...values){
    let s = 0;
    for(let v of values){
        s += v;
    }
    console.log(s);
}
sum(1,2,3);