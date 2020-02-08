import { TextBlock } from "./TextBlock";
import { Summary } from "./Summary";
import { TyperPresenter } from "./TyperPresenter";
import keyboardImg from "../../resources/img/keyboard.png";
import { I18n } from "../../locale/I18n";

import { Div } from "../core/Div";
import { Button } from "../core/Button";
import { Image } from "../core/Image";
import { ProgressBar } from "../util/ProgressBar";

export class Typer extends Div {
  constructor(text) {
    super("typer");
    this._presenter = new TyperPresenter(this, text);

    this._progressBar = new ProgressBar();
    this._textBlock = new TextBlock(this._presenter);
    this._summary = new Summary(this._presenter);

    this._init();
  }

  _buildImageSection() {
    let imageSection = new Div("image-section");
    let image = new Image("image");
    image.setSrc(keyboardImg);
    imageSection.add(image);
    return imageSection;
  }

  _buildBottomSection() {
    let bottomSection = new Div("bottom-section");
    this._resetButton = new Button("btn-reset");
    this._resetButton.setVisible(false);
    this._resetButton.setText(
      `<i class="fa fa-refresh"></i> ${I18n.getInstance().translate("reset")}`
    );
    bottomSection.add(this._resetButton);
    return bottomSection;
  }

  _init() {
    let imageSection = this._buildImageSection();
    let bottomSection = this._buildBottomSection();

    this.add(this._summary);
    this.add(imageSection);
    this.add(this._progressBar);
    this.add(this._textBlock);
    this.add(bottomSection);

    this.addListener("click", () => {
      this._textBlock.focus();
    });

    this._resetButton.addListener("click", () => {
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
      this._resetButton.setVisible(true);
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

  updateProgressBar(value) {
    // this._summary.updateProgressBar(value);
    this._progressBar.setValue(value);
  }

  focus() {
    this._textBlock.focus();
  }
}
