const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const slides = document.querySelectorAll('.slide');
const numVisibleSlides = 3; // 한 번에 보이는 슬라이드 수
const slideWidth = slides[0].offsetWidth;
const slideMargin = 15;

let currentIndex = 0;

function updateSliderPosition() {
  slider.style.transform = `translateX(${-currentIndex * (slideWidth + slideMargin)}px)`;
}

function nextSlide() {
  currentIndex += numVisibleSlides;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSliderPosition();
}

function prevSlide() {
  currentIndex -= numVisibleSlides;
  if (currentIndex < 0) {
    currentIndex = slides.length - numVisibleSlides;
  }
  updateSliderPosition();
}

prevBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  prevSlide();
  startAutoSlide();
});

nextBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  nextSlide();
  startAutoSlide();
});

updateSliderPosition(); // 초기에 슬라이더 위치 업데이트

function startAutoSlide() {
  intervalId = setInterval(nextSlide, 5000);
}

startAutoSlide();
