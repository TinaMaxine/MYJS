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

function generateRandomNumbers(min, max) {
    const numCount = 32;
    const resultImgURL = [];
    
    while (resultImgURL.length < numCount) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      
      if (!resultImgURL.includes(randomNumber)) {
        resultImgURL.push(randomNumber);
      }
    }
    
    return resultImgURL;
  }
  
  const randomNumbers = generateRandomNumbers(1, 32);
//   console.log(randomNumbers);


  fetchImgURLs(randomNumbers);
 
  var  arrImgURL=[];
  var  arrImgTitle=[];
  function fetchImgURLs(r){
    const thumbnails=document.querySelectorAll(".movie-list-item-image");
    r.forEach(element => {
        fetch('https://tinamaxine.github.io/index.json')
       .then(response => response.json())
       .then(data => {
        const id=element;
        const object = data.data.find(obj => obj._id === id);
       
        if (object) {
           // get the image URL from the object
           const imageUrl = object.imageUrl;
           const Title=object.name
           arrImgTitle.push(Title)
           arrImgURL.push(imageUrl);
        //    console.log(object,imageUrl);
            popURLs(arrImgURL,thumbnails);
            TextChange()
        }
      
        })
    })
  }
//   console.log((`arrayyyy${arrImgURL}`));
//   console.log("hello");


// console.log(thumbnails);

function popURLs(arr,thumbs){
    arr.forEach((url,index)=>{
        const img=thumbs[index];
        img.setAttribute('src',url);
        // console.log(url);
        // console.log(thumbs[index]);
    });
}
var movieTitle=document.querySelectorAll(".movie-list-item-title")
function TextChange(){
    console.log("textchange called");
    movieTitle.forEach((element,index)=>{
      element.innerHTML=arrImgTitle[index]
    });
}

// const API_KEY = 'AIzaSyB9ycVXkFCOWqO5SgAGHP6dnmMGdoEoHmE';
// const searchQuery = 'pixar movie trailer'; // Replace with your own search query

// fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyB9ycVXkFCOWqO5SgAGHP6dnmMGdoEoHmE&type=video&part=snippet&maxResults=100&q='pixar movie trailer'`)
//   .then(response => response.json())
//   .then(data => {
//     const videos = data.items;
//     // Extract video links from the videos array
//     const videoLinks = videos.map(video => `https://www.youtube.com/watch?v=${video.id.videoId}`);
//     console.log(videoLinks);
//   })
//   .catch(error => console.error(error));

function urlChange(){
    window.location.href = "./PlayerPage.html";         
    var videoUrl=document.querySelector(".youtubeUrl")
videoUrl.src="https://youtu.be/jjudmcSxzpc"

}

var navHover= document.querySelectorAll(".menu-list-item")
console.log(navHover)
navHover.forEach(element=>{
    element.addEventListener("mouseover",()=>{
        element.style.color="yellow"
       
    })
    element.addEventListener("mouseout",()=>{
        element.style.color="white"
       
    })
    
})