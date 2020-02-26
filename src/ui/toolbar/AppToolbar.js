import { Toolbar } from "../core/Toolbar";
import { LanguageChooser } from "./LanguageChooser";
import { Anchor } from "../core/Anchor";
import { Button } from "../core/Button";
import { I18n } from "../../locale/I18n";
import { Icon } from "../core/Icon";

export class AppToolbar extends Toolbar {
  constructor() {
    super();
  }

  _init() {
    super._init();

    // left side
    const home = this._buildAnchor("<i class='fa fa-home'></i> Home", "");

    this.addLeftElement(home);
    this.addLeftElement(new LanguageChooser());

    // right side
    this._login = this._buildAnchor(
      I18n.getInstance().translate("login"),
      "#login"
    );
    this._signUp = this._buildAnchor(
      I18n.getInstance().translate("signup"),
      "#signup"
    );

    // this.addRightElement(this._login);
    this.addRightElement(this._signUp);
  }

  _buildAnchor(text, href) {
    const anchor = new Anchor();
    anchor.addClassName("block-primary");
    anchor.setHref(href);
    anchor.setText(text);

    return anchor;
  }
}
