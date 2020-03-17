/**
 * set、map
 * 1、用array填充
 * 2、遍历
 * 3、map 转 对象
 */
// 1、用array填充
const set1 = new Set([1,2,2,3,4]);
// 2、遍历
set1.forEach((value)=>{
    console.log(value);
})
// 3、Map 转对象
const map = new Map()
    .set('yes', true)
    .set('no', false);
let map2obj = function(map){
    let obj = new Object();
    for(let [k, v] of map){
        obj[k] = v;
    }
    return obj;
}
let obj = map2obj(map);
console.log(obj);

// 4、对象转 Map
let obj4 = {yes: true, no: false};
let obj2Map = function(obj){
    let map = new Map();
    for(let k of Object.keys(obj)){
        map.set(k, obj[k]);
    }
    return map;
}
let map4 = obj2Map(obj4);
console.log(map4);
// 5、Map 转 JSON
let map5 = new Map().set(true, 7).set({foo:3}, 1);
let map55 = new Map().set(a,1).set(b,2);
console.log(JSON.stringify(map5));
console.log(JSON.stringify(map55));