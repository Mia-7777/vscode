// 1.使用es6 导入语法，导入 jQuery
import $ from "jquery";

import './index.css'

import './index.less'
// 2.定义jQuery 的入口函数
$(function () {
    // 3.实现奇偶行变色
    $('li:odd').css('background-color', 'pink')
    $('li:even').css('background-color', 'skyblue')

    // const sum = (num1, num2) => {
    //     return num1 + num2
    // }
    // const result = sum(5, 10)
    // console.log(result);
})

