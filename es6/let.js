/**
 * let 和 const 命令
 */

var a = [];
var b = [];
for(var i=0;i<5;i++){
    a[i] = i;
    b[i] = function(){
        console.log(i);
    }
}
console.log(i); // 5   
console.log(a[3]); // 3，因为"a[i]=i;"，每循环一次，就直接将i的当前值赋过去
console.log(b[3]()); // 5，因为function()没有在循环体内执行，只是将值引用过去，所以调用function的时候，循环已经完成，i的值已经是5了，b[]里的值都是5；

for(let j=0;j<5;j++){
 
}
console.log(j); // ReferenceError: j is not defined