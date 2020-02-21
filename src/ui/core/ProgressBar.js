import { Container } from "./Container";

export class ProgressBar extends Container {
  constructor() {
    super();
    this._progress = new Container();
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
