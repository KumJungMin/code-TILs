function printSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    const result = Math.floor(sum / 10);
    console.log(result);

}



const fs = require('fs');
let num = Number(fs.readFileSync(0).toString().trim());
printSum(num);