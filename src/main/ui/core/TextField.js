import { Field } from "./Field";

export class TextField extends Field {
  constructor(name) {
    super("text", name);
  }
}
