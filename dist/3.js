webpackJsonp([3],{

/***/ "./src/routes/Info/components/Info.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Stepper__ = __webpack_require__("./node_modules/material-ui/Stepper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Stepper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Stepper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_utils__ = __webpack_require__("./src/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_commons_components__ = __webpack_require__("./src/commons/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__content_js__ = __webpack_require__("./src/routes/Info/components/content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__("./src/routes/Info/components/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style__ = __webpack_require__("./src/routes/Info/components/style.js");
var _this = this;











var Info = function Info() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props,
      stepIndex = _ref.stepIndex,
      changeStep = _ref.changeStep;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_8__style__["a" /* classes */].infocontainer
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Stepper___default.a, {
    activeStep: stepIndex,
    nonLinear: true,
    orientation: "vertical"
  }, __WEBPACK_IMPORTED_MODULE_6__content_js__["a" /* default */].map(function (q, index) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Stepper__["Step"], {
      key: q.key
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Stepper__["StepButton"], {
      onClick: function onClick() {
        __WEBPACK_IMPORTED_MODULE_4_utils__["a" /* analytics */].logEvent({
          category: 'FAQ',
          action: 'Question clicked',
          label: q.question
        });
        changeStep(index);
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: __WEBPACK_IMPORTED_MODULE_8__style__["a" /* classes */].question
    }, q.question)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Stepper__["StepContent"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: __WEBPACK_IMPORTED_MODULE_8__style__["a" /* classes */].answer
    }, q.answer, q.extra)));
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui__["s" /* Divider */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["a" /* Credits */], null));
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["compose"])(__WEBPACK_IMPORTED_MODULE_5_commons_components__["c" /* withSteps */])(Info));

/***/ }),

/***/ "./src/routes/Info/components/components/credits/content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__("./src/utils/index.js");


var credits = [{
  key: 1,
  credit: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Site created & curated by", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    href: "http://www.tensaiprojects.weebly.com",
    title: "AT",
    onClick: function onClick() {
      return __WEBPACK_IMPORTED_MODULE_1_utils__["a" /* analytics */].logEvent({
        category: 'Credits',
        action: 'Clicked credit',
        label: 'Alexandra website'
      });
    }
  }, ' ', "Alexandra Tseniklidou"))
}, {
  key: 2,
  credit: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Code contributions & support by", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    href: "https://github.com/pchrysa",
    title: "AT",
    onClick: function onClick() {
      return __WEBPACK_IMPORTED_MODULE_1_utils__["a" /* analytics */].logEvent({
        category: 'Credits',
        action: 'Clicked credit',
        label: 'Chrysa Git'
      });
    }
  }, ' ', "Chrysa Papadopoulou"))
}, {
  key: 3,
  credit: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Icons made by", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    href: "https://www.flaticon.com/authors/lucy-g",
    title: "Lucy G"
  }, ' ', "Lucy G", ' '), ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    href: "https://www.flaticon.com/authors/vector-stall",
    title: "Vector Stall"
  }, ' ', "Vector Stall", ' '), ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    href: "http://www.freepik.com",
    title: "Freepik"
  }, ' ', "Freepik", ' '), ", from", ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    href: "https://www.flaticon.com/",
    title: "Flaticon"
  }, "www.flaticon.com", ' '), "licensed by", ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "http://creativecommons.org/licenses/by/3.0/",
    title: "Creative Commons BY 3.0",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "CC 3.0 BY"))
}, {
  key: 4,
  credit: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    href: "https://github.com/davezuko/react-redux-starter-kit",
    title: "Starter Kit"
  }, ' ', "Project's boilerplate", ' '), "from", ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    href: "https://github.com/davezuko",
    title: "Github"
  }, "David Zukowski", ' '), "licensed under the MIT License")
}, {
  key: 5,
  credit: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Content by", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    href: "http://aboutgamedev.weebly.com/greek-games-2014.html",
    title: "Games 2014"
  }, ' ', "Greek Games 2014"), ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    href: "http://alt-tab.gr/greek-games-database/",
    title: "alt-tab"
  }, ' ', "alt-tab database"), ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    href: "https://allianceive.wordpress.com/%CE%BF%CE%BC%CE%AC%CE%B4%CE%B5%CF%82-%CE%B1%CE%BD%CE%AC%CF%80%CF%84%CF%85%CE%BE%CE%B7%CF%82-video-games/",
    title: "GamesInGreece"
  }, ' ', "Games in Greece 3.0"))
}];
/* harmony default export */ __webpack_exports__["a"] = (credits);

