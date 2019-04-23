var fs = require('fs');
var path = require('path');

//过滤给定文件夹后缀符合条件的文件
let dir = process.argv[2];
let extension = process.argv[3];

function lsFilter(dir) {
  fs.readdir(dir, (err, list) => {
    if (err) throw err;
    if (!list || !list.length) return;
    list.forEach(f => {
      let { ext, name, base } = path.parse(f);

      if (ext === '.' + extension) {
        console.log(f);
      }
      //   else if (base === name && !base.startsWith('.')) {
      //     lsFilter(path.join(dir, f));
      //   }
    });
  });
}

lsFilter(dir);
