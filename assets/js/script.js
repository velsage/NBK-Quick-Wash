const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  fade: true,
  grabCursor: true,
  spaceBetween: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 1.6
    },
    992: {
      slidesPerView: 1.9
    },
    1200: {
      slidesPerView: 2.3
    }
  }
});