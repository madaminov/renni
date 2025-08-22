var window_width = document.body.clientWidth;
window.addEventListener(
  'resize',
  function (event) {
    window_width = document.body.clientWidth;
    toggleColLeftCategoriesCollapse(window_width);
    fiterCollapse(window_width);
  },
  true
);
//col-left-categories collapse
function toggleColLeftCategoriesCollapse(windowWidth) {
  const colLeft = document.querySelector('.col-left-categories');
  if (!colLeft) return;

  if (windowWidth < 991) {
    colLeft.classList.add('collapse');
  } else {
    colLeft.classList.remove('collapse');
    colLeft.classList.remove('show');
  }
}
toggleColLeftCategoriesCollapse(window_width);
//end col-left-categories collapse
//fiter collapse
function fiterCollapse(windowWidth) {
  const btnFilterMobile = document.querySelector('.btn-filter-mobile');
  const formFilter = document.getElementById('mse2_filters');
  let formFilterSelect = document.querySelectorAll(
    '.form-filter select'
  ).length;
  let formFilterInput = document.querySelectorAll('.form-filter input').length;
  if (!btnFilterMobile) return;
  if (!formFilterSelect) return;
  if (!formFilterInput) return;
  if (windowWidth < 769) {
    formFilter.classList.add('collapse');
  } else {
    formFilter.classList.remove('collapse');
    formFilter.classList.remove('show');
  }
}
fiterCollapse(window_width);
//end fiter collapse
var sectionMobile = document.querySelector('.section-mobile');
var sectionSearch = document.querySelector('.section-search');
var bgSearch = document.querySelector('.bg-for-search');

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
//search
document.querySelectorAll('.btn-search-open').forEach((element) => {
  element.addEventListener('click', function (event) {
    sectionSearch.classList.add('open');
    bgSearch.classList.add('open');
  });
});
document.querySelectorAll('.btn-search-close').forEach((element) => {
  element.addEventListener('click', function (event) {
    sectionSearch.classList.remove('open');
    bgSearch.classList.remove('open');
  });
});
bgSearch.addEventListener('click', function (event) {
  sectionSearch.classList.remove('open');
  bgSearch.classList.remove('open');
});
//end search
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
if (document.querySelectorAll('.popover-container')) {
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
  setTimeout(() => {
    document.querySelectorAll('.popover-container').forEach((box) => {
      box.classList.remove('popover-active');
    });
  }, 5000);
}

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
function initCategoryToggles() {
  document.querySelectorAll('.wrap-childCategory .link-red').forEach((box) => {
    const wrap = box.closest('.wrap-childCategory');
    const items = wrap.querySelectorAll('.childCategory li');

    // Скрываем кнопку, если элементов < 4
    if (items.length < 4) {
      box.classList.add('d-none');
      return;
    }

    // Назначаем обработчик клика
    box.addEventListener('click', function () {
      wrap.classList.toggle('open');
      box.textContent = wrap.classList.contains('open')
        ? 'Свернуть категории'
        : 'Развернуть категории';
    });
  });
}
document.addEventListener('DOMContentLoaded', initCategoryToggles);

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
  var sliderPreview = {
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

var $select = '';
$(function () {
  $select = $('.form__select');
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

  $(window).scroll(function () {
    if ($(this).scrollTop() > 800 && window_width > 768) {
      $('.btn-scrollUp').fadeIn();
    } else {
      $('.btn-scrollUp').fadeOut();
    }
  });
  $('.btn-scrollUp').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 400);
    return false;
  });
});
if (document.getElementById('orderProductModal')) {
  let orderProductModal = document.getElementById('orderProductModal');
  orderProductModal.addEventListener('show.bs.modal', function (event) {
    if (orderProductModal.querySelector('.form-group-select')) {
      orderProductModal.querySelector('.form-group-select').remove();
    }
    let button = event.relatedTarget;
    product = button.getAttribute('data-product');
    let modalTitle = orderProductModal.querySelector('.modal-title');
    modalTitle.textContent = product;
    let modalBodyInput = orderProductModal.querySelector(
      '.modal-body input[name="product"]'
    );
    modalBodyInput.setAttribute('value', product);
    bay = button.getAttribute('data-bay');
    arenda = button.getAttribute('data-arenda');
    if (parseInt(bay) == 1) {
      orderProductModal
        .querySelector('.form-check-bay')
        .classList.remove('d-none');
      orderProductModal.querySelector('.form-check-bay input').checked = true;
    } else {
      orderProductModal
        .querySelector('.form-check-bay')
        .classList.add('d-none');
      orderProductModal.querySelector('.form-check-bay input').checked = false;
    }
    if (parseInt(arenda) == 1) {
      orderProductModal
        .querySelector('.form-check-arenda')
        .classList.remove('d-none');
      if (parseInt(bay) == 0) {
        orderProductModal.querySelector(
          '.form-check-arenda input'
        ).checked = true;
      }
    } else {
      orderProductModal
        .querySelector('.form-check-arenda')
        .classList.add('d-none');
    }
    //options
    optionName = button.getAttribute('data-optionname');
    options = button.getAttribute('data-option');
    if (optionName.length > 0 && options.length > 0) {
      options_arr = options.split(',');
      let template = '';
      template += '<div class="form-group form-group-select">';
      template += '<label>Выбрать опцию товара</label>';
      template += '<select name="option" class="form-control form__select">';
      template += `<option disabled selected>${optionName}</option>`;
      options_arr.forEach((item) => {
        template += `<option value="${optionName} - ${item}">${item}</option>`;
      });
      template += `</select>`;
      template += `</div>`;
      orderProductModal
        .querySelector('.form-group-check')
        .insertAdjacentHTML('afterend', template);
      $select = $('.form__select');
      if ($select.length) {
        $select.niceSelect();
      }
    }
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
