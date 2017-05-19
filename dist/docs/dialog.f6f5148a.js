webpackJsonp([11],{

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(574)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(473),
  /* template */
  __webpack_require__(540),
  /* scopeId */
  "data-v-4e640a33",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 473:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: () => ({
    alert: {
      content: 'Your post has been deleted!',
      ok: 'Cool!'
    },
    alert2: {
      title: 'Post created!',
      contentHtml: 'Your post <strong>Material Design is awesome</strong> has been created.'
    },
    confirm: {
      title: 'Use Google\'s location service?',
      contentHtml: 'Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running.',
      ok: 'Agree',
      cancel: 'Disagree'
    },
    prompt: {
      title: 'What\'s your name?',
      ok: 'Done',
      cancel: 'Cancel',
      id: 'name',
      name: 'name',
      placeholder: 'Type your name...',
      maxlength: 30,
      value: ''
    }
  }),
  methods: {
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    onOpen() {
      console.log('Opened');
    },
    onClose(type) {
      console.log('Closed', type);
    }
  }
});

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".dialog-fab[data-v-4e640a33]{height:200px}", ""]);

// exports


/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page-content', {
    attrs: {
      "page-title": "Components - Dialog"
    }
  }, [_c('docs-component', [_c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.")]), _vm._v(" "), _c('p', [_vm._v("The dialog component works with any plain html content. You can have tabs, all form components and more.")]), _vm._v(" "), _c('p', [_vm._v("Alternativelly you can use three presets to build Alerts, Confirms and Prompt dialogs.")]), _vm._v(" "), _c('p', [_vm._v("The preset component is created on top of "), _c('code', [_vm._v("<md-dialog>")]), _vm._v(". You should provide the content or the HTML content at least.")]), _vm._v(" "), _c('p', [_vm._v("All the pressets can use the same options and events from the "), _c('code', [_vm._v("<md-dialog>")]), _vm._v(" component.")])]), _vm._v(" "), _c('div', {
    slot: "api"
  }, [_c('api-table', {
    attrs: {
      "name": "md-dialog"
    }
  }, [_c('md-table', {
    slot: "properties"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-click-outside-to-close")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Enable or disable click outside to close. Default: "), _c('code', [_vm._v("true")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-esc-to-close")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Enable or disable close on esc key. Default: "), _c('code', [_vm._v("true")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-backdrop")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("Boolean")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Create an opaque backdrop behind the dialog. Default: "), _c('code', [_vm._v("true")])])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-open-from")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The query selector of the element that is used to determine from which the Dialog will open.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-close-to")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("The query selector of the element that is used to determine from which the Dialog will close.")])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "events"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Value")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("open")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Receive the state of the dialog: "), _c('code', [_vm._v("ok")]), _vm._v("| "), _c('code', [_vm._v("cancel")]), _vm._v(" "), _c('br'), _vm._v("Works only for Confirm and Prompt")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when the dialog open.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("close")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Receive the state of the dialog: "), _c('code', [_vm._v("ok")]), _vm._v("| "), _c('code', [_vm._v("cancel")]), _vm._v(" "), _c('br'), _vm._v("Works only for Confirm and Prompt")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Triggered when the dialog closes.")])], 1)], 1)], 1), _vm._v(" "), _c('md-table', {
    slot: "methods"
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("open")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Open the dialog.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("close")]), _vm._v(" "), _c('md-table-cell', [_vm._v("Close the dialog.")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-dialog-title"
    }
  }, [_c('p', [_vm._v("Can display a title on the top of the Dialog.")]), _vm._v(" "), _c('p', [_vm._v("No options available")])]), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-dialog-content"
    }
  }, [_c('p', [_vm._v("Used to display rich content inside the Dialog.")]), _vm._v(" "), _c('p', [_vm._v("No options available")])]), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-dialog-actions"
    }
  }, [_c('p', [_vm._v("Hold the actions of a dialog and align them on the right. Here you can add "), _c('code', [_vm._v("<md-button>")]), _vm._v(" with or without icons.")]), _vm._v(" "), _c('p', [_vm._v("No options available")])]), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-dialog-alert"
    }
  }, [_c('div', {
    slot: "properties"
  }, [_c('md-table', [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-title")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the alert title. Optional.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-content")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the alert content.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-content-html")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the alert content with a custom html.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-ok-text")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the alert \"Okay\" button text.")])], 1)], 1)], 1)], 1)]), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-dialog-confirm"
    }
  }, [_c('div', {
    slot: "properties"
  }, [_c('md-table', [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-title")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the confirm title. Optional.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-content")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the confirm content.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-content-html")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the confirm content with a custom html.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-ok-text")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the confirm \"Okay\" button text.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-cancel-text")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the confirm \"Cancel\" button text.")])], 1)], 1)], 1)], 1)]), _vm._v(" "), _c('api-table', {
    attrs: {
      "name": "md-dialog-prompt"
    }
  }, [_c('div', {
    slot: "properties"
  }, [_c('md-table', [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Type")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_c('md-table-row', [_c('md-table-cell', [_vm._v("md-title")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the prompt title. Optional.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-content")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the prompt content.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-content-html")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the prompt content with a custom html.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-ok-text")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the prompt \"Okay\" button text.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-cancel-text")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Sets the prompt \"Cancel\" button text.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("v-model")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("A required model object to be bind when the value is confirmed.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-input-id")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set the ID of the field inside the prompt dialog.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-input-name")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set the name of the field inside the prompt dialog.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-input-maxlength")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set the optional maxlength of the field inside the prompt dialog with the text count.")])], 1), _vm._v(" "), _c('md-table-row', [_c('md-table-cell', [_vm._v("md-input-placeholder")]), _vm._v(" "), _c('md-table-cell', [_c('code', [_vm._v("String")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("Set the optional placeholder of the field inside the prompt dialog.")])], 1)], 1)], 1)], 1)])], 1), _vm._v(" "), _c('div', {
    slot: "example"
  }, [_c('example-box', {
    attrs: {
      "card-title": "Custom"
    }
  }, [_c('div', {
    staticClass: "dialog-fab",
    slot: "demo"
  }, [_c('md-dialog', {
    ref: "dialog1",
    attrs: {
      "md-open-from": "#custom",
      "md-close-to": "#custom"
    }
  }, [_c('md-dialog-title', [_vm._v("Lorem ipsum dolor sit amet")]), _vm._v(" "), _c('md-dialog-content', [_vm._v("Nemo, nobis necessitatibus ut illo, ducimus ex.")]), _vm._v(" "), _c('md-dialog-actions', [_c('md-button', {
    staticClass: "md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.closeDialog('dialog1')
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.closeDialog('dialog1')
      }
    }
  }, [_vm._v("Ok")])], 1)], 1), _vm._v(" "), _c('md-dialog', {
    ref: "dialog2",
    attrs: {
      "md-open-from": "#fab",
      "md-close-to": "#fab"
    }
  }, [_c('md-dialog-title', [_vm._v("Create new note")]), _vm._v(" "), _c('md-dialog-content', [_c('form', [_c('md-input-container', [_c('label', [_vm._v("Note")]), _vm._v(" "), _c('md-textarea')], 1)], 1)]), _vm._v(" "), _c('md-dialog-actions', [_c('md-button', {
    staticClass: "md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.closeDialog('dialog2')
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.closeDialog('dialog2')
      }
    }
  }, [_vm._v("Create")])], 1)], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary md-raised",
    attrs: {
      "id": "custom"
    },
    nativeOn: {
      "click": function($event) {
        _vm.openDialog('dialog1')
      }
    }
  }, [_vm._v("Custom")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-fab-bottom-right",
    attrs: {
      "id": "fab"
    },
    nativeOn: {
      "click": function($event) {
        _vm.openDialog('dialog2')
      }
    }
  }, [_c('md-icon', [_vm._v("add")])], 1)], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-dialog md-open-from=\"#custom\" md-close-to=\"#custom\" ref=\"dialog1\">\n              <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>\n\n              <md-dialog-content>Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>\n\n              <md-dialog-actions>\n                <md-button class=\"md-primary\" @click.native=\"closeDialog('dialog1')\">Cancel</md-button>\n                <md-button class=\"md-primary\" @click.native=\"closeDialog('dialog1')\">Ok</md-button>\n              </md-dialog-actions>\n            </md-dialog>\n\n            <md-dialog md-open-from=\"#fab\" md-close-to=\"#fab\" ref=\"dialog2\">\n              <md-dialog-title>Create new note</md-dialog-title>\n\n              <md-dialog-content>\n                <form>\n                  <md-input-container>\n                    <label>Note</label>\n                    <md-textarea></md-textarea>\n                  </md-input-container>\n                </form>\n              </md-dialog-content>\n\n              <md-dialog-actions>\n                <md-button class=\"md-primary\" @click.native=\"closeDialog('dialog2')\">Cancel</md-button>\n                <md-button class=\"md-primary\" @click.native=\"closeDialog('dialog2')\">Create</md-button>\n              </md-dialog-actions>\n            </md-dialog>\n\n            <md-button class=\"md-primary md-raised\" id=\"custom\" @click.native=\"openDialog('dialog1')\">Custom</md-button>\n            <md-button class=\"md-fab md-fab-bottom-right\" id=\"fab\" @click.native=\"openDialog('dialog2')\">\n              <md-icon>add</md-icon>\n            </md-button>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              methods: {\n                openDialog(ref) {\n                  this.$refs[ref].open();\n                },\n                closeDialog(ref) {\n                  this.$refs[ref].close();\n                },\n                onOpen() {\n                  console.log('Opened');\n                },\n                onClose(type) {\n                  console.log('Closed', type);\n                }\n              }\n            };\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Alerts"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-dialog-alert', {
    ref: "dialog3",
    attrs: {
      "md-content": _vm.alert.content,
      "md-ok-text": _vm.alert.ok
    },
    on: {
      "open": _vm.onOpen,
      "close": _vm.onClose
    }
  }), _vm._v(" "), _c('md-dialog-alert', {
    ref: "dialog4",
    attrs: {
      "md-title": _vm.alert2.title,
      "md-content-html": _vm.alert2.contentHtml
    },
    on: {
      "open": _vm.onOpen,
      "close": _vm.onClose
    }
  }), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary md-raised",
    nativeOn: {
      "click": function($event) {
        _vm.openDialog('dialog3')
      }
    }
  }, [_vm._v("Alert")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary md-raised",
    nativeOn: {
      "click": function($event) {
        _vm.openDialog('dialog4')
      }
    }
  }, [_vm._v("Alert with HTML")])], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-dialog-alert\n              :md-content=\"alert.content\"\n              :md-ok-text=\"alert.ok\"\n              @open=\"onOpen\"\n              @close=\"onClose\"\n              ref=\"dialog3\">\n            </md-dialog-alert>\n\n            <md-dialog-alert\n              :md-title=\"alert2.title\"\n              :md-content-html=\"alert2.contentHtml\"\n              @open=\"onOpen\"\n              @close=\"onClose\"\n              ref=\"dialog4\">\n            </md-dialog-alert>\n\n            <md-button class=\"md-primary md-raised\" @click.native=\"openDialog('dialog3')\">Alert</md-button>\n            <md-button class=\"md-primary md-raised\" @click.native=\"openDialog('dialog4')\">Alert with HTML</md-button>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                alert: {\n                  content: 'Your post has been deleted!',\n                  ok: 'Cool!'\n                },\n                alert2: {\n                  title: 'Post created!',\n                  contentHtml: 'Your post <strong>Material Design is awesome</strong> has been created.'\n                }\n              }),\n              methods: {\n                openDialog(ref) {\n                  this.$refs[ref].open();\n                },\n                closeDialog(ref) {\n                  this.$refs[ref].close();\n                },\n                onOpen() {\n                  console.log('Opened');\n                },\n                onClose(type) {\n                  console.log('Closed', type);\n                }\n              }\n            };\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Confirm"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-dialog-confirm', {
    ref: "dialog5",
    attrs: {
      "md-title": _vm.confirm.title,
      "md-content-html": _vm.confirm.contentHtml,
      "md-ok-text": _vm.confirm.ok,
      "md-cancel-text": _vm.confirm.cancel
    },
    on: {
      "open": _vm.onOpen,
      "close": _vm.onClose
    }
  }), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary md-raised",
    nativeOn: {
      "click": function($event) {
        _vm.openDialog('dialog5')
      }
    }
  }, [_vm._v("Confirm")])], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-dialog-confirm\n              :md-title=\"confirm.title\"\n              :md-content-html=\"confirm.contentHtml\"\n              :md-ok-text=\"confirm.ok\"\n              :md-cancel-text=\"confirm.cancel\"\n              @open=\"onOpen\"\n              @close=\"onClose\"\n              ref=\"dialog5\">\n            </md-dialog-confirm>\n\n            <md-button class=\"md-primary md-raised\" @click.native=\"openDialog('dialog5')\">Confirm</md-button>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                confirm: {\n                  title: 'Use Google\\'s location service?',\n                  contentHtml: 'Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running.',\n                  ok: 'Agree',\n                  cancel: 'Disagree'\n                }\n              }),\n              methods: {\n                openDialog(ref) {\n                  this.$refs[ref].open();\n                },\n                closeDialog(ref) {\n                  this.$refs[ref].close();\n                },\n                onOpen() {\n                  console.log('Opened');\n                },\n                onClose(type) {\n                  console.log('Closed', type);\n                }\n              }\n            };\n          ")])], 1)]), _vm._v(" "), _c('example-box', {
    attrs: {
      "card-title": "Prompt"
    }
  }, [_c('div', {
    slot: "demo"
  }, [_c('md-dialog-prompt', {
    ref: "dialog6",
    attrs: {
      "md-title": _vm.prompt.title,
      "md-ok-text": _vm.prompt.ok,
      "md-cancel-text": _vm.prompt.cancel,
      "md-input-id": _vm.prompt.id,
      "md-input-name": _vm.prompt.name,
      "md-input-maxlength": _vm.prompt.maxlength,
      "md-input-placeholder": _vm.prompt.placeholder
    },
    on: {
      "open": _vm.onOpen,
      "close": _vm.onClose
    },
    model: {
      value: (_vm.prompt.value),
      callback: function($$v) {
        _vm.prompt.value = $$v
      },
      expression: "prompt.value"
    }
  }), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary md-raised",
    nativeOn: {
      "click": function($event) {
        _vm.openDialog('dialog6')
      }
    }
  }, [_vm._v("Prompt")])], 1), _vm._v(" "), _c('div', {
    slot: "code"
  }, [_c('code-block', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("\n            <md-dialog-prompt\n              :md-title=\"prompt.title\"\n              :md-ok-text=\"prompt.ok\"\n              :md-cancel-text=\"prompt.cancel\"\n              @open=\"onOpen\"\n              @close=\"onClose\"\n              v-model=\"prompt.value\"\n              ref=\"dialog6\">\n            </md-dialog-prompt>\n\n            <md-button class=\"md-primary md-raised\" @click.native=\"openDialog('dialog6')\">Prompt</md-button>\n          ")]), _vm._v(" "), _c('code-block', {
    attrs: {
      "lang": "javascript"
    }
  }, [_vm._v("\n            export default {\n              data: () => ({\n                prompt: {\n                  title: 'What\\'s your name?',\n                  ok: 'Done',\n                  cancel: 'Cancel',\n                  id: 'name',\n                  name: 'name',\n                  placeholder: 'Type your name...',\n                  maxlength: 30,\n                  value: ''\n                }\n              }),\n              methods: {\n                openDialog(ref) {\n                  this.$refs[ref].open();\n                },\n                closeDialog(ref) {\n                  this.$refs[ref].close();\n                },\n                onOpen() {\n                  console.log('Opened');\n                },\n                onClose(type) {\n                  console.log('Closed', type);\n                }\n              }\n            };\n          ")])], 1)])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(502);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1840ea46", content, true);

/***/ })

});