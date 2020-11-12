/*
 * @Author: your name
 * @Date: 2020-11-12 11:13:14
 * @LastEditTime: 2020-11-12 15:08:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day6\sessionModule.js
 */
/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑       永不宕机     永无BUG
 */


const express = require('express')
const app = express()

const session = require('express-session')
app.use(session({
    secret: 'kerwin',
    resave: false,
    saveUninitialized: true,
}))
app.use(express.urlencoded({ extended: false }))

app.post('/api/login', (req, res) => {
    console.log(req.body);
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({
            status: 1,
            msg: '登陆失败'
        })
    }

    req.session.body = req.body;
    req.session.islogin = true;

    res.send({
        status: 0,
        msg: '登陆成功'
    })
})

app.post('/api/logout',(req, res) =>{
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出成功'
    })
})
app.listen(8080,() => {
 console.log('http://127.0.0.1:8080');    
})