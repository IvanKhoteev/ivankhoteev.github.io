window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const promo = document.querySelector('.page-main__promo');
const galleryMain = document.querySelector('.page-main__gallery-main-wrapper');
const aboutMain = document.querySelector('.about-main');
const aboutAdditionalWrapper = document.querySelector('.page-main__about-additional-wrapper');
const aboutAdditional = document.querySelector('.page-main__about-additional');
const gotoMain = document.querySelector('.goto-main');
const gotoAdditionalWrapper = document.querySelector('.page-main__goto-additional-wrapper');
const gotoAdditional = document.querySelector('.page-main__goto-additional');
promo.classList.add('page-main__promo--animated');
galleryMain.classList.add('page-main__gallery-main-wrapper--animated');

const aboutWrapper = document.querySelector('.page-main__about-main-wrapper');
const aboutWrapperPosition = aboutWrapper.getBoundingClientRect();
const gotoWrapper = document.querySelector('.page-main__goto-main-wrapper');
const gotoWrapperPosition = gotoWrapper.getBoundingClientRect();

if (aboutWrapperPosition.top < window.innerHeight && aboutWrapperPosition.bottom >= 0) {
  aboutMain.classList.add('about-main--animated');
  aboutAdditional.classList.add('page-main__about-additional--animated');
  aboutAdditionalWrapper.classList.add('page-main__about-additional-wrapper--animated');
}

if (gotoWrapperPosition.top < window.innerHeight && gotoWrapperPosition.bottom >= 0) {
  gotoMain.classList.add('goto-main--animated');
  gotoAdditional.classList.add('page-main__goto-additional--animated');
  // gotoAdditionalWrapper.classList.add('page-main__goto-additional-wrapper--animated');
}


const promoIcons = document.querySelectorAll('.promo-icon__item');
for (var i = 0; i < promoIcons.length; ++i) {
  promoIcons[i].classList.add('promo-icon__item--animated');
}
