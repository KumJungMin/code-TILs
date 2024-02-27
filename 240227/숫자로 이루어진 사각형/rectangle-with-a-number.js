function printRectNum(num) {
    let count = 1;

    for (let i = 0; i < num; i++) {
        let row = '';
            for (let j = 0; j < num; j++) {
                const value = count++ % 10;
                row += j === num - 1 ? `${value}` : `${value} `;
            }
    console.log(row);
    }
}

const fs = require('fs');
let rowNum = Number(fs.readFileSync(0).toString().trim());
printRectNum(rowNum);