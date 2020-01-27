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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./resources/theme/styles.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./resources/theme/styles.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".theme {\\n  background-image: linear-gradient(#bbdefb, #e1f5fe); }\\n  .theme .right {\\n    justify-self: end; }\\n  .theme .left {\\n    justify-self: start; }\\n  .theme .text-center {\\n    text-align: center; }\\n  .theme .spinner {\\n    text-align: center; }\\n    .theme .spinner i {\\n      max-width: 200px; }\\n  .theme .small-block {\\n    background-color: darkcyan;\\n    margin: 0 2px;\\n    border: 0.5px solid;\\n    border-radius: 2px;\\n    padding: 3px; }\\n  .theme #typer {\\n    text-align: center; }\\n    .theme #typer #image-section {\\n      max-width: 40em;\\n      margin: 0 auto; }\\n      .theme #typer #image-section img {\\n        width: 100%; }\\n    .theme #typer #summary-block {\\n      display: flex;\\n      max-width: 600px;\\n      color: white;\\n      background-color: #212121;\\n      font-size: 1.1em;\\n      margin: 8px auto;\\n      padding: 8px;\\n      border-radius: 2px;\\n      border: 1px solid; }\\n    .theme #typer #bottom-section {\\n      text-align: center; }\\n      .theme #typer #bottom-section #btn-reset {\\n        width: 10em;\\n        font-size: 1em;\\n        cursor: pointer;\\n        border-radius: 2px;\\n        font-family: Times; }\\n    .theme #typer #text-block {\\n      max-width: 600px;\\n      color: white;\\n      background-color: #212121;\\n      font-size: 1.1em;\\n      margin: 8px auto;\\n      padding: 8px;\\n      border-radius: 2px;\\n      border: 1px solid; }\\n      .theme #typer #text-block #quote .success {\\n        color: lightgreen; }\\n      .theme #typer #text-block #quote .failure {\\n        background-color: #f44336; }\\n  .theme header {\\n    display: grid;\\n    grid-template-areas: \\\"a a\\\"; }\\n  .theme footer {\\n    font-family: Arial, Helvetica, sans-serif;\\n    font-size: 0.7em;\\n    position: absolute;\\n    bottom: 8px;\\n    right: 8px;\\n    text-align: right; }\\n    @media (max-height: 400px) {\\n      .theme footer {\\n        display: none; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./resources/theme/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./resources/img/keyboard.png":
/*!************************************!*\
  !*** ./resources/img/keyboard.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a069a29cfd9d21e11be1bd235e569c69.png\");\n\n//# sourceURL=webpack:///./resources/img/keyboard.png?");

/***/ }),

