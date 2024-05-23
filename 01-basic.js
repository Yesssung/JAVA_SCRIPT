// 한 줄 주석
/* 여러 줄 주석 : 주석의 사용 방법은 C와 동일하다 */

// console 객체 : 출력 장치에 log 레벨별로 log 출력하는 객체
// log 레벨 : FATAL - ERROR(error) - WARN(warn) - NORMAL(log, info), DEBUG(debug)
console.info("정보 메시지 출력")    // 끝에 ; 있어도 없어도 ok
console.debug("debug 메시지 출력");
console.log("일반 메시지 출력");

console.warn("경고 메시지")         // warn == error -> warn은 당장 오류가 발생하지는 않지만 잠재적 오류 위험 있음
console.error("ERROR 메시지")

// 출력할 내용들을 , 로 구분해서 나열
console.log("String", 2024, true);

console.log(process.version, process.platform);

// ES는 객체 기반언어
// 객체 : 여러 개의 데이터(속성) + 데이터를 다룰 수 있는 기능(메서드)
//        .으로 내부 속성과 메서드에 접근할 수 있다.
console.log(Math.PI)                    // 속성
console.log(Math.max(1, 3, 2, 4, 6))    // 메서드

console.log("----------------------");

// var : ES6 이전 -> 변수의 범위 등 일관성이 없음
// let(가변 : mutable), const(불변 : immutable, 상수)
var testVar;
testVar = "var";
let testLet = "let";
const testConst = "const"; // const는 불변 데이터이기 때문에 선언과 동시에 데이터를 할당해야 한다.

console.log("var, let, const : ", testVar, testLet, testConst);

// 데이터 재 할당
testVar = "var changed";
testLet = "let changed";
// testConst = "const changed";  -> 이 친구는 재할당 불가. 불변 데이터라니깐!

console.log("var, let, const : ", testVar, testLet);

// ES는 Dynamic Type Language
//    -> 데이터가 할당될 때 타입이 결정된다.
//    -> 타입과 무관하게 어떤 객체든 할당가능하다.

// 특정 연산 작업 수행 이전에 데이터 타입을 체크해야 할 필요가 있을 수 있다.
//    -> typeof 연산자
let v = "This is String";
console.log(v, "-",  typeof v);
v = 2024;
console.log(v, "-",  typeof v);
v = 10 > 8;
console.log("10 > 8 ?", v, "->",  typeof v);


