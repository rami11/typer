import { Component } from "./Component";

export class Container extends Component {
  constructor(type = "div") {
    super(type);
  }

  setSpacing(isSet) {
    if (isSet) {
      this.addClassName("has-spacing");
    } else {
      this.removeClassName("has-spacing");
    }
  }

  setAlignment(alignment) {
    switch (alignment) {
      case "middle-center":
        this.addClassName("align-middle-center");
    }
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
