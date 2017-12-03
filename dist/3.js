webpackJsonp([3],{

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/chrysa/repository/thecodevs/GGD/src/styles\"]}!./src/routes/Info/components/Info.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".infocontainer{max-width:750px;margin:auto;text-align:left}.question{font-weight:700;margin-bottom:0;text-align:left;font-size:16px}", "", {"version":3,"sources":["/Users/chrysa/repository/thecodevs/GGD/src/routes/Info/components/src/routes/Info/components/Info.scss"],"names":[],"mappings":"AAAA,eACE,gBAAgB,AAChB,YAAY,AACZ,eAAgB,CACjB,AACD,UACE,gBAAgB,AAChB,gBAAkB,AAClB,gBAAgB,AAChB,cAAe,CAChB","file":"Info.scss","sourcesContent":[".infocontainer {\n  max-width: 750px;\n  margin: auto;\n  text-align: left;\n}\n.question {\n  font-weight: 700;\n  margin-bottom: 0px;\n  text-align: left;\n  font-size: 16px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/chrysa/repository/thecodevs/GGD/src/styles\"]}!./src/routes/Info/components/components/credits/credits.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".credits{margin-bottom:50px}.creditsList{margin:15px 0}", "", {"version":3,"sources":["/Users/chrysa/repository/thecodevs/GGD/src/routes/Info/components/components/credits/src/routes/Info/components/components/credits/credits.scss"],"names":[],"mappings":"AACA,SACE,kBAAmB,CACpB,AACD,aACE,aAAgB,CACjB","file":"credits.scss","sourcesContent":["\n.credits {\n  margin-bottom: 50px;\n}\n.creditsList {\n  margin: 15px 0px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/chrysa/repository/thecodevs/GGD/src/styles\"]}!./src/routes/Info/components/components/help/help.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".help{margin:10px}.helpList{margin:15px 0}", "", {"version":3,"sources":["/Users/chrysa/repository/thecodevs/GGD/src/routes/Info/components/components/help/src/routes/Info/components/components/help/help.scss"],"names":[],"mappings":"AACA,MACA,WAAY,CACX,AACD,UACE,aAAgB,CACjB","file":"help.scss","sourcesContent":["\n.help {\nmargin: 10px;\n}\n.helpList {\n  margin: 15px 0px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/routes/Info/components/Info.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Stepper__ = __webpack_require__("./node_modules/material-ui/Stepper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Stepper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Stepper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__("./src/routes/Info/components/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Info_scss__ = __webpack_require__("./src/routes/Info/components/Info.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Info_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Info_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_static_icons__ = __webpack_require__("./src/static/icons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__content_js__ = __webpack_require__("./src/routes/Info/components/content.js");














var Info = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Info, _Component);

  function Info(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Info);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Info.__proto__ || Object.getPrototypeOf(Info)).call(this, props));

    _this.state = {
      stepIndex: 0
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Info, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { className: 'infocontainer' },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_material_ui_Stepper___default.a,
          {
            activeStep: this.state.stepIndex,
            nonLinear: true,
            orientation: 'vertical'
          },
          __WEBPACK_IMPORTED_MODULE_11__content_js__["a" /* default */].map(function (q, index) {
            return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_material_ui_Stepper__["Step"],
              null,
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_material_ui_Stepper__["StepButton"],
                { onClick: function onClick() {
                    return _this2.setState({ stepIndex: index });
                  } },
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  'p',
                  { className: 'question' },
                  q.question
                )
              ),
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_material_ui_Stepper__["StepContent"],
                null,
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  'p',
                  { className: 'answer' },
                  q.answer,
                  q.extra
                )
              )
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui__["a" /* Divider */], null),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components__["a" /* Credits */], null)
      );
    }
  }]);

  return Info;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

Info.propTypes = {};

/* harmony default export */ __webpack_exports__["a"] = (Info);

/***/ }),

