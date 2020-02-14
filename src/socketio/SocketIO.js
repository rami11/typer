import { Div } from "../ui/core/Div";
import { Span } from "../ui/core/Span";
import { TyperProgressIndicator } from "../ui/typer/TyperProgressIndicator";

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
      let div = new Div();
      div.addClassName("block");

      for (let socketId in connected_sockets) {
        let socketBlock = new Div();
        socketBlock.addClassName("golden-block");
        socketBlock.add(
          new Span("", socketId === this._socket.id ? "Me" : socketId)
        );
        let progressBar = new TyperProgressIndicator();
        this._progressBarDict[socketId] = progressBar;
        socketBlock.add(progressBar);

        div.add(socketBlock);
      }
      let ccSection = document.querySelector("#connected-sockets");
      ccSection.innerHTML = "";
      ccSection.appendChild(div._self);
    });

    this._socket.on("progress", obj => {
      let progressBar = this._progressBarDict[obj.socketId];

      progressBar.setValue(
        obj.progressValue.completePercent,
        obj.progressValue.isSuccess
      );
    });
  }
}
