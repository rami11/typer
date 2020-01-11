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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/locale/LanguageChooser.js":
/*!**************************************************!*\
  !*** ./src/components/locale/LanguageChooser.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _locale_I18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/I18n */ \"./src/locale/I18n.js\");\n\n\nclass LanguageChooser {\n  constructor() {\n    this.languageChooser = document.querySelector(\"#language-chooser select\");\n    this.form = document.querySelector(\"#form-lang\");\n\n    this._init();\n  }\n\n  _init() {\n    this._updateComponent();\n\n    this.languageChooser.addEventListener(\"change\", () => {\n      let languageCode = event.target.selectedOptions[0].value;\n      _locale_I18n__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInstance().setLanguageCode(languageCode);\n      this.form.submit();\n    });\n  }\n\n  _updateComponent() {\n    let languageCode = _locale_I18n__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInstance().getLanguageCode();\n    for (let option of this.languageChooser.options) {\n      if (option.value === languageCode) {\n        option.setAttribute(\"selected\", true);\n      } else {\n        option.removeAttribute(\"selected\");\n      }\n    }\n    let html = document.querySelector(\"html\");\n    html.setAttribute(\"lang\", languageCode);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageChooser);\n\n\n//# sourceURL=webpack:///./src/components/locale/LanguageChooser.js?");

/***/ }),

/***/ "./src/components/typer/Summary.js":
/*!*****************************************!*\
  !*** ./src/components/typer/Summary.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _locale_I18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/I18n */ \"./src/locale/I18n.js\");\n\n\nclass Summary {\n  constructor(textBlock) {\n    this.textBlock = textBlock;\n\n    /* errors */\n    let errorLabel = document.querySelector(\"#errors-label\");\n    errorLabel.innerHTML = _locale_I18n__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInstance().translate(\"errors\");\n    this.errorSpan = document.querySelector(\"#error-count\");\n    this.errorCount = 0;\n    this.errorSpan.innerHTML = this.errorCount;\n\n    /* accuracy */\n    let accuracyLabel = document.querySelector(\"#accuracy-label\");\n    accuracyLabel.innerHTML = _locale_I18n__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInstance().translate(\"accuracy\");\n    this.accuracySpan = document.querySelector(\"#accuracy-value\");\n    this.accuracy = 100;\n    this.accuracySpan.innerHTML = this.accuracy;\n\n    /* speed */\n    let speedLabel = document.querySelector(\"#speed-label\");\n    speedLabel.innerHTML = _locale_I18n__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInstance().translate(\"speed\");\n    this.speedSpan = document.querySelector(\"#speed\");\n    this.speedSpan.innerHTML = 0;\n    this.initTime = this._timeNow();\n  }\n\n  _timeNow() {\n    let timeNow = Date.now();\n    return timeNow;\n  }\n\n  updateSpeed() {\n    let charSuccessCount = this.textBlock.charSuccessCount;\n    let intervalSec = (this._timeNow() - this.initTime) / 1000;\n    let speed = Math.ceil((charSuccessCount * 60) / intervalSec);\n\n    this.speedSpan.innerHTML = speed;\n  }\n\n  increaseErrorCount() {\n    this.errorCount++;\n    this.errorSpan.innerHTML = this.errorCount;\n  }\n\n  updateAccuracyPercentage() {\n    let charSuccessCount = this.textBlock.charSuccessCount;\n    let charTypedCount = this.textBlock.charTypedCount;\n    this.accuracy = Math.round((charSuccessCount / charTypedCount) * 100);\n\n    this.accuracySpan.innerHTML = this.accuracy;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Summary);\n\n\n//# sourceURL=webpack:///./src/components/typer/Summary.js?");

/***/ }),

