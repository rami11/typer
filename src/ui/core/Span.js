import { Container } from "./Container";

export class Span extends Container {
  constructor(id = "", text = "") {
    super("span", id);
    this.setText(text);
  }

  setText(text) {
    this._self.innerHTML = text;
  }
}
