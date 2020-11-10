const express = require('express')

const app = express()

const route = require('./route')

app.use(route)


app.listen(80, () => {
    console.log('http://127.0.0.1')
})