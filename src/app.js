import { Typer } from "./ui/typer/Typer";
import { LanguageChooser } from "./ui/toolbar/LanguageChooser";
import { GenerateTextService } from "./service/GenerateTextService";
import { SocketIO } from "./socketio/SocketIO";
import { Toolbar } from "./ui/core/Toolbar";
import "./resources/theme/styles.scss";
import { Anchor } from "./ui/core/Anchor";
import { Span } from "./ui/core/Span";
import { AppToolbar } from "./ui/toolbar/AppToolbar";
import { Router } from "./router/Router";

class Main {
  constructor(socket) {
    this._router = new Router();
    this.service = new GenerateTextService();
    this._typer;
    this._socket = socket;

    this._init();
  }

  _init() {
    this.service
      .exec()
      .then(text => {
        // let toolbar = this._buildToolbar();
        let toolbar = new AppToolbar();
        let header = document.querySelector("header");
        header.appendChild(toolbar._self);

        this._typer = new Typer(this._socket, text);
        let main = document.querySelector("main");
        main.prepend(this._typer._self);

        // this._showContent();
        this._typer.focus();

        // Footer
        // this._populateFooter();
      })
      .catch(error => {
        console.error(error);
      });
  }

  _populateFooter() {
    let footer = document.querySelector("footer");
    let yearSpan = footer.querySelector("span");
    yearSpan.innerHTML = new Date().getFullYear();
  }
}

window.onload = () => {
  const socket = io("http://localhost:5000");
  new Main(socket);
  new SocketIO(socket);
};
