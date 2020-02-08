import { Div } from "../core/Div";

export class ProgressBar extends Div {
  constructor() {
    super();
    this._progress = new Div();
    this._init();
  }

  _init() {
    this.addClassName("progress-bar");
    this._progress.addClassName("progress");
    this.add(this._progress);
  }

  setValue(value) {
    this._progress._self.style.width = `${value}%`;
  }
}
