import Typer from "./typer/Typer";
import GenerateQuoteService from "./service/GenerateQuoteService";
import I18n from "./locale/I18n";

class Main {
  constructor() {
    // Theme
    this._attachTheme();

    // I18n
    this.languageChooser = document.querySelector("#language-chooser select");

    // Footer
    this._populateFooter();

    this._init();
  }

  _init() {
    new Typer(I18n.getInstance().generateText());

    let languageCode = I18n.getInstance().getLanguageCode();
    console.log("in init language code:", languageCode);

    for (let option of this.languageChooser.options) {
      if (option.value === languageCode) {
        option.setAttribute("selected", true);
      } else {
        option.removeAttribute("selected");
      }
    }
    let html = document.querySelector("html");
    html.setAttribute("lang", this.language);

    this.languageChooser.addEventListener("change", () => {
      let locale = event.target.selectedOptions[0].value;
      let html = document.querySelector("html");
      html.setAttribute("lang", locale);

      location.reload();
      console.log("changed!", locale);
    });
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
