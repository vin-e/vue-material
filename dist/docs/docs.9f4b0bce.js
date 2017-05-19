webpackJsonp([34],[
/* 0 */,
/* 1 */,
/* 2 */
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var getClosestVueParent = function getClosestVueParent($parent, cssClass) {
  if (!$parent || !$parent.$el || !$parent.$el.classList || $parent._uid === 0) {
    return false;
  }

  if ($parent.$el.classList.contains(cssClass)) {
    return $parent;
  }

  return getClosestVueParent($parent.$parent, cssClass);
};

/* harmony default export */ __webpack_exports__["a"] = (getClosestVueParent);
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var uniqueId = function uniqueId() {
  return Math.random().toString(36).slice(4);
};

/* harmony default export */ __webpack_exports__["a"] = (uniqueId);
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    value: [String, Number, Date],
    debounce: {
      type: Number,
      default: 3E2
    },
    disabled: Boolean,
    required: Boolean,
    maxlength: [Number, String],
    name: String,
    placeholder: String
  },
  data: function data() {
    return {
      timeout: 0
    };
  },

  watch: {
    value: function value() {
      this.updateValues();
    },
    disabled: function disabled() {
      this.setParentDisabled();
    },
    required: function required() {
      this.setParentRequired();
    },
    placeholder: function placeholder() {
      this.setParentPlaceholder();
    },
    maxlength: function maxlength() {
      this.handleMaxLength();
    }
  },
  methods: {
    handleMaxLength: function handleMaxLength() {
      this.parentContainer.enableCounter = this.maxlength > 0;
      this.parentContainer.counterLength = this.maxlength;
    },
    lazyEventEmitter: function lazyEventEmitter() {
      var _this = this;

      if (this.timeout) {
        window.clearTimeout(this.timeout);
      }
      this.timeout = window.setTimeout((function () {
        _this.$emit('change', _this.$el.value);
        _this.$emit('input', _this.$el.value);
      }), this.debounce);
    },
    setParentValue: function setParentValue(value) {
      this.parentContainer.setValue(value || this.$el.value);
    },
    setParentDisabled: function setParentDisabled() {
      this.parentContainer.isDisabled = this.disabled;
    },
    setParentRequired: function setParentRequired() {
      this.parentContainer.isRequired = this.required;
    },
    setParentPlaceholder: function setParentPlaceholder() {
      this.parentContainer.hasPlaceholder = !!this.placeholder;
    },
    updateValues: function updateValues() {
      var _this2 = this;

      this.$nextTick((function () {
        var newValue = _this2.$el.value || _this2.value;

        _this2.setParentValue(newValue);
        _this2.parentContainer.inputLength = newValue ? newValue.length : 0;
      }));
    },
    onFocus: function onFocus($event) {
      if (this.parentContainer) {
        this.parentContainer.isFocused = true;
      }

      this.$emit('focus', $event);
    },
    onBlur: function onBlur($event) {
      this.parentContainer.isFocused = false;
      this.setParentValue();
      this.$emit('blur', $event);
    },
    onInput: function onInput($event) {
      this.updateValues();
      this.$emit('change', this.$el.value, $event);
      this.$emit($event.type, this.$el.value, $event);
      this.lazyEventEmitter();
    }
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 14 */
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var margin = 8;

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
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var isArray = function isArray(value) {
  return value && value.constructor === Array;
};

/* harmony default export */ __webpack_exports__["a"] = (isArray);
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var debounce = function debounce(callback, limit) {
  var wait = false;

  return function () {
    if (!wait) {
      callback.call();
      wait = true;

      window.setTimeout((function () {
        wait = false;
      }), limit);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (debounce);
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(155);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1__src__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'pink'
  },
  blue: {
    primary: 'blue',
    accent: 'pink'
  },
  indigo: {
    primary: 'indigo',
    accent: 'pink'
  },
  brown: {
    primary: 'brown',
    accent: 'green'
  },
  purple: {
    primary: 'purple',
    accent: 'blue'
  },
  orange: {
    primary: 'orange',
    accent: 'purple'
  },
  green: {
    primary: 'green',
    accent: 'pink'
  },
  'light-blue': {
    primary: 'light-blue',
    accent: 'yellow'
  },
  teal: {
    primary: 'teal',
    accent: 'orange'
  },
  'blue-grey': {
    primary: 'blue-grey',
    accent: 'blue'
  },
  cyan: {
    primary: 'cyan',
    accent: 'pink'
  },
  red: {
    primary: 'red',
    accent: 'pink'
  },
  white: {
    primary: 'white',
    accent: 'blue'
  },
  grey: {
    primary: {
      color: 'grey',
      hue: 300
    },
    accent: 'indigo'
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* Root */
var Introduction = function Introduction(r) {
  return __webpack_require__.e/* require.ensure */(0).then((function () {
    return r(__webpack_require__(432));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var GettingStarted = function GettingStarted(r) {
  return __webpack_require__.e/* require.ensure */(0).then((function () {
    return r(__webpack_require__(431));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var About = function About(r) {
  return __webpack_require__.e/* require.ensure */(0).then((function () {
    return r(__webpack_require__(428));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Changelog = function Changelog(r) {
  return __webpack_require__.e/* require.ensure */(0).then((function () {
    return r(__webpack_require__(429));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Error404 = function Error404(r) {
  return __webpack_require__.e/* require.ensure */(0).then((function () {
    return r(__webpack_require__(430));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/* Components */
var Avatar = function Avatar(r) {
  return __webpack_require__.e/* require.ensure */(15).then((function () {
    return r(__webpack_require__(433));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var BottomBar = function BottomBar(r) {
  return __webpack_require__.e/* require.ensure */(14).then((function () {
    return r(__webpack_require__(434));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Buttons = function Buttons(r) {
  return __webpack_require__.e/* require.ensure */(13).then((function () {
    return r(__webpack_require__(436));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var ButtonToggle = function ButtonToggle(r) {
  return __webpack_require__.e/* require.ensure */(19).then((function () {
    return r(__webpack_require__(435));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Card = function Card(r) {
  return __webpack_require__.e/* require.ensure */(21).then((function () {
    return r(__webpack_require__(437));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Checkbox = function Checkbox(r) {
  return __webpack_require__.e/* require.ensure */(31).then((function () {
    return r(__webpack_require__(438));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Chips = function Chips(r) {
  return __webpack_require__.e/* require.ensure */(30).then((function () {
    return r(__webpack_require__(439));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Datepicker = function Datepicker(r) {
  return __webpack_require__.e/* require.ensure */(12).then((function () {
    return r(__webpack_require__(440));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Dialog = function Dialog(r) {
  return __webpack_require__.e/* require.ensure */(11).then((function () {
    return r(__webpack_require__(441));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var FileComponent = function FileComponent(r) {
  return __webpack_require__.e/* require.ensure */(29).then((function () {
    return r(__webpack_require__(442));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Icon = function Icon(r) {
  return __webpack_require__.e/* require.ensure */(22).then((function () {
    return r(__webpack_require__(443));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var ImageLoader = function ImageLoader(r) {
  return __webpack_require__.e/* require.ensure */(28).then((function () {
    return r(__webpack_require__(444));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var InkRipple = function InkRipple(r) {
  return __webpack_require__.e/* require.ensure */(23).then((function () {
    return r(__webpack_require__(445));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Input = function Input(r) {
  return __webpack_require__.e/* require.ensure */(10).then((function () {
    return r(__webpack_require__(446));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var List = function List(r) {
  return __webpack_require__.e/* require.ensure */(9).then((function () {
    return r(__webpack_require__(447));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Menu = function Menu(r) {
  return __webpack_require__.e/* require.ensure */(24).then((function () {
    return r(__webpack_require__(448));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Progress = function Progress(r) {
  return __webpack_require__.e/* require.ensure */(8).then((function () {
    return r(__webpack_require__(449));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Radio = function Radio(r) {
  return __webpack_require__.e/* require.ensure */(27).then((function () {
    return r(__webpack_require__(450));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Select = function Select(r) {
  return __webpack_require__.e/* require.ensure */(7).then((function () {
    return r(__webpack_require__(451));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Sidenav = function Sidenav(r) {
  return __webpack_require__.e/* require.ensure */(6).then((function () {
    return r(__webpack_require__(452));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Snackbar = function Snackbar(r) {
  return __webpack_require__.e/* require.ensure */(5).then((function () {
    return r(__webpack_require__(453));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var SpeedDial = function SpeedDial(r) {
  return __webpack_require__.e/* require.ensure */(17).then((function () {
    return r(__webpack_require__(454));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Spinner = function Spinner(r) {
  return __webpack_require__.e/* require.ensure */(4).then((function () {
    return r(__webpack_require__(455));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Stepper = function Stepper(r) {
  return __webpack_require__.e/* require.ensure */(33).then((function () {
    return r(__webpack_require__(456));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Subheader = function Subheader(r) {
  return __webpack_require__.e/* require.ensure */(32).then((function () {
    return r(__webpack_require__(457));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Switch = function Switch(r) {
  return __webpack_require__.e/* require.ensure */(26).then((function () {
    return r(__webpack_require__(458));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Table = function Table(r) {
  return __webpack_require__.e/* require.ensure */(3).then((function () {
    return r(__webpack_require__(459));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Tabs = function Tabs(r) {
  return __webpack_require__.e/* require.ensure */(25).then((function () {
    return r(__webpack_require__(460));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Toolbar = function Toolbar(r) {
  return __webpack_require__.e/* require.ensure */(20).then((function () {
    return r(__webpack_require__(461));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Tooltip = function Tooltip(r) {
  return __webpack_require__.e/* require.ensure */(16).then((function () {
    return r(__webpack_require__(462));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Whiteframe = function Whiteframe(r) {
  return __webpack_require__.e/* require.ensure */(18).then((function () {
    return r(__webpack_require__(463));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/* UI Elements */
var Typography = function Typography(r) {
  return __webpack_require__.e/* require.ensure */(1).then((function () {
    return r(__webpack_require__(467));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Layout = function Layout(r) {
  return __webpack_require__.e/* require.ensure */(1).then((function () {
    return r(__webpack_require__(466));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/* Themes */
var Configuration = function Configuration(r) {
  return __webpack_require__.e/* require.ensure */(2).then((function () {
    return r(__webpack_require__(464));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var DynamicThemes = function DynamicThemes(r) {
  return __webpack_require__.e/* require.ensure */(2).then((function () {
    return r(__webpack_require__(465));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var main = [{
  path: '/',
  name: 'introduction',
  component: Introduction
}, {
  path: '/getting-started',
  name: 'getting-started',
  component: GettingStarted
}, {
  path: '/about',
  name: 'about',
  component: About
}, {
  path: '/changelog',
  name: 'changelog',
  component: Changelog
}];

var components = [{
  path: '/components',
  name: 'components',
  redirect: '/components/avatar'
}, {
  path: '/components/avatar',
  name: 'components:avatar',
  component: Avatar
}, {
  path: '/components/bottom-bar',
  name: 'components:bottom-bar',
  component: BottomBar
}, {
  path: '/components/button',
  name: 'components:button',
  component: Buttons
}, {
  path: '/components/button-toggle',
  name: 'components:button-toggle',
  component: ButtonToggle
}, {
  path: '/components/card',
  name: 'components:card',
  component: Card
}, {
  path: '/components/checkbox',
  name: 'components:checkbox',
  component: Checkbox
}, {
  path: '/components/chips',
  name: 'components:chips',
  component: Chips
}, {
  path: '/components/date-picker',
  name: 'components:date-picker',
  component: Datepicker
}, {
  path: '/components/dialog',
  name: 'components:dialog',
  component: Dialog
}, {
  path: '/components/file',
  name: 'components:file',
  component: FileComponent
}, {
  path: '/components/icon',
  name: 'components:icon',
  component: Icon
}, {
  path: '/components/image-loader',
  name: 'components:image-loader',
  component: ImageLoader
}, {
  path: '/components/ink-ripple',
  name: 'components:ink-ripple',
  component: InkRipple
}, {
  path: '/components/input',
  name: 'components:input',
  component: Input
}, {
  path: '/components/list',
  name: 'components:list',
  component: List
}, {
  path: '/components/menu',
  name: 'components:menu',
  component: Menu
}, {
  path: '/components/progress',
  name: 'components:progress',
  component: Progress
}, {
  path: '/components/radio',
  name: 'components:radio',
  component: Radio
}, {
  path: '/components/select',
  name: 'components:select',
  component: Select
}, {
  path: '/components/sidenav',
  name: 'components:sidenav',
  component: Sidenav
}, {
  path: '/components/snackbar',
  name: 'components:snackbar',
  component: Snackbar
}, {
  path: '/components/speed-dial',
  name: 'components:speed-dial',
  component: SpeedDial
}, {
  path: '/components/spinner',
  name: 'components:spinner',
  component: Spinner
}, {
  path: '/components/stepper',
  name: 'components:stepper',
  component: Stepper
}, {
  path: '/components/subheader',
  name: 'components:subheader',
  component: Subheader
}, {
  path: '/components/switch',
  name: 'components:switch',
  component: Switch
}, {
  path: '/components/table',
  name: 'components:table',
  component: Table
}, {
  path: '/components/tabs',
  name: 'components:tabs',
  component: Tabs
}, {
  path: '/components/toolbar',
  name: 'components:toolbar',
  component: Toolbar
}, {
  path: '/components/tooltip',
  name: 'components:tooltip',
  component: Tooltip
}, {
  path: '/components/whiteframe',
  name: 'components:whiteframe',
  component: Whiteframe
}];

var theme = [{
  path: '/themes',
  name: 'themes',
  redirect: '/themes/configuration'
}, {
  path: '/themes/configuration',
  name: 'themes:configuration',
  component: Configuration
}, {
  path: '/themes/dynamic-themes',
  name: 'themes:dynamic-themes',
  component: DynamicThemes
}];

var uiElements = [{
  path: '/ui-elements',
  name: 'ui-elements',
  redirect: '/ui-elements/typography'
}, {
  path: '/ui-elements/typography',
  name: 'ui-elements:typography',
  component: Typography
}, {
  path: '/ui-elements/layout',
  name: 'ui-elements:layout',
  component: Layout
}];

var error = [{
  path: '*',
  name: 'error',
  component: Error404
}];

/* harmony default export */ __webpack_exports__["a"] = ([].concat(main, components, theme, uiElements, error));
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(423)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(379),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(422)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(367),
  /* scopeId */
  "data-v-3ee9fdec",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(420)
__webpack_require__(419)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(351),
  /* scopeId */
  "data-v-0f98c25a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(426)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(414),
  /* scopeId */
  "data-v-f4400a88",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(424)
__webpack_require__(425)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(401),
  /* scopeId */
  "data-v-ad353592",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(427)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(418),
  /* scopeId */
  "data-v-fdf995b8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(421)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(352),
  /* scopeId */
  "data-v-0fbc0107",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      toolbar: true,
      theme: 'default',
      pageTitle: ''
    };
  },
  computed: {
    logo() {
      let theme = __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].material.currentTheme;

      if (theme) {
        return `assets/logo-vue-material-${theme}.png`;
      }

      return 'assets/logo-vue-material-default.png';
    }
  },
  methods: {
    toggleSidenav() {
      this.$refs['main-sidebar'].toggle();
    },
    closeSidenav() {
      this.$refs['main-sidebar'].close();
    }
  }
});

/***/ }),
/* 32 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: String
  },
  computed: {
    slotNames() {
      return Object.keys(this.$slots);
    }
  }
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight_js__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_languages_scss__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_languages_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_languages_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_languages_xml__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_languages_xml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_languages_xml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_javascript__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_bash__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_bash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_bash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clipboard__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_core_utils_getClosestVueParent__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight_js___default.a.registerLanguage('scss', __WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_languages_scss___default.a);
__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight_js___default.a.registerLanguage('xml', __WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_languages_xml___default.a);
__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight_js___default.a.registerLanguage('javascript', __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_javascript___default.a);
__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight_js___default.a.registerLanguage('bash', __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_bash___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    lang: String,
    height: {
      type: [Number, String],
      default: '450px'
    }
  },
  data: () => ({
    showMessage: false
  }),
  methods: {
    enableCopy() {
      const clipboard = new __WEBPACK_IMPORTED_MODULE_5_clipboard___default.a(this.$refs.copy.$el, {
        target: () => this.$refs.block
      });

      clipboard.on('success', event => {
        event.clearSelection();
        this.showMessage = true;

        window.setTimeout(() => {
          this.showMessage = false;
        }, 2000);
      });
    },
    reindent() {
      const block = this.$refs.block;
      let lines = block.textContent.split('\n');
      let matches;

      if (lines[0] === '') {
        lines.shift();
      }

      let indentation = (matches = /^[\s\t]+/.exec(lines[0])) !== null ? matches[0] : null;

      if (indentation) {
        lines = lines.map((function (line) {
          line = line.replace(indentation, '');

          return line.replace(/\t/g, '  ');
        }));

        block.textContent = lines.join('\n').trim();
      }
    }
  },
  mounted() {
    this.exampleBoxParent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__src_core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'example-box');
    this.reindent();
    this.enableCopy();

    if (this.exampleBoxParent) {
      this.exampleBoxParent.codeBlocks.push({
        lang: this.lang,
        code: this.$refs.block.innerHTML
      });
    }

    __WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight_js___default.a.highlightBlock(this.$refs.block);
  }
});

/***/ }),
/* 34 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    cardTitle: String
  },
  data: () => ({
    codeBlocks: [],
    codeString: ''
  }),
  methods: {
    editOnCodepen() {
      let data = {
        title: 'Vue Material - ' + this.cardTitle,
        private: false,
        head: '<meta name="viewport" content="width=device-width">',
        html_pre_processor: 'none',
        js_pre_processor: 'none',
        js: this.$refs.initialJs.innerHTML,
        css_pre_processor: 'scss',
        css_starter: 'neither',
        css_prefix_free: false,
        css_external: ['http://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic', 'http://fonts.googleapis.com/icon?family=Material+Icons', 'https://cdn.rawgit.com/marcosmoura/vue-material/master/dist/vue-material.css'].join(';'),
        js_external: ['https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.3/vue.min.js', 'https://cdn.rawgit.com/marcosmoura/vue-material/master/dist/vue-material.js'].join(';')
      };

      this.codeBlocks.forEach(block => {
        if (block.lang === 'xml') {
          let initialHtml = this.$refs.initialHtml.innerHTML;

          data.html = initialHtml.replace('### TEMPLATE ###', block.code);
        } else if (block.lang === 'javascript') {
          data.js = data.js += block.code;
        } else {
          data.css = block.code;
        }
      });

      this.codeString = JSON.stringify(data).replace(/"/g, '&quot;').replace(/'/g, '&apos;');

      this.$nextTick(() => {
        this.$refs.form.submit();
      });
    }
  }
});

/***/ }),
/* 35 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    pageTitle: String
  },
  methods: {
    toggleSidenav() {
      this.$root.toggleSidenav();
    }
  },
  mounted() {
    document.title = this.pageTitle + ' - Vue Material';
  }
});

/***/ }),
/* 36 */
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

let versions = null;

/* harmony default export */ __webpack_exports__["default"] = ({
  data: () => ({
    latest: null,
    currentDocs: null,
    availableDocs: []
  }),
  methods: {
    changeDocs() {
      const location = window.location;

      if (this.currentDocs === this.latest) {
        window.location.href = location.origin + '/' + location.hash;
      } else {
        window.location.href = location.origin + '/releases/v' + this.currentDocs + '/' + location.hash;
      }
    },
    getVersions(callback) {
      if (!versions) {
        const request = new XMLHttpRequest();

        request.open('GET', '/versions.json', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.onload = function () {
          versions = JSON.parse(this.response);
          callback(versions);
        };
        request.send();
      } else {
        callback(versions);
      }
    },
    setVersion(versions) {
      versions.sort((a, b) => a < b);

      this.latest = versions[0];
      this.currentDocs = versions[0];
      this.availableDocs = versions;
    },
    setCurrentByLocation() {
      let normalizedPathname = location.pathname.replace(/\/|releases\/v/g, '');

      if (normalizedPathname && this.availableDocs.indexOf(normalizedPathname) >= 0) {
        this.currentDocs = normalizedPathname;
      }
    }
  },
  mounted() {
    this.getVersions(response => {
      this.setVersion(response);
      this.setCurrentByLocation();
    });
  }
});

/***/ }),
/* 37 */
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
  name: 'md-avatar',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]]
});

/***/ }),
/* 38 */
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
  name: 'md-backdrop',
  methods: {
    close() {
      this.$emit('close');
    }
  }
});

/***/ }),
/* 39 */
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
  name: 'md-bottom-bar',
  props: {
    mdShift: Boolean
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  computed: {
    classes() {
      return this.mdShift ? 'md-shift' : 'md-fixed';
    }
  },
  methods: {
    setActive(item) {
      this.$children.forEach(child => {
        child.active = child === item;
      });

      this.$emit('change', this.$children.findIndex(i => i === item));
    }
  }
});

/***/ }),
/* 40 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-bottom-bar-item',
  props: {
    mdIcon: String,
    mdIconSrc: String,
    mdIconset: String,
    mdActive: Boolean,
    disabled: Boolean,
    href: String
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    classes() {
      return {
        'md-active': this.active
      };
    }
  },
  watch: {
    mdActive(active) {
      this.setActive(active);
    }
  },
  methods: {
    setActive(active) {
      if (active) {
        this.$parent.setActive(this);
      }
    }
  },
  mounted() {
    if (!this.$parent.$el.classList.contains('md-bottom-bar')) {
      this.$destroy();

      throw new Error('You should wrap the md-bottom-bar-item in a md-bottom-bar');
    }

    if (this.mdActive) {
      this.active = true;
    }
  }
});

/***/ }),
/* 41 */
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



let onClickButton;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-button-toggle',
  props: {
    mdSingle: Boolean
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  mounted() {
    this.$children.forEach(child => {
      let element = child.$el;
      let toggleClass = 'md-toggle';

      onClickButton = () => {
        if (this.mdSingle) {
          this.$children.forEach(child => {
            child.$el.classList.remove(toggleClass);
          });

          element.classList.add(toggleClass);
        } else {
          element.classList.toggle(toggleClass);
        }
      };

      if (element && element.classList.contains('md-button')) {
        element.addEventListener('click', onClickButton);
      }
    });
  },
  beforeDestroy() {
    this.$children.forEach(child => {
      let element = child.$el;

      if (element && element.classList.contains('md-button')) {
        element.removeEventListener('click', onClickButton);
      }
    });
  }
});

/***/ }),
/* 42 */
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
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-button',
  props: {
    href: String,
    target: String,
    rel: String,
    type: {
      type: String,
      default: 'button'
    },
    disabled: Boolean
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  computed: {
    newRel() {
      if (this.target === '_blank') {
        return this.rel || 'noopener';
      }

      return this.rel;
    }
  }
});

/***/ }),
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_getImageLightness__ = __webpack_require__(14);
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

/***/ }),
/* 53 */
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
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-checkbox',
  props: {
    name: String,
    value: [String, Boolean],
    id: String,
    disabled: Boolean
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data() {
    return {
      checked: this.value
    };
  },
  computed: {
    classes() {
      return {
        'md-checked': this.checked,
        'md-disabled': this.disabled
      };
    }
  },
  watch: {
    value() {
      this.checked = !!this.value;
    }
  },
  methods: {
    toggleCheck($event) {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.$emit('change', this.checked, $event);
        this.$emit('input', this.checked, $event);
      }
    }
  }
});

/***/ }),
/* 54 */
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
  name: 'md-chip',
  props: {
    disabled: Boolean,
    mdDeletable: Boolean,
    mdEditable: Boolean
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  computed: {
    classes() {
      return {
        'md-deletable': this.mdDeletable,
        'md-disabled': this.disabled,
        'md-editable': this.mdEditable
      };
    }
  }
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_uniqueId__ = __webpack_require__(9);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'md-chips',
  props: {
    value: Array,
    disabled: Boolean,
    mdInputId: String,
    mdInputName: String,
    mdInputPlaceholder: String,
    mdInputType: {
      type: String,
      default: 'text'
    },
    mdStatic: Boolean,
    mdMax: {
      type: Number,
      default: Infinity
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data() {
    return {
      currentChip: null,
      selectedChips: this.value,
      inputId: this.mdInputId || 'chips-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_uniqueId__["a" /* default */])()
    };
  },
  watch: {
    value(value) {
      this.selectedChips = value;
    }
  },
  computed: {
    classes() {
      return {
        'md-static': this.mdStatic,
        'md-disabled': this.disabled
      };
    }
  },
  methods: {
    applyInputFocus() {
      this.$nextTick(() => {
        this.$refs.input.$el.focus();
      });
    },
    addChip() {
      if (this.currentChip && this.selectedChips.length < this.mdMax) {
        const value = this.currentChip.trim();

        if (this.selectedChips.indexOf(value) < 0) {
          this.selectedChips.push(value);
          this.currentChip = null;
          this.$emit('input', this.selectedChips);
          this.$emit('change', this.selectedChips);
          this.applyInputFocus();
        }
      }
    },
    deleteChip(chip) {
      let index = this.selectedChips.indexOf(chip);

      if (index >= 0) {
        this.selectedChips.splice(index, 1);
      }

      this.$emit('change', this.selectedChips);
      this.applyInputFocus();
    },
    editChip(chip) {
      let index = this.selectedChips.indexOf(chip);

      if (index >= 0) {
        this.selectedChips.splice(index, 1);
      }

      this.currentChip = chip;
      this.$emit('change', this.selectedChips);
      this.applyInputFocus();
    },
    deleteLastChip() {
      if (!this.currentChip) {
        this.selectedChips.pop();
        this.$emit('change', this.selectedChips);
        this.applyInputFocus();
      }
    }
  }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_getInViewPosition__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils_transitionEndEventName__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_format__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_parse__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_month__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_add_months__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_add_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_add_months__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_get_days_in_month__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_get_days_in_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_get_days_in_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_set_date__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_set_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_date_fns_set_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_set_month__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_set_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_date_fns_set_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_set_year__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_set_year___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_date_fns_set_year__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_date_fns_is_today__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_date_fns_is_today___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_date_fns_is_today__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_day__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_is_this_month__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_is_this_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_date_fns_is_this_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_is_this_year__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_is_this_year___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_date_fns_is_this_year__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_is_before__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_is_before___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_date_fns_is_before__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_is_valid__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_is_valid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_date_fns_is_valid__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    value: [String, Date],
    id: String,
    name: String,
    disabled: Boolean,
    required: Boolean,
    placeholder: String,
    mdOpenOnFocus: Boolean
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data() {
    return {
      rootElement: null,
      pickerElement: null,
      backdropElement: null,
      pickerPosition: {
        top: '0px',
        left: '0px'
      },
      active: false,
      visibleYears() {
        let years = [];
        let startYear = this.locale.startYear;

        while (startYear <= this.locale.endYear) {
          years.push(startYear++);
        }

        return years;
      },
      modelDate: this.value,
      currentDate: __WEBPACK_IMPORTED_MODULE_17_date_fns_is_valid___default()(this.value) ? __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default()(this.value) : Date.now(),
      selectedDate: __WEBPACK_IMPORTED_MODULE_17_date_fns_is_valid___default()(this.value) ? __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default()(this.value) : Date.now(),
      createdMonths: [__WEBPACK_IMPORTED_MODULE_7_date_fns_add_months___default()(this.value, -1), this.value, __WEBPACK_IMPORTED_MODULE_7_date_fns_add_months___default()(this.value, 1)],
      currentView: 'date',
      lastAction: null
    };
  },
  computed: {
    classes() {
      return {
        'md-active': this.active,
        'md-select-date': this.currentView === 'date',
        'md-select-month': this.currentView === 'month',
        'md-select-year': this.currentView === 'year'
      };
    },
    styles() {
      return {
        top: this.pickerPosition.top,
        left: this.pickerPosition.left
      };
    },
    locale() {
      return this.$material.locale;
    }
  },
  watch: {
    selectedDate(selected) {
      this.modelDate = __WEBPACK_IMPORTED_MODULE_4_date_fns_format___default()(selected, this.locale.dateFormat);
    }
  },
  methods: {
    startOfMonth(month) {
      return __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_month___default()(month);
    },
    getDaysInMonth(month) {
      return __WEBPACK_IMPORTED_MODULE_8_date_fns_get_days_in_month___default()(month);
    },
    isThisMonth(month) {
      return __WEBPACK_IMPORTED_MODULE_14_date_fns_is_this_month___default()(__WEBPACK_IMPORTED_MODULE_10_date_fns_set_month___default()(new Date(), month));
    },
    isThisYear(year) {
      return __WEBPACK_IMPORTED_MODULE_15_date_fns_is_this_year___default()(__WEBPACK_IMPORTED_MODULE_11_date_fns_set_year___default()(new Date(), year));
    },
    isToday(day) {
      return __WEBPACK_IMPORTED_MODULE_12_date_fns_is_today___default()(__WEBPACK_IMPORTED_MODULE_9_date_fns_set_date___default()(this.currentDate, day));
    },
    isSelectedDay(day) {
      return __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_day___default()(this.selectedDate, __WEBPACK_IMPORTED_MODULE_9_date_fns_set_date___default()(this.selectedDate, day));
    },
    isSelectedMonth(month) {
      return __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_day___default()(this.selectedDate, __WEBPACK_IMPORTED_MODULE_10_date_fns_set_month___default()(this.selectedDate, month));
    },
    isSelectedYear(year) {
      return __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_day___default()(this.selectedDate, __WEBPACK_IMPORTED_MODULE_11_date_fns_set_year___default()(this.selectedDate, year));
    },
    setYear(year) {
      this.setModelValue(__WEBPACK_IMPORTED_MODULE_11_date_fns_set_year___default()(this.currentDate, year));
    },
    setDate(day) {
      this.setModelValue(__WEBPACK_IMPORTED_MODULE_9_date_fns_set_date___default()(this.currentDate, day));
    },
    setMonth(month) {
      this.setModelValue(__WEBPACK_IMPORTED_MODULE_10_date_fns_set_month___default()(this.currentDate, month));
    },
    setModelValue(date) {
      this.selectedDate = date;
      this.$emit('input', date);
    },
    changeValue() {
      const newDate = __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default()(this.$refs.pickerInput.$el.value);

      this.lastAction = null;
      this.setModelValue(__WEBPACK_IMPORTED_MODULE_17_date_fns_is_valid___default()(newDate) ? newDate : this.selectedDate);
    },
    openOnFocus() {
      if (this.mdOpenOnFocus) {
        this.openPicker();
      }
    },
    calculatePopupPosition() {
      window.requestAnimationFrame(() => {
        const inputContainerRect = this.parentContainer.$el.getBoundingClientRect();
        let position = {};

        position.top = inputContainerRect.top + this.parentContainer.$el.offsetHeight;
        position.left = inputContainerRect.left;

        position = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_utils_getInViewPosition__["a" /* default */])(this.pickerElement, position);

        this.pickerPosition.top = position.top + window.pageYOffset + 'px';
        this.pickerPosition.left = position.left + window.pageXOffset + 'px';
      });
    },
    openPicker() {
      window.addEventListener('resize', this.calculatePopupPosition);
      this.calculatePopupPosition();
      this.rootElement.appendChild(this.pickerElement);
      this.rootElement.appendChild(this.backdropElement);
      getComputedStyle(this.pickerElement).top;
      getComputedStyle(this.backdropElement).top;
      this.active = true;
      this.currentDate = __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default()(this.value);
      this.selectedDate = __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default()(this.value);
    },
    closePicker() {
      const cleanUp = () => {
        this.pickerElement.removeEventListener(__WEBPACK_IMPORTED_MODULE_3__core_utils_transitionEndEventName__["a" /* default */], cleanUp);
        this.rootElement.removeChild(this.pickerElement);
        this.rootElement.removeChild(this.backdropElement);
        this.currentDate = new Date();
      };

      window.removeEventListener('resize', this.calculatePopupPosition);
      this.pickerElement.removeEventListener(__WEBPACK_IMPORTED_MODULE_3__core_utils_transitionEndEventName__["a" /* default */], cleanUp);
      this.pickerElement.addEventListener(__WEBPACK_IMPORTED_MODULE_3__core_utils_transitionEndEventName__["a" /* default */], cleanUp);
      this.showDatePicker();
      this.active = false;
    },
    setLastAction() {
      if (!__WEBPACK_IMPORTED_MODULE_14_date_fns_is_this_month___default()(this.currentDate, this.selectedDate)) {
        if (__WEBPACK_IMPORTED_MODULE_16_date_fns_is_before___default()(this.currentDate, this.selectedDate)) {
          this.lastAction = 'next';
        } else {
          this.lastAction = 'previous';
        }
      } else {
        this.lastAction = null;
      }
    },
    showDatePicker() {
      this.setLastAction();

      this.$nextTick(() => {
        this.currentView = 'date';
        this.currentDate = this.selectedDate;
      });
    },
    showYearPicker() {
      this.lastAction = null;
      this.currentView = 'year';
      this.currentDate = this.selectedDate;

      this.$nextTick(() => {
        this.pickerElement.querySelector(`.data-${this.selectedDate.getFullYear()}`).scrollIntoViewIfNeeded(true);
      });
    },
    showMonthPicker() {
      this.lastAction = null;
      this.currentView = 'month';
      this.currentDate = this.selectedDate;
    },
    previousMonth() {
      this.currentDate = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_months___default()(this.currentDate, -1);
      this.lastAction = 'previous';
    },
    nextMonth() {
      this.currentDate = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_months___default()(this.currentDate, 1);
      this.lastAction = 'next';
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.rootElement = this.$root.$el;
      this.parentContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-input-container');
      this.pickerElement = this.$refs.pickerElement;
      this.backdropElement = this.$refs.pickerBackdrop.$el;
      this.pickerElement.parentNode.removeChild(this.pickerElement);
      this.backdropElement.parentNode.removeChild(this.backdropElement);
      this.setModelValue(this.currentDate);
    });
  },
  beforeDestroy() {}
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_transitionEndEventName__ = __webpack_require__(8);
//
//
//
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
  name: 'md-dialog',
  props: {
    mdClickOutsideToClose: {
      type: Boolean,
      default: true
    },
    mdEscToClose: {
      type: Boolean,
      default: true
    },
    mdBackdrop: {
      type: Boolean,
      default: true
    },
    mdOpenFrom: String,
    mdCloseTo: String,
    mdFullscreen: {
      type: Boolean,
      default: false
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data: () => ({
    active: false,
    transitionOff: false,
    dialogTransform: ''
  }),
  computed: {
    classes() {
      return {
        'md-active': this.active
      };
    },
    dialogClasses() {
      return {
        'md-fullscreen': this.mdFullscreen,
        'md-transition-off': this.transitionOff,
        'md-reference': this.mdOpenFrom || this.mdCloseTo
      };
    },
    styles() {
      return {
        transform: this.dialogTransform
      };
    }
  },
  methods: {
    removeDialog() {
      if (document.body.contains(this.dialogElement)) {
        this.$el.parentNode.removeChild(this.$el);
      }
    },
    calculateDialogPos(ref) {
      const reference = document.querySelector(ref);

      if (reference) {
        const openFromRect = reference.getBoundingClientRect();
        const dialogRect = this.dialogInnerElement.getBoundingClientRect();
        const widthInScale = openFromRect.width / dialogRect.width;
        const heightInScale = openFromRect.height / dialogRect.height;
        let distance = {
          top: -(dialogRect.top - openFromRect.top),
          left: -(dialogRect.left - openFromRect.left + openFromRect.width)
        };

        if (openFromRect.top > dialogRect.top + dialogRect.height) {
          distance.top = openFromRect.top - dialogRect.top;
        }

        if (openFromRect.left > dialogRect.left + dialogRect.width) {
          distance.left = openFromRect.left - dialogRect.left - openFromRect.width;
        }

        this.dialogTransform = `translate3D(${distance.left}px, ${distance.top}px, 0) scale(${widthInScale}, ${heightInScale})`;
      }
    },
    open() {
      document.body.appendChild(this.dialogElement);
      this.transitionOff = true;
      this.calculateDialogPos(this.mdOpenFrom);

      window.setTimeout(() => {
        this.dialogElement.focus();
        this.transitionOff = false;
        this.active = true;
      });

      this.$emit('open');
    },
    closeOnEsc() {
      if (this.mdEscToClose) {
        this.close();
      }
    },
    close() {
      if (document.body.contains(this.dialogElement)) {
        this.$nextTick(() => {
          let cleanElement = () => {
            let activeRipple = this.dialogElement.querySelector('.md-ripple.md-active');

            if (activeRipple) {
              activeRipple.classList.remove('md-active');
            }

            this.dialogInnerElement.removeEventListener(__WEBPACK_IMPORTED_MODULE_1__core_utils_transitionEndEventName__["a" /* default */], cleanElement);
            document.body.removeChild(this.dialogElement);
            this.dialogTransform = '';
          };

          this.transitionOff = true;
          this.dialogTransform = '';
          this.calculateDialogPos(this.mdCloseTo);

          window.setTimeout(() => {
            this.transitionOff = false;
            this.active = false;
            this.dialogInnerElement.addEventListener(__WEBPACK_IMPORTED_MODULE_1__core_utils_transitionEndEventName__["a" /* default */], cleanElement);
          });

          this.$emit('close');
        });
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.dialogElement = this.$el;
      this.dialogInnerElement = this.$refs.dialog;
      this.removeDialog();
    });
  },
  beforeDestroy() {
    this.removeDialog();
  }
});

/***/ }),
/* 58 */
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
  name: 'md-dialog-actions'
});

/***/ }),
/* 59 */
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
  name: 'md-dialog-content'
});

/***/ }),
/* 60 */
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
  name: 'md-dialog-title'
});

/***/ }),
/* 61 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-dialog-alert',
  props: {
    mdTitle: String,
    mdContent: String,
    mdContentHtml: String,
    mdOkText: {
      type: String,
      default: 'Ok'
    }
  },
  data: () => ({
    debounce: false
  }),
  methods: {
    fireCloseEvent() {
      if (!this.debounce) {
        this.$emit('close');
      }
    },
    open() {
      this.$emit('open');
      this.debounce = false;
      this.$refs.dialog.open();
    },
    close() {
      this.fireCloseEvent();
      this.debounce = true;
      this.$refs.dialog.close();
    }
  },
  mounted() {
    if (!this.mdContent && !this.mdContentHtml) {
      throw new Error('Missing md-content or md-content-html attributes');
    }
  }
});

/***/ }),
/* 62 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-dialog-confirm',
  props: {
    mdTitle: String,
    mdContent: String,
    mdContentHtml: String,
    mdOkText: {
      type: String,
      default: 'Ok'
    },
    mdCancelText: {
      type: String,
      default: 'Cancel'
    }
  },
  data: () => ({
    debounce: false
  }),
  methods: {
    fireCloseEvent(type) {
      if (!this.debounce) {
        this.$emit('close', type);
      }
    },
    open() {
      this.$emit('open');
      this.debounce = false;
      this.$refs.dialog.open();
    },
    close(type) {
      this.fireCloseEvent(type);
      this.debounce = true;
      this.$refs.dialog.close();
    }
  },
  mounted() {
    if (!this.mdContent && !this.mdContentHtml) {
      throw new Error('Missing md-content or md-content-html attributes');
    }
  }
});

/***/ }),
/* 63 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-dialog-prompt',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    mdTitle: String,
    mdContent: String,
    mdContentHtml: String,
    mdOkText: {
      type: String,
      default: 'Ok'
    },
    mdCancelText: {
      type: String,
      default: 'Cancel'
    },
    mdInputId: String,
    mdInputName: String,
    mdInputMaxlength: [String, Number],
    mdInputPlaceholder: String
  },
  data: () => ({
    debounce: false
  }),
  methods: {
    fireCloseEvent(type) {
      if (!this.debounce) {
        this.$emit('close', type);
      }
    },
    open() {
      this.$emit('open');
      this.debounce = false;
      this.$refs.dialog.open();

      window.setTimeout(() => {
        this.$refs.input.$el.focus();
      });
    },
    close(type) {
      this.fireCloseEvent(type);
      this.debounce = true;
      this.$refs.dialog.close();
    },
    confirmValue() {
      this.$emit('input', this.$refs.input.$el.value);
      this.close('ok');
    }
  }
});

/***/ }),
/* 64 */
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
  name: 'md-divider'
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'md-file',
  props: {
    value: String,
    id: String,
    name: String,
    disabled: Boolean,
    required: Boolean,
    placeholder: String,
    accept: String,
    multiple: Boolean
  },
  data() {
    return {
      filename: this.value
    };
  },
  watch: {
    value() {
      this.filename = this.value;
    }
  },
  methods: {
    getMultipleName(files) {
      let names = [];

      [...files].forEach(file => {
        names.push(file.name);
      });

      return names.join(', ');
    },
    openPicker() {
      if (!this.disabled) {
        this.$refs.fileInput.click();
        this.$refs.textInput.$el.focus();
      }
    },
    onFileSelected($event) {
      const files = $event.target.files || $event.dataTransfer.files;

      if (files) {
        if (files.length > 1) {
          this.filename = this.getMultipleName(files);
        } else if (files.length === 1) {
          this.filename = files[0].name;
        } else {
          this.filename = null;
        }
      } else {
        this.filename = $event.target.value.split('\\').pop();
      }

      this.$emit('selected', files || $event.target.value);
      this.$emit('input', this.filename);
    }
  },
  mounted() {
    this.parentContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-input-container');

    if (!this.parentContainer) {
      this.$destroy();

      throw new Error('You should wrap the md-file in a md-input-container');
    }

    this.parentContainer.hasFile = true;
  },
  beforeDestroy() {
    this.parentContainer.hasFile = false;
  }
});

/***/ }),
/* 66 */
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
//
//
//
//



let registeredIcons = {};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-icon',
  props: {
    mdSrc: String,
    mdIconset: {
      type: String,
      default: 'material-icons'
    }
  },
  data: () => ({
    svgContent: null,
    imageSrc: null
  }),
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  watch: {
    mdSrc() {
      this.svgContent = null;
      this.imageSrc = null;
      this.checkSrc();
    }
  },
  methods: {
    isImage(mimetype) {
      return mimetype.indexOf('image') >= 0;
    },
    isSVG(mimetype) {
      return mimetype.indexOf('svg') >= 0;
    },
    setSVGContent(value) {
      this.svgContent = value;

      this.$nextTick(() => {
        this.$el.children[0].removeAttribute('fill');
      });
    },
    loadSVG() {
      if (!registeredIcons[this.mdSrc]) {
        const request = new XMLHttpRequest();
        const self = this;

        request.open('GET', this.mdSrc, true);

        request.onload = function () {
          const mimetype = this.getResponseHeader('content-type');

          if (this.status >= 200 && this.status < 400 && self.isImage(mimetype)) {
            if (self.isSVG(mimetype)) {
              registeredIcons[self.mdSrc] = this.response;
              self.setSVGContent(this.response);
            } else {
              self.loadImage();
            }
          } else {
            console.warn(`The file ${self.mdSrc} is not a valid image.`);
          }
        };

        request.send();
      } else {
        this.setSVGContent(registeredIcons[this.mdSrc]);
      }
    },
    loadImage() {
      this.imageSrc = this.mdSrc;
    },
    checkSrc() {
      if (this.mdSrc) {
        if (this.mdSrc.indexOf('.svg') >= 0) {
          this.loadSVG();
        } else {
          this.loadImage();
        }
      }
    }
  },
  mounted() {
    this.checkSrc();
  }
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_getImageLightness__ = __webpack_require__(14);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-image',
  props: {
    mdSrc: String
  },
  data: () => ({
    loaded: false,
    applyBlack: true,
    imageElement: null
  }),
  watch: {
    mdSrc() {
      this.createImage();
    }
  },
  computed: {
    classes() {
      return {
        'md-loaded': this.loaded,
        'md-black-output': this.applyBlack
      };
    }
  },
  methods: {
    analyzeLightness(image) {
      const applyLoad = () => {
        this.loaded = true;
      };

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_getImageLightness__["a" /* default */])(image, lightness => {
        let limit = 256;
        let darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100;

        if (darkness >= 0.7) {
          this.applyBlack = true;
        }

        this.$nextTick(applyLoad);
      }, applyLoad);
    },
    createImage() {
      this.loaded = false;
      this.applyBlack = false;
      this.imageElement = null;

      if (this.mdSrc) {
        this.imageElement = document.createElement('img');
        this.imageElement.crossOrigin = '';
        this.imageElement.src = this.mdSrc;
        this.analyzeLightness(this.imageElement);
      }
    }
  },
  created() {
    this.createImage();
  }
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__ = __webpack_require__(4);
//
//
//
//
//
//
//
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
  name: 'md-input',
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */]],
  mounted() {
    this.$nextTick(() => {
      this.parentContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-input-container');

      if (!this.parentContainer) {
        this.$destroy();

        throw new Error('You should wrap the md-input in a md-input-container');
      }

      this.parentContainer.inputInstance = this;
      this.setParentDisabled();
      this.setParentRequired();
      this.setParentPlaceholder();
      this.handleMaxLength();
      this.updateValues();
    });
  }
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_isArray__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
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
  name: 'md-input-container',
  props: {
    mdInline: Boolean,
    mdHasPassword: Boolean,
    mdClearable: Boolean
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data() {
    return {
      value: '',
      input: false,
      inputInstance: null,
      showPassword: false,
      enableCounter: false,
      hasSelect: false,
      hasPlaceholder: false,
      hasFile: false,
      isDisabled: false,
      isRequired: false,
      isFocused: false,
      counterLength: 0,
      inputLength: 0
    };
  },
  computed: {
    hasValue() {
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_isArray__["a" /* default */])(this.value)) {
        return this.value.length > 0;
      }

      return Boolean(this.value);
    },
    classes() {
      return {
        'md-input-inline': this.mdInline,
        'md-has-password': this.mdHasPassword,
        'md-clearable': this.mdClearable,
        'md-has-select': this.hasSelect,
        'md-has-file': this.hasFile,
        'md-has-value': this.hasValue,
        'md-input-placeholder': this.hasPlaceholder,
        'md-input-disabled': this.isDisabled,
        'md-input-required': this.isRequired,
        'md-input-focused': this.isFocused
      };
    }
  },
  methods: {
    isInput() {
      return this.input && this.input.tagName.toLowerCase() === 'input';
    },
    togglePasswordType() {
      if (this.isInput()) {
        if (this.input.type === 'password') {
          this.input.type = 'text';
          this.showPassword = true;
        } else {
          this.input.type = 'password';
          this.showPassword = false;
        }

        this.input.focus();
      }
    },
    clearInput() {
      this.inputInstance.$el.value = '';
      this.inputInstance.$emit('input', '');
      this.setValue('');
    },
    setValue(value) {
      this.value = value;
    }
  },
  mounted() {
    this.input = this.$el.querySelectorAll('input, textarea, select, .md-file')[0];

    if (!this.input) {
      this.$destroy();

      throw new Error('Missing input/select/textarea inside md-input-container');
    }
  }
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_autosize__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_autosize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_autosize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_getClosestVueParent__ = __webpack_require__(4);
//
//
//
//
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
  name: 'md-textarea',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__common__["a" /* default */]],
  watch: {
    value() {
      this.$nextTick(() => __WEBPACK_IMPORTED_MODULE_0_autosize___default.a.update(this.$el));
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.parentContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-input-container');

      if (!this.parentContainer) {
        this.$destroy();

        throw new Error('You should wrap the md-textarea in a md-input-container');
      }

      this.parentContainer.inputInstance = this;
      this.setParentDisabled();
      this.setParentRequired();
      this.setParentPlaceholder();
      this.handleMaxLength();
      this.updateValues();

      if (!this.$el.getAttribute('rows')) {
        this.$el.setAttribute('rows', '1');
      }

      __WEBPACK_IMPORTED_MODULE_0_autosize___default()(this.$el);
      setTimeout(() => __WEBPACK_IMPORTED_MODULE_0_autosize___default.a.update(this.$el), 200);
    });
  },
  beforeDestroy() {
    __WEBPACK_IMPORTED_MODULE_0_autosize___default.a.destroy(this.$el);
  }
});

/***/ }),
/* 71 */
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

/***/ }),
/* 72 */
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
  name: 'md-list',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]]
});

/***/ }),
/* 73 */
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
  name: 'md-list-expand'
});

/***/ }),
/* 74 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-list-item',
  props: {
    disabled: Boolean
  },
  computed: {
    classes() {
      return {
        'md-disabled': this.disabled
      };
    }
  }
});

/***/ }),
/* 75 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-list-item'
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__ = __webpack_require__(4);
//
//
//
//
//
//
//
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
  name: 'md-list-item',
  props: {
    disabled: Boolean,
    mdExpandMultiple: Boolean
  },
  data() {
    return {
      parentList: false,
      active: false,
      height: 0,
      contentObserver: null,
      transitionOff: true
    };
  },
  computed: {
    classes() {
      return {
        'md-disabled': this.disabled,
        'md-active': this.active
      };
    },
    expandClasses() {
      return {
        'md-transition-off': this.transitionOff
      };
    },
    expandStyles() {
      return {
        'margin-bottom': this.height
      };
    }
  },
  methods: {
    resetSiblings() {
      this.parentList.$children.forEach(child => {
        if (child.$el !== this.$el && child.$el.classList.contains('md-list-item-expand')) {
          child.active = false;
        }
      });
    },
    calculatePadding() {
      window.requestAnimationFrame(() => {
        this.height = -this.$el.scrollHeight + 'px';

        window.setTimeout(() => {
          this.transitionOff = false;
        });
      });
    },
    toggleExpandList() {
      if (!this.mdExpandMultiple) {
        this.resetSiblings();
      }

      this.calculatePadding();
      this.active = !this.active;
    },
    recalculateAfterChange() {
      this.transitionOff = true;
      this.calculatePadding();
    },
    observeChildChanges() {
      this.contentObserver = new MutationObserver(this.recalculateAfterChange);
      this.contentObserver.observe(this.$refs.expand, {
        childList: true,
        characterData: true,
        subtree: true
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.parentList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-list');
      this.calculatePadding();
      this.observeChildChanges();
      window.addEventListener('resize', this.recalculateAfterChange);
    });
  },
  beforeDestroy() {
    if (this.contentObserver) {
      this.contentObserver.disconnect();
    }

    window.removeEventListener('resize', this.recalculateAfterChange);
  }
});

/***/ }),
/* 77 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-list-item',
  props: {
    href: String,
    target: String,
    disabled: Boolean
  },
  computed: {
    classes() {
      return {
        'md-disabled': this.disabled
      };
    }
  }
});

/***/ }),
/* 78 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-list-item',
  props: {
    disabled: Boolean
  },
  computed: {
    classes() {
      return {
        'md-disabled': this.disabled
      };
    }
  }
});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_transitionEndEventName__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_getInViewPosition__ = __webpack_require__(15);
//
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
/* 80 */
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
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_scrollintoviewifneeded_polyfill__ = __webpack_require__(193);
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

/***/ }),
/* 82 */
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
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-progress',
  props: {
    mdIndeterminate: Boolean,
    mdProgress: {
      type: Number,
      default: 0
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  computed: {
    classes() {
      return {
        'md-indeterminate': this.mdIndeterminate
      };
    },
    styles() {
      if (!this.mdIndeterminate) {
        return {
          width: this.mdProgress + '%'
        };
      }
    }
  }
});

/***/ }),
/* 83 */
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
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-radio',
  props: {
    name: String,
    id: String,
    value: [String, Boolean, Number],
    mdValue: {
      type: [String, Boolean, Number],
      required: true
    },
    disabled: Boolean
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  computed: {
    classes() {
      return {
        'md-checked': typeof this.value !== 'undefined' && this.value !== null && this.mdValue.toString() === this.value.toString(),
        'md-disabled': this.disabled
      };
    }
  },
  methods: {
    toggleCheck($event) {
      if (!this.disabled) {
        this.$emit('change', this.mdValue, $event);
        this.$emit('input', this.mdValue, $event);
      }
    }
  }
});

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
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
  name: 'md-option',
  props: {
    value: [String, Boolean, Number, Object]
  },
  data: () => ({
    parentSelect: {},
    check: false,
    index: 0
  }),
  computed: {
    isSelected() {
      if (this.value && this.parentSelect.value) {
        let thisValue = this.value.toString();

        if (this.parentSelect.multiple) {
          return this.parentSelect.value.indexOf(thisValue) >= 0;
        }

        return this.value && this.parentSelect.value && thisValue === this.parentSelect.value.toString();
      }

      return false;
    },
    classes() {
      return {
        'md-selected': this.isSelected,
        'md-checked': this.check
      };
    }
  },
  methods: {
    isMultiple() {
      return this.parentSelect.multiple;
    },
    setParentOption() {
      if (!this.isMultiple()) {
        this.parentSelect.selectOption(this.value, this.$refs.item.textContent, this.$el);
      } else {
        this.check = !this.check;
      }
    },
    selectOption($event) {
      this.setParentOption();
      this.$emit('selected', $event);
    }
  },
  watch: {
    isSelected(selected) {
      if (this.isMultiple()) {
        this.check = selected;
      }
    },
    check(check) {
      if (check) {
        this.parentSelect.selectMultiple(this.index, this.value, this.$refs.item.textContent);
      } else {
        this.parentSelect.selectMultiple(this.index);
      }
    }
  },
  mounted() {
    this.parentSelect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-select');
    this.parentContent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-menu-content');

    if (!this.parentSelect) {
      throw new Error('You must wrap the md-option in a md-select');
    }

    this.parentSelect.optionsAmount++;
    this.index = this.parentSelect.optionsAmount;

    this.parentSelect.multipleOptions[this.index] = {};
    this.parentSelect.options[this.index] = this;

    if (this.isMultiple() && this.parentSelect.value.indexOf(this.value) >= 0 || this.parentSelect.value === this.value) {
      this.setParentOption();
    }
  },
  beforeDestroy() {
    if (this.parentSelect) {
      delete this.parentSelect.options[this.index];
      delete this.parentSelect.multipleOptions[this.index];
    }
  }
});

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_isArray__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
//
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
  name: 'md-select',
  props: {
    name: String,
    id: String,
    required: Boolean,
    multiple: Boolean,
    value: [String, Number, Array],
    disabled: Boolean,
    placeholder: String,
    mdMenuClass: String
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data() {
    return {
      lastSelected: null,
      selectedValue: null,
      selectedText: null,
      multipleOptions: {},
      options: {},
      optionsAmount: 0
    };
  },
  computed: {
    classes() {
      return {
        'md-disabled': this.disabled
      };
    },
    contentClasses() {
      if (this.multiple) {
        return 'md-multiple ' + this.mdMenuClass;
      }

      return this.mdMenuClass;
    }
  },
  watch: {
    value(value) {
      this.setTextAndValue(value);
    },
    disabled() {
      this.setParentDisabled();
    },
    required() {
      this.setParentRequired();
    },
    placeholder() {
      this.setParentPlaceholder();
    }
  },
  methods: {
    onOpen() {
      if (this.lastSelected) {
        this.lastSelected.scrollIntoViewIfNeeded(true);
      }

      this.$emit('opened');
    },
    setParentDisabled() {
      this.parentContainer.isDisabled = this.disabled;
    },
    setParentRequired() {
      this.parentContainer.isRequired = this.required;
    },
    setParentPlaceholder() {
      this.parentContainer.hasPlaceholder = !!this.placeholder;
    },
    getSingleValue(value) {
      let output = {};

      Object.keys(this.options).forEach(index => {
        const options = this.options[index];

        if (options.value === value) {
          output.value = value;
          output.text = options.$refs.item.textContent, output.el = options.$refs.item;
        }
      });

      return output;
    },
    getMultipleValue(modelValue) {
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_utils_isArray__["a" /* default */])(this.value)) {
        let outputText = [];

        modelValue.forEach(value => {
          Object.keys(this.options).forEach(index => {
            const options = this.options[index];

            if (options.value === value) {
              let text = options.$refs.item.textContent;

              this.multipleOptions[index] = {
                value,
                text
              };
              outputText.push(text);
            }
          });
        });

        return {
          value: modelValue,
          text: outputText.join(', ')
        };
      }

      return {};
    },
    setTextAndValue(modelValue) {
      const output = this.multiple ? this.getMultipleValue(modelValue) : this.getSingleValue(modelValue);

      this.selectedValue = output.value;
      this.selectedText = output.text;
      this.lastSelected = output.el;

      if (this.parentContainer) {
        this.parentContainer.setValue(this.selectedText);
      }
    },
    changeValue(value) {
      this.$emit('input', value);
      this.$emit('change', value);
      this.$emit('selected', value);
    },
    selectMultiple(index, value, text) {
      let values = [];

      this.multipleOptions[index] = {
        value,
        text
      };

      for (var key in this.multipleOptions) {
        if (this.multipleOptions.hasOwnProperty(key) && this.multipleOptions[key].value) {
          values.push(this.multipleOptions[key].value);
        }
      }

      this.changeValue(values);
    },
    selectOption(value, text, el) {
      this.lastSelected = el;
      this.selectedText = text;
      this.setTextAndValue(value);
      this.changeValue(value);
    }
  },
  mounted() {
    this.parentContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-input-container');

    if (this.parentContainer) {
      this.setParentDisabled();
      this.setParentRequired();
      this.setParentPlaceholder();
      this.parentContainer.hasSelect = true;
    }

    this.setTextAndValue(this.value);
  },
  beforeDestroy() {
    if (this.parentContainer) {
      this.parentContainer.setValue('');
      this.parentContainer.hasSelect = false;
    }
  }
});

/***/ }),
/* 86 */
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
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-sidenav',
  data() {
    return {
      mdVisible: false
    };
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  props: {
    mdSwipeable: Boolean,
    mdSwipeThreshold: {
      type: Number,
      default: 15
    },
    mdSwipeDistance: {
      type: Number,
      default: 100
    }
  },
  computed: {
    classes() {
      return this.mdVisible && 'md-active';
    }
  },
  methods: {
    show() {
      this.open();
    },
    open() {
      this.mdVisible = true;
      this.$el.focus();
      this.$emit('open');
    },
    close() {
      this.mdVisible = false;
      this.$el.blur();
      this.$emit('close');
    },
    toggle() {
      if (this.mdVisible) {
        this.close();
      } else {
        this.open();
      }
    },
    isHorizontallyInside(positionX) {
      return positionX > 0 && positionX < this.mountedRect.left + this.mountedRect.width;
    },
    isVerticallyInside(positionY) {
      return positionY > 0 && positionY < this.mountedRect.top + this.mountedRect.height;
    },
    isFromStartWhenClosed(positionX) {
      if (this.mdVisible) {
        return true;
      }

      return positionX < this.mdSwipeThreshold;
    },
    handleTouchStart(event) {
      const positionX = event.touches[0].clientX - this.mountedRect.left;
      const positionY = event.touches[0].clientY - this.mountedRect.top;

      if (!this.isHorizontallyInside(positionX) || !this.isVerticallyInside(positionY) || !this.isFromStartWhenClosed(positionX)) {
        return;
      }

      this.initialTouchPosition = positionX;
      this.canMove = true;
    },
    handleTouchEnd() {
      this.canMove = false;
      this.initialTouchPosition = null;
    },
    handleTouchMove(event) {
      if (!this.canMove) {
        return;
      }

      const positionX = event.touches[0].clientX;

      const difference = this.mdVisible ? this.initialTouchPosition - positionX : positionX - this.initialTouchPosition;

      const action = this.mdVisible ? 'close' : 'open';

      if (difference > this.mdSwipeDistance) {
        this[action]();
      }
    }
  },
  mounted() {
    if (!this.mdSwipeable) {
      return;
    }

    this.mountedRect = this.$refs.backdrop.$el.getBoundingClientRect();
    this.initialTouchPosition = null;
    this.canMove = false;

    document.addEventListener('touchstart', this.handleTouchStart);
    document.addEventListener('touchend', this.handleTouchEnd);
    document.addEventListener('touchmove', this.handleTouchMove);
  },
  beforeDestroy() {
    if (!this.mdSwipeable) {
      return;
    }

    document.removeEventListener('touchstart', this.handleTouchStart);
    document.removeEventListener('touchend', this.handleTouchEnd);
    document.removeEventListener('touchmove', this.handleTouchMove);
  }
});

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_uniqueId__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_transitionEndEventName__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manager__ = __webpack_require__(135);
//
//
//
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
  name: 'md-snackbar',
  props: {
    id: [String, Number],
    mdPosition: {
      type: String,
      default: 'bottom center'
    },
    mdDuration: {
      type: [String, Number],
      default: 4000
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_2__core_components_mdTheme_mixin__["a" /* default */]],
  data() {
    return {
      snackbarId: this.id || 'snackbar-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_uniqueId__["a" /* default */])(),
      active: false,
      rootElement: {},
      snackbarElement: {},
      directionClass: null,
      closeTimeout: null
    };
  },
  computed: {
    classes() {
      let cssClasses = {
        'md-active': this.active
      };

      this.directionClass = this.mdPosition.replace(/ /g, '-');

      cssClasses['md-position-' + this.directionClass] = true;

      return cssClasses;
    }
  },
  watch: {
    active(active) {
      const directionClass = 'md-has-toast-' + this.directionClass;
      const toastClass = 'md-has-toast';

      if (active) {
        document.body.classList.add(directionClass);
        document.body.classList.add(toastClass);
      } else {
        document.body.classList.remove(directionClass);
        document.body.classList.remove(toastClass);
      }
    }
  },
  methods: {
    removeElement() {
      if (document.body.contains(this.snackbarElement)) {
        const activeRipple = this.snackbarElement.querySelector('.md-ripple.md-active');

        if (activeRipple) {
          activeRipple.classList.remove('md-active');
        }

        document.body.removeChild(this.snackbarElement);
      }
    },
    open() {
      if (__WEBPACK_IMPORTED_MODULE_3__manager__["a" /* default */].current) {
        __WEBPACK_IMPORTED_MODULE_3__manager__["a" /* default */].current.close();
      }

      __WEBPACK_IMPORTED_MODULE_3__manager__["a" /* default */].current = this;
      document.body.appendChild(this.snackbarElement);
      window.getComputedStyle(this.$refs.container).backgroundColor;
      this.active = true;
      this.$emit('open');
      this.closeTimeout = window.setTimeout(this.close, this.mdDuration);
      this.timeoutStartedAt = Date.now();
    },
    close() {
      if (this.$refs.container) {
        const removeElement = () => {
          this.$refs.container.removeEventListener(__WEBPACK_IMPORTED_MODULE_1__core_utils_transitionEndEventName__["a" /* default */], removeElement);
          this.removeElement();
        };

        __WEBPACK_IMPORTED_MODULE_3__manager__["a" /* default */].current = null;
        this.active = false;
        this.$emit('close');
        this.$refs.container.removeEventListener(__WEBPACK_IMPORTED_MODULE_1__core_utils_transitionEndEventName__["a" /* default */], removeElement);
        this.$refs.container.addEventListener(__WEBPACK_IMPORTED_MODULE_1__core_utils_transitionEndEventName__["a" /* default */], removeElement);
        window.clearTimeout(this.closeTimeout);
        this.pendingDuration = this.mdDuration;
      }
    },
    pauseTimeout() {
      this.pendingDuration = this.pendingDuration - (Date.now() - this.timeoutStartedAt);
      this.timeoutStartedAt = 0;
      window.clearTimeout(this.closeTimeout);
    },
    resumeTimeout() {
      this.timeoutStartedAt = Date.now();
      this.closeTimeout = window.setTimeout(this.close, this.pendingDuration);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.snackbarElement = this.$el;
      this.snackbarElement.parentNode.removeChild(this.snackbarElement);
      this.timeoutStartedAt = 0;
      this.pendingDuration = this.mdDuration;
    });
  },
  beforeDestroy() {
    window.clearTimeout(this.closeTimeout);
    this.removeElement();
  }
});

/***/ }),
/* 88 */
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
  name: 'md-speed-dial',
  props: {
    mdOpen: {
      type: String,
      default: 'click'
    },
    mdMode: {
      type: String,
      default: 'fling'
    },
    mdDirection: {
      type: String,
      default: 'top'
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data: () => ({
    fabTrigger: null,
    active: false
  }),
  computed: {
    classes() {
      let classes = {
        'md-active': this.active
      };

      classes['md-mode-' + this.mdMode] = true;
      classes['md-direction-' + this.mdDirection] = true;

      return classes;
    }
  },
  methods: {
    closeSpeedDial(event) {
      if (!event.target === this.fabTrigger || !this.fabTrigger.contains(event.target)) {
        this.active = false;
        document.body.removeEventListener('click', this.closeSpeedDial);
      }
    },
    toggleSpeedDial() {
      this.active = !this.active;

      window.setTimeout(() => {
        document.body.addEventListener('click', this.closeSpeedDial);
      }, 50);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.fabTrigger = this.$el.querySelector('[md-fab-trigger]');

      if (this.mdOpen === 'click') {
        this.fabTrigger.addEventListener('click', this.toggleSpeedDial);
      } else {
        this.$el.addEventListener('mouseenter', this.toggleSpeedDial);
        this.$el.addEventListener('mouseleave', this.closeSpeedDial);
      }
    });
  },
  beforeDestroy() {
    this.fabTrigger.removeEventListener('click', this.toggleSpeedDial);
    document.body.removeEventListener('click', this.closeSpeedDial);
  }
});

/***/ }),
/* 89 */
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
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-spinner',
  props: {
    mdSize: {
      type: Number,
      default: 50
    },
    mdStroke: {
      type: Number,
      default: 3.5
    },
    mdIndeterminate: Boolean,
    mdProgress: {
      type: Number,
      default: 0
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  computed: {
    classes() {
      return {
        'md-indeterminate': this.mdIndeterminate
      };
    },
    styles() {
      const newSize = this.mdSize + 'px';

      return {
        width: newSize,
        height: newSize
      };
    },
    dashProgress() {
      let progress = this.mdProgress * 125 / 100;

      if (this.mdIndeterminate) {
        return false;
      }

      if (progress >= 125) {
        progress = 130;
      }

      return `${progress}, 200`;
    }
  }
});

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_uniqueId__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
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
  name: 'md-step',
  props: {
    id: [String, Number],
    mdActive: Boolean,
    mdButtonBack: {
      type: String,
      default: 'BACK'
    },
    mdButtonContinue: {
      type: String,
      default: 'CONTINUE'
    },
    mdContinue: {
      type: Boolean,
      default: true
    },
    mdDisabled: Boolean,
    mdEditable: {
      type: Boolean,
      default: true
    },
    mdIcon: String,
    mdLabel: [String, Number],
    mdMessage: [String],
    mdToolTip: String,
    mdTooltipDelay: {
      type: String,
      default: '0'
    },
    mdTooltipDirection: {
      type: String,
      default: 'bottom'
    }
  },
  data() {
    return {
      index: 0,
      left: '0px',
      mounted: false,
      parentStepper: undefined,
      stepId: this.id || 'step-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_uniqueId__["a" /* default */])(),
      vertical: false,
      width: '0px'
    };
  },
  watch: {
    mdActive() {
      this.updateStepData();
    },
    mdContinue() {
      this.updateStepData();
    },
    mdEditable() {
      this.updateStepData();
    },
    mdDisabled() {
      this.updateStepData();
    },
    mdIcon() {
      this.updateStepData();
    },
    mdLabel() {
      this.updateStepData();
    },
    mdMessage() {
      this.updateStepData();
    },
    mdToolTip() {
      this.updateStepData();
    },
    mdTooltipDelay() {
      this.updateStepData();
    },
    mdTooltipDirection() {
      this.updateStepData();
    }
  },
  computed: {
    canGoBack() {
      if (this.index === 0) {
        return false;
      }

      if (!this.parentStepper) {
        return false;
      }

      var previousStep = this.parentStepper.getPreviousStep(this.stepId);

      if (previousStep !== undefined && !previousStep.editable) {
        return false;
      }

      return true;
    },
    continueText() {
      if (!this.parentStepper) {
        return this.mdButtonContinue;
      }

      if (this.index + 1 === this.parentStepper.getStepsCount() && this.mdButtonContinue === 'CONTINUE') {
        return 'FINISH';
      }

      return this.mdButtonContinue;
    },
    isCurrentStep() {
      return this.index === this.parentStepper.activeStepNumber;
    },
    styles() {
      if (this.vertical) {
        return {};
      }

      return {
        width: this.width,
        left: this.left
      };
    }
  },
  methods: {
    getStepData() {
      return {
        id: this.stepId,
        label: this.mdLabel,
        message: this.mdMessage,
        icon: this.mdIcon,
        active: this.mdActive,
        continue: this.mdContinue,
        editable: this.mdEditable,
        disabled: this.mdDisabled,
        toolTip: this.mdToolTip,
        tooltipDelay: this.mdTooltipDelay,
        tooltipDirection: this.mdTooltipDirection,
        ref: this
      };
    },
    moveNextStep() {
      this.parentStepper.moveNextStep();
    },
    movePreviousStep() {
      this.parentStepper.movePreviousStep();
    },
    setActiveStep() {
      this.parentStepper.setActiveStep(this.getStepData());
    },
    updateStepData() {
      this.parentStepper.updateStep(this.getStepData());
    }
  },
  mounted() {
    let stepData = this.getStepData();

    this.parentStepper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-stepper');

    if (!this.parentStepper) {
      throw new Error('You must wrap the md-step in a md-stepper');
    }

    this.mounted = true;
    this.parentStepper.updateStep(stepData);

    if (this.mdActive) {
      this.parentStepper.setActiveStep(stepData);
    }

    this.vertical = this.parentStepper.mdVertical;

    this.index = this.parentStepper.getStepIndex(this.stepId);
  },
  beforeDestroy() {
    this.parentStepper.unregisterStep(this.getStepData());
  }
});

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__ = __webpack_require__(4);
//
//
//
//
//
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
  props: {
    step: Object,
    mdAlternateLabels: Boolean
  },
  data() {
    return {
      index: Number,
      parentStepper: {}
    };
  },
  computed: {
    isCompleted() {
      return this.index < this.parentStepper.activeStepNumber;
    },
    getHeaderClasses() {
      return {
        'md-active': this.parentStepper.activeStep === this.step.id,
        'md-alternate-labels': this.mdAlternateLabels,
        'md-disabled': this.step.disabled,
        'md-has-sub-message': this.step.message,
        'md-primary': this.isCompleted
      };
    },
    icon() {
      if (!this.step.disabled && this.step.editable && this.isCompleted) {
        return 'mode_edit';
      }

      if (!this.step.disabled && this.isCompleted) {
        return 'check';
      }

      return this.step.icon;
    },
    stepNumber() {
      return this.index + 1;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.parentStepper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-stepper');

      if (!this.parentStepper) {
        this.$destroy();

        throw new Error('You should wrap the md-step-header in a md-stepper');
      }

      this.index = this.parentStepper.getStepIndex(this.step.id);
    });
  }
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_throttle__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'md-stepper',
  props: {
    mdAlternateLabels: {
      type: Boolean,
      default: false
    },
    mdElevation: {
      type: [String, Number],
      default: 1
    },
    mdVertical: {
      type: Boolean,
      default: false
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data: () => ({
    stepList: {},
    activeStep: null,
    activeStepNumber: 0,
    contentHeight: '0px',
    contentWidth: '0px'
  }),
  computed: {
    navigationClasses() {
      return {
        'md-alternate-labels': this.mdAlternateLabels
      };
    },
    stepsClasses() {
      return {
        'md-steps-vertical': this.mdVertical
      };
    }
  },
  methods: {
    getNextStep(id) {
      var currentIndex = this.getStepIndex(id);

      if (currentIndex === this.stepList.length) {
        return undefined;
      }

      var nextStepId = Object.keys(this.stepList)[currentIndex + 1];
      var nextStep = this.stepList[nextStepId];

      return nextStep;
    },
    getPreviousStep(id) {
      var currentIndex = this.getStepIndex(id);

      if (currentIndex === 0) {
        return undefined;
      }

      var previousStepId = Object.keys(this.stepList)[currentIndex - 1];
      var previousStep = this.stepList[previousStepId];

      return previousStep;
    },
    getStepsCount() {
      const idList = Object.keys(this.stepList);

      return idList.length;
    },
    getStepIndex(id) {
      const idList = Object.keys(this.stepList);

      return idList.indexOf(id);
    },
    registerStep(stepData) {
      this.$set(this.stepList, stepData.id, stepData);
    },
    moveNextStep() {
      if (this.activeStepNumber < this.getStepsCount() - 1) {
        var nextStep = this.getNextStep(this.activeStep);

        this.setActiveStep(nextStep);
      } else {
        this.$emit('completed');
      }
    },
    movePreviousStep() {
      if (this.activeStepNumber > 0 && this.activeStepNumber < this.getStepsCount()) {
        var prevStep = this.getPreviousStep(this.activeStep);

        this.setActiveStep(prevStep);
      }
    },
    setActiveStep(stepData) {
      if (this.activeStepNumber > this.getStepIndex(stepData.id) && !stepData.editable) {
        return;
      }

      this.activeStep = stepData.id;
      this.activeStepNumber = this.getStepIndex(this.activeStep);
      this.calculatePosition();
      this.$emit('change', this.activeStepNumber);
    },
    unregisterStep(stepData) {
      this.$delete(this.stepList, stepData.id);
    },
    updateStep(stepData) {
      this.registerStep(stepData);

      if (stepData.active) {
        if (!stepData.disabled) {
          this.setActiveStep(stepData);
        } else if (Object.keys(this.stepList).length) {
          let stepIds = Object.keys(this.stepList);
          let targetIndex = stepIds.indexOf(stepData.id) + 1;
          let target = stepIds[targetIndex];

          if (target) {
            this.setActiveStep(this.stepList[target]);
          } else {
            this.setActiveStep(this.stepList[0]);
          }
        }
      }
    },
    observeElementChanges() {
      this.parentObserver = new MutationObserver(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_throttle__["a" /* default */])(this.calculateOnWatch, 50));
      this.parentObserver.observe(this.$refs.stepContent, {
        childList: true,
        attributes: true,
        subtree: true
      });
    },
    calculateStepsWidthAndPosition() {
      if (!this.mdVertical) {
        const width = this.$el.offsetWidth;
        let index = 0;

        this.contentWidth = width * this.activeStepNumber + 'px';

        for (const stepId in this.stepList) {
          const step = this.stepList[stepId];

          step.ref.width = width + 'px';
          step.ref.left = width * index + 'px';
          index++;
        }
      } else {
        this.contentWidth = 'initial';
      }
    },
    calculateContentHeight() {
      this.$nextTick(() => {
        if (!this.mdVertical && Object.keys(this.stepList).length) {
          let height = this.stepList[this.activeStep].ref.$el.offsetHeight;

          this.contentHeight = height + 'px';
        } else {
          this.contentHeight = 'initial';
        }
      });
    },
    calculatePosition() {
      window.requestAnimationFrame(() => {
        this.calculateStepsWidthAndPosition();
        this.calculateContentHeight();
      });
    },
    debounceTransition() {
      window.clearTimeout(this.transitionControl);
      this.transitionControl = window.setTimeout(() => {
        this.calculatePosition();
        this.transitionOff = false;
      }, 200);
    },
    calculateOnWatch() {
      this.calculatePosition();
      this.debounceTransition();
    },
    calculateOnResize() {
      this.transitionOff = true;
      this.calculateOnWatch();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.observeElementChanges();
      window.addEventListener('resize', this.calculateOnResize);

      if (Object.keys(this.stepList).length && !this.activeStep) {
        let firstStep = Object.keys(this.stepList)[0];

        this.setActiveStep(this.stepList[firstStep]);
      }
    });
  },
  beforeDestroy() {
    if (this.parentObserver) {
      this.parentObserver.disconnect();
    }

    window.removeEventListener('resize', this.calculateOnResize);
  }
});

/***/ }),
/* 93 */
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
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-subheader',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]]
});

/***/ }),
/* 94 */
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
//
//
//
//
//
//
//
//
//
//



const checkedPosition = 75;
const initialPosition = '-1px';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-switch',
  props: {
    name: String,
    value: Boolean,
    id: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'button'
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data() {
    return {
      leftPos: initialPosition,
      checked: Boolean(this.value)
    };
  },
  computed: {
    classes() {
      return {
        'md-checked': this.checked,
        'md-disabled': this.disabled
      };
    },
    styles() {
      return {
        transform: `translate3D(${this.leftPos}, -50%, 0)`
      };
    }
  },
  watch: {
    checked() {
      this.setPosition();
    },
    value(value) {
      this.changeState(value);
    }
  },
  methods: {
    setPosition() {
      this.leftPos = this.checked ? checkedPosition + '%' : initialPosition;
    },
    changeState(checked, $event) {
      if (typeof $event !== 'undefined') {
        this.$emit('change', checked, $event);

        if (!$event.defaultPrevented) {
          this.checked = checked;
        }
        this.$emit('input', this.checked, $event);
      } else {
        this.checked = checked;
      }
    },
    toggle($event) {
      if (!this.disabled) {
        this.changeState(!this.checked, $event);
      }
    }
  },
  mounted() {
    this.$nextTick(this.setPosition);
  }
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__ = __webpack_require__(4);
//
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
  name: 'md-table',
  props: {
    mdSortType: String,
    mdSort: String
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data() {
    return {
      sortType: this.mdSortType,
      sortBy: this.mdSort,
      hasRowSelection: false,
      data: [],
      numberOfRows: 0,
      numberOfSelected: 0,
      selectedRows: {}
    };
  },
  methods: {
    emitSort(name) {
      this.sortBy = name;
      this.$emit('sort', {
        name,
        type: this.sortType
      });
    },
    emitSelection() {
      this.$emit('select', this.selectedRows);
    }
  },
  watch: {
    data() {
      this.numberOfRows = this.data.length;
    },
    selectedRows() {
      this.numberOfSelected = Object.keys(this.selectedRows).length;
    },
    mdSort() {
      this.sortBy = this.mdSort;
      this.$emit('sortInput');
    },
    mdSortType() {
      this.sortType = this.mdSortType;
      this.$emit('sortInput');
    }
  },
  mounted() {
    this.parentCard = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-table-card');

    if (this.parentCard) {
      this.parentCard.tableInstance = this;
    }
  }
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__ = __webpack_require__(4);
//
//
//
//
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
  name: 'md-table-alternate-header',
  props: {
    mdSelectedLabel: {
      type: String,
      default: 'selected'
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data() {
    return {
      classes: {},
      tableInstance: {}
    };
  },
  mounted() {
    this.parentCard = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-table-card');

    this.$nextTick(() => {
      this.tableInstance = this.parentCard.tableInstance;

      this.$watch('tableInstance.numberOfSelected', () => {
        this.$refs.counter.textContent = this.tableInstance.numberOfSelected;
        this.classes = {
          'md-active': this.tableInstance.numberOfSelected > 0
        };
      });
    });
  }
});

/***/ }),
/* 97 */
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-table-card',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]]
});

/***/ }),
/* 98 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-table-cell',
  props: {
    mdNumeric: Boolean
  },
  data: () => ({
    hasAction: false
  }),
  computed: {
    classes() {
      return {
        'md-numeric': this.mdNumeric,
        'md-has-action': this.hasAction
      };
    }
  },
  mounted() {
    if (this.$children.length > 0) {
      this.hasAction = true;
    }
  }
});

/***/ }),
/* 99 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-table-edit',
  props: {
    value: [String, Number],
    mdLarge: Boolean,
    mdId: String,
    mdName: String,
    mdPlaceholder: String,
    mdMaxlength: [Number, String]
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    triggerClasses() {
      return {
        'md-edited': this.value
      };
    },
    dialogClasses() {
      return {
        'md-active': this.active,
        'md-large': this.mdLarge
      };
    },
    realValue() {
      //console.log(this.value);
    }
  },
  methods: {
    openDialog() {
      this.active = true;
      this.$refs.input.$el.focus();
      document.addEventListener('click', this.closeDialogOnOffClick);
    },
    closeDialog() {
      if (this.active) {
        this.active = false;
        this.$refs.input.$el.blur();
        document.removeEventListener('click', this.closeDialogOnOffClick);
      }
    },
    closeDialogOnOffClick(event) {
      if (!this.$refs.dialog.contains(event.target)) {
        this.closeDialog();
      }
    },
    confirmDialog() {
      let value = this.$refs.input.$el.value;

      this.closeDialog();
      this.$emit('input', value);
      this.$emit('edited', value);
    }
  }
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__ = __webpack_require__(4);
//
//
//
//
//
//
//
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
  name: 'md-table-head',
  props: {
    mdNumeric: Boolean,
    mdSortBy: String,
    mdTooltip: String
  },
  data() {
    return {
      sortType: null,
      sorted: false,
      parentTable: {}
    };
  },
  computed: {
    classes() {
      const matchSort = this.hasMatchSort();

      if (!matchSort) {
        this.sorted = false;
      }

      return {
        'md-numeric': this.mdNumeric,
        'md-sortable': this.mdSortBy,
        'md-sorted': matchSort && this.sorted,
        'md-sorted-descending': matchSort && this.sortType === 'desc'
      };
    }
  },
  methods: {
    hasMatchSort() {
      return this.parentTable.sortBy === this.mdSortBy;
    },
    changeSort() {
      if (this.mdSortBy) {
        if (this.sortType === 'asc' && this.sorted) {
          this.sortType = 'desc';
        } else {
          this.sortType = 'asc';
        }

        this.sorted = true;

        this.parentTable.sortType = this.sortType;
        this.parentTable.emitSort(this.mdSortBy);
      }
    },
    initSort() {
      if (this.hasMatchSort()) {
        this.sorted = true;
        this.sortType = this.parentTable.sortType;
      }
    }
  },
  mounted() {
    this.parentTable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-table');
    this.initSort();
    this.parentTable.$on('sortInput', () => {
      this.initSort();
    });
  }
});

/***/ }),
/* 101 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-table-pagination',
  props: {
    mdSize: {
      type: [Number, String],
      default: 10
    },
    mdPageOptions: [Array, Boolean],
    mdPage: {
      type: [Number, String],
      default: 1
    },
    mdTotal: {
      type: [Number, String],
      default: 'Many'
    },
    mdLabel: {
      type: String,
      default: 'Rows per page'
    },
    mdSeparator: {
      type: String,
      default: 'of'
    }
  },
  data() {
    return {
      subTotal: 0,
      totalItems: 0,
      currentPage: 1,
      currentSize: parseInt(this.mdSize, 10)
    };
  },
  watch: {
    mdTotal(val) {
      const sub = this.currentPage * this.currentSize;

      this.subTotal = sub > val ? val : sub;
      this.totalItems = isNaN(val) ? Number.MAX_SAFE_INTEGER : parseInt(val, 10);
    },
    mdSize(val) {
      this.currentSize = parseInt(val, 10);
    },
    mdPage(val) {
      this.currentPage = parseInt(val, 10);
    }
  },
  computed: {
    lastPage() {
      return false;
    },
    shouldDisable() {
      return this.currentSize * this.currentPage >= this.totalItems;
    }
  },
  methods: {
    emitPaginationEvent() {
      if (this.canFireEvents) {
        const sub = this.currentPage * this.currentSize;

        this.subTotal = sub > this.mdTotal ? this.mdTotal : sub;
        this.$emit('pagination', {
          size: this.currentSize,
          page: this.currentPage
        });
      }
    },
    changeSize() {
      if (this.canFireEvents) {
        this.$emit('size', this.currentSize);
        this.emitPaginationEvent();
      }
    },
    previousPage() {
      if (this.canFireEvents) {
        this.currentPage--;
        this.$emit('page', this.currentPage);
        this.emitPaginationEvent();
      }
    },
    nextPage() {
      if (this.canFireEvents) {
        this.currentPage++;
        this.$emit('page', this.currentPage);
        this.emitPaginationEvent();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.subTotal = this.currentPage * this.currentSize;
      this.mdPageOptions = this.mdPageOptions || [10, 25, 50, 100];
      this.currentSize = this.mdPageOptions.includes(this.currentSize) ? this.currentSize : this.mdPageOptions[0];
      this.canFireEvents = true;
    });
  }
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//



const transitionClass = 'md-transition-off';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-table-row',
  props: {
    mdAutoSelect: Boolean,
    mdSelection: Boolean,
    mdItem: Object
  },
  data() {
    return {
      parentTable: {},
      headRow: false,
      checkbox: false,
      index: 0
    };
  },
  computed: {
    isDisabled() {
      return !this.mdSelection && !this.headRow;
    },
    hasSelection() {
      return this.mdSelection || this.headRow && this.parentTable.hasRowSelection;
    },
    classes() {
      return {
        'md-selected': this.checkbox
      };
    }
  },
  watch: {
    mdItem(newValue, oldValue) {
      this.parentTable.data[this.index] = this.mdItem;
      this.handleMultipleSelection(newValue === oldValue);
    }
  },
  methods: {
    setSelectedRow(value, index) {
      if (value) {
        this.parentTable.selectedRows[index] = this.parentTable.data[index];
        ++this.parentTable.numberOfSelected;
      } else {
        delete this.parentTable.selectedRows[index];
        --this.parentTable.numberOfSelected;
      }
    },
    handleSingleSelection(value) {
      this.setSelectedRow(value, this.index - 1);
      this.parentTable.$children[0].checkbox = this.parentTable.numberOfSelected === this.parentTable.numberOfRows;
    },
    handleMultipleSelection(value) {
      if (this.parentTable.numberOfRows > 25) {
        this.parentTable.$el.classList.add(transitionClass);
      }

      this.parentTable.$children.forEach((row, index) => {
        row.checkbox = value;

        if (!row.headRow) {
          this.setSelectedRow(value, index - 1);
        }
      });

      if (value) {
        this.parentTable.numberOfSelected = this.parentTable.numberOfRows;
      } else {
        this.parentTable.numberOfSelected = 0;
      }

      window.setTimeout(() => this.parentTable.$el.classList.remove(transitionClass));
    },
    select(value) {
      if (this.hasSelection) {
        if (this.headRow) {
          this.handleMultipleSelection(value);
        } else {
          this.handleSingleSelection(value);
        }

        this.parentTable.emitSelection();
      }
    },
    autoSelect() {
      if (this.mdAutoSelect && this.hasSelection) {
        this.checkbox = !this.checkbox;
        this.handleSingleSelection(this.checkbox);
        this.parentTable.emitSelection();
      }
    }
  },
  mounted() {
    this.parentTable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-table');

    if (this.$el.parentNode.tagName.toLowerCase() === 'thead') {
      this.headRow = true;
    } else {
      this.parentTable.numberOfRows++;
      this.index = this.parentTable.numberOfRows;

      if (this.mdSelection) {
        this.parentTable.hasRowSelection = true;
      }

      if (this.mdItem) {
        this.parentTable.data.push(this.mdItem);
      }
    }
  }
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_uniqueId__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__ = __webpack_require__(4);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-tab',
  props: {
    id: [String, Number],
    mdLabel: [String, Number],
    mdIcon: String,
    mdActive: Boolean,
    mdDisabled: Boolean,
    mdOptions: {
      default: undefined
    },
    mdTooltip: String,
    mdTooltipDelay: {
      type: String,
      default: '0'
    },
    mdTooltipDirection: {
      type: String,
      default: 'bottom'
    }
  },
  data() {
    return {
      mounted: false,
      tabId: this.id || 'tab-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_uniqueId__["a" /* default */])(),
      width: '0px',
      left: '0px'
    };
  },
  watch: {
    mdActive() {
      this.updateTabData();
    },
    mdDisabled() {
      this.updateTabData();
    },
    mdIcon() {
      this.updateTabData();
    },
    mdOptions: {
      deep: true,
      handler() {
        this.updateTabData();
      }
    },
    mdLabel() {
      this.updateTabData();
    },
    mdTooltip() {
      this.updateTabData();
    },
    mdTooltipDelay() {
      this.updateTabData();
    },
    mdTooltipDirection() {
      this.updateTabData();
    }
  },
  computed: {
    styles() {
      return {
        width: this.width,
        left: this.left
      };
    }
  },
  methods: {
    getTabData() {
      return {
        id: this.tabId,
        label: this.mdLabel,
        icon: this.mdIcon,
        options: this.mdOptions,
        active: this.mdActive,
        disabled: this.mdDisabled,
        tooltip: this.mdTooltip,
        tooltipDelay: this.mdTooltipDelay,
        tooltipDirection: this.mdTooltipDirection,
        ref: this
      };
    },
    updateTabData() {
      this.parentTabs.updateTab(this.getTabData());
    }
  },
  mounted() {
    let tabData = this.getTabData();

    this.parentTabs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-tabs');

    if (!this.parentTabs) {
      throw new Error('You must wrap the md-tab in a md-tabs');
    }

    this.mounted = true;
    this.parentTabs.updateTab(tabData);

    if (this.mdActive) {
      this.parentTabs.setActiveTab(tabData);
    }
  },
  beforeDestroy() {
    this.parentTabs.unregisterTab(this.getTabData());
  }
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_throttle__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'md-tabs',
  props: {
    mdFixed: Boolean,
    mdCentered: Boolean,
    mdRight: Boolean,
    mdDynamicHeight: {
      type: Boolean,
      default: true
    },
    mdElevation: {
      type: [String, Number],
      default: 0
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data: () => ({
    tabList: {},
    activeTab: null,
    activeTabNumber: 0,
    hasIcons: false,
    hasLabel: false,
    transitionControl: null,
    transitionOff: false,
    contentHeight: '0px',
    contentWidth: '0px'
  }),
  computed: {
    tabClasses() {
      return {
        'md-dynamic-height': this.mdDynamicHeight,
        'md-transition-off': this.transitionOff
      };
    },
    navigationClasses() {
      return {
        'md-has-icon': this.hasIcons,
        'md-has-label': this.hasLabel,
        'md-fixed': this.mdFixed,
        'md-right': !this.mdCentered && this.mdRight,
        'md-centered': this.mdCentered || this.mdFixed
      };
    },
    indicatorClasses() {
      let toLeft = this.lastIndicatorNumber > this.activeTabNumber;

      this.lastIndicatorNumber = this.activeTabNumber;

      return {
        'md-transition-off': this.transitionOff,
        'md-to-right': !toLeft,
        'md-to-left': toLeft
      };
    }
  },
  methods: {
    getHeaderClass(header) {
      return {
        'md-active': this.activeTab === header.id,
        'md-disabled': header.disabled
      };
    },
    registerTab(tabData) {
      this.$set(this.tabList, tabData.id, tabData);
    },
    unregisterTab(tabData) {
      this.$delete(this.tabList, tabData.id);
    },
    updateTab(tabData) {
      this.registerTab(tabData);

      if (tabData.active) {
        if (!tabData.disabled) {
          this.setActiveTab(tabData);
        } else if (Object.keys(this.tabList).length) {
          let tabsIds = Object.keys(this.tabList);
          let targetIndex = tabsIds.indexOf(tabData.id) + 1;
          let target = tabsIds[targetIndex];

          if (target) {
            this.setActiveTab(this.tabList[target]);
          } else {
            this.setActiveTab(this.tabList[0]);
          }
        }
      }
    },
    observeElementChanges() {
      this.parentObserver = new MutationObserver(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_throttle__["a" /* default */])(this.calculateOnWatch, 50));
      this.parentObserver.observe(this.$refs.tabContent, {
        childList: true,
        attributes: true,
        subtree: true
      });
    },
    getTabIndex(id) {
      const idList = Object.keys(this.tabList);

      return idList.indexOf(id);
    },
    calculateIndicatorPos() {
      if (this.$refs.tabHeader && this.$refs.tabHeader[this.activeTabNumber]) {
        const tabsWidth = this.$el.offsetWidth;
        const activeTab = this.$refs.tabHeader[this.activeTabNumber];
        const left = activeTab.offsetLeft - this.$refs.tabsContainer.scrollLeft;
        const right = tabsWidth - left - activeTab.offsetWidth;

        this.$refs.indicator.style.left = left + 'px';
        this.$refs.indicator.style.right = right + 'px';
      }
    },
    calculateTabsWidthAndPosition() {
      const width = this.$el.offsetWidth;
      let index = 0;

      this.contentWidth = width * this.activeTabNumber + 'px';

      for (const tabId in this.tabList) {
        const tab = this.tabList[tabId];

        tab.ref.width = width + 'px';
        tab.ref.left = width * index + 'px';
        index++;
      }
    },
    calculateContentHeight() {
      this.$nextTick(() => {
        if (Object.keys(this.tabList).length) {
          let height = this.tabList[this.activeTab].ref.$el.offsetHeight;

          this.contentHeight = height + 'px';
        }
      });
    },
    calculatePosition() {
      window.requestAnimationFrame(() => {
        this.calculateIndicatorPos();
        this.calculateTabsWidthAndPosition();
        this.calculateContentHeight();
      });
    },
    debounceTransition() {
      window.clearTimeout(this.transitionControl);
      this.transitionControl = window.setTimeout(() => {
        this.calculatePosition();
        this.transitionOff = false;
      }, 200);
    },
    calculateOnWatch() {
      this.calculatePosition();
      this.debounceTransition();
    },
    calculateOnResize() {
      this.transitionOff = true;
      this.calculateOnWatch();
    },
    setActiveTab(tabData) {
      this.hasIcons = !!tabData.icon;
      this.hasLabel = !!tabData.label;
      this.activeTab = tabData.id;
      this.activeTabNumber = this.getTabIndex(this.activeTab);
      this.calculatePosition();
      this.$emit('change', this.activeTabNumber);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.observeElementChanges();
      window.addEventListener('resize', this.calculateOnResize);

      if (Object.keys(this.tabList).length && !this.activeTab) {
        let firstTab = Object.keys(this.tabList)[0];

        this.setActiveTab(this.tabList[firstTab]);
      }
    });
  },
  beforeDestroy() {
    if (this.parentObserver) {
      this.parentObserver.disconnect();
    }

    window.removeEventListener('resize', this.calculateOnResize);
  }
});

/***/ }),
/* 105 */
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
  name: 'md-toolbar',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]]
});

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_transitionEndEventName__ = __webpack_require__(8);
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
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-whiteframe',
  props: {
    mdElevation: {
      type: [String, Number],
      default: 1
    },
    mdTag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    classes() {
      let numberedElevation = parseInt(this.mdElevation, 10);
      let elevationClass = 'md-whiteframe-';

      if (!isNaN(numberedElevation) && typeof numberedElevation === 'number') {
        elevationClass += numberedElevation;
        elevationClass += 'dp';
      } else if (this.mdElevation.indexOf('dp') > -1) {
        elevationClass += this.mdElevation;
      }

      return elevationClass;
    }
  },
  render(createElement) {
    return createElement(this.mdTag, {
      staticClass: 'md-whiteframe',
      class: this.classes
    }, this.$slots.default);
  }
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_supportsPassiveEvent__ = __webpack_require__(154);
//
//
//
//
//
//
//
//



const passiveEvent = __WEBPACK_IMPORTED_MODULE_0__utils_supportsPassiveEvent__["a" /* default */] ? { passive: true } : false;

const addEvent = (target, type, handler) => {
  if (type === 'start') {
    target.addEventListener('mousedown', handler, passiveEvent);
    target.addEventListener('touchstart', handler, passiveEvent);
  } else {
    target.addEventListener('mouseup', handler, passiveEvent);
    target.addEventListener('touchend', handler, passiveEvent);
  }
};
const removeEvent = (target, type, handler) => {
  if (type === 'start') {
    target.removeEventListener('mousedown', handler);
    target.removeEventListener('touchstart', handler);
  } else {
    target.removeEventListener('mouseup', handler);
    target.removeEventListener('touchend', handler);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-ink-ripple',
  props: {
    mdDisabled: Boolean
  },
  data: () => ({
    mounted: false,
    rippleElement: null,
    parentElement: null,
    parentDimensions: {
      width: null,
      height: null,
      top: null,
      left: null
    },
    awaitingComplete: false,
    hasCompleted: false,
    fadeOut: false,
    active: false
  }),
  computed: {
    classes() {
      return {
        'md-fadeout': this.fadeOut,
        'md-active': this.active
      };
    },
    styles() {
      return {
        width: this.parentDimensions.width,
        height: this.parentDimensions.height,
        top: this.parentDimensions.top,
        left: this.parentDimensions.left
      };
    },
    disabled() {
      return this.mdDisabled || !this.$material.inkRipple;
    }
  },
  watch: {
    disabled(disabled) {
      if (!disabled) {
        this.init();
      } else {
        this.destroy();
      }
    }
  },
  methods: {
    checkAvailablePositions(element) {
      const availablePositions = ['relative', 'absolute', 'fixed'];

      return availablePositions.indexOf(getComputedStyle(element).position) > -1;
    },
    getClosestPositionedParent(element) {
      const parent = element && element.parentNode;

      if (!parent || parent.tagName.toLowerCase() === 'body') {
        return false;
      }

      if (this.checkAvailablePositions(element)) {
        return element;
      }

      return this.getClosestPositionedParent(parent);
    },
    getParentSize() {
      const parent = this.parentElement;

      return Math.round(Math.max(parent.offsetWidth, parent.offsetHeight)) + 'px';
    },
    getClickPosition(event) {
      if (this.$refs.ripple) {
        const rect = this.parentElement.getBoundingClientRect();
        let top = event.pageY;
        let left = event.pageX;

        if (event.type === 'touchstart') {
          top = event.changedTouches[0].pageY;
          left = event.changedTouches[0].pageX;
        }

        return {
          top: top - rect.top - this.$refs.ripple.offsetHeight / 2 - document.body.scrollTop + 'px',
          left: left - rect.left - this.$refs.ripple.offsetWidth / 2 - document.body.scrollLeft + 'px'
        };
      }

      return false;
    },
    setDimensions() {
      const size = this.getParentSize();

      this.parentDimensions.width = size;
      this.parentDimensions.height = size;
    },
    setPositions(event) {
      const positions = this.getClickPosition(event);

      if (positions) {
        this.parentDimensions.top = positions.top;
        this.parentDimensions.left = positions.left;
      }
    },
    clearState() {
      this.active = false;
      this.fadeOut = false;
      this.hasCompleted = false;
      this.setDimensions();
      window.clearTimeout(this.awaitingComplete);
      removeEvent(document.body, 'end', this.endRipple);
    },
    startRipple(event) {
      if (event.type === 'touchstart') {
        this.previous.push('touch');
      } else {
        this.previous.push('mouse');
      }

      this.previous = this.previous.splice(this.previous.length - 2, this.previous.length);

      if (this.previous.length >= 2 && this.previous[1] === 'touch' && this.previous[0] === 'mouse') {
        return;
      }

      this.clearState();
      this.awaitingComplete = window.setTimeout(() => {
        this.hasCompleted = true;
      }, 400);

      addEvent(document.body, 'end', this.endRipple);

      this.$nextTick(() => {
        this.setPositions(event);
        this.active = true;
      });
    },
    endRipple() {
      if (this.hasCompleted) {
        this.fadeOut = true;
      } else {
        this.awaitingComplete = window.setTimeout(() => {
          this.fadeOut = true;
        }, 200);
      }

      removeEvent(document.body, 'end', this.endRipple);
    },
    registerTriggerEvent() {
      addEvent(this.parentElement, 'start', this.startRipple);
    },
    unregisterTriggerEvent() {
      if (this.parentElement) {
        removeEvent(this.parentElement, 'start', this.startRipple);
      }
    },
    init() {
      this.parentElement = this.getClosestPositionedParent(this.$el.parentNode);
      this.previous = ['mouse'];

      if (this.parentElement) {
        this.rippleElement.parentNode.removeChild(this.rippleElement);

        if (this.parentElement.querySelectorAll('.md-ink-ripple').length > 0) {
          this.$destroy();
        } else {
          this.parentElement.appendChild(this.rippleElement);
          this.registerTriggerEvent();
          this.setDimensions();
        }
      } else {
        this.$destroy();
      }
    },
    destroy() {
      if (this.rippleElement && this.rippleElement.parentNode) {
        this.unregisterTriggerEvent();
        this.rippleElement.parentNode.removeChild(this.rippleElement);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.rippleElement = this.$el;

      if (!this.disabled) {
        this.init();
      } else {
        this.destroy();
      }

      this.mounted = true;
    });
  },
  beforeDestroy() {
    this.destroy();
  }
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-theme',
  props: {
    mdTag: String,
    mdName: {
      type: String,
      default: 'default'
    }
  },
  render(createElement) {
    if (this.mdTag || this.$slots.default.length > 1) {
      return createElement(this.mdTag || 'div', {
        staticClass: this.$material.prefix + this.mdName
      }, this.$slots.default);
    }

    return this.$slots.default[0];
  },
  watch: {
    mdName(value) {
      this.$material.useTheme(value);
    }
  },
  beforeMount() {
    const localTheme = this.mdName;

    if (localTheme) {
      this.$material.useTheme(localTheme);
    }
  }
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PageContent__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PageContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_PageContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_DocsComponent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_DocsComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_DocsComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ExampleBox__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ExampleBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_ExampleBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ApiTable__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ApiTable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_ApiTable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CodeBlock__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CodeBlock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_CodeBlock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ReleaseVersion__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ReleaseVersion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_ReleaseVersion__);
/* Third Party */



/* Configs */











__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('page-content', __WEBPACK_IMPORTED_MODULE_5__components_PageContent___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('docs-component', __WEBPACK_IMPORTED_MODULE_6__components_DocsComponent___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('example-box', __WEBPACK_IMPORTED_MODULE_7__components_ExampleBox___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('api-table', __WEBPACK_IMPORTED_MODULE_8__components_ApiTable___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('code-block', __WEBPACK_IMPORTED_MODULE_9__components_CodeBlock___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('release-version', __WEBPACK_IMPORTED_MODULE_10__components_ReleaseVersion___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'hash',
  base: window.location.pathname,
  routes: __WEBPACK_IMPORTED_MODULE_3__routes_js__["a" /* default */]
});

var Docs = __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('app', __WEBPACK_IMPORTED_MODULE_4__App___default.a);
var handleSectionTheme = function handleSectionTheme(currentRoute) {
  var theme = 'default';
  var name = currentRoute.name;

  if (name) {
    if (name === 'getting-started') {
      theme = 'indigo';
    } else if (name.indexOf('themes') >= 0) {
      theme = 'cyan';
    } else if (name.indexOf('ui-elements') >= 0) {
      theme = 'purple';
    } else if (name === 'changelog') {
      theme = 'orange';
    } else if (name === 'about') {
      theme = 'green';
    } else if (name === 'error') {
      theme = 'red';
    }
  }

  __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].material.setCurrentTheme(theme);
};

Docs = new Docs({
  el: '#app',
  router: router
});

handleSectionTheme(router.currentRoute);

router.beforeEach((function (to, from, next) {
  __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].nextTick((function () {
    var mainContent = document.querySelector('.main-content');

    if (mainContent) {
      mainContent.scrollTop = 0;
    }

    Docs.closeSidenav();

    next();
  }));
}));

router.afterEach((function (to) {
  handleSectionTheme(to);
}));

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdAvatar_vue__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdAvatar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdAvatar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdAvatar_theme__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdAvatar_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdAvatar_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-avatar', __WEBPACK_IMPORTED_MODULE_0__mdAvatar_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdAvatar_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdBackdrop_vue__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdBackdrop_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdBackdrop_vue__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;


function install(Vue) {
  Vue.component('md-backdrop', __WEBPACK_IMPORTED_MODULE_0__mdBackdrop_vue___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdBottomBar_vue__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdBottomBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdBottomBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdBottomBarItem_vue__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdBottomBarItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdBottomBarItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdBottomBar_theme__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdBottomBar_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdBottomBar_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;




function install(Vue) {
  Vue.component('md-bottom-bar', __WEBPACK_IMPORTED_MODULE_0__mdBottomBar_vue___default.a);
  Vue.component('md-bottom-bar-item', __WEBPACK_IMPORTED_MODULE_1__mdBottomBarItem_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_2__mdBottomBar_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdButtonToggle_vue__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdButtonToggle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdButtonToggle_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdButtonToggle_theme__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdButtonToggle_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdButtonToggle_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-button-toggle', __WEBPACK_IMPORTED_MODULE_0__mdButtonToggle_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdButtonToggle_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdButton_vue__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdButton_theme__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdButton_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdButton_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-button', __WEBPACK_IMPORTED_MODULE_0__mdButton_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdButton_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdCard_vue__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdCardMedia_vue__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdCardMedia_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdCardMedia_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdCardMediaCover_vue__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdCardMediaCover_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdCardMediaCover_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdCardMediaActions_vue__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdCardMediaActions_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mdCardMediaActions_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdCardHeader_vue__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdCardHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__mdCardHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdCardHeaderText_vue__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdCardHeaderText_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__mdCardHeaderText_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdCardContent_vue__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdCardContent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__mdCardContent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdCardActions_vue__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdCardActions_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__mdCardActions_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mdCardArea_vue__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mdCardArea_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__mdCardArea_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mdCardExpand_vue__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mdCardExpand_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__mdCardExpand_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mdCard_theme__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mdCard_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__mdCard_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;












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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdCheckbox_vue__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdCheckbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdCheckbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdCheckbox_theme__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdCheckbox_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdCheckbox_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-checkbox', __WEBPACK_IMPORTED_MODULE_0__mdCheckbox_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdCheckbox_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdChips_vue__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdChips_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdChips_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdChip_vue__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdChip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdChip_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdChips_theme__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdChips_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdChips_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;




function install(Vue) {
  Vue.component('md-chips', __WEBPACK_IMPORTED_MODULE_0__mdChips_vue___default.a);
  Vue.component('md-chip', __WEBPACK_IMPORTED_MODULE_1__mdChip_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_2__mdChips_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdDatePicker_vue__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdDatePicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdDatePicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdDatePicker_theme__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdDatePicker_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdDatePicker_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-datepicker', Vue.extend(__WEBPACK_IMPORTED_MODULE_0__mdDatePicker_vue___default.a));

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdDatePicker_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdDialog_vue__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdDialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdDialog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdDialogTitle_vue__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdDialogTitle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdDialogTitle_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdDialogContent_vue__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdDialogContent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdDialogContent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdDialogActions_vue__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdDialogActions_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mdDialogActions_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presets_mdDialogAlert_vue__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presets_mdDialogAlert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__presets_mdDialogAlert_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__presets_mdDialogConfirm_vue__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__presets_mdDialogConfirm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__presets_mdDialogConfirm_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__presets_mdDialogPrompt_vue__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__presets_mdDialogPrompt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__presets_mdDialogPrompt_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdDialog_theme__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdDialog_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__mdDialog_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;









function install(Vue) {
  Vue.component('md-dialog', __WEBPACK_IMPORTED_MODULE_0__mdDialog_vue___default.a);
  Vue.component('md-dialog-title', __WEBPACK_IMPORTED_MODULE_1__mdDialogTitle_vue___default.a);
  Vue.component('md-dialog-content', __WEBPACK_IMPORTED_MODULE_2__mdDialogContent_vue___default.a);
  Vue.component('md-dialog-actions', __WEBPACK_IMPORTED_MODULE_3__mdDialogActions_vue___default.a);

  /* Presets */
  Vue.component('md-dialog-alert', __WEBPACK_IMPORTED_MODULE_4__presets_mdDialogAlert_vue___default.a);
  Vue.component('md-dialog-confirm', __WEBPACK_IMPORTED_MODULE_5__presets_mdDialogConfirm_vue___default.a);
  Vue.component('md-dialog-prompt', __WEBPACK_IMPORTED_MODULE_6__presets_mdDialogPrompt_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_7__mdDialog_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdDivider_vue__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdDivider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdDivider_vue__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;


function install(Vue) {
  Vue.component('md-divider', __WEBPACK_IMPORTED_MODULE_0__mdDivider_vue___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdFile_vue__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdFile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdFile_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdFile_theme__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdFile_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdFile_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-file', __WEBPACK_IMPORTED_MODULE_0__mdFile_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdFile_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdIcon_vue__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdIcon_theme__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdIcon_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdIcon_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-icon', __WEBPACK_IMPORTED_MODULE_0__mdIcon_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdIcon_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdImage_vue__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdImage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdImage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdImage_theme__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdImage_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdImage_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-image', __WEBPACK_IMPORTED_MODULE_0__mdImage_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdImage_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdInputContainer_vue__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdInputContainer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdInputContainer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdInput_vue__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdInput_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdTextarea_vue__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdTextarea_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdTextarea_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdInputContainer_theme__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdInputContainer_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mdInputContainer_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;





function install(Vue) {
  Vue.component('md-input-container', __WEBPACK_IMPORTED_MODULE_0__mdInputContainer_vue___default.a);
  Vue.component('md-input', __WEBPACK_IMPORTED_MODULE_1__mdInput_vue___default.a);
  Vue.component('md-textarea', __WEBPACK_IMPORTED_MODULE_2__mdTextarea_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_3__mdInputContainer_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdLayout_vue__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdLayout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdLayout_vue__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;


function install(Vue) {
  Vue.component('md-layout', __WEBPACK_IMPORTED_MODULE_0__mdLayout_vue___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdList_vue__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdListItem_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdListExpand_vue__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdListExpand_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdListExpand_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdList_theme__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdList_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mdList_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;





function install(Vue) {
  Vue.component('md-list', __WEBPACK_IMPORTED_MODULE_0__mdList_vue___default.a);
  Vue.component('md-list-item', __WEBPACK_IMPORTED_MODULE_1__mdListItem_js__["a" /* default */]);
  Vue.component('md-list-expand', __WEBPACK_IMPORTED_MODULE_2__mdListExpand_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_3__mdList_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdListItemButton__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdListItemButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdListItemButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdListItemLink__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdListItemLink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdListItemLink__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdListItemRouter__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdListItemRouter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdListItemRouter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdListItemExpand__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdListItemExpand___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mdListItemExpand__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdListItemDefault__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdListItemDefault___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__mdListItemDefault__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };







/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: {
    href: String,
    disabled: Boolean
  },
  render: function render(createElement, _ref) {
    var children = _ref.children,
        data = _ref.data,
        props = _ref.props;

    var getItemComponent = function getItemComponent() {
      var nativeOn = data.nativeOn;
      var interactionEvents = ['contextmenu', 'dblclick', 'dragend', 'mousedown', 'touchstart', 'click'];
      var childrenCount = children.length;

      if (props.href) {
        return __WEBPACK_IMPORTED_MODULE_1__mdListItemLink___default.a;
      }

      if (nativeOn) {
        var counter = interactionEvents.length;

        while (counter--) {
          if (nativeOn[interactionEvents[counter]]) {
            return __WEBPACK_IMPORTED_MODULE_0__mdListItemButton___default.a;
          }
        }
      }

      while (childrenCount--) {
        var options = children[childrenCount].componentOptions;

        if (options) {
          if (options.tag === 'md-list-expand') {
            var _ret = (function () {
              var expandComponent = children[childrenCount];

              data.scopedSlots = {
                expand: function expand() {
                  return expandComponent;
                }
              };

              children.splice(childrenCount, 1);

              return {
                v: __WEBPACK_IMPORTED_MODULE_3__mdListItemExpand___default.a
              };
            })();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
          } else if (options.tag === 'router-link') {
            children[childrenCount].data.staticClass = 'md-list-item-container md-button';

            return __WEBPACK_IMPORTED_MODULE_2__mdListItemRouter___default.a;
          }
        }
      }

      return __WEBPACK_IMPORTED_MODULE_4__mdListItemDefault___default.a;
    };

    return createElement(getItemComponent(), _extends({ props: props }, data), children);
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdMenu_vue__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdMenuItem_vue__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdMenuItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdMenuItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdMenuContent_vue__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdMenuContent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdMenuContent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdMenu_theme__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdMenu_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mdMenu_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;





function install(Vue) {
  Vue.component('md-menu', __WEBPACK_IMPORTED_MODULE_0__mdMenu_vue___default.a);
  Vue.component('md-menu-item', __WEBPACK_IMPORTED_MODULE_1__mdMenuItem_vue___default.a);
  Vue.component('md-menu-content', __WEBPACK_IMPORTED_MODULE_2__mdMenuContent_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_3__mdMenu_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdProgress_vue__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdProgress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdProgress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdProgress_theme__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdProgress_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdProgress_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-progress', __WEBPACK_IMPORTED_MODULE_0__mdProgress_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdProgress_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdRadio_vue__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdRadio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdRadio_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdRadio_theme__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdRadio_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdRadio_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-radio', __WEBPACK_IMPORTED_MODULE_0__mdRadio_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdRadio_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSelect_vue__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSelect_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdSelect_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdOption_vue__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdOption_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdOption_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdSelect_theme__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdSelect_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdSelect_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;




function install(Vue) {
  Vue.component('md-select', __WEBPACK_IMPORTED_MODULE_0__mdSelect_vue___default.a);
  Vue.component('md-option', __WEBPACK_IMPORTED_MODULE_1__mdOption_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_2__mdSelect_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSidenav_vue__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSidenav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdSidenav_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSidenav_theme__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSidenav_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdSidenav_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-sidenav', __WEBPACK_IMPORTED_MODULE_0__mdSidenav_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdSidenav_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSnackbar_vue__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSnackbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdSnackbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSnackbar_theme__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSnackbar_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdSnackbar_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-snackbar', __WEBPACK_IMPORTED_MODULE_0__mdSnackbar_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdSnackbar_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);


var manager = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  data: function data() {
    return {
      current: null
    };
  }
});

/* harmony default export */ __webpack_exports__["a"] = (manager);
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSpeedDial_vue__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSpeedDial_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdSpeedDial_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSpeedDial_theme__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSpeedDial_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdSpeedDial_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-speed-dial', __WEBPACK_IMPORTED_MODULE_0__mdSpeedDial_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdSpeedDial_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSpinner_vue__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdSpinner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSpinner_theme__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSpinner_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdSpinner_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-spinner', __WEBPACK_IMPORTED_MODULE_0__mdSpinner_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdSpinner_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdStepper_vue__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdStepper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdStepper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdStep_vue__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdStep_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdStep_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdStepHeaderContainer_js__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdStepHeader_vue__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdStepHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mdStepHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdStepper_theme__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdStepper_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__mdStepper_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;






function install(Vue) {
  Vue.component('md-stepper', __WEBPACK_IMPORTED_MODULE_0__mdStepper_vue___default.a);
  Vue.component('md-step', __WEBPACK_IMPORTED_MODULE_1__mdStep_vue___default.a);
  Vue.component('md-step-header-container', __WEBPACK_IMPORTED_MODULE_2__mdStepHeaderContainer_js__["a" /* default */]);
  Vue.component('md-step-header', __WEBPACK_IMPORTED_MODULE_3__mdStepHeader_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_4__mdStepper_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_uniqueId__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: {
    mdVertical: {
      type: Boolean,
      default: false
    }
  },
  render: function render(createElement, _ref) {
    var children = _ref.children,
        props = _ref.props;

    var insertDividerIntoArray = function insertDividerIntoArray(arr) {
      return arr.reduce((function (result, element, index, array) {

        result.push(element);

        if (index < array.length - 1) {
          var mdDivider = createElement('md-divider', { key: 'divider-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_uniqueId__["a" /* default */])() });

          result.push(mdDivider);
        }

        return result;
      }), []);
    };

    if (!props.mdVertical) {
      children = insertDividerIntoArray(children);
    }

    return createElement('div', { class: 'md-steps-navigation-container' }, children);
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSubheader_vue__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSubheader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdSubheader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSubheader_theme__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSubheader_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdSubheader_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-subheader', __WEBPACK_IMPORTED_MODULE_0__mdSubheader_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdSubheader_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSwitch_vue__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSwitch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdSwitch_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSwitch_theme__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSwitch_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdSwitch_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-switch', __WEBPACK_IMPORTED_MODULE_0__mdSwitch_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdSwitch_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdTable_vue__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdTable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdTable_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdTableRow_vue__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdTableRow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdTableRow_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdTableHead_vue__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdTableHead_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdTableHead_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdTableCell_vue__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdTableCell_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mdTableCell_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdTableEdit_vue__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdTableEdit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__mdTableEdit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdTableCard_vue__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdTableCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__mdTableCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdTableAlternateHeader_vue__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdTableAlternateHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__mdTableAlternateHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdTablePagination_vue__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdTablePagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__mdTablePagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mdTable_theme__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mdTable_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__mdTable_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;










function install(Vue) {
  Vue.component('md-table', __WEBPACK_IMPORTED_MODULE_0__mdTable_vue___default.a);
  Vue.component('md-table-header', {
    functional: true,
    render: function render(h, scope) {
      return h('thead', {
        staticClass: 'md-table-header'
      }, scope.children);
    }
  });
  Vue.component('md-table-body', {
    functional: true,
    render: function render(h, scope) {
      return h('tbody', {
        staticClass: 'md-table-body'
      }, scope.children);
    }
  });
  Vue.component('md-table-row', __WEBPACK_IMPORTED_MODULE_1__mdTableRow_vue___default.a);
  Vue.component('md-table-head', __WEBPACK_IMPORTED_MODULE_2__mdTableHead_vue___default.a);
  Vue.component('md-table-cell', __WEBPACK_IMPORTED_MODULE_3__mdTableCell_vue___default.a);
  Vue.component('md-table-edit', __WEBPACK_IMPORTED_MODULE_4__mdTableEdit_vue___default.a);
  Vue.component('md-table-card', __WEBPACK_IMPORTED_MODULE_5__mdTableCard_vue___default.a);
  Vue.component('md-table-pagination', __WEBPACK_IMPORTED_MODULE_7__mdTablePagination_vue___default.a);
  Vue.component('md-table-alternate-header', __WEBPACK_IMPORTED_MODULE_6__mdTableAlternateHeader_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_8__mdTable_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdTabs_vue__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdTab_vue__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdTabs_theme__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdTabs_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdTabs_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;




function install(Vue) {
  Vue.component('md-tabs', __WEBPACK_IMPORTED_MODULE_0__mdTabs_vue___default.a);
  Vue.component('md-tab', __WEBPACK_IMPORTED_MODULE_1__mdTab_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_2__mdTabs_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdToolbar_vue__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdToolbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdToolbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdToolbar_theme__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdToolbar_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdToolbar_theme__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;



function install(Vue) {
  Vue.component('md-toolbar', __WEBPACK_IMPORTED_MODULE_0__mdToolbar_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdToolbar_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdTooltip_vue__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdTooltip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdTooltip_vue__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;


function install(Vue) {
  Vue.component('md-tooltip', __WEBPACK_IMPORTED_MODULE_0__mdTooltip_vue___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdWhiteframe_vue__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdWhiteframe_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdWhiteframe_vue__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;


function install(Vue) {
  Vue.component('md-whiteframe', __WEBPACK_IMPORTED_MODULE_0__mdWhiteframe_vue___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdInkRipple_vue__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdInkRipple_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdInkRipple_vue__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;


function install(Vue) {
  Vue.component('md-ink-ripple', __WEBPACK_IMPORTED_MODULE_0__mdInkRipple_vue___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return changeHtmlMetaColor; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return createNewStyleElement; }));
var changeHtmlMetaColor;
var createNewStyleElement;

if (__webpack_require__.i({"NODE_ENV":"production"}).VUE_ENV !== 'server') {
  changeHtmlMetaColor = function changeHtmlMetaColor(color, themeClass, previousClass) {
    var elem = document.querySelector('meta[name="theme-color"]');

    if (elem) {
      elem.setAttribute('content', color);
    } else {
      elem = document.createElement('meta');
      elem.setAttribute('name', 'theme-color');
      elem.setAttribute('content', color);

      document.head.appendChild(elem);
    }

    document.body.classList.remove(previousClass);
    document.body.classList.add(themeClass);
  };

  createNewStyleElement = function createNewStyleElement(style, styleId) {
    var head = document.head;
    var styleElement = head.querySelector('#' + styleId);

    if (!styleElement) {
      var newTag = document.createElement('style');

      newTag.type = 'text/css';
      newTag.id = styleId;
      newTag.textContent = style;

      head.appendChild(newTag);
    } else {
      styleElement.textContent = style;
    }
  };
}

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__palette__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgba__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdTheme__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdTheme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom__ = __webpack_require__(148);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;





var VALID_THEME_TYPE = ['primary', 'accent', 'background', 'warn', 'hue-1', 'hue-2', 'hue-3'];
var TYPE_REGEX = new RegExp('(' + VALID_THEME_TYPE.join('|').toUpperCase() + ')-(COLOR|CONTRAST)-?(A?\\d*)-?(\\d*\\.?\\d+)?', 'g');
var DEFAULT_THEME_COLORS = {
  primary: 'indigo',
  accent: 'pink',
  background: 'white',
  warn: 'deep-orange'
};
/*const DEFAULT_HUES = {
  accent: {
    'hue-1': 'A100',
    'hue-2': 'A400',
    'hue-3': 'A700'
  },
  background: {
    'hue-1': 'A100',
    'hue-2': '100',
    'hue-3': '300'
  }
};*/

var registeredPrimaryColor = {};
var injectedStyles = {};

var parseStyle = function parseStyle(style, theme, name) {
  return style.replace(TYPE_REGEX, (function (match, type, colorType, hue, opacity) {
    var color = void 0;
    var colorVariant = +hue === 0 ? 500 : hue;

    type = type.toLowerCase();

    if (theme[type]) {
      if (typeof theme[type] === 'string') {
        color = __WEBPACK_IMPORTED_MODULE_0__palette__["a" /* default */][theme[type]];
      } else {
        color = __WEBPACK_IMPORTED_MODULE_0__palette__["a" /* default */][theme[type].color] || __WEBPACK_IMPORTED_MODULE_0__palette__["a" /* default */][DEFAULT_THEME_COLORS[type]];
        colorVariant = +hue === 0 ? theme[type].hue : hue;
      }
    } else {
      color = __WEBPACK_IMPORTED_MODULE_0__palette__["a" /* default */][DEFAULT_THEME_COLORS[type]];
    }

    if (colorType === 'COLOR') {
      var isDefault = __WEBPACK_IMPORTED_MODULE_0__palette__["a" /* default */][theme[type]];

      if (!colorVariant && !isDefault) {
        if (type === 'accent') {
          colorVariant = 'A200';
        } else if (type === 'background') {
          colorVariant = 50;
        }
      }

      if (type === 'primary') {
        registeredPrimaryColor[name] = color[colorVariant];
      }

      if (opacity) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__rgba__["a" /* default */])(color[colorVariant], opacity);
      }

      return color[colorVariant];
    }

    var isDarkText = color.darkText.indexOf(colorVariant) >= 0;

    if (theme[type] && typeof theme[type] !== 'string' && theme[type].textColor) {
      if (theme[type].textColor === 'black') {
        isDarkText = true;
      } else if (theme[type].textColor === 'white') {
        isDarkText = false;
      }
    }

    if (isDarkText) {
      if (opacity) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__rgba__["a" /* default */])('#000', opacity);
      }

      return 'rgba(0, 0, 0, .87)';
    }

    if (opacity) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__rgba__["a" /* default */])('#fff', opacity);
    }

    return 'rgba(255, 255, 255, .87)';
  }));
};

function warnNotFound(themeName) {
  console.warn('The theme \'' + themeName + '\' doesn\'t exists. You need to register' + ' it first in order to use.');
}

function injectStyle(style, spec, name, styleId) {
  if (__WEBPACK_IMPORTED_MODULE_3__dom__["a" /* createNewStyleElement */]) {
    style = parseStyle(style, spec, name);
    style = style.replace(/THEME_NAME/g, styleId);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dom__["a" /* createNewStyleElement */])(style, styleId);
  }
}

function install(Vue) {
  Vue.material = new Vue({
    data: {
      currentTheme: null,
      inkRipple: true,
      prefix: 'md-theme-',
      styles: [],
      themes: {
        default: DEFAULT_THEME_COLORS
      },
      locale: {
        startYear: 1900,
        endYear: 2099,
        dateFormat: 'YYYY-MM-DD',
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        shorterDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Ju', 'Ju', 'A', 'Se', 'O', 'N', 'D']
      }
    },
    watch: {
      styles: function styles() {
        this.refreshInjectedStyles();
      }
    },
    methods: {
      registerPalette: function registerPalette(name, spec) {
        __WEBPACK_IMPORTED_MODULE_0__palette__["a" /* default */][name] = spec;
      },
      useTheme: function useTheme(name) {
        if (name in injectedStyles) {
          return;
        }
        var spec = this.themes[name];

        if (!spec) {
          return warnNotFound(name);
        }

        injectStyle(this.styles.join('\n'), spec, name, this.prefix + name);

        return injectedStyles[name] = true;
      },
      refreshInjectedStyles: function refreshInjectedStyles() {
        var _this = this;

        var styles = this.styles.join('\n');
        var prefix = this.prefix;

        Object.keys(injectedStyles).forEach((function (name) {
          var spec = _this.themes[name];

          injectStyle(styles, spec, name, prefix + name);
        }));
      },
      registerTheme: function registerTheme(name, spec) {
        var _this2 = this;

        if (typeof name === 'string') {
          this.themes[name] = spec;
        } else {
          Object.keys(name).forEach((function (k) {
            return _this2.themes[k] = name[k];
          }));
        }
      },
      setCurrentTheme: function setCurrentTheme(name) {
        if (name === this.currentTheme) {
          return;
        }

        var prefix = this.prefix;

        this.useTheme(name);

        if (__WEBPACK_IMPORTED_MODULE_3__dom__["b" /* changeHtmlMetaColor */]) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dom__["b" /* changeHtmlMetaColor */])(registeredPrimaryColor[name], prefix + this.currentTheme, prefix + name);
        }

        this.currentTheme = name;
      }
    }
  });

  Vue.component('md-theme', __WEBPACK_IMPORTED_MODULE_2__mdTheme___default.a);

  Vue.prototype.$material = Vue.material;
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["a"] = ({
  red: {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
    darkText: [50, 100, 200, 300, 'A100']
  },
  pink: {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162',
    darkText: [50, 100, 200, 'A100']
  },
  purple: {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
    darkText: [50, 100, 200, 'A100']
  },
  'deep-purple': {
    50: '#ede7f6',
    100: '#d1c4e9',
    200: '#b39ddb',
    300: '#9575cd',
    400: '#7e57c2',
    500: '#673ab7',
    600: '#5e35b1',
    700: '#512da8',
    800: '#4527a0',
    900: '#311b92',
    A100: '#b388ff',
    A200: '#7c4dff',
    A400: '#651fff',
    A700: '#6200ea',
    darkText: [50, 100, 200, 'A100']
  },
  indigo: {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe',
    darkText: [50, 100, 200, 'A100']
  },
  blue: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
    darkText: [50, 100, 200, 300, 400, 'A100']
  },
  'light-blue': {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
    darkText: [50, 100, 200, 300, 400, 500, 'A100', 'A200', 'A300']
  },
  cyan: {
    50: '#e0f7fa',
    100: '#b2ebf2',
    200: '#80deea',
    300: '#4dd0e1',
    400: '#26c6da',
    500: '#00bcd4',
    600: '#00acc1',
    700: '#0097a7',
    800: '#00838f',
    900: '#006064',
    A100: '#84ffff',
    A200: '#18ffff',
    A400: '#00e5ff',
    A700: '#00b8d4',
    darkText: [50, 100, 200, 300, 400, 500, 600, 'A100', 'A200', 'A300', 'A400']
  },
  teal: {
    50: '#e0f2f1',
    100: '#b2dfdb',
    200: '#80cbc4',
    300: '#4db6ac',
    400: '#26a69a',
    500: '#009688',
    600: '#00897b',
    700: '#00796b',
    800: '#00695c',
    900: '#004d40',
    A100: '#a7ffeb',
    A200: '#64ffda',
    A400: '#1de9b6',
    A700: '#00bfa5',
    darkText: [50, 100, 200, 300, 400, 'A100', 'A200', 'A300', 'A400']
  },
  green: {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
    darkText: [50, 100, 200, 300, 400, 500, 'A100', 'A200', 'A300', 'A400']
  },
  'light-green': {
    50: '#f1f8e9',
    100: '#dcedc8',
    200: '#c5e1a5',
    300: '#aed581',
    400: '#9ccc65',
    500: '#8bc34a',
    600: '#7cb342',
    700: '#689f38',
    800: '#558b2f',
    900: '#33691e',
    A100: '#ccff90',
    A200: '#b2ff59',
    A400: '#76ff03',
    A700: '#64dd17',
    darkText: [50, 100, 200, 300, 400, 500, 600, 'A100', 'A200', 'A300', 'A400']
  },
  lime: {
    50: '#f9fbe7',
    100: '#f0f4c3',
    200: '#e6ee9c',
    300: '#dce775',
    400: '#d4e157',
    500: '#cddc39',
    600: '#c0ca33',
    700: '#afb42b',
    800: '#9e9d24',
    900: '#827717',
    A100: '#f4ff81',
    A200: '#eeff41',
    A400: '#c6ff00',
    A700: '#aeea00',
    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 800, 'A100', 'A200', 'A300', 'A400']
  },
  yellow: {
    50: '#fffde7',
    100: '#fff9c4',
    200: '#fff59d',
    300: '#fff176',
    400: '#ffee58',
    500: '#ffeb3b',
    600: '#fdd835',
    700: '#fbc02d',
    800: '#f9a825',
    900: '#f57f17',
    A100: '#ffff8d',
    A200: '#ffff00',
    A400: '#ffea00',
    A700: '#ffd600',
    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A300', 'A400']
  },
  amber: {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#ffc107',
    600: '#ffb300',
    700: '#ffa000',
    800: '#ff8f00',
    900: '#ff6f00',
    A100: '#ffe57f',
    A200: '#ffd740',
    A400: '#ffc400',
    A700: '#ffab00',
    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A300', 'A400']
  },
  orange: {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 'A100', 'A200', 'A300', 'A400']
  },
  'deep-orange': {
    50: '#fbe9e7',
    100: '#ffccbc',
    200: '#ffab91',
    300: '#ff8a65',
    400: '#ff7043',
    500: '#ff5722',
    600: '#f4511e',
    700: '#e64a19',
    800: '#d84315',
    900: '#bf360c',
    A100: '#ff9e80',
    A200: '#ff6e40',
    A400: '#ff3d00',
    A700: '#dd2c00',
    darkText: [50, 100, 200, 300, 400, 'A100', 'A200']
  },
  brown: {
    50: '#efebe9',
    100: '#d7ccc8',
    200: '#bcaaa4',
    300: '#a1887f',
    400: '#8d6e63',
    500: '#795548',
    600: '#6d4c41',
    700: '#5d4037',
    800: '#4e342e',
    900: '#3e2723',
    A100: '#d7ccc8',
    A200: '#bcaaa4',
    A400: '#8d6e63',
    A700: '#5d4037',
    darkText: [50, 100, 200, 'A100', 'A200', 'A300', 'A400']
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#fff',
    A200: '#000000',
    A400: '#303030',
    A700: '#616161',
    darkText: [50, 100, 200, 300, 400, 500, 'A100']
  },
  'blue-grey': {
    50: '#eceff1',
    100: '#cfd8dc',
    200: '#b0bec5',
    300: '#90a4ae',
    400: '#78909c',
    500: '#607d8b',
    600: '#546e7a',
    700: '#455a64',
    800: '#37474f',
    900: '#263238',
    A100: '#cfd8dc',
    A200: '#b0bec5',
    A400: '#78909c',
    A700: '#455a64',
    darkText: [50, 100, 200, 300, 'A100', 'A200', 'A300', 'A400']
  },
  white: {
    50: '#fff',
    100: '#fff',
    200: '#fff',
    300: '#fff',
    400: '#fff',
    500: '#fff',
    600: '#fff',
    700: '#fff',
    800: '#fff',
    900: '#fff',
    A100: '#fff',
    A200: '#fff',
    A400: '#fff',
    A700: '#fff',
    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A300', 'A400']
  },
  black: {
    50: '#000',
    100: '#000',
    200: '#000',
    300: '#000',
    400: '#000',
    500: '#000',
    600: '#000',
    700: '#000',
    800: '#000',
    900: '#000',
    A100: '#000',
    A200: '#000',
    A400: '#000',
    A700: '#000',
    darkText: []
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["a"] = (function (hex, opacity) {
  var r = '';
  var g = '';
  var b = '';
  var match = hex.toString().match(/^#?(([0-9a-zA-Z]{3}){1,3})$/);

  if (!match) {
    throw new Error('Invalid color' + hex);
  }

  hex = match[1];

  if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else if (hex.length === 3) {
    var rSubstring = hex.substring(0, 1);
    var gSubstring = hex.substring(1, 2);
    var bSubstring = hex.substring(2, 3);

    r = parseInt(rSubstring + rSubstring, 16);
    g = parseInt(gSubstring + gSubstring, 16);
    b = parseInt(bSubstring + bSubstring, 16);
  }

  if (opacity) {
    if (opacity > 1) {
      opacity = opacity / 100;
    }

    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')';
  }

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mdTheme__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_mdInkRipple__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stylesheets_core_theme__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stylesheets_core_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__stylesheets_core_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stylesheets_core_scss__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stylesheets_core_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__stylesheets_core_scss__);
/* harmony export (immutable) */ __webpack_exports__["a"] = install;
/* Code Components */





/* Core Stylesheets */


function install(Vue) {
  if (install.installed) {
    console.warn('Vue Material is already installed.');

    return;
  }

  Vue.material = __WEBPACK_IMPORTED_MODULE_0__material__["a" /* default */];
  Vue.prototype.$material = __WEBPACK_IMPORTED_MODULE_0__material__["a" /* default */];

  install.installed = true;

  Vue.use(__WEBPACK_IMPORTED_MODULE_1__components_mdTheme__["a" /* default */]);
  Vue.use(__WEBPACK_IMPORTED_MODULE_2__components_mdInkRipple__["a" /* default */]);
  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_3__stylesheets_core_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  data: function data() {
    return {
      styles: [],
      currentTheme: null,
      inkRipple: true,
      locale: {
        startYear: 1900,
        endYear: 2099,
        dateFormat: 'YYYY-MM-DD',
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        shorterDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Ju', 'Ju', 'A', 'Se', 'O', 'N', 'D']
      }
    };
  }
}));
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var supportsPassive = false;

try {
  var options = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });

  window.addEventListener('test', null, options);
} catch (error) {
  throw new Error(error);
}

/* harmony default export */ __webpack_exports__["a"] = (supportsPassive);
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mdAvatar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_mdBackdrop__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_mdBottomBar__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mdButton__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_mdButtonToggle__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_mdCard__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_mdCheckbox__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_mdChips__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_mdDatePicker__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_mdDialog__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_mdDivider__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_mdFile__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_mdIcon__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_mdImage__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_mdInputContainer__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_mdLayout__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_mdList__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_mdMenu__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_mdProgress__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_mdRadio__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_mdSelect__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_mdSidenav__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_mdSnackbar__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_mdSpeedDial__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_mdSpinner__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_mdStepper__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_mdSubheader__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_mdSwitch__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_mdTable__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_mdTabs__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_mdToolbar__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_mdTooltip__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_mdWhiteframe__ = __webpack_require__(146);



































var options = {
  MdCore: __WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */],
  MdAvatar: __WEBPACK_IMPORTED_MODULE_1__components_mdAvatar__["a" /* default */],
  MdBackdrop: __WEBPACK_IMPORTED_MODULE_2__components_mdBackdrop__["a" /* default */],
  MdBottomBar: __WEBPACK_IMPORTED_MODULE_3__components_mdBottomBar__["a" /* default */],
  MdButton: __WEBPACK_IMPORTED_MODULE_4__components_mdButton__["a" /* default */],
  MdButtonToggle: __WEBPACK_IMPORTED_MODULE_5__components_mdButtonToggle__["a" /* default */],
  MdCard: __WEBPACK_IMPORTED_MODULE_6__components_mdCard__["a" /* default */],
  MdCheckbox: __WEBPACK_IMPORTED_MODULE_7__components_mdCheckbox__["a" /* default */],
  MdChips: __WEBPACK_IMPORTED_MODULE_8__components_mdChips__["a" /* default */],
  MdDatePicker: __WEBPACK_IMPORTED_MODULE_9__components_mdDatePicker__["a" /* default */],
  MdDialog: __WEBPACK_IMPORTED_MODULE_10__components_mdDialog__["a" /* default */],
  MdDivider: __WEBPACK_IMPORTED_MODULE_11__components_mdDivider__["a" /* default */],
  MdFile: __WEBPACK_IMPORTED_MODULE_12__components_mdFile__["a" /* default */],
  MdIcon: __WEBPACK_IMPORTED_MODULE_13__components_mdIcon__["a" /* default */],
  MdImage: __WEBPACK_IMPORTED_MODULE_14__components_mdImage__["a" /* default */],
  MdInputContainer: __WEBPACK_IMPORTED_MODULE_15__components_mdInputContainer__["a" /* default */],
  MdLayout: __WEBPACK_IMPORTED_MODULE_16__components_mdLayout__["a" /* default */],
  MdList: __WEBPACK_IMPORTED_MODULE_17__components_mdList__["a" /* default */],
  MdMenu: __WEBPACK_IMPORTED_MODULE_18__components_mdMenu__["a" /* default */],
  MdProgress: __WEBPACK_IMPORTED_MODULE_19__components_mdProgress__["a" /* default */],
  MdRadio: __WEBPACK_IMPORTED_MODULE_20__components_mdRadio__["a" /* default */],
  MdSelect: __WEBPACK_IMPORTED_MODULE_21__components_mdSelect__["a" /* default */],
  MdSidenav: __WEBPACK_IMPORTED_MODULE_22__components_mdSidenav__["a" /* default */],
  MdSnackbar: __WEBPACK_IMPORTED_MODULE_23__components_mdSnackbar__["a" /* default */],
  MdSpeedDial: __WEBPACK_IMPORTED_MODULE_24__components_mdSpeedDial__["a" /* default */],
  MdSpinner: __WEBPACK_IMPORTED_MODULE_25__components_mdSpinner__["a" /* default */],
  MdStepper: __WEBPACK_IMPORTED_MODULE_26__components_mdStepper__["a" /* default */],
  MdSubheader: __WEBPACK_IMPORTED_MODULE_27__components_mdSubheader__["a" /* default */],
  MdSwitch: __WEBPACK_IMPORTED_MODULE_28__components_mdSwitch__["a" /* default */],
  MdTable: __WEBPACK_IMPORTED_MODULE_29__components_mdTable__["a" /* default */],
  MdTabs: __WEBPACK_IMPORTED_MODULE_30__components_mdTabs__["a" /* default */],
  MdToolbar: __WEBPACK_IMPORTED_MODULE_31__components_mdToolbar__["a" /* default */],
  MdTooltip: __WEBPACK_IMPORTED_MODULE_32__components_mdTooltip__["a" /* default */],
  MdWhiteframe: __WEBPACK_IMPORTED_MODULE_33__components_mdWhiteframe__["a" /* default */]
};

options.install = function (Vue) {
  for (var component in options) {
    var componentInstaller = options[component];

    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller);
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (options);
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".code-block .hljs-keyword,.code-block .hljs-selector-class,.code-block .hljs-selector-tag,.code-block .hljs-subst{font-weight:500}.code-block .hljs-keyword{color:#d81b60}.code-block .hljs-string{color:#00796b}.code-block .hljs-comment{color:#00796b;font-style:italic}.code-block .hljs-attr,.code-block .hljs-attribute,.code-block .hljs-built_in{color:#1976d2}.code-block .hljs-name,.code-block .hljs-number,.code-block .hljs-selector-class,.code-block .hljs-selector-tag,.code-block .hljs-tag{color:#d81b60}", ""]);

// exports


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".code-block[data-v-0f98c25a]{overflow:hidden;position:relative;border-radius:2px;background-color:#f4f4f4;color:#455a64;font-family:Operator Mono,Fira Code,Menlo,Hack,Roboto Mono,Liberation Mono,Monaco,monospace;font-size:14px;line-height:1.4em}.code-block+.code-block[data-v-0f98c25a]{margin-top:24px}.code-block[data-v-0f98c25a]:hover:after{opacity:0}.code-block:hover .md-icon-button[data-v-0f98c25a]{opacity:1}.code-block[data-v-0f98c25a]:after{position:absolute;top:20px;right:30px;transition:all .4s cubic-bezier(.25,.8,.25,1);color:rgba(0,0,0,.26);font-family:Roboto,Noto Sans,Noto,sans-serif;font-size:11px;line-height:1em}.code-block[data-lang=html][data-v-0f98c25a]:after{content:\"HTML\"}.code-block[data-lang=javascript][data-v-0f98c25a]:after{content:\"Javascript\"}.code-block[data-lang=xml][data-v-0f98c25a]:after{content:\"HTML\"}.code-block[data-lang=scss][data-v-0f98c25a]:after{content:\"SCSS\"}.code-block[data-lang=bash][data-v-0f98c25a]:after{content:\"Shell\"}.code-block pre[data-v-0f98c25a]{margin:0;white-space:pre}.code-block code[data-v-0f98c25a]{padding:0;background:none}.code-block-wrapper[data-v-0f98c25a]{min-width:100%;max-height:450px;padding:16px;overflow:auto}.md-icon-button[data-v-0f98c25a]{position:absolute;top:8px;right:20px;z-index:2;opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1)}.copied[data-v-0f98c25a]{padding:8px 16px;position:absolute;top:14px;left:12px;background-color:rgba(0,0,0,.87);border-radius:2px;transform:translate3d(0,-48px,0);transition:all .5s cubic-bezier(.35,0,.25,1);color:#fff;font-family:Roboto,Noto Sans,Noto,sans-serif;font-size:14px;line-height:1em}.copied.active[data-v-0f98c25a]{transition:all .4s cubic-bezier(.25,.8,.25,1);transform:translateZ(0)}", ""]);

// exports


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".release-version[data-v-0fbc0107]{font-size:15px}.release-version>div[data-v-0fbc0107]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.release-version .md-select[data-v-0fbc0107]{width:auto;min-width:auto;margin:0 8px}.release-version .md-select[data-v-0fbc0107]:after{color:hsla(0,0%,100%,.87)}@media (max-width:480px){.release-version[data-v-0fbc0107]{display:none}}", ""]);

// exports


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".api-table+.api-table[data-v-3ee9fdec]{margin-top:42px}.api-tab[data-v-3ee9fdec]{padding:0}.md-title[data-v-3ee9fdec]{margin-bottom:12px}", ""]);

// exports


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "[v-cloak]{display:none}body,html{height:100%;overflow:hidden}.container,body{display:-ms-flexbox;display:flex}.container{min-height:100%;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex:1;flex:1;transition:all .4s cubic-bezier(.25,.8,.25,1)}.main-sidebar.md-sidenav .md-sidenav-content{width:280px;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;overflow:hidden}.main-sidebar.md-sidenav .md-toolbar{min-height:172px;border-bottom:1px solid rgba(0,0,0,.12)}.main-sidebar.md-sidenav .vue-material-logo{font-size:24px}.main-sidebar.md-sidenav .vue-material-logo a{width:100%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:inherit;text-decoration:none}.main-sidebar.md-sidenav .vue-material-logo a:hover{color:inherit;text-decoration:none}.main-sidebar.md-sidenav .vue-material-logo img{width:160px;margin-bottom:16px}.main-sidebar.md-sidenav .main-sidebar-links{overflow:auto;-ms-flex:1;flex:1}.main-sidebar.md-sidenav .main-sidebar-links .md-inset .md-list-item-container{padding-left:36px}.main-sidebar.md-sidenav .main-sidebar-links .md-list-item-container{font-size:14px;font-weight:500}.main-sidebar.md-sidenav .release-version{padding:8px 8px 8px 16px;border-top:1px solid rgba(0,0,0,.12);display:none}.main-sidebar.md-sidenav .release-version>div{-ms-flex-pack:center;justify-content:center}.main-sidebar.md-sidenav .release-version .md-select:after{color:rgba(0,0,0,.87)}.main-content{padding:16px;-ms-flex:1;flex:1;overflow:auto;background-color:#fff;transform:translate3D(0,0,0);transition:all .4s cubic-bezier(.25,.8,.25,1);transition-delay:.2s}.md-router-enter,.md-router-leave{position:absolute;top:0;right:0;left:0}.md-router-enter .main-content,.md-router-leave .main-content{opacity:0;overflow:hidden}.md-router-leave{z-index:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.25s}.md-router-enter{z-index:2;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-router-enter .main-content{transform:translate3D(0,10%,0)}code:not(.hljs){margin-left:1px;margin-right:1px;padding:0 4px;display:inline-block;border-radius:2px;font-family:Operator Mono,Fira Code,Menlo,Hack,Roboto Mono,Liberation Mono,Monaco,monospace}code:not(.hljs) pre{margin:8px 0}.phone-viewport{width:360px;height:540px;margin-right:16px;display:inline-block;position:relative;overflow:hidden;background-color:#fff;border:1px solid rgba(0,0,0,.12)}.api-table tr>td:first-child{white-space:nowrap}@media (min-width:1281px){.container{padding-left:280px}.main-sidebar.md-sidenav .md-sidenav-content{top:0;pointer-events:auto;transform:translateZ(0);box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.main-sidebar.md-sidenav .md-backdrop{opacity:0;pointer-events:none}.md-router-enter,.md-router-leave{left:280px}}@media (max-width:480px){.main-sidebar.md-sidenav .release-version{display:block}}", ""]);

// exports


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".example-box .code-content .code-block{margin:-16px}.example-box .code-content .code-block+.code-block{margin-top:40px}.md-tooltip.md-codepen-tooltip{margin-left:-4px}", ""]);

// exports


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".example-box[data-v-ad353592]{margin-bottom:16px}.md-title[data-v-ad353592]{position:relative;z-index:3}.example-tabs[data-v-ad353592]{margin-top:-48px}.example-box-card[data-v-ad353592]{position:relative;overflow:hidden}.example-box-card:hover .md-codepen[data-v-ad353592]{opacity:.54;transform:translate3D(0,0,0);transition:.4s cubic-bezier(.25,.8,.25,1)}.md-codepen[data-v-ad353592]{margin:0;padding:4px;cursor:pointer;position:absolute;right:4px;bottom:4px;border:none;background:none;opacity:.26;transform:translate3D(120%,0,0);transition:.3s cubic-bezier(.55,0,.55,.2)}.md-codepen img[data-v-ad353592]{width:32px}pre[data-v-ad353592]{display:none}@media (max-width:480px){.example-tabs[data-v-ad353592]{margin-top:-1px;background-color:#fff}}", ""]);

// exports


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".component-docs[data-v-f4400a88]{position:relative;z-index:1;display:-ms-flexbox;display:flex}.api-documentation[data-v-f4400a88]{padding-bottom:24px}.md-headline[data-v-f4400a88]{margin-top:36px;margin-bottom:24px;padding-top:36px;border-top:1px solid rgba(0,0,0,.12)}.usage-content[data-v-f4400a88]{padding-right:8px;-ms-flex:1 1 45%;flex:1 1 45%}.example-content[data-v-f4400a88]{padding-left:8px;-ms-flex:1 1 55%;flex:1 1 55%}@media (max-width:1024px){.component-docs[data-v-f4400a88]{-ms-flex-direction:column;flex-direction:column}.usage-content[data-v-f4400a88]{padding:0;-ms-flex:none;flex:none;-ms-flex-order:2;order:2}.example-content[data-v-f4400a88]{padding:0;-ms-flex:none;flex:none}}@media (min-width:1024px){.component-description .md-headline[data-v-f4400a88]{display:none}}", ""]);

// exports


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".page-content[data-v-fdf995b8]{min-height:100%;max-height:100%;-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column}.main-header[data-v-fdf995b8]{z-index:2;color:#fff!important}.md-title[data-v-fdf995b8]{-ms-flex:1;flex:1}@media (min-width:1281px){.nav-trigger[data-v-fdf995b8]{display:none}.md-title[data-v-fdf995b8]{margin-left:8px}}@media (max-width:480px){.github[data-v-fdf995b8]{display:none}}", ""]);

// exports


/***/ }),
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 206 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 207 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 208 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 209 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 210 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 211 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 212 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 213 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 214 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 215 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 216 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 217 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 218 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 219 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 220 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 221 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 222 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 223 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 224 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 225 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 226 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 227 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 228 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 229 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 230 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 231 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 232 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 233 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 234 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 235 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 236 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 237 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 238 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 239 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-avatar.md-primary.md-avatar-icon{background-color:PRIMARY-COLOR}.THEME_NAME.md-avatar.md-primary.md-avatar-icon .md-icon{color:PRIMARY-CONTRAST-0.99999}.THEME_NAME.md-avatar.md-accent.md-avatar-icon{background-color:ACCENT-COLOR}.THEME_NAME.md-avatar.md-accent.md-avatar-icon .md-icon{color:ACCENT-CONTRAST-0.99999}.THEME_NAME.md-avatar.md-warn.md-avatar-icon{background-color:WARN-COLOR}.THEME_NAME.md-avatar.md-warn.md-avatar-icon .md-icon{color:WARN-CONTRAST-0.99999}\n"

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-bottom-bar.md-fixed{background-color:BACKGROUND-COLOR}.THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:BACKGROUND-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active{color:PRIMARY-COLOR}.THEME_NAME.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active{color:ACCENT-COLOR}.THEME_NAME.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active{color:WARN-COLOR}.THEME_NAME.md-bottom-bar.md-fixed.md-transparent .md-bottom-bar-item.md-active{color:BACKGROUND-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item.md-active{color:PRIMARY-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift.md-accent{background-color:ACCENT-COLOR}.THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:ACCENT-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item.md-active{color:ACCENT-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift.md-warn{background-color:WARN-COLOR}.THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item{color:WARN-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:WARN-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item.md-active{color:WARN-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift.md-transparent{background-color:transparent}.THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:BACKGROUND-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item.md-active{color:BACKGROUND-CONTRAST}\n"

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-button-toggle .md-button:after{width:1px;position:absolute;top:0;bottom:0;left:0;content:\" \"}.THEME_NAME.md-button-toggle .md-toggle{color:BACKGROUND-CONTRAST-0.54;background-color:BACKGROUND-CONTRAST-0.26}.THEME_NAME.md-button-toggle .md-toggle:hover:not([disabled]){background-color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-button-toggle .md-toggle+.md-toggle:after{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-button-toggle.md-primary .md-toggle{color:PRIMARY-CONTRAST;background-color:PRIMARY-COLOR}.THEME_NAME.md-button-toggle.md-primary .md-toggle:hover:not([disabled]){background-color:PRIMARY-COLOR}.THEME_NAME.md-button-toggle.md-primary .md-toggle+.md-toggle:after{background-color:PRIMARY-COLOR-600}.THEME_NAME.md-button-toggle.md-accent .md-toggle{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME.md-button-toggle.md-accent .md-toggle:hover:not([disabled]){background-color:ACCENT-COLOR}.THEME_NAME.md-button-toggle.md-accent .md-toggle+.md-toggle:after{background-color:ACCENT-COLOR-600}.THEME_NAME.md-button-toggle.md-warn .md-toggle{color:WARN-CONTRAST;background-color:WARN-COLOR}.THEME_NAME.md-button-toggle.md-warn .md-toggle:hover:not([disabled]){background-color:WARN-COLOR}.THEME_NAME.md-button-toggle.md-warn .md-toggle+.md-toggle:after{background-color:WARN-COLOR-600}.THEME_NAME.md-button-toggle [disabled]{color:rgba(0,0,0,0.26)}.THEME_NAME.md-button-toggle [disabled].md-toggle{color:BACKGROUND-CONTRAST-0.2;background-color:rgba(0,0,0,0.26)}\n"

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-button:not([disabled]).md-raised:not(.md-icon-button){color:BACKGROUND-CONTRAST;background-color:BACKGROUND-COLOR}.THEME_NAME.md-button:not([disabled]).md-raised:not(.md-icon-button):hover{background-color:BACKGROUND-COLOR-200}.THEME_NAME.md-button:not([disabled]).md-raised.md-icon-button:not(.md-raised){color:BACKGROUND-CONTRAST}.THEME_NAME.md-button:not([disabled]).md-fab{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME.md-button:not([disabled]).md-fab:hover{background-color:ACCENT-COLOR-600}.THEME_NAME.md-button:not([disabled]).md-fab.md-clean{color:BACKGROUND-CONTRAST;background-color:BACKGROUND-COLOR}.THEME_NAME.md-button:not([disabled]).md-fab.md-clean:hover{background-color:BACKGROUND-COLOR-200}.THEME_NAME.md-button:not([disabled]).md-primary:not(.md-icon-button){color:PRIMARY-COLOR}.THEME_NAME.md-button:not([disabled]).md-primary.md-raised,.THEME_NAME.md-button:not([disabled]).md-primary.md-fab{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-button:not([disabled]).md-primary.md-raised:hover,.THEME_NAME.md-button:not([disabled]).md-primary.md-fab:hover{background-color:PRIMARY-COLOR-600}.THEME_NAME.md-button:not([disabled]).md-primary.md-icon-button:not(.md-raised){color:PRIMARY-COLOR}.THEME_NAME.md-button:not([disabled]).md-accent:not(.md-icon-button){color:ACCENT-COLOR}.THEME_NAME.md-button:not([disabled]).md-accent.md-raised{background-color:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME.md-button:not([disabled]).md-accent.md-raised:hover{background-color:ACCENT-COLOR-600}.THEME_NAME.md-button:not([disabled]).md-accent.md-icon-button:not(.md-raised){color:ACCENT-COLOR}.THEME_NAME.md-button:not([disabled]).md-warn:not(.md-icon-button){color:WARN-COLOR}.THEME_NAME.md-button:not([disabled]).md-warn.md-raised,.THEME_NAME.md-button:not([disabled]).md-warn.md-fab{background-color:WARN-COLOR;color:WARN-CONTRAST}.THEME_NAME.md-button:not([disabled]).md-warn.md-raised:hover,.THEME_NAME.md-button:not([disabled]).md-warn.md-fab:hover{background-color:WARN-COLOR-600}.THEME_NAME.md-button:not([disabled]).md-warn.md-icon-button:not(.md-raised){color:WARN-COLOR}\n"

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-card{background-color:BACKGROUND-COLOR}.THEME_NAME.md-card.md-primary{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,.THEME_NAME.md-card.md-primary .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon{color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused input,.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused textarea{color:PRIMARY-CONTRAST;text-shadow:0 0 0 PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused label,.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-input-container:after{background-color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-input-container input,.THEME_NAME.md-card.md-primary .md-input-container textarea{color:PRIMARY-CONTRAST;text-shadow:0 0 0 PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-card.md-primary .md-input-container textarea::-webkit-input-placeholder{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-card.md-primary .md-input-container label,.THEME_NAME.md-card.md-primary .md-input-container .md-icon:not(.md-icon-delete){color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-accent{background-color:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,.THEME_NAME.md-card.md-accent .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon{color:ACCENT-CONTRAST-0.87}.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused input,.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused textarea{color:ACCENT-CONTRAST;text-shadow:0 0 0 ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused label,.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-input-container:after{background-color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-input-container input,.THEME_NAME.md-card.md-accent .md-input-container textarea{color:ACCENT-CONTRAST;text-shadow:0 0 0 ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-card.md-accent .md-input-container textarea::-webkit-input-placeholder{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-card.md-accent .md-input-container label,.THEME_NAME.md-card.md-accent .md-input-container .md-icon:not(.md-icon-delete){color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-warn{background-color:WARN-COLOR;color:WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,.THEME_NAME.md-card.md-warn .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon{color:WARN-CONTRAST-0.87}.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused input,.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused textarea{color:WARN-CONTRAST;text-shadow:0 0 0 WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused label,.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-input-container:after{background-color:WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-input-container input,.THEME_NAME.md-card.md-warn .md-input-container textarea{color:WARN-CONTRAST;text-shadow:0 0 0 WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-card.md-warn .md-input-container textarea::-webkit-input-placeholder{color:WARN-CONTRAST-0.54}.THEME_NAME.md-card.md-warn .md-input-container label,.THEME_NAME.md-card.md-warn .md-input-container .md-icon:not(.md-icon-delete){color:WARN-CONTRAST}.THEME_NAME.md-card .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,.THEME_NAME.md-card .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-card>.md-card-area:after{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-card .md-card-media-cover.md-text-scrim .md-backdrop{background:linear-gradient(to bottom, BACKGROUND-CONTRAST-0.0 20%, BACKGROUND-CONTRAST-0.275 66%, BACKGROUND-CONTRAST-0.55 100%)}.THEME_NAME.md-card .md-card-media-cover.md-solid .md-card-area{background-color:BACKGROUND-CONTRAST-0.4}.THEME_NAME.md-card .md-card-expand .md-card-actions{background-color:BACKGROUND-COLOR}\n"

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-checkbox.md-checked .md-checkbox-container{background-color:ACCENT-COLOR;border-color:ACCENT-COLOR}.THEME_NAME.md-checkbox.md-checked .md-checkbox-container:after{border-color:ACCENT-CONTRAST}.THEME_NAME.md-checkbox .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-checkbox .md-ripple{opacity:.26}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container{background-color:PRIMARY-COLOR;border-color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container:after{border-color:PRIMARY-CONTRAST}.THEME_NAME.md-checkbox.md-primary .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container{background-color:WARN-COLOR;border-color:WARN-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container:after{border-color:WARN-CONTRAST}.THEME_NAME.md-checkbox.md-warn .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-checkbox.md-disabled.md-checked .md-checkbox-container{background-color:rgba(0,0,0,0.26);border-color:transparent}.THEME_NAME.md-checkbox.md-disabled:not(.md-checked) .md-checkbox-container{border-color:rgba(0,0,0,0.26)}\n"

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-chip{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-chip.md-deletable:hover,.THEME_NAME.md-chip.md-deletable:focus,.THEME_NAME.md-chip.md-editable:hover,.THEME_NAME.md-chip.md-editable:focus{background-color:BACKGROUND-CONTRAST-0.54;color:BACKGROUND-COLOR}.THEME_NAME.md-chip.md-deletable:hover .md-delete,.THEME_NAME.md-chip.md-deletable:focus .md-delete,.THEME_NAME.md-chip.md-editable:hover .md-delete,.THEME_NAME.md-chip.md-editable:focus .md-delete{color:BACKGROUND-COLOR}.THEME_NAME.md-chip .md-delete{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-chip .md-delete .md-ripple{color:BACKGROUND-COLOR}.THEME_NAME.md-chip.md-primary{color:PRIMARY-CONTRAST;background-color:PRIMARY-COLOR}.THEME_NAME.md-chip.md-accent{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME.md-chip.md-warn{color:WARN-CONTRAST;background-color:WARN-COLOR}\n"

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-datepicker-popup.md-select-date .md-datepicker-year-select{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-datepicker-popup.md-select-date .md-datepicker-year-select:hover{color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-datepicker-popup.md-select-month .md-datepicker-year-select,.THEME_NAME.md-datepicker-popup.md-select-month .md-datepicker-date-select{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-datepicker-popup.md-select-month .md-datepicker-year-select:hover,.THEME_NAME.md-datepicker-popup.md-select-month .md-datepicker-date-select:hover{color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-datepicker-popup.md-select-year .md-datepicker-date-select{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-datepicker-popup.md-select-year .md-datepicker-date-select:hover{color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-datepicker-popup .md-datepicker-body{background-color:BACKGROUND-COLOR}.THEME_NAME.md-datepicker-popup .md-datepicker-header{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST-0.9999}.THEME_NAME.md-datepicker-popup .md-datepicker-week-days{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-datepicker-popup .md-datepicker-days{color:BACKGROUND-CONTRAST-0.8}.THEME_NAME.md-datepicker-popup .md-datepicker-days .md-button:hover{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME .md-button.md-current:not(.md-raised){color:PRIMARY-COLOR}.THEME_NAME .md-button.md-selected:not(.md-raised){background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}\n"

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-dialog-container .md-dialog{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}\n"

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-icon.md-primary{color:PRIMARY-COLOR}.THEME_NAME.md-icon.md-accent{color:ACCENT-COLOR}.THEME_NAME.md-icon.md-warn{color:WARN-COLOR}\n"

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-input-container.md-input-invalid:after{background-color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-invalid label,.THEME_NAME.md-input-container.md-input-invalid input,.THEME_NAME.md-input-container.md-input-invalid textarea,.THEME_NAME.md-input-container.md-input-invalid .md-error,.THEME_NAME.md-input-container.md-input-invalid .md-count,.THEME_NAME.md-input-container.md-input-invalid .md-icon:not(.md-icon-delete){color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-focused.md-input-inline label{color:rgba(0,0,0,0.54)}.THEME_NAME.md-input-container.md-input-focused.md-input-required label:after{color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-focused:after{height:2px;background-color:PRIMARY-COLOR}.THEME_NAME.md-input-container.md-input-focused input,.THEME_NAME.md-input-container.md-input-focused textarea{color:PRIMARY-COLOR;text-shadow:0 0 0 BACKGROUND-CONTRAST;-webkit-text-fill-color:transparent}.THEME_NAME.md-input-container.md-input-focused label,.THEME_NAME.md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:PRIMARY-COLOR}.THEME_NAME.md-input-container.md-input-disabled label,.THEME_NAME.md-input-container.md-input-disabled input,.THEME_NAME.md-input-container.md-input-disabled textarea,.THEME_NAME.md-input-container.md-input-disabled .md-error,.THEME_NAME.md-input-container.md-input-disabled .md-count,.THEME_NAME.md-input-container.md-input-disabled .md-icon:not(.md-icon-delete),.THEME_NAME.md-input-container.md-input-disabled ::-webkit-input-placeholder{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-input-container .md-icon:not(.md-icon-delete):after{background:BACKGROUND-COLOR}\n"

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-list{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}.THEME_NAME.md-list.md-transparent{background-color:transparent;color:inherit}.THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container{color:PRIMARY-COLOR}.THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container>.md-icon{color:PRIMARY-COLOR}.THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container{color:PRIMARY-COLOR}.THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container>.md-icon{color:PRIMARY-COLOR}.THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container{color:ACCENT-COLOR}.THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container>.md-icon{color:ACCENT-COLOR}.THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container{color:WARN-COLOR}.THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container>.md-icon{color:WARN-COLOR}.THEME_NAME.md-list .md-list-item-expand .md-list-item-container{background-color:BACKGROUND-COLOR}.THEME_NAME.md-list .md-list-item-expand .md-list-item-container:hover,.THEME_NAME.md-list .md-list-item-expand .md-list-item-container:focus{background-color:rgba(153,153,153,0.2)}\n"

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-menu-content .md-list{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}.THEME_NAME.md-menu-content .md-list .md-menu-item:hover .md-button:not([disabled]),.THEME_NAME.md-menu-content .md-list .md-menu-item:focus .md-button:not([disabled]),.THEME_NAME.md-menu-content .md-list .md-menu-item.md-highlighted .md-button:not([disabled]){background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-menu-content .md-list .md-menu-item[disabled]{color:BACKGROUND-CONTRAST-0.38}\n"

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-progress{background-color:PRIMARY-COLOR-0.38}.THEME_NAME.md-progress:not(.md-indeterminate) .md-progress-track{background-color:PRIMARY-COLOR}.THEME_NAME.md-progress .md-progress-track:after,.THEME_NAME.md-progress .md-progress-track:before{background-color:PRIMARY-COLOR}.THEME_NAME.md-progress.md-accent{background-color:ACCENT-COLOR-0.38}.THEME_NAME.md-progress.md-accent:not(.md-indeterminate) .md-progress-track{background-color:ACCENT-COLOR}.THEME_NAME.md-progress.md-accent .md-progress-track:after,.THEME_NAME.md-progress.md-accent .md-progress-track:before{background-color:ACCENT-COLOR}.THEME_NAME.md-progress.md-warn{background-color:WARN-COLOR-0.38}.THEME_NAME.md-progress.md-warn:not(.md-indeterminate) .md-progress-track{background-color:WARN-COLOR}.THEME_NAME.md-progress.md-warn .md-progress-track:after,.THEME_NAME.md-progress.md-warn .md-progress-track:before{background-color:WARN-COLOR}\n"

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-radio .md-radio-container:after{background-color:ACCENT-COLOR}.THEME_NAME.md-radio.md-checked .md-radio-container{border-color:ACCENT-COLOR}.THEME_NAME.md-radio.md-checked .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-radio.md-checked .md-ripple{opacity:.38}.THEME_NAME.md-radio.md-primary .md-radio-container:after{background-color:PRIMARY-COLOR}.THEME_NAME.md-radio.md-primary.md-checked .md-radio-container{border-color:PRIMARY-COLOR}.THEME_NAME.md-radio.md-primary.md-checked .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-radio.md-warn .md-radio-container:after{background-color:WARN-COLOR}.THEME_NAME.md-radio.md-warn.md-checked .md-radio-container{border-color:WARN-COLOR}.THEME_NAME.md-radio.md-warn.md-checked .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-radio.md-disabled .md-radio-container{border-color:rgba(0,0,0,0.26)}.THEME_NAME.md-radio.md-disabled .md-radio-container:after{background-color:rgba(0,0,0,0.26)}.THEME_NAME.md-radio.md-disabled.md-checked .md-radio-container{border-color:rgba(0,0,0,0.26)}\n"

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-select:after{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-select:after{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-select-content .md-menu-item.md-selected,.THEME_NAME.md-select-content .md-menu-item.md-checked{color:PRIMARY-COLOR}\n"

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-sidenav .md-sidenav-content{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}\n"

/***/ }),
/* 259 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME .md-snackbar .md-ink-ripple,.THEME_NAME.md-snackbar .md-ink-ripple{color:#fff}\n"

/***/ }),
/* 260 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-spinner .md-spinner-path{stroke:PRIMARY-COLOR}.THEME_NAME.md-spinner.md-accent .md-spinner-path{stroke:ACCENT-COLOR}.THEME_NAME.md-spinner.md-warn .md-spinner-path{stroke:WARN-COLOR}\n"

/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-stepper .md-step-header .md-step-icon,.THEME_NAME.md-stepper .md-step-header .md-step-number{color:BACKGROUND-CONTRAST;background-color:#bdbdbd}.THEME_NAME.md-stepper .md-step-header.md-primary .md-step-icon,.THEME_NAME.md-stepper .md-step-header.md-primary .md-step-number,.THEME_NAME.md-stepper .md-step-header.md-active .md-step-icon,.THEME_NAME.md-stepper .md-step-header.md-active .md-step-number{color:PRIMARY-CONTRAST;background-color:PRIMARY-COLOR}.THEME_NAME.md-stepper .md-step-header.md-accent .md-step-icon,.THEME_NAME.md-stepper .md-step-header.md-accent .md-step-number{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME.md-stepper .md-step-header.md-warn .md-step-icon,.THEME_NAME.md-stepper .md-step-header.md-warn .md-step-number{color:WARN-CONTRAST;background-color:WARN-COLOR}.THEME_NAME.md-stepper .md-step-header.md-disabled{color:#bdbdbd}.THEME_NAME.md-stepper .md-step-header.md-disabled .md-step-icon,.THEME_NAME.md-stepper .md-step-header.md-disabled .md-step-number{color:white;background-color:#bdbdbd}\n"

/***/ }),
/* 263 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-subheader.md-primary{color:PRIMARY-COLOR}.THEME_NAME.md-subheader.md-accent{color:ACCENT-COLOR}.THEME_NAME.md-subheader.md-warn{color:WARN-COLOR}\n"

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-switch.md-checked .md-switch-container{background-color:ACCENT-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked .md-switch-thumb{background-color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ripple{opacity:.38}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-container{background-color:PRIMARY-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-thumb{background-color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-primary .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-container{background-color:WARN-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-thumb{background-color:WARN-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-switch.md-disabled .md-switch-container,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-container{background-color:rgba(0,0,0,0.12)}.THEME_NAME.md-switch.md-disabled .md-switch-thumb,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-thumb{background-color:#bdbdbd}\n"

/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-table-card .md-toolbar{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}.THEME_NAME.md-table-alternate-header{background-color:BACKGROUND-COLOR}.THEME_NAME.md-table-alternate-header .md-toolbar{background-color:ACCENT-COLOR-A100-0.2;color:ACCENT-CONTRAST-A100}.THEME_NAME.md-table-alternate-header .md-counter{color:ACCENT-COLOR}\n"

/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-tabs>.md-tabs-navigation{background-color:PRIMARY-COLOR}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header:focus{color:PRIMARY-CONTRAST}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header.md-disabled{color:PRIMARY-CONTRAST-0.26}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-indicator{background-color:ACCENT-COLOR}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation{background-color:transparent;border-bottom:1px solid BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header:focus{color:PRIMARY-COLOR}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header.md-disabled{color:BACKGROUND-CONTRAST-0.26}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-indicator{background-color:PRIMARY-COLOR}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation{background-color:ACCENT-COLOR}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header:focus{color:ACCENT-CONTRAST}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header.md-disabled{color:ACCENT-CONTRAST-0.26}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-indicator{background-color:BACKGROUND-COLOR}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation{background-color:WARN-COLOR}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header{color:WARN-CONTRAST-0.54}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header:focus{color:WARN-CONTRAST}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header.md-disabled{color:WARN-CONTRAST-0.26}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-indicator{background-color:BACKGROUND-COLOR}\n"

/***/ }),
/* 267 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-toolbar{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-toolbar .md-input-container.md-input-focused input,.THEME_NAME.md-toolbar .md-input-container.md-input-focused textarea{color:PRIMARY-CONTRAST;text-shadow:0 0 0 PRIMARY-CONTRAST}.THEME_NAME.md-toolbar .md-input-container.md-input-focused label,.THEME_NAME.md-toolbar .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:PRIMARY-CONTRAST}.THEME_NAME.md-toolbar .md-input-container:after{background-color:PRIMARY-CONTRAST}.THEME_NAME.md-toolbar .md-input-container input,.THEME_NAME.md-toolbar .md-input-container textarea{color:PRIMARY-CONTRAST;text-shadow:0 0 0 PRIMARY-CONTRAST}.THEME_NAME.md-toolbar .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-toolbar .md-input-container textarea::-webkit-input-placeholder{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-toolbar .md-input-container label,.THEME_NAME.md-toolbar .md-input-container .md-icon:not(.md-icon-delete){color:PRIMARY-CONTRAST}.THEME_NAME.md-toolbar.md-accent{background-color:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused input,.THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused textarea{color:ACCENT-CONTRAST;text-shadow:0 0 0 ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused label,.THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-accent .md-input-container:after{background-color:ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-accent .md-input-container input,.THEME_NAME.md-toolbar.md-accent .md-input-container textarea{color:ACCENT-CONTRAST;text-shadow:0 0 0 ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-accent .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-toolbar.md-accent .md-input-container textarea::-webkit-input-placeholder{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-toolbar.md-accent .md-input-container label,.THEME_NAME.md-toolbar.md-accent .md-input-container .md-icon:not(.md-icon-delete){color:ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-warn{background-color:WARN-COLOR;color:WARN-CONTRAST}.THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused input,.THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused textarea{color:WARN-CONTRAST;text-shadow:0 0 0 WARN-CONTRAST}.THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused label,.THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:WARN-CONTRAST}.THEME_NAME.md-toolbar.md-warn .md-input-container:after{background-color:WARN-CONTRAST}.THEME_NAME.md-toolbar.md-warn .md-input-container input,.THEME_NAME.md-toolbar.md-warn .md-input-container textarea{color:WARN-CONTRAST;text-shadow:0 0 0 WARN-CONTRAST}.THEME_NAME.md-toolbar.md-warn .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-toolbar.md-warn .md-input-container textarea::-webkit-input-placeholder{color:WARN-CONTRAST-0.54}.THEME_NAME.md-toolbar.md-warn .md-input-container label,.THEME_NAME.md-toolbar.md-warn .md-input-container .md-icon:not(.md-icon-delete){color:WARN-CONTRAST}.THEME_NAME.md-toolbar.md-transparent{background-color:transparent;color:BACKGROUND-CONTRAST}.THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused input,.THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused textarea{color:BACKGROUND-CONTRAST;text-shadow:0 0 0 BACKGROUND-CONTRAST}.THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused label,.THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:BACKGROUND-CONTRAST}.THEME_NAME.md-toolbar.md-transparent .md-input-container:after{background-color:BACKGROUND-CONTRAST}.THEME_NAME.md-toolbar.md-transparent .md-input-container input,.THEME_NAME.md-toolbar.md-transparent .md-input-container textarea{color:BACKGROUND-CONTRAST;text-shadow:0 0 0 BACKGROUND-CONTRAST}.THEME_NAME.md-toolbar.md-transparent .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-toolbar.md-transparent .md-input-container textarea::-webkit-input-placeholder{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-toolbar.md-transparent .md-input-container label,.THEME_NAME.md-toolbar.md-transparent .md-input-container .md-icon:not(.md-icon-delete){color:BACKGROUND-CONTRAST}\n"

/***/ }),
/* 268 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME :not(input):not(textarea)::selection{background:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME a:not(.md-button){color:ACCENT-COLOR}.THEME_NAME a:not(.md-button):hover{color:ACCENT-COLOR-800}body.THEME_NAME{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST-0.87}.THEME_NAME .md-caption,.THEME_NAME .md-display-1,.THEME_NAME .md-display-2,.THEME_NAME .md-display-3,.THEME_NAME .md-display-4{color:BACKGROUND-CONTRAST-0.57}.THEME_NAME code:not(.hljs){background-color:ACCENT-COLOR-A100-0.2;color:ACCENT-COLOR-800}\n"

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(216)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(373),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(224)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(391),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(220)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(382),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(358),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(211)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(363),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(222)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(388),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(219)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(378),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(360),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(348),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(394),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(368),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(407),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(350),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(380),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(392),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(389),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(232)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(405),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(385),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(233)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(406),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(226)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(397),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(212)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(365),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(342),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(411),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(395),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(376),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(362),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(366),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(234)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(409),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(229)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(399),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(237)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(415),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(213)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(369),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(384),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(225)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(396),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(387),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(228)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(71),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(215)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(371),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(393),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(386),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(408),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(381),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(357),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(359),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(206)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(343),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(345),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(81),
  /* template */
  __webpack_require__(355),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(208)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(82),
  /* template */
  __webpack_require__(349),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(214)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(83),
  /* template */
  __webpack_require__(370),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(84),
  /* template */
  __webpack_require__(383),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(227)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(398),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(236)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(413),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(235)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(87),
  /* template */
  __webpack_require__(412),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(207)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(88),
  /* template */
  __webpack_require__(346),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(210)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(89),
  /* template */
  __webpack_require__(356),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(90),
  /* template */
  __webpack_require__(361),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(402),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(223)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(92),
  /* template */
  __webpack_require__(390),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(239)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(93),
  /* template */
  __webpack_require__(417),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(238)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(416),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(217)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(95),
  /* template */
  __webpack_require__(374),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(96),
  /* template */
  __webpack_require__(372),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(97),
  /* template */
  __webpack_require__(364),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(98),
  /* template */
  __webpack_require__(344),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(404),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(100),
  /* template */
  __webpack_require__(353),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(101),
  /* template */
  __webpack_require__(410),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(347),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(103),
  /* template */
  __webpack_require__(377),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(231)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(403),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(209)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(105),
  /* template */
  __webpack_require__(354),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(218)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(106),
  /* template */
  __webpack_require__(375),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(221)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(107),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(230)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(108),
  /* template */
  __webpack_require__(400),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(109),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 342 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-dialog-actions"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 343 */
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
/* 344 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "md-table-cell",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "md-table-cell-container"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 345 */
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
/* 346 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-speed-dial",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 347 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "md-table-row",
    class: _vm.classes,
    on: {
      "click": _vm.autoSelect
    }
  }, [(_vm.hasSelection) ? _c('md-table-cell', {
    staticClass: "md-table-selection"
  }, [_c('md-checkbox', {
    attrs: {
      "disabled": _vm.isDisabled
    },
    on: {
      "change": _vm.select
    },
    model: {
      value: (_vm.checkbox),
      callback: function($$v) {
        _vm.checkbox = $$v
      },
      expression: "checkbox"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 348 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-area",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 349 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "md-progress",
      "appear": ""
    }
  }, [_c('div', {
    staticClass: "md-progress",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('div', {
    staticClass: "md-progress-track",
    style: (_vm.styles)
  })])])
},staticRenderFns: []}

/***/ }),
/* 350 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-header-text"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 351 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "code-block",
    attrs: {
      "data-lang": _vm.lang
    }
  }, [_c('div', {
    staticClass: "code-block-wrapper",
    style: ({
      'max-height': _vm.height
    })
  }, [_c('pre', [_c('code', {
    ref: "block",
    class: _vm.lang
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c('span', {
    staticClass: "copied",
    class: {
      'active': _vm.showMessage
    }
  }, [_vm._v("Copied!")])]), _vm._v(" "), _c('md-button', {
    ref: "copy",
    staticClass: "md-icon-button md-dense"
  }, [_c('md-icon', [_vm._v("content_copy")])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 352 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "release-version"
  }, [(_vm.availableDocs.length > 1) ? _c('div', [_c('span', [_vm._v("Version:")]), _vm._v(" "), _c('md-select', {
    attrs: {
      "id": "docs-select"
    },
    on: {
      "change": _vm.changeDocs
    },
    model: {
      value: (_vm.currentDocs),
      callback: function($$v) {
        _vm.currentDocs = $$v
      },
      expression: "currentDocs"
    }
  }, _vm._l((_vm.availableDocs), (function(doc) {
    return _c('md-option', {
      key: doc,
      attrs: {
        "value": doc
      }
    }, [_vm._v(_vm._s(doc))])
  })))], 1) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 353 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('th', {
    staticClass: "md-table-head",
    class: _vm.classes,
    on: {
      "click": _vm.changeSort
    }
  }, [_c('div', {
    staticClass: "md-table-head-container"
  }, [_c('div', {
    staticClass: "md-table-head-text md-test"
  }, [(_vm.mdSortBy) ? _c('md-icon', {
    staticClass: "md-sortable-icon"
  }, [_vm._v("arrow_upward")]) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.mdTooltip) ? _c('md-tooltip', [_vm._v(_vm._s(_vm.mdTooltip))]) : _vm._e()], 2), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": !_vm.mdSortBy
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),
/* 354 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-toolbar",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 355 */
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
/* 356 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "md-spinner",
      "appear": ""
    }
  }, [_c('div', {
    staticClass: "md-spinner",
    class: [_vm.themeClass, _vm.classes],
    style: (_vm.styles)
  }, [_c('svg', {
    staticClass: "md-spinner-draw",
    attrs: {
      "viewBox": "25 25 50 50"
    }
  }, [_c('circle', {
    staticClass: "md-spinner-path",
    attrs: {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "stroke-width": _vm.mdStroke,
      "stroke-dasharray": _vm.dashProgress
    }
  })])])])
},staticRenderFns: []}

/***/ }),
/* 357 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "md-list-item",
    class: _vm.classes
  }, [_c('a', {
    staticClass: "md-list-item-container md-button",
    attrs: {
      "href": _vm.href,
      "target": _vm.target,
      "disabled": _vm.disabled
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "disabled": _vm.disabled
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 358 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.href) ? _c('a', {
    staticClass: "md-bottom-bar-item",
    class: _vm.classes,
    attrs: {
      "href": _vm.href,
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.setActive
    }
  }, [(_vm.mdIcon || _vm.mdIconSrc || _vm.mdIconset) ? _c('md-icon', {
    attrs: {
      "md-src": _vm.mdIconSrc,
      "md-iconset": _vm.mdIconset
    }
  }, [_vm._v(_vm._s(_vm.mdIcon))]) : _vm._e(), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-text"
  }, [_vm._t("default")], 2)], 1) : _c('button', {
    staticClass: "md-bottom-bar-item",
    class: _vm.classes,
    attrs: {
      "type": "button",
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.setActive
    }
  }, [(_vm.mdIcon || _vm.mdIconSrc || _vm.mdIconset) ? _c('md-icon', {
    attrs: {
      "md-src": _vm.mdIconSrc,
      "md-iconset": _vm.mdIconset
    }
  }, [_vm._v(_vm._s(_vm.mdIcon))]) : _vm._e(), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-text"
  }, [_vm._t("default")], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 359 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "md-list-item",
    class: _vm.classes,
    attrs: {
      "disabled": _vm.disabled
    }
  }, [_vm._t("default"), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "disabled": _vm.disabled
    }
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 360 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-actions"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 361 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-step",
    style: (_vm.styles),
    attrs: {
      "id": _vm.stepId
    }
  }, [(_vm.vertical) ? _c('md-step-header', {
    attrs: {
      "step": _vm.getStepData()
    },
    nativeOn: {
      "click": function($event) {
        _vm.setActiveStep()
      }
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.vertical || (_vm.vertical && _vm.isCurrentStep)) ? _c('div', {
    staticClass: "md-step-content"
  }, [_vm._t("default"), _vm._v(" "), (!_vm.vertical || (_vm.vertical && _vm.isCurrentStep)) ? _c('div', {
    staticClass: "md-step-actions"
  }, [_c('md-button', {
    staticClass: "md-raised md-primary",
    attrs: {
      "disabled": !_vm.mdContinue
    },
    on: {
      "click": _vm.moveNextStep
    }
  }, [_vm._v(_vm._s(_vm.continueText))]), _vm._v(" "), _c('md-button', {
    attrs: {
      "disabled": !_vm.canGoBack
    },
    on: {
      "click": _vm.movePreviousStep
    }
  }, [_vm._v(_vm._s(_vm.mdButtonBack))])], 1) : _vm._e()], 2) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 362 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-dialog', {
    ref: "dialog",
    staticClass: "md-dialog-confirm",
    on: {
      "close": function($event) {
        _vm.fireCloseEvent('cancel')
      }
    }
  }, [(_vm.mdTitle) ? _c('md-dialog-title', [_vm._v(_vm._s(_vm.mdTitle))]) : _vm._e(), _vm._v(" "), (_vm.mdContentHtml) ? _c('md-dialog-content', {
    domProps: {
      "innerHTML": _vm._s(_vm.mdContentHtml)
    }
  }) : _c('md-dialog-content', [_vm._v(_vm._s(_vm.mdContent))]), _vm._v(" "), _c('md-dialog-actions', [_c('md-button', {
    staticClass: "md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.close('cancel')
      }
    }
  }, [_vm._v(_vm._s(_vm.mdCancelText))]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.close('ok')
      }
    }
  }, [_vm._v(_vm._s(_vm.mdOkText))])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 363 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-button-toggle",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 364 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-card', {
    staticClass: "md-table-card",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 365 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-dialog-container",
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "tabindex": "0"
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        $event.stopPropagation();
        _vm.closeOnEsc($event)
      }
    }
  }, [_c('div', {
    ref: "dialog",
    staticClass: "md-dialog",
    class: _vm.dialogClasses,
    style: (_vm.styles)
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.mdBackdrop) ? _c('md-backdrop', {
    ref: "backdrop",
    staticClass: "md-dialog-backdrop",
    class: _vm.classes,
    on: {
      "close": function($event) {
        _vm.mdClickOutsideToClose && _vm.close()
      }
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 366 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-dialog', {
    ref: "dialog",
    staticClass: "md-dialog-prompt",
    on: {
      "close": function($event) {
        _vm.fireCloseEvent('cancel')
      }
    }
  }, [(_vm.mdTitle) ? _c('md-dialog-title', [_vm._v(_vm._s(_vm.mdTitle))]) : _vm._e(), _vm._v(" "), (_vm.mdContentHtml) ? _c('md-dialog-content', {
    domProps: {
      "innerHTML": _vm._s(_vm.mdContentHtml)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.mdContent) ? _c('md-dialog-content', [_vm._v(_vm._s(_vm.mdContent))]) : _vm._e(), _vm._v(" "), _c('md-dialog-content', [_c('md-input-container', [_c('md-input', {
    ref: "input",
    attrs: {
      "id": _vm.mdInputId,
      "name": _vm.mdInputName,
      "maxlength": _vm.mdInputMaxlength,
      "placeholder": _vm.mdInputPlaceholder,
      "value": _vm.value
    },
    nativeOn: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.confirmValue($event)
      }
    }
  })], 1)], 1), _vm._v(" "), _c('md-dialog-actions', [_c('md-button', {
    staticClass: "md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.close('cancel')
      }
    }
  }, [_vm._v(_vm._s(_vm.mdCancelText))]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.confirmValue($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.mdOkText))])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 367 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "api-table"
  }, [_c('h3', {
    staticClass: "md-title"
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), (_vm.$slots.default) ? _vm._t("default") : _vm._e(), _vm._v(" "), (_vm.slotNames.length > 1 || !_vm.$slots.default) ? _c('md-tabs', {
    staticClass: "md-transparent",
    attrs: {
      "md-dynamic-height": false
    }
  }, [(_vm.$slots.properties) ? _c('md-tab', {
    staticClass: "api-tab",
    attrs: {
      "md-label": "Properties"
    }
  }, [_vm._t("properties")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.classes) ? _c('md-tab', {
    staticClass: "api-tab",
    attrs: {
      "md-label": "Classes"
    }
  }, [_vm._t("classes")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.events) ? _c('md-tab', {
    staticClass: "api-tab",
    attrs: {
      "md-label": "Events"
    }
  }, [_vm._t("events")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.methods) ? _c('md-tab', {
    staticClass: "api-tab",
    attrs: {
      "md-label": "Methods"
    }
  }, [_vm._t("methods")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.slots) ? _c('md-tab', {
    staticClass: "api-tab",
    attrs: {
      "md-label": "Slots"
    }
  }, [_vm._t("slots")], 2) : _vm._e()], 1) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 368 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "expand",
    staticClass: "md-card-expand"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 369 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('img', {
    staticClass: "md-image",
    class: _vm.classes,
    attrs: {
      "src": _vm.mdSrc
    }
  })
},staticRenderFns: []}

/***/ }),
/* 370 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-radio",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('div', {
    staticClass: "md-radio-container",
    on: {
      "click": _vm.toggleCheck
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": _vm.name,
      "id": _vm.id,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "click": _vm.toggleCheck
    }
  }), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  })], 1), _vm._v(" "), (_vm.$slots.default) ? _c('label', {
    staticClass: "md-radio-label",
    attrs: {
      "for": _vm.id || _vm.name
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 371 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "md-list",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 372 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-table-alternate-header",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('md-toolbar', [_c('div', {
    staticClass: "md-counter"
  }, [_c('span', {
    ref: "counter"
  }, [_vm._v(_vm._s(_vm.tableInstance.numberOfSelected))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.mdSelectedLabel))])]), _vm._v(" "), _vm._t("default")], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 373 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-avatar",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 374 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-table",
    class: [_vm.themeClass]
  }, [_c('table', [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 375 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "md-tooltip",
    class: _vm.classes,
    style: (_vm.style)
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 376 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-dialog', {
    ref: "dialog",
    staticClass: "md-dialog-alert",
    on: {
      "close": function($event) {
        _vm.fireCloseEvent()
      }
    }
  }, [(_vm.mdTitle) ? _c('md-dialog-title', [_vm._v(_vm._s(_vm.mdTitle))]) : _vm._e(), _vm._v(" "), (_vm.mdContentHtml) ? _c('md-dialog-content', {
    domProps: {
      "innerHTML": _vm._s(_vm.mdContentHtml)
    }
  }) : _c('md-dialog-content', [_vm._v(_vm._s(_vm.mdContent))]), _vm._v(" "), _c('md-dialog-actions', [_c('md-button', {
    staticClass: "md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.close()
      }
    }
  }, [_vm._v(_vm._s(_vm.mdOkText))])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 377 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-tab",
    style: (_vm.styles),
    attrs: {
      "id": _vm.tabId
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 378 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 379 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('md-sidenav', {
    ref: "main-sidebar",
    staticClass: "main-sidebar md-left md-fixed",
    attrs: {
      "md-swipeable": ""
    }
  }, [_c('md-toolbar', {
    staticClass: "vue-material-logo",
    attrs: {
      "md-theme": "white"
    }
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.logo,
      "alt": "Vue"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Vue Material")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-sidebar-links"
  }, [_c('md-list', {
    staticClass: "md-dense"
  }, [_c('md-list-item', [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/"
    }
  }, [_vm._v("Introduction")])], 1), _vm._v(" "), _c('md-list-item', [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/getting-started"
    }
  }, [_vm._v("Getting Started")])], 1), _vm._v(" "), _c('md-list-item', [_c('span', [_vm._v("Themes")]), _vm._v(" "), _c('md-list-expand', [_c('md-list', [_c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/themes/configuration"
    }
  }, [_vm._v("Configuration")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/themes/dynamic-themes"
    }
  }, [_vm._v("Dynamic Theme")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('md-list-item', [_c('span', [_vm._v("Components")]), _vm._v(" "), _c('md-list-expand', [_c('md-list', [_c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/avatar"
    }
  }, [_vm._v("Avatar")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/bottom-bar"
    }
  }, [_vm._v("Bottom Bar")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/button"
    }
  }, [_vm._v("Button")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/button-toggle"
    }
  }, [_vm._v("Button Toggle")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/card"
    }
  }, [_vm._v("Card")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/checkbox"
    }
  }, [_vm._v("Checkbox")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/chips"
    }
  }, [_vm._v("Chips")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/date-picker"
    }
  }, [_vm._v("Date Picker")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/dialog"
    }
  }, [_vm._v("Dialog")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/file"
    }
  }, [_vm._v("File")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/icon"
    }
  }, [_vm._v("Icon")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/image-loader"
    }
  }, [_vm._v("Image Loader")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/ink-ripple"
    }
  }, [_vm._v("Ink Ripple")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/input"
    }
  }, [_vm._v("Input")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/list"
    }
  }, [_vm._v("List")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/menu"
    }
  }, [_vm._v("Menu")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/progress"
    }
  }, [_vm._v("Progress")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/radio"
    }
  }, [_vm._v("Radio")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/select"
    }
  }, [_vm._v("Select")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/sidenav"
    }
  }, [_vm._v("Sidenav")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/snackbar"
    }
  }, [_vm._v("Snackbar")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/speed-dial"
    }
  }, [_vm._v("Speed Dial")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/spinner"
    }
  }, [_vm._v("Spinner")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/stepper"
    }
  }, [_vm._v("Stepper")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/subheader"
    }
  }, [_vm._v("Subheader")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/switch"
    }
  }, [_vm._v("Switch")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/tabs"
    }
  }, [_vm._v("Tabs")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/table"
    }
  }, [_vm._v("Table")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/toolbar"
    }
  }, [_vm._v("Toolbar")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/tooltip"
    }
  }, [_vm._v("Tooltip")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/components/whiteframe"
    }
  }, [_vm._v("Whiteframe")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('md-list-item', [_c('span', [_vm._v("UI Elements")]), _vm._v(" "), _c('md-list-expand', [_c('md-list', [_c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/ui-elements/layout"
    }
  }, [_vm._v("Layout")])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-inset"
  }, [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/ui-elements/typography"
    }
  }, [_vm._v("Typography")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('md-list-item', [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/changelog"
    }
  }, [_vm._v("Changelog")])], 1), _vm._v(" "), _c('md-list-item', [_c('router-link', {
    attrs: {
      "exact": "",
      "to": "/about"
    }
  }, [_vm._v("About")])], 1)], 1)], 1), _vm._v(" "), _c('release-version')], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "md-router",
      "appear": ""
    }
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 380 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-media",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 381 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "md-list-item md-list-item-expand",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "md-list-item-container md-button"
  }, [_vm._t("default"), _vm._v(" "), _c('md-icon', {
    staticClass: "md-list-expand-indicator"
  }, [_vm._v("keyboard_arrow_down")])], 2), _vm._v(" "), _c('md-button', {
    staticClass: "md-button-ghost",
    attrs: {
      "type": "button",
      "disabled": _vm.disabled
    },
    nativeOn: {
      "click": function($event) {
        _vm.toggleExpandList($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    ref: "expand",
    staticClass: "md-list-expand",
    class: _vm.expandClasses,
    style: (_vm.expandStyles)
  }, [_vm._t("expand")], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 382 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-bottom-bar",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 383 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-menu-item', {
    staticClass: "md-option",
    class: _vm.classes,
    attrs: {
      "tabindex": "-1"
    },
    nativeOn: {
      "click": function($event) {
        _vm.selectOption($event)
      }
    }
  }, [(_vm.parentSelect.multiple) ? _c('md-checkbox', {
    staticClass: "md-primary",
    model: {
      value: (_vm.check),
      callback: function($$v) {
        _vm.check = $$v
      },
      expression: "check"
    }
  }, [_c('span', {
    ref: "item"
  }, [_vm._t("default")], 2)]) : _c('span', {
    ref: "item"
  }, [_vm._t("default")], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 384 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    staticClass: "md-input",
    attrs: {
      "type": _vm.type,
      "disabled": _vm.disabled,
      "required": _vm.required,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "input": _vm.onInput,
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        _vm.onInput($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        _vm.onInput($event)
      }]
    }
  })
},staticRenderFns: []}

/***/ }),
/* 385 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-chip",
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "tabindex": "0"
    }
  }, [_c('div', {
    staticClass: "md-chip-container",
    on: {
      "click": function($event) {
        !_vm.disabled && _vm.mdEditable && _vm.$emit('edit')
      }
    }
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.mdDeletable) ? _c('md-button', {
    staticClass: "md-icon-button md-dense md-delete md-input-action",
    attrs: {
      "tabindex": "-1"
    },
    nativeOn: {
      "click": function($event) {
        !_vm.disabled && _vm.$emit('delete')
      },
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46])) { return null; }
        !_vm.disabled && _vm.$emit('delete')
      }
    }
  }, [_c('md-icon', {
    staticClass: "md-icon-delete"
  }, [_vm._v("cancel")])], 1) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 386 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "md-list-item",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "md-list-item-container md-button"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('md-button', {
    staticClass: "md-button-ghost",
    attrs: {
      "type": "button",
      "disabled": _vm.disabled
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 387 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('textarea', {
    staticClass: "md-input",
    attrs: {
      "disabled": _vm.disabled,
      "required": _vm.required,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "input": _vm.onInput
    }
  })
},staticRenderFns: []}

/***/ }),
/* 388 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.href) ? _c('a', {
    staticClass: "md-button",
    class: [_vm.themeClass],
    attrs: {
      "href": _vm.href,
      "disabled": _vm.disabled,
      "target": _vm.target,
      "rel": _vm.newRel
    },
    on: {
      "click": function($event) {
        _vm.$emit('click', $event)
      }
    }
  }, [_c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  }), _vm._v(" "), _vm._t("default")], 2) : _c('button', {
    staticClass: "md-button",
    class: [_vm.themeClass],
    attrs: {
      "type": _vm.type,
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        _vm.$emit('click', $event)
      }
    }
  }, [_c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  }), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 389 */
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
/* 390 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-stepper",
    class: [_vm.themeClass, _vm.stepsClasses]
  }, [(!_vm.mdVertical) ? _c('md-whiteframe', {
    ref: "stepNavigation",
    staticClass: "md-steps-navigation",
    class: _vm.navigationClasses,
    attrs: {
      "md-tag": "nav",
      "md-elevation": _vm.mdElevation
    }
  }, [_c('md-step-header-container', {
    ref: "stepHeader",
    attrs: {
      "md-vertical": _vm.mdVertical
    }
  }, _vm._l((_vm.stepList), (function(step, index) {
    return _c('md-step-header', {
      key: step.id,
      attrs: {
        "step": step,
        "md-alternate-labels": _vm.mdAlternateLabels
      },
      nativeOn: {
        "click": function($event) {
          _vm.setActiveStep(step)
        }
      }
    })
  })))], 1) : _vm._e(), _vm._v(" "), _c('md-whiteframe', {
    attrs: {
      "md-elevation": _vm.mdElevation
    }
  }, [(!_vm.mdVertical) ? _c('div', {
    ref: "stepContent",
    staticClass: "md-steps-container",
    style: ({
      height: _vm.contentHeight
    })
  }, [_c('div', {
    staticClass: "md-steps-wrapper",
    style: ({
      transform: ("translate3D(-" + _vm.contentWidth + ", 0, 0)")
    })
  }, [_vm._t("default")], 2)]) : _vm._e(), _vm._v(" "), (_vm.mdVertical) ? _c('div', {
    ref: "stepContent",
    staticClass: "md-steps-vertical-container"
  }, [_vm._t("default")], 2) : _vm._e()])], 1)
},staticRenderFns: []}

/***/ }),
/* 391 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-backdrop",
    on: {
      "click": _vm.close,
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.close($event)
      }
    }
  })
},staticRenderFns: []}

/***/ }),
/* 392 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-media-actions"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 393 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-list-expand-container"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 394 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-content"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 395 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-dialog-title md-title"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 396 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-input-container",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._t("default"), _vm._v(" "), (_vm.enableCounter) ? _c('span', {
    staticClass: "md-count"
  }, [_vm._v(_vm._s(_vm.inputLength) + " / " + _vm._s(_vm.counterLength))]) : _vm._e(), _vm._v(" "), (_vm.mdHasPassword) ? _c('md-button', {
    staticClass: "md-icon-button md-toggle-password",
    nativeOn: {
      "click": function($event) {
        _vm.togglePasswordType($event)
      }
    }
  }, [_c('md-icon', {
    staticClass: "md-input-action"
  }, [_vm._v(_vm._s(_vm.showPassword ? 'visibility_off' : 'visibility'))])], 1) : _vm._e(), _vm._v(" "), (_vm.mdClearable && _vm.hasValue) ? _c('md-button', {
    staticClass: "md-icon-button md-clear-input",
    nativeOn: {
      "click": function($event) {
        _vm.clearInput($event)
      }
    }
  }, [_c('md-icon', {
    staticClass: "md-input-action"
  }, [_vm._v("clear")])], 1) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 397 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-datepicker"
  }, [_c('md-icon', {
    nativeOn: {
      "click": function($event) {
        _vm.openPicker($event)
      }
    }
  }, [_vm._v("event")]), _vm._v(" "), _c('md-input', {
    ref: "pickerInput",
    attrs: {
      "type": "date",
      "id": _vm.id,
      "name": _vm.name,
      "required": _vm.required,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled
    },
    nativeOn: {
      "focus": function($event) {
        _vm.openOnFocus($event)
      },
      "input": function($event) {
        _vm.changeValue($event)
      }
    },
    model: {
      value: (_vm.modelDate),
      callback: function($$v) {
        _vm.modelDate = $$v
      },
      expression: "modelDate"
    }
  }), _vm._v(" "), _c('div', {
    ref: "pickerElement",
    staticClass: "md-datepicker-popup",
    class: [_vm.themeClass, _vm.classes],
    style: (_vm.styles)
  }, [_c('div', {
    staticClass: "md-datepicker-header"
  }, [_c('span', {
    staticClass: "md-datepicker-year-select",
    on: {
      "click": _vm.showYearPicker
    }
  }, [_vm._v(_vm._s(_vm.selectedDate.getFullYear()))]), _vm._v(" "), _c('div', {
    staticClass: "md-datepicker-date-select",
    on: {
      "click": _vm.showDatePicker
    }
  }, [_c('strong', {
    staticClass: "md-datepicker-dayname"
  }, [_vm._v(_vm._s(_vm.locale.shortDays[_vm.selectedDate.getDay()]) + ",")]), _vm._v(" "), _c('strong', {
    staticClass: "md-datepicker-monthname"
  }, [_vm._v(_vm._s(_vm.locale.shortMonths[_vm.selectedDate.getMonth()]))]), _vm._v(" "), _c('strong', {
    staticClass: "md-datepicker-day"
  }, [_vm._v(_vm._s(_vm.selectedDate.getDate()))])])]), _vm._v(" "), _c('div', {
    staticClass: "md-datepicker-body"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentView === 'date'),
      expression: "currentView === 'date'"
    }],
    staticClass: "md-datepicker-calendar"
  }, [_c('div', {
    staticClass: "md-datepicker-controls"
  }, [_c('button', {
    staticClass: "md-button md-icon-button",
    on: {
      "click": _vm.previousMonth
    }
  }, [_c('md-icon', [_vm._v("keyboard_arrow_left")])], 1), _vm._v(" "), _c('button', {
    staticClass: "md-button md-icon-button",
    on: {
      "click": _vm.nextMonth
    }
  }, [_c('md-icon', [_vm._v("keyboard_arrow_right")])], 1)]), _vm._v(" "), _c('transition-group', {
    staticClass: "md-calendar-container",
    class: {
      'md-previous': _vm.lastAction === 'previous', 'md-next': _vm.lastAction === 'next'
    },
    attrs: {
      "tag": "div",
      "name": "slide-month",
      "appear": ""
    }
  }, _vm._l(([_vm.currentDate]), (function(month) {
    return _c('div', {
      key: month,
      staticClass: "md-datepicker-month"
    }, [_c('md-button', {
      staticClass: "md-current-date",
      nativeOn: {
        "click": function($event) {
          _vm.showMonthPicker($event)
        }
      }
    }, [_vm._v(_vm._s(_vm.locale.months[month.getMonth()]) + " " + _vm._s(month.getFullYear()))]), _vm._v(" "), _c('div', {
      staticClass: "md-datepicker-week-days"
    }, _vm._o(_vm._l((_vm.locale.shorterDays), (function(day) {
      return _c('span', [_vm._v(_vm._s(day))])
    })), 0, month)), _vm._v(" "), _c('div', {
      staticClass: "md-datepicker-days"
    }, [_vm._o(_vm._l((_vm.startOfMonth(month).getDay()), (function(day) {
      return _c('span', {
        staticClass: "md-empty"
      })
    })), 1, month), _vm._v(" "), _vm._l((_vm.getDaysInMonth(month)), (function(day) {
      return _c('button', {
        key: day,
        staticClass: "md-button md-icon-button",
        class: {
          'md-current': _vm.isToday(day),
            'md-selected': _vm.isSelectedDay(day)
        },
        on: {
          "click": function($event) {
            _vm.setDate(day)
          }
        }
      }, [_vm._v("\n                " + _vm._s(day) + "\n              ")])
    }))], 2)], 1)
  })))], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentView === 'year'),
      expression: "currentView === 'year'"
    }],
    staticClass: "md-datepicker-years"
  }, _vm._l((_vm.visibleYears()), (function(year) {
    return _c('button', {
      key: year,
      staticClass: "md-button md-dense md-datepicker-year",
      class: [{
          'md-current': _vm.isThisYear(year),
          'md-selected': _vm.isSelectedYear(year),
        },
        'data-' + year
      ],
      on: {
        "click": function($event) {
          _vm.setYear(year)
        }
      }
    }, [_vm._v("\n          " + _vm._s(year) + "\n        ")])
  }))), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentView === 'month'),
      expression: "currentView === 'month'"
    }],
    staticClass: "md-datepicker-months"
  }, _vm._l((_vm.locale.months), (function(month, index) {
    return _c('button', {
      key: month,
      staticClass: "md-button md-dense md-datepicker-month",
      class: {
        'md-current': _vm.isThisMonth(index),
          'md-selected': _vm.isSelectedMonth(index),
      },
      on: {
        "click": function($event) {
          _vm.setMonth(index)
        }
      }
    }, [_vm._v("\n          " + _vm._s(month) + "\n        ")])
  }))), _vm._v(" "), _c('div', {
    staticClass: "md-datepicker-actions md-dialog-actions"
  }, [_c('md-button', {
    nativeOn: {
      "click": function($event) {
        _vm.closePicker($event)
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.closePicker($event)
      }
    }
  }, [_vm._v("Ok")])], 1)])]), _vm._v(" "), _c('md-backdrop', {
    ref: "pickerBackdrop",
    staticClass: "md-datepicker-backdrop",
    class: _vm.classes,
    on: {
      "close": _vm.closePicker
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 398 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-select",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('md-menu', {
    attrs: {
      "md-close-on-select": !_vm.multiple
    },
    on: {
      "open": _vm.onOpen,
      "close": function($event) {
        _vm.$emit('closed')
      }
    }
  }, [_c('span', {
    ref: "value",
    staticClass: "md-select-value",
    attrs: {
      "md-menu-trigger": ""
    }
  }, [_vm._v(_vm._s(_vm.selectedText || _vm.placeholder))]), _vm._v(" "), _c('md-menu-content', {
    staticClass: "md-select-content",
    class: [_vm.themeClass, _vm.contentClasses]
  }, [_vm._t("default")], 2)], 1), _vm._v(" "), _c('select', {
    attrs: {
      "name": _vm.name,
      "id": _vm.id,
      "required": _vm.required,
      "disabled": _vm.disabled,
      "tabindex": "-1"
    }
  }, [(!_vm.multiple) ? _c('option', {
    attrs: {
      "selected": "true"
    },
    domProps: {
      "value": _vm.selectedValue
    }
  }, [_vm._v(_vm._s(_vm.selectedText))]) : _vm._e(), _vm._v(" "), _vm._l((_vm.multipleOptions), (function(option) {
    return (option.value) ? _c('option', {
      attrs: {
        "selected": "true"
      },
      domProps: {
        "value": option.value
      }
    }, [_vm._v(_vm._s(option.text))]) : _vm._e()
  }))], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 399 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-file",
    on: {
      "click": _vm.openPicker
    }
  }, [_c('md-icon', [_vm._v("attach_file")]), _vm._v(" "), _c('md-input', {
    ref: "textInput",
    attrs: {
      "readonly": "",
      "required": _vm.required,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled
    },
    model: {
      value: (_vm.filename),
      callback: function($$v) {
        _vm.filename = $$v
      },
      expression: "filename"
    }
  }), _vm._v(" "), _c('input', {
    ref: "fileInput",
    attrs: {
      "type": "file",
      "id": _vm.id,
      "name": _vm.name,
      "disabled": _vm.disabled,
      "multiple": _vm.multiple,
      "accept": _vm.accept
    },
    on: {
      "change": _vm.onFileSelected
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 400 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.mounted || !_vm.disabled) ? _c('div', {
    staticClass: "md-ink-ripple"
  }, [_c('div', {
    ref: "ripple",
    staticClass: "md-ripple",
    class: _vm.classes,
    style: (_vm.styles)
  })]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 401 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "example-box"
  }, [_c('md-card', {
    staticClass: "example-box-card"
  }, [_c('md-toolbar', {
    staticClass: "md-dense",
    attrs: {
      "md-theme": "white"
    }
  }, [_c('h3', {
    staticClass: "md-title"
  }, [_vm._v(_vm._s(_vm.cardTitle))])]), _vm._v(" "), _c('md-card-area', [_c('md-tabs', {
    staticClass: "md-transparent example-tabs",
    attrs: {
      "md-right": "",
      "md-dynamic-height": false
    }
  }, [_c('md-tab', {
    staticClass: "example-content",
    attrs: {
      "md-label": "Demo",
      "md-active": ""
    }
  }, [_vm._t("demo")], 2), _vm._v(" "), _c('md-tab', {
    staticClass: "code-content",
    attrs: {
      "md-label": "Code"
    }
  }, [_vm._t("code")], 2)], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 402 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-step-header",
    class: _vm.getHeaderClasses
  }, [_c('div', {
    staticClass: "md-step-icons"
  }, [(_vm.icon) ? _c('md-icon', {
    staticClass: "md-step-icon"
  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e(), _vm._v(" "), (!_vm.icon) ? _c('div', {
    staticClass: "md-step-number"
  }, [_c('span', [_vm._v(_vm._s(_vm.stepNumber))])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "md-step-titles"
  }, [_c('div', {
    staticClass: "md-step-title"
  }, [_vm._v(_vm._s(_vm.step.label))]), _vm._v(" "), (_vm.step.message) ? _c('small', [_vm._v(_vm._s(_vm.step.message))]) : _vm._e()]), _vm._v(" "), (_vm.step.toolTip) ? _c('md-tooltip', {
    attrs: {
      "md-direction": _vm.step.tooltipDirection,
      "md-delay": _vm.step.tooltipDelay
    }
  }, [_vm._v(_vm._s(_vm.step.toolTip))]) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 403 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-tabs",
    class: [_vm.themeClass, _vm.tabClasses]
  }, [_c('md-whiteframe', {
    ref: "tabNavigation",
    staticClass: "md-tabs-navigation",
    class: _vm.navigationClasses,
    attrs: {
      "md-tag": "nav",
      "md-elevation": _vm.mdElevation
    }
  }, [_c('div', {
    ref: "tabsContainer",
    staticClass: "md-tabs-navigation-container",
    on: {
      "scroll": _vm.calculateIndicatorPos
    }
  }, [_vm._l((_vm.tabList), (function(header) {
    return _c('button', {
      key: header.id,
      ref: "tabHeader",
      refInFor: true,
      staticClass: "md-tab-header",
      class: _vm.getHeaderClass(header),
      attrs: {
        "type": "button",
        "disabled": header.disabled
      },
      on: {
        "click": function($event) {
          _vm.setActiveTab(header)
        }
      }
    }, [_c('md-ink-ripple', {
      attrs: {
        "md-disabled": header.disabled
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "md-tab-header-container"
    }, [_vm._t("header-item", [(header.icon) ? _c('md-icon', [_vm._v(_vm._s(header.icon))]) : _vm._e(), _vm._v(" "), (header.label) ? _c('span', [_vm._v(_vm._s(header.label))]) : _vm._e()], {
      header: header
    }), _vm._v(" "), (header.tooltip) ? _c('md-tooltip', {
      attrs: {
        "md-direction": header.tooltipDirection,
        "md-delay": header.tooltipDelay
      }
    }, [_vm._v(_vm._s(header.tooltip))]) : _vm._e()], 2)], 1)
  })), _vm._v(" "), _c('span', {
    ref: "indicator",
    staticClass: "md-tab-indicator",
    class: _vm.indicatorClasses
  })], 2)]), _vm._v(" "), _c('div', {
    ref: "tabContent",
    staticClass: "md-tabs-content",
    style: ({
      height: _vm.contentHeight
    })
  }, [_c('div', {
    staticClass: "md-tabs-wrapper",
    style: ({
      transform: ("translate3D(-" + _vm.contentWidth + ", 0, 0)")
    })
  }, [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}

/***/ }),
/* 404 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-table-edit",
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.closeDialog($event)
      }
    }
  }, [_c('div', {
    staticClass: "md-table-edit-trigger",
    class: _vm.triggerClasses,
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.openDialog($event)
      }
    }
  }, [_vm._v("\n    " + _vm._s(_vm.value || _vm.mdPlaceholder) + "\n  ")]), _vm._v(" "), _c('div', {
    ref: "dialog",
    staticClass: "md-table-dialog",
    class: _vm.dialogClasses
  }, [_c('md-input-container', [_c('md-input', {
    ref: "input",
    attrs: {
      "id": _vm.mdId,
      "name": _vm.mdName,
      "maxlength": _vm.mdMaxlength,
      "value": _vm.value,
      "placeholder": _vm.mdPlaceholder
    },
    nativeOn: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.confirmDialog($event)
      }
    }
  })], 1)], 1)])
},staticRenderFns: []}

/***/ }),
/* 405 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-checkbox",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('div', {
    staticClass: "md-checkbox-container",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.toggleCheck($event)
      }
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "id": _vm.id,
      "disabled": _vm.disabled,
      "tabindex": "-1"
    },
    domProps: {
      "value": _vm.value,
      "checked": _vm.checked
    }
  }), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  })], 1), _vm._v(" "), (_vm.$slots.default) ? _c('label', {
    staticClass: "md-checkbox-label",
    attrs: {
      "for": _vm.id || _vm.name
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 406 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-chips",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('md-input-container', {
    nativeOn: {
      "click": function($event) {
        _vm.applyInputFocus($event)
      }
    }
  }, [_vm._l((_vm.selectedChips), (function(chip) {
    return _c('md-chip', {
      key: chip,
      attrs: {
        "md-deletable": !_vm.mdStatic,
        "md-editable": !_vm.mdStatic,
        "disabled": _vm.disabled
      },
      on: {
        "delete": function($event) {
          _vm.deleteChip(chip)
        },
        "edit": function($event) {
          _vm.editChip(chip)
        }
      }
    }, [_vm._t("default", null, {
      value: chip
    })], 2)
  })), _vm._v(" "), _c('md-input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.mdStatic),
      expression: "!mdStatic"
    }],
    ref: "input",
    attrs: {
      "type": _vm.mdInputType,
      "placeholder": _vm.mdInputPlaceholder,
      "id": _vm.inputId,
      "name": _vm.mdInputName,
      "disabled": _vm.disabled,
      "tabindex": "0"
    },
    nativeOn: {
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46])) { return null; }
        _vm.deleteLastChip($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        _vm.addChip($event)
      }]
    },
    model: {
      value: (_vm.currentChip),
      callback: function($$v) {
        _vm.currentChip = $$v
      },
      expression: "currentChip"
    }
  })], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 407 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-header"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 408 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "md-list-item"
  }, [_c('div', {
    staticClass: "md-list-item-container"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 409 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('hr', {
    staticClass: "md-divider"
  })
},staticRenderFns: []}

/***/ }),
/* 410 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-table-pagination"
  }, [_c('span', {
    staticClass: "md-table-pagination-label"
  }, [_vm._v(_vm._s(_vm.mdLabel) + ":")]), _vm._v(" "), (_vm.mdPageOptions) ? _c('md-select', {
    attrs: {
      "md-menu-class": "md-pagination-select"
    },
    on: {
      "change": _vm.changeSize
    },
    model: {
      value: (_vm.currentSize),
      callback: function($$v) {
        _vm.currentSize = $$v
      },
      expression: "currentSize"
    }
  }, _vm._l((_vm.mdPageOptions), (function(amount) {
    return _c('md-option', {
      key: amount,
      attrs: {
        "value": amount
      }
    }, [_vm._v(_vm._s(amount))])
  }))) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(((_vm.currentPage - 1) * _vm.currentSize) + 1) + "-" + _vm._s(_vm.subTotal) + " " + _vm._s(_vm.mdSeparator) + " " + _vm._s(_vm.mdTotal))]), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-table-pagination-previous",
    attrs: {
      "disabled": _vm.currentPage === 1
    },
    nativeOn: {
      "click": function($event) {
        _vm.previousPage($event)
      }
    }
  }, [_c('md-icon', [_vm._v("keyboard_arrow_left")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-table-pagination-next",
    attrs: {
      "disabled": _vm.shouldDisable
    },
    nativeOn: {
      "click": function($event) {
        _vm.nextPage($event)
      }
    }
  }, [_c('md-icon', [_vm._v("keyboard_arrow_right")])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 411 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-dialog-content"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 412 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-snackbar",
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "id": _vm.snackbarId
    },
    on: {
      "mouseenter": _vm.pauseTimeout,
      "mouseleave": _vm.resumeTimeout
    }
  }, [_c('div', {
    ref: "container",
    staticClass: "md-snackbar-container"
  }, [_c('div', {
    staticClass: "md-snackbar-content"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}

/***/ }),
/* 413 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-sidenav",
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "tabindex": "0"
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.close($event)
      }
    }
  }, [_c('div', {
    staticClass: "md-sidenav-content"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('md-backdrop', {
    ref: "backdrop",
    staticClass: "md-sidenav-backdrop",
    on: {
      "close": _vm.close
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 414 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-content component-docs"
  }, [_c('div', {
    staticClass: "usage-content"
  }, [_c('section', {
    staticClass: "component-description"
  }, [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("Description")]), _vm._v(" "), _vm._t("description")], 2), _vm._v(" "), (_vm.$slots.api) ? _c('section', {
    staticClass: "api-documentation"
  }, [_c('h2', {
    staticClass: "md-headline"
  }, [_vm._v("API Options")]), _vm._v(" "), _vm._t("api")], 2) : _vm._e(), _vm._v(" "), _vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "example-content"
  }, [_vm._t("example")], 2)])
},staticRenderFns: []}

/***/ }),
/* 415 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.svgContent) ? _c('i', {
    staticClass: "md-icon",
    class: [_vm.themeClass],
    domProps: {
      "innerHTML": _vm._s(_vm.svgContent)
    }
  }) : (_vm.imageSrc) ? _c('md-image', {
    staticClass: "md-icon",
    class: [_vm.themeClass],
    attrs: {
      "md-src": _vm.imageSrc
    }
  }) : _c('i', {
    staticClass: "md-icon",
    class: [_vm.themeClass, _vm.mdIconset],
    attrs: {
      "aria-hidden": !!_vm.mdIconset
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 416 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-switch",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('div', {
    staticClass: "md-switch-container",
    on: {
      "click": function($event) {
        _vm.toggle($event)
      }
    }
  }, [_c('div', {
    staticClass: "md-switch-thumb",
    style: (_vm.styles)
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "id": _vm.id,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "md-switch-holder",
    attrs: {
      "type": _vm.type
    }
  }), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  })], 1)]), _vm._v(" "), (_vm.$slots.default) ? _c('label', {
    staticClass: "md-switch-label",
    attrs: {
      "for": _vm.id || _vm.name
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 417 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.$parent.$options._componentTag === 'md-list') ? _c('li', {
    staticClass: "md-subheader",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2) : _c('div', {
    staticClass: "md-subheader",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 418 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-content"
  }, [_c('md-whiteframe', {
    staticClass: "main-header",
    attrs: {
      "md-tag": "md-toolbar",
      "md-elevation": "1"
    }
  }, [_c('md-button', {
    staticClass: "md-icon-button nav-trigger",
    nativeOn: {
      "click": function($event) {
        _vm.toggleSidenav($event)
      }
    }
  }, [_c('md-icon', [_vm._v("menu")])], 1), _vm._v(" "), _c('div', {
    staticClass: "md-title"
  }, [_vm._v(_vm._s(_vm.pageTitle))]), _vm._v(" "), _c('release-version'), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button github",
    attrs: {
      "href": "https://github.com/marcosmoura/vue-material",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('md-icon', {
    attrs: {
      "md-src": "assets/icon-github.svg"
    }
  })], 1)], 1), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(156);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("1bb95c8f", content, true);

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(157);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("35021537", content, true);

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("48c800c6", content, true);

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("6dcafbb7", content, true);

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(160);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("dc3b9270", content, true);

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("4beb0513", content, true);

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("ac6940e6", content, true);

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("6bbe8b80", content, true);

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("0e4e1d60", content, true);

/***/ })
],[110]);