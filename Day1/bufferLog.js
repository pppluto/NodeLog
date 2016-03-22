/**
 * Buffer
 */
/**
 *  Buffer: module combined with Javascript and C++
 *  不通过V8分配内存，属于堆外内存。
 */

// var str = '深入浅出Node.js';
// var buf = new Buffer(str,'utf-8');
// console.log(buf);
// buf[3] = 10;
// console.log(buf.toString('utf-8',4,6));

/**
 * buffer 采用slab分配机制。
 * 以8k区分大小对象。一个slab内存单元可存在多个Buffer对象。
 * 大对象通过Buffer C++ 部分的SlowBuffer提供内存。
 */
/*
var fs = require('fs');
// 文件可读流逐个读取buffer，中文以3个字体，限定buffer读取长度时，该buffer被分成多个buffer，导致乱码。
var rs = fs.createReadStream('test.txt',{highWaterMark:11});

//设置编码方式后并不会改变data触发次数，而是在可读流对象内部布置了一个decoder对象，
//每次data事件都会先解码，然后传递。他会自动的识别是否满3个字节的中文编码，不够将会保存在内部，
//下次解码时拼接在开头。 -- decoder对象来自 string_decoder模块
// rs.setEncoding('utf8');
var data = '';
rs.on('data', function(chunk){
  data += chunk;
});
rs.on('end', function(){
  console.log(data);
});
*/
/**
 * 标准实现
var fs = require('fs');
var buffer = [];
var length = 0;
var rs = fs.createReadStream('test.txt');
rs.on('data', function(chunk){
  buffer.push(chunk);
  length += chunk.length;
});
rs.on('end', function(){
  var buf = Buffer.concat(buffer,length);
  var buf = buf.toString(); // 或者其他解析方式   iconv
});


 */


/**
 * Buffer.concat实现
Buffer.concat = function(list,length){
  if (!Array.isArray(list)) {
    throw new Error('Usage: Buffer.concat(list,length)');
  }

  if (list.length === 0) {
    return new Buffer(0);
  } else if(list.length ===1 ){
    return list[0];
  }

  if (typeof length !== 'number') {
    length = 0;
    for(var i = 0; i < list.length; i++){
      var buf = list[i];
      length += buf.length;
    }
  }

  var buffer = new Buffer(length);
  var pos = 0;
  for(var i = 0; i< list.length; i++){
    var buf = list[i];
    buf.copy(buffer,pos);
    pos += buf.length;
  }

  return buffer;
}
 */

/**
 * buffer 性能
 */
var http = require('http');
var helloWorld = '';
for (var i = 0; i < 1024 * 10; i++) {
  helloWorld += 'a';
}
var buf = new Buffer(helloWorld);
http.createServer(function(req,res){
  res.writeHead(200);
  res.end(buf);
}).listen(8081);
