var http = require('http');

var rUrl = process.argv[2];

//Steam
http.get(rUrl, response => {
  response.setEncoding('utf8');
  response.on('data', data => {
    console.log(data);
  });

  response.on('error', err => {
    console.log(err);
  });
  //   response.on('end', err => {
  //     console.log('');
  //   });
});
