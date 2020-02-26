import "./resources/theme/styles.scss";

import { GenerateTextService } from "./service/GenerateTextService";
import { Router } from "./router/Router";

import { AppToolbar } from "./ui/toolbar/AppToolbar";
import { LoginCard } from "./ui/auth/LoginCard";
import { SignUpBlock } from "./ui/auth/SignUpBlock";
import { Typer } from "./ui/typer/Typer";

class Main {
  constructor() {
    this._router = new Router();
    this.service = new GenerateTextService();
    this._typer;

    this._init();
  }

  _init() {
    const toolbar = new AppToolbar();
    const header = document.querySelector("header");
    header.appendChild(toolbar._self);

    // Main
    this._navigateToView();

    window.onhashchange = () => {
      this._navigateToView();
    };
  }

  _navigateToView() {
    const hash = location.hash;
    switch (hash) {
      case "#login":
        this._router._navigate(new LoginCard());
        break;
      case "#signup":
        const signUpCard = new SignUpBlock();
        this._router._navigate(signUpCard);
        signUpCard.focus();
        break;
      default:
        this.service
          .exec()
          .then(text => {
            const socket = io("http://localhost:5000");
            this._typer = new Typer(socket, text);
            this._router._navigate(this._typer);
            this._typer.focus();

            // Footer
            // this._populateFooter();
          })
          .catch(error => {
            console.error(error);
          });
    }
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
