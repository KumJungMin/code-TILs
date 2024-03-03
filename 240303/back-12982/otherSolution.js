function solution(num) {
  let sum = 0;
  // 놓친 점: n번 순회해서 나머지가 0일 떄 값을 더해주면 중복되지 않는 약수를 더하는 거임!
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum;
}
