export class Component {
  constructor(type = "div", id = "") {
    this._self = document.createElement(type);
    this._self.id = id;
  }

  setId(id) {
    this._self.id = id;
  }

  addListener(type, event = () => {}) {
    this._self.addEventListener(type, event);
  }

  addClassName(className) {
    this._self.classList.add(className);
  }

  removeClassName(className) {
    this._self.classList.remove(className);
  }

  focus() {
    this._self.setAttribute("tabindex", 0);
    this._self.focus();
  }

  setVisible(isVisible) {
    if (isVisible) {
      this._self.removeAttribute("hidden");
    } else {
      this._self.setAttribute("hidden", true);
    }
  }
}
