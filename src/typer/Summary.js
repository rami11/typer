class Summary {
  constructor() {
    /* errors */
    this.errorSpan = document.querySelector("#error-block span");
    this.errorCount = 0;
    this.errorSpan.innerHTML = this.errorCount;
  }

  increaseErrorCount() {
    this.errorCount++;
    this.errorSpan.innerHTML = this.errorCount;
  }
}

export default Summary;
