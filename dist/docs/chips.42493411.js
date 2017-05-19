webpackJsonp([30],{

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(472),
  /* template */
  __webpack_require__(538),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 472:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    fruits: ['Orange', 'Apple', 'Pineapple'],
    contacts: ['Marcos Moura'],
    cities: ['Amsterdam', 'London', 'Tokio']
  })
});

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - Chips"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("A chip may contain entities such as a photo, text, rules, an icon, or a contact.")])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-chip"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("disabled")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Disable the chip and prevent its actions. Default: "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-deletable")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Enable delete button. Default: "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-editable")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Enable click on the chip's content. Default: "), _c('code', [_vm._v("false")])])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "events"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Value")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("delete")]), _vm._v(" "), _c('md-table-cell', [_vm._v("None")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when delete button is clicked.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("edit")]), _vm._v(" "), _c('md-table-cell', [_vm._v("None")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when the chip's content is clicked.")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-chips"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("v-model")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Array")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("A required model object to bind the value.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("disabled")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Disable the chips and prevent its actions. Default: "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-input-id")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The chips input id.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-input-name")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The chips input name.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-input-placeholder")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The chips input placeholder.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-input-type")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The chips input type. Cannot be \"file\". Default: "), _c('code', [_vm._v("text")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-static")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Display read only chips. Default: "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-max")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The max number of chips to be added. This property works only for new chips. If the initial value in the v-model have more chips than the max value, all the chips will be rendered. Default: "), _c('code', [_vm._v("Infinity")])])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "events"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Value")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("change")]), _vm._v(" "), _c('md-table-cell', [_vm._v("The selcted chips Array")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when the chips is created or deleted.")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Single Chips"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-chip', [_vm._v("Marcos Moura")]), _vm._v(" "), _c('md-chip', {
    attrs: {
      "md-deletable": ""
    }
  }, [_vm._v("Luiza Ivanenko")]), _vm._v(" "), _c('md-chip', {
    attrs: {
      "md-editable": ""
    }
  }, [_vm._v("Alban Mouton")])], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-chip>Marcos Moura</md-chip>\n            <md-chip md-deletable>Luiza Ivanenko</md-chip>\n            <md-chip md-editable>Alban Mouton</md-chip>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Static"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-chips', {
    attrs: {
      "md-static": ""
    },
    scopedSlots: _vm._u([
      ["default", function(chip) {
        return [_vm._v(_vm._s(chip.value))]
      }]
    ]),
    model: {
      value: (_vm.fruits),
      callback: function($$v) {
        _vm.fruits = $$v
      },
      expression: "fruits"
    }
  })], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-chips v-model=\"fruits\" md-static>\n              <template scope=\"chip\">" + _vm._s('{{ chip.value }\}') + "</template>\n            </md-chips>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                fruits: ['Orange', 'Apple', 'Pineapple']\n              })\n            };\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Editable"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-chips', {
    attrs: {
      "md-input-placeholder": "Add a contact"
    },
    scopedSlots: _vm._u([
      ["default", function(chip) {
        return [_vm._v(_vm._s(chip.value))]
      }]
    ]),
    model: {
      value: (_vm.contacts),
      callback: function($$v) {
        _vm.contacts = $$v
      },
      expression: "contacts"
    }
  })], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-chips v-model=\"contacts\" md-input-placeholder=\"Add a contact\">\n              <template scope=\"chip\">" + _vm._s('{{ chip.value }\}') + "</template>\n            </md-chips>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                contacts: ['Marcos Moura'],\n              })\n            };\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Limit"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-chips', {
    attrs: {
      "md-max": 5,
      "md-input-placeholder": "Cities..."
    },
    scopedSlots: _vm._u([
      ["default", function(chip) {
        return [_c('span', [_vm._v(_vm._s(chip.value))]), _vm._v(" "), (chip.value === 'Amsterdam') ? _c('small', [_vm._v("(favorite)")]) : _vm._e()]
      }]
    ]),
    model: {
      value: (_vm.cities),
      callback: function($$v) {
        _vm.cities = $$v
      },
      expression: "cities"
    }
  })], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-chips v-model=\"cities\" :md-max=\"5\" md-input-placeholder=\"Cities...\">\n              <template scope=\"chip\">\n                <span>" + _vm._s('{{ chip.value }\}') + "</span>\n                <small v-if=\"chip.value === 'Amsterdam'\">(favorite)</small>\n              </template>\n            </md-chips>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                  cities: ['Amsterdam', 'London', 'Tokio']\n              })\n            };\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Themed Chips"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-chip', [_vm._v("Default")]), _vm._v(" "), _c('md-chip', {
    attrs: {
      "md-deletable": ""
    }
  }, [_vm._v("Default")]), _vm._v(" "), _c('md-chip', {
    staticClass: "md-primary"
  }, [_vm._v("Primary")]), _vm._v(" "), _c('md-chip', {
    staticClass: "md-primary",
    attrs: {
      "md-deletable": ""
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('md-chip', {
    staticClass: "md-accent"
  }, [_vm._v("Accent")]), _vm._v(" "), _c('md-chip', {
    staticClass: "md-accent",
    attrs: {
      "md-deletable": ""
    }
  }, [_vm._v("Accent")]), _vm._v(" "), _c('md-chip', {
    staticClass: "md-warn"
  }, [_vm._v("Warn")]), _vm._v(" "), _c('md-chip', {
    staticClass: "md-warn",
    attrs: {
      "md-deletable": ""
    }
  }, [_vm._v("Warn")])], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-chip>Default</md-chip>\n            <md-chip md-deletable>Default</md-chip>\n            <md-chip class=\"md-primary\">Primary</md-chip>\n            <md-chip md-deletable class=\"md-primary\">Primary</md-chip>\n            <md-chip class=\"md-accent\">Accent</md-chip>\n            <md-chip md-deletable class=\"md-accent\">Accent</md-chip>\n            <md-chip class=\"md-warn\">Warn</md-chip>\n            <md-chip md-deletable class=\"md-warn\">Warn</md-chip>\n          ")])], 1)])], 1)])], 1)
},staticRenderFns: []}

/***/ })

});