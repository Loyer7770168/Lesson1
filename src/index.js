function doubleLetter(str) {
    return str.replace(/./g, '$&$&');
  }
  const inputString = prompt('Введіть рядок:');
  const doubledString = doubleLetter(inputString);
  console.log(doubledString);