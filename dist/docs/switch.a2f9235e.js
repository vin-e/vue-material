webpackJsonp([26],{

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(485),
  /* template */
  __webpack_require__(558),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 485:
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
//
//
//
//
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
      checked0: true,
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: true,
      checked7: true,
      checked8: true,
      checked9: true,
      checked10: true
    };
  },
  methods: {
    submit() {
      alert('This switch submits the form');
    }
  }
});

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - Switch"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.")]), _vm._v(" "), _c('p', [_vm._v("The following classes can be applied to change the color palette:")]), _vm._v(" "), _c('ul', {
    staticClass: "md-body-2"
  }, [_c('li', [_c('code', [_vm._v("md-primary")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("md-warn")])])])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-switch"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("v-model")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("A required model object to bind the value.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("type")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the type. Default "), _c('code', [_vm._v("button")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("name")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set the switch name.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("id")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set the switch id.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("disabled")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Disable the switch and prevent its actions. Default "), _c('code', [_vm._v("false")])])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "events"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Value")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("change")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Receive the state of the switch")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when the switch changes its value.")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Default"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('div', [_c('md-switch', {
    attrs: {
      "id": "my-test0",
      "name": "my-test0"
    },
    model: {
      value: (_vm.checked0),
      callback: function($$v) {
        _vm.checked0 = $$v
      },
      expression: "checked0"
    }
  })], 1), _vm._v(" "), _c('div', [_c('md-switch', {
    staticClass: "md-primary",
    attrs: {
      "id": "my-test1",
      "name": "my-test1"
    },
    model: {
      value: (_vm.checked1),
      callback: function($$v) {
        _vm.checked1 = $$v
      },
      expression: "checked1"
    }
  }, [_vm._v("Primary Color")])], 1), _vm._v(" "), _c('div', [_c('md-switch', {
    staticClass: "md-warn",
    attrs: {
      "id": "my-test2",
      "name": "my-test2"
    },
    model: {
      value: (_vm.checked2),
      callback: function($$v) {
        _vm.checked2 = $$v
      },
      expression: "checked2"
    }
  }, [_vm._v("Warn Color")])], 1), _vm._v(" "), _c('div', [_c('md-switch', {
    attrs: {
      "id": "my-test3",
      "name": "my-test3",
      "disabled": ""
    },
    model: {
      value: (_vm.checked3),
      callback: function($$v) {
        _vm.checked3 = $$v
      },
      expression: "checked3"
    }
  }, [_vm._v("Disabled")])], 1)]), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-switch v-model=\"checked0\" id=\"my-test0\" name=\"my-test0\"></md-switch>\n            <md-switch v-model=\"checked1\" id=\"my-test1\" name=\"my-test1\" class=\"md-primary\">Primary Color</md-switch>\n            <md-switch v-model=\"checked2\" id=\"my-test2\" name=\"my-test2\" class=\"md-warn\">Warn Color</md-switch>\n            <md-switch v-model=\"checked3\" id=\"my-test3\" name=\"my-test3\" disabled>Disabled</md-switch>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "With type"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-switch', {
    attrs: {
      "id": "my-test8",
      "name": "my-test8"
    },
    model: {
      value: (_vm.checked8),
      callback: function($$v) {
        _vm.checked8 = $$v
      },
      expression: "checked8"
    }
  }, [_vm._v("Default")]), _vm._v(" "), _c('form', {
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.submit($event)
      }
    }
  }, [_c('md-switch', {
    staticClass: "md-primary",
    attrs: {
      "type": "submit",
      "id": "my-test9",
      "name": "my-test9"
    },
    model: {
      value: (_vm.checked9),
      callback: function($$v) {
        _vm.checked9 = $$v
      },
      expression: "checked9"
    }
  }, [_vm._v("Submit")])], 1)], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-switch v-model=\"checked8\" id=\"my-test8\" name=\"my-test8\">Default</md-switch>\n\n            <form @click.stop.prevent=\"submit\">\n              <md-switch type=\"submit\" v-model=\"checked9\" id=\"my-test9\" name=\"my-test9\" class=\"md-primary\">Submit</md-switch>\n            </form>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Themes"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('div', [_c('md-switch', {
    staticClass: "md-primary",
    attrs: {
      "md-theme": "orange",
      "id": "my-test4",
      "name": "my-test4"
    },
    model: {
      value: (_vm.checked4),
      callback: function($$v) {
        _vm.checked4 = $$v
      },
      expression: "checked4"
    }
  })], 1), _vm._v(" "), _c('div', [_c('md-switch', {
    staticClass: "md-primary",
    attrs: {
      "md-theme": "green",
      "id": "my-test5",
      "name": "my-test5"
    },
    model: {
      value: (_vm.checked5),
      callback: function($$v) {
        _vm.checked5 = $$v
      },
      expression: "checked5"
    }
  }, [_vm._v("Green Primary Color")])], 1), _vm._v(" "), _c('div', [_c('md-switch', {
    staticClass: "md-primary",
    attrs: {
      "md-theme": "brown",
      "id": "my-test6",
      "name": "my-test6"
    },
    model: {
      value: (_vm.checked6),
      callback: function($$v) {
        _vm.checked6 = $$v
      },
      expression: "checked6"
    }
  }, [_vm._v("Brown Primary Color")])], 1), _vm._v(" "), _c('div', [_c('md-switch', {
    staticClass: "md-primary",
    attrs: {
      "md-theme": "light-blue",
      "id": "my-test7",
      "name": "my-test7",
      "disabled": ""
    },
    model: {
      value: (_vm.checked7),
      callback: function($$v) {
        _vm.checked7 = $$v
      },
      expression: "checked7"
    }
  }, [_vm._v("Light Blue Primary Color Disabled")])], 1)]), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-switch md-theme=\"orange\" v-model=\"checked4\" id=\"my-test4\" name=\"my-test4\" class=\"md-primary\"></md-switch>\n            <md-switch md-theme=\"green\" v-model=\"checked5\" id=\"my-test5\" name=\"my-test5\" class=\"md-primary\">Green Primary Color</md-switch>\n            <md-switch md-theme=\"brown\" v-model=\"checked6\" id=\"my-test6\" name=\"my-test6\" class=\"md-primary\">Brown Primary Color</md-switch>\n            <md-switch md-theme=\"light-blue\" v-model=\"checked7\" id=\"my-test7\" name=\"my-test7\" class=\"md-primary\" disabled>Light Blue Primary Color Disabled</md-switch>\n          ")])], 1)])], 1)])], 1)
},staticRenderFns: []}

/***/ })

});