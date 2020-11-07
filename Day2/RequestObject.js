const http = require('http')

const server = http.createServer()

server.on('request',(req,res) => {
    let content = '<h2>Not Found 404!!</h2>'
    res.setHeader('Content-Type','text/html; charset=utf8')
    if(req.method === 'GET') {
        if (req.url === '/' || req.url === 'index') {
            content = '<h2>欢迎来到首页</h2>'
        }
        else if (req.url === '/news') {
            content = '<h2>欢迎来到新闻页面</h2>'
        }
        
    } 
    else if(req.method === 'POST') {
           content = '<h2>你发送的是POST请求</h2>'
    }
    res.end(content)
})

server.listen(3030,() => {
    console.log('Server running on http://127.0.0.1:3030');
})