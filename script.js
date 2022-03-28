//slider на JS version

let position = 0;
const slideToShow = 3; //показываем слайдов
const slideToScroll = 1; //прокручиваем слайдов
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slideToShow; //ширина элемента
const movePosition = slideToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', function () {
  const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;
  position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', function () {
  const itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slideToShow) * itemWidth;
};
checkBtns();
