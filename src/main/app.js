import "./resources/theme/styles.scss";

import { GenerateTextService } from "./service/GenerateTextService";
import { Router } from "./router/Router";

import { AppToolbar } from "./ui/header/AppToolbar";
import { LoginBlock } from "./ui/auth/login/LoginBlock";
import { SignUpBlock } from "./ui/auth/signup/SignUpBlock";
import { Typer } from "./ui/typer/Typer";
import { Footer } from "./ui/footer/Footer";

import { apiUrl } from "../../conf";

class Main {
  constructor() {
    this._router = new Router();
    this.service = new GenerateTextService();

    this._init();
  }

  _init() {
    // Head
    const toolbar = new AppToolbar();
    const headerTag = document.querySelector("header");
    headerTag.appendChild(toolbar._self);

    // Main
    this._navigateToView();

    // Footer
    const footer = new Footer();
    const footerTab = document.querySelector("footer");
    footerTab.appendChild(footer._self);

    window.onhashchange = () => {
      this._navigateToView();
    };
  }

  _navigateToView() {
    const hash = location.hash;
    switch (hash) {
      case "#login":
        const loginBlock = new LoginBlock();
        this._router._navigate(loginBlock);
        loginBlock.focus();
        break;
      case "#signup":
        const signUpBlock = new SignUpBlock();
        this._router._navigate(signUpBlock);
        signUpBlock.focus();
        break;
      default:
        this._initTyper();
    }
  }

  async _initTyper() {
    try {
      const text = await this.service.exec();
      const socket = io(apiUrl);

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
