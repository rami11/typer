import { I18n } from "../../locale/I18n";
import { Span } from "../core/Span";
import { Container } from "../core/Container";

export class Summary extends Container {
  constructor(presenter) {
    super();
    this.setId("summary-block");
    this.setPadding(true);
    this.setHorizontal();
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
    let smallBlock = new Container();
    smallBlock.addClassName("block-primary");

    let errorLabel = new Span();
    errorLabel.setId("errors_label");
    errorLabel.setText(`${I18n.t("errors")} `);

    this._errorSpan = new Span();
    this._errorSpan.setId("error-count");
    this._errorSpan.setText(0);

    smallBlock.add(errorLabel);
    smallBlock.add(this._errorSpan);
    return smallBlock;
  }

  _buildAccuracyBlock() {
    let smallblock = new Container();
    smallblock.setId("accuracy");
    smallblock.addClassName("block-primary");

    let accuracyLabel = new Span();
    accuracyLabel.setId("accuracy-label");
    accuracyLabel.setText(`${I18n.t("accuracy")} `);

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
    let smallblock = new Container();
    smallblock.setId("speed-block");
    smallblock.addClassName("block-primary");

    let label = new Span();
    label.setId("speed-label");
    label.setText(`${I18n.t("speed")} `);

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
