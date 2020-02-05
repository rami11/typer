import { Component } from "./Component";

export class Image extends Component {
  constructor(id) {
    super("img", id);
  }

  setSrc(src) {
    this._self.src = src;
  }
}
