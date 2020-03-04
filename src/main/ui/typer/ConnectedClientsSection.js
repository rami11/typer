import { Container } from "../core/Container";
import { Span } from "../core/Span";
import { TyperProgressIndicator } from "./TyperProgressIndicator";

export class ConnectedClientsSection extends Container {
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
      let socketBlock = new Container();
      socketBlock.setPadding(true);
      socketBlock.addClassName("block-dark");
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
