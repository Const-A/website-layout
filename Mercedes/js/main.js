$(function () {
    $('.design-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        centerMode: true,
        // adaptiveHeight: true
        variableWidth: true,
        prevArrow: '<img src="images/arrow-left.svg" alt="" class="arrow arrow-left">',
        nextArrow: '<img src="images/arrow-right.svg" alt="" class="arrow arrow-right">'
    });
});