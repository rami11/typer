import { TextBlock } from "./TextBlock";
import { Summary } from "./Summary";
import { TyperPresenter } from "./TyperPresenter";
import keyboardImg from "../../resources/img/keyboard.png";
import { I18n } from "../../locale/I18n";

import { Container } from "../core/Container";
import { Button } from "../core/Button";
import { Image } from "../core/Image";
import { SocketIO } from "../../socketio/SocketIO";

export class Typer extends Container {
  constructor(socket, text) {
    super();
    this.setId("typer");
    this.setSpacing(true);
    this.setMaxWidth("650px");
    this.setAlignment("middle-center");
    this._presenter = new TyperPresenter(socket, text, this);

    this._socket = socket;
    this._summary = new Summary(this._presenter);
    this._textBlock = new TextBlock(this._presenter);

    this._init();
  }

  _buildImageSection() {
    let imageSection = new Container();
    imageSection.setId("image-section");
    let image = new Image();
    image.setId("image");
    image.setSrc(keyboardImg);
    imageSection.add(image);
    return imageSection;
  }

  _buildBottomSection() {
    let bottomSection = new Container();
    bottomSection.setId("bottom-section");
    this._resetButton = new Button();
    this._resetButton.setId("btn-reset");
    this._resetButton.setText(
      `<i class="fa fa-refresh"></i> ${I18n.t("reset")}`
    );
    bottomSection.add(this._resetButton);
    return bottomSection;
  }

  _init() {
    const imageSection = this._buildImageSection();
    const bottomSection = this._buildBottomSection();
    const socketio = new SocketIO(this._socket);
    console.log(socketio);

    this.add(this._summary);
    this.add(imageSection);
    this.add(this._textBlock);
    this.add(bottomSection);
    this.add(socketio);

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
      this._resetButton.setVisibleKeepSpace(true);
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

  focus() {
    this._textBlock.focus();
  }

  broadcast(progressValue) {
    this._socket.emit("progress", progressValue);
  }
}
