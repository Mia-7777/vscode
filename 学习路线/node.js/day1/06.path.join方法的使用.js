// Path.join() 可以把多个路径片段拼接为完整的路径字符串  path.join([...paths])

const path = require('path')
const fs = require('fs')

const pathStr1 = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr1);
const pathStr2 = path.join(__dirname, './files/1.txt')
console.log(pathStr2);//D:\wxm\vscode\学习路线\node.js\day1\files\1.txt

fs.readFile(path.join(__dirname, './files/1.txt'), 'utf-8', function (err, dataStr) {
    console.log(dataStr);
})