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
    menuItemWrappers[i].classList.toggle('hidden');
  }
}

const closeMenu = function () {
  buttonLine1.classList.remove('toggle-button__line1--close');
  buttonLine2.classList.remove('toggle-button__line2--close');
  buttonLine3.classList.remove('toggle-button__line3--close');

  for (var i = 0; i < menuItemWrappers.length; ++i) {
    menuItemWrappers[i].classList.remove('main-nav__item-wrapper-animated');
    menuItemWrappers[i].classList.add('hidden');
  }
}

const closeMenuItem = pageHeader.querySelector('.main-nav__item-wrapper--close');

closeMenuItem.addEventListener('click', function() {
  closeMenu();
});

toggleButton.addEventListener('click', function() {
  toggleMenu();
});

let scroll = window.scrollY;
const header = document.querySelector('.page-header');
const aboutMainWrapper = document.querySelector('.page-main__about-main-wrapper');
const aboutMain = document.querySelector('.about-main');
const aboutAdditionalWrapper = document.querySelector('.page-main__about-additional-wrapper');
const aboutAdditional = document.querySelector('.page-main__about-additional');
const gotoMainWrapper = document.querySelector('.page-main__goto-main-wrapper');
const gotoMain = document.querySelector('.goto-main');
const gotoAdditionalWrapper = document.querySelector('.page-main__goto-additional-wrapper');
const gotoAdditional = document.querySelector('.page-main__goto-additional');

aboutMainWrapper.addEventListener('mouseover', function() {
  aboutAdditionalWrapper.classList.add('page-main__about-additional-wrapper--animated');
  gotoAdditionalWrapper.classList.remove('page-main__goto-additional-wrapper--animated');
});

aboutMainWrapper.addEventListener('mouseout', function() {
  gotoAdditionalWrapper.classList.remove('page-main__goto-additional-wrapper--animated');
  aboutAdditionalWrapper.classList.remove('page-main__about-additional-wrapper--animated');
});

gotoMainWrapper.addEventListener('mouseover', function() {
  gotoAdditionalWrapper.classList.add('page-main__goto-additional-wrapper--animated');
  aboutAdditionalWrapper.classList.remove('page-main__about-additional-wrapper--animated');
});

gotoMainWrapper.addEventListener('mouseout', function() {
  gotoAdditionalWrapper.classList.remove('page-main__goto-additional-wrapper--animated');
  aboutAdditionalWrapper.classList.remove('page-main__about-additional-wrapper--animated');
});

window.addEventListener('scroll', function(e) {
  if (window.scrollY - scroll > 50) {
    header.classList.add('page-header--hidden');
    scroll = window.scrollY;
    closeMenu();
  } else if (scroll - window.scrollY > 10) {
    header.classList.remove('page-header--hidden');
    scroll = window.scrollY;
  }

  const aboutWrapper = document.querySelector('.page-main__about-main-wrapper');
  const aboutWrapperPosition = aboutWrapper.getBoundingClientRect();
  const gotoWrapper = document.querySelector('.page-main__goto-main-wrapper');
  const gotoWrapperPosition = gotoWrapper.getBoundingClientRect();

  if (aboutWrapperPosition.top < window.innerHeight && aboutWrapperPosition.bottom >= 0) {
    aboutMain.classList.add('about-main--animated');
    aboutAdditional.classList.add('page-main__about-additional--animated');
  }

  if (gotoWrapperPosition.top < window.innerHeight && gotoWrapperPosition.bottom >= 0) {
    gotoMain.classList.add('goto-main--animated');
    gotoAdditional.classList.add('page-main__goto-additional--animated');
  }
})

