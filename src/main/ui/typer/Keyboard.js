import { Container } from "../../ui/core/Container";
import { Span } from "../../ui/core/Span";

export class Keyboard extends Container {
  constructor() {
    super();
    this.addClassName("keyboard");

    this._btnDict = {
      // row 1
      Backquote: this._buildButton("~", "`"),
      Digit1: this._buildButton("!", "1"),
      Digit2: this._buildButton("@", "2"),
      Digit3: this._buildButton("#", "3"),
      Digit4: this._buildButton("$", "4"),
      Digit5: this._buildButton("%", "5"),
      Digit6: this._buildButton("^", "6"),
      Digit7: this._buildButton("&", "7"),
      Digit8: this._buildButton("*", "8"),
      Digit9: this._buildButton("(", "9"),
      Digit0: this._buildButton(")", "0"),
      Minus: this._buildButton("_", "-"),
      Equal: this._buildButton("+", "="),
      Backspace: this._buildButton("←", "&nbsp;", "btn-tab"),

      // row 2
      Tab: this._buildButton("tab", "&nbsp;", "btn-tab"),
      KeyQ: this._buildButton("Q"),
      KeyW: this._buildButton("W"),
      KeyE: this._buildButton("E"),
      KeyR: this._buildButton("R"),
      KeyT: this._buildButton("T"),
      KeyY: this._buildButton("Y"),
      KeyU: this._buildButton("U"),
      KeyI: this._buildButton("I"),
      KeyO: this._buildButton("O"),
      KeyP: this._buildButton("P"),
      BracketLeft: this._buildButton("{", "["),
      BracketRight: this._buildButton("}", "]"),
      Backslash: this._buildButton("|", "\\"),

      // row 3
      CapsLock: this._buildButton("caps lock", "&nbsp;", "btn-enter"),
      KeyA: this._buildButton("A"),
      KeyS: this._buildButton("S"),
      KeyD: this._buildButton("D"),
      KeyF: this._buildButton("F"),
      KeyG: this._buildButton("G"),
      KeyH: this._buildButton("H"),
      KeyJ: this._buildButton("J"),
      KeyK: this._buildButton("K"),
      KeyL: this._buildButton("L"),
      Semicolon: this._buildButton(":", ";"),
      Quote: this._buildButton('"', "'"),
      Enter: this._buildButton("enter", "&nbsp;", "btn-enter"),

      // row 4
      ShiftLeft: this._buildButton("shift", "&nbsp;", "btn-shift"),
      KeyZ: this._buildButton("Z"),
      KeyX: this._buildButton("X"),
      KeyC: this._buildButton("C"),
      KeyV: this._buildButton("V"),
      KeyB: this._buildButton("B"),
      KeyN: this._buildButton("N"),
      KeyM: this._buildButton("M"),
      Comma: this._buildButton("<", ","),
      Period: this._buildButton(">", "."),
      Slash: this._buildButton("?", "/"),
      ShiftRight: this._buildButton("shift", "&nbsp;", "btn-shift"),

      // row 5
      ControlLeft: this._buildButton("ctl", "&nbsp;", "btn-ctl"),
      AltLeft: this._buildButton("alt", "&nbsp;", "btn-ctl"),
      Space: this._buildButton("&nbsp;", "&nbsp;", "btn-space"),
      ControlRight: this._buildButton("ctl", "&nbsp;", "btn-ctl"),
      AltRight: this._buildButton("alt", "&nbsp;", "btn-ctl")
    };

    this._init();
  }

  get btnDict() {
    return this._btnDict;
  }

  _init() {
    const row1 = this._buildRow(
      this._btnDict.Backquote,
      this._btnDict.Digit1,
      this._btnDict.Digit2,
      this._btnDict.Digit3,
      this._btnDict.Digit4,
      this._btnDict.Digit5,
      this._btnDict.Digit6,
      this._btnDict.Digit7,
      this._btnDict.Digit8,
      this._btnDict.Digit9,
      this._btnDict.Digit0,
      this._btnDict.Minus,
      this._btnDict.Equal,
      this._btnDict.Backspace
    );

    const row2 = this._buildRow(
      this._btnDict.Tab,
      this._btnDict.KeyQ,
      this._btnDict.KeyW,
      this._btnDict.KeyE,
      this._btnDict.KeyR,
      this._btnDict.KeyT,
      this._btnDict.KeyY,
      this._btnDict.KeyT,
      this._btnDict.KeyU,
      this._btnDict.KeyI,
      this._btnDict.KeyO,
      this._btnDict.KeyP,
      this._btnDict.BracketLeft,
      this._btnDict.BracketRight,
      this._btnDict.Backslash
    );

    const row3 = this._buildRow(
      this._btnDict.CapsLock,
      this._btnDict.KeyA,
      this._btnDict.KeyS,
      this._btnDict.KeyD,
      this._btnDict.KeyF,
      this._btnDict.KeyG,
      this._btnDict.KeyH,
      this._btnDict.KeyJ,
      this._btnDict.KeyK,
      this._btnDict.KeyL,
      this._btnDict.Semicolon,
      this._btnDict.Quote,
      this._btnDict.Enter
    );

    const row4 = this._buildRow(
      this._btnDict.ShiftLeft,
      this._btnDict.KeyZ,
      this._btnDict.KeyX,
      this._btnDict.KeyC,
      this._btnDict.KeyV,
      this._btnDict.KeyV,
      this._btnDict.KeyB,
      this._btnDict.KeyN,
      this._btnDict.KeyM,
      this._btnDict.Comma,
      this._btnDict.Period,
      this._btnDict.Slash,
      this._btnDict.ShiftRight
    );

    const row5 = this._buildRow(
      this._btnDict.ControlLeft,
      this._btnDict.AltLeft,
      this._btnDict.Space,
      this._btnDict.ControlRight,
      this._btnDict.AltRight
    );

    this.add(row1, row2, row3, row4, row5);
  }

  // args: btns of row
  _buildRow() {
    const row = new Container();
    row.addClassName("row");
    row.addClassName("align-center");
    for (const btn of arguments) {
      row.add(btn);
    }
    return row;
  }

  _buildButton(char1, char2 = "&nbsp;", className = "btn") {
    const btn = new Container();
    btn.addClassName(className);
    btn.add(new Span(char1));
    btn.add(new Span(char2));
    return btn;
  }
}
