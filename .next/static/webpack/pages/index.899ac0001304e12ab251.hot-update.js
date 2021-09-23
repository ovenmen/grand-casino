"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/reviews.tsx":
/*!********************************!*\
  !*** ./components/reviews.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Antony\\Documents\\grand-casino\\components\\reviews.tsx",
    _this = undefined;






var Reviews = function Reviews(_ref) {
  var reviews = _ref.reviews;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
    className: "jsx-1855717427" + " " + "reviews",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "jsx-1855717427" + " " + "grid-x grid-padding-x",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "jsx-1855717427" + " " + "cell small-12",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
          className: "jsx-1855717427" + " " + "text-center text-uppercase color-white margin-bottom-3",
          children: reviews.header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "jsx-1855717427" + " " + "grid-x",
      children: reviews.items.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "jsx-1855717427" + " " + "cell small-12 medium-6 large-6 review-border",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "jsx-1855717427" + " " + "review text-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("figure", {
              className: "jsx-1855717427",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                src: "/images/".concat(item.image),
                alt: item.image,
                className: "jsx-1855717427" + " " + "reviews-avatar margin-bottom-2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("figcaption", {
                className: "jsx-1855717427",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  className: "jsx-1855717427" + " " + "h5 color-white font-bold",
                  children: item.fullname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  className: "jsx-1855717427" + " " + "h5 color-white font-bold",
                  children: item.city
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  className: "jsx-1855717427" + " " + "h6 color-white font-bold",
                  children: item.date
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                className: "jsx-1855717427" + " " + "color-white margin-top-2",
                children: item.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1855717427",
      children: ".reviews.jsx-1855717427{background:url('/images/bg-reviews.jpg') center center;background-size:cover;padding:5vw;}.reviews-avatar.jsx-1855717427{border-radius:50%;width:15vh;}.review-border.jsx-1855717427:nth-child(odd) .review.jsx-1855717427{border-right:1px solid #e3eff3;}.review.jsx-1855717427{padding:0 5vw;}@media screen and (max-width:39.9375em){.review-border.jsx-1855717427:nth-child(odd) .review.jsx-1855717427{border-right:none;}.review.jsx-1855717427{padding:0;margin-bottom:3rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b255XFxEb2N1bWVudHNcXGdyYW5kLWNhc2lub1xcY29tcG9uZW50c1xccmV2aWV3cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJvQixBQUd3RSxBQUtyQyxBQUlhLEFBR2pCLEFBSVEsQUFHUixVQUNTLElBUDNCLElBUGUsQUFXWCxXQVZKLEFBY0ksRUFYSix3QkFUMEIsc0JBQ1YsWUFDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvbnlcXERvY3VtZW50c1xcZ3JhbmQtY2FzaW5vXFxjb21wb25lbnRzXFxyZXZpZXdzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgUmV2aWV3cyA9ICh7XHJcbiAgICByZXZpZXdzXHJcbn0pID0+IChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJldmlld3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQteCBncmlkLXBhZGRpbmcteFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgc21hbGwtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZSBjb2xvci13aGl0ZSBtYXJnaW4tYm90dG9tLTNcIj57cmV2aWV3cy5oZWFkZXJ9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLXhcIj5cclxuICAgICAgICAgICAge3Jldmlld3MuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsIHNtYWxsLTEyIG1lZGl1bS02IGxhcmdlLTYgcmV2aWV3LWJvcmRlclwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJldmlld3MtYXZhdGFyIG1hcmdpbi1ib3R0b20tMlwiIHNyYz17YC9pbWFnZXMvJHtpdGVtLmltYWdlfWB9IGFsdD17aXRlbS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImg1IGNvbG9yLXdoaXRlIGZvbnQtYm9sZFwiPntpdGVtLmZ1bGxuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoNSBjb2xvci13aGl0ZSBmb250LWJvbGRcIj57aXRlbS5jaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoNiBjb2xvci13aGl0ZSBmb250LWJvbGRcIj57aXRlbS5kYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbG9yLXdoaXRlIG1hcmdpbi10b3AtMlwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLnJldmlld3Mge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL2JnLXJldmlld3MuanBnJykgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1dnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJldmlld3MtYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yZXZpZXctYm9yZGVyOm50aC1jaGlsZChvZGQpIC5yZXZpZXcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UzZWZmMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmV2aWV3IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5LjkzNzVlbSkge1xyXG4gICAgICAgICAgICAgICAgLnJldmlldy1ib3JkZXI6bnRoLWNoaWxkKG9kZCkgLnJldmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJldmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4pXHJcblxyXG5SZXZpZXdzLnByb3BUeXBlcyA9IHtcclxuICAgIHJldmlld3M6IFByb3BUeXBlcy5vYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3cyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Antony\\\\Documents\\\\grand-casino\\\\components\\\\reviews.tsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Reviews;
Reviews.propTypes = {
  reviews: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (Reviews);

var _c;

$RefreshReg$(_c, "Reviews");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODk5YWMwMDAxMzA0ZTEyYWIyNTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFDWkMsT0FEWSxRQUNaQSxPQURZO0FBQUEsc0JBR1o7QUFBQSx3Q0FBbUIsU0FBbkI7QUFBQSw0QkFDSTtBQUFBLDBDQUFlLHVCQUFmO0FBQUEsNkJBQ0k7QUFBQSw0Q0FBZSxlQUFmO0FBQUEsK0JBQ0k7QUFBQSw4Q0FBYyx3REFBZDtBQUFBLG9CQUF3RUEsT0FBTyxDQUFDQztBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQUEsMENBQWUsUUFBZjtBQUFBLGdCQUNLRCxPQUFPLENBQUNFLEtBQVIsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDZjtBQUFBLDhDQUFlLDhDQUFmO0FBQUEsaUNBQ0k7QUFBQSxnREFBZSxvQkFBZjtBQUFBLG1DQUNJO0FBQUE7QUFBQSxzQ0FDSTtBQUFnRCxtQkFBRyxvQkFBYUQsSUFBSSxDQUFDRSxLQUFsQixDQUFuRDtBQUE4RSxtQkFBRyxFQUFFRixJQUFJLENBQUNFLEtBQXhGO0FBQUEsb0RBQWU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQTtBQUFBLHdDQUNJO0FBQUEsc0RBQWEsMEJBQWI7QUFBQSw0QkFBeUNGLElBQUksQ0FBQ0c7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJO0FBQUEsc0RBQWEsMEJBQWI7QUFBQSw0QkFBeUNILElBQUksQ0FBQ0k7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSixlQUdJO0FBQUEsc0RBQWEsMEJBQWI7QUFBQSw0QkFBeUNKLElBQUksQ0FBQ0s7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFPSTtBQUFBLG9EQUFhLDBCQUFiO0FBQUEsMEJBQXlDTCxJQUFJLENBQUNNO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQW1FTCxLQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSFk7QUFBQSxDQUFoQjs7S0FBTU47QUF3RE5BLE9BQU8sQ0FBQ1ksU0FBUixHQUFvQjtBQUNoQlgsRUFBQUEsT0FBTyxFQUFFRiwwREFBZ0JjO0FBRFQsQ0FBcEI7QUFJQSwrREFBZWIsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Jldmlld3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgUmV2aWV3cyA9ICh7XHJcbiAgICByZXZpZXdzXHJcbn0pID0+IChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJldmlld3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQteCBncmlkLXBhZGRpbmcteFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgc21hbGwtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZSBjb2xvci13aGl0ZSBtYXJnaW4tYm90dG9tLTNcIj57cmV2aWV3cy5oZWFkZXJ9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLXhcIj5cclxuICAgICAgICAgICAge3Jldmlld3MuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsIHNtYWxsLTEyIG1lZGl1bS02IGxhcmdlLTYgcmV2aWV3LWJvcmRlclwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJldmlld3MtYXZhdGFyIG1hcmdpbi1ib3R0b20tMlwiIHNyYz17YC9pbWFnZXMvJHtpdGVtLmltYWdlfWB9IGFsdD17aXRlbS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImg1IGNvbG9yLXdoaXRlIGZvbnQtYm9sZFwiPntpdGVtLmZ1bGxuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoNSBjb2xvci13aGl0ZSBmb250LWJvbGRcIj57aXRlbS5jaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoNiBjb2xvci13aGl0ZSBmb250LWJvbGRcIj57aXRlbS5kYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbG9yLXdoaXRlIG1hcmdpbi10b3AtMlwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLnJldmlld3Mge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL2JnLXJldmlld3MuanBnJykgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1dnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJldmlld3MtYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yZXZpZXctYm9yZGVyOm50aC1jaGlsZChvZGQpIC5yZXZpZXcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UzZWZmMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmV2aWV3IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5LjkzNzVlbSkge1xyXG4gICAgICAgICAgICAgICAgLnJldmlldy1ib3JkZXI6bnRoLWNoaWxkKG9kZCkgLnJldmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJldmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4pXHJcblxyXG5SZXZpZXdzLnByb3BUeXBlcyA9IHtcclxuICAgIHJldmlld3M6IFByb3BUeXBlcy5vYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3cyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlJldmlld3MiLCJyZXZpZXdzIiwiaGVhZGVyIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpbWFnZSIsImZ1bGxuYW1lIiwiY2l0eSIsImRhdGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIm9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=