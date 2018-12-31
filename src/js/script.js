$(document).ready(function(){

  $('.page-header__toggle').on('click', function() {
    $('.main-nav').toggleClass('.active');
    $('.main-nav').toggle();
  });

  $('.slider').owlCarousel ({
    dots: false,
    loop: true,
    center: true,
    nav: true,
    margin: 20,
    responsive : {
        0 : {
            items : 1,
            navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
        }
    }
  });

  $('.novice__block').owlCarousel ({
    dots: false,
    items : 1,
    loop: true,
    center: true,
    autoWidth: true,
    responsive : {
        767 : {
            items : 3,
        },
        1279 : {
            items : 4,
            center: false,
        }
      }
  });

  $('.description-page__slider').owlCarousel ({
    dots: false,
    loop: true,
    center: true,
    nav: true,
    margin: 20,
    responsive : {
        0 : {
            items : 1,
            navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
        }
    }
  });

// $(window).resize(function() {
//   if ($(window).width() > 767) {
//     $('.novice__block').trigger('destroy.owl.carousel');
//   }
//   else {
//     return false;
//   }
// });



//SHOW PAGE

  $('.description__pages-picture').on('click', function() {
    $('.description-page').css('display','block');
  });

  $('.description-page__close').on('click', function() {
    $('.description-page').fadeOut(500);
  });


  $('.form').submit(function (e) {
    e.preventDefault();
  });

  // $('.form__btn').on('click', function(e) {
  //   e.preventDefault();

  //     $('.popup-success').css('display','block');

  // });

  // $('.popup-success__close').on('click', function() {
  //   $('.popup-success').fadeOut(500);
  // });

  // $('.popup-error__close').on('click', function() {
  //   $('.popup-error').fadeOut(500);
  // });

});


import insertElements from './modules/insertElements.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import sendRequest from './modules/sendRequest.js';

// Объект данных для ajax запроса
const data = {
  page: 1,
  perPage: 8,
  type: ''
};

sendRequest(createDataAjax());

//Вешаем слушатель на табы
const tabsWrap = document.querySelector('.j-catalog__tabs');
const tabsArray = Array.from(tabsWrap.children);

tabsArray.forEach(function(tab) {
  const link = tab.firstElementChild;

  link.addEventListener('click', function(event) {
    event.preventDefault();
    data.type = event.target.dataset.type;

    const dataAjax = createDataAjax();
    sendRequest(dataAjax);
  });

  const type = link.dataset.type;
});

// Функция подготовки url для GET запроса
function createDataAjax() {
  if (window.matchMedia("(min-width: 767px)").matches) {
      data.perPage = 8;
  }
  else {
    data.perPage = 3;
  }

  return `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;
}
