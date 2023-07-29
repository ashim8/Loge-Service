const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
       },

    // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
});

var swipers = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0: {
           slidesPerView: 1, 
          },
    768: {
           slidesPerView: 2, 
          },
    992: {
           slidesPerView: 3, 
          },
        },
});

const hamburg = document.querySelector(".hambarger")
const navmenu = document.querySelector(".navbar")

hamburg.addEventListener("click", () => {
  hamburg.classList.toggle("active");
  navmenu.classList.toggle("active");
})