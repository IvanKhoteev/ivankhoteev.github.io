var pageHeader = document.querySelector('.page-header');
var toggleButton = pageHeader.querySelector('.page-header__menu-toggle');
var pageHeaderMenu = pageHeader.querySelector('.page-header__nav');

toggleButton.addEventListener('click', function() {
  console.log(pageHeaderMenu);
  pageHeaderMenu.classList.toggle('main-nav--active');
});