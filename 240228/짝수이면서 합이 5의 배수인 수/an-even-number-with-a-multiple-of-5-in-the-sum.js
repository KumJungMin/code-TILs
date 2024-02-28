function isMultipleOfFive(num) {
    const numArr = num.toString().split('');
    const sum = +numArr[0] + +numArr[1];
    const msg = !(sum % 5) && !(sum  % 2) ? 'Yes' : 'No';
    console.log(msg);
}


const fs = require('fs');
let rowNum = Number(fs.readFileSync(0).toString().trim());
isMultipleOfFive(rowNum);