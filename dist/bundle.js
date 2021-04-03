/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/jump.js/dist/jump.module.js":
/*!**************************************************!*\
  !*** ./node_modules/jump.js/dist/jump.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Robert Penner's easeInOutQuad\n\n// find the rest of his easing functions here: http://robertpenner.com/easing/\n// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js\n\nvar easeInOutQuad = function easeInOutQuad(t, b, c, d) {\n  t /= d / 2;\n  if (t < 1) return c / 2 * t * t + b;\n  t--;\n  return -c / 2 * (t * (t - 2) - 1) + b;\n};\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) {\n  return typeof obj;\n} : function (obj) {\n  return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n};\n\nvar jumper = function jumper() {\n  // private variable cache\n  // no variables are created during a jump, preventing memory leaks\n\n  var element = void 0; // element to scroll to                   (node)\n\n  var start = void 0; // where scroll starts                    (px)\n  var stop = void 0; // where scroll stops                     (px)\n\n  var offset = void 0; // adjustment from the stop position      (px)\n  var easing = void 0; // easing function                        (function)\n  var a11y = void 0; // accessibility support flag             (boolean)\n\n  var distance = void 0; // distance of scroll                     (px)\n  var duration = void 0; // scroll duration                        (ms)\n\n  var timeStart = void 0; // time scroll started                    (ms)\n  var timeElapsed = void 0; // time spent scrolling thus far          (ms)\n\n  var next = void 0; // next scroll position                   (px)\n\n  var callback = void 0; // to call when done scrolling            (function)\n\n  // scroll position helper\n\n  function location() {\n    return window.scrollY || window.pageYOffset;\n  }\n\n  // element offset helper\n\n  function top(element) {\n    return element.getBoundingClientRect().top + start;\n  }\n\n  // rAF loop helper\n\n  function loop(timeCurrent) {\n    // store time scroll started, if not started already\n    if (!timeStart) {\n      timeStart = timeCurrent;\n    }\n\n    // determine time spent scrolling so far\n    timeElapsed = timeCurrent - timeStart;\n\n    // calculate next scroll position\n    next = easing(timeElapsed, start, distance, duration);\n\n    // scroll to it\n    window.scrollTo(0, next);\n\n    // check progress\n    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop\n    : done(); // scrolling is done\n  }\n\n  // scroll finished helper\n\n  function done() {\n    // account for rAF time rounding inaccuracies\n    window.scrollTo(0, start + distance);\n\n    // if scrolling to an element, and accessibility is enabled\n    if (element && a11y) {\n      // add tabindex indicating programmatic focus\n      element.setAttribute('tabindex', '-1');\n\n      // focus the element\n      element.focus();\n    }\n\n    // if it exists, fire the callback\n    if (typeof callback === 'function') {\n      callback();\n    }\n\n    // reset time for next jump\n    timeStart = false;\n  }\n\n  // API\n\n  function jump(target) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    // resolve options, or use defaults\n    duration = options.duration || 1000;\n    offset = options.offset || 0;\n    callback = options.callback; // \"undefined\" is a suitable default, and won't be called\n    easing = options.easing || easeInOutQuad;\n    a11y = options.a11y || false;\n\n    // cache starting position\n    start = location();\n\n    // resolve target\n    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {\n      // scroll from current position\n      case 'number':\n        element = undefined; // no element to scroll to\n        a11y = false; // make sure accessibility is off\n        stop = start + target;\n        break;\n\n      // scroll to element (node)\n      // bounding rect is relative to the viewport\n      case 'object':\n        element = target;\n        stop = top(element);\n        break;\n\n      // scroll to element (selector)\n      // bounding rect is relative to the viewport\n      case 'string':\n        element = document.querySelector(target);\n        stop = top(element);\n        break;\n    }\n\n    // resolve scroll distance, accounting for offset\n    distance = stop - start + offset;\n\n    // resolve duration\n    switch (_typeof(options.duration)) {\n      // number in ms\n      case 'number':\n        duration = options.duration;\n        break;\n\n      // function passed the distance of the scroll\n      case 'function':\n        duration = options.duration(distance);\n        break;\n    }\n\n    // start the loop\n    window.requestAnimationFrame(loop);\n  }\n\n  // expose only the jump method\n  return jump;\n};\n\n// export singleton\n\nvar singleton = jumper();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singleton);\n\n\n//# sourceURL=webpack://rebuild-my-website/./node_modules/jump.js/dist/jump.module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jump.js */ \"./node_modules/jump.js/dist/jump.module.js\");\n\r\n\r\n// Obtendo o elemento <button class=\"nav__toggle\">\r\nconst $toggleBtn = document.querySelector('.nav-toogle');\r\n// Obtendo o elemento <header>\r\nconst $header = document.querySelector('header');\r\n// Obtendo o elemento <ul class=\"nav__options\">\r\nconst $navOpts = document.querySelector('.nav__options');\r\n\r\n\r\n// Associando o evento 'click' ao elemento <button class=\"nav__toggle\">\r\n$toggleBtn.addEventListener('click', (e) => {\r\n  toggleMenu();\r\n  // e.currentTarget.classList.toggle('open');\r\n})\r\n\r\nfunction toggleMenu() {\r\n  // Se o elemento <header> conter a classe '.grow', aguarda-se 200ms para remove-la. Senão, adiciona-se tal classe.\r\n  if ($header.classList.contains('grow')) {\r\n    $toggleBtn.classList.remove('open')\r\n    setTimeout(function() {$header.classList.remove('grow')}, 200);\r\n  } else {\r\n    $header.classList.add('grow');\r\n    $toggleBtn.classList.add('open');\r\n  }\r\n\r\n  // Se o elemento <ul class=\"nav__options\"> conter a classe '.slide' a mesma é removida. Senão aguarda-se 200ms para adiciona-la.\r\n  if ($navOpts.classList.contains('slide')) {\r\n    $navOpts.classList.remove('slide');\r\n  } else {\r\n    setTimeout(function() {$navOpts.classList.add('slide')}, 100);\r\n  }\r\n}\r\n\r\n\r\n/* SMOOTH SCROLL */\r\n\r\n// Obtendo o botão <a class=\"btn-contact-lg\">\r\nconst $btnContactSm = document.querySelector('#btn-contact-sm');\r\n\r\n// Obtendo o botão <a class=\"btn-contact-lg\">\r\nconst $btnContactLg = document.querySelector('#btn-contact-lg');\r\n\r\n// Obtendo o botão <a class=\"btn-portfolio-sm\">\r\nconst $btnPortfolioSm = document.querySelector('#btn-portfolio-sm');\r\n\r\n// Obtendo o botão <a class=\"btn-portfolio-lg\">\r\nconst $btnPortfolioLg = document.querySelector('#btn-portfolio-lg');\r\n\r\n\r\n\r\n// Aplicando o SMOOTH SCROLL ao clicar nos botões do menu\r\n\r\n// Botão CONTATO tela GRANDE\r\n$btnContactLg.addEventListener('click', function() {\r\n  (0,jump_js__WEBPACK_IMPORTED_MODULE_0__.default)('.contact');\r\n});\r\n\r\n// Botão CONTATO tela PEQUENA\r\n$btnContactSm.addEventListener('click', function() {\r\n  (0,jump_js__WEBPACK_IMPORTED_MODULE_0__.default)('.contact');\r\n  toggleMenu();\r\n});\r\n\r\n// Botão PORTFOLIO tela GRANDE\r\n$btnPortfolioLg.addEventListener('click', function() {\r\n  (0,jump_js__WEBPACK_IMPORTED_MODULE_0__.default)('.portfolio', {\r\n    offset: -70\r\n  });\r\n});\r\n\r\n// Botão PORTFOLIO tela PEQUENA\r\n$btnPortfolioSm.addEventListener('click', function() {\r\n  (0,jump_js__WEBPACK_IMPORTED_MODULE_0__.default)('.portfolio', {\r\n    offset: -60\r\n  });\r\n  toggleMenu();\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*// Obtendo o botão <a class=\"btn-contact-lg\">\r\nconst $btnContactLg = document.querySelector('#btn-contact-lg');\r\n// Obtendo o botão a <a class=\"btn-portfolio-lg\">\r\nconst $btnPortfolioLg = document.querySelector('#btn-portfolio-lg');\r\n\r\n// Essa função recebe dois parâmetros. O primeiro consiste no elemento para o qual a página deve scrollar e o segundo a duração da animação de rolagem\r\nconst smoothScroll = function(target, duration) {\r\n  // Obtendo o elemento para o qual a página deverá scrollar\r\n  var $target = document.querySelector(target);\r\n  // Obtendo a posição da aresta superior do elemento alvo do scroll\r\n  const targetPosition = $target.getBoundingClientRect().top;\r\n  // Obtendo a distância inicial do scroll em relação ao eixo Y da viewport\r\n  const startPosition = window.pageYOffset;\r\n  // Calculando a distancia entre o alvo e a posição atual do scroll\r\n  const distance = targetPosition - startPosition;\r\n  // Tempo inicial\r\n  let startTime = null;\r\n\r\n  // Essa função executa a animação de scroll enquanto o tempo passado desde o momento do clique for menor que a duração, no caso, 1 segundo.\r\n  function animation(currentTime) {\r\n    if (startTime === null) {startTime = currentTime;}\r\n    let timeElapsed = currentTime - startTime;\r\n    const run = ease(timeElapsed, startPosition, distance, duration);\r\n    window.scrollTo(0, run);\r\n    if(timeElapsed < duration) {requestAnimationFrame(animation);}\r\n  }\r\n\r\n  function ease(t, b, c, d) {\r\n    t /= d / 2;\r\n    if (t < 1) {return c / 2 * t * t + b;}\r\n    t--;\r\n    return -c / 2 * (t * (t-2) - 1) + b;\r\n  }\r\n\r\n  requestAnimationFrame(animation);\r\n}\r\n\r\n$btnContactLg.addEventListener('click', function() {\r\n  smoothScroll('.contact', 1000);\r\n});\r\n*/\n\n//# sourceURL=webpack://rebuild-my-website/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;