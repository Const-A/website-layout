$(function () {
   $('.slider__data').slick({
      dots: false,
      infinite: true,
      speed: 500,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      prevArrow: '<div class="slider__arrows-left"><p class="slider__arrows-text">назад</p><img src = "images/slider-img/arrow-left.svg" alt = "" class= "arrow arrow-left" ></div>',


      nextArrow: ' <div class="slider__arrows-right"><p class="slider__arrows-text">след</p><img src="images/slider-img/arrow-right.svg" alt=""class="arrow arrow-right"></div>'
   });
})

// prevArrow: '<img src="images/slider-img/arrow-left.svg" alt="" class="arrow arrow-left">',