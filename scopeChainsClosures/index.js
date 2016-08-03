// 'use strict'

// if (true) {
//   let a = 10;
//   var b = 10;
// }
// //a undefined, b = 10
// //console.log(a);
// console.log(b);


function foo(){
  var bar;
  quux = 10;
  function zip(){
    var quux;
    bar = true;
  }
  return zip;
}
// console.log(foo());


// c undefined
// console.log(c);
