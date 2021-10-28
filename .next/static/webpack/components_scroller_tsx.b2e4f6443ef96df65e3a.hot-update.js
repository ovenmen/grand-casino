"use strict";
self["webpackHotUpdate_N_E"]("components_scroller_tsx",{

/***/ "./components/scroller.tsx":
/*!*********************************!*\
  !*** ./components/scroller.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\detan\\OneDrive\\\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B\\grand-casino\\components\\scroller.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var SHOW_SCROLL_POSITION = 150;

var Scroller = function Scroller() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showScroller = _useState[0],
      setShowScroller = _useState[1];

  var handleScroll = function handleScroll() {
    var isShow = window.pageYOffset >= SHOW_SCROLL_POSITION || false;
    setShowScroller(isShow);
  };

  var handleClick = function handleClick() {
    window.scrollTo(0, 0);
  };

  window.onscroll = handleScroll;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "jsx-1944234543" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()('scroller', showScroller && 'show') || ""),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      onClick: handleClick,
      className: "jsx-1944234543" + " " + "scroller-link",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: "jsx-1944234543" + " " + "icon",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
          fixedWidth: true,
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCaretUp,
          height: "1em"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 40
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1944234543",
      children: ".scroller.jsx-1944234543{position:fixed;bottom:2rem;right:2rem;z-index:10000;visibility:hidden;opacity:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.scroller-link.jsx-1944234543{background:#6047af;padding:0.5rem 1rem;border-radius:50%;cursor:pointer;}.scroller-link.jsx-1944234543 .icon.jsx-1944234543{color:#ffffff;display:inline-block;vertical-align:middle;}.scroller.show.jsx-1944234543{visibility:visible !important;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGV0YW5cXE9uZURyaXZlXFzQlNC+0LrRg9C80LXQvdGC0YtcXGdyYW5kLWNhc2lub1xcY29tcG9uZW50c1xcc2Nyb2xsZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCd0IsQUFHb0MsQUFTSSxBQU1MLEFBS2dCLGNBSlQsQ0FmVCxJQVNRLFFBUlQsR0FtQkQsS0FKWSxHQWRSLENBUUksQ0FXdEIsWUFsQnNCLEtBUUgsQUFNbkIsYUFiYyxFQVFkLFFBUG9DLHdFQUNwQyIsImZpbGUiOiJDOlxcVXNlcnNcXGRldGFuXFxPbmVEcml2ZVxc0JTQvtC60YPQvNC10L3RgtGLXFxncmFuZC1jYXNpbm9cXGNvbXBvbmVudHNcXHNjcm9sbGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYUNhcmV0VXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcblxyXG5jb25zdCBTSE9XX1NDUk9MTF9QT1NJVElPTiA9IDE1MFxyXG5cclxuY29uc3QgU2Nyb2xsZXI6IEZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dTY3JvbGxlciwgc2V0U2hvd1Njcm9sbGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpc1Nob3cgPSB3aW5kb3cucGFnZVlPZmZzZXQgPj0gU0hPV19TQ1JPTExfUE9TSVRJT04gfHwgZmFsc2VcclxuICAgICAgICBzZXRTaG93U2Nyb2xsZXIoaXNTaG93KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGhhbmRsZVNjcm9sbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3Njcm9sbGVyJywgc2hvd1Njcm9sbGVyICYmICdzaG93Jyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbGVyLWxpbmtcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+PEZvbnRBd2Vzb21lSWNvbiBmaXhlZFdpZHRoIGljb249e2ZhQ2FyZXRVcH0gaGVpZ2h0PVwiMWVtXCIgLz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbGVyLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MDQ3YWY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlci1saW5rIC5pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlci5zaG93IHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsZXIiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\detan\\\\OneDrive\\\\\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B\\\\grand-casino\\\\components\\\\scroller.tsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, _this);
};

_s(Scroller, "16okDFQ6dNMP0SZ1JSpPAbYALfU=");

_c = Scroller;
/* harmony default export */ __webpack_exports__["default"] = (Scroller);

var _c;

$RefreshReg$(_c, "Scroller");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svY29tcG9uZW50c19zY3JvbGxlcl90c3guYjJlNGY2NDQzZWY5NmRmNjVlM2EuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1LLG9CQUFvQixHQUFHLEdBQTdCOztBQUVBLElBQU1DLFFBQVksR0FBRyxTQUFmQSxRQUFlLEdBQU07QUFBQTs7QUFDdkIsa0JBQXdDTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQSxNQUFPTSxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsUUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLFdBQVAsSUFBc0JQLG9CQUF0QixJQUE4QyxLQUE3RDtBQUNBRyxJQUFBQSxlQUFlLENBQUNFLE1BQUQsQ0FBZjtBQUNILEdBSEQ7O0FBS0EsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QkYsSUFBQUEsTUFBTSxDQUFDRyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0gsR0FGRDs7QUFJQUgsRUFBQUEsTUFBTSxDQUFDSSxRQUFQLEdBQWtCTixZQUFsQjtBQUVBLHNCQUNJO0FBQUEseUNBQWdCUCxpREFBVSxDQUFDLFVBQUQsRUFBYUssWUFBWSxJQUFJLE1BQTdCLENBQTFCO0FBQUEsNEJBQ0k7QUFBK0IsYUFBTyxFQUFFTSxXQUF4QztBQUFBLDBDQUFlLGVBQWY7QUFBQSw2QkFDSTtBQUFBLDRDQUFnQixNQUFoQjtBQUFBLCtCQUF1Qiw4REFBQywyRUFBRDtBQUFpQixvQkFBVSxNQUEzQjtBQUE0QixjQUFJLEVBQUVULHdFQUFsQztBQUE2QyxnQkFBTSxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtDSCxDQWhERDs7R0FBTUU7O0tBQUFBO0FBbUROLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2Nyb2xsZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYUNhcmV0VXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcblxyXG5jb25zdCBTSE9XX1NDUk9MTF9QT1NJVElPTiA9IDE1MFxyXG5cclxuY29uc3QgU2Nyb2xsZXI6IEZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dTY3JvbGxlciwgc2V0U2hvd1Njcm9sbGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpc1Nob3cgPSB3aW5kb3cucGFnZVlPZmZzZXQgPj0gU0hPV19TQ1JPTExfUE9TSVRJT04gfHwgZmFsc2VcclxuICAgICAgICBzZXRTaG93U2Nyb2xsZXIoaXNTaG93KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGhhbmRsZVNjcm9sbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3Njcm9sbGVyJywgc2hvd1Njcm9sbGVyICYmICdzaG93Jyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbGVyLWxpbmtcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+PEZvbnRBd2Vzb21lSWNvbiBmaXhlZFdpZHRoIGljb249e2ZhQ2FyZXRVcH0gaGVpZ2h0PVwiMWVtXCIgLz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbGVyLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MDQ3YWY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlci1saW5rIC5pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlci5zaG93IHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNsYXNzbmFtZXMiLCJGb250QXdlc29tZUljb24iLCJmYUNhcmV0VXAiLCJTSE9XX1NDUk9MTF9QT1NJVElPTiIsIlNjcm9sbGVyIiwic2hvd1Njcm9sbGVyIiwic2V0U2hvd1Njcm9sbGVyIiwiaGFuZGxlU2Nyb2xsIiwiaXNTaG93Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJoYW5kbGVDbGljayIsInNjcm9sbFRvIiwib25zY3JvbGwiXSwic291cmNlUm9vdCI6IiJ9