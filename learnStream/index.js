/*
This file is for learning stream module in node
you can view these questions by npm -g install stream-adventure for more details
 */

var fs = require('fs');
var http = require('http');
var through = require('through2');
var split = require('split');
var concat = require('concat-stream');
var request = require('request');
var ws = require('websocket-stream');
var streamCombiner = require('stream-combiner');
var zlib = require('zlib');
// 1
// fs.createReadStream(process.argv[2]).pipe(process.stdout);

// 2
// process.stdin.pipe(process.stdout);

// 3 输入转换大小
// function write(buffer, encoding, next){
//   this.push(buffer.toString().toUpperCase());
//   next();
// }
//
// function end(done){
//   console.log('ddd');
//   done();
// }
//
// var tr = through(write,end);
// process.stdin.pipe(tr).pipe(process.stdout);

//4 截断分行，按奇偶大小写
// var num = 0;
// var tr = through(function(line, _, next){
//   var data = num % 2 !== 0 ? line.toString().toUpperCase() : line.toString().toLowerCase();
//   num++;
//   this.push(data + '\n');
//   next();
// });
// process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

//5 使用concat-stream模块得到整个流buffer
// process.stdin.pipe(concat(function(allbuffer){
//   console.log(allbuffer.toString().split('').reverse().join(''));
// }));
//

//6 http 服务 将req数据大小传回client
// var tr = through(function(buf, _, next) {
//   this.push(buf.toString().toUpperCase());
//   next();
// });
// var httpServer = http.createServer((req, res) => {
//   // req.pipe(tr).pipe(res);
//   // res.end('beep boop')
//   fs.createReadStream('data.txt').pipe(res);
// }).listen(process.argv[2])

//7 双工流  TCP  socket 。。。
// process.stdin.pipe(request.post('http://localhost:8099')).pipe(process.stdout);

//8 socket
// var server = http.createServer();
// ws.createServer({server:server},function(stream){
//   stream.pipe(stream);
// });
// server.listen(8099,function(){
//   console.log('hello\n');
// });

//9 html stream
// var trumpet = require('trumpet');
// var tr = trumpet();
// var loud = tr.select('.loud').createStream();
// loud.pipe(through(function(buf, _, next){
//   this.push(buf.toString().toUpperCase());
//   next();
// })).pipe(loud);
// process.stdin.pipe(tr).pipe(process.stdout)

//10 duplexer   var duplexer = duplexer2(writeable,readable);生成一个双攻流
// var spawn = require('child_process').spawn;
// var duplexer2 = require('duplexer2');
// module.exports = function(cmd, args){
//   //新建一个子进程。 子进程的stdin是可写流
//   var child = spawn(cmd,args);
//   return duplexer2(child.stdin,child.stdout);
// }

//11 duplexer redux
// var duplexer2 = require('duplexer2');
// var through = require('through2').obj;

// objectMode
// A Readable stream in object mode will always return a single item from a call to stream.read(size),
// regardless of what the size argument is.
//
// A Writable stream in object mode will always ignore the encoding argument to stream.write(data, encoding).
// module.exports = function(counter){
//   var counts = {};
//   var input = through(_write,_end);
//   function _write(input, encoding, done){
//     counts[input.country] = (counts[input.country] || 0) + 1;
//     done();
//   };
//   function _end(done){
//     counter.setCounts(counts);
//     done()
//   };
//   return duplexer2({objectMode:true},input,counter);
// }

// 12 stream-combiner  **模拟一遍输出**
// module.exports = function(){
//   var current;
//   var tr = through(_write,_end);
//   function _write(line, _, next){
//     console.log(line);
//     if (line.length === 0) {
//       return next();
//     }
//     var obj = JSON.parse(line);
//     if (obj.type === 'genre') {
//       if (current) {
//         this.push(JSON.stringify(current) + '\n');
//       }
//       current = {name: obj.name,books:[]};
//     } else if(obj.type === 'book') {
//       current.books.push(obj.name);
//     }
//
//     next();
//   }
//
//   function _end(done){
//     if (current) {
//       this.push(JSON.stringify(current) + '\n');
//     }
//     done()
//   }
//   return streamCombiner(split(),tr,zlib.createGzip());
// }

//13 crypto
// var crypto = require('crypto');
// var stream = crypto.createDecipher('aes256','pluto');
// process.stdin.pipe(stream).pipe(process.stdout);

//14 secretz
// encrypted, gzipper tar file will piped in on process.stdin.
var crypto = require('crypto');
var tr = require('through2');
var decipher = crypto.createDecipher(process.argv[2],process.argv[3]);
var tar = require('tar');
var zlib = require('zlib')
var parser = tar.Parse();
parser.on('entry', function(entry){
  //entry object type,path
  if (entry.type === 'File') {
    entry.pipe(crypto.createHash('md5',{encoding:'hex'}))
      .pipe(concat(function(hash){
        console.log(hash + ' ' + entry.path);
      }));
  }
});
process.stdin
  .pipe(decipher)
  .pipe(zlib.createGunzip())
  .pipe(parser);
