 // 페이지 초기화
        // vjs : window.addEventListener("load", callback)
        // jq ver
        $(document).ready(event => {
            // console.log(document);
            // console.log($(document));       // jQuery Wrapper
            function testAttribute(){
                // #main-image 요소 선택
                let mainImage = $("#main-image");
                console.log(mainImage);

                // 속성 목록 확인 : getAttributeNames
                // jQuery 포장 Unwrapping
                console.log(mainImage[0].getAttributeNames());

                // title 속성 조회 
                console.log("title: ", mainImage.attr("title"));
                // title 속성 변경 
                mainImage.attr("title", `제품: ${mainImage.attr("title")}`);

                // 아래쪽의 Products들의 title 속성도 변경
                let subs = $(".sub-image");
                console.log(subs);

                for(let i = 0; i < subs.length; i++){
                    $(subs[i]).attr("title", "제품: " + $(subs[i]).attr("title"));
                }

            }
            // testAttribute();

            // jQuery Event
            // id가 main-image(#main-image)인것을 찾아서 click event 처리기 연결하기
            // 메서드를 이용한 이벤트 연결
            // $("#main-image").click(function(event) {
                $("#main-image").click(event => {
                // console.log(event);
                // JavaScript 함수의 this는 해당 함수를 호출한 객체를 의미한다
                // let mainImage = this;        // jQuery 이벤트 핸들러의 this == event.target
                let mainImage = event.target;    
                console.log(mainImage);

                alert("메인 이미지 클릭");
            });

            let Products = $(".sub-image");     // 집합객체
            console.log(Products);

            // 집합 객체도 루프 돌리지 않고 그냥 event를 연결하면 하위 요소들에게 공통적으로 연결된다.
            // 가장 추천하는 방법
            Products.on("click", event => {
                let obj = $(event.target);         // event 발생 객체
                // click한 객체(event.target)의 속성 title과 src속성을 #main-image로 복사
                $("#main-image").attr({
                    src: obj.attr("src"),
                    title: obj.attr("title")
                });

                $("#product-info > h2").text(obj.attr("title"));
            });

            $("#keyword").on("keyup",event => {
                console.log(event.keyCode);
                $("#btn-search").text($(event.target).val() + " 검색");
            });
        });