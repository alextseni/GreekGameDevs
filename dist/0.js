webpackJsonp([0],{

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/react-select/dist/react-select.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "/**\n * React Select\n * ============\n * Created by Jed Watson and Joss Mackison for KeystoneJS, http://www.keystonejs.com/\n * https://twitter.com/jedwatson https://twitter.com/jossmackison https://twitter.com/keystonejs\n * MIT License: https://github.com/JedWatson/react-select\n*/\n.Select {\n  position: relative;\n}\n.Select input::-webkit-contacts-auto-fill-button,\n.Select input::-webkit-credentials-auto-fill-button {\n  display: none !important;\n}\n.Select input::-ms-clear {\n  display: none !important;\n}\n.Select input::-ms-reveal {\n  display: none !important;\n}\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.Select.is-disabled .Select-arrow-zone {\n  cursor: default;\n  pointer-events: none;\n  opacity: 0.35;\n}\n.Select.is-disabled > .Select-control {\n  background-color: #f9f9f9;\n}\n.Select.is-disabled > .Select-control:hover {\n  box-shadow: none;\n}\n.Select.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n  border-color: #b3b3b3 #ccc #d9d9d9;\n}\n.Select.is-open > .Select-control .Select-arrow {\n  top: -2px;\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}\n.Select.is-searchable.is-open > .Select-control {\n  cursor: text;\n}\n.Select.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text;\n}\n.Select.is-focused > .Select-control {\n  background: #fff;\n}\n.Select.is-focused:not(.is-open) > .Select-control {\n  border-color: #007eff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);\n  background: #fff;\n}\n.Select.has-value.is-clearable.Select--single > .Select-control .Select-value {\n  padding-right: 42px;\n}\n.Select.has-value.Select--single > .Select-control .Select-value .Select-value-label,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {\n  color: #333;\n}\n.Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {\n  cursor: pointer;\n  text-decoration: none;\n}\n.Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {\n  color: #007eff;\n  outline: none;\n  text-decoration: underline;\n}\n.Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {\n  background: #fff;\n}\n.Select.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n.Select.is-open .Select-arrow,\n.Select .Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666;\n}\n.Select.Select--rtl {\n  direction: rtl;\n  text-align: right;\n}\n.Select-control {\n  background-color: #fff;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  color: #333;\n  cursor: default;\n  display: table;\n  border-spacing: 0;\n  border-collapse: separate;\n  height: 36px;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.Select-control:hover {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n}\n.Select-control .Select-input:focus {\n  outline: none;\n  background: #fff;\n}\n.Select-placeholder,\n.Select--single > .Select-control .Select-value {\n  bottom: 0;\n  color: #aaa;\n  left: 0;\n  line-height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.Select-input {\n  height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n}\n.Select-input > input {\n  width: 100%;\n  background: none transparent;\n  border: 0 none;\n  box-shadow: none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  outline: none;\n  line-height: 17px;\n  /* For IE 8 compatibility */\n  padding: 8px 0 12px;\n  /* For IE 8 compatibility */\n  -webkit-appearance: none;\n}\n.is-focused .Select-input > input {\n  cursor: text;\n}\n.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none;\n}\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n}\n.Select-loading {\n  -webkit-animation: Select-animation-spin 400ms infinite linear;\n  -o-animation: Select-animation-spin 400ms infinite linear;\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #333;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.Select-clear-zone {\n  -webkit-animation: Select-animation-fadeIn 200ms;\n  -o-animation: Select-animation-fadeIn 200ms;\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 17px;\n}\n.Select-clear-zone:hover {\n  color: #D0021B;\n}\n.Select-clear {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 1;\n}\n.Select--multi .Select-clear-zone {\n  width: 17px;\n}\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 25px;\n  padding-right: 5px;\n}\n.Select--rtl .Select-arrow-zone {\n  padding-right: 0;\n  padding-left: 5px;\n}\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n  position: relative;\n}\n.Select-control > *:last-child {\n  padding-right: 5px;\n}\n.Select--multi .Select-multi-value-wrapper {\n  display: inline-block;\n}\n.Select .Select-aria-only {\n  position: absolute;\n  display: inline-block;\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  float: left;\n}\n@-webkit-keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1;\n  -webkit-overflow-scrolling: touch;\n}\n.Select-menu {\n  max-height: 198px;\n  overflow-y: auto;\n}\n.Select-option {\n  box-sizing: border-box;\n  background-color: #fff;\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px;\n}\n.Select-option:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Select-option.is-selected {\n  background-color: #f5faff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.04);\n  color: #333;\n}\n.Select-option.is-focused {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  color: #333;\n}\n.Select-option.is-disabled {\n  color: #cccccc;\n  cursor: default;\n}\n.Select-noresults {\n  box-sizing: border-box;\n  color: #999999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n.Select--multi .Select-input {\n  vertical-align: middle;\n  margin-left: 10px;\n  padding: 0;\n}\n.Select--multi.Select--rtl .Select-input {\n  margin-left: 0;\n  margin-right: 10px;\n}\n.Select--multi.has-value .Select-input {\n  margin-left: 5px;\n}\n.Select--multi .Select-value {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #007eff;\n  display: inline-block;\n  font-size: 0.9em;\n  line-height: 1.4;\n  margin-left: 5px;\n  margin-top: 5px;\n  vertical-align: top;\n}\n.Select--multi .Select-value-icon,\n.Select--multi .Select-value-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Select--multi .Select-value-label {\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px;\n}\n.Select--multi a.Select-value-label {\n  color: #007eff;\n  cursor: pointer;\n  text-decoration: none;\n}\n.Select--multi a.Select-value-label:hover {\n  text-decoration: underline;\n}\n.Select--multi .Select-value-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px 3px;\n}\n.Select--multi .Select-value-icon:hover,\n.Select--multi .Select-value-icon:focus {\n  background-color: #d8eafd;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6;\n}\n.Select--multi .Select-value-icon:active {\n  background-color: #c2e0ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.24);\n}\n.Select--multi.Select--rtl .Select-value {\n  margin-left: 0;\n  margin-right: 5px;\n}\n.Select--multi.Select--rtl .Select-value-icon {\n  border-right: none;\n  border-left: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border-left: 1px solid rgba(0, 126, 255, 0.24);\n}\n.Select--multi.is-disabled .Select-value {\n  background-color: #fcfcfc;\n  border: 1px solid #e3e3e3;\n  color: #333;\n}\n.Select--multi.is-disabled .Select-value-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #e3e3e3;\n}\n.Select--multi.is-disabled .Select-value-icon:hover,\n.Select--multi.is-disabled .Select-value-icon:focus,\n.Select--multi.is-disabled .Select-value-icon:active {\n  background-color: #fcfcfc;\n}\n@keyframes Select-animation-spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@-webkit-keyframes Select-animation-spin {\n  to {\n    -webkit-transform: rotate(1turn);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/react-async-script/lib/async-script-loader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getIterator2 = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

exports.default = makeAsyncScript;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SCRIPT_MAP = new _map2.default();

// A counter used to generate a unique id for each component that uses the function
var idCount = 0;

function makeAsyncScript(Component, scriptURL, options) {
  options = options || {};
  var wrappedComponentName = Component.displayName || Component.name || "Component";

  var AsyncScriptLoader = function (_React$Component) {
    (0, _inherits3.default)(AsyncScriptLoader, _React$Component);

    function AsyncScriptLoader() {
      (0, _classCallCheck3.default)(this, AsyncScriptLoader);

      var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));

      _this.state = {};
      return _this;
    }

    AsyncScriptLoader.prototype.asyncScriptLoaderGetScriptLoaderID = function asyncScriptLoaderGetScriptLoaderID() {
      if (!this.__scriptLoaderID) {
        this.__scriptLoaderID = "async-script-loader-" + idCount++;
      }
      return this.__scriptLoaderID;
    };

    AsyncScriptLoader.prototype.getComponent = function getComponent() {
      return this.childComponent;
    };

    AsyncScriptLoader.prototype.componentDidMount = function componentDidMount() {
      var _this2 = this;

      var key = this.asyncScriptLoaderGetScriptLoaderID();
      var _options = options,
          globalName = _options.globalName,
          callbackName = _options.callbackName;

      if (globalName && typeof window[globalName] !== "undefined") {
        SCRIPT_MAP.set(scriptURL, { loaded: true, observers: new _map2.default() });
      }

      if (SCRIPT_MAP.has(scriptURL)) {
        var entry = SCRIPT_MAP.get(scriptURL);
        if (entry && (entry.loaded || entry.errored)) {
          this.asyncScriptLoaderHandleLoad(entry);
          return;
        }
        entry.observers.set(key, function (entry) {
          return _this2.asyncScriptLoaderHandleLoad(entry);
        });
        return;
      }

      var observers = new _map2.default();
      observers.set(key, function (entry) {
        return _this2.asyncScriptLoaderHandleLoad(entry);
      });
      SCRIPT_MAP.set(scriptURL, {
        loaded: false,
        observers: observers
      });

      var script = document.createElement("script");

      script.src = scriptURL;
      script.async = 1;

      var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(func) {
        if (SCRIPT_MAP.has(scriptURL)) {
          var mapEntry = SCRIPT_MAP.get(scriptURL);
          var observersMap = mapEntry.observers;

          for (var _iterator = observersMap, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var _ref2 = _ref,
                obsKey = _ref2[0],
                observer = _ref2[1];

            if (func(observer)) {
              observersMap.delete(obsKey);
            }
          }
        }
      };

      if (callbackName && typeof window !== "undefined") {
        window[callbackName] = AsyncScriptLoader.asyncScriptLoaderTriggerOnScriptLoaded;
      }

      script.onload = function () {
        var mapEntry = SCRIPT_MAP.get(scriptURL);
        if (mapEntry) {
          mapEntry.loaded = true;
          callObserverFuncAndRemoveObserver(function (observer) {
            if (callbackName) {
              return false;
            }
            observer(mapEntry);
            return true;
          });
        }
      };
      script.onerror = function (event) {
        var mapEntry = SCRIPT_MAP.get(scriptURL);
        if (mapEntry) {
          mapEntry.errored = true;
          callObserverFuncAndRemoveObserver(function (observer) {
            observer(mapEntry);
            return true;
          });
        }
      };

      // (old) MSIE browsers may call "onreadystatechange" instead of "onload"
      script.onreadystatechange = function () {
        if (_this2.readyState === "loaded") {
          // wait for other events, then call onload if default onload hadn't been called
          window.setTimeout(function () {
            var mapEntry = SCRIPT_MAP.get(scriptURL);
            if (mapEntry && mapEntry.loaded !== true) {
              script.onload();
            }
          }, 0);
        }
      };

      document.body.appendChild(script);
    };

    AsyncScriptLoader.prototype.asyncScriptLoaderHandleLoad = function asyncScriptLoaderHandleLoad(state) {
      this.setState(state, this.props.asyncScriptOnLoad);
    };

    AsyncScriptLoader.prototype.componentWillUnmount = function componentWillUnmount() {
      // Remove tag script
      if (options.removeOnUnmount === true) {
        var allScripts = document.getElementsByTagName("script");
        for (var i = 0; i < allScripts.length; i += 1) {
          if (allScripts[i].src.indexOf(scriptURL) > -1) {
            if (allScripts[i].parentNode) {
              allScripts[i].parentNode.removeChild(allScripts[i]);
            }
          }
        }
      }
      // Clean the observer entry
      var mapEntry = SCRIPT_MAP.get(scriptURL);
      if (mapEntry) {
        mapEntry.observers.delete(this.asyncScriptLoaderGetScriptLoaderID());
        if (options.removeOnUnmount === true) {
          SCRIPT_MAP.delete(scriptURL);
        }
      }
    };

    AsyncScriptLoader.prototype.render = function render() {
      var _this3 = this;

      var globalName = options.globalName;
      var _props = this.props,
          asyncScriptOnLoad = _props.asyncScriptOnLoad,
          childProps = (0, _objectWithoutProperties3.default)(_props, ["asyncScriptOnLoad"]);

      if (globalName && typeof window !== "undefined") {
        childProps[globalName] = typeof window[globalName] !== "undefined" ? window[globalName] : undefined;
      }
      return _react2.default.createElement(Component, (0, _extends3.default)({ ref: function ref(comp) {
          _this3.childComponent = comp;
        } }, childProps));
    };

    return AsyncScriptLoader;
  }(_react2.default.Component);

  AsyncScriptLoader.displayName = "AsyncScriptLoader(" + wrappedComponentName + ")";
  AsyncScriptLoader.propTypes = {
    asyncScriptOnLoad: _propTypes2.default.func
  };
  AsyncScriptLoader.asyncScriptLoaderTriggerOnScriptLoaded = function () {
    var mapEntry = SCRIPT_MAP.get(scriptURL);
    if (!mapEntry || !mapEntry.loaded) {
      throw new Error("Script is not loaded.");
    }
    for (var _iterator2 = mapEntry.observers.values(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
      var _ref3;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref3 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref3 = _i2.value;
      }

      var observer = _ref3;

      observer(mapEntry);
    }
    delete window[options.callbackName];
  };

  if (options.exposeFuncs) {
    var _loop = function _loop() {
      if (_isArray3) {
        if (_i3 >= _iterator3.length) return "break";
        _ref4 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) return "break";
        _ref4 = _i3.value;
      }

      var funcToExpose = _ref4;

      /* eslint-disable no-loop-func */
      AsyncScriptLoader.prototype[funcToExpose] = function () {
        var _getComponent;

        return (_getComponent = this.getComponent())[funcToExpose].apply(_getComponent, arguments);
      };
      /* eslint-enable no-loop-func */
    };

    for (var _iterator3 = options.exposeFuncs, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
      var _ref4;

      var _ret = _loop();

      if (_ret === "break") break;
    }
  }
  return AsyncScriptLoader;
}

/***/ }),

/***/ "./node_modules/react-google-recaptcha/lib/recaptcha-wrapper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _recaptcha = __webpack_require__("./node_modules/react-google-recaptcha/lib/recaptcha.js");

var _recaptcha2 = _interopRequireDefault(_recaptcha);

var _reactAsyncScript = __webpack_require__("./node_modules/react-async-script/lib/async-script-loader.js");

var _reactAsyncScript2 = _interopRequireDefault(_reactAsyncScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var callbackName = "onloadcallback";
var lang = typeof window !== "undefined" && window.recaptchaOptions && window.recaptchaOptions.lang ? "&hl=" + window.recaptchaOptions.lang : "";
var URL = "https://www.google.com/recaptcha/api.js?onload=" + callbackName + "&render=explicit" + lang;
var globalName = "grecaptcha";

exports.default = (0, _reactAsyncScript2.default)(_recaptcha2.default, URL, {
  callbackName: callbackName,
  globalName: globalName,
  exposeFuncs: ["getValue", "getWidgetId", "reset", "execute"]
});

/***/ }),

