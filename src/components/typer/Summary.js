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

  updateSpeed() {
    let charSuccessCount = this.textBlock.charSuccessCount;
    let intervalSec = (this._timeNow() - this.initTime) / 1000;
    let speed = Math.ceil((charSuccessCount * 60) / intervalSec);

    this.speedSpan.innerHTML = speed;
  }

  increaseErrorCount() {
    this.errorCount++;
    this.errorSpan.innerHTML = this.errorCount;
  }

  updateAccuracyPercentage() {
    let charSuccessCount = this.textBlock.charSuccessCount;
    let charTypedCount = this.textBlock.charTypedCount;
    this.accuracy = Math.round((charSuccessCount / charTypedCount) * 100);

    this.accuracySpan.innerHTML = this.accuracy;
  }
}

export default Summary;
