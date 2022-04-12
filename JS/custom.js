$(function () {
    $(".main").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: ".prev1",
        nextArrow: ".next2"
    });
    // next part
    $(".slide_main").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: ".prev",
        nextArrow: ".next"
    });
});