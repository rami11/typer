import { I18n } from "../../locale/I18n";
import { Span } from "../core/Span";
import { Div } from "../core/Div";

export class Summary extends Div {
  constructor(presenter) {
    super();
    this.setId("summary-block");
    this._presenter = presenter;

    this._init();
  }

  _init() {
    let errorBlock = this._buildErrorBlock();
    let accuracyBlock = this._buildAccuracyBlock();
    let speedBlock = this._buildSpeedBlock();

    this.add(errorBlock);
    this.add(accuracyBlock);
    this.add(speedBlock);
  }

  _buildErrorBlock() {
    let smallBlock = new Div();
    smallBlock.addClassName("small-block");

    let errorLabel = new Span();
    errorLabel.setId("errors_label");
    errorLabel.setText(`${I18n.getInstance().translate("errors")} `);

    this._errorSpan = new Span();
    this._errorSpan.setId("error-count");
    this._errorSpan.setText(0);

    smallBlock.add(errorLabel);
    smallBlock.add(this._errorSpan);
    return smallBlock;
  }

  _buildAccuracyBlock() {
    let smallblock = new Div();
    smallblock.setId("accuracy");
    smallblock.addClassName("small-block");

    let accuracyLabel = new Span();
    accuracyLabel.setId("accuracy-label");
    accuracyLabel.setText(`${I18n.getInstance().translate("accuracy")} `);

    this._accuracySpan = new Span();
    this._accuracySpan.setId("accuracy-value");
    this._accuracySpan.setText(100);
    let unitSpan = new Span("%");

    smallblock.add(accuracyLabel);
    smallblock.add(this._accuracySpan);
    smallblock.add(unitSpan);
    return smallblock;
  }

  _buildSpeedBlock() {
    let smallblock = new Div();
    smallblock.setId("speed-block");
    smallblock.addClassName("small-block");

    let label = new Span();
    label.setId("speed-label");
    label.setText(`${I18n.getInstance().translate("speed")} `);

    this._speedSpan = new Span();
    this._speedSpan.setId("speed");
    this._speedSpan.setText(0);
    let unitSpan = new Span(" CPM");

    smallblock.add(label);
    smallblock.add(this._speedSpan);
    smallblock.add(unitSpan);
    return smallblock;
  }

  updateErrorSpan(errorCount) {
    this._errorSpan.setText(errorCount);
  }

  updateAccuracySpan(accuracy) {
    this._accuracySpan.setText(accuracy);
  }

  updateSpeedSpan(speed) {
    this._speedSpan.setText(speed);
  }
}
