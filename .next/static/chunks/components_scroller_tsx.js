"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_scroller_tsx"],{

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
var _jsxFileName = "C:\\Users\\Antony\\Documents\\grand-casino\\components\\scroller.tsx",
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
      children: ".scroller.jsx-1944234543{position:fixed;bottom:2rem;right:2rem;z-index:10000;visibility:hidden;opacity:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.scroller-link.jsx-1944234543{background:#6047af;padding:0.5rem 1rem;border-radius:50%;cursor:pointer;}.scroller-link.jsx-1944234543 .icon.jsx-1944234543{color:#ffffff;display:inline-block;vertical-align:middle;}.scroller.show.jsx-1944234543{visibility:visible !important;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b255XFxEb2N1bWVudHNcXGdyYW5kLWNhc2lub1xcY29tcG9uZW50c1xcc2Nyb2xsZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCd0IsQUFHb0MsQUFTSSxBQU1MLEFBS2dCLGNBSlQsQ0FmVCxJQVNRLFFBUlQsR0FtQkQsS0FKWSxHQWRSLENBUUksQ0FXdEIsWUFsQnNCLEtBUUgsQUFNbkIsYUFiYyxFQVFkLFFBUG9DLHdFQUNwQyIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9ueVxcRG9jdW1lbnRzXFxncmFuZC1jYXNpbm9cXGNvbXBvbmVudHNcXHNjcm9sbGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhQ2FyZXRVcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuXHJcbmNvbnN0IFNIT1dfU0NST0xMX1BPU0lUSU9OID0gMTUwXHJcblxyXG5jb25zdCBTY3JvbGxlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaG93U2Nyb2xsZXIsIHNldFNob3dTY3JvbGxlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNTaG93ID0gd2luZG93LnBhZ2VZT2Zmc2V0ID49IFNIT1dfU0NST0xMX1BPU0lUSU9OIHx8IGZhbHNlXHJcbiAgICAgICAgc2V0U2hvd1Njcm9sbGVyKGlzU2hvdylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBoYW5kbGVTY3JvbGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdzY3JvbGxlcicsIHNob3dTY3JvbGxlciAmJiAnc2hvdycpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxlci1saW5rXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPjxGb250QXdlc29tZUljb24gZml4ZWRXaWR0aCBpY29uPXtmYUNhcmV0VXB9IGhlaWdodD1cIjFlbVwiIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlci1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjA0N2FmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsZXItbGluayAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsZXIuc2hvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbGVyIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Antony\\\\Documents\\\\grand-casino\\\\components\\\\scroller.tsx */"
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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9jb21wb25lbnRzX3Njcm9sbGVyX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1LLG9CQUFvQixHQUFHLEdBQTdCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDbkIsa0JBQXdDTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQSxNQUFPTSxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsUUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLFdBQVAsSUFBc0JQLG9CQUF0QixJQUE4QyxLQUE3RDtBQUNBRyxJQUFBQSxlQUFlLENBQUNFLE1BQUQsQ0FBZjtBQUNILEdBSEQ7O0FBS0EsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QkYsSUFBQUEsTUFBTSxDQUFDRyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0gsR0FGRDs7QUFJQUgsRUFBQUEsTUFBTSxDQUFDSSxRQUFQLEdBQWtCTixZQUFsQjtBQUVBLHNCQUNJO0FBQUEseUNBQWdCUCxpREFBVSxDQUFDLFVBQUQsRUFBYUssWUFBWSxJQUFJLE1BQTdCLENBQTFCO0FBQUEsNEJBQ0k7QUFBK0IsYUFBTyxFQUFFTSxXQUF4QztBQUFBLDBDQUFlLGVBQWY7QUFBQSw2QkFDSTtBQUFBLDRDQUFnQixNQUFoQjtBQUFBLCtCQUF1Qiw4REFBQywyRUFBRDtBQUFpQixvQkFBVSxNQUEzQjtBQUE0QixjQUFJLEVBQUVULHdFQUFsQztBQUE2QyxnQkFBTSxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtDSCxDQWhERDs7R0FBTUU7O0tBQUFBO0FBbUROLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2Nyb2xsZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhQ2FyZXRVcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuXHJcbmNvbnN0IFNIT1dfU0NST0xMX1BPU0lUSU9OID0gMTUwXHJcblxyXG5jb25zdCBTY3JvbGxlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaG93U2Nyb2xsZXIsIHNldFNob3dTY3JvbGxlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNTaG93ID0gd2luZG93LnBhZ2VZT2Zmc2V0ID49IFNIT1dfU0NST0xMX1BPU0lUSU9OIHx8IGZhbHNlXHJcbiAgICAgICAgc2V0U2hvd1Njcm9sbGVyKGlzU2hvdylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBoYW5kbGVTY3JvbGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdzY3JvbGxlcicsIHNob3dTY3JvbGxlciAmJiAnc2hvdycpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxlci1saW5rXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPjxGb250QXdlc29tZUljb24gZml4ZWRXaWR0aCBpY29uPXtmYUNhcmV0VXB9IGhlaWdodD1cIjFlbVwiIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlci1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjA0N2FmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsZXItbGluayAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsZXIuc2hvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjbGFzc25hbWVzIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDYXJldFVwIiwiU0hPV19TQ1JPTExfUE9TSVRJT04iLCJTY3JvbGxlciIsInNob3dTY3JvbGxlciIsInNldFNob3dTY3JvbGxlciIsImhhbmRsZVNjcm9sbCIsImlzU2hvdyIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiaGFuZGxlQ2xpY2siLCJzY3JvbGxUbyIsIm9uc2Nyb2xsIl0sInNvdXJjZVJvb3QiOiIifQ==