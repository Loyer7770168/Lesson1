const inputNumber = prompt("Введіть число: ");
const parsedNumber = parseInt(inputNumber);

if (!isNaN(parsedNumber)) {
    if (parsedNumber <= 1) {
        console.log(`Число ${parsedNumber} не є простим числом.`);
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(parsedNumber); i++) {
            if (parsedNumber % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`Число ${parsedNumber} є простим числом.`);
        } else {
            console.log(`Число ${parsedNumber} не є простим числом.`);
        }
    }
} else {
    console.log("Ви ввели некоректне число.");
}

