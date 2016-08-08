// 1
// function upperCaser(input){
//   return input.toUpperCase();
// }
//
// module.exports = upperCaser;

//2 higher-order funciton
// function repeat(operation, num){
//   var i = 0;
//   while (i < num) {
//     operation();
//     i++;
//   }
// }
// function operation(){
//   console.log('operation');
// }
// repeat(operation,4);
// module.exports = repeat;

//3 map
// function doubleAll(numbers){
//   var result = numbers.map( v => {
//     return v * 2;
//   });
//   return result;
// }
// module.exports = doubleAll;

//4 filter
// function getShortMessages(messages){
//   return messages.filter( m => {
//     return m.message.length < 50;
//   }).map( v => {
//     return v.message;
//   });
// }
// module.exports = getShortMessages;

//5 every some
// function checkValid(goods){
//   return function allUserValie(submittedUsers){
//     return submittedUsers.every( v => {
//       return goods.some( k => {
//         return k.id === v.id;
//       })
//     });
//   }
// }
// module.exports = checkValid;

//6 reduce
function count(inputs){
  var statistics = {};
  inputs.reduce( (p,n) => {
    statistics[n] = statistics[n] ? statistics[n] + 1 : 1;
    return n;
  },null);
  return statistics;
}
module.exports = count;
