function printMin(n, m, l) {
    console.log(Math.min(n, m, l));
}



const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [n, m, l] = input.map(Number);
printMin(n, m, l);