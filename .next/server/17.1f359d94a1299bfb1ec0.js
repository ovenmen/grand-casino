exports.ids = [17];
exports.modules = {

/***/ "iTKA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uQVn");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__);






const TablePrices = ({
  prices: {
    items = []
  }
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
  className: "jsx-3779415539" + " " + "table-prices",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "jsx-3779415539" + " " + "grid-container fluid",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["Accordion"], {
      allowZeroExpanded: true,
      preExpanded: [0],
      children: items.map((item, index) => {
        var _item$description, _item$list, _item$list2, _item$list2$items;

        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemHeading"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemButton"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "jsx-3779415539" + " " + "grid-x grid-padding-x price-row",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "jsx-3779415539" + " " + "cell small-7 medium-8 large-10",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    className: "jsx-3779415539" + " " + "price-item font-bold h5",
                    children: item.title
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "jsx-3779415539" + " " + "cell small-5 medium-4 large-2",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    className: "jsx-3779415539" + " " + "price-item font-bold h5",
                    children: item.value
                  })
                })]
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemPanel"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "jsx-3779415539" + " " + "grid-x grid-padding-x",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "jsx-3779415539" + " " + "cell padding-1 small-12 medium-12 large-12",
                children: [item === null || item === void 0 ? void 0 : (_item$description = item.description) === null || _item$description === void 0 ? void 0 : _item$description.map((itemDescription, indexDescription) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  className: "jsx-3779415539",
                  children: itemDescription
                }, indexDescription)), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  className: "jsx-3779415539",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    className: "jsx-3779415539",
                    children: item === null || item === void 0 ? void 0 : (_item$list = item.list) === null || _item$list === void 0 ? void 0 : _item$list.title
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
                    className: "jsx-3779415539",
                    children: item === null || item === void 0 ? void 0 : (_item$list2 = item.list) === null || _item$list2 === void 0 ? void 0 : (_item$list2$items = _item$list2.items) === null || _item$list2$items === void 0 ? void 0 : _item$list2$items.map((itemList, indexList) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                      className: "jsx-3779415539",
                      children: itemList
                    }, indexList))
                  })]
                })]
              })
            })
          })]
        }, index);
      })
    })
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3247350230",
    children: [".accordion__button{outline:none;}", ".accordion__button[aria-expanded='true']{background-color:#372964;color:var(--color-white);}", ".accordion__button:hover{background-color:#372964;color:var(--color-white);}", ".accordion__panel{border:1px solid #372964;border-top:none;padding:20px;-webkit-animation:fadein 0.35s ease-in;animation:fadein 0.35s ease-in;}", "@-webkit-keyframes fadein{0%{opacity:0;}100%{opacity:1;}}", "@keyframes fadein{0%{opacity:0;}100%{opacity:1;}}"]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3349330860",
    children: [".table-prices.jsx-3779415539{padding:5vw 10vw;}", ".price-row.jsx-3779415539{border-bottom:1px solid #d2e0eb;cursor:pointer;}", ".price-item.jsx-3779415539{margin:0;padding:1rem 0;}"]
  })]
});

/* harmony default export */ __webpack_exports__["default"] = (TablePrices);

/***/ })

};;