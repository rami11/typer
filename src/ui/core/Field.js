import { Component } from "./Component";

export class Field extends Component {
  constructor(inputType) {
    super();
    this._init();
    this.addClassName("field");
    this.inputType = inputType;
  }

  set inputType(inputType) {
    this._input.type = inputType;
  }

  setCaption(caption) {
    this._label.innerHTML = caption;
    this._label.removeAttribute("hidden");
  }

  _init() {
    this._label = document.createElement("label");
    this._label.setAttribute("hiddent", true);
    this._input = document.createElement("input");
    this._input.style.width = "100%";

    this._self.appendChild(this._label);
    this._self.appendChild(document.createElement("br"));
    this._self.appendChild(this._input);
  }
}
