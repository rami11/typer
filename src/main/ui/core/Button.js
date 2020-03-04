import { Container } from "./Container";

export class Button extends Container {
  constructor() {
    super("button");
    this.addClassName("button");
  }

  setType(type) {
    this._self.type = type;
  }

  setText(text) {
    this._self.innerHTML = text;
  }
}
