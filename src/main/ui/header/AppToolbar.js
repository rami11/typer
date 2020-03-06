import { Toolbar } from "../core/Toolbar";
import { LanguageChooser } from "./LanguageChooser";
import { Anchor } from "../core/Anchor";
import { Span } from "../core/Span";
import { I18n } from "../../locale/I18n";

export class AppToolbar extends Toolbar {
  constructor() {
    super();
  }

  _init() {
    super._init();

    // left side
    const home = this._buildAnchor(
      `<i class='fa fa-home'></i> ${I18n.t("home")}`,
      ""
    );

    this.addLeftElement(home);

    // right side
    this._login = this._buildAnchor(I18n.t("login"), "#login");
    this._signUp = this._buildAnchor(I18n.t("signup"), "#signup");

    // this.addRightElement(this._login);
    const span = new Span("rsn11");
    // set visible if user is logged in
    span.setVisibleKeepSpace(false);
    this.addRightElement(span);
    this.addRightElement(this._login);
    this.addRightElement(this._signUp);
    this.addRightElement(new LanguageChooser());
  }

  _buildAnchor(text, href) {
    const anchor = new Anchor();
    anchor.addClassName("block-primary");
    anchor.setHref(href);
    anchor.setText(text);

    return anchor;
  }
}
