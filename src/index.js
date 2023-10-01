function summarize(num) {
  num = typeof num === 'number' ? num : 1;

  return function (x) {
    return num + (typeof x === 'number' ? x : 0);
  };
}

const addFive = summarize(5);
console.log(addFive(3)); 
console.log(addFive());  






