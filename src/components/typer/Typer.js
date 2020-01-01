import TextBlock from "./TextBlock";
import Summary from "./Summary";
import I18n from "../../locale/I18n";

class Typer {
  constructor(text) {
    this.text = text;
    this.typeTextArea = document.querySelector("#text-area");
    this.textBlock = new TextBlock(text);

    /* reset button */
    let resetLabel = document.querySelector("#reset-label");
    resetLabel.innerHTML = I18n.getInstance().translate("reset");
    this.resetButton = document.querySelector("#btn-reset");
    this.summary = new Summary(this.textBlock);

    this._init();
  }

  _init() {
    this.resetButton.addEventListener("click", () => {
      location.reload();
    });

    this.textBlock.addKeyPressListener(() => {
      this._handleKeyPress();
    });
  }

  _handleKeyPress() {
    let key = event.key;

    let currentChar = this.textBlock.getCurrentChar();

    if (this.textBlock.isWordEndReached()) {
      this.summary.updateSpeed();
    }
    if (this.textBlock.isLastCharReached()) {
      // game over
      this.textBlock.disable();
      this.resetButton.removeAttribute("hidden");
      this.resetButton.focus();
    }
    if (key === currentChar) {
      this.textBlock.charPressSuccess();
    } else {
      this.textBlock.charPressFailure();
      this.summary.increaseErrorCount();
    }
  }
}

export default Typer;
