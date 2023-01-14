// Get the carousel element
var carousel = document.getElementById("carousel");

// Get the slides
var slides = carousel.getElementsByClassName("slide");

// Set the current slide
var currentSlide = 0;

// Show the first slide
slides[currentSlide].style.display = "block";

// Create a function to change the slide
function changeSlide() {
  // Hide the current slide
  slides[currentSlide].style.display = "none";

  // Increase the current slide
  currentSlide++;

  // If we are at the last slide, go back to the first slide
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Show the new slide
  slides[currentSlide].style.display = "block";
}

// Set the interval to change the slide every 3 seconds
setInterval(changeSlide, 3000);
