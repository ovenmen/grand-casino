module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/_error.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_fetch_data_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetch-data-page */ "./utils/fetch-data-page.js");

var _jsxFileName = "D:\\PROJECTS\\grand-casino\\pages\\_error.js";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Error = ({
  statusCode,
  errorMessage
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
  className: "jsx-1937488466" + " " + "error",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-1937488466" + " " + "grid-x grid-padding-x",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-1937488466" + " " + "cell small-12 medium-12 large-12",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "jsx-1937488466" + " " + "text-center font-bold error-header",
        children: statusCode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "jsx-1937488466" + " " + "text-center",
        children: errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1937488466",
    children: ".error.jsx-1937488466{padding:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQUk9KRUNUU1xcZ3JhbmQtY2FzaW5vXFxwYWdlc1xcX2Vycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCb0IsQUFHOEIsYUFDakIiLCJmaWxlIjoiRDpcXFBST0pFQ1RTXFxncmFuZC1jYXNpbm9cXHBhZ2VzXFxfZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmltcG9ydCB7XHJcbiAgICBwcm90b2NvbCxcclxuICAgIHNpdGVOYW1lLFxyXG4gICAgcG9ydFxyXG59IGZyb20gJy4uL3V0aWxzL2ZldGNoLWRhdGEtcGFnZSdcclxuXHJcbmNvbnN0IEVycm9yID0gKHtcclxuICAgIHN0YXR1c0NvZGUsXHJcbiAgICBlcnJvck1lc3NhZ2VcclxufSkgPT4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZXJyb3JcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQteCBncmlkLXBhZGRpbmcteFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgc21hbGwtMTIgbWVkaXVtLTEyIGxhcmdlLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1ib2xkIGVycm9yLWhlYWRlclwiPntzdGF0dXNDb2RlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57ZXJyb3JNZXNzYWdlfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4pXHJcblxyXG5FcnJvci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXMsIGVycm9yIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyA/IHJlcy5zdGF0dXNDb2RlIDogZXJyb3IgPyBlcnJvci5zdGF0dXNDb2RlIDogNDA0XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvdG9jb2x9Oi8vJHtzaXRlTmFtZX06JHtwb3J0fS9hcGkvZXJyb3JgXHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdGltZW91dDogNTAwMCxcclxuICAgICAgICAgICAgY29tcHJlc3M6IHRydWVcclxuICAgICAgICB9IFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBwYXJhbXMpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnJ1xyXG5cclxuICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICfQodGC0YDQsNC90LjRhtCwINC90LUg0L3QsNC50LTQtdC90LAnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICfQp9GC0L4t0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6IDooJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgc3RhdHVzQ29kZSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbkVycm9yLnByb3BUeXBlcyA9IHtcclxuICAgIGVycm9yTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHN0YXR1c0NvZGU6IFByb3BUeXBlcy5udW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JcclxuIl19 */\n/*@ sourceURL=D:\\\\PROJECTS\\\\grand-casino\\\\pages\\\\_error.js */"
  }, void 0, false, void 0, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 5
}, undefined);

Error.getInitialProps = async ({
  res,
  error
}) => {
  try {
    const statusCode = res ? res.statusCode : error ? error.statusCode : 404;
    const url = `${_utils_fetch_data_page__WEBPACK_IMPORTED_MODULE_4__["protocol"]}://${_utils_fetch_data_page__WEBPACK_IMPORTED_MODULE_4__["siteName"]}:${_utils_fetch_data_page__WEBPACK_IMPORTED_MODULE_4__["port"]}/api/error`;
    const params = {
      method: 'POST',
      timeout: 5000,
      compress: true
    };
    const response = await fetch(url, params);
    const data = await response.json();
    let errorMessage = '';

    if (statusCode === 404) {
      errorMessage = 'Страница не найдена';
    }

    if (statusCode === 500) {
      errorMessage = 'Что-то пошло не так :(';
    }

    return _objectSpread(_objectSpread({}, data), {}, {
      statusCode,
      errorMessage
    });
  } catch (error) {
    throw new Error(error);
  }
};

