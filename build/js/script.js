/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/bookCardTemplate.js":
/*!********************************************!*\
  !*** ./src/js/modules/bookCardTemplate.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar bookCardTemplate = {\n  wrap: '.catalog__block',\n  tag: 'article',\n  tagClass: '.product-card-mini',\n  setContent: function setContent(data) {\n    return \"<a class=\\\"product-card-mini__picture-wrap\\\" href=\\\"description.html\\\">\\n              <picture class=\\\"product-card-mini__picture\\\">\\n                <source media=\\\"(min-width: 1650px)\\\" srcset=\\\"img/books/\".concat(data.uri, \"_2x.png 2x\\\"/>\\n                <img class=\\\"product-card-mini__img\\\" src=\\\"img/books/\").concat(data.uri, \".png\\\" alt=\\\"\").concat(data.uri, \"\\\" width=\\\"210\\\" height=\\\"300\\\">\\n              </picture>\\n            </a>\\n            <a class=\\\"product-card-mini__title-wrap\\\" href=\\\"description.html\\\">\\n              <h3 class=\\\"product-card-mini__title\\\">\").concat(data.name, \"</h3>\\n            </a>\\n            <p class=\\\"product-card-mini__descr\\\">\").concat(data.desc, \"</p>\\n            <span class=\\\"product-card-mini__price\\\">\").concat(data.price, \" &#8381;</span>\");\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookCardTemplate);\n\n//# sourceURL=webpack:///./src/js/modules/bookCardTemplate.js?");

/***/ }),

/***/ "./src/js/modules/createElement.js":
/*!*****************************************!*\
  !*** ./src/js/modules/createElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookCardTemplate.js */ \"./src/js/modules/bookCardTemplate.js\");\n\n\nfunction createElement(book) {\n  var card = document.createElement('article');\n  card.classList.add('product-card-mini');\n  card.innerHTML = _bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setContent(book);\n  return card;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n//# sourceURL=webpack:///./src/js/modules/createElement.js?");

/***/ }),

/***/ "./src/js/modules/insertElements.js":
/*!******************************************!*\
  !*** ./src/js/modules/insertElements.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/js/modules/createElement.js\");\n/* harmony import */ var _bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookCardTemplate.js */ \"./src/js/modules/bookCardTemplate.js\");\n\n\n\nfunction insertElements(booksArr, template) {\n  booksArr.forEach(function (book) {\n    var card = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(book, template);\n    var wrap = document.querySelector(_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap);\n    wrap.appendChild(card);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertElements);\n\n//# sourceURL=webpack:///./src/js/modules/insertElements.js?");

/***/ }),

/***/ "./src/js/modules/sendRequest.js":
/*!***************************************!*\
  !*** ./src/js/modules/sendRequest.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookCardTemplate.js */ \"./src/js/modules/bookCardTemplate.js\");\n/* harmony import */ var _insertElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertElements.js */ \"./src/js/modules/insertElements.js\");\n\n\n\nfunction sendRequest(data) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', data);\n  xhr.send();\n\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var request = JSON.parse(xhr.responseText);\n      var wrap = document.querySelector(_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wrap);\n\n      if (wrap.children) {\n        wrap.innerHTML = '';\n      }\n\n      if (document.querySelector(_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wrap)) {\n        Object(_insertElements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(request.items, _bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n      }\n    } else {\n      console.log(\"\\u0416\\u0434\\u0443 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438: \".concat(xhr.readyState));\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendRequest);\n\n//# sourceURL=webpack:///./src/js/modules/sendRequest.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_insertElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/insertElements.js */ \"./src/js/modules/insertElements.js\");\n/* harmony import */ var _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/bookCardTemplate.js */ \"./src/js/modules/bookCardTemplate.js\");\n/* harmony import */ var _modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sendRequest.js */ \"./src/js/modules/sendRequest.js\");\n$(document).ready(function () {\n  $('.page-header__toggle').on('click', function () {\n    $('.main-nav').toggleClass('.active');\n    $('.main-nav').toggle();\n  });\n  $('.slider').owlCarousel({\n    dots: false,\n    loop: true,\n    center: true,\n    nav: true,\n    margin: 20,\n    responsive: {\n      0: {\n        items: 1,\n        navText: [\"<svg class='slider-left' width='40' height='40'><use xlink:href='img/sprite.svg#arrow-left'></use></svg>\", \"<svg class='slider-right' width='40' height='40'><use xlink:href='img/sprite.svg#arrow-right'></use></svg>\"]\n      }\n    }\n  });\n  $('.novice__block').owlCarousel({\n    dots: false,\n    items: 1,\n    loop: true,\n    center: false,\n    autoWidth: true,\n    responsive: {\n      767: {\n        items: 3\n      },\n      1279: {\n        items: 4,\n        center: false\n      }\n    }\n  });\n  $('.description-page__slider').owlCarousel({\n    dots: false,\n    loop: true,\n    center: true,\n    nav: true,\n    margin: 20,\n    responsive: {\n      0: {\n        items: 1,\n        navText: [\"<svg class='description-page__slider-left' width='40' height='40'><use xlink:href='img/sprite.svg#arrow-left'></use></svg>\", \"<svg class='description-page__slider-right' width='40' height='40'><use xlink:href='img/sprite.svg#arrow-right'></use></svg>\"]\n      }\n    }\n  }); // $(window).resize(function() {\n  //   if ($(window).width() > 767) {\n  //     $('.novice__block').trigger('destroy.owl.carousel');\n  //   }\n  //   else {\n  //     return false;\n  //   }\n  // });\n  //SHOW PAGE\n\n  $('.description__pages-picture').on('click', function () {\n    $('.description-page').css('display', 'block');\n  });\n  $('.description-page__close').on('click', function () {\n    $('.description-page').fadeOut(500);\n  }); // $('.form').submit(function (e) {\n  //   e.preventDefault();\n  // });\n  // $('.form__btn').on('click', function(e) {\n  //   e.preventDefault();\n  //     $('.popup-success').css('display','block');\n  // });\n  // $('.popup-success__close').on('click', function() {\n  //   $('.popup-success').fadeOut(500);\n  // });\n  // $('.popup-error__close').on('click', function() {\n  //   $('.popup-error').fadeOut(500);\n  // });\n});\n\n\n // Объект данных для ajax запроса\n\nvar data = {\n  page: 1,\n  perPage: 8,\n  type: ''\n};\nObject(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(createDataAjax()); //Вешаем слушатель на табы\n\nvar tabsWrap = document.querySelector('.j-catalog__tabs');\nvar tabsArray = Array.from(tabsWrap.children);\ntabsArray.forEach(function (tab) {\n  var link = tab.firstElementChild;\n  link.addEventListener('click', function (event) {\n    event.preventDefault();\n    data.type = event.target.dataset.type;\n    var dataAjax = createDataAjax();\n    Object(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataAjax);\n  });\n  var type = link.dataset.type;\n}); // Функция подготовки url для GET запроса\n\nfunction createDataAjax() {\n  if (window.matchMedia(\"(min-width: 767px)\").matches) {\n    data.perPage = 8;\n  } else {\n    data.perPage = 3;\n  }\n\n  return \"https://api.do-epixx.ru/htmlpro/bookstore/books/get/\".concat(data.page, \"/\").concat(data.perPage, \"/\").concat(data.type);\n}\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });