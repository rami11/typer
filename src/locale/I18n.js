import SharedPref from "../util/SharedPref";

class I18n {
  constructor() {
    let sharedPref = new SharedPref();
    this.languageCode = sharedPref.getLanguageCode();

    this.TEXTS = {
      en: ["Short text.", "Here is another text in english."],
      fr: ["En francais", "C'est un autre texte."]
    };

    this.CAPTIONS = {
      en: {
        errors: "Errors",
        speed: "Speed",
        reset: "Reset"
      },
      fr: {
        errors: "Erreurs",
        speed: "Vitesse",
        reset: "Réinitialiser"
      }
    };
  }

  generateText() {
    let i = Math.floor(
      Math.random() * Math.floor(this.TEXTS[this.languageCode].length)
    );
    let text = this.TEXTS[this.languageCode][i];
    console.log("i:", i, "text:", text);

    return text;
  }

  caption(key) {
    return this.CAPTIONS[this.languageCode][key];
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
