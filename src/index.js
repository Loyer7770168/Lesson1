function randomDelayPrint(message) {
  function printLetter(index) {
    if (index < message.length) {
      // Генеруємо випадкову затримку від 0 до 1000 мілісекунд (1 секунда)
      const randomDelay = Math.floor(Math.random() * 1000);
      
      setTimeout(function () {
        console.log(message[index]);
        printLetter(index + 1);
      }, randomDelay);
    }
  }

  printLetter(0);
}

randomDelayPrint("Hello");




