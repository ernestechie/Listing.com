/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ (() => {

eval("setInterval(() => {\r\n  if (window.innerWidth <= 768) {\r\n    document.querySelector('#coming-soon').style.display = 'none';\r\n    document.querySelector('#app').style.display = 'block';\r\n  } else {\r\n    document.querySelector('#coming-soon').style.display = 'block';\r\n    document.querySelector('#app').style.display = 'none';\r\n  }\r\n}, 100);\r\n\n\n//# sourceURL=webpack://Listings.io/./src/js/App.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/App.js"]();
/******/ 	
/******/ })()
;