/***/ "./node_modules/react-google-recaptcha/lib/recaptcha.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReCAPTCHA = function (_React$Component) {
  (0, _inherits3.default)(ReCAPTCHA, _React$Component);

  function ReCAPTCHA() {
    (0, _classCallCheck3.default)(this, ReCAPTCHA);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));

    _this.state = {};
    _this.handleExpired = _this.handleExpired.bind(_this);
    _this.handleRecaptchaRef = _this.handleRecaptchaRef.bind(_this);
    return _this;
  }

  ReCAPTCHA.prototype.getValue = function getValue() {
    if (this.props.grecaptcha && this.state.widgetId !== undefined) {
      return this.props.grecaptcha.getResponse(this.state.widgetId);
    }
    return null;
  };

  ReCAPTCHA.prototype.getWidgetId = function getWidgetId() {
    if (this.props.grecaptcha && this.state.widgetId !== undefined) {
      return this.state.widgetId;
    }
    return null;
  };

  ReCAPTCHA.prototype.execute = function execute() {
    var grecaptcha = this.props.grecaptcha;
    var widgetId = this.state.widgetId;


    if (grecaptcha && widgetId !== undefined) {
      return grecaptcha.execute(widgetId);
    } else {
      this._executeRequested = true;
    }
  };

  ReCAPTCHA.prototype.reset = function reset() {
    if (this.props.grecaptcha && this.state.widgetId !== undefined) {
      this.props.grecaptcha.reset(this.state.widgetId);
    }
  };

  ReCAPTCHA.prototype.handleExpired = function handleExpired() {
    if (this.props.onExpired) {
      this.props.onExpired();
    } else if (this.props.onChange) {
      this.props.onChange(null);
    }
  };

  ReCAPTCHA.prototype.explicitRender = function explicitRender(cb) {
    if (this.props.grecaptcha && this.state.widgetId === undefined) {
      var id = this.props.grecaptcha.render(this.captcha, {
        sitekey: this.props.sitekey,
        callback: this.props.onChange,
        theme: this.props.theme,
        type: this.props.type,
        tabindex: this.props.tabindex,
        "expired-callback": this.handleExpired,
        size: this.props.size,
        stoken: this.props.stoken,
        badge: this.props.badge
      });
      this.setState({
        widgetId: id
      }, cb);
    }
    if (this._executeRequested && this.props.grecaptcha && this.state.widgetId !== undefined) {
      this._executeRequested = false;
      this.execute();
    }
  };

  ReCAPTCHA.prototype.componentDidMount = function componentDidMount() {
    this.explicitRender();
  };

  ReCAPTCHA.prototype.componentDidUpdate = function componentDidUpdate() {
    this.explicitRender();
  };

  ReCAPTCHA.prototype.handleRecaptchaRef = function handleRecaptchaRef(elem) {
    this.captcha = elem;
  };

  ReCAPTCHA.prototype.render = function render() {
    // consume properties owned by the reCATPCHA, pass the rest to the div so the user can style it.
    /* eslint-disable no-unused-vars */
    var _props = this.props,
        sitekey = _props.sitekey,
        onChange = _props.onChange,
        theme = _props.theme,
        type = _props.type,
        tabindex = _props.tabindex,
        onExpired = _props.onExpired,
        size = _props.size,
        stoken = _props.stoken,
        grecaptcha = _props.grecaptcha,
        badge = _props.badge,
        childProps = (0, _objectWithoutProperties3.default)(_props, ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "size", "stoken", "grecaptcha", "badge"]);
    /* eslint-enable no-unused-vars */

    return _react2.default.createElement("div", (0, _extends3.default)({}, childProps, { ref: this.handleRecaptchaRef }));
  };

  return ReCAPTCHA;
}(_react2.default.Component);

exports.default = ReCAPTCHA;


ReCAPTCHA.displayName = "ReCAPTCHA";
ReCAPTCHA.propTypes = {
  sitekey: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  grecaptcha: _propTypes2.default.object,
  theme: _propTypes2.default.oneOf(["dark", "light"]),
  type: _propTypes2.default.oneOf(["image", "audio"]),
  tabindex: _propTypes2.default.number,
  onExpired: _propTypes2.default.func,
  size: _propTypes2.default.oneOf(["compact", "normal", "invisible"]),
  stoken: _propTypes2.default.string,
  badge: _propTypes2.default.oneOf(["bottomright", "bottomleft", "inline"])
};
ReCAPTCHA.defaultProps = {
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright"
};

/***/ }),

/***/ "./node_modules/react-infinite-scroller/dist/InfiniteScroll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfiniteScroll = function (_Component) {
  _inherits(InfiniteScroll, _Component);

  function InfiniteScroll(props) {
    _classCallCheck(this, InfiniteScroll);

    var _this = _possibleConstructorReturn(this, (InfiniteScroll.__proto__ || Object.getPrototypeOf(InfiniteScroll)).call(this, props));

    _this.scrollListener = _this.scrollListener.bind(_this);
    return _this;
  }

  _createClass(InfiniteScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.pageLoaded = this.props.pageStart;
      this.attachScrollListener();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.attachScrollListener();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.detachScrollListener();
    }

    // Set a defaut loader for all your `InfiniteScroll` components

  }, {
    key: 'setDefaultLoader',
    value: function setDefaultLoader(loader) {
      this.defaultLoader = loader;
    }
  }, {
    key: 'detachScrollListener',
    value: function detachScrollListener() {
      var scrollEl = window;
      if (this.props.useWindow === false) {
        scrollEl = this.scrollComponent.parentNode;
      }

      scrollEl.removeEventListener('scroll', this.scrollListener, this.props.useCapture);
      scrollEl.removeEventListener('resize', this.scrollListener, this.props.useCapture);
    }
  }, {
    key: 'attachScrollListener',
    value: function attachScrollListener() {
      if (!this.props.hasMore) {
        return;
      }

      var scrollEl = window;
      if (this.props.useWindow === false) {
        scrollEl = this.scrollComponent.parentNode;
      }

      scrollEl.addEventListener('scroll', this.scrollListener, this.props.useCapture);
      scrollEl.addEventListener('resize', this.scrollListener, this.props.useCapture);

      if (this.props.initialLoad) {
        this.scrollListener();
      }
    }
  }, {
    key: 'scrollListener',
    value: function scrollListener() {
      var el = this.scrollComponent;
      var scrollEl = window;

      var offset = void 0;
      if (this.props.useWindow) {
        var doc = document.documentElement || document.body.parentNode || document.body;
        var scrollTop = scrollEl.pageYOffset !== undefined ? scrollEl.pageYOffset : doc.scrollTop;
        if (this.props.isReverse) {
          offset = scrollTop;
        } else {
          offset = this.calculateTopPosition(el) + (el.offsetHeight - scrollTop - window.innerHeight);
        }
      } else if (this.props.isReverse) {
        offset = el.parentNode.scrollTop;
      } else {
        offset = el.scrollHeight - el.parentNode.scrollTop - el.parentNode.clientHeight;
      }

      if (offset < Number(this.props.threshold)) {
        this.detachScrollListener();
        // Call loadMore after detachScrollListener to allow for non-async loadMore functions
        if (typeof this.props.loadMore === 'function') {
          this.props.loadMore(this.pageLoaded += 1);
        }
      }
    }
  }, {
    key: 'calculateTopPosition',
    value: function calculateTopPosition(el) {
      if (!el) {
        return 0;
      }
      return el.offsetTop + this.calculateTopPosition(el.offsetParent);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          element = _props.element,
          hasMore = _props.hasMore,
          initialLoad = _props.initialLoad,
          isReverse = _props.isReverse,
          loader = _props.loader,
          loadMore = _props.loadMore,
          pageStart = _props.pageStart,
          ref = _props.ref,
          threshold = _props.threshold,
          useCapture = _props.useCapture,
          useWindow = _props.useWindow,
          props = _objectWithoutProperties(_props, ['children', 'element', 'hasMore', 'initialLoad', 'isReverse', 'loader', 'loadMore', 'pageStart', 'ref', 'threshold', 'useCapture', 'useWindow']);

      props.ref = function (node) {
        _this2.scrollComponent = node;
        if (ref) {
          ref(node);
        }
      };

      var childrenArray = [children];
      if (hasMore) {
        if (loader) {
          isReverse ? childrenArray.unshift(loader) : childrenArray.push(loader);
        } else if (this.defaultLoader) {
          isReverse ? childrenArray.unshift(this.defaultLoader) : childrenArray.push(this.defaultLoader);
        }
      }
      return _react2.default.createElement.apply(_react2.default, [element, props].concat(childrenArray));
    }
  }]);

  return InfiniteScroll;
}(_react.Component);

InfiniteScroll.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]).isRequired,
  element: _propTypes2.default.string,
  hasMore: _propTypes2.default.bool,
  initialLoad: _propTypes2.default.bool,
  isReverse: _propTypes2.default.bool,
  loader: _propTypes2.default.object,
  loadMore: _propTypes2.default.func.isRequired,
  pageStart: _propTypes2.default.number,
  ref: _propTypes2.default.func,
  threshold: _propTypes2.default.number,
  useCapture: _propTypes2.default.bool,
  useWindow: _propTypes2.default.bool
};
InfiniteScroll.defaultProps = {
  element: 'div',
  hasMore: false,
  initialLoad: true,
  pageStart: 0,
  ref: null,
  threshold: 250,
  useWindow: true,
  isReverse: false,
  useCapture: false,
  loader: null
};
exports.default = InfiniteScroll;
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/react-infinite-scroller/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/react-infinite-scroller/dist/InfiniteScroll.js")


/***/ }),

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window === 'undefined' ? false : /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent);

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// allow for stepper UI on number types
			if (this.props.type === 'number') {
				newInputWidth += 16;
			}
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

;

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(newValue) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ "./node_modules/react-select/dist/react-select.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Async */
/* unused harmony export AsyncCreatable */
/* unused harmony export Creatable */
/* unused harmony export Value */
/* unused harmony export Option */
/* unused harmony export defaultMenuRenderer */
/* unused harmony export defaultArrowRenderer */
/* unused harmony export defaultClearRenderer */
/* unused harmony export defaultFilterOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_input_autosize__ = __webpack_require__("./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_input_autosize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_input_autosize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);






function arrowRenderer(_ref) {
	var onMouseDown = _ref.onMouseDown;

	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
		className: 'Select-arrow',
		onMouseDown: onMouseDown
	});
}

arrowRenderer.propTypes = {
	onMouseDown: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

function stripDiacritics(str) {
	for (var i = 0; i < map.length; i++) {
		str = str.replace(map[i].letters, map[i].base);
	}
	return str;
}

function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

function filterOptions(options, filterValue, excludeOptions, props) {
	var _this = this;

	if (props.ignoreAccents) {
		filterValue = stripDiacritics(filterValue);
	}

	if (props.ignoreCase) {
		filterValue = filterValue.toLowerCase();
	}

	if (props.trimFilter) {
		filterValue = trim(filterValue);
	}

	if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
		return i[props.valueKey];
	});

	return options.filter(function (option) {
		if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
		if (props.filterOption) return props.filterOption.call(_this, option, filterValue);
		if (!filterValue) return true;
		var valueTest = String(option[props.valueKey]);
		var labelTest = String(option[props.labelKey]);

		if (props.ignoreAccents) {
			if (props.matchProp !== 'label') valueTest = stripDiacritics(valueTest);
			if (props.matchProp !== 'value') labelTest = stripDiacritics(labelTest);
		}

		if (props.ignoreCase) {
			if (props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
			if (props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
		}
		return props.matchPos === 'start' ? props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
	});
}

function menuRenderer(_ref) {
	var focusedOption = _ref.focusedOption,
	    focusOption = _ref.focusOption,
	    inputValue = _ref.inputValue,
	    instancePrefix = _ref.instancePrefix,
	    labelKey = _ref.labelKey,
	    onFocus = _ref.onFocus,
	    onOptionRef = _ref.onOptionRef,
	    onSelect = _ref.onSelect,
	    optionClassName = _ref.optionClassName,
	    optionComponent = _ref.optionComponent,
	    optionRenderer = _ref.optionRenderer,
	    options = _ref.options,
	    removeValue = _ref.removeValue,
	    selectValue = _ref.selectValue,
	    valueArray = _ref.valueArray,
	    valueKey = _ref.valueKey;

	var Option = optionComponent;

	return options.map(function (option, i) {
		var isSelected = valueArray && valueArray.some(function (x) {
			return x[valueKey] == option[valueKey];
		});
		var isFocused = option === focusedOption;
		var optionClass = __WEBPACK_IMPORTED_MODULE_4_classnames___default()(optionClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled
		});

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			Option,
			{
				className: optionClass,
				focusOption: focusOption,
				inputValue: inputValue,
				instancePrefix: instancePrefix,
				isDisabled: option.disabled,
				isFocused: isFocused,
				isSelected: isSelected,
				key: 'option-' + i + '-' + option[valueKey],
				onFocus: onFocus,
				onSelect: onSelect,
				option: option,
				optionIndex: i,
				ref: function ref(_ref2) {
					onOptionRef(_ref2, isFocused);
				},
				removeValue: removeValue,
				selectValue: selectValue
			},
			optionRenderer(option, i, inputValue)
		);
	});
}

function clearRenderer() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
		className: 'Select-clear',
		dangerouslySetInnerHTML: { __html: '&times;' }
	});
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Option = function (_React$Component) {
	inherits(Option, _React$Component);

	function Option(props) {
		classCallCheck(this, Option);

		var _this = possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
		_this.handleMouseMove = _this.handleMouseMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.onFocus = _this.onFocus.bind(_this);
		return _this;
	}

	createClass(Option, [{
		key: 'blockEvent',
		value: function blockEvent(event) {
			event.preventDefault();
			event.stopPropagation();
			if (event.target.tagName !== 'A' || !('href' in event.target)) {
				return;
			}
			if (event.target.target) {
				window.open(event.target.href, event.target.target);
			} else {
				window.location.href = event.target.href;
			}
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onSelect(this.props.option, event);
		}
	}, {
		key: 'handleMouseEnter',
		value: function handleMouseEnter(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleMouseMove',
		value: function handleMouseMove(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'onFocus',
		value: function onFocus(event) {
			if (!this.props.isFocused) {
				this.props.onFocus(this.props.option, event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    option = _props.option,
			    instancePrefix = _props.instancePrefix,
			    optionIndex = _props.optionIndex;

			var className = __WEBPACK_IMPORTED_MODULE_4_classnames___default()(this.props.className, option.className);

			return option.disabled ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: className,
					onMouseDown: this.blockEvent,
					onClick: this.blockEvent },
				this.props.children
			) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: className,
					style: option.style,
					role: 'option',
					'aria-label': option.label,
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseMove: this.handleMouseMove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEnd,
					id: instancePrefix + '-option-' + optionIndex,
					title: option.title },
				this.props.children
			);
		}
	}]);
	return Option;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



Option.propTypes = {
	children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // className (based on mouse position)
	instancePrefix: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired, // unique prefix for the ids (used for aria)
	isDisabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // the option is disabled
	isFocused: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // the option is focused
	isSelected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // the option is selected
	onFocus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // method to handle mouseEnter on option element
	onSelect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // method to handle click on option element
	onUnfocus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // method to handle mouseLeave on option element
	option: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired, // object that is base for that option
	optionIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number // index of the option, used to generate unique ids for aria
};

var Value = function (_React$Component) {
	inherits(Value, _React$Component);

	function Value(props) {
		classCallCheck(this, Value);

		var _this = possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.onRemove = _this.onRemove.bind(_this);
		_this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		return _this;
	}

	createClass(Value, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			if (event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			if (this.props.onClick) {
				event.stopPropagation();
				this.props.onClick(this.props.value, event);
				return;
			}
			if (this.props.value.href) {
				event.stopPropagation();
			}
		}
	}, {
		key: 'onRemove',
		value: function onRemove(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onRemove(this.props.value);
		}
	}, {
		key: 'handleTouchEndRemove',
		value: function handleTouchEndRemove(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.onRemove(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'renderRemoveIcon',
		value: function renderRemoveIcon() {
			if (this.props.disabled || !this.props.onRemove) return;
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'span',
				{ className: 'Select-value-icon',
					'aria-hidden': 'true',
					onMouseDown: this.onRemove,
					onTouchEnd: this.handleTouchEndRemove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove },
				'\xD7'
			);
		}
	}, {
		key: 'renderLabel',
		value: function renderLabel() {
			var className = 'Select-value-label';
			return this.props.onClick || this.props.value.href ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'a',
				{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
				this.props.children
			) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'span',
				{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
				this.props.children
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()('Select-value', this.props.value.className),
					style: this.props.value.style,
					title: this.props.value.title
				},
				this.renderRemoveIcon(),
				this.renderLabel()
			);
		}
	}]);
	return Value;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



Value.propTypes = {
	children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
	disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // disabled prop passed to ReactSelect
	id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // Unique id for the value - used for aria
	onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // method to handle click on value label
	onRemove: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // method to handle removal of the value
	value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired // the option object for this value
};

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/react-select
*/
var stringifyValue = function stringifyValue(value) {
	return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
};

