const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  autoplay: { delay: 3000 },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
