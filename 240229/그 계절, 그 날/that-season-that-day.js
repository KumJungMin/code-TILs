// Date.parse()로 유효한 날짜인지 확인
function print(y, m, d) {
    const isValidDt = !isNaN(Date.parse(`${y}-${m}-${d}`));
    return isValidDt ? getSeason(m) : -1;
}

function getSeason(m) {
    if (m >= 3 && m <= 5) return 'Spring';
    else if (m >= 6 && m <= 8) return 'Summer';
    else if (m >= 9 && m <= 11) return  'Fall';
    else return 'Winter';
}


const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [y, m, d] = input.map(Number);
console.log(print(y, m, d));