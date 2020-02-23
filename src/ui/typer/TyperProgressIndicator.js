import { Container } from "../core/Container";

export class TyperProgressIndicator extends Container {
  constructor() {
    super();

    this._completePercent = 0;
    this._init();
  }

  _init() {
    this.addClassName("typer-progress-indicator");
  }

  _buildProgressPercent(value, isSuccess) {
    let progress = new Container();
    progress.addClassName("progress");
    progress.addClassName(isSuccess ? "success" : "failure");
    progress.setWidth(`${value}%`);
    progress._self.animate([{ width: "0%" }, { width: `${value}%` }], 500);
    return progress;
  }

  setValue(completePercent, isSuccess) {
    let diffCompletePercent = completePercent - this._completePercent;
    this._completePercent = completePercent;

    const progress = this._buildProgressPercent(diffCompletePercent, isSuccess);
    this.add(progress);
  }
}
