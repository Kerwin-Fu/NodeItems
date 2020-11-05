const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.mkdir('./clock',function(err) {
    if(err) return console.log('创建文件夹失败');
    console.log('创建文件夹成功');
})

fs.readFile(path.join(__dirname,'./index.html'),'utf8',function(err,result) {
    if(err) return console.log('读取文件失败' +err.message)
    console.log('读取文件成功')
    resolveCSS(result)
    resolveJS(result)
    resolveHTML(result)
})


function resolveCSS(result) {
    const r1 = regStyle.exec(result)
    const newCSS = r1[0].replace('<style>',' ').replace('</style>',' ')
    
    fs.writeFile(path.join(__dirname,'./clock/clock.css'),newCSS,function(err) {
        if(err) return console.log('写入样式文件失败' +err.message)
        console.log('写入样式文件成功');
    })
    
}

function resolveJS(result) {
    const r2 = regScript.exec(result)
    const newJS = r2[0].replace('<script>',' ').replace('</script>',' ')
    
    fs.writeFile(path.join(__dirname,'./clock/clock.js'),newJS,function(err) {
        if(err) return console.log('写入脚本文件失败' +err.message)
        console.log('写入脚本文件成功');
    })
    
}

function resolveHTML(result) {
    const newHTML = result
    .replace(regStyle,'<link rel="stylesheet" href="./clock.css"> ')
    .replace(regScript,'<script src="./clock.js"></script> ')
    
    fs.writeFile(path.join(__dirname,'./clock/clock.html'),newHTML,function(err) {
        if(err) return console.log('写入结构文件失败' +err.message)
        console.log('写入结构文件成功');
    })
    
}