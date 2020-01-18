const pageHeader = document.querySelector('.page-header');
const toggleButton = pageHeader.querySelector('.page-header__menu-toggle');
const buttonLine1 = toggleButton.querySelector(".toggle-button__line1");
const buttonLine2 = toggleButton.querySelector(".toggle-button__line2");
const buttonLine3 = toggleButton.querySelector(".toggle-button__line3");

toggleButton.addEventListener('click', function() {
  buttonLine1.classList.toggle('toggle-button__line1--close');
  buttonLine2.classList.toggle('toggle-button__line2--close');
  buttonLine3.classList.toggle('toggle-button__line3--close');
});