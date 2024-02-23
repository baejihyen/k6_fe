//DOM tree가 완성된 후 실행
document.addEventListener("DOMContentLoaded" , ()=> {
    console.log("DOMContentLoaded ok") ;
    //버튼생성
    const bt3 = document.createElement("button") ;
    const bt3Txt = document.createTextNode("버튼3");

    bt3.setAttribute("id", "bt3");
    bt3.appendChild(bt3Txt);

    const bt4 = document.createElement("button") ;
    const bt4Txt = document.createTextNode("버튼4") ;
    bt4.appendChild(bt4Txt);

    //버튼 추가하기
    document.querySelector("#btArea2").append(bt3);

    document.querySelector("#btArea2").append(bt4);

    //버튼 이벤트 달기
    bt3.addEventListener("click", ()=>{
    handleClick(3);
    });


bt4.addEventListener("click", ()=>{
    handleClick(4) ;
});

}) ;


const handleClick = (n) => {
    let msg ;
    if (n == 1) msg = "<h2>안녕하세요.</h2>";
    else if  (n ==2) msg ="<h2>안녕하시렵니까.</h2>" 
    else if (n ==3) msg = "<h2>안녕하신지.</h2>" 
    if (n == 4) msg = "<h2>안녕하니?</h2>"
    
    document.querySelector("#msgArea").innerHTML = msg;

}



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