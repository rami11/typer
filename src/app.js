import { Typer } from "./ui/typer/Typer";
import { LanguageChooser } from "./ui/locale/LanguageChooser";
import { GenerateTextService } from "./service/GenerateTextService";
import { SocketIO } from "./socketio/SocketIO";

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
        this._showContent();
        this._typer = new Typer(this._socket, text);
        new LanguageChooser();

        let main = document.querySelector("main");
        main.appendChild(this._typer._self);
        this._typer.focus();

        // Footer
        this._populateFooter();
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
  const socket = io("http://localhost:5000");
  new Main(socket);
  new SocketIO(socket);
};
