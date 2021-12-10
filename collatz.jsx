const total = 100000000;

// Start the clocks
const start = new Date().getTime();

// The fun bit
const collatzConjecture = (index) => {
  var check = [index];

  while (check[check.length - 3] !== 4 && check[check.length - 2] !== 2 && check[check.length] !== 1) {
    const nextNumber = check[check.length - 1];

    if (nextNumber % 2 === 0) {
      const even = nextNumber / 2;
      check.push(even);
    } else {
      const odd = nextNumber * 3 + 1;
      check.push(odd);
    }
  }

  // Any that disprove the theory? (This should theoretically never run...)
  if (check.length === undefined) {
    console.log(`${index} failed.`);
  }

  // Exit condition
  if (total === index) {
    console.log("Execution time:", `${new Date().getTime() - start}ms`)
  }
}

// Loop through the total and check each number
for (let i = 0; i < total; i++) {
  collatzConjecture(i + 1);
}