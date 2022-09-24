/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/steak.jpg */ "./src/img/steak.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n:root{\r\n    --white-color:#fff;\r\n    --steel-black:#333533;\r\n    --show-case-font: 'Roboto', sans-serif;\r\n    --unique-font: 'Poppins', sans-serif;\r\n}\r\nimg{\r\n    max-width: 100%;\r\n}\r\n\r\nbody{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: var(--show-case-font);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n   background-position: top;\r\n   background-size: cover;\r\n   background-attachment: fixed;\r\n   \r\n \r\n}\r\n\r\n\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\n#container{\r\n    padding: 20px 40px;\r\n    max-width: 1200px;\r\n    margin:  0 auto;\r\n    display: flex;\r\n   flex-direction: column;\r\n   gap:  7rem;\r\n\r\n    color: var(--white-color);\r\n}\r\n\r\n/* nav */\r\n\r\n#nav{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n   height: 3rem;\r\n}\r\n\r\n.navbar ul{\r\n    display: flex;\r\n    gap: 2.9rem;\r\n    align-items: center;\r\n    font-size: 1.3rem;\r\n    cursor: pointer;\r\n   \r\n}\r\n\r\n.navbar ul li{\r\n    padding: 9px;\r\n    overflow: hidden;\r\n}\r\n\r\n.navbar ul li:hover{\r\n    font-weight: bolder;\r\n   border-bottom: 2px solid  rgb(163, 161, 161);\r\n}\r\n\r\n.logo{\r\nfont-family: var(--unique-font);\r\nfont-size: 1.7rem;\r\n\r\n}\r\n\r\n\r\n/* showxase */\r\n\r\n.showcase{\r\n    display: flex;\r\n    flex-direction: column;\r\n   background-color: rgba(0,0,0,0.4);\r\n    text-align: center;\r\n    line-height: 0.40;\r\n    padding: 20px;\r\n}\r\n\r\n\r\n.showcase .intro{\r\n    font-size: 4rem;\r\n    line-height: 1;\r\n}\r\n\r\n/* menu */\r\n\r\n.steak{\r\n    max-width: 300px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.lg{\r\n   display: flex;\r\n   flex-wrap: wrap;\r\n   justify-content: space-around;\r\n   gap: 5rem;\r\n   margin-top: 40px;\r\n\r\n}\r\n.steak-name{\r\n    text-align: left;\r\n}\r\n\r\n.steak-name p{\r\n    color: rgb(163, 161, 161);\r\n}\r\n.sml{\r\n    display: flex;\r\n   flex-direction: column;\r\n  \r\n   \r\n}\r\n.underline{\r\n    border-bottom: 2px solid rgb(163, 161, 161) ;\r\n    height: 2px;\r\n    width: 6rem;\r\n}\r\n\r\n.steak-menu-log .underline{\r\n    width: 100%;\r\n    border-bottom: 3px dotted rgb(163, 161, 161) ;\r\n}\r\n\r\n/* about */\r\n.showcase .about{\r\n    font-size: 2rem;\r\n    line-height: 1.2;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAIA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,sCAAsC;IACtC,oCAAoC;AACxC;AACA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,kCAAkC;IAClC,yDAAsC;IACtC,4BAA4B;GAC7B,wBAAwB;GACxB,sBAAsB;GACtB,4BAA4B;;;AAG/B;;;AAGA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,aAAa;GACd,sBAAsB;GACtB,UAAU;;IAET,yBAAyB;AAC7B;;AAEA,QAAQ;;AAER;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;GACpB,YAAY;AACf;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;;AAEnB;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;GACpB,4CAA4C;AAC/C;;AAEA;AACA,+BAA+B;AAC/B,iBAAiB;;AAEjB;;;AAGA,aAAa;;AAEb;IACI,aAAa;IACb,sBAAsB;GACvB,iCAAiC;IAChC,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;AACjB;;;AAGA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA,SAAS;;AAET;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;GACG,aAAa;GACb,eAAe;GACf,6BAA6B;GAC7B,SAAS;GACT,gBAAgB;;AAEnB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,aAAa;GACd,sBAAsB;;;AAGzB;AACA;IACI,4CAA4C;IAC5C,WAAW;IACX,WAAW;AACf;;AAEA;IACI,WAAW;IACX,6CAA6C;AACjD;;AAEA,UAAU;AACV;IACI,eAAe;IACf,gBAAgB;AACpB","sourcesContent":["\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\n:root{\r\n    --white-color:#fff;\r\n    --steel-black:#333533;\r\n    --show-case-font: 'Roboto', sans-serif;\r\n    --unique-font: 'Poppins', sans-serif;\r\n}\r\nimg{\r\n    max-width: 100%;\r\n}\r\n\r\nbody{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: var(--show-case-font);\r\n    background-image: url(./img/steak.jpg);\r\n    background-repeat: no-repeat;\r\n   background-position: top;\r\n   background-size: cover;\r\n   background-attachment: fixed;\r\n   \r\n \r\n}\r\n\r\n\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\n#container{\r\n    padding: 20px 40px;\r\n    max-width: 1200px;\r\n    margin:  0 auto;\r\n    display: flex;\r\n   flex-direction: column;\r\n   gap:  7rem;\r\n\r\n    color: var(--white-color);\r\n}\r\n\r\n/* nav */\r\n\r\n#nav{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n   height: 3rem;\r\n}\r\n\r\n.navbar ul{\r\n    display: flex;\r\n    gap: 2.9rem;\r\n    align-items: center;\r\n    font-size: 1.3rem;\r\n    cursor: pointer;\r\n   \r\n}\r\n\r\n.navbar ul li{\r\n    padding: 9px;\r\n    overflow: hidden;\r\n}\r\n\r\n.navbar ul li:hover{\r\n    font-weight: bolder;\r\n   border-bottom: 2px solid  rgb(163, 161, 161);\r\n}\r\n\r\n.logo{\r\nfont-family: var(--unique-font);\r\nfont-size: 1.7rem;\r\n\r\n}\r\n\r\n\r\n/* showxase */\r\n\r\n.showcase{\r\n    display: flex;\r\n    flex-direction: column;\r\n   background-color: rgba(0,0,0,0.4);\r\n    text-align: center;\r\n    line-height: 0.40;\r\n    padding: 20px;\r\n}\r\n\r\n\r\n.showcase .intro{\r\n    font-size: 4rem;\r\n    line-height: 1;\r\n}\r\n\r\n/* menu */\r\n\r\n.steak{\r\n    max-width: 300px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.lg{\r\n   display: flex;\r\n   flex-wrap: wrap;\r\n   justify-content: space-around;\r\n   gap: 5rem;\r\n   margin-top: 40px;\r\n\r\n}\r\n.steak-name{\r\n    text-align: left;\r\n}\r\n\r\n.steak-name p{\r\n    color: rgb(163, 161, 161);\r\n}\r\n.sml{\r\n    display: flex;\r\n   flex-direction: column;\r\n  \r\n   \r\n}\r\n.underline{\r\n    border-bottom: 2px solid rgb(163, 161, 161) ;\r\n    height: 2px;\r\n    width: 6rem;\r\n}\r\n\r\n.steak-menu-log .underline{\r\n    width: 100%;\r\n    border-bottom: 3px dotted rgb(163, 161, 161) ;\r\n}\r\n\r\n/* about */\r\n.showcase .about{\r\n    font-size: 2rem;\r\n    line-height: 1.2;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const about=()=>{
   let  aboutOutput=`
   <h1>About us</h1>
   <p class="about">
         The best stake house in the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus laboriosam similique deserunt amet tempore iste quo explicabo sapiente
   </p>
     `

     return aboutOutput
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadDomElem=()=>{
    const container=document.getElementById('container');
    //nav bar
    const nav=createElem('nav');
    nav.setAttribute('id','nav')
    const logo=createElem('div')
    logo.setAttribute('class','logo');
    logo.textContent=`STEAkHOUSE`;
    const navBar=createElem('div')
    navBar.setAttribute('class','navbar');
    const ul=createElem('ul');
    const home=createElem('li')
    const menu=createElem('li')
    const about=createElem('li')
    home.setAttribute('id','home');
    menu.setAttribute('id','menu');
    about.setAttribute('id','about');
    home.textContent='Home'
    menu.textContent='Menu'
    about.textContent='About'
    ul.append(home,menu,about);
    navBar.append(ul)
    nav.append(logo,navBar);
    //showcase
    const showcase=createElem('div');
    showcase.setAttribute('class','showcase')
    showcase.innerHTML=`
    <p class="intro"> Premium  And Authentic <br> Steakhose</p> 
    `
   return container.append(nav,showcase)
   
};

const createElem=(elem)=>{
return document.createElement(elem)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadDomElem);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const home=()=>{
    let homeOutput=`
  
    
    <p class="intro"> Premium  And Authentic <br> Steakhose</p> 
          

      `
 
      return homeOutput
 };
 
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_steak6_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/steak6.jpg */ "./src/img/steak6.jpg");
/* harmony import */ var _img_steak1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/steak1.jpg */ "./src/img/steak1.jpg");
/* harmony import */ var _img_steak2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/steak2.jpg */ "./src/img/steak2.jpg");
/* harmony import */ var _img_steak3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/steak3.jpg */ "./src/img/steak3.jpg");
/* harmony import */ var _img_steak4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/steak4.jpg */ "./src/img/steak4.jpg");
/* harmony import */ var _img_steak5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/steak5.jpg */ "./src/img/steak5.jpg");








