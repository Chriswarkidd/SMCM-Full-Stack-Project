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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/viewAllPage.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/viewAllPage.jsx":
/*!************************************!*\
  !*** ./wwwroot/js/viewAllPage.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/*\r\n * This class is the View all games page\r\n * This is where users can view all the games we have on our database and add one if \r\n */\nvar GamesPage =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(GamesPage, _React$Component);\n\n  function GamesPage() {\n    _classCallCheck(this, GamesPage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(GamesPage).apply(this, arguments));\n  }\n\n  _createClass(GamesPage, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        align: \"center\"\n      }, React.createElement(\"h1\", {\n        className: \"text-center\"\n      }, \"All Games\"), React.createElement(Table, null));\n    }\n  }]);\n\n  return GamesPage;\n}(React.Component);\n\nvar Table =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(Table, _React$Component2);\n\n  function Table(props) {\n    var _this;\n\n    _classCallCheck(this, Table);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Table).call(this, props));\n    _this.state = {\n      games: []\n    };\n\n    _this.ajaxTest(_assertThisInitialized(_this));\n\n    return _this;\n  }\n\n  _createClass(Table, [{\n    key: \"ajaxTest\",\n    value: function ajaxTest(obj) {\n      $.ajax({\n        url: \"/Home/TestAllGames\"\n      }).done(function (result) {\n        obj.setState({\n          games: result.test\n        });\n      });\n    }\n  }, {\n    key: \"search\",\n    value: function search(obj) {\n      var $searchTerm = $(\"#gameSearch\");\n      $.ajax({\n        url: \"/Home/SearchGames\",\n        data: {\n          searchTerm: $searchTerm.val()\n        }\n      }).done(function (result) {\n        if (result.success) {\n          obj.setState({\n            games: result.gamesList\n          });\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(React.Fragment, null, React.createElement(\"br\", null), React.createElement(\"table\", null, React.createElement(\"tbody\", null, React.createElement(\"tr\", null, React.createElement(\"td\", {\n        className: \"col-8 searchPage-div\"\n      }, React.createElement(\"input\", {\n        className: \"form-control\",\n        id: \"gameSearch\",\n        type: \"text\",\n        placeholder: \"Search Games...\"\n      })), React.createElement(\"td\", {\n        className: \"searchPage-div\"\n      }, React.createElement(\"button\", {\n        className: \"btn-primary form-control\",\n        onClick: function onClick() {\n          return _this2.search(_this2);\n        }\n      }, React.createElement(\"span\", {\n        className: \"fas fa-search\"\n      })))))), React.createElement(\"div\", null, this.state.games && this.state.games.length > 0 ? React.createElement(\"table\", {\n        className: \"table table-striped\"\n      }, React.createElement(\"thead\", null, React.createElement(\"tr\", null, React.createElement(\"th\", null, \"Title\"), React.createElement(\"th\", null, \"Publishing Studio\"), React.createElement(\"th\", null, \"Date\"), React.createElement(\"th\", null, \"Genre\"), React.createElement(\"th\", null, \"ESRB Rating\"), React.createElement(\"th\", null, \"Platforms\"))), React.createElement(\"tbody\", null, this.state.games.map(function (g, index) {\n        return React.createElement(\"tr\", {\n          key: index\n        }, React.createElement(\"td\", null, g.gameName), React.createElement(\"td\", null, g.publisher), React.createElement(\"td\", null, new Date(g.datePublished).getFullYear()), React.createElement(\"td\", null, g.genre), React.createElement(\"td\", null, g.esrbRating), React.createElement(\"td\", null, g.platforms));\n      }))) : React.createElement(\"p\", null, \"No Games were found! \\uD83D\\uDE22\")));\n    }\n  }]);\n\n  return Table;\n}(React.Component);\n\nReactDOM.render(React.createElement(GamesPage, null), document.getElementById('content'));\n\n//# sourceURL=webpack:///./wwwroot/js/viewAllPage.jsx?");

/***/ })

/******/ });