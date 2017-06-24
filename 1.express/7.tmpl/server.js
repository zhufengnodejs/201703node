let express = require('express');
let path = require('path');
let app = express();
//要在express中使用模板引擎
//1.设置模板引擎 当查找文件的时候会添加此后缀名去找文件
app.set('view engine','html');
//2. 设置模板的存放目录
//从当前
/*path.resolve('views') == path.join(__dirname,'views')*/
app.set('views',path.resolve('views'));
//3.设置特殊模板的渲染方法
app.engine('html',require('ejs').renderFile);
/**
 * render 的原理
 * 1. 先在硬盘上找到模板物理文件
 * 2. 从硬盘上读出此文件的内容
 * 3. 用数据对象里的属性把模板里面的同名变量给替换掉
 * 4. 替换掉之后会得到一个HTML字符串，然后把HTML字符串发回给客户端,从而让浏览器渲染出来
 */
let users = [];//用户数组
// {username:'zfpx'}
app.get('/signup',function(req,res){
    //render第1参数是模板的相对路径,是相对于views目录的相对路径
    //第2参数是数据对象
    res.render('signup',{title:'用户注册'});
});
app.get('/users',function(req,res){
    res.render('users',{title:'用户列表',users});
});

app.listen(8080);