//fs 模块是Node.js 官方提供的，用来操作文件的模块。如fs.readFile(),fs.writeFile()
const fs = require('fs')

//fs.readFile(path[,option],callback)

fs.readFile('./files/1.txt', 'utf8', function (err, datastr) {
    console.log(err);
    console.log(datastr);
})
