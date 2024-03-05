function solution(n, a, b) {
  return a.map((a, i) => {
    return (a | b[i]) // 비트연산자(|) - 비트 중에서 하나라도 1이면 1을 반환한다.
      .toString(2) // 이진수 문자
      .padStart(n, 0) // n ~ 0
      .replace(/0/g, " ") // 0을 빈값으로
      .replace(/1/g, "#"); // 1을 #으로
  });
}
