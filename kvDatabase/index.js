// module.exports = function(x, y, cb) {
//   let error = null;
//   cb(error, 'ALL YOUR ' + x + ' ARE BELONG TO ' + y);
// };

/**
 * simple database using  level
 */

var level = require('level');

// module.exports = function(databaseDir, key, cb) {
//   var db = level(databaseDir); // create or open an database
//   db.get(key, (error, value) => {
//     db.close(err => {
//       cb(error || err, value);
//     });
//   });
// };

/**
 * get
 */
// module.exports = function(databaseDir, cb) {
//   var result = [];
//   var err;

//   var db = level(databaseDir);

//   db.on('error', e => {
//     err = e;
//   });

//   var fetchNext = function(i) {
//     var key = 'key' + i;
//     db.get(key, (error, value) => {
//       if (error) {
//         if (!error.notFound) {
//           err = error;
//         }
//       } else {
//         result.push(value);
//       }

//       if (i < 100 && !err) {
//         fetchNext(i + 1);
//       } else {
//         db.close(error => {
//           cb(err || error, result);
//         });
//       }
//     });
//   };
//   fetchNext(0);
// };

/**
 * put
 */
// module.exports = function(databaseDir, obj, cb) {
//   var db = level(databaseDir);
//   var error;
//   function putValue(key, value) {
//     db.put(key, value);
//   }
//   for (var key in obj) {
//     putValue(key, obj[key]);
//   }
//   db.on('error', err => {
//     error = err;
//   });
//   db.close(err => {
//     cb(err || error);
//   });
// };

/**
 * batch
 */
// module.exports = function(databaseDir, changes, cb) {
//   var db = level(databaseDir);
//   var error;

//   let batches = [];
//   let delList = changes.del || [];
//   let putObj = changes.put || {};
//   delList.forEach(key => {
//     batches.push({ type: 'del', key });
//   });
//   for (var key in putObj) {
//     batches.push({ type: 'put', key, value: putObj[key] });
//   }

//   db.on('error', e => {
//     error = e;
//   });
//   db.batch(batches, err => {
//     if (err) {
//       error = err;
//     }
//     db.close(err => {
//       cb(error || err);
//     });
//   });
// };

/**
 * streaming using through2
 */
// var through = require('through2');

// module.exports = function(databaseDir) {
//   var db = level(databaseDir);
//   var readStream = db.createReadStream();
//   var tr = through(
//     { objectMode: true },
//     function(data, _, next) {
//       let d = data.key + '=' + data.value;
//       this.push(d);
//       next();
//     },
//     function(done) {
//       db.close(() => {
//         done();
//       });
//     }
//   );
//   return readStream.pipe(tr);
// };

// module.exports = function(databaseDir, date, cb) {
//   var db = level(databaseDir);
//   var count = 0;
//   var result = [];
//   var error;
//   var readStream = db.createReadStream({ gte: date, lte: date + '\xff' }); //greater equal
//   readStream.on('data', data => {
//     count++;
//     result.push(data.value);
//   });
//   readStream.on('error', err => {
//     error = err;
//   });
//   readStream.on('end', () => {
//     db.close(err => {
//       cb(err || error, result);
//     });
//   });
// };

module.exports = function(databaseDir, keywise, cb) {
  var db = level(databaseDir, { valueEncoding: 'json' });
  var data = require(keywise);
  var ops = data.map(row => {
    var key;
    if (row.type === 'user') {
      key = row.name;
    } else if (row.type === 'repo') {
      key = row.user + '!' + row.name;
    }
    return {
      type: 'put',
      key,
      value: row //encoding:json 直接可以传对象
    };
  });
  db.batch(ops, error => {
    db.close(err => {
      cb(err || error);
    });
  });
};

/**
 * 子仓库
 */
