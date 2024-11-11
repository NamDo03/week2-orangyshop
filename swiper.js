var swiper = new Swiper(".info-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    rewind: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperProduct = new Swiper(".swiper-product", {
    slidesPerView: 1.5,
    spaceBetween: 8,
    rewind: true,
    breakpoints: {
        640: {
            slidesPerView: 1.5,
            spaceBetween:8
        },
        768: {
            slidesPerView: 2,
            spaceBetween:8

        },
        1024: {
            slidesPerView: 4,
            spaceBetween:8
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});