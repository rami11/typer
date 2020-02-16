import { Div } from "../core/Div";
import { Span } from "../core/Span";
import { TyperProgressIndicator } from "../typer/TyperProgressIndicator";

export class ConnectedClientsSection extends Div {
  constructor(socketId, connectedSockets) {
    super();

    this._progressBarDict = {};
    this._connectedSockets = connectedSockets;
    this._socketId = socketId;
    this._init();
  }

  _init() {
    this.setSpacing(true);

    for (let socketId in this._connectedSockets) {
      let socketBlock = new Div();
      socketBlock.setPadding(true);
      socketBlock.addClassName("block");
      socketBlock.add(new Span(socketId === this._socketId ? "Me" : socketId));
      let progressBar = new TyperProgressIndicator();
      this._progressBarDict[socketId] = progressBar;
      socketBlock.add(progressBar);

      this.add(socketBlock);
    }
  }

  updateProgressFor(socketId, completePercent, isSuccess) {
    let progressBar = this._progressBarDict[socketId];
    progressBar.setValue(completePercent, isSuccess);
  }
}
