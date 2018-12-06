




// // !!!!!!!!!!!!!!SLIDER!!!!!!!!!!!!!!!!!!!!


// 

// // $('.appearbox-list').owlCarousel ({
// //   loop: true,
// //   margin: 10,
// //   responsive : {
// //       0 : {
// //           items : 1,
// //       },
// //       767 : {
// //           items : 2,
// //           dots: false,
// //           nav: true,
// //           navText: ["<img src='img/icons/left-icon.svg'>", "<img src='img/icons/right-icon.svg'>"],
// //       }
// //   }
// // });

// // $('.reviews__list').owlCarousel ({
// //   loop: true,
// //   dots: true,
// //   responsive : {
// //       0 : {
// //           items : 1,
// //       },
// //       950 : {
// //           items : 1,
// //           dots: false,
// //           nav: true,
// //           navText: ["<img src='img/icons/left-icon.svg'>", "<img src='img/icons/right-icon.svg'>"],
// //       }
// //   }
// // });




// });


import insertElements from './modules/insertElements.js';
import dataBooks from './modules/dataBooks.js';
import bookCardTemplate from './modules/bookCardTemplate.js';


  if(document.querySelector(bookCardTemplate.wrap)) {
    const wrap = document.querySelector(bookCardTemplate.wrap);

    insertElements(dataBooks.books, bookCardTemplate);
  }

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
          navText: ["<img src='img/icons/arrow_left.svg'>", "<img src='img/icons/arrow_right.svg'>"],
      }
  }

});

$('.catalog__tabs').owlCarousel ({
  dots: false,
  loop: true,
  center: false,
  margin: 20

});

$('.novice__block').owlCarousel ({
  dots: false,
  items : 1,
  loop: true,
  center: true,
  responsive : {
      767 : {
          items : 3,
      },
      1279 : {
          items : 4,
      }
    }

});


$(window).width(function() {
  if ($(window).width() > 767) {
    $('.catalog__tabs').trigger('destroy.owl.carousel');
  }
  else {
    return false;
  }
});


});