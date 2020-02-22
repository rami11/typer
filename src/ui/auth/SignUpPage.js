import { Container } from "../core/Container";
import { Span } from "../core/Span";

export class SignUpPage extends Container {
  constructor() {
    super();
    this._init();
  }

  _init() {
    const span = new Span();
    span.setText("Sign Up Page! Hooray!");
    this.add(span);
  }
}
