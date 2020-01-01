import Typer from "./components/typer/Typer";
import LanguageChooser from "./components/locale/LanguageChooser";
import I18n from "./locale/I18n";

import GenerateQuoteService from "./service/GenerateQuoteService";

class Main {
  constructor() {
    // Theme
    this._attachTheme();

    // Footer
    this._populateFooter();

    this._init();
  }

  _init() {
    new Typer(I18n.getInstance().generateText());
    new LanguageChooser();
  }

  _attachTheme() {
    this.THEME = "theme";
    let app = document.querySelector("body");
    app.classList.add(this.THEME);
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
