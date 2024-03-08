// 두 배열에서 순서대로 탐색해서 원하는 단어를 만듬

// 단어를 기준으로 반복문
// 각 배열에서 확인 후 -> 해당하는 단어가 있으면 shift() -> 모든 순회를 완료하여 Yes
// 해당하는 단어가 두 곳에서 다 없으면 No

function solution(cards1, cards2, goal) {
  const copiedCard1 = [...cards1];
  const copiedCard2 = [...cards2];

  for (let word of goal) {
    if (copiedCard1[0] === word) copiedCard1.shift();
    else if (copiedCard2[0] === word) copiedCard2.shift();
    else return "No";
  }
  return "Yes";
}
