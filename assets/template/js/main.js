var sectionMobile = document.querySelector('.section-mobile');
var sectionSearch = document.querySelector('.section-search');

document.querySelectorAll('.btn-open-mobile').forEach((element) => {
  element.addEventListener('click', function (event) {
    sectionMobile.classList.add('open');
  });
});
document.querySelectorAll('.btn-close-mobile').forEach((element) => {
  element.addEventListener('click', function (event) {
    sectionMobile.classList.remove('open');
  });
});

document.querySelectorAll('.btn-search-open').forEach((element) => {
  element.addEventListener('click', function (event) {
    sectionSearch.classList.add('open');
  });
});
document.querySelectorAll('.btn-search-close').forEach((element) => {
  element.addEventListener('click', function (event) {
    sectionSearch.classList.remove('open');
  });
});
