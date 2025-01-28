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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n  const button = document.getElementById(\"popover-button\");\r\n  const popover = document.getElementById(\"popover\");\r\n\r\n  button.addEventListener(\"click\", () => {\r\n    const rect = button.getBoundingClientRect();\r\n    const popoverWidth = popover.offsetWidth;\r\n\r\n    popover.style.left = `${rect.left + rect.width / 2 - popoverWidth / 2}px`;\r\n    popover.style.top = `${rect.top - popover.offsetHeight - 10}px`;\r\n    popover.style.display = \"block\";\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://popover-widget/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;