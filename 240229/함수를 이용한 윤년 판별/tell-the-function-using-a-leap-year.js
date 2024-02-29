function isLeapYear(n) {
    if (n % 4 === 0) return true;
    else return n % 100 === 0 && n % 400;
}


const fs = require('fs');
let rowNum = Number(fs.readFileSync(0).toString().trim());
console.log(isLeapYear(rowNum));