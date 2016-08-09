var fs = require('fs');
var readStream = fs.createReadStream(__dirname + '/data.txt');
var writeStream = fs.createWriteStream(__dirname + '/duplicate.txt')
var stream = require('stream');
var util = require('util');
//1
// readStream
//   .on('data', (chunk) => {
//     console.log('data emit');
//     if (writeStream.write(chunk) === false) {
//       console.log('wait write');
//       readStream.pause();
//     }
//   })
//   .on('readable',() => {
//     console.log('data readable');
//   })
//   .on('end',() => {
//     console.log('end');
//   })
//   .on('err',(err) => {
//     console.log('data err' + err);
//   });
//
// //内存数据写完了
// writeStream.on('drain', () => {
//   readStream.resume();
// });

// pause -> end; resume -> data;

// 2
// var Readable = require('stream').Readable;
// var Writable = require('stream').Writable;
//
// var readStream2 = new Readable();
// var writeStream2 = new Writable();
//
// readStream2.push('I ');
// readStream2.push('Love ');
// readStream2.push('Node.js \n');
// readStream2.push(null);
//
// writeStream2._write = (chunk, endcode, cb) => {
//   console.log(chunk.toString());
//   cb();
// }
// readStream2.pipe(writeStream2);

//3
function ReadStream() {
  //改变执行上下文
  stream.Readable.call(this)
}
util.inherits(ReadStream, stream.Readable);

ReadStream.prototype._read = function() {
  this.push('balabala');
}

function WriteStream() {
  stream.Writable.call(this);
  this._cached = new Buffer('');
}
util.inherits(WriteStream, stream.Writable);

WriteStream.prototype._write = function(chunk, endcoding, next) {
  console.log(chunk.toString());
  next();
}

function TransformStream() {
  stream.Transform.call(this);
}
util.inherits(TransformStream, stream.Transform);

TransformStream.prototype._transform = function(chunk, endcoding, next) {
  this.push(chunk)
  next();
}
//_flush: 数据已经写完 但是在end事件以前调用。可以用来加一些自己的定制数据
TransformStream.prototype._flush = function(next){
  this.push('flush');
  next()
}
