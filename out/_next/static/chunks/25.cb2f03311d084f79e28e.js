(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{iTKA:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("MX0m"),o=n.n(a),i=n("q1tI");function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?v(e):t}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g(this,n)}}function j(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function e(t){var n=this,r=t.expanded,a=void 0===r?[]:r,o=t.allowMultipleExpanded,i=void 0!==o&&o,d=t.allowZeroExpanded,l=void 0!==d&&d;c(this,e),u(this,"expanded",void 0),u(this,"allowMultipleExpanded",void 0),u(this,"allowZeroExpanded",void 0),u(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(j(n.expanded),[e]):[e]})})),u(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),u(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),u(this,"getPanelAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!r||void 0}})),u(this,"getHeadingAttributes",(function(){return{role:"heading"}})),u(this,"getButtonAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e),a=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":a,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),u(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),u(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),u(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=a,this.allowMultipleExpanded=i,this.allowZeroExpanded=l},w=Object(i.createContext)(null),O=function(e){f(n,e);var t=x(n);function n(){var e;c(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(v(e=t.call.apply(t,[this].concat(a))),"state",new y({expanded:e.props.preExpanded,allowMultipleExpanded:e.props.allowMultipleExpanded,allowZeroExpanded:e.props.allowZeroExpanded})),u(v(e),"toggleExpanded",(function(t){e.setState((function(e){return e.toggleExpanded(t)}),(function(){e.props.onChange&&e.props.onChange(e.state.expanded)}))})),u(v(e),"isItemDisabled",(function(t){return e.state.isItemDisabled(t)})),u(v(e),"isItemExpanded",(function(t){return e.state.isItemExpanded(t)})),u(v(e),"getPanelAttributes",(function(t,n){return e.state.getPanelAttributes(t,n)})),u(v(e),"getHeadingAttributes",(function(){return e.state.getHeadingAttributes()})),u(v(e),"getButtonAttributes",(function(t,n){return e.state.getButtonAttributes(t,n)})),e}return l(n,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return Object(i.createElement)(w.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),n}(i.PureComponent);u(O,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var A,I=function(e){f(n,e);var t=x(n);function n(){var e;c(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(v(e=t.call.apply(t,[this].concat(a))),"renderChildren",(function(t){return t?e.props.children(t):null})),e}return l(n,[{key:"render",value:function(){return Object(i.createElement)(w.Consumer,null,this.renderChildren)}}]),n}(i.PureComponent),P=function(e){var t=e.className,n=void 0===t?"accordion":t,r=e.allowMultipleExpanded,a=e.allowZeroExpanded,o=e.onChange,c=e.preExpanded,d=h(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return Object(i.createElement)(O,{preExpanded:c,allowMultipleExpanded:r,allowZeroExpanded:a,onChange:o},Object(i.createElement)("div",s({"data-accordion-component":"Accordion",className:n},d)))};!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(A||(A={}));var C=A,N=0;function _(){var e=N;return N+=1,"raa-".concat(e)}var D=/[\u0009\u000a\u000c\u000d\u0020]/g;function k(e){return""!==e&&!D.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var M=Object(i.createContext)(null),S=function(e){f(n,e);var t=x(n);function n(){var e;c(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(v(e=t.call.apply(t,[this].concat(a))),"toggleExpanded",(function(){e.props.accordionContext.toggleExpanded(e.props.uuid)})),u(v(e),"renderChildren",(function(t){var n=e.props,r=n.uuid,a=n.dangerouslySetExpanded,o=null!==a&&void 0!==a?a:t.isItemExpanded(r),c=t.isItemDisabled(r),d=t.getPanelAttributes(r,a),l=t.getHeadingAttributes(r),u=t.getButtonAttributes(r,a);return Object(i.createElement)(M.Provider,{value:{uuid:r,expanded:o,disabled:c,toggleExpanded:e.toggleExpanded,panelAttributes:d,headingAttributes:l,buttonAttributes:u}},e.props.children)})),e}return l(n,[{key:"render",value:function(){return Object(i.createElement)(I,null,this.renderChildren)}}]),n}(i.Component),B=function(e){return Object(i.createElement)(I,null,(function(t){return Object(i.createElement)(S,s({},e,{accordionContext:t}))}))},Z=function(e){f(n,e);var t=x(n);function n(){var e;c(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(v(e=t.call.apply(t,[this].concat(a))),"renderChildren",(function(t){return t?e.props.children(t):null})),e}return l(n,[{key:"render",value:function(){return Object(i.createElement)(M.Consumer,null,this.renderChildren)}}]),n}(i.PureComponent),H=function(e){f(n,e);var t=x(n);function n(){var e;c(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(v(e=t.call.apply(t,[this].concat(a))),"instanceUuid",_()),u(v(e),"renderChildren",(function(t){var n=e.props,r=(n.uuid,n.className),a=n.activeClassName,o=(n.dangerouslySetExpanded,h(n,["uuid","className","activeClassName","dangerouslySetExpanded"])),c=t.expanded&&a?a:r;return Object(i.createElement)("div",s({"data-accordion-component":"AccordionItem",className:c},o))})),e}return l(n,[{key:"render",value:function(){var e=this.props,t=e.uuid,n=void 0===t?this.instanceUuid:t,r=e.dangerouslySetExpanded,a=h(e,["uuid","dangerouslySetExpanded"]);return k(n),a.id&&k(a.id),Object(i.createElement)(B,{uuid:n,dangerouslySetExpanded:r},Object(i.createElement)(Z,null,this.renderChildren))}}]),n}(i.Component);function T(e){var t=function e(t){return t&&(t.matches('[data-accordion-component="Accordion"]')?t:e(t.parentElement))}(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}u(H,"defaultProps",{className:"accordion__item"}),u(H,"displayName",C.AccordionItem);var R="40",L="35",U="13",K="36",V="37",q="39",J="32",F="38",W=function(e){var t=e.toggleExpanded,n=e.className,r=void 0===n?"accordion__button":n,a=h(e,["toggleExpanded","className"]);return a.id&&k(a.id),Object(i.createElement)("div",s({className:r},a,{role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){var n=e.which.toString();if(n!==U&&n!==J||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(n){case K:e.preventDefault(),function(e){var t=(T(e)||[])[0];t&&t.focus()}(e.target);break;case L:e.preventDefault(),function(e){var t=T(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case V:case F:e.preventDefault(),function(e){var t=T(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case q:case R:e.preventDefault(),function(e){var t=T(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},X=function(e){return Object(i.createElement)(Z,null,(function(t){var n=t.toggleExpanded,r=t.buttonAttributes;return Object(i.createElement)(W,s({toggleExpanded:n},e,r))}))},$=function(e){f(n,e);var t=x(n);function n(){var e;c(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(v(e=t.call.apply(t,[this].concat(a))),"ref",void 0),u(v(e),"setRef",(function(t){e.ref=t})),e}return l(n,[{key:"componentDidUpdate",value:function(){n.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){n.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(i.createElement)("div",s({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),n}(i.PureComponent);u($,"defaultProps",{className:"accordion__heading","aria-level":3});var z=function(e){return Object(i.createElement)(Z,null,(function(t){var n=t.headingAttributes;return e.id&&k(e.id),Object(i.createElement)($,s({},e,n))}))};z.displayName=C.AccordionItemHeading;var G=function(e){var t=e.className,n=void 0===t?"accordion__panel":t,r=e.id,a=h(e,["className","id"]),o=function(e){var t=e.panelAttributes;return r&&k(r),Object(i.createElement)("div",s({"data-accordion-component":"AccordionItemPanel",className:n},a,t))};return Object(i.createElement)(Z,null,o)};t.default=function(e){var t=e.prices.items,n=void 0===t?[]:t;return Object(r.jsxs)("section",{className:"jsx-3779415539 table-prices",children:[Object(r.jsx)("div",{className:"jsx-3779415539 grid-container fluid",children:Object(r.jsx)(P,{allowZeroExpanded:!0,preExpanded:[0],children:n.map((function(e,t){var n,a,o,i;return Object(r.jsxs)(H,{children:[Object(r.jsx)(z,{children:Object(r.jsx)(X,{children:Object(r.jsxs)("div",{className:"jsx-3779415539 grid-x grid-padding-x price-row",children:[Object(r.jsx)("div",{className:"jsx-3779415539 cell small-7 medium-8 large-10",children:Object(r.jsx)("p",{className:"jsx-3779415539 price-item font-bold h5",children:e.title})}),Object(r.jsx)("div",{className:"jsx-3779415539 cell small-5 medium-4 large-2",children:Object(r.jsx)("p",{className:"jsx-3779415539 price-item font-bold h5",children:e.value})})]})})}),Object(r.jsx)(G,{children:Object(r.jsx)("div",{className:"jsx-3779415539 grid-x grid-padding-x",children:Object(r.jsxs)("div",{className:"jsx-3779415539 cell padding-1 small-12 medium-12 large-12",children:[null===e||void 0===e||null===(n=e.description)||void 0===n?void 0:n.map((function(e,t){return Object(r.jsx)("p",{className:"jsx-3779415539",children:e},t)})),Object(r.jsxs)("div",{className:"jsx-3779415539",children:[Object(r.jsx)("p",{className:"jsx-3779415539",children:null===e||void 0===e||null===(a=e.list)||void 0===a?void 0:a.title}),Object(r.jsx)("ul",{className:"jsx-3779415539",children:null===e||void 0===e||null===(o=e.list)||void 0===o||null===(i=o.items)||void 0===i?void 0:i.map((function(e,t){return Object(r.jsx)("li",{className:"jsx-3779415539",children:e},t)}))})]})]})})})]},t)}))})}),Object(r.jsx)(o.a,{id:"3247350230",children:[".accordion__button{outline:none;}",".accordion__button[aria-expanded='true']{background-color:#372964;color:var(--color-white);}",".accordion__button:hover{background-color:#372964;color:var(--color-white);}",".accordion__panel{border:1px solid #372964;border-top:none;padding:20px;-webkit-animation:fadein 0.35s ease-in;animation:fadein 0.35s ease-in;}","@-webkit-keyframes fadein{0%{opacity:0;}100%{opacity:1;}}","@keyframes fadein{0%{opacity:0;}100%{opacity:1;}}"]}),Object(r.jsx)(o.a,{id:"3349330860",children:[".table-prices.jsx-3779415539{padding:5vw 10vw;}",".price-row.jsx-3779415539{border-bottom:1px solid #d2e0eb;cursor:pointer;}",".price-item.jsx-3779415539{margin:0;padding:1rem 0;}"]})]})}}}]);