webpackJsonp([13],{

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(563)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(470),
  /* template */
  __webpack_require__(526),
  /* scopeId */
  "data-v-178055a6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 470:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      buttonDisabled: true
    };
  },
  methods: {
    disablePrimaryButton() {
      this.buttonDisabled = !this.buttonDisabled;
    }
  }
});

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".disabled-button[data-v-178055a6]{margin-left:8px}.fab-holder[data-v-178055a6]{height:300px}", ""]);

// exports


/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - Button"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("Buttons communicate the action that will occur when the user touches them.")]), _vm._v(" "), _c('p', [_vm._v("The following classes can be applied to change the color palette:")]), _vm._v(" "), _c('ul', {
    staticClass: "md-body-2"
  }, [_c('li', [_c('code', [_vm._v("md-primary")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("md-accent")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("md-warn")])])])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-button"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("disabled")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Disable the button and prevent its actions. Default "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("type")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Apply a type to button - Doesn't apply for links.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("href")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Create a anchor on the button - In this case the generated tag will be "), _c('code', [_vm._v("<a>")]), _vm._v(".")])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "classes"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-raised")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Raised button")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-icon-button")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Create rounded buttons - Need a <md-icon> inside")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-dense")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Small dense buttons")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-fab")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Create an Floating Action Button")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-mini")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Small md-fab")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-fab-top-left")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Position the md-fab absolutely on the top left of its parent")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-fab-top-center")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Position the md-fab absolutely on the top center of its parent")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-fab-top-right")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Position the md-fab absolutely on the top right of its parent")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-fab-bottom-left")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Position the md-fab absolutely on the bottom left of its parent")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-fab-bottom-center")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Position the md-fab absolutely on the bottom center of its parent")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-fab-bottom-right")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Position the md-fab absolutely on the bottom right of its parent")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Flat"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-button', [_vm._v("Default")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary"
  }, [_vm._v("Primary")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-accent"
  }, [_vm._v("Accent")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-warn"
  }, [_vm._v("Warn")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-dense"
  }, [_vm._v("Dense")])], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-button>Default</md-button>\n            <md-button class=\"md-primary\">Primary</md-button>\n            <md-button class=\"md-accent\">Accent</md-button>\n            <md-button class=\"md-warn\">Warn</md-button>\n            <md-button class=\"md-primary\" disabled>Disabled</md-button>\n            <md-button class=\"md-dense\">Dense</md-button>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Raised"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-button', {
    staticClass: "md-raised"
  }, [_vm._v("Default")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary"
  }, [_vm._v("Primary")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-accent"
  }, [_vm._v("Accent")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-warn"
  }, [_vm._v("Warn")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary",
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-dense"
  }, [_vm._v("Dense")])], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-button class=\"md-raised\">Default</md-button>\n            <md-button class=\"md-raised md-primary\">Primary</md-button>\n            <md-button class=\"md-raised md-accent\">Accent</md-button>\n            <md-button class=\"md-raised md-warn\">Warn</md-button>\n            <md-button class=\"md-raised md-primary\" disabled>Disabled</md-button>\n            <md-button class=\"md-raised md-dense\">Dense</md-button>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Button vs Link vs Router Link"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-button', {
    staticClass: "md-raised md-primary"
  }, [_vm._v("Button")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary",
    attrs: {
      "href": "#/components/button"
    }
  }, [_vm._v("Link")]), _vm._v(" "), _c('router-link', {
    staticClass: "md-raised md-primary",
    attrs: {
      "tag": "md-button",
      "to": "/components/button"
    }
  }, [_vm._v("Router Link")])], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-button class=\"md-raised md-primary\">Button</md-button>\n            <md-button href=\"#/components/button\" class=\"md-raised md-primary\">Link</md-button>\n            <router-link tag=\"md-button\" to=\"/components/button\" class=\"md-raised md-primary\">Router Link</router-link>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Icons - Flat"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-button', {
    staticClass: "md-icon-button"
  }, [_c('md-icon', [_vm._v("more_vert")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-primary"
  }, [_c('md-icon', [_vm._v("more_vert")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-accent"
  }, [_c('md-icon', [_vm._v("more_vert")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-warn"
  }, [_c('md-icon', [_vm._v("more_vert")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button",
    attrs: {
      "disabled": ""
    }
  }, [_c('md-icon', [_vm._v("more_vert")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-dense"
  }, [_c('md-icon', [_vm._v("more_vert")])], 1)], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-button class=\"md-icon-button\">\n              <md-icon>more_vert</md-icon>\n            </md-button>\n\n            <md-button class=\"md-icon-button md-primary\">\n              <md-icon>more_vert</md-icon>\n            </md-button>\n\n            <md-button class=\"md-icon-button md-accent\">\n              <md-icon>more_vert</md-icon>\n            </md-button>\n\n            <md-button class=\"md-icon-button md-warn\">\n              <md-icon>more_vert</md-icon>\n            </md-button>\n\n            <md-button class=\"md-icon-button\" disabled>\n              <md-icon>more_vert</md-icon>\n            </md-button>\n\n            <md-button class=\"md-icon-button md-dense\">\n              <md-icon>more_vert</md-icon>\n            </md-button>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Icons - Raised"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-button', {
    staticClass: "md-icon-button md-raised"
  }, [_c('md-icon', [_vm._v("add")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-raised md-primary"
  }, [_c('md-icon', [_vm._v("add")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-raised md-accent"
  }, [_c('md-icon', [_vm._v("add")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-raised md-warn"
  }, [_c('md-icon', [_vm._v("add")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-raised",
    attrs: {
      "disabled": ""
    }
  }, [_c('md-icon', [_vm._v("add")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-raised md-dense"
  }, [_c('md-icon', [_vm._v("add")])], 1)], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-button class=\"md-icon-button md-raised\">\n              <md-icon>add</md-icon>\n            </md-button>\n\n            <md-button class=\"md-icon-button md-raised md-primary\">\n              <md-icon>add</md-icon>\n            </md-button>\n\n            <md-button class=\"md-icon-button md-raised md-accent\">\n              <md-icon>add</md-icon>\n            </md-button>\n\n            <md-button class=\"md-icon-button md-raised md-warn\">\n              <md-icon>add</md-icon>\n            </md-button>\n\n            <md-button class=\"md-icon-button md-raised\" disabled>\n              <md-icon>add</md-icon>\n            </md-button>\n\n            <md-button class=\"md-icon-button md-raised md-dense\">\n              <md-icon>add</md-icon>\n            </md-button>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Floating Action Button"
    }
  }, [_c('div', {
    staticClass: "fab-holder",
    slot: "demo"
  }, [_c('div', [_c('md-button', {
    staticClass: "md-fab"
  }, [_c('md-icon', [_vm._v("edit")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-primary"
  }, [_c('md-icon', [_vm._v("email")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-warn"
  }, [_c('md-icon', [_vm._v("save")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-clean"
  }, [_c('md-icon', [_vm._v("dialpad")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab",
    attrs: {
      "disabled": ""
    }
  }, [_c('md-icon', [_vm._v("message")])], 1)], 1), _vm._v(" "), _c('div', [_c('md-button', {
    staticClass: "md-fab md-mini"
  }, [_c('md-icon', [_vm._v("edit")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-primary md-mini"
  }, [_c('md-icon', [_vm._v("email")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-warn md-mini"
  }, [_c('md-icon', [_vm._v("save")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-clean md-mini"
  }, [_c('md-icon', [_vm._v("dialpad")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-mini",
    attrs: {
      "disabled": ""
    }
  }, [_c('md-icon', [_vm._v("message")])], 1)], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-fab-bottom-left"
  }, [_c('md-icon', [_vm._v("save")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-primary md-fab-bottom-center"
  }, [_c('md-icon', [_vm._v("dialpad")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-fab-bottom-right"
  }, [_c('md-icon', [_vm._v("add")])], 1)], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <div>\n              <md-button class=\"md-fab\">\n                <md-icon>edit</md-icon>\n              </md-button>\n\n              <md-button class=\"md-fab md-primary\">\n                <md-icon>email</md-icon>\n              </md-button>\n\n              <md-button class=\"md-fab md-warn\">\n                <md-icon>save</md-icon>\n              </md-button>\n\n              <md-button class=\"md-fab md-clean\">\n                <md-icon>dialpad</md-icon>\n              </md-button>\n\n              <md-button class=\"md-fab\" disabled>\n                <md-icon>message</md-icon>\n              </md-button>\n            </div>\n\n            <div>\n              <md-button class=\"md-fab md-mini\">\n                <md-icon>edit</md-icon>\n              </md-button>\n\n              <md-button class=\"md-fab md-primary md-mini\">\n                <md-icon>email</md-icon>\n              </md-button>\n\n              <md-button class=\"md-fab md-warn md-mini\">\n                <md-icon>save</md-icon>\n              </md-button>\n\n              <md-button class=\"md-fab md-clean md-mini\">\n                <md-icon>dialpad</md-icon>\n              </md-button>\n\n              <md-button class=\"md-fab md-mini\" disabled>\n                <md-icon>message</md-icon>\n              </md-button>\n            </div>\n\n            <md-button class=\"md-fab md-fab-bottom-left\">\n              <md-icon>save</md-icon>\n            </md-button>\n\n            <md-button class=\"md-fab md-primary md-fab-bottom-center\">\n              <md-icon>dialpad</md-icon>\n            </md-button>\n\n            <md-button class=\"md-fab md-fab-bottom-right\">\n              <md-icon>add</md-icon>\n            </md-button>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Themes"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-button', {
    staticClass: "md-primary",
    attrs: {
      "md-theme": "indigo"
    }
  }, [_vm._v("Indigo")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary",
    attrs: {
      "md-theme": "teal"
    }
  }, [_vm._v("Teal")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-primary",
    attrs: {
      "md-theme": "orange"
    }
  }, [_c('md-icon', [_vm._v("add")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-raised md-primary",
    attrs: {
      "md-theme": "green"
    }
  }, [_c('md-icon', [_vm._v("message")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-primary",
    attrs: {
      "md-theme": "brown"
    }
  }, [_c('md-icon', [_vm._v("dialpad")])], 1)], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-button md-theme=\"indigo\" class=\"md-primary\">Indigo</md-button>\n\n            <md-button md-theme=\"teal\" class=\"md-raised md-primary\">Teal</md-button>\n\n            <md-button md-theme=\"orange\" class=\"md-icon-button md-primary\">\n              <md-icon>add</md-icon>\n            </md-button>\n\n            <md-button md-theme=\"green\" class=\"md-icon-button md-raised md-primary\">\n              <md-icon>message</md-icon>\n            </md-button>\n\n            <md-button md-theme=\"brown\" class=\"md-fab md-primary\">\n              <md-icon>dialpad</md-icon>\n            </md-button>\n          ")])], 1)])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(491);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("a9dc893e", content, true);

/***/ })

});