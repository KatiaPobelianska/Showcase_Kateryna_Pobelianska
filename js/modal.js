const modalCountry = document.getElementById("modal-country");
const modalPhone = document.getElementById("modal-phone");
const openModalCountry = document.getElementById("openModalCountry");
const openModalPhone = document.getElementById("openModalPhone");
const closeButtons = document.querySelectorAll(".close-btn");

openModalCountry.addEventListener("click", (e) => {
  e.preventDefault();
  modalCountry.style.display = "flex";
});

openModalPhone.addEventListener("click", (e) => {
  e.preventDefault();
  modalPhone.style.display = "flex";
});

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalCountry.style.display = "none";
    modalPhone.style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (e.target === modalCountry) {
    modalCountry.style.display = "none";
  }
  if (e.target === modalPhone) {
    modalPhone.style.display = "none";
  }
});