/***/ "./src/routes/Info/components/Info.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/chrysa/repository/thecodevs/GGD/src/styles\"]}!./src/routes/Info/components/Info.scss");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/chrysa/repository/thecodevs/GGD/src/styles\"]}!./src/routes/Info/components/Info.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/chrysa/repository/thecodevs/GGD/src/styles\"]}!./src/routes/Info/components/Info.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/routes/Info/components/components/credits/content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var credits = [{ credit: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'Site created & curated by',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: 'https://www.tensaiprojects.weebly.com',
        title: 'AT' },
      ' Alexandra Tseniklidou '
    )
  )
}, { credit: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'Icons made by',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: 'https://www.flaticon.com/authors/lucy-g',
        title: 'Lucy G' },
      ' Lucy G '
    ),
    ',',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: 'https://www.flaticon.com/authors/vector-stall',
        title: 'Vector Stall' },
      ' Vector Stall '
    ),
    ',',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: 'http://www.freepik.com',
        title: 'Freepik' },
      ' Freepik '
    ),
    ', from ',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: 'https://www.flaticon.com/', title: 'Flaticon' },
      'www.flaticon.com '
    ),
    'licensed by ',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: 'http://creativecommons.org/licenses/by/3.0/', title: 'Creative Commons BY 3.0', target: '_blank' },
      'CC 3.0 BY'
    )
  )
}, {
  credit: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: 'https://github.com/davezuko/react-redux-starter-kit',
        title: 'Starter Kit' },
      ' ',
      "Project's boilerplate",
      ' '
    ),
    'from ',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: 'https://github.com/davezuko',
        title: 'Github' },
      'David Zukowski '
    ),
    'licensed under the MIT License'
  )
}, {
  credit: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'Content by',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: 'http://aboutgamedev.weebly.com/greek-games-2014.html',
        title: 'Games 2014' },
      ' Greek Games 2014'
    ),
    ',',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: 'http://alt-tab.gr/greek-games-database/',
        title: 'alt-tab' },
      ' alt-tab databae'
    ),
    ',',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: 'https://allianceive.wordpress.com/%CE%BF%CE%BC%CE%AC%CE%B4%CE%B5%CF%82-%CE%B1%CE%BD%CE%AC%CF%80%CF%84%CF%85%CE%BE%CE%B7%CF%82-video-games/',
        title: 'GamesInGreece' },
      ' Game in Greece 3.0'
    )
  )
}];

/* harmony default export */ __webpack_exports__["a"] = (credits);

/***/ }),

/***/ "./src/routes/Info/components/components/credits/credits.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__credits_scss__ = __webpack_require__("./src/routes/Info/components/components/credits/credits.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__credits_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__credits_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__content__ = __webpack_require__("./src/routes/Info/components/components/credits/content.js");











var Credits = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Credits, _Component);

  function Credits(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Credits);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Credits.__proto__ || Object.getPrototypeOf(Credits)).call(this, props));

    _this.state = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Credits, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { className: 'credits' },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_material_ui__["b" /* Paper */],
          { className: 'creditsList' },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_material_ui__["c" /* Table */],
            { className: 'creditsTable' },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_material_ui__["d" /* TableHead */],
              null,
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_material_ui__["e" /* TableRow */],
                null,
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_material_ui__["f" /* TableCell */],
                  { style: { textAlign: 'center', fontSize: '16px', fontWeight: 600 } },
                  'Credits'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_material_ui__["g" /* TableBody */],
              null,
              __WEBPACK_IMPORTED_MODULE_8__content__["a" /* default */].map(function (c, index) {
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_material_ui__["e" /* TableRow */],
                  { key: index },
                  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_material_ui__["f" /* TableCell */],
                    null,
                    c.credit
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Credits;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

Credits.propTypes = {};

/* harmony default export */ __webpack_exports__["a"] = (Credits);

/***/ }),

