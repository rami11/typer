import { Container } from "./Container";

export class Button extends Container {
  constructor() {
    super("button");
  }

  setText(text) {
    this._self.innerHTML = text;
  }
}
