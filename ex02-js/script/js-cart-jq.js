function addItem(){
    // input #item 으로부터 value 속성 값 가져오기
    // ul #list에 child li 를 추가하는 함수
    let item = $("#item").val().trim();
    console.log(item);

    if(item.length > 0){
        // 요소 만들기 -> 콘텐츠 설정 -> 속성 설정 -> DOM 추가(부모에게 자식으로 추가 된다는 뜻)

        // li 콘텐츠 설정
        let itemNode = $("<li>");           // == document.createElement
        itemNode.text(item);                // == .innerText

        // toolbar(삭제 버튼 포함)
        let toolbar = $("<div>");
        toolbar.css({display: "inline", float: "right"});   // 여러 스타일 속성을 변경할때 자바스크립트 객체로 전달
        itemNode.append(toolbar);

        // 삭제 버튼 추가
        let delBtn = $("<button>");         // 요소 생성
        delBtn.text("삭제");                // 콘텐츠 설정
        toolbar.append(delBtn);
        delBtn.on("click", event => {
            let removeItem = $(event.target.parentNode.parentNode);
            // 부모를 몰라도 제거 가능
            removeItem.remove();
        });

        // ul #list에 child로 추가
        $("#list").append(itemNode);

        // 입력 내용 비우고 다시 포커스 잡아주기
        $("#item").val("").focus();
    }
}

// 초기화 코드
$(document).ready(event => {
    // 목록 비우기
    let cartItems = $("#list > li");

    for(let i = 0; i < cartItems.length; i++){
        cartItems[i].remove();
    }

    // 추가 버튼(#btn-add)에 event 처리 함수 연결
    $("#btn-add").on("click", addItem);
});