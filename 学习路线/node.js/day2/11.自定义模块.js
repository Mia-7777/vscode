// 在一个自定义模块中，默认情况下，module.exports={}
// 向 module.exports 对象挂载 username 属性
module.exports.username = 'zs'
// 挂在函数
module.exports.sayHello = function () {
    console.log('Hello!');
}
