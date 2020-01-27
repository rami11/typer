import { Typer } from "./ui/typer/Typer";
import { LanguageChooser } from "./ui/locale/LanguageChooser";
import { GenerateTextService } from "./service/GenerateTextService";

class Main {
  constructor() {
    this.service = new GenerateTextService();
    this.typer;

    this._init();
  }

  _init() {
    this.service
      .exec()
      .then(text => {
        this._showContent();
        this.typer = new Typer(text);
        new LanguageChooser();

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
  new Main();

  // // socket.io
  const socket = io("http://localhost:5000");

  socket.on("message", connected_sockets => {
    let lis = "<h4>Connected sockets:</h4>";
    for (let socketId in connected_sockets) {
      if (socketId !== socket.id) {
        lis += `<li>${socketId}</li>`;
      }
    }
    const ol = document.querySelector("#list");
    ol.innerHTML = lis;
  });
};
