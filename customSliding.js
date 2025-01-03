const poster = document.querySelector('.poster');
const images = document.querySelectorAll('.page-poster');
const leftArrow2 = document.querySelector('.left2');
const rightArrow2 = document.querySelector('.right2');

 currentIndex = 0; // Start with the first image
const totalImages = images.length;

// Calculate slide width dynamically
function getSlideWidth() {
  return images[0].offsetWidth; 
}

// Update slide position
function updateSlide2() {
  const slideWidth = getSlideWidth();
  poster.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  poster.style.transition = 'transform 0.5s ease-in-out';
}

// Handle right arrow click
rightArrow2.addEventListener('click', () => {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Reset to the first image after the last one
  }
  updateSlide2();
});

// Handle left arrow click
leftArrow2.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1; // Go to the last image when moving left from the first
  }
  updateSlide2();
});

// Initialize the slider
updateSlide2();
