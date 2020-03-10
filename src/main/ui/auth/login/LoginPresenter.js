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

  async onLogin() {
    event.preventDefault();

    const options = {
      method: "post",
      body: JSON.stringify(this._data),
      headers: {
        "Content-Type": "application/json"
      }
    };
    console.log(this._data);
    const response = await fetch("http://localhost:5000/login", options);
    const respData = await response.json();
    console.log(respData);
    if (!respData.isSuccess) {
      throw "Username or password is incorrect";
    }
  }
}
