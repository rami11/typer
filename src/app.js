import "./resources/theme/styles.scss";

import { GenerateTextService } from "./service/GenerateTextService";
import { Router } from "./router/Router";
import { SocketIO } from "./socketio/SocketIO";

import { AppToolbar } from "./ui/toolbar/AppToolbar";
import { LoginPage } from "./ui/auth/LoginPage";
import { SignUpPage } from "./ui/auth/SignUpPage";
import { Typer } from "./ui/typer/Typer";

class Main {
  constructor(socket) {
    this._router = new Router();
    this.service = new GenerateTextService();
    this._typer;
    this._socket = socket;

    this._init();
  }

  _init() {
    this.service
      .exec()
      .then(text => {
        const toolbar = new AppToolbar();
        const header = document.querySelector("header");
        header.appendChild(toolbar._self);

        const hash = location.hash;
        switch (hash) {
          case "#login":
            this._router._navigate(new LoginPage());
            break;
          case "#signup":
            this._router._navigate(new SignUpPage());
            break;
          default:
            this._typer = new Typer(this._socket, text);
            const main = document.querySelector("main");
            main.prepend(this._typer._self);
            this._typer.focus();
        }

        // Footer
        // this._populateFooter();
      })
      .catch(error => {
        console.error(error);
      });
  }

  _populateFooter() {
    let footer = document.querySelector("footer");
    let yearSpan = footer.querySelector("span");
    yearSpan.innerHTML = new Date().getFullYear();
  }
}

window.onload = () => {
  const socket = io("http://localhost:5000");
  new Main(socket);
  new SocketIO(socket);
};
