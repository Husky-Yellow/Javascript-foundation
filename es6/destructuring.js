/**
 * 变量的解构赋值
 * 用途：
 *  1、交换变量的值
 *  2、从函数返回多个值
 *  3、函数参数的定义
 *  4、提取 JOSN 数据
 *  5、函数参数的默认值
 *  6、遍历 Map 解构
 *  7、输入模块的指定方法
 */ 
// 1、交换变量的值
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log('1、a: ' + a + '; b: ' + b);

//2、从函数返回多个值
//返回对象
var f1 = function(){
    return {
        m1: 1,
        m2: '2'
    };
}
//返回数组
var f2 = function(){
    return [1, 2, 3];
}
let {m1, m2} = f1();
let [a2, b2, c2] = f2();
console.log('2、m1: ' + m1 + '; m2: ' + m2);
console.log('2、a2: ' + a2 + '; b2: ' + b2 + '; c2: ' + c2);

//3、函数参数的定义
//  参数有序
var f3 = function([a3, b3, c3]){
    console.log('3、a3: ' + a3 + '; b3: ' + b3 + '; c3: ' + c3);
}
//  参数无序
var f33 = function({a3, b3, c3}){
    console.log('33、a3: ' + a3 + '; b3: ' + b3 + '; c3: ' + c3);
}
f3([1, 2, 3]);
f33({a3: 1, b3: 2, c3: 3});
//4、提取 JSON 数据
var json1 = {
    a4: 1,
    b4: '2'
};
let {a4, b4} = json1;
console.log('4、a4: ' + a4 + '; b4: ' + b4);

//5、函数参数的默认值
var f5 = function(url, {
    async = true,
    cache = false,
    complete = function(){}
} = {}){
    console.log('5、async: ' + async);
};

f5('1',{ async: false});

//6、遍历 Map 结构
let map6 = new Map();
map6.set('first', 1);
map6.set('second', '2');
for(let [key, value] of map6){
    console.log('6、key: ' + key + ' ; value: ' + value);
}

//7、输入模块的指定方法
// const {f1, f2} = require('./test.js');