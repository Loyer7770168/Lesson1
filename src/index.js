function logArguments(fn) {
  return function (...args) {
    console.log('Аргументи функції:', args);
    return fn(...args);
  };
}

function add(a, b) {
  return a + b;
}

const decoratedAdd = logArguments(add);

console.log(decoratedAdd(2, 3));






