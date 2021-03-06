import { TextBlock } from "./TextBlock";
import { Summary } from "./Summary";
import { Keyboard } from "./Keyboard";
import { TyperPresenter } from "./TyperPresenter";
import keyboardImg from "../../resources/img/keyboard.png";
import { I18n } from "../../locale/I18n";

import { Container } from "../core/Container";
import { Button } from "../core/Button";
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
    this._keyboard = new Keyboard();

    this._init();
  }

  _buildBottomSection() {
    let bottomSection = new Container();
    bottomSection.setId("bottom-section");
    this._resetButton = new Button();
    this._resetButton.setId("btn-reset");
    this._resetButton.setText(
      `<i class="fa fa-refresh"></i> ${I18n.t("reset")}`
    );
    this._resetButton.setVisibleKeepSpace(false);
    this._resetButton.addListener("click", () => {
      location.reload();
    });
    bottomSection.add(this._resetButton);
    return bottomSection;
  }

  _init() {
    const bottomSection = this._buildBottomSection();
    const socketio = new SocketIO(this._socket);

    this.add(
      this._summary,
      this._textBlock,
      this._keyboard,
      bottomSection,
      socketio
    );

    this.addListener("click", () => {
      if (this._keyboard._self.hasAttribute("tabIndex")) {
        this._keyboard.focus();
      }
    });

    this._keyboard.addListener("keydown", () => {
      const btn = this._keyboard.btnDict[event.code];
      if (btn) {
        btn.addClassName("btn-pressed");
      }
    });

    this._keyboard.addListener("keyup", () => {
      const btn = this._keyboard.btnDict[event.code];
      if (btn) {
        btn.removeClassName("btn-pressed");
      }
      if (this._textBlock.isTextEndReached()) {
        setTimeout(() => {
          this._keyboard.disable();
          this._resetButton.setVisibleKeepSpace(true);
          this._resetButton.focus();
        }, 100);
      }
    });

    this._keyboard.addListener("keypress", () => {
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
    this._keyboard.focus();
  }

  broadcast(progressValue) {
    this._socket.emit("progress", progressValue);
  }
}
