var birds = [1,2,3,4,5];
var shots = [4,5,6,7,8];
var a = [1,3,6,7,8,9].filter((c) => !birds.some((b) => c === b) &&!shots.some((s) => c === s))
console.log('a',a);
