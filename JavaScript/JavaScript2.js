'use strict';
let salary=8000;
if (salary === 9000){
    console.log("平均数");
} else if (salary > 10000){
    console.log("期望结果！")
} else {
    console.log("继续加油吧！");
}
let a=0;
let i;
for (i=0;i<10;i++){
    a=a+i;
    if (i<5){
        continue;
    }else if (i>8){
        break;
    }
    console.log(a);
}
let b = {
    name: 'Jack',
    age: 20,
    city: 'Beijing',
};
for (let key in b) {
    if (b.hasOwnProperty(key)) {
        console.log(key); // name age city
    }
}

let arr = [[1,'a',2],['b',3],'c4']
for (let c in arr) {
    console.log(c); // 0 1 2
    console.log(arr[c]); // [ 1, 'a', 2 ] [ 'b', 3 ] c4
}

let d = 0;
let e = 100;
while (e > 0) {
    d = e + d;
    e = e - 2; // 在循环内部变量n不断自减，直到变为-1时，不再满足while条件，循环退出
}
console.log(d);
// var m = new Map([['小红', 8000], ['小张', 9000], ['小段', 10000]]);
// m.get('Michael'); // 95
// console.log(m.get('小红'));
let sal = new Map(); // 空Map
console.log(sal.set('小红', 8000)); // 添加新的key-value
console.log(sal.set('小红', 8500));
console.log(sal.has('小红')); // 是否存在key 'Adam': true
console.log(sal.get('小红')); // 67
console.log(sal.delete('小红')); // 删除key 'Adam'
console.log(sal.get('小红')); // undefined

let s = new Set([[1,'a',2],['b',3],'c4']);
s.add(1);
s.add(1);
// s.delete('c4')
console.log(s);
let arr2 = ['test', 1, '数组'];
console.log(arr2.length=5);
console.log(arr2);

let f = ['A', 1, 'B'];
let g = new Set(['C', 1, '密码']);
let m = new Map([[1, 'D'], [2, '小张'], [3, '小刘']]);
for (let h of f) { // 遍历Array
    console.log(h);
}
for (let h of g) { // 遍历Set
    console.log(h);
}
for (let h of m) { // 遍历Map
    console.log(h[0] + '=' + h[1]);
}

let j = ['小段',[1,'E'],'fg'];
j.forEach(function (value, index) {
    console.log(value+',index='+index);
})

