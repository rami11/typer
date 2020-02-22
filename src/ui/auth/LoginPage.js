import { Container } from "../core/Container";
import { Button } from "../core/Button";
import { TextField } from "../core/TextField";
import { PasswordField } from "../core/PasswordField";

export class LoginPage extends Container {
  constructor() {
    super();
    this._init();
  }

  _init() {
    const usernameField = new TextField();
    usernameField.setCaption("Username");
    const passwordField = new PasswordField();
    passwordField.setCaption("Password");

    const button = new Button();
    button.setText("Login");

    this.add(usernameField);
    this.add(passwordField);
    this.add(button);
  }
}
