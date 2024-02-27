function printNLines(num) {
    for (let i = 0; i < num; i ++) {
        console.log('12345^&*()_');
    }
}

const fs = require("fs");
let rowNum = Number(fs.readFileSync(0).toString().trim());
printNLines(rowNum);