/***/ "./src/routes/Info/components/components/credits/credits.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/chrysa/repository/thecodevs/GGD/src/styles\"]}!./src/routes/Info/components/components/credits/credits.scss");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/chrysa/repository/thecodevs/GGD/src/styles\"]}!./src/routes/Info/components/components/credits/credits.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/chrysa/repository/thecodevs/GGD/src/styles\"]}!./src/routes/Info/components/components/credits/credits.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/routes/Info/components/components/help/content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_helpers__ = __webpack_require__("./src/utils/helpers.js");



var help = [{ symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["a" /* getMediaIcon */])('website'),
  explanation: 'website url'
}, { symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["a" /* getMediaIcon */])('online'),
  explanation: 'game is playable online'
}, { symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["a" /* getMediaIcon */])('steam'),
  explanation: 'link to steam'
}, { symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["a" /* getMediaIcon */])('demo'),
  explanation: 'available demo of the game'
}, { symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["a" /* getMediaIcon */])('indiedb'),
  explanation: 'link to IndieDB'
}, { symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["a" /* getMediaIcon */])('pc'),
  explanation: 'game available for pc ' + '(currently there is no distinction between linux, mac or windows)'
}, { symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["a" /* getMediaIcon */])('sourcecode'),
  explanation: 'source code available'
}, { symbol: 'website icon sometimes appears twice',
  explanation: "one is for the developer's website and the other for the publisher's"
}, { symbol: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'p',
    { style: { color: 'red', margin: 0 } },
    'red colored text'
  ),
  explanation: 'game is under development or in beta'
}, { symbol: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'p',
    { style: { color: 'black', margin: 0 } },
    'black colored text'
  ),
  explanation: 'unavailable games or inactive teams'
}, { symbol: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'p',
    { style: { color: 'blue', margin: 0 } },
    'blue colored text'
  ),
  explanation: 'available games and active teams or items with unknown status (default color)'
}];

/* harmony default export */ __webpack_exports__["a"] = (help);

/***/ }),

/***/ "./src/routes/Info/components/components/help/help.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__help_scss__ = __webpack_require__("./src/routes/Info/components/components/help/help.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__help_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__help_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__content__ = __webpack_require__("./src/routes/Info/components/components/help/content.js");











var Help = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Help, _Component);

  function Help(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Help);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Help.__proto__ || Object.getPrototypeOf(Help)).call(this, props));

    _this.state = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Help, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { className: 'help' },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_material_ui__["b" /* Paper */],
          { className: 'helpList' },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_material_ui__["c" /* Table */],
            { className: 'helpTable' },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_material_ui__["g" /* TableBody */],
              null,
              __WEBPACK_IMPORTED_MODULE_8__content__["a" /* default */].map(function (h, index) {
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_material_ui__["e" /* TableRow */],
                  { key: index },
                  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_material_ui__["f" /* TableCell */],
                    null,
                    h.symbol
                  ),
                  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_material_ui__["f" /* TableCell */],
                    null,
                    h.explanation
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Help;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

Help.propTypes = {};

/* harmony default export */ __webpack_exports__["a"] = (Help);

/***/ }),

/***/ "./src/routes/Info/components/components/help/help.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/chrysa/repository/thecodevs/GGD/src/styles\"]}!./src/routes/Info/components/components/help/help.scss");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/chrysa/repository/thecodevs/GGD/src/styles\"]}!./src/routes/Info/components/components/help/help.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/chrysa/repository/thecodevs/GGD/src/styles\"]}!./src/routes/Info/components/components/help/help.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/routes/Info/components/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__help_help__ = __webpack_require__("./src/routes/Info/components/components/help/help.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credits_credits__ = __webpack_require__("./src/routes/Info/components/components/credits/credits.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__credits_credits__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__help_help__["a"]; });




/***/ }),

/***/ "./src/routes/Info/components/content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("./src/routes/Info/components/components/index.js");



