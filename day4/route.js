const express = require('express')

const route = express.Router()


route.get('/', (req, res) => {
    res.send('hello world')
})

route.post('/', (req, res) => {
    res.send('You are posting')
})

module.exports = route