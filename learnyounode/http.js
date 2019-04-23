var http = require('http');
var bl = require('bl');
var [a, b, ...rUrls] = process.argv;

//Steam
//pipe
//异步顺序
var totalData = [];
var count = 0;

function doGet(url, index) {
  http.get(url, response => {
    response.setEncoding('utf8');

    response.pipe(
      bl((err, data) => {
        if (err) throw err;

        let str = data.toString();
        totalData[index] = str;
        // console.log(str.length);
        // console.log(str);
      })
    );
    // response.on('data', data => {
    //   console.log(data);
    // });

    response.on('error', err => {
      console.log(err);
    });
    response.on('end', err => {
      count++;
      if (count === rUrls.length) {
        totalData.forEach(f => {
          console.log(f);
        });
      }
    });
  });
}

rUrls.map((url, index) => {
  doGet(url, index);
});
