import { Component } from "./Component";

export class Container extends Component {
  constructor(type = "div") {
    super(type);
  }

  add() {
    for (let i in arguments) {
      this._self.appendChild(arguments[i]._self);
    }
  }

  clear() {
    this._self.innerHTML = "";
  }
}
