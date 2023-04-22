var swiperHome = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: "fade"
});

var swiperProducts = new Swiper(".product-slider", {
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        675: {
            slidesPerView: 1
        },
        700: {
            slidesPerView: 2
        },
        1000: {
            slidesPerView: 3
        },
    }
});

var swiperBrands = new Swiper(".brands-slider", {
    slidesPerView: 3,
 
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        581: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 3
        },
    }
});