function isPalindrome(number) {
  const reverseNumber = parseInt(number.toString().split('').reverse().join(''), 10);
  return number === reverseNumber;
}

function findPalindrome(seed) {
  let currentNumber = seed;
  let steps = 0;

  while (steps < 1000) {
    const reverseNumber = parseInt(currentNumber.toString().split('').reverse().join(''), 10);
    const sum = currentNumber + reverseNumber;

    if (isPalindrome(sum)) {
      return { result: sum, steps };
    }

    currentNumber = sum;
    steps++;
  }

  return { result: null, steps: -1 };
}

const result = findPalindrome(196);
console.log(result);