/***/ "./src/components/typer/TextBlock.js":
/*!*******************************************!*\
  !*** ./src/components/typer/TextBlock.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass TextBlock {\n  constructor(text) {\n    this.self = document.querySelector(\"#text-block\");\n    this.charIndex = 0;\n    this._charSuccessCount = 0;\n    this._charTypedCount = 0;\n    this.text = text;\n\n    this._init();\n  }\n\n  _init() {\n    this.self.focus();\n    this.setText(this.text);\n    this._underlineCurrentChar();\n\n    this.self.addEventListener(\"click\", () => {\n      console.log(\"event\", event);\n\n      this.self.focus();\n    });\n  }\n\n  _getCurrentCharSpan() {\n    return document.querySelector(`#char-${this.charIndex}`);\n  }\n\n  _underlineCurrentChar() {\n    let charSpan = this._getCurrentCharSpan();\n    if (charSpan) {\n      charSpan.style.textDecoration = \"underline\";\n    }\n  }\n\n  _colorChar(isSuccess) {\n    let charSpan = this._getCurrentCharSpan();\n    if (charSpan) {\n      charSpan.classList.add(isSuccess ? \"success\" : \"failure\");\n      this.nextChar();\n    }\n  }\n\n  isLastCharReached() {\n    return this.charIndex === this.text.length - 1;\n  }\n\n  isWordEndReached() {\n    let currentChar = this.getCurrentChar();\n    return currentChar === \" \" || this.isLastCharReached();\n  }\n\n  addKeyPressListener(keyPressEvent = () => {}) {\n    this.self.addEventListener(\"keypress\", keyPressEvent);\n  }\n\n  get charSuccessCount() {\n    return this._charSuccessCount;\n  }\n\n  get charTypedCount() {\n    return this._charTypedCount;\n  }\n\n  get textLength() {\n    return this.text.length;\n  }\n\n  setText(text) {\n    let result = \"\";\n    for (let i in text) {\n      result += '<span id=\"char-' + i + '\">' + text[i] + \"</span>\";\n    }\n    this.self.innerHTML = result;\n  }\n\n  getCurrentChar() {\n    let charSpan = this._getCurrentCharSpan();\n    if (charSpan) {\n      return charSpan.innerHTML;\n    }\n  }\n\n  nextChar() {\n    let charSpan = this._getCurrentCharSpan();\n    charSpan.style.textDecoration = \"none\";\n    this.charIndex++;\n    this._underlineCurrentChar();\n  }\n\n  charPressSuccess() {\n    this._charSuccessCount++;\n    this._charTypedCount++;\n    this._colorChar(true);\n  }\n\n  charPressFailure() {\n    this._charTypedCount++;\n    this._colorChar(false);\n  }\n\n  disable() {\n    this.self.removeAttribute(\"tabindex\");\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextBlock);\n\n\n//# sourceURL=webpack:///./src/components/typer/TextBlock.js?");

/***/ }),

