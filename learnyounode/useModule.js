var lsFilter = require('./lsFilter');

lsFilter(process.argv[2], process.argv[3], (err, list) => {
  if (err) throw err;

  list.forEach(f => {
    console.log(f);
  });
});
