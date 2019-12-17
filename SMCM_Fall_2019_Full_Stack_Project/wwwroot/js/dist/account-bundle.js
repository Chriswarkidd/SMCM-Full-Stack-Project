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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/accountPage.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/accountPage.jsx":
/*!************************************!*\
  !*** ./wwwroot/js/accountPage.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Account =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Account, _React$Component);\n\n  function Account() {\n    _classCallCheck(this, Account);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Account).apply(this, arguments));\n  }\n\n  _createClass(Account, [{\n    key: \"deleteAccount\",\n    value: function deleteAccount(obj) {\n      $.ajax({\n        url: \"/Home/DeleteAccount\"\n      }).done(function (result) {\n        if (result.success) {\n          alert(\"Account Deleted\");\n          window.location.href = \"/Home/Index\";\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var modal = React.createElement(\"div\", {\n        id: \"deleteModal\",\n        className: \"modal fade\"\n      }, React.createElement(\"div\", {\n        className: \"modal-dialog\"\n      }, React.createElement(\"div\", {\n        className: \"modal-content\"\n      }, React.createElement(\"div\", {\n        className: \"modal-header\"\n      }, React.createElement(\"h4\", null, \"Delete Account\"), React.createElement(\"button\", {\n        className: \"close\",\n        \"data-dismiss\": \"modal\"\n      }, React.createElement(\"span\", {\n        className: \"fas fa-times\"\n      }))), React.createElement(\"div\", {\n        className: \"modal-body\"\n      }, React.createElement(\"h6\", null, \"Waring: \"), React.createElement(\"p\", null, \"Your account and any information associated with it will be permanently deleted\"), React.createElement(\"p\", null, \"Are you sure you wish to continue?\")), React.createElement(\"div\", {\n        className: \"modal-footer\"\n      }, React.createElement(\"button\", {\n        className: \"btn-delete\",\n        \"data-dismiss\": \"modal\",\n        onClick: function onClick() {\n          return _this.deleteAccount(_this);\n        }\n      }, \"Delete\"), React.createElement(\"button\", {\n        className: \"btn-accept\",\n        \"data-dismiss\": \"modal\"\n      }, \"Cancel\")))));\n      return React.createElement(\"div\", {\n        align: \"center\"\n      }, React.createElement(\"h1\", null, \" My Games\"), modal, React.createElement(Table, null), React.createElement(\"button\", {\n        className: \"btn-delete\",\n        \"data-toggle\": \"modal\",\n        \"data-target\": \"#deleteModal\"\n      }, \" Delete Account \"));\n    }\n  }]);\n\n  return Account;\n}(React.Component);\n\nvar Table =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(Table, _React$Component2);\n\n  function Table(props) {\n    var _this2;\n\n    _classCallCheck(this, Table);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Table).call(this, props));\n    _this2.state = {\n      games: [],\n      listOfGames: [],\n      addGameRequest: false\n    };\n    _this2.updatedGames = [];\n\n    _this2.ajaxTest(_assertThisInitialized(_this2));\n\n    _this2.getAllGames(_assertThisInitialized(_this2));\n\n    return _this2;\n  }\n\n  _createClass(Table, [{\n    key: \"hasPlayed\",\n    value: function hasPlayed(obj, index) {\n      obj.updatedGames[index][1] = !obj.updatedGames[index][1];\n    } //create a list of game names to be updated when save changes is clicked\n\n  }, {\n    key: \"saveChanges\",\n    value: function saveChanges(obj) {\n      jQuery.ajaxSettings.traditional = true;\n      $.ajax({\n        url: \"/Home/HasPlayed\",\n        data: {\n          gameList: obj.updatedGames\n        }\n      }).done(function (result) {\n        obj.ajaxTest(obj);\n        alert(\"Your changes have been saved!\");\n      });\n    }\n  }, {\n    key: \"changeRating\",\n    value: function changeRating(obj, gName, index) {\n      $rating = $(\"#Rating\" + index);\n      jQuery.ajaxSettings.traditional = true;\n      $.ajax({\n        url: \"/Home/Rate\",\n        data: {\n          gameName: gName,\n          rating: $rating.val()\n        }\n      }).done(function (result) {});\n    }\n  }, {\n    key: \"ajaxTest\",\n    value: function ajaxTest(obj) {\n      obj.updatedGames = [];\n      $.ajax({\n        url: \"/Home/TestGameList\"\n      }).done(function (result) {\n        obj.setState({\n          games: result.test\n        });\n\n        for (var g in result.test) {\n          obj.updatedGames.push([result.test[g].gameName, result.test[g].playedGame]);\n        }\n      });\n    }\n  }, {\n    key: \"getAllGames\",\n    value: function getAllGames(obj) {\n      $.ajax({\n        url: \"/Home/TestAllGames\"\n      }).done(function (result) {\n        obj.setState({\n          listOfGames: result.test\n        });\n      });\n    }\n  }, {\n    key: \"addNewGameForm\",\n    value: function addNewGameForm(obj) {\n      obj.setState({\n        addGameRequest: !obj.state.addGameRequest\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var modal = React.createElement(\"div\", {\n        id: \"addModal\",\n        className: \"modal fade\"\n      }, React.createElement(\"div\", {\n        className: \"modal-dialog\"\n      }, React.createElement(\"div\", {\n        className: \"modal-content\"\n      }, React.createElement(\"div\", {\n        className: \"modal-header\"\n      }, React.createElement(\"h4\", null, \"Add a Game!\"), React.createElement(\"button\", {\n        className: \"close\",\n        \"data-dismiss\": \"modal\"\n      }, React.createElement(\"span\", {\n        className: \"fas fa-times\"\n      }))), React.createElement(\"div\", {\n        className: \"modal-body\"\n      }, this.state.addGameRequest ? React.createElement(\"div\", {\n        className: \"container\"\n      }, React.createElement(\"div\", {\n        className: \"formGroup\"\n      }, React.createElement(\"form\", null, React.createElement(\"label\", {\n        \"for\": \"gameName\"\n      }, \"Name:\"), React.createElement(\"input\", {\n        id: \"gameName\",\n        className: \"form-control\",\n        type: \"text\",\n        placeholder: \"Game Name\"\n      })), React.createElement(\"div\", {\n        className: \"formGroup\"\n      }, React.createElement(\"form\", null, React.createElement(\"label\", {\n        \"for\": \"gameYear\"\n      }, \"Publishing Year:\"), React.createElement(\"input\", {\n        id: \"gameYear\",\n        className: \"form-control\",\n        type: \"text\",\n        placeholder: \"Publishing Year\"\n      }))), React.createElement(\"div\", {\n        className: \"formGroup\"\n      }, React.createElement(\"form\", null, React.createElement(\"label\", {\n        \"for\": \"esrbRating\"\n      }, \"Age Rating:\"), React.createElement(\"select\", {\n        name: \"esrbRating\"\n      }, React.createElement(\"option\", {\n        selected: true\n      }, \"Select a Rating\"), React.createElement(\"option\", {\n        value: \"E\"\n      }, \"E\"), React.createElement(\"option\", {\n        value: \"E10\"\n      }, \"E10\"), React.createElement(\"option\", {\n        value: \"E10+\"\n      }, \"E10+\"), React.createElement(\"option\", {\n        value: \"T\"\n      }, \"T\"), React.createElement(\"option\", {\n        value: \"M\"\n      }, \"M\")))), React.createElement(\"div\", {\n        className: \"formGroup\"\n      }, React.createElement(\"form\", null, React.createElement(\"label\", {\n        \"for\": \"genre\"\n      }, \"Genre:\"), React.createElement(\"select\", {\n        name: \"genre\"\n      }, React.createElement(\"option\", {\n        selected: true\n      }, \"Select a Genre\"), React.createElement(\"option\", {\n        value: \"Adventure\"\n      }, \"Adventure\"), React.createElement(\"option\", {\n        value: \"Puzzle\"\n      }, \"Puzzle\"), React.createElement(\"option\", {\n        value: \"FPS\"\n      }, \"FPS\"), React.createElement(\"option\", {\n        value: \"RPG\"\n      }, \"RPG\"), React.createElement(\"option\", {\n        value: \"Horror\"\n      }, \"Horror\")))))) : React.createElement(\"div\", null, React.createElement(\"div\", {\n        className: \"row\"\n      }, React.createElement(\"div\", {\n        className: \"col-sm-12\"\n      }, React.createElement(\"label\", {\n        htmlFor: \"GameList\"\n      }, \"Game: \"), React.createElement(\"select\", {\n        id: \"GameList\",\n        defaultValue: \"\"\n      }, React.createElement(\"option\", {\n        value: \"\"\n      }, \"Select an existing game\"), this.state.listOfGames && this.state.listOfGames.map(function (g, index) {\n        return React.createElement(\"option\", {\n          key: index,\n          value: g.gameName\n        }, g.gameName);\n      })))), React.createElement(\"div\", {\n        className: \"row\"\n      }, React.createElement(\"div\", {\n        className: \"col-sm-12\"\n      }, React.createElement(\"button\", {\n        className: \"btn btn-link\",\n        role: \"link\",\n        onClick: function onClick() {\n          return _this3.addNewGameForm(_this3);\n        }\n      }, \"Can't Find Your Game?\"))))), React.createElement(\"div\", {\n        className: \"modal-footer\"\n      }, React.createElement(\"button\", {\n        className: \"btn-accept\",\n        \"data-dismiss\": \"modal\"\n      }, \"Add\"), React.createElement(\"button\", {\n        className: \"btn-accept\",\n        \"data-dismiss\": \"modal\",\n        onClick: function onClick() {\n          return _this3.addNewGameForm(_this3);\n        }\n      }, \"Close\")))));\n      return React.createElement(\"div\", null, modal, React.createElement(\"button\", {\n        className: \"btn-primary\",\n        \"data-toggle\": \"modal\",\n        \"data-target\": \"#addModal\"\n      }, \"Add a game!\"), React.createElement(\"table\", {\n        className: \"table table-striped\"\n      }, React.createElement(\"thead\", null, React.createElement(\"tr\", null, React.createElement(\"th\", null, \"Game Title\"), React.createElement(\"th\", null, \"Played\"), React.createElement(\"th\", null, \"Rating\"))), React.createElement(\"tbody\", null, this.state.games && this.state.games.map(function (g, index) {\n        return React.createElement(\"tr\", {\n          key: index\n        }, React.createElement(\"td\", null, g.gameName), React.createElement(\"td\", null, g.playedGame ? React.createElement(\"input\", {\n          type: \"checkbox\",\n          checked: g.playedGame,\n          readOnly: true\n        }) : React.createElement(\"input\", {\n          type: \"checkbox\",\n          defaultChecked: g.playedGame,\n          onClick: function onClick() {\n            return _this3.hasPlayed(_this3, index);\n          }\n        })), React.createElement(\"td\", null, g.playedGame ? React.createElement(\"div\", null, React.createElement(\"select\", {\n          id: \"Rating\" + index,\n          className: \"select-accountpage\",\n          name: \"Rating\",\n          defaultValue: g.rating ? g.rating : \"3\",\n          onChange: function onChange() {\n            return _this3.changeRating(_this3, g.gameName, index);\n          }\n        }, React.createElement(\"option\", {\n          value: \"1\"\n        }, \"1\"), React.createElement(\"option\", {\n          value: \"2\"\n        }, \"2\"), React.createElement(\"option\", {\n          value: \"3\"\n        }, \"3\"), React.createElement(\"option\", {\n          value: \"4\"\n        }, \"4\"), React.createElement(\"option\", {\n          value: \"5\"\n        }, \"5\"))) : React.createElement(\"div\", null, \"N/A\")));\n      }))), React.createElement(\"div\", {\n        style: {\n          paddingBottom: \"5px\"\n        }\n      }, \" \", React.createElement(\"button\", {\n        className: \"btn btn-primary\",\n        onClick: function onClick() {\n          return _this3.saveChanges(_this3);\n        }\n      }, \" Save Changes \"), \" \"));\n    }\n  }]);\n\n  return Table;\n}(React.Component);\n\nReactDOM.render(React.createElement(Account, null), document.getElementById('content'));\n\n//# sourceURL=webpack:///./wwwroot/js/accountPage.jsx?");

/***/ })

/******/ });