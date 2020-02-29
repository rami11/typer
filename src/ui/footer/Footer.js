import { Container } from "../core/Container";
import { Span } from "../core/Span";

export class Footer extends Container {
  constructor() {
    super();
    this._init();
  }

  _init() {
    const year = new Date().getFullYear();
    const span = new Span(`rsn © ${year}`);
    this.add(span);
  }
}
