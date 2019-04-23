/**
 * TCP 时间服务器
 */

//duplex stream.

var net = require('net');
var http = require('http');
var fs = require('fs');
var strftime = require('strftime');

var port = process.argv[2];

/**
 * TCP 时间服务器
 */
// var server = net.createServer(socket => {
//   let date = new Date();
//   date = strftime('%F %H:%M');
//   console.log(date);
//   //   socket.write();
//   socket.end(date + '\n'); //关闭一个连接
// });

// server.listen(port);

/**
 * 文件服务器
 */
// var filePath = process.argv[3];
// var server = http.createServer((req, res) => {
//   res.writeHead(200, { 'content-type': 'text/plain' });
//   let s = fs.createReadStream(filePath);
//   s.pipe(res);
// });

// server.listen(port);

/**
 * post 转换服务器
 */

// var map = require('through2-map');
// var server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     req
//       .pipe(
//         map(chunk => {
//           return chunk.toString().toUpperCase();
//         })
//       )
//       .pipe(res);
//   } else {
//     return res.end('send me a POST\n');
//   }
// });
// server.listen(port);

/**
 * api
 */

var url = require('url');

var server = http.createServer((req, res) => {
  let params = url.parse(req.url, true);
  let { pathname, query } = params;
  let iso = query.iso;
  let d = new Date(iso);
  let resData;
  if (pathname === '/api/parsetime') {
    if (iso) {
      resData = {
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds()
      };
    }
  } else if (pathname === '/api/unixtime') {
    resData = {
      unixtime: d.getTime()
    };
  }
  if (resData) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(resData));
  } else {
    res.writeHead(404);
    res.end('error');
  }
});
server.listen(port);
