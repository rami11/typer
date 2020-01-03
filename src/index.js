import Typer from "./components/typer/Typer";
import LanguageChooser from "./components/locale/LanguageChooser";
import I18n from "./locale/I18n";

import GenerateQuoteService from "./service/GenerateQuoteService";

class Main {
  constructor() {
    this._init();
  }

  _init() {
    this._showContent();
    new Typer(I18n.getInstance().generateText());
    new LanguageChooser();

    // Footer
    this._populateFooter();
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