var stringOrNode = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node]);
var stringOrNumber = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]);

var instanceId = 1;

var Select$1 = function (_React$Component) {
	inherits(Select, _React$Component);

	function Select(props) {
		classCallCheck(this, Select);

		var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

		['clearValue', 'focusOption', 'handleInputBlur', 'handleInputChange', 'handleInputFocus', 'handleInputValueChange', 'handleKeyDown', 'handleMenuScroll', 'handleMouseDown', 'handleMouseDownOnArrow', 'handleMouseDownOnMenu', 'handleRequired', 'handleTouchOutside', 'handleTouchMove', 'handleTouchStart', 'handleTouchEnd', 'handleTouchEndClearValue', 'handleValueClick', 'getOptionLabel', 'onOptionRef', 'removeValue', 'selectValue'].forEach(function (fn) {
			return _this[fn] = _this[fn].bind(_this);
		});

		_this.state = {
			inputValue: '',
			isFocused: false,
			isOpen: false,
			isPseudoFocused: false,
			required: false
		};
		return _this;
	}

	createClass(Select, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
			var valueArray = this.getValueArray(this.props.value);

			if (this.props.required) {
				this.setState({
					required: this.handleRequired(valueArray[0], this.props.multi)
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (typeof this.props.autofocus !== 'undefined' && typeof console !== 'undefined') {
				console.warn('Warning: The autofocus prop has changed to autoFocus, support will be removed after react-select@1.0');
			}
			if (this.props.autoFocus || this.props.autofocus) {
				this.focus();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var valueArray = this.getValueArray(nextProps.value, nextProps);

			if (nextProps.required) {
				this.setState({
					required: this.handleRequired(valueArray[0], nextProps.multi)
				});
			} else if (this.props.required) {
				// Used to be required but it's not any more
				this.setState({ required: false });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			// focus to the selected option
			if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
				var focusedOptionNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this.focused);
				var menuNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this.menu);

				var scrollTop = menuNode.scrollTop;
				var scrollBottom = scrollTop + menuNode.offsetHeight;
				var optionTop = focusedOptionNode.offsetTop;
				var optionBottom = optionTop + focusedOptionNode.offsetHeight;

				if (scrollTop > optionTop || scrollBottom < optionBottom) {
					menuNode.scrollTop = focusedOptionNode.offsetTop;
				}

				// We still set hasScrolledToOption to true even if we didn't
				// actually need to scroll, as we've still confirmed that the
				// option is in view.
				this.hasScrolledToOption = true;
			} else if (!this.state.isOpen) {
				this.hasScrolledToOption = false;
			}

			if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
				this._scrollToFocusedOptionOnUpdate = false;
				var focusedDOM = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this.focused);
				var menuDOM = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this.menu);
				var focusedRect = focusedDOM.getBoundingClientRect();
				var menuRect = menuDOM.getBoundingClientRect();
				if (focusedRect.bottom > menuRect.bottom) {
					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
				} else if (focusedRect.top < menuRect.top) {
					menuDOM.scrollTop = focusedDOM.offsetTop;
				}
			}
			if (this.props.scrollMenuIntoView && this.menuContainer) {
				var menuContainerRect = this.menuContainer.getBoundingClientRect();
				if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
					window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
				}
			}
			if (prevProps.disabled !== this.props.disabled) {
				this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
				this.closeMenu();
			}
			if (prevState.isOpen !== this.state.isOpen) {
				this.toggleTouchOutsideEvent(this.state.isOpen);
				var handler = this.state.isOpen ? this.props.onOpen : this.props.onClose;
				handler && handler();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.toggleTouchOutsideEvent(false);
		}
	}, {
		key: 'toggleTouchOutsideEvent',
		value: function toggleTouchOutsideEvent(enabled) {
			if (enabled) {
				if (!document.addEventListener && document.attachEvent) {
					document.attachEvent('ontouchstart', this.handleTouchOutside);
				} else {
					document.addEventListener('touchstart', this.handleTouchOutside);
				}
			} else {
				if (!document.removeEventListener && document.detachEvent) {
					document.detachEvent('ontouchstart', this.handleTouchOutside);
				} else {
					document.removeEventListener('touchstart', this.handleTouchOutside);
				}
			}
		}
	}, {
		key: 'handleTouchOutside',
		value: function handleTouchOutside(event) {
			// handle touch outside on ios to dismiss menu
			if (this.wrapper && !this.wrapper.contains(event.target)) {
				this.closeMenu();
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			if (!this.input) return;
			this.input.focus();
		}
	}, {
		key: 'blurInput',
		value: function blurInput() {
			if (!this.input) return;
			this.input.blur();
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchEndClearValue',
		value: function handleTouchEndClearValue(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Clear the value
			this.clearValue(event);
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (event.target.tagName === 'INPUT') {
				if (!this.state.isFocused) {
					this._openAfterFocus = this.props.openOnClick;
					this.focus();
				} else if (!this.state.isOpen) {
					this.setState({
						isOpen: true,
						isPseudoFocused: false
					});
				}
				return;
			}

			// prevent default event handlers
			event.preventDefault();

			// for the non-searchable select, toggle the menu
			if (!this.props.searchable) {
				// TODO: This code means that if a select is searchable, onClick the options menu will not appear, only on subsequent click will it open.
				this.focus();
				return this.setState({
					isOpen: !this.state.isOpen
				});
			}

			if (this.state.isFocused) {
				// On iOS, we can get into a state where we think the input is focused but it isn't really,
				// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
				// Call focus() again here to be safe.
				this.focus();

				var input = this.input;
				if (typeof input.getInput === 'function') {
					// Get the actual DOM input if the ref is an <AutosizeInput /> component
					input = input.getInput();
				}

				// clears the value so that the cursor will be at the end of input when the component re-renders
				input.value = '';

				// if the input is focused, ensure the menu is open
				this.setState({
					isOpen: true,
					isPseudoFocused: false
				});
			} else {
				// otherwise, focus the input and open the menu
				this._openAfterFocus = this.props.openOnClick;
				this.focus();
			}
		}
	}, {
		key: 'handleMouseDownOnArrow',
		value: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			// If the menu isn't open, let the event bubble to the main handleMouseDown
			if (!this.state.isOpen) {
				this.setState({
					isOpen: true
				});
			}
			// prevent default event handlers
			event.stopPropagation();
			event.preventDefault();
			// close the menu
			if (this.state.isOpen) {
				this.closeMenu();
			}
		}
	}, {
		key: 'handleMouseDownOnMenu',
		value: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();

			this._openAfterFocus = true;
			this.focus();
		}
	}, {
		key: 'closeMenu',
		value: function closeMenu() {
			if (this.props.onCloseResetsInput) {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi,
					inputValue: this.handleInputValueChange('')
				});
			} else {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			}
			this.hasScrolledToOption = false;
		}
	}, {
		key: 'handleInputFocus',
		value: function handleInputFocus(event) {
			if (this.props.disabled) return;
			var isOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
			if (this.props.onFocus) {
				this.props.onFocus(event);
			}
			this.setState({
				isFocused: true,
				isOpen: isOpen
			});
			this._openAfterFocus = false;
		}
	}, {
		key: 'handleInputBlur',
		value: function handleInputBlur(event) {
			// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
			if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
				this.focus();
				return;
			}

			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
			var onBlurredState = {
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false
			};
			if (this.props.onBlurResetsInput) {
				onBlurredState.inputValue = this.handleInputValueChange('');
			}
			this.setState(onBlurredState);
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(event) {
			var newInputValue = event.target.value;

			if (this.state.inputValue !== event.target.value) {
				newInputValue = this.handleInputValueChange(newInputValue);
			}

			this.setState({
				isOpen: true,
				isPseudoFocused: false,
				inputValue: newInputValue
			});
		}
	}, {
		key: 'handleInputValueChange',
		value: function handleInputValueChange(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				// Note: != used deliberately here to catch undefined and null
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			return newValue;
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(event) {
			if (this.props.disabled) return;

			if (typeof this.props.onInputKeyDown === 'function') {
				this.props.onInputKeyDown(event);
				if (event.defaultPrevented) {
					return;
				}
			}

			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
						return;
					}
					event.preventDefault();
					this.selectFocusedOption();
					return;
				case 13:
					// enter
					event.preventDefault();
					event.stopPropagation();
					if (this.state.isOpen) {
						this.selectFocusedOption();
					} else {
						this.focusNextOption();
					}
					return;
					break;
				case 27:
					// escape
					if (this.state.isOpen) {
						this.closeMenu();
						event.stopPropagation();
					} else if (this.props.clearable && this.props.escapeClearsValue) {
						this.clearValue(event);
						event.stopPropagation();
					}
					break;
				case 32:
					// space
					if (this.props.searchable) {
						return;
					}
					event.preventDefault();
					if (!this.state.isOpen) {
						this.focusNextOption();
						return;
					}
					event.stopPropagation();
					this.selectFocusedOption();
					break;
				case 38:
					// up
					this.focusPreviousOption();
					break;
				case 40:
					// down
					this.focusNextOption();
					break;
				case 33:
					// page up
					this.focusPageUpOption();
					break;
				case 34:
					// page down
					this.focusPageDownOption();
					break;
				case 35:
					// end key
					if (event.shiftKey) {
						return;
					}
					this.focusEndOption();
					break;
				case 36:
					// home key
					if (event.shiftKey) {
						return;
					}
					this.focusStartOption();
					break;
				case 46:
					// delete
					if (!this.state.inputValue && this.props.deleteRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				default:
					return;
			}
			event.preventDefault();
		}
	}, {
		key: 'handleValueClick',
		value: function handleValueClick(option, event) {
			if (!this.props.onValueClick) return;
			this.props.onValueClick(option, event);
		}
	}, {
		key: 'handleMenuScroll',
		value: function handleMenuScroll(event) {
			if (!this.props.onMenuScrollToBottom) return;
			var target = event.target;

			if (target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 0) {
				this.props.onMenuScrollToBottom();
			}
		}
	}, {
		key: 'handleRequired',
		value: function handleRequired(value, multi) {
			if (!value) return true;
			return multi ? value.length === 0 : Object.keys(value).length === 0;
		}
	}, {
		key: 'getOptionLabel',
		value: function getOptionLabel(op) {
			return op[this.props.labelKey];
		}

		/**
   * Turns a value into an array from the given options
   * @param	{String|Number|Array}	value		- the value of the select input
   * @param	{Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
   * @returns	{Array}	the value of the select represented in an array
   */

	}, {
		key: 'getValueArray',
		value: function getValueArray(value, nextProps) {
			var _this2 = this;

			/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
			var props = (typeof nextProps === 'undefined' ? 'undefined' : _typeof(nextProps)) === 'object' ? nextProps : this.props;
			if (props.multi) {
				if (typeof value === 'string') {
					value = value.split(props.delimiter);
				}
				if (!Array.isArray(value)) {
					if (value === null || value === undefined) return [];
					value = [value];
				}
				return value.map(function (value) {
					return _this2.expandValue(value, props);
				}).filter(function (i) {
					return i;
				});
			}
			var expandedValue = this.expandValue(value, props);
			return expandedValue ? [expandedValue] : [];
		}

		/**
   * Retrieve a value from the given options and valueKey
   * @param	{String|Number|Array}	value	- the selected value(s)
   * @param	{Object}		props	- the Select component's props (or nextProps)
   */

	}, {
		key: 'expandValue',
		value: function expandValue(value, props) {
			var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
			if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
			var options = props.options,
			    valueKey = props.valueKey;

			if (!options) return;
			for (var i = 0; i < options.length; i++) {
				if (String(options[i][valueKey]) === String(value)) return options[i];
			}
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			var _this3 = this;

			if (this.props.autoBlur) {
				this.blurInput();
			}
			if (this.props.required) {
				var required = this.handleRequired(value, this.props.multi);
				this.setState({ required: required });
			}
			if (this.props.onChange) {
				if (this.props.simpleValue && value) {
					value = this.props.multi ? value.map(function (i) {
						return i[_this3.props.valueKey];
					}).join(this.props.delimiter) : value[this.props.valueKey];
				}
				this.props.onChange(value);
			}
		}
	}, {
		key: 'selectValue',
		value: function selectValue(value) {
			var _this4 = this;

			// NOTE: we actually add/set the value in a callback to make sure the
			// input value is empty to avoid styling issues in Chrome
			if (this.props.closeOnSelect) {
				this.hasScrolledToOption = false;
			}
			if (this.props.multi) {
				var updatedValue = this.props.onSelectResetsInput ? '' : this.state.inputValue;
				this.setState({
					focusedIndex: null,
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect
				}, function () {
					var valueArray = _this4.getValueArray(_this4.props.value);
					if (valueArray.some(function (i) {
						return i[_this4.props.valueKey] === value[_this4.props.valueKey];
					})) {
						_this4.removeValue(value);
					} else {
						_this4.addValue(value);
					}
				});
			} else {
				this.setState({
					inputValue: this.handleInputValueChange(''),
					isOpen: !this.props.closeOnSelect,
					isPseudoFocused: this.state.isFocused
				}, function () {
					_this4.setValue(value);
				});
			}
		}
	}, {
		key: 'addValue',
		value: function addValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			var visibleOptions = this._visibleOptions.filter(function (val) {
				return !val.disabled;
			});
			var lastValueIndex = visibleOptions.indexOf(value);
			this.setValue(valueArray.concat(value));
			if (visibleOptions.length - 1 === lastValueIndex) {
				// the last option was selected; focus the second-last one
				this.focusOption(visibleOptions[lastValueIndex - 1]);
			} else if (visibleOptions.length > lastValueIndex) {
				// focus the option below the selected one
				this.focusOption(visibleOptions[lastValueIndex + 1]);
			}
		}
	}, {
		key: 'popValue',
		value: function popValue() {
			var valueArray = this.getValueArray(this.props.value);
			if (!valueArray.length) return;
			if (valueArray[valueArray.length - 1].clearableValue === false) return;
			this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
		}
	}, {
		key: 'removeValue',
		value: function removeValue(value) {
			var _this5 = this;

			var valueArray = this.getValueArray(this.props.value);
			this.setValue(valueArray.filter(function (i) {
				return i[_this5.props.valueKey] !== value[_this5.props.valueKey];
			}));
			this.focus();
		}
	}, {
		key: 'clearValue',
		value: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.preventDefault();
			this.setValue(this.getResetValue());
			this.setState({
				isOpen: false,
				inputValue: this.handleInputValueChange('')
			}, this.focus);
		}
	}, {
		key: 'getResetValue',
		value: function getResetValue() {
			if (this.props.resetValue !== undefined) {
				return this.props.resetValue;
			} else if (this.props.multi) {
				return [];
			} else {
				return null;
			}
		}
	}, {
		key: 'focusOption',
		value: function focusOption(option) {
			this.setState({
				focusedOption: option
			});
		}
	}, {
		key: 'focusNextOption',
		value: function focusNextOption() {
			this.focusAdjacentOption('next');
		}
	}, {
		key: 'focusPreviousOption',
		value: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		}
	}, {
		key: 'focusPageUpOption',
		value: function focusPageUpOption() {
			this.focusAdjacentOption('page_up');
		}
	}, {
		key: 'focusPageDownOption',
		value: function focusPageDownOption() {
			this.focusAdjacentOption('page_down');
		}
	}, {
		key: 'focusStartOption',
		value: function focusStartOption() {
			this.focusAdjacentOption('start');
		}
	}, {
		key: 'focusEndOption',
		value: function focusEndOption() {
			this.focusAdjacentOption('end');
		}
	}, {
		key: 'focusAdjacentOption',
		value: function focusAdjacentOption(dir) {
			var options = this._visibleOptions.map(function (option, index) {
				return { option: option, index: index };
			}).filter(function (option) {
				return !option.option.disabled;
			});
			this._scrollToFocusedOptionOnUpdate = true;
			if (!this.state.isOpen) {
				this.setState({
					isOpen: true,
					inputValue: '',
					focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null)
				});
				return;
			}
			if (!options.length) return;
			var focusedIndex = -1;
			for (var i = 0; i < options.length; i++) {
				if (this._focusedOption === options[i].option) {
					focusedIndex = i;
					break;
				}
			}
			if (dir === 'next' && focusedIndex !== -1) {
				focusedIndex = (focusedIndex + 1) % options.length;
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedIndex = focusedIndex - 1;
				} else {
					focusedIndex = options.length - 1;
				}
			} else if (dir === 'start') {
				focusedIndex = 0;
			} else if (dir === 'end') {
				focusedIndex = options.length - 1;
			} else if (dir === 'page_up') {
				var potentialIndex = focusedIndex - this.props.pageSize;
				if (potentialIndex < 0) {
					focusedIndex = 0;
				} else {
					focusedIndex = potentialIndex;
				}
			} else if (dir === 'page_down') {
				var potentialIndex = focusedIndex + this.props.pageSize;
				if (potentialIndex > options.length - 1) {
					focusedIndex = options.length - 1;
				} else {
					focusedIndex = potentialIndex;
				}
			}

			if (focusedIndex === -1) {
				focusedIndex = 0;
			}

			this.setState({
				focusedIndex: options[focusedIndex].index,
				focusedOption: options[focusedIndex].option
			});
		}
	}, {
		key: 'getFocusedOption',
		value: function getFocusedOption() {
			return this._focusedOption;
		}
	}, {
		key: 'selectFocusedOption',
		value: function selectFocusedOption() {
			if (this._focusedOption) {
				return this.selectValue(this._focusedOption);
			}
		}
	}, {
		key: 'renderLoading',
		value: function renderLoading() {
			if (!this.props.isLoading) return;
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'span',
				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'Select-loading' })
			);
		}
	}, {
		key: 'renderValue',
		value: function renderValue(valueArray, isOpen) {
			var _this6 = this;

			var renderLabel = this.props.valueRenderer || this.getOptionLabel;
			var ValueComponent = this.props.valueComponent;
			if (!valueArray.length) {
				return !this.state.inputValue ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'Select-placeholder' },
					this.props.placeholder
				) : null;
			}
			var onClick = this.props.onValueClick ? this.handleValueClick : null;
			if (this.props.multi) {
				return valueArray.map(function (value, i) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						ValueComponent,
						{
							id: _this6._instancePrefix + '-value-' + i,
							instancePrefix: _this6._instancePrefix,
							disabled: _this6.props.disabled || value.clearableValue === false,
							key: 'value-' + i + '-' + value[_this6.props.valueKey],
							onClick: onClick,
							onRemove: _this6.removeValue,
							value: value
						},
						renderLabel(value, i),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'span',
							{ className: 'Select-aria-only' },
							'\xA0'
						)
					);
				});
			} else if (!this.state.inputValue) {
				if (isOpen) onClick = null;
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					ValueComponent,
					{
						id: this._instancePrefix + '-value-item',
						disabled: this.props.disabled,
						instancePrefix: this._instancePrefix,
						onClick: onClick,
						value: valueArray[0]
					},
					renderLabel(valueArray[0])
				);
			}
		}
	}, {
		key: 'renderInput',
		value: function renderInput(valueArray, focusedOptionIndex) {
			var _classNames,
			    _this7 = this;

			var className = __WEBPACK_IMPORTED_MODULE_4_classnames___default()('Select-input', this.props.inputProps.className);
			var isOpen = !!this.state.isOpen;

			var ariaOwns = __WEBPACK_IMPORTED_MODULE_4_classnames___default()((_classNames = {}, defineProperty(_classNames, this._instancePrefix + '-list', isOpen), defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));
			var inputProps = _extends({}, this.props.inputProps, {
				role: 'combobox',
				'aria-expanded': '' + isOpen,
				'aria-owns': ariaOwns,
				'aria-haspopup': '' + isOpen,
				'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
				'aria-describedby': this.props['aria-describedby'],
				'aria-labelledby': this.props['aria-labelledby'],
				'aria-label': this.props['aria-label'],
				className: className,
				tabIndex: this.props.tabIndex,
				onBlur: this.handleInputBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				ref: function ref(_ref) {
					return _this7.input = _ref;
				},
				required: this.state.required,
				value: this.state.inputValue
			});

			if (this.props.inputRenderer) {
				return this.props.inputRenderer(inputProps);
			}

			if (this.props.disabled || !this.props.searchable) {
				var _props$inputProps = this.props.inputProps,
				    inputClassName = _props$inputProps.inputClassName,
				    divProps = objectWithoutProperties(_props$inputProps, ['inputClassName']);


				var _ariaOwns = __WEBPACK_IMPORTED_MODULE_4_classnames___default()(defineProperty({}, this._instancePrefix + '-list', isOpen));
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', _extends({}, divProps, {
					role: 'combobox',
					'aria-expanded': isOpen,
					'aria-owns': _ariaOwns,
					'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
					'aria-labelledby': this.props['aria-labelledby'],
					'aria-label': this.props['aria-label'],
					className: className,
					tabIndex: this.props.tabIndex || 0,
					onBlur: this.handleInputBlur,
					onFocus: this.handleInputFocus,
					ref: function ref(_ref2) {
						return _this7.input = _ref2;
					},
					'aria-disabled': '' + !!this.props.disabled,
					style: { border: 0, width: 1, display: 'inline-block' } }));
			}

			if (this.props.autosize) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_input_autosize___default.a, _extends({ id: this.props.id }, inputProps, { minWidth: '5' }));
			}
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: className, key: 'input-wrap' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({ id: this.props.id }, inputProps))
			);
		}
	}, {
		key: 'renderClear',
		value: function renderClear() {
			var valueArray = this.getValueArray(this.props.value);
			if (!this.props.clearable || !valueArray.length || this.props.disabled || this.props.isLoading) return;
			var clear = this.props.clearRenderer();

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'span',
				{ className: 'Select-clear-zone', title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
					'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText,
					onMouseDown: this.clearValue,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEndClearValue
				},
				clear
			);
		}
	}, {
		key: 'renderArrow',
		value: function renderArrow() {
			if (!this.props.arrowRenderer) return;

			var onMouseDown = this.handleMouseDownOnArrow;
			var isOpen = this.state.isOpen;
			var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });

			if (!arrow) {
				return null;
			}

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'span',
				{
					className: 'Select-arrow-zone',
					onMouseDown: onMouseDown
				},
				arrow
			);
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions$$1(excludeOptions) {
			var filterValue = this.state.inputValue;
			var options = this.props.options || [];
			if (this.props.filterOptions) {
				// Maintain backwards compatibility with boolean attribute
				var filterOptions$$1 = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : filterOptions;

				return filterOptions$$1(options, filterValue, excludeOptions, {
					filterOption: this.props.filterOption,
					ignoreAccents: this.props.ignoreAccents,
					ignoreCase: this.props.ignoreCase,
					labelKey: this.props.labelKey,
					matchPos: this.props.matchPos,
					matchProp: this.props.matchProp,
					valueKey: this.props.valueKey,
					trimFilter: this.props.trimFilter
				});
			} else {
				return options;
			}
		}
	}, {
		key: 'onOptionRef',
		value: function onOptionRef(ref, isFocused) {
			if (isFocused) {
				this.focused = ref;
			}
		}
	}, {
		key: 'renderMenu',
		value: function renderMenu(options, valueArray, focusedOption) {
			if (options && options.length) {
				return this.props.menuRenderer({
					focusedOption: focusedOption,
					focusOption: this.focusOption,
					inputValue: this.state.inputValue,
					instancePrefix: this._instancePrefix,
					labelKey: this.props.labelKey,
					onFocus: this.focusOption,
					onSelect: this.selectValue,
					optionClassName: this.props.optionClassName,
					optionComponent: this.props.optionComponent,
					optionRenderer: this.props.optionRenderer || this.getOptionLabel,
					options: options,
					selectValue: this.selectValue,
					removeValue: this.removeValue,
					valueArray: valueArray,
					valueKey: this.props.valueKey,
					onOptionRef: this.onOptionRef
				});
			} else if (this.props.noResultsText) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'Select-noresults' },
					this.props.noResultsText
				);
			} else {
				return null;
			}
		}
	}, {
		key: 'renderHiddenField',
		value: function renderHiddenField(valueArray) {
			var _this8 = this;

			if (!this.props.name) return;
			if (this.props.joinValues) {
				var value = valueArray.map(function (i) {
					return stringifyValue(i[_this8.props.valueKey]);
				}).join(this.props.delimiter);
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
					type: 'hidden',
					ref: function ref(_ref3) {
						return _this8.value = _ref3;
					},
					name: this.props.name,
					value: value,
					disabled: this.props.disabled });
			}
			return valueArray.map(function (item, index) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { key: 'hidden.' + index,
					type: 'hidden',
					ref: 'value' + index,
					name: _this8.props.name,
					value: stringifyValue(item[_this8.props.valueKey]),
					disabled: _this8.props.disabled });
			});
		}
	}, {
		key: 'getFocusableOptionIndex',
		value: function getFocusableOptionIndex(selectedOption) {
			var options = this._visibleOptions;
			if (!options.length) return null;

			var valueKey = this.props.valueKey;
			var focusedOption = this.state.focusedOption || selectedOption;
			if (focusedOption && !focusedOption.disabled) {
				var focusedOptionIndex = -1;
				options.some(function (option, index) {
					var isOptionEqual = option[valueKey] === focusedOption[valueKey];
					if (isOptionEqual) {
						focusedOptionIndex = index;
					}
					return isOptionEqual;
				});
				if (focusedOptionIndex !== -1) {
					return focusedOptionIndex;
				}
			}

			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return i;
			}
			return null;
		}
	}, {
		key: 'renderOuter',
		value: function renderOuter(options, valueArray, focusedOption) {
			var _this9 = this;

			var menu = this.renderMenu(options, valueArray, focusedOption);
			if (!menu) {
				return null;
			}

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ ref: function ref(_ref5) {
						return _this9.menuContainer = _ref5;
					}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ ref: function ref(_ref4) {
							return _this9.menu = _ref4;
						}, role: 'listbox', tabIndex: -1, className: 'Select-menu', id: this._instancePrefix + '-list',
						style: this.props.menuStyle,
						onScroll: this.handleMenuScroll,
						onMouseDown: this.handleMouseDownOnMenu },
					menu
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this10 = this;

			var valueArray = this.getValueArray(this.props.value);
			var options = this._visibleOptions = this.filterOptions(this.props.multi && this.props.removeSelected ? valueArray : null);
			var isOpen = this.state.isOpen;
			if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
			var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);

			var focusedOption = null;
			if (focusedOptionIndex !== null) {
				focusedOption = this._focusedOption = options[focusedOptionIndex];
			} else {
				focusedOption = this._focusedOption = null;
			}
			var className = __WEBPACK_IMPORTED_MODULE_4_classnames___default()('Select', this.props.className, {
				'Select--multi': this.props.multi,
				'Select--single': !this.props.multi,
				'is-clearable': this.props.clearable,
				'is-disabled': this.props.disabled,
				'is-focused': this.state.isFocused,
				'is-loading': this.props.isLoading,
				'is-open': isOpen,
				'is-pseudo-focused': this.state.isPseudoFocused,
				'is-searchable': this.props.searchable,
				'has-value': valueArray.length,
				'Select--rtl': this.props.rtl
			});

			var removeMessage = null;
			if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
				removeMessage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'span',
					{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
					this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
				);
			}

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ ref: function ref(_ref7) {
						return _this10.wrapper = _ref7;
					},
					className: className,
					style: this.props.wrapperStyle },
				this.renderHiddenField(valueArray),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ ref: function ref(_ref6) {
							return _this10.control = _ref6;
						},
						className: 'Select-control',
						style: this.props.style,
						onKeyDown: this.handleKeyDown,
						onMouseDown: this.handleMouseDown,
						onTouchEnd: this.handleTouchEnd,
						onTouchStart: this.handleTouchStart,
						onTouchMove: this.handleTouchMove
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'span',
						{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
						this.renderValue(valueArray, isOpen),
						this.renderInput(valueArray, focusedOptionIndex)
					),
					removeMessage,
					this.renderLoading(),
					this.renderClear(),
					this.renderArrow()
				),
				isOpen ? this.renderOuter(options, valueArray, focusedOption) : null
			);
		}
	}]);
	return Select;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



