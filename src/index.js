function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

const input = prompt("Введіть елементи масиву, розділені комою (,)");
const originalArray = input.split(',').map(item => parseInt(item.trim()));

const reversedArray = reverseArray(originalArray);
console.log(reversedArray);
