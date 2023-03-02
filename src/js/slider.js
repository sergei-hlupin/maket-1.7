import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const slider1 = document.querySelector(".swiper1");
const slider2 = document.querySelector(".swiper2");
const slider3 = document.querySelector(".service-price__table");
let mySlider;

function initSlider() {
  mySlider = new Swiper(slider1, {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,    
    keyboard: {
      pageUpDown: true,
    },
    mousewheel: {
      sensitivite: 1,
    },
    spaceBetween: 16,
    breakpoints: {
      320: {
        width: 240,
        spaceBetween: 16,
      },
      768: {
        enabled: false,
        width: 224,
        spaceBetween: 24,
      },
      1366: {
        enabled: false,
        width: 240,
        spaceBetween: 32,
      },
    },
  });
  mySlider = new Swiper(slider2, {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,    
    keyboard: {
      pageUpDown: true,
    },
    mousewheel: {
      sensitivite: 1,
    },
    spaceBetween: 16,
    breakpoints: {
      320: {
        width: 240,
        spaceBetween: 16,
      },
      768: {
        enabled: false,
        width: 224,
        spaceBetween: 24,
      },
      1366: {
        enabled: false,
        width: 240,
        spaceBetween: 32,
      },
    },
  });
  mySlider = new Swiper(slider3, {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,    
    keyboard: {
      pageUpDown: true,
    },
    mousewheel: {
      sensitivite: 1,
    },
    spaceBetween: 16,
    breakpoints: {
      320: {
        width: 260,
        spaceBetween: 16,
      },
      768: {
        enabled: false,
        spaceBetween: 0,
        width: 720,
      },
      1366: {
        enabled: false,
        spaceBetween: 0,
        width: 1056,
      },
    },
  });
}
initSlider();
window.addEventListener("resize", function () {
  initSlider();
});
