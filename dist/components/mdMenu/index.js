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
/******/ 	return __webpack_require__(__webpack_require__.s = 387);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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
var margin = 8;

var isAboveOfViewport = function isAboveOfViewport(element, position) {
  return position.top <= margin - parseInt(getComputedStyle(element).marginTop, 10);
};

var isBelowOfViewport = function isBelowOfViewport(element, position) {
  return position.top + element.offsetHeight + margin >= window.innerHeight - parseInt(getComputedStyle(element).marginTop, 10);
};

var isOnTheLeftOfViewport = function isOnTheLeftOfViewport(element, position) {
  return position.left <= margin - parseInt(getComputedStyle(element).marginLeft, 10);
};

var isOnTheRightOfViewport = function isOnTheRightOfViewport(element, position) {
  return position.left + element.offsetWidth + margin >= window.innerWidth - parseInt(getComputedStyle(element).marginLeft, 10);
};

var getInViewPosition = function getInViewPosition(element, position) {
  var computedStyle = getComputedStyle(element);

  if (isAboveOfViewport(element, position)) {
    position.top = margin - parseInt(computedStyle.marginTop, 10);
  }

  if (isOnTheLeftOfViewport(element, position)) {
    position.left = margin - parseInt(computedStyle.marginLeft, 10);
  }

  if (isOnTheRightOfViewport(element, position)) {
    position.left = window.innerWidth - margin - element.offsetWidth - parseInt(computedStyle.marginLeft, 10);
  }

  if (isBelowOfViewport(element, position)) {
    position.top = window.innerHeight - margin - element.offsetHeight - parseInt(computedStyle.marginTop, 10);
  }

  return position;
};

/* harmony default export */ __webpack_exports__["a"] = (getInViewPosition);

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

if (!Element.prototype.scrollIntoViewIfNeeded) {
  Element.prototype.scrollIntoViewIfNeeded = function (centerIfNeeded) {
    centerIfNeeded = arguments.length === 0 ? true : !!centerIfNeeded;

    var parent = this.parentNode,
        parentComputedStyle = window.getComputedStyle(parent, null),
        parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue('border-top-width')),
        parentBorderLeftWidth = parseInt(parentComputedStyle.getPropertyValue('border-left-width')),
        overTop = this.offsetTop - parent.offsetTop < parent.scrollTop,
        overBottom = (this.offsetTop - parent.offsetTop + this.clientHeight - parentBorderTopWidth) > (parent.scrollTop + parent.clientHeight),
        overLeft = this.offsetLeft - parent.offsetLeft < parent.scrollLeft,
        overRight = (this.offsetLeft - parent.offsetLeft + this.clientWidth - parentBorderLeftWidth) > (parent.scrollLeft + parent.clientWidth),
        alignWithTop = overTop && !overBottom;

    if ((overTop || overBottom) && centerIfNeeded) {
      parent.scrollTop = this.offsetTop - parent.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + this.clientHeight / 2;
    }

    if ((overLeft || overRight) && centerIfNeeded) {
      parent.scrollLeft = this.offsetLeft - parent.offsetLeft - parent.clientWidth / 2 - parentBorderLeftWidth + this.clientWidth / 2;
    }

    if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
      this.scrollIntoView(alignWithTop);
    }
  };
}

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getClosestVueParent = function getClosestVueParent($parent, cssClass) {
  if (!$parent || !$parent.$el || !$parent.$el.classList || $parent._uid === 0) {
    return false;
  }

  if ($parent.$el.classList.contains(cssClass)) {
    return $parent;
  }

  return getClosestVueParent($parent.$parent, cssClass);
};

