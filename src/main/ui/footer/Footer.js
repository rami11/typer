import { Container } from "../core/Container";
import { Span } from "../core/Span";
import { LanguageChooser } from "../header/LanguageChooser";

export class Footer extends Container {
  constructor() {
    super();
    this.addClassName("footer");
    this._init();
  }

  _init() {
    const year = new Date().getFullYear();
    const span = new Span(`rsn © ${year}`);

    const languageChooser = new LanguageChooser();

    this.add(languageChooser);
    this.add(span);
  }
}
