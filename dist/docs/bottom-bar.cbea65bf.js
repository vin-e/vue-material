webpackJsonp([14],{

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(573)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(468),
  /* template */
  __webpack_require__(539),
  /* scopeId */
  "data-v-4d581d66",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 468:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      playground: {
        theme: 'brown'
      }
    };
  },
  methods: {
    setTheme(theme) {
      this.playground.theme = theme;
    }
  }
});

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".md-bottom-bar[data-v-4d581d66]{position:absolute;right:0;bottom:0;left:0}.phone-viewport[data-v-4d581d66]{width:320px;height:150px;margin-right:16px;display:inline-block;position:relative;overflow:hidden;background-color:#ededed}", ""]);

// exports


/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - Bottom Bar"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("Bottom navigation bars make it easy to explore and switch between top-level views in a single tap.")]), _vm._v(" "), _c('p', [_vm._v("The following classes can be applied to change the color palette:")]), _vm._v(" "), _c('ul', {
    staticClass: "md-body-2"
  }, [_c('li', [_c('code', [_vm._v("md-accent")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("md-warn")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("md-transparent")])])])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-bottom-bar"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-shift")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Enable the shifting variant. Default "), _c('code', [_vm._v("false")])])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "events"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Value")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("change")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Receive the item index")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when an item is activated.")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-bottom-bar-item"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-icon")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Icon name on the "), _c('a', {
    attrs: {
      "href": "https://material.io/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Material Icons")]), _vm._v(" docs.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-icon-src")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set icon src url. See "), _c('a', {
    attrs: {
      "href": "#/components/Icon"
    }
  }, [_vm._v("Icon ")]), _vm._v(" component for more details.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-iconset")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set the 3rd party iconset to use. See "), _c('a', {
    attrs: {
      "href": "#/components/Icon"
    }
  }, [_vm._v("Icon ")]), _vm._v(" component for more details.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-active")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set initial selection. Default "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("href")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Create a anchor on the item - In this case the generated tag will be "), _c('code', [_vm._v("<a>")]), _vm._v(".")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("disabled")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Disable the item and prevent its actions. Default "), _c('code', [_vm._v("false")])])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Default"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('div', {
    staticClass: "phone-viewport"
  }, [_c('md-bottom-bar', [_c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "history"
    }
  }, [_vm._v("Recents")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "favorite",
      "md-active": ""
    }
  }, [_vm._v("Favorites")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "near_me"
    }
  }, [_vm._v("Nearby")])], 1)], 1)]), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-bottom-bar>\n              <md-bottom-bar-item md-icon=\"history\">Recents</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon=\"favorite\" md-active>Favorites</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon=\"near_me\">Nearby</md-bottom-bar-item>\n            </md-bottom-bar>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Using SVG"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('div', {
    staticClass: "phone-viewport"
  }, [_c('md-bottom-bar', [_c('md-bottom-bar-item', {
    attrs: {
      "md-icon-src": "assets/icon-home.svg"
    }
  }, [_vm._v("Recents")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon-src": "assets/icon-home.svg",
      "md-active": ""
    }
  }, [_vm._v("Favorites")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon-src": "assets/icon-home.svg"
    }
  }, [_vm._v("Nearby")])], 1)], 1)]), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-bottom-bar>\n              <md-bottom-bar-item md-icon-src=\"assets/icon-home.svg\">Recents</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon-src=\"assets/icon-home.svg\" md-active>Favorites</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon-src=\"assets/icon-home.svg\">Nearby</md-bottom-bar-item>\n            </md-bottom-bar>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Using Iconsets"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('link', {
    attrs: {
      "rel": "stylesheet",
      "href": "https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css"
    }
  }), _vm._v(" "), _c('div', [_vm._v("This example uses "), _c('a', {
    attrs: {
      "href": "http://simplelineicons.com/",
      "target": "simple_line"
    }
  }, [_vm._v("Simple Line Icons")])]), _vm._v(" "), _c('div', {
    staticClass: "phone-viewport"
  }, [_c('md-bottom-bar', [_c('md-bottom-bar-item', {
    attrs: {
      "md-iconset": "icon-speedometer"
    }
  }, [_vm._v("Recents")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-iconset": "icon-heart",
      "md-active": ""
    }
  }, [_vm._v("Favorites")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-iconset": "icon-cursor"
    }
  }, [_vm._v("Nearby")])], 1)], 1)]), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-bottom-bar>\n              <md-bottom-bar-item md-iconset=\"icon-speedometer\">Recents</md-bottom-bar-item>\n              <md-bottom-bar-item md-iconset=\"icon-heart\" md-active>Favorites</md-bottom-bar-item>\n              <md-bottom-bar-item md-iconset=\"icon-cursor\">Nearby</md-bottom-bar-item>\n            </md-bottom-bar>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Shifting"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('div', {
    staticClass: "phone-viewport"
  }, [_c('md-bottom-bar', {
    attrs: {
      "md-shift": ""
    }
  }, [_c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "ondemand_video"
    }
  }, [_vm._v("Movies")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "music_note"
    }
  }, [_vm._v("Music")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "books",
      "md-active": ""
    }
  }, [_vm._v("Books")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "photo"
    }
  }, [_vm._v("Pictures")])], 1)], 1)]), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-bottom-bar md-shift>\n              <md-bottom-bar-item md-icon=\"ondemand_video\">Movies</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon=\"music_note\">Music</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon=\"books\" md-active>Books</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon=\"photo\">Pictures</md-bottom-bar-item>\n            </md-bottom-bar>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Themes"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('div', {
    staticClass: "phone-viewport"
  }, [_c('md-bottom-bar', {
    attrs: {
      "md-theme": "teal"
    }
  }, [_c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "history"
    }
  }, [_vm._v("Recents")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "favorite",
      "md-active": ""
    }
  }, [_vm._v("Favorites")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "near_me"
    }
  }, [_vm._v("Nearby")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "phone-viewport"
  }, [_c('md-bottom-bar', {
    attrs: {
      "md-shift": "",
      "md-theme": "indigo"
    }
  }, [_c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "ondemand_video"
    }
  }, [_vm._v("Movies")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "music_note"
    }
  }, [_vm._v("Music")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "books",
      "md-active": ""
    }
  }, [_vm._v("Books")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "photo"
    }
  }, [_vm._v("Pictures")])], 1)], 1)]), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <div class=\"phone-viewport\">\n              <md-bottom-bar md-theme=\"teal\">\n                <md-bottom-bar-item md-icon=\"history\">Recents</md-bottom-bar-item>\n                <md-bottom-bar-item md-icon=\"favorite\" md-active>Favorites</md-bottom-bar-item>\n                <md-bottom-bar-item md-icon=\"near_me\">Nearby</md-bottom-bar-item>\n              </md-bottom-bar>\n            </div>\n\n            <div class=\"phone-viewport\">\n              <md-bottom-bar md-shift md-theme=\"indigo\">\n                <md-bottom-bar-item md-icon=\"ondemand_video\">Movies</md-bottom-bar-item>\n                <md-bottom-bar-item md-icon=\"music_note\">Music</md-bottom-bar-item>\n                <md-bottom-bar-item md-icon=\"books\" md-active>Books</md-bottom-bar-item>\n                <md-bottom-bar-item md-icon=\"photo\">Pictures</md-bottom-bar-item>\n              </md-bottom-bar>\n            </div>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Dynamic Theme Example"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('div', {
    staticClass: "phone-viewport"
  }, [_c('md-bottom-bar', {
    attrs: {
      "md-shift": "",
      "md-theme": _vm.playground.theme
    }
  }, [_c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "ondemand_video"
    },
    nativeOn: {
      "click": function($event) {
        _vm.setTheme('blue')
      }
    }
  }, [_vm._v("Movies")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "music_note"
    },
    nativeOn: {
      "click": function($event) {
        _vm.setTheme('teal')
      }
    }
  }, [_vm._v("Music")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "books",
      "md-active": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.setTheme('brown')
      }
    }
  }, [_vm._v("Books")]), _vm._v(" "), _c('md-bottom-bar-item', {
    attrs: {
      "md-icon": "photo"
    },
    nativeOn: {
      "click": function($event) {
        _vm.setTheme('indigo')
      }
    }
  }, [_vm._v("Pictures")])], 1)], 1)]), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-theme :md-name=\"playground.theme\">\n              <md-bottom-bar md-shift>\n                <md-bottom-bar-item @click.native=\"setTheme('blue')\" md-icon=\"ondemand_video\">Movies</md-bottom-bar-item>\n                <md-bottom-bar-item @click.native=\"setTheme('teal')\" md-icon=\"music_note\">Music</md-bottom-bar-item>\n                <md-bottom-bar-item @click.native=\"setTheme('brown')\" md-icon=\"books\" md-active>Books</md-bottom-bar-item>\n                <md-bottom-bar-item @click.native=\"setTheme('indigo')\" md-icon=\"photo\">Pictures</md-bottom-bar-item>\n              </md-bottom-bar>\n            </div>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              data() {\n                return {\n                  playground: {\n                    theme: 'brown'\n                  }\n                };\n              },\n              methods: {\n                setTheme(theme) {\n                  this.playground.theme = theme;\n                }\n              }\n            };\n          ")])], 1)])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(501);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5de6774d", content, true);

/***/ })

});