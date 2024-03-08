// shift -> i, j

function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;

  for (const idx in goal) {
    if (cards1[i] === goal[idx]) i++;
    else if (cards2[j] === goal[idx]) j++;
    else return "No";
  }
  return "Yes";
}
