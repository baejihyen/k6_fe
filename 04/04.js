document.addEventListener("DOMContentLoaded", ()=>{

  
    const bt1 = document.querySelector("#bt1");
    
   
    bt1.addEventListener("click", ()=>{
        handleClick();
    });
});



const randomNum = Math.floor(Math.random() * 10 + 1);

const handleClick = () => {
console.log("click")
}
