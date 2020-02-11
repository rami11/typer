import { Component } from "./Component";

export class Container extends Component {
  constructor(type = "div", id) {
    super(type, id);

    this._components = [];
  }

  add() {
    for (let i in arguments) {
      this._components.push(arguments[i]);
      this._self.appendChild(arguments[i]._self);
    }
  }

  addAt(index, component) {
    this._components[index] = component;
    this._components.forEach(component =>
      this._self.appendChild(component._self)
    );
  }

  clear() {
    this._self.innerHTML = "";
  }
}
