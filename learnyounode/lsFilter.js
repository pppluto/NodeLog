var fs = require('fs');
var path = require('path');

//过滤给定文件夹后缀符合条件的文件
// let dir = process.argv[2];
// let extension = process.argv[3];

function lsFilter(dir, extension, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) callback(err, []);

    if (!list || !list.length) callback(null, []);

    let validList = list.filter(f => {
      let ext = path.extname(f);
      // let { ext, name, base } = path.parse(f);
      return ext === '.' + extension;
      // if (ext === '.' + extension) {
      //   console.log(f);
      // }
      //   else if (base === name && !base.startsWith('.')) {
      //     lsFilter(path.join(dir, f));
      //   }
    });
    callback(err, validList);
  });
}

// lsFilter(dir);

module.exports = lsFilter;
