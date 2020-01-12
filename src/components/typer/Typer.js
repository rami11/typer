import { TextBlock } from "./TextBlock";
import { Summary } from "./Summary";
import { I18n } from "../../locale/I18n";
import { TyperPresenter } from "./TyperPresenter";

export class Typer {
  constructor(text) {
    this._self = document.querySelector("#typer");
    this._presenter = new TyperPresenter(this, text);

    this._textBlock = new TextBlock(this._presenter);
    this._summary = new Summary(this._presenter);

    /* reset button */
    let resetLabel = document.querySelector("#reset-label");
    resetLabel.innerHTML = I18n.getInstance().translate("reset");
    this._resetButton = document.querySelector("#btn-reset");

    this._init();
  }

  _init() {
    this._self.addEventListener("click", () => {
      this._textBlock.focus();
    });

    this._resetButton.addEventListener("click", () => {
      location.reload();
    });

    this._textBlock.addKeyPressListener(() => {
      let keyPressed = event.key;
      let currentChar = this._textBlock.getCurrentChar();

      if (keyPressed === currentChar) {
        this._presenter.charPressSuccess();
      } else {
        this._presenter.charPressFailure();
      }
    });
  }

  nextChar(isSuccess) {
    this._textBlock.nextChar(isSuccess);
    this._presenter.updateAccuracyPercentage();

    if (this._textBlock.isWordEndReached()) {
      this._presenter.updateSpeed();
    }
    if (this._textBlock.isTextEndReached()) {
      this._textBlock.disable();
      this._resetButton.removeAttribute("hidden");
      this._resetButton.focus();
    }
  }

  updateErrorSpan(errorCount) {
    this._summary.updateErrorSpan(errorCount);
  }

  updateSpeedSpan(speed) {
    this._summary.updateSpeedSpan(speed);
  }

  updateAccuracySpan(accuracy) {
    this._summary.updateAccuracySpan(accuracy);
  }
}
