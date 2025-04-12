console.log("main.js is loaded!!")

import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded event fired - DOM is ready!");

  // Get references to the necessary elements
  const languageSwitcher = document.getElementById('language-switcher'); /* new variable */
  const mainContentContainer = document.getElementById('main-content-container'); /* new variable */
  const contentEn = document.getElementById('content-en'); /* new variable */
  const contentEs = document.getElementById('content-es'); /* new variable */
  const enButton = document.getElementById('lang-en'); /* new variable */
  const esButton = document.getElementById('lang-es'); /* new variable */
  const contactForm = document.getElementById('contactForm');

  // --- FUNCTION to show English content
  function showEnglish() {
    languageSwitcher.classList.add('hidden');
    mainContentContainer.classList.remove('hidden');
    contentEn.classList.remove('hidden');
    document.documentElement.lang = "en"; /* Set HTML lang attribute */

    // Show contact form when 'power button' is clicked (English)
    console.log("cta button in ENG has been clicked");
    const powerButtonEn = contentEn.querySelector('.save-seat-button-icon');
    powerButtonEn.addEventListener('click', () => {
      contentEn.querySelector('.hero').classList.add('hidden');
      contentEn.querySelector('.cta').classList.add('hidden');
      contentEn.querySelector('.contact-form').classList.remove('hidden');
      contentEn.querySelector('.contact-form').classList.add('show');
    });

    // Handle back button in English form
    const backButtonEn = contentEn.querySelector('.back-button');
    backButtonEn.addEventListener('click', () => {
      resetForm();
      contentEn.querySelector('.hero').classList.remove('hidden');
      contentEn.querySelector('.cta').classList.remove('hidden');
      contentEn.querySelector('.contact-form').classList.add('hidden');
      contentEn.querySelector('.contact-form').classList.remove('show');
    });
  }

  // --- FUNCTION to show Spanish content
  function showSpanish() {
    languageSwitcher.classList.add('hidden');
    mainContentContainer.classList.remove('hidden');
    contentEs.classList.remove('hidden');
    document.documentElement.lang = "es"; /* Set html lang attribute */

    // Show contact form when "power-button" is clicked (Spanish)
    console.log("cta button in SPA has been clicked");
    const powerButtonEs = contentEs.querySelector('.save-seat-button');
    powerButtonEs.addEventListener('click', () => {
      contentEs.querySelector('.hero').classList.add('hidden');
      contentEs.querySelector('.cta').classList.add('hidden');
      contentEs.querySelector('.contact-form').classList.remove('hidden');
      contentEs.querySelector('.contact-form').classList.add('show');
    });

    // Handle back button in Spanish form
    const backButtonEs = contentEs.querySelector('.back-button');
    backButtonEs.addEventListener('click', () => {
      resetForm();
      contentEs.querySelector('.hero').classList.remove('hidden');
      contentEs.querySelector('.cta').classList.remove('hidden');
      contentEs.querySelector('.contact-form').classList.add('hidden');
      contentEs.querySelector('.contact-form').classList.remove('show');
    });
  }

  // --- FUNCTION to reset the contact form fields
  function resetForm() {
    contactForm.reset();
    console.log('Contact form fields have been reset');
  }

  // *** EVENT LISTENERS
  enButton.addEventListener('click', showEnglish);
  esButton.addEventListener('click', showSpanish);

  // ** Form SUBMISSION handling
  // contactForm.addEventListener('submit', function(event) {

  //  console.log('Form submission is being handled by Netlify Forms.');
  // });

});


