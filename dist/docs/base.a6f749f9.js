webpackJsonp([0],{

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(564)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(527),
  /* scopeId */
  "data-v-18783c1f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(578)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(468),
  /* template */
  __webpack_require__(544),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(584)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(551),
  /* scopeId */
  "data-v-7bf6351a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(582)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(549),
  /* scopeId */
  "data-v-728e2d7b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(588)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(556),
  /* scopeId */
  "data-v-ce614810",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: () => ({
    content: ''
  }),
  mounted() {
    const request = new XMLHttpRequest();
    const self = this;

    request.open('GET', '/changelog.html', true);
    request.setRequestHeader('Content-Type', 'text/html');
    request.onload = function () {
      self.content = this.response;
    };
    request.send();
  }
});

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "section[data-v-18783c1f]{max-width:960px}section+section[data-v-18783c1f]{margin-top:56px}.author-card[data-v-18783c1f]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.author-card .md-avatar[data-v-18783c1f]{margin-right:16px}.author-card .author-card-info[data-v-18783c1f]{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex:1;flex:1}.author-card span[data-v-18783c1f]{font-size:16px}.author-card .author-card-links[data-v-18783c1f]{display:-ms-flexbox;display:flex}.author-card .author-card-links a+a[data-v-18783c1f]{margin-left:8px}", ""]);

// exports


/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".changelog section{max-width:960px}.changelog section+section{margin-top:56px}.changelog section .md-headline a{color:inherit}.changelog section ul a{font-weight:700}", ""]);

// exports


/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".main-content[data-v-728e2d7b]{position:relative}article[data-v-728e2d7b]{max-width:960px}article+article[data-v-728e2d7b],section+section[data-v-728e2d7b]{margin-top:36px}.code-block[data-v-728e2d7b],.md-tabs[data-v-728e2d7b]{max-width:100%}.md-tab[data-v-728e2d7b]{border-top:1px solid rgba(0,0,0,.12);padding:0}iframe[data-v-728e2d7b]{height:auto;min-height:620px}", ""]);

// exports


/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "section[data-v-7bf6351a]{margin-top:64px;text-align:center}", ""]);

// exports


/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".introduction[data-v-ce614810]{max-width:960px;margin:0 auto}.example[data-v-ce614810]{margin-bottom:24px;overflow:hidden}.example img[data-v-ce614810]{margin:-45px auto;display:block}.button-actions[data-v-ce614810]{margin-bottom:16px;text-align:center}.button-actions .introduction[data-v-ce614810]{margin-bottom:.8em;font-size:20px;line-height:1.6em}.button-actions .md-button[data-v-ce614810]{margin-left:0;color:#fff!important}.row[data-v-ce614810]{margin:0 -10px;display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap}.column[data-v-ce614810]{margin:0 10px;-ms-flex:1 1 30%;flex:1 1 30%}@media (max-width:640px){.column[data-v-ce614810]{-ms-flex:1 1 100%;flex:1 1 100%}}", ""]);

// exports


