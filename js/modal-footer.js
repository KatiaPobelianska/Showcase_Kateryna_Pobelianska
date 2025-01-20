document.addEventListener('DOMContentLoaded', () => {
    const modalHome = document.querySelector('.modal-footer#modal_home');
    const modalPhone = document.querySelector('.modal-footer#modal_phone');
  
    const homeLink = document.querySelector('.footer .social a#modal_home');
    const phoneLink = document.querySelector('.footer .social a#modal_phone');
  
    const closeButtons = document.querySelectorAll('.modal-close-footer');
  
    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        modalHome.classList.add('active');
    });
  
    phoneLink.addEventListener('click', (event) => {
        event.preventDefault();
        modalPhone.classList.add('active');
    });
  
    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            button.closest('.modal-footer').classList.remove('active');
        });
    });
  
    const modals = document.querySelectorAll('.modal-footer');
    modals.forEach((modal) => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
});