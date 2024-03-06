function isPrime(N) {
  if (N === 1) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  return true;
}

// 서로 다른 n개의 원소 중에서 r개를 중복 없이 골라 순서에 상관없게 나열하는 경우의 수 (nPr)
function combinationRecursion(list, n) {
  const result = [];

  function helper(items, index) {
    if (items.length === n) {
      result.push(items);
      return;
    }
    for (let i = index; i < list.length; i++) {
      helper([...items, list[i]], i + 1);
    }
  }
  helper([], 0);

  return result;
}

function solution(arr) {
  const samples = combinationRecursion(arr, 3);
  const primeList = samples.filter((data) => {
    const sum = data.reduce((a, b) => a + b, 0);
    return isPrime(sum);
  });

  return primeList.length;
}
