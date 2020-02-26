import { Container } from "../core/Container";
import { TextField } from "../core/TextField";
import { PasswordField } from "../core/PasswordField";
import { Button } from "../core/Button";

export class SignUpBlock extends Container {
  constructor() {
    super();

    this.addClassName("block");
    this.setPadding(true);
    this.setSpacing(true);
    this.setAlignment("middle-center");
    this.setMaxWidth("400px");

    fetch("http://localhost:5000/signup").then(response => {
      console.log(response);
    });
    this._init();
  }

  _init() {
    const form = document.createElement("form");
    form.id = "form-signup";
    form.addEventListener("submit", this.onSignUp);

    this._usernameField = new TextField();
    this._usernameField.setCaption("Username");

    const passwordField = new PasswordField();
    passwordField.setCaption("Password");

    const confirmPasswordField = new PasswordField();
    confirmPasswordField.setCaption("Confirm Password");

    const button = new Button();
    button.setType("submit");
    button.setWidth("100%");
    button.setText("Sign Up");
    button.setVerticalMargin(true);

    form.appendChild(this._usernameField._self);
    form.appendChild(passwordField._self);
    form.appendChild(confirmPasswordField._self);
    form.appendChild(button._self);

    this._self.appendChild(form);
  }

  onSignUp() {
    event.preventDefault();
    const options = {
      method: "post",
      body: JSON.stringify({
        username: "something",
        password: "something else"
      }),
      headers: {
        "Content-Type": "applicatoin/json"
      }
    };
    fetch("http://localhost:5000/signup", options).then(response => {
      console.log(response);
    });
    // fetch("http://localhost:5000/signup", { method: "post" }).then(response => {
    //   console.log(response);
    // });
  }

  focus() {
    this._usernameField.focus();
  }
}
