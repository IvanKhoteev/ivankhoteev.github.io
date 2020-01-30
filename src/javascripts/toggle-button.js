const pageHeader = document.querySelector('.page-header');
const toggleButton = pageHeader.querySelector('.page-header__menu-toggle');
const buttonLine1 = toggleButton.querySelector(".toggle-button__line1");
const buttonLine2 = toggleButton.querySelector(".toggle-button__line2");
const buttonLine3 = toggleButton.querySelector(".toggle-button__line3");

const menu = document.querySelector('.page-header__nav');
const menuItemWrappers = menu.querySelectorAll('.main-nav__item-wrapper');

const toggleMenu = function () {
  buttonLine1.classList.toggle('toggle-button__line1--close');
  buttonLine2.classList.toggle('toggle-button__line2--close');
  buttonLine3.classList.toggle('toggle-button__line3--close');

  for (var i = 0; i < menuItemWrappers.length; ++i) {
    menuItemWrappers[i].classList.toggle('main-nav__item-wrapper-animated');
  }
}

const closeMenu = function () {
  buttonLine1.classList.remove('toggle-button__line1--close');
  buttonLine2.classList.remove('toggle-button__line2--close');
  buttonLine3.classList.remove('toggle-button__line3--close');

  for (var i = 0; i < menuItemWrappers.length; ++i) {
    menuItemWrappers[i].classList.remove('main-nav__item-wrapper-animated');
  }
}

const closeMenuItem = pageHeader.querySelector('.main-nav__item-wrapper--close');

closeMenuItem.addEventListener('click', function() {
  closeMenu();
});

toggleButton.addEventListener('click', function() {
  toggleMenu();
});

