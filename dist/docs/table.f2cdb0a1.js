webpackJsonp([3],{

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(579)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(485),
  /* template */
  __webpack_require__(546),
  /* scopeId */
  "data-v-5eaafa9a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 485:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    nutrition: [{
      dessert: 'Frozen yogurt',
      type: 'ice_cream',
      calories: '159',
      fat: '6.0',
      comment: 'Icy'
    }, {
      dessert: 'Ice cream sandwich',
      type: 'ice_cream',
      calories: '237',
      fat: '9.0',
      comment: 'Super Tasty'
    }, {
      dessert: 'Eclair',
      type: 'pastry',
      calories: '262',
      fat: '16.0',
      comment: ''
    }, {
      dessert: 'Cupcake',
      type: 'pastry',
      calories: '305',
      fat: '3.7',
      comment: ''
    }, {
      dessert: 'Gingerbread',
      type: 'other',
      calories: '356',
      fat: '16.0',
      comment: ''
    }],
    selectedData: [],
    sortInput: {
      name: 'dessert',
      type: 'asc'
    },
    sort: {},
    page: {}
  }),
  methods: {
    onSelect(data) {
      this.selectedData = data;
      this.$forceUpdate();
    },
    onSort(sort) {
      this.sort = sort;
    },
    onPagination(page) {
      this.page = page;
    }
  }
});

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".md-table+.md-table-card[data-v-5eaafa9a],.md-table-card+.md-table-card[data-v-5eaafa9a],.output[data-v-5eaafa9a]{margin-top:24px}.output .md-title[data-v-5eaafa9a]{font-size:20px}", ""]);

// exports


