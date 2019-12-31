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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _typer_Typer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typer/Typer */ \"./src/typer/Typer.js\");\n/* harmony import */ var _service_GenerateQuoteService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/GenerateQuoteService */ \"./src/service/GenerateQuoteService.js\");\n\n\n\nclass Main {\n  constructor() {\n    this.TEXTS = [\n      \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem risus, ut faucibus magna elementum ut. Quisque sit amet fermentum tellus. Aliquam aliquet sed eros sed mattis. Donec consequat velit ac hendrerit pulvinar. Nam et risus ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse et sapien nisi. Curabitur vitae velit a dui consectetur mattis sit amet at dui. Nullam ac euismod diam. Nam congue nec arcu sed fermentum. Nunc consequat nisi varius, dignissim libero ac, viverra massa.\"\n    ];\n\n    // Theme\n    let app = document.querySelector(\"body\");\n    app.classList.add(\"app\");\n\n    let footer = document.querySelector(\"footer\");\n    let yearSpan = footer.querySelector(\"span\");\n    yearSpan.innerHTML = new Date().getFullYear();\n\n    // let text = new GenerateQuoteService().exec().then(text => {\n    //   new Typer(text);\n    // });\n\n    new _typer_Typer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this._generateText());\n  }\n\n  _generateText() {\n    let i = Math.floor(Math.random() * Math.floor(this.TEXTS.length));\n    return this.TEXTS[i];\n  }\n}\n\nwindow.onload = () => {\n  new Main();\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/service/GenerateQuoteService.js":
/*!*********************************************!*\
  !*** ./src/service/GenerateQuoteService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GenerateQuoteService {\n  async exec() {\n    const URL = \"http://quotes.rest/qod.json?category=inspire\";\n    const response = await fetch(URL);\n    console.log(\"response:\", response);\n\n    const json = await response.json();\n\n    console.log(\"json:\", json);\n    let text = json.contents.quotes[0].quote;\n    console.log(\"text:\", text);\n\n    return text;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GenerateQuoteService);\n\n\n//# sourceURL=webpack:///./src/service/GenerateQuoteService.js?");

/***/ }),

/***/ "./src/typer/Summary.js":
/*!******************************!*\
  !*** ./src/typer/Summary.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Summary {\n  constructor(textBlock) {\n    this.textBlock = textBlock;\n\n    /* errors */\n    this.errorSpan = document.querySelector(\"#error-count\");\n    this.errorCount = 0;\n    this.errorSpan.innerHTML = this.errorCount;\n\n    /* speed */\n    this.speedSpan = document.querySelector(\"#speed\");\n    this.speedSpan.innerHTML = 0;\n    this.initTime = this._timeNow();\n  }\n\n  _timeNow() {\n    let timeNow = Date.now();\n    return timeNow;\n  }\n\n  _calcSpeed() {\n    let charCount = this.textBlock.getCharSuccessTypedCount();\n    let intervalSec = (this._timeNow() - this.initTime) / 10000;\n    let speed = Math.ceil(charCount / intervalSec);\n\n    return speed;\n  }\n\n  updateSpeed() {\n    this.speedSpan.innerHTML = this._calcSpeed();\n  }\n\n  increaseErrorCount() {\n    this.errorCount++;\n    this.errorSpan.innerHTML = this.errorCount;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Summary);\n\n\n//# sourceURL=webpack:///./src/typer/Summary.js?");

/***/ }),

/***/ "./src/typer/TextBlock.js":
/*!********************************!*\
  !*** ./src/typer/TextBlock.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass TextBlock {\n  constructor(text) {\n    this.self = document.querySelector(\"#text-block\");\n    this.charIndex = 0;\n    this.charCount = 0; // charcters successfully typed\n    this.text = text;\n\n    this._init();\n  }\n\n  _init() {\n    this.setText(this.text);\n    this._underlineCurrentChar();\n  }\n\n  _getCurrentCharSpan() {\n    return document.querySelector(`#char-${this.charIndex}`);\n  }\n\n  _underlineCurrentChar() {\n    let charSpan = this._getCurrentCharSpan();\n    if (charSpan) {\n      charSpan.style.textDecoration = \"underline\";\n    }\n  }\n\n  _colorChar(isSuccess) {\n    let charSpan = this._getCurrentCharSpan();\n    if (charSpan) {\n      charSpan.classList.add(isSuccess ? \"success\" : \"failure\");\n      this.nextChar();\n    }\n  }\n\n  isLastCharReached() {\n    return this.charIndex === this.text.length - 1;\n  }\n\n  isWordEndReached() {\n    let currentChar = this.getCurrentChar();\n    return currentChar === \" \" || this.isLastCharReached();\n  }\n\n  addKeyPressListener(keyPressEvent = () => {}) {\n    this.self.addEventListener(\"keypress\", keyPressEvent);\n  }\n\n  getCharSuccessTypedCount() {\n    return this.charCount;\n  }\n\n  setText(text) {\n    let result = \"\";\n    for (let i in text) {\n      result += '<span id=\"char-' + i + '\">' + text[i] + \"</span>\";\n    }\n    this.self.innerHTML = result;\n  }\n\n  getCurrentChar() {\n    let charSpan = this._getCurrentCharSpan();\n    if (charSpan) {\n      return charSpan.innerHTML;\n    }\n  }\n\n  nextChar() {\n    let charSpan = this._getCurrentCharSpan();\n    charSpan.style.textDecoration = \"none\";\n    this.charIndex++;\n    this._underlineCurrentChar();\n  }\n\n  charPressSuccess() {\n    this.charCount++;\n    this._colorChar(true);\n  }\n\n  charPressFailure() {\n    this._colorChar(false);\n  }\n\n  disable() {\n    this.self.removeAttribute(\"tabindex\");\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextBlock);\n\n\n//# sourceURL=webpack:///./src/typer/TextBlock.js?");

/***/ }),

/***/ "./src/typer/Typer.js":
/*!****************************!*\
  !*** ./src/typer/Typer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TextBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextBlock */ \"./src/typer/TextBlock.js\");\n/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary */ \"./src/typer/Summary.js\");\n\n\n\nclass Typer {\n  constructor(text) {\n    this.text = text;\n    this.typeTextArea = document.querySelector(\"#text-area\");\n    this.textBlock = new _TextBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"](text);\n    this.resetButton = document.querySelector(\"#btn-reset\");\n    this.summary = new _Summary__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.textBlock);\n\n    this._init();\n  }\n\n  _init() {\n    this.resetButton.addEventListener(\"click\", () => {\n      location.reload();\n    });\n\n    this.textBlock.addKeyPressListener(() => {\n      this._handleKeyPress();\n    });\n  }\n\n  _handleKeyPress() {\n    let key = event.key;\n\n    let currentChar = this.textBlock.getCurrentChar();\n\n    if (this.textBlock.isWordEndReached()) {\n      this.summary.updateSpeed();\n    }\n    if (this.textBlock.isLastCharReached()) {\n      // game over\n      this.textBlock.disable();\n      this.resetButton.removeAttribute(\"hidden\");\n      this.resetButton.focus();\n    }\n    if (key === currentChar) {\n      this.textBlock.charPressSuccess();\n    } else {\n      this.textBlock.charPressFailure();\n      this.summary.increaseErrorCount();\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Typer);\n\n\n//# sourceURL=webpack:///./src/typer/Typer.js?");

/***/ })

/******/ });