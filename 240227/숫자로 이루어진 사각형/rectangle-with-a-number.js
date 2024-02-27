function printRectNum(num) {
    let count = 0;
    for (let i = 0; i < num; i++) {
        let row = '';
            for (let j = 0; j < num; j++) {
                count++;
                const value = count % 10 ? count % 10 : (count++ % 10) + 1;
                row += j === num - 1 ? `${value}` : `${value} `;
            }
        console.log(row);
        }
}

const fs = require('fs');
let rowNum = Number(fs.readFileSync(0).toString().trim());
printRectNum(rowNum);