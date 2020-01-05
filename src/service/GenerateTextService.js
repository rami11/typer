class GenerateTextService {
  constructor() {
    this.baseUrl = "http://localhost:5000";

    this.languageCode = "en";
    let urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get("lang");
    if (lang) {
      this.languageCode = lang;
    }
  }

  async exec(callback) {
    const url = `${this.baseUrl}/text/random/${this.languageCode}`;
    try {
      let response = await fetch(url);
      let text = await response.text();

      callback(text);
    } catch (error) {
      console.error(error);
    }
  }
}

export default GenerateTextService;
