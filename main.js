/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/form.js":
/*!**************************!*\
  !*** ./src/base/form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_buttonCreatePost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/buttonCreatePost */ "./src/components/buttonCreatePost.js");
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/notification */ "./src/components/notification.js");
/* harmony import */ var _components_createNewPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/createNewPost */ "./src/components/createNewPost.js");
/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/error */ "./src/components/error.js");




const formButton = document.querySelector('.form__button');
const title = document.getElementById('title');
const textarea = document.getElementById('textarea');
formButton.addEventListener('click', formButtonHandler);
title.addEventListener('input', function () {
  title.style.border = '1px solid rgb(141, 58, 189)';
});

function formButtonHandler(e) {
  e.preventDefault();
  isValid();

  if (isValid()) {
    title.value = '';
    textarea.value = '';
    _components_notification__WEBPACK_IMPORTED_MODULE_1__.notification.style.top = '50px';
    (0,_components_notification__WEBPACK_IMPORTED_MODULE_1__.clearNotification)();
    _components_buttonCreatePost__WEBPACK_IMPORTED_MODULE_0__.buttonCreatePost.classList.remove('hide');
    _components_buttonCreatePost__WEBPACK_IMPORTED_MODULE_0__.createForm.classList.add('hide');
    (0,_components_createNewPost__WEBPACK_IMPORTED_MODULE_2__.createNewPost)();
  }
}

function isValid() {
  let isFormValid = true;
  localStorage.setItem(title.value, textarea.value);
  Object.keys(localStorage).forEach(elem => {
    const validator = localStorage[elem];
    let isValid = true;
    isValid = localStorage[elem].length && isValid;
    if (isValid) (0,_components_error__WEBPACK_IMPORTED_MODULE_3__.clearError)(_components_error__WEBPACK_IMPORTED_MODULE_3__.errorText, textarea);
    if (isValid) (0,_components_error__WEBPACK_IMPORTED_MODULE_3__.clearError)(_components_error__WEBPACK_IMPORTED_MODULE_3__.errorTitle, title);
    isFormValid = isFormValid && isValid;

    if (elem.length == 0 || validator.length == 0) {
      (0,_components_error__WEBPACK_IMPORTED_MODULE_3__.setError)(_components_error__WEBPACK_IMPORTED_MODULE_3__.errorTitle, elem, title);
      (0,_components_error__WEBPACK_IMPORTED_MODULE_3__.setError)(_components_error__WEBPACK_IMPORTED_MODULE_3__.errorText, validator, textarea);
      isFormValid = false;
    }
  });
  return isFormValid;
}

/***/ }),

/***/ "./src/components/buttonCreatePost.js":
/*!********************************************!*\
  !*** ./src/components/buttonCreatePost.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonCreatePost": () => (/* binding */ buttonCreatePost),
/* harmony export */   "createForm": () => (/* binding */ createForm)
/* harmony export */ });
const buttonCreatePost = document.querySelector('.create__button');
const createForm = document.getElementById('create');
buttonCreatePost.addEventListener('click', createPost);

function createPost(e) {
  e.target.classList.add('hide');
  localStorage.clear();
  createForm.classList.remove('hide');
}

/***/ }),

/***/ "./src/components/createNewPost.js":
/*!*****************************************!*\
  !*** ./src/components/createNewPost.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewPost": () => (/* binding */ createNewPost)
/* harmony export */ });
const content = document.querySelector('.content');
function createNewPost() {
  let keys = Object.keys(localStorage);
  let titlePost = '';
  let bodyPost = '';

  for (let key of keys) {
    titlePost = key;
    bodyPost = localStorage.getItem(key);
  }

  let div = document.createElement('div');
  content.append(div);
  div.className = 'post';
  div.innerHTML = "\n\t<h2 class=\"post-title\">".concat(titlePost, "</h2>\n\t<p class=\"post-text hide\">").concat(bodyPost, "</p>\n\t");
  const postTitleAll = Array.from(document.querySelectorAll('.post-title'));
  postTitleAll.forEach(elem => {
    elem.addEventListener('click', showPost);
    elem.style.backgroundColor = "rgb(".concat(randomNum(0, 255), ", ").concat(randomNum(0, 255), ", ").concat(randomNum(0, 255), ")");
  });
  localStorage.clear();
}

function showPost() {
  this.nextElementSibling.classList.toggle('hide');
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/***/ }),

/***/ "./src/components/error.js":
/*!*********************************!*\
  !*** ./src/components/error.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearError": () => (/* binding */ clearError),
/* harmony export */   "errorText": () => (/* binding */ errorText),
/* harmony export */   "errorTitle": () => (/* binding */ errorTitle),
/* harmony export */   "setError": () => (/* binding */ setError)
/* harmony export */ });
const errorTitle = document.querySelector('.error-title');
const errorText = document.querySelector('.error-text');
function clearError(elem, dom) {
  dom.style.border = '1px solid rgb(133, 133, 133)';
  elem.classList.add('hide');
}
function setError(item, el, dom) {
  if (el.length == 0) {
    item.classList.remove('hide');
    localStorage.clear();
    dom.style.border = '1px solid red';
  }

  if (el.length > 0) {
    dom.style.border = '1px solid rgb(133, 133, 133)';
    item.classList.add('hide');
  }
}

/***/ }),

/***/ "./src/components/notification.js":
/*!****************************************!*\
  !*** ./src/components/notification.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearNotification": () => (/* binding */ clearNotification),
/* harmony export */   "notification": () => (/* binding */ notification)
/* harmony export */ });
const notificationButton = document.querySelector('.notification__button');
const notification = document.querySelector('.notification');
notificationButton.addEventListener('click', () => {
  notification.style.top = '-100%';
});
function clearNotification() {
  setTimeout(() => {
    notification.style.top = '-100%';
  }, 3000);
}

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _components_buttonCreatePost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/buttonCreatePost */ "./src/components/buttonCreatePost.js");
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/form */ "./src/base/form.js");
/* harmony import */ var _components_createNewPost_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/createNewPost.js */ "./src/components/createNewPost.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map