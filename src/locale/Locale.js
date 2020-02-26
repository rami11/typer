export class Locale {
  constructor() {
    this._languageCode = "en";

    let urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get("lang");
    if (lang) {
      this._languageCode = lang;
    }
  }

  get languageCode() {
    return this._languageCode;
  }

  static getInstance() {
    if (!this._locale) {
      this._locale = new Locale();
    }
    return this._locale;
  }
}
