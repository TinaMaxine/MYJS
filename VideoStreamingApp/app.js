const carrows=document.querySelectorAll(".carrow");
const movieL=document.querySelectorAll(".movie-list");
// const arrow=document.querySelectorAll(".carrow");
carrows.forEach((carrow,i)=>{
    const itemLen=movieL[i].querySelectorAll("img").length;
    let clickCounter=0;
    // console.log(carrow);
    carrow.addEventListener("click",()=>{
        clickCounter++;
        if(itemLen-(4+clickCounter)>=0){
            movieL[i].style.transform=`translateX(${movieL[i].computedStyleMap().get("transform")[0].x.value
            -355}px)`;
        }
        else{
            movieL[i].style.transform="translateX(0)";
            clickCounter=0;
        }
        // console.log(movieL);
        
    });
    // console.log(movieL[i].computedStyleMap().get("transform")[0].x.value)
    // console.log(movieL[i].querySelectorAll("img").length);
})
const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".main-container,.movie-list-title,.nav-container,.sidenav,.left-menu-icon,.toggle");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})

