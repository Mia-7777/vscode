// 1.导入需要的模块
const http = require('http')
const fs = require('fs')
const path = require('path')

// 2.创建基本的 web服务器
const server = http.createServer()
server.on('request', (req, res) => {
    const url = req.url
    // 3.把请求的 url地址，映射为本地文件的存放路径
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        fpath = path.join(__dirname, './clock', url)
    }
    // 4.根据“映射”过来的文件路径读取文件并响应给客户端
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err)
            return res.end('404 Not found')
        res.end(dataStr)
    })
})
server.listen(80, () => {
    console.log('server listen at http://127.0.0.1');
})



