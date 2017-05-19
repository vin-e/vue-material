webpackJsonp([31],{

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(471),
  /* template */
  __webpack_require__(522),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 471:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      checkbox: true,
      checkbox2: false
    };
  }
});

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - Checkbox"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("Checkboxes allow the user to select multiple options from a set.")]), _vm._v(" "), _c('p', [_vm._v("The following classes can be applied to change the color palette:")]), _vm._v(" "), _c('ul', {
    staticClass: "md-body-2"
  }, [_c('li', [_c('code', [_vm._v("md-primary")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("md-warn")])])])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-checkbox"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("v-model")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("A required model object to bind the value.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("name")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set the checkbox name.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("id")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set the checkbox id.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("disabled")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Disable the checkbox and prevent its actions. Default "), _c('code', [_vm._v("false")])])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "events"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Value")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("change")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Receive the state of the checkbox")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when the checkbox changes its value.")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Default"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-checkbox', {
    attrs: {
      "id": "my-test1",
      "name": "my-test1"
    },
    model: {
      value: (_vm.checkbox),
      callback: function($$v) {
        _vm.checkbox = $$v
      },
      expression: "checkbox"
    }
  }, [_vm._v("Regular Checkbox")]), _vm._v(" "), _c('md-checkbox', {
    staticClass: "md-primary",
    attrs: {
      "id": "my-test2",
      "name": "my-test2"
    },
    model: {
      value: (_vm.checkbox),
      callback: function($$v) {
        _vm.checkbox = $$v
      },
      expression: "checkbox"
    }
  }, [_vm._v("Primary Color")]), _vm._v(" "), _c('md-checkbox', {
    staticClass: "md-warn",
    attrs: {
      "id": "my-test3",
      "name": "my-test3"
    },
    model: {
      value: (_vm.checkbox),
      callback: function($$v) {
        _vm.checkbox = $$v
      },
      expression: "checkbox"
    }
  }, [_vm._v("Warn Color")]), _vm._v(" "), _c('md-checkbox', {
    attrs: {
      "id": "my-test4",
      "name": "my-test4",
      "disabled": ""
    },
    model: {
      value: (_vm.checkbox),
      callback: function($$v) {
        _vm.checkbox = $$v
      },
      expression: "checkbox"
    }
  }, [_vm._v("Disabled")])], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-checkbox id=\"my-test1\" name=\"my-test1\" v-model=\"checkbox\">Regular Checkbox</md-checkbox>\n            <md-checkbox id=\"my-test2\" name=\"my-test2\" v-model=\"checkbox\" class=\"md-primary\">Primary Color</md-checkbox>\n            <md-checkbox id=\"my-test3\" name=\"my-test3\" v-model=\"checkbox\" class=\"md-warn\">Warn Color</md-checkbox>\n            <md-checkbox id=\"my-test4\" name=\"my-test4\" v-model=\"checkbox\" disabled>Disabled</md-checkbox>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Themes"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-checkbox', {
    staticClass: "md-primary",
    attrs: {
      "md-theme": "orange",
      "id": "my-test5",
      "name": "my-test5"
    },
    model: {
      value: (_vm.checkbox2),
      callback: function($$v) {
        _vm.checkbox2 = $$v
      },
      expression: "checkbox2"
    }
  }, [_vm._v("Primary Orange")]), _vm._v(" "), _c('md-checkbox', {
    staticClass: "md-primary",
    attrs: {
      "md-theme": "green",
      "id": "my-test6",
      "name": "my-test6"
    },
    model: {
      value: (_vm.checkbox2),
      callback: function($$v) {
        _vm.checkbox2 = $$v
      },
      expression: "checkbox2"
    }
  }, [_vm._v("Primary Green")]), _vm._v(" "), _c('md-checkbox', {
    staticClass: "md-primary",
    attrs: {
      "md-theme": "light-blue",
      "id": "my-test7",
      "name": "my-test7"
    },
    model: {
      value: (_vm.checkbox2),
      callback: function($$v) {
        _vm.checkbox2 = $$v
      },
      expression: "checkbox2"
    }
  }, [_vm._v("Primary Light Blue")]), _vm._v(" "), _c('md-checkbox', {
    staticClass: "md-primary",
    attrs: {
      "md-theme": "indigo",
      "id": "my-test8",
      "name": "my-test8"
    },
    model: {
      value: (_vm.checkbox2),
      callback: function($$v) {
        _vm.checkbox2 = $$v
      },
      expression: "checkbox2"
    }
  }, [_vm._v("Primary Indigo")]), _vm._v(" "), _c('md-checkbox', {
    staticClass: "md-primary",
    attrs: {
      "md-theme": "brown",
      "id": "my-test9",
      "name": "my-test9",
      "disabled": ""
    },
    model: {
      value: (_vm.checkbox2),
      callback: function($$v) {
        _vm.checkbox2 = $$v
      },
      expression: "checkbox2"
    }
  }, [_vm._v("Primary Brown Disabled")])], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-checkbox md-theme=\"orange\"  id=\"my-test5\" name=\"my-test5\" v-model=\"checkbox2\" class=\"md-primary\">Primary Orange</md-checkbox>\n            <md-checkbox md-theme=\"green\"  id=\"my-test6\" name=\"my-test6\" v-model=\"checkbox2\" class=\"md-primary\">Primary Green</md-checkbox>\n            <md-checkbox md-theme=\"light-blue\" id=\"my-test7\" name=\"my-test7\" v-model=\"checkbox2\" class=\"md-primary\">Primary Light Blue</md-checkbox>\n            <md-checkbox md-theme=\"indigo\"  id=\"my-test8\" name=\"my-test8\" v-model=\"checkbox2\" class=\"md-primary\">Primary Indigo</md-checkbox>\n            <md-checkbox md-theme=\"brown\"  id=\"my-test9\" name=\"my-test9\" v-model=\"checkbox2\" class=\"md-primary\" disabled>Primary Brown Disabled</md-checkbox>\n          ")])], 1)])], 1)])], 1)
},staticRenderFns: []}

/***/ })

});