console.log();
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

console.log();
console.log("================================ 배열의 전개");
console.log("원본배열 : ", combined);

// 배열 전개
let [first, second, third = "empty", ...other] = arr1;    // empty = 기본값  / other = 나머지     
console.log(first, second, third, other);          

[first, second, third = "empty",...other] = combined;
console.log(first, second, third, other);

console.log();
console.log("================================ 객체 전개 연산");
let obj1 = {one: 1, two:2, other: 0};
let obj2 = {three: 3, four:4, other: -1};

console.log("obj1: ", obj1);
console.log("obj2: ", obj2);

// 기존 방식 : 방법 1
combined = {
    one: obj1.one,
    two: obj1.two,
    three: obj2.three,
    four: obj2.four,
    other: obj1.other
};
console.log("기존방식 : ", combined);

// 기존 방식 : 방법 2 -> assign 순서에 따라 덮어쓰는 순서가 달라진다.
combined = Object.assign({}, obj1, obj2);
console.log("기존방식2 : ", combined);

// 전개 순서에 유의하자 순서가 바뀐다.
combined = {
    ...obj1,                // obj1의 모든 속성을 전개  
    ...obj2                 // obj2의 모든 속성을 전개
}
console.log("전개연산자 활용 : ", combined);

// 특정 속성 제거
delete combined.other;      // other 속성 제거
console.log(combined);

// 객체 속성 전개
let{one, three, five, ... rest} = combined;
console.log(one, three, five, rest);