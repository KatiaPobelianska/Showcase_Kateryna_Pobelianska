const modalTrigger = document.getElementById('about-modal-trigger');
const modal = document.getElementById('about-modal');
const modalClose = document.getElementById('about-modal-close');

modalTrigger.addEventListener('click', (event) => {
  event.preventDefault();
  modal.classList.add('active');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('active');
  }
});