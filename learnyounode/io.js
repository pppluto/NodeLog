var fs = require('fs');
var path = process.argv[2];
var encode = 'utf8';

//异步
// fs.readFile(path, encode, (err, data) => {
//   if (err) throw err;
// });

//同步
var buffer = fs.readFileSync(path /** ,encode */);
var data = buffer.toString(); //可将 encode 传入就能拿到 字符串
let lines = data.split('\n').length;
console.log(lines - 1);
