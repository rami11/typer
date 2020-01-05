import Typer from "./components/typer/Typer";
import LanguageChooser from "./components/locale/LanguageChooser";
import I18n from "./locale/I18n";

import GenerateTextService from "./service/GenerateTextService";

class Main {
  constructor() {
    this.service = new GenerateTextService();

    this._init();
  }

  _init() {
    this.service.exec(text => {
      this._showContent();
      new Typer(text);
      new LanguageChooser();

      // Footer
      this._populateFooter();
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
