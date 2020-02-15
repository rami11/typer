export class Component {
  constructor(type = "div") {
    this._self = document.createElement(type);
  }

  setId(id) {
    this._self.id = id;
  }

  setWidth(width) {
    this._self.style.width = width;
  }

  setHeight(height) {
    this._self.style.height = height;
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

  setVisibleKeepSpace(isVisible) {
    this._self.style.visibility = isVisible ? "visible" : "hidden";
  }
}