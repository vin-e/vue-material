webpackJsonp([29],{

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(475),
  /* template */
  __webpack_require__(524),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 475:
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
    single: null,
    placeholder: null,
    initialValue: 'my-profile-picture.jpg',
    multiple: null,
    onlyImages: null
  })
});

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - File"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("The file picker aim to select files like images, videos and other formats. They can have multiselection and use the devide file system to pick the file.")])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-file"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("v-model")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("A required model object to bind the value.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("id")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the input id.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("name")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the input name.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("disabled")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Disable the input and prevent its actions. Default "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("required")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Apply the required rule to style the label with an \"*\". Default "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("accept")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Filter files that can be selected by mimetype pattern.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("multiple")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Enable multiple selection.")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Single File"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-input-container', [_c('label', [_vm._v("Single")]), _vm._v(" "), _c('md-file', {
    model: {
      value: (_vm.single),
      callback: function($$v) {
        _vm.single = $$v
      },
      expression: "single"
    }
  })], 1), _vm._v(" "), _c('md-input-container', [_c('md-file', {
    attrs: {
      "placeholder": "A nice input placeholder"
    },
    model: {
      value: (_vm.placeholder),
      callback: function($$v) {
        _vm.placeholder = $$v
      },
      expression: "placeholder"
    }
  })], 1), _vm._v(" "), _c('md-input-container', [_c('md-file', {
    attrs: {
      "placeholder": "Disabled",
      "disabled": ""
    }
  })], 1), _vm._v(" "), _c('md-input-container', [_c('label', [_vm._v("Initial Value")]), _vm._v(" "), _c('md-file', {
    model: {
      value: (_vm.initialValue),
      callback: function($$v) {
        _vm.initialValue = $$v
      },
      expression: "initialValue"
    }
  })], 1), _vm._v(" "), _c('md-input-container', [_c('label', [_vm._v("Multiple")]), _vm._v(" "), _c('md-file', {
    attrs: {
      "multiple": ""
    },
    model: {
      value: (_vm.multiple),
      callback: function($$v) {
        _vm.multiple = $$v
      },
      expression: "multiple"
    }
  })], 1), _vm._v(" "), _c('md-input-container', [_c('label', [_vm._v("Only Images")]), _vm._v(" "), _c('md-file', {
    attrs: {
      "accept": "image/*"
    },
    model: {
      value: (_vm.onlyImages),
      callback: function($$v) {
        _vm.onlyImages = $$v
      },
      expression: "onlyImages"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-input-container>\n              <label>Single</label>\n              <md-file v-model=\"single\"></md-file>\n            </md-input-container>\n\n            <md-input-container>\n              <md-file v-model=\"placeholder\" placeholder=\"A nice input placeholder\"></md-file>\n            </md-input-container>\n\n            <md-input-container>\n              <md-file placeholder=\"Disabled\" disabled></md-file>\n            </md-input-container>\n\n            <md-input-container>\n              <label>Initial Value</label>\n              <md-file v-model=\"initialValue\"></md-file>\n            </md-input-container>\n\n            <md-input-container>\n              <label>Multiple</label>\n              <md-file v-model=\"multiple\" multiple></md-file>\n            </md-input-container>\n\n            <md-input-container>\n              <label>Only Images</label>\n              <md-file v-model=\"onlyImages\" accept=\"image/*\"></md-file>\n            </md-input-container>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                single: null,\n                placeholder: null,\n                initialValue: 'my-profile-picture.jpg',\n                multiple: null,\n                onlyImages: null\n              })\n            };\n          ")])], 1)])], 1)])], 1)
},staticRenderFns: []}

/***/ })

});