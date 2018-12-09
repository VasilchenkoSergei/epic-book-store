import insertElements from './modules/insertElements.js';
import dataBooks from './modules/dataBooks.js';
import bookCardTemplate from './modules/bookCardTemplate.js';


const data = {
  page: 1,
  perPage: 8,
  type: ''
};

const tabsWrap = document.querySelector('.j-catalog__tabs');
const tabsArray = Array.from(tabsWrap.children);

tabsArray.forEach(function(tab) {
  const link = tab.firstElementChild;
  link.addEventListener('click', function(event) {
    event.preventDefault();
    data.type = event.target.dataset.type;

      if (window.matchMedia("(min-width: 767px)").matches) {
        data.perPage = 8;
      }
      else {
        data.perPage = 3;
      }

    const dataAjax = `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;
    sendRequest(dataAjax);
  })

  const type = link.dataset.type;
});

function sendRequest(data) {
  let xhr = new XMLHttpRequest;
  xhr.open('GET', data);
  xhr.send();

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const request = JSON.parse(xhr.responseText);
      const wrap = document.querySelector(bookCardTemplate.wrap);

        if(wrap.children) {
          wrap.innerHTML = '';
        }

        if(document.querySelector(bookCardTemplate.wrap)) {
          insertElements(request.items, bookCardTemplate);
        }
    }
    else {
      console.log(`Жду загрузки: ${xhr.readyState}`);
    }
  }
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
  margin: 20,
  autoWidth: true

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