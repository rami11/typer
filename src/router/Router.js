import { LoginCard } from "../ui/auth/LoginCard";
import { SignUpBlock } from "../ui/auth/SignUpBlock";

export class Router {
  constructor() {
    // this._hashToView = {
    //   "/": {},
    //   "#login": new LoginCard(),
    //   "#signup": new SignUpBlock()
    // };
    // window.onhashchange = () => {
    //   const view = this._hashToView[location.hash];
    //   this._navigate(view);
    // };
  }

  _navigate(view) {
    let main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(view._self);
  }
}
