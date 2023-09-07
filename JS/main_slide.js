const slider = document.querySelector('.slider_m');
const slides = document.querySelectorAll('.slider_m .slide_m');
let index = 0;

function showSlide(currentIndex) {
  slides.forEach((slide, i) => {
    if (i === currentIndex) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 1000); // 3초마다 슬라이드 변경
