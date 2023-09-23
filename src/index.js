function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log(`Збережений результат для аргументів: ${args}`);
      return cache.get(key);
    } else {
      console.log(`Обчислення та збереження результату для аргументів: ${args}`);
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}

function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(4, 5)); 
console.log(memoizedAdd(4, 5)); 
 


