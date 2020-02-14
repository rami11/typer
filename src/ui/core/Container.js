import { Component } from "./Component";

export class Container extends Component {
  constructor(type = "div", id) {
    super(type, id);
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
