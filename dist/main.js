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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContact\": () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact(){\n    let contentDiv = document.getElementById('contentDiv');\n    contentDiv.innerHTML = 'this is the contact page';\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome(){\n    let contentDiv = document.getElementById('contentDiv');\n    contentDiv.innerHTML = '';\n\n    let name = document.createElement('h1');\n    name.innerHTML = 'Smoke Sesh BBQ';\n    contentDiv.appendChild(name);\n\n    let info = document.createElement('p');\n    info.innerHTML = 'The best BBQ around! Our food has heft';\n    contentDiv.appendChild(info);\n\n    let image = document.createElement('img');\n    image.src = './images/bbq.jpeg';\n    contentDiv.appendChild(image);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n\n\nconst content = document.getElementById('content');\n\n(0,_page__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu(){\n    let contentDiv = document.getElementById('contentDiv');\n    contentDiv.innerHTML = '';\n\n    let dishTitle = document.createElement('h3');\n    dishTitle.innerHTML = 'Main Dishes';\n    contentDiv.appendChild(dishTitle);\n\n    createFoodItem('Full Rack Ribs', 'Full rack of fall off the bone ribs. Cherry and applewood smoked deliciousness. Available sauced or naked.', 23.99);\n    createFoodItem('Half Rack Ribs', 'Half rack of our rib meat candy. Available sauced or naked.', 14.99);\n    createFoodItem('Smoked Brisket', 'Melt in your mouth brisket. Tender and juicy', 20.99);\n    createFoodItem('Burnt Ends', 'Burnt ends... \\'nough said', 17.99);\n    createFoodItem('Smoked Pull Pork Sandwich', 'Pork is smoked overnight and infused with all the smokey goodness. Served with slaw and your choice sauce.', 12.99);\n    createFoodItem('Smoked Chicken Breast', 'Tender juicy smoked BBQ chicken breast.', 16.99);\n    createFoodItem('Dozen Smoked Wings', 'A dozen mesquite smoked wings. Tossed in your choice of sauce and server with ranch or bleu cheese.', 14.99);\n\n    let sideTitle = document.createElement('h3');\n    sideTitle.innerHTML = 'Sides';\n    contentDiv.appendChild(sideTitle);\n\n    createFoodItem('Mac n Cheese', 'Thicc, smoked, cheesey goodness.', 5.99);\n    createFoodItem('Potatoe Salad', 'Our legendary homemade potatoe salad.', 3.99);\n    createFoodItem('Coleslaw', 'Slaw, serve with everything and enjoy.', 4.99);\n    createFoodItem('Smoked Baked Beans', 'Slow smoked baked beans', 4.99);\n    createFoodItem('Corn Bread', 'Corn bread', 7.99);\n    createFoodItem('French Fries', 'Handcut fries, served with our smoked ketchup.', 3.99);\n}\n\nfunction createFoodItem(name, desc, price){\n    let foodDiv = document.createElement('div');\n    let n = document.createElement('h3');\n    n.innerHTML = name;\n    let d = document.createElement('p');\n    d.innerHTML = desc;\n    let p = document.createElement('p');\n    p.innerHTML = '$' + price;\n\n    foodDiv.appendChild(n);\n    foodDiv.appendChild(d);\n    foodDiv.appendChild(p);\n\n    contentDiv.appendChild(foodDiv);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createNav(){\n    const navContainer = document.createElement('nav');\n\n    let homeNav = document.createElement('button');\n    homeNav.innerHTML = 'Home';\n    homeNav.addEventListener('click', () => {\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();\n    });\n\n    let menuNav = document.createElement('button');\n    menuNav.innerHTML = 'Menu';\n    menuNav.addEventListener('click', () => {\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\n    });\n\n    let contactNav = document.createElement('button');\n    contactNav.innerHTML = 'Contact';\n    contactNav.addEventListener('click', () => {\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContact)();\n    })\n\n    navContainer.appendChild(homeNav);\n    navContainer.appendChild(menuNav);\n    navContainer.appendChild(contactNav);\n\n    content.appendChild(navContainer);\n}\n\nfunction createFooter(){\n    const footer = document.createElement('footer');\n    let a = document.createElement('a');\n    a.setAttribute('href', 'https://github.com/Cnels1986');\n    a.innerHTML = '&copy Chris Nelson 2021';\n    footer.appendChild(a);\n    content.appendChild(footer);\n}\n\nfunction reset(){\n    content.innerHTML = '';\n    createNav();\n}\n\n\nfunction pageLoad(){\n    createNav();\n    \n    // div will contain all the content, allowing the nav and footer to remain untouched/changed\n    let contentDiv = document.createElement('div');\n    contentDiv.setAttribute('id', 'contentDiv');\n    content.appendChild(contentDiv);\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();\n    createFooter();\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/page.js?");

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