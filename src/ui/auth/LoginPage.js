import { Container } from "../core/Container";
import { Span } from "../core/Span";

export class LoginPage extends Container {
  constructor() {
    super();
    this._init();
  }

  _init() {
    const span = new Span();
    span.setText("Login Page! Hooray!");
    this.add(span);
  }
}
