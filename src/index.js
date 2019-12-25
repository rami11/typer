import Typer from "./typer/Typer";

class Main {
  constructor() {
    // Theme
    let app = document.querySelector("body");
    app.classList.add("app");

    new Typer("test app.");
  }

  _generateText() {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem risus, ut faucibus magna elementum ut. Quisque sit amet fermentum tellus. Aliquam aliquet sed eros sed mattis. Donec consequat velit ac hendrerit pulvinar. Nam et risus ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse et sapien nisi. Curabitur vitae velit a dui consectetur mattis sit amet at dui. Nullam ac euismod diam. Nam congue nec arcu sed fermentum. Nunc consequat nisi varius, dignissim libero ac, viverra massa.";
  }
}

window.onload = () => {
  new Main();
};
