const burger = document.querySelector(".burger");
const menyou = document.querySelector(".header-drop");
const bolim = document.querySelector(".drop-a");
const kurs = document.querySelector(".kurs");
const royhat = document.querySelector(".royhat");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menyou.classList.toggle("active");
});

bolim.addEventListener("click", () => {
  burger.classList.toggle("active");
  menyou.classList.toggle("active");
});

kurs.addEventListener("click", () => {
  burger.classList.toggle("active");
  menyou.classList.toggle("active");
});

royhat.addEventListener("click", () => {
  burger.classList.toggle("active");
  menyou.classList.toggle("active");
});
