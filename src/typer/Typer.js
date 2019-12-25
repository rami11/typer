import TextBlock from "./TextBlock";

class Typer {
  constructor(text) {
    this.text = text;
    this.typeTextArea = document.querySelector("#text-area");
    this.textBlock = new TextBlock(text);

    this._init();
  }

  _init() {
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
      document.write("Game Over!");
    } else {
      if (key === currentChar) {
        this.textBlock.colorCharSuccess();
      } else {
        this.textBlock.colorCharFailure();
      }
    }
  }
}

export default Typer;
