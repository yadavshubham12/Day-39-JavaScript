function generateMonth() {
  return Math.floor(Math.random() * 12) + 1;
}

const birthMonths = [];
for (let i = 0; i < 50; i++) {
  birthMonths.push(generateMonth());
}

const monthCounts = new Map();
for (const month of birthMonths) {
  if (!monthCounts.has(month)) {
    monthCounts.set(month, 1);
  } else {
    monthCounts.set(month, monthCounts.get(month) + 1);
  }
}

const sameMonthIndividuals = [];
for (const [month, count] of monthCounts) {
  if (count > 1) {
    sameMonthIndividuals.push(month);
  }
}

console.log(`The birth months of the 50 individuals are: [${birthMonths}]`);
console.log(`The months with multiple individuals having birthdays are: [${sameMonthIndividuals}]`);
