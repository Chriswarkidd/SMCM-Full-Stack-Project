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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/loginPage.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/loginPage.jsx":
/*!**********************************!*\
  !*** ./wwwroot/js/loginPage.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/*\r\n * This class is the login page\r\n * It deals with logging in users and signing them up for an account if they wish\r\n */\nvar Login =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Login, _React$Component);\n\n  function Login(props) {\n    var _this;\n\n    _classCallCheck(this, Login);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));\n    _this.state = {\n      errors: null,\n      LogInMessage: null\n    };\n    return _this;\n  } //Create account function when a new user signs up\n\n\n  _createClass(Login, [{\n    key: \"createAccount\",\n    value: function createAccount(obj) {\n      obj.setState({\n        LogInMessage: null,\n        errors: null\n      });\n      var $username = $(\"#Username\");\n      var $password = $(\"#Password\");\n      $.ajax({\n        type: \"POST\",\n        url: \"/Home/CreateAccount\",\n        data: {\n          username: $username.val(),\n          password: $password.val()\n        }\n      }).done(function (result) {\n        if (result.a === true) {\n          window.location.href = \"/Home/Index\";\n        } else {\n          obj.setState({\n            errors: result.a\n          });\n        }\n      });\n    } //Login method for exsisting users\n\n  }, {\n    key: \"logIn\",\n    value: function logIn(obj) {\n      obj.setState({\n        LogInMessage: null,\n        errors: null\n      });\n      var $username = $(\"#Username\");\n      var $password = $(\"#Password\");\n      $.ajax({\n        type: \"POST\",\n        url: \"/Home/LogIn\",\n        data: {\n          username: $username.val(),\n          password: $password.val()\n        }\n      }).done(function (result) {\n        if (result.a === true) {\n          window.location.href = \"/Home/Index\";\n        } else {\n          obj.setState({\n            LogInMessage: result.a\n          });\n        }\n      });\n    } //render the login page form\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\"div\", null, React.createElement(\"label\", {\n        htmlFor: \"userName\",\n        className: \"\"\n      }, \"Email:\"), React.createElement(\"div\", null), React.createElement(\"input\", {\n        id: \"Username\",\n        className: \"login-input\",\n        type: \"text\"\n      }), React.createElement(\"div\", null), React.createElement(\"label\", {\n        htmlFor: \"password\",\n        className: \"\"\n      }, \"Password:\"), React.createElement(\"div\", null), React.createElement(\"input\", {\n        id: \"Password\",\n        className: \"login-input\",\n        type: \"password\"\n      }), React.createElement(\"div\", null), this.state.errors && this.state.errors.map(function (e, index) {\n        return React.createElement(\"label\", {\n          key: index\n        }, e.description);\n      }), this.state.LogInMessage && React.createElement(\"label\", null, this.state.LogInMessage), React.createElement(\"button\", {\n        className: \"btn-login\",\n        onClick: function onClick() {\n          return _this2.logIn(_this2);\n        }\n      }, \" Sign in \"), React.createElement(\"button\", {\n        className: \"btn-login\",\n        style: {\n          left: \"1.25%\"\n        },\n        onClick: function onClick() {\n          return _this2.createAccount(_this2);\n        }\n      }, \" Sign up \"));\n    }\n  }]);\n\n  return Login;\n}(React.Component);\n\nReactDOM.render(React.createElement(Login, null), document.getElementById('content'));\n\n//# sourceURL=webpack:///./wwwroot/js/loginPage.jsx?");

/***/ })

/******/ });