Error.propTypes = {
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  statusCode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./utils/fetch-data-page.js":
/*!**********************************!*\
  !*** ./utils/fetch-data-page.js ***!
  \**********************************/
/*! exports provided: protocol, siteName, port, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protocol", function() { return protocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteName", function() { return siteName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "port", function() { return port; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const dev = true;
const mode = process.env.MODE === 'no-certificate';
let protocol = dev ? 'http' : 'https';
let siteName = dev ? 'localhost' : 'grand-casino.com.ru';
let port = dev ? 3000 : 443;

if (mode) {
  protocol = 'http';
  siteName = 'grand-casino.com.ru';
  port = 80;
}

const fetchDataPage = namePage => async context => {
  try {
    const statusCode = context.res ? context.res.statusCode : null;
    const url = `${protocol}://${siteName}:${port}/api/${namePage}`;
    const params = {
      method: 'POST',
      timeout: 5000,
      compress: true
    };
    const response = await fetch(url, params);
    const data = await response.json();
    let errorMessage = '';

    if (statusCode === 404) {
      errorMessage = 'Страница не найдена';
    }

    if (statusCode === 500) {
      errorMessage = 'Что-то пошло не так :(';
    }

    return {
      props: _objectSpread(_objectSpread({}, data), {}, {
        statusCode,
        errorMessage
      })
    };
  } catch (error) {
    throw new Error(error);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (fetchDataPage);

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2Vycm9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoLWRhdGEtcGFnZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiRXJyb3IiLCJzdGF0dXNDb2RlIiwiZXJyb3JNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyb3IiLCJ1cmwiLCJwcm90b2NvbCIsInNpdGVOYW1lIiwicG9ydCIsInBhcmFtcyIsIm1ldGhvZCIsInRpbWVvdXQiLCJjb21wcmVzcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImRldiIsIm1vZGUiLCJwcm9jZXNzIiwiZW52IiwiTU9ERSIsImZldGNoRGF0YVBhZ2UiLCJuYW1lUGFnZSIsImNvbnRleHQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FB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bW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL19lcnJvci5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuaW1wb3J0IHtcclxuICAgIHByb3RvY29sLFxyXG4gICAgc2l0ZU5hbWUsXHJcbiAgICBwb3J0XHJcbn0gZnJvbSAnLi4vdXRpbHMvZmV0Y2gtZGF0YS1wYWdlJ1xyXG5cclxuY29uc3QgRXJyb3IgPSAoe1xyXG4gICAgc3RhdHVzQ29kZSxcclxuICAgIGVycm9yTWVzc2FnZVxyXG59KSA9PiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJlcnJvclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC14IGdyaWQtcGFkZGluZy14XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbCBzbWFsbC0xMiBtZWRpdW0tMTIgbGFyZ2UtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LWJvbGQgZXJyb3ItaGVhZGVyXCI+e3N0YXR1c0NvZGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntlcnJvck1lc3NhZ2V9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L3NlY3Rpb24+XHJcbilcclxuXHJcbkVycm9yLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcywgZXJyb3IgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnJvciA/IGVycm9yLnN0YXR1c0NvZGUgOiA0MDRcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm90b2NvbH06Ly8ke3NpdGVOYW1lfToke3BvcnR9L2FwaS9lcnJvcmBcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiA1MDAwLFxyXG4gICAgICAgICAgICBjb21wcmVzczogdHJ1ZVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHBhcmFtcylcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnXHJcblxyXG4gICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDQpIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ9Ch0YLRgNCw0L3QuNGG0LAg0L3QtSDQvdCw0LnQtNC10L3QsCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA1MDApIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ9Cn0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LogOignXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBzdGF0dXNDb2RlLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcilcclxuICAgIH1cclxufVxyXG5cclxuRXJyb3IucHJvcFR5cGVzID0ge1xyXG4gICAgZXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3RhdHVzQ29kZTogUHJvcFR5cGVzLm51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvclxyXG4iLCJjb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXHJcbmNvbnN0IG1vZGUgPSBwcm9jZXNzLmVudi5NT0RFID09PSAnbm8tY2VydGlmaWNhdGUnXHJcbmV4cG9ydCBsZXQgcHJvdG9jb2wgPSBkZXYgPyAnaHR0cCcgOiAnaHR0cHMnXHJcbmV4cG9ydCBsZXQgc2l0ZU5hbWUgPSBkZXYgPyAnbG9jYWxob3N0JyA6ICdncmFuZC1jYXNpbm8uY29tLnJ1J1xyXG5leHBvcnQgbGV0IHBvcnQgPSBkZXYgPyAzMDAwIDogNDQzXHJcblxyXG5pZiAobW9kZSkge1xyXG4gICAgcHJvdG9jb2wgPSAnaHR0cCdcclxuICAgIHNpdGVOYW1lID0gJ2dyYW5kLWNhc2luby5jb20ucnUnXHJcbiAgICBwb3J0ID0gODBcclxufVxyXG5cclxuY29uc3QgZmV0Y2hEYXRhUGFnZSA9IChuYW1lUGFnZSkgPT4gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IGNvbnRleHQucmVzID8gY29udGV4dC5yZXMuc3RhdHVzQ29kZSA6IG51bGxcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm90b2NvbH06Ly8ke3NpdGVOYW1lfToke3BvcnR9L2FwaS8ke25hbWVQYWdlfWBcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiA1MDAwLFxyXG4gICAgICAgICAgICBjb21wcmVzczogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcGFyYW1zKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJydcclxuXHJcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDQwNCkge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAn0KHRgtGA0LDQvdC40YbQsCDQvdC1INC90LDQudC00LXQvdCwJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDUwMCkge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAn0KfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQuiA6KCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YVBhZ2UiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=