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
}
