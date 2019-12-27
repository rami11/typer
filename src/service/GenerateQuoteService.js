class GenerateQuoteService {
  async exec() {
    const URL = "http://quotes.rest/qod.json?category=inspire";
    const response = await fetch(URL);
    console.log("response:", response);

    const json = await response.json();

    console.log("json:", json);
    let text = json.contents.quotes[0].quote;
    console.log("text:", text);

    return text;
  }
}

export default GenerateQuoteService;