/* harmony default export */ __webpack_exports__["a"] = (getClosestVueParent);

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-menu-content .md-list{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}.THEME_NAME.md-menu-content .md-list .md-menu-item:hover .md-button:not([disabled]),.THEME_NAME.md-menu-content .md-list .md-menu-item:focus .md-button:not([disabled]),.THEME_NAME.md-menu-content .md-list .md-menu-item.md-highlighted .md-button:not([disabled]){background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-menu-content .md-list .md-menu-item[disabled]{color:BACKGROUND-CONTRAST-0.38}\n"

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(161)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(298),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(95),
  /* template */
  __webpack_require__(300),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(96),
  /* template */
  __webpack_require__(308),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 298:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-menu"
  }, [_vm._t("default"), _vm._v(" "), _c('md-backdrop', {
    ref: "backdrop",
    staticClass: "md-menu-backdrop md-transparent md-active",
    on: {
      "close": _vm.close
    }
  })], 2)
},staticRenderFns: []}

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-menu-content",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        $event.preventDefault();
        _vm.close($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9)) { return null; }
        $event.preventDefault();
        _vm.close($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        $event.preventDefault();
        _vm.highlightItem('up')
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        $event.preventDefault();
        _vm.highlightItem('down')
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.fireClick($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) { return null; }
        _vm.fireClick($event)
      }]
    }
  }, [_c('md-list', [_vm._t("default")], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-list-item', {
    staticClass: "md-menu-item",
    class: _vm.classes,
    attrs: {
      "href": _vm.href,
      "target": _vm.target,
      "disabled": _vm.disabled
    },
    nativeOn: {
      "click": function($event) {
        _vm.close($event)
      }
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdMenu_vue__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdMenuItem_vue__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdMenuItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdMenuItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdMenuContent_vue__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdMenuContent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdMenuContent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdMenu_theme__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdMenu_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mdMenu_theme__);
/* harmony export (immutable) */ __webpack_exports__["default"] = install;





function install(Vue) {
  Vue.component('md-menu', __WEBPACK_IMPORTED_MODULE_0__mdMenu_vue___default.a);
  Vue.component('md-menu-item', __WEBPACK_IMPORTED_MODULE_1__mdMenuItem_vue___default.a);
  Vue.component('md-menu-content', __WEBPACK_IMPORTED_MODULE_2__mdMenuContent_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_3__mdMenu_theme___default.a);
}

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35);


/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function transitionEndEventName() {
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

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_transitionEndEventName__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_getInViewPosition__ = __webpack_require__(10);
//
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
  name: 'md-menu',
  props: {
    mdSize: {
      type: [Number, String],
      default: 0
    },
    mdDirection: {
      type: String,
      default: 'bottom right'
    },
    mdAlignTrigger: {
      type: Boolean,
      default: false
    },
    mdOffsetX: {
      type: [Number, String],
      default: 0
    },
    mdOffsetY: {
      type: [Number, String],
      default: 0
    },
    mdCloseOnSelect: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    active: false
  }),
  watch: {
    mdSize(current, previous) {
      if (current >= 1 && current <= 7) {
        this.removeLastSizeMenuContentClass(previous);
        this.addNewSizeMenuContentClass(current);
      }
    },
    mdDirection(current, previous) {
      this.removeLastDirectionMenuContentClass(previous);
      this.addNewDirectionMenuContentClass(current);
    },
    mdAlignTrigger(trigger) {
      this.handleAlignTriggerClass(trigger);
    }
  },
  methods: {
    validateMenu() {
      if (!this.menuContent) {
        this.$destroy();

        throw new Error('You must have a md-menu-content inside your menu.');
      }

      if (!this.menuTrigger) {
        this.$destroy();

        throw new Error('You must have an element with a md-menu-trigger attribute inside your menu.');
      }
    },
    removeLastSizeMenuContentClass(size) {
      this.menuContent.classList.remove('md-size-' + size);
    },
    removeLastDirectionMenuContentClass(direction) {
      this.menuContent.classList.remove('md-direction-' + direction.replace(/ /g, '-'));
    },
    addNewSizeMenuContentClass(size) {
      this.menuContent.classList.add('md-size-' + size);
    },
    addNewDirectionMenuContentClass(direction) {
      this.menuContent.classList.add('md-direction-' + direction.replace(/ /g, '-'));
    },
    handleAlignTriggerClass(trigger) {
      if (trigger) {
        this.menuContent.classList.add('md-align-trigger');
      }
    },
    getPosition(vertical, horizontal) {
      let menuTriggerRect = this.menuTrigger.getBoundingClientRect();

      let top = vertical === 'top' ? menuTriggerRect.top + menuTriggerRect.height - this.menuContent.offsetHeight : menuTriggerRect.top;

      let left = horizontal === 'left' ? menuTriggerRect.left - this.menuContent.offsetWidth + menuTriggerRect.width : menuTriggerRect.left;

      top += parseInt(this.mdOffsetY, 10);
      left += parseInt(this.mdOffsetX, 10);

      if (this.mdAlignTrigger) {
        if (vertical === 'top') {
          top -= menuTriggerRect.height + 11;
        } else {
          top += menuTriggerRect.height + 11;
        }
      }

      return { top, left };
    },
    calculateMenuContentPos() {
      let position;

      if (!this.mdDirection) {
        position = this.getPosition('bottom', 'right');
      } else {
        position = this.getPosition.apply(this, this.mdDirection.trim().split(' '));
      }

      position = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_getInViewPosition__["a" /* default */])(this.menuContent, position);

      this.menuContent.style.top = position.top + window.pageYOffset + 'px';
      this.menuContent.style.left = position.left + window.pageXOffset + 'px';
    },
    recalculateOnResize() {
      window.requestAnimationFrame(this.calculateMenuContentPos);
    },
    open() {
      if (document.body.contains(this.menuContent)) {
        document.body.removeChild(this.menuContent);
      }

      document.body.appendChild(this.menuContent);
      document.body.appendChild(this.backdropElement);
      window.addEventListener('resize', this.recalculateOnResize);

      this.calculateMenuContentPos();

      getComputedStyle(this.menuContent).top;
      this.menuContent.classList.add('md-active');
      this.menuContent.focus();
      this.active = true;
      this.$emit('open');
    },
    close() {
      let close = event => {
        if (this.menuContent && event.target === this.menuContent) {
          let activeRipple = this.menuContent.querySelector('.md-ripple.md-active');

          this.menuContent.removeEventListener(__WEBPACK_IMPORTED_MODULE_0__core_utils_transitionEndEventName__["a" /* default */], close);
          this.menuTrigger.focus();
          this.active = false;

          if (activeRipple) {
            activeRipple.classList.remove('md-active');
          }

          document.body.removeChild(this.menuContent);
          document.body.removeChild(this.backdropElement);
          window.removeEventListener('resize', this.recalculateOnResize);
        }
      };

      this.menuContent.addEventListener(__WEBPACK_IMPORTED_MODULE_0__core_utils_transitionEndEventName__["a" /* default */], close);
      this.menuContent.classList.remove('md-active');
      this.$emit('close');
    },
    toggle() {
      if (this.active) {
        this.close();
      } else {
        this.open();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.menuTrigger = this.$el.querySelector('[md-menu-trigger]');
      this.menuContent = this.$el.querySelector('.md-menu-content');
      this.backdropElement = this.$refs.backdrop.$el;
      this.validateMenu();
      this.handleAlignTriggerClass(this.mdAlignTrigger);
      this.addNewSizeMenuContentClass(this.mdSize);
      this.addNewDirectionMenuContentClass(this.mdDirection);
      this.$el.removeChild(this.$refs.backdrop.$el);
      this.menuContent.parentNode.removeChild(this.menuContent);
      this.menuTrigger.addEventListener('click', this.toggle);
    });
  },
  beforeDestroy() {
    if (document.body.contains(this.menuContent)) {
      document.body.removeChild(this.menuContent);
      document.body.removeChild(this.backdropElement);
    }

    this.menuTrigger.removeEventListener('click', this.toggle);
    window.removeEventListener('resize', this.recalculateOnResize);
  }
});

