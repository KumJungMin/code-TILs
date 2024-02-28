function isMultipleOfFive(num) {
    const numArr = num.toString().split('');
    const msg = (+numArr[0] + +numArr[1]) % 5 ? 'No' : 'Yes';
    console.log(msg);
}


const fs = require('fs');
let rowNum = Number(fs.readFileSync(0).toString().trim());
isMultipleOfFive(rowNum);