const randomArray = [];

for (let i = 0; i < 10; i++) {
  randomArray.push(Math.floor(Math.random() * 900) + 100);
}
const numbers = randomArray;

numbers.sort((a, b) => a - b);

const secondLargest = numbers[numbers.length - 2];
const secondSmallest = numbers[1];

console.log(`The 2nd largest number is: ${secondLargest}`);
console.log(`The 2nd smallest number is: ${secondSmallest}`);
