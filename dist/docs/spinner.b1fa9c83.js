webpackJsonp([4],{

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(566)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(484),
  /* template */
  __webpack_require__(529),
  /* scopeId */
  "data-v-22b93c3e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 484:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: () => ({
    progress: 0,
    progressInterval: null,
    done: false,
    transition: true
  }),
  methods: {
    startProgress() {
      this.progressInterval = window.setInterval(() => {
        this.progress += 3;

        if (this.progress > 115) {
          this.done = true;
          window.clearInterval(this.progressInterval);
          window.setTimeout(() => {
            this.done = false;
          }, 3000);
        }
      }, 100);
    },
    restartProgress() {
      this.progress = 0;
      this.transition = false;
      this.done = false;

      window.clearInterval(this.progressInterval);
      window.setTimeout(() => {
        this.transition = true;
        this.startProgress();
      }, 600);
    }
  },
  mounted() {
    this.startProgress();
  }
});

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".spinner-demo[data-v-22b93c3e]{min-height:55px}.complete-example[data-v-22b93c3e]{width:56px;height:56px;position:relative}.complete-example .md-fab[data-v-22b93c3e]{margin:0}.complete-example .md-spinner[data-v-22b93c3e]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}", ""]);

// exports


/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - Spinner"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("Progress and activity indicators are visual indications of an app loading content.")]), _vm._v(" "), _c('p', [_vm._v("The following classes can be applied to change the color palette:")]), _vm._v(" "), _c('ul', {
    staticClass: "md-body-2"
  }, [_c('li', [_c('code', [_vm._v("md-accent")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("md-warn")])])])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-spinner"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-size")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The spinner size. Default "), _c('code', [_vm._v("50")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-stroke")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The line width. Default "), _c('code', [_vm._v("3.5")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-indeterminate")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Enable the indeterminate state. Default "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-progress")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Define the current progress of the spinner. Default "), _c('code', [_vm._v("0")])])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Determinate"
    }
  }, [_c('div', {
    staticClass: "spinner-demo",
    slot: "demo"
  }, [_c('md-button', {
    staticClass: "md-primary md-raised",
    nativeOn: {
      "click": function($event) {
        _vm.restartProgress($event)
      }
    }
  }, [_vm._v("Restart")]), _vm._v(" "), (_vm.transition) ? _c('md-spinner', {
    attrs: {
      "md-progress": _vm.progress
    }
  }) : _vm._e(), _vm._v(" "), (_vm.transition) ? _c('md-spinner', {
    staticClass: "md-accent",
    attrs: {
      "md-progress": _vm.progress
    }
  }) : _vm._e(), _vm._v(" "), (_vm.transition) ? _c('md-spinner', {
    staticClass: "md-warn",
    attrs: {
      "md-progress": _vm.progress
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-spinner :md-progress=\"progress\"></md-spinner>\n            <md-spinner :md-progress=\"progress\" class=\"md-accent\"></md-spinner>\n            <md-spinner :md-progress=\"progress\" class=\"md-warn\"></md-spinner>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Indeterminate"
    }
  }, [_c('div', {
    staticClass: "spinner-demo",
    slot: "demo"
  }, [_c('md-spinner', {
    attrs: {
      "md-indeterminate": ""
    }
  }), _vm._v(" "), _c('md-spinner', {
    staticClass: "md-accent",
    attrs: {
      "md-indeterminate": ""
    }
  }), _vm._v(" "), _c('md-spinner', {
    staticClass: "md-warn",
    attrs: {
      "md-indeterminate": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-spinner md-indeterminate></md-spinner>\n            <md-spinner md-indeterminate class=\"md-accent\"></md-spinner>\n            <md-spinner md-indeterminate class=\"md-warn\"></md-spinner>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Sizes"
    }
  }, [_c('div', {
    staticClass: "spinner-demo",
    slot: "demo"
  }, [_c('md-spinner', {
    staticClass: "md-accent",
    attrs: {
      "md-size": 20,
      "md-indeterminate": ""
    }
  }), _vm._v(" "), _c('md-spinner', {
    staticClass: "md-warn",
    attrs: {
      "md-size": 60,
      "md-indeterminate": ""
    }
  }), _vm._v(" "), _c('md-spinner', {
    attrs: {
      "md-size": 150,
      "md-indeterminate": ""
    }
  }), _vm._v(" "), _c('md-spinner', {
    staticClass: "md-accent",
    attrs: {
      "md-size": 20,
      "md-stroke": 2.5,
      "md-indeterminate": ""
    }
  }), _vm._v(" "), _c('md-spinner', {
    staticClass: "md-warn",
    attrs: {
      "md-size": 60,
      "md-stroke": 1.5,
      "md-indeterminate": ""
    }
  }), _vm._v(" "), _c('md-spinner', {
    attrs: {
      "md-size": 150,
      "md-stroke": 1,
      "md-indeterminate": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-spinner :md-size=\"20\" md-indeterminate class=\"md-accent\"></md-spinner>\n            <md-spinner :md-size=\"60\" md-indeterminate class=\"md-warn\"></md-spinner>\n            <md-spinner :md-size=\"150\" md-indeterminate></md-spinner>\n\n            <md-spinner :md-size=\"20\" :md-stroke=\"2\" md-indeterminate class=\"md-accent\"></md-spinner>\n            <md-spinner :md-size=\"60\" :md-stroke=\"1.5\" md-indeterminate class=\"md-warn\"></md-spinner>\n            <md-spinner :md-size=\"150\" :md-stroke=\"1\" md-indeterminate></md-spinner>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Complete Example"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-theme', {
    staticClass: "complete-example",
    attrs: {
      "md-name": "orange"
    }
  }, [_c('md-button', {
    staticClass: "md-fab",
    class: {
      'md-primary': _vm.done
    },
    nativeOn: {
      "click": function($event) {
        _vm.restartProgress($event)
      }
    }
  }, [(!_vm.done) ? _c('md-icon', [_vm._v("cloud_upload")]) : _vm._e(), _vm._v(" "), (_vm.done) ? _c('md-icon', [_vm._v("done")]) : _vm._e()], 1), _vm._v(" "), (_vm.transition && _vm.progress < 115) ? _c('md-spinner', {
    attrs: {
      "md-size": 74,
      "md-stroke": 2.2,
      "md-progress": _vm.progress
    }
  }) : _vm._e()], 1)], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-theme class=\"complete-example\" md-name=\"orange\">\n              <md-button class=\"md-fab\" @click.native=\"restartProgress\" :class=\"{ 'md-primary': done }\">\n                <md-icon v-if=\"!done\">cloud_upload</md-icon>\n                <md-icon v-if=\"done\">done</md-icon>\n              </md-button>\n\n              <md-spinner :md-size=\"74\" :md-stroke=\"2.2\" :md-progress=\"progress\" v-if=\"transition && progress < 115\"></md-spinner>\n            </md-theme>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "sass"
    }
  }, [_vm._v("\n            .complete-example {\n              width: 56px;\n              height: 56px;\n              position: relative;\n\n              .md-fab {\n                margin: 0;\n              }\n\n              .md-spinner {\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n              }\n            }\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                progress: 0,\n                progressInterval: null,\n                done: false,\n                transition: true\n              }),\n              methods: {\n                startProgress() {\n                  this.progressInterval = window.setInterval(() => {\n                    this.progress += 3;\n\n                    if (this.progress > 115) {\n                      this.done = true;\n                      window.clearInterval(this.progressInterval);\n                      window.setTimeout(() => {\n                        this.done = false;\n                      }, 3000);\n                    }\n                  }, 100);\n                },\n                restartProgress() {\n                  this.progress = 0;\n                  this.transition = false;\n                  this.done = false;\n\n                  window.clearInterval(this.progressInterval);\n                  window.setTimeout(() => {\n                    this.transition = true;\n                    this.startProgress();\n                  }, 600);\n                }\n              }\n            };\n          ")])], 1)])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(494);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("36cd4fe2", content, true);

/***/ })

});