(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory();
	else
		root["VueMaterial"] = factory();
})(this, (function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 387);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach((function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    }))
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(185)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(87),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\r\\vue-material-fork\\src\\components\\mdLayout\\mdLayout.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9bf36dc6", Component.options)
  } else {
    hotAPI.reload("data-v-9bf36dc6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdLayout_vue__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdLayout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdLayout_vue__);
/* harmony export (immutable) */ __webpack_exports__["default"] = install;


function install(Vue) {
  Vue.component('md-layout', __WEBPACK_IMPORTED_MODULE_0__mdLayout_vue___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-layout',
  props: {
    mdTag: {
      type: String,
      default: 'div'
    },
    mdRow: Boolean,
    mdRowXsmall: Boolean,
    mdRowSmall: Boolean,
    mdRowMedium: Boolean,
    mdRowLarge: Boolean,
    mdRowXlarge: Boolean,
    mdColumn: Boolean,
    mdColumnXsmall: Boolean,
    mdColumnSmall: Boolean,
    mdColumnMedium: Boolean,
    mdColumnLarge: Boolean,
    mdColumnXlarge: Boolean,
    mdHideXsmall: Boolean,
    mdHideSmall: Boolean,
    mdHideMedium: Boolean,
    mdHideLarge: Boolean,
    mdHideXlarge: Boolean,
    mdHideXsmallAndUp: Boolean,
    mdHideSmallAndUp: Boolean,
    mdHideMediumAndUp: Boolean,
    mdHideLargeAndUp: Boolean,
    mdHideXlargeAndUp: Boolean,
    mdGutter: [String, Number, Boolean],
    mdAlign: String,
    mdAlignXsmall: String,
    mdAlignSmall: String,
    mdAlignMedium: String,
    mdAlignLarge: String,
    mdAlignXlarge: String,
    mdVerticalAlign: String,
    mdVerticalAlignXsmall: String,
    mdVerticalAlignSmall: String,
    mdVerticalAlignMedium: String,
    mdVerticalAlignLarge: String,
    mdVerticalAlignXlarge: String,
    mdFlex: [String, Number, Boolean],
    mdFlexXsmall: [String, Number, Boolean],
    mdFlexSmall: [String, Number, Boolean],
    mdFlexMedium: [String, Number, Boolean],
    mdFlexLarge: [String, Number, Boolean],
    mdFlexXlarge: [String, Number, Boolean],
    mdFlexOffset: [String, Number, Boolean],
    mdFlexOffsetXsmall: [String, Number, Boolean],
    mdFlexOffsetSmall: [String, Number, Boolean],
    mdFlexOffsetMedium: [String, Number, Boolean],
    mdFlexOffsetLarge: [String, Number, Boolean],
    mdFlexOffsetXlarge: [String, Number, Boolean]
  },
  computed: {
    classes() {
      let classes = {
        'md-row': this.mdRow,
        'md-row-xsmall': this.mdRowXsmall,
        'md-row-small': this.mdRowSmall,
        'md-row-medium': this.mdRowMedium,
        'md-row-large': this.mdRowLarge,
        'md-row-xlarge': this.mdRowXlarge,
        'md-column': this.mdColumn,
        'md-column-xsmall': this.mdColumnXsmall,
        'md-column-small': this.mdColumnSmall,
        'md-column-medium': this.mdColumnMedium,
        'md-column-large': this.mdColumnLarge,
        'md-column-xlarge': this.mdColumnXlarge,
        'md-hide-xsmall': this.mdHideXsmall,
        'md-hide-small': this.mdHideSmall,
        'md-hide-medium': this.mdHideMedium,
        'md-hide-large': this.mdHideLarge,
        'md-hide-xlarge': this.mdHideXlarge,
        'md-hide-xsmall-and-up': this.mdHideXsmallAndUp,
        'md-hide-small-and-up': this.mdHideSmallAndUp,
        'md-hide-medium-and-up': this.mdHideMediumAndUp,
        'md-hide-large-and-up': this.mdHideLargeAndUp,
        'md-hide-xlarge-and-up': this.mdHideXlargeAndUp
      };

      if (this.mdGutter) {
        if (typeof this.mdGutter === 'boolean') {
          classes['md-gutter'] = true;
        } else if (this.mdGutter) {
          classes['md-gutter-' + this.mdGutter] = true;
        }
      }

      /* Flex */
      this.generatePropClasses('md-flex', '', 'mdFlex', classes);
      this.generatePropClasses('md-flex', 'xsmall', 'mdFlexXsmall', classes);
      this.generatePropClasses('md-flex', 'small', 'mdFlexSmall', classes);
      this.generatePropClasses('md-flex', 'medium', 'mdFlexMedium', classes);
      this.generatePropClasses('md-flex', 'large', 'mdFlexLarge', classes);
      this.generatePropClasses('md-flex', 'xlarge', 'mdFlexXlarge', classes);

      /* Flex Offset */
      this.generatePropClasses('md-flex-offset', '', 'mdFlexOffset', classes);
      this.generatePropClasses('md-flex-offset', 'xsmall', 'mdFlexOffsetXsmall', classes);
      this.generatePropClasses('md-flex-offset', 'small', 'mdFlexOffsetSmall', classes);
      this.generatePropClasses('md-flex-offset', 'medium', 'mdFlexOffsetMedium', classes);
      this.generatePropClasses('md-flex-offset', 'large', 'mdFlexOffsetLarge', classes);
      this.generatePropClasses('md-flex-offset', 'xlarge', 'mdFlexOffsetXlarge', classes);

      /* Horizontal Alignment */
      this.generatePropClasses('md-align', '', 'mdAlign', classes);
      this.generatePropClasses('md-align', 'xsmall', 'mdAlignXsmall', classes);
      this.generatePropClasses('md-align', 'small', 'mdAlignSmall', classes);
      this.generatePropClasses('md-align', 'medium', 'mdAlignMedium', classes);
      this.generatePropClasses('md-align', 'large', 'mdAlignLarge', classes);
      this.generatePropClasses('md-align', 'xlarge', 'mdAlignXlarge', classes);

      /* Vertical Alignment */
      this.generatePropClasses('md-vertical-align', '', 'mdVerticalAlign', classes);
      this.generatePropClasses('md-vertical-align', 'xsmall', 'mdVerticalAlignXsmall', classes);
      this.generatePropClasses('md-vertical-align', 'small', 'mdVerticalAlignSmall', classes);
      this.generatePropClasses('md-vertical-align', 'medium', 'mdVerticalAlignMedium', classes);
      this.generatePropClasses('md-vertical-align', 'large', 'mdVerticalAlignLarge', classes);
      this.generatePropClasses('md-vertical-align', 'xlarge', 'mdVerticalAlignXlarge', classes);

      return classes;
    }
  },
  methods: {
    generatePropClasses(prop, size, name, object) {
      if (size) {
        size = '-' + size;
      }

      if (this[name]) {
        if (typeof this[name] === 'boolean') {
          if (!this[name]) {
            object[prop + size + '-none'] = true;
          } else {
            object[prop + size] = true;
          }
        } else {
          object[prop + size + '-' + this[name]] = true;
        }
      }
    }
  },
  render(createElement) {
    return createElement(this.mdTag, {
      staticClass: 'md-layout',
      class: this.classes
    }, this.$slots.default);
  }
});

/***/ })

/******/ });
}));