const numbers = [12, 25, 7, 18, 30, 5]

let smallnumbers = numbers.filter(num => num < 20)
console.log(smallnumbers);

let numbersTimesTwo = smallnumbers.map(num => num * 2)
console.log(numbersTimesTwo);