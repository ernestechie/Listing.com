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

/***/ "./node_modules/firebase/app/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.esm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* empty/unused harmony star reexport */\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nvar name = \"firebase\";\nvar version = \"9.8.2\";\n\n/**\r\n * @license\r\n * Copyright 2020 Google LLC\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *   http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(name, version, 'app');\n//# sourceMappingURL=index.esm.js.map\n\n\n//# sourceURL=webpack://Listings.io/./node_modules/firebase/app/dist/index.esm.js?");

/***/ }),

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* empty/unused harmony star reexport */\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n//# sourceMappingURL=index.esm.js.map\n\n\n//# sourceURL=webpack://Listings.io/./node_modules/firebase/auth/dist/index.esm.js?");

/***/ }),

/***/ "./node_modules/firebase/firestore/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* empty/unused harmony star reexport */\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n//# sourceMappingURL=index.esm.js.map\n\n\n//# sourceURL=webpack://Listings.io/./node_modules/firebase/firestore/dist/index.esm.js?");

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\nsetInterval(() => {\r\n  if (window.innerWidth <= 768) {\r\n    document.querySelector('#coming-soon').style.display = 'none';\r\n    document.querySelector('#app').style.display = 'block';\r\n  } else {\r\n    document.querySelector('#coming-soon').style.display = 'block';\r\n    document.querySelector('#app').style.display = 'none';\r\n  }\r\n}, 100);\r\n\r\n// ? FIREBASE\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: 'AIzaSyAGXZbWML8bWjttNCUnObueuTtUF9wDDD0',\r\n  authDomain: 'listing-website-22ca8.firebaseapp.com',\r\n  projectId: 'listing-website-22ca8',\r\n  storageBucket: 'listing-website-22ca8.appspot.com',\r\n  messagingSenderId: '371453686013',\r\n  appId: '1:371453686013:web:b20a45cbd3e406d61f4e94',\r\n  measurementId: 'G-CK9VY74N7Z',\r\n};\r\n\r\n// Initialize Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst analytics = getAnalytics(app);\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\r\n\r\n// Initialize Firebase Authentication\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\n\n\n//# sourceURL=webpack://Listings.io/./src/js/App.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/App.js");
/******/ 	
/******/ })()
;