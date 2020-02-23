import { Container } from "../core/Container";
import { TextField } from "../core/TextField";
import { PasswordField } from "../core/PasswordField";
import { Button } from "../core/Button";

export class SignUpCard extends Container {
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

    const confirmPasswordField = new PasswordField();
    confirmPasswordField.setCaption("Confirm Password");

    const button = new Button();
    button.setText("Sign Up");

    this.add(usernameField);
    this.add(passwordField);
    this.add(confirmPasswordField);
    this.add(button);
  }
}