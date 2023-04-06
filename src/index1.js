// 使用ES6导入jquery
import $ from 'jquery'
// 导入样式 在webpack中一些皆模块 都可以通过ES6语法导入文件使用
import './css/index.css'
import './css/index.less'
import logo from './images/logo.png'
console.log(logo,'sxsxss');
$(function () {
    // 实现奇数行变色
    $('li:odd').css('background-color','yell')
    $('li:even').css('background-color','red')

    $('.img').attr('src', logo)
})