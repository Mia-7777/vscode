const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    //发送的内容包含中文
    const str = `您请求的 url 地址是 ${req.url},请求的 method 类型是 ${req.method}`
    // 为了防止中文显示乱码的问题，需要设置响应头 Content-Type 的值为 text/html;charset=utf-8
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // res.end() 将内容响应给客户端
    res.end(str)
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})