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

  addClassNames(...classNames) {
    classNames.forEach(className => this._self.classList.add(className));
  }

  removeClassNames(...classNames) {
    classNames.forEach(className => this._self.classList.remove(className));
  }

  addListener(type, event = () => {}) {
    this._self.addEventListener(type, event);
  }

  // visibility & focus

  focus() {
    this._self.setAttribute("tabindex", 0);
    this._self.focus();
  }

  disable() {
    this._self.removeAttribute("tabindex");
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

  setMaxWidth(width) {
    this._self.style.maxWidth = width;
  }

  setMaxHeight(height) {
    this._self.style.maxHeight = height;
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
        ? this.addClassName("has-margin-small")
        : this.addClassName("has-margin");
    } else {
      this.removeClassName("has-margin");
      this.removeClassName("has-margin-small");
    }
  }

  setVerticalMargin(isSet, isSmall = false) {
    if (isSet) {
      isSmall
        ? this.addClassName("has-vertical-margin-small")
        : this.addClassName("has-vertical-margin");
    } else {
      this.removeClassName("has-vertical-margin");
      this.removeClassName("has-vertical-margin-small");
    }
  }
}
