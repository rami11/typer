import { Toolbar } from "../core/Toolbar";
import { LanguageChooser } from "./LanguageChooser";
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
    // logout
    this._logout = this._buildAnchor(I18n.t("logout"));
    this._logout.setVisible(document.cookie);
    this._logout.addListener("click", () => {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    });

    // login
    this._login = this._buildAnchor(I18n.t("login"), "#login");
    this._login.setVisible(!document.cookie);

    // sign up
    this._signUp = this._buildAnchor(I18n.t("signup"), "#signup");
    this._signUp.setVisible(!document.cookie);

    this.addRightElement(this._logout);
    this.addRightElement(this._login);
    this.addRightElement(this._signUp);
    this.addRightElement(new LanguageChooser());
  }

  _buildAnchor(text, href = "") {
    const anchor = new Anchor();
    anchor.addClassName("block-primary");
    anchor.setHref(href);
    anchor.setText(text);

    return anchor;
  }
}
