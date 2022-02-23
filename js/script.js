//declear variables
const track = document.querySelector(".carousel__track");
// an array of all the slides
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
// an array of all the dots
const dots = Array.from(dotsNav.children);
//get the width of the first slide
const slideWidth = slides[0].getBoundingClientRect().width;

// a function that gets the width of a slide and multiplies it by the index of the slide to get the left position
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

//apply the setSlidePosition for each of the slides
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  //move the next slide
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";

  //dynamically changing the current slide
  currentSlide.classList.remove("currentSlide");
  targetSlide.classList.add("currentSlide");
};

nextButton.addEventListener("click", e => {
  //get current slide through the track
  const currentSlide = track.querySelector(".currentSlide");
  //get the current slide
  const nextSlide = currentSlide.nextElementSibling;
  //get the space for moving tot the next slide

  moveToSlide(track, currentSlide, nextSlide);
});
