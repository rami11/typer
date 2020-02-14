export class TyperPresenter {
  constructor(socket, text, typer) {
    this._socket = socket;
    this._typer = typer;
    this._text = text;

    this._errorCount = 0;
    this._charSuccessCount = 0;
    this._charTypedCount = 0;
    this._initTime = this._timeNow();
  }

  get text() {
    return this._text;
  }

  _timeNow() {
    let timeNow = Date.now();
    return timeNow;
  }

  _nextChar(isSuccess) {
    this._charTypedCount++;
    this._typer.nextChar(isSuccess);

    let completePercent = Math.ceil(
      (this._charTypedCount * 100) / this.text.quote.length
    );
    let progressValue = { completePercent, isSuccess };
    this._typer.broadcast(progressValue);
  }

  _increaseErrorCount() {
    this._typer.updateErrorSpan(++this._errorCount);
  }

  charPressSuccess() {
    this._charSuccessCount++;
    this._nextChar(true);
  }

  charPressFailure() {
    this._increaseErrorCount();
    this._nextChar(false);
  }

  updateSpeed() {
    let intervalSec = (this._timeNow() - this._initTime) / 1000;
    let speed = Math.ceil((this._charSuccessCount * 60) / intervalSec);

    this._typer.updateSpeedSpan(speed);
  }

  updateAccuracyPercentage() {
    let accuracy = Math.round(
      (this._charSuccessCount / this._charTypedCount) * 100
    );
    this._typer.updateAccuracySpan(accuracy);
  }
}
