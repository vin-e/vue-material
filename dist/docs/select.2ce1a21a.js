webpackJsonp([7],{

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(571)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(480),
  /* template */
  __webpack_require__(535),
  /* scopeId */
  "data-v-3e3e47e7",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 480:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    movie: 'godfather',
    country: '',
    font: '',
    food: '',
    users: ['jim_halpert', 'michael_scott']
  }),
  methods: {
    setPulpFiction() {
      this.movie = 'pulp_fiction';
    }
  }
});

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".field-group[data-v-3e3e47e7]{display:-ms-flexbox;display:flex}.md-input-container[data-v-3e3e47e7]{max-width:300px}.md-input-container+.md-input-container[data-v-3e3e47e7]{margin-left:4px}.multiple[data-v-3e3e47e7]{height:300px}", ""]);

// exports


/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - Select"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("A dropdown button selects between multiple selections. The select displays the current state and a down arrow.")])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-select"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("v-model")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("A required model object to bind the value.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("name")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The name of the select")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("id")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The id of the select")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("disabled")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Disable the input and prevent its actions. Default "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("required")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Apply the required rule to style the label with an \"*\". Default "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("placeholder")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the placeholder.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-menu-class")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The css class to be applied on the opened select holder")])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "events"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Value")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("selected|change")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Receives the value of the model")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when the model changes.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("opened")]), _vm._v(" "), _c('md-table-cell', [_vm._v("none")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered the select is opened.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("closed")]), _vm._v(" "), _c('md-table-cell', [_vm._v("none")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered the select is closed.")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-option"
    }
  }, [_c('p', [_vm._v("Displays a single item inside the select.")]), _vm._v(" "), _c('div', {
    slot: "properties"
  }, [_c('md-table', [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("value")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The value of the option to be binded on the v-model")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("disabled")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Disable the button and prevent its actions. Default "), _c('code', [_vm._v("false")])])], 1)], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "events"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Value")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("selected")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Receives the "), _c('code', [_vm._v("$event")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when the item receives a click.")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Default"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('div', {
    staticClass: "field-group"
  }, [_c('md-input-container', [_c('label', {
    attrs: {
      "for": "movie"
    }
  }, [_vm._v("Movie")]), _vm._v(" "), _c('md-select', {
    attrs: {
      "name": "movie",
      "id": "movie"
    },
    model: {
      value: (_vm.movie),
      callback: function($$v) {
        _vm.movie = $$v
      },
      expression: "movie"
    }
  }, [_c('md-option', {
    attrs: {
      "value": "fight_club"
    }
  }, [_vm._v("Fight Club")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "godfather"
    }
  }, [_vm._v("Godfather")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "godfather_ii"
    }
  }, [_vm._v("Godfather II")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "godfather_iii"
    }
  }, [_vm._v("Godfather III")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "godfellas"
    }
  }, [_vm._v("Godfellas")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "pulp_fiction"
    }
  }, [_vm._v("Pulp Fiction")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "scarface"
    }
  }, [_vm._v("Scarface")])], 1)], 1), _vm._v(" "), _c('md-input-container', [_c('label', {
    attrs: {
      "for": "country"
    }
  }, [_vm._v("Country")]), _vm._v(" "), _c('md-select', {
    attrs: {
      "name": "country",
      "id": "country"
    },
    model: {
      value: (_vm.country),
      callback: function($$v) {
        _vm.country = $$v
      },
      expression: "country"
    }
  }, [_c('md-option', {
    attrs: {
      "value": "australia"
    }
  }, [_vm._v("Australia")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "brazil"
    }
  }, [_vm._v("Brazil")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "japan"
    }
  }, [_vm._v("Japan")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "united_states"
    }
  }, [_vm._v("United States")])], 1)], 1), _vm._v(" "), _c('md-input-container', [_c('label', {
    attrs: {
      "for": "font"
    }
  }, [_vm._v("Font")]), _vm._v(" "), _c('md-select', {
    attrs: {
      "name": "font",
      "id": "font"
    },
    model: {
      value: (_vm.font),
      callback: function($$v) {
        _vm.font = $$v
      },
      expression: "font"
    }
  }, [_c('md-option', {
    attrs: {
      "value": "arial"
    }
  }, [_vm._v("Arial")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "calibri"
    }
  }, [_vm._v("Calibri")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "cambria"
    }
  }, [_vm._v("Cambria")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "comic_sans"
    }
  }, [_vm._v("Comic Sans")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "consolas"
    }
  }, [_vm._v("Consolas")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "courier"
    }
  }, [_vm._v("Courier")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "droid_sans"
    }
  }, [_vm._v("Droid Sans")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "georgia"
    }
  }, [_vm._v("Georgia")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "helvetica"
    }
  }, [_vm._v("Helvetica")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "impact"
    }
  }, [_vm._v("Impact")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "roboto"
    }
  }, [_vm._v("Roboto")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "segoe_ui"
    }
  }, [_vm._v("Segoe UI")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "times_new_roman"
    }
  }, [_vm._v("Times New Roman")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "ubuntu"
    }
  }, [_vm._v("Ubuntu")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "verdana"
    }
  }, [_vm._v("Verdana")])], 1)], 1), _vm._v(" "), _c('md-input-container', [_c('label', {
    attrs: {
      "for": "food"
    }
  }, [_vm._v("Food")]), _vm._v(" "), _c('md-select', {
    attrs: {
      "name": "food",
      "id": "food"
    },
    model: {
      value: (_vm.food),
      callback: function($$v) {
        _vm.food = $$v
      },
      expression: "food"
    }
  }, [_c('md-subheader', [_vm._v("Fruits")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "apples"
    }
  }, [_vm._v("Apples")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "bananas"
    }
  }, [_vm._v("Bananas")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "peaches"
    }
  }, [_vm._v("Peaches")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "oranges"
    }
  }, [_vm._v("Oranges")]), _vm._v(" "), _c('md-subheader', [_vm._v("Vegetables")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "carrots"
    }
  }, [_vm._v("Carrots")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "cucumbers"
    }
  }, [_vm._v("Cucumbers")]), _vm._v(" "), _c('md-subheader', [_vm._v("Baked Goods")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "apple_pie"
    }
  }, [_vm._v("Apple Pie")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "chocolate_cake"
    }
  }, [_vm._v("Chocolate Cake")])], 1)], 1)], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.setPulpFiction($event)
      }
    }
  }, [_vm._v("Set Pulp Fiction")])], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <div class=\"field-group\">\n              <md-input-container>\n                <label for=\"movie\">Movie</label>\n                <md-select name=\"movie\" id=\"movie\" v-model=\"movie\">\n                  <md-option value=\"fight_club\">Fight Club</md-option>\n                  <md-option value=\"godfather\">Godfather</md-option>\n                  <md-option value=\"godfather_ii\">Godfather II</md-option>\n                  <md-option value=\"godfather_iii\">Godfather III</md-option>\n                  <md-option value=\"godfellas\">Godfellas</md-option>\n                  <md-option value=\"pulp_fiction\">Pulp Fiction</md-option>\n                  <md-option value=\"scarface\">Scarface</md-option>\n                </md-select>\n              </md-input-container>\n\n              <md-input-container>\n                <label for=\"country\">Country</label>\n                <md-select name=\"country\" id=\"country\" v-model=\"country\">\n                  <md-option value=\"australia\">Australia</md-option>\n                  <md-option value=\"brazil\">Brazil</md-option>\n                  <md-option value=\"japan\">Japan</md-option>\n                  <md-option value=\"united_states\">United States</md-option>\n                </md-select>\n              </md-input-container>\n\n              <md-input-container>\n                <label for=\"font\">Font</label>\n                <md-select name=\"font\" id=\"font\" v-model=\"font\">\n                  <md-option value=\"arial\">Arial</md-option>\n                  <md-option value=\"calibri\">Calibri</md-option>\n                  <md-option value=\"cambria\">Cambria</md-option>\n                  <md-option value=\"comic_sans\">Comic Sans</md-option>\n                  <md-option value=\"consolas\">Consolas</md-option>\n                  <md-option value=\"courier\">Courier</md-option>\n                  <md-option value=\"droid_sans\">Droid Sans</md-option>\n                  <md-option value=\"georgia\">Georgia</md-option>\n                  <md-option value=\"helvetica\">Helvetica</md-option>\n                  <md-option value=\"impact\">Impact</md-option>\n                  <md-option value=\"roboto\">Roboto</md-option>\n                  <md-option value=\"segoe_ui\">Segoe UI</md-option>\n                  <md-option value=\"times_new_roman\">Times New Roman</md-option>\n                  <md-option value=\"ubuntu\">Ubuntu</md-option>\n                  <md-option value=\"verdana\">Verdana</md-option>\n                </md-select>\n              </md-input-container>\n\n              <md-input-container>\n                <label for=\"food\">Food</label>\n                <md-select name=\"food\" id=\"food\" v-model=\"food\">\n                  <md-subheader>Fruits</md-subheader>\n                  <md-option value=\"apples\">Apples</md-option>\n                  <md-option value=\"bananas\">Bananas</md-option>\n                  <md-option value=\"peaches\">Peaches</md-option>\n                  <md-option value=\"oranges\">Oranges</md-option>\n\n                  <md-subheader>Vegetables</md-subheader>\n                  <md-option value=\"carrots\">Carrots</md-option>\n                  <md-option value=\"cucumbers\">Cucumbers</md-option>\n\n                  <md-subheader>Baked Goods</md-subheader>\n                  <md-option value=\"apple_pie\">Apple Pie</md-option>\n                  <md-option value=\"chocolate_cake\">Chocolate Cake</md-option>\n                </md-select>\n              </md-input-container>\n            </div>\n\n            <md-button class=\"md-raised md-primary\" @click.native=\"setPulpFiction\">Set Pulp Fiction</md-button>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                movie: 'godfather',\n                country: '',\n                font: ''\n              }),\n              methods: {\n                setPulpFiction() {\n                  this.movie = 'pulp_fiction';\n                }\n              }\n            };\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Multiple"
    }
  }, [_c('div', {
    staticClass: "multiple",
    slot: "demo"
  }, [_c('div', {
    staticClass: "field-group"
  }, [_c('md-input-container', [_c('label', {
    attrs: {
      "for": "users"
    }
  }, [_vm._v("Users")]), _vm._v(" "), _c('md-select', {
    attrs: {
      "name": "users",
      "id": "users",
      "multiple": ""
    },
    model: {
      value: (_vm.users),
      callback: function($$v) {
        _vm.users = $$v
      },
      expression: "users"
    }
  }, [_c('md-subheader', [_vm._v("Managers")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "jim_halpert"
    }
  }, [_vm._v("Jim Halpert")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "dwight_schrute"
    }
  }, [_vm._v("Dwight Schrute")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "michael_scott"
    }
  }, [_vm._v("Michael Scott")]), _vm._v(" "), _c('md-subheader', [_vm._v("Employees")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "pam_beesly"
    }
  }, [_vm._v("Pam Beesly")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "angela_martin"
    }
  }, [_vm._v("Angela Martin")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "kelly_kapoor"
    }
  }, [_vm._v("Kelly Kapoor")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "ryan_howard"
    }
  }, [_vm._v("Ryan Howard")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "kevin_malone"
    }
  }, [_vm._v("Kevin Malone")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "creed_bratton"
    }
  }, [_vm._v("Creed Bratton")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "oscar_nunez"
    }
  }, [_vm._v("Oscar Nunez")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "toby_flenderson"
    }
  }, [_vm._v("Toby Flenderson")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "stanley_hudson"
    }
  }, [_vm._v("Stanley Hudson")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "meredith_palmer"
    }
  }, [_vm._v("Meredith Palmer")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "phyllis_lapin_vance"
    }
  }, [_vm._v("Phyllis Lapin-Vance")])], 1)], 1)], 1), _vm._v(" "), _c('div', [_vm._v("Selected users: " + _vm._s(_vm.users))])]), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-input-container>\n              <label for=\"users\">Users</label>\n              <md-select name=\"users\" id=\"users\" multiple v-model=\"users\">\n                <md-subheader>Managers</md-subheader>\n                <md-option value=\"jim_halpert\">Jim Halpert</md-option>\n                <md-option value=\"dwight_schrute\">Dwight Schrute</md-option>\n                <md-option value=\"michael_scott\">Michael Scott</md-option>\n\n                <md-subheader>Employees</md-subheader>\n                <md-option value=\"pam_beesly\">Pam Beesly</md-option>\n                <md-option value=\"angela_martin\">Angela Martin</md-option>\n                <md-option value=\"kelly_kapoor\">Kelly Kapoor</md-option>\n                <md-option value=\"ryan_howard\">Ryan Howard</md-option>\n                <md-option value=\"kevin_malone\">Kevin Malone</md-option>\n                <md-option value=\"creed_bratton\">Creed Bratton</md-option>\n                <md-option value=\"oscar_nunez\">Oscar Nunez</md-option>\n                <md-option value=\"toby_flenderson\">Toby Flenderson</md-option>\n                <md-option value=\"stanley_hudson\">Stanley Hudson</md-option>\n                <md-option value=\"meredith_palmer\">Meredith Palmer</md-option>\n                <md-option value=\"phyllis_lapin_vance\">Phyllis Lapin-Vance</md-option>\n              </md-select>\n            </md-input-container>\n\n            <div>Selected users: " + _vm._s(_vm.users) + "</div>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                food: '',\n                users: [\n                  'jim_halpert',\n                  'michael_scott'\n                ]\n              })\n            };\n          ")])], 1)])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(499);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("68b12670", content, true);

/***/ })

});