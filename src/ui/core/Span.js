import { Container } from "./Container";

export class Span extends Container {
  constructor(text = "") {
    super("span");

    this.text = text;
  }

  set text(text) {
    this._self.innerHTML = text;
  }

  get text() {
    return this._text;
  }

  setText(text) {
    this.text = text;
  }
}
