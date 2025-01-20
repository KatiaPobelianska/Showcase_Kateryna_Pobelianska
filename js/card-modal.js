const readMoreButtons = document.querySelectorAll('.services-box .btn');
const modals = document.querySelectorAll('.card-modal');

readMoreButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
  });
});

modals.forEach((modal) => {
  const closeButton = modal.querySelector('.card-modal-close');

  closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('active');
    }
  });
});