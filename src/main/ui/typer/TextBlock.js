import { Container } from "../core/Container";
import { Span } from "../core/Span";

export class TextBlock extends Container {
  constructor(presenter) {
    super();
    this.setId("text-block");
    this.setPadding(true);

    this._textSpans = [];
    this._text = presenter.text;
    this._charIndex = 0;

    this._init();
  }

  _init() {
    this._populateContent(this._text);
    this._underlineCurrentChar();
  }

  _populateContent(text) {
    let quote = text.quote;

    this.add(new Span("“"));
    let quoteSpan = new Span();
    quoteSpan.setId("quote");
    for (let i in quote) {
      let span = new Span(quote[i]);
      span.setId(`char-${i}`);
      quoteSpan.add(span);
      this._textSpans.push(span);
    }
    this.add(quoteSpan);
    this.add(new Span("” - "));

    let source = text.source;
    if (source && source.length > 0) {
      this.add(new Span(source));
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
    if (charSpan) {
      charSpan.addClassName(isSuccess ? "success" : "failure");
      charSpan.removeClassName("underline");
    }
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
}
