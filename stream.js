var fs = require('fs');
var http = require('http');
var request = require('request');

http.createServer(function(req, res){

// fs.createReadStream('android-size.png').pipe(res);
request('https://cn.bing.com/az/hprichbg/rb/Castelluccio_ZH-CN13949453635_1920x1080.jpg').pipe(res);

}).listen(3000);