/***/ }),

/***/ "./src/routes/Info/components/components/credits/credits.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content__ = __webpack_require__("./src/routes/Info/components/components/credits/content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style__ = __webpack_require__("./src/routes/Info/components/components/credits/style.js");





var Credits = function Credits() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style__["a" /* classes */].credits
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["a" /* Paper */], {
    className: __WEBPACK_IMPORTED_MODULE_3__style__["a" /* classes */].creditsList
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["c" /* Table */], {
    className: __WEBPACK_IMPORTED_MODULE_3__style__["a" /* classes */].creditsTable
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["d" /* TableHead */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["e" /* TableRow */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["f" /* TableCell */], {
    style: __WEBPACK_IMPORTED_MODULE_3__style__["b" /* styles */].tableCell
  }, "Credits"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["g" /* TableBody */], null, __WEBPACK_IMPORTED_MODULE_2__content__["a" /* default */].map(function (c) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["e" /* TableRow */], {
      key: c.key
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["f" /* TableCell */], null, c.credit));
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (Credits);

/***/ }),

/***/ "./src/routes/Info/components/components/credits/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styles__ = __webpack_require__("./src/styles/index.js");

var styles = {
  tableCell: {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 600
  },
  credits: {
    marginBottom: '40px'
  },
  creditsList: {
    margin: '15px 0px'
  }
};

var _jss$createStyleSheet = __WEBPACK_IMPORTED_MODULE_0_styles__["b" /* jss */].createStyleSheet(styles).attach(),
    classes = _jss$createStyleSheet.classes;



/***/ }),

/***/ "./src/routes/Info/components/components/help/content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_helpers__ = __webpack_require__("./src/utils/helpers.js");


var help = [{
  key: 1,
  symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["getMediaIcon"])('website'),
  explanation: 'link to website'
}, {
  key: 2,
  symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["getMediaIcon"])('online'),
  explanation: 'link to playing the game online'
}, {
  key: 3,
  symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["getMediaIcon"])('steam'),
  explanation: 'link to steam'
}, {
  key: 4,
  symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["getMediaIcon"])('demo'),
  explanation: 'link to available demo of the game'
}, {
  key: 5,
  symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["getMediaIcon"])('indiedb'),
  explanation: 'link to IndieDB'
}, {
  key: 6,
  symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["getMediaIcon"])('pc'),
  explanation: 'link to the pc version of the game ' + '(there is no distinction between linux, mac or windows)'
}, {
  key: 7,
  symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["getMediaIcon"])('sourcecode'),
  explanation: 'link to source code'
}, {
  key: 8,
  symbol: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["getMediaIcon"])('3d'),
  explanation: 'link to site with 3d assets'
}, {
  key: 9,
  symbol: 'website icon sometimes appears twice',
  explanation: "one is for the developer's website and the other for the publisher's"
}, {
  key: 10,
  symbol: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    style: {
      color: 'red',
      margin: 0
    }
  }, "red colored text"),
  explanation: 'item is under development or in beta'
}, {
  key: 11,
  symbol: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    style: {
      color: 'black',
      margin: 0
    }
  }, "black colored text"),
  explanation: 'unavailable or inactive items'
}, {
  key: 12,
  symbol: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    style: {
      color: 'blue',
      margin: 0
    }
  }, "blue colored text"),
  explanation: 'available or active items or items with unknown status (default color)'
}];
/* harmony default export */ __webpack_exports__["a"] = (help);

/***/ }),

/***/ "./src/routes/Info/components/components/help/help.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content__ = __webpack_require__("./src/routes/Info/components/components/help/content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style__ = __webpack_require__("./src/routes/Info/components/components/help/style.js");





var Help = function Help() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style__["a" /* classes */].help
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["a" /* Paper */], {
    className: __WEBPACK_IMPORTED_MODULE_3__style__["a" /* classes */].helpList
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["c" /* Table */], {
    className: __WEBPACK_IMPORTED_MODULE_3__style__["a" /* classes */].helpTable
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["g" /* TableBody */], null, __WEBPACK_IMPORTED_MODULE_2__content__["a" /* default */].map(function (h) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["e" /* TableRow */], {
      key: h.key
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["f" /* TableCell */], null, h.symbol), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["f" /* TableCell */], null, h.explanation));
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (Help);

/***/ }),

/***/ "./src/routes/Info/components/components/help/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styles__ = __webpack_require__("./src/styles/index.js");

