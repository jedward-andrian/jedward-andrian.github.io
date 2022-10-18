// navbar
const menu = document.querySelector(".nav-menu");
const openBtn = document.querySelector(".toggle-navbar-open");
const closeBtn = document.querySelector(".toggle-navbar-close");

openBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  openBtn.classList.toggle("active");
  closeBtn.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  openBtn.classList.toggle("active");
  closeBtn.classList.toggle("active");
});

// submit button
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  alert("Submit Successfully");
});
