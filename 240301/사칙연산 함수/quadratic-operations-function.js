function print(a, o, c) {
    if (o === '+') console.log(`${a} + ${c} = ${a + c}`);
    else if (o === '-') console.log(`${a} - ${c} = ${a - c}`);
    else if (o === '/') console.log(`${a} / ${c} = ${Math.floor(a / c)}`);
    else if (o === '*') console.log(`${a} * ${c} = ${a * c}`);
    else console.log('False');
}


const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [a, o, c] = input;
print(+a, o, +c);