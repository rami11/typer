import { Container } from "./Container";

export class Button extends Container {
  constructor(text) {
    super("button");
    this.addClassName("button");
    this.setText(text);
  }

  setType(type) {
    this._self.type = type;
  }

  setText(text) {
    this._self.innerHTML = text;
  }

  onClick(clickEvent = () => {}) {
    this.addListener("click", clickEvent);
  }
}