/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - Table"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("Data tables display sets of raw data. They usually appear in desktop enterprise products. Data tables may be embedded on a surface, such as a card.")])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-table"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-sort")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Property name to match for sorting.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-sort-type")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The order to apply on the sort: "), _c('br'), _vm._v("Values: "), _c('code', [_vm._v("asc")]), _vm._v(" | "), _c('code', [_vm._v("desc")])])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "events"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Value")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("sort")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Receive the sort object. Example: "), _c('br'), _c('code', [_vm._v("{ name: 'calories', type: 'asc' }")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when a column is sorted.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("select")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Receive the all the selected rows as a "), _c('code', [_vm._v("Object")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered every time a row is selected.")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-table-card"
    }
  }, [_c('p', [_vm._v("Used to create tables inside cards. Optional.")]), _vm._v(" "), _c('p', [_vm._v("No options available")])]), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-table-header"
    }
  }, [_c('p', [_vm._v("Used like a regular "), _c('code', [_vm._v("thead")]), _vm._v(". Required.")]), _vm._v(" "), _c('p', [_vm._v("No options available")])]), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-table-body"
    }
  }, [_c('p', [_vm._v("Used like a regular "), _c('code', [_vm._v("tbody")]), _vm._v(". Required.")]), _vm._v(" "), _c('p', [_vm._v("No options available")])]), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-table-row"
    }
  }, [_c('p', [_vm._v("Used like a regular "), _c('code', [_vm._v("tr")]), _vm._v(". Required.")]), _vm._v(" "), _c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-selection")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Enable selection inside a particular row. Only works inside "), _c('code', [_vm._v("md-table-body")]), _vm._v(". Default "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-auto-select")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Click in any area of the row to select it. Only works inside "), _c('code', [_vm._v("md-table-body")]), _vm._v(". Default "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-item")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Object")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The single item to be returned when the row is selected. Only works inside "), _c('code', [_vm._v("md-table-body")]), _vm._v(".")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-table-head"
    }
  }, [_c('p', [_vm._v("Used like a regular "), _c('code', [_vm._v("th")]), _vm._v(". Required.")]), _vm._v(" "), _c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-numeric")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Align the header content to the right. Default "), _c('code', [_vm._v("false")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-sort-by")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The property name to be returned after applying the sort order on that particular column.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-tooltip")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Text displayed inside a tooltip to provide definitions to column headers.")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-table-cell"
    }
  }, [_c('p', [_vm._v("Used like a regular "), _c('code', [_vm._v("td")]), _vm._v(". Required.")]), _vm._v(" "), _c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-numeric")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Align the cell content to the right. Default "), _c('code', [_vm._v("false")])])], 1)], 1)], 1)], 1), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-table-pagination"
    }
  }, [_c('p', [_vm._v("The pagination element doesn't accept any content inside.")]), _vm._v(" "), _c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-size")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set the amount of rows displayed. Required. Default "), _c('code', [_vm._v("10")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-page-options")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Array | Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set the values inside the page amout selector. Default "), _c('code', [_vm._v("[10, 25, 50, 100]")]), _vm._v(" "), _c('br'), _vm._v("When false this flag will hide the page selector.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-page")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Current page of the table pagination. Required. Default "), _c('code', [_vm._v("1")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-total")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Number")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Total of items in the collection. This will be used to calculate the amount of pages left. Default "), _c('code', [_vm._v("Many")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-label")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Text to be shown on the left of the page selector. Default "), _c('code', [_vm._v("Rows per page")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-separator")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Text to be shown on the left of the page selector. Default "), _c('code', [_vm._v("of")])])], 1)], 1)], 1)], 1), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-table-alternate-header"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-selected-label")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The text to be shown after the amount of items selected.")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Plain"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_vm._m(0)], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-table v-once>\n              <md-table-header>\n                <md-table-row>\n                  <md-table-head>Dessert (100g serving)</md-table-head>\n                  <md-table-head md-numeric>Calories (g)</md-table-head>\n                  <md-table-head md-numeric>Fat (g)</md-table-head>\n                  <md-table-head md-numeric>Carbs (g)</md-table-head>\n                  <md-table-head md-numeric>Protein (g)</md-table-head>\n                </md-table-row>\n              </md-table-header>\n\n              <md-table-body>\n                <md-table-row v-for=\"(row, index) in 5\" :key=\"index\">\n                  <md-table-cell>Dessert Name</md-table-cell>\n                  <md-table-cell v-for=\"(col, index) in 4\" :key=\"index\" md-numeric>10</md-table-cell>\n                </md-table-row>\n              </md-table-body>\n            </md-table>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Sort"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-table', {
    attrs: {
      "md-sort": "calories"
    }
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', {
    attrs: {
      "md-sort-by": "dessert"
    }
  }, [_vm._v("Dessert (100g serving)")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "calories",
      "md-numeric": "",
      "md-tooltip": "The total amount of food energy and the given serving size"
    }
  }, [_vm._v("Calories (g)")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "fat",
      "md-numeric": ""
    }
  }, [_vm._v("Fat (g)")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "carbs",
      "md-numeric": ""
    }
  }, [_vm._v("Carbs (g)")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "protein",
      "md-numeric": ""
    }
  }, [_vm._v("Protein (g)")])], 1)], 1), _vm._v(" "), _c('md-table-body', _vm._l((5), (function(row, index) {
    return _c('md-table-row', {
      key: index
    }, [_c('md-table-cell', [_vm._v("Dessert Name")]), _vm._v(" "), _vm._l((4), (function(col, index) {
      return _c('md-table-cell', {
        key: index,
        attrs: {
          "md-numeric": ""
        }
      }, [_vm._v("10")])
    }))], 2)
  })))], 1)], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-table md-sort=\"calories\">\n              <md-table-header>\n                <md-table-row>\n                  <md-table-head md-sort-by=\"dessert\">Dessert (100g serving)</md-table-head>\n                  <md-table-head md-sort-by=\"calories\" md-numeric md-tooltip=\"The total amount of food energy and the given serving size\">Calories (g)</md-table-head>\n                  <md-table-head md-sort-by=\"fat\" md-numeric>Fat (g)</md-table-head>\n                  <md-table-head md-sort-by=\"carbs\" md-numeric>Carbs (g)</md-table-head>\n                  <md-table-head md-sort-by=\"protein\" md-numeric>Protein (g)</md-table-head>\n                </md-table-row>\n              </md-table-header>\n\n              <md-table-body>\n                <md-table-row v-for=\"(row, index) in 5\" :key=\"index\">\n                  <md-table-cell>Dessert Name</md-table-cell>\n                  <md-table-cell v-for=\"(col, index) in 4\" :key=\"index\" md-numeric>10</md-table-cell>\n                </md-table-row>\n              </md-table-body>\n            </md-table>\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Within cards with pagination"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-table-card', [_c('md-toolbar', [_c('h1', {
    staticClass: "md-title"
  }, [_vm._v("Nutrition")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button"
  }, [_c('md-icon', [_vm._v("filter_list")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button"
  }, [_c('md-icon', [_vm._v("search")])], 1)], 1), _vm._v(" "), _c('md-table', {
    attrs: {
      "md-sort": _vm.sortInput.name,
      "md-sort-type": _vm.sortInput.type
    },
    on: {
      "select": _vm.onSelect,
      "sort": _vm.onSort
    }
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', {
    attrs: {
      "md-sort-by": "dessert"
    }
  }, [_vm._v("Dessert (100g serving)")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "calories",
      "md-numeric": "",
      "md-tooltip": "The total amount of food energy and the given serving size"
    }
  }, [_vm._v("Calories (g)")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "fat",
      "md-numeric": ""
    }
  }, [_vm._v("Fat (g)")]), _vm._v(" "), _c('md-table-head', [_c('md-icon', [_vm._v("message")]), _vm._v(" "), _c('span', [_vm._v("Comments")])], 1)], 1)], 1), _vm._v(" "), _c('md-table-body', _vm._l((_vm.nutrition), (function(row, rowIndex) {
    return _c('md-table-row', {
      key: rowIndex,
      attrs: {
        "md-item": row,
        "md-auto-select": "",
        "md-selection": ""
      }
    }, _vm._l((row), (function(column, columnIndex) {
      return (columnIndex !== 'type') ? _c('md-table-cell', {
        key: columnIndex,
        attrs: {
          "md-numeric": columnIndex !== 'dessert' && columnIndex !== 'comment'
        }
      }, [_vm._v("\n                    " + _vm._s(column) + "\n                  ")]) : _vm._e()
    })))
  })))], 1), _vm._v(" "), _c('md-table-pagination', {
    attrs: {
      "md-size": "5",
      "md-total": "10",
      "md-page": "1",
      "md-label": "Rows",
      "md-separator": "of",
      "md-page-options": [5, 10, 25, 50]
    },
    on: {
      "pagination": _vm.onPagination
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "output"
  }, [_c('h2', {
    staticClass: "md-title"
  }, [_vm._v("Selected Data")]), _vm._v(" "), _c('pre', [_vm._v(_vm._s(_vm.selectedData))])]), _vm._v(" "), _c('div', {
    staticClass: "output"
  }, [_c('h2', {
    staticClass: "md-title"
  }, [_vm._v("Sort input")]), _vm._v(" "), _c('md-input-container', [_c('label', {
    attrs: {
      "for": "sort-input-name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('md-select', {
    attrs: {
      "name": "sort-input-name",
      "id": "sort-input-name"
    },
    model: {
      value: (_vm.sortInput.name),
      callback: function($$v) {
        _vm.sortInput.name = $$v
      },
      expression: "sortInput.name"
    }
  }, [_c('md-option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("None")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "dessert"
    }
  }, [_vm._v("Dessert")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "calories"
    }
  }, [_vm._v("Calories")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "fat"
    }
  }, [_vm._v("Fat")])], 1)], 1), _vm._v(" "), _c('md-input-container', [_c('label', {
    attrs: {
      "for": "sort-input-type"
    }
  }, [_vm._v("Type")]), _vm._v(" "), _c('md-select', {
    attrs: {
      "name": "sort-input-type",
      "id": "sort-input-type"
    },
    model: {
      value: (_vm.sortInput.type),
      callback: function($$v) {
        _vm.sortInput.type = $$v
      },
      expression: "sortInput.type"
    }
  }, [_c('md-option', {
    attrs: {
      "value": "asc"
    }
  }, [_vm._v("Ascending")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "desc"
    }
  }, [_vm._v("Descending")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "output"
  }, [_c('h2', {
    staticClass: "md-title"
  }, [_vm._v("Current Sort")]), _vm._v(" "), _c('pre', [_vm._v(_vm._s(_vm.sort))])]), _vm._v(" "), _c('div', {
    staticClass: "output"
  }, [_c('h2', {
    staticClass: "md-title"
  }, [_vm._v("Current Pagination")]), _vm._v(" "), _c('pre', [_vm._v(_vm._s(_vm.page))])])], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-table-card>\n              <md-toolbar>\n                <h1 class=\"md-title\">Nutrition</h1>\n                <md-button class=\"md-icon-button\">\n                  <md-icon>filter_list</md-icon>\n                </md-button>\n\n                <md-button class=\"md-icon-button\">\n                  <md-icon>search</md-icon>\n                </md-button>\n              </md-toolbar>\n\n              <md-table md-sort=\"dessert\" md-sort-type=\"desc\" @select=\"onSelect\" @sort=\"onSort\">\n                <md-table-header>\n                  <md-table-row>\n                    <md-table-head md-sort-by=\"dessert\">Dessert (100g serving)</md-table-head>\n                    <md-table-head md-sort-by=\"calories\" md-numeric md-tooltip=\"The total amount of food energy and the given serving size\">Calories (g)</md-table-head>\n                    <md-table-head md-sort-by=\"fat\" md-numeric>Fat (g)</md-table-head>\n                    <md-table-head>\n                      <md-icon>message</md-icon>\n                      <span>Comments</span>\n                    </md-table-head>\n                  </md-table-row>\n                </md-table-header>\n\n                <md-table-body>\n                  <md-table-row v-for=\"(row, rowIndex) in nutrition\" :key=\"rowIndex\" :md-item=\"row\" md-auto-select md-selection>\n                    <md-table-cell v-for=\"(column, columnIndex) in row\" :key=\"columnIndex\" :md-numeric=\"columnIndex !== 'dessert' && columnIndex !== 'comment'\" v-if=\"columnIndex !== 'type'\">\n                      " + _vm._s('{{ column }\}') + "\n                    </md-table-cell>\n                  </md-table-row>\n                </md-table-body>\n              </md-table>\n\n              <md-table-pagination\n                md-size=\"5\"\n                md-total=\"10\"\n                md-page=\"1\"\n                md-label=\"Rows\"\n                md-separator=\"of\"\n                :md-page-options=\"[5, 10, 25, 50]\"\n                @pagination=\"onPagination\"></md-table-pagination>\n            </md-table-card>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                nutrition: [\n                  {\n                    dessert: 'Frozen yogurt',\n                    type: 'ice_cream',\n                    calories: '159',\n                    fat: '6.0',\n                    comment: 'Icy'\n                  },\n                  {\n                    dessert: 'Ice cream sandwich',\n                    type: 'ice_cream',\n                    calories: '237',\n                    fat: '9.0',\n                    comment: 'Super Tasty'\n                  },\n                  {\n                    dessert: 'Eclair',\n                    type: 'pastry',\n                    calories: '262',\n                    fat: '16.0',\n                    comment: ''\n                  },\n                  {\n                    dessert: 'Cupcake',\n                    type: 'pastry',\n                    calories: '305',\n                    fat: '3.7',\n                    comment: ''\n                  },\n                  {\n                    dessert: 'Gingerbread',\n                    type: 'other',\n                    calories: '356',\n                    fat: '16.0',\n                    comment: ''\n                  }\n                ],\n              })\n            }\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Inline menus, edit icon and alternate headers"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-table-card', [_c('md-toolbar', [_c('h1', {
    staticClass: "md-title"
  }, [_vm._v("Nutrition")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button"
  }, [_c('md-icon', [_vm._v("filter_list")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button"
  }, [_c('md-icon', [_vm._v("search")])], 1)], 1), _vm._v(" "), _c('md-table-alternate-header', {
    attrs: {
      "md-selected-label": "selected"
    }
  }, [_c('md-button', {
    staticClass: "md-icon-button"
  }, [_c('md-icon', [_vm._v("delete")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button"
  }, [_c('md-icon', [_vm._v("more_vert")])], 1)], 1), _vm._v(" "), _c('md-table', {
    attrs: {
      "md-sort": "calories"
    }
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', {
    attrs: {
      "md-sort-by": "dessert"
    }
  }, [_vm._v("Dessert (100g serving)")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "type",
      "width": "100px"
    }
  }, [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "calories",
      "md-numeric": "",
      "md-tooltip": "The total amount of food energy and the given serving size"
    }
  }, [_vm._v("Calories (g)")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "fat",
      "md-numeric": ""
    }
  }, [_vm._v("Fat (g)")]), _vm._v(" "), _c('md-table-head', [_c('md-icon', [_vm._v("message")]), _vm._v(" "), _c('span', [_vm._v("Comments")])], 1)], 1)], 1), _vm._v(" "), _c('md-table-body', _vm._l((_vm.nutrition), (function(row, rowIndex) {
    return _c('md-table-row', {
      key: rowIndex,
      attrs: {
        "md-item": row,
        "md-selection": ""
      }
    }, _vm._l((row), (function(column, columnIndex) {
      return _c('md-table-cell', {
        key: columnIndex,
        attrs: {
          "md-numeric": columnIndex !== 'dessert' && columnIndex !== 'comment' && columnIndex !== 'type'
        }
      }, [(columnIndex === 'comment') ? _c('span', [_vm._v(_vm._s(column))]) : _vm._e(), _vm._v(" "), (columnIndex === 'comment') ? _c('md-button', {
        staticClass: "md-icon-button"
      }, [_c('md-icon', [_vm._v("edit")])], 1) : _vm._e(), _vm._v(" "), (columnIndex === 'type') ? _c('md-select', {
        attrs: {
          "placeholder": "Type",
          "name": 'type' + columnIndex,
          "id": 'type' + columnIndex
        },
        model: {
          value: (_vm.nutrition[rowIndex].type),
          callback: function($$v) {
            _vm.nutrition[rowIndex].type = $$v
          },
          expression: "nutrition[rowIndex].type"
        }
      }, [_c('md-option', {
        attrs: {
          "value": "ice_cream"
        }
      }, [_vm._v("Ice Cream")]), _vm._v(" "), _c('md-option', {
        attrs: {
          "value": "pastry"
        }
      }, [_vm._v("Pastry")]), _vm._v(" "), _c('md-option', {
        attrs: {
          "value": "other"
        }
      }, [_vm._v("Other")])], 1) : _vm._e(), _vm._v(" "), (columnIndex !== 'type' && columnIndex !== 'comment') ? _c('span', [_vm._v(_vm._s(column))]) : _vm._e()], 1)
    })))
  })))], 1)], 1)], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-table-card>\n              <md-toolbar>\n                <h1 class=\"md-title\">Nutrition</h1>\n                <md-button class=\"md-icon-button\">\n                  <md-icon>filter_list</md-icon>\n                </md-button>\n\n                <md-button class=\"md-icon-button\">\n                  <md-icon>search</md-icon>\n                </md-button>\n              </md-toolbar>\n\n              <md-table-alternate-header md-selected-label=\"selected\">\n                <md-button class=\"md-icon-button\">\n                  <md-icon>delete</md-icon>\n                </md-button>\n\n                <md-button class=\"md-icon-button\">\n                  <md-icon>more_vert</md-icon>\n                </md-button>\n              </md-table-alternate-header>\n\n              <md-table md-sort=\"calories\">\n                <md-table-header>\n                  <md-table-row>\n                    <md-table-head md-sort-by=\"dessert\">Dessert (100g serving)</md-table-head>\n                    <md-table-head md-sort-by=\"type\" width=\"100px\">Type</md-table-head>\n                    <md-table-head md-sort-by=\"calories\" md-numeric md-tooltip=\"The total amount of food energy and the given serving size\">Calories (g)</md-table-head>\n                    <md-table-head md-sort-by=\"fat\" md-numeric>Fat (g)</md-table-head>\n                    <md-table-head>\n                      <md-icon>message</md-icon>\n                      <span>Comments</span>\n                    </md-table-head>\n                  </md-table-row>\n                </md-table-header>\n\n                <md-table-body>\n                  <md-table-row v-for=\"(row, rowIndex) in nutrition\" :key=\"rowIndex\" :md-item=\"row\" md-selection>\n                    <md-table-cell v-for=\"(column, columnIndex) in row\" :key=\"columnIndex\" :md-numeric=\"columnIndex !== 'dessert' && columnIndex !== 'comment' && columnIndex !== 'type'\">\n                      <span v-if=\"columnIndex === 'comment'\">" + _vm._s('{{ column }\}') + "</span>\n\n                      <md-button class=\"md-icon-button\" v-if=\"columnIndex === 'comment'\">\n                        <md-icon>edit</md-icon>\n                      </md-button>\n\n                      <md-select\n                        placeholder=\"Type\"\n                        :name=\"'type' + columnIndex\"\n                        :id=\"'type' + columnIndex\"\n                        v-model=\"nutrition[rowIndex].type\"\n                        v-if=\"columnIndex === 'type'\">\n                        <md-option value=\"ice_cream\">Ice Cream</md-option>\n                        <md-option value=\"pastry\">Pastry</md-option>\n                        <md-option value=\"other\">Other</md-option>\n                      </md-select>\n\n                      <span v-if=\"columnIndex !== 'type' && columnIndex !== 'comment'\">" + _vm._s('{{ column }\}') + "</span>\n                    </md-table-cell>\n                  </md-table-row>\n                </md-table-body>\n              </md-table>\n            </md-table-card>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                nutrition: [\n                  {\n                    dessert: 'Frozen yogurt',\n                    type: 'ice_cream',\n                    calories: '159',\n                    fat: '6.0',\n                    comment: 'Icy'\n                  },\n                  {\n                    dessert: 'Ice cream sandwich',\n                    type: 'ice_cream',\n                    calories: '237',\n                    fat: '9.0',\n                    comment: 'Super Tasty'\n                  },\n                  {\n                    dessert: 'Eclair',\n                    type: 'pastry',\n                    calories: '262',\n                    fat: '16.0',\n                    comment: ''\n                  },\n                  {\n                    dessert: 'Cupcake',\n                    type: 'pastry',\n                    calories: '305',\n                    fat: '3.7',\n                    comment: ''\n                  },\n                  {\n                    dessert: 'Gingerbread',\n                    type: 'other',\n                    calories: '356',\n                    fat: '16.0',\n                    comment: ''\n                  }\n                ],\n              })\n            }\n          ")])], 1)])], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-table', [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Dessert (100g serving)")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-numeric": ""
    }
  }, [_vm._v("Calories (g)")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-numeric": ""
    }
  }, [_vm._v("Fat (g)")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-numeric": ""
    }
  }, [_vm._v("Carbs (g)")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-numeric": ""
    }
  }, [_vm._v("Protein (g)")])], 1)], 1), _vm._v(" "), _c('md-table-body', _vm._l((5), (function(row, index) {
    return _c('md-table-row', {
      key: index
    }, [_c('md-table-cell', [_vm._v("Dessert Name")]), _vm._v(" "), _vm._l((4), (function(col, index) {
      return _c('md-table-cell', {
        key: index,
        attrs: {
          "md-numeric": ""
        }
      }, [_vm._v("10")])
    }))], 2)
  })))], 1)
}]}

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(507);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("30c63398", content, true);

/***/ })

});