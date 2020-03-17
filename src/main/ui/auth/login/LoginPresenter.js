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

  _redirectoHome() {
    location.href = "http://localhost:8080";
  }

  async onLogin() {
    event.preventDefault();

    const options = {
      method: "post",
      headers: new Headers({
        Authorization:
          "Basic " + btoa(`${this._data.username}:${this._data.password}`),
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };
    const response = await fetch("http://localhost:5000/login", options);
    if (response.ok) {
      const respData = await response.json();
      document.cookie = `token=${respData.token}`;
      this._redirectoHome();
    } else {
      throw "Username or password is incorrect.";
    }
  }
}
