//slider на jqury

$(document).ready(function () {
  let position = 0;

  const slideToShow = 2; //показываем слайдов
  const slideToScroll = 2; //прокручиваем слайдов
  const container = $('.slider-container');
  const track = $('.slider-track');
  const item = $('.slider-item');
  const btnPrev = $('.btn-prev');
  const btnNext = $('.btn-next');
  const itemsCount = item.length;
  const itemWidth = container.width() / slideToShow; //ширина элемента
  const movePosition = slideToScroll * itemWidth;

  item.each(function (index, item) {
    $(item).css({
      minWidth: itemWidth,
    });
  });

  btnNext.click(function () {
    const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  btnPrev.click(function () {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`,
    });
  };

  const checkBtns = () => {
    btnPrev.prop('disabled', position === 0);
    console.log(parseFloat(position.toFixed(3)));
    console.log(-(itemsCount - slideToShow) * itemWidth);
    btnPrev.prop('disabled', parseFloat(position.toFixed(3)) === 0);
    btnNext.prop('disabled', position <= -(itemsCount - slideToShow) * itemWidth);
  };
  checkBtns();
});
