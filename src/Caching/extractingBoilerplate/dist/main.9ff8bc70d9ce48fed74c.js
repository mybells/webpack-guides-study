(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/Caching/extractingBoilerplate/index.js":
/*!****************************************************!*\
  !*** ./src/Caching/extractingBoilerplate/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _moduleIdentifiers_print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moduleIdentifiers/print */ \"./src/Caching/moduleIdentifiers/print.js\");\n\r\n\r\nfunction component() {\r\n    var element = document.createElement('div');\r\n  \r\n    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的\r\n    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');\r\n    element.onclick=_moduleIdentifiers_print__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(null,'Hello webpack!');\r\n\r\n    return element;\r\n}\r\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/Caching/extractingBoilerplate/index.js?");

/***/ }),

/***/ "./src/Caching/moduleIdentifiers/print.js":
/*!************************************************!*\
  !*** ./src/Caching/moduleIdentifiers/print.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return print; });\nfunction print(text){\r\n    console.log(text);\r\n}\n\n//# sourceURL=webpack:///./src/Caching/moduleIdentifiers/print.js?");

/***/ })

},[["./src/Caching/extractingBoilerplate/index.js","manifest","vendor"]]]);