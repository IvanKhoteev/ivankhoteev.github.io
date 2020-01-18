const pageHeader = document.querySelector('.page-header');
const toggleButton = pageHeader.querySelector('.page-header__menu-toggle');
const pageHeaderMenu = pageHeader.querySelector('.page-header__nav');

toggleButton.addEventListener('click', function() {
  pageHeaderMenu.classList.toggle('main-nav--active');
});