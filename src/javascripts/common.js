const promo = document.querySelector('.page-main__promo');
promo.classList.add('page-main__promo--animated');

const promoIcons = document.querySelectorAll('.promo-icon__item');
for (var i = 0; i < promoIcons.length; ++i) {
  promoIcons[i].classList.add('promo-icon__item--animated');
}

let scroll = window.scrollY;
const header = document.querySelector('.page-header');

window.addEventListener('scroll', function(e) {
  if (window.scrollY - scroll > 50) {
    header.classList.add('page-header--hidden');
    scroll = window.scrollY;
  } else if (scroll - window.scrollY > 10) {
    header.classList.remove('page-header--hidden');
    scroll = window.scrollY;
  }
})