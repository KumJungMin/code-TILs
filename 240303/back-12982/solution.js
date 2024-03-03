/**
 * 1. exam URL: https://school.programmers.co.kr/learn/courses/30/lessons/12982
 * 2. 수도코드
 *  d를 정렬
 * for을 이용해, budget에서 i를 제거
 * 마이너스 되기 전까지의 count
 */

function solution(d, budget) {
  let answer = 0;
  let leftBudget = budget;
  const sortedD = d.sort((a, b) => a - b);

  for (let i = 0; i < sortedD.length; i++) {
    const currBudget = leftBudget - sortedD[i];
    if (currBudget >= 0) {
      answer++;
      leftBudget = currBudget;
    } else break;
  }
  return answer;
}
