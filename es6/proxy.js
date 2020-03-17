let proxy = new Proxy({}, {
    get: function(target, key){
        console.log('get ' + key);
        return target[key];
    }
});
let obj = Object.create(proxy);
console.log(obj.foo);
let obj2 = {a:3};
function a(){
    var aa = 10;
    return {
        add:function(){
            console.log(aa++);
        }
    }
}
var aaa = a();
console.log(aaa.add());
console.log(aaa.add());
console.log(aaa.add());
console.log(aaa.add());
