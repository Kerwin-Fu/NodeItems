const fs = require('fs')
const path = require('path')

const absolutePathRead = path.join(__dirname,'/成绩.txt')
const absolutePathWrite = path.join(__dirname,'/成绩-ok.txt')
const getName = path.basename(absolutePathRead)
const getExt = path.extname(absolutePathRead)
console.log(getName);
console.log(getExt);


fs.readFile(absolutePathRead,'utf8',function(err,dataStr){
    if(err) return console.log(err);
    // console.log(dataStr);
    const newStr = dataStr.replace(/=/g,'：').replace(/\s/g,'\r\n')
    console.log(newStr);
    
    fs.writeFile(absolutePathWrite,newStr,function(err) {
        if(err) return console.log('写入数据失败');
        console.log('写入成功');
    })
})