/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "About"
    }
  }, [_c('div', {
    staticClass: "main-content"
  }, [_c('section', [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("Author")]), _vm._v(" "), _c('div', {
    staticClass: "author-card"
  }, [_c('md-avatar', {
    staticClass: "md-large"
  }, [_c('img', {
    attrs: {
      "src": "assets/marcosmoura.jpg",
      "alt": "Marcos Moura"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "author-card-info"
  }, [_c('span', [_vm._v("Marcos Moura")]), _vm._v(" "), _c('div', {
    staticClass: "author-card-links"
  }, [_c('a', {
    attrs: {
      "href": "https://github.com/marcosmoura",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("GitHub")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://linkedin.com/in/marcosvmmoura",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Linkedin")])])])], 1)]), _vm._v(" "), _c('section', [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("Browser Support")]), _vm._v(" "), _c('p', [_vm._v("Vue Material supports the latest version of all Browsers. This means:")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Google Chrome 52+")]), _vm._v(" "), _c('li', [_vm._v("Firefox 48+ ")]), _vm._v(" "), _c('li', [_vm._v("Safari 9+ ")]), _vm._v(" "), _c('li', [_vm._v("Opera 38+ ")]), _vm._v(" "), _c('li', [_vm._v("Edge 12+ ")]), _vm._v(" "), _c('li', [_vm._v("IE 11")])])]), _vm._v(" "), _c('section', [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("Credits and Thanks")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("This library aims to delivery components using almost the same API of "), _c('a', {
    attrs: {
      "href": "https://material.angularjs.org/latest/",
      "target": "_blank"
    }
  }, [_vm._v("Angular Material")])]), _vm._v(" "), _c('li', [_vm._v("Thanks a lot to "), _c('a', {
    attrs: {
      "href": "https://github.com/elviskang",
      "target": "_blank"
    }
  }, [_vm._v("elviskang")]), _vm._v(" for donating the npm package name!")]), _vm._v(" "), _c('li', [_vm._v("Thanks to "), _c('a', {
    attrs: {
      "href": "https://github.com/yyx990803",
      "target": "_blank"
    }
  }, [_vm._v("Evan You")]), _vm._v(" for allowing me to use Vue.js Logo.")])])]), _vm._v(" "), _c('section', [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("Internal Dependencies")]), _vm._v("\n      You don't need to include any other library to work with vue-material. The focus of this project is to have a standalone build with no external dependence, but aiming to deliver the best experience without break the compatibility with the Vue.js core.\n      "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "http://vuejs.org",
      "rel": "noopener",
      "target": "_blank"
    }
  }, [_vm._v("Vue")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://www.jacklmoore.com/autosize/",
      "rel": "noopener",
      "target": "_blank"
    }
  }, [_vm._v("autosize")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/element.scrollintoviewifneeded-polyfill",
      "rel": "noopener",
      "target": "_blank"
    }
  }, [_vm._v("element.scrollintoviewifneeded-polyfill")])])])]), _vm._v(" "), _c('section', [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("License")]), _vm._v(" "), _c('p', [_vm._v("MIT")])])])])
},staticRenderFns: []}

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Changelog"
    }
  }, [_c('div', {
    staticClass: "main-content changelog",
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Getting Started"
    }
  }, [_c('div', {
    staticClass: "main-content"
  }, [_c('article', [_c('section', [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("Include Fonts and Icons")]), _vm._v(" "), _c('p', [_vm._v("Use Roboto and Google Icons from Google CDN:")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n          <link rel=\"stylesheet\" href=\"//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic\">\n          <link rel=\"stylesheet\" href=\"//fonts.googleapis.com/icon?family=Material+Icons\">\n        ")])], 1)]), _vm._v(" "), _c('article', [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("Installation")]), _vm._v(" "), _c('section', [_c('h3', {
    staticClass: "md-title"
  }, [_vm._v("NPM")]), _vm._v(" "), _c('p', [_vm._v("Install Vue Material through npm or yarn "), _c('br'), _c('small', [_vm._v("* Others package managers like JSPM and Bower are not supported yet.")])]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "bash"
    }
  }, [_vm._v("\n          $ npm install vue-material --save\n          $ yarn add vue-material\n        ")])], 1), _vm._v(" "), _c('section', [_c('h3', {
    staticClass: "md-title"
  }, [_vm._v("Standalone")]), _vm._v(" "), _c('p', [_vm._v("Download from Github and reference the script and the stylesheet in your HTML:")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary",
    attrs: {
      "href": "https://github.com/marcosmoura/vue-material/archive/master.zip",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("download")])], 1), _vm._v(" "), _c('section', [_c('h3', {
    staticClass: "md-title"
  }, [_vm._v("CDN")]), _vm._v(" "), _c('p', [_vm._v("Include the Vue Material files from unpkg:")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary",
    attrs: {
      "href": "https://unpkg.com/vue-material",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Javascript")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary",
    attrs: {
      "href": "https://unpkg.com/vue-material/dist/vue-material.css",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("CSS")])], 1)]), _vm._v(" "), _c('article', [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("Usage")]), _vm._v(" "), _c('section', [_c('h3', {
    staticClass: "md-title"
  }, [_vm._v("AMD Modules")]), _vm._v(" "), _c('p', [_vm._v("Import and use the whole library:")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n          <link rel=\"stylesheet\" href=\"path/to/vue-material.css\">\n        ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n          var Vue = require('vue')\n          var VueMaterial = require('vue-material')\n\n          Vue.use(VueMaterial)\n        ")]), _vm._v(" "), _c('p', [_vm._v("Or to import individual components:")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n          <link rel=\"stylesheet\" href=\"path/to/vue-material/dist/components/mdCore.css\">\n          <link rel=\"stylesheet\" href=\"path/to/vue-material/dist/components/mdButton.css\">\n          <link rel=\"stylesheet\" href=\"path/to/vue-material/dist/components/mdIcon.css\">\n          <link rel=\"stylesheet\" href=\"path/to/vue-material/dist/components/mdSidenav.css\">\n          <link rel=\"stylesheet\" href=\"path/to/vue-material/dist/components/mdToolbar.css\">\n        ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n          var Vue = require('vue')\n          var VueMaterial = require('vue-material')\n\n          Vue.use(VueMaterial.MdCore) //Required to boot vue material\n          Vue.use(VueMaterial.MdButton)\n          Vue.use(VueMaterial.MdIcon)\n          Vue.use(VueMaterial.MdSidenav)\n          Vue.use(VueMaterial.MdToolbar)\n        ")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("Note:")]), _vm._v(" If you are using Webpack you can still import the css files inside your modules. And you can also write everything using ES6 with Babel or Bublé.")])], 1), _vm._v(" "), _c('section', [_c('h3', {
    staticClass: "md-title"
  }, [_vm._v("Standalone")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n          <link rel=\"stylesheet\" href=\"path/to/vue-material.css\">\n          <script src=\"path/to/vue-material.js\"></script>\n        ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n          // The VueMaterial variable is global\n          Vue.use(VueMaterial)\n        ")])], 1)]), _vm._v(" "), _c('article', [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("Codepen Examples")]), _vm._v(" "), _c('section', [_c('h3', {
    staticClass: "md-title"
  }, [_vm._v("Playground")]), _vm._v(" "), _c('iframe', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "height": "620",
      "scrolling": "no",
      "title": "Empty Setup",
      "src": "//codepen.io/vue-material/embed/VmMrYW/?height=620&theme-id=dark&default-tab=html,result&embed-version=2",
      "frameborder": "no",
      "allowtransparency": "true",
      "allowfullscreen": "true"
    }
  }, [_vm._v("See the Pen "), _c('a', {
    attrs: {
      "href": "http://codepen.io/vue-material/pen/VmMrYW/"
    }
  }, [_vm._v("Empty Setup")]), _vm._v(" by Vue Material ("), _c('a', {
    attrs: {
      "href": "http://codepen.io/vue-material"
    }
  }, [_vm._v("@vue-material")]), _vm._v(") on "), _c('a', {
    attrs: {
      "href": "http://codepen.io"
    }
  }, [_vm._v("CodePen")]), _vm._v(".")])], 1), _vm._v(" "), _c('section', [_c('h3', {
    staticClass: "md-title"
  }, [_vm._v("File Application UI")]), _vm._v(" "), _c('iframe', {
    attrs: {
      "width": "360",
      "height": "610",
      "scrolling": "no",
      "title": "File Application UI",
      "src": "//codepen.io/vue-material/embed/WoZpMR/?height=610&theme-id=dark&default-tab=result&embed-version=2",
      "frameborder": "no",
      "allowtransparency": "true",
      "allowfullscreen": "true"
    }
  }, [_vm._v("See the Pen "), _c('a', {
    attrs: {
      "href": "http://codepen.io/vue-material/pen/WoZpMR/"
    }
  }, [_vm._v("Vue Material Example")]), _vm._v(" by Vue Material ("), _c('a', {
    attrs: {
      "href": "http://codepen.io/vue-material"
    }
  }, [_vm._v("@vue-material")]), _vm._v(") on "), _c('a', {
    attrs: {
      "href": "http://codepen.io"
    }
  }, [_vm._v("CodePen")]), _vm._v(".")])], 1)])])])
},staticRenderFns: []}

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Error"
    }
  }, [_c('div', {
    staticClass: "main-content"
  }, [_c('section', [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("Hmmm. Too bad")]), _vm._v(" "), _c('p', [_vm._v("Are you searching for a new component? Or maybe you have an question? Get in touch!")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary md-raised",
    attrs: {
      "href": "mailto:marcosvmmoura@gmail.com?Subject=Vue%20Material%20-%20Question",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("E-mail")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary md-raised",
    attrs: {
      "href": "https://github.com/marcosmoura/vue-material/issues/new",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("New Issue")])], 1)])])
},staticRenderFns: []}

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Introduction"
    }
  }, [_c('div', {
    staticClass: "main-content"
  }, [_c('div', {
    staticClass: "introduction"
  }, [_c('div', {
    staticClass: "button-actions"
  }, [_c('div', {
    staticClass: "example"
  }, [_c('img', {
    attrs: {
      "src": "assets/vue-material-example.png",
      "alt": "Material Design"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "introduction"
  }, [_vm._v("Build well-crafted apps with Material Design and Vue 2")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary md-raised",
    attrs: {
      "href": "#/getting-started"
    }
  }, [_vm._v("Getting Started")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary md-raised",
    attrs: {
      "href": "https://github.com/marcosmoura/vue-material",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Github")])], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("Material Design")]), _vm._v(" "), _c('p', [_vm._v("Vue Material is lightweight framework built exactly according to the "), _c('a', {
    attrs: {
      "href": "http://material.google.com",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Material Design")]), _vm._v(" specs. Build powerful and well-designed web apps that can can fit on every screen.")])]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("Full-featured")]), _vm._v(" "), _c('p', [_vm._v("You can generate and use themes dynamically, use components on demand, take advantage of UI Elements and Components with an ease-to-use API and more...")])]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("Compatible")]), _vm._v(" "), _c('p', [_vm._v("It aims to deliver a collection of reusable components and a series of UI Elements to build applications with support to all modern Web Browsers through Vue 2.0.")])])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(492);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("0365c072", content, true);

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(506);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("288a5083", content, true);

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(510);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("5d6adb8b", content, true);

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(512);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("36dfe4e8", content, true);

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(516);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("b13ab5da", content, true);

/***/ })

});