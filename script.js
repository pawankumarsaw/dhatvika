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

//to detect visibility
document.addEventListener("scroll", () => {
  const boxes = document.querySelectorAll(".auto");
  
  boxes.forEach((box) => {
    const rect = box.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // Add visible class when the element is in the viewport
      box.classList.add("visible");
      box.classList.remove("not-visible");
    } else {
      // Reset the animation when the element goes out of the viewport
      box.classList.remove("visible");
      box.classList.add("not-visible");
    }
  });
});


const poster = document.querySelector('.poster');
const images = document.querySelectorAll('.poster img');
const leftArrow2 = document.querySelector('.left2');
const rightArrow2 = document.querySelector('.right2');

 currentIndex = 0; // Index of the currently visible image
const totalImages = images.length; // Total number of images

// Function to update the slider
function updateSlider() {
  images.forEach((img, index) => {
    img.classList.remove('active', 'background-left', 'background-right');

    // Set the active image
    if (index === currentIndex) {
      img.classList.add('active');
    }
    // Set the left background image
    else if (index === (currentIndex - 1 + totalImages) % totalImages) {
      img.classList.add('background-left');
    }
    // Set the right background image
    else if (index === (currentIndex + 1) % totalImages) {
      img.classList.add('background-right');
    } else {
      // Hide all other images
      img.style.opacity = 0;
    }
  });
}

// Left arrow click event
leftArrow2.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Decrease index and wrap around
  updateSlider();
});

// Right arrow click event
rightArrow2.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages; // Increase index and wrap around
  updateSlider();
});

// Initialize the slider on load
updateSlider();









