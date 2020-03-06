export class SignUpPresenter {
  constructor(view) {
    this._view = view;

    this._data = {
      username: "",
      password: "",
      confirmPassword: ""
    };
  }

  get data() {
    return this._data;
  }

  setUsername(username) {
    this._data.username = username;
  }

  setPassword(password) {
    this._data.password = password;
  }

  setConfirmPassword(confirmPassword) {
    this._data.confirmPassword = confirmPassword;
  }

  isDataValid() {
    this.isUsernameValid();
    this.isValidPassword();
  }

  isUsernameValid() {
    const regex = /^[a-z]{3,}\w*$/;
    const username = this._data.username.trim();

    if (username.length === 0) {
      throw "Username is empty.";
    }
    if (!regex.test(username)) {
      throw "Username must begin with at least 3 small letters and not contain capital letters nor special characters.";
    }
  }

  isValidPassword() {
    const password = this._data.password;
    const confirmPassword = this._data.confirmPassword;
    if (password.length === 0) {
      throw "Password is empty.";
    }
    if (password !== confirmPassword) {
      throw "Password and confirm password must be identical.";
    }
    const regex = /(?=.*[0-9])/;
    if (!regex.test(password)) {
      throw "Password must contain at least one numeric character.";
    }
  }
}
