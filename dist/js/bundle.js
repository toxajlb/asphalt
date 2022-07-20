/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
  let small = document.querySelector('#small'),
      middle = document.querySelector('#middle'),
      large = document.querySelector('#large'),
      crushedStone = document.querySelector('#crushed-stone'),
      sand = document.querySelector('#sand'),
      square = document.querySelector('#square'),
      btn = document.querySelector('.button_calc'),
      result = document.querySelector('#out'),
      oneSquarePerSmall = 110,
      oneSquarePerMiddle = 112,
      oneSquarePerLarge = 114,
      oneSquarePerSand = 7,
      oneSquarePerCrushedStone = 10;

  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {
      if (input.value.match(/\D/g)) input.value = '';else input.style.border = 'none';

      switch (input.getAttribute('id')) {
        case 'small':
          small = +input.value;
          break;

        case 'middle':
          middle = +input.value;
          break;

        case 'large':
          large = +input.value;
          break;

        case 'crushed-stone':
          crushedStone = +input.value;
          break;

        case 'sand':
          sand = +input.value;
          break;

        case 'square':
          square = +input.value;
          break;
      }
    });
  }

  getDynamicInformation('#small');
  getDynamicInformation('#middle');
  getDynamicInformation('#large');
  getDynamicInformation('#crushed-stone');
  getDynamicInformation('#sand');
  getDynamicInformation('#square');
  btn.addEventListener('click', () => {
    let totalSquareSmall = square * oneSquarePerSmall,
        totalSquareMiddle = square * oneSquarePerMiddle,
        totalSquareLarge = square * oneSquarePerLarge,
        totalSquareSand = square * oneSquarePerSand,
        totalSquareCrushedStone = square * oneSquarePerCrushedStone;

    if (small.value != '' && middle.value != '' && large.value != '' && crushedStone.value != '' && sand.value != '' && square.value != '') {
      let sum = small * totalSquareSmall * 25 + middle * totalSquareMiddle * 25 + large * totalSquareLarge * 25 + crushedStone * totalSquareCrushedStone + sand * totalSquareSand;
      result.textContent = `${sum} ₽`;
    } else alert('Пожалуйста, заполните все поля данными либо 0');
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./src/js/modules/carousel.js":
/*!************************************!*\
  !*** ./src/js/modules/carousel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function carousel() {
  $('.carousel__inner').slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    fade: true,
    cssEasy: 'linear',
    responsive: [{
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu() {
  const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        menuSecond = document.querySelector('.menu-second'),
        menuPrice = document.querySelector('.menu-price'),
        closeElem = document.querySelector('.menu__close'),
        closeElemSecond = document.querySelector('.menu-second__close'),
        closeElemPrice = document.querySelector('.menu-price__close'),
        asphalting = document.querySelector('#asphalting'),
        prices = document.querySelector('#prices');

  function menuChoise(elem1, elem2, elem3) {
    elem1.addEventListener('click', () => {
      elem2.classList.add('active');
    });
    elem3.addEventListener('click', () => {
      elem2.classList.remove('active');
    });
  }

  menuChoise(hamburger, menu, closeElem);
  menuChoise(asphalting, menuSecond, closeElemSecond);
  menuChoise(prices, menuPrice, closeElemPrice);
  $('.menu-second__pointer').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.menu-second__sublist').eq(i).toggleClass('.menu-second__sublist active');
      $('.menu-second__pointer').eq(i).toggleClass('.menu-second__pointer active');
    });
  });
  $('.menu-price__pointer').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.menu-price__sublist').eq(i).toggleClass('.menu-price__sublist active');
      $('.menu-price__pointer').eq(i).toggleClass('.menu-price__pointer active');
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function modal() {
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        },
        check: "required"
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите минимум {0} символа!")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        },
        check: "Кликните флажок чтобы продолжить!"
      }
    });
  }

  ;
  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');
  $('input[name=phone]').mask("+7 (999) 999-99-99");
  $('form').submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/js/modules/promoSlider.js":
/*!***************************************!*\
  !*** ./src/js/modules/promoSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function promoSlider() {
  $('.promo__slider').slick({
    adaptiveHeight: true,
    arrows: false,
    fade: true,
    speed: 3000,
    cssEasy: 'linear'
    /*         autoplay: true,
            autoplaySpeed: 4500,
            pauseOnFocus: false,  */

  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (promoSlider);

/***/ }),

/***/ "./src/js/modules/smoothScroll.js":
/*!****************************************!*\
  !*** ./src/js/modules/smoothScroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function smoothScroll() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
  $("a[href=#up]").click(function () {
    const _href = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    return false;
  });
  new WOW().init();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this).addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active').closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  ;
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/carousel */ "./src/js/modules/carousel.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_promoSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/promoSlider */ "./src/js/modules/promoSlider.js");
/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ "./src/js/modules/smoothScroll.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");









window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_promoSlider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_6__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map