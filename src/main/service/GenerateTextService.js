import { apiUrl } from "../../../conf";

export class GenerateTextService {
  constructor() {
    this._languageCode = "en";

    let urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get("lang");
    if (lang) {
      this._languageCode = lang;
    }
  }

  async exec() {
    const url = `${apiUrl}/text/random/${this._languageCode}`;
    let response = await fetch(url);

    if (response.ok) {
      let text = await response.json();
      return text;
    } else {
      throw `${response.status}: ${response.statusText}`;
    }
  }
}