/***/ "./src/components/typer/Typer.js":
/*!***************************************!*\
  !*** ./src/components/typer/Typer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TextBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextBlock */ \"./src/components/typer/TextBlock.js\");\n/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary */ \"./src/components/typer/Summary.js\");\n/* harmony import */ var _locale_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../locale/I18n */ \"./src/locale/I18n.js\");\n\n\n\n\nclass Typer {\n  constructor(text) {\n    this.text = text;\n    this.typeTextArea = document.querySelector(\"#text-area\");\n    this.textBlock = new _TextBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"](text);\n\n    /* reset button */\n    let resetLabel = document.querySelector(\"#reset-label\");\n    resetLabel.innerHTML = _locale_I18n__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getInstance().translate(\"reset\");\n    this.resetButton = document.querySelector(\"#btn-reset\");\n    this.summary = new _Summary__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.textBlock);\n\n    this._init();\n  }\n\n  _init() {\n    this.resetButton.addEventListener(\"click\", () => {\n      location.reload();\n    });\n\n    this.textBlock.addKeyPressListener(() => {\n      this._handleKeyPress();\n      this.summary.updateAccuracyPercentage();\n    });\n  }\n\n  _handleKeyPress() {\n    let key = event.key;\n\n    let currentChar = this.textBlock.getCurrentChar();\n    console.log(\"current char:\", currentChar);\n\n    if (this.textBlock.isWordEndReached()) {\n      this.summary.updateSpeed();\n    }\n    if (this.textBlock.isLastCharReached()) {\n      // game over\n      this.textBlock.disable();\n      this.resetButton.removeAttribute(\"hidden\");\n      this.resetButton.focus();\n    }\n    if (key === currentChar) {\n      this.textBlock.charPressSuccess();\n    } else {\n      this.textBlock.charPressFailure();\n      this.summary.increaseErrorCount();\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Typer);\n\n\n//# sourceURL=webpack:///./src/components/typer/Typer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_typer_Typer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/typer/Typer */ \"./src/components/typer/Typer.js\");\n/* harmony import */ var _components_locale_LanguageChooser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/locale/LanguageChooser */ \"./src/components/locale/LanguageChooser.js\");\n/* harmony import */ var _service_GenerateTextService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/GenerateTextService */ \"./src/service/GenerateTextService.js\");\n\n\n\n\n\nclass Main {\n  constructor() {\n    this.service = new _service_GenerateTextService__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n    this._init();\n  }\n\n  _init() {\n    this.service\n      .exec()\n      .then(text => {\n        this._showContent();\n        new _components_typer_Typer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](text);\n        new _components_locale_LanguageChooser__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n        // Footer\n        this._populateFooter();\n      })\n      .catch(error => {\n        console.error(error);\n      });\n  }\n\n  _showContent() {\n    this.spinner = document.querySelector(\"#spinner\");\n    this.content = document.querySelector(\"#content\");\n    this.spinner.setAttribute(\"hidden\", true);\n    this.content.removeAttribute(\"hidden\");\n  }\n\n  _populateFooter() {\n    let footer = document.querySelector(\"footer\");\n    let yearSpan = footer.querySelector(\"span\");\n    yearSpan.innerHTML = new Date().getFullYear();\n  }\n}\n\nwindow.onload = () => {\n  new Main();\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/locale/I18n.js":
/*!****************************!*\
  !*** ./src/locale/I18n.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strings */ \"./src/locale/strings.js\");\n/* harmony import */ var _texts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./texts */ \"./src/locale/texts.js\");\n\n\n\nclass I18n {\n  constructor() {\n    this.languageCode = \"en\";\n    let urlParams = new URLSearchParams(window.location.search);\n    let lang = urlParams.get(\"lang\");\n    if (lang) {\n      this.languageCode = lang;\n    }\n  }\n\n  static getInstance() {\n    if (!this.i18n) {\n      this.i18n = new I18n();\n    }\n    return this.i18n;\n  }\n\n  translate(key) {\n    return _strings__WEBPACK_IMPORTED_MODULE_0__[\"STRS\"][this.languageCode][key];\n  }\n\n  setLanguageCode(languageCode) {\n    this.languageCode = languageCode;\n  }\n\n  getLanguageCode() {\n    return this.languageCode;\n  }\n\n  generateText() {\n    let i = Math.floor(Math.random() * _texts__WEBPACK_IMPORTED_MODULE_1__[\"TEXTS\"][this.languageCode].length);\n    return _texts__WEBPACK_IMPORTED_MODULE_1__[\"TEXTS\"][this.languageCode][i];\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (I18n);\n\n\n//# sourceURL=webpack:///./src/locale/I18n.js?");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GenerateTextService {\n  constructor() {\n    this.baseUrl = \"http://localhost:5000\";\n\n    this.languageCode = \"en\";\n    let urlParams = new URLSearchParams(window.location.search);\n    let lang = urlParams.get(\"lang\");\n    if (lang) {\n      this.languageCode = lang;\n    }\n  }\n\n  async exec() {\n    const url = `${this.baseUrl}/text/random/${this.languageCode}`;\n    let response = await fetch(url);\n\n    if (response.ok) {\n      let text = await response.text();\n      return text;\n    } else {\n      throw `${response.status}: ${response.statusText}`;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GenerateTextService);\n\n\n//# sourceURL=webpack:///./src/service/GenerateTextService.js?");

/***/ })

/******/ });