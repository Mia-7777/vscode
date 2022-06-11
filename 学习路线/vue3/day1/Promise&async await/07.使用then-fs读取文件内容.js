import thenFs from "then-fs";

// Node.js的fs模块仅支持以回调函数的方式读取文件，不支持promise的调用方法，可通过then-fs这个第三方包
// then-fs 通过readFile()方法，异步读取文件内容，返回一个promise实例对象

thenFs.readFile('./files/1.txt', 'utf8').then(r1 => { console.log(r1); })
thenFs.readFile('./files/2.txt', 'utf8').then(r2 => { console.log(r2); })
thenFs.readFile('./files/3.txt', 'utf8').then(r3 => { console.log(r3); })
