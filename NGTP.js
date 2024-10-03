let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function updateSliderPosition() {
  const gallerySlider = document.querySelector(".gallery-slider");
  const slideWidth = slides[0].clientWidth;
  gallerySlider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSliderPosition();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
}

window.addEventListener("resize", updateSliderPosition);
