import { Typer } from "./ui/typer/Typer";
import { LanguageChooser } from "./ui/locale/LanguageChooser";
import { GenerateTextService } from "./service/GenerateTextService";
import { SocketIO } from "./socketio/SocketIO";
import { ToolBar } from "./ui/core/ToolBar";
import "./resources/theme/styles.scss";
import { Span } from "./ui/core/Span";
import { Container } from "./ui/core/Container";
import { Button } from "./ui/core/Button";

class Main {
  constructor(socket) {
    this.service = new GenerateTextService();
    this._typer;
    this._socket = socket;

    this._init();
  }

  _init() {
    this.service
      .exec()
      .then(text => {
        let toolbar = this._buildToolBar();
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

  _buildToolBar() {
    let toolbar = new ToolBar();
    toolbar.addLeftElement(new LanguageChooser());

    return toolbar;
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
