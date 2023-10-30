function* fibonacci(n) {
  let prev = 0;
  let current = 1;
  while (n > 0) {
    yield prev;
    const next = prev + current;
    prev = current;
    current = next;
    n--;
  }
}

const fibGen = fibonacci(10);

console.log(fibGen.next().value); 
console.log(fibGen.next().value);  
console.log(fibGen.next().value); 
console.log(fibGen.next().value); 
console.log(fibGen.next().value); 







