// https://school.programmers.co.kr/learn/courses/30/lessons/138477

/**
 * - 수도 코드
 * 수상내역을 저장하는 배열
 * 결과를 저장하는 배열
 * 반복문
 * 수상내역 추가
 * 수상내역 정렬
 * 만약 k + 1번째 데이터인 경우, 최솟값 제거
 * 결과 배열에 최솟값 추가
 **/

function solution(k, score) {
  const result = [];
  const award = [];

  for ([index, num] of score.entries()) {
    award.push(num);
    award.sort((a, b) => a - b);
    if (index >= k) award.shift();
    result.push(award[0]);
  }
  return result;
}
