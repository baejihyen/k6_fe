/* 함수 작성1
function handleClick(n) {//js는 함수를 직접 만들수 있다.
    //메시지 영역 가져오기 1
    // document.getElementById("msgArea").innerHTML = "안녕하세요" ;

     //메시지 영역 가져오기 2
    //  document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>" ;

    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다.</h2>` ;

}
*/
/*
함수선언 2 : 화살표 함수
상수는 const 변수는 let
*/
// const handleClick = (n) => {
//     // let msg ;
//     // if (n == 1) msg = "안녕하세요,";
//     // else msg = "안녕히가세요." 
//     document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다.</h2>` ;

// }
const handleClick = (n) => {
    let msg ;
    if (n == 1) msg = "<h2>안녕하세요,</h2>";
    else msg = "<h2>안녕히가세요.</h2>" 
    document.querySelector("#msgArea").innerHTML = msg;

}