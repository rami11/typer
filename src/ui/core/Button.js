import { Container } from "./Container";

export class Button extends Container {
  constructor() {
    super("button");
    this.addClassName("button");
  }

  setText(text) {
    this._self.innerHTML = text;
  }
}
