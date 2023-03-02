let serviceHeaderText =document.querySelector(".service-header__text");

let linkRead = (document.querySelector(".link--read").onclick = function () {  
  serviceHeaderText.classList.toggle("text-show");
  if (this.textContent == "Читать далее") {
    this.textContent = "Скрыть";
  } else {
    this.textContent = "Читать далее";
  }
});


let slides = document.querySelectorAll(".swiper1 .swiper-slide");

let button = (document.querySelector(".button-hide").onclick = function () {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.toggle("open");
  }
  if (this.textContent == "Показать все") {
    this.textContent = "Скрыть";
  } else {
    this.textContent = "Показать все";
  }
});

let slides2 = document.querySelectorAll(".swiper2 .swiper-slide");

let button2 = (document.querySelector(".button-hide--second").onclick = function () {
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].classList.toggle("open2");
  }
  if (this.textContent == "Показать все") {
    this.textContent = "Скрыть";
  } else {
    this.textContent = "Показать все";
  }
});