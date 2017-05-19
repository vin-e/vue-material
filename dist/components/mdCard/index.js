/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
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
/******/ 	return __webpack_require__(__webpack_require__.s = 376);
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

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var getImageLightness = function getImageLightness(image, onLoad, onError) {
  var canvas = document.createElement('canvas');

  image.crossOrigin = 'Anonymous';

  image.onload = function () {
    var colorSum = 0;
    var ctx = void 0;
    var imageData = void 0;
    var imageMetadata = void 0;
    var r = void 0;
    var g = void 0;
    var b = void 0;
    var average = void 0;

    canvas.width = this.width;
    canvas.height = this.height;
    ctx = canvas.getContext('2d');

    ctx.drawImage(this, 0, 0);

    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    imageMetadata = imageData.data;

    for (var x = 0, len = imageMetadata.length; x < len; x += 4) {
      r = imageMetadata[x];
      g = imageMetadata[x + 1];
      b = imageMetadata[x + 2];

      average = Math.floor((r + g + b) / 3);
      colorSum += average;
    }

    onLoad(Math.floor(colorSum / (this.width * this.height)));
  };

  image.onerror = onError;
};

/* harmony default export */ __webpack_exports__["a"] = (getImageLightness);
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {// Theme mixin

// Grab the closest ancestor component's `md-theme` attribute OR grab the
// `md-name` attribute from an `<md-theme>` component.
function getAncestorThemeName(component) {
  if (!component) {
    return null;
  }

  var name = component.mdTheme;

  if (!name && component.$options._componentTag === 'md-theme') {
    name = component.mdName;
  }

  return name || getAncestorThemeName(component.$parent);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    mdTheme: String
  },
  computed: {
    mdEffectiveTheme: function mdEffectiveTheme() {
      return getAncestorThemeName(this) || this.$material.currentTheme;
    },
    themeClass: function themeClass() {
      return this.$material.prefix + this.mdEffectiveTheme;
    }
  },
  watch: {
    mdTheme: function mdTheme(value) {
      this.$material.useTheme(value);
    }
  },
  beforeMount: function beforeMount() {
    var localTheme = this.mdTheme;

    if (localTheme) {
      this.$material.useTheme(localTheme);
    }
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-card{background-color:BACKGROUND-COLOR}.THEME_NAME.md-card.md-primary{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,.THEME_NAME.md-card.md-primary .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon{color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused input,.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused textarea{color:PRIMARY-CONTRAST;text-shadow:0 0 0 PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused label,.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-input-container:after{background-color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-input-container input,.THEME_NAME.md-card.md-primary .md-input-container textarea{color:PRIMARY-CONTRAST;text-shadow:0 0 0 PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-card.md-primary .md-input-container textarea::-webkit-input-placeholder{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-card.md-primary .md-input-container label,.THEME_NAME.md-card.md-primary .md-input-container .md-icon:not(.md-icon-delete){color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-accent{background-color:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,.THEME_NAME.md-card.md-accent .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon{color:ACCENT-CONTRAST-0.87}.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused input,.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused textarea{color:ACCENT-CONTRAST;text-shadow:0 0 0 ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused label,.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-input-container:after{background-color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-input-container input,.THEME_NAME.md-card.md-accent .md-input-container textarea{color:ACCENT-CONTRAST;text-shadow:0 0 0 ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-card.md-accent .md-input-container textarea::-webkit-input-placeholder{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-card.md-accent .md-input-container label,.THEME_NAME.md-card.md-accent .md-input-container .md-icon:not(.md-icon-delete){color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-warn{background-color:WARN-COLOR;color:WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,.THEME_NAME.md-card.md-warn .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon{color:WARN-CONTRAST-0.87}.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused input,.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused textarea{color:WARN-CONTRAST;text-shadow:0 0 0 WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused label,.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-input-container:after{background-color:WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-input-container input,.THEME_NAME.md-card.md-warn .md-input-container textarea{color:WARN-CONTRAST;text-shadow:0 0 0 WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-card.md-warn .md-input-container textarea::-webkit-input-placeholder{color:WARN-CONTRAST-0.54}.THEME_NAME.md-card.md-warn .md-input-container label,.THEME_NAME.md-card.md-warn .md-input-container .md-icon:not(.md-icon-delete){color:WARN-CONTRAST}.THEME_NAME.md-card .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,.THEME_NAME.md-card .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-card>.md-card-area:after{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-card .md-card-media-cover.md-text-scrim .md-backdrop{background:linear-gradient(to bottom, BACKGROUND-CONTRAST-0.0 20%, BACKGROUND-CONTRAST-0.275 66%, BACKGROUND-CONTRAST-0.55 100%)}.THEME_NAME.md-card .md-card-media-cover.md-solid .md-card-area{background-color:BACKGROUND-CONTRAST-0.4}.THEME_NAME.md-card .md-card-expand .md-card-actions{background-color:BACKGROUND-COLOR}\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(175)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(331),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(314),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(304),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(346),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(321),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(358),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(306),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(332),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(344),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdCard_vue__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdCardMedia_vue__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdCardMedia_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdCardMedia_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdCardMediaCover_vue__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdCardMediaCover_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdCardMediaCover_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdCardMediaActions_vue__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdCardMediaActions_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mdCardMediaActions_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdCardHeader_vue__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdCardHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__mdCardHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdCardHeaderText_vue__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdCardHeaderText_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__mdCardHeaderText_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdCardContent_vue__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdCardContent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__mdCardContent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdCardActions_vue__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdCardActions_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__mdCardActions_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mdCardArea_vue__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mdCardArea_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__mdCardArea_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mdCardExpand_vue__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mdCardExpand_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__mdCardExpand_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mdCard_theme__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mdCard_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__mdCard_theme__);
/* harmony export (immutable) */ __webpack_exports__["default"] = install;












function install(Vue) {
  Vue.component('md-card', __WEBPACK_IMPORTED_MODULE_0__mdCard_vue___default.a);
  Vue.component('md-card-media', __WEBPACK_IMPORTED_MODULE_1__mdCardMedia_vue___default.a);
  Vue.component('md-card-media-cover', __WEBPACK_IMPORTED_MODULE_2__mdCardMediaCover_vue___default.a);
  Vue.component('md-card-media-actions', __WEBPACK_IMPORTED_MODULE_3__mdCardMediaActions_vue___default.a);
  Vue.component('md-card-header', __WEBPACK_IMPORTED_MODULE_4__mdCardHeader_vue___default.a);
  Vue.component('md-card-header-text', __WEBPACK_IMPORTED_MODULE_5__mdCardHeaderText_vue___default.a);
  Vue.component('md-card-content', __WEBPACK_IMPORTED_MODULE_6__mdCardContent_vue___default.a);
  Vue.component('md-card-actions', __WEBPACK_IMPORTED_MODULE_7__mdCardActions_vue___default.a);
  Vue.component('md-card-area', __WEBPACK_IMPORTED_MODULE_8__mdCardArea_vue___default.a);
  Vue.component('md-card-expand', __WEBPACK_IMPORTED_MODULE_9__mdCardExpand_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_10__mdCard_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(341),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-area",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-header-text"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-actions"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "expand",
    staticClass: "md-card-expand"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-media",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-media-cover",
    class: _vm.classes
  }, [_vm._t("default"), _vm._v(" "), (_vm.mdTextScrim) ? _c('div', {
    ref: "backdrop",
    staticClass: "md-card-backdrop",
    style: (_vm.styles)
  }) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-media-actions"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-content"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-header"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-card',
  props: {
    mdWithHover: Boolean
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  computed: {
    classes() {
      return {
        'md-with-hover': this.mdWithHover
      };
    }
  }
});

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-card-actions'
});

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-card-area',
  props: {
    mdInset: Boolean
  },
  computed: {
    classes() {
      return {
        'md-inset': this.mdInset
      };
    }
  }
});

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-card-content'
});

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-card-expand',
  methods: {
    setContentMargin() {
      this.content.style.marginTop = -this.content.offsetHeight + 'px';
    },
    toggle() {
      this.$refs.expand.classList.toggle('md-active');
    },
    onWindowResize() {
      window.requestAnimationFrame(this.setContentMargin);
    }
  },
  mounted() {
    window.setTimeout(() => {
      this.trigger = this.$el.querySelector('[md-expand-trigger]');
      this.content = this.$el.querySelector('.md-card-content');

      if (this.content) {
        this.setContentMargin();

        this.trigger.addEventListener('click', this.toggle);
        window.addEventListener('resize', this.onWindowResize);
      }
    }, 200);
  },
  destroyed() {
    if (this.content) {
      this.trigger.removeEventListener('click', this.toggle);
      window.removeEventListener('resize', this.onWindowResize);
    }
  }
});

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-card-header'
});

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-card-header-text',
  mounted() {
    this.parentClasses = this.$parent.$el.classList;

    if (this.parentClasses.contains('md-card-header')) {
      this.insideParent = true;
      this.parentClasses.add('md-card-header-flex');
    }
  },
  destroyed() {
    this.parentClasses.remove('md-card-header-flex');
  }
});

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-card-media',
  props: {
    mdRatio: String,
    mdMedium: Boolean,
    mdBig: Boolean
  },
  computed: {
    classes() {
      let classes = {
        'md-16-9': this.mdRatio === '16:9' || this.mdRatio === '16/9',
        'md-4-3': this.mdRatio === '4:3' || this.mdRatio === '4/3',
        'md-1-1': this.mdRatio === '1:1' || this.mdRatio === '1/1'
      };

      if (this.mdMedium || this.mdBig) {
        classes = {
          'md-medium': this.mdMedium,
          'md-big': this.mdBig
        };
      }

      return classes;
    }
  }
});

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-card-media-actions'
});

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_getImageLightness__ = __webpack_require__(10);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-card-media-cover',
  props: {
    mdTextScrim: Boolean,
    mdSolid: Boolean
  },
  data() {
    return {
      backdropBg: {}
    };
  },
  computed: {
    classes() {
      return {
        'md-text-scrim': this.mdTextScrim,
        'md-solid': this.mdSolid
      };
    },
    styles() {
      return {
        background: this.backdropBg
      };
    }
  },
  methods: {
    applyScrimColor(darkness) {
      if (this.$refs.backdrop) {
        this.backdropBg = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, ${darkness / 2}) 66%, rgba(0, 0, 0, ${darkness}) 100%)`;
      }
    },
    applySolidColor(darkness) {
      let area = this.$el.querySelector('.md-card-area');

      if (area) {
        area.style.background = `rgba(0, 0, 0, ${darkness})`;
      }
    }
  },
  mounted() {
    const applyBackground = (darkness = 0.6) => {
      if (this.mdTextScrim) {
        this.applyScrimColor(darkness);
      } else if (this.mdSolid) {
        this.applySolidColor(darkness);
      }
    };
    let image = this.$el.querySelector('img');

    if (image && (this.mdTextScrim || this.mdSolid)) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_getImageLightness__["a" /* default */])(image, lightness => {
        let limit = 256;
        let darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100;

        if (darkness >= 0.7) {
          darkness = 0.7;
        }

        applyBackground(darkness);
      }, applyBackground);
    }
  }
});

/***/ })

/******/ });
}));