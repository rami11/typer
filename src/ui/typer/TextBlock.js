import { Div } from "../core/Div";
import { Span } from "../core/Span";

export class TextBlock extends Div {
  constructor(presenter) {
    super("text-block");

    this._textSpans = [];
    this._text = presenter.text;
    this._charIndex = 0;

    this._init();
  }

  _init() {
    this._populateContent(this._text);
    this._underlineCurrentChar();
    this.focus();
  }

  _populateContent(text) {
    let quote = text.quote;

    this.add(new Span("", "“"));
    let quoteSpan = new Span("quote");
    for (let i in quote) {
      let span = new Span(`char-${i}`, quote[i]);
      quoteSpan.add(span);
      this._textSpans.push(span);
    }
    this.add(quoteSpan);
    this.add(new Span("", "” - "));

    let source = text.source;
    if (source && source.length > 0) {
      this.add(new Span("source", source));
    }
  }

  _underlineCurrentChar() {
    let charSpan = this._textSpans[this._charIndex];
    if (charSpan) {
      charSpan.addClassName("underline");
    }
  }

  _getCurrentCharSpan() {
    return this._textSpans[this._charIndex];
  }

  _colorCurrentChar(isSuccess) {
    let charSpan = this._getCurrentCharSpan();
    charSpan.addClassName(isSuccess ? "success" : "failure");
    charSpan.removeClassName("underline");
  }

  addKeyPressListener(keyPressEvent = () => {}) {
    this.addListener("keypress", keyPressEvent);
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

  disable() {
    this._self.removeAttribute("tabindex");
  }
}
