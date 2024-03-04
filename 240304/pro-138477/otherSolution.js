/**
 * 배열 형태로 데이터 중첩할 때는 reduce로 케어 가능
 */

function solution(k, score) {
  const award = [];

  return score.reduce((acc, num) => {
    award.push(num);
    award.sort((a, b) => a - b);
    if (award.length > k) award.shift();

    acc.push(award[0]);
    return acc;
  }, []);
}
