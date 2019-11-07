/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/exampleReactComponent.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/exampleReactComponent.jsx":
/*!**********************************************!*\
  !*** ./wwwroot/js/exampleReactComponent.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar TestReactComponent =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TestReactComponent, _React$Component);\n\n  function TestReactComponent(props) {\n    var _this;\n\n    _classCallCheck(this, TestReactComponent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TestReactComponent).call(this, props));\n    _this.state = {\n      text: \"What Game Should I Play?\",\n      recommended: false\n    };\n    return _this;\n  } //This isn't supposed to be how it works, but this is the way it currently has to be to work.\n  //Will look into this more later.\n\n\n  _createClass(TestReactComponent, [{\n    key: \"ajaxTest\",\n    value: function ajaxTest(obj) {\n      $.ajax({\n        url: \"/Home/Test\"\n      }).done(function (result) {\n        obj.setState({\n          text: result.test,\n          recommended: true\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\"div\", {\n        className: \"container-fluid\"\n      }, React.createElement(\"div\", {\n        className: \"row\"\n      }, React.createElement(\"div\", {\n        className: \"col-md-3\"\n      }), React.createElement(\"div\", {\n        className: \"col-md-6\"\n      }, React.createElement(\"div\", {\n        className: \"row\"\n      }, React.createElement(\"div\", {\n        style: {\n          paddingRight: \"50px\"\n        }\n      }, React.createElement(\"h1\", {\n        className: \"select-homepage\"\n      }, \"Genre:\"), React.createElement(\"select\", {\n        className: \"select-homepage\",\n        name: \"Genre\",\n        defaultValue: \"Any\"\n      }, React.createElement(\"option\", {\n        value: \"Any\"\n      }, \"Any Genre\"), React.createElement(\"option\", {\n        value: \"Action\"\n      }, \"Action\"), React.createElement(\"option\", {\n        value: \"Adventure\"\n      }, \"Adventure\"), React.createElement(\"option\", {\n        value: \"Puzzle\"\n      }, \"Puzzle\"), React.createElement(\"option\", {\n        value: \"Simulation\"\n      }, \"Simulation\"), React.createElement(\"option\", {\n        value: \"Sports\"\n      }, \"Sports\"))), React.createElement(\"div\", {\n        style: {\n          paddingRight: \"50px\",\n          paddingLeft: \"50px\"\n        }\n      }, React.createElement(\"h2\", {\n        className: \"select-homepage\"\n      }, \"ESRB Rating:\"), React.createElement(\"select\", {\n        className: \"select-homepage\",\n        name: \"Rating\",\n        defaultValue: \"Any\"\n      }, React.createElement(\"option\", {\n        value: \"Any\"\n      }, \"Any Rating\"), React.createElement(\"option\", {\n        value: \"E\"\n      }, \"Everyone\"), React.createElement(\"option\", {\n        value: \"E10\"\n      }, \"Everyone 10+\"), React.createElement(\"option\", {\n        value: \"T\"\n      }, \"Teen\"), React.createElement(\"option\", {\n        value: \"M\"\n      }, \"Mature\"))), React.createElement(\"div\", {\n        style: {\n          paddingLeft: \"50px\"\n        }\n      }, React.createElement(\"h3\", {\n        className: \"select-homepage\"\n      }, \"Platform:\"), React.createElement(\"select\", {\n        className: \"select-homepage\",\n        name: \"Platform\",\n        defaultValue: \"Any\"\n      }, React.createElement(\"option\", {\n        value: \"Any\"\n      }, \"Any Platform\"), React.createElement(\"option\", {\n        value: \"PC\"\n      }, \"PC\"), React.createElement(\"option\", {\n        value: \"Xbox\"\n      }, \"Xbox\"), React.createElement(\"option\", {\n        value: \"Playstation\"\n      }, \"Playstation\"), React.createElement(\"option\", {\n        value: \"Switch\"\n      }, \"Switch\"))), React.createElement(\"h3\", {\n        style: {\n          paddingTop: \"20px\"\n        }\n      }, this.state.text), this.state.recommended ? React.createElement(\"div\", null, React.createElement(\"button\", {\n        className: \"btn-accept\"\n      }, \" Sounds Great \"), React.createElement(\"button\", {\n        className: \"btn-accept\"\n      }, \" Roll Again \")) : React.createElement(\"div\", null, \" \", React.createElement(\"button\", {\n        style: {\n          width: \"500px\"\n        },\n        className: \"btn-accept\",\n        onClick: function onClick() {\n          return _this2.ajaxTest(_this2);\n        }\n      }, \" Recommend a Game \"), \" \"))), React.createElement(\"div\", {\n        className: \"col-md-3\"\n      })));\n    }\n  }]);\n\n  return TestReactComponent;\n}(React.Component);\n\nReactDOM.render(React.createElement(TestReactComponent, null), document.getElementById('content'));\n\n//# sourceURL=webpack:///./wwwroot/js/exampleReactComponent.jsx?");

/***/ })

/******/ });