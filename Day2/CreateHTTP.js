const http = require('http')

const server = http.createServer()

server.on('request',(req,res) => {
    res.end('hello world')
})

server.listen(11451,() => {
    console.log('Server running on http://127.0.0.1:11451');
})