"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklife_restart"] = self["webpackChunklife_restart"] || []).push([["src_ui_themes_message_js"],{

/***/ "./src/ui/themes/message.js":
/*!**********************************!*\
  !*** ./src/ui/themes/message.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MessagePopup)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"./node_modules/core-js/modules/es.object.set-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"./node_modules/core-js/modules/es.object.get-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"./node_modules/core-js/modules/es.reflect.construct.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar MessagePopup = /*#__PURE__*/function (_ui$view$MessagePopup) {\n  _inherits(MessagePopup, _ui$view$MessagePopup);\n\n  var _super = _createSuper(MessagePopup);\n\n  function MessagePopup() {\n    var _this;\n\n    _classCallCheck(this, MessagePopup);\n\n    _this = _super.call(this);\n    _this.left = _this.right = 0;\n    _this.boxBg.defaultColor = \"#000000\";\n    _this.boxBg.hoverColor = \"#000000\";\n    _this.boxBg.radius = 20;\n    return _this;\n  }\n\n  _createClass(MessagePopup, [{\n    key: \"popup\",\n    value: function () {\n      var _popup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref, parent) {\n        var message;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                message = _ref.message;\n                this.message.text = message;\n                this.message.commitMeasure();\n                this.height = this.message.height + this.boxBg.radius * 2 + this.message.fontSize;\n                Laya.Tween.clearAll(this);\n                this.alpha = 0;\n                this.y = -2 * this.height;\n                _context.next = 9;\n                return Laya.promises.Tween.to(this, {\n                  y: 0,\n                  alpha: 1\n                }, 300, Laya.Ease.backOut);\n\n              case 9:\n                _context.next = 11;\n                return Laya.promises.Tween.to(this, {\n                  alpha: 0\n                }, 300, Laya.Ease.strongIn, 3000);\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function popup(_x, _x2) {\n        return _popup.apply(this, arguments);\n      }\n\n      return popup;\n    }()\n  }]);\n\n  return MessagePopup;\n}(ui.view.MessagePopupUI);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvdGhlbWVzL21lc3NhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUNBO0FBQUE7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBT0E7QUFBQTtBQUFBOztBQVBBO0FBQUE7QUFBQTtBQVFBO0FBQUE7O0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWZlX3Jlc3RhcnQvLi9zcmMvdWkvdGhlbWVzL21lc3NhZ2UuanM/NzE0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlUG9wdXAgZXh0ZW5kcyB1aS52aWV3Lk1lc3NhZ2VQb3B1cFVJIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5yaWdodCA9IDA7XG4gICAgICAgIHRoaXMuYm94QmcuZGVmYXVsdENvbG9yID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuYm94QmcuaG92ZXJDb2xvciA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmJveEJnLnJhZGl1cyA9IDIwO1xuICAgIH1cblxuICAgIGFzeW5jIHBvcHVwKHttZXNzYWdlfSwgcGFyZW50KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZS50ZXh0ID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlLmNvbW1pdE1lYXN1cmUoKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1lc3NhZ2UuaGVpZ2h0ICsgdGhpcy5ib3hCZy5yYWRpdXMgKiAyICsgdGhpcy5tZXNzYWdlLmZvbnRTaXplO1xuICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmFscGhhID0gMDtcbiAgICAgICAgdGhpcy55ID0gLSAyICogdGhpcy5oZWlnaHQ7XG4gICAgICAgIGF3YWl0IExheWEucHJvbWlzZXMuVHdlZW4udG8odGhpcywgeyB5OiAwLCBhbHBoYTogMSB9LCAzMDAsIExheWEuRWFzZS5iYWNrT3V0KTtcbiAgICAgICAgYXdhaXQgTGF5YS5wcm9taXNlcy5Ud2Vlbi50byh0aGlzLCB7IGFscGhhOiAwfSwgMzAwLCBMYXlhLkVhc2Uuc3Ryb25nSW4sIDMwMDApO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ui/themes/message.js\n");

/***/ })

}]);