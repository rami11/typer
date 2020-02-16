import { ConnectedClientsSection } from "../ui/typer/ConnectedClientsSection";

export class SocketIO {
  constructor(socket) {
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
      let ccSection = document.querySelector("#connected-sockets");
      ccSection.innerHTML = "";
      ccSection.appendChild(this._connectedSocketsSection._self);
    });

    this._socket.on("progress", obj => {
      let socketId = obj.socketId;
      let completePercent = obj.progressValue.completePercent;
      let isSuccess = obj.progressValue.isSuccess;

      this._connectedSocketsSection.updateProgressFor(
        socketId,
        completePercent,
        isSuccess
      );
    });
  }
}
