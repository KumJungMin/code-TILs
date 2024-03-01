function print(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (!isInValidNum(i)) count++;
    }
    console.log(count);
}

function isInValidNum(n) {
    if (n % 2 === 0 || n % 10 === 5) return true;
    else return (n % 3 === 0) && (n % 9);
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [n, m] = input.map(Number);
print(n, m);