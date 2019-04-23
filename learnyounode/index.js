function sum(arr) {
  let sum = arr.reduce((p, v) => {
    return p + Number(v);
  }, 0);
  return sum;
}

let [a, b, ...params] = process.argv;

let total = sum(params);
console.log(total);
