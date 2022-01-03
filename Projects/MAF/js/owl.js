$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
    autoplay: true,
    items: 1,
    center: false,
    nav: true,
    margin: 40,
    dots: false,
    loop: true,
    navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
    responsive: {
    0: {
    items: 1,
    },
    575: { items: 2 },
    768: { items: 3 },
    1050: { items: 4 },
    1200: { items: 5 }
    }
    });
    });