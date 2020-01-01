import I18n from "../../locale/I18n";

class LanguageChooser {
  constructor() {
    this.languageChooser = document.querySelector("#language-chooser select");
    this.form = document.querySelector("#form-lang");

    this._init();
  }

  _init() {
    this._updateComponent();

    this.languageChooser.addEventListener("change", () => {
      let languageCode = event.target.selectedOptions[0].value;
      I18n.getInstance().setLanguageCode(languageCode);
      this.form.submit();
    });
  }

  _updateComponent() {
    let languageCode = I18n.getInstance().getLanguageCode();
    for (let option of this.languageChooser.options) {
      if (option.value === languageCode) {
        option.setAttribute("selected", true);
      } else {
        option.removeAttribute("selected");
      }
    }
    let html = document.querySelector("html");
    html.setAttribute("lang", languageCode);
  }
}

export default LanguageChooser;
