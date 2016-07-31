var http = require('http');
var fs = require('fs');
var url = require('url');


var server = http.createServer((req, res) => {
  var route = url.parse(req.url,true);
  if (req.method === 'POST') {
    res.writeHead(400);
    res.end('error')
    return;
  }
  res.writeHead(200,{'Content-Type': 'application/json'});
  if (route.pathname === '/api/parsetime') {
    var date = route.query.iso ? new Date(route.query.iso) : new Date();
    var resData = JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    });
    res.write(resData);
    res.end();
    return;
  }

  if (route.pathname === '/api/unixtime') {
    var date = route.query.iso ? new Date(route.query.iso) : new Date();
    var resData = JSON.stringify({
      unixtime: date.getTime(),
    });
    res.write(resData);
    res.end();
    return;
  }
  res.write('nothing here');
  res.end();

});
server.listen(process.argv[2]);
