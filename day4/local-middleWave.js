const express = require('express');
const app = express();
const route = require('./route')


 const mw1 = (req, res, next) => {
    console.log('1');
    next();
}
const mw2 = (req, res, next) => {
    console.log('2');
    next();
}

app.get('/',mw1,mw2, (req, res,next) => {
    console.log('hello');
    next()
})

app.get('/', (req, res) => {
    console.log('world');
    res.end('world');
})




app.listen(80,() => {
    console.log('http://127.0.0.1');

})