var slideIndex = 1;
var slideInterval;
showSlides(slideIndex);

function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
  }
  slides[slideIndex-1].classList.add("active");
}

var slider = document.getElementsByClassName("slider")[0];

slider.addEventListener("mousedown", function() {
  clearInterval(slideInterval);
});

slider.addEventListener("mouseup", function() {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 2000);
});

slideInterval = setInterval(function() {
  plusSlides(1);
}, 2000);
