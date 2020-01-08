class TextBlock {
  constructor(text) {
    this.self = document.querySelector("#text-block");
    this.charIndex = 0;
    this._charCount = 0; // charcters successfully typed
    this.text = text;

    this._init();
  }

  _init() {
    this.self.focus();
    this.setText(this.text);
    this._underlineCurrentChar();
  }

  _getCurrentCharSpan() {
    return document.querySelector(`#char-${this.charIndex}`);
  }

  _underlineCurrentChar() {
    let charSpan = this._getCurrentCharSpan();
    if (charSpan) {
      charSpan.style.textDecoration = "underline";
    }
  }

  _colorChar(isSuccess) {
    let charSpan = this._getCurrentCharSpan();
    if (charSpan) {
      charSpan.classList.add(isSuccess ? "success" : "failure");
      this.nextChar();
    }
  }

  isLastCharReached() {
    return this.charIndex === this.text.length - 1;
  }

  isWordEndReached() {
    let currentChar = this.getCurrentChar();
    return currentChar === " " || this.isLastCharReached();
  }

  addKeyPressListener(keyPressEvent = () => {}) {
    this.self.addEventListener("keypress", keyPressEvent);
  }

  get charCount() {
    return this._charCount;
  }

  setText(text) {
    let result = "";
    for (let i in text) {
      result += '<span id="char-' + i + '">' + text[i] + "</span>";
    }
    this.self.innerHTML = result;
  }

  getCurrentChar() {
    let charSpan = this._getCurrentCharSpan();
    if (charSpan) {
      return charSpan.innerHTML;
    }
  }

  nextChar() {
    let charSpan = this._getCurrentCharSpan();
    charSpan.style.textDecoration = "none";
    this.charIndex++;
    this._underlineCurrentChar();
  }

  charPressSuccess() {
    this._charCount++;
    this._colorChar(true);
  }

  charPressFailure() {
    this._colorChar(false);
  }

  disable() {
    this.self.removeAttribute("tabindex");
  }
}

export default TextBlock;
