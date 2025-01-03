const slide = document.querySelector('.slide');
const pages = document.querySelectorAll('.page2');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
let currentIndex = 0;

// Auto-slide function
function autoSlide() {
  currentIndex = (currentIndex + 1) % pages.length;
  updateSlide();
}

// Update slide position
function updateSlide() {
  slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Handle navigation arrows
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % pages.length;
  updateSlide();
});

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + pages.length) % pages.length;
  updateSlide();
});

// Auto-slide interval
setInterval(autoSlide, 6000); 