Select$1.propTypes = {
	'aria-describedby': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // html id(s) of element(s) that should be used to describe this input (for assistive tech)
	'aria-label': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // aria label (for assistive tech)
	'aria-labelledby': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // html id of an element that should be used as the label (for assistive tech)
	arrowRenderer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // create the drop-down caret element
	autoBlur: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // automatically blur the component when an option is selected
	autoFocus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // autofocus the component on mount
	autofocus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // deprecated; use autoFocus instead
	autosize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether to enable autosizing or not
	backspaceRemoves: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether backspace removes an item if there is no text input
	backspaceToRemoveMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // className for the outer element
	clearAllText: stringOrNode, // title for the "clear" control when multi: true
	clearRenderer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // create clearable x element
	clearValueText: stringOrNode, // title for the "clear" control
	clearable: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // should it be possible to reset value
	closeOnSelect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether to close the menu when a value is selected
	deleteRemoves: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether delete removes an item if there is no text input
	delimiter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // delimiter to use to join multiple values for the hidden field value
	disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether the Select is disabled or not
	escapeClearsValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether escape clears the value when the menu is closed
	filterOption: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // method to filter a single option (option, filterString)
	filterOptions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
	id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // html id to set on the input element for accessibility or tests
	ignoreAccents: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether to strip diacritics when filtering
	ignoreCase: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether to perform case-insensitive filtering
	inputProps: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, // custom attributes for the Input
	inputRenderer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // returns a custom input component
	instanceId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // set the components instanceId
	isLoading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether the Select is loading externally or not (such as options being loaded)
	joinValues: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
	labelKey: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // path of the label value in option objects
	matchPos: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // (any|start) match the start or entire string when filtering
	matchProp: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // (any|label|value) which option property to filter on
	menuBuffer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
	menuContainerStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, // optional style to apply to the menu container
	menuRenderer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // renders a custom menu with options
	menuStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, // optional style to apply to the menu
	multi: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // multi-value input
	name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // generates a hidden <input /> tag with this field name for html forms
	noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
	onBlur: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // onBlur handler: function (event) {}
	onBlurResetsInput: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether input is cleared on blur
	onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // onChange handler: function (newValue) {}
	onClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // fires when the menu is closed
	onCloseResetsInput: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether input is cleared when menu is closed through the arrow
	onFocus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // onFocus handler: function (event) {}
	onInputChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // onInputChange handler: function (inputValue) {}
	onInputKeyDown: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // input keyDown handler: function (event) {}
	onMenuScrollToBottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
	onOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // fires when the menu is opened
	onSelectResetsInput: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether input is cleared on select (works only for multiselect)
	onValueClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // onClick handler for value labels: function (value, event) {}
	openOnClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // boolean to control opening the menu when the control is clicked
	openOnFocus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // always open options menu on focus
	optionClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // additional class(es) to apply to the <Option /> elements
	optionComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // option component to render in dropdown
	optionRenderer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // optionRenderer: function (option) {}
	options: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array, // array of options
	pageSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, // number of entries to page when using page up/down keys
	placeholder: stringOrNode, // field placeholder, displayed when there's no value
	removeSelected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether the selected option is removed from the dropdown on multi selects
	required: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // applies HTML5 required attribute when needed
	resetValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any, // value to use when you clear the control
	rtl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // set to true in order to use react-select in right-to-left direction
	scrollMenuIntoView: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
	searchable: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether to enable searching feature or not
	simpleValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
	style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, // optional style to apply to the control
	tabIndex: stringOrNumber, // optional tab index of the control
	tabSelectsValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether to treat tabbing out while focused to be value selection
	trimFilter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // whether to trim whitespace around filter value
	value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any, // initial field value
	valueComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // value component to render
	valueKey: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, // path of the label value in option objects
	valueRenderer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // valueRenderer: function (option) {}
	wrapperStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object // optional style to apply to the component wrapper
};

