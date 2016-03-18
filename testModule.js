'use strict';
var fs = require('fs');
var path = require('path');
module.exports = function (fullpath,extension,callback){
  fs.readdir(fullpath,function(err,list) {
    if (err) {
      callback(err,'success');
      return;
    }
    list.forEach(function (file) {
      if (path.extname(file) === '.' + extension) {
        console.log(file)
      }
    });
  })
};
/* 参考
module.exports = function (dir, filterStr, callback) {

       fs.readdir(dir, function (err, list) {
         if (err)
           return callback(err)

         list = list.filter(function (file) {
           return path.extname(file) === '.' + filterStr
         })

         callback(null, list)
       })
     }
 */
