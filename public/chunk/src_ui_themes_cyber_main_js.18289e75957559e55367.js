"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklife_restart"] = self["webpackChunklife_restart"] || []).push([["src_ui_themes_cyber_main_js"],{

/***/ "./src/ui/themes/cyber/main.js":
/*!*************************************!*\
  !*** ./src/ui/themes/cyber/main.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CyberMain)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"./node_modules/core-js/modules/es.object.set-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"./node_modules/core-js/modules/es.object.get-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"./node_modules/core-js/modules/es.reflect.construct.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar CyberMain = /*#__PURE__*/function (_ui$view$CyberTheme$C) {\n  _inherits(CyberMain, _ui$view$CyberTheme$C);\n\n  var _super = _createSuper(CyberMain);\n\n  function CyberMain() {\n    var _this;\n\n    _classCallCheck(this, CyberMain);\n\n    _this = _super.call(this);\n\n    _this.btnRemake.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.switchView(UI.pages.MODE);\n    });\n\n    _this.btnAchievement.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.switchView(UI.pages.ACHIEVEMENT);\n    });\n\n    _this.btnThanks.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.switchView(UI.pages.THANKS);\n    });\n\n    _this.btnGithub.on(Laya.Event.CLICK, _assertThisInitialized(_this), goto, ['github']);\n\n    _this.btnDiscord.on(Laya.Event.CLICK, _assertThisInitialized(_this), goto, ['discord']);\n\n    _this.btnThemes.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.showDialog(UI.pages.THEMES);\n    });\n\n    _this.btnSaveLoad.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.showDialog(UI.pages.SAVELOAD);\n    });\n\n    _this.on(Laya.Event.RESIZE, _assertThisInitialized(_this), function () {\n      var scale = Math.max(_this.width / _this.imgBg.width, _this.height / _this.imgBg.height);\n\n      _this.imgBg.scale(scale, scale);\n    });\n\n    return _this;\n  }\n\n  _createClass(CyberMain, [{\n    key: \"init\",\n    value: function init() {\n      this.btnDiscord.visible = this.btnAchievement.visible = this.btnThanks.visible = !!core.times;\n    }\n  }], [{\n    key: \"load\",\n    value: function load() {\n      return [\"fonts/方正像素12.ttf\", \"images/atlas/images/accessories.atlas\", \"images/atlas/images/border.atlas\", \"images/atlas/images/button.atlas\", \"images/atlas/images/icons.atlas\", \"images/atlas/images/progress.atlas\", \"images/atlas/images/slider.atlas\"];\n    }\n  }]);\n\n  return CyberMain;\n}(ui.view.CyberTheme.CyberMainUI);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvdGhlbWVzL2N5YmVyL21haW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFDQTtBQUFBOztBQUFBOztBQUNBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBOztBQUNBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTs7QUFJQTtBQUNBOztBQWZBO0FBZ0JBOzs7O0FBY0E7QUFDQTtBQUdBOzs7QUFoQkE7QUFDQTtBQVNBOzs7O0FBN0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlmZV9yZXN0YXJ0Ly4vc3JjL3VpL3RoZW1lcy9jeWJlci9tYWluLmpzP2M4OWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3liZXJNYWluIGV4dGVuZHMgdWkudmlldy5DeWJlclRoZW1lLkN5YmVyTWFpblVJIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5idG5SZW1ha2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCk9PiR1aS5zd2l0Y2hWaWV3KFVJLnBhZ2VzLk1PREUpKTtcbiAgICAgICAgdGhpcy5idG5BY2hpZXZlbWVudC5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKT0+JHVpLnN3aXRjaFZpZXcoVUkucGFnZXMuQUNISUVWRU1FTlQpKTtcbiAgICAgICAgdGhpcy5idG5UaGFua3Mub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCk9PiR1aS5zd2l0Y2hWaWV3KFVJLnBhZ2VzLlRIQU5LUykpO1xuICAgICAgICB0aGlzLmJ0bkdpdGh1Yi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCBnb3RvLCBbJ2dpdGh1YiddKTtcbiAgICAgICAgdGhpcy5idG5EaXNjb3JkLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIGdvdG8sIFsnZGlzY29yZCddKTtcbiAgICAgICAgdGhpcy5idG5UaGVtZXMub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCk9PiR1aS5zaG93RGlhbG9nKFVJLnBhZ2VzLlRIRU1FUykpO1xuICAgICAgICB0aGlzLmJ0blNhdmVMb2FkLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpPT4kdWkuc2hvd0RpYWxvZyhVSS5wYWdlcy5TQVZFTE9BRCkpO1xuICAgICAgICB0aGlzLm9uKExheWEuRXZlbnQuUkVTSVpFLCB0aGlzLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IE1hdGgubWF4KFxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggLyB0aGlzLmltZ0JnLndpZHRoLFxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0IC8gdGhpcy5pbWdCZy5oZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmltZ0JnLnNjYWxlKHNjYWxlLCBzY2FsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgXCJmb250cy/mlrnmraPlg4/ntKAxMi50dGZcIixcbiAgICAgICAgICAgIFwiaW1hZ2VzL2F0bGFzL2ltYWdlcy9hY2Nlc3Nvcmllcy5hdGxhc1wiLFxuICAgICAgICAgICAgXCJpbWFnZXMvYXRsYXMvaW1hZ2VzL2JvcmRlci5hdGxhc1wiLFxuICAgICAgICAgICAgXCJpbWFnZXMvYXRsYXMvaW1hZ2VzL2J1dHRvbi5hdGxhc1wiLFxuICAgICAgICAgICAgXCJpbWFnZXMvYXRsYXMvaW1hZ2VzL2ljb25zLmF0bGFzXCIsXG4gICAgICAgICAgICBcImltYWdlcy9hdGxhcy9pbWFnZXMvcHJvZ3Jlc3MuYXRsYXNcIixcbiAgICAgICAgICAgIFwiaW1hZ2VzL2F0bGFzL2ltYWdlcy9zbGlkZXIuYXRsYXNcIixcbiAgICAgICAgXVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYnRuRGlzY29yZC52aXNpYmxlID1cbiAgICAgICAgdGhpcy5idG5BY2hpZXZlbWVudC52aXNpYmxlID1cbiAgICAgICAgdGhpcy5idG5UaGFua3MudmlzaWJsZSA9ICEhY29yZS50aW1lcztcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ui/themes/cyber/main.js\n");

/***/ })

}]);