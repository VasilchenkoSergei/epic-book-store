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
            navText: ["<svg class='slider-left' width='9' height='16'><use xlink:href='img/sprite.svg#arrow-left'></use></svg>", "<svg class='slider-right' width='9' height='16'><use xlink:href='img/sprite.svg#arrow-left'></use></svg>"],
        }
    }
  });

  $('.novice__block').owlCarousel ({
    dots: false,
    items : 1,
    loop: true,
    center: false,
    autoWidth: true,
    responsive : {
        767 : {
            items : 3,
        },
        1279 : {
            items : 4,
            margin: 10,
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
            navText: ["<svg class='description-page__slider-left' width='40' height='40'><use xlink:href='img/sprite.svg#arrow-left'></use></svg>", "<svg class='description-page__slider-right' width='40' height='40'><use xlink:href='img/sprite.svg#arrow-right'></use></svg>"],
        }
    }
  });



  $(window).resize(function() {
    if ($(window).width() > 1300) {
      $('.novice__block').trigger('destroy.owl.carousel');
    }
    else {
      return false;
    }
  });

  //Active catalog item

  $('.catalog__tabs-link').click(function(event){
    event.preventDefault();
    $('.catalog__tabs-link').removeClass('catalog__tabs-link--active')
    $(this).addClass('catalog__tabs-link--active');
  });

  //Show pages

  $('.description__pages-picture').on('click', function() {
    $('.description-page').css('display','block');
  });

  $('.description-page__close').on('click', function() {
    $('.description-page').fadeOut(500);
  });

//Form validation

  $('.form__btn').on('click', function(e) {
    e.preventDefault();
      $('.popup-success').addClass('display','block');

  });

  $('.popup-success__close').on('click', function() {
    $('.popup-success').fadeOut(500);
  });

  // $('.popup-error__close').on('click', function() {
  //   $('.popup-error').fadeOut(500);
  // });


// $('.form__btn').on('click', function(e) {
//     e.preventDefault();
//     var email = $('#user-mail').val();

//     $(".error").remove();

//     if (email.length< 1) {
//       $('#user-mail').after('<span class="error">This field is required</span>');
//     } else {
//       var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
//       var validEmail = regEx.test(email);
//       if (!validEmail) {
//         $('#user-mail').after('<span class="error">Enter a valid email</span>');
//       }
//     }
//   });


// $('#form').validate({
//   rules: {
//     email: {
//       required: true
//     }
//   },
//   messages: {
//     email: {
//       required: "Поле 'Email' обязательно к заполнению",
//       email: "Необходим формат адреса email"
//     }
//   }
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
const tabsArray = Array.prototype.slice.call(tabsWrap.children);

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
