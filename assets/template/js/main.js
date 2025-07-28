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
if (document.querySelectorAll('.wrap-childCategory .link-red')) {
  document.querySelectorAll('.wrap-childCategory .link-red').forEach((box) => {
    wrapChildCategory = box.closest('.wrap-childCategory');
    if (wrapChildCategory.querySelectorAll('.childCategory li').length < 4) {
      box.classList.add('d-none');
    }
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
}

if (document.querySelector('.popover-shower')) {
  const popoverShower = document.querySelector('.popover-shower');
  const popover = new bootstrap.Popover(popoverShower);
  popover.show();
}

if (document.querySelectorAll('.copy').length) {
  document.querySelectorAll('.copy').forEach((box) => {
    box.addEventListener('click', function (event) {
      text = event.target.getAttribute('data-text');
      var inp = document.createElement('input');
      inp.value = text;
      document.body.appendChild(inp);
      inp.select();

      if (document.execCommand('copy')) {
        alert(text + '\nскопирован в буфер обмена');
      } else {
        console.log('Failed...');
        alert('Failed...');
      }
      document.body.removeChild(inp);
    });
  });
}

if (document.querySelector('.btn-for-menu')) {
  document
    .querySelector('.btn-for-menu')
    .addEventListener('click', function (event) {
      if (event.target.classList.contains('open')) {
        document.querySelector('.wrapTogglemenu').classList.remove('open');
        event.target.classList.remove('open');
        document.querySelector('.bg-for-menu').classList.remove('open');
      } else {
        document.querySelector('.wrapTogglemenu').classList.add('open');
        event.target.classList.add('open');
        document.querySelector('.bg-for-menu').classList.add('open');
      }
    });
}
if (document.querySelector('.bg-for-menu')) {
  document
    .querySelector('.bg-for-menu')
    .addEventListener('click', function (event) {
      document.querySelector('.wrapTogglemenu').classList.remove('open');
      document.querySelector('.bg-for-menu').classList.remove('open');
      document.querySelector('.btn-for-menu').classList.remove('open');
    });
}

if (document.querySelector('.product-preview-images')) {
  let sliderPreview = {
    productPreviewImages: '',
    run: function () {
      this.productPreviewImages = new Swiper('.product-preview-images', {
        slidesPreView: 1,
        spaceBetween: 0,
        grabCursor: true,
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
      });
    },
    update: function () {
      this.productPreviewImages.forEach((element) => {
        element.destroy();
      });
      this.run();
    },
  };
  sliderPreview.run();
}
if (document.getElementById('orderProductModal')) {
  let orderProductModal = document.getElementById('orderProductModal');
  orderProductModal.addEventListener('show.bs.modal', function (event) {
    let button = event.relatedTarget;
    product = button.getAttribute('data-product');
    let modalTitle = orderProductModal.querySelector('.modal-title');
    modalTitle.textContent = product;
    let modalBodyInput = orderProductModal.querySelector(
      '.modal-body input[name="product"]'
    );
    modalBodyInput.setAttribute('value', product);
  });
}
if (document.getElementById('dutyFormModal')) {
  let dutyFormModal = document.getElementById('dutyFormModal');
  dutyFormModal.addEventListener('show.bs.modal', function (event) {
    let button = event.relatedTarget;
    title = button.getAttribute('data-title');
    if (title == undefined) {
      title = 'Оставить заявку';
    }
    let modalTitle = dutyFormModal.querySelector('.modal-title');
    modalTitle.textContent = title;
    let modalBodyInput = dutyFormModal.querySelector(
      '.modal-body input[name="title"]'
    );
    modalBodyInput.setAttribute('value', title);
  });
}

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
