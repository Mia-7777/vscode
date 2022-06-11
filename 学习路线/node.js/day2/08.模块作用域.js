// 模块作用域好处 防止变量全局污染

const username = '张三'

function sayHello() {
    console.log('大家好，我是' + username);
}
sayHello()
module.exports{ username }