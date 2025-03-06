console.log("main.js is loaded!!")

import './style.css'

// Get references to the necessary elements
const heroSection = document.querySelector('.hero')
const ctaSection = document.querySelector('.cta');
const ctaButton = document.querySelector('.power-button');
const contactFormSection = document.querySelector('.contact-form');
const contactForm = document.getElementById('contactForm')
const formBackButton = document.querySelector('.contact-form .back-button');
const successMessage = document.querySelector('.success-message-container');
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
  console.log("showInitialContent() is running"); // ADD THIS
  console.log("heroSection:", heroSection);       // ADD THIS
  console.log("ctaSection:", ctaSection);         // ADD THIS
  console.log("contactFormSection:", contactFormSection); // ADD THIS
  console.log("successMessage:", successMessage);    // ADD THIS

  heroSection.classList.remove('hidden');
  ctaSection.classList.remove('hidden');
  contactFormSection.classList.add('hidden');
  successMessage.classList.add('hidden');
  resetForm();
}

// --- FUNCTION to show success message and hide form
function showSuccessMessage() {
  console.log('showSuccessMessage() function is running!')

  contactFormSection.classList.add('hidden');
  console.log("contactFormContainer classList after add('hidden'):", contactFormContainer.classList); // **NEW LOG**
  
  successMessage.classList.remove('hidden');
  console.log("successMessage classList after remove('hidden'):", successMessage.classList); // **NEW LOG**



  // setTimeout(function() {
  //   resetForm();
  // }, 2000);
}

// --- FUNCTION to reset the contact form fields
function resetForm() {
  contactForm.reset();
  console.log('Contact form fields have been reset');
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
  event.preventDefault();
  // Basic Success Feedback (replace alert with a nicer UI later)
  console.log('Form submission prevented. Now handling manually');

  showSuccessMessage();

});