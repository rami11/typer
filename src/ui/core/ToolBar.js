import { Container } from "./Container";

export class Toolbar extends Container {
  constructor() {
    super();

    this._init();
  }

  _init() {
    this.addClassName("toolbar");

    this._leftSide = new Container();
    this._leftSide.addClassName("left-side");

    this._rightSide = new Container();
    this._rightSide.addClassName("right-side");

    this.add(this._leftSide);
    this.add(this._rightSide);
  }

  addLeftElement(element) {
    this._leftSide.add(element);
  }

  addRightElement(element) {
    this._rightSide.add(element);
  }
}
