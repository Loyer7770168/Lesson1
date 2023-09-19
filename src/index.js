function capitalizeStrings(arr) {
  const capitalizedArray = [];

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    capitalizedArray.push(capitalizedWord);
  }

  return capitalizedArray;
}

const words = ["apple", "banaNA", "kiWi", "ORANGE"];
const result = capitalizeStrings(words);
console.log(result);

