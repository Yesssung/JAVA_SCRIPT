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
console.log(ingr, "-> 김장재료: ", ingr.join(", "));    // 구분자(괄호 안) 를 기준으로 한 문장으로 출력되게 해준다!

// push, pop -> Stack 자료형처럼 활용 가능
// Stack : Last Input First Out (LIFO 자료형)
console.log("==================================== push, pop, shift, splice")
let fruits = [];

// push : 배열 맨 뒤에 추가
console.log(fruits.push("Apple"), fruits);
console.log(fruits.push("Banana"), fruits);
console.log(fruits.push("Carrot"), fruits);

// pop : 배열의 뒤에서부터 인출하고 인출된 데이터는 배열에서 삭제된다.
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);

// push, shift -> queue 자료형처럼 사용 가능
// queue : 가장 먼저 입력된 데이터가 가장먼저 출력된다. -> First Input First Out(FIFO 자료형) 
console.log(fruits);
console.log(fruits.push("Apple"), fruits);
console.log(fruits.push("Banana"), fruits);
console.log(fruits.push("Carrot"), fruits);

// shift : 배열의 첫번째 요소를 인출하고 인출한 데이터는 배열에서 삭제한다.
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);

//  splice : 배열 요소 인출 후 삭제, 추가를 동시에 할 수 있는 메서드
fruits = ["Apple", "Banana", "Carrot", "Durian"];
// splice 인수가 1개일 경우 : 시작인덱스를 의미 ->  시작부터 끝까지 출력 후 해당내용 삭제
console.log(fruits.splice(2));
console.log(fruits);

// splice 인수가 2개일 경우 : 시작인덱스, 개수 -> 시작부터 개수만큼만 출력
fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);
console.log(fruits.splice(2, 1));
console.log(fruits);

// splice 인구사 3개 이상인 경우 : 시작인덱스, 개수, 추가할 요소들 
fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);
console.log(fruits.splice(2, 1, "Kiwi", "Mango"));
console.log(fruits);

console.log("==================================== reverse, slice, split")
// reverse : 순서 반전
fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);
fruits.reverse();
console.log(fruits);

// slice : 배열의 요소를 추출해서 새 배열 생성! -> 데이터가 삭제되지 않고 원본배열은 유지된다.
console.log(fruits);
let slice = fruits.slice(1, 2);
console.log(slice);
console.log(fruits);

// split : 구분자를 기준으로 문자열을 분리해서 새 배열 생성
const str = "JavaScript is something strange than other languages";
let chunks = str.split(" ");    // 공백을 기준으로 분리
console.log(chunks);

// sort : 정렬하기(기본 오름차순 정렬)
console.log("==================================== sort");
fruits = ["Carrot", "Durian", "Apple", "Mango", "Kiwi", "Banana"];
console.log("원본배열: ", fruits);
fruits.sort();  
console.log("ASC정렬 : ", fruits);
// 정렬 규칙을 변경하고 싶다면?
// 정렬 기준 함수를 매개변수로 전달해야 함
console.log("");
fruits = ["Carrot", "Durian", "Apple", "Mango", "Kiwi", "Banana"];
console.log("원본배열: ", fruits);
fruits.sort((v1, v2) => {
    // key 함수 : 두개 요소의 선후 관계 결정
    // return 값 : 음수 -> v1이 앞에 온다
    //             양수 -> v1이 뒤에 온다 (v2가 앞에 온다)
    //             0 -> 순서 안바뀜(순위가 같다)
    if(v1 < v2) return 1;
    if(v1 > v2) return -1;
    if(v1 == v2) return 0;

});
console.log("DESC정렬: ", fruits);

fruits.sort((v1, v2) => {
    return v1.length - v2.length;
});
console.log("문자열 길이로 정렬: ", fruits);
