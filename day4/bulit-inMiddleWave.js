const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.get('/',(req, res,next) => {
    console.log(req.body);
    next()
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.end('world');
})




app.listen(80,() => {
    console.log('http://127.0.0.1');

})