Select$1.defaultProps = {
	arrowRenderer: arrowRenderer,
	autosize: true,
	backspaceRemoves: true,
	backspaceToRemoveMessage: 'Press backspace to remove {label}',
	clearable: true,
	clearAllText: 'Clear all',
	clearRenderer: clearRenderer,
	clearValueText: 'Clear value',
	closeOnSelect: true,
	deleteRemoves: true,
	delimiter: ',',
	disabled: false,
	escapeClearsValue: true,
	filterOptions: filterOptions,
	ignoreAccents: true,
	ignoreCase: true,
	inputProps: {},
	isLoading: false,
	joinValues: false,
	labelKey: 'label',
	matchPos: 'any',
	matchProp: 'any',
	menuBuffer: 0,
	menuRenderer: menuRenderer,
	multi: false,
	noResultsText: 'No results found',
	onBlurResetsInput: true,
	onSelectResetsInput: true,
	onCloseResetsInput: true,
	openOnClick: true,
	optionComponent: Option,
	pageSize: 5,
	placeholder: 'Select...',
	removeSelected: true,
	required: false,
	rtl: false,
	scrollMenuIntoView: true,
	searchable: true,
	simpleValue: false,
	tabSelectsValue: true,
	trimFilter: true,
	valueComponent: Value,
	valueKey: 'value'
};

var propTypes = {
	autoload: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
	cache: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any, // object to use to cache results; set to null/false to disable caching
	children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
	ignoreAccents: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // strip diacritics when filtering; defaults to true
	ignoreCase: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // perform case-insensitive filtering; defaults to true
	loadOptions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
	loadingPlaceholder: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([// replaces the placeholder while options are loading
	__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node]),
	multi: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, // multi-value input
	noResultsText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([// field noResultsText, displayed when no options come back from the server
	__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node]),
	onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // onChange handler: function (newValue) {}
	onInputChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, // optional for keeping track of what is being typed
	options: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired, // array of options
	placeholder: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
	__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node]),
	searchPromptText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([// label to prompt for search input
	__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node]),
	value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any // initial field value
};

var defaultCache = {};

var defaultProps = {
	autoload: true,
	cache: defaultCache,
	children: defaultChildren,
	ignoreAccents: true,
	ignoreCase: true,
	loadingPlaceholder: 'Loading...',
	options: [],
	searchPromptText: 'Type to search'
};

var Async = function (_Component) {
	inherits(Async, _Component);

	function Async(props, context) {
		classCallCheck(this, Async);

		var _this = possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this, props, context));

		_this._cache = props.cache === defaultCache ? {} : props.cache;

		_this.state = {
			inputValue: '',
			isLoading: false,
			options: props.options
		};

		_this.onInputChange = _this.onInputChange.bind(_this);
		return _this;
	}

	createClass(Async, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var autoload = this.props.autoload;


			if (autoload) {
				this.loadOptions('');
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.options !== this.props.options) {
				this.setState({
					options: nextProps.options
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this._callback = null;
		}
	}, {
		key: 'loadOptions',
		value: function loadOptions(inputValue) {
			var _this2 = this;

			var loadOptions = this.props.loadOptions;

			var cache = this._cache;

			if (cache && Object.prototype.hasOwnProperty.call(cache, inputValue)) {
				this._callback = null;

				this.setState({
					isLoading: false,
					options: cache[inputValue]
				});

				return;
			}

			var callback = function callback(error, data) {
				var options = data && data.options || [];

				if (cache) {
					cache[inputValue] = options;
				}

				if (callback === _this2._callback) {
					_this2._callback = null;

					_this2.setState({
						isLoading: false,
						options: options
					});
				}
			};

			// Ignore all but the most recent request
			this._callback = callback;

			var promise = loadOptions(inputValue, callback);
			if (promise) {
				promise.then(function (data) {
					return callback(null, data);
				}, function (error) {
					return callback(error);
				});
			}

			if (this._callback && !this.state.isLoading) {
				this.setState({
					isLoading: true
				});
			}
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(inputValue) {
			var _props = this.props,
			    ignoreAccents = _props.ignoreAccents,
			    ignoreCase = _props.ignoreCase,
			    onInputChange = _props.onInputChange;

			var newInputValue = inputValue;

			if (onInputChange) {
				var value = onInputChange(newInputValue);
				// Note: != used deliberately here to catch undefined and null
				if (value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
					newInputValue = '' + value;
				}
			}

			var transformedInputValue = newInputValue;

			if (ignoreAccents) {
				transformedInputValue = stripDiacritics(transformedInputValue);
			}

			if (ignoreCase) {
				transformedInputValue = transformedInputValue.toLowerCase();
			}

			this.setState({ inputValue: newInputValue });
			this.loadOptions(transformedInputValue);

			// Return new input value, but without applying toLowerCase() to avoid modifying the user's view case of the input while typing.
			return newInputValue;
		}
	}, {
		key: 'noResultsText',
		value: function noResultsText() {
			var _props2 = this.props,
			    loadingPlaceholder = _props2.loadingPlaceholder,
			    noResultsText = _props2.noResultsText,
			    searchPromptText = _props2.searchPromptText;
			var _state = this.state,
			    inputValue = _state.inputValue,
			    isLoading = _state.isLoading;


			if (isLoading) {
				return loadingPlaceholder;
			}
			if (inputValue && noResultsText) {
				return noResultsText;
			}
			return searchPromptText;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props3 = this.props,
			    children = _props3.children,
			    loadingPlaceholder = _props3.loadingPlaceholder,
			    multi = _props3.multi,
			    onChange = _props3.onChange,
			    placeholder = _props3.placeholder;
			var _state2 = this.state,
			    isLoading = _state2.isLoading,
			    options = _state2.options;


			var props = {
				noResultsText: this.noResultsText(),
				placeholder: isLoading ? loadingPlaceholder : placeholder,
				options: isLoading && loadingPlaceholder ? [] : options,
				ref: function ref(_ref) {
					return _this3.select = _ref;
				}
			};

			return children(_extends({}, this.props, props, {
				isLoading: isLoading,
				onInputChange: this.onInputChange
			}));
		}
	}]);
	return Async;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Async.propTypes = propTypes;
Async.defaultProps = defaultProps;

function defaultChildren(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Select$1, props);
}

var CreatableSelect = function (_React$Component) {
	inherits(CreatableSelect, _React$Component);

	function CreatableSelect(props, context) {
		classCallCheck(this, CreatableSelect);

		var _this = possibleConstructorReturn(this, (CreatableSelect.__proto__ || Object.getPrototypeOf(CreatableSelect)).call(this, props, context));

		_this.filterOptions = _this.filterOptions.bind(_this);
		_this.menuRenderer = _this.menuRenderer.bind(_this);
		_this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
		_this.onInputChange = _this.onInputChange.bind(_this);
		_this.onOptionSelect = _this.onOptionSelect.bind(_this);
		return _this;
	}

	createClass(CreatableSelect, [{
		key: 'createNewOption',
		value: function createNewOption() {
			var _props = this.props,
			    isValidNewOption = _props.isValidNewOption,
			    newOptionCreator = _props.newOptionCreator,
			    onNewOptionClick = _props.onNewOptionClick,
			    _props$options = _props.options,
			    options = _props$options === undefined ? [] : _props$options;


			if (isValidNewOption({ label: this.inputValue })) {
				var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
				var _isOptionUnique = this.isOptionUnique({ option: option });

				// Don't add the same option twice.
				if (_isOptionUnique) {
					if (onNewOptionClick) {
						onNewOptionClick(option);
					} else {
						options.unshift(option);

						this.select.selectValue(option);
					}
				}
			}
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions$$1() {
			var _props2 = this.props,
			    filterOptions$$1 = _props2.filterOptions,
			    isValidNewOption = _props2.isValidNewOption,
			    promptTextCreator = _props2.promptTextCreator;

			// TRICKY Check currently selected options as well.
			// Don't display a create-prompt for a value that's selected.
			// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.

			var excludeOptions = (arguments.length <= 2 ? undefined : arguments[2]) || [];

			var filteredOptions = filterOptions$$1.apply(undefined, arguments) || [];

			if (isValidNewOption({ label: this.inputValue })) {
				var _newOptionCreator = this.props.newOptionCreator;


				var option = _newOptionCreator({
					label: this.inputValue,
					labelKey: this.labelKey,
					valueKey: this.valueKey
				});

				// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
				// For multi-selects, this would remove it from the filtered list.
				var _isOptionUnique2 = this.isOptionUnique({
					option: option,
					options: excludeOptions.concat(filteredOptions)
				});

				if (_isOptionUnique2) {
					var prompt = promptTextCreator(this.inputValue);

					this._createPlaceholderOption = _newOptionCreator({
						label: prompt,
						labelKey: this.labelKey,
						valueKey: this.valueKey
					});

					filteredOptions.unshift(this._createPlaceholderOption);
				}
			}

			return filteredOptions;
		}
	}, {
		key: 'isOptionUnique',
		value: function isOptionUnique(_ref) {
			var option = _ref.option,
			    options = _ref.options;
			var isOptionUnique = this.props.isOptionUnique;


			options = options || this.props.options;

			return isOptionUnique({
				labelKey: this.labelKey,
				option: option,
				options: options,
				valueKey: this.valueKey
			});
		}
	}, {
		key: 'menuRenderer',
		value: function menuRenderer$$1(params) {
			var menuRenderer$$1 = this.props.menuRenderer;


			return menuRenderer$$1(_extends({}, params, {
				onSelect: this.onOptionSelect,
				selectValue: this.onOptionSelect
			}));
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(input) {
			var onInputChange = this.props.onInputChange;

			// This value may be needed in between Select mounts (when this.select is null)

			this.inputValue = input;

			if (onInputChange) {
				this.inputValue = onInputChange(input);
			}

			return this.inputValue;
		}
	}, {
		key: 'onInputKeyDown',
		value: function onInputKeyDown(event) {
			var _props3 = this.props,
			    shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption,
			    onInputKeyDown = _props3.onInputKeyDown;

			var focusedOption = this.select.getFocusedOption();

			if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption({ keyCode: event.keyCode })) {
				this.createNewOption();

				// Prevent decorated Select from doing anything additional with this keyDown event
				event.preventDefault();
			} else if (onInputKeyDown) {
				onInputKeyDown(event);
			}
		}
	}, {
		key: 'onOptionSelect',
		value: function onOptionSelect(option, event) {
			if (option === this._createPlaceholderOption) {
				this.createNewOption();
			} else {
				this.select.selectValue(option);
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props4 = this.props,
			    newOptionCreator = _props4.newOptionCreator,
			    shouldKeyDownEventCreateNewOption = _props4.shouldKeyDownEventCreateNewOption,
			    refProp = _props4.ref,
			    restProps = objectWithoutProperties(_props4, ['newOptionCreator', 'shouldKeyDownEventCreateNewOption', 'ref']);
			var children = this.props.children;

			// We can't use destructuring default values to set the children,
			// because it won't apply work if `children` is null. A falsy check is
			// more reliable in real world use-cases.

			if (!children) {
				children = defaultChildren$2;
			}

			var props = _extends({}, restProps, {
				allowCreate: true,
				filterOptions: this.filterOptions,
				menuRenderer: this.menuRenderer,
				onInputChange: this.onInputChange,
				onInputKeyDown: this.onInputKeyDown,
				ref: function ref(_ref2) {
					_this2.select = _ref2;

					// These values may be needed in between Select mounts (when this.select is null)
					if (_ref2) {
						_this2.labelKey = _ref2.props.labelKey;
						_this2.valueKey = _ref2.props.valueKey;
					}
					if (refProp) {
						refProp(_ref2);
					}
				}
			});

			return children(props);
		}
	}]);
	return CreatableSelect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



function defaultChildren$2(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Select$1, props);
}

function isOptionUnique(_ref3) {
	var option = _ref3.option,
	    options = _ref3.options,
	    labelKey = _ref3.labelKey,
	    valueKey = _ref3.valueKey;

	return options.filter(function (existingOption) {
		return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
	}).length === 0;
}

function isValidNewOption(_ref4) {
	var label = _ref4.label;

	return !!label;
}

function newOptionCreator(_ref5) {
	var label = _ref5.label,
	    labelKey = _ref5.labelKey,
	    valueKey = _ref5.valueKey;

	var option = {};
	option[valueKey] = label;
	option[labelKey] = label;
	option.className = 'Select-create-option-placeholder';
	return option;
}

function promptTextCreator(label) {
	return 'Create option "' + label + '"';
}

function shouldKeyDownEventCreateNewOption(_ref6) {
	var keyCode = _ref6.keyCode;

	switch (keyCode) {
		case 9: // TAB
		case 13: // ENTER
		case 188:
			// COMMA
			return true;
		default:
			return false;
	}
}

// Default prop methods
CreatableSelect.isOptionUnique = isOptionUnique;
CreatableSelect.isValidNewOption = isValidNewOption;
CreatableSelect.newOptionCreator = newOptionCreator;
CreatableSelect.promptTextCreator = promptTextCreator;
CreatableSelect.shouldKeyDownEventCreateNewOption = shouldKeyDownEventCreateNewOption;

CreatableSelect.defaultProps = {
	filterOptions: filterOptions,
	isOptionUnique: isOptionUnique,
	isValidNewOption: isValidNewOption,
	menuRenderer: menuRenderer,
	newOptionCreator: newOptionCreator,
	promptTextCreator: promptTextCreator,
	shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
};

CreatableSelect.propTypes = {
	// Child function responsible for creating the inner Select component
	// This component can be used to compose HOCs (eg Creatable and Async)
	// (props: Object): PropTypes.element
	children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

	// See Select.propTypes.filterOptions
	filterOptions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,

	// Searches for any matching option within the set of options.
	// This function prevents duplicate options from being created.
	// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
	isOptionUnique: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

	// Determines if the current input text represents a valid option.
	// ({ label: string }): boolean
	isValidNewOption: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

	// See Select.propTypes.menuRenderer
	menuRenderer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,

	// Factory to create new option.
	// ({ label: string, labelKey: string, valueKey: string }): Object
	newOptionCreator: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

	// input change handler: function (inputValue) {}
	onInputChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

	// input keyDown handler: function (event) {}
	onInputKeyDown: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

	// new option click handler: function (option) {}
	onNewOptionClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

	// See Select.propTypes.options
	options: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,

	// Creates prompt/placeholder option text.
	// (filterText: string): string
	promptTextCreator: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

	ref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

	// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
	shouldKeyDownEventCreateNewOption: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

var AsyncCreatableSelect = function (_React$Component) {
	inherits(AsyncCreatableSelect, _React$Component);

	function AsyncCreatableSelect() {
		classCallCheck(this, AsyncCreatableSelect);
		return possibleConstructorReturn(this, (AsyncCreatableSelect.__proto__ || Object.getPrototypeOf(AsyncCreatableSelect)).apply(this, arguments));
	}

	createClass(AsyncCreatableSelect, [{
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				Async,
				this.props,
				function (_ref) {
					var ref = _ref.ref,
					    asyncProps = objectWithoutProperties(_ref, ['ref']);

					var asyncRef = ref;
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						CreatableSelect,
						asyncProps,
						function (_ref2) {
							var ref = _ref2.ref,
							    creatableProps = objectWithoutProperties(_ref2, ['ref']);

							var creatableRef = ref;
							return _this2.props.children(_extends({}, creatableProps, {
								ref: function ref(select) {
									creatableRef(select);
									asyncRef(select);
									_this2.select = select;
								}
							}));
						}
					);
				}
			);
		}
	}]);
	return AsyncCreatableSelect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



function defaultChildren$1(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Select$1, props);
}

