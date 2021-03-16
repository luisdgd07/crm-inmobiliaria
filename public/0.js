(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/components/core/Settings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/components/core/Settings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Mixins
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DashboardCoreSettings',
  data: function data() {
    return {
      color: '#E91E63',
      colors: ['#9C27b0', '#00CAE3', '#4CAF50', '#ff9800', '#E91E63', '#FF5252'],
      image: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
      images: ['https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg', 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-2.jpg', 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-3.jpg', 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-4.jpg'],
      menu: false,
      saveImage: '',
      showImg: true
    };
  },
  computed: _objectSpread({}, mapState(['barImage'])),
  watch: {
    color: function color(val) {
      this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'].primary = val;
    },
    showImg: function showImg(val) {
      if (!val) {
        this.saveImage = this.barImage;
        this.setBarImage('');
      } else if (this.saveImage) {
        this.setBarImage(this.saveImage);
        this.saveImage = '';
      } else {
        this.setBarImage(val);
      }
    },
    image: function image(val) {
      this.setBarImage(val);
    }
  },
  methods: _objectSpread({}, mapMutations({
    setBarImage: 'SET_BAR_IMAGE'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/components/core/Settings.vue?vue&type=template&id=13a4cdda&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/components/core/Settings.vue?vue&type=template&id=13a4cdda& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "settings-wrapper" } },
    [
      _c(
        "v-card",
        {
          staticClass: "py-2 px-4",
          staticStyle: {
            position: "fixed",
            top: "115px",
            right: "-35px",
            "border-radius": "8px"
          },
          attrs: {
            id: "settings",
            color: "rgba(0, 0, 0, .3)",
            dark: "",
            flat: "",
            link: "",
            "min-width": "100"
          }
        },
        [
          _c("v-icon", { attrs: { large: "" } }, [
            _vm._v("\n      mdi-settings\n    ")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-menu",
        {
          attrs: {
            "close-on-content-click": false,
            activator: "#settings",
            bottom: "",
            "content-class": "v-settings",
            left: "",
            "nudge-left": "8",
            "offset-x": "",
            origin: "top right",
            transition: "scale-transition"
          },
          model: {
            value: _vm.menu,
            callback: function($$v) {
              _vm.menu = $$v
            },
            expression: "menu"
          }
        },
        [
          _c(
            "v-card",
            { staticClass: "text-center mb-0", attrs: { width: "300" } },
            [
              _c(
                "v-card-text",
                [
                  _c("strong", { staticClass: "mb-3 d-inline-block" }, [
                    _vm._v("SIDEBAR FILTERS")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-item-group",
                    {
                      model: {
                        value: _vm.color,
                        callback: function($$v) {
                          _vm.color = $$v
                        },
                        expression: "color"
                      }
                    },
                    _vm._l(_vm.colors, function(color) {
                      return _c("v-item", {
                        key: color,
                        attrs: { value: color },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(ref) {
                                var active = ref.active
                                var toggle = ref.toggle
                                return [
                                  _c("v-avatar", {
                                    staticClass: "v-settings__item",
                                    class: active && "v-settings__item--active",
                                    attrs: { color: color, size: "25" },
                                    on: { click: toggle }
                                  })
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4 secondary" }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { align: "center", "no-gutters": "" } },
                    [
                      _c("v-col", { attrs: { cols: "auto" } }, [
                        _vm._v("\n            Dark Mode\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-switch", {
                            staticClass: "ma-0 pa-0",
                            attrs: { color: "secondary", "hide-details": "" },
                            model: {
                              value: _vm.$vuetify.theme.dark,
                              callback: function($$v) {
                                _vm.$set(_vm.$vuetify.theme, "dark", $$v)
                              },
                              expression: "$vuetify.theme.dark"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4 secondary" }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { align: "center", "no-gutters": "" } },
                    [
                      _c("v-col", { attrs: { cols: "auto" } }, [
                        _vm._v("\n            Sidebar Image\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-switch", {
                            staticClass: "ma-0 pa-0",
                            attrs: { color: "secondary", "hide-details": "" },
                            model: {
                              value: _vm.showImg,
                              callback: function($$v) {
                                _vm.showImg = $$v
                              },
                              expression: "showImg"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4 secondary" }),
                  _vm._v(" "),
                  _c("strong", { staticClass: "mb-3 d-inline-block" }, [
                    _vm._v("IMAGES")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-item-group",
                    {
                      staticClass: "d-flex justify-space-between mb-3",
                      model: {
                        value: _vm.image,
                        callback: function($$v) {
                          _vm.image = $$v
                        },
                        expression: "image"
                      }
                    },
                    _vm._l(_vm.images, function(image) {
                      return _c("v-item", {
                        key: image,
                        staticClass: "mx-1",
                        attrs: { value: image },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(ref) {
                                var active = ref.active
                                var toggle = ref.toggle
                                return [
                                  _c(
                                    "v-sheet",
                                    {
                                      staticClass:
                                        "d-inline-block v-settings__item",
                                      class:
                                        active && "v-settings__item--active",
                                      on: { click: toggle }
                                    },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: image,
                                          height: "100",
                                          width: "50"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mb-3",
                      attrs: {
                        block: "",
                        color: "success",
                        href:
                          "https://www.creative-tim.com/product/vuetify-material-dashboard",
                        default: "",
                        rel: "noopener",
                        target: "_blank"
                      }
                    },
                    [_vm._v("\n          Free Download\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mb-3",
                      attrs: {
                        block: "",
                        color: "grey darken-1",
                        dark: "",
                        href: "https://vuetifyjs.com/components/api-explorer",
                        default: "",
                        rel: "noopener",
                        target: "_blank"
                      }
                    },
                    [_vm._v("\n          Documentation\n        ")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "my-12" }),
                  _vm._v(" "),
                  _c("div", [
                    _c("strong", { staticClass: "mb-3 d-inline-block" }, [
                      _vm._v("THANK YOU FOR SHARING!")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "ma-1",
                      attrs: {
                        color: "#55acee",
                        dark: "",
                        default: "",
                        rounded: ""
                      }
                    },
                    [
                      _c("v-icon", [_vm._v("mdi-twitter")]),
                      _vm._v("\n          - 45\n        ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "ma-1",
                      attrs: {
                        color: "#3b5998",
                        dark: "",
                        default: "",
                        rounded: ""
                      }
                    },
                    [
                      _c("v-icon", [_vm._v("mdi-facebook")]),
                      _vm._v("\n          - 50\n        ")
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/dashboard/components/core/Settings.vue":
/*!*************************************************************!*\
  !*** ./resources/js/dashboard/components/core/Settings.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_13a4cdda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=13a4cdda& */ "./resources/js/dashboard/components/core/Settings.vue?vue&type=template&id=13a4cdda&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/components/core/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_13a4cdda___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_13a4cdda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/components/core/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/components/core/Settings.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/dashboard/components/core/Settings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/components/core/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/components/core/Settings.vue?vue&type=template&id=13a4cdda&":
/*!********************************************************************************************!*\
  !*** ./resources/js/dashboard/components/core/Settings.vue?vue&type=template&id=13a4cdda& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_13a4cdda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=13a4cdda& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/components/core/Settings.vue?vue&type=template&id=13a4cdda&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_13a4cdda___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_13a4cdda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);