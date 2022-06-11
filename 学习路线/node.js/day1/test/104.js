const fs = require('fs')

fs.readFile('../files/成绩.txt', 'utf-8', function (err, dataStr) {
    if (err)
        return console.log('文件读取失败' + err.message);
    const arrOld = dataStr.split(' ')
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    const newStr = arrNew.join('\r\n')
    console.log(newStr);
})