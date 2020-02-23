export class Component {
  constructor(type = "div") {
    this._self = document.createElement(type);
    this.setPadding(false);
  }

  setId(id) {
    this._self.id = id;
  }

  addClassName(className) {
    this._self.classList.add(className);
  }

  removeClassName(className) {
    this._self.classList.remove(className);
  }

  addListener(type, event = () => {}) {
    this._self.addEventListener(type, event);
  }

  // visibility & focus

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

  // width, height

  setWidth(width) {
    this._self.style.width = width;
  }

  setHeight(height) {
    this._self.style.height = height;
  }

  // margin, padding

  setPadding(isSet, isSmall = false) {
    if (isSet) {
      isSmall
        ? this.addClassName("has-small-padding")
        : this.addClassName("has-padding");
    } else {
      this.removeClassName("has-padding");
      this.removeClassName("has-small-padding");
    }
  }

  setMargin(isSet, isSmall = false) {
    if (isSet) {
      isSmall
        ? this.addClassName("has-small-margin")
        : this.addClassName("has-margin");
    } else {
      this.removeClassName("has-margin");
      this.removeClassName("has-small-margin");
    }
  }
}
