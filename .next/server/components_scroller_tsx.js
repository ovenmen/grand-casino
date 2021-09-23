"use strict";
exports.id = "components_scroller_tsx";
exports.ids = ["components_scroller_tsx"];
exports.modules = {

/***/ "./components/scroller.tsx":
/*!*********************************!*\
  !*** ./components/scroller.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Antony\\Documents\\grand-casino\\components\\scroller.tsx";






const SHOW_SCROLL_POSITION = 150;

const Scroller = () => {
  const {
    0: showScroller,
    1: setShowScroller
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleScroll = () => {
    const isShow = window.pageYOffset >= SHOW_SCROLL_POSITION || false;
    setShowScroller(isShow);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  window.onscroll = handleScroll;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "jsx-1944234543" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()('scroller', showScroller && 'show') || ""),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      onClick: handleClick,
      className: "jsx-1944234543" + " " + "scroller-link",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        className: "jsx-1944234543" + " " + "icon",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
          fixedWidth: true,
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCaretUp,
          height: "1em"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 40
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1944234543",
      children: ".scroller.jsx-1944234543{position:fixed;bottom:2rem;right:2rem;z-index:10000;visibility:hidden;opacity:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.scroller-link.jsx-1944234543{background:#6047af;padding:0.5rem 1rem;border-radius:50%;cursor:pointer;}.scroller-link.jsx-1944234543 .icon.jsx-1944234543{color:#ffffff;display:inline-block;vertical-align:middle;}.scroller.show.jsx-1944234543{visibility:visible !important;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b255XFxEb2N1bWVudHNcXGdyYW5kLWNhc2lub1xcY29tcG9uZW50c1xcc2Nyb2xsZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCd0IsQUFHb0MsQUFTSSxBQU1MLEFBS2dCLGNBSlQsQ0FmVCxJQVNRLFFBUlQsR0FtQkQsS0FKWSxHQWRSLENBUUksQ0FXdEIsWUFsQnNCLEtBUUgsQUFNbkIsYUFiYyxFQVFkLFFBUG9DLHdFQUNwQyIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9ueVxcRG9jdW1lbnRzXFxncmFuZC1jYXNpbm9cXGNvbXBvbmVudHNcXHNjcm9sbGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhQ2FyZXRVcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuXHJcbmNvbnN0IFNIT1dfU0NST0xMX1BPU0lUSU9OID0gMTUwXHJcblxyXG5jb25zdCBTY3JvbGxlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaG93U2Nyb2xsZXIsIHNldFNob3dTY3JvbGxlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNTaG93ID0gd2luZG93LnBhZ2VZT2Zmc2V0ID49IFNIT1dfU0NST0xMX1BPU0lUSU9OIHx8IGZhbHNlXHJcbiAgICAgICAgc2V0U2hvd1Njcm9sbGVyKGlzU2hvdylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBoYW5kbGVTY3JvbGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdzY3JvbGxlcicsIHNob3dTY3JvbGxlciAmJiAnc2hvdycpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxlci1saW5rXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPjxGb250QXdlc29tZUljb24gZml4ZWRXaWR0aCBpY29uPXtmYUNhcmV0VXB9IGhlaWdodD1cIjFlbVwiIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlci1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjA0N2FmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsZXItbGluayAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsZXIuc2hvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbGVyIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Antony\\\\Documents\\\\grand-casino\\\\components\\\\scroller.tsx */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scroller);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50c19zY3JvbGxlcl90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNSyxvQkFBb0IsR0FBRyxHQUE3Qjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNuQixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NQLCtDQUFRLENBQUMsS0FBRCxDQUFoRDs7QUFFQSxRQUFNUSxZQUFZLEdBQUcsTUFBTTtBQUN2QixVQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQlAsb0JBQXRCLElBQThDLEtBQTdEO0FBQ0FHLElBQUFBLGVBQWUsQ0FBQ0UsTUFBRCxDQUFmO0FBQ0gsR0FIRDs7QUFLQSxRQUFNRyxXQUFXLEdBQUcsTUFBTTtBQUN0QkYsSUFBQUEsTUFBTSxDQUFDRyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0gsR0FGRDs7QUFJQUgsRUFBQUEsTUFBTSxDQUFDSSxRQUFQLEdBQWtCTixZQUFsQjtBQUVBLHNCQUNJO0FBQUEseUNBQWdCUCxpREFBVSxDQUFDLFVBQUQsRUFBYUssWUFBWSxJQUFJLE1BQTdCLENBQTFCO0FBQUEsNEJBQ0k7QUFBK0IsYUFBTyxFQUFFTSxXQUF4QztBQUFBLDBDQUFlLGVBQWY7QUFBQSw2QkFDSTtBQUFBLDRDQUFnQixNQUFoQjtBQUFBLCtCQUF1Qiw4REFBQywyRUFBRDtBQUFpQixvQkFBVSxNQUEzQjtBQUE0QixjQUFJLEVBQUVULHdFQUFsQztBQUE2QyxnQkFBTSxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFrQ0gsQ0FoREQ7O0FBbURBLGlFQUFlRSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhbmQtY2FzaW5vLy4vY29tcG9uZW50cy9zY3JvbGxlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFDYXJldFVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5cclxuY29uc3QgU0hPV19TQ1JPTExfUE9TSVRJT04gPSAxNTBcclxuXHJcbmNvbnN0IFNjcm9sbGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dTY3JvbGxlciwgc2V0U2hvd1Njcm9sbGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpc1Nob3cgPSB3aW5kb3cucGFnZVlPZmZzZXQgPj0gU0hPV19TQ1JPTExfUE9TSVRJT04gfHwgZmFsc2VcclxuICAgICAgICBzZXRTaG93U2Nyb2xsZXIoaXNTaG93KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGhhbmRsZVNjcm9sbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3Njcm9sbGVyJywgc2hvd1Njcm9sbGVyICYmICdzaG93Jyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbGVyLWxpbmtcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+PEZvbnRBd2Vzb21lSWNvbiBmaXhlZFdpZHRoIGljb249e2ZhQ2FyZXRVcH0gaGVpZ2h0PVwiMWVtXCIgLz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbGVyLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MDQ3YWY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlci1saW5rIC5pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGxlci5zaG93IHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNsYXNzbmFtZXMiLCJGb250QXdlc29tZUljb24iLCJmYUNhcmV0VXAiLCJTSE9XX1NDUk9MTF9QT1NJVElPTiIsIlNjcm9sbGVyIiwic2hvd1Njcm9sbGVyIiwic2V0U2hvd1Njcm9sbGVyIiwiaGFuZGxlU2Nyb2xsIiwiaXNTaG93Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJoYW5kbGVDbGljayIsInNjcm9sbFRvIiwib25zY3JvbGwiXSwic291cmNlUm9vdCI6IiJ9