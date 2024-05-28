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
// testEverySome();


// 데이터처리 파이프라인
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const source = [12, 4, 19, 33, 86];

// map -> filter -> sort -> reduce
// Map
function testMap(){
    console.log();
    console.log("==================== Map");
    // number 배열의 모든 요소를 2배 하기!
    // 기존 방식 구현
    let multiply = [];
    for (let i = 0; i < numbers.length; i++){
        multiply.push(numbers[i] * 2);
    }
    console.log("기존방식 : ", multiply);
    // map 형태는 그대로 내부 요소 조작(변경)
    let result = numbers.map(item => item * 2);
    console.log("원본 배열 : ", numbers);
    console.log("map 변경 배열 : ", result);
}
// testMap();

// Filter : 내부 요소는 그대로, 조건 만족하는요소만 뽑아서 새배열 생성
function testFilter(){
    console.log();
    console.log("==================== Filter");
    // numbers 배열 요소 중 짝수만 필터링
    let result = numbers.filter(item => item % 2 == 0)
    console.log("원본 배열 : ", numbers);
    console.log("filter 배열(짝수) : ", result);
    console.log("filter 배열(3의 배수) : ", numbers.filter(item => item % 3 == 0));
}
// testFilter();

// Reduce : 순회가 가능한 것에서 항상 쓸 수 있다. / 반복되는 모든 것에는 reduce함수를 적용할 수 있다.
function testReduce(){
    console.log();
    console.log("==================== Reduce");
    console.log("원본 배열 : ", source);
    // source 배열 내부 요소 모두 합산
    let sum = source.reduce((acc, value, index, arr) => { 
        console.log(`이전 값 : ${acc}`);
        console.log(`${arr}의 ${index}요소(index)는 ${value}`);
        return acc + value;                                       // 다음번 callback의 acc 매개변수로 전달
    }, 0);                                                        // (acc, value, index, arr), 초기값
    console.log("합산결과 : ", sum);
}
// testReduce();

// map함수의 기능을 reduce함수로 구현해보쟈 -> 요소 * 2
function testReduce2(){
    console.log();
    console.log("==================== Reduce Map");
    console.log("원본 배열 : ", numbers);
    let result = numbers.reduce((acc, value) => {
        console.log(`callback params (acc: ${acc}, value: ${value})`);
        acc.push(value * 2);
        console.log(`   -> ${acc}`);

        return acc;
    }, []);
    console.log("요소 두배 : ", result);
}
// testReduce2();

// filter함수의 기능을 reduce함수로 구현해보자 -> 짝수 출력하기
function testReduce3(){
    console.log();
    console.log("==================== Reduce Filter");
    console.log("원본 배열 : ", numbers);
    let result = numbers.reduce((acc, value) => {
        if(value % 2 == 0){
            acc.push(value);
        }
        return acc;
    }, [])
    console.log("짝수 : ", result)
}
// testReduce3();

const data = [
    {name: '보라', kor: 85, eng: 92, math: 88},
    {name: '뚜비', kor: 70, eng: 74, math: 95},
    {name: '나나', kor: 91, eng: 89, math: 85},
    {name: '또치', kor: 65, eng: 70, math: 72},
    {name: '둘리', kor: 80, eng: 90, math: 91}
];

function testDataPipeline(){
    console.log();
    console.log("==================== map, filter, sort, reduce TEST");
    console.log("원본 데이터 : ", data);

    // map -> total 파생변수 생성
    const studendtsWithTotal = data.map(student => ({
        ...student,
        total: student.kor + student.eng + student.math
    }));
    console.log("map(총합 점수): ", studendtsWithTotal);

    // filter -> total 240점 이상 추출
    const filterdStudent = studendtsWithTotal.filter(student => student.total >= 240);
    console.log("filter(240 이상): ", filterdStudent);

    // sort -> 성적순으로 정렬
    // const sortedStudent = filterdStudent.sort((a, b) => a.total - b.total);      // ASC
    const sortedStudents = filterdStudent.sort((a, b) => b.total - a.total);         // DESC
    console.log("sort(성적순 정렬): ", sortedStudents);

    // reduce -> 학생 총점의 평균 구하기
    const totalSum = sortedStudents.reduce((acc, student) => acc + student.total, 0);
    console.log("total 240이상 student의 총점: ", totalSum);                        // 보라, 나나, 둘리 의 총점

    const avgTotalScore = totalSum / sortedStudents.length;

    console.log("데이터 파이프라인 구축: ", 
    data.map(student => ({
        ...student,
        total: student.kor + student.eng + student.math
    }))
    .filter(student => student.total >= 240)
    .sort((a, b) => b.total - a.total)
    .reduce((acc, student) => acc + student.total, 0) /3);
    
}
testDataPipeline();


