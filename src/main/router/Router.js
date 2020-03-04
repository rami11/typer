export class Router {
  constructor() {}

  _navigate(view) {
    let main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(view._self);
  }
}
