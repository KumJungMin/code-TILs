function printRect(n, m) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < m; j++) {
      row += '1';
    }
    console.log(row);
  }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [rowNum, colNum] = input.map(Number);
printRect(rowNum, colNum);