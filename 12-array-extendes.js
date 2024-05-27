// forEach : 배열 내부의 요소들을 하나씩 추출, 콜백 함수로 전달
function testForEach(){
    console.log("================================= testForEach");
    let source = ["Apple", "Banana", "Carrot", "Durian"];       // source라는 배열에 저장했는데

    console.log();
    console.log("================================= 요소들만 전달");
    source.forEach(item => {                                    // forEach로 각각 item으로 callback 되어서 출력
        console.log(item);
    });

    console.log("================================= 요소와 함께 인덱스 전달");
    source.forEach((item, index) => {
        console.log(`${index} -> ${item}`);
    });

    console.log("================================= 요소, 인덱스와 함게 배열 자체도 전달");
    source.forEach((item, index, arr) => {
        console.log(`${index} -> ${item}`, arr);
    });
}
// testForEach();

function testEverySome(){
    console.log();
    console.log("================================= testEverySome");
    let data = [
        {name : "피카츄", age: 200},
        {name : "파이리", age: 201},
        {name : "꼬부기", age: 202}
    ];
    console.log("원본 Data : ", data);

    // data내부의 모든 객체들의 나이가 200살을 초과하는지?
    let result = data.every(obj => {
        return obj.age > 200;           // 검증로직
    });
    console.log("모든 인물의 나이가 200살 초과인가?", result);

    // data내부의 일부 객체들의 나이가 200살을 초과하는지?
    result = data.some(obj => obj.age > 200);
    console.log("일부 인물의 나이가 200살 초과인가?", result);
}
testEverySome();
