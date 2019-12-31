class Summary {
  constructor(textBlock) {
    this.textBlock = textBlock;

    /* errors */
    this.errorSpan = document.querySelector("#error-count");
    this.errorCount = 0;
    this.errorSpan.innerHTML = this.errorCount;

    /* speed */
    this.speedSpan = document.querySelector("#speed");
    this.speedSpan.innerHTML = 0;
    this.initTime = this._timeNow();
  }

  _timeNow() {
    let timeNow = Date.now();
    return timeNow;
  }

  _calcSpeed() {
    let charCount = this.textBlock.getCharSuccessTypedCount();
    let intervalSec = (this._timeNow() - this.initTime) / 10000;
    let speed = Math.ceil(charCount / intervalSec);

    return speed;
  }

  updateSpeed() {
    this.speedSpan.innerHTML = this._calcSpeed();
  }

  increaseErrorCount() {
    this.errorCount++;
    this.errorSpan.innerHTML = this.errorCount;
  }
}

export default Summary;
