import { LoginCard } from "../ui/auth/LoginCard";
import { SignUpCard } from "../ui/auth/SignUpCard";

export class Router {
  constructor() {
    // this._hashToView = {
    //   "/": {},
    //   "#login": new LoginCard(),
    //   "#signup": new SignUpCard()
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
