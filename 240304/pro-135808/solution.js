// https://school.programmers.co.kr/learn/courses/30/lessons/135808?language=javascript
/**
 * - 수도코드
 * 내람차순 정렬
 * 3번째 데이터로 곱하기
 * 3개로 묶이지 않는 나머지 데이터는 버리기 -> for문 ++ 이용
 * */

function solution(k, m, score) {
  let result = 0;
  const sort = [...score].sort((a, b) => b - a);

  for (let i = m - 1; i < score.length; i += m) {
    result += sort[i] * m;
  }
  return result;
}
