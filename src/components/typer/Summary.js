import { I18n } from "../../locale/I18n";

export class Summary {
  constructor(presenter) {
    this._presenter = presenter;

    /* errors */
    let errorLabel = document.querySelector("#errors-label");
    errorLabel.innerHTML = I18n.getInstance().translate("errors");
    this._errorSpan = document.querySelector("#error-count");
    this._errorSpan.innerHTML = 0;

    /* accuracy */
    let accuracyLabel = document.querySelector("#accuracy-label");
    accuracyLabel.innerHTML = I18n.getInstance().translate("accuracy");
    this._accuracySpan = document.querySelector("#accuracy-value");
    this._accuracySpan.innerHTML = 100;

    /* speed */
    let speedLabel = document.querySelector("#speed-label");
    speedLabel.innerHTML = I18n.getInstance().translate("speed");
    this._speedSpan = document.querySelector("#speed");
    this._speedSpan.innerHTML = 0;
  }

  updateErrorSpan(errorCount) {
    this._errorSpan.innerHTML = errorCount;
  }

  updateAccuracySpan(accuracy) {
    this._accuracySpan.innerHTML = accuracy;
  }

  updateSpeedSpan(speed) {
    this._speedSpan.innerHTML = speed;
  }
}
