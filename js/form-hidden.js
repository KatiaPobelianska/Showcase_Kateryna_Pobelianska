const contactForm = document.getElementById('contact-form');
const thankYouBlock = document.getElementById('thank-you');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.classList.add('hidden');
  thankYouBlock.classList.remove('hidden');
});