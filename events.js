var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();
life.setMaxListeners(12)
life.on('love',function(para){
  console.log('love',para);
});
life.on('love',function(para){
  console.log('love',para);
});
life.on('love',function(para){
  console.log('love',para);
});
life.on('love',function(para){
  console.log('love',para);
});
life.on('love',function(para){
  console.log('love',para);
});
life.on('love',function(para){
  console.log('love',para);
});
life.on('love',function(para){
  console.log('love',para);
});
life.on('love',function(para){
  console.log('love',para);
});
life.on('love',function(para){
  console.log('love',para);
});
life.on('love',function(para){
  console.log('love',para);
});
life.on('love',function(para){
  console.log('love',para);
});
life.on('ha',function(f){
  console.log('ha',f);
})
life.addListener('love',function(){
  console.log('fsf');
})
life.emit('love','你麻痹');
life.emit('ha');

life.once('haha',function(){
  console.log('this is only call once');
});
life.emit('haha');
life.emit('haha'); //nothing happen