var styles = {
  help: {
    margin: '10px'
  },
  helpList: {
    margin: '15px 0px'
  }
};

var _jss$createStyleSheet = __WEBPACK_IMPORTED_MODULE_0_styles__["b" /* jss */].createStyleSheet(styles).attach(),
    classes = _jss$createStyleSheet.classes;



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
  key: 1,
  question: "So many different colors and icons...I don't understand a thing!",
  answer: "I don't blame you! The information is kind of dense to save space for mobile " + "plus I am not a ux/ui designer so don't hate me. :'( " + 'By pressing the top right button twice you can change the view to a table which simplifies the display. ' + 'If you prefer the grid and list views here is a table explaining the not-so-obvious color codes and icons. ',
  extra: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components__["b" /* Help */], null)
}, {
  key: 2,
  question: "I have some information on an item but I am not sure if it's in the scope of the database.",
  answer: 'Here is a list with the kind of information that the database currently supports.',
  extra: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", null, "Teams"), " - of any size, not necessarily companies."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "an image/logo. Send a url to the image, not the image itself"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "status: active, inactive and year founded"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "location: country (if not based in Greece) or town"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "their games if any"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "media links: websites, facebook, indiedb, twitter, youtube, linkedin")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", null, "Digital Games"), " - including released, under development and published but no longer available games. Betting games are not supported for the time being."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "an image/logo. Send a url to the image, not the image itself"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "status: released, under developement, unavailable, beta and release year if there is one", ' '), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "tags for filtering: genre (see the filter for available genres), style (2d, 3d, vr, ar), modes (local multiplayer, online multiplayer, single player)", ' '), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "developers and publishers name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "media links: websites, facebook, indiedb, twitter, youtube"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "For released games only, links to platforms it was released to: app store, play store, windows store, pc, available demo, online")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", null, "Assets/Tools"), " - that can be used in games or game creation."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "an image/logo. Send a url to the image, not the image itself"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "status: released, under developement, beta and release year if there is one", ' '), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "tags for filtering: price (free, buy once, subscription)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "developers name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "media links: websites, facebook, twitter and any stores it might be available"))))
}, {
  key: 3,
  question: 'Some of the data here is outdated, wrong or missing..are you going to update it?',
  answer: "I am actively tending to this site so if anything catches my attention, I'll take care of it as soon as possible. " + 'However, there are bound to be mistakes and missing info due to the large scale of the data ' + "so your help in keeping the content fresh is invaluable. If you spot anything suspicious don't hesitate to contact me. " + 'Use the info button on the top left of the card to send me corrections or additions for that card. ' + 'If you want to add something new let me know via the get-in-touch contact form'
}, {
  key: 4,
  question: 'Who is behind this?',
  answer: "It's just me for now. My name is Alexandra Tseniklidou, I am a software engineer with a passion for games and I created this site out of love for the community. " + 'I created a list of game development teams a long time ago intended for personal use but since some people found it useful, ' + 'I decided to make it more formal and complete. ' + 'On the way though, I have used other online resources and help that I should give credit to. You can check them out at the table following this FAQ.'
}, {
  key: 5,
  question: 'I like this initiative, how can I help?',
  answer: 'Any info you share is really helping me out in maintaining the database and saving me valuable time so that I can focus on developing more features. ' + 'If you are a developer too and have worked or want to work with any of these technologies: React, Redux, Node, Postgres then perhaps we can join forces! ' + "If you don't have time to spare but want to support the site no matter what, then you can consider donating. Regardless, the content is free for you to view! " //  "Last but not least you can vote on the polls to help me decide on what feature to implement next!"

}];
/* harmony default export */ __webpack_exports__["a"] = (questions);

/***/ }),

/***/ "./src/routes/Info/components/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styles__ = __webpack_require__("./src/styles/index.js");

var styles = {
  infocontainer: {
    maxWidth: '750px',
    margin: 'auto',
    textAlign: 'left'
  },
  question: {
    fontWeight: '700',
    textAlign: 'left',
    fontSize: '16px'
  }
};

var _jss$createStyleSheet = __WEBPACK_IMPORTED_MODULE_0_styles__["b" /* jss */].createStyleSheet(styles).attach(),
    classes = _jss$createStyleSheet.classes;



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
var actions = {}; // ------------------------------------
// Action Handlers
// ------------------------------------

var ACTION_HANDLERS = {}; // ------------------------------------
// Reducer
// ------------------------------------

var initialState = {};
function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

/***/ })

});
//# sourceMappingURL=3.js.map