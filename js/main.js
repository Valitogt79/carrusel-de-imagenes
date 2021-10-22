// Grab DOM elements
const images = document.querySelector(".images");
const imagesCollection = images.querySelectorAll(".images");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Utilitiy vars
let index = 0;

// Set interval
let interval = setInterval(startInteval, 2000);

function startInteval() {
  index++;
  moveCarousel();
}

function moveCarousel() {
  if (index > imagesCollection.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = imagesCollection.length - 1;
  }
  images.style.transform = `translateX(-${index * 800}px)`;
}

// navs buttons
function prevSlide() {
  index--;
  moveCarousel();
}

function nextSlide() {
  index++;
  moveCarousel();
}
