const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer();

server.on("request", (req, res) => {
  const url = req.url;
  let fpath = '';
  if (url === "/") {
    fpath = path.join(__dirname, "./clock", "index.html");
  } else {
    fpath = path.join(__dirname, "./clock", url);
  }

  fs.readFile(fpath,'utf8',(err,result) => {
    
      if(err) return res.end('<h2>Not Found 404</h2>')
      res.end(result)
  })

});

server.listen(5050, () => {
  console.log("KeKe,http://127.0.0.1:5050");
});
