import SharedPref from "../util/SharedPref";
import { STRS } from "./strings";
import { TEXTS } from "./texts";

class I18n {
  constructor() {
    let sharedPref = new SharedPref();
    this.languageCode = sharedPref.getLanguageCode();
  }

  generateText() {
    let i = Math.floor(
      Math.random() * Math.floor(TEXTS[this.languageCode].length)
    );
    return TEXTS[this.languageCode][i];
  }

  caption(key) {
    return STRS[this.languageCode][key];
  }

  getLanguageCode() {
    return this.languageCode;
  }

  static getInstance() {
    if (!this.i18n) {
      this.i18n = new I18n();
    }
    return this.i18n;
  }
}

export default I18n;
