// String
const s1 = "Modern JavaScript and Java";            // 리터럴 생성
const s2 = String("Modern JavaScript and Java")     // 타입 함수 이용 생성

console.log(typeof s1, typeof s2);

// .length : 문자열 길이 확인하는 속성
console.log("String: ", s1, ", length: ", s1.length);

// 문자열 추출 메서드
// charAt : 특정 index에 위치한 문자 추출하기
console.log(s1.charAt(7));          // s1문장에서 7번째 알파벳 출력

// ES의 배열 : s1 문장자체를 JAVA에서의 배열처럼 생각해도 된다. 
console.log(s1[7])                  // -> s1의 7번째 배열 뽑아주

console.log(s1.substr(7, 10));      // 7번 index부터 10개의 문자를 추출 -> 더이상 사용x (deprecated)
console.log(s1.substring(7, 17));   // 7번부터 17번까지 추출
console.log(s1.substring(7));       // 7번부터 끝까지 추출

// 문자열 검색
let position;
position = s1.indexOf("Java");                              // Java는 몇번째에 위치하는가?
console.log("1st search: ", position);  
position += 4;                                              // 7번째부터 +4 한 위치부터 다시 검색
position = s1.indexOf("Java", position);                    // 검색어, 검색 시작 위치
console.log("2nd search: ", position);

console.log("No Keyword: ", s1.indexOf("java"));            // -1 찾는 검색어 없음
console.log("lastIndexOf : ", s1.lastIndexOf("Script"));    // 검색 방향 뒤부터

// 문자열 치환
console.log(s1.replace("JavaScript", "JS"));                // 검색어, 바꿀 문자열
console.log(s1);                                            // 내부 데이터를 변경하는 것이 아니라 변경된 문자열을 새로 생성해서 반환하는 것

// 변경된 데이터를 뒤에서도 사용하고자 한다면 재할당 후 사용
const s1_changed = s1.replace("JavaScript", "JS");          // s1의 JavaScript를 JS로 치환한 결과를 재배당
console.log(s1, s1_changed);

// trim : 화이트스페이스(WhiteSpace) 공백, 탭, 개행 등 제거
console.log("     HELLO     " .trim());

// ES String 보충
// Escape(이스케이프) : 키보드로 입력 불가하거나 특수한 의미를 가진 문자 \로 표기
// \n : 개행
// \t : 탭
// \' : '
// \" : "
// \` : 백틱(키보드 ESC 밑에 있음)
// \$ : 템플릿 문자
console.log("\n======================= Escape 문자열");
let message = 'He said, "HELLO"';   // 방법1
console.log(message);
message = "He said, \"HELLO\""      // 방법2
console.log(message);

message = "I'm going";
console.log(message);
message = 'I\'m going';
console.log(message);

// 여러줄 문자열 -> ` 사용
console.log("\n======================= ` 문자열");
message = "예전에는 \n" + 
          "여러줄 문자열을 \n" +
          "만드는 것이 쉽지 않았";
message = "예전에는 \n 여러줄 문자열을 \n 만드는 것이 쉽지 않았"
console.log(message);

message = `하지만 ES6 이상에서는
           아주 손쉽게 
           여러줄 문자열을 만들 수 있`;
console.log(message);

// 템플릿 문자열 -> $ + `같이 사용
console.log("\n====================== Template 문자열");
let temp = 24;
message = "현재 실내 온도는 " + temp +"도 입니다."      // 일반적 방법
console.log(message);

// ${변수명} or ${연산식} -> 실행 결과가 문자열에 포함된다.
message = `현재 실내 온도는 ${temp}도 입니다.`;
console.log(message);
