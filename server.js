/**
 * 1 test command line argv
 */
// // console.log('HELLO WORLD');
// var sum = 0;
// for (var i = 2; i < process.argv.length; i++) {
//   sum += Math.floor(process.argv[i]);
// }
// console.log(sum);


/**
 * 2 sync I/O
 */
// var fs = require('fs');
// var buf = fs.readFileSync(process.argv[2]);
// var arr = buf.toString().split("\n");
// console.log(arr.length-1);

/**
 * 3 async I/O
 */
// var fs = require('fs');
// fs.readFile(process.argv[2],function(error,buffer){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(buffer.toString().split('\n').length - 1 );
//   }
// });

/**
 * 4 FILTERED LS
 */
// var fs = require('fs');
// fs.readdir(process.argv[2],function(err,list){
//   if (err) {
//     console.log(err);
//   } else {
//     for (var i = 0; i < list.length; i++) {
//       if (list[i].lastIndexOf('md') > 0) {
//        console.log(list[i]);
//       }
//     }
//   }
// });
/** 参考
var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/

/**
 * 5 modules
 */
// var testModule = require('./testModule.js');
// testModule(process.argv[2],process.argv[3],(err,msg) => {
//   console.log(msg);
// })
/**
 * 6 http
 */
// var http = require('http');
// var buf = '';
// http.get(process.argv[2],(res) => {
//   res.setEncoding('utf-8');
//   res.on('data',data => {
//     buf += data.toString();
//   });
//   res.on('end',() => {
//     console.log(buf.length);
//     console.log(buf);
//   })
// }).on('error',(error) => {
//   console.log(error);
// });
/**
 * 7 http async
 */
// var http = require('http');
// var result = [];
// var count = 0;
// for (var i = 0; i < 3; i++) {
//   http.get(process.argv[2+i],response => {
//     response.setEncoding('utf-8');
//     var buf = '';
//     response.on('data',data => {
//       buf += data;
//     })
//     response.on('end',() => {
//       result[i] = buf;
//       count++;
//       if (count === 3) {
//           for (var j = 0; j < 3; j++) {
//             console.log(result[j]);
//           }
//       }
//     });
//   });
// }
/* 参考
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3) // yay! we are the last one!
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
*/

/**
 * 8 net time parse
 *
 */

// var net = require('net');
// function getZeroTime(num) {
//   return num < 10 ? '0' + num : '' + num;
// }
// var server = net.createServer((socket => {
//   var date = new Date();
//   var data = date.getFullYear() + '-' + getZeroTime(date.getMonth()+1) + '-' + getZeroTime(date.getDate()) + ' ' + getZeroTime(date.getHours()) + ':' + getZeroTime(date.getMinutes()) + '\n';
//   console.log('');
//   // socket.write(data);
//   socket.end(data);
//   server.close();
// }));
// server.listen(process.argv[2]);
// server.on('close',() => {
//   console.log('');
// });
/**
 * 9 http file
 */
var http = require('http');
var fs = require('fs');
http.createServer((request,response) => {
  response.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(process.argv[3]).pipe(response);
  response.send();
}).listen(process.argv[2]);
