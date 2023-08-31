const userInput = prompt('Enter number');
const parsedInput = parseInt(userInput);
const result = parsedInput;

if (parsedInput % 3 === 0 && parsedInput % 5 === 0) {
    console.log('FizzBuzz');
} else if (parsedInput % 3 === 0) {
    console.log('Fizz');
} else if (parsedInput % 5 === 0) {
    console.log('Buzz');
} else {
    console.log(parsedInput);    
}    
    