AsyncCreatableSelect.propTypes = {
	children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
};

AsyncCreatableSelect.defaultProps = {
	children: defaultChildren$1
};

Select$1.Async = Async;
Select$1.AsyncCreatable = AsyncCreatableSelect;
Select$1.Creatable = CreatableSelect;
Select$1.Value = Value;
Select$1.Option = Option;


/* harmony default export */ __webpack_exports__["a"] = (Select$1);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/react-select/dist/react-select.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/react-select/dist/react-select.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js!./node_modules/react-select/dist/react-select.css", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/react-select/dist/react-select.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/routes/Database/Network/Network.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_routes_Database_components__ = __webpack_require__("./src/routes/Database/components/index.js");










var Network =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits___default()(Network, _Component);

  function Network(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Network);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, (Network.__proto__ || Object.getPrototypeOf(Network)).call(this, props));
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "componentWillUnmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.initializeState();
      }
    });
    _this.state = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Network, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          filters = _props.filters,
          updateFilter = _props.updateFilter,
          resetAllFilters = _props.resetAllFilters,
          view = _props.view,
          changeView = _props.changeView,
          updateData = _props.updateData,
          currentData = _props.currentData,
          initializeData = _props.initializeData;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_routes_Database_components__["a" /* DataLayout */], {
        resetContent: this.resetContent,
        sortByOptions: ['networks'],
        route: "networks",
        updateFilter: updateFilter,
        updateData: updateData,
        currentData: currentData,
        initializeData: initializeData,
        filters: filters,
        resetAllFilters: resetAllFilters,
        view: view,
        changeView: changeView
      });
    }
  }]);

  return Network;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Network.propTypes = {
  filters: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired,
  updateFilter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  resetAllFilters: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  view: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  changeView: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  currentData: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array.isRequired,
  updateData: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  initializeData: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  initializeState: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Network);

/***/ }),

/***/ "./src/routes/Database/Tools/Tools.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_routes_Database_components__ = __webpack_require__("./src/routes/Database/components/index.js");










var Tools =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits___default()(Tools, _Component);

  function Tools(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Tools);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, (Tools.__proto__ || Object.getPrototypeOf(Tools)).call(this, props));
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "componentWillUnmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.initializeState();
      }
    });
    _this.state = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Tools, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          filters = _props.filters,
          updateFilter = _props.updateFilter,
          resetAllFilters = _props.resetAllFilters,
          view = _props.view,
          changeView = _props.changeView,
          updateData = _props.updateData,
          currentData = _props.currentData,
          initializeData = _props.initializeData;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_routes_Database_components__["a" /* DataLayout */], {
        resetContent: this.resetContent,
        sortByOptions: ['companies', 'assets'],
        route: "assets",
        updateFilter: updateFilter,
        updateData: updateData,
        currentData: currentData,
        initializeData: initializeData,
        filters: filters,
        resetAllFilters: resetAllFilters,
        view: view,
        changeView: changeView
      });
    }
  }]);

  return Tools;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Tools.propTypes = {
  filters: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired,
  updateFilter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  resetAllFilters: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  view: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  changeView: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  currentData: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array.isRequired,
  updateData: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  initializeData: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  initializeState: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Tools);

/***/ }),

/***/ "./src/routes/Database/VideoGames/VideoGames.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_routes_Database_components__ = __webpack_require__("./src/routes/Database/components/index.js");










var VideoGames =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits___default()(VideoGames, _Component);

  function VideoGames(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, VideoGames);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, (VideoGames.__proto__ || Object.getPrototypeOf(VideoGames)).call(this, props));
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "componentWillUnmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.initializeState();
      }
    });
    _this.state = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(VideoGames, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          filters = _props.filters,
          updateFilter = _props.updateFilter,
          resetAllFilters = _props.resetAllFilters,
          view = _props.view,
          changeView = _props.changeView,
          updateData = _props.updateData,
          currentData = _props.currentData,
          initializeData = _props.initializeData;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_routes_Database_components__["a" /* DataLayout */], {
        resetContent: this.resetContent,
        sortByOptions: ['companies', 'games'],
        route: "videogames",
        updateFilter: updateFilter,
        updateData: updateData,
        currentData: currentData,
        initializeData: initializeData,
        filters: filters,
        resetAllFilters: resetAllFilters,
        view: view,
        changeView: changeView
      });
    }
  }]);

  return VideoGames;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

VideoGames.propTypes = {
  filters: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired,
  updateFilter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  resetAllFilters: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  view: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  changeView: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  currentData: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array.isRequired,
  updateData: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  initializeData: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  initializeState: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (VideoGames);

/***/ }),

/***/ "./src/routes/Database/components/data-layout/components/cards/cards.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_utils__ = __webpack_require__("./src/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_static_icons__ = __webpack_require__("./src/static/icons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components__ = __webpack_require__("./src/routes/Database/components/data-layout/components/cards/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style__ = __webpack_require__("./src/routes/Database/components/data-layout/components/cards/style.js");















var Cards =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits___default()(Cards, _Component);

  function Cards(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Cards);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, (Cards.__proto__ || Object.getPrototypeOf(Cards)).call(this, props));
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "handleInfoButton", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, index, selectedItem) {
        _this.setState({
          openPopover: true,
          anchorEl: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_react_dom__["findDOMNode"])(_this.button[index]),
          selectedItem: selectedItem
        });
      }
    });
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "button", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "closePopover", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          openPopover: false
        });
      }
    });
    _this.state = {
      openPopover: false,
      anchorEl: null,
      selectedItem: {}
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Cards, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          view = _props.view,
          content = _props.content,
          filters = _props.filters;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_13__style__["a" /* classes */].cardsContainer
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui__["p" /* Popover */], {
        open: this.state.openPopover,
        anchorEl: this.state.anchorEl,
        onRequestClose: function onRequestClose() {
          return _this2.closePopover();
        },
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        transformOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components__["a" /* Form */], {
        selectedItem: this.state.selectedItem,
        closePopover: this.closePopover
      })), content === null || content === void 0 ? void 0 : content.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
          className: view === 'list' ? __WEBPACK_IMPORTED_MODULE_13__style__["a" /* classes */].btnandcardList : __WEBPACK_IMPORTED_MODULE_13__style__["a" /* classes */].btnandcardGrid
        }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui__["h" /* Button */], {
          className: __WEBPACK_IMPORTED_MODULE_13__style__["a" /* classes */].info,
          onClick: function onClick(event) {
            __WEBPACK_IMPORTED_MODULE_9_utils__["a" /* analytics */].logEvent({
              category: 'Contact',
              action: 'Card form button',
              label: item.name
            });

            _this2.handleInfoButton(event, index, item);
          },
          ref: function ref(node) {
            _this2.button[index] = node;
          }
        }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_static_icons__["s" /* Info */], null)), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components__["b" /* CardFront */], {
          view: view,
          title: item.name,
          description: item.description,
          image: item.image,
          hasImage: true,
          links1: item.links1,
          links2: item.links2,
          content: item.content,
          footer: item.other,
          tags: item.displayedtags
        }));
      }));
    }
  }]);

  return Cards;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Cards.propTypes = {
  filters: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired,
  updateFilter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  resetAllFilters: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  view: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  changeView: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  currentData: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array.isRequired,
  updateData: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Cards);

/***/ }),

/***/ "./src/routes/Database/components/data-layout/components/cards/components/card-front.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_utils_helpers__ = __webpack_require__("./src/utils/helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style__ = __webpack_require__("./src/routes/Database/components/data-layout/components/cards/components/style.js");
var _this = this;







var CardFront = function CardFront() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props,
      title = _ref.title,
      description = _ref.description,
      image = _ref.image,
      links1 = _ref.links1,
      links2 = _ref.links2,
      content = _ref.content,
      footer = _ref.footer,
      tags = _ref.tags,
      view = _ref.view,
      _ref$hasImage = _ref.hasImage,
      hasImage = _ref$hasImage === void 0 ? true : _ref$hasImage;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["a" /* Paper */], {
    className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].cardContainer
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].header
  }, view === 'grid' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].logoGrid
  }, hasImage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].iconGrid,
    style: {
      backgroundImage: "url(".concat(image || '../missing.png', ")")
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].title
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["q" /* Typography */], {
    type: "title",
    component: "h4"
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["q" /* Typography */], {
    type: "caption",
    style: {
      marginTop: '5px'
    }
  }, description))) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].logo
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].title
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["q" /* Typography */], {
    type: "title",
    component: "h4",
    style: {
      textAlign: 'left'
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["q" /* Typography */], {
    type: "caption",
    style: {
      marginTop: '5px'
    }
  }, description)), hasImage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].icon,
    style: {
      backgroundImage: "url(".concat(image || '../missing.png', ")")
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: view === 'list' ? __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].socialList : __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].socialGrid
  }, links1 === null || links1 === void 0 ? void 0 : links1.map(function (link) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["h" /* Button */], {
      target: "_blank",
      disabled: !link.link,
      href: link.link,
      dense: true,
      color: "primary"
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_utils_helpers__["getMediaIcon"])(link.type));
  }), !_.isEmpty(links1) && !_.isEmpty(links2) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].line
  }), links2 === null || links2 === void 0 ? void 0 : links2.map(function (link) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["h" /* Button */], {
      target: "_blank",
      disabled: !link.link,
      href: link.link,
      dense: true,
      color: "primary"
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_utils_helpers__["getMediaIcon"])(link.type));
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: view === 'list' ? __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].contentList : __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].contentGrid
  }, content === null || content === void 0 ? void 0 : content.map(function (item, index) {
    return item && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, index !== 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].dot
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["h" /* Button */], {
      className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].itemButton,
      style: {
        color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_utils_helpers__["getColorCode"])(item.status)
      },
      target: "_blank",
      href: item.link,
      disabled: !item.link,
      dense: true
    }, item.name));
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].footer
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].tags
  }, tags === null || tags === void 0 ? void 0 : tags.map(function (t) {
    return t !== 'null' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["r" /* Chip */], {
      className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].tag,
      label: t
    });
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].otherInfo
  }, footer === null || footer === void 0 ? void 0 : footer.map(function (f) {
    return f !== null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["q" /* Typography */], {
      type: "body2",
      component: "h2",
      style: {
        marginRight: '10px',
        marginLeft: '15px'
      }
    }, f);
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (CardFront);

/***/ }),

/***/ "./src/routes/Database/components/data-layout/components/cards/components/form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_utils_validations__ = __webpack_require__("./src/utils/validations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_commons_components__ = __webpack_require__("./src/commons/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_google_recaptcha__ = __webpack_require__("./node_modules/react-google-recaptcha/lib/recaptcha-wrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_google_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_google_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_icons__ = __webpack_require__("./node_modules/material-ui-icons/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style__ = __webpack_require__("./src/routes/Database/components/data-layout/components/cards/components/style.js");
var _this = this;












var Form = function Form() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props,
      isLoading = _ref.isLoading,
      success = _ref.success,
      error = _ref.error,
      formItem = _ref.formItem,
      handleChange = _ref.handleChange,
      sendMail = _ref.sendMail,
      closePopover = _ref.closePopover,
      selectedItem = _ref.selectedItem;

  if (success) {
    setTimeout(function () {
      closePopover();
    }, 3000);
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_commons_components__["a" /* StatusCover */], {
    isLoading: isLoading,
    success: success,
    error: error
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_icons__["m" /* Close */], {
    style: __WEBPACK_IMPORTED_MODULE_9__style__["b" /* styles */].closeIcon,
    onClick: closePopover
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_9__style__["a" /* classes */].infoContainer
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui__["q" /* Typography */], {
    type: "title",
    component: "h4"
  }, 'Wrong or missing info on this card? Use the form below to send me an email.'), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui__["j" /* TextField */], {
    id: "name",
    name: "name",
    style: __WEBPACK_IMPORTED_MODULE_9__style__["b" /* styles */].textField,
    value: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.name,
    disabled: true,
    margin: "normal"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui__["j" /* TextField */], {
    id: "mail",
    label: "Your email",
    style: __WEBPACK_IMPORTED_MODULE_9__style__["b" /* styles */].textField,
    labelClassName: __WEBPACK_IMPORTED_MODULE_9__style__["a" /* classes */].formLabel,
    name: "mail",
    required: true,
    type: "e-mail",
    error: formItem.mail && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_utils_validations__["a" /* validEmail */])(formItem.mail),
    value: formItem.mail,
    onChange: handleChange(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.name, 'mail'),
    margin: "normal",
    InputLabelProps: {
      shrink: true
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui__["j" /* TextField */], {
    required: true,
    className: __WEBPACK_IMPORTED_MODULE_9__style__["a" /* classes */].multiline,
    style: __WEBPACK_IMPORTED_MODULE_9__style__["b" /* styles */].textField,
    labelClassName: __WEBPACK_IMPORTED_MODULE_9__style__["a" /* classes */].formLabel,
    name: "comment",
    id: "multiline-flexible",
    label: "Fill in anything you wish to add or correct.",
    InputLabelProps: {
      shrink: true
    },
    multiline: true,
    rowsMax: "10",
    rows: "5",
    value: formItem.comment,
    onChange: handleChange(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.name, 'comment'),
    margin: "normal"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_google_recaptcha___default.a, {
    sitekey: "6LejpjUUAAAAAJ2v82XR4TQ6fV3gJOASXEYInUUW",
    onChange: function onChange(response) {
      return handleChange(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.name, 'verification')({
        target: {
          value: response
        }
      });
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui__["h" /* Button */], {
    style: __WEBPACK_IMPORTED_MODULE_9__style__["b" /* styles */].submitBtn,
    raised: true,
    onClick: function onClick() {
      sendMail();
      window.grecaptcha.reset();
    },
    disabled: !formItem.comment || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_utils_validations__["a" /* validEmail */])(formItem.mail) || !formItem.verification
  }, "Send!")));
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["compose"])(__WEBPACK_IMPORTED_MODULE_6_commons_components__["b" /* withSendForm */])(Form));

/***/ }),

/***/ "./src/routes/Database/components/data-layout/components/cards/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form__ = __webpack_require__("./src/routes/Database/components/data-layout/components/cards/components/form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_front__ = __webpack_require__("./src/routes/Database/components/data-layout/components/cards/components/card-front.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__form__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__card_front__["a"]; });




/***/ }),

/***/ "./src/routes/Database/components/data-layout/components/cards/components/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styles__ = __webpack_require__("./src/styles/index.js");

