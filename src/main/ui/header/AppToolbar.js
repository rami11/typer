import { Toolbar } from "../core/Toolbar";
import { Anchor } from "../core/Anchor";
import { Container } from "../core/Container";
import { Span } from "../core/Span";

import { I18n } from "../../locale/I18n";

export class AppToolbar extends Toolbar {
  constructor() {
    super();
  }

  _init() {
    super._init();

    this._buildLeftSide();
    this._buildRightSide();
  }

  // LEFT SIDE

  _buildLeftSide() {
    const home = this._buildAnchor(
      `<i class='fa fa-home'></i> ${I18n.t("home")}`
    );

    this.addLeftElement(home);
  }

  // RIGHT SIDE

  _buildRightSide() {
    const token = document.cookie.token;
    const usernameSpan = new Span("guest");
    usernameSpan.addClassName("block-secondary");
    usernameSpan.setVisible(false);

    // logout
    this._logout = this._buildAnchor(I18n.t("logout"));
    this._logout.setVisible(false);
    this._logout.addListener("click", () => {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    });

    // login
    this._login = this._buildAnchor(I18n.t("login"), "#login");
    this._login.setVisible(false);

    // sign up
    this._signUp = this._buildAnchor(I18n.t("signup"), "#signup");
    this._signUp.setVisible(false);

    this.addRightElement(usernameSpan);
    this.addRightElement(this._logout);
    this.addRightElement(this._login);
    this.addRightElement(this._signUp);
  }

  _buildAnchor(text, href = "") {
    const anchor = new Anchor();
    anchor.addClassName("block-primary");
    anchor.setHref(href);
    anchor.setText(text);

    return anchor;
  }
}