// function abs(x) {
//     if (x > 10) {
//         return x;
//     } else {
//         return -x;
//     }
// }
function abs(x) {
    if (typeof x !== 'number') {
        throw '参数错误，不是Number类型';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
console.log(abs(1));

let fun = function (y) {
    if (y >10) {
        return y;
    } else {
        return -y;
    }
};
console.log(fun(12));

function f1(z) {
    console.log("打印Z→："+z);
    for (let k=0;k<arguments.length;k++){
        console.log(arguments[k])
    }
    if(z>5){
        return ('编号：'+z);
    }else {
        return  ('编号：'+-z);
    }
}
console.log(f1(1,2,3,4,5,6));


function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []

function foo1() {
    let m = 1;
    m = m + 1;
}

function foo2() {
    let m = 'A';
    m = m + 1;
}
function fo1() {
    let n = 1;
    function dyd() {
        let y=n+1;
        return y;
    }
     let z = dyd() + 1;         // ReferenceError: y is not defined!
}

function fo2() {
    let x = 6;
    function dyd() {
        let x = 'A';
        console.log('x in dyd() = ' + x); // 'A'
    }
    console.log('x in fo2() = ' + x); // 1
    dyd();
}
fo2();

// 唯一的全局变量Myapp:
let Myapp = {};
// 其他变量:
Myapp.name = 'myapp';
Myapp.version = 1.0;
// 其他函数:
Myapp.fo4 = function () {
    return 'foo';
};
function fo5() {
    let sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    i += 1;
}

// let [x, y, z] = ['Hello','JS','ES6'];
let [x, [y, z]] = ['hello', ['JS', 'ES6']];
console.log('x = '+x+', y = '+y+', z = '+z); // x, y, z分别被赋值为数组对应元素

let xd = {
    name: '小段',
    birth: 1996,
    age: function () {
        let age = this; // this变量始终指向当前对象，在方法内部一开始用age捕获this
        function getAge() {
            let y = new Date().getFullYear(); // 获取当前年份
            return y - age.birth; // this.birth可以拿到xd的birth属性，age已经捕获this，这里要用age
        }
        return getAge();
    }
};
console.log(xd.age()); // 获取年龄，结果25

function getAge() {
    let y = new Date().getFullYear();
    return y - this.birth;
}
let xh = {
    name: '小红',
    birth: 1998,
    age: getAge
};
console.log(xh.age()); // 25
console.log(getAge.call(xh,)); // 25, this指向xh, 参数为空

console.log(Math.min.apply(null, [6, 7, 10])); // 6
console.log(Math.min.call(null, 6, 7, 10)); // 6

function product(x) {
    return x * x;
}
let num = [1, 2, 3];
let results = num.map(product); // [1, 4, 9]
console.log(results);
console.log(num.map(String));

let numb = [1, 2, 3];
let o;
numb.reduce(function (x, y) {
    return o= x + y;
});
console.log(o);

let p = [1,2,3,4,5,6];
let r = p.filter(function (x) {
    return x % 2 === 0;
});
console.log(r);

let q=[2,8,3,2,10,-1];
q.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(q);

let arr1 = ['Apple','orange','Banana'];
console.log(arr1.find(function (s) {
    return s.toLowerCase() === s;
})); // 'pear', 因为orange全部是小写

console.log(arr1.find(function (s) {
    return s.toUpperCase() === s;
})); // undefined, 因为没有全部是大写的元素

let arr3 = ['Apple','orange','Banana'];
arr3.forEach(console.log);

function count() {
    let arr = [];
    for (let i=1; i<=3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}
let result = count();
let t1 = result[0];
let t2 = result[1];
let t3 = result[2];
console.log(t1());
console.log(t2());
console.log(t3());

let v= u => u * u;
console.log('箭头函数'+v);

function* fib(max) {
    let
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
}
let w=fib(5);
console.log(w.next());
console.log(w.next());
console.log(w.next());
console.log(w.next());
console.log(w.next());
console.log(w.next());

// let aa = new Date(2021, 3, 26, 19, 50, 30, 600);

let aa = Date.parse('Tue Apr 27 2021 22:50:58 GMT+0800');
console.log(aa);
let ab = new Date(1619535058000);
console.log(ab);
console.log(ab.toUTCString());
console.log(ab.toLocaleString());

let reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
let phoneNum = '15662666666';//手机号码
let flag = reg.test(phoneNum); //true
console.log(flag);
console.log('a b   c'.split(/\s+/)); // ['a', 'b', 'c']


let dyd = { // 原型对象:
    name: '小段',
    height: 1.7,
    doing: function () {
        console.log(this.name + '学习中……！');
    }
};
function creates(name) {  // 基于dyd原型创建一个新对象:
    let ac = Object.create(dyd); // 初始化新对象:
    ac.name = name;
    return ac;
}

let YD = creates('小段');
YD.doing(); // 小段学习中……！
console.log(YD.__proto__ === dyd); // true


class xb {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log('Hello,' + this.name + '!');
    }
}
let yd = new xb('小贝');
yd.hello();

console.log('appName = ' + navigator.appName);
console.log('appVersion = ' + navigator.appVersion);
console.log('language = ' + navigator.language);
console.log('platform = ' + navigator.platform);
console.log('userAgent = ' + navigator.userAgent);
console.log('Screen size = ' + screen.width + ' x ' + screen.height);
console.log('Color position = '+ screen.colorDepth);
http://www.example.com:8080/path/index.html?a=1&b=2#TOP
location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'

