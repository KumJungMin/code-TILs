function print(a, b) {
    let sum = 0;
    if (a > 1) {
        for (let i = a; i <= b; i++) {
            if (isPrime(i)) sum += i;
        }
    }
    console.log(sum);
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [n, m] = input.map(Number);
print(n, m);