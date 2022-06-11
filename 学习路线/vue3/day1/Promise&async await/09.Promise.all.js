import thenFs from 'then-fs'

const promiseArr = [
    thenFs.readFile('./files/1.txt', 'utf8'),
    thenFs.readFile('./files/2.txt', 'utf8'),
    thenFs.readFile('./files/3.txt', 'utf8'),
]
// 所有的异步操作全部完成后才会执行下一步的.then操作（等待机制）
Promise.all(promiseArr).then(result => {
    console.log(result);
})
// 只需任何一个异步操作完成，就立即执行下一步的.then操作
Promise.race(promiseArr).then(result => {
    console.log(result);
})
