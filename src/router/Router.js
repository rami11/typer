import { LoginPage } from "../ui/auth/LoginPage";
import { SignUpPage } from "../ui/auth/SignUpPage";

export class Router {
  constructor() {
    this._hashToView = {
      "/": {},
      "#login": new LoginPage(),
      "#signup": new SignUpPage()
    };

    window.onhashchange = () => {
      const view = this._hashToView[location.hash];
      this._navigate(view);
    };
  }

  _navigate(view) {
    let main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(view._self);
  }
}