const menus=()=>{

      
    

   let menuOutput=`
   
                        <div class="steak-menu-log">
                        <h1>STEAK MENU</h1> 
                        <P>Come get the steak experience.......</P>
                        <div class="underline"></div>
                        </div>

                    <div class="steak-table">
                       
                            <div class="lg">
                                  <div class="sml">
                                       <img class="steak" src=${_img_steak1_jpg__WEBPACK_IMPORTED_MODULE_1__}  alt="steak">
                                       <div class="steak-name">
                                             <p>Dish Name: Lorem ipsum dolor sit.</p>
                                             <p>Price:$12</p>
                                             <div class="underline"></div>
                                       </div>
                                  </div>
                                  <div class="sml">
                                       <img class="steak"  src=${_img_steak2_jpg__WEBPACK_IMPORTED_MODULE_2__}  alt="steak">
                                       <div class="steak-name">
                                             <p>Dish Name: Lorem ipsum dolor sit.</p>
                                             <p>Price:$12</p>
                                             <div class="underline"></div>
                                       </div>
                                  </div>
                                  <div class="sml">
                                       <img class="steak"  src=${_img_steak3_jpg__WEBPACK_IMPORTED_MODULE_3__}  alt="steak">
                                       <div class="steak-name">
                                             <p>Dish Name: Lorem ipsum dolor sit.</p>
                                             <p>Price:$12</p>
                                             <div class="underline"></div>
                                       </div>
                                  </div>
                                  <div class="sml">
                                       <img class="steak"  src=${_img_steak4_jpg__WEBPACK_IMPORTED_MODULE_4__}  alt="steak">
                                       <div class="steak-name">
                                             <p>Dish Name: Lorem ipsum dolor sit.</p>
                                             <p>Price:$12</p>
                                             <div class="underline"></div>
                                       </div>
                                  </div>
                                  <div class="sml">
                                       <img class="steak"  src=${_img_steak5_jpg__WEBPACK_IMPORTED_MODULE_5__}  alt="steak">
                                       <div class="steak-name">
                                             <p>Dish Name: Lorem ipsum dolor sit.</p>
                                             <p>Price:$12</p>
                                             <div class="underline"></div>
                                       </div>
                                  </div>
                                  <div class="sml">
                                       <img class="steak"  src=${_img_steak6_jpg__WEBPACK_IMPORTED_MODULE_0__}  alt="steak">
                                       <div class="steak-name">
                                             <p>Dish Name: Lorem ipsum dolor sit.</p>
                                             <p>Price:$12</p>
                                             <div class="underline"></div>
                                       </div>
                                  </div>

                            </div> 
                            
                    </div>
                </div>
          
    `
    return  menuOutput;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menus);

