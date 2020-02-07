import { Typer } from "./ui/typer/Typer";
import { LanguageChooser } from "./ui/locale/LanguageChooser";
import { GenerateTextService } from "./service/GenerateTextService";
import { Div } from "./ui/core/Div";
import { Span } from "./ui/core/Span";

class Main {
  constructor() {
    this.service = new GenerateTextService();
    this._typer;

    this._init();
  }

  _init() {
    this.service
      .exec()
      .then(text => {
        this._showContent();
        this._typer = new Typer(text);
        new LanguageChooser();

        let main = document.querySelector("main");
        main.appendChild(this._typer._self);
        this._typer.focus();

        // Footer
        this._populateFooter();

        // socket.io
        const socket = io("http://localhost:5000");

        socket.on("connect", () => {
          console.log("I'm connected", socket.id);
        });

        socket.on("message", connected_sockets => {
          let div = new Div();
          div.addClassName("block");
          let ccDiv = new Div("");
          ccDiv.add(new Span("", "Connected Clients"));
          ccDiv.addClassName("cyan-block");
          div.add(ccDiv);

          for (let socketId in connected_sockets) {
            if (socketId !== socket.id) {
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
      })
      .catch(error => {
        console.error(error);
      });
  }

  _showContent() {
    this.spinner = document.querySelector("#spinner");
    this.content = document.querySelector("#content");
    this.spinner.setAttribute("hidden", true);
    this.content.removeAttribute("hidden");
  }

  _populateFooter() {
    let footer = document.querySelector("footer");
    let yearSpan = footer.querySelector("span");
    yearSpan.innerHTML = new Date().getFullYear();
  }
}

window.onload = () => {
  let main = new Main();
};
