import { Component } from "./Component";

export class Icon extends Component {
  constructor(faName) {
    super("i");
    this.addClassName("fa");
    this.addClassName(`fa-${faName}`);
  }
}
