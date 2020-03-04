import { Component } from "./Component";

export class Field extends Component {
  constructor(inputType, name) {
    super();
    this.addClassName("field");
    this._name = name;
    this._value = "";

    this._init();
    this.inputType = inputType;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  set inputType(inputType) {
    this._input.type = inputType;
  }

  setCaption(caption) {
    this._label.innerHTML = caption;
    this._label.removeAttribute("hidden");
  }

  _init() {
    // label
    this._label = document.createElement("label");
    this._label.setAttribute("hidden", true);

    // input
    this._input = document.createElement("input");
    this._input.name = this._name;
    this._input.style.width = "100%";
    this._input.addEventListener("change", () => {
      this.value = event.target.value;
    });

    this._self.appendChild(this._label);
    this._self.appendChild(document.createElement("br"));
    this._self.appendChild(this._input);
  }

  focus() {
    this._input.focus();
  }
}
