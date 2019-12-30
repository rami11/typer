import Typer from "./typer/Typer";
import GenerateQuoteService from "./service/GenerateQuoteService";

class Main {
  constructor() {
    this.TEXTS = [
      "This is text no 1.",
      "Here is another text",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem risus, ut faucibus magna elementum ut. Quisque sit amet fermentum tellus. Aliquam aliquet sed eros sed mattis. Donec consequat velit ac hendrerit pulvinar. Nam et risus ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse et sapien nisi. Curabitur vitae velit a dui consectetur mattis sit amet at dui. Nullam ac euismod diam. Nam congue nec arcu sed fermentum. Nunc consequat nisi varius, dignissim libero ac, viverra massa."
    ];

    // Theme
    let app = document.querySelector("body");
    app.classList.add("app");

    let footer = document.querySelector("footer");
    let yearSpan = footer.querySelector("span");
    yearSpan.innerHTML = new Date().getFullYear();

    // let text = new GenerateQuoteService().exec().then(text => {
    //   new Typer(text);
    // });

    new Typer(this._generateText());
  }

  _generateText() {
    let i = Math.floor(Math.random() * Math.floor(this.TEXTS.length));
    return this.TEXTS[i];
  }
}

window.onload = () => {
  new Main();
};
