import { ConnectedClientsSection } from "../ui/typer/ConnectedClientsSection";
import { Container } from "../ui/core/Container";

export class SocketIO extends Container {
  constructor(socket) {
    super();
    this._socket = socket;
    this._progressBarDict = {};
    this._init();
  }

  _init() {
    this._socket.on("connect", () => {
      console.log("I'm connected:", this._socket.id);
    });

    this._socket.on("message", connected_sockets => {
      this._connectedSocketsSection = new ConnectedClientsSection(
        this._socket.id,
        connected_sockets
      );
      this._connectedSocketsSection.setAlignment("middle-center");
      this.clear();
      this.add(this._connectedSocketsSection);
    });

    this._socket.on("progress", obj => {
      const socketId = obj.socketId;
      const completePercent = obj.progressValue.completePercent;
      const isSuccess = obj.progressValue.isSuccess;

      this._connectedSocketsSection.updateProgressFor(
        socketId,
        completePercent,
        isSuccess
      );
    });
  }
}