var questions = [{
  question: "So many different colors and icons...I don't understand a thing!",
  answer: "I don't blame you! The information is kind of dense to save space for mobile (even though it is not fully responsive yet) " + "plus I am not a ux/ui designer so don't hate me. :'( " + "By pressing the top right button twice you can change the view to a table which simplifies the display. " + "If you prefer the grid and list views here is a table explaining the not-so-obvious color codes and icons. ",
  extra: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components__["b" /* Help */], null)
}, {
  question: "I have some information on a game/team but I am not sure if it's in the scope of the database.",
  answer: "If it is a digital game (video game, serious game, etc) then it probably is. " + "The database includes both released and under development games or games published once but no longer available. " + "The only type of game not supoorted for the time being are betting games. " + "Any teams (not necessarily companies) or people creating games are also welcome. " + "I will also be creating a list with tools and assets sometime soon, so you can share information on that too. " + 'Here is a list with the kind of information that the database currently supports. ',
  extra: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      null,
      'For games:'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'name'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        ' an image/logo. Send a url to the image, not the image itself '
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'status: released, under developement, unavailable, beta and release year if there is one '
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'tags for filtering: genre (see the filter for available genres), style (2d, 3d, vr, ar), modes (local multiplayer, online multiplayer, single player) '
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'developers and publishers name'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'media links: websites, facebook, indiedb, twitter, youtube, linkedin'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'For released games only, links to platforms it was released to: app store, play store, windows store, pc, available demo, online'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      null,
      'For teams: '
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'name'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        ' an image/logo. Send a url to the image, not the image itself '
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'status: active, inactive and year founded'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'location: country (if not based in Greece) or town'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'their games if any'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'media links: websites, facebook, indiedb, twitter, youtube, linkedin'
      )
    )
  )
}, {
  question: "Some of the data here is outdated, wrong or missing..are you going to update it?",
  answer: "I am actively tending to this site so if anything catches my attention, I'll take care of it as soon as possible. " + "However, there are bound to be mistakes and missing info due to the large scale of the data (it is hard to keep track of everything on my own) " + "so your help in keeping the content fresh is invaluable. If you spot anything suspicious don't hesitate to contact me. " + "Use the info button on the top left of the card to send me corrections or additions for that card. " + "If you want to add something new let me know via the get-in-touch contact form"
}, {
  question: 'Who is behind this?',
  answer: "It's just me for now. I am a software engineer with a passion for games and I created this site out of love for the community. " + "I created a list of game development teams a long time ago intended for personal use but since some people found it useful, " + "I decided to make it more formal and complete. " + "On the way though, I have used other online resources and help that I should give credit to. You can check them out at the table following this FAQ."
}, {
  question: 'I like this initiative, how can I help?',
  answer: "Any info you share is really helping me out in maintaining the database and saving me valuable time so that I can focus on developing more features. " + "If you are a developer too and have worked or want to work with any of these technologies: React, Redux, Node, Postgres then perhaps we can join forces! " + "If you don't have time to spare but want to support the site no matter what, then you can consider donating. Regardless, the content is free for you to view! " + "Last but not least you can vote on the polls to help me decide on what feature to implement next!"
}];
/* harmony default export */ __webpack_exports__["a"] = (questions);

/***/ }),

/***/ "./src/routes/Info/containers/InfoContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_info__ = __webpack_require__("./src/routes/Info/modules/info.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Info__ = __webpack_require__("./src/routes/Info/components/Info.js");



/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */



/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

var mapDispatchToProps = {};

var mapStateToProps = function mapStateToProps(state) {
    return {};
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

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__components_Info__["a" /* default */]));

/***/ }),

/***/ "./src/routes/Info/modules/info.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (immutable) */ __webpack_exports__["default"] = counterReducer;
// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------


/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

var actions = {};

// ------------------------------------
// Action Handlers
// ------------------------------------
var ACTION_HANDLERS = {};

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = {};

function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

/***/ })

});
//# sourceMappingURL=3.js.map