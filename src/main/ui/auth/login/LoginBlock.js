import { Container } from "../../core/Container";
import { Button } from "../../core/Button";
import { TextField } from "../../core/TextField";
import { PasswordField } from "../../core/PasswordField";

import { I18n } from "../../../locale/I18n";
import { LoginPresenter } from "./LoginPresenter";

export class LoginBlock extends Container {
  constructor() {
    super();
    this._presenter = new LoginPresenter();

    this.addClassName("block-dark");
    this.setPadding(true);
    this.setSpacing(true);
    this.setAlignment("middle-center");
    this.setWidth("400px");

    this._init();
  }

  _init() {
    this._buildBanners();

    this._form = document.createElement("form");
    this._form.method = "post";
    this._form.id = "form-login";
    this._form.addEventListener("submit", () => {
      this._onLogin();
    });

    const title = document.createElement("h2");
    title.innerHTML = I18n.t("login");

    this._usernameField = new TextField();
    this._usernameField.setCaption("Username");
    this._usernameField.addListener("change", () => {
      this._presenter.setUsername(this._usernameField.value);
    });

    const passwordField = new PasswordField();
    passwordField._self.autocomplete = "current_password";
    passwordField.setCaption("Password");
    passwordField.addListener("change", () => {
      this._presenter.setPassword(passwordField.value);
    });

    const button = new Button();
    button.setText("Login");
    button.setWidth("100%");
    button.setVerticalMargin(true);

    this._form.appendChild(title);
    this._form.appendChild(this._errorBanner);
    this._form.appendChild(this._successBanner);
    this._form.appendChild(this._usernameField._self);
    this._form.appendChild(passwordField._self);
    this._form.appendChild(button._self);

    this._self.appendChild(this._form);
  }

  async _onLogin() {
    try {
      event.preventDefault();

      const options = {
        method: "post",
        body: JSON.stringify(this._presenter.data),
        headers: {
          "Content-Type": "application/json"
        }
      };
      const response = await fetch("http://localhost:5000/login", options);
      const respData = await response.json();
      console.log(respData);
      if (respData.isSuccess) {
        this._successBanner.innerHTML = "Sccuess";
        this._errorBanner.setAttribute("hidden", true);
        this._successBanner.removeAttribute("hidden");

        // redirect to home page
      } else {
        throw "Username or password is incorrect";
      }
    } catch (e) {
      this._errorBanner.innerHTML = e;
      this._successBanner.setAttribute("hidden", true);
      this._errorBanner.removeAttribute("hidden");
    }
  }

  _buildBanners() {
    this._errorBanner = document.createElement("div");
    this._errorBanner.classList.add("banner-error");
    this._errorBanner.setAttribute("hidden", true);

    this._successBanner = document.createElement("div");
    this._successBanner.classList.add("banner-success");
    this._successBanner.setAttribute("hidden", true);
  }

  focus() {
    this._usernameField.focus();
  }
}
