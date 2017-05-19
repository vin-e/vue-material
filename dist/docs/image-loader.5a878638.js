webpackJsonp([28],{

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(476),
  /* template */
  __webpack_require__(555),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 476:
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
    src: null
  }),
  methods: {
    loadImage() {
      let options = ['assets/joker-1.jpg', 'assets/joker-2.jpg', 'assets/joker-3.jpg', 'assets/card-image-1.jpg', 'assets/card-image-2.jpg'];

      this.src = options[Math.floor(Math.random() * 5)];
    },
    clearImage() {
      this.src = null;
    }
  }
});

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - Image Loader"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("Illustrations and photographs may load and transition in three phases by staggering opacity, exposure, and saturation levels.")])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-image"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-src")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The image source. Accepts any image file extension.")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Default"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-button', {
    staticClass: "md-primary md-raised",
    nativeOn: {
      "click": function($event) {
        _vm.loadImage($event)
      }
    }
  }, [_vm._v("Load Image")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary md-raised",
    nativeOn: {
      "click": function($event) {
        _vm.clearImage($event)
      }
    }
  }, [_vm._v("Clear Image")]), _vm._v(" "), _c('div', [_c('md-image', {
    attrs: {
      "md-src": _vm.src
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-button class=\"md-primary md-raised\" @click.native=\"loadImage\">Load Image</md-button>\n            <md-button class=\"md-primary md-raised\" @click.native=\"clearImage\">Clear Image</md-button>\n\n            <div>\n              <md-image :md-src=\"src\"></md-image>\n            </div>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                src: null\n              }),\n              methods: {\n                loadImage() {\n                  let options = [\n                    'assets/joker-1.jpg',\n                    'assets/joker-2.jpg',\n                    'assets/joker-3.jpg',\n                    'assets/card-image-1.jpg',\n                    'assets/card-image-2.jpg'\n                  ];\n\n                  this.src = options[Math.floor(Math.random() * 5)];\n                },\n                clearImage() {\n                  this.src = null;\n                }\n              }\n            };\n          ")])], 1)])], 1)])], 1)
},staticRenderFns: []}

/***/ })

});