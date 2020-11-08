const express = require('express')

const app = express()

app.get('./user', (req, res) => {
    
    res.send(req.query)
})

app.post('./user', (req, res) => {
    res.send()
})

app.listen(80, (err) => {
    console.log('Server running on 127.0.0.1');
})