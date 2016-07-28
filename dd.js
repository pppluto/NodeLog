function randomSeqV3(begin, end, number) {
  var i = 0;
  var range = end - begin;
  var exchanged = {};
  var seq = [];
  while (i < number) {
    const v = i + Math.floor(Math.random() * (range - i));
    if (exchanged[v] !== undefined) {
      seq.push(begin + exchanged[v]);
    } else {
      seq.push(begin + v);
    }
    if (exchanged[i] !== undefined) {
      exchanged[v] = exchanged[i];
    } else {
      exchanged[v] = i;
    }
    ++i;
  }

  console.log(seq);

  return seq;
}

randomSeqV3(10,40,3);

function _randomSeqV3(begin, end, num){
  var i = begin,arr=[],seq=[];
  while(i<end){
    arr.push(i);
    i++;
  }
  i=0;
  while(i<num){
    seq.push(arr.splice(Math.floor(Math.random()*arr.length),1)[0]);
    i++;

  }
  console.log(seq);
  return seq;
}

_randomSeqV3(10,40,3);


function __randomSeqV3(begin, end, num) {
  var i = 0, seq = [];

  while (i < num) {
      var tmp = Math.floor(Math.random() * (end - begin)) + begin;
      if (seq.indexOf(tmp) >= 0) {
        continue;
      }
      seq.push(tmp);
      i++;
  }
  console.log(seq);
  return seq;
}
__randomSeqV3(10,40,3);
