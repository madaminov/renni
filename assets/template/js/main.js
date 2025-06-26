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
//images
let setImg = () => {
  document.querySelectorAll('.img-data-src').forEach((box) => {
    src = box.getAttribute('data-src');
    box.setAttribute('src', src);
  });
};

let setBg = () => {
  document.querySelectorAll('.set-bg').forEach((box) => {
    bg = box.getAttribute('data-setbg');
    box.style.backgroundImage = "url('" + bg + "')";
  });
};

setImg();
setBg();
//images
document
  .querySelectorAll(
    ".content a[href$='.jpg'],.content a[href$='.jpeg'],.content a[href$='.png'], .content a[href$='.gif'], .content a[href$='.webP'], .content a[href$='.webp']"
  )
  .forEach((box) => {
    box.setAttribute('data-fancybox', 'gallery');
  });

Fancybox.bind('[data-fancybox]');