/***/ }),

/***/ "./src/img/steak.jpg":
/*!***************************!*\
  !*** ./src/img/steak.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "steak.jpg";

/***/ }),

/***/ "./src/img/steak1.jpg":
/*!****************************!*\
  !*** ./src/img/steak1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "steak1.jpg";

/***/ }),

/***/ "./src/img/steak2.jpg":
/*!****************************!*\
  !*** ./src/img/steak2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "steak2.jpg";

/***/ }),

/***/ "./src/img/steak3.jpg":
/*!****************************!*\
  !*** ./src/img/steak3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "steak3.jpg";

/***/ }),

/***/ "./src/img/steak4.jpg":
/*!****************************!*\
  !*** ./src/img/steak4.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "steak4.jpg";

/***/ }),

/***/ "./src/img/steak5.jpg":
/*!****************************!*\
  !*** ./src/img/steak5.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "steak5.jpg";

/***/ }),

/***/ "./src/img/steak6.jpg":
/*!****************************!*\
  !*** ./src/img/steak6.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "steak6.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.js */ "./src/home.js");







const container=document.getElementById('container')


;(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
const showCase=document.querySelector('.showcase')

document.getElementById('home').addEventListener('click',()=>{
     showCase.innerHTML=(0,_home_js__WEBPACK_IMPORTED_MODULE_4__["default"])()
     
})

document.getElementById('menu').addEventListener('click',()=>{
   console.log(showCase)
     showCase.innerHTML=(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
     
  });
  
  document.getElementById('about').addEventListener('click',()=>{
     showCase.innerHTML=(0,_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
  });
})();

/******/ })()
;
//# sourceMappingURL=86d4e8b76e8646c61c32.js.map