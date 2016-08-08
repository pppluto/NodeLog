var TOTAL_PIECE = 16; // should be A Perfect Square number

function getRandomBetween(a,b){
  var min = a || 0;
  var max = b || 1000;
  return min + Math.floor(Math.random() * (max - min));
}

//生成一组参考答案数组。
function createAnswerSequence(a,c){
  var target = parseInt(a || 0, 10);
  var count = parseInt(c || 2, 10);
  if (typeof target !== 'number' || typeof target !== 'number') {
    throw new Error('parameters should be a NUMBER ');
  }
  if (target < 5) {
    throw new Error('target should beyond 5');
  }

  var randomPositions = [], i = 0;
  while (i < count) {
    var tmp = Math.floor(Math.random() * target);
    if (randomPositions.indexOf(tmp) < 0 && tmp !== 0) {
      randomPositions.push(tmp);
      ++i;
    }
  }
  var sortRandomPositions = randomPositions.sort((a,b) => a - b);
  var targetAnswers = [];
  sortRandomPositions.reduce((p,n) => {
    targetAnswers.push(n - p);
    return n;
  },0);
  targetAnswers.push(target - sortRandomPositions[sortRandomPositions.length - 1]);
  return targetAnswers;
}

function createAllPieceValue(target) {
  var i = 0, arr = [];
  while (i < TOTAL_PIECE) {
    var tmp = Math.floor(Math.random() * 10);
    if (tmp === target) {
      continue;
    }
    arr.push(tmp)
    ++i;
  }
  return console.log(arr),arr;
}

function isNearBy(center,b,rowLength) {
  if (center % rowLength === 0 && b === (center - 1)) {
    return false;
  }

  if (center % rowLength === (rowLength - 1) && b === (center + 1)) {
    return false;
  }

  return true;
};

function getAvailableIndexes(index, rowLength) {
  // console.log('center',index);
  var allIndexes = [index - rowLength, index + rowLength, index - 1, index + 1];
  // console.log('allIndexes',allIndexes);
  var availableIndexes = [];
  allIndexes.forEach( value => {
    if (value >= 0 && value <= (rowLength * rowLength - 1)) {
      if (isNearBy(index, value,rowLength)) {
        availableIndexes.push(value);
      }
    }
  });
  return availableIndexes;
};

function createAnswerIndexes(count){
  var indexesArray = []
  var rowLength = Math.sqrt(TOTAL_PIECE);

  var initialPosition = Math.floor(Math.random() * TOTAL_PIECE);


  var i = 0;
  while (i < count) {
    if (indexesArray.indexOf(initialPosition) < 0) {
      indexesArray.push(initialPosition);
      ++i;
    }
    var availableIndexes =  getAvailableIndexes(initialPosition,rowLength);
    initialPosition = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
  }
  return indexesArray;
}

var answerSequence = createAnswerSequence(process.argv[2],process.argv[3]);
var answerIndexes = createAnswerIndexes(answerSequence.length);
var allPieceValue = createAllPieceValue(process.argv[2]);

// console.log('answerSequence',answerSequence);
// console.log('answerIndexes',answerIndexes);
// console.log('before',allPieceValue);
answerIndexes.forEach( (index,i_index) => {
  allPieceValue[index] = answerSequence[i_index];
});
// console.log('after',allPieceValue);
