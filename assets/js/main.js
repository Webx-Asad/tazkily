(function ($) {
    "use strict";


    $(".menu-bars").click(function () {
        $(".menu-area").slideToggle();
    });



    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        slideBy: 2,
        responsive: {
            0: {
                items: 1,
                nav: true,

            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 2,
                nav: true,
                loop: false
            }
        }
    });


    // data-background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });


})(jQuery);

