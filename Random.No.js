const randomArray = [];

for (let i = 0; i < 10; i++) {
  randomArray.push(Math.floor(Math.random() * 900) + 100);
}
const numbers = randomArray;

let largest = 0;
let smallest = 0;
let secondLargest = 0;
let secondSmallest = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    secondLargest = largest;
    largest = numbers[i];
  } else if (numbers[i] > secondLargest && numbers[i] != largest) {
    secondLargest = numbers[i];
  }

  if (numbers[i] < smallest) {
    secondSmallest = smallest;
    smallest = numbers[i];
  } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
    secondSmallest = numbers[i];
  }
}
console.log(`The 2nd largest number is: ${secondLargest}`);
console.log(`The 2nd smallest number is: ${secondSmallest}`);
