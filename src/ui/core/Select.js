import { Component } from "./Component";

export class Select extends Component {
  constructor() {
    super("select");
    this._options = [];
  }

  setName(name) {
    this._self.name = name;
  }

  onChange(event) {
    this.addListener("change", event);
  }

  get options() {
    return this._options;
  }

  addOption(option) {
    this._options.push(option);
    this._self.appendChild(option);
  }
}