/***/ "./resources/theme/styles.css":
/*!************************************!*\
  !*** ./resources/theme/styles.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./resources/theme/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./resources/theme/styles.css?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_typer_Typer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/typer/Typer */ \"./src/components/typer/Typer.js\");\n/* harmony import */ var _components_locale_LanguageChooser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/locale/LanguageChooser */ \"./src/components/locale/LanguageChooser.js\");\n/* harmony import */ var _service_GenerateTextService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/GenerateTextService */ \"./src/service/GenerateTextService.js\");\n/* harmony import */ var _resources_theme_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/theme/styles.css */ \"./resources/theme/styles.css\");\n/* harmony import */ var _resources_theme_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_theme_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n// __/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\__/\\\\\\________/\\\\\\__/\\\\\\\\\\\\\\\\\\\\\\\\\\____/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\____/\\\\\\\\\\\\\\\\\\_____\n//  _\\///////\\\\\\/////__\\///\\\\\\____/\\\\\\/__\\/\\\\\\/////////\\\\\\_\\/\\\\\\///////////___/\\\\\\///////\\\\\\___\n//   _______\\/\\\\\\_________\\///\\\\\\/\\\\\\/____\\/\\\\\\_______\\/\\\\\\_\\/\\\\\\_____________\\/\\\\\\_____\\/\\\\\\___\n//    _______\\/\\\\\\___________\\///\\\\\\/______\\/\\\\\\\\\\\\\\\\\\\\\\\\\\/__\\/\\\\\\\\\\\\\\\\\\\\\\_____\\/\\\\\\\\\\\\\\\\\\\\\\/____\n//     _______\\/\\\\\\_____________\\/\\\\\\_______\\/\\\\\\/////////____\\/\\\\\\///////______\\/\\\\\\//////\\\\\\____\n//      _______\\/\\\\\\_____________\\/\\\\\\_______\\/\\\\\\_____________\\/\\\\\\_____________\\/\\\\\\____\\//\\\\\\___\n//       _______\\/\\\\\\_____________\\/\\\\\\_______\\/\\\\\\_____________\\/\\\\\\_____________\\/\\\\\\_____\\//\\\\\\__\n//        _______\\/\\\\\\_____________\\/\\\\\\_______\\/\\\\\\_____________\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_\\/\\\\\\______\\//\\\\\\_\n//         _______\\///______________\\///________\\///______________\\///////////////__\\///________\\///__\n\nclass Main {\n  constructor() {\n    this.service = new _service_GenerateTextService__WEBPACK_IMPORTED_MODULE_2__[\"GenerateTextService\"]();\n    this.typer;\n\n    this._init();\n  }\n\n  _init() {\n    this.service\n      .exec()\n      .then(text => {\n        this._showContent();\n        this.typer = new _components_typer_Typer__WEBPACK_IMPORTED_MODULE_0__[\"Typer\"](text);\n        new _components_locale_LanguageChooser__WEBPACK_IMPORTED_MODULE_1__[\"LanguageChooser\"]();\n\n        // Footer\n        // this._populateFooter();\n      })\n      .catch(error => {\n        console.error(error);\n      });\n  }\n\n  _showContent() {\n    this.spinner = document.querySelector(\"#spinner\");\n    this.content = document.querySelector(\"#content\");\n    this.spinner.setAttribute(\"hidden\", true);\n    this.content.removeAttribute(\"hidden\");\n  }\n\n  _populateFooter() {\n    let footer = document.querySelector(\"footer\");\n    let yearSpan = footer.querySelector(\"span\");\n    yearSpan.innerHTML = new Date().getFullYear();\n  }\n}\n\nwindow.onload = () => {\n  new Main();\n\n  // socket.io\n  const socket = io(\"http://localhost:5000\");\n\n  socket.on(\"connect\", () => {\n    console.log(\"client connected!\", socket.id);\n    socket.send(socket.id);\n  });\n\n  socket.on(\"message\", connected_sockets => {\n    console.log(\"connected sockets:\", connected_sockets);\n    let lis = \"\";\n    for (let socket in connected_sockets) {\n      if (socket !== socket.id) {\n        lis += `<li>${socket}</li>`;\n      }\n    }\n    const ol = document.querySelector(\"#list\");\n    ol.innerHTML = lis;\n  });\n};\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/locale/LanguageChooser.js":
/*!**************************************************!*\
  !*** ./src/components/locale/LanguageChooser.js ***!
  \**************************************************/
/*! exports provided: LanguageChooser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LanguageChooser\", function() { return LanguageChooser; });\n/* harmony import */ var _locale_I18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/I18n */ \"./src/locale/I18n.js\");\n\n\nclass LanguageChooser {\n  constructor() {\n    this.languageChooser = document.querySelector(\"#language-chooser select\");\n    this.form = document.querySelector(\"#form-lang\");\n\n    this._init();\n  }\n\n  _init() {\n    this._updateComponent();\n\n    this.languageChooser.addEventListener(\"change\", () => {\n      let languageCode = event.target.selectedOptions[0].value;\n      _locale_I18n__WEBPACK_IMPORTED_MODULE_0__[\"I18n\"].getInstance().setLanguageCode(languageCode);\n      this.form.submit();\n    });\n  }\n\n  _updateComponent() {\n    let languageCode = _locale_I18n__WEBPACK_IMPORTED_MODULE_0__[\"I18n\"].getInstance().getLanguageCode();\n    for (let option of this.languageChooser.options) {\n      if (option.value === languageCode) {\n        option.setAttribute(\"selected\", true);\n      } else {\n        option.removeAttribute(\"selected\");\n      }\n    }\n    let html = document.querySelector(\"html\");\n    html.setAttribute(\"lang\", languageCode);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/locale/LanguageChooser.js?");

/***/ }),

/***/ "./src/components/typer/Summary.js":
/*!*****************************************!*\
  !*** ./src/components/typer/Summary.js ***!
  \*****************************************/
