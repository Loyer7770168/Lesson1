function sumArrayPromise(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Array.isArray(arr) && arr.length > 0) {
        const sum = arr.reduce((acc, current) => acc + current, 0);
        resolve(sum);
      } else {
        reject("Масив порожній або не є масивом чисел.");
      }
    }, 3000);
  });
}

sumArrayPromise([1, 2, 3, 4, 5])
  .then(result => console.log(result))
  .catch(error => console.error(error));





