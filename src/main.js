console.log("main.js is loaded!!")

import './style.css'

// Get references to the necessary elements
const heroSection = document.querySelector('.hero')
const ctaSection = document.querySelector('.cta');
const ctaButton = document.querySelector('.power-button');
const contactFormSection = document.querySelector('.contact-form');
const contactForm = document.getElementById('contactForm')
const formBackButton = document.querySelector('.contact-form .back-button');
const successMessage = document.querySelector('.form-success-message');
const successBackButton = document.querySelector('.success-back-button');

// --- FUNCTION to show the form and hide the initial content
function showForm() {
  console.log("CTA button has been clicked.");
  heroSection.classList.add('hidden'); // classList just added. Check its functioning
  ctaSection.classList.add('hidden');
  contactFormSection.classList.remove('hidden');

  // Focus on the first input field when the form is shown
  const firstInput = contactFormSection.querySelector('input[type="text"], input[type="email"], textarea');
  if (firstInput) {
    firstInput.focus();
  }
}

// --- FUNCTION to hide the form and show the initial content
function showInitialContent() {
  heroSection.classList.remove('hidden');
  ctaSection.style.remove('hidden');
  contactFormSection.classList.add('hidden');
  successMessage.classList.add('hidden');
}

// ---- FUNCTION to show success message and hide form
function showSuccessMessage() {
  contactFormSection.classList.add('hidden');
  successMessage.classList.remove('hidden');
}

// *** EVENT LISTENERS

// ** Show form
ctaButton.addEventListener('click', showForm);

// ** Back button > close form
formBackButton.addEventListener('click', showInitialContent);

// ** Success message back button > close message
successBackButton.addEventListener('click', showInitialContent);

// ** Form SUBMISSION handling
contactForm.addEventListener('submit', function(event) {
  // Basic Success Feedback (replace alert with a nicer UI later)
  console.log('Form submitted!');

  setTimeout(showSuccessMessage, 500);

});