var styles = {
  info: {
    position: 'relative',
    top: '20px',
    minWidth: '40px !important',
    padding: '0 !important',
    display: 'flex',
    alignSelf: 'flex-start'
  },
  btnandcardGrid: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '375px',
    width: '100%',
    margin: '0px 10px'
  },
  btnandcardList: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: '0px 10px',
    maxWidth: '1000px'
  },
  cardContainer: {
    width: '100%',
    padding: '10px',
    backgroundColor: "".concat(__WEBPACK_IMPORTED_MODULE_0_styles__["a" /* theme */].palette.lighterGrey, " !important"),
    alignItems: 'flex-end'
  },
  header: {
    display: 'flex',
    flexDirection: 'column'
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(93,93,93,.06)',
    padding: '5px 5px 5px 10px',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  itemButton: {
    textAlign: 'left'
  },
  dot: {
    height: '5px',
    width: '5px',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_0_styles__["a" /* theme */].palette.darkerGrey,
    borderRadius: '50%',
    display: 'inline-block',
    marginBottom: '2px'
  },
  logoGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(93,93,93,.06)',
    padding: '10px',
    flexWrap: 'wrap'
  },
  otherInfo: {
    display: 'flex',
    marginTop: '2px'
  },
  socialGrid: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  socialList: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap'
  },
  contentGrid: {
    flexWrap: 'wrap',
    minHeight: '24px',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: 'rgba(93,93,93,.06)'
  },
  contentList: {
    flexWrap: 'wrap',
    minHeight: '24px',
    height: 'auto',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'rgba(93,93,93,.06)'
  },
  line: {
    border: '1px solid rgba(0,0,0,.1)',
    height: '30px',
    margin: '5px 0px'
  },
  title: {
    display: 'flex',
    flexDirection: 'column'
  },
  icon: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100%',
    width: '160px',
    height: '76px'
  },
  iconGrid: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    width: '100%',
    height: '150px',
    marginBottom: '10px'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5px',
    flexWrap: 'wrap'
  },
  tags: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  tag: {
    height: '24px !important',
    marginLeft: '10px',
    marginTop: '5px'
  },
  // form 
  infoContainer: {
    display: 'flex',
    padding: '32px',
    flexDirection: 'column',
    fontSize: '22px',
    width: '100%',
    maxWidth: '600px'
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    cursor: 'pointer',
    margin: '8px'
  },
  infoForm: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'left',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px'
  },
  formLabel: {
    fontSize: '18px !important'
  },
  multiline: {
    '& > div': {
      marginTop: '33px !important',
      backgroundColor: __WEBPACK_IMPORTED_MODULE_0_styles__["a" /* theme */].palette.lightestGrey
    }
  },
  textField: {
    width: '100%'
  },
  statusIcon: {
    width: '50px',
    height: '50px'
  },
  success: {
    backgroundColor: __WEBPACK_IMPORTED_MODULE_0_styles__["a" /* theme */].palette.successColor
  },
  error: {
    backgroundColor: __WEBPACK_IMPORTED_MODULE_0_styles__["a" /* theme */].palette.errorColor
  },
  popupStatusForm: {
    position: 'absolute',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: '9',
    opacity: '0.8',
    height: '100%',
    top: '0',
    left: '0',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_0_styles__["a" /* theme */].palette.white
  },
  submitBtn: {
    width: '50px',
    margin: '20px',
    alignSelf: 'flex-end'
  }
};

var _jss$createStyleSheet = __WEBPACK_IMPORTED_MODULE_0_styles__["b" /* jss */].createStyleSheet(styles).attach(),
    classes = _jss$createStyleSheet.classes;



/***/ }),

/***/ "./src/routes/Database/components/data-layout/components/cards/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styles__ = __webpack_require__("./src/styles/index.js");

var styles = {
  info: {
    position: 'relative',
    top: '20px',
    minWidth: '40px !important',
    padding: '0 !important',
    display: 'flex',
    alignSelf: 'flex-start'
  },
  btnandcardGrid: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '375px',
    width: '100%',
    margin: '0px 10px'
  },
  btnandcardList: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: '0px 10px',
    maxWidth: '1000px'
  },
  cardContainer: {
    width: '100%',
    padding: '10px',
    backgroundColor: "".concat(__WEBPACK_IMPORTED_MODULE_0_styles__["a" /* theme */].palette.lighterGrey, " !important"),
    alignItems: 'flex-end'
  },
  header: {
    display: 'flex',
    flexDirection: 'column'
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(93,93,93,.06)',
    padding: '5px 5px 5px 10px',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  itemButton: {
    textAlign: 'left'
  },
  dot: {
    height: '5px',
    width: '5px',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_0_styles__["a" /* theme */].palette.darkerGrey,
    borderRadius: '50%',
    display: 'inline-block',
    marginBottom: '2px'
  },
  logoGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(93,93,93,.06)',
    padding: '10px',
    flexWrap: 'wrap'
  },
  otherInfo: {
    display: 'flex',
    marginTop: '2px'
  },
  socialGrid: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  socialList: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap'
  },
  contentGrid: {
    flexWrap: 'wrap',
    minHeight: '24px',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: 'rgba(93,93,93,.06)'
  },
  contentList: {
    flexWrap: 'wrap',
    minHeight: '24px',
    height: 'auto',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'rgba(93,93,93,.06)'
  },
  line: {
    border: '1px solid rgba(0,0,0,.1)',
    height: '30px',
    margin: '5px 0px'
  },
  title: {
    display: 'flex',
    flexDirection: 'column'
  },
  icon: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100%',
    width: '160px',
    height: '76px'
  },
  iconGrid: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    width: '100%',
    height: '150px',
    marginBottom: '10px'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5px',
    flexWrap: 'wrap'
  },
  tags: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  tag: {
    height: '24px !important',
    marginLeft: '10px',
    marginTop: '5px'
  }
};

var _jss$createStyleSheet = __WEBPACK_IMPORTED_MODULE_0_styles__["b" /* jss */].createStyleSheet(styles).attach(),
    classes = _jss$createStyleSheet.classes;



/***/ }),

/***/ "./src/routes/Database/components/data-layout/components/filters/filters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_static_icons__ = __webpack_require__("./src/static/icons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_utils__ = __webpack_require__("./src/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_select__ = __webpack_require__("./node_modules/react-select/dist/react-select.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__style_loader_css_loader_react_select_dist_react_select_css__ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/react-select/dist/react-select.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__style_loader_css_loader_react_select_dist_react_select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__style_loader_css_loader_react_select_dist_react_select_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_icons__ = __webpack_require__("./node_modules/material-ui-icons/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__style__ = __webpack_require__("./src/routes/Database/components/data-layout/components/filters/style.js");
















var Filters =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits___default()(Filters, _Component);

  function Filters(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Filters);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, (Filters.__proto__ || Object.getPrototypeOf(Filters)).call(this, props));
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "onSearch", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name, _value) {
        _this.setState({
          searchText: _value
        });

        _this.props.updateData(name, _value);

        _this.props.resetContent();
      }
    });
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "onEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (event.key === 'Enter') {
          __WEBPACK_IMPORTED_MODULE_9_utils__["a" /* analytics */].logEvent({
            category: 'Search',
            action: 'Searching - Enter',
            label: "".concat(_this.state.searchText, " in view ").concat(_this.props.view)
          });

          _this.props.updateData(_this.props.filters.sortedBy, _this.state.searchText);

          _this.props.resetContent();
        }
      }
    });
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "handleDrawer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: !_this.state.open
        });
      }
    });
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "handleViewChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            view = _this$props.view,
            changeView = _this$props.changeView;
        changeView({
          list: 'grid',
          grid: window.matchMedia('(min-width: 770px)').matches ? 'table' : 'list',
          table: 'list'
        }[view]);
      }
    });
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "transformData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(mainCategory) {
        var subcategory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var filterValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var searchValue = subcategory === null ? '' : _this.state.searchText;

        _this.setState({
          searchText: searchValue,
          sortBy: mainCategory
        });

        _this.props.updateFilter(mainCategory, subcategory, filterValues ? __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.toString(filterValues).split(',') : []);

        _this.props.updateData(mainCategory, searchValue);

        _this.props.resetContent();
      }
    });
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "search", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name) {
        return function (event) {
          _this.setState({
            searchText: event.target.value
          });
        };
      }
    });
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "clearSearchText", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name) {
        _this.setState({
          searchText: ''
        });

        _this.props.updateData(name, '');

        _this.props.resetContent();
      }
    });
    _this.state = {
      open: false,
      searchText: ''
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Filters, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _helpers$getFilters;

      var _props = this.props,
          updateFilter = _props.updateFilter,
          filters = _props.filters,
          view = _props.view,
          updateData = _props.updateData,
          resetContent = _props.resetContent,
          searchData = _props.searchData,
          sortByOptions = _props.sortByOptions;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].filtersContainer
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].drawerHandle
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui__["h" /* Button */], {
        "aria-label": "open drawer",
        raised: true,
        color: "accent",
        style: {
          minHeight: '31px',
          height: '31px',
          width: '20px',
          minWidth: '80px'
        },
        onClick: function onClick() {
          __WEBPACK_IMPORTED_MODULE_9_utils__["a" /* analytics */].logEvent({
            category: 'Filters',
            action: 'Filters trigerred',
            label: " ".concat(!_this2.state.open, " in view ").concat(view)
          });

          _this2.handleDrawer();
        }
      }, 'Filters')), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui__["i" /* Drawer */], {
        anchor: "top",
        type: "persistent",
        open: this.state.open,
        className: this.state.open ? __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].drawerBox : __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].noDrawer
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].drawerInner
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].subfilters
      }, (_helpers$getFilters = __WEBPACK_IMPORTED_MODULE_9_utils__["b" /* helpers */].getFilters(filters.sortedBy, filters.filtersData)) === null || _helpers$getFilters === void 0 ? void 0 : _helpers$getFilters.map(function (f) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
          className: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].multiselect
        }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_select__["a" /* default */], {
          closeOnSelect: true,
          multi: f.multiselect,
          onChange: function onChange(value) {
            __WEBPACK_IMPORTED_MODULE_9_utils__["a" /* analytics */].logEvent({
              category: 'Filters',
              action: 'Filter by',
              label: "".concat(value, " in view ").concat(view)
            });

            _this2.transformData(filters.sortedBy, f.filterValue, value);
          },
          options: f.filterOptions,
          placeholder: f.filterName,
          simpleValue: true,
          value: f.multiselect ? filters[filters.sortedBy][f.filterValue] : __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.first(filters[filters.sortedBy][f.filterValue])
        }));
      })))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].filtersToolbar
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].mainFilters
      }, (sortByOptions === null || sortByOptions === void 0 ? void 0 : sortByOptions.length) > 1 && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui__["j" /* TextField */], {
        id: "sort-options",
        labelClassName: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].sortByLabel,
        className: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].sortField,
        select: true,
        label: "Sort by:",
        value: this.state.sortBy,
        onChange: function onChange(event) {
          __WEBPACK_IMPORTED_MODULE_9_utils__["a" /* analytics */].logEvent({
            category: 'Sort',
            action: 'Sort by',
            label: "".concat(event.target.value, " in view ").concat(view)
          });

          _this2.transformData(event.target.value);
        },
        SelectProps: {
          native: true
        }
      }, sortByOptions.map(function (o) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("option", {
          key: o.value,
          value: o
        }, o);
      }))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].otherTools
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui__["k" /* FormControl */], {
        className: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].searchBar
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui__["l" /* Input */], {
        id: "searchBar",
        type: "text",
        placeholder: "Search for ".concat(filters.sortedBy || ' ', "..."),
        value: this.state.searchText,
        onChange: this.search(filters.sortedBy),
        onKeyDown: this.onEnter,
        className: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].searchInput,
        disableUnderline: true,
        endAdornment: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui__["m" /* InputAdornment */], {
          position: "end"
        }, this.state.searchText && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui__["n" /* IconButton */], {
          style: {
            height: '25px',
            width: '25px'
          },
          onClick: function onClick() {
            __WEBPACK_IMPORTED_MODULE_9_utils__["a" /* analytics */].logEvent({
              category: 'Search',
              action: 'Searching - Click',
              label: "".concat(_this2.state.searchText, " in view ").concat(view)
            });

            _this2.clearSearchText(filters.sortedBy);
          }
        }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_material_ui_icons__["k" /* Clear */], null)))
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui__["n" /* IconButton */], {
        style: __WEBPACK_IMPORTED_MODULE_14__style__["b" /* styles */].searchIcon,
        onClick: function onClick() {
          return _this2.onSearch(filters.sortedBy, _this2.state.searchText);
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_material_ui_icons__["l" /* Search */], null))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui__["o" /* Tooltip */], {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          marginLeft: '10px'
        },
        id: "tooltip-icon1",
        title: "Change view",
        className: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].viewButton,
        placement: "top"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui__["h" /* Button */], {
        raised: true,
        style: {
          minWidth: '40px',
          minHeight: '32px',
          padding: 0
        },
        onClick: function onClick() {
          __WEBPACK_IMPORTED_MODULE_9_utils__["a" /* analytics */].logEvent({
            category: 'View',
            action: 'Change view',
            label: "from ".concat(view)
          });

          _this2.handleViewChange();
        }
      }, __WEBPACK_IMPORTED_MODULE_9_utils__["b" /* helpers */].getViewIcon(view))))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_14__style__["a" /* classes */].tools
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui__["o" /* Tooltip */], {
        id: "tooltip-icon3",
        title: "Return to top",
        placement: "top"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui__["h" /* Button */], {
        raised: true,
        onClick: function onClick() {
          __WEBPACK_IMPORTED_MODULE_9_utils__["a" /* analytics */].logEvent({
            category: 'Scroll',
            action: 'Scroll to top',
            label: "in view ".concat(view)
          });
          window.scrollTo(0, 0);
        },
        style: {
          margin: '0 10px',
          minWidth: '32px',
          padding: 0
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_static_icons__["r" /* BackToTop */], null)))));
    }
  }]);

  return Filters;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Filters.propTypes = {
  filters: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired,
  updateFilter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  resetAllFilters: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  view: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  changeView: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Filters);

/***/ }),

/***/ "./src/routes/Database/components/data-layout/components/filters/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styles__ = __webpack_require__("./src/styles/index.js");

var styles = {
  filtersContainer: {
    display: 'flex'
  },
  otherTools: {
    display: 'flex',
    maxWidth: '300px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  sortByLabel: {
    margin: '0'
  },
  form: {
    margin: '0px 20px !important'
  },
  noDrawer: {
    display: 'none'
  },
  mainFilters: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '250px',
    minWidth: '110px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '100px'
  },
  filtersToolbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '64px',
    left: '0',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_0_styles__["a" /* theme */].palette.lightestBlue,
    position: 'fixed',
    padding: '0px 20px',
    zIndex: '2',
    height: '50px',
    borderBottom: '1px solid rgba(0,0,0,0.34)',
    borderTop: '1px solid rgba(0,0,0,0.34)'
  },
  tooltip: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  searchIcon: {
    height: '30px',
    width: '36px',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_0_styles__["a" /* theme */].palette.lightGrey,
    borderLeft: '1px solid #d4d4d4',
    borderRadius: 'inherit'
  },
  multiselect: {
    maxWidth: '240px',
    width: '100%',
    margin: '10px 5px 5px'
  },
  subfilters: {
    minHeight: '84px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  tools: {
    position: 'fixed',
    bottom: '20px',
    right: '0'
  },
  drawerHandle: {
    zIndex: '1500',
    position: 'fixed',
    top: '75px',
    left: '10px'
  },
  searchBar: {
    height: '32px !important',
    width: '233px',
    padding: '5px 0px 5px 10px !important',
    border: '1px solid #d0d0d0 !important',
    alignItems: 'center !important',
    justifyContent: 'space-between !important',
    flexDirection: 'row !important'
  },
  searchInput: {
    display: 'flex !important',
    alignItems: 'center !important',
    '& > input': {
      padding: 0
    },
    '& > div': {
      display: 'flex'
    }
  },
  drawerInner: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  drawerHeader: {
    height: '30px'
  },
  sortField: {
    '& > div': {
      marginTop: '10px !important',
      height: '26px !important'
    }
  },
  drawerBox: {
    '& > div': {
      overflow: 'visible',
      backgroundColor: __WEBPACK_IMPORTED_MODULE_0_styles__["a" /* theme */].palette.lightestBlue,
      paddingBottom: '20px',
      paddingLeft: '110px'
    }
  },
  '@media (max-width: 500px)': {
    viewButton: {
      display: 'none !important'
    }
  },
  '@media (max-width: 640px)': {
    otherTools: {
      justifyContent: 'flex-end'
    },
    searchBar: {
      width: '115px'
    },
    filtersToolbar: {
      top: '47px',
      padding: '5px',
      paddingTop: '2px',
      alignItems: 'center'
    },
    drawerHandle: {
      top: '55px'
    }
  }
};

