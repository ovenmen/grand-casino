"use strict";
exports.id = "components_photo-carousel_tsx";
exports.ids = ["components_photo-carousel_tsx"];
exports.modules = {

/***/ "./components/photo-carousel.tsx":
/*!***************************************!*\
  !*** ./components/photo-carousel.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fslightbox_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fslightbox-react */ "fslightbox-react");
/* harmony import */ var fslightbox_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fslightbox_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\detan\\OneDrive\\\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B\\grand-casino\\components\\photo-carousel.tsx";





const PhotoCarousel = ({
  photos = {
    header: '',
    items: []
  }
}) => {
  const {
    0: lightboxController,
    1: setLightboxController
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    toggler: false,
    slide: 0
  });

  const openLightboxOnSlide = number => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  };

  const targetPhotos = photos.items.map(photo => `/images/photos/${photo}`);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
    className: "jsx-2997271973" + " " + "photo-carousel",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "jsx-2997271973" + " " + "grid-x",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "jsx-2997271973" + " " + "cell small-12 medium-12 large-12",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
          className: "jsx-2997271973" + " " + "text-center color-white header",
          children: photos.header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "jsx-2997271973" + " " + "grid-x",
      children: targetPhotos.map((photo, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "jsx-2997271973" + " " + "cell small-12 medium-3 large-2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("figure", {
          className: "jsx-2997271973",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: photo,
            alt: photo,
            onClick: () => openLightboxOnSlide(index + 1),
            className: "jsx-2997271973" + " " + "thumbnail"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }, undefined)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((fslightbox_react__WEBPACK_IMPORTED_MODULE_2___default()), {
      toggler: lightboxController.toggler,
      type: "image",
      slide: lightboxController.slide,
      sources: targetPhotos
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2997271973",
      children: ".photo-carousel.jsx-2997271973{background-color:var(--color-purple);padding:5rem;padding-top:0;}.thumbnail.jsx-2997271973{background:var(--color-white);padding:0.5rem;margin-top:1rem;border:1px solid;height:16rem;width:16rem;object-fit:cover;}.thumbnail.jsx-2997271973:hover{cursor:pointer;}.header.jsx-2997271973{margin-top:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGV0YW5cXE9uZURyaXZlXFzQlNC+0LrRg9C80LXQvdGC0YtcXGdyYW5kLWNhc2lub1xcY29tcG9uZW50c1xccGhvdG8tY2Fyb3VzZWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEd0IsQUFHZ0QsQUFLUCxBQVNmLEFBR0MsZUFGbEIsQ0FHQSxjQVppQixPQUxGLFFBTUcsS0FMRixXQU1HLEdBTG5CLGNBTWUsYUFDRCxZQUNLLGlCQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXGRldGFuXFxPbmVEcml2ZVxc0JTQvtC60YPQvNC10L3RgtGLXFxncmFuZC1jYXNpbm9cXGNvbXBvbmVudHNcXHBob3RvLWNhcm91c2VsLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZzTGlnaHRib3ggZnJvbSAnZnNsaWdodGJveC1yZWFjdCdcclxuXHJcbmludGVyZmFjZSBJUGhvdG9DYXJvdXNlbFByb3BzIHtcclxuICBwaG90b3M6IHtcclxuICAgIGhlYWRlcjogc3RyaW5nO1xyXG4gICAgaXRlbXM6IHN0cmluZ1tdO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IFBob3RvQ2Fyb3VzZWw6IEZDPElQaG90b0Nhcm91c2VsUHJvcHM+ID0gKHtcclxuICAgIHBob3RvcyA9IHtcclxuICAgICAgICBoZWFkZXI6ICcnLFxyXG4gICAgICAgIGl0ZW1zOiBbXSxcclxuICAgIH1cclxufSkgPT4ge1xyXG4gICAgY29uc3QgW2xpZ2h0Ym94Q29udHJvbGxlciwgc2V0TGlnaHRib3hDb250cm9sbGVyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB0b2dnbGVyOiBmYWxzZSxcclxuICAgICAgICBzbGlkZTogMCxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgb3BlbkxpZ2h0Ym94T25TbGlkZSA9IChudW1iZXI6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldExpZ2h0Ym94Q29udHJvbGxlcih7XHJcbiAgICAgICAgICAgIHRvZ2dsZXI6ICFsaWdodGJveENvbnRyb2xsZXIudG9nZ2xlcixcclxuICAgICAgICAgICAgc2xpZGU6IG51bWJlcixcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhcmdldFBob3RvcyA9IHBob3Rvcy5pdGVtcy5tYXAoKHBob3RvKSA9PiBgL2ltYWdlcy9waG90b3MvJHtwaG90b31gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGhvdG8tY2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbCBzbWFsbC0xMiBtZWRpdW0tMTIgbGFyZ2UtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgY29sb3Itd2hpdGUgaGVhZGVyXCI+e3Bob3Rvcy5oZWFkZXJ9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLXhcIj5cclxuICAgICAgICAgICAgICAgIHt0YXJnZXRQaG90b3MubWFwKChwaG90bywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgc21hbGwtMTIgbWVkaXVtLTMgbGFyZ2UtMlwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bob3RvfSBhbHQ9e3Bob3RvfSBjbGFzc05hbWU9XCJ0aHVtYm5haWxcIiBvbkNsaWNrPXsoKSA9PiBvcGVuTGlnaHRib3hPblNsaWRlKGluZGV4ICsgMSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RnNMaWdodGJveFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlcj17bGlnaHRib3hDb250cm9sbGVyLnRvZ2dsZXJ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgc2xpZGU9e2xpZ2h0Ym94Q29udHJvbGxlci5zbGlkZX1cclxuICAgICAgICAgICAgICAgIHNvdXJjZXM9e3RhcmdldFBob3Rvc31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucGhvdG8tY2Fyb3VzZWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHVycGxlKTtcclxuICAgICAgICAgIHBhZGRpbmc6IDVyZW07XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE2cmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDE2cmVtO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aHVtYm5haWw6aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90b0Nhcm91c2VsXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\detan\\\\OneDrive\\\\\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B\\\\grand-casino\\\\components\\\\photo-carousel.tsx */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhotoCarousel);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50c19waG90by1jYXJvdXNlbF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQVNBLE1BQU1HLGFBQXNDLEdBQUcsQ0FBQztBQUM1Q0MsRUFBQUEsTUFBTSxHQUFHO0FBQ0xDLElBQUFBLE1BQU0sRUFBRSxFQURIO0FBRUxDLElBQUFBLEtBQUssRUFBRTtBQUZGO0FBRG1DLENBQUQsS0FLekM7QUFDRixRQUFNO0FBQUEsT0FBQ0Msa0JBQUQ7QUFBQSxPQUFxQkM7QUFBckIsTUFBOENQLCtDQUFRLENBQUM7QUFDekRRLElBQUFBLE9BQU8sRUFBRSxLQURnRDtBQUV6REMsSUFBQUEsS0FBSyxFQUFFO0FBRmtELEdBQUQsQ0FBNUQ7O0FBS0EsUUFBTUMsbUJBQW1CLEdBQUlDLE1BQUQsSUFBb0I7QUFDNUNKLElBQUFBLHFCQUFxQixDQUFDO0FBQ2xCQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQ0Ysa0JBQWtCLENBQUNFLE9BRFg7QUFFbEJDLE1BQUFBLEtBQUssRUFBRUU7QUFGVyxLQUFELENBQXJCO0FBSUgsR0FMRDs7QUFPQSxRQUFNQyxZQUFZLEdBQUdULE1BQU0sQ0FBQ0UsS0FBUCxDQUFhUSxHQUFiLENBQWtCQyxLQUFELElBQVksa0JBQWlCQSxLQUFNLEVBQXBELENBQXJCO0FBRUEsc0JBQ0k7QUFBQSx3Q0FBbUIsZ0JBQW5CO0FBQUEsNEJBQ0k7QUFBQSwwQ0FBZSxRQUFmO0FBQUEsNkJBQ0k7QUFBQSw0Q0FBZSxrQ0FBZjtBQUFBLCtCQUNJO0FBQUEsOENBQWMsZ0NBQWQ7QUFBQSxvQkFBZ0RYLE1BQU0sQ0FBQ0M7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBTUk7QUFBQSwwQ0FBZSxRQUFmO0FBQUEsZ0JBQ0tRLFlBQVksQ0FBQ0MsR0FBYixDQUFpQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsa0JBQ2Q7QUFBQSw0Q0FBZSxnQ0FBZjtBQUFBLCtCQUNJO0FBQUE7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBRUQsS0FBVjtBQUFpQixlQUFHLEVBQUVBLEtBQXRCO0FBQW1ELG1CQUFPLEVBQUUsTUFBTUosbUJBQW1CLENBQUNLLEtBQUssR0FBRyxDQUFULENBQXJGO0FBQUEsZ0RBQXVDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBcURBLEtBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLGVBZUksOERBQUMseURBQUQ7QUFDSSxhQUFPLEVBQUVULGtCQUFrQixDQUFDRSxPQURoQztBQUVJLFVBQUksRUFBQyxPQUZUO0FBR0ksV0FBSyxFQUFFRixrQkFBa0IsQ0FBQ0csS0FIOUI7QUFJSSxhQUFPLEVBQUVHO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQStDSCxDQW5FRDs7QUFxRUEsaUVBQWVWLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFuZC1jYXNpbm8vLi9jb21wb25lbnRzL3Bob3RvLWNhcm91c2VsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGc0xpZ2h0Ym94IGZyb20gJ2ZzbGlnaHRib3gtcmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgSVBob3RvQ2Fyb3VzZWxQcm9wcyB7XHJcbiAgcGhvdG9zOiB7XHJcbiAgICBoZWFkZXI6IHN0cmluZztcclxuICAgIGl0ZW1zOiBzdHJpbmdbXTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBQaG90b0Nhcm91c2VsOiBGQzxJUGhvdG9DYXJvdXNlbFByb3BzPiA9ICh7XHJcbiAgICBwaG90b3MgPSB7XHJcbiAgICAgICAgaGVhZGVyOiAnJyxcclxuICAgICAgICBpdGVtczogW10sXHJcbiAgICB9XHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFtsaWdodGJveENvbnRyb2xsZXIsIHNldExpZ2h0Ym94Q29udHJvbGxlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdG9nZ2xlcjogZmFsc2UsXHJcbiAgICAgICAgc2xpZGU6IDAsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IG9wZW5MaWdodGJveE9uU2xpZGUgPSAobnVtYmVyOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRMaWdodGJveENvbnRyb2xsZXIoe1xyXG4gICAgICAgICAgICB0b2dnbGVyOiAhbGlnaHRib3hDb250cm9sbGVyLnRvZ2dsZXIsXHJcbiAgICAgICAgICAgIHNsaWRlOiBudW1iZXIsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YXJnZXRQaG90b3MgPSBwaG90b3MuaXRlbXMubWFwKChwaG90bykgPT4gYC9pbWFnZXMvcGhvdG9zLyR7cGhvdG99YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBob3RvLWNhcm91c2VsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC14XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgc21hbGwtMTIgbWVkaXVtLTEyIGxhcmdlLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGNvbG9yLXdoaXRlIGhlYWRlclwiPntwaG90b3MuaGVhZGVyfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC14XCI+XHJcbiAgICAgICAgICAgICAgICB7dGFyZ2V0UGhvdG9zLm1hcCgocGhvdG8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsIHNtYWxsLTEyIG1lZGl1bS0zIGxhcmdlLTJcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaG90b30gYWx0PXtwaG90b30gY2xhc3NOYW1lPVwidGh1bWJuYWlsXCIgb25DbGljaz17KCkgPT4gb3BlbkxpZ2h0Ym94T25TbGlkZShpbmRleCArIDEpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZzTGlnaHRib3hcclxuICAgICAgICAgICAgICAgIHRvZ2dsZXI9e2xpZ2h0Ym94Q29udHJvbGxlci50b2dnbGVyfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgIHNsaWRlPXtsaWdodGJveENvbnRyb2xsZXIuc2xpZGV9XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VzPXt0YXJnZXRQaG90b3N9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnBob3RvLWNhcm91c2VsIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZSk7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNnJlbTtcclxuICAgICAgICAgIHdpZHRoOiAxNnJlbTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGh1bWJuYWlsOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGhvdG9DYXJvdXNlbFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZzTGlnaHRib3giLCJQaG90b0Nhcm91c2VsIiwicGhvdG9zIiwiaGVhZGVyIiwiaXRlbXMiLCJsaWdodGJveENvbnRyb2xsZXIiLCJzZXRMaWdodGJveENvbnRyb2xsZXIiLCJ0b2dnbGVyIiwic2xpZGUiLCJvcGVuTGlnaHRib3hPblNsaWRlIiwibnVtYmVyIiwidGFyZ2V0UGhvdG9zIiwibWFwIiwicGhvdG8iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=