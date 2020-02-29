import "./resources/theme/styles.scss";

import { GenerateTextService } from "./service/GenerateTextService";
import { Router } from "./router/Router";

import { AppToolbar } from "./ui/header/AppToolbar";
import { LoginCard } from "./ui/auth/LoginCard";
import { SignUpBlock } from "./ui/auth/SignUpBlock";
import { Typer } from "./ui/typer/Typer";
import { Footer } from "./ui/footer/Footer";

class Main {
  constructor() {
    this._router = new Router();
    this.service = new GenerateTextService();
    this._typer;

    this._init();
  }

  _init() {
    const toolbar = new AppToolbar();
    const headerTag = document.querySelector("header");
    headerTag.appendChild(toolbar._self);

    // Main
    this._navigateToView();

    window.onhashchange = () => {
      this._navigateToView();
    };

    const footer = new Footer();
    const footerTab = document.querySelector("footer");
    footerTab.appendChild(footer._self);
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
        this._initTyper();
    }
  }

  async _initTyper() {
    try {
      const text = await this.service.exec();
      const socket = io("http://localhost:5000");

      this._typer = new Typer(socket, text);
      this._router._navigate(this._typer);
      this._typer.focus();
    } catch (error) {
      console.error(error);
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
