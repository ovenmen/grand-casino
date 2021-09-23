"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst {\n  MongoClient\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n  useUnifiedTopology: true,\n  useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\n\nif (!process.env.MONGODB_URI) {\n  throw new Error('Please add your Mongo URI to .env.local');\n}\n\nif (true) {\n  // In development mode, use a global variable so that the value\n  // is preserved across module reloads caused by HMR (Hot Module Replacement).\n  if (!global._mongoClientPromise) {\n    client = new MongoClient(uri, options);\n    global._mongoClientPromise = client.connect();\n  }\n\n  clientPromise = global._mongoClientPromise;\n} else {} // Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbW9uZ29kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTtBQUFFQSxFQUFBQTtBQUFGLElBQWtCQyxtQkFBTyxDQUFDLHdCQUFELENBQS9COztBQUVBLE1BQU1DLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQXhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHO0FBQ1pDLEVBQUFBLGtCQUFrQixFQUFFLElBRFI7QUFFWkMsRUFBQUEsZUFBZSxFQUFFO0FBRkwsQ0FBaEI7QUFLQSxJQUFJQyxNQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFFQSxJQUFJLENBQUNQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUFqQixFQUE4QjtBQUMxQixRQUFNLElBQUlNLEtBQUosQ0FBVSx5Q0FBVixDQUFOO0FBQ0g7O0FBRUQsSUFBSSxNQUF3QztBQUN4QztBQUNBO0FBQ0EsTUFBSSxDQUFDQyxNQUFNLENBQUNDLG1CQUFaLEVBQWlDO0FBQzdCSixJQUFBQSxNQUFNLEdBQUcsSUFBSVQsV0FBSixDQUFnQkUsR0FBaEIsRUFBcUJJLE9BQXJCLENBQVQ7QUFDQU0sSUFBQUEsTUFBTSxDQUFDQyxtQkFBUCxHQUE2QkosTUFBTSxDQUFDSyxPQUFQLEVBQTdCO0FBQ0g7O0FBQ0RKLEVBQUFBLGFBQWEsR0FBR0UsTUFBTSxDQUFDQyxtQkFBdkI7QUFDSCxDQVJELE1BUU8sR0FNUDtBQUNBOzs7QUFDQSxpRUFBZUgsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYW5kLWNhc2luby8uL2xpYi9tb25nb2RiLnRzP2JiNGIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBNb25nb0NsaWVudCB9ID0gcmVxdWlyZSgnbW9uZ29kYicpXG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG5jb25zdCBvcHRpb25zID0ge1xuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG59XG5cbmxldCBjbGllbnRcbmxldCBjbGllbnRQcm9taXNlOiBSZXR1cm5UeXBlPHR5cGVvZiBNb25nb0NsaWVudD5cblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGFkZCB5b3VyIE1vbmdvIFVSSSB0byAuZW52LmxvY2FsJylcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gICAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gICAgICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICAgIH1cbiAgICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2Vcbn0gZWxzZSB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG59XG5cbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicmVxdWlyZSIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/mongodb.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/mongodb */ \"./lib/mongodb.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/ant/grand-casino/pages/index.tsx\";\n\n\n\n\nconst Home = ({\n  page,\n  navigation\n}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n  className: \"container\",\n  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n    children: \"Grand-casino.com.ru\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined), console.log(page, navigation)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 6,\n  columnNumber: 5\n}, undefined);\n\nconst getServerSideProps = async () => {\n  const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.default; // client.db() will be the default database passed in the MONGODB_URI\n  // You can change the database by calling the client.db() function and specifying a database like:\n  // const db = client.db(\"myDatabase\");\n  // Then you can execute queries against your database like so:\n  // db.find({}) or any of the MongoDB Node Driver commands\n\n  const db = client.db();\n  let page;\n  let navigation;\n\n  try {\n    page = await db.collection('pages').findOne({\n      pageId: 'index'\n    });\n    navigation = await db.collection('components').findOne({\n      componentId: 'navigation'\n    });\n    console.log(navigation);\n  } catch (error) {\n    throw new Error(error.message);\n  }\n\n  page = JSON.parse(JSON.stringify(page));\n  navigation = JSON.parse(JSON.stringify(navigation));\n  return {\n    props: {\n      page,\n      navigation\n    }\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOzs7QUFFQSxNQUFNRSxJQUFRLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxJQUFGO0FBQVFDLEVBQUFBO0FBQVIsQ0FBRCxrQkFDYjtBQUFLLFdBQVMsRUFBQyxXQUFmO0FBQUEsMEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVLQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWixFQUFrQkMsVUFBbEIsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjs7QUFPTyxNQUFNRyxrQkFBc0MsR0FBRyxZQUFZO0FBQzlELFFBQU1DLE1BQU0sR0FBRyxNQUFNUCxpREFBckIsQ0FEOEQsQ0FHOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFNUSxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBUCxFQUFYO0FBRUEsTUFBSU4sSUFBSjtBQUNBLE1BQUlDLFVBQUo7O0FBRUEsTUFBSTtBQUNBRCxJQUFBQSxJQUFJLEdBQUcsTUFBTU0sRUFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUF1QkMsT0FBdkIsQ0FBK0I7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FBL0IsQ0FBYjtBQUNBUixJQUFBQSxVQUFVLEdBQUcsTUFBTUssRUFBRSxDQUFDQyxVQUFILENBQWMsWUFBZCxFQUE0QkMsT0FBNUIsQ0FBb0M7QUFBRUUsTUFBQUEsV0FBVyxFQUFFO0FBQWYsS0FBcEMsQ0FBbkI7QUFDQVIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVo7QUFDSCxHQUpELENBSUUsT0FBT1UsS0FBUCxFQUFjO0FBQ1osVUFBTSxJQUFJQyxLQUFKLENBQVVELEtBQUssQ0FBQ0UsT0FBaEIsQ0FBTjtBQUNIOztBQUVEYixFQUFBQSxJQUFJLEdBQUdjLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZWhCLElBQWYsQ0FBWCxDQUFQO0FBQ0FDLEVBQUFBLFVBQVUsR0FBR2EsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlZixVQUFmLENBQVgsQ0FBYjtBQUVBLFNBQU87QUFDSGdCLElBQUFBLEtBQUssRUFBRTtBQUNIakIsTUFBQUEsSUFERztBQUVIQyxNQUFBQTtBQUZHO0FBREosR0FBUDtBQU1ILENBL0JNO0FBaUNQLGlFQUFlRixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhbmQtY2FzaW5vLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJ25leHQnXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tICcuLi9saWIvbW9uZ29kYidcblxuY29uc3QgSG9tZTogRkMgPSAoeyBwYWdlLCBuYXZpZ2F0aW9uIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+R3JhbmQtY2FzaW5vLmNvbS5ydTwvaDE+XG4gICAgICAgIHtjb25zb2xlLmxvZyhwYWdlLCBuYXZpZ2F0aW9uKX1cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2VcblxuICAgIC8vIGNsaWVudC5kYigpIHdpbGwgYmUgdGhlIGRlZmF1bHQgZGF0YWJhc2UgcGFzc2VkIGluIHRoZSBNT05HT0RCX1VSSVxuICAgIC8vIFlvdSBjYW4gY2hhbmdlIHRoZSBkYXRhYmFzZSBieSBjYWxsaW5nIHRoZSBjbGllbnQuZGIoKSBmdW5jdGlvbiBhbmQgc3BlY2lmeWluZyBhIGRhdGFiYXNlIGxpa2U6XG4gICAgLy8gY29uc3QgZGIgPSBjbGllbnQuZGIoXCJteURhdGFiYXNlXCIpO1xuICAgIC8vIFRoZW4geW91IGNhbiBleGVjdXRlIHF1ZXJpZXMgYWdhaW5zdCB5b3VyIGRhdGFiYXNlIGxpa2Ugc286XG4gICAgLy8gZGIuZmluZCh7fSkgb3IgYW55IG9mIHRoZSBNb25nb0RCIE5vZGUgRHJpdmVyIGNvbW1hbmRzXG5cbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpXG5cbiAgICBsZXQgcGFnZVxuICAgIGxldCBuYXZpZ2F0aW9uXG5cbiAgICB0cnkge1xuICAgICAgICBwYWdlID0gYXdhaXQgZGIuY29sbGVjdGlvbigncGFnZXMnKS5maW5kT25lKHsgcGFnZUlkOiAnaW5kZXgnIH0pXG4gICAgICAgIG5hdmlnYXRpb24gPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdjb21wb25lbnRzJykuZmluZE9uZSh7IGNvbXBvbmVudElkOiAnbmF2aWdhdGlvbicgfSlcbiAgICAgICAgY29uc29sZS5sb2cobmF2aWdhdGlvbilcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG5cbiAgICBwYWdlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwYWdlKSlcbiAgICBuYXZpZ2F0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuYXZpZ2F0aW9uKSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwYWdlLFxuICAgICAgICAgICAgbmF2aWdhdGlvblxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbIlJlYWN0IiwiY2xpZW50UHJvbWlzZSIsIkhvbWUiLCJwYWdlIiwibmF2aWdhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjbGllbnQiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwicGFnZUlkIiwiY29tcG9uZW50SWQiLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();