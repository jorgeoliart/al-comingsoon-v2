console.log("main.js is loaded!!")

import './style.css'

// Get references to the necessary elements
const heroSection = document.querySelector('.hero')
const ctaSection = document.querySelector('.cta');
const ctaButton = document.querySelector('.power-button');
const contactFormSection = document.querySelector('.contact-form');
const contactForm = document.getElementById('contactForm')
const backButton = document.querySelector('.back-button');

// Function to show the form and hode the initial content
function showForm() {
  console.log("CTA button has been clicked.");
  heroSection.style.display = 'none';
  ctaSection.style.display = 'none';
  contactFormSection.style.display = 'block'
}

// Function to hide the form and show the initial content
function showInitialContent() {
  heroSection.style.display = 'flex';
  ctaSection.style.display = 'flex';
  contactFormSection.style.displaty = 'none';
}

// Add event listener to the cta button
ctaButton.addEventListener('click', showForm);

// Add event listener to the back button
backButton.addEventListener('click', showInitialContent);

// Add event lister for form submission (prevent default and handle submission)
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // To be completed

  alert('Form submission handled! (Here we will send data to a server');

  // After successful submission (or simulation), go back to the initial content
  showInitialContent();
});