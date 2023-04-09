const arrowSlider = document.querySelectorAll('.slider__arrow')
const slides = Array.from(document.querySelector('.slider__items').children)
console.log(slides.indexOf(document.querySelector('.slider__item_active')))
console.log(slides.length)

function showNext(activeSlide) {
  slides[activeSlide].classList.remove('slider__item_active')
  activeSlide++
  if (activeSlide >= slides.length){
    activeSlide = 0
  }
  slides[activeSlide].classList.add('slider__item_active')
}

function showPrev(activeSlide) {
  slides[activeSlide].classList.remove('slider__item_active')
  activeSlide--
  if (activeSlide < 0){
    activeSlide = slides.length - 1
  }
  slides[activeSlide].classList.add('slider__item_active')
}


arrowSlider.forEach(element => {
  element.addEventListener('click', function() {
    let activeSlide = slides.indexOf(document.querySelector('.slider__item_active'))
    if (element.className.includes('slider__arrow_prev')){
      showPrev(activeSlide)
    } else{
      showNext(activeSlide)
    }
  })
})