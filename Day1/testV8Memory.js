/**
 * this is a test for V8 memory and gc.
 *
 */
var showMem = function() {
  var mem = process.memoryUsage();
  var format = function(bytes){
    return (bytes / 1024 / 1024).toFixed(2) + 'MB';
  };
  console.log('process: heaptotal' + format(mem.heapTotal) +
  'heapUsed' + format(mem.heapUsed) +
    'rss' + format(mem.rss));
  console.log('--------');
};
var useMem = function() {
  var size = 20 * 1024 * 1024;
  var arr = new Array(size);
  for (var i = 0; i < size; i++) {
    arr[i] = 0;
  }
  showMem();
  return arr;
};

var total = [];
for (var j = 0; j < 15; j++) {
  total.push(useMem());
}
