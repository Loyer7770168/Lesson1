function reverseString(str) {
    return str.split('').reverse().join('');
}

const inputString = prompt("Введіть рядок:");

if (inputString !== null) {
    const reversedString = reverseString(inputString);
    console.log(`Зворотній рядок: ${reversedString}`);
} else {
    console.log("Ви скасували введення рядка.");
}