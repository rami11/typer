class TextBlock {
  constructor(text) {
    this.COLOR_SUCCESS = "#a5d6a7";
    this.COLOR_FAILURE = "#ef9a9a";

    this.self = document.querySelector("#text-block");
    this.charIndex = 0;
    this.text = text;
    this.setText(text);
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

  // _colorChar(colorCode) {
  //   let charSpan = this._getCurrentCharSpan();
  //   charSpan.style.color = colorCode;
  //   this.nextChar();
  // }

  _colorChar(isSuccess) {
    let charSpan = this._getCurrentCharSpan();
    charSpan.classList.add(isSuccess ? "success" : "failure");

    this.nextChar();
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

  isLastCharReached() {
    return this.charIndex === this.text.length - 1;
  }

  nextChar() {
    let charSpan = this._getCurrentCharSpan();
    charSpan.style.textDecoration = "none";
    this.charIndex++;
    this._underlineCurrentChar();
  }

  // colorCharSuccess() {
  //   this._colorChar(this.COLOR_SUCCESS);
  // }

  // colorCharFailure() {
  //   this._colorChar(this.COLOR_FAILURE);
  // }

  colorCharSuccess() {
    this._colorChar(true);
  }

  colorCharFailure() {
    this._colorChar(false);
  }
}

export default TextBlock;

// unColorChar() {
//   let charSpan = this._getCurrentCharSpan();
//   charSpan.style.color = "black";
//   this.charIndex--;
// }
