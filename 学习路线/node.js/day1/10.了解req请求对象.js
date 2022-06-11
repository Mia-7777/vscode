const http = require('http')
const server = http.createServer()
// req 请求对象，包含了与客户端相关的数据与属性
// res 响应对象，包含了与服务器相关的数据和属性
server.on('request', (req, res) => {
    // req.url 是客户端请求的 URL 地址
    const url = req.url
    // req.method 是客户端请求的 method 类型
    const method = req.method
    const str = `Your request url is ${url},and request method is ${method}`
    console.log(str);

    // 调用res.end()方法，向客户端发送指定的内容，并结束这次请求的处理过程
    res.end(str)
})
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})
