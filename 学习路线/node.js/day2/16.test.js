// 导入自定义的格式时间的模块
const TIME = require('./15.dataFormat')

const dt = new Date()
// console.log(dt);
const newDT = TIME.dataFormat(dt)
console.log(newDT);