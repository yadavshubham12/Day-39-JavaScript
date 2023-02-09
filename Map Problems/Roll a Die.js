function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }
  const results = new Map();
  while (true) {
    const result = rollDie();
    if (!results.has(result)) {
      results.set(result, 1);
    } else {
      results.set(result, results.get(result) + 1);
    }
    const maxCount = Math.max(...results.values());
    if (maxCount === 10) {
      break;
    }
  }
  console.log("Results: ", results);
  
  const maxNumber = [...results.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  const minNumber = [...results.entries()].reduce((a, b) => (a[1] < b[1] ? a : b))[0];
  
  console.log(`The number that reached the maximum times is: ${maxNumber}`);
  console.log(`The number that reached the minimum times is: ${minNumber}`);
  