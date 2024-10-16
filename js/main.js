Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
var mixer = mixitup('.direction__list');


$(function () {
    $('.direction__filter-btn').on("click", function (){
        $('.direction__filter-btn').removeClass('direction__filter-btn--active')
        $(this).addClass('direction__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
    })

    $('.team__slider-prev').on('click', function(e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function(e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })
})