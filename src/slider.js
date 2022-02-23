const btnPrev = document.querySelector('#slider__prev');
const btnNext = document.querySelector('#slider__next');
const sliderBody = document.querySelector('#slider__body');

btnNext.addEventListener('click', () => {
    sliderBody.scrollLeft += 320;
})


btnPrev.addEventListener('click', () => {
    sliderBody.scrollLeft -= 320;
})
