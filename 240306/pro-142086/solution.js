/**
 * 수도코드
 * 글자 읽는 순서: left -> right
 * 글자 -> split
 * 키, 값 객체 -> index record용
 *
 * 만약 키값이 undefined이면
 * -> -1을 저장
 * -> 값: index 형식으로 저장
 *
 * 만약 키값이 있다면?
 * -> 그 값과 현재 인덱스의 차이를 result에 저장하고
 * -> 그 값: index 형식으로 저장
 * */

function solution(text) {
  const record = {};
  const results = [];

  for (const i in text.split("")) {
    const value = record[text[i]];

    if (value === undefined) results.push(-1);
    else results.push(i - value);
    record[text[i]] = i;
  }
  return results;
}
