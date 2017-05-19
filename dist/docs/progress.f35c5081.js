webpackJsonp([8],{

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(588)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(478),
  /* template */
  __webpack_require__(556),
  /* scopeId */
  "data-v-d03ce850",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 478:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: () => ({
    progress: 0,
    progressInterval: null,
    transition: true
  }),
  methods: {
    startProgress() {
      this.progressInterval = window.setInterval(() => {
        this.progress += 3;

        if (this.progress > 100) {
          window.clearInterval(this.progressInterval);
        }
      }, 100);
    },
    restartProgress() {
      this.progress = 0;
      this.transition = false;

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

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".progress-area[data-v-d03ce850]{height:44px}.progress-area+.md-button[data-v-d03ce850]{margin:16px 0 0}.md-progress[data-v-d03ce850]{margin-bottom:16px}", ""]);

// exports


/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - Progress"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("A linear progress indicator should always fill from 0% to 100% and never decrease in value. It should be represented by bars on the edge of a header or sheet that appear and disappear.")]), _vm._v(" "), _c('p', [_vm._v("The following classes can be applied to change the color palette:")]), _vm._v(" "), _c('ul', {
    staticClass: "md-body-2"
  }, [_c('li', [_c('code', [_vm._v("md-accent")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("md-warn")])])])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-progress"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-indeterminate")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Enable the indeterminate state. Default "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-progress")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Define the current progress of the progress. Default "), _c('code', [_vm._v("0")])])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Determinate"
    }
  }, [_c('div', {
    staticClass: "progress-demo",
    slot: "demo"
  }, [_c('div', {
    staticClass: "progress-area"
  }, [(_vm.transition) ? _c('md-progress', {
    attrs: {
      "md-progress": _vm.progress
    }
  }) : _vm._e(), _vm._v(" "), (_vm.transition) ? _c('md-progress', {
    staticClass: "md-accent",
    attrs: {
      "md-progress": _vm.progress
    }
  }) : _vm._e(), _vm._v(" "), (_vm.transition) ? _c('md-progress', {
    staticClass: "md-warn",
    attrs: {
      "md-progress": _vm.progress
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary md-raised",
    nativeOn: {
      "click": function($event) {
        _vm.restartProgress($event)
      }
    }
  }, [_vm._v("Restart")])], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-progress :md-progress=\"progress\"></md-progress>\n            <md-progress class=\"md-accent\" :md-progress=\"progress\"></md-progress>\n            <md-progress class=\"md-warn\" :md-progress=\"progress\"></md-progress>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Indeterminate"
    }
  }, [_c('div', {
    staticClass: "progress-demo",
    slot: "demo"
  }, [_c('div', {
    staticClass: "progress-area"
  }, [(_vm.transition) ? _c('md-progress', {
    attrs: {
      "md-indeterminate": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.transition) ? _c('md-progress', {
    staticClass: "md-accent",
    attrs: {
      "md-indeterminate": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.transition) ? _c('md-progress', {
    staticClass: "md-warn",
    attrs: {
      "md-indeterminate": ""
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-progress md-indeterminate></md-progress>\n            <md-progress class=\"md-accent\" md-indeterminate></md-progress>\n            <md-progress class=\"md-warn\" md-indeterminate></md-progress>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Themes"
    }
  }, [_c('div', {
    staticClass: "progress-demo",
    slot: "demo"
  }, [_c('div', {
    staticClass: "progress-area"
  }, [(_vm.transition) ? _c('md-progress', {
    attrs: {
      "md-theme": "orange",
      "md-indeterminate": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.transition) ? _c('md-progress', {
    attrs: {
      "md-theme": "green",
      "md-progress": _vm.progress
    }
  }) : _vm._e(), _vm._v(" "), (_vm.transition) ? _c('md-progress', {
    attrs: {
      "md-theme": "purple",
      "md-indeterminate": ""
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-progress md-theme=\"orange\" md-indeterminate></md-progress>\n            <md-progress md-theme=\"green\" :md-progress=\"progress\"></md-progress>\n            <md-progress md-theme=\"purple\" md-indeterminate></md-progress>\n          ")])], 1)])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(516);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("8f933e24", content, true);

/***/ })

});