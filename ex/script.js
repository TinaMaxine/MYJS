let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
}

var items = document.querySelectorAll(".box1forDeals");
        var temp = document.querySelector(".nextbutton")
        prevbutton()
        function prevbutton() {
            for (var i = 0; i < 6; i++) {
                items[i].style.display = "block";
            }
            for (var i = 6; i < items.length; i++) {
                items[i].style.display = "none";
            }
            temp.style.display = "block"
        }
        function nextbutton() {
            // temp.style.display = "none"
            for (var i = 0; i < 6; i++) {
                items[i].style.display = "none";
            }
            for (var i = 6; i < items.length; i++) {
                items[i].style.display = "block";
            }

        }