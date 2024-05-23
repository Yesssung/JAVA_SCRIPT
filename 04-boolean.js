// Boolean : true or false
//  - 비교 연산의 결과
//  - 논리 연산의 결과
//  - 논리 조합 : AND(&&), OR(||), NOT(!)

let v1;
let v2 = null;

console.log(typeof v1, typeof v2);                  // v1 -> undefined, v2 -> object
// undefined - 비어있는 것 : 할당 자체가 되지 않은 것 -> 자바스크립트가 사용
// null - 비어있는 것 : null이라는 객체가 할당된 것   -> 개발자가 직접 할당하는 것

console.log(v2, typeof v2, v2 == null);             // null 체크 : 객체 == null
v2 = undefined;                                     // 개발자가 임의로 undefined 상태로 설정하기도 한다.
console.log(v2, typeof v2 == undefined);            // undefined 체크 : 객체 == undefined

// == : 타입과 상관없이 값(내용)을 비교
// === : 타입과 값을 함께 비교

console.log(123 == "123");                          // -> true 내용의 모양이 같기 때문
console.log(123 === "123");                         // -> false 모양은 같지만 타입이 다르기 때문 앞: number / 뒤: string

// number, string 의 값이 있으면 true, 값이 없으면 false
console.log(Boolean("JavaScript"), Boolean(""));    // 앞: string 데이터 있으므로 true / 뒤: false
console.log(Boolean(2024), Boolean(0));             // 앞: number 데이터 있으므로 true / 뒤: false


// Short-Curcuit 선택 기법
// 언제 사용? -> Front-End 선택적 렌더링 할 때 -> 특정 조건을 만족하면 뒤에거 렌더링 해 or 하지마
console.log(true && "TEST");                        // -> TEST  
console.log(false && "TEST");                       // -> false / 앞에 false가 나온순간 뒤에는 볼 것도 없이 false 임

console.log(true || "TEST");                        // -> true / 앞에 true가 나온순간 뒤에는 볼 것도 없이 true 임
console.log(false || "TEST");                       // -> TEST