var _jss$createStyleSheet = __WEBPACK_IMPORTED_MODULE_0_styles__["b" /* jss */].createStyleSheet(styles).attach(),
    classes = _jss$createStyleSheet.classes;



/***/ }),

/***/ "./src/routes/Database/components/data-layout/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cards_cards__ = __webpack_require__("./src/routes/Database/components/data-layout/components/cards/cards.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filters_filters__ = __webpack_require__("./src/routes/Database/components/data-layout/components/filters/filters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_table__ = __webpack_require__("./src/routes/Database/components/data-layout/components/table/table.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__cards_cards__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__filters_filters__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__table_table__["a"]; });





/***/ }),

/***/ "./src/routes/Database/components/data-layout/components/table/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styles__ = __webpack_require__("./src/styles/index.js");

var styles = {
  tableWrapper: {
    marginTop: '20px',
    backgroundColor: "".concat(__WEBPACK_IMPORTED_MODULE_0_styles__["a" /* theme */].palette.lighterGrey, " !important"),
    width: '100%'
  },
  flexClass: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  footerItem: {
    marginRight: '10px'
  },
  marginClass: {
    marginRight: '10px'
  },
  '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
    cell: {
      maxWidth: '0 !important'
    }
  }
};

var _jss$createStyleSheet = __WEBPACK_IMPORTED_MODULE_0_styles__["b" /* jss */].createStyleSheet(styles).attach(),
    classes = _jss$createStyleSheet.classes;



/***/ }),

/***/ "./src/routes/Database/components/data-layout/components/table/table.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_utils__ = __webpack_require__("./src/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style__ = __webpack_require__("./src/routes/Database/components/data-layout/components/table/style.js");
var _this = this;







var Table = function Table() {
  var _helpers$getTableHead;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props,
      content = _ref.content,
      category = _ref.category;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["a" /* Paper */], {
    className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].tableWrapper
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["c" /* Table */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["d" /* TableHead */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["e" /* TableRow */], null, (_helpers$getTableHead = __WEBPACK_IMPORTED_MODULE_3_utils__["b" /* helpers */].getTableHeader(category)) === null || _helpers$getTableHead === void 0 ? void 0 : _helpers$getTableHead.map(function (h) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["f" /* TableCell */], {
      className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].cell,
      padding: "dense"
    }, h);
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["g" /* TableBody */], null, content === null || content === void 0 ? void 0 : content.map(function (item, index) {
    var _item$content, _item$links, _item$links2, _item$other;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["e" /* TableRow */], {
      hover: true,
      key: index
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["f" /* TableCell */], {
      className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].cell,
      padding: "dense"
    }, item.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["f" /* TableCell */], {
      className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].cell,
      padding: "dense"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].flexClass
    }, (_item$content = item.content) === null || _item$content === void 0 ? void 0 : _item$content.map(function (c) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        target: "_blank",
        style: __WEBPACK_IMPORTED_MODULE_4__style__["b" /* styles */].marginClass,
        href: c.link
      }, c.name);
    }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["f" /* TableCell */], {
      className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].cell,
      padding: "dense"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].flexClass
    }, (_item$links = item.links1) === null || _item$links === void 0 ? void 0 : _item$links.map(function (m) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        target: "_blank",
        style: __WEBPACK_IMPORTED_MODULE_4__style__["b" /* styles */].marginClass,
        href: m.link
      }, __WEBPACK_IMPORTED_MODULE_3_utils__["b" /* helpers */].transformName(m.type) || m.type);
    }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["f" /* TableCell */], {
      lassName: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].cell,
      padding: "dense"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].flexClass
    }, (_item$links2 = item.links2) === null || _item$links2 === void 0 ? void 0 : _item$links2.map(function (p) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        target: "_blank",
        style: __WEBPACK_IMPORTED_MODULE_4__style__["b" /* styles */].marginClass,
        href: p.link
      }, __WEBPACK_IMPORTED_MODULE_3_utils__["b" /* helpers */].transformName(p.type) || p.type);
    }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["f" /* TableCell */], {
      className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].cell,
      padding: "dense"
    }, (_item$other = item.other) === null || _item$other === void 0 ? void 0 : _item$other.map(function (f) {
      return f !== null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: __WEBPACK_IMPORTED_MODULE_4__style__["a" /* classes */].footerItem
      }, f);
    })));
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (Table);

/***/ }),

/***/ "./src/routes/Database/components/data-layout/dataLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_infinite_scroller__ = __webpack_require__("./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_infinite_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_infinite_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components__ = __webpack_require__("./src/routes/Database/components/data-layout/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__style__ = __webpack_require__("./src/routes/Database/components/data-layout/style.js");













var axios = __webpack_require__("./node_modules/axios/index.js");

var DataLayout =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_inherits___default()(DataLayout, _Component);

  function DataLayout(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, DataLayout);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, (DataLayout.__proto__ || Object.getPrototypeOf(DataLayout)).call(this, props));
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "componentWillMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.updateFilter(_this.props.sortByOptions[0], null, []);

        _this.props.sortByOptions.map(function (o) {
          return _this.getData(o);
        });
      }
    });
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "getData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(type) {
        axios.get("/api/".concat(_this.props.route, "/").concat(type)).then(function (res) {
          console.log('resp', res.data);

          _this.props.initializeData(type, res.data);

          _this.resetContent();
        }).catch(function (error) {
          console.log('ERROR', error);
        });
      }
    });
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "resetContent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          endOfContent: false,
          contentToLoad: [],
          lastItemIndex: 0
        });
      }
    });
    Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "loadMoreItems", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var startingPoint = _this.state.lastItemIndex;
        var currentData = _this.props.currentData;
        var itemsToLoad = 20;

        if (currentData) {
          _this.setState({
            lastItemIndex: startingPoint + itemsToLoad,
            contentToLoad: _this.state.contentToLoad.concat(currentData.slice(startingPoint, startingPoint + itemsToLoad >= currentData.length ? currentData.length : startingPoint + itemsToLoad)),
            endOfContent: startingPoint + itemsToLoad >= currentData.length
          });
        }
      }
    });
    _this.state = {
      contentToLoad: [],
      endOfContent: false,
      lastItemIndex: 0
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(DataLayout, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          filters = _props.filters,
          updateFilter = _props.updateFilter,
          view = _props.view,
          changeView = _props.changeView,
          currentData = _props.currentData,
          updateData = _props.updateData,
          sortByOptions = _props.sortByOptions;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui__["a" /* Paper */], {
        style: __WEBPACK_IMPORTED_MODULE_11__style__["a" /* styles */].layoutContainer,
        elevation: 2
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_11__style__["b" /* classes */].contentContainer,
        id: "scrollContainer"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components__["a" /* Filters */], {
        resetContent: this.resetContent,
        updateFilter: updateFilter,
        updateData: updateData,
        filters: filters //  resetAllFilters={resetAllFilters}
        ,
        view: view,
        changeView: changeView,
        sortByOptions: sortByOptions
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: view === 'list' ? __WEBPACK_IMPORTED_MODULE_11__style__["b" /* classes */].containerList : __WEBPACK_IMPORTED_MODULE_11__style__["b" /* classes */].containerGrid
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_infinite_scroller___default.a, {
        pageStart: 0,
        loadMore: this.loadMoreItems,
        hasMore: !this.state.endOfContent,
        loader: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui__["b" /* CircularProgress */], {
          className: __WEBPACK_IMPORTED_MODULE_11__style__["b" /* classes */].contentLoader,
          size: 50,
          thickness: 8
        })
      }, view === 'table' ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components__["b" /* Table */], {
        content: this.state.contentToLoad,
        category: filters.sortedBy
      }) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components__["c" /* Cards */], {
        content: this.state.contentToLoad,
        view: view,
        filters: filters
      })))));
    }
  }]);

  return DataLayout;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

DataLayout.propTypes = {
  filters: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired,
  updateFilter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  resetAllFilters: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  view: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  changeView: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  currentData: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array.isRequired,
  updateData: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (DataLayout);

/***/ }),

/***/ "./src/routes/Database/components/data-layout/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return classes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styles__ = __webpack_require__("./src/styles/index.js");

var styles = {
  layoutContainer: {
    eight: '100%',
    padding: '20px 20px 80px'
  },
  contentContainer: {
    height: '100%',
    overflow: 'auto',
    padding: '25px 0px'
  },
  contentLoader: {
    margin: '40px'
  },
  containerGrid: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '& > div > div:first-child': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'space-around'
    },
    '& > div': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'space-around'
    }
  },
  containerList: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  }
};

var _jss$createStyleSheet = __WEBPACK_IMPORTED_MODULE_0_styles__["b" /* jss */].createStyleSheet(styles).attach(),
    classes = _jss$createStyleSheet.classes;



/***/ }),

/***/ "./src/routes/Database/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_layout_dataLayout__ = __webpack_require__("./src/routes/Database/components/data-layout/dataLayout.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__data_layout_dataLayout__["a"]; });



/***/ }),

/***/ "./src/routes/Database/containers/databaseContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGamesC", function() { return VideoGamesC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsC", function() { return ToolsC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkC", function() { return NetworkC; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_database__ = __webpack_require__("./src/routes/Database/modules/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VideoGames_VideoGames__ = __webpack_require__("./src/routes/Database/VideoGames/VideoGames.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tools_Tools__ = __webpack_require__("./src/routes/Database/Tools/Tools.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Network_Network__ = __webpack_require__("./src/routes/Database/Network/Network.js");


/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */




/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

var mapDispatchToProps = {
  updateFilter: function updateFilter(category, subcategory, value) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modules_database__["updateFilter"])(category, subcategory, value);
  },
  resetAllFilters: function resetAllFilters(category) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modules_database__["resetAllFilters"])(category);
  },
  changeView: function changeView(view) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modules_database__["changeView"])(view);
  },
  updateData: function updateData(sortBy, value) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modules_database__["updateData"])(sortBy, value);
  },
  initializeData: function initializeData(type, data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modules_database__["initializeData"])(type, data);
  },
  initializeState: function initializeState() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modules_database__["initializeState"])();
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    filters: state.database.filters,
    view: state.database.view,
    currentData: state.database.currentData
  };
};
/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */


var VideoGamesC = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__VideoGames_VideoGames__["a" /* default */]);
var ToolsC = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_3__Tools_Tools__["a" /* default */]);
var NetworkC = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_4__Network_Network__["a" /* default */]);

/***/ }),

/***/ "./src/routes/Database/modules/database.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER", function() { return UPDATE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_FILTERS", function() { return RESET_FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_VIEW", function() { return CHANGE_VIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DATA", function() { return UPDATE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_DATA", function() { return INITIAL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["initializeData"] = initializeData;
/* harmony export (immutable) */ __webpack_exports__["initializeState"] = initializeState;
/* harmony export (immutable) */ __webpack_exports__["updateData"] = updateData;
/* harmony export (immutable) */ __webpack_exports__["updateFilter"] = updateFilter;
/* harmony export (immutable) */ __webpack_exports__["resetAllFilters"] = resetAllFilters;
/* harmony export (immutable) */ __webpack_exports__["changeView"] = changeView;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (immutable) */ __webpack_exports__["default"] = counterReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var _ACTION_HANDLERS;

// ------------------------------------
// Constants
// ------------------------------------

var UPDATE_FILTER = 'UPDATE_FILTER';
var RESET_FILTERS = 'RESET_FILTERS';
var CHANGE_VIEW = 'CHANGE_VIEW';
var UPDATE_DATA = 'UPDATE_DATA';
var INITIAL_DATA = 'INITIAL_DATA';
var INITIAL_STATE = 'INITIAL_STATE'; // ------------------------------------
// Actions
// ------------------------------------
// ------------------------------------
// Reducer
// ------------------------------------

var initialState = {
  view: 'grid',
  data: {
    companies: [],
    games: [],
    assets: [],
    people: [],
    networks: []
  },
  currentData: null,
  filters: {
    filtersData: {
      foundationYears: [],
      locations: [],
      releasesYears: []
    },
    sortedBy: '',
    companies: {
      status: [],
      role: [],
      location: [],
      type: [],
      founded: []
    },
    networks: {
      location: [],
      type: []
    },
    games: {
      platforms: [],
      // ios, windows, steam, etc..
      genre: [],
      // platform. rpg, idle, action, puzzle,etc..
      status: [],
      // released, under development, stopped,etc..
      style: [],
      // 3D, 2D, VR, etc..
      mode: [],
      released: []
    },
    assets: {
      status: [],
      // released, under development, stopped,etc..
      price: [],
      category: []
    }
  }
};
function initializeData(type, data) {
  return {
    type: INITIAL_DATA,
    payload: {
      type: type,
      data: data
    }
  };
}
function initializeState() {
  return {
    type: INITIAL_STATE,
    payload: {}
  };
}
function updateData(sortBy, value) {
  return {
    type: UPDATE_DATA,
    payload: {
      sortBy: sortBy,
      value: value
    }
  };
}
function updateFilter(category) {
  var subcategory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return {
    type: UPDATE_FILTER,
    payload: {
      category: category,
      subcategory: subcategory,
      value: value
    }
  };
}
function resetAllFilters(category) {
  return {
    type: RESET_FILTERS,
    payload: {
      category: category
    }
  };
}
function changeView(view) {
  return {
    type: CHANGE_VIEW,
    payload: {
      view: view
    }
  };
}
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

var actions = {
  updateFilter: updateFilter,
  resetAllFilters: resetAllFilters
}; // ------------------------------------
// Action Handlers
// ------------------------------------

var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, UPDATE_FILTER, function (state, action) {
  return action.payload.subcategory ? Object.assign({}, state, {
    filters: Object.assign({}, state.filters, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()({
      sortedBy: action.payload.category || state.filters.sortedBy
    }, action.payload.category, Object.assign({}, state.filters[action.payload.category], __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()({}, action.payload.subcategory, action.payload.value || state.filters[action.payload.category][action.payload.subcategory]))))
  }) : Object.assign({}, state, {
    filters: Object.assign({}, state.filters, {
      sortedBy: action.payload.category || state.filters.sortedBy
    })
  });
}), __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, RESET_FILTERS, function (state, action) {
  return Object.assign({}, state, {
    filters: Object.assign({}, state.filters, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()({}, action.payload.category, initialState.filters[action.payload.category])),
    currentData: state.data[action.payload.category]
  });
}), __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, CHANGE_VIEW, function (state, action) {
  return Object.assign({}, state, {
    view: action.payload.view
  });
}), __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, UPDATE_DATA, function (state, action) {
  return Object.assign({}, state, {
    currentData: state.data[action.payload.sortBy].filter(function (d) {
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.difference(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.flattenDeep(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.values(state.filters[action.payload.sortBy])), d.tags).length === 0;
    }).filter(function (d) {
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(d.name.toLowerCase(), action.payload.value);
    })
  });
}), __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, INITIAL_DATA, function (state, action) {
  return Object.assign({}, state, {
    data: Object.assign({}, state.data, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()({}, action.payload.type, action.payload.data.itemsData)),
    filters: Object.assign({}, state.filters, {
      filtersData: Object.assign({}, state.filters.filtersData, action.payload.data.filtersData)
    }),
    currentData: state.filters.sortedBy === action.payload.type ? action.payload.data.itemsData : state.currentData
  });
}), __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, INITIAL_STATE, function (state, action) {
  return initialState;
}), _ACTION_HANDLERS);
function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

/***/ })

});
//# sourceMappingURL=0.js.map