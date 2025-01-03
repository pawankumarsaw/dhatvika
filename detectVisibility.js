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
