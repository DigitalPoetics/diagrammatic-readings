// slides design
//
//
//
//
//

const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;
// thumbHighlight(activeSlideIndex);
// slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// change the content of the slide
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === 'up') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
    thumbHighlight(activeSlideIndex);
  } else if (direction === 'down') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
    thumbHighlight(activeSlideIndex);
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
};

// switch thumbnail
const thumbContainer = document.querySelector('.slide-row');
const thumbLength = thumbContainer.querySelectorAll('div').length;
const thumbnails = thumbContainer.querySelectorAll('div');

thumbnails.forEach(function (item, index) {
  //   console.log(item);
  // item.classList.remove('active');
  item.addEventListener('click', () => {
    currentSlide(index);
    thumbHighlight(index);
  });
});

const thumbHighlight = (index) => {
  for (i = 0; i < thumbLength; i++)
    if (i === index) {
      thumbnails[i].classList.add('active');
      thumbnails[i].style.border = '2px solid black';
    } else {
      thumbnails[i].classList.remove('active');
      thumbnails[i].removeAttribute('style');
    }
};
function currentSlide(number) {
  //   console.log(number);
  activeSlideIndex = number;
  const sliderHeight = sliderContainer.clientHeight;
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
}

// open and close thumbnail
const thumbnailButton = document.querySelector('.open-button');

thumbnailButton.addEventListener('click', () => {
  let thumbnail = document.querySelector('.thumbnail-container');
  if (thumbnail.style.display === 'none') {
    thumbnail.style.display = 'block';
  } else {
    thumbnail.style.display = 'none';
  }
});
