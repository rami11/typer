import { Container } from "./Container";

export class Button extends Container {
  constructor(id = "") {
    super("button", id);
  }

  setText(text) {
    this._self.innerHTML = text;
  }
}
