let menuModalCall = document.querySelector(".menu-modal--call");
let menuModalChat = document.querySelector(".menu-modal--chat");

let modalChatOpen = (document.querySelector(".icon--chat").onclick = function (evt) {
  evt.preventDefault();
  menuModalChat.classList.toggle("hidden");
});

let modalСallOpen = (document.querySelector(".icon--call").onclick = function (evt) {
  evt.preventDefault();
  menuModalCall.classList.toggle("hidden");
});

let modalCloseCall = (document.querySelector(".modal-call").onclick = function (evt) {
  evt.preventDefault();
  menuModalCall.classList.toggle("hidden");
});

let modalCloseChat = (document.querySelector(".modal-chat").onclick = function (evt) {
  evt.preventDefault();
  menuModalChat.classList.toggle("hidden");
});

let modalChat = (document.querySelector(".menu-modal--chat").onclick = function (evt) {
  evt.preventDefault();
  menuModalChat.classList.toggle("hidden");
});

let modalcall = (document.querySelector(".menu-modal--call").onclick = function (evt) {
  evt.preventDefault();
  menuModalCall.classList.toggle("hidden");
});

let modalCallBtn = (document.querySelector(".modal-btn--call").onclick = function (evt) {
  evt.preventDefault();
  menuModalCall.classList.toggle("hidden");
});

let modalChatBtn = (document.querySelector(".modal-btn--chat").onclick = function (evt) {
  evt.preventDefault();
  menuModalChat.classList.toggle("hidden");
});

let windowChat = (document.querySelector(".modal-window--chat").onclick = function (evt) {
  evt.stopPropagation();
});

let windowCall = (document.querySelector(".modal-window--call").onclick = function (evt) {
  evt.stopPropagation();
});

let menuWraper = document.querySelector(".menu-wraper");
let menuList = document.querySelector(".menu__list");
let menu = document.querySelector(".menu");
let iconSearch = document.querySelector(".icon--search");
let iconApplication = document.querySelector(".icon--application");
let iconRepair = document.querySelector(".icon--repair");
let menuMail = document.querySelector(".menu__mail");
let menuTel = document.querySelector(".menu__tel");
let menuLang = document.querySelector(".menu__lang");
let menuOpen = document.querySelector(".icon--burger");
let menuClose = document.querySelector(".menu-wraper");
let iconBtn = document.querySelector(".icon--btn");

let base = function () {
  menuWraper.classList.toggle("page--shadow");
  menuList.classList.toggle("active");
  menu.classList.toggle("menu-open");
  iconSearch.classList.toggle("active");
  iconApplication.classList.toggle("hidden");
  iconRepair.classList.toggle("hidden");
  menuMail.classList.toggle("active");
  menuTel.classList.toggle("active");
  menuLang.classList.toggle("active");
  iconBtn.classList.toggle("icon--burger");
  iconBtn.classList.toggle("icon--menu-open");
};

menuOpen.onclick = function (evt) {
  evt.preventDefault();
  base();
};

menuClose.onclick = function (evt) {
  evt.preventDefault();
  base();
};

menu.onclick = function (evt) {
  evt.stopPropagation();
};

