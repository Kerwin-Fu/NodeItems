
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

const secretKey = 'PHP is the best language ever in the world.'

app.use(express.urlencoded({ extended: false }))

app.post('/api/login', (req, res) => {
    if(req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({
            status: 1,
            msg: '登陆失败'
        })
    }

    const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' })
    res.send({
        status: 0,
        msg: '登陆成功',
        token: tokenStr
    })
})











app.listen(5050,() => console.log('Server running on http://127.0.0.1.5050'))