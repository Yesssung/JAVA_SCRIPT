// 함수 선언문
// 함수 선언
function sum(a, b){     // 함수 이름(매개변수)
    return a + b;
}
// 함수 호출
console.log(sum(3, 5));

// 함수 표현식 -> 익명 함수
// 함수도 객체다 (함수도 1급 시민)
//    -> 다른 객체들과 동등한 권리와 지위를 가진다.
//    -> 변수에 할당 될 수 있다.
//    -> 다른 함수의 매개변수로 전달될 수 있다.
const asum = function(a, b){
    console.log(typeof a, typeof b)
    return a + b;
}

console.log(typeof asum);
console.log(asum(10, 30));

// 함수의 매개변수 이해
// ES의 함수는 선언부에 선언된 매개변수의 개수와 맞지 않게 호출해도 된다.
console.log(asum());

// 매개변수가 없는 함수 
function getNumberTotal(){
    // ES 특성상 전달되는 모든 arguments 함수 객체에 모두 전달
    // console.log("arguments: ", arguments);
    // 전달받은 매개변수 전체를 합산
    let result = 0;
    for(let i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] === "number") { // 매개변수의 타입이 숫자일 때만 합산
            result += arguments[i];
        }
    }  
    return result;
}
console.log(getNumberTotal(1, 2, 3, 4, 5));
console.log(getNumberTotal(1, 2, "3", 4, 5)); // -> 3345출력 앞에 두개는 더하고 뒤에는 그대로 출력("3"부터는 문자열로 인식해서 걍 붙혀서 나옴)

// 함수는 객체 -> 변수에 할당되거나 다른 함수의 매개변수로 전달될 수 있다.
function calculator(a, b, func){              // -> func -> 계산식 함수
    if(typeof func === "function"){
        console.log(func(a, b));
    } else {
        console.log("???")
    }
}
calculator(10, 20);
calculator(10, 20, function(v1, v2){
    return v1 + v2;
});

// 함수 보충
console.log("============================= 화살표 표기법"); 
// 매개변수 목록 => 구현 내용
const f1 = function(){
    return "HELLO";     
}
console.log(f1());

// 매개변수 x, return o
const f1_arrow = () => "HeLLO";
console.log(f1_arrow());

//////////////////////////////////////////////////////////////////////

const f2 = function(name){
    return "HELLO, " + name;
}
console.log(f2("파이리"));

// 매개변수 o(1개), return o
const f2_arrow = name => "HELLO, " + name;
console.log(f2_arrow("꼬북이"));

//////////////////////////////////////////////////////////////////////

const f3 = function(a, b){
    return a + b;
}
console.log(f3(10, 20));

// 매개변수 여러개 ->  블록{} 을 잡을 수 있다.
// 블록이 잡히면 return을 명시해야 한다(생략할 수 없다.)
const f3_arrow = (a, b) => {
    console.log("화살표 함수");
    return a + b;
};

// 콜백 함수에 화살표 함수로 계산식 정의
calculator(10, 20, (v1, v2) => v1 + v2);
calculator(10, 20, (v1, v2) => v1 * v2);

// 콜백 함수 활용 -> Array 추가 강의

