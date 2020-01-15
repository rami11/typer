export class GenerateTextService {
  constructor() {
    this.baseUrl = "http://localhost:5000";

    this.languageCode = "en";
    let urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get("lang");
    if (lang) {
      this.languageCode = lang;
    }
  }

  async exec() {
    const url = `${this.baseUrl}/text/random/${this.languageCode}`;
    let response = await fetch(url);

    if (response.ok) {
      let text = await response.json();
      return text;
    } else {
      throw `${response.status}: ${response.statusText}`;
    }
  }
}
