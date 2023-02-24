// Smallest Common Multiple
/* function smallestCommons(arr) {
  const primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    const currentFactors = getPrimeFactors(i);
    for (let prime in currentFactors) {
      if (!primeFactors[prime] || currentFactors[prime] > primeFactors[prime]) {
        primeFactors[prime] = currentFactors[prime];
      }
    }
  }
  let multiple = 1;
  for (let prime in primeFactors) {
    multiple *= prime ** primeFactors[prime];
  }
  return multiple;
}
function getPrimeFactors(num) {
  const factors = {};
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors[i] = factors[i] ? factors[i] + 1 : 1;
      num /= i;
    }
  }
  return factors;
}
smallestCommons([1, 5]); */

// Drop it
/* function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
}); */

// Steamroller
/* function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
steamrollArray([1, [2], [3, [[4]]]]); */