/*! exports provided: Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Summary\", function() { return Summary; });\n/* harmony import */ var _locale_I18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/I18n */ \"./src/locale/I18n.js\");\n\n\nclass Summary {\n  constructor(presenter) {\n    this._presenter = presenter;\n\n    /* errors */\n    let errorLabel = document.querySelector(\"#errors-label\");\n    errorLabel.innerHTML = _locale_I18n__WEBPACK_IMPORTED_MODULE_0__[\"I18n\"].getInstance().translate(\"errors\");\n    this._errorSpan = document.querySelector(\"#error-count\");\n    this._errorSpan.innerHTML = 0;\n\n    /* accuracy */\n    let accuracyLabel = document.querySelector(\"#accuracy-label\");\n    accuracyLabel.innerHTML = _locale_I18n__WEBPACK_IMPORTED_MODULE_0__[\"I18n\"].getInstance().translate(\"accuracy\");\n    this._accuracySpan = document.querySelector(\"#accuracy-value\");\n    this._accuracySpan.innerHTML = 100;\n\n    /* speed */\n    let speedLabel = document.querySelector(\"#speed-label\");\n    speedLabel.innerHTML = _locale_I18n__WEBPACK_IMPORTED_MODULE_0__[\"I18n\"].getInstance().translate(\"speed\");\n    this._speedSpan = document.querySelector(\"#speed\");\n    this._speedSpan.innerHTML = 0;\n  }\n\n  updateErrorSpan(errorCount) {\n    this._errorSpan.innerHTML = errorCount;\n  }\n\n  updateAccuracySpan(accuracy) {\n    this._accuracySpan.innerHTML = accuracy;\n  }\n\n  updateSpeedSpan(speed) {\n    this._speedSpan.innerHTML = speed;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/typer/Summary.js?");

/***/ }),

/***/ "./src/components/typer/TextBlock.js":
/*!*******************************************!*\
  !*** ./src/components/typer/TextBlock.js ***!
  \*******************************************/
/*! exports provided: TextBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextBlock\", function() { return TextBlock; });\nclass TextBlock {\n  constructor(presenter) {\n    this._self = document.querySelector(\"#text-block\");\n\n    this._text = presenter.text;\n    this._charIndex = 0;\n\n    this._init();\n  }\n\n  _init() {\n    this._self.focus();\n    this._populateContent(this._text);\n    this._underlineCurrentChar();\n  }\n\n  _populateContent(text) {\n    let quote = text.quote;\n\n    let result = \"\";\n    for (let i in quote) {\n      result += '<span id=\"char-' + i + '\">' + quote[i] + \"</span>\";\n    }\n    document.querySelector(\"#quote\").innerHTML = result;\n\n    let source = text.source;\n    if (source && source.length > 0) {\n      document.querySelector(\"#source\").innerHTML = text.source;\n    }\n  }\n\n  _underlineCurrentChar() {\n    let charSpan = document.querySelector(`#char-${this._charIndex}`);\n\n    if (charSpan) {\n      charSpan.style.textDecoration = \"underline\";\n    }\n  }\n\n  _getCurrentCharSpan() {\n    return document.querySelector(`#char-${this._charIndex}`);\n  }\n\n  _colorCurrentChar(isSuccess) {\n    let charSpan = this._getCurrentCharSpan();\n    charSpan.classList.add(isSuccess ? \"success\" : \"failure\");\n    charSpan.style.textDecoration = \"none\";\n  }\n\n  addKeyPressListener(keyPressEvent = () => {}) {\n    this._self.addEventListener(\"keypress\", keyPressEvent);\n  }\n\n  nextChar(isSuccess) {\n    this._colorCurrentChar(isSuccess);\n    this._charIndex++;\n    this._underlineCurrentChar();\n  }\n\n  isTextEndReached() {\n    return this._charIndex >= this._text.quote.length;\n  }\n\n  isWordEndReached() {\n    return this._text.quote[this._charIndex] === \" \" || this.isTextEndReached();\n  }\n\n  getCurrentChar() {\n    return this._text.quote[this._charIndex];\n  }\n\n  focus() {\n    this._self.focus();\n  }\n\n  disable() {\n    this._self.removeAttribute(\"tabindex\");\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/typer/TextBlock.js?");

/***/ }),

