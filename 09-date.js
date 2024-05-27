// Date : 날짜, 시간을 다루는 내장 객체
let now = new Date();                    // 현재 시간
console.log(now);                        // 표준시출력 -> GMT +9:00 해야함(난 지금 한국이니껜)

let time = new Date(2024, 5 - 1, 27)     // 년, 월(0부터 시작 -> 5월 하고 싶으면 5-1 해야함 ), 일
console.log(time);

time = new Date(2012, 8, 24, 13, 30, 0)  // 년, 월, 일, 시, 분, 초
console.log(time);

// 년, 월, 일, 요일, 시, 분, 초, 밀리세컨드
// getter와 setter
console.log("현재시간: ", now);
console.log("년도: ", now.getFullYear());
console.log("월: ", now.getMonth() + 1); // 월은 0부터 시작
console.log("일: ", now.getDate());
console.log("요일: ", now.getDay());       // 일요일 : 0

//
console.log(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());