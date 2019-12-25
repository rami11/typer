import TextBlock from "./TextBlock";

class Typer {
  constructor(text) {
    this.text = text;
    this.typeTextArea = document.querySelector("#text-area");
    this.textBlock = new TextBlock(text);
    this.resetButton = document.querySelector("#btn-reset");

    this._init();
  }

  _init() {
    this.resetButton.addEventListener("click", () => {
      location.reload();
    });

    this.typeTextArea.addEventListener("keyup", () => {
      this._onTextAreaValueChange();
    });
  }

  _onTextAreaValueChange() {
    let key = event.key;
    console.log("Key pressed:", key);

    if (key === "Backspace") {
      console.log("backspace key pressed!");
    } else {
      this._handleKeyPress(key);
    }
  }

  _handleKeyPress(key) {
    let currentChar = this.textBlock.getCurrentChar();

    if (this.textBlock.isLastCharReached()) {
      // game over
      this.typeTextArea.setAttribute("hidden", true);
      this.resetButton.removeAttribute("hidden");
    }

    if (key === currentChar) {
      this.textBlock.colorCharSuccess();
    } else {
      this.textBlock.colorCharFailure();
    }
  }
}

export default Typer;
