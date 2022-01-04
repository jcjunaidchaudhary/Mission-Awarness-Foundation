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
    684: { items: 2 },
    // 768: { items: 3 },
    1042: { items: 3 },
    1338: { items: 4 }
    }
    });
    });