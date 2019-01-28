(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "Y7k3":
/*!************************************************!*\
  !*** ./src/Caching/moduleIdentifiers/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"LvDl\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ \"lsy8\");\n\r\n\r\nfunction component() {\r\n    var element = document.createElement('div');\r\n  \r\n    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的\r\n    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');\r\n    element.onclick=_print__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(null,'Hello webpack!');\r\n    return element;\r\n}\r\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/Caching/moduleIdentifiers/index.js?");

/***/ }),

/***/ "lsy8":
/*!************************************************!*\
  !*** ./src/Caching/moduleIdentifiers/print.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return print; });\nfunction print(text){\r\n    console.log(text);\r\n}\n\n//# sourceURL=webpack:///./src/Caching/moduleIdentifiers/print.js?");

/***/ })

},[["Y7k3","manifest","vendor"]]]);