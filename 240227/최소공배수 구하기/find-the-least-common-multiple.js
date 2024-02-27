function getGreatestCommonDivisor(n, m) {
  if (!m) return n;
  else return getGreatestCommonDivisor(m, n % m);
}

// 최소공배수 = 두 자연수의 곱 / 최대공약수
function getLeastCommonMultiple(n, m) {
  const gcd = getGreatestCommonDivisor(n, m);
  return (n * m) / gcd;
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [v1, v2] = input.map(Number);

console.log(getLeastCommonMultiple(v1, v2));