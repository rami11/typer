export class SignUpPresenter {
  constructor(view) {
    this._view = view;

    this._data = {
      username: "",
      email: "",
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

  setEmail(email) {
    this._data.email = email;
  }

  setPassword(password) {
    this._data.password = password;
  }

  setConfirmPassword(confirmPassword) {
    this._data.confirmPassword = confirmPassword;
  }

  async onSignUp() {
    event.preventDefault();

    this._isDataValid();

    const options = {
      method: "post",
      body: JSON.stringify(this._data),
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await fetch("http://localhost:5000/signup", options);
    const respData = await response.json();
    console.log(respData);
    if (!respData.isSuccess) {
      throw "Username or Email already exist.";
    }
  }

  _isDataValid() {
    this._isUsernameValid();
    this._isEmailValid();
    this._isPasswordValid();
  }

  _isUsernameValid() {
    const regex = /^[a-z]{3,}\w*$/;
    const username = this._data.username.trim();

    if (username.length === 0) {
      throw "Username is empty.";
    }
    if (!regex.test(username)) {
      throw "Username must begin with at least 3 small letters and not contain capital letters nor special characters.";
    }
  }

  _isEmailValid() {
    const email = this._data.email.trim();
    if (email.length === 0) {
      throw "Email is empty.";
    }
  }

  _isPasswordValid() {
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
