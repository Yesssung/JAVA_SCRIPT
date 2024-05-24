// 연습문제 1. 구구단 2단부터 9단까지 출력해보기 (for문, while문)
// for문
// console.log("============================ for");
// for(let i = 2; i < 10; i++){
//     console.log(i + "단");
//     for( let num = 1; num < 10; num++){
//         console.log(i + " * " + num + " = " + (num * i));
//     }
// }
// console.log("============================ while");
// let i = 2;
// while( i < 10){
//     console.log(i + "단");
//     let num = 1;
//     while ( num < 10){
//         console.log(`${i} * ${num} = ${i*num}`);
//         num++;
//     }
//     i++;
// }


// 연습문제 2. 역삼각형 별 출력 (for문, while문)
console.log("============================ for 별");
for(let i = 5; i > 0; i--){
    let stars = "";
    for(let a = 1; a <= i; a++){
        stars += "*";
    }
    console.log(stars)
}

// console.log("============================ while 별");
// let i = 5;
// while (i > 0){
//     let stars = "";
//     let a = 1;

//     while(a <= i){
//         stars += "*";
//         a++;
//     }
//     console.log(stars);
//     i--;
// }

// for in : 객체 내부요소 순회
// for of : 배열 요소 값