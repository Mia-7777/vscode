// http 模块是Node.js 官方提供的，用来创建 web 服务器的模块。
// 通过 http 模块提供的 http.creatServer()方法，就能把一台普通的电脑变成一台 Web服务器。

const { request } = require("http");

// IP地址 每台计算机的唯一地址，和域名是一一对应的关系
// 域名服务器就是提供IP地址和域名之间的转换服务的服务器 如：127.0.0.1 对应的域名是 localhost 代表我们自己这台电脑
// 端口号 每个 web服务都对应一个唯一的端口号  80端口可以省略

// 1.导入 http模块
const http = require('http')
// 2.创建 web服务器实例
const server = http.createServer()
// 3.使用服务器实例的 .on()方法，为服务器实例绑定 request事件，监听客户端的请求
server.on('request', (req, res) => {
    console.log('Someone visit our web server.');
})
// 4.调用 server.listen(端口号，cb回调）方法，启动服务器
server.listen(80, () => {
    console.log('http server running at http://127.0.0.1');
})
