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
    let result = "";
    for (let i in text) {
      result += '<span id="char-' + i + '">' + text[i] + "</span>";
    }
    document.querySelector("#text").innerHTML = result;
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
    return this._charIndex >= this._text.length;
  }

  isWordEndReached() {
    return this._text[this._charIndex] === " " || this.isTextEndReached();
  }

  getCurrentChar() {
    return this._text[this._charIndex];
  }

  focus() {
    this._self.focus();
  }

  disable() {
    this._self.removeAttribute("tabindex");
  }
}