/***/ }),

/***/ 95:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-menu-content',
  data() {
    return {
      oldHighlight: false,
      highlighted: false,
      itemsAmount: 0
    };
  },
  methods: {
    close() {
      this.highlighted = false;
      this.$parent.close();
    },
    highlightItem(direction) {
      this.oldHighlight = this.highlighted;

      if (direction === 'up') {
        if (this.highlighted === 1) {
          this.highlighted = this.itemsAmount;
        } else {
          this.highlighted--;
        }
      }

      if (direction === 'down') {
        if (this.highlighted === this.itemsAmount) {
          this.highlighted = 1;
        } else {
          this.highlighted++;
        }
      }
    },
    fireClick() {
      if (this.highlighted > 0) {
        this.getOptions()[this.highlighted - 1].$el.click();
      }
    },
    getOptions() {
      return this.$children[0].$children.filter(child => {
        return child.$el.classList.contains('md-option');
      });
    }
  },
  mounted() {
    if (!this.$parent.$el.classList.contains('md-menu')) {
      this.$destroy();

      throw new Error('You must wrap the md-menu-content in a md-menu');
    }
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_scrollintoviewifneeded_polyfill__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_scrollintoviewifneeded_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_scrollintoviewifneeded_polyfill__);
//
//
//
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
  name: 'md-menu-item',
  props: {
    href: String,
    target: String,
    disabled: Boolean
  },
  data: () => ({
    parentContent: {},
    index: 0
  }),
  computed: {
    classes() {
      return {
        'md-highlighted': this.highlighted
      };
    },
    highlighted() {
      if (this.index === this.parentContent.highlighted) {
        if (this.disabled) {
          if (this.parentContent.oldHighlight > this.parentContent.highlighted) {
            this.parentContent.highlighted--;
          } else {
            this.parentContent.highlighted++;
          }
        }

        if (this.index === 1) {
          this.parentContent.$el.scrollTop = 0;
        } else if (this.index === this.parentContent.itemsAmount) {
          this.parentContent.$el.scrollTop = this.parentContent.$el.scrollHeight;
        } else {
          this.$el.scrollIntoViewIfNeeded(false);
        }

        return true;
      }

      return false;
    }
  },
  methods: {
    close($event) {
      if (!this.disabled) {
        if (this.parentMenu.mdCloseOnSelect) {
          this.parentContent.close();
        }

        this.$emit('selected', $event);
      }
    }
  },
  mounted() {
    this.parentContent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-menu-content');
    this.parentMenu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-menu');

    if (!this.parentContent) {
      this.$destroy();

      throw new Error('You must wrap the md-menu-item in a md-menu-content');
    }

    this.parentContent.itemsAmount++;
    this.index = this.parentContent.itemsAmount;
  }
});

/***/ })

/******/ });
}));