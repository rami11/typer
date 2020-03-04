import { PasswordField } from "../../core/PasswordField";
import { Button } from "../../core/Button";
import { Container } from "../../core/Container";
import { I18n } from "../../../locale/I18n";
import { SignUpPresenter } from "./SignUpPresenter";
import { TextField } from "../../core/TextField";

export class SignUpBlock extends Container {
  constructor() {
    super();

    console.log("init signup block!");
    this._presenter = new SignUpPresenter();
    console.log("Finish init presenter!");

    this.addClassName("block-dark");
    this.setPadding(true);
    this.setSpacing(true);
    this.setAlignment("middle-center");
    this.setMaxWidth("400px");

    this._init();
  }

  _init() {
    this._form = document.createElement("form");
    this._form.method = "post";
    this._form.id = "form-signup";
    this._form.addEventListener("submit", () => this.onSignUp(this._data));

    const title = document.createElement("h2");
    title.innerHTML = I18n.t("signup");

    this._buildBanners();

    this._usernameField = new TextField("username");
    this._usernameField.setCaption(I18n.t("username"));
    this._usernameField.addListener("change", () => {
      this._presenter.setUsername(this._usernameField.value);
    });

    const passwordField = new PasswordField("password");
    passwordField.setCaption(I18n.t("password"));
    passwordField.addListener("change", () => {
      this._presenter.setPassword(passwordField.value);
    });

    const confirmPasswordField = new PasswordField("confirm-password");
    confirmPasswordField.setCaption(I18n.t("confirm_password"));
    confirmPasswordField.addListener("change", () => {
      // this._data.confirmPassword = confirmPasswordField.value;
      this._presenter.setConfirmPassword(confirmPasswordField.value);
    });

    const button = new Button();
    button.setType("submit");
    button.setWidth("100%");
    button.setText(I18n.t("signup"));
    button.setVerticalMargin(true);

    this._form.appendChild(title);
    this._form.appendChild(this._errorBanner);
    this._form.appendChild(this._successBanner);
    this._form.appendChild(this._usernameField._self);
    this._form.appendChild(passwordField._self);
    this._form.appendChild(confirmPasswordField._self);
    this._form.appendChild(button._self);

    this._self.appendChild(this._form);
  }

  async onSignUp(data) {
    try {
      event.preventDefault();

      this._presenter.isDataValid();

      const options = {
        method: "post",
        body: JSON.stringify(this._presenter.data),
        headers: {
          "Content-Type": "application/json"
        }
      };
      const response = await fetch("http://localhost:5000/signup", options);
      const respData = await response.text();
      console.log(respData);

      if (respData === "[ERROR]") {
        throw "Username already exists.";
      } else {
        this._successBanner.innerHTML = "Sccuess";
        this._errorBanner.setAttribute("hidden", true);
        this._successBanner.removeAttribute("hidden");
      }
    } catch (e) {
      console.log(e);

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
