function getGreatestCommonDivisor(n, m) {
  if (!m) return n;
  return getGreatestCommonDivisor(m, n % m);
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [n, m] = input.map(Number);
console.log(getGreatestCommonDivisor(n, m));