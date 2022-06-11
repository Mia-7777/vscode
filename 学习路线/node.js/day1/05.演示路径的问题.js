const fs = require('fs')

//出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
//如果要解决这个问题，可以直接提供一个完整的文件存放路径就行
//__dirname 当前文件的目录
fs.readFile(__dirname + '/files/1.txt', 'utf-8', function (err, dataStr) {
    if (err)
        return console.log('读取文件失败！' + err.message);
    console.log('读取文件成功！' + dataStr);
})
