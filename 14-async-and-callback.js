// callback 처리
function logicA(){
    console.log("Begin logic A");

    // 비동기
    setTimeout(() => {
        console.log("\t CallBack A Called");
        console.log("\t Begin logic B");

        setTimeout(() => {
            console.log("\t\t CallBack B Called");
        }, 2000);

        console.log("\t End logic B");
    }, 2000);

    console.log("End logic A");
}
// logicA();

// 비동기처리를 동기방식처럼 호출하기 위해 마련된 객체 -> Promise
// Pending, Fullfill, Reject
function logicPromise(){
    console.log("Begin LogicPromise");

    // Promise 객체 return
    return new Promise((resolve, reject) => {
        // resolve 함수 -> fullfill 상태로 이전시키는 역할
        // reject 함수 -> reject 상태로 이전시키는 역할
        console.log("Begin LogicPromise");
        // 비동기
        setTimeout(() => {
            // 내부 로직 수행
            // resolve("RESOLVE");
            reject("REJECTED")
        }, 3000);

        console.log("End LogicPromise");
    });
}

function testLogicPromise(){
    console.log("Test LogicPromise");

    logicPromise()                       // Promise를 반환하는 함수(혹은 객체)
    .then(value => {                     // Promise 내부에서 Resolve 함수로 전달해 준 값(fullfill 상태로 전달)
        console.log("PROMISE RESOLVE: ", value);
    })
    . catch(reason => {                  // Promise 내부에서 Reject 함수로 전달해 준 값(rejected 상태로 전달)
        console.log("PROMISE REJECT: ", reason);
    });

}
// testLogicPromise();

// async / await
//  -> Promise를 손쉽게 사용하기 위한 키워드
// async 함수는 비동기 처리를 위해 Promise를 생성한다
async function f(){
    console.log("async funtion");
    return 1;
}
// console.log

(f());

// 가상 시나리오: 네트워크 통신을 통해 데이터를 가져온다는 가정
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("서버로부터 가져온 데이터");
        }, 2000);
    })
}

async function processData(){
    console.log("데이터를 가져오는 중...");
    try{
        // await 키워드 : Promise가 해결될 때까지 코드를 일시중지시킴
        //                Promise가 해소되면 Promise의 결과값을 반환해준다.
        // await 키워드 함수의 사용을 위해 async가 붙어 있어야 한다.
        const data = await fetchData();
        console.log("가져온 데이터: ", data);
    } catch (error){
        console.error(error);
    }
}

processData();