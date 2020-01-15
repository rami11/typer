export class TextBlock {
  constructor(presenter) {
    this._self = document.querySelector("#text-block");

    this._text = presenter.text;
    this._charIndex = 0;

    this._init();
  }

  _init() {
    this._self.focus();
    this._populateContent(this._text);
    this._underlineCurrentChar();
  }

  _populateContent(text) {
    let quote = text.quote;

    let result = "";
    for (let i in quote) {
      result += '<span id="char-' + i + '">' + quote[i] + "</span>";
    }
    document.querySelector("#quote").innerHTML = result;

    //todo add source in a new span
    let source = text.source;
    if (source && source.length > 0) {
      document.querySelector("#source").innerHTML = ` - ${text.source}`;
    }
  }

  _underlineCurrentChar() {
    let charSpan = document.querySelector(`#char-${this._charIndex}`);

    if (charSpan) {
      charSpan.style.textDecoration = "underline";
    }
  }

  _getCurrentCharSpan() {
    return document.querySelector(`#char-${this._charIndex}`);
  }

  _colorCurrentChar(isSuccess) {
    let charSpan = this._getCurrentCharSpan();
    charSpan.classList.add(isSuccess ? "success" : "failure");
    charSpan.style.textDecoration = "none";
  }

  addKeyPressListener(keyPressEvent = () => {}) {
    this._self.addEventListener("keypress", keyPressEvent);
  }

  nextChar(isSuccess) {
    this._colorCurrentChar(isSuccess);
    this._charIndex++;
    this._underlineCurrentChar();
  }

  isTextEndReached() {
    return this._charIndex >= this._text.quote.length;
  }

  isWordEndReached() {
    return this._text.quote[this._charIndex] === " " || this.isTextEndReached();
  }

  getCurrentChar() {
    return this._text.quote[this._charIndex];
  }

  focus() {
    this._self.focus();
  }

  disable() {
    this._self.removeAttribute("tabindex");
  }
}
