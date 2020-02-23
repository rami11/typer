import { Container } from "../core/Container";
import { Button } from "../core/Button";
import { TextField } from "../core/TextField";
import { PasswordField } from "../core/PasswordField";

export class LoginCard extends Container {
  constructor() {
    super();

    this.addClassName("block");
    this.setPadding(true);
    this.setSpacing(true);
    this.setAlignment("middle-center");
    this.setWidth("50%");

    this._init();
  }

  _init() {
    const usernameField = new TextField();
    usernameField.setCaption("Username");
    const passwordField = new PasswordField();
    passwordField.setCaption("Password");

    const button = new Button();
    button.setText("Login");
    button.setWidth("100%");

    this.add(usernameField);
    this.add(passwordField);
    this.add(button);
  }
}
