var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/test');

db.connection.on('error', function(){
  console.log('connection error');
});

db.connection.on('open', function(){
  console.log('connection successful');
});
