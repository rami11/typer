import { Container } from "./Container";

export class ToolBar extends Container {
  constructor() {
    super("ul");
    this.addClassName("toolbar");
  }

  addLeftElement(element) {
    let li = new Container("li");
    li.add(element);
    this.add(li);
  }
}
