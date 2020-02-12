import { Div } from "./Div";

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

  setProgressColor(color) {
    this._progress._self.style.backgroundColor = color;
  }

  setValue(value) {
    this._progress._self.style.width = `${value}%`;
  }
}
