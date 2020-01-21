window.onload = function() {
  const promo = document.querySelector('.page-main__promo');
  promo.classList.add('page-main__promo--animated');

  const promoIcons = document.querySelectorAll('.promo-icon__item');
  for (var i = 0; i < promoIcons.length; ++i) {
    promoIcons[i].classList.add('promo-icon__item--animated');
  }
};