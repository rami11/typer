import { Typer } from "./components/typer/Typer";
import { LanguageChooser } from "./components/locale/LanguageChooser";

import { GenerateTextService } from "./service/GenerateTextService";
import "../resources/theme/styles.css";

// __/\\\\\\\\\\\\\\\__/\\\________/\\\__/\\\\\\\\\\\\\____/\\\\\\\\\\\\\\\____/\\\\\\\\\_____
//  _\///////\\\/////__\///\\\____/\\\/__\/\\\/////////\\\_\/\\\///////////___/\\\///////\\\___
//   _______\/\\\_________\///\\\/\\\/____\/\\\_______\/\\\_\/\\\_____________\/\\\_____\/\\\___
//    _______\/\\\___________\///\\\/______\/\\\\\\\\\\\\\/__\/\\\\\\\\\\\_____\/\\\\\\\\\\\/____
//     _______\/\\\_____________\/\\\_______\/\\\/////////____\/\\\///////______\/\\\//////\\\____
//      _______\/\\\_____________\/\\\_______\/\\\_____________\/\\\_____________\/\\\____\//\\\___
//       _______\/\\\_____________\/\\\_______\/\\\_____________\/\\\_____________\/\\\_____\//\\\__
//        _______\/\\\_____________\/\\\_______\/\\\_____________\/\\\\\\\\\\\\\\\_\/\\\______\//\\\_
//         _______\///______________\///________\///______________\///////////////__\///________\///__

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
