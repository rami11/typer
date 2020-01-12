import { Typer } from "./components/typer/Typer";
import { LanguageChooser } from "./components/locale/LanguageChooser";

import { GenerateTextService } from "./service/GenerateTextService";

class Main {
  constructor() {
    this.service = new GenerateTextService();

    this._init();
  }

  _init() {
    this.service
      .exec()
      .then(text => {
        this._showContent();
        new Typer(text);
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
};
