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
/******/ 	return __webpack_require__(__webpack_require__.s = 403);
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

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_transitionEndEventName__ = __webpack_require__(5);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-tooltip',
  props: {
    mdDirection: {
      type: String,
      default: 'bottom'
    },
    mdDelay: {
      type: String,
      default: '0'
    }
  },
  data: () => ({
    active: false,
    parentClass: null,
    transitionOff: false,
    topPosition: false,
    leftPosition: false
  }),
  computed: {
    classes() {
      const cssClasses = {
        'md-active': this.active,
        'md-transition-off': this.transitionOff,
        'md-tooltip-top': this.mdDirection === 'top',
        'md-tooltip-right': this.mdDirection === 'right',
        'md-tooltip-bottom': this.mdDirection === 'bottom',
        'md-tooltip-left': this.mdDirection === 'left'
      };

      if (this.parentClass) {
        cssClasses[this.parentClass] = true;
      }

      return cssClasses;
    },
    style() {
      return {
        'transition-delay': this.mdDelay + 'ms',
        top: this.topPosition + 'px',
        left: this.leftPosition + 'px'
      };
    }
  },
  watch: {
    mdDirection() {
      this.calculateTooltipPosition();
    }
  },
  methods: {
    removeTooltips() {
      if (this.tooltipElement.parentNode) {
        this.tooltipElement.removeEventListener(__WEBPACK_IMPORTED_MODULE_0__core_utils_transitionEndEventName__["a" /* default */], this.removeTooltips);
        this.tooltipElement.parentNode.removeChild(this.tooltipElement);
      }
    },
    calculateTooltipPosition() {
      let position = this.parentElement.getBoundingClientRect();
      let cssPosition = {};

      switch (this.mdDirection) {
        case 'top':
          cssPosition.top = position.top - this.$el.offsetHeight;
          cssPosition.left = position.left + position.width / 2;

          break;

        case 'right':
          cssPosition.top = position.top;
          cssPosition.left = position.left + position.width;

          break;

        case 'bottom':
          cssPosition.top = position.bottom;
          cssPosition.left = position.left + position.width / 2;

          break;

        case 'left':
          cssPosition.top = position.top;
          cssPosition.left = position.left - this.$el.offsetWidth;

          break;

        default:
          console.warn(`Invalid ${this.mdDirection} option to md-direction option`);
      }

      this.topPosition = cssPosition.top;
      this.leftPosition = cssPosition.left;
    },
    generateTooltipClasses() {
      let classes = [];

      [...this.parentElement.classList].forEach(cssClass => {
        if (cssClass.indexOf('md-') >= 0 && cssClass !== 'md-active') {
          classes.push(cssClass + '-tooltip');
        }
      });

      this.parentClass = classes.join(' ');
    },
    open() {
      this.removeTooltips();

      this.$nextTick(() => {
        document.body.appendChild(this.tooltipElement);
        getComputedStyle(this.tooltipElement).top;
        this.transitionOff = true;
        this.generateTooltipClasses();
        this.calculateTooltipPosition();

        window.setTimeout(() => {
          this.transitionOff = false;
          this.active = true;
        }, 10);
      });
    },
    close() {
      this.active = false;
      this.tooltipElement.removeEventListener(__WEBPACK_IMPORTED_MODULE_0__core_utils_transitionEndEventName__["a" /* default */], this.removeTooltips);
      this.tooltipElement.addEventListener(__WEBPACK_IMPORTED_MODULE_0__core_utils_transitionEndEventName__["a" /* default */], this.removeTooltips);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.tooltipElement = this.$el;
      this.parentElement = this.tooltipElement.parentNode;

      this.$el.parentNode.removeChild(this.$el);

      this.parentElement.addEventListener('mouseenter', this.open);
      this.parentElement.addEventListener('focus', this.open);
      this.parentElement.addEventListener('mouseleave', this.close);
      this.parentElement.addEventListener('blur', this.close);
    });
  },
  beforeDestroy() {
    this.active = false;

    this.removeTooltips();

    if (this.parentElement) {
      this.parentElement.removeEventListener('mouseenter', this.open);
      this.parentElement.removeEventListener('focus', this.open);
      this.parentElement.removeEventListener('mouseleave', this.close);
      this.parentElement.removeEventListener('blur', this.close);
    }
  }
});

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(175)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(329),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\r\\vue-material-fork\\src\\components\\mdTooltip\\mdTooltip.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTooltip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47f99a52", Component.options)
  } else {
    hotAPI.reload("data-v-47f99a52", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "md-tooltip",
    class: _vm.classes,
    style: (_vm.style)
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47f99a52", module.exports)
  }
}

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {function transitionEndEventName() {
  var el = document.createElement('span');
  var transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };

  for (var transition in transitions) {
    if (el.style[transition] !== undefined) {
      return transitions[transition];
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (transitionEndEventName());
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdTooltip_vue__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdTooltip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdTooltip_vue__);
/* harmony export (immutable) */ __webpack_exports__["default"] = install;


function install(Vue) {
  Vue.component('md-tooltip', __WEBPACK_IMPORTED_MODULE_0__mdTooltip_vue___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ })

/******/ });
}));