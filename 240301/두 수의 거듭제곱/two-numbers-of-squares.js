function print(a, b) {
    console.log(a**b);
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [n, m] = input.map(Number);
print(n, m);