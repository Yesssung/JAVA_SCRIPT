console.log("");
console.log("================================ 배열의 전개 연산");

let arr1 = ["피카츄", "파이리"];
let arr2 = ["꼬북이", "리자몽"]

console.log(arr1, arr2);

// 위 두개의 배열을 합치고 싶다면?
// 기존 방식 -> 모든 데이터를 알고있다고 가정하기 때문에 추천하지 않는다.
// combine
let combined = [];                                        // 새로운 배열을 만들고
combined = [arr1[0], arr1[1], arr2[0], arr2[1]]           // 요소들 추출해서 넣어주기
console.log(combined);

// concat : 배열 연결시키기
combined = [].concat(arr1, arr2);
console.log(combined);

// 새로운 방식 -> EX Next(추천) : 전개 연산자 활용
combined = [...arr1, ...arr2];
console.log(combined);

console.log("");
console.log("================================ 배열의 전개");
console.log("원본배열 : ", combined);

// 배열 전개
let [first, second, third = "empty", ...others] = arr1;    // empty = 기본값  / other = 나머지     
console.log(first, second, third, others);          

[first, second, third = "empty",...others] = combined;
console.log(first, second, third, others);

console.log("================================ 객체 전개 연산");
let obj1 = {one: 1, two:2, other: 0};
let obj2 = {three: 3, four:4, other: -1};

console.log("obj1: ", obj1);
console.log("obj2: ", obj2);