/***/ "./src/components/typer/Typer.js":
/*!***************************************!*\
  !*** ./src/components/typer/Typer.js ***!
  \***************************************/
/*! exports provided: Typer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Typer\", function() { return Typer; });\n/* harmony import */ var _TextBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextBlock */ \"./src/components/typer/TextBlock.js\");\n/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary */ \"./src/components/typer/Summary.js\");\n/* harmony import */ var _locale_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../locale/I18n */ \"./src/locale/I18n.js\");\n/* harmony import */ var _TyperPresenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TyperPresenter */ \"./src/components/typer/TyperPresenter.js\");\n/* harmony import */ var _resources_img_keyboard_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../resources/img/keyboard.png */ \"./resources/img/keyboard.png\");\n\n\n\n\n\n\nclass Typer {\n  constructor(text) {\n    this._self = document.querySelector(\"#typer\");\n    this._presenter = new _TyperPresenter__WEBPACK_IMPORTED_MODULE_3__[\"TyperPresenter\"](this, text);\n\n    this._textBlock = new _TextBlock__WEBPACK_IMPORTED_MODULE_0__[\"TextBlock\"](this._presenter);\n    this._summary = new _Summary__WEBPACK_IMPORTED_MODULE_1__[\"Summary\"](this._presenter);\n\n    /* img */\n    let image = document.querySelector(\"#image\");\n    image.src = _resources_img_keyboard_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n\n    /* reset button */\n    let resetLabel = document.querySelector(\"#reset-label\");\n    resetLabel.innerHTML = _locale_I18n__WEBPACK_IMPORTED_MODULE_2__[\"I18n\"].getInstance().translate(\"reset\");\n    this._resetButton = document.querySelector(\"#btn-reset\");\n\n    this._init();\n  }\n\n  _init() {\n    this._self.addEventListener(\"click\", () => {\n      this._textBlock.focus();\n    });\n\n    this._resetButton.addEventListener(\"click\", () => {\n      location.reload();\n    });\n\n    this._textBlock.addKeyPressListener(() => {\n      let keyPressed = event.key;\n      let currentChar = this._textBlock.getCurrentChar();\n\n      // console.log(\"Emitting key pressed!\", event.key);\n      // socket.emit(\"key pressed\", event.key);\n\n      if (keyPressed === currentChar) {\n        this._presenter.charPressSuccess();\n      } else {\n        this._presenter.charPressFailure();\n      }\n    });\n  }\n\n  nextChar(isSuccess) {\n    this._textBlock.nextChar(isSuccess);\n    this._presenter.updateAccuracyPercentage();\n\n    if (this._textBlock.isWordEndReached()) {\n      this._presenter.updateSpeed();\n    }\n    if (this._textBlock.isTextEndReached()) {\n      this._textBlock.disable();\n      this._resetButton.removeAttribute(\"hidden\");\n      this._resetButton.focus();\n    }\n  }\n\n  updateErrorSpan(errorCount) {\n    this._summary.updateErrorSpan(errorCount);\n  }\n\n  updateSpeedSpan(speed) {\n    this._summary.updateSpeedSpan(speed);\n  }\n\n  updateAccuracySpan(accuracy) {\n    this._summary.updateAccuracySpan(accuracy);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/typer/Typer.js?");

/***/ }),

/***/ "./src/components/typer/TyperPresenter.js":
/*!************************************************!*\
  !*** ./src/components/typer/TyperPresenter.js ***!
  \************************************************/
/*! exports provided: TyperPresenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TyperPresenter\", function() { return TyperPresenter; });\nclass TyperPresenter {\n  constructor(typer, text) {\n    this._typer = typer;\n    this._text = text;\n\n    this._errorCount = 0;\n    this._charSuccessCount = 0;\n    this._charTypedCount = 0;\n    this._initTime = this._timeNow();\n  }\n\n  get text() {\n    return this._text;\n  }\n\n  _timeNow() {\n    let timeNow = Date.now();\n    return timeNow;\n  }\n\n  _nextChar(isSuccess) {\n    this._typer.nextChar(isSuccess);\n  }\n\n  _increaseErrorCount() {\n    this._typer.updateErrorSpan(++this._errorCount);\n  }\n\n  charPressSuccess() {\n    this._charSuccessCount++;\n    this._charTypedCount++;\n    this._nextChar(true);\n  }\n\n  charPressFailure() {\n    this._charTypedCount++;\n    this._increaseErrorCount();\n    this._nextChar(false);\n  }\n\n  updateSpeed() {\n    let intervalSec = (this._timeNow() - this._initTime) / 1000;\n    let speed = Math.ceil((this._charSuccessCount * 60) / intervalSec);\n\n    this._typer.updateSpeedSpan(speed);\n  }\n\n  updateAccuracyPercentage() {\n    let accuracy = Math.round(\n      (this._charSuccessCount / this._charTypedCount) * 100\n    );\n    this._typer.updateAccuracySpan(accuracy);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/typer/TyperPresenter.js?");

/***/ }),

