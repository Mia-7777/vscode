// path.basename(path[,ext]) 获取路径中的文件名

const path = require('path')
// 定义文件存放路径
const fpath = './a/b/c/index.html'
//输出文件名以及拓展名
const fullName = path.basename(fpath)
console.log(fullName);//index.html
//只输出文件名
const nameWithExt = path.basename(fpath, '.html')
console.log(nameWithExt);//index
