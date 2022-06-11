import thenFs from 'then-fs';

// async/await ES8 简化promise异步操作
// 第一个await之前的代码会同步执行，之后的代码会异步执行
console.log('A');
async function getFile() {
    console.log('B');
    //加了await thenFs返回实例内容，不加默认返回promise实例对象
    const r1 = await thenFs.readFile('./files/1.txt', 'utf8')
    console.log(r1)
    const r2 = await thenFs.readFile('./files/2.txt', 'utf8')
    console.log(r2);
    const r3 = await thenFs.readFile('./files/3.txt', 'utf8')
    console.log(r3);
    console.log('D');

}
getFile()
console.log('C');

// 输出
// A
// B
// C
// 111 222 333
// D