import Typer from "./components/typer/Typer";
import LanguageChooser from "./components/locale/LanguageChooser";
import I18n from "./locale/I18n";

import GenerateQuoteService from "./service/GenerateQuoteService";

class Main {
  constructor() {
    this.spinner = document.querySelector("#spinner");
    this.content = document.querySelector("#content");

    // Footer
    this._populateFooter();

    this._init();
  }

  _init() {
    new Typer(I18n.getInstance().generateText());
    new LanguageChooser();
    this._onContentLoaded();
  }

  _onContentLoaded() {
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
  console.log("before main");
  new Main();
  console.log("after main");
};
