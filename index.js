// var express = require('express');
// var app = express();
// var shudaonan = require('./data.js');
// app.get('/', function(req, res){
//   res.send('<h1>hello world</h1>');
// });
//
// app.post('/', function(req, res){
//   console.log('got a post');
//   res.send(shudaonan);
// });
// console.log('run in 3000');
// var server =  app.listen(3000, function(){
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example app listening at http://%s:%s', host, port);
// });


// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;
//
// if (cluster.isMaster) {
//   // Fork workers.
//   for (var i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }
//
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   // Workers can share any TCP connection
//   // In this case it is an HTTP server
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
//   }).listen(8000);
// }



//
// var http = require('http');
// var cheerio = require('cheerio');
// var url = 'http://www.imooc.com/learn/348';
//
// function filterChapters(html){
//   var $ = cheerio.load(html);
//
//   var chapters = $('.chapter');
//   var courseData = [];
//
//   chapters.each(function(item) {
//     var chapter = $(this);
//     var title = chapter.find('strong').text();
//     var videos = chapter.find('.video').children('li');
//     var data = {
//         title: title,
//         videos: [],
//     };
//     videos.each(function(item){
//       var video = $(this).find('.studyvideo');
//       var title = video.text();
//       var id = video.attr('href').split('video/')[1];
//
//       data.videos.push({
//         title:title,
//         id: id
//       });
//       courseData.push(data);
//     });
//   });
//   return courseData;
// }
//
// http.get(url, function( res) {
//   var html = '';
//   res.on('data', function(data){
//     html += data;
//   });
//
//   res.on('end', function(){
//     var s = filterChapters(html);
//     s.forEach(function(i){
//       console.log(i);
//     })
//   });
//
//   res.on('error', function(){
//     console.log('error');
//   })
// })

// http.createServer(function (req, res){
//   res.writeHead(200, {'Content-Type':'text/plain'});
//   res.write('hello world');
//   res.end()
// }).listen(3000);