/***/ "./src/locale/I18n.js":
/*!****************************!*\
  !*** ./src/locale/I18n.js ***!
  \****************************/
/*! exports provided: I18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"I18n\", function() { return I18n; });\n/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strings */ \"./src/locale/strings.js\");\n/* harmony import */ var _texts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./texts */ \"./src/locale/texts.js\");\n\n\n\nclass I18n {\n  constructor() {\n    this.languageCode = \"en\";\n    let urlParams = new URLSearchParams(window.location.search);\n    let lang = urlParams.get(\"lang\");\n    if (lang) {\n      this.languageCode = lang;\n    }\n  }\n\n  static getInstance() {\n    if (!this.i18n) {\n      this.i18n = new I18n();\n    }\n    return this.i18n;\n  }\n\n  translate(key) {\n    return _strings__WEBPACK_IMPORTED_MODULE_0__[\"STRS\"][this.languageCode][key];\n  }\n\n  setLanguageCode(languageCode) {\n    this.languageCode = languageCode;\n  }\n\n  getLanguageCode() {\n    return this.languageCode;\n  }\n\n  generateText() {\n    let i = Math.floor(Math.random() * _texts__WEBPACK_IMPORTED_MODULE_1__[\"TEXTS\"][this.languageCode].length);\n    return _texts__WEBPACK_IMPORTED_MODULE_1__[\"TEXTS\"][this.languageCode][i];\n  }\n}\n\n\n//# sourceURL=webpack:///./src/locale/I18n.js?");

/***/ }),

/***/ "./src/locale/strings.js":
/*!*******************************!*\
  !*** ./src/locale/strings.js ***!
  \*******************************/
/*! exports provided: STRS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STRS\", function() { return STRS; });\nconst STRS = {\n  en: {\n    errors: \"Errors\",\n    accuracy: \"Accuracy\",\n    speed: \"Speed\",\n    reset: \"Reset\"\n  },\n  fr: {\n    errors: \"Erreurs\",\n    accuracy: \"Précision\",\n    speed: \"Vitesse\",\n    reset: \"Réinitialiser\"\n  }\n};\n\n\n//# sourceURL=webpack:///./src/locale/strings.js?");

/***/ }),

/***/ "./src/locale/texts.js":
/*!*****************************!*\
  !*** ./src/locale/texts.js ***!
  \*****************************/
/*! exports provided: TEXTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXTS\", function() { return TEXTS; });\nconst TEXTS = {\n  en: [\"Short text.\", \"Here is another text in english.\", \"Hello, world!\"],\n  fr: [\"Un texte francais.\", \"C'est un autre texte.\"]\n};\n\n\n//# sourceURL=webpack:///./src/locale/texts.js?");

/***/ }),

/***/ "./src/service/GenerateTextService.js":
/*!********************************************!*\
  !*** ./src/service/GenerateTextService.js ***!
  \********************************************/
/*! exports provided: GenerateTextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GenerateTextService\", function() { return GenerateTextService; });\nclass GenerateTextService {\n  constructor() {\n    this.baseUrl = \"http://localhost:5000\";\n    this.languageCode = \"en\";\n\n    let urlParams = new URLSearchParams(window.location.search);\n    let lang = urlParams.get(\"lang\");\n    if (lang) {\n      this.languageCode = lang;\n    }\n  }\n\n  async exec() {\n    const url = `${this.baseUrl}/text/random/${this.languageCode}`;\n    let response = await fetch(url);\n\n    if (response.ok) {\n      let text = await response.json();\n      return text;\n    } else {\n      throw `${response.status}: ${response.statusText}`;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/service/GenerateTextService.js?");

/***/ })

/******/ });