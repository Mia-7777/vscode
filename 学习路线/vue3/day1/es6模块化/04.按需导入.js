// 导入的成员名称必须和导出的名称保持一致
// as关键字重命名 
// info 一个指向默认导出的对象
import info, { s1, s2 as str2, say } from './03.按需导出.js'

console.log(s1);
console.log(str2);
console.log(say);

console.log(info);