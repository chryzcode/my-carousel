//declear variables
const track = document.querySelector(".carousel__track");
// an array of all the slides
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carouse__button--right");
const prevButton = document.querySelector(".carouse__button--left");
const dotsNav = document.querySelector(".carousel_nav");
// an array of all the dots
const dots = Array.from(dotsNav.children);
//get the size of a slide
const slideSize = slides[0].getBoundingClientRect().width;

//arrange the slids next to the other
slides[0].style.left = 0;

console.log(slides);
