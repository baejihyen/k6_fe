       document.addEventListener("DOMContentLoaded", ()=>{

        //버튼 가져오기
           // const bt1 = document.querySelector("div > button");
           // const bt1 = document.querySelector("button");  
           const bt1 = document.querySelector("#bt1");
           
           //버튼 이벤트 달기
           bt1.addEventListener("click", ()=>{
               handleClick();
           });
           bt1.addEventListener("click", ()=>{
            handleClick2();
            bt1.addEventListener("click", ()=>{
                handleClick3();
        });
       });
       
    
       const handleClick = () => {
        const n = Math.floor(Math.random()*6) +1 ;

        const img = document.querySelector("#img1",) ;
        img.setAttribute("src", `./img/${n}.png`) ;
       console.log("click", n );
       }

       const handleClick2 = () => {
        const n = Math.floor(Math.random()*6) +1 ;

        const img = document.querySelector("#img2",) ;
        img.setAttribute("src", `./img/${n}.png`) ;
       console.log("click", n );
       }
       const handleClick3 = () => {
        const n = Math.floor(Math.random()*6) +1 ;

        const img = document.querySelector("#img3",) ;
        img.setAttribute("src", `./img/${n}.png`) ;
       console.log("click", n );
       }
       
