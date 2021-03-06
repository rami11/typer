import { Locale } from "../../locale/Locale";
import { Container } from "../core/Container";
import { Select } from "../core/Select";

export class LanguageChooser extends Container {
  constructor() {
    super();
    this.setId("#language-chooser");

    this._languageCode = Locale.getInstance().languageCode;

    this._init();
  }

  _init() {
    this._form = document.createElement("form");
    this._form.id = "form-lang";
    this._form.innerHTML += '<i class="fa fa-language"></i> ';
    this._self.appendChild(this._form);

    this._select = this._buildSelect();
    this._form.appendChild(this._select._self);

    this._updateComponent();

    this._select.onChange(() => {
      let languageCode = event.target.selectedOptions[0].value;
      this._languageCode = languageCode;
      this._form.submit();
    });
  }

  _buildSelect() {
    let select = new Select();
    select.setName("lang");
    let enOption = new Option("En", "en");
    let frOption = new Option("Fr", "fr");
    select.addOption(enOption);
    select.addOption(frOption);
    return select;
  }

  _updateComponent() {
    const languageCode = this._languageCode;
    for (let option of this._select.options) {
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
