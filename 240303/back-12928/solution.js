/**
 * 1. exam URL: https://school.programmers.co.kr/learn/courses/30/lessons/12982
 * 2. 수도코드
 * 중복없고 순회가능 - Set
 * n % = 0
 * n의 half만 탐색
 */

function solution(n) {
  if (n < 2) return n;

  let answer = 0;
  const set = new Set([]);
  const end = Math.floor(n / 2);

  for (let i = 1; i <= end; i++) {
    if (n % i) continue;

    set.add(i);
    set.add(n / i);
  }
  set.forEach((v) => (answer += v));

  return answer;
}
