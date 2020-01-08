import I18n from "../../locale/I18n";

class Summary {
  constructor(textBlock) {
    this.textBlock = textBlock;

    /* errors */
    let errorLabel = document.querySelector("#errors-label");
    errorLabel.innerHTML = I18n.getInstance().translate("errors");
    this.errorSpan = document.querySelector("#error-count");
    this.errorCount = 0;
    this.errorSpan.innerHTML = this.errorCount;

    /* accuracy */
    let accuracyLabel = document.querySelector("#accuracy-label");
    accuracyLabel.innerHTML = I18n.getInstance().translate("accuracy");
    this.accuracySpan = document.querySelector("#accuracy-value");
    this.accuracy = 100;
    this.accuracySpan.innerHTML = this.accuracy;

    /* speed */
    let speedLabel = document.querySelector("#speed-label");
    speedLabel.innerHTML = I18n.getInstance().translate("speed");
    this.speedSpan = document.querySelector("#speed");
    this.speedSpan.innerHTML = 0;
    this.initTime = this._timeNow();
  }

  _timeNow() {
    let timeNow = Date.now();
    return timeNow;
  }

  _calcSpeed() {
    let charCount = this.textBlock.charCount;
    let intervalSec = (this._timeNow() - this.initTime) / 1000;
    let speed = Math.ceil((charCount * 60) / intervalSec);

    return speed;
  }

  updateSpeed() {
    this.speedSpan.innerHTML = this._calcSpeed();
  }

  increaseErrorCount() {
    this.errorCount++;
    this.errorSpan.innerHTML = this.errorCount;
  }

  showAccuracyPercentage() {
    document.querySelector("#accuracy").removeAttribute("hidden");

    let textLength = this.textBlock.textLength;
    let charCount = this.textBlock.charCount;
    this.accuracy = Math.round((charCount / textLength) * 100);

    this.accuracySpan.innerHTML = this.accuracy;
  }
}

export default Summary;
