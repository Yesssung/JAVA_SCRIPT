// 배열의 생성 
// 방법1 : new 키워드
const v1 = new Array(10);                               // 10개짜리 배열
const v2 = new Array();                                 // 빈 배열
const v3 = new Array(2024, "String", true)              // 초기값이 있을 때 어떤 객체도 다 ok(함수도 가능)
console.log(v1, v1.length, typeof v1);
console.log(v2, v2.length, typeof v2);
console.log(v3, v3.length, typeof v3);

// 방법2 : literal로 생성 (추천)
const v4 = [];
const v5 = ["red", "green", "blue", "yellow"];
console.log(v4, v4.length);
console.log(v5, v5.length);

// ES특성상 변수가 참조하는 객체의 TYPE 체크가 필요
console.log(typeof v5);

// 주로 Array 판별 함수를 이용, 배열 여부를 판단
console.log("is v5 Array?", Array.isArray(v5));       

// ES의 경우 객체 속성도 배열(맵)처럼 사용할 수 있음
const person = {
    name: "꼬부기",
    age: 200
};

console.log(person.name, person.age);
console.log(person['name'], person['age']);               // 객체의 속성을 배열처럼

// ES 배열은 인덱스 범위를 엄격하게 체크하지 않음
// 인덱스 범위를 벗어난 접근도 허용한다.

const v6 = [];
console.log(v6, v6.length);
v6[10] = 2024;

console.log(v6, v6.length);                              // 10번째 자리에 2024 넣어라! -> 그 앞에는 빈칸이기 때문에 empty로 나오고 10번째에 2024출력됨!

console.log("==================================== Array 주요 메서드");
// concat : 배열 합치기
const veges = ["무", "배추", "쪽파"];
console.log(veges, veges.length);
const source = ["소금", "고춧가루", "새우젓"];
console.log(source, source.length);

// veges.concat(source);                                // 새로운 변수에 재할당 필요
const ingr = veges.concat(source);
console.log(ingr, ingr.length);

// join : 배열 내부의 요소(item)을 한 문장으로 합쳐준다.
console.log(ingr, "-> 김장재료: ", ingr.join(", "));    // 구분자 , 를 기준으로 한 문장으로 출력되게 해준다!