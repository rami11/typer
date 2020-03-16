export class LoginPresenter {
  constructor(view) {
    this._view = view;

    this._data = {
      username: "",
      password: ""
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

  redirectoHome() {
    location.href = "http://localhost:8080";
  }

  async onLogin() {
    event.preventDefault();

    const options = {
      method: "post",
      body: JSON.stringify(this._data),
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await fetch("http://localhost:5000/login", options);
    if (response.ok) {
      const respData = await response.json();
    } else {
      throw "Username or password is incorrect.";
    }
  }
}
