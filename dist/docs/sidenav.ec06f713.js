webpackJsonp([6],{

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(570)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(481),
  /* template */
  __webpack_require__(534),
  /* scopeId */
  "data-v-3c493dde",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 481:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  }
});

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".phone-viewport p[data-v-3c493dde]{padding:8px 16px}", ""]);

// exports


/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - Sidenav"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("The sidenav spans the height of the screen, with everything behind it visible but darkened by a backdrop.")])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-sidenav"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-swipeable")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Enable the swipe functionality. Default "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-swipe-threshold")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set the initial threshold for the swipe when it's closed. Default "), _c('code', [_vm._v("15")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-swipe-distance")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set the swipe distance needed to open/close the sidenav. Default "), _c('code', [_vm._v("100")])])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "classes"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-left")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Display the sidenav on the left of parent")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-right")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Display the sidenav on the right of parent")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-fixed")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Apply position fixed")])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "events"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Value")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("open")]), _vm._v(" "), _c('md-table-cell', [_vm._v("None")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when the sidenav starts to open.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("close")]), _vm._v(" "), _c('md-table-cell', [_vm._v("None")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when the sidenav starts to close.")])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "methods"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("open")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Open the sidenav.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("close")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Close the sidenav.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("toggle")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Toggle the sidenav.")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Default"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('div', {
    staticClass: "phone-viewport"
  }, [_c('md-toolbar', [_c('md-button', {
    staticClass: "md-icon-button",
    nativeOn: {
      "click": function($event) {
        _vm.toggleLeftSidenav($event)
      }
    }
  }, [_c('md-icon', [_vm._v("menu")])], 1), _vm._v(" "), _c('h2', {
    staticClass: "md-title"
  }, [_vm._v("My App")])], 1), _vm._v(" "), _c('div', [_c('md-button', {
    staticClass: "md-raised md-accent",
    nativeOn: {
      "click": function($event) {
        _vm.toggleRightSidenav($event)
      }
    }
  }, [_vm._v("Toggle right")]), _vm._v(" "), _c('p', [_vm._v("Open console to see the events")])], 1), _vm._v(" "), _c('md-sidenav', {
    ref: "leftSidenav",
    staticClass: "md-left",
    attrs: {
      "md-swipeable": ""
    },
    on: {
      "open": function($event) {
        _vm.open('Left')
      },
      "close": function($event) {
        _vm.close('Left')
      }
    }
  }, [_c('md-toolbar', {
    staticClass: "md-large"
  }, [_c('div', {
    staticClass: "md-toolbar-container"
  }, [_c('h3', {
    staticClass: "md-title"
  }, [_vm._v("Sidenav content")])])]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!")])], 1), _vm._v(" "), _c('md-sidenav', {
    ref: "rightSidenav",
    staticClass: "md-right",
    on: {
      "open": function($event) {
        _vm.open('Right')
      },
      "close": function($event) {
        _vm.close('Right')
      }
    }
  }, [_c('md-toolbar', [_c('div', {
    staticClass: "md-toolbar-container"
  }, [_c('h3', {
    staticClass: "md-title"
  }, [_vm._v("Sidenav content")])])]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-accent",
    nativeOn: {
      "click": function($event) {
        _vm.closeRightSidenav($event)
      }
    }
  }, [_vm._v("Close")])], 1)], 1)]), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <div class=\"phone-viewport\">\n              <md-toolbar>\n                <md-button class=\"md-icon-button\" @click.native=\"toggleLeftSidenav\">\n                  <md-icon>menu</md-icon>\n                </md-button>\n\n                <h2 class=\"md-title\">My App</h2>\n              </md-toolbar>\n\n              <div>\n                <md-button class=\"md-raised md-accent\" @click.native=\"toggleRightSidenav\">Toggle right</md-button>\n                <p>Open console to see the events</p>\n              </div>\n\n              <md-sidenav class=\"md-left\" ref=\"leftSidenav\" @open=\"open('Left')\" @close=\"close('Left')\">\n                <md-toolbar class=\"md-large\">\n                  <div class=\"md-toolbar-container\">\n                    <h3 class=\"md-title\">Sidenav content</h3>\n                  </div>\n                </md-toolbar>\n\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>\n              </md-sidenav>\n\n              <md-sidenav class=\"md-right\" ref=\"rightSidenav\" @open=\"open('Right')\" @close=\"close('Right')\">\n                <md-toolbar>\n                  <div class=\"md-toolbar-container\">\n                    <h3 class=\"md-title\">Sidenav content</h3>\n                  </div>\n                </md-toolbar>\n\n                <md-button class=\"md-raised md-accent\" @click.native=\"closeRightSidenav\">Close</md-button>\n              </md-sidenav>\n            </div>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              methods: {\n                toggleLeftSidenav() {\n                  this.$refs.leftSidenav.toggle();\n                },\n                toggleRightSidenav() {\n                  this.$refs.rightSidenav.toggle();\n                },\n                closeRightSidenav() {\n                  this.$refs.rightSidenav.close();\n                },\n                open(ref) {\n                  console.log('Opened: ' + ref);\n                },\n                close(ref) {\n                  console.log('Closed: ' + ref);\n                }\n              }\n            };\n          ")])], 1)])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(498);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("7c2c708a", content, true);

/***/ })

});