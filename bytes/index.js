// var [a, b, ...args] = process.argv;

// var b = new Buffer.from(args);

// console.log(b.toString('hex'));

//读取文件 分行
// var fs = require('fs');
// var path = process.argv[2];

// let file = fs.readFileSync(path);
// var newLineCode = '\n'.charCodeAt(0);
// let buff = file; //Buffer.from(file);
// let offset = 0;

// for (var i = 0; i < buff.length; i++) {
//   if (buff[i] === newLineCode) {
//     console.log(buff.slice(offset, i));
//     i++;
//     offset = i;
//   }
// }
// console.log(buff.slice(offset));

/**
 * buffer concat
 */
// let bf = [];
// process.stdin.on('readable', () => {
//   let chunk = process.stdin.read();
//   if (chunk !== null) {
//     bf.push(chunk);
//   }
// });
// process.stdin.on('end', () => {
//   // console.log(Buffer.concat(bf));
//   process.stdout.write(Buffer.concat(bf));
// });

/**
 * type array
 * 取第一次输入，转成type array
 */
// let flag = true;
// process.stdin.on('readable', () => {
//   let chunk = process.stdin.read();
//   if (chunk !== null && flag) {
//     flag = false;
//     let typeArr = new Uint8Array(chunk);
//     console.log(JSON.stringify(typeArr));
//   }
// });
//once event
// process.stdin.once('data', data => {
//   var ui8 = new Uint8Array(buff);
//   console.log(JSON.stringify(ui8));
// });

var a = process.argv[2];
var u32 = new Uint32Array(1);
u32[0] = a;

var u16 = new Uint16Array(u32.buffer);

console.log(JSON.stringify(u16));
