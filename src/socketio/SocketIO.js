import { Div } from "../ui/core/Div";
import { Span } from "../ui/core/Span";

export class SocketIO {
  constructor() {
    // socket.io
    this._socket = io("http://localhost:5000");
    this._init();
  }

  _init() {
    this._socket.on("connect", () => {
      console.log("I'm connected", this._socket.id);
    });

    this._socket.on("message", connected_sockets => {
      let div = new Div();
      div.addClassName("block");
      let ccDiv = new Div("");
      ccDiv.add(new Span("", "Connected Clients"));
      ccDiv.addClassName("cyan-block");
      div.add(ccDiv);

      for (let socketId in connected_sockets) {
        if (socketId !== this._socket.id) {
          let socketBlock = new Div();
          socketBlock.addClassName("golden-block");
          socketBlock.add(new Span("", socketId));
          div.add(socketBlock);
        }
      }

      let csDiv = document.querySelector("#connected-sockets");
      csDiv.innerHTML = "";
      csDiv.appendChild(div._self);
    });
  }
}
