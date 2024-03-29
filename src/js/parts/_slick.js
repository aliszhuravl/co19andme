$(document).ready(function() {
    $('.run_carousel').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        prevArrow: $('#btn_prev'),
        nextArrow: $('#btn_next'),
        responsive: [
            {
                breakpoint: 2550,
                settings: "unslick"
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});