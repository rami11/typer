import { Container } from "./Container";

export class Anchor extends Container {
  constructor() {
    super("a");
  }

  setHref(href) {
    this._self.href = href;
  }

  setText(text) {
    this._self.innerHTML = text;
  }
}
