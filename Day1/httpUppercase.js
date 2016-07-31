const http = require('http');
const url = require('url');
const bodyParser = require('body-parser');
console.log(process.argv[2]);
const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.method === 'GET') {
    res.writeHead(400);
    res.end('Only accept Post request');
    return;
  }
  var buffers = [];
  req.on('data',function(chunk){
    buffers.push(chunk);
  });

  req.on('end',function(){
    var raw = Buffer.concat(buffers).toString();
    res.end(raw.toUpperCase());
  })
});

server.listen(process.argv[2]);
