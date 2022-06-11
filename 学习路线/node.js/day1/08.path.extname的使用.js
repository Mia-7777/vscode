// path.extname() 获取路径中的文件拓展名

const path = require('path')
const fpath = 'a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext);//.html
