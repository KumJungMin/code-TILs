// k번째의 배열 값을 리턴
// k번 반복
// 0, 2, 4, 6, 8, 10, 12, 14 -> 2의 배수번

// 배열 길이가 3일 떄
//
// 0 - 0    0 % 3 = 0
// 2 - 2    2 % 3 = 2
// 4 -> 1   4 % 3 = 1
// 6 -> 0   6 % 3 = 0

// 배열 길이가 4일 때
// [1, 2, 3, 4]

// 0 - 0
// 2 - 2
// 4 -> 1
// 6 -> 2

function solution(arr, k) {
  if (k === 0) return arr[0];
  else {
    const targetIdx = ((k - 1) * 2) % arr.length;
    return arr[targetIdx];
  }
}
