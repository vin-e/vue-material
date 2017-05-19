webpackJsonp([5],{

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(564)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(482),
  /* template */
  __webpack_require__(527),
  /* scopeId */
  "data-v-19ad86b0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 482:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: () => ({
    vertical: 'bottom',
    horizontal: 'center',
    duration: 4000
  }),
  methods: {
    open() {
      this.$refs.snackbar.open();
    }
  }
});

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - Snackbar"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("Snackbars contain a single line of text directly related to the operation performed. They may contain a text action, but no icons.")])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-snackbar"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-position")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Specify which vertical and horizontal position the snackbar will take. Accepts "), _c('code', [_vm._v("top left")]), _vm._v("|"), _c('code', [_vm._v("top center")]), _vm._v("|"), _c('code', [_vm._v("right center")]), _vm._v("|"), _c('code', [_vm._v("bottom left")]), _vm._v("|"), _c('code', [_vm._v("bottom center")]), _vm._v("|"), _c('code', [_vm._v("bottom right")]), _vm._v(". Default: "), _c('code', [_vm._v("bottom center")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-duration")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The duration visibility in miliseconds. Default: "), _c('code', [_vm._v("4000")])])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "events"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Value")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("open")]), _vm._v(" "), _c('md-table-cell', [_vm._v("None")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when the snackbar open.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("close")]), _vm._v(" "), _c('md-table-cell', [_vm._v("None")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when the snackbar closes.")])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "methods"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("open")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Opens the Snackbar.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("close")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Closes the Snackbar.")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Default"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('form', {
    attrs: {
      "novalidate": ""
    },
    on: {
      "submit": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.open($event)
      }
    }
  }, [_c('div', [_c('div', {
    staticClass: "md-body-2"
  }, [_vm._v("Vertical")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "id": "top",
      "name": "snackbar-vertical",
      "md-value": "top"
    },
    model: {
      value: (_vm.vertical),
      callback: function($$v) {
        _vm.vertical = $$v
      },
      expression: "vertical"
    }
  }, [_vm._v("top")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "id": "bottom",
      "name": "snackbar-vertical",
      "md-value": "bottom"
    },
    model: {
      value: (_vm.vertical),
      callback: function($$v) {
        _vm.vertical = $$v
      },
      expression: "vertical"
    }
  }, [_vm._v("bottom")])], 1), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "md-body-2"
  }, [_vm._v("Horizontal")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "id": "left",
      "name": "snackbar-horizontal",
      "md-value": "left"
    },
    model: {
      value: (_vm.horizontal),
      callback: function($$v) {
        _vm.horizontal = $$v
      },
      expression: "horizontal"
    }
  }, [_vm._v("left")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "id": "center",
      "name": "snackbar-horizontal",
      "md-value": "center"
    },
    model: {
      value: (_vm.horizontal),
      callback: function($$v) {
        _vm.horizontal = $$v
      },
      expression: "horizontal"
    }
  }, [_vm._v("center")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "id": "right",
      "name": "snackbar-horizontal",
      "md-value": "right"
    },
    model: {
      value: (_vm.horizontal),
      callback: function($$v) {
        _vm.horizontal = $$v
      },
      expression: "horizontal"
    }
  }, [_vm._v("right")])], 1), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "md-body-2"
  }, [_vm._v("Delay")]), _vm._v(" "), _c('md-input-container', [_c('md-input', {
    attrs: {
      "type": "number"
    },
    model: {
      value: (_vm.duration),
      callback: function($$v) {
        _vm.duration = $$v
      },
      expression: "duration"
    }
  })], 1)], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary md-raised",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Open Snackbar")]), _vm._v(" "), _c('md-snackbar', {
    ref: "snackbar",
    attrs: {
      "md-position": _vm.vertical + ' ' + _vm.horizontal,
      "md-duration": _vm.duration
    }
  }, [_c('span', [_vm._v("Connection timeout. Showing limited messages.")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-accent",
    attrs: {
      "md-theme": "light-blue"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$refs.snackbar.close()
      }
    }
  }, [_vm._v("Retry")])], 1)], 1)]), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <form novalidate @submit.stop.prevent=\"open\">\n              <div>\n                <div class=\"md-body-2\">Vertical</div>\n                <md-radio v-model=\"vertical\" id=\"top\" name=\"snackbar-vertical\" md-value=\"top\">top</md-radio>\n                <md-radio v-model=\"vertical\" id=\"bottom\" name=\"snackbar-vertical\" md-value=\"bottom\">bottom</md-radio>\n              </div>\n\n              <div>\n                <div class=\"md-body-2\">Horizontal</div>\n                <md-radio v-model=\"horizontal\" id=\"left\" name=\"snackbar-horizontal\" md-value=\"left\">left</md-radio>\n                <md-radio v-model=\"horizontal\" id=\"center\" name=\"snackbar-horizontal\" md-value=\"center\">center</md-radio>\n                <md-radio v-model=\"horizontal\" id=\"right\" name=\"snackbar-horizontal\" md-value=\"right\">right</md-radio>\n              </div>\n\n              <div>\n                <div class=\"md-body-2\">Delay</div>\n\n                <md-input-container>\n                  <md-input type=\"number\" v-model=\"duration\"></md-input>\n                </md-input-container>\n              </div>\n\n              <md-button type=\"submit\" class=\"md-primary md-raised\">Open Snackbar</md-button>\n\n              <md-snackbar :md-position=\"vertical + ' ' + horizontal\" ref=\"snackbar\" :md-duration=\"duration\">\n                <span>Connection timeout. Showing limited messages.</span>\n                <md-button class=\"md-accent\" md-theme=\"light-blue\" @click.native=\"$refs.snackbar.close()\">Retry</md-button>\n              </md-snackbar>\n            </form>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javacript"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                vertical: 'bottom',\n                horizontal: 'center',\n                duration: 4000\n              }),\n              methods: {\n                open() {\n                  this.$refs.snackbar.open();\n                }\n              }\n            };\n          ")])], 1)])], 1)]), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-fab-bottom-right"
  }, [_c('md-icon', [_vm._v("add")])], 1)], 1)
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
var update = __webpack_require__(5)("82099f6e", content, true);

/***/ })

});