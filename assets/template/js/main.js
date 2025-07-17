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
document.querySelectorAll('.popover-container').forEach((box) => {
  box.classList.add('popover-active');
});
document.querySelectorAll('.popover-shower .btn-close').forEach((box) => {
  box.addEventListener('click', function (event) {
    event.target
      .closest('.popover-container')
      .classList.remove('popover-active');
  });
});
if (document.querySelector('li[data-li="15"]')) {
  document
    .querySelector('li[data-li="15"]')
    .classList.add('d-none', 'd-xxl-block');
}
if (document.querySelector('li[data-li="16"]')) {
  document
    .querySelector('li[data-li="16"]')
    .classList.add('d-none', 'd-xxl-block');
}
if (document.querySelector('li[data-li="19"]')) {
  document
    .querySelector('li[data-li="19"]')
    .classList.add('d-none', 'd-xxl-block');
}

document.querySelectorAll('.wrap-childCategory .link-red').forEach((box) => {
  box.addEventListener('click', function (event) {
    wrapChildCategory = event.target.closest('.wrap-childCategory');
    if (wrapChildCategory.classList.contains('open')) {
      wrapChildCategory.classList.remove('open');
      event.target.textContent = 'Развернуть категории';
    } else {
      wrapChildCategory.classList.add('open');
      event.target.textContent = 'Свернуть категории';
    }
  });
});
$(function () {
  var $select = $('.form__select');
  if ($select.length) {
    $select.niceSelect();
  }
  $('.scroll-el').on('click', function (e) {
    e.preventDefault();
    el = $(this).data('element');
    if (el == undefined) {
      el = $(this).attr('href');
    }
    $('body,html').animate({ scrollTop: $(el).offset().top - 100 }, 1500);
  });
});
