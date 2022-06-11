//fs.writeFile(file,data[,option],callback)
//写入数据会覆盖文件之前的内容
const fs = require('fs')

fs.writeFile('./files/2.txt', 'Hello Node.js', function (err) {
    console.log(err);
})
