import { Div } from "../core/Div";
import { Span } from "../core/Span";

export class ProgressBar extends Div {
  constructor() {
    super();
    this.addClassName("progress-bar");
    this.setVisible(false);
  }
}
