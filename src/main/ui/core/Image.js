import { Component } from "./Component";

export class Image extends Component {
  constructor() {
    super("img");
  }

  setSrc(src) {
    this._self.src = src;
  }
}
