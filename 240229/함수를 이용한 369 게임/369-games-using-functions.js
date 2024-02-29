function print(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (has369(i) || i % 3 === 0) count++;

    }
    console.log(count);
}

function has369(n) {
    return `${n}`.split('').some((v) => v === '3' || v === '6' || v === '9');
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [n, m] = input.map(Number);
print(n, m);