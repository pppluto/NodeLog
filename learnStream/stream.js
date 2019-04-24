var fs = require('fs');
var http = require('http');
var request = require('request');

// http.createServer(function(req, res){

// // fs.createReadStream('android-size.png').pipe(res);
// request('https://cn.bing.com/az/hprichbg/rb/Castelluccio_ZH-CN13949453635_1920x1080.jpg').pipe(res);

// }).listen(3000);

var options = {
  flags: 'r', //操作
  mode: 0o666,
  highWaterMark: 20, //缓冲区大小,每次读多少数据
  encoding: 'utf8',
  start: 10,
  end: 100
};
var readstream = fs.createReadStream('./data.txt', options);
// readstream.setEncoding('utf8');

readstream.on('open', () => {
  console.log('open');
});

readstream.on('data', data => {
  console.log('data---', data);
});
readstream.on('end', () => {
  console.log('end');
});
readstream.on('close', () => {
  console.log('close');
});

readstream.on('error', () => {
  console.log('error');
});
