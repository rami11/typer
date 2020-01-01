import { STRS } from "./strings";
import { TEXTS } from "./texts";

class I18n {
  constructor() {
    this.languageCode = "en";
    let urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get("lang");
    if (lang) {
      this.languageCode = lang;
    }
  }

  static getInstance() {
    if (!this.i18n) {
      this.i18n = new I18n();
    }
    return this.i18n;
  }

  translate(key) {
    return STRS[this.languageCode][key];
  }

  setLanguageCode(languageCode) {
    this.languageCode = languageCode;
  }

  getLanguageCode() {
    return this.languageCode;
  }

  generateText() {
    let i = Math.floor(
      Math.random() * Math.floor(TEXTS[this.languageCode].length)
    );
    return TEXTS[this.languageCode][i];
  }
}

export default I18n;
