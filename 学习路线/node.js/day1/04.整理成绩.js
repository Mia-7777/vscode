const fs = require('fs')
//不用使用./或../这样的相对路径，代码在运行时，会以执行 node 命令时所处的目录，动态拼接出被操作文件的完整路径
//__dirname 表示当前文件所处的目录
fs.readFile('./files/成绩.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('文件读取失败' + err.message);
    }
    // console.log(dataStr);

    // 4.1 先把成绩的数据，按照空格进行分割
    const arrOld = dataStr.split(' ')
    // 4.2 循环分割后的数组，对每项数据，进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    // 4.3 把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')
    console.log(newStr);
})
