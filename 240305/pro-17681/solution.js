function getBinaryNum(n, num) {
  const result = [];
  let value = num;

  for (let i = n; i > 0; i--) {
    if (value - 2 ** (i - 1) >= 0) {
      value = value - 2 ** (i - 1);
      result.push(1);
    } else result.push(0);
  }
  return result;
}

function solution(n, arr1, arr2) {
  const result = [];
  for (const i in arr1) {
    const target1 = getBinaryNum(n, arr1[i]);
    const target2 = getBinaryNum(n, arr2[i]);
    let value = "";

    for (const j in target1) {
      value += target1[j] + target2[j] > 0 ? "#" : " ";
    }
    result.push(value);
  }
  return result;
}
