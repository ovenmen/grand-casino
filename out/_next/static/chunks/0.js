(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[0],{

/***/ "./components/scroller.js":
/*!********************************!*\
  !*** ./components/scroller.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");


var _jsxFileName = "D:\\PROJECTS\\grand-casino\\components\\scroller.js",
    _this = undefined,
    _s = $RefreshSig$();






var SHOW_SCROLL_POSITION = 150;

var Scroller = function Scroller() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-1944234543" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()('scroller', showScroller && 'show') || ""),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: handleClick,
      className: "jsx-1944234543" + " " + "scroller-link",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-1944234543" + " " + "icon",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
          fixedWidth: true,
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCaretUp"],
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1944234543",
      children: ".scroller.jsx-1944234543{position:fixed;bottom:2rem;right:2rem;z-index:10000;visibility:hidden;opacity:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.scroller-link.jsx-1944234543{background:#6047af;padding:0.5rem 1rem;border-radius:50%;cursor:pointer;}.scroller-link.jsx-1944234543 .icon.jsx-1944234543{color:#ffffff;display:inline-block;vertical-align:middle;}.scroller.show.jsx-1944234543{visibility:visible !important;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQUk9KRUNUU1xcZ3JhbmQtY2FzaW5vXFxjb21wb25lbnRzXFxzY3JvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQndCLEFBR29DLEFBU0ksQUFNTCxBQUtnQixjQUpULENBZlQsSUFTUSxRQVJULEdBbUJELEtBSlksR0FkUixDQVFJLENBV3RCLFlBbEJzQixLQVFILEFBTW5CLGFBYmMsRUFRZCxRQVBvQyx3RUFDcEMiLCJmaWxlIjoiRDpcXFBST0pFQ1RTXFxncmFuZC1jYXNpbm9cXGNvbXBvbmVudHNcXHNjcm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFDYXJldFVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5cclxuY29uc3QgU0hPV19TQ1JPTExfUE9TSVRJT04gPSAxNTBcclxuXHJcbmNvbnN0IFNjcm9sbGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dTY3JvbGxlciwgc2V0U2hvd1Njcm9sbGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpc1Nob3cgPSB3aW5kb3cucGFnZVlPZmZzZXQgPj0gU0hPV19TQ1JPTExfUE9TSVRJT04gfHwgZmFsc2VcclxuICAgICAgICBzZXRTaG93U2Nyb2xsZXIoaXNTaG93KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGhhbmRsZVNjcm9sbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3Njcm9sbGVyJywgc2hvd1Njcm9sbGVyICYmICdzaG93Jyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbGVyLWxpbmtcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+PEZvbnRBd2Vzb21lSWNvbiBmaXhlZFdpZHRoIGljb249e2ZhQ2FyZXRVcH0gaGVpZ2h0PVwiMWVtXCIgLz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbGVyLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MDQ3YWY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlci1saW5rIC5pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlci5zaG93IHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsZXJcclxuIl19 */\n/*@ sourceURL=D:\\\\PROJECTS\\\\grand-casino\\\\components\\\\scroller.js */"
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY3JvbGxlci5qcyJdLCJuYW1lcyI6WyJTSE9XX1NDUk9MTF9QT1NJVElPTiIsIlNjcm9sbGVyIiwidXNlU3RhdGUiLCJzaG93U2Nyb2xsZXIiLCJzZXRTaG93U2Nyb2xsZXIiLCJoYW5kbGVTY3JvbGwiLCJpc1Nob3ciLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhhbmRsZUNsaWNrIiwic2Nyb2xsVG8iLCJvbnNjcm9sbCIsImNsYXNzbmFtZXMiLCJmYUNhcmV0VXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHLEdBQTdCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDcUJDLHNEQUFRLENBQUMsS0FBRCxDQUQ3QjtBQUFBLE1BQ1pDLFlBRFk7QUFBQSxNQUNFQyxlQURGOztBQUduQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLFFBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxXQUFQLElBQXNCUixvQkFBdEIsSUFBOEMsS0FBN0Q7QUFDQUksbUJBQWUsQ0FBQ0UsTUFBRCxDQUFmO0FBQ0gsR0FIRDs7QUFLQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCRixVQUFNLENBQUNHLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDSCxHQUZEOztBQUlBSCxRQUFNLENBQUNJLFFBQVAsR0FBa0JOLFlBQWxCO0FBRUEsc0JBQ0k7QUFBQSx5Q0FBZ0JPLGlEQUFVLENBQUMsVUFBRCxFQUFhVCxZQUFZLElBQUksTUFBN0IsQ0FBMUI7QUFBQSw0QkFDSTtBQUErQixhQUFPLEVBQUVNLFdBQXhDO0FBQUEsMENBQWUsZUFBZjtBQUFBLDZCQUNJO0FBQUEsNENBQWdCLE1BQWhCO0FBQUEsK0JBQXVCLHFFQUFDLDhFQUFEO0FBQWlCLG9CQUFVLE1BQTNCO0FBQTRCLGNBQUksRUFBRUksMkVBQWxDO0FBQTZDLGdCQUFNLEVBQUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0NILENBaEREOztHQUFNWixROztLQUFBQSxRO0FBbURTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYUNhcmV0VXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcblxyXG5jb25zdCBTSE9XX1NDUk9MTF9QT1NJVElPTiA9IDE1MFxyXG5cclxuY29uc3QgU2Nyb2xsZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd1Njcm9sbGVyLCBzZXRTaG93U2Nyb2xsZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzU2hvdyA9IHdpbmRvdy5wYWdlWU9mZnNldCA+PSBTSE9XX1NDUk9MTF9QT1NJVElPTiB8fCBmYWxzZVxyXG4gICAgICAgIHNldFNob3dTY3JvbGxlcihpc1Nob3cpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gaGFuZGxlU2Nyb2xsXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnc2Nyb2xsZXInLCBzaG93U2Nyb2xsZXIgJiYgJ3Nob3cnKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsZXItbGlua1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj48Rm9udEF3ZXNvbWVJY29uIGZpeGVkV2lkdGggaWNvbj17ZmFDYXJldFVwfSBoZWlnaHQ9XCIxZW1cIiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsZXItbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzYwNDdhZjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbGVyLWxpbmsgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbGVyLnNob3cge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9