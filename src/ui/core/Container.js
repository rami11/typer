import { Component } from "./Component";

export class Container extends Component {
  constructor(type = "div", id) {
    super(type, id);
  }

  add(component) {
    this._self.appendChild(component